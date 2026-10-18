var kr=Object.defineProperty;var _r=Object.getOwnPropertyDescriptor;var c=(n,i,e,t)=>{for(var r=t>1?void 0:t?_r(i,e):i,s=n.length-1,a;s>=0;s--)(a=n[s])&&(r=(t?a(i,e,r):a(r))||r);return t&&r&&kr(i,e,r),r};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ie=globalThis,Ne=Ie.ShadowRoot&&(Ie.ShadyCSS===void 0||Ie.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ot=Symbol(),It=new WeakMap,Oe=class{constructor(i,e,t){if(this._$cssResult$=!0,t!==Ot)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=e}get styleSheet(){let i=this.o,e=this.t;if(Ne&&i===void 0){let t=e!==void 0&&e.length===1;t&&(i=It.get(e)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),t&&It.set(e,i))}return i}toString(){return this.cssText}},b=n=>new Oe(typeof n=="string"?n:n+"",void 0,Ot);var Nt=(n,i)=>{if(Ne)n.adoptedStyleSheets=i.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of i){let t=document.createElement("style"),r=Ie.litNonce;r!==void 0&&t.setAttribute("nonce",r),t.textContent=e.cssText,n.appendChild(t)}},nt=Ne?n=>n:n=>n instanceof CSSStyleSheet?(i=>{let e="";for(let t of i.cssRules)e+=t.cssText;return b(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var{is:Sr,defineProperty:Ar,getOwnPropertyDescriptor:Cr,getOwnPropertyNames:Tr,getOwnPropertySymbols:Mr,getPrototypeOf:Hr}=Object,De=globalThis,Dt=De.trustedTypes,Er=Dt?Dt.emptyScript:"",Rr=De.reactiveElementPolyfillSupport,_e=(n,i)=>n,Se={toAttribute(n,i){switch(i){case Boolean:n=n?Er:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,i){let e=n;switch(i){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},Ue=(n,i)=>!Sr(n,i),Ut={attribute:!0,type:String,converter:Se,reflect:!1,useDefault:!1,hasChanged:Ue};Symbol.metadata??=Symbol("metadata"),De.litPropertyMetadata??=new WeakMap;var V=class extends HTMLElement{static addInitializer(i){this._$Ei(),(this.l??=[]).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,e=Ut){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(i,e),!e.noAccessor){let t=Symbol(),r=this.getPropertyDescriptor(i,t,e);r!==void 0&&Ar(this.prototype,i,r)}}static getPropertyDescriptor(i,e,t){let{get:r,set:s}=Cr(this.prototype,i)??{get(){return this[e]},set(a){this[e]=a}};return{get:r,set(a){let l=r?.call(this);s?.call(this,a),this.requestUpdate(i,l,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)??Ut}static _$Ei(){if(this.hasOwnProperty(_e("elementProperties")))return;let i=Hr(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(_e("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_e("properties"))){let e=this.properties,t=[...Tr(e),...Mr(e)];for(let r of t)this.createProperty(r,e[r])}let i=this[Symbol.metadata];if(i!==null){let e=litPropertyMetadata.get(i);if(e!==void 0)for(let[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let r=this._$Eu(e,t);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){let e=[];if(Array.isArray(i)){let t=new Set(i.flat(1/0).reverse());for(let r of t)e.unshift(nt(r))}else i!==void 0&&e.push(nt(i));return e}static _$Eu(i,e){let t=e.attribute;return t===!1?void 0:typeof t=="string"?t:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(i=>i(this))}addController(i){(this._$EO??=new Set).add(i),this.renderRoot!==void 0&&this.isConnected&&i.hostConnected?.()}removeController(i){this._$EO?.delete(i)}_$E_(){let i=new Map,e=this.constructor.elementProperties;for(let t of e.keys())this.hasOwnProperty(t)&&(i.set(t,this[t]),delete this[t]);i.size>0&&(this._$Ep=i)}createRenderRoot(){let i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Nt(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(i=>i.hostConnected?.())}enableUpdating(i){}disconnectedCallback(){this._$EO?.forEach(i=>i.hostDisconnected?.())}attributeChangedCallback(i,e,t){this._$AK(i,t)}_$ET(i,e){let t=this.constructor.elementProperties.get(i),r=this.constructor._$Eu(i,t);if(r!==void 0&&t.reflect===!0){let s=(t.converter?.toAttribute!==void 0?t.converter:Se).toAttribute(e,t.type);this._$Em=i,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(i,e){let t=this.constructor,r=t._$Eh.get(i);if(r!==void 0&&this._$Em!==r){let s=t.getPropertyOptions(r),a=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Se;this._$Em=r;let l=a.fromAttribute(e,s.type);this[r]=l??this._$Ej?.get(r)??l,this._$Em=null}}requestUpdate(i,e,t,r=!1,s){if(i!==void 0){let a=this.constructor;if(r===!1&&(s=this[i]),t??=a.getPropertyOptions(i),!((t.hasChanged??Ue)(s,e)||t.useDefault&&t.reflect&&s===this._$Ej?.get(i)&&!this.hasAttribute(a._$Eu(i,t))))return;this.C(i,e,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,e,{useDefault:t,reflect:r,wrapped:s},a){t&&!(this._$Ej??=new Map).has(i)&&(this._$Ej.set(i,a??e??this[i]),s!==!0||a!==void 0)||(this._$AL.has(i)||(this.hasUpdated||t||(e=void 0),this._$AL.set(i,e)),r===!0&&this._$Em!==i&&(this._$Eq??=new Set).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[r,s]of t){let{wrapped:a}=s,l=this[r];a!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,s,l)}}let i=!1,e=this._$AL;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(t){throw i=!1,this._$EM(),t}i&&this._$AE(e)}willUpdate(i){}_$AE(i){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(i){}firstUpdated(i){}};V.elementStyles=[],V.shadowRootOptions={mode:"open"},V[_e("elementProperties")]=new Map,V[_e("finalized")]=new Map,Rr?.({ReactiveElement:V}),(De.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ht=globalThis,Ft=n=>n,Fe=ht.trustedTypes,jt=Fe?Fe.createPolicy("lit-html",{createHTML:n=>n}):void 0,Lt="$lit$",X=`lit$${Math.random().toFixed(9).slice(2)}$`,Vt="?"+X,zr=`<${Vt}>`,oe=document,Ce=()=>oe.createComment(""),Te=n=>n===null||typeof n!="object"&&typeof n!="function",ut=Array.isArray,Pr=n=>ut(n)||typeof n?.[Symbol.iterator]=="function",at=`[ 	
\f\r]`,Ae=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Wt=/-->/g,Bt=/>/g,ne=RegExp(`>|${at}(?:([^\\s"'>=/]+)(${at}*=${at}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qt=/'/g,Kt=/"/g,Yt=/^(?:script|style|textarea|title)$/i,mt=n=>(i,...e)=>({_$litType$:n,strings:i,values:e}),o=mt(1),x=mt(2),hn=mt(3),le=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Gt=new WeakMap,ae=oe.createTreeWalker(oe,129);function Xt(n,i){if(!ut(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return jt!==void 0?jt.createHTML(i):i}var Ir=(n,i)=>{let e=n.length-1,t=[],r,s=i===2?"<svg>":i===3?"<math>":"",a=Ae;for(let l=0;l<e;l++){let d=n[l],h,g,f=-1,w=0;for(;w<d.length&&(a.lastIndex=w,g=a.exec(d),g!==null);)w=a.lastIndex,a===Ae?g[1]==="!--"?a=Wt:g[1]!==void 0?a=Bt:g[2]!==void 0?(Yt.test(g[2])&&(r=RegExp("</"+g[2],"g")),a=ne):g[3]!==void 0&&(a=ne):a===ne?g[0]===">"?(a=r??Ae,f=-1):g[1]===void 0?f=-2:(f=a.lastIndex-g[2].length,h=g[1],a=g[3]===void 0?ne:g[3]==='"'?Kt:qt):a===Kt||a===qt?a=ne:a===Wt||a===Bt?a=Ae:(a=ne,r=void 0);let $=a===ne&&n[l+1].startsWith("/>")?" ":"";s+=a===Ae?d+zr:f>=0?(t.push(h),d.slice(0,f)+Lt+d.slice(f)+X+$):d+X+(f===-2?l:$)}return[Xt(n,s+(n[e]||"<?>")+(i===2?"</svg>":i===3?"</math>":"")),t]},Me=class n{constructor({strings:i,_$litType$:e},t){let r;this.parts=[];let s=0,a=0,l=i.length-1,d=this.parts,[h,g]=Ir(i,e);if(this.el=n.createElement(h,t),ae.currentNode=this.el.content,e===2||e===3){let f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(r=ae.nextNode())!==null&&d.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(let f of r.getAttributeNames())if(f.endsWith(Lt)){let w=g[a++],$=r.getAttribute(f).split(X),_=/([.?@])?(.*)/.exec(w);d.push({type:1,index:s,name:_[2],strings:$,ctor:_[1]==="."?lt:_[1]==="?"?ct:_[1]==="@"?dt:he}),r.removeAttribute(f)}else f.startsWith(X)&&(d.push({type:6,index:s}),r.removeAttribute(f));if(Yt.test(r.tagName)){let f=r.textContent.split(X),w=f.length-1;if(w>0){r.textContent=Fe?Fe.emptyScript:"";for(let $=0;$<w;$++)r.append(f[$],Ce()),ae.nextNode(),d.push({type:2,index:++s});r.append(f[w],Ce())}}}else if(r.nodeType===8)if(r.data===Vt)d.push({type:2,index:s});else{let f=-1;for(;(f=r.data.indexOf(X,f+1))!==-1;)d.push({type:7,index:s}),f+=X.length-1}s++}}static createElement(i,e){let t=oe.createElement("template");return t.innerHTML=i,t}};function pe(n,i,e=n,t){if(i===le)return i;let r=t!==void 0?e._$Co?.[t]:e._$Cl,s=Te(i)?void 0:i._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),s===void 0?r=void 0:(r=new s(n),r._$AT(n,e,t)),t!==void 0?(e._$Co??=[])[t]=r:e._$Cl=r),r!==void 0&&(i=pe(n,r._$AS(n,i.values),r,t)),i}var ot=class{constructor(i,e){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){let{el:{content:e},parts:t}=this._$AD,r=(i?.creationScope??oe).importNode(e,!0);ae.currentNode=r;let s=ae.nextNode(),a=0,l=0,d=t[0];for(;d!==void 0;){if(a===d.index){let h;d.type===2?h=new He(s,s.nextSibling,this,i):d.type===1?h=new d.ctor(s,d.name,d.strings,this,i):d.type===6&&(h=new pt(s,this,i)),this._$AV.push(h),d=t[++l]}a!==d?.index&&(s=ae.nextNode(),a++)}return ae.currentNode=oe,r}p(i){let e=0;for(let t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(i,t,e),e+=t.strings.length-2):t._$AI(i[e])),e++}},He=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(i,e,t,r){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=i,this._$AB=e,this._$AM=t,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let i=this._$AA.parentNode,e=this._$AM;return e!==void 0&&i?.nodeType===11&&(i=e.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,e=this){i=pe(this,i,e),Te(i)?i===p||i==null||i===""?(this._$AH!==p&&this._$AR(),this._$AH=p):i!==this._$AH&&i!==le&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):Pr(i)?this.k(i):this._(i)}O(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}_(i){this._$AH!==p&&Te(this._$AH)?this._$AA.nextSibling.data=i:this.T(oe.createTextNode(i)),this._$AH=i}$(i){let{values:e,_$litType$:t}=i,r=typeof t=="number"?this._$AC(i):(t.el===void 0&&(t.el=Me.createElement(Xt(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===r)this._$AH.p(e);else{let s=new ot(r,this),a=s.u(this.options);s.p(e),this.T(a),this._$AH=s}}_$AC(i){let e=Gt.get(i.strings);return e===void 0&&Gt.set(i.strings,e=new Me(i)),e}k(i){ut(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,t,r=0;for(let s of i)r===e.length?e.push(t=new n(this.O(Ce()),this.O(Ce()),this,this.options)):t=e[r],t._$AI(s),r++;r<e.length&&(this._$AR(t&&t._$AB.nextSibling,r),e.length=r)}_$AR(i=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);i!==this._$AB;){let t=Ft(i).nextSibling;Ft(i).remove(),i=t}}setConnected(i){this._$AM===void 0&&(this._$Cv=i,this._$AP?.(i))}},he=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,e,t,r,s){this.type=1,this._$AH=p,this._$AN=void 0,this.element=i,this.name=e,this._$AM=r,this.options=s,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=p}_$AI(i,e=this,t,r){let s=this.strings,a=!1;if(s===void 0)i=pe(this,i,e,0),a=!Te(i)||i!==this._$AH&&i!==le,a&&(this._$AH=i);else{let l=i,d,h;for(i=s[0],d=0;d<s.length-1;d++)h=pe(this,l[t+d],e,d),h===le&&(h=this._$AH[d]),a||=!Te(h)||h!==this._$AH[d],h===p?i=p:i!==p&&(i+=(h??"")+s[d+1]),this._$AH[d]=h}a&&!r&&this.j(i)}j(i){i===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}},lt=class extends he{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===p?void 0:i}},ct=class extends he{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==p)}},dt=class extends he{constructor(i,e,t,r,s){super(i,e,t,r,s),this.type=5}_$AI(i,e=this){if((i=pe(this,i,e,0)??p)===le)return;let t=this._$AH,r=i===p&&t!==p||i.capture!==t.capture||i.once!==t.once||i.passive!==t.passive,s=i!==p&&(t===p||r);r&&this.element.removeEventListener(this.name,this,t),s&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,i):this._$AH.handleEvent(i)}},pt=class{constructor(i,e,t){this.element=i,this.type=6,this._$AN=void 0,this._$AM=e,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(i){pe(this,i)}};var Or=ht.litHtmlPolyfillSupport;Or?.(Me,He),(ht.litHtmlVersions??=[]).push("3.3.3");var Zt=(n,i,e)=>{let t=e?.renderBefore??i,r=t._$litPart$;if(r===void 0){let s=e?.renderBefore??null;t._$litPart$=r=new He(i.insertBefore(Ce(),s),s,void 0,e??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gt=globalThis,v=class extends V{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let i=super.createRenderRoot();return this.renderOptions.renderBefore??=i.firstChild,i}update(i){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=Zt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return le}};v._$litElement$=!0,v.finalized=!0,gt.litElementHydrateSupport?.({LitElement:v});var Nr=gt.litElementPolyfillSupport;Nr?.({LitElement:v});(gt.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var y=n=>(i,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,i)}):customElements.define(n,i)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Dr={attribute:!0,type:String,converter:Se,reflect:!1,hasChanged:Ue},Ur=(n=Dr,i,e)=>{let{kind:t,metadata:r}=e,s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),t==="setter"&&((n=Object.create(n)).wrapped=!0),s.set(e.name,n),t==="accessor"){let{name:a}=e;return{set(l){let d=i.get.call(this);i.set.call(this,l),this.requestUpdate(a,d,n,!0,l)},init(l){return l!==void 0&&this.C(a,void 0,n,l),l}}}if(t==="setter"){let{name:a}=e;return function(l){let d=this[a];i.call(this,l),this.requestUpdate(a,d,n,!0,l)}}throw Error("Unsupported decorator location: "+t)};function m(n){return(i,e)=>typeof e=="object"?Ur(n,i,e):((t,r,s)=>{let a=r.hasOwnProperty(s);return r.constructor.createProperty(s,t),a?Object.getOwnPropertyDescriptor(r,s):void 0})(n,i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function u(n){return m({...n,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ee=12,Jt=2.2,W=100,B=100,Qt=500;function ei(n,i){let e=Array.from({length:Ee},(t,r)=>{let s=-90+360/Ee*r+Jt/2,a=-90+360/Ee*(r+1)-Jt/2;return Wr(93,82,s,a)});return x`
    <svg viewBox="0 0 200 200" role="img" aria-label="Echo Dot">
      <defs>
        <radialGradient id="top" cx="38%" cy="30%" r="78%">
          <stop offset="0%" stop-color="var(--el-top-high)"></stop>
          <stop offset="100%" stop-color="var(--el-top)"></stop>
        </radialGradient>
        <filter id="blur" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4"></feGaussianBlur>
        </filter>
      </defs>

      <circle cx=${W} cy=${B} r="97" fill="var(--el-shell)"></circle>
      <circle cx=${W} cy=${B} r="97" fill="none" stroke="var(--el-edge)" stroke-width="1"></circle>

      <g class="halo" filter="url(#blur)" style="opacity:${n.glow}">
        ${e.map((t,r)=>x`<path d=${t} style="fill:${n.segments[r].opacity?n.segments[r].fill:"transparent"}"></path>`)}
      </g>

      ${e.map((t,r)=>x`<path
          class="segment"
          data-picked=${String(n.picked===r)}
          data-divisible=${String(n.divisible)}
          d=${t}
          style="fill:${n.segments[r].fill};opacity:${n.segments[r].opacity}"
          @click=${n.divisible?()=>i.segment(r):i.ring}
        ></path>`)}

      <circle cx=${W} cy=${B} r="79" fill="url(#top)"></circle>
      <circle cx=${W} cy=${B} r="79" fill="none" stroke="var(--el-edge)" stroke-width="1"></circle>

      ${n.lux?x`<text
            class="lux"
            x=${W}
            y=${B+5}
            text-anchor="middle"
            style="--lit:${n.lux.lit}"
          >${Math.round(n.lux.value)}<tspan class="unit" dx="3.5">lx</tspan></text>`:""}


      ${ft(W,B-46,x`<path d="M-4.5 0h9M0 -4.5v9"></path>`,"Volume up",()=>i.volume(1))}
      <g
        class="btn"
        data-lit=${String(n.holding)}
        transform="translate(${W+46} ${B})"
        role="button"
        tabindex="0"
        aria-label=${n.holding?"Wake the second assistant":"Wake"}
        @pointerdown=${()=>i.action("down")}
        @pointerup=${()=>i.action("up")}
        @pointerleave=${()=>i.action("cancel")}
        @pointercancel=${()=>i.action("cancel")}
      >
        <circle class="face" cx="0" cy="0" r="13"></circle>
        <g class="glyph"><circle cx="0" cy="0" r="4.5"></circle></g>
      </g>
      ${ft(W,B+46,x`<path d="M-4.5 0h9"></path>`,"Volume down",()=>i.volume(-1))}
      ${ft(W-46,B,Fr(n.muted),n.muted?"Microphone muted":"Microphone live",i.mute,n.muted)}
    </svg>
  `}function ft(n,i,e,t,r,s=!1){return x`<g class="btn" data-lit=${String(s)} transform="translate(${n} ${i})"
    role="button" tabindex="0" aria-label=${t} @click=${r}>
    <circle class="face" cx="0" cy="0" r="13"></circle>
    <g class="glyph">${e}</g>
  </g>`}function Fr(n){return x`
    <path d="M-2.6 -5.2a2.6 2.6 0 0 1 5.2 0v4a2.6 2.6 0 0 1-5.2 0z"></path>
    <path d="M-4.6 -0.6a4.6 4.6 0 0 0 9.2 0"></path>
    <path d="M0 3.8v2.6"></path>
    ${n?x`<path d="M-6.4 6.4L6.4 -6.4"></path>`:jr()}
  `}function jr(){return x``}function Wr(n,i,e,t){let r=($,_)=>{let T=_*Math.PI/180;return[(W+$*Math.cos(T)).toFixed(2),(B+$*Math.sin(T)).toFixed(2)]},[s,a]=r(n,e),[l,d]=r(n,t),[h,g]=r(i,t),[f,w]=r(i,e);return`M${s} ${a}A${n} ${n} 0 0 1 ${l} ${d}L${h} ${g}A${i} ${i} 0 0 0 ${f} ${w}Z`}var ti=`:host{display:block}ha-card{padding:16px}.frame{position:relative;display:grid;grid-template-columns:minmax(0,1fr) auto;grid-template-rows:auto auto;gap:12px;align-items:center}text.lux{fill:color-mix(in srgb,var(--el-warm) calc(var(--lit) * 100%),var(--el-read));filter:drop-shadow(0 0 calc(var(--lit) * 5px) color-mix(in srgb,var(--el-warm) calc(var(--lit) * 65%),transparent));font-family:var(--ha-font-family-body, inherit);font-size:15px;font-weight:500;letter-spacing:-.3px;pointer-events:none}text.lux .unit{font-size:9px;font-weight:400;fill:var(--el-glyph)}.art{grid-area:1 / 1;min-width:0;width:100%;max-width:240px;height:240px;margin:0 auto;--el-shell: #4a4d52;--el-top: #3c3f44;--el-top-high: #5a5e64;--el-edge: rgba(255, 255, 255, .13);--el-ring-off: rgba(255, 255, 255, .1);--el-glyph: rgba(255, 255, 255, .62);--el-btn: rgba(255, 255, 255, .07);--el-read: rgba(255, 255, 255, .78);--el-warm: #ffc061}.art[data-shell=black]{--el-shell: #24262a;--el-top: #191b1e;--el-top-high: #2e3237;--el-edge: rgba(255, 255, 255, .09);--el-ring-off: rgba(255, 255, 255, .07);--el-glyph: rgba(255, 255, 255, .55);--el-btn: rgba(255, 255, 255, .05);--el-read: rgba(255, 255, 255, .72);--el-warm: #ffc061}.art[data-shell=white]{--el-shell: #e7e4dd;--el-top: #f2f0ea;--el-top-high: #ffffff;--el-edge: rgba(0, 0, 0, .1);--el-ring-off: rgba(0, 0, 0, .09);--el-glyph: rgba(0, 0, 0, .45);--el-btn: rgba(0, 0, 0, .04);--el-read: rgba(0, 0, 0, .72);--el-warm: #e07b00}.art[data-shell=charcoal]{--el-shell: #2b2d31;--el-glass: #08090b;--el-edge: rgba(255, 255, 255, .1);--el-glyph: rgba(255, 255, 255, .58);--el-btn: #3a3d42;--el-lens: #1b222c;--el-shutter: #5b5e63}.frame[data-shape=show] .side{display:grid;grid-template-columns:repeat(2,40px);align-content:center}.screen{cursor:pointer}.screen text{font-family:var(--ha-font-family-body, inherit);pointer-events:none}.screen .clock{font-weight:500;font-variant-numeric:tabular-nums;letter-spacing:-.5px}.screen .line{font-size:6.5px}.bar{fill:#38a0ff;opacity:0;transition:opacity .3s ease}.art[data-activity=listening] .bar,.art[data-activity=processing] .bar,.art[data-activity=responding] .bar{opacity:1}.art[data-activity=processing] .bar{animation:breathe 1.2s ease-in-out infinite}.bar[data-muted=true]{fill:var(--error-color, #db4437);opacity:1;animation:none}.lens{cursor:pointer}.lens circle:not(.hit),.lens rect{fill:var(--el-lens);stroke:#ffffff1f;stroke-width:.5}.lens[data-covered=true] circle:not(.hit),.lens[data-covered=true] rect{fill:var(--el-shutter)}.key .glyph path{stroke-width:1.1}svg{width:100%;height:100%;display:block}.segment{transition:fill .4s ease,opacity .4s ease}.segment[data-divisible=true]{cursor:pointer}.segment[data-picked=true]{stroke:var(--primary-text-color);stroke-width:2}.plain{padding:7px 12px;border:1px solid color-mix(in srgb,var(--primary-color) 45%,transparent);border-radius:10px;background:color-mix(in srgb,var(--primary-color) 12%,transparent);color:var(--primary-color);font:inherit;font-size:.82rem;cursor:pointer;white-space:nowrap}.plain:hover{background:color-mix(in srgb,var(--primary-color) 20%,transparent)}.plain.quiet{border-color:var(--divider-color);background:none;color:var(--secondary-text-color)}.plain.quiet:hover{background:var(--secondary-background-color)}.palette{flex-direction:column;align-items:stretch;gap:10px}.palette .top{display:flex;align-items:center;justify-content:space-between;gap:12px}.palette .name{white-space:nowrap}.palette .swatches{display:grid;grid-template-columns:repeat(auto-fit,minmax(24px,1fr));gap:6px}.palette .swatch{aspect-ratio:1;min-width:0;padding:0;border:2px solid transparent;border-radius:8px;cursor:pointer}.palette .swatch:hover{border-color:var(--primary-text-color)}.palette .sq{width:30px;height:30px;border-radius:8px}.palette .sq ha-icon{--mdc-icon-size: 18px}.halo{transition:opacity .4s ease}.art[data-activity=listening] .halo{animation:breathe 2s ease-in-out infinite}@keyframes breathe{0%,to{opacity:.35}50%{opacity:.8}}.hit{cursor:pointer;pointer-events:stroke}.btn{cursor:pointer}.face{fill:var(--el-btn)}.btn .glyph path{stroke:var(--el-glyph);stroke-width:1.6;fill:none;stroke-linecap:round}.btn .glyph circle{fill:var(--el-glyph)}.btn:hover .face{fill:var(--el-edge)}.btn[data-lit=true] .glyph path{stroke:var(--error-color, #db4437)}.btn[data-lit=true] .face{fill:color-mix(in srgb,var(--error-color, #db4437) 22%,transparent)}.side{grid-area:1 / 2;display:flex;flex-direction:column;gap:8px}.foot{grid-area:2 / 1 / 3 / 3;display:flex;align-items:stretch;justify-content:space-between;gap:12px;border-top:1px solid var(--divider-color);padding-top:12px}.label{display:flex;flex-direction:column;justify-content:center;min-width:0}.name{font-size:1.05rem;font-weight:500;color:var(--primary-text-color)}.status{font-size:.8rem;color:var(--secondary-text-color)}.tail{display:flex;gap:8px;padding-left:12px;border-left:1px solid var(--divider-color)}.sq{position:relative;width:40px;height:40px;flex:0 0 auto;display:grid;place-items:center;padding:0;border:1px solid var(--divider-color);border-radius:10px;background:none;cursor:pointer;color:inherit}.sq:hover{background:var(--secondary-background-color)}.sq ha-icon{--mdc-icon-size: 22px;color:var(--secondary-text-color);display:flex}.badge{position:absolute;right:3px;bottom:1px;font-size:.62rem;line-height:1;color:var(--secondary-text-color)}.missing{color:var(--secondary-text-color)}
`;var ii=`:host{display:flex;gap:18px;align-items:center;padding:14px;border-radius:14px;background:color-mix(in srgb,var(--primary-text-color) 5%,transparent)}.dial{width:190px;flex:0 0 auto;touch-action:none}svg{width:100%;height:auto;display:block}.arc-bed{fill:none;stroke:color-mix(in srgb,var(--primary-text-color) 10%,transparent);stroke-width:9;stroke-linecap:round}.arc-live{fill:none;stroke:var(--primary-color);stroke-width:9;stroke-linecap:round;transition:stroke-dasharray .5s ease,stroke .3s ease}.arc-live[data-over=true]{stroke:var(--success-color, #43a047)}.notch{stroke:var(--primary-text-color);stroke-width:3;stroke-linecap:round;cursor:grab}.capsule{fill:color-mix(in srgb,var(--primary-text-color) 14%,transparent);transition:fill .3s ease}.capsule[data-on=true]{fill:var(--primary-color)}.beam{fill:color-mix(in srgb,var(--primary-color) 16%,transparent);stroke:color-mix(in srgb,var(--primary-color) 40%,transparent)}.spoke{stroke:color-mix(in srgb,var(--primary-color) 35%,transparent);stroke-width:1.2}.slash{stroke:var(--error-color, #db4437);stroke-width:3;stroke-linecap:round}.side{flex:1 1 auto;min-width:0;display:flex;flex-direction:column;gap:10px}.reading{display:flex;align-items:baseline;gap:6px}.now{font-size:1.9rem;font-weight:500;font-variant-numeric:tabular-nums;color:var(--primary-text-color);line-height:1}.unit{font-size:.8rem;color:var(--secondary-text-color)}.now.cut{color:var(--error-color, #db4437)}.caption{margin-left:auto;padding:4px 10px;border-radius:10px;font-size:.75rem;background:color-mix(in srgb,var(--primary-text-color) 7%,transparent);color:var(--secondary-text-color)}.caption[data-over=true]{background:color-mix(in srgb,var(--success-color, #43a047) 18%,transparent);color:var(--success-color, #43a047)}.modes{display:flex;flex-direction:column;gap:6px}.mode{display:flex;align-items:center;gap:10px;padding:8px 10px;border:1px solid transparent;border-radius:12px;background:color-mix(in srgb,var(--primary-text-color) 6%,transparent);color:var(--secondary-text-color);font:inherit;font-size:.85rem;cursor:pointer;text-align:left}.mode:hover{background:color-mix(in srgb,var(--primary-text-color) 11%,transparent)}.mode[data-on=true]{border-color:color-mix(in srgb,var(--primary-color) 45%,transparent);background:color-mix(in srgb,var(--primary-color) 15%,transparent);color:var(--primary-color)}.mode svg{width:26px;flex:0 0 auto}.gate{font-size:.78rem;color:var(--secondary-text-color)}.gate b{color:var(--primary-text-color);font-weight:500;font-variant-numeric:tabular-nums}
`;var ri=26,We=135,Be=270,A=100,C=100,Z=84,qe=38,O=class extends v{constructor(){super(...arguments);this.level="";this.floor="";this.gate="";this.mode="";this.muted=!1;this.held=null;this.grab=e=>{let t=e.currentTarget;t.setPointerCapture(e.pointerId);let r=this.hass.states[this.gate]?.attributes??{},s=r.min??0,a=r.max??20,l=r.step??1,d=this.number(this.floor)??0,h=this.number(this.level)??0,g=Math.max(d+ri,h+3),f=_=>{let T=t.getBoundingClientRect(),j=_.clientX-T.left-T.width/2,rt=_.clientY-T.top-T.height/2,se=Math.atan2(rt,j)*180/Math.PI-We;for(;se<0;)se+=360;let st=vt(Math.min(se,Be)/Be);return Math.max(s,Math.min(a,Math.round(st*(g-d)/l)*l))},w=_=>{this.held=f(_)},$=_=>{t.removeEventListener("pointermove",w),t.removeEventListener("pointerup",$),t.removeEventListener("pointercancel",$);let T=f(_);this.held=null,this.hass.callService("number","set_value",{entity_id:this.gate,value:T})};t.addEventListener("pointermove",w),t.addEventListener("pointerup",$),t.addEventListener("pointercancel",$),this.held=f(e)}}render(){let e=this.number(this.level),t=this.number(this.floor),r=this.held??this.number(this.gate);if(e===null||t===null||r===null)return p;let s=this.hass.states[this.mode],a=si(s?.state),l=Math.max(t+ri,e+3),d=vt((e-t)/(l-t)),h=vt(r/(l-t)),g=e>=t+r&&!this.muted;return o`
      <div class="dial" @pointerdown=${this.grab}>
        <svg viewBox="0 0 200 200" role="img" aria-label="Microphone array">
          <path class="arc-bed" d=${ni()} pathLength="100"></path>
          ${this.muted?p:x`<path
                class="arc-live"
                data-over=${String(g)}
                d=${ni()}
                pathLength="100"
                stroke-dasharray=${`${d*100} 100`}
              ></path>`}
          ${this.muted?p:Yr(h)} ${a==="beam"?Vr():p}
          ${a==="sum"?Lr():p} ${Kr(a,this.muted)}
          ${this.muted?x`<path class="slash" d="M${A-30} ${C+30}L${A+30} ${C-30}"></path>`:p}
        </svg>
      </div>

      <div class="side">
        <div class="reading">
          ${this.muted?o`<span class="now cut">Cut</span>`:o`<span class="now">${e.toFixed(1)}</span><span class="unit">dB</span>
                <span class="caption" data-over=${String(g)}>
                  ${g?"Over the gate":"Quiet"}
                </span>`}
        </div>

        <div class="modes">
          ${(s?.attributes.options??[]).map(f=>o`<button
              class="mode"
              data-on=${String(f===s?.state)}
              @click=${()=>this.hass.callService("select","select_option",{entity_id:this.mode,option:f})}
            >
              <svg viewBox="0 0 40 40">${Gr(si(f))}</svg>
              <span>${f}</span>
            </button>`)}
        </div>

        <div class="gate">Gate <b>${r} dB</b> over a floor of <b>${t.toFixed(0)} dB</b></div>
      </div>
    `}number(e){let t=Number(this.hass?.states?.[e]?.state);return Number.isFinite(t)?t:null}};O.styles=b(ii),c([m({attribute:!1})],O.prototype,"hass",2),c([m()],O.prototype,"level",2),c([m()],O.prototype,"floor",2),c([m()],O.prototype,"gate",2),c([m()],O.prototype,"mode",2),c([m({type:Boolean})],O.prototype,"muted",2),c([u()],O.prototype,"held",2),O=c([y("echolocal-array")],O);function si(n){let i=(n??"").toLowerCase();return i.includes("center")||i.includes("centre")?"one":i.includes("beam")?"beam":"sum"}function Kr(n,i){return[[A,C],...Array.from({length:6},(t,r)=>{let s=(-90+r*60)*Math.PI/180;return[A+qe*Math.cos(s),C+qe*Math.sin(s)]})].map(([t,r],s)=>x`<circle class="capsule" data-on=${String(!i&&(n!=="one"||s===0))}
      cx=${t.toFixed(1)} cy=${r.toFixed(1)} r=${s===0?7:5.5}></circle>`)}function Gr(n){let i=[[20,20],...Array.from({length:6},(e,t)=>{let r=(-90+t*60)*Math.PI/180;return[20+12*Math.cos(r),20+12*Math.sin(r)]})];return x`
    ${n==="beam"?x`<path class="beam" d="M20 20C9 11 13 1 20 1C27 1 31 11 20 20Z"></path>`:p}
    ${i.map(([e,t],r)=>x`<circle class="capsule" data-on=${String(n!=="one"||r===0)}
          cx=${e.toFixed(1)} cy=${t.toFixed(1)} r=${r===0?3.4:2.6}></circle>`)}`}function Lr(){return Array.from({length:6},(n,i)=>{let e=(-90+i*60)*Math.PI/180;return x`<line class="spoke" x1=${A} y1=${C}
      x2=${(A+qe*Math.cos(e)).toFixed(1)} y2=${(C+qe*Math.sin(e)).toFixed(1)}></line>`})}function Vr(){return x`<path class="beam" d="M${A} ${C}C${A-34} ${C-30} ${A-24} ${C-66} ${A} ${C-66}C${A+24} ${C-66} ${A+34} ${C-30} ${A} ${C}Z"></path>`}function ni(){let n=We*Math.PI/180,i=(We+Be)*Math.PI/180;return`M${(A+Z*Math.cos(n)).toFixed(2)} ${(C+Z*Math.sin(n)).toFixed(2)}
    A${Z} ${Z} 0 1 1 ${(A+Z*Math.cos(i)).toFixed(2)} ${(C+Z*Math.sin(i)).toFixed(2)}`}function Yr(n){let i=(We+n*Be)*Math.PI/180,e=Z-8,t=Z+8;return x`<line class="notch"
    x1=${(A+e*Math.cos(i)).toFixed(1)} y1=${(C+e*Math.sin(i)).toFixed(1)}
    x2=${(A+t*Math.cos(i)).toFixed(1)} y2=${(C+t*Math.sin(i)).toFixed(1)}></line>`}function vt(n){return Math.max(0,Math.min(1,n))}var ai=`:host{display:inline-flex;flex:0 0 auto;vertical-align:middle}button{width:15px;height:15px;display:grid;place-items:center;padding:0;border:1px solid color-mix(in srgb,var(--primary-text-color) 26%,transparent);border-radius:50%;background:none;color:var(--secondary-text-color);font:inherit;font-size:9px;font-weight:700;line-height:1;cursor:help;opacity:.65}button:hover{opacity:1;color:var(--primary-color);border-color:var(--primary-color)}ha-tooltip{--max-width: min(300px, 70vw);--ha-tooltip-font-size: .79rem;--ha-tooltip-font-weight: 400;--ha-tooltip-line-height: 1.45;--ha-tooltip-padding: 11px 13px;--ha-tooltip-border-radius: 11px}
`;var Zr=0,ue=class extends v{constructor(){super(...arguments);this.text="";this.anchor=`ask-${++Zr}`}render(){return this.text?o`
      <button id=${this.anchor} aria-label="What this does" @click=${this.swallow}>?</button>
      <ha-tooltip for=${this.anchor} trigger="click" placement="top">${this.text}</ha-tooltip>
    `:p}swallow(e){e.stopPropagation(),e.preventDefault()}};ue.styles=b(ai),c([m()],ue.prototype,"text",2),ue=c([y("echolocal-bubble")],ue);var oi=`.sheet{transition:width .2s ease}.head{display:flex;align-items:center;gap:14px;margin-bottom:16px}.crest{width:44px;height:44px;flex:0 0 auto;display:grid;place-items:center;border-radius:14px;background:color-mix(in srgb,var(--primary-color) 16%,transparent)}.crest ha-icon{--mdc-icon-size: 24px;color:var(--primary-color);display:flex}.titles{flex:1 1 auto;min-width:0}.crown{display:flex;align-items:center;gap:12px;flex:0 0 auto}.crown ha-control-switch{width:52px;--control-switch-thickness: 30px;--control-switch-border-radius: 15px}.crown ha-control-switch.warn{--control-switch-on-color: var(--error-color, #db4437)}.crown .lamp{max-width:168px;--control-select-thickness: 30px;--control-select-border-radius: 15px}.crown ha-icon-button{color:var(--primary-color)}.crown.picture{margin-left:auto;padding:0;border:none;background:none;cursor:pointer}.crown.picture img{display:block;width:160px;aspect-ratio:16 / 9;object-fit:cover;border-radius:8px;background:var(--secondary-background-color)}.title{display:flex;align-items:center;gap:8px;font-size:1.25rem;font-weight:500;color:var(--primary-text-color);line-height:1.2}.explained{position:relative}.explained>:not(echolocal-bubble){padding-right:21px}.explained>echolocal-bubble.corner{position:absolute;top:1px;right:0;z-index:3}.subtitle{font-size:.8rem;color:var(--secondary-text-color)}.hero{margin-bottom:16px}.groups{columns:2 300px;column-gap:24px}.group{break-inside:avoid;overflow:hidden;margin-bottom:14px}.section{display:flex;align-items:center;gap:8px;margin:0 0 8px 2px;font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.09em;color:var(--secondary-text-color)}.section:before{content:"";width:3px;height:12px;border-radius:2px;background:var(--primary-color);opacity:.6}.tile{display:flex;flex-direction:column;gap:9px;padding:10px 14px;margin-bottom:5px;border-radius:14px;background:color-mix(in srgb,var(--primary-text-color) 5%,transparent)}.top{display:flex;align-items:center;gap:12px}.icon{width:32px;height:32px;flex:0 0 auto;display:grid;place-items:center;border-radius:10px;background:color-mix(in srgb,var(--primary-text-color) 7%,transparent);transition:background .2s ease}.icon ha-icon{--mdc-icon-size: 19px;color:var(--secondary-text-color);display:flex;transition:color .2s ease}.tile[data-active=true] .icon{background:color-mix(in srgb,var(--primary-color) 20%,transparent)}.tile[data-active=true] .icon ha-icon{color:var(--primary-color)}.tile[data-alert=true] .icon{background:color-mix(in srgb,var(--error-color, #db4437) 20%,transparent)}.tile[data-alert=true] .icon ha-icon{color:var(--error-color, #db4437)}.named{flex:1 1 auto;min-width:0;display:flex;align-items:center;gap:7px}.name{flex:0 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--primary-text-color)}.trail{flex:0 0 auto;display:flex;align-items:center;gap:6px}.trail ha-control-switch{width:44px;--control-switch-thickness: 26px;--control-switch-border-radius: 13px}ha-control-select{--control-select-thickness: 34px;white-space:nowrap}.trail ha-control-select-menu{min-width:0;max-width:210px;--control-select-menu-height: 34px}ha-control-slider{--control-slider-thickness: 34px}.reading{background:none;border:none;padding:0;font:inherit;font-size:1.15rem;font-weight:500;font-variant-numeric:tabular-nums;color:var(--primary-text-color);cursor:pointer}.reading:hover{color:var(--primary-color)}.unit{font-size:.78rem;color:var(--secondary-text-color)}.reading.version{max-width:18ch;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.85rem;font-weight:400}.offer{display:flex;align-items:center;gap:10px}.note{flex:1 1 auto;min-width:0;font-size:.78rem;color:var(--secondary-text-color);word-break:break-all}.lines{padding:0;border:none;background:none;font:inherit;font-size:.82rem;font-variant-numeric:tabular-nums;color:var(--primary-text-color);text-align:left;cursor:pointer;line-height:1.5;overflow-wrap:anywhere}.lines:hover{color:var(--primary-color)}.empty{color:var(--secondary-text-color)}
`;var me=`.pills{display:flex;flex-wrap:wrap;gap:5px}.pill{padding:6px 11px;border:1px solid transparent;border-radius:10px;background:color-mix(in srgb,var(--primary-text-color) 6%,transparent);color:var(--secondary-text-color);font:inherit;font-size:.8rem;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pill:hover{background:color-mix(in srgb,var(--primary-text-color) 12%,transparent)}.pill[data-on=true]{border-color:color-mix(in srgb,var(--primary-color) 45%,transparent);background:color-mix(in srgb,var(--primary-color) 15%,transparent);color:var(--primary-color)}.pill:disabled{opacity:.4;cursor:default}
`;var li=`:host{display:block;padding:14px;border-radius:14px;background:color-mix(in srgb,var(--primary-text-color) 5%,transparent)}.dim{display:flex;align-items:center;gap:12px;padding-bottom:12px;margin-bottom:12px;border-bottom:1px solid color-mix(in srgb,var(--primary-text-color) 10%,transparent);font-size:.85rem;color:var(--secondary-text-color)}.dim b{font-variant-numeric:tabular-nums;color:var(--primary-text-color);font-weight:500}.dim ha-control-slider{flex:1 1 auto;min-width:0;--control-slider-thickness: 28px}.hue{display:flex;align-items:center;gap:12px;padding-bottom:12px;margin-bottom:12px;border-bottom:1px solid color-mix(in srgb,var(--primary-text-color) 10%,transparent);font-size:.85rem;color:var(--secondary-text-color)}.swatches{display:flex;flex-wrap:wrap;gap:6px}.swatch{width:24px;height:24px;padding:0;border:2px solid transparent;border-radius:50%;cursor:pointer}.swatch[data-on=true]{border-color:var(--primary-text-color)}.when{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:6px;margin-bottom:12px}.situation{display:flex;align-items:center;gap:9px;padding:9px 11px;border:1px solid transparent;border-radius:12px;background:color-mix(in srgb,var(--primary-text-color) 6%,transparent);color:var(--secondary-text-color);font:inherit;cursor:pointer;text-align:left;min-width:0}.situation:hover{background:color-mix(in srgb,var(--primary-text-color) 12%,transparent)}.situation[data-on=true]{border-color:color-mix(in srgb,var(--primary-color) 45%,transparent);background:color-mix(in srgb,var(--primary-color) 14%,transparent)}.situation ha-icon{--mdc-icon-size: 19px;flex:0 0 auto;display:flex}.situation .text{min-width:0}.situation .label{font-size:.72rem;text-transform:uppercase;letter-spacing:.06em}.situation .shows{font-size:.88rem;color:var(--primary-text-color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.situation[data-on=true] .shows{color:var(--primary-color)}.caption{margin-bottom:8px;font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.09em;color:var(--secondary-text-color)}.pills{display:grid;grid-template-columns:repeat(auto-fill,minmax(104px,1fr))}
`;var Ke=[["White",[255,255,255]],["Warm",[255,190,120]],["Red",[255,40,40]],["Orange",[255,130,20]],["Yellow",[250,230,60]],["Green",[60,220,90]],["Teal",[40,220,200]],["Blue",[60,140,255]],["Violet",[150,90,255]],["Pink",[255,90,200]]];function ts(n,i){return Array.isArray(n)&&i.every((e,t)=>n[t]===e)}var U=class extends v{constructor(){super(...arguments);this.light="";this.muted="";this.failure="";this.room="";this.target="rest"}render(){let e=this.hass.states[this.light];if(!e)return p;let t=this.situations(),r=t.find(a=>a.key===this.target)??t[0],s=e.attributes.brightness??255;return o`
      <div class="dim">
        <span>Brightness</span>
        <ha-control-slider
          min="1"
          max="255"
          .value=${s}
          .disabled=${e.state!=="on"}
          @value-changed=${a=>this.hass.callService("light","turn_on",{entity_id:this.light,brightness:a.detail.value})}
        ></ha-control-slider>
        <b>${Math.round(s/255*100)}%</b>
      </div>

      <div class="hue">
        <span>Color</span>
        <div class="swatches">
          ${Ke.map(([a,l])=>o`<button
              class="swatch"
              title=${a}
              aria-label=${a}
              data-on=${String(ts(e.attributes.rgb_color,l))}
              style=${`background:rgb(${l.join(",")})`}
              @click=${()=>this.hass.callService("light","turn_on",{entity_id:this.light,rgb_color:l})}
            ></button>`)}
        </div>
      </div>

      <div class="when">
        ${t.map(a=>o`<button
            class="situation"
            data-on=${String(a.key===r.key)}
            @click=${()=>this.target=a.key}
          >
            <ha-icon .icon=${a.icon}></ha-icon>
            <div class="text">
              <div class="label">${a.label}</div>
              <div class="shows">${this.showing(a)||"\u2014"}</div>
            </div>
          </button>`)}
      </div>

      <div class="caption">${r.label} shows</div>
      <div class="pills">
        ${this.options(r).map(a=>o`<button
            class="pill"
            data-on=${String(a===this.showing(r))}
            @click=${()=>this.choose(r,a)}
          >
            ${a}
          </button>`)}
      </div>
    `}situations(){return[{key:"rest",label:"At rest",icon:"mdi:record-circle-outline"},{key:"muted",label:"Muted",icon:"mdi:microphone-off",entity:this.muted},{key:"failure",label:"On failure",icon:"mdi:alert-circle-outline",entity:this.failure},{key:"room",label:"Follows the room",icon:"mdi:motion-sensor",entity:this.room}].filter(t=>t.key==="rest"||t.entity&&this.hass.states[t.entity])}showing(e){if(e.entity)return this.hass.states[e.entity]?.state??"";let t=this.hass.states[this.light];return t?.state!=="on"?"":t.attributes.effect??""}options(e){return(e.entity?this.hass.states[e.entity]?.attributes.options:this.hass.states[this.light]?.attributes.effect_list)??[]}choose(e,t){if(!e.entity){this.hass.callService("light","turn_on",{entity_id:this.light,effect:t});return}this.hass.callService("select","select_option",{entity_id:e.entity,option:t})}};U.styles=[b(me),b(li)],c([m({attribute:!1})],U.prototype,"hass",2),c([m()],U.prototype,"light",2),c([m()],U.prototype,"muted",2),c([m()],U.prototype,"failure",2),c([m()],U.prototype,"room",2),c([u()],U.prototype,"target",2),U=c([y("echolocal-appearance")],U);var is={mic_mute:"Cuts the microphones in hardware. The device cannot hear anything at all while this is on, including its wake word \u2014 it is a switch on the power to the capsules, not a software mute.",microphone_gain:"How much the capsules are amplified before anything else happens. Raise it in a large or quiet room; lower it if speech close to the device clips and comes out distorted.",microphone_mixing:"How the seven capsules are combined into the one channel the speech engine hears. Beamforming favours whichever direction someone is talking from and rejects the rest of the room; averaging treats every direction equally and is steadier when several people talk.",microphone_leveling:"Evens out loud and quiet talkers so a whisper across the room and a shout beside it arrive at similar volume. Helps transcription, and costs a little dynamic range.",microphone_cancel_echo:"Subtracts what the speaker is playing from what the microphones hear, so the device can be interrupted while it is talking and does not answer its own reply.",microphone_noise_reduction:"Takes the steady part of the room \u2014 a fan, traffic, air conditioning \u2014 out of what the microphones heard. Try turning it on in a room with background noise.",microphone_sensitivity:"How much louder than the room's own noise floor a sound has to be before the device treats it as somebody talking. Raise it in a noisy room to stop the device reacting to the room itself; lower it if quiet speech is missed.",room_level:"How loud the room is right now, in decibels below full scale. Nothing to set \u2014 it is what the sensitivity is measured against, and watching it is how you pick a sensible one.",room_floor:"The quietest the room has been recently, which is the baseline the device compares against. It drifts with the room, so a fridge switching on raises it rather than fooling the device.",mute_led_brightness:"How bright the red ring is while the microphones are cut. Dim is enough to see in a dark room without lighting it up.",mute_sound:"What the device plays when the microphones are cut or restored. Mute tones fall for muting and rise for unmuting, so the two are told apart without looking; None mutes silently.",stop_word_sensitivity:"How sure the device has to be before it takes an interruption as the word stop. Lower it if saying stop over a reply does not land.",ring:"The whole ring, as one light. Turning it off leaves the device working normally and silent about it.",segment:"One of the twelve segments, addressable on its own. They ship switched off in Home Assistant because twelve extra lights in every list is rarely what anyone wants \u2014 enable one and it can be coloured individually from the card.",ring_muted:"What the ring does while the microphones are cut. Something visible is worth choosing: a muted device that looks identical to a listening one is how people end up talking to a device that cannot hear them.",failure_effect:"What the ring does when a turn fails \u2014 no network, no pipeline, nothing understood. Distinct from the normal colours on purpose.",room_reaction:"Lets the ring track how loud the room is while the device is listening, so somebody can see that it is hearing them before it answers.",headphones:"Sends audio out of the jack instead of the speaker. The speaker goes quiet while this is on.",noise_layer:"Plays a generated sound the device makes itself \u2014 rain, a fan, a brook. Nothing is streamed and nothing is stored: it is synthesised as it plays, so it never loops or runs out. Two layers can overlap, so rain over a fan is one choice in each.",media_on_turn:"What happens to music when someone says the wake word. Ducking drops the volume and keeps playing, which resumes on the same note; stopping does not.",media_duck_level:"How far the volume drops while the device is listening or talking. Far enough that the microphones are not fighting the music, not so far that the room goes silent.",cast_receiver:"Lets phones and browsers cast to the device.",youtube_live_delay:"How far behind live a YouTube live stream plays, in seconds.",youtube_sponsorblock:"SponsorBlock categories to skip in YouTube videos, separated by commas.",backlight:"How bright the screen is.",screen_mode:"Sets the brightness from the room's light.",drawer_edge:"Which edge of the screen the dock sits on.",idle_after:"How long the screen waits with nobody using it before the idle screen comes up.",poster_every:"How often the next photo comes up.",rtsp:"Serves the camera as an RTSP stream on the network.",camera_keyframe:"Seconds between full frames.",camera_banding:"Set to your mains frequency if lights flicker in the picture.",bluetooth_speaker:"Lets phones pair with the device and play through it.",voice_resampling:"How the reply's audio is resampled to what the speaker wants. Better quality costs a little more work on a device that has four small cores.",wake_word:"What this assistant listens for. The list is what the device has on disk plus whatever Home Assistant is offering from its custom_wake_words directory.",wake_threshold:"How sure the device has to be before it decides it heard its wake word. Lower it if it misses you; raise it if the television sets it off.",follow_up:"Keeps listening for a moment after a reply, so a second question needs no second wake word.",max_listen:"How long the device will wait for someone to finish talking before giving up on the turn.",max_think:"How long to wait for Home Assistant's pipeline to answer. Generous is usually right \u2014 a slow answer beats a turn that dies just before it arrives.",wake_effect:"What the ring does at this point in a turn. Cosmetic, but it is how somebody knows the device heard them.",thinking_effect:"What the ring does while Home Assistant works on the answer. Default leaves it as the ring effect, played backwards.",replying_effect:"What the ring does while the answer plays. Default leaves it as the ring effect, played backwards.",wake_tone:"A short sound at this point in a turn. Some people want the confirmation; some find it grating.",reply_buffer:"How much of a reply to collect before starting to play it. More is steadier on a poor network, at the cost of answering a beat later.",reply_delivery:"Whether a reply starts playing as it arrives or once all of it has. Streaming is faster to start and stutters on a bad connection.",update_channel:"Which releases this device is offered. Stable only, or the ones that are still being tried out.",check_for_updates:"Looks now rather than waiting for the next scheduled check. Nothing is installed by pressing it.",bluetooth_proxy:"Forwards nearby Bluetooth advertisements to Home Assistant, so this device extends Bluetooth coverage into its room. It costs some radio time it would otherwise spend on wifi.",metrics_interval:"How often the device reports its own temperature, memory and load. Often enough to be useful; every report is work the device does instead of listening.",purge_cache:"Deletes what Android's runtime has cached. It comes back on its own, so this buys disk space for a while rather than permanently.",test_playback:"Plays a short sound, which is the quickest way to find out whether the speaker, the volume and the output route are all what you think they are.",remote_adb:"Opens Android's debugging port over the network. Off by default, and worth leaving off: it is an unauthenticated way onto the device for anything on the same network.",insecure_tls:"Lets the device accept a certificate it cannot verify, which is what talking to a Home Assistant with a self-signed one needs. It also means anything on the network can pose as that server, so it is worth turning off again once a certificate the device trusts is in place.",vad_sensitivity:"How readily the device decides somebody has stopped talking. Tighter ends a turn sooner and can cut you off mid-sentence.",wifi_signal:"How strong the connection to the access point is. Above about -70 dBm is comfortable; below -80 dBm is where audio starts arriving late.",cpu_temperature:"The chip's own temperature. These run warm by design \u2014 it is a sustained climb rather than a number that matters.",load_average:"How much work is queued across the cores. Listening for a wake word is continuous work, so this is never zero.",memory_available:"How much memory is free. Wake models and the audio path are what use it.",free_space:"Disk left. Wake models and saved recordings are what fill it.",update_status:"What the last self-update did. Worth reading when a device is on an older version than the rest."},rs={array:"The seven capsules and what the room sounds like to them. The arc is how loud the room is right now; the notch is how far above the room's own noise floor something has to be before the device treats it as speech. Drag the notch, then talk from where you normally would and watch whether the arc crosses it.",appearance:"Ring controls, current brighness and color, active and conditional effects.",noise:"Sounds the device generates itself, mixed live rather than played from a file, so nothing loops. Two layers overlap \u2014 pick rain in one and a fan in the other.",volume:"The speaker's volume, in the same thirty steps the buttons on the device move it through, so this dial and the device agree.",history:"What the device has been hearing. Rows rebuilt from Home Assistant's recorder show what was said; rows the device itself reported also show where the time went and can be played back."},ss={microphone:"The seven microphones and how the room sounds to them. Everything here changes what the device hears before a word of it reaches Home Assistant, so it is the first place to look when it mishears or does not wake at all.",ring:"The twelve-segment light. None of it changes what the device does \u2014 it changes what somebody in the room can tell about it, which is why the muted and failed colours are worth setting.",playback:"The speaker: what comes out of it, how loud, and what happens to music when somebody talks to the device.",screen:"How the screen looks: brightness, theme, the clock, and what it shows when nobody is using it. Tap the screen on the card to open this.",poster:"Photos from an Immich server. Fill in the server and API key, then pick albums or tags.",camera:"The camera's picture and stream. Tap the picture for the live view.",assistant:"One wake word and the turn that follows it. A device can run more than one, each with its own word, sensitivity and timings, which is how one device answers to two names.",device:"The device itself rather than anything it hears or says: which releases it takes, what else it does for the network, and the housekeeping.",diagnostics:"What the device reports about itself. Nothing here is a setting \u2014 it is the evidence, and it is what to read before changing anything else.",activity:"The last few turns: what woke the device, what it heard, and what it said back. Rows the device itself reported also show where the time went, and can be played back or saved."};function Ge(n){return is[n]}function ci(n){return rs[n]}function di(n){return ss[n]??""}var hi="turn_audio",ui="recordings",mi="logs",gi="tone_write",ns=[{key:"listen_ms",label:"Listen"},{key:"think_ms",label:"Think"},{key:"speak_ms",label:"Reply"}];function ge(n){return ns.map(({key:i,label:e})=>({key:i,label:e,ms:Number(n[i]??0)})).filter(i=>i.ms>0)}function fe(n){return ge(n).reduce((i,e)=>i+e.ms,0)}function fi(n){let i=n;if(!i||i.version!=="1"||!i.wake_word)return null;let e={version:1,device:i.device_id??"",id:i.id??"",slot:pi(i.slot)??1,wake_word:i.wake_word,outcome:i.outcome??"completed"};i.heard&&(e.heard=i.heard),i.reply&&(e.reply=i.reply);for(let t of["listen_ms","think_ms","speak_ms","audio_seconds"]){let r=pi(i[t]);r!==void 0&&(e[t]=r)}return e}function pi(n){if(n===void 0||n==="")return;let i=Number(n);return Number.isFinite(i)?i:void 0}function Le(n,i,e,t){if(!n.connection)return Promise.resolve(()=>{});let r={type:"logbook/event_stream",start_time:i.toISOString()};return e.length&&(r.device_ids=e),n.connection.subscribeMessage(s=>{let a=[];for(let l of s.events??[]){let d=fi(l);d&&a.push({at:l.when*1e3,turn:d})}t(a)},r)}var vi=`:host{display:block}.caption{display:flex;align-items:baseline;gap:8px;margin-bottom:8px;font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.09em;color:var(--secondary-text-color)}.caption span{margin-left:auto;text-transform:none;letter-spacing:0;font-weight:400;font-size:.75rem}.turns{display:flex;flex-direction:column;gap:4px;max-height:300px;overflow:auto;mask-image:linear-gradient(to bottom,black calc(100% - 16px),transparent)}.turn{display:grid;grid-template-columns:auto 1fr auto;gap:4px 10px;padding:9px 12px;border-radius:12px;background:color-mix(in srgb,var(--primary-text-color) 5%,transparent)}.when{font-size:.78rem;font-variant-numeric:tabular-nums;color:var(--secondary-text-color);white-space:nowrap}.wake{font-size:.78rem;color:var(--primary-color)}.right{grid-column:3;grid-row:1;display:flex;align-items:center;gap:8px}.outcome{font-size:.72rem;color:var(--secondary-text-color);white-space:nowrap}.outcome[data-bad=true]{color:var(--error-color, #db4437)}.said,.said-back,.bar{grid-column:2 / span 2}.said{font-size:.85rem;color:var(--primary-text-color)}.said-back{font-size:.85rem;color:var(--secondary-text-color)}.said-back:before{content:"\\21b3  ";opacity:.6}.bar{display:flex;height:20px;margin-top:6px;border-radius:5px;overflow:hidden;background:color-mix(in srgb,var(--primary-text-color) 8%,transparent)}.slice{min-width:2px;display:flex;align-items:center;justify-content:center;overflow:hidden;font-size:.68rem;font-variant-numeric:tabular-nums;color:var(--text-primary-color, #fff);white-space:nowrap}.slice[data-phase=listen_ms]{background:color-mix(in srgb,var(--primary-color) 55%,transparent)}.slice[data-phase=think_ms]{background:color-mix(in srgb,var(--primary-text-color) 30%,transparent)}.slice[data-phase=speak_ms]{background:var(--success-color, #43a047)}.legend{display:flex;flex-wrap:wrap;gap:14px;margin-bottom:10px;font-size:.7rem;color:var(--secondary-text-color)}.key{display:flex;align-items:center;gap:5px}.dot{width:9px;height:9px;border-radius:2px}.none{padding:10px 0;font-size:.82rem;color:var(--secondary-text-color)}.loading{display:flex;justify-content:center;padding:32px 0}
`;var yt=new Map;function yi(n){return yt.get(n)}var os=6e4,ls=6e3,bi=new Map,bt=new Map;function xi(n,i){let e=bi.get(i);if(e&&Date.now()-e.at<os)return Promise.resolve(e.ids);let t=bt.get(i);if(t)return t;let r=ds(cs(n,i),ls).catch(()=>new Set).then(s=>(bi.set(i,{at:Date.now(),ids:s}),s)).finally(()=>bt.delete(i));return bt.set(i,r),r}async function cs(n,i){let t=(await n.callService("esphome",i,{},void 0,!0,!0))?.response;return t?.version===1&&Array.isArray(t.ids)?new Set(t.ids):new Set}function ds(n,i){return new Promise((e,t)=>{let r=setTimeout(()=>t(new Error("timeout")),i);n.then(s=>{clearTimeout(r),e(s)},s=>{clearTimeout(r),t(s)})})}function ce(n,i,e){let r=`${i.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}_${e}`;return n?.services?.esphome?.[r]?r:void 0}async function wi(n,i,e){let t=yt.get(e);if(t)return t;let r=[],s="audio/wav",a=1;for(let d=0;d<Math.min(a,64);d++){let h=await ps(n,i,e,d);if(!h)return null;a=h.pages||1,s=h.mime||s,r.push(hs(h.data))}let l=URL.createObjectURL(new Blob(r,{type:s}));return yt.set(e,l),l}async function ps(n,i,e,t){try{let s=(await n.callService("esphome",i,{id:e,page:t},void 0,!0,!0))?.response;return s?.version===1&&typeof s.data=="string"?s:null}catch{return null}}function hs(n){let i=atob(n),e=new Uint8Array(i.length);for(let t=0;t<i.length;t++)e[t]=i.charCodeAt(t);return e}var $i=`:host{display:flex;gap:6px;flex:0 0 auto}button{flex:0 0 auto;width:28px;height:28px;display:grid;place-items:center;padding:0;border:1px solid color-mix(in srgb,var(--primary-color) 40%,transparent);border-radius:50%;background:color-mix(in srgb,var(--primary-color) 12%,transparent);cursor:pointer}button.keep{border-color:color-mix(in srgb,var(--primary-text-color) 18%,transparent);background:color-mix(in srgb,var(--primary-text-color) 5%,transparent)}button ha-icon{--mdc-icon-size: 16px;color:var(--primary-color);display:flex}button.keep ha-icon{color:var(--secondary-text-color)}.gone{display:flex;opacity:.4}.gone ha-icon{--mdc-icon-size: 16px;color:var(--secondary-text-color);display:flex}
`;var ve=null,ms=5*6e4,E=class extends v{constructor(){super(...arguments);this.device="";this.turn="";this.filename="recording.wav";this.at=0;this.busy=!1;this.playing=!1;this.gone=!1;this.play=async()=>{if(this.playing){ve?.audio.pause();return}let e=await this.fetch();if(!e)return;ve?.stop();let t=new Audio(e),r=()=>{this.playing=!1,ve?.audio===t&&(ve=null)};t.addEventListener("ended",r),t.addEventListener("pause",r),ve={audio:t,stop:()=>t.pause()},this.playing=!0,t.play().catch(r)};this.save=async()=>{let e=await this.fetch();if(!e)return;let t=document.createElement("a");t.href=e,t.download=this.filename,t.click()}}disconnectedCallback(){super.disconnectedCallback(),this.playing&&ve?.audio.pause()}updated(){if(!this.hass||!this.turn||this.checkedTurn===this.turn)return;if(this.checkedTurn=this.turn,this.present=void 0,this.gone=!1,this.at&&Date.now()-this.at<ms){this.present=!0;return}let e=this.device?ce(this.hass,this.device,ui):void 0;e&&xi(this.hass,e).then(t=>{this.checkedTurn===this.turn&&(this.present=t.has(this.turn))})}render(){return!this.turn||!this.action()||this.present!==!0?p:this.gone?o`<span class="gone" title="The device no longer has this recording">
        <ha-icon icon="mdi:playlist-remove"></ha-icon>
      </span>`:o`
      <button
        aria-label=${this.playing?"Stop the recording":"Play the recording"}
        @click=${this.play}
      >
        <ha-icon
          .icon=${this.busy?"mdi:timer-outline":this.playing?"mdi:pause":"mdi:play"}
        ></ha-icon>
      </button>
      <button class="keep" aria-label="Save the recording" @click=${this.save}>
        <ha-icon icon="mdi:tray-arrow-down"></ha-icon>
      </button>
    `}action(){return this.device?ce(this.hass,this.device,hi):void 0}async fetch(){let e=yi(this.turn);if(e)return e;let t=this.action();if(!t)return null;this.busy=!0;try{let r=await wi(this.hass,t,this.turn);return this.gone=!r,r||this.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:"That recording is no longer on the device."},bubbles:!0,composed:!0})),r}finally{this.busy=!1}}};E.styles=b($i),c([m({attribute:!1})],E.prototype,"hass",2),c([m()],E.prototype,"device",2),c([m()],E.prototype,"turn",2),c([m()],E.prototype,"filename",2),c([m({type:Number})],E.prototype,"at",2),c([u()],E.prototype,"busy",2),c([u()],E.prototype,"playing",2),c([u()],E.prototype,"present",2),c([u()],E.prototype,"gone",2),E=c([y("echolocal-recording")],E);var gs=14,F=class extends v{constructor(){super(...arguments);this.device="";this.deviceId="";this.live=[];this.asked=!1;this.loading=!0}updated(){this.asked||!this.hass||!this.deviceId||(this.asked=!0,this.listen())}disconnectedCallback(){super.disconnectedCallback(),this.stop?.()}render(){let e=this.merged(),t=e.some(r=>r.turn&&ge(r.turn).length>0);return o`
      <div class="caption">
        Recent turns
        ${e.length?o`<span>${e.length===1?"1 turn":`${e.length} turns`}</span>`:p}
      </div>
      ${t?o`<div class="legend">
            ${[["listen_ms","Listen"],["think_ms","Think"],["speak_ms","Reply"]].map(([r,s])=>o`<span class="key"
                ><span class="dot slice" data-phase=${r}></span>${s}</span
              >`)}
          </div>`:p}
      ${e.length?o`<div class="turns">${e.map(r=>this.row(r,this.scale(e)))}</div>`:this.loading?o`<div class="loading"><ha-spinner size="medium"></ha-spinner></div>`:o`<div class="none">No recent activity found.</div>`}
    `}scale(e){return Math.max(1,...e.map(t=>t.turn?fe(t.turn):0))}row(e,t){let r=e.turn,s=r?ge(r):[],a=r?fe(r):0;return o`<div class="turn">
      <div class="when">${fs(e.at)}</div>
      <div class="wake">${e.wake}</div>
      <div class="right">
        ${r?o`<div class="outcome" data-bad=${String(r.outcome!=="completed")}>
              ${r.outcome==="completed"?`${(a/1e3).toFixed(1)}s`:r.outcome}
            </div>`:p}
        ${r?.audio_seconds?o`<echolocal-recording
              .hass=${this.hass}
              .device=${this.device}
              .turn=${r.id}
              .at=${e.at}
              .filename=${vs(e)}
            ></echolocal-recording>`:p}
      </div>
      ${e.heard?o`<div class="said">${e.heard}</div>`:p}
      ${e.reply?o`<div class="said-back">${e.reply}</div>`:p}
      ${s.length?o`<div class="bar">
            ${s.map(l=>o`<div
                class="slice"
                data-phase=${l.key}
                title=${`${l.label} ${l.ms} ms`}
                style=${`flex:0 0 ${l.ms/t*100}%`}
              >
                ${(l.ms/1e3).toFixed(1)}s
              </div>`)}
          </div>`:p}
    </div>`}merged(){return[...this.live].sort((e,t)=>t.at-e.at)}async listen(){let e=new Date(Date.now()-gs*864e5),t=this.deviceId?[this.deviceId]:[];try{this.stop=await Le(this.hass,e,t,r=>{this.loading=!1,r.length&&(this.live=[...r.map(({at:s,turn:a})=>({at:s,wake:a.wake_word,heard:a.heard,reply:a.reply,turn:a})),...this.live])})}catch{this.loading=!1}}};F.styles=b(vi),c([m({attribute:!1})],F.prototype,"hass",2),c([m()],F.prototype,"device",2),c([m()],F.prototype,"deviceId",2),c([u()],F.prototype,"live",2),c([u()],F.prototype,"asked",2),c([u()],F.prototype,"loading",2),F=c([y("echolocal-history")],F);function fs(n){return new Date(n).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})}function vs(n){let i=new Date(n.at).toISOString().replace(/[:.]/g,"-").slice(0,19),e=n.wake.toLowerCase().replace(/[^a-z0-9]+/g,"-");return`${i}-${e}.wav`}var ki=`:host{display:flex;flex:0 0 auto;align-self:center}button{flex:0 0 auto;display:flex;align-items:center;gap:8px;height:34px;padding:0 14px;border:1px solid color-mix(in srgb,var(--primary-text-color) 18%,transparent);border-radius:999px;background:color-mix(in srgb,var(--primary-text-color) 5%,transparent);color:var(--primary-text-color);font:inherit;font-size:.9em;white-space:nowrap;cursor:pointer}button[disabled]{cursor:default;opacity:.6}button ha-icon{--mdc-icon-size: 18px;color:var(--secondary-text-color);display:flex}button.failed{border-color:color-mix(in srgb,var(--error-color, #db4437) 50%,transparent)}button.failed ha-icon{color:var(--error-color, #db4437)}
`;var ys=64,Y=class extends v{constructor(){super(...arguments);this.device="";this.busy=!1;this.failed=!1;this.save=async()=>{let e=this.action();if(e){this.busy=!0,this.failed=!1;try{let t=await this.read(e);if(!t){this.failed=!0;return}ws(`${this.device}_logs_${xs()}.txt`,t.join(`
`)+`
`)}finally{this.busy=!1}}}}render(){return this.action()?o`
      <button
        ?disabled=${this.busy}
        class=${this.failed?"failed":""}
        title=${this.failed?"Could not read the logs":"Diagnostic logs"}
        aria-label=${this.failed?"Could not read the logs":"Download diagnostic logs"}
        @click=${this.save}
      >
        <ha-icon
          .icon=${this.busy?"mdi:timer-outline":"mdi:tray-arrow-down"}
        ></ha-icon>
        <span>${this.failed?"Could not read the logs":"Diagnostic logs"}</span>
      </button>
    `:p}action(){return this.device?ce(this.hass,this.device,mi):void 0}async read(e){let t=[],r=1;for(let s=0;s<Math.min(r,ys);s++){let a=await this.call(e,s);if(!a)return null;r=a.pages||1,t.push(...a.lines??[])}return t}async call(e,t){try{let s=(await this.hass.callService("esphome",e,{page:t},void 0,!0,!0))?.response;return s?.version===1&&Array.isArray(s.lines)?s:null}catch{return null}}};Y.styles=b(ki),c([m({attribute:!1})],Y.prototype,"hass",2),c([m()],Y.prototype,"device",2),c([u()],Y.prototype,"busy",2),c([u()],Y.prototype,"failed",2),Y=c([y("echolocal-logs")],Y);function xs(){return new Date().toISOString().replace(/\.\d+Z$/,"").replace(/:/g,"-")}function ws(n,i){let e=URL.createObjectURL(new Blob([i],{type:"text/plain"})),t=document.createElement("a");t.href=e,t.download=n,t.click(),URL.revokeObjectURL(e)}var _i=`:host{display:block;padding:14px;border-radius:14px;background:color-mix(in srgb,var(--primary-text-color) 5%,transparent)}.caption{display:flex;align-items:baseline;gap:8px;margin-bottom:10px;font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.09em;color:var(--secondary-text-color)}.caption span{margin-left:auto;text-transform:none;letter-spacing:0;font-weight:400;font-size:.75rem}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(78px,1fr));gap:6px}.sound{position:relative;display:flex;flex-direction:column;align-items:center;gap:6px;padding:10px 6px;border:1px solid transparent;border-radius:12px;background:color-mix(in srgb,var(--primary-text-color) 6%,transparent);color:var(--secondary-text-color);font:inherit;font-size:.75rem;cursor:pointer}.sound:hover{background:color-mix(in srgb,var(--primary-text-color) 12%,transparent)}.sound[data-on=true]{border-color:color-mix(in srgb,var(--primary-color) 45%,transparent);background:color-mix(in srgb,var(--primary-color) 15%,transparent);color:var(--primary-color)}.sound ha-icon{--mdc-icon-size: 22px;display:flex}.layer{position:absolute;top:4px;right:6px;font-size:.62rem;line-height:1}
`;var Si=`:host{display:flex;gap:18px;align-items:center;padding:14px;border-radius:14px;background:color-mix(in srgb,var(--primary-text-color) 5%,transparent)}.dial{width:150px;flex:0 0 auto;touch-action:none}svg{width:100%;height:auto;display:block}.bed{fill:none;stroke:color-mix(in srgb,var(--primary-text-color) 10%,transparent);stroke-width:10;stroke-linecap:round}.live{fill:none;stroke:var(--primary-color);stroke-width:10;stroke-linecap:round;transition:stroke-dasharray .25s ease}.live[data-muted=true]{stroke:color-mix(in srgb,var(--primary-text-color) 20%,transparent)}.step{fill:var(--primary-text-color);font-size:26px;font-weight:500;text-anchor:middle}.of{fill:var(--secondary-text-color);font-size:10px;text-anchor:middle;text-transform:uppercase;letter-spacing:.1em}.side{flex:1 1 auto;min-width:0;display:flex;align-items:center;justify-content:space-between;gap:12px}.state{font-size:1.05rem;color:var(--primary-text-color)}.badges{display:flex;flex-wrap:wrap;gap:6px}.badge{display:flex;align-items:center;gap:6px;padding:5px 10px;border-radius:10px;background:color-mix(in srgb,var(--primary-text-color) 7%,transparent);font-size:.78rem;color:var(--secondary-text-color)}.badge ha-icon{--mdc-icon-size: 16px;display:flex}.badge[data-on=true]{background:color-mix(in srgb,var(--primary-color) 16%,transparent);color:var(--primary-color)}
`;var xt=135,wt=270,Ve=100,Ye=100,be=78,_s={White:"mdi:grain",Pink:"mdi:blur",Brown:"mdi:waveform",Rain:"mdi:weather-pouring",Ocean:"mdi:waves",Brook:"mdi:water",Wind:"mdi:weather-windy",Fire:"mdi:fireplace",Crickets:"mdi:bug-outline",Fan:"mdi:fan",Cabin:"mdi:airplane"},ye="None",J=class extends v{constructor(){super(...arguments);this.player="";this.jack="";this.grab=e=>{let t=e.currentTarget;t.setPointerCapture(e.pointerId);let r=d=>{let h=t.getBoundingClientRect(),g=d.clientX-h.left-h.width/2,f=d.clientY-h.top-h.height/2,w=Math.atan2(f,g)*180/Math.PI-xt;for(;w<0;)w+=360;let $=Math.max(0,Math.min(1,Math.min(w,wt)/wt));return Math.round($*30)/30},s=d=>this.hass.callService("media_player","volume_set",{entity_id:this.player,volume_level:r(d)}),a=d=>s(d),l=d=>{t.removeEventListener("pointermove",a),t.removeEventListener("pointerup",l),t.removeEventListener("pointercancel",l),s(d)};t.addEventListener("pointermove",a),t.addEventListener("pointerup",l),t.addEventListener("pointercancel",l),s(e)}}render(){let e=this.hass.states[this.player];if(!e)return p;let t=Number(e.attributes.volume_level??0),r=e.attributes.is_volume_muted===!0,s=this.jack?this.hass.states[this.jack]?.state==="on":!1;return o`
      <div class="dial" @pointerdown=${this.grab}>
        <svg viewBox="0 0 200 200" role="img" aria-label="Volume">
          <path class="bed" d=${Ai()} pathLength="100"></path>
          ${t>0?x`<path class="live" data-muted=${String(r)} d=${Ai()} pathLength="100"
                stroke-dasharray=${`${t*100} 100`}></path>`:p}
          <text class="step" x=${Ve} y=${Ye+4}>${Math.round(t*30)}</text>
          <text class="of" x=${Ve} y=${Ye+20}>of 30</text>
        </svg>
      </div>

      <div class="side">
        <div class="state">${Ss(e.state)}</div>
        <div class="badges">
          <div class="badge" data-on=${String(r)}>
            <ha-icon .icon=${r?"mdi:volume-off":"mdi:volume-high"}></ha-icon>
            ${r?"Muted":`${Math.round(t*100)}%`}
          </div>
          ${this.jack?o`<div class="badge" data-on=${String(s)}>
                <ha-icon icon="mdi:headphones"></ha-icon>
                ${s?"Headphones":"Speaker"}
              </div>`:p}
        </div>
      </div>
    `}};J.styles=b(Si),c([m({attribute:!1})],J.prototype,"hass",2),c([m()],J.prototype,"player",2),c([m()],J.prototype,"jack",2),J=c([y("echolocal-volume")],J);var Q=class extends v{constructor(){super(...arguments);this.layers=[];this.busy=!1}render(){let e=this.layers.map(a=>this.hass.states[a]?.state??ye),t=(this.hass.states[this.layers[0]]?.attributes.options??[]).filter(a=>a!==ye),r=e.every(a=>a!==ye),s=a=>e.indexOf(a);return o`
      <div class="caption">
        Generated sound
        <span>${r?"Both layers in use":`${e.filter(a=>a!==ye).length} of 2`}</span>
      </div>
      <div class="grid">
        ${t.map(a=>{let l=s(a);return o`<button
            class="sound"
            data-on=${String(l>=0)}
            ?disabled=${this.busy}
            @click=${()=>this.pick(a,l,e)}
          >
            <ha-icon .icon=${_s[a]??"mdi:music-note"}></ha-icon>
            ${a}
            ${l>=0&&this.layers.length>1?o`<span class="layer">${l+1}</span>`:p}
          </button>`})}
      </div>
    `}async pick(e,t,r){let s=r.findIndex(l=>l===ye),a=t>=0?t:s>=0?s:this.layers.length-1;if(!(a<0)){this.busy=!0;try{await this.hass.callService("select","select_option",{entity_id:this.layers[a],option:t>=0?ye:e})}finally{this.busy=!1}}}};Q.styles=b(_i),c([m({attribute:!1})],Q.prototype,"hass",2),c([m({attribute:!1})],Q.prototype,"layers",2),c([u()],Q.prototype,"busy",2),Q=c([y("echolocal-noise")],Q);function Ss(n){return n==="playing"?"Playing":n==="paused"?"Paused":n==="unavailable"?"Unavailable":"Idle"}function Ai(){let n=xt*Math.PI/180,i=(xt+wt)*Math.PI/180;return`M${(Ve+be*Math.cos(n)).toFixed(2)} ${(Ye+be*Math.sin(n)).toFixed(2)}
    A${be} ${be} 0 1 1 ${(Ve+be*Math.cos(i)).toFixed(2)} ${(Ye+be*Math.sin(i)).toFixed(2)}`}var M=class extends v{constructor(){super(...arguments);this.heading="";this.subtitle="";this.icon="";this.sections=[];this.widgets=[];this.device="";this.deviceId="";this.help=!0;this.about="";this.held={}}render(){let e=this.sections.map(a=>({...a,rows:a.rows.filter(l=>this.hass.states?.[l.entityId])})).filter(a=>a.rows.length),s=`--ha-dialog-width-md:${e.reduce((a,l)=>a+l.rows.length,0)>3||this.widgets.some(a=>a.place!=="header")?820:460}px`;return o`
      <ha-dialog open hideActions style=${s} @closed=${this.dismiss}>
        <div class="sheet">
          <div class="head">
            <div class="crest"><ha-icon .icon=${this.icon}></ha-icon></div>
            <div class="titles">
              <div class="title">
                ${this.heading}
                ${this.help&&this.about?o`<echolocal-bubble .text=${this.about}></echolocal-bubble>`:p}
              </div>
              ${this.subtitle?o`<div class="subtitle">${this.subtitle}</div>`:p}
            </div>
            ${this.widgets.filter(a=>a.place==="header").map(a=>this.widget(a))}
          </div>
          ${this.widgets.filter(a=>a.place!=="header").map(a=>this.explained(a))}
          <div class="groups">
            ${e.length?e.map(a=>this.group(a)):this.widgets.length?p:o`<div class="empty">Nothing to show here.</div>`}
          </div>
        </div>
      </ha-dialog>
    `}widget({widget:e,roles:t,lists:r}){let s=a=>a?.[0]??"";switch(e){case"appearance":return o`<echolocal-appearance
          class="hero"
          .hass=${this.hass}
          .light=${t.light}
          .muted=${s(r.muted)}
          .failure=${s(r.failure)}
          .room=${s(r.room)}
        ></echolocal-appearance>`;case"array":return o`<echolocal-array
          class="hero"
          .hass=${this.hass}
          .level=${t.level}
          .floor=${t.floor}
          .gate=${t.gate}
          .mode=${t.mode}
          .muted=${this.muted}
        ></echolocal-array>`;case"logs":return o`<echolocal-logs
          .hass=${this.hass}
          .device=${this.device}
        ></echolocal-logs>`;case"history":return o`<echolocal-history
          class="hero"
          .hass=${this.hass}
          .device=${this.device}
          .deviceId=${this.deviceId}
        ></echolocal-history>`;case"volume":return o`<echolocal-volume
          class="hero"
          .hass=${this.hass}
          .player=${t.player}
          .jack=${s(r.jack)}
        ></echolocal-volume>`;case"noise":return o`<echolocal-noise
          class="hero"
          .hass=${this.hass}
          .layers=${r.layers??[]}
        ></echolocal-noise>`;case"player":return this.crownPlayer(t.player);case"power":return this.crownPower(t.light);case"mute":return this.crownMute(t.mute,t.lamp);case"camera":return this.crownCamera(t.camera)}}crownCamera(e){let t=this.hass.states[e]?.attributes.entity_picture;if(typeof t!="string")return o``;let r=`${t}${t.includes("?")?"&":"?"}t=${Math.floor(Date.now()/1e4)}`;return o`<button class="crown picture" @click=${()=>this.moreInfo(e)}>
      <img src=${r} alt="Camera" />
    </button>`}crownPlayer(e){let t=this.hass.states[e],r=t?.state==="playing",s=t?.attributes.is_volume_muted!==!0;return o`<div class="crown">
      <ha-icon-button
        .label=${r?"Pause":"Play"}
        @click=${()=>this.hass.callService("media_player",r?"media_pause":"media_play",{entity_id:e})}
      >
        <ha-icon .icon=${r?"mdi:pause":"mdi:play"}></ha-icon>
      </ha-icon-button>
      ${this.crownSwitch(s,"Sound",a=>this.hass.callService("media_player","volume_mute",{entity_id:e,is_volume_muted:!a}))}
    </div>`}crownPower(e){return o`<div class="crown">
      ${this.crownSwitch(this.hass.states[e]?.state==="on","Ring",t=>this.hass.callService("light",t?"turn_on":"turn_off",{entity_id:e}))}
    </div>`}crownMute(e,t){let r=this.hass.states[t];return o`<div class="crown">
      ${r?o`<ha-control-select
            class="lamp"
            .options=${(r.attributes.options??[]).map(s=>({value:s,label:s}))}
            .value=${r.state}
            label="Mute indicator"
            @value-changed=${s=>this.hass.callService("select","select_option",{entity_id:t,option:s.detail.value})}
          ></ha-control-select>`:p}
      ${this.crownSwitch(this.hass.states[e]?.state==="on","Microphone mute",s=>this.hass.callService("switch",s?"turn_on":"turn_off",{entity_id:e}),"warn")}
    </div>`}crownSwitch(e,t,r,s=""){return o`<ha-control-switch
      class=${s}
      .checked=${e}
      .label=${t}
      @change=${a=>r(a.target.checked)}
    ></ha-control-switch>`}get muted(){let e=this.widgets.find(t=>t.roles.mute)?.roles.mute;return!!e&&this.hass.states[e]?.state==="on"}explained(e){let t=this.help?ci(e.widget):void 0;return t?o`<div class="explained">
      ${this.widget(e)}
      <echolocal-bubble class="corner" .text=${t}></echolocal-bubble>
    </div>`:this.widget(e)}group(e){return o`<section class="group">
      ${e.title?o`<div class="section">${e.title}</div>`:p}
      ${e.rows.map(t=>this.row(t))}
    </section>`}row(e){if(!this.hass.states?.[e.entityId])return p;switch(e.entityId.split(".")[0]){case"switch":return this.toggle(e,"switch");case"light":return this.toggle(e,"light");case"number":return this.slider(e);case"select":return this.options(e);case"button":return this.press(e);case"update":return this.version(e);default:return this.reading(e)}}version(e){let t=this.hass.states[e.entityId],r=t.attributes.installed_version,s=t.attributes.latest_version,a=t.state==="on"&&s&&s!==r;return t.attributes.in_progress?this.tile(e,!0,{trail:o`<ha-spinner size="tiny"></ha-spinner>`,under:o`<div class="note">Installing ${String(s)}</div>`}):this.tile(e,!1,{trail:o`<button class="reading version" @click=${()=>this.moreInfo(e.entityId)}>
        ${r?String(r):t.state}
      </button>`,under:a?o`<div class="offer">
            <div class="note">New: ${String(s)}</div>
            <ha-button
              size="small"
              @click=${()=>this.hass.callService("update","install",{entity_id:e.entityId})}
            >
              Update
            </ha-button>
          </div>`:void 0})}toggle(e,t){let{entityId:r,label:s}=e,a=this.hass.states[r].state;return this.tile(e,a==="on",{trail:o`<ha-control-switch
        .checked=${a==="on"}
        .disabled=${a==="unavailable"}
        .label=${s}
        @change=${l=>this.hass.callService(t,l.target.checked?"turn_on":"turn_off",{entity_id:r})}
      ></ha-control-switch>`})}slider(e){let{entityId:t}=e,r=this.hass.states[t],s=r.attributes,a=s.min??0,l=s.max??100,d=this.held[t]??Number(r.state);return this.tile(e,!1,{trail:o`<span class="reading">${Number.isNaN(d)?"\u2014":d}</span>
        ${s.unit_of_measurement?o`<span class="unit">${s.unit_of_measurement}</span>`:p}`,under:o`<ha-control-slider
        .value=${d}
        .min=${a}
        .max=${l}
        .step=${s.step??1}
        .unit=${s.unit_of_measurement??""}
        .disabled=${r.state==="unavailable"}
        @slider-moved=${h=>{this.held={...this.held,[t]:h.detail.value}}}
        @value-changed=${h=>{let{[t]:g,...f}=this.held;this.held=f,this.hass.callService("number","set_value",{entity_id:t,value:h.detail.value})}}
      ></ha-control-slider>`})}options(e){let{entityId:t}=e,r=this.hass.states[t],s=r.attributes.options??[],a=s.map(h=>({value:h,label:h})),l=h=>{h&&h!==r.state&&this.hass.callService("select","select_option",{entity_id:t,option:h})},d=r.state==="unavailable";return this.tile(e,!1,{trail:s.length===2?o`<div class="pills">
              ${s.map(h=>o`<button
                  class="pill"
                  data-on=${String(h===r.state)}
                  ?disabled=${d}
                  @click=${()=>l(h)}
                >
                  ${h}
                </button>`)}
            </div>`:o`<ha-control-select-menu
              .options=${a}
              .value=${r.state}
              .disabled=${d}
              .label=${e.label}
              hide-label
              show-arrow
              @wa-select=${h=>l(h.detail.item?.value)}
            ></ha-control-select-menu>`})}press(e){let t=e.reading?this.hass.states[e.reading]:void 0,r=o`<ha-button
      size="small"
      @click=${()=>this.hass.callService("button","press",{entity_id:e.entityId})}
    >
      Run
    </ha-button>`;return t?this.tile(e,!1,{trail:o`<span class="reading">${t.state}</span>
        ${t.attributes.unit_of_measurement?o`<span class="unit">${t.attributes.unit_of_measurement}</span>`:p}`,under:r}):this.tile(e,!1,{trail:r})}reading(e){let t=this.hass.states[e.entityId],r=t.attributes.unit_of_measurement,s=t.state.split(", ").filter(l=>l.length);if(s.length>1)return this.tile(e,!1,{under:o`<button class="lines" @click=${()=>this.moreInfo(e.entityId)}>
          ${s.map(l=>o`<div>${l}</div>`)}
        </button>`});let a=t.attributes.mode==="password"&&t.state?"\u2022\u2022\u2022\u2022\u2022\u2022":t.state;return this.tile(e,!1,{trail:o`<button
          class=${a.length>12?"reading version":"reading"}
          title=${a}
          @click=${()=>this.moreInfo(e.entityId)}
        >
          ${a}
        </button>
        ${r?o`<span class="unit">${r}</span>`:p}`})}tile({entityId:e,label:t,name:r},s,a){let l=this.hass.states[e].attributes.icon,d=s&&l?.includes("mic")&&l.includes("off"),h=this.help?Ge(r):void 0;return o`<div class="tile" data-active=${String(s&&!d)} data-alert=${String(!!d)}>
      <div class="top">
        <div class="icon"><ha-icon .icon=${l??"mdi:tune"}></ha-icon></div>
        <div class="named">
          <div class="name">${t}</div>
          ${h?o`<echolocal-bubble .text=${h}></echolocal-bubble>`:p}
        </div>
        ${a.trail?o`<div class="trail">${a.trail}</div>`:p}
      </div>
      ${a.under??p}
    </div>`}moreInfo(e){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}dismiss(){this.dispatchEvent(new CustomEvent("closed",{bubbles:!0,composed:!0}))}};M.styles=[b(me),b(oi)],c([m({attribute:!1})],M.prototype,"hass",2),c([m()],M.prototype,"heading",2),c([m()],M.prototype,"subtitle",2),c([m()],M.prototype,"icon",2),c([m({attribute:!1})],M.prototype,"sections",2),c([m({attribute:!1})],M.prototype,"widgets",2),c([m()],M.prototype,"device",2),c([m()],M.prototype,"deviceId",2),c([m({type:Boolean})],M.prototype,"help",2),c([m()],M.prototype,"about",2),c([u()],M.prototype,"held",2),M=c([y("echolocal-dialog")],M);function Ti(n,i){let e=$t(n);return i.map(t=>{let r=e?.get(t.entity_id);return{...t,name:r?.name??"",slot:r?.slot??0}})}function Xe(n){let i=new Map;for(let e of n){let t=i.get(e.name);t?t.push(e):i.set(e.name,[e])}for(let e of i.values())e.sort((t,r)=>t.slot-r.slot);return i}var z="echolocal-keys",Ci=!1,Mi=null;function $t(n){return Ci||(Ci=!0,As(n)),Mi}function As(n){n.connection?.subscribeMessage(i=>{let e=new Map;for(let t of i.entities)t.device_id&&e.set(t.entity_id,{entityId:t.entity_id,deviceId:t.device_id,...Cs(t.object_id),disabled:t.disabled});Mi=e,window.dispatchEvent(new Event(z))},{type:"echolocal/entities"}).catch(()=>{})}function Cs(n){let i=n.lastIndexOf("_"),e=i<0?"":n.slice(i+1);return/^\d+$/.test(e)?{name:n.slice(0,i),slot:Number(e)}:{name:n,slot:0}}var kt=["microphone","playback","screen","poster","camera","assistant","device"];function Hi(){return kt.flatMap(n=>(Re[n]??[]).flatMap(i=>i.rows.map(([e,t])=>({kind:n,section:i.title,name:e,label:t}))))}var Re={ring:[{title:null,rows:[["ring","Ring"]]},{title:"Segments",rows:[["segment","Segment"]]}],microphone:[{title:null,rows:[["mic_mute","Mute"]]},{title:"Capture",rows:[["microphone_gain","Gain"],["microphone_mixing","Mixing"],["microphone_leveling","Leveling"],["microphone_cancel_echo","Echo cancellation"],["microphone_noise_reduction","Noise reduction"]]},{title:"The room",rows:[["microphone_sensitivity","Sensitivity"],["room_level","Room level"],["room_floor","Room floor"],["stop_word_sensitivity","Stop word"],["vad_sensitivity","End of speech"]]},{title:"Indicator",rows:[["mute_led_brightness","Mute light"],["mute_sound","Mute sound"]]}],playback:[{title:null,rows:[["headphones","Headphones"]]},{title:"Volume",rows:[["volume_media","Music"],["volume_voice","Voice"],["volume_alerts","Alerts"],["volume_feedback","Beeps"]]},{title:"Generated sound",rows:[["noise_layer","Layer"]]},{title:"During a turn",rows:[["media_on_turn","Music"],["media_duck_level","Ducking"]]},{title:"Voice",rows:[["voice_resampling","Resampling"]]},{title:"Cast",rows:[["cast_receiver","Cast receiver"],["youtube_lounge_on_demand","YouTube on demand"],["youtube_live_delay","YouTube live delay"],["youtube_sponsorblock","SponsorBlock categories"],["cast_credentials","Credentials"],["cast_credentials_expire","Credentials expire"],["cast_oracle","Credential server"]]}],screen:[{title:null,rows:[["backlight","Brightness"],["screen_mode","Automatic brightness"],["screen_brightness","Brightness now"],["ambient_light","Room light"]]},{title:"Look",rows:[["theme","Theme"],["screen_style","Style"],["screen_size","Size"],["drawer_edge","Dock side"],["dashboard_logo","Logo"],["privacy_marks","Privacy marks"]]},{title:"Clock",rows:[["clock_face","Face"],["clock_format","Format"],["clock_size","Size"],["clock_position","Position"],["clock_color","Color"],["clock_date","Date"]]},{title:"Visual",rows:[["visual","Visual"],["visual_label","Label"]]},{title:"When idle",rows:[["idle_after","Idle after"],["idle_face","Clock face"],["idle_size","Clock size"],["idle_position","Vertical position"],["idle_align","Horizontal position"],["idle_visual","Visual"],["idle_visual_1_source","Visual 1 listens to"],["idle_visual_2_source","Visual 2 listens to"]]}],poster:[{title:null,rows:[["poster","Posters"],["poster_showing","Showing"],["poster_every","Changes"],["poster_next","Next poster"]]},{title:"Immich",rows:[["poster_server","Server"],["poster_key","API key"],["poster_albums","Albums"],["poster_tags","Tags"]]}],camera:[{title:null,rows:[["camera_covered","Shutter closed"],["rtsp","RTSP server"],["camera_main_on","Main stream"]]},{title:"Stream",rows:[["camera_main_size","Resolution"],["camera_quality","Quality"],["camera_framerate","Frame rate"],["camera_framerate_auto","Automatic frame rate"],["camera_keyframe","Keyframe interval"]]},{title:"Picture",rows:[["camera_brightness","Brightness"],["camera_contrast","Contrast"],["camera_saturation","Saturation"],["camera_sharpness","Sharpness"],["camera_hue","Hue"],["camera_ev","Exposure"],["camera_iso","ISO"],["camera_whitebalance","White balance"],["camera_scene","Scene"],["camera_effect","Effect"],["camera_banding","Anti-banding"],["camera_reset","Reset"]]}],assistant:[{title:null,rows:[["wake_word","Wake word"],["pipeline","Pipeline"],["wake_threshold","Wake sensitivity"]]},{title:"Timing",rows:[["max_listen","Max listen"],["max_think","Max think"],["follow_up","Follow up"]]},{title:"Feedback",rows:[["wake_effect","Listening effect"],["thinking_effect","Thinking effect"],["replying_effect","Replying effect"],["wake_tone","Chime"]]},{title:"Reply",rows:[["reply_buffer","Buffer"],["reply_delivery","Delivery"]]},{title:"Recordings",rows:[["keep_recordings","Recordings kept"]]}],device:[{title:null,rows:[["firmware","Firmware"],["update_channel","Update channel"],["check_for_updates","Check for updates"]]},{title:"Bluetooth",rows:[["bluetooth_proxy","Proxy enabled"],["bluetooth_speaker","Speaker"]]},{title:"Maintenance",rows:[["metrics_interval","Metrics interval"],["purge_cache","Purge cache","cached_data"],["test_playback","Test playback"],["remote_adb","Remote adb"],["insecure_tls","Insecure TLS"]]}],diagnostics:[{title:"Network",rows:[["ip_address","IP address"],["wifi_signal","Signal"],["wifi_sent","Sent"],["wifi_received","Received"],["ble_advertisements","Bluetooth advertisements"]]},{title:"Hardware",rows:[["cpu_temperature","CPU"],["radio_temperature","Radio"],["cpu_cores","Cores"],["cpu_cores_online","Cores online"],["load_average","Load"],["memory_available","Memory"],["free_space","Disk"]]},{title:"Updates",rows:[["update_status","Update status"],["update_outcome","Last update"]]}]},Ts={ring:[{widget:"power",place:"header",roles:{light:"ring"}},{widget:"appearance",roles:{light:"ring"},lists:{segments:"segment",muted:"ring_muted",failure:"failure_effect",room:"room_reaction"}}],playback:[{widget:"player",place:"header",roles:{player:"speaker"}},{widget:"volume",roles:{player:"speaker"},lists:{jack:"headphones"}},{widget:"noise",roles:{first:"noise_layer"},lists:{layers:"noise_layer"}}],activity:[{widget:"history",roles:{}}],camera:[{widget:"camera",place:"header",roles:{camera:"camera"}}],microphone:[{widget:"mute",place:"header",roles:{mute:"mic_mute",lamp:"mute_led_brightness"}},{widget:"array",roles:{level:"room_level",floor:"room_floor",gate:"microphone_sensitivity",mode:"microphone_mixing"}}]},Ms=[["ring","ring"],["microphone","mic_mute"],["playback","speaker"],["screen","theme"],["poster","poster"],["camera","camera"]];function Ei(n){let i=Ms.filter(([,e])=>n.by.has(e)).map(([e])=>({kind:e,slot:0}));for(let e of n.by.get("wake_threshold")??[])i.push({kind:"assistant",slot:e.slot});return i}function Ri(n,i,e=0){let t=[],r=new Set;for(let s of Ts[n]??[]){let a={};for(let[d,h]of Object.entries(s.roles)){let g=Ze(i.by,h,e)[0];g&&(a[d]=g.entity_id)}if(Object.keys(a).length!==Object.keys(s.roles).length)continue;let l={};for(let[d,h]of Object.entries(s.lists??{}))l[d]=Ze(i.by,h,e).map(g=>g.entity_id);t.push({widget:s.widget,place:s.place??"body",roles:a,lists:l}),[...Object.values(a),...Object.values(l).flat()].forEach(d=>r.add(d))}return{widgets:t,sections:Ii(Re[n]??[],i.by,e,r)}}var Hs=new Set(["switch","select","number","button","text","time","update"]);function zi(n){return Oi(Re.device??[],n.entities.filter(i=>i.device_id===n.device.id&&Hs.has(i.entity_id.split(".")[0])),new Set,i=>i.entity_category!=="diagnostic")}function Pi(n){let i=n.entities.filter(e=>e.entity_category==="diagnostic");return{widgets:[{widget:"logs",place:"header",roles:{},lists:{}}],sections:Oi(Re.diagnostics??[],i,new Set)}}function Ze(n,i,e){let t=n.get(i)??[];return e?t.filter(r=>(r.slot||1)===e):t}function Ii(n,i,e,t){let r=[];for(let s of n){let a=[];for(let[l,d,h]of s.rows){let g=Ze(i,l,e);for(let f of g)t.has(f.entity_id)||a.push({entityId:f.entity_id,name:l,label:g.length>1?`${d} ${f.slot}`:d,reading:h?Ze(i,h,e)[0]?.entity_id:void 0})}a.length&&r.push({title:s.title,rows:a})}return r}var Es=new Set(Object.values(Re).flatMap(n=>(n??[]).flatMap(i=>i.rows.flatMap(([e,,t])=>t?[e,t]:[e]))));function Oi(n,i,e,t=()=>!0){let r=Ii(n,Xe(i),0,e),s=new Set(r.flatMap(l=>l.rows.flatMap(d=>[d.entityId,d.reading??""]))),a=i.filter(l=>!s.has(l.entity_id)&&!e.has(l.entity_id)&&!Es.has(l.name)&&t(l));return a.length?[...r,{title:r.length?"More":null,rows:a.map(l=>({entityId:l.entity_id,name:l.name,label:l.name||l.entity_id})).sort((l,d)=>l.label.localeCompare(d.label))}]:r}var _t={biscuit:{shape:"dot"},checkers:{shape:"show",lens:"round",width:300},cronos:{shape:"show",lens:"square",width:300},crown:{shape:"show",lens:"round",width:360}};function Je(n){return _t[n]??_t.biscuit}function Ni(n){return!!n&&n in _t}var Rs="EchoLocal",zs="esphome",ze=12;function Ps(n){return!!n?.identifiers?.some(([i])=>i===zs)}function Di(n,i){return Object.values(n.devices??{}).filter(e=>e.via_device_id===i&&!e.disabled_by).sort((e,t)=>k(e).localeCompare(k(t)))}function S(n){return n?Object.values(n.devices??{}).filter(i=>Is(n,i.id)&&!i.via_device_id&&!i.disabled_by).sort((i,e)=>k(i).localeCompare(k(e))):[]}function k(n){return n?.name_by_user||n?.name||""}function Is(n,i){return n?.devices?.[i]?.manufacturer!==Rs?!1:Di(n,i).some(Ps)}function P(n,i){if(!n||!i)return null;let e=n.devices?.[i];if(!e)return null;let t=new Set([i,...Di(n,i).map(h=>h.id)]),r=Ti(n,Object.values(n.entities??{}).filter(h=>h.device_id&&t.has(h.device_id)&&!h.hidden)),s=Xe(r),a=h=>s.get(h)?.[0]?.entity_id,l=new Array(ze).fill(void 0);for(let h of s.get("segment")??[]){let g=h.slot-1;g>=0&&g<ze&&(l[g]=h.entity_id)}let d=a("hardware_board");return{device:e,entities:r,by:s,board:Ni(e.model)?e.model:d&&n.states?.[d]?.state||"",satellite:a("assist_satellite"),player:a("speaker"),update:a("firmware"),ring:a("ring"),segments:l,mute:a("mic_mute")}}function Ui(n){return(n.by.get("wake_assistant")??[]).map(i=>i.entity_id)}function Pe(n,i){let e=i?n?.states?.[i]:void 0;return!e||e.state!=="on"?null:{rgb:e.attributes.rgb_color??[255,255,255],level:(e.attributes.brightness??255)/255}}function Qe(n,i){return!!i&&n?.states?.[i]?.state==="on"}function Fi(n,i){return(i?n?.states?.[i]?.state:void 0)??"unavailable"}function ji(n,i){let e=new Array(ze).fill(void 0),t=$t(n);if(!t)return e;let r=new Set(i.entities.map(s=>s.device_id));for(let s of t.values())!s.disabled||s.name!=="segment"||r.has(s.deviceId)&&s.slot>=1&&s.slot<=ze&&(e[s.slot-1]=s.entityId);return e}async function Wi(n,i){await n.callWS({type:"config/entity_registry/update",entity_id:i,disabled_by:null})}var At={Midnight:{background:"#0b0e14",text:"#e6edf3",muted:"#8b97a8",accent:"#4c9aff"},Nocturne:{background:"#11131a",text:"#e8e6e3",muted:"#9a97a3",accent:"#c8a2ff"},Slate:{background:"#14171c",text:"#dfe4ea",muted:"#8a929e",accent:"#5ec8c8"},Ember:{background:"#14100e",text:"#f3e7dd",muted:"#a8948a",accent:"#ff8c42"},Forest:{background:"#0e1512",text:"#dfeae2",muted:"#85998c",accent:"#5fbf8f"},Ocean:{background:"#081620",text:"#dceaf2",muted:"#7d9aa8",accent:"#36b6d6"},Plum:{background:"#150f1a",text:"#ece4f5",muted:"#9b8fae",accent:"#d86fd8"},Carbon:{background:"#000000",text:"#f2f2f2",muted:"#8c8c8c",accent:"#ffffff"},Paper:{background:"#f7f5f1",text:"#22252a",muted:"#6d7480",accent:"#2f6fdb"},Linen:{background:"#f3ece2",text:"#2b2622",muted:"#7b6f63",accent:"#b5652f"},Mist:{background:"#eef2f5",text:"#1f2933",muted:"#66737f",accent:"#2b93b6"},Bloom:{background:"#faf0f3",text:"#2e2329",muted:"#7d6a73",accent:"#d1547d"}},qi="Paper",Ki={Amber:"#f2a63b",Red:"#e5544b",Green:"#4caf78",Cyan:"#35b8c4",Blue:"#4f8ef7",Violet:"#9a7bf0",Pink:"#e86aa6"},Bi={Nano:9,Micro:12,Mini:15,Small:19,Medium:25,Large:33},et=27,ee=33,tt=186,xe=93;function Gi(n,i){let{screen:e}=n;return x`
    <svg viewBox="0 0 240 150" role="img" aria-label="Echo Show">
      ${St(140,x`<path d="M-3 0h6"></path>`,"Volume down",()=>i.volume(-1))}
      ${St(166,x`<path d="M-3 0h6M0 -3v6"></path>`,"Volume up",()=>i.volume(1))}
      ${St(192,x`<path d="M-1.6 -2.6a1.6 1.6 0 0 1 3.2 0v1.8a1.6 1.6 0 0 1-3.2 0z"></path>
          <path d="M-2.8 -0.6a2.8 2.8 0 0 0 5.6 0"></path>`,n.muted?"Microphone muted":"Microphone live",i.mute,n.muted)}

      <rect x="4" y="14" width="232" height="130" rx="16" fill="var(--el-shell)"></rect>
      <rect x="4" y="14" width="232" height="130" rx="16" fill="none" stroke="var(--el-edge)"></rect>
      <rect x="11" y="21" width="218" height="116" rx="10" fill="var(--el-glass)"></rect>

      <g class="screen" role="button" tabindex="0" aria-label="Screen" @click=${i.screen}>
        <rect x=${et} y=${ee} width=${tt} height=${xe} rx="2" fill=${e.palette.background}></rect>
        ${Os(e)}
        <rect
          x=${et}
          y=${ee}
          width=${tt}
          height=${xe}
          rx="2"
          fill="#000"
          style="opacity:${(1-e.lit)*.7}"
        ></rect>
        <rect
          class="bar"
          data-muted=${String(n.muted)}
          x=${et}
          y=${ee+xe-3}
          width=${tt}
          height="3"
        ></rect>
      </g>

      ${Ns(n.lens,n.covered,i.camera)}
    </svg>
  `}function Os(n){let i=Bi[n.size]??Bi.Medium,e=n.date?i*.42:0,t=i*.8+e,r=et+tt/2,s;n.place==="Top"?s=ee+8:n.place==="Bottom"?s=ee+xe-12-t:s=ee+(xe-t)/2;let a=n.place==="Bottom"?ee+12:ee+xe-9;return x`
    <text
      class="clock"
      x=${r}
      y=${s+i*.8}
      text-anchor="middle"
      style="font-size:${i}px;fill:${n.ink}"
    >${n.time}</text>
    ${n.date?x`<text
          class="date"
          x=${r}
          y=${s+t}
          text-anchor="middle"
          style="font-size:${i*.3}px;fill:${n.palette.muted}"
        >${n.date}</text>`:""}
    ${n.line?x`<text
          class="line"
          x=${r}
          y=${a}
          text-anchor="middle"
          style="fill:${n.palette.muted}"
        >${Ds(n.line,44)}</text>`:""}
  `}function Ns(n,i,e){let t=n==="round"?x`<circle cx="0" cy="0" r="3.4"></circle>`:x`<rect x="-3.2" y="-3.2" width="6.4" height="6.4" rx="0.8"></rect>`;return x`<g
    class="lens"
    data-covered=${String(i)}
    transform="translate(203 27)"
    role="button"
    tabindex="0"
    aria-label=${i?"Camera covered":"Camera"}
    @click=${e}
  >
    <circle class="hit" cx="0" cy="0" r="8" fill="transparent"></circle>
    ${t}
  </g>`}function St(n,i,e,t,r=!1){return x`<g class="btn key" data-lit=${String(r)} transform="translate(${n} 12)"
    role="button" tabindex="0" aria-label=${e} @click=${t}>
    <rect class="hit" x="-13" y="-12" width="26" height="18" fill="transparent"></rect>
    <rect class="face" x="-11" y="-5" width="22" height="9" rx="4.5"></rect>
    <g class="glyph" transform="translate(0 -0.5)">${i}</g>
  </g>`}function Ds(n,i){return n.length>i?`${n.slice(0,i-1)}\u2026`:n}var Us={device_id:"Device",shell:"Shell",help:"Explain each setting"},de={ring:"mdi:record-circle-outline",microphone:"mdi:microphone",playback:"mdi:speaker",screen:"mdi:monitor",poster:"mdi:image-multiple",camera:"mdi:camera",assistant:"mdi:account-voice",device:"mdi:cog-outline",diagnostics:"mdi:stethoscope",activity:"mdi:timeline-text-outline",follow:"mdi:backup-restore",close:"mdi:check"},Li={idle:"Idle",listening:"Listening",processing:"Thinking",responding:"Speaking",playing:"Playing",unavailable:"Unavailable",unknown:"Unknown"},Fs=2500;function js(n){let i=Math.log10(Math.max(n,1))/Math.log10(Fs);return Math.min(1,Math.max(0,i))}var N=class extends v{constructor(){super(...arguments);this.opened=null;this.picked=null;this.holding=!1;this.timer=0;this.offering=null;this.now=new Date;this.clock=0;this.again=()=>this.requestUpdate()}static getConfigElement(){return document.createElement("echolocal-satellite-card-editor")}static getStubConfig(e){return{device_id:S(e)[0]?.id??""}}setConfig(e){if(!e?.device_id)throw new Error("Choose an EchoLocal device");this.config={...e}}getCardSize(){return 6}connectedCallback(){super.connectedCallback(),window.addEventListener(z,this.again),this.clock=window.setInterval(()=>this.now=new Date,15e3)}disconnectedCallback(){window.removeEventListener(z,this.again),clearInterval(this.clock),super.disconnectedCallback()}doing(e){let t=Fi(this.hass,e.satellite);return t!=="idle"?t:(e.player?this.hass?.states?.[e.player]?.state:void 0)==="playing"?"playing":t}shellFor(e){if(Je(e.board).shape==="show")return"charcoal";let t=this.config?.shell;if(t&&t!=="auto")return t;let r=e.by.get("hardware_color")?.[0]?.entity_id,s=r?this.hass.states[r]?.state:void 0;return s==="black"||s==="white"?s:"grey"}lux(e){let t=e.by.get("lux")?.[0]?.entity_id,r=t?Number(this.hass.states[t]?.state):NaN;return Number.isNaN(r)?null:{value:r,lit:js(r)}}render(){if(!this.hass||!this.config)return p;let e=P(this.hass,this.config.device_id);if(!e)return o`<ha-card><div class="missing">Device not found</div></ha-card>`;let t=this.doing(e),r=Je(e.board);return o`
      <ha-card>
        <div class="frame" data-shape=${r.shape}>
          <div
            class="art"
            data-shell=${this.shellFor(e)}
            data-activity=${t}
            style=${r.shape==="show"?`max-width:${r.width}px`:""}
          >
            ${r.shape==="show"?this.show(e,t,r.lens):ei({segments:this.segments(e),glow:this.glow(e),muted:Qe(this.hass,e.mute),holding:this.holding,picked:this.picked,divisible:[...e.segments,...this.switchedOff(e)].some(Boolean),lux:this.lux(e)},{ring:()=>this.open({kind:"ring",slot:0}),segment:s=>this.tapped(e,s),action:s=>this.pressed(e,s),mute:()=>this.toggle("switch",e.mute),volume:s=>this.volume(e,s)})}
          </div>

          <div class="side">${this.side(e)}</div>

          ${this.offering!==null?this.offer(e,this.offering):this.picked===null?this.foot(e,t):this.palette(e)}
        </div>
      </ha-card>

      ${this.popup(e)}
    `}show(e,t,r){let s=e.by.has("camera");return Gi({lens:r,screen:this.screen(e,t),muted:Qe(this.hass,e.mute),covered:Qe(this.hass,this.entity(e,"camera_covered"))},{screen:()=>this.open({kind:"screen",slot:0}),camera:()=>s?this.open({kind:"camera",slot:0}):void 0,mute:()=>this.toggle("switch",e.mute),volume:a=>this.volume(e,a)})}entity(e,t){return e.by.get(t)?.[0]?.entity_id}value(e,t){let r=this.entity(e,t);return r?this.hass.states[r]?.state:void 0}screen(e,t){let r=At[this.value(e,"theme")??""]??At[qi],s=Number(this.value(e,"screen_brightness")??this.value(e,"backlight")),a=this.hass.config?.time_zone,d=new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"2-digit",hour12:this.value(e,"clock_format")==="12 hour",timeZone:a}).formatToParts(this.now).filter(g=>g.type==="hour"||g.type==="minute"||g.type==="literal").map(g=>g.value).join("").trim(),h=this.value(e,"clock_date")==="on"?new Intl.DateTimeFormat(void 0,{weekday:"short",month:"short",day:"numeric",timeZone:a}).format(this.now):null;return{palette:r,ink:Ki[this.value(e,"clock_color")??""]??r.text,lit:Number.isNaN(s)?1:.15+.85*Math.min(1,Math.max(0,s/100)),time:d,date:h,size:this.value(e,"clock_size")??"",place:this.value(e,"clock_position")??"",line:this.playing(e,t)}}playing(e,t){if(t!=="idle"&&t!=="playing")return Li[t]??t;let r=e.player?this.hass.states[e.player]:void 0,s=r?.attributes.media_title??this.value(e,"sendspin_title"),a=r?.attributes.media_artist??this.value(e,"sendspin_artist");return t!=="playing"||!s?"":a?`${s} \xB7 ${a}`:String(s)}foot(e,t){return o`<div class="foot">
      <div class="label">
        <div class="name">${k(e.device)}</div>
        <div class="status">${Li[t]??t}</div>
      </div>
      <div class="tail">
        ${this.square(de.activity,"Activity",()=>this.open({kind:"activity",slot:0}))}
        ${this.square(de.device,"Settings",()=>this.open({kind:"device",slot:0}))}
        ${this.square(de.diagnostics,"Diagnostics",()=>this.open({kind:"diagnostics",slot:0}))}
      </div>
    </div>`}tapped(e,t){if(e.segments[t]){this.picked=this.picked===t?null:t;return}if(this.switchedOff(e)[t]){this.offering=t;return}this.open({kind:"ring",slot:0})}switchedOff(e){return ji(this.hass,e)}offer(e,t){let r=this.switchedOff(e),s=async a=>{for(let l of a)l&&await Wi(this.hass,l);this.offering=null,this.picked=t};return o`<div class="foot">
      <div class="label">
        <div class="name">Segment ${t+1} disabled</div>
      </div>
      <div class="tail">
        <button class="plain" @click=${()=>s([r[t]])}>Enable</button>
        <button class="plain" @click=${()=>s(r)}>Enable all</button>
        <button class="plain quiet" @click=${()=>this.offering=null}>Cancel</button>
      </div>
    </div>`}palette(e){let t=e.segments[this.picked];return o`<div class="foot palette">
      <div class="top">
        <div class="name">Segment ${this.picked+1}</div>
        <div class="tail">
          ${this.square(de.follow,"Follow the ring",()=>{this.hass.callService("light","turn_off",{entity_id:t}),this.picked=null})}
          ${this.square(de.close,"Done",()=>this.picked=null)}
        </div>
      </div>
      <div class="swatches">
        ${Ke.map(([r,s])=>o`<button
            class="swatch"
            title=${r}
            aria-label=${r}
            style=${`background:rgb(${s.join(",")})`}
            @click=${()=>this.hass.callService("light","turn_on",{entity_id:t,rgb_color:s})}
          ></button>`)}
      </div>
    </div>`}segments(e){let t=Pe(this.hass,e.ring);return Array.from({length:Ee},(r,s)=>{let a=Pe(this.hass,e.segments[s])??t;return{fill:a?`rgb(${a.rgb.join(",")})`:"var(--el-ring-off)",opacity:a?.25+.75*a.level:1}})}glow(e){return Pe(this.hass,e.ring)||e.segments.some(r=>Pe(this.hass,r))?.55:0}side(e){let t=Ei(e),r=t.filter(s=>s.kind==="assistant").length>1;return t.map(({kind:s,slot:a})=>this.square(de[s],this.titled(s,a),()=>this.open({kind:s,slot:a}),r&&s==="assistant"?a:null))}titled(e,t){let r={ring:"Ring",microphone:"Microphone",playback:"Playback",screen:"Screen",poster:"Posters",camera:"Camera",assistant:"Assistant",device:"Settings",diagnostics:"Diagnostics",activity:"Activity"}[e];return t?`${r} ${t}`:r}square(e,t,r,s=null){return o`<button class="sq" title=${t} aria-label=${t} @click=${r}>
      <ha-icon .icon=${e}></ha-icon>
      ${s?o`<span class="badge">${s}</span>`:p}
    </button>`}popup(e){if(!this.opened)return p;let{kind:t,slot:r}=this.opened,s,a=[];return t==="device"?s=zi(e):t==="diagnostics"?{widgets:a,sections:s}=Pi(e):{widgets:a,sections:s}=Ri(t,e,r),o`<echolocal-dialog
      .hass=${this.hass}
      .heading=${this.titled(t,r)}
      .subtitle=${k(e.device)}
      .icon=${de[t]}
      .sections=${s}
      .widgets=${a}
      .device=${e.device.name??""}
      .deviceId=${e.device.id}
      .help=${this.config.help!==!1}
      .about=${di(t)}
      @closed=${()=>this.opened=null}
    ></echolocal-dialog>`}open(e){this.opened=e}pressed(e,t){if(t==="down"){this.holding=!1,this.timer=window.setTimeout(()=>this.holding=!0,Qt);return}clearTimeout(this.timer);let r=this.holding;if(this.holding=!1,t==="cancel")return;let s=Ui(e),a=s[r&&s.length>1?1:0];a?this.hass.callService("button","press",{entity_id:a}):this.moreInfo(e.satellite)}toggle(e,t){t&&this.hass.callService(e,"toggle",{entity_id:t})}volume(e,t){e.player&&this.hass.callService("media_player",t>0?"volume_up":"volume_down",{entity_id:e.player})}moreInfo(e){e&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}};N.styles=b(ti),c([m({attribute:!1})],N.prototype,"hass",2),c([u()],N.prototype,"config",2),c([u()],N.prototype,"opened",2),c([u()],N.prototype,"picked",2),c([u()],N.prototype,"holding",2),c([u()],N.prototype,"offering",2),c([u()],N.prototype,"now",2),N=c([y("echolocal-satellite-card")],N);var we=class extends v{setConfig(i){this.config={...i}}render(){if(!this.hass||!this.config)return p;let i=P(this.hass,this.config.device_id),e=[{name:"device_id",required:!0,selector:{select:{mode:"dropdown",options:S(this.hass).map(t=>({value:t.id,label:k(t)}))}}},{name:"shell",selector:{select:{mode:"dropdown",options:[{value:"auto",label:"Auto (from device)"},{value:"black",label:"Black"},{value:"white",label:"White"},{value:"grey",label:"Grey"}]}}},{name:"help",selector:{boolean:{}}}].filter(t=>t.name!=="shell"||!i||Je(i.board).shape==="dot");return o`<ha-form
      .hass=${this.hass}
      .data=${{help:!0,shell:"auto",...this.config}}
      .schema=${e}
      .computeLabel=${t=>Us[t.name]??t.name}
      @value-changed=${t=>this.emit(t.detail.value)}
    ></ha-form>`}emit(i){this.config={...this.config,...i},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}};c([m({attribute:!1})],we.prototype,"hass",2),c([u()],we.prototype,"config",2),we=c([y("echolocal-satellite-card-editor")],we);var Ct=[];function R(n){Ct.push(n),Ct.sort((i,e)=>i.order-e.order||i.title.localeCompare(e.title))}function Mt(n){return Ct.filter(i=>n||!i.admin)}function Vi(n,i){let e=Tt(n),t=Mt(i);return t.find(r=>r.path===e)??t[0]}function Yi(n,i){let e=i?`${n}/${i}`:n;location.pathname!==e&&history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))}function Ht(n,i){if(i!==void 0)return Tt(i);let e=location.pathname;return Tt(e.startsWith(n)?e.slice(n.length):"")}function Tt(n){return n.replace(/^\/+|\/+$/g,"")}var Xi=`:host{display:block;height:100%;overflow:auto;background:var(--primary-background-color);color:var(--primary-text-color)}header{position:sticky;top:0;z-index:2;display:flex;align-items:center;background:var(--primary-background-color);border-bottom:1px solid color-mix(in srgb,var(--primary-text-color) 10%,transparent)}ha-menu-button{flex:0 0 auto;margin-left:4px}.bar{flex:1 1 auto;min-width:0;max-width:1280px;margin:0 auto;padding:0 16px;display:flex;gap:4px;overflow-x:auto;scrollbar-width:none}.bar::-webkit-scrollbar{display:none}button{display:flex;align-items:center;gap:7px;flex:0 0 auto;padding:14px 14px 12px;border:none;border-bottom:2px solid transparent;background:none;color:var(--secondary-text-color);font:inherit;font-size:.88rem;cursor:pointer}button:hover{color:var(--primary-text-color)}button[data-here=true]{color:var(--primary-color);border-bottom-color:var(--primary-color)}button ha-icon{--mdc-icon-size: 19px;display:flex}.page{max-width:1280px;margin:0 auto;padding:20px 16px 48px;box-sizing:border-box}@media(max-width:600px){button span{display:none}button{padding:14px 16px 12px}}
`;var Et="";async function $e(n){try{return await n.callWS({type:"config/label_registry/list"})??[]}catch{return[]}}function ke(n,i){let e=new Map,t=[];for(let s of n){let a=s.labels??[];if(!a.length){t.push(s);continue}for(let l of a){let d=i.find(g=>g.label_id===l),h=e.get(l);h?h.devices.push(s):e.set(l,{id:l,name:d?.name??l,icon:d?.icon,devices:[s]})}}let r=[...e.values()].sort((s,a)=>s.name.localeCompare(a.name));return t.length&&r.push({id:Et,name:"Ungrouped",devices:t}),r}async function Zi(n,i){try{return await n.callWS({type:"config/label_registry/create",name:i})}catch{return null}}async function Ji(n,i,e){await n.callWS({type:"config/label_registry/update",label_id:i,name:e})}async function Qi(n,i){await n.callWS({type:"config/label_registry/delete",label_id:i})}async function er(n,i,e){await n.callWS({type:"config/device_registry/update",device_id:i,labels:[...new Set(e)]})}async function tr(n,i,e,t){let r=0,s=0,a=0;return await Promise.all(i.map(async l=>{let d=ir(n,l,e);if(!d){a+=1;return}try{await t(d),r+=1}catch{s+=1}})),{done:r,failed:s,missing:a}}function it(n,i,e){let t=i.map(s=>ir(n,s,e)).filter(s=>!!s),r=[...new Set(t.map(s=>n.states[s]?.state).filter(Boolean))];return{value:r.length===1?r[0]:null,mixed:r.length>1,entities:t}}function ir(n,i,e){return P(n,i.id)?.by.get(e)?.[0]?.entity_id}var rr=`:host{display:block;margin-bottom:10px}.bar{display:flex;align-items:center;gap:12px;padding:8px 4px 8px 2px;border-bottom:1px solid color-mix(in srgb,var(--primary-text-color) 10%,transparent)}.name{font-size:1.05rem;color:var(--primary-text-color)}.count{font-size:.78rem;color:var(--secondary-text-color)}.spacer{flex:1}button{display:flex;align-items:center;gap:6px;padding:5px 11px;border:1px solid color-mix(in srgb,var(--primary-text-color) 16%,transparent);border-radius:999px;background:none;color:var(--secondary-text-color);font:inherit;font-size:.8rem;cursor:pointer}button:hover{color:var(--primary-text-color);border-color:color-mix(in srgb,var(--primary-text-color) 34%,transparent)}button[data-on=true]{color:var(--primary-color);border-color:color-mix(in srgb,var(--primary-color) 50%,transparent);background:color-mix(in srgb,var(--primary-color) 12%,transparent)}button ha-icon{--mdc-icon-size: 16px;display:flex}.mixed{font-size:.7rem;opacity:.75}
`;var sr="mic_mute",nr="ring",ar="speaker",te=class extends v{constructor(){super(...arguments);this.said=""}render(){if(!this.hass||!this.group)return p;let e=this.group.devices,t=it(this.hass,e,sr),r=it(this.hass,e,nr);return o`<div class="bar">
      ${this.group.icon?o`<ha-icon .icon=${this.group.icon}></ha-icon>`:p}
      <div class="name">${this.group.name}</div>
      <div class="count">${e.length} ${e.length===1?"device":"devices"}</div>
      <div class="spacer"></div>
      ${this.said?o`<div class="short">${this.said}</div>`:p}

      ${t.entities.length?this.toggle("mdi:microphone-off","Mute all",t,()=>this.write(sr,"switch",t.value==="on"?"turn_off":"turn_on")):p}
      ${r.entities.length?this.toggle("mdi:lightbulb-outline","Ring",r,()=>this.write(nr,"light",r.value==="on"?"turn_off":"turn_on")):p}
      ${this.has(ar)?o`<button title="Stop whatever is playing" @click=${()=>this.write(ar,"media_player","media_stop")}>
            <ha-icon icon="mdi:stop"></ha-icon>Stop
          </button>`:p}
    </div>`}toggle(e,t,r,s){return o`<button data-on=${String(r.value==="on")} @click=${s}>
      <ha-icon .icon=${e}></ha-icon>${t}
      ${r.mixed?o`<span class="mixed">mixed</span>`:p}
    </button>`}has(e){return it(this.hass,this.group.devices,e).entities.length>0}async write(e,t,r){let{done:s,failed:a,missing:l}=await tr(this.hass,this.group.devices,e,h=>this.hass.callService(t,r,{entity_id:h})),d=a+l;this.said=d?`${s} of ${s+d}`:"",this.said&&setTimeout(()=>this.said="",4e3)}};te.styles=b(rr),c([m({attribute:!1})],te.prototype,"hass",2),c([m({attribute:!1})],te.prototype,"group",2),c([u()],te.prototype,"said",2),te=c([y("echolocal-groupbar")],te);var or=`:host{display:block}.group{margin-bottom:26px}.view{display:flex;justify-content:flex-end;margin-bottom:14px}.pair{display:flex;border:1px solid color-mix(in srgb,var(--primary-text-color) 16%,transparent);border-radius:999px;overflow:hidden}.pair button{display:flex;align-items:center;gap:6px;padding:5px 13px;border:none;background:none;color:var(--secondary-text-color);font:inherit;font-size:.8rem;cursor:pointer}.pair button:hover{color:var(--primary-text-color)}.pair button[data-on=true]{color:var(--primary-color);background:color-mix(in srgb,var(--primary-color) 14%,transparent)}.pair button ha-icon{--mdc-icon-size: 16px;display:flex}.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:16px;align-items:start}.empty{color:var(--secondary-text-color);max-width:46ch;line-height:1.5}
`;R({path:"",title:"Home",icon:"mdi:view-grid-outline",element:"echolocal-home",order:0});var lr="echolocal:home:grouped",q=class extends v{constructor(){super(...arguments);this.narrow=!1;this.known=[];this.asked=!1;this.grouped=localStorage.getItem(lr)!=="no";this.cards=new Map}updated(){this.asked||!this.hass||(this.asked=!0,this.load())}render(){if(!this.hass)return p;let e=S(this.hass);if(!e.length)return o`<div class="empty">
        No EchoLocal devices yet. One appears here once Home Assistant has adopted it over the ESPHome
        integration.
      </div>`;let t=ke(e,this.known),r=t.some(a=>a.id!==Et),s=this.grouped&&r?t:[{id:"all",name:"All devices",devices:e}];return o`
      ${r?o`<div class="view">
            <div class="pair">
              ${this.button(!0,"mdi:group","Grouped")}${this.button(!1,"mdi:view-grid-outline","All")}
            </div>
          </div>`:p}
      ${s.map(a=>this.group(a))}
    `}button(e,t,r){return o`<button
      data-on=${String(this.grouped===e)}
      @click=${()=>{this.grouped=e,localStorage.setItem(lr,e?"yes":"no")}}
    >
      <ha-icon .icon=${t}></ha-icon>${r}
    </button>`}group(e){return o`<div class="group">
      <echolocal-groupbar .hass=${this.hass} .group=${e}></echolocal-groupbar>
      <div class="grid">${e.devices.map(t=>this.card(e.id,t.id))}</div>
    </div>`}card(e,t){let r=`${e}/${t}`,s=this.cards.get(r);return s||(s=document.createElement("echolocal-satellite-card"),s.setConfig({device_id:t}),this.cards.set(r,s)),s.hass=this.hass,s}async load(){this.known=await $e(this.hass)}};q.styles=b(or),c([m({attribute:!1})],q.prototype,"hass",2),c([m({type:Boolean})],q.prototype,"narrow",2),c([u()],q.prototype,"known",2),c([u()],q.prototype,"asked",2),c([u()],q.prototype,"grouped",2),q=c([y("echolocal-home")],q);var cr=`:host{display:block}.make{display:flex;gap:8px;margin-bottom:20px}ha-input.new{flex:1;max-width:280px}table{width:100%;border-collapse:collapse;font-size:.9rem}th{padding:8px 10px;text-align:center;font-weight:600;font-size:.72rem;text-transform:uppercase;letter-spacing:.07em;color:var(--secondary-text-color);white-space:nowrap}th.who{text-align:left}th .label{display:flex;align-items:center;justify-content:center;gap:4px}th ha-input{--ha-input-text-align: center}th ha-icon-button{--mdc-icon-size: 15px;color:var(--secondary-text-color)}th ha-icon-button:hover{color:var(--error-color, #db4437)}td{padding:10px;border-top:1px solid color-mix(in srgb,var(--primary-text-color) 10%,transparent);text-align:center}td.who{text-align:left;color:var(--primary-text-color)}.none{color:var(--secondary-text-color);max-width:52ch;line-height:1.5}
`;R({path:"groups",title:"Groups",icon:"mdi:group",element:"echolocal-groups",order:30,admin:!0});var K=class extends v{constructor(){super(...arguments);this.known=[];this.asked=!1;this.naming="";this.busy=!1}connectedCallback(){super.connectedCallback(),this.hass?.connection?.subscribeEvents(()=>this.load(),"label_registry_updated").then(e=>this.stop=e).catch(()=>{})}disconnectedCallback(){super.disconnectedCallback(),this.stop?.()}updated(){this.asked||!this.hass||(this.asked=!0,this.load())}render(){if(!this.hass)return p;let e=S(this.hass),t=this.known;return o`
      <div class="make">
        <ha-input
          class="new"
          placeholder="New group"
          .value=${this.naming}
          @input=${r=>this.naming=r.target.value}
          @keydown=${r=>r.key==="Enter"&&this.make()}
        ></ha-input>
        <ha-button
          .disabled=${!this.naming.trim()||this.busy}
          .loading=${this.busy}
          @click=${this.make}
        >
          Add
        </ha-button>
      </div>

      ${e.length?o`<table>
            <thead>
              <tr>
                <th class="who">Device</th>
                ${t.map(r=>this.head(r))}
              </tr>
            </thead>
            <tbody>
              ${e.map(r=>this.row(r,t))}
            </tbody>
          </table>`:o`<div class="none">
            No EchoLocal devices yet, so there is nothing to group.
          </div>`}
    `}head(e){let t=ke(S(this.hass),this.known).find(r=>r.id===e.label_id)?.devices.length;return o`<th>
      <div class="label">
        <ha-input
          .value=${e.name}
          style=${`width:${Math.max(8,e.name.length+2)}ch`}
          @change=${r=>this.rename(e,r.target.value)}
        ></ha-input>
        <ha-icon-button
          .label=${t?`Delete ${e.name}, ${t} still in it`:`Delete ${e.name}`}
          @click=${()=>this.discard(e)}
        >
          <ha-icon icon="mdi:close"></ha-icon>
        </ha-icon-button>
      </div>
    </th>`}row(e,t){let r=e.labels??[];return o`<tr>
      <td class="who">${k(e)}</td>
      ${t.map(s=>o`<td>
          <ha-checkbox
            aria-label="${k(e)} in ${s.name}"
            .checked=${r.includes(s.label_id)}
            @change=${a=>this.set(e,s.label_id,a.target.checked)}
          ></ha-checkbox>
        </td>`)}
    </tr>`}async make(){let e=this.naming.trim();if(!e||this.busy)return;this.busy=!0,this.naming="";let t=await Zi(this.hass,e);t&&(this.known=[...this.known,t].sort((r,s)=>r.name.localeCompare(s.name))),this.busy=!1,t||await this.load()}async rename(e,t){!t.trim()||t===e.name||(this.known=this.known.map(r=>r.label_id===e.label_id?{...r,name:t.trim()}:r),await Ji(this.hass,e.label_id,t.trim()))}async discard(e){this.known=this.known.filter(t=>t.label_id!==e.label_id),await Qi(this.hass,e.label_id)}async set(e,t,r){let s=new Set(e.labels??[]);r?s.add(t):s.delete(t),await er(this.hass,e.id,[...s])}async load(){this.known=await $e(this.hass)}};K.styles=b(cr),c([m({attribute:!1})],K.prototype,"hass",2),c([u()],K.prototype,"known",2),c([u()],K.prototype,"asked",2),c([u()],K.prototype,"naming",2),c([u()],K.prototype,"busy",2),K=c([y("echolocal-groups")],K);var dr=`:host{display:block}.filters{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px}.filters button{padding:5px 12px;border:1px solid color-mix(in srgb,var(--primary-text-color) 16%,transparent);border-radius:999px;background:none;color:var(--secondary-text-color);font:inherit;font-size:.8rem;cursor:pointer}.filters button:hover{color:var(--primary-text-color)}.filters button[data-on=true]{color:var(--primary-color);border-color:color-mix(in srgb,var(--primary-color) 50%,transparent);background:color-mix(in srgb,var(--primary-color) 12%,transparent)}.filters .count{margin-left:6px;font-size:.72rem;color:var(--secondary-text-color)}.said{margin-bottom:12px;font-size:.82rem;color:var(--primary-color)}.empty{color:var(--secondary-text-color);max-width:52ch;line-height:1.5}.kind{margin-bottom:24px}.kind .head{display:flex;align-items:center;gap:8px;margin:0 0 10px 2px;font-size:.72rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--secondary-text-color)}.kind .head ha-icon{--mdc-icon-size: 17px;color:var(--primary-color);display:flex}.columns{columns:2 340px;column-gap:24px}.group{break-inside:avoid;margin-bottom:14px}.section{display:flex;align-items:center;gap:8px;margin:0 0 8px 2px;font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.09em;color:var(--secondary-text-color)}.section:before{content:"";width:3px;height:12px;border-radius:2px;background:var(--primary-color);opacity:.6}.tile{display:flex;flex-direction:column;gap:8px;padding:10px 14px;margin-bottom:5px;border-radius:14px;background:color-mix(in srgb,var(--primary-text-color) 5%,transparent)}.top{display:flex;align-items:center;gap:12px}.icon{width:32px;height:32px;flex:0 0 auto;display:grid;place-items:center;border-radius:10px;background:color-mix(in srgb,var(--primary-text-color) 7%,transparent)}.icon ha-icon{--mdc-icon-size: 19px;color:var(--secondary-text-color);display:flex}.named{flex:1 1 auto;min-width:0;display:flex;align-items:center;gap:7px}.name{flex:0 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--primary-text-color)}.trail{flex:0 0 auto;display:flex;align-items:center;gap:6px}.trail ha-control-switch{width:44px;--control-switch-thickness: 26px;--control-switch-border-radius: 13px}ha-control-select{--control-select-thickness: 34px;white-space:nowrap}.trail ha-control-select-menu{min-width:0;max-width:210px;--control-select-menu-height: 34px}ha-control-slider{--control-slider-thickness: 30px}.fold{flex:0 0 auto;width:26px;height:26px;display:grid;place-items:center;padding:0;border:none;border-radius:50%;background:none;color:var(--secondary-text-color);cursor:pointer}.fold:hover,.fold[data-on=true]{color:var(--primary-color);background:color-mix(in srgb,var(--primary-color) 12%,transparent)}.fold ha-icon{--mdc-icon-size: 18px;display:flex}.state{display:flex;align-items:baseline;gap:8px;font-size:.8rem;color:var(--secondary-text-color)}.state .agree{font-variant-numeric:tabular-nums;color:var(--primary-text-color)}.state .mix{font-weight:600;color:var(--warning-color, #ffa600)}.state .count{margin-left:auto}.who{display:grid;gap:3px;padding-top:8px;border-top:1px solid color-mix(in srgb,var(--primary-text-color) 10%,transparent)}.line{display:flex;align-items:baseline;gap:10px;font-size:.82rem}.line .name{flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--secondary-text-color)}.line .gone{font-size:.76rem;color:var(--secondary-text-color);opacity:.7}.line .reading{background:none;border:none;padding:0;font:inherit;font-size:.82rem;font-variant-numeric:tabular-nums;color:var(--primary-text-color);cursor:pointer}.line .reading:hover{color:var(--primary-color)}.badge{padding:1px 8px;border-radius:999px;font-size:.7rem;background:color-mix(in srgb,var(--warning-color, #ffa600) 15%,transparent);color:var(--warning-color, #ffa600)}
`;R({path:"settings",title:"Settings",icon:"mdi:tune-variant",element:"echolocal-settings",order:25,admin:!0});var pr="echolocal:settings:scope",Ls=new Set(["switch","select","number","text","time"]),Vs={ring:"mdi:record-circle-outline",microphone:"mdi:microphone",playback:"mdi:speaker",screen:"mdi:monitor",poster:"mdi:image-multiple",camera:"mdi:camera",assistant:"mdi:account-voice",device:"mdi:cog-outline",diagnostics:"mdi:stethoscope",activity:"mdi:timeline-text-outline"},Ys={ring:"Ring",microphone:"Microphone",playback:"Playback",screen:"Screen",poster:"Posters",camera:"Camera",assistant:"Assistant",device:"Device",diagnostics:"Diagnostics",activity:"Activity"},I=class extends v{constructor(){super(...arguments);this.known=[];this.asked=!1;this.scope=localStorage.getItem(pr)??"";this.open=null;this.busy=null;this.said="";this.held={};this.again=()=>this.requestUpdate()}connectedCallback(){super.connectedCallback(),window.addEventListener(z,this.again),this.hass?.connection?.subscribeEvents(()=>this.load(),"label_registry_updated").then(e=>this.stop=e).catch(()=>{})}disconnectedCallback(){window.removeEventListener(z,this.again),this.stop?.(),window.clearTimeout(this.timer),super.disconnectedCallback()}updated(){this.asked||!this.hass||(this.asked=!0,this.load())}render(){if(!this.hass)return p;let e=this.scoped(),t=this.settings(e);return o`
      ${this.filters(e)}
      ${this.said?o`<div class="said">${this.said}</div>`:p}
      ${e.length?t.length?kt.map(r=>this.kind(r,t)):o`<div class="empty">
              Nothing here: no device in scope carries a setting this page can change.
            </div>`:o`<div class="empty">No EchoLocal devices in this scope.</div>`}
    `}filters(e){let t=ke(S(this.hass),this.known).filter(r=>r.devices.length);return o`<div class="filters">
      ${this.pill("","All devices",e.length)}
      ${t.map(r=>this.pill(r.id,r.name,r.devices.length))}
    </div>`}pill(e,t,r){return o`<button
      data-on=${String(this.scope===e)}
      @click=${()=>this.pick(e)}
    >
      ${t}<span class="count">${r}</span>
    </button>`}pick(e){this.scope=e,this.open=null,localStorage.setItem(pr,e)}scoped(){let e=S(this.hass);return this.scope&&!this.known.some(t=>t.label_id===this.scope)?(this.scope="",e):this.scope?e.filter(t=>(t.labels??[]).includes(this.scope)):e}settings(e){let t=e.map(s=>({device:s,mine:P(this.hass,s.id)})),r=[];for(let{kind:s,section:a,name:l,label:d}of Hi()){let h=new Set;for(let{mine:g}of t)for(let f of g?.by.get(l)??[])h.add(f.slot||1);for(let g of[...h].sort((f,w)=>f-w)){let f=t.map(({device:j,mine:rt})=>{let se=(rt?.by.get(l)??[]).find(st=>(st.slot||1)===g);return{device:j,entityId:se?.entity_id,state:se&&this.hass.states[se.entity_id]}}),w=f.find(j=>j.entityId)?.entityId?.split(".")[0]??"";if(!Ls.has(w))continue;let $=f.filter(j=>j.state&&j.state.state!=="unavailable");if(!$.length)continue;let _=[...new Set($.map(j=>j.state.state))],T=$[0].state.attributes;r.push({key:`${l}:${g}`,kind:s,section:a,name:l,label:h.size>1?`${d} ${g}`:d,domain:w,cells:f,value:_.length===1?_[0]:null,mixed:_.length>1,options:T.options,min:T.min,max:T.max,step:T.step,unit:T.unit_of_measurement,secret:T.mode==="password"})}}return r}kind(e,t){let r=t.filter(a=>a.kind===e);if(!r.length)return p;let s=[];for(let a of r)s.includes(a.section)||s.push(a.section);return o`<div class="kind">
      <div class="head">
        <ha-icon .icon=${Vs[e]}></ha-icon><span>${Ys[e]}</span>
      </div>
      <div class="columns">
        ${s.map(a=>o`<section class="group">
            ${a?o`<div class="section">${a}</div>`:p}
            ${r.filter(l=>l.section===a).map(l=>this.row(l))}
          </section>`)}
      </div>
    </div>`}row(e){let t=Ge(e.name),r=e.cells.filter(s=>s.state).length;return o`<div class="tile">
      <div class="top">
        <div class="icon"><ha-icon .icon=${this.iconFor(e)}></ha-icon></div>
        <div class="named">
          <div class="name">${e.label}</div>
          ${t?o`<echolocal-bubble .text=${t}></echolocal-bubble>`:p}
        </div>
        <div class="trail">${this.control(e)}</div>
        <button
          class="fold"
          data-on=${String(this.open===e.key)}
          aria-label="Which devices have what"
          @click=${()=>this.open=this.open===e.key?null:e.key}
        >
          <ha-icon
            .icon=${this.open===e.key?"mdi:chevron-up":"mdi:chevron-down"}
          ></ha-icon>
        </button>
      </div>
      <div class="state">
        ${e.mixed?o`<span class="mix">mixed</span>`:o`<span class="agree">${this.shown(e)}</span>`}
        <span class="count">${r} of ${e.cells.length} devices</span>
      </div>
      ${this.open===e.key?this.list(e):p}
    </div>`}control(e){let t=this.busy===e.key;switch(e.domain){case"switch":return o`<ha-control-switch
          .checked=${e.value==="on"}
          .disabled=${t}
          .label=${e.label}
          @change=${r=>this.apply(e,r.target.checked)}
        ></ha-control-switch>`;case"select":return this.picker(e,t);case"number":return this.slider(e,t);default:return p}}picker(e,t){let r=e.options??[];return r.length===2?o`<div class="pills">
        ${r.map(s=>o`<button
            class="pill"
            data-on=${String(s===e.value)}
            ?disabled=${t}
            @click=${()=>this.apply(e,s)}
          >
            ${s}
          </button>`)}
      </div>`:o`<ha-control-select-menu
      .options=${r.map(s=>({value:s,label:s}))}
      .value=${e.value??""}
      .disabled=${t}
      .label=${e.label}
      hide-label
      show-arrow
      @wa-select=${s=>{let a=s.detail.item?.value;a&&this.apply(e,a)}}
    ></ha-control-select-menu>`}slider(e,t){let r=this.held[e.key]??Number(e.value??e.min??0);return o`<ha-control-slider
      .value=${Number.isNaN(r)?0:r}
      .min=${e.min??0}
      .max=${e.max??100}
      .step=${e.step??1}
      .unit=${e.unit??""}
      .disabled=${t}
      @slider-moved=${s=>{this.held={...this.held,[e.key]:s.detail.value}}}
      @value-changed=${s=>{let{[e.key]:a,...l}=this.held;this.held=l,this.apply(e,s.detail.value)}}
    ></ha-control-slider>`}list(e){return o`<div class="who">
      ${e.cells.map(t=>{if(!t.entityId||!t.state)return o`<div class="line">
            <span class="name">${k(t.device)}</span>
            <span class="gone">not on this device</span>
          </div>`;let r=t.state.state==="unavailable",s=!r&&e.value!==null&&t.state.state!==e.value;return o`<div class="line" data-differs=${String(s)}>
          <span class="name">${k(t.device)}</span>
          ${r?o`<span class="gone">unavailable</span>`:o`<button
                class="reading"
                @click=${()=>this.moreInfo(t.entityId)}
              >
                ${e.secret?"\u2022\u2022\u2022\u2022\u2022\u2022":t.state.state}
              </button>`}
          ${s?o`<span class="badge">differs</span>`:p}
        </div>`})}
    </div>`}shown(e){return e.value===null?"mixed":e.secret?"\u2022\u2022\u2022\u2022\u2022\u2022":e.unit?`${e.value} ${e.unit}`:e.value}iconFor(e){return this.hass.states[e.cells.find(t=>t.entityId)?.entityId??""]?.attributes.icon??"mdi:tune"}async apply(e,t){if(this.busy)return;this.busy=e.key;let r=e.cells.filter(d=>d.entityId&&this.hass.states[d.entityId]),s=0,a=0;await Promise.all(r.map(async d=>{try{e.domain==="switch"?await this.hass.callService("switch",t?"turn_on":"turn_off",{entity_id:d.entityId}):e.domain==="select"?await this.hass.callService("select","select_option",{entity_id:d.entityId,option:t}):await this.hass.callService("number","set_value",{entity_id:d.entityId,value:t}),s+=1}catch{a+=1}}));let l=e.cells.length-r.length;this.said=a?`${e.label}: ${s} of ${s+a} set`:`${e.label}: ${s} set${l?`, ${l} without it`:""}`,this.busy=null,window.clearTimeout(this.timer),this.timer=window.setTimeout(()=>this.said="",4e3)}moreInfo(e){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}async load(){this.known=await $e(this.hass)}};I.styles=[b(me),b(dr)],c([m({attribute:!1})],I.prototype,"hass",2),c([u()],I.prototype,"known",2),c([u()],I.prototype,"asked",2),c([u()],I.prototype,"scope",2),c([u()],I.prototype,"open",2),c([u()],I.prototype,"busy",2),c([u()],I.prototype,"said",2),c([u()],I.prototype,"held",2),I=c([y("echolocal-settings")],I);var hr=`:host{display:block}.filters{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px}.filters button{padding:5px 12px;border:1px solid color-mix(in srgb,var(--primary-text-color) 16%,transparent);border-radius:999px;background:none;color:var(--secondary-text-color);font:inherit;font-size:.8rem;cursor:pointer}.filters button[data-on=true]{color:var(--primary-color);border-color:color-mix(in srgb,var(--primary-color) 50%,transparent);background:color-mix(in srgb,var(--primary-color) 12%,transparent)}.turns{display:grid;gap:8px}.turn{display:grid;grid-template-columns:auto 9ch 1fr auto;gap:3px 12px;align-items:center;padding:11px 14px;border-radius:12px;background:color-mix(in srgb,var(--primary-text-color) 5%,transparent)}.right{display:flex;align-items:center;gap:10px;justify-content:flex-end}.when{font-size:.78rem;color:var(--secondary-text-color);font-variant-numeric:tabular-nums}.who{font-size:.88rem;color:var(--primary-text-color);overflow:hidden;text-overflow:ellipsis}.content{display:flex;flex-direction:column;gap:2px;min-width:0}.wake{font-size:.8rem;color:var(--primary-color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.said,.said-back{font-size:.88rem;color:var(--secondary-text-color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.said-back:before{content:"\\21b3  ";opacity:.6}.took{font-size:.8rem;color:var(--secondary-text-color);font-variant-numeric:tabular-nums}.took[data-bad=true]{color:var(--error-color, #db4437)}.bar{grid-column:2 / -1;display:flex;height:20px;margin-top:5px;border-radius:5px;overflow:hidden;background:color-mix(in srgb,var(--primary-text-color) 8%,transparent)}.slice{display:flex;align-items:center;justify-content:center;overflow:hidden;font-size:.68rem;font-variant-numeric:tabular-nums;color:var(--text-primary-color, #fff);white-space:nowrap}.slice[data-phase=listen_ms]{background:color-mix(in srgb,var(--info-color, #039be5) 55%,var(--primary-text-color))}.slice[data-phase=think_ms]{background:var(--secondary-text-color)}.slice[data-phase=speak_ms]{background:var(--success-color, #43a047)}.none{color:var(--secondary-text-color);max-width:56ch;line-height:1.5}.loading{display:flex;justify-content:center;padding:48px 0}.legend{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:14px;font-size:.72rem;color:var(--secondary-text-color)}.key{display:flex;align-items:center;gap:5px}.dot{width:9px;height:9px;border-radius:2px}
`;R({path:"activity",title:"Activity",icon:"mdi:timeline-text-outline",element:"echolocal-activity",order:20});var Zs=14,G=class extends v{constructor(){super(...arguments);this.seen=[];this.only="";this.asked=!1;this.loading=!0}updated(){this.asked||!this.hass||(this.asked=!0,this.listen())}disconnectedCallback(){super.disconnectedCallback(),this.stop?.()}render(){if(!this.hass)return p;let e=this.names(),t=this.only?this.seen.filter(s=>s.turn.device===this.only):this.seen,r=Math.max(1,...t.map(s=>fe(s.turn)));return o`
      ${this.seen.length>0&&Object.keys(e).length>1?o`<div class="filters">
            <button data-on=${String(!this.only)} @click=${()=>this.only=""}>Everything</button>
            ${[...new Set(this.seen.map(s=>s.turn.device))].map(s=>o`<button
                data-on=${String(this.only===s)}
                @click=${()=>this.only=s}
              >
                ${e[s]?.label??s}
              </button>`)}
          </div>`:p}

      ${t.length?o`<div class="legend">
              ${[["listen_ms","Listen"],["think_ms","Think"],["speak_ms","Reply"]].map(([s,a])=>o`<span class="key"
                  ><span class="dot slice" data-phase=${s}></span>${a}</span
                >`)}
            </div>
            <div class="turns">${t.map(s=>this.row(s,e,r))}</div>`:this.loading?o`<div class="loading"><ha-spinner size="large"></ha-spinner></div>`:o`<div class="none">No recent activity found.</div>`}
    `}row(e,t,r){let s=ge(e.turn),a=fe(e.turn),l=e.turn.outcome!=="completed",d=t[e.turn.device],h=d?.label??"elsewhere";return o`<div class="turn">
      <div class="when">${Qs(e.at)}</div>
      <div class="who">${h}</div>
      <div class="content">
        <div class="wake">${e.turn.wake_word}</div>
        ${e.turn.heard?o`<div class="said">${e.turn.heard}</div>`:p}
        ${e.turn.reply?o`<div class="said-back">${e.turn.reply}</div>`:p}
      </div>
      <div class="right">
        <div class="took" data-bad=${String(l)}>
          ${l?e.turn.outcome:`${(a/1e3).toFixed(1)}s`}
        </div>
        ${e.turn.audio_seconds?o`<echolocal-recording
              .hass=${this.hass}
              .device=${d?.node??""}
              .turn=${e.turn.id}
              .at=${e.at}
              .filename=${Js(e,h)}
            ></echolocal-recording>`:p}
      </div>
      ${s.length?o`<div class="bar">
            ${s.map(g=>o`<div
                class="slice"
                data-phase=${g.key}
                title=${`${g.label} ${g.ms} ms`}
                style=${`flex:0 0 ${g.ms/r*100}%`}
              >
                ${(g.ms/1e3).toFixed(1)}s
              </div>`)}
          </div>`:p}
    </div>`}names(){let e={};for(let t of S(this.hass))e[t.id]={label:k(t),node:t.name??""};return e}async listen(){let e=new Date(Date.now()-Zs*864e5),t=S(this.hass).map(r=>r.id);if(!t.length){this.asked=!1;return}try{this.stop=await Le(this.hass,e,t,r=>{this.loading=!1,r.length&&(this.seen=[...r,...this.seen].sort((s,a)=>a.at-s.at))})}catch{this.loading=!1}}};G.styles=b(hr),c([m({attribute:!1})],G.prototype,"hass",2),c([u()],G.prototype,"seen",2),c([u()],G.prototype,"only",2),c([u()],G.prototype,"asked",2),c([u()],G.prototype,"loading",2),G=c([y("echolocal-activity")],G);function Js(n,i){let e=new Date(n.at).toISOString().replace(/[:.]/g,"-").slice(0,19),t=r=>r.toLowerCase().replace(/[^a-z0-9]+/g,"-");return`${e}-${t(i)}-${t(n.turn.wake_word)}.wav`}function Qs(n){return new Date(n).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})}var ur=`:host{display:block}.scroll{overflow-x:auto}table{width:100%;border-collapse:collapse;font-size:.88rem}th{padding:8px 12px;text-align:right;white-space:nowrap;font-weight:600;font-size:.71rem;text-transform:uppercase;letter-spacing:.07em;color:var(--secondary-text-color);cursor:pointer;user-select:none}th:first-child{text-align:left}th:hover{color:var(--primary-text-color)}th[data-by=true]{color:var(--primary-color)}td{padding:11px 12px;text-align:right;white-space:nowrap;border-top:1px solid color-mix(in srgb,var(--primary-text-color) 10%,transparent);font-variant-numeric:tabular-nums;color:var(--secondary-text-color)}td.who{text-align:left;color:var(--primary-text-color)}td.who button{padding:0;border:none;background:none;color:inherit;font:inherit;cursor:pointer;text-align:left}td.who button:hover{color:var(--primary-color)}td[data-wrong=warn]{color:var(--warning-color, #ffa600)}td[data-wrong=bad]{color:var(--error-color, #db4437);font-weight:600}tr[data-off=true] td{opacity:.5}.none{color:var(--secondary-text-color)}
`;R({path:"health",title:"Health",icon:"mdi:heart-pulse",element:"echolocal-health",order:40});function Rt(n){let i=Number(n.state);return n.attributes.unit_of_measurement==="\xB0F"?(i-32)*5/9:i}var zt=[{title:"Version",name:"firmware",show:n=>String(n.attributes.installed_version??"\u2014"),sort:n=>String(n.attributes.installed_version??"")},{title:"Update",name:"firmware",show:n=>n.state==="on"?"waiting":n.state==="off"?"current":n.state,wrong:n=>n.state==="on"?"warn":void 0,sort:n=>n.state},{title:"Wifi",name:"wifi_signal",show:n=>`${Math.round(Number(n.state))} ${n.attributes.unit_of_measurement||"dBm"}`,wrong:n=>Number(n.state)<-80?"bad":Number(n.state)<-70?"warn":void 0},{title:"CPU",name:"cpu_temperature",show:n=>`${Math.round(Number(n.state))}${n.attributes.unit_of_measurement||"\xB0C"}`,wrong:n=>Rt(n)>85?"bad":Rt(n)>70?"warn":void 0,sort:Rt},{title:"Load",name:"load_average",show:n=>Number(n.state).toFixed(2)},{title:"Memory",name:"memory_available",show:n=>`${Math.round(Number(n.state))} ${n.attributes.unit_of_measurement||"MB"}`,wrong:n=>Number(n.state)<40?"bad":Number(n.state)<80?"warn":void 0},{title:"Disk",name:"free_space",show:n=>`${Math.round(Number(n.state))} ${n.attributes.unit_of_measurement||"MB"}`,wrong:n=>Number(n.state)<50?"bad":Number(n.state)<150?"warn":void 0},{title:"Address",name:"ip_address",show:n=>n.state.split(", ")[0]??n.state}],ie=class extends v{constructor(){super(...arguments);this.by="";this.down=!1}render(){if(!this.hass)return p;let e=S(this.hass);if(!e.length)return o`<div class="none">No EchoLocal devices yet.</div>`;let t=e.map(s=>this.read(s)),r=this.sort(t);return o`<div class="scroll">
      <table>
        <thead>
          <tr>
            ${this.head("Device")}${zt.map(s=>this.head(s.title))}
          </tr>
        </thead>
        <tbody>
          ${r.map(s=>o`<tr data-off=${String(!s.up)}>
              <td class="who">
                <button @click=${()=>this.open(s.device)}>${s.name}</button>
              </td>
              ${zt.map(a=>{let l=s.cells[a.title];return o`<td data-wrong=${l?.wrong??""}>${l?.text??"\u2014"}</td>`})}
            </tr>`)}
        </tbody>
      </table>
    </div>`}head(e){return o`<th
      data-by=${String(this.by===e)}
      @click=${()=>{this.down=this.by===e?!this.down:!1,this.by=e}}
    >
      ${e}
    </th>`}read(e){let t=P(this.hass,e.id),r={},s=!1;for(let a of zt){let l=t?.by.get(a.name)?.[0]?.entity_id,d=l?this.hass.states[l]:void 0;if(!d||d.state==="unavailable"||d.state==="unknown")continue;s=!0;let h=Number(d.state),g=d.attributes.unit_of_measurement??"";r[a.title]={text:a.show?a.show(d):g?`${d.state} ${g}`:d.state,sort:a.sort?a.sort(d):Number.isFinite(h)&&d.state!==""?h:d.state,wrong:a.wrong?.(d)}}return{device:e,name:k(e),cells:r,up:s}}sort(e){if(!this.by)return e;let t=r=>this.by==="Device"?r.name:r.cells[this.by]?.sort??"";return[...e].sort((r,s)=>{let a=t(r),l=t(s),d=typeof a=="number"&&typeof l=="number"?a-l:String(a).localeCompare(String(l));return this.down?-d:d})}open(e){history.pushState(null,"",`/config/devices/device/${e.id}`),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))}};ie.styles=b(ur),c([m({attribute:!1})],ie.prototype,"hass",2),c([u()],ie.prototype,"by",2),c([u()],ie.prototype,"down",2),ie=c([y("echolocal-health")],ie);var mr=`:host{display:block}.zone{display:flex;align-items:center;gap:12px;padding:16px;margin-bottom:16px;border:1px dashed color-mix(in srgb,var(--primary-text-color) 22%,transparent);border-radius:14px;background:color-mix(in srgb,var(--primary-text-color) 4%,transparent);cursor:pointer;transition:border-color .15s ease,background .15s ease}.zone[data-over=true]{border-color:var(--primary-color);background:color-mix(in srgb,var(--primary-color) 12%,transparent)}.zone ha-icon{--mdc-icon-size: 24px;color:var(--secondary-text-color);display:flex;flex:0 0 auto}.zone[data-over=true] ha-icon{color:var(--primary-color)}.lead{font-size:.95rem;color:var(--primary-text-color)}.sub{font-size:.78rem;color:var(--secondary-text-color)}.scroll{overflow-x:auto}table{width:100%;border-collapse:collapse;font-size:.85rem}th{padding:0 10px 6px;text-align:left;font-size:.68rem;font-weight:600;text-transform:uppercase;letter-spacing:.07em;color:var(--secondary-text-color);white-space:nowrap}td{padding:4px 10px;border-top:1px solid color-mix(in srgb,var(--primary-text-color) 8%,transparent);vertical-align:middle}tbody tr[data-used=true] td:first-child{box-shadow:inset 3px 0 0 var(--success-color, #43a047)}tbody tr[data-used=false] td:first-child{box-shadow:inset 3px 0 0 var(--info-color, #039be5)}tbody tr[data-bad=true] td:first-child{box-shadow:inset 3px 0 0 var(--error-color, #db4437)}tbody tr:hover td{background:color-mix(in srgb,var(--primary-text-color) 4%,transparent)}.say{width:22ch}.say ha-input{--ha-input-padding-top: 0;--ha-input-padding-bottom: 0}.say ha-input::part(wa-base){border-color:transparent;background:none;min-height:34px}.say ha-input:hover::part(wa-base){border-color:color-mix(in srgb,var(--primary-text-color) 22%,transparent)}.say ha-input:focus-within::part(wa-base){border-color:var(--primary-color)}.say ha-input::part(wa-input){font-size:.9rem;padding-inline:8px}.id{font-family:var(--ha-font-family-code, monospace);font-size:.78rem;color:var(--secondary-text-color);word-break:break-all}.facts{color:var(--secondary-text-color);font-size:.78rem;font-variant-numeric:tabular-nums;white-space:nowrap}.end{text-align:right}.acts{display:flex;gap:2px;justify-content:flex-end}.act{width:30px;height:30px;display:grid;place-items:center;padding:0;border:none;border-radius:50%;background:none;color:var(--secondary-text-color);cursor:pointer}.act:hover{background:color-mix(in srgb,var(--primary-color) 16%,transparent);color:var(--primary-color)}.act.bin:hover{background:color-mix(in srgb,var(--error-color, #db4437) 16%,transparent);color:var(--error-color, #db4437)}.act ha-icon{--mdc-icon-size: 18px;display:flex}tr.wrong td{border-top:none;padding-top:0;font-size:.76rem;color:var(--error-color, #db4437)}.none{padding:4px 0;font-size:.85rem;color:var(--secondary-text-color)}input[type=file]{display:none}
`;async function Pt(n){try{return(await n.callWS({type:"echolocal/wake_words/list"}))?.wake_words??[]}catch{return[]}}var D=class extends v{constructor(){super(...arguments);this.inUse=new Set;this.words=[];this.over=!1;this.busy=!1;this.said="";this.asked=!1;this.dropped=e=>{e.preventDefault(),this.over=!1,this.add(e.dataTransfer?.files??null)}}updated(){this.asked||!this.hass||(this.asked=!0,this.refresh())}render(){return o`
      <div
        class="zone"
        data-over=${String(this.over)}
        @click=${()=>this.shadowRoot?.querySelector("input[type=file]")?.click()}
        @dragover=${e=>{e.preventDefault(),this.over=!0}}
        @dragleave=${()=>this.over=!1}
        @drop=${this.dropped}
      >
        ${this.busy?o`<ha-spinner></ha-spinner>`:o`<ha-icon icon="mdi:tray-arrow-up"></ha-icon>`}
        <div>
          <div class="lead">${this.busy?"Adding\u2026":"Drop a .tflite wake model here"}</div>
          <div class="sub">
            ${this.said||"Every satellite is offered the whole set and downloads what it is told to listen for"}
          </div>
        </div>
        <input
          type="file"
          accept=".tflite"
          multiple
          @change=${e=>this.add(e.target.files)}
        />
      </div>

      ${this.words.length?o`<div class="scroll">
            <table>
              <thead>
                <tr>
                  <th class="say">Wake word</th>
                  <th>File</th>
                  <th>Model</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                ${this.words.map(e=>this.row(e))}
              </tbody>
            </table>
          </div>`:o`<div class="none">
            Nothing in custom_wake_words yet. Whatever the firmware ships with is unaffected.
          </div>`}
    `}row(e){let t=[e.type||"no type",e.size?`${Math.round(e.size/1024)} KB`:"no model",...e.trained_languages.length?[e.trained_languages.join(", ")]:[]],r=this.inUse.has(e.wake_word);return o`<tr data-bad=${String(e.problems.length>0)} data-used=${String(r)}>
      <td class="say">
        <ha-input
          appearance="outlined"
          .value=${e.wake_word}
          placeholder="what wakes it"
          @change=${s=>this.rename(e,s.target.value)}
        ></ha-input>
      </td>
      <td class="id">${e.id}</td>
      <td class="facts">${t.join(" \xB7 ")}</td>
      <td class="end">
        <div class="acts">
          ${e.model_url?o`<a class="act" href=${e.model_url} download title=${`${e.id}.tflite`}>
                <ha-icon icon="mdi:waveform"></ha-icon>
              </a>`:p}
          ${e.config_url?o`<a class="act" href=${e.config_url} download title=${`${e.id}.json`}>
                <ha-icon icon="mdi:code-json"></ha-icon>
              </a>`:p}
          <button class="act bin" title=${`Remove ${e.id}`} @click=${()=>this.discard(e)}>
            <ha-icon icon="mdi:trash-can-outline"></ha-icon>
          </button>
        </div>
      </td>
    </tr>
    ${e.problems.length?o`<tr class="wrong" data-bad="true">
          <td colspan="4">${e.problems.join(". ")}.</td>
        </tr>`:p}`}async add(e){let t=[...e??[]].filter(r=>r.name.endsWith(".tflite"));if(!t.length){this.said="A wake model is a .tflite file.";return}this.busy=!0,this.said="";for(let r of t){let s=new FormData;s.append("file",r);try{let a=await fetch("/api/echolocal/wake_words",{method:"POST",body:s,headers:this.credentials()});if(!a.ok){let l=await a.json().catch(()=>({}));this.said=l.error??`Home Assistant refused ${r.name}.`;break}}catch(a){this.said=`That did not reach Home Assistant: ${a}`;break}}this.busy=!1,await this.refresh()}async rename(e,t){t!==e.wake_word&&(await this.hass.callWS({type:"echolocal/wake_words/update",wake_word_id:e.id,wake_word:t}),await this.refresh())}async discard(e){await this.hass.callWS({type:"echolocal/wake_words/delete",wake_word_id:e.id}),await this.refresh()}async refresh(){this.words=await Pt(this.hass)}credentials(){let e=this.hass.auth?.data?.access_token;return e?{authorization:`Bearer ${e}`}:{}}};D.styles=b(mr),c([m({attribute:!1})],D.prototype,"hass",2),c([m({attribute:!1})],D.prototype,"inUse",2),c([u()],D.prototype,"words",2),c([u()],D.prototype,"over",2),c([u()],D.prototype,"busy",2),c([u()],D.prototype,"said",2),c([u()],D.prototype,"asked",2),D=c([y("echolocal-wake-words")],D);var gr=`:host{display:block}h2.first{margin-top:0}h2{margin:26px 0 10px;font-size:.72rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--secondary-text-color)}.listening{display:grid;gap:8px}.who{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;padding:10px 14px;border-radius:12px;background:color-mix(in srgb,var(--primary-text-color) 5%,transparent);font-size:.9rem}.who .name{color:var(--primary-text-color);min-width:8ch}.word{padding:2px 9px;border-radius:999px;font-size:.78rem;background:color-mix(in srgb,var(--primary-color) 16%,transparent);color:var(--primary-color)}.word[data-gone=true]{background:color-mix(in srgb,var(--error-color, #db4437) 16%,transparent);color:var(--error-color, #db4437)}.spare{font-size:.85rem;color:var(--secondary-text-color);line-height:1.5}.heading{display:flex;align-items:baseline;gap:14px;flex-wrap:wrap}.legend{display:flex;gap:14px;flex-wrap:wrap;margin-left:auto;font-size:.72rem;color:var(--secondary-text-color)}.key{display:flex;align-items:center;gap:5px}.dot{width:9px;height:9px;border-radius:2px;background:var(--info-color, #039be5)}.dot[data-used=true]{background:var(--success-color, #43a047)}
`;R({path:"wake-words",title:"Wake words",icon:"mdi:waveform",element:"echolocal-words",order:10,admin:!0});var re=class extends v{constructor(){super(...arguments);this.words=[];this.asked=!1;this.again=()=>this.requestUpdate()}connectedCallback(){super.connectedCallback(),window.addEventListener(z,this.again)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(z,this.again)}updated(){this.asked||!this.hass||(this.asked=!0,this.load())}render(){if(!this.hass)return p;let e=this.chosen(),t=new Set(this.words.filter(s=>s.problems.length&&s.wake_word).map(s=>s.wake_word)),r=new Set(e.flatMap(s=>s.words));return o`
      <h2 class="first">Listening for</h2>
      ${e.length?o`<div class="listening">
            ${e.map(s=>o`<div class="who">
                <span class="name">${s.name}</span>
                ${s.words.map(a=>o`<span
                      class="word"
                      data-gone=${String(t.has(a))}
                      title=${t.has(a)?"Its library entry is broken, so it is not offered":""}
                      >${a}</span
                    >`)}
              </div>`)}
          </div>`:o`<div class="spare">No devices have picked a wake word yet.</div>`}

      <div class="heading">
        <h2>The library</h2>
        <div class="legend">
          <span class="key"><span class="dot" data-used="true"></span>Used</span>
          <span class="key"><span class="dot" data-used="false"></span>Unused</span>
        </div>
      </div>
      <echolocal-wake-words .hass=${this.hass} .inUse=${r}></echolocal-wake-words>
    `}chosen(){return S(this.hass).map(e=>{let r=(P(this.hass,e.id)?.by.get("wake_word")??[]).map(s=>this.hass.states[s.entity_id]?.state).filter(s=>s!=="no_wake_word").filter(s=>!!s&&s!=="unknown"&&s!=="None");return{name:k(e),words:r}}).filter(e=>e.words.length)}async load(){this.words=await Pt(this.hass)}};re.styles=b(gr),c([m({attribute:!1})],re.prototype,"hass",2),c([u()],re.prototype,"words",2),c([u()],re.prototype,"asked",2),re=c([y("echolocal-words")],re);async function fr(n){return(await n.callWS({type:"echolocal/tones/list"})).tones}function vr(n){let i=n.auth?.data?.access_token;return i?{authorization:`Bearer ${i}`}:{}}async function br(n,i,e,t,r=""){let s=new FormData;s.append("name",i),r&&s.append("key",r),s.append("start",String(t.start)),s.append("end",String(t.end)),s.append("original",e,e.name),s.append("tone",t.wav,"tone.wav");let a=await fetch("/api/echolocal/tones",{method:"POST",body:s,headers:vr(n)}),l=await a.json().catch(()=>({}));if(!a.ok)throw new Error(l.error??"Home Assistant refused the tone.");return l}async function yr(n,i){let e=await fetch(`/api/echolocal/tones/${encodeURIComponent(i)}/tone`,{headers:vr(n)});if(!e.ok)throw new Error("Home Assistant did not send the tone.");return URL.createObjectURL(await e.blob())}async function xr(n,i){let e=new AudioContext,t;try{t=await e.decodeAudioData(await n.arrayBuffer())}catch{throw new Error("This browser cannot read that file as audio.")}finally{e.close()}let r=Math.ceil(t.duration*48e3),s=new OfflineAudioContext(1,Math.max(r,1),48e3),a=s.createBufferSource();a.buffer=t,a.connect(s.destination),a.start();let l=(await s.startRendering()).getChannelData(0),d=0,h=l.length;if(i.trim){for(;d<h&&Math.abs(l[d])<.003;)d++;for(;h>d&&Math.abs(l[h-1])<.003;)h--}let g=30*48e3,f=h-d>g;if(f&&(h=d+g),l=l.slice(d,h),!l.length)throw new Error("That file is silent.");if(i.even){let w=0;for(let $ of l)w=Math.max(w,Math.abs($));if(w>0){let $=.9/w;for(let _=0;_<l.length;_++)l[_]*=$}}return{wav:sn(l),seconds:l.length/48e3,cut:f,start:d/48e3,end:h/48e3}}function sn(n){let i=n.length*2,e=new DataView(new ArrayBuffer(44+i)),t=(r,s)=>{for(let a=0;a<s.length;a++)e.setUint8(r+a,s.charCodeAt(a))};t(0,"RIFF"),e.setUint32(4,36+i,!0),t(8,"WAVE"),t(12,"fmt "),e.setUint32(16,16,!0),e.setUint16(20,1,!0),e.setUint16(22,1,!0),e.setUint32(24,48e3,!0),e.setUint32(28,48e3*2,!0),e.setUint16(32,2,!0),e.setUint16(34,16,!0),t(36,"data"),e.setUint32(40,i,!0);for(let r=0;r<n.length;r++){let s=Math.max(-1,Math.min(1,n[r]));e.setInt16(44+r*2,Math.round(s*32767),!0)}return new Blob([e.buffer],{type:"audio/wav"})}function wr(n){let e=n.replace(/\.[^.]+$/,"").replace(/[_-]+/g," ").replace(/\s+/g," ").trim();return e?e[0].toUpperCase()+e.slice(1):"Tone"}var $r=`:host{display:block;--tint: color-mix(in srgb, var(--primary-text-color) 5%, transparent);--edge: color-mix(in srgb, var(--primary-text-color) 12%, transparent)}.heading{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px}h2{margin:0;font-size:.72rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--secondary-text-color)}.add{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border-radius:999px;background:color-mix(in srgb,var(--primary-color) 14%,transparent);color:var(--primary-color);font-size:.85rem;cursor:pointer;--mdc-icon-size: 18px}.add input{display:none}.list{display:grid;gap:8px}.tone,.draft{display:grid;gap:8px;padding:10px 14px;border-radius:12px;background:var(--tint)}.draft{margin-bottom:12px;border:1px dashed color-mix(in srgb,var(--primary-color) 50%,transparent)}.row{display:flex;align-items:center;gap:8px;min-width:0}.title{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--primary-text-color);cursor:text}input.name,input.search{flex:1;min-width:0;padding:6px 10px;border:1px solid var(--edge);border-radius:8px;background:var(--card-background-color, transparent);color:var(--primary-text-color);font:inherit}.length,.source,.state{color:var(--secondary-text-color);font-size:.8rem;font-variant-numeric:tabular-nums}.source{margin-left:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}button{font:inherit;cursor:pointer}button.icon{display:inline-flex;padding:4px;border:none;border-radius:8px;background:none;color:var(--secondary-text-color);--mdc-icon-size: 20px}button.icon:hover{color:var(--primary-text-color);background:var(--tint)}button.icon.danger{color:var(--error-color, #db4437)}button.icon:disabled{opacity:.4;cursor:default}.options label{display:inline-flex;align-items:center;gap:4px;font-size:.85rem}.actions{justify-content:flex-end}button.text,button.primary{padding:6px 14px;border-radius:999px;border:none}button.text{background:none;color:var(--secondary-text-color)}button.primary{background:var(--primary-color);color:var(--text-primary-color, #fff)}button.primary:disabled{opacity:.5;cursor:default}.devices{display:flex;align-items:center;gap:6px;padding:4px 0;border:none;background:none;color:var(--secondary-text-color);font-size:.85rem;text-align:left;--mdc-icon-size: 16px}.devices span{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.picker{display:grid;gap:4px;max-height:260px;overflow-y:auto;padding-top:4px;border-top:1px solid var(--edge)}.device{display:flex;align-items:center;gap:8px;padding:4px 2px;font-size:.9rem}.device[data-offline=true]{opacity:.55}.note{font-size:.8rem;color:var(--secondary-text-color)}.said{margin-bottom:12px;padding:8px 12px;border-radius:8px;background:color-mix(in srgb,var(--error-color, #db4437) 12%,transparent);color:var(--primary-text-color);font-size:.85rem}.spare{padding:16px;border-radius:12px;background:var(--tint);color:var(--secondary-text-color);font-size:.9rem}
`;R({path:"tones",title:"Tones",icon:"mdi:music-note",element:"echolocal-tones",order:11,admin:!0});var H=class extends v{constructor(){super(...arguments);this.tones=[];this.asked=!1;this.said="";this.busy=!1;this.open="";this.search="";this.sending=new Set;this.renaming="";this.doomed="";this.playing="";this.again=()=>this.requestUpdate()}connectedCallback(){super.connectedCallback(),window.addEventListener(z,this.again)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(z,this.again),this.stop()}updated(){this.asked||!this.hass||(this.asked=!0,this.refresh())}render(){if(!this.hass)return p;let e=this.holders();return o`
      <div class="heading">
        <h2 class="first">Tones</h2>
        <label class="add">
          <ha-icon icon="mdi:plus"></ha-icon><span>Add tone</span>
          <input
            type="file"
            accept="audio/*"
            @change=${t=>this.pick(t.target.files)}
          />
        </label>
      </div>
      ${this.draft?this.renderDraft(this.draft):p}
      ${this.said?o`<div class="said">${this.said}</div>`:p}
      ${this.tones.length?o`<div class="list">${this.tones.map(t=>this.renderTone(t,e))}</div>`:o`<div class="spare">No tones yet. Add one to use it for alerts, timers and wake chimes.</div>`}
    `}renderDraft(e){let t=e.processed;return o`
      <div class="draft">
        <div class="row">
          <input
            class="name"
            .value=${e.name}
            placeholder="Name"
            @input=${r=>this.edit({name:r.target.value})}
          />
          <button class="icon" ?disabled=${!t} @click=${()=>t&&this.preview("draft",URL.createObjectURL(t.wav))}>
            <ha-icon icon=${this.playing==="draft"?"mdi:stop":"mdi:play"}></ha-icon>
          </button>
          <span class="length">${t?`${t.seconds.toFixed(1)} s`:"\u2026"}</span>
        </div>
        <div class="row options">
          <label><input type="checkbox" .checked=${e.trim} @change=${r=>this.edit({trim:r.target.checked},!0)} />Trim silence</label>
          <label><input type="checkbox" .checked=${e.even} @change=${r=>this.edit({even:r.target.checked},!0)} />Even out loudness</label>
          <span class="source">${e.file.name}</span>
        </div>
        ${t?.cut?o`<div class="note">Using the first 30 seconds.</div>`:p}
        ${e.replace?o`<div class="note">Replaces "${e.replace.name}" on the devices that have it.</div>`:p}
        <div class="row actions">
          <button class="text" @click=${()=>this.draft=void 0}>Cancel</button>
          <button class="primary" ?disabled=${!t||!e.name.trim()||this.busy} @click=${()=>this.save(e)}>
            ${this.busy?"Uploading\u2026":e.replace?"Replace":"Upload"}
          </button>
        </div>
      </div>
    `}renderTone(e,t){let r=t.filter(a=>a.tones.has(e.name)),s=this.search?t.filter(a=>a.name.toLowerCase().includes(this.search.toLowerCase())):t;return o`
      <div class="tone">
        <div class="row">
          ${this.renaming===e.key?o`<input
                class="name"
                .value=${e.name}
                @keydown=${a=>{a.key==="Enter"&&this.rename(e,a.target.value),a.key==="Escape"&&(this.renaming="")}}
                @blur=${a=>void this.rename(e,a.target.value)}
              />`:o`<span class="title" @click=${()=>this.renaming=e.key}>${e.name}</span>`}
          <span class="length">${e.length.toFixed(1)} s</span>
          <button class="icon" title="Play" @click=${()=>void this.play(e)}>
            <ha-icon icon=${this.playing===e.key?"mdi:stop":"mdi:play"}></ha-icon>
          </button>
          <button class="icon" title="Rename" @click=${()=>this.renaming=e.key}>
            <ha-icon icon="mdi:pencil"></ha-icon>
          </button>
          <button
            class="icon ${this.doomed===e.key?"danger":""}"
            title=${this.doomed===e.key?"Tap again to delete":"Delete"}
            @click=${()=>void this.discard(e)}
          >
            <ha-icon icon=${this.doomed===e.key?"mdi:delete-alert":"mdi:delete"}></ha-icon>
          </button>
        </div>
        <button class="devices" @click=${()=>this.open=this.open===e.key?"":e.key}>
          <ha-icon icon="mdi:speaker-multiple"></ha-icon>
          <span>${r.length?r.map(a=>a.name).join(", "):"On no devices"}</span>
          <ha-icon icon=${this.open===e.key?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
        </button>
        ${this.open===e.key?o`<div class="picker">
              ${t.length>6?o`<input
                    class="search"
                    placeholder="Search devices"
                    .value=${this.search}
                    @input=${a=>this.search=a.target.value}
                  />`:p}
              ${s.map(a=>{let l=`${e.key}:${a.id}`,d=a.online&&a.supported;return o`<label class="device" data-offline=${String(!d)}>
                  <input
                    type="checkbox"
                    .checked=${a.tones.has(e.name)}
                    ?disabled=${!d||this.sending.has(l)}
                    @change=${h=>void this.toggle(e,a,h.target.checked)}
                  />
                  <span>${a.name}</span>
                  ${a.online?a.supported?p:o`<span class="state">needs an update</span>`:o`<span class="state">offline</span>`}
                  ${this.sending.has(l)?o`<span class="state">sending…</span>`:p}
                </label>`})}
            </div>`:p}
      </div>
    `}holders(){return S(this.hass).map(e=>{let t=P(this.hass,e.id),r=t?.by.get("alerts_timer")?.[0],a=(r?this.hass.states[r.entity_id]:void 0)?.attributes?.options??[],l=[...t?.by.values()??[]].flat().map(d=>this.hass.states[d.entity_id]);return{id:e.id,name:k(e),online:l.some(d=>d&&d.state!=="unavailable"),supported:!!ce(this.hass,e.name??"",gi),tones:new Set(a)}}).sort((e,t)=>e.name.localeCompare(t.name))}pick(e){let t=e?.[0];if(!t)return;let r=wr(t.name),s=this.tones.find(a=>a.name.toLowerCase()===r.toLowerCase());this.said="",this.draft={file:t,name:r,trim:!0,even:!0,replace:s},this.process()}edit(e,t=!1){if(this.draft){if(this.draft={...this.draft,...e},"name"in e){let r=(e.name??"").trim().toLowerCase();this.draft.replace=this.tones.find(s=>s.name.toLowerCase()===r)}t&&this.process()}}async process(){let e=this.draft;if(e)try{let t=await xr(e.file,{trim:e.trim,even:e.even});this.draft?.file===e.file&&(this.draft={...this.draft,processed:t})}catch(t){this.said=String(t.message??t),this.draft=void 0}}async save(e){if(e.processed){this.busy=!0,this.said="";try{let t=await br(this.hass,e.name.trim(),e.file,e.processed,e.replace?.key);if(this.draft=void 0,e.replace){let r=this.holders().filter(s=>s.online&&s.tones.has(e.replace.name));r.length&&await this.assign(t,r.map(s=>s.id))}}catch(t){this.said=String(t.message??t)}this.busy=!1,await this.refresh()}}async toggle(e,t,r){let s=`${e.key}:${t.id}`;this.sending=new Set([...this.sending,s]),this.said="";try{r?await this.assign(e,[t.id]):await this.hass.callService("echolocal","unassign_tone",{tone:e.key,device_id:[t.id]})}catch(l){this.said=`${t.name}: ${l.message??l}`}let a=new Set(this.sending);a.delete(s),this.sending=a}async assign(e,t){await this.hass.callService("echolocal","assign_tone",{tone:e.key,device_id:t})}async rename(e,t){if(this.renaming="",t=t.trim(),!(!t||t===e.name)){try{await this.hass.callWS({type:"echolocal/tones/rename",key:e.key,name:t})}catch(r){this.said=String(r.message??r)}await this.refresh()}}async discard(e){if(this.doomed!==e.key){this.doomed=e.key;return}this.doomed="";try{await this.hass.callWS({type:"echolocal/tones/delete",key:e.key})}catch(t){this.said=String(t.message??t)}await this.refresh()}async play(e){if(this.playing===e.key){this.stop();return}try{this.preview(e.key,await yr(this.hass,e.key))}catch(t){this.said=String(t.message??t)}}preview(e,t){let r=this.playing;this.stop(),r!==e&&(this.player=new Audio(t),this.playing=e,this.player.onended=()=>this.stop(),this.player.play(),this.requestUpdate())}stop(){this.player&&(this.player.pause(),URL.revokeObjectURL(this.player.src)),this.player=void 0,this.playing="",this.requestUpdate()}async refresh(){try{this.tones=await fr(this.hass)}catch(e){this.said=String(e.message??e)}}};H.styles=b($r),c([m({attribute:!1})],H.prototype,"hass",2),c([u()],H.prototype,"tones",2),c([u()],H.prototype,"asked",2),c([u()],H.prototype,"draft",2),c([u()],H.prototype,"said",2),c([u()],H.prototype,"busy",2),c([u()],H.prototype,"open",2),c([u()],H.prototype,"search",2),c([u()],H.prototype,"sending",2),c([u()],H.prototype,"renaming",2),c([u()],H.prototype,"doomed",2),H=c([y("echolocal-tones")],H);var L=class extends v{constructor(){super(...arguments);this.narrow=!1;this.at="";this.made=new Map;this.moved=()=>{this.at=Ht(this.base(),void 0),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),window.addEventListener("location-changed",this.moved),window.addEventListener("popstate",this.moved)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("location-changed",this.moved),window.removeEventListener("popstate",this.moved)}render(){if(!this.hass)return p;let e=!!this.hass.user?.is_admin,t=Mt(e),r=Vi(this.where(),e);return o`
      <header>
        <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
        <div class="bar">${t.map(s=>this.button(s,s===r))}</div>
      </header>
      <div class="page">${r?this.body(r):p}</div>
    `}button(e,t){return o`<button
      data-here=${String(t)}
      @click=${()=>{this.at=e.path,Yi(this.base(),e.path)}}
    >
      <ha-icon .icon=${e.icon}></ha-icon><span>${e.title}</span>
    </button>`}body(e){let t=this.made.get(e.path);return t||(t=document.createElement(e.element),this.made.set(e.path,t)),t.hass=this.hass,t.narrow=this.narrow,t}where(){return this.route?Ht(this.base(),this.route.path):this.at}base(){return this.route?.prefix??"/echolocal"}};L.styles=b(Xi),c([m({attribute:!1})],L.prototype,"hass",2),c([m({type:Boolean})],L.prototype,"narrow",2),c([m({attribute:!1})],L.prototype,"route",2),c([m({attribute:!1})],L.prototype,"panel",2),c([u()],L.prototype,"at",2),L=c([y("echolocal-panel")],L);window.customCards=window.customCards??[];window.customCards.some(n=>n.type==="echolocal-satellite-card")||window.customCards.push({type:"echolocal-satellite-card",name:"EchoLocal Satellite",description:"An EchoLocal satellite, drawn as itself, with its controls live.",preview:!0,documentationURL:"https://github.com/ygelfand/echolocal-hacs"});
