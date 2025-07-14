import"./modulepreload-polyfill-B5Qt9EMX.js";import{d as Tn,M as Di,W as Je,S as On,X as ma,O as ss,i as R,G as Pn,j as fe,k as Fi,l as Qe,F as Gt,n as mt,e as io,f as fa,L as ba,B as no,g as ga,h as va,I as rs,P as pi,o as Ee,p as ya,D as _a,q as wa,r as xa,s as $a,H as as,t as Ca,c as Aa,V as Sa,u as ka,v as $i,T as wt,w as Ea,x as ls,E as cs,J as Ta,K as ds,N as Oa,Q as Pa,U as us,Y as hs,Z as Ia,_ as Na,z as Ra,C as Ma,a as za,b as La,R as Ze,m as ut}from"./index-DOPpyOxs.js";var ja=Object.defineProperty,Da=(e,t,i)=>t in e?ja(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,zt=(e,t,i)=>(Da(e,typeof t!="symbol"?t+"":t,i),i);const oe=Math.min,bt=Math.max,Ci=Math.round,St=e=>({x:e,y:e}),Fa={left:"right",right:"left",bottom:"top",top:"bottom"},Ha={start:"end",end:"start"};function oo(e,t,i){return bt(e,oe(t,i))}function Ke(e,t){return typeof e=="function"?e(t):e}function gt(e){return e.split("-")[0]}function Hi(e){return e.split("-")[1]}function ps(e){return e==="x"?"y":"x"}function ms(e){return e==="y"?"height":"width"}function Vt(e){return["top","bottom"].includes(gt(e))?"y":"x"}function fs(e){return ps(Vt(e))}function Ba(e,t,i){i===void 0&&(i=!1);const n=Hi(e),o=fs(e),s=ms(o);let r=o==="x"?n===(i?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(r=Ai(r)),[r,Ai(r)]}function Ua(e){const t=Ai(e);return[pn(e),t,pn(t)]}function pn(e){return e.replace(/start|end/g,t=>Ha[t])}function Va(e,t,i){const n=["left","right"],o=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(e){case"top":case"bottom":return i?t?o:n:t?n:o;case"left":case"right":return t?s:r;default:return[]}}function qa(e,t,i,n){const o=Hi(e);let s=Va(gt(e),i==="start",n);return o&&(s=s.map(r=>r+"-"+o),t&&(s=s.concat(s.map(pn)))),s}function Ai(e){return e.replace(/left|right|bottom|top/g,t=>Fa[t])}function Wa(e){return{top:0,right:0,bottom:0,left:0,...e}}function bs(e){return typeof e!="number"?Wa(e):{top:e,right:e,bottom:e,left:e}}function se(e){const{x:t,y:i,width:n,height:o}=e;return{width:n,height:o,top:i,left:t,right:t+n,bottom:i+o,x:t,y:i}}function so(e,t,i){let{reference:n,floating:o}=e;const s=Vt(t),r=fs(t),a=ms(r),l=gt(t),d=s==="y",u=n.x+n.width/2-o.width/2,c=n.y+n.height/2-o.height/2,h=n[a]/2-o[a]/2;let p;switch(l){case"top":p={x:u,y:n.y-o.height};break;case"bottom":p={x:u,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:c};break;case"left":p={x:n.x-o.width,y:c};break;default:p={x:n.x,y:n.y}}switch(Hi(t)){case"start":p[r]-=h*(i&&d?-1:1);break;case"end":p[r]+=h*(i&&d?-1:1);break}return p}const Ya=async(e,t,i)=>{const{placement:n="bottom",strategy:o="absolute",middleware:s=[],platform:r}=i,a=s.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(t));let d=await r.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:c}=so(d,n,l),h=n,p={},b=0;for(let y=0;y<a.length;y++){const{name:g,fn:f}=a[y],{x:_,y:w,data:x,reset:A}=await f({x:u,y:c,initialPlacement:n,placement:h,strategy:o,middlewareData:p,rects:d,platform:r,elements:{reference:e,floating:t}});u=_??u,c=w??c,p={...p,[g]:{...p[g],...x}},A&&b<=50&&(b++,typeof A=="object"&&(A.placement&&(h=A.placement),A.rects&&(d=A.rects===!0?await r.getElementRects({reference:e,floating:t,strategy:o}):A.rects),{x:u,y:c}=so(d,h,l)),y=-1)}return{x:u,y:c,placement:h,strategy:o,middlewareData:p}};async function gs(e,t){var i;t===void 0&&(t={});const{x:n,y:o,platform:s,rects:r,elements:a,strategy:l}=e,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:c="floating",altBoundary:h=!1,padding:p=0}=Ke(t,e),b=bs(p),y=a[h?c==="floating"?"reference":"floating":c],g=se(await s.getClippingRect({element:(i=await(s.isElement==null?void 0:s.isElement(y)))==null||i?y:y.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:d,rootBoundary:u,strategy:l})),f=c==="floating"?{x:n,y:o,width:r.floating.width,height:r.floating.height}:r.reference,_=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),w=await(s.isElement==null?void 0:s.isElement(_))?await(s.getScale==null?void 0:s.getScale(_))||{x:1,y:1}:{x:1,y:1},x=se(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:f,offsetParent:_,strategy:l}):f);return{top:(g.top-x.top+b.top)/w.y,bottom:(x.bottom-g.bottom+b.bottom)/w.y,left:(g.left-x.left+b.left)/w.x,right:(x.right-g.right+b.right)/w.x}}const Ga=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var i,n;const{placement:o,middlewareData:s,rects:r,initialPlacement:a,platform:l,elements:d}=t,{mainAxis:u=!0,crossAxis:c=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:y=!0,...g}=Ke(e,t);if((i=s.arrow)!=null&&i.alignmentOffset)return{};const f=gt(o),_=Vt(a),w=gt(a)===a,x=await(l.isRTL==null?void 0:l.isRTL(d.floating)),A=h||(w||!y?[Ai(a)]:Ua(a)),C=b!=="none";!h&&C&&A.push(...qa(a,y,b,x));const O=[a,...A],N=await gs(t,g),k=[];let S=((n=s.flip)==null?void 0:n.overflows)||[];if(u&&k.push(N[f]),c){const $=Ba(o,r,x);k.push(N[$[0]],N[$[1]])}if(S=[...S,{placement:o,overflows:k}],!k.every($=>$<=0)){var B,Y;const $=(((B=s.flip)==null?void 0:B.index)||0)+1,z=O[$];if(z)return{data:{index:$,overflows:S},reset:{placement:z}};let V=(Y=S.filter(tt=>tt.overflows[0]<=0).sort((tt,et)=>tt.overflows[1]-et.overflows[1])[0])==null?void 0:Y.placement;if(!V)switch(p){case"bestFit":{var q;const tt=(q=S.filter(et=>{if(C){const dt=Vt(et.placement);return dt===_||dt==="y"}return!0}).map(et=>[et.placement,et.overflows.filter(dt=>dt>0).reduce((dt,Se)=>dt+Se,0)]).sort((et,dt)=>et[1]-dt[1])[0])==null?void 0:q[0];tt&&(V=tt);break}case"initialPlacement":V=a;break}if(o!==V)return{reset:{placement:V}}}return{}}}};function vs(e){const t=oe(...e.map(s=>s.left)),i=oe(...e.map(s=>s.top)),n=bt(...e.map(s=>s.right)),o=bt(...e.map(s=>s.bottom));return{x:t,y:i,width:n-t,height:o-i}}function Xa(e){const t=e.slice().sort((o,s)=>o.y-s.y),i=[];let n=null;for(let o=0;o<t.length;o++){const s=t[o];!n||s.y-n.y>n.height/2?i.push([s]):i[i.length-1].push(s),n=s}return i.map(o=>se(vs(o)))}const Ja=function(e){return e===void 0&&(e={}),{name:"inline",options:e,async fn(t){const{placement:i,elements:n,rects:o,platform:s,strategy:r}=t,{padding:a=2,x:l,y:d}=Ke(e,t),u=Array.from(await(s.getClientRects==null?void 0:s.getClientRects(n.reference))||[]),c=Xa(u),h=se(vs(u)),p=bs(a);function b(){if(c.length===2&&c[0].left>c[1].right&&l!=null&&d!=null)return c.find(g=>l>g.left-p.left&&l<g.right+p.right&&d>g.top-p.top&&d<g.bottom+p.bottom)||h;if(c.length>=2){if(Vt(i)==="y"){const S=c[0],B=c[c.length-1],Y=gt(i)==="top",q=S.top,$=B.bottom,z=Y?S.left:B.left,V=Y?S.right:B.right,tt=V-z,et=$-q;return{top:q,bottom:$,left:z,right:V,width:tt,height:et,x:z,y:q}}const g=gt(i)==="left",f=bt(...c.map(S=>S.right)),_=oe(...c.map(S=>S.left)),w=c.filter(S=>g?S.left===_:S.right===f),x=w[0].top,A=w[w.length-1].bottom,C=_,O=f,N=O-C,k=A-x;return{top:x,bottom:A,left:C,right:O,width:N,height:k,x:C,y:x}}return h}const y=await s.getElementRects({reference:{getBoundingClientRect:b},floating:n.floating,strategy:r});return o.reference.x!==y.reference.x||o.reference.y!==y.reference.y||o.reference.width!==y.reference.width||o.reference.height!==y.reference.height?{reset:{rects:y}}:{}}}};async function Qa(e,t){const{placement:i,platform:n,elements:o}=e,s=await(n.isRTL==null?void 0:n.isRTL(o.floating)),r=gt(i),a=Hi(i),l=Vt(i)==="y",d=["left","top"].includes(r)?-1:1,u=s&&l?-1:1,c=Ke(t,e);let{mainAxis:h,crossAxis:p,alignmentAxis:b}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:c.mainAxis||0,crossAxis:c.crossAxis||0,alignmentAxis:c.alignmentAxis};return a&&typeof b=="number"&&(p=a==="end"?b*-1:b),l?{x:p*u,y:h*d}:{x:h*d,y:p*u}}const ys=function(e){return{name:"offset",options:e,async fn(t){var i,n;const{x:o,y:s,placement:r,middlewareData:a}=t,l=await Qa(t,e);return r===((i=a.offset)==null?void 0:i.placement)&&(n=a.arrow)!=null&&n.alignmentOffset?{}:{x:o+l.x,y:s+l.y,data:{...l,placement:r}}}}},Za=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:n,placement:o}=t,{mainAxis:s=!0,crossAxis:r=!1,limiter:a={fn:g=>{let{x:f,y:_}=g;return{x:f,y:_}}},...l}=Ke(e,t),d={x:i,y:n},u=await gs(t,l),c=Vt(gt(o)),h=ps(c);let p=d[h],b=d[c];if(s){const g=h==="y"?"top":"left",f=h==="y"?"bottom":"right",_=p+u[g],w=p-u[f];p=oo(_,p,w)}if(r){const g=c==="y"?"top":"left",f=c==="y"?"bottom":"right",_=b+u[g],w=b-u[f];b=oo(_,b,w)}const y=a.fn({...t,[h]:p,[c]:b});return{...y,data:{x:y.x-i,y:y.y-n,enabled:{[h]:s,[c]:r}}}}}};function Bi(){return typeof window<"u"}function kt(e){return _s(e)?(e.nodeName||"").toLowerCase():"#document"}function Q(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Tt(e){var t;return(t=(_s(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function _s(e){return Bi()?e instanceof Node||e instanceof Q(e).Node:!1}function ht(e){return Bi()?e instanceof Element||e instanceof Q(e).Element:!1}function pt(e){return Bi()?e instanceof HTMLElement||e instanceof Q(e).HTMLElement:!1}function ro(e){return!Bi()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Q(e).ShadowRoot}function ti(e){const{overflow:t,overflowX:i,overflowY:n,display:o}=it(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+i)&&!["inline","contents"].includes(o)}function Ka(e){return["table","td","th"].includes(kt(e))}function tl(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function In(e){const t=Nn(),i=ht(e)?it(e):e;return["transform","translate","scale","rotate","perspective"].some(n=>i[n]?i[n]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!t&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!t&&(i.filter?i.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(n=>(i.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(i.contain||"").includes(n))}function el(e){let t=re(e);for(;pt(t)&&!Ui(t);){if(In(t))return t;if(tl(t))return null;t=re(t)}return null}function Nn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ui(e){return["html","body","#document"].includes(kt(e))}function it(e){return Q(e).getComputedStyle(e)}function Vi(e){return ht(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function re(e){if(kt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ro(e)&&e.host||Tt(e);return ro(t)?t.host:t}function ws(e){const t=re(e);return Ui(t)?e.ownerDocument?e.ownerDocument.body:e.body:pt(t)&&ti(t)?t:ws(t)}function xs(e,t,i){var n;t===void 0&&(t=[]);const o=ws(e),s=o===((n=e.ownerDocument)==null?void 0:n.body),r=Q(o);return s?(il(r),t.concat(r,r.visualViewport||[],ti(o)?o:[],[])):t.concat(o,xs(o,[]))}function il(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function $s(e){const t=it(e);let i=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const o=pt(e),s=o?e.offsetWidth:i,r=o?e.offsetHeight:n,a=Ci(i)!==s||Ci(n)!==r;return a&&(i=s,n=r),{width:i,height:n,$:a}}function Cs(e){return ht(e)?e:e.contextElement}function te(e){const t=Cs(e);if(!pt(t))return St(1);const i=t.getBoundingClientRect(),{width:n,height:o,$:s}=$s(t);let r=(s?Ci(i.width):i.width)/n,a=(s?Ci(i.height):i.height)/o;return(!r||!Number.isFinite(r))&&(r=1),(!a||!Number.isFinite(a))&&(a=1),{x:r,y:a}}const nl=St(0);function As(e){const t=Q(e);return!Nn()||!t.visualViewport?nl:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ol(e,t,i){return t===void 0&&(t=!1),!i||t&&i!==Q(e)?!1:t}function De(e,t,i,n){t===void 0&&(t=!1),i===void 0&&(i=!1);const o=e.getBoundingClientRect(),s=Cs(e);let r=St(1);t&&(n?ht(n)&&(r=te(n)):r=te(e));const a=ol(s,i,n)?As(s):St(0);let l=(o.left+a.x)/r.x,d=(o.top+a.y)/r.y,u=o.width/r.x,c=o.height/r.y;if(s){const h=Q(s),p=n&&ht(n)?Q(n):n;let b=h,y=b.frameElement;for(;y&&n&&p!==b;){const g=te(y),f=y.getBoundingClientRect(),_=it(y),w=f.left+(y.clientLeft+parseFloat(_.paddingLeft))*g.x,x=f.top+(y.clientTop+parseFloat(_.paddingTop))*g.y;l*=g.x,d*=g.y,u*=g.x,c*=g.y,l+=w,d+=x,b=Q(y),y=b.frameElement}}return se({width:u,height:c,x:l,y:d})}const sl=[":popover-open",":modal"];function Ss(e){return sl.some(t=>{try{return e.matches(t)}catch{return!1}})}function rl(e){let{elements:t,rect:i,offsetParent:n,strategy:o}=e;const s=o==="fixed",r=Tt(n),a=t?Ss(t.floating):!1;if(n===r||a&&s)return i;let l={scrollLeft:0,scrollTop:0},d=St(1);const u=St(0),c=pt(n);if((c||!c&&!s)&&((kt(n)!=="body"||ti(r))&&(l=Vi(n)),pt(n))){const h=De(n);d=te(n),u.x=h.x+n.clientLeft,u.y=h.y+n.clientTop}return{width:i.width*d.x,height:i.height*d.y,x:i.x*d.x-l.scrollLeft*d.x+u.x,y:i.y*d.y-l.scrollTop*d.y+u.y}}function al(e){return Array.from(e.getClientRects())}function ks(e){return De(Tt(e)).left+Vi(e).scrollLeft}function ll(e){const t=Tt(e),i=Vi(e),n=e.ownerDocument.body,o=bt(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),s=bt(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let r=-i.scrollLeft+ks(e);const a=-i.scrollTop;return it(n).direction==="rtl"&&(r+=bt(t.clientWidth,n.clientWidth)-o),{width:o,height:s,x:r,y:a}}function cl(e,t){const i=Q(e),n=Tt(e),o=i.visualViewport;let s=n.clientWidth,r=n.clientHeight,a=0,l=0;if(o){s=o.width,r=o.height;const d=Nn();(!d||d&&t==="fixed")&&(a=o.offsetLeft,l=o.offsetTop)}return{width:s,height:r,x:a,y:l}}function dl(e,t){const i=De(e,!0,t==="fixed"),n=i.top+e.clientTop,o=i.left+e.clientLeft,s=pt(e)?te(e):St(1),r=e.clientWidth*s.x,a=e.clientHeight*s.y,l=o*s.x,d=n*s.y;return{width:r,height:a,x:l,y:d}}function ao(e,t,i){let n;if(t==="viewport")n=cl(e,i);else if(t==="document")n=ll(Tt(e));else if(ht(t))n=dl(t,i);else{const o=As(e);n={...t,x:t.x-o.x,y:t.y-o.y}}return se(n)}function Es(e,t){const i=re(e);return i===t||!ht(i)||Ui(i)?!1:it(i).position==="fixed"||Es(i,t)}function ul(e,t){const i=t.get(e);if(i)return i;let n=xs(e,[]).filter(a=>ht(a)&&kt(a)!=="body"),o=null;const s=it(e).position==="fixed";let r=s?re(e):e;for(;ht(r)&&!Ui(r);){const a=it(r),l=In(r);!l&&a.position==="fixed"&&(o=null),(s?!l&&!o:!l&&a.position==="static"&&o&&["absolute","fixed"].includes(o.position)||ti(r)&&!l&&Es(e,r))?n=n.filter(d=>d!==r):o=a,r=re(r)}return t.set(e,n),n}function hl(e){let{element:t,boundary:i,rootBoundary:n,strategy:o}=e;const s=[...i==="clippingAncestors"?ul(t,this._c):[].concat(i),n],r=s[0],a=s.reduce((l,d)=>{const u=ao(t,d,o);return l.top=bt(u.top,l.top),l.right=oe(u.right,l.right),l.bottom=oe(u.bottom,l.bottom),l.left=bt(u.left,l.left),l},ao(t,r,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function pl(e){const{width:t,height:i}=$s(e);return{width:t,height:i}}function ml(e,t,i){const n=pt(t),o=Tt(t),s=i==="fixed",r=De(e,!0,s,t);let a={scrollLeft:0,scrollTop:0};const l=St(0);if(n||!n&&!s)if((kt(t)!=="body"||ti(o))&&(a=Vi(t)),n){const c=De(t,!0,s,t);l.x=c.x+t.clientLeft,l.y=c.y+t.clientTop}else o&&(l.x=ks(o));const d=r.left+a.scrollLeft-l.x,u=r.top+a.scrollTop-l.y;return{x:d,y:u,width:r.width,height:r.height}}function lo(e,t){return!pt(e)||it(e).position==="fixed"?null:t?t(e):e.offsetParent}function Ts(e,t){const i=Q(e);if(!pt(e)||Ss(e))return i;let n=lo(e,t);for(;n&&Ka(n)&&it(n).position==="static";)n=lo(n,t);return n&&(kt(n)==="html"||kt(n)==="body"&&it(n).position==="static"&&!In(n))?i:n||el(e)||i}const fl=async function(e){const t=this.getOffsetParent||Ts,i=this.getDimensions;return{reference:ml(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,...await i(e.floating)}}};function bl(e){return it(e).direction==="rtl"}const gl={convertOffsetParentRelativeRectToViewportRelativeRect:rl,getDocumentElement:Tt,getClippingRect:hl,getOffsetParent:Ts,getElementRects:fl,getClientRects:al,getDimensions:pl,getScale:te,isElement:ht,isRTL:bl},Os=Za,Ps=Ga,Is=Ja,Ns=(e,t,i)=>{const n=new Map,o={platform:gl,...i},s={...o.platform,_c:n};return Ya(e,t,{...o,platform:s})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yi=globalThis,Rn=yi.ShadowRoot&&(yi.ShadyCSS===void 0||yi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Mn=Symbol(),co=new WeakMap;let Rs=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Mn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Rn&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=co.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&co.set(t,e))}return e}toString(){return this.cssText}};const vl=e=>new Rs(typeof e=="string"?e:e+"",void 0,Mn),P=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((n,o,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new Rs(i,e,Mn)},yl=(e,t)=>{if(Rn)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const n=document.createElement("style"),o=yi.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=i.cssText,e.appendChild(n)}},uo=Rn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const n of t.cssRules)i+=n.cssText;return vl(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:_l,defineProperty:wl,getOwnPropertyDescriptor:xl,getOwnPropertyNames:$l,getOwnPropertySymbols:Cl,getPrototypeOf:Al}=Object,ae=globalThis,ho=ae.trustedTypes,Sl=ho?ho.emptyScript:"",po=ae.reactiveElementPolyfillSupport,Ne=(e,t)=>e,Si={toAttribute(e,t){switch(t){case Boolean:e=e?Sl:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},zn=(e,t)=>!_l(e,t),mo={attribute:!0,type:String,converter:Si,reflect:!1,hasChanged:zn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ae.litPropertyMetadata??(ae.litPropertyMetadata=new WeakMap);class Zt extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=mo){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,i);o!==void 0&&wl(this.prototype,t,o)}}static getPropertyDescriptor(t,i,n){const{get:o,set:s}=xl(this.prototype,t)??{get(){return this[i]},set(r){this[i]=r}};return{get(){return o==null?void 0:o.call(this)},set(r){const a=o==null?void 0:o.call(this);s.call(this,r),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??mo}static _$Ei(){if(this.hasOwnProperty(Ne("elementProperties")))return;const t=Al(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ne("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ne("properties"))){const i=this.properties,n=[...$l(i),...Cl(i)];for(const o of n)this.createProperty(o,i[o])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[n,o]of i)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[i,n]of this.elementProperties){const o=this._$Eu(i,n);o!==void 0&&this._$Eh.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)i.unshift(uo(o))}else t!==void 0&&i.push(uo(t));return i}static _$Eu(t,i){const n=i.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(i=>i(this))}addController(t){var i;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var i;(i=this._$EO)==null||i.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const n of i.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return yl(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostConnected)==null?void 0:n.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostDisconnected)==null?void 0:n.call(i)})}attributeChangedCallback(t,i,n){this._$AK(t,n)}_$EC(t,i){var n;const o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(s!==void 0&&o.reflect===!0){const r=(((n=o.converter)==null?void 0:n.toAttribute)!==void 0?o.converter:Si).toAttribute(i,o.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,i){var n;const o=this.constructor,s=o._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const r=o.getPropertyOptions(s),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)==null?void 0:n.fromAttribute)!==void 0?r.converter:Si;this._$Em=s,this[s]=a.fromAttribute(i,r.type),this._$Em=null}}requestUpdate(t,i,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??zn)(this[t],i))return;this.P(t,i,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,i,n){this._$AL.has(t)||this._$AL.set(t,i),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,r]of o)r.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],r)}let i=!1;const n=this._$AL;try{i=this.shouldUpdate(n),i?(this.willUpdate(n),(t=this._$EO)==null||t.forEach(o=>{var s;return(s=o.hostUpdate)==null?void 0:s.call(o)}),this.update(n)):this._$EU()}catch(o){throw i=!1,this._$EU(),o}i&&this._$AE(n)}willUpdate(t){}_$AE(t){var i;(i=this._$EO)==null||i.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(i=>this._$EC(i,this[i]))),this._$EU()}updated(t){}firstUpdated(t){}}Zt.elementStyles=[],Zt.shadowRootOptions={mode:"open"},Zt[Ne("elementProperties")]=new Map,Zt[Ne("finalized")]=new Map,po==null||po({ReactiveElement:Zt}),(ae.reactiveElementVersions??(ae.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ki=globalThis,Ei=ki.trustedTypes,fo=Ei?Ei.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ms="$lit$",Ct=`lit$${Math.random().toFixed(9).slice(2)}$`,zs="?"+Ct,kl=`<${zs}>`,qt=document,Fe=()=>qt.createComment(""),He=e=>e===null||typeof e!="object"&&typeof e!="function",Ln=Array.isArray,El=e=>Ln(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",sn=`[ 	
\f\r]`,Te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bo=/-->/g,go=/>/g,Lt=RegExp(`>|${sn}(?:([^\\s"'>=/]+)(${sn}*=${sn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vo=/'/g,yo=/"/g,Ls=/^(?:script|style|textarea|title)$/i,Tl=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),m=Tl(1),Wt=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),_o=new WeakMap,Dt=qt.createTreeWalker(qt,129);function js(e,t){if(!Ln(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return fo!==void 0?fo.createHTML(t):t}const Ol=(e,t)=>{const i=e.length-1,n=[];let o,s=t===2?"<svg>":t===3?"<math>":"",r=Te;for(let a=0;a<i;a++){const l=e[a];let d,u,c=-1,h=0;for(;h<l.length&&(r.lastIndex=h,u=r.exec(l),u!==null);)h=r.lastIndex,r===Te?u[1]==="!--"?r=bo:u[1]!==void 0?r=go:u[2]!==void 0?(Ls.test(u[2])&&(o=RegExp("</"+u[2],"g")),r=Lt):u[3]!==void 0&&(r=Lt):r===Lt?u[0]===">"?(r=o??Te,c=-1):u[1]===void 0?c=-2:(c=r.lastIndex-u[2].length,d=u[1],r=u[3]===void 0?Lt:u[3]==='"'?yo:vo):r===yo||r===vo?r=Lt:r===bo||r===go?r=Te:(r=Lt,o=void 0);const p=r===Lt&&e[a+1].startsWith("/>")?" ":"";s+=r===Te?l+kl:c>=0?(n.push(d),l.slice(0,c)+Ms+l.slice(c)+Ct+p):l+Ct+(c===-2?a:p)}return[js(e,s+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class Be{constructor({strings:t,_$litType$:i},n){let o;this.parts=[];let s=0,r=0;const a=t.length-1,l=this.parts,[d,u]=Ol(t,i);if(this.el=Be.createElement(d,n),Dt.currentNode=this.el.content,i===2||i===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(o=Dt.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const c of o.getAttributeNames())if(c.endsWith(Ms)){const h=u[r++],p=o.getAttribute(c).split(Ct),b=/([.?@])?(.*)/.exec(h);l.push({type:1,index:s,name:b[2],strings:p,ctor:b[1]==="."?Il:b[1]==="?"?Nl:b[1]==="@"?Rl:qi}),o.removeAttribute(c)}else c.startsWith(Ct)&&(l.push({type:6,index:s}),o.removeAttribute(c));if(Ls.test(o.tagName)){const c=o.textContent.split(Ct),h=c.length-1;if(h>0){o.textContent=Ei?Ei.emptyScript:"";for(let p=0;p<h;p++)o.append(c[p],Fe()),Dt.nextNode(),l.push({type:2,index:++s});o.append(c[h],Fe())}}}else if(o.nodeType===8)if(o.data===zs)l.push({type:2,index:s});else{let c=-1;for(;(c=o.data.indexOf(Ct,c+1))!==-1;)l.push({type:7,index:s}),c+=Ct.length-1}s++}}static createElement(t,i){const n=qt.createElement("template");return n.innerHTML=t,n}}function le(e,t,i=e,n){var o,s;if(t===Wt)return t;let r=n!==void 0?(o=i._$Co)==null?void 0:o[n]:i._$Cl;const a=He(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==a&&((s=r==null?void 0:r._$AO)==null||s.call(r,!1),a===void 0?r=void 0:(r=new a(e),r._$AT(e,i,n)),n!==void 0?(i._$Co??(i._$Co=[]))[n]=r:i._$Cl=r),r!==void 0&&(t=le(e,r._$AS(e,t.values),r,n)),t}class Pl{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??qt).importNode(i,!0);Dt.currentNode=o;let s=Dt.nextNode(),r=0,a=0,l=n[0];for(;l!==void 0;){if(r===l.index){let d;l.type===2?d=new ei(s,s.nextSibling,this,t):l.type===1?d=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(d=new Ml(s,this,t)),this._$AV.push(d),l=n[++a]}r!==(l==null?void 0:l.index)&&(s=Dt.nextNode(),r++)}return Dt.currentNode=qt,o}p(t){let i=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,i),i+=n.strings.length-2):n._$AI(t[i])),i++}}class ei{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,i,n,o){this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=le(this,t,i),He(t)?t===M||t==null||t===""?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==Wt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):El(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==M&&He(this._$AH)?this._$AA.nextSibling.data=t:this.T(qt.createTextNode(t)),this._$AH=t}$(t){var i;const{values:n,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Be.createElement(js(o.h,o.h[0]),this.options)),o);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(n);else{const r=new Pl(s,this),a=r.u(this.options);r.p(n),this.T(a),this._$AH=r}}_$AC(t){let i=_o.get(t.strings);return i===void 0&&_o.set(t.strings,i=new Be(t)),i}k(t){Ln(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,o=0;for(const s of t)o===i.length?i.push(n=new ei(this.O(Fe()),this.O(Fe()),this,this.options)):n=i[o],n._$AI(s),o++;o<i.length&&(this._$AR(n&&n._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,i);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var i;this._$AM===void 0&&(this._$Cv=t,(i=this._$AP)==null||i.call(this,t))}}class qi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,n,o,s){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=M}_$AI(t,i=this,n,o){const s=this.strings;let r=!1;if(s===void 0)t=le(this,t,i,0),r=!He(t)||t!==this._$AH&&t!==Wt,r&&(this._$AH=t);else{const a=t;let l,d;for(t=s[0],l=0;l<s.length-1;l++)d=le(this,a[n+l],i,l),d===Wt&&(d=this._$AH[l]),r||(r=!He(d)||d!==this._$AH[l]),d===M?t=M:t!==M&&(t+=(d??"")+s[l+1]),this._$AH[l]=d}r&&!o&&this.j(t)}j(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Il extends qi{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===M?void 0:t}}class Nl extends qi{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==M)}}class Rl extends qi{constructor(t,i,n,o,s){super(t,i,n,o,s),this.type=5}_$AI(t,i=this){if((t=le(this,t,i,0)??M)===Wt)return;const n=this._$AH,o=t===M&&n!==M||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==M&&(n===M||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}}class Ml{constructor(t,i,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){le(this,t)}}const wo=ki.litHtmlPolyfillSupport;wo==null||wo(Be,ei),(ki.litHtmlVersions??(ki.litHtmlVersions=[])).push("3.2.1");const ce=(e,t,i)=>{const n=(i==null?void 0:i.renderBefore)??t;let o=n._$litPart$;if(o===void 0){const s=(i==null?void 0:i.renderBefore)??null;n._$litPart$=o=new ei(t.insertBefore(Fe(),s),s,void 0,i??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let T=class extends Zt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ce(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Wt}};var xo;T._$litElement$=!0,T.finalized=!0,(xo=globalThis.litElementHydrateSupport)==null||xo.call(globalThis,{LitElement:T});const $o=globalThis.litElementPolyfillSupport;$o==null||$o({LitElement:T});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zl={attribute:!0,type:String,converter:Si,reflect:!1,hasChanged:zn},Ll=(e=zl,t,i)=>{const{kind:n,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(i.name,e),n==="accessor"){const{name:r}=i;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(r,l,e)},init(a){return a!==void 0&&this.P(r,void 0,e),a}}}if(n==="setter"){const{name:r}=i;return function(a){const l=this[r];t.call(this,a),this.requestUpdate(r,l,e)}}throw Error("Unsupported decorator location: "+n)};function v(e){return(t,i)=>typeof i=="object"?Ll(e,t,i):((n,o,s)=>{const r=o.hasOwnProperty(s);return o.constructor.createProperty(s,r?{...n,wrapped:!0}:n),r?Object.getOwnPropertyDescriptor(o,s):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function be(e){return v({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jl=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ds={ATTRIBUTE:1,CHILD:2},Fs=e=>(...t)=>({_$litDirective$:e,values:t});let Hs=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re=(e,t)=>{var i;const n=e._$AN;if(n===void 0)return!1;for(const o of n)(i=o._$AO)==null||i.call(o,t,!1),Re(o,t);return!0},Ti=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while((i==null?void 0:i.size)===0)},Bs=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Hl(t)}};function Dl(e){this._$AN!==void 0?(Ti(this),this._$AM=e,Bs(this)):this._$AM=e}function Fl(e,t=!1,i=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(n))for(let s=i;s<n.length;s++)Re(n[s],!1),Ti(n[s]);else n!=null&&(Re(n,!1),Ti(n));else Re(this,e)}const Hl=e=>{e.type==Ds.CHILD&&(e._$AP??(e._$AP=Fl),e._$AQ??(e._$AQ=Dl))};class Bl extends Hs{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,n){super._$AT(t,i,n),Bs(this),this.isConnected=t._$AU}_$AO(t,i=!0){var n,o;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)==null||n.call(this):(o=this.disconnected)==null||o.call(this)),i&&(Re(this,t),Ti(this))}setValue(t){if(jl(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=()=>new Ul;class Ul{}const rn=new WeakMap,W=Fs(class extends Bl{render(e){return M}update(e,[t]){var i;const n=t!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=t,this.ht=(i=e.options)==null?void 0:i.host,this.rt(this.ct=e.element)),M}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let i=rn.get(t);i===void 0&&(i=new WeakMap,rn.set(t,i)),i.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),i.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=rn.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.0.0
*/const Us=Object.freeze({left:0,top:0,width:16,height:16}),Oi=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),ii=Object.freeze({...Us,...Oi}),mn=Object.freeze({...ii,body:"",hidden:!1}),Vl=Object.freeze({width:null,height:null}),Vs=Object.freeze({...Vl,...Oi});function ql(e,t=0){const i=e.replace(/^-?[0-9.]*/,"");function n(o){for(;o<0;)o+=4;return o%4}if(i===""){const o=parseInt(e);return isNaN(o)?0:n(o)}else if(i!==e){let o=0;switch(i){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(e.slice(0,e.length-i.length));return isNaN(s)?0:(s=s/o,s%1===0?n(s):0)}}return t}const Wl=/[\s,]+/;function Yl(e,t){t.split(Wl).forEach(i=>{switch(i.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}const qs={...Vs,preserveAspectRatio:""};function Co(e){const t={...qs},i=(n,o)=>e.getAttribute(n)||o;return t.width=i("width",null),t.height=i("height",null),t.rotate=ql(i("rotate","")),Yl(t,i("flip","")),t.preserveAspectRatio=i("preserveAspectRatio",i("preserveaspectratio","")),t}function Gl(e,t){for(const i in qs)if(e[i]!==t[i])return!0;return!1}const Me=/^[a-z0-9]+(-[a-z0-9]+)*$/,ni=(e,t,i,n="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;n=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const a=o.pop(),l=o.pop(),d={provider:o.length>0?o[0]:n,prefix:l,name:a};return t&&!_i(d)?null:d}const s=o[0],r=s.split("-");if(r.length>1){const a={provider:n,prefix:r.shift(),name:r.join("-")};return t&&!_i(a)?null:a}if(i&&n===""){const a={provider:n,prefix:"",name:s};return t&&!_i(a,i)?null:a}return null},_i=(e,t)=>e?!!((e.provider===""||e.provider.match(Me))&&(t&&e.prefix===""||e.prefix.match(Me))&&e.name.match(Me)):!1;function Xl(e,t){const i={};!e.hFlip!=!t.hFlip&&(i.hFlip=!0),!e.vFlip!=!t.vFlip&&(i.vFlip=!0);const n=((e.rotate||0)+(t.rotate||0))%4;return n&&(i.rotate=n),i}function Ao(e,t){const i=Xl(e,t);for(const n in mn)n in Oi?n in e&&!(n in i)&&(i[n]=Oi[n]):n in t?i[n]=t[n]:n in e&&(i[n]=e[n]);return i}function Jl(e,t){const i=e.icons,n=e.aliases||Object.create(null),o=Object.create(null);function s(r){if(i[r])return o[r]=[];if(!(r in o)){o[r]=null;const a=n[r]&&n[r].parent,l=a&&s(a);l&&(o[r]=[a].concat(l))}return o[r]}return Object.keys(i).concat(Object.keys(n)).forEach(s),o}function Ql(e,t,i){const n=e.icons,o=e.aliases||Object.create(null);let s={};function r(a){s=Ao(n[a]||o[a],s)}return r(t),i.forEach(r),Ao(e,s)}function Ws(e,t){const i=[];if(typeof e!="object"||typeof e.icons!="object")return i;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),i.push(o)});const n=Jl(e);for(const o in n){const s=n[o];s&&(t(o,Ql(e,o,s)),i.push(o))}return i}const Zl={provider:"",aliases:{},not_found:{},...Us};function an(e,t){for(const i in t)if(i in e&&typeof e[i]!=typeof t[i])return!1;return!0}function Ys(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!an(e,Zl))return null;const i=t.icons;for(const o in i){const s=i[o];if(!o.match(Me)||typeof s.body!="string"||!an(s,mn))return null}const n=t.aliases||Object.create(null);for(const o in n){const s=n[o],r=s.parent;if(!o.match(Me)||typeof r!="string"||!i[r]&&!n[r]||!an(s,mn))return null}return t}const Pi=Object.create(null);function Kl(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function Et(e,t){const i=Pi[e]||(Pi[e]=Object.create(null));return i[t]||(i[t]=Kl(e,t))}function jn(e,t){return Ys(t)?Ws(t,(i,n)=>{n?e.icons[i]=n:e.missing.add(i)}):[]}function tc(e,t,i){try{if(typeof i.body=="string")return e.icons[t]={...i},!0}catch{}return!1}function ec(e,t){let i=[];return(typeof e=="string"?[e]:Object.keys(Pi)).forEach(n=>{(typeof n=="string"&&typeof t=="string"?[t]:Object.keys(Pi[n]||{})).forEach(o=>{const s=Et(n,o);i=i.concat(Object.keys(s.icons).map(r=>(n!==""?"@"+n+":":"")+o+":"+r))})}),i}let Ue=!1;function Gs(e){return typeof e=="boolean"&&(Ue=e),Ue}function Ve(e){const t=typeof e=="string"?ni(e,!0,Ue):e;if(t){const i=Et(t.provider,t.prefix),n=t.name;return i.icons[n]||(i.missing.has(n)?null:void 0)}}function Xs(e,t){const i=ni(e,!0,Ue);if(!i)return!1;const n=Et(i.provider,i.prefix);return tc(n,i.name,t)}function So(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),Ue&&!t&&!e.prefix){let o=!1;return Ys(e)&&(e.prefix="",Ws(e,(s,r)=>{r&&Xs(s,r)&&(o=!0)})),o}const i=e.prefix;if(!_i({provider:t,prefix:i,name:"a"}))return!1;const n=Et(t,i);return!!jn(n,e)}function ko(e){return!!Ve(e)}function ic(e){const t=Ve(e);return t?{...ii,...t}:null}function nc(e){const t={loaded:[],missing:[],pending:[]},i=Object.create(null);e.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let n={provider:"",prefix:"",name:""};return e.forEach(o=>{if(n.name===o.name&&n.prefix===o.prefix&&n.provider===o.provider)return;n=o;const s=o.provider,r=o.prefix,a=o.name,l=i[s]||(i[s]=Object.create(null)),d=l[r]||(l[r]=Et(s,r));let u;a in d.icons?u=t.loaded:r===""||d.missing.has(a)?u=t.missing:u=t.pending;const c={provider:s,prefix:r,name:a};u.push(c)}),t}function Js(e,t){e.forEach(i=>{const n=i.loaderCallbacks;n&&(i.loaderCallbacks=n.filter(o=>o.id!==t))})}function oc(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let i=!1;const n=e.provider,o=e.prefix;t.forEach(s=>{const r=s.icons,a=r.pending.length;r.pending=r.pending.filter(l=>{if(l.prefix!==o)return!0;const d=l.name;if(e.icons[d])r.loaded.push({provider:n,prefix:o,name:d});else if(e.missing.has(d))r.missing.push({provider:n,prefix:o,name:d});else return i=!0,!0;return!1}),r.pending.length!==a&&(i||Js([e],s.id),s.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),s.abort))})}))}let sc=0;function rc(e,t,i){const n=sc++,o=Js.bind(null,i,n);if(!t.pending.length)return o;const s={id:n,icons:t,callback:e,abort:o};return i.forEach(r=>{(r.loaderCallbacks||(r.loaderCallbacks=[])).push(s)}),o}const fn=Object.create(null);function Eo(e,t){fn[e]=t}function bn(e){return fn[e]||fn[""]}function ac(e,t=!0,i=!1){const n=[];return e.forEach(o=>{const s=typeof o=="string"?ni(o,t,i):o;s&&n.push(s)}),n}var lc={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function cc(e,t,i,n){const o=e.resources.length,s=e.random?Math.floor(Math.random()*o):e.index;let r;if(e.random){let C=e.resources.slice(0);for(r=[];C.length>1;){const O=Math.floor(Math.random()*C.length);r.push(C[O]),C=C.slice(0,O).concat(C.slice(O+1))}r=r.concat(C)}else r=e.resources.slice(s).concat(e.resources.slice(0,s));const a=Date.now();let l="pending",d=0,u,c=null,h=[],p=[];typeof n=="function"&&p.push(n);function b(){c&&(clearTimeout(c),c=null)}function y(){l==="pending"&&(l="aborted"),b(),h.forEach(C=>{C.status==="pending"&&(C.status="aborted")}),h=[]}function g(C,O){O&&(p=[]),typeof C=="function"&&p.push(C)}function f(){return{startTime:a,payload:t,status:l,queriesSent:d,queriesPending:h.length,subscribe:g,abort:y}}function _(){l="failed",p.forEach(C=>{C(void 0,u)})}function w(){h.forEach(C=>{C.status==="pending"&&(C.status="aborted")}),h=[]}function x(C,O,N){const k=O!=="success";switch(h=h.filter(S=>S!==C),l){case"pending":break;case"failed":if(k||!e.dataAfterTimeout)return;break;default:return}if(O==="abort"){u=N,_();return}if(k){u=N,h.length||(r.length?A():_());return}if(b(),w(),!e.random){const S=e.resources.indexOf(C.resource);S!==-1&&S!==e.index&&(e.index=S)}l="completed",p.forEach(S=>{S(N)})}function A(){if(l!=="pending")return;b();const C=r.shift();if(C===void 0){if(h.length){c=setTimeout(()=>{b(),l==="pending"&&(w(),_())},e.timeout);return}_();return}const O={status:"pending",resource:C,callback:(N,k)=>{x(O,N,k)}};h.push(O),d++,c=setTimeout(A,e.rotate),i(C,t,O.callback)}return setTimeout(A),f}function Qs(e){const t={...lc,...e};let i=[];function n(){i=i.filter(r=>r().status==="pending")}function o(r,a,l){const d=cc(t,r,a,(u,c)=>{n(),l&&l(u,c)});return i.push(d),d}function s(r){return i.find(a=>r(a))||null}return{query:o,find:s,setIndex:r=>{t.index=r},getIndex:()=>t.index,cleanup:n}}function Dn(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const Wi=Object.create(null),mi=["https://api.simplesvg.com","https://api.unisvg.com"],gn=[];for(;mi.length>0;)mi.length===1||Math.random()>.5?gn.push(mi.shift()):gn.push(mi.pop());Wi[""]=Dn({resources:["https://api.iconify.design"].concat(gn)});function To(e,t){const i=Dn(t);return i===null?!1:(Wi[e]=i,!0)}function Yi(e){return Wi[e]}function dc(){return Object.keys(Wi)}function Oo(){}const ln=Object.create(null);function uc(e){if(!ln[e]){const t=Yi(e);if(!t)return;const i=Qs(t),n={config:t,redundancy:i};ln[e]=n}return ln[e]}function Zs(e,t,i){let n,o;if(typeof e=="string"){const s=bn(e);if(!s)return i(void 0,424),Oo;o=s.send;const r=uc(e);r&&(n=r.redundancy)}else{const s=Dn(e);if(s){n=Qs(s);const r=e.resources?e.resources[0]:"",a=bn(r);a&&(o=a.send)}}return!n||!o?(i(void 0,424),Oo):n.query(t,o,i)().abort}const Po="iconify2",qe="iconify",Ks=qe+"-count",Io=qe+"-version",tr=36e5,hc=168,pc=50;function vn(e,t){try{return e.getItem(t)}catch{}}function Fn(e,t,i){try{return e.setItem(t,i),!0}catch{}}function No(e,t){try{e.removeItem(t)}catch{}}function yn(e,t){return Fn(e,Ks,t.toString())}function _n(e){return parseInt(vn(e,Ks))||0}const Ht={local:!0,session:!0},er={local:new Set,session:new Set};let Hn=!1;function mc(e){Hn=e}let fi=typeof window>"u"?{}:window;function ir(e){const t=e+"Storage";try{if(fi&&fi[t]&&typeof fi[t].length=="number")return fi[t]}catch{}Ht[e]=!1}function nr(e,t){const i=ir(e);if(!i)return;const n=vn(i,Io);if(n!==Po){if(n){const a=_n(i);for(let l=0;l<a;l++)No(i,qe+l.toString())}Fn(i,Io,Po),yn(i,0);return}const o=Math.floor(Date.now()/tr)-hc,s=a=>{const l=qe+a.toString(),d=vn(i,l);if(typeof d=="string"){try{const u=JSON.parse(d);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>o&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&t(u,a))return!0}catch{}No(i,l)}};let r=_n(i);for(let a=r-1;a>=0;a--)s(a)||(a===r-1?(r--,yn(i,r)):er[e].add(a))}function or(){if(!Hn){mc(!0);for(const e in Ht)nr(e,t=>{const i=t.data,n=t.provider,o=i.prefix,s=Et(n,o);if(!jn(s,i).length)return!1;const r=i.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,r):r,!0})}}function fc(e,t){const i=e.lastModifiedCached;if(i&&i>=t)return i===t;if(e.lastModifiedCached=t,i)for(const n in Ht)nr(n,o=>{const s=o.data;return o.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===t});return!0}function bc(e,t){Hn||or();function i(n){let o;if(!Ht[n]||!(o=ir(n)))return;const s=er[n];let r;if(s.size)s.delete(r=Array.from(s).shift());else if(r=_n(o),r>=pc||!yn(o,r+1))return;const a={cached:Math.floor(Date.now()/tr),provider:e.provider,data:t};return Fn(o,qe+r.toString(),JSON.stringify(a))}t.lastModified&&!fc(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),i("local")||i("session"))}function Ro(){}function gc(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,oc(e)}))}function vc(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:i,prefix:n}=e,o=e.iconsToLoad;delete e.iconsToLoad;let s;!o||!(s=bn(i))||s.prepare(i,n,o).forEach(r=>{Zs(i,r,a=>{if(typeof a!="object")r.icons.forEach(l=>{e.missing.add(l)});else try{const l=jn(e,a);if(!l.length)return;const d=e.pendingIcons;d&&l.forEach(u=>{d.delete(u)}),bc(e,a)}catch(l){console.error(l)}gc(e)})})}))}const Bn=(e,t)=>{const i=ac(e,!0,Gs()),n=nc(i);if(!n.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(n.loaded,n.missing,n.pending,Ro)}),()=>{l=!1}}const o=Object.create(null),s=[];let r,a;return n.pending.forEach(l=>{const{provider:d,prefix:u}=l;if(u===a&&d===r)return;r=d,a=u,s.push(Et(d,u));const c=o[d]||(o[d]=Object.create(null));c[u]||(c[u]=[])}),n.pending.forEach(l=>{const{provider:d,prefix:u,name:c}=l,h=Et(d,u),p=h.pendingIcons||(h.pendingIcons=new Set);p.has(c)||(p.add(c),o[d][u].push(c))}),s.forEach(l=>{const{provider:d,prefix:u}=l;o[d][u].length&&vc(l,o[d][u])}),t?rc(t,n,s):Ro},yc=e=>new Promise((t,i)=>{const n=typeof e=="string"?ni(e,!0):e;if(!n){i(e);return}Bn([n||e],o=>{if(o.length&&n){const s=Ve(n);if(s){t({...ii,...s});return}}i(e)})});function _c(e){try{const t=typeof e=="string"?JSON.parse(e):e;if(typeof t.body=="string")return{...t}}catch{}}function wc(e,t){const i=typeof e=="string"?ni(e,!0,!0):null;if(!i){const s=_c(e);return{value:e,data:s}}const n=Ve(i);if(n!==void 0||!i.prefix)return{value:e,name:i,data:n};const o=Bn([i],()=>t(e,i,Ve(i)));return{value:e,name:i,loading:o}}function cn(e){return e.hasAttribute("inline")}let sr=!1;try{sr=navigator.vendor.indexOf("Apple")===0}catch{}function xc(e,t){switch(t){case"svg":case"bg":case"mask":return t}return t!=="style"&&(sr||e.indexOf("<a")===-1)?"svg":e.indexOf("currentColor")===-1?"bg":"mask"}const $c=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Cc=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function wn(e,t,i){if(t===1)return e;if(i=i||100,typeof e=="number")return Math.ceil(e*t*i)/i;if(typeof e!="string")return e;const n=e.split($c);if(n===null||!n.length)return e;const o=[];let s=n.shift(),r=Cc.test(s);for(;;){if(r){const a=parseFloat(s);isNaN(a)?o.push(s):o.push(Math.ceil(a*t*i)/i)}else o.push(s);if(s=n.shift(),s===void 0)return o.join("");r=!r}}function Ac(e,t="defs"){let i="";const n=e.indexOf("<"+t);for(;n>=0;){const o=e.indexOf(">",n),s=e.indexOf("</"+t);if(o===-1||s===-1)break;const r=e.indexOf(">",s);if(r===-1)break;i+=e.slice(o+1,s).trim(),e=e.slice(0,n).trim()+e.slice(r+1)}return{defs:i,content:e}}function Sc(e,t){return e?"<defs>"+e+"</defs>"+t:t}function kc(e,t,i){const n=Ac(e);return Sc(n.defs,t+n.content+i)}const Ec=e=>e==="unset"||e==="undefined"||e==="none";function rr(e,t){const i={...ii,...e},n={...Vs,...t},o={left:i.left,top:i.top,width:i.width,height:i.height};let s=i.body;[i,n].forEach(y=>{const g=[],f=y.hFlip,_=y.vFlip;let w=y.rotate;f?_?w+=2:(g.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),g.push("scale(-1 1)"),o.top=o.left=0):_&&(g.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),g.push("scale(1 -1)"),o.top=o.left=0);let x;switch(w<0&&(w-=Math.floor(w/4)*4),w=w%4,w){case 1:x=o.height/2+o.top,g.unshift("rotate(90 "+x.toString()+" "+x.toString()+")");break;case 2:g.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:x=o.width/2+o.left,g.unshift("rotate(-90 "+x.toString()+" "+x.toString()+")");break}w%2===1&&(o.left!==o.top&&(x=o.left,o.left=o.top,o.top=x),o.width!==o.height&&(x=o.width,o.width=o.height,o.height=x)),g.length&&(s=kc(s,'<g transform="'+g.join(" ")+'">',"</g>"))});const r=n.width,a=n.height,l=o.width,d=o.height;let u,c;r===null?(c=a===null?"1em":a==="auto"?d:a,u=wn(c,l/d)):(u=r==="auto"?l:r,c=a===null?wn(u,d/l):a==="auto"?d:a);const h={},p=(y,g)=>{Ec(g)||(h[y]=g.toString())};p("width",u),p("height",c);const b=[o.left,o.top,l,d];return h.viewBox=b.join(" "),{attributes:h,viewBox:b,body:s}}function Un(e,t){let i=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const n in t)i+=" "+n+'="'+t[n]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+i+">"+e+"</svg>"}function Tc(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Oc(e){return"data:image/svg+xml,"+Tc(e)}function ar(e){return'url("'+Oc(e)+'")'}const Pc=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let Ii=Pc();function Ic(e){Ii=e}function Nc(){return Ii}function Rc(e,t){const i=Yi(e);if(!i)return 0;let n;if(!i.maxURL)n=0;else{let o=0;i.resources.forEach(r=>{o=Math.max(o,r.length)});const s=t+".json?icons=";n=i.maxURL-o-i.path.length-s.length}return n}function Mc(e){return e===404}const zc=(e,t,i)=>{const n=[],o=Rc(e,t),s="icons";let r={type:s,provider:e,prefix:t,icons:[]},a=0;return i.forEach((l,d)=>{a+=l.length+1,a>=o&&d>0&&(n.push(r),r={type:s,provider:e,prefix:t,icons:[]},a=l.length),r.icons.push(l)}),n.push(r),n};function Lc(e){if(typeof e=="string"){const t=Yi(e);if(t)return t.path}return"/"}const jc=(e,t,i)=>{if(!Ii){i("abort",424);return}let n=Lc(t.provider);switch(t.type){case"icons":{const s=t.prefix,r=t.icons.join(","),a=new URLSearchParams({icons:r});n+=s+".json?"+a.toString();break}case"custom":{const s=t.uri;n+=s.slice(0,1)==="/"?s.slice(1):s;break}default:i("abort",400);return}let o=503;Ii(e+n).then(s=>{const r=s.status;if(r!==200){setTimeout(()=>{i(Mc(r)?"abort":"next",r)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?i("abort",s):i("next",o)});return}setTimeout(()=>{i("success",s)})}).catch(()=>{i("next",o)})},Dc={prepare:zc,send:jc};function Mo(e,t){switch(e){case"local":case"session":Ht[e]=t;break;case"all":for(const i in Ht)Ht[i]=t;break}}const dn="data-style";let lr="";function Fc(e){lr=e}function zo(e,t){let i=Array.from(e.childNodes).find(n=>n.hasAttribute&&n.hasAttribute(dn));i||(i=document.createElement("style"),i.setAttribute(dn,dn),e.appendChild(i)),i.textContent=":host{display:inline-block;vertical-align:"+(t?"-0.125em":"0")+"}span,svg{display:block}"+lr}function cr(){Eo("",Dc),Gs(!0);let e;try{e=window}catch{}if(e){if(or(),e.IconifyPreload!==void 0){const t=e.IconifyPreload,i="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(n=>{try{(typeof n!="object"||n===null||n instanceof Array||typeof n.icons!="object"||typeof n.prefix!="string"||!So(n))&&console.error(i)}catch{console.error(i)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(const i in t){const n="IconifyProviders["+i+"] is invalid.";try{const o=t[i];if(typeof o!="object"||!o||o.resources===void 0)continue;To(i,o)||console.error(n)}catch{console.error(n)}}}}return{enableCache:t=>Mo(t,!0),disableCache:t=>Mo(t,!1),iconLoaded:ko,iconExists:ko,getIcon:ic,listIcons:ec,addIcon:Xs,addCollection:So,calculateSize:wn,buildIcon:rr,iconToHTML:Un,svgToURL:ar,loadIcons:Bn,loadIcon:yc,addAPIProvider:To,appendCustomStyle:Fc,_api:{getAPIConfig:Yi,setAPIModule:Eo,sendAPIQuery:Zs,setFetch:Ic,getFetch:Nc,listAPIProviders:dc}}}const xn={"background-color":"currentColor"},dr={"background-color":"transparent"},Lo={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},jo={"-webkit-mask":xn,mask:xn,background:dr};for(const e in jo){const t=jo[e];for(const i in Lo)t[e+"-"+i]=Lo[i]}function Do(e){return e?e+(e.match(/^[-0-9.]+$/)?"px":""):"inherit"}function Hc(e,t,i){const n=document.createElement("span");let o=e.body;o.indexOf("<a")!==-1&&(o+="<!-- "+Date.now()+" -->");const s=e.attributes,r=Un(o,{...s,width:t.width+"",height:t.height+""}),a=ar(r),l=n.style,d={"--svg":a,width:Do(s.width),height:Do(s.height),...i?xn:dr};for(const u in d)l.setProperty(u,d[u]);return n}let ze;function Bc(){try{ze=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch{ze=null}}function Uc(e){return ze===void 0&&Bc(),ze?ze.createHTML(e):e}function Vc(e){const t=document.createElement("span"),i=e.attributes;let n="";i.width||(n="width: inherit;"),i.height||(n+="height: inherit;"),n&&(i.style=n);const o=Un(e.body,i);return t.innerHTML=Uc(o),t.firstChild}function $n(e){return Array.from(e.childNodes).find(t=>{const i=t.tagName&&t.tagName.toUpperCase();return i==="SPAN"||i==="SVG"})}function Fo(e,t){const i=t.icon.data,n=t.customisations,o=rr(i,n);n.preserveAspectRatio&&(o.attributes.preserveAspectRatio=n.preserveAspectRatio);const s=t.renderedMode;let r;switch(s){case"svg":r=Vc(o);break;default:r=Hc(o,{...ii,...i},s==="mask")}const a=$n(e);a?r.tagName==="SPAN"&&a.tagName===r.tagName?a.setAttribute("style",r.getAttribute("style")):e.replaceChild(r,a):e.appendChild(r)}function Ho(e,t,i){const n=i&&(i.rendered?i:i.lastRender);return{rendered:!1,inline:t,icon:e,lastRender:n}}function qc(e="iconify-icon"){let t,i;try{t=window.customElements,i=window.HTMLElement}catch{return}if(!t||!i)return;const n=t.get(e);if(n)return n;const o=["icon","mode","inline","observe","width","height","rotate","flip"],s=class extends i{constructor(){super(),zt(this,"_shadowRoot"),zt(this,"_initialised",!1),zt(this,"_state"),zt(this,"_checkQueued",!1),zt(this,"_connected",!1),zt(this,"_observer",null),zt(this,"_visible",!0);const a=this._shadowRoot=this.attachShadow({mode:"open"}),l=cn(this);zo(a,l),this._state=Ho({value:""},l),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return o.slice(0)}attributeChangedCallback(a){switch(a){case"inline":{const l=cn(this),d=this._state;l!==d.inline&&(d.inline=l,zo(this._shadowRoot,l));break}case"observer":{this.observer?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const a=this.getAttribute("icon");if(a&&a.slice(0,1)==="{")try{return JSON.parse(a)}catch{}return a}set icon(a){typeof a=="object"&&(a=JSON.stringify(a)),this.setAttribute("icon",a)}get inline(){return cn(this)}set inline(a){a?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(a){a?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const a=this._state;if(a.rendered){const l=this._shadowRoot;if(a.renderedMode==="svg")try{l.lastChild.setCurrentTime(0);return}catch{}Fo(l,a)}}get status(){const a=this._state;return a.rendered?"rendered":a.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const a=this._state,l=this.getAttribute("icon");if(l!==a.icon.value){this._iconChanged(l);return}if(!a.rendered||!this._visible)return;const d=this.getAttribute("mode"),u=Co(this);(a.attrMode!==d||Gl(a.customisations,u)||!$n(this._shadowRoot))&&this._renderIcon(a.icon,u,d)}_iconChanged(a){const l=wc(a,(d,u,c)=>{const h=this._state;if(h.rendered||this.getAttribute("icon")!==d)return;const p={value:d,name:u,data:c};p.data?this._gotIconData(p):h.icon=p});l.data?this._gotIconData(l):this._state=Ho(l,this._state.inline,this._state)}_forceRender(){if(!this._visible){const a=$n(this._shadowRoot);a&&this._shadowRoot.removeChild(a);return}this._queueCheck()}_gotIconData(a){this._checkQueued=!1,this._renderIcon(a,Co(this),this.getAttribute("mode"))}_renderIcon(a,l,d){const u=xc(a.data.body,d),c=this._state.inline;Fo(this._shadowRoot,this._state={rendered:!0,icon:a,inline:c,customisations:l,attrMode:d,renderedMode:u})}startObserver(){if(!this._observer)try{this._observer=new IntersectionObserver(a=>{const l=a.some(d=>d.isIntersecting);l!==this._visible&&(this._visible=l,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};o.forEach(a=>{a in s.prototype||Object.defineProperty(s.prototype,a,{get:function(){return this.getAttribute(a)},set:function(l){l!==null?this.setAttribute(a,l):this.removeAttribute(a)}})});const r=cr();for(const a in r)s[a]=s.prototype[a]=r[a];return t.define(e,s),s}const Wc=qc()||cr(),{enableCache:rp,disableCache:ap,iconLoaded:lp,iconExists:cp,getIcon:dp,listIcons:up,addIcon:hp,addCollection:pp,calculateSize:mp,buildIcon:fp,iconToHTML:bp,svgToURL:gp,loadIcons:vp,loadIcon:yp,addAPIProvider:_p,_api:wp}=Wc,Yc=P`
  ::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
    overflow: hidden;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.25rem;
    background-color: var(
      --bim-scrollbar--c,
      color-mix(in lab, var(--bim-ui_main-base), white 15%)
    );
  }

  ::-webkit-scrollbar-track {
    background-color: var(--bim-scrollbar--bgc, var(--bim-ui_bg-base));
  }

  @media screen and (max-width: 480px) {
    ::-webkit-scrollbar {
      width: 0.2rem;
      height: 0.2rem;
    }
  }
`,Gc=P`
  :root {
    /* Grayscale Colors */
    --bim-ui_gray-0: hsl(210 10% 5%);
    --bim-ui_gray-1: hsl(210 10% 10%);
    --bim-ui_gray-2: hsl(210 10% 20%);
    --bim-ui_gray-3: hsl(210 10% 30%);
    --bim-ui_gray-4: hsl(210 10% 40%);
    --bim-ui_gray-6: hsl(210 10% 60%);
    --bim-ui_gray-7: hsl(210 10% 70%);
    --bim-ui_gray-8: hsl(210 10% 80%);
    --bim-ui_gray-9: hsl(210 10% 90%);
    --bim-ui_gray-10: hsl(210 10% 95%);

    /* Brand Colors */
    --bim-ui_main-base: #6528d7;
    --bim-ui_accent-base: #bcf124;

    /* Brand Colors Contrasts */
    --bim-ui_main-contrast: var(--bim-ui_gray-10);
    --bim-ui_accent-contrast: var(--bim-ui_gray-0);

    /* Sizes */
    --bim-ui_size-4xs: 0.375rem;
    --bim-ui_size-3xs: 0.5rem;
    --bim-ui_size-2xs: 0.625rem;
    --bim-ui_size-xs: 0.75rem;
    --bim-ui_size-sm: 0.875rem;
    --bim-ui_size-base: 1rem;
    --bim-ui_size-lg: 1.125rem;
    --bim-ui_size-xl: 1.25rem;
    --bim-ui_size-2xl: 1.375rem;
    --bim-ui_size-3xl: 1.5rem;
    --bim-ui_size-4xl: 1.625rem;
    --bim-ui_size-5xl: 1.75rem;
    --bim-ui_size-6xl: 1.875rem;
    --bim-ui_size-7xl: 2rem;
    --bim-ui_size-8xl: 2.125rem;
    --bim-ui_size-9xl: 2.25rem;
  }

  /* Background Colors */
  @media (prefers-color-scheme: dark) {
    :root {
      --bim-ui_bg-base: var(--bim-ui_gray-0);
      --bim-ui_bg-contrast-10: var(--bim-ui_gray-1);
      --bim-ui_bg-contrast-20: var(--bim-ui_gray-2);
      --bim-ui_bg-contrast-30: var(--bim-ui_gray-3);
      --bim-ui_bg-contrast-40: var(--bim-ui_gray-4);
      --bim-ui_bg-contrast-60: var(--bim-ui_gray-6);
      --bim-ui_bg-contrast-80: var(--bim-ui_gray-8);
      --bim-ui_bg-contrast-100: var(--bim-ui_gray-10);
    }
  }

  @media (prefers-color-scheme: light) {
    :root {
      --bim-ui_bg-base: var(--bim-ui_gray-10);
      --bim-ui_bg-contrast-10: var(--bim-ui_gray-9);
      --bim-ui_bg-contrast-20: var(--bim-ui_gray-8);
      --bim-ui_bg-contrast-30: var(--bim-ui_gray-7);
      --bim-ui_bg-contrast-40: var(--bim-ui_gray-6);
      --bim-ui_bg-contrast-60: var(--bim-ui_gray-4);
      --bim-ui_bg-contrast-80: var(--bim-ui_gray-2);
      --bim-ui_bg-contrast-100: var(--bim-ui_gray-0);
      --bim-ui_accent-base: #6528d7;
    }
  }

  .theme-transition-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    filter: drop-shadow(0 0 10px var(--bim-ui_bg-base));
    z-index: 9999;
  }

  .theme-transition-overlay > div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bim-ui_bg-base);
  }

  html.bim-ui-dark {
    --bim-ui_bg-base: var(--bim-ui_gray-0);
    --bim-ui_bg-contrast-10: var(--bim-ui_gray-1);
    --bim-ui_bg-contrast-20: var(--bim-ui_gray-2);
    --bim-ui_bg-contrast-30: var(--bim-ui_gray-3);
    --bim-ui_bg-contrast-40: var(--bim-ui_gray-4);
    --bim-ui_bg-contrast-60: var(--bim-ui_gray-6);
    --bim-ui_bg-contrast-80: var(--bim-ui_gray-8);
    --bim-ui_bg-contrast-100: var(--bim-ui_gray-10);
  }

  html.bim-ui-light {
    --bim-ui_bg-base: var(--bim-ui_gray-10);
    --bim-ui_bg-contrast-10: var(--bim-ui_gray-9);
    --bim-ui_bg-contrast-20: var(--bim-ui_gray-8);
    --bim-ui_bg-contrast-30: var(--bim-ui_gray-7);
    --bim-ui_bg-contrast-40: var(--bim-ui_gray-6);
    --bim-ui_bg-contrast-60: var(--bim-ui_gray-4);
    --bim-ui_bg-contrast-80: var(--bim-ui_gray-2);
    --bim-ui_bg-contrast-100: var(--bim-ui_gray-0);
    --bim-ui_accent-base: #6528d7;
  }

  /* Mobile Sizes */
  @media screen and (max-width: 480px) {
    :root {
      --bim-ui_size-xs: 0.7rem;
      --bim-ui_size-sm: 0.8rem;
      --bim-ui_size-5xl: 1.7rem;
    }
  }

  @keyframes toggleOverlay {
    0%,
    99% {
      display: block;
    }

    100% {
      display: none;
    }
  }

  @keyframes toggleThemeAnimation {
    0% {
      clip-path: circle(0% at center top);
    }
    45%,
    55% {
      clip-path: circle(150% at center center);
    }
    100% {
      clip-path: circle(0% at center bottom);
    }
  }

  [data-context-dialog]::backdrop {
    background-color: transparent;
  }
`,Ot={scrollbar:Yc,globalStyles:Gc},ur=class E{static set config(t){this._config={...E._config,...t}}static get config(){return E._config}static addGlobalStyles(){let t=document.querySelector("style[id='bim-ui']");if(t)return;t=document.createElement("style"),t.id="bim-ui",t.textContent=Ot.globalStyles.cssText;const i=document.head.firstChild;i?document.head.insertBefore(t,i):document.head.append(t)}static defineCustomElement(t,i){customElements.get(t)||customElements.define(t,i)}static registerComponents(){E.init()}static init(t="",i=!0){E.addGlobalStyles(),E.defineCustomElement("bim-button",id),E.defineCustomElement("bim-checkbox",ge),E.defineCustomElement("bim-color-input",Xt),E.defineCustomElement("bim-context-menu",An),E.defineCustomElement("bim-dropdown",vt),E.defineCustomElement("bim-grid",qn),E.defineCustomElement("bim-icon",pd),E.defineCustomElement("bim-input",ri),E.defineCustomElement("bim-label",we),E.defineCustomElement("bim-number-input",K),E.defineCustomElement("bim-option",H),E.defineCustomElement("bim-panel",yt),E.defineCustomElement("bim-panel-section",_e),E.defineCustomElement("bim-selector",xe),E.defineCustomElement("bim-table",st),E.defineCustomElement("bim-tabs",Nt),E.defineCustomElement("bim-tab",X),E.defineCustomElement("bim-table-cell",Sr),E.defineCustomElement("bim-table-children",Er),E.defineCustomElement("bim-table-group",Or),E.defineCustomElement("bim-table-row",Jt),E.defineCustomElement("bim-text-input",rt),E.defineCustomElement("bim-toolbar",Ki),E.defineCustomElement("bim-toolbar-group",Qi),E.defineCustomElement("bim-toolbar-section",Ae),E.defineCustomElement("bim-viewport",Hr),i&&this.animateOnLoad(t)}static newRandomId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let i="";for(let n=0;n<10;n++){const o=Math.floor(Math.random()*t.length);i+=t.charAt(o)}return i}static animateOnLoad(t=""){const i=`
      bim-input,
      bim-button,
      bim-checkbox,
      bim-selector,
      bim-label,
      bim-table-row,
      bim-panel-section,
      bim-table-children .branch-vertical,
      .switchers
    `,n=[];function o(s,r=document,a=new Set){const l=[];return Array.from(r.querySelectorAll(s)).forEach(d=>{a.has(d)||(a.add(d),l.push(d))}),Array.from(r.querySelectorAll("*")).filter(d=>d.shadowRoot).forEach(d=>{a.has(d)||(a.add(d),l.push(...o(s,d.shadowRoot,a)))}),l}requestAnimationFrame(()=>{o(t||i).forEach(r=>{const a=r;let l="auto";l=window.getComputedStyle(a).getPropertyValue("transition"),a.style.setProperty("opacity","0"),a.style.setProperty("transition","none"),requestAnimationFrame(()=>{a.style.setProperty("transition",l)}),n.push(a)});const s=()=>{n.forEach(r=>{const a=r,l=(a.getBoundingClientRect().x+a.getBoundingClientRect().y)/(window.innerWidth+window.innerHeight),d=window.getComputedStyle(a).getPropertyValue("transform"),u=400,c=200+l*1e3;a.animate([{transform:"translateY(-20px)",opacity:"0"},{transform:"translateY(0)",opacity:"1"}],{duration:u,easing:"ease-in-out",delay:c}),setTimeout(()=>{a.style.removeProperty("opacity"),d!=="none"?a.style.setProperty("transform",d):a.style.removeProperty("transform")},c+u)})};document.readyState==="complete"?s():window.addEventListener("load",s)})}static toggleTheme(t=!0){const i=document.querySelector("html");if(!i)return;const n=()=>{i.classList.contains("bim-ui-dark")?i.classList.replace("bim-ui-dark","bim-ui-light"):i.classList.contains("bim-ui-light")?i.classList.replace("bim-ui-light","bim-ui-dark"):i.classList.add("bim-ui-light")};if(t){const o=document.createElement("div");o.classList.add("theme-transition-overlay");const s=document.createElement("div");o.appendChild(s),s.style.setProperty("transition",`background-color ${1e3/3200}s`),document.body.appendChild(o),o.style.setProperty("animation",`toggleOverlay ${1e3/1e3}s ease-in forwards`),s.style.setProperty("animation",`toggleThemeAnimation ${1e3/1e3}s ease forwards`),setTimeout(()=>{n()},1e3/4),setTimeout(()=>{document.body.querySelectorAll(".theme-transition-overlay").forEach(r=>{document.body.removeChild(r)})},1e3)}else n()}};ur._config={sectionLabelOnVerticalToolbar:!1};let Z=ur;class j extends T{constructor(){super(...arguments),this._lazyLoadObserver=null,this._visibleElements=[],this.ELEMENTS_BEFORE_OBSERVER=20,this.useObserver=!1,this.elements=new Set,this.observe=t=>{if(!this.useObserver)return;for(const n of t)this.elements.add(n);const i=t.slice(this.ELEMENTS_BEFORE_OBSERVER);for(const n of i)n.remove();this.observeLastElement()}}set visibleElements(t){this._visibleElements=this.useObserver?t:[],this.requestUpdate()}get visibleElements(){return this._visibleElements}getLazyObserver(){if(!this.useObserver)return null;if(this._lazyLoadObserver)return this._lazyLoadObserver;const t=new IntersectionObserver(i=>{const n=i[0];if(!n.isIntersecting)return;const o=n.target;t.unobserve(o);const s=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length,r=[...this.elements][s];r&&(this.visibleElements=[...this.visibleElements,r],t.observe(r))},{threshold:.5});return t}observeLastElement(){const t=this.getLazyObserver();if(!t)return;const i=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length-1,n=[...this.elements][i];n&&t.observe(n)}resetVisibleElements(){const t=this.getLazyObserver();if(t){for(const i of this.elements)t.unobserve(i);this.visibleElements=[],this.observeLastElement()}}static create(t,i){const n=document.createDocumentFragment();if(t.length===0)return ce(t(),n),n.firstElementChild;if(!i)throw new Error("UIComponent: Initial state is required for statefull components.");let o=i;const s=t,r=l=>(o={...o,...l},ce(s(o,r),n),o);r(i);const a=()=>o;return[n.firstElementChild,r,a]}}const We=(e,t={},i=!0)=>{let n={};for(const o of e.children){const s=o,r=s.getAttribute("name")||s.getAttribute("label"),a=t[r];if(r){if("value"in s&&typeof s.value<"u"&&s.value!==null){const l=s.value;if(typeof l=="object"&&!Array.isArray(l)&&Object.keys(l).length===0)continue;n[r]=a?a(s.value):s.value}else if(i){const l=We(s,t);if(Object.keys(l).length===0)continue;n[r]=a?a(l):l}}else i&&(n={...n,...We(s,t)})}return n},Gi=e=>e==="true"||e==="false"?e==="true":e&&!isNaN(Number(e))&&e.trim()!==""?Number(e):e,Xc=[">=","<=","=",">","<","?","/","#"];function Bo(e){const t=Xc.find(r=>e.split(r).length===2),i=e.split(t).map(r=>r.trim()),[n,o]=i,s=o.startsWith("'")&&o.endsWith("'")?o.replace(/'/g,""):Gi(o);return{key:n,condition:t,value:s}}const Cn=e=>{try{const t=[],i=e.split(/&(?![^()]*\))/).map(n=>n.trim());for(const n of i){const o=!n.startsWith("(")&&!n.endsWith(")"),s=n.startsWith("(")&&n.endsWith(")");if(o){const r=Bo(n);t.push(r)}if(s){const r={operator:"&",queries:n.replace(/^(\()|(\))$/g,"").split("&").map(a=>a.trim()).map((a,l)=>{const d=Bo(a);return l>0&&(d.operator="&"),d})};t.push(r)}}return t}catch{return null}},Uo=(e,t,i)=>{let n=!1;switch(t){case"=":n=e===i;break;case"?":n=String(e).includes(String(i));break;case"<":(typeof e=="number"||typeof i=="number")&&(n=e<i);break;case"<=":(typeof e=="number"||typeof i=="number")&&(n=e<=i);break;case">":(typeof e=="number"||typeof i=="number")&&(n=e>i);break;case">=":(typeof e=="number"||typeof i=="number")&&(n=e>=i);break;case"/":n=String(e).startsWith(String(i));break}return n};var Jc=Object.defineProperty,Qc=Object.getOwnPropertyDescriptor,hr=(e,t,i,n)=>{for(var o=Qc(t,i),s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&Jc(t,i,o),o},F;const Vn=(F=class extends T{constructor(){super(...arguments),this._previousContainer=null,this._visible=!1}get placement(){return this._placement}set placement(e){this._placement=e,this.updatePosition()}static removeMenus(){for(const e of F.menus)e instanceof F&&(e.visible=!1);setTimeout(()=>{F.dialog.close(),F.dialog.remove()},310)}get visible(){return this._visible}set visible(e){this._visible=e,e?(F.dialog.parentElement||document.body.append(F.dialog),this._previousContainer=this.parentElement,F.dialog.style.top=`${window.scrollY||document.documentElement.scrollTop}px`,this.style.setProperty("display","flex"),F.dialog.append(this),F.dialog.showModal(),this.updatePosition(),this.dispatchEvent(new Event("visible"))):setTimeout(()=>{var t;(t=this._previousContainer)==null||t.append(this),this._previousContainer=null,this.style.setProperty("display","none"),this.dispatchEvent(new Event("hidden"))},300)}async updatePosition(){if(!(this.visible&&this._previousContainer))return;const e=this.placement??"right",t=await Ns(this._previousContainer,this,{placement:e,middleware:[ys(10),Is(),Ps(),Os({padding:5})]}),i=Math.min(t.x,window.innerWidth-this.clientWidth-10),n=t.y;this.style.left=`${i}px`,this.style.top=`${n}px`}connectedCallback(){super.connectedCallback(),F.menus.push(this),this.visible?(this.style.setProperty("width","auto"),this.style.setProperty("height","auto")):(this.style.setProperty("width","0"),this.style.setProperty("height","0"))}render(){return m` <slot></slot> `}},F.styles=[Ot.scrollbar,P`
      :host {
        pointer-events: auto;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        overflow: auto;
        max-height: 20rem;
        min-width: 3rem;
        flex-direction: column;
        box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
        padding: 0.5rem;
        border-radius: var(--bim-ui_size-4xs);
        display: flex;
        transform-origin: top left;
        transform: scale(1);
        clip-path: circle(150% at top left);
        background-color: var(
          --bim-context-menu--bgc,
          var(--bim-ui_bg-contrast-20)
        );
        transition:
          clip-path 0.2s cubic-bezier(0.72, 0.1, 0.43, 0.93),
          transform 0.3s cubic-bezier(0.72, 0.1, 0.45, 2.35);
      }

      :host(:not([visible])) {
        transform: scale(0.8);
        clip-path: circle(0 at top left);
      }
    `],F.dialog=j.create(()=>m` <dialog
      @click=${e=>{e.target===F.dialog&&F.removeMenus()}}
      @cancel=${()=>F.removeMenus()}
      data-context-dialog
      style="
      width: 0;
      height: 0;
      position: relative;
      padding: 0;
      border: none;
      outline: none;
      margin: none;
      overflow: visible;
      background-color: transparent;
    "
    ></dialog>`),F.menus=[],F);hr([v({type:String,reflect:!0})],Vn.prototype,"placement");hr([v({type:Boolean,reflect:!0})],Vn.prototype,"visible");let An=Vn;const Zc=()=>{let e=!1;return(t=>{(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(t.substr(0,4)))&&(e=!0)})(navigator.userAgent),e},Kc=()=>matchMedia("(hover: none), (pointer: coarse)").matches,bi=({mobile:e,tablet:t}={})=>{const i=e??480,n=t??768,o=window.innerWidth;if(o<=i)return"mobile";if(o>i&&o<=n)return"tablet";if(o>n)return"desktop";throw new Error("The window isn't detected or have a strange size")};var td=Object.defineProperty,ed=Object.getOwnPropertyDescriptor,lt=(e,t,i,n)=>{for(var o=n>1?void 0:n?ed(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&td(t,i,o),o},Oe;const nt=(Oe=class extends T{constructor(){super(),this.labelHidden=!1,this.active=!1,this.disabled=!1,this.vertical=!1,this.tooltipVisible=!1,this._stateBeforeLoading={disabled:!1,icon:""},this._loading=!1,this._parent=de(),this._tooltip=de(),this._tooltipHidden=!1,this.onClick=e=>{e.stopPropagation(),this.disabled||this.dispatchEvent(new Event("click"))},this.showContextMenu=()=>{const e=this._contextMenu;if(e){const t=this.getAttribute("data-context-group");t&&e.setAttribute("data-context-group",t),this.closeNestedContexts();const i=Z.newRandomId();for(const n of e.children)n instanceof Oe&&n.setAttribute("data-context-group",i);e.visible=!0}},this.tooltipHidden=!0}set loading(e){if(this._loading=e,e)this._stateBeforeLoading={disabled:this.disabled,icon:this.icon},this.disabled=e,this.icon="eos-icons:loading";else{const{disabled:t,icon:i}=this._stateBeforeLoading;this.disabled=t,this.icon=i}}get loading(){return this._loading}set tooltipHidden(e){this._tooltipHidden=e,e&&(this.tooltipVisible=!1,clearTimeout(this.timeoutID))}get tooltipHidden(){return this._tooltipHidden}computeTooltipPosition(){const{value:e}=this._parent,{value:t}=this._tooltip;e&&t&&Ns(e,t,{placement:"bottom",middleware:[ys(10),Is(),Ps(),Os({padding:5})]}).then(i=>{const{x:n,y:o}=i;Object.assign(t.style,{left:`${n}px`,top:`${o}px`})})}showTooltip(){if(!(this.tooltipTitle||this.tooltipText))return;this.tooltipHidden=!1;const e=this.tooltipTime??700;this.timeoutID=setTimeout(()=>{this.tooltipHidden||(this.computeTooltipPosition(),this.tooltipVisible=!0)},e)}closeNestedContexts(){const e=this.getAttribute("data-context-group");if(e)for(const t of An.dialog.children){const i=t.getAttribute("data-context-group");if(t instanceof An&&i===e){t.visible=!1,t.removeAttribute("data-context-group");for(const n of t.children)n instanceof Oe&&(n.closeNestedContexts(),n.removeAttribute("data-context-group"))}}}click(){this.disabled||super.click()}get _contextMenu(){return this.querySelector("bim-context-menu")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.showContextMenu),this.addTooltipEvents()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.showContextMenu)}addTooltipEvents(){Zc()||Kc()?this.addEventListener("contextmenu",e=>{e.preventDefault(),this.tooltipTime=0,this.showTooltip()}):this.addEventListener("mouseenter",this.showTooltip),this.addEventListener("mouseleave",()=>{this.tooltipHidden=!0})}render(){const e=m`
      <div ${W(this._tooltip)} class="tooltip">
        ${this.tooltipTitle?m`<p style="text-wrap: nowrap;">
              <strong>${this.tooltipTitle}</strong>
            </p>`:null}
        ${this.tooltipText?m`<p style="width: 9rem;">${this.tooltipText}</p>`:null}
      </div>
    `,t=m`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
      style="fill: var(--bim-label--c)"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>`;return m`
      <div ${W(this._parent)} class="parent" @click=${this.onClick}>
        ${this.label||this.icon?m`
              <div class="button">
                <bim-label
                  .icon=${this.icon}
                  .vertical=${this.vertical}
                  .labelHidden=${this.labelHidden}
                  >${this.label}${this.label&&this._contextMenu?t:null}</bim-label
                >
              </div>
            `:null}
        ${this.tooltipTitle||this.tooltipText?e:null}
      </div>
      <slot></slot>
    `}},Oe.styles=P`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100, white);
      position: relative;
      display: block;
      flex: 1;
      pointer-events: none;
      background-color: var(--bim-button--bgc, var(--bim-ui_bg-contrast-20));
      border-radius: var(--bim-ui_size-4xs);
      transition: all 0.15s;
    }

    :host(:not([disabled]))::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: var(--bim-ui_main-base);
      clip-path: circle(0 at center center);
      box-sizing: border-box;
      transition:
        clip-path 0.3s cubic-bezier(0.65, 0.05, 0.36, 1),
        transform 0.15s;
    }

    :host(:not([disabled]):hover) {
      cursor: pointer;
    }

    bim-label {
      pointer-events: none;
    }

    .parent {
      --bim-icon--c: var(--bim-label--c);
      position: relative;
      display: flex;
      height: 100%;
      user-select: none;
      row-gap: 0.125rem;
      min-height: var(--bim-ui_size-5xl);
      min-width: var(--bim-ui_size-5xl);
    }

    .button,
    .children {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: auto;
    }

    .children {
      padding: 0 0.375rem;
      position: absolute;
      height: 100%;
      right: 0;
    }

    :host(:not([label-hidden])[icon][vertical]) .parent {
      min-height: 2.5rem;
    }

    .button {
      flex-grow: 1;
      transition: transform 0.15s;
      overflow: hidden;
    }

    :host(:not([label-hidden])[label]) .button {
      justify-content: var(--bim-button--jc, center);
    }

    :host(:hover)::before {
      clip-path: circle(120% at center center);
    }

    :host(:hover) {
      --bim-label--c: var(--bim-ui_main-contrast);
      z-index: 2;
    }

    :host([active]) {
      background-color: var(--bim-ui_main-base);
    }

    :host(:not([disabled]):active) {
      background: transparent;
    }

    :host(:not([disabled]):active) .button,
    :host(:not([disabled]):active)::before {
      transform: scale(0.98);
    }

    :host(:not([label]):not([icon])) .children {
      flex: 1;
    }

    :host([vertical]) .parent {
      justify-content: center;
    }

    :host(:not([label-hidden])[label]) .button {
      padding: 0 0.5rem;
    }

    :host([disabled]) {
      --bim-label--c: var(--bim-ui_bg-contrast-80) !important;
      background-color: gray !important;
    }

    ::slotted(bim-button) {
      --bim-icon--fz: var(--bim-ui_size-base);
      --bim-button--bdrs: var(--bim-ui_size-4xs);
      --bim-button--olw: 0;
      --bim-button--olc: transparent;
    }

    .tooltip {
      position: absolute;
      padding: 0.75rem;
      z-index: 99;
      display: flex;
      flex-flow: column;
      row-gap: 0.375rem;
      box-shadow: 0 0 10px 3px rgba(0 0 0 / 20%);
      outline: 1px solid var(--bim-ui_bg-contrast-40);
      font-size: var(--bim-ui_size-xs);
      border-radius: var(--bim-ui_size-4xs);
      background-color: var(--bim-ui_bg-contrast-20);
      color: var(--bim-ui_bg-contrast-100);
      animation: openTooltips 0.15s ease-out forwards;
      transition: visibility 0.2s;
    }

    .tooltip p {
      margin: 0;
      padding: 0;
    }

    :host(:not([tooltip-visible])) .tooltip {
      animation: closeTooltips 0.15s ease-in forwards;
      visibility: hidden;
      display: none;
    }

    /* Mobile View */
    @media screen and (max-width: 480px) {
      :host(:not([label-hidden])[label]) .button {
        padding: 0 0.3rem;
      }
    }

    @keyframes closeTooltips {
      0% {
        display: flex;
        padding: 0.75rem;
        transform: translateY(0);
        opacity: 1;
      }
      90% {
        padding: 0.75rem;
      }
      100% {
        display: none;
        padding: 0;
        transform: translateY(-10px);
        opacity: 0;
      }
    }

    @keyframes openTooltips {
      0% {
        display: flex;
        transform: translateY(-10px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `,Oe);lt([v({type:String,reflect:!0})],nt.prototype,"label",2);lt([v({type:Boolean,attribute:"label-hidden",reflect:!0})],nt.prototype,"labelHidden",2);lt([v({type:Boolean,reflect:!0})],nt.prototype,"active",2);lt([v({type:Boolean,reflect:!0,attribute:"disabled"})],nt.prototype,"disabled",2);lt([v({type:String,reflect:!0})],nt.prototype,"icon",2);lt([v({type:Boolean,reflect:!0})],nt.prototype,"vertical",2);lt([v({type:Number,attribute:"tooltip-time",reflect:!0})],nt.prototype,"tooltipTime",2);lt([v({type:Boolean,attribute:"tooltip-visible",reflect:!0})],nt.prototype,"tooltipVisible",2);lt([v({type:String,attribute:"tooltip-title",reflect:!0})],nt.prototype,"tooltipTitle",2);lt([v({type:String,attribute:"tooltip-text",reflect:!0})],nt.prototype,"tooltipText",2);lt([v({type:Boolean,reflect:!0})],nt.prototype,"loading",1);let id=nt;var nd=Object.defineProperty,oi=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&nd(t,i,o),o};const pr=class extends T{constructor(){super(...arguments),this.checked=!1,this.inverted=!1,this.onValueChange=new Event("change")}get value(){return this.checked}onChange(e){e.stopPropagation(),this.checked=e.target.checked,this.dispatchEvent(this.onValueChange)}render(){const e=m`
      <svg viewBox="0 0 21 21">
        <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
      </svg>
    `;return m`
      <div class="parent">
        <label class="parent-label">
          ${this.label?m`<bim-label .icon="${this.icon}">${this.label}</bim-label> `:null}
          <div class="input-container">
            <input
              type="checkbox"
              aria-label=${this.label||this.name||"Checkbox Input"}
              @change="${this.onChange}"
              .checked="${this.checked}"
            />
            ${e}
          </div>
        </label>
      </div>
    `}};pr.styles=P`
    :host {
      display: block;
      overflow: hidden;
    }

    .parent-label {
      --background: #fff;
      --border: #dfdfe6;
      --stroke: #fff;
      --border-hover: var(--bim-ui_main-base);
      --border-active: var(--bim-ui_main-base);
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      width: 100%;
      height: 1.75rem;
      column-gap: 0.25rem;
      position: relative;
      cursor: pointer;
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
    }

    :host([inverted]) .parent-label {
      flex-direction: row-reverse;
      justify-content: start;
    }

    bim-label {
      /* 
       * 1rem = input width, 0.25rem = parent flex gab
       * in case you changed any othe mentioned above,
       * this better be changed accordingly
       */
      max-width: calc(100% - calc(1rem + 0.25rem));
    }

    input,
    svg {
      width: 1rem;
      height: 1rem;
      display: block;
    }

    input {
      -webkit-appearance: none;
      -moz-appearance: none;
      position: relative;
      outline: none;
      background: var(--background);
      border: none;
      margin: 0;
      padding: 0;
      cursor: pointer;
      border-radius: 4px;
      transition: box-shadow 0.3s;
      box-shadow: inset 0 0 0 var(--s, 1px) var(--b, var(--border));
    }

    svg {
      pointer-events: none;
      fill: none;
      stroke-width: 2.2px;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke: var(--stroke, var(--border-active));
      transform: translateY(-100%) scale(0);
      position: absolute;
      width: 1rem;
      height: 1rem;
    }

    input:hover {
      --s: 2px;
      --b: var(--border-hover);
    }

    input:checked {
      --b: var(--border-active);
      --s: 11px;
    }

    input:checked + svg {
      -webkit-animation: bounce 0.4s linear forwards 0.2s;
      animation: bounce 0.4s linear forwards 0.2s;
    }

    @keyframes bounce {
      0% {
        transform: translateY(-100%) scale(0);
      }
      50% {
        transform: translateY(-100%) scale(1.2);
      }
      75% {
        transform: translateY(-100%) scale(0.9);
      }
      100% {
        transform: translateY(-100%) scale(1);
      }
    }
  `;let ge=pr;oi([v({type:String,reflect:!0})],ge.prototype,"icon");oi([v({type:String,reflect:!0})],ge.prototype,"name");oi([v({type:String,reflect:!0})],ge.prototype,"label");oi([v({type:Boolean,reflect:!0})],ge.prototype,"checked");oi([v({type:Boolean,reflect:!0})],ge.prototype,"inverted");var od=Object.defineProperty,ve=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&od(t,i,o),o};const mr=class extends T{constructor(){super(...arguments),this.vertical=!1,this.color="#bcf124",this._colorInput=de(),this._textInput=de(),this.onValueChange=new Event("input"),this.onOpacityInput=e=>{const t=e.target;this.opacity=t.value,this.dispatchEvent(this.onValueChange)}}set value(e){const{color:t,opacity:i}=e;this.color=t,i&&(this.opacity=i)}get value(){const e={color:this.color};return this.opacity&&(e.opacity=this.opacity),e}onColorInput(e){e.stopPropagation();const{value:t}=this._colorInput;t&&(this.color=t.value,this.dispatchEvent(this.onValueChange))}onTextInput(e){e.stopPropagation();const{value:t}=this._textInput;if(!t)return;const{value:i}=t;let n=i.replace(/[^a-fA-F0-9]/g,"");n.startsWith("#")||(n=`#${n}`),t.value=n.slice(0,7),t.value.length===7&&(this.color=t.value,this.dispatchEvent(this.onValueChange))}focus(){const{value:e}=this._colorInput;e&&e.click()}render(){return m`
      <div class="parent">
        <bim-input
          .label=${this.label}
          .icon=${this.icon}
          .vertical="${this.vertical}"
        >
          <div class="color-container">
            <div
              style="display: flex; align-items: center; gap: .375rem; height: 100%; flex: 1; padding: 0 0.5rem;"
            >
              <input
                ${W(this._colorInput)}
                @input="${this.onColorInput}"
                type="color"
                aria-label=${this.label||this.name||"Color Input"}
                value="${this.color}"
              />
              <div
                @click=${this.focus}
                class="sample"
                style="background-color: ${this.color}"
              ></div>
              <input
                ${W(this._textInput)}
                @input="${this.onTextInput}"
                value="${this.color}"
                type="text"
                aria-label=${this.label||this.name||"Text Color Input"}
              />
            </div>
            ${this.opacity!==void 0?m`<bim-number-input
                  @change=${this.onOpacityInput}
                  slider
                  suffix="%"
                  min="0"
                  value=${this.opacity}
                  max="100"
                ></bim-number-input>`:null}
          </div>
        </bim-input>
      </div>
    `}};mr.styles=P`
    :host {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      flex: 1;
      display: block;
    }

    :host(:focus) {
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(--bim-ui_accent-base);
    }

    .parent {
      display: flex;
      gap: 0.375rem;
    }

    .color-container {
      position: relative;
      outline: none;
      display: flex;
      height: 100%;
      gap: 0.5rem;
      justify-content: flex-start;
      align-items: center;
      flex: 1;
      border-radius: var(--bim-color-input--bdrs, var(--bim-ui_size-4xs));
    }

    .color-container input[type="color"] {
      position: absolute;
      bottom: -0.25rem;
      visibility: hidden;
      width: 0;
      height: 0;
    }

    .color-container .sample {
      width: 1rem;
      height: 1rem;
      border-radius: 0.125rem;
      background-color: #fff;
    }

    .color-container input[type="text"] {
      height: 100%;
      flex: 1;
      width: 3.25rem;
      text-transform: uppercase;
      font-size: 0.75rem;
      background-color: transparent;
      padding: 0%;
      outline: none;
      border: none;
      color: var(--bim-color-input--c, var(--bim-ui_bg-contrast-100));
    }

    bim-number-input {
      flex-grow: 0;
    }
  `;let Xt=mr;ve([v({type:String,reflect:!0})],Xt.prototype,"name");ve([v({type:String,reflect:!0})],Xt.prototype,"label");ve([v({type:String,reflect:!0})],Xt.prototype,"icon");ve([v({type:Boolean,reflect:!0})],Xt.prototype,"vertical");ve([v({type:Number,reflect:!0})],Xt.prototype,"opacity");ve([v({type:String,reflect:!0})],Xt.prototype,"color");var sd=Object.defineProperty,rd=Object.getOwnPropertyDescriptor,Pt=(e,t,i,n)=>{for(var o=n>1?void 0:n?rd(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&sd(t,i,o),o};const fr=class extends T{constructor(){super(...arguments),this.checked=!1,this.checkbox=!1,this.noMark=!1,this.vertical=!1}get value(){return this._value!==void 0?this._value:this.label?Gi(this.label):this.label}set value(e){this._value=e}render(){return m`
      <div class="parent" .title=${this.label??""}>
        ${this.img||this.icon||this.label?m` <div style="display: flex; column-gap: 0.375rem">
              ${this.checkbox&&!this.noMark?m`<bim-checkbox
                    style="pointer-events: none"
                    .checked=${this.checked}
                  ></bim-checkbox>`:null}
              <bim-label
                .vertical=${this.vertical}
                .icon=${this.icon}
                .img=${this.img}
                >${this.label}</bim-label
              >
            </div>`:null}
        ${!this.checkbox&&!this.noMark&&this.checked?m`<svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.125rem"
              viewBox="0 0 24 24"
              width="1.125rem"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>`:null}
        <slot></slot>
      </div>
    `}};fr.styles=P`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100);
      display: block;
      box-sizing: border-box;
      flex: 1;
      padding: 0rem 0.5rem;
      border-radius: var(--bim-ui_size-4xs);
      transition: all 0.15s;
    }

    :host(:hover) {
      cursor: pointer;
    }

    :host([checked]) {
      --bim-label--c: color-mix(in lab, var(--bim-ui_main-base), white 30%);
    }

    :host([checked]) svg {
      fill: color-mix(in lab, var(--bim-ui_main-base), white 30%);
    }

    .parent {
      box-sizing: border-box;
      display: flex;
      justify-content: var(--bim-option--jc, space-between);
      column-gap: 0.5rem;
      align-items: center;
      min-height: 1.75rem;
      height: 100%;
    }

    input {
      height: 1rem;
      width: 1rem;
      cursor: pointer;
      border: none;
      outline: none;
      accent-color: var(--bim-checkbox--c, var(--bim-ui_main-base));
    }

    input:focus {
      outline: var(--bim-checkbox--olw, 2px) solid
        var(--bim-checkbox--olc, var(--bim-ui_accent-base));
    }

    bim-label {
      pointer-events: none;
      z-index: 1;
    }
  `;let H=fr;Pt([v({type:String,reflect:!0})],H.prototype,"img",2);Pt([v({type:String,reflect:!0})],H.prototype,"label",2);Pt([v({type:String,reflect:!0})],H.prototype,"icon",2);Pt([v({type:Boolean,reflect:!0})],H.prototype,"checked",2);Pt([v({type:Boolean,reflect:!0})],H.prototype,"checkbox",2);Pt([v({type:Boolean,attribute:"no-mark",reflect:!0})],H.prototype,"noMark",2);Pt([v({converter:{fromAttribute(e){return e&&Gi(e)}}})],H.prototype,"value",1);Pt([v({type:Boolean,reflect:!0})],H.prototype,"vertical",2);var ad=Object.defineProperty,ld=Object.getOwnPropertyDescriptor,It=(e,t,i,n)=>{for(var o=n>1?void 0:n?ld(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&ad(t,i,o),o};const br=class extends j{constructor(){super(),this.multiple=!1,this.required=!1,this.vertical=!1,this._visible=!1,this._value=new Set,this.onValueChange=new Event("change"),this._contextMenu=de(),this.onOptionClick=e=>{const t=e.target,i=this._value.has(t);if(!this.multiple&&!this.required&&!i)this._value=new Set([t]);else if(!this.multiple&&!this.required&&i)this._value=new Set([]);else if(!this.multiple&&this.required&&!i)this._value=new Set([t]);else if(this.multiple&&!this.required&&!i)this._value=new Set([...this._value,t]);else if(this.multiple&&!this.required&&i){const n=[...this._value].filter(o=>o!==t);this._value=new Set(n)}else if(this.multiple&&this.required&&!i)this._value=new Set([...this._value,t]);else if(this.multiple&&this.required&&i){const n=[...this._value].filter(s=>s!==t),o=new Set(n);o.size!==0&&(this._value=o)}this.updateOptionsState(),this.dispatchEvent(this.onValueChange)},this.useObserver=!0}set visible(e){if(e){const{value:t}=this._contextMenu;if(!t)return;for(const i of this.elements)t.append(i);this._visible=!0}else{for(const t of this.elements)this.append(t);this._visible=!1,this.resetVisibleElements()}}get visible(){return this._visible}set value(e){if(this.required&&Object.keys(e).length===0)return;const t=new Set;for(const i of e){const n=this.findOption(i);if(n&&(t.add(n),!this.multiple&&Object.keys(e).length===1))break}this._value=t,this.updateOptionsState(),this.dispatchEvent(this.onValueChange)}get value(){return[...this._value].filter(e=>e instanceof H&&e.checked).map(e=>e.value)}get _options(){const e=new Set([...this.elements]);for(const t of this.children)t instanceof H&&e.add(t);return[...e]}onSlotChange(e){const t=e.target.assignedElements();this.observe(t);const i=new Set;for(const n of this.elements){if(!(n instanceof H)){n.remove();continue}n.checked&&i.add(n),n.removeEventListener("click",this.onOptionClick),n.addEventListener("click",this.onOptionClick)}this._value=i}updateOptionsState(){for(const e of this._options)e instanceof H&&(e.checked=this._value.has(e))}findOption(e){return this._options.find(t=>t instanceof H?t.label===e||t.value===e:!1)}render(){let e,t,i;if(this._value.size===0)e="Select an option...";else if(this._value.size===1){const n=[...this._value][0];e=(n==null?void 0:n.label)||(n==null?void 0:n.value),t=n==null?void 0:n.img,i=n==null?void 0:n.icon}else e=`Multiple (${this._value.size})`;return m`
      <bim-input
        title=${this.label??""}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        <div class="input" @click=${()=>this.visible=!this.visible}>
          <bim-label
            .img=${t}
            .icon=${i}
            style="overflow: hidden;"
            >${e}</bim-label
          >
          <svg
            style="flex-shrink: 0; fill: var(--bim-dropdown--c, var(--bim-ui_bg-contrast-100))"
            xmlns="http://www.w3.org/2000/svg"
            height="1.125rem"
            viewBox="0 0 24 24"
            width="1.125rem"
            fill="#9ca3af"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
          <bim-context-menu
            ${W(this._contextMenu)}
            .visible=${this.visible}
            @hidden=${()=>{this.visible&&(this.visible=!1)}}
          >
            <slot @slotchange=${this.onSlotChange}></slot>
          </bim-context-menu>
        </div>
      </bim-input>
    `}};br.styles=[Ot.scrollbar,P`
      :host {
        --bim-input--bgc: var(
          --bim-dropdown--bgc,
          var(--bim-ui_bg-contrast-20)
        );
        --bim-input--olw: 2px;
        --bim-input--olc: transparent;
        --bim-input--bdrs: var(--bim-ui_size-4xs);
        flex: 1;
        display: block;
      }

      :host([visible]) {
        --bim-input--olc: var(--bim-ui_accent-base);
      }

      .input {
        --bim-label--fz: var(--bim-drodown--fz, var(--bim-ui_size-xs));
        --bim-label--c: var(--bim-dropdown--c, var(--bim-ui_bg-contrast-100));
        height: 100%;
        display: flex;
        flex: 1;
        overflow: hidden;
        column-gap: 0.25rem;
        outline: none;
        cursor: pointer;
        align-items: center;
        justify-content: space-between;
        padding: 0 0.5rem;
      }

      bim-label {
        pointer-events: none;
      }
    `];let vt=br;It([v({type:String,reflect:!0})],vt.prototype,"name",2);It([v({type:String,reflect:!0})],vt.prototype,"icon",2);It([v({type:String,reflect:!0})],vt.prototype,"label",2);It([v({type:Boolean,reflect:!0})],vt.prototype,"multiple",2);It([v({type:Boolean,reflect:!0})],vt.prototype,"required",2);It([v({type:Boolean,reflect:!0})],vt.prototype,"vertical",2);It([v({type:Boolean,reflect:!0})],vt.prototype,"visible",1);It([be()],vt.prototype,"_value",2);var cd=Object.defineProperty,dd=Object.getOwnPropertyDescriptor,ye=(e,t,i,n)=>{for(var o=n>1?void 0:n?dd(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&cd(t,i,o),o};const gr=class extends T{constructor(){super(...arguments),this.onValueChange=new Event("change"),this._hidden=!1,this.headerHidden=!1,this.valueTransform={},this.activationButton=document.createElement("bim-button")}set hidden(e){this._hidden=e,this.activationButton.active=!e,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}get value(){return We(this,this.valueTransform)}set value(e){const t=[...this.children];for(const i in e){const n=t.find(s=>{const r=s;return r.name===i||r.label===i});if(!n)continue;const o=n;o.value=e[i]}}animatePanels(){const e=[{maxHeight:"100vh",maxWidth:"100vw",opacity:1},{maxHeight:"100vh",maxWidth:"100vw",opacity:0},{maxHeight:0,maxWidth:0,opacity:0}];this.animate(e,{duration:300,easing:"cubic-bezier(0.65, 0.05, 0.36, 1)",direction:this.hidden?"normal":"reverse"})}connectedCallback(){super.connectedCallback(),this.activationButton.active=!this.hidden,this.activationButton.onclick=()=>{this.hidden=!this.hidden,this.animatePanels()}}disconnectedCallback(){super.disconnectedCallback(),this.activationButton.remove()}collapseSections(){const e=this.querySelectorAll("bim-panel-section");for(const t of e)t.collapsed=!0}expandSections(){const e=this.querySelectorAll("bim-panel-section");for(const t of e)t.collapsed=!1}render(){this.activationButton.icon=this.icon,this.activationButton.label=this.label||this.name,this.activationButton.tooltipTitle=this.label||this.name;const e=m`<bim-button
      class="closing-btn"
      icon="material-symbols:cancel-rounded"
      @click=${()=>this.activationButton.click()}
    />`;return m`
      <div class="parent">
        ${this.floating?e:null}
        ${this.label||this.name||this.icon?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `}};gr.styles=[Ot.scrollbar,P`
      :host {
        display: flex;
        border-radius: var(--bim-ui_size-base);
        background-color: var(--bim-ui_bg-base);
        overflow: auto;
      }

      :host([hidden]) {
        max-height: 0;
        max-width: 0;
        opacity: 0;
      }

      :host([floating]) {
        position: fixed !important;
        top: 0;
        left: 0;
        width: 100vw !important;
        height: 100vh !important;
        z-index: 999;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(3px);
        padding: var(--bim-ui_size-xl);
      }

      .parent {
        display: flex;
        flex: 1;
        flex-direction: column;
        pointer-events: auto;
        overflow: auto;
      }

      .parent bim-label {
        --bim-label--c: var(--bim-panel--c, var(--bim-ui_bg-contrast-80));
        --bim-label--fz: var(--bim-panel--fz, var(--bim-ui_size-sm));
        font-weight: 600;
        padding: 1rem;
        flex-shrink: 0;
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([header-hidden]) .parent bim-label {
        display: none;
      }

      :host([floating]) .parent {
        background-color: var(--bim-ui_bg-base);
        border-radius: var(--bim-ui_size-4xs);
      }

      .closing-btn {
        --bim-icon--fz: var(--bim-ui_size-base);
        position: fixed;
        top: var(--bim-ui_size-xl);
        right: var(--bim-ui_size-xl);
        width: 3rem;
        height: 3rem;
        border: none !important;
        background: none !important;
      }

      .sections {
        display: flex;
        flex-direction: column;
        overflow: auto;
      }

      ::slotted(bim-panel-section:not(:last-child)) {
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }
    `];let yt=gr;ye([v({type:String,reflect:!0})],yt.prototype,"icon",2);ye([v({type:String,reflect:!0})],yt.prototype,"name",2);ye([v({type:String,reflect:!0})],yt.prototype,"label",2);ye([v({type:Boolean,reflect:!0})],yt.prototype,"floating",2);ye([v({type:Boolean,reflect:!0})],yt.prototype,"hidden",1);ye([v({type:Boolean,attribute:"header-hidden",reflect:!0})],yt.prototype,"headerHidden",2);var ud=Object.defineProperty,si=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&ud(t,i,o),o};const vr=class extends T{constructor(){super(...arguments),this.onValueChange=new Event("change"),this.valueTransform={},this.componentHeight=-1}get value(){const e=this.parentElement;let t;return e instanceof yt&&(t=e.valueTransform),Object.values(this.valueTransform).length!==0&&(t=this.valueTransform),We(this,t)}set value(e){const t=[...this.children];for(const i in e){const n=t.find(s=>{const r=s;return r.name===i||r.label===i});if(!n)continue;const o=n;o.value=e[i]}}animateHeader(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(".components");this.componentHeight<0&&(this.collapsed?this.componentHeight=t.clientHeight:(t.style.setProperty("transition","none"),t.style.setProperty("height","auto"),t.style.setProperty("padding","0.125rem 1rem 1rem"),this.componentHeight=t.clientHeight,requestAnimationFrame(()=>{t.style.setProperty("height","0px"),t.style.setProperty("padding","0 1rem 0"),t.style.setProperty("transition","height 0.25s cubic-bezier(0.65, 0.05, 0.36, 1), padding 0.25s cubic-bezier(0.65, 0.05, 0.36, 1)")}))),this.collapsed?(t.style.setProperty("height",`${this.componentHeight}px`),requestAnimationFrame(()=>{t.style.setProperty("height","0px"),t.style.setProperty("padding","0 1rem 0")})):(t.style.setProperty("height","0px"),t.style.setProperty("padding","0 1rem 0"),requestAnimationFrame(()=>{t.style.setProperty("height",`${this.componentHeight}px`),t.style.setProperty("padding","0.125rem 1rem 1rem")}))}onHeaderClick(){this.fixed||(this.collapsed=!this.collapsed,this.animateHeader())}handelSlotChange(e){e.target.assignedElements({flatten:!0}).forEach((t,i)=>{const n=i*.05;t.style.setProperty("transition-delay",`${n}s`)})}handlePointerEnter(){const e=this.renderRoot.querySelector(".expand-icon");this.collapsed?e==null||e.style.setProperty("animation","collapseAnim 0.5s"):e==null||e.style.setProperty("animation","expandAnim 0.5s")}handlePointerLeave(){const e=this.renderRoot.querySelector(".expand-icon");e==null||e.style.setProperty("animation","none")}render(){const e=this.label||this.icon||this.name||this.fixed,t=m`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
      class="expand-icon"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>`,i=m`
      <div
        class="header"
        title=${this.label??""}
        @pointerenter=${this.handlePointerEnter}
        @pointerleave=${this.handlePointerLeave}
        @click=${this.onHeaderClick}
      >
        ${this.label||this.icon||this.name?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        ${this.fixed?null:t}
      </div>
    `;return m`
      <div class="parent">
        ${e?i:null}
        <div class="components">
          <slot @slotchange=${this.handelSlotChange}></slot>
        </div>
      </div>
    `}};vr.styles=[Ot.scrollbar,P`
      :host {
        display: block;
        pointer-events: auto;
      }

      :host(:not([fixed])) .header:hover {
        --bim-label--c: var(--bim-ui_accent-base);
        color: var(--bim-ui_accent-base);
        cursor: pointer;
      }

      :host(:not([fixed])) .header:hover .expand-icon {
        fill: var(--bim-ui_accent-base);
      }

      .header {
        --bim-label--fz: var(--bim-ui_size-sm);
        --bim-label--c: var(--bim-ui_bg-contrast-80);
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        height: 1.5rem;
        padding: 0.75rem 1rem;
      }

      .expand-icon {
        fill: var(--bim-ui_bg-contrast-80);
        transition: transform 0.2s;
      }

      :host([collapsed]) .expand-icon {
        transform: rotateZ(-180deg);
      }

      .title {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
      }

      .title p {
        font-size: var(--bim-ui_size-sm);
      }

      .components {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        row-gap: 0.75rem;
        padding: 0.125rem 1rem 1rem;
        box-sizing: border-box;
        transition:
          height 0.25s cubic-bezier(0.65, 0.05, 0.36, 1),
          padding 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
      }

      :host(:not([fixed])[collapsed]) .components {
        padding: 0 1rem 0;
        height: 0px;
      }

      bim-label {
        pointer-events: none;
      }

      ::slotted(*) {
        transition:
          transform 0.25s cubic-bezier(0.65, 0.05, 0.36, 1),
          opacity 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
      }

      :host(:not([fixed])[collapsed]) ::slotted(*) {
        transform: translateX(-20%);
        opacity: 0;
      }

      @keyframes expandAnim {
        0%,
        100% {
          transform: translateY(0%);
        }
        25% {
          transform: translateY(-30%);
        }
        50% {
          transform: translateY(10%);
        }
        75% {
          transform: translateY(-30%);
        }
      }

      @keyframes collapseAnim {
        0%,
        100% {
          transform: translateY(0%) rotateZ(-180deg);
        }
        25% {
          transform: translateY(30%) rotateZ(-180deg);
        }
        50% {
          transform: translateY(-10%) rotateZ(-180deg);
        }
        75% {
          transform: translateY(30%) rotateZ(-180deg);
        }
      }
    `];let _e=vr;si([v({type:String,reflect:!0})],_e.prototype,"icon");si([v({type:String,reflect:!0})],_e.prototype,"label");si([v({type:String,reflect:!0})],_e.prototype,"name");si([v({type:Boolean,reflect:!0})],_e.prototype,"fixed");si([v({type:Boolean,reflect:!0})],_e.prototype,"collapsed");var hd=Object.defineProperty,yr=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&hd(t,i,o),o};const _r=class extends T{constructor(){super(...arguments),this.floating=!1,this._layouts={},this._lastScreenType=bi(),this._updateFunctions={}}set layouts(e){this._layouts=e;const t={};for(const[i,n]of Object.entries(e))for(const o in n.elements)t[i]||(t[i]={}),t[i][o]=s=>{const r=this._updateFunctions[i];if(!r)return;const a=r[o];a&&a(s)};this.updateComponent=t}get layouts(){return this._layouts}getLayoutAreas(e){const{template:t}=e,i=t.split(`
`).map(n=>n.trim()).map(n=>n.split('"')[1]).filter(n=>n!==void 0).flatMap(n=>n.split(/\s+/));return[...new Set(i)].filter(n=>n!=="")}applyScreenRules(e){const t=this.layouts[this.layout];if(t)for(const[i,n]of Object.entries(e)){if(!(n instanceof yt))continue;const o=bi(t.sizes||{});let s=!1,r=!1;t.mobileTemplate&&t.mobileTemplate.includes(i)&&(s=!0),t.tabletTemplate&&t.tabletTemplate.includes(i)&&(r=!0),o==="mobile"?this.hidePanel(n,s):o==="tablet"?this.hidePanel(n,r):this.hidePanel(n,!0)}}hidePanel(e,t){e.hidden=!t,e.floating=!t}setCSSGridTemplate(){if(!this.layout)return;const e=this.layouts[this.layout];if(!e)return;const t=e.elements;(e.mobileTemplate||e.tabletTemplate)&&this.applyScreenRules(t);const i=bi(e.sizes);let n=e.template;i==="mobile"?n=e.mobileTemplate||e.tabletTemplate||e.template:i==="tablet"&&(n=e.tabletTemplate||e.template),this.style.setProperty("grid-template",n)}firstUpdated(){this._onLayoutChange=new Event("layoutchange"),new ResizeObserver(()=>{const e=this.layouts[this.layout],t=bi(e==null?void 0:e.sizes);this._lastScreenType!==t&&(this._lastScreenType=t,this.layouts={...this._layouts},this.setCSSGridTemplate())}).observe(this)}render(){if(this.layout){if(this._updateFunctions={},this.layouts[this.layout]){this.innerHTML="",this._updateFunctions[this.layout]={};const e=this._updateFunctions[this.layout],t=this.layouts[this.layout],i=this.getLayoutAreas(t).map(n=>{const o=t.elements[n];if(!o)return null;if(o instanceof HTMLElement)return o.style.gridArea=n,o;if("template"in o){const{template:s,initialState:r}=o,[a,l]=j.create(s,r);return a.style.gridArea=n,e[n]=l,a}return j.create(o)}).filter(n=>!!n);this.setCSSGridTemplate(),this.append(...i),this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange)}}else this._updateFunctions={},this.innerHTML="",this.style.gridTemplate="",this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange);return m`<slot></slot>`}};_r.styles=P`
    :host {
      display: grid;
      height: 100%;
      width: 100%;
      overflow: hidden;
      box-sizing: border-box;
    }

    /* :host(:not([layout])) {
      display: none;
    } */

    :host([floating]) {
      --bim-panel--bdrs: var(--bim-ui_size-4xs);
      background-color: transparent;
      padding: 1rem;
      gap: 1rem;
      position: absolute;
      pointer-events: none;
      top: 0px;
      left: 0px;
    }

    :host(:not([floating])) {
      --bim-panel--bdrs: 0;
      background-color: var(--bim-ui_bg-contrast-20);
      gap: 1px;
    }
  `;let qn=_r;yr([v({type:Boolean,reflect:!0})],qn.prototype,"floating");yr([v({type:String,reflect:!0})],qn.prototype,"layout");const Sn=class extends T{render(){return m`
      <iconify-icon .icon=${this.icon} height="none"></iconify-icon>
    `}};Sn.styles=P`
    :host {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
    }

    iconify-icon {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
      color: var(--bim-icon--c);
      transition: all 0.15s;
      display: flex;
    }
  `,Sn.properties={icon:{type:String}};let pd=Sn;var md=Object.defineProperty,Xi=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&md(t,i,o),o};const wr=class extends T{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change")}get value(){const e={};for(const t of this.children){const i=t;"value"in i?e[i.name||i.label]=i.value:"checked"in i&&(e[i.name||i.label]=i.checked)}return e}set value(e){const t=[...this.children];for(const i in e){const n=t.find(r=>{const a=r;return a.name===i||a.label===i});if(!n)continue;const o=n,s=e[i];typeof s=="boolean"?o.checked=s:o.value=s}}render(){return m`
      <div class="parent">
        ${this.label||this.icon?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="input">
          <slot></slot>
        </div>
      </div>
    `}};wr.styles=P`
    :host {
      flex: 1;
      display: block;
    }

    .parent {
      display: flex;
      flex-wrap: wrap;
      column-gap: 1rem;
      row-gap: 0.375rem;
      user-select: none;
      flex: 1;
    }

    :host(:not([vertical])) .parent {
      justify-content: space-between;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    .input {
      position: relative;
      overflow: hidden;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      min-height: 1.75rem;
      min-width: 3rem;
      gap: var(--bim-input--g, var(--bim-ui_size-4xs));
      padding: var(--bim-input--p, 0);
      background-color: var(--bim-input--bgc, transparent);
      outline: var(--bim-input--olw, 2px) solid
        var(--bim-input--olc, transparent);
      border-radius: var(--bim-input--bdrs, var(--bim-ui_size-4xs));
      transition: all 0.15s;
    }

    :host(:not([vertical])) .input {
      flex: 1;
      justify-content: flex-end;
    }

    :host(:not([vertical])[label]) .input {
      max-width: fit-content;
    }
  `;let ri=wr;Xi([v({type:String,reflect:!0})],ri.prototype,"name");Xi([v({type:String,reflect:!0})],ri.prototype,"label");Xi([v({type:String,reflect:!0})],ri.prototype,"icon");Xi([v({type:Boolean,reflect:!0})],ri.prototype,"vertical");var fd=Object.defineProperty,ai=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&fd(t,i,o),o};const xr=class extends T{constructor(){super(...arguments),this.labelHidden=!1,this.iconHidden=!1,this.vertical=!1}get value(){return this.textContent?Gi(this.textContent):this.textContent}render(){return m`
      <div class="parent" .title=${this.textContent??""}>
        ${this.img?m`<img .src=${this.img} .alt=${this.textContent||""} />`:null}
        ${!this.iconHidden&&this.icon?m`<bim-icon .icon=${this.icon}></bim-icon>`:null}
        <p><slot></slot></p>
      </div>
    `}};xr.styles=P`
    :host {
      --bim-icon--c: var(--bim-label--c);
      color: var(--bim-label--c, var(--bim-ui_bg-contrast-60));
      font-size: var(--bim-label--fz, var(--bim-ui_size-xs));
      display: block;
      white-space: nowrap;
      transition: all 0.15s;
    }

    :host([icon]) {
      line-height: 1.1rem;
    }

    .parent {
      display: flex;
      align-items: center;
      column-gap: 0.25rem;
      row-gap: 0.125rem;
      user-select: text;
      height: 100%;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    .parent p {
      margin: 0;
      text-overflow: ellipsis;
      overflow: hidden;
      display: flex;
      align-items: center;
      gap: 0.125rem;
    }

    :host([label-hidden]) .parent p,
    :host(:empty) .parent p {
      display: none;
    }

    img {
      height: 100%;
      aspect-ratio: 1;
      border-radius: 100%;
      margin-right: 0.125rem;
    }

    :host(:not([vertical])) img {
      max-height: var(
        --bim-label_icon--sz,
        calc(var(--bim-label--fz, var(--bim-ui_size-xs)) * 1.8)
      );
    }

    :host([vertical]) img {
      max-height: var(
        --bim-label_icon--sz,
        calc(var(--bim-label--fz, var(--bim-ui_size-xs)) * 4)
      );
    }

    /* Mobile View */
    @media screen and (max-width: 480px) {
      :host([icon]) {
        line-height: unset;
      }
    }
  `;let we=xr;ai([v({type:String,reflect:!0})],we.prototype,"img");ai([v({type:Boolean,attribute:"label-hidden",reflect:!0})],we.prototype,"labelHidden");ai([v({type:String,reflect:!0})],we.prototype,"icon");ai([v({type:Boolean,attribute:"icon-hidden",reflect:!0})],we.prototype,"iconHidden");ai([v({type:Boolean,reflect:!0})],we.prototype,"vertical");var bd=Object.defineProperty,gd=Object.getOwnPropertyDescriptor,ot=(e,t,i,n)=>{for(var o=n>1?void 0:n?gd(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&bd(t,i,o),o};const $r=class extends T{constructor(){super(...arguments),this._value=0,this.vertical=!1,this.slider=!1,this._input=de(),this.onValueChange=new Event("change")}set value(e){this.setValue(e.toString())}get value(){return this._value}onChange(e){e.stopPropagation();const{value:t}=this._input;t&&this.setValue(t.value)}setValue(e){const{value:t}=this._input;let i=e;if(i=i.replace(/[^0-9.-]/g,""),i=i.replace(/(\..*)\./g,"$1"),i.endsWith(".")||(i.lastIndexOf("-")>0&&(i=i[0]+i.substring(1).replace(/-/g,"")),i==="-"||i==="-0"))return;let n=Number(i);Number.isNaN(n)||(n=this.min!==void 0?Math.max(n,this.min):n,n=this.max!==void 0?Math.min(n,this.max):n,this.value!==n&&(this._value=n,t&&(t.value=this.value.toString()),this.requestUpdate(),this.dispatchEvent(this.onValueChange)))}onBlur(){const{value:e}=this._input;e&&Number.isNaN(Number(e.value))&&(e.value=this.value.toString())}onSliderPointerDown(e){const t=e.pointerType==="touch",i=.5;document.body.style.cursor="w-resize";const{clientX:n}=e,o=this.value;let s=!1;const r=d=>{var u;s=!0;const c=d instanceof TouchEvent?d.touches[0].clientX:d.clientX;console.log(c);const h=this.step??1,p=((u=h.toString().split(".")[1])==null?void 0:u.length)||0;let b=1/(this.sensitivity??1);b*=t?i:1;const y=(c-n)/b;if(Math.floor(Math.abs(y))!==Math.abs(y)&&!t)return;const g=o+y*h;this.setValue(g.toFixed(p))},a=()=>{this.slider=!0,this.removeEventListener("blur",a)},l=()=>{document.removeEventListener(`${t?"touch":"mouse"}move`,r),document.body.style.cursor="default",s?s=!1:(this.addEventListener("blur",a),this.slider=!1,requestAnimationFrame(()=>this.focus())),document.removeEventListener(`${t?"touchend":"mouseup"}`,l)};document.addEventListener(`${t?"touch":"mouse"}move`,r),document.addEventListener(`${t?"touchend":"mouseup"}`,l)}onFocus(e){e.stopPropagation();const t=i=>{i.key==="Escape"&&(this.blur(),window.removeEventListener("keydown",t))};window.addEventListener("keydown",t)}connectedCallback(){super.connectedCallback(),this.min&&this.min>this.value&&(this._value=this.min),this.max&&this.max<this.value&&(this._value=this.max)}focus(){const{value:e}=this._input;e&&e.focus()}render(){const e=m`
      ${this.pref||this.icon?m`<bim-label
            style="pointer-events: auto"
            @pointerdown=${this.onSliderPointerDown}
            .icon=${this.icon}
            >${this.pref}</bim-label
          >`:null}
      <input
        ${W(this._input)}
        type="text"
        aria-label=${this.label||this.name||"Number Input"}
        size="1"
        @input=${r=>r.stopPropagation()}
        @change=${this.onChange}
        @blur=${this.onBlur}
        @focus=${this.onFocus}
        .value=${this.value.toString()}
      />
      ${this.suffix?m`<bim-label
            style="pointer-events: auto"
            @pointerdown=${this.onSliderPointerDown}
            >${this.suffix}</bim-label
          >`:null}
    `,t=this.min??-1/0,i=this.max??1/0,n=100*(this.value-t)/(i-t),o=m`
      <style>
        .slider-indicator {
          width: ${`${n}%`};
        }
      </style>
      <div class="slider" @pointerdown=${this.onSliderPointerDown}>
        <div class="slider-indicator"></div>
        ${this.pref||this.icon?m`<bim-label
              style="z-index: 1; margin-right: 0.125rem"
              .icon=${this.icon}
              >${`${this.pref}: `}</bim-label
            >`:null}
        <bim-label style="z-index: 1;">${this.value}</bim-label>
        ${this.suffix?m`<bim-label style="z-index: 1;">${this.suffix}</bim-label>`:null}
      </div>
    `,s=`${this.label||this.name||this.pref?`${this.label||this.name||this.pref}: `:""}${this.value}${this.suffix??""}`;return m`
      <bim-input
        title=${s}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        ${this.slider?o:e}
      </bim-input>
    `}};$r.styles=P`
    :host {
      --bim-input--bgc: var(
        --bim-number-input--bgc,
        var(--bim-ui_bg-contrast-20)
      );
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(--bim-number-input--olc, transparent);
      --bim-input--bdrs: var(--bim-number-input--bdrs, var(--bim-ui_size-4xs));
      --bim-input--p: 0 0.375rem;
      flex: 1;
      display: block;
    }

    :host(:focus) {
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(
        --bim-number-input¡focus--c,
        var(--bim-ui_accent-base)
      );
    }

    :host(:not([slider])) bim-label {
      --bim-label--c: var(
        --bim-number-input_affixes--c,
        var(--bim-ui_bg-contrast-60)
      );
      --bim-label--fz: var(
        --bim-number-input_affixes--fz,
        var(--bim-ui_size-xs)
      );
    }

    p {
      margin: 0;
      padding: 0;
    }

    input {
      background-color: transparent;
      outline: none;
      border: none;
      padding: 0;
      flex-grow: 1;
      text-align: right;
      font-family: inherit;
      font-feature-settings: inherit;
      font-variation-settings: inherit;
      font-size: var(--bim-number-input--fz, var(--bim-ui_size-xs));
      color: var(--bim-number-input--c, var(--bim-ui_bg-contrast-100));
    }

    :host([suffix]:not([pref])) input {
      text-align: left;
    }

    :host([slider]) {
      --bim-input--p: 0;
    }

    :host([slider]) .slider {
      --bim-label--c: var(--bim-ui_bg-contrast-100);
    }

    .slider {
      position: relative;
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding: 0 0.5rem;
    }

    .slider-indicator {
      height: 100%;
      background-color: var(--bim-ui_main-base);
      position: absolute;
      top: 0;
      left: 0;
      border-radius: var(--bim-input--bdrs, var(--bim-ui_size-4xs));
    }

    bim-input {
      display: flex;
    }

    bim-label {
      pointer-events: none;
    }
  `;let K=$r;ot([v({type:String,reflect:!0})],K.prototype,"name",2);ot([v({type:String,reflect:!0})],K.prototype,"icon",2);ot([v({type:String,reflect:!0})],K.prototype,"label",2);ot([v({type:String,reflect:!0})],K.prototype,"pref",2);ot([v({type:Number,reflect:!0})],K.prototype,"min",2);ot([v({type:Number,reflect:!0})],K.prototype,"value",1);ot([v({type:Number,reflect:!0})],K.prototype,"step",2);ot([v({type:Number,reflect:!0})],K.prototype,"sensitivity",2);ot([v({type:Number,reflect:!0})],K.prototype,"max",2);ot([v({type:String,reflect:!0})],K.prototype,"suffix",2);ot([v({type:Boolean,reflect:!0})],K.prototype,"vertical",2);ot([v({type:Boolean,reflect:!0})],K.prototype,"slider",2);var vd=Object.defineProperty,li=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&vd(t,i,o),o};const Cr=class extends T{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change"),this._canEmitEvents=!1,this._value=document.createElement("bim-option"),this.onOptionClick=e=>{this._value=e.target,this.dispatchEvent(this.onValueChange);for(const t of this.children)t instanceof H&&(t.checked=t===e.target)}}get _options(){return[...this.querySelectorAll("bim-option")]}set value(e){const t=this.findOption(e);if(t){for(const i of this._options)i.checked=i===t;this._value=t,this._canEmitEvents&&this.dispatchEvent(this.onValueChange)}}get value(){return this._value.value}onSlotChange(e){const t=e.target.assignedElements();for(const i of t)i instanceof H&&(i.noMark=!0,i.removeEventListener("click",this.onOptionClick),i.addEventListener("click",this.onOptionClick))}findOption(e){return this._options.find(t=>t instanceof H?t.label===e||t.value===e:!1)}doubleRequestAnimationFrames(e){requestAnimationFrame(()=>requestAnimationFrame(e))}setAnimatedBackgound(e=!1){var t,i;const n=this.renderRoot.querySelector(".animated-background"),o=(i=(t=this.shadowRoot)==null?void 0:t.querySelector("slot"))==null?void 0:i.assignedElements({flatten:!0}).filter(s=>s.hasAttribute("checked"))[0];requestAnimationFrame(()=>{var s,r,a,l;const d=(l=(a=(r=(s=o==null?void 0:o.parentElement)==null?void 0:s.shadowRoot)==null?void 0:r.querySelector("bim-input"))==null?void 0:a.shadowRoot)==null?void 0:l.querySelector(".input"),u={width:o==null?void 0:o.clientWidth,height:o==null?void 0:o.clientHeight,top:((o==null?void 0:o.offsetTop)??0)-((d==null?void 0:d.offsetTop)??0),left:((o==null?void 0:o.offsetLeft)??0)-((d==null?void 0:d.offsetLeft)??0)};n==null||n.style.setProperty("width",`${u.width}px`),n==null||n.style.setProperty("height",`${u.height}px`),n==null||n.style.setProperty("top",`${u.top}px`),n==null||n.style.setProperty("left",`${u.left}px`)}),e&&this.doubleRequestAnimationFrames(()=>{const s="ease";n==null||n.style.setProperty("transition",`width ${.3}s ${s}, height ${.3}s ${s}, top ${.3}s ${s}, left ${.3}s ${s}`)})}firstUpdated(){const e=[...this.children].find(t=>t instanceof H&&t.checked);e&&(this._value=e),window.addEventListener("load",()=>{this.setAnimatedBackgound(!0)}),new ResizeObserver(()=>{this.setAnimatedBackgound()}).observe(this)}render(){return m`
      <bim-input
        .vertical=${this.vertical}
        .label=${this.label}
        .icon=${this.icon}
        @click=${this.setAnimatedBackgound}
      >
        <div class="animated-background"></div>
        <slot @slotchange=${this.onSlotChange}></slot>
      </bim-input>
    `}};Cr.styles=P`
    :host {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      --bim-input--g: 0;
      --bim-option--jc: center;
      flex: 1;
      display: block;
    }

    ::slotted(bim-option) {
      position: relative;
      border-radius: 0;
      overflow: hidden;
      min-width: min-content;
      min-height: min-content;
      transition: background-color 0.2s;
    }

    .animated-background {
      position: absolute;
      background: var(--bim-ui_main-base);
      width: 0;
      height: 0;
      top: 0;
      left: 0;
    }

    ::slotted(bim-option[checked]) {
      --bim-label--c: var(--bim-ui_main-contrast);
    }

    ::slotted(bim-option:not([checked]):hover) {
      background-color: #0003;
    }
  `;let xe=Cr;li([v({type:String,reflect:!0})],xe.prototype,"name");li([v({type:String,reflect:!0})],xe.prototype,"icon");li([v({type:String,reflect:!0})],xe.prototype,"label");li([v({type:Boolean,reflect:!0})],xe.prototype,"vertical");li([be()],xe.prototype,"_value");const yd=()=>m`
    <style>
      div {
        display: flex;
        gap: 0.375rem;
        border-radius: 0.25rem;
        min-height: 1.25rem;
      }

      [data-type="row"] {
        background-color: var(--bim-ui_bg-contrast-10);
        animation: row-loading 1s linear infinite alternate;
        padding: 0.5rem;
      }

      [data-type="cell"] {
        background-color: var(--bim-ui_bg-contrast-20);
        flex: 0.25;
      }

      @keyframes row-loading {
        0% {
          background-color: var(--bim-ui_bg-contrast-10);
        }
        100% {
          background-color: var(--bim-ui_bg-contrast-20);
        }
      }
    </style>
    <div style="display: flex; flex-direction: column;">
      <div data-type="row" style="gap: 2rem">
        <div data-type="cell" style="flex: 1"></div>
        <div data-type="cell" style="flex: 2"></div>
        <div data-type="cell" style="flex: 1"></div>
        <div data-type="cell" style="flex: 0.5"></div>
      </div>
      <div style="display: flex;">
        <div data-type="row" style="flex: 1">
          <div data-type="cell" style="flex: 0.5"></div>
        </div>
        <div data-type="row" style="flex: 2">
          <div data-type="cell" style="flex: 0.75"></div>
        </div>
        <div data-type="row" style="flex: 1">
          <div data-type="cell"></div>
        </div>
        <div data-type="row" style="flex: 0.5">
          <div data-type="cell" style="flex: 0.75"></div>
        </div>
      </div>
      <div style="display: flex;">
        <div data-type="row" style="flex: 1">
          <div data-type="cell" style="flex: 0.75"></div>
        </div>
        <div data-type="row" style="flex: 2">
          <div data-type="cell"></div>
        </div>
        <div data-type="row" style="flex: 1">
          <div data-type="cell" style="flex: 0.5"></div>
        </div>
        <div data-type="row" style="flex: 0.5">
          <div data-type="cell" style="flex: 0.5"></div>
        </div>
      </div>
      <div style="display: flex;">
        <div data-type="row" style="flex: 1">
          <div data-type="cell"></div>
        </div>
        <div data-type="row" style="flex: 2">
          <div data-type="cell" style="flex: 0.5"></div>
        </div>
        <div data-type="row" style="flex: 1">
          <div data-type="cell" style="flex: 0.75"></div>
        </div>
        <div data-type="row" style="flex: 0.5">
          <div data-type="cell" style="flex: 0.7s5"></div>
        </div>
      </div>
    </div>
  `,_d=()=>m`
    <style>
      .loader {
        grid-area: Processing;
        position: relative;
        padding: 0.125rem;
      }
      .loader:before {
        content: "";
        position: absolute;
      }
      .loader .loaderBar {
        position: absolute;
        top: 0;
        right: 100%;
        bottom: 0;
        left: 0;
        background: var(--bim-ui_main-base);
        /* width: 25%; */
        width: 0;
        animation: borealisBar 2s linear infinite;
      }

      @keyframes borealisBar {
        0% {
          left: 0%;
          right: 100%;
          width: 0%;
        }
        10% {
          left: 0%;
          right: 75%;
          width: 25%;
        }
        90% {
          right: 0%;
          left: 75%;
          width: 25%;
        }
        100% {
          left: 100%;
          right: 0%;
          width: 0%;
        }
      }
    </style>
    <div class="loader">
      <div class="loaderBar"></div>
    </div>
  `;var wd=Object.defineProperty,xd=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&wd(t,i,o),o};const Ar=class extends T{constructor(){super(...arguments),this.column="",this.columnIndex=0,this.rowData={}}get data(){return this.column?this.rowData[this.column]:null}render(){return m`
      <style>
        :host {
          grid-area: ${this.column??"unset"};
        }
      </style>
      <slot></slot>
    `}};Ar.styles=P`
    :host {
      padding: 0.375rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    :host([data-column-index="0"]) {
      justify-content: normal;
    }

    :host([data-column-index="0"]:not([data-cell-header]))
      ::slotted(bim-label) {
      text-align: left;
    }

    ::slotted(*) {
      --bim-input--bgc: transparent;
      --bim-input--olc: var(--bim-ui_bg-contrast-20);
      --bim-input--olw: 1px;
    }

    ::slotted(bim-input) {
      --bim-input--olw: 0;
    }

    ::slotted(bim-label) {
      white-space: normal;
      text-align: center;
    }
  `;let Sr=Ar;xd([v({type:String,reflect:!0})],Sr.prototype,"column");var $d=Object.defineProperty,Cd=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&$d(t,i,o),o};const kr=class extends T{constructor(){super(...arguments),this._groups=[],this.data=[],this.table=this.closest("bim-table")}toggleGroups(e,t=!1){for(const i of this._groups)i.childrenHidden=typeof e>"u"?!i.childrenHidden:!e,t&&i.toggleChildren(e,t)}render(){return this._groups=[],m`
      <slot></slot>
      ${this.data.map(e=>{const t=document.createElement("bim-table-group");return this._groups.push(t),t.table=this.table,t.data=e,t})}
    `}};kr.styles=P`
    :host {
      --bim-button--bgc: transparent;
      position: relative;
      display: block;
      overflow: hidden;
      grid-area: Children;
    }

    :host([hidden]) {
      height: 0;
      opacity: 0;
    }

    ::slotted(.branch.branch-vertical) {
      top: 0;
      bottom: 1.125rem;
    }
  `;let Er=kr;Cd([v({type:Array,attribute:!1})],Er.prototype,"data");var Ad=Object.defineProperty,Sd=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&Ad(t,i,o),o};const Tr=class extends T{constructor(){super(...arguments),this.data={data:{}},this.childrenHidden=!0,this.table=this.closest("bim-table")}connectedCallback(){super.connectedCallback(),this.table&&this.table.expanded?this.childrenHidden=!1:this.childrenHidden=!0}toggleChildren(e,t=!1){this._children&&(this.childrenHidden=typeof e>"u"?!this.childrenHidden:!e,t&&this._children.toggleGroups(e,t),this.animateTableChildren(!0))}animateTableChildren(e=!0){if(!e){requestAnimationFrame(()=>{var s;const r=this.renderRoot.querySelector(".caret"),a=this.renderRoot.querySelector(".branch-vertical"),l=(s=this.renderRoot.querySelector("bim-table-children"))==null?void 0:s.querySelector(".branch-vertical");r.style.setProperty("transform",`translateY(-50%) rotate(${this.childrenHidden?"0":"90"}deg)`),a.style.setProperty("transform",`scaleY(${this.childrenHidden?"0":"1"})`),l==null||l.style.setProperty("transform",`scaleY(${this.childrenHidden?"0":"1"})`)});return}const t=900,i=50,n=350,o=350;requestAnimationFrame(()=>{var s;const r=this.renderRoot.querySelector("bim-table-children"),a=this.renderRoot.querySelector(".caret"),l=this.renderRoot.querySelector(".branch-vertical"),d=(s=this.renderRoot.querySelector("bim-table-children"))==null?void 0:s.querySelector(".branch-vertical"),u=()=>{const y=r==null?void 0:r.renderRoot.querySelectorAll("bim-table-group");y==null||y.forEach((g,f)=>{g.style.setProperty("opacity","0"),g.style.setProperty("left","-30px");const _=[{opacity:"0",left:"-30px"},{opacity:"1",left:"0"}];g.animate(_,{duration:t/2,delay:50+f*i,easing:"cubic-bezier(0.65, 0.05, 0.36, 1)",fill:"forwards"})})},c=()=>{const y=[{transform:"translateY(-50%) rotate(90deg)"},{transform:"translateY(-50%) rotate(0deg)"}];a==null||a.animate(y,{duration:o,easing:"cubic-bezier(0.68, -0.55, 0.27, 1.55)",fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})},h=()=>{const y=[{transform:"scaleY(1)"},{transform:"scaleY(0)"}];l==null||l.animate(y,{duration:n,easing:"cubic-bezier(0.4, 0, 0.2, 1)",delay:i,fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})},p=()=>{var y;const g=(y=this.renderRoot.querySelector("bim-table-row"))==null?void 0:y.querySelector(".branch-horizontal");if(g){g.style.setProperty("transform-origin","center right");const f=[{transform:"scaleX(0)"},{transform:"scaleX(1)"}];g.animate(f,{duration:n,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})}},b=()=>{const y=[{transform:"scaleY(0)"},{transform:"scaleY(1)"}];d==null||d.animate(y,{duration:n*1.2,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"forwards",delay:(i+n)*.7})};u(),c(),h(),p(),b()})}firstUpdated(){this.renderRoot.querySelectorAll(".caret").forEach(e=>{var t,i,n;if(!this.childrenHidden){e.style.setProperty("transform","translateY(-50%) rotate(90deg)");const o=(t=e.parentElement)==null?void 0:t.querySelector(".branch-horizontal");o&&o.style.setProperty("transform","scaleX(0)");const s=(n=(i=e.parentElement)==null?void 0:i.parentElement)==null?void 0:n.querySelectorAll(".branch-vertical");s==null||s.forEach(r=>{r.style.setProperty("transform","scaleY(1)")})}})}render(){if(!this.table)throw new Error("TableGroup: parent table wasn't found!");const e=this.table.getGroupIndentation(this.data)??0,t=m`
      ${this.table.noIndentation?null:m`
            <style>
              .branch-vertical {
                left: ${e+(this.table.selectableRows?1.9375:.5625)}rem;
              }
            </style>
            <div class="branch branch-vertical"></div>
          `}
    `,i=document.createDocumentFragment();ce(t,i);let n=null;this.table.noIndentation||(n=document.createElement("div"),n.classList.add("branch","branch-horizontal"),n.style.left=`${e-1+(this.table.selectableRows?2.05:.5625)}rem`);let o=null;if(!this.table.noIndentation){const a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("height","9.9"),a.setAttribute("width","7.5"),a.setAttribute("viewBox","0 0 4.6666672 7.7");const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d","m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"),a.append(l),o=document.createElement("div"),o.addEventListener("click",d=>{d.stopPropagation(),this.toggleChildren()}),o.classList.add("caret"),o.style.left=`${(this.table.selectableRows?1.5:.125)+e}rem`,o.append(a)}const s=document.createElement("bim-table-row");this.data.children&&s.append(i),s.table=this.table,s.data=this.data.data,this.table.dispatchEvent(new CustomEvent("rowcreated",{detail:{row:s}})),o&&this.data.children&&s.append(o),e!==0&&n&&s.append(n);let r;if(this.data.children){r=document.createElement("bim-table-children"),this._children=r,r.table=this.table,r.data=this.data.children;const a=document.createDocumentFragment();ce(t,a),r.append(a),this.childrenHidden&&r.setAttribute("hidden","")}return m`
      <div class="parent">${s} ${this.childrenHidden?null:r}</div>
    `}};Tr.styles=P`
    :host {
      position: relative;
    }

    .parent {
      display: grid;
      grid-template-areas: "Data" "Children";
    }

    .branch {
      position: absolute;
      z-index: 1;
    }

    .branch-vertical {
      border-left: 1px dotted var(--bim-ui_bg-contrast-40);
      transform-origin: top center;
      transform: scaleY(0);
    }

    .branch-horizontal {
      top: 50%;
      width: 1rem;
      border-bottom: 1px dotted var(--bim-ui_bg-contrast-40);
    }

    .branch-horizontal {
      transform-origin: center left;
    }

    .caret {
      position: absolute;
      z-index: 2;
      transform: translateY(-50%) rotate(0deg);
      top: 50%;
      display: flex;
      width: 0.95rem;
      height: 0.95rem;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .caret svg {
      fill: var(--bim-ui_bg-contrast-60);
    }
  `;let Or=Tr;Sd([v({type:Boolean,attribute:"children-hidden",reflect:!0})],Or.prototype,"childrenHidden");var kd=Object.defineProperty,$e=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&kd(t,i,o),o};const Pr=class extends T{constructor(){super(...arguments),this.selected=!1,this.columns=[],this.hiddenColumns=[],this.data={},this.isHeader=!1,this.table=this.closest("bim-table"),this.onTableColumnsChange=()=>{this.table&&(this.columns=this.table.columns)},this.onTableColumnsHidden=()=>{this.table&&(this.hiddenColumns=this.table.hiddenColumns)},this._observer=new IntersectionObserver(e=>{this._intersecting=e[0].isIntersecting},{rootMargin:"36px"})}get _columnNames(){return this.columns.filter(e=>!this.hiddenColumns.includes(e.name)).map(e=>e.name)}get _columnWidths(){return this.columns.filter(e=>!this.hiddenColumns.includes(e.name)).map(e=>e.width)}get _isSelected(){var e;return(e=this.table)==null?void 0:e.selection.has(this.data)}onSelectionChange(e){if(!this.table)return;const t=e.target;this.selected=t.value,t.value?(this.table.selection.add(this.data),this.table.dispatchEvent(new CustomEvent("rowselected",{detail:{data:this.data}}))):(this.table.selection.delete(this.data),this.table.dispatchEvent(new CustomEvent("rowdeselected",{detail:{data:this.data}})))}connectedCallback(){super.connectedCallback(),this._observer.observe(this),this.table&&(this.columns=this.table.columns,this.hiddenColumns=this.table.hiddenColumns,this.table.addEventListener("columnschange",this.onTableColumnsChange),this.table.addEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",this._isSelected))}disconnectedCallback(){super.disconnectedCallback(),this._observer.unobserve(this),this.table&&(this.columns=[],this.hiddenColumns=[],this.table.removeEventListener("columnschange",this.onTableColumnsChange),this.table.removeEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",!1))}compute(){if(!this.table)throw new Error("TableRow: parent table wasn't found!");const e=this.table.getRowIndentation(this.data)??0,t=this.isHeader?this.data:this.table.applyDataTransform(this.data)??this.data,i=[];for(const n in t){if(this.hiddenColumns.includes(n))continue;const o=t[n];let s;if(typeof o=="string"||typeof o=="boolean"||typeof o=="number"?(s=document.createElement("bim-label"),s.textContent=String(o)):o instanceof HTMLElement?s=o:(s=document.createDocumentFragment(),ce(o,s)),!s)continue;const r=document.createElement("bim-table-cell");r.append(s),r.column=n,this._columnNames.indexOf(n)===0&&(r.style.marginLeft=`${this.table.noIndentation?0:e+.75}rem`);const a=this._columnNames.indexOf(n);r.setAttribute("data-column-index",String(a)),r.toggleAttribute("data-no-indentation",a===0&&this.table.noIndentation),r.toggleAttribute("data-cell-header",this.isHeader),r.rowData=this.data,this.table.dispatchEvent(new CustomEvent("cellcreated",{detail:{cell:r}})),i.push(r)}return this.style.gridTemplateAreas=`"${this.table.selectableRows?"Selection":""} ${this._columnNames.join(" ")}"`,this.style.gridTemplateColumns=`${this.table.selectableRows?"1.6rem":""} ${this._columnWidths.join(" ")}`,m`
      ${!this.isHeader&&this.table.selectableRows?m`<bim-checkbox
            @change=${this.onSelectionChange}
            .checked=${this._isSelected}
            style="align-self: center; justify-self: center"
          ></bim-checkbox>`:null}
      ${i}
      <slot></slot>
    `}render(){return m`${this._intersecting?this.compute():m``}`}};Pr.styles=P`
    :host {
      position: relative;
      grid-area: Data;
      display: grid;
      min-height: 2.25rem;
      transition: all 0.15s;
    }

    ::slotted(.branch.branch-vertical) {
      top: 50%;
      bottom: 0;
    }

    :host([selected]) {
      background-color: color-mix(
        in lab,
        var(--bim-ui_bg-contrast-20) 30%,
        var(--bim-ui_main-base) 10%
      );
    }
  `;let Jt=Pr;$e([v({type:Boolean,reflect:!0})],Jt.prototype,"selected");$e([v({attribute:!1})],Jt.prototype,"columns");$e([v({attribute:!1})],Jt.prototype,"hiddenColumns");$e([v({attribute:!1})],Jt.prototype,"data");$e([v({type:Boolean,attribute:"is-header",reflect:!0})],Jt.prototype,"isHeader");$e([be()],Jt.prototype,"_intersecting");var Ed=Object.defineProperty,Td=Object.getOwnPropertyDescriptor,ct=(e,t,i,n)=>{for(var o=n>1?void 0:n?Td(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Ed(t,i,o),o};const Ir=class extends T{constructor(){super(...arguments),this._filteredData=[],this.headersHidden=!1,this.minColWidth="4rem",this._columns=[],this._textDelimiters={comma:",",tab:"	"},this._queryString=null,this._data=[],this.expanded=!1,this.preserveStructureOnFilter=!1,this.indentationInText=!1,this.dataTransform={},this.selectableRows=!1,this.selection=new Set,this.noIndentation=!1,this.loading=!1,this._errorLoading=!1,this._onColumnsHidden=new Event("columnshidden"),this._hiddenColumns=[],this._stringFilterFunction=(e,t)=>Object.values(t.data).some(i=>String(i).toLowerCase().includes(e.toLowerCase())),this._queryFilterFunction=(e,t)=>{let i=!1;const n=Cn(e)??[];for(const o of n){if("queries"in o){i=!1;break}const{condition:s,value:r}=o;let{key:a}=o;if(a.startsWith("[")&&a.endsWith("]")){const l=a.replace("[","").replace("]","");a=l,i=Object.keys(t.data).filter(d=>d.includes(l)).map(d=>Uo(t.data[d],s,r)).some(d=>d)}else i=Uo(t.data[a],s,r);if(!i)break}return i}}set columns(e){const t=[];for(const i of e){const n=typeof i=="string"?{name:i,width:`minmax(${this.minColWidth}, 1fr)`}:i;t.push(n)}this._columns=t,this.computeMissingColumns(this.data),this.dispatchEvent(new Event("columnschange"))}get columns(){return this._columns}get _headerRowData(){const e={};for(const t of this.columns){const{name:i}=t;e[i]=String(i)}return e}get value(){return this._filteredData}set queryString(e){this.toggleAttribute("data-processing",!0),this._queryString=e&&e.trim()!==""?e.trim():null,this.updateFilteredData(),this.toggleAttribute("data-processing",!1)}get queryString(){return this._queryString}set data(e){this._data=e,this.updateFilteredData(),this.computeMissingColumns(e)&&(this.columns=this._columns)}get data(){return this._data}get dataAsync(){return new Promise(e=>{setTimeout(()=>{e(this.data)})})}set hiddenColumns(e){this._hiddenColumns=e,setTimeout(()=>{this.dispatchEvent(this._onColumnsHidden)})}get hiddenColumns(){return this._hiddenColumns}updateFilteredData(){this.queryString?(Cn(this.queryString)?(this.filterFunction=this._queryFilterFunction,this._filteredData=this.filter(this.queryString)):(this.filterFunction=this._stringFilterFunction,this._filteredData=this.filter(this.queryString)),this.preserveStructureOnFilter&&(this._expandedBeforeFilter===void 0&&(this._expandedBeforeFilter=this.expanded),this.expanded=!0)):(this.preserveStructureOnFilter&&this._expandedBeforeFilter!==void 0&&(this.expanded=this._expandedBeforeFilter,this._expandedBeforeFilter=void 0),this._filteredData=this.data)}computeMissingColumns(e){let t=!1;for(const i of e){const{children:n,data:o}=i;for(const s in o)this._columns.map(r=>typeof r=="string"?r:r.name).includes(s)||(this._columns.push({name:s,width:`minmax(${this.minColWidth}, 1fr)`}),t=!0);if(n){const s=this.computeMissingColumns(n);s&&!t&&(t=s)}}return t}generateText(e="comma",t=this.value,i="",n=!0){const o=this._textDelimiters[e];let s="";const r=this.columns.map(a=>a.name);if(n){this.indentationInText&&(s+=`Indentation${o}`);const a=`${r.join(o)}
`;s+=a}for(const[a,l]of t.entries()){const{data:d,children:u}=l,c=this.indentationInText?`${i}${a+1}${o}`:"",h=r.map(b=>d[b]??""),p=`${c}${h.join(o)}
`;s+=p,u&&(s+=this.generateText(e,l.children,`${i}${a+1}.`,!1))}return s}get csv(){return this.generateText("comma")}get tsv(){return this.generateText("tab")}applyDataTransform(e){const t={};for(const n of Object.keys(this.dataTransform)){const o=this.columns.find(s=>s.name===n);o&&o.forceDataTransform&&(n in e||(e[n]=""))}const i=e;for(const n in i){const o=this.dataTransform[n];o?t[n]=o(i[n],e):t[n]=e[n]}return t}downloadData(e="BIM Table Data",t="json"){let i=null;if(t==="json"&&(i=new File([JSON.stringify(this.value,void 0,2)],`${e}.json`)),t==="csv"&&(i=new File([this.csv],`${e}.csv`)),t==="tsv"&&(i=new File([this.tsv],`${e}.tsv`)),!i)return;const n=document.createElement("a");n.href=URL.createObjectURL(i),n.download=i.name,n.click(),URL.revokeObjectURL(n.href)}getRowIndentation(e,t=this.value,i=0){for(const n of t){if(n.data===e)return i;if(n.children){const o=this.getRowIndentation(e,n.children,i+1);if(o!==null)return o}}return null}getGroupIndentation(e,t=this.value,i=0){for(const n of t){if(n===e)return i;if(n.children){const o=this.getGroupIndentation(e,n.children,i+1);if(o!==null)return o}}return null}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new Event("connected"))}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new Event("disconnected"))}async loadData(e=!1){if(this._filteredData.length!==0&&!e||!this.loadFunction)return!1;this.loading=!0;try{const t=await this.loadFunction();return this.data=t,this.loading=!1,this._errorLoading=!1,!0}catch(t){if(this.loading=!1,this._filteredData.length!==0)return!1;const i=this.querySelector("[slot='error-loading']"),n=i==null?void 0:i.querySelector("[data-table-element='error-message']");return t instanceof Error&&n&&t.message.trim()!==""&&(n.textContent=t.message),this._errorLoading=!0,!1}}filter(e,t=this.filterFunction??this._stringFilterFunction,i=this.data){const n=[];for(const o of i)if(t(e,o)){if(this.preserveStructureOnFilter){const s={data:o.data};if(o.children){const r=this.filter(e,t,o.children);r.length&&(s.children=r)}n.push(s)}else if(n.push({data:o.data}),o.children){const s=this.filter(e,t,o.children);n.push(...s)}}else if(o.children){const s=this.filter(e,t,o.children);this.preserveStructureOnFilter&&s.length?n.push({data:o.data,children:s}):n.push(...s)}return n}get _missingDataElement(){return this.querySelector("[slot='missing-data']")}render(){if(this.loading)return yd();if(this._errorLoading)return m`<slot name="error-loading"></slot>`;if(this._filteredData.length===0&&this._missingDataElement)return m`<slot name="missing-data"></slot>`;const e=document.createElement("bim-table-row");e.table=this,e.isHeader=!0,e.data=this._headerRowData,e.style.gridArea="Header",e.style.position="sticky",e.style.top="0",e.style.zIndex="5";const t=document.createElement("bim-table-children");return t.table=this,t.data=this.value,t.style.gridArea="Body",t.style.backgroundColor="transparent",m`
      <div class="parent">
        ${this.headersHidden?null:e} ${_d()}
        <div style="overflow-x: hidden; grid-area: Body">${t}</div>
      </div>
    `}};Ir.styles=[Ot.scrollbar,P`
      :host {
        position: relative;
        overflow: auto;
        display: block;
        pointer-events: auto;
      }

      :host(:not([data-processing])) .loader {
        display: none;
      }

      .parent {
        display: grid;
        grid-template:
          "Header" auto
          "Processing" auto
          "Body" 1fr
          "Footer" auto;
        overflow: auto;
        height: 100%;
      }

      .parent > bim-table-row[is-header] {
        color: var(--bim-table_header--c, var(--bim-ui_bg-contrast-100));
        background-color: var(
          --bim-table_header--bgc,
          var(--bim-ui_bg-contrast-20)
        );
      }

      .controls {
        display: flex;
        gap: 0.375rem;
        flex-wrap: wrap;
        margin-bottom: 0.5rem;
      }
    `];let st=Ir;ct([be()],st.prototype,"_filteredData",2);ct([v({type:Boolean,attribute:"headers-hidden",reflect:!0})],st.prototype,"headersHidden",2);ct([v({type:String,attribute:"min-col-width",reflect:!0})],st.prototype,"minColWidth",2);ct([v({type:Array,attribute:!1})],st.prototype,"columns",1);ct([v({type:Array,attribute:!1})],st.prototype,"data",1);ct([v({type:Boolean,reflect:!0})],st.prototype,"expanded",2);ct([v({type:Boolean,reflect:!0,attribute:"selectable-rows"})],st.prototype,"selectableRows",2);ct([v({attribute:!1})],st.prototype,"selection",2);ct([v({type:Boolean,attribute:"no-indentation",reflect:!0})],st.prototype,"noIndentation",2);ct([v({type:Boolean,reflect:!0})],st.prototype,"loading",2);ct([be()],st.prototype,"_errorLoading",2);var Od=Object.defineProperty,Pd=Object.getOwnPropertyDescriptor,Ce=(e,t,i,n)=>{for(var o=n>1?void 0:n?Pd(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Od(t,i,o),o};const Nr=class extends T{constructor(){super(...arguments),this._switchers=[],this.bottom=!1,this.switchersHidden=!1,this.floating=!1,this.switchersFull=!1,this.onTabHiddenChange=e=>{const t=e.target;t instanceof X&&!t.hidden&&(t.removeEventListener("hiddenchange",this.onTabHiddenChange),this.tab=t.name,t.addEventListener("hiddenchange",this.onTabHiddenChange))}}set tab(e){this._tab=e;const t=[...this.children],i=t.find(n=>n instanceof X&&n.name===e);for(const n of t){if(!(n instanceof X))continue;n.hidden=i!==n;const o=this.getTabSwitcher(n.name);o&&o.toggleAttribute("data-active",!n.hidden)}i||(this._tab="hidden",this.setAttribute("tab","hidden"))}get tab(){return this._tab}getTabSwitcher(e){return this._switchers.find(t=>t.getAttribute("data-name")===e)}createSwitchers(){this._switchers=[];for(const e of this.children){if(!(e instanceof X))continue;const t=document.createElement("div");t.addEventListener("click",()=>{this.tab===e.name?this.toggleAttribute("tab",!1):this.tab=e.name,this.setAnimatedBackgound()}),t.setAttribute("data-name",e.name),t.className="switcher";const i=document.createElement("bim-label");i.textContent=e.label??null,i.icon=e.icon,t.append(i),this._switchers.push(t)}}updateSwitchers(){for(const e of this.children){if(!(e instanceof X))continue;const t=this._switchers.find(n=>n.getAttribute("data-name")===e.name);if(!t)continue;const i=t.querySelector("bim-label");i&&(i.textContent=e.label??null,i.icon=e.icon)}}onSlotChange(e){this.createSwitchers();const t=e.target.assignedElements(),i=t.find(n=>n instanceof X?this.tab?n.name===this.tab:!n.hidden:!1);i&&i instanceof X&&(this.tab=i.name);for(const n of t){if(!(n instanceof X)){n.remove();continue}n.removeEventListener("hiddenchange",this.onTabHiddenChange),i!==n&&(n.hidden=!0),n.addEventListener("hiddenchange",this.onTabHiddenChange)}}doubleRequestAnimationFrames(e){requestAnimationFrame(()=>requestAnimationFrame(e))}setAnimatedBackgound(e=!1){var t;const i=this.renderRoot.querySelector(".animated-background"),n=[...((t=this.renderRoot.querySelector(".switchers"))==null?void 0:t.querySelectorAll(".switcher"))||[]].filter(o=>o.hasAttribute("data-active"))[0];requestAnimationFrame(()=>{var o,s,r,a;const l=(a=(r=(s=(o=n==null?void 0:n.parentElement)==null?void 0:o.shadowRoot)==null?void 0:s.querySelector("bim-input"))==null?void 0:r.shadowRoot)==null?void 0:a.querySelector(".input"),d={width:n==null?void 0:n.clientWidth,height:n==null?void 0:n.clientHeight,top:((n==null?void 0:n.offsetTop)??0)-((l==null?void 0:l.offsetTop)??0),left:((n==null?void 0:n.offsetLeft)??0)-((l==null?void 0:l.offsetLeft)??0)};n?(i==null||i.style.setProperty("width",`${d.width}px`),i==null||i.style.setProperty("height",`${d.height}px`),i==null||i.style.setProperty("left",`${d.left}px`)):i==null||i.style.setProperty("width","0"),this.bottom?(i==null||i.style.setProperty("top","100%"),i==null||i.style.setProperty("transform","translateY(-100%)")):i==null||i.style.setProperty("top",`${d.top}px`)}),e&&this.doubleRequestAnimationFrames(()=>{const o="ease";i==null||i.style.setProperty("transition",`width ${.3}s ${o}, height ${.3}s ${o}, top ${.3}s ${o}, left ${.3}s ${o}`)})}firstUpdated(){requestAnimationFrame(()=>{this.setAnimatedBackgound(!0)}),new ResizeObserver(()=>{this.setAnimatedBackgound()}).observe(this)}render(){return m`
      <div class="parent">
        <div class="switchers">
          <div class="animated-background"></div>
          ${this._switchers}
        </div>
        <div class="content">
          <slot @slotchange=${this.onSlotChange}></slot>
        </div>
      </div>
    `}};Nr.styles=[Ot.scrollbar,P`
      * {
        box-sizing: border-box;
      }

      :host {
        background-color: var(--bim-ui_bg-base);
        display: block;
        overflow: auto;
      }

      .parent {
        display: grid;
        overflow: hidden;
        position: relative;
        grid-template: "switchers" auto "content" 1fr;
        height: 100%;
      }

      :host([bottom]) .parent {
        grid-template: "content" 1fr "switchers" auto;
      }

      .switchers {
        position: relative;
        display: flex;
        height: 2.25rem;
        font-weight: 600;
        grid-area: switchers;
      }

      .switcher {
        --bim-label--c: var(--bim-ui_bg-contrast-80);
        background-color: transparent;
        position: relative;
        cursor: pointer;
        pointer-events: auto;
        padding: 0rem 0.75rem;
        display: flex;
        justify-content: center;
        z-index: 2;
        transition: all 0.15s;
      }

      .switcher:not([data-active]):hover {
        filter: brightness(150%);
      }

      :host([switchers-full]) .switcher {
        flex: 1;
      }

      .switcher[data-active] {
        --bim-label--c: var(--bim-ui_main-contrast);
      }

      .switchers bim-label {
        pointer-events: none;
      }

      :host([switchers-hidden]) .switchers {
        display: none;
      }

      .content {
        position: relative;
        display: grid;
        grid-template-columns: 1fr;
        grid-area: content;
        max-height: 100vh;
        overflow: auto;
        transition: max-height 0.2s;
      }

      :host([tab="hidden"]) .content {
        max-height: 0;
      }

      .animated-background {
        position: absolute;
        background: var(--bim-ui_main-base);
        width: 0;
        height: 0;
        top: 0;
        left: 0;
      }

      :host(:not([bottom])) .content {
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([bottom]) .content {
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating]) {
        background-color: transparent;
      }

      :host([floating]) .switchers {
        justify-self: center;
        overflow: hidden;
        background-color: var(--bim-ui_bg-base);
      }

      :host([floating]:not([bottom])) .switchers {
        border-radius: var(--bim-ui_size-2xs) var(--bim-ui_size-2xs) 0 0;
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
        border-left: 1px solid var(--bim-ui_bg-contrast-20);
        border-right: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating][bottom]) .switchers {
        border-radius: 0 0 var(--bim-ui_size-2xs) var(--bim-ui_size-2xs);
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
        border-left: 1px solid var(--bim-ui_bg-contrast-20);
        border-right: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating][tab="hidden"]) .switchers {
        border-radius: var(--bim-ui_size-2xs);
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating][bottom][tab="hidden"]) .switchers {
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating]) .content {
        border: 1px solid var(--bim-ui_bg-contrast-20);
        border-radius: var(--bim-ui_size-2xs);
        background-color: var(--bim-ui_bg-base);
      }

      @media screen and (max-width: 480px) {
        .switchers {
          height: 1.75rem;
        }

        :host([floating]) .switchers {
          height: 2rem;
        }

        :host([floating]:not([tab="hidden"])) .content {
          padding: 0.1rem 0.35rem 0.25rem;
        }
      }
    `];let Nt=Nr;Ce([be()],Nt.prototype,"_switchers",2);Ce([v({type:Boolean,reflect:!0})],Nt.prototype,"bottom",2);Ce([v({type:Boolean,attribute:"switchers-hidden",reflect:!0})],Nt.prototype,"switchersHidden",2);Ce([v({type:Boolean,reflect:!0})],Nt.prototype,"floating",2);Ce([v({type:String,reflect:!0})],Nt.prototype,"tab",1);Ce([v({type:Boolean,attribute:"switchers-full",reflect:!0})],Nt.prototype,"switchersFull",2);var Id=Object.defineProperty,Nd=Object.getOwnPropertyDescriptor,Ji=(e,t,i,n)=>{for(var o=n>1?void 0:n?Nd(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Id(t,i,o),o};const Rr=class extends T{constructor(){super(...arguments),this._defaultName="__unnamed__",this.name=this._defaultName,this._hidden=!1}set label(e){this._label=e;const t=this.parentElement;t instanceof Nt&&t.updateSwitchers()}get label(){return this._label}set hidden(e){this._hidden=e;const t=this.parentElement;t!=null&&t.hasAttribute("floating")&&this.style.setProperty("animation",e?"hideFloatingTabSmoothly 0.6s linear forwards":"none"),this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}connectedCallback(){super.connectedCallback();const{parentElement:e}=this;if(e&&this.name===this._defaultName){const t=[...e.children].indexOf(this);this.name=`${this._defaultName}${t}`}}render(){return m` <slot></slot> `}};Rr.styles=P`
    :host {
      display: block;
      height: 100%;
      grid-row-start: 1;
      grid-column-start: 1;
      animation: openAnim 3s forwards;
      transform: translateY(0);
      max-height: 100vh;
      transition:
        opacity 0.3s ease,
        max-height 0.6s ease,
        transform 0.3s ease;
    }

    :host([hidden]) {
      transform: translateY(-20px);
      max-height: 0;
      opacity: 0;
      overflow: hidden;
      visibility: hidden;
    }

    @keyframes hideFloatingTabSmoothly {
      0% {
        max-width: 100vw;
      }
      100% {
        max-width: 0vw;
      }
    }
  `;let X=Rr;Ji([v({type:String,reflect:!0})],X.prototype,"name",2);Ji([v({type:String,reflect:!0})],X.prototype,"label",1);Ji([v({type:String,reflect:!0})],X.prototype,"icon",2);Ji([v({type:Boolean,reflect:!0})],X.prototype,"hidden",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vo=e=>e??M;var Rd=Object.defineProperty,Md=Object.getOwnPropertyDescriptor,_t=(e,t,i,n)=>{for(var o=n>1?void 0:n?Md(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Rd(t,i,o),o};const Mr=class extends T{constructor(){super(...arguments),this._inputTypes=["date","datetime-local","email","month","password","search","tel","text","time","url","week","area"],this.value="",this.vertical=!1,this._type="text",this.onValueChange=new Event("input")}set type(e){this._inputTypes.includes(e)&&(this._type=e)}get type(){return this._type}get query(){return Cn(this.value)}onInputChange(e){e.stopPropagation();const t=e.target;clearTimeout(this._debounceTimeoutID),this._debounceTimeoutID=setTimeout(()=>{this.value=t.value,this.dispatchEvent(this.onValueChange)},this.debounce)}focus(){setTimeout(()=>{var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("input");t==null||t.focus()})}render(){return m`
      <bim-input
        .name=${this.name}
        .icon=${this.icon}
        .label=${this.label}
        .vertical=${this.vertical}
      >
        ${this.type==="area"?m` <textarea
              aria-label=${this.label||this.name||"Text Input"}
              .value=${this.value}
              .rows=${this.rows??5}
              placeholder=${Vo(this.placeholder)}
              @input=${this.onInputChange}
            ></textarea>`:m` <input
              aria-label=${this.label||this.name||"Text Input"}
              .type=${this.type}
              .value=${this.value}
              placeholder=${Vo(this.placeholder)}
              @input=${this.onInputChange}
            />`}
      </bim-input>
    `}};Mr.styles=[Ot.scrollbar,P`
      :host {
        --bim-input--bgc: var(--bim-ui_bg-contrast-20);
        flex: 1;
        display: block;
      }

      input,
      textarea {
        font-family: inherit;
        background-color: transparent;
        border: none;
        width: 100%;
        padding: var(--bim-ui_size-3xs);
        color: var(--bim-text-input--c, var(--bim-ui_bg-contrast-100));
      }

      input {
        outline: none;
        height: 100%;
        padding: 0 var(--bim-ui_size-3xs); /* Override padding */
        border-radius: var(--bim-text-input--bdrs, var(--bim-ui_size-4xs));
      }

      textarea {
        line-height: 1.1rem;
        resize: vertical;
      }

      :host(:focus) {
        --bim-input--olc: var(--bim-ui_accent-base);
      }

      /* :host([disabled]) {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
    } */
    `];let rt=Mr;_t([v({type:String,reflect:!0})],rt.prototype,"icon",2);_t([v({type:String,reflect:!0})],rt.prototype,"label",2);_t([v({type:String,reflect:!0})],rt.prototype,"name",2);_t([v({type:String,reflect:!0})],rt.prototype,"placeholder",2);_t([v({type:String,reflect:!0})],rt.prototype,"value",2);_t([v({type:Boolean,reflect:!0})],rt.prototype,"vertical",2);_t([v({type:Number,reflect:!0})],rt.prototype,"debounce",2);_t([v({type:Number,reflect:!0})],rt.prototype,"rows",2);_t([v({type:String,reflect:!0})],rt.prototype,"type",1);var zd=Object.defineProperty,Ld=Object.getOwnPropertyDescriptor,zr=(e,t,i,n)=>{for(var o=n>1?void 0:n?Ld(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&zd(t,i,o),o};const Lr=class extends T{constructor(){super(...arguments),this.rows=2,this._vertical=!1}set vertical(e){this._vertical=e,this.updateChildren()}get vertical(){return this._vertical}updateChildren(){const e=this.children;for(const t of e)this.vertical?t.setAttribute("label-hidden",""):t.removeAttribute("label-hidden")}render(){return m`
      <style>
        .parent {
          grid-auto-flow: ${this.vertical?"row":"column"};
          grid-template-rows: repeat(${this.rows}, 1fr);
        }
      </style>
      <div class="parent">
        <slot @slotchange=${this.updateChildren}></slot>
      </div>
    `}};Lr.styles=P`
    .parent {
      display: grid;
      gap: 0.25rem;
    }

    ::slotted(bim-button[label]:not([vertical])) {
      --bim-button--jc: flex-start;
    }

    ::slotted(bim-button) {
      --bim-label--c: var(--bim-ui_bg-contrast-80);
    }

    /* Mobile View */
    @media screen and (max-width: 480px) {
      .parent {
        gap: 0;
      }
    }
  `;let Qi=Lr;zr([v({type:Number,reflect:!0})],Qi.prototype,"rows",2);zr([v({type:Boolean,reflect:!0})],Qi.prototype,"vertical",1);var jd=Object.defineProperty,Dd=Object.getOwnPropertyDescriptor,Zi=(e,t,i,n)=>{for(var o=n>1?void 0:n?Dd(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&jd(t,i,o),o};const jr=class extends T{constructor(){super(...arguments),this._vertical=!1,this._labelHidden=!1}set vertical(e){this._vertical=e,this.updateChildren()}get vertical(){return this._vertical}set labelHidden(e){this._labelHidden=e,this.updateChildren()}get labelHidden(){return this._labelHidden}updateChildren(){const e=this.children;for(const t of e)t instanceof Qi&&(t.vertical=this.vertical),t.toggleAttribute("label-hidden",this.vertical)}render(){return m`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this.updateChildren}></slot>
        </div>
        ${!this.labelHidden&&(this.label||this.icon)?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
      </div>
    `}};jr.styles=P`
    :host {
      --bim-label--fz: var(--bim-ui_size-xs);
      --bim-label--c: var(--bim-ui_bg-contrast-60);
      display: block;
      flex: 1;
    }

    :host(:not([vertical])) ::slotted(bim-button[vertical]) {
      --bim-icon--fz: var(--bim-ui_size-5xl);
      min-height: 3.75rem;
    }

    .parent {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
      padding: 0.5rem;
      height: 100%;
      box-sizing: border-box;
      justify-content: space-between;
    }

    :host([vertical]) .parent {
      flex-direction: row-reverse;
    }

    :host([vertical]) .parent > bim-label {
      writing-mode: tb;
    }

    .children {
      display: flex;
      gap: 0.25rem;
    }

    :host([vertical]) .children {
      flex-direction: column;
    }

    /* Mobile View */
    @media screen and (max-width: 480px) {
      :host(:not([vertical])) ::slotted(bim-button[vertical]) {
        min-height: 3.4rem;
      }

      .parent {
        gap: 0.25rem;
        padding: 0.25rem;
      }
    }
  `;let Ae=jr;Zi([v({type:String,reflect:!0})],Ae.prototype,"label",2);Zi([v({type:String,reflect:!0})],Ae.prototype,"icon",2);Zi([v({type:Boolean,reflect:!0})],Ae.prototype,"vertical",1);Zi([v({type:Boolean,attribute:"label-hidden",reflect:!0})],Ae.prototype,"labelHidden",1);var Fd=Object.defineProperty,Hd=Object.getOwnPropertyDescriptor,Wn=(e,t,i,n)=>{for(var o=n>1?void 0:n?Hd(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Fd(t,i,o),o};const Dr=class extends T{constructor(){super(...arguments),this.labelsHidden=!1,this._vertical=!1,this._hidden=!1}set vertical(e){this._vertical=e,this.updateSections()}get vertical(){return this._vertical}set hidden(e){this._hidden=e,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}updateSections(){const e=this.children;for(const t of e)t instanceof Ae&&(t.labelHidden=this.vertical&&!Z.config.sectionLabelOnVerticalToolbar,t.vertical=this.vertical)}render(){return m`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `}};Dr.styles=P`
    :host {
      --bim-button--bgc: transparent;
      background-color: var(--bim-ui_bg-base);
      border-radius: var(--bim-ui_size-2xs);
      display: block;
    }

    :host([hidden]) {
      display: none;
    }

    .parent {
      display: flex;
      width: max-content;
      pointer-events: auto;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    :host([vertical]) {
      width: min-content;
      border-radius: var(--bim-ui_size-2xs);
      border: 1px solid var(--bim-ui_bg-contrast-20);
    }

    ::slotted(bim-toolbar-section:not(:last-child)) {
      border-right: 1px solid var(--bim-ui_bg-contrast-20);
      border-bottom: none;
    }

    :host([vertical]) ::slotted(bim-toolbar-section:not(:last-child)) {
      border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      border-right: none;
    }
  `;let Ki=Dr;Wn([v({type:String,reflect:!0})],Ki.prototype,"icon",2);Wn([v({type:Boolean,attribute:"labels-hidden",reflect:!0})],Ki.prototype,"labelsHidden",2);Wn([v({type:Boolean,reflect:!0})],Ki.prototype,"vertical",1);var Bd=Object.defineProperty,Ud=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&Bd(t,i,o),o};const Fr=class extends T{constructor(){super(),this._onResize=new Event("resize"),new ResizeObserver(()=>{setTimeout(()=>{this.dispatchEvent(this._onResize)})}).observe(this)}render(){return m`
      <div class="parent">
        <slot></slot>
      </div>
    `}};Fr.styles=P`
    :host {
      display: grid;
      min-width: 0;
      min-height: 0;
      height: 100%;
    }

    .parent {
      overflow: hidden;
      position: relative;
    }
  `;let Hr=Fr;Ud([v({type:String,reflect:!0})],Hr.prototype,"name");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Br="important",Vd=" !"+Br,Bt=Fs(class extends Hs{constructor(e){var t;if(super(e),e.type!==Ds.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const n=e[i];return n==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:i}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?i.removeProperty(n):i[n]=null);for(const n in t){const o=t[n];if(o!=null){this.ft.add(n);const s=typeof o=="string"&&o.endsWith(Vd);n.includes("-")||s?i.setProperty(n,s?o.slice(0,-11):o,s?Br:""):i[n]=o}}return Wt}}),qd=e=>{const{components:t}=e,i=t.get(rs);return m`
    <bim-button
      data-ui-id="import-ifc"
      label="Load IFC"
      icon="mage:box-3d-fill"
      @click=${()=>{const n=document.createElement("input");n.type="file",n.accept=".ifc",n.onchange=async()=>{if(n.files===null||n.files.length===0)return;const o=n.files[0],s=o.name.replace(".ifc","");n.remove();const r=await o.arrayBuffer(),a=new Uint8Array(r);await i.load(a,!0,s)},n.click()}}
    ></bim-button>
  `},Wd=e=>j.create(qd,e),Yd=Object.freeze(Object.defineProperty({__proto__:null,loadIfc:Wd},Symbol.toStringTag,{value:"Module"}));({...Yd});const Gd=e=>{const{components:t,actions:i,tags:n}=e,o=(i==null?void 0:i.dispose)??!0,s=(i==null?void 0:i.download)??!0,r=(i==null?void 0:i.visibility)??!0,a=(n==null?void 0:n.schema)??!0,l=(n==null?void 0:n.viewDefinition)??!0,d=t.get(Gt),u=({detail:c})=>{const{cell:h}=c;h.style.padding="0.25rem 0"};return m`
    <bim-table ${W(c=>{if(!c)return;const h=c;h.hiddenColumns=["modelID"];const p=[];for(const[,b]of d.groups){if(!b)continue;const y={data:{Name:b.name||b.uuid,modelID:b.uuid}};p.push(y)}h.dataTransform={Name:(b,y)=>{const{modelID:g}=y;if(typeof g!="string")return b;const f=d.groups.get(g);if(!f)return g;const _={};for(const k of f.items)_[k.id]=k.ids;let w;const{schema:x}=f.ifcMetadata;a&&x&&(w=m`
            <bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${x}</bim-label>
            `);let A;if(l&&"viewDefinition"in f.ifcMetadata){const k=f.ifcMetadata.viewDefinition;A=m`
            ${k.split(",").map(S=>m`<bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${S}</bim-label>`)}
          `}let C;o&&(C=m`<bim-button @click=${()=>d.disposeGroup(f)} icon="mdi:delete"></bim-button>`);let O;r&&(O=m`<bim-button @click=${k=>{const S=t.get(as),B=k.target;S.set(B.hasAttribute("data-model-hidden"),_),B.toggleAttribute("data-model-hidden"),B.icon=B.hasAttribute("data-model-hidden")?"mdi:eye-off":"mdi:eye"}} icon="mdi:eye"></bim-button>`);let N;return s&&(N=m`<bim-button @click=${()=>{const k=document.createElement("input");k.type="file",k.accept=".ifc",k.multiple=!1,k.addEventListener("change",async()=>{if(!(k.files&&k.files.length===1))return;const S=k.files[0],B=await S.arrayBuffer(),Y=await t.get(Ca).saveToIfc(f,new Uint8Array(B)),q=new File([Y],S.name),$=document.createElement("a");$.href=URL.createObjectURL(q),$.download=q.name,$.click(),URL.revokeObjectURL($.href)}),k.click()}} icon="flowbite:download-solid"></bim-button>`),m`
         <div style="display: flex; flex: 1; gap: var(--bim-ui_size-4xs); justify-content: space-between; overflow: auto;">
          <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0 var(--bim-ui_size-4xs); flex-grow: 1; overflow: auto;">
            <div style="min-height: 1.75rem; overflow: auto; display: flex;">
              <bim-label style="white-space: normal;">${b}</bim-label>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: var(--bim-ui_size-4xs); overflow: auto;">
              ${w}
              ${A}
            </div>
          </div>
          <div style="display: flex; align-self: flex-start; flex-shrink: 0;">
            ${N}
            ${O}
            ${C}
          </div>
         </div>
        `}},h.data=p})} @cellcreated=${u} headers-hidden no-indentation>
      <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        No models has been loaded yet
      </bim-label>
    </bim-table>
  `},Xd=(e,t=!0)=>{const i=j.create(Gd,e);if(t){const{components:n}=e,o=n.get(Gt),[,s]=i;o.onFragmentsLoaded.add(()=>setTimeout(()=>s())),o.onFragmentsDisposed.add(()=>s())}return i},Jd=Object.freeze(Object.defineProperty({__proto__:null,modelsList:Xd},Symbol.toStringTag,{value:"Module"})),Ur=["Name","ContainedInStructure","ForLayerSet","LayerThickness","HasProperties","HasAssociations","HasAssignments","HasPropertySets","PredefinedType","Quantities","ReferencedSource","Identification",e=>e.includes("Value"),e=>e.startsWith("Material"),e=>e.startsWith("Relating"),e=>{const t=["IsGroupedBy","IsDecomposedBy"];return e.startsWith("Is")&&!t.includes(e)}];async function wi(e,t,i,n=Ur,o=!1){const s=e.get(mt),r=await t.getProperties(i);if(!r)return{data:{Entity:`${i} properties not found...`}};const a=s.relationMaps[t.uuid],l={data:{}};for(const d in r){const u=n.map(h=>typeof h=="string"?d===h:h(d)).includes(!0);if(!(d==="type"||u))continue;const c=r[d];if(c)if(c.type===5){l.children||(l.children=[]);const h=await wi(e,t,c.value,n,o);l.children.push(h)}else if(typeof c=="object"&&!Array.isArray(c)){const{value:h,type:p}=c;if(o)p===1||p===2||p===3||(l.data[d]=h);else{const b=typeof h=="number"?Number(h.toFixed(3)):h;l.data[d]=b}}else if(Array.isArray(c))for(const h of c){if(h.type!==5)continue;l.children||(l.children=[]);const p=await wi(e,t,h.value,n,o);l.children.push(p)}else if(d==="type"){const h=$i[c];l.data.Entity=h}else l.data[d]=c}if(a&&a.get(r.expressID)){const d=a.get(r.expressID);for(const u of n){const c=[];if(typeof u=="string"){const h=s._inverseAttributes.indexOf(u);h!==-1&&c.push(h)}else{const h=s._inverseAttributes.filter(p=>u(p));for(const p of h){const b=s._inverseAttributes.indexOf(p);c.push(b)}}for(const h of c){const p=d.get(h);if(p)for(const b of p){const y=await wi(e,t,b,n,o);l.children||(l.children=[]),l.children.push(y)}}}}return l}const Qd=e=>{const{components:t,fragmentIdMap:i,attributesToInclude:n,editable:o,tableDefinition:s}=e,r=t.get(Gt);let a;return typeof n=="function"?a=n(Ur):a=n,m`<bim-table ${W(async l=>{if(!l)return;const d=l,u=[],c=[];for(const h in i){const p=r.list.get(h);if(!(p&&p.group))continue;const b=p.group,y=c.find(g=>g.model===b);if(y)for(const g of i[h])y.expressIDs.add(g);else{const g={model:b,expressIDs:new Set(i[h])};c.push(g)}}for(const h of c){const{model:p,expressIDs:b}=h;for(const y of b){const g=await wi(t,p,y,a,o);u.push(g)}}d.dataTransform=s,d.data=u,d.columns=[{name:"Entity",width:"minmax(15rem, 1fr)"}]})}></bim-table>`},Zd=e=>j.create(Qd,e),Kd=Object.freeze(Object.defineProperty({__proto__:null,entityAttributes:Zd},Symbol.toStringTag,{value:"Module"}));let xt;const tu=e=>{const{components:t,classifications:i}=e,n=t.get($a),o=t.get(as);xt||(xt=document.createElement("bim-table"),xt.headersHidden=!0,xt.hiddenColumns=["system"],xt.columns=["Name",{name:"Actions",width:"auto"}],xt.dataTransform={Actions:(r,a)=>{const{system:l,Name:d}=a;if(!(typeof l=="string"&&typeof d=="string"))return r;const u=n.list[l];if(!(u&&u[d]))return r;const c=u[d],{map:h}=c;return m`
          <div>
            <bim-checkbox checked @change=${p=>{const b=p.target;o.set(b.value,h)}}></bim-checkbox>
          </div>
        `}});const s=[];for(const r of i){const a=typeof r=="string"?r:r.system,l=typeof r=="string"?r:r.label,d=n.list[a];d&&s.push({data:{Name:l,system:a},children:Object.keys(d).map(u=>({data:{Name:u,system:a,Actions:""}}))})}return xt.data=s,m`${xt}`},eu=(e,t=!0)=>{const i=j.create(tu,e);if(t){const{components:n}=e,o=n.get(Gt),[,s]=i;o.onFragmentsDisposed.add(()=>s())}return i},iu=Object.freeze(Object.defineProperty({__proto__:null,classificationTree:eu},Symbol.toStringTag,{value:"Module"})),Vr=async(e,t,i)=>{var n,o,s,r;const a=e.get(mt),l={data:{Name:(n=i.Name)==null?void 0:n.value},children:[{data:{Name:"Identification",Value:(o=i.Identification)==null?void 0:o.value}},{data:{Name:"Name",Value:(s=i.Name)==null?void 0:s.value}},{data:{Name:"Description",Value:(r=i.Description)==null?void 0:r.value}}]},d=a.getEntityRelations(t,i.expressID,"IsNestedBy");if(!d)return l;l.children||(l.children=[]);const u=[];l.children.push({data:{Name:"Tasks"},children:u});for(const c of d){const h=await t.getProperties(c);if(!h)continue;const p=await Vr(e,t,h);u.push(p)}return l},nu=async(e,t,i)=>{const n=[];for(const o of i){const s=await Vr(e,t,o);n.push(s)}return{data:{Name:"Tasks"},children:n}},ou=async(e,t)=>{var i,n,o,s;const r={data:{Name:"Classifications"}};for(const a of t){const{value:l}=a.ReferencedSource,d=await e.getProperties(l);if(!d)continue;const u={data:{Name:(i=d.Name)==null?void 0:i.value},children:[{data:{Name:"Identification",Value:((n=a.Identification)==null?void 0:n.value)||((o=a.ItemReference)==null?void 0:o.value)}},{data:{Name:"Name",Value:(s=a.Name)==null?void 0:s.value}}]};r.children||(r.children=[]),r.children.push(u)}return r},su=async(e,t)=>{var i,n,o,s,r,a;const l={data:{Name:"Materials"}};for(const d of t){if(d.type===ds){const u=(i=d.ForLayerSet)==null?void 0:i.value,c=await e.getProperties(u);if(!c)continue;for(const h of c.MaterialLayers){const{value:p}=h,b=await e.getProperties(p);if(!b)continue;const y=await e.getProperties((n=b.Material)==null?void 0:n.value);if(!y)continue;const g={data:{Name:"Layer"},children:[{data:{Name:"Thickness",Value:(o=b.LayerThickness)==null?void 0:o.value}},{data:{Name:"Material",Value:(s=y.Name)==null?void 0:s.value}}]};l.children||(l.children=[]),l.children.push(g)}}if(d.type===hs)for(const u of d.Materials){const{value:c}=u,h=await e.getProperties(c);if(!h)continue;const p={data:{Name:"Name",Value:(r=h.Name)==null?void 0:r.value}};l.children||(l.children=[]),l.children.push(p)}if(d.type===us){const u={data:{Name:"Name",Value:(a=d.Name)==null?void 0:a.value}};l.children||(l.children=[]),l.children.push(u)}}return l},ru={IFCLENGTHMEASURE:"LENGTHUNIT",IFCAREAMEASURE:"AREAUNIT",IFCVOLUMEMEASURE:"VOLUMEUNIT",IFCPLANEANGLEMEASURE:"PLANEANGLEUNIT"},au={MILLIMETRE:{symbol:"mm",digits:0},METRE:{symbol:"m",digits:2},KILOMETRE:{symbol:"km",digits:2},SQUARE_METRE:{symbol:"m²",digits:2},CUBIC_METRE:{symbol:"m³",digits:2},DEGREE:{symbol:"°",digits:2},RADIAN:{symbol:"rad",digits:2},GRAM:{symbol:"g",digits:0},KILOGRAM:{symbol:"kg",digits:2},MILLISECOND:{symbol:"ms",digits:0},SECOND:{symbol:"s",digits:0}},qr=async(e,t)=>{var i,n,o;const s=Object.values(await e.getAllPropertiesOfType(Na))[0];let r;for(const a of s.Units){const l=await e.getProperties(a.value);if(l&&((i=l.UnitType)==null?void 0:i.value)===ru[t]){r=`${((n=l.Prefix)==null?void 0:n.value)??""}${((o=l.Name)==null?void 0:o.value)??""}`;break}}return r?au[r]:null},lu=async(e,t,i)=>{var n,o;const{displayUnits:s}=i,r={data:{Name:"PropertySets"}};for(const a of t){const l={data:{Name:(n=a.Name)==null?void 0:n.value}};if(a.type===ls){for(const d of a.HasProperties){const{value:u}=d,c=await e.getProperties(u);if(!c)continue;const h=Object.keys(c).find(g=>g.includes("Value"));if(!(h&&c[h]))continue;let p=c[h].value,b="";if(s){const{name:g}=c[h],f=await qr(e,g)??{};b=f.symbol,p=c[h].value,typeof p=="number"&&f.digits&&(p=p.toFixed(f.digits))}const y={data:{Name:(o=c.Name)==null?void 0:o.value,Value:`${p} ${b??""}`}};l.children||(l.children=[]),l.children.push(y)}l.children&&(r.children||(r.children=[]),r.children.push(l))}}return r},cu=async(e,t,i)=>{var n,o;const{displayUnits:s}=i,r={data:{Name:"QuantitySets"}};for(const a of t){const l={data:{Name:(n=a.Name)==null?void 0:n.value}};if(a.type===cs){for(const d of a.Quantities){const{value:u}=d,c=await e.getProperties(u);if(!c)continue;const h=Object.keys(c).find(g=>g.includes("Value"));if(!(h&&c[h]))continue;let p=c[h].value,b="";if(s){const{name:g}=c[h],f=await qr(e,g)??{};b=f.symbol,p=c[h].value,typeof p=="number"&&f.digits&&(p=p.toFixed(f.digits))}const y={data:{Name:(o=c.Name)==null?void 0:o.value,Value:`${p} ${b??""}`}};l.children||(l.children=[]),l.children.push(y)}l.children&&(r.children||(r.children=[]),r.children.push(l))}}return r},du=["OwnerHistory","ObjectPlacement","CompositionType"],Wr=async(e,t)=>{const i={groupName:"Attributes",includeClass:!1,...t},{groupName:n,includeClass:o}=i,s={data:{Name:n}};o&&(s.children||(s.children=[]),s.children.push({data:{Name:"Class",Value:$i[e.type]}}));for(const r in e){if(du.includes(r))continue;const a=e[r];if(a&&typeof a=="object"&&!Array.isArray(a)){if(a.type===Ea)continue;const l={data:{Name:r,Value:a.value}};s.children||(s.children=[]),s.children.push(l)}}return s},ue=(e,...t)=>{e.children||(e.children=[]),e.children.push(...t)},uu=async(e,t,i,n,o)=>{const s=e.get(mt).getEntityRelations(t,i,"IsDefinedBy");if(s){const r=[],a=[];for(const u of s){const c=await t.getProperties(u);c&&(c.type===ls&&r.push(c),c.type===cs&&a.push(c))}const l=await lu(t,r,o);l.children&&ue(n,l);const d=await cu(t,a,o);d.children&&ue(n,d)}},hu=async(e,t,i,n)=>{const o=e.get(mt).getEntityRelations(t,i,"HasAssociations");if(o){const s=[],r=[];for(const d of o){const u=await t.getProperties(d);u&&(u.type===Ta&&s.push(u),(u.type===ds||u.type===Oa||u.type===Pa||u.type===us||u.type===hs)&&r.push(u))}const a=await ou(t,s);a.children&&ue(n,a);const l=await su(t,r);l.children&&ue(n,l)}},pu=async(e,t,i,n)=>{const o=e.get(mt).getEntityRelations(t,i,"HasAssignments");if(o){const s=[];for(const a of o){const l=await t.getProperties(a);l&&l.type===Ia&&s.push(l)}const r=await nu(e,t,s);r.children&&ue(n,r)}},mu=async(e,t,i,n)=>{const o=e.get(mt).getEntityRelations(t,i,"ContainedInStructure");if(o&&o[0]){const s=o[0],r=await t.getProperties(s);if(r){const a=await Wr(r,{groupName:"SpatialContainer"});ue(n,a)}}};let gi={};const fu=async(e,t,i)=>{var n;const o=e.get(mt),s=e.get(Gt),r=s.getModelIdMap(t);Object.keys(t).length===0&&(gi={});const a=[];for(const l in r){const d=s.groups.get(l);if(!d)continue;const u=o.relationMaps[d.uuid];if(!u)continue;l in gi||(gi[l]=new Map);const c=gi[l],h=r[l];for(const p of h){let b=c.get(p);if(b){a.push(b);continue}const y=await d.getProperties(p);if(!y)continue;b={data:{Name:(n=y.Name)==null?void 0:n.value}},a.push(b),c.set(p,b);const g=await Wr(y,{includeClass:!0});b.children||(b.children=[]),b.children.push(g),u.get(p)&&(await uu(e,d,p,b,i),await hu(e,d,p,b),await pu(e,d,p,b),await mu(e,d,p,b))}}return a},bu=e=>{const t={emptySelectionWarning:!0,...e},{components:i,fragmentIdMap:n,emptySelectionWarning:o}=t;return m`
    <bim-table @cellcreated=${({detail:s})=>{const{cell:r}=s;r.column==="Name"&&!("Value"in r.rowData)&&(r.style.gridColumn="1 / -1")}} ${W(async s=>{if(!s)return;const r=s;r.columns=[{name:"Name",width:"12rem"}],r.headersHidden=!0,r.loadFunction=()=>fu(i,n,e),await r.loadData(!0)&&r.dispatchEvent(new Event("datacomputed"))})}>
      ${o?m`
            <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
              Select some elements to display its properties
            </bim-label>
            `:null}
      <bim-label slot="error-loading" style="--bim-icon--c: #e72e2e" icon="bxs:error-alt">
        Something went wrong with the properties
      </bim-label>
    </bim-table>
  `},gu=e=>j.create(bu,e),vu=Object.freeze(Object.defineProperty({__proto__:null,elementProperties:gu},Symbol.toStringTag,{value:"Module"})),kn=async(e,t,i,n)=>{var o;const s=[],r=e.get(mt),a=await t.getProperties(i);if(!a)return s;const{type:l}=a,d={data:{Entity:$i[l],Name:(o=a.Name)==null?void 0:o.value,modelID:t.uuid,expressID:i}};for(const u of n){const c=r.getEntityRelations(t,i,u);if(!c)continue;d.children||(d.children=[]),d.data.relations=JSON.stringify(c);const h={};for(const p of c){const b=await kn(e,t,p,n);for(const y of b)if(y.data.relations)d.children.push(y);else{const g=t.data.get(p);if(!g){d.children.push(y);continue}const f=g[1][1],_=$i[f];_ in h||(h[_]=[]),y.data.Entity=y.data.Name,delete y.data.Name,h[_].push(y)}}for(const p in h){const b=h[p],y=b.map(f=>f.data.expressID),g={data:{Entity:p,modelID:t.uuid,relations:JSON.stringify(y)},children:b};d.children.push(g)}}return s.push(d),s},yu=async(e,t,i,n)=>{const o=e.get(mt),s=[];for(const r of t){let a;if(n)a={data:{Entity:r.name!==""?r.name:r.uuid},children:await kn(e,r,n,i)};else{const l=o.relationMaps[r.uuid],d=await r.getAllPropertiesOfType(ka);if(!(l&&d))continue;const{expressID:u}=Object.values(d)[0];a={data:{Entity:r.name!==""?r.name:r.uuid},children:await kn(e,r,u,i)}}s.push(a)}return s};let ft;const _u=(e,t)=>{const i=e.get(Gt),{modelID:n,expressID:o,relations:s}=t;if(!n)return null;const r=i.groups.get(n);return r?r.getFragmentMap([o,...JSON.parse(s??"[]")]):null},wu=e=>{const{components:t,models:i,expressID:n}=e,o=e.selectHighlighterName??"select",s=e.hoverHighlighterName??"hover";ft||(ft=document.createElement("bim-table"),ft.hiddenColumns=["modelID","expressID","relations"],ft.columns=["Entity","Name"],ft.headersHidden=!0,ft.addEventListener("cellcreated",({detail:a})=>{const{cell:l}=a;l.column==="Entity"&&!("Name"in l.rowData)&&(l.style.gridColumn="1 / -1")})),ft.addEventListener("rowcreated",a=>{a.stopImmediatePropagation();const{row:l}=a.detail,d=t.get(xa),u=_u(t,l.data);u&&Object.keys(u).length!==0&&(l.onmouseover=()=>{s&&(l.style.backgroundColor="var(--bim-ui_bg-contrast-20)",d.highlightByID(s,u,!0,!1,d.selection[o]??{}))},l.onmouseout=()=>{l.style.backgroundColor="",d.clear(s)},l.onclick=()=>{o&&d.highlightByID(o,u,!0,!0)})});const r=e.inverseAttributes??["IsDecomposedBy","ContainsElements"];return yu(t,i,r,n).then(a=>ft.data=a),m`${ft}`},xu=(e,t=!0)=>{const i=j.create(wu,e);if(t){const[,n]=i,{components:o}=e,s=o.get(Gt),r=o.get(mt),a=()=>n({models:s.groups.values()});r.onRelationsIndexed.add(a),s.onFragmentsDisposed.add(a)}return i},$u=Object.freeze(Object.defineProperty({__proto__:null,relationsTree:xu},Symbol.toStringTag,{value:"Module"})),Pe=(e,t)=>[...e.get(Pn).list.values()].find(i=>i.world===t),Cu=(e,t)=>m`
    <bim-color-input @input=${i=>{const n=i.target;e.color=new fe(n.color)}} color=${t}></bim-color-input>
  `,Au=(e,t)=>{const{postproduction:i}=e,n=i.n8ao.configuration;return m`
    <bim-color-input @input=${o=>{const s=o.target;n.color=new fe(s.color)}} color=${t}></bim-color-input>
  `},Su=(e,t)=>{const{color:i,opacity:n}=JSON.parse(t),{postproduction:o}=e,{customEffects:s}=o;return m`
    <bim-color-input @input=${r=>{const{color:a,opacity:l}=r.target;s.lineColor=new fe(a).getHex(),l&&(s.opacity=l/100)}} color=${i} opacity=${n*100}></bim-color-input>
  `},ku=(e,t)=>m`
    <bim-color-input @input=${i=>{const n=i.target,o=new fe(n.color);e.material.uniforms.uColor.value=o}} color=${t}></bim-color-input>
  `,Eu=(e,t)=>{const{postproduction:i}=e;return m`
    <bim-checkbox @change=${n=>{const o=n.target;i.setPasses({ao:o.checked})}} .checked=${t}></bim-checkbox>
  `},Tu=(e,t)=>{const{postproduction:i}=e;return m`
    <bim-checkbox @change=${n=>{const o=n.target;i.setPasses({gamma:o.checked})}} .checked=${t}></bim-checkbox>
  `},Ou=(e,t)=>{const{postproduction:i}=e;return m`
    <bim-checkbox @change=${n=>{const o=n.target;i.setPasses({custom:o.checked})}} .checked=${t}></bim-checkbox>
  `},$t=(e,t,i,n=()=>{})=>m`
    <bim-checkbox .checked="${i}" @change="${o=>{const s=o.target.checked;e[t]=s,n(s)}}"></bim-checkbox> 
  `,I=(e,t,i,n)=>{const o={slider:!1,min:0,max:100,step:1,prefix:null,suffix:null,onInputSet:()=>{},...n},{slider:s,min:r,max:a,step:l,suffix:d,prefix:u,onInputSet:c}=o;return m`
    <bim-number-input
      .pref=${u}
      .suffix=${d}
      .slider=${s} 
      min=${r} 
      value="${i}" 
      max=${a} 
      step=${l} 
      @change="${h=>{const p=h.target.value;e[t]=p,c(p)}}"
    ></bim-number-input> 
  `},Pu=e=>{const{components:t}=e,i=t.get(Je);return m`
    <bim-table @cellcreated=${({detail:n})=>{const o=n.cell.parentNode;if(!o)return;const s=o.querySelector("bim-table-cell[column='Name']"),r=o.querySelector("bim-table-cell[column='Value']");s&&!r&&(s.style.gridColumn="1 / -1")}} ${W(async n=>{var o,s,r,a,l;if(!n)return;const d=n;d.preserveStructureOnFilter=!0,d.dataTransform={Value:(c,h)=>{const p=h.World,b=i.list.get(p);if(!b)return c;const{scene:y,camera:g,renderer:f}=b,_=h.Name;if(_==="Grid"&&h.IsGridConfig&&typeof c=="boolean"){const w=Pe(t,b);return w?$t(w,"visible",c):c}if(_==="Color"&&h.IsGridConfig&&typeof c=="string"){const w=Pe(t,b);return w?ku(w,c):c}if(_==="Distance"&&h.IsGridConfig&&typeof c=="number"){const w=Pe(t,b);return w?I(w.material.uniforms.uDistance,"value",c,{slider:!0,min:300,max:1e3}):c}if(_==="Size"&&h.IsGridConfig&&typeof c=="string"){const w=Pe(t,b);if(!w)return c;const{x,y:A}=JSON.parse(c),C=I(w.material.uniforms.uSize1,"value",x,{slider:!0,suffix:"m",prefix:"A",min:1,max:20}),O=I(w.material.uniforms.uSize2,"value",A,{slider:!0,suffix:"m",prefix:"B",min:1,max:20});return m`
            <div style="display: flex; gap: 0.25rem; width: 100%; flex-wrap: wrap">${C}${O}</div>
          `}if(_==="Near Frustum"&&g.three instanceof pi&&typeof c=="number"){const w=g.three;return I(g.three,"near",c,{slider:!0,min:.1,max:10,step:.1,onInputSet:()=>w.updateProjectionMatrix()})}if(_==="Far Frustum"&&g.three instanceof pi&&typeof c=="number"){const w=g.three;return I(g.three,"far",c,{slider:!0,min:300,max:2e3,step:10,onInputSet:()=>w.updateProjectionMatrix()})}if(_==="Field of View"&&g.three instanceof pi&&typeof c=="number"){const w=g.three;return I(g.three,"fov",c,{slider:!0,min:10,max:120,onInputSet:()=>w.updateProjectionMatrix()})}if(_==="Invert Drag"&&g.hasCameraControls()&&typeof c=="boolean")return $t(g.controls,"dollyDragInverted",c);if(_==="Dolly Speed"&&g.hasCameraControls()&&typeof c=="number")return I(g.controls,"dollySpeed",c,{slider:!0,min:.5,max:3,step:.1});if(_==="Truck Speed"&&g.hasCameraControls()&&typeof c=="number")return I(g.controls,"truckSpeed",c,{slider:!0,min:.5,max:6,step:.1});if(_==="Smooth Time"&&g.hasCameraControls()&&typeof c=="number")return I(g.controls,"smoothTime",c,{slider:!0,min:.01,max:2,step:.01});if(_==="Intensity"&&typeof c=="number"){if(h.Light&&typeof h.Light=="string"){const w=y.three.children.find(x=>x.uuid===h.Light);return w&&w instanceof Ee?I(w,"intensity",c,{slider:!0,min:0,max:10,step:.1}):c}if(h.IsAOConfig&&f instanceof R)return I(f.postproduction.n8ao.configuration,"intensity",c,{slider:!0,max:16,step:.1})}if(_==="Color"&&typeof c=="string"){const w=h.Light,x=y.three.children.find(A=>A.uuid===w);if(x&&x instanceof Ee)return Cu(x,c);if(h.IsAOConfig&&f instanceof R)return Au(f,c)}if(_==="Ambient Oclussion"&&typeof c=="boolean"&&h.IsAOConfig&&f instanceof R)return Eu(f,c);if(_==="Half Resolution"&&h.IsAOConfig&&f instanceof R&&typeof c=="boolean")return $t(f.postproduction.n8ao.configuration,"halfRes",c);if(_==="Screen Space Radius"&&h.IsAOConfig&&f instanceof R&&typeof c=="boolean")return $t(f.postproduction.n8ao.configuration,"screenSpaceRadius",c);if(_==="Radius"&&h.IsAOConfig&&f instanceof R&&typeof c=="number")return I(f.postproduction.n8ao.configuration,"aoRadius",c,{slider:!0,max:2,step:.1});if(_==="Denoise Samples"&&h.IsAOConfig&&f instanceof R&&typeof c=="number")return I(f.postproduction.n8ao.configuration,"denoiseSamples",c,{slider:!0,min:1,max:16});if(_==="Samples"&&h.IsAOConfig&&f instanceof R&&typeof c=="number")return I(f.postproduction.n8ao.configuration,"aoSamples",c,{slider:!0,min:1,max:16});if(_==="Denoise Radius"&&h.IsAOConfig&&f instanceof R&&typeof c=="number")return I(f.postproduction.n8ao.configuration,"denoiseRadius",c,{slider:!0,min:0,max:16,step:.1});if(_==="Distance Falloff"&&h.IsAOConfig&&f instanceof R&&typeof c=="number")return I(f.postproduction.n8ao.configuration,"distanceFalloff",c,{slider:!0,min:0,max:4,step:.1});if(_==="Directional Light"&&h.Light&&typeof h.Light=="string"&&typeof c=="boolean"){const w=y.three.children.find(x=>x.uuid===h.Light);return w&&w instanceof Ee?$t(w,"visible",c):c}if(_==="Ambient Light"&&h.Light&&typeof h.Light=="string"&&typeof c=="boolean"){const w=y.three.children.find(x=>x.uuid===h.Light);return w&&w instanceof Ee?$t(w,"visible",c):c}if(_==="Position"&&h.Light&&typeof h.Light=="string"&&typeof c=="string"){const w=y.three.children.find(S=>S.uuid===h.Light);if(!(w&&w instanceof Ee))return c;const{x,y:A,z:C}=JSON.parse(c),O=I(w.position,"x",x,{slider:!0,prefix:"X",suffix:"m",min:-50,max:50}),N=I(w.position,"y",A,{slider:!0,prefix:"Y",suffix:"m",min:-50,max:50}),k=I(w.position,"z",C,{slider:!0,prefix:"Z",suffix:"m",min:-50,max:50});return m`
            <div style="display: flex; gap: 0.25rem; width: 100%; flex-wrap: wrap">${O}${N}${k}</div>
          `}return _==="Custom Effects"&&h.IsCEConfig&&f instanceof R&&typeof c=="boolean"?Ou(f,c):_==="Color"&&h.IsOutlineConfig&&f instanceof R&&typeof c=="string"?Su(f,c):_==="Tolerance"&&h.IsOutlineConfig&&f instanceof R&&typeof c=="number"?I(f.postproduction.customEffects,"tolerance",c,{slider:!0,min:0,max:6,step:.01}):_==="Outline"&&h.IsOutlineConfig&&f instanceof R&&typeof c=="boolean"?$t(f.postproduction.customEffects,"outlineEnabled",c):_==="Gloss"&&h.IsGlossConfig&&f instanceof R&&typeof c=="boolean"?$t(f.postproduction.customEffects,"glossEnabled",c):_==="Min"&&h.IsGlossConfig&&f instanceof R&&typeof c=="number"?I(f.postproduction.customEffects,"minGloss",c,{slider:!0,min:-.5,max:.5,step:.01}):_==="Max"&&h.IsGlossConfig&&f instanceof R&&typeof c=="number"?I(f.postproduction.customEffects,"maxGloss",c,{slider:!0,min:-.5,max:.5,step:.01}):_==="Exponent"&&h.IsGlossConfig&&f instanceof R&&typeof c=="number"?I(f.postproduction.customEffects,"glossExponent",c,{slider:!0,min:0,max:5,step:.01}):_==="Gamma Correction"&&h.IsGammaConfig&&f instanceof R&&typeof c=="boolean"?Tu(f,c):c}};const u=[];for(const[,c]of i.list){const{scene:h,camera:p,renderer:b}=c,y=Pe(t,c),g={data:{Name:c instanceof ya&&c.name||c.uuid},children:[]};if(h){const f={data:{Name:"Scene"}};if(y){const x=`#${y.material.uniforms.uColor.value.getHexString()}`,A=JSON.stringify({x:y.material.uniforms.uSize1.value,y:y.material.uniforms.uSize2.value}),C={data:{Name:"Grid",Value:y.three.visible,World:c.uuid,IsGridConfig:!0},children:[{data:{Name:"Color",Value:x,World:c.uuid,IsGridConfig:!0}},{data:{Name:"Size",Value:A,World:c.uuid,IsGridConfig:!0}},{data:{Name:"Distance",Value:y.material.uniforms.uDistance.value,World:c.uuid,IsGridConfig:!0}}]};f.children||(f.children=[]),f.children.push(C)}const _=h.three.children.filter(x=>x instanceof _a);for(const x of _){const A={data:{Name:"Directional Light",Value:x.visible,World:c.uuid,Light:x.uuid},children:[{data:{Name:"Position",Value:JSON.stringify(x.position),World:c.uuid,Light:x.uuid}},{data:{Name:"Intensity",Value:x.intensity,World:c.uuid,Light:x.uuid}},{data:{Name:"Color",Value:`#${x.color.getHexString()}`,World:c.uuid,Light:x.uuid}}]};f.children||(f.children=[]),f.children.push(A)}const w=h.three.children.filter(x=>x instanceof wa);for(const x of w){const A={data:{Name:"Ambient Light",Value:x.visible,World:c.uuid,Light:x.uuid},children:[{data:{Name:"Intensity",Value:x.intensity,World:c.uuid,Light:x.uuid}},{data:{Name:"Color",Value:`#${x.color.getHexString()}`,World:c.uuid,Light:x.uuid}}]};f.children||(f.children=[]),f.children.push(A)}f.children&&((o=f.children)==null?void 0:o.length)>0&&((s=g.children)==null||s.push(f))}if(p.three instanceof pi){const f={data:{Name:"Perspective Camera"},children:[{data:{Name:"Near Frustum",Value:p.three.near,World:c.uuid}},{data:{Name:"Far Frustum",Value:p.three.far,World:c.uuid}},{data:{Name:"Field of View",Value:p.three.fov,World:c.uuid}}]};if(p.hasCameraControls()){const{controls:_}=p,w={dollyDragInverted:"Invert Drag",dollySpeed:"Dolly Speed",truckSpeed:"Truck Speed",smoothTime:"Smooth Time"};for(const x in w){const A=_[x];A!=null&&((r=f.children)==null||r.push({data:{Name:w[x],Value:A,World:c.uuid}}))}}(a=g.children)==null||a.push(f)}if(b instanceof R){const{postproduction:f}=b,_=f.n8ao.configuration,w={data:{Name:"Renderer"},children:[{data:{Name:"Gamma Correction",Value:f.settings.gamma??!1,World:c.uuid,IsGammaConfig:!0}},{data:{Name:"Ambient Oclussion",Value:f.settings.ao??!1,World:c.uuid,IsAOConfig:!0},children:[{data:{Name:"Samples",Value:_.aoSamples,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Color",Value:`#${_.color.getHexString()}`,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Half Resolution",Value:_.halfRes,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Screen Space Radius",Value:_.screenSpaceRadius,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Radius",Value:_.aoRadius,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Intensity",Value:_.intensity,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Distance Falloff",Value:_.distanceFalloff,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Denoise Samples",Value:_.denoiseSamples,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Denoise Radius",Value:_.denoiseRadius,World:c.uuid,IsAOConfig:!0}}]},{data:{Name:"Custom Effects",Value:f.settings.custom??!1,World:c.uuid,IsCEConfig:!0},children:[{data:{Name:"Gloss",Value:f.customEffects.glossEnabled,World:c.uuid,IsGlossConfig:!0},children:[{data:{Name:"Min",Value:f.customEffects.minGloss,World:c.uuid,IsGlossConfig:!0}},{data:{Name:"Max",Value:f.customEffects.maxGloss,World:c.uuid,IsGlossConfig:!0}},{data:{Name:"Exponent",Value:f.customEffects.glossExponent,World:c.uuid,IsGlossConfig:!0}}]},{data:{Name:"Outline",Value:f.customEffects.outlineEnabled,World:c.uuid,IsOutlineConfig:!0},children:[{data:{Name:"Color",get Value(){const x=new fe(f.customEffects.lineColor),A=f.customEffects.opacity;return JSON.stringify({color:`#${x.getHexString()}`,opacity:A})},World:c.uuid,IsOutlineConfig:!0}},{data:{Name:"Tolerance",Value:f.customEffects.tolerance,World:c.uuid,IsOutlineConfig:!0}}]}]}]};(l=g.children)==null||l.push(w)}u.push(g)}d.columns=[{name:"Name",width:"11rem"}],d.hiddenColumns=["World","Light","IsAOConfig","IsCEConfig","IsGlossConfig","IsOutlineConfig","IsGammaConfig","IsGridConfig"],d.data=u})} headers-hidden expanded>
     <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        No worlds to configure
      </bim-label>
    </bim-table>
  `},Iu=(e,t=!0)=>{const i=j.create(Pu,e);if(t){const[,n]=i,{components:o}=e;o.get(Je).list.onItemDeleted.add(()=>n())}return i},Nu=Object.freeze(Object.defineProperty({__proto__:null,worldsConfiguration:Iu},Symbol.toStringTag,{value:"Module"})),ee=(e,t)=>{const i=t[e],n=(i==null?void 0:i.name)??e,o=n.trim().split(/\s+/);let s,r;return o[0]&&o[0][0]&&(s=o[0][0].toUpperCase(),o[0][1]&&(r=o[0][1].toUpperCase())),o[1]&&o[1][0]&&(r=o[1][0].toUpperCase()),m`
    <div style="display: flex; gap: 0.25rem; overflow: hidden;">
      ${!(i!=null&&i.picture)&&(s||r)?m`
        <bim-label
          style=${Bt({borderRadius:"999px",padding:"0.375rem",backgroundColor:"var(--bim-ui_bg-contrast-20)",aspectRatio:"1",fontSize:"0.7rem"})}>${s}${r}</bim-label>
        `:null}
      <bim-label .img=${i==null?void 0:i.picture}>${n}</bim-label>
    </div>
  `},J={users:{"jhon.doe@example.com":{name:"Jhon Doe"}},priorities:{"On hold":{icon:"flowbite:circle-pause-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#767676"}},Minor:{icon:"mingcute:arrows-down-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#4CAF50"}},Normal:{icon:"fa6-solid:grip-lines",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Major:{icon:"mingcute:arrows-up-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Critical:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}}},statuses:{Active:{icon:"prime:circle-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)"}},"In Progress":{icon:"prime:circle-fill",style:{backgroundColor:"#fa89004d","--bim-label--c":"#FB8C00","--bim-icon--c":"#FB8C00"}},"In Review":{icon:"prime:circle-fill",style:{backgroundColor:"#9c6bff4d","--bim-label--c":"#9D6BFF","--bim-icon--c":"#9D6BFF"}},Done:{icon:"prime:circle-fill",style:{backgroundColor:"#4CAF504D","--bim-label--c":"#4CAF50","--bim-icon--c":"#4CAF50"}},Closed:{icon:"prime:circle-fill",style:{backgroundColor:"#414141","--bim-label--c":"#727272","--bim-icon--c":"#727272"}}},types:{Clash:{icon:"gg:close-r",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Issue:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Failure:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Inquiry:{icon:"majesticons:comment-line",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Fault:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Remark:{icon:"ph:note-blank-bold",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Request:{icon:"mynaui:edit-one",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#9D6BFF"}}}},ie={padding:"0.25rem 0.5rem",borderRadius:"999px","--bim-label--c":"var(--bim-ui_bg-contrast-100)"};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ni=globalThis,Ri=Ni.trustedTypes,qo=Ri?Ri.createPolicy("lit-html",{createHTML:e=>e}):void 0,Yr="$lit$",At=`lit$${Math.random().toFixed(9).slice(2)}$`,Gr="?"+At,Ru=`<${Gr}>`,Yt=document,Ye=()=>Yt.createComment(""),Ge=e=>e===null||typeof e!="object"&&typeof e!="function",Yn=Array.isArray,Mu=e=>Yn(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",un=`[ 	
\f\r]`,Ie=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Wo=/-->/g,Yo=/>/g,jt=RegExp(`>|${un}(?:([^\\s"'>=/]+)(${un}*=${un}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Go=/'/g,Xo=/"/g,Xr=/^(?:script|style|textarea|title)$/i,zu=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),Gn=zu(1),he=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),Jo=new WeakMap,Ft=Yt.createTreeWalker(Yt,129);function Jr(e,t){if(!Yn(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return qo!==void 0?qo.createHTML(t):t}const Lu=(e,t)=>{const i=e.length-1,n=[];let o,s=t===2?"<svg>":t===3?"<math>":"",r=Ie;for(let a=0;a<i;a++){const l=e[a];let d,u,c=-1,h=0;for(;h<l.length&&(r.lastIndex=h,u=r.exec(l),u!==null);)h=r.lastIndex,r===Ie?u[1]==="!--"?r=Wo:u[1]!==void 0?r=Yo:u[2]!==void 0?(Xr.test(u[2])&&(o=RegExp("</"+u[2],"g")),r=jt):u[3]!==void 0&&(r=jt):r===jt?u[0]===">"?(r=o??Ie,c=-1):u[1]===void 0?c=-2:(c=r.lastIndex-u[2].length,d=u[1],r=u[3]===void 0?jt:u[3]==='"'?Xo:Go):r===Xo||r===Go?r=jt:r===Wo||r===Yo?r=Ie:(r=jt,o=void 0);const p=r===jt&&e[a+1].startsWith("/>")?" ":"";s+=r===Ie?l+Ru:c>=0?(n.push(d),l.slice(0,c)+Yr+l.slice(c)+At+p):l+At+(c===-2?a:p)}return[Jr(e,s+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class Xe{constructor({strings:t,_$litType$:i},n){let o;this.parts=[];let s=0,r=0;const a=t.length-1,l=this.parts,[d,u]=Lu(t,i);if(this.el=Xe.createElement(d,n),Ft.currentNode=this.el.content,i===2||i===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(o=Ft.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const c of o.getAttributeNames())if(c.endsWith(Yr)){const h=u[r++],p=o.getAttribute(c).split(At),b=/([.?@])?(.*)/.exec(h);l.push({type:1,index:s,name:b[2],strings:p,ctor:b[1]==="."?Du:b[1]==="?"?Fu:b[1]==="@"?Hu:tn}),o.removeAttribute(c)}else c.startsWith(At)&&(l.push({type:6,index:s}),o.removeAttribute(c));if(Xr.test(o.tagName)){const c=o.textContent.split(At),h=c.length-1;if(h>0){o.textContent=Ri?Ri.emptyScript:"";for(let p=0;p<h;p++)o.append(c[p],Ye()),Ft.nextNode(),l.push({type:2,index:++s});o.append(c[h],Ye())}}}else if(o.nodeType===8)if(o.data===Gr)l.push({type:2,index:s});else{let c=-1;for(;(c=o.data.indexOf(At,c+1))!==-1;)l.push({type:7,index:s}),c+=At.length-1}s++}}static createElement(t,i){const n=Yt.createElement("template");return n.innerHTML=t,n}}function pe(e,t,i=e,n){var o,s;if(t===he)return t;let r=n!==void 0?(o=i._$Co)==null?void 0:o[n]:i._$Cl;const a=Ge(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==a&&((s=r==null?void 0:r._$AO)==null||s.call(r,!1),a===void 0?r=void 0:(r=new a(e),r._$AT(e,i,n)),n!==void 0?(i._$Co??(i._$Co=[]))[n]=r:i._$Cl=r),r!==void 0&&(t=pe(e,r._$AS(e,t.values),r,n)),t}class ju{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??Yt).importNode(i,!0);Ft.currentNode=o;let s=Ft.nextNode(),r=0,a=0,l=n[0];for(;l!==void 0;){if(r===l.index){let d;l.type===2?d=new ci(s,s.nextSibling,this,t):l.type===1?d=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(d=new Bu(s,this,t)),this._$AV.push(d),l=n[++a]}r!==(l==null?void 0:l.index)&&(s=Ft.nextNode(),r++)}return Ft.currentNode=Yt,o}p(t){let i=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,i),i+=n.strings.length-2):n._$AI(t[i])),i++}}class ci{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,i,n,o){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=pe(this,t,i),Ge(t)?t===L||t==null||t===""?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==he&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Mu(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==L&&Ge(this._$AH)?this._$AA.nextSibling.data=t:this.T(Yt.createTextNode(t)),this._$AH=t}$(t){var i;const{values:n,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Xe.createElement(Jr(o.h,o.h[0]),this.options)),o);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(n);else{const r=new ju(s,this),a=r.u(this.options);r.p(n),this.T(a),this._$AH=r}}_$AC(t){let i=Jo.get(t.strings);return i===void 0&&Jo.set(t.strings,i=new Xe(t)),i}k(t){Yn(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,o=0;for(const s of t)o===i.length?i.push(n=new ci(this.O(Ye()),this.O(Ye()),this,this.options)):n=i[o],n._$AI(s),o++;o<i.length&&(this._$AR(n&&n._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,i);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var i;this._$AM===void 0&&(this._$Cv=t,(i=this._$AP)==null||i.call(this,t))}}class tn{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,n,o,s){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=L}_$AI(t,i=this,n,o){const s=this.strings;let r=!1;if(s===void 0)t=pe(this,t,i,0),r=!Ge(t)||t!==this._$AH&&t!==he,r&&(this._$AH=t);else{const a=t;let l,d;for(t=s[0],l=0;l<s.length-1;l++)d=pe(this,a[n+l],i,l),d===he&&(d=this._$AH[l]),r||(r=!Ge(d)||d!==this._$AH[l]),d===L?t=L:t!==L&&(t+=(d??"")+s[l+1]),this._$AH[l]=d}r&&!o&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Du extends tn{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}class Fu extends tn{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==L)}}class Hu extends tn{constructor(t,i,n,o,s){super(t,i,n,o,s),this.type=5}_$AI(t,i=this){if((t=pe(this,t,i,0)??L)===he)return;const n=this._$AH,o=t===L&&n!==L||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==L&&(n===L||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}}class Bu{constructor(t,i,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){pe(this,t)}}const Qo=Ni.litHtmlPolyfillSupport;Qo==null||Qo(Xe,ci),(Ni.litHtmlVersions??(Ni.litHtmlVersions=[])).push("3.2.1");const Uu=(e,t,i)=>{const n=(i==null?void 0:i.renderBefore)??t;let o=n._$litPart$;if(o===void 0){const s=(i==null?void 0:i.renderBefore)??null;n._$litPart$=o=new ci(t.insertBefore(Ye(),s),s,void 0,i??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vu=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qu={CHILD:2},Wu=e=>(...t)=>({_$litDirective$:e,values:t});let Yu=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le=(e,t)=>{var i;const n=e._$AN;if(n===void 0)return!1;for(const o of n)(i=o._$AO)==null||i.call(o,t,!1),Le(o,t);return!0},Mi=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while((i==null?void 0:i.size)===0)},Qr=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Ju(t)}};function Gu(e){this._$AN!==void 0?(Mi(this),this._$AM=e,Qr(this)):this._$AM=e}function Xu(e,t=!1,i=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(n))for(let s=i;s<n.length;s++)Le(n[s],!1),Mi(n[s]);else n!=null&&(Le(n,!1),Mi(n));else Le(this,e)}const Ju=e=>{e.type==qu.CHILD&&(e._$AP??(e._$AP=Xu),e._$AQ??(e._$AQ=Gu))};let Qu=class extends Yu{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Qr(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,n;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(n=this.disconnected)==null||n.call(this)),t&&(Le(this,e),Mi(this))}setValue(e){if(Vu(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const En=()=>new Zu;let Zu=class{};const hn=new WeakMap,Ku=Wu(class extends Qu{render(e){return L}update(e,[t]){var i;const n=t!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=t,this.ht=(i=e.options)==null?void 0:i.host,this.rt(this.ct=e.element)),L}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let i=hn.get(t);i===void 0&&(i=new WeakMap,hn.set(t,i)),i.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),i.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=hn.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),th={dueDate:e=>{if(typeof e=="string"&&e.trim()!=="")return new Date(e)},status:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},type:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},priority:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},stage:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},assignedTo:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},labels:e=>{if(Array.isArray(e))return new Set(e)}},Zr=e=>{const{components:t,topic:i,value:n,onCancel:o,onSubmit:s,styles:r}=e,a=s??(()=>{}),l=t.get(Qe),d=(n==null?void 0:n.title)??(i==null?void 0:i.title)??wt.default.title,u=(n==null?void 0:n.status)??(i==null?void 0:i.status)??wt.default.status,c=(n==null?void 0:n.type)??(i==null?void 0:i.type)??wt.default.type,h=(n==null?void 0:n.priority)??(i==null?void 0:i.priority)??wt.default.priority,p=(n==null?void 0:n.assignedTo)??(i==null?void 0:i.assignedTo)??wt.default.assignedTo,b=(n==null?void 0:n.labels)??(i==null?void 0:i.labels)??wt.default.labels,y=(n==null?void 0:n.stage)??(i==null?void 0:i.stage)??wt.default.stage,g=(n==null?void 0:n.description)??(i==null?void 0:i.description)??wt.default.description,f=i!=null&&i.dueDate?i.dueDate.toISOString().split("T")[0]:null,_=new Set([...l.config.statuses]);u&&_.add(u);const w=new Set([...l.config.types]);c&&w.add(c);const x=new Set([...l.config.priorities]);h&&x.add(h);const A=new Set([...l.config.users]);p&&A.add(p);const C=new Set([...l.config.labels]);if(b)for(const $ of b)C.add($);const O=new Set([...l.config.stages]);y&&O.add(y);const N=En(),k=async()=>{const{value:$}=N;if(!$)return;const z=We($,th);if(i)i.set(z),await a(i);else{const V=l.create(z);await a(V)}},S=En(),B=$=>{const{value:z}=S;if(!z)return;const V=$.target;z.disabled=V.value.trim()===""},Y=`btn-${Z.newRandomId()}`,q=`btn-${Z.newRandomId()}`;return m`
    <div ${W(N)} style="display: flex; flex-direction: column; gap: 0.75rem;">
      <div style="display: flex; gap: 0.375rem">
        <bim-text-input @input=${B} vertical label="Title" name="title" .value=${d}></bim-text-input>
        ${i?m`
            <bim-dropdown vertical label="Status" name="status" required>
              ${[..._].map($=>m`<bim-option label=${$} .checked=${u===$}></bim-option>`)}
            </bim-dropdown>`:m``}
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-dropdown vertical label="Type" name="type" required>
          ${[...w].map($=>m`<bim-option label=${$} .checked=${c===$}></bim-option>`)}
        </bim-dropdown>
        <bim-dropdown vertical label="Priority" name="priority">
          ${[...x].map($=>m`<bim-option label=${$} .checked=${h===$}></bim-option>`)}
        </bim-dropdown>
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-dropdown vertical label="Labels" name="labels" multiple>
          ${[...C].map($=>m`<bim-option label=${$} .checked=${b?[...b].includes($):!1}></bim-option>`)}
        </bim-dropdown>
        <bim-dropdown vertical label="Assignee" name="assignedTo">
          ${[...A].map($=>{const z=r!=null&&r.users?r.users[$]:null,V=z?z.name:$,tt=z==null?void 0:z.picture;return m`<bim-option label=${V} value=${$} .img=${tt} .checked=${p===$}></bim-option>`})}
        </bim-dropdown>
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-text-input vertical type="date" label="Due Date" name="dueDate" .value=${f}></bim-text-input> 
        <bim-dropdown vertical label="Stage" name="stage">
          ${[...O].map($=>m`<bim-option label=${$} .checked=${y===$}></bim-option>`)}
        </bim-dropdown>
      </div>
      <bim-text-input vertical label="Description" name="description" type="area" .value=${g??null}></bim-text-input>
      <div style="justify-content: right; display: flex; gap: 0.375rem">
        <style>
          #${q} {
            background-color: transparent;
          }

          #${q}:hover {
            --bim-label--c: #FF5252;
          }

          #${Y}:hover {
            background-color: #329936;
          }
        </style>
        <bim-button id=${q} style="flex: 0" @click=${o} label="Cancel"></bim-button>
        <bim-button id=${Y} style="flex: 0" @click=${k} ${W(S)} label=${i?"Update Topic":"Add Topic"} icon=${i?"tabler:refresh":"mi:add"}></bim-button>
      </div>
    </div>
  `},eh=e=>{const{components:t,dataStyles:i,onTopicEnter:n}=e,o=t.get(Qe),s=e.topics??o.list.values();return m`
    <bim-table no-indentation ${W(r=>{if(!r)return;const a=r;a.hiddenColumns.length===0&&(a.hiddenColumns=["Guid"]),a.columns=["Title"],a.dataTransform={Title:(l,d)=>{const{Guid:u}=d;if(typeof u!="string")return l;const c=o.list.get(u);if(!c)return l;const h=`btn-${Z.newRandomId()}`;return m`
          <div style="display: flex; overflow: hidden;">
            <style>
              #${h} {
                background-color: transparent
              }

              #${h}:hover {
                --bim-label--c: var(--bim-ui_accent-base)
              }
            </style>
            <bim-button @click=${()=>{n&&n(c)}} id=${h} icon="iconamoon:enter-duotone"></bim-button>
            <bim-label>${l}</bim-label>
          </div>
        `},Priority:l=>{if(typeof l!="string")return l;const d=((i==null?void 0:i.priorities)??J.priorities)[l];return m`
          <bim-label
            .icon=${d==null?void 0:d.icon}
            style=${Bt({...ie,...d==null?void 0:d.style})}
          >${l}
          </bim-label>
        `},Status:l=>{if(typeof l!="string")return l;const d=((i==null?void 0:i.statuses)??J.statuses)[l];return m`
          <bim-label
            .icon=${d==null?void 0:d.icon}
            style=${Bt({...ie,...d==null?void 0:d.style})}
          >${l}
          </bim-label>
        `},Type:l=>{if(typeof l!="string")return l;const d=((i==null?void 0:i.types)??J.types)[l];return m`
          <bim-label
            .icon=${d==null?void 0:d.icon}
            style=${Bt({...ie,...d==null?void 0:d.style})}
          >${l}
          </bim-label>
        `},Author:l=>typeof l!="string"?l:ee(l,(i==null?void 0:i.users)??J.users),Assignee:l=>typeof l!="string"?l:ee(l,(i==null?void 0:i.users)??J.users)},a.data=[...s].map(l=>{var d;return{data:{Guid:l.guid,Title:l.title,Status:l.status,Description:l.description??"",Author:l.creationAuthor,Assignee:l.assignedTo??"",Date:l.creationDate.toDateString(),DueDate:((d=l.dueDate)==null?void 0:d.toDateString())??"",Type:l.type,Priority:l.priority??""}}})})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">There are no topics to display</bim-label>
    </bim-table>
  `},Kr=(e,t=!0)=>{const i=j.create(eh,e);if(t){const{components:n,topics:o}=e,[,s]=i,r=n.get(Qe);if(r.list.onItemUpdated.add(()=>s()),r.list.onItemDeleted.add(()=>s()),o)for(const a of o)a.relatedTopics.onItemAdded.add(()=>s()),a.relatedTopics.onItemDeleted.add(()=>s()),a.relatedTopics.onCleared.add(()=>s());else r.list.onItemSet.add(()=>s())}return i},ih=Object.freeze(Object.defineProperty({__proto__:null,topicsList:Kr},Symbol.toStringTag,{value:"Module"})),nh=e=>{const{topic:t,styles:i,viewpoint:n}=e,o={delete:!0,...e.actions};return m`
    <bim-table no-indentation ${W(s=>{if(!s)return;const r=s;r.headersHidden=!0,r.hiddenColumns=["guid","author"],r.dataTransform={Comment:(l,d)=>{const{guid:u}=d;if(typeof u!="string")return l;const c=t.comments.get(u);if(!c)return l;const h=()=>{t.comments.delete(u)},p=`btn-${Z.newRandomId()}`;return m`
          <div style="display: flex; flex-direction: column; gap: 0.25rem; flex: 1">
            <div style="display: flex; justify-content: space-between;">
              <div style="display: flex; gap: 0.375rem;">
                ${ee(c.author,i??J.users)}
                <bim-label style="color: var(--bim-ui_bg-contrast-40)">@ ${c.date.toDateString()}</bim-label>
              </div>
              <div>
                <style>
                  #${p} {
                    background-color: transparent;
                    --bim-label--c: var(--bim-ui_bg-contrast-60)
                  }

                  #${p}:hover {
                    --bim-label--c: #FF5252;
                  }
                </style>
                ${o!=null&&o.delete?m`<bim-button @click=${h} id=${p} icon="majesticons:delete-bin"></bim-button>`:null}
              </div>
            </div>
            <bim-label style="margin-left: 1.7rem; white-space: normal">${c.comment}</bim-label>
          </div>
        `}};let a=t.comments.values();n&&(a=[...t.comments.values()].filter(l=>l.viewpoint===n)),r.data=[...a].map(l=>({data:{guid:l.guid,Comment:l.comment,author:(()=>{const d=i;if(!d)return l.author;const u=d[l.author];return(u==null?void 0:u.name)??l.author})()}}))})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">This topic has no comments</bim-label>
    </bim-table>
  `},ta=(e,t=!0)=>{const i=j.create(nh,e);if(t){const{topic:n}=e,[o,s]=i;n.comments.onItemSet.add(()=>s()),n.comments.onItemUpdated.add(()=>s()),n.comments.onItemDeleted.add(()=>s()),n.comments.onCleared.add(()=>s())}return i},oh=Object.freeze(Object.defineProperty({__proto__:null,topicComments:ta},Symbol.toStringTag,{value:"Module"})),sh=e=>{var t;const{components:i,topic:n}=e,o={selectComponents:!0,colorizeComponent:!0,resetColors:!0,updateCamera:!0,delete:!0,unlink:!!n,...e.actions},s=i.get(Fi),r=((t=e.topic)==null?void 0:t.viewpoints)??s.list.keys(),a=[];for(const l of r){const d=s.list.get(l);d&&a.push(d)}return m`
    <bim-table no-indentation ${W(l=>{if(!l)return;const d=l;d.addEventListener("cellcreated",({detail:u})=>{const{cell:c}=u;c.style.padding="0.25rem"}),d.headersHidden=!0,d.hiddenColumns=["Guid"],d.columns=["Title",{name:"Actions",width:"auto"}],d.dataTransform={Actions:(u,c)=>{const{Guid:h}=c;if(!(h&&typeof h=="string"))return h||"";const p=s.list.get(h);return p?m`
          <bim-button icon="ph:eye-fill" @click=${()=>p.go()}></bim-button>
          ${Object.values(o).includes(!0)?m`
                <bim-button icon="prime:ellipsis-v">
                  <bim-context-menu>
                    ${o.selectComponents?m`<bim-button label="Select Components" @click=${()=>console.log(p.selection)}></bim-button> `:null}
                    ${o.colorizeComponent?m`<bim-button label="Colorize Components" @click=${()=>p.applyColors()}></bim-button> `:null}
                    ${o.resetColors?m`<bim-button label="Reset Colors" @click=${()=>p.resetColors()}></bim-button> `:null}
                    ${o.updateCamera?m`<bim-button label="Update Camera" @click=${()=>p.updateCamera()}></bim-button> `:null}
                    ${o.unlink?m`<bim-button .disabled=${!n} label="Unlink" @click=${()=>n==null?void 0:n.viewpoints.delete(p.guid)}></bim-button> `:null}
                    ${o.delete?m`<bim-button label="Delete" @click=${()=>s.list.delete(p.guid)}></bim-button>`:null}
                  </bim-context-menu>
                </bim-button>
              `:null}
        `:h}},d.data=a.map((u,c)=>({data:{Guid:u.guid,Title:u.title??`Viewpoint ${e.topic?c+1:""}`,Actions:""}}))})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">No viewpoints to show</bim-label>
    </bim-table>
  `},ea=(e,t=!0)=>{const i=j.create(sh,e),{components:n,topic:o}=e;if(t){const[,s]=i,r=n.get(Fi);r.list.onItemUpdated.add(()=>s()),r.list.onItemDeleted.add(()=>s()),r.list.onCleared.add(()=>s()),o?(o.viewpoints.onItemAdded.add(()=>s()),o.viewpoints.onItemDeleted.add(()=>s()),o.viewpoints.onCleared.add(()=>s())):r.list.onItemSet.add(()=>s())}return i},rh=Object.freeze(Object.defineProperty({__proto__:null,viewpointsList:ea},Symbol.toStringTag,{value:"Module"})),ah={...Jd,...Kd,...iu,...vu,...$u,...Nu,...ih,...oh,...rh},lh=e=>m`
    <bim-panel-section fixed label="New Topic" name="topic">
      ${Zr(e)}
    </bim-panel-section>
  `,ch=e=>j.create(lh,e),dh=Object.freeze(Object.defineProperty({__proto__:null,topic:ch},Symbol.toStringTag,{value:"Module"})),uh={...dh},hh=(e,t)=>{const{components:i,editing:n,topic:o,styles:s}=e,r={update:!0,...e.actions},a=(s==null?void 0:s.priorities)??J.priorities,l=(s==null?void 0:s.statuses)??J.statuses,d=(s==null?void 0:s.types)??J.types;let u;o!=null&&o.priority&&(u=a[o.priority]);let c;o!=null&&o.type&&(c=d[o.type]);let h;o!=null&&o.type&&(h=l[o.status]);let p,b;return n?p=Zr({components:i,topic:o,styles:s,onSubmit:()=>{t({editing:!1})},onCancel:()=>{t({editing:!1})}}):b=m`
      <div>
        <bim-label>Title</bim-label>
        <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${o.title}</bim-label>
      </div>

      ${o.description?m`
            <div>
              <bim-label>Description</bim-label>
              <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100); white-space: normal">${o.description}</bim-label>
            </div>
          `:null}

      <div style="display: flex; gap: 0.375rem">
        <bim-label>Status</bim-label>
        <bim-label .icon=${h==null?void 0:h.icon} style=${Bt({...ie,...h==null?void 0:h.style})}
        >${o.status}
        </bim-label>
      </div>

      <div style="display: flex; gap: 0.375rem">
        <bim-label>Type</bim-label>
        <bim-label .icon=${c==null?void 0:c.icon} style=${Bt({...ie,...c==null?void 0:c.style})}
        >${o.type}
        </bim-label>
      </div>

      ${o.priority?m`
            <div style="display: flex; gap: 0.375rem">
              <bim-label>Priority</bim-label>
              <bim-label .icon=${u==null?void 0:u.icon} style=${Bt({...ie,...u==null?void 0:u.style})}
              >${o.priority}
              </bim-label>
            </div>`:null}

      <div style="display: flex; gap: 0.375rem">
        <bim-label>Author</bim-label>
        ${ee(o.creationAuthor,(s==null?void 0:s.users)??J.users)}
      </div>

      ${o.assignedTo?m`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Assignee</bim-label>
            ${ee(o.assignedTo,(s==null?void 0:s.users)??J.users)}
          </div>`:null}

      ${o.dueDate?m`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Due Date</bim-label>
            <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${o.dueDate.toDateString()}</bim-label>
          </div>`:null}

      ${o.modifiedAuthor?m`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Modified By</bim-label>
            ${ee(o.modifiedAuthor,(s==null?void 0:s.users)??J.users)}
          </div>`:null}

      ${o.modifiedDate?m`
            <div style="display: flex; gap: 0.375rem">
              <bim-label>Modified Date</bim-label>
              <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${o.modifiedDate.toDateString()}</bim-label>
            </div>`:null}

      ${o.labels.size!==0?m`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Labels</bim-label>
            <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${[...o.labels].join(", ")}</bim-label>
          </div>`:null}

      ${r.update?m`
              <bim-button @click=${()=>t({editing:!0})} label="Update Information" icon="tabler:refresh"></bim-button> 
            `:null}
    `,m`
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      ${n?p:b}
    </div>
  `},ph=e=>j.create(hh,e),mh=Object.freeze(Object.defineProperty({__proto__:null,topicInformation:ph},Symbol.toStringTag,{value:"Module"})),fh=(e,t)=>{const{showInput:i,topic:n,styles:o}=e,s={add:!0,delete:!0,...e.actions},r=`input-${Z.newRandomId()}`,a=`btn-${Z.newRandomId()}`,l=`btn-${Z.newRandomId()}`,d=()=>document.getElementById(a),u=()=>document.getElementById(r),c=()=>{const w=u();return w?w.value.trim().length>0:!1},h=()=>{t({showInput:!0})},p=()=>{const w=u(),x=c();w&&x&&(n.createComment(w.value),t({showInput:!1}))},b=()=>{t({showInput:!1})},y=()=>{const w=d();if(w){if(!u()){w.disabled=!0;return}w.disabled=!c()}},g=m`
    ${s.add?m`<bim-button @click=${h} label="Add Comment" icon="majesticons:comment-line"></bim-button>`:null}
  `,f=m`
    <bim-text-input id=${r} @input=${y} @keypress=${w=>{w.code==="Enter"&&w.ctrlKey&&p()}} type="area"></bim-text-input>

    <div style="justify-content: right; display: flex; gap: 0.375rem">
      <style>
        #${a} {
          background-color: #329936;
        }  

        #${l} {
          background-color: transparent;
        }

        #${l}:hover {
          --bim-label--c: #FF5252;
        }
      </style>

      <bim-button style="flex: 0" id=${l} @click=${b} label="Cancel"></bim-button>
      <bim-button style="flex: 0" id=${a} @click=${p} label="Accept" icon="material-symbols:check" disabled></bim-button>
    </div>
  `,[_]=ta({topic:n,actions:s,styles:o??J.users});return m`
    <div style="display: flex; flex-direction: column; gap: 0.5rem">
      ${_}
      ${i?f:g}
    </div>
  `},bh=e=>j.create(fh,e),gh=Object.freeze(Object.defineProperty({__proto__:null,topicComments:bh},Symbol.toStringTag,{value:"Module"})),vh=(e,t)=>{const{components:i,topic:n,linking:o}=e,s=i.get(Qe),r={link:!0,...e.actions},[a,l]=Kr({components:i,topics:[...n.relatedTopics].map(h=>s.list.get(h)).map(h=>h)});a.headersHidden=!0,a.hiddenColumns=["Guid","Status","Description","Author","Assignee","Date","DueDate","Type","Priority"];const d=()=>m`
      <bim-text-input placeholder="Search..." debounce="100" @input=${h=>{const p=h.target;p instanceof rt&&(a.queryString=p.value)}}></bim-text-input> 
    `;let u,c;if(o){a.selectableRows=!0,l({topics:void 0});const h=a.data.filter(f=>{const{Guid:_}=f.data;return typeof _!="string"?!1:n.relatedTopics.has(_)}).map(f=>f.data);a.selection=new Set(h);const p=()=>{const f=[...a.selection].map(({Guid:_})=>typeof _!="string"?null:s.list.has(_)?_:null).map(_=>_);n.relatedTopics.clear(),n.relatedTopics.add(...f),t({linking:!1})},b=()=>{t({linking:!1})},y=`btn-${Z.newRandomId()}`,g=`btn-${Z.newRandomId()}`;u=m`
      <div style="display: flex; gap: 0.25rem">
        <style>
          #${y}:hover {
            background-color: #329936;
          }  

          #${g} {
            background-color: transparent;
          }

          #${g}:hover {
            --bim-label--c: #FF5252;
          }
        </style>
        ${d()}
        <div style="display: flex; justify-content: right; gap: 0.25rem">
          <bim-button id=${g} @click=${b} style="flex: 0" label="Cancel" icon="material-symbols:close"></bim-button>
          <bim-button id=${y} @click=${p} style="flex: 0" label="Accept" icon="material-symbols:check"></bim-button>
        </div>
      </div> 
    `}else{a.selectableRows=!1;const h=()=>{t({linking:!0})};c=m`
      <div style="display: flex; justify-content: right; gap: 0.25rem">
        ${d()}
        ${r.link?m`<bim-button style="flex: 0" @click=${h} icon="tabler:link"></bim-button>`:null}
      </div> 
    `}return m`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      ${c}
      ${u}
      ${a}
    </div> 
  `},yh=e=>j.create(vh,e),_h=Object.freeze(Object.defineProperty({__proto__:null,topicRelations:yh},Symbol.toStringTag,{value:"Module"})),wh=(e,t)=>{const{components:i,topic:n,world:o,linking:s}=e,r={add:!0,link:!0,selectComponents:!0,colorizeComponent:!0,resetColors:!0,updateCamera:!0,delete:!0,unlink:!0,...e.actions},a=i.get(Fi),[l,d]=ea({components:i,topic:n,actions:r}),u=()=>m`
      <bim-text-input placeholder="Search..." debounce="100" @input=${p=>{const b=p.target;b instanceof rt&&(l.queryString=b.value)}}></bim-text-input> 
    `;let c,h;if(s){l.selectableRows=!0,d({topic:void 0,actions:{delete:!1,updateCamera:!1,colorizeComponent:!1,resetColors:!1}});const p=l.data.filter(_=>{const{Guid:w}=_.data;return typeof w!="string"?!1:n.viewpoints.has(w)}).map(_=>_.data);l.selection=new Set(p);const b=()=>{const _=[...l.selection].map(({Guid:w})=>typeof w!="string"?null:a.list.has(w)?w:null).map(w=>w);n.viewpoints.clear(),n.viewpoints.add(..._),t({linking:!1})},y=()=>{t({linking:!1})},g=`btn-${Z.newRandomId()}`,f=`btn-${Z.newRandomId()}`;c=m`
      <div style="display: flex; gap: 0.25rem">
        <style>
          #${g}:hover {
            background-color: #329936;
          }  

          #${f} {
            background-color: transparent;
          }

          #${f}:hover {
            --bim-label--c: #FF5252;
          }
        </style>
        ${u()}
        <div style="display: flex; justify-content: right; gap: 0.25rem">
          <bim-button id=${f} @click=${y} style="flex: 0" label="Cancel" icon="material-symbols:close"></bim-button>
          <bim-button id=${g} @click=${b} style="flex: 0" label="Accept" icon="material-symbols:check"></bim-button>
        </div>
      </div> 
    `}else{l.selectableRows=!1,d({topic:n,actions:r});const p=()=>{if(!(n&&o&&r.add&&!s))return;const f=a.create(o);n.viewpoints.add(f.guid)},b=()=>{t({linking:!0})},y=m`<bim-button style="flex: 0" @click=${p} .disabled=${!o} icon="mi:add"></bim-button>`,g=m`<bim-button style="flex: 0" @click=${b} icon="tabler:link"></bim-button>`;h=m`
      <div style="display: flex; justify-content: right; gap: 0.25rem">
        ${u()}
        <div style="display: flex; justify-content: right; gap: 0.25rem">
          ${r.add?y:null}
          ${r.link?g:null}
        </div>
      </div> 
    `}return m`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      ${h}
      ${c}
      ${l}
    </div> 
  `},xh=e=>j.create(wh,e),$h=Object.freeze(Object.defineProperty({__proto__:null,topicViewpoints:xh},Symbol.toStringTag,{value:"Module"})),vi={...mh,...gh,..._h,...$h};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xi=globalThis,Xn=xi.ShadowRoot&&(xi.ShadyCSS===void 0||xi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Jn=Symbol(),Zo=new WeakMap;let ia=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Jn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Xn&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Zo.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Zo.set(t,e))}return e}toString(){return this.cssText}};const Ch=e=>new ia(typeof e=="string"?e:e+"",void 0,Jn),Qn=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((n,o,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new ia(i,e,Jn)},Ah=(e,t)=>{if(Xn)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const n=document.createElement("style"),o=xi.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=i.cssText,e.appendChild(n)}},Ko=Xn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const n of t.cssRules)i+=n.cssText;return Ch(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Sh,defineProperty:kh,getOwnPropertyDescriptor:Eh,getOwnPropertyNames:Th,getOwnPropertySymbols:Oh,getPrototypeOf:Ph}=Object,me=globalThis,ts=me.trustedTypes,Ih=ts?ts.emptyScript:"",es=me.reactiveElementPolyfillSupport,je=(e,t)=>e,zi={toAttribute(e,t){switch(t){case Boolean:e=e?Ih:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Zn=(e,t)=>!Sh(e,t),is={attribute:!0,type:String,converter:zi,reflect:!1,hasChanged:Zn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),me.litPropertyMetadata??(me.litPropertyMetadata=new WeakMap);class Kt extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=is){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,i);o!==void 0&&kh(this.prototype,t,o)}}static getPropertyDescriptor(t,i,n){const{get:o,set:s}=Eh(this.prototype,t)??{get(){return this[i]},set(r){this[i]=r}};return{get(){return o==null?void 0:o.call(this)},set(r){const a=o==null?void 0:o.call(this);s.call(this,r),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??is}static _$Ei(){if(this.hasOwnProperty(je("elementProperties")))return;const t=Ph(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(je("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(je("properties"))){const i=this.properties,n=[...Th(i),...Oh(i)];for(const o of n)this.createProperty(o,i[o])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[n,o]of i)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[i,n]of this.elementProperties){const o=this._$Eu(i,n);o!==void 0&&this._$Eh.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)i.unshift(Ko(o))}else t!==void 0&&i.push(Ko(t));return i}static _$Eu(t,i){const n=i.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(i=>i(this))}addController(t){var i;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var i;(i=this._$EO)==null||i.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const n of i.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ah(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostConnected)==null?void 0:n.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostDisconnected)==null?void 0:n.call(i)})}attributeChangedCallback(t,i,n){this._$AK(t,n)}_$EC(t,i){var n;const o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(s!==void 0&&o.reflect===!0){const r=(((n=o.converter)==null?void 0:n.toAttribute)!==void 0?o.converter:zi).toAttribute(i,o.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,i){var n;const o=this.constructor,s=o._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const r=o.getPropertyOptions(s),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)==null?void 0:n.fromAttribute)!==void 0?r.converter:zi;this._$Em=s,this[s]=a.fromAttribute(i,r.type),this._$Em=null}}requestUpdate(t,i,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Zn)(this[t],i))return;this.P(t,i,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,i,n){this._$AL.has(t)||this._$AL.set(t,i),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,r]of o)r.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],r)}let i=!1;const n=this._$AL;try{i=this.shouldUpdate(n),i?(this.willUpdate(n),(t=this._$EO)==null||t.forEach(o=>{var s;return(s=o.hostUpdate)==null?void 0:s.call(o)}),this.update(n)):this._$EU()}catch(o){throw i=!1,this._$EU(),o}i&&this._$AE(n)}willUpdate(t){}_$AE(t){var i;(i=this._$EO)==null||i.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(i=>this._$EC(i,this[i]))),this._$EU()}updated(t){}firstUpdated(t){}}Kt.elementStyles=[],Kt.shadowRootOptions={mode:"open"},Kt[je("elementProperties")]=new Map,Kt[je("finalized")]=new Map,es==null||es({ReactiveElement:Kt}),(me.reactiveElementVersions??(me.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ut=class extends Kt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Uu(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return he}};var ns;Ut._$litElement$=!0,Ut.finalized=!0,(ns=globalThis.litElementHydrateSupport)==null||ns.call(globalThis,{LitElement:Ut});const os=globalThis.litElementPolyfillSupport;os==null||os({LitElement:Ut});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nh={attribute:!0,type:String,converter:zi,reflect:!1,hasChanged:Zn},Rh=(e=Nh,t,i)=>{const{kind:n,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(i.name,e),n==="accessor"){const{name:r}=i;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(r,l,e)},init(a){return a!==void 0&&this.P(r,void 0,e),a}}}if(n==="setter"){const{name:r}=i;return function(a){const l=this[r];t.call(this,a),this.requestUpdate(r,l,e)}}throw Error("Unsupported decorator location: "+n)};function G(e){return(t,i)=>typeof i=="object"?Rh(e,t,i):((n,o,s)=>{const r=o.hasOwnProperty(s);return o.constructor.createProperty(s,r?{...n,wrapped:!0}:n),r?Object.getOwnPropertyDescriptor(o,s):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Mh(e){return G({...e,state:!0,attribute:!1})}class zh extends Aa{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Sa(.5,.5),this.addEventListener("removed",function(){this.traverse(function(i){i.element instanceof Element&&i.element.parentNode!==null&&i.element.parentNode.removeChild(i.element)})})}copy(t,i){return super.copy(t,i),this.element=t.element.cloneNode(!0),this.center=t.center,this}}new Tn;new Di;new Di;new Tn;new Tn;class Lh{constructor(t,i){this._group=new io,this._frustum=new fa,this._frustumMat=new Di,this._regenerateDelay=200,this._regenerateCounter=0,this.material=new ba({color:"#2e3338"}),this.numbers=new io,this.maxRegenerateRetrys=4,this.gridsFactor=5,this._scaleX=1,this._scaleY=1,this._offsetX=0,this._offsetY=0,this._camera=t,this._container=i;const n=this.newGrid(-1),o=this.newGrid(-2);this.grids={main:n,secondary:o},this._group.add(o,n,this.numbers)}set scaleX(t){this._scaleX=t,this.regenerate()}get scaleX(){return this._scaleX}set scaleY(t){this._scaleY=t,this.regenerate()}get scaleY(){return this._scaleY}set offsetX(t){this._offsetX=t,this.regenerate()}get offsetX(){return this._offsetX}set offsetY(t){this._offsetY=t,this.regenerate()}get offsetY(){return this._offsetY}get(){return this._group}dispose(){const{main:t,secondary:i}=this.grids;t.removeFromParent(),i.removeFromParent(),t.geometry.dispose(),t.material.dispose(),i.geometry.dispose(),i.material.dispose()}regenerate(){if(!this.isGridReady()){if(this._regenerateCounter++,this._regenerateCounter>this.maxRegenerateRetrys)throw new Error("Grid could not be regenerated");setTimeout(()=>this.regenerate,this._regenerateDelay);return}this._regenerateCounter=0,this._camera.updateMatrix(),this._camera.updateMatrixWorld();const t=this._frustumMat.multiplyMatrices(this._camera.projectionMatrix,this._camera.matrixWorldInverse);this._frustum.setFromProjectionMatrix(t);const{planes:i}=this._frustum,n=i[0].constant*-i[0].normal.x,o=i[1].constant*-i[1].normal.x,s=i[2].constant*-i[2].normal.y,r=i[3].constant*-i[3].normal.y,a=Math.abs(n-o),l=Math.abs(r-s),{clientWidth:d,clientHeight:u}=this._container,c=Math.max(d,u),h=Math.max(a,l)/c,p=Math.ceil(Math.log10(a/this.scaleX)),b=Math.ceil(Math.log10(l/this.scaleY)),y=10**(p-2)*this.scaleX,g=10**(b-2)*this.scaleY,f=y*this.gridsFactor,_=g*this.gridsFactor,w=Math.ceil(l/_),x=Math.ceil(a/f),A=Math.ceil(l/g),C=Math.ceil(a/y),O=y*Math.ceil(o/y),N=g*Math.ceil(s/g),k=f*Math.ceil(o/f),S=_*Math.ceil(s/_),B=[...this.numbers.children];for(const U of B)U.removeFromParent();this.numbers.children=[];const Y=[],q=9*h,$=1e4,z=k+this._offsetX,V=Math.round(Math.abs(z/this.scaleX)*$)/$,tt=(x-1)*f,et=Math.round(Math.abs((z+tt)/this.scaleX)*$)/$,dt=Math.max(V,et).toString().length*q;let Se=Math.ceil(dt/f)*f;for(let U=0;U<x;U++){let D=k+U*f;Y.push(D,r,0,D,s,0),D=Math.round(D*$)/$,Se=Math.round(Se*$)/$;const ke=D%Se;if(!(f<1||_<1)&&Math.abs(ke)>.01)continue;const hi=this.newNumber((D+this._offsetX)/this.scaleX),on=12*h;hi.position.set(D,s+on,0)}for(let U=0;U<w;U++){const D=S+U*_;Y.push(o,D,0,n,D,0);const ke=this.newNumber(D/this.scaleY);let hi=12;ke.element.textContent&&(hi+=4*ke.element.textContent.length);const on=hi*h;ke.position.set(o+on,D,0)}const nn=[];for(let U=0;U<C;U++){const D=O+U*y;nn.push(D,r,0,D,s,0)}for(let U=0;U<A;U++){const D=N+U*g;nn.push(o,D,0,n,D,0)}const da=new no(new Float32Array(Y),3),ua=new no(new Float32Array(nn),3),{main:ha,secondary:pa}=this.grids;ha.geometry.setAttribute("position",da),pa.geometry.setAttribute("position",ua)}newNumber(t){const i=document.createElement("bim-label");i.textContent=String(Math.round(t*100)/100);const n=new zh(i);return this.numbers.add(n),n}newGrid(t){const i=new ga,n=new va(i,this.material);return n.frustumCulled=!1,n.renderOrder=t,n}isGridReady(){const t=this._camera.projectionMatrix.elements;for(let i=0;i<t.length;i++){const n=t[i];if(Number.isNaN(n))return!1}return!0}}var jh=Object.defineProperty,Dh=Object.getOwnPropertyDescriptor,di=(e,t,i,n)=>{for(var o=Dh(t,i),s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&jh(t,i,o),o};const na=class extends Ut{constructor(){super(...arguments),this._grid=null,this._world=null,this.resize=()=>{this._world&&this._grid&&this._grid.regenerate()}}set gridColor(t){if(this._gridColor=t,!(t&&this._grid))return;const i=Number(t.replace("#","0x"));Number.isNaN(i)||this._grid.material.color.setHex(i)}get gridColor(){return this._gridColor}set gridScaleX(t){this._gridScaleX=t,t&&this._grid&&(this._grid.scaleX=t)}get gridScaleX(){return this._gridScaleX}set gridScaleY(t){this._gridScaleY=t,t&&this._grid&&(this._grid.scaleY=t)}get gridScaleY(){return this._gridScaleY}get gridOffsetX(){var t;return((t=this._grid)==null?void 0:t.offsetX)||0}set gridOffsetX(t){this._grid&&(this._grid.offsetX=t)}get gridOffsetY(){var t;return((t=this._grid)==null?void 0:t.offsetY)||0}set gridOffsetY(t){this._grid&&(this._grid.offsetY=t)}set components(t){this.dispose();const i=t.get(Je).create();this._world=i,i.scene=new On(t),i.scene.setup(),i.renderer=new ma(t,this);const n=new ss(t);i.camera=n;const o=new Lh(n.threeOrtho,this);this._grid=o,i.scene.three.add(o.get()),n.controls.addEventListener("update",()=>o.regenerate()),setTimeout(async()=>{i.camera.updateAspect(),n.set("Plan"),await n.controls.setLookAt(0,0,100,0,0,0),await n.projection.set("Orthographic"),n.controls.dollySpeed=3,n.controls.draggingSmoothTime=.085,n.controls.maxZoom=1e3,n.controls.zoom(4)})}get world(){return this._world}dispose(){var t;(t=this.world)==null||t.dispose(),this._world=null,this._grid=null}connectedCallback(){super.connectedCallback(),new ResizeObserver(this.resize).observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.dispose()}render(){return Gn`<slot></slot>`}};na.styles=Qn`
    :host {
      position: relative;
      display: flex;
      min-width: 0px;
      height: 100%;
      background-color: var(--bim-ui_bg-base);
    }
  `;let ui=na;di([G({type:String,attribute:"grid-color",reflect:!0})],ui.prototype,"gridColor");di([G({type:Number,attribute:"grid-scale-x",reflect:!0})],ui.prototype,"gridScaleX");di([G({type:Number,attribute:"grid-scale-y",reflect:!0})],ui.prototype,"gridScaleY");di([G({type:Number,attribute:"grid-offset-x",reflect:!0})],ui.prototype,"gridOffsetX");di([G({type:Number,attribute:"grid-offset-y",reflect:!0})],ui.prototype,"gridOffsetY");var Fh=Object.defineProperty,Rt=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&Fh(t,i,o),o};const oa=class extends Ut{constructor(){super(...arguments),this._defaults={size:60},this._cssMatrix3D="",this._matrix=new Di,this._onRightClick=new Event("rightclick"),this._onLeftClick=new Event("leftclick"),this._onTopClick=new Event("topclick"),this._onBottomClick=new Event("bottomclick"),this._onFrontClick=new Event("frontclick"),this._onBackClick=new Event("backclick"),this._camera=null,this._epsilon=t=>Math.abs(t)<1e-10?0:t}set camera(t){this._camera=t,this.updateOrientation()}get camera(){return this._camera}updateOrientation(){if(!this.camera)return;this._matrix.extractRotation(this.camera.matrixWorldInverse);const{elements:t}=this._matrix;this._cssMatrix3D=`matrix3d(
      ${this._epsilon(t[0])},
      ${this._epsilon(-t[1])},
      ${this._epsilon(t[2])},
      ${this._epsilon(t[3])},
      ${this._epsilon(t[4])},
      ${this._epsilon(-t[5])},
      ${this._epsilon(t[6])},
      ${this._epsilon(t[7])},
      ${this._epsilon(t[8])},
      ${this._epsilon(-t[9])},
      ${this._epsilon(t[10])},
      ${this._epsilon(t[11])},
      ${this._epsilon(t[12])},
      ${this._epsilon(-t[13])},
      ${this._epsilon(t[14])},
      ${this._epsilon(t[15])})
    `}render(){const t=this.size??this._defaults.size;return Gn`
      <style>
        .face,
        .cube {
          width: ${t}px;
          height: ${t}px;
          transform: translateZ(-300px) ${this._cssMatrix3D};
        }

        .face-right {
          translate: ${t/2}px 0 0;
        }

        .face-left {
          translate: ${-t/2}px 0 0;
        }

        .face-top {
          translate: 0 ${t/2}px 0;
        }

        .face-bottom {
          translate: 0 ${-t/2}px 0;
        }

        .face-front {
          translate: 0 0 ${t/2}px;
        }

        .face-back {
          translate: 0 0 ${-t/2}px;
        }
      </style>
      <div class="parent">
        <div class="cube">
          <div
            class="face x-direction face-right"
            @click=${()=>this.dispatchEvent(this._onRightClick)}
          >
            ${this.rightText}
          </div>
          <div
            class="face x-direction face-left"
            @click=${()=>this.dispatchEvent(this._onLeftClick)}
          >
            ${this.leftText}
          </div>
          <div
            class="face y-direction face-top"
            @click=${()=>this.dispatchEvent(this._onTopClick)}
          >
            ${this.topText}
          </div>
          <div
            class="face y-direction face-bottom"
            @click=${()=>this.dispatchEvent(this._onBottomClick)}
          >
            ${this.bottomText}
          </div>
          <div
            class="face z-direction face-front"
            @click=${()=>this.dispatchEvent(this._onFrontClick)}
          >
            ${this.frontText}
          </div>
          <div
            class="face z-direction face-back"
            @click=${()=>this.dispatchEvent(this._onBackClick)}
          >
            ${this.backText}
          </div>
        </div>
      </div>
    `}};oa.styles=Qn`
    :host {
      position: absolute;
      z-index: 999;
      bottom: 1rem;
      right: 1rem;
    }

    .parent {
      perspective: 400px;
    }

    .cube {
      position: relative;
      transform-style: preserve-3d;
    }

    .face {
      position: absolute;
      display: flex;
      justify-content: center;
      user-select: none;
      align-items: center;
      cursor: pointer;
      text-align: center;
      transition: all 0.2s;
      color: var(--bim-view-cube--c, white);
      font-size: var(--bim-view-cube--fz, --bim-ui_size-2xl);
    }

    .x-direction {
      // background-color: var(--bim-view-cube_x--bgc, #c93830DD);
      background-color: var(--bim-view-cube_x--bgc, #01a6bcde);
    }

    .x-direction:hover {
      background-color: var(--bim-ui_accent-base, white);
    }

    .y-direction {
      // background-color: var(--bim-view-cube_y--bgc, #54ff19DD);
      background-color: var(--bim-view-cube_y--bgc, #8d0ec8de);
    }

    .y-direction:hover {
      background-color: var(--bim-ui_accent-base, white);
    }

    .z-direction {
      // background-color: var(--bim-view-cube_z--bgc, #3041c9DD);
      background-color: var(--bim-view-cube_z--bgc, #2718afde);
    }

    .z-direction:hover {
      background-color: var(--bim-ui_accent-base, white);
    }

    .face-front {
      transform: rotateX(180deg);
    }

    .face-back {
      transform: rotateZ(180deg);
    }

    .face-top {
      transform: rotateX(90deg);
    }

    .face-bottom {
      transform: rotateX(270deg);
    }

    .face-right {
      transform: rotateY(-270deg) rotateX(180deg);
    }

    .face-left {
      transform: rotateY(-90deg) rotateX(180deg);
    }
  `;let Mt=oa;Rt([G({type:Number,reflect:!0})],Mt.prototype,"size");Rt([G({type:String,attribute:"right-text",reflect:!0})],Mt.prototype,"rightText");Rt([G({type:String,attribute:"left-text",reflect:!0})],Mt.prototype,"leftText");Rt([G({type:String,attribute:"top-text",reflect:!0})],Mt.prototype,"topText");Rt([G({type:String,attribute:"bottom-text",reflect:!0})],Mt.prototype,"bottomText");Rt([G({type:String,attribute:"front-text",reflect:!0})],Mt.prototype,"frontText");Rt([G({type:String,attribute:"back-text",reflect:!0})],Mt.prototype,"backText");Rt([Mh()],Mt.prototype,"_cssMatrix3D");var Hh=Object.defineProperty,Bh=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&Hh(t,i,o),o};const sa=class extends Ut{constructor(){super(...arguments),this.world=null,this._components=null,this._viewport=En()}set components(t){var i;if(this._components=t,this.components){const n=this.components.get(Je);this.world=n.create(),this.world.name=this.name}else(i=this.world)==null||i.dispose(),this.world=null}get components(){return this._components}connectedCallback(){super.connectedCallback(),this.world&&(this.world.enabled=!0)}disconnectedCallback(){super.disconnectedCallback(),this.world&&(this.world.enabled=!1)}dispose(){this.components=null,this.remove()}firstUpdated(){const{value:t}=this._viewport;if(!(this.components&&t&&this.world))return;const i=new On(this.components);this.world.scene=i,i.setup(),i.three.background=null;const n=new R(this.components,t);this.world.renderer=n;const{postproduction:o}=n,s=new ss(this.components);this.world.camera=s;const r=this.components.get(Pn).create(this.world);r.material.uniforms.uColor.value=new fe(4342338),r.material.uniforms.uSize1.value=2,r.material.uniforms.uSize2.value=8,o.enabled=!0,o.customEffects.excludedMeshes.push(r.three),o.setPasses({custom:!0,ao:!0,gamma:!0}),o.customEffects.lineColor=1513756}onSlotChange(){const t=new Event("slotchange");this.dispatchEvent(t)}render(){return Gn` <bim-viewport ${Ku(this._viewport)}>
      <slot @slotchange=${this.onSlotChange}></slot>
    </bim-viewport>`}};sa.styles=Qn``;let Uh=sa;Bh([G({type:String,reflect:!0})],Uh.prototype,"name");Ra.init();const Kn=document.createElement("bim-viewport"),at=new Ma,Vh=at.get(Je),Qt=Vh.create(),ra=new On(at);ra.setup();Qt.scene=ra;const aa=new za(at,Kn);Qt.renderer=aa;const to=new La(at);Qt.camera=to;to.controls.setLookAt(10,5.5,5,-4,-1,-6.5);Kn.addEventListener("resize",()=>{aa.resize(),to.updateAspect()});at.init();const qh=at.get(Pn);qh.create(Qt);const la=at.get(rs);await la.setup();const Wh=await fetch("https://thatopen.github.io/engine_ui-components/resources/small.ifc"),Yh=await Wh.arrayBuffer(),Gh=new Uint8Array(Yh),Xh=await la.load(Gh);Qt.scene.three.add(Xh);const en={"jhon.doe@example.com":{name:"Jhon Doe",picture:"https://www.profilebakery.com/wp-content/uploads/2023/04/Profile-Image-AI.jpg"},"user_a@something.com":{name:"User A",picture:"https://www.profilebakery.com/wp-content/uploads/2023/04/Portrait-Photography.jpg"},"user_b@something.com":{name:"User B",picture:"https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Portrait.jpg"}},ne=at.get(Qe);ne.setup({users:new Set(Object.keys(en)),labels:new Set(["Architecture","Structure","MEP"])});const Jh=at.get(Fi);ne.list.onItemSet.add(({value:e})=>{const t=Jh.create(Qt);e.viewpoints.add(t.guid)});const[Li,Qh]=ah.topicsList({components:at,dataStyles:{users:en}});Li.selectableRows=!0;const[Zh,Kh]=uh.topic({components:at,styles:{users:en}}),ji=Ze.create(()=>ut`
    <dialog class="form-dialog">
     <bim-panel style="border-radius: var(--bim-ui_size-base); width: 22rem;">
      ${Zh}
     </bim-panel> 
    </dialog>
  `);document.body.append(ji);const tp=Ze.create(()=>ut`
    <bim-button style="flex: 0" @click=${()=>{ji.showModal()}} label="Create Topic" icon="material-symbols:task"></bim-button>
  `);Kh({onCancel:()=>{ji.close()},onSubmit:()=>{ji.close()}});const[ep,ca]=Ze.create(e=>{const{components:t,topic:i,world:n,actions:o,styles:s}=e;let r,a;if(i){const[l]=vi.topicInformation({components:t,topic:i,actions:o==null?void 0:o.information,styles:s}),[d]=vi.topicViewpoints({components:t,topic:i,world:n,actions:o==null?void 0:o.viewpoints}),[u]=vi.topicRelations({components:t,topic:i,actions:o==null?void 0:o.relatedTopics}),[c]=vi.topicComments({topic:i,actions:o==null?void 0:o.comments,styles:s==null?void 0:s.users}),h=()=>{window.alert(`An email will be sent to ${i.assignedTo}! (obviosuly not, this is just for demo purposes)`)};r=ut`
        <bim-panel-section label="Information" icon="ph:info-bold">
          ${l}
        </bim-panel-section>
        <bim-panel-section label="Comments" icon="majesticons:comment-line">
          ${c}
        </bim-panel-section>
        <bim-panel-section label="Viewpoints" icon="tabler:camera">
          ${d}
        </bim-panel-section>
        <bim-panel-section label="Related Topics" icon="tabler:link">
          ${u}
        </bim-panel-section>
        <!-- This is a custom section where you can add any functionality you like -->
        <bim-panel-section label="Communication" icon="tabler:link">
          ${i.assignedTo?ut`
                <bim-button @click=${h} label="Send Mail Reminder" icon="mingcute:send-fill"></bim-button> 
              `:ut`
                <bim-label style="white-space: normal">The topic must have an assignee to use the communication tools. Update the topic with a new assignee!</bim-label>
              `}
        </bim-panel-section>
      `}else a=ut`
        <bim-panel-section label="Missing Topic" icon="material-symbols:chat-error">
          ${i?null:ut`<bim-label>There is no topic to display in this panel!</bim-label>`}
        </bim-panel-section> 
      `;return ut`
      <bim-panel>
        ${a}
        ${r}
      </bim-panel> 
    `},{components:at,world:Qt,styles:{users:en}});ne.list.onItemUpdated.add(()=>ca());Qh({onTopicEnter:e=>{ca({topic:e})}});const ip=Ze.create(()=>ut`<bim-button style="flex: 0" @click=${async()=>{const t=[...Li.selection].map(({Guid:r})=>r&&typeof r=="string"?ne.list.get(r):null).filter(r=>r),i=t.length>0?t:[...ne.list.values()];if(i.length===0)return;const n=await ne.export(i),o=new File([n],"topics.bcf"),s=document.createElement("a");s.href=URL.createObjectURL(o),s.download=o.name,s.click(),URL.revokeObjectURL(s.href)}} label="Download BCF" icon="material-symbols:download"></bim-button> `),np=Ze.create(()=>ut`
    <bim-panel>
      <bim-panel-section label="BCF" fixed>
        <div style="display: flex; justify-content: space-between; gap: 0.5rem">
          <bim-text-input style="flex-grow: 0; flex-basis: 15rem" @input=${t=>{const i=t.target;Li.queryString=i.value}} placeholder="Search a topic..." debounce="100"></bim-text-input>
          <div style="display: flex; gap: 0.5rem">
            ${tp}
            ${ip}
          </div> 
        </div> 
        ${Li}
      </bim-panel-section>
    </bim-panel>
  `),eo=document.createElement("bim-grid");eo.layouts={main:{template:`
    "customTopicPanel viewport"
    "customTopicPanel bcfPanel" 25rem
    /24rem 1fr
    `,mobileTemplate:`
    "viewport" 3fr
    "bcfPanel" 1fr
    "customTopicPanel" 1fr
    / 1fr
    `,elements:{bcfPanel:np,viewport:Kn,customTopicPanel:ep}}};eo.layout="main";document.body.append(eo);
