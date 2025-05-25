import"./modulepreload-polyfill-B5Qt9EMX.js";import{z as l,C as p,W as d,S as f,a as b,b as w,G as g,I as y,F as u,s as C,R as T,m as v}from"./index-CvwIbfmY.js";import{b as E}from"./index-DEg893xI.js";import{t as I}from"./index-TYO8TGTx.js";import"./lit-html-CuBe1DX_.js";l.init();const e=new p,a=document.createElement("bim-viewport");a.name="viewer";const L=e.get(d),s=L.create(),o=new f(e);o.setup();s.scene=o;const r=new b(e,a);s.renderer=r;const c=new w(e);s.camera=c;a.addEventListener("resize",()=>{r.resize(),c.updateAspect()});const S=e.get(g);S.create(s);e.init();const z=e.get(y);await z.setup();const m=e.get(u);m.onFragmentsLoaded.add(t=>{s.scene&&s.scene.three.add(t)});const[F,G]=I.classificationTree({components:e,classifications:[]}),i=e.get(C);m.onFragmentsLoaded.add(async t=>{i.byEntity(t),await i.byPredefinedType(t),G({classifications:[{system:"entities",label:"Entities"},{system:"predefinedTypes",label:"Predefined Types"}]})});const R=T.create(()=>{const[t]=E.loadIfc({components:e});return v`
   <bim-panel label="Classifications Tree">
    <bim-panel-section label="Importing">
      ${t}
    </bim-panel-section>
    <bim-panel-section label="Classifications">
      ${F}
    </bim-panel-section>
   </bim-panel> 
  `}),n=document.createElement("bim-grid");n.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,tabletTemplate:`
      "viewport" 1fr
      "panel" 1fr
      / 1fr
    `,elements:{panel:R,viewport:a}}};n.layout="main";document.body.append(n);
