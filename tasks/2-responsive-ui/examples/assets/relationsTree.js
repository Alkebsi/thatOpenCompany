import"./modulepreload-polyfill-B5Qt9EMX.js";import{z as u,C as g,W as b,S as f,a as w,b as S,G as h,I as v,r as I,F as y,n as C,R as L,m as T}from"./index-CvwIbfmY.js";import{b as z}from"./index-DEg893xI.js";import{t as F}from"./index-TYO8TGTx.js";import"./lit-html-CuBe1DX_.js";u.init();const e=new g,R=e.get(b),t=R.create(),o=new f(e);o.setup();t.scene=o;const r=document.createElement("bim-viewport"),s=new w(e,r);t.renderer=s;const i=new S(e);t.camera=i;r.addEventListener("resize",()=>{s.resize(),i.updateAspect()});const x=e.get(h);x.create(t);e.init();const E=e.get(v);await E.setup();const c=e.get(I);c.setup({world:t});c.zoomToSelection=!0;const p=e.get(y);p.onFragmentsLoaded.add(async n=>{t.scene&&t.scene.three.add(n)});const G=e.get(C);p.onFragmentsLoaded.add(async n=>{n.hasProperties&&await G.process(n)});const[a]=F.relationsTree({components:e,models:[]});a.preserveStructureOnFilter=!0;const M=L.create(()=>{const[n]=z.loadIfc({components:e});return T`
   <bim-panel label="Relations Tree">
    <bim-panel-section label="Model Tree">
      ${n}
      <bim-text-input @input=${l=>{const d=l.target;a.queryString=d.value}} placeholder="Search..." debounce="200"></bim-text-input>
      ${a}
    </bim-panel-section>
   </bim-panel> 
  `}),m=document.getElementById("app");m.layouts={main:{template:`
      "panel viewport"
      / 30rem 1fr
    `,tabletTemplate:`
      "viewport" 1fr
      "panel" 1fr
      / 1fr
    `,elements:{panel:M,viewport:r}}};m.layout="main";
