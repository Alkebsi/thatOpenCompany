import"./modulepreload-polyfill-B5Qt9EMX.js";import{M as c,C as n,T as d,a as s}from"./index-BOcTN4PL.js";import"./state-VyZkHw6A.js";import{x as o}from"./lit-html-CuBe1DX_.js";import"./ref-DfidMTJ6.js";c.init();const a=document.createElement("bim-table");a.expanded=!0;a.data=[{data:{Class:"IfcWall",PredefinedType:"EXTERNAL",Name:"Exterior Wall",Description:"Main structural exterior wall",LoadBearing:!0,Area:45.5},children:[{data:{Class:"IfcWindow",PredefinedType:"STANDARD",Name:"Office Window",Description:"Double-pane office window",LoadBearing:!1,Area:3.6}}]},{data:{Class:"IfcDoor",PredefinedType:"SINGLE_SWING_RIGHT",Name:"Entrance Door",Description:"Main entrance door",LoadBearing:!1,Area:2.1}},{data:{Class:"IfcColumn",PredefinedType:"ROUND",Name:"Support Column",Description:"Load-bearing column in lobby",LoadBearing:!0,Area:1.2}},{data:{Class:"IfcSlab",PredefinedType:"FLOOR",Name:"Main Floor Slab",Description:"Primary floor slab for ground level",LoadBearing:!0,Area:150}}];const p=n.create(()=>o`
   <bim-text-input @input=${e=>{const t=e.target;t instanceof d&&(a.queryString=t.value)}} placeholder="Search..."></bim-text-input> 
  `),l=n.create(()=>o`
    <bim-dropdown required style="flex: 0">
      <bim-option label="CSV" value="csv" checked></bim-option>
      <bim-option label="TSV" value="tsv"></bim-option>
      <bim-option label="JSON" value="json"></bim-option>
    </bim-dropdown> 
  `),r=n.create(()=>o`<bim-text-input value="My Data" style="width: 4rem"></bim-text-input>`),m=n.create(()=>o`
    <bim-button @click=${()=>{const e=l.value[0];if(e===void 0)return;const t=r.value.trim()!==""?r.value:void 0;a.downloadData(t,e)}} label="Download" style="flex: 0"></bim-button>
  `),u=n.create(()=>o`
   <bim-checkbox @change=${e=>{const t=e.target;t instanceof s&&(a.indentationInText=t.checked)}} label="Include Indentation" inverted></bim-checkbox> 
  `),b=n.create(()=>o`
   <bim-button @click=${async()=>{const e=l.value[0];e===void 0||e==="json"||(await navigator.clipboard.writeText(a[e]),window.alert("Table data copied as CSV in clipboard!"))}} label="Copy to Clipboard" style="flex: 0"></bim-button> 
  `),f=n.create(()=>o`
    <div style="display: flex; flex-direction: column; gap: 0.75rem; height: 100%;">
      <div style="max-width: 100vw; overflow-x: auto;">
        <div style="display: flex; gap: 0.5rem; min-width: min-content;">
          ${p}
          ${r}
          ${l}
          ${u}
          ${m}
          ${b}
        </div>
      </div>
      ${a}
    </div>
  `);document.body.append(f);
