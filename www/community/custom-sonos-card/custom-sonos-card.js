function e(e,t,A,i){var s,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,A):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,A,i);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(r=(o<3?s(r):o>3?s(t,A,r):s(t,A))||r);return o>3&&r&&Object.defineProperty(t,A,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,A=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class o{constructor(e,t,A){if(this._$cssResult$=!0,A!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(A&&void 0===e){const A=void 0!==t&&1===t.length;A&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),A&&s.set(t,e))}return e}toString(){return this.cssText}}const r=(e,...t)=>{const A=1===e.length?e[0]:t.reduce(((t,A,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(A)+e[i+1]),e[0]);return new o(A,e,i)},n=A?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const A of e.cssRules)t+=A.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,i))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:E}=Object,g=globalThis,B=g.trustedTypes,Q=B?B.emptyScript:"",u=g.reactiveElementPolyfillSupport,p=(e,t)=>e,m={toAttribute(e,t){switch(t){case Boolean:e=e?Q:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let A=e;switch(t){case Boolean:A=null!==e;break;case Number:A=null===e?null:Number(e);break;case Object:case Array:try{A=JSON.parse(e)}catch(e){A=null}}return A}},v=(e,t)=>!a(e,t),f={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class C extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=f){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const A=Symbol(),i=this.getPropertyDescriptor(e,A,t);void 0!==i&&l(this.prototype,e,i)}}static getPropertyDescriptor(e,t,A){const{get:i,set:s}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){const o=i?.call(this);s.call(this,t),this.requestUpdate(e,o,A)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??f}static _$Ei(){if(this.hasOwnProperty(p("elementProperties")))return;const e=E(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(p("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(p("properties"))){const e=this.properties,t=[...d(e),...h(e)];for(const A of t)this.createProperty(A,e[A])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,A]of t)this.elementProperties.set(e,A)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const A=this._$Eu(e,t);void 0!==A&&this._$Eh.set(A,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const A=new Set(e.flat(1/0).reverse());for(const e of A)t.unshift(n(e))}else void 0!==e&&t.push(n(e));return t}static _$Eu(e,t){const A=t.attribute;return!1===A?void 0:"string"==typeof A?A:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const A of t.keys())this.hasOwnProperty(A)&&(e.set(A,this[A]),delete this[A]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{if(A)e.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const A of i){const i=document.createElement("style"),s=t.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=A.cssText,e.appendChild(i)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,A){this._$AK(e,A)}_$EC(e,t){const A=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,A);if(void 0!==i&&!0===A.reflect){const s=(void 0!==A.converter?.toAttribute?A.converter:m).toAttribute(t,A.type);this._$Em=e,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){const A=this.constructor,i=A._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=A.getPropertyOptions(i),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:m;this._$Em=i,this[i]=s.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,A){if(void 0!==e){if(A??=this.constructor.getPropertyOptions(e),!(A.hasChanged??v)(this[e],t))return;this.P(e,t,A)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,A){this._$AL.has(e)||this._$AL.set(e,t),!0===A.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,A]of e)!0!==A.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],A)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[p("elementProperties")]=new Map,C[p("finalized")]=new Map,u?.({ReactiveElement:C}),(g.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const y=globalThis,b=y.trustedTypes,I=b?b.createPolicy("lit-html",{createHTML:e=>e}):void 0,w="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,S="?"+P,V=`<${S}>`,L=document,O=()=>L.createComment(""),M=e=>null===e||"object"!=typeof e&&"function"!=typeof e,k=Array.isArray,H="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,x=/>/g,T=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,X=/"/g,j=/^(?:script|style|textarea|title)$/i,G=(e=>(t,...A)=>({_$litType$:e,strings:t,values:A}))(1),R=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),D=new WeakMap,q=L.createTreeWalker(L,129);function Z(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==I?I.createHTML(t):t}const J=(e,t)=>{const A=e.length-1,i=[];let s,o=2===t?"<svg>":"",r=z;for(let t=0;t<A;t++){const A=e[t];let n,a,l=-1,c=0;for(;c<A.length&&(r.lastIndex=c,a=r.exec(A),null!==a);)c=r.lastIndex,r===z?"!--"===a[1]?r=N:void 0!==a[1]?r=x:void 0!==a[2]?(j.test(a[2])&&(s=RegExp("</"+a[2],"g")),r=T):void 0!==a[3]&&(r=T):r===T?">"===a[0]?(r=s??z,l=-1):void 0===a[1]?l=-2:(l=r.lastIndex-a[2].length,n=a[1],r=void 0===a[3]?T:'"'===a[3]?X:U):r===X||r===U?r=T:r===N||r===x?r=z:(r=T,s=void 0);const d=r===T&&e[t+1].startsWith("/>")?" ":"";o+=r===z?A+V:l>=0?(i.push(n),A.slice(0,l)+w+A.slice(l)+P+d):A+P+(-2===l?t:d)}return[Z(e,o+(e[A]||"<?>")+(2===t?"</svg>":"")),i]};class Y{constructor({strings:e,_$litType$:t},A){let i;this.parts=[];let s=0,o=0;const r=e.length-1,n=this.parts,[a,l]=J(e,t);if(this.el=Y.createElement(a,A),q.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=q.nextNode())&&n.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(w)){const t=l[o++],A=i.getAttribute(e).split(P),r=/([.?@])?(.*)/.exec(t);n.push({type:1,index:s,name:r[2],strings:A,ctor:"."===r[1]?ee:"?"===r[1]?te:"@"===r[1]?Ae:_}),i.removeAttribute(e)}else e.startsWith(P)&&(n.push({type:6,index:s}),i.removeAttribute(e));if(j.test(i.tagName)){const e=i.textContent.split(P),t=e.length-1;if(t>0){i.textContent=b?b.emptyScript:"";for(let A=0;A<t;A++)i.append(e[A],O()),q.nextNode(),n.push({type:2,index:++s});i.append(e[t],O())}}}else if(8===i.nodeType)if(i.data===S)n.push({type:2,index:s});else{let e=-1;for(;-1!==(e=i.data.indexOf(P,e+1));)n.push({type:7,index:s}),e+=P.length-1}s++}}static createElement(e,t){const A=L.createElement("template");return A.innerHTML=e,A}}function F(e,t,A=e,i){if(t===R)return t;let s=void 0!==i?A._$Co?.[i]:A._$Cl;const o=M(t)?void 0:t._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),void 0===o?s=void 0:(s=new o(e),s._$AT(e,A,i)),void 0!==i?(A._$Co??=[])[i]=s:A._$Cl=s),void 0!==s&&(t=F(e,s._$AS(e,t.values),s,i)),t}class K{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:A}=this._$AD,i=(e?.creationScope??L).importNode(t,!0);q.currentNode=i;let s=q.nextNode(),o=0,r=0,n=A[0];for(;void 0!==n;){if(o===n.index){let t;2===n.type?t=new $(s,s.nextSibling,this,e):1===n.type?t=new n.ctor(s,n.name,n.strings,this,e):6===n.type&&(t=new ie(s,this,e)),this._$AV.push(t),n=A[++r]}o!==n?.index&&(s=q.nextNode(),o++)}return q.currentNode=L,i}p(e){let t=0;for(const A of this._$AV)void 0!==A&&(void 0!==A.strings?(A._$AI(e,A,t),t+=A.strings.length-2):A._$AI(e[t])),t++}}class ${get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,A,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=A,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=F(this,e,t),M(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==R&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>k(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==W&&M(this._$AH)?this._$AA.nextSibling.data=e:this.T(L.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:A}=e,i="number"==typeof A?this._$AC(e):(void 0===A.el&&(A.el=Y.createElement(Z(A.h,A.h[0]),this.options)),A);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new K(i,this),A=e.u(this.options);e.p(t),this.T(A),this._$AH=e}}_$AC(e){let t=D.get(e.strings);return void 0===t&&D.set(e.strings,t=new Y(e)),t}k(e){k(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let A,i=0;for(const s of e)i===t.length?t.push(A=new $(this.S(O()),this.S(O()),this,this.options)):A=t[i],A._$AI(s),i++;i<t.length&&(this._$AR(A&&A._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class _{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,A,i,s){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,A.length>2||""!==A[0]||""!==A[1]?(this._$AH=Array(A.length-1).fill(new String),this.strings=A):this._$AH=W}_$AI(e,t=this,A,i){const s=this.strings;let o=!1;if(void 0===s)e=F(this,e,t,0),o=!M(e)||e!==this._$AH&&e!==R,o&&(this._$AH=e);else{const i=e;let r,n;for(e=s[0],r=0;r<s.length-1;r++)n=F(this,i[A+r],t,r),n===R&&(n=this._$AH[r]),o||=!M(n)||n!==this._$AH[r],n===W?e=W:e!==W&&(e+=(n??"")+s[r+1]),this._$AH[r]=n}o&&!i&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ee extends _{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}}class te extends _{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==W)}}class Ae extends _{constructor(e,t,A,i,s){super(e,t,A,i,s),this.type=5}_$AI(e,t=this){if((e=F(this,e,t,0)??W)===R)return;const A=this._$AH,i=e===W&&A!==W||e.capture!==A.capture||e.once!==A.once||e.passive!==A.passive,s=e!==W&&(A===W||i);i&&this.element.removeEventListener(this.name,this,A),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ie{constructor(e,t,A){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=A}get _$AU(){return this._$AM._$AU}_$AI(e){F(this,e)}}const se=y.litHtmlPolyfillSupport;se?.(Y,$),(y.litHtmlVersions??=[]).push("3.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class oe extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,A)=>{const i=A?.renderBefore??t;let s=i._$litPart$;if(void 0===s){const e=A?.renderBefore??null;i._$litPart$=s=new $(t.insertBefore(O(),e),e,void 0,A??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return R}}oe._$litElement$=!0,oe.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:oe});const re=globalThis.litElementPolyfillSupport;re?.({LitElement:oe}),(globalThis.litElementVersions??=[]).push("4.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ne={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:v},ae=(e=ne,t,A)=>{const{kind:i,metadata:s}=A;let o=globalThis.litPropertyMetadata.get(s);if(void 0===o&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(A.name,e),"accessor"===i){const{name:i}=A;return{set(A){const s=t.get.call(this);t.set.call(this,A),this.requestUpdate(i,s,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){const{name:i}=A;return function(A){const s=this[i];t.call(this,A),this.requestUpdate(i,s,e)}}throw Error("Unsupported decorator location: "+i)};function le(e){return(t,A)=>"object"==typeof A?ae(e,t,A):((e,t,A)=>{const i=t.hasOwnProperty(A);return t.constructor.createProperty(A,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,A):void 0})(e,t,A)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ce(e){return le({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=(e,t,A)=>(A.configurable=!0,A.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,A),A)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var he,Ee;!function(e){e.MEDIA_BROWSER="media browser",e.GROUPS="groups",e.PLAYER="player",e.GROUPING="grouping",e.VOLUMES="volumes"}(he||(he={})),function(e){e[e.PAUSE=1]="PAUSE",e[e.SEEK=2]="SEEK",e[e.VOLUME_SET=4]="VOLUME_SET",e[e.VOLUME_MUTE=8]="VOLUME_MUTE",e[e.PREVIOUS_TRACK=16]="PREVIOUS_TRACK",e[e.NEXT_TRACK=32]="NEXT_TRACK",e[e.TURN_ON=128]="TURN_ON",e[e.TURN_OFF=256]="TURN_OFF",e[e.PLAY_MEDIA=512]="PLAY_MEDIA",e[e.VOLUME_BUTTONS=1024]="VOLUME_BUTTONS",e[e.SELECT_SOURCE=2048]="SELECT_SOURCE",e[e.STOP=4096]="STOP",e[e.CLEAR_PLAYLIST=8192]="CLEAR_PLAYLIST",e[e.PLAY=16384]="PLAY",e[e.SHUFFLE_SET=32768]="SHUFFLE_SET",e[e.SELECT_SOUND_MODE=65536]="SELECT_SOUND_MODE",e[e.BROWSE_MEDIA=131072]="BROWSE_MEDIA",e[e.REPEAT_SET=262144]="REPEAT_SET",e[e.GROUPING=524288]="GROUPING"}(Ee||(Ee={}));var ge="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",Be="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",Qe="M20.71,7.04C20.37,7.38 20.04,7.71 20.03,8.04C20,8.36 20.34,8.69 20.66,9C21.14,9.5 21.61,9.95 21.59,10.44C21.57,10.93 21.06,11.44 20.55,11.94L16.42,16.08L15,14.66L19.25,10.42L18.29,9.46L16.87,10.87L13.12,7.12L16.96,3.29C17.35,2.9 18,2.9 18.37,3.29L20.71,5.63C21.1,6 21.1,6.65 20.71,7.04M3,17.25L12.56,7.68L16.31,11.43L6.75,21H3V17.25Z",ue="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",pe="M3,9H7L12,4V20L7,15H3V9M14,11H22V13H14V11Z",me="M3,9H7L12,4V20L7,15H3V9M14,11H17V8H19V11H22V13H19V16H17V13H14V11Z";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ve(e,t,A){return e?t(e):A?.(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=1,Ce=2,ye=e=>(...t)=>({_$litDirective$:e,values:t});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class be{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,A){this._$Ct=e,this._$AM=t,this._$Ci=A}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ie=(e,t)=>{const A=e._$AN;if(void 0===A)return!1;for(const e of A)e._$AO?.(t,!1),Ie(e,t);return!0},we=e=>{let t,A;do{if(void 0===(t=e._$AM))break;A=t._$AN,A.delete(e),e=t}while(0===A?.size)},Pe=e=>{for(let t;t=e._$AM;e=t){let A=t._$AN;if(void 0===A)t._$AN=A=new Set;else if(A.has(e))break;A.add(e),Le(t)}};function Se(e){void 0!==this._$AN?(we(this),this._$AM=e,Pe(this)):this._$AM=e}function Ve(e,t=!1,A=0){const i=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(t)if(Array.isArray(i))for(let e=A;e<i.length;e++)Ie(i[e],!1),we(i[e]);else null!=i&&(Ie(i,!1),we(i));else Ie(this,e)}const Le=e=>{e.type==Ce&&(e._$AP??=Ve,e._$AQ??=Se)};class Oe extends be{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,A){super._$AT(e,t,A),Pe(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Ie(this,e),we(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Me{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}}class ke{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise((e=>this.q=e))}resume(){this.q?.(),this.Z=this.q=void 0}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const He=e=>!(e=>null===e||"object"!=typeof e&&"function"!=typeof e)(e)&&"function"==typeof e.then,ze=1073741823;const Ne=ye(class extends Oe{constructor(){super(...arguments),this._$Cwt=ze,this._$Cbt=[],this._$CK=new Me(this),this._$CX=new ke}render(...e){return e.find((e=>!He(e)))??R}update(e,t){const A=this._$Cbt;let i=A.length;this._$Cbt=t;const s=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){const r=t[e];if(!He(r))return this._$Cwt=e,r;e<i&&r===A[e]||(this._$Cwt=ze,i=0,Promise.resolve(r).then((async e=>{for(;o.get();)await o.get();const t=s.deref();if(void 0!==t){const A=t._$Cbt.indexOf(r);A>-1&&A<t._$Cwt&&(t._$Cwt=A,t.setValue(e))}})))}return R}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}),{SHUFFLE_SET:xe,REPEAT_SET:Te,PLAY:Ue,PAUSE:Xe,NEXT_TRACK:je,PREVIOUS_TRACK:Ge}=Ee;class Re extends oe{constructor(){super(...arguments),this.volDown=async()=>await this.mediaControlService.volumeDown(this.volumePlayer,!this.config.playerVolumeEntityId),this.volUp=async()=>await this.mediaControlService.volumeUp(this.volumePlayer,!this.config.playerVolumeEntityId)}render(){var e;this.config=this.store.config,this.activePlayer=this.store.activePlayer,this.mediaControlService=this.store.mediaControlService;const t=!!this.config.showVolumeUpAndDownButtons&&W;return this.volumePlayer=null!==(e=this.activePlayer.getMember(this.config.playerVolumeEntityId))&&void 0!==e?e:this.activePlayer,G`
      <div class="main" id="mediaControls">
        ${ve(["paused","playing"].includes(this.activePlayer.state),(()=>G`
            <div class="icons">
              <div class="flex-1"></div>
              <ha-icon-button hide=${t} @click=${this.volDown} .path=${pe}></ha-icon-button>
              <sonos-ha-player .store=${this.store} .features=${[xe,Ge]}></sonos-ha-player>
              <sonos-ha-player .store=${this.store} .features=${[Ue,Xe]} class="big-icon"></sonos-ha-player>
              <sonos-ha-player .store=${this.store} .features=${[je,Te]}></sonos-ha-player>
              <ha-icon-button hide=${t} @click=${this.volUp} .path=${me}></ha-icon-button>
              <div class="audio-input-format">
                ${this.config.showAudioInputFormat&&Ne(this.getAudioInputFormat())}
              </div>
            </div>
            <sonos-volume
              .store=${this.store}
              .player=${this.volumePlayer}
              .updateMembers=${!this.config.playerVolumeEntityId}
            ></sonos-volume>
          `))}
      </div>
    `}async getAudioInputFormat(){const e=(await this.store.hassService.getRelatedEntities(this.activePlayer,"sensor")).find((e=>e.entity_id.includes("audio_input_format")));return e&&e.state&&"No audio"!==e.state?G`<div>${e.state}</div>`:""}static get styles(){return r`
      .main {
        overflow: hidden auto;
      }
      .icons {
        justify-content: center;
        display: flex;
        align-items: center;
      }
      .icons > *[hide] {
        display: none;
      }
      .big-icon {
        --mdc-icon-button-size: 5rem;
        --mdc-icon-size: 5rem;
      }
      .audio-input-format {
        flex: 1 0 0;
        margin-bottom: 10px;
        text-align: center;
        align-self: stretch;
        position: relative;
      }
      .audio-input-format > div {
        color: var(--card-background-color);
        background: var(--disabled-text-color);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        position: absolute;
        bottom: 0;
        right: 0;
        max-width: 100%;
        font-size: smaller;
        line-height: normal;
        padding: 3px;
      }
      .flex-1 {
        flex: 1;
      }
    `}}e([le({attribute:!1})],Re.prototype,"store",void 0),customElements.define("sonos-player-controls",Re);const We="sonos-card-dispatch-event-",De="active-player",qe=We+De,Ze=`${We}call-media-started`,Je=`${We}call-media-done`,Ye="item-selected",Fe=r`
  .list {
    --mdc-theme-primary: var(--accent-color);
    --mdc-list-vertical-padding: 0px;
    overflow: hidden;
  }
`,Ke=r`
  .title {
    color: var(--secondary-text-color);
    font-weight: bold;
    padding: 0 0.5rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;function $e(e,t=[]){const A=e.members.map((e=>e.id)).sort();if(null==t?void 0:t.length){const e=t.find((e=>e.entities.map((e=>e.player.id)).sort().toString()===A.toString()));if(e)return e.name}return e.members.map((e=>e.name)).join(" + ")}function _e(e,t,A){et(t)?function(e,t){const A=tt(e,t);window.dispatchEvent(A)}(qe,{entityId:e}):A.dispatchEvent(tt(De,{entityId:e}))}function et(e){return e.sections&&e.sections.length<Object.keys(he).length}function tt(e,t){return new CustomEvent(e,{bubbles:!0,composed:!0,detail:t})}const At=40;function it(e){return e?e/100*At:At}function st(e){return e.attributes.sonos_group||e.attributes.group_members||[e.entity_id]}class ot extends oe{render(){this.config=this.store.config,this.activePlayer=this.store.activePlayer;const e=$e(this.activePlayer,this.store.predefinedGroups);let t=this.activePlayer.getCurrentTrack();return t=t||this.config.labelWhenNoMediaIsSelected||"No media selected",G` <div class="info">
      <div class="entity">${e}</div>
      <div class="song">${t}</div>
      <div class="artist-album">${this.activePlayer.attributes.media_album_name}</div>
      <sonos-progress .store=${this.store}></sonos-progress>
    </div>`}static get styles(){return r`
      .info {
        text-align: center;
      }

      .entity {
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 1rem;
        font-weight: 500;
        color: var(--secondary-text-color);
        white-space: nowrap;
      }

      .song {
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 1.15rem;
        font-weight: 400;
        color: var(--accent-color);
      }

      .artist-album {
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 1rem;
        font-weight: 300;
        color: var(--secondary-text-color);
      }
    `}}e([le({attribute:!1})],ot.prototype,"store",void 0),customElements.define("sonos-player-header",ot);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt="important",nt=" !"+rt,at=ye(class extends be{constructor(e){if(super(e),e.type!==fe||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,A)=>{const i=e[A];return null==i?t:t+`${A=A.includes("-")?A:A.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(e,[t]){const{style:A}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?A.removeProperty(e):A[e]=null);for(const e in t){const i=t[e];if(null!=i){this.ft.add(e);const t="string"==typeof i&&i.endsWith(nt);e.includes("-")||t?A.setProperty(e,t?i.slice(0,-11):i,t?rt:""):A[e]=i}}return R}});class lt extends oe{constructor(){super(...arguments),this.mediaDuration=0}disconnectedCallback(){this.tracker&&(clearInterval(this.tracker),this.tracker=void 0),super.disconnectedCallback()}render(){var e;this.activePlayer=this.store.activePlayer,this.mediaDuration=(null===(e=this.activePlayer)||void 0===e?void 0:e.attributes.media_duration)||0;return this.mediaDuration>0?(this.trackProgress(),G`
        <div class="progress">
          <span>${ct(this.playingProgress)}</span>
          <div class="bar" @click=${this.handleSeek}>
            <div class="progress-bar" style=${this.progressBarStyle(this.mediaDuration)}></div>
          </div>
          <span> -${ct(this.mediaDuration-this.playingProgress)}</span>
        </div>
      `):G``}async handleSeek(e){const t=this.progressBar.offsetWidth,A=e.offsetX/t,i=this.mediaDuration*A;await this.store.mediaControlService.seek(this.activePlayer,i)}progressBarStyle(e){return at({width:this.playingProgress/e*100+"%"})}trackProgress(){var e,t,A;const i=(null===(e=this.activePlayer)||void 0===e?void 0:e.attributes.media_position)||0,s=null===(t=this.activePlayer)||void 0===t?void 0:t.isPlaying(),o=(null===(A=this.activePlayer)||void 0===A?void 0:A.attributes.media_position_updated_at)||0;this.playingProgress=s?i+(Date.now()-new Date(o).getTime())/1e3:i,this.tracker||(this.tracker=setInterval((()=>this.trackProgress()),1e3)),s||(clearInterval(this.tracker),this.tracker=void 0)}static get styles(){return r`
      .progress {
        width: 100%;
        font-size: x-small;
        display: flex;
        --paper-progress-active-color: lightgray;
      }

      .bar {
        display: flex;
        flex-grow: 1;
        align-items: center;
        padding: 5px;
        cursor: pointer;
      }

      .progress-bar {
        background-color: var(--accent-color);
        height: 50%;
        transition: width 0.1s linear;
      }
    `}}e([le({attribute:!1})],lt.prototype,"store",void 0),e([ce()],lt.prototype,"playingProgress",void 0),e([function(e,t){return(A,i,s)=>{const o=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof i?A:s??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return de(A,i,{get(){let A=e.call(this);return void 0===A&&(A=o(this),(null!==A||this.hasUpdated)&&t.call(this,A)),A}})}return de(A,i,{get(){return o(this)}})}}(".bar")],lt.prototype,"progressBar",void 0);const ct=e=>{const t=new Date(1e3*e).toISOString().substring(11,19);return t.startsWith("00:")?t.substring(3):t};customElements.define("sonos-progress",lt);const{TURN_ON:dt,TURN_OFF:ht}=Ee;class Et extends oe{constructor(){super(...arguments),this.updateMembers=!0,this.slim=!1}render(){this.config=this.store.config,this.mediaControlService=this.store.mediaControlService;const e=this.player.getVolume(),t=this.getMax(e),A=this.player.isMuted(this.updateMembers)?"M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z":"M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z",i=this.player.ignoreVolume,s=(this.player.attributes.supported_features||0)&dt&&W;return G`
      <div class="volume" slim=${this.slim||W}>
        <ha-icon-button .disabled=${i} @click=${this.mute} .path=${A}> </ha-icon-button>
        <div class="volume-slider">
          <ha-control-slider
            .value=${e}
            max=${t}
            @value-changed=${this.volumeChanged}
            .disabled=${i}
            class=${this.config.dynamicVolumeSlider&&100===t?"over-threshold":""}
          ></ha-control-slider>
          <div class="volume-level">
            <div style="flex: ${e}">0%</div>
            <div class="percentage">${e}%</div>
            <div style="flex: ${t-e};text-align: right">${t}%</div>
          </div>
        </div>
        <div class="percentage-slim" hide=${this.slim&&W}>${e}%</div>
        <sonos-ha-player
          hide=${s}
          .store=${this.store}
          .features=${[dt,ht]}
        ></sonos-ha-player>
      </div>
    `}getMax(e){var t,A;const i=Math.max(0,Math.min(null!==(t=this.config.dynamicVolumeSliderThreshold)&&void 0!==t?t:20,100)),s=Math.max(0,Math.min(null!==(A=this.config.dynamicVolumeSliderMax)&&void 0!==A?A:30,100));return e<i&&this.config.dynamicVolumeSlider?s:100}async volumeChanged(e){const t=function(e){var t;return Number.parseInt(null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value)}(e);return await this.mediaControlService.volumeSet(this.player,t,this.updateMembers)}async mute(){return await this.mediaControlService.toggleMute(this.player,this.updateMembers)}static get styles(){return r`
      ha-control-slider {
        --control-slider-color: var(--accent-color);
      }

      ha-control-slider.over-threshold {
        --control-slider-color: var(--primary-text-color);
      }

      ha-control-slider[disabled] {
        --control-slider-color: var(--disabled-text-color);
      }

      *[slim] * {
        --control-slider-thickness: 10px;
        --mdc-icon-button-size: 30px;
        --mdc-icon-size: 20px;
      }

      *[slim] .volume-level {
        display: none;
      }

      .volume {
        display: flex;
        flex: 1;
      }

      .volume-slider {
        flex: 1;
        padding-right: 0.6rem;
      }

      *[slim] .volume-slider {
        display: flex;
        align-items: center;
      }

      .volume-level {
        font-size: x-small;
        display: flex;
      }

      .percentage {
        flex: 2;
      }

      .percentage,
      .percentage-slim {
        font-weight: bold;
        font-size: 12px;
        align-self: center;
      }

      *[hide] {
        display: none;
      }
    `}}e([le({attribute:!1})],Et.prototype,"store",void 0),e([le({attribute:!1})],Et.prototype,"player",void 0),e([le({type:Boolean})],Et.prototype,"updateMembers",void 0),e([le()],Et.prototype,"volumeClicked",void 0),e([le()],Et.prototype,"slim",void 0),customElements.define("sonos-volume",Et);class gt extends oe{render(){this.config=this.store.config,this.activePlayer=this.store.activePlayer;const e=this.config.artworkAsBackground;return G`
      <div class="container" style=${e&&this.getBackgroundImage()}>
        <sonos-player-header
          class="header"
          background=${e||W}
          .store=${this.store}
        ></sonos-player-header>
        <div class="artwork" hide=${e||W} style=${this.artworkStyle()}></div>
        <sonos-player-controls
          class="controls"
          background=${e||W}
          .store=${this.store}
        ></sonos-player-controls>
      </div>
    `}artworkStyle(){var e;const t=null!==(e=this.config.artworkMinHeight)&&void 0!==e?e:5;return`${this.getBackgroundImage()}; min-height: ${t}rem`}getBackgroundImage(){var e;const t=`url(${null!==(e=this.config.fallbackArtwork)&&void 0!==e?e:"TV"===this.activePlayer.attributes.media_title?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAAJZlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgExAAIAAAARAAAAWodpAAQAAAABAAAAbAAAAAAAAABiAAAAAQAAAGIAAAABd3d3Lmlua3NjYXBlLm9yZwAAAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAgCgAwAEAAAAAQAAAgAAAAAA+uiskAAAAAlwSFlzAAAPEgAADxIBIZvyMwAAAi1pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+d3d3Lmlua3NjYXBlLm9yZzwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj45ODwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+OTg8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgrH52sKAAA/4klEQVR4Ae3dCZAc13nY8dfHzOwNYAHiJAACIMAD4iFRlE3JsSSrSrLiWLEdQ7FNy5KllBLHRcV27NiupFKoVBLfsUNVJVVWJNqMFCuCY7ssu2jZkgWVbFG2RJGmSIgkTuIGcew1uztHH/m+Hiw0A+wxs9Mz093zb2mJObpfv/frmXlfv379njEsCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAgggkAgBKxG5IBMI9JnA29520L3zzbn1VjW3xbeDET8IQjNgT7rF0oWP//bBCeEIM0ZifehnD67zRga22BWzRn54bCewi2GueuHYV6pXDx8+6GWsvBQHgcQLEAAk/hCRwawJ/MQv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AQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBGIQ+P9v6JX0ZgeS/gAAAABJRU5ErkJggg==":"data:image/png;base64,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AQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAIEGFvj/AdpNbG+v3HHWAAAAAElFTkSuQmCC"})`,A=this.getArtworkImage();return A?`background-image: url(${A.entityImage}), ${t}${A.sizePercentage?`; background-size: ${A.sizePercentage}%`:""}`:`background-image: ${t}`}getArtworkImage(){var e;const t=this.config.artworkHostname||"",{media_title:A,media_artist:i,media_album_name:s,media_content_id:o,media_channel:r,entity_picture:n}=this.activePlayer.attributes;let a,l=n?t+n:n;const c=this.config.mediaArtworkOverrides;if(c){let t=c.find((e=>A&&A===e.mediaTitleEquals||i&&i===e.mediaArtistEquals||s&&s===e.mediaAlbumNameEquals||r&&r===e.mediaChannelEquals||o&&o===e.mediaContentIdEquals));t||(t=c.find((e=>!l&&e.ifMissing))),(null==t?void 0:t.imageUrl)&&(l=t.imageUrl,a=null!==(e=null==t?void 0:t.sizePercentage)&&void 0!==e?e:a)}return{entityImage:l,sizePercentage:a}}static get styles(){return r`
      .hoverable:focus,
      .hoverable:hover {
        color: var(--accent-color);
      }

      .hoverable:active {
        color: var(--primary-color);
      }

      .container {
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: min-content auto min-content;
        grid-template-areas:
          'header'
          'artwork'
          'controls';
        min-height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }

      .header {
        grid-area: header;
        margin: 0.75rem 3.25rem;
        padding: 0.5rem;
      }

      .controls {
        grid-area: controls;
        overflow-y: auto;
        margin: 0.25rem;
        padding: 0.5rem;
      }

      .artwork {
        grid-area: artwork;
        align-self: center;
        flex-grow: 1;
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        min-height: 5rem;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
      }

      *[hide] {
        display: none;
      }

      *[background] {
        background-color: rgba(var(--rgb-card-background-color), 0.9);
        border-radius: 10px;
      }
    `}}e([le({attribute:!1})],gt.prototype,"store",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Bt=(e,t,A)=>{for(const A of t)if(A[0]===e)return(0,A[1])();return A?.()};class Qt{constructor(e,t,A,i){this.hass=e,this.currentSection=t,this.card=A,this.config=i}async callMediaService(e,t){this.card.dispatchEvent(tt(Ze,{section:this.currentSection}));try{await this.hass.callService("media_player",e,t)}finally{this.card.dispatchEvent(tt(Je))}}async browseMedia(e,t,A){var i;const s=await this.hass.callWS({type:"media_player/browse_media",entity_id:e.id,media_content_id:A,media_content_type:t});return this.config.replaceHttpWithHttpsForThumbnails&&(s.children=null===(i=s.children)||void 0===i?void 0:i.map((e=>{var t;return Object.assign(Object.assign({},e),{thumbnail:null===(t=e.thumbnail)||void 0===t?void 0:t.replace("http://","https://")})}))),s}async getRelatedEntities(e,...t){return new Promise((async(A,i)=>{const s={type:"render_template",template:"{{ device_entities(device_id('"+e.id+"')) }}"};try{const e=await this.hass.connection.subscribeMessage((i=>{e(),A(i.result.filter((e=>t.some((t=>e.includes(t))))).map((e=>this.hass.states[e])))}),s)}catch(e){i(e)}}))}}const ut="data:image/png;base64,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";function pt(e,t){for(const A in e)if(mt(A)===mt(t))return e[A]}function mt(e){return e.replace(/[^a-zA-Z ]/g,"")}function vt(e,t){let A=-1;return e.forEach(((e,i)=>{mt(e)===mt(t)&&(A=i)})),A}function ft(e,t){const A=e.some((e=>e.thumbnail));return e.map((e=>{const i=function(e,t,A){var i,s;let o=null!==(i=pt(t.customThumbnail,e.title))&&void 0!==i?i:e.thumbnail;return o?(null==o?void 0:o.match(/https:\/\/brands\.home-assistant\.io\/.+\/logo.png/))&&(o=null==o?void 0:o.replace("logo.png","icon.png")):(o=pt(t.customThumbnailIfMissing,e.title),A&&!o&&(o=(null===(s=t.customThumbnailIfMissing)||void 0===s?void 0:s.default)||ut)),o||""}(e,t,A);return Object.assign(Object.assign({},e),{thumbnail:i})}))}function Ct(e,t){return G`
    <style>
      .button:nth-of-type(${t+1}) .thumbnail {
        background-image: url(${e});
      }
    </style>
  `}function yt(e,t=!0){return G`
    <div class="thumbnail" ?hidden=${!e.thumbnail}></div>
    <div class="title" ?hidden=${!t}>${e.title}</div>
  `}class bt{constructor(e,t){this.hassService=e,this.config=t}async getFavorites(e){if(!e)return[];let t=await this.getFavoritesForPlayer(e);return t=t.flatMap((e=>e)),t=this.removeDuplicates(t),t=t.length?t:this.getFavoritesFromStates(e),t.filter((e=>{var t;return-1===vt(null!==(t=this.config.favoritesToIgnore)&&void 0!==t?t:[],e.title)}))}removeDuplicates(e){return e.filter(((e,t,A)=>t===A.findIndex((t=>t.title===e.title))))}async getFavoritesForPlayer(e){var t;try{const A=null===(t=(await this.hassService.browseMedia(e,"favorites","")).children)||void 0===t?void 0:t.map((t=>this.hassService.browseMedia(e,t.media_content_type,t.media_content_id)));return(A?await Promise.all(A):[]).flatMap((e=>{var t;return null!==(t=e.children)&&void 0!==t?t:[]}))}catch(t){return console.log("Custom Sonos Card: error getting favorites for player "+e.id+": "+JSON.stringify(t)),[]}}getFavoritesFromStates(e){return(e.attributes.hasOwnProperty("source_list")?e.attributes.source_list:[]).map((e=>({title:e})))}}class It{constructor(e,t){this.hassService=e,this.config=t}async join(e,t){await this.hassService.callMediaService("join",{entity_id:e,group_members:t})}async unJoin(e){await this.hassService.callMediaService("unjoin",{entity_id:e})}async setVolumeAndMediaForPredefinedGroup(e){var t;for(const A of e.entities){const i=null!==(t=A.volume)&&void 0!==t?t:e.volume;i&&await this.volumeSetSinglePlayer(A.player,i),e.unmuteWhenGrouped&&await this.setVolumeMute(A.player,!1,!1)}e.media&&await this.setSource(e.entities[0].player,e.media)}async volumeDown(e,t=!0){await this.volumeStep(e,t,this.getStepDownVolume,"volume_down")}async volumeUp(e,t=!0){await this.volumeStep(e,t,this.getStepUpVolume,"volume_up")}async volumeStep(e,t,A,i){this.config.volumeStepSize?await this.volumeWithStepSize(e,t,this.config.volumeStepSize,A):await this.volumeDefaultStep(e,t,i)}async volumeWithStepSize(e,t,A,i){for(const s of e.members)if(e.id===s.id||t){const e=i(s,A);await this.volumeSetSinglePlayer(s,e)}}getStepDownVolume(e,t){return Math.max(0,e.getVolume()-t)}getStepUpVolume(e,t){return Math.min(100,e.getVolume()+t)}async volumeDefaultStep(e,t,A){for(const i of e.members)(e.id===i.id||t)&&(i.ignoreVolume||await this.hassService.callMediaService(A,{entity_id:i.id}))}async volumeSet(e,t,A){return A?await this.volumeSetGroup(e,t):await this.volumeSetSinglePlayer(e,t)}async volumeSetGroup(e,t){let A;this.config.adjustVolumeRelativeToMainPlayer&&(A=t/e.getVolume()),await Promise.all(e.members.map((e=>{let i=t;return void 0!==A&&this.config.adjustVolumeRelativeToMainPlayer&&(i=e.getVolume()*A,i=Math.min(100,Math.max(0,i))),this.volumeSetSinglePlayer(e,i)})))}async volumeSetSinglePlayer(e,t){if(!e.ignoreVolume){const A=t/100;await this.hassService.callMediaService("volume_set",{entity_id:e.id,volume_level:A})}}async toggleMute(e,t=!0){const A=!e.isMuted(t);await this.setVolumeMute(e,A,t)}async setVolumeMute(e,t,A=!0){for(const i of e.members)(e.id===i.id||A)&&await this.hassService.callMediaService("volume_mute",{entity_id:i.id,is_volume_muted:t})}async setSource(e,t){await this.hassService.callMediaService("select_source",{source:t,entity_id:e.id})}async playMedia(e,t){await this.hassService.callMediaService("play_media",{entity_id:e.id,media_content_id:t.media_content_id,media_content_type:t.media_content_type})}async seek(e,t){await this.hassService.callMediaService("media_seek",{entity_id:e.id,seek_position:t})}}class wt{constructor(e,t,A){var i;this.id=e.entity_id,this.config=t,this.name=this.getEntityName(e,t),this.state=e.state,this.attributes=e.attributes,this.members=A?this.createGroupMembers(e,A):[this],this.volumePlayer=this.determineVolumePlayer(),this.ignoreVolume=!!(null===(i=this.config.entitiesToIgnoreVolumeLevelFor)||void 0===i?void 0:i.includes(this.volumePlayer.id))}getMember(e){return this.members.find((t=>t.id===e))}hasMember(e){return void 0!==this.getMember(e)}isPlaying(){return"playing"===this.state}isMuted(e){return this.attributes.is_volume_muted&&(!e||this.members.every((e=>e.isMuted(!1))))}getCurrentTrack(){return`${this.attributes.media_artist||""} - ${this.attributes.media_title||""}`.replace(/^ - | - $/g,"")}getEntityName(e,t){const A=e.attributes.friendly_name||"";return t.entityNameRegexToReplace?A.replace(new RegExp(t.entityNameRegexToReplace,"g"),t.entityNameReplacement||""):A}createGroupMembers(e,t){return st(e).reduce(((e,A)=>{const i=t.find((e=>e.entity_id===A));return i?[...e,new wt(i,this.config)]:e}),[])}determineVolumePlayer(){let e;return this.members.length>1&&this.config.entitiesToIgnoreVolumeLevelFor&&(e=this.members.find((e=>{var t;return!(null===(t=this.config.entitiesToIgnoreVolumeLevelFor)||void 0===t?void 0:t.includes(e.id))}))),null!=e?e:this}getVolume(){let e;return e=this.members.length>1&&this.config.adjustVolumeRelativeToMainPlayer?this.getAverageVolume():100*this.volumePlayer.attributes.volume_level,Math.round(e)}getAverageVolume(){const e=this.members.filter((e=>{var t;return!(null===(t=this.config.entitiesToIgnoreVolumeLevelFor)||void 0===t?void 0:t.includes(e.id))})).map((e=>e.attributes.volume_level));return 100*e.reduce(((e,t)=>e+t),0)/e.length}}class Pt{constructor(e,t,A,i,s){this.hass=e,this.config=t;const o=this.getMediaPlayerHassEntities(this.hass);this.allGroups=this.createPlayerGroups(o),this.allMediaPlayers=this.allGroups.reduce(((e,t)=>[...e,...t.members]),[]).sort(((e,t)=>e.name.localeCompare(t.name))),this.activePlayer=this.determineActivePlayer(s),this.hassService=new Qt(this.hass,A,i,t),this.mediaControlService=new It(this.hassService,t),this.mediaBrowseService=new bt(this.hassService,t),this.predefinedGroups=this.createPredefinedGroups()}createPredefinedGroups(){const e=[];if(this.config.predefinedGroups)for(const t of this.config.predefinedGroups){const A=this.createPredefinedGroup(t);A&&e.push(A)}return e}createPredefinedGroup(e){let t;const A=[];let i=e.entities;e.excludeItemsInEntitiesList&&(i=this.convertExclusionsInPredefinedGroupsToInclusions(i));for(const e of i){const t=this.createPredefinedGroupPlayer(e);t&&A.push(t)}return A.length&&(t=Object.assign(Object.assign({},e),{entities:A})),t}convertExclusionsInPredefinedGroupsToInclusions(e){return this.allMediaPlayers.filter((t=>!e.find((e=>("string"==typeof e?e:e.player)===t.id)))).map((e=>e.id))}createPredefinedGroupPlayer(e){var t;let A,i,s;if("string"==typeof e?A=e:(i=e.volume,A=e.player),"unavailable"!==(null===(t=this.hass.states[A])||void 0===t?void 0:t.state)){const e=this.allMediaPlayers.find((e=>e.id===A));e&&(s={player:e,volume:i})}else console.warn(`Player ${A} is unavailable`);return s}getMediaPlayerHassEntities(e){const t=e,A=[...new Set(this.config.entities)];return Object.values(e.states).filter((e=>{var i,s,o;if(e.entity_id.includes("media_player")){const r=null===(s=null===(i=t.entities)||void 0===i?void 0:i[e.entity_id])||void 0===s?void 0:s.platform,n=!!(null===(o=e.attributes)||void 0===o?void 0:o.group_members);if(!r&&n||this.config.showNonSonosPlayers||"sonos"===r){if(A.length){const t=A.includes(e.entity_id);return!!this.config.excludeItemsInEntitiesList!==t}return!0}}return!1})).sort(((e,t)=>e.entity_id.localeCompare(t.entity_id)))}createPlayerGroups(e){return e.filter((t=>this.isMainPlayer(t,e))).map((t=>this.createPlayerGroup(t,e))).filter((e=>void 0!==e))}isMainPlayer(e,t){var A;try{const i=st(e).filter((e=>t.some((t=>t.entity_id===e)))),s=(null==i?void 0:i.length)>1,o=s&&i&&i[0]===e.entity_id,r="unavailable"!==(null===(A=this.hass.states[e.entity_id])||void 0===A?void 0:A.state);return r||console.warn(`Player ${e.entity_id} is unavailable`),(!s||o)&&r}catch(t){return console.error("Failed to determine main player",JSON.stringify(e),t),!1}}createPlayerGroup(e,t){try{return new wt(e,this.config,t)}catch(t){return void console.error("Failed to create group",JSON.stringify(e),t)}}determineActivePlayer(e){const t=e||this.config.entityId||this.getActivePlayerFromUrl();return this.allGroups.find((e=>void 0!==e.getMember(t)))||this.allGroups.find((e=>e.isPlaying()))||this.allGroups[0]}getActivePlayerFromUrl(){return window.location.href.includes("#")?window.location.href.replace(/.*#/g,""):""}}const{GROUPING:St,GROUPS:Vt,MEDIA_BROWSER:Lt,PLAYER:Ot,VOLUMES:Mt}=he;class kt extends oe{render(){return G`
      <ha-icon-button
        hide=${this.hide(Ot)}
        .path=${"M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"}
        @click=${()=>this.dispatchSection(Ot)}
        selected=${this.selected(Ot)}
      ></ha-icon-button>
      <ha-icon-button
        hide=${this.hide(Lt)}
        .path=${"M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"}
        @click=${()=>this.dispatchSection(Lt)}
        selected=${this.selected(Lt)}
      ></ha-icon-button>
      <ha-icon-button
        hide=${this.hide(Vt)}
        .path=${"M14,10A3,3 0 0,0 11,13A3,3 0 0,0 14,16A3,3 0 0,0 17,13A3,3 0 0,0 14,10M14,18A5,5 0 0,1 9,13A5,5 0 0,1 14,8A5,5 0 0,1 19,13A5,5 0 0,1 14,18M14,2A2,2 0 0,1 16,4A2,2 0 0,1 14,6A2,2 0 0,1 12,4A2,2 0 0,1 14,2M19,0H9A2,2 0 0,0 7,2V18A2,2 0 0,0 9,20H19A2,2 0 0,0 21,18V2A2,2 0 0,0 19,0M5,22H17V24H5A2,2 0 0,1 3,22V4H5"}
        @click=${()=>this.dispatchSection(Vt)}
        selected=${this.selected(Vt)}
      ></ha-icon-button>
      <ha-icon-button
        hide=${this.hide(St)}
        .path=${"M6,22H18L12,16M21,3H3A2,2 0 0,0 1,5V17A2,2 0 0,0 3,19H7V17H3V5H21V17H17V19H21A2,2 0 0,0 23,17V5A2,2 0 0,0 21,3Z"}
        @click=${()=>this.dispatchSection(St)}
        selected=${this.selected(St)}
      ></ha-icon-button>
      <ha-icon-button
        hide=${this.hide(Mt)}
        .path=${"M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z"}
        @click=${()=>this.dispatchSection(Mt)}
        selected=${this.selected(Mt)}
      ></ha-icon-button>
    `}dispatchSection(e){this.dispatchEvent(tt("show-section",e))}selected(e){return this.section===e||W}hide(e){var t;return this.config.sections&&!(null===(t=this.config.sections)||void 0===t?void 0:t.includes(e))||W}static get styles(){return r`
      :host {
        display: flex;
        justify-content: space-between;
      }
      :host > * {
        padding: 1rem;
      }
      :host > *[selected] {
        color: var(--accent-color);
      }
      :host > *[hide] {
        display: none;
      }
    `}}var Ht,zt;e([le({attribute:!1})],kt.prototype,"config",void 0),e([le()],kt.prototype,"section",void 0),customElements.define("sonos-footer",kt),function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(Ht||(Ht={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(zt||(zt={}));var Nt;class xt extends oe{setConfig(e){this.config=JSON.parse(JSON.stringify(e))}static get styles(){return r`
      ha-svg-icon {
        margin: 5px;
      }
      ha-control-button {
        white-space: nowrap;
      }
      ha-control-button-group {
        margin: 5px;
      }
      div {
        margin-top: 20px;
      }
    `}configChanged(){!function(e,t,A,i){i=i||{},A=null==A?{}:A;var s=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});s.detail=A,e.dispatchEvent(s)}(this,"config-changed",{config:this.config}),this.requestUpdate()}dispatchClose(){return this.dispatchEvent(new CustomEvent("closed"))}}e([le({attribute:!1})],xt.prototype,"config",void 0),e([le({attribute:!1})],xt.prototype,"hass",void 0),function(e){e.GENERAL="General",e.ENTITIES="Entities",e.ADVANCED="Advanced",e.ARTWORK="Artwork"}(Nt||(Nt={}));const Tt=[{name:"hideGroupCurrentTrack",selector:{boolean:{}}},{name:"dynamicVolumeSlider",selector:{boolean:{}}},{type:"integer",name:"dynamicVolumeSliderThreshold",default:20,required:!0,valueMin:1,valueMax:100},{type:"integer",name:"dynamicVolumeSliderMax",default:30,required:!0,valueMin:1,valueMax:100},{type:"integer",name:"artworkMinHeight",help:"Minimum height of the artwork in rem",default:5,required:!0,valueMin:0},{name:"hideBrowseMediaButton",selector:{boolean:{}}},{type:"string",name:"labelWhenNoMediaIsSelected"},{type:"string",name:"labelForTheAllVolumesSlider"},{type:"string",name:"mediaBrowserTitle"},{type:"string",name:"artworkHostname"},{name:"mediaBrowserHideTitleForThumbnailIcons",selector:{boolean:{}}},{type:"string",name:"topFavorites"},{type:"integer",name:"numberOfFavoritesToShow",valueMin:1},{name:"showAudioInputFormat",selector:{boolean:{}}},{name:"adjustVolumeRelativeToMainPlayer",selector:{boolean:{}}},{name:"skipApplyButtonWhenGrouping",selector:{boolean:{}}},{name:"hideVolumeCogwheel",selector:{boolean:{}}},{name:"artworkAsBackground",selector:{boolean:{}}},{name:"playerVolumeEntityId",selector:{entity:{multiple:!1,filter:{domain:"media_player"}}}},{name:"dontSwitchPlayerWhenGrouping",selector:{boolean:{}}},{type:"string",help:"Override default fallback artwork image if artwork is missing for the currently selected media",name:"fallbackArtwork"},{name:"entitiesToIgnoreVolumeLevelFor",help:"If you want to ignore volume level for certain players in the player section",selector:{entity:{multiple:!0,filter:{domain:"media_player"}}}},{name:"replaceHttpWithHttpsForThumbnails",selector:{boolean:{}}},{type:"integer",name:"volumeStepSize",valueMin:1}];customElements.define("sonos-card-advanced-editor",class extends xt{render(){var e;const t=null!==(e=this.config.topFavorites)&&void 0!==e?e:[],A=Object.assign(Object.assign({},this.config),{topFavorites:t.join(", ")});return G`
      <sonos-card-editor-form
        .schema=${Tt}
        .config=${this.config}
        .hass=${this.hass}
        .data=${A}
        .changed=${this.changed}
      ></sonos-card-editor-form>
      <div>
        The following needs to be configured using code (YAML):
        <ul>
          <li>customSources</li>
          <li>customThumbnail</li>
          <li>customThumbnailIfMissing</li>
          <li>favoritesToIgnore</li>
        </ul>
      </div>
    `}changed(e){const t=e.detail.value;this.config=Object.assign(Object.assign(Object.assign({},this.config),t),{topFavorites:t.topFavorites.split(/ *, */)}),this.configChanged()}});class Ut extends xt{render(){return G``}}e([le({type:Number})],Ut.prototype,"index",void 0),customElements.define("sonos-card-custom-source-editor",Ut);const Xt=[{type:"multi_select",options:{player:"Player","media browser":"Media Browser",groups:"Groups",grouping:"Grouping",volumes:"Volumes"},name:"sections"},{type:"integer",name:"mediaBrowserItemsPerRow",default:4,required:!0,valueMin:1,valueMax:30},{type:"string",name:"title"},{name:"showVolumeUpAndDownButtons",selector:{boolean:{}}},{type:"integer",name:"widthPercentage",default:100,required:!0},{type:"integer",name:"heightPercentage",default:100,required:!0}];customElements.define("sonos-card-general-editor",class extends xt{render(){return G`
      <sonos-card-editor-form
        .schema=${Xt}
        .config=${this.config}
        .hass=${this.hass}
      ></sonos-card-editor-form>
    `}});const jt=[{type:"string",name:"entityNameRegexToReplace"},{type:"string",name:"entityNameReplacement"},{type:"boolean",name:"excludeItemsInEntitiesList"}],Gt=[{name:"showNonSonosPlayers",help:"Show all media players, including those that are not on the Sonos platform",selector:{boolean:{}}},{name:"entityId",help:"Not needed, but forces this player to be the selected one on loading the card (overrides url param etc)",selector:{entity:{multiple:!1,filter:{domain:"media_player"}}}},{name:"entities",help:"Not needed, unless you don't want to include all of them",selector:{entity:{multiple:!0,filter:{domain:"media_player"}}}}];class Rt extends xt{render(){const e=this.config.predefinedGroups;return this.editGroup>-1?G`<sonos-card-predefined-group-editor
          .index=${this.editGroup}
          .config=${this.config}
          .hass=${this.hass}
          @closed=${()=>this.editGroup=-1}
        ></sonos-card-predefined-group-editor>`:G`
          <sonos-card-editor-form
            .schema=${Gt}
            .config=${this.config}
            .hass=${this.hass}
          ></sonos-card-editor-form>
          <div>
            Predefined Groups
            <ha-control-button-group>
              ${null==e?void 0:e.map(((e,t)=>G`
                  <ha-control-button @click=${()=>this.editGroup=t}>
                    ${e.name}<ha-svg-icon .path=${Qe} label="Edit Group"></ha-svg-icon>
                  </ha-control-button>
                `))}
              <ha-control-button @click=${()=>this.editGroup=e?e.length:0}>
                Add group<ha-svg-icon .path=${ue} label="Add Group"></ha-svg-icon>
              </ha-control-button>
            </ha-control-button-group>
          </div>

          <div>
            Entity Renaming
            <sonos-card-editor-form
              .schema=${jt}
              .config=${this.config}
              .hass=${this.hass}
            ></sonos-card-editor-form>
          </div>
        `}}e([ce()],Rt.prototype,"editGroup",void 0),customElements.define("sonos-card-entities-editor",Rt);class Wt extends xt{constructor(){super(...arguments),this.schema=[{type:"string",name:"name",required:!0},{type:"string",name:"media"},{type:"boolean",name:"excludeItemsInEntitiesList"},{name:"entities",selector:{entity:{multiple:!0,filter:{domain:"media_player"}}}}]}render(){return this.predefinedGroup||this.initPredefinedGroup(),G`
      <h2>Add/Edit Predefined Group</h2>
      <sonos-card-editor-form
        .data=${this.getPredefinedGroupWithoutVolumes()}
        .schema=${this.schema}
        .config=${this.config}
        .hass=${this.hass}
        .changed=${e=>this.groupChanged(e)}
      ></sonos-card-editor-form>
      <div>
        <h3>Volumes - will be set when players are grouped</h3>
        ${this.predefinedGroup.entities.map((({player:e,volume:t})=>{var A,i;const s=[{type:"integer",name:"volume",label:`${null!==(i=null===(A=this.hass.states[e])||void 0===A?void 0:A.attributes.friendly_name)&&void 0!==i?i:""}${void 0!==t?`: ${t}`:""}`,valueMin:0,valueMax:100}];return G`
            <sonos-card-editor-form
              .data=${{volume:t}}
              .schema=${s}
              .config=${this.config}
              .hass=${this.hass}
              .changed=${t=>this.volumeChanged(t,e)}
            ></sonos-card-editor-form>
          `}))}
      </div>
      <ha-control-button-group>
        <ha-control-button @click=${this.savePredefinedGroup}>
          OK<ha-svg-icon .path=${ge} label="OK"></ha-svg-icon>
        </ha-control-button>
        <ha-control-button @click=${this.deletePredefinedGroup}>
          Delete<ha-svg-icon .path=${Be} label="Delete"></ha-svg-icon>
        </ha-control-button>
      </ha-control-button-group>
    `}initPredefinedGroup(){var e;const t=null===(e=this.config.predefinedGroups)||void 0===e?void 0:e[this.index||0];if(t){const e=t.entities.map((e=>"string"==typeof e?{player:e}:e));this.predefinedGroup=Object.assign(Object.assign({},t),{entities:e})}else this.predefinedGroup={name:"",media:"",entities:[]}}getPredefinedGroupWithoutVolumes(){return Object.assign(Object.assign({},this.predefinedGroup),{entities:this.predefinedGroup.entities.map((e=>e.player))})}groupChanged(e){const t=e.detail.value,A=t.entities.map((e=>{const t=this.predefinedGroup.entities.find((({player:t})=>t===e));return null!=t?t:{player:e}}));this.predefinedGroup=Object.assign(Object.assign({},t),{entities:A})}volumeChanged(e,t){const A=e.detail.value.volume,i=this.predefinedGroup.entities.map((e=>e.player===t?Object.assign(Object.assign({},e),{volume:A}):e));this.predefinedGroup=Object.assign(Object.assign({},this.predefinedGroup),{entities:i})}savePredefinedGroup(){let e=this.config.predefinedGroups;Array.isArray(e)||(e=[]),e[this.index]?e[this.index]=this.predefinedGroup:e=[...e,this.predefinedGroup],this.config.predefinedGroups=e,this.configChanged(),this.dispatchClose()}deletePredefinedGroup(){var e;this.config.predefinedGroups=null===(e=this.config.predefinedGroups)||void 0===e?void 0:e.filter(((e,t)=>t!==this.index)),this.index=-1,this.configChanged(),this.dispatchClose()}}e([le({type:Number})],Wt.prototype,"index",void 0),e([ce()],Wt.prototype,"predefinedGroup",void 0),customElements.define("sonos-card-predefined-group-editor",Wt);class Dt extends xt{render(){const e=this.config.mediaArtworkOverrides;return this.editItem>-1?G`<sonos-card-artwork-override-editor
          .index=${this.editItem}
          .config=${this.config}
          .hass=${this.hass}
          @closed=${()=>this.editItem=-1}
        ></sonos-card-artwork-override-editor>`:G`
          <div>
            Artwork Overrides
            <ha-control-button-group>
              ${null==e?void 0:e.map(((e,t)=>{const A=e.mediaTitleEquals||e.mediaArtistEquals||e.mediaAlbumNameEquals||e.mediaContentIdEquals||e.mediaChannelEquals||e.ifMissing&&"if missing"||t;return G`
                  <ha-control-button @click=${()=>this.editItem=t}>
                    ${A}<ha-svg-icon .path=${Qe} label="Edit"></ha-svg-icon>
                  </ha-control-button>
                `}))}
              <ha-control-button @click=${()=>this.editItem=e?e.length:0}>
                Add<ha-svg-icon .path=${ue} label="Add"></ha-svg-icon>
              </ha-control-button>
            </ha-control-button-group>
          </div>
        `}}e([ce()],Dt.prototype,"editItem",void 0),customElements.define("sonos-card-artwork-overrides-editor",Dt);const qt={ifMissing:!1};class Zt extends xt{render(){var e;const t=null===(e=this.config.mediaArtworkOverrides)||void 0===e?void 0:e[this.index||0];return G`
      Add/Edit Artwork Override
      <sonos-card-editor-form
        .data=${t||qt}
        .schema=${[{name:"ifMissing",selector:{boolean:{}}},{name:"mediaTitleEquals",type:"string"},{name:"mediaArtistEquals",type:"string"},{name:"mediaAlbumNameEquals",type:"string"},{name:"mediaContentIdEquals",type:"string"},{name:"mediaChannelEquals",type:"string"},{name:"imageUrl",type:"string"},{type:"integer",name:"sizePercentage",default:100,required:!0,valueMin:1,valueMax:100}]}
        .config=${this.config}
        .hass=${this.hass}
        .changed=${e=>this.changed(e,this.index)}
      ></sonos-card-editor-form>
      <ha-control-button-group>
        <ha-control-button @click=${this.dispatchClose}>
          OK<ha-svg-icon .path=${ge} label="OK"></ha-svg-icon>
        </ha-control-button>
        ${t?G`<ha-control-button
              @click="${()=>{var e;this.config.mediaArtworkOverrides=null===(e=this.config.mediaArtworkOverrides)||void 0===e?void 0:e.filter(((e,t)=>t!==this.index)),this.index=-1,this.configChanged(),this.dispatchClose()}}"
            >
              Delete<ha-svg-icon .path=${Be} label="Delete"></ha-svg-icon>
            </ha-control-button>`:""}
      </ha-control-button-group>
    `}changed(e,t){const A=e.detail.value;let i=this.config.mediaArtworkOverrides;Array.isArray(i)||(i=[]),i[t]?i[t]=A:i=[...i,A],this.config.mediaArtworkOverrides=i,this.configChanged()}}e([le({type:Number})],Zt.prototype,"index",void 0),customElements.define("sonos-card-artwork-override-editor",Zt);class Jt extends xt{render(){return G`
      <ha-form
        .data=${this.data||this.config}
        .schema=${this.schema}
        .computeLabel=${Yt}
        .hass=${this.hass}
        @value-changed=${this.changed||this.valueChanged}
      ></ha-form>
    `}valueChanged(e){const t=e.detail.value;this.config=Object.assign(Object.assign({},this.config),t),this.configChanged()}}function Yt({help:e,label:t,name:A}){if(t)return t;let i=A.replace(/([A-Z])/g," $1");return i=i.charAt(0).toUpperCase()+i.slice(1),i+(e?` (${e})`:"")}e([le({attribute:!1})],Jt.prototype,"schema",void 0),e([le({attribute:!1})],Jt.prototype,"data",void 0),e([le()],Jt.prototype,"changed",void 0),customElements.define("sonos-card-editor-form",Jt);const{GENERAL:Ft,ENTITIES:Kt,ADVANCED:$t,ARTWORK:_t}=Nt;class eA extends xt{constructor(){super(...arguments),this.configArea=Ft}render(){return this.config.sections&&0!==this.config.sections.length||(this.config.sections=[he.PLAYER,he.VOLUMES,he.GROUPS,he.GROUPING,he.MEDIA_BROWSER]),G`
      <ha-control-button-group>
        ${[Ft,Kt,_t,$t].map((e=>G`
            <ha-control-button
              selected=${this.configArea===e||W}
              @click=${()=>this.configArea=e}
            >
              ${e}
            </ha-control-button>
          `))}
      </ha-control-button-group>

      ${this.subEditor()}
    `}subEditor(){return Bt(this.configArea,[[Ft,()=>G`<sonos-card-general-editor .config=${this.config} .hass=${this.hass}></sonos-card-general-editor>`],[Kt,()=>G`<sonos-card-entities-editor .config=${this.config} .hass=${this.hass}></sonos-card-entities-editor>`],[$t,()=>G`<sonos-card-advanced-editor .config=${this.config} .hass=${this.hass}></sonos-card-advanced-editor>`],[_t,()=>G`<sonos-card-artwork-overrides-editor
            .config=${this.config}
            .hass=${this.hass}
          ></sonos-card-artwork-overrides-editor>`]])}static get styles(){return r`
      ha-control-button[selected] {
        --control-button-background-color: var(--primary-color);
      }
    `}}e([ce()],eA.prototype,"configArea",void 0),customElements.define("sonos-card-editor",eA);const{GROUPING:tA,GROUPS:AA,MEDIA_BROWSER:iA,PLAYER:sA,VOLUMES:oA}=he;class rA extends oe{constructor(){super(...arguments),this.showSectionListener=e=>{const t=e.detail;(!this.config.sections||this.config.sections.indexOf(t)>-1)&&(this.section=t)},this.callMediaStartedListener=e=>{this.showLoader||this.config.sections&&e.detail.section!==this.section||(this.cancelLoader=!1,setTimeout((()=>{this.cancelLoader||(this.showLoader=!0,this.loaderTimestamp=Date.now())}),300))},this.callMediaDoneListener=()=>{this.cancelLoader=!0;const e=Date.now()-this.loaderTimestamp;this.showLoader&&(e<1e3?setTimeout((()=>this.showLoader=!1),1e3-e):this.showLoader=!1)},this.activePlayerListener=e=>{var t;const A=e.detail.entityId;A!==this.activePlayerId&&(this.activePlayerId=A,(null===(t=this.config.sections)||void 0===t?void 0:t.includes(sA))&&(this.section=sA),this.requestUpdate())},this.onMediaItemSelected=()=>{var e;(null===(e=this.config.sections)||void 0===e?void 0:e.includes(sA))&&setTimeout((()=>this.section=sA),1e3)}}render(){this.createStore();let e=it(this.config.heightPercentage);const t=this.config.sections,A=!t||t.length>1,i=A?e-5:e,s=this.config.title;return e=s?e+2:e,G`
      <ha-card style=${this.haCardStyle(e)}>
        <div class="loader" ?hidden=${!this.showLoader}>
          <ha-circular-progress indeterminate></ha-circular-progress></div
        >
        </div>
        ${s?G`<div class="title">${s}</div>`:G``}
        <div class="content" style=${this.contentStyle(i)}>
          ${this.activePlayerId?Bt(this.section,[[sA,()=>G` <sonos-player .store=${this.store}></sonos-player>`],[AA,()=>G` <sonos-groups
                        .store=${this.store}
                        @active-player=${this.activePlayerListener}
                      ></sonos-groups>`],[tA,()=>G`<sonos-grouping
                        .store=${this.store}
                        @active-player=${this.activePlayerListener}
                      ></sonos-grouping>`],[iA,()=>G`
                      <sonos-media-browser
                        .store=${this.store}
                        @item-selected=${this.onMediaItemSelected}
                      ></sonos-media-browser>
                    `],[oA,()=>G` <sonos-volumes .store=${this.store}></sonos-volumes>`]]):G`<div class="no-players">No supported players found</div>`}
        </div>
        ${ve(A,(()=>G`<sonos-footer
              style=${this.footerStyle()}
              .config=${this.config}
              .section=${this.section}
              @show-section=${this.showSectionListener}
            >
            </sonos-footer>`))}
      </ha-card>
    `}createStore(){var e;this.activePlayerId?this.store=new Pt(this.hass,this.config,this.section,this,this.activePlayerId):(this.store=new Pt(this.hass,this.config,this.section,this),this.activePlayerId=null===(e=this.store.activePlayer)||void 0===e?void 0:e.id)}getCardSize(){return 3}static getConfigElement(){return document.createElement("sonos-card-editor")}connectedCallback(){super.connectedCallback(),et(this.config)&&window.addEventListener(qe,this.activePlayerListener),window.addEventListener(Ze,this.callMediaStartedListener),window.addEventListener(Je,this.callMediaDoneListener)}disconnectedCallback(){window.removeEventListener(qe,this.activePlayerListener),super.disconnectedCallback()}haCardStyle(e){const t=it(this.config.widthPercentage);return at({color:"var(--secondary-text-color)",height:`${e}rem`,minWidth:"20rem",maxWidth:`${t}rem`,overflow:"hidden"})}footerStyle(){return at({height:"5rem",paddingBottom:"1rem"})}contentStyle(e){return at({overflowY:"auto",height:`${e}rem`})}setConfig(e){const t=JSON.parse(JSON.stringify(e));for(const[e,A]of Object.entries(t))Array.isArray(A)&&0===A.length&&delete t[e];const A=t.sections;this.section=A?A.includes(sA)?sA:A.includes(iA)?iA:A.includes(AA)?AA:A.includes(tA)?tA:oA:sA,t.mediaBrowserItemsPerRow=t.mediaBrowserItemsPerRow||4,this.config=t}static get styles(){return r`
      :host {
        --mdc-icon-button-size: 3rem;
        --mdc-icon-size: 2rem;
      }
      ha-circular-progress {
        --md-sys-color-primary: var(--accent-color);
      }
      .loader {
        position: absolute;
        z-index: 1000;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        --mdc-theme-primary: var(--accent-color);
      }
      .title {
        margin: 0.4rem 0;
        text-align: center;
        font-weight: bold;
        font-size: 1.2rem;
        color: var(--secondary-text-color);
      }
      .no-players {
        text-align: center;
        margin-top: 50%;
      }
    `}}e([le({attribute:!1})],rA.prototype,"hass",void 0),e([le({attribute:!1})],rA.prototype,"config",void 0),e([ce()],rA.prototype,"section",void 0),e([ce()],rA.prototype,"store",void 0),e([ce()],rA.prototype,"showLoader",void 0),e([ce()],rA.prototype,"loaderTimestamp",void 0),e([ce()],rA.prototype,"cancelLoader",void 0),e([ce()],rA.prototype,"activePlayerId",void 0);class nA extends oe{render(){const e=!!this.icon&&!!this.name||W;return G`
      <ha-control-button selected=${this.selected||W}>
        ${this.icon?G` <ha-icon icon-and-name=${e} .icon=${this.icon}></ha-icon>`:""}
        ${this.name?G`<span>${this.name}</span>`:""}
      </ha-control-button>
    `}static get styles(){return r`
      ha-control-button {
        width: fit-content;
        --control-button-background-color: var(--accent-color);
        --control-button-icon-color: var(--secondary-text-color);
      }
      ha-control-button[selected] {
        --control-button-icon-color: var(--accent-color);
      }

      ha-icon {
        padding-left: 1rem;
        padding-right: 1rem;
      }
      ha-icon[icon-and-name] {
        padding-right: 0;
      }

      span {
        padding-right: 1rem;
        padding-left: 1rem;
        font-weight: bold;
      }
    `}}e([le()],nA.prototype,"icon",void 0),e([le()],nA.prototype,"name",void 0),e([le()],nA.prototype,"selected",void 0),customElements.define("sonos-grouping-button",nA);class aA{constructor(e,t,A){this.isDisabled=!1,this.isMain=e.id===t.id,this.isModified=A;const i=this.isMain||t.hasMember(e.id);this.isSelected=A?!i:i,this.player=e,this.name=e.name,this.icon=this.isSelected?"check-circle":"checkbox-blank-circle-outline"}}class lA extends oe{constructor(){super(...arguments),this.modifiedItems=[]}render(){return this.config=this.store.config,this.activePlayer=this.store.activePlayer,this.mediaControlService=this.store.mediaControlService,this.mediaPlayerIds=this.store.allMediaPlayers.map((e=>e.id)),this.groupingItems=this.getGroupingItems(),this.notJoinedPlayers=this.getNotJoinedPlayers(),this.joinedPlayers=this.getJoinedPlayers(),this.config.skipApplyButtonWhenGrouping&&(this.modifiedItems.length>0||this.selectedPredefinedGroup)&&this.applyGrouping(),G`
      <div class="wrapper">
        <div class="predefined-groups">
          ${this.renderJoinAllButton()} ${this.renderUnJoinAllButton()}
          ${ve(this.store.predefinedGroups,(()=>this.renderPredefinedGroups()))}
        </div>
        <div class="list">
          ${this.groupingItems.map((e=>G`
              <div class="item" modified=${e.isModified||W} disabled=${e.isDisabled||W}>
                <ha-icon
                  class="icon"
                  selected=${e.isSelected||W}
                  .icon="mdi:${e.icon}"
                  @click=${()=>this.toggleItem(e)}
                ></ha-icon>
                <div class="name-and-volume">
                  <span class="name">${e.name}</span>
                  <sonos-volume
                    class="volume"
                    .store=${this.store}
                    .player=${e.player}
                    .updateMembers=${!1}
                    .slim=${!0}
                  ></sonos-volume>
                </div>
              </div>
            `))}
        </div>
        <ha-control-button-group
          class="buttons"
          hide=${0===this.modifiedItems.length&&!this.selectedPredefinedGroup||this.config.skipApplyButtonWhenGrouping||W}
        >
          <ha-control-button class="apply" @click=${this.applyGrouping}> Apply</ha-control-button>
          <ha-control-button @click=${this.cancelGrouping}> Cancel</ha-control-button>
        </ha-control-button-group>
      </div>
    `}static get styles(){return[Fe,r`
        :host {
          --mdc-icon-size: 24px;
        }
        .wrapper {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .predefined-groups {
          margin: 1rem;
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          flex-shrink: 0;
        }

        .item {
          color: var(--secondary-text-color);
          padding: 0.5rem;
          display: flex;
          align-items: center;
        }

        .icon {
          padding-right: 0.5rem;
          flex-shrink: 0;
        }

        .icon[selected] {
          color: var(--accent-color);
        }

        .item[modified] .name {
          font-weight: bold;
          font-style: italic;
        }

        .item[disabled] .icon {
          color: var(--disabled-text-color);
        }

        .list {
          flex: 1;
          overflow: auto;
        }

        .buttons {
          flex-shrink: 0;
          margin: 0 1rem;
          padding-top: 0.5rem;
        }

        .apply {
          --control-button-background-color: var(--accent-color);
        }

        *[hide] {
          display: none;
        }

        .name-and-volume {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .volume {
          --accent-color: var(--secondary-text-color);
        }
      `]}toggleItem(e){e.isDisabled||this.toggleItemWithoutDisabledCheck(e)}toggleItemWithoutDisabledCheck(e){this.modifiedItems.includes(e.player.id)?this.modifiedItems=this.modifiedItems.filter((t=>t!==e.player.id)):this.modifiedItems=[...this.modifiedItems,e.player.id],this.selectedPredefinedGroup=void 0}async applyGrouping(){const e=this.groupingItems,t=this.joinedPlayers,A=this.activePlayer.id,{unJoin:i,join:s,newMainPlayer:o}=function(e,t,A){const i=e.filter((e=>e.isSelected)),s=e.filter((e=>!e.isSelected&&t.includes(e.player.id))).map((e=>e.player.id)),o=e.filter((e=>e.isSelected&&!t.includes(e.player.id))).map((e=>e.player.id));let r=A;return s.includes(A)&&(r=i[0].player.id),{unJoin:s,join:o,newMainPlayer:r}}(e,t,A);s.length>0&&await this.mediaControlService.join(o,s),i.length>0&&await this.mediaControlService.unJoin(i),this.selectedPredefinedGroup&&(console.log("Setting volume and media for predefined group",this.selectedPredefinedGroup.volume),await this.mediaControlService.setVolumeAndMediaForPredefinedGroup(this.selectedPredefinedGroup)),o===A||this.config.dontSwitchPlayerWhenGrouping||_e(o,this.config,this),this.config.entityId&&i.includes(this.config.entityId)&&this.config.dontSwitchPlayerWhenGrouping&&_e(this.config.entityId,this.config,this),this.modifiedItems=[],this.selectedPredefinedGroup=void 0}cancelGrouping(){this.modifiedItems=[]}getGroupingItems(){const e=this.store.allMediaPlayers.map((e=>new aA(e,this.activePlayer,this.modifiedItems.includes(e.id)))),t=e.filter((e=>e.isSelected));return 1===t.length&&(t[0].isDisabled=!0),e.sort(((e,t)=>e.isMain&&!t.isMain||e.isSelected&&!t.isSelected?-1:e.name.localeCompare(t.name))),e}renderJoinAllButton(){return ve(this.notJoinedPlayers.length,(()=>this.groupingButton("mdi:checkbox-multiple-marked-outline",this.selectAll)))}groupingButton(e,t){return G` <sonos-grouping-button @click=${t} .icon=${e}></sonos-grouping-button> `}getNotJoinedPlayers(){return this.mediaPlayerIds.filter((e=>e!==this.activePlayer.id&&!this.activePlayer.hasMember(e)))}renderUnJoinAllButton(){return ve(this.joinedPlayers.length,(()=>this.groupingButton("mdi:minus-box-multiple-outline",this.deSelectAll)))}getJoinedPlayers(){return this.mediaPlayerIds.filter((e=>e===this.activePlayer.id||this.activePlayer.hasMember(e)))}renderPredefinedGroups(){return this.store.predefinedGroups.map((e=>{var t;return G`
        <sonos-grouping-button
          @click=${async()=>this.selectPredefinedGroup(e)}
          .icon=${"mdi:speaker-multiple"}
          .name=${e.name}
          .selected=${(null===(t=this.selectedPredefinedGroup)||void 0===t?void 0:t.name)===e.name}
        ></sonos-grouping-button>
      `}))}selectPredefinedGroup(e){this.groupingItems.forEach((async t=>{const A=e.entities.some((e=>e.player.id===t.player.id));(A&&!t.isSelected||!A&&t.isSelected)&&this.toggleItemWithoutDisabledCheck(t)})),this.selectedPredefinedGroup=e}selectAll(){this.groupingItems.forEach((e=>{e.isSelected||this.toggleItem(e)}))}deSelectAll(){this.groupingItems.forEach((e=>{(!e.isMain&&e.isSelected||e.isMain&&!e.isSelected)&&this.toggleItem(e)}))}}e([le({attribute:!1})],lA.prototype,"store",void 0),e([ce()],lA.prototype,"modifiedItems",void 0),e([ce()],lA.prototype,"selectedPredefinedGroup",void 0);class cA extends oe{constructor(){super(...arguments),this.selected=!1,this.dispatchEntityIdEvent=()=>{if(this.selected){_e(this.player.id,this.store.config,this)}}}render(){const e=this.store.config.hideGroupCurrentTrack?"":this.player.getCurrentTrack(),t=$e(this.player,this.store.predefinedGroups),A=this.player.attributes.icon;return G`
      <mwc-list-item
        hasMeta
        ?selected=${this.selected}
        ?activated=${this.selected}
        @click=${()=>this.handleGroupClicked()}
      >
        <div class="row">
          <ha-icon .icon=${A} ?hidden=${!A}></ha-icon>
          <div class="text">
            <span class="speakers">${t}</span>
            <span class="song-title">${e}</span>
          </div>
        </div>

        ${ve(this.player.isPlaying(),(()=>G`
            <div class="bars" slot="meta">
              <div></div>
              <div></div>
              <div></div>
            </div>
          `))}
      </mwc-list-item>
    `}connectedCallback(){super.connectedCallback(),this.dispatchEntityIdEvent()}handleGroupClicked(){if(!this.selected){this.selected=!0;const e=window.location.href.replace(/#.*/g,"");window.location.replace(`${e}#${this.player.id}`),this.dispatchEntityIdEvent()}}static get styles(){return r`
      @keyframes sound {
        0% {
          opacity: 0.35;
          height: 0.15rem;
        }
        100% {
          opacity: 1;
          height: 1rem;
        }
      }

      mwc-list-item {
        height: fit-content;
        margin: 1rem;
        border-radius: 1rem;
        background: var(--secondary-background-color);
      }

      .row {
        display: flex;
        margin: 1rem 0;
      }

      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .speakers {
        white-space: initial;
        font-size: 1.1rem;
        font-weight: bold;
        color: var(--secondary-text-color);
      }

      .song-title {
        font-size: 0.9rem;
        font-weight: bold;
      }

      ha-icon {
        --mdc-icon-size: 3rem;
        margin-right: 1rem;
      }

      .bars {
        width: 0.55rem;
        position: relative;
        margin-left: 1rem;
      }

      .bars > div {
        background: var(--secondary-text-color);
        bottom: 0.05rem;
        height: 0.15rem;
        position: absolute;
        width: 0.15rem;
        animation: sound 0ms -800ms linear infinite alternate;
        display: block;
      }

      .bars > div:first-child {
        left: 0.05rem;
        animation-duration: 474ms;
      }

      .bars > div:nth-child(2) {
        left: 0.25rem;
        animation-duration: 433ms;
      }

      .bars > div:last-child {
        left: 0.45rem;
        animation-duration: 407ms;
      }
    `}}e([le({attribute:!1})],cA.prototype,"store",void 0),e([le({attribute:!1})],cA.prototype,"player",void 0),e([le({type:Boolean})],cA.prototype,"selected",void 0),customElements.define("sonos-group",cA);class dA extends oe{render(){return this.activePlayer=this.store.activePlayer,this.groups=this.store.allGroups,G`
      <mwc-list activatable class="list">
        ${this.groups.map((e=>{const t=this.activePlayer.id===e.id;return G` <sonos-group .store=${this.store} .player=${e} .selected=${t}></sonos-group> `}))}
      </mwc-list>
    `}static get styles(){return Fe}}e([le({attribute:!1})],dA.prototype,"store",void 0);class hA extends oe{render(){return this.config=this.store.config,G`
      <mwc-list multi class="list">
        ${ft(this.items,this.config).map(((e,t)=>G`
            ${Ct(e.thumbnail,t)}
            <mwc-list-item class="button" @click=${()=>this.dispatchEvent(tt(Ye,e))}>
              <div class="row">${yt(e)}</div>
            </mwc-list-item>
          `))}
      </mwc-list>
    `}static get styles(){return[r`
        .button {
          --icon-width: 35px;
          height: 40px;
        }

        .row {
          display: flex;
        }

        .thumbnail {
          width: var(--icon-width);
          height: var(--icon-width);
          background-size: contain;
          background-repeat: no-repeat;
          background-position: left;
        }

        .title {
          font-size: 1.1rem;
          align-self: center;
          flex: 1;
        }
      `,Ke,Fe]}}e([le({attribute:!1})],hA.prototype,"store",void 0),e([le({type:Array})],hA.prototype,"items",void 0),customElements.define("sonos-media-browser-list",hA);class EA extends oe{render(){return this.config=this.store.config,G`
      <style>
        :host {
          --items-per-row: ${this.config.mediaBrowserItemsPerRow};
        }
      </style>
      <div class="icons">
        ${ft(this.items,this.config).map(((e,t)=>G`
            ${Ct(e.thumbnail,t)}
            <ha-control-button
              class="button"
              @click=${()=>this.dispatchEvent(tt(Ye,e))}
            >
              ${yt(e,!e.thumbnail||!this.config.mediaBrowserHideTitleForThumbnailIcons)}
            </ha-control-button>
          `))}
      </div>
    `}static get styles(){return[Ke,r`
        .icons {
          display: flex;
          flex-wrap: wrap;
        }

        .button {
          --margin: 1%;
          --width: calc(100% / var(--items-per-row) - var(--margin) * 2);
          width: var(--width);
          height: var(--width);
          margin: var(--margin);
        }

        .thumbnail {
          width: 100%;
          padding-bottom: 100%;
          margin: 0 6%;
          background-size: 100%;
          background-repeat: no-repeat;
          background-position: center;
        }

        .title {
          font-size: 0.8rem;
          position: absolute;
          width: 100%;
          line-height: 160%;
          bottom: 0;
          background-color: rgba(var(--rgb-card-background-color), 0.733);
        }
      `]}}e([le({attribute:!1})],EA.prototype,"store",void 0),e([le({attribute:!1})],EA.prototype,"items",void 0),customElements.define("sonos-media-browser-icons",EA);class gA extends oe{render(){var e;return G`
      <div class="title">${null!==(e=this.store.config.mediaBrowserTitle)&&void 0!==e?e:"All Favorites"}</div>
      <sonos-ha-player
        hide=${this.store.config.hideBrowseMediaButton||W}
        .store=${this.store}
        .features=${[Ee.BROWSE_MEDIA]}
      ></sonos-ha-player>
    `}static get styles(){return r`
      :host {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;
      }
      .title {
        flex: 1;
        text-align: center;
        font-size: 1.2rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
      }
      *[hide] {
        display: none;
      }
    `}}e([le({attribute:!1})],gA.prototype,"store",void 0),customElements.define("sonos-media-browser-header",gA);class BA extends oe{constructor(){super(...arguments),this.onMediaItemSelected=e=>{const t=e.detail;this.playItem(t),this.dispatchEvent(tt(Ye,t))}}render(){return this.config=this.store.config,this.activePlayer=this.store.activePlayer,this.mediaBrowseService=this.store.mediaBrowseService,this.mediaControlService=this.store.mediaControlService,G`
      <sonos-media-browser-header .store=${this.store}></sonos-media-browser-header>

      ${this.activePlayer&&Ne(this.getFavorites(this.activePlayer).then((e=>{var t;return(null==e?void 0:e.length)?(null!==(t=this.config.mediaBrowserItemsPerRow)&&void 0!==t?t:4)>1?G`
                  <sonos-media-browser-icons
                    .items=${e}
                    .store=${this.store}
                    @item-selected=${this.onMediaItemSelected}
                  ></sonos-media-browser-icons>
                `:G`
                  <sonos-media-browser-list
                    .items=${e}
                    .store=${this.store}
                    @item-selected=${this.onMediaItemSelected}
                  ></sonos-media-browser-list>
                `:G`<div class="no-items">No favorites found</div>`})))}
    `}async playItem(e){e.media_content_type||e.media_content_id?await this.mediaControlService.playMedia(this.activePlayer,e):await this.mediaControlService.setSource(this.activePlayer,e.title)}async getFavorites(e){var t,A,i,s;let o=await this.mediaBrowseService.getFavorites(e);return o.sort(((e,t)=>this.sortOnTopFavoritesThenAlphabetically(e.title,t.title))),o=[...(null===(A=null===(t=this.config.customSources)||void 0===t?void 0:t[this.activePlayer.id])||void 0===A?void 0:A.map(BA.createSource))||[],...(null===(s=null===(i=this.config.customSources)||void 0===i?void 0:i.all)||void 0===s?void 0:s.map(BA.createSource))||[],...o],this.config.numberOfFavoritesToShow?o.slice(0,this.config.numberOfFavoritesToShow):o}sortOnTopFavoritesThenAlphabetically(e,t){var A;const i=null!==(A=this.config.topFavorites)&&void 0!==A?A:[],s=vt(i,e),o=vt(i,t);if(s>-1&&o>-1)return s-o;{let A=o-s;return 0===A&&(A=e.localeCompare(t,"en",{sensitivity:"base"})),A}}static createSource(e){return Object.assign(Object.assign({},e),{can_play:!0})}static get styles(){return r`
      .no-items {
        text-align: center;
        margin-top: 50%;
      }
    `}}e([le({attribute:!1})],BA.prototype,"store",void 0);const{SELECT_SOURCE:QA}=Ee;class uA extends oe{constructor(){super(...arguments),this.showSwitches={}}render(){this.config=this.store.config,this.activePlayer=this.store.activePlayer,this.hassService=this.store.hassService,this.mediaControlService=this.store.mediaControlService;const e=this.activePlayer.members;return G`
      ${ve(e.length>1,(()=>this.volumeWithName(this.activePlayer)))}
      ${e.map((e=>this.volumeWithName(e,!1)))}
    `}volumeWithName(e,t=!0){var A;const i=t?null!==(A=this.config.labelForTheAllVolumesSlider)&&void 0!==A?A:"All":e.name,s=!!this.config.showVolumeUpAndDownButtons&&W,o=t||!this.showSwitches[e.id];return G` <div class="row">
      <div class="volume-name">
        <div class="volume-name-text">${i}</div>
      </div>
      <div class="slider-row">
        <ha-icon-button
          .disabled=${e.ignoreVolume}
          hide=${s}
          @click=${async()=>await this.mediaControlService.volumeDown(e,t)}
          .path=${pe}
        ></ha-icon-button>
        <sonos-volume .store=${this.store} .player=${e} .updateMembers=${t}></sonos-volume>
        <ha-icon-button
          .disabled=${e.ignoreVolume}
          hide=${s}
          @click=${async()=>await this.mediaControlService.volumeUp(e,t)}
          .path=${me}
        ></ha-icon-button>
        <ha-icon-button
          hide=${t||this.config.hideVolumeCogwheel||W}
          @click=${()=>this.toggleShowSwitches(e)}
          .path=${"M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"}
          show-switches=${this.showSwitches[e.id]||W}
        ></ha-icon-button>
      </div>
      <div class="switches">
        <sonos-ha-player hide=${o||W} .store=${this.store} .features=${[QA]}>
        </sonos-ha-player>
        ${Ne(this.getAdditionalControls(o,e))}
      </div>
    </div>`}toggleShowSwitches(e){this.showSwitches[e.id]=!this.showSwitches[e.id],this.requestUpdate()}async getAdditionalControls(e,t){if(e)return;return(await this.hassService.getRelatedEntities(t,"switch","number","sensor")).map((e=>{var A,i,s;return e.attributes.friendly_name=null!==(s=null===(i=null===(A=e.attributes.friendly_name)||void 0===A?void 0:A.replaceAll(t.name,""))||void 0===i?void 0:i.trim())&&void 0!==s?s:"",G`
        <div>
          <state-card-content .stateObj=${e} .hass=${this.store.hass}></state-card-content>
        </div>
      `}))}static get styles(){return r`
      .row {
        display: flex;
        flex-direction: column;
        padding-top: 0.3rem;
        padding-right: 1rem;
        padding-bottom: 0.2rem;
      }

      .row:not(:first-child) {
        border-top: solid var(--secondary-background-color);
      }

      .row:first-child {
        padding-top: 1rem;
      }

      .switches {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
      }

      .volume-name {
        flex: 1;
        overflow: hidden;
        flex-direction: column;
        text-align: center;
      }

      .volume-name-text {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 1.1rem;
        font-weight: bold;
        min-height: 1rem;
      }

      .slider-row {
        display: flex;
      }

      sonos-volume {
        flex: 4;
      }

      *[show-switches] {
        color: var(--accent-color);
      }

      *[hide] {
        display: none;
      }
    `}}e([le({attribute:!1})],uA.prototype,"store",void 0),e([ce()],uA.prototype,"showSwitches",void 0),customElements.define("sonos-volumes",uA);class pA extends oe{render(){const e=this.store.hass.states[this.store.activePlayer.id];let t=0;this.features.forEach((e=>t+=e));const A=Object.assign(Object.assign({},e),{attributes:Object.assign(Object.assign({},e.attributes),{supported_features:t})});return G` <more-info-content .stateObj=${A} .hass=${this.store.hass}></more-info-content> `}}e([le({attribute:!1})],pA.prototype,"store",void 0),e([le({attribute:!1})],pA.prototype,"features",void 0),customElements.define("sonos-ha-player",pA);var mA;window.customCards.push({type:"sonos-card",name:"Sonos"+(mA?` (${mA})`:""),description:(e=>"Media player for your Sonos speakers"+(e?` (${e})`:""))(),preview:!0}),customElements.define("sonos-card",rA),customElements.define("sonos-grouping",lA),customElements.define("sonos-groups",dA),customElements.define("sonos-media-browser",BA),customElements.define("sonos-player",gt);
//# sourceMappingURL=custom-sonos-card.js.map
