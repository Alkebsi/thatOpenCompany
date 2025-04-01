import"./modulepreload-polyfill-B5Qt9EMX.js";import{T as u,C as g,W as b,S as f,a as w,b as S,G as h,I as v,r as I,F as T,n as y,R as C,m as L}from"./index-DcTK3C3j.js";import{b as F}from"./index-BINB8EQ-.js";import{t as R}from"./index-CiTduo9s.js";import"./lit-html-CuBe1DX_.js";u.init();const e=new g,x=e.get(b),t=x.create(),o=new f(e);o.setup();t.scene=o;const r=document.createElement("bim-viewport"),s=new w(e,r);t.renderer=s;const i=new S(e);t.camera=i;r.addEventListener("resize",()=>{s.resize(),i.updateAspect()});const z=e.get(h);z.create(t);e.init();const E=e.get(v);await E.setup();const c=e.get(I);c.setup({world:t});c.zoomToSelection=!0;const m=e.get(T);m.onFragmentsLoaded.add(async n=>{t.scene&&t.scene.three.add(n)});const G=e.get(y);m.onFragmentsLoaded.add(async n=>{n.hasProperties&&await G.process(n)});const[a]=R.relationsTree({components:e,models:[]});a.preserveStructureOnFilter=!0;const M=C.create(()=>{const[n]=F.loadIfc({components:e});return L`
   <bim-panel label="Relations Tree">
    <bim-panel-section label="Model Tree">
      ${n}
      <bim-text-input @input=${l=>{const d=l.target;a.queryString=d.value}} placeholder="Search..." debounce="200"></bim-text-input>
      ${a}
    </bim-panel-section>
   </bim-panel> 
  `}),p=document.getElementById("app");p.layouts={main:{template:`
      "panel viewport"
      / 30rem 1fr
    `,elements:{panel:M,viewport:r}}};p.layout="main";
