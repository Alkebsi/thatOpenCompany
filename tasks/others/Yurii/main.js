/**
 * Perspective-camera version: a 16:9 plane inside a full-screen WebGL canvas.
 * Layout rule:
 *  - Default: plane is anchored to the right (right edge gap).
 *  - If anchoring would push the plane's left edge within leftThresholdPx of left screen edge,
 *    switch to centering the plane horizontally.
 *
 * Usage:
 *  - Replace `placeholderMaterial` with your ShaderMaterial (it must render on a plane that faces the camera).
 *  - Call `onResize()` on container resizes (this script already hooks window resize).
 *
 * Notes:
 *  - The code positions and scales the mesh in world units so that its on-screen pixel size
 *    matches a computed pixel target (pw x ph). This uses the perspective frustum at the plane's distance.
 */

import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

const container = document.getElementById('app');

// ----- Config / constants -----
const PLANE_W = 16; // geometry units (we create 16 x 9 plane)
const PLANE_H = 9;
const config = {
  normalFraction: 0.40,      // preferred plane width as fraction of viewport width when anchored
  rightGapPx: 24,            // px gap from right edge when anchored
  leftThresholdPx: 32,       // px threshold from left edge to trigger centering
  maxPlaneWidthPx: 1200,     // max plane width in px
  minPlaneWidthPx: 260       // min plane width in px
};

// ----- Renderer, scene, camera -----
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(container.clientWidth, container.clientHeight, false);
container.appendChild(renderer.domElement);

const scene = new THREE.Scene();

// Perspective camera. We place camera at positive z looking at origin; plane sits at z=0.
const CAMERA_Z = 20; // distance from plane; tune if your shaders need different parallax
const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.set(0, 0, CAMERA_Z);
camera.lookAt(0, 0, 0);

// ----- Geometry + Material -----
// Unit geometry: 16 x 9 units (so scale 1 means 16 units wide)
const geometry = new THREE.PlaneGeometry(PLANE_W, PLANE_H);

// Placeholder ShaderMaterial — replace with your material. Keep uniform u_resolution if needed.
const placeholderMaterial = new THREE.ShaderMaterial({
  uniforms: {
    u_time: { value: 0.0 },
    u_resolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) }
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */`
    precision highp float;
    uniform vec2 u_resolution;
    varying vec2 vUv;
    void main() {
      vec2 uv = vUv;
      vec3 c = mix(vec3(0.02,0.06,0.13), vec3(0.0,0.5,0.8), uv.x);
      gl_FragColor = vec4(c, 1.0);
    }
  `
});

// If you already have a ShaderMaterial: replace `placeholderMaterial` below with yourMaterial.
const material = placeholderMaterial;

const plane = new THREE.Mesh(geometry, material);
// Ensure plane faces camera (plane normal along -Z if camera positive Z)
plane.position.set(0, 0, 0);
scene.add(plane);

// ----- Helpers: projection math for perspective camera -----
// Frustum size (world units) at distance d from camera:
//   frustumHeight = 2 * d * tan(fov/2)
//   frustumWidth = frustumHeight * (canvasWidth / canvasHeight)
function getFrustumSizeAtDistance(d, fovDeg, canvasW, canvasH) {
  const fovRad = THREE.MathUtils.degToRad(fovDeg);
  const frustumHeight = 2 * d * Math.tan(fovRad / 2);
  const frustumWidth = frustumHeight * (canvasW / canvasH);
  return { frustumWidth, frustumHeight };
}

// Convert a pixel X (0..viewW) at plane distance d to world X coordinate (origin-centered)
function pixelXToWorldX(pixelX, viewW, viewH, d) {
  const { frustumWidth } = getFrustumSizeAtDistance(d, camera.fov, viewW, viewH);
  // pixel center is viewW/2 -> worldX = 0
  const nx = (pixelX - viewW / 2) / viewW; // -0.5 .. 0.5
  return nx * frustumWidth;
}

// Convert a pixel Y (0..viewH, top=0) to world Y coordinate
function pixelYToWorldY(pixelY, viewW, viewH, d) {
  const { frustumHeight } = getFrustumSizeAtDistance(d, camera.fov, viewW, viewH);
  // pixel top is 0 -> worldY = +frustumHeight/2
  const ny = (viewH / 2 - pixelY) / viewH; // 0.5 .. -0.5
  return ny * frustumHeight;
}

// Given desired pixel width (pw) compute the world width at plane distance and the scale for geometry
function setPlaneWidthInPixels(pw, viewW, viewH, d) {
  const { frustumWidth } = getFrustumSizeAtDistance(d, camera.fov, viewW, viewH);
  const worldPlaneWidth = (pw / viewW) * frustumWidth;
  const scale = worldPlaneWidth / PLANE_W;
  plane.scale.set(scale, scale, 1);
  return { worldPlaneWidth, scale };
}

// ----- Layout logic -----
// Compute target pw,ph in pixels using config and viewport
function computeDesiredPlaneSizePx(viewW, viewH) {
  let pw = Math.round(viewW * config.normalFraction);
  pw = Math.min(pw, config.maxPlaneWidthPx);
  pw = Math.max(pw, config.minPlaneWidthPx);

  // compute corresponding height from 16:9 aspect
  let ph = Math.round(pw * (PLANE_H / PLANE_W));

  // if height too tall to fit viewport, scale down to fit with small vertical margin
  const vMargin = 32;
  if (ph > (viewH - vMargin)) {
    const scale = (viewH - vMargin) / ph;
    pw = Math.round(pw * scale);
    ph = Math.round(ph * scale);
  }

  return { pw, ph };
}

/**
 * Update the plane layout: set scale and position (right-anchored or centered).
 * This does not change camera (camera aspect must be updated separately).
 */
function updatePlaneLayout() {
  const viewW = container.clientWidth;
  const viewH = container.clientHeight;
  const d = Math.abs(camera.position.z - plane.position.z); // distance from camera to plane

  // desired pixel size
  const { pw, ph } = computeDesiredPlaneSizePx(viewW, viewH);

  // set scale so plane occupies pw x ph pixels on screen
  const { worldPlaneWidth } = setPlaneWidthInPixels(pw, viewW, viewH, d);

  // determine right-anchored center pixel X
  const rightAnchoredCenterPx = viewW - config.rightGapPx - pw / 2;
  const leftEdgePx_whenRightAnchored = rightAnchoredCenterPx - pw / 2;

  // if left edge gets too close to left edge of screen, center it instead
  let finalCenterPxX = rightAnchoredCenterPx;
  let usingCentered = false;
  if (leftEdgePx_whenRightAnchored < config.leftThresholdPx) {
    finalCenterPxX = viewW / 2; // center
    usingCentered = true;
  }

  // map center pixel to world coordinates
  const worldX = pixelXToWorldX(finalCenterPxX, viewW, viewH, d);
  const worldY = pixelYToWorldY(viewH / 2, viewW, viewH, d); // we keep vertical centered

  plane.position.x = worldX;
  plane.position.y = worldY;

  // update any shader resolution uniform if present
  if (material && material.uniforms && material.uniforms.u_resolution) {
    material.uniforms.u_resolution.value.set(viewW, viewH);
  }

  // render once (no animation loop required)
  renderer.render(scene, camera);

  return { pw, ph, usingCentered, finalCenterPxX, leftEdgePx_whenRightAnchored };
}

// ----- Resize handler -----
function onResize() {
  const w = container.clientWidth;
  const h = container.clientHeight;

  // update renderer
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(w, h, false);

  // update camera aspect; we keep camera.position.z fixed (CAMERA_Z)
  camera.aspect = w / h;
  camera.updateProjectionMatrix();

  // update layout of plane based on new viewport
  const layout = updatePlaneLayout();
  // (optional) console.debug('layout', layout);
}

// initial sizing
onResize();

// hook resize events
window.addEventListener('resize', onResize, { passive: true });

// ----- Export / utility: allow user to plug their own material -----
// If you'd like to use your existing ShaderMaterial, call setPlaneMaterial(yourMaterial)
export function setPlaneMaterial(yourMaterial) {
  if (!yourMaterial || !(yourMaterial.isMaterial)) {
    console.warn('setPlaneMaterial: provided object is not a three.js Material');
    return;
  }
  plane.material.dispose();
  plane.material = yourMaterial;
  // update shader uniforms that might be expected
  if (plane.material.uniforms && plane.material.uniforms.u_resolution) {
    plane.material.uniforms.u_resolution.value.set(container.clientWidth, container.clientHeight);
  }
  // re-render with new material
  updatePlaneLayout();
}

// If you want to programmatically trigger a re-layout (for example after you change config),
// call updatePlaneLayout() or onResize().
window.__updatePlaneLayout = updatePlaneLayout; // debug hook