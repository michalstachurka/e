var VM=Object.defineProperty;var zM=(n,e,t)=>e in n?VM(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var je=(n,e,t)=>zM(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Qf={exports:{}},Ra={},Jf={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv;function HM(){if(pv)return gt;pv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function m(F){return F===null||typeof F!="object"?null:(F=v&&F[v]||F["@@iterator"],typeof F=="function"?F:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function S(F,j,Ie){this.props=F,this.context=j,this.refs=A,this.updater=Ie||y}S.prototype.isReactComponent={},S.prototype.setState=function(F,j){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,j,"setState")},S.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function x(){}x.prototype=S.prototype;function P(F,j,Ie){this.props=F,this.context=j,this.refs=A,this.updater=Ie||y}var I=P.prototype=new x;I.constructor=P,M(I,S.prototype),I.isPureReactComponent=!0;var C=Array.isArray,D=Object.prototype.hasOwnProperty,b={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function T(F,j,Ie){var qe,ke={},ie=null,ve=null;if(j!=null)for(qe in j.ref!==void 0&&(ve=j.ref),j.key!==void 0&&(ie=""+j.key),j)D.call(j,qe)&&!O.hasOwnProperty(qe)&&(ke[qe]=j[qe]);var pe=arguments.length-2;if(pe===1)ke.children=Ie;else if(1<pe){for(var Ne=Array(pe),Qe=0;Qe<pe;Qe++)Ne[Qe]=arguments[Qe+2];ke.children=Ne}if(F&&F.defaultProps)for(qe in pe=F.defaultProps,pe)ke[qe]===void 0&&(ke[qe]=pe[qe]);return{$$typeof:n,type:F,key:ie,ref:ve,props:ke,_owner:b.current}}function L(F,j){return{$$typeof:n,type:F.type,key:j,ref:F.ref,props:F.props,_owner:F._owner}}function k(F){return typeof F=="object"&&F!==null&&F.$$typeof===n}function V(F){var j={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ie){return j[Ie]})}var Y=/\/+/g;function ue(F,j){return typeof F=="object"&&F!==null&&F.key!=null?V(""+F.key):j.toString(36)}function ce(F,j,Ie,qe,ke){var ie=typeof F;(ie==="undefined"||ie==="boolean")&&(F=null);var ve=!1;if(F===null)ve=!0;else switch(ie){case"string":case"number":ve=!0;break;case"object":switch(F.$$typeof){case n:case e:ve=!0}}if(ve)return ve=F,ke=ke(ve),F=qe===""?"."+ue(ve,0):qe,C(ke)?(Ie="",F!=null&&(Ie=F.replace(Y,"$&/")+"/"),ce(ke,j,Ie,"",function(Qe){return Qe})):ke!=null&&(k(ke)&&(ke=L(ke,Ie+(!ke.key||ve&&ve.key===ke.key?"":(""+ke.key).replace(Y,"$&/")+"/")+F)),j.push(ke)),1;if(ve=0,qe=qe===""?".":qe+":",C(F))for(var pe=0;pe<F.length;pe++){ie=F[pe];var Ne=qe+ue(ie,pe);ve+=ce(ie,j,Ie,Ne,ke)}else if(Ne=m(F),typeof Ne=="function")for(F=Ne.call(F),pe=0;!(ie=F.next()).done;)ie=ie.value,Ne=qe+ue(ie,pe++),ve+=ce(ie,j,Ie,Ne,ke);else if(ie==="object")throw j=String(F),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return ve}function $(F,j,Ie){if(F==null)return F;var qe=[],ke=0;return ce(F,qe,"","",function(ie){return j.call(Ie,ie,ke++)}),qe}function ae(F){if(F._status===-1){var j=F._result;j=j(),j.then(function(Ie){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ie)},function(Ie){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ie)}),F._status===-1&&(F._status=0,F._result=j)}if(F._status===1)return F._result.default;throw F._result}var K={current:null},G={transition:null},oe={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:G,ReactCurrentOwner:b};function le(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:$,forEach:function(F,j,Ie){$(F,function(){j.apply(this,arguments)},Ie)},count:function(F){var j=0;return $(F,function(){j++}),j},toArray:function(F){return $(F,function(j){return j})||[]},only:function(F){if(!k(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},gt.Component=S,gt.Fragment=t,gt.Profiler=o,gt.PureComponent=P,gt.StrictMode=r,gt.Suspense=d,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,gt.act=le,gt.cloneElement=function(F,j,Ie){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var qe=M({},F.props),ke=F.key,ie=F.ref,ve=F._owner;if(j!=null){if(j.ref!==void 0&&(ie=j.ref,ve=b.current),j.key!==void 0&&(ke=""+j.key),F.type&&F.type.defaultProps)var pe=F.type.defaultProps;for(Ne in j)D.call(j,Ne)&&!O.hasOwnProperty(Ne)&&(qe[Ne]=j[Ne]===void 0&&pe!==void 0?pe[Ne]:j[Ne])}var Ne=arguments.length-2;if(Ne===1)qe.children=Ie;else if(1<Ne){pe=Array(Ne);for(var Qe=0;Qe<Ne;Qe++)pe[Qe]=arguments[Qe+2];qe.children=pe}return{$$typeof:n,type:F.type,key:ke,ref:ie,props:qe,_owner:ve}},gt.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},gt.createElement=T,gt.createFactory=function(F){var j=T.bind(null,F);return j.type=F,j},gt.createRef=function(){return{current:null}},gt.forwardRef=function(F){return{$$typeof:f,render:F}},gt.isValidElement=k,gt.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:ae}},gt.memo=function(F,j){return{$$typeof:h,type:F,compare:j===void 0?null:j}},gt.startTransition=function(F){var j=G.transition;G.transition={};try{F()}finally{G.transition=j}},gt.unstable_act=le,gt.useCallback=function(F,j){return K.current.useCallback(F,j)},gt.useContext=function(F){return K.current.useContext(F)},gt.useDebugValue=function(){},gt.useDeferredValue=function(F){return K.current.useDeferredValue(F)},gt.useEffect=function(F,j){return K.current.useEffect(F,j)},gt.useId=function(){return K.current.useId()},gt.useImperativeHandle=function(F,j,Ie){return K.current.useImperativeHandle(F,j,Ie)},gt.useInsertionEffect=function(F,j){return K.current.useInsertionEffect(F,j)},gt.useLayoutEffect=function(F,j){return K.current.useLayoutEffect(F,j)},gt.useMemo=function(F,j){return K.current.useMemo(F,j)},gt.useReducer=function(F,j,Ie){return K.current.useReducer(F,j,Ie)},gt.useRef=function(F){return K.current.useRef(F)},gt.useState=function(F){return K.current.useState(F)},gt.useSyncExternalStore=function(F,j,Ie){return K.current.useSyncExternalStore(F,j,Ie)},gt.useTransition=function(){return K.current.useTransition()},gt.version="18.3.1",gt}var mv;function Qh(){return mv||(mv=1,Jf.exports=HM()),Jf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv;function GM(){if(gv)return Ra;gv=1;var n=Qh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,d,h){var g,v={},m=null,y=null;h!==void 0&&(m=""+h),d.key!==void 0&&(m=""+d.key),d.ref!==void 0&&(y=d.ref);for(g in d)r.call(d,g)&&!l.hasOwnProperty(g)&&(v[g]=d[g]);if(f&&f.defaultProps)for(g in d=f.defaultProps,d)v[g]===void 0&&(v[g]=d[g]);return{$$typeof:e,type:f,key:m,ref:y,props:v,_owner:o.current}}return Ra.Fragment=t,Ra.jsx=u,Ra.jsxs=u,Ra}var vv;function WM(){return vv||(vv=1,Qf.exports=GM()),Qf.exports}var dt=WM(),ot=Qh(),hu={},ed={exports:{}},$n={},td={exports:{}},nd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v;function XM(){return _v||(_v=1,(function(n){function e(G,oe){var le=G.length;G.push(oe);e:for(;0<le;){var F=le-1>>>1,j=G[F];if(0<o(j,oe))G[F]=oe,G[le]=j,le=F;else break e}}function t(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var oe=G[0],le=G.pop();if(le!==oe){G[0]=le;e:for(var F=0,j=G.length,Ie=j>>>1;F<Ie;){var qe=2*(F+1)-1,ke=G[qe],ie=qe+1,ve=G[ie];if(0>o(ke,le))ie<j&&0>o(ve,ke)?(G[F]=ve,G[ie]=le,F=ie):(G[F]=ke,G[qe]=le,F=qe);else if(ie<j&&0>o(ve,le))G[F]=ve,G[ie]=le,F=ie;else break e}}return oe}function o(G,oe){var le=G.sortIndex-oe.sortIndex;return le!==0?le:G.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();n.unstable_now=function(){return u.now()-f}}var d=[],h=[],g=1,v=null,m=3,y=!1,M=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(G){for(var oe=t(h);oe!==null;){if(oe.callback===null)r(h);else if(oe.startTime<=G)r(h),oe.sortIndex=oe.expirationTime,e(d,oe);else break;oe=t(h)}}function C(G){if(A=!1,I(G),!M)if(t(d)!==null)M=!0,ae(D);else{var oe=t(h);oe!==null&&K(C,oe.startTime-G)}}function D(G,oe){M=!1,A&&(A=!1,x(T),T=-1),y=!0;var le=m;try{for(I(oe),v=t(d);v!==null&&(!(v.expirationTime>oe)||G&&!V());){var F=v.callback;if(typeof F=="function"){v.callback=null,m=v.priorityLevel;var j=F(v.expirationTime<=oe);oe=n.unstable_now(),typeof j=="function"?v.callback=j:v===t(d)&&r(d),I(oe)}else r(d);v=t(d)}if(v!==null)var Ie=!0;else{var qe=t(h);qe!==null&&K(C,qe.startTime-oe),Ie=!1}return Ie}finally{v=null,m=le,y=!1}}var b=!1,O=null,T=-1,L=5,k=-1;function V(){return!(n.unstable_now()-k<L)}function Y(){if(O!==null){var G=n.unstable_now();k=G;var oe=!0;try{oe=O(!0,G)}finally{oe?ue():(b=!1,O=null)}}else b=!1}var ue;if(typeof P=="function")ue=function(){P(Y)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,$=ce.port2;ce.port1.onmessage=Y,ue=function(){$.postMessage(null)}}else ue=function(){S(Y,0)};function ae(G){O=G,b||(b=!0,ue())}function K(G,oe){T=S(function(){G(n.unstable_now())},oe)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_continueExecution=function(){M||y||(M=!0,ae(D))},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(G){switch(m){case 1:case 2:case 3:var oe=3;break;default:oe=m}var le=m;m=oe;try{return G()}finally{m=le}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(G,oe){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var le=m;m=G;try{return oe()}finally{m=le}},n.unstable_scheduleCallback=function(G,oe,le){var F=n.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?F+le:F):le=F,G){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=le+j,G={id:g++,callback:oe,priorityLevel:G,startTime:le,expirationTime:j,sortIndex:-1},le>F?(G.sortIndex=le,e(h,G),t(d)===null&&G===t(h)&&(A?(x(T),T=-1):A=!0,K(C,le-F))):(G.sortIndex=j,e(d,G),M||y||(M=!0,ae(D))),G},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(G){var oe=m;return function(){var le=m;m=oe;try{return G.apply(this,arguments)}finally{m=le}}}})(nd)),nd}var xv;function YM(){return xv||(xv=1,td.exports=XM()),td.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv;function qM(){if(yv)return $n;yv=1;var n=Qh(),e=YM();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function m(i){return d.call(v,i)?!0:d.call(g,i)?!1:h.test(i)?v[i]=!0:(g[i]=!0,!1)}function y(i,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,a,c){if(s===null||typeof s>"u"||y(i,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function A(i,s,a,c,p,_,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=w}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new A(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new A(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new A(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new A(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new A(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new A(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new A(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new A(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new A(i,5,!1,i.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function P(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(x,P);S[s]=new A(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(x,P);S[s]=new A(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(x,P);S[s]=new A(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new A(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new A(i,1,!1,i.toLowerCase(),null,!0,!0)});function I(i,s,a,c){var p=S.hasOwnProperty(s)?S[s]:null;(p!==null?p.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,a,p,c)&&(a=null),c||p===null?m(s)&&(a===null?i.removeAttribute(s):i.setAttribute(s,""+a)):p.mustUseProperty?i[p.propertyName]=a===null?p.type===3?!1:"":a:(s=p.attributeName,c=p.attributeNamespace,a===null?i.removeAttribute(s):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,c?i.setAttributeNS(c,s,a):i.setAttribute(s,a))))}var C=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),b=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),V=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),G=Symbol.iterator;function oe(i){return i===null||typeof i!="object"?null:(i=G&&i[G]||i["@@iterator"],typeof i=="function"?i:null)}var le=Object.assign,F;function j(i){if(F===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);F=s&&s[1]||""}return`
`+F+i}var Ie=!1;function qe(i,s){if(!i||Ie)return"";Ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(se){var c=se}Reflect.construct(i,[],s)}else{try{s.call()}catch(se){c=se}i.call(s.prototype)}else{try{throw Error()}catch(se){c=se}i()}}catch(se){if(se&&c&&typeof se.stack=="string"){for(var p=se.stack.split(`
`),_=c.stack.split(`
`),w=p.length-1,U=_.length-1;1<=w&&0<=U&&p[w]!==_[U];)U--;for(;1<=w&&0<=U;w--,U--)if(p[w]!==_[U]){if(w!==1||U!==1)do if(w--,U--,0>U||p[w]!==_[U]){var B=`
`+p[w].replace(" at new "," at ");return i.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",i.displayName)),B}while(1<=w&&0<=U);break}}}finally{Ie=!1,Error.prepareStackTrace=a}return(i=i?i.displayName||i.name:"")?j(i):""}function ke(i){switch(i.tag){case 5:return j(i.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return i=qe(i.type,!1),i;case 11:return i=qe(i.type.render,!1),i;case 1:return i=qe(i.type,!0),i;default:return""}}function ie(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case O:return"Fragment";case b:return"Portal";case L:return"Profiler";case T:return"StrictMode";case ue:return"Suspense";case ce:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case V:return(i.displayName||"Context")+".Consumer";case k:return(i._context.displayName||"Context")+".Provider";case Y:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case $:return s=i.displayName||null,s!==null?s:ie(i.type)||"Memo";case ae:s=i._payload,i=i._init;try{return ie(i(s))}catch{}}return null}function ve(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(s);case 8:return s===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function pe(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ne(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Qe(i){var s=Ne(i)?"checked":"value",a=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),c=""+i[s];if(!i.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,_=a.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(w){c=""+w,_.call(this,w)}}),Object.defineProperty(i,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Je(i){i._valueTracker||(i._valueTracker=Qe(i))}function Gt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return i&&(c=Ne(i)?i.checked?"true":"false":i.value),i=c,i!==a?(s.setValue(i),!0):!1}function ft(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Ct(i,s){var a=s.checked;return le({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??i._wrapperState.initialChecked})}function Mt(i,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=pe(s.value!=null?s.value:a),i._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function yt(i,s){s=s.checked,s!=null&&I(i,"checked",s,!1)}function Wt(i,s){yt(i,s);var a=pe(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&i.value===""||i.value!=a)&&(i.value=""+a):i.value!==""+a&&(i.value=""+a);else if(c==="submit"||c==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?tn(i,s.type,a):s.hasOwnProperty("defaultValue")&&tn(i,s.type,pe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function en(i,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,a||s===i.value||(i.value=s),i.defaultValue=s}a=i.name,a!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,a!==""&&(i.name=a)}function tn(i,s,a){(s!=="number"||ft(i.ownerDocument)!==i)&&(a==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+a&&(i.defaultValue=""+a))}var Kt=Array.isArray;function Dt(i,s,a,c){if(i=i.options,s){s={};for(var p=0;p<a.length;p++)s["$"+a[p]]=!0;for(a=0;a<i.length;a++)p=s.hasOwnProperty("$"+i[a].value),i[a].selected!==p&&(i[a].selected=p),p&&c&&(i[a].defaultSelected=!0)}else{for(a=""+pe(a),s=null,p=0;p<i.length;p++){if(i[p].value===a){i[p].selected=!0,c&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function Xt(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function W(i,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(Kt(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}i._wrapperState={initialValue:pe(a)}}function _n(i,s){var a=pe(s.value),c=pe(s.defaultValue);a!=null&&(a=""+a,a!==i.value&&(i.value=a),s.defaultValue==null&&i.defaultValue!==a&&(i.defaultValue=a)),c!=null&&(i.defaultValue=""+c)}function At(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function N(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?N(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var q,ne=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,p){MSApp.execUnsafeLocalFunction(function(){return i(s,a,c,p)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(q=q||document.createElement("div"),q.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=q.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function fe(i,s){if(s){var a=i.firstChild;if(a&&a===i.lastChild&&a.nodeType===3){a.nodeValue=s;return}}i.textContent=s}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Re=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(i){Re.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Se[s]=Se[i]})});function de(i,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Se.hasOwnProperty(i)&&Se[i]?(""+s).trim():s+"px"}function me(i,s){i=i.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,p=de(a,s[a],c);a==="float"&&(a="cssFloat"),c?i.setProperty(a,p):i[a]=p}}var be=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xe(i,s){if(s){if(be[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Pe(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ae=null;function Ze(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var et=null,rt=null,z=null;function we(i){if(i=da(i)){if(typeof et!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Cl(s),et(i.stateNode,i.type,s))}}function he(i){rt?z?z.push(i):z=[i]:rt=i}function Ce(){if(rt){var i=rt,s=z;if(z=rt=null,we(i),s)for(i=0;i<s.length;i++)we(s[i])}}function De(i,s){return i(s)}function ge(){}var He=!1;function Ve(i,s,a){if(He)return i(s,a);He=!0;try{return De(i,s,a)}finally{He=!1,(rt!==null||z!==null)&&(ge(),Ce())}}function Ut(i,s){var a=i.stateNode;if(a===null)return null;var c=Cl(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var bt=!1;if(f)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){bt=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{bt=!1}function ai(i,s,a,c,p,_,w,U,B){var se=Array.prototype.slice.call(arguments,3);try{s.apply(a,se)}catch(xe){this.onError(xe)}}var ts=!1,Os=null,ns=!1,is=null,yc={onError:function(i){ts=!0,Os=i}};function cl(i,s,a,c,p,_,w,U,B){ts=!1,Os=null,ai.apply(yc,arguments)}function fl(i,s,a,c,p,_,w,U,B){if(cl.apply(this,arguments),ts){if(ts){var se=Os;ts=!1,Os=null}else throw Error(t(198));ns||(ns=!0,is=se)}}function Fn(i){var s=i,a=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(a=s.return),i=s.return;while(i)}return s.tag===3?a:null}function Bs(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Yo(i){if(Fn(i)!==i)throw Error(t(188))}function dl(i){var s=i.alternate;if(!s){if(s=Fn(i),s===null)throw Error(t(188));return s!==i?null:i}for(var a=i,c=s;;){var p=a.return;if(p===null)break;var _=p.alternate;if(_===null){if(c=p.return,c!==null){a=c;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===a)return Yo(p),i;if(_===c)return Yo(p),s;_=_.sibling}throw Error(t(188))}if(a.return!==c.return)a=p,c=_;else{for(var w=!1,U=p.child;U;){if(U===a){w=!0,a=p,c=_;break}if(U===c){w=!0,c=p,a=_;break}U=U.sibling}if(!w){for(U=_.child;U;){if(U===a){w=!0,a=_,c=p;break}if(U===c){w=!0,c=_,a=p;break}U=U.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?i:s}function rs(i){return i=dl(i),i!==null?qo(i):null}function qo(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=qo(i);if(s!==null)return s;i=i.sibling}return null}var ss=e.unstable_scheduleCallback,Ko=e.unstable_cancelCallback,hl=e.unstable_shouldYield,Sc=e.unstable_requestPaint,$t=e.unstable_now,Mc=e.unstable_getCurrentPriorityLevel,$o=e.unstable_ImmediatePriority,R=e.unstable_UserBlockingPriority,X=e.unstable_NormalPriority,re=e.unstable_LowPriority,J=e.unstable_IdlePriority,Q=null,Te=null;function Oe(i){if(Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Q,i,void 0,(i.current.flags&128)===128)}catch{}}var Ee=Math.clz32?Math.clz32:lt,Ge=Math.log,$e=Math.LN2;function lt(i){return i>>>=0,i===0?32:31-(Ge(i)/$e|0)|0}var ut=64,Ye=4194304;function Et(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Ft(i,s){var a=i.pendingLanes;if(a===0)return 0;var c=0,p=i.suspendedLanes,_=i.pingedLanes,w=a&268435455;if(w!==0){var U=w&~p;U!==0?c=Et(U):(_&=w,_!==0&&(c=Et(_)))}else w=a&~p,w!==0?c=Et(w):_!==0&&(c=Et(_));if(c===0)return 0;if(s!==0&&s!==c&&(s&p)===0&&(p=c&-c,_=s&-s,p>=_||p===16&&(_&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=c;0<s;)a=31-Ee(s),p=1<<a,c|=i[a],s&=~p;return c}function Yt(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lt(i,s){for(var a=i.suspendedLanes,c=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var w=31-Ee(_),U=1<<w,B=p[w];B===-1?((U&a)===0||(U&c)!==0)&&(p[w]=Yt(U,s)):B<=s&&(i.expiredLanes|=U),_&=~U}}function an(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Ue(){var i=ut;return ut<<=1,(ut&4194240)===0&&(ut=64),i}function xn(i){for(var s=[],a=0;31>a;a++)s.push(i);return s}function pt(i,s,a){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Ee(s),i[s]=a}function Hn(i,s){var a=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var c=i.eventTimes;for(i=i.expirationTimes;0<a;){var p=31-Ee(a),_=1<<p;s[p]=0,c[p]=-1,i[p]=-1,a&=~_}}function Gn(i,s){var a=i.entangledLanes|=s;for(i=i.entanglements;a;){var c=31-Ee(a),p=1<<c;p&s|i[c]&s&&(i[c]|=s),a&=~p}}var mt=0;function Zi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Pt,Bt,xi,It,yi,Oi=!1,os=[],Sr=null,Mr=null,Er=null,jo=new Map,Zo=new Map,Tr=[],lS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zp(i,s){switch(i){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":jo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(s.pointerId)}}function Qo(i,s,a,c,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:_,targetContainers:[p]},s!==null&&(s=da(s),s!==null&&Bt(s)),i):(i.eventSystemFlags|=c,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function uS(i,s,a,c,p){switch(s){case"focusin":return Sr=Qo(Sr,i,s,a,c,p),!0;case"dragenter":return Mr=Qo(Mr,i,s,a,c,p),!0;case"mouseover":return Er=Qo(Er,i,s,a,c,p),!0;case"pointerover":var _=p.pointerId;return jo.set(_,Qo(jo.get(_)||null,i,s,a,c,p)),!0;case"gotpointercapture":return _=p.pointerId,Zo.set(_,Qo(Zo.get(_)||null,i,s,a,c,p)),!0}return!1}function Qp(i){var s=as(i.target);if(s!==null){var a=Fn(s);if(a!==null){if(s=a.tag,s===13){if(s=Bs(a),s!==null){i.blockedOn=s,yi(i.priority,function(){xi(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){i.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}i.blockedOn=null}function pl(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var a=Tc(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(a===null){a=i.nativeEvent;var c=new a.constructor(a.type,a);Ae=c,a.target.dispatchEvent(c),Ae=null}else return s=da(a),s!==null&&Bt(s),i.blockedOn=a,!1;s.shift()}return!0}function Jp(i,s,a){pl(i)&&a.delete(s)}function cS(){Oi=!1,Sr!==null&&pl(Sr)&&(Sr=null),Mr!==null&&pl(Mr)&&(Mr=null),Er!==null&&pl(Er)&&(Er=null),jo.forEach(Jp),Zo.forEach(Jp)}function Jo(i,s){i.blockedOn===s&&(i.blockedOn=null,Oi||(Oi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,cS)))}function ea(i){function s(p){return Jo(p,i)}if(0<os.length){Jo(os[0],i);for(var a=1;a<os.length;a++){var c=os[a];c.blockedOn===i&&(c.blockedOn=null)}}for(Sr!==null&&Jo(Sr,i),Mr!==null&&Jo(Mr,i),Er!==null&&Jo(Er,i),jo.forEach(s),Zo.forEach(s),a=0;a<Tr.length;a++)c=Tr[a],c.blockedOn===i&&(c.blockedOn=null);for(;0<Tr.length&&(a=Tr[0],a.blockedOn===null);)Qp(a),a.blockedOn===null&&Tr.shift()}var ks=C.ReactCurrentBatchConfig,ml=!0;function fS(i,s,a,c){var p=mt,_=ks.transition;ks.transition=null;try{mt=1,Ec(i,s,a,c)}finally{mt=p,ks.transition=_}}function dS(i,s,a,c){var p=mt,_=ks.transition;ks.transition=null;try{mt=4,Ec(i,s,a,c)}finally{mt=p,ks.transition=_}}function Ec(i,s,a,c){if(ml){var p=Tc(i,s,a,c);if(p===null)zc(i,s,c,gl,a),Zp(i,c);else if(uS(p,i,s,a,c))c.stopPropagation();else if(Zp(i,c),s&4&&-1<lS.indexOf(i)){for(;p!==null;){var _=da(p);if(_!==null&&Pt(_),_=Tc(i,s,a,c),_===null&&zc(i,s,c,gl,a),_===p)break;p=_}p!==null&&c.stopPropagation()}else zc(i,s,c,null,a)}}var gl=null;function Tc(i,s,a,c){if(gl=null,i=Ze(c),i=as(i),i!==null)if(s=Fn(i),s===null)i=null;else if(a=s.tag,a===13){if(i=Bs(s),i!==null)return i;i=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return gl=i,null}function em(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mc()){case $o:return 1;case R:return 4;case X:case re:return 16;case J:return 536870912;default:return 16}default:return 16}}var wr=null,wc=null,vl=null;function tm(){if(vl)return vl;var i,s=wc,a=s.length,c,p="value"in wr?wr.value:wr.textContent,_=p.length;for(i=0;i<a&&s[i]===p[i];i++);var w=a-i;for(c=1;c<=w&&s[a-c]===p[_-c];c++);return vl=p.slice(i,1<c?1-c:void 0)}function _l(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function xl(){return!0}function nm(){return!1}function Qn(i){function s(a,c,p,_,w){this._reactName=a,this._targetInst=p,this.type=c,this.nativeEvent=_,this.target=w,this.currentTarget=null;for(var U in i)i.hasOwnProperty(U)&&(a=i[U],this[U]=a?a(_):_[U]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?xl:nm,this.isPropagationStopped=nm,this}return le(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),s}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ac=Qn(Vs),ta=le({},Vs,{view:0,detail:0}),hS=Qn(ta),Rc,Cc,na,yl=le({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pc,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==na&&(na&&i.type==="mousemove"?(Rc=i.screenX-na.screenX,Cc=i.screenY-na.screenY):Cc=Rc=0,na=i),Rc)},movementY:function(i){return"movementY"in i?i.movementY:Cc}}),im=Qn(yl),pS=le({},yl,{dataTransfer:0}),mS=Qn(pS),gS=le({},ta,{relatedTarget:0}),bc=Qn(gS),vS=le({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),_S=Qn(vS),xS=le({},Vs,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),yS=Qn(xS),SS=le({},Vs,{data:0}),rm=Qn(SS),MS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ES={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},TS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wS(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=TS[i])?!!s[i]:!1}function Pc(){return wS}var AS=le({},ta,{key:function(i){if(i.key){var s=MS[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=_l(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?ES[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pc,charCode:function(i){return i.type==="keypress"?_l(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?_l(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),RS=Qn(AS),CS=le({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sm=Qn(CS),bS=le({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pc}),PS=Qn(bS),DS=le({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),LS=Qn(DS),IS=le({},yl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),NS=Qn(IS),US=[9,13,27,32],Dc=f&&"CompositionEvent"in window,ia=null;f&&"documentMode"in document&&(ia=document.documentMode);var FS=f&&"TextEvent"in window&&!ia,om=f&&(!Dc||ia&&8<ia&&11>=ia),am=" ",lm=!1;function um(i,s){switch(i){case"keyup":return US.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cm(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var zs=!1;function OS(i,s){switch(i){case"compositionend":return cm(s);case"keypress":return s.which!==32?null:(lm=!0,am);case"textInput":return i=s.data,i===am&&lm?null:i;default:return null}}function BS(i,s){if(zs)return i==="compositionend"||!Dc&&um(i,s)?(i=tm(),vl=wc=wr=null,zs=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return om&&s.locale!=="ko"?null:s.data;default:return null}}var kS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fm(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!kS[i.type]:s==="textarea"}function dm(i,s,a,c){he(c),s=wl(s,"onChange"),0<s.length&&(a=new Ac("onChange","change",null,a,c),i.push({event:a,listeners:s}))}var ra=null,sa=null;function VS(i){Pm(i,0)}function Sl(i){var s=Ys(i);if(Gt(s))return i}function zS(i,s){if(i==="change")return s}var hm=!1;if(f){var Lc;if(f){var Ic="oninput"in document;if(!Ic){var pm=document.createElement("div");pm.setAttribute("oninput","return;"),Ic=typeof pm.oninput=="function"}Lc=Ic}else Lc=!1;hm=Lc&&(!document.documentMode||9<document.documentMode)}function mm(){ra&&(ra.detachEvent("onpropertychange",gm),sa=ra=null)}function gm(i){if(i.propertyName==="value"&&Sl(sa)){var s=[];dm(s,sa,i,Ze(i)),Ve(VS,s)}}function HS(i,s,a){i==="focusin"?(mm(),ra=s,sa=a,ra.attachEvent("onpropertychange",gm)):i==="focusout"&&mm()}function GS(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Sl(sa)}function WS(i,s){if(i==="click")return Sl(s)}function XS(i,s){if(i==="input"||i==="change")return Sl(s)}function YS(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Si=typeof Object.is=="function"?Object.is:YS;function oa(i,s){if(Si(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var a=Object.keys(i),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var p=a[c];if(!d.call(s,p)||!Si(i[p],s[p]))return!1}return!0}function vm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function _m(i,s){var a=vm(i);i=0;for(var c;a;){if(a.nodeType===3){if(c=i+a.textContent.length,i<=s&&c>=s)return{node:a,offset:s-i};i=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=vm(a)}}function xm(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?xm(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function ym(){for(var i=window,s=ft();s instanceof i.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)i=s.contentWindow;else break;s=ft(i.document)}return s}function Nc(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function qS(i){var s=ym(),a=i.focusedElem,c=i.selectionRange;if(s!==a&&a&&a.ownerDocument&&xm(a.ownerDocument.documentElement,a)){if(c!==null&&Nc(a)){if(s=c.start,i=c.end,i===void 0&&(i=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(i,a.value.length);else if(i=(s=a.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=a.textContent.length,_=Math.min(c.start,p);c=c.end===void 0?_:Math.min(c.end,p),!i.extend&&_>c&&(p=c,c=_,_=p),p=_m(a,_);var w=_m(a,c);p&&w&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==w.node||i.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),_>c?(i.addRange(s),i.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),i.addRange(s)))}}for(s=[],i=a;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)i=s[a],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var KS=f&&"documentMode"in document&&11>=document.documentMode,Hs=null,Uc=null,aa=null,Fc=!1;function Sm(i,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fc||Hs==null||Hs!==ft(c)||(c=Hs,"selectionStart"in c&&Nc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),aa&&oa(aa,c)||(aa=c,c=wl(Uc,"onSelect"),0<c.length&&(s=new Ac("onSelect","select",null,s,a),i.push({event:s,listeners:c}),s.target=Hs)))}function Ml(i,s){var a={};return a[i.toLowerCase()]=s.toLowerCase(),a["Webkit"+i]="webkit"+s,a["Moz"+i]="moz"+s,a}var Gs={animationend:Ml("Animation","AnimationEnd"),animationiteration:Ml("Animation","AnimationIteration"),animationstart:Ml("Animation","AnimationStart"),transitionend:Ml("Transition","TransitionEnd")},Oc={},Mm={};f&&(Mm=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function El(i){if(Oc[i])return Oc[i];if(!Gs[i])return i;var s=Gs[i],a;for(a in s)if(s.hasOwnProperty(a)&&a in Mm)return Oc[i]=s[a];return i}var Em=El("animationend"),Tm=El("animationiteration"),wm=El("animationstart"),Am=El("transitionend"),Rm=new Map,Cm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(i,s){Rm.set(i,s),l(s,[i])}for(var Bc=0;Bc<Cm.length;Bc++){var kc=Cm[Bc],$S=kc.toLowerCase(),jS=kc[0].toUpperCase()+kc.slice(1);Ar($S,"on"+jS)}Ar(Em,"onAnimationEnd"),Ar(Tm,"onAnimationIteration"),Ar(wm,"onAnimationStart"),Ar("dblclick","onDoubleClick"),Ar("focusin","onFocus"),Ar("focusout","onBlur"),Ar(Am,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZS=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function bm(i,s,a){var c=i.type||"unknown-event";i.currentTarget=a,fl(c,s,void 0,i),i.currentTarget=null}function Pm(i,s){s=(s&4)!==0;for(var a=0;a<i.length;a++){var c=i[a],p=c.event;c=c.listeners;e:{var _=void 0;if(s)for(var w=c.length-1;0<=w;w--){var U=c[w],B=U.instance,se=U.currentTarget;if(U=U.listener,B!==_&&p.isPropagationStopped())break e;bm(p,U,se),_=B}else for(w=0;w<c.length;w++){if(U=c[w],B=U.instance,se=U.currentTarget,U=U.listener,B!==_&&p.isPropagationStopped())break e;bm(p,U,se),_=B}}}if(ns)throw i=is,ns=!1,is=null,i}function kt(i,s){var a=s[qc];a===void 0&&(a=s[qc]=new Set);var c=i+"__bubble";a.has(c)||(Dm(s,i,2,!1),a.add(c))}function Vc(i,s,a){var c=0;s&&(c|=4),Dm(a,i,c,s)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function ua(i){if(!i[Tl]){i[Tl]=!0,r.forEach(function(a){a!=="selectionchange"&&(ZS.has(a)||Vc(a,!1,i),Vc(a,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Tl]||(s[Tl]=!0,Vc("selectionchange",!1,s))}}function Dm(i,s,a,c){switch(em(s)){case 1:var p=fS;break;case 4:p=dS;break;default:p=Ec}a=p.bind(null,s,a,i),p=void 0,!bt||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),c?p!==void 0?i.addEventListener(s,a,{capture:!0,passive:p}):i.addEventListener(s,a,!0):p!==void 0?i.addEventListener(s,a,{passive:p}):i.addEventListener(s,a,!1)}function zc(i,s,a,c,p){var _=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var U=c.stateNode.containerInfo;if(U===p||U.nodeType===8&&U.parentNode===p)break;if(w===4)for(w=c.return;w!==null;){var B=w.tag;if((B===3||B===4)&&(B=w.stateNode.containerInfo,B===p||B.nodeType===8&&B.parentNode===p))return;w=w.return}for(;U!==null;){if(w=as(U),w===null)return;if(B=w.tag,B===5||B===6){c=_=w;continue e}U=U.parentNode}}c=c.return}Ve(function(){var se=_,xe=Ze(a),ye=[];e:{var _e=Rm.get(i);if(_e!==void 0){var Fe=Ac,ze=i;switch(i){case"keypress":if(_l(a)===0)break e;case"keydown":case"keyup":Fe=RS;break;case"focusin":ze="focus",Fe=bc;break;case"focusout":ze="blur",Fe=bc;break;case"beforeblur":case"afterblur":Fe=bc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=im;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=mS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=PS;break;case Em:case Tm:case wm:Fe=_S;break;case Am:Fe=LS;break;case"scroll":Fe=hS;break;case"wheel":Fe=NS;break;case"copy":case"cut":case"paste":Fe=yS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=sm}var We=(s&4)!==0,sn=!We&&i==="scroll",Z=We?_e!==null?_e+"Capture":null:_e;We=[];for(var H=se,ee;H!==null;){ee=H;var Me=ee.stateNode;if(ee.tag===5&&Me!==null&&(ee=Me,Z!==null&&(Me=Ut(H,Z),Me!=null&&We.push(ca(H,Me,ee)))),sn)break;H=H.return}0<We.length&&(_e=new Fe(_e,ze,null,a,xe),ye.push({event:_e,listeners:We}))}}if((s&7)===0){e:{if(_e=i==="mouseover"||i==="pointerover",Fe=i==="mouseout"||i==="pointerout",_e&&a!==Ae&&(ze=a.relatedTarget||a.fromElement)&&(as(ze)||ze[Qi]))break e;if((Fe||_e)&&(_e=xe.window===xe?xe:(_e=xe.ownerDocument)?_e.defaultView||_e.parentWindow:window,Fe?(ze=a.relatedTarget||a.toElement,Fe=se,ze=ze?as(ze):null,ze!==null&&(sn=Fn(ze),ze!==sn||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Fe=null,ze=se),Fe!==ze)){if(We=im,Me="onMouseLeave",Z="onMouseEnter",H="mouse",(i==="pointerout"||i==="pointerover")&&(We=sm,Me="onPointerLeave",Z="onPointerEnter",H="pointer"),sn=Fe==null?_e:Ys(Fe),ee=ze==null?_e:Ys(ze),_e=new We(Me,H+"leave",Fe,a,xe),_e.target=sn,_e.relatedTarget=ee,Me=null,as(xe)===se&&(We=new We(Z,H+"enter",ze,a,xe),We.target=ee,We.relatedTarget=sn,Me=We),sn=Me,Fe&&ze)t:{for(We=Fe,Z=ze,H=0,ee=We;ee;ee=Ws(ee))H++;for(ee=0,Me=Z;Me;Me=Ws(Me))ee++;for(;0<H-ee;)We=Ws(We),H--;for(;0<ee-H;)Z=Ws(Z),ee--;for(;H--;){if(We===Z||Z!==null&&We===Z.alternate)break t;We=Ws(We),Z=Ws(Z)}We=null}else We=null;Fe!==null&&Lm(ye,_e,Fe,We,!1),ze!==null&&sn!==null&&Lm(ye,sn,ze,We,!0)}}e:{if(_e=se?Ys(se):window,Fe=_e.nodeName&&_e.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&_e.type==="file")var Ke=zS;else if(fm(_e))if(hm)Ke=XS;else{Ke=GS;var tt=HS}else(Fe=_e.nodeName)&&Fe.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Ke=WS);if(Ke&&(Ke=Ke(i,se))){dm(ye,Ke,a,xe);break e}tt&&tt(i,_e,se),i==="focusout"&&(tt=_e._wrapperState)&&tt.controlled&&_e.type==="number"&&tn(_e,"number",_e.value)}switch(tt=se?Ys(se):window,i){case"focusin":(fm(tt)||tt.contentEditable==="true")&&(Hs=tt,Uc=se,aa=null);break;case"focusout":aa=Uc=Hs=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,Sm(ye,a,xe);break;case"selectionchange":if(KS)break;case"keydown":case"keyup":Sm(ye,a,xe)}var nt;if(Dc)e:{switch(i){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else zs?um(i,a)&&(at="onCompositionEnd"):i==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(om&&a.locale!=="ko"&&(zs||at!=="onCompositionStart"?at==="onCompositionEnd"&&zs&&(nt=tm()):(wr=xe,wc="value"in wr?wr.value:wr.textContent,zs=!0)),tt=wl(se,at),0<tt.length&&(at=new rm(at,i,null,a,xe),ye.push({event:at,listeners:tt}),nt?at.data=nt:(nt=cm(a),nt!==null&&(at.data=nt)))),(nt=FS?OS(i,a):BS(i,a))&&(se=wl(se,"onBeforeInput"),0<se.length&&(xe=new rm("onBeforeInput","beforeinput",null,a,xe),ye.push({event:xe,listeners:se}),xe.data=nt))}Pm(ye,s)})}function ca(i,s,a){return{instance:i,listener:s,currentTarget:a}}function wl(i,s){for(var a=s+"Capture",c=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=Ut(i,a),_!=null&&c.unshift(ca(i,_,p)),_=Ut(i,s),_!=null&&c.push(ca(i,_,p))),i=i.return}return c}function Ws(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Lm(i,s,a,c,p){for(var _=s._reactName,w=[];a!==null&&a!==c;){var U=a,B=U.alternate,se=U.stateNode;if(B!==null&&B===c)break;U.tag===5&&se!==null&&(U=se,p?(B=Ut(a,_),B!=null&&w.unshift(ca(a,B,U))):p||(B=Ut(a,_),B!=null&&w.push(ca(a,B,U)))),a=a.return}w.length!==0&&i.push({event:s,listeners:w})}var QS=/\r\n?/g,JS=/\u0000|\uFFFD/g;function Im(i){return(typeof i=="string"?i:""+i).replace(QS,`
`).replace(JS,"")}function Al(i,s,a){if(s=Im(s),Im(i)!==s&&a)throw Error(t(425))}function Rl(){}var Hc=null,Gc=null;function Wc(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Xc=typeof setTimeout=="function"?setTimeout:void 0,eM=typeof clearTimeout=="function"?clearTimeout:void 0,Nm=typeof Promise=="function"?Promise:void 0,tM=typeof queueMicrotask=="function"?queueMicrotask:typeof Nm<"u"?function(i){return Nm.resolve(null).then(i).catch(nM)}:Xc;function nM(i){setTimeout(function(){throw i})}function Yc(i,s){var a=s,c=0;do{var p=a.nextSibling;if(i.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(c===0){i.removeChild(p),ea(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=p}while(a);ea(s)}function Rr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Um(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return i;s--}else a==="/$"&&s++}i=i.previousSibling}return null}var Xs=Math.random().toString(36).slice(2),Bi="__reactFiber$"+Xs,fa="__reactProps$"+Xs,Qi="__reactContainer$"+Xs,qc="__reactEvents$"+Xs,iM="__reactListeners$"+Xs,rM="__reactHandles$"+Xs;function as(i){var s=i[Bi];if(s)return s;for(var a=i.parentNode;a;){if(s=a[Qi]||a[Bi]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(i=Um(i);i!==null;){if(a=i[Bi])return a;i=Um(i)}return s}i=a,a=i.parentNode}return null}function da(i){return i=i[Bi]||i[Qi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Ys(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Cl(i){return i[fa]||null}var Kc=[],qs=-1;function Cr(i){return{current:i}}function Vt(i){0>qs||(i.current=Kc[qs],Kc[qs]=null,qs--)}function Ot(i,s){qs++,Kc[qs]=i.current,i.current=s}var br={},wn=Cr(br),Wn=Cr(!1),ls=br;function Ks(i,s){var a=i.type.contextTypes;if(!a)return br;var c=i.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in a)p[_]=s[_];return c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function Xn(i){return i=i.childContextTypes,i!=null}function bl(){Vt(Wn),Vt(wn)}function Fm(i,s,a){if(wn.current!==br)throw Error(t(168));Ot(wn,s),Ot(Wn,a)}function Om(i,s,a){var c=i.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var p in c)if(!(p in s))throw Error(t(108,ve(i)||"Unknown",p));return le({},a,c)}function Pl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||br,ls=wn.current,Ot(wn,i),Ot(Wn,Wn.current),!0}function Bm(i,s,a){var c=i.stateNode;if(!c)throw Error(t(169));a?(i=Om(i,s,ls),c.__reactInternalMemoizedMergedChildContext=i,Vt(Wn),Vt(wn),Ot(wn,i)):Vt(Wn),Ot(Wn,a)}var Ji=null,Dl=!1,$c=!1;function km(i){Ji===null?Ji=[i]:Ji.push(i)}function sM(i){Dl=!0,km(i)}function Pr(){if(!$c&&Ji!==null){$c=!0;var i=0,s=mt;try{var a=Ji;for(mt=1;i<a.length;i++){var c=a[i];do c=c(!0);while(c!==null)}Ji=null,Dl=!1}catch(p){throw Ji!==null&&(Ji=Ji.slice(i+1)),ss($o,Pr),p}finally{mt=s,$c=!1}}return null}var $s=[],js=0,Ll=null,Il=0,li=[],ui=0,us=null,er=1,tr="";function cs(i,s){$s[js++]=Il,$s[js++]=Ll,Ll=i,Il=s}function Vm(i,s,a){li[ui++]=er,li[ui++]=tr,li[ui++]=us,us=i;var c=er;i=tr;var p=32-Ee(c)-1;c&=~(1<<p),a+=1;var _=32-Ee(s)+p;if(30<_){var w=p-p%5;_=(c&(1<<w)-1).toString(32),c>>=w,p-=w,er=1<<32-Ee(s)+p|a<<p|c,tr=_+i}else er=1<<_|a<<p|c,tr=i}function jc(i){i.return!==null&&(cs(i,1),Vm(i,1,0))}function Zc(i){for(;i===Ll;)Ll=$s[--js],$s[js]=null,Il=$s[--js],$s[js]=null;for(;i===us;)us=li[--ui],li[ui]=null,tr=li[--ui],li[ui]=null,er=li[--ui],li[ui]=null}var Jn=null,ei=null,qt=!1,Mi=null;function zm(i,s){var a=hi(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=i,s=i.deletions,s===null?(i.deletions=[a],i.flags|=16):s.push(a)}function Hm(i,s){switch(i.tag){case 5:var a=i.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Jn=i,ei=Rr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Jn=i,ei=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=us!==null?{id:er,overflow:tr}:null,i.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=hi(18,null,null,0),a.stateNode=s,a.return=i,i.child=a,Jn=i,ei=null,!0):!1;default:return!1}}function Qc(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Jc(i){if(qt){var s=ei;if(s){var a=s;if(!Hm(i,s)){if(Qc(i))throw Error(t(418));s=Rr(a.nextSibling);var c=Jn;s&&Hm(i,s)?zm(c,a):(i.flags=i.flags&-4097|2,qt=!1,Jn=i)}}else{if(Qc(i))throw Error(t(418));i.flags=i.flags&-4097|2,qt=!1,Jn=i}}}function Gm(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Jn=i}function Nl(i){if(i!==Jn)return!1;if(!qt)return Gm(i),qt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Wc(i.type,i.memoizedProps)),s&&(s=ei)){if(Qc(i))throw Wm(),Error(t(418));for(;s;)zm(i,s),s=Rr(s.nextSibling)}if(Gm(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="/$"){if(s===0){ei=Rr(i.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}i=i.nextSibling}ei=null}}else ei=Jn?Rr(i.stateNode.nextSibling):null;return!0}function Wm(){for(var i=ei;i;)i=Rr(i.nextSibling)}function Zs(){ei=Jn=null,qt=!1}function ef(i){Mi===null?Mi=[i]:Mi.push(i)}var oM=C.ReactCurrentBatchConfig;function ha(i,s,a){if(i=a.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,i));var p=c,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(w){var U=p.refs;w===null?delete U[_]:U[_]=w},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,i))}return i}function Ul(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Xm(i){var s=i._init;return s(i._payload)}function Ym(i){function s(Z,H){if(i){var ee=Z.deletions;ee===null?(Z.deletions=[H],Z.flags|=16):ee.push(H)}}function a(Z,H){if(!i)return null;for(;H!==null;)s(Z,H),H=H.sibling;return null}function c(Z,H){for(Z=new Map;H!==null;)H.key!==null?Z.set(H.key,H):Z.set(H.index,H),H=H.sibling;return Z}function p(Z,H){return Z=Br(Z,H),Z.index=0,Z.sibling=null,Z}function _(Z,H,ee){return Z.index=ee,i?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<H?(Z.flags|=2,H):ee):(Z.flags|=2,H)):(Z.flags|=1048576,H)}function w(Z){return i&&Z.alternate===null&&(Z.flags|=2),Z}function U(Z,H,ee,Me){return H===null||H.tag!==6?(H=Yf(ee,Z.mode,Me),H.return=Z,H):(H=p(H,ee),H.return=Z,H)}function B(Z,H,ee,Me){var Ke=ee.type;return Ke===O?xe(Z,H,ee.props.children,Me,ee.key):H!==null&&(H.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ae&&Xm(Ke)===H.type)?(Me=p(H,ee.props),Me.ref=ha(Z,H,ee),Me.return=Z,Me):(Me=su(ee.type,ee.key,ee.props,null,Z.mode,Me),Me.ref=ha(Z,H,ee),Me.return=Z,Me)}function se(Z,H,ee,Me){return H===null||H.tag!==4||H.stateNode.containerInfo!==ee.containerInfo||H.stateNode.implementation!==ee.implementation?(H=qf(ee,Z.mode,Me),H.return=Z,H):(H=p(H,ee.children||[]),H.return=Z,H)}function xe(Z,H,ee,Me,Ke){return H===null||H.tag!==7?(H=_s(ee,Z.mode,Me,Ke),H.return=Z,H):(H=p(H,ee),H.return=Z,H)}function ye(Z,H,ee){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Yf(""+H,Z.mode,ee),H.return=Z,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case D:return ee=su(H.type,H.key,H.props,null,Z.mode,ee),ee.ref=ha(Z,null,H),ee.return=Z,ee;case b:return H=qf(H,Z.mode,ee),H.return=Z,H;case ae:var Me=H._init;return ye(Z,Me(H._payload),ee)}if(Kt(H)||oe(H))return H=_s(H,Z.mode,ee,null),H.return=Z,H;Ul(Z,H)}return null}function _e(Z,H,ee,Me){var Ke=H!==null?H.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Ke!==null?null:U(Z,H,""+ee,Me);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case D:return ee.key===Ke?B(Z,H,ee,Me):null;case b:return ee.key===Ke?se(Z,H,ee,Me):null;case ae:return Ke=ee._init,_e(Z,H,Ke(ee._payload),Me)}if(Kt(ee)||oe(ee))return Ke!==null?null:xe(Z,H,ee,Me,null);Ul(Z,ee)}return null}function Fe(Z,H,ee,Me,Ke){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return Z=Z.get(ee)||null,U(H,Z,""+Me,Ke);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case D:return Z=Z.get(Me.key===null?ee:Me.key)||null,B(H,Z,Me,Ke);case b:return Z=Z.get(Me.key===null?ee:Me.key)||null,se(H,Z,Me,Ke);case ae:var tt=Me._init;return Fe(Z,H,ee,tt(Me._payload),Ke)}if(Kt(Me)||oe(Me))return Z=Z.get(ee)||null,xe(H,Z,Me,Ke,null);Ul(H,Me)}return null}function ze(Z,H,ee,Me){for(var Ke=null,tt=null,nt=H,at=H=0,gn=null;nt!==null&&at<ee.length;at++){nt.index>at?(gn=nt,nt=null):gn=nt.sibling;var Rt=_e(Z,nt,ee[at],Me);if(Rt===null){nt===null&&(nt=gn);break}i&&nt&&Rt.alternate===null&&s(Z,nt),H=_(Rt,H,at),tt===null?Ke=Rt:tt.sibling=Rt,tt=Rt,nt=gn}if(at===ee.length)return a(Z,nt),qt&&cs(Z,at),Ke;if(nt===null){for(;at<ee.length;at++)nt=ye(Z,ee[at],Me),nt!==null&&(H=_(nt,H,at),tt===null?Ke=nt:tt.sibling=nt,tt=nt);return qt&&cs(Z,at),Ke}for(nt=c(Z,nt);at<ee.length;at++)gn=Fe(nt,Z,at,ee[at],Me),gn!==null&&(i&&gn.alternate!==null&&nt.delete(gn.key===null?at:gn.key),H=_(gn,H,at),tt===null?Ke=gn:tt.sibling=gn,tt=gn);return i&&nt.forEach(function(kr){return s(Z,kr)}),qt&&cs(Z,at),Ke}function We(Z,H,ee,Me){var Ke=oe(ee);if(typeof Ke!="function")throw Error(t(150));if(ee=Ke.call(ee),ee==null)throw Error(t(151));for(var tt=Ke=null,nt=H,at=H=0,gn=null,Rt=ee.next();nt!==null&&!Rt.done;at++,Rt=ee.next()){nt.index>at?(gn=nt,nt=null):gn=nt.sibling;var kr=_e(Z,nt,Rt.value,Me);if(kr===null){nt===null&&(nt=gn);break}i&&nt&&kr.alternate===null&&s(Z,nt),H=_(kr,H,at),tt===null?Ke=kr:tt.sibling=kr,tt=kr,nt=gn}if(Rt.done)return a(Z,nt),qt&&cs(Z,at),Ke;if(nt===null){for(;!Rt.done;at++,Rt=ee.next())Rt=ye(Z,Rt.value,Me),Rt!==null&&(H=_(Rt,H,at),tt===null?Ke=Rt:tt.sibling=Rt,tt=Rt);return qt&&cs(Z,at),Ke}for(nt=c(Z,nt);!Rt.done;at++,Rt=ee.next())Rt=Fe(nt,Z,at,Rt.value,Me),Rt!==null&&(i&&Rt.alternate!==null&&nt.delete(Rt.key===null?at:Rt.key),H=_(Rt,H,at),tt===null?Ke=Rt:tt.sibling=Rt,tt=Rt);return i&&nt.forEach(function(kM){return s(Z,kM)}),qt&&cs(Z,at),Ke}function sn(Z,H,ee,Me){if(typeof ee=="object"&&ee!==null&&ee.type===O&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case D:e:{for(var Ke=ee.key,tt=H;tt!==null;){if(tt.key===Ke){if(Ke=ee.type,Ke===O){if(tt.tag===7){a(Z,tt.sibling),H=p(tt,ee.props.children),H.return=Z,Z=H;break e}}else if(tt.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ae&&Xm(Ke)===tt.type){a(Z,tt.sibling),H=p(tt,ee.props),H.ref=ha(Z,tt,ee),H.return=Z,Z=H;break e}a(Z,tt);break}else s(Z,tt);tt=tt.sibling}ee.type===O?(H=_s(ee.props.children,Z.mode,Me,ee.key),H.return=Z,Z=H):(Me=su(ee.type,ee.key,ee.props,null,Z.mode,Me),Me.ref=ha(Z,H,ee),Me.return=Z,Z=Me)}return w(Z);case b:e:{for(tt=ee.key;H!==null;){if(H.key===tt)if(H.tag===4&&H.stateNode.containerInfo===ee.containerInfo&&H.stateNode.implementation===ee.implementation){a(Z,H.sibling),H=p(H,ee.children||[]),H.return=Z,Z=H;break e}else{a(Z,H);break}else s(Z,H);H=H.sibling}H=qf(ee,Z.mode,Me),H.return=Z,Z=H}return w(Z);case ae:return tt=ee._init,sn(Z,H,tt(ee._payload),Me)}if(Kt(ee))return ze(Z,H,ee,Me);if(oe(ee))return We(Z,H,ee,Me);Ul(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,H!==null&&H.tag===6?(a(Z,H.sibling),H=p(H,ee),H.return=Z,Z=H):(a(Z,H),H=Yf(ee,Z.mode,Me),H.return=Z,Z=H),w(Z)):a(Z,H)}return sn}var Qs=Ym(!0),qm=Ym(!1),Fl=Cr(null),Ol=null,Js=null,tf=null;function nf(){tf=Js=Ol=null}function rf(i){var s=Fl.current;Vt(Fl),i._currentValue=s}function sf(i,s,a){for(;i!==null;){var c=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),i===a)break;i=i.return}}function eo(i,s){Ol=i,tf=Js=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Yn=!0),i.firstContext=null)}function ci(i){var s=i._currentValue;if(tf!==i)if(i={context:i,memoizedValue:s,next:null},Js===null){if(Ol===null)throw Error(t(308));Js=i,Ol.dependencies={lanes:0,firstContext:i}}else Js=Js.next=i;return s}var fs=null;function of(i){fs===null?fs=[i]:fs.push(i)}function Km(i,s,a,c){var p=s.interleaved;return p===null?(a.next=a,of(s)):(a.next=p.next,p.next=a),s.interleaved=a,nr(i,c)}function nr(i,s){i.lanes|=s;var a=i.alternate;for(a!==null&&(a.lanes|=s),a=i,i=i.return;i!==null;)i.childLanes|=s,a=i.alternate,a!==null&&(a.childLanes|=s),a=i,i=i.return;return a.tag===3?a.stateNode:null}var Dr=!1;function af(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $m(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function ir(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Lr(i,s,a){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(Tt&2)!==0){var p=c.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),c.pending=s,nr(i,a)}return p=c.interleaved,p===null?(s.next=s,of(c)):(s.next=p.next,p.next=s),c.interleaved=s,nr(i,a)}function Bl(i,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=i.pendingLanes,a|=c,s.lanes=a,Gn(i,a)}}function jm(i,s){var a=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var p=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};_===null?p=_=w:_=_.next=w,a=a.next}while(a!==null);_===null?p=_=s:_=_.next=s}else p=_=s;a={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:c.shared,effects:c.effects},i.updateQueue=a;return}i=a.lastBaseUpdate,i===null?a.firstBaseUpdate=s:i.next=s,a.lastBaseUpdate=s}function kl(i,s,a,c){var p=i.updateQueue;Dr=!1;var _=p.firstBaseUpdate,w=p.lastBaseUpdate,U=p.shared.pending;if(U!==null){p.shared.pending=null;var B=U,se=B.next;B.next=null,w===null?_=se:w.next=se,w=B;var xe=i.alternate;xe!==null&&(xe=xe.updateQueue,U=xe.lastBaseUpdate,U!==w&&(U===null?xe.firstBaseUpdate=se:U.next=se,xe.lastBaseUpdate=B))}if(_!==null){var ye=p.baseState;w=0,xe=se=B=null,U=_;do{var _e=U.lane,Fe=U.eventTime;if((c&_e)===_e){xe!==null&&(xe=xe.next={eventTime:Fe,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var ze=i,We=U;switch(_e=s,Fe=a,We.tag){case 1:if(ze=We.payload,typeof ze=="function"){ye=ze.call(Fe,ye,_e);break e}ye=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=We.payload,_e=typeof ze=="function"?ze.call(Fe,ye,_e):ze,_e==null)break e;ye=le({},ye,_e);break e;case 2:Dr=!0}}U.callback!==null&&U.lane!==0&&(i.flags|=64,_e=p.effects,_e===null?p.effects=[U]:_e.push(U))}else Fe={eventTime:Fe,lane:_e,tag:U.tag,payload:U.payload,callback:U.callback,next:null},xe===null?(se=xe=Fe,B=ye):xe=xe.next=Fe,w|=_e;if(U=U.next,U===null){if(U=p.shared.pending,U===null)break;_e=U,U=_e.next,_e.next=null,p.lastBaseUpdate=_e,p.shared.pending=null}}while(!0);if(xe===null&&(B=ye),p.baseState=B,p.firstBaseUpdate=se,p.lastBaseUpdate=xe,s=p.shared.interleaved,s!==null){p=s;do w|=p.lane,p=p.next;while(p!==s)}else _===null&&(p.shared.lanes=0);ps|=w,i.lanes=w,i.memoizedState=ye}}function Zm(i,s,a){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var c=i[s],p=c.callback;if(p!==null){if(c.callback=null,c=a,typeof p!="function")throw Error(t(191,p));p.call(c)}}}var pa={},ki=Cr(pa),ma=Cr(pa),ga=Cr(pa);function ds(i){if(i===pa)throw Error(t(174));return i}function lf(i,s){switch(Ot(ga,s),Ot(ma,i),Ot(ki,pa),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:E(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=E(s,i)}Vt(ki),Ot(ki,s)}function to(){Vt(ki),Vt(ma),Vt(ga)}function Qm(i){ds(ga.current);var s=ds(ki.current),a=E(s,i.type);s!==a&&(Ot(ma,i),Ot(ki,a))}function uf(i){ma.current===i&&(Vt(ki),Vt(ma))}var jt=Cr(0);function Vl(i){for(var s=i;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var cf=[];function ff(){for(var i=0;i<cf.length;i++)cf[i]._workInProgressVersionPrimary=null;cf.length=0}var zl=C.ReactCurrentDispatcher,df=C.ReactCurrentBatchConfig,hs=0,Zt=null,cn=null,pn=null,Hl=!1,va=!1,_a=0,aM=0;function An(){throw Error(t(321))}function hf(i,s){if(s===null)return!1;for(var a=0;a<s.length&&a<i.length;a++)if(!Si(i[a],s[a]))return!1;return!0}function pf(i,s,a,c,p,_){if(hs=_,Zt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,zl.current=i===null||i.memoizedState===null?fM:dM,i=a(c,p),va){_=0;do{if(va=!1,_a=0,25<=_)throw Error(t(301));_+=1,pn=cn=null,s.updateQueue=null,zl.current=hM,i=a(c,p)}while(va)}if(zl.current=Xl,s=cn!==null&&cn.next!==null,hs=0,pn=cn=Zt=null,Hl=!1,s)throw Error(t(300));return i}function mf(){var i=_a!==0;return _a=0,i}function Vi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?Zt.memoizedState=pn=i:pn=pn.next=i,pn}function fi(){if(cn===null){var i=Zt.alternate;i=i!==null?i.memoizedState:null}else i=cn.next;var s=pn===null?Zt.memoizedState:pn.next;if(s!==null)pn=s,cn=i;else{if(i===null)throw Error(t(310));cn=i,i={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},pn===null?Zt.memoizedState=pn=i:pn=pn.next=i}return pn}function xa(i,s){return typeof s=="function"?s(i):s}function gf(i){var s=fi(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var c=cn,p=c.baseQueue,_=a.pending;if(_!==null){if(p!==null){var w=p.next;p.next=_.next,_.next=w}c.baseQueue=p=_,a.pending=null}if(p!==null){_=p.next,c=c.baseState;var U=w=null,B=null,se=_;do{var xe=se.lane;if((hs&xe)===xe)B!==null&&(B=B.next={lane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),c=se.hasEagerState?se.eagerState:i(c,se.action);else{var ye={lane:xe,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null};B===null?(U=B=ye,w=c):B=B.next=ye,Zt.lanes|=xe,ps|=xe}se=se.next}while(se!==null&&se!==_);B===null?w=c:B.next=U,Si(c,s.memoizedState)||(Yn=!0),s.memoizedState=c,s.baseState=w,s.baseQueue=B,a.lastRenderedState=c}if(i=a.interleaved,i!==null){p=i;do _=p.lane,Zt.lanes|=_,ps|=_,p=p.next;while(p!==i)}else p===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function vf(i){var s=fi(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var c=a.dispatch,p=a.pending,_=s.memoizedState;if(p!==null){a.pending=null;var w=p=p.next;do _=i(_,w.action),w=w.next;while(w!==p);Si(_,s.memoizedState)||(Yn=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),a.lastRenderedState=_}return[_,c]}function Jm(){}function eg(i,s){var a=Zt,c=fi(),p=s(),_=!Si(c.memoizedState,p);if(_&&(c.memoizedState=p,Yn=!0),c=c.queue,_f(ig.bind(null,a,c,i),[i]),c.getSnapshot!==s||_||pn!==null&&pn.memoizedState.tag&1){if(a.flags|=2048,ya(9,ng.bind(null,a,c,p,s),void 0,null),mn===null)throw Error(t(349));(hs&30)!==0||tg(a,s,p)}return p}function tg(i,s,a){i.flags|=16384,i={getSnapshot:s,value:a},s=Zt.updateQueue,s===null?(s={lastEffect:null,stores:null},Zt.updateQueue=s,s.stores=[i]):(a=s.stores,a===null?s.stores=[i]:a.push(i))}function ng(i,s,a,c){s.value=a,s.getSnapshot=c,rg(s)&&sg(i)}function ig(i,s,a){return a(function(){rg(s)&&sg(i)})}function rg(i){var s=i.getSnapshot;i=i.value;try{var a=s();return!Si(i,a)}catch{return!0}}function sg(i){var s=nr(i,1);s!==null&&Ai(s,i,1,-1)}function og(i){var s=Vi();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:i},s.queue=i,i=i.dispatch=cM.bind(null,Zt,i),[s.memoizedState,i]}function ya(i,s,a,c){return i={tag:i,create:s,destroy:a,deps:c,next:null},s=Zt.updateQueue,s===null?(s={lastEffect:null,stores:null},Zt.updateQueue=s,s.lastEffect=i.next=i):(a=s.lastEffect,a===null?s.lastEffect=i.next=i:(c=a.next,a.next=i,i.next=c,s.lastEffect=i)),i}function ag(){return fi().memoizedState}function Gl(i,s,a,c){var p=Vi();Zt.flags|=i,p.memoizedState=ya(1|s,a,void 0,c===void 0?null:c)}function Wl(i,s,a,c){var p=fi();c=c===void 0?null:c;var _=void 0;if(cn!==null){var w=cn.memoizedState;if(_=w.destroy,c!==null&&hf(c,w.deps)){p.memoizedState=ya(s,a,_,c);return}}Zt.flags|=i,p.memoizedState=ya(1|s,a,_,c)}function lg(i,s){return Gl(8390656,8,i,s)}function _f(i,s){return Wl(2048,8,i,s)}function ug(i,s){return Wl(4,2,i,s)}function cg(i,s){return Wl(4,4,i,s)}function fg(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function dg(i,s,a){return a=a!=null?a.concat([i]):null,Wl(4,4,fg.bind(null,s,i),a)}function xf(){}function hg(i,s){var a=fi();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&hf(s,c[1])?c[0]:(a.memoizedState=[i,s],i)}function pg(i,s){var a=fi();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&hf(s,c[1])?c[0]:(i=i(),a.memoizedState=[i,s],i)}function mg(i,s,a){return(hs&21)===0?(i.baseState&&(i.baseState=!1,Yn=!0),i.memoizedState=a):(Si(a,s)||(a=Ue(),Zt.lanes|=a,ps|=a,i.baseState=!0),s)}function lM(i,s){var a=mt;mt=a!==0&&4>a?a:4,i(!0);var c=df.transition;df.transition={};try{i(!1),s()}finally{mt=a,df.transition=c}}function gg(){return fi().memoizedState}function uM(i,s,a){var c=Fr(i);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},vg(i))_g(s,a);else if(a=Km(i,s,a,c),a!==null){var p=Bn();Ai(a,i,c,p),xg(a,s,c)}}function cM(i,s,a){var c=Fr(i),p={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(vg(i))_g(s,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var w=s.lastRenderedState,U=_(w,a);if(p.hasEagerState=!0,p.eagerState=U,Si(U,w)){var B=s.interleaved;B===null?(p.next=p,of(s)):(p.next=B.next,B.next=p),s.interleaved=p;return}}catch{}finally{}a=Km(i,s,p,c),a!==null&&(p=Bn(),Ai(a,i,c,p),xg(a,s,c))}}function vg(i){var s=i.alternate;return i===Zt||s!==null&&s===Zt}function _g(i,s){va=Hl=!0;var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}function xg(i,s,a){if((a&4194240)!==0){var c=s.lanes;c&=i.pendingLanes,a|=c,s.lanes=a,Gn(i,a)}}var Xl={readContext:ci,useCallback:An,useContext:An,useEffect:An,useImperativeHandle:An,useInsertionEffect:An,useLayoutEffect:An,useMemo:An,useReducer:An,useRef:An,useState:An,useDebugValue:An,useDeferredValue:An,useTransition:An,useMutableSource:An,useSyncExternalStore:An,useId:An,unstable_isNewReconciler:!1},fM={readContext:ci,useCallback:function(i,s){return Vi().memoizedState=[i,s===void 0?null:s],i},useContext:ci,useEffect:lg,useImperativeHandle:function(i,s,a){return a=a!=null?a.concat([i]):null,Gl(4194308,4,fg.bind(null,s,i),a)},useLayoutEffect:function(i,s){return Gl(4194308,4,i,s)},useInsertionEffect:function(i,s){return Gl(4,2,i,s)},useMemo:function(i,s){var a=Vi();return s=s===void 0?null:s,i=i(),a.memoizedState=[i,s],i},useReducer:function(i,s,a){var c=Vi();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},c.queue=i,i=i.dispatch=uM.bind(null,Zt,i),[c.memoizedState,i]},useRef:function(i){var s=Vi();return i={current:i},s.memoizedState=i},useState:og,useDebugValue:xf,useDeferredValue:function(i){return Vi().memoizedState=i},useTransition:function(){var i=og(!1),s=i[0];return i=lM.bind(null,i[1]),Vi().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,a){var c=Zt,p=Vi();if(qt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),mn===null)throw Error(t(349));(hs&30)!==0||tg(c,s,a)}p.memoizedState=a;var _={value:a,getSnapshot:s};return p.queue=_,lg(ig.bind(null,c,_,i),[i]),c.flags|=2048,ya(9,ng.bind(null,c,_,a,s),void 0,null),a},useId:function(){var i=Vi(),s=mn.identifierPrefix;if(qt){var a=tr,c=er;a=(c&~(1<<32-Ee(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=_a++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=aM++,s=":"+s+"r"+a.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},dM={readContext:ci,useCallback:hg,useContext:ci,useEffect:_f,useImperativeHandle:dg,useInsertionEffect:ug,useLayoutEffect:cg,useMemo:pg,useReducer:gf,useRef:ag,useState:function(){return gf(xa)},useDebugValue:xf,useDeferredValue:function(i){var s=fi();return mg(s,cn.memoizedState,i)},useTransition:function(){var i=gf(xa)[0],s=fi().memoizedState;return[i,s]},useMutableSource:Jm,useSyncExternalStore:eg,useId:gg,unstable_isNewReconciler:!1},hM={readContext:ci,useCallback:hg,useContext:ci,useEffect:_f,useImperativeHandle:dg,useInsertionEffect:ug,useLayoutEffect:cg,useMemo:pg,useReducer:vf,useRef:ag,useState:function(){return vf(xa)},useDebugValue:xf,useDeferredValue:function(i){var s=fi();return cn===null?s.memoizedState=i:mg(s,cn.memoizedState,i)},useTransition:function(){var i=vf(xa)[0],s=fi().memoizedState;return[i,s]},useMutableSource:Jm,useSyncExternalStore:eg,useId:gg,unstable_isNewReconciler:!1};function Ei(i,s){if(i&&i.defaultProps){s=le({},s),i=i.defaultProps;for(var a in i)s[a]===void 0&&(s[a]=i[a]);return s}return s}function yf(i,s,a,c){s=i.memoizedState,a=a(c,s),a=a==null?s:le({},s,a),i.memoizedState=a,i.lanes===0&&(i.updateQueue.baseState=a)}var Yl={isMounted:function(i){return(i=i._reactInternals)?Fn(i)===i:!1},enqueueSetState:function(i,s,a){i=i._reactInternals;var c=Bn(),p=Fr(i),_=ir(c,p);_.payload=s,a!=null&&(_.callback=a),s=Lr(i,_,p),s!==null&&(Ai(s,i,p,c),Bl(s,i,p))},enqueueReplaceState:function(i,s,a){i=i._reactInternals;var c=Bn(),p=Fr(i),_=ir(c,p);_.tag=1,_.payload=s,a!=null&&(_.callback=a),s=Lr(i,_,p),s!==null&&(Ai(s,i,p,c),Bl(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var a=Bn(),c=Fr(i),p=ir(a,c);p.tag=2,s!=null&&(p.callback=s),s=Lr(i,p,c),s!==null&&(Ai(s,i,c,a),Bl(s,i,c))}};function yg(i,s,a,c,p,_,w){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,_,w):s.prototype&&s.prototype.isPureReactComponent?!oa(a,c)||!oa(p,_):!0}function Sg(i,s,a){var c=!1,p=br,_=s.contextType;return typeof _=="object"&&_!==null?_=ci(_):(p=Xn(s)?ls:wn.current,c=s.contextTypes,_=(c=c!=null)?Ks(i,p):br),s=new s(a,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Yl,i.stateNode=s,s._reactInternals=i,c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),s}function Mg(i,s,a,c){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==i&&Yl.enqueueReplaceState(s,s.state,null)}function Sf(i,s,a,c){var p=i.stateNode;p.props=a,p.state=i.memoizedState,p.refs={},af(i);var _=s.contextType;typeof _=="object"&&_!==null?p.context=ci(_):(_=Xn(s)?ls:wn.current,p.context=Ks(i,_)),p.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(yf(i,s,_,a),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&Yl.enqueueReplaceState(p,p.state,null),kl(i,a,p,c),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function no(i,s){try{var a="",c=s;do a+=ke(c),c=c.return;while(c);var p=a}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:p,digest:null}}function Mf(i,s,a){return{value:i,source:null,stack:a??null,digest:s??null}}function Ef(i,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var pM=typeof WeakMap=="function"?WeakMap:Map;function Eg(i,s,a){a=ir(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Jl||(Jl=!0,Bf=c),Ef(i,s)},a}function Tg(i,s,a){a=ir(-1,a),a.tag=3;var c=i.type.getDerivedStateFromError;if(typeof c=="function"){var p=s.value;a.payload=function(){return c(p)},a.callback=function(){Ef(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(a.callback=function(){Ef(i,s),typeof c!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function wg(i,s,a){var c=i.pingCache;if(c===null){c=i.pingCache=new pM;var p=new Set;c.set(s,p)}else p=c.get(s),p===void 0&&(p=new Set,c.set(s,p));p.has(a)||(p.add(a),i=CM.bind(null,i,s,a),s.then(i,i))}function Ag(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function Rg(i,s,a,c,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=ir(-1,1),s.tag=2,Lr(a,s,1))),a.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var mM=C.ReactCurrentOwner,Yn=!1;function On(i,s,a,c){s.child=i===null?qm(s,null,a,c):Qs(s,i.child,a,c)}function Cg(i,s,a,c,p){a=a.render;var _=s.ref;return eo(s,p),c=pf(i,s,a,c,_,p),a=mf(),i!==null&&!Yn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,rr(i,s,p)):(qt&&a&&jc(s),s.flags|=1,On(i,s,c,p),s.child)}function bg(i,s,a,c,p){if(i===null){var _=a.type;return typeof _=="function"&&!Xf(_)&&_.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=_,Pg(i,s,_,c,p)):(i=su(a.type,null,c,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,(i.lanes&p)===0){var w=_.memoizedProps;if(a=a.compare,a=a!==null?a:oa,a(w,c)&&i.ref===s.ref)return rr(i,s,p)}return s.flags|=1,i=Br(_,c),i.ref=s.ref,i.return=s,s.child=i}function Pg(i,s,a,c,p){if(i!==null){var _=i.memoizedProps;if(oa(_,c)&&i.ref===s.ref)if(Yn=!1,s.pendingProps=c=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(Yn=!0);else return s.lanes=i.lanes,rr(i,s,p)}return Tf(i,s,a,c,p)}function Dg(i,s,a){var c=s.pendingProps,p=c.children,_=i!==null?i.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(ro,ti),ti|=a;else{if((a&1073741824)===0)return i=_!==null?_.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Ot(ro,ti),ti|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=_!==null?_.baseLanes:a,Ot(ro,ti),ti|=c}else _!==null?(c=_.baseLanes|a,s.memoizedState=null):c=a,Ot(ro,ti),ti|=c;return On(i,s,p,a),s.child}function Lg(i,s){var a=s.ref;(i===null&&a!==null||i!==null&&i.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Tf(i,s,a,c,p){var _=Xn(a)?ls:wn.current;return _=Ks(s,_),eo(s,p),a=pf(i,s,a,c,_,p),c=mf(),i!==null&&!Yn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,rr(i,s,p)):(qt&&c&&jc(s),s.flags|=1,On(i,s,a,p),s.child)}function Ig(i,s,a,c,p){if(Xn(a)){var _=!0;Pl(s)}else _=!1;if(eo(s,p),s.stateNode===null)Kl(i,s),Sg(s,a,c),Sf(s,a,c,p),c=!0;else if(i===null){var w=s.stateNode,U=s.memoizedProps;w.props=U;var B=w.context,se=a.contextType;typeof se=="object"&&se!==null?se=ci(se):(se=Xn(a)?ls:wn.current,se=Ks(s,se));var xe=a.getDerivedStateFromProps,ye=typeof xe=="function"||typeof w.getSnapshotBeforeUpdate=="function";ye||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==c||B!==se)&&Mg(s,w,c,se),Dr=!1;var _e=s.memoizedState;w.state=_e,kl(s,c,w,p),B=s.memoizedState,U!==c||_e!==B||Wn.current||Dr?(typeof xe=="function"&&(yf(s,a,xe,c),B=s.memoizedState),(U=Dr||yg(s,a,U,c,_e,B,se))?(ye||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=B),w.props=c,w.state=B,w.context=se,c=U):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{w=s.stateNode,$m(i,s),U=s.memoizedProps,se=s.type===s.elementType?U:Ei(s.type,U),w.props=se,ye=s.pendingProps,_e=w.context,B=a.contextType,typeof B=="object"&&B!==null?B=ci(B):(B=Xn(a)?ls:wn.current,B=Ks(s,B));var Fe=a.getDerivedStateFromProps;(xe=typeof Fe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==ye||_e!==B)&&Mg(s,w,c,B),Dr=!1,_e=s.memoizedState,w.state=_e,kl(s,c,w,p);var ze=s.memoizedState;U!==ye||_e!==ze||Wn.current||Dr?(typeof Fe=="function"&&(yf(s,a,Fe,c),ze=s.memoizedState),(se=Dr||yg(s,a,se,c,_e,ze,B)||!1)?(xe||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,ze,B),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,ze,B)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||U===i.memoizedProps&&_e===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===i.memoizedProps&&_e===i.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ze),w.props=c,w.state=ze,w.context=B,c=se):(typeof w.componentDidUpdate!="function"||U===i.memoizedProps&&_e===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===i.memoizedProps&&_e===i.memoizedState||(s.flags|=1024),c=!1)}return wf(i,s,a,c,_,p)}function wf(i,s,a,c,p,_){Lg(i,s);var w=(s.flags&128)!==0;if(!c&&!w)return p&&Bm(s,a,!1),rr(i,s,_);c=s.stateNode,mM.current=s;var U=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,i!==null&&w?(s.child=Qs(s,i.child,null,_),s.child=Qs(s,null,U,_)):On(i,s,U,_),s.memoizedState=c.state,p&&Bm(s,a,!0),s.child}function Ng(i){var s=i.stateNode;s.pendingContext?Fm(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Fm(i,s.context,!1),lf(i,s.containerInfo)}function Ug(i,s,a,c,p){return Zs(),ef(p),s.flags|=256,On(i,s,a,c),s.child}var Af={dehydrated:null,treeContext:null,retryLane:0};function Rf(i){return{baseLanes:i,cachePool:null,transitions:null}}function Fg(i,s,a){var c=s.pendingProps,p=jt.current,_=!1,w=(s.flags&128)!==0,U;if((U=w)||(U=i!==null&&i.memoizedState===null?!1:(p&2)!==0),U?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Ot(jt,p&1),i===null)return Jc(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=c.children,i=c.fallback,_?(c=s.mode,_=s.child,w={mode:"hidden",children:w},(c&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=w):_=ou(w,c,0,null),i=_s(i,c,a,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=Rf(a),s.memoizedState=Af,i):Cf(s,w));if(p=i.memoizedState,p!==null&&(U=p.dehydrated,U!==null))return gM(i,s,w,c,U,p,a);if(_){_=c.fallback,w=s.mode,p=i.child,U=p.sibling;var B={mode:"hidden",children:c.children};return(w&1)===0&&s.child!==p?(c=s.child,c.childLanes=0,c.pendingProps=B,s.deletions=null):(c=Br(p,B),c.subtreeFlags=p.subtreeFlags&14680064),U!==null?_=Br(U,_):(_=_s(_,w,a,null),_.flags|=2),_.return=s,c.return=s,c.sibling=_,s.child=c,c=_,_=s.child,w=i.child.memoizedState,w=w===null?Rf(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},_.memoizedState=w,_.childLanes=i.childLanes&~a,s.memoizedState=Af,c}return _=i.child,i=_.sibling,c=Br(_,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,i!==null&&(a=s.deletions,a===null?(s.deletions=[i],s.flags|=16):a.push(i)),s.child=c,s.memoizedState=null,c}function Cf(i,s){return s=ou({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function ql(i,s,a,c){return c!==null&&ef(c),Qs(s,i.child,null,a),i=Cf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function gM(i,s,a,c,p,_,w){if(a)return s.flags&256?(s.flags&=-257,c=Mf(Error(t(422))),ql(i,s,w,c)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=c.fallback,p=s.mode,c=ou({mode:"visible",children:c.children},p,0,null),_=_s(_,p,w,null),_.flags|=2,c.return=s,_.return=s,c.sibling=_,s.child=c,(s.mode&1)!==0&&Qs(s,i.child,null,w),s.child.memoizedState=Rf(w),s.memoizedState=Af,_);if((s.mode&1)===0)return ql(i,s,w,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var U=c.dgst;return c=U,_=Error(t(419)),c=Mf(_,c,void 0),ql(i,s,w,c)}if(U=(w&i.childLanes)!==0,Yn||U){if(c=mn,c!==null){switch(w&-w){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|w))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,nr(i,p),Ai(c,i,p,-1))}return Wf(),c=Mf(Error(t(421))),ql(i,s,w,c)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=bM.bind(null,i),p._reactRetry=s,null):(i=_.treeContext,ei=Rr(p.nextSibling),Jn=s,qt=!0,Mi=null,i!==null&&(li[ui++]=er,li[ui++]=tr,li[ui++]=us,er=i.id,tr=i.overflow,us=s),s=Cf(s,c.children),s.flags|=4096,s)}function Og(i,s,a){i.lanes|=s;var c=i.alternate;c!==null&&(c.lanes|=s),sf(i.return,s,a)}function bf(i,s,a,c,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:p}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=c,_.tail=a,_.tailMode=p)}function Bg(i,s,a){var c=s.pendingProps,p=c.revealOrder,_=c.tail;if(On(i,s,c.children,a),c=jt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Og(i,a,s);else if(i.tag===19)Og(i,a,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}if(Ot(jt,c),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(a=s.child,p=null;a!==null;)i=a.alternate,i!==null&&Vl(i)===null&&(p=a),a=a.sibling;a=p,a===null?(p=s.child,s.child=null):(p=a.sibling,a.sibling=null),bf(s,!1,p,a,_);break;case"backwards":for(a=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&Vl(i)===null){s.child=p;break}i=p.sibling,p.sibling=a,a=p,p=i}bf(s,!0,a,null,_);break;case"together":bf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Kl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function rr(i,s,a){if(i!==null&&(s.dependencies=i.dependencies),ps|=s.lanes,(a&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,a=Br(i,i.pendingProps),s.child=a,a.return=s;i.sibling!==null;)i=i.sibling,a=a.sibling=Br(i,i.pendingProps),a.return=s;a.sibling=null}return s.child}function vM(i,s,a){switch(s.tag){case 3:Ng(s),Zs();break;case 5:Qm(s);break;case 1:Xn(s.type)&&Pl(s);break;case 4:lf(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,p=s.memoizedProps.value;Ot(Fl,c._currentValue),c._currentValue=p;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Ot(jt,jt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Fg(i,s,a):(Ot(jt,jt.current&1),i=rr(i,s,a),i!==null?i.sibling:null);Ot(jt,jt.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(i.flags&128)!==0){if(c)return Bg(i,s,a);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ot(jt,jt.current),c)break;return null;case 22:case 23:return s.lanes=0,Dg(i,s,a)}return rr(i,s,a)}var kg,Pf,Vg,zg;kg=function(i,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)i.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Pf=function(){},Vg=function(i,s,a,c){var p=i.memoizedProps;if(p!==c){i=s.stateNode,ds(ki.current);var _=null;switch(a){case"input":p=Ct(i,p),c=Ct(i,c),_=[];break;case"select":p=le({},p,{value:void 0}),c=le({},c,{value:void 0}),_=[];break;case"textarea":p=Xt(i,p),c=Xt(i,c),_=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(i.onclick=Rl)}Xe(a,c);var w;a=null;for(se in p)if(!c.hasOwnProperty(se)&&p.hasOwnProperty(se)&&p[se]!=null)if(se==="style"){var U=p[se];for(w in U)U.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else se!=="dangerouslySetInnerHTML"&&se!=="children"&&se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&se!=="autoFocus"&&(o.hasOwnProperty(se)?_||(_=[]):(_=_||[]).push(se,null));for(se in c){var B=c[se];if(U=p!=null?p[se]:void 0,c.hasOwnProperty(se)&&B!==U&&(B!=null||U!=null))if(se==="style")if(U){for(w in U)!U.hasOwnProperty(w)||B&&B.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in B)B.hasOwnProperty(w)&&U[w]!==B[w]&&(a||(a={}),a[w]=B[w])}else a||(_||(_=[]),_.push(se,a)),a=B;else se==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,U=U?U.__html:void 0,B!=null&&U!==B&&(_=_||[]).push(se,B)):se==="children"?typeof B!="string"&&typeof B!="number"||(_=_||[]).push(se,""+B):se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&(o.hasOwnProperty(se)?(B!=null&&se==="onScroll"&&kt("scroll",i),_||U===B||(_=[])):(_=_||[]).push(se,B))}a&&(_=_||[]).push("style",a);var se=_;(s.updateQueue=se)&&(s.flags|=4)}},zg=function(i,s,a,c){a!==c&&(s.flags|=4)};function Sa(i,s){if(!qt)switch(i.tailMode){case"hidden":s=i.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?i.tail=null:a.sibling=null;break;case"collapsed":a=i.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function Rn(i){var s=i.alternate!==null&&i.alternate.child===i.child,a=0,c=0;if(s)for(var p=i.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=c,i.childLanes=a,s}function _M(i,s,a){var c=s.pendingProps;switch(Zc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rn(s),null;case 1:return Xn(s.type)&&bl(),Rn(s),null;case 3:return c=s.stateNode,to(),Vt(Wn),Vt(wn),ff(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(i===null||i.child===null)&&(Nl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Mi!==null&&(zf(Mi),Mi=null))),Pf(i,s),Rn(s),null;case 5:uf(s);var p=ds(ga.current);if(a=s.type,i!==null&&s.stateNode!=null)Vg(i,s,a,c,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Rn(s),null}if(i=ds(ki.current),Nl(s)){c=s.stateNode,a=s.type;var _=s.memoizedProps;switch(c[Bi]=s,c[fa]=_,i=(s.mode&1)!==0,a){case"dialog":kt("cancel",c),kt("close",c);break;case"iframe":case"object":case"embed":kt("load",c);break;case"video":case"audio":for(p=0;p<la.length;p++)kt(la[p],c);break;case"source":kt("error",c);break;case"img":case"image":case"link":kt("error",c),kt("load",c);break;case"details":kt("toggle",c);break;case"input":Mt(c,_),kt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!_.multiple},kt("invalid",c);break;case"textarea":W(c,_),kt("invalid",c)}Xe(a,_),p=null;for(var w in _)if(_.hasOwnProperty(w)){var U=_[w];w==="children"?typeof U=="string"?c.textContent!==U&&(_.suppressHydrationWarning!==!0&&Al(c.textContent,U,i),p=["children",U]):typeof U=="number"&&c.textContent!==""+U&&(_.suppressHydrationWarning!==!0&&Al(c.textContent,U,i),p=["children",""+U]):o.hasOwnProperty(w)&&U!=null&&w==="onScroll"&&kt("scroll",c)}switch(a){case"input":Je(c),en(c,_,!0);break;case"textarea":Je(c),At(c);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(c.onclick=Rl)}c=p,s.updateQueue=c,c!==null&&(s.flags|=4)}else{w=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=N(a)),i==="http://www.w3.org/1999/xhtml"?a==="script"?(i=w.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof c.is=="string"?i=w.createElement(a,{is:c.is}):(i=w.createElement(a),a==="select"&&(w=i,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):i=w.createElementNS(i,a),i[Bi]=s,i[fa]=c,kg(i,s,!1,!1),s.stateNode=i;e:{switch(w=Pe(a,c),a){case"dialog":kt("cancel",i),kt("close",i),p=c;break;case"iframe":case"object":case"embed":kt("load",i),p=c;break;case"video":case"audio":for(p=0;p<la.length;p++)kt(la[p],i);p=c;break;case"source":kt("error",i),p=c;break;case"img":case"image":case"link":kt("error",i),kt("load",i),p=c;break;case"details":kt("toggle",i),p=c;break;case"input":Mt(i,c),p=Ct(i,c),kt("invalid",i);break;case"option":p=c;break;case"select":i._wrapperState={wasMultiple:!!c.multiple},p=le({},c,{value:void 0}),kt("invalid",i);break;case"textarea":W(i,c),p=Xt(i,c),kt("invalid",i);break;default:p=c}Xe(a,p),U=p;for(_ in U)if(U.hasOwnProperty(_)){var B=U[_];_==="style"?me(i,B):_==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&ne(i,B)):_==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&fe(i,B):typeof B=="number"&&fe(i,""+B):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?B!=null&&_==="onScroll"&&kt("scroll",i):B!=null&&I(i,_,B,w))}switch(a){case"input":Je(i),en(i,c,!1);break;case"textarea":Je(i),At(i);break;case"option":c.value!=null&&i.setAttribute("value",""+pe(c.value));break;case"select":i.multiple=!!c.multiple,_=c.value,_!=null?Dt(i,!!c.multiple,_,!1):c.defaultValue!=null&&Dt(i,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Rl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Rn(s),null;case 6:if(i&&s.stateNode!=null)zg(i,s,i.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=ds(ga.current),ds(ki.current),Nl(s)){if(c=s.stateNode,a=s.memoizedProps,c[Bi]=s,(_=c.nodeValue!==a)&&(i=Jn,i!==null))switch(i.tag){case 3:Al(c.nodeValue,a,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Al(c.nodeValue,a,(i.mode&1)!==0)}_&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Bi]=s,s.stateNode=c}return Rn(s),null;case 13:if(Vt(jt),c=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(qt&&ei!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Wm(),Zs(),s.flags|=98560,_=!1;else if(_=Nl(s),c!==null&&c.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Bi]=s}else Zs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Rn(s),_=!1}else Mi!==null&&(zf(Mi),Mi=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(i!==null&&i.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(jt.current&1)!==0?fn===0&&(fn=3):Wf())),s.updateQueue!==null&&(s.flags|=4),Rn(s),null);case 4:return to(),Pf(i,s),i===null&&ua(s.stateNode.containerInfo),Rn(s),null;case 10:return rf(s.type._context),Rn(s),null;case 17:return Xn(s.type)&&bl(),Rn(s),null;case 19:if(Vt(jt),_=s.memoizedState,_===null)return Rn(s),null;if(c=(s.flags&128)!==0,w=_.rendering,w===null)if(c)Sa(_,!1);else{if(fn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(w=Vl(i),w!==null){for(s.flags|=128,Sa(_,!1),c=w.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)_=a,i=c,_.flags&=14680066,w=_.alternate,w===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=w.childLanes,_.lanes=w.lanes,_.child=w.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=w.memoizedProps,_.memoizedState=w.memoizedState,_.updateQueue=w.updateQueue,_.type=w.type,i=w.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a=a.sibling;return Ot(jt,jt.current&1|2),s.child}i=i.sibling}_.tail!==null&&$t()>so&&(s.flags|=128,c=!0,Sa(_,!1),s.lanes=4194304)}else{if(!c)if(i=Vl(w),i!==null){if(s.flags|=128,c=!0,a=i.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Sa(_,!0),_.tail===null&&_.tailMode==="hidden"&&!w.alternate&&!qt)return Rn(s),null}else 2*$t()-_.renderingStartTime>so&&a!==1073741824&&(s.flags|=128,c=!0,Sa(_,!1),s.lanes=4194304);_.isBackwards?(w.sibling=s.child,s.child=w):(a=_.last,a!==null?a.sibling=w:s.child=w,_.last=w)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=$t(),s.sibling=null,a=jt.current,Ot(jt,c?a&1|2:a&1),s):(Rn(s),null);case 22:case 23:return Gf(),c=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(ti&1073741824)!==0&&(Rn(s),s.subtreeFlags&6&&(s.flags|=8192)):Rn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function xM(i,s){switch(Zc(s),s.tag){case 1:return Xn(s.type)&&bl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return to(),Vt(Wn),Vt(wn),ff(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return uf(s),null;case 13:if(Vt(jt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Zs()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Vt(jt),null;case 4:return to(),null;case 10:return rf(s.type._context),null;case 22:case 23:return Gf(),null;case 24:return null;default:return null}}var $l=!1,Cn=!1,yM=typeof WeakSet=="function"?WeakSet:Set,Be=null;function io(i,s){var a=i.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){nn(i,s,c)}else a.current=null}function Df(i,s,a){try{a()}catch(c){nn(i,s,c)}}var Hg=!1;function SM(i,s){if(Hc=ml,i=ym(),Nc(i)){if("selectionStart"in i)var a={start:i.selectionStart,end:i.selectionEnd};else e:{a=(a=i.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var p=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break e}var w=0,U=-1,B=-1,se=0,xe=0,ye=i,_e=null;t:for(;;){for(var Fe;ye!==a||p!==0&&ye.nodeType!==3||(U=w+p),ye!==_||c!==0&&ye.nodeType!==3||(B=w+c),ye.nodeType===3&&(w+=ye.nodeValue.length),(Fe=ye.firstChild)!==null;)_e=ye,ye=Fe;for(;;){if(ye===i)break t;if(_e===a&&++se===p&&(U=w),_e===_&&++xe===c&&(B=w),(Fe=ye.nextSibling)!==null)break;ye=_e,_e=ye.parentNode}ye=Fe}a=U===-1||B===-1?null:{start:U,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gc={focusedElem:i,selectionRange:a},ml=!1,Be=s;Be!==null;)if(s=Be,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Be=i;else for(;Be!==null;){s=Be;try{var ze=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var We=ze.memoizedProps,sn=ze.memoizedState,Z=s.stateNode,H=Z.getSnapshotBeforeUpdate(s.elementType===s.type?We:Ei(s.type,We),sn);Z.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var ee=s.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Me){nn(s,s.return,Me)}if(i=s.sibling,i!==null){i.return=s.return,Be=i;break}Be=s.return}return ze=Hg,Hg=!1,ze}function Ma(i,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&Df(s,a,_)}p=p.next}while(p!==c)}}function jl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&i)===i){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function Lf(i){var s=i.ref;if(s!==null){var a=i.stateNode;switch(i.tag){case 5:i=a;break;default:i=a}typeof s=="function"?s(i):s.current=i}}function Gg(i){var s=i.alternate;s!==null&&(i.alternate=null,Gg(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Bi],delete s[fa],delete s[qc],delete s[iM],delete s[rM])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Wg(i){return i.tag===5||i.tag===3||i.tag===4}function Xg(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Wg(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function If(i,s,a){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(i,s):a.insertBefore(i,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(i,a)):(s=a,s.appendChild(i)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Rl));else if(c!==4&&(i=i.child,i!==null))for(If(i,s,a),i=i.sibling;i!==null;)If(i,s,a),i=i.sibling}function Nf(i,s,a){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?a.insertBefore(i,s):a.appendChild(i);else if(c!==4&&(i=i.child,i!==null))for(Nf(i,s,a),i=i.sibling;i!==null;)Nf(i,s,a),i=i.sibling}var yn=null,Ti=!1;function Ir(i,s,a){for(a=a.child;a!==null;)Yg(i,s,a),a=a.sibling}function Yg(i,s,a){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Q,a)}catch{}switch(a.tag){case 5:Cn||io(a,s);case 6:var c=yn,p=Ti;yn=null,Ir(i,s,a),yn=c,Ti=p,yn!==null&&(Ti?(i=yn,a=a.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):yn.removeChild(a.stateNode));break;case 18:yn!==null&&(Ti?(i=yn,a=a.stateNode,i.nodeType===8?Yc(i.parentNode,a):i.nodeType===1&&Yc(i,a),ea(i)):Yc(yn,a.stateNode));break;case 4:c=yn,p=Ti,yn=a.stateNode.containerInfo,Ti=!0,Ir(i,s,a),yn=c,Ti=p;break;case 0:case 11:case 14:case 15:if(!Cn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var _=p,w=_.destroy;_=_.tag,w!==void 0&&((_&2)!==0||(_&4)!==0)&&Df(a,s,w),p=p.next}while(p!==c)}Ir(i,s,a);break;case 1:if(!Cn&&(io(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(U){nn(a,s,U)}Ir(i,s,a);break;case 21:Ir(i,s,a);break;case 22:a.mode&1?(Cn=(c=Cn)||a.memoizedState!==null,Ir(i,s,a),Cn=c):Ir(i,s,a);break;default:Ir(i,s,a)}}function qg(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var a=i.stateNode;a===null&&(a=i.stateNode=new yM),s.forEach(function(c){var p=PM.bind(null,i,c);a.has(c)||(a.add(c),c.then(p,p))})}}function wi(i,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var p=a[c];try{var _=i,w=s,U=w;e:for(;U!==null;){switch(U.tag){case 5:yn=U.stateNode,Ti=!1;break e;case 3:yn=U.stateNode.containerInfo,Ti=!0;break e;case 4:yn=U.stateNode.containerInfo,Ti=!0;break e}U=U.return}if(yn===null)throw Error(t(160));Yg(_,w,p),yn=null,Ti=!1;var B=p.alternate;B!==null&&(B.return=null),p.return=null}catch(se){nn(p,s,se)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Kg(s,i),s=s.sibling}function Kg(i,s){var a=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(wi(s,i),zi(i),c&4){try{Ma(3,i,i.return),jl(3,i)}catch(We){nn(i,i.return,We)}try{Ma(5,i,i.return)}catch(We){nn(i,i.return,We)}}break;case 1:wi(s,i),zi(i),c&512&&a!==null&&io(a,a.return);break;case 5:if(wi(s,i),zi(i),c&512&&a!==null&&io(a,a.return),i.flags&32){var p=i.stateNode;try{fe(p,"")}catch(We){nn(i,i.return,We)}}if(c&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,w=a!==null?a.memoizedProps:_,U=i.type,B=i.updateQueue;if(i.updateQueue=null,B!==null)try{U==="input"&&_.type==="radio"&&_.name!=null&&yt(p,_),Pe(U,w);var se=Pe(U,_);for(w=0;w<B.length;w+=2){var xe=B[w],ye=B[w+1];xe==="style"?me(p,ye):xe==="dangerouslySetInnerHTML"?ne(p,ye):xe==="children"?fe(p,ye):I(p,xe,ye,se)}switch(U){case"input":Wt(p,_);break;case"textarea":_n(p,_);break;case"select":var _e=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var Fe=_.value;Fe!=null?Dt(p,!!_.multiple,Fe,!1):_e!==!!_.multiple&&(_.defaultValue!=null?Dt(p,!!_.multiple,_.defaultValue,!0):Dt(p,!!_.multiple,_.multiple?[]:"",!1))}p[fa]=_}catch(We){nn(i,i.return,We)}}break;case 6:if(wi(s,i),zi(i),c&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(We){nn(i,i.return,We)}}break;case 3:if(wi(s,i),zi(i),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ea(s.containerInfo)}catch(We){nn(i,i.return,We)}break;case 4:wi(s,i),zi(i);break;case 13:wi(s,i),zi(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Of=$t())),c&4&&qg(i);break;case 22:if(xe=a!==null&&a.memoizedState!==null,i.mode&1?(Cn=(se=Cn)||xe,wi(s,i),Cn=se):wi(s,i),zi(i),c&8192){if(se=i.memoizedState!==null,(i.stateNode.isHidden=se)&&!xe&&(i.mode&1)!==0)for(Be=i,xe=i.child;xe!==null;){for(ye=Be=xe;Be!==null;){switch(_e=Be,Fe=_e.child,_e.tag){case 0:case 11:case 14:case 15:Ma(4,_e,_e.return);break;case 1:io(_e,_e.return);var ze=_e.stateNode;if(typeof ze.componentWillUnmount=="function"){c=_e,a=_e.return;try{s=c,ze.props=s.memoizedProps,ze.state=s.memoizedState,ze.componentWillUnmount()}catch(We){nn(c,a,We)}}break;case 5:io(_e,_e.return);break;case 22:if(_e.memoizedState!==null){Zg(ye);continue}}Fe!==null?(Fe.return=_e,Be=Fe):Zg(ye)}xe=xe.sibling}e:for(xe=null,ye=i;;){if(ye.tag===5){if(xe===null){xe=ye;try{p=ye.stateNode,se?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(U=ye.stateNode,B=ye.memoizedProps.style,w=B!=null&&B.hasOwnProperty("display")?B.display:null,U.style.display=de("display",w))}catch(We){nn(i,i.return,We)}}}else if(ye.tag===6){if(xe===null)try{ye.stateNode.nodeValue=se?"":ye.memoizedProps}catch(We){nn(i,i.return,We)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===i)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===i)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===i)break e;xe===ye&&(xe=null),ye=ye.return}xe===ye&&(xe=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:wi(s,i),zi(i),c&4&&qg(i);break;case 21:break;default:wi(s,i),zi(i)}}function zi(i){var s=i.flags;if(s&2){try{e:{for(var a=i.return;a!==null;){if(Wg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(fe(p,""),c.flags&=-33);var _=Xg(i);Nf(i,_,p);break;case 3:case 4:var w=c.stateNode.containerInfo,U=Xg(i);If(i,U,w);break;default:throw Error(t(161))}}catch(B){nn(i,i.return,B)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function MM(i,s,a){Be=i,$g(i)}function $g(i,s,a){for(var c=(i.mode&1)!==0;Be!==null;){var p=Be,_=p.child;if(p.tag===22&&c){var w=p.memoizedState!==null||$l;if(!w){var U=p.alternate,B=U!==null&&U.memoizedState!==null||Cn;U=$l;var se=Cn;if($l=w,(Cn=B)&&!se)for(Be=p;Be!==null;)w=Be,B=w.child,w.tag===22&&w.memoizedState!==null?Qg(p):B!==null?(B.return=w,Be=B):Qg(p);for(;_!==null;)Be=_,$g(_),_=_.sibling;Be=p,$l=U,Cn=se}jg(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,Be=_):jg(i)}}function jg(i){for(;Be!==null;){var s=Be;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Cn||jl(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Cn)if(a===null)c.componentDidMount();else{var p=s.elementType===s.type?a.memoizedProps:Ei(s.type,a.memoizedProps);c.componentDidUpdate(p,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&Zm(s,_,c);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Zm(s,w,a)}break;case 5:var U=s.stateNode;if(a===null&&s.flags&4){a=U;var B=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var se=s.alternate;if(se!==null){var xe=se.memoizedState;if(xe!==null){var ye=xe.dehydrated;ye!==null&&ea(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Cn||s.flags&512&&Lf(s)}catch(_e){nn(s,s.return,_e)}}if(s===i){Be=null;break}if(a=s.sibling,a!==null){a.return=s.return,Be=a;break}Be=s.return}}function Zg(i){for(;Be!==null;){var s=Be;if(s===i){Be=null;break}var a=s.sibling;if(a!==null){a.return=s.return,Be=a;break}Be=s.return}}function Qg(i){for(;Be!==null;){var s=Be;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{jl(4,s)}catch(B){nn(s,a,B)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var p=s.return;try{c.componentDidMount()}catch(B){nn(s,p,B)}}var _=s.return;try{Lf(s)}catch(B){nn(s,_,B)}break;case 5:var w=s.return;try{Lf(s)}catch(B){nn(s,w,B)}}}catch(B){nn(s,s.return,B)}if(s===i){Be=null;break}var U=s.sibling;if(U!==null){U.return=s.return,Be=U;break}Be=s.return}}var EM=Math.ceil,Zl=C.ReactCurrentDispatcher,Uf=C.ReactCurrentOwner,di=C.ReactCurrentBatchConfig,Tt=0,mn=null,ln=null,Sn=0,ti=0,ro=Cr(0),fn=0,Ea=null,ps=0,Ql=0,Ff=0,Ta=null,qn=null,Of=0,so=1/0,sr=null,Jl=!1,Bf=null,Nr=null,eu=!1,Ur=null,tu=0,wa=0,kf=null,nu=-1,iu=0;function Bn(){return(Tt&6)!==0?$t():nu!==-1?nu:nu=$t()}function Fr(i){return(i.mode&1)===0?1:(Tt&2)!==0&&Sn!==0?Sn&-Sn:oM.transition!==null?(iu===0&&(iu=Ue()),iu):(i=mt,i!==0||(i=window.event,i=i===void 0?16:em(i.type)),i)}function Ai(i,s,a,c){if(50<wa)throw wa=0,kf=null,Error(t(185));pt(i,a,c),((Tt&2)===0||i!==mn)&&(i===mn&&((Tt&2)===0&&(Ql|=a),fn===4&&Or(i,Sn)),Kn(i,c),a===1&&Tt===0&&(s.mode&1)===0&&(so=$t()+500,Dl&&Pr()))}function Kn(i,s){var a=i.callbackNode;Lt(i,s);var c=Ft(i,i===mn?Sn:0);if(c===0)a!==null&&Ko(a),i.callbackNode=null,i.callbackPriority=0;else if(s=c&-c,i.callbackPriority!==s){if(a!=null&&Ko(a),s===1)i.tag===0?sM(ev.bind(null,i)):km(ev.bind(null,i)),tM(function(){(Tt&6)===0&&Pr()}),a=null;else{switch(Zi(c)){case 1:a=$o;break;case 4:a=R;break;case 16:a=X;break;case 536870912:a=J;break;default:a=X}a=lv(a,Jg.bind(null,i))}i.callbackPriority=s,i.callbackNode=a}}function Jg(i,s){if(nu=-1,iu=0,(Tt&6)!==0)throw Error(t(327));var a=i.callbackNode;if(oo()&&i.callbackNode!==a)return null;var c=Ft(i,i===mn?Sn:0);if(c===0)return null;if((c&30)!==0||(c&i.expiredLanes)!==0||s)s=ru(i,c);else{s=c;var p=Tt;Tt|=2;var _=nv();(mn!==i||Sn!==s)&&(sr=null,so=$t()+500,gs(i,s));do try{AM();break}catch(U){tv(i,U)}while(!0);nf(),Zl.current=_,Tt=p,ln!==null?s=0:(mn=null,Sn=0,s=fn)}if(s!==0){if(s===2&&(p=an(i),p!==0&&(c=p,s=Vf(i,p))),s===1)throw a=Ea,gs(i,0),Or(i,c),Kn(i,$t()),a;if(s===6)Or(i,c);else{if(p=i.current.alternate,(c&30)===0&&!TM(p)&&(s=ru(i,c),s===2&&(_=an(i),_!==0&&(c=_,s=Vf(i,_))),s===1))throw a=Ea,gs(i,0),Or(i,c),Kn(i,$t()),a;switch(i.finishedWork=p,i.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:vs(i,qn,sr);break;case 3:if(Or(i,c),(c&130023424)===c&&(s=Of+500-$t(),10<s)){if(Ft(i,0)!==0)break;if(p=i.suspendedLanes,(p&c)!==c){Bn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Xc(vs.bind(null,i,qn,sr),s);break}vs(i,qn,sr);break;case 4:if(Or(i,c),(c&4194240)===c)break;for(s=i.eventTimes,p=-1;0<c;){var w=31-Ee(c);_=1<<w,w=s[w],w>p&&(p=w),c&=~_}if(c=p,c=$t()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*EM(c/1960))-c,10<c){i.timeoutHandle=Xc(vs.bind(null,i,qn,sr),c);break}vs(i,qn,sr);break;case 5:vs(i,qn,sr);break;default:throw Error(t(329))}}}return Kn(i,$t()),i.callbackNode===a?Jg.bind(null,i):null}function Vf(i,s){var a=Ta;return i.current.memoizedState.isDehydrated&&(gs(i,s).flags|=256),i=ru(i,s),i!==2&&(s=qn,qn=a,s!==null&&zf(s)),i}function zf(i){qn===null?qn=i:qn.push.apply(qn,i)}function TM(i){for(var s=i;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var p=a[c],_=p.getSnapshot;p=p.value;try{if(!Si(_(),p))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Or(i,s){for(s&=~Ff,s&=~Ql,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var a=31-Ee(s),c=1<<a;i[a]=-1,s&=~c}}function ev(i){if((Tt&6)!==0)throw Error(t(327));oo();var s=Ft(i,0);if((s&1)===0)return Kn(i,$t()),null;var a=ru(i,s);if(i.tag!==0&&a===2){var c=an(i);c!==0&&(s=c,a=Vf(i,c))}if(a===1)throw a=Ea,gs(i,0),Or(i,s),Kn(i,$t()),a;if(a===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,vs(i,qn,sr),Kn(i,$t()),null}function Hf(i,s){var a=Tt;Tt|=1;try{return i(s)}finally{Tt=a,Tt===0&&(so=$t()+500,Dl&&Pr())}}function ms(i){Ur!==null&&Ur.tag===0&&(Tt&6)===0&&oo();var s=Tt;Tt|=1;var a=di.transition,c=mt;try{if(di.transition=null,mt=1,i)return i()}finally{mt=c,di.transition=a,Tt=s,(Tt&6)===0&&Pr()}}function Gf(){ti=ro.current,Vt(ro)}function gs(i,s){i.finishedWork=null,i.finishedLanes=0;var a=i.timeoutHandle;if(a!==-1&&(i.timeoutHandle=-1,eM(a)),ln!==null)for(a=ln.return;a!==null;){var c=a;switch(Zc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&bl();break;case 3:to(),Vt(Wn),Vt(wn),ff();break;case 5:uf(c);break;case 4:to();break;case 13:Vt(jt);break;case 19:Vt(jt);break;case 10:rf(c.type._context);break;case 22:case 23:Gf()}a=a.return}if(mn=i,ln=i=Br(i.current,null),Sn=ti=s,fn=0,Ea=null,Ff=Ql=ps=0,qn=Ta=null,fs!==null){for(s=0;s<fs.length;s++)if(a=fs[s],c=a.interleaved,c!==null){a.interleaved=null;var p=c.next,_=a.pending;if(_!==null){var w=_.next;_.next=p,c.next=w}a.pending=c}fs=null}return i}function tv(i,s){do{var a=ln;try{if(nf(),zl.current=Xl,Hl){for(var c=Zt.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}Hl=!1}if(hs=0,pn=cn=Zt=null,va=!1,_a=0,Uf.current=null,a===null||a.return===null){fn=1,Ea=s,ln=null;break}e:{var _=i,w=a.return,U=a,B=s;if(s=Sn,U.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var se=B,xe=U,ye=xe.tag;if((xe.mode&1)===0&&(ye===0||ye===11||ye===15)){var _e=xe.alternate;_e?(xe.updateQueue=_e.updateQueue,xe.memoizedState=_e.memoizedState,xe.lanes=_e.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Fe=Ag(w);if(Fe!==null){Fe.flags&=-257,Rg(Fe,w,U,_,s),Fe.mode&1&&wg(_,se,s),s=Fe,B=se;var ze=s.updateQueue;if(ze===null){var We=new Set;We.add(B),s.updateQueue=We}else ze.add(B);break e}else{if((s&1)===0){wg(_,se,s),Wf();break e}B=Error(t(426))}}else if(qt&&U.mode&1){var sn=Ag(w);if(sn!==null){(sn.flags&65536)===0&&(sn.flags|=256),Rg(sn,w,U,_,s),ef(no(B,U));break e}}_=B=no(B,U),fn!==4&&(fn=2),Ta===null?Ta=[_]:Ta.push(_),_=w;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var Z=Eg(_,B,s);jm(_,Z);break e;case 1:U=B;var H=_.type,ee=_.stateNode;if((_.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(Nr===null||!Nr.has(ee)))){_.flags|=65536,s&=-s,_.lanes|=s;var Me=Tg(_,U,s);jm(_,Me);break e}}_=_.return}while(_!==null)}rv(a)}catch(Ke){s=Ke,ln===a&&a!==null&&(ln=a=a.return);continue}break}while(!0)}function nv(){var i=Zl.current;return Zl.current=Xl,i===null?Xl:i}function Wf(){(fn===0||fn===3||fn===2)&&(fn=4),mn===null||(ps&268435455)===0&&(Ql&268435455)===0||Or(mn,Sn)}function ru(i,s){var a=Tt;Tt|=2;var c=nv();(mn!==i||Sn!==s)&&(sr=null,gs(i,s));do try{wM();break}catch(p){tv(i,p)}while(!0);if(nf(),Tt=a,Zl.current=c,ln!==null)throw Error(t(261));return mn=null,Sn=0,fn}function wM(){for(;ln!==null;)iv(ln)}function AM(){for(;ln!==null&&!hl();)iv(ln)}function iv(i){var s=av(i.alternate,i,ti);i.memoizedProps=i.pendingProps,s===null?rv(i):ln=s,Uf.current=null}function rv(i){var s=i;do{var a=s.alternate;if(i=s.return,(s.flags&32768)===0){if(a=_M(a,s,ti),a!==null){ln=a;return}}else{if(a=xM(a,s),a!==null){a.flags&=32767,ln=a;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{fn=6,ln=null;return}}if(s=s.sibling,s!==null){ln=s;return}ln=s=i}while(s!==null);fn===0&&(fn=5)}function vs(i,s,a){var c=mt,p=di.transition;try{di.transition=null,mt=1,RM(i,s,a,c)}finally{di.transition=p,mt=c}return null}function RM(i,s,a,c){do oo();while(Ur!==null);if((Tt&6)!==0)throw Error(t(327));a=i.finishedWork;var p=i.finishedLanes;if(a===null)return null;if(i.finishedWork=null,i.finishedLanes=0,a===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=a.lanes|a.childLanes;if(Hn(i,_),i===mn&&(ln=mn=null,Sn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||eu||(eu=!0,lv(X,function(){return oo(),null})),_=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||_){_=di.transition,di.transition=null;var w=mt;mt=1;var U=Tt;Tt|=4,Uf.current=null,SM(i,a),Kg(a,i),qS(Gc),ml=!!Hc,Gc=Hc=null,i.current=a,MM(a),Sc(),Tt=U,mt=w,di.transition=_}else i.current=a;if(eu&&(eu=!1,Ur=i,tu=p),_=i.pendingLanes,_===0&&(Nr=null),Oe(a.stateNode),Kn(i,$t()),s!==null)for(c=i.onRecoverableError,a=0;a<s.length;a++)p=s[a],c(p.value,{componentStack:p.stack,digest:p.digest});if(Jl)throw Jl=!1,i=Bf,Bf=null,i;return(tu&1)!==0&&i.tag!==0&&oo(),_=i.pendingLanes,(_&1)!==0?i===kf?wa++:(wa=0,kf=i):wa=0,Pr(),null}function oo(){if(Ur!==null){var i=Zi(tu),s=di.transition,a=mt;try{if(di.transition=null,mt=16>i?16:i,Ur===null)var c=!1;else{if(i=Ur,Ur=null,tu=0,(Tt&6)!==0)throw Error(t(331));var p=Tt;for(Tt|=4,Be=i.current;Be!==null;){var _=Be,w=_.child;if((Be.flags&16)!==0){var U=_.deletions;if(U!==null){for(var B=0;B<U.length;B++){var se=U[B];for(Be=se;Be!==null;){var xe=Be;switch(xe.tag){case 0:case 11:case 15:Ma(8,xe,_)}var ye=xe.child;if(ye!==null)ye.return=xe,Be=ye;else for(;Be!==null;){xe=Be;var _e=xe.sibling,Fe=xe.return;if(Gg(xe),xe===se){Be=null;break}if(_e!==null){_e.return=Fe,Be=_e;break}Be=Fe}}}var ze=_.alternate;if(ze!==null){var We=ze.child;if(We!==null){ze.child=null;do{var sn=We.sibling;We.sibling=null,We=sn}while(We!==null)}}Be=_}}if((_.subtreeFlags&2064)!==0&&w!==null)w.return=_,Be=w;else e:for(;Be!==null;){if(_=Be,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Ma(9,_,_.return)}var Z=_.sibling;if(Z!==null){Z.return=_.return,Be=Z;break e}Be=_.return}}var H=i.current;for(Be=H;Be!==null;){w=Be;var ee=w.child;if((w.subtreeFlags&2064)!==0&&ee!==null)ee.return=w,Be=ee;else e:for(w=H;Be!==null;){if(U=Be,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:jl(9,U)}}catch(Ke){nn(U,U.return,Ke)}if(U===w){Be=null;break e}var Me=U.sibling;if(Me!==null){Me.return=U.return,Be=Me;break e}Be=U.return}}if(Tt=p,Pr(),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Q,i)}catch{}c=!0}return c}finally{mt=a,di.transition=s}}return!1}function sv(i,s,a){s=no(a,s),s=Eg(i,s,1),i=Lr(i,s,1),s=Bn(),i!==null&&(pt(i,1,s),Kn(i,s))}function nn(i,s,a){if(i.tag===3)sv(i,i,a);else for(;s!==null;){if(s.tag===3){sv(s,i,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Nr===null||!Nr.has(c))){i=no(a,i),i=Tg(s,i,1),s=Lr(s,i,1),i=Bn(),s!==null&&(pt(s,1,i),Kn(s,i));break}}s=s.return}}function CM(i,s,a){var c=i.pingCache;c!==null&&c.delete(s),s=Bn(),i.pingedLanes|=i.suspendedLanes&a,mn===i&&(Sn&a)===a&&(fn===4||fn===3&&(Sn&130023424)===Sn&&500>$t()-Of?gs(i,0):Ff|=a),Kn(i,s)}function ov(i,s){s===0&&((i.mode&1)===0?s=1:(s=Ye,Ye<<=1,(Ye&130023424)===0&&(Ye=4194304)));var a=Bn();i=nr(i,s),i!==null&&(pt(i,s,a),Kn(i,a))}function bM(i){var s=i.memoizedState,a=0;s!==null&&(a=s.retryLane),ov(i,a)}function PM(i,s){var a=0;switch(i.tag){case 13:var c=i.stateNode,p=i.memoizedState;p!==null&&(a=p.retryLane);break;case 19:c=i.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),ov(i,a)}var av;av=function(i,s,a){if(i!==null)if(i.memoizedProps!==s.pendingProps||Wn.current)Yn=!0;else{if((i.lanes&a)===0&&(s.flags&128)===0)return Yn=!1,vM(i,s,a);Yn=(i.flags&131072)!==0}else Yn=!1,qt&&(s.flags&1048576)!==0&&Vm(s,Il,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;Kl(i,s),i=s.pendingProps;var p=Ks(s,wn.current);eo(s,a),p=pf(null,s,c,i,p,a);var _=mf();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Xn(c)?(_=!0,Pl(s)):_=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,af(s),p.updater=Yl,s.stateNode=p,p._reactInternals=s,Sf(s,c,i,a),s=wf(null,s,c,!0,_,a)):(s.tag=0,qt&&_&&jc(s),On(null,s,p,a),s=s.child),s;case 16:c=s.elementType;e:{switch(Kl(i,s),i=s.pendingProps,p=c._init,c=p(c._payload),s.type=c,p=s.tag=LM(c),i=Ei(c,i),p){case 0:s=Tf(null,s,c,i,a);break e;case 1:s=Ig(null,s,c,i,a);break e;case 11:s=Cg(null,s,c,i,a);break e;case 14:s=bg(null,s,c,Ei(c.type,i),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:Ei(c,p),Tf(i,s,c,p,a);case 1:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:Ei(c,p),Ig(i,s,c,p,a);case 3:e:{if(Ng(s),i===null)throw Error(t(387));c=s.pendingProps,_=s.memoizedState,p=_.element,$m(i,s),kl(s,c,null,a);var w=s.memoizedState;if(c=w.element,_.isDehydrated)if(_={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){p=no(Error(t(423)),s),s=Ug(i,s,c,a,p);break e}else if(c!==p){p=no(Error(t(424)),s),s=Ug(i,s,c,a,p);break e}else for(ei=Rr(s.stateNode.containerInfo.firstChild),Jn=s,qt=!0,Mi=null,a=qm(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Zs(),c===p){s=rr(i,s,a);break e}On(i,s,c,a)}s=s.child}return s;case 5:return Qm(s),i===null&&Jc(s),c=s.type,p=s.pendingProps,_=i!==null?i.memoizedProps:null,w=p.children,Wc(c,p)?w=null:_!==null&&Wc(c,_)&&(s.flags|=32),Lg(i,s),On(i,s,w,a),s.child;case 6:return i===null&&Jc(s),null;case 13:return Fg(i,s,a);case 4:return lf(s,s.stateNode.containerInfo),c=s.pendingProps,i===null?s.child=Qs(s,null,c,a):On(i,s,c,a),s.child;case 11:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:Ei(c,p),Cg(i,s,c,p,a);case 7:return On(i,s,s.pendingProps,a),s.child;case 8:return On(i,s,s.pendingProps.children,a),s.child;case 12:return On(i,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,p=s.pendingProps,_=s.memoizedProps,w=p.value,Ot(Fl,c._currentValue),c._currentValue=w,_!==null)if(Si(_.value,w)){if(_.children===p.children&&!Wn.current){s=rr(i,s,a);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var U=_.dependencies;if(U!==null){w=_.child;for(var B=U.firstContext;B!==null;){if(B.context===c){if(_.tag===1){B=ir(-1,a&-a),B.tag=2;var se=_.updateQueue;if(se!==null){se=se.shared;var xe=se.pending;xe===null?B.next=B:(B.next=xe.next,xe.next=B),se.pending=B}}_.lanes|=a,B=_.alternate,B!==null&&(B.lanes|=a),sf(_.return,a,s),U.lanes|=a;break}B=B.next}}else if(_.tag===10)w=_.type===s.type?null:_.child;else if(_.tag===18){if(w=_.return,w===null)throw Error(t(341));w.lanes|=a,U=w.alternate,U!==null&&(U.lanes|=a),sf(w,a,s),w=_.sibling}else w=_.child;if(w!==null)w.return=_;else for(w=_;w!==null;){if(w===s){w=null;break}if(_=w.sibling,_!==null){_.return=w.return,w=_;break}w=w.return}_=w}On(i,s,p.children,a),s=s.child}return s;case 9:return p=s.type,c=s.pendingProps.children,eo(s,a),p=ci(p),c=c(p),s.flags|=1,On(i,s,c,a),s.child;case 14:return c=s.type,p=Ei(c,s.pendingProps),p=Ei(c.type,p),bg(i,s,c,p,a);case 15:return Pg(i,s,s.type,s.pendingProps,a);case 17:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:Ei(c,p),Kl(i,s),s.tag=1,Xn(c)?(i=!0,Pl(s)):i=!1,eo(s,a),Sg(s,c,p),Sf(s,c,p,a),wf(null,s,c,!0,i,a);case 19:return Bg(i,s,a);case 22:return Dg(i,s,a)}throw Error(t(156,s.tag))};function lv(i,s){return ss(i,s)}function DM(i,s,a,c){this.tag=i,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(i,s,a,c){return new DM(i,s,a,c)}function Xf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function LM(i){if(typeof i=="function")return Xf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===Y)return 11;if(i===$)return 14}return 2}function Br(i,s){var a=i.alternate;return a===null?(a=hi(i.tag,s,i.key,i.mode),a.elementType=i.elementType,a.type=i.type,a.stateNode=i.stateNode,a.alternate=i,i.alternate=a):(a.pendingProps=s,a.type=i.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=i.flags&14680064,a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,s=i.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=i.sibling,a.index=i.index,a.ref=i.ref,a}function su(i,s,a,c,p,_){var w=2;if(c=i,typeof i=="function")Xf(i)&&(w=1);else if(typeof i=="string")w=5;else e:switch(i){case O:return _s(a.children,p,_,s);case T:w=8,p|=8;break;case L:return i=hi(12,a,s,p|2),i.elementType=L,i.lanes=_,i;case ue:return i=hi(13,a,s,p),i.elementType=ue,i.lanes=_,i;case ce:return i=hi(19,a,s,p),i.elementType=ce,i.lanes=_,i;case K:return ou(a,p,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case k:w=10;break e;case V:w=9;break e;case Y:w=11;break e;case $:w=14;break e;case ae:w=16,c=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=hi(w,a,s,p),s.elementType=i,s.type=c,s.lanes=_,s}function _s(i,s,a,c){return i=hi(7,i,c,s),i.lanes=a,i}function ou(i,s,a,c){return i=hi(22,i,c,s),i.elementType=K,i.lanes=a,i.stateNode={isHidden:!1},i}function Yf(i,s,a){return i=hi(6,i,null,s),i.lanes=a,i}function qf(i,s,a){return s=hi(4,i.children!==null?i.children:[],i.key,s),s.lanes=a,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function IM(i,s,a,c,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xn(0),this.expirationTimes=xn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xn(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Kf(i,s,a,c,p,_,w,U,B){return i=new IM(i,s,a,U,B),s===1?(s=1,_===!0&&(s|=8)):s=0,_=hi(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},af(_),i}function NM(i,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:b,key:c==null?null:""+c,children:i,containerInfo:s,implementation:a}}function uv(i){if(!i)return br;i=i._reactInternals;e:{if(Fn(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Xn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var a=i.type;if(Xn(a))return Om(i,a,s)}return s}function cv(i,s,a,c,p,_,w,U,B){return i=Kf(a,c,!0,i,p,_,w,U,B),i.context=uv(null),a=i.current,c=Bn(),p=Fr(a),_=ir(c,p),_.callback=s??null,Lr(a,_,p),i.current.lanes=p,pt(i,p,c),Kn(i,c),i}function au(i,s,a,c){var p=s.current,_=Bn(),w=Fr(p);return a=uv(a),s.context===null?s.context=a:s.pendingContext=a,s=ir(_,w),s.payload={element:i},c=c===void 0?null:c,c!==null&&(s.callback=c),i=Lr(p,s,w),i!==null&&(Ai(i,p,w,_),Bl(i,p,w)),w}function lu(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function fv(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var a=i.retryLane;i.retryLane=a!==0&&a<s?a:s}}function $f(i,s){fv(i,s),(i=i.alternate)&&fv(i,s)}function UM(){return null}var dv=typeof reportError=="function"?reportError:function(i){console.error(i)};function jf(i){this._internalRoot=i}uu.prototype.render=jf.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));au(i,s,null,null)},uu.prototype.unmount=jf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;ms(function(){au(null,i,null,null)}),s[Qi]=null}};function uu(i){this._internalRoot=i}uu.prototype.unstable_scheduleHydration=function(i){if(i){var s=It();i={blockedOn:null,target:i,priority:s};for(var a=0;a<Tr.length&&s!==0&&s<Tr[a].priority;a++);Tr.splice(a,0,i),a===0&&Qp(i)}};function Zf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function cu(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function hv(){}function FM(i,s,a,c,p){if(p){if(typeof c=="function"){var _=c;c=function(){var se=lu(w);_.call(se)}}var w=cv(s,c,i,0,null,!1,!1,"",hv);return i._reactRootContainer=w,i[Qi]=w.current,ua(i.nodeType===8?i.parentNode:i),ms(),w}for(;p=i.lastChild;)i.removeChild(p);if(typeof c=="function"){var U=c;c=function(){var se=lu(B);U.call(se)}}var B=Kf(i,0,!1,null,null,!1,!1,"",hv);return i._reactRootContainer=B,i[Qi]=B.current,ua(i.nodeType===8?i.parentNode:i),ms(function(){au(s,B,a,c)}),B}function fu(i,s,a,c,p){var _=a._reactRootContainer;if(_){var w=_;if(typeof p=="function"){var U=p;p=function(){var B=lu(w);U.call(B)}}au(s,w,i,p)}else w=FM(a,s,i,p,c);return lu(w)}Pt=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var a=Et(s.pendingLanes);a!==0&&(Gn(s,a|1),Kn(s,$t()),(Tt&6)===0&&(so=$t()+500,Pr()))}break;case 13:ms(function(){var c=nr(i,1);if(c!==null){var p=Bn();Ai(c,i,1,p)}}),$f(i,1)}},Bt=function(i){if(i.tag===13){var s=nr(i,134217728);if(s!==null){var a=Bn();Ai(s,i,134217728,a)}$f(i,134217728)}},xi=function(i){if(i.tag===13){var s=Fr(i),a=nr(i,s);if(a!==null){var c=Bn();Ai(a,i,s,c)}$f(i,s)}},It=function(){return mt},yi=function(i,s){var a=mt;try{return mt=i,s()}finally{mt=a}},et=function(i,s,a){switch(s){case"input":if(Wt(i,a),s=a.name,a.type==="radio"&&s!=null){for(a=i;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==i&&c.form===i.form){var p=Cl(c);if(!p)throw Error(t(90));Gt(c),Wt(c,p)}}}break;case"textarea":_n(i,a);break;case"select":s=a.value,s!=null&&Dt(i,!!a.multiple,s,!1)}},De=Hf,ge=ms;var OM={usingClientEntryPoint:!1,Events:[da,Ys,Cl,he,Ce,Hf]},Aa={findFiberByHostInstance:as,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},BM={bundleType:Aa.bundleType,version:Aa.version,rendererPackageName:Aa.rendererPackageName,rendererConfig:Aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=rs(i),i===null?null:i.stateNode},findFiberByHostInstance:Aa.findFiberByHostInstance||UM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!du.isDisabled&&du.supportsFiber)try{Q=du.inject(BM),Te=du}catch{}}return $n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OM,$n.createPortal=function(i,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zf(s))throw Error(t(200));return NM(i,s,null,a)},$n.createRoot=function(i,s){if(!Zf(i))throw Error(t(299));var a=!1,c="",p=dv;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=Kf(i,1,!1,null,null,a,!1,c,p),i[Qi]=s.current,ua(i.nodeType===8?i.parentNode:i),new jf(s)},$n.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=rs(s),i=i===null?null:i.stateNode,i},$n.flushSync=function(i){return ms(i)},$n.hydrate=function(i,s,a){if(!cu(s))throw Error(t(200));return fu(null,i,s,!0,a)},$n.hydrateRoot=function(i,s,a){if(!Zf(i))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,p=!1,_="",w=dv;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(_=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=cv(s,null,i,1,a??null,p,!1,_,w),i[Qi]=s.current,ua(i),c)for(i=0;i<c.length;i++)a=c[i],p=a._getVersion,p=p(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,p]:s.mutableSourceEagerHydrationData.push(a,p);return new uu(s)},$n.render=function(i,s,a){if(!cu(s))throw Error(t(200));return fu(null,i,s,!1,a)},$n.unmountComponentAtNode=function(i){if(!cu(i))throw Error(t(40));return i._reactRootContainer?(ms(function(){fu(null,null,i,!1,function(){i._reactRootContainer=null,i[Qi]=null})}),!0):!1},$n.unstable_batchedUpdates=Hf,$n.unstable_renderSubtreeIntoContainer=function(i,s,a,c){if(!cu(a))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return fu(i,s,a,!1,c)},$n.version="18.3.1-next-f1338f8080-20240426",$n}var Sv;function KM(){if(Sv)return ed.exports;Sv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),ed.exports=qM(),ed.exports}var Mv;function $M(){if(Mv)return hu;Mv=1;var n=KM();return hu.createRoot=n.createRoot,hu.hydrateRoot=n.hydrateRoot,hu}var cL=$M(),Ev="1.3.25";function q_(n,e,t){return Math.max(n,Math.min(e,t))}function jM(n,e,t){return(1-t)*n+t*e}function ZM(n,e,t,r){return jM(n,e,1-Math.exp(-t*r))}function QM(n,e){return(n%e+e)%e}var JM=class{constructor(){je(this,"isRunning",!1);je(this,"value",0);je(this,"from",0);je(this,"to",0);je(this,"currentTime",0);je(this,"lerp");je(this,"duration");je(this,"easing");je(this,"onUpdate")}advance(n){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=n;const r=q_(0,this.currentTime/this.duration,1);e=r>=1;const o=e?1:this.easing(r);this.value=this.from+(this.to-this.from)*o}else this.lerp?(this.value=ZM(this.value,this.to,this.lerp*60,n),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(n,e,{lerp:t,duration:r,easing:o,onStart:l,onUpdate:u}){this.from=this.value=n,this.to=e,this.lerp=t,this.duration=r,this.easing=o,this.currentTime=0,this.isRunning=!0,l==null||l(),this.onUpdate=u}};function eE(n,e){let t;return function(...r){clearTimeout(t),t=setTimeout(()=>{t=void 0,n.apply(this,r)},e)}}var tE=class{constructor(n,e,{autoResize:t=!0,debounce:r=250}={}){je(this,"width",0);je(this,"height",0);je(this,"scrollHeight",0);je(this,"scrollWidth",0);je(this,"debouncedResize");je(this,"wrapperResizeObserver");je(this,"contentResizeObserver");je(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});je(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});je(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=n,this.content=e,t&&(this.debouncedResize=eE(this.resize,r),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var n,e;(n=this.wrapperResizeObserver)==null||n.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},K_=class{constructor(){je(this,"events",{})}emit(n,...e){var r;const t=this.events[n]||[];for(let o=0,l=t.length;o<l;o++)(r=t[o])==null||r.call(t,...e)}on(n,e){return this.events[n]?this.events[n].push(e):this.events[n]=[e],()=>{var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(r=>e!==r)}}off(n,e){var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(r=>e!==r)}destroy(){this.events={}}};const nE=100/6,Vr={passive:!1};function Tv(n,e){return n===1?nE:n===2?e:1}var iE=class{constructor(n,e={wheelMultiplier:1,touchMultiplier:1}){je(this,"touchStart",{x:0,y:0});je(this,"lastDelta",{x:0,y:0});je(this,"window",{width:0,height:0});je(this,"emitter",new K_);je(this,"onTouchStart",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})});je(this,"onTouchMove",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n,r=-(e-this.touchStart.x)*this.options.touchMultiplier,o=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:r,y:o},this.emitter.emit("scroll",{deltaX:r,deltaY:o,event:n})});je(this,"onTouchEnd",n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})});je(this,"onWheel",n=>{let{deltaX:e,deltaY:t,deltaMode:r}=n;const o=Tv(r,this.window.width),l=Tv(r,this.window.height);e*=o,t*=l,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:n})});je(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=n,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Vr),this.element.addEventListener("touchstart",this.onTouchStart,Vr),this.element.addEventListener("touchmove",this.onTouchMove,Vr),this.element.addEventListener("touchend",this.onTouchEnd,Vr)}on(n,e){return this.emitter.on(n,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Vr),this.element.removeEventListener("touchstart",this.onTouchStart,Vr),this.element.removeEventListener("touchmove",this.onTouchMove,Vr),this.element.removeEventListener("touchend",this.onTouchEnd,Vr)}};const wv=n=>Math.min(1,1.001-2**(-10*n));var rE=class{constructor({wrapper:n=window,content:e=document.documentElement,eventsTarget:t=n,smoothWheel:r=!0,syncTouch:o=!1,syncTouchLerp:l=.075,touchInertiaExponent:u=1.7,duration:f,easing:d,lerp:h=.1,infinite:g=!1,orientation:v="vertical",gestureOrientation:m=v==="horizontal"?"both":"vertical",touchMultiplier:y=1,wheelMultiplier:M=1,autoResize:A=!0,prevent:S,virtualScroll:x,overscroll:P=!0,autoRaf:I=!1,anchors:C=!1,autoToggle:D=!1,allowNestedScroll:b=!1,__experimental__naiveDimensions:O=!1,naiveDimensions:T=O,stopInertiaOnNavigate:L=!1}={}){je(this,"_isScrolling",!1);je(this,"_isStopped",!1);je(this,"_isLocked",!1);je(this,"_preventNextNativeScrollEvent",!1);je(this,"_resetVelocityTimeout",null);je(this,"_rafId",null);je(this,"_isDraggingSelection",!1);je(this,"isTouching");je(this,"isIos");je(this,"time",0);je(this,"userData",{});je(this,"lastVelocity",0);je(this,"velocity",0);je(this,"direction",0);je(this,"options");je(this,"targetScroll");je(this,"animatedScroll");je(this,"animate",new JM);je(this,"emitter",new K_);je(this,"dimensions");je(this,"virtualScroll");je(this,"onScrollEnd",n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()});je(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});je(this,"onTransitionEnd",n=>{var e;(e=n.propertyName)!=null&&e.includes("overflow")&&n.target===this.rootElement&&this.checkOverflow()});je(this,"onClick",n=>{const e=n.composedPath().filter(r=>r instanceof HTMLAnchorElement&&r.href).map(r=>new URL(r.href)),t=new URL(window.location.href);if(this.options.anchors){const r=e.find(o=>t.host===o.host&&t.pathname===o.pathname&&o.hash);if(r){const o=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,l=decodeURIComponent(r.hash);this.scrollTo(l,o);return}}if(this.options.stopInertiaOnNavigate&&e.some(r=>t.host===r.host&&t.pathname!==r.pathname)){this.reset();return}});je(this,"onPointerDown",n=>{n.button===1&&this.reset()});je(this,"onVirtualScroll",n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:e,deltaY:t,event:r}=n;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:r}),r.ctrlKey||r.lenisStopPropagation)return;const o=r.type.includes("touch"),l=r.type.includes("wheel");if(o&&this.isIos&&(r.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(r)),this._isDraggingSelection)){r.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=r.type==="touchstart"||r.type==="touchmove";const u=e===0&&t===0;if(this.options.syncTouch&&o&&r.type==="touchstart"&&u&&!this.isStopped&&!this.isLocked){this.reset();return}const f=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(u||f)return;let d=r.composedPath();d=d.slice(0,d.indexOf(this.rootElement));const h=this.options.prevent,g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(d.find(M=>{var A,S,x,P,I;return M instanceof HTMLElement&&(typeof h=="function"&&(h==null?void 0:h(M))||((A=M.hasAttribute)==null?void 0:A.call(M,"data-lenis-prevent"))||g==="vertical"&&((S=M.hasAttribute)==null?void 0:S.call(M,"data-lenis-prevent-vertical"))||g==="horizontal"&&((x=M.hasAttribute)==null?void 0:x.call(M,"data-lenis-prevent-horizontal"))||o&&((P=M.hasAttribute)==null?void 0:P.call(M,"data-lenis-prevent-touch"))||l&&((I=M.hasAttribute)==null?void 0:I.call(M,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(M,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){r.cancelable&&r.preventDefault();return}if(!(this.options.syncTouch&&o||this.options.smoothWheel&&l)){this.isScrolling="native",this.animate.stop(),r.lenisStopPropagation=!0;return}let v=t;this.options.gestureOrientation==="both"?v=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(v=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(r.lenisStopPropagation=!0),r.cancelable&&r.preventDefault();const m=o&&this.options.syncTouch,y=o&&r.type==="touchend";y&&(v=Math.sign(v)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+v,{programmatic:!1,...m?{lerp:y?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});je(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});je(this,"raf",n=>{const e=n-(this.time||n);this.time=n,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Ev,window.lenis||(window.lenis={}),window.lenis.version=Ev,v==="horizontal"&&(window.lenis.horizontal=!0),o===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!n||n===document.documentElement)&&(n=window),typeof f=="number"&&typeof d!="function"?d=wv:typeof d=="function"&&typeof f!="number"&&(f=1),this.options={wrapper:n,content:e,eventsTarget:t,smoothWheel:r,syncTouch:o,syncTouchLerp:l,touchInertiaExponent:u,duration:f,easing:d,lerp:h,infinite:g,gestureOrientation:m,orientation:v,touchMultiplier:y,wheelMultiplier:M,autoResize:A,prevent:S,virtualScroll:x,overscroll:P,autoRaf:I,anchors:C,autoToggle:D,allowNestedScroll:b,naiveDimensions:T,stopInertiaOnNavigate:L},this.dimensions=new tE(n,e,{autoResize:A}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new iE(t,{touchMultiplier:y,wheelMultiplier:M}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,e){return this.emitter.on(n,e)}off(n,e){return this.emitter.off(n,e)}get overflow(){const n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}isTouchOnSelectionHandle(n){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=n.targetTouches[0]??n.changedTouches[0];if(!t)return!1;const r=e.getRangeAt(0).getClientRects();if(r.length===0)return!1;const o=r[0],l=r[r.length-1],u=40,f=Math.hypot(t.clientX-o.left,t.clientY-o.top)<=u,d=Math.hypot(t.clientX-l.right,t.clientY-l.bottom)<=u;return f||d}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(n,{offset:e=0,immediate:t=!1,lock:r=!1,programmatic:o=!0,lerp:l=o?this.options.lerp:void 0,duration:u=o?this.options.duration:void 0,easing:f=o?this.options.easing:void 0,onStart:d,onComplete:h,force:g=!1,userData:v}={}){if((this.isStopped||this.isLocked)&&!g)return;let m=n,y=e;if(typeof m=="string"&&["top","left","start","#"].includes(m))m=0;else if(typeof m=="string"&&["bottom","right","end"].includes(m))m=this.limit;else{let M=null;if(typeof m=="string"?(M=m.startsWith("#")?document.getElementById(m.slice(1)):document.querySelector(m),M||(m==="#top"?m=0:console.warn("Lenis: Target not found",m))):m instanceof HTMLElement&&(m!=null&&m.nodeType)&&(M=m),M){if(this.options.wrapper!==window){const C=this.rootElement.getBoundingClientRect();y-=this.isHorizontal?C.left:C.top}const A=M.getBoundingClientRect(),S=getComputedStyle(M),x=this.isHorizontal?Number.parseFloat(S.scrollMarginLeft):Number.parseFloat(S.scrollMarginTop),P=getComputedStyle(this.rootElement),I=this.isHorizontal?Number.parseFloat(P.scrollPaddingLeft):Number.parseFloat(P.scrollPaddingTop);m=(this.isHorizontal?A.left:A.top)+this.animatedScroll-(Number.isNaN(x)?0:x)-(Number.isNaN(I)?0:I)}}if(typeof m=="number"){if(m+=y,this.options.infinite){if(o){this.targetScroll=this.animatedScroll=this.scroll;const M=m-this.animatedScroll;M>this.limit/2?m-=this.limit:M<-this.limit/2&&(m+=this.limit)}}else m=q_(0,m,this.limit);if(m===this.targetScroll){d==null||d(this),h==null||h(this);return}if(this.userData=v??{},t){this.animatedScroll=this.targetScroll=m,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),h==null||h(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}o||(this.targetScroll=m),typeof u=="number"&&typeof f!="function"?f=wv:typeof f=="function"&&typeof u!="number"&&(u=1),this.animate.fromTo(this.animatedScroll,m,{duration:u,easing:f,lerp:l,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling="smooth",d==null||d(this)},onUpdate:(M,A)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=M-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=M,this.setScroll(this.scroll),o&&(this.targetScroll=M),A||this.emit(),A&&(this.reset(),this.emit(),h==null||h(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:e,deltaY:t}){const r=Date.now();n._lenis||(n._lenis={});const o=n._lenis;let l,u,f,d,h,g,v,m,y,M;if(r-(o.time??0)>2e3){o.time=Date.now();const b=window.getComputedStyle(n);if(o.computedStyle=b,l=["auto","overlay","scroll"].includes(b.overflowX),u=["auto","overlay","scroll"].includes(b.overflowY),h=["auto"].includes(b.overscrollBehaviorX),g=["auto"].includes(b.overscrollBehaviorY),o.hasOverflowX=l,o.hasOverflowY=u,!(l||u))return!1;v=n.scrollWidth,m=n.scrollHeight,y=n.clientWidth,M=n.clientHeight,f=v>y,d=m>M,o.isScrollableX=f,o.isScrollableY=d,o.scrollWidth=v,o.scrollHeight=m,o.clientWidth=y,o.clientHeight=M,o.hasOverscrollBehaviorX=h,o.hasOverscrollBehaviorY=g}else f=o.isScrollableX,d=o.isScrollableY,l=o.hasOverflowX,u=o.hasOverflowY,v=o.scrollWidth,m=o.scrollHeight,y=o.clientWidth,M=o.clientHeight,h=o.hasOverscrollBehaviorX,g=o.hasOverscrollBehaviorY;if(!(l&&f||u&&d))return!1;const A=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let S,x,P,I,C,D;if(A==="horizontal")S=Math.round(n.scrollLeft),x=v-y,P=e,I=l,C=f,D=h;else if(A==="vertical")S=Math.round(n.scrollTop),x=m-M,P=t,I=u,C=d,D=g;else return!1;return!D&&(S>=x||S<=0)?!0:(P>0?S<x:S>0)&&I&&C}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?QM(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(n=>{this.rootElement.classList.add(n)})}cleanUpClassName(){for(const n of Array.from(this.rootElement.classList))(n==="lenis"||n.startsWith("lenis-"))&&this.rootElement.classList.remove(n)}};function fL(){return ot.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const n=new rE({duration:1.15,easing:r=>Math.min(1,1.001-Math.pow(2,-10*r))});let e=0;const t=r=>{n.raf(r),e=requestAnimationFrame(t)};return e=requestAnimationFrame(t),()=>{cancelAnimationFrame(e),n.destroy()}},[]),null}const $_=ot.createContext({});function sE(n){const e=ot.useRef(null);return e.current===null&&(e.current=n()),e.current}const Jh=ot.createContext(null),j_=ot.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function oE(n=!0){const e=ot.useContext(Jh);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,l=ot.useId();ot.useEffect(()=>{n&&o(l)},[n]);const u=ot.useCallback(()=>n&&r&&r(l),[l,r,n]);return!t&&r?[!1,u]:[!0]}const ep=typeof window<"u",aE=ep?ot.useLayoutEffect:ot.useEffect,jn=n=>n;let dL=jn,Z_=jn;function tp(n){let e;return()=>(e===void 0&&(e=n()),e)}const Lo=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r},hr=n=>n*1e3,pr=n=>n/1e3,lE={useManualTiming:!1};function uE(n){let e=new Set,t=new Set,r=!1,o=!1;const l=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function f(h){l.has(h)&&(d.schedule(h),n()),h(u)}const d={schedule:(h,g=!1,v=!1)=>{const y=v&&r?e:t;return g&&l.add(h),y.has(h)||y.add(h),h},cancel:h=>{t.delete(h),l.delete(h)},process:h=>{if(u=h,r){o=!0;return}r=!0,[e,t]=[t,e],e.forEach(f),e.clear(),r=!1,o&&(o=!1,d.process(h))}};return d}const pu=["read","resolveKeyframes","update","preRender","render","postRender"],cE=40;function Q_(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>t=!0,u=pu.reduce((x,P)=>(x[P]=uE(l),x),{}),{read:f,resolveKeyframes:d,update:h,preRender:g,render:v,postRender:m}=u,y=()=>{const x=performance.now();t=!1,o.delta=r?1e3/60:Math.max(Math.min(x-o.timestamp,cE),1),o.timestamp=x,o.isProcessing=!0,f.process(o),d.process(o),h.process(o),g.process(o),v.process(o),m.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(y))},M=()=>{t=!0,r=!0,o.isProcessing||n(y)};return{schedule:pu.reduce((x,P)=>{const I=u[P];return x[P]=(C,D=!1,b=!1)=>(t||M(),I.schedule(C,D,b)),x},{}),cancel:x=>{for(let P=0;P<pu.length;P++)u[pu[P]].cancel(x)},state:o,steps:u}}const{schedule:zt,cancel:jr,state:Mn,steps:id}=Q_(typeof requestAnimationFrame<"u"?requestAnimationFrame:jn,!0),J_=ot.createContext({strict:!1}),Av={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Io={};for(const n in Av)Io[n]={isEnabled:e=>Av[n].some(t=>!!e[t])};function fE(n){for(const e in n)Io[e]={...Io[e],...n[e]}}const dE=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ju(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||dE.has(n)}let ex=n=>!ju(n);function hE(n){n&&(ex=e=>e.startsWith("on")?!ju(e):n(e))}try{hE(require("@emotion/is-prop-valid").default)}catch{}function pE(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||(ex(o)||t===!0&&ju(o)||!e&&!ju(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}function mE(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...r)=>n(...r);return new Proxy(t,{get:(r,o)=>o==="create"?n:(e.has(o)||e.set(o,n(o)),e.get(o))})}const fc=ot.createContext({});function $a(n){return typeof n=="string"||Array.isArray(n)}function dc(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const np=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ip=["initial",...np];function hc(n){return dc(n.animate)||ip.some(e=>$a(n[e]))}function tx(n){return!!(hc(n)||n.variants)}function gE(n,e){if(hc(n)){const{initial:t,animate:r}=n;return{initial:t===!1||$a(t)?t:void 0,animate:$a(r)?r:void 0}}return n.inherit!==!1?e:{}}function vE(n){const{initial:e,animate:t}=gE(n,ot.useContext(fc));return ot.useMemo(()=>({initial:e,animate:t}),[Rv(e),Rv(t)])}function Rv(n){return Array.isArray(n)?n.join(" "):n}const _E=Symbol.for("motionComponentSymbol");function To(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function xE(n,e,t){return ot.useCallback(r=>{r&&n.onMount&&n.onMount(r),e&&(r?e.mount(r):e.unmount()),t&&(typeof t=="function"?t(r):To(t)&&(t.current=r))},[e])}const rp=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),yE="framerAppearId",nx="data-"+rp(yE),{schedule:sp}=Q_(queueMicrotask,!1),ix=ot.createContext({});function SE(n,e,t,r,o){var l,u;const{visualElement:f}=ot.useContext(fc),d=ot.useContext(J_),h=ot.useContext(Jh),g=ot.useContext(j_).reducedMotion,v=ot.useRef(null);r=r||d.renderer,!v.current&&r&&(v.current=r(n,{visualState:e,parent:f,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:g}));const m=v.current,y=ot.useContext(ix);m&&!m.projection&&o&&(m.type==="html"||m.type==="svg")&&ME(v.current,t,o,y);const M=ot.useRef(!1);ot.useInsertionEffect(()=>{m&&M.current&&m.update(t,h)});const A=t[nx],S=ot.useRef(!!A&&!(!((l=window.MotionHandoffIsComplete)===null||l===void 0)&&l.call(window,A))&&((u=window.MotionHasOptimisedAnimation)===null||u===void 0?void 0:u.call(window,A)));return aE(()=>{m&&(M.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),sp.render(m.render),S.current&&m.animationState&&m.animationState.animateChanges())}),ot.useEffect(()=>{m&&(!S.current&&m.animationState&&m.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var x;(x=window.MotionHandoffMarkAsComplete)===null||x===void 0||x.call(window,A)}),S.current=!1))}),m}function ME(n,e,t,r){const{layoutId:o,layout:l,drag:u,dragConstraints:f,layoutScroll:d,layoutRoot:h}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:rx(n.parent)),n.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||f&&To(f),visualElement:n,animationType:typeof l=="string"?l:"both",initialPromotionConfig:r,layoutScroll:d,layoutRoot:h})}function rx(n){if(n)return n.options.allowProjection!==!1?n.projection:rx(n.parent)}function EE({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:r,Component:o}){var l,u;n&&fE(n);function f(h,g){let v;const m={...ot.useContext(j_),...h,layoutId:TE(h)},{isStatic:y}=m,M=vE(h),A=r(h,y);if(!y&&ep){wE();const S=AE(m);v=S.MeasureLayout,M.visualElement=SE(o,A,m,e,S.ProjectionNode)}return dt.jsxs(fc.Provider,{value:M,children:[v&&M.visualElement?dt.jsx(v,{visualElement:M.visualElement,...m}):null,t(o,h,xE(A,M.visualElement,g),A,y,M.visualElement)]})}f.displayName=`motion.${typeof o=="string"?o:`create(${(u=(l=o.displayName)!==null&&l!==void 0?l:o.name)!==null&&u!==void 0?u:""})`}`;const d=ot.forwardRef(f);return d[_E]=o,d}function TE({layoutId:n}){const e=ot.useContext($_).id;return e&&n!==void 0?e+"-"+n:n}function wE(n,e){ot.useContext(J_).strict}function AE(n){const{drag:e,layout:t}=Io;if(!e&&!t)return{};const r={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const RE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function op(n){return typeof n!="string"||n.includes("-")?!1:!!(RE.indexOf(n)>-1||/[A-Z]/u.test(n))}function Cv(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function ap(n,e,t,r){if(typeof e=="function"){const[o,l]=Cv(r);e=e(t!==void 0?t:n.custom,o,l)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,l]=Cv(r);e=e(t!==void 0?t:n.custom,o,l)}return e}const Kd=n=>Array.isArray(n),CE=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),bE=n=>Kd(n)?n[n.length-1]||0:n,Ln=n=>!!(n&&n.getVelocity);function zu(n){const e=Ln(n)?n.get():n;return CE(e)?e.toValue():e}function PE({scrapeMotionValuesFromProps:n,createRenderState:e,onUpdate:t},r,o,l){const u={latestValues:DE(r,o,l,n),renderState:e()};return t&&(u.onMount=f=>t({props:r,current:f,...u}),u.onUpdate=f=>t(f)),u}const sx=n=>(e,t)=>{const r=ot.useContext(fc),o=ot.useContext(Jh),l=()=>PE(n,e,r,o);return t?l():sE(l)};function DE(n,e,t,r){const o={},l=r(n,{});for(const m in l)o[m]=zu(l[m]);let{initial:u,animate:f}=n;const d=hc(n),h=tx(n);e&&h&&!d&&n.inherit!==!1&&(u===void 0&&(u=e.initial),f===void 0&&(f=e.animate));let g=t?t.initial===!1:!1;g=g||u===!1;const v=g?f:u;if(v&&typeof v!="boolean"&&!dc(v)){const m=Array.isArray(v)?v:[v];for(let y=0;y<m.length;y++){const M=ap(n,m[y]);if(M){const{transitionEnd:A,transition:S,...x}=M;for(const P in x){let I=x[P];if(Array.isArray(I)){const C=g?I.length-1:0;I=I[C]}I!==null&&(o[P]=I)}for(const P in A)o[P]=A[P]}}}return o}const Vo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Us=new Set(Vo),ox=n=>e=>typeof e=="string"&&e.startsWith(n),ax=ox("--"),LE=ox("var(--"),lp=n=>LE(n)?IE.test(n.split("/*")[0].trim()):!1,IE=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,lx=(n,e)=>e&&typeof n=="number"?e.transform(n):n,vr=(n,e,t)=>t>e?e:t<n?n:t,zo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},ja={...zo,transform:n=>vr(0,1,n)},mu={...zo,default:1},il=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),qr=il("deg"),Yi=il("%"),it=il("px"),NE=il("vh"),UE=il("vw"),bv={...Yi,parse:n=>Yi.parse(n)/100,transform:n=>Yi.transform(n*100)},FE={borderWidth:it,borderTopWidth:it,borderRightWidth:it,borderBottomWidth:it,borderLeftWidth:it,borderRadius:it,radius:it,borderTopLeftRadius:it,borderTopRightRadius:it,borderBottomRightRadius:it,borderBottomLeftRadius:it,width:it,maxWidth:it,height:it,maxHeight:it,top:it,right:it,bottom:it,left:it,padding:it,paddingTop:it,paddingRight:it,paddingBottom:it,paddingLeft:it,margin:it,marginTop:it,marginRight:it,marginBottom:it,marginLeft:it,backgroundPositionX:it,backgroundPositionY:it},OE={rotate:qr,rotateX:qr,rotateY:qr,rotateZ:qr,scale:mu,scaleX:mu,scaleY:mu,scaleZ:mu,skew:qr,skewX:qr,skewY:qr,distance:it,translateX:it,translateY:it,translateZ:it,x:it,y:it,z:it,perspective:it,transformPerspective:it,opacity:ja,originX:bv,originY:bv,originZ:it},Pv={...zo,transform:Math.round},up={...FE,...OE,zIndex:Pv,size:it,fillOpacity:ja,strokeOpacity:ja,numOctaves:Pv},BE={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},kE=Vo.length;function VE(n,e,t){let r="",o=!0;for(let l=0;l<kE;l++){const u=Vo[l],f=n[u];if(f===void 0)continue;let d=!0;if(typeof f=="number"?d=f===(u.startsWith("scale")?1:0):d=parseFloat(f)===0,!d||t){const h=lx(f,up[u]);if(!d){o=!1;const g=BE[u]||u;r+=`${g}(${h}) `}t&&(e[u]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function cp(n,e,t){const{style:r,vars:o,transformOrigin:l}=n;let u=!1,f=!1;for(const d in e){const h=e[d];if(Us.has(d)){u=!0;continue}else if(ax(d)){o[d]=h;continue}else{const g=lx(h,up[d]);d.startsWith("origin")?(f=!0,l[d]=g):r[d]=g}}if(e.transform||(u||t?r.transform=VE(e,n.transform,t):r.transform&&(r.transform="none")),f){const{originX:d="50%",originY:h="50%",originZ:g=0}=l;r.transformOrigin=`${d} ${h} ${g}`}}const zE={offset:"stroke-dashoffset",array:"stroke-dasharray"},HE={offset:"strokeDashoffset",array:"strokeDasharray"};function GE(n,e,t=1,r=0,o=!0){n.pathLength=1;const l=o?zE:HE;n[l.offset]=it.transform(-r);const u=it.transform(e),f=it.transform(t);n[l.array]=`${u} ${f}`}function Dv(n,e,t){return typeof n=="string"?n:it.transform(e+t*n)}function WE(n,e,t){const r=Dv(e,n.x,n.width),o=Dv(t,n.y,n.height);return`${r} ${o}`}function fp(n,{attrX:e,attrY:t,attrScale:r,originX:o,originY:l,pathLength:u,pathSpacing:f=1,pathOffset:d=0,...h},g,v){if(cp(n,h,v),g){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:m,style:y,dimensions:M}=n;m.transform&&(M&&(y.transform=m.transform),delete m.transform),M&&(o!==void 0||l!==void 0||y.transform)&&(y.transformOrigin=WE(M,o!==void 0?o:.5,l!==void 0?l:.5)),e!==void 0&&(m.x=e),t!==void 0&&(m.y=t),r!==void 0&&(m.scale=r),u!==void 0&&GE(m,u,f,d,!1)}const dp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),ux=()=>({...dp(),attrs:{}}),hp=n=>typeof n=="string"&&n.toLowerCase()==="svg";function cx(n,{style:e,vars:t},r,o){Object.assign(n.style,e,o&&o.getProjectionStyles(r));for(const l in t)n.style.setProperty(l,t[l])}const fx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function dx(n,e,t,r){cx(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(fx.has(o)?o:rp(o),e.attrs[o])}const Zu={};function XE(n){Object.assign(Zu,n)}function hx(n,{layout:e,layoutId:t}){return Us.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Zu[n]||n==="opacity")}function pp(n,e,t){var r;const{style:o}=n,l={};for(const u in o)(Ln(o[u])||e.style&&Ln(e.style[u])||hx(u,n)||((r=t==null?void 0:t.getValue(u))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(l[u]=o[u]);return l}function px(n,e,t){const r=pp(n,e,t);for(const o in n)if(Ln(n[o])||Ln(e[o])){const l=Vo.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[l]=n[o]}return r}function YE(n,e){try{e.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const Lv=["x","y","width","height","cx","cy","r"],qE={useVisualState:sx({scrapeMotionValuesFromProps:px,createRenderState:ux,onUpdate:({props:n,prevProps:e,current:t,renderState:r,latestValues:o})=>{if(!t)return;let l=!!n.drag;if(!l){for(const f in o)if(Us.has(f)){l=!0;break}}if(!l)return;let u=!e;if(e)for(let f=0;f<Lv.length;f++){const d=Lv[f];n[d]!==e[d]&&(u=!0)}u&&zt.read(()=>{YE(t,r),zt.render(()=>{fp(r,o,hp(t.tagName),n.transformTemplate),dx(t,r)})})}})},KE={useVisualState:sx({scrapeMotionValuesFromProps:pp,createRenderState:dp})};function mx(n,e,t){for(const r in e)!Ln(e[r])&&!hx(r,t)&&(n[r]=e[r])}function $E({transformTemplate:n},e){return ot.useMemo(()=>{const t=dp();return cp(t,e,n),Object.assign({},t.vars,t.style)},[e])}function jE(n,e){const t=n.style||{},r={};return mx(r,t,n),Object.assign(r,$E(n,e)),r}function ZE(n,e){const t={},r=jE(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}function QE(n,e,t,r){const o=ot.useMemo(()=>{const l=ux();return fp(l,e,hp(r),n.transformTemplate),{...l.attrs,style:{...l.style}}},[e]);if(n.style){const l={};mx(l,n.style,n),o.style={...l,...o.style}}return o}function JE(n=!1){return(t,r,o,{latestValues:l},u)=>{const d=(op(t)?QE:ZE)(r,l,u,t),h=pE(r,typeof t=="string",n),g=t!==ot.Fragment?{...h,...d,ref:o}:{},{children:v}=r,m=ot.useMemo(()=>Ln(v)?v.get():v,[v]);return ot.createElement(t,{...g,children:m})}}function eT(n,e){return function(r,{forwardMotionProps:o}={forwardMotionProps:!1}){const u={...op(r)?qE:KE,preloadedFeatures:n,useRender:JE(o),createVisualElement:e,Component:r};return EE(u)}}function gx(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}function pc(n,e,t){const r=n.getProps();return ap(r,e,t!==void 0?t:r.custom,n)}const tT=tp(()=>window.ScrollTimeline!==void 0);class nT{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=t}attachTimeline(e,t){const r=this.animations.map(o=>{if(tT()&&o.attachTimeline)return o.attachTimeline(e);if(typeof t=="function")return t(o)});return()=>{r.forEach((o,l)=>{o&&o(),this.animations[l].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class iT extends nT{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function mp(n,e){return n?n[e]||n.default||n:void 0}const $d=2e4;function vx(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<$d;)e+=t,r=n.next(e);return e>=$d?1/0:e}function gp(n){return typeof n=="function"}function Iv(n,e){n.timeline=e,n.onfinish=null}const vp=n=>Array.isArray(n)&&typeof n[0]=="number",rT={linearEasing:void 0};function sT(n,e){const t=tp(n);return()=>{var r;return(r=rT[e])!==null&&r!==void 0?r:t()}}const Qu=sT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),_x=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let l=0;l<o;l++)r+=n(Lo(0,o-1,l))+", ";return`linear(${r.substring(0,r.length-2)})`};function xx(n){return!!(typeof n=="function"&&Qu()||!n||typeof n=="string"&&(n in jd||Qu())||vp(n)||Array.isArray(n)&&n.every(xx))}const Ba=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,jd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ba([0,.65,.55,1]),circOut:Ba([.55,0,1,.45]),backIn:Ba([.31,.01,.66,-.59]),backOut:Ba([.33,1.53,.69,.99])};function yx(n,e){if(n)return typeof n=="function"&&Qu()?_x(n,e):vp(n)?Ba(n):Array.isArray(n)?n.map(t=>yx(t,e)||jd.easeOut):jd[n]}const Pi={x:!1,y:!1};function Sx(){return Pi.x||Pi.y}function oT(n,e,t){var r;if(n instanceof Element)return[n];if(typeof n=="string"){let o=document;const l=(r=void 0)!==null&&r!==void 0?r:o.querySelectorAll(n);return l?Array.from(l):[]}return Array.from(n)}function Mx(n,e){const t=oT(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function Nv(n){return e=>{e.pointerType==="touch"||Sx()||n(e)}}function aT(n,e,t={}){const[r,o,l]=Mx(n,t),u=Nv(f=>{const{target:d}=f,h=e(f);if(typeof h!="function"||!d)return;const g=Nv(v=>{h(v),d.removeEventListener("pointerleave",g)});d.addEventListener("pointerleave",g,o)});return r.forEach(f=>{f.addEventListener("pointerenter",u,o)}),l}const Ex=(n,e)=>e?n===e?!0:Ex(n,e.parentElement):!1,_p=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,lT=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function uT(n){return lT.has(n.tagName)||n.tabIndex!==-1}const ka=new WeakSet;function Uv(n){return e=>{e.key==="Enter"&&n(e)}}function rd(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const cT=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=Uv(()=>{if(ka.has(t))return;rd(t,"down");const o=Uv(()=>{rd(t,"up")}),l=()=>rd(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",l,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function Fv(n){return _p(n)&&!Sx()}function fT(n,e,t={}){const[r,o,l]=Mx(n,t),u=f=>{const d=f.currentTarget;if(!Fv(f)||ka.has(d))return;ka.add(d);const h=e(f),g=(y,M)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",m),!(!Fv(y)||!ka.has(d))&&(ka.delete(d),typeof h=="function"&&h(y,{success:M}))},v=y=>{g(y,t.useGlobalTarget||Ex(d,y.target))},m=y=>{g(y,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",m,o)};return r.forEach(f=>{!uT(f)&&f.getAttribute("tabindex")===null&&(f.tabIndex=0),(t.useGlobalTarget?window:f).addEventListener("pointerdown",u,o),f.addEventListener("focus",h=>cT(h,o),o)}),l}function dT(n){return n==="x"||n==="y"?Pi[n]?null:(Pi[n]=!0,()=>{Pi[n]=!1}):Pi.x||Pi.y?null:(Pi.x=Pi.y=!0,()=>{Pi.x=Pi.y=!1})}const Tx=new Set(["width","height","top","left","right","bottom",...Vo]);let Hu;function hT(){Hu=void 0}const qi={now:()=>(Hu===void 0&&qi.set(Mn.isProcessing||lE.useManualTiming?Mn.timestamp:performance.now()),Hu),set:n=>{Hu=n,queueMicrotask(hT)}};function xp(n,e){n.indexOf(e)===-1&&n.push(e)}function yp(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class Sp{constructor(){this.subscriptions=[]}add(e){return xp(this.subscriptions,e),()=>yp(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function wx(n,e){return e?n*(1e3/e):0}const Ov=30,pT=n=>!isNaN(parseFloat(n)),Bv={current:void 0};class mT{constructor(e,t={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,o=!0)=>{const l=qi.now();this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=qi.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=pT(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Sp);const r=this.events[e].add(t);return e==="change"?()=>{r(),zt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Bv.current&&Bv.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=qi.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Ov)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,Ov);return wx(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Za(n,e){return new mT(n,e)}function gT(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Za(t))}function vT(n,e){const t=pc(n,e);let{transitionEnd:r={},transition:o={},...l}=t||{};l={...l,...r};for(const u in l){const f=bE(l[u]);gT(n,u,f)}}function _T(n){return!!(Ln(n)&&n.add)}function Zd(n,e){const t=n.getValue("willChange");if(_T(t))return t.add(e)}function Ax(n){return n.props[nx]}const Rx=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,xT=1e-7,yT=12;function ST(n,e,t,r,o){let l,u,f=0;do u=e+(t-e)/2,l=Rx(u,r,o)-n,l>0?t=u:e=u;while(Math.abs(l)>xT&&++f<yT);return u}function rl(n,e,t,r){if(n===e&&t===r)return jn;const o=l=>ST(l,0,1,n,t);return l=>l===0||l===1?l:Rx(o(l),e,r)}const Cx=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,bx=n=>e=>1-n(1-e),Px=rl(.33,1.53,.69,.99),Mp=bx(Px),Dx=Cx(Mp),Lx=n=>(n*=2)<1?.5*Mp(n):.5*(2-Math.pow(2,-10*(n-1))),Ep=n=>1-Math.sin(Math.acos(n)),Ix=bx(Ep),Nx=Cx(Ep),Ux=n=>/^0[^.\s]+$/u.test(n);function MT(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Ux(n):!0}const Ga=n=>Math.round(n*1e5)/1e5,Tp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function ET(n){return n==null}const TT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,wp=(n,e)=>t=>!!(typeof t=="string"&&TT.test(t)&&t.startsWith(n)||e&&!ET(t)&&Object.prototype.hasOwnProperty.call(t,e)),Fx=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,l,u,f]=r.match(Tp);return{[n]:parseFloat(o),[e]:parseFloat(l),[t]:parseFloat(u),alpha:f!==void 0?parseFloat(f):1}},wT=n=>vr(0,255,n),sd={...zo,transform:n=>Math.round(wT(n))},bs={test:wp("rgb","red"),parse:Fx("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+sd.transform(n)+", "+sd.transform(e)+", "+sd.transform(t)+", "+Ga(ja.transform(r))+")"};function AT(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Qd={test:wp("#"),parse:AT,transform:bs.transform},wo={test:wp("hsl","hue"),parse:Fx("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+Yi.transform(Ga(e))+", "+Yi.transform(Ga(t))+", "+Ga(ja.transform(r))+")"},Dn={test:n=>bs.test(n)||Qd.test(n)||wo.test(n),parse:n=>bs.test(n)?bs.parse(n):wo.test(n)?wo.parse(n):Qd.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?bs.transform(n):wo.transform(n)},RT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function CT(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(Tp))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(RT))===null||t===void 0?void 0:t.length)||0)>0}const Ox="number",Bx="color",bT="var",PT="var(",kv="${}",DT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Qa(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let l=0;const f=e.replace(DT,d=>(Dn.test(d)?(r.color.push(l),o.push(Bx),t.push(Dn.parse(d))):d.startsWith(PT)?(r.var.push(l),o.push(bT),t.push(d)):(r.number.push(l),o.push(Ox),t.push(parseFloat(d))),++l,kv)).split(kv);return{values:t,split:f,indexes:r,types:o}}function kx(n){return Qa(n).values}function Vx(n){const{split:e,types:t}=Qa(n),r=e.length;return o=>{let l="";for(let u=0;u<r;u++)if(l+=e[u],o[u]!==void 0){const f=t[u];f===Ox?l+=Ga(o[u]):f===Bx?l+=Dn.transform(o[u]):l+=o[u]}return l}}const LT=n=>typeof n=="number"?0:n;function IT(n){const e=kx(n);return Vx(n)(e.map(LT))}const Zr={test:CT,parse:kx,createTransformer:Vx,getAnimatableNone:IT},NT=new Set(["brightness","contrast","saturate","opacity"]);function UT(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(Tp)||[];if(!r)return n;const o=t.replace(r,"");let l=NT.has(e)?1:0;return r!==t&&(l*=100),e+"("+l+o+")"}const FT=/\b([a-z-]*)\(.*?\)/gu,Jd={...Zr,getAnimatableNone:n=>{const e=n.match(FT);return e?e.map(UT).join(" "):n}},OT={...up,color:Dn,backgroundColor:Dn,outlineColor:Dn,fill:Dn,stroke:Dn,borderColor:Dn,borderTopColor:Dn,borderRightColor:Dn,borderBottomColor:Dn,borderLeftColor:Dn,filter:Jd,WebkitFilter:Jd},Ap=n=>OT[n];function zx(n,e){let t=Ap(n);return t!==Jd&&(t=Zr),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const BT=new Set(["auto","none","0"]);function kT(n,e,t){let r=0,o;for(;r<n.length&&!o;){const l=n[r];typeof l=="string"&&!BT.has(l)&&Qa(l).values.length&&(o=n[r]),r++}if(o&&t)for(const l of e)n[l]=zx(t,o)}const Vv=n=>n===zo||n===it,zv=(n,e)=>parseFloat(n.split(", ")[e]),Hv=(n,e)=>(t,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/u);if(o)return zv(o[1],e);{const l=r.match(/^matrix\((.+)\)$/u);return l?zv(l[1],n):0}},VT=new Set(["x","y","z"]),zT=Vo.filter(n=>!VT.has(n));function HT(n){const e=[];return zT.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const No={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:Hv(4,13),y:Hv(5,14)};No.translateX=No.x;No.translateY=No.y;const Ls=new Set;let eh=!1,th=!1;function Hx(){if(th){const n=Array.from(Ls).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=HT(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([l,u])=>{var f;(f=r.getValue(l))===null||f===void 0||f.set(u)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}th=!1,eh=!1,Ls.forEach(n=>n.complete()),Ls.clear()}function Gx(){Ls.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(th=!0)})}function GT(){Gx(),Hx()}class Rp{constructor(e,t,r,o,l,u=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Ls.add(this),eh||(eh=!0,zt.read(Gx),zt.resolveKeyframes(Hx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;for(let l=0;l<e.length;l++)if(e[l]===null)if(l===0){const u=o==null?void 0:o.get(),f=e[e.length-1];if(u!==void 0)e[0]=u;else if(r&&t){const d=r.readValue(t,f);d!=null&&(e[0]=d)}e[0]===void 0&&(e[0]=f),o&&u===void 0&&o.set(e[0])}else e[l]=e[l-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Ls.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Ls.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Wx=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),WT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function XT(n){const e=WT.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function Xx(n,e,t=1){const[r,o]=XT(n);if(!r)return;const l=window.getComputedStyle(e).getPropertyValue(r);if(l){const u=l.trim();return Wx(u)?parseFloat(u):u}return lp(o)?Xx(o,e,t+1):o}const Yx=n=>e=>e.test(n),YT={test:n=>n==="auto",parse:n=>n},qx=[zo,it,Yi,qr,UE,NE,YT],Gv=n=>qx.find(Yx(n));class Kx extends Rp{constructor(e,t,r,o,l){super(e,t,r,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),lp(h))){const g=Xx(h,t.current);g!==void 0&&(e[d]=g),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!Tx.has(r)||e.length!==2)return;const[o,l]=e,u=Gv(o),f=Gv(l);if(u!==f)if(Vv(u)&&Vv(f))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)MT(e[o])&&r.push(o);r.length&&kT(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=No[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var e;const{element:t,name:r,unresolvedKeyframes:o}=this;if(!t||!t.current)return;const l=t.getValue(r);l&&l.jump(this.measuredOrigin,!1);const u=o.length-1,f=o[u];o[u]=No[r](t.measureViewportBox(),window.getComputedStyle(t.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([d,h])=>{t.getValue(d).set(h)}),this.resolveNoneKeyframes()}}const Wv=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Zr.test(n)||n==="0")&&!n.startsWith("url("));function qT(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function KT(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const l=n[n.length-1],u=Wv(o,e),f=Wv(l,e);return!u||!f?!1:qT(n)||(t==="spring"||gp(t))&&r}const $T=n=>n!==null;function mc(n,{repeat:e,repeatType:t="loop"},r){const o=n.filter($T),l=e&&t!=="loop"&&e%2===1?0:o.length-1;return!l||r===void 0?o[l]:r}const jT=40;class $x{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",...f}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=qi.now(),this.options={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:l,repeatType:u,...f},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>jT?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&GT(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=qi.now(),this.hasAttemptedResolve=!0;const{name:r,type:o,velocity:l,delay:u,onComplete:f,onUpdate:d,isGenerator:h}=this.options;if(!h&&!KT(e,r,o,l))if(u)this.options.duration=0;else{d&&d(mc(e,this.options,t)),f&&f(),this.resolveFinishedPromise();return}const g=this.initPlayback(e,t);g!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...g},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const Qt=(n,e,t)=>n+(e-n)*t;function od(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function ZT({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,l=0,u=0;if(!e)o=l=u=t;else{const f=t<.5?t*(1+e):t+e-t*e,d=2*t-f;o=od(d,f,n+1/3),l=od(d,f,n),u=od(d,f,n-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:r}}function Ju(n,e){return t=>t>0?e:n}const ad=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},QT=[Qd,bs,wo],JT=n=>QT.find(e=>e.test(n));function Xv(n){const e=JT(n);if(!e)return!1;let t=e.parse(n);return e===wo&&(t=ZT(t)),t}const Yv=(n,e)=>{const t=Xv(n),r=Xv(e);if(!t||!r)return Ju(n,e);const o={...t};return l=>(o.red=ad(t.red,r.red,l),o.green=ad(t.green,r.green,l),o.blue=ad(t.blue,r.blue,l),o.alpha=Qt(t.alpha,r.alpha,l),bs.transform(o))},ew=(n,e)=>t=>e(n(t)),sl=(...n)=>n.reduce(ew),nh=new Set(["none","hidden"]);function tw(n,e){return nh.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function nw(n,e){return t=>Qt(n,e,t)}function Cp(n){return typeof n=="number"?nw:typeof n=="string"?lp(n)?Ju:Dn.test(n)?Yv:sw:Array.isArray(n)?jx:typeof n=="object"?Dn.test(n)?Yv:iw:Ju}function jx(n,e){const t=[...n],r=t.length,o=n.map((l,u)=>Cp(l)(l,e[u]));return l=>{for(let u=0;u<r;u++)t[u]=o[u](l);return t}}function iw(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=Cp(n[o])(n[o],e[o]));return o=>{for(const l in r)t[l]=r[l](o);return t}}function rw(n,e){var t;const r=[],o={color:0,var:0,number:0};for(let l=0;l<e.values.length;l++){const u=e.types[l],f=n.indexes[u][o[u]],d=(t=n.values[f])!==null&&t!==void 0?t:0;r[l]=d,o[u]++}return r}const sw=(n,e)=>{const t=Zr.createTransformer(e),r=Qa(n),o=Qa(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?nh.has(n)&&!o.values.length||nh.has(e)&&!r.values.length?tw(n,e):sl(jx(rw(r,o),o.values),t):Ju(n,e)};function Zx(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Qt(n,e,t):Cp(n)(n,e)}const ow=5;function Qx(n,e,t){const r=Math.max(e-ow,0);return wx(t-n(r),e-r)}const rn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ld=.001;function aw({duration:n=rn.duration,bounce:e=rn.bounce,velocity:t=rn.velocity,mass:r=rn.mass}){let o,l,u=1-e;u=vr(rn.minDamping,rn.maxDamping,u),n=vr(rn.minDuration,rn.maxDuration,pr(n)),u<1?(o=h=>{const g=h*u,v=g*n,m=g-t,y=ih(h,u),M=Math.exp(-v);return ld-m/y*M},l=h=>{const v=h*u*n,m=v*t+t,y=Math.pow(u,2)*Math.pow(h,2)*n,M=Math.exp(-v),A=ih(Math.pow(h,2),u);return(-o(h)+ld>0?-1:1)*((m-y)*M)/A}):(o=h=>{const g=Math.exp(-h*n),v=(h-t)*n+1;return-ld+g*v},l=h=>{const g=Math.exp(-h*n),v=(t-h)*(n*n);return g*v});const f=5/n,d=uw(o,l,f);if(n=hr(n),isNaN(d))return{stiffness:rn.stiffness,damping:rn.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:u*2*Math.sqrt(r*h),duration:n}}}const lw=12;function uw(n,e,t){let r=t;for(let o=1;o<lw;o++)r=r-n(r)/e(r);return r}function ih(n,e){return n*Math.sqrt(1-e*e)}const cw=["duration","bounce"],fw=["stiffness","damping","mass"];function qv(n,e){return e.some(t=>n[t]!==void 0)}function dw(n){let e={velocity:rn.velocity,stiffness:rn.stiffness,damping:rn.damping,mass:rn.mass,isResolvedFromDuration:!1,...n};if(!qv(n,fw)&&qv(n,cw))if(n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,l=2*vr(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:rn.mass,stiffness:o,damping:l}}else{const t=aw(n);e={...e,...t,mass:rn.mass},e.isResolvedFromDuration=!0}return e}function Jx(n=rn.visualDuration,e=rn.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const l=t.keyframes[0],u=t.keyframes[t.keyframes.length-1],f={done:!1,value:l},{stiffness:d,damping:h,mass:g,duration:v,velocity:m,isResolvedFromDuration:y}=dw({...t,velocity:-pr(t.velocity||0)}),M=m||0,A=h/(2*Math.sqrt(d*g)),S=u-l,x=pr(Math.sqrt(d/g)),P=Math.abs(S)<5;r||(r=P?rn.restSpeed.granular:rn.restSpeed.default),o||(o=P?rn.restDelta.granular:rn.restDelta.default);let I;if(A<1){const D=ih(x,A);I=b=>{const O=Math.exp(-A*x*b);return u-O*((M+A*x*S)/D*Math.sin(D*b)+S*Math.cos(D*b))}}else if(A===1)I=D=>u-Math.exp(-x*D)*(S+(M+x*S)*D);else{const D=x*Math.sqrt(A*A-1);I=b=>{const O=Math.exp(-A*x*b),T=Math.min(D*b,300);return u-O*((M+A*x*S)*Math.sinh(T)+D*S*Math.cosh(T))/D}}const C={calculatedDuration:y&&v||null,next:D=>{const b=I(D);if(y)f.done=D>=v;else{let O=0;A<1&&(O=D===0?hr(M):Qx(I,D,b));const T=Math.abs(O)<=r,L=Math.abs(u-b)<=o;f.done=T&&L}return f.value=f.done?u:b,f},toString:()=>{const D=Math.min(vx(C),$d),b=_x(O=>C.next(D*O).value,D,30);return D+"ms "+b}};return C}function Kv({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:f,max:d,restDelta:h=.5,restSpeed:g}){const v=n[0],m={done:!1,value:v},y=T=>f!==void 0&&T<f||d!==void 0&&T>d,M=T=>f===void 0?d:d===void 0||Math.abs(f-T)<Math.abs(d-T)?f:d;let A=t*e;const S=v+A,x=u===void 0?S:u(S);x!==S&&(A=x-v);const P=T=>-A*Math.exp(-T/r),I=T=>x+P(T),C=T=>{const L=P(T),k=I(T);m.done=Math.abs(L)<=h,m.value=m.done?x:k};let D,b;const O=T=>{y(m.value)&&(D=T,b=Jx({keyframes:[m.value,M(m.value)],velocity:Qx(I,T,m.value),damping:o,stiffness:l,restDelta:h,restSpeed:g}))};return O(0),{calculatedDuration:null,next:T=>{let L=!1;return!b&&D===void 0&&(L=!0,C(T),O(T)),D!==void 0&&T>=D?b.next(T-D):(!L&&C(T),m)}}}const hw=rl(.42,0,1,1),pw=rl(0,0,.58,1),ey=rl(.42,0,.58,1),mw=n=>Array.isArray(n)&&typeof n[0]!="number",gw={linear:jn,easeIn:hw,easeInOut:ey,easeOut:pw,circIn:Ep,circInOut:Nx,circOut:Ix,backIn:Mp,backInOut:Dx,backOut:Px,anticipate:Lx},$v=n=>{if(vp(n)){Z_(n.length===4);const[e,t,r,o]=n;return rl(e,t,r,o)}else if(typeof n=="string")return gw[n];return n};function vw(n,e,t){const r=[],o=t||Zx,l=n.length-1;for(let u=0;u<l;u++){let f=o(n[u],n[u+1]);if(e){const d=Array.isArray(e)?e[u]||jn:e;f=sl(d,f)}r.push(f)}return r}function _w(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const l=n.length;if(Z_(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const u=n[0]===n[1];n[0]>n[l-1]&&(n=[...n].reverse(),e=[...e].reverse());const f=vw(e,r,o),d=f.length,h=g=>{if(u&&g<n[0])return e[0];let v=0;if(d>1)for(;v<n.length-2&&!(g<n[v+1]);v++);const m=Lo(n[v],n[v+1],g);return f[v](m)};return t?g=>h(vr(n[0],n[l-1],g)):h}function xw(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=Lo(0,e,r);n.push(Qt(t,1,o))}}function yw(n){const e=[0];return xw(e,n.length-1),e}function Sw(n,e){return n.map(t=>t*e)}function Mw(n,e){return n.map(()=>e||ey).splice(0,n.length-1)}function ec({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=mw(r)?r.map($v):$v(r),l={done:!1,value:e[0]},u=Sw(t&&t.length===e.length?t:yw(e),n),f=_w(u,e,{ease:Array.isArray(o)?o:Mw(e,o)});return{calculatedDuration:n,next:d=>(l.value=f(d),l.done=d>=n,l)}}const Ew=n=>{const e=({timestamp:t})=>n(t);return{start:()=>zt.update(e,!0),stop:()=>jr(e),now:()=>Mn.isProcessing?Mn.timestamp:qi.now()}},Tw={decay:Kv,inertia:Kv,tween:ec,keyframes:ec,spring:Jx},ww=n=>n/100;class gc extends $x{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:d}=this.options;d&&d()};const{name:t,motionValue:r,element:o,keyframes:l}=this.options,u=(o==null?void 0:o.KeyframeResolver)||Rp,f=(d,h)=>this.onKeyframesResolved(d,h);this.resolver=new u(l,f,t,r,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=this.options,f=gp(t)?t:Tw[t]||ec;let d,h;f!==ec&&typeof e[0]!="number"&&(d=sl(ww,Zx(e[0],e[1])),e=[0,100]);const g=f({...this.options,keyframes:e});l==="mirror"&&(h=f({...this.options,keyframes:[...e].reverse(),velocity:-u})),g.calculatedDuration===null&&(g.calculatedDuration=vx(g));const{calculatedDuration:v}=g,m=v+o,y=m*(r+1)-o;return{generator:g,mirroredGenerator:h,mapPercentToKeyframes:d,calculatedDuration:v,resolvedDuration:m,totalDuration:y}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:r}=this;if(!r){const{keyframes:T}=this.options;return{done:!0,value:T[T.length-1]}}const{finalKeyframe:o,generator:l,mirroredGenerator:u,mapPercentToKeyframes:f,keyframes:d,calculatedDuration:h,totalDuration:g,resolvedDuration:v}=r;if(this.startTime===null)return l.next(0);const{delay:m,repeat:y,repeatType:M,repeatDelay:A,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-g/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const x=this.currentTime-m*(this.speed>=0?1:-1),P=this.speed>=0?x<0:x>g;this.currentTime=Math.max(x,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=g);let I=this.currentTime,C=l;if(y){const T=Math.min(this.currentTime,g)/v;let L=Math.floor(T),k=T%1;!k&&T>=1&&(k=1),k===1&&L--,L=Math.min(L,y+1),!!(L%2)&&(M==="reverse"?(k=1-k,A&&(k-=A/v)):M==="mirror"&&(C=u)),I=vr(0,1,k)*v}const D=P?{done:!1,value:d[0]}:C.next(I);f&&(D.value=f(D.value));let{done:b}=D;!P&&h!==null&&(b=this.speed>=0?this.currentTime>=g:this.currentTime<=0);const O=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&b);return O&&o!==void 0&&(D.value=mc(d,this.options,o)),S&&S(D.value),O&&this.finish(),D}get duration(){const{resolved:e}=this;return e?pr(e.calculatedDuration):0}get time(){return pr(this.currentTime)}set time(e){e=hr(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=pr(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=Ew,onPlay:t,startTime:r}=this.options;this.driver||(this.driver=e(l=>this.tick(l))),t&&t();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}function hL(n){return new gc(n)}const Aw=new Set(["opacity","clipPath","filter","transform"]);function Rw(n,e,t,{delay:r=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:f="easeInOut",times:d}={}){const h={[e]:t};d&&(h.offset=d);const g=yx(f,o);return Array.isArray(g)&&(h.easing=g),n.animate(h,{delay:r,duration:o,easing:Array.isArray(g)?"linear":g,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"})}const Cw=tp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),tc=10,bw=2e4;function Pw(n){return gp(n.type)||n.type==="spring"||!xx(n.ease)}function Dw(n,e){const t=new gc({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:n[0]};const o=[];let l=0;for(;!r.done&&l<bw;)r=t.sample(l),o.push(r.value),l+=tc;return{times:void 0,keyframes:o,duration:l-tc,ease:"linear"}}const ty={anticipate:Lx,backInOut:Dx,circInOut:Nx};function Lw(n){return n in ty}class jv extends $x{constructor(e){super(e);const{name:t,motionValue:r,element:o,keyframes:l}=this.options;this.resolver=new Kx(l,(u,f)=>this.onKeyframesResolved(u,f),t,r,o),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:r=300,times:o,ease:l,type:u,motionValue:f,name:d,startTime:h}=this.options;if(!f.owner||!f.owner.current)return!1;if(typeof l=="string"&&Qu()&&Lw(l)&&(l=ty[l]),Pw(this.options)){const{onComplete:v,onUpdate:m,motionValue:y,element:M,...A}=this.options,S=Dw(e,A);e=S.keyframes,e.length===1&&(e[1]=e[0]),r=S.duration,o=S.times,l=S.ease,u="keyframes"}const g=Rw(f.owner.current,d,e,{...this.options,duration:r,times:o,ease:l});return g.startTime=h??this.calcStartTime(),this.pendingTimeline?(Iv(g,this.pendingTimeline),this.pendingTimeline=void 0):g.onfinish=()=>{const{onComplete:v}=this.options;f.set(mc(e,this.options,t)),v&&v(),this.cancel(),this.resolveFinishedPromise()},{animation:g,duration:r,times:o,type:u,ease:l,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return pr(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return pr(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.currentTime=hr(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return jn;const{animation:r}=t;Iv(r,e)}return jn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:r,duration:o,type:l,ease:u,times:f}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:g,onComplete:v,element:m,...y}=this.options,M=new gc({...y,keyframes:r,duration:o,type:l,ease:u,times:f,isGenerator:!0}),A=hr(this.time);h.setWithVelocity(M.sample(A-tc).value,M.sample(A).value,tc)}const{onStop:d}=this.options;d&&d(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:r,repeatDelay:o,repeatType:l,damping:u,type:f}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=t.owner.getProps();return Cw()&&r&&Aw.has(r)&&!d&&!h&&!o&&l!=="mirror"&&u!==0&&f!=="inertia"}}const Iw={type:"spring",stiffness:500,damping:25,restSpeed:10},Nw=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Uw={type:"keyframes",duration:.8},Fw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Ow=(n,{keyframes:e})=>e.length>2?Uw:Us.has(n)?n.startsWith("scale")?Nw(e[1]):Iw:Fw;function Bw({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:f,from:d,elapsed:h,...g}){return!!Object.keys(g).length}const bp=(n,e,t,r={},o,l)=>u=>{const f=mp(r,n)||{},d=f.delay||r.delay||0;let{elapsed:h=0}=r;h=h-hr(d);let g={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...f,delay:-h,onUpdate:m=>{e.set(m),f.onUpdate&&f.onUpdate(m)},onComplete:()=>{u(),f.onComplete&&f.onComplete()},name:n,motionValue:e,element:l?void 0:o};Bw(f)||(g={...g,...Ow(n,g)}),g.duration&&(g.duration=hr(g.duration)),g.repeatDelay&&(g.repeatDelay=hr(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let v=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(g.duration=0,g.delay===0&&(v=!0)),v&&!l&&e.get()!==void 0){const m=mc(g.keyframes,f);if(m!==void 0)return zt.update(()=>{g.onUpdate(m),g.onComplete()}),new iT([])}return!l&&jv.supports(g)?new jv(g):new gc(g)};function kw({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function ny(n,e,{delay:t=0,transitionOverride:r,type:o}={}){var l;let{transition:u=n.getDefaultTransition(),transitionEnd:f,...d}=e;r&&(u=r);const h=[],g=o&&n.animationState&&n.animationState.getState()[o];for(const v in d){const m=n.getValue(v,(l=n.latestValues[v])!==null&&l!==void 0?l:null),y=d[v];if(y===void 0||g&&kw(g,v))continue;const M={delay:t,...mp(u||{},v)};let A=!1;if(window.MotionHandoffAnimation){const x=Ax(n);if(x){const P=window.MotionHandoffAnimation(x,v,zt);P!==null&&(M.startTime=P,A=!0)}}Zd(n,v),m.start(bp(v,m,y,n.shouldReduceMotion&&Tx.has(v)?{type:!1}:M,n,A));const S=m.animation;S&&h.push(S)}return f&&Promise.all(h).then(()=>{zt.update(()=>{f&&vT(n,f)})}),h}function rh(n,e,t={}){var r;const o=pc(n,e,t.type==="exit"?(r=n.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:l=n.getDefaultTransition()||{}}=o||{};t.transitionOverride&&(l=t.transitionOverride);const u=o?()=>Promise.all(ny(n,o,t)):()=>Promise.resolve(),f=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:g=0,staggerChildren:v,staggerDirection:m}=l;return Vw(n,e,g+h,v,m,t)}:()=>Promise.resolve(),{when:d}=l;if(d){const[h,g]=d==="beforeChildren"?[u,f]:[f,u];return h().then(()=>g())}else return Promise.all([u(),f(t.delay)])}function Vw(n,e,t=0,r=0,o=1,l){const u=[],f=(n.variantChildren.size-1)*r,d=o===1?(h=0)=>h*r:(h=0)=>f-h*r;return Array.from(n.variantChildren).sort(zw).forEach((h,g)=>{h.notify("AnimationStart",e),u.push(rh(h,e,{...l,delay:t+d(g)}).then(()=>h.notify("AnimationComplete",e)))}),Promise.all(u)}function zw(n,e){return n.sortNodePosition(e)}function Hw(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(l=>rh(n,l,t));r=Promise.all(o)}else if(typeof e=="string")r=rh(n,e,t);else{const o=typeof e=="function"?pc(n,e,t.custom):e;r=Promise.all(ny(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const Gw=ip.length;function iy(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?iy(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<Gw;t++){const r=ip[t],o=n.props[r];($a(o)||o===!1)&&(e[r]=o)}return e}const Ww=[...np].reverse(),Xw=np.length;function Yw(n){return e=>Promise.all(e.map(({animation:t,options:r})=>Hw(n,t,r)))}function qw(n){let e=Yw(n),t=Zv(),r=!0;const o=d=>(h,g)=>{var v;const m=pc(n,g,d==="exit"?(v=n.presenceContext)===null||v===void 0?void 0:v.custom:void 0);if(m){const{transition:y,transitionEnd:M,...A}=m;h={...h,...A,...M}}return h};function l(d){e=d(n)}function u(d){const{props:h}=n,g=iy(n.parent)||{},v=[],m=new Set;let y={},M=1/0;for(let S=0;S<Xw;S++){const x=Ww[S],P=t[x],I=h[x]!==void 0?h[x]:g[x],C=$a(I),D=x===d?P.isActive:null;D===!1&&(M=S);let b=I===g[x]&&I!==h[x]&&C;if(b&&r&&n.manuallyAnimateOnMount&&(b=!1),P.protectedKeys={...y},!P.isActive&&D===null||!I&&!P.prevProp||dc(I)||typeof I=="boolean")continue;const O=Kw(P.prevProp,I);let T=O||x===d&&P.isActive&&!b&&C||S>M&&C,L=!1;const k=Array.isArray(I)?I:[I];let V=k.reduce(o(x),{});D===!1&&(V={});const{prevResolvedValues:Y={}}=P,ue={...Y,...V},ce=K=>{T=!0,m.has(K)&&(L=!0,m.delete(K)),P.needsAnimating[K]=!0;const G=n.getValue(K);G&&(G.liveStyle=!1)};for(const K in ue){const G=V[K],oe=Y[K];if(y.hasOwnProperty(K))continue;let le=!1;Kd(G)&&Kd(oe)?le=!gx(G,oe):le=G!==oe,le?G!=null?ce(K):m.add(K):G!==void 0&&m.has(K)?ce(K):P.protectedKeys[K]=!0}P.prevProp=I,P.prevResolvedValues=V,P.isActive&&(y={...y,...V}),r&&n.blockInitialAnimation&&(T=!1),T&&(!(b&&O)||L)&&v.push(...k.map(K=>({animation:K,options:{type:x}})))}if(m.size){const S={};m.forEach(x=>{const P=n.getBaseTarget(x),I=n.getValue(x);I&&(I.liveStyle=!0),S[x]=P??null}),v.push({animation:S})}let A=!!v.length;return r&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(A=!1),r=!1,A?e(v):Promise.resolve()}function f(d,h){var g;if(t[d].isActive===h)return Promise.resolve();(g=n.variantChildren)===null||g===void 0||g.forEach(m=>{var y;return(y=m.animationState)===null||y===void 0?void 0:y.setActive(d,h)}),t[d].isActive=h;const v=u(d);for(const m in t)t[m].protectedKeys={};return v}return{animateChanges:u,setActive:f,setAnimateFunction:l,getState:()=>t,reset:()=>{t=Zv(),r=!0}}}function Kw(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!gx(e,n):!1}function xs(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Zv(){return{animate:xs(!0),whileInView:xs(),whileHover:xs(),whileTap:xs(),whileDrag:xs(),whileFocus:xs(),exit:xs()}}class Jr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class $w extends Jr{constructor(e){super(e),e.animationState||(e.animationState=qw(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();dc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let jw=0;class Zw extends Jr{constructor(){super(...arguments),this.id=jw++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const Qw={animation:{Feature:$w},exit:{Feature:Zw}};function Ja(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}function ol(n){return{point:{x:n.pageX,y:n.pageY}}}const Jw=n=>e=>_p(e)&&n(e,ol(e));function Wa(n,e,t,r){return Ja(n,e,Jw(t),r)}const Qv=(n,e)=>Math.abs(n-e);function e1(n,e){const t=Qv(n.x,e.x),r=Qv(n.y,e.y);return Math.sqrt(t**2+r**2)}class ry{constructor(e,t,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:l=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=cd(this.lastMoveEventInfo,this.history),m=this.startEvent!==null,y=e1(v.offset,{x:0,y:0})>=3;if(!m&&!y)return;const{point:M}=v,{timestamp:A}=Mn;this.history.push({...M,timestamp:A});const{onStart:S,onMove:x}=this.handlers;m||(S&&S(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,v)},this.handlePointerMove=(v,m)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=ud(m,this.transformPagePoint),zt.update(this.updatePoint,!0)},this.handlePointerUp=(v,m)=>{this.end();const{onEnd:y,onSessionEnd:M,resumeAnimation:A}=this.handlers;if(this.dragSnapToOrigin&&A&&A(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=cd(v.type==="pointercancel"?this.lastMoveEventInfo:ud(m,this.transformPagePoint),this.history);this.startEvent&&y&&y(v,S),M&&M(v,S)},!_p(e))return;this.dragSnapToOrigin=l,this.handlers=t,this.transformPagePoint=r,this.contextWindow=o||window;const u=ol(e),f=ud(u,this.transformPagePoint),{point:d}=f,{timestamp:h}=Mn;this.history=[{...d,timestamp:h}];const{onSessionStart:g}=t;g&&g(e,cd(f,this.history)),this.removeListeners=sl(Wa(this.contextWindow,"pointermove",this.handlePointerMove),Wa(this.contextWindow,"pointerup",this.handlePointerUp),Wa(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),jr(this.updatePoint)}}function ud(n,e){return e?{point:e(n.point)}:n}function Jv(n,e){return{x:n.x-e.x,y:n.y-e.y}}function cd({point:n},e){return{point:n,delta:Jv(n,sy(e)),offset:Jv(n,t1(e)),velocity:n1(e,.1)}}function t1(n){return n[0]}function sy(n){return n[n.length-1]}function n1(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=sy(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>hr(e)));)t--;if(!r)return{x:0,y:0};const l=pr(o.timestamp-r.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-r.x)/l,y:(o.y-r.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}const oy=1e-4,i1=1-oy,r1=1+oy,ay=.01,s1=0-ay,o1=0+ay;function oi(n){return n.max-n.min}function a1(n,e,t){return Math.abs(n-e)<=t}function e0(n,e,t,r=.5){n.origin=r,n.originPoint=Qt(e.min,e.max,n.origin),n.scale=oi(t)/oi(e),n.translate=Qt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=i1&&n.scale<=r1||isNaN(n.scale))&&(n.scale=1),(n.translate>=s1&&n.translate<=o1||isNaN(n.translate))&&(n.translate=0)}function Xa(n,e,t,r){e0(n.x,e.x,t.x,r?r.originX:void 0),e0(n.y,e.y,t.y,r?r.originY:void 0)}function t0(n,e,t){n.min=t.min+e.min,n.max=n.min+oi(e)}function l1(n,e,t){t0(n.x,e.x,t.x),t0(n.y,e.y,t.y)}function n0(n,e,t){n.min=e.min-t.min,n.max=n.min+oi(e)}function Ya(n,e,t){n0(n.x,e.x,t.x),n0(n.y,e.y,t.y)}function u1(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?Qt(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?Qt(t,n,r.max):Math.min(n,t)),n}function i0(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function c1(n,{top:e,left:t,bottom:r,right:o}){return{x:i0(n.x,t,o),y:i0(n.y,e,r)}}function r0(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function f1(n,e){return{x:r0(n.x,e.x),y:r0(n.y,e.y)}}function d1(n,e){let t=.5;const r=oi(n),o=oi(e);return o>r?t=Lo(e.min,e.max-r,n.min):r>o&&(t=Lo(n.min,n.max-o,e.min)),vr(0,1,t)}function h1(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const sh=.35;function p1(n=sh){return n===!1?n=0:n===!0&&(n=sh),{x:s0(n,"left","right"),y:s0(n,"top","bottom")}}function s0(n,e,t){return{min:o0(n,e),max:o0(n,t)}}function o0(n,e){return typeof n=="number"?n:n[e]||0}const a0=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ao=()=>({x:a0(),y:a0()}),l0=()=>({min:0,max:0}),on=()=>({x:l0(),y:l0()});function gi(n){return[n("x"),n("y")]}function ly({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function m1({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function g1(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function fd(n){return n===void 0||n===1}function oh({scale:n,scaleX:e,scaleY:t}){return!fd(n)||!fd(e)||!fd(t)}function Ts(n){return oh(n)||uy(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function uy(n){return u0(n.x)||u0(n.y)}function u0(n){return n&&n!=="0%"}function nc(n,e,t){const r=n-t,o=e*r;return t+o}function c0(n,e,t,r,o){return o!==void 0&&(n=nc(n,o,r)),nc(n,t,r)+e}function ah(n,e=0,t=1,r,o){n.min=c0(n.min,e,t,r,o),n.max=c0(n.max,e,t,r,o)}function cy(n,{x:e,y:t}){ah(n.x,e.translate,e.scale,e.originPoint),ah(n.y,t.translate,t.scale,t.originPoint)}const f0=.999999999999,d0=1.0000000000001;function v1(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let l,u;for(let f=0;f<o;f++){l=t[f],u=l.projectionDelta;const{visualElement:d}=l.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&l.options.layoutScroll&&l.scroll&&l!==l.root&&Co(n,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,cy(n,u)),r&&Ts(l.latestValues)&&Co(n,l.latestValues))}e.x<d0&&e.x>f0&&(e.x=1),e.y<d0&&e.y>f0&&(e.y=1)}function Ro(n,e){n.min=n.min+e,n.max=n.max+e}function h0(n,e,t,r,o=.5){const l=Qt(n.min,n.max,o);ah(n,e,t,l,r)}function Co(n,e){h0(n.x,e.x,e.scaleX,e.scale,e.originX),h0(n.y,e.y,e.scaleY,e.scale,e.originY)}function fy(n,e){return ly(g1(n.getBoundingClientRect(),e))}function _1(n,e,t){const r=fy(n,t),{scroll:o}=e;return o&&(Ro(r.x,o.offset.x),Ro(r.y,o.offset.y)),r}const dy=({current:n})=>n?n.ownerDocument.defaultView:null,x1=new WeakMap;class y1{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=on(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=g=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(ol(g).point)},l=(g,v)=>{const{drag:m,dragPropagation:y,onDragStart:M}=this.getProps();if(m&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=dT(m),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),gi(S=>{let x=this.getAxisMotionValue(S).get()||0;if(Yi.test(x)){const{projection:P}=this.visualElement;if(P&&P.layout){const I=P.layout.layoutBox[S];I&&(x=oi(I)*(parseFloat(x)/100))}}this.originPoint[S]=x}),M&&zt.postRender(()=>M(g,v)),Zd(this.visualElement,"transform");const{animationState:A}=this.visualElement;A&&A.setActive("whileDrag",!0)},u=(g,v)=>{const{dragPropagation:m,dragDirectionLock:y,onDirectionLock:M,onDrag:A}=this.getProps();if(!m&&!this.openDragLock)return;const{offset:S}=v;if(y&&this.currentDirection===null){this.currentDirection=S1(S),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",v.point,S),this.updateAxis("y",v.point,S),this.visualElement.render(),A&&A(g,v)},f=(g,v)=>this.stop(g,v),d=()=>gi(g=>{var v;return this.getAnimationState(g)==="paused"&&((v=this.getAxisMotionValue(g).animation)===null||v===void 0?void 0:v.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new ry(e,{onSessionStart:o,onStart:l,onMove:u,onSessionEnd:f,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:dy(this.visualElement)})}stop(e,t){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=t;this.startAnimation(o);const{onDragEnd:l}=this.getProps();l&&zt.postRender(()=>l(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!gu(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let u=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(u=u1(u,this.constraints[e],this.elastic[e])),l.set(u)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,l=this.constraints;t&&To(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&o?this.constraints=c1(o.layoutBox,t):this.constraints=!1,this.elastic=p1(r),l!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&gi(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=h1(o.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!To(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=_1(r,o.root,this.visualElement.getTransformPagePoint());let u=f1(o.layout.layoutBox,l);if(t){const f=t(m1(u));this.hasMutatedConstraints=!!f,f&&(u=ly(f))}return u}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:f}=this.getProps(),d=this.constraints||{},h=gi(g=>{if(!gu(g,t,this.currentDirection))return;let v=d&&d[g]||{};u&&(v={min:0,max:0});const m=o?200:1e6,y=o?40:1e7,M={type:"inertia",velocity:r?e[g]:0,bounceStiffness:m,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...l,...v};return this.startAxisValueAnimation(g,M)});return Promise.all(h).then(f)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return Zd(this.visualElement,e),r.start(bp(e,r,0,t,this.visualElement,!1))}stopAnimation(){gi(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){gi(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){gi(t=>{const{drag:r}=this.getProps();if(!gu(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(t);if(o&&o.layout){const{min:u,max:f}=o.layout.layoutBox[t];l.set(e[t]-Qt(u,f,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!To(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};gi(u=>{const f=this.getAxisMotionValue(u);if(f&&this.constraints!==!1){const d=f.get();o[u]=d1({min:d,max:d},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),gi(u=>{if(!gu(u,e,null))return;const f=this.getAxisMotionValue(u),{min:d,max:h}=this.constraints[u];f.set(Qt(d,h,o[u]))})}addListeners(){if(!this.visualElement.current)return;x1.set(this.visualElement,this);const e=this.visualElement.current,t=Wa(e,"pointerdown",d=>{const{drag:h,dragListener:g=!0}=this.getProps();h&&g&&this.start(d)}),r=()=>{const{dragConstraints:d}=this.getProps();To(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),zt.read(r);const u=Ja(window,"resize",()=>this.scalePositionWithinConstraints()),f=o.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(gi(g=>{const v=this.getAxisMotionValue(g);v&&(this.originPoint[g]+=d[g].translate,v.set(v.get()+d[g].translate))}),this.visualElement.render())}));return()=>{u(),t(),l(),f&&f()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=sh,dragMomentum:f=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:f}}}function gu(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function S1(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class M1 extends Jr{constructor(e){super(e),this.removeGroupControls=jn,this.removeListeners=jn,this.controls=new y1(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||jn}unmount(){this.removeGroupControls(),this.removeListeners()}}const p0=n=>(e,t)=>{n&&zt.postRender(()=>n(e,t))};class E1 extends Jr{constructor(){super(...arguments),this.removePointerDownListener=jn}onPointerDown(e){this.session=new ry(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:dy(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:p0(e),onStart:p0(t),onMove:r,onEnd:(l,u)=>{delete this.session,o&&zt.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=Wa(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Gu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function m0(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Ca={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(it.test(n))n=parseFloat(n);else return n;const t=m0(n,e.target.x),r=m0(n,e.target.y);return`${t}% ${r}%`}},T1={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=Zr.parse(n);if(o.length>5)return r;const l=Zr.createTransformer(n),u=typeof o[0]!="number"?1:0,f=t.x.scale*e.x,d=t.y.scale*e.y;o[0+u]/=f,o[1+u]/=d;const h=Qt(f,d,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),l(o)}};class w1 extends ot.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:l}=e;XE(A1),l&&(t.group&&t.group.add(l),r&&r.register&&o&&r.register(l),l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),Gu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:l}=this.props,u=r.projection;return u&&(u.isPresent=l,o||e.layoutDependency!==t||t===void 0?u.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?u.promote():u.relegate()||zt.postRender(()=>{const f=u.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),sp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function hy(n){const[e,t]=oE(),r=ot.useContext($_);return dt.jsx(w1,{...n,layoutGroup:r,switchLayoutGroup:ot.useContext(ix),isPresent:e,safeToRemove:t})}const A1={borderRadius:{...Ca,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ca,borderTopRightRadius:Ca,borderBottomLeftRadius:Ca,borderBottomRightRadius:Ca,boxShadow:T1};function R1(n,e,t){const r=Ln(n)?n:Za(n);return r.start(bp("",r,e,t)),r.animation}function C1(n){return n instanceof SVGElement&&n.tagName!=="svg"}const b1=(n,e)=>n.depth-e.depth;class P1{constructor(){this.children=[],this.isDirty=!1}add(e){xp(this.children,e),this.isDirty=!0}remove(e){yp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(b1),this.isDirty=!1,this.children.forEach(e)}}function D1(n,e){const t=qi.now(),r=({timestamp:o})=>{const l=o-t;l>=e&&(jr(r),n(l-e))};return zt.read(r,!0),()=>jr(r)}const py=["TopLeft","TopRight","BottomLeft","BottomRight"],L1=py.length,g0=n=>typeof n=="string"?parseFloat(n):n,v0=n=>typeof n=="number"||it.test(n);function I1(n,e,t,r,o,l){o?(n.opacity=Qt(0,t.opacity!==void 0?t.opacity:1,N1(r)),n.opacityExit=Qt(e.opacity!==void 0?e.opacity:1,0,U1(r))):l&&(n.opacity=Qt(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,r));for(let u=0;u<L1;u++){const f=`border${py[u]}Radius`;let d=_0(e,f),h=_0(t,f);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||v0(d)===v0(h)?(n[f]=Math.max(Qt(g0(d),g0(h),r),0),(Yi.test(h)||Yi.test(d))&&(n[f]+="%")):n[f]=h}(e.rotate||t.rotate)&&(n.rotate=Qt(e.rotate||0,t.rotate||0,r))}function _0(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const N1=my(0,.5,Ix),U1=my(.5,.95,jn);function my(n,e,t){return r=>r<n?0:r>e?1:t(Lo(n,e,r))}function x0(n,e){n.min=e.min,n.max=e.max}function pi(n,e){x0(n.x,e.x),x0(n.y,e.y)}function y0(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function S0(n,e,t,r,o){return n-=e,n=nc(n,1/t,r),o!==void 0&&(n=nc(n,1/o,r)),n}function F1(n,e=0,t=1,r=.5,o,l=n,u=n){if(Yi.test(e)&&(e=parseFloat(e),e=Qt(u.min,u.max,e/100)-u.min),typeof e!="number")return;let f=Qt(l.min,l.max,r);n===l&&(f-=e),n.min=S0(n.min,e,t,f,o),n.max=S0(n.max,e,t,f,o)}function M0(n,e,[t,r,o],l,u){F1(n,e[t],e[r],e[o],e.scale,l,u)}const O1=["x","scaleX","originX"],B1=["y","scaleY","originY"];function E0(n,e,t,r){M0(n.x,e,O1,t?t.x:void 0,r?r.x:void 0),M0(n.y,e,B1,t?t.y:void 0,r?r.y:void 0)}function T0(n){return n.translate===0&&n.scale===1}function gy(n){return T0(n.x)&&T0(n.y)}function w0(n,e){return n.min===e.min&&n.max===e.max}function k1(n,e){return w0(n.x,e.x)&&w0(n.y,e.y)}function A0(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function vy(n,e){return A0(n.x,e.x)&&A0(n.y,e.y)}function R0(n){return oi(n.x)/oi(n.y)}function C0(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class V1{constructor(){this.members=[]}add(e){xp(this.members,e),e.scheduleRender()}remove(e){if(yp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let r;for(let o=t;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){r=l;break}}return r?(this.promote(r),!0):!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function z1(n,e,t){let r="";const o=n.x.translate/e.x,l=n.y.translate/e.y,u=(t==null?void 0:t.z)||0;if((o||l||u)&&(r=`translate3d(${o}px, ${l}px, ${u}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:g,rotateX:v,rotateY:m,skewX:y,skewY:M}=t;h&&(r=`perspective(${h}px) ${r}`),g&&(r+=`rotate(${g}deg) `),v&&(r+=`rotateX(${v}deg) `),m&&(r+=`rotateY(${m}deg) `),y&&(r+=`skewX(${y}deg) `),M&&(r+=`skewY(${M}deg) `)}const f=n.x.scale*e.x,d=n.y.scale*e.y;return(f!==1||d!==1)&&(r+=`scale(${f}, ${d})`),r||"none"}const ws={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Va=typeof window<"u"&&window.MotionDebug!==void 0,dd=["","X","Y","Z"],H1={visibility:"hidden"},b0=1e3;let G1=0;function hd(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function _y(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=Ax(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:l}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",zt,!(o||l))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&_y(r)}function xy({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(u={},f=e==null?void 0:e()){this.id=G1++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Va&&(ws.totalNodes=ws.resolvedTargetDeltas=ws.recalculatedProjection=0),this.nodes.forEach(Y1),this.nodes.forEach(Z1),this.nodes.forEach(Q1),this.nodes.forEach(q1),Va&&window.MotionDebug.record(ws)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new P1)}addEventListener(u,f){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new Sp),this.eventHandlers.get(u).add(f)}notifyListeners(u,...f){const d=this.eventHandlers.get(u);d&&d.notify(...f)}hasListeners(u){return this.eventHandlers.has(u)}mount(u,f=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=C1(u),this.instance=u;const{layoutId:d,layout:h,visualElement:g}=this.options;if(g&&!g.current&&g.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),f&&(h||d)&&(this.isLayoutDirty=!0),n){let v;const m=()=>this.root.updateBlockedByResize=!1;n(u,()=>{this.root.updateBlockedByResize=!0,v&&v(),v=D1(m,250),Gu.hasAnimatedSinceResize&&(Gu.hasAnimatedSinceResize=!1,this.nodes.forEach(D0))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&g&&(d||h)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:m,hasRelativeTargetChanged:y,layout:M})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const A=this.options.transition||g.getDefaultTransition()||iA,{onLayoutAnimationStart:S,onLayoutAnimationComplete:x}=g.getProps(),P=!this.targetLayout||!vy(this.targetLayout,M)||y,I=!m&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||I||m&&(P||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(v,I);const C={...mp(A,"layout"),onPlay:S,onComplete:x};(g.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C)}else m||D0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=M})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,jr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(J1),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&_y(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const v=this.path[g];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:f,layout:d}=this.options;if(f===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(P0);return}this.isUpdating||this.nodes.forEach($1),this.isUpdating=!1,this.nodes.forEach(j1),this.nodes.forEach(W1),this.nodes.forEach(X1),this.clearAllSnapshots();const f=qi.now();Mn.delta=vr(0,1e3/60,f-Mn.timestamp),Mn.timestamp=f,Mn.isProcessing=!0,id.update.process(Mn),id.preRender.process(Mn),id.render.process(Mn),Mn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,sp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(K1),this.sharedNodes.forEach(eA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,zt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){zt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=on(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(f=!1),f){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!gy(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,g=h!==this.prevTransformTemplateValue;u&&(f||Ts(this.latestValues)||g)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const f=this.measurePageBox();let d=this.removeElementScroll(f);return u&&(d=this.removeTransform(d)),rA(d),{animationId:this.root.animationId,measuredBox:f,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:f}=this.options;if(!f)return on();const d=f.measureViewportBox();if(!(((u=this.scroll)===null||u===void 0?void 0:u.wasRoot)||this.path.some(sA))){const{scroll:g}=this.root;g&&(Ro(d.x,g.offset.x),Ro(d.y,g.offset.y))}return d}removeElementScroll(u){var f;const d=on();if(pi(d,u),!((f=this.scroll)===null||f===void 0)&&f.wasRoot)return d;for(let h=0;h<this.path.length;h++){const g=this.path[h],{scroll:v,options:m}=g;g!==this.root&&v&&m.layoutScroll&&(v.wasRoot&&pi(d,u),Ro(d.x,v.offset.x),Ro(d.y,v.offset.y))}return d}applyTransform(u,f=!1){const d=on();pi(d,u);for(let h=0;h<this.path.length;h++){const g=this.path[h];!f&&g.options.layoutScroll&&g.scroll&&g!==g.root&&Co(d,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),Ts(g.latestValues)&&Co(d,g.latestValues)}return Ts(this.latestValues)&&Co(d,this.latestValues),d}removeTransform(u){const f=on();pi(f,u);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!Ts(h.latestValues))continue;oh(h.latestValues)&&h.updateSnapshot();const g=on(),v=h.measurePageBox();pi(g,v),E0(f,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,g)}return Ts(this.latestValues)&&E0(f,this.latestValues),f}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Mn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var f;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==d;if(!(u||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((f=this.parent)===null||f===void 0)&&f.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:m}=this.options;if(!(!this.layout||!(v||m))){if(this.resolvedRelativeTargetAt=Mn.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=on(),this.relativeTargetOrigin=on(),Ya(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),pi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=on(),this.targetWithTransforms=on()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),l1(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):pi(this.target,this.layout.layoutBox),cy(this.target,this.targetDelta)):pi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=on(),this.relativeTargetOrigin=on(),Ya(this.relativeTargetOrigin,this.target,y.target),pi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Va&&ws.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||oh(this.parent.latestValues)||uy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var u;const f=this.getLead(),d=!!this.resumingFrom||this!==f;let h=!0;if((this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty)&&(h=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===Mn.timestamp&&(h=!1),h)return;const{layout:g,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||v))return;pi(this.layoutCorrected,this.layout.layoutBox);const m=this.treeScale.x,y=this.treeScale.y;v1(this.layoutCorrected,this.treeScale,this.path,d),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=on());const{target:M}=f;if(!M){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(y0(this.prevProjectionDelta.x,this.projectionDelta.x),y0(this.prevProjectionDelta.y,this.projectionDelta.y)),Xa(this.projectionDelta,this.layoutCorrected,M,this.latestValues),(this.treeScale.x!==m||this.treeScale.y!==y||!C0(this.projectionDelta.x,this.prevProjectionDelta.x)||!C0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",M)),Va&&ws.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var f;if((f=this.options.visualElement)===null||f===void 0||f.scheduleRender(),u){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ao(),this.projectionDelta=Ao(),this.projectionDeltaWithTransform=Ao()}setAnimationOrigin(u,f=!1){const d=this.snapshot,h=d?d.latestValues:{},g={...this.latestValues},v=Ao();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const m=on(),y=d?d.source:void 0,M=this.layout?this.layout.source:void 0,A=y!==M,S=this.getStack(),x=!S||S.members.length<=1,P=!!(A&&!x&&this.options.crossfade===!0&&!this.path.some(nA));this.animationProgress=0;let I;this.mixTargetDelta=C=>{const D=C/1e3;L0(v.x,u.x,D),L0(v.y,u.y,D),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ya(m,this.layout.layoutBox,this.relativeParent.layout.layoutBox),tA(this.relativeTarget,this.relativeTargetOrigin,m,D),I&&k1(this.relativeTarget,I)&&(this.isProjectionDirty=!1),I||(I=on()),pi(I,this.relativeTarget)),A&&(this.animationValues=g,I1(g,h,this.latestValues,D,P,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=D},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(jr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=zt.update(()=>{Gu.hasAnimatedSinceResize=!0,this.currentAnimation=R1(0,b0,{...u,onUpdate:f=>{this.mixTargetDelta(f),u.onUpdate&&u.onUpdate(f)},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(b0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:f,target:d,layout:h,latestValues:g}=u;if(!(!f||!d||!h)){if(this!==u&&this.layout&&h&&yy(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||on();const v=oi(this.layout.layoutBox.x);d.x.min=u.target.x.min,d.x.max=d.x.min+v;const m=oi(this.layout.layoutBox.y);d.y.min=u.target.y.min,d.y.max=d.y.min+m}pi(f,d),Co(f,g),Xa(this.projectionDeltaWithTransform,this.layoutCorrected,f,g)}}registerSharedNode(u,f){this.sharedNodes.has(u)||this.sharedNodes.set(u,new V1),this.sharedNodes.get(u).add(f);const h=f.options.initialPromotionConfig;f.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(f):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var u;const{layoutId:f}=this.options;return f?((u=this.getStack())===null||u===void 0?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:f}=this.options;return f?(u=this.getStack())===null||u===void 0?void 0:u.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:f,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),u&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let f=!1;const{latestValues:d}=u;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(f=!0),!f)return;const h={};d.z&&hd("z",u,h,this.animationValues);for(let g=0;g<dd.length;g++)hd(`rotate${dd[g]}`,u,h,this.animationValues),hd(`skew${dd[g]}`,u,h,this.animationValues);u.render();for(const g in h)u.setStaticValue(g,h[g]),this.animationValues&&(this.animationValues[g]=h[g]);u.scheduleRender()}getProjectionStyles(u){var f,d;if(!this.instance||this.isSVG)return;if(!this.isVisible)return H1;const h={visibility:""},g=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=zu(u==null?void 0:u.pointerEvents)||"",h.transform=g?g(this.latestValues,""):"none",h;const v=this.getLead();if(!this.projectionDelta||!this.layout||!v.target){const A={};return this.options.layoutId&&(A.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,A.pointerEvents=zu(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!Ts(this.latestValues)&&(A.transform=g?g({},""):"none",this.hasProjected=!1),A}const m=v.animationValues||v.latestValues;this.applyTransformsToTarget(),h.transform=z1(this.projectionDeltaWithTransform,this.treeScale,m),g&&(h.transform=g(m,h.transform));const{x:y,y:M}=this.projectionDelta;h.transformOrigin=`${y.origin*100}% ${M.origin*100}% 0`,v.animationValues?h.opacity=v===this?(d=(f=m.opacity)!==null&&f!==void 0?f:this.latestValues.opacity)!==null&&d!==void 0?d:1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:h.opacity=v===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const A in Zu){if(m[A]===void 0)continue;const{correct:S,applyTo:x}=Zu[A],P=h.transform==="none"?m[A]:S(m[A],v);if(x){const I=x.length;for(let C=0;C<I;C++)h[x[C]]=P}else h[A]=P}return this.options.layoutId&&(h.pointerEvents=v===this?zu(u==null?void 0:u.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var f;return(f=u.currentAnimation)===null||f===void 0?void 0:f.stop()}),this.root.nodes.forEach(P0),this.root.sharedNodes.clear()}}}function W1(n){n.updateLayout()}function X1(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:l}=n.options,u=t.source!==n.layout.source;l==="size"?gi(v=>{const m=u?t.measuredBox[v]:t.layoutBox[v],y=oi(m);m.min=r[v].min,m.max=m.min+y}):yy(l,t.layoutBox,r)&&gi(v=>{const m=u?t.measuredBox[v]:t.layoutBox[v],y=oi(r[v]);m.max=m.min+y,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+y)});const f=Ao();Xa(f,r,t.layoutBox);const d=Ao();u?Xa(d,n.applyTransform(o,!0),t.measuredBox):Xa(d,r,t.layoutBox);const h=!gy(f);let g=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:m,layout:y}=v;if(m&&y){const M=on();Ya(M,t.layoutBox,m.layoutBox);const A=on();Ya(A,r,y.layoutBox),vy(M,A)||(g=!0),v.options.layoutRoot&&(n.relativeTarget=A,n.relativeTargetOrigin=M,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:d,layoutDelta:f,hasLayoutChanged:h,hasRelativeTargetChanged:g})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function Y1(n){Va&&ws.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function q1(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function K1(n){n.clearSnapshot()}function P0(n){n.clearMeasurements()}function $1(n){n.isLayoutDirty=!1}function j1(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function D0(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function Z1(n){n.resolveTargetDelta()}function Q1(n){n.calcProjection()}function J1(n){n.resetSkewAndRotation()}function eA(n){n.removeLeadSnapshot()}function L0(n,e,t){n.translate=Qt(e.translate,0,t),n.scale=Qt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function I0(n,e,t,r){n.min=Qt(e.min,t.min,r),n.max=Qt(e.max,t.max,r)}function tA(n,e,t,r){I0(n.x,e.x,t.x,r),I0(n.y,e.y,t.y,r)}function nA(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const iA={duration:.45,ease:[.4,0,.1,1]},N0=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),U0=N0("applewebkit/")&&!N0("chrome/")?Math.round:jn;function F0(n){n.min=U0(n.min),n.max=U0(n.max)}function rA(n){F0(n.x),F0(n.y)}function yy(n,e,t){return n==="position"||n==="preserve-aspect"&&!a1(R0(e),R0(t),.2)}function sA(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const oA=xy({attachResizeListener:(n,e)=>Ja(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),pd={current:void 0},Sy=xy({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!pd.current){const n=new oA({});n.mount(window),n.setOptions({layoutScroll:!0}),pd.current=n}return pd.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),aA={pan:{Feature:E1},drag:{Feature:M1,ProjectionNode:Sy,MeasureLayout:hy}};function O0(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,l=r[o];l&&zt.postRender(()=>l(e,ol(e)))}class lA extends Jr{mount(){const{current:e}=this.node;e&&(this.unmount=aT(e,t=>(O0(this.node,t,"Start"),r=>O0(this.node,r,"End"))))}unmount(){}}class uA extends Jr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=sl(Ja(this.node.current,"focus",()=>this.onFocus()),Ja(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function B0(n,e,t){const{props:r}=n;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),l=r[o];l&&zt.postRender(()=>l(e,ol(e)))}class cA extends Jr{mount(){const{current:e}=this.node;e&&(this.unmount=fT(e,t=>(B0(this.node,t,"Start"),(r,{success:o})=>B0(this.node,r,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const lh=new WeakMap,md=new WeakMap,fA=n=>{const e=lh.get(n.target);e&&e(n)},dA=n=>{n.forEach(fA)};function hA({root:n,...e}){const t=n||document;md.has(t)||md.set(t,{});const r=md.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(dA,{root:n,...e})),r[o]}function pA(n,e,t){const r=hA(e);return lh.set(n,t),r.observe(n),()=>{lh.delete(n),r.unobserve(n)}}const mA={some:0,all:1};class gA extends Jr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:l}=e,u={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:mA[o]},f=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:g,onViewportLeave:v}=this.node.getProps(),m=h?g:v;m&&m(d)};return pA(this.node.current,u,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(vA(e,t))&&this.startObserver()}unmount(){}}function vA({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const _A={inView:{Feature:gA},tap:{Feature:cA},focus:{Feature:uA},hover:{Feature:lA}},xA={layout:{ProjectionNode:Sy,MeasureLayout:hy}},ic={current:null},Pp={current:!1};function My(){if(Pp.current=!0,!!ep)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>ic.current=n.matches;n.addListener(e),e()}else ic.current=!1}const yA=[...qx,Dn,Zr],SA=n=>yA.find(Yx(n)),k0=new WeakMap;function MA(n,e,t){for(const r in e){const o=e[r],l=t[r];if(Ln(o))n.addValue(r,o);else if(Ln(l))n.addValue(r,Za(o,{owner:n}));else if(l!==o)if(n.hasValue(r)){const u=n.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=n.getStaticValue(r);n.addValue(r,Za(u!==void 0?u:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const V0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class EA{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Rp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=qi.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,zt.render(this.render,!1,!0))};const{latestValues:d,renderState:h,onUpdate:g}=u;this.onUpdate=g,this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=f,this.blockInitialAnimation=!!l,this.isControllingVariants=hc(t),this.isVariantNode=tx(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...m}=this.scrapeMotionValuesFromProps(t,{},this);for(const y in m){const M=m[y];d[y]!==void 0&&Ln(M)&&M.set(d[y],!1)}}mount(e){this.current=e,k0.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),Pp.current||My(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ic.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){k0.delete(this.current),this.projection&&this.projection.unmount(),jr(this.notifyUpdate),jr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Us.has(e),o=t.on("change",f=>{this.latestValues[e]=f,this.props.onUpdate&&zt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),l=t.on("renderRequest",this.scheduleRender);let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),l(),u&&u(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Io){const t=Io[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):on()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<V0.length;r++){const o=V0[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=e[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=MA(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Za(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){var r;let o=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options);return o!=null&&(typeof o=="string"&&(Wx(o)||Ux(o))?o=parseFloat(o):!SA(o)&&Zr.test(t)&&(o=zx(e,t)),this.setBaseTarget(e,Ln(o)?o.get():o)),Ln(o)?o.get():o}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const u=ap(this.props,r,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);u&&(o=u[e])}if(r&&o!==void 0)return o;const l=this.getBaseTargetFromProps(this.props,e);return l!==void 0&&!Ln(l)?l:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Sp),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class Ey extends EA{constructor(){super(...arguments),this.KeyframeResolver=Kx}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Ln(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function TA(n){return window.getComputedStyle(n)}class wA extends Ey{constructor(){super(...arguments),this.type="html",this.renderInstance=cx}readValueFromInstance(e,t){if(Us.has(t)){const r=Ap(t);return r&&r.default||0}else{const r=TA(e),o=(ax(t)?r.getPropertyValue(t):r[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return fy(e,t)}build(e,t,r){cp(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return pp(e,t,r)}}class AA extends Ey{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=on}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Us.has(t)){const r=Ap(t);return r&&r.default||0}return t=fx.has(t)?t:rp(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return px(e,t,r)}build(e,t,r){fp(e,t,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,r,o){dx(e,t,r,o)}mount(e){this.isSVGTag=hp(e.tagName),super.mount(e)}}const RA=(n,e)=>op(n)?new AA(e):new wA(e,{allowProjection:n!==ot.Fragment}),CA=eT({...Qw,..._A,...aA,...xA},RA),z0=mE(CA);function bA(){!Pp.current&&My();const[n]=ot.useState(ic.current);return n}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dp="185",mL={ROTATE:0,DOLLY:1,PAN:2},gL={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},PA=0,H0=1,DA=2,Wu=1,LA=2,za=3,Qr=0,Zn=1,fr=2,mr=0,bo=1,G0=2,W0=3,X0=4,IA=5,Rs=100,NA=101,UA=102,FA=103,OA=104,BA=200,kA=201,VA=202,zA=203,uh=204,ch=205,HA=206,GA=207,WA=208,XA=209,YA=210,qA=211,KA=212,$A=213,jA=214,fh=0,dh=1,hh=2,Uo=3,ph=4,mh=5,gh=6,vh=7,Lp=0,ZA=1,QA=2,Ki=0,Ty=1,wy=2,Ay=3,Ry=4,Cy=5,by=6,Py=7,Dy=300,Is=301,Fo=302,gd=303,vd=304,vc=306,_h=1e3,dr=1001,xh=1002,En=1003,JA=1004,vu=1005,In=1006,_d=1007,Ps=1008,si=1009,Ly=1010,Iy=1011,el=1012,Ip=1013,ji=1014,Li=1015,_r=1016,Np=1017,Up=1018,tl=1020,Ny=35902,Uy=35899,Fy=1021,Oy=1022,Ii=1023,xr=1026,Ds=1027,Fp=1028,Op=1029,Ns=1030,Bp=1031,kp=1033,Xu=33776,Yu=33777,qu=33778,Ku=33779,yh=35840,Sh=35841,Mh=35842,Eh=35843,Th=36196,wh=37492,Ah=37496,Rh=37488,Ch=37489,rc=37490,bh=37491,Ph=37808,Dh=37809,Lh=37810,Ih=37811,Nh=37812,Uh=37813,Fh=37814,Oh=37815,Bh=37816,kh=37817,Vh=37818,zh=37819,Hh=37820,Gh=37821,Wh=36492,Xh=36494,Yh=36495,qh=36283,Kh=36284,sc=36285,$h=36286,eR=3200,oc=0,tR=1,Kr="",vi="srgb",ac="srgb-linear",lc="linear",Nt="srgb",ao=7680,Y0=519,nR=512,iR=513,rR=514,Vp=515,sR=516,oR=517,zp=518,aR=519,q0=35044,K0="300 es",Xi=2e3,nl=2001;function lR(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function uc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function uR(){const n=uc("canvas");return n.style.display="block",n}const $0={};function j0(...n){const e="THREE."+n.shift();console.log(e,...n)}function By(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function st(...n){n=By(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function wt(...n){n=By(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Po(...n){const e=n.join(" ");e in $0||($0[e]=!0,st(...n))}function cR(n,e,t){return new Promise(function(r,o){function l(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const fR={[fh]:dh,[hh]:gh,[ph]:vh,[Uo]:mh,[dh]:fh,[gh]:hh,[vh]:ph,[mh]:Uo};class es{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Z0=1234567;const qa=Math.PI/180,Oo=180/Math.PI;function Ho(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]).toLowerCase()}function vt(n,e,t){return Math.max(e,Math.min(t,n))}function Hp(n,e){return(n%e+e)%e}function dR(n,e,t,r,o){return r+(n-e)*(o-r)/(t-e)}function hR(n,e,t){return n!==e?(t-n)/(e-n):0}function Ka(n,e,t){return(1-t)*n+t*e}function pR(n,e,t,r){return Ka(n,e,1-Math.exp(-t*r))}function mR(n,e=1){return e-Math.abs(Hp(n,e*2)-e)}function gR(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function vR(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function _R(n,e){return n+Math.floor(Math.random()*(e-n+1))}function xR(n,e){return n+Math.random()*(e-n)}function yR(n){return n*(.5-Math.random())}function SR(n){n!==void 0&&(Z0=n);let e=Z0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function MR(n){return n*qa}function ER(n){return n*Oo}function TR(n){return(n&n-1)===0&&n!==0}function wR(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function AR(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function RR(n,e,t,r,o){const l=Math.cos,u=Math.sin,f=l(t/2),d=u(t/2),h=l((e+r)/2),g=u((e+r)/2),v=l((e-r)/2),m=u((e-r)/2),y=l((r-e)/2),M=u((r-e)/2);switch(o){case"XYX":n.set(f*g,d*v,d*m,f*h);break;case"YZY":n.set(d*m,f*g,d*v,f*h);break;case"ZXZ":n.set(d*v,d*m,f*g,f*h);break;case"XZX":n.set(f*g,d*M,d*y,f*h);break;case"YXY":n.set(d*y,f*g,d*M,f*h);break;case"ZYZ":n.set(d*M,d*y,f*g,f*h);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Eo(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const vL={DEG2RAD:qa,RAD2DEG:Oo,generateUUID:Ho,clamp:vt,euclideanModulo:Hp,mapLinear:dR,inverseLerp:hR,lerp:Ka,damp:pR,pingpong:mR,smoothstep:gR,smootherstep:vR,randInt:_R,randFloat:xR,randFloatSpread:yR,seededRandom:SR,degToRad:MR,radToDeg:ER,isPowerOfTwo:TR,ceilPowerOfTwo:wR,floorPowerOfTwo:AR,setQuaternionFromProperEuler:RR,normalize:kn,denormalize:Eo},Yp=class Yp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yp.prototype.isVector2=!0;let xt=Yp;class Go{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let d=r[o+0],h=r[o+1],g=r[o+2],v=r[o+3],m=l[u+0],y=l[u+1],M=l[u+2],A=l[u+3];if(v!==A||d!==m||h!==y||g!==M){let S=d*m+h*y+g*M+v*A;S<0&&(m=-m,y=-y,M=-M,A=-A,S=-S);let x=1-f;if(S<.9995){const P=Math.acos(S),I=Math.sin(P);x=Math.sin(x*P)/I,f=Math.sin(f*P)/I,d=d*x+m*f,h=h*x+y*f,g=g*x+M*f,v=v*x+A*f}else{d=d*x+m*f,h=h*x+y*f,g=g*x+M*f,v=v*x+A*f;const P=1/Math.sqrt(d*d+h*h+g*g+v*v);d*=P,h*=P,g*=P,v*=P}}e[t]=d,e[t+1]=h,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],d=r[o+1],h=r[o+2],g=r[o+3],v=l[u],m=l[u+1],y=l[u+2],M=l[u+3];return e[t]=f*M+g*v+d*y-h*m,e[t+1]=d*M+g*m+h*v-f*y,e[t+2]=h*M+g*y+f*m-d*v,e[t+3]=g*M-f*v-d*m-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,d=Math.sin,h=f(r/2),g=f(o/2),v=f(l/2),m=d(r/2),y=d(o/2),M=d(l/2);switch(u){case"XYZ":this._x=m*g*v+h*y*M,this._y=h*y*v-m*g*M,this._z=h*g*M+m*y*v,this._w=h*g*v-m*y*M;break;case"YXZ":this._x=m*g*v+h*y*M,this._y=h*y*v-m*g*M,this._z=h*g*M-m*y*v,this._w=h*g*v+m*y*M;break;case"ZXY":this._x=m*g*v-h*y*M,this._y=h*y*v+m*g*M,this._z=h*g*M+m*y*v,this._w=h*g*v-m*y*M;break;case"ZYX":this._x=m*g*v-h*y*M,this._y=h*y*v+m*g*M,this._z=h*g*M-m*y*v,this._w=h*g*v+m*y*M;break;case"YZX":this._x=m*g*v+h*y*M,this._y=h*y*v+m*g*M,this._z=h*g*M-m*y*v,this._w=h*g*v-m*y*M;break;case"XZY":this._x=m*g*v-h*y*M,this._y=h*y*v-m*g*M,this._z=h*g*M+m*y*v,this._w=h*g*v+m*y*M;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],d=t[9],h=t[2],g=t[6],v=t[10],m=r+f+v;if(m>0){const y=.5/Math.sqrt(m+1);this._w=.25/y,this._x=(g-d)*y,this._y=(l-h)*y,this._z=(u-o)*y}else if(r>f&&r>v){const y=2*Math.sqrt(1+r-f-v);this._w=(g-d)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(l+h)/y}else if(f>v){const y=2*Math.sqrt(1+f-r-v);this._w=(l-h)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(d+g)/y}else{const y=2*Math.sqrt(1+v-r-f);this._w=(u-o)/y,this._x=(l+h)/y,this._y=(d+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,d=t._y,h=t._z,g=t._w;return this._x=r*g+u*f+o*h-l*d,this._y=o*g+u*d+l*f-r*h,this._z=l*g+u*h+r*d-o*f,this._w=u*g-r*f-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let d=1-t;if(f<.9995){const h=Math.acos(f),g=Math.sin(h);d=Math.sin(d*h)/g,t=Math.sin(t*h)/g,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const qp=class qp{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Q0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Q0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,d=e.w,h=2*(u*o-f*r),g=2*(f*t-l*o),v=2*(l*r-u*t);return this.x=t+d*h+u*v-f*g,this.y=r+d*g+f*h-l*v,this.z=o+d*v+l*g-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,d=t.z;return this.x=o*d-l*f,this.y=l*u-r*d,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return xd.copy(this).projectOnVector(e),this.sub(xd)}reflect(e){return this.sub(xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qp.prototype.isVector3=!0;let te=qp;const xd=new te,Q0=new Go,Kp=class Kp{constructor(e,t,r,o,l,u,f,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,d,h)}set(e,t,r,o,l,u,f,d,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=t,g[4]=l,g[5]=d,g[6]=r,g[7]=u,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],d=r[6],h=r[1],g=r[4],v=r[7],m=r[2],y=r[5],M=r[8],A=o[0],S=o[3],x=o[6],P=o[1],I=o[4],C=o[7],D=o[2],b=o[5],O=o[8];return l[0]=u*A+f*P+d*D,l[3]=u*S+f*I+d*b,l[6]=u*x+f*C+d*O,l[1]=h*A+g*P+v*D,l[4]=h*S+g*I+v*b,l[7]=h*x+g*C+v*O,l[2]=m*A+y*P+M*D,l[5]=m*S+y*I+M*b,l[8]=m*x+y*C+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],g=e[8];return t*u*g-t*f*h-r*l*g+r*f*d+o*l*h-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],g=e[8],v=g*u-f*h,m=f*d-g*l,y=h*l-u*d,M=t*v+r*m+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=v*A,e[1]=(o*h-g*r)*A,e[2]=(f*r-o*u)*A,e[3]=m*A,e[4]=(g*t-o*d)*A,e[5]=(o*l-f*t)*A,e[6]=y*A,e[7]=(r*d-h*t)*A,e[8]=(u*t-r*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*u+h*f)+u+e,-o*h,o*d,-o*(-h*u+d*f)+f+t,0,0,1),this}scale(e,t){return Po("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yd.makeScale(e,t)),this}rotate(e){return Po("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yd.makeRotation(-e)),this}translate(e,t){return Po("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Kp.prototype.isMatrix3=!0;let ct=Kp;const yd=new ct,J0=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),e_=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function CR(){const n={enabled:!0,workingColorSpace:ac,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Nt&&(o.r=gr(o.r),o.g=gr(o.g),o.b=gr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Nt&&(o.r=Do(o.r),o.g=Do(o.g),o.b=Do(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Kr?lc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Po("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Po("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[ac]:{primaries:e,whitePoint:r,transfer:lc,toXYZ:J0,fromXYZ:e_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vi},outputColorSpaceConfig:{drawingBufferColorSpace:vi}},[vi]:{primaries:e,whitePoint:r,transfer:Nt,toXYZ:J0,fromXYZ:e_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vi}}}),n}const St=CR();function gr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Do(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let lo;class bR{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{lo===void 0&&(lo=uc("canvas")),lo.width=e.width,lo.height=e.height;const o=lo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=lo}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=uc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=gr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(gr(t[r]/255)*255):t[r]=gr(t[r]);return{data:t,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let PR=0;class Gp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PR++}),this.uuid=Ho(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Sd(o[u].image)):l.push(Sd(o[u]))}else l=Sd(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Sd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bR.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let DR=0;const Md=new te;class Nn extends es{constructor(e=Nn.DEFAULT_IMAGE,t=Nn.DEFAULT_MAPPING,r=dr,o=dr,l=In,u=Ps,f=Ii,d=si,h=Nn.DEFAULT_ANISOTROPY,g=Kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DR++}),this.uuid=Ho(),this.name="",this.source=new Gp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Md).x}get height(){return this.source.getSize(Md).y}get depth(){return this.source.getSize(Md).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){st(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){st(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _h:e.x=e.x-Math.floor(e.x);break;case dr:e.x=e.x<0?0:1;break;case xh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _h:e.y=e.y-Math.floor(e.y);break;case dr:e.y=e.y<0?0:1;break;case xh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=Dy;Nn.DEFAULT_ANISOTROPY=1;const $p=class $p{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],g=d[4],v=d[8],m=d[1],y=d[5],M=d[9],A=d[2],S=d[6],x=d[10];if(Math.abs(g-m)<.01&&Math.abs(v-A)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+m)<.1&&Math.abs(v+A)<.1&&Math.abs(M+S)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(h+1)/2,C=(y+1)/2,D=(x+1)/2,b=(g+m)/4,O=(v+A)/4,T=(M+S)/4;return I>C&&I>D?I<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(I),o=b/r,l=O/r):C>D?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=b/o,l=T/o):D<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(D),r=O/l,o=T/l),this.set(r,o,l,t),this}let P=Math.sqrt((S-M)*(S-M)+(v-A)*(v-A)+(m-g)*(m-g));return Math.abs(P)<.001&&(P=1),this.x=(S-M)/P,this.y=(v-A)/P,this.z=(m-g)/P,this.w=Math.acos((h+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$p.prototype.isVector4=!0;let Jt=$p;class LR extends es{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Nn(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Gp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends LR{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class ky extends Nn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=En,this.minFilter=En,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class IR extends Nn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=En,this.minFilter=En,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cc=class cc{constructor(e,t,r,o,l,u,f,d,h,g,v,m,y,M,A,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,d,h,g,v,m,y,M,A,S)}set(e,t,r,o,l,u,f,d,h,g,v,m,y,M,A,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=o,x[1]=l,x[5]=u,x[9]=f,x[13]=d,x[2]=h,x[6]=g,x[10]=v,x[14]=m,x[3]=y,x[7]=M,x[11]=A,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/uo.setFromMatrixColumn(e,0).length(),l=1/uo.setFromMatrixColumn(e,1).length(),u=1/uo.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),d=Math.cos(o),h=Math.sin(o),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const m=u*g,y=u*v,M=f*g,A=f*v;t[0]=d*g,t[4]=-d*v,t[8]=h,t[1]=y+M*h,t[5]=m-A*h,t[9]=-f*d,t[2]=A-m*h,t[6]=M+y*h,t[10]=u*d}else if(e.order==="YXZ"){const m=d*g,y=d*v,M=h*g,A=h*v;t[0]=m+A*f,t[4]=M*f-y,t[8]=u*h,t[1]=u*v,t[5]=u*g,t[9]=-f,t[2]=y*f-M,t[6]=A+m*f,t[10]=u*d}else if(e.order==="ZXY"){const m=d*g,y=d*v,M=h*g,A=h*v;t[0]=m-A*f,t[4]=-u*v,t[8]=M+y*f,t[1]=y+M*f,t[5]=u*g,t[9]=A-m*f,t[2]=-u*h,t[6]=f,t[10]=u*d}else if(e.order==="ZYX"){const m=u*g,y=u*v,M=f*g,A=f*v;t[0]=d*g,t[4]=M*h-y,t[8]=m*h+A,t[1]=d*v,t[5]=A*h+m,t[9]=y*h-M,t[2]=-h,t[6]=f*d,t[10]=u*d}else if(e.order==="YZX"){const m=u*d,y=u*h,M=f*d,A=f*h;t[0]=d*g,t[4]=A-m*v,t[8]=M*v+y,t[1]=v,t[5]=u*g,t[9]=-f*g,t[2]=-h*g,t[6]=y*v+M,t[10]=m-A*v}else if(e.order==="XZY"){const m=u*d,y=u*h,M=f*d,A=f*h;t[0]=d*g,t[4]=-v,t[8]=h*g,t[1]=m*v+A,t[5]=u*g,t[9]=y*v-M,t[2]=M*v-y,t[6]=f*g,t[10]=A*v+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(NR,e,UR)}lookAt(e,t,r){const o=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),zr.crossVectors(r,ni),zr.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),zr.crossVectors(r,ni)),zr.normalize(),_u.crossVectors(ni,zr),o[0]=zr.x,o[4]=_u.x,o[8]=ni.x,o[1]=zr.y,o[5]=_u.y,o[9]=ni.y,o[2]=zr.z,o[6]=_u.z,o[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],d=r[8],h=r[12],g=r[1],v=r[5],m=r[9],y=r[13],M=r[2],A=r[6],S=r[10],x=r[14],P=r[3],I=r[7],C=r[11],D=r[15],b=o[0],O=o[4],T=o[8],L=o[12],k=o[1],V=o[5],Y=o[9],ue=o[13],ce=o[2],$=o[6],ae=o[10],K=o[14],G=o[3],oe=o[7],le=o[11],F=o[15];return l[0]=u*b+f*k+d*ce+h*G,l[4]=u*O+f*V+d*$+h*oe,l[8]=u*T+f*Y+d*ae+h*le,l[12]=u*L+f*ue+d*K+h*F,l[1]=g*b+v*k+m*ce+y*G,l[5]=g*O+v*V+m*$+y*oe,l[9]=g*T+v*Y+m*ae+y*le,l[13]=g*L+v*ue+m*K+y*F,l[2]=M*b+A*k+S*ce+x*G,l[6]=M*O+A*V+S*$+x*oe,l[10]=M*T+A*Y+S*ae+x*le,l[14]=M*L+A*ue+S*K+x*F,l[3]=P*b+I*k+C*ce+D*G,l[7]=P*O+I*V+C*$+D*oe,l[11]=P*T+I*Y+C*ae+D*le,l[15]=P*L+I*ue+C*K+D*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],d=e[9],h=e[13],g=e[2],v=e[6],m=e[10],y=e[14],M=e[3],A=e[7],S=e[11],x=e[15],P=d*y-h*m,I=f*y-h*v,C=f*m-d*v,D=u*y-h*g,b=u*m-d*g,O=u*v-f*g;return t*(A*P-S*I+x*C)-r*(M*P-S*D+x*b)+o*(M*I-A*D+x*O)-l*(M*C-A*b+S*O)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],f=e[9],d=e[2],h=e[6],g=e[10];return t*(u*g-f*h)-r*(l*g-f*d)+o*(l*h-u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],g=e[8],v=e[9],m=e[10],y=e[11],M=e[12],A=e[13],S=e[14],x=e[15],P=t*f-r*u,I=t*d-o*u,C=t*h-l*u,D=r*d-o*f,b=r*h-l*f,O=o*h-l*d,T=g*A-v*M,L=g*S-m*M,k=g*x-y*M,V=v*S-m*A,Y=v*x-y*A,ue=m*x-y*S,ce=P*ue-I*Y+C*V+D*k-b*L+O*T;if(ce===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/ce;return e[0]=(f*ue-d*Y+h*V)*$,e[1]=(o*Y-r*ue-l*V)*$,e[2]=(A*O-S*b+x*D)*$,e[3]=(m*b-v*O-y*D)*$,e[4]=(d*k-u*ue-h*L)*$,e[5]=(t*ue-o*k+l*L)*$,e[6]=(S*C-M*O-x*I)*$,e[7]=(g*O-m*C+y*I)*$,e[8]=(u*Y-f*k+h*T)*$,e[9]=(r*k-t*Y-l*T)*$,e[10]=(M*b-A*C+x*P)*$,e[11]=(v*C-g*b-y*P)*$,e[12]=(f*L-u*V-d*T)*$,e[13]=(t*V-r*L+o*T)*$,e[14]=(A*I-M*D-S*P)*$,e[15]=(g*D-v*I+m*P)*$,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,d=e.z,h=l*u,g=l*f;return this.set(h*u+r,h*f-o*d,h*d+o*f,0,h*f+o*d,g*f+r,g*d-o*u,0,h*d-o*f,g*d+o*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,d=t._w,h=l+l,g=u+u,v=f+f,m=l*h,y=l*g,M=l*v,A=u*g,S=u*v,x=f*v,P=d*h,I=d*g,C=d*v,D=r.x,b=r.y,O=r.z;return o[0]=(1-(A+x))*D,o[1]=(y+C)*D,o[2]=(M-I)*D,o[3]=0,o[4]=(y-C)*b,o[5]=(1-(m+x))*b,o[6]=(S+P)*b,o[7]=0,o[8]=(M+I)*O,o[9]=(S-P)*O,o[10]=(1-(m+A))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=uo.set(o[0],o[1],o[2]).length();const f=uo.set(o[4],o[5],o[6]).length(),d=uo.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Ri.copy(this);const h=1/u,g=1/f,v=1/d;return Ri.elements[0]*=h,Ri.elements[1]*=h,Ri.elements[2]*=h,Ri.elements[4]*=g,Ri.elements[5]*=g,Ri.elements[6]*=g,Ri.elements[8]*=v,Ri.elements[9]*=v,Ri.elements[10]*=v,t.setFromRotationMatrix(Ri),r.x=u,r.y=f,r.z=d,this}makePerspective(e,t,r,o,l,u,f=Xi,d=!1){const h=this.elements,g=2*l/(t-e),v=2*l/(r-o),m=(t+e)/(t-e),y=(r+o)/(r-o);let M,A;if(d)M=l/(u-l),A=u*l/(u-l);else if(f===Xi)M=-(u+l)/(u-l),A=-2*u*l/(u-l);else if(f===nl)M=-u/(u-l),A=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=v,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=Xi,d=!1){const h=this.elements,g=2/(t-e),v=2/(r-o),m=-(t+e)/(t-e),y=-(r+o)/(r-o);let M,A;if(d)M=1/(u-l),A=u/(u-l);else if(f===Xi)M=-2/(u-l),A=-(u+l)/(u-l);else if(f===nl)M=-1/(u-l),A=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=v,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=M,h[14]=A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};cc.prototype.isMatrix4=!0;let Ht=cc;const uo=new te,Ri=new Ht,NR=new te(0,0,0),UR=new te(1,1,1),zr=new te,_u=new te,ni=new te,t_=new Ht,n_=new Go;class yr{constructor(e=0,t=0,r=0,o=yr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],d=o[1],h=o[5],g=o[9],v=o[2],m=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(vt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-vt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(m,y),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,y),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return t_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(t_,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return n_.setFromEuler(this),this.setFromQuaternion(n_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yr.DEFAULT_ORDER="XYZ";class Vy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let FR=0;const i_=new te,co=new Go,or=new Ht,xu=new te,ba=new te,OR=new te,BR=new Go,r_=new te(1,0,0),s_=new te(0,1,0),o_=new te(0,0,1),a_={type:"added"},kR={type:"removed"},fo={type:"childadded",child:null},Ed={type:"childremoved",child:null};class Un extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FR++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new te,t=new yr,r=new Go,o=new te(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ht},normalMatrix:{value:new ct}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return co.setFromAxisAngle(e,t),this.quaternion.multiply(co),this}rotateOnWorldAxis(e,t){return co.setFromAxisAngle(e,t),this.quaternion.premultiply(co),this}rotateX(e){return this.rotateOnAxis(r_,e)}rotateY(e){return this.rotateOnAxis(s_,e)}rotateZ(e){return this.rotateOnAxis(o_,e)}translateOnAxis(e,t){return i_.copy(e).applyQuaternion(this.quaternion),this.position.add(i_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(r_,e)}translateY(e){return this.translateOnAxis(s_,e)}translateZ(e){return this.translateOnAxis(o_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(or.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?xu.copy(e):xu.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?or.lookAt(ba,xu,this.up):or.lookAt(xu,ba,this.up),this.quaternion.setFromRotationMatrix(or),o&&(or.extractRotation(o.matrixWorld),co.setFromRotationMatrix(or),this.quaternion.premultiply(co.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(a_),fo.child=e,this.dispatchEvent(fo),fo.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kR),Ed.child=e,this.dispatchEvent(Ed),Ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),or.multiply(e.parent.matrixWorld)),e.applyMatrix4(or),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(a_),fo.child=e,this.dispatchEvent(fo),fo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,e,OR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,BR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,g=d.length;h<g;h++){const v=d[h];l(e.shapes,v)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(l(e.animations,d))}}if(t){const f=u(e.geometries),d=u(e.materials),h=u(e.textures),g=u(e.images),v=u(e.shapes),m=u(e.skeletons),y=u(e.animations),M=u(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),m.length>0&&(r.skeletons=m),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(f){const d=[];for(const h in f){const g=f[h];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Un.DEFAULT_UP=new te(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class yu extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VR={type:"move"};class Td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const A of e.hand.values()){const S=t.getJointPose(A,r),x=this._getHandJoint(h,A);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],m=g.position.distanceTo(v.position),y=.02,M=.005;h.inputState.pinching&&m>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(VR)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new yu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const zy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},Su={h:0,s:0,l:0};function wd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class _t{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=St.workingColorSpace){return this.r=e,this.g=t,this.b=r,St.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=St.workingColorSpace){if(e=Hp(e,1),t=vt(t,0,1),r=vt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=wd(u,l,e+1/3),this.g=wd(u,l,e),this.b=wd(u,l,e-1/3)}return St.colorSpaceToWorking(this,o),this}setStyle(e,t=vi){function r(l){l!==void 0&&parseFloat(l)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:st("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vi){const r=zy[e.toLowerCase()];return r!==void 0?this.setHex(r,t):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=Do(e.r),this.g=Do(e.g),this.b=Do(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vi){return St.workingToColorSpace(Pn.copy(this),e),Math.round(vt(Pn.r*255,0,255))*65536+Math.round(vt(Pn.g*255,0,255))*256+Math.round(vt(Pn.b*255,0,255))}getHexString(e=vi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.workingToColorSpace(Pn.copy(this),t);const r=Pn.r,o=Pn.g,l=Pn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let d,h;const g=(f+u)/2;if(f===u)d=0,h=0;else{const v=u-f;switch(h=g<=.5?v/(u+f):v/(2-u-f),u){case r:d=(o-l)/v+(o<l?6:0);break;case o:d=(l-r)/v+2;break;case l:d=(r-o)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=g,e}getRGB(e,t=St.workingColorSpace){return St.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=vi){St.workingToColorSpace(Pn.copy(this),e);const t=Pn.r,r=Pn.g,o=Pn.b;return e!==vi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+t,Hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Hr),e.getHSL(Su);const r=Ka(Hr.h,Su.h,t),o=Ka(Hr.s,Su.s,t),l=Ka(Hr.l,Su.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new _t;_t.NAMES=zy;class zR extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yr,this.environmentIntensity=1,this.environmentRotation=new yr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ci=new te,ar=new te,Ad=new te,lr=new te,ho=new te,po=new te,l_=new te,Rd=new te,Cd=new te,bd=new te,Pd=new Jt,Dd=new Jt,Ld=new Jt;class Di{constructor(e=new te,t=new te,r=new te){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ci.subVectors(e,t),o.cross(Ci);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Ci.subVectors(o,t),ar.subVectors(r,t),Ad.subVectors(e,t);const u=Ci.dot(Ci),f=Ci.dot(ar),d=Ci.dot(Ad),h=ar.dot(ar),g=ar.dot(Ad),v=u*h-f*f;if(v===0)return l.set(0,0,0),null;const m=1/v,y=(h*d-f*g)*m,M=(u*g-f*d)*m;return l.set(1-y-M,M,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,lr)===null?!1:lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getInterpolation(e,t,r,o,l,u,f,d){return this.getBarycoord(e,t,r,o,lr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,lr.x),d.addScaledVector(u,lr.y),d.addScaledVector(f,lr.z),d)}static getInterpolatedAttribute(e,t,r,o,l,u){return Pd.setScalar(0),Dd.setScalar(0),Ld.setScalar(0),Pd.fromBufferAttribute(e,t),Dd.fromBufferAttribute(e,r),Ld.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Pd,l.x),u.addScaledVector(Dd,l.y),u.addScaledVector(Ld,l.z),u}static isFrontFacing(e,t,r,o){return Ci.subVectors(r,t),ar.subVectors(e,t),Ci.cross(ar).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),Ci.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Di.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;ho.subVectors(o,r),po.subVectors(l,r),Rd.subVectors(e,r);const d=ho.dot(Rd),h=po.dot(Rd);if(d<=0&&h<=0)return t.copy(r);Cd.subVectors(e,o);const g=ho.dot(Cd),v=po.dot(Cd);if(g>=0&&v<=g)return t.copy(o);const m=d*v-g*h;if(m<=0&&d>=0&&g<=0)return u=d/(d-g),t.copy(r).addScaledVector(ho,u);bd.subVectors(e,l);const y=ho.dot(bd),M=po.dot(bd);if(M>=0&&y<=M)return t.copy(l);const A=y*h-d*M;if(A<=0&&h>=0&&M<=0)return f=h/(h-M),t.copy(r).addScaledVector(po,f);const S=g*M-y*v;if(S<=0&&v-g>=0&&y-M>=0)return l_.subVectors(l,o),f=(v-g)/(v-g+(y-M)),t.copy(o).addScaledVector(l_,f);const x=1/(S+A+m);return u=A*x,f=m*x,t.copy(r).addScaledVector(ho,u).addScaledVector(po,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Fs{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,bi):bi.fromBufferAttribute(l,u),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Mu.copy(r.boundingBox)),Mu.applyMatrix4(e.matrixWorld),this.union(Mu)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pa),Eu.subVectors(this.max,Pa),mo.subVectors(e.a,Pa),go.subVectors(e.b,Pa),vo.subVectors(e.c,Pa),Gr.subVectors(go,mo),Wr.subVectors(vo,go),ys.subVectors(mo,vo);let t=[0,-Gr.z,Gr.y,0,-Wr.z,Wr.y,0,-ys.z,ys.y,Gr.z,0,-Gr.x,Wr.z,0,-Wr.x,ys.z,0,-ys.x,-Gr.y,Gr.x,0,-Wr.y,Wr.x,0,-ys.y,ys.x,0];return!Id(t,mo,go,vo,Eu)||(t=[1,0,0,0,1,0,0,0,1],!Id(t,mo,go,vo,Eu))?!1:(Tu.crossVectors(Gr,Wr),t=[Tu.x,Tu.y,Tu.z],Id(t,mo,go,vo,Eu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ur),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ur=[new te,new te,new te,new te,new te,new te,new te,new te],bi=new te,Mu=new Fs,mo=new te,go=new te,vo=new te,Gr=new te,Wr=new te,ys=new te,Pa=new te,Eu=new te,Tu=new te,Ss=new te;function Id(n,e,t,r,o){for(let l=0,u=n.length-3;l<=u;l+=3){Ss.fromArray(n,l);const f=o.x*Math.abs(Ss.x)+o.y*Math.abs(Ss.y)+o.z*Math.abs(Ss.z),d=e.dot(Ss),h=t.dot(Ss),g=r.dot(Ss);if(Math.max(-Math.max(d,h,g),Math.min(d,h,g))>f)return!1}return!0}const un=new te,wu=new xt;let HR=0;class Ni extends es{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:HR++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=q0,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)wu.fromBufferAttribute(this,t),wu.applyMatrix3(e),this.setXY(t,wu.x,wu.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Eo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=kn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Eo(t,this.array)),t}setX(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Eo(t,this.array)),t}setY(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Eo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Eo(t,this.array)),t}setW(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),r=kn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),r=kn(r,this.array),o=kn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),r=kn(r,this.array),o=kn(o,this.array),l=kn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==q0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Hy extends Ni{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Gy extends Ni{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class zn extends Ni{constructor(e,t,r){super(new Float32Array(e),t,r)}}const GR=new Fs,Da=new te,Nd=new te;class al{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):GR.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Da.subVectors(e,this.center);const t=Da.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Da,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Da.copy(e.center).add(Nd)),this.expandByPoint(Da.copy(e.center).sub(Nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let WR=0;const mi=new Ht,Ud=new Un,_o=new te,ii=new Fs,La=new Fs,vn=new te;class Fi extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WR++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lR(e)?Gy:Hy)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ct().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,t,r){return mi.makeTranslation(e,t,r),this.applyMatrix4(mi),this}scale(e,t,r){return mi.makeScale(e,t,r),this.applyMatrix4(mi),this}lookAt(e){return Ud.lookAt(e),Ud.updateMatrix(),this.applyMatrix4(Ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_o).negate(),this.translate(_o.x,_o.y,_o.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new zn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ii.setFromBufferAttribute(l),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new al);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];La.setFromBufferAttribute(f),this.morphTargetsRelative?(vn.addVectors(ii.min,La.min),ii.expandByPoint(vn),vn.addVectors(ii.max,La.max),ii.expandByPoint(vn)):(ii.expandByPoint(La.min),ii.expandByPoint(La.max))}ii.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)vn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(vn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],d=this.morphTargetsRelative;for(let h=0,g=f.count;h<g;h++)vn.fromBufferAttribute(f,h),d&&(_o.fromBufferAttribute(e,h),vn.add(_o)),o=Math.max(o,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Ni(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],d=[];for(let T=0;T<r.count;T++)f[T]=new te,d[T]=new te;const h=new te,g=new te,v=new te,m=new xt,y=new xt,M=new xt,A=new te,S=new te;function x(T,L,k){h.fromBufferAttribute(r,T),g.fromBufferAttribute(r,L),v.fromBufferAttribute(r,k),m.fromBufferAttribute(l,T),y.fromBufferAttribute(l,L),M.fromBufferAttribute(l,k),g.sub(h),v.sub(h),y.sub(m),M.sub(m);const V=1/(y.x*M.y-M.x*y.y);isFinite(V)&&(A.copy(g).multiplyScalar(M.y).addScaledVector(v,-y.y).multiplyScalar(V),S.copy(v).multiplyScalar(y.x).addScaledVector(g,-M.x).multiplyScalar(V),f[T].add(A),f[L].add(A),f[k].add(A),d[T].add(S),d[L].add(S),d[k].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let T=0,L=P.length;T<L;++T){const k=P[T],V=k.start,Y=k.count;for(let ue=V,ce=V+Y;ue<ce;ue+=3)x(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const I=new te,C=new te,D=new te,b=new te;function O(T){D.fromBufferAttribute(o,T),b.copy(D);const L=f[T];I.copy(L),I.sub(D.multiplyScalar(D.dot(L))).normalize(),C.crossVectors(b,L);const V=C.dot(d[T])<0?-1:1;u.setXYZW(T,I.x,I.y,I.z,V)}for(let T=0,L=P.length;T<L;++T){const k=P[T],V=k.start,Y=k.count;for(let ue=V,ce=V+Y;ue<ce;ue+=3)O(e.getX(ue+0)),O(e.getX(ue+1)),O(e.getX(ue+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Ni(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let m=0,y=r.count;m<y;m++)r.setXYZ(m,0,0,0);const o=new te,l=new te,u=new te,f=new te,d=new te,h=new te,g=new te,v=new te;if(e)for(let m=0,y=e.count;m<y;m+=3){const M=e.getX(m+0),A=e.getX(m+1),S=e.getX(m+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,A),u.fromBufferAttribute(t,S),g.subVectors(u,l),v.subVectors(o,l),g.cross(v),f.fromBufferAttribute(r,M),d.fromBufferAttribute(r,A),h.fromBufferAttribute(r,S),f.add(g),d.add(g),h.add(g),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let m=0,y=t.count;m<y;m+=3)o.fromBufferAttribute(t,m+0),l.fromBufferAttribute(t,m+1),u.fromBufferAttribute(t,m+2),g.subVectors(u,l),v.subVectors(o,l),g.cross(v),r.setXYZ(m+0,g.x,g.y,g.z),r.setXYZ(m+1,g.x,g.y,g.z),r.setXYZ(m+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(f,d){const h=f.array,g=f.itemSize,v=f.normalized,m=new h.constructor(d.length*g);let y=0,M=0;for(let A=0,S=d.length;A<S;A++){f.isInterleavedBufferAttribute?y=d[A]*f.data.stride+f.offset:y=d[A]*g;for(let x=0;x<g;x++)m[M++]=h[y++]}return new Ni(m,g,v)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fi,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],h=e(d,r);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let g=0,v=h.length;g<v;g++){const m=h[g],y=e(m,r);d.push(y)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const h=u[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],g=[];for(let v=0,m=h.length;v<m;v++){const y=h[v];g.push(y.toJSON(e.data))}g.length>0&&(o[d]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(t))}const l=e.morphAttributes;for(const h in l){const g=[],v=l[h];for(let m=0,y=v.length;m<y;m++)g.push(v[m].clone(t));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,g=u.length;h<g;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let XR=0;class Wo extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XR++}),this.uuid=Ho(),this.name="",this.type="Material",this.blending=bo,this.side=Qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uh,this.blendDst=ch,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=Uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Y0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ao,this.stencilZFail=ao,this.stencilZPass=ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){st(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){st(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==bo&&(r.blending=this.blending),this.side!==Qr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==uh&&(r.blendSrc=this.blendSrc),this.blendDst!==ch&&(r.blendDst=this.blendDst),this.blendEquation!==Rs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Uo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Y0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ao&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ao&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ao&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const d=l[f];delete d.metadata,u.push(d)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new _t().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new xt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const cr=new te,Fd=new te,Au=new te,Xr=new te,Od=new te,Ru=new te,Bd=new te;class YR{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cr.copy(this.origin).addScaledVector(this.direction,t),cr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Fd.copy(e).add(t).multiplyScalar(.5),Au.copy(t).sub(e).normalize(),Xr.copy(this.origin).sub(Fd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Au),f=Xr.dot(this.direction),d=-Xr.dot(Au),h=Xr.lengthSq(),g=Math.abs(1-u*u);let v,m,y,M;if(g>0)if(v=u*d-f,m=u*f-d,M=l*g,v>=0)if(m>=-M)if(m<=M){const A=1/g;v*=A,m*=A,y=v*(v+u*m+2*f)+m*(u*v+m+2*d)+h}else m=l,v=Math.max(0,-(u*m+f)),y=-v*v+m*(m+2*d)+h;else m=-l,v=Math.max(0,-(u*m+f)),y=-v*v+m*(m+2*d)+h;else m<=-M?(v=Math.max(0,-(-u*l+f)),m=v>0?-l:Math.min(Math.max(-l,-d),l),y=-v*v+m*(m+2*d)+h):m<=M?(v=0,m=Math.min(Math.max(-l,-d),l),y=m*(m+2*d)+h):(v=Math.max(0,-(u*l+f)),m=v>0?l:Math.min(Math.max(-l,-d),l),y=-v*v+m*(m+2*d)+h);else m=u>0?-l:l,v=Math.max(0,-(u*m+f)),y=-v*v+m*(m+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Fd).addScaledVector(Au,m),y}intersectSphere(e,t){cr.subVectors(e.center,this.origin);const r=cr.dot(this.direction),o=cr.dot(cr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,d=r+u;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,d;const h=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,m=this.origin;return h>=0?(r=(e.min.x-m.x)*h,o=(e.max.x-m.x)*h):(r=(e.max.x-m.x)*h,o=(e.min.x-m.x)*h),g>=0?(l=(e.min.y-m.y)*g,u=(e.max.y-m.y)*g):(l=(e.max.y-m.y)*g,u=(e.min.y-m.y)*g),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),v>=0?(f=(e.min.z-m.z)*v,d=(e.max.z-m.z)*v):(f=(e.max.z-m.z)*v,d=(e.min.z-m.z)*v),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,cr)!==null}intersectTriangle(e,t,r,o,l){Od.subVectors(t,e),Ru.subVectors(r,e),Bd.crossVectors(Od,Ru);let u=this.direction.dot(Bd),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Xr.subVectors(this.origin,e);const d=f*this.direction.dot(Ru.crossVectors(Xr,Ru));if(d<0)return null;const h=f*this.direction.dot(Od.cross(Xr));if(h<0||d+h>u)return null;const g=-f*Xr.dot(Bd);return g<0?null:this.at(g/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wy extends Wo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yr,this.combine=Lp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const u_=new Ht,Ms=new YR,Cu=new al,c_=new te,bu=new te,Pu=new te,Du=new te,kd=new te,Lu=new te,f_=new te,Iu=new te;class _i extends Un{constructor(e=new Fi,t=new Wy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Lu.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const g=f[d],v=l[d];g!==0&&(kd.fromBufferAttribute(v,e),u?Lu.addScaledVector(kd,g):Lu.addScaledVector(kd.sub(t),g))}t.add(Lu)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Cu.copy(r.boundingSphere),Cu.applyMatrix4(l),Ms.copy(e.ray).recast(e.near),!(Cu.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(Cu,c_)===null||Ms.origin.distanceToSquared(c_)>(e.far-e.near)**2))&&(u_.copy(l).invert(),Ms.copy(e.ray).applyMatrix4(u_),!(r.boundingBox!==null&&Ms.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Ms)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,m=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,A=m.length;M<A;M++){const S=m[M],x=u[S.materialIndex],P=Math.max(S.start,y.start),I=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let C=P,D=I;C<D;C+=3){const b=f.getX(C),O=f.getX(C+1),T=f.getX(C+2);o=Nu(this,x,e,r,h,g,v,b,O,T),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),A=Math.min(f.count,y.start+y.count);for(let S=M,x=A;S<x;S+=3){const P=f.getX(S),I=f.getX(S+1),C=f.getX(S+2);o=Nu(this,u,e,r,h,g,v,P,I,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,A=m.length;M<A;M++){const S=m[M],x=u[S.materialIndex],P=Math.max(S.start,y.start),I=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let C=P,D=I;C<D;C+=3){const b=C,O=C+1,T=C+2;o=Nu(this,x,e,r,h,g,v,b,O,T),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let S=M,x=A;S<x;S+=3){const P=S,I=S+1,C=S+2;o=Nu(this,u,e,r,h,g,v,P,I,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function qR(n,e,t,r,o,l,u,f){let d;if(e.side===Zn?d=r.intersectTriangle(u,l,o,!0,f):d=r.intersectTriangle(o,l,u,e.side===Qr,f),d===null)return null;Iu.copy(f),Iu.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Iu);return h<t.near||h>t.far?null:{distance:h,point:Iu.clone(),object:n}}function Nu(n,e,t,r,o,l,u,f,d,h){n.getVertexPosition(f,bu),n.getVertexPosition(d,Pu),n.getVertexPosition(h,Du);const g=qR(n,e,t,r,bu,Pu,Du,f_);if(g){const v=new te;Di.getBarycoord(f_,bu,Pu,Du,v),o&&(g.uv=Di.getInterpolatedAttribute(o,f,d,h,v,new xt)),l&&(g.uv1=Di.getInterpolatedAttribute(l,f,d,h,v,new xt)),u&&(g.normal=Di.getInterpolatedAttribute(u,f,d,h,v,new te),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const m={a:f,b:d,c:h,normal:new te,materialIndex:0};Di.getNormal(bu,Pu,Du,m.normal),g.face=m,g.barycoord=v}return g}class Xy extends Nn{constructor(e=null,t=1,r=1,o,l,u,f,d,h=En,g=En,v,m){super(null,u,f,d,h,g,o,l,v,m),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class d_ extends Ni{constructor(e,t,r,o=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xo=new Ht,h_=new Ht,Uu=[],p_=new Fs,KR=new Ht,Ia=new _i,Na=new al;class _L extends _i{constructor(e,t,r){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new d_(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<r;o++)this.setMatrixAt(o,KR)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,xo),p_.copy(e.boundingBox).applyMatrix4(xo),this.boundingBox.union(p_)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new al),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,xo),Na.copy(e.boundingSphere).applyMatrix4(xo),this.boundingSphere.union(Na)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const r=t.morphTargetInfluences,o=this.morphTexture.source.data.data,l=r.length+1,u=e*l+1;for(let f=0;f<r.length;f++)r[f]=o[u+f]}raycast(e,t){const r=this.matrixWorld,o=this.count;if(Ia.geometry=this.geometry,Ia.material=this.material,Ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Na.copy(this.boundingSphere),Na.applyMatrix4(r),e.ray.intersectsSphere(Na)!==!1))for(let l=0;l<o;l++){this.getMatrixAt(l,xo),h_.multiplyMatrices(r,xo),Ia.matrixWorld=h_,Ia.raycast(e,Uu);for(let u=0,f=Uu.length;u<f;u++){const d=Uu[u];d.instanceId=l,d.object=this,t.push(d)}Uu.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new d_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const r=t.morphTargetInfluences,o=r.length+1;this.morphTexture===null&&(this.morphTexture=new Xy(new Float32Array(o*this.count),o,this.count,Fp,Li));const l=this.morphTexture.source.data.data;let u=0;for(let h=0;h<r.length;h++)u+=r[h];const f=this.geometry.morphTargetsRelative?1:1-u,d=o*e;return l[d]=f,l.set(r,d+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Vd=new te,$R=new te,jR=new ct;class As{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Vd.subVectors(r,t).cross($R.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Vd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||jR.getNormalMatrix(e),o=this.coplanarPoint(Vd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new al,ZR=new xt(.5,.5),Fu=new te;class Wp{constructor(e=new As,t=new As,r=new As,o=new As,l=new As,u=new As){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Xi,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],d=l[2],h=l[3],g=l[4],v=l[5],m=l[6],y=l[7],M=l[8],A=l[9],S=l[10],x=l[11],P=l[12],I=l[13],C=l[14],D=l[15];if(o[0].setComponents(h-u,y-g,x-M,D-P).normalize(),o[1].setComponents(h+u,y+g,x+M,D+P).normalize(),o[2].setComponents(h+f,y+v,x+A,D+I).normalize(),o[3].setComponents(h-f,y-v,x-A,D-I).normalize(),r)o[4].setComponents(d,m,S,C).normalize(),o[5].setComponents(h-d,y-m,x-S,D-C).normalize();else if(o[4].setComponents(h-d,y-m,x-S,D-C).normalize(),t===Xi)o[5].setComponents(h+d,y+m,x+S,D+C).normalize();else if(t===nl)o[5].setComponents(d,m,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);const t=ZR.distanceTo(e.center);return Es.radius=.7071067811865476+t,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Fu.x=o.normal.x>0?e.max.x:e.min.x,Fu.y=o.normal.y>0?e.max.y:e.min.y,Fu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Fu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yy extends Nn{constructor(e=[],t=Is,r,o,l,u,f,d,h,g){super(e,t,r,o,l,u,f,d,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xL extends Nn{constructor(e,t,r,o,l,u,f,d,h){super(e,t,r,o,l,u,f,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bo extends Nn{constructor(e,t,r=ji,o,l,u,f=En,d=En,h,g=xr,v=1){if(g!==xr&&g!==Ds)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:v};super(m,o,l,u,f,d,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class QR extends Bo{constructor(e,t=ji,r=Is,o,l,u=En,f=En,d,h=xr){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,t,r,o,l,u,f,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class qy extends Nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ll extends Fi{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],g=[],v=[];let m=0,y=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,o,u,2),M("x","z","y",1,-1,e,r,-t,o,u,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new zn(h,3)),this.setAttribute("normal",new zn(g,3)),this.setAttribute("uv",new zn(v,2));function M(A,S,x,P,I,C,D,b,O,T,L){const k=C/O,V=D/T,Y=C/2,ue=D/2,ce=b/2,$=O+1,ae=T+1;let K=0,G=0;const oe=new te;for(let le=0;le<ae;le++){const F=le*V-ue;for(let j=0;j<$;j++){const Ie=j*k-Y;oe[A]=Ie*P,oe[S]=F*I,oe[x]=ce,h.push(oe.x,oe.y,oe.z),oe[A]=0,oe[S]=0,oe[x]=b>0?1:-1,g.push(oe.x,oe.y,oe.z),v.push(j/O),v.push(1-le/T),K+=1}}for(let le=0;le<T;le++)for(let F=0;F<O;F++){const j=m+F+$*le,Ie=m+F+$*(le+1),qe=m+(F+1)+$*(le+1),ke=m+(F+1)+$*le;d.push(j,Ie,ke),d.push(Ie,qe,ke),G+=6}f.addGroup(y,G,L),y+=G,m+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ky extends Fi{constructor(e=1,t=32,r=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:o},t=Math.max(3,t);const l=[],u=[],f=[],d=[],h=new te,g=new xt;u.push(0,0,0),f.push(0,0,1),d.push(.5,.5);for(let v=0,m=3;v<=t;v++,m+=3){const y=r+v/t*o;h.x=e*Math.cos(y),h.y=e*Math.sin(y),u.push(h.x,h.y,h.z),f.push(0,0,1),g.x=(u[m]/e+1)/2,g.y=(u[m+1]/e+1)/2,d.push(g.x,g.y)}for(let v=1;v<=t;v++)l.push(v,v+1,0);this.setIndex(l),this.setAttribute("position",new zn(u,3)),this.setAttribute("normal",new zn(f,3)),this.setAttribute("uv",new zn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ky(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class $y extends Fi{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,f=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:d};const h=this;o=Math.floor(o),l=Math.floor(l);const g=[],v=[],m=[],y=[];let M=0;const A=[],S=r/2;let x=0;P(),u===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(g),this.setAttribute("position",new zn(v,3)),this.setAttribute("normal",new zn(m,3)),this.setAttribute("uv",new zn(y,2));function P(){const C=new te,D=new te;let b=0;const O=(t-e)/r;for(let T=0;T<=l;T++){const L=[],k=T/l,V=k*(t-e)+e;for(let Y=0;Y<=o;Y++){const ue=Y/o,ce=ue*d+f,$=Math.sin(ce),ae=Math.cos(ce);D.x=V*$,D.y=-k*r+S,D.z=V*ae,v.push(D.x,D.y,D.z),C.set($,O,ae).normalize(),m.push(C.x,C.y,C.z),y.push(ue,1-k),L.push(M++)}A.push(L)}for(let T=0;T<o;T++)for(let L=0;L<l;L++){const k=A[L][T],V=A[L+1][T],Y=A[L+1][T+1],ue=A[L][T+1];(e>0||L!==0)&&(g.push(k,V,ue),b+=3),(t>0||L!==l-1)&&(g.push(V,Y,ue),b+=3)}h.addGroup(x,b,0),x+=b}function I(C){const D=M,b=new xt,O=new te;let T=0;const L=C===!0?e:t,k=C===!0?1:-1;for(let Y=1;Y<=o;Y++)v.push(0,S*k,0),m.push(0,k,0),y.push(.5,.5),M++;const V=M;for(let Y=0;Y<=o;Y++){const ce=Y/o*d+f,$=Math.cos(ce),ae=Math.sin(ce);O.x=L*ae,O.y=S*k,O.z=L*$,v.push(O.x,O.y,O.z),m.push(0,k,0),b.x=$*.5+.5,b.y=ae*.5*k+.5,y.push(b.x,b.y),M++}for(let Y=0;Y<o;Y++){const ue=D+Y,ce=V+Y;C===!0?g.push(ce,ce+1,ue):g.push(ce+1,ce,ue),T+=3}h.addGroup(x,T,C===!0?1:2),x+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $y(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ul extends Fi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),d=Math.floor(o),h=f+1,g=d+1,v=e/f,m=t/d,y=[],M=[],A=[],S=[];for(let x=0;x<g;x++){const P=x*m-u;for(let I=0;I<h;I++){const C=I*v-l;M.push(C,-P,0),A.push(0,0,1),S.push(I/f),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let P=0;P<f;P++){const I=P+h*x,C=P+h*(x+1),D=P+1+h*(x+1),b=P+1+h*x;y.push(I,C,b),y.push(C,D,b)}this.setIndex(y),this.setAttribute("position",new zn(M,3)),this.setAttribute("normal",new zn(A,3)),this.setAttribute("uv",new zn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.width,e.height,e.widthSegments,e.heightSegments)}}function ko(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];if(m_(o))o.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(m_(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Vn(n){const e={};for(let t=0;t<n.length;t++){const r=ko(n[t]);for(const o in r)e[o]=r[o]}return e}function m_(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function JR(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function jy(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const eC={clone:ko,merge:Vn};var tC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends Wo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tC,this.fragmentShader=nC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ko(e.uniforms),this.uniformsGroups=JR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new _t().setHex(o.value);break;case"v2":this.uniforms[r].value=new xt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new te().fromArray(o.value);break;case"v4":this.uniforms[r].value=new Jt().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ct().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Ht().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class iC extends Ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yL extends Wo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oc,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class SL extends Wo{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oc,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yr,this.combine=Lp,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rC extends Wo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sC extends Wo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Zy extends Un{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const zd=new Ht,g_=new te,v_=new te;class Qy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wp,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;g_.setFromMatrixPosition(e.matrixWorld),t.position.copy(g_),v_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(v_),t.updateMatrixWorld(),zd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zd,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===nl||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(zd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ou=new te,Bu=new Go,Hi=new te;class Jy extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ou,Bu,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ou,Bu,Hi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Ou,Bu,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ou,Bu,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yr=new te,__=new xt,x_=new xt;class ri extends Jy{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Oo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oo*2*Math.atan(Math.tan(qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z),Yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z)}getViewSize(e,t){return this.getViewBounds(e,__,x_),t.subVectors(x_,__)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qa*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/d,t-=u.offsetY*r/h,o*=u.width/d,r*=u.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class oC extends Qy{constructor(){super(new ri(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=Oo*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(r!==t.fov||o!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=o,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ML extends Zy{constructor(e,t,r=0,o=Math.PI/3,l=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.distance=r,this.angle=o,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new oC}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class aC extends Qy{constructor(){super(new ri(90,1,.5,500)),this.isPointLightShadow=!0}}class EL extends Zy{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new aC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Xp extends Jy{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,f-=g*this.view.offsetY,d=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const yo=-90,So=1;class lC extends Un{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ri(yo,So,e,t);o.layers=this.layers,this.add(o);const l=new ri(yo,So,e,t);l.layers=this.layers,this.add(l);const u=new ri(yo,So,e,t);u.layers=this.layers,this.add(u);const f=new ri(yo,So,e,t);f.layers=this.layers,this.add(f);const d=new ri(yo,So,e,t);d.layers=this.layers,this.add(d);const h=new ri(yo,So,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,d]=t;for(const h of t)this.remove(h);if(e===Xi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===nl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,d,h,g]=this.children,v=e.getRenderTarget(),m=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(v,m,y),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class uC extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class TL{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const jp=class jp{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};jp.prototype.isMatrix2=!0;let y_=jp;class wL extends es{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){st("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function S_(n,e,t,r){const o=cC(r);switch(t){case Fy:return n*e;case Fp:return n*e/o.components*o.byteLength;case Op:return n*e/o.components*o.byteLength;case Ns:return n*e*2/o.components*o.byteLength;case Bp:return n*e*2/o.components*o.byteLength;case Oy:return n*e*3/o.components*o.byteLength;case Ii:return n*e*4/o.components*o.byteLength;case kp:return n*e*4/o.components*o.byteLength;case Xu:case Yu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qu:case Ku:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sh:case Eh:return Math.max(n,16)*Math.max(e,8)/4;case yh:case Mh:return Math.max(n,8)*Math.max(e,8)/2;case Th:case wh:case Rh:case Ch:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ah:case rc:case bh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Uh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Oh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Bh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case kh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case zh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Hh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Gh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Wh:case Xh:case Yh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case qh:case Kh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case sc:case $h:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cC(n){switch(n){case si:case Ly:return{byteLength:1,components:1};case el:case Iy:case _r:return{byteLength:2,components:1};case Np:case Up:return{byteLength:2,components:4};case ji:case Ip:case Li:return{byteLength:4,components:1};case Ny:case Uy:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dp}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function eS(){let n=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){n=l}}}function fC(n){const e=new WeakMap;function t(f,d){const h=f.array,g=f.usage,v=h.byteLength,m=n.createBuffer();n.bindBuffer(d,m),n.bufferData(d,h,g),f.onUploadCallback();let y;if(h instanceof Float32Array)y=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=n.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?y=n.HALF_FLOAT:y=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=n.SHORT;else if(h instanceof Uint32Array)y=n.UNSIGNED_INT;else if(h instanceof Int32Array)y=n.INT;else if(h instanceof Int8Array)y=n.BYTE;else if(h instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,d,h){const g=d.array,v=d.updateRanges;if(n.bindBuffer(h,f),v.length===0)n.bufferSubData(h,0,g);else{v.sort((y,M)=>y.start-M.start);let m=0;for(let y=1;y<v.length;y++){const M=v[m],A=v[y];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++m,v[m]=A)}v.length=m+1;for(let y=0,M=v.length;y<M;y++){const A=v[y];n.bufferSubData(h,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(n.deleteBuffer(d.buffer),e.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,d),h.version=f.version}}return{get:o,remove:l,update:u}}var dC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_C=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,SC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,EC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,AC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,RC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,CC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,LC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,IC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,NC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,UC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,FC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,OC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,BC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HC="gl_FragColor = linearToOutputTexel( gl_FragColor );",GC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,XC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,YC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$C=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ib=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,rb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ob=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ab=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ub=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,db=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,mb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_b=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ab=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Db=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ib=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ub=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ob=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Hb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$b=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_P=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,SP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,MP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,RP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,DP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,IP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,NP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,OP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:dC,alphahash_pars_fragment:hC,alphamap_fragment:pC,alphamap_pars_fragment:mC,alphatest_fragment:gC,alphatest_pars_fragment:vC,aomap_fragment:_C,aomap_pars_fragment:xC,batching_pars_vertex:yC,batching_vertex:SC,begin_vertex:MC,beginnormal_vertex:EC,bsdfs:TC,iridescence_fragment:wC,bumpmap_pars_fragment:AC,clipping_planes_fragment:RC,clipping_planes_pars_fragment:CC,clipping_planes_pars_vertex:bC,clipping_planes_vertex:PC,color_fragment:DC,color_pars_fragment:LC,color_pars_vertex:IC,color_vertex:NC,common:UC,cube_uv_reflection_fragment:FC,defaultnormal_vertex:OC,displacementmap_pars_vertex:BC,displacementmap_vertex:kC,emissivemap_fragment:VC,emissivemap_pars_fragment:zC,colorspace_fragment:HC,colorspace_pars_fragment:GC,envmap_fragment:WC,envmap_common_pars_fragment:XC,envmap_pars_fragment:YC,envmap_pars_vertex:qC,envmap_physical_pars_fragment:rb,envmap_vertex:KC,fog_vertex:$C,fog_pars_vertex:jC,fog_fragment:ZC,fog_pars_fragment:QC,gradientmap_pars_fragment:JC,lightmap_pars_fragment:eb,lights_lambert_fragment:tb,lights_lambert_pars_fragment:nb,lights_pars_begin:ib,lights_toon_fragment:sb,lights_toon_pars_fragment:ob,lights_phong_fragment:ab,lights_phong_pars_fragment:lb,lights_physical_fragment:ub,lights_physical_pars_fragment:cb,lights_fragment_begin:fb,lights_fragment_maps:db,lights_fragment_end:hb,lightprobes_pars_fragment:pb,logdepthbuf_fragment:mb,logdepthbuf_pars_fragment:gb,logdepthbuf_pars_vertex:vb,logdepthbuf_vertex:_b,map_fragment:xb,map_pars_fragment:yb,map_particle_fragment:Sb,map_particle_pars_fragment:Mb,metalnessmap_fragment:Eb,metalnessmap_pars_fragment:Tb,morphinstance_vertex:wb,morphcolor_vertex:Ab,morphnormal_vertex:Rb,morphtarget_pars_vertex:Cb,morphtarget_vertex:bb,normal_fragment_begin:Pb,normal_fragment_maps:Db,normal_pars_fragment:Lb,normal_pars_vertex:Ib,normal_vertex:Nb,normalmap_pars_fragment:Ub,clearcoat_normal_fragment_begin:Fb,clearcoat_normal_fragment_maps:Ob,clearcoat_pars_fragment:Bb,iridescence_pars_fragment:kb,opaque_fragment:Vb,packing:zb,premultiplied_alpha_fragment:Hb,project_vertex:Gb,dithering_fragment:Wb,dithering_pars_fragment:Xb,roughnessmap_fragment:Yb,roughnessmap_pars_fragment:qb,shadowmap_pars_fragment:Kb,shadowmap_pars_vertex:$b,shadowmap_vertex:jb,shadowmask_pars_fragment:Zb,skinbase_vertex:Qb,skinning_pars_vertex:Jb,skinning_vertex:eP,skinnormal_vertex:tP,specularmap_fragment:nP,specularmap_pars_fragment:iP,tonemapping_fragment:rP,tonemapping_pars_fragment:sP,transmission_fragment:oP,transmission_pars_fragment:aP,uv_pars_fragment:lP,uv_pars_vertex:uP,uv_vertex:cP,worldpos_vertex:fP,background_vert:dP,background_frag:hP,backgroundCube_vert:pP,backgroundCube_frag:mP,cube_vert:gP,cube_frag:vP,depth_vert:_P,depth_frag:xP,distance_vert:yP,distance_frag:SP,equirect_vert:MP,equirect_frag:EP,linedashed_vert:TP,linedashed_frag:wP,meshbasic_vert:AP,meshbasic_frag:RP,meshlambert_vert:CP,meshlambert_frag:bP,meshmatcap_vert:PP,meshmatcap_frag:DP,meshnormal_vert:LP,meshnormal_frag:IP,meshphong_vert:NP,meshphong_frag:UP,meshphysical_vert:FP,meshphysical_frag:OP,meshtoon_vert:BP,meshtoon_frag:kP,points_vert:VP,points_frag:zP,shadow_vert:HP,shadow_frag:GP,sprite_vert:WP,sprite_frag:XP},Le={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new te},probesMax:{value:new te},probesResolution:{value:new te}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Wi={basic:{uniforms:Vn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Vn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new _t(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Vn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Vn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Vn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new _t(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Vn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Vn([Le.points,Le.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Vn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Vn([Le.common,Le.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Vn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Vn([Le.sprite,Le.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Vn([Le.common,Le.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Vn([Le.lights,Le.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Wi.physical={uniforms:Vn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const ku={r:0,b:0,g:0},YP=new Ht,tS=new ct;tS.set(-1,0,0,0,1,0,0,0,1);function qP(n,e,t,r,o,l){const u=new _t(0);let f=o===!0?0:1,d,h,g=null,v=0,m=null;function y(P){let I=P.isScene===!0?P.background:null;if(I&&I.isTexture){const C=P.backgroundBlurriness>0;I=e.get(I,C)}return I}function M(P){let I=!1;const C=y(P);C===null?S(u,f):C&&C.isColor&&(S(C,1),I=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,l):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(n.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function A(P,I){const C=y(I);C&&(C.isCubeTexture||C.mapping===vc)?(h===void 0&&(h=new _i(new ll(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:ko(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,b,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=C,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(YP.makeRotationFromEuler(I.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(tS),h.material.toneMapped=St.getTransfer(C.colorSpace)!==Nt,(g!==C||v!==C.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,g=C,v=C.version,m=n.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(d===void 0&&(d=new _i(new ul(2,2),new Ui({name:"BackgroundMaterial",uniforms:ko(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:Qr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=C,d.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,d.material.toneMapped=St.getTransfer(C.colorSpace)!==Nt,C.matrixAutoUpdate===!0&&C.updateMatrix(),d.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||v!==C.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,g=C,v=C.version,m=n.toneMapping),d.layers.enableAll(),P.unshift(d,d.geometry,d.material,0,0,null))}function S(P,I){P.getRGB(ku,jy(n)),t.buffers.color.setClear(ku.r,ku.g,ku.b,I,l)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(P,I=1){u.set(P),f=I,S(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(P){f=P,S(u,f)},render:M,addToRenderList:A,dispose:x}}function KP(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=m(null);let l=o,u=!1;function f(V,Y,ue,ce,$){let ae=!1;const K=v(V,ce,ue,Y);l!==K&&(l=K,h(l.object)),ae=y(V,ce,ue,$),ae&&M(V,ce,ue,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(ae||u)&&(u=!1,C(V,Y,ue,ce),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function d(){return n.createVertexArray()}function h(V){return n.bindVertexArray(V)}function g(V){return n.deleteVertexArray(V)}function v(V,Y,ue,ce){const $=ce.wireframe===!0;let ae=r[Y.id];ae===void 0&&(ae={},r[Y.id]=ae);const K=V.isInstancedMesh===!0?V.id:0;let G=ae[K];G===void 0&&(G={},ae[K]=G);let oe=G[ue.id];oe===void 0&&(oe={},G[ue.id]=oe);let le=oe[$];return le===void 0&&(le=m(d()),oe[$]=le),le}function m(V){const Y=[],ue=[],ce=[];for(let $=0;$<t;$++)Y[$]=0,ue[$]=0,ce[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:ue,attributeDivisors:ce,object:V,attributes:{},index:null}}function y(V,Y,ue,ce){const $=l.attributes,ae=Y.attributes;let K=0;const G=ue.getAttributes();for(const oe in G)if(G[oe].location>=0){const F=$[oe];let j=ae[oe];if(j===void 0&&(oe==="instanceMatrix"&&V.instanceMatrix&&(j=V.instanceMatrix),oe==="instanceColor"&&V.instanceColor&&(j=V.instanceColor)),F===void 0||F.attribute!==j||j&&F.data!==j.data)return!0;K++}return l.attributesNum!==K||l.index!==ce}function M(V,Y,ue,ce){const $={},ae=Y.attributes;let K=0;const G=ue.getAttributes();for(const oe in G)if(G[oe].location>=0){let F=ae[oe];F===void 0&&(oe==="instanceMatrix"&&V.instanceMatrix&&(F=V.instanceMatrix),oe==="instanceColor"&&V.instanceColor&&(F=V.instanceColor));const j={};j.attribute=F,F&&F.data&&(j.data=F.data),$[oe]=j,K++}l.attributes=$,l.attributesNum=K,l.index=ce}function A(){const V=l.newAttributes;for(let Y=0,ue=V.length;Y<ue;Y++)V[Y]=0}function S(V){x(V,0)}function x(V,Y){const ue=l.newAttributes,ce=l.enabledAttributes,$=l.attributeDivisors;ue[V]=1,ce[V]===0&&(n.enableVertexAttribArray(V),ce[V]=1),$[V]!==Y&&(n.vertexAttribDivisor(V,Y),$[V]=Y)}function P(){const V=l.newAttributes,Y=l.enabledAttributes;for(let ue=0,ce=Y.length;ue<ce;ue++)Y[ue]!==V[ue]&&(n.disableVertexAttribArray(ue),Y[ue]=0)}function I(V,Y,ue,ce,$,ae,K){K===!0?n.vertexAttribIPointer(V,Y,ue,$,ae):n.vertexAttribPointer(V,Y,ue,ce,$,ae)}function C(V,Y,ue,ce){A();const $=ce.attributes,ae=ue.getAttributes(),K=Y.defaultAttributeValues;for(const G in ae){const oe=ae[G];if(oe.location>=0){let le=$[G];if(le===void 0&&(G==="instanceMatrix"&&V.instanceMatrix&&(le=V.instanceMatrix),G==="instanceColor"&&V.instanceColor&&(le=V.instanceColor)),le!==void 0){const F=le.normalized,j=le.itemSize,Ie=e.get(le);if(Ie===void 0)continue;const qe=Ie.buffer,ke=Ie.type,ie=Ie.bytesPerElement,ve=ke===n.INT||ke===n.UNSIGNED_INT||le.gpuType===Ip;if(le.isInterleavedBufferAttribute){const pe=le.data,Ne=pe.stride,Qe=le.offset;if(pe.isInstancedInterleavedBuffer){for(let Je=0;Je<oe.locationSize;Je++)x(oe.location+Je,pe.meshPerAttribute);V.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Je=0;Je<oe.locationSize;Je++)S(oe.location+Je);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let Je=0;Je<oe.locationSize;Je++)I(oe.location+Je,j/oe.locationSize,ke,F,Ne*ie,(Qe+j/oe.locationSize*Je)*ie,ve)}else{if(le.isInstancedBufferAttribute){for(let pe=0;pe<oe.locationSize;pe++)x(oe.location+pe,le.meshPerAttribute);V.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let pe=0;pe<oe.locationSize;pe++)S(oe.location+pe);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let pe=0;pe<oe.locationSize;pe++)I(oe.location+pe,j/oe.locationSize,ke,F,j*ie,j/oe.locationSize*pe*ie,ve)}}else if(K!==void 0){const F=K[G];if(F!==void 0)switch(F.length){case 2:n.vertexAttrib2fv(oe.location,F);break;case 3:n.vertexAttrib3fv(oe.location,F);break;case 4:n.vertexAttrib4fv(oe.location,F);break;default:n.vertexAttrib1fv(oe.location,F)}}}}P()}function D(){L();for(const V in r){const Y=r[V];for(const ue in Y){const ce=Y[ue];for(const $ in ce){const ae=ce[$];for(const K in ae)g(ae[K].object),delete ae[K];delete ce[$]}}delete r[V]}}function b(V){if(r[V.id]===void 0)return;const Y=r[V.id];for(const ue in Y){const ce=Y[ue];for(const $ in ce){const ae=ce[$];for(const K in ae)g(ae[K].object),delete ae[K];delete ce[$]}}delete r[V.id]}function O(V){for(const Y in r){const ue=r[Y];for(const ce in ue){const $=ue[ce];if($[V.id]===void 0)continue;const ae=$[V.id];for(const K in ae)g(ae[K].object),delete ae[K];delete $[V.id]}}}function T(V){for(const Y in r){const ue=r[Y],ce=V.isInstancedMesh===!0?V.id:0,$=ue[ce];if($!==void 0){for(const ae in $){const K=$[ae];for(const G in K)g(K[G].object),delete K[G];delete $[ae]}delete ue[ce],Object.keys(ue).length===0&&delete r[Y]}}}function L(){k(),u=!0,l!==o&&(l=o,h(l.object))}function k(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:L,resetDefaultState:k,dispose:D,releaseStatesOfGeometry:b,releaseStatesOfObject:T,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:S,disableUnusedAttributes:P}}function $P(n,e,t){let r;function o(d){r=d}function l(d,h){n.drawArrays(r,d,h),t.update(h,r,1)}function u(d,h,g){g!==0&&(n.drawArraysInstanced(r,d,h,g),t.update(h,r,g))}function f(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,h,0,g);let m=0;for(let y=0;y<g;y++)m+=h[y];t.update(m,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function jP(n,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==Ii&&r.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const T=O===_r&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==si&&r.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Li&&!T)}function d(O){if(O==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const g=d(h);g!==h&&(st("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const v=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),P=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),I=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:m,maxTextures:y,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:P,maxVaryings:I,maxFragmentUniforms:C,maxSamples:D,samples:b}}function ZP(n){const e=this;let t=null,r=0,o=!1,l=!1;const u=new As,f=new ct,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,m){const y=v.length!==0||m||r!==0||o;return o=m,r=v.length,y},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,m){t=g(v,m,0)},this.setState=function(v,m,y){const M=v.clippingPlanes,A=v.clipIntersection,S=v.clipShadows,x=n.get(v);if(!o||M===null||M.length===0||l&&!S)l?g(null):h();else{const P=l?0:r,I=P*4;let C=x.clippingState||null;d.value=C,C=g(M,m,I,y);for(let D=0;D!==I;++D)C[D]=t[D];x.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=P}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,m,y,M){const A=v!==null?v.length:0;let S=null;if(A!==0){if(S=d.value,M!==!0||S===null){const x=y+A*4,P=m.matrixWorldInverse;f.getNormalMatrix(P),(S===null||S.length<x)&&(S=new Float32Array(x));for(let I=0,C=y;I!==A;++I,C+=4)u.copy(v[I]).applyMatrix4(P,f),u.normal.toArray(S,C),S[C+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}const $r=4,M_=[.125,.215,.35,.446,.526,.582],Cs=20,QP=256,Ua=new Xp,E_=new _t;let Hd=null,Gd=0,Wd=0,Xd=!1;const JP=new te;class T_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=JP}=l;Hd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=R_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=A_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hd,Gd,Wd),this._renderer.xr.enabled=Xd,e.scissorTest=!1,Mo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Is||e.mapping===Fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:In,minFilter:In,generateMipmaps:!1,type:_r,format:Ii,colorSpace:ac,depthBuffer:!1},o=w_(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=w_(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=e3(l)),this._blurMaterial=n3(l,e,t),this._ggxMaterial=t3(l,e,t)}return o}_compileMaterial(e){const t=new _i(new Fi,e);this._renderer.compile(t,Ua)}_sceneToCubeUV(e,t,r,o,l){const d=new ri(90,1,t,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,m=v.autoClear,y=v.toneMapping;v.getClearColor(E_),v.toneMapping=Ki,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _i(new ll,new Wy({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let x=!1;const P=e.background;P?P.isColor&&(S.color.copy(P),e.background=null,x=!0):(S.color.copy(E_),x=!0);for(let I=0;I<6;I++){const C=I%3;C===0?(d.up.set(0,h[I],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+g[I],l.y,l.z)):C===1?(d.up.set(0,0,h[I]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+g[I],l.z)):(d.up.set(0,h[I],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+g[I]));const D=this._cubeSize;Mo(o,C*D,I>2?D:0,D,D),v.setRenderTarget(o),x&&v.render(A,d),v.render(e,d)}v.toneMapping=y,v.autoClear=m,e.background=P}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Is||e.mapping===Fo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=R_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=A_());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;Mo(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,Ua)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const d=u.uniforms,h=r/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-g*g),m=0+h*1.25,y=v*m,{_lodMax:M}=this,A=this._sizeLods[r],S=3*A*(r>M-$r?r-M+$r:0),x=4*(this._cubeSize-A);d.envMap.value=e.texture,d.roughness.value=y,d.mipInt.value=M-t,Mo(l,S,x,3*A,2*A),o.setRenderTarget(l),o.render(f,Ua),d.envMap.value=l.texture,d.roughness.value=0,d.mipInt.value=M-r,Mo(e,S,x,3*A,2*A),o.setRenderTarget(e),o.render(f,Ua)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,f){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&wt("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[o];v.material=h;const m=h.uniforms,y=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*Cs-1),A=l/M,S=isFinite(l)?1+Math.floor(g*A):Cs;S>Cs&&st(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Cs}`);const x=[];let P=0;for(let O=0;O<Cs;++O){const T=O/A,L=Math.exp(-T*T/2);x.push(L),O===0?P+=L:O<S&&(P+=2*L)}for(let O=0;O<x.length;O++)x[O]=x[O]/P;m.envMap.value=e.texture,m.samples.value=S,m.weights.value=x,m.latitudinal.value=u==="latitudinal",f&&(m.poleAxis.value=f);const{_lodMax:I}=this;m.dTheta.value=M,m.mipInt.value=I-r;const C=this._sizeLods[o],D=3*C*(o>I-$r?o-I+$r:0),b=4*(this._cubeSize-C);Mo(t,D,b,3*C,2*C),d.setRenderTarget(t),d.render(v,Ua)}}function e3(n){const e=[],t=[],r=[];let o=n;const l=n-$r+1+M_.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let d=1/f;u>n-$r?d=M_[u-n+$r-1]:u===0&&(d=0),t.push(d);const h=1/(f-2),g=-h,v=1+h,m=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,M=6,A=3,S=2,x=1,P=new Float32Array(A*M*y),I=new Float32Array(S*M*y),C=new Float32Array(x*M*y);for(let b=0;b<y;b++){const O=b%3*2/3-1,T=b>2?0:-1,L=[O,T,0,O+2/3,T,0,O+2/3,T+1,0,O,T,0,O+2/3,T+1,0,O,T+1,0];P.set(L,A*M*b),I.set(m,S*M*b);const k=[b,b,b,b,b,b];C.set(k,x*M*b)}const D=new Fi;D.setAttribute("position",new Ni(P,A)),D.setAttribute("uv",new Ni(I,S)),D.setAttribute("faceIndex",new Ni(C,x)),r.push(new _i(D,null)),o>$r&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function w_(n,e,t){const r=new $i(n,e,t);return r.texture.mapping=vc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Mo(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function t3(n,e,t){return new Ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:QP,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_c(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function n3(n,e,t){const r=new Float32Array(Cs),o=new te(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function A_(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function R_(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function _c(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class nS extends $i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Yy(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new ll(5,5,5),l=new Ui({name:"CubemapFromEquirect",uniforms:ko(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Zn,blending:mr});l.uniforms.tEquirect.value=t;const u=new _i(o,l),f=t.minFilter;return t.minFilter===Ps&&(t.minFilter=In),new lC(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function i3(n){let e=new WeakMap,t=new WeakMap,r=null;function o(m,y=!1){return m==null?null:y?u(m):l(m)}function l(m){if(m&&m.isTexture){const y=m.mapping;if(y===gd||y===vd)if(e.has(m)){const M=e.get(m).texture;return f(M,m.mapping)}else{const M=m.image;if(M&&M.height>0){const A=new nS(M.height);return A.fromEquirectangularTexture(n,m),e.set(m,A),m.addEventListener("dispose",h),f(A.texture,m.mapping)}else return null}}return m}function u(m){if(m&&m.isTexture){const y=m.mapping,M=y===gd||y===vd,A=y===Is||y===Fo;if(M||A){let S=t.get(m);const x=S!==void 0?S.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==x)return r===null&&(r=new T_(n)),S=M?r.fromEquirectangular(m,S):r.fromCubemap(m,S),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),S.texture;if(S!==void 0)return S.texture;{const P=m.image;return M&&P&&P.height>0||A&&P&&d(P)?(r===null&&(r=new T_(n)),S=M?r.fromEquirectangular(m):r.fromCubemap(m),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),m.addEventListener("dispose",g),S.texture):null}}}return m}function f(m,y){return y===gd?m.mapping=Is:y===vd&&(m.mapping=Fo),m}function d(m){let y=0;const M=6;for(let A=0;A<M;A++)m[A]!==void 0&&y++;return y===M}function h(m){const y=m.target;y.removeEventListener("dispose",h);const M=e.get(y);M!==void 0&&(e.delete(y),M.dispose())}function g(m){const y=m.target;y.removeEventListener("dispose",g);const M=t.get(y);M!==void 0&&(t.delete(y),M.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function r3(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=n.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Po("WebGLRenderer: "+r+" extension not supported."),o}}}function s3(n,e,t,r){const o={},l=new WeakMap;function u(v){const m=v.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",u),delete o[m.id];const y=l.get(m);y&&(e.remove(y),l.delete(m)),r.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function f(v,m){return o[m.id]===!0||(m.addEventListener("dispose",u),o[m.id]=!0,t.memory.geometries++),m}function d(v){const m=v.attributes;for(const y in m)e.update(m[y],n.ARRAY_BUFFER)}function h(v){const m=[],y=v.index,M=v.attributes.position;let A=0;if(M===void 0)return;if(y!==null){const P=y.array;A=y.version;for(let I=0,C=P.length;I<C;I+=3){const D=P[I+0],b=P[I+1],O=P[I+2];m.push(D,b,b,O,O,D)}}else{const P=M.array;A=M.version;for(let I=0,C=P.length/3-1;I<C;I+=3){const D=I+0,b=I+1,O=I+2;m.push(D,b,b,O,O,D)}}const S=new(M.count>=65535?Gy:Hy)(m,1);S.version=A;const x=l.get(v);x&&e.remove(x),l.set(v,S)}function g(v){const m=l.get(v);if(m){const y=v.index;y!==null&&m.version<y.version&&h(v)}else h(v);return l.get(v)}return{get:f,update:d,getWireframeAttribute:g}}function o3(n,e,t){let r;function o(v){r=v}let l,u;function f(v){l=v.type,u=v.bytesPerElement}function d(v,m){n.drawElements(r,m,l,v*u),t.update(m,r,1)}function h(v,m,y){y!==0&&(n.drawElementsInstanced(r,m,l,v*u,y),t.update(m,r,y))}function g(v,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,m,0,l,v,0,y);let A=0;for(let S=0;S<y;S++)A+=m[S];t.update(A,r,1)}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=g}function a3(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=f*(l/3);break;case n.LINES:t.lines+=f*(l/2);break;case n.LINE_STRIP:t.lines+=f*(l-1);break;case n.LINE_LOOP:t.lines+=f*l;break;case n.POINTS:t.points+=f*l;break;default:wt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function l3(n,e,t){const r=new WeakMap,o=new Jt;function l(u,f,d){const h=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let m=r.get(f);if(m===void 0||m.count!==v){let L=function(){O.dispose(),r.delete(f),f.removeEventListener("dispose",L)};m!==void 0&&m.texture.dispose();const y=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,A=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],x=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let I=0;y===!0&&(I=1),M===!0&&(I=2),A===!0&&(I=3);let C=f.attributes.position.count*I,D=1;C>e.maxTextureSize&&(D=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const b=new Float32Array(C*D*4*v),O=new ky(b,C,D,v);O.type=Li,O.needsUpdate=!0;const T=I*4;for(let k=0;k<v;k++){const V=S[k],Y=x[k],ue=P[k],ce=C*D*4*k;for(let $=0;$<V.count;$++){const ae=$*T;y===!0&&(o.fromBufferAttribute(V,$),b[ce+ae+0]=o.x,b[ce+ae+1]=o.y,b[ce+ae+2]=o.z,b[ce+ae+3]=0),M===!0&&(o.fromBufferAttribute(Y,$),b[ce+ae+4]=o.x,b[ce+ae+5]=o.y,b[ce+ae+6]=o.z,b[ce+ae+7]=0),A===!0&&(o.fromBufferAttribute(ue,$),b[ce+ae+8]=o.x,b[ce+ae+9]=o.y,b[ce+ae+10]=o.z,b[ce+ae+11]=ue.itemSize===4?o.w:1)}}m={count:v,texture:O,size:new xt(C,D)},r.set(f,m),f.addEventListener("dispose",L)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let y=0;for(let A=0;A<h.length;A++)y+=h[A];const M=f.morphTargetsRelative?1:1-y;d.getUniforms().setValue(n,"morphTargetBaseInfluence",M),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:l}}function u3(n,e,t,r,o){let l=new WeakMap;function u(h){const g=o.render.frame,v=h.geometry,m=e.get(h,v);if(l.get(m)!==g&&(e.update(m),l.set(m,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),l.get(h)!==g&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),l.set(h,g))),h.isSkinnedMesh){const y=h.skeleton;l.get(y)!==g&&(y.update(),l.set(y,g))}return m}function f(){l=new WeakMap}function d(h){const g=h.target;g.removeEventListener("dispose",d),r.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:u,dispose:f}}const c3={[Ty]:"LINEAR_TONE_MAPPING",[wy]:"REINHARD_TONE_MAPPING",[Ay]:"CINEON_TONE_MAPPING",[Ry]:"ACES_FILMIC_TONE_MAPPING",[by]:"AGX_TONE_MAPPING",[Py]:"NEUTRAL_TONE_MAPPING",[Cy]:"CUSTOM_TONE_MAPPING"};function f3(n,e,t,r,o,l){const u=new $i(e,t,{type:n,depthBuffer:o,stencilBuffer:l,samples:r?4:0,depthTexture:o?new Bo(e,t):void 0}),f=new $i(e,t,{type:_r,depthBuffer:!1,stencilBuffer:!1}),d=new Fi;d.setAttribute("position",new zn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new zn([0,2,0,0,2,0],2));const h=new iC({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new _i(d,h),v=new Xp(-1,1,1,-1,0,1);let m=null,y=null,M=!1,A,S=null,x=[],P=!1;this.setSize=function(I,C){u.setSize(I,C),f.setSize(I,C);for(let D=0;D<x.length;D++){const b=x[D];b.setSize&&b.setSize(I,C)}},this.setEffects=function(I){x=I,P=x.length>0&&x[0].isRenderPass===!0;const C=u.width,D=u.height;for(let b=0;b<x.length;b++){const O=x[b];O.setSize&&O.setSize(C,D)}},this.begin=function(I,C){if(M||I.toneMapping===Ki&&x.length===0)return!1;if(S=C,C!==null){const D=C.width,b=C.height;(u.width!==D||u.height!==b)&&this.setSize(D,b)}return P===!1&&I.setRenderTarget(u),A=I.toneMapping,I.toneMapping=Ki,!0},this.hasRenderPass=function(){return P},this.end=function(I,C){I.toneMapping=A,M=!0;let D=u,b=f;for(let O=0;O<x.length;O++){const T=x[O];if(T.enabled!==!1&&(T.render(I,b,D,C),T.needsSwap!==!1)){const L=D;D=b,b=L}}if(m!==I.outputColorSpace||y!==I.toneMapping){m=I.outputColorSpace,y=I.toneMapping,h.defines={},St.getTransfer(m)===Nt&&(h.defines.SRGB_TRANSFER="");const O=c3[y];O&&(h.defines[O]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=D.texture,I.setRenderTarget(S),I.render(g,v),S=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),f.dispose(),d.dispose(),h.dispose()}}const iS=new Nn,jh=new Bo(1,1),rS=new ky,sS=new IR,oS=new Yy,C_=[],b_=[],P_=new Float32Array(16),D_=new Float32Array(9),L_=new Float32Array(4);function Xo(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let l=C_[o];if(l===void 0&&(l=new Float32Array(o),C_[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,n[u].toArray(l,f)}return l}function dn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function hn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function xc(n,e){let t=b_[e];t===void 0&&(t=new Int32Array(e),b_[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function d3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function h3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2fv(this.addr,e),hn(t,e)}}function p3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;n.uniform3fv(this.addr,e),hn(t,e)}}function m3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4fv(this.addr,e),hn(t,e)}}function g3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,r))return;L_.set(r),n.uniformMatrix2fv(this.addr,!1,L_),hn(t,r)}}function v3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,r))return;D_.set(r),n.uniformMatrix3fv(this.addr,!1,D_),hn(t,r)}}function _3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,r))return;P_.set(r),n.uniformMatrix4fv(this.addr,!1,P_),hn(t,r)}}function x3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function y3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2iv(this.addr,e),hn(t,e)}}function S3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3iv(this.addr,e),hn(t,e)}}function M3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4iv(this.addr,e),hn(t,e)}}function E3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function T3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2uiv(this.addr,e),hn(t,e)}}function w3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3uiv(this.addr,e),hn(t,e)}}function A3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4uiv(this.addr,e),hn(t,e)}}function R3(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let l;this.type===n.SAMPLER_2D_SHADOW?(jh.compareFunction=t.isReversedDepthBuffer()?zp:Vp,l=jh):l=iS,t.setTexture2D(e||l,o)}function C3(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||sS,o)}function b3(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||oS,o)}function P3(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||rS,o)}function D3(n){switch(n){case 5126:return d3;case 35664:return h3;case 35665:return p3;case 35666:return m3;case 35674:return g3;case 35675:return v3;case 35676:return _3;case 5124:case 35670:return x3;case 35667:case 35671:return y3;case 35668:case 35672:return S3;case 35669:case 35673:return M3;case 5125:return E3;case 36294:return T3;case 36295:return w3;case 36296:return A3;case 35678:case 36198:case 36298:case 36306:case 35682:return R3;case 35679:case 36299:case 36307:return C3;case 35680:case 36300:case 36308:case 36293:return b3;case 36289:case 36303:case 36311:case 36292:return P3}}function L3(n,e){n.uniform1fv(this.addr,e)}function I3(n,e){const t=Xo(e,this.size,2);n.uniform2fv(this.addr,t)}function N3(n,e){const t=Xo(e,this.size,3);n.uniform3fv(this.addr,t)}function U3(n,e){const t=Xo(e,this.size,4);n.uniform4fv(this.addr,t)}function F3(n,e){const t=Xo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function O3(n,e){const t=Xo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function B3(n,e){const t=Xo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function k3(n,e){n.uniform1iv(this.addr,e)}function V3(n,e){n.uniform2iv(this.addr,e)}function z3(n,e){n.uniform3iv(this.addr,e)}function H3(n,e){n.uniform4iv(this.addr,e)}function G3(n,e){n.uniform1uiv(this.addr,e)}function W3(n,e){n.uniform2uiv(this.addr,e)}function X3(n,e){n.uniform3uiv(this.addr,e)}function Y3(n,e){n.uniform4uiv(this.addr,e)}function q3(n,e,t){const r=this.cache,o=e.length,l=xc(t,o);dn(r,l)||(n.uniform1iv(this.addr,l),hn(r,l));let u;this.type===n.SAMPLER_2D_SHADOW?u=jh:u=iS;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function K3(n,e,t){const r=this.cache,o=e.length,l=xc(t,o);dn(r,l)||(n.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||sS,l[u])}function $3(n,e,t){const r=this.cache,o=e.length,l=xc(t,o);dn(r,l)||(n.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||oS,l[u])}function j3(n,e,t){const r=this.cache,o=e.length,l=xc(t,o);dn(r,l)||(n.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||rS,l[u])}function Z3(n){switch(n){case 5126:return L3;case 35664:return I3;case 35665:return N3;case 35666:return U3;case 35674:return F3;case 35675:return O3;case 35676:return B3;case 5124:case 35670:return k3;case 35667:case 35671:return V3;case 35668:case 35672:return z3;case 35669:case 35673:return H3;case 5125:return G3;case 36294:return W3;case 36295:return X3;case 36296:return Y3;case 35678:case 36198:case 36298:case 36306:case 35682:return q3;case 35679:case 36299:case 36307:return K3;case 35680:case 36300:case 36308:case 36293:return $3;case 36289:case 36303:case 36311:case 36292:return j3}}class Q3{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=D3(t.type)}}class J3{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Z3(t.type)}}class eD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Yd=/(\w+)(\])?(\[|\.)?/g;function I_(n,e){n.seq.push(e),n.map[e.id]=e}function tD(n,e,t){const r=n.name,o=r.length;for(Yd.lastIndex=0;;){const l=Yd.exec(r),u=Yd.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&u+2===o){I_(t,h===void 0?new Q3(f,n,e):new J3(f,n,e));break}else{let v=t.map[f];v===void 0&&(v=new eD(f),I_(t,v)),t=v}}}class $u{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),d=e.getUniformLocation(t,f.name);tD(f,d,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function N_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const nD=37297;let iD=0;function rD(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const U_=new ct;function sD(n){St._getMatrix(U_,St.workingColorSpace,n);const e=`mat3( ${U_.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(n)){case lc:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function F_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),l=(n.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+rD(n.getShaderSource(e),f)}else return l}function oD(n,e){const t=sD(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const aD={[Ty]:"Linear",[wy]:"Reinhard",[Ay]:"Cineon",[Ry]:"ACESFilmic",[by]:"AgX",[Py]:"Neutral",[Cy]:"Custom"};function lD(n,e){const t=aD[e];return t===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vu=new te;function uD(){St.getLuminanceCoefficients(Vu);const n=Vu.x.toFixed(4),e=Vu.y.toFixed(4),t=Vu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ha).join(`
`)}function fD(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function dD(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=n.getActiveAttrib(e,o),u=l.name;let f=1;l.type===n.FLOAT_MAT2&&(f=2),l.type===n.FLOAT_MAT3&&(f=3),l.type===n.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:n.getAttribLocation(e,u),locationSize:f}}return t}function Ha(n){return n!==""}function O_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function B_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zh(n){return n.replace(hD,mD)}const pD=new Map;function mD(n,e){let t=ht[e];if(t===void 0){const r=pD.get(e);if(r!==void 0)t=ht[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Zh(t)}const gD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function k_(n){return n.replace(gD,vD)}function vD(n,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function V_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const _D={[Wu]:"SHADOWMAP_TYPE_PCF",[za]:"SHADOWMAP_TYPE_VSM"};function xD(n){return _D[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const yD={[Is]:"ENVMAP_TYPE_CUBE",[Fo]:"ENVMAP_TYPE_CUBE",[vc]:"ENVMAP_TYPE_CUBE_UV"};function SD(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":yD[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const MD={[Fo]:"ENVMAP_MODE_REFRACTION"};function ED(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":MD[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const TD={[Lp]:"ENVMAP_BLENDING_MULTIPLY",[ZA]:"ENVMAP_BLENDING_MIX",[QA]:"ENVMAP_BLENDING_ADD"};function wD(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":TD[n.combine]||"ENVMAP_BLENDING_NONE"}function AD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function RD(n,e,t,r){const o=n.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const d=xD(t),h=SD(t),g=ED(t),v=wD(t),m=AD(t),y=cD(t),M=fD(l),A=o.createProgram();let S,x,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ha).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ha).join(`
`),x.length>0&&(x+=`
`)):(S=[V_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ha).join(`
`),x=[V_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?ht.tonemapping_pars_fragment:"",t.toneMapping!==Ki?lD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,oD("linearToOutputTexel",t.outputColorSpace),uD(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ha).join(`
`)),u=Zh(u),u=O_(u,t),u=B_(u,t),f=Zh(f),f=O_(f,t),f=B_(f,t),u=k_(u),f=k_(f),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===K0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===K0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const I=P+S+u,C=P+x+f,D=N_(o,o.VERTEX_SHADER,I),b=N_(o,o.FRAGMENT_SHADER,C);o.attachShader(A,D),o.attachShader(A,b),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function O(V){if(n.debug.checkShaderErrors){const Y=o.getProgramInfoLog(A)||"",ue=o.getShaderInfoLog(D)||"",ce=o.getShaderInfoLog(b)||"",$=Y.trim(),ae=ue.trim(),K=ce.trim();let G=!0,oe=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,A,D,b);else{const le=F_(o,D,"vertex"),F=F_(o,b,"fragment");wt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+$+`
`+le+`
`+F)}else $!==""?st("WebGLProgram: Program Info Log:",$):(ae===""||K==="")&&(oe=!1);oe&&(V.diagnostics={runnable:G,programLog:$,vertexShader:{log:ae,prefix:S},fragmentShader:{log:K,prefix:x}})}o.deleteShader(D),o.deleteShader(b),T=new $u(o,A),L=dD(o,A)}let T;this.getUniforms=function(){return T===void 0&&O(this),T};let L;this.getAttributes=function(){return L===void 0&&O(this),L};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=o.getProgramParameter(A,nD)),k},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iD++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=D,this.fragmentShader=b,this}let CD=0;class bD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new PD(e),t.set(e,r)),r}}class PD{constructor(e){this.id=CD++,this.code=e,this.usedTimes=0}}function DD(n){return n===Ns||n===rc||n===sc}function LD(n,e,t,r,o,l){const u=new Vy,f=new bD,d=new Set,h=[],g=new Map,v=r.logarithmicDepthBuffer;let m=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return d.add(T),T===0?"uv":`uv${T}`}function A(T,L,k,V,Y,ue){const ce=V.fog,$=Y.geometry,ae=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,K=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,G=e.get(T.envMap||ae,K),oe=G&&G.mapping===vc?G.image.height:null,le=y[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&st("WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const F=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,j=F!==void 0?F.length:0;let Ie=0;$.morphAttributes.position!==void 0&&(Ie=1),$.morphAttributes.normal!==void 0&&(Ie=2),$.morphAttributes.color!==void 0&&(Ie=3);let qe,ke,ie,ve;if(le){const Ve=Wi[le];qe=Ve.vertexShader,ke=Ve.fragmentShader}else{qe=T.vertexShader,ke=T.fragmentShader;const Ve=f.getVertexShaderStage(T),Ut=f.getFragmentShaderStage(T);f.update(T,Ve,Ut),ie=Ve.id,ve=Ut.id}const pe=n.getRenderTarget(),Ne=n.state.buffers.depth.getReversed(),Qe=Y.isInstancedMesh===!0,Je=Y.isBatchedMesh===!0,Gt=!!T.map,ft=!!T.matcap,Ct=!!G,Mt=!!T.aoMap,yt=!!T.lightMap,Wt=!!T.bumpMap&&T.wireframe===!1,en=!!T.normalMap,tn=!!T.displacementMap,Kt=!!T.emissiveMap,Dt=!!T.metalnessMap,Xt=!!T.roughnessMap,W=T.anisotropy>0,_n=T.clearcoat>0,At=T.dispersion>0,N=T.iridescence>0,E=T.sheen>0,q=T.transmission>0,ne=W&&!!T.anisotropyMap,fe=_n&&!!T.clearcoatMap,Se=_n&&!!T.clearcoatNormalMap,Re=_n&&!!T.clearcoatRoughnessMap,de=N&&!!T.iridescenceMap,me=N&&!!T.iridescenceThicknessMap,be=E&&!!T.sheenColorMap,Xe=E&&!!T.sheenRoughnessMap,Pe=!!T.specularMap,Ae=!!T.specularColorMap,Ze=!!T.specularIntensityMap,et=q&&!!T.transmissionMap,rt=q&&!!T.thicknessMap,z=!!T.gradientMap,we=!!T.alphaMap,he=T.alphaTest>0,Ce=!!T.alphaHash,De=!!T.extensions;let ge=Ki;T.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ge=n.toneMapping);const He={shaderID:le,shaderType:T.type,shaderName:T.name,vertexShader:qe,fragmentShader:ke,defines:T.defines,customVertexShaderID:ie,customFragmentShaderID:ve,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Je,batchingColor:Je&&Y._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&Y.instanceColor!==null,instancingMorph:Qe&&Y.morphTexture!==null,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:St.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Gt,matcap:ft,envMap:Ct,envMapMode:Ct&&G.mapping,envMapCubeUVHeight:oe,aoMap:Mt,lightMap:yt,bumpMap:Wt,normalMap:en,displacementMap:tn,emissiveMap:Kt,normalMapObjectSpace:en&&T.normalMapType===tR,normalMapTangentSpace:en&&T.normalMapType===oc,packedNormalMap:en&&T.normalMapType===oc&&DD(T.normalMap.format),metalnessMap:Dt,roughnessMap:Xt,anisotropy:W,anisotropyMap:ne,clearcoat:_n,clearcoatMap:fe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Re,dispersion:At,iridescence:N,iridescenceMap:de,iridescenceThicknessMap:me,sheen:E,sheenColorMap:be,sheenRoughnessMap:Xe,specularMap:Pe,specularColorMap:Ae,specularIntensityMap:Ze,transmission:q,transmissionMap:et,thicknessMap:rt,gradientMap:z,opaque:T.transparent===!1&&T.blending===bo&&T.alphaToCoverage===!1,alphaMap:we,alphaTest:he,alphaHash:Ce,combine:T.combine,mapUv:Gt&&M(T.map.channel),aoMapUv:Mt&&M(T.aoMap.channel),lightMapUv:yt&&M(T.lightMap.channel),bumpMapUv:Wt&&M(T.bumpMap.channel),normalMapUv:en&&M(T.normalMap.channel),displacementMapUv:tn&&M(T.displacementMap.channel),emissiveMapUv:Kt&&M(T.emissiveMap.channel),metalnessMapUv:Dt&&M(T.metalnessMap.channel),roughnessMapUv:Xt&&M(T.roughnessMap.channel),anisotropyMapUv:ne&&M(T.anisotropyMap.channel),clearcoatMapUv:fe&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Se&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:me&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:be&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&M(T.sheenRoughnessMap.channel),specularMapUv:Pe&&M(T.specularMap.channel),specularColorMapUv:Ae&&M(T.specularColorMap.channel),specularIntensityMapUv:Ze&&M(T.specularIntensityMap.channel),transmissionMapUv:et&&M(T.transmissionMap.channel),thicknessMapUv:rt&&M(T.thicknessMap.channel),alphaMapUv:we&&M(T.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(en||W),vertexNormals:!!$.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!$.attributes.uv&&(Gt||we),fog:!!ce,useFog:T.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||$.attributes.normal===void 0&&en===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ne,skinning:Y.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Ie,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:ge,decodeVideoTexture:Gt&&T.map.isVideoTexture===!0&&St.getTransfer(T.map.colorSpace)===Nt,decodeVideoTextureEmissive:Kt&&T.emissiveMap.isVideoTexture===!0&&St.getTransfer(T.emissiveMap.colorSpace)===Nt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===fr,flipSided:T.side===Zn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:De&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&T.extensions.multiDraw===!0||Je)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return He.vertexUv1s=d.has(1),He.vertexUv2s=d.has(2),He.vertexUv3s=d.has(3),d.clear(),He}function S(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)L.push(k),L.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(x(L,T),P(L,T),L.push(n.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function x(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function P(T,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),L.packedNormalMap&&u.enable(22),L.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),L.numLightProbeGrids>0&&u.enable(22),L.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function I(T){const L=y[T.type];let k;if(L){const V=Wi[L];k=eC.clone(V.uniforms)}else k=T.uniforms;return k}function C(T,L){let k=g.get(L);return k!==void 0?++k.usedTimes:(k=new RD(n,L,T,o),h.push(k),g.set(L,k)),k}function D(T){if(--T.usedTimes===0){const L=h.indexOf(T);h[L]=h[h.length-1],h.pop(),g.delete(T.cacheKey),T.destroy()}}function b(T){f.remove(T)}function O(){f.dispose()}return{getParameters:A,getProgramCacheKey:S,getUniforms:I,acquireProgram:C,releaseProgram:D,releaseShaderCache:b,programs:h,dispose:O}}function ID(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let f=n.get(u);return f===void 0&&(f={},n.set(u,f)),f}function r(u){n.delete(u)}function o(u,f,d){n.get(u)[f]=d}function l(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function ND(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function z_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function H_(){const n=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(m){let y=0;return m.isInstancedMesh&&(y+=2),m.isSkinnedMesh&&(y+=1),y}function f(m,y,M,A,S,x){let P=n[e];return P===void 0?(P={id:m.id,object:m,geometry:y,material:M,materialVariant:u(m),groupOrder:A,renderOrder:m.renderOrder,z:S,group:x},n[e]=P):(P.id=m.id,P.object=m,P.geometry=y,P.material=M,P.materialVariant=u(m),P.groupOrder=A,P.renderOrder=m.renderOrder,P.z=S,P.group=x),e++,P}function d(m,y,M,A,S,x){const P=f(m,y,M,A,S,x);M.transmission>0?r.push(P):M.transparent===!0?o.push(P):t.push(P)}function h(m,y,M,A,S,x){const P=f(m,y,M,A,S,x);M.transmission>0?r.unshift(P):M.transparent===!0?o.unshift(P):t.unshift(P)}function g(m,y,M){t.length>1&&t.sort(m||ND),r.length>1&&r.sort(y||z_),o.length>1&&o.sort(y||z_),M&&(t.reverse(),r.reverse(),o.reverse())}function v(){for(let m=e,y=n.length;m<y;m++){const M=n[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:h,finish:v,sort:g}}function UD(){let n=new WeakMap;function e(r,o){const l=n.get(r);let u;return l===void 0?(u=new H_,n.set(r,[u])):o>=l.length?(u=new H_,l.push(u)):u=l[o],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function FD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new te,color:new _t};break;case"SpotLight":t={position:new te,direction:new te,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new te,halfWidth:new te,halfHeight:new te};break}return n[e.id]=t,t}}}function OD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let BD=0;function kD(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function VD(n){const e=new FD,t=OD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new te);const o=new te,l=new Ht,u=new Ht;function f(h){let g=0,v=0,m=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let y=0,M=0,A=0,S=0,x=0,P=0,I=0,C=0,D=0,b=0,O=0;h.sort(kD);for(let L=0,k=h.length;L<k;L++){const V=h[L],Y=V.color,ue=V.intensity,ce=V.distance;let $=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Ns?$=V.shadow.map.texture:$=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=Y.r*ue,v+=Y.g*ue,m+=Y.b*ue;else if(V.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(V.sh.coefficients[ae],ue);O++}else if(V.isDirectionalLight){const ae=e.get(V);if(ae.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const K=V.shadow,G=t.get(V);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,r.directionalShadow[y]=G,r.directionalShadowMap[y]=$,r.directionalShadowMatrix[y]=V.shadow.matrix,P++}r.directional[y]=ae,y++}else if(V.isSpotLight){const ae=e.get(V);ae.position.setFromMatrixPosition(V.matrixWorld),ae.color.copy(Y).multiplyScalar(ue),ae.distance=ce,ae.coneCos=Math.cos(V.angle),ae.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),ae.decay=V.decay,r.spot[A]=ae;const K=V.shadow;if(V.map&&(r.spotLightMap[D]=V.map,D++,K.updateMatrices(V),V.castShadow&&b++),r.spotLightMatrix[A]=K.matrix,V.castShadow){const G=t.get(V);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,r.spotShadow[A]=G,r.spotShadowMap[A]=$,C++}A++}else if(V.isRectAreaLight){const ae=e.get(V);ae.color.copy(Y).multiplyScalar(ue),ae.halfWidth.set(V.width*.5,0,0),ae.halfHeight.set(0,V.height*.5,0),r.rectArea[S]=ae,S++}else if(V.isPointLight){const ae=e.get(V);if(ae.color.copy(V.color).multiplyScalar(V.intensity),ae.distance=V.distance,ae.decay=V.decay,V.castShadow){const K=V.shadow,G=t.get(V);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,r.pointShadow[M]=G,r.pointShadowMap[M]=$,r.pointShadowMatrix[M]=V.shadow.matrix,I++}r.point[M]=ae,M++}else if(V.isHemisphereLight){const ae=e.get(V);ae.skyColor.copy(V.color).multiplyScalar(ue),ae.groundColor.copy(V.groundColor).multiplyScalar(ue),r.hemi[x]=ae,x++}}S>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=m;const T=r.hash;(T.directionalLength!==y||T.pointLength!==M||T.spotLength!==A||T.rectAreaLength!==S||T.hemiLength!==x||T.numDirectionalShadows!==P||T.numPointShadows!==I||T.numSpotShadows!==C||T.numSpotMaps!==D||T.numLightProbes!==O)&&(r.directional.length=y,r.spot.length=A,r.rectArea.length=S,r.point.length=M,r.hemi.length=x,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=C+D-b,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=O,T.directionalLength=y,T.pointLength=M,T.spotLength=A,T.rectAreaLength=S,T.hemiLength=x,T.numDirectionalShadows=P,T.numPointShadows=I,T.numSpotShadows=C,T.numSpotMaps=D,T.numLightProbes=O,r.version=BD++)}function d(h,g){let v=0,m=0,y=0,M=0,A=0;const S=g.matrixWorldInverse;for(let x=0,P=h.length;x<P;x++){const I=h[x];if(I.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(S),v++}else if(I.isSpotLight){const C=r.spot[y];C.position.setFromMatrixPosition(I.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(S),y++}else if(I.isRectAreaLight){const C=r.rectArea[M];C.position.setFromMatrixPosition(I.matrixWorld),C.position.applyMatrix4(S),u.identity(),l.copy(I.matrixWorld),l.premultiply(S),u.extractRotation(l),C.halfWidth.set(I.width*.5,0,0),C.halfHeight.set(0,I.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),M++}else if(I.isPointLight){const C=r.point[m];C.position.setFromMatrixPosition(I.matrixWorld),C.position.applyMatrix4(S),m++}else if(I.isHemisphereLight){const C=r.hemi[A];C.direction.setFromMatrixPosition(I.matrixWorld),C.direction.transformDirection(S),A++}}}return{setup:f,setupView:d,state:r}}function G_(n){const e=new VD(n),t=[],r=[],o=[];function l(m){v.camera=m,t.length=0,r.length=0,o.length=0}function u(m){t.push(m)}function f(m){r.push(m)}function d(m){o.push(m)}function h(){e.setup(t)}function g(m){e.setupView(t,m)}const v={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:v,setupLights:h,setupLightsView:g,pushLight:u,pushShadow:f,pushLightProbeGrid:d}}function zD(n){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new G_(n),e.set(o,[f])):l>=u.length?(f=new G_(n),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const HD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,WD=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],XD=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],W_=new Ht,Fa=new te,qd=new te;function YD(n,e,t){let r=new Wp;const o=new xt,l=new xt,u=new Jt,f=new rC,d=new sC,h={},g=t.maxTextureSize,v={[Qr]:Zn,[Zn]:Qr,[fr]:fr},m=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:HD,fragmentShader:GD}),y=m.clone();y.defines.HORIZONTAL_PASS=1;const M=new Fi;M.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new _i(M,m),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wu;let x=this.type;this.render=function(b,O,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||b.length===0)return;this.type===LA&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Wu);const L=n.getRenderTarget(),k=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(mr),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const ue=x!==this.type;ue&&O.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach($=>$.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,$=b.length;ce<$;ce++){const ae=b[ce],K=ae.shadow;if(K===void 0){st("WebGLShadowMap:",ae,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;o.copy(K.mapSize);const G=K.getFrameExtents();o.multiply(G),l.copy(K.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/G.x),o.x=l.x*G.x,K.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/G.y),o.y=l.y*G.y,K.mapSize.y=l.y));const oe=n.state.buffers.depth.getReversed();if(K.camera._reversedDepth=oe,K.map===null||ue===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===za){if(ae.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new $i(o.x,o.y,{format:Ns,type:_r,minFilter:In,magFilter:In,generateMipmaps:!1}),K.map.texture.name=ae.name+".shadowMap",K.map.depthTexture=new Bo(o.x,o.y,Li),K.map.depthTexture.name=ae.name+".shadowMapDepth",K.map.depthTexture.format=xr,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=En,K.map.depthTexture.magFilter=En}else ae.isPointLight?(K.map=new nS(o.x),K.map.depthTexture=new QR(o.x,ji)):(K.map=new $i(o.x,o.y),K.map.depthTexture=new Bo(o.x,o.y,ji)),K.map.depthTexture.name=ae.name+".shadowMap",K.map.depthTexture.format=xr,this.type===Wu?(K.map.depthTexture.compareFunction=oe?zp:Vp,K.map.depthTexture.minFilter=In,K.map.depthTexture.magFilter=In):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=En,K.map.depthTexture.magFilter=En);K.camera.updateProjectionMatrix()}const le=K.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<le;F++){if(K.map.isWebGLCubeRenderTarget)n.setRenderTarget(K.map,F),n.clear();else{F===0&&(n.setRenderTarget(K.map),n.clear());const j=K.getViewport(F);u.set(l.x*j.x,l.y*j.y,l.x*j.z,l.y*j.w),Y.viewport(u)}if(ae.isPointLight){const j=K.camera,Ie=K.matrix,qe=ae.distance||j.far;qe!==j.far&&(j.far=qe,j.updateProjectionMatrix()),Fa.setFromMatrixPosition(ae.matrixWorld),j.position.copy(Fa),qd.copy(j.position),qd.add(WD[F]),j.up.copy(XD[F]),j.lookAt(qd),j.updateMatrixWorld(),Ie.makeTranslation(-Fa.x,-Fa.y,-Fa.z),W_.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),K._frustum.setFromProjectionMatrix(W_,j.coordinateSystem,j.reversedDepth)}else K.updateMatrices(ae);r=K.getFrustum(),C(O,T,K.camera,ae,this.type)}K.isPointLightShadow!==!0&&this.type===za&&P(K,T),K.needsUpdate=!1}x=this.type,S.needsUpdate=!1,n.setRenderTarget(L,k,V)};function P(b,O){const T=e.update(A);m.defines.VSM_SAMPLES!==b.blurSamples&&(m.defines.VSM_SAMPLES=b.blurSamples,y.defines.VSM_SAMPLES=b.blurSamples,m.needsUpdate=!0,y.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new $i(o.x,o.y,{format:Ns,type:_r})),m.uniforms.shadow_pass.value=b.map.depthTexture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(O,null,T,m,A,null),y.uniforms.shadow_pass.value=b.mapPass.texture,y.uniforms.resolution.value=b.mapSize,y.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(O,null,T,y,A,null)}function I(b,O,T,L){let k=null;const V=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(V!==void 0)k=V;else if(k=T.isPointLight===!0?d:f,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Y=k.uuid,ue=O.uuid;let ce=h[Y];ce===void 0&&(ce={},h[Y]=ce);let $=ce[ue];$===void 0&&($=k.clone(),ce[ue]=$,O.addEventListener("dispose",D)),k=$}if(k.visible=O.visible,k.wireframe=O.wireframe,L===za?k.side=O.shadowSide!==null?O.shadowSide:O.side:k.side=O.shadowSide!==null?O.shadowSide:v[O.side],k.alphaMap=O.alphaMap,k.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,k.map=O.map,k.clipShadows=O.clipShadows,k.clippingPlanes=O.clippingPlanes,k.clipIntersection=O.clipIntersection,k.displacementMap=O.displacementMap,k.displacementScale=O.displacementScale,k.displacementBias=O.displacementBias,k.wireframeLinewidth=O.wireframeLinewidth,k.linewidth=O.linewidth,T.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const Y=n.properties.get(k);Y.light=T}return k}function C(b,O,T,L,k){if(b.visible===!1)return;if(b.layers.test(O.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&k===za)&&(!b.frustumCulled||r.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);const ue=e.update(b),ce=b.material;if(Array.isArray(ce)){const $=ue.groups;for(let ae=0,K=$.length;ae<K;ae++){const G=$[ae],oe=ce[G.materialIndex];if(oe&&oe.visible){const le=I(b,oe,L,k);b.onBeforeShadow(n,b,O,T,ue,le,G),n.renderBufferDirect(T,null,ue,le,b,G),b.onAfterShadow(n,b,O,T,ue,le,G)}}}else if(ce.visible){const $=I(b,ce,L,k);b.onBeforeShadow(n,b,O,T,ue,$,null),n.renderBufferDirect(T,null,ue,$,b,null),b.onAfterShadow(n,b,O,T,ue,$,null)}}const Y=b.children;for(let ue=0,ce=Y.length;ue<ce;ue++)C(Y[ue],O,T,L,k)}function D(b){b.target.removeEventListener("dispose",D);for(const T in h){const L=h[T],k=b.target.uuid;k in L&&(L[k].dispose(),delete L[k])}}}function qD(n,e){function t(){let z=!1;const we=new Jt;let he=null;const Ce=new Jt(0,0,0,0);return{setMask:function(De){he!==De&&!z&&(n.colorMask(De,De,De,De),he=De)},setLocked:function(De){z=De},setClear:function(De,ge,He,Ve,Ut){Ut===!0&&(De*=Ve,ge*=Ve,He*=Ve),we.set(De,ge,He,Ve),Ce.equals(we)===!1&&(n.clearColor(De,ge,He,Ve),Ce.copy(we))},reset:function(){z=!1,he=null,Ce.set(-1,0,0,0)}}}function r(){let z=!1,we=!1,he=null,Ce=null,De=null;return{setReversed:function(ge){if(we!==ge){const He=e.get("EXT_clip_control");ge?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),we=ge;const Ve=De;De=null,this.setClear(Ve)}},getReversed:function(){return we},setTest:function(ge){ge?pe(n.DEPTH_TEST):Ne(n.DEPTH_TEST)},setMask:function(ge){he!==ge&&!z&&(n.depthMask(ge),he=ge)},setFunc:function(ge){if(we&&(ge=fR[ge]),Ce!==ge){switch(ge){case fh:n.depthFunc(n.NEVER);break;case dh:n.depthFunc(n.ALWAYS);break;case hh:n.depthFunc(n.LESS);break;case Uo:n.depthFunc(n.LEQUAL);break;case ph:n.depthFunc(n.EQUAL);break;case mh:n.depthFunc(n.GEQUAL);break;case gh:n.depthFunc(n.GREATER);break;case vh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ce=ge}},setLocked:function(ge){z=ge},setClear:function(ge){De!==ge&&(De=ge,we&&(ge=1-ge),n.clearDepth(ge))},reset:function(){z=!1,he=null,Ce=null,De=null,we=!1}}}function o(){let z=!1,we=null,he=null,Ce=null,De=null,ge=null,He=null,Ve=null,Ut=null;return{setTest:function(bt){z||(bt?pe(n.STENCIL_TEST):Ne(n.STENCIL_TEST))},setMask:function(bt){we!==bt&&!z&&(n.stencilMask(bt),we=bt)},setFunc:function(bt,Tn,ai){(he!==bt||Ce!==Tn||De!==ai)&&(n.stencilFunc(bt,Tn,ai),he=bt,Ce=Tn,De=ai)},setOp:function(bt,Tn,ai){(ge!==bt||He!==Tn||Ve!==ai)&&(n.stencilOp(bt,Tn,ai),ge=bt,He=Tn,Ve=ai)},setLocked:function(bt){z=bt},setClear:function(bt){Ut!==bt&&(n.clearStencil(bt),Ut=bt)},reset:function(){z=!1,we=null,he=null,Ce=null,De=null,ge=null,He=null,Ve=null,Ut=null}}}const l=new t,u=new r,f=new o,d=new WeakMap,h=new WeakMap;let g={},v={},m={},y=new WeakMap,M=[],A=null,S=!1,x=null,P=null,I=null,C=null,D=null,b=null,O=null,T=new _t(0,0,0),L=0,k=!1,V=null,Y=null,ue=null,ce=null,$=null;const ae=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,G=0;const oe=n.getParameter(n.VERSION);oe.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(oe)[1]),K=G>=1):oe.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),K=G>=2);let le=null,F={};const j=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),qe=new Jt().fromArray(j),ke=new Jt().fromArray(Ie);function ie(z,we,he,Ce){const De=new Uint8Array(4),ge=n.createTexture();n.bindTexture(z,ge),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<he;He++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(we,0,n.RGBA,1,1,Ce,0,n.RGBA,n.UNSIGNED_BYTE,De):n.texImage2D(we+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,De);return ge}const ve={};ve[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),pe(n.DEPTH_TEST),u.setFunc(Uo),Wt(!1),en(H0),pe(n.CULL_FACE),Mt(mr);function pe(z){g[z]!==!0&&(n.enable(z),g[z]=!0)}function Ne(z){g[z]!==!1&&(n.disable(z),g[z]=!1)}function Qe(z,we){return m[z]!==we?(n.bindFramebuffer(z,we),m[z]=we,z===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=we),z===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=we),!0):!1}function Je(z,we){let he=M,Ce=!1;if(z){he=y.get(we),he===void 0&&(he=[],y.set(we,he));const De=z.textures;if(he.length!==De.length||he[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,He=De.length;ge<He;ge++)he[ge]=n.COLOR_ATTACHMENT0+ge;he.length=De.length,Ce=!0}}else he[0]!==n.BACK&&(he[0]=n.BACK,Ce=!0);Ce&&n.drawBuffers(he)}function Gt(z){return A!==z?(n.useProgram(z),A=z,!0):!1}const ft={[Rs]:n.FUNC_ADD,[NA]:n.FUNC_SUBTRACT,[UA]:n.FUNC_REVERSE_SUBTRACT};ft[FA]=n.MIN,ft[OA]=n.MAX;const Ct={[BA]:n.ZERO,[kA]:n.ONE,[VA]:n.SRC_COLOR,[uh]:n.SRC_ALPHA,[YA]:n.SRC_ALPHA_SATURATE,[WA]:n.DST_COLOR,[HA]:n.DST_ALPHA,[zA]:n.ONE_MINUS_SRC_COLOR,[ch]:n.ONE_MINUS_SRC_ALPHA,[XA]:n.ONE_MINUS_DST_COLOR,[GA]:n.ONE_MINUS_DST_ALPHA,[qA]:n.CONSTANT_COLOR,[KA]:n.ONE_MINUS_CONSTANT_COLOR,[$A]:n.CONSTANT_ALPHA,[jA]:n.ONE_MINUS_CONSTANT_ALPHA};function Mt(z,we,he,Ce,De,ge,He,Ve,Ut,bt){if(z===mr){S===!0&&(Ne(n.BLEND),S=!1);return}if(S===!1&&(pe(n.BLEND),S=!0),z!==IA){if(z!==x||bt!==k){if((P!==Rs||D!==Rs)&&(n.blendEquation(n.FUNC_ADD),P=Rs,D=Rs),bt)switch(z){case bo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case G0:n.blendFunc(n.ONE,n.ONE);break;case W0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case X0:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:wt("WebGLState: Invalid blending: ",z);break}else switch(z){case bo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case G0:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case W0:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case X0:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",z);break}I=null,C=null,b=null,O=null,T.set(0,0,0),L=0,x=z,k=bt}return}De=De||we,ge=ge||he,He=He||Ce,(we!==P||De!==D)&&(n.blendEquationSeparate(ft[we],ft[De]),P=we,D=De),(he!==I||Ce!==C||ge!==b||He!==O)&&(n.blendFuncSeparate(Ct[he],Ct[Ce],Ct[ge],Ct[He]),I=he,C=Ce,b=ge,O=He),(Ve.equals(T)===!1||Ut!==L)&&(n.blendColor(Ve.r,Ve.g,Ve.b,Ut),T.copy(Ve),L=Ut),x=z,k=!1}function yt(z,we){z.side===fr?Ne(n.CULL_FACE):pe(n.CULL_FACE);let he=z.side===Zn;we&&(he=!he),Wt(he),z.blending===bo&&z.transparent===!1?Mt(mr):Mt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),u.setFunc(z.depthFunc),u.setTest(z.depthTest),u.setMask(z.depthWrite),l.setMask(z.colorWrite);const Ce=z.stencilWrite;f.setTest(Ce),Ce&&(f.setMask(z.stencilWriteMask),f.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),f.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Kt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):Ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(z){V!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),V=z)}function en(z){z!==PA?(pe(n.CULL_FACE),z!==Y&&(z===H0?n.cullFace(n.BACK):z===DA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ne(n.CULL_FACE),Y=z}function tn(z){z!==ue&&(K&&n.lineWidth(z),ue=z)}function Kt(z,we,he){z?(pe(n.POLYGON_OFFSET_FILL),(ce!==we||$!==he)&&(ce=we,$=he,u.getReversed()&&(we=-we),n.polygonOffset(we,he))):Ne(n.POLYGON_OFFSET_FILL)}function Dt(z){z?pe(n.SCISSOR_TEST):Ne(n.SCISSOR_TEST)}function Xt(z){z===void 0&&(z=n.TEXTURE0+ae-1),le!==z&&(n.activeTexture(z),le=z)}function W(z,we,he){he===void 0&&(le===null?he=n.TEXTURE0+ae-1:he=le);let Ce=F[he];Ce===void 0&&(Ce={type:void 0,texture:void 0},F[he]=Ce),(Ce.type!==z||Ce.texture!==we)&&(le!==he&&(n.activeTexture(he),le=he),n.bindTexture(z,we||ve[z]),Ce.type=z,Ce.texture=we)}function _n(){const z=F[le];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function At(){try{n.compressedTexImage2D(...arguments)}catch(z){wt("WebGLState:",z)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(z){wt("WebGLState:",z)}}function E(){try{n.texSubImage2D(...arguments)}catch(z){wt("WebGLState:",z)}}function q(){try{n.texSubImage3D(...arguments)}catch(z){wt("WebGLState:",z)}}function ne(){try{n.compressedTexSubImage2D(...arguments)}catch(z){wt("WebGLState:",z)}}function fe(){try{n.compressedTexSubImage3D(...arguments)}catch(z){wt("WebGLState:",z)}}function Se(){try{n.texStorage2D(...arguments)}catch(z){wt("WebGLState:",z)}}function Re(){try{n.texStorage3D(...arguments)}catch(z){wt("WebGLState:",z)}}function de(){try{n.texImage2D(...arguments)}catch(z){wt("WebGLState:",z)}}function me(){try{n.texImage3D(...arguments)}catch(z){wt("WebGLState:",z)}}function be(z){return v[z]!==void 0?v[z]:n.getParameter(z)}function Xe(z,we){v[z]!==we&&(n.pixelStorei(z,we),v[z]=we)}function Pe(z){qe.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),qe.copy(z))}function Ae(z){ke.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),ke.copy(z))}function Ze(z,we){let he=h.get(we);he===void 0&&(he=new WeakMap,h.set(we,he));let Ce=he.get(z);Ce===void 0&&(Ce=n.getUniformBlockIndex(we,z.name),he.set(z,Ce))}function et(z,we){const Ce=h.get(we).get(z);d.get(we)!==Ce&&(n.uniformBlockBinding(we,Ce,z.__bindingPointIndex),d.set(we,Ce))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),u.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),g={},v={},le=null,F={},m={},y=new WeakMap,M=[],A=null,S=!1,x=null,P=null,I=null,C=null,D=null,b=null,O=null,T=new _t(0,0,0),L=0,k=!1,V=null,Y=null,ue=null,ce=null,$=null,qe.set(0,0,n.canvas.width,n.canvas.height),ke.set(0,0,n.canvas.width,n.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:pe,disable:Ne,bindFramebuffer:Qe,drawBuffers:Je,useProgram:Gt,setBlending:Mt,setMaterial:yt,setFlipSided:Wt,setCullFace:en,setLineWidth:tn,setPolygonOffset:Kt,setScissorTest:Dt,activeTexture:Xt,bindTexture:W,unbindTexture:_n,compressedTexImage2D:At,compressedTexImage3D:N,texImage2D:de,texImage3D:me,pixelStorei:Xe,getParameter:be,updateUBOMapping:Ze,uniformBlockBinding:et,texStorage2D:Se,texStorage3D:Re,texSubImage2D:E,texSubImage3D:q,compressedTexSubImage2D:ne,compressedTexSubImage3D:fe,scissor:Pe,viewport:Ae,reset:rt}}function KD(n,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new xt,g=new WeakMap,v=new Set;let m;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(N,E){return M?new OffscreenCanvas(N,E):uc("canvas")}function S(N,E,q){let ne=1;const fe=At(N);if((fe.width>q||fe.height>q)&&(ne=q/Math.max(fe.width,fe.height)),ne<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Se=Math.floor(ne*fe.width),Re=Math.floor(ne*fe.height);m===void 0&&(m=A(Se,Re));const de=E?A(Se,Re):m;return de.width=Se,de.height=Re,de.getContext("2d").drawImage(N,0,0,Se,Re),st("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+Se+"x"+Re+")."),de}else return"data"in N&&st("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),N;return N}function x(N){return N.generateMipmaps}function P(N){n.generateMipmap(N)}function I(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(N,E,q,ne,fe,Se=!1){if(N!==null){if(n[N]!==void 0)return n[N];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Re;ne&&(Re=e.get("EXT_texture_norm16"),Re||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=E;if(E===n.RED&&(q===n.FLOAT&&(de=n.R32F),q===n.HALF_FLOAT&&(de=n.R16F),q===n.UNSIGNED_BYTE&&(de=n.R8),q===n.UNSIGNED_SHORT&&Re&&(de=Re.R16_EXT),q===n.SHORT&&Re&&(de=Re.R16_SNORM_EXT)),E===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(de=n.R8UI),q===n.UNSIGNED_SHORT&&(de=n.R16UI),q===n.UNSIGNED_INT&&(de=n.R32UI),q===n.BYTE&&(de=n.R8I),q===n.SHORT&&(de=n.R16I),q===n.INT&&(de=n.R32I)),E===n.RG&&(q===n.FLOAT&&(de=n.RG32F),q===n.HALF_FLOAT&&(de=n.RG16F),q===n.UNSIGNED_BYTE&&(de=n.RG8),q===n.UNSIGNED_SHORT&&Re&&(de=Re.RG16_EXT),q===n.SHORT&&Re&&(de=Re.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(de=n.RG8UI),q===n.UNSIGNED_SHORT&&(de=n.RG16UI),q===n.UNSIGNED_INT&&(de=n.RG32UI),q===n.BYTE&&(de=n.RG8I),q===n.SHORT&&(de=n.RG16I),q===n.INT&&(de=n.RG32I)),E===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(de=n.RGB8UI),q===n.UNSIGNED_SHORT&&(de=n.RGB16UI),q===n.UNSIGNED_INT&&(de=n.RGB32UI),q===n.BYTE&&(de=n.RGB8I),q===n.SHORT&&(de=n.RGB16I),q===n.INT&&(de=n.RGB32I)),E===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(de=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(de=n.RGBA16UI),q===n.UNSIGNED_INT&&(de=n.RGBA32UI),q===n.BYTE&&(de=n.RGBA8I),q===n.SHORT&&(de=n.RGBA16I),q===n.INT&&(de=n.RGBA32I)),E===n.RGB&&(q===n.UNSIGNED_SHORT&&Re&&(de=Re.RGB16_EXT),q===n.SHORT&&Re&&(de=Re.RGB16_SNORM_EXT),q===n.UNSIGNED_INT_5_9_9_9_REV&&(de=n.RGB9_E5),q===n.UNSIGNED_INT_10F_11F_11F_REV&&(de=n.R11F_G11F_B10F)),E===n.RGBA){const me=Se?lc:St.getTransfer(fe);q===n.FLOAT&&(de=n.RGBA32F),q===n.HALF_FLOAT&&(de=n.RGBA16F),q===n.UNSIGNED_BYTE&&(de=me===Nt?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT&&Re&&(de=Re.RGBA16_EXT),q===n.SHORT&&Re&&(de=Re.RGBA16_SNORM_EXT),q===n.UNSIGNED_SHORT_4_4_4_4&&(de=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(de=n.RGB5_A1)}return(de===n.R16F||de===n.R32F||de===n.RG16F||de===n.RG32F||de===n.RGBA16F||de===n.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function D(N,E){let q;return N?E===null||E===ji||E===tl?q=n.DEPTH24_STENCIL8:E===Li?q=n.DEPTH32F_STENCIL8:E===el&&(q=n.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ji||E===tl?q=n.DEPTH_COMPONENT24:E===Li?q=n.DEPTH_COMPONENT32F:E===el&&(q=n.DEPTH_COMPONENT16),q}function b(N,E){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==En&&N.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function O(N){const E=N.target;E.removeEventListener("dispose",O),L(E),E.isVideoTexture&&g.delete(E),E.isHTMLTexture&&v.delete(E)}function T(N){const E=N.target;E.removeEventListener("dispose",T),V(E)}function L(N){const E=r.get(N);if(E.__webglInit===void 0)return;const q=N.source,ne=y.get(q);if(ne){const fe=ne[E.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&k(N),Object.keys(ne).length===0&&y.delete(q)}r.remove(N)}function k(N){const E=r.get(N);n.deleteTexture(E.__webglTexture);const q=N.source,ne=y.get(q);delete ne[E.__cacheKey],u.memory.textures--}function V(N){const E=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(E.__webglFramebuffer[ne]))for(let fe=0;fe<E.__webglFramebuffer[ne].length;fe++)n.deleteFramebuffer(E.__webglFramebuffer[ne][fe]);else n.deleteFramebuffer(E.__webglFramebuffer[ne]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[ne])}else{if(Array.isArray(E.__webglFramebuffer))for(let ne=0;ne<E.__webglFramebuffer.length;ne++)n.deleteFramebuffer(E.__webglFramebuffer[ne]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ne=0;ne<E.__webglColorRenderbuffer.length;ne++)E.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[ne]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=N.textures;for(let ne=0,fe=q.length;ne<fe;ne++){const Se=r.get(q[ne]);Se.__webglTexture&&(n.deleteTexture(Se.__webglTexture),u.memory.textures--),r.remove(q[ne])}r.remove(N)}let Y=0;function ue(){Y=0}function ce(){return Y}function $(N){Y=N}function ae(){const N=Y;return N>=o.maxTextures&&st("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),Y+=1,N}function K(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function G(N,E){const q=r.get(N);if(N.isVideoTexture&&W(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&q.__version!==N.version){const ne=N.image;if(ne===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(q,N,E);return}}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+E)}function oe(N,E){const q=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){Ne(q,N,E);return}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+E)}function le(N,E){const q=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){Ne(q,N,E);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+E)}function F(N,E){const q=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&q.__version!==N.version){Qe(q,N,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+E)}const j={[_h]:n.REPEAT,[dr]:n.CLAMP_TO_EDGE,[xh]:n.MIRRORED_REPEAT},Ie={[En]:n.NEAREST,[JA]:n.NEAREST_MIPMAP_NEAREST,[vu]:n.NEAREST_MIPMAP_LINEAR,[In]:n.LINEAR,[_d]:n.LINEAR_MIPMAP_NEAREST,[Ps]:n.LINEAR_MIPMAP_LINEAR},qe={[nR]:n.NEVER,[aR]:n.ALWAYS,[iR]:n.LESS,[Vp]:n.LEQUAL,[rR]:n.EQUAL,[zp]:n.GEQUAL,[sR]:n.GREATER,[oR]:n.NOTEQUAL};function ke(N,E){if(E.type===Li&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===In||E.magFilter===_d||E.magFilter===vu||E.magFilter===Ps||E.minFilter===In||E.minFilter===_d||E.minFilter===vu||E.minFilter===Ps)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,j[E.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,j[E.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,j[E.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,Ie[E.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,Ie[E.minFilter]),E.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,qe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===En||E.minFilter!==vu&&E.minFilter!==Ps||E.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ie(N,E){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",O));const ne=E.source;let fe=y.get(ne);fe===void 0&&(fe={},y.set(ne,fe));const Se=K(E);if(Se!==N.__cacheKey){fe[Se]===void 0&&(fe[Se]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,q=!0),fe[Se].usedTimes++;const Re=fe[N.__cacheKey];Re!==void 0&&(fe[N.__cacheKey].usedTimes--,Re.usedTimes===0&&k(E)),N.__cacheKey=Se,N.__webglTexture=fe[Se].texture}return q}function ve(N,E,q){return Math.floor(Math.floor(N/q)/E)}function pe(N,E,q,ne){const Se=N.updateRanges;if(Se.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,q,ne,E.data);else{Se.sort((Xe,Pe)=>Xe.start-Pe.start);let Re=0;for(let Xe=1;Xe<Se.length;Xe++){const Pe=Se[Re],Ae=Se[Xe],Ze=Pe.start+Pe.count,et=ve(Ae.start,E.width,4),rt=ve(Pe.start,E.width,4);Ae.start<=Ze+1&&et===rt&&ve(Ae.start+Ae.count-1,E.width,4)===et?Pe.count=Math.max(Pe.count,Ae.start+Ae.count-Pe.start):(++Re,Se[Re]=Ae)}Se.length=Re+1;const de=t.getParameter(n.UNPACK_ROW_LENGTH),me=t.getParameter(n.UNPACK_SKIP_PIXELS),be=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let Xe=0,Pe=Se.length;Xe<Pe;Xe++){const Ae=Se[Xe],Ze=Math.floor(Ae.start/4),et=Math.ceil(Ae.count/4),rt=Ze%E.width,z=Math.floor(Ze/E.width),we=et,he=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,rt),t.pixelStorei(n.UNPACK_SKIP_ROWS,z),t.texSubImage2D(n.TEXTURE_2D,0,rt,z,we,he,q,ne,E.data)}N.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,de),t.pixelStorei(n.UNPACK_SKIP_PIXELS,me),t.pixelStorei(n.UNPACK_SKIP_ROWS,be)}}function Ne(N,E,q){let ne=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=n.TEXTURE_3D);const fe=ie(N,E),Se=E.source;t.bindTexture(ne,N.__webglTexture,n.TEXTURE0+q);const Re=r.get(Se);if(Se.version!==Re.__version||fe===!0){if(t.activeTexture(n.TEXTURE0+q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const he=St.getPrimaries(St.workingColorSpace),Ce=E.colorSpace===Kr?null:St.getPrimaries(E.colorSpace),De=E.colorSpace===Kr||he===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let me=S(E.image,!1,o.maxTextureSize);me=_n(E,me);const be=l.convert(E.format,E.colorSpace),Xe=l.convert(E.type);let Pe=C(E.internalFormat,be,Xe,E.normalized,E.colorSpace,E.isVideoTexture);ke(ne,E);let Ae;const Ze=E.mipmaps,et=E.isVideoTexture!==!0,rt=Re.__version===void 0||fe===!0,z=Se.dataReady,we=b(E,me);if(E.isDepthTexture)Pe=D(E.format===Ds,E.type),rt&&(et?t.texStorage2D(n.TEXTURE_2D,1,Pe,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,Pe,me.width,me.height,0,be,Xe,null));else if(E.isDataTexture)if(Ze.length>0){et&&rt&&t.texStorage2D(n.TEXTURE_2D,we,Pe,Ze[0].width,Ze[0].height);for(let he=0,Ce=Ze.length;he<Ce;he++)Ae=Ze[he],et?z&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Ae.width,Ae.height,be,Xe,Ae.data):t.texImage2D(n.TEXTURE_2D,he,Pe,Ae.width,Ae.height,0,be,Xe,Ae.data);E.generateMipmaps=!1}else et?(rt&&t.texStorage2D(n.TEXTURE_2D,we,Pe,me.width,me.height),z&&pe(E,me,be,Xe)):t.texImage2D(n.TEXTURE_2D,0,Pe,me.width,me.height,0,be,Xe,me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){et&&rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Pe,Ze[0].width,Ze[0].height,me.depth);for(let he=0,Ce=Ze.length;he<Ce;he++)if(Ae=Ze[he],E.format!==Ii)if(be!==null)if(et){if(z)if(E.layerUpdates.size>0){const De=S_(Ae.width,Ae.height,E.format,E.type);for(const ge of E.layerUpdates){const He=Ae.data.subarray(ge*De/Ae.data.BYTES_PER_ELEMENT,(ge+1)*De/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,ge,Ae.width,Ae.height,1,be,He)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Ae.width,Ae.height,me.depth,be,Ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,Pe,Ae.width,Ae.height,me.depth,0,Ae.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Ae.width,Ae.height,me.depth,be,Xe,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,Pe,Ae.width,Ae.height,me.depth,0,be,Xe,Ae.data)}else{et&&rt&&t.texStorage2D(n.TEXTURE_2D,we,Pe,Ze[0].width,Ze[0].height);for(let he=0,Ce=Ze.length;he<Ce;he++)Ae=Ze[he],E.format!==Ii?be!==null?et?z&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,Ae.width,Ae.height,be,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,he,Pe,Ae.width,Ae.height,0,Ae.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?z&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Ae.width,Ae.height,be,Xe,Ae.data):t.texImage2D(n.TEXTURE_2D,he,Pe,Ae.width,Ae.height,0,be,Xe,Ae.data)}else if(E.isDataArrayTexture)if(et){if(rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Pe,me.width,me.height,me.depth),z)if(E.layerUpdates.size>0){const he=S_(me.width,me.height,E.format,E.type);for(const Ce of E.layerUpdates){const De=me.data.subarray(Ce*he/me.data.BYTES_PER_ELEMENT,(Ce+1)*he/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ce,me.width,me.height,1,be,Xe,De)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,be,Xe,me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,me.width,me.height,me.depth,0,be,Xe,me.data);else if(E.isData3DTexture)et?(rt&&t.texStorage3D(n.TEXTURE_3D,we,Pe,me.width,me.height,me.depth),z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,be,Xe,me.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,me.width,me.height,me.depth,0,be,Xe,me.data);else if(E.isFramebufferTexture){if(rt)if(et)t.texStorage2D(n.TEXTURE_2D,we,Pe,me.width,me.height);else{let he=me.width,Ce=me.height;for(let De=0;De<we;De++)t.texImage2D(n.TEXTURE_2D,De,Pe,he,Ce,0,be,Xe,null),he>>=1,Ce>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){const he=n.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),me.parentNode!==he){he.appendChild(me),v.add(E),he.onpaint=Ce=>{const De=Ce.changedElements;for(const ge of v)De.includes(ge.image)&&(ge.needsUpdate=!0)},he.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,me);else{const De=n.RGBA,ge=n.RGBA,He=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,De,ge,He,me)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ze.length>0){if(et&&rt){const he=At(Ze[0]);t.texStorage2D(n.TEXTURE_2D,we,Pe,he.width,he.height)}for(let he=0,Ce=Ze.length;he<Ce;he++)Ae=Ze[he],et?z&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,be,Xe,Ae):t.texImage2D(n.TEXTURE_2D,he,Pe,be,Xe,Ae);E.generateMipmaps=!1}else if(et){if(rt){const he=At(me);t.texStorage2D(n.TEXTURE_2D,we,Pe,he.width,he.height)}z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Xe,me)}else t.texImage2D(n.TEXTURE_2D,0,Pe,be,Xe,me);x(E)&&P(ne),Re.__version=Se.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Qe(N,E,q){if(E.image.length!==6)return;const ne=ie(N,E),fe=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+q);const Se=r.get(fe);if(fe.version!==Se.__version||ne===!0){t.activeTexture(n.TEXTURE0+q);const Re=St.getPrimaries(St.workingColorSpace),de=E.colorSpace===Kr?null:St.getPrimaries(E.colorSpace),me=E.colorSpace===Kr||Re===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const be=E.isCompressedTexture||E.image[0].isCompressedTexture,Xe=E.image[0]&&E.image[0].isDataTexture,Pe=[];for(let ge=0;ge<6;ge++)!be&&!Xe?Pe[ge]=S(E.image[ge],!0,o.maxCubemapSize):Pe[ge]=Xe?E.image[ge].image:E.image[ge],Pe[ge]=_n(E,Pe[ge]);const Ae=Pe[0],Ze=l.convert(E.format,E.colorSpace),et=l.convert(E.type),rt=C(E.internalFormat,Ze,et,E.normalized,E.colorSpace),z=E.isVideoTexture!==!0,we=Se.__version===void 0||ne===!0,he=fe.dataReady;let Ce=b(E,Ae);ke(n.TEXTURE_CUBE_MAP,E);let De;if(be){z&&we&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,rt,Ae.width,Ae.height);for(let ge=0;ge<6;ge++){De=Pe[ge].mipmaps;for(let He=0;He<De.length;He++){const Ve=De[He];E.format!==Ii?Ze!==null?z?he&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He,0,0,Ve.width,Ve.height,Ze,Ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He,rt,Ve.width,Ve.height,0,Ve.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He,0,0,Ve.width,Ve.height,Ze,et,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He,rt,Ve.width,Ve.height,0,Ze,et,Ve.data)}}}else{if(De=E.mipmaps,z&&we){De.length>0&&Ce++;const ge=At(Pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,rt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Xe){z?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Pe[ge].width,Pe[ge].height,Ze,et,Pe[ge].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,rt,Pe[ge].width,Pe[ge].height,0,Ze,et,Pe[ge].data);for(let He=0;He<De.length;He++){const Ut=De[He].image[ge].image;z?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He+1,0,0,Ut.width,Ut.height,Ze,et,Ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He+1,rt,Ut.width,Ut.height,0,Ze,et,Ut.data)}}else{z?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ze,et,Pe[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,rt,Ze,et,Pe[ge]);for(let He=0;He<De.length;He++){const Ve=De[He];z?he&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He+1,0,0,Ze,et,Ve.image[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He+1,rt,Ze,et,Ve.image[ge])}}}x(E)&&P(n.TEXTURE_CUBE_MAP),Se.__version=fe.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Je(N,E,q,ne,fe,Se){const Re=l.convert(q.format,q.colorSpace),de=l.convert(q.type),me=C(q.internalFormat,Re,de,q.normalized,q.colorSpace),be=r.get(E),Xe=r.get(q);if(Xe.__renderTarget=E,!be.__hasExternalTextures){const Pe=Math.max(1,E.width>>Se),Ae=Math.max(1,E.height>>Se);fe===n.TEXTURE_3D||fe===n.TEXTURE_2D_ARRAY?t.texImage3D(fe,Se,me,Pe,Ae,E.depth,0,Re,de,null):t.texImage2D(fe,Se,me,Pe,Ae,0,Re,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),Xt(E)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,fe,Xe.__webglTexture,0,Dt(E)):(fe===n.TEXTURE_2D||fe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,fe,Xe.__webglTexture,Se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Gt(N,E,q){if(n.bindRenderbuffer(n.RENDERBUFFER,N),E.depthBuffer){const ne=E.depthTexture,fe=ne&&ne.isDepthTexture?ne.type:null,Se=D(E.stencilBuffer,fe),Re=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Xt(E)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Dt(E),Se,E.width,E.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt(E),Se,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Se,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,N)}else{const ne=E.textures;for(let fe=0;fe<ne.length;fe++){const Se=ne[fe],Re=l.convert(Se.format,Se.colorSpace),de=l.convert(Se.type),me=C(Se.internalFormat,Re,de,Se.normalized,Se.colorSpace);Xt(E)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Dt(E),me,E.width,E.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt(E),me,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,me,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ft(N,E,q){const ne=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const fe=r.get(E.depthTexture);if(fe.__renderTarget=E,(!fe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ne){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,E.depthTexture.addEventListener("dispose",O)),fe.__webglTexture===void 0){fe.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,fe.__webglTexture),ke(n.TEXTURE_CUBE_MAP,E.depthTexture);const be=l.convert(E.depthTexture.format),Xe=l.convert(E.depthTexture.type);let Pe;E.depthTexture.format===xr?Pe=n.DEPTH_COMPONENT24:E.depthTexture.format===Ds&&(Pe=n.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Pe,E.width,E.height,0,be,Xe,null)}}else G(E.depthTexture,0);const Se=fe.__webglTexture,Re=Dt(E),de=ne?n.TEXTURE_CUBE_MAP_POSITIVE_X+q:n.TEXTURE_2D,me=E.depthTexture.format===Ds?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===xr)Xt(E)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,de,Se,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,me,de,Se,0);else if(E.depthTexture.format===Ds)Xt(E)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,de,Se,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,me,de,Se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ct(N){const E=r.get(N),q=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ne=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ne){const fe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ne.removeEventListener("dispose",fe)};ne.addEventListener("dispose",fe),E.__depthDisposeCallback=fe}E.__boundDepthTexture=ne}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let ne=0;ne<6;ne++)ft(E.__webglFramebuffer[ne],N,ne);else{const ne=N.texture.mipmaps;ne&&ne.length>0?ft(E.__webglFramebuffer[0],N,0):ft(E.__webglFramebuffer,N,0)}else if(q){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]===void 0)E.__webglDepthbuffer[ne]=n.createRenderbuffer(),Gt(E.__webglDepthbuffer[ne],N,!1);else{const fe=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=E.__webglDepthbuffer[ne];n.bindRenderbuffer(n.RENDERBUFFER,Se),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,Se)}}else{const ne=N.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),Gt(E.__webglDepthbuffer,N,!1);else{const fe=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Se),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,Se)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Mt(N,E,q){const ne=r.get(N);E!==void 0&&Je(ne.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&Ct(N)}function yt(N){const E=N.texture,q=r.get(N),ne=r.get(E);N.addEventListener("dispose",T);const fe=N.textures,Se=N.isWebGLCubeRenderTarget===!0,Re=fe.length>1;if(Re||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=E.version,u.memory.textures++),Se){q.__webglFramebuffer=[];for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[de]=[];for(let me=0;me<E.mipmaps.length;me++)q.__webglFramebuffer[de][me]=n.createFramebuffer()}else q.__webglFramebuffer[de]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)q.__webglFramebuffer[de]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(Re)for(let de=0,me=fe.length;de<me;de++){const be=r.get(fe[de]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),u.memory.textures++)}if(N.samples>0&&Xt(N)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let de=0;de<fe.length;de++){const me=fe[de];q.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[de]);const be=l.convert(me.format,me.colorSpace),Xe=l.convert(me.type),Pe=C(me.internalFormat,be,Xe,me.normalized,me.colorSpace,N.isXRRenderTarget===!0),Ae=Dt(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,Pe,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,q.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),Gt(q.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Se){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),ke(n.TEXTURE_CUBE_MAP,E);for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)Je(q.__webglFramebuffer[de][me],N,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,me);else Je(q.__webglFramebuffer[de],N,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);x(E)&&P(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let de=0,me=fe.length;de<me;de++){const be=fe[de],Xe=r.get(be);let Pe=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Pe=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Pe,Xe.__webglTexture),ke(Pe,be),Je(q.__webglFramebuffer,N,be,n.COLOR_ATTACHMENT0+de,Pe,0),x(be)&&P(Pe)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(de=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,ne.__webglTexture),ke(de,E),E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)Je(q.__webglFramebuffer[me],N,E,n.COLOR_ATTACHMENT0,de,me);else Je(q.__webglFramebuffer,N,E,n.COLOR_ATTACHMENT0,de,0);x(E)&&P(de),t.unbindTexture()}N.depthBuffer&&Ct(N)}function Wt(N){const E=N.textures;for(let q=0,ne=E.length;q<ne;q++){const fe=E[q];if(x(fe)){const Se=I(N),Re=r.get(fe).__webglTexture;t.bindTexture(Se,Re),P(Se),t.unbindTexture()}}}const en=[],tn=[];function Kt(N){if(N.samples>0){if(Xt(N)===!1){const E=N.textures,q=N.width,ne=N.height;let fe=n.COLOR_BUFFER_BIT;const Se=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=r.get(N),de=E.length>1;if(de)for(let be=0;be<E.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const me=N.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let be=0;be<E.length;be++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(fe|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(fe|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[be]);const Xe=r.get(E[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Xe,0)}n.blitFramebuffer(0,0,q,ne,0,0,q,ne,fe,n.NEAREST),d===!0&&(en.length=0,tn.length=0,en.push(n.COLOR_ATTACHMENT0+be),N.depthBuffer&&N.resolveDepthBuffer===!1&&(en.push(Se),tn.push(Se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,tn)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,en))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let be=0;be<E.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,Re.__webglColorRenderbuffer[be]);const Xe=r.get(E[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,Xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&d){const E=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Dt(N){return Math.min(o.maxSamples,N.samples)}function Xt(N){const E=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function W(N){const E=u.render.frame;g.get(N)!==E&&(g.set(N,E),N.update())}function _n(N,E){const q=N.colorSpace,ne=N.format,fe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==ac&&q!==Kr&&(St.getTransfer(q)===Nt?(ne!==Ii||fe!==si)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",q)),E}function At(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=ae,this.resetTextureUnits=ue,this.getTextureUnits=ce,this.setTextureUnits=$,this.setTexture2D=G,this.setTexture2DArray=oe,this.setTexture3D=le,this.setTextureCube=F,this.rebindTextures=Mt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $D(n,e){function t(r,o=Kr){let l;const u=St.getTransfer(o);if(r===si)return n.UNSIGNED_BYTE;if(r===Np)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Up)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Ny)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===Uy)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ly)return n.BYTE;if(r===Iy)return n.SHORT;if(r===el)return n.UNSIGNED_SHORT;if(r===Ip)return n.INT;if(r===ji)return n.UNSIGNED_INT;if(r===Li)return n.FLOAT;if(r===_r)return n.HALF_FLOAT;if(r===Fy)return n.ALPHA;if(r===Oy)return n.RGB;if(r===Ii)return n.RGBA;if(r===xr)return n.DEPTH_COMPONENT;if(r===Ds)return n.DEPTH_STENCIL;if(r===Fp)return n.RED;if(r===Op)return n.RED_INTEGER;if(r===Ns)return n.RG;if(r===Bp)return n.RG_INTEGER;if(r===kp)return n.RGBA_INTEGER;if(r===Xu||r===Yu||r===qu||r===Ku)if(u===Nt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Xu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Yu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ku)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Xu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Yu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ku)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yh||r===Sh||r===Mh||r===Eh)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===yh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Sh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Mh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Eh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Th||r===wh||r===Ah||r===Rh||r===Ch||r===rc||r===bh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Th||r===wh)return u===Nt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Ah)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Rh)return l.COMPRESSED_R11_EAC;if(r===Ch)return l.COMPRESSED_SIGNED_R11_EAC;if(r===rc)return l.COMPRESSED_RG11_EAC;if(r===bh)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ph||r===Dh||r===Lh||r===Ih||r===Nh||r===Uh||r===Fh||r===Oh||r===Bh||r===kh||r===Vh||r===zh||r===Hh||r===Gh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Ph)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Dh)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Lh)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ih)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Nh)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Uh)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Fh)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Oh)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bh)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===kh)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Vh)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zh)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Hh)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Gh)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wh||r===Xh||r===Yh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Wh)return u===Nt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Xh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Yh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===qh||r===Kh||r===sc||r===$h)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===qh)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Kh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===sc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$h)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===tl?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const jD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class QD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new qy(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ui({vertexShader:jD,fragmentShader:ZD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _i(new ul(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JD extends es{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",d=1,h=null,g=null,v=null,m=null,y=null,M=null;const A=typeof XRWebGLBinding<"u",S=new QD,x={},P=t.getContextAttributes();let I=null,C=null;const D=[],b=[],O=new xt;let T=null;const L=new ri;L.viewport=new Jt;const k=new ri;k.viewport=new Jt;const V=[L,k],Y=new uC;let ue=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ve=D[ie];return ve===void 0&&(ve=new Td,D[ie]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ie){let ve=D[ie];return ve===void 0&&(ve=new Td,D[ie]=ve),ve.getGripSpace()},this.getHand=function(ie){let ve=D[ie];return ve===void 0&&(ve=new Td,D[ie]=ve),ve.getHandSpace()};function $(ie){const ve=b.indexOf(ie.inputSource);if(ve===-1)return;const pe=D[ve];pe!==void 0&&(pe.update(ie.inputSource,ie.frame,h||u),pe.dispatchEvent({type:ie.type,data:ie.inputSource}))}function ae(){o.removeEventListener("select",$),o.removeEventListener("selectstart",$),o.removeEventListener("selectend",$),o.removeEventListener("squeeze",$),o.removeEventListener("squeezestart",$),o.removeEventListener("squeezeend",$),o.removeEventListener("end",ae),o.removeEventListener("inputsourceschange",K);for(let ie=0;ie<D.length;ie++){const ve=b[ie];ve!==null&&(b[ie]=null,D[ie].disconnect(ve))}ue=null,ce=null,S.reset();for(const ie in x)delete x[ie];e.setRenderTarget(I),y=null,m=null,v=null,o=null,C=null,ke.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){l=ie,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){f=ie,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(ie){h=ie},this.getBaseLayer=function(){return m!==null?m:y},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(ie){if(o=ie,o!==null){if(I=e.getRenderTarget(),o.addEventListener("select",$),o.addEventListener("selectstart",$),o.addEventListener("selectend",$),o.addEventListener("squeeze",$),o.addEventListener("squeezestart",$),o.addEventListener("squeezeend",$),o.addEventListener("end",ae),o.addEventListener("inputsourceschange",K),P.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(O),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ne=null,Qe=null;P.depth&&(Qe=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=P.stencil?Ds:xr,Ne=P.stencil?tl:ji);const Je={colorFormat:t.RGBA8,depthFormat:Qe,scaleFactor:l};v=this.getBinding(),m=v.createProjectionLayer(Je),o.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),C=new $i(m.textureWidth,m.textureHeight,{format:Ii,type:si,depthTexture:new Bo(m.textureWidth,m.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const pe={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,pe),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new $i(y.framebufferWidth,y.framebufferHeight,{format:Ii,type:si,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await o.requestReferenceSpace(f),ke.setContext(o),ke.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function K(ie){for(let ve=0;ve<ie.removed.length;ve++){const pe=ie.removed[ve],Ne=b.indexOf(pe);Ne>=0&&(b[Ne]=null,D[Ne].disconnect(pe))}for(let ve=0;ve<ie.added.length;ve++){const pe=ie.added[ve];let Ne=b.indexOf(pe);if(Ne===-1){for(let Je=0;Je<D.length;Je++)if(Je>=b.length){b.push(pe),Ne=Je;break}else if(b[Je]===null){b[Je]=pe,Ne=Je;break}if(Ne===-1)break}const Qe=D[Ne];Qe&&Qe.connect(pe)}}const G=new te,oe=new te;function le(ie,ve,pe){G.setFromMatrixPosition(ve.matrixWorld),oe.setFromMatrixPosition(pe.matrixWorld);const Ne=G.distanceTo(oe),Qe=ve.projectionMatrix.elements,Je=pe.projectionMatrix.elements,Gt=Qe[14]/(Qe[10]-1),ft=Qe[14]/(Qe[10]+1),Ct=(Qe[9]+1)/Qe[5],Mt=(Qe[9]-1)/Qe[5],yt=(Qe[8]-1)/Qe[0],Wt=(Je[8]+1)/Je[0],en=Gt*yt,tn=Gt*Wt,Kt=Ne/(-yt+Wt),Dt=Kt*-yt;if(ve.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Dt),ie.translateZ(Kt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Qe[10]===-1)ie.projectionMatrix.copy(ve.projectionMatrix),ie.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Xt=Gt+Kt,W=ft+Kt,_n=en-Dt,At=tn+(Ne-Dt),N=Ct*ft/W*Xt,E=Mt*ft/W*Xt;ie.projectionMatrix.makePerspective(_n,At,N,E,Xt,W),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function F(ie,ve){ve===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ve.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(o===null)return;let ve=ie.near,pe=ie.far;S.texture!==null&&(S.depthNear>0&&(ve=S.depthNear),S.depthFar>0&&(pe=S.depthFar)),Y.near=k.near=L.near=ve,Y.far=k.far=L.far=pe,(ue!==Y.near||ce!==Y.far)&&(o.updateRenderState({depthNear:Y.near,depthFar:Y.far}),ue=Y.near,ce=Y.far),Y.layers.mask=ie.layers.mask|6,L.layers.mask=Y.layers.mask&-5,k.layers.mask=Y.layers.mask&-3;const Ne=ie.parent,Qe=Y.cameras;F(Y,Ne);for(let Je=0;Je<Qe.length;Je++)F(Qe[Je],Ne);Qe.length===2?le(Y,L,k):Y.projectionMatrix.copy(L.projectionMatrix),j(ie,Y,Ne)};function j(ie,ve,pe){pe===null?ie.matrix.copy(ve.matrixWorld):(ie.matrix.copy(pe.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ve.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ve.projectionMatrix),ie.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Oo*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(m===null&&y===null))return d},this.setFoveation=function(ie){d=ie,m!==null&&(m.fixedFoveation=ie),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ie)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Y)},this.getCameraTexture=function(ie){return x[ie]};let Ie=null;function qe(ie,ve){if(g=ve.getViewerPose(h||u),M=ve,g!==null){const pe=g.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let Ne=!1;pe.length!==Y.cameras.length&&(Y.cameras.length=0,Ne=!0);for(let ft=0;ft<pe.length;ft++){const Ct=pe[ft];let Mt=null;if(y!==null)Mt=y.getViewport(Ct);else{const Wt=v.getViewSubImage(m,Ct);Mt=Wt.viewport,ft===0&&(e.setRenderTargetTextures(C,Wt.colorTexture,Wt.depthStencilTexture),e.setRenderTarget(C))}let yt=V[ft];yt===void 0&&(yt=new ri,yt.layers.enable(ft),yt.viewport=new Jt,V[ft]=yt),yt.matrix.fromArray(Ct.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(Ct.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),ft===0&&(Y.matrix.copy(yt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ne===!0&&Y.cameras.push(yt)}const Qe=o.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){v=r.getBinding();const ft=v.getDepthInformation(pe[0]);ft&&ft.isValid&&ft.texture&&S.init(ft,o.renderState)}if(Qe&&Qe.includes("camera-access")&&A){e.state.unbindTexture(),v=r.getBinding();for(let ft=0;ft<pe.length;ft++){const Ct=pe[ft].camera;if(Ct){let Mt=x[Ct];Mt||(Mt=new qy,x[Ct]=Mt);const yt=v.getCameraImage(Ct);Mt.sourceTexture=yt}}}}for(let pe=0;pe<D.length;pe++){const Ne=b[pe],Qe=D[pe];Ne!==null&&Qe!==void 0&&Qe.update(Ne,ve,h||u)}Ie&&Ie(ie,ve),ve.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ve}),M=null}const ke=new eS;ke.setAnimationLoop(qe),this.setAnimationLoop=function(ie){Ie=ie},this.dispose=function(){}}}const eL=new Ht,aS=new ct;aS.set(-1,0,0,0,1,0,0,0,1);function tL(n,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,jy(n)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,P,I,C){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?l(S,x):x.isMeshLambertMaterial?(l(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(l(S,x),v(S,x)):x.isMeshPhongMaterial?(l(S,x),g(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(l(S,x),m(S,x),x.isMeshPhysicalMaterial&&y(S,x,C)):x.isMeshMatcapMaterial?(l(S,x),M(S,x)):x.isMeshDepthMaterial?l(S,x):x.isMeshDistanceMaterial?(l(S,x),A(S,x)):x.isMeshNormalMaterial?l(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?d(S,x,P,I):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Zn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Zn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const P=e.get(x),I=P.envMap,C=P.envMapRotation;I&&(S.envMap.value=I,S.envMapRotation.value.setFromMatrix4(eL.makeRotationFromEuler(C)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(aS),S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,P,I){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*P,S.scale.value=I*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function v(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function m(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,P){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Zn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function A(S,x){const P=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function nL(n,e,t,r){let o={},l={},u=[];const f=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(C,D){const b=D.program;r.uniformBlockBinding(C,b)}function h(C,D){let b=o[C.id];b===void 0&&(S(C),b=g(C),o[C.id]=b,C.addEventListener("dispose",P));const O=D.program;r.updateUBOMapping(C,O);const T=e.render.frame;l[C.id]!==T&&(m(C),l[C.id]=T)}function g(C){const D=v();C.__bindingPointIndex=D;const b=n.createBuffer(),O=C.__size,T=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,O,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,D,b),b}function v(){for(let C=0;C<f;C++)if(u.indexOf(C)===-1)return u.push(C),C;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(C){const D=o[C.id],b=C.uniforms,O=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,D);for(let T=0,L=b.length;T<L;T++){const k=b[T];if(Array.isArray(k))for(let V=0,Y=k.length;V<Y;V++)y(k[V],T,V,O);else y(k,T,0,O)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function y(C,D,b,O){if(A(C,D,b,O)===!0){const T=C.__offset,L=C.value;if(Array.isArray(L)){let k=0;for(let V=0;V<L.length;V++){const Y=L[V],ue=x(Y);M(Y,C.__data,k),typeof Y!="number"&&typeof Y!="boolean"&&!Y.isMatrix3&&!ArrayBuffer.isView(Y)&&(k+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(L,C.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,C.__data)}}function M(C,D,b){typeof C=="number"||typeof C=="boolean"?D[0]=C:C.isMatrix3?(D[0]=C.elements[0],D[1]=C.elements[1],D[2]=C.elements[2],D[3]=0,D[4]=C.elements[3],D[5]=C.elements[4],D[6]=C.elements[5],D[7]=0,D[8]=C.elements[6],D[9]=C.elements[7],D[10]=C.elements[8],D[11]=0):ArrayBuffer.isView(C)?D.set(new C.constructor(C.buffer,C.byteOffset,D.length)):C.toArray(D,b)}function A(C,D,b,O){const T=C.value,L=D+"_"+b;if(O[L]===void 0)return typeof T=="number"||typeof T=="boolean"?O[L]=T:ArrayBuffer.isView(T)?O[L]=T.slice():O[L]=T.clone(),!0;{const k=O[L];if(typeof T=="number"||typeof T=="boolean"){if(k!==T)return O[L]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(k.equals(T)===!1)return k.copy(T),!0}}return!1}function S(C){const D=C.uniforms;let b=0;const O=16;for(let L=0,k=D.length;L<k;L++){const V=Array.isArray(D[L])?D[L]:[D[L]];for(let Y=0,ue=V.length;Y<ue;Y++){const ce=V[Y],$=Array.isArray(ce.value)?ce.value:[ce.value];for(let ae=0,K=$.length;ae<K;ae++){const G=$[ae],oe=x(G),le=b%O,F=le%oe.boundary,j=le+F;b+=F,j!==0&&O-j<oe.storage&&(b+=O-j),ce.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=b,b+=oe.storage}}}const T=b%O;return T>0&&(b+=O-T),C.__size=b,C.__cache={},this}function x(C){const D={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(D.boundary=4,D.storage=4):C.isVector2?(D.boundary=8,D.storage=8):C.isVector3||C.isColor?(D.boundary=16,D.storage=12):C.isVector4?(D.boundary=16,D.storage=16):C.isMatrix3?(D.boundary=48,D.storage=48):C.isMatrix4?(D.boundary=64,D.storage=64):C.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(D.boundary=16,D.storage=C.byteLength):st("WebGLRenderer: Unsupported uniform value type.",C),D}function P(C){const D=C.target;D.removeEventListener("dispose",P);const b=u.indexOf(D.__bindingPointIndex);u.splice(b,1),n.deleteBuffer(o[D.id]),delete o[D.id],delete l[D.id]}function I(){for(const C in o)n.deleteBuffer(o[C]);u=[],o={},l={}}return{bind:d,update:h,dispose:I}}const iL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gi=null;function rL(){return Gi===null&&(Gi=new Xy(iL,16,16,Ns,_r),Gi.name="DFG_LUT",Gi.minFilter=In,Gi.magFilter=In,Gi.wrapS=dr,Gi.wrapT=dr,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}class sL{constructor(e={}){const{canvas:t=uR(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:m=!1,outputBufferType:y=si}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const A=y,S=new Set([kp,Bp,Op]),x=new Set([si,ji,el,tl,Np,Up]),P=new Uint32Array(4),I=new Int32Array(4),C=new te;let D=null,b=null;const O=[],T=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let V=!1,Y=null,ue=null,ce=null,$=null;this._outputColorSpace=vi;let ae=0,K=0,G=null,oe=-1,le=null;const F=new Jt,j=new Jt;let Ie=null;const qe=new _t(0);let ke=0,ie=t.width,ve=t.height,pe=1,Ne=null,Qe=null;const Je=new Jt(0,0,ie,ve),Gt=new Jt(0,0,ie,ve);let ft=!1;const Ct=new Wp;let Mt=!1,yt=!1;const Wt=new Ht,en=new te,tn=new Jt,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Dt=!1;function Xt(){return G===null?pe:1}let W=r;function _n(R,X){return t.getContext(R,X)}try{const R={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dp}`),t.addEventListener("webglcontextlost",Ut,!1),t.addEventListener("webglcontextrestored",bt,!1),t.addEventListener("webglcontextcreationerror",Tn,!1),W===null){const X="webgl2";if(W=_n(X,R),W===null)throw _n(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw wt("WebGLRenderer: "+R.message),R}let At,N,E,q,ne,fe,Se,Re,de,me,be,Xe,Pe,Ae,Ze,et,rt,z,we,he,Ce,De,ge;function He(){At=new r3(W),At.init(),Ce=new $D(W,At),N=new jP(W,At,e,Ce),E=new qD(W,At),N.reversedDepthBuffer&&m&&E.buffers.depth.setReversed(!0),ue=W.createFramebuffer(),ce=W.createFramebuffer(),$=W.createFramebuffer(),q=new a3(W),ne=new ID,fe=new KD(W,At,E,ne,N,Ce,q),Se=new i3(k),Re=new fC(W),De=new KP(W,Re),de=new s3(W,Re,q,De),me=new u3(W,de,Re,De,q),z=new l3(W,N,fe),Ze=new ZP(ne),be=new LD(k,Se,At,N,De,Ze),Xe=new tL(k,ne),Pe=new UD,Ae=new zD(At),rt=new qP(k,Se,E,me,M,d),et=new YD(k,me,N),ge=new nL(W,q,N,E),we=new $P(W,At,q),he=new o3(W,At,q),q.programs=be.programs,k.capabilities=N,k.extensions=At,k.properties=ne,k.renderLists=Pe,k.shadowMap=et,k.state=E,k.info=q}He(),A!==si&&(L=new f3(A,t.width,t.height,f,o,l));const Ve=new JD(k,W);this.xr=Ve,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=At.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=At.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(R){R!==void 0&&(pe=R,this.setSize(ie,ve,!1))},this.getSize=function(R){return R.set(ie,ve)},this.setSize=function(R,X,re=!0){if(Ve.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=R,ve=X,t.width=Math.floor(R*pe),t.height=Math.floor(X*pe),re===!0&&(t.style.width=R+"px",t.style.height=X+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(ie*pe,ve*pe).floor()},this.setDrawingBufferSize=function(R,X,re){ie=R,ve=X,pe=re,t.width=Math.floor(R*re),t.height=Math.floor(X*re),this.setViewport(0,0,R,X)},this.setEffects=function(R){if(A===si){wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let X=0;X<R.length;X++)if(R[X].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(Je)},this.setViewport=function(R,X,re,J){R.isVector4?Je.set(R.x,R.y,R.z,R.w):Je.set(R,X,re,J),E.viewport(F.copy(Je).multiplyScalar(pe).round())},this.getScissor=function(R){return R.copy(Gt)},this.setScissor=function(R,X,re,J){R.isVector4?Gt.set(R.x,R.y,R.z,R.w):Gt.set(R,X,re,J),E.scissor(j.copy(Gt).multiplyScalar(pe).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(R){E.setScissorTest(ft=R)},this.setOpaqueSort=function(R){Ne=R},this.setTransparentSort=function(R){Qe=R},this.getClearColor=function(R){return R.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,re=!0){let J=0;if(R){let Q=!1;if(G!==null){const Te=G.texture.format;Q=S.has(Te)}if(Q){const Te=G.texture.type,Oe=x.has(Te),Ee=rt.getClearColor(),Ge=rt.getClearAlpha(),$e=Ee.r,lt=Ee.g,ut=Ee.b;Oe?(P[0]=$e,P[1]=lt,P[2]=ut,P[3]=Ge,W.clearBufferuiv(W.COLOR,0,P)):(I[0]=$e,I[1]=lt,I[2]=ut,I[3]=Ge,W.clearBufferiv(W.COLOR,0,I))}else J|=W.COLOR_BUFFER_BIT}X&&(J|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(J|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&W.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),Y=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Ut,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",Tn,!1),rt.dispose(),Pe.dispose(),Ae.dispose(),ne.dispose(),Se.dispose(),me.dispose(),De.dispose(),ge.dispose(),be.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",cl),Ve.removeEventListener("sessionend",fl),Fn.stop()};function Ut(R){R.preventDefault(),j0("WebGLRenderer: Context Lost."),V=!0}function bt(){j0("WebGLRenderer: Context Restored."),V=!1;const R=q.autoReset,X=et.enabled,re=et.autoUpdate,J=et.needsUpdate,Q=et.type;He(),q.autoReset=R,et.enabled=X,et.autoUpdate=re,et.needsUpdate=J,et.type=Q}function Tn(R){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ai(R){const X=R.target;X.removeEventListener("dispose",ai),ts(X)}function ts(R){Os(R),ne.remove(R)}function Os(R){const X=ne.get(R).programs;X!==void 0&&(X.forEach(function(re){be.releaseProgram(re)}),R.isShaderMaterial&&be.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,re,J,Q,Te){X===null&&(X=Kt);const Oe=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Ee=$t(R,X,re,J,Q);E.setMaterial(J,Oe);let Ge=re.index,$e=1;if(J.wireframe===!0){if(Ge=de.getWireframeAttribute(re),Ge===void 0)return;$e=2}const lt=re.drawRange,ut=re.attributes.position;let Ye=lt.start*$e,Et=(lt.start+lt.count)*$e;Te!==null&&(Ye=Math.max(Ye,Te.start*$e),Et=Math.min(Et,(Te.start+Te.count)*$e)),Ge!==null?(Ye=Math.max(Ye,0),Et=Math.min(Et,Ge.count)):ut!=null&&(Ye=Math.max(Ye,0),Et=Math.min(Et,ut.count));const Ft=Et-Ye;if(Ft<0||Ft===1/0)return;De.setup(Q,J,Ee,re,Ge);let Yt,Lt=we;if(Ge!==null&&(Yt=Re.get(Ge),Lt=he,Lt.setIndex(Yt)),Q.isMesh)J.wireframe===!0?(E.setLineWidth(J.wireframeLinewidth*Xt()),Lt.setMode(W.LINES)):Lt.setMode(W.TRIANGLES);else if(Q.isLine){let an=J.linewidth;an===void 0&&(an=1),E.setLineWidth(an*Xt()),Q.isLineSegments?Lt.setMode(W.LINES):Q.isLineLoop?Lt.setMode(W.LINE_LOOP):Lt.setMode(W.LINE_STRIP)}else Q.isPoints?Lt.setMode(W.POINTS):Q.isSprite&&Lt.setMode(W.TRIANGLES);if(Q.isBatchedMesh)if(At.get("WEBGL_multi_draw"))Lt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const an=Q._multiDrawStarts,Ue=Q._multiDrawCounts,xn=Q._multiDrawCount,pt=Ge?Re.get(Ge).bytesPerElement:1,Hn=ne.get(J).currentProgram.getUniforms();for(let Gn=0;Gn<xn;Gn++)Hn.setValue(W,"_gl_DrawID",Gn),Lt.render(an[Gn]/pt,Ue[Gn])}else if(Q.isInstancedMesh)Lt.renderInstances(Ye,Ft,Q.count);else if(re.isInstancedBufferGeometry){const an=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ue=Math.min(re.instanceCount,an);Lt.renderInstances(Ye,Ft,Ue)}else Lt.render(Ye,Ft)};function ns(R,X,re){R.transparent===!0&&R.side===fr&&R.forceSinglePass===!1?(R.side=Zn,R.needsUpdate=!0,ss(R,X,re),R.side=Qr,R.needsUpdate=!0,ss(R,X,re),R.side=fr):ss(R,X,re)}this.compile=function(R,X,re=null){re===null&&(re=R),b=Ae.get(re),b.init(X),T.push(b),re.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(b.pushLight(Q),Q.castShadow&&b.pushShadow(Q))}),R!==re&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(b.pushLight(Q),Q.castShadow&&b.pushShadow(Q))}),b.setupLights();const J=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Te=Q.material;if(Te)if(Array.isArray(Te))for(let Oe=0;Oe<Te.length;Oe++){const Ee=Te[Oe];ns(Ee,re,Q),J.add(Ee)}else ns(Te,re,Q),J.add(Te)}),b=T.pop(),J},this.compileAsync=function(R,X,re=null){const J=this.compile(R,X,re);return new Promise(Q=>{function Te(){if(J.forEach(function(Oe){ne.get(Oe).currentProgram.isReady()&&J.delete(Oe)}),J.size===0){Q(R);return}setTimeout(Te,10)}At.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let is=null;function yc(R){is&&is(R)}function cl(){Fn.stop()}function fl(){Fn.start()}const Fn=new eS;Fn.setAnimationLoop(yc),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(R){is=R,Ve.setAnimationLoop(R),R===null?Fn.stop():Fn.start()},Ve.addEventListener("sessionstart",cl),Ve.addEventListener("sessionend",fl),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;Y!==null&&Y.renderStart(R,X);const re=Ve.enabled===!0&&Ve.isPresenting===!0,J=L!==null&&(G===null||re)&&L.begin(k,G);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(X),X=Ve.getCamera()),R.isScene===!0&&R.onBeforeRender(k,R,X,G),b=Ae.get(R,T.length),b.init(X),b.state.textureUnits=fe.getTextureUnits(),T.push(b),Wt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ct.setFromProjectionMatrix(Wt,Xi,X.reversedDepth),yt=this.localClippingEnabled,Mt=Ze.init(this.clippingPlanes,yt),D=Pe.get(R,O.length),D.init(),O.push(D),Ve.enabled===!0&&Ve.isPresenting===!0){const Oe=k.xr.getDepthSensingMesh();Oe!==null&&Bs(Oe,X,-1/0,k.sortObjects)}Bs(R,X,0,k.sortObjects),D.finish(),k.sortObjects===!0&&D.sort(Ne,Qe,X.reversedDepth),Dt=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Dt&&rt.addToRenderList(D,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Mt===!0&&Ze.beginShadows();const Q=b.state.shadowsArray;if(et.render(Q,R,X),Mt===!0&&Ze.endShadows(),(J&&L.hasRenderPass())===!1){const Oe=D.opaque,Ee=D.transmissive;if(b.setupLights(),X.isArrayCamera){const Ge=X.cameras;if(Ee.length>0)for(let $e=0,lt=Ge.length;$e<lt;$e++){const ut=Ge[$e];dl(Oe,Ee,R,ut)}Dt&&rt.render(R);for(let $e=0,lt=Ge.length;$e<lt;$e++){const ut=Ge[$e];Yo(D,R,ut,ut.viewport)}}else Ee.length>0&&dl(Oe,Ee,R,X),Dt&&rt.render(R),Yo(D,R,X)}G!==null&&K===0&&(fe.updateMultisampleRenderTarget(G),fe.updateRenderTargetMipmap(G)),J&&L.end(k),R.isScene===!0&&R.onAfterRender(k,R,X),De.resetDefaultState(),oe=-1,le=null,T.pop(),T.length>0?(b=T[T.length-1],fe.setTextureUnits(b.state.textureUnits),Mt===!0&&Ze.setGlobalState(k.clippingPlanes,b.state.camera)):b=null,O.pop(),O.length>0?D=O[O.length-1]:D=null,Y!==null&&Y.renderEnd()};function Bs(R,X,re,J){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLightProbeGrid)b.pushLightProbeGrid(R);else if(R.isLight)b.pushLight(R),R.castShadow&&b.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ct.intersectsSprite(R)){J&&tn.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Wt);const Oe=me.update(R),Ee=R.material;Ee.visible&&D.push(R,Oe,Ee,re,tn.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ct.intersectsObject(R))){const Oe=me.update(R),Ee=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),tn.copy(R.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),tn.copy(Oe.boundingSphere.center)),tn.applyMatrix4(R.matrixWorld).applyMatrix4(Wt)),Array.isArray(Ee)){const Ge=Oe.groups;for(let $e=0,lt=Ge.length;$e<lt;$e++){const ut=Ge[$e],Ye=Ee[ut.materialIndex];Ye&&Ye.visible&&D.push(R,Oe,Ye,re,tn.z,ut)}}else Ee.visible&&D.push(R,Oe,Ee,re,tn.z,null)}}const Te=R.children;for(let Oe=0,Ee=Te.length;Oe<Ee;Oe++)Bs(Te[Oe],X,re,J)}function Yo(R,X,re,J){const{opaque:Q,transmissive:Te,transparent:Oe}=R;b.setupLightsView(re),Mt===!0&&Ze.setGlobalState(k.clippingPlanes,re),J&&E.viewport(F.copy(J)),Q.length>0&&rs(Q,X,re),Te.length>0&&rs(Te,X,re),Oe.length>0&&rs(Oe,X,re),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function dl(R,X,re,J){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[J.id]===void 0){const Ye=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[J.id]=new $i(1,1,{generateMipmaps:!0,type:Ye?_r:si,minFilter:Ps,samples:Math.max(4,N.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace})}const Te=b.state.transmissionRenderTarget[J.id],Oe=J.viewport||F;Te.setSize(Oe.z*k.transmissionResolutionScale,Oe.w*k.transmissionResolutionScale);const Ee=k.getRenderTarget(),Ge=k.getActiveCubeFace(),$e=k.getActiveMipmapLevel();k.setRenderTarget(Te),k.getClearColor(qe),ke=k.getClearAlpha(),ke<1&&k.setClearColor(16777215,.5),k.clear(),Dt&&rt.render(re);const lt=k.toneMapping;k.toneMapping=Ki;const ut=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),b.setupLightsView(J),Mt===!0&&Ze.setGlobalState(k.clippingPlanes,J),rs(R,re,J),fe.updateMultisampleRenderTarget(Te),fe.updateRenderTargetMipmap(Te),At.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Et=0,Ft=X.length;Et<Ft;Et++){const Yt=X[Et],{object:Lt,geometry:an,material:Ue,group:xn}=Yt;if(Ue.side===fr&&Lt.layers.test(J.layers)){const pt=Ue.side;Ue.side=Zn,Ue.needsUpdate=!0,qo(Lt,re,J,an,Ue,xn),Ue.side=pt,Ue.needsUpdate=!0,Ye=!0}}Ye===!0&&(fe.updateMultisampleRenderTarget(Te),fe.updateRenderTargetMipmap(Te))}k.setRenderTarget(Ee,Ge,$e),k.setClearColor(qe,ke),ut!==void 0&&(J.viewport=ut),k.toneMapping=lt}function rs(R,X,re){const J=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,Te=R.length;Q<Te;Q++){const Oe=R[Q],{object:Ee,geometry:Ge,group:$e}=Oe;let lt=Oe.material;lt.allowOverride===!0&&J!==null&&(lt=J),Ee.layers.test(re.layers)&&qo(Ee,X,re,Ge,lt,$e)}}function qo(R,X,re,J,Q,Te){R.onBeforeRender(k,X,re,J,Q,Te),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(k,X,re,J,R,Te),Q.transparent===!0&&Q.side===fr&&Q.forceSinglePass===!1?(Q.side=Zn,Q.needsUpdate=!0,k.renderBufferDirect(re,X,J,Q,R,Te),Q.side=Qr,Q.needsUpdate=!0,k.renderBufferDirect(re,X,J,Q,R,Te),Q.side=fr):k.renderBufferDirect(re,X,J,Q,R,Te),R.onAfterRender(k,X,re,J,Q,Te)}function ss(R,X,re){X.isScene!==!0&&(X=Kt);const J=ne.get(R),Q=b.state.lights,Te=b.state.shadowsArray,Oe=Q.state.version,Ee=be.getParameters(R,Q.state,Te,X,re,b.state.lightProbeGridArray),Ge=be.getProgramCacheKey(Ee);let $e=J.programs;J.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?X.environment:null,J.fog=X.fog;const lt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;J.envMap=Se.get(R.envMap||J.environment,lt),J.envMapRotation=J.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,$e===void 0&&(R.addEventListener("dispose",ai),$e=new Map,J.programs=$e);let ut=$e.get(Ge);if(ut!==void 0){if(J.currentProgram===ut&&J.lightsStateVersion===Oe)return hl(R,Ee),ut}else Ee.uniforms=be.getUniforms(R),Y!==null&&R.isNodeMaterial&&Y.build(R,re,Ee),R.onBeforeCompile(Ee,k),ut=be.acquireProgram(Ee,Ge),$e.set(Ge,ut),J.uniforms=Ee.uniforms;const Ye=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=Ze.uniform),hl(R,Ee),J.needsLights=$o(R),J.lightsStateVersion=Oe,J.needsLights&&(Ye.ambientLightColor.value=Q.state.ambient,Ye.lightProbe.value=Q.state.probe,Ye.directionalLights.value=Q.state.directional,Ye.directionalLightShadows.value=Q.state.directionalShadow,Ye.spotLights.value=Q.state.spot,Ye.spotLightShadows.value=Q.state.spotShadow,Ye.rectAreaLights.value=Q.state.rectArea,Ye.ltc_1.value=Q.state.rectAreaLTC1,Ye.ltc_2.value=Q.state.rectAreaLTC2,Ye.pointLights.value=Q.state.point,Ye.pointLightShadows.value=Q.state.pointShadow,Ye.hemisphereLights.value=Q.state.hemi,Ye.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ye.spotLightMatrix.value=Q.state.spotLightMatrix,Ye.spotLightMap.value=Q.state.spotLightMap,Ye.pointShadowMatrix.value=Q.state.pointShadowMatrix),J.lightProbeGrid=b.state.lightProbeGridArray.length>0,J.currentProgram=ut,J.uniformsList=null,ut}function Ko(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=$u.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function hl(R,X){const re=ne.get(R);re.outputColorSpace=X.outputColorSpace,re.batching=X.batching,re.batchingColor=X.batchingColor,re.instancing=X.instancing,re.instancingColor=X.instancingColor,re.instancingMorph=X.instancingMorph,re.skinning=X.skinning,re.morphTargets=X.morphTargets,re.morphNormals=X.morphNormals,re.morphColors=X.morphColors,re.morphTargetsCount=X.morphTargetsCount,re.numClippingPlanes=X.numClippingPlanes,re.numIntersection=X.numClipIntersection,re.vertexAlphas=X.vertexAlphas,re.vertexTangents=X.vertexTangents,re.toneMapping=X.toneMapping}function Sc(R,X){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;C.setFromMatrixPosition(X.matrixWorld);for(let re=0,J=R.length;re<J;re++){const Q=R[re];if(Q.texture!==null&&Q.boundingBox.containsPoint(C))return Q}return null}function $t(R,X,re,J,Q){X.isScene!==!0&&(X=Kt),fe.resetTextureUnits();const Te=X.fog,Oe=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?X.environment:null,Ee=G===null?k.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:St.workingColorSpace,Ge=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,$e=Se.get(J.envMap||Oe,Ge),lt=J.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ut=!!re.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ye=!!re.morphAttributes.position,Et=!!re.morphAttributes.normal,Ft=!!re.morphAttributes.color;let Yt=Ki;J.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Yt=k.toneMapping);const Lt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,an=Lt!==void 0?Lt.length:0,Ue=ne.get(J),xn=b.state.lights;if(Mt===!0&&(yt===!0||R!==le)){const It=R===le&&J.id===oe;Ze.setState(J,R,It)}let pt=!1;J.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==xn.state.version||Ue.outputColorSpace!==Ee||Q.isBatchedMesh&&Ue.batching===!1||!Q.isBatchedMesh&&Ue.batching===!0||Q.isBatchedMesh&&Ue.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Ue.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Ue.instancing===!1||!Q.isInstancedMesh&&Ue.instancing===!0||Q.isSkinnedMesh&&Ue.skinning===!1||!Q.isSkinnedMesh&&Ue.skinning===!0||Q.isInstancedMesh&&Ue.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ue.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ue.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ue.instancingMorph===!1&&Q.morphTexture!==null||Ue.envMap!==$e||J.fog===!0&&Ue.fog!==Te||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==Ze.numPlanes||Ue.numIntersection!==Ze.numIntersection)||Ue.vertexAlphas!==lt||Ue.vertexTangents!==ut||Ue.morphTargets!==Ye||Ue.morphNormals!==Et||Ue.morphColors!==Ft||Ue.toneMapping!==Yt||Ue.morphTargetsCount!==an||!!Ue.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,Ue.__version=J.version);let Hn=Ue.currentProgram;pt===!0&&(Hn=ss(J,X,Q),Y&&J.isNodeMaterial&&Y.onUpdateProgram(J,Hn,Ue));let Gn=!1,mt=!1,Zi=!1;const Pt=Hn.getUniforms(),Bt=Ue.uniforms;if(E.useProgram(Hn.program)&&(Gn=!0,mt=!0,Zi=!0),J.id!==oe&&(oe=J.id,mt=!0),Ue.needsLights){const It=Sc(b.state.lightProbeGridArray,Q);Ue.lightProbeGrid!==It&&(Ue.lightProbeGrid=It,mt=!0)}if(Gn||le!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Pt.setValue(W,"projectionMatrix",R.projectionMatrix),Pt.setValue(W,"viewMatrix",R.matrixWorldInverse);const yi=Pt.map.cameraPosition;yi!==void 0&&yi.setValue(W,en.setFromMatrixPosition(R.matrixWorld)),N.logarithmicDepthBuffer&&Pt.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Pt.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),le!==R&&(le=R,mt=!0,Zi=!0)}if(Ue.needsLights&&(xn.state.directionalShadowMap.length>0&&Pt.setValue(W,"directionalShadowMap",xn.state.directionalShadowMap,fe),xn.state.spotShadowMap.length>0&&Pt.setValue(W,"spotShadowMap",xn.state.spotShadowMap,fe),xn.state.pointShadowMap.length>0&&Pt.setValue(W,"pointShadowMap",xn.state.pointShadowMap,fe)),Q.isSkinnedMesh){Pt.setOptional(W,Q,"bindMatrix"),Pt.setOptional(W,Q,"bindMatrixInverse");const It=Q.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Pt.setValue(W,"boneTexture",It.boneTexture,fe))}Q.isBatchedMesh&&(Pt.setOptional(W,Q,"batchingTexture"),Pt.setValue(W,"batchingTexture",Q._matricesTexture,fe),Pt.setOptional(W,Q,"batchingIdTexture"),Pt.setValue(W,"batchingIdTexture",Q._indirectTexture,fe),Pt.setOptional(W,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Pt.setValue(W,"batchingColorTexture",Q._colorsTexture,fe));const xi=re.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&z.update(Q,re,Hn),(mt||Ue.receiveShadow!==Q.receiveShadow)&&(Ue.receiveShadow=Q.receiveShadow,Pt.setValue(W,"receiveShadow",Q.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&X.environment!==null&&(Bt.envMapIntensity.value=X.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=rL()),mt){if(Pt.setValue(W,"toneMappingExposure",k.toneMappingExposure),Ue.needsLights&&Mc(Bt,Zi),Te&&J.fog===!0&&Xe.refreshFogUniforms(Bt,Te),Xe.refreshMaterialUniforms(Bt,J,pe,ve,b.state.transmissionRenderTarget[R.id]),Ue.needsLights&&Ue.lightProbeGrid){const It=Ue.lightProbeGrid;Bt.probesSH.value=It.texture,Bt.probesMin.value.copy(It.boundingBox.min),Bt.probesMax.value.copy(It.boundingBox.max),Bt.probesResolution.value.copy(It.resolution)}$u.upload(W,Ko(Ue),Bt,fe)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&($u.upload(W,Ko(Ue),Bt,fe),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Pt.setValue(W,"center",Q.center),Pt.setValue(W,"modelViewMatrix",Q.modelViewMatrix),Pt.setValue(W,"normalMatrix",Q.normalMatrix),Pt.setValue(W,"modelMatrix",Q.matrixWorld),J.uniformsGroups!==void 0){const It=J.uniformsGroups;for(let yi=0,Oi=It.length;yi<Oi;yi++){const os=It[yi];ge.update(os,Hn),ge.bind(os,Hn)}}return Hn}function Mc(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function $o(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(R,X,re){const J=ne.get(R);J.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),ne.get(R.texture).__webglTexture=X,ne.get(R.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:re,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const re=ne.get(R);re.__webglFramebuffer=X,re.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,re=0){G=R,ae=X,K=re;let J=null,Q=!1,Te=!1;if(R){const Ee=ne.get(R);if(Ee.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(W.FRAMEBUFFER,Ee.__webglFramebuffer),F.copy(R.viewport),j.copy(R.scissor),Ie=R.scissorTest,E.viewport(F),E.scissor(j),E.setScissorTest(Ie),oe=-1;return}else if(Ee.__webglFramebuffer===void 0)fe.setupRenderTarget(R);else if(Ee.__hasExternalTextures)fe.rebindTextures(R,ne.get(R.texture).__webglTexture,ne.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const lt=R.depthTexture;if(Ee.__boundDepthTexture!==lt){if(lt!==null&&ne.has(lt)&&(R.width!==lt.image.width||R.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(R)}}const Ge=R.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Te=!0);const $e=ne.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray($e[X])?J=$e[X][re]:J=$e[X],Q=!0):R.samples>0&&fe.useMultisampledRTT(R)===!1?J=ne.get(R).__webglMultisampledFramebuffer:Array.isArray($e)?J=$e[re]:J=$e,F.copy(R.viewport),j.copy(R.scissor),Ie=R.scissorTest}else F.copy(Je).multiplyScalar(pe).floor(),j.copy(Gt).multiplyScalar(pe).floor(),Ie=ft;if(re!==0&&(J=ue),E.bindFramebuffer(W.FRAMEBUFFER,J)&&E.drawBuffers(R,J),E.viewport(F),E.scissor(j),E.setScissorTest(Ie),Q){const Ee=ne.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ee.__webglTexture,re)}else if(Te){const Ee=X;for(let Ge=0;Ge<R.textures.length;Ge++){const $e=ne.get(R.textures[Ge]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Ge,$e.__webglTexture,re,Ee)}}else if(R!==null&&re!==0){const Ee=ne.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ee.__webglTexture,re)}oe=-1},this.readRenderTargetPixels=function(R,X,re,J,Q,Te,Oe,Ee=0){if(!(R&&R.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=ne.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ge=Ge[Oe]),Ge){E.bindFramebuffer(W.FRAMEBUFFER,Ge);try{const $e=R.textures[Ee],lt=$e.format,ut=$e.type;if(R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ee),!N.textureFormatReadable(lt)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!N.textureTypeReadable(ut)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-J&&re>=0&&re<=R.height-Q&&W.readPixels(X,re,J,Q,Ce.convert(lt),Ce.convert(ut),Te)}finally{const $e=G!==null?ne.get(G).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(R,X,re,J,Q,Te,Oe,Ee=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=ne.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ge=Ge[Oe]),Ge)if(X>=0&&X<=R.width-J&&re>=0&&re<=R.height-Q){E.bindFramebuffer(W.FRAMEBUFFER,Ge);const $e=R.textures[Ee],lt=$e.format,ut=$e.type;if(R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ee),!N.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!N.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Ye),W.bufferData(W.PIXEL_PACK_BUFFER,Te.byteLength,W.STREAM_READ),W.readPixels(X,re,J,Q,Ce.convert(lt),Ce.convert(ut),0);const Et=G!==null?ne.get(G).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,Et);const Ft=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await cR(W,Ft,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Ye),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Te),W.deleteBuffer(Ye),W.deleteSync(Ft),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,re=0){const J=Math.pow(2,-re),Q=Math.floor(R.image.width*J),Te=Math.floor(R.image.height*J),Oe=X!==null?X.x:0,Ee=X!==null?X.y:0;fe.setTexture2D(R,0),W.copyTexSubImage2D(W.TEXTURE_2D,re,0,0,Oe,Ee,Q,Te),E.unbindTexture()},this.copyTextureToTexture=function(R,X,re=null,J=null,Q=0,Te=0){let Oe,Ee,Ge,$e,lt,ut,Ye,Et,Ft;const Yt=R.isCompressedTexture?R.mipmaps[Te]:R.image;if(re!==null)Oe=re.max.x-re.min.x,Ee=re.max.y-re.min.y,Ge=re.isBox3?re.max.z-re.min.z:1,$e=re.min.x,lt=re.min.y,ut=re.isBox3?re.min.z:0;else{const Bt=Math.pow(2,-Q);Oe=Math.floor(Yt.width*Bt),Ee=Math.floor(Yt.height*Bt),R.isDataArrayTexture?Ge=Yt.depth:R.isData3DTexture?Ge=Math.floor(Yt.depth*Bt):Ge=1,$e=0,lt=0,ut=0}J!==null?(Ye=J.x,Et=J.y,Ft=J.z):(Ye=0,Et=0,Ft=0);const Lt=Ce.convert(X.format),an=Ce.convert(X.type);let Ue;X.isData3DTexture?(fe.setTexture3D(X,0),Ue=W.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(fe.setTexture2DArray(X,0),Ue=W.TEXTURE_2D_ARRAY):(fe.setTexture2D(X,0),Ue=W.TEXTURE_2D),E.activeTexture(W.TEXTURE0),E.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,X.flipY),E.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),E.pixelStorei(W.UNPACK_ALIGNMENT,X.unpackAlignment);const xn=E.getParameter(W.UNPACK_ROW_LENGTH),pt=E.getParameter(W.UNPACK_IMAGE_HEIGHT),Hn=E.getParameter(W.UNPACK_SKIP_PIXELS),Gn=E.getParameter(W.UNPACK_SKIP_ROWS),mt=E.getParameter(W.UNPACK_SKIP_IMAGES);E.pixelStorei(W.UNPACK_ROW_LENGTH,Yt.width),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Yt.height),E.pixelStorei(W.UNPACK_SKIP_PIXELS,$e),E.pixelStorei(W.UNPACK_SKIP_ROWS,lt),E.pixelStorei(W.UNPACK_SKIP_IMAGES,ut);const Zi=R.isDataArrayTexture||R.isData3DTexture,Pt=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const Bt=ne.get(R),xi=ne.get(X),It=ne.get(Bt.__renderTarget),yi=ne.get(xi.__renderTarget);E.bindFramebuffer(W.READ_FRAMEBUFFER,It.__webglFramebuffer),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let Oi=0;Oi<Ge;Oi++)Zi&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ne.get(R).__webglTexture,Q,ut+Oi),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ne.get(X).__webglTexture,Te,Ft+Oi)),W.blitFramebuffer($e,lt,Oe,Ee,Ye,Et,Oe,Ee,W.DEPTH_BUFFER_BIT,W.NEAREST);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||ne.has(R)){const Bt=ne.get(R),xi=ne.get(X);E.bindFramebuffer(W.READ_FRAMEBUFFER,ce),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,$);for(let It=0;It<Ge;It++)Zi?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Bt.__webglTexture,Q,ut+It):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Bt.__webglTexture,Q),Pt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,xi.__webglTexture,Te,Ft+It):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,xi.__webglTexture,Te),Q!==0?W.blitFramebuffer($e,lt,Oe,Ee,Ye,Et,Oe,Ee,W.COLOR_BUFFER_BIT,W.NEAREST):Pt?W.copyTexSubImage3D(Ue,Te,Ye,Et,Ft+It,$e,lt,Oe,Ee):W.copyTexSubImage2D(Ue,Te,Ye,Et,$e,lt,Oe,Ee);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Pt?R.isDataTexture||R.isData3DTexture?W.texSubImage3D(Ue,Te,Ye,Et,Ft,Oe,Ee,Ge,Lt,an,Yt.data):X.isCompressedArrayTexture?W.compressedTexSubImage3D(Ue,Te,Ye,Et,Ft,Oe,Ee,Ge,Lt,Yt.data):W.texSubImage3D(Ue,Te,Ye,Et,Ft,Oe,Ee,Ge,Lt,an,Yt):R.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Te,Ye,Et,Oe,Ee,Lt,an,Yt.data):R.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Te,Ye,Et,Yt.width,Yt.height,Lt,Yt.data):W.texSubImage2D(W.TEXTURE_2D,Te,Ye,Et,Oe,Ee,Lt,an,Yt);E.pixelStorei(W.UNPACK_ROW_LENGTH,xn),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,pt),E.pixelStorei(W.UNPACK_SKIP_PIXELS,Hn),E.pixelStorei(W.UNPACK_SKIP_ROWS,Gn),E.pixelStorei(W.UNPACK_SKIP_IMAGES,mt),Te===0&&X.generateMipmaps&&W.generateMipmap(Ue),E.unbindTexture()},this.initRenderTarget=function(R){ne.get(R).__webglFramebuffer===void 0&&fe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?fe.setTextureCube(R,0):R.isData3DTexture?fe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?fe.setTexture2DArray(R,0):fe.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){ae=0,K=0,G=null,E.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}const oL=`
  precision highp float;
  uniform float uTime;
  uniform vec2 uRes;
  uniform vec3 uBase;
  uniform vec3 uGlow;
  uniform vec3 uSheen;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p = p * 2.03 + vec2(1.7, 9.2);
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    vec2 p = uv * vec2(uRes.x / uRes.y, 1.0) * 1.6;
    float t = uTime * 0.045;

    // Layered flowing silk folds
    float q = fbm(p + vec2(t * 0.7, -t * 0.4));
    float r = fbm(p + q * 1.4 + vec2(-t, t * 0.6));
    float folds = fbm(p * 1.5 + r * 1.8 - vec2(t * 0.5, 0.0));

    vec3 col = uBase;
    col = mix(col, uGlow, smoothstep(0.32, 0.85, folds));
    col = mix(col, uSheen, pow(smoothstep(0.55, 0.95, r * folds + q * 0.25), 2.2) * 0.55);

    // Gentle vignette to seat the type
    float vig = smoothstep(1.25, 0.35, distance(uv, vec2(0.5, 0.48)));
    col *= mix(0.62, 1.0, vig);

    gl_FragColor = vec4(col, 1.0);
  }
`,aL=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;function AL({className:n}){const e=ot.useRef(null);return ot.useEffect(()=>{const t=e.current;if(!t)return;const r=window.matchMedia("(prefers-reduced-motion: reduce)").matches,o=new sL({antialias:!1,powerPreference:"low-power"});o.setPixelRatio(Math.min(window.devicePixelRatio,1.6)),t.appendChild(o.domElement);const l=new zR,u=new Xp(-1,1,1,-1,0,1),f={uTime:{value:0},uRes:{value:new xt(1,1)},uBase:{value:new _t("#141112")},uGlow:{value:new _t("#5b1825")},uSheen:{value:new _t("#a64a5a")}},d=new _i(new ul(2,2),new Ui({uniforms:f,vertexShader:aL,fragmentShader:oL}));l.add(d);const h=()=>{const{clientWidth:S,clientHeight:x}=t;o.setSize(S,x,!1),f.uRes.value.set(S,x)};h();const g=new ResizeObserver(h);g.observe(t);let v=0,m=!0;const y=performance.now(),M=()=>{m&&(f.uTime.value=(performance.now()-y)/1e3,o.render(l,u)),v=requestAnimationFrame(M)},A=new IntersectionObserver(([S])=>{m=S.isIntersecting});return A.observe(t),r?(f.uTime.value=12,o.render(l,u)):v=requestAnimationFrame(M),()=>{cancelAnimationFrame(v),A.disconnect(),g.disconnect(),d.geometry.dispose(),d.material.dispose(),o.dispose(),t.removeChild(o.domElement)}},[]),dt.jsx("div",{ref:e,"aria-hidden":"true",className:`pointer-events-none absolute inset-0 [&>canvas]:h-full [&>canvas]:w-full ${n??""}`})}const Oa="/e/",X_=[{label:"Oferta",anchor:"#oferta"},{label:"Proces",anchor:"#proces"},{label:"Zastosowania",anchor:"#zastosowania"},{label:"Konfigurator",page:"konfigurator.html"},{label:"Pakiety",anchor:"#pakiety"},{label:"Kontakt",anchor:"#kontakt"}];function RL({home:n=!0}){const e=f=>f.page?Oa+f.page:n?f.anchor:Oa+f.anchor,[t,r]=ot.useState(!1),[o,l]=ot.useState(!1);ot.useEffect(()=>{const f=()=>r(window.scrollY>32);return f(),window.addEventListener("scroll",f,{passive:!0}),()=>window.removeEventListener("scroll",f)},[]),ot.useEffect(()=>(document.documentElement.style.overflow=o?"hidden":"",()=>{document.documentElement.style.overflow=""}),[o]);const u=!t||o;return dt.jsxs("header",{className:`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${o?"border-b border-white/10 bg-vn-charcoal":t?"border-b border-vn-line/80 bg-vn-bg/85 backdrop-blur-md":"border-b border-transparent bg-transparent"}`,children:[dt.jsxs("nav",{"aria-label":"Nawigacja główna",className:"mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-[72px] md:px-10",children:[dt.jsxs("a",{href:n?"#top":Oa,"aria-label":"visNEX — początek strony",className:`wordmark text-[1.35rem] transition-colors duration-500 ${u?"text-vn-cream":"text-vn-charcoal"}`,onClick:()=>l(!1),children:[dt.jsx("em",{children:"vis"}),"NEX"]}),dt.jsxs("div",{className:"hidden items-center gap-9 lg:flex",children:[X_.map(f=>dt.jsx("a",{href:e(f),className:`spec transition-colors duration-300 ${u?"text-vn-cream/70 hover:text-vn-cream":"text-vn-muted hover:text-vn-charcoal"}`,children:f.label},f.label)),dt.jsx("a",{href:n?"#kontakt":Oa+"#kontakt",className:`btn !px-5 !py-3 ${u?"btn-cream":"btn-charcoal"}`,children:"Zamów wizualizacje"})]}),dt.jsxs("button",{type:"button","aria-label":o?"Zamknij menu":"Otwórz menu","aria-expanded":o,onClick:()=>l(!o),className:`flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden ${u?"text-vn-cream":"text-vn-charcoal"}`,children:[dt.jsx("span",{className:`h-px w-6 bg-current transition-transform duration-300 ${o?"translate-y-[3px] rotate-45":""}`}),dt.jsx("span",{className:`h-px w-6 bg-current transition-transform duration-300 ${o?"-translate-y-[3px] -rotate-45":""}`})]})]}),dt.jsx("div",{className:`absolute inset-x-0 top-full h-[calc(100dvh-4rem)] bg-vn-charcoal transition-opacity duration-300 lg:hidden ${o?"opacity-100":"pointer-events-none opacity-0"}`,children:dt.jsxs("div",{className:"flex h-full flex-col justify-between px-6 pb-10 pt-12",children:[dt.jsx("div",{className:"flex flex-col gap-2",children:X_.map((f,d)=>dt.jsx("a",{href:e(f),onClick:()=>l(!1),className:"border-b border-white/10 py-4 font-display text-3xl text-vn-cream",style:{transitionDelay:`${d*40}ms`},children:f.label},f.label))}),dt.jsx("a",{href:n?"#kontakt":Oa+"#kontakt",onClick:()=>l(!1),className:"btn btn-cream w-full",children:"Zamów wizualizacje"})]})})]})}const Y_=[.22,1,.36,1];function CL({children:n,delay:e=0,y:t=28,x:r=0,className:o,mask:l=!1}){const u=bA();return l&&!u?dt.jsx("div",{className:`overflow-hidden ${o??""}`,children:dt.jsx(z0.div,{initial:{y:"108%"},whileInView:{y:"0%"},viewport:{once:!0,margin:"-72px"},transition:{duration:1.1,delay:e,ease:Y_},children:n})}):dt.jsx(z0.div,{className:o,initial:u?{opacity:0}:{opacity:0,y:r?0:t,x:r},whileInView:u?{opacity:1}:{opacity:1,y:0,x:0},viewport:{once:!0,margin:"-72px"},transition:{duration:.9,delay:e,ease:Y_},children:n})}const bL=n=>"/e/"+n.replace(/^\//,"");function PL({left:n,right:e,tone:t="light"}){const r=t==="light"?"text-vn-muted":"text-vn-cream/55";return dt.jsxs("div",{className:`spec flex items-baseline justify-between gap-4 ${r}`,children:[dt.jsx("span",{children:n}),dt.jsx("span",{className:"text-right",children:e})]})}const lL=[{label:"Oferta",href:"#oferta"},{label:"Proces",href:"#proces"},{label:"Zastosowania",href:"#zastosowania"},{label:"Pakiety",href:"#pakiety"},{label:"FAQ",href:"#faq"}];function DL(){return dt.jsx("footer",{className:"bg-vn-charcoal text-vn-cream",children:dt.jsxs("div",{className:"mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20",children:[dt.jsxs("div",{className:"flex flex-col justify-between gap-12 md:flex-row md:items-start",children:[dt.jsxs("div",{children:[dt.jsxs("p",{className:"wordmark text-[1.6rem]",children:[dt.jsx("em",{children:"vis"}),"NEX"]}),dt.jsx("p",{className:"mt-4 max-w-[38ch] text-[0.9375rem] leading-relaxed text-vn-cream/55",children:"Wizualizacje AI dla stron, ofert i reklam marek wnętrzarskich. AI pod kontrolą człowieka."})]}),dt.jsx("nav",{"aria-label":"Nawigacja w stopce",className:"flex flex-col gap-3",children:lL.map(n=>dt.jsx("a",{href:n.href,className:"spec text-vn-cream/60 transition-colors hover:text-vn-cream",children:n.label},n.href))}),dt.jsxs("div",{className:"flex flex-col gap-3",children:[dt.jsx("p",{className:"spec text-vn-cream/40",children:"Kontakt"}),dt.jsx("a",{href:"mailto:kontakt@visnex.pl",className:"spec text-vn-cream/60 transition-colors hover:text-vn-cream",children:"kontakt@visnex.pl"})]})]}),dt.jsxs("div",{className:"mt-16 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row",children:[dt.jsxs("p",{className:"spec text-vn-cream/35",children:["© ",new Date().getFullYear()," ",dt.jsx("span",{className:"normal-case",children:"visNEX"}),". Wszelkie prawa zastrzeżone."]}),dt.jsx("p",{className:"spec text-vn-cream/35",children:"wizualizacje sprzedażowe · realizm · kontrola jakości"})]})]})})}export{T_ as $,mL as A,TL as B,wL as C,xt as D,Y_ as E,DL as F,YR as G,vL as H,zR as I,ll as J,yL as K,Zn as L,j_ as M,RL as N,EL as O,As as P,Go as Q,CL as R,AL as S,gL as T,_i as U,te as V,_L as W,Un as X,SL as Y,sL as Z,Ry as _,vr as a,ri as a0,Ky as a1,xL as a2,ul as a3,Wy as a4,_t as a5,yu as a6,Zy as a7,ML as a8,$y as a9,Mn as b,jr as c,yw as d,aE as e,zt as f,ot as g,Ln as h,_w as i,hL as j,Bv as k,bA as l,Za as m,jn as n,dt as o,Lo as p,z0 as q,oT as r,tT as s,bL as t,sE as u,wx as v,dL as w,PL as x,fL as y,cL as z};
