var Vn=Object.defineProperty;var Wn=(i,t,e)=>t in i?Vn(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var rt=(i,t,e)=>(Wn(i,typeof t!="symbol"?t+"":t,e),e);import{i as C,r as S,n as d,a as It}from"./state-VyZkHw6A.js";import{B as Dt,x as p,E as Qn}from"./lit-html-CuBe1DX_.js";import{e as kt,n as Et}from"./ref-DfidMTJ6.js";const Ot=Math.min,X=Math.max,re=Math.round,ot=i=>({x:i,y:i}),Un={left:"right",right:"left",bottom:"top",top:"bottom"},Yn={start:"end",end:"start"};function $i(i,t,e){return X(i,Ot(t,e))}function Ut(i,t){return typeof i=="function"?i(t):i}function J(i){return i.split("-")[0]}function ve(i){return i.split("-")[1]}function Xi(i){return i==="x"?"y":"x"}function Ji(i){return i==="y"?"height":"width"}function xt(i){return["top","bottom"].includes(J(i))?"y":"x"}function Ki(i){return Xi(xt(i))}function Gn(i,t,e){e===void 0&&(e=!1);const s=ve(i),n=Ki(i),r=Ji(n);let o=n==="x"?s===(e?"end":"start")?"right":"left":s==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(o=oe(o)),[o,oe(o)]}function Xn(i){const t=oe(i);return[Le(i),t,Le(t)]}function Le(i){return i.replace(/start|end/g,t=>Yn[t])}function Jn(i,t,e){const s=["left","right"],n=["right","left"],r=["top","bottom"],o=["bottom","top"];switch(i){case"top":case"bottom":return e?t?n:s:t?s:n;case"left":case"right":return t?r:o;default:return[]}}function Kn(i,t,e,s){const n=ve(i);let r=Jn(J(i),e==="start",s);return n&&(r=r.map(o=>o+"-"+n),t&&(r=r.concat(r.map(Le)))),r}function oe(i){return i.replace(/left|right|bottom|top/g,t=>Un[t])}function Zn(i){return{top:0,right:0,bottom:0,left:0,...i}}function Zi(i){return typeof i!="number"?Zn(i):{top:i,right:i,bottom:i,left:i}}function Pt(i){const{x:t,y:e,width:s,height:n}=i;return{width:s,height:n,top:e,left:t,right:t+s,bottom:e+n,x:t,y:e}}function Si(i,t,e){let{reference:s,floating:n}=i;const r=xt(t),o=Ki(t),a=Ji(o),l=J(t),c=r==="y",u=s.x+s.width/2-n.width/2,h=s.y+s.height/2-n.height/2,f=s[a]/2-n[a]/2;let m;switch(l){case"top":m={x:u,y:s.y-n.height};break;case"bottom":m={x:u,y:s.y+s.height};break;case"right":m={x:s.x+s.width,y:h};break;case"left":m={x:s.x-n.width,y:h};break;default:m={x:s.x,y:s.y}}switch(ve(t)){case"start":m[o]-=f*(e&&c?-1:1);break;case"end":m[o]+=f*(e&&c?-1:1);break}return m}const ts=async(i,t,e)=>{const{placement:s="bottom",strategy:n="absolute",middleware:r=[],platform:o}=e,a=r.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(t));let c=await o.getElementRects({reference:i,floating:t,strategy:n}),{x:u,y:h}=Si(c,s,l),f=s,m={},b=0;for(let v=0;v<a.length;v++){const{name:g,fn:k}=a[v],{x:$,y:w,data:_,reset:O}=await k({x:u,y:h,initialPlacement:s,placement:f,strategy:n,middlewareData:m,rects:c,platform:o,elements:{reference:i,floating:t}});u=$??u,h=w??h,m={...m,[g]:{...m[g],..._}},O&&b<=50&&(b++,typeof O=="object"&&(O.placement&&(f=O.placement),O.rects&&(c=O.rects===!0?await o.getElementRects({reference:i,floating:t,strategy:n}):O.rects),{x:u,y:h}=Si(c,f,l)),v=-1)}return{x:u,y:h,placement:f,strategy:n,middlewareData:m}};async function tn(i,t){var e;t===void 0&&(t={});const{x:s,y:n,platform:r,rects:o,elements:a,strategy:l}=i,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:h="floating",altBoundary:f=!1,padding:m=0}=Ut(t,i),b=Zi(m),g=a[f?h==="floating"?"reference":"floating":h],k=Pt(await r.getClippingRect({element:(e=await(r.isElement==null?void 0:r.isElement(g)))==null||e?g:g.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),$=h==="floating"?{x:s,y:n,width:o.floating.width,height:o.floating.height}:o.reference,w=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),_=await(r.isElement==null?void 0:r.isElement(w))?await(r.getScale==null?void 0:r.getScale(w))||{x:1,y:1}:{x:1,y:1},O=Pt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:$,offsetParent:w,strategy:l}):$);return{top:(k.top-O.top+b.top)/_.y,bottom:(O.bottom-k.bottom+b.bottom)/_.y,left:(k.left-O.left+b.left)/_.x,right:(O.right-k.right+b.right)/_.x}}const es=function(i){return i===void 0&&(i={}),{name:"flip",options:i,async fn(t){var e,s;const{placement:n,middlewareData:r,rects:o,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:h=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:v=!0,...g}=Ut(i,t);if((e=r.arrow)!=null&&e.alignmentOffset)return{};const k=J(n),$=xt(a),w=J(a)===a,_=await(l.isRTL==null?void 0:l.isRTL(c.floating)),O=f||(w||!v?[oe(a)]:Xn(a)),x=b!=="none";!f&&x&&O.push(...Kn(a,v,b,_));const T=[a,...O],H=await tn(t,g),D=[];let E=((s=r.flip)==null?void 0:s.overflows)||[];if(u&&D.push(H[k]),h){const W=Gn(n,o,_);D.push(H[W[0]],H[W[1]])}if(E=[...E,{placement:n,overflows:D}],!D.every(W=>W<=0)){var _t,jt;const W=(((_t=r.flip)==null?void 0:_t.index)||0)+1,$t=T[W];if($t)return{data:{index:W,overflows:E},reset:{placement:$t}};let it=(jt=E.filter(nt=>nt.overflows[0]<=0).sort((nt,Q)=>nt.overflows[1]-Q.overflows[1])[0])==null?void 0:jt.placement;if(!it)switch(m){case"bestFit":{var Ct;const nt=(Ct=E.filter(Q=>{if(x){const st=xt(Q.placement);return st===$||st==="y"}return!0}).map(Q=>[Q.placement,Q.overflows.filter(st=>st>0).reduce((st,qn)=>st+qn,0)]).sort((Q,st)=>Q[1]-st[1])[0])==null?void 0:Ct[0];nt&&(it=nt);break}case"initialPlacement":it=a;break}if(n!==it)return{reset:{placement:it}}}return{}}}};function en(i){const t=Ot(...i.map(r=>r.left)),e=Ot(...i.map(r=>r.top)),s=X(...i.map(r=>r.right)),n=X(...i.map(r=>r.bottom));return{x:t,y:e,width:s-t,height:n-e}}function is(i){const t=i.slice().sort((n,r)=>n.y-r.y),e=[];let s=null;for(let n=0;n<t.length;n++){const r=t[n];!s||r.y-s.y>s.height/2?e.push([r]):e[e.length-1].push(r),s=r}return e.map(n=>Pt(en(n)))}const ns=function(i){return i===void 0&&(i={}),{name:"inline",options:i,async fn(t){const{placement:e,elements:s,rects:n,platform:r,strategy:o}=t,{padding:a=2,x:l,y:c}=Ut(i,t),u=Array.from(await(r.getClientRects==null?void 0:r.getClientRects(s.reference))||[]),h=is(u),f=Pt(en(u)),m=Zi(a);function b(){if(h.length===2&&h[0].left>h[1].right&&l!=null&&c!=null)return h.find(g=>l>g.left-m.left&&l<g.right+m.right&&c>g.top-m.top&&c<g.bottom+m.bottom)||f;if(h.length>=2){if(xt(e)==="y"){const E=h[0],_t=h[h.length-1],jt=J(e)==="top",Ct=E.top,W=_t.bottom,$t=jt?E.left:_t.left,it=jt?E.right:_t.right,nt=it-$t,Q=W-Ct;return{top:Ct,bottom:W,left:$t,right:it,width:nt,height:Q,x:$t,y:Ct}}const g=J(e)==="left",k=X(...h.map(E=>E.right)),$=Ot(...h.map(E=>E.left)),w=h.filter(E=>g?E.left===$:E.right===k),_=w[0].top,O=w[w.length-1].bottom,x=$,T=k,H=T-x,D=O-_;return{top:_,bottom:O,left:x,right:T,width:H,height:D,x,y:_}}return f}const v=await r.getElementRects({reference:{getBoundingClientRect:b},floating:s.floating,strategy:o});return n.reference.x!==v.reference.x||n.reference.y!==v.reference.y||n.reference.width!==v.reference.width||n.reference.height!==v.reference.height?{reset:{rects:v}}:{}}}};async function ss(i,t){const{placement:e,platform:s,elements:n}=i,r=await(s.isRTL==null?void 0:s.isRTL(n.floating)),o=J(e),a=ve(e),l=xt(e)==="y",c=["left","top"].includes(o)?-1:1,u=r&&l?-1:1,h=Ut(t,i);let{mainAxis:f,crossAxis:m,alignmentAxis:b}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return a&&typeof b=="number"&&(m=a==="end"?b*-1:b),l?{x:m*u,y:f*c}:{x:f*c,y:m*u}}const nn=function(i){return{name:"offset",options:i,async fn(t){var e,s;const{x:n,y:r,placement:o,middlewareData:a}=t,l=await ss(t,i);return o===((e=a.offset)==null?void 0:e.placement)&&(s=a.arrow)!=null&&s.alignmentOffset?{}:{x:n+l.x,y:r+l.y,data:{...l,placement:o}}}}},rs=function(i){return i===void 0&&(i={}),{name:"shift",options:i,async fn(t){const{x:e,y:s,placement:n}=t,{mainAxis:r=!0,crossAxis:o=!1,limiter:a={fn:g=>{let{x:k,y:$}=g;return{x:k,y:$}}},...l}=Ut(i,t),c={x:e,y:s},u=await tn(t,l),h=xt(J(n)),f=Xi(h);let m=c[f],b=c[h];if(r){const g=f==="y"?"top":"left",k=f==="y"?"bottom":"right",$=m+u[g],w=m-u[k];m=$i($,m,w)}if(o){const g=h==="y"?"top":"left",k=h==="y"?"bottom":"right",$=b+u[g],w=b-u[k];b=$i($,b,w)}const v=a.fn({...t,[f]:m,[h]:b});return{...v,data:{x:v.x-e,y:v.y-s,enabled:{[f]:r,[h]:o}}}}}};function ye(){return typeof window<"u"}function at(i){return sn(i)?(i.nodeName||"").toLowerCase():"#document"}function R(i){var t;return(i==null||(t=i.ownerDocument)==null?void 0:t.defaultView)||window}function pt(i){var t;return(t=(sn(i)?i.ownerDocument:i.document)||window.document)==null?void 0:t.documentElement}function sn(i){return ye()?i instanceof Node||i instanceof R(i).Node:!1}function U(i){return ye()?i instanceof Element||i instanceof R(i).Element:!1}function Y(i){return ye()?i instanceof HTMLElement||i instanceof R(i).HTMLElement:!1}function ki(i){return!ye()||typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof R(i).ShadowRoot}function Yt(i){const{overflow:t,overflowX:e,overflowY:s,display:n}=B(i);return/auto|scroll|overlay|hidden|clip/.test(t+s+e)&&!["inline","contents"].includes(n)}function os(i){return["table","td","th"].includes(at(i))}function as(i){return[":popover-open",":modal"].some(t=>{try{return i.matches(t)}catch{return!1}})}function We(i){const t=Qe(),e=U(i)?B(i):i;return["transform","translate","scale","rotate","perspective"].some(s=>e[s]?e[s]!=="none":!1)||(e.containerType?e.containerType!=="normal":!1)||!t&&(e.backdropFilter?e.backdropFilter!=="none":!1)||!t&&(e.filter?e.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(s=>(e.willChange||"").includes(s))||["paint","layout","strict","content"].some(s=>(e.contain||"").includes(s))}function ls(i){let t=At(i);for(;Y(t)&&!xe(t);){if(We(t))return t;if(as(t))return null;t=At(t)}return null}function Qe(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function xe(i){return["html","body","#document"].includes(at(i))}function B(i){return R(i).getComputedStyle(i)}function we(i){return U(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.scrollX,scrollTop:i.scrollY}}function At(i){if(at(i)==="html")return i;const t=i.assignedSlot||i.parentNode||ki(i)&&i.host||pt(i);return ki(t)?t.host:t}function rn(i){const t=At(i);return xe(t)?i.ownerDocument?i.ownerDocument.body:i.body:Y(t)&&Yt(t)?t:rn(t)}function on(i,t,e){var s;t===void 0&&(t=[]);const n=rn(i),r=n===((s=i.ownerDocument)==null?void 0:s.body),o=R(n);return r?(cs(o),t.concat(o,o.visualViewport||[],Yt(n)?n:[],[])):t.concat(n,on(n,[]))}function cs(i){return i.parent&&Object.getPrototypeOf(i.parent)?i.frameElement:null}function an(i){const t=B(i);let e=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const n=Y(i),r=n?i.offsetWidth:e,o=n?i.offsetHeight:s,a=re(e)!==r||re(s)!==o;return a&&(e=r,s=o),{width:e,height:s,$:a}}function ln(i){return U(i)?i:i.contextElement}function St(i){const t=ln(i);if(!Y(t))return ot(1);const e=t.getBoundingClientRect(),{width:s,height:n,$:r}=an(t);let o=(r?re(e.width):e.width)/s,a=(r?re(e.height):e.height)/n;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const us=ot(0);function cn(i){const t=R(i);return!Qe()||!t.visualViewport?us:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ds(i,t,e){return t===void 0&&(t=!1),!e||t&&e!==R(i)?!1:t}function Nt(i,t,e,s){t===void 0&&(t=!1),e===void 0&&(e=!1);const n=i.getBoundingClientRect(),r=ln(i);let o=ot(1);t&&(s?U(s)&&(o=St(s)):o=St(i));const a=ds(r,e,s)?cn(r):ot(0);let l=(n.left+a.x)/o.x,c=(n.top+a.y)/o.y,u=n.width/o.x,h=n.height/o.y;if(r){const f=R(r),m=s&&U(s)?R(s):s;let b=f,v=b.frameElement;for(;v&&s&&m!==b;){const g=St(v),k=v.getBoundingClientRect(),$=B(v),w=k.left+(v.clientLeft+parseFloat($.paddingLeft))*g.x,_=k.top+(v.clientTop+parseFloat($.paddingTop))*g.y;l*=g.x,c*=g.y,u*=g.x,h*=g.y,l+=w,c+=_,b=R(v),v=b.frameElement}}return Pt({width:u,height:h,x:l,y:c})}const hs=[":popover-open",":modal"];function un(i){return hs.some(t=>{try{return i.matches(t)}catch{return!1}})}function fs(i){let{elements:t,rect:e,offsetParent:s,strategy:n}=i;const r=n==="fixed",o=pt(s),a=t?un(t.floating):!1;if(s===o||a&&r)return e;let l={scrollLeft:0,scrollTop:0},c=ot(1);const u=ot(0),h=Y(s);if((h||!h&&!r)&&((at(s)!=="body"||Yt(o))&&(l=we(s)),Y(s))){const f=Nt(s);c=St(s),u.x=f.x+s.clientLeft,u.y=f.y+s.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-l.scrollLeft*c.x+u.x,y:e.y*c.y-l.scrollTop*c.y+u.y}}function ps(i){return Array.from(i.getClientRects())}function dn(i){return Nt(pt(i)).left+we(i).scrollLeft}function ms(i){const t=pt(i),e=we(i),s=i.ownerDocument.body,n=X(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),r=X(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight);let o=-e.scrollLeft+dn(i);const a=-e.scrollTop;return B(s).direction==="rtl"&&(o+=X(t.clientWidth,s.clientWidth)-n),{width:n,height:r,x:o,y:a}}function bs(i,t){const e=R(i),s=pt(i),n=e.visualViewport;let r=s.clientWidth,o=s.clientHeight,a=0,l=0;if(n){r=n.width,o=n.height;const c=Qe();(!c||c&&t==="fixed")&&(a=n.offsetLeft,l=n.offsetTop)}return{width:r,height:o,x:a,y:l}}function gs(i,t){const e=Nt(i,!0,t==="fixed"),s=e.top+i.clientTop,n=e.left+i.clientLeft,r=Y(i)?St(i):ot(1),o=i.clientWidth*r.x,a=i.clientHeight*r.y,l=n*r.x,c=s*r.y;return{width:o,height:a,x:l,y:c}}function Ei(i,t,e){let s;if(t==="viewport")s=bs(i,e);else if(t==="document")s=ms(pt(i));else if(U(t))s=gs(t,e);else{const n=cn(i);s={...t,x:t.x-n.x,y:t.y-n.y}}return Pt(s)}function hn(i,t){const e=At(i);return e===t||!U(e)||xe(e)?!1:B(e).position==="fixed"||hn(e,t)}function vs(i,t){const e=t.get(i);if(e)return e;let s=on(i,[]).filter(a=>U(a)&&at(a)!=="body"),n=null;const r=B(i).position==="fixed";let o=r?At(i):i;for(;U(o)&&!xe(o);){const a=B(o),l=We(o);!l&&a.position==="fixed"&&(n=null),(r?!l&&!n:!l&&a.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||Yt(o)&&!l&&hn(i,o))?s=s.filter(u=>u!==o):n=a,o=At(o)}return t.set(i,s),s}function ys(i){let{element:t,boundary:e,rootBoundary:s,strategy:n}=i;const o=[...e==="clippingAncestors"?vs(t,this._c):[].concat(e),s],a=o[0],l=o.reduce((c,u)=>{const h=Ei(t,u,n);return c.top=X(h.top,c.top),c.right=Ot(h.right,c.right),c.bottom=Ot(h.bottom,c.bottom),c.left=X(h.left,c.left),c},Ei(t,a,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function xs(i){const{width:t,height:e}=an(i);return{width:t,height:e}}function ws(i,t,e){const s=Y(t),n=pt(t),r=e==="fixed",o=Nt(i,!0,r,t);let a={scrollLeft:0,scrollTop:0};const l=ot(0);if(s||!s&&!r)if((at(t)!=="body"||Yt(n))&&(a=we(t)),s){const h=Nt(t,!0,r,t);l.x=h.x+t.clientLeft,l.y=h.y+t.clientTop}else n&&(l.x=dn(n));const c=o.left+a.scrollLeft-l.x,u=o.top+a.scrollTop-l.y;return{x:c,y:u,width:o.width,height:o.height}}function Oi(i,t){return!Y(i)||B(i).position==="fixed"?null:t?t(i):i.offsetParent}function fn(i,t){const e=R(i);if(!Y(i)||un(i))return e;let s=Oi(i,t);for(;s&&os(s)&&B(s).position==="static";)s=Oi(s,t);return s&&(at(s)==="html"||at(s)==="body"&&B(s).position==="static"&&!We(s))?e:s||ls(i)||e}const _s=async function(i){const t=this.getOffsetParent||fn,e=this.getDimensions;return{reference:ws(i.reference,await t(i.floating),i.strategy),floating:{x:0,y:0,...await e(i.floating)}}};function Cs(i){return B(i).direction==="rtl"}const $s={convertOffsetParentRelativeRectToViewportRelativeRect:fs,getDocumentElement:pt,getClippingRect:ys,getOffsetParent:fn,getElementRects:_s,getClientRects:ps,getDimensions:xs,getScale:St,isElement:U,isRTL:Cs},pn=rs,mn=es,bn=ns,gn=(i,t,e)=>{const s=new Map,n={platform:$s,...e},r={...n.platform,_c:s};return ts(i,t,{...n,platform:r})};/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.0.0
*/const vn=Object.freeze({left:0,top:0,width:16,height:16}),ae=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Gt=Object.freeze({...vn,...ae}),Ie=Object.freeze({...Gt,body:"",hidden:!1}),Ss=Object.freeze({width:null,height:null}),yn=Object.freeze({...Ss,...ae});function ks(i,t=0){const e=i.replace(/^-?[0-9.]*/,"");function s(n){for(;n<0;)n+=4;return n%4}if(e===""){const n=parseInt(i);return isNaN(n)?0:s(n)}else if(e!==i){let n=0;switch(e){case"%":n=25;break;case"deg":n=90}if(n){let r=parseFloat(i.slice(0,i.length-e.length));return isNaN(r)?0:(r=r/n,r%1===0?s(r):0)}}return t}const Es=/[\s,]+/;function Os(i,t){t.split(Es).forEach(e=>{switch(e.trim()){case"horizontal":i.hFlip=!0;break;case"vertical":i.vFlip=!0;break}})}const xn={...yn,preserveAspectRatio:""};function Pi(i){const t={...xn},e=(s,n)=>i.getAttribute(s)||n;return t.width=e("width",null),t.height=e("height",null),t.rotate=ks(e("rotate","")),Os(t,e("flip","")),t.preserveAspectRatio=e("preserveAspectRatio",e("preserveaspectratio","")),t}function Ps(i,t){for(const e in xn)if(i[e]!==t[e])return!0;return!1}const Mt=/^[a-z0-9]+(-[a-z0-9]+)*$/,Xt=(i,t,e,s="")=>{const n=i.split(":");if(i.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;s=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const a=n.pop(),l=n.pop(),c={provider:n.length>0?n[0]:s,prefix:l,name:a};return t&&!ne(c)?null:c}const r=n[0],o=r.split("-");if(o.length>1){const a={provider:s,prefix:o.shift(),name:o.join("-")};return t&&!ne(a)?null:a}if(e&&s===""){const a={provider:s,prefix:"",name:r};return t&&!ne(a,e)?null:a}return null},ne=(i,t)=>i?!!((i.provider===""||i.provider.match(Mt))&&(t&&i.prefix===""||i.prefix.match(Mt))&&i.name.match(Mt)):!1;function As(i,t){const e={};!i.hFlip!=!t.hFlip&&(e.hFlip=!0),!i.vFlip!=!t.vFlip&&(e.vFlip=!0);const s=((i.rotate||0)+(t.rotate||0))%4;return s&&(e.rotate=s),e}function Ai(i,t){const e=As(i,t);for(const s in Ie)s in ae?s in i&&!(s in e)&&(e[s]=ae[s]):s in t?e[s]=t[s]:s in i&&(e[s]=i[s]);return e}function Ts(i,t){const e=i.icons,s=i.aliases||Object.create(null),n=Object.create(null);function r(o){if(e[o])return n[o]=[];if(!(o in n)){n[o]=null;const a=s[o]&&s[o].parent,l=a&&r(a);l&&(n[o]=[a].concat(l))}return n[o]}return Object.keys(e).concat(Object.keys(s)).forEach(r),n}function Ls(i,t,e){const s=i.icons,n=i.aliases||Object.create(null);let r={};function o(a){r=Ai(s[a]||n[a],r)}return o(t),e.forEach(o),Ai(i,r)}function wn(i,t){const e=[];if(typeof i!="object"||typeof i.icons!="object")return e;i.not_found instanceof Array&&i.not_found.forEach(n=>{t(n,null),e.push(n)});const s=Ts(i);for(const n in s){const r=s[n];r&&(t(n,Ls(i,n,r)),e.push(n))}return e}const Is={provider:"",aliases:{},not_found:{},...vn};function Oe(i,t){for(const e in t)if(e in i&&typeof i[e]!=typeof t[e])return!1;return!0}function _n(i){if(typeof i!="object"||i===null)return null;const t=i;if(typeof t.prefix!="string"||!i.icons||typeof i.icons!="object"||!Oe(i,Is))return null;const e=t.icons;for(const n in e){const r=e[n];if(!n.match(Mt)||typeof r.body!="string"||!Oe(r,Ie))return null}const s=t.aliases||Object.create(null);for(const n in s){const r=s[n],o=r.parent;if(!n.match(Mt)||typeof o!="string"||!e[o]&&!s[o]||!Oe(r,Ie))return null}return t}const le=Object.create(null);function zs(i,t){return{provider:i,prefix:t,icons:Object.create(null),missing:new Set}}function lt(i,t){const e=le[i]||(le[i]=Object.create(null));return e[t]||(e[t]=zs(i,t))}function Ue(i,t){return _n(t)?wn(t,(e,s)=>{s?i.icons[e]=s:i.missing.add(e)}):[]}function Rs(i,t,e){try{if(typeof e.body=="string")return i.icons[t]={...e},!0}catch{}return!1}function Bs(i,t){let e=[];return(typeof i=="string"?[i]:Object.keys(le)).forEach(n=>{(typeof n=="string"&&typeof t=="string"?[t]:Object.keys(le[n]||{})).forEach(o=>{const a=lt(n,o);e=e.concat(Object.keys(a.icons).map(l=>(n!==""?"@"+n+":":"")+o+":"+l))})}),e}let qt=!1;function Cn(i){return typeof i=="boolean"&&(qt=i),qt}function Vt(i){const t=typeof i=="string"?Xt(i,!0,qt):i;if(t){const e=lt(t.provider,t.prefix),s=t.name;return e.icons[s]||(e.missing.has(s)?null:void 0)}}function $n(i,t){const e=Xt(i,!0,qt);if(!e)return!1;const s=lt(e.provider,e.prefix);return Rs(s,e.name,t)}function Ti(i,t){if(typeof i!="object")return!1;if(typeof t!="string"&&(t=i.provider||""),qt&&!t&&!i.prefix){let n=!1;return _n(i)&&(i.prefix="",wn(i,(r,o)=>{o&&$n(r,o)&&(n=!0)})),n}const e=i.prefix;if(!ne({provider:t,prefix:e,name:"a"}))return!1;const s=lt(t,e);return!!Ue(s,i)}function Li(i){return!!Vt(i)}function js(i){const t=Vt(i);return t?{...Gt,...t}:null}function Fs(i){const t={loaded:[],missing:[],pending:[]},e=Object.create(null);i.sort((n,r)=>n.provider!==r.provider?n.provider.localeCompare(r.provider):n.prefix!==r.prefix?n.prefix.localeCompare(r.prefix):n.name.localeCompare(r.name));let s={provider:"",prefix:"",name:""};return i.forEach(n=>{if(s.name===n.name&&s.prefix===n.prefix&&s.provider===n.provider)return;s=n;const r=n.provider,o=n.prefix,a=n.name,l=e[r]||(e[r]=Object.create(null)),c=l[o]||(l[o]=lt(r,o));let u;a in c.icons?u=t.loaded:o===""||c.missing.has(a)?u=t.missing:u=t.pending;const h={provider:r,prefix:o,name:a};u.push(h)}),t}function Sn(i,t){i.forEach(e=>{const s=e.loaderCallbacks;s&&(e.loaderCallbacks=s.filter(n=>n.id!==t))})}function Ms(i){i.pendingCallbacksFlag||(i.pendingCallbacksFlag=!0,setTimeout(()=>{i.pendingCallbacksFlag=!1;const t=i.loaderCallbacks?i.loaderCallbacks.slice(0):[];if(!t.length)return;let e=!1;const s=i.provider,n=i.prefix;t.forEach(r=>{const o=r.icons,a=o.pending.length;o.pending=o.pending.filter(l=>{if(l.prefix!==n)return!0;const c=l.name;if(i.icons[c])o.loaded.push({provider:s,prefix:n,name:c});else if(i.missing.has(c))o.missing.push({provider:s,prefix:n,name:c});else return e=!0,!0;return!1}),o.pending.length!==a&&(e||Sn([i],r.id),r.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),r.abort))})}))}let Hs=0;function Ds(i,t,e){const s=Hs++,n=Sn.bind(null,e,s);if(!t.pending.length)return n;const r={id:s,icons:t,callback:i,abort:n};return e.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(r)}),n}const ze=Object.create(null);function Ii(i,t){ze[i]=t}function Re(i){return ze[i]||ze[""]}function Ns(i,t=!0,e=!1){const s=[];return i.forEach(n=>{const r=typeof n=="string"?Xt(n,t,e):n;r&&s.push(r)}),s}var qs={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Vs(i,t,e,s){const n=i.resources.length,r=i.random?Math.floor(Math.random()*n):i.index;let o;if(i.random){let x=i.resources.slice(0);for(o=[];x.length>1;){const T=Math.floor(Math.random()*x.length);o.push(x[T]),x=x.slice(0,T).concat(x.slice(T+1))}o=o.concat(x)}else o=i.resources.slice(r).concat(i.resources.slice(0,r));const a=Date.now();let l="pending",c=0,u,h=null,f=[],m=[];typeof s=="function"&&m.push(s);function b(){h&&(clearTimeout(h),h=null)}function v(){l==="pending"&&(l="aborted"),b(),f.forEach(x=>{x.status==="pending"&&(x.status="aborted")}),f=[]}function g(x,T){T&&(m=[]),typeof x=="function"&&m.push(x)}function k(){return{startTime:a,payload:t,status:l,queriesSent:c,queriesPending:f.length,subscribe:g,abort:v}}function $(){l="failed",m.forEach(x=>{x(void 0,u)})}function w(){f.forEach(x=>{x.status==="pending"&&(x.status="aborted")}),f=[]}function _(x,T,H){const D=T!=="success";switch(f=f.filter(E=>E!==x),l){case"pending":break;case"failed":if(D||!i.dataAfterTimeout)return;break;default:return}if(T==="abort"){u=H,$();return}if(D){u=H,f.length||(o.length?O():$());return}if(b(),w(),!i.random){const E=i.resources.indexOf(x.resource);E!==-1&&E!==i.index&&(i.index=E)}l="completed",m.forEach(E=>{E(H)})}function O(){if(l!=="pending")return;b();const x=o.shift();if(x===void 0){if(f.length){h=setTimeout(()=>{b(),l==="pending"&&(w(),$())},i.timeout);return}$();return}const T={status:"pending",resource:x,callback:(H,D)=>{_(T,H,D)}};f.push(T),c++,h=setTimeout(O,i.rotate),e(x,t,T.callback)}return setTimeout(O),k}function kn(i){const t={...qs,...i};let e=[];function s(){e=e.filter(a=>a().status==="pending")}function n(a,l,c){const u=Vs(t,a,l,(h,f)=>{s(),c&&c(h,f)});return e.push(u),u}function r(a){return e.find(l=>a(l))||null}return{query:n,find:r,setIndex:a=>{t.index=a},getIndex:()=>t.index,cleanup:s}}function Ye(i){let t;if(typeof i.resources=="string")t=[i.resources];else if(t=i.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:i.path||"/",maxURL:i.maxURL||500,rotate:i.rotate||750,timeout:i.timeout||5e3,random:i.random===!0,index:i.index||0,dataAfterTimeout:i.dataAfterTimeout!==!1}}const _e=Object.create(null),Ft=["https://api.simplesvg.com","https://api.unisvg.com"],se=[];for(;Ft.length>0;)Ft.length===1||Math.random()>.5?se.push(Ft.shift()):se.push(Ft.pop());_e[""]=Ye({resources:["https://api.iconify.design"].concat(se)});function zi(i,t){const e=Ye(t);return e===null?!1:(_e[i]=e,!0)}function Ce(i){return _e[i]}function Ws(){return Object.keys(_e)}function Ri(){}const Pe=Object.create(null);function Qs(i){if(!Pe[i]){const t=Ce(i);if(!t)return;const e=kn(t),s={config:t,redundancy:e};Pe[i]=s}return Pe[i]}function En(i,t,e){let s,n;if(typeof i=="string"){const r=Re(i);if(!r)return e(void 0,424),Ri;n=r.send;const o=Qs(i);o&&(s=o.redundancy)}else{const r=Ye(i);if(r){s=kn(r);const o=i.resources?i.resources[0]:"",a=Re(o);a&&(n=a.send)}}return!s||!n?(e(void 0,424),Ri):s.query(t,n,e)().abort}const Bi="iconify2",Wt="iconify",On=Wt+"-count",ji=Wt+"-version",Pn=36e5,Us=168,Ys=50;function Be(i,t){try{return i.getItem(t)}catch{}}function Ge(i,t,e){try{return i.setItem(t,e),!0}catch{}}function Fi(i,t){try{i.removeItem(t)}catch{}}function je(i,t){return Ge(i,On,t.toString())}function Fe(i){return parseInt(Be(i,On))||0}const vt={local:!0,session:!0},An={local:new Set,session:new Set};let Xe=!1;function Gs(i){Xe=i}let ie=typeof window>"u"?{}:window;function Tn(i){const t=i+"Storage";try{if(ie&&ie[t]&&typeof ie[t].length=="number")return ie[t]}catch{}vt[i]=!1}function Ln(i,t){const e=Tn(i);if(!e)return;const s=Be(e,ji);if(s!==Bi){if(s){const a=Fe(e);for(let l=0;l<a;l++)Fi(e,Wt+l.toString())}Ge(e,ji,Bi),je(e,0);return}const n=Math.floor(Date.now()/Pn)-Us,r=a=>{const l=Wt+a.toString(),c=Be(e,l);if(typeof c=="string"){try{const u=JSON.parse(c);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>n&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&t(u,a))return!0}catch{}Fi(e,l)}};let o=Fe(e);for(let a=o-1;a>=0;a--)r(a)||(a===o-1?(o--,je(e,o)):An[i].add(a))}function In(){if(!Xe){Gs(!0);for(const i in vt)Ln(i,t=>{const e=t.data,s=t.provider,n=e.prefix,r=lt(s,n);if(!Ue(r,e).length)return!1;const o=e.lastModified||-1;return r.lastModifiedCached=r.lastModifiedCached?Math.min(r.lastModifiedCached,o):o,!0})}}function Xs(i,t){const e=i.lastModifiedCached;if(e&&e>=t)return e===t;if(i.lastModifiedCached=t,e)for(const s in vt)Ln(s,n=>{const r=n.data;return n.provider!==i.provider||r.prefix!==i.prefix||r.lastModified===t});return!0}function Js(i,t){Xe||In();function e(s){let n;if(!vt[s]||!(n=Tn(s)))return;const r=An[s];let o;if(r.size)r.delete(o=Array.from(r).shift());else if(o=Fe(n),o>=Ys||!je(n,o+1))return;const a={cached:Math.floor(Date.now()/Pn),provider:i.provider,data:t};return Ge(n,Wt+o.toString(),JSON.stringify(a))}t.lastModified&&!Xs(i,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),e("local")||e("session"))}function Mi(){}function Ks(i){i.iconsLoaderFlag||(i.iconsLoaderFlag=!0,setTimeout(()=>{i.iconsLoaderFlag=!1,Ms(i)}))}function Zs(i,t){i.iconsToLoad?i.iconsToLoad=i.iconsToLoad.concat(t).sort():i.iconsToLoad=t,i.iconsQueueFlag||(i.iconsQueueFlag=!0,setTimeout(()=>{i.iconsQueueFlag=!1;const{provider:e,prefix:s}=i,n=i.iconsToLoad;delete i.iconsToLoad;let r;if(!n||!(r=Re(e)))return;r.prepare(e,s,n).forEach(a=>{En(e,a,l=>{if(typeof l!="object")a.icons.forEach(c=>{i.missing.add(c)});else try{const c=Ue(i,l);if(!c.length)return;const u=i.pendingIcons;u&&c.forEach(h=>{u.delete(h)}),Js(i,l)}catch(c){console.error(c)}Ks(i)})})}))}const Je=(i,t)=>{const e=Ns(i,!0,Cn()),s=Fs(e);if(!s.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(s.loaded,s.missing,s.pending,Mi)}),()=>{l=!1}}const n=Object.create(null),r=[];let o,a;return s.pending.forEach(l=>{const{provider:c,prefix:u}=l;if(u===a&&c===o)return;o=c,a=u,r.push(lt(c,u));const h=n[c]||(n[c]=Object.create(null));h[u]||(h[u]=[])}),s.pending.forEach(l=>{const{provider:c,prefix:u,name:h}=l,f=lt(c,u),m=f.pendingIcons||(f.pendingIcons=new Set);m.has(h)||(m.add(h),n[c][u].push(h))}),r.forEach(l=>{const{provider:c,prefix:u}=l;n[c][u].length&&Zs(l,n[c][u])}),t?Ds(t,s,r):Mi},tr=i=>new Promise((t,e)=>{const s=typeof i=="string"?Xt(i,!0):i;if(!s){e(i);return}Je([s||i],n=>{if(n.length&&s){const r=Vt(s);if(r){t({...Gt,...r});return}}e(i)})});function er(i){try{const t=typeof i=="string"?JSON.parse(i):i;if(typeof t.body=="string")return{...t}}catch{}}function ir(i,t){const e=typeof i=="string"?Xt(i,!0,!0):null;if(!e){const r=er(i);return{value:i,data:r}}const s=Vt(e);if(s!==void 0||!e.prefix)return{value:i,name:e,data:s};const n=Je([e],()=>t(i,e,Vt(e)));return{value:i,name:e,loading:n}}function Ae(i){return i.hasAttribute("inline")}let zn=!1;try{zn=navigator.vendor.indexOf("Apple")===0}catch{}function nr(i,t){switch(t){case"svg":case"bg":case"mask":return t}return t!=="style"&&(zn||i.indexOf("<a")===-1)?"svg":i.indexOf("currentColor")===-1?"bg":"mask"}const sr=/(-?[0-9.]*[0-9]+[0-9.]*)/g,rr=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Me(i,t,e){if(t===1)return i;if(e=e||100,typeof i=="number")return Math.ceil(i*t*e)/e;if(typeof i!="string")return i;const s=i.split(sr);if(s===null||!s.length)return i;const n=[];let r=s.shift(),o=rr.test(r);for(;;){if(o){const a=parseFloat(r);isNaN(a)?n.push(r):n.push(Math.ceil(a*t*e)/e)}else n.push(r);if(r=s.shift(),r===void 0)return n.join("");o=!o}}function or(i,t="defs"){let e="";const s=i.indexOf("<"+t);for(;s>=0;){const n=i.indexOf(">",s),r=i.indexOf("</"+t);if(n===-1||r===-1)break;const o=i.indexOf(">",r);if(o===-1)break;e+=i.slice(n+1,r).trim(),i=i.slice(0,s).trim()+i.slice(o+1)}return{defs:e,content:i}}function ar(i,t){return i?"<defs>"+i+"</defs>"+t:t}function lr(i,t,e){const s=or(i);return ar(s.defs,t+s.content+e)}const cr=i=>i==="unset"||i==="undefined"||i==="none";function Rn(i,t){const e={...Gt,...i},s={...yn,...t},n={left:e.left,top:e.top,width:e.width,height:e.height};let r=e.body;[e,s].forEach(v=>{const g=[],k=v.hFlip,$=v.vFlip;let w=v.rotate;k?$?w+=2:(g.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),g.push("scale(-1 1)"),n.top=n.left=0):$&&(g.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),g.push("scale(1 -1)"),n.top=n.left=0);let _;switch(w<0&&(w-=Math.floor(w/4)*4),w=w%4,w){case 1:_=n.height/2+n.top,g.unshift("rotate(90 "+_.toString()+" "+_.toString()+")");break;case 2:g.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:_=n.width/2+n.left,g.unshift("rotate(-90 "+_.toString()+" "+_.toString()+")");break}w%2===1&&(n.left!==n.top&&(_=n.left,n.left=n.top,n.top=_),n.width!==n.height&&(_=n.width,n.width=n.height,n.height=_)),g.length&&(r=lr(r,'<g transform="'+g.join(" ")+'">',"</g>"))});const o=s.width,a=s.height,l=n.width,c=n.height;let u,h;o===null?(h=a===null?"1em":a==="auto"?c:a,u=Me(h,l/c)):(u=o==="auto"?l:o,h=a===null?Me(u,c/l):a==="auto"?c:a);const f={},m=(v,g)=>{cr(g)||(f[v]=g.toString())};m("width",u),m("height",h);const b=[n.left,n.top,l,c];return f.viewBox=b.join(" "),{attributes:f,viewBox:b,body:r}}function Ke(i,t){let e=i.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in t)e+=" "+s+'="'+t[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+e+">"+i+"</svg>"}function ur(i){return i.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function dr(i){return"data:image/svg+xml,"+ur(i)}function Bn(i){return'url("'+dr(i)+'")'}const hr=()=>{let i;try{if(i=fetch,typeof i=="function")return i}catch{}};let ce=hr();function fr(i){ce=i}function pr(){return ce}function mr(i,t){const e=Ce(i);if(!e)return 0;let s;if(!e.maxURL)s=0;else{let n=0;e.resources.forEach(o=>{n=Math.max(n,o.length)});const r=t+".json?icons=";s=e.maxURL-n-e.path.length-r.length}return s}function br(i){return i===404}const gr=(i,t,e)=>{const s=[],n=mr(i,t),r="icons";let o={type:r,provider:i,prefix:t,icons:[]},a=0;return e.forEach((l,c)=>{a+=l.length+1,a>=n&&c>0&&(s.push(o),o={type:r,provider:i,prefix:t,icons:[]},a=l.length),o.icons.push(l)}),s.push(o),s};function vr(i){if(typeof i=="string"){const t=Ce(i);if(t)return t.path}return"/"}const yr=(i,t,e)=>{if(!ce){e("abort",424);return}let s=vr(t.provider);switch(t.type){case"icons":{const r=t.prefix,a=t.icons.join(","),l=new URLSearchParams({icons:a});s+=r+".json?"+l.toString();break}case"custom":{const r=t.uri;s+=r.slice(0,1)==="/"?r.slice(1):r;break}default:e("abort",400);return}let n=503;ce(i+s).then(r=>{const o=r.status;if(o!==200){setTimeout(()=>{e(br(o)?"abort":"next",o)});return}return n=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?e("abort",r):e("next",n)});return}setTimeout(()=>{e("success",r)})}).catch(()=>{e("next",n)})},xr={prepare:gr,send:yr};function Hi(i,t){switch(i){case"local":case"session":vt[i]=t;break;case"all":for(const e in vt)vt[e]=t;break}}const Te="data-style";let jn="";function wr(i){jn=i}function Di(i,t){let e=Array.from(i.childNodes).find(s=>s.hasAttribute&&s.hasAttribute(Te));e||(e=document.createElement("style"),e.setAttribute(Te,Te),i.appendChild(e)),e.textContent=":host{display:inline-block;vertical-align:"+(t?"-0.125em":"0")+"}span,svg{display:block}"+jn}function Fn(){Ii("",xr),Cn(!0);let i;try{i=window}catch{}if(i){if(In(),i.IconifyPreload!==void 0){const e=i.IconifyPreload,s="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(n=>{try{(typeof n!="object"||n===null||n instanceof Array||typeof n.icons!="object"||typeof n.prefix!="string"||!Ti(n))&&console.error(s)}catch{console.error(s)}})}if(i.IconifyProviders!==void 0){const e=i.IconifyProviders;if(typeof e=="object"&&e!==null)for(const s in e){const n="IconifyProviders["+s+"] is invalid.";try{const r=e[s];if(typeof r!="object"||!r||r.resources===void 0)continue;zi(s,r)||console.error(n)}catch{console.error(n)}}}}return{enableCache:e=>Hi(e,!0),disableCache:e=>Hi(e,!1),iconLoaded:Li,iconExists:Li,getIcon:js,listIcons:Bs,addIcon:$n,addCollection:Ti,calculateSize:Me,buildIcon:Rn,iconToHTML:Ke,svgToURL:Bn,loadIcons:Je,loadIcon:tr,addAPIProvider:zi,appendCustomStyle:wr,_api:{getAPIConfig:Ce,setAPIModule:Ii,sendAPIQuery:En,setFetch:fr,getFetch:pr,listAPIProviders:Ws}}}const He={"background-color":"currentColor"},Mn={"background-color":"transparent"},Ni={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},qi={"-webkit-mask":He,mask:He,background:Mn};for(const i in qi){const t=qi[i];for(const e in Ni)t[i+"-"+e]=Ni[e]}function Vi(i){return i?i+(i.match(/^[-0-9.]+$/)?"px":""):"inherit"}function _r(i,t,e){const s=document.createElement("span");let n=i.body;n.indexOf("<a")!==-1&&(n+="<!-- "+Date.now()+" -->");const r=i.attributes,o=Ke(n,{...r,width:t.width+"",height:t.height+""}),a=Bn(o),l=s.style,c={"--svg":a,width:Vi(r.width),height:Vi(r.height),...e?He:Mn};for(const u in c)l.setProperty(u,c[u]);return s}let Ht;function Cr(){try{Ht=window.trustedTypes.createPolicy("iconify",{createHTML:i=>i})}catch{Ht=null}}function $r(i){return Ht===void 0&&Cr(),Ht?Ht.createHTML(i):i}function Sr(i){const t=document.createElement("span"),e=i.attributes;let s="";e.width||(s="width: inherit;"),e.height||(s+="height: inherit;"),s&&(e.style=s);const n=Ke(i.body,e);return t.innerHTML=$r(n),t.firstChild}function De(i){return Array.from(i.childNodes).find(t=>{const e=t.tagName&&t.tagName.toUpperCase();return e==="SPAN"||e==="SVG"})}function Wi(i,t){const e=t.icon.data,s=t.customisations,n=Rn(e,s);s.preserveAspectRatio&&(n.attributes.preserveAspectRatio=s.preserveAspectRatio);const r=t.renderedMode;let o;switch(r){case"svg":o=Sr(n);break;default:o=_r(n,{...Gt,...e},r==="mask")}const a=De(i);a?o.tagName==="SPAN"&&a.tagName===o.tagName?a.setAttribute("style",o.getAttribute("style")):i.replaceChild(o,a):i.appendChild(o)}function Qi(i,t,e){const s=e&&(e.rendered?e:e.lastRender);return{rendered:!1,inline:t,icon:i,lastRender:s}}function kr(i="iconify-icon"){let t,e;try{t=window.customElements,e=window.HTMLElement}catch{return}if(!t||!e)return;const s=t.get(i);if(s)return s;const n=["icon","mode","inline","observe","width","height","rotate","flip"],r=class extends e{constructor(){super();rt(this,"_shadowRoot");rt(this,"_initialised",!1);rt(this,"_state");rt(this,"_checkQueued",!1);rt(this,"_connected",!1);rt(this,"_observer",null);rt(this,"_visible",!0);const l=this._shadowRoot=this.attachShadow({mode:"open"}),c=Ae(this);Di(l,c),this._state=Qi({value:""},c),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return n.slice(0)}attributeChangedCallback(l){switch(l){case"inline":{const c=Ae(this),u=this._state;c!==u.inline&&(u.inline=c,Di(this._shadowRoot,c));break}case"observer":{this.observer?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const l=this.getAttribute("icon");if(l&&l.slice(0,1)==="{")try{return JSON.parse(l)}catch{}return l}set icon(l){typeof l=="object"&&(l=JSON.stringify(l)),this.setAttribute("icon",l)}get inline(){return Ae(this)}set inline(l){l?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(l){l?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const l=this._state;if(l.rendered){const c=this._shadowRoot;if(l.renderedMode==="svg")try{c.lastChild.setCurrentTime(0);return}catch{}Wi(c,l)}}get status(){const l=this._state;return l.rendered?"rendered":l.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const l=this._state,c=this.getAttribute("icon");if(c!==l.icon.value){this._iconChanged(c);return}if(!l.rendered||!this._visible)return;const u=this.getAttribute("mode"),h=Pi(this);(l.attrMode!==u||Ps(l.customisations,h)||!De(this._shadowRoot))&&this._renderIcon(l.icon,h,u)}_iconChanged(l){const c=ir(l,(u,h,f)=>{const m=this._state;if(m.rendered||this.getAttribute("icon")!==u)return;const b={value:u,name:h,data:f};b.data?this._gotIconData(b):m.icon=b});c.data?this._gotIconData(c):this._state=Qi(c,this._state.inline,this._state)}_forceRender(){if(!this._visible){const l=De(this._shadowRoot);l&&this._shadowRoot.removeChild(l);return}this._queueCheck()}_gotIconData(l){this._checkQueued=!1,this._renderIcon(l,Pi(this),this.getAttribute("mode"))}_renderIcon(l,c,u){const h=nr(l.data.body,u),f=this._state.inline;Wi(this._shadowRoot,this._state={rendered:!0,icon:l,inline:f,customisations:c,attrMode:u,renderedMode:h})}startObserver(){if(!this._observer)try{this._observer=new IntersectionObserver(l=>{const c=l.some(u=>u.isIntersecting);c!==this._visible&&(this._visible=c,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};n.forEach(a=>{a in r.prototype||Object.defineProperty(r.prototype,a,{get:function(){return this.getAttribute(a)},set:function(l){l!==null?this.setAttribute(a,l):this.removeAttribute(a)}})});const o=Fn();for(const a in o)r[a]=r.prototype[a]=o[a];return t.define(i,r),r}const Er=kr()||Fn(),{enableCache:Eo,disableCache:Oo,iconLoaded:Po,iconExists:Ao,getIcon:To,listIcons:Lo,addIcon:Io,addCollection:zo,calculateSize:Ro,buildIcon:Bo,iconToHTML:jo,svgToURL:Fo,loadIcons:Mo,loadIcon:Ho,addAPIProvider:Do,_api:No}=Er,Or=C`
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
`,Pr=C`
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

  [data-context-dialog]::backdrop {
    background-color: transparent;
  }
`,mt={scrollbar:Or,globalStyles:Pr},y=class y{static set config(t){this._config={...y._config,...t}}static get config(){return y._config}static addGlobalStyles(){let t=document.querySelector("style[id='bim-ui']");if(t)return;t=document.createElement("style"),t.id="bim-ui",t.textContent=mt.globalStyles.cssText;const e=document.head.firstChild;e?document.head.insertBefore(t,e):document.head.append(t)}static defineCustomElement(t,e){customElements.get(t)||customElements.define(t,e)}static registerComponents(){y.init()}static init(){y.addGlobalStyles(),y.defineCustomElement("bim-button",Rr),y.defineCustomElement("bim-checkbox",ct),y.defineCustomElement("bim-color-input",K),y.defineCustomElement("bim-context-menu",qe),y.defineCustomElement("bim-dropdown",N),y.defineCustomElement("bim-grid",Qt),y.defineCustomElement("bim-icon",Ve),y.defineCustomElement("bim-input",wt),y.defineCustomElement("bim-label",ut),y.defineCustomElement("bim-number-input",I),y.defineCustomElement("bim-option",A),y.defineCustomElement("bim-panel",Z),y.defineCustomElement("bim-panel-section",dt),y.defineCustomElement("bim-selector",ht),y.defineCustomElement("bim-table",z),y.defineCustomElement("bim-tabs",G),y.defineCustomElement("bim-tab",L),y.defineCustomElement("bim-table-cell",fe),y.defineCustomElement("bim-table-children",pe),y.defineCustomElement("bim-table-group",me),y.defineCustomElement("bim-table-row",tt),y.defineCustomElement("bim-text-input",j),y.defineCustomElement("bim-toolbar",Lt),y.defineCustomElement("bim-toolbar-group",Tt),y.defineCustomElement("bim-toolbar-section",ft),y.defineCustomElement("bim-viewport",be)}static newRandomId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let e="";for(let s=0;s<10;s++){const n=Math.floor(Math.random()*t.length);e+=t.charAt(n)}return e}};y._config={sectionLabelOnVerticalToolbar:!1};let ue=y;class de extends S{constructor(){super(...arguments),this._lazyLoadObserver=null,this._visibleElements=[],this.ELEMENTS_BEFORE_OBSERVER=20,this.useObserver=!1,this.elements=new Set,this.observe=t=>{if(!this.useObserver)return;for(const s of t)this.elements.add(s);const e=t.slice(this.ELEMENTS_BEFORE_OBSERVER);for(const s of e)s.remove();this.observeLastElement()}}set visibleElements(t){this._visibleElements=this.useObserver?t:[],this.requestUpdate()}get visibleElements(){return this._visibleElements}getLazyObserver(){if(!this.useObserver)return null;if(this._lazyLoadObserver)return this._lazyLoadObserver;const t=new IntersectionObserver(e=>{const s=e[0];if(!s.isIntersecting)return;const n=s.target;t.unobserve(n);const r=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length,o=[...this.elements][r];o&&(this.visibleElements=[...this.visibleElements,o],t.observe(o))},{threshold:.5});return t}observeLastElement(){const t=this.getLazyObserver();if(!t)return;const e=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length-1,s=[...this.elements][e];s&&t.observe(s)}resetVisibleElements(){const t=this.getLazyObserver();if(t){for(const e of this.elements)t.unobserve(e);this.visibleElements=[],this.observeLastElement()}}static create(t,e){const s=document.createDocumentFragment();if(t.length===0)return Dt(t(),s),s.firstElementChild;if(!e)throw new Error("UIComponent: Initial state is required for statefull components.");let n=e;const r=t,o=c=>(n={...n,...c},Dt(r(n,o),s),n);o(e);const a=()=>n;return[s.firstElementChild,o,a]}}const he=(i,t={},e=!0)=>{let s={};for(const n of i.children){const r=n,o=r.getAttribute("name")||r.getAttribute("label"),a=t[o];if(o){if("value"in r&&typeof r.value<"u"&&r.value!==null){const l=r.value;if(typeof l=="object"&&!Array.isArray(l)&&Object.keys(l).length===0)continue;s[o]=a?a(r.value):r.value}else if(e){const l=he(r,t);if(Object.keys(l).length===0)continue;s[o]=a?a(l):l}}else e&&(s={...s,...he(r,t)})}return s},$e=i=>i==="true"||i==="false"?i==="true":i&&!isNaN(Number(i))&&i.trim()!==""?Number(i):i,Ar=[">=","<=","=",">","<","?","/","#"];function Ui(i){const t=Ar.find(a=>i.split(a).length===2),e=i.split(t).map(a=>a.trim()),[s,n]=e,r=n.startsWith("'")&&n.endsWith("'")?n.replace(/'/g,""):$e(n);return{key:s,condition:t,value:r}}const Ne=i=>{try{const t=[],e=i.split(/&(?![^()]*\))/).map(s=>s.trim());for(const s of e){const n=!s.startsWith("(")&&!s.endsWith(")"),r=s.startsWith("(")&&s.endsWith(")");if(n){const o=Ui(s);t.push(o)}if(r){const c={operator:"&",queries:s.replace(/^(\()|(\))$/g,"").split("&").map(u=>u.trim()).map((u,h)=>{const f=Ui(u);return h>0&&(f.operator="&"),f})};t.push(c)}}return t}catch{return null}},Yi=(i,t,e)=>{let s=!1;switch(t){case"=":s=i===e;break;case"?":s=String(i).includes(String(e));break;case"<":(typeof i=="number"||typeof e=="number")&&(s=i<e);break;case"<=":(typeof i=="number"||typeof e=="number")&&(s=i<=e);break;case">":(typeof i=="number"||typeof e=="number")&&(s=i>e);break;case">=":(typeof i=="number"||typeof e=="number")&&(s=i>=e);break;case"/":s=String(i).startsWith(String(e));break}return s};var Tr=Object.defineProperty,Lr=Object.getOwnPropertyDescriptor,Hn=(i,t,e,s)=>{for(var n=Lr(t,e),r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Tr(t,e,n),n},P;const Ze=(P=class extends S{constructor(){super(...arguments),this._previousContainer=null,this._visible=!1}get placement(){return this._placement}set placement(t){this._placement=t,this.updatePosition()}static removeMenus(){for(const t of P.menus)t instanceof P&&(t.visible=!1);P.dialog.close(),P.dialog.remove()}get visible(){return this._visible}set visible(t){var e;this._visible=t,t?(P.dialog.parentElement||document.body.append(P.dialog),this._previousContainer=this.parentElement,P.dialog.style.top=`${window.scrollY||document.documentElement.scrollTop}px`,P.dialog.append(this),P.dialog.showModal(),this.updatePosition(),this.dispatchEvent(new Event("visible"))):((e=this._previousContainer)==null||e.append(this),this._previousContainer=null,this.dispatchEvent(new Event("hidden")))}async updatePosition(){if(!(this.visible&&this._previousContainer))return;const t=this.placement??"right",e=await gn(this._previousContainer,this,{placement:t,middleware:[nn(10),bn(),mn(),pn({padding:5})]}),{x:s,y:n}=e;this.style.left=`${s}px`,this.style.top=`${n}px`}connectedCallback(){super.connectedCallback(),P.menus.push(this)}render(){return p` <slot></slot> `}},P.styles=[mt.scrollbar,C`
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
        background-color: var(
          --bim-context-menu--bgc,
          var(--bim-ui_bg-contrast-20)
        );
      }

      :host(:not([visible])) {
        display: none;
      }
    `],P.dialog=de.create(()=>p` <dialog
      @click=${e=>{e.target===P.dialog&&P.removeMenus()}}
      @cancel=${()=>P.removeMenus()}
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
    ></dialog>`),P.menus=[],P);Hn([d({type:String,reflect:!0})],Ze.prototype,"placement");Hn([d({type:Boolean,reflect:!0})],Ze.prototype,"visible");let qe=Ze;var Ir=Object.defineProperty,zr=Object.getOwnPropertyDescriptor,q=(i,t,e,s)=>{for(var n=s>1?void 0:s?zr(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Ir(t,e,n),n},yt;const F=(yt=class extends S{constructor(){super(),this.labelHidden=!1,this.active=!1,this.disabled=!1,this.vertical=!1,this.tooltipVisible=!1,this._stateBeforeLoading={disabled:!1,icon:""},this._loading=!1,this._parent=kt(),this._tooltip=kt(),this._mouseLeave=!1,this.onClick=t=>{t.stopPropagation(),this.disabled||this.dispatchEvent(new Event("click"))},this.showContextMenu=()=>{const t=this._contextMenu;if(t){const e=this.getAttribute("data-context-group");e&&t.setAttribute("data-context-group",e),this.closeNestedContexts();const s=ue.newRandomId();for(const n of t.children)n instanceof yt&&n.setAttribute("data-context-group",s);t.visible=!0}},this.mouseLeave=!0}set loading(t){if(this._loading=t,t)this._stateBeforeLoading={disabled:this.disabled,icon:this.icon},this.disabled=t,this.icon="eos-icons:loading";else{const{disabled:e,icon:s}=this._stateBeforeLoading;this.disabled=e,this.icon=s}}get loading(){return this._loading}set mouseLeave(t){this._mouseLeave=t,t&&(this.tooltipVisible=!1,clearTimeout(this.timeoutID))}get mouseLeave(){return this._mouseLeave}computeTooltipPosition(){const{value:t}=this._parent,{value:e}=this._tooltip;t&&e&&gn(t,e,{placement:"bottom",middleware:[nn(10),bn(),mn(),pn({padding:5})]}).then(s=>{const{x:n,y:r}=s;Object.assign(e.style,{left:`${n}px`,top:`${r}px`})})}onMouseEnter(){if(!(this.tooltipTitle||this.tooltipText))return;this.mouseLeave=!1;const t=this.tooltipTime??700;this.timeoutID=setTimeout(()=>{this.mouseLeave||(this.computeTooltipPosition(),this.tooltipVisible=!0)},t)}closeNestedContexts(){const t=this.getAttribute("data-context-group");if(t)for(const e of qe.dialog.children){const s=e.getAttribute("data-context-group");if(e instanceof qe&&s===t){e.visible=!1,e.removeAttribute("data-context-group");for(const n of e.children)n instanceof yt&&(n.closeNestedContexts(),n.removeAttribute("data-context-group"))}}}click(){this.disabled||super.click()}get _contextMenu(){return this.querySelector("bim-context-menu")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.showContextMenu)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.showContextMenu)}render(){const t=p`
      <div ${Et(this._tooltip)} class="tooltip">
        ${this.tooltipTitle?p`<p style="text-wrap: nowrap;">
              <strong>${this.tooltipTitle}</strong>
            </p>`:null}
        ${this.tooltipText?p`<p style="width: 9rem;">${this.tooltipText}</p>`:null}
      </div>
    `,e=p`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
      style="fill: var(--bim-label--c)"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>`;return p`
      <div ${Et(this._parent)} class="parent" @click=${this.onClick}>
        ${this.label||this.icon?p`
              <div
                class="button"
                @mouseenter=${this.onMouseEnter}
                @mouseleave=${()=>this.mouseLeave=!0}
              >
                <bim-label
                  .icon=${this.icon}
                  .vertical=${this.vertical}
                  .labelHidden=${this.labelHidden}
                  >${this.label}${this.label&&this._contextMenu?e:null}</bim-label
                >
              </div>
            `:null}
        ${this.tooltipTitle||this.tooltipText?t:null}
      </div>
      <slot></slot>
    `}},yt.styles=C`
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
      clip-path: ellipse(0 0 at center bottom);
      box-sizing: border-box;
      transition:
        clip-path 0.3s cubic-bezier(0.72, 0.1, 0.43, 0.93),
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
    }

    :host(:not([label-hidden])[label]) .button {
      justify-content: var(--bim-button--jc, center);
    }

    :host(:hover)::before {
      clip-path: ellipse(120% 120% at center bottom);
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
      transform-origin: top left;
      transform: scale(1);
      clip-path: circle(150% at top left);
      transition:
        clip-path 0.2s cubic-bezier(0.72, 0.1, 0.43, 0.93),
        transform 0.3s cubic-bezier(0.72, 0.1, 0.45, 2.35);
    }

    .tooltip p {
      margin: 0;
      padding: 0;
    }

    :host(:not([tooltip-visible])) .tooltip {
      clip-path: circle(0 at top left);
      transform: scale(0.8);
    }
  `,yt);q([d({type:String,reflect:!0})],F.prototype,"label",2);q([d({type:Boolean,attribute:"label-hidden",reflect:!0})],F.prototype,"labelHidden",2);q([d({type:Boolean,reflect:!0})],F.prototype,"active",2);q([d({type:Boolean,reflect:!0,attribute:"disabled"})],F.prototype,"disabled",2);q([d({type:String,reflect:!0})],F.prototype,"icon",2);q([d({type:Boolean,reflect:!0})],F.prototype,"vertical",2);q([d({type:Number,attribute:"tooltip-time",reflect:!0})],F.prototype,"tooltipTime",2);q([d({type:Boolean,attribute:"tooltip-visible",reflect:!0})],F.prototype,"tooltipVisible",2);q([d({type:String,attribute:"tooltip-title",reflect:!0})],F.prototype,"tooltipTitle",2);q([d({type:String,attribute:"tooltip-text",reflect:!0})],F.prototype,"tooltipText",2);q([d({type:Boolean,reflect:!0})],F.prototype,"loading",1);let Rr=F;var Br=Object.defineProperty,Jt=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Br(t,e,n),n};const ei=class ei extends S{constructor(){super(...arguments),this.checked=!1,this.inverted=!1,this.onValueChange=new Event("change")}get value(){return this.checked}onChange(t){t.stopPropagation(),this.checked=t.target.checked,this.dispatchEvent(this.onValueChange)}render(){const t=p`
      <svg viewBox="0 0 21 21">
        <path
          d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"
        ></path>
      </svg>
    `;return p`
      <div class="parent">
        <label class="parent-label">
          ${this.label?p`<bim-label .icon="${this.icon}">${this.label}</bim-label> `:null}
          <div class="input-container">
            <input
              type="checkbox"
              aria-label=${this.label||this.name||"Checkbox Input"}
              @change="${this.onChange}"
              .checked="${this.checked}"
            />
            ${t}
          </div>
        </label>
      </div>
    `}};ei.styles=C`
    :host {
      display: block;
    }

    .parent-label {
      --background: #fff;
      --border: #dfdfe6;
      --border-hover: #bbc1e1;
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
      transform: scale(var(--scale, 1)) translateY(-100%);
      position: absolute;
      stroke-dasharray: var(--a, 86.12);
      stroke-dashoffset: var(--o, 86.12);
      transition:
        stroke-dasharray 0.6s,
        stroke-dashoffset 0.6s;
    }

    input:hover {
      --s: 1.7px;
      --b: var(--border-hover);
    }

    input:checked {
      --s: 2px;
      transition-delay: 0.3s;
      --b: var(--border-active);
    }

    input:checked + svg {
      --a: 16.1 86.12;
      --o: 102.22;
    }
  `;let ct=ei;Jt([d({type:String,reflect:!0})],ct.prototype,"icon");Jt([d({type:String,reflect:!0})],ct.prototype,"name");Jt([d({type:String,reflect:!0})],ct.prototype,"label");Jt([d({type:Boolean,reflect:!0})],ct.prototype,"checked");Jt([d({type:Boolean,reflect:!0})],ct.prototype,"inverted");var jr=Object.defineProperty,zt=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&jr(t,e,n),n};const ii=class ii extends S{constructor(){super(...arguments),this.vertical=!1,this.color="#bcf124",this._colorInput=kt(),this._textInput=kt(),this.onValueChange=new Event("input"),this.onOpacityInput=t=>{const e=t.target;this.opacity=e.value,this.dispatchEvent(this.onValueChange)}}set value(t){const{color:e,opacity:s}=t;this.color=e,s&&(this.opacity=s)}get value(){const t={color:this.color};return this.opacity&&(t.opacity=this.opacity),t}onColorInput(t){t.stopPropagation();const{value:e}=this._colorInput;e&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}onTextInput(t){t.stopPropagation();const{value:e}=this._textInput;if(!e)return;const{value:s}=e;let n=s.replace(/[^a-fA-F0-9]/g,"");n.startsWith("#")||(n=`#${n}`),e.value=n.slice(0,7),e.value.length===7&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}focus(){const{value:t}=this._colorInput;t&&t.click()}render(){return p`
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
                ${Et(this._colorInput)}
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
                ${Et(this._textInput)}
                @input="${this.onTextInput}"
                value="${this.color}"
                type="text"
                aria-label=${this.label||this.name||"Text Color Input"}
              />
            </div>
            ${this.opacity!==void 0?p`<bim-number-input
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
    `}};ii.styles=C`
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
  `;let K=ii;zt([d({type:String,reflect:!0})],K.prototype,"name");zt([d({type:String,reflect:!0})],K.prototype,"label");zt([d({type:String,reflect:!0})],K.prototype,"icon");zt([d({type:Boolean,reflect:!0})],K.prototype,"vertical");zt([d({type:Number,reflect:!0})],K.prototype,"opacity");zt([d({type:String,reflect:!0})],K.prototype,"color");var Fr=Object.defineProperty,Mr=Object.getOwnPropertyDescriptor,bt=(i,t,e,s)=>{for(var n=s>1?void 0:s?Mr(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Fr(t,e,n),n};const ni=class ni extends S{constructor(){super(...arguments),this.checked=!1,this.checkbox=!1,this.noMark=!1,this.vertical=!1}get value(){return this._value!==void 0?this._value:this.label?$e(this.label):this.label}set value(t){this._value=t}render(){return p`
      <div class="parent" .title=${this.label??""}>
        ${this.img||this.icon||this.label?p` <div style="display: flex; column-gap: 0.375rem">
              ${this.checkbox&&!this.noMark?p`<bim-checkbox
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
        ${!this.checkbox&&!this.noMark&&this.checked?p`<svg
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
    `}};ni.styles=C`
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
  `;let A=ni;bt([d({type:String,reflect:!0})],A.prototype,"img",2);bt([d({type:String,reflect:!0})],A.prototype,"label",2);bt([d({type:String,reflect:!0})],A.prototype,"icon",2);bt([d({type:Boolean,reflect:!0})],A.prototype,"checked",2);bt([d({type:Boolean,reflect:!0})],A.prototype,"checkbox",2);bt([d({type:Boolean,attribute:"no-mark",reflect:!0})],A.prototype,"noMark",2);bt([d({converter:{fromAttribute(i){return i&&$e(i)}}})],A.prototype,"value",1);bt([d({type:Boolean,reflect:!0})],A.prototype,"vertical",2);var Hr=Object.defineProperty,Dr=Object.getOwnPropertyDescriptor,gt=(i,t,e,s)=>{for(var n=s>1?void 0:s?Dr(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Hr(t,e,n),n};const si=class si extends de{constructor(){super(),this.multiple=!1,this.required=!1,this.vertical=!1,this._visible=!1,this._value=new Set,this.onValueChange=new Event("change"),this._contextMenu=kt(),this.onOptionClick=t=>{const e=t.target,s=this._value.has(e);if(!this.multiple&&!this.required&&!s)this._value=new Set([e]);else if(!this.multiple&&!this.required&&s)this._value=new Set([]);else if(!this.multiple&&this.required&&!s)this._value=new Set([e]);else if(this.multiple&&!this.required&&!s)this._value=new Set([...this._value,e]);else if(this.multiple&&!this.required&&s){const n=[...this._value].filter(r=>r!==e);this._value=new Set(n)}else if(this.multiple&&this.required&&!s)this._value=new Set([...this._value,e]);else if(this.multiple&&this.required&&s){const n=[...this._value].filter(o=>o!==e),r=new Set(n);r.size!==0&&(this._value=r)}this.updateOptionsState(),this.dispatchEvent(this.onValueChange)},this.useObserver=!0}set visible(t){if(t){const{value:e}=this._contextMenu;if(!e)return;for(const s of this.elements)e.append(s);this._visible=!0}else{for(const e of this.elements)this.append(e);this._visible=!1,this.resetVisibleElements()}}get visible(){return this._visible}set value(t){if(this.required&&Object.keys(t).length===0)return;const e=new Set;for(const s of t){const n=this.findOption(s);if(n&&(e.add(n),!this.multiple&&Object.keys(t).length===1))break}this._value=e,this.updateOptionsState(),this.dispatchEvent(this.onValueChange)}get value(){return[...this._value].filter(e=>e instanceof A&&e.checked).map(e=>e.value)}get _options(){const t=new Set([...this.elements]);for(const e of this.children)e instanceof A&&t.add(e);return[...t]}onSlotChange(t){const e=t.target.assignedElements();this.observe(e);const s=new Set;for(const n of this.elements){if(!(n instanceof A)){n.remove();continue}n.checked&&s.add(n),n.removeEventListener("click",this.onOptionClick),n.addEventListener("click",this.onOptionClick)}this._value=s}updateOptionsState(){for(const t of this._options)t instanceof A&&(t.checked=this._value.has(t))}findOption(t){return this._options.find(s=>s instanceof A?s.label===t||s.value===t:!1)}render(){let t,e,s;if(this._value.size===0)t="Select an option...";else if(this._value.size===1){const n=[...this._value][0];t=(n==null?void 0:n.label)||(n==null?void 0:n.value),e=n==null?void 0:n.img,s=n==null?void 0:n.icon}else t=`Multiple (${this._value.size})`;return p`
      <bim-input
        title=${this.label??""}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        <div class="input" @click=${()=>this.visible=!this.visible}>
          <bim-label
            .img=${e}
            .icon=${s}
            style="overflow: hidden;"
            >${t}</bim-label
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
            ${Et(this._contextMenu)}
            .visible=${this.visible}
            @hidden=${()=>{this.visible&&(this.visible=!1)}}
          >
            <slot @slotchange=${this.onSlotChange}></slot>
          </bim-context-menu>
        </div>
      </bim-input>
    `}};si.styles=[mt.scrollbar,C`
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
    `];let N=si;gt([d({type:String,reflect:!0})],N.prototype,"name",2);gt([d({type:String,reflect:!0})],N.prototype,"icon",2);gt([d({type:String,reflect:!0})],N.prototype,"label",2);gt([d({type:Boolean,reflect:!0})],N.prototype,"multiple",2);gt([d({type:Boolean,reflect:!0})],N.prototype,"required",2);gt([d({type:Boolean,reflect:!0})],N.prototype,"vertical",2);gt([d({type:Boolean,reflect:!0})],N.prototype,"visible",1);gt([It()],N.prototype,"_value",2);var Nr=Object.defineProperty,Dn=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Nr(t,e,n),n};const ri=class ri extends S{constructor(){super(...arguments),this.floating=!1,this._layouts={},this._updateFunctions={}}set layouts(t){this._layouts=t;const e={};for(const[s,n]of Object.entries(t))for(const r in n.elements)e[s]||(e[s]={}),e[s][r]=o=>{const a=this._updateFunctions[s];if(!a)return;const l=a[r];l&&l(o)};this.updateComponent=e}get layouts(){return this._layouts}getLayoutAreas(t){const{template:e}=t,r=e.split(`
`).map(a=>a.trim()).map(a=>a.split('"')[1]).filter(a=>a!==void 0).flatMap(a=>a.split(/\s+/));return[...new Set(r)].filter(a=>a!=="")}firstUpdated(){this._onLayoutChange=new Event("layoutchange")}render(){if(this.layout){if(this._updateFunctions={},this.layouts[this.layout]){this.innerHTML="",this._updateFunctions[this.layout]={};const t=this._updateFunctions[this.layout],e=this.layouts[this.layout],n=this.getLayoutAreas(e).map(r=>{const o=e.elements[r];if(!o)return null;if(o instanceof HTMLElement)return o.style.gridArea=r,o;if("template"in o){const{template:l,initialState:c}=o,[u,h]=de.create(l,c);return u.style.gridArea=r,t[r]=h,u}return de.create(o)}).filter(r=>!!r);this.style.gridTemplate=e.template,this.append(...n),this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange)}}else this._updateFunctions={},this.innerHTML="",this.style.gridTemplate="",this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange);return p`<slot></slot>`}};ri.styles=C`
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
  `;let Qt=ri;Dn([d({type:Boolean,reflect:!0})],Qt.prototype,"floating");Dn([d({type:String,reflect:!0})],Qt.prototype,"layout");const ge=class ge extends S{render(){return p`
      <iconify-icon .icon=${this.icon} height="none"></iconify-icon>
    `}};ge.styles=C`
    :host {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
    }

    iconify-icon {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
      color: var(--bim-icon--c);
      transition: all 0.15s;
    }
  `,ge.properties={icon:{type:String}};let Ve=ge;var qr=Object.defineProperty,Se=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&qr(t,e,n),n};const oi=class oi extends S{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change")}get value(){const t={};for(const e of this.children){const s=e;"value"in s?t[s.name||s.label]=s.value:"checked"in s&&(t[s.name||s.label]=s.checked)}return t}set value(t){const e=[...this.children];for(const s in t){const n=e.find(a=>{const l=a;return l.name===s||l.label===s});if(!n)continue;const r=n,o=t[s];typeof o=="boolean"?r.checked=o:r.value=o}}render(){return p`
      <div class="parent">
        ${this.label||this.icon?p`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="input">
          <slot></slot>
        </div>
      </div>
    `}};oi.styles=C`
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
  `;let wt=oi;Se([d({type:String,reflect:!0})],wt.prototype,"name");Se([d({type:String,reflect:!0})],wt.prototype,"label");Se([d({type:String,reflect:!0})],wt.prototype,"icon");Se([d({type:Boolean,reflect:!0})],wt.prototype,"vertical");var Vr=Object.defineProperty,Kt=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Vr(t,e,n),n};const ai=class ai extends S{constructor(){super(...arguments),this.labelHidden=!1,this.iconHidden=!1,this.vertical=!1}get value(){return this.textContent?$e(this.textContent):this.textContent}render(){return p`
      <div class="parent" .title=${this.textContent??""}>
        ${this.img?p`<img .src=${this.img} .alt=${this.textContent||""} />`:null}
        ${!this.iconHidden&&this.icon?p`<bim-icon .icon=${this.icon}></bim-icon>`:null}
        <p><slot></slot></p>
      </div>
    `}};ai.styles=C`
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
      user-select: none;
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
  `;let ut=ai;Kt([d({type:String,reflect:!0})],ut.prototype,"img");Kt([d({type:Boolean,attribute:"label-hidden",reflect:!0})],ut.prototype,"labelHidden");Kt([d({type:String,reflect:!0})],ut.prototype,"icon");Kt([d({type:Boolean,attribute:"icon-hidden",reflect:!0})],ut.prototype,"iconHidden");Kt([d({type:Boolean,reflect:!0})],ut.prototype,"vertical");var Wr=Object.defineProperty,Qr=Object.getOwnPropertyDescriptor,M=(i,t,e,s)=>{for(var n=s>1?void 0:s?Qr(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Wr(t,e,n),n};const li=class li extends S{constructor(){super(...arguments),this._value=0,this.vertical=!1,this.slider=!1,this._input=kt(),this.onValueChange=new Event("change")}set value(t){this.setValue(t.toString())}get value(){return this._value}onChange(t){t.stopPropagation();const{value:e}=this._input;e&&this.setValue(e.value)}setValue(t){const{value:e}=this._input;let s=t;if(s=s.replace(/[^0-9.-]/g,""),s=s.replace(/(\..*)\./g,"$1"),s.endsWith(".")||(s.lastIndexOf("-")>0&&(s=s[0]+s.substring(1).replace(/-/g,"")),s==="-"||s==="-0"))return;let n=Number(s);Number.isNaN(n)||(n=this.min!==void 0?Math.max(n,this.min):n,n=this.max!==void 0?Math.min(n,this.max):n,this.value!==n&&(this._value=n,e&&(e.value=this.value.toString()),this.requestUpdate(),this.dispatchEvent(this.onValueChange)))}onBlur(){const{value:t}=this._input;t&&Number.isNaN(Number(t.value))&&(t.value=this.value.toString())}onSliderMouseDown(t){document.body.style.cursor="w-resize";const{clientX:e}=t,s=this.value;let n=!1;const r=l=>{var v;n=!0;const{clientX:c}=l,u=this.step??1,h=((v=u.toString().split(".")[1])==null?void 0:v.length)||0,f=1/(this.sensitivity??1),m=(c-e)/f;if(Math.floor(Math.abs(m))!==Math.abs(m))return;const b=s+m*u;this.setValue(b.toFixed(h))},o=()=>{this.slider=!0,this.removeEventListener("blur",o)},a=()=>{document.removeEventListener("mousemove",r),document.body.style.cursor="default",n?n=!1:(this.addEventListener("blur",o),this.slider=!1,requestAnimationFrame(()=>this.focus())),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",a)}onFocus(t){t.stopPropagation();const e=s=>{s.key==="Escape"&&(this.blur(),window.removeEventListener("keydown",e))};window.addEventListener("keydown",e)}connectedCallback(){super.connectedCallback(),this.min&&this.min>this.value&&(this._value=this.min),this.max&&this.max<this.value&&(this._value=this.max)}focus(){const{value:t}=this._input;t&&t.focus()}render(){const t=p`
      ${this.pref||this.icon?p`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .icon=${this.icon}
            >${this.pref}</bim-label
          >`:null}
      <input
        ${Et(this._input)}
        type="text"
        aria-label=${this.label||this.name||"Number Input"}
        size="1"
        @input=${a=>a.stopPropagation()}
        @change=${this.onChange}
        @blur=${this.onBlur}
        @focus=${this.onFocus}
        .value=${this.value.toString()}
      />
      ${this.suffix?p`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            >${this.suffix}</bim-label
          >`:null}
    `,e=this.min??-1/0,s=this.max??1/0,n=100*(this.value-e)/(s-e),r=p`
      <style>
        .slider-indicator {
          width: ${`${n}%`};
        }
      </style>
      <div class="slider" @mousedown=${this.onSliderMouseDown}>
        <div class="slider-indicator"></div>
        ${this.pref||this.icon?p`<bim-label
              style="z-index: 1; margin-right: 0.125rem"
              .icon=${this.icon}
              >${`${this.pref}: `}</bim-label
            >`:null}
        <bim-label style="z-index: 1;">${this.value}</bim-label>
        ${this.suffix?p`<bim-label style="z-index: 1;">${this.suffix}</bim-label>`:null}
      </div>
    `,o=`${this.label||this.name||this.pref?`${this.label||this.name||this.pref}: `:""}${this.value}${this.suffix??""}`;return p`
      <bim-input
        title=${o}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        ${this.slider?r:t}
      </bim-input>
    `}};li.styles=C`
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
  `;let I=li;M([d({type:String,reflect:!0})],I.prototype,"name",2);M([d({type:String,reflect:!0})],I.prototype,"icon",2);M([d({type:String,reflect:!0})],I.prototype,"label",2);M([d({type:String,reflect:!0})],I.prototype,"pref",2);M([d({type:Number,reflect:!0})],I.prototype,"min",2);M([d({type:Number,reflect:!0})],I.prototype,"value",1);M([d({type:Number,reflect:!0})],I.prototype,"step",2);M([d({type:Number,reflect:!0})],I.prototype,"sensitivity",2);M([d({type:Number,reflect:!0})],I.prototype,"max",2);M([d({type:String,reflect:!0})],I.prototype,"suffix",2);M([d({type:Boolean,reflect:!0})],I.prototype,"vertical",2);M([d({type:Boolean,reflect:!0})],I.prototype,"slider",2);var Ur=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,Zt=(i,t,e,s)=>{for(var n=s>1?void 0:s?Yr(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Ur(t,e,n),n};const ci=class ci extends S{constructor(){super(...arguments),this.onValueChange=new Event("change"),this._hidden=!1,this.headerHidden=!1,this.valueTransform={},this.activationButton=document.createElement("bim-button"),this.panelHeight=-1}set hidden(t){this._hidden=t,this.activationButton.active=!t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}get value(){return he(this,this.valueTransform)}set value(t){const e=[...this.children];for(const s in t){const n=e.find(o=>{const a=o;return a.name===s||a.label===s});if(!n)continue;const r=n;r.value=t[s]}}connectedCallback(){super.connectedCallback(),this.activationButton.active=!this.hidden,this.activationButton.onclick=()=>{this.hidden=!this.hidden,this.animatePanel()}}disconnectedCallback(){super.disconnectedCallback(),this.activationButton.remove()}collapseSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!0}expandSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!1}firstUpdated(){requestAnimationFrame(()=>{this.animatePanel()})}calculateHeight(t=!1){(this.panelHeight<=0||t)&&(this.hidden?(this.style.setProperty("height","auto"),this.panelHeight=this.clientHeight):(this.style.setProperty("height","auto"),this.panelHeight=this.clientHeight,requestAnimationFrame(()=>{this.style.setProperty("height","0px")})))}animatePanel(){this.calculateHeight(),this.hidden?(this.calculateHeight(!0),this.style.setProperty("height",`${this.panelHeight}px`),this.style.setProperty("opacity","0"),this.style.setProperty("transform","translateX(-10%)"),setTimeout(()=>{this.style.setProperty("height","0px")},300)):requestAnimationFrame(()=>{this.style.setProperty("opacity","1"),this.style.setProperty("transform","translateX(0)"),this.style.setProperty("height","auto")})}render(){return this.activationButton.icon=this.icon,this.activationButton.label=this.label||this.name,this.activationButton.tooltipTitle=this.label||this.name,p`
      <div class="parent">
        ${this.label||this.name||this.icon?p`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `}};ci.styles=[mt.scrollbar,C`
      :host {
        display: flex;
        border-radius: var(--bim-ui_size-base);
        background-color: var(--bim-ui_bg-base);
        overflow: auto;
        transition:
          transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
          height 0.3s cubic-bezier(0.4, 0, 0.2, 1),
          opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      :host([hidden]) {
        height: 0;
        transform: translateX(-10%);
        opacity: 0;
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

      .sections {
        display: flex;
        flex-direction: column;
        overflow: auto;
      }

      ::slotted(bim-panel-section:not(:last-child)) {
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }
    `];let Z=ci;Zt([d({type:String,reflect:!0})],Z.prototype,"icon",2);Zt([d({type:String,reflect:!0})],Z.prototype,"name",2);Zt([d({type:String,reflect:!0})],Z.prototype,"label",2);Zt([d({type:Boolean,reflect:!0})],Z.prototype,"hidden",1);Zt([d({type:Boolean,attribute:"header-hidden",reflect:!0})],Z.prototype,"headerHidden",2);var Gr=Object.defineProperty,te=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Gr(t,e,n),n};const ui=class ui extends S{constructor(){super(...arguments),this.onValueChange=new Event("change"),this.valueTransform={},this.componentHeight=-1}get value(){const t=this.parentElement;let e;return t instanceof Z&&(e=t.valueTransform),Object.values(this.valueTransform).length!==0&&(e=this.valueTransform),he(this,e)}set value(t){const e=[...this.children];for(const s in t){const n=e.find(o=>{const a=o;return a.name===s||a.label===s});if(!n)continue;const r=n;r.value=t[s]}}animateHeader(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(".components");this.componentHeight<0&&(this.collapsed?this.componentHeight=t.clientHeight:(t.style.setProperty("transition","none"),t.style.setProperty("height","auto"),t.style.setProperty("padding","0.125rem 1rem 1rem"),this.componentHeight=t.clientHeight,requestAnimationFrame(()=>{t.style.setProperty("height","0px"),t.style.setProperty("padding","0 1rem 0"),t.style.setProperty("transition","height 0.5s cubic-bezier(0.4, 0, 0.2, 1), padding 0.5s cubic-bezier(0.4, 0, 0.2, 1)")}))),this.collapsed?(t.style.setProperty("height",`${this.componentHeight}px`),requestAnimationFrame(()=>{t.style.setProperty("height","0px"),t.style.setProperty("padding","0 1rem 0")})):(t.style.setProperty("height","0px"),t.style.setProperty("padding","0 1rem 0"),requestAnimationFrame(()=>{t.style.setProperty("height",`${this.componentHeight}px`),t.style.setProperty("padding","0.125rem 1rem 1rem")}))}onHeaderClick(){this.fixed||(this.collapsed=!this.collapsed,this.animateHeader())}handelSlotChange(t){t.target.assignedElements({flatten:!0}).forEach((n,r)=>{const o=r*.05;n.style.setProperty("transition-delay",`${o}s`)})}handlePointerEnter(){const t=this.renderRoot.querySelector(".expand-icon");this.collapsed?t==null||t.style.setProperty("animation","collapseAnim 0.5s"):t==null||t.style.setProperty("animation","expandAnim 0.5s")}handlePointerLeave(){const t=this.renderRoot.querySelector(".expand-icon");t==null||t.style.setProperty("animation","none")}render(){const t=this.label||this.icon||this.name||this.fixed,e=p`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
      class="expand-icon"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>`,s=p`
      <div
        class="header"
        title=${this.label??""}
        @pointerenter=${this.handlePointerEnter}
        @pointerleave=${this.handlePointerLeave}
        @click=${this.onHeaderClick}
      >
        ${this.label||this.icon||this.name?p`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        ${this.fixed?null:e}
      </div>
    `;return p`
      <div class="parent">
        ${t?s:null}
        <div class="components">
          <slot @slotchange=${this.handelSlotChange}></slot>
        </div>
      </div>
    `}};ui.styles=[mt.scrollbar,C`
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
          height 0.5s cubic-bezier(0.4, 0, 0.2, 1),
          padding 0.5s cubic-bezier(0.4, 0, 0.2, 1);
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
          transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
          opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
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
    `];let dt=ui;te([d({type:String,reflect:!0})],dt.prototype,"icon");te([d({type:String,reflect:!0})],dt.prototype,"label");te([d({type:String,reflect:!0})],dt.prototype,"name");te([d({type:Boolean,reflect:!0})],dt.prototype,"fixed");te([d({type:Boolean,reflect:!0})],dt.prototype,"collapsed");var Xr=Object.defineProperty,ee=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Xr(t,e,n),n};const di=class di extends S{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change"),this._canEmitEvents=!1,this._value=document.createElement("bim-option"),this.onOptionClick=t=>{this._value=t.target,this.dispatchEvent(this.onValueChange);for(const e of this.children)e instanceof A&&(e.checked=e===t.target)}}get _options(){return[...this.querySelectorAll("bim-option")]}set value(t){const e=this.findOption(t);if(e){for(const s of this._options)s.checked=s===e;this._value=e,this._canEmitEvents&&this.dispatchEvent(this.onValueChange)}}get value(){return this._value.value}onSlotChange(t){const e=t.target.assignedElements();for(const s of e)s instanceof A&&(s.noMark=!0,s.removeEventListener("click",this.onOptionClick),s.addEventListener("click",this.onOptionClick))}findOption(t){return this._options.find(s=>s instanceof A?s.label===t||s.value===t:!1)}doubleRequestAnimationFrames(t){requestAnimationFrame(()=>requestAnimationFrame(t))}setAnimatedBackgound(t=!1){var n,r;const e=this.renderRoot.querySelector(".animated-background"),s=(r=(n=this.shadowRoot)==null?void 0:n.querySelector("slot"))==null?void 0:r.assignedElements({flatten:!0}).filter(o=>o.hasAttribute("checked"))[0];requestAnimationFrame(()=>{var l,c,u,h;const o=(h=(u=(c=(l=s==null?void 0:s.parentElement)==null?void 0:l.shadowRoot)==null?void 0:c.querySelector("bim-input"))==null?void 0:u.shadowRoot)==null?void 0:h.querySelector(".input"),a={width:s==null?void 0:s.clientWidth,height:s==null?void 0:s.clientHeight,top:((s==null?void 0:s.offsetTop)??0)-((o==null?void 0:o.offsetTop)??0),left:((s==null?void 0:s.offsetLeft)??0)-((o==null?void 0:o.offsetLeft)??0)};e==null||e.style.setProperty("width",`${a.width}px`),e==null||e.style.setProperty("height",`${a.height}px`),e==null||e.style.setProperty("top",`${a.top}px`),e==null||e.style.setProperty("left",`${a.left}px`)}),t&&this.doubleRequestAnimationFrames(()=>{const a="ease";e==null||e.style.setProperty("transition",`width ${.3}s ${a}, height ${.3}s ${a}, top ${.3}s ${a}, left ${.3}s ${a}`)})}firstUpdated(){const t=[...this.children].find(e=>e instanceof A&&e.checked);t&&(this._value=t),this.setAnimatedBackgound(!0)}render(){return p`
      <bim-input
        .vertical=${this.vertical}
        .label=${this.label}
        .icon=${this.icon}
        @click=${this.setAnimatedBackgound}
      >
        <div class="animated-background"></div>
        <slot @slotchange=${this.onSlotChange}></slot>
      </bim-input>
    `}};di.styles=C`
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
  `;let ht=di;ee([d({type:String,reflect:!0})],ht.prototype,"name");ee([d({type:String,reflect:!0})],ht.prototype,"icon");ee([d({type:String,reflect:!0})],ht.prototype,"label");ee([d({type:Boolean,reflect:!0})],ht.prototype,"vertical");ee([It()],ht.prototype,"_value");const Jr=()=>p`
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
  `,Kr=()=>p`
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
  `;var Zr=Object.defineProperty,to=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Zr(t,e,n),n};const hi=class hi extends S{constructor(){super(...arguments),this.column="",this.columnIndex=0,this.rowData={}}get data(){return this.column?this.rowData[this.column]:null}render(){return p`
      <style>
        :host {
          grid-area: ${this.column??"unset"};
        }
      </style>
      <slot></slot>
    `}};hi.styles=C`
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
  `;let fe=hi;to([d({type:String,reflect:!0})],fe.prototype,"column");var eo=Object.defineProperty,io=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&eo(t,e,n),n};const fi=class fi extends S{constructor(){super(...arguments),this._groups=[],this.data=[],this.table=this.closest("bim-table")}toggleGroups(t,e=!1){for(const s of this._groups)s.childrenHidden=typeof t>"u"?!s.childrenHidden:!t,e&&s.toggleChildren(t,e)}render(){return this._groups=[],p`
      <slot></slot>
      ${this.data.map(t=>{const e=document.createElement("bim-table-group");return this._groups.push(e),e.table=this.table,e.data=t,e})}
    `}};fi.styles=C`
    :host {
      --bim-button--bgc: transparent;
      position: relative;
      grid-area: Children;
    }

    :host([hidden]) {
      display: none;
    }

    ::slotted(.branch.branch-vertical) {
      top: 0;
      bottom: 1.125rem;
    }
  `;let pe=fi;io([d({type:Array,attribute:!1})],pe.prototype,"data");var no=Object.defineProperty,so=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&no(t,e,n),n};const pi=class pi extends S{constructor(){super(...arguments),this.data={data:{}},this.childrenHidden=!0,this.table=this.closest("bim-table")}connectedCallback(){super.connectedCallback(),this.table&&this.table.expanded?this.childrenHidden=!1:this.childrenHidden=!0}toggleChildren(t,e=!1){this._children&&(this.childrenHidden=typeof t>"u"?!this.childrenHidden:!t,e&&this._children.toggleGroups(t,e))}render(){if(!this.table)throw new Error("TableGroup: parent table wasn't found!");const t=this.table.getGroupIndentation(this.data)??0,e=p`
      ${this.table.noIndentation?null:p`
            <style>
              .branch-vertical {
                left: ${t+(this.table.selectableRows?1.9375:.5625)}rem;
              }
            </style>
            <div class="branch branch-vertical"></div>
          `}
    `,s=document.createDocumentFragment();Dt(e,s);let n=null;this.table.noIndentation||(n=document.createElement("div"),n.classList.add("branch","branch-horizontal"),n.style.left=`${t-1+(this.table.selectableRows?2.05:.5625)}rem`);let r=null;if(!this.table.noIndentation){const l=document.createElementNS("http://www.w3.org/2000/svg","svg");l.setAttribute("height","9.5"),l.setAttribute("width","7.5"),l.setAttribute("viewBox","0 0 4.6666672 7.3333333");const c=document.createElementNS("http://www.w3.org/2000/svg","path");c.setAttribute("d","m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"),l.append(c);const u=document.createElementNS("http://www.w3.org/2000/svg","svg");u.setAttribute("height","6.5"),u.setAttribute("width","9.5"),u.setAttribute("viewBox","0 0 5.9111118 5.0175439");const h=document.createElementNS("http://www.w3.org/2000/svg","path");h.setAttribute("d","M -0.33616196,1.922522 2.253838,4.5125219 c 0.39,0.39 1.02,0.39 1.41,0 L 6.2538379,1.922522 c 0.6200001,-0.63 0.18,-1.71000007 -0.7099999,-1.71000007 H 0.37383804 c -0.89999997,0 -1.33999997,1.08000007 -0.71,1.71000007 z"),u.append(h),r=document.createElement("div"),r.addEventListener("click",f=>{f.stopPropagation(),this.toggleChildren()}),r.classList.add("caret"),r.style.left=`${(this.table.selectableRows?1.5:.125)+t}rem`,this.childrenHidden?r.append(l):r.append(u)}const o=document.createElement("bim-table-row");this.data.children&&!this.childrenHidden&&o.append(s),o.table=this.table,o.data=this.data.data,this.table.dispatchEvent(new CustomEvent("rowcreated",{detail:{row:o}})),r&&this.data.children&&o.append(r),t!==0&&(!this.data.children||this.childrenHidden)&&n&&o.append(n);let a;if(this.data.children){a=document.createElement("bim-table-children"),this._children=a,a.table=this.table,a.data=this.data.children;const l=document.createDocumentFragment();Dt(e,l),a.append(l)}return p`
      <div class="parent">${o} ${this.childrenHidden?null:a}</div>
    `}};pi.styles=C`
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
    }

    .branch-horizontal {
      top: 50%;
      width: 1rem;
      border-bottom: 1px dotted var(--bim-ui_bg-contrast-40);
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
  `;let me=pi;so([d({type:Boolean,attribute:"children-hidden",reflect:!0})],me.prototype,"childrenHidden");var ro=Object.defineProperty,Rt=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&ro(t,e,n),n};const mi=class mi extends S{constructor(){super(...arguments),this.selected=!1,this.columns=[],this.hiddenColumns=[],this.data={},this.isHeader=!1,this.table=this.closest("bim-table"),this.onTableColumnsChange=()=>{this.table&&(this.columns=this.table.columns)},this.onTableColumnsHidden=()=>{this.table&&(this.hiddenColumns=this.table.hiddenColumns)},this._observer=new IntersectionObserver(t=>{this._intersecting=t[0].isIntersecting},{rootMargin:"36px"})}get _columnNames(){return this.columns.filter(s=>!this.hiddenColumns.includes(s.name)).map(s=>s.name)}get _columnWidths(){return this.columns.filter(s=>!this.hiddenColumns.includes(s.name)).map(s=>s.width)}get _isSelected(){var t;return(t=this.table)==null?void 0:t.selection.has(this.data)}onSelectionChange(t){if(!this.table)return;const e=t.target;this.selected=e.value,e.value?(this.table.selection.add(this.data),this.table.dispatchEvent(new CustomEvent("rowselected",{detail:{data:this.data}}))):(this.table.selection.delete(this.data),this.table.dispatchEvent(new CustomEvent("rowdeselected",{detail:{data:this.data}})))}connectedCallback(){super.connectedCallback(),this._observer.observe(this),this.table&&(this.columns=this.table.columns,this.hiddenColumns=this.table.hiddenColumns,this.table.addEventListener("columnschange",this.onTableColumnsChange),this.table.addEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",this._isSelected))}disconnectedCallback(){super.disconnectedCallback(),this._observer.unobserve(this),this.table&&(this.columns=[],this.hiddenColumns=[],this.table.removeEventListener("columnschange",this.onTableColumnsChange),this.table.removeEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",!1))}compute(){if(!this.table)throw new Error("TableRow: parent table wasn't found!");const t=this.table.getRowIndentation(this.data)??0,e=this.isHeader?this.data:this.table.applyDataTransform(this.data)??this.data,s=[];for(const n in e){if(this.hiddenColumns.includes(n))continue;const r=e[n];let o;if(typeof r=="string"||typeof r=="boolean"||typeof r=="number"?(o=document.createElement("bim-label"),o.textContent=String(r)):r instanceof HTMLElement?o=r:(o=document.createDocumentFragment(),Dt(r,o)),!o)continue;const a=document.createElement("bim-table-cell");a.append(o),a.column=n,this._columnNames.indexOf(n)===0&&(a.style.marginLeft=`${this.table.noIndentation?0:t+.75}rem`);const l=this._columnNames.indexOf(n);a.setAttribute("data-column-index",String(l)),a.toggleAttribute("data-no-indentation",l===0&&this.table.noIndentation),a.toggleAttribute("data-cell-header",this.isHeader),a.rowData=this.data,this.table.dispatchEvent(new CustomEvent("cellcreated",{detail:{cell:a}})),s.push(a)}return this.style.gridTemplateAreas=`"${this.table.selectableRows?"Selection":""} ${this._columnNames.join(" ")}"`,this.style.gridTemplateColumns=`${this.table.selectableRows?"1.6rem":""} ${this._columnWidths.join(" ")}`,p`
      ${!this.isHeader&&this.table.selectableRows?p`<bim-checkbox
            @change=${this.onSelectionChange}
            .checked=${this._isSelected}
            style="align-self: center; justify-self: center"
          ></bim-checkbox>`:null}
      ${s}
      <slot></slot>
    `}render(){return p`${this._intersecting?this.compute():p``}`}};mi.styles=C`
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
  `;let tt=mi;Rt([d({type:Boolean,reflect:!0})],tt.prototype,"selected");Rt([d({attribute:!1})],tt.prototype,"columns");Rt([d({attribute:!1})],tt.prototype,"hiddenColumns");Rt([d({attribute:!1})],tt.prototype,"data");Rt([d({type:Boolean,attribute:"is-header",reflect:!0})],tt.prototype,"isHeader");Rt([It()],tt.prototype,"_intersecting");var oo=Object.defineProperty,ao=Object.getOwnPropertyDescriptor,V=(i,t,e,s)=>{for(var n=s>1?void 0:s?ao(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&oo(t,e,n),n};const bi=class bi extends S{constructor(){super(...arguments),this._filteredData=[],this.headersHidden=!1,this.minColWidth="4rem",this._columns=[],this._textDelimiters={comma:",",tab:"	"},this._queryString=null,this._data=[],this.expanded=!1,this.preserveStructureOnFilter=!1,this.indentationInText=!1,this.dataTransform={},this.selectableRows=!1,this.selection=new Set,this.noIndentation=!1,this.loading=!1,this._errorLoading=!1,this._onColumnsHidden=new Event("columnshidden"),this._hiddenColumns=[],this._stringFilterFunction=(t,e)=>Object.values(e.data).some(n=>String(n).toLowerCase().includes(t.toLowerCase())),this._queryFilterFunction=(t,e)=>{let s=!1;const n=Ne(t)??[];for(const r of n){if("queries"in r){s=!1;break}const{condition:o,value:a}=r;let{key:l}=r;if(l.startsWith("[")&&l.endsWith("]")){const c=l.replace("[","").replace("]","");l=c,s=Object.keys(e.data).filter(f=>f.includes(c)).map(f=>Yi(e.data[f],o,a)).some(f=>f)}else s=Yi(e.data[l],o,a);if(!s)break}return s}}set columns(t){const e=[];for(const s of t){const n=typeof s=="string"?{name:s,width:`minmax(${this.minColWidth}, 1fr)`}:s;e.push(n)}this._columns=e,this.computeMissingColumns(this.data),this.dispatchEvent(new Event("columnschange"))}get columns(){return this._columns}get _headerRowData(){const t={};for(const e of this.columns){const{name:s}=e;t[s]=String(s)}return t}get value(){return this._filteredData}set queryString(t){this.toggleAttribute("data-processing",!0),this._queryString=t&&t.trim()!==""?t.trim():null,this.updateFilteredData(),this.toggleAttribute("data-processing",!1)}get queryString(){return this._queryString}set data(t){this._data=t,this.updateFilteredData(),this.computeMissingColumns(t)&&(this.columns=this._columns)}get data(){return this._data}get dataAsync(){return new Promise(t=>{setTimeout(()=>{t(this.data)})})}set hiddenColumns(t){this._hiddenColumns=t,setTimeout(()=>{this.dispatchEvent(this._onColumnsHidden)})}get hiddenColumns(){return this._hiddenColumns}updateFilteredData(){this.queryString?(Ne(this.queryString)?(this.filterFunction=this._queryFilterFunction,this._filteredData=this.filter(this.queryString)):(this.filterFunction=this._stringFilterFunction,this._filteredData=this.filter(this.queryString)),this.preserveStructureOnFilter&&(this._expandedBeforeFilter===void 0&&(this._expandedBeforeFilter=this.expanded),this.expanded=!0)):(this.preserveStructureOnFilter&&this._expandedBeforeFilter!==void 0&&(this.expanded=this._expandedBeforeFilter,this._expandedBeforeFilter=void 0),this._filteredData=this.data)}computeMissingColumns(t){let e=!1;for(const s of t){const{children:n,data:r}=s;for(const o in r)this._columns.map(l=>typeof l=="string"?l:l.name).includes(o)||(this._columns.push({name:o,width:`minmax(${this.minColWidth}, 1fr)`}),e=!0);if(n){const o=this.computeMissingColumns(n);o&&!e&&(e=o)}}return e}generateText(t="comma",e=this.value,s="",n=!0){const r=this._textDelimiters[t];let o="";const a=this.columns.map(l=>l.name);if(n){this.indentationInText&&(o+=`Indentation${r}`);const l=`${a.join(r)}
`;o+=l}for(const[l,c]of e.entries()){const{data:u,children:h}=c,f=this.indentationInText?`${s}${l+1}${r}`:"",m=a.map(v=>u[v]??""),b=`${f}${m.join(r)}
`;o+=b,h&&(o+=this.generateText(t,c.children,`${s}${l+1}.`,!1))}return o}get csv(){return this.generateText("comma")}get tsv(){return this.generateText("tab")}applyDataTransform(t){const e={};for(const n of Object.keys(this.dataTransform)){const r=this.columns.find(o=>o.name===n);r&&r.forceDataTransform&&(n in t||(t[n]=""))}const s=t;for(const n in s){const r=this.dataTransform[n];r?e[n]=r(s[n],t):e[n]=t[n]}return e}downloadData(t="BIM Table Data",e="json"){let s=null;if(e==="json"&&(s=new File([JSON.stringify(this.value,void 0,2)],`${t}.json`)),e==="csv"&&(s=new File([this.csv],`${t}.csv`)),e==="tsv"&&(s=new File([this.tsv],`${t}.tsv`)),!s)return;const n=document.createElement("a");n.href=URL.createObjectURL(s),n.download=s.name,n.click(),URL.revokeObjectURL(n.href)}getRowIndentation(t,e=this.value,s=0){for(const n of e){if(n.data===t)return s;if(n.children){const r=this.getRowIndentation(t,n.children,s+1);if(r!==null)return r}}return null}getGroupIndentation(t,e=this.value,s=0){for(const n of e){if(n===t)return s;if(n.children){const r=this.getGroupIndentation(t,n.children,s+1);if(r!==null)return r}}return null}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new Event("connected"))}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new Event("disconnected"))}async loadData(t=!1){if(this._filteredData.length!==0&&!t||!this.loadFunction)return!1;this.loading=!0;try{const e=await this.loadFunction();return this.data=e,this.loading=!1,this._errorLoading=!1,!0}catch(e){if(this.loading=!1,this._filteredData.length!==0)return!1;const s=this.querySelector("[slot='error-loading']"),n=s==null?void 0:s.querySelector("[data-table-element='error-message']");return e instanceof Error&&n&&e.message.trim()!==""&&(n.textContent=e.message),this._errorLoading=!0,!1}}filter(t,e=this.filterFunction??this._stringFilterFunction,s=this.data){const n=[];for(const r of s)if(e(t,r)){if(this.preserveStructureOnFilter){const a={data:r.data};if(r.children){const l=this.filter(t,e,r.children);l.length&&(a.children=l)}n.push(a)}else if(n.push({data:r.data}),r.children){const a=this.filter(t,e,r.children);n.push(...a)}}else if(r.children){const a=this.filter(t,e,r.children);this.preserveStructureOnFilter&&a.length?n.push({data:r.data,children:a}):n.push(...a)}return n}get _missingDataElement(){return this.querySelector("[slot='missing-data']")}render(){if(this.loading)return Jr();if(this._errorLoading)return p`<slot name="error-loading"></slot>`;if(this._filteredData.length===0&&this._missingDataElement)return p`<slot name="missing-data"></slot>`;const t=document.createElement("bim-table-row");t.table=this,t.isHeader=!0,t.data=this._headerRowData,t.style.gridArea="Header",t.style.position="sticky",t.style.top="0",t.style.zIndex="5";const e=document.createElement("bim-table-children");return e.table=this,e.data=this.value,e.style.gridArea="Body",e.style.backgroundColor="transparent",p`
      <div class="parent">
        ${this.headersHidden?null:t} ${Kr()}
        <div style="overflow-x: hidden; grid-area: Body">${e}</div>
      </div>
    `}};bi.styles=[mt.scrollbar,C`
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
    `];let z=bi;V([It()],z.prototype,"_filteredData",2);V([d({type:Boolean,attribute:"headers-hidden",reflect:!0})],z.prototype,"headersHidden",2);V([d({type:String,attribute:"min-col-width",reflect:!0})],z.prototype,"minColWidth",2);V([d({type:Array,attribute:!1})],z.prototype,"columns",1);V([d({type:Array,attribute:!1})],z.prototype,"data",1);V([d({type:Boolean,reflect:!0})],z.prototype,"expanded",2);V([d({type:Boolean,reflect:!0,attribute:"selectable-rows"})],z.prototype,"selectableRows",2);V([d({attribute:!1})],z.prototype,"selection",2);V([d({type:Boolean,attribute:"no-indentation",reflect:!0})],z.prototype,"noIndentation",2);V([d({type:Boolean,reflect:!0})],z.prototype,"loading",2);V([It()],z.prototype,"_errorLoading",2);var lo=Object.defineProperty,co=Object.getOwnPropertyDescriptor,Bt=(i,t,e,s)=>{for(var n=s>1?void 0:s?co(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&lo(t,e,n),n};const gi=class gi extends S{constructor(){super(...arguments),this._switchers=[],this.bottom=!1,this.switchersHidden=!1,this.floating=!1,this.switchersFull=!1,this.onTabHiddenChange=t=>{const e=t.target;e instanceof L&&!e.hidden&&(e.removeEventListener("hiddenchange",this.onTabHiddenChange),this.tab=e.name,e.addEventListener("hiddenchange",this.onTabHiddenChange))}}set tab(t){this._tab=t;const e=[...this.children],s=e.find(n=>n instanceof L&&n.name===t);for(const n of e){if(!(n instanceof L))continue;n.hidden=s!==n;const r=this.getTabSwitcher(n.name);r&&r.toggleAttribute("data-active",!n.hidden)}s||(this._tab="hidden",this.setAttribute("tab","hidden"))}get tab(){return this._tab}getTabSwitcher(t){return this._switchers.find(s=>s.getAttribute("data-name")===t)}createSwitchers(){this._switchers=[];for(const t of this.children){if(!(t instanceof L))continue;const e=document.createElement("div");e.addEventListener("click",()=>{this.tab===t.name?this.toggleAttribute("tab",!1):this.tab=t.name,this.setAnimatedBackgound()}),e.setAttribute("data-name",t.name),e.className="switcher";const s=document.createElement("bim-label");s.textContent=t.label??null,s.icon=t.icon,e.append(s),this._switchers.push(e)}}updateSwitchers(){for(const t of this.children){if(!(t instanceof L))continue;const e=this._switchers.find(n=>n.getAttribute("data-name")===t.name);if(!e)continue;const s=e.querySelector("bim-label");s&&(s.textContent=t.label??null,s.icon=t.icon)}}onSlotChange(t){this.createSwitchers();const e=t.target.assignedElements(),s=e.find(n=>n instanceof L?this.tab?n.name===this.tab:!n.hidden:!1);s&&s instanceof L&&(this.tab=s.name);for(const n of e){if(!(n instanceof L)){n.remove();continue}n.removeEventListener("hiddenchange",this.onTabHiddenChange),s!==n&&(n.hidden=!0),n.addEventListener("hiddenchange",this.onTabHiddenChange)}}doubleRequestAnimationFrames(t){requestAnimationFrame(()=>requestAnimationFrame(t))}setAnimatedBackgound(t=!1){var n;const e=this.renderRoot.querySelector(".animated-background"),s=[...((n=this.renderRoot.querySelector(".switchers"))==null?void 0:n.querySelectorAll(".switcher"))||[]].filter(r=>r.hasAttribute("data-active"))[0];requestAnimationFrame(()=>{var a,l,c,u;const r=(u=(c=(l=(a=s==null?void 0:s.parentElement)==null?void 0:a.shadowRoot)==null?void 0:l.querySelector("bim-input"))==null?void 0:c.shadowRoot)==null?void 0:u.querySelector(".input"),o={width:s==null?void 0:s.clientWidth,height:s==null?void 0:s.clientHeight,top:((s==null?void 0:s.offsetTop)??0)-((r==null?void 0:r.offsetTop)??0),left:((s==null?void 0:s.offsetLeft)??0)-((r==null?void 0:r.offsetLeft)??0)};s?(e==null||e.style.setProperty("width",`${o.width}px`),e==null||e.style.setProperty("height",`${o.height}px`),e==null||e.style.setProperty("left",`${o.left}px`)):e==null||e.style.setProperty("width","0"),this.bottom?(e==null||e.style.setProperty("top","100%"),e==null||e.style.setProperty("transform","translateY(-100%)")):e==null||e.style.setProperty("top",`${o.top}px`)}),t&&this.doubleRequestAnimationFrames(()=>{const o="ease";e==null||e.style.setProperty("transition",`width ${.3}s ${o}, height ${.3}s ${o}, top ${.3}s ${o}, left ${.3}s ${o}`)})}firstUpdated(){requestAnimationFrame(()=>{this.setAnimatedBackgound(!0)}),window.addEventListener("resize",()=>{this.setAnimatedBackgound()})}render(){return p`
      <div class="parent">
        <div class="switchers">
          <div class="animated-background"></div>
          ${this._switchers}
        </div>
        <div class="content">
          <slot @slotchange=${this.onSlotChange}></slot>
        </div>
      </div>
    `}};gi.styles=[mt.scrollbar,C`
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
        transition: max-height 0.3s;
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

      :host(:not([tab])) .content {
        display: none;
      }

      :host([floating]) .switchers {
        justify-self: center;
        overflow: auto;
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

      :host([floating]:not([tab])) .switchers {
        border-radius: var(--bim-ui_size-2xs);
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating][bottom]:not([tab])) .switchers {
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating]) .content {
        border: 1px solid var(--bim-ui_bg-contrast-20);
        border-radius: var(--bim-ui_size-2xs);
        background-color: var(--bim-ui_bg-base);
      }
    `];let G=gi;Bt([It()],G.prototype,"_switchers",2);Bt([d({type:Boolean,reflect:!0})],G.prototype,"bottom",2);Bt([d({type:Boolean,attribute:"switchers-hidden",reflect:!0})],G.prototype,"switchersHidden",2);Bt([d({type:Boolean,reflect:!0})],G.prototype,"floating",2);Bt([d({type:String,reflect:!0})],G.prototype,"tab",1);Bt([d({type:Boolean,attribute:"switchers-full",reflect:!0})],G.prototype,"switchersFull",2);var uo=Object.defineProperty,ho=Object.getOwnPropertyDescriptor,ke=(i,t,e,s)=>{for(var n=s>1?void 0:s?ho(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&uo(t,e,n),n};const vi=class vi extends S{constructor(){super(...arguments),this._defaultName="__unnamed__",this.name=this._defaultName,this._hidden=!1}set label(t){this._label=t;const e=this.parentElement;e instanceof G&&e.updateSwitchers()}get label(){return this._label}set hidden(t){this._hidden=t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}connectedCallback(){super.connectedCallback();const{parentElement:t}=this;if(t&&this.name===this._defaultName){const e=[...t.children].indexOf(this);this.name=`${this._defaultName}${e}`}}render(){return p` <slot></slot> `}};vi.styles=C`
    :host {
      display: block;
      height: 100%;
      grid-row-start: 1;
      grid-column-start: 1;
      overflow: hidden;
      transition:
        opacity 0.3s,
        transform 0.4s;
    }

    :host([hidden]) {
      opacity: 0;
      transform: translateY(-100%);
      pointer-events: none;
    }
  `;let L=vi;ke([d({type:String,reflect:!0})],L.prototype,"name",2);ke([d({type:String,reflect:!0})],L.prototype,"label",1);ke([d({type:String,reflect:!0})],L.prototype,"icon",2);ke([d({type:Boolean,reflect:!0})],L.prototype,"hidden",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gi=i=>i??Qn;var fo=Object.defineProperty,po=Object.getOwnPropertyDescriptor,et=(i,t,e,s)=>{for(var n=s>1?void 0:s?po(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&fo(t,e,n),n};const yi=class yi extends S{constructor(){super(...arguments),this._inputTypes=["date","datetime-local","email","month","password","search","tel","text","time","url","week","area"],this.value="",this.vertical=!1,this._type="text",this.onValueChange=new Event("input")}set type(t){this._inputTypes.includes(t)&&(this._type=t)}get type(){return this._type}get query(){return Ne(this.value)}onInputChange(t){t.stopPropagation();const e=t.target;clearTimeout(this._debounceTimeoutID),this._debounceTimeoutID=setTimeout(()=>{this.value=e.value,this.dispatchEvent(this.onValueChange)},this.debounce)}focus(){setTimeout(()=>{var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("input");t==null||t.focus()})}render(){return p`
      <bim-input
        .name=${this.name}
        .icon=${this.icon}
        .label=${this.label}
        .vertical=${this.vertical}
      >
        ${this.type==="area"?p` <textarea
              aria-label=${this.label||this.name||"Text Input"}
              .value=${this.value}
              .rows=${this.rows??5}
              placeholder=${Gi(this.placeholder)}
              @input=${this.onInputChange}
            ></textarea>`:p` <input
              aria-label=${this.label||this.name||"Text Input"}
              .type=${this.type}
              .value=${this.value}
              placeholder=${Gi(this.placeholder)}
              @input=${this.onInputChange}
            />`}
      </bim-input>
    `}};yi.styles=[mt.scrollbar,C`
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
    `];let j=yi;et([d({type:String,reflect:!0})],j.prototype,"icon",2);et([d({type:String,reflect:!0})],j.prototype,"label",2);et([d({type:String,reflect:!0})],j.prototype,"name",2);et([d({type:String,reflect:!0})],j.prototype,"placeholder",2);et([d({type:String,reflect:!0})],j.prototype,"value",2);et([d({type:Boolean,reflect:!0})],j.prototype,"vertical",2);et([d({type:Number,reflect:!0})],j.prototype,"debounce",2);et([d({type:Number,reflect:!0})],j.prototype,"rows",2);et([d({type:String,reflect:!0})],j.prototype,"type",1);var mo=Object.defineProperty,bo=Object.getOwnPropertyDescriptor,Nn=(i,t,e,s)=>{for(var n=s>1?void 0:s?bo(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&mo(t,e,n),n};const xi=class xi extends S{constructor(){super(...arguments),this.rows=2,this._vertical=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}updateChildren(){const t=this.children;for(const e of t)this.vertical?e.setAttribute("label-hidden",""):e.removeAttribute("label-hidden")}render(){return p`
      <style>
        .parent {
          grid-auto-flow: ${this.vertical?"row":"column"};
          grid-template-rows: repeat(${this.rows}, 1fr);
        }
      </style>
      <div class="parent">
        <slot @slotchange=${this.updateChildren}></slot>
      </div>
    `}};xi.styles=C`
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
  `;let Tt=xi;Nn([d({type:Number,reflect:!0})],Tt.prototype,"rows",2);Nn([d({type:Boolean,reflect:!0})],Tt.prototype,"vertical",1);var go=Object.defineProperty,vo=Object.getOwnPropertyDescriptor,Ee=(i,t,e,s)=>{for(var n=s>1?void 0:s?vo(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&go(t,e,n),n};const wi=class wi extends S{constructor(){super(...arguments),this._vertical=!1,this._labelHidden=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}set labelHidden(t){this._labelHidden=t,this.updateChildren()}get labelHidden(){return this._labelHidden}updateChildren(){const t=this.children;for(const e of t)e instanceof Tt&&(e.vertical=this.vertical),e.toggleAttribute("label-hidden",this.vertical)}render(){return p`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this.updateChildren}></slot>
        </div>
        ${!this.labelHidden&&(this.label||this.icon)?p`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
      </div>
    `}};wi.styles=C`
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

    ::slotted(bim-button) {
      --bim-label--c: var(--bim-ui_bg-contrast-80);
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
  `;let ft=wi;Ee([d({type:String,reflect:!0})],ft.prototype,"label",2);Ee([d({type:String,reflect:!0})],ft.prototype,"icon",2);Ee([d({type:Boolean,reflect:!0})],ft.prototype,"vertical",1);Ee([d({type:Boolean,attribute:"label-hidden",reflect:!0})],ft.prototype,"labelHidden",1);var yo=Object.defineProperty,xo=Object.getOwnPropertyDescriptor,ti=(i,t,e,s)=>{for(var n=s>1?void 0:s?xo(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&yo(t,e,n),n};const _i=class _i extends S{constructor(){super(...arguments),this.labelsHidden=!1,this._vertical=!1,this._hidden=!1}set vertical(t){this._vertical=t,this.updateSections()}get vertical(){return this._vertical}set hidden(t){this._hidden=t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}updateSections(){const t=this.children;for(const e of t)e instanceof ft&&(e.labelHidden=this.vertical&&!ue.config.sectionLabelOnVerticalToolbar,e.vertical=this.vertical)}render(){return p`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `}};_i.styles=C`
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
  `;let Lt=_i;ti([d({type:String,reflect:!0})],Lt.prototype,"icon",2);ti([d({type:Boolean,attribute:"labels-hidden",reflect:!0})],Lt.prototype,"labelsHidden",2);ti([d({type:Boolean,reflect:!0})],Lt.prototype,"vertical",1);var wo=Object.defineProperty,_o=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&wo(t,e,n),n};const Ci=class Ci extends S{constructor(){super(),this._onResize=new Event("resize"),new ResizeObserver(()=>{setTimeout(()=>{this.dispatchEvent(this._onResize)})}).observe(this)}render(){return p`
      <div class="parent">
        <slot></slot>
      </div>
    `}};Ci.styles=C`
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
  `;let be=Ci;_o([d({type:String,reflect:!0})],be.prototype,"name");export{Rr as B,de as C,ue as M,j as T,ct as a};
