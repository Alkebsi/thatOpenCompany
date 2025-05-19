import"./modulepreload-polyfill-B5Qt9EMX.js";import{T as m,C as c,W as l,S as d,a as p,b,G as f,I as g,F as w,z as u,m as C}from"./index-DuhC6bpl.js";import{b as L}from"./index-BP_fQF8x.js";import{t as v}from"./index-pvAWKRMw.js";import"./lit-html-CuBe1DX_.js";m.init();const e=new c,I=e.get(l),n=I.create(),s=new d(e);s.setup();n.scene=s;const a=document.createElement("bim-viewport"),r=new p(e,a);n.renderer=r;const i=new b(e);n.camera=i;a.addEventListener("resize",()=>{r.resize(),i.updateAspect()});const S=e.get(f);S.create(n);e.init();const z=e.get(g);await z.setup();const F=e.get(w);F.onFragmentsLoaded.add(t=>{n.scene&&n.scene.three.add(t)});const[M]=v.modelsList({components:e,tags:{schema:!0,viewDefinition:!1},actions:{download:!1}}),y=u.create(()=>{const[t]=L.loadIfc({components:e});return C`
   <bim-panel label="IFC Models">
    <bim-panel-section label="Importing">
      ${t}
    </bim-panel-section>
    <bim-panel-section icon="mage:box-3d-fill" label="Loaded Models">
      ${M}
    </bim-panel-section>
   </bim-panel> 
  `}),o=document.createElement("bim-grid");o.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:y,viewport:a}}};o.layout="main";document.body.append(o);
