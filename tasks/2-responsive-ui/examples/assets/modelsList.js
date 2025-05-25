import"./modulepreload-polyfill-B5Qt9EMX.js";import{z as m,C as c,W as l,S as p,a as d,b,G as f,I as w,F as g,R as u,m as v}from"./index-CvwIbfmY.js";import{b as C}from"./index-DEg893xI.js";import{t as L}from"./index-TYO8TGTx.js";import"./lit-html-CuBe1DX_.js";m.init();const e=new c,I=e.get(l),t=I.create(),s=new p(e);s.setup();t.scene=s;const a=document.createElement("bim-viewport"),r=new d(e,a);t.renderer=r;const i=new b(e);t.camera=i;a.addEventListener("resize",()=>{r.resize(),i.updateAspect()});const S=e.get(f);S.create(t);e.init();const z=e.get(w);await z.setup();const F=e.get(g);F.onFragmentsLoaded.add(n=>{t.scene&&t.scene.three.add(n)});const[M]=L.modelsList({components:e,tags:{schema:!0,viewDefinition:!1},actions:{download:!1}}),y=u.create(()=>{const[n]=C.loadIfc({components:e});return v`
   <bim-panel label="IFC Models">
    <bim-panel-section label="Importing">
      ${n}
    </bim-panel-section>
    <bim-panel-section icon="mage:box-3d-fill" label="Loaded Models">
      ${M}
    </bim-panel-section>
   </bim-panel> 
  `}),o=document.createElement("bim-grid");o.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,tabletTemplate:`
      "viewport" 1fr
      "panel" 1fr
      / 1fr
    `,elements:{panel:y,viewport:a}}};o.layout="main";document.body.append(o);
