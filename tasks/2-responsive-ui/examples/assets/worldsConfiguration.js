import"./modulepreload-polyfill-B5Qt9EMX.js";import{z as d,C as p,W as m,S as u,i as f,b,G as w,j as g,I as h,R as v,m as y}from"./index-CvwIbfmY.js";import{t as C}from"./index-TYO8TGTx.js";import"./lit-html-CuBe1DX_.js";d.init();const a=document.createElement("bim-viewport"),t=new p,x=t.get(m),e=x.create();e.name="Default World";e.scene=new u(t);e.scene.three.background=null;e.scene.setup();e.renderer=new f(t,a);const{postproduction:r}=e.renderer;e.camera=new b(t);e.camera.controls.setLookAt(1.5,1.4,.12,-3.5,-.5,-7);a.addEventListener("resize",()=>{e.renderer&&e.renderer.resize(),e.camera.updateAspect()});t.init();const S=t.get(w),i=S.create(e);i.material.uniforms.uColor.value=new g("#4D4D4D");const l=t.get(h);await l.setup();const A=await fetch("https://thatopen.github.io/engine_ui-components/resources/small.ifc"),W=await A.arrayBuffer(),z=new Uint8Array(W),D=await l.load(z);e.scene.three.add(D);r.enabled=!0;r.customEffects.excludedMeshes.push(i.three);r.setPasses({ao:!0});const[n]=C.worldsConfiguration({components:t}),E=v.create(()=>y`
    <bim-panel label="App Config">
      <bim-panel-section label="Worlds">
        <div style="display: flex; gap: 0.5rem;">
          <bim-text-input @input=${c=>{const s=c.target;n.queryString=s.value!==""?s.value:null}} placeholder="Search..."></bim-text-input>
          <bim-button style="flex: 0;" @click=${()=>{n.expanded=!n.expanded}} icon="eva:expand-outline"></bim-button> 
        </div> 
        ${n}
      </bim-panel-section>
    </bim-panel>
  `),o=document.createElement("bim-grid");o.layouts={main:{template:`
    "worldsConfigPanel viewport"
    /26rem 1fr
    `,tabletTemplate:`
    "viewport" 1fr
    "worldsConfigPanel" 1fr
    / 1fr
    `,elements:{worldsConfigPanel:E,viewport:a}}};o.layout="main";document.body.append(o);
