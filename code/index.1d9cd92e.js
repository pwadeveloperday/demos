const hr=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}};hr();const pr="modulepreload",ur=function(r){return"/"+r},lt={},w=function(e,t,n){return!t||t.length===0?e():Promise.all(t.map(i=>{if(i=ur(i),i in lt)return;lt[i]=!0;const s=i.endsWith(".css"),o=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${o}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":pr,s||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),s)return new Promise((a,l)=>{c.addEventListener("load",a),c.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ke=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ne=Symbol(),ct=new WeakMap;class Nt{constructor(e,t,n){if(this._$cssResult$=!0,n!==Ne)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ke&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=ct.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ct.set(t,e))}return e}toString(){return this.cssText}}const dr=r=>new Nt(typeof r=="string"?r:r+"",void 0,Ne),m=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((n,i,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[s+1],r[0]);return new Nt(t,r,Ne)},fr=(r,e)=>{ke?r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),i=window.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,r.appendChild(n)})},ht=ke?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return dr(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ce;const pt=window.trustedTypes,vr=pt?pt.emptyScript:"",ut=window.reactiveElementPolyfillSupport,Te={toAttribute(r,e){switch(e){case Boolean:r=r?vr:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},zt=(r,e)=>e!==r&&(e==e||r==r),Pe={attribute:!0,type:String,converter:Te,reflect:!1,hasChanged:zt};class T extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;(t=this.h)!==null&&t!==void 0||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const i=this._$Ep(n,t);i!==void 0&&(this._$Ev.set(i,n),e.push(i))}),e}static createProperty(e,t=Pe){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,n,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(i){const s=this[e];this[t]=i,this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Pe}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of n)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)t.unshift(ht(i))}else e!==void 0&&t.push(ht(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return fr(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=Pe){var i,s;const o=this.constructor._$Ep(e,n);if(o!==void 0&&n.reflect===!0){const c=((s=(i=n.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&s!==void 0?s:Te.toAttribute)(t,n.type);this._$El=e,c==null?this.removeAttribute(o):this.setAttribute(o,c),this._$El=null}}_$AK(e,t){var n,i;const s=this.constructor,o=s._$Ev.get(e);if(o!==void 0&&this._$El!==o){const c=s.getPropertyOptions(o),a=c.converter,l=(i=(n=a==null?void 0:a.fromAttribute)!==null&&n!==void 0?n:typeof a=="function"?a:null)!==null&&i!==void 0?i:Te.fromAttribute;this._$El=o,this[o]=l(t,c.type),this._$El=null}}requestUpdate(e,t,n){let i=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||zt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(n)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var i;return(i=n.hostUpdated)===null||i===void 0?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}T.finalized=!0,T.elementProperties=new Map,T.elementStyles=[],T.shadowRootOptions={mode:"open"},ut==null||ut({ReactiveElement:T}),((Ce=globalThis.reactiveElementVersions)!==null&&Ce!==void 0?Ce:globalThis.reactiveElementVersions=[]).push("1.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Le;const I=globalThis.trustedTypes,dt=I?I.createPolicy("lit-html",{createHTML:r=>r}):void 0,O=`lit$${(Math.random()+"").slice(9)}$`,Vt="?"+O,gr=`<${Vt}>`,U=document,F=(r="")=>U.createComment(r),Z=r=>r===null||typeof r!="object"&&typeof r!="function",Wt=Array.isArray,_r=r=>{var e;return Wt(r)||typeof((e=r)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ft=/-->/g,vt=/>/g,M=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,gt=/'/g,_t=/"/g,Ft=/^(?:script|style|textarea|title)$/i,mr=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),g=mr(1),R=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),mt=new WeakMap,yr=(r,e,t)=>{var n,i;const s=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let o=s._$litPart$;if(o===void 0){const c=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=o=new G(e.insertBefore(F(),c),c,void 0,t!=null?t:{})}return o._$AI(r),o},j=U.createTreeWalker(U,129,null,!1),wr=(r,e)=>{const t=r.length-1,n=[];let i,s=e===2?"<svg>":"",o=z;for(let a=0;a<t;a++){const l=r[a];let p,u,h=-1,d=0;for(;d<l.length&&(o.lastIndex=d,u=o.exec(l),u!==null);)d=o.lastIndex,o===z?u[1]==="!--"?o=ft:u[1]!==void 0?o=vt:u[2]!==void 0?(Ft.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=M):u[3]!==void 0&&(o=M):o===M?u[0]===">"?(o=i!=null?i:z,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,p=u[1],o=u[3]===void 0?M:u[3]==='"'?_t:gt):o===_t||o===gt?o=M:o===ft||o===vt?o=z:(o=M,i=void 0);const E=o===M&&r[a+1].startsWith("/>")?" ":"";s+=o===z?l+gr:h>=0?(n.push(p),l.slice(0,h)+"$lit$"+l.slice(h)+O+E):l+O+(h===-2?(n.push(void 0),a):E)}const c=s+(r[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[dt!==void 0?dt.createHTML(c):c,n]};class q{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let s=0,o=0;const c=e.length-1,a=this.parts,[l,p]=wr(e,t);if(this.el=q.createElement(l,n),j.currentNode=this.el.content,t===2){const u=this.el.content,h=u.firstChild;h.remove(),u.append(...h.childNodes)}for(;(i=j.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes()){const u=[];for(const h of i.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(O)){const d=p[o++];if(u.push(h),d!==void 0){const E=i.getAttribute(d.toLowerCase()+"$lit$").split(O),L=/([.?@])?(.*)/.exec(d);a.push({type:1,index:s,name:L[2],strings:E,ctor:L[1]==="."?$r:L[1]==="?"?Ar:L[1]==="@"?Cr:Ee})}else a.push({type:6,index:s})}for(const h of u)i.removeAttribute(h)}if(Ft.test(i.tagName)){const u=i.textContent.split(O),h=u.length-1;if(h>0){i.textContent=I?I.emptyScript:"";for(let d=0;d<h;d++)i.append(u[d],F()),j.nextNode(),a.push({type:2,index:++s});i.append(u[h],F())}}}else if(i.nodeType===8)if(i.data===Vt)a.push({type:2,index:s});else{let u=-1;for(;(u=i.data.indexOf(O,u+1))!==-1;)a.push({type:7,index:s}),u+=O.length-1}s++}}static createElement(e,t){const n=U.createElement("template");return n.innerHTML=e,n}}function H(r,e,t=r,n){var i,s,o,c;if(e===R)return e;let a=n!==void 0?(i=t._$Cl)===null||i===void 0?void 0:i[n]:t._$Cu;const l=Z(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(r),a._$AT(r,t,n)),n!==void 0?((o=(c=t)._$Cl)!==null&&o!==void 0?o:c._$Cl=[])[n]=a:t._$Cu=a),a!==void 0&&(e=H(r,a._$AS(r,e.values),a,n)),e}class br{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:n},parts:i}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:U).importNode(n,!0);j.currentNode=s;let o=j.nextNode(),c=0,a=0,l=i[0];for(;l!==void 0;){if(c===l.index){let p;l.type===2?p=new G(o,o.nextSibling,this,e):l.type===1?p=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(p=new Pr(o,this,e)),this.v.push(p),l=i[++a]}c!==(l==null?void 0:l.index)&&(o=j.nextNode(),c++)}return s}m(e){let t=0;for(const n of this.v)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class G{constructor(e,t,n,i){var s;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cg=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=H(this,e,t),Z(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==R&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):_r(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==b&&Z(this._$AH)?this._$AA.nextSibling.data=e:this.k(U.createTextNode(e)),this._$AH=e}T(e){var t;const{values:n,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=q.createElement(i.h,this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.m(n);else{const o=new br(s,this),c=o.p(this.options);o.m(n),this.k(c),this._$AH=o}}_$AC(e){let t=mt.get(e.strings);return t===void 0&&mt.set(e.strings,t=new q(e)),t}S(e){Wt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const s of e)i===t.length?t.push(n=new G(this.M(F()),this.M(F()),this,this.options)):n=t[i],n._$AI(s),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Ee{constructor(e,t,n,i,s){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,i){const s=this.strings;let o=!1;if(s===void 0)e=H(this,e,t,0),o=!Z(e)||e!==this._$AH&&e!==R,o&&(this._$AH=e);else{const c=e;let a,l;for(e=s[0],a=0;a<s.length-1;a++)l=H(this,c[n+a],t,a),l===R&&(l=this._$AH[a]),o||(o=!Z(l)||l!==this._$AH[a]),l===b?e=b:e!==b&&(e+=(l!=null?l:"")+s[a+1]),this._$AH[a]=l}o&&!i&&this.C(e)}C(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class $r extends Ee{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===b?void 0:e}}const Er=I?I.emptyScript:"";class Ar extends Ee{constructor(){super(...arguments),this.type=4}C(e){e&&e!==b?this.element.setAttribute(this.name,Er):this.element.removeAttribute(this.name)}}class Cr extends Ee{constructor(e,t,n,i,s){super(e,t,n,i,s),this.type=5}_$AI(e,t=this){var n;if((e=(n=H(this,e,t,0))!==null&&n!==void 0?n:b)===R)return;const i=this._$AH,s=e===b&&i!==b||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==b&&(i===b||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class Pr{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){H(this,e)}}const yt=window.litHtmlPolyfillSupport;yt==null||yt(q,G),((Le=globalThis.litHtmlVersions)!==null&&Le!==void 0?Le:globalThis.litHtmlVersions=[]).push("2.2.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xe,Oe;class v extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=yr(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return R}}v.finalized=!0,v._$litElement$=!0,(xe=globalThis.litElementHydrateSupport)===null||xe===void 0||xe.call(globalThis,{LitElement:v});const wt=globalThis.litElementPolyfillSupport;wt==null||wt({LitElement:v});((Oe=globalThis.litElementVersions)!==null&&Oe!==void 0?Oe:globalThis.litElementVersions=[]).push("3.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=r=>e=>typeof e=="function"?((t,n)=>(window.customElements.define(t,n),n))(r,e):((t,n)=>{const{kind:i,elements:s}=n;return{kind:i,elements:s,finisher(o){window.customElements.define(t,o)}}})(r,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lr=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,r)}};function f(r){return(e,t)=>t!==void 0?((n,i,s)=>{i.constructor.createProperty(s,n)})(r,e,t):Lr(r,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Se;((Se=window.HTMLSlotElement)===null||Se===void 0?void 0:Se.prototype.assignedElements)!=null;function re(r){return r=r||[],Array.isArray(r)?r:[r]}function P(r){return`[Vaadin.Router] ${r}`}function xr(r){if(typeof r!="object")return String(r);const e=Object.prototype.toString.call(r).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(r)}`:e}const ne="module",ie="nomodule",De=[ne,ie];function bt(r){if(!r.match(/.+\.[m]?js$/))throw new Error(P(`Unsupported type for bundle "${r}": .js or .mjs expected.`))}function Zt(r){if(!r||!C(r.path))throw new Error(P('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=r.bundle,t=["component","redirect","bundle"];if(!B(r.action)&&!Array.isArray(r.children)&&!B(r.children)&&!se(e)&&!t.some(n=>C(r[n])))throw new Error(P(`Expected route config "${r.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(C(e))bt(e);else if(De.some(n=>n in e))De.forEach(n=>n in e&&bt(e[n]));else throw new Error(P('Expected route bundle to include either "'+ie+'" or "'+ne+'" keys, or both'));r.redirect&&["bundle","component"].forEach(n=>{n in r&&console.warn(P(`Route config "${r.path}" has both "redirect" and "${n}" properties, and "redirect" will always override the latter. Did you mean to only use "${n}"?`))})}function $t(r){re(r).forEach(e=>Zt(e))}function Et(r,e){let t=document.head.querySelector('script[src="'+r+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",r),e===ne?t.setAttribute("type",ne):e===ie&&t.setAttribute(ie,""),t.async=!0),new Promise((n,i)=>{t.onreadystatechange=t.onload=s=>{t.__dynamicImportLoaded=!0,n(s)},t.onerror=s=>{t.parentNode&&t.parentNode.removeChild(t),i(s)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&n()})}function Or(r){return C(r)?Et(r):Promise.race(De.filter(e=>e in r).map(e=>Et(r[e],e)))}function W(r,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:e}))}function se(r){return typeof r=="object"&&!!r}function B(r){return typeof r=="function"}function C(r){return typeof r=="string"}function qt(r){const e=new Error(P(`Page not found (${r.pathname})`));return e.context=r,e.code=404,e}const D=new class{};function Sr(r){const e=r.port,t=r.protocol,s=t==="http:"&&e==="80"||t==="https:"&&e==="443"?r.hostname:r.host;return`${t}//${s}`}function At(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let e=r.target;const t=r.composedPath?r.composedPath():r.path||[];for(let c=0;c<t.length;c++){const a=t[c];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||Sr(e))!==window.location.origin)return;const{pathname:i,search:s,hash:o}=e;W("go",{pathname:i,search:s,hash:o})&&(r.preventDefault(),r&&r.type==="click"&&window.scrollTo(0,0))}const Mr={activate(){window.document.addEventListener("click",At)},inactivate(){window.document.removeEventListener("click",At)}},Rr=/Trident/.test(navigator.userAgent);Rr&&!B(window.PopStateEvent)&&(window.PopStateEvent=function(r,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(r,Boolean(e.bubbles),Boolean(e.cancelable)),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function Ct(r){if(r.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:n}=window.location;W("go",{pathname:e,search:t,hash:n})}const Br={activate(){window.addEventListener("popstate",Ct)},inactivate(){window.removeEventListener("popstate",Ct)}};var k=Yt,Tr=ze,Dr=Hr,jr=Qt,Ir=Xt,Kt="/",Gt="./",Ur=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function ze(r,e){for(var t=[],n=0,i=0,s="",o=e&&e.delimiter||Kt,c=e&&e.delimiters||Gt,a=!1,l;(l=Ur.exec(r))!==null;){var p=l[0],u=l[1],h=l.index;if(s+=r.slice(i,h),i=h+p.length,u){s+=u[1],a=!0;continue}var d="",E=r[i],L=l[2],N=l[3],or=l[4],Q=l[5];if(!a&&s.length){var Ae=s.length-1;c.indexOf(s[Ae])>-1&&(d=s[Ae],s=s.slice(0,Ae))}s&&(t.push(s),s="",a=!1);var ar=d!==""&&E!==void 0&&E!==d,lr=Q==="+"||Q==="*",cr=Q==="?"||Q==="*",ot=d||o,at=N||or;t.push({name:L||n++,prefix:d,delimiter:ot,optional:cr,repeat:lr,partial:ar,pattern:at?kr(at):"[^"+x(ot)+"]+?"})}return(s||i<r.length)&&t.push(s+r.substr(i)),t}function Hr(r,e){return Qt(ze(r,e))}function Qt(r){for(var e=new Array(r.length),t=0;t<r.length;t++)typeof r[t]=="object"&&(e[t]=new RegExp("^(?:"+r[t].pattern+")$"));return function(n,i){for(var s="",o=i&&i.encode||encodeURIComponent,c=0;c<r.length;c++){var a=r[c];if(typeof a=="string"){s+=a;continue}var l=n?n[a.name]:void 0,p;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var u=0;u<l.length;u++){if(p=o(l[u],a),!e[c].test(p))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');s+=(u===0?a.prefix:a.delimiter)+p}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(p=o(String(l),a),!e[c].test(p))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+p+'"');s+=a.prefix+p;continue}if(a.optional){a.partial&&(s+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return s}}function x(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function kr(r){return r.replace(/([=!:$/()])/g,"\\$1")}function Jt(r){return r&&r.sensitive?"":"i"}function Nr(r,e){if(!e)return r;var t=r.source.match(/\((?!\?)/g);if(t)for(var n=0;n<t.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return r}function zr(r,e,t){for(var n=[],i=0;i<r.length;i++)n.push(Yt(r[i],e,t).source);return new RegExp("(?:"+n.join("|")+")",Jt(t))}function Vr(r,e,t){return Xt(ze(r,t),e,t)}function Xt(r,e,t){t=t||{};for(var n=t.strict,i=t.start!==!1,s=t.end!==!1,o=x(t.delimiter||Kt),c=t.delimiters||Gt,a=[].concat(t.endsWith||[]).map(x).concat("$").join("|"),l=i?"^":"",p=r.length===0,u=0;u<r.length;u++){var h=r[u];if(typeof h=="string")l+=x(h),p=u===r.length-1&&c.indexOf(h[h.length-1])>-1;else{var d=h.repeat?"(?:"+h.pattern+")(?:"+x(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;e&&e.push(h),h.optional?h.partial?l+=x(h.prefix)+"("+d+")?":l+="(?:"+x(h.prefix)+"("+d+"))?":l+=x(h.prefix)+"("+d+")"}}return s?(n||(l+="(?:"+o+")?"),l+=a==="$"?"$":"(?="+a+")"):(n||(l+="(?:"+o+"(?="+a+"))?"),p||(l+="(?="+o+"|"+a+")")),new RegExp(l,Jt(t))}function Yt(r,e,t){return r instanceof RegExp?Nr(r,e):Array.isArray(r)?zr(r,e,t):Vr(r,e,t)}k.parse=Tr;k.compile=Dr;k.tokensToFunction=jr;k.tokensToRegExp=Ir;const{hasOwnProperty:Wr}=Object.prototype,je=new Map;je.set("|false",{keys:[],pattern:/(?:)/});function Pt(r){try{return decodeURIComponent(r)}catch{return r}}function Fr(r,e,t,n,i){t=!!t;const s=`${r}|${t}`;let o=je.get(s);if(!o){const l=[];o={keys:l,pattern:k(r,l,{end:t,strict:r===""})},je.set(s,o)}const c=o.pattern.exec(e);if(!c)return null;const a=Object.assign({},i);for(let l=1;l<c.length;l++){const p=o.keys[l-1],u=p.name,h=c[l];(h!==void 0||!Wr.call(a,u))&&(p.repeat?a[u]=h?h.split(p.delimiter).map(Pt):[]:a[u]=h&&Pt(h))}return{path:c[0],keys:(n||[]).concat(o.keys),params:a}}function er(r,e,t,n,i){let s,o,c=0,a=r.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(l){if(r===l)return{done:!0};const p=r.__children=r.__children||r.children;if(!s&&(s=Fr(a,e,!p,n,i),s))return{done:!1,value:{route:r,keys:s.keys,params:s.params,path:s.path}};if(s&&p)for(;c<p.length;){if(!o){const h=p[c];h.parent=r;let d=s.path.length;d>0&&e.charAt(d)==="/"&&(d+=1),o=er(h,e.substr(d),t,s.keys,s.params)}const u=o.next(l);if(!u.done)return{done:!1,value:u.value};o=null,c++}return{done:!0}}}}function Zr(r){if(B(r.route.action))return r.route.action(r)}function qr(r,e){let t=e;for(;t;)if(t=t.parent,t===r)return!0;return!1}function Kr(r){let e=`Path '${r.pathname}' is not properly resolved due to an error.`;const t=(r.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function Gr(r,e){const{route:t,path:n}=e;if(t&&!t.__synthetic){const i={path:n,route:t};if(!r.chain)r.chain=[];else if(t.parent){let s=r.chain.length;for(;s--&&r.chain[s].route&&r.chain[s].route!==t.parent;)r.chain.pop()}r.chain.push(i)}}class K{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Zr,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){$t(e);const t=[...re(e)];this.root.__children=t}addRoutes(e){return $t(e),this.root.__children.push(...re(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,C(e)?{pathname:e}:e),n=er(this.root,this.__normalizePathname(t.pathname),this.baseUrl),i=this.resolveRoute;let s=null,o=null,c=t;function a(l,p=s.value.route,u){const h=u===null&&s.value.route;return s=o||n.next(h),o=null,!l&&(s.done||!qr(p,s.value.route))?(o=s,Promise.resolve(D)):s.done?Promise.reject(qt(t)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},t,s.value),Gr(c,s.value),Promise.resolve(i(c)).then(d=>d!=null&&d!==D?(c.result=d.result||d,c):a(l,p,d)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const p=Kr(c);if(l?console.warn(p):l=new Error(p),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;if(n.slice(0,t.length)===t)return n.slice(t.length)}}K.pathToRegexp=k;const{pathToRegexp:Lt}=K,xt=new Map;function tr(r,e,t){const n=e.name||e.component;if(n&&(r.has(n)?r.get(n).push(e):r.set(n,[e])),Array.isArray(t))for(let i=0;i<t.length;i++){const s=t[i];s.parent=e,tr(r,s,s.__children||s.children)}}function Ot(r,e){const t=r.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function St(r){let e=r.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Qr(r,e={}){if(!(r instanceof K))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(n,i)=>{let s=Ot(t,n);if(!s&&(t.clear(),tr(t,r.root,r.root.__children),s=Ot(t,n),!s))throw new Error(`Route "${n}" not found`);let o=xt.get(s.fullPath);if(!o){let a=St(s),l=s.parent;for(;l;){const d=St(l);d&&(a=d.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const p=Lt.parse(a),u=Lt.tokensToFunction(p),h=Object.create(null);for(let d=0;d<p.length;d++)C(p[d])||(h[p[d].name]=!0);o={toPath:u,keys:h},xt.set(a,o),s.fullPath=a}let c=o.toPath(i,e)||"/";if(e.stringifyQueryParams&&i){const a={},l=Object.keys(i);for(let u=0;u<l.length;u++){const h=l[u];o.keys[h]||(a[h]=i[h])}const p=e.stringifyQueryParams(a);p&&(c+=p.charAt(0)==="?"?p:`?${p}`)}return c}}let Mt=[];function Jr(r){Mt.forEach(e=>e.inactivate()),r.forEach(e=>e.activate()),Mt=r}const Xr=r=>{const e=getComputedStyle(r).getPropertyValue("animation-name");return e&&e!=="none"},Yr=(r,e)=>{const t=()=>{r.removeEventListener("animationend",t),e()};r.addEventListener("animationend",t)};function Rt(r,e){return r.classList.add(e),new Promise(t=>{if(Xr(r)){const n=r.getBoundingClientRect(),i=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;r.setAttribute("style",`position: absolute; ${i}`),Yr(r,()=>{r.classList.remove(e),r.removeAttribute("style"),t()})}else r.classList.remove(e),t()})}const en=256;function Me(r){return r!=null}function tn(r){const e=Object.assign({},r);return delete e.next,e}function A({pathname:r="",search:e="",hash:t="",chain:n=[],params:i={},redirectFrom:s,resolver:o},c){const a=n.map(l=>l.route);return{baseUrl:o&&o.baseUrl||"",pathname:r,search:e,hash:t,routes:a,route:c||a.length&&a[a.length-1]||null,params:i,redirectFrom:s,getUrl:(l={})=>ee(S.pathToRegexp.compile(rr(a))(Object.assign({},i,l)),o)}}function Bt(r,e){const t=Object.assign({},r.params);return{redirect:{pathname:e,from:r.pathname,params:t}}}function rn(r,e){e.location=A(r);const t=r.chain.map(n=>n.route).indexOf(r.route);return r.chain[t].element=e,e}function Y(r,e,t){if(B(r))return r.apply(t,e)}function Tt(r,e,t){return n=>{if(n&&(n.cancel||n.redirect))return n;if(t)return Y(t[r],e,t)}}function nn(r,e){if(!Array.isArray(r)&&!se(r))throw new Error(P(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${r}`));e.__children=[];const t=re(r);for(let n=0;n<t.length;n++)Zt(t[n]),e.__children.push(t[n])}function J(r){if(r&&r.length){const e=r[0].parentNode;for(let t=0;t<r.length;t++)e.removeChild(r[t])}}function ee(r,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(r.replace(/^\//,""),t).pathname:r}function rr(r){return r.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class S extends K{constructor(e,t){const n=document.head.querySelector("base"),i=n&&n.getAttribute("href");super([],Object.assign({baseUrl:i&&K.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=o=>this.__resolveRoute(o);const s=S.NavigationTrigger;S.setTriggers.apply(S,Object.keys(s).map(o=>s[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=A({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let n=Promise.resolve();B(t.children)&&(n=n.then(()=>t.children(tn(e))).then(s=>{!Me(s)&&!B(t.children)&&(s=t.children),nn(s,t)}));const i={redirect:s=>Bt(e,s),component:s=>{const o=document.createElement(s);return this.__createdByRouter.set(o,!0),o}};return n.then(()=>{if(this.__isLatestRender(e))return Y(t.action,[e,i],t)}).then(s=>{if(Me(s)&&(s instanceof HTMLElement||s.redirect||s===D))return s;if(C(t.redirect))return i.redirect(t.redirect);if(t.bundle)return Or(t.bundle).then(()=>{},()=>{throw new Error(P(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(s=>{if(Me(s))return s;if(C(t.component))return i.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},C(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(i).then(s=>this.__fullyResolveChain(s)).then(s=>{if(this.__isLatestRender(s)){const o=this.__previousContext;if(s===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=A(s),t&&this.__updateBrowserHistory(s,n===1),W("location-changed",{router:this,location:this.location}),s.__skipAttach)return this.__copyUnchangedElements(s,o),this.__previousContext=s,this.location;this.__addAppearingContent(s,o);const c=this.__animateIfNeeded(s);return this.__runOnAfterEnterCallbacks(s),this.__runOnAfterLeaveCallbacks(s,o),c.then(()=>{if(this.__isLatestRender(s))return this.__removeDisappearingContent(),this.__previousContext=s,this.location})}}).catch(s=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(i),J(this.__outlet&&this.__outlet.children),this.location=A(Object.assign(i,{resolver:this})),W("error",Object.assign({router:this,error:s},i)),s}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(n=>{const s=n!==t?n:e,c=ee(rr(n.chain),n.resolver)===n.pathname,a=(l,p=l.route,u)=>l.next(void 0,p,u).then(h=>h===null||h===D?c?l:p.parent!==null?a(l,p.parent,h):h:h);return a(n).then(l=>{if(l===null||l===D)throw qt(s);return l&&l!==D&&l!==n?this.__fullyResolveChain(s,l):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(rn(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(n=>this.__findComponentContextAfterAllRedirects(n)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(P(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${xr(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],i=e.chain;let s=Promise.resolve();const o=()=>({cancel:!0}),c=a=>Bt(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let a=0;a<Math.min(n.length,i.length)&&!(n[a].route!==i[a].route||n[a].path!==i[a].path&&n[a].element!==i[a].element||!this.__isReusableElement(n[a].element,i[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=i.length===n.length&&e.__divergedChainIndex==i.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=i.length-1;a>=0;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},n[a]);for(let a=0;a<i.length;a++)s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:c},i[a]),n[a].element.location=A(e,n[a].route)}else for(let a=n.length-1;a>=e.__divergedChainIndex;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},n[a])}if(!e.__skipAttach)for(let a=0;a<i.length;a++)a<e.__divergedChainIndex?a<n.length&&n[a].element&&(n[a].element.location=A(e,n[a].route)):(s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:c},i[a]),i[a].element&&(i[a].element.location=A(e,i[a].route)));return s.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,n,i){const s=A(t);return e.then(o=>{if(this.__isLatestRender(t))return Tt("onBeforeLeave",[s,n,this],i.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(e,t,n,i){const s=A(t,i.route);return e.then(o=>{if(this.__isLatestRender(t))return Tt("onBeforeEnter",[s,n,this],i.element)(o)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,n){if(t>en)throw new Error(P(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(P(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},i){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const s=i?"replaceState":"pushState";window.history[s](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let i=0;i<e.__divergedChainIndex;i++){const s=t&&t.chain[i].element;if(s)if(s.parentNode===n)e.chain[i].element=s,n=s;else break}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(s=>this.__addedByRouter.get(s)&&s!==e.result);let i=n;for(let s=e.__divergedChainIndex;s<e.chain.length;s++){const o=e.chain[s].element;o&&(i.appendChild(o),this.__addedByRouter.set(o,!0),i===n&&this.__appearingContent.push(o),i=o)}}__removeDisappearingContent(){this.__disappearingContent&&J(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(J(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(!!t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const i=t.chain[n].element;if(!!i)try{const s=A(e);Y(i.onAfterLeave,[s,{},t.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&J(i.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},i=A(e,e.chain[t].route);Y(n.onAfterEnter,[i,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],i=[],s=e.chain;let o;for(let c=s.length;c>0;c--)if(s[c-1].route.animate){o=s[c-1].route.animate;break}if(t&&n&&o){const c=se(o)&&o.leave||"leaving",a=se(o)&&o.enter||"entering";i.push(Rt(t,c)),i.push(Rt(n,a))}return Promise.all(i).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:i}=e?e.detail:window.location;C(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:i},!0))}static setTriggers(...e){Jr(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Qr(this)),ee(this.__urlForName(e,t),this)}urlForPath(e,t){return ee(S.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:i}=C(e)?this.__createUrl(e,"http://a"):e;return W("go",{pathname:t,search:n,hash:i})}}const sn=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,te=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function on(){function r(){return!0}return nr(r)}function an(){try{return ln()?!0:cn()?te?!hn():!on():!1}catch{return!1}}function ln(){return localStorage.getItem("vaadin.developmentmode.force")}function cn(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function hn(){return!!(te&&Object.keys(te).map(e=>te[e]).filter(e=>e.productionMode).length>0)}function nr(r,e){if(typeof r!="function")return;const t=sn.exec(r.toString());if(t)try{r=new Function(t[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return r(e)}window.Vaadin=window.Vaadin||{};const Dt=function(r,e){if(window.Vaadin.developmentMode)return nr(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=an());function pn(){}const un=function(){if(typeof Dt=="function")return Dt(pn)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});un();S.NavigationTrigger={POPSTATE:Br,CLICK:Mr};try{self["workbox:window:6.5.2"]&&_()}catch{}function jt(r,e){return new Promise(function(t){var n=new MessageChannel;n.port1.onmessage=function(i){t(i.data)},r.postMessage(e,[n.port2])})}function dn(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function It(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function fn(r,e){var t;if(typeof Symbol>"u"||r[Symbol.iterator]==null){if(Array.isArray(r)||(t=function(i,s){if(i){if(typeof i=="string")return It(i,s);var o=Object.prototype.toString.call(i).slice(8,-1);return o==="Object"&&i.constructor&&(o=i.constructor.name),o==="Map"||o==="Set"?Array.from(i):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?It(i,s):void 0}}(r))||e&&r&&typeof r.length=="number"){t&&(r=t);var n=0;return function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(t=r[Symbol.iterator]()).next.bind(t)}try{self["workbox:core:6.5.2"]&&_()}catch{}var Re=function(){var r=this;this.promise=new Promise(function(e,t){r.resolve=e,r.reject=t})};function Be(r,e){var t=location.href;return new URL(r,t).href===new URL(e,t).href}var V=function(r,e){this.type=r,Object.assign(this,e)};function X(r,e,t){return t?e?e(r):r:(r&&r.then||(r=Promise.resolve(r)),e?r.then(e):r)}function vn(){}var gn={type:"SKIP_WAITING"};function Ut(r,e){if(!e)return r&&r.then?r.then(vn):Promise.resolve()}var _n=function(r){var e,t;function n(c,a){var l,p;return a===void 0&&(a={}),(l=r.call(this)||this).nn={},l.tn=0,l.rn=new Re,l.en=new Re,l.on=new Re,l.un=0,l.an=new Set,l.cn=function(){var u=l.fn,h=u.installing;l.tn>0||!Be(h.scriptURL,l.sn.toString())||performance.now()>l.un+6e4?(l.vn=h,u.removeEventListener("updatefound",l.cn)):(l.hn=h,l.an.add(h),l.rn.resolve(h)),++l.tn,h.addEventListener("statechange",l.ln)},l.ln=function(u){var h=l.fn,d=u.target,E=d.state,L=d===l.vn,N={sw:d,isExternal:L,originalEvent:u};!L&&l.mn&&(N.isUpdate=!0),l.dispatchEvent(new V(E,N)),E==="installed"?l.wn=self.setTimeout(function(){E==="installed"&&h.waiting===d&&l.dispatchEvent(new V("waiting",N))},200):E==="activating"&&(clearTimeout(l.wn),L||l.en.resolve(d))},l.dn=function(u){var h=l.hn,d=h!==navigator.serviceWorker.controller;l.dispatchEvent(new V("controlling",{isExternal:d,originalEvent:u,sw:h,isUpdate:l.mn})),d||l.on.resolve(h)},l.gn=(p=function(u){var h=u.data,d=u.ports,E=u.source;return X(l.getSW(),function(){l.an.has(E)&&l.dispatchEvent(new V("message",{data:h,originalEvent:u,ports:d,sw:E}))})},function(){for(var u=[],h=0;h<arguments.length;h++)u[h]=arguments[h];try{return Promise.resolve(p.apply(this,u))}catch(d){return Promise.reject(d)}}),l.sn=c,l.nn=a,navigator.serviceWorker.addEventListener("message",l.gn),l}t=r,(e=n).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;var i,s,o=n.prototype;return o.register=function(c){var a=(c===void 0?{}:c).immediate,l=a!==void 0&&a;try{var p=this;return function(u,h){var d=u();return d&&d.then?d.then(h):h(d)}(function(){if(!l&&document.readyState!=="complete")return Ut(new Promise(function(u){return window.addEventListener("load",u)}))},function(){return p.mn=Boolean(navigator.serviceWorker.controller),p.yn=p.pn(),X(p.bn(),function(u){p.fn=u,p.yn&&(p.hn=p.yn,p.en.resolve(p.yn),p.on.resolve(p.yn),p.yn.addEventListener("statechange",p.ln,{once:!0}));var h=p.fn.waiting;return h&&Be(h.scriptURL,p.sn.toString())&&(p.hn=h,Promise.resolve().then(function(){p.dispatchEvent(new V("waiting",{sw:h,wasWaitingBeforeRegister:!0}))}).then(function(){})),p.hn&&(p.rn.resolve(p.hn),p.an.add(p.hn)),p.fn.addEventListener("updatefound",p.cn),navigator.serviceWorker.addEventListener("controllerchange",p.dn),p.fn})})}catch(u){return Promise.reject(u)}},o.update=function(){try{return this.fn?Ut(this.fn.update()):void 0}catch(c){return Promise.reject(c)}},o.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},o.messageSW=function(c){try{return X(this.getSW(),function(a){return jt(a,c)})}catch(a){return Promise.reject(a)}},o.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&jt(this.fn.waiting,gn)},o.pn=function(){var c=navigator.serviceWorker.controller;return c&&Be(c.scriptURL,this.sn.toString())?c:void 0},o.bn=function(){try{var c=this;return function(a,l){try{var p=a()}catch(u){return l(u)}return p&&p.then?p.then(void 0,l):p}(function(){return X(navigator.serviceWorker.register(c.sn,c.nn),function(a){return c.un=performance.now(),a})},function(a){throw a})}catch(a){return Promise.reject(a)}},i=n,(s=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&dn(i.prototype,s),n}(function(){function r(){this.Pn=new Map}var e=r.prototype;return e.addEventListener=function(t,n){this.Sn(t).add(n)},e.removeEventListener=function(t,n){this.Sn(t).delete(n)},e.dispatchEvent=function(t){t.target=this;for(var n,i=fn(this.Sn(t.type));!(n=i()).done;)(0,n.value)(t)},e.Sn=function(t){return this.Pn.has(t)||this.Pn.set(t,new Set),this.Pn.get(t)},r}());function mn(r={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:n,onRegistered:i,onRegisterError:s}=r;let o;const c=async(a=!0)=>{};return"serviceWorker"in navigator&&(o=new _n("/sw.js",{scope:"/",type:"classic"}),o.addEventListener("activated",a=>{a.isUpdate?window.location.reload():n==null||n()}),o.register({immediate:e}).then(a=>{i==null||i(a)}).catch(a=>{s==null||s(a)})),c}var yn=Object.defineProperty,wn=Object.getOwnPropertyDescriptor,bn=(r,e,t,n)=>{for(var i=n>1?void 0:n?wn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&yn(e,t,i),i};let Ht=class extends v{static get styles(){return m`
    .about {
      padding: 0 16px;
    }
    h2 {
      margin: 0;
      padding: 16px 0;
      color: rgba(0, 113, 197, 0.9);
    }
    fluent-card {
      padding: 1rem;
      margin-bottom: 1rem;
      border-radius: 0px;
      box-shadow: none;
      background: rgba(255, 255, 255, 0.5);
    }

    fluent-card:hover {
      background: rgba(255, 255, 255, 0.95);
      color: #000;
    }

    
    fluent-card ul {
      list-style: circle;
      margin-left: -2rem;
    }

    fluent-card ul li {
      display: block;
      list-style: circle;
      margin: 8px auto;
    }

    fluent-card ul li a {
      color: rgba(0, 113, 197, 0.9);
      text-decoration: none;
      border-bottom: 1px dashed rgba(0, 113, 197, 0.6);
    }

    fluent-card ul li a:hover {
      color: rgba(0, 113, 197, 1);
      text-decoration: none;
      border-bottom: 1px dashed rgba(0, 113, 197, 1);
    }

    `}constructor(){super()}render(){return g`
    <app-header ?enableBack="${!1}"></app-header>
    <div class="about">  
      <h2>PWA 及 Fugu API 示例</h2>
      <fluent-card>
        <ul>
          <li>
            🌐 M20
            <a href="/sample/notification" appearance="primary">通知 (Notification)</a>
          </li>
          <li>
            🐡 M63
            <a href="/sample/generic-sensor" appearance="primary">通用传感器 (Generic Sensor)</a>
          </li>
          <li>
            🐡 M76
            <a href="/sample/async-clipboard" appearance="primary">异步剪贴板 (Async Clipboard)</a>
          </li>
          <li>
            🐡 M80
            <a href="/sample/contact-picker" appearance="primary">联系人选取器 (Contact Picker)</a>
          </li>
          <li>
            🐡 M81
            <a href="/sample/badging" appearance="primary">徽章 (Badging)</a>
          </li>
          <li>
            🐡 M83
            <a href="/sample/shape-detection" appearance="primary">形状检测 (Shape Detection)</a>
          </li>
          <li>
            🐡 M84
            <a href="/sample/wake-lock" appearance="primary">屏幕唤醒锁定 (Screen Wake Lock)</a>
          </li>
          <li>
            🐡 M85
              <a href="/sample/app-shortcuts" appearance="primary">
              应用快捷方式 (App Shortcuts)
            </a>
          </li>
          <li>
            🐡 M89
            <a href="/sample/web-share" appearance="primary">
              Web 共享 (Web Share)
            </a>
          </li>
          <li>
            🐡 M89
            <a href="/sample/file-system-access" appearance="primary">
              文件系统访问 (File System Access)
            </a>
          </li>
          <li>
            🌐 M93
            WebCodecs
          </li>
          <li>
            🐡 M95
            <a href="/sample/eyedropper" appearance="primary">
              滴管 (EyeDropper)
            </a>  
          </li>
          <li>
            🐡 M96
            <a href="/sample/url-protocol-handler" appearance="primary">
            URL 协议处理 (URL Protocol Handler)
            </a>
          </li>
          <li>
            🌐 M97
            WebTransport (v.s. WebSockets)
          </li>
          <li>
            🐡 M100
            多屏窗口放置 (Multi-Screen Window Placement)
          </li>
          <li>
            🌐 M102
            <a href="/sample/navigation" appearance="primary">
              导航 (Navigation) (替代 History API)
            </a>
          </li>
          <li>
            🐡 M102
            <a href="/sample/window-controls-overlay" appearance="primary">
              窗口控件覆盖 (Window Controls Overlay)
            </a>
          </li>
          <li>
            🐡 M102
            <a href="/sample/file-handling" appearance="primary">
              文件处理 (File Handling)
            </a>
          </li>
          <li>
            🐡 M102
            <a href="/sample/media-player" appearance="primary">
              文件处理 (File Handling) - 媒体播放器
            </a>
          </li>
          <li>
            🐡 M103
            <a href="/sample/local-font-access" appearance="primary">
              本地字体访问 (Local Font Access)
            </a>
          </li>
          <li>
            🌐 🚧 M104
              共享存储 (Shared Storage)
          </li>       
          <li>
            🐡 🚧 M104
            动态应用快捷方式 (Dynamic App Shortcuts)
          </li>
          <li>
            🌐 🚧
            WebGPU (Origin Trial: 94 to 105)
          </li>
          <li>
            🐡 🚧
            计算压力 (Compute Pressure)
          </li>
          <li>
            🌐 🚧
            Web 神经网络 (WebNN)
          </li>
        </ul>
      </fluent-card>
 
    </div>
    <app-footer></app-footer>
    `}};Ht=bn([y("app-home")],Ht);var $n=Object.defineProperty,En=Object.getOwnPropertyDescriptor,ir=(r,e,t,n)=>{for(var i=n>1?void 0:n?En(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&$n(e,t,i),i};let Ie=class extends v{constructor(){super(),this.enableBack=!1}static get styles(){return m`
     header {
      padding: 8px 16px 4px 16px;
     }

      header svg {
        height: 40px;
        width: 60px;
        display: inline-flex
      }

      .hf {
        align-self: center;
      }

      .share {
        cursor: pointer;
        margin-left: -33px;
      }

      .share svg {
        width: 24px;
        height: 24px;
        fill: rgba(0,113,197, 0.9);
      }

      .share:hover svg {
        fill: rgba(0,113,197, 1);
      }

      .hf svg {
        fill: rgba(0,113,197, 0.9);
      }

      .hf:hover svg {
        fill: rgba(0,113,197, 1);
      }

      tx {
        background-image: linear-gradient(45deg, #5d5da9 25%, #d806f9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      #back-button-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .back svg {
        margin-left: -14px;
        width: 18px;
        height: 18px;
        fill: rgba(0,113,197, 0.9);
      }

      .back:hover svg {
        margin-left: -14px;
        width: 18px;
        height: 18px;
        fill: rgba(0,113,197, 1);
      }

      @media(prefers-color-scheme: light) {
      }
    `}updated(r){r.has("enableBack")&&console.log("enableBack",this.enableBack)}share(){navigator.share&&navigator.share({title:"\u4E2D\u56FD PWA \u5F00\u53D1\u8005\u65E5\u793A\u4F8B",text:"\u4E2D\u56FD PWA \u5F00\u53D1\u8005\u65E5\u793A\u4F8B",url:"https://demos.pwadev.io"})}render(){return g`
      <header>
        <div id="back-button-block">
          ${this.enableBack?g`<fluent-anchor class="back" appearance="primary" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/></svg>
          </fluent-anchor>`:null}
          <div class="hf">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1952" height="734.935" baseProfile="full" enable-background="new 0 0 1952 734.93" version="1.1" viewBox="0 0 1952 734.93" xml:space="preserve"><g><path fill="#3D3D3D" fill-opacity="1" stroke-linejoin="round" stroke-width=".2" d="M 1436.62,603.304L 1493.01,460.705L 1655.83,460.705L 1578.56,244.39L 1675.2,0.000528336L 1952,734.933L 1747.87,734.933L 1700.57,603.304L 1436.62,603.304 Z"/><path fill="#5A0FC8" fill-opacity="1" stroke-linejoin="round" stroke-width=".2" d="M 1262.47,734.935L 1558.79,0.00156593L 1362.34,0.0025425L 1159.64,474.933L 1015.5,0.00351906L 864.499,0.00351906L 709.731,474.933L 600.585,258.517L 501.812,562.819L 602.096,734.935L 795.427,734.935L 935.284,309.025L 1068.63,734.935L 1262.47,734.935 Z"/><path fill="#3D3D3D" fill-opacity="1" stroke-linejoin="round" stroke-width=".2" d="M 186.476,482.643L 307.479,482.643C 344.133,482.643 376.772,478.552 405.396,470.37L 436.689,373.962L 524.148,104.516C 517.484,93.9535 509.876,83.9667 501.324,74.5569C 456.419,24.852 390.719,0.000406265 304.222,0.000406265L -3.8147e-006,0.000406265L -3.8147e-006,734.933L 186.476,734.933L 186.476,482.643 Z M 346.642,169.079C 364.182,186.732 372.951,210.355 372.951,239.95C 372.951,269.772 365.238,293.424 349.813,310.906C 332.903,330.331 301.766,340.043 256.404,340.043L 186.476,340.043L 186.476,142.598L 256.918,142.598C 299.195,142.598 329.103,151.425 346.642,169.079 Z"/></g></svg> -->
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1952" height="734.935" baseProfile="full" enable-background="new 0 0 1952 734.93" version="1.1" viewBox="0 0 1952 734.93" xml:space="preserve"><g><path fill-opacity="1" stroke-linejoin="round" stroke-width=".2" d="M 1436.62,603.304L 1493.01,460.705L 1655.83,460.705L 1578.56,244.39L 1675.2,0.000528336L 1952,734.933L 1747.87,734.933L 1700.57,603.304L 1436.62,603.304 Z"/><path fill-opacity="1" stroke-linejoin="round" stroke-width=".2" d="M 1262.47,734.935L 1558.79,0.00156593L 1362.34,0.0025425L 1159.64,474.933L 1015.5,0.00351906L 864.499,0.00351906L 709.731,474.933L 600.585,258.517L 501.812,562.819L 602.096,734.935L 795.427,734.935L 935.284,309.025L 1068.63,734.935L 1262.47,734.935 Z"/><path fill-opacity="1" stroke-linejoin="round" stroke-width=".2" d="M 186.476,482.643L 307.479,482.643C 344.133,482.643 376.772,478.552 405.396,470.37L 436.689,373.962L 524.148,104.516C 517.484,93.9535 509.876,83.9667 501.324,74.5569C 456.419,24.852 390.719,0.000406265 304.222,0.000406265L -3.8147e-006,0.000406265L -3.8147e-006,734.933L 186.476,734.933L 186.476,482.643 Z M 346.642,169.079C 364.182,186.732 372.951,210.355 372.951,239.95C 372.951,269.772 365.238,293.424 349.813,310.906C 332.903,330.331 301.766,340.043 256.404,340.043L 186.476,340.043L 186.476,142.598L 256.918,142.598C 299.195,142.598 329.103,151.425 346.642,169.079 Z"/></g></svg>
          </div>
          <div class="hf">
            <a class="share" @click="${this.share}" title="分享 中国 PWA 开发者日">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 127.1C448 181 405 223.1 352 223.1C326.1 223.1 302.6 213.8 285.4 197.1L191.3 244.1C191.8 248 191.1 251.1 191.1 256C191.1 260 191.8 263.1 191.3 267.9L285.4 314.9C302.6 298.2 326.1 288 352 288C405 288 448 330.1 448 384C448 437 405 480 352 480C298.1 480 256 437 256 384C256 379.1 256.2 376 256.7 372.1L162.6 325.1C145.4 341.8 121.9 352 96 352C42.98 352 0 309 0 256C0 202.1 42.98 160 96 160C121.9 160 145.4 170.2 162.6 186.9L256.7 139.9C256.2 135.1 256 132 256 128C256 74.98 298.1 32 352 32C405 32 448 74.98 448 128L448 127.1zM95.1 287.1C113.7 287.1 127.1 273.7 127.1 255.1C127.1 238.3 113.7 223.1 95.1 223.1C78.33 223.1 63.1 238.3 63.1 255.1C63.1 273.7 78.33 287.1 95.1 287.1zM352 95.1C334.3 95.1 320 110.3 320 127.1C320 145.7 334.3 159.1 352 159.1C369.7 159.1 384 145.7 384 127.1C384 110.3 369.7 95.1 352 95.1zM352 416C369.7 416 384 401.7 384 384C384 366.3 369.7 352 352 352C334.3 352 320 366.3 320 384C320 401.7 334.3 416 352 416z"/></svg>
            </a>
          </div>
        </div>
      </header>
    `}};ir([f({type:Boolean})],Ie.prototype,"enableBack",2);Ie=ir([y("app-header")],Ie);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const An={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Cn=r=>(...e)=>({_$litDirective$:r,values:e});class Pn{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ue extends Pn{constructor(e){if(super(e),this.it=b,e.type!==An.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===b||e==null)return this.ft=void 0,this.it=e;if(e===R)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Ue.directiveName="unsafeHTML",Ue.resultType=1;const $=Cn(Ue);var Ln=Object.defineProperty,xn=Object.getOwnPropertyDescriptor,Ve=(r,e,t,n)=>{for(var i=n>1?void 0:n?xn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Ln(e,t,i),i};let oe=class extends v{constructor(){super(),this.enableBack=!1,this.svg=`
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1952" height="734.935" baseProfile="full" enable-background="new 0 0 1952 734.93" version="1.1" viewBox="0 0 1952 734.93" xml:space="preserve">
    <g>
      <path id="p1" fill-opacity="1" stroke-linejoin="round" stroke-width=".2" d="M 1436.62,603.304L 1493.01,460.705L 1655.83,460.705L 1578.56,244.39L 1675.2,0.000528336L 1952,734.933L 1747.87,734.933L 1700.57,603.304L 1436.62,603.304 Z"/>
      <path fill-opacity="1" stroke-linejoin="round" stroke-width=".2" d="M 1262.47,734.935L 1558.79,0.00156593L 1362.34,0.0025425L 1159.64,474.933L 1015.5,0.00351906L 864.499,0.00351906L 709.731,474.933L 600.585,258.517L 501.812,562.819L 602.096,734.935L 795.427,734.935L 935.284,309.025L 1068.63,734.935L 1262.47,734.935 Z"/>
      <path fill-opacity="1" stroke-linejoin="round" stroke-width=".2" d="M 186.476,482.643L 307.479,482.643C 344.133,482.643 376.772,478.552 405.396,470.37L 436.689,373.962L 524.148,104.516C 517.484,93.9535 509.876,83.9667 501.324,74.5569C 456.419,24.852 390.719,0.000406265 304.222,0.000406265L -3.8147e-006,0.000406265L -3.8147e-006,734.933L 186.476,734.933L 186.476,482.643 Z M 346.642,169.079C 364.182,186.732 372.951,210.355 372.951,239.95C 372.951,269.772 365.238,293.424 349.813,310.906C 332.903,330.331 301.766,340.043 256.404,340.043L 186.476,340.043L 186.476,142.598L 256.918,142.598C 299.195,142.598 329.103,151.425 346.642,169.079 Z"/>
    </g>
  </svg>
  `}static get styles(){return m`
     svg {
      max-height: 64px; 
      max-width: 98px; 
      margin-bottom: -18px;
      display: inline-block;
     }

     svg path {
      fill: rgba(0, 113, 197, 0.9);
     }
    }

    `}render(){return g`
    ${$(this.svg)}
    `}};Ve([f({type:Boolean})],oe.prototype,"enableBack",2);Ve([f({type:String})],oe.prototype,"svg",2);oe=Ve([y("pwa-logo")],oe);var On=Object.defineProperty,Sn=Object.getOwnPropertyDescriptor,We=(r,e,t,n)=>{for(var i=n>1?void 0:n?Sn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&On(e,t,i),i};let ae=class extends v{constructor(){super(),this.enableBack=!1,this.svg=`
    <svg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' version='1.1' overflow='visible' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 72 48.139'>
    <g shape-rendering='geometricPrecision' text-rendering='geometricPrecision' image-rendering='optimizeQuality'>
      <g shape-rendering='geometricPrecision' text-rendering='geometricPrecision' image-rendering='optimizeQuality'>
        <g id='Background'>
        </g>
        <g id='Guides'>
        </g>
        <g id='Foreground'>
          <rect fill-rule='evenodd' width='72' fill='transparent' clip-rule='evenodd' height='48'/>
          <rect width='71.861' fill-rule='evenodd' clip-rule='evenodd' height='1.108'/>
          <rect y='47.03' width='71.861' fill-rule='evenodd' clip-rule='evenodd' height='1.108'/>
          <g>
            <path d='M20.149,8.815l5.759,19.58l5.759-19.58h4.17H47.28v1.946l-5.878,10.127    c2.065,0.663,3.627,1.868,4.686,3.615c1.059,1.747,1.589,3.799,1.589,6.155c0,2.913-0.774,5.362-2.323,7.348    s-3.555,2.978-6.017,2.978c-1.854,0-3.469-0.589-4.845-1.767c-1.377-1.178-2.396-2.773-3.058-4.786l3.256-1.35    c0.477,1.218,1.106,2.178,1.887,2.879c0.781,0.702,1.701,1.052,2.76,1.052c1.112,0,2.052-0.622,2.82-1.866    c0.768-1.245,1.152-2.74,1.152-4.488c0-1.933-0.411-3.429-1.231-4.488c-0.954-1.244-2.45-1.866-4.489-1.866h-1.588v-1.906    l5.561-9.612h-6.712l-0.382,0.65l-8.163,27.548h-0.397L19.95,21.048l-5.958,19.937h-0.397L4.064,8.815h4.17l5.759,19.58    l3.893-13.185l-1.906-6.395H20.149z' fill='#005A9C'/>
          </g>
          <path clip-rule='evenodd' d='M68.952,8.815c-0.819,0-1.554,0.295-2.111,0.861   c-0.591,0.6-0.92,1.376-0.92,2.178c0,0.802,0.313,1.545,0.887,2.128c0.583,0.591,1.334,0.912,2.145,0.912   c0.793,0,1.562-0.321,2.161-0.903C71.688,13.434,72,12.69,72,11.854c0-0.811-0.321-1.57-0.878-2.136   C70.539,9.127,69.779,8.815,68.952,8.815z M71.595,11.88c0,0.701-0.271,1.351-0.769,1.832c-0.523,0.507-1.173,0.777-1.891,0.777   c-0.675,0-1.342-0.278-1.84-0.785c-0.498-0.506-0.777-1.157-0.777-1.849s0.287-1.368,0.802-1.891   c0.481-0.49,1.131-0.751,1.84-0.751c0.726,0,1.376,0.271,1.883,0.785C71.333,10.487,71.595,11.146,71.595,11.88z M69.037,10.073   h-1.3v3.445h0.65v-1.469h0.642l0.701,1.469h0.726l-0.769-1.571c0.498-0.101,0.785-0.439,0.785-0.928   C70.472,10.394,69.999,10.073,69.037,10.073z M68.918,10.495c0.608,0,0.886,0.169,0.886,0.591c0,0.405-0.278,0.549-0.87,0.549   h-0.549v-1.14H68.918z' fill-rule='evenodd'/>
        </g>
        <g id='Calque_1'>
          <g>
            <path d='M63.839,8.634l0.676,4.107l-2.391,4.575c0,0-0.918-1.941-2.443-3.015c-1.285-0.905-2.122-1.102-3.431-0.832    c-1.681,0.347-3.587,2.357-4.419,4.835c-0.995,2.965-1.005,4.4-1.04,5.718c-0.056,2.113,0.277,3.362,0.277,3.362    s-1.451-2.686-1.438-6.62c0.009-2.808,0.451-5.354,1.75-7.867c1.143-2.209,2.842-3.535,4.35-3.691    c1.559-0.161,2.791,0.59,3.743,1.404c0.999,0.854,2.01,2.72,2.01,2.72L63.839,8.634z'/>
            <path d='M64.134,31.872c0,0-1.057,1.889-1.715,2.617c-0.659,0.728-1.837,2.01-3.292,2.651c-1.456,0.641-2.218,0.762-3.656,0.624    c-1.437-0.138-2.773-0.97-3.241-1.317s-1.664-1.369-2.339-2.322c-0.676-0.954-1.733-2.859-1.733-2.859s0.589,1.911,0.958,2.721    c0.212,0.466,0.864,1.894,1.79,3.136c0.862,1.159,2.539,3.154,5.086,3.604c2.547,0.451,4.297-0.693,4.73-0.971    c0.433-0.277,1.346-1.041,1.924-1.659c0.603-0.645,1.174-1.468,1.49-1.962c0.231-0.36,0.607-1.092,0.607-1.092L64.134,31.872z'/>
          </g>
        </g>
      </g>
    </g>
  </svg>`}static get styles(){return m`
     svg {
      max-height: 18px; 
      display: inline-block;
      margin-bottom: -5px;
     }
     svg path {
     }
    `}render(){return g`
    ${$(this.svg)}
    `}};We([f({type:Boolean})],ae.prototype,"enableBack",2);We([f({type:String})],ae.prototype,"svg",2);ae=We([y("icon-w3c")],ae);var Mn=Object.defineProperty,Rn=Object.getOwnPropertyDescriptor,Fe=(r,e,t,n)=>{for(var i=n>1?void 0:n?Rn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Mn(e,t,i),i};let le=class extends v{constructor(){super(),this.enableBack=!1,this.svg=`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"/>
  </svg>
  `}static get styles(){return m`
     svg {
      max-height: 18px; 
      display: inline-block;
      margin-bottom: -3px;
     }
     svg path {
      fill: rgba(255, 255, 255, 0.9);
     }
    `}render(){return g`
    ${$(this.svg)}
    `}};Fe([f({type:Boolean})],le.prototype,"enableBack",2);Fe([f({type:String})],le.prototype,"svg",2);le=Fe([y("icon-link")],le);var Bn=Object.defineProperty,Tn=Object.getOwnPropertyDescriptor,Ze=(r,e,t,n)=>{for(var i=n>1?void 0:n?Tn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Bn(e,t,i),i};let ce=class extends v{constructor(){super(),this.enableBack=!1,this.svg=`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
  </svg>
  `}static get styles(){return m`
     svg {
      max-height: 18px; 
      display: inline-block;
      margin-bottom: -3px;
     }
    `}render(){return g`
    ${$(this.svg)}
    `}};Ze([f({type:Boolean})],ce.prototype,"enableBack",2);Ze([f({type:String})],ce.prototype,"svg",2);ce=Ze([y("icon-mac")],ce);var Dn=Object.defineProperty,jn=Object.getOwnPropertyDescriptor,qe=(r,e,t,n)=>{for(var i=n>1?void 0:n?jn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Dn(e,t,i),i};let he=class extends v{constructor(){super(),this.enableBack=!1,this.svg=`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/>
  </svg>
  `}static get styles(){return m`
     svg {
      max-height: 18px; 
      display: inline-block;
      margin-bottom: -3px;
     }
    `}render(){return g`
    ${$(this.svg)}
    `}};qe([f({type:Boolean})],he.prototype,"enableBack",2);qe([f({type:String})],he.prototype,"svg",2);he=qe([y("icon-win")],he);var In=Object.defineProperty,Un=Object.getOwnPropertyDescriptor,Ke=(r,e,t,n)=>{for(var i=n>1?void 0:n?Un(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&In(e,t,i),i};let pe=class extends v{constructor(){super(),this.enableBack=!1,this.svg=`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.6.2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5.1-1.3.6-3.4 1.5-3.2 2.9.1 1 1.8 1.5 2.8 1.4zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7.1 234.8 0 132.4-.2 158 103.4 156.9 135.2c-1.7 23.4-6.4 41.8-22.5 64.7-18.9 22.5-45.5 58.8-58.1 96.7-6 17.9-8.8 36.1-6.2 53.3-6.5 5.8-11.4 14.7-16.6 20.2-4.2 4.3-10.3 5.9-17 8.3s-14 6-18.5 14.5c-2.1 3.9-2.8 8.1-2.8 12.4 0 3.9.6 7.9 1.2 11.8 1.2 8.1 2.5 15.7.8 20.8-5.2 14.4-5.9 24.4-2.2 31.7 3.8 7.3 11.4 10.5 20.1 12.3 17.3 3.6 40.8 2.7 59.3 12.5 19.8 10.4 39.9 14.1 55.9 10.4 11.6-2.6 21.1-9.6 25.9-20.2 12.5-.1 26.3-5.4 48.3-6.6 14.9-1.2 33.6 5.3 55.1 4.1.6 2.3 1.4 4.6 2.5 6.7v.1c8.3 16.7 23.8 24.3 40.3 23 16.6-1.3 34.1-11 48.3-27.9 13.6-16.4 36-23.2 50.9-32.2 7.4-4.5 13.4-10.1 13.9-18.3.4-8.2-4.4-17.3-15.5-29.7zM223.7 87.3c9.8-22.2 34.2-21.8 44-.4 6.5 14.2 3.6 30.9-4.3 40.4-1.6-.8-5.9-2.6-12.6-4.9 1.1-1.2 3.1-2.7 3.9-4.6 4.8-11.8-.2-27-9.1-27.3-7.3-.5-13.9 10.8-11.8 23-4.1-2-9.4-3.5-13-4.4-1-6.9-.3-14.6 2.9-21.8zM183 75.8c10.1 0 20.8 14.2 19.1 33.5-3.5 1-7.1 2.5-10.2 4.6 1.2-8.9-3.3-20.1-9.6-19.6-8.4.7-9.8 21.2-1.8 28.1 1 .8 1.9-.2-5.9 5.5-15.6-14.6-10.5-52.1 8.4-52.1zm-13.6 60.7c6.2-4.6 13.6-10 14.1-10.5 4.7-4.4 13.5-14.2 27.9-14.2 7.1 0 15.6 2.3 25.9 8.9 6.3 4.1 11.3 4.4 22.6 9.3 8.4 3.5 13.7 9.7 10.5 18.2-2.6 7.1-11 14.4-22.7 18.1-11.1 3.6-19.8 16-38.2 14.9-3.9-.2-7-1-9.6-2.1-8-3.5-12.2-10.4-20-15-8.6-4.8-13.2-10.4-14.7-15.3-1.4-4.9 0-9 4.2-12.3zm3.3 334c-2.7 35.1-43.9 34.4-75.3 18-29.9-15.8-68.6-6.5-76.5-21.9-2.4-4.7-2.4-12.7 2.6-26.4v-.2c2.4-7.6.6-16-.6-23.9-1.2-7.8-1.8-15 .9-20 3.5-6.7 8.5-9.1 14.8-11.3 10.3-3.7 11.8-3.4 19.6-9.9 5.5-5.7 9.5-12.9 14.3-18 5.1-5.5 10-8.1 17.7-6.9 8.1 1.2 15.1 6.8 21.9 16l19.6 35.6c9.5 19.9 43.1 48.4 41 68.9zm-1.4-25.9c-4.1-6.6-9.6-13.6-14.4-19.6 7.1 0 14.2-2.2 16.7-8.9 2.3-6.2 0-14.9-7.4-24.9-13.5-18.2-38.3-32.5-38.3-32.5-13.5-8.4-21.1-18.7-24.6-29.9s-3-23.3-.3-35.2c5.2-22.9 18.6-45.2 27.2-59.2 2.3-1.7.8 3.2-8.7 20.8-8.5 16.1-24.4 53.3-2.6 82.4.6-20.7 5.5-41.8 13.8-61.5 12-27.4 37.3-74.9 39.3-112.7 1.1.8 4.6 3.2 6.2 4.1 4.6 2.7 8.1 6.7 12.6 10.3 12.4 10 28.5 9.2 42.4 1.2 6.2-3.5 11.2-7.5 15.9-9 9.9-3.1 17.8-8.6 22.3-15 7.7 30.4 25.7 74.3 37.2 95.7 6.1 11.4 18.3 35.5 23.6 64.6 3.3-.1 7 .4 10.9 1.4 13.8-35.7-11.7-74.2-23.3-84.9-4.7-4.6-4.9-6.6-2.6-6.5 12.6 11.2 29.2 33.7 35.2 59 2.8 11.6 3.3 23.7.4 35.7 16.4 6.8 35.9 17.9 30.7 34.8-2.2-.1-3.2 0-4.2 0 3.2-10.1-3.9-17.6-22.8-26.1-19.6-8.6-36-8.6-38.3 12.5-12.1 4.2-18.3 14.7-21.4 27.3-2.8 11.2-3.6 24.7-4.4 39.9-.5 7.7-3.6 18-6.8 29-32.1 22.9-76.7 32.9-114.3 7.2zm257.4-11.5c-.9 16.8-41.2 19.9-63.2 46.5-13.2 15.7-29.4 24.4-43.6 25.5s-26.5-4.8-33.7-19.3c-4.7-11.1-2.4-23.1 1.1-36.3 3.7-14.2 9.2-28.8 9.9-40.6.8-15.2 1.7-28.5 4.2-38.7 2.6-10.3 6.6-17.2 13.7-21.1.3-.2.7-.3 1-.5.8 13.2 7.3 26.6 18.8 29.5 12.6 3.3 30.7-7.5 38.4-16.3 9-.3 15.7-.9 22.6 5.1 9.9 8.5 7.1 30.3 17.1 41.6 10.6 11.6 14 19.5 13.7 24.6zM173.3 148.7c2 1.9 4.7 4.5 8 7.1 6.6 5.2 15.8 10.6 27.3 10.6 11.6 0 22.5-5.9 31.8-10.8 4.9-2.6 10.9-7 14.8-10.4s5.9-6.3 3.1-6.6-2.6 2.6-6 5.1c-4.4 3.2-9.7 7.4-13.9 9.8-7.4 4.2-19.5 10.2-29.9 10.2s-18.7-4.8-24.9-9.7c-3.1-2.5-5.7-5-7.7-6.9-1.5-1.4-1.9-4.6-4.3-4.9-1.4-.1-1.8 3.7 1.7 6.5z"/>
  </svg>
  `}static get styles(){return m`
     svg {
      max-height: 18px; 
      display: inline-block;
      margin-bottom: -3px;
     }
    `}render(){return g`
    ${$(this.svg)}
    `}};Ke([f({type:Boolean})],pe.prototype,"enableBack",2);Ke([f({type:String})],pe.prototype,"svg",2);pe=Ke([y("icon-lin")],pe);var Hn=Object.defineProperty,kn=Object.getOwnPropertyDescriptor,Ge=(r,e,t,n)=>{for(var i=n>1?void 0:n?kn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Hn(e,t,i),i};let ue=class extends v{constructor(){super(),this.enableBack=!1,this.svg=`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
    <path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"/>
  </svg>
  `}static get styles(){return m`
     svg {
      max-height: 18px; 
      display: inline-block;
      margin-bottom: -3px;
     }
    `}render(){return g`
    ${$(this.svg)}
    `}};Ge([f({type:Boolean})],ue.prototype,"enableBack",2);Ge([f({type:String})],ue.prototype,"svg",2);ue=Ge([y("icon-and")],ue);var Nn=Object.defineProperty,zn=Object.getOwnPropertyDescriptor,Qe=(r,e,t,n)=>{for(var i=n>1?void 0:n?zn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Nn(e,t,i),i};let de=class extends v{constructor(){super(),this.enableBack=!1,this.svg=`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
  </svg>
  `}static get styles(){return m`
     svg {
      max-height: 18px; 
      display: inline-block;
      margin-bottom: -3px;
     }
    `}render(){return g`
    ${$(this.svg)}
    `}};Qe([f({type:Boolean})],de.prototype,"enableBack",2);Qe([f({type:String})],de.prototype,"svg",2);de=Qe([y("icon-ios")],de);var Vn=Object.defineProperty,Wn=Object.getOwnPropertyDescriptor,Je=(r,e,t,n)=>{for(var i=n>1?void 0:n?Wn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Vn(e,t,i),i};let fe=class extends v{constructor(){super(),this.enableBack=!1,this.svg=`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
    <path d="M528 0h-480C21.5 0 0 21.5 0 48v320C0 394.5 21.5 416 48 416h192L224 464H152C138.8 464 128 474.8 128 488S138.8 512 152 512h272c13.25 0 24-10.75 24-24s-10.75-24-24-24H352L336 416h192c26.5 0 48-21.5 48-48v-320C576 21.5 554.5 0 528 0zM512 288H64V64h448V288z"/>
  </svg>
  `}static get styles(){return m`
     svg {
      max-height: 18px; 
      display: inline-block;
      margin-bottom: -3px;
     }
    `}render(){return g`
    ${$(this.svg)}
    `}};Je([f({type:Boolean})],fe.prototype,"enableBack",2);Je([f({type:String})],fe.prototype,"svg",2);fe=Je([y("icon-des")],fe);var Fn=Object.defineProperty,Zn=Object.getOwnPropertyDescriptor,Xe=(r,e,t,n)=>{for(var i=n>1?void 0:n?Zn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Fn(e,t,i),i};let ve=class extends v{constructor(){super(),this.enableBack=!1,this.svg=`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path d="M304 0h-224c-35.35 0-64 28.65-64 64v384c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C368 28.65 339.3 0 304 0zM192 480c-17.75 0-32-14.25-32-32s14.25-32 32-32s32 14.25 32 32S209.8 480 192 480zM304 64v320h-224V64H304z"/>
  </svg>
  `}static get styles(){return m`
     svg {
      max-height: 18px; 
      display: inline-block;
      margin-bottom: -3px;
     }
    `}render(){return g`
    ${$(this.svg)}
    `}};Xe([f({type:Boolean})],ve.prototype,"enableBack",2);Xe([f({type:String})],ve.prototype,"svg",2);ve=Xe([y("icon-mob")],ve);var qn=Object.defineProperty,Kn=Object.getOwnPropertyDescriptor,Ye=(r,e,t,n)=>{for(var i=n>1?void 0:n?Kn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&qn(e,t,i),i};let ge=class extends v{constructor(){super(),this.enableBack=!1,this.svg=`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
    <path d="M131.5 217.5L55.1 100.1c47.6-59.2 119-91.8 192-92.1 42.3-.3 85.5 10.5 124.8 33.2 43.4 25.2 76.4 61.4 97.4 103L264 133.4c-58.1-3.4-113.4 29.3-132.5 84.1zm32.9 38.5c0 46.2 37.4 83.6 83.6 83.6s83.6-37.4 83.6-83.6-37.4-83.6-83.6-83.6-83.6 37.3-83.6 83.6zm314.9-89.2L339.6 174c37.9 44.3 38.5 108.2 6.6 157.2L234.1 503.6c46.5 2.5 94.4-7.7 137.8-32.9 107.4-62 150.9-192 107.4-303.9zM133.7 303.6L40.4 120.1C14.9 159.1 0 205.9 0 256c0 124 90.8 226.7 209.5 244.9l63.7-124.8c-57.6 10.8-113.2-20.8-139.5-72.5z"/>
  </svg>
  `}static get styles(){return m`
     svg {
      max-height: 18px; 
      display: inline-block;
      margin-bottom: -3px;
     }
    `}render(){return g`
    ${$(this.svg)}
    `}};Ye([f({type:Boolean})],ge.prototype,"enableBack",2);Ye([f({type:String})],ge.prototype,"svg",2);ge=Ye([y("icon-chr")],ge);var Gn=Object.defineProperty,Qn=Object.getOwnPropertyDescriptor,et=(r,e,t,n)=>{for(var i=n>1?void 0:n?Qn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Gn(e,t,i),i};let _e=class extends v{constructor(){super(),this.enableBack=!1,this.svg=`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M274.69,274.69l-37.38-37.38L166,346ZM256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8ZM411.85,182.79l14.78-6.13A8,8,0,0,1,437.08,181h0a8,8,0,0,1-4.33,10.46L418,197.57a8,8,0,0,1-10.45-4.33h0A8,8,0,0,1,411.85,182.79ZM314.43,94l6.12-14.78A8,8,0,0,1,331,74.92h0a8,8,0,0,1,4.33,10.45l-6.13,14.78a8,8,0,0,1-10.45,4.33h0A8,8,0,0,1,314.43,94ZM256,60h0a8,8,0,0,1,8,8V84a8,8,0,0,1-8,8h0a8,8,0,0,1-8-8V68A8,8,0,0,1,256,60ZM181,74.92a8,8,0,0,1,10.46,4.33L197.57,94a8,8,0,1,1-14.78,6.12l-6.13-14.78A8,8,0,0,1,181,74.92Zm-63.58,42.49h0a8,8,0,0,1,11.31,0L140,128.72A8,8,0,0,1,140,140h0a8,8,0,0,1-11.31,0l-11.31-11.31A8,8,0,0,1,117.41,117.41ZM60,256h0a8,8,0,0,1,8-8H84a8,8,0,0,1,8,8h0a8,8,0,0,1-8,8H68A8,8,0,0,1,60,256Zm40.15,73.21-14.78,6.13A8,8,0,0,1,74.92,331h0a8,8,0,0,1,4.33-10.46L94,314.43a8,8,0,0,1,10.45,4.33h0A8,8,0,0,1,100.15,329.21Zm4.33-136h0A8,8,0,0,1,94,197.57l-14.78-6.12A8,8,0,0,1,74.92,181h0a8,8,0,0,1,10.45-4.33l14.78,6.13A8,8,0,0,1,104.48,193.24ZM197.57,418l-6.12,14.78a8,8,0,0,1-14.79-6.12l6.13-14.78A8,8,0,1,1,197.57,418ZM264,444a8,8,0,0,1-8,8h0a8,8,0,0,1-8-8V428a8,8,0,0,1,8-8h0a8,8,0,0,1,8,8Zm67-6.92h0a8,8,0,0,1-10.46-4.33L314.43,418a8,8,0,0,1,4.33-10.45h0a8,8,0,0,1,10.45,4.33l6.13,14.78A8,8,0,0,1,331,437.08Zm63.58-42.49h0a8,8,0,0,1-11.31,0L372,383.28A8,8,0,0,1,372,372h0a8,8,0,0,1,11.31,0l11.31,11.31A8,8,0,0,1,394.59,394.59ZM286.25,286.25,110.34,401.66,225.75,225.75,401.66,110.34ZM437.08,331h0a8,8,0,0,1-10.45,4.33l-14.78-6.13a8,8,0,0,1-4.33-10.45h0A8,8,0,0,1,418,314.43l14.78,6.12A8,8,0,0,1,437.08,331ZM444,264H428a8,8,0,0,1-8-8h0a8,8,0,0,1,8-8h16a8,8,0,0,1,8,8h0A8,8,0,0,1,444,264Z"/>
  </svg>
  `}static get styles(){return m`
     svg {
      max-height: 18px; 
      display: inline-block;
      margin-bottom: -3px;
     }
    `}render(){return g`
    ${$(this.svg)}
    `}};et([f({type:Boolean})],_e.prototype,"enableBack",2);et([f({type:String})],_e.prototype,"svg",2);_e=et([y("icon-saf")],_e);var Jn=Object.defineProperty,Xn=Object.getOwnPropertyDescriptor,tt=(r,e,t,n)=>{for(var i=n>1?void 0:n?Xn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Jn(e,t,i),i};let me=class extends v{constructor(){super(),this.enableBack=!1,this.svg=`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M481.92,134.48C440.87,54.18,352.26,8,255.91,8,137.05,8,37.51,91.68,13.47,203.66c26-46.49,86.22-79.14,149.46-79.14,79.27,0,121.09,48.93,122.25,50.18,22,23.8,33,50.39,33,83.1,0,10.4-5.31,25.82-15.11,38.57-1.57,2-6.39,4.84-6.39,11,0,5.06,3.29,9.92,9.14,14,27.86,19.37,80.37,16.81,80.51,16.81A115.39,115.39,0,0,0,444.94,322a118.92,118.92,0,0,0,58.95-102.44C504.39,176.13,488.39,147.26,481.92,134.48ZM212.77,475.67a154.88,154.88,0,0,1-46.64-45c-32.94-47.42-34.24-95.6-20.1-136A155.5,155.5,0,0,1,203,215.75c59-45.2,94.84-5.65,99.06-1a80,80,0,0,0-4.89-10.14c-9.24-15.93-24-36.41-56.56-53.51-33.72-17.69-70.59-18.59-77.64-18.59-38.71,0-77.9,13-107.53,35.69C35.68,183.3,12.77,208.72,8.6,243c-1.08,12.31-2.75,62.8,23,118.27a248,248,0,0,0,248.3,141.61C241.78,496.26,214.05,476.24,212.77,475.67Zm250.72-98.33a7.76,7.76,0,0,0-7.92-.23,181.66,181.66,0,0,1-20.41,9.12,197.54,197.54,0,0,1-69.55,12.52c-91.67,0-171.52-63.06-171.52-144A61.12,61.12,0,0,1,200.61,228,168.72,168.72,0,0,0,161.85,278c-14.92,29.37-33,88.13,13.33,151.66,6.51,8.91,23,30,56,47.67,23.57,12.65,49,19.61,71.7,19.61,35.14,0,115.43-33.44,163-108.87A7.75,7.75,0,0,0,463.49,377.34Z"/>
  </svg>
  `}static get styles(){return m`
     svg {
      max-height: 18px; 
      display: inline-block;
      margin-bottom: -3px;
     }
    `}render(){return g`
    ${$(this.svg)}
    `}};tt([f({type:Boolean})],me.prototype,"enableBack",2);tt([f({type:String})],me.prototype,"svg",2);me=tt([y("icon-edg")],me);var Yn=Object.defineProperty,ei=Object.getOwnPropertyDescriptor,rt=(r,e,t,n)=>{for(var i=n>1?void 0:n?ei(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Yn(e,t,i),i};let ye=class extends v{constructor(){super(),this.enableBack=!1,this.svg=`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M130.22 127.548C130.38 127.558 130.3 127.558 130.22 127.548V127.548ZM481.64 172.898C471.03 147.398 449.56 119.898 432.7 111.168C446.42 138.058 454.37 165.048 457.4 185.168C457.405 185.306 457.422 185.443 457.45 185.578C429.87 116.828 383.098 89.1089 344.9 28.7479C329.908 5.05792 333.976 3.51792 331.82 4.08792L331.7 4.15792C284.99 30.1109 256.365 82.5289 249.12 126.898C232.503 127.771 216.219 131.895 201.19 139.035C199.838 139.649 198.736 140.706 198.066 142.031C197.396 143.356 197.199 144.87 197.506 146.323C197.7 147.162 198.068 147.951 198.586 148.639C199.103 149.327 199.76 149.899 200.512 150.318C201.264 150.737 202.096 150.993 202.954 151.071C203.811 151.148 204.676 151.045 205.491 150.768L206.011 150.558C221.511 143.255 238.408 139.393 255.541 139.238C318.369 138.669 352.698 183.262 363.161 201.528C350.161 192.378 326.811 183.338 304.341 187.248C392.081 231.108 368.541 381.784 246.951 376.448C187.487 373.838 149.881 325.467 146.421 285.648C146.421 285.648 157.671 243.698 227.041 243.698C234.541 243.698 255.971 222.778 256.371 216.698C256.281 214.698 213.836 197.822 197.281 181.518C188.434 172.805 184.229 168.611 180.511 165.458C178.499 163.75 176.392 162.158 174.201 160.688C168.638 141.231 168.399 120.638 173.51 101.058C148.45 112.468 128.96 130.508 114.8 146.428H114.68C105.01 134.178 105.68 93.7779 106.25 85.3479C106.13 84.8179 99.022 89.0159 98.1 89.6579C89.5342 95.7103 81.5528 102.55 74.26 110.088C57.969 126.688 30.128 160.242 18.76 211.318C14.224 231.701 12 255.739 12 263.618C12 398.318 121.21 507.508 255.92 507.508C376.56 507.508 478.939 420.281 496.35 304.888C507.922 228.192 481.64 173.82 481.64 172.898Z"/>
  </svg>
  `}static get styles(){return m`
     svg {
      max-height: 18px; 
      display: inline-block;
      margin-bottom: -3px;
     }
    `}render(){return g`
    ${$(this.svg)}
    `}};rt([f({type:Boolean})],ye.prototype,"enableBack",2);rt([f({type:String})],ye.prototype,"svg",2);ye=rt([y("icon-fir")],ye);var ti=Object.defineProperty,ri=Object.getOwnPropertyDescriptor,nt=(r,e,t,n)=>{for(var i=n>1?void 0:n?ri(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&ti(e,t,i),i};let we=class extends v{constructor(){super(),this.enableBack=!1,this.svg=`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
    <path d="M313.9 32.7c-170.2 0-252.6 223.8-147.5 355.1 36.5 45.4 88.6 75.6 147.5 75.6 36.3 0 70.3-11.1 99.4-30.4-43.8 39.2-101.9 63-165.3 63-3.9 0-8 0-11.9-.3C104.6 489.6 0 381.1 0 248 0 111 111 0 248 0h.8c63.1.3 120.7 24.1 164.4 63.1-29-19.4-63.1-30.4-99.3-30.4zm101.8 397.7c-40.9 24.7-90.7 23.6-132-5.8 56.2-20.5 97.7-91.6 97.7-176.6 0-84.7-41.2-155.8-97.4-176.6 41.8-29.2 91.2-30.3 132.9-5 105.9 98.7 105.5 265.7-1.2 364z"/>
  </svg>
  `}static get styles(){return m`
     svg {
      max-height: 18px; 
      display: inline-block;
      margin-bottom: -3px;
     }
    `}render(){return g`
    ${$(this.svg)}
    `}};nt([f({type:Boolean})],we.prototype,"enableBack",2);nt([f({type:String})],we.prototype,"svg",2);we=nt([y("icon-ope")],we);var ni=Object.defineProperty,ii=Object.getOwnPropertyDescriptor,it=(r,e,t,n)=>{for(var i=n>1?void 0:n?ii(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&ni(e,t,i),i};let be=class extends v{constructor(){super(),this.enableBack=!1,this.svg=`
  <svg xmlns="http://www.w3.org/2000/svg" width="456" height="455" viewBox="0 0 456 455">
    <defs><linearGradient id="a" x1="21.587%" x2="76.116%" y1="5.709%" y2="100.496%"><stop stop-opacity=".2" offset="0%"/><stop stop-opacity=".05" offset="79.08%"/></linearGradient></defs><g fill="none"><path fill="rgba(239, 57, 57, 0.2)" d="M228 454.3c99.7 0 155.1 0 191.4-36.1 36.2-36.1 36.2-91.3 36.2-190.7 0-99.4 0-154.6-36.2-190.7C383.1.8 327.7.8 228 .8S72.9.8 36.6 36.9C.4 73 .4 128.2.4 227.6c0 99.4 0 154.6 36.2 190.7 36.3 36 91.7 36 191.4 36z"/><path fill="url(#a)" d="M376 143.7c-21.8-38.1-58.3-67.8-104.2-80.1C180.7 39.3 87.1 93.1 62.7 183.8c-12.3 45.6-4.7 91.9 17.5 129.7.3.5.6 1.1 1 1.6l80.2 138.5c13.3.4 27.7.5 43.2.5H227.2c44.3 0 79.9 0 109-3.2 36.3-4 62.3-12.9 82.4-32.9 29.3-29.2 34.9-71 36-138.7-46.8-80.8-78.5-135.5-78.6-135.6z"/><path fill="#FFF" d="M347.8 107.6c-66.5-66.4-174.4-66.4-241 0-66.5 66.4-66.5 174 0 240.3 66.5 66.4 174.4 66.4 241 0s66.6-174 0-240.3zm-10.2 78.1c-28.1 48.7-56.2 97.4-84.3 146.2-5.2 9.1-12.8 14.5-23.2 15.3-11.6.8-20.8-4.1-26.7-14.1-17.8-30.5-35.4-61.2-53-91.8-10.7-18.6-21.5-37.2-32.2-55.9-10.8-18.8 1.4-41.7 23-42.8 11.4-.6 20.2 4.7 26 14.6 7.9 13.5 15.7 27.2 23.6 40.8 5.7 9.8 11.2 19.7 17 29.3 8.4 14.1 20.8 22 37.3 23 23.3 1.4 45-15.5 47.8-40.2.2-1.8.3-3.7.4-4.6-.1-8-1.6-14.8-4.8-21.1-8.7-17.4.6-36.9 19.5-41.1 15.4-3.4 31.4 7.9 33.4 23.5 1 6.7-.4 13-3.8 18.9z"/></g>
  </svg>
  `}static get styles(){return m`
     svg {
      max-height: 18px; 
      max-width: 18px; 
      display: inline-block;
      margin-bottom: -3px;
     }
    `}render(){return g`
    ${$(this.svg)}
    `}};it([f({type:Boolean})],be.prototype,"enableBack",2);it([f({type:String})],be.prototype,"svg",2);be=it([y("icon-viv")],be);var si=Object.defineProperty,oi=Object.getOwnPropertyDescriptor,st=(r,e,t,n)=>{for(var i=n>1?void 0:n?oi(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&si(e,t,i),i};let $e=class extends v{constructor(){super(),this.enableBack=!1,this.svg=`
  <svg viewBox="0 0 119.79 22.32" aria-label="web.dev" height="22.32" role="img" width="98" xmlns="http://www.w3.org/2000/svg">
    <path d="M114.99 19.32h-2.2l-4.8-11.9h2.4l3.5 9.2 3.5-9.2h2.4Zm-16.8-7.3h6.8a3.17 3.17 0 0 0-3.4-2.9 3.42 3.42 0 0 0-3.4 2.9Zm3.6 7.7a6 6 0 0 1-6-6.3c0-3.6 2.5-6.3 5.9-6.3s5.8 2.4 5.8 6.5v.2h-9.3a3.88 3.88 0 0 0 3.8 3.9 3.56 3.56 0 0 0 3.3-2.1l2 1a6.22 6.22 0 0 1-5.5 3.1Zm-14 0c-3.1 0-5.7-2.8-5.7-6.3s2.6-6.3 5.7-6.3a5 5 0 0 1 4.1 2h.1l-.1-1.6v-5.5h2.2v17.3h-2.1v-1.6h-.1a5.12 5.12 0 0 1-4.1 2Zm.3-2c2.2 0 3.8-1.7 3.8-4.3s-1.6-4.3-3.8-4.3a4 4 0 0 0-3.8 4.3 4 4 0 0 0 3.8 4.3Zm-6.8.1a1.61 1.61 0 0 1-1.7 1.6 1.74 1.74 0 0 1-1.7-1.6 1.67 1.67 0 0 1 1.7-1.6 1.61 1.61 0 0 1 1.7 1.6Zm-10.5-.1a4 4 0 0 0 3.8-4.3 4 4 0 0 0-3.8-4.3c-2.2 0-3.8 1.8-3.8 4.3s1.6 4.3 3.8 4.3Zm.4 2a5 5 0 0 1-4.1-2h-.1v1.6h-2.1V2.02h2.2v5.5l-.1 1.6h.1a4.84 4.84 0 0 1 4.1-2c3.1 0 5.7 2.8 5.7 6.3s-2.6 6.3-5.7 6.3Zm-17.4-7.7h6.8a3.17 3.17 0 0 0-3.4-2.9 3.42 3.42 0 0 0-3.4 2.9Zm3.6 7.7a6 6 0 0 1-6-6.3c0-3.6 2.5-6.3 5.9-6.3s5.8 2.4 5.8 6.5v.2h-9.3a3.88 3.88 0 0 0 3.8 3.9 3.67 3.67 0 0 0 3.3-2.1l2 1a6.22 6.22 0 0 1-5.5 3.1Zm-6.3-12.2-3.8 11.9h-2.3l-3-9.1-2.9 9.1h-2.3l-3.9-11.9h2.3l2.6 9 2.9-9h2.3l2.9 9 2.6-9Z" class="brand__text" fill="#5f6368" fill-rule="evenodd"></path><path d="M0 19.28a3 3 0 0 1 3-3h16.27a3.045 3.045 0 0 1 0 6.09H3.04A3 3 0 0 1 0 19.28Z" fill="#6cf"></path><path d="M.89.9a3 3 0 0 1 4.3 0l8.12 8.11a3.05 3.05 0 0 1 0 4.3l-8.12 8.12a3.04 3.04 0 1 1-4.3-4.3l5.6-5.61a.51.51 0 0 0 0-.72L.89 5.22A3 3 0 0 1 .89.9Z" fill="#06f" fill-rule="evenodd"></path><path d="m10.39 16.22-5.2 5.2a3.04 3.04 0 1 1-4.3-4.3l.89-.9Z" fill="#c6f"></path><circle cx="19.27" cy="19.27" fill="#06f" r="3.04"></circle>
  </svg>
  `}static get styles(){return m`
     svg {
      max-height: 16px; 
      display: inline-block;
      margin-bottom: -3px;
     }
    `}render(){return g`
    ${$(this.svg)}
    `}};st([f({type:Boolean})],$e.prototype,"enableBack",2);st([f({type:String})],$e.prototype,"svg",2);$e=st([y("icon-webdev")],$e);var ai=Object.defineProperty,li=Object.getOwnPropertyDescriptor,sr=(r,e,t,n)=>{for(var i=n>1?void 0:n?li(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&ai(e,t,i),i};let He=class extends v{constructor(){super(),this.enableBack=!1}static get styles(){return m`
      app-footer {
        background: transparent !important;
      }

      footer {
        padding: 0 16px 16px 16px;
        font-size: 14px;
        background: transparent;
        display: grid;
        grid-template-columns: 55fr 45fr;
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
      }

      .suggest {
        justify-self: end;
      }

      footer a {
        color: rgba(61, 61, 61, 1);
        text-decoration: none;
        margin: 0 2px;
      }

      footer a:hover {
        color: rgba(0,113,197, 1.0);
        border-bottom: 1px dashed rgba(0,113,197, 1);
      }

      @media(prefers-color-scheme: light) {
      }
    `}updated(r){r.has("enableBack")&&console.log("enableBack",this.enableBack)}render(){return g`
      <footer>
        <div>&copy;2022 <a href="https://pwadev.io" title="中国 PWA 开发者日">中国 PWA 开发者日</a></div>
        <div class="suggest">
          <a href="/code-of-conduct" appearance="primary" title="行为准则">行为准则</a>
          <a href="/privacy" appearance="primary" title="隐私">隐私</a>
          <a href="/about" appearance="primary" title="关于">关于</a>
        </div>
      </footer>
    `}};sr([f({type:Boolean})],He.prototype,"enableBack",2);He=sr([y("app-footer")],He);var ci=Object.defineProperty,hi=Object.getOwnPropertyDescriptor,pi=(r,e,t,n)=>{for(var i=n>1?void 0:n?hi(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&ci(e,t,i),i};let kt=class extends v{static get styles(){return m`
      #routerOutlet > * {
        width: 100% !important;
      }

      #routerOutlet > .leaving {
        animation: 160ms fadeOut ease-in-out;
      }

      #routerOutlet > .entering {
        animation: 160ms fadeIn linear;
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0.2;
        }

        to {
          opacity: 1;
        }
      }
    `}constructor(){super()}firstUpdated(){var e;new S((e=this.shadowRoot)==null?void 0:e.querySelector("#routerOutlet")).setRoutes([{path:"",animate:!0,children:[{path:"/",component:"app-home"},{path:"/about",component:"app-about",action:async()=>{await w(()=>import("./app-about.00c91dee.js"),[])}},{path:"/sample/notification",component:"sample-n",action:async()=>{await w(()=>import("./sample-n.9612839f.js"),[])}},{path:"/sample/url-protocol-handler",component:"sample-uph",action:async()=>{await w(()=>import("./sample-uph.99904527.js"),["code/sample-uph.99904527.js","code/query.0830c8af.js"])}},{path:"/sample/wake-lock",component:"sample-swl",action:async()=>{await w(()=>import("./sample-swl.20386424.js"),["code/sample-swl.20386424.js","code/query.0830c8af.js"])}},{path:"/sample/async-clipboard",component:"sample-ac",action:async()=>{await w(()=>import("./sample-ac.d72f7fd0.js"),["code/sample-ac.d72f7fd0.js","code/query.0830c8af.js"])}},{path:"/sample/contact-picker",component:"sample-c",action:async()=>{await w(()=>import("./sample-c.50d65e12.js"),["code/sample-c.50d65e12.js","code/query.0830c8af.js"])}},{path:"/sample/generic-sensor",component:"sample-gs",action:async()=>{await w(()=>import("./sample-gs.05f62f33.js"),["code/sample-gs.05f62f33.js","code/query.0830c8af.js"])}},{path:"/sample/shape-detection",component:"sample-sd",action:async()=>{await w(()=>import("./sample-sd.c253a05c.js"),["code/sample-sd.c253a05c.js","code/query.0830c8af.js"])}},{path:"/sample/app-shortcuts",component:"sample-as",action:async()=>{await w(()=>import("./sample-as.28f95ad7.js"),[])}},{path:"/sample/badging",component:"sample-b",action:async()=>{await w(()=>import("./sample-b.a4cdf1cf.js"),["code/sample-b.a4cdf1cf.js","code/query.0830c8af.js"])}},{path:"/sample/eyedropper",component:"sample-ed",action:async()=>{await w(()=>import("./sample-ed.777c1e8c.js"),["code/sample-ed.777c1e8c.js","code/query.0830c8af.js"])}},{path:"/sample/window-controls-overlay",component:"sample-wco",action:async()=>{await w(()=>import("./sample-wco.c948c6c7.js"),["code/sample-wco.c948c6c7.js","code/query.0830c8af.js"])}},{path:"/sample/web-share",component:"sample-ws",action:async()=>{await w(()=>import("./sample-ws.844908d4.js"),["code/sample-ws.844908d4.js","code/query.0830c8af.js"])}},{path:"/sample/local-font-access",component:"sample-lfa",action:async()=>{await w(()=>import("./sample-lfa.098f94d4.js"),["code/sample-lfa.098f94d4.js","code/query.0830c8af.js"])}},{path:"/sample/file-handling",component:"sample-fh",action:async()=>{await w(()=>import("./sample-fh.3b13c008.js"),["code/sample-fh.3b13c008.js","code/query.0830c8af.js"])}},{path:"/media-player",component:"sample-mp",action:async()=>{await w(()=>import("./sample-mp.0ba1a85e.js"),["code/sample-mp.0ba1a85e.js","code/lit-video.6fc33520.js","code/query.0830c8af.js"])}},{path:"/sample/file-system-access",component:"sample-fsa",action:async()=>{await w(()=>import("./sample-fsa.2cca55a7.js"),["code/sample-fsa.2cca55a7.js","code/lit-video.6fc33520.js","code/query.0830c8af.js"])}},{path:"/sample/navigation",component:"sample-na",action:async()=>{await w(()=>import("./sample-na.0f86d48b.js"),["code/sample-na.0f86d48b.js","code/query.0830c8af.js"])}},{path:"/code-of-conduct",component:"app-coc",action:async()=>{await w(()=>import("./app-coc.9eb0a765.js"),[])}},{path:"/privacy",component:"app-privacy",action:async()=>{await w(()=>import("./app-privacy.a030f8d7.js"),[])}}]}]),mn({immediate:!0})}render(){return g`
      <main id="routerOutlet">
      </main>
    `}};kt=pi([y("app-index")],kt);"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js");export{g as $,f as e,y as n,m as r,v as s};
//# sourceMappingURL=index.1d9cd92e.js.map
