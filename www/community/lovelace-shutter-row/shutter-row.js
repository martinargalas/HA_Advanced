/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=window,e$2=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$3=new WeakMap;class o$3{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$3.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$3.set(s,t));}return t}toString(){return this.cssText}}const r$3=t=>new o$3("string"==typeof t?t:t+"",void 0,s$3),i$1=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$3(n,t,s$3)},S$1=(s,n)=>{e$2?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$2.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$3(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$1=window,r$2=e$1.trustedTypes,h$1=r$2?r$2.emptyScript:"",o$2=e$1.reactiveElementPolyfillSupport,n$2={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:n$2,reflect:!1,hasChanged:a$1};class d$1 extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$2){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$2).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$2;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}}d$1.finalized=!0,d$1.elementProperties=new Map,d$1.elementStyles=[],d$1.shadowRootOptions={mode:"open"},null==o$2||o$2({ReactiveElement:d$1}),(null!==(s$2=e$1.reactiveElementVersions)&&void 0!==s$2?s$2:e$1.reactiveElementVersions=[]).push("1.5.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1;const i=window,s$1=i.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$1=`lit$${(Math.random()+"").slice(9)}$`,n$1="?"+o$1,l$1=`<${n$1}>`,h=document,r$1=(t="")=>h.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,c=t=>u(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,a=/-->/g,f=/>/g,_=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),m=/'/g,p=/"/g,$=/^(?:script|style|textarea|title)$/i,g=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),y=g(1),x=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),T=new WeakMap,A=h.createTreeWalker(h,129,null,!1),E$1=(t,i)=>{const s=t.length-1,n=[];let h,r=2===i?"<svg>":"",d=v;for(let i=0;i<s;i++){const s=t[i];let e,u,c=-1,g=0;for(;g<s.length&&(d.lastIndex=g,u=d.exec(s),null!==u);)g=d.lastIndex,d===v?"!--"===u[1]?d=a:void 0!==u[1]?d=f:void 0!==u[2]?($.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=_):void 0!==u[3]&&(d=_):d===_?">"===u[0]?(d=null!=h?h:v,c=-1):void 0===u[1]?c=-2:(c=d.lastIndex-u[2].length,e=u[1],d=void 0===u[3]?_:'"'===u[3]?p:m):d===p||d===m?d=_:d===a||d===f?d=v:(d=_,h=void 0);const y=d===_&&t[i+1].startsWith("/>")?" ":"";r+=d===v?s+l$1:c>=0?(n.push(e),s.slice(0,c)+"$lit$"+s.slice(c)+o$1+y):s+o$1+(-2===c?(n.push(void 0),i):y);}const u=r+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==e?e.createHTML(u):u,n]};class C{constructor({strings:t,_$litType$:i},e){let l;this.parts=[];let h=0,d=0;const u=t.length-1,c=this.parts,[v,a]=E$1(t,i);if(this.el=C.createElement(v,e),A.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(o$1)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(o$1),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:h,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?k:"@"===i[1]?H:S});}else c.push({type:6,index:h});}for(const i of t)l.removeAttribute(i);}if($.test(l.tagName)){const t=l.textContent.split(o$1),i=t.length-1;if(i>0){l.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)l.append(t[s],r$1()),A.nextNode(),c.push({type:2,index:++h});l.append(t[i],r$1());}}}else if(8===l.nodeType)if(l.data===n$1)c.push({type:2,index:h});else {let t=-1;for(;-1!==(t=l.data.indexOf(o$1,t+1));)c.push({type:7,index:h}),t+=o$1.length-1;}h++;}}static createElement(t,i){const s=h.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===x)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=P(t,r._$AS(t,i.values),r,e)),i}class V{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:h).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),l=0,r=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new I(n,this,t)),this.u.push(i),d=e[++r];}l!==(null==d?void 0:d.index)&&(n=A.nextNode(),l++);}return o}p(t){let i=0;for(const s of this.u)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cm=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),d(t)?t===b||null==t||""===t?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==x&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):c(t)?this.k(t):this.g(t);}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}g(t){this._$AH!==b&&d(this._$AH)?this._$AA.nextSibling.data=t:this.T(h.createTextNode(t)),this._$AH=t;}$(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=C.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.p(s);else {const t=new V(o,this),i=t.v(this.options);t.p(s),this.T(i),this._$AH=t;}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new C(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.O(r$1()),this.O(r$1()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cm=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=b;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===x&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===b?t=b:t!==b&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===b?void 0:t;}}const R=s$1?s$1.emptyScript:"";class k extends S{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==b?this.element.setAttribute(this.name,R):this.element.removeAttribute(this.name);}}class H extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:b)===x)return;const e=this._$AH,o=t===b&&e!==b||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==b&&(e===b||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class I{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t);}}const z=i.litHtmlPolyfillSupport;null==z||z(C,N),(null!==(t$1=i.litHtmlVersions)&&void 0!==t$1?t$1:i.litHtmlVersions=[]).push("2.5.0");const Z$1=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(r$1(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o;class s extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Z$1(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return x}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n=globalThis.litElementPolyfillSupport;null==n||n({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.2.2");

var __assign$1 = (undefined && undefined.__assign) || function () {
    __assign$1 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};

// https://tc39.es/ecma402/#sec-issanctionedsimpleunitidentifier
var SANCTIONED_UNITS = [
    'angle-degree',
    'area-acre',
    'area-hectare',
    'concentr-percent',
    'digital-bit',
    'digital-byte',
    'digital-gigabit',
    'digital-gigabyte',
    'digital-kilobit',
    'digital-kilobyte',
    'digital-megabit',
    'digital-megabyte',
    'digital-petabyte',
    'digital-terabit',
    'digital-terabyte',
    'duration-day',
    'duration-hour',
    'duration-millisecond',
    'duration-minute',
    'duration-month',
    'duration-second',
    'duration-week',
    'duration-year',
    'length-centimeter',
    'length-foot',
    'length-inch',
    'length-kilometer',
    'length-meter',
    'length-mile-scandinavian',
    'length-mile',
    'length-millimeter',
    'length-yard',
    'mass-gram',
    'mass-kilogram',
    'mass-ounce',
    'mass-pound',
    'mass-stone',
    'temperature-celsius',
    'temperature-fahrenheit',
    'volume-fluid-ounce',
    'volume-gallon',
    'volume-liter',
    'volume-milliliter',
];

SANCTIONED_UNITS.map(function (unit) {
    return unit.replace(/^(.*?)-/, '');
});

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/** @class */ ((function (_super) {
    __extends(MissingLocaleDataError, _super);
    function MissingLocaleDataError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'MISSING_LOCALE_DATA';
        return _this;
    }
    return MissingLocaleDataError;
})(Error));

var t,r;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none";}(t||(t={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24";}(r||(r={}));function O(){return (O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);}return e}).apply(this,arguments)}function E(e){return e.substr(0,e.indexOf("."))}var Z=["closed","locked","off"],ne=function(e,t,r,n){n=n||{},r=null==r?{}:r;var i=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return i.detail=r,e.dispatchEvent(i),i};var le=function(e){ne(window,"haptic",e);},de$2=function(e,t,r){void 0===r&&(r=!1),r?history.replaceState(null,"",t):history.pushState(null,"",t),ne(window,"location-changed",{replace:r});},fe=function(e,t,r){void 0===r&&(r=!0);var n,i=E(t),a="group"===i?"homeassistant":i;switch(i){case"lock":n=r?"unlock":"lock";break;case"cover":n=r?"open_cover":"close_cover";break;default:n=r?"turn_on":"turn_off";}return e.callService(a,n,{entity_id:t})},ge=function(e,t){var r=Z.includes(e.states[t].state);return fe(e,t,r)},be=function(e,t,r,n,i){var a;if(i&&r.double_tap_action?a=r.double_tap_action:n&&r.hold_action?a=r.hold_action:!n&&r.tap_action&&(a=r.tap_action),a||(a={action:"more-info"}),!a.confirmation||a.confirmation.exemptions&&a.confirmation.exemptions.some(function(e){return e.user===t.user.id})||confirm(a.confirmation.text||"Are you sure you want to "+a.action+"?"))switch(a.action){case"more-info":(a.entity||r.entity||r.camera_image)&&(ne(e,"hass-more-info",{entityId:a.entity?a.entity:r.entity?r.entity:r.camera_image}),a.haptic&&le(a.haptic));break;case"navigate":a.navigation_path&&(de$2(0,a.navigation_path),a.haptic&&le(a.haptic));break;case"url":a.url_path&&window.open(a.url_path),a.haptic&&le(a.haptic);break;case"toggle":r.entity&&(ge(t,r.entity),a.haptic&&le(a.haptic));break;case"call-service":if(!a.service)return;var o=a.service.split(".",2),u=o[0],c=o[1],m=O({},a.data);"entity"===m.entity_id&&(m.entity_id=r.entity),t.callService(u,c,m,a.target),a.haptic&&le(a.haptic);break;case"fire-dom-event":ne(e,"ll-custom",a),a.haptic&&le(a.haptic);}};

// Material Design Icons v7.0.96
var mdiArrowLeft = "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z";
var mdiArrowRight = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z";
var mdiChevronDown = "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z";
var mdiChevronUp = "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z";
var mdiDelete = "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";
var mdiPlus = "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
var mdiStop = "M18,18H6V6H18V18Z";

// GENERAL
const HASSIO_CARD_ID = "shutter-row";
const HASSIO_CARD_EDITOR_ID = HASSIO_CARD_ID + "-editor";
const HASSIO_CARD_NAME = "Shutter Row";
const VERSION = "0.3.6";

// SVG PATHS
const PATH_SHUTTER_100 =
    "M 3 4 L 12 4 L 21 4 L 21 6 L 21 8 L 20 8 L 19 8 L 19 14 L 19 20 L 18 20 L 17 20 L 17 14 L 17 8 L 12 8 L 7 8 L 7 14 L 7 20 L 6 20 L 5 20 L 5 14 L 5 8 L 4 8 L 3 8 L 3 6 L 3 4 M 8 9 L 12 9 L 16 9 L 16 10 L 16 11 L 12 11 L 8 11 L 8 10 L 8 9 M 8 12 L 12 12 L 16 12 L 16 13 L 16 14 L 12 14 L 8 14 L 8 13 L 8 12 M 8 15 L 12 15 L 16 15 L 16 16 L 16 17 L 12 17 L 8 17 L 8 16 L 8 15 M 8 18 L 12 18 L 16 18 L 16 19 L 16 20 L 12 20 L 8 20 L 8 19 Z";
const PATH_SHUTTER_75 =
    "M 3 4 L 12 4 L 21 4 L 21 6 L 21 8 L 20 8 L 19 8 L 19 14 L 19 20 L 18 20 L 17 20 L 17 14 L 17 8 L 12 8 L 7 8 L 7 14 L 7 20 L 6 20 L 5 20 L 5 14 L 5 8 L 4 8 L 3 8 L 3 6 L 3 4 M 8 9 L 12 9 L 16 9 L 16 10 L 16 11 L 12 11 L 8 11 L 8 10 L 8 9 M 8 12 L 12 12 L 16 12 L 16 13 L 16 14 L 12 14 L 8 14 L 8 13 L 8 12 M 8 15 L 12 15 L 16 15 L 16 16 L 16 17 L 12 17 L 8 17 L 8 16 L 8 15";
const PATH_SHUTTER_50 =
    "M 3 4 L 12 4 L 21 4 L 21 6 L 21 8 L 20 8 L 19 8 L 19 14 L 19 20 L 18 20 L 17 20 L 17 14 L 17 8 L 12 8 L 7 8 L 7 14 L 7 20 L 6 20 L 5 20 L 5 14 L 5 8 L 4 8 L 3 8 L 3 6 L 3 4 M 8 9 L 12 9 L 16 9 L 16 10 L 16 11 L 12 11 L 8 11 L 8 10 L 8 9 M 8 12 L 12 12 L 16 12 L 16 13 L 16 14 L 12 14 L 8 14 L 8 13 L 8 12";
const PATH_SHUTTER_25 =
    "M 3 4 L 12 4 L 21 4 L 21 6 L 21 8 L 20 8 L 19 8 L 19 14 L 19 20 L 18 20 L 17 20 L 17 14 L 17 8 L 12 8 L 7 8 L 7 14 L 7 20 L 6 20 L 5 20 L 5 14 L 5 8 L 4 8 L 3 8 L 3 6 L 3 4 M 8 9 L 12 9 L 16 9 L 16 10 L 16 11 L 12 11 L 8 11 L 8 10 L 8 9";
const PATH_SHUTTER_0 =
    "M 3 4 L 12 4 L 21 4 L 21 6 L 21 8 L 20 8 L 19 8 L 19 14 L 19 20 L 18 20 L 17 20 L 17 14 L 17 8 L 12 8 L 7 8 L 7 14 L 7 20 L 6 20 L 5 20 L 5 14 L 5 8 L 4 8 L 3 8 L 3 6 L 3 4";
const PATH_SHUTTER_UP =
    "m3,4l18,0l0,4l-2,0l0,12l-2,0l0,-12l-10,0l0,12l-2,0l0,-12l-2,0l0,-4 m5.86,12.5928l3.14,-3.13316l3.14,3.13316l0.96458,-0.96458l-4.10458,-4.10458l-4.10458,4.10458l0.96458,0.96458z";
const PATH_SHUTTER_DOWN =
    "m3,4l18,0l0,4l-2,0l0,12l-2,0l0,-12l-10,0l0,12l-2,0l0,-12l-2,0l0,-4 m5.72989,8.28425l3.27011,3.27011l3.27011,-3.27011l1.00454,1.01167l-4.27465,4.27465l-4.27465,-4.27465l1.00454,-1.01167z";

var editor$1 = {
	invert_position: "Invert position value",
	invert_position_label: "Invert open and closed status",
	disable_position: "Hide position slider",
	rtl_position: "Switch direction of the position slider",
	group: "Group",
	ignore_state: "Enable always move buttons",
	title_template: "Title template",
	position_template: "Position label template",
	move_down_button: "Move down button action",
	move_stop_button: "Move stop button action",
	move_up_button: "Move up button action",
	preset_buttons: "Preset buttons",
	move_left: "Move left",
	move_right: "Move right",
	move_up_button_expandable: "Move up button custom action",
	move_stop_button_expandable: "Move stop button custom action",
	move_down_button_expandable: "Move down button custom action"
};
var en = {
	editor: editor$1
};

var en$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    editor: editor$1,
    'default': en
});

var editor = {
	invert_position: "Invertiere Positionswert",
	invert_position_label: "Invertiere Positions Status",
	disable_position: "Verstecke Positionslider",
	rtl_position: "Vertausche Richtung des Positionslider",
	group: "Gruppe",
	ignore_state: "Aktiviere immer Bewegungsbuttons",
	title_template: "Titel template",
	position_template: "Positionswert template",
	move_down_button: "Runter Button Aktion",
	move_stop_button: "Stopp Button Aktion",
	move_up_button: "Hoch Button Aktion",
	preset_buttons: "Voreinstellungs Buttons",
	move_left: "Verschiebe nach links",
	move_right: "Verschiebe nach rechts",
	move_up_button_expandable: "Aufwärts Button benutzerdefinierte Aktion",
	move_stop_button_expandable: "Stopp Button benutzerdefinierte Aktion",
	move_down_button_expandable: "Abwärts Button benutzerdefinierte Aktion"
};
var de = {
	editor: editor
};

var de$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    editor: editor,
    'default': de
});

const DEFAULT_LANG = "en";

/**
 * Returns custom localizations
 * @param {string} lang
 * @returns Array
 */
function getLang(lang) {
    switch (lang) {
        case "en":
            return en$1;
        case "de":
            return de$1;

        default:
            return en$1;
    }
}

/**
 * Customized localization
 * @param {hass} hass
 * @param {string} keys
 * @returns string
 */
function customLocalize(hass, keys) {
    // Looks for keys in data
    let deepLookup = (keys, data) => {
        let curKey = keys.pop();
        if (!curKey in data) return false;
        if (keys.length == 0) return data[curKey];
        return deepLookup(keys, data[curKey]);
    };
    // Gives the localized value in the given language
    let localizeLang = (lang) => {
        return deepLookup(keys.split(".").reverse(), getLang(lang));
    };

    let lang = hass.locale.language ?? DEFAULT_LANG;
    let localizedUserLang = localizeLang(lang);

    return localizedUserLang ? localizedUserLang : localizeLang(DEFAULT_LANG);
}

/**
 * Entities which are included
 */
const INCLUDED_DOMAINS = ["cover"];

/**
 * UI actions
 */
const UI_SCHEMA = [
    { name: "tap_action", selector: { "ui-action": {} } },
    { name: "double_tap_action", selector: { "ui-action": {} } },
    { name: "hold_action", selector: { "ui-action": {} } },
];

/**
 * Root form schema
 */
const getRootSchema = (hass) => [
    {
        type: "grid",
        name: "",
        schema: [
            { name: "entity", selector: { entity: { domain: INCLUDED_DOMAINS } } },
            { name: "name", selector: { text: {} } },
        ],
    },
    {
        type: "grid",
        name: "",
        schema: [
            { name: "invert_position", selector: { boolean: {} } },
            { name: "invert_position_label", selector: { boolean: {} } },
            { name: "disable_position", selector: { boolean: {} } },
            { name: "rtl_position", selector: { boolean: {} } },
            { name: "state_color", selector: { boolean: {} } },
            { name: "group", selector: { boolean: {} } },
            { name: "ignore_state", selector: { boolean: {} } },
        ],
    },
    { name: "title_template", selector: { template: {} } },
    { name: "position_template", selector: { template: {} } },
    {
        type: "expandable",
        name: "move_up_button",
        title: customLocalize(hass, "editor.move_up_button_expandable"),
        icon: "mdi:arrow-up",
        schema: UI_SCHEMA,
    },
    {
        type: "expandable",
        name: "move_stop_button",
        title: customLocalize(hass, "editor.move_stop_button_expandable"),
        icon: "mdi:stop-circle-outline",
        schema: UI_SCHEMA,
    },
    {
        type: "expandable",
        name: "move_down_button",
        title: customLocalize(hass, "editor.move_down_button_expandable"),
        icon: "mdi:arrow-down",
        schema: UI_SCHEMA,
    },
];

/**
 * Preset button schema
 */
const PRESET_SCHEMA = [
    { name: "name", selector: { text: {} } },
    { name: "icon", selector: { icon: {} } },
].concat(UI_SCHEMA);

/**
 * Hold needed helper variables
 */
var HOLD_TIMER;
var HOLD_ACTIVED = false;
var HOLD_TIME = 500;

/**
 * On hold pointer down function
 * @param {event} e
 */
function onHoldPointerDown(e) {
    let timerDone = function () {
        HOLD_ACTIVED = true;
    };
    // Reset
    clearTimeout(HOLD_TIMER);
    HOLD_ACTIVED = false;
    // Start timer
    HOLD_TIMER = setTimeout(timerDone, HOLD_TIME);
}

/**
 * On hold pointer up function
 * @param {event} e
 */
function onPointerUp(context, onClickCallback, onHoldCallback, e) {
    if (HOLD_ACTIVED) {
        HOLD_ACTIVED = false;
        onHoldCallback.bind(context)(e);
    } else {
        onClickCallback.bind(context)(e);
    }
}

/**
 * Create ripple element
 * @returns html
 */
function getRippleElement() {
    let ripple = document.createElement("mwc-ripple");
    ripple.setAttribute("primary");
    return ripple;
}

/**
 * Move element in array
 * @param {Array} arr
 * @param {int} fromIndex
 * @param {int} toIndex
 * @returns
 */
function moveElementInArray(arr, fromIndex, toIndex) {
    let element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
    return arr;
}

/**
 * Localize entity state - HA 2023.4 < downgrade compatible
 * @param {Hass} hass
 * @param {string} state
 * @returns
 */
function localizeState(hass, state) {
    let newLocalize = hass.localize(`component.cover.entity_component._.state.${state}`);
    if (newLocalize != "") return newLocalize;
    return hass.localize(`component.cover.state._.${state}`);
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = i$1`div.configRow {
    margin-bottom: 1em;
}
div.configGrid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1em;
    -moz-column-gap: 1em;
         column-gap: 1em;
    grid-row-gap: 2em;
    row-gap: 2em;
}
div.editor-items-bar {
    display: flex;
}
div.editor-items-bar paper-tabs {
    width: 100%;
}
paper-tab[aria-selected="true"]::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background-color: #6200ee;
    background-color: var(--mdc-theme-primary, #6200ee);
}
div.tab-divider {
    width: 1px;
    margin: 0px 4px;
    height: 48px;
    height: var(--mdc-icon-button-size, 48px);
    background: white;
}
`;
styleInject(css_248z$1);

class ShutterRowEditor extends s {
    /**
     * Define properties to react
     * @returns Array
     */
    static get properties() {
        return {
            hass: {},
            config: {},
            _config: {},
            _preset_button_selected: Number,
        };
    }

    /**
     * Define CSS styles
     * @returns CSS styles
     */
    static get styles() {
        return css_248z$1;
    }

    /**
     * Adds new preset button
     */
    _addPresetItem() {
        // Check if defined, if not add one
        if (!this._config) return;

        if (!this._config.preset_buttons) {
            this._preset_button_selected = 0;
            this._config.preset_buttons = [{}];
            return;
        }

        this._config.preset_buttons.push({});
        ne(this, "config-changed", { config: this._config });
        this._preset_button_selected = this._config.preset_buttons.length - 1;
    }

    /**
     * Renders all items in the preset tab bar
     * @returns html
     */
    renderPresetItemTabs() {
        if (!this._config || !this._config.preset_buttons) return;

        return this._config.preset_buttons.map(
            (preset_button, index) => y` <paper-tab
                class="iron-selected"
                tabindex="${index}"
                @click=${() => (this._preset_button_selected = index)}
            >
                ${index + 1}
            </paper-tab>`
        );
    }

    /**
     * Renders preset editor form
     * @returns html
     */
    renderPresetItemContent() {
        if (!this._config || !this._config.preset_buttons || this._config.preset_buttons.length == 0) return;

        return y` <ha-form
            .hass=${this.hass}
            .data=${this._config.preset_buttons[this._preset_button_selected]}
            .schema=${PRESET_SCHEMA}
            .computeLabel=${this._computeLabel}
            @value-changed=${this._presetChanged}
        ></ha-form>`;
    }

    /**
     * Renders tab control button
     * @returns html
     */
    renderPresetButtonsTabControls() {
        let basicControls = y`<ha-icon-button
            .label=${this.hass.localize("ui.components.area-picker.add_dialog.add")}
            .path="${mdiPlus}"
            @click=${this._addPresetItem}
        ></ha-icon-button>`;

        // Return only basic controls if preset buttons were not set
        if (!this._config || !this._config.preset_buttons) return basicControls;
        if (this._config.preset_buttons.length == 0) return basicControls;

        // Define event listener
        let onMoveLeftClick = () => {
            if (this._preset_button_selected == 0) return;

            this._config.preset_buttons = moveElementInArray(
                this._config.preset_buttons,
                this._preset_button_selected,
                --this._preset_button_selected
            );
            ne(this, "config-changed", { config: this._config });
        };
        let onMoveRightClick = () => {
            if (this._preset_button_selected >= this._config.preset_buttons.length - 1) return;

            this._config.preset_buttons = moveElementInArray(
                this._config.preset_buttons,
                this._preset_button_selected,
                ++this._preset_button_selected
            );
            ne(this, "config-changed", { config: this._config });
        };
        let onDeleteClick = () => {
            // Select other tab
            this._preset_button_selected = this._preset_button_selected == 0 ? 0 : this._preset_button_selected - 1;

            this._config.preset_buttons.splice(this._preset_button_selected, 1);
            ne(this, "config-changed", { config: this._config });
        };

        return y`
            <ha-icon-button
                .label=${customLocalize(this.hass, "editor.move_left")}
                .path="${mdiArrowLeft}"
                @click=${onMoveLeftClick}
            ></ha-icon-button>
            <ha-icon-button
                .label=${customLocalize(this.hass, "editor.move_right")}
                .path="${mdiArrowRight}"
                @click=${onMoveRightClick}
            ></ha-icon-button>
            <ha-icon-button
                .label=${this.hass.localize("ui.common.remove")}
                .path="${mdiDelete}"
                @click=${onDeleteClick}
            ></ha-icon-button>
            <div class="tab-divider"></div>
            ${basicControls}
        `;
    }

    /**
     * Render preset button editor part
     * @returns html
     */
    renderPresetButtons() {
        return y`
            <h3>${customLocalize(this.hass, "editor.preset_buttons")}</h3>

            <div class="editor-items-bar">
                <paper-tabs scrollable="" tabindex="0" selected="${this._preset_button_selected}" dir="ltr">
                    ${this.renderPresetItemTabs()}
                </paper-tabs>

                ${this.renderPresetButtonsTabControls()}
            </div>
            <div class="editor-item-content">${this.renderPresetItemContent()}</div>
        `;
    }

    /**
     * Main render function
     * @returns html
     */
    render() {
        if (!this.hass || !this._config) {
            return y``;
        }

        return y`
            <ha-form
                .hass=${this.hass}
                .data=${this._config}
                .schema=${getRootSchema(this.hass)}
                .computeLabel=${this._computeLabel}
                @value-changed=${this._valueChanged}
            ></ha-form>
            ${this.renderPresetButtons()}
        `;
    }

    /**
     * HA function on editor config set
     * @param {Array} config
     */
    setConfig(config) {
        this._config = config;
    }

    /**
     * HA editor form on value changed
     * @param {*} ev
     */
    _valueChanged(ev) {
        ne(this, "config-changed", { config: ev.detail.value });
    }

    /**
     * HA editor preset form on value changed
     * @param {*} ev
     */
    _presetChanged(ev) {
        this._config.preset_buttons[this._preset_button_selected] = ev.detail.value;
        ne(this, "config-changed", { config: this._config });
    }

    /**
     * Computes localized label
     * @param {*} schema
     * @returns String
     */
    _computeLabel(schema) {
        let customLocal = customLocalize(this.hass, "editor." + schema.name);
        if (customLocal) return customLocal;
        return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${schema.name}`);
    }
}

// Define HTML element
customElements.define(HASSIO_CARD_EDITOR_ID, ShutterRowEditor);
window.customCards = window.customCards || [];
window.customCards.push({
    type: HASSIO_CARD_ID,
    name: HASSIO_CARD_NAME,
    preview: false, // Optional - defaults to false
});

var css_248z = i$1`.disabled,
div.controls[state="unavailable"] ha-icon {
    color: var(--disabled-text-color);
    cursor: default;
}
ha-card {
    padding: 16px;
}
ha-icon.active-icon,
ha-svg-icon.active-icon {
    color: var(--state-active-color) !important;
    color: var(--state-cover-open-color, var(--state-cover-active-color, var(--state-active-color))) !important;
}
div.content {
    cursor: pointer;
}
div.card-row {
    --card-row-height: 48px;
    --ha-icon-height: 40px;
    display: flex;
    align-items: center;
    height: var(--card-row-height);
}
div.card-row.first-row ha-icon,
div.card-row.first-row ha-svg-icon-box {
    display: inline-block;
    text-align: center;
    color: #44739e;
    color: var(--paper-item-icon-color, #44739e);
    width: var(--ha-icon-height);
    height: var(--ha-icon-height);
    line-height: var(--ha-icon-height);
    margin-right: 8px;
}
div.card-row.first-row ha-svg-icon-box {
    flex: 0 0 var(--ha-icon-height);
    position: relative;
    display: inline-block;
    border-radius: 50%;
    text-align: center;
    background-size: cover;
    vertical-align: middle;
    box-sizing: border-box;
}
div.card-row.first-row span.entity-name {
    margin-left: 8px;
    margin-right: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1;
}
div.card-row.first-row div.controls {
    margin-left: auto;
    margin-right: -0.57em;
}
div.card-row.second-row ha-slider {
    width: 100%;
    margin-left: 42px;
    box-sizing: border-box;
}
div.card-row.second-row div.infos {
    width: 215px;
    text-align: right;
}
div.card-row.preset-buttons {
    justify-content: center;
    padding-left: var(--card-row-height);
    flex-wrap: wrap;
    height: auto;
}
div.card-row.preset-buttons div.button {
    position: relative;
    padding: 0.5em 0.75em;
}
div.card-row.preset-buttons div.button span {
    margin-left: 0.25em;
}
`;
styleInject(css_248z);

class ShutterRow extends s {
    constructor() {
        super();

        // Define empty 'templated' variable for rendered templates
        this.templated = {};
    }

    /**
     * Define properties to react
     * @returns Array
     */
    static get properties() {
        return {
            hass: Object,
            config: Object,
            templated_changed: Boolean, // Because 'templated' as variable didn't rerender, there is a boolean which flips on every template changed
        };
    }

    /**
     * Define CSS styles
     * @returns CSS styles
     */
    static get styles() {
        return css_248z;
    }

    /**
     * Getter function for shutter row editor element
     * @returns html
     */
    static getConfigElement() {
        return document.createElement(HASSIO_CARD_EDITOR_ID);
    }

    /**
     * Lovelace function to get card height
     * @returns int
     */
    getCardSize() {
        return 2;
    }

    /**
     * HA function on editor config set
     * @param {Array} config
     */
    setConfig(config) {
        let getConfigAttribute = (attribute, defaultValue, array = this._config) => {
            if (!array) return;
            return attribute in array ? array[attribute] : defaultValue;
        };
        if (!config.entity) {
            throw new Error("You need to define an entity");
        }

        this._config = config;
        this.config = {
            type: config.type,
            entity: config.entity,
            name: getConfigAttribute("name", false),
            invert_position: getConfigAttribute("invert_position", false),
            invert_position_label:
                getConfigAttribute("invert_position_label", false) || getConfigAttribute("invert_position", false),
            disable_position: getConfigAttribute("disable_position", false),
            rtl_position: getConfigAttribute("rtl_position", false),
            state_color: getConfigAttribute("state_color", false),
            group: getConfigAttribute("group", false),
            ignore_state: getConfigAttribute("ignore_state", false),
            title_template: getConfigAttribute("title_template", false),
            position_template: getConfigAttribute("position_template", false),
            move_down_button: {
                tap_action: getConfigAttribute("tap_action", false, getConfigAttribute("move_down_button", false)),
                double_tap_action: getConfigAttribute(
                    "double_tap_action",
                    false,
                    getConfigAttribute("move_down_button", false)
                ),
                hold_action: getConfigAttribute("hold_action", false, getConfigAttribute("move_down_button", false)),
            },
            move_stop_button: {
                tap_action: getConfigAttribute("tap_action", false, getConfigAttribute("move_stop_button", false)),
                double_tap_action: getConfigAttribute(
                    "double_tap_action",
                    false,
                    getConfigAttribute("move_stop_button", false)
                ),
                hold_action: getConfigAttribute("hold_action", false, getConfigAttribute("move_stop_button", false)),
            },
            move_up_button: {
                tap_action: getConfigAttribute("tap_action", false, getConfigAttribute("move_up_button", false)),
                double_tap_action: getConfigAttribute(
                    "double_tap_action",
                    false,
                    getConfigAttribute("move_up_button", false)
                ),
                hold_action: getConfigAttribute("hold_action", false, getConfigAttribute("move_up_button", false)),
            },
            preset_buttons: getConfigAttribute("preset_buttons", false),
        };
        this.entityId = this.config.entity;
    }

    /**
     * Calls custom action if defined
     * @param {Array} config
     * @param {action} action
     * @returns
     */
    callCustomAction(config, action) {
        // Check if defined
        if (!config[action]) return;

        // Deep copy
        config = JSON.parse(JSON.stringify(config));

        // Run custom action
        // Run function action = "set-position"
        if (config[action].action == "set-position" && config[action]["position"])
            this.hass.callService("cover", "set_cover_position", {
                entity_id: this.entityId,
                position: this.config.invert_position ? 100 - config[action]["position"] : config[action]["position"],
            });

        // Add legacy service data support, removed in later versions
        if ("service_data" in config[action]) config[action]["data"] = config[action]["service_data"];

        // Call HA handle function
        switch (action) {
            case "tap_action":
                be(this, this.hass, config, false, false);
                break;
            case "double_tap_action":
                be(this, this.hass, config, false, true);
                break;
            case "hold_action":
                be(this, this.hass, config, true, false);
                break;
        }
    }

    /*
        =========================================
        = Card functions
        =========================================
    */

    /**
     * Get card title
     * @returns string
     */
    getName() {
        // Check for custom template
        if (this.getTemplateText("titleLabel")) return this.getTemplateText("titleLabel");

        if (this.config.name) return this.config.name;
        return this.state.attributes.friendly_name;
    }

    /**
     * Get position value
     * @returns string
     */
    getPosition() {
        if (this.config.invert_position) return 100 - this.state.attributes.current_position;
        return this.state.attributes.current_position;
    }

    /**
     * Get position text for label
     * @returns string
     */
    getPositionLabel() {
        // Check for custom template
        if (this.getTemplateText("positionLabel")) return this.getTemplateText("positionLabel");

        if (
            (this.config.invert_position_label && this.getPosition() == 100) ||
            (!this.config.invert_position_label && this.getPosition() == 0)
        )
            return localizeState(this.hass, "closed");
        if (
            (this.config.invert_position_label && this.getPosition() == 0) ||
            (!this.config.invert_position_label && this.getPosition() == 100)
        )
            return localizeState(this.hass, "open");
        return `${this.getPosition()} %`;
    }

    /**
     * Sets meta for variables
     * @param {bool} force
     * @returns string
     */
    setMeta(force = false) {
        // Only on change
        if (this.state == this.hass.states[this.entityId] && !force) return;
        this.state = this.hass.states[this.entityId];
        this.stateDisplay = this.state ? this.state.state : "unavailable";
    }

    /**
     * Checks if cover is fully opened
     * @returns bool
     */
    upReached() {
        if (
            (!this.config.invert_position_label && this.getPosition() == 100) ||
            (this.config.invert_position_label && this.getPosition() == 0)
        )
            return true;
        return false;
    }

    /**
     * Checks if cover is fully closed
     * @returns bool
     */
    downReached() {
        if (
            (this.config.invert_position_label && this.getPosition() == 100) ||
            (!this.config.invert_position_label && this.getPosition() == 0)
        )
            return true;
        return false;
    }

    /**
     * Returns generalized moving state, returns false if not moving
     * @returns bool
     */
    currentMoving() {
        if (this.stateDisplay == "opening" || this.state.attributes.moving == "UP") return "up";
        if (this.stateDisplay == "closing" || this.state.attributes.moving == "DOWN") return "down";
        return false;
    }

    /**
     * Render entity icon
     * @returns html
     */
    renderIcon() {
        let getClassName = () => {
            if (this.config.state_color != undefined && this.config.state_color && this.stateDisplay != "closed")
                return "active-icon";
            return "";
        };

        let getIconElementById = (icon) => {
            return y`<ha-icon icon="${icon}" class="${getClassName()}"></ha-icon>`;
        };
        let getIconElementByPath = (path) => {
            return y`
                <ha-svg-icon-box>
                    <ha-svg-icon path="${path}" class="${getClassName()}"></ha-icon-button>
                </ha-svg-icon-box>
            `;
        };

        // Check for moving
        if (this.currentMoving() == "up") return getIconElementByPath(PATH_SHUTTER_UP);
        if (this.currentMoving() == "down") return getIconElementByPath(PATH_SHUTTER_DOWN);

        // Check for entity defined icon
        if (this.state.attributes.icon != undefined) return getIconElementById(this.state.attributes.icon);

        // Use dynamic icon
        if (this.downReached()) return getIconElementByPath(PATH_SHUTTER_100);
        if (this.getPosition() > 66) return getIconElementByPath(PATH_SHUTTER_75);
        if (this.getPosition() > 33) return getIconElementByPath(PATH_SHUTTER_50);
        if (this.getPosition() > 0) return getIconElementByPath(PATH_SHUTTER_25);

        return getIconElementByPath(PATH_SHUTTER_0);
    }

    /**
     * Render first row within card content
     * @returns html
     */
    renderFirstRow() {
        let moveUpDisabled = () => {
            if (this.stateDisplay == "unavailable") return true;
            if (this.config.ignore_state) return false;
            if (this.upReached() || this.currentMoving() == "up") return true;
            return false;
        };
        let moveStopDisabled = () => {
            if (this.stateDisplay == "unavailable") return true;
            if (this.config.ignore_state) return false;
            if (this.state.attributes.moving == "STOP") return true;
            return false;
        };
        let moveDownDisabled = () => {
            if (this.stateDisplay == "unavailable") return true;
            if (this.config.ignore_state) return false;
            if (this.downReached() || this.currentMoving() == "down") return true;
            return false;
        };

        return y`
            <div class="card-row first-row">
                <div class="entity-icon">${this.renderIcon()}</div>

                <span class="entity-name" @click="${this.onMoreClick}">${this.getName()}</span>
                <div class="controls" state="${this.stateDisplay}">
                    <ha-icon-button
                        class="exclude-on-click"
                        .label=${this.hass.localize("ui.dialogs.more_info_control.cover.open_cover")}
                        .path="${mdiChevronUp}"
                        .disabled=${moveUpDisabled()}
                        @dblclick="${this.onMoveUpDoubleClick}"
                        @pointerdown="${onHoldPointerDown}"
                        @pointerup="${this.onMoveUpPointerUp}"
                    >
                    </ha-icon-button>
                    <ha-icon-button
                        class="exclude-on-click"
                        .label=${this.hass.localize("ui.dialogs.more_info_control.cover.stop_cover")}
                        .path="${mdiStop}"
                        .disabled=${moveStopDisabled()}
                        @dblclick="${this.onMoveStopDoubleClick}"
                        @pointerdown="${onHoldPointerDown}"
                        @pointerup="${this.onMoveStopPointerUp}"
                    >
                    </ha-icon-button>
                    <ha-icon-button
                        class="exclude-on-click"
                        .label=${this.hass.localize("ui.dialogs.more_info_control.cover.close_cover")}
                        .path="${mdiChevronDown}"
                        .disabled=${moveDownDisabled()}
                        @dblclick="${this.onMoveDownDoubleClick}"
                        @pointerdown="${onHoldPointerDown}"
                        @pointerup="${this.onMoveDownPointerUp}"
                    >
                    </ha-icon-button>
                </div>
            </div>
        `;
    }

    /**
     *  Render second row within card content
     * @returns html
     */
    renderSecondRow() {
        return y`
            <div class="card-row second-row">
                <ha-slider
                    class="exclude-on-click"
                    min="0"
                    max="100"
                    value=${this.getPosition()}
                    step="5"
                    dir="${this.config.rtl_position ? "rtl" : "ltr"}"
                    @change="${this.onSliderChange}"
                    ignore-bar-touch
                    pin
                    labeled
                ></ha-slider>
                <div class="infos">
                    <span class="position">${this.getPositionLabel()}</span>
                </div>
            </div>
        `;
    }

    /**
     * Render presets row within card content
     * @returns html
     */
    renderPresetsRow() {
        if (!this.config.preset_buttons) return;
        let presetsHtml = [];
        this.config.preset_buttons.forEach((presetConfig) => {
            presetsHtml.push(this.renderPreset(presetConfig));
        });
        return y`<div class="card-row preset-buttons">${presetsHtml}</div>`;
    }

    /**
     * Render one preset for the preset row
     * @param {Array} presetConfig
     * @returns html
     */
    renderPreset(presetConfig) {
        // Ripple effect
        let ripple = getRippleElement();
        // Events
        let onPointerDownFunc = () => {
            ripple.startPress();
            onHoldPointerDown();
        };
        let onPointerUpFunc = () => {
            ripple.endPress();
            let onClickCallback = () => {
                this.callCustomAction(presetConfig, "tap_action");
            };
            let onHoldCallback = () => {
                this.callCustomAction(presetConfig, "hold_action");
            };
            onPointerUp(this, onClickCallback, onHoldCallback);
        };
        let onDoubleClick = () => {
            this.callCustomAction(presetConfig, "double_tap_action");
        };

        return y`
            <div
                class="button exclude-on-click"
                @dblclick="${onDoubleClick}"
                @pointerdown="${onPointerDownFunc}"
                @pointerup="${onPointerUpFunc}"
            >
                <ha-icon class="exclude-on-click" icon="${presetConfig.icon}"></ha-icon>
                <span class="exclude-on-click">${presetConfig.name}</span>
                ${ripple}
            </div>
        `;
    }

    /**
     * Render card content
     * @returns html
     */
    renderContent() {
        if (this.config.disable_position) return y` ${this.renderFirstRow()} ${this.renderPresetsRow()} `;

        return y`${this.renderFirstRow()} ${this.renderSecondRow()} ${this.renderPresetsRow()}`;
    }

    /**
     * Render card container with content
     * @returns html
     */
    renderContainer() {
        return y`<div class="content" @click="${this.onMoreClick}">${this.renderContent()}</div>`;
    }

    /**
     * Adds template listener
     * @param {String} attribute
     * @param {String} template
     */
    addTemplate(attribute, template) {
        // Check if already defined
        if (attribute in this.templated) return;

        // Define variables
        let params = {};
        let variables = {
            entity: this.entityId,
            hash: location.hash.substr(1) || " ",
            ...params.variables,
        };
        var context = this;
        let onChange = function (result) {
            context.templated[attribute] = result;
            context.templated_changed = !context.templated_changed;
        };

        // Set init object and subscribe to connection
        context.templated[attribute] = true;
        this.hass.connection.subscribeMessage(onChange, {
            type: "render_template",
            template,
            variables,
        });
    }

    /**
     * Gets rendered template text
     * @param {string} attribute
     * @returns string
     */
    getTemplateText(attribute) {
        if (attribute in this.templated == false) return false;
        if (this.templated.attribute) return false;
        return this.templated[attribute].result;
    }

    /**
     * Before rendering html
     */
    preRender() {
        // Add template renderer
        let addConfigTemplate = (configAttribute, templateId) => {
            let configValue = this.config[configAttribute];
            if (configValue) this.addTemplate(templateId, configValue);
        };

        addConfigTemplate("position_template", "positionLabel");
        addConfigTemplate("title_template", "titleLabel");
    }

    /**
     * Render lovelace card
     * @returns html
     */
    render() {
        this.preRender();
        this.setMeta();

        // If card is part of group, root <ha-card> element is not needed
        if (this.config.group) return this.renderContainer();

        // Render card with <ha-card> element
        return y`<ha-card>${this.renderContainer()}</ha-card>`;
    }

    /*
        =========================================
        = DOM element handler
        =========================================
    */

    /**
     *  Get all important DOM elements
     * @returns Array
     */
    _getElements() {
        return {
            controls: this.renderRoot.querySelector("div.card-row.first-row div.controls"),
            slider: this.renderRoot.querySelector("div.card-row.second-row ha-slider"),
        };
    }

    /**
     * On move up pointer up
     */
    onMoveUpPointerUp() {
        let onClickCallback = (e) => {
            if (this.config.move_up_button && this.config.move_up_button.tap_action) {
                this.callCustomAction(this.config.move_up_button, "tap_action");
                return;
            }
            // Run default action
            if (this.upReached() && !this.config.ignore_state) return;
            this.hass.callService("cover", "open_cover", {
                entity_id: this.entityId,
            });
        };
        let onHoldCallback = (e) => {
            this.callCustomAction(this.config.move_up_button, "hold_action");
        };
        onPointerUp(this, onClickCallback, onHoldCallback);
    }

    /**
     *  On move up double click
     */
    onMoveUpDoubleClick() {
        this.callCustomAction(this.config.move_up_button, "double_tap_action");
    }

    /**
     * On move stop pointer up
     */
    onMoveStopPointerUp() {
        let onClickCallback = (e) => {
            if (this.config.move_stop_button && this.config.move_stop_button.tap_action) {
                this.callCustomAction(this.config.move_stop_button, "tap_action");
                return;
            }
            // Run default action
            if (this.state.attributes.moving == "STOP" && !this.config.ignore_state) return;
            this.hass.callService("cover", "stop_cover", {
                entity_id: this.entityId,
            });
        };
        let onHoldCallback = (e) => {
            this.callCustomAction(this.config.move_stop_button, "hold_action");
        };
        onPointerUp(this, onClickCallback, onHoldCallback);
    }

    /**
     * On move down double click
     */
    onMoveStopDoubleClick() {
        this.callCustomAction(this.config.move_stop_button, "double_tap_action");
    }

    /**
     * On move down pointer up
     */
    onMoveDownPointerUp() {
        let onClickCallback = (e) => {
            if (this.config.move_down_button && this.config.move_down_button.tap_action) {
                this.callCustomAction(this.config.move_down_button, "tap_action");
                return;
            }
            // Run default action
            if (this.downReached() && !this.config.ignore_state) return;
            this.hass.callService("cover", "close_cover", {
                entity_id: this.entityId,
            });
        };
        let onHoldCallback = (e) => {
            this.callCustomAction(this.config.move_down_button, "hold_action");
        };
        onPointerUp(this, onClickCallback, onHoldCallback);
    }

    /**
     * On move down double click
     */
    onMoveDownDoubleClick() {
        this.callCustomAction(this.config.move_down_button, "double_tap_action");
    }

    /**
     * On position input change
     */
    onSliderChange() {
        let elements = this._getElements();
        let value = parseInt(elements.slider.value);
        if (value == this.getPosition()) return;
        this.hass.callService("cover", "set_cover_position", {
            entity_id: this.entityId,
            position: this.config.invert_position ? 100 - value : value,
        });
    }

    /**
     * Open HA more info
     */
    onMoreClick(event) {
        // Exclude already binded elements
        if (event.target.classList.contains("exclude-on-click")) return;

        let entityId = this.config.entity;
        ne(
            this,
            "hass-more-info",
            {
                entityId,
            },
            {
                bubbles: false,
                composed: true,
            }
        );
    }
}

customElements.define(HASSIO_CARD_ID, ShutterRow);
console.info("%c" + HASSIO_CARD_NAME.toLocaleUpperCase() + " " + VERSION, "color: #ffa500");
