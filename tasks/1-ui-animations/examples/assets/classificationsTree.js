import"./modulepreload-polyfill-B5Qt9EMX.js";import{T as l,C as p,W as d,S as f,a as b,b as g,G as w,I as y,F as u,s as C,z as T,m as v}from"./index-idw5LRic.js";import{b as E}from"./index-DQUBnDHC.js";import{t as I}from"./index-DSqQcVau.js";import"./lit-html-CuBe1DX_.js";l.init();const e=new p,n=document.createElement("bim-viewport");n.name="viewer";const L=e.get(d),t=L.create(),o=new f(e);o.setup();t.scene=o;const r=new b(e,n);t.renderer=r;const c=new g(e);t.camera=c;n.addEventListener("resize",()=>{r.resize(),c.updateAspect()});const S=e.get(w);S.create(t);e.init();const z=e.get(y);await z.setup();const m=e.get(u);m.onFragmentsLoaded.add(s=>{t.scene&&t.scene.three.add(s)});const[F,G]=I.classificationTree({components:e,classifications:[]}),i=e.get(C);m.onFragmentsLoaded.add(async s=>{i.byEntity(s),await i.byPredefinedType(s),G({classifications:[{system:"entities",label:"Entities"},{system:"predefinedTypes",label:"Predefined Types"}]})});const M=T.create(()=>{const[s]=E.loadIfc({components:e});return v`
   <bim-panel label="Classifications Tree">
    <bim-panel-section label="Importing">
      ${s}
    </bim-panel-section>
    <bim-panel-section label="Classifications">
      ${F}
    </bim-panel-section>
   </bim-panel> 
  `}),a=document.createElement("bim-grid");a.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:M,viewport:n}}};a.layout="main";document.body.append(a);
