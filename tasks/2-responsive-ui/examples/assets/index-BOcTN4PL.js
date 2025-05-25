var Wn=Object.defineProperty;var Yn=(i,t,e)=>t in i?Wn(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var rt=(i,t,e)=>(Yn(i,typeof t!="symbol"?t+"":t,e),e);import{i as $,r as k,n as d,a as It}from"./state-VyZkHw6A.js";import{B as Mt,x as f,E as Qn}from"./lit-html-CuBe1DX_.js";import{e as kt,n as Et}from"./ref-DfidMTJ6.js";const At=Math.min,X=Math.max,oe=Math.round,ot=i=>({x:i,y:i}),Un={left:"right",right:"left",bottom:"top",top:"bottom"},Gn={start:"end",end:"start"};function $i(i,t,e){return X(i,At(t,e))}function Qt(i,t){return typeof i=="function"?i(t):i}function K(i){return i.split("-")[0]}function ye(i){return i.split("-")[1]}function Ki(i){return i==="x"?"y":"x"}function Ji(i){return i==="y"?"height":"width"}function wt(i){return["top","bottom"].includes(K(i))?"y":"x"}function Zi(i){return Ki(wt(i))}function Xn(i,t,e){e===void 0&&(e=!1);const s=ye(i),n=Zi(i),r=Ji(n);let o=n==="x"?s===(e?"end":"start")?"right":"left":s==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(o=ae(o)),[o,ae(o)]}function Kn(i){const t=ae(i);return[Ie(i),t,Ie(t)]}function Ie(i){return i.replace(/start|end/g,t=>Gn[t])}function Jn(i,t,e){const s=["left","right"],n=["right","left"],r=["top","bottom"],o=["bottom","top"];switch(i){case"top":case"bottom":return e?t?n:s:t?s:n;case"left":case"right":return t?r:o;default:return[]}}function Zn(i,t,e,s){const n=ye(i);let r=Jn(K(i),e==="start",s);return n&&(r=r.map(o=>o+"-"+n),t&&(r=r.concat(r.map(Ie)))),r}function ae(i){return i.replace(/left|right|bottom|top/g,t=>Un[t])}function ts(i){return{top:0,right:0,bottom:0,left:0,...i}}function tn(i){return typeof i!="number"?ts(i):{top:i,right:i,bottom:i,left:i}}function Pt(i){const{x:t,y:e,width:s,height:n}=i;return{width:s,height:n,top:e,left:t,right:t+s,bottom:e+n,x:t,y:e}}function ki(i,t,e){let{reference:s,floating:n}=i;const r=wt(t),o=Zi(t),a=Ji(o),l=K(t),c=r==="y",u=s.x+s.width/2-n.width/2,h=s.y+s.height/2-n.height/2,p=s[a]/2-n[a]/2;let b;switch(l){case"top":b={x:u,y:s.y-n.height};break;case"bottom":b={x:u,y:s.y+s.height};break;case"right":b={x:s.x+s.width,y:h};break;case"left":b={x:s.x-n.width,y:h};break;default:b={x:s.x,y:s.y}}switch(ye(t)){case"start":b[o]-=p*(e&&c?-1:1);break;case"end":b[o]+=p*(e&&c?-1:1);break}return b}const es=async(i,t,e)=>{const{placement:s="bottom",strategy:n="absolute",middleware:r=[],platform:o}=e,a=r.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(t));let c=await o.getElementRects({reference:i,floating:t,strategy:n}),{x:u,y:h}=ki(c,s,l),p=s,b={},g=0;for(let v=0;v<a.length;v++){const{name:m,fn:y}=a[v],{x:C,y:x,data:S,reset:A}=await y({x:u,y:h,initialPlacement:s,placement:p,strategy:n,middlewareData:b,rects:c,platform:o,elements:{reference:i,floating:t}});u=C??u,h=x??h,b={...b,[m]:{...b[m],...S}},A&&g<=50&&(g++,typeof A=="object"&&(A.placement&&(p=A.placement),A.rects&&(c=A.rects===!0?await o.getElementRects({reference:i,floating:t,strategy:n}):A.rects),{x:u,y:h}=ki(c,p,l)),v=-1)}return{x:u,y:h,placement:p,strategy:n,middlewareData:b}};async function en(i,t){var e;t===void 0&&(t={});const{x:s,y:n,platform:r,rects:o,elements:a,strategy:l}=i,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:h="floating",altBoundary:p=!1,padding:b=0}=Qt(t,i),g=tn(b),m=a[p?h==="floating"?"reference":"floating":h],y=Pt(await r.getClippingRect({element:(e=await(r.isElement==null?void 0:r.isElement(m)))==null||e?m:m.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),C=h==="floating"?{x:s,y:n,width:o.floating.width,height:o.floating.height}:o.reference,x=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),S=await(r.isElement==null?void 0:r.isElement(x))?await(r.getScale==null?void 0:r.getScale(x))||{x:1,y:1}:{x:1,y:1},A=Pt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:C,offsetParent:x,strategy:l}):C);return{top:(y.top-A.top+g.top)/S.y,bottom:(A.bottom-y.bottom+g.bottom)/S.y,left:(y.left-A.left+g.left)/S.x,right:(A.right-y.right+g.right)/S.x}}const is=function(i){return i===void 0&&(i={}),{name:"flip",options:i,async fn(t){var e,s;const{placement:n,middlewareData:r,rects:o,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:h=!0,fallbackPlacements:p,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:v=!0,...m}=Qt(i,t);if((e=r.arrow)!=null&&e.alignmentOffset)return{};const y=K(n),C=wt(a),x=K(a)===a,S=await(l.isRTL==null?void 0:l.isRTL(c.floating)),A=p||(x||!v?[ae(a)]:Kn(a)),_=g!=="none";!p&&_&&A.push(...Zn(a,v,g,S));const T=[a,...A],H=await en(t,m),M=[];let E=((s=r.flip)==null?void 0:s.overflows)||[];if(u&&M.push(H[y]),h){const W=Xn(n,o,S);M.push(H[W[0]],H[W[1]])}if(E=[...E,{placement:n,overflows:M}],!M.every(W=>W<=0)){var _t,jt;const W=(((_t=r.flip)==null?void 0:_t.index)||0)+1,St=T[W];if(St)return{data:{index:W,overflows:E},reset:{placement:St}};let it=(jt=E.filter(nt=>nt.overflows[0]<=0).sort((nt,Y)=>nt.overflows[1]-Y.overflows[1])[0])==null?void 0:jt.placement;if(!it)switch(b){case"bestFit":{var Ct;const nt=(Ct=E.filter(Y=>{if(_){const st=wt(Y.placement);return st===C||st==="y"}return!0}).map(Y=>[Y.placement,Y.overflows.filter(st=>st>0).reduce((st,Vn)=>st+Vn,0)]).sort((Y,st)=>Y[1]-st[1])[0])==null?void 0:Ct[0];nt&&(it=nt);break}case"initialPlacement":it=a;break}if(n!==it)return{reset:{placement:it}}}return{}}}};function nn(i){const t=At(...i.map(r=>r.left)),e=At(...i.map(r=>r.top)),s=X(...i.map(r=>r.right)),n=X(...i.map(r=>r.bottom));return{x:t,y:e,width:s-t,height:n-e}}function ns(i){const t=i.slice().sort((n,r)=>n.y-r.y),e=[];let s=null;for(let n=0;n<t.length;n++){const r=t[n];!s||r.y-s.y>s.height/2?e.push([r]):e[e.length-1].push(r),s=r}return e.map(n=>Pt(nn(n)))}const ss=function(i){return i===void 0&&(i={}),{name:"inline",options:i,async fn(t){const{placement:e,elements:s,rects:n,platform:r,strategy:o}=t,{padding:a=2,x:l,y:c}=Qt(i,t),u=Array.from(await(r.getClientRects==null?void 0:r.getClientRects(s.reference))||[]),h=ns(u),p=Pt(nn(u)),b=tn(a);function g(){if(h.length===2&&h[0].left>h[1].right&&l!=null&&c!=null)return h.find(m=>l>m.left-b.left&&l<m.right+b.right&&c>m.top-b.top&&c<m.bottom+b.bottom)||p;if(h.length>=2){if(wt(e)==="y"){const E=h[0],_t=h[h.length-1],jt=K(e)==="top",Ct=E.top,W=_t.bottom,St=jt?E.left:_t.left,it=jt?E.right:_t.right,nt=it-St,Y=W-Ct;return{top:Ct,bottom:W,left:St,right:it,width:nt,height:Y,x:St,y:Ct}}const m=K(e)==="left",y=X(...h.map(E=>E.right)),C=At(...h.map(E=>E.left)),x=h.filter(E=>m?E.left===C:E.right===y),S=x[0].top,A=x[x.length-1].bottom,_=C,T=y,H=T-_,M=A-S;return{top:S,bottom:A,left:_,right:T,width:H,height:M,x:_,y:S}}return p}const v=await r.getElementRects({reference:{getBoundingClientRect:g},floating:s.floating,strategy:o});return n.reference.x!==v.reference.x||n.reference.y!==v.reference.y||n.reference.width!==v.reference.width||n.reference.height!==v.reference.height?{reset:{rects:v}}:{}}}};async function rs(i,t){const{placement:e,platform:s,elements:n}=i,r=await(s.isRTL==null?void 0:s.isRTL(n.floating)),o=K(e),a=ye(e),l=wt(e)==="y",c=["left","top"].includes(o)?-1:1,u=r&&l?-1:1,h=Qt(t,i);let{mainAxis:p,crossAxis:b,alignmentAxis:g}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return a&&typeof g=="number"&&(b=a==="end"?g*-1:g),l?{x:b*u,y:p*c}:{x:p*c,y:b*u}}const sn=function(i){return{name:"offset",options:i,async fn(t){var e,s;const{x:n,y:r,placement:o,middlewareData:a}=t,l=await rs(t,i);return o===((e=a.offset)==null?void 0:e.placement)&&(s=a.arrow)!=null&&s.alignmentOffset?{}:{x:n+l.x,y:r+l.y,data:{...l,placement:o}}}}},os=function(i){return i===void 0&&(i={}),{name:"shift",options:i,async fn(t){const{x:e,y:s,placement:n}=t,{mainAxis:r=!0,crossAxis:o=!1,limiter:a={fn:m=>{let{x:y,y:C}=m;return{x:y,y:C}}},...l}=Qt(i,t),c={x:e,y:s},u=await en(t,l),h=wt(K(n)),p=Ki(h);let b=c[p],g=c[h];if(r){const m=p==="y"?"top":"left",y=p==="y"?"bottom":"right",C=b+u[m],x=b-u[y];b=$i(C,b,x)}if(o){const m=h==="y"?"top":"left",y=h==="y"?"bottom":"right",C=g+u[m],x=g-u[y];g=$i(C,g,x)}const v=a.fn({...t,[p]:b,[h]:g});return{...v,data:{x:v.x-e,y:v.y-s,enabled:{[p]:r,[h]:o}}}}}};function we(){return typeof window<"u"}function at(i){return rn(i)?(i.nodeName||"").toLowerCase():"#document"}function R(i){var t;return(i==null||(t=i.ownerDocument)==null?void 0:t.defaultView)||window}function ft(i){var t;return(t=(rn(i)?i.ownerDocument:i.document)||window.document)==null?void 0:t.documentElement}function rn(i){return we()?i instanceof Node||i instanceof R(i).Node:!1}function Q(i){return we()?i instanceof Element||i instanceof R(i).Element:!1}function U(i){return we()?i instanceof HTMLElement||i instanceof R(i).HTMLElement:!1}function Ei(i){return!we()||typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof R(i).ShadowRoot}function Ut(i){const{overflow:t,overflowX:e,overflowY:s,display:n}=B(i);return/auto|scroll|overlay|hidden|clip/.test(t+s+e)&&!["inline","contents"].includes(n)}function as(i){return["table","td","th"].includes(at(i))}function ls(i){return[":popover-open",":modal"].some(t=>{try{return i.matches(t)}catch{return!1}})}function Ye(i){const t=Qe(),e=Q(i)?B(i):i;return["transform","translate","scale","rotate","perspective"].some(s=>e[s]?e[s]!=="none":!1)||(e.containerType?e.containerType!=="normal":!1)||!t&&(e.backdropFilter?e.backdropFilter!=="none":!1)||!t&&(e.filter?e.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(s=>(e.willChange||"").includes(s))||["paint","layout","strict","content"].some(s=>(e.contain||"").includes(s))}function cs(i){let t=Ot(i);for(;U(t)&&!xe(t);){if(Ye(t))return t;if(ls(t))return null;t=Ot(t)}return null}function Qe(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function xe(i){return["html","body","#document"].includes(at(i))}function B(i){return R(i).getComputedStyle(i)}function _e(i){return Q(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.scrollX,scrollTop:i.scrollY}}function Ot(i){if(at(i)==="html")return i;const t=i.assignedSlot||i.parentNode||Ei(i)&&i.host||ft(i);return Ei(t)?t.host:t}function on(i){const t=Ot(i);return xe(t)?i.ownerDocument?i.ownerDocument.body:i.body:U(t)&&Ut(t)?t:on(t)}function an(i,t,e){var s;t===void 0&&(t=[]);const n=on(i),r=n===((s=i.ownerDocument)==null?void 0:s.body),o=R(n);return r?(us(o),t.concat(o,o.visualViewport||[],Ut(n)?n:[],[])):t.concat(n,an(n,[]))}function us(i){return i.parent&&Object.getPrototypeOf(i.parent)?i.frameElement:null}function ln(i){const t=B(i);let e=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const n=U(i),r=n?i.offsetWidth:e,o=n?i.offsetHeight:s,a=oe(e)!==r||oe(s)!==o;return a&&(e=r,s=o),{width:e,height:s,$:a}}function cn(i){return Q(i)?i:i.contextElement}function $t(i){const t=cn(i);if(!U(t))return ot(1);const e=t.getBoundingClientRect(),{width:s,height:n,$:r}=ln(t);let o=(r?oe(e.width):e.width)/s,a=(r?oe(e.height):e.height)/n;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const ds=ot(0);function un(i){const t=R(i);return!Qe()||!t.visualViewport?ds:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function hs(i,t,e){return t===void 0&&(t=!1),!e||t&&e!==R(i)?!1:t}function qt(i,t,e,s){t===void 0&&(t=!1),e===void 0&&(e=!1);const n=i.getBoundingClientRect(),r=cn(i);let o=ot(1);t&&(s?Q(s)&&(o=$t(s)):o=$t(i));const a=hs(r,e,s)?un(r):ot(0);let l=(n.left+a.x)/o.x,c=(n.top+a.y)/o.y,u=n.width/o.x,h=n.height/o.y;if(r){const p=R(r),b=s&&Q(s)?R(s):s;let g=p,v=g.frameElement;for(;v&&s&&b!==g;){const m=$t(v),y=v.getBoundingClientRect(),C=B(v),x=y.left+(v.clientLeft+parseFloat(C.paddingLeft))*m.x,S=y.top+(v.clientTop+parseFloat(C.paddingTop))*m.y;l*=m.x,c*=m.y,u*=m.x,h*=m.y,l+=x,c+=S,g=R(v),v=g.frameElement}}return Pt({width:u,height:h,x:l,y:c})}const ps=[":popover-open",":modal"];function dn(i){return ps.some(t=>{try{return i.matches(t)}catch{return!1}})}function fs(i){let{elements:t,rect:e,offsetParent:s,strategy:n}=i;const r=n==="fixed",o=ft(s),a=t?dn(t.floating):!1;if(s===o||a&&r)return e;let l={scrollLeft:0,scrollTop:0},c=ot(1);const u=ot(0),h=U(s);if((h||!h&&!r)&&((at(s)!=="body"||Ut(o))&&(l=_e(s)),U(s))){const p=qt(s);c=$t(s),u.x=p.x+s.clientLeft,u.y=p.y+s.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-l.scrollLeft*c.x+u.x,y:e.y*c.y-l.scrollTop*c.y+u.y}}function ms(i){return Array.from(i.getClientRects())}function hn(i){return qt(ft(i)).left+_e(i).scrollLeft}function bs(i){const t=ft(i),e=_e(i),s=i.ownerDocument.body,n=X(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),r=X(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight);let o=-e.scrollLeft+hn(i);const a=-e.scrollTop;return B(s).direction==="rtl"&&(o+=X(t.clientWidth,s.clientWidth)-n),{width:n,height:r,x:o,y:a}}function gs(i,t){const e=R(i),s=ft(i),n=e.visualViewport;let r=s.clientWidth,o=s.clientHeight,a=0,l=0;if(n){r=n.width,o=n.height;const c=Qe();(!c||c&&t==="fixed")&&(a=n.offsetLeft,l=n.offsetTop)}return{width:r,height:o,x:a,y:l}}function vs(i,t){const e=qt(i,!0,t==="fixed"),s=e.top+i.clientTop,n=e.left+i.clientLeft,r=U(i)?$t(i):ot(1),o=i.clientWidth*r.x,a=i.clientHeight*r.y,l=n*r.x,c=s*r.y;return{width:o,height:a,x:l,y:c}}function Ai(i,t,e){let s;if(t==="viewport")s=gs(i,e);else if(t==="document")s=bs(ft(i));else if(Q(t))s=vs(t,e);else{const n=un(i);s={...t,x:t.x-n.x,y:t.y-n.y}}return Pt(s)}function pn(i,t){const e=Ot(i);return e===t||!Q(e)||xe(e)?!1:B(e).position==="fixed"||pn(e,t)}function ys(i,t){const e=t.get(i);if(e)return e;let s=an(i,[]).filter(a=>Q(a)&&at(a)!=="body"),n=null;const r=B(i).position==="fixed";let o=r?Ot(i):i;for(;Q(o)&&!xe(o);){const a=B(o),l=Ye(o);!l&&a.position==="fixed"&&(n=null),(r?!l&&!n:!l&&a.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||Ut(o)&&!l&&pn(i,o))?s=s.filter(u=>u!==o):n=a,o=Ot(o)}return t.set(i,s),s}function ws(i){let{element:t,boundary:e,rootBoundary:s,strategy:n}=i;const o=[...e==="clippingAncestors"?ys(t,this._c):[].concat(e),s],a=o[0],l=o.reduce((c,u)=>{const h=Ai(t,u,n);return c.top=X(h.top,c.top),c.right=At(h.right,c.right),c.bottom=At(h.bottom,c.bottom),c.left=X(h.left,c.left),c},Ai(t,a,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function xs(i){const{width:t,height:e}=ln(i);return{width:t,height:e}}function _s(i,t,e){const s=U(t),n=ft(t),r=e==="fixed",o=qt(i,!0,r,t);let a={scrollLeft:0,scrollTop:0};const l=ot(0);if(s||!s&&!r)if((at(t)!=="body"||Ut(n))&&(a=_e(t)),s){const h=qt(t,!0,r,t);l.x=h.x+t.clientLeft,l.y=h.y+t.clientTop}else n&&(l.x=hn(n));const c=o.left+a.scrollLeft-l.x,u=o.top+a.scrollTop-l.y;return{x:c,y:u,width:o.width,height:o.height}}function Pi(i,t){return!U(i)||B(i).position==="fixed"?null:t?t(i):i.offsetParent}function fn(i,t){const e=R(i);if(!U(i)||dn(i))return e;let s=Pi(i,t);for(;s&&as(s)&&B(s).position==="static";)s=Pi(s,t);return s&&(at(s)==="html"||at(s)==="body"&&B(s).position==="static"&&!Ye(s))?e:s||cs(i)||e}const Cs=async function(i){const t=this.getOffsetParent||fn,e=this.getDimensions;return{reference:_s(i.reference,await t(i.floating),i.strategy),floating:{x:0,y:0,...await e(i.floating)}}};function Ss(i){return B(i).direction==="rtl"}const $s={convertOffsetParentRelativeRectToViewportRelativeRect:fs,getDocumentElement:ft,getClippingRect:ws,getOffsetParent:fn,getElementRects:Cs,getClientRects:ms,getDimensions:xs,getScale:$t,isElement:Q,isRTL:Ss},mn=os,bn=is,gn=ss,vn=(i,t,e)=>{const s=new Map,n={platform:$s,...e},r={...n.platform,_c:s};return es(i,t,{...n,platform:r})};/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.0.0
*/const yn=Object.freeze({left:0,top:0,width:16,height:16}),le=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Gt=Object.freeze({...yn,...le}),Le=Object.freeze({...Gt,body:"",hidden:!1}),ks=Object.freeze({width:null,height:null}),wn=Object.freeze({...ks,...le});function Es(i,t=0){const e=i.replace(/^-?[0-9.]*/,"");function s(n){for(;n<0;)n+=4;return n%4}if(e===""){const n=parseInt(i);return isNaN(n)?0:s(n)}else if(e!==i){let n=0;switch(e){case"%":n=25;break;case"deg":n=90}if(n){let r=parseFloat(i.slice(0,i.length-e.length));return isNaN(r)?0:(r=r/n,r%1===0?s(r):0)}}return t}const As=/[\s,]+/;function Ps(i,t){t.split(As).forEach(e=>{switch(e.trim()){case"horizontal":i.hFlip=!0;break;case"vertical":i.vFlip=!0;break}})}const xn={...wn,preserveAspectRatio:""};function Oi(i){const t={...xn},e=(s,n)=>i.getAttribute(s)||n;return t.width=e("width",null),t.height=e("height",null),t.rotate=Es(e("rotate","")),Ps(t,e("flip","")),t.preserveAspectRatio=e("preserveAspectRatio",e("preserveaspectratio","")),t}function Os(i,t){for(const e in xn)if(i[e]!==t[e])return!0;return!1}const Dt=/^[a-z0-9]+(-[a-z0-9]+)*$/,Xt=(i,t,e,s="")=>{const n=i.split(":");if(i.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;s=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const a=n.pop(),l=n.pop(),c={provider:n.length>0?n[0]:s,prefix:l,name:a};return t&&!se(c)?null:c}const r=n[0],o=r.split("-");if(o.length>1){const a={provider:s,prefix:o.shift(),name:o.join("-")};return t&&!se(a)?null:a}if(e&&s===""){const a={provider:s,prefix:"",name:r};return t&&!se(a,e)?null:a}return null},se=(i,t)=>i?!!((i.provider===""||i.provider.match(Dt))&&(t&&i.prefix===""||i.prefix.match(Dt))&&i.name.match(Dt)):!1;function Ts(i,t){const e={};!i.hFlip!=!t.hFlip&&(e.hFlip=!0),!i.vFlip!=!t.vFlip&&(e.vFlip=!0);const s=((i.rotate||0)+(t.rotate||0))%4;return s&&(e.rotate=s),e}function Ti(i,t){const e=Ts(i,t);for(const s in Le)s in le?s in i&&!(s in e)&&(e[s]=le[s]):s in t?e[s]=t[s]:s in i&&(e[s]=i[s]);return e}function zs(i,t){const e=i.icons,s=i.aliases||Object.create(null),n=Object.create(null);function r(o){if(e[o])return n[o]=[];if(!(o in n)){n[o]=null;const a=s[o]&&s[o].parent,l=a&&r(a);l&&(n[o]=[a].concat(l))}return n[o]}return Object.keys(e).concat(Object.keys(s)).forEach(r),n}function Is(i,t,e){const s=i.icons,n=i.aliases||Object.create(null);let r={};function o(a){r=Ti(s[a]||n[a],r)}return o(t),e.forEach(o),Ti(i,r)}function _n(i,t){const e=[];if(typeof i!="object"||typeof i.icons!="object")return e;i.not_found instanceof Array&&i.not_found.forEach(n=>{t(n,null),e.push(n)});const s=zs(i);for(const n in s){const r=s[n];r&&(t(n,Is(i,n,r)),e.push(n))}return e}const Ls={provider:"",aliases:{},not_found:{},...yn};function Pe(i,t){for(const e in t)if(e in i&&typeof i[e]!=typeof t[e])return!1;return!0}function Cn(i){if(typeof i!="object"||i===null)return null;const t=i;if(typeof t.prefix!="string"||!i.icons||typeof i.icons!="object"||!Pe(i,Ls))return null;const e=t.icons;for(const n in e){const r=e[n];if(!n.match(Dt)||typeof r.body!="string"||!Pe(r,Le))return null}const s=t.aliases||Object.create(null);for(const n in s){const r=s[n],o=r.parent;if(!n.match(Dt)||typeof o!="string"||!e[o]&&!s[o]||!Pe(r,Le))return null}return t}const ce=Object.create(null);function Rs(i,t){return{provider:i,prefix:t,icons:Object.create(null),missing:new Set}}function lt(i,t){const e=ce[i]||(ce[i]=Object.create(null));return e[t]||(e[t]=Rs(i,t))}function Ue(i,t){return Cn(t)?_n(t,(e,s)=>{s?i.icons[e]=s:i.missing.add(e)}):[]}function Bs(i,t,e){try{if(typeof e.body=="string")return i.icons[t]={...e},!0}catch{}return!1}function js(i,t){let e=[];return(typeof i=="string"?[i]:Object.keys(ce)).forEach(n=>{(typeof n=="string"&&typeof t=="string"?[t]:Object.keys(ce[n]||{})).forEach(o=>{const a=lt(n,o);e=e.concat(Object.keys(a.icons).map(l=>(n!==""?"@"+n+":":"")+o+":"+l))})}),e}let Nt=!1;function Sn(i){return typeof i=="boolean"&&(Nt=i),Nt}function Vt(i){const t=typeof i=="string"?Xt(i,!0,Nt):i;if(t){const e=lt(t.provider,t.prefix),s=t.name;return e.icons[s]||(e.missing.has(s)?null:void 0)}}function $n(i,t){const e=Xt(i,!0,Nt);if(!e)return!1;const s=lt(e.provider,e.prefix);return Bs(s,e.name,t)}function zi(i,t){if(typeof i!="object")return!1;if(typeof t!="string"&&(t=i.provider||""),Nt&&!t&&!i.prefix){let n=!1;return Cn(i)&&(i.prefix="",_n(i,(r,o)=>{o&&$n(r,o)&&(n=!0)})),n}const e=i.prefix;if(!se({provider:t,prefix:e,name:"a"}))return!1;const s=lt(t,e);return!!Ue(s,i)}function Ii(i){return!!Vt(i)}function Fs(i){const t=Vt(i);return t?{...Gt,...t}:null}function Ds(i){const t={loaded:[],missing:[],pending:[]},e=Object.create(null);i.sort((n,r)=>n.provider!==r.provider?n.provider.localeCompare(r.provider):n.prefix!==r.prefix?n.prefix.localeCompare(r.prefix):n.name.localeCompare(r.name));let s={provider:"",prefix:"",name:""};return i.forEach(n=>{if(s.name===n.name&&s.prefix===n.prefix&&s.provider===n.provider)return;s=n;const r=n.provider,o=n.prefix,a=n.name,l=e[r]||(e[r]=Object.create(null)),c=l[o]||(l[o]=lt(r,o));let u;a in c.icons?u=t.loaded:o===""||c.missing.has(a)?u=t.missing:u=t.pending;const h={provider:r,prefix:o,name:a};u.push(h)}),t}function kn(i,t){i.forEach(e=>{const s=e.loaderCallbacks;s&&(e.loaderCallbacks=s.filter(n=>n.id!==t))})}function Hs(i){i.pendingCallbacksFlag||(i.pendingCallbacksFlag=!0,setTimeout(()=>{i.pendingCallbacksFlag=!1;const t=i.loaderCallbacks?i.loaderCallbacks.slice(0):[];if(!t.length)return;let e=!1;const s=i.provider,n=i.prefix;t.forEach(r=>{const o=r.icons,a=o.pending.length;o.pending=o.pending.filter(l=>{if(l.prefix!==n)return!0;const c=l.name;if(i.icons[c])o.loaded.push({provider:s,prefix:n,name:c});else if(i.missing.has(c))o.missing.push({provider:s,prefix:n,name:c});else return e=!0,!0;return!1}),o.pending.length!==a&&(e||kn([i],r.id),r.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),r.abort))})}))}let Ms=0;function qs(i,t,e){const s=Ms++,n=kn.bind(null,e,s);if(!t.pending.length)return n;const r={id:s,icons:t,callback:i,abort:n};return e.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(r)}),n}const Re=Object.create(null);function Li(i,t){Re[i]=t}function Be(i){return Re[i]||Re[""]}function Ns(i,t=!0,e=!1){const s=[];return i.forEach(n=>{const r=typeof n=="string"?Xt(n,t,e):n;r&&s.push(r)}),s}var Vs={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Ws(i,t,e,s){const n=i.resources.length,r=i.random?Math.floor(Math.random()*n):i.index;let o;if(i.random){let _=i.resources.slice(0);for(o=[];_.length>1;){const T=Math.floor(Math.random()*_.length);o.push(_[T]),_=_.slice(0,T).concat(_.slice(T+1))}o=o.concat(_)}else o=i.resources.slice(r).concat(i.resources.slice(0,r));const a=Date.now();let l="pending",c=0,u,h=null,p=[],b=[];typeof s=="function"&&b.push(s);function g(){h&&(clearTimeout(h),h=null)}function v(){l==="pending"&&(l="aborted"),g(),p.forEach(_=>{_.status==="pending"&&(_.status="aborted")}),p=[]}function m(_,T){T&&(b=[]),typeof _=="function"&&b.push(_)}function y(){return{startTime:a,payload:t,status:l,queriesSent:c,queriesPending:p.length,subscribe:m,abort:v}}function C(){l="failed",b.forEach(_=>{_(void 0,u)})}function x(){p.forEach(_=>{_.status==="pending"&&(_.status="aborted")}),p=[]}function S(_,T,H){const M=T!=="success";switch(p=p.filter(E=>E!==_),l){case"pending":break;case"failed":if(M||!i.dataAfterTimeout)return;break;default:return}if(T==="abort"){u=H,C();return}if(M){u=H,p.length||(o.length?A():C());return}if(g(),x(),!i.random){const E=i.resources.indexOf(_.resource);E!==-1&&E!==i.index&&(i.index=E)}l="completed",b.forEach(E=>{E(H)})}function A(){if(l!=="pending")return;g();const _=o.shift();if(_===void 0){if(p.length){h=setTimeout(()=>{g(),l==="pending"&&(x(),C())},i.timeout);return}C();return}const T={status:"pending",resource:_,callback:(H,M)=>{S(T,H,M)}};p.push(T),c++,h=setTimeout(A,i.rotate),e(_,t,T.callback)}return setTimeout(A),y}function En(i){const t={...Vs,...i};let e=[];function s(){e=e.filter(a=>a().status==="pending")}function n(a,l,c){const u=Ws(t,a,l,(h,p)=>{s(),c&&c(h,p)});return e.push(u),u}function r(a){return e.find(l=>a(l))||null}return{query:n,find:r,setIndex:a=>{t.index=a},getIndex:()=>t.index,cleanup:s}}function Ge(i){let t;if(typeof i.resources=="string")t=[i.resources];else if(t=i.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:i.path||"/",maxURL:i.maxURL||500,rotate:i.rotate||750,timeout:i.timeout||5e3,random:i.random===!0,index:i.index||0,dataAfterTimeout:i.dataAfterTimeout!==!1}}const Ce=Object.create(null),Ft=["https://api.simplesvg.com","https://api.unisvg.com"],re=[];for(;Ft.length>0;)Ft.length===1||Math.random()>.5?re.push(Ft.shift()):re.push(Ft.pop());Ce[""]=Ge({resources:["https://api.iconify.design"].concat(re)});function Ri(i,t){const e=Ge(t);return e===null?!1:(Ce[i]=e,!0)}function Se(i){return Ce[i]}function Ys(){return Object.keys(Ce)}function Bi(){}const Oe=Object.create(null);function Qs(i){if(!Oe[i]){const t=Se(i);if(!t)return;const e=En(t),s={config:t,redundancy:e};Oe[i]=s}return Oe[i]}function An(i,t,e){let s,n;if(typeof i=="string"){const r=Be(i);if(!r)return e(void 0,424),Bi;n=r.send;const o=Qs(i);o&&(s=o.redundancy)}else{const r=Ge(i);if(r){s=En(r);const o=i.resources?i.resources[0]:"",a=Be(o);a&&(n=a.send)}}return!s||!n?(e(void 0,424),Bi):s.query(t,n,e)().abort}const ji="iconify2",Wt="iconify",Pn=Wt+"-count",Fi=Wt+"-version",On=36e5,Us=168,Gs=50;function je(i,t){try{return i.getItem(t)}catch{}}function Xe(i,t,e){try{return i.setItem(t,e),!0}catch{}}function Di(i,t){try{i.removeItem(t)}catch{}}function Fe(i,t){return Xe(i,Pn,t.toString())}function De(i){return parseInt(je(i,Pn))||0}const vt={local:!0,session:!0},Tn={local:new Set,session:new Set};let Ke=!1;function Xs(i){Ke=i}let ie=typeof window>"u"?{}:window;function zn(i){const t=i+"Storage";try{if(ie&&ie[t]&&typeof ie[t].length=="number")return ie[t]}catch{}vt[i]=!1}function In(i,t){const e=zn(i);if(!e)return;const s=je(e,Fi);if(s!==ji){if(s){const a=De(e);for(let l=0;l<a;l++)Di(e,Wt+l.toString())}Xe(e,Fi,ji),Fe(e,0);return}const n=Math.floor(Date.now()/On)-Us,r=a=>{const l=Wt+a.toString(),c=je(e,l);if(typeof c=="string"){try{const u=JSON.parse(c);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>n&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&t(u,a))return!0}catch{}Di(e,l)}};let o=De(e);for(let a=o-1;a>=0;a--)r(a)||(a===o-1?(o--,Fe(e,o)):Tn[i].add(a))}function Ln(){if(!Ke){Xs(!0);for(const i in vt)In(i,t=>{const e=t.data,s=t.provider,n=e.prefix,r=lt(s,n);if(!Ue(r,e).length)return!1;const o=e.lastModified||-1;return r.lastModifiedCached=r.lastModifiedCached?Math.min(r.lastModifiedCached,o):o,!0})}}function Ks(i,t){const e=i.lastModifiedCached;if(e&&e>=t)return e===t;if(i.lastModifiedCached=t,e)for(const s in vt)In(s,n=>{const r=n.data;return n.provider!==i.provider||r.prefix!==i.prefix||r.lastModified===t});return!0}function Js(i,t){Ke||Ln();function e(s){let n;if(!vt[s]||!(n=zn(s)))return;const r=Tn[s];let o;if(r.size)r.delete(o=Array.from(r).shift());else if(o=De(n),o>=Gs||!Fe(n,o+1))return;const a={cached:Math.floor(Date.now()/On),provider:i.provider,data:t};return Xe(n,Wt+o.toString(),JSON.stringify(a))}t.lastModified&&!Ks(i,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),e("local")||e("session"))}function Hi(){}function Zs(i){i.iconsLoaderFlag||(i.iconsLoaderFlag=!0,setTimeout(()=>{i.iconsLoaderFlag=!1,Hs(i)}))}function tr(i,t){i.iconsToLoad?i.iconsToLoad=i.iconsToLoad.concat(t).sort():i.iconsToLoad=t,i.iconsQueueFlag||(i.iconsQueueFlag=!0,setTimeout(()=>{i.iconsQueueFlag=!1;const{provider:e,prefix:s}=i,n=i.iconsToLoad;delete i.iconsToLoad;let r;if(!n||!(r=Be(e)))return;r.prepare(e,s,n).forEach(a=>{An(e,a,l=>{if(typeof l!="object")a.icons.forEach(c=>{i.missing.add(c)});else try{const c=Ue(i,l);if(!c.length)return;const u=i.pendingIcons;u&&c.forEach(h=>{u.delete(h)}),Js(i,l)}catch(c){console.error(c)}Zs(i)})})}))}const Je=(i,t)=>{const e=Ns(i,!0,Sn()),s=Ds(e);if(!s.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(s.loaded,s.missing,s.pending,Hi)}),()=>{l=!1}}const n=Object.create(null),r=[];let o,a;return s.pending.forEach(l=>{const{provider:c,prefix:u}=l;if(u===a&&c===o)return;o=c,a=u,r.push(lt(c,u));const h=n[c]||(n[c]=Object.create(null));h[u]||(h[u]=[])}),s.pending.forEach(l=>{const{provider:c,prefix:u,name:h}=l,p=lt(c,u),b=p.pendingIcons||(p.pendingIcons=new Set);b.has(h)||(b.add(h),n[c][u].push(h))}),r.forEach(l=>{const{provider:c,prefix:u}=l;n[c][u].length&&tr(l,n[c][u])}),t?qs(t,s,r):Hi},er=i=>new Promise((t,e)=>{const s=typeof i=="string"?Xt(i,!0):i;if(!s){e(i);return}Je([s||i],n=>{if(n.length&&s){const r=Vt(s);if(r){t({...Gt,...r});return}}e(i)})});function ir(i){try{const t=typeof i=="string"?JSON.parse(i):i;if(typeof t.body=="string")return{...t}}catch{}}function nr(i,t){const e=typeof i=="string"?Xt(i,!0,!0):null;if(!e){const r=ir(i);return{value:i,data:r}}const s=Vt(e);if(s!==void 0||!e.prefix)return{value:i,name:e,data:s};const n=Je([e],()=>t(i,e,Vt(e)));return{value:i,name:e,loading:n}}function Te(i){return i.hasAttribute("inline")}let Rn=!1;try{Rn=navigator.vendor.indexOf("Apple")===0}catch{}function sr(i,t){switch(t){case"svg":case"bg":case"mask":return t}return t!=="style"&&(Rn||i.indexOf("<a")===-1)?"svg":i.indexOf("currentColor")===-1?"bg":"mask"}const rr=/(-?[0-9.]*[0-9]+[0-9.]*)/g,or=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function He(i,t,e){if(t===1)return i;if(e=e||100,typeof i=="number")return Math.ceil(i*t*e)/e;if(typeof i!="string")return i;const s=i.split(rr);if(s===null||!s.length)return i;const n=[];let r=s.shift(),o=or.test(r);for(;;){if(o){const a=parseFloat(r);isNaN(a)?n.push(r):n.push(Math.ceil(a*t*e)/e)}else n.push(r);if(r=s.shift(),r===void 0)return n.join("");o=!o}}function ar(i,t="defs"){let e="";const s=i.indexOf("<"+t);for(;s>=0;){const n=i.indexOf(">",s),r=i.indexOf("</"+t);if(n===-1||r===-1)break;const o=i.indexOf(">",r);if(o===-1)break;e+=i.slice(n+1,r).trim(),i=i.slice(0,s).trim()+i.slice(o+1)}return{defs:e,content:i}}function lr(i,t){return i?"<defs>"+i+"</defs>"+t:t}function cr(i,t,e){const s=ar(i);return lr(s.defs,t+s.content+e)}const ur=i=>i==="unset"||i==="undefined"||i==="none";function Bn(i,t){const e={...Gt,...i},s={...wn,...t},n={left:e.left,top:e.top,width:e.width,height:e.height};let r=e.body;[e,s].forEach(v=>{const m=[],y=v.hFlip,C=v.vFlip;let x=v.rotate;y?C?x+=2:(m.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),m.push("scale(-1 1)"),n.top=n.left=0):C&&(m.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),m.push("scale(1 -1)"),n.top=n.left=0);let S;switch(x<0&&(x-=Math.floor(x/4)*4),x=x%4,x){case 1:S=n.height/2+n.top,m.unshift("rotate(90 "+S.toString()+" "+S.toString()+")");break;case 2:m.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:S=n.width/2+n.left,m.unshift("rotate(-90 "+S.toString()+" "+S.toString()+")");break}x%2===1&&(n.left!==n.top&&(S=n.left,n.left=n.top,n.top=S),n.width!==n.height&&(S=n.width,n.width=n.height,n.height=S)),m.length&&(r=cr(r,'<g transform="'+m.join(" ")+'">',"</g>"))});const o=s.width,a=s.height,l=n.width,c=n.height;let u,h;o===null?(h=a===null?"1em":a==="auto"?c:a,u=He(h,l/c)):(u=o==="auto"?l:o,h=a===null?He(u,c/l):a==="auto"?c:a);const p={},b=(v,m)=>{ur(m)||(p[v]=m.toString())};b("width",u),b("height",h);const g=[n.left,n.top,l,c];return p.viewBox=g.join(" "),{attributes:p,viewBox:g,body:r}}function Ze(i,t){let e=i.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in t)e+=" "+s+'="'+t[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+e+">"+i+"</svg>"}function dr(i){return i.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function hr(i){return"data:image/svg+xml,"+dr(i)}function jn(i){return'url("'+hr(i)+'")'}const pr=()=>{let i;try{if(i=fetch,typeof i=="function")return i}catch{}};let ue=pr();function fr(i){ue=i}function mr(){return ue}function br(i,t){const e=Se(i);if(!e)return 0;let s;if(!e.maxURL)s=0;else{let n=0;e.resources.forEach(o=>{n=Math.max(n,o.length)});const r=t+".json?icons=";s=e.maxURL-n-e.path.length-r.length}return s}function gr(i){return i===404}const vr=(i,t,e)=>{const s=[],n=br(i,t),r="icons";let o={type:r,provider:i,prefix:t,icons:[]},a=0;return e.forEach((l,c)=>{a+=l.length+1,a>=n&&c>0&&(s.push(o),o={type:r,provider:i,prefix:t,icons:[]},a=l.length),o.icons.push(l)}),s.push(o),s};function yr(i){if(typeof i=="string"){const t=Se(i);if(t)return t.path}return"/"}const wr=(i,t,e)=>{if(!ue){e("abort",424);return}let s=yr(t.provider);switch(t.type){case"icons":{const r=t.prefix,a=t.icons.join(","),l=new URLSearchParams({icons:a});s+=r+".json?"+l.toString();break}case"custom":{const r=t.uri;s+=r.slice(0,1)==="/"?r.slice(1):r;break}default:e("abort",400);return}let n=503;ue(i+s).then(r=>{const o=r.status;if(o!==200){setTimeout(()=>{e(gr(o)?"abort":"next",o)});return}return n=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?e("abort",r):e("next",n)});return}setTimeout(()=>{e("success",r)})}).catch(()=>{e("next",n)})},xr={prepare:vr,send:wr};function Mi(i,t){switch(i){case"local":case"session":vt[i]=t;break;case"all":for(const e in vt)vt[e]=t;break}}const ze="data-style";let Fn="";function _r(i){Fn=i}function qi(i,t){let e=Array.from(i.childNodes).find(s=>s.hasAttribute&&s.hasAttribute(ze));e||(e=document.createElement("style"),e.setAttribute(ze,ze),i.appendChild(e)),e.textContent=":host{display:inline-block;vertical-align:"+(t?"-0.125em":"0")+"}span,svg{display:block}"+Fn}function Dn(){Li("",xr),Sn(!0);let i;try{i=window}catch{}if(i){if(Ln(),i.IconifyPreload!==void 0){const e=i.IconifyPreload,s="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(n=>{try{(typeof n!="object"||n===null||n instanceof Array||typeof n.icons!="object"||typeof n.prefix!="string"||!zi(n))&&console.error(s)}catch{console.error(s)}})}if(i.IconifyProviders!==void 0){const e=i.IconifyProviders;if(typeof e=="object"&&e!==null)for(const s in e){const n="IconifyProviders["+s+"] is invalid.";try{const r=e[s];if(typeof r!="object"||!r||r.resources===void 0)continue;Ri(s,r)||console.error(n)}catch{console.error(n)}}}}return{enableCache:e=>Mi(e,!0),disableCache:e=>Mi(e,!1),iconLoaded:Ii,iconExists:Ii,getIcon:Fs,listIcons:js,addIcon:$n,addCollection:zi,calculateSize:He,buildIcon:Bn,iconToHTML:Ze,svgToURL:jn,loadIcons:Je,loadIcon:er,addAPIProvider:Ri,appendCustomStyle:_r,_api:{getAPIConfig:Se,setAPIModule:Li,sendAPIQuery:An,setFetch:fr,getFetch:mr,listAPIProviders:Ys}}}const Me={"background-color":"currentColor"},Hn={"background-color":"transparent"},Ni={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Vi={"-webkit-mask":Me,mask:Me,background:Hn};for(const i in Vi){const t=Vi[i];for(const e in Ni)t[i+"-"+e]=Ni[e]}function Wi(i){return i?i+(i.match(/^[-0-9.]+$/)?"px":""):"inherit"}function Cr(i,t,e){const s=document.createElement("span");let n=i.body;n.indexOf("<a")!==-1&&(n+="<!-- "+Date.now()+" -->");const r=i.attributes,o=Ze(n,{...r,width:t.width+"",height:t.height+""}),a=jn(o),l=s.style,c={"--svg":a,width:Wi(r.width),height:Wi(r.height),...e?Me:Hn};for(const u in c)l.setProperty(u,c[u]);return s}let Ht;function Sr(){try{Ht=window.trustedTypes.createPolicy("iconify",{createHTML:i=>i})}catch{Ht=null}}function $r(i){return Ht===void 0&&Sr(),Ht?Ht.createHTML(i):i}function kr(i){const t=document.createElement("span"),e=i.attributes;let s="";e.width||(s="width: inherit;"),e.height||(s+="height: inherit;"),s&&(e.style=s);const n=Ze(i.body,e);return t.innerHTML=$r(n),t.firstChild}function qe(i){return Array.from(i.childNodes).find(t=>{const e=t.tagName&&t.tagName.toUpperCase();return e==="SPAN"||e==="SVG"})}function Yi(i,t){const e=t.icon.data,s=t.customisations,n=Bn(e,s);s.preserveAspectRatio&&(n.attributes.preserveAspectRatio=s.preserveAspectRatio);const r=t.renderedMode;let o;switch(r){case"svg":o=kr(n);break;default:o=Cr(n,{...Gt,...e},r==="mask")}const a=qe(i);a?o.tagName==="SPAN"&&a.tagName===o.tagName?a.setAttribute("style",o.getAttribute("style")):i.replaceChild(o,a):i.appendChild(o)}function Qi(i,t,e){const s=e&&(e.rendered?e:e.lastRender);return{rendered:!1,inline:t,icon:i,lastRender:s}}function Er(i="iconify-icon"){let t,e;try{t=window.customElements,e=window.HTMLElement}catch{return}if(!t||!e)return;const s=t.get(i);if(s)return s;const n=["icon","mode","inline","observe","width","height","rotate","flip"],r=class extends e{constructor(){super();rt(this,"_shadowRoot");rt(this,"_initialised",!1);rt(this,"_state");rt(this,"_checkQueued",!1);rt(this,"_connected",!1);rt(this,"_observer",null);rt(this,"_visible",!0);const l=this._shadowRoot=this.attachShadow({mode:"open"}),c=Te(this);qi(l,c),this._state=Qi({value:""},c),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return n.slice(0)}attributeChangedCallback(l){switch(l){case"inline":{const c=Te(this),u=this._state;c!==u.inline&&(u.inline=c,qi(this._shadowRoot,c));break}case"observer":{this.observer?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const l=this.getAttribute("icon");if(l&&l.slice(0,1)==="{")try{return JSON.parse(l)}catch{}return l}set icon(l){typeof l=="object"&&(l=JSON.stringify(l)),this.setAttribute("icon",l)}get inline(){return Te(this)}set inline(l){l?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(l){l?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const l=this._state;if(l.rendered){const c=this._shadowRoot;if(l.renderedMode==="svg")try{c.lastChild.setCurrentTime(0);return}catch{}Yi(c,l)}}get status(){const l=this._state;return l.rendered?"rendered":l.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const l=this._state,c=this.getAttribute("icon");if(c!==l.icon.value){this._iconChanged(c);return}if(!l.rendered||!this._visible)return;const u=this.getAttribute("mode"),h=Oi(this);(l.attrMode!==u||Os(l.customisations,h)||!qe(this._shadowRoot))&&this._renderIcon(l.icon,h,u)}_iconChanged(l){const c=nr(l,(u,h,p)=>{const b=this._state;if(b.rendered||this.getAttribute("icon")!==u)return;const g={value:u,name:h,data:p};g.data?this._gotIconData(g):b.icon=g});c.data?this._gotIconData(c):this._state=Qi(c,this._state.inline,this._state)}_forceRender(){if(!this._visible){const l=qe(this._shadowRoot);l&&this._shadowRoot.removeChild(l);return}this._queueCheck()}_gotIconData(l){this._checkQueued=!1,this._renderIcon(l,Oi(this),this.getAttribute("mode"))}_renderIcon(l,c,u){const h=sr(l.data.body,u),p=this._state.inline;Yi(this._shadowRoot,this._state={rendered:!0,icon:l,inline:p,customisations:c,attrMode:u,renderedMode:h})}startObserver(){if(!this._observer)try{this._observer=new IntersectionObserver(l=>{const c=l.some(u=>u.isIntersecting);c!==this._visible&&(this._visible=c,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};n.forEach(a=>{a in r.prototype||Object.defineProperty(r.prototype,a,{get:function(){return this.getAttribute(a)},set:function(l){l!==null?this.setAttribute(a,l):this.removeAttribute(a)}})});const o=Dn();for(const a in o)r[a]=r.prototype[a]=o[a];return t.define(i,r),r}const Ar=Er()||Dn(),{enableCache:Oo,disableCache:To,iconLoaded:zo,iconExists:Io,getIcon:Lo,listIcons:Ro,addIcon:Bo,addCollection:jo,calculateSize:Fo,buildIcon:Do,iconToHTML:Ho,svgToURL:Mo,loadIcons:qo,loadIcon:No,addAPIProvider:Vo,_api:Wo}=Ar,Pr=$`
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
`,Or=$`
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
`,mt={scrollbar:Pr,globalStyles:Or},w=class w{static set config(t){this._config={...w._config,...t}}static get config(){return w._config}static addGlobalStyles(){let t=document.querySelector("style[id='bim-ui']");if(t)return;t=document.createElement("style"),t.id="bim-ui",t.textContent=mt.globalStyles.cssText;const e=document.head.firstChild;e?document.head.insertBefore(t,e):document.head.append(t)}static defineCustomElement(t,e){customElements.get(t)||customElements.define(t,e)}static registerComponents(){w.init()}static init(t="",e=!0){w.addGlobalStyles(),w.defineCustomElement("bim-button",Fr),w.defineCustomElement("bim-checkbox",ct),w.defineCustomElement("bim-color-input",J),w.defineCustomElement("bim-context-menu",Ve),w.defineCustomElement("bim-dropdown",q),w.defineCustomElement("bim-grid",Yt),w.defineCustomElement("bim-icon",We),w.defineCustomElement("bim-input",xt),w.defineCustomElement("bim-label",ut),w.defineCustomElement("bim-number-input",I),w.defineCustomElement("bim-option",O),w.defineCustomElement("bim-panel",Z),w.defineCustomElement("bim-panel-section",dt),w.defineCustomElement("bim-selector",ht),w.defineCustomElement("bim-table",L),w.defineCustomElement("bim-tabs",G),w.defineCustomElement("bim-tab",z),w.defineCustomElement("bim-table-cell",fe),w.defineCustomElement("bim-table-children",me),w.defineCustomElement("bim-table-group",be),w.defineCustomElement("bim-table-row",tt),w.defineCustomElement("bim-text-input",j),w.defineCustomElement("bim-toolbar",zt),w.defineCustomElement("bim-toolbar-group",Tt),w.defineCustomElement("bim-toolbar-section",pt),w.defineCustomElement("bim-viewport",ge),e&&this.animateOnLoad(t)}static newRandomId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let e="";for(let s=0;s<10;s++){const n=Math.floor(Math.random()*t.length);e+=t.charAt(n)}return e}static animateOnLoad(t=""){const e=`
      bim-input,
      bim-button,
      bim-checkbox,
      bim-selector,
      bim-label,
      bim-table-row,
      bim-panel-section,
      bim-table-children .branch-vertical,
      .switchers
    `,s=[];function n(r,o=document,a=new Set){const l=[];return Array.from(o.querySelectorAll(r)).forEach(h=>{a.has(h)||(a.add(h),l.push(h))}),Array.from(o.querySelectorAll("*")).filter(h=>h.shadowRoot).forEach(h=>{a.has(h)||(a.add(h),l.push(...n(r,h.shadowRoot,a)))}),l}requestAnimationFrame(()=>{n(t||e).forEach(a=>{const l=a;let c="auto";c=window.getComputedStyle(l).getPropertyValue("transition"),l.style.setProperty("opacity","0"),l.style.setProperty("transition","none"),requestAnimationFrame(()=>{l.style.setProperty("transition",c)}),s.push(l)});const o=()=>{s.forEach(a=>{const l=a,c=(l.getBoundingClientRect().x+l.getBoundingClientRect().y)/(window.innerWidth+window.innerHeight),u=window.getComputedStyle(l).getPropertyValue("transform"),h=400,p=200+c*1e3;l.animate([{transform:"translateY(-20px)",opacity:"0"},{transform:"translateY(0)",opacity:"1"}],{duration:h,easing:"ease-in-out",delay:p}),setTimeout(()=>{l.style.removeProperty("opacity"),u!=="none"?l.style.setProperty("transform",u):l.style.removeProperty("transform")},p+h)})};document.readyState==="complete"?o():window.addEventListener("load",o)})}static toggleTheme(t=!0){const e=document.querySelector("html");if(!e)return;const s=()=>{e.classList.contains("bim-ui-dark")?e.classList.replace("bim-ui-dark","bim-ui-light"):e.classList.contains("bim-ui-light")?e.classList.replace("bim-ui-light","bim-ui-dark"):e.classList.add("bim-ui-light")};if(t){const r=document.createElement("div");r.classList.add("theme-transition-overlay");const o=document.createElement("div");r.appendChild(o),o.style.setProperty("transition",`background-color ${1e3/3200}s`),document.body.appendChild(r),r.style.setProperty("animation",`toggleOverlay ${1e3/1e3}s ease-in forwards`),o.style.setProperty("animation",`toggleThemeAnimation ${1e3/1e3}s ease forwards`),setTimeout(()=>{s()},1e3/4),setTimeout(()=>{document.body.querySelectorAll(".theme-transition-overlay").forEach(l=>{document.body.removeChild(l)})},1e3)}else s()}};w._config={sectionLabelOnVerticalToolbar:!1};let de=w;class he extends k{constructor(){super(...arguments),this._lazyLoadObserver=null,this._visibleElements=[],this.ELEMENTS_BEFORE_OBSERVER=20,this.useObserver=!1,this.elements=new Set,this.observe=t=>{if(!this.useObserver)return;for(const s of t)this.elements.add(s);const e=t.slice(this.ELEMENTS_BEFORE_OBSERVER);for(const s of e)s.remove();this.observeLastElement()}}set visibleElements(t){this._visibleElements=this.useObserver?t:[],this.requestUpdate()}get visibleElements(){return this._visibleElements}getLazyObserver(){if(!this.useObserver)return null;if(this._lazyLoadObserver)return this._lazyLoadObserver;const t=new IntersectionObserver(e=>{const s=e[0];if(!s.isIntersecting)return;const n=s.target;t.unobserve(n);const r=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length,o=[...this.elements][r];o&&(this.visibleElements=[...this.visibleElements,o],t.observe(o))},{threshold:.5});return t}observeLastElement(){const t=this.getLazyObserver();if(!t)return;const e=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length-1,s=[...this.elements][e];s&&t.observe(s)}resetVisibleElements(){const t=this.getLazyObserver();if(t){for(const e of this.elements)t.unobserve(e);this.visibleElements=[],this.observeLastElement()}}static create(t,e){const s=document.createDocumentFragment();if(t.length===0)return Mt(t(),s),s.firstElementChild;if(!e)throw new Error("UIComponent: Initial state is required for statefull components.");let n=e;const r=t,o=c=>(n={...n,...c},Mt(r(n,o),s),n);o(e);const a=()=>n;return[s.firstElementChild,o,a]}}const pe=(i,t={},e=!0)=>{let s={};for(const n of i.children){const r=n,o=r.getAttribute("name")||r.getAttribute("label"),a=t[o];if(o){if("value"in r&&typeof r.value<"u"&&r.value!==null){const l=r.value;if(typeof l=="object"&&!Array.isArray(l)&&Object.keys(l).length===0)continue;s[o]=a?a(r.value):r.value}else if(e){const l=pe(r,t);if(Object.keys(l).length===0)continue;s[o]=a?a(l):l}}else e&&(s={...s,...pe(r,t)})}return s},$e=i=>i==="true"||i==="false"?i==="true":i&&!isNaN(Number(i))&&i.trim()!==""?Number(i):i,Tr=[">=","<=","=",">","<","?","/","#"];function Ui(i){const t=Tr.find(a=>i.split(a).length===2),e=i.split(t).map(a=>a.trim()),[s,n]=e,r=n.startsWith("'")&&n.endsWith("'")?n.replace(/'/g,""):$e(n);return{key:s,condition:t,value:r}}const Ne=i=>{try{const t=[],e=i.split(/&(?![^()]*\))/).map(s=>s.trim());for(const s of e){const n=!s.startsWith("(")&&!s.endsWith(")"),r=s.startsWith("(")&&s.endsWith(")");if(n){const o=Ui(s);t.push(o)}if(r){const c={operator:"&",queries:s.replace(/^(\()|(\))$/g,"").split("&").map(u=>u.trim()).map((u,h)=>{const p=Ui(u);return h>0&&(p.operator="&"),p})};t.push(c)}}return t}catch{return null}},Gi=(i,t,e)=>{let s=!1;switch(t){case"=":s=i===e;break;case"?":s=String(i).includes(String(e));break;case"<":(typeof i=="number"||typeof e=="number")&&(s=i<e);break;case"<=":(typeof i=="number"||typeof e=="number")&&(s=i<=e);break;case">":(typeof i=="number"||typeof e=="number")&&(s=i>e);break;case">=":(typeof i=="number"||typeof e=="number")&&(s=i>=e);break;case"/":s=String(i).startsWith(String(e));break}return s};var zr=Object.defineProperty,Ir=Object.getOwnPropertyDescriptor,Mn=(i,t,e,s)=>{for(var n=Ir(t,e),r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&zr(t,e,n),n},P;const ti=(P=class extends k{constructor(){super(...arguments),this._previousContainer=null,this._visible=!1}get placement(){return this._placement}set placement(t){this._placement=t,this.updatePosition()}static removeMenus(){for(const t of P.menus)t instanceof P&&(t.visible=!1);setTimeout(()=>{P.dialog.close(),P.dialog.remove()},310)}get visible(){return this._visible}set visible(t){this._visible=t,t?(P.dialog.parentElement||document.body.append(P.dialog),this._previousContainer=this.parentElement,P.dialog.style.top=`${window.scrollY||document.documentElement.scrollTop}px`,this.style.setProperty("display","flex"),P.dialog.append(this),P.dialog.showModal(),this.updatePosition(),this.dispatchEvent(new Event("visible"))):setTimeout(()=>{var e;(e=this._previousContainer)==null||e.append(this),this._previousContainer=null,this.style.setProperty("display","none"),this.dispatchEvent(new Event("hidden"))},300)}async updatePosition(){if(!(this.visible&&this._previousContainer))return;const t=this.placement??"right",e=await vn(this._previousContainer,this,{placement:t,middleware:[sn(10),gn(),bn(),mn({padding:5})]}),n=Math.min(e.x,window.innerWidth-this.clientWidth-10),r=e.y;this.style.left=`${n}px`,this.style.top=`${r}px`}connectedCallback(){super.connectedCallback(),P.menus.push(this),this.visible?(this.style.setProperty("width","auto"),this.style.setProperty("height","auto")):(this.style.setProperty("width","0"),this.style.setProperty("height","0"))}render(){return f` <slot></slot> `}},P.styles=[mt.scrollbar,$`
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
    `],P.dialog=he.create(()=>f` <dialog
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
    ></dialog>`),P.menus=[],P);Mn([d({type:String,reflect:!0})],ti.prototype,"placement");Mn([d({type:Boolean,reflect:!0})],ti.prototype,"visible");let Ve=ti;const Lr=()=>{let i=!1;return(t=>{(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(t.substr(0,4)))&&(i=!0)})(navigator.userAgent),i},Rr=()=>matchMedia("(hover: none), (pointer: coarse)").matches,ne=()=>{const i=window.innerWidth,t=480,e=768;if(i<=t)return"mobile";if(i>t&&i<=e)return"tablet";if(i>e)return"desktop";throw new Error("The window isn't detected or have a strange size")};var Br=Object.defineProperty,jr=Object.getOwnPropertyDescriptor,N=(i,t,e,s)=>{for(var n=s>1?void 0:s?jr(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Br(t,e,n),n},yt;const F=(yt=class extends k{constructor(){super(),this.labelHidden=!1,this.active=!1,this.disabled=!1,this.vertical=!1,this.tooltipVisible=!1,this._stateBeforeLoading={disabled:!1,icon:""},this._loading=!1,this._parent=kt(),this._tooltip=kt(),this._tooltipHidden=!1,this.onClick=t=>{t.stopPropagation(),this.disabled||this.dispatchEvent(new Event("click"))},this.showContextMenu=()=>{const t=this._contextMenu;if(t){const e=this.getAttribute("data-context-group");e&&t.setAttribute("data-context-group",e),this.closeNestedContexts();const s=de.newRandomId();for(const n of t.children)n instanceof yt&&n.setAttribute("data-context-group",s);t.visible=!0}},this.tooltipHidden=!0}set loading(t){if(this._loading=t,t)this._stateBeforeLoading={disabled:this.disabled,icon:this.icon},this.disabled=t,this.icon="eos-icons:loading";else{const{disabled:e,icon:s}=this._stateBeforeLoading;this.disabled=e,this.icon=s}}get loading(){return this._loading}set tooltipHidden(t){this._tooltipHidden=t,t&&(this.tooltipVisible=!1,clearTimeout(this.timeoutID))}get tooltipHidden(){return this._tooltipHidden}computeTooltipPosition(){const{value:t}=this._parent,{value:e}=this._tooltip;t&&e&&vn(t,e,{placement:"bottom",middleware:[sn(10),gn(),bn(),mn({padding:5})]}).then(s=>{const{x:n,y:r}=s;Object.assign(e.style,{left:`${n}px`,top:`${r}px`})})}showTooltip(){if(!(this.tooltipTitle||this.tooltipText))return;this.tooltipHidden=!1;const t=this.tooltipTime??700;this.timeoutID=setTimeout(()=>{this.tooltipHidden||(this.computeTooltipPosition(),this.tooltipVisible=!0)},t)}closeNestedContexts(){const t=this.getAttribute("data-context-group");if(t)for(const e of Ve.dialog.children){const s=e.getAttribute("data-context-group");if(e instanceof Ve&&s===t){e.visible=!1,e.removeAttribute("data-context-group");for(const n of e.children)n instanceof yt&&(n.closeNestedContexts(),n.removeAttribute("data-context-group"))}}}click(){this.disabled||super.click()}get _contextMenu(){return this.querySelector("bim-context-menu")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.showContextMenu),this.addTooltipEvents()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.showContextMenu)}addTooltipEvents(){Lr()||Rr()?this.addEventListener("contextmenu",t=>{t.preventDefault(),this.tooltipTime=0,this.showTooltip()}):this.addEventListener("mouseenter",this.showTooltip),this.addEventListener("mouseleave",()=>{this.tooltipHidden=!0})}render(){const t=f`
      <div ${Et(this._tooltip)} class="tooltip">
        ${this.tooltipTitle?f`<p style="text-wrap: nowrap;">
              <strong>${this.tooltipTitle}</strong>
            </p>`:null}
        ${this.tooltipText?f`<p style="width: 9rem;">${this.tooltipText}</p>`:null}
      </div>
    `,e=f`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
      style="fill: var(--bim-label--c)"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>`;return f`
      <div ${Et(this._parent)} class="parent" @click=${this.onClick}>
        ${this.label||this.icon?f`
              <div class="button">
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
    `}},yt.styles=$`
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
  `,yt);N([d({type:String,reflect:!0})],F.prototype,"label",2);N([d({type:Boolean,attribute:"label-hidden",reflect:!0})],F.prototype,"labelHidden",2);N([d({type:Boolean,reflect:!0})],F.prototype,"active",2);N([d({type:Boolean,reflect:!0,attribute:"disabled"})],F.prototype,"disabled",2);N([d({type:String,reflect:!0})],F.prototype,"icon",2);N([d({type:Boolean,reflect:!0})],F.prototype,"vertical",2);N([d({type:Number,attribute:"tooltip-time",reflect:!0})],F.prototype,"tooltipTime",2);N([d({type:Boolean,attribute:"tooltip-visible",reflect:!0})],F.prototype,"tooltipVisible",2);N([d({type:String,attribute:"tooltip-title",reflect:!0})],F.prototype,"tooltipTitle",2);N([d({type:String,attribute:"tooltip-text",reflect:!0})],F.prototype,"tooltipText",2);N([d({type:Boolean,reflect:!0})],F.prototype,"loading",1);let Fr=F;var Dr=Object.defineProperty,Kt=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Dr(t,e,n),n};const ii=class ii extends k{constructor(){super(...arguments),this.checked=!1,this.inverted=!1,this.onValueChange=new Event("change")}get value(){return this.checked}onChange(t){t.stopPropagation(),this.checked=t.target.checked,this.dispatchEvent(this.onValueChange)}render(){const t=f`
      <svg viewBox="0 0 21 21">
        <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
      </svg>
    `;return f`
      <div class="parent">
        <label class="parent-label">
          ${this.label?f`<bim-label .icon="${this.icon}">${this.label}</bim-label> `:null}
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
    `}};ii.styles=$`
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
  `;let ct=ii;Kt([d({type:String,reflect:!0})],ct.prototype,"icon");Kt([d({type:String,reflect:!0})],ct.prototype,"name");Kt([d({type:String,reflect:!0})],ct.prototype,"label");Kt([d({type:Boolean,reflect:!0})],ct.prototype,"checked");Kt([d({type:Boolean,reflect:!0})],ct.prototype,"inverted");var Hr=Object.defineProperty,Lt=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Hr(t,e,n),n};const ni=class ni extends k{constructor(){super(...arguments),this.vertical=!1,this.color="#bcf124",this._colorInput=kt(),this._textInput=kt(),this.onValueChange=new Event("input"),this.onOpacityInput=t=>{const e=t.target;this.opacity=e.value,this.dispatchEvent(this.onValueChange)}}set value(t){const{color:e,opacity:s}=t;this.color=e,s&&(this.opacity=s)}get value(){const t={color:this.color};return this.opacity&&(t.opacity=this.opacity),t}onColorInput(t){t.stopPropagation();const{value:e}=this._colorInput;e&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}onTextInput(t){t.stopPropagation();const{value:e}=this._textInput;if(!e)return;const{value:s}=e;let n=s.replace(/[^a-fA-F0-9]/g,"");n.startsWith("#")||(n=`#${n}`),e.value=n.slice(0,7),e.value.length===7&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}focus(){const{value:t}=this._colorInput;t&&t.click()}render(){return f`
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
            ${this.opacity!==void 0?f`<bim-number-input
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
    `}};ni.styles=$`
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
  `;let J=ni;Lt([d({type:String,reflect:!0})],J.prototype,"name");Lt([d({type:String,reflect:!0})],J.prototype,"label");Lt([d({type:String,reflect:!0})],J.prototype,"icon");Lt([d({type:Boolean,reflect:!0})],J.prototype,"vertical");Lt([d({type:Number,reflect:!0})],J.prototype,"opacity");Lt([d({type:String,reflect:!0})],J.prototype,"color");var Mr=Object.defineProperty,qr=Object.getOwnPropertyDescriptor,bt=(i,t,e,s)=>{for(var n=s>1?void 0:s?qr(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Mr(t,e,n),n};const si=class si extends k{constructor(){super(...arguments),this.checked=!1,this.checkbox=!1,this.noMark=!1,this.vertical=!1}get value(){return this._value!==void 0?this._value:this.label?$e(this.label):this.label}set value(t){this._value=t}render(){return f`
      <div class="parent" .title=${this.label??""}>
        ${this.img||this.icon||this.label?f` <div style="display: flex; column-gap: 0.375rem">
              ${this.checkbox&&!this.noMark?f`<bim-checkbox
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
        ${!this.checkbox&&!this.noMark&&this.checked?f`<svg
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
    `}};si.styles=$`
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
  `;let O=si;bt([d({type:String,reflect:!0})],O.prototype,"img",2);bt([d({type:String,reflect:!0})],O.prototype,"label",2);bt([d({type:String,reflect:!0})],O.prototype,"icon",2);bt([d({type:Boolean,reflect:!0})],O.prototype,"checked",2);bt([d({type:Boolean,reflect:!0})],O.prototype,"checkbox",2);bt([d({type:Boolean,attribute:"no-mark",reflect:!0})],O.prototype,"noMark",2);bt([d({converter:{fromAttribute(i){return i&&$e(i)}}})],O.prototype,"value",1);bt([d({type:Boolean,reflect:!0})],O.prototype,"vertical",2);var Nr=Object.defineProperty,Vr=Object.getOwnPropertyDescriptor,gt=(i,t,e,s)=>{for(var n=s>1?void 0:s?Vr(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Nr(t,e,n),n};const ri=class ri extends he{constructor(){super(),this.multiple=!1,this.required=!1,this.vertical=!1,this._visible=!1,this._value=new Set,this.onValueChange=new Event("change"),this._contextMenu=kt(),this.onOptionClick=t=>{const e=t.target,s=this._value.has(e);if(!this.multiple&&!this.required&&!s)this._value=new Set([e]);else if(!this.multiple&&!this.required&&s)this._value=new Set([]);else if(!this.multiple&&this.required&&!s)this._value=new Set([e]);else if(this.multiple&&!this.required&&!s)this._value=new Set([...this._value,e]);else if(this.multiple&&!this.required&&s){const n=[...this._value].filter(r=>r!==e);this._value=new Set(n)}else if(this.multiple&&this.required&&!s)this._value=new Set([...this._value,e]);else if(this.multiple&&this.required&&s){const n=[...this._value].filter(o=>o!==e),r=new Set(n);r.size!==0&&(this._value=r)}this.updateOptionsState(),this.dispatchEvent(this.onValueChange)},this.useObserver=!0}set visible(t){if(t){const{value:e}=this._contextMenu;if(!e)return;for(const s of this.elements)e.append(s);this._visible=!0}else{for(const e of this.elements)this.append(e);this._visible=!1,this.resetVisibleElements()}}get visible(){return this._visible}set value(t){if(this.required&&Object.keys(t).length===0)return;const e=new Set;for(const s of t){const n=this.findOption(s);if(n&&(e.add(n),!this.multiple&&Object.keys(t).length===1))break}this._value=e,this.updateOptionsState(),this.dispatchEvent(this.onValueChange)}get value(){return[...this._value].filter(e=>e instanceof O&&e.checked).map(e=>e.value)}get _options(){const t=new Set([...this.elements]);for(const e of this.children)e instanceof O&&t.add(e);return[...t]}onSlotChange(t){const e=t.target.assignedElements();this.observe(e);const s=new Set;for(const n of this.elements){if(!(n instanceof O)){n.remove();continue}n.checked&&s.add(n),n.removeEventListener("click",this.onOptionClick),n.addEventListener("click",this.onOptionClick)}this._value=s}updateOptionsState(){for(const t of this._options)t instanceof O&&(t.checked=this._value.has(t))}findOption(t){return this._options.find(s=>s instanceof O?s.label===t||s.value===t:!1)}render(){let t,e,s;if(this._value.size===0)t="Select an option...";else if(this._value.size===1){const n=[...this._value][0];t=(n==null?void 0:n.label)||(n==null?void 0:n.value),e=n==null?void 0:n.img,s=n==null?void 0:n.icon}else t=`Multiple (${this._value.size})`;return f`
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
    `}};ri.styles=[mt.scrollbar,$`
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
    `];let q=ri;gt([d({type:String,reflect:!0})],q.prototype,"name",2);gt([d({type:String,reflect:!0})],q.prototype,"icon",2);gt([d({type:String,reflect:!0})],q.prototype,"label",2);gt([d({type:Boolean,reflect:!0})],q.prototype,"multiple",2);gt([d({type:Boolean,reflect:!0})],q.prototype,"required",2);gt([d({type:Boolean,reflect:!0})],q.prototype,"vertical",2);gt([d({type:Boolean,reflect:!0})],q.prototype,"visible",1);gt([It()],q.prototype,"_value",2);var Wr=Object.defineProperty,qn=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Wr(t,e,n),n};const oi=class oi extends k{constructor(){super(...arguments),this.floating=!1,this._layouts={},this._lastScreenType=ne(),this._updateFunctions={}}set layouts(t){this._layouts=t;const e={};for(const[s,n]of Object.entries(t))for(const r in n.elements)e[s]||(e[s]={}),e[s][r]=o=>{const a=this._updateFunctions[s];if(!a)return;const l=a[r];l&&l(o)};this.updateComponent=e}get layouts(){return this._layouts}getLayoutAreas(t){const{template:e}=t,r=e.split(`
`).map(a=>a.trim()).map(a=>a.split('"')[1]).filter(a=>a!==void 0).flatMap(a=>a.split(/\s+/));return[...new Set(r)].filter(a=>a!=="")}applyScreenRules(t,e){for(const[s,n]of Object.entries(e)){const r=t[s];if(!r)continue;const o=ne();Array.isArray(n)&&n.includes(o)||typeof n=="string"&&n===o?(r.style.removeProperty("display"),r.activationButton.style.removeProperty("display")):(r.style.setProperty("display","none"),r.activationButton.style.setProperty("display","none"))}}setCSSGridTemplate(){if(!this.layout)return;const t=this.layouts[this.layout];if(!t)return;const e=t.elements;t.screenRules&&typeof t.screenRules=="object"&&this.applyScreenRules(e,t.screenRules);const s=ne();let n=t.template;s==="mobile"?n=t.mobileTempalte||t.tabletTemplate||t.template:s==="tablet"&&(n=t.tabletTemplate||t.template),this.style.setProperty("grid-template",n)}firstUpdated(){this._onLayoutChange=new Event("layoutchange"),new ResizeObserver(()=>{const e=ne();this._lastScreenType!==e&&(this._lastScreenType=e,this.layouts={...this._layouts},this.setCSSGridTemplate())}).observe(this)}render(){if(this.layout){if(this._updateFunctions={},this.layouts[this.layout]){this.innerHTML="",this._updateFunctions[this.layout]={};const t=this._updateFunctions[this.layout],e=this.layouts[this.layout],n=this.getLayoutAreas(e).map(r=>{const o=e.elements[r];if(!o)return null;if(o instanceof HTMLElement)return o.style.gridArea=r,o;if("template"in o){const{template:l,initialState:c}=o,[u,h]=he.create(l,c);return u.style.gridArea=r,t[r]=h,u}return he.create(o)}).filter(r=>!!r);this.setCSSGridTemplate(),this.append(...n),this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange)}}else this._updateFunctions={},this.innerHTML="",this.style.gridTemplate="",this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange);return f`<slot></slot>`}};oi.styles=$`
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
  `;let Yt=oi;qn([d({type:Boolean,reflect:!0})],Yt.prototype,"floating");qn([d({type:String,reflect:!0})],Yt.prototype,"layout");const ve=class ve extends k{render(){return f`
      <iconify-icon .icon=${this.icon} height="none"></iconify-icon>
    `}};ve.styles=$`
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
  `,ve.properties={icon:{type:String}};let We=ve;var Yr=Object.defineProperty,ke=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Yr(t,e,n),n};const ai=class ai extends k{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change")}get value(){const t={};for(const e of this.children){const s=e;"value"in s?t[s.name||s.label]=s.value:"checked"in s&&(t[s.name||s.label]=s.checked)}return t}set value(t){const e=[...this.children];for(const s in t){const n=e.find(a=>{const l=a;return l.name===s||l.label===s});if(!n)continue;const r=n,o=t[s];typeof o=="boolean"?r.checked=o:r.value=o}}render(){return f`
      <div class="parent">
        ${this.label||this.icon?f`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="input">
          <slot></slot>
        </div>
      </div>
    `}};ai.styles=$`
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
  `;let xt=ai;ke([d({type:String,reflect:!0})],xt.prototype,"name");ke([d({type:String,reflect:!0})],xt.prototype,"label");ke([d({type:String,reflect:!0})],xt.prototype,"icon");ke([d({type:Boolean,reflect:!0})],xt.prototype,"vertical");var Qr=Object.defineProperty,Jt=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Qr(t,e,n),n};const li=class li extends k{constructor(){super(...arguments),this.labelHidden=!1,this.iconHidden=!1,this.vertical=!1}get value(){return this.textContent?$e(this.textContent):this.textContent}render(){return f`
      <div class="parent" .title=${this.textContent??""}>
        ${this.img?f`<img .src=${this.img} .alt=${this.textContent||""} />`:null}
        ${!this.iconHidden&&this.icon?f`<bim-icon .icon=${this.icon}></bim-icon>`:null}
        <p><slot></slot></p>
      </div>
    `}};li.styles=$`
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
  `;let ut=li;Jt([d({type:String,reflect:!0})],ut.prototype,"img");Jt([d({type:Boolean,attribute:"label-hidden",reflect:!0})],ut.prototype,"labelHidden");Jt([d({type:String,reflect:!0})],ut.prototype,"icon");Jt([d({type:Boolean,attribute:"icon-hidden",reflect:!0})],ut.prototype,"iconHidden");Jt([d({type:Boolean,reflect:!0})],ut.prototype,"vertical");var Ur=Object.defineProperty,Gr=Object.getOwnPropertyDescriptor,D=(i,t,e,s)=>{for(var n=s>1?void 0:s?Gr(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Ur(t,e,n),n};const ci=class ci extends k{constructor(){super(...arguments),this._value=0,this.vertical=!1,this.slider=!1,this._input=kt(),this.onValueChange=new Event("change")}set value(t){this.setValue(t.toString())}get value(){return this._value}onChange(t){t.stopPropagation();const{value:e}=this._input;e&&this.setValue(e.value)}setValue(t){const{value:e}=this._input;let s=t;if(s=s.replace(/[^0-9.-]/g,""),s=s.replace(/(\..*)\./g,"$1"),s.endsWith(".")||(s.lastIndexOf("-")>0&&(s=s[0]+s.substring(1).replace(/-/g,"")),s==="-"||s==="-0"))return;let n=Number(s);Number.isNaN(n)||(n=this.min!==void 0?Math.max(n,this.min):n,n=this.max!==void 0?Math.min(n,this.max):n,this.value!==n&&(this._value=n,e&&(e.value=this.value.toString()),this.requestUpdate(),this.dispatchEvent(this.onValueChange)))}onBlur(){const{value:t}=this._input;t&&Number.isNaN(Number(t.value))&&(t.value=this.value.toString())}onSliderPointerDown(t){const e=t.pointerType==="touch",s=.5;document.body.style.cursor="w-resize";const{clientX:n}=t,r=this.value;let o=!1;const a=u=>{var y;o=!0;const h=u instanceof TouchEvent?u.touches[0].clientX:u.clientX;console.log(h);const p=this.step??1,b=((y=p.toString().split(".")[1])==null?void 0:y.length)||0;let g=1/(this.sensitivity??1);g*=e?s:1;const v=(h-n)/g;if(Math.floor(Math.abs(v))!==Math.abs(v)&&!e)return;const m=r+v*p;this.setValue(m.toFixed(b))},l=()=>{this.slider=!0,this.removeEventListener("blur",l)},c=()=>{document.removeEventListener(`${e?"touch":"mouse"}move`,a),document.body.style.cursor="default",o?o=!1:(this.addEventListener("blur",l),this.slider=!1,requestAnimationFrame(()=>this.focus())),document.removeEventListener(`${e?"touchend":"mouseup"}`,c)};document.addEventListener(`${e?"touch":"mouse"}move`,a),document.addEventListener(`${e?"touchend":"mouseup"}`,c)}onFocus(t){t.stopPropagation();const e=s=>{s.key==="Escape"&&(this.blur(),window.removeEventListener("keydown",e))};window.addEventListener("keydown",e)}connectedCallback(){super.connectedCallback(),this.min&&this.min>this.value&&(this._value=this.min),this.max&&this.max<this.value&&(this._value=this.max)}focus(){const{value:t}=this._input;t&&t.focus()}render(){const t=f`
      ${this.pref||this.icon?f`<bim-label
            style="pointer-events: auto"
            @pointerdown=${this.onSliderPointerDown}
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
      ${this.suffix?f`<bim-label
            style="pointer-events: auto"
            @pointerdown=${this.onSliderPointerDown}
            >${this.suffix}</bim-label
          >`:null}
    `,e=this.min??-1/0,s=this.max??1/0,n=100*(this.value-e)/(s-e),r=f`
      <style>
        .slider-indicator {
          width: ${`${n}%`};
        }
      </style>
      <div class="slider" @pointerdown=${this.onSliderPointerDown}>
        <div class="slider-indicator"></div>
        ${this.pref||this.icon?f`<bim-label
              style="z-index: 1; margin-right: 0.125rem"
              .icon=${this.icon}
              >${`${this.pref}: `}</bim-label
            >`:null}
        <bim-label style="z-index: 1;">${this.value}</bim-label>
        ${this.suffix?f`<bim-label style="z-index: 1;">${this.suffix}</bim-label>`:null}
      </div>
    `,o=`${this.label||this.name||this.pref?`${this.label||this.name||this.pref}: `:""}${this.value}${this.suffix??""}`;return f`
      <bim-input
        title=${o}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        ${this.slider?r:t}
      </bim-input>
    `}};ci.styles=$`
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
  `;let I=ci;D([d({type:String,reflect:!0})],I.prototype,"name",2);D([d({type:String,reflect:!0})],I.prototype,"icon",2);D([d({type:String,reflect:!0})],I.prototype,"label",2);D([d({type:String,reflect:!0})],I.prototype,"pref",2);D([d({type:Number,reflect:!0})],I.prototype,"min",2);D([d({type:Number,reflect:!0})],I.prototype,"value",1);D([d({type:Number,reflect:!0})],I.prototype,"step",2);D([d({type:Number,reflect:!0})],I.prototype,"sensitivity",2);D([d({type:Number,reflect:!0})],I.prototype,"max",2);D([d({type:String,reflect:!0})],I.prototype,"suffix",2);D([d({type:Boolean,reflect:!0})],I.prototype,"vertical",2);D([d({type:Boolean,reflect:!0})],I.prototype,"slider",2);var Xr=Object.defineProperty,Kr=Object.getOwnPropertyDescriptor,Zt=(i,t,e,s)=>{for(var n=s>1?void 0:s?Kr(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Xr(t,e,n),n};const ui=class ui extends k{constructor(){super(...arguments),this.onValueChange=new Event("change"),this._hidden=!1,this.headerHidden=!1,this.valueTransform={},this.activationButton=document.createElement("bim-button")}set hidden(t){this._hidden=t,this.activationButton.active=!t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}get value(){return pe(this,this.valueTransform)}set value(t){const e=[...this.children];for(const s in t){const n=e.find(o=>{const a=o;return a.name===s||a.label===s});if(!n)continue;const r=n;r.value=t[s]}}animatePanles(){const t=[{maxHeight:"100vh",maxWidth:"100vw",opacity:1},{maxHeight:"100vh",maxWidth:"100vw",opacity:0},{maxHeight:0,maxWidth:0,opacity:0}];this.animate(t,{duration:300,easing:"cubic-bezier(0.65, 0.05, 0.36, 1)",direction:this.hidden?"normal":"reverse",fill:"forwards"})}connectedCallback(){super.connectedCallback(),this.activationButton.active=!this.hidden,this.activationButton.onclick=()=>{this.hidden=!this.hidden,this.animatePanles()}}disconnectedCallback(){super.disconnectedCallback(),this.activationButton.remove()}collapseSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!0}expandSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!1}render(){return this.activationButton.icon=this.icon,this.activationButton.label=this.label||this.name,this.activationButton.tooltipTitle=this.label||this.name,f`
      <div class="parent">
        ${this.label||this.name||this.icon?f`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `}};ui.styles=[mt.scrollbar,$`
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
    `];let Z=ui;Zt([d({type:String,reflect:!0})],Z.prototype,"icon",2);Zt([d({type:String,reflect:!0})],Z.prototype,"name",2);Zt([d({type:String,reflect:!0})],Z.prototype,"label",2);Zt([d({type:Boolean,reflect:!0})],Z.prototype,"hidden",1);Zt([d({type:Boolean,attribute:"header-hidden",reflect:!0})],Z.prototype,"headerHidden",2);var Jr=Object.defineProperty,te=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Jr(t,e,n),n};const di=class di extends k{constructor(){super(...arguments),this.onValueChange=new Event("change"),this.valueTransform={},this.componentHeight=-1}get value(){const t=this.parentElement;let e;return t instanceof Z&&(e=t.valueTransform),Object.values(this.valueTransform).length!==0&&(e=this.valueTransform),pe(this,e)}set value(t){const e=[...this.children];for(const s in t){const n=e.find(o=>{const a=o;return a.name===s||a.label===s});if(!n)continue;const r=n;r.value=t[s]}}animateHeader(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(".components");this.componentHeight<0&&(this.collapsed?this.componentHeight=t.clientHeight:(t.style.setProperty("transition","none"),t.style.setProperty("height","auto"),t.style.setProperty("padding","0.125rem 1rem 1rem"),this.componentHeight=t.clientHeight,requestAnimationFrame(()=>{t.style.setProperty("height","0px"),t.style.setProperty("padding","0 1rem 0"),t.style.setProperty("transition","height 0.25s cubic-bezier(0.65, 0.05, 0.36, 1), padding 0.25s cubic-bezier(0.65, 0.05, 0.36, 1)")}))),this.collapsed?(t.style.setProperty("height",`${this.componentHeight}px`),requestAnimationFrame(()=>{t.style.setProperty("height","0px"),t.style.setProperty("padding","0 1rem 0")})):(t.style.setProperty("height","0px"),t.style.setProperty("padding","0 1rem 0"),requestAnimationFrame(()=>{t.style.setProperty("height",`${this.componentHeight}px`),t.style.setProperty("padding","0.125rem 1rem 1rem")}))}onHeaderClick(){this.fixed||(this.collapsed=!this.collapsed,this.animateHeader())}handelSlotChange(t){t.target.assignedElements({flatten:!0}).forEach((n,r)=>{const o=r*.05;n.style.setProperty("transition-delay",`${o}s`)})}handlePointerEnter(){const t=this.renderRoot.querySelector(".expand-icon");this.collapsed?t==null||t.style.setProperty("animation","collapseAnim 0.5s"):t==null||t.style.setProperty("animation","expandAnim 0.5s")}handlePointerLeave(){const t=this.renderRoot.querySelector(".expand-icon");t==null||t.style.setProperty("animation","none")}render(){const t=this.label||this.icon||this.name||this.fixed,e=f`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
      class="expand-icon"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>`,s=f`
      <div
        class="header"
        title=${this.label??""}
        @pointerenter=${this.handlePointerEnter}
        @pointerleave=${this.handlePointerLeave}
        @click=${this.onHeaderClick}
      >
        ${this.label||this.icon||this.name?f`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        ${this.fixed?null:e}
      </div>
    `;return f`
      <div class="parent">
        ${t?s:null}
        <div class="components">
          <slot @slotchange=${this.handelSlotChange}></slot>
        </div>
      </div>
    `}};di.styles=[mt.scrollbar,$`
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
    `];let dt=di;te([d({type:String,reflect:!0})],dt.prototype,"icon");te([d({type:String,reflect:!0})],dt.prototype,"label");te([d({type:String,reflect:!0})],dt.prototype,"name");te([d({type:Boolean,reflect:!0})],dt.prototype,"fixed");te([d({type:Boolean,reflect:!0})],dt.prototype,"collapsed");var Zr=Object.defineProperty,ee=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Zr(t,e,n),n};const hi=class hi extends k{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change"),this._canEmitEvents=!1,this._value=document.createElement("bim-option"),this.onOptionClick=t=>{this._value=t.target,this.dispatchEvent(this.onValueChange);for(const e of this.children)e instanceof O&&(e.checked=e===t.target)}}get _options(){return[...this.querySelectorAll("bim-option")]}set value(t){const e=this.findOption(t);if(e){for(const s of this._options)s.checked=s===e;this._value=e,this._canEmitEvents&&this.dispatchEvent(this.onValueChange)}}get value(){return this._value.value}onSlotChange(t){const e=t.target.assignedElements();for(const s of e)s instanceof O&&(s.noMark=!0,s.removeEventListener("click",this.onOptionClick),s.addEventListener("click",this.onOptionClick))}findOption(t){return this._options.find(s=>s instanceof O?s.label===t||s.value===t:!1)}doubleRequestAnimationFrames(t){requestAnimationFrame(()=>requestAnimationFrame(t))}setAnimatedBackgound(t=!1){var n,r;const e=this.renderRoot.querySelector(".animated-background"),s=(r=(n=this.shadowRoot)==null?void 0:n.querySelector("slot"))==null?void 0:r.assignedElements({flatten:!0}).filter(o=>o.hasAttribute("checked"))[0];requestAnimationFrame(()=>{var l,c,u,h;const o=(h=(u=(c=(l=s==null?void 0:s.parentElement)==null?void 0:l.shadowRoot)==null?void 0:c.querySelector("bim-input"))==null?void 0:u.shadowRoot)==null?void 0:h.querySelector(".input"),a={width:s==null?void 0:s.clientWidth,height:s==null?void 0:s.clientHeight,top:((s==null?void 0:s.offsetTop)??0)-((o==null?void 0:o.offsetTop)??0),left:((s==null?void 0:s.offsetLeft)??0)-((o==null?void 0:o.offsetLeft)??0)};e==null||e.style.setProperty("width",`${a.width}px`),e==null||e.style.setProperty("height",`${a.height}px`),e==null||e.style.setProperty("top",`${a.top}px`),e==null||e.style.setProperty("left",`${a.left}px`)}),t&&this.doubleRequestAnimationFrames(()=>{const a="ease";e==null||e.style.setProperty("transition",`width ${.3}s ${a}, height ${.3}s ${a}, top ${.3}s ${a}, left ${.3}s ${a}`)})}firstUpdated(){const t=[...this.children].find(e=>e instanceof O&&e.checked);t&&(this._value=t),window.addEventListener("load",()=>{this.setAnimatedBackgound(!0)}),new ResizeObserver(()=>{this.setAnimatedBackgound()}).observe(this)}render(){return f`
      <bim-input
        .vertical=${this.vertical}
        .label=${this.label}
        .icon=${this.icon}
        @click=${this.setAnimatedBackgound}
      >
        <div class="animated-background"></div>
        <slot @slotchange=${this.onSlotChange}></slot>
      </bim-input>
    `}};hi.styles=$`
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
  `;let ht=hi;ee([d({type:String,reflect:!0})],ht.prototype,"name");ee([d({type:String,reflect:!0})],ht.prototype,"icon");ee([d({type:String,reflect:!0})],ht.prototype,"label");ee([d({type:Boolean,reflect:!0})],ht.prototype,"vertical");ee([It()],ht.prototype,"_value");const to=()=>f`
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
  `,eo=()=>f`
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
  `;var io=Object.defineProperty,no=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&io(t,e,n),n};const pi=class pi extends k{constructor(){super(...arguments),this.column="",this.columnIndex=0,this.rowData={}}get data(){return this.column?this.rowData[this.column]:null}render(){return f`
      <style>
        :host {
          grid-area: ${this.column??"unset"};
        }
      </style>
      <slot></slot>
    `}};pi.styles=$`
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
  `;let fe=pi;no([d({type:String,reflect:!0})],fe.prototype,"column");var so=Object.defineProperty,ro=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&so(t,e,n),n};const fi=class fi extends k{constructor(){super(...arguments),this._groups=[],this.data=[],this.table=this.closest("bim-table")}toggleGroups(t,e=!1){for(const s of this._groups)s.childrenHidden=typeof t>"u"?!s.childrenHidden:!t,e&&s.toggleChildren(t,e)}render(){return this._groups=[],f`
      <slot></slot>
      ${this.data.map(t=>{const e=document.createElement("bim-table-group");return this._groups.push(e),e.table=this.table,e.data=t,e})}
    `}};fi.styles=$`
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
  `;let me=fi;ro([d({type:Array,attribute:!1})],me.prototype,"data");var oo=Object.defineProperty,ao=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&oo(t,e,n),n};const mi=class mi extends k{constructor(){super(...arguments),this.data={data:{}},this.childrenHidden=!0,this.table=this.closest("bim-table")}connectedCallback(){super.connectedCallback(),this.table&&this.table.expanded?this.childrenHidden=!1:this.childrenHidden=!0}toggleChildren(t,e=!1){this._children&&(this.childrenHidden=typeof t>"u"?!this.childrenHidden:!t,e&&this._children.toggleGroups(t,e),this.animateTableChildren(!0))}animateTableChildren(t=!0){if(!t){requestAnimationFrame(()=>{var c;const o=this.renderRoot.querySelector(".caret"),a=this.renderRoot.querySelector(".branch-vertical"),l=(c=this.renderRoot.querySelector("bim-table-children"))==null?void 0:c.querySelector(".branch-vertical");o.style.setProperty("transform",`translateY(-50%) rotate(${this.childrenHidden?"0":"90"}deg)`),a.style.setProperty("transform",`scaleY(${this.childrenHidden?"0":"1"})`),l==null||l.style.setProperty("transform",`scaleY(${this.childrenHidden?"0":"1"})`)});return}const e=900,s=50,n=350,r=350;requestAnimationFrame(()=>{var v;const o=this.renderRoot.querySelector("bim-table-children"),a=this.renderRoot.querySelector(".caret"),l=this.renderRoot.querySelector(".branch-vertical"),c=(v=this.renderRoot.querySelector("bim-table-children"))==null?void 0:v.querySelector(".branch-vertical"),u=()=>{const m=o==null?void 0:o.renderRoot.querySelectorAll("bim-table-group");m==null||m.forEach((y,C)=>{y.style.setProperty("opacity","0"),y.style.setProperty("left","-30px");const x=[{opacity:"0",left:"-30px"},{opacity:"1",left:"0"}];y.animate(x,{duration:e/2,delay:50+C*s,easing:"cubic-bezier(0.65, 0.05, 0.36, 1)",fill:"forwards"})})},h=()=>{const m=[{transform:"translateY(-50%) rotate(90deg)"},{transform:"translateY(-50%) rotate(0deg)"}];a==null||a.animate(m,{duration:r,easing:"cubic-bezier(0.68, -0.55, 0.27, 1.55)",fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})},p=()=>{const m=[{transform:"scaleY(1)"},{transform:"scaleY(0)"}];l==null||l.animate(m,{duration:n,easing:"cubic-bezier(0.4, 0, 0.2, 1)",delay:s,fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})},b=()=>{var y;const m=(y=this.renderRoot.querySelector("bim-table-row"))==null?void 0:y.querySelector(".branch-horizontal");if(m){m.style.setProperty("transform-origin","center right");const C=[{transform:"scaleX(0)"},{transform:"scaleX(1)"}];m.animate(C,{duration:n,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})}},g=()=>{const m=[{transform:"scaleY(0)"},{transform:"scaleY(1)"}];c==null||c.animate(m,{duration:n*1.2,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"forwards",delay:(s+n)*.7})};u(),h(),p(),b(),g()})}firstUpdated(){this.renderRoot.querySelectorAll(".caret").forEach(e=>{var s,n,r;if(!this.childrenHidden){e.style.setProperty("transform","translateY(-50%) rotate(90deg)");const a=(s=e.parentElement)==null?void 0:s.querySelector(".branch-horizontal");a&&a.style.setProperty("transform","scaleX(0)");const l=(r=(n=e.parentElement)==null?void 0:n.parentElement)==null?void 0:r.querySelectorAll(".branch-vertical");l==null||l.forEach(c=>{c.style.setProperty("transform","scaleY(1)")})}})}render(){if(!this.table)throw new Error("TableGroup: parent table wasn't found!");const t=this.table.getGroupIndentation(this.data)??0,e=f`
      ${this.table.noIndentation?null:f`
            <style>
              .branch-vertical {
                left: ${t+(this.table.selectableRows?1.9375:.5625)}rem;
              }
            </style>
            <div class="branch branch-vertical"></div>
          `}
    `,s=document.createDocumentFragment();Mt(e,s);let n=null;this.table.noIndentation||(n=document.createElement("div"),n.classList.add("branch","branch-horizontal"),n.style.left=`${t-1+(this.table.selectableRows?2.05:.5625)}rem`);let r=null;if(!this.table.noIndentation){const l=document.createElementNS("http://www.w3.org/2000/svg","svg");l.setAttribute("height","9.9"),l.setAttribute("width","7.5"),l.setAttribute("viewBox","0 0 4.6666672 7.7");const c=document.createElementNS("http://www.w3.org/2000/svg","path");c.setAttribute("d","m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"),l.append(c),r=document.createElement("div"),r.addEventListener("click",u=>{u.stopPropagation(),this.toggleChildren()}),r.classList.add("caret"),r.style.left=`${(this.table.selectableRows?1.5:.125)+t}rem`,r.append(l)}const o=document.createElement("bim-table-row");this.data.children&&o.append(s),o.table=this.table,o.data=this.data.data,this.table.dispatchEvent(new CustomEvent("rowcreated",{detail:{row:o}})),r&&this.data.children&&o.append(r),t!==0&&n&&o.append(n);let a;if(this.data.children){a=document.createElement("bim-table-children"),this._children=a,a.table=this.table,a.data=this.data.children;const l=document.createDocumentFragment();Mt(e,l),a.append(l),this.childrenHidden&&a.setAttribute("hidden","")}return f`
      <div class="parent">${o} ${this.childrenHidden?null:a}</div>
    `}};mi.styles=$`
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
  `;let be=mi;ao([d({type:Boolean,attribute:"children-hidden",reflect:!0})],be.prototype,"childrenHidden");var lo=Object.defineProperty,Rt=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&lo(t,e,n),n};const bi=class bi extends k{constructor(){super(...arguments),this.selected=!1,this.columns=[],this.hiddenColumns=[],this.data={},this.isHeader=!1,this.table=this.closest("bim-table"),this.onTableColumnsChange=()=>{this.table&&(this.columns=this.table.columns)},this.onTableColumnsHidden=()=>{this.table&&(this.hiddenColumns=this.table.hiddenColumns)},this._observer=new IntersectionObserver(t=>{this._intersecting=t[0].isIntersecting},{rootMargin:"36px"})}get _columnNames(){return this.columns.filter(s=>!this.hiddenColumns.includes(s.name)).map(s=>s.name)}get _columnWidths(){return this.columns.filter(s=>!this.hiddenColumns.includes(s.name)).map(s=>s.width)}get _isSelected(){var t;return(t=this.table)==null?void 0:t.selection.has(this.data)}onSelectionChange(t){if(!this.table)return;const e=t.target;this.selected=e.value,e.value?(this.table.selection.add(this.data),this.table.dispatchEvent(new CustomEvent("rowselected",{detail:{data:this.data}}))):(this.table.selection.delete(this.data),this.table.dispatchEvent(new CustomEvent("rowdeselected",{detail:{data:this.data}})))}connectedCallback(){super.connectedCallback(),this._observer.observe(this),this.table&&(this.columns=this.table.columns,this.hiddenColumns=this.table.hiddenColumns,this.table.addEventListener("columnschange",this.onTableColumnsChange),this.table.addEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",this._isSelected))}disconnectedCallback(){super.disconnectedCallback(),this._observer.unobserve(this),this.table&&(this.columns=[],this.hiddenColumns=[],this.table.removeEventListener("columnschange",this.onTableColumnsChange),this.table.removeEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",!1))}compute(){if(!this.table)throw new Error("TableRow: parent table wasn't found!");const t=this.table.getRowIndentation(this.data)??0,e=this.isHeader?this.data:this.table.applyDataTransform(this.data)??this.data,s=[];for(const n in e){if(this.hiddenColumns.includes(n))continue;const r=e[n];let o;if(typeof r=="string"||typeof r=="boolean"||typeof r=="number"?(o=document.createElement("bim-label"),o.textContent=String(r)):r instanceof HTMLElement?o=r:(o=document.createDocumentFragment(),Mt(r,o)),!o)continue;const a=document.createElement("bim-table-cell");a.append(o),a.column=n,this._columnNames.indexOf(n)===0&&(a.style.marginLeft=`${this.table.noIndentation?0:t+.75}rem`);const l=this._columnNames.indexOf(n);a.setAttribute("data-column-index",String(l)),a.toggleAttribute("data-no-indentation",l===0&&this.table.noIndentation),a.toggleAttribute("data-cell-header",this.isHeader),a.rowData=this.data,this.table.dispatchEvent(new CustomEvent("cellcreated",{detail:{cell:a}})),s.push(a)}return this.style.gridTemplateAreas=`"${this.table.selectableRows?"Selection":""} ${this._columnNames.join(" ")}"`,this.style.gridTemplateColumns=`${this.table.selectableRows?"1.6rem":""} ${this._columnWidths.join(" ")}`,f`
      ${!this.isHeader&&this.table.selectableRows?f`<bim-checkbox
            @change=${this.onSelectionChange}
            .checked=${this._isSelected}
            style="align-self: center; justify-self: center"
          ></bim-checkbox>`:null}
      ${s}
      <slot></slot>
    `}render(){return f`${this._intersecting?this.compute():f``}`}};bi.styles=$`
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
  `;let tt=bi;Rt([d({type:Boolean,reflect:!0})],tt.prototype,"selected");Rt([d({attribute:!1})],tt.prototype,"columns");Rt([d({attribute:!1})],tt.prototype,"hiddenColumns");Rt([d({attribute:!1})],tt.prototype,"data");Rt([d({type:Boolean,attribute:"is-header",reflect:!0})],tt.prototype,"isHeader");Rt([It()],tt.prototype,"_intersecting");var co=Object.defineProperty,uo=Object.getOwnPropertyDescriptor,V=(i,t,e,s)=>{for(var n=s>1?void 0:s?uo(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&co(t,e,n),n};const gi=class gi extends k{constructor(){super(...arguments),this._filteredData=[],this.headersHidden=!1,this.minColWidth="4rem",this._columns=[],this._textDelimiters={comma:",",tab:"	"},this._queryString=null,this._data=[],this.expanded=!1,this.preserveStructureOnFilter=!1,this.indentationInText=!1,this.dataTransform={},this.selectableRows=!1,this.selection=new Set,this.noIndentation=!1,this.loading=!1,this._errorLoading=!1,this._onColumnsHidden=new Event("columnshidden"),this._hiddenColumns=[],this._stringFilterFunction=(t,e)=>Object.values(e.data).some(n=>String(n).toLowerCase().includes(t.toLowerCase())),this._queryFilterFunction=(t,e)=>{let s=!1;const n=Ne(t)??[];for(const r of n){if("queries"in r){s=!1;break}const{condition:o,value:a}=r;let{key:l}=r;if(l.startsWith("[")&&l.endsWith("]")){const c=l.replace("[","").replace("]","");l=c,s=Object.keys(e.data).filter(p=>p.includes(c)).map(p=>Gi(e.data[p],o,a)).some(p=>p)}else s=Gi(e.data[l],o,a);if(!s)break}return s}}set columns(t){const e=[];for(const s of t){const n=typeof s=="string"?{name:s,width:`minmax(${this.minColWidth}, 1fr)`}:s;e.push(n)}this._columns=e,this.computeMissingColumns(this.data),this.dispatchEvent(new Event("columnschange"))}get columns(){return this._columns}get _headerRowData(){const t={};for(const e of this.columns){const{name:s}=e;t[s]=String(s)}return t}get value(){return this._filteredData}set queryString(t){this.toggleAttribute("data-processing",!0),this._queryString=t&&t.trim()!==""?t.trim():null,this.updateFilteredData(),this.toggleAttribute("data-processing",!1)}get queryString(){return this._queryString}set data(t){this._data=t,this.updateFilteredData(),this.computeMissingColumns(t)&&(this.columns=this._columns)}get data(){return this._data}get dataAsync(){return new Promise(t=>{setTimeout(()=>{t(this.data)})})}set hiddenColumns(t){this._hiddenColumns=t,setTimeout(()=>{this.dispatchEvent(this._onColumnsHidden)})}get hiddenColumns(){return this._hiddenColumns}updateFilteredData(){this.queryString?(Ne(this.queryString)?(this.filterFunction=this._queryFilterFunction,this._filteredData=this.filter(this.queryString)):(this.filterFunction=this._stringFilterFunction,this._filteredData=this.filter(this.queryString)),this.preserveStructureOnFilter&&(this._expandedBeforeFilter===void 0&&(this._expandedBeforeFilter=this.expanded),this.expanded=!0)):(this.preserveStructureOnFilter&&this._expandedBeforeFilter!==void 0&&(this.expanded=this._expandedBeforeFilter,this._expandedBeforeFilter=void 0),this._filteredData=this.data)}computeMissingColumns(t){let e=!1;for(const s of t){const{children:n,data:r}=s;for(const o in r)this._columns.map(l=>typeof l=="string"?l:l.name).includes(o)||(this._columns.push({name:o,width:`minmax(${this.minColWidth}, 1fr)`}),e=!0);if(n){const o=this.computeMissingColumns(n);o&&!e&&(e=o)}}return e}generateText(t="comma",e=this.value,s="",n=!0){const r=this._textDelimiters[t];let o="";const a=this.columns.map(l=>l.name);if(n){this.indentationInText&&(o+=`Indentation${r}`);const l=`${a.join(r)}
`;o+=l}for(const[l,c]of e.entries()){const{data:u,children:h}=c,p=this.indentationInText?`${s}${l+1}${r}`:"",b=a.map(v=>u[v]??""),g=`${p}${b.join(r)}
`;o+=g,h&&(o+=this.generateText(t,c.children,`${s}${l+1}.`,!1))}return o}get csv(){return this.generateText("comma")}get tsv(){return this.generateText("tab")}applyDataTransform(t){const e={};for(const n of Object.keys(this.dataTransform)){const r=this.columns.find(o=>o.name===n);r&&r.forceDataTransform&&(n in t||(t[n]=""))}const s=t;for(const n in s){const r=this.dataTransform[n];r?e[n]=r(s[n],t):e[n]=t[n]}return e}downloadData(t="BIM Table Data",e="json"){let s=null;if(e==="json"&&(s=new File([JSON.stringify(this.value,void 0,2)],`${t}.json`)),e==="csv"&&(s=new File([this.csv],`${t}.csv`)),e==="tsv"&&(s=new File([this.tsv],`${t}.tsv`)),!s)return;const n=document.createElement("a");n.href=URL.createObjectURL(s),n.download=s.name,n.click(),URL.revokeObjectURL(n.href)}getRowIndentation(t,e=this.value,s=0){for(const n of e){if(n.data===t)return s;if(n.children){const r=this.getRowIndentation(t,n.children,s+1);if(r!==null)return r}}return null}getGroupIndentation(t,e=this.value,s=0){for(const n of e){if(n===t)return s;if(n.children){const r=this.getGroupIndentation(t,n.children,s+1);if(r!==null)return r}}return null}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new Event("connected"))}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new Event("disconnected"))}async loadData(t=!1){if(this._filteredData.length!==0&&!t||!this.loadFunction)return!1;this.loading=!0;try{const e=await this.loadFunction();return this.data=e,this.loading=!1,this._errorLoading=!1,!0}catch(e){if(this.loading=!1,this._filteredData.length!==0)return!1;const s=this.querySelector("[slot='error-loading']"),n=s==null?void 0:s.querySelector("[data-table-element='error-message']");return e instanceof Error&&n&&e.message.trim()!==""&&(n.textContent=e.message),this._errorLoading=!0,!1}}filter(t,e=this.filterFunction??this._stringFilterFunction,s=this.data){const n=[];for(const r of s)if(e(t,r)){if(this.preserveStructureOnFilter){const a={data:r.data};if(r.children){const l=this.filter(t,e,r.children);l.length&&(a.children=l)}n.push(a)}else if(n.push({data:r.data}),r.children){const a=this.filter(t,e,r.children);n.push(...a)}}else if(r.children){const a=this.filter(t,e,r.children);this.preserveStructureOnFilter&&a.length?n.push({data:r.data,children:a}):n.push(...a)}return n}get _missingDataElement(){return this.querySelector("[slot='missing-data']")}render(){if(this.loading)return to();if(this._errorLoading)return f`<slot name="error-loading"></slot>`;if(this._filteredData.length===0&&this._missingDataElement)return f`<slot name="missing-data"></slot>`;const t=document.createElement("bim-table-row");t.table=this,t.isHeader=!0,t.data=this._headerRowData,t.style.gridArea="Header",t.style.position="sticky",t.style.top="0",t.style.zIndex="5";const e=document.createElement("bim-table-children");return e.table=this,e.data=this.value,e.style.gridArea="Body",e.style.backgroundColor="transparent",f`
      <div class="parent">
        ${this.headersHidden?null:t} ${eo()}
        <div style="overflow-x: hidden; grid-area: Body">${e}</div>
      </div>
    `}};gi.styles=[mt.scrollbar,$`
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
    `];let L=gi;V([It()],L.prototype,"_filteredData",2);V([d({type:Boolean,attribute:"headers-hidden",reflect:!0})],L.prototype,"headersHidden",2);V([d({type:String,attribute:"min-col-width",reflect:!0})],L.prototype,"minColWidth",2);V([d({type:Array,attribute:!1})],L.prototype,"columns",1);V([d({type:Array,attribute:!1})],L.prototype,"data",1);V([d({type:Boolean,reflect:!0})],L.prototype,"expanded",2);V([d({type:Boolean,reflect:!0,attribute:"selectable-rows"})],L.prototype,"selectableRows",2);V([d({attribute:!1})],L.prototype,"selection",2);V([d({type:Boolean,attribute:"no-indentation",reflect:!0})],L.prototype,"noIndentation",2);V([d({type:Boolean,reflect:!0})],L.prototype,"loading",2);V([It()],L.prototype,"_errorLoading",2);var ho=Object.defineProperty,po=Object.getOwnPropertyDescriptor,Bt=(i,t,e,s)=>{for(var n=s>1?void 0:s?po(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&ho(t,e,n),n};const vi=class vi extends k{constructor(){super(...arguments),this._switchers=[],this.bottom=!1,this.switchersHidden=!1,this.floating=!1,this.switchersFull=!1,this.onTabHiddenChange=t=>{const e=t.target;e instanceof z&&!e.hidden&&(e.removeEventListener("hiddenchange",this.onTabHiddenChange),this.tab=e.name,e.addEventListener("hiddenchange",this.onTabHiddenChange))}}set tab(t){this._tab=t;const e=[...this.children],s=e.find(n=>n instanceof z&&n.name===t);for(const n of e){if(!(n instanceof z))continue;n.hidden=s!==n;const r=this.getTabSwitcher(n.name);r&&r.toggleAttribute("data-active",!n.hidden)}s||(this._tab="hidden",this.setAttribute("tab","hidden"))}get tab(){return this._tab}getTabSwitcher(t){return this._switchers.find(s=>s.getAttribute("data-name")===t)}createSwitchers(){this._switchers=[];for(const t of this.children){if(!(t instanceof z))continue;const e=document.createElement("div");e.addEventListener("click",()=>{this.tab===t.name?this.toggleAttribute("tab",!1):this.tab=t.name,this.setAnimatedBackgound()}),e.setAttribute("data-name",t.name),e.className="switcher";const s=document.createElement("bim-label");s.textContent=t.label??null,s.icon=t.icon,e.append(s),this._switchers.push(e)}}updateSwitchers(){for(const t of this.children){if(!(t instanceof z))continue;const e=this._switchers.find(n=>n.getAttribute("data-name")===t.name);if(!e)continue;const s=e.querySelector("bim-label");s&&(s.textContent=t.label??null,s.icon=t.icon)}}onSlotChange(t){this.createSwitchers();const e=t.target.assignedElements(),s=e.find(n=>n instanceof z?this.tab?n.name===this.tab:!n.hidden:!1);s&&s instanceof z&&(this.tab=s.name);for(const n of e){if(!(n instanceof z)){n.remove();continue}n.removeEventListener("hiddenchange",this.onTabHiddenChange),s!==n&&(n.hidden=!0),n.addEventListener("hiddenchange",this.onTabHiddenChange)}}doubleRequestAnimationFrames(t){requestAnimationFrame(()=>requestAnimationFrame(t))}setAnimatedBackgound(t=!1){var n;const e=this.renderRoot.querySelector(".animated-background"),s=[...((n=this.renderRoot.querySelector(".switchers"))==null?void 0:n.querySelectorAll(".switcher"))||[]].filter(r=>r.hasAttribute("data-active"))[0];requestAnimationFrame(()=>{var a,l,c,u;const r=(u=(c=(l=(a=s==null?void 0:s.parentElement)==null?void 0:a.shadowRoot)==null?void 0:l.querySelector("bim-input"))==null?void 0:c.shadowRoot)==null?void 0:u.querySelector(".input"),o={width:s==null?void 0:s.clientWidth,height:s==null?void 0:s.clientHeight,top:((s==null?void 0:s.offsetTop)??0)-((r==null?void 0:r.offsetTop)??0),left:((s==null?void 0:s.offsetLeft)??0)-((r==null?void 0:r.offsetLeft)??0)};s?(e==null||e.style.setProperty("width",`${o.width}px`),e==null||e.style.setProperty("height",`${o.height}px`),e==null||e.style.setProperty("left",`${o.left}px`)):e==null||e.style.setProperty("width","0"),this.bottom?(e==null||e.style.setProperty("top","100%"),e==null||e.style.setProperty("transform","translateY(-100%)")):e==null||e.style.setProperty("top",`${o.top}px`)}),t&&this.doubleRequestAnimationFrames(()=>{const o="ease";e==null||e.style.setProperty("transition",`width ${.3}s ${o}, height ${.3}s ${o}, top ${.3}s ${o}, left ${.3}s ${o}`)})}firstUpdated(){requestAnimationFrame(()=>{this.setAnimatedBackgound(!0)}),new ResizeObserver(()=>{this.setAnimatedBackgound()}).observe(this)}render(){return f`
      <div class="parent">
        <div class="switchers">
          <div class="animated-background"></div>
          ${this._switchers}
        </div>
        <div class="content">
          <slot @slotchange=${this.onSlotChange}></slot>
        </div>
      </div>
    `}};vi.styles=[mt.scrollbar,$`
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
    `];let G=vi;Bt([It()],G.prototype,"_switchers",2);Bt([d({type:Boolean,reflect:!0})],G.prototype,"bottom",2);Bt([d({type:Boolean,attribute:"switchers-hidden",reflect:!0})],G.prototype,"switchersHidden",2);Bt([d({type:Boolean,reflect:!0})],G.prototype,"floating",2);Bt([d({type:String,reflect:!0})],G.prototype,"tab",1);Bt([d({type:Boolean,attribute:"switchers-full",reflect:!0})],G.prototype,"switchersFull",2);var fo=Object.defineProperty,mo=Object.getOwnPropertyDescriptor,Ee=(i,t,e,s)=>{for(var n=s>1?void 0:s?mo(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&fo(t,e,n),n};const yi=class yi extends k{constructor(){super(...arguments),this._defaultName="__unnamed__",this.name=this._defaultName,this._hidden=!1}set label(t){this._label=t;const e=this.parentElement;e instanceof G&&e.updateSwitchers()}get label(){return this._label}set hidden(t){this._hidden=t;const e=this.parentElement;e!=null&&e.hasAttribute("floating")&&this.style.setProperty("animation",t?"hideFloatingTabSmoothly 0.6s linear forwards":"none"),this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}connectedCallback(){super.connectedCallback();const{parentElement:t}=this;if(t&&this.name===this._defaultName){const e=[...t.children].indexOf(this);this.name=`${this._defaultName}${e}`}}render(){return f` <slot></slot> `}};yi.styles=$`
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
  `;let z=yi;Ee([d({type:String,reflect:!0})],z.prototype,"name",2);Ee([d({type:String,reflect:!0})],z.prototype,"label",1);Ee([d({type:String,reflect:!0})],z.prototype,"icon",2);Ee([d({type:Boolean,reflect:!0})],z.prototype,"hidden",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xi=i=>i??Qn;var bo=Object.defineProperty,go=Object.getOwnPropertyDescriptor,et=(i,t,e,s)=>{for(var n=s>1?void 0:s?go(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&bo(t,e,n),n};const wi=class wi extends k{constructor(){super(...arguments),this._inputTypes=["date","datetime-local","email","month","password","search","tel","text","time","url","week","area"],this.value="",this.vertical=!1,this._type="text",this.onValueChange=new Event("input")}set type(t){this._inputTypes.includes(t)&&(this._type=t)}get type(){return this._type}get query(){return Ne(this.value)}onInputChange(t){t.stopPropagation();const e=t.target;clearTimeout(this._debounceTimeoutID),this._debounceTimeoutID=setTimeout(()=>{this.value=e.value,this.dispatchEvent(this.onValueChange)},this.debounce)}focus(){setTimeout(()=>{var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("input");t==null||t.focus()})}render(){return f`
      <bim-input
        .name=${this.name}
        .icon=${this.icon}
        .label=${this.label}
        .vertical=${this.vertical}
      >
        ${this.type==="area"?f` <textarea
              aria-label=${this.label||this.name||"Text Input"}
              .value=${this.value}
              .rows=${this.rows??5}
              placeholder=${Xi(this.placeholder)}
              @input=${this.onInputChange}
            ></textarea>`:f` <input
              aria-label=${this.label||this.name||"Text Input"}
              .type=${this.type}
              .value=${this.value}
              placeholder=${Xi(this.placeholder)}
              @input=${this.onInputChange}
            />`}
      </bim-input>
    `}};wi.styles=[mt.scrollbar,$`
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
    `];let j=wi;et([d({type:String,reflect:!0})],j.prototype,"icon",2);et([d({type:String,reflect:!0})],j.prototype,"label",2);et([d({type:String,reflect:!0})],j.prototype,"name",2);et([d({type:String,reflect:!0})],j.prototype,"placeholder",2);et([d({type:String,reflect:!0})],j.prototype,"value",2);et([d({type:Boolean,reflect:!0})],j.prototype,"vertical",2);et([d({type:Number,reflect:!0})],j.prototype,"debounce",2);et([d({type:Number,reflect:!0})],j.prototype,"rows",2);et([d({type:String,reflect:!0})],j.prototype,"type",1);var vo=Object.defineProperty,yo=Object.getOwnPropertyDescriptor,Nn=(i,t,e,s)=>{for(var n=s>1?void 0:s?yo(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&vo(t,e,n),n};const xi=class xi extends k{constructor(){super(...arguments),this.rows=2,this._vertical=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}updateChildren(){const t=this.children;for(const e of t)this.vertical?e.setAttribute("label-hidden",""):e.removeAttribute("label-hidden")}render(){return f`
      <style>
        .parent {
          grid-auto-flow: ${this.vertical?"row":"column"};
          grid-template-rows: repeat(${this.rows}, 1fr);
        }
      </style>
      <div class="parent">
        <slot @slotchange=${this.updateChildren}></slot>
      </div>
    `}};xi.styles=$`
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
  `;let Tt=xi;Nn([d({type:Number,reflect:!0})],Tt.prototype,"rows",2);Nn([d({type:Boolean,reflect:!0})],Tt.prototype,"vertical",1);var wo=Object.defineProperty,xo=Object.getOwnPropertyDescriptor,Ae=(i,t,e,s)=>{for(var n=s>1?void 0:s?xo(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&wo(t,e,n),n};const _i=class _i extends k{constructor(){super(...arguments),this._vertical=!1,this._labelHidden=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}set labelHidden(t){this._labelHidden=t,this.updateChildren()}get labelHidden(){return this._labelHidden}updateChildren(){const t=this.children;for(const e of t)e instanceof Tt&&(e.vertical=this.vertical),e.toggleAttribute("label-hidden",this.vertical)}render(){return f`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this.updateChildren}></slot>
        </div>
        ${!this.labelHidden&&(this.label||this.icon)?f`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
      </div>
    `}};_i.styles=$`
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
  `;let pt=_i;Ae([d({type:String,reflect:!0})],pt.prototype,"label",2);Ae([d({type:String,reflect:!0})],pt.prototype,"icon",2);Ae([d({type:Boolean,reflect:!0})],pt.prototype,"vertical",1);Ae([d({type:Boolean,attribute:"label-hidden",reflect:!0})],pt.prototype,"labelHidden",1);var _o=Object.defineProperty,Co=Object.getOwnPropertyDescriptor,ei=(i,t,e,s)=>{for(var n=s>1?void 0:s?Co(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&_o(t,e,n),n};const Ci=class Ci extends k{constructor(){super(...arguments),this.labelsHidden=!1,this._vertical=!1,this._hidden=!1}set vertical(t){this._vertical=t,this.updateSections()}get vertical(){return this._vertical}set hidden(t){this._hidden=t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}updateSections(){const t=this.children;for(const e of t)e instanceof pt&&(e.labelHidden=this.vertical&&!de.config.sectionLabelOnVerticalToolbar,e.vertical=this.vertical)}render(){return f`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `}};Ci.styles=$`
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
  `;let zt=Ci;ei([d({type:String,reflect:!0})],zt.prototype,"icon",2);ei([d({type:Boolean,attribute:"labels-hidden",reflect:!0})],zt.prototype,"labelsHidden",2);ei([d({type:Boolean,reflect:!0})],zt.prototype,"vertical",1);var So=Object.defineProperty,$o=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&So(t,e,n),n};const Si=class Si extends k{constructor(){super(),this._onResize=new Event("resize"),new ResizeObserver(()=>{setTimeout(()=>{this.dispatchEvent(this._onResize)})}).observe(this)}render(){return f`
      <div class="parent">
        <slot></slot>
      </div>
    `}};Si.styles=$`
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
  `;let ge=Si;$o([d({type:String,reflect:!0})],ge.prototype,"name");export{Fr as B,he as C,de as M,j as T,ct as a};
