import"./modulepreload-polyfill-B5Qt9EMX.js";import{z as w,C as x,W as v,S as y,a as h,b as C,G as S,I as T,n as I,r as P,R as E,m as A}from"./index-CvwIbfmY.js";import{t as L}from"./index-TYO8TGTx.js";import"./lit-html-CuBe1DX_.js";w.init();const s=document.createElement("bim-viewport"),e=new x,$=e.get(v),n=$.create(),c=new y(e);c.setup();n.scene=c;const d=new h(e,s);n.renderer=d;const i=new C(e);n.camera=i;i.controls.setLookAt(10,5.5,5,-4,-1,-6.5);s.addEventListener("resize",()=>{d.resize(),i.updateAspect()});e.init();const z=e.get(S);z.create(n);const m=e.get(T);await m.setup();const R=await fetch("https://thatopen.github.io/engine_ui-components/resources/small.ifc"),k=await R.arrayBuffer(),G=new Uint8Array(k),u=await m.load(G);n.scene.three.add(u);const M=e.get(I);await M.process(u);const[t,b]=L.elementProperties({components:e,fragmentIdMap:{}});t.preserveStructureOnFilter=!0;t.indentationInText=!1;const p=e.get(P);p.setup({world:n});p.events.select.onHighlight.add(r=>{b({fragmentIdMap:r})});p.events.select.onClear.add(()=>b({fragmentIdMap:{}}));const V=E.create(()=>{const r=o=>{const a=o.target;t.queryString=a.value!==""?a.value:null},f=o=>{const a=o.target;t.expanded=!t.expanded,a.label=t.expanded?"Collapse":"Expand"},g=async()=>{await navigator.clipboard.writeText(t.tsv)};return A`
    <bim-panel label="Properties">
      <bim-panel-section label="Element Data">
        <div style="display: flex; gap: 0.5rem;">
          <bim-button @click=${f} label=${t.expanded?"Collapse":"Expand"}></bim-button> 
          <bim-button @click=${g} label="Copy as TSV"></bim-button> 
        </div> 
        <bim-text-input @input=${r} placeholder="Search Property" debounce="250"></bim-text-input>
        ${t}
      </bim-panel-section>
    </bim-panel>
  `}),l=document.createElement("bim-grid");l.layouts={main:{template:`
    "propertiesPanel viewport"
    /25rem 1fr
    `,tabletTemplate:`
      "viewport" 1fr
      "propertiesPanel" 1fr
      / 1fr
    `,elements:{propertiesPanel:V,viewport:s}}};l.layout="main";document.body.append(l);
