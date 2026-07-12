var aE=Object.defineProperty;var lE=(n,e,t)=>e in n?aE(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Qe=(n,e,t)=>lE(n,typeof e!="symbol"?e+"":e,t);import"./modulepreload-polyfill-B5Qt9EMX.js";var sd={exports:{}},Ca={},od={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0;function cE(){if(C0)return gt;C0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function m(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function S(O,K,Ie){this.props=O,this.context=K,this.refs=A,this.updater=Ie||y}S.prototype.isReactComponent={},S.prototype.setState=function(O,K){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,K,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function _(){}_.prototype=S.prototype;function D(O,K,Ie){this.props=O,this.context=K,this.refs=A,this.updater=Ie||y}var L=D.prototype=new _;L.constructor=D,M(L,S.prototype),L.isPureReactComponent=!0;var R=Array.isArray,N=Object.prototype.hasOwnProperty,P={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function w(O,K,Ie){var $e,Ve={},re=null,xe=null;if(K!=null)for($e in K.ref!==void 0&&(xe=K.ref),K.key!==void 0&&(re=""+K.key),K)N.call(K,$e)&&!k.hasOwnProperty($e)&&(Ve[$e]=K[$e]);var me=arguments.length-2;if(me===1)Ve.children=Ie;else if(1<me){for(var Ue=Array(me),et=0;et<me;et++)Ue[et]=arguments[et+2];Ve.children=Ue}if(O&&O.defaultProps)for($e in me=O.defaultProps,me)Ve[$e]===void 0&&(Ve[$e]=me[$e]);return{$$typeof:n,type:O,key:re,ref:xe,props:Ve,_owner:P.current}}function U(O,K){return{$$typeof:n,type:O.type,key:K,ref:O.ref,props:O.props,_owner:O._owner}}function H(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function B(O){var K={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ie){return K[Ie]})}var $=/\/+/g;function fe(O,K){return typeof O=="object"&&O!==null&&O.key!=null?B(""+O.key):K.toString(36)}function de(O,K,Ie,$e,Ve){var re=typeof O;(re==="undefined"||re==="boolean")&&(O=null);var xe=!1;if(O===null)xe=!0;else switch(re){case"string":case"number":xe=!0;break;case"object":switch(O.$$typeof){case n:case e:xe=!0}}if(xe)return xe=O,Ve=Ve(xe),O=$e===""?"."+fe(xe,0):$e,R(Ve)?(Ie="",O!=null&&(Ie=O.replace($,"$&/")+"/"),de(Ve,K,Ie,"",function(et){return et})):Ve!=null&&(H(Ve)&&(Ve=U(Ve,Ie+(!Ve.key||xe&&xe.key===Ve.key?"":(""+Ve.key).replace($,"$&/")+"/")+O)),K.push(Ve)),1;if(xe=0,$e=$e===""?".":$e+":",R(O))for(var me=0;me<O.length;me++){re=O[me];var Ue=$e+fe(re,me);xe+=de(re,K,Ie,Ue,Ve)}else if(Ue=m(O),typeof Ue=="function")for(O=Ue.call(O),me=0;!(re=O.next()).done;)re=re.value,Ue=$e+fe(re,me++),xe+=de(re,K,Ie,Ue,Ve);else if(re==="object")throw K=String(O),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return xe}function Q(O,K,Ie){if(O==null)return O;var $e=[],Ve=0;return de(O,$e,"","",function(re){return K.call(Ie,re,Ve++)}),$e}function ce(O){if(O._status===-1){var K=O._result;K=K(),K.then(function(Ie){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ie)},function(Ie){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ie)}),O._status===-1&&(O._status=0,O._result=K)}if(O._status===1)return O._result.default;throw O._result}var q={current:null},W={transition:null},ae={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:W,ReactCurrentOwner:P};function le(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:Q,forEach:function(O,K,Ie){Q(O,function(){K.apply(this,arguments)},Ie)},count:function(O){var K=0;return Q(O,function(){K++}),K},toArray:function(O){return Q(O,function(K){return K})||[]},only:function(O){if(!H(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},gt.Component=S,gt.Fragment=t,gt.Profiler=o,gt.PureComponent=D,gt.StrictMode=r,gt.Suspense=d,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,gt.act=le,gt.cloneElement=function(O,K,Ie){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var $e=M({},O.props),Ve=O.key,re=O.ref,xe=O._owner;if(K!=null){if(K.ref!==void 0&&(re=K.ref,xe=P.current),K.key!==void 0&&(Ve=""+K.key),O.type&&O.type.defaultProps)var me=O.type.defaultProps;for(Ue in K)N.call(K,Ue)&&!k.hasOwnProperty(Ue)&&($e[Ue]=K[Ue]===void 0&&me!==void 0?me[Ue]:K[Ue])}var Ue=arguments.length-2;if(Ue===1)$e.children=Ie;else if(1<Ue){me=Array(Ue);for(var et=0;et<Ue;et++)me[et]=arguments[et+2];$e.children=me}return{$$typeof:n,type:O.type,key:Ve,ref:re,props:$e,_owner:xe}},gt.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:a,_context:O},O.Consumer=O},gt.createElement=w,gt.createFactory=function(O){var K=w.bind(null,O);return K.type=O,K},gt.createRef=function(){return{current:null}},gt.forwardRef=function(O){return{$$typeof:f,render:O}},gt.isValidElement=H,gt.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:ce}},gt.memo=function(O,K){return{$$typeof:h,type:O,compare:K===void 0?null:K}},gt.startTransition=function(O){var K=W.transition;W.transition={};try{O()}finally{W.transition=K}},gt.unstable_act=le,gt.useCallback=function(O,K){return q.current.useCallback(O,K)},gt.useContext=function(O){return q.current.useContext(O)},gt.useDebugValue=function(){},gt.useDeferredValue=function(O){return q.current.useDeferredValue(O)},gt.useEffect=function(O,K){return q.current.useEffect(O,K)},gt.useId=function(){return q.current.useId()},gt.useImperativeHandle=function(O,K,Ie){return q.current.useImperativeHandle(O,K,Ie)},gt.useInsertionEffect=function(O,K){return q.current.useInsertionEffect(O,K)},gt.useLayoutEffect=function(O,K){return q.current.useLayoutEffect(O,K)},gt.useMemo=function(O,K){return q.current.useMemo(O,K)},gt.useReducer=function(O,K,Ie){return q.current.useReducer(O,K,Ie)},gt.useRef=function(O){return q.current.useRef(O)},gt.useState=function(O){return q.current.useState(O)},gt.useSyncExternalStore=function(O,K,Ie){return q.current.useSyncExternalStore(O,K,Ie)},gt.useTransition=function(){return q.current.useTransition()},gt.version="18.3.1",gt}var P0;function fp(){return P0||(P0=1,od.exports=cE()),od.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0;function uE(){if(D0)return Ca;D0=1;var n=fp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,h){var g,v={},m=null,y=null;h!==void 0&&(m=""+h),d.key!==void 0&&(m=""+d.key),d.ref!==void 0&&(y=d.ref);for(g in d)r.call(d,g)&&!a.hasOwnProperty(g)&&(v[g]=d[g]);if(f&&f.defaultProps)for(g in d=f.defaultProps,d)v[g]===void 0&&(v[g]=d[g]);return{$$typeof:e,type:f,key:m,ref:y,props:v,_owner:o.current}}return Ca.Fragment=t,Ca.jsx=c,Ca.jsxs=c,Ca}var N0;function fE(){return N0||(N0=1,sd.exports=uE()),sd.exports}var C=fE(),ze=fp(),mc={},ad={exports:{}},$n={},ld={exports:{}},cd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0;function dE(){return L0||(L0=1,(function(n){function e(W,ae){var le=W.length;W.push(ae);e:for(;0<le;){var O=le-1>>>1,K=W[O];if(0<o(K,ae))W[O]=ae,W[le]=K,le=O;else break e}}function t(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var ae=W[0],le=W.pop();if(le!==ae){W[0]=le;e:for(var O=0,K=W.length,Ie=K>>>1;O<Ie;){var $e=2*(O+1)-1,Ve=W[$e],re=$e+1,xe=W[re];if(0>o(Ve,le))re<K&&0>o(xe,Ve)?(W[O]=xe,W[re]=le,O=re):(W[O]=Ve,W[$e]=le,O=$e);else if(re<K&&0>o(xe,le))W[O]=xe,W[re]=le,O=re;else break e}}return ae}function o(W,ae){var le=W.sortIndex-ae.sortIndex;return le!==0?le:W.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,f=c.now();n.unstable_now=function(){return c.now()-f}}var d=[],h=[],g=1,v=null,m=3,y=!1,M=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(W){for(var ae=t(h);ae!==null;){if(ae.callback===null)r(h);else if(ae.startTime<=W)r(h),ae.sortIndex=ae.expirationTime,e(d,ae);else break;ae=t(h)}}function R(W){if(A=!1,L(W),!M)if(t(d)!==null)M=!0,ce(N);else{var ae=t(h);ae!==null&&q(R,ae.startTime-W)}}function N(W,ae){M=!1,A&&(A=!1,_(w),w=-1),y=!0;var le=m;try{for(L(ae),v=t(d);v!==null&&(!(v.expirationTime>ae)||W&&!B());){var O=v.callback;if(typeof O=="function"){v.callback=null,m=v.priorityLevel;var K=O(v.expirationTime<=ae);ae=n.unstable_now(),typeof K=="function"?v.callback=K:v===t(d)&&r(d),L(ae)}else r(d);v=t(d)}if(v!==null)var Ie=!0;else{var $e=t(h);$e!==null&&q(R,$e.startTime-ae),Ie=!1}return Ie}finally{v=null,m=le,y=!1}}var P=!1,k=null,w=-1,U=5,H=-1;function B(){return!(n.unstable_now()-H<U)}function $(){if(k!==null){var W=n.unstable_now();H=W;var ae=!0;try{ae=k(!0,W)}finally{ae?fe():(P=!1,k=null)}}else P=!1}var fe;if(typeof D=="function")fe=function(){D($)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,Q=de.port2;de.port1.onmessage=$,fe=function(){Q.postMessage(null)}}else fe=function(){S($,0)};function ce(W){k=W,P||(P=!0,fe())}function q(W,ae){w=S(function(){W(n.unstable_now())},ae)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(W){W.callback=null},n.unstable_continueExecution=function(){M||y||(M=!0,ce(N))},n.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<W?Math.floor(1e3/W):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(W){switch(m){case 1:case 2:case 3:var ae=3;break;default:ae=m}var le=m;m=ae;try{return W()}finally{m=le}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(W,ae){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var le=m;m=W;try{return ae()}finally{m=le}},n.unstable_scheduleCallback=function(W,ae,le){var O=n.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?O+le:O):le=O,W){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=le+K,W={id:g++,callback:ae,priorityLevel:W,startTime:le,expirationTime:K,sortIndex:-1},le>O?(W.sortIndex=le,e(h,W),t(d)===null&&W===t(h)&&(A?(_(w),w=-1):A=!0,q(R,le-O))):(W.sortIndex=K,e(d,W),M||y||(M=!0,ce(N))),W},n.unstable_shouldYield=B,n.unstable_wrapCallback=function(W){var ae=m;return function(){var le=m;m=ae;try{return W.apply(this,arguments)}finally{m=le}}}})(cd)),cd}var I0;function hE(){return I0||(I0=1,ld.exports=dE()),ld.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0;function pE(){if(U0)return $n;U0=1;var n=fp(),e=hE();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){c(i,s),c(i+"Capture",s)}function c(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function m(i){return d.call(v,i)?!0:d.call(g,i)?!1:h.test(i)?v[i]=!0:(g[i]=!0,!1)}function y(i,s,l,u){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return u?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,l,u){if(s===null||typeof s>"u"||y(i,s,l,u))return!0;if(u)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function A(i,s,l,u,p,x,T){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=x,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new A(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new A(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new A(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new A(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new A(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new A(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new A(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new A(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new A(i,5,!1,i.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function D(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(_,D);S[s]=new A(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(_,D);S[s]=new A(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(_,D);S[s]=new A(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new A(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new A(i,1,!1,i.toLowerCase(),null,!0,!0)});function L(i,s,l,u){var p=S.hasOwnProperty(s)?S[s]:null;(p!==null?p.type!==0:u||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,p,u)&&(l=null),u||p===null?m(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,u=p.attributeNamespace,l===null?i.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,u?i.setAttributeNS(u,s,l):i.setAttribute(s,l))))}var R=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),P=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),B=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),fe=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),W=Symbol.iterator;function ae(i){return i===null||typeof i!="object"?null:(i=W&&i[W]||i["@@iterator"],typeof i=="function"?i:null)}var le=Object.assign,O;function K(i){if(O===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+i}var Ie=!1;function $e(i,s){if(!i||Ie)return"";Ie=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(oe){var u=oe}Reflect.construct(i,[],s)}else{try{s.call()}catch(oe){u=oe}i.call(s.prototype)}else{try{throw Error()}catch(oe){u=oe}i()}}catch(oe){if(oe&&u&&typeof oe.stack=="string"){for(var p=oe.stack.split(`
`),x=u.stack.split(`
`),T=p.length-1,F=x.length-1;1<=T&&0<=F&&p[T]!==x[F];)F--;for(;1<=T&&0<=F;T--,F--)if(p[T]!==x[F]){if(T!==1||F!==1)do if(T--,F--,0>F||p[T]!==x[F]){var z=`
`+p[T].replace(" at new "," at ");return i.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",i.displayName)),z}while(1<=T&&0<=F);break}}}finally{Ie=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?K(i):""}function Ve(i){switch(i.tag){case 5:return K(i.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return i=$e(i.type,!1),i;case 11:return i=$e(i.type.render,!1),i;case 1:return i=$e(i.type,!0),i;default:return""}}function re(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case k:return"Fragment";case P:return"Portal";case U:return"Profiler";case w:return"StrictMode";case fe:return"Suspense";case de:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case B:return(i.displayName||"Context")+".Consumer";case H:return(i._context.displayName||"Context")+".Provider";case $:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Q:return s=i.displayName||null,s!==null?s:re(i.type)||"Memo";case ce:s=i._payload,i=i._init;try{return re(i(s))}catch{}}return null}function xe(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(s);case 8:return s===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function me(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ue(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function et(i){var s=Ue(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),u=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,x=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(T){u=""+T,x.call(this,T)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function tt(i){i._valueTracker||(i._valueTracker=et(i))}function Gt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),u="";return i&&(u=Ue(i)?i.checked?"true":"false":i.value),i=u,i!==l?(s.setValue(i),!0):!1}function dt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Pt(i,s){var l=s.checked;return le({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function St(i,s){var l=s.defaultValue==null?"":s.defaultValue,u=s.checked!=null?s.checked:s.defaultChecked;l=me(s.value!=null?s.value:l),i._wrapperState={initialChecked:u,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function vt(i,s){s=s.checked,s!=null&&L(i,"checked",s,!1)}function Wt(i,s){vt(i,s);var l=me(s.value),u=s.type;if(l!=null)u==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(u==="submit"||u==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?en(i,s.type,l):s.hasOwnProperty("defaultValue")&&en(i,s.type,me(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Jt(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var u=s.type;if(!(u!=="submit"&&u!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function en(i,s,l){(s!=="number"||dt(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var qt=Array.isArray;function Lt(i,s,l,u){if(i=i.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=s.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&u&&(i[l].defaultSelected=!0)}else{for(l=""+me(l),s=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,u&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function jt(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function j(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(qt(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:me(l)}}function Mn(i,s){var l=me(s.value),u=me(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),u!=null&&(i.defaultValue=""+u)}function At(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function I(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?I(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Y,ne=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,u,p){MSApp.execUnsafeLocalFunction(function(){return i(s,l,u,p)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Y=Y||document.createElement("div"),Y.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Y.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function ue(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Re=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(i){Re.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Me[s]=Me[i]})});function he(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Me.hasOwnProperty(i)&&Me[i]?(""+s).trim():s+"px"}function ge(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var u=l.indexOf("--")===0,p=he(l,s[l],u);l==="float"&&(l="cssFloat"),u?i.setProperty(l,p):i[l]=p}}var Pe=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ye(i,s){if(s){if(Pe[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function De(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function Je(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var nt=null,ot=null,V=null;function Ae(i){if(i=pa(i)){if(typeof nt!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Pl(s),nt(i.stateNode,i.type,s))}}function pe(i){ot?V?V.push(i):V=[i]:ot=i}function Ce(){if(ot){var i=ot,s=V;if(V=ot=null,Ae(i),s)for(i=0;i<s.length;i++)Ae(s[i])}}function Ne(i,s){return i(s)}function ve(){}var We=!1;function He(i,s,l){if(We)return i(s,l);We=!0;try{return Ne(i,s,l)}finally{We=!1,(ot!==null||V!==null)&&(ve(),Ce())}}function Ot(i,s){var l=i.stateNode;if(l===null)return null;var u=Pl(l);if(u===null)return null;l=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Dt=!1;if(f)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){Dt=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{Dt=!1}function oi(i,s,l,u,p,x,T,F,z){var oe=Array.prototype.slice.call(arguments,3);try{s.apply(l,oe)}catch(ye){this.onError(ye)}}var ss=!1,Ws=null,os=!1,as=null,bu={onError:function(i){ss=!0,Ws=i}};function dl(i,s,l,u,p,x,T,F,z){ss=!1,Ws=null,oi.apply(bu,arguments)}function hl(i,s,l,u,p,x,T,F,z){if(dl.apply(this,arguments),ss){if(ss){var oe=Ws;ss=!1,Ws=null}else throw Error(t(198));os||(os=!0,as=oe)}}function Fn(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function js(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function qo(i){if(Fn(i)!==i)throw Error(t(188))}function pl(i){var s=i.alternate;if(!s){if(s=Fn(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,u=s;;){var p=l.return;if(p===null)break;var x=p.alternate;if(x===null){if(u=p.return,u!==null){l=u;continue}break}if(p.child===x.child){for(x=p.child;x;){if(x===l)return qo(p),i;if(x===u)return qo(p),s;x=x.sibling}throw Error(t(188))}if(l.return!==u.return)l=p,u=x;else{for(var T=!1,F=p.child;F;){if(F===l){T=!0,l=p,u=x;break}if(F===u){T=!0,u=p,l=x;break}F=F.sibling}if(!T){for(F=x.child;F;){if(F===l){T=!0,l=x,u=p;break}if(F===u){T=!0,u=x,l=p;break}F=F.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==u)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function ls(i){return i=pl(i),i!==null?$o(i):null}function $o(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=$o(i);if(s!==null)return s;i=i.sibling}return null}var cs=e.unstable_scheduleCallback,Ko=e.unstable_cancelCallback,ml=e.unstable_shouldYield,Ru=e.unstable_requestPaint,$t=e.unstable_now,Cu=e.unstable_getCurrentPriorityLevel,Zo=e.unstable_ImmediatePriority,b=e.unstable_UserBlockingPriority,X=e.unstable_NormalPriority,se=e.unstable_LowPriority,ee=e.unstable_IdlePriority,J=null,Te=null;function ke(i){if(Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(J,i,void 0,(i.current.flags&128)===128)}catch{}}var we=Math.clz32?Math.clz32:ct,je=Math.log,Ze=Math.LN2;function ct(i){return i>>>=0,i===0?32:31-(je(i)/Ze|0)|0}var ut=64,qe=4194304;function Mt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function kt(i,s){var l=i.pendingLanes;if(l===0)return 0;var u=0,p=i.suspendedLanes,x=i.pingedLanes,T=l&268435455;if(T!==0){var F=T&~p;F!==0?u=Mt(F):(x&=T,x!==0&&(u=Mt(x)))}else T=l&~p,T!==0?u=Mt(T):x!==0&&(u=Mt(x));if(u===0)return 0;if(s!==0&&s!==u&&(s&p)===0&&(p=u&-u,x=s&-s,p>=x||p===16&&(x&4194240)!==0))return s;if((u&4)!==0&&(u|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=u;0<s;)l=31-we(s),p=1<<l,u|=i[l],s&=~p;return u}function Xt(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function It(i,s){for(var l=i.suspendedLanes,u=i.pingedLanes,p=i.expirationTimes,x=i.pendingLanes;0<x;){var T=31-we(x),F=1<<T,z=p[T];z===-1?((F&l)===0||(F&u)!==0)&&(p[T]=Xt(F,s)):z<=s&&(i.expiredLanes|=F),x&=~F}}function ln(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Fe(){var i=ut;return ut<<=1,(ut&4194240)===0&&(ut=64),i}function En(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function pt(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-we(s),i[s]=l}function Hn(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var u=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-we(l),x=1<<p;s[p]=0,u[p]=-1,i[p]=-1,l&=~x}}function Gn(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var u=31-we(l),p=1<<u;p&s|i[u]&s&&(i[u]|=s),l&=~p}}var mt=0;function tr(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Nt,Bt,xi,Ut,_i,Fi=!1,us=[],Ar=null,br=null,Rr=null,Qo=new Map,Jo=new Map,Cr=[],CS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dm(i,s){switch(i){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":Qo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(s.pointerId)}}function ea(i,s,l,u,p,x){return i===null||i.nativeEvent!==x?(i={blockedOn:s,domEventName:l,eventSystemFlags:u,nativeEvent:x,targetContainers:[p]},s!==null&&(s=pa(s),s!==null&&Bt(s)),i):(i.eventSystemFlags|=u,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function PS(i,s,l,u,p){switch(s){case"focusin":return Ar=ea(Ar,i,s,l,u,p),!0;case"dragenter":return br=ea(br,i,s,l,u,p),!0;case"mouseover":return Rr=ea(Rr,i,s,l,u,p),!0;case"pointerover":var x=p.pointerId;return Qo.set(x,ea(Qo.get(x)||null,i,s,l,u,p)),!0;case"gotpointercapture":return x=p.pointerId,Jo.set(x,ea(Jo.get(x)||null,i,s,l,u,p)),!0}return!1}function hm(i){var s=fs(i.target);if(s!==null){var l=Fn(s);if(l!==null){if(s=l.tag,s===13){if(s=js(l),s!==null){i.blockedOn=s,_i(i.priority,function(){xi(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function gl(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Du(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var u=new l.constructor(l.type,l);be=u,l.target.dispatchEvent(u),be=null}else return s=pa(l),s!==null&&Bt(s),i.blockedOn=l,!1;s.shift()}return!0}function pm(i,s,l){gl(i)&&l.delete(s)}function DS(){Fi=!1,Ar!==null&&gl(Ar)&&(Ar=null),br!==null&&gl(br)&&(br=null),Rr!==null&&gl(Rr)&&(Rr=null),Qo.forEach(pm),Jo.forEach(pm)}function ta(i,s){i.blockedOn===s&&(i.blockedOn=null,Fi||(Fi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,DS)))}function na(i){function s(p){return ta(p,i)}if(0<us.length){ta(us[0],i);for(var l=1;l<us.length;l++){var u=us[l];u.blockedOn===i&&(u.blockedOn=null)}}for(Ar!==null&&ta(Ar,i),br!==null&&ta(br,i),Rr!==null&&ta(Rr,i),Qo.forEach(s),Jo.forEach(s),l=0;l<Cr.length;l++)u=Cr[l],u.blockedOn===i&&(u.blockedOn=null);for(;0<Cr.length&&(l=Cr[0],l.blockedOn===null);)hm(l),l.blockedOn===null&&Cr.shift()}var Xs=R.ReactCurrentBatchConfig,vl=!0;function NS(i,s,l,u){var p=mt,x=Xs.transition;Xs.transition=null;try{mt=1,Pu(i,s,l,u)}finally{mt=p,Xs.transition=x}}function LS(i,s,l,u){var p=mt,x=Xs.transition;Xs.transition=null;try{mt=4,Pu(i,s,l,u)}finally{mt=p,Xs.transition=x}}function Pu(i,s,l,u){if(vl){var p=Du(i,s,l,u);if(p===null)qu(i,s,u,xl,l),dm(i,u);else if(PS(p,i,s,l,u))u.stopPropagation();else if(dm(i,u),s&4&&-1<CS.indexOf(i)){for(;p!==null;){var x=pa(p);if(x!==null&&Nt(x),x=Du(i,s,l,u),x===null&&qu(i,s,u,xl,l),x===p)break;p=x}p!==null&&u.stopPropagation()}else qu(i,s,u,null,l)}}var xl=null;function Du(i,s,l,u){if(xl=null,i=Je(u),i=fs(i),i!==null)if(s=Fn(i),s===null)i=null;else if(l=s.tag,l===13){if(i=js(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return xl=i,null}function mm(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cu()){case Zo:return 1;case b:return 4;case X:case se:return 16;case ee:return 536870912;default:return 16}default:return 16}}var Pr=null,Nu=null,_l=null;function gm(){if(_l)return _l;var i,s=Nu,l=s.length,u,p="value"in Pr?Pr.value:Pr.textContent,x=p.length;for(i=0;i<l&&s[i]===p[i];i++);var T=l-i;for(u=1;u<=T&&s[l-u]===p[x-u];u++);return _l=p.slice(i,1<u?1-u:void 0)}function yl(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function Sl(){return!0}function vm(){return!1}function Qn(i){function s(l,u,p,x,T){this._reactName=l,this._targetInst=p,this.type=u,this.nativeEvent=x,this.target=T,this.currentTarget=null;for(var F in i)i.hasOwnProperty(F)&&(l=i[F],this[F]=l?l(x):x[F]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Sl:vm,this.isPropagationStopped=vm,this}return le(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),s}var Ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lu=Qn(Ys),ia=le({},Ys,{view:0,detail:0}),IS=Qn(ia),Iu,Uu,ra,Ml=le({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ou,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==ra&&(ra&&i.type==="mousemove"?(Iu=i.screenX-ra.screenX,Uu=i.screenY-ra.screenY):Uu=Iu=0,ra=i),Iu)},movementY:function(i){return"movementY"in i?i.movementY:Uu}}),xm=Qn(Ml),US=le({},Ml,{dataTransfer:0}),FS=Qn(US),OS=le({},ia,{relatedTarget:0}),Fu=Qn(OS),kS=le({},Ys,{animationName:0,elapsedTime:0,pseudoElement:0}),zS=Qn(kS),BS=le({},Ys,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),VS=Qn(BS),HS=le({},Ys,{data:0}),_m=Qn(HS),GS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},WS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function XS(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=jS[i])?!!s[i]:!1}function Ou(){return XS}var YS=le({},ia,{key:function(i){if(i.key){var s=GS[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=yl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?WS[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ou,charCode:function(i){return i.type==="keypress"?yl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?yl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),qS=Qn(YS),$S=le({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ym=Qn($S),KS=le({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ou}),ZS=Qn(KS),QS=le({},Ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),JS=Qn(QS),eM=le({},Ml,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),tM=Qn(eM),nM=[9,13,27,32],ku=f&&"CompositionEvent"in window,sa=null;f&&"documentMode"in document&&(sa=document.documentMode);var iM=f&&"TextEvent"in window&&!sa,Sm=f&&(!ku||sa&&8<sa&&11>=sa),Mm=" ",Em=!1;function wm(i,s){switch(i){case"keyup":return nM.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tm(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var qs=!1;function rM(i,s){switch(i){case"compositionend":return Tm(s);case"keypress":return s.which!==32?null:(Em=!0,Mm);case"textInput":return i=s.data,i===Mm&&Em?null:i;default:return null}}function sM(i,s){if(qs)return i==="compositionend"||!ku&&wm(i,s)?(i=gm(),_l=Nu=Pr=null,qs=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Sm&&s.locale!=="ko"?null:s.data;default:return null}}var oM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Am(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!oM[i.type]:s==="textarea"}function bm(i,s,l,u){pe(u),s=bl(s,"onChange"),0<s.length&&(l=new Lu("onChange","change",null,l,u),i.push({event:l,listeners:s}))}var oa=null,aa=null;function aM(i){jm(i,0)}function El(i){var s=Js(i);if(Gt(s))return i}function lM(i,s){if(i==="change")return s}var Rm=!1;if(f){var zu;if(f){var Bu="oninput"in document;if(!Bu){var Cm=document.createElement("div");Cm.setAttribute("oninput","return;"),Bu=typeof Cm.oninput=="function"}zu=Bu}else zu=!1;Rm=zu&&(!document.documentMode||9<document.documentMode)}function Pm(){oa&&(oa.detachEvent("onpropertychange",Dm),aa=oa=null)}function Dm(i){if(i.propertyName==="value"&&El(aa)){var s=[];bm(s,aa,i,Je(i)),He(aM,s)}}function cM(i,s,l){i==="focusin"?(Pm(),oa=s,aa=l,oa.attachEvent("onpropertychange",Dm)):i==="focusout"&&Pm()}function uM(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return El(aa)}function fM(i,s){if(i==="click")return El(s)}function dM(i,s){if(i==="input"||i==="change")return El(s)}function hM(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var yi=typeof Object.is=="function"?Object.is:hM;function la(i,s){if(yi(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),u=Object.keys(s);if(l.length!==u.length)return!1;for(u=0;u<l.length;u++){var p=l[u];if(!d.call(s,p)||!yi(i[p],s[p]))return!1}return!0}function Nm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Lm(i,s){var l=Nm(i);i=0;for(var u;l;){if(l.nodeType===3){if(u=i+l.textContent.length,i<=s&&u>=s)return{node:l,offset:s-i};i=u}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Nm(l)}}function Im(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?Im(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Um(){for(var i=window,s=dt();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=dt(i.document)}return s}function Vu(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function pM(i){var s=Um(),l=i.focusedElem,u=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&Im(l.ownerDocument.documentElement,l)){if(u!==null&&Vu(l)){if(s=u.start,i=u.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,x=Math.min(u.start,p);u=u.end===void 0?x:Math.min(u.end,p),!i.extend&&x>u&&(p=u,u=x,x=p),p=Lm(l,x);var T=Lm(l,u);p&&T&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==T.node||i.focusOffset!==T.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),x>u?(i.addRange(s),i.extend(T.node,T.offset)):(s.setEnd(T.node,T.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var mM=f&&"documentMode"in document&&11>=document.documentMode,$s=null,Hu=null,ca=null,Gu=!1;function Fm(i,s,l){var u=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Gu||$s==null||$s!==dt(u)||(u=$s,"selectionStart"in u&&Vu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ca&&la(ca,u)||(ca=u,u=bl(Hu,"onSelect"),0<u.length&&(s=new Lu("onSelect","select",null,s,l),i.push({event:s,listeners:u}),s.target=$s)))}function wl(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var Ks={animationend:wl("Animation","AnimationEnd"),animationiteration:wl("Animation","AnimationIteration"),animationstart:wl("Animation","AnimationStart"),transitionend:wl("Transition","TransitionEnd")},Wu={},Om={};f&&(Om=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function Tl(i){if(Wu[i])return Wu[i];if(!Ks[i])return i;var s=Ks[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in Om)return Wu[i]=s[l];return i}var km=Tl("animationend"),zm=Tl("animationiteration"),Bm=Tl("animationstart"),Vm=Tl("transitionend"),Hm=new Map,Gm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(i,s){Hm.set(i,s),a(s,[i])}for(var ju=0;ju<Gm.length;ju++){var Xu=Gm[ju],gM=Xu.toLowerCase(),vM=Xu[0].toUpperCase()+Xu.slice(1);Dr(gM,"on"+vM)}Dr(km,"onAnimationEnd"),Dr(zm,"onAnimationIteration"),Dr(Bm,"onAnimationStart"),Dr("dblclick","onDoubleClick"),Dr("focusin","onFocus"),Dr("focusout","onBlur"),Dr(Vm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xM=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function Wm(i,s,l){var u=i.type||"unknown-event";i.currentTarget=l,hl(u,s,void 0,i),i.currentTarget=null}function jm(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var u=i[l],p=u.event;u=u.listeners;e:{var x=void 0;if(s)for(var T=u.length-1;0<=T;T--){var F=u[T],z=F.instance,oe=F.currentTarget;if(F=F.listener,z!==x&&p.isPropagationStopped())break e;Wm(p,F,oe),x=z}else for(T=0;T<u.length;T++){if(F=u[T],z=F.instance,oe=F.currentTarget,F=F.listener,z!==x&&p.isPropagationStopped())break e;Wm(p,F,oe),x=z}}}if(os)throw i=as,os=!1,as=null,i}function Vt(i,s){var l=s[ef];l===void 0&&(l=s[ef]=new Set);var u=i+"__bubble";l.has(u)||(Xm(s,i,2,!1),l.add(u))}function Yu(i,s,l){var u=0;s&&(u|=4),Xm(l,i,u,s)}var Al="_reactListening"+Math.random().toString(36).slice(2);function fa(i){if(!i[Al]){i[Al]=!0,r.forEach(function(l){l!=="selectionchange"&&(xM.has(l)||Yu(l,!1,i),Yu(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Al]||(s[Al]=!0,Yu("selectionchange",!1,s))}}function Xm(i,s,l,u){switch(mm(s)){case 1:var p=NS;break;case 4:p=LS;break;default:p=Pu}l=p.bind(null,s,l,i),p=void 0,!Dt||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),u?p!==void 0?i.addEventListener(s,l,{capture:!0,passive:p}):i.addEventListener(s,l,!0):p!==void 0?i.addEventListener(s,l,{passive:p}):i.addEventListener(s,l,!1)}function qu(i,s,l,u,p){var x=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var F=u.stateNode.containerInfo;if(F===p||F.nodeType===8&&F.parentNode===p)break;if(T===4)for(T=u.return;T!==null;){var z=T.tag;if((z===3||z===4)&&(z=T.stateNode.containerInfo,z===p||z.nodeType===8&&z.parentNode===p))return;T=T.return}for(;F!==null;){if(T=fs(F),T===null)return;if(z=T.tag,z===5||z===6){u=x=T;continue e}F=F.parentNode}}u=u.return}He(function(){var oe=x,ye=Je(l),Se=[];e:{var _e=Hm.get(i);if(_e!==void 0){var Oe=Lu,Ge=i;switch(i){case"keypress":if(yl(l)===0)break e;case"keydown":case"keyup":Oe=qS;break;case"focusin":Ge="focus",Oe=Fu;break;case"focusout":Ge="blur",Oe=Fu;break;case"beforeblur":case"afterblur":Oe=Fu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=xm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=FS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=ZS;break;case km:case zm:case Bm:Oe=zS;break;case Vm:Oe=JS;break;case"scroll":Oe=IS;break;case"wheel":Oe=tM;break;case"copy":case"cut":case"paste":Oe=VS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=ym}var Xe=(s&4)!==0,on=!Xe&&i==="scroll",Z=Xe?_e!==null?_e+"Capture":null:_e;Xe=[];for(var G=oe,te;G!==null;){te=G;var Ee=te.stateNode;if(te.tag===5&&Ee!==null&&(te=Ee,Z!==null&&(Ee=Ot(G,Z),Ee!=null&&Xe.push(da(G,Ee,te)))),on)break;G=G.return}0<Xe.length&&(_e=new Oe(_e,Ge,null,l,ye),Se.push({event:_e,listeners:Xe}))}}if((s&7)===0){e:{if(_e=i==="mouseover"||i==="pointerover",Oe=i==="mouseout"||i==="pointerout",_e&&l!==be&&(Ge=l.relatedTarget||l.fromElement)&&(fs(Ge)||Ge[nr]))break e;if((Oe||_e)&&(_e=ye.window===ye?ye:(_e=ye.ownerDocument)?_e.defaultView||_e.parentWindow:window,Oe?(Ge=l.relatedTarget||l.toElement,Oe=oe,Ge=Ge?fs(Ge):null,Ge!==null&&(on=Fn(Ge),Ge!==on||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(Oe=null,Ge=oe),Oe!==Ge)){if(Xe=xm,Ee="onMouseLeave",Z="onMouseEnter",G="mouse",(i==="pointerout"||i==="pointerover")&&(Xe=ym,Ee="onPointerLeave",Z="onPointerEnter",G="pointer"),on=Oe==null?_e:Js(Oe),te=Ge==null?_e:Js(Ge),_e=new Xe(Ee,G+"leave",Oe,l,ye),_e.target=on,_e.relatedTarget=te,Ee=null,fs(ye)===oe&&(Xe=new Xe(Z,G+"enter",Ge,l,ye),Xe.target=te,Xe.relatedTarget=on,Ee=Xe),on=Ee,Oe&&Ge)t:{for(Xe=Oe,Z=Ge,G=0,te=Xe;te;te=Zs(te))G++;for(te=0,Ee=Z;Ee;Ee=Zs(Ee))te++;for(;0<G-te;)Xe=Zs(Xe),G--;for(;0<te-G;)Z=Zs(Z),te--;for(;G--;){if(Xe===Z||Z!==null&&Xe===Z.alternate)break t;Xe=Zs(Xe),Z=Zs(Z)}Xe=null}else Xe=null;Oe!==null&&Ym(Se,_e,Oe,Xe,!1),Ge!==null&&on!==null&&Ym(Se,on,Ge,Xe,!0)}}e:{if(_e=oe?Js(oe):window,Oe=_e.nodeName&&_e.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&_e.type==="file")var Ke=lM;else if(Am(_e))if(Rm)Ke=dM;else{Ke=uM;var it=cM}else(Oe=_e.nodeName)&&Oe.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Ke=fM);if(Ke&&(Ke=Ke(i,oe))){bm(Se,Ke,l,ye);break e}it&&it(i,_e,oe),i==="focusout"&&(it=_e._wrapperState)&&it.controlled&&_e.type==="number"&&en(_e,"number",_e.value)}switch(it=oe?Js(oe):window,i){case"focusin":(Am(it)||it.contentEditable==="true")&&($s=it,Hu=oe,ca=null);break;case"focusout":ca=Hu=$s=null;break;case"mousedown":Gu=!0;break;case"contextmenu":case"mouseup":case"dragend":Gu=!1,Fm(Se,l,ye);break;case"selectionchange":if(mM)break;case"keydown":case"keyup":Fm(Se,l,ye)}var rt;if(ku)e:{switch(i){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else qs?wm(i,l)&&(at="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(at="onCompositionStart");at&&(Sm&&l.locale!=="ko"&&(qs||at!=="onCompositionStart"?at==="onCompositionEnd"&&qs&&(rt=gm()):(Pr=ye,Nu="value"in Pr?Pr.value:Pr.textContent,qs=!0)),it=bl(oe,at),0<it.length&&(at=new _m(at,i,null,l,ye),Se.push({event:at,listeners:it}),rt?at.data=rt:(rt=Tm(l),rt!==null&&(at.data=rt)))),(rt=iM?rM(i,l):sM(i,l))&&(oe=bl(oe,"onBeforeInput"),0<oe.length&&(ye=new _m("onBeforeInput","beforeinput",null,l,ye),Se.push({event:ye,listeners:oe}),ye.data=rt))}jm(Se,s)})}function da(i,s,l){return{instance:i,listener:s,currentTarget:l}}function bl(i,s){for(var l=s+"Capture",u=[];i!==null;){var p=i,x=p.stateNode;p.tag===5&&x!==null&&(p=x,x=Ot(i,l),x!=null&&u.unshift(da(i,x,p)),x=Ot(i,s),x!=null&&u.push(da(i,x,p))),i=i.return}return u}function Zs(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Ym(i,s,l,u,p){for(var x=s._reactName,T=[];l!==null&&l!==u;){var F=l,z=F.alternate,oe=F.stateNode;if(z!==null&&z===u)break;F.tag===5&&oe!==null&&(F=oe,p?(z=Ot(l,x),z!=null&&T.unshift(da(l,z,F))):p||(z=Ot(l,x),z!=null&&T.push(da(l,z,F)))),l=l.return}T.length!==0&&i.push({event:s,listeners:T})}var _M=/\r\n?/g,yM=/\u0000|\uFFFD/g;function qm(i){return(typeof i=="string"?i:""+i).replace(_M,`
`).replace(yM,"")}function Rl(i,s,l){if(s=qm(s),qm(i)!==s&&l)throw Error(t(425))}function Cl(){}var $u=null,Ku=null;function Zu(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Qu=typeof setTimeout=="function"?setTimeout:void 0,SM=typeof clearTimeout=="function"?clearTimeout:void 0,$m=typeof Promise=="function"?Promise:void 0,MM=typeof queueMicrotask=="function"?queueMicrotask:typeof $m<"u"?function(i){return $m.resolve(null).then(i).catch(EM)}:Qu;function EM(i){setTimeout(function(){throw i})}function Ju(i,s){var l=s,u=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(u===0){i.removeChild(p),na(s);return}u--}else l!=="$"&&l!=="$?"&&l!=="$!"||u++;l=p}while(l);na(s)}function Nr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Km(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),Oi="__reactFiber$"+Qs,ha="__reactProps$"+Qs,nr="__reactContainer$"+Qs,ef="__reactEvents$"+Qs,wM="__reactListeners$"+Qs,TM="__reactHandles$"+Qs;function fs(i){var s=i[Oi];if(s)return s;for(var l=i.parentNode;l;){if(s=l[nr]||l[Oi]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=Km(i);i!==null;){if(l=i[Oi])return l;i=Km(i)}return s}i=l,l=i.parentNode}return null}function pa(i){return i=i[Oi]||i[nr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Js(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Pl(i){return i[ha]||null}var tf=[],eo=-1;function Lr(i){return{current:i}}function Ht(i){0>eo||(i.current=tf[eo],tf[eo]=null,eo--)}function zt(i,s){eo++,tf[eo]=i.current,i.current=s}var Ir={},Rn=Lr(Ir),Wn=Lr(!1),ds=Ir;function to(i,s){var l=i.type.contextTypes;if(!l)return Ir;var u=i.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===s)return u.__reactInternalMemoizedMaskedChildContext;var p={},x;for(x in l)p[x]=s[x];return u&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function jn(i){return i=i.childContextTypes,i!=null}function Dl(){Ht(Wn),Ht(Rn)}function Zm(i,s,l){if(Rn.current!==Ir)throw Error(t(168));zt(Rn,s),zt(Wn,l)}function Qm(i,s,l){var u=i.stateNode;if(s=s.childContextTypes,typeof u.getChildContext!="function")return l;u=u.getChildContext();for(var p in u)if(!(p in s))throw Error(t(108,xe(i)||"Unknown",p));return le({},l,u)}function Nl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Ir,ds=Rn.current,zt(Rn,i),zt(Wn,Wn.current),!0}function Jm(i,s,l){var u=i.stateNode;if(!u)throw Error(t(169));l?(i=Qm(i,s,ds),u.__reactInternalMemoizedMergedChildContext=i,Ht(Wn),Ht(Rn),zt(Rn,i)):Ht(Wn),zt(Wn,l)}var ir=null,Ll=!1,nf=!1;function eg(i){ir===null?ir=[i]:ir.push(i)}function AM(i){Ll=!0,eg(i)}function Ur(){if(!nf&&ir!==null){nf=!0;var i=0,s=mt;try{var l=ir;for(mt=1;i<l.length;i++){var u=l[i];do u=u(!0);while(u!==null)}ir=null,Ll=!1}catch(p){throw ir!==null&&(ir=ir.slice(i+1)),cs(Zo,Ur),p}finally{mt=s,nf=!1}}return null}var no=[],io=0,Il=null,Ul=0,ai=[],li=0,hs=null,rr=1,sr="";function ps(i,s){no[io++]=Ul,no[io++]=Il,Il=i,Ul=s}function tg(i,s,l){ai[li++]=rr,ai[li++]=sr,ai[li++]=hs,hs=i;var u=rr;i=sr;var p=32-we(u)-1;u&=~(1<<p),l+=1;var x=32-we(s)+p;if(30<x){var T=p-p%5;x=(u&(1<<T)-1).toString(32),u>>=T,p-=T,rr=1<<32-we(s)+p|l<<p|u,sr=x+i}else rr=1<<x|l<<p|u,sr=i}function rf(i){i.return!==null&&(ps(i,1),tg(i,1,0))}function sf(i){for(;i===Il;)Il=no[--io],no[io]=null,Ul=no[--io],no[io]=null;for(;i===hs;)hs=ai[--li],ai[li]=null,sr=ai[--li],ai[li]=null,rr=ai[--li],ai[li]=null}var Jn=null,ei=null,Yt=!1,Si=null;function ng(i,s){var l=di(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function ig(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Jn=i,ei=Nr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Jn=i,ei=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=hs!==null?{id:rr,overflow:sr}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=di(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,Jn=i,ei=null,!0):!1;default:return!1}}function of(i){return(i.mode&1)!==0&&(i.flags&128)===0}function af(i){if(Yt){var s=ei;if(s){var l=s;if(!ig(i,s)){if(of(i))throw Error(t(418));s=Nr(l.nextSibling);var u=Jn;s&&ig(i,s)?ng(u,l):(i.flags=i.flags&-4097|2,Yt=!1,Jn=i)}}else{if(of(i))throw Error(t(418));i.flags=i.flags&-4097|2,Yt=!1,Jn=i}}}function rg(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Jn=i}function Fl(i){if(i!==Jn)return!1;if(!Yt)return rg(i),Yt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Zu(i.type,i.memoizedProps)),s&&(s=ei)){if(of(i))throw sg(),Error(t(418));for(;s;)ng(i,s),s=Nr(s.nextSibling)}if(rg(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){ei=Nr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}ei=null}}else ei=Jn?Nr(i.stateNode.nextSibling):null;return!0}function sg(){for(var i=ei;i;)i=Nr(i.nextSibling)}function ro(){ei=Jn=null,Yt=!1}function lf(i){Si===null?Si=[i]:Si.push(i)}var bM=R.ReactCurrentBatchConfig;function ma(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var u=l.stateNode}if(!u)throw Error(t(147,i));var p=u,x=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===x?s.ref:(s=function(T){var F=p.refs;T===null?delete F[x]:F[x]=T},s._stringRef=x,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Ol(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function og(i){var s=i._init;return s(i._payload)}function ag(i){function s(Z,G){if(i){var te=Z.deletions;te===null?(Z.deletions=[G],Z.flags|=16):te.push(G)}}function l(Z,G){if(!i)return null;for(;G!==null;)s(Z,G),G=G.sibling;return null}function u(Z,G){for(Z=new Map;G!==null;)G.key!==null?Z.set(G.key,G):Z.set(G.index,G),G=G.sibling;return Z}function p(Z,G){return Z=Gr(Z,G),Z.index=0,Z.sibling=null,Z}function x(Z,G,te){return Z.index=te,i?(te=Z.alternate,te!==null?(te=te.index,te<G?(Z.flags|=2,G):te):(Z.flags|=2,G)):(Z.flags|=1048576,G)}function T(Z){return i&&Z.alternate===null&&(Z.flags|=2),Z}function F(Z,G,te,Ee){return G===null||G.tag!==6?(G=Jf(te,Z.mode,Ee),G.return=Z,G):(G=p(G,te),G.return=Z,G)}function z(Z,G,te,Ee){var Ke=te.type;return Ke===k?ye(Z,G,te.props.children,Ee,te.key):G!==null&&(G.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ce&&og(Ke)===G.type)?(Ee=p(G,te.props),Ee.ref=ma(Z,G,te),Ee.return=Z,Ee):(Ee=ac(te.type,te.key,te.props,null,Z.mode,Ee),Ee.ref=ma(Z,G,te),Ee.return=Z,Ee)}function oe(Z,G,te,Ee){return G===null||G.tag!==4||G.stateNode.containerInfo!==te.containerInfo||G.stateNode.implementation!==te.implementation?(G=ed(te,Z.mode,Ee),G.return=Z,G):(G=p(G,te.children||[]),G.return=Z,G)}function ye(Z,G,te,Ee,Ke){return G===null||G.tag!==7?(G=Ms(te,Z.mode,Ee,Ke),G.return=Z,G):(G=p(G,te),G.return=Z,G)}function Se(Z,G,te){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Jf(""+G,Z.mode,te),G.return=Z,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case N:return te=ac(G.type,G.key,G.props,null,Z.mode,te),te.ref=ma(Z,null,G),te.return=Z,te;case P:return G=ed(G,Z.mode,te),G.return=Z,G;case ce:var Ee=G._init;return Se(Z,Ee(G._payload),te)}if(qt(G)||ae(G))return G=Ms(G,Z.mode,te,null),G.return=Z,G;Ol(Z,G)}return null}function _e(Z,G,te,Ee){var Ke=G!==null?G.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Ke!==null?null:F(Z,G,""+te,Ee);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case N:return te.key===Ke?z(Z,G,te,Ee):null;case P:return te.key===Ke?oe(Z,G,te,Ee):null;case ce:return Ke=te._init,_e(Z,G,Ke(te._payload),Ee)}if(qt(te)||ae(te))return Ke!==null?null:ye(Z,G,te,Ee,null);Ol(Z,te)}return null}function Oe(Z,G,te,Ee,Ke){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Z=Z.get(te)||null,F(G,Z,""+Ee,Ke);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case N:return Z=Z.get(Ee.key===null?te:Ee.key)||null,z(G,Z,Ee,Ke);case P:return Z=Z.get(Ee.key===null?te:Ee.key)||null,oe(G,Z,Ee,Ke);case ce:var it=Ee._init;return Oe(Z,G,te,it(Ee._payload),Ke)}if(qt(Ee)||ae(Ee))return Z=Z.get(te)||null,ye(G,Z,Ee,Ke,null);Ol(G,Ee)}return null}function Ge(Z,G,te,Ee){for(var Ke=null,it=null,rt=G,at=G=0,_n=null;rt!==null&&at<te.length;at++){rt.index>at?(_n=rt,rt=null):_n=rt.sibling;var bt=_e(Z,rt,te[at],Ee);if(bt===null){rt===null&&(rt=_n);break}i&&rt&&bt.alternate===null&&s(Z,rt),G=x(bt,G,at),it===null?Ke=bt:it.sibling=bt,it=bt,rt=_n}if(at===te.length)return l(Z,rt),Yt&&ps(Z,at),Ke;if(rt===null){for(;at<te.length;at++)rt=Se(Z,te[at],Ee),rt!==null&&(G=x(rt,G,at),it===null?Ke=rt:it.sibling=rt,it=rt);return Yt&&ps(Z,at),Ke}for(rt=u(Z,rt);at<te.length;at++)_n=Oe(rt,Z,at,te[at],Ee),_n!==null&&(i&&_n.alternate!==null&&rt.delete(_n.key===null?at:_n.key),G=x(_n,G,at),it===null?Ke=_n:it.sibling=_n,it=_n);return i&&rt.forEach(function(Wr){return s(Z,Wr)}),Yt&&ps(Z,at),Ke}function Xe(Z,G,te,Ee){var Ke=ae(te);if(typeof Ke!="function")throw Error(t(150));if(te=Ke.call(te),te==null)throw Error(t(151));for(var it=Ke=null,rt=G,at=G=0,_n=null,bt=te.next();rt!==null&&!bt.done;at++,bt=te.next()){rt.index>at?(_n=rt,rt=null):_n=rt.sibling;var Wr=_e(Z,rt,bt.value,Ee);if(Wr===null){rt===null&&(rt=_n);break}i&&rt&&Wr.alternate===null&&s(Z,rt),G=x(Wr,G,at),it===null?Ke=Wr:it.sibling=Wr,it=Wr,rt=_n}if(bt.done)return l(Z,rt),Yt&&ps(Z,at),Ke;if(rt===null){for(;!bt.done;at++,bt=te.next())bt=Se(Z,bt.value,Ee),bt!==null&&(G=x(bt,G,at),it===null?Ke=bt:it.sibling=bt,it=bt);return Yt&&ps(Z,at),Ke}for(rt=u(Z,rt);!bt.done;at++,bt=te.next())bt=Oe(rt,Z,at,bt.value,Ee),bt!==null&&(i&&bt.alternate!==null&&rt.delete(bt.key===null?at:bt.key),G=x(bt,G,at),it===null?Ke=bt:it.sibling=bt,it=bt);return i&&rt.forEach(function(oE){return s(Z,oE)}),Yt&&ps(Z,at),Ke}function on(Z,G,te,Ee){if(typeof te=="object"&&te!==null&&te.type===k&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case N:e:{for(var Ke=te.key,it=G;it!==null;){if(it.key===Ke){if(Ke=te.type,Ke===k){if(it.tag===7){l(Z,it.sibling),G=p(it,te.props.children),G.return=Z,Z=G;break e}}else if(it.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ce&&og(Ke)===it.type){l(Z,it.sibling),G=p(it,te.props),G.ref=ma(Z,it,te),G.return=Z,Z=G;break e}l(Z,it);break}else s(Z,it);it=it.sibling}te.type===k?(G=Ms(te.props.children,Z.mode,Ee,te.key),G.return=Z,Z=G):(Ee=ac(te.type,te.key,te.props,null,Z.mode,Ee),Ee.ref=ma(Z,G,te),Ee.return=Z,Z=Ee)}return T(Z);case P:e:{for(it=te.key;G!==null;){if(G.key===it)if(G.tag===4&&G.stateNode.containerInfo===te.containerInfo&&G.stateNode.implementation===te.implementation){l(Z,G.sibling),G=p(G,te.children||[]),G.return=Z,Z=G;break e}else{l(Z,G);break}else s(Z,G);G=G.sibling}G=ed(te,Z.mode,Ee),G.return=Z,Z=G}return T(Z);case ce:return it=te._init,on(Z,G,it(te._payload),Ee)}if(qt(te))return Ge(Z,G,te,Ee);if(ae(te))return Xe(Z,G,te,Ee);Ol(Z,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,G!==null&&G.tag===6?(l(Z,G.sibling),G=p(G,te),G.return=Z,Z=G):(l(Z,G),G=Jf(te,Z.mode,Ee),G.return=Z,Z=G),T(Z)):l(Z,G)}return on}var so=ag(!0),lg=ag(!1),kl=Lr(null),zl=null,oo=null,cf=null;function uf(){cf=oo=zl=null}function ff(i){var s=kl.current;Ht(kl),i._currentValue=s}function df(i,s,l){for(;i!==null;){var u=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),i===l)break;i=i.return}}function ao(i,s){zl=i,cf=oo=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Xn=!0),i.firstContext=null)}function ci(i){var s=i._currentValue;if(cf!==i)if(i={context:i,memoizedValue:s,next:null},oo===null){if(zl===null)throw Error(t(308));oo=i,zl.dependencies={lanes:0,firstContext:i}}else oo=oo.next=i;return s}var ms=null;function hf(i){ms===null?ms=[i]:ms.push(i)}function cg(i,s,l,u){var p=s.interleaved;return p===null?(l.next=l,hf(s)):(l.next=p.next,p.next=l),s.interleaved=l,or(i,u)}function or(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Fr=!1;function pf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ug(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function ar(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Or(i,s,l){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,(Et&2)!==0){var p=u.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s,or(i,l)}return p=u.interleaved,p===null?(s.next=s,hf(u)):(s.next=p.next,p.next=s),u.interleaved=s,or(i,l)}function Bl(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var u=s.lanes;u&=i.pendingLanes,l|=u,s.lanes=l,Gn(i,l)}}function fg(i,s){var l=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,l===u)){var p=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?p=x=T:x=x.next=T,l=l.next}while(l!==null);x===null?p=x=s:x=x.next=s}else p=x=s;l={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:x,shared:u.shared,effects:u.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function Vl(i,s,l,u){var p=i.updateQueue;Fr=!1;var x=p.firstBaseUpdate,T=p.lastBaseUpdate,F=p.shared.pending;if(F!==null){p.shared.pending=null;var z=F,oe=z.next;z.next=null,T===null?x=oe:T.next=oe,T=z;var ye=i.alternate;ye!==null&&(ye=ye.updateQueue,F=ye.lastBaseUpdate,F!==T&&(F===null?ye.firstBaseUpdate=oe:F.next=oe,ye.lastBaseUpdate=z))}if(x!==null){var Se=p.baseState;T=0,ye=oe=z=null,F=x;do{var _e=F.lane,Oe=F.eventTime;if((u&_e)===_e){ye!==null&&(ye=ye.next={eventTime:Oe,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Ge=i,Xe=F;switch(_e=s,Oe=l,Xe.tag){case 1:if(Ge=Xe.payload,typeof Ge=="function"){Se=Ge.call(Oe,Se,_e);break e}Se=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=Xe.payload,_e=typeof Ge=="function"?Ge.call(Oe,Se,_e):Ge,_e==null)break e;Se=le({},Se,_e);break e;case 2:Fr=!0}}F.callback!==null&&F.lane!==0&&(i.flags|=64,_e=p.effects,_e===null?p.effects=[F]:_e.push(F))}else Oe={eventTime:Oe,lane:_e,tag:F.tag,payload:F.payload,callback:F.callback,next:null},ye===null?(oe=ye=Oe,z=Se):ye=ye.next=Oe,T|=_e;if(F=F.next,F===null){if(F=p.shared.pending,F===null)break;_e=F,F=_e.next,_e.next=null,p.lastBaseUpdate=_e,p.shared.pending=null}}while(!0);if(ye===null&&(z=Se),p.baseState=z,p.firstBaseUpdate=oe,p.lastBaseUpdate=ye,s=p.shared.interleaved,s!==null){p=s;do T|=p.lane,p=p.next;while(p!==s)}else x===null&&(p.shared.lanes=0);xs|=T,i.lanes=T,i.memoizedState=Se}}function dg(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var u=i[s],p=u.callback;if(p!==null){if(u.callback=null,u=l,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var ga={},ki=Lr(ga),va=Lr(ga),xa=Lr(ga);function gs(i){if(i===ga)throw Error(t(174));return i}function mf(i,s){switch(zt(xa,s),zt(va,i),zt(ki,ga),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:E(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=E(s,i)}Ht(ki),zt(ki,s)}function lo(){Ht(ki),Ht(va),Ht(xa)}function hg(i){gs(xa.current);var s=gs(ki.current),l=E(s,i.type);s!==l&&(zt(va,i),zt(ki,l))}function gf(i){va.current===i&&(Ht(ki),Ht(va))}var Kt=Lr(0);function Hl(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var vf=[];function xf(){for(var i=0;i<vf.length;i++)vf[i]._workInProgressVersionPrimary=null;vf.length=0}var Gl=R.ReactCurrentDispatcher,_f=R.ReactCurrentBatchConfig,vs=0,Zt=null,dn=null,vn=null,Wl=!1,_a=!1,ya=0,RM=0;function Cn(){throw Error(t(321))}function yf(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!yi(i[l],s[l]))return!1;return!0}function Sf(i,s,l,u,p,x){if(vs=x,Zt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Gl.current=i===null||i.memoizedState===null?NM:LM,i=l(u,p),_a){x=0;do{if(_a=!1,ya=0,25<=x)throw Error(t(301));x+=1,vn=dn=null,s.updateQueue=null,Gl.current=IM,i=l(u,p)}while(_a)}if(Gl.current=Yl,s=dn!==null&&dn.next!==null,vs=0,vn=dn=Zt=null,Wl=!1,s)throw Error(t(300));return i}function Mf(){var i=ya!==0;return ya=0,i}function zi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?Zt.memoizedState=vn=i:vn=vn.next=i,vn}function ui(){if(dn===null){var i=Zt.alternate;i=i!==null?i.memoizedState:null}else i=dn.next;var s=vn===null?Zt.memoizedState:vn.next;if(s!==null)vn=s,dn=i;else{if(i===null)throw Error(t(310));dn=i,i={memoizedState:dn.memoizedState,baseState:dn.baseState,baseQueue:dn.baseQueue,queue:dn.queue,next:null},vn===null?Zt.memoizedState=vn=i:vn=vn.next=i}return vn}function Sa(i,s){return typeof s=="function"?s(i):s}function Ef(i){var s=ui(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var u=dn,p=u.baseQueue,x=l.pending;if(x!==null){if(p!==null){var T=p.next;p.next=x.next,x.next=T}u.baseQueue=p=x,l.pending=null}if(p!==null){x=p.next,u=u.baseState;var F=T=null,z=null,oe=x;do{var ye=oe.lane;if((vs&ye)===ye)z!==null&&(z=z.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),u=oe.hasEagerState?oe.eagerState:i(u,oe.action);else{var Se={lane:ye,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};z===null?(F=z=Se,T=u):z=z.next=Se,Zt.lanes|=ye,xs|=ye}oe=oe.next}while(oe!==null&&oe!==x);z===null?T=u:z.next=F,yi(u,s.memoizedState)||(Xn=!0),s.memoizedState=u,s.baseState=T,s.baseQueue=z,l.lastRenderedState=u}if(i=l.interleaved,i!==null){p=i;do x=p.lane,Zt.lanes|=x,xs|=x,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function wf(i){var s=ui(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var u=l.dispatch,p=l.pending,x=s.memoizedState;if(p!==null){l.pending=null;var T=p=p.next;do x=i(x,T.action),T=T.next;while(T!==p);yi(x,s.memoizedState)||(Xn=!0),s.memoizedState=x,s.baseQueue===null&&(s.baseState=x),l.lastRenderedState=x}return[x,u]}function pg(){}function mg(i,s){var l=Zt,u=ui(),p=s(),x=!yi(u.memoizedState,p);if(x&&(u.memoizedState=p,Xn=!0),u=u.queue,Tf(xg.bind(null,l,u,i),[i]),u.getSnapshot!==s||x||vn!==null&&vn.memoizedState.tag&1){if(l.flags|=2048,Ma(9,vg.bind(null,l,u,p,s),void 0,null),xn===null)throw Error(t(349));(vs&30)!==0||gg(l,s,p)}return p}function gg(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=Zt.updateQueue,s===null?(s={lastEffect:null,stores:null},Zt.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function vg(i,s,l,u){s.value=l,s.getSnapshot=u,_g(s)&&yg(i)}function xg(i,s,l){return l(function(){_g(s)&&yg(i)})}function _g(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!yi(i,l)}catch{return!0}}function yg(i){var s=or(i,1);s!==null&&Ti(s,i,1,-1)}function Sg(i){var s=zi();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:i},s.queue=i,i=i.dispatch=DM.bind(null,Zt,i),[s.memoizedState,i]}function Ma(i,s,l,u){return i={tag:i,create:s,destroy:l,deps:u,next:null},s=Zt.updateQueue,s===null?(s={lastEffect:null,stores:null},Zt.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(u=l.next,l.next=i,i.next=u,s.lastEffect=i)),i}function Mg(){return ui().memoizedState}function jl(i,s,l,u){var p=zi();Zt.flags|=i,p.memoizedState=Ma(1|s,l,void 0,u===void 0?null:u)}function Xl(i,s,l,u){var p=ui();u=u===void 0?null:u;var x=void 0;if(dn!==null){var T=dn.memoizedState;if(x=T.destroy,u!==null&&yf(u,T.deps)){p.memoizedState=Ma(s,l,x,u);return}}Zt.flags|=i,p.memoizedState=Ma(1|s,l,x,u)}function Eg(i,s){return jl(8390656,8,i,s)}function Tf(i,s){return Xl(2048,8,i,s)}function wg(i,s){return Xl(4,2,i,s)}function Tg(i,s){return Xl(4,4,i,s)}function Ag(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function bg(i,s,l){return l=l!=null?l.concat([i]):null,Xl(4,4,Ag.bind(null,s,i),l)}function Af(){}function Rg(i,s){var l=ui();s=s===void 0?null:s;var u=l.memoizedState;return u!==null&&s!==null&&yf(s,u[1])?u[0]:(l.memoizedState=[i,s],i)}function Cg(i,s){var l=ui();s=s===void 0?null:s;var u=l.memoizedState;return u!==null&&s!==null&&yf(s,u[1])?u[0]:(i=i(),l.memoizedState=[i,s],i)}function Pg(i,s,l){return(vs&21)===0?(i.baseState&&(i.baseState=!1,Xn=!0),i.memoizedState=l):(yi(l,s)||(l=Fe(),Zt.lanes|=l,xs|=l,i.baseState=!0),s)}function CM(i,s){var l=mt;mt=l!==0&&4>l?l:4,i(!0);var u=_f.transition;_f.transition={};try{i(!1),s()}finally{mt=l,_f.transition=u}}function Dg(){return ui().memoizedState}function PM(i,s,l){var u=Vr(i);if(l={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null},Ng(i))Lg(s,l);else if(l=cg(i,s,l,u),l!==null){var p=kn();Ti(l,i,u,p),Ig(l,s,u)}}function DM(i,s,l){var u=Vr(i),p={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ng(i))Lg(s,p);else{var x=i.alternate;if(i.lanes===0&&(x===null||x.lanes===0)&&(x=s.lastRenderedReducer,x!==null))try{var T=s.lastRenderedState,F=x(T,l);if(p.hasEagerState=!0,p.eagerState=F,yi(F,T)){var z=s.interleaved;z===null?(p.next=p,hf(s)):(p.next=z.next,z.next=p),s.interleaved=p;return}}catch{}finally{}l=cg(i,s,p,u),l!==null&&(p=kn(),Ti(l,i,u,p),Ig(l,s,u))}}function Ng(i){var s=i.alternate;return i===Zt||s!==null&&s===Zt}function Lg(i,s){_a=Wl=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function Ig(i,s,l){if((l&4194240)!==0){var u=s.lanes;u&=i.pendingLanes,l|=u,s.lanes=l,Gn(i,l)}}var Yl={readContext:ci,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useInsertionEffect:Cn,useLayoutEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useMutableSource:Cn,useSyncExternalStore:Cn,useId:Cn,unstable_isNewReconciler:!1},NM={readContext:ci,useCallback:function(i,s){return zi().memoizedState=[i,s===void 0?null:s],i},useContext:ci,useEffect:Eg,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,jl(4194308,4,Ag.bind(null,s,i),l)},useLayoutEffect:function(i,s){return jl(4194308,4,i,s)},useInsertionEffect:function(i,s){return jl(4,2,i,s)},useMemo:function(i,s){var l=zi();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var u=zi();return s=l!==void 0?l(s):s,u.memoizedState=u.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},u.queue=i,i=i.dispatch=PM.bind(null,Zt,i),[u.memoizedState,i]},useRef:function(i){var s=zi();return i={current:i},s.memoizedState=i},useState:Sg,useDebugValue:Af,useDeferredValue:function(i){return zi().memoizedState=i},useTransition:function(){var i=Sg(!1),s=i[0];return i=CM.bind(null,i[1]),zi().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var u=Zt,p=zi();if(Yt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),xn===null)throw Error(t(349));(vs&30)!==0||gg(u,s,l)}p.memoizedState=l;var x={value:l,getSnapshot:s};return p.queue=x,Eg(xg.bind(null,u,x,i),[i]),u.flags|=2048,Ma(9,vg.bind(null,u,x,l,s),void 0,null),l},useId:function(){var i=zi(),s=xn.identifierPrefix;if(Yt){var l=sr,u=rr;l=(u&~(1<<32-we(u)-1)).toString(32)+l,s=":"+s+"R"+l,l=ya++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=RM++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},LM={readContext:ci,useCallback:Rg,useContext:ci,useEffect:Tf,useImperativeHandle:bg,useInsertionEffect:wg,useLayoutEffect:Tg,useMemo:Cg,useReducer:Ef,useRef:Mg,useState:function(){return Ef(Sa)},useDebugValue:Af,useDeferredValue:function(i){var s=ui();return Pg(s,dn.memoizedState,i)},useTransition:function(){var i=Ef(Sa)[0],s=ui().memoizedState;return[i,s]},useMutableSource:pg,useSyncExternalStore:mg,useId:Dg,unstable_isNewReconciler:!1},IM={readContext:ci,useCallback:Rg,useContext:ci,useEffect:Tf,useImperativeHandle:bg,useInsertionEffect:wg,useLayoutEffect:Tg,useMemo:Cg,useReducer:wf,useRef:Mg,useState:function(){return wf(Sa)},useDebugValue:Af,useDeferredValue:function(i){var s=ui();return dn===null?s.memoizedState=i:Pg(s,dn.memoizedState,i)},useTransition:function(){var i=wf(Sa)[0],s=ui().memoizedState;return[i,s]},useMutableSource:pg,useSyncExternalStore:mg,useId:Dg,unstable_isNewReconciler:!1};function Mi(i,s){if(i&&i.defaultProps){s=le({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function bf(i,s,l,u){s=i.memoizedState,l=l(u,s),l=l==null?s:le({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var ql={isMounted:function(i){return(i=i._reactInternals)?Fn(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var u=kn(),p=Vr(i),x=ar(u,p);x.payload=s,l!=null&&(x.callback=l),s=Or(i,x,p),s!==null&&(Ti(s,i,p,u),Bl(s,i,p))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var u=kn(),p=Vr(i),x=ar(u,p);x.tag=1,x.payload=s,l!=null&&(x.callback=l),s=Or(i,x,p),s!==null&&(Ti(s,i,p,u),Bl(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=kn(),u=Vr(i),p=ar(l,u);p.tag=2,s!=null&&(p.callback=s),s=Or(i,p,u),s!==null&&(Ti(s,i,u,l),Bl(s,i,u))}};function Ug(i,s,l,u,p,x,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,x,T):s.prototype&&s.prototype.isPureReactComponent?!la(l,u)||!la(p,x):!0}function Fg(i,s,l){var u=!1,p=Ir,x=s.contextType;return typeof x=="object"&&x!==null?x=ci(x):(p=jn(s)?ds:Rn.current,u=s.contextTypes,x=(u=u!=null)?to(i,p):Ir),s=new s(l,x),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=ql,i.stateNode=s,s._reactInternals=i,u&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=x),s}function Og(i,s,l,u){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,u),s.state!==i&&ql.enqueueReplaceState(s,s.state,null)}function Rf(i,s,l,u){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},pf(i);var x=s.contextType;typeof x=="object"&&x!==null?p.context=ci(x):(x=jn(s)?ds:Rn.current,p.context=to(i,x)),p.state=i.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(bf(i,s,x,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&ql.enqueueReplaceState(p,p.state,null),Vl(i,l,p,u),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function co(i,s){try{var l="",u=s;do l+=Ve(u),u=u.return;while(u);var p=l}catch(x){p=`
Error generating stack: `+x.message+`
`+x.stack}return{value:i,source:s,stack:p,digest:null}}function Cf(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function Pf(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var UM=typeof WeakMap=="function"?WeakMap:Map;function kg(i,s,l){l=ar(-1,l),l.tag=3,l.payload={element:null};var u=s.value;return l.callback=function(){tc||(tc=!0,jf=u),Pf(i,s)},l}function zg(i,s,l){l=ar(-1,l),l.tag=3;var u=i.type.getDerivedStateFromError;if(typeof u=="function"){var p=s.value;l.payload=function(){return u(p)},l.callback=function(){Pf(i,s)}}var x=i.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){Pf(i,s),typeof u!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})}),l}function Bg(i,s,l){var u=i.pingCache;if(u===null){u=i.pingCache=new UM;var p=new Set;u.set(s,p)}else p=u.get(s),p===void 0&&(p=new Set,u.set(s,p));p.has(l)||(p.add(l),i=$M.bind(null,i,s,l),s.then(i,i))}function Vg(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function Hg(i,s,l,u,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=ar(-1,1),s.tag=2,Or(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var FM=R.ReactCurrentOwner,Xn=!1;function On(i,s,l,u){s.child=i===null?lg(s,null,l,u):so(s,i.child,l,u)}function Gg(i,s,l,u,p){l=l.render;var x=s.ref;return ao(s,p),u=Sf(i,s,l,u,x,p),l=Mf(),i!==null&&!Xn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,lr(i,s,p)):(Yt&&l&&rf(s),s.flags|=1,On(i,s,u,p),s.child)}function Wg(i,s,l,u,p){if(i===null){var x=l.type;return typeof x=="function"&&!Qf(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=x,jg(i,s,x,u,p)):(i=ac(l.type,null,u,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(x=i.child,(i.lanes&p)===0){var T=x.memoizedProps;if(l=l.compare,l=l!==null?l:la,l(T,u)&&i.ref===s.ref)return lr(i,s,p)}return s.flags|=1,i=Gr(x,u),i.ref=s.ref,i.return=s,s.child=i}function jg(i,s,l,u,p){if(i!==null){var x=i.memoizedProps;if(la(x,u)&&i.ref===s.ref)if(Xn=!1,s.pendingProps=u=x,(i.lanes&p)!==0)(i.flags&131072)!==0&&(Xn=!0);else return s.lanes=i.lanes,lr(i,s,p)}return Df(i,s,l,u,p)}function Xg(i,s,l){var u=s.pendingProps,p=u.children,x=i!==null?i.memoizedState:null;if(u.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(fo,ti),ti|=l;else{if((l&1073741824)===0)return i=x!==null?x.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,zt(fo,ti),ti|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=x!==null?x.baseLanes:l,zt(fo,ti),ti|=u}else x!==null?(u=x.baseLanes|l,s.memoizedState=null):u=l,zt(fo,ti),ti|=u;return On(i,s,p,l),s.child}function Yg(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Df(i,s,l,u,p){var x=jn(l)?ds:Rn.current;return x=to(s,x),ao(s,p),l=Sf(i,s,l,u,x,p),u=Mf(),i!==null&&!Xn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,lr(i,s,p)):(Yt&&u&&rf(s),s.flags|=1,On(i,s,l,p),s.child)}function qg(i,s,l,u,p){if(jn(l)){var x=!0;Nl(s)}else x=!1;if(ao(s,p),s.stateNode===null)Kl(i,s),Fg(s,l,u),Rf(s,l,u,p),u=!0;else if(i===null){var T=s.stateNode,F=s.memoizedProps;T.props=F;var z=T.context,oe=l.contextType;typeof oe=="object"&&oe!==null?oe=ci(oe):(oe=jn(l)?ds:Rn.current,oe=to(s,oe));var ye=l.getDerivedStateFromProps,Se=typeof ye=="function"||typeof T.getSnapshotBeforeUpdate=="function";Se||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==u||z!==oe)&&Og(s,T,u,oe),Fr=!1;var _e=s.memoizedState;T.state=_e,Vl(s,u,T,p),z=s.memoizedState,F!==u||_e!==z||Wn.current||Fr?(typeof ye=="function"&&(bf(s,l,ye,u),z=s.memoizedState),(F=Fr||Ug(s,l,F,u,_e,z,oe))?(Se||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(s.flags|=4194308)):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=z),T.props=u,T.state=z,T.context=oe,u=F):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{T=s.stateNode,ug(i,s),F=s.memoizedProps,oe=s.type===s.elementType?F:Mi(s.type,F),T.props=oe,Se=s.pendingProps,_e=T.context,z=l.contextType,typeof z=="object"&&z!==null?z=ci(z):(z=jn(l)?ds:Rn.current,z=to(s,z));var Oe=l.getDerivedStateFromProps;(ye=typeof Oe=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==Se||_e!==z)&&Og(s,T,u,z),Fr=!1,_e=s.memoizedState,T.state=_e,Vl(s,u,T,p);var Ge=s.memoizedState;F!==Se||_e!==Ge||Wn.current||Fr?(typeof Oe=="function"&&(bf(s,l,Oe,u),Ge=s.memoizedState),(oe=Fr||Ug(s,l,oe,u,_e,Ge,z)||!1)?(ye||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(u,Ge,z),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(u,Ge,z)),typeof T.componentDidUpdate=="function"&&(s.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof T.componentDidUpdate!="function"||F===i.memoizedProps&&_e===i.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===i.memoizedProps&&_e===i.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=Ge),T.props=u,T.state=Ge,T.context=z,u=oe):(typeof T.componentDidUpdate!="function"||F===i.memoizedProps&&_e===i.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===i.memoizedProps&&_e===i.memoizedState||(s.flags|=1024),u=!1)}return Nf(i,s,l,u,x,p)}function Nf(i,s,l,u,p,x){Yg(i,s);var T=(s.flags&128)!==0;if(!u&&!T)return p&&Jm(s,l,!1),lr(i,s,x);u=s.stateNode,FM.current=s;var F=T&&typeof l.getDerivedStateFromError!="function"?null:u.render();return s.flags|=1,i!==null&&T?(s.child=so(s,i.child,null,x),s.child=so(s,null,F,x)):On(i,s,F,x),s.memoizedState=u.state,p&&Jm(s,l,!0),s.child}function $g(i){var s=i.stateNode;s.pendingContext?Zm(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Zm(i,s.context,!1),mf(i,s.containerInfo)}function Kg(i,s,l,u,p){return ro(),lf(p),s.flags|=256,On(i,s,l,u),s.child}var Lf={dehydrated:null,treeContext:null,retryLane:0};function If(i){return{baseLanes:i,cachePool:null,transitions:null}}function Zg(i,s,l){var u=s.pendingProps,p=Kt.current,x=!1,T=(s.flags&128)!==0,F;if((F=T)||(F=i!==null&&i.memoizedState===null?!1:(p&2)!==0),F?(x=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),zt(Kt,p&1),i===null)return af(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(T=u.children,i=u.fallback,x?(u=s.mode,x=s.child,T={mode:"hidden",children:T},(u&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=T):x=lc(T,u,0,null),i=Ms(i,u,l,null),x.return=s,i.return=s,x.sibling=i,s.child=x,s.child.memoizedState=If(l),s.memoizedState=Lf,i):Uf(s,T));if(p=i.memoizedState,p!==null&&(F=p.dehydrated,F!==null))return OM(i,s,T,u,F,p,l);if(x){x=u.fallback,T=s.mode,p=i.child,F=p.sibling;var z={mode:"hidden",children:u.children};return(T&1)===0&&s.child!==p?(u=s.child,u.childLanes=0,u.pendingProps=z,s.deletions=null):(u=Gr(p,z),u.subtreeFlags=p.subtreeFlags&14680064),F!==null?x=Gr(F,x):(x=Ms(x,T,l,null),x.flags|=2),x.return=s,u.return=s,u.sibling=x,s.child=u,u=x,x=s.child,T=i.child.memoizedState,T=T===null?If(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},x.memoizedState=T,x.childLanes=i.childLanes&~l,s.memoizedState=Lf,u}return x=i.child,i=x.sibling,u=Gr(x,{mode:"visible",children:u.children}),(s.mode&1)===0&&(u.lanes=l),u.return=s,u.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=u,s.memoizedState=null,u}function Uf(i,s){return s=lc({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function $l(i,s,l,u){return u!==null&&lf(u),so(s,i.child,null,l),i=Uf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function OM(i,s,l,u,p,x,T){if(l)return s.flags&256?(s.flags&=-257,u=Cf(Error(t(422))),$l(i,s,T,u)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(x=u.fallback,p=s.mode,u=lc({mode:"visible",children:u.children},p,0,null),x=Ms(x,p,T,null),x.flags|=2,u.return=s,x.return=s,u.sibling=x,s.child=u,(s.mode&1)!==0&&so(s,i.child,null,T),s.child.memoizedState=If(T),s.memoizedState=Lf,x);if((s.mode&1)===0)return $l(i,s,T,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var F=u.dgst;return u=F,x=Error(t(419)),u=Cf(x,u,void 0),$l(i,s,T,u)}if(F=(T&i.childLanes)!==0,Xn||F){if(u=xn,u!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|T))!==0?0:p,p!==0&&p!==x.retryLane&&(x.retryLane=p,or(i,p),Ti(u,i,p,-1))}return Zf(),u=Cf(Error(t(421))),$l(i,s,T,u)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=KM.bind(null,i),p._reactRetry=s,null):(i=x.treeContext,ei=Nr(p.nextSibling),Jn=s,Yt=!0,Si=null,i!==null&&(ai[li++]=rr,ai[li++]=sr,ai[li++]=hs,rr=i.id,sr=i.overflow,hs=s),s=Uf(s,u.children),s.flags|=4096,s)}function Qg(i,s,l){i.lanes|=s;var u=i.alternate;u!==null&&(u.lanes|=s),df(i.return,s,l)}function Ff(i,s,l,u,p){var x=i.memoizedState;x===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:l,tailMode:p}:(x.isBackwards=s,x.rendering=null,x.renderingStartTime=0,x.last=u,x.tail=l,x.tailMode=p)}function Jg(i,s,l){var u=s.pendingProps,p=u.revealOrder,x=u.tail;if(On(i,s,u.children,l),u=Kt.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Qg(i,l,s);else if(i.tag===19)Qg(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}if(zt(Kt,u),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)i=l.alternate,i!==null&&Hl(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),Ff(s,!1,p,l,x);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&Hl(i)===null){s.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}Ff(s,!0,l,null,x);break;case"together":Ff(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Kl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function lr(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),xs|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Gr(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Gr(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function kM(i,s,l){switch(s.tag){case 3:$g(s),ro();break;case 5:hg(s);break;case 1:jn(s.type)&&Nl(s);break;case 4:mf(s,s.stateNode.containerInfo);break;case 10:var u=s.type._context,p=s.memoizedProps.value;zt(kl,u._currentValue),u._currentValue=p;break;case 13:if(u=s.memoizedState,u!==null)return u.dehydrated!==null?(zt(Kt,Kt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?Zg(i,s,l):(zt(Kt,Kt.current&1),i=lr(i,s,l),i!==null?i.sibling:null);zt(Kt,Kt.current&1);break;case 19:if(u=(l&s.childLanes)!==0,(i.flags&128)!==0){if(u)return Jg(i,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),zt(Kt,Kt.current),u)break;return null;case 22:case 23:return s.lanes=0,Xg(i,s,l)}return lr(i,s,l)}var e0,Of,t0,n0;e0=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Of=function(){},t0=function(i,s,l,u){var p=i.memoizedProps;if(p!==u){i=s.stateNode,gs(ki.current);var x=null;switch(l){case"input":p=Pt(i,p),u=Pt(i,u),x=[];break;case"select":p=le({},p,{value:void 0}),u=le({},u,{value:void 0}),x=[];break;case"textarea":p=jt(i,p),u=jt(i,u),x=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(i.onclick=Cl)}Ye(l,u);var T;l=null;for(oe in p)if(!u.hasOwnProperty(oe)&&p.hasOwnProperty(oe)&&p[oe]!=null)if(oe==="style"){var F=p[oe];for(T in F)F.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(o.hasOwnProperty(oe)?x||(x=[]):(x=x||[]).push(oe,null));for(oe in u){var z=u[oe];if(F=p!=null?p[oe]:void 0,u.hasOwnProperty(oe)&&z!==F&&(z!=null||F!=null))if(oe==="style")if(F){for(T in F)!F.hasOwnProperty(T)||z&&z.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in z)z.hasOwnProperty(T)&&F[T]!==z[T]&&(l||(l={}),l[T]=z[T])}else l||(x||(x=[]),x.push(oe,l)),l=z;else oe==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,F=F?F.__html:void 0,z!=null&&F!==z&&(x=x||[]).push(oe,z)):oe==="children"?typeof z!="string"&&typeof z!="number"||(x=x||[]).push(oe,""+z):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(o.hasOwnProperty(oe)?(z!=null&&oe==="onScroll"&&Vt("scroll",i),x||F===z||(x=[])):(x=x||[]).push(oe,z))}l&&(x=x||[]).push("style",l);var oe=x;(s.updateQueue=oe)&&(s.flags|=4)}},n0=function(i,s,l,u){l!==u&&(s.flags|=4)};function Ea(i,s){if(!Yt)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function Pn(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,u=0;if(s)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=u,i.childLanes=l,s}function zM(i,s,l){var u=s.pendingProps;switch(sf(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pn(s),null;case 1:return jn(s.type)&&Dl(),Pn(s),null;case 3:return u=s.stateNode,lo(),Ht(Wn),Ht(Rn),xf(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(i===null||i.child===null)&&(Fl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Si!==null&&(qf(Si),Si=null))),Of(i,s),Pn(s),null;case 5:gf(s);var p=gs(xa.current);if(l=s.type,i!==null&&s.stateNode!=null)t0(i,s,l,u,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!u){if(s.stateNode===null)throw Error(t(166));return Pn(s),null}if(i=gs(ki.current),Fl(s)){u=s.stateNode,l=s.type;var x=s.memoizedProps;switch(u[Oi]=s,u[ha]=x,i=(s.mode&1)!==0,l){case"dialog":Vt("cancel",u),Vt("close",u);break;case"iframe":case"object":case"embed":Vt("load",u);break;case"video":case"audio":for(p=0;p<ua.length;p++)Vt(ua[p],u);break;case"source":Vt("error",u);break;case"img":case"image":case"link":Vt("error",u),Vt("load",u);break;case"details":Vt("toggle",u);break;case"input":St(u,x),Vt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!x.multiple},Vt("invalid",u);break;case"textarea":j(u,x),Vt("invalid",u)}Ye(l,x),p=null;for(var T in x)if(x.hasOwnProperty(T)){var F=x[T];T==="children"?typeof F=="string"?u.textContent!==F&&(x.suppressHydrationWarning!==!0&&Rl(u.textContent,F,i),p=["children",F]):typeof F=="number"&&u.textContent!==""+F&&(x.suppressHydrationWarning!==!0&&Rl(u.textContent,F,i),p=["children",""+F]):o.hasOwnProperty(T)&&F!=null&&T==="onScroll"&&Vt("scroll",u)}switch(l){case"input":tt(u),Jt(u,x,!0);break;case"textarea":tt(u),At(u);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(u.onclick=Cl)}u=p,s.updateQueue=u,u!==null&&(s.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=I(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=T.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof u.is=="string"?i=T.createElement(l,{is:u.is}):(i=T.createElement(l),l==="select"&&(T=i,u.multiple?T.multiple=!0:u.size&&(T.size=u.size))):i=T.createElementNS(i,l),i[Oi]=s,i[ha]=u,e0(i,s,!1,!1),s.stateNode=i;e:{switch(T=De(l,u),l){case"dialog":Vt("cancel",i),Vt("close",i),p=u;break;case"iframe":case"object":case"embed":Vt("load",i),p=u;break;case"video":case"audio":for(p=0;p<ua.length;p++)Vt(ua[p],i);p=u;break;case"source":Vt("error",i),p=u;break;case"img":case"image":case"link":Vt("error",i),Vt("load",i),p=u;break;case"details":Vt("toggle",i),p=u;break;case"input":St(i,u),p=Pt(i,u),Vt("invalid",i);break;case"option":p=u;break;case"select":i._wrapperState={wasMultiple:!!u.multiple},p=le({},u,{value:void 0}),Vt("invalid",i);break;case"textarea":j(i,u),p=jt(i,u),Vt("invalid",i);break;default:p=u}Ye(l,p),F=p;for(x in F)if(F.hasOwnProperty(x)){var z=F[x];x==="style"?ge(i,z):x==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&ne(i,z)):x==="children"?typeof z=="string"?(l!=="textarea"||z!=="")&&ue(i,z):typeof z=="number"&&ue(i,""+z):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?z!=null&&x==="onScroll"&&Vt("scroll",i):z!=null&&L(i,x,z,T))}switch(l){case"input":tt(i),Jt(i,u,!1);break;case"textarea":tt(i),At(i);break;case"option":u.value!=null&&i.setAttribute("value",""+me(u.value));break;case"select":i.multiple=!!u.multiple,x=u.value,x!=null?Lt(i,!!u.multiple,x,!1):u.defaultValue!=null&&Lt(i,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Cl)}switch(l){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Pn(s),null;case 6:if(i&&s.stateNode!=null)n0(i,s,i.memoizedProps,u);else{if(typeof u!="string"&&s.stateNode===null)throw Error(t(166));if(l=gs(xa.current),gs(ki.current),Fl(s)){if(u=s.stateNode,l=s.memoizedProps,u[Oi]=s,(x=u.nodeValue!==l)&&(i=Jn,i!==null))switch(i.tag){case 3:Rl(u.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Rl(u.nodeValue,l,(i.mode&1)!==0)}x&&(s.flags|=4)}else u=(l.nodeType===9?l:l.ownerDocument).createTextNode(u),u[Oi]=s,s.stateNode=u}return Pn(s),null;case 13:if(Ht(Kt),u=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Yt&&ei!==null&&(s.mode&1)!==0&&(s.flags&128)===0)sg(),ro(),s.flags|=98560,x=!1;else if(x=Fl(s),u!==null&&u.dehydrated!==null){if(i===null){if(!x)throw Error(t(318));if(x=s.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Oi]=s}else ro(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Pn(s),x=!1}else Si!==null&&(qf(Si),Si=null),x=!0;if(!x)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(u=u!==null,u!==(i!==null&&i.memoizedState!==null)&&u&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Kt.current&1)!==0?hn===0&&(hn=3):Zf())),s.updateQueue!==null&&(s.flags|=4),Pn(s),null);case 4:return lo(),Of(i,s),i===null&&fa(s.stateNode.containerInfo),Pn(s),null;case 10:return ff(s.type._context),Pn(s),null;case 17:return jn(s.type)&&Dl(),Pn(s),null;case 19:if(Ht(Kt),x=s.memoizedState,x===null)return Pn(s),null;if(u=(s.flags&128)!==0,T=x.rendering,T===null)if(u)Ea(x,!1);else{if(hn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(T=Hl(i),T!==null){for(s.flags|=128,Ea(x,!1),u=T.updateQueue,u!==null&&(s.updateQueue=u,s.flags|=4),s.subtreeFlags=0,u=l,l=s.child;l!==null;)x=l,i=u,x.flags&=14680066,T=x.alternate,T===null?(x.childLanes=0,x.lanes=i,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=T.childLanes,x.lanes=T.lanes,x.child=T.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=T.memoizedProps,x.memoizedState=T.memoizedState,x.updateQueue=T.updateQueue,x.type=T.type,i=T.dependencies,x.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return zt(Kt,Kt.current&1|2),s.child}i=i.sibling}x.tail!==null&&$t()>ho&&(s.flags|=128,u=!0,Ea(x,!1),s.lanes=4194304)}else{if(!u)if(i=Hl(T),i!==null){if(s.flags|=128,u=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Ea(x,!0),x.tail===null&&x.tailMode==="hidden"&&!T.alternate&&!Yt)return Pn(s),null}else 2*$t()-x.renderingStartTime>ho&&l!==1073741824&&(s.flags|=128,u=!0,Ea(x,!1),s.lanes=4194304);x.isBackwards?(T.sibling=s.child,s.child=T):(l=x.last,l!==null?l.sibling=T:s.child=T,x.last=T)}return x.tail!==null?(s=x.tail,x.rendering=s,x.tail=s.sibling,x.renderingStartTime=$t(),s.sibling=null,l=Kt.current,zt(Kt,u?l&1|2:l&1),s):(Pn(s),null);case 22:case 23:return Kf(),u=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==u&&(s.flags|=8192),u&&(s.mode&1)!==0?(ti&1073741824)!==0&&(Pn(s),s.subtreeFlags&6&&(s.flags|=8192)):Pn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function BM(i,s){switch(sf(s),s.tag){case 1:return jn(s.type)&&Dl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return lo(),Ht(Wn),Ht(Rn),xf(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return gf(s),null;case 13:if(Ht(Kt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));ro()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Ht(Kt),null;case 4:return lo(),null;case 10:return ff(s.type._context),null;case 22:case 23:return Kf(),null;case 24:return null;default:return null}}var Zl=!1,Dn=!1,VM=typeof WeakSet=="function"?WeakSet:Set,Be=null;function uo(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(u){tn(i,s,u)}else l.current=null}function kf(i,s,l){try{l()}catch(u){tn(i,s,u)}}var i0=!1;function HM(i,s){if($u=vl,i=Um(),Vu(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var p=u.anchorOffset,x=u.focusNode;u=u.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var T=0,F=-1,z=-1,oe=0,ye=0,Se=i,_e=null;t:for(;;){for(var Oe;Se!==l||p!==0&&Se.nodeType!==3||(F=T+p),Se!==x||u!==0&&Se.nodeType!==3||(z=T+u),Se.nodeType===3&&(T+=Se.nodeValue.length),(Oe=Se.firstChild)!==null;)_e=Se,Se=Oe;for(;;){if(Se===i)break t;if(_e===l&&++oe===p&&(F=T),_e===x&&++ye===u&&(z=T),(Oe=Se.nextSibling)!==null)break;Se=_e,_e=Se.parentNode}Se=Oe}l=F===-1||z===-1?null:{start:F,end:z}}else l=null}l=l||{start:0,end:0}}else l=null;for(Ku={focusedElem:i,selectionRange:l},vl=!1,Be=s;Be!==null;)if(s=Be,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Be=i;else for(;Be!==null;){s=Be;try{var Ge=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var Xe=Ge.memoizedProps,on=Ge.memoizedState,Z=s.stateNode,G=Z.getSnapshotBeforeUpdate(s.elementType===s.type?Xe:Mi(s.type,Xe),on);Z.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var te=s.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){tn(s,s.return,Ee)}if(i=s.sibling,i!==null){i.return=s.return,Be=i;break}Be=s.return}return Ge=i0,i0=!1,Ge}function wa(i,s,l){var u=s.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&i)===i){var x=p.destroy;p.destroy=void 0,x!==void 0&&kf(s,l,x)}p=p.next}while(p!==u)}}function Ql(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var u=l.create;l.destroy=u()}l=l.next}while(l!==s)}}function zf(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function r0(i){var s=i.alternate;s!==null&&(i.alternate=null,r0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Oi],delete s[ha],delete s[ef],delete s[wM],delete s[TM])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function s0(i){return i.tag===5||i.tag===3||i.tag===4}function o0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||s0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Bf(i,s,l){var u=i.tag;if(u===5||u===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Cl));else if(u!==4&&(i=i.child,i!==null))for(Bf(i,s,l),i=i.sibling;i!==null;)Bf(i,s,l),i=i.sibling}function Vf(i,s,l){var u=i.tag;if(u===5||u===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(u!==4&&(i=i.child,i!==null))for(Vf(i,s,l),i=i.sibling;i!==null;)Vf(i,s,l),i=i.sibling}var wn=null,Ei=!1;function kr(i,s,l){for(l=l.child;l!==null;)a0(i,s,l),l=l.sibling}function a0(i,s,l){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(J,l)}catch{}switch(l.tag){case 5:Dn||uo(l,s);case 6:var u=wn,p=Ei;wn=null,kr(i,s,l),wn=u,Ei=p,wn!==null&&(Ei?(i=wn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):wn.removeChild(l.stateNode));break;case 18:wn!==null&&(Ei?(i=wn,l=l.stateNode,i.nodeType===8?Ju(i.parentNode,l):i.nodeType===1&&Ju(i,l),na(i)):Ju(wn,l.stateNode));break;case 4:u=wn,p=Ei,wn=l.stateNode.containerInfo,Ei=!0,kr(i,s,l),wn=u,Ei=p;break;case 0:case 11:case 14:case 15:if(!Dn&&(u=l.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var x=p,T=x.destroy;x=x.tag,T!==void 0&&((x&2)!==0||(x&4)!==0)&&kf(l,s,T),p=p.next}while(p!==u)}kr(i,s,l);break;case 1:if(!Dn&&(uo(l,s),u=l.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=l.memoizedProps,u.state=l.memoizedState,u.componentWillUnmount()}catch(F){tn(l,s,F)}kr(i,s,l);break;case 21:kr(i,s,l);break;case 22:l.mode&1?(Dn=(u=Dn)||l.memoizedState!==null,kr(i,s,l),Dn=u):kr(i,s,l);break;default:kr(i,s,l)}}function l0(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new VM),s.forEach(function(u){var p=ZM.bind(null,i,u);l.has(u)||(l.add(u),u.then(p,p))})}}function wi(i,s){var l=s.deletions;if(l!==null)for(var u=0;u<l.length;u++){var p=l[u];try{var x=i,T=s,F=T;e:for(;F!==null;){switch(F.tag){case 5:wn=F.stateNode,Ei=!1;break e;case 3:wn=F.stateNode.containerInfo,Ei=!0;break e;case 4:wn=F.stateNode.containerInfo,Ei=!0;break e}F=F.return}if(wn===null)throw Error(t(160));a0(x,T,p),wn=null,Ei=!1;var z=p.alternate;z!==null&&(z.return=null),p.return=null}catch(oe){tn(p,s,oe)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)c0(s,i),s=s.sibling}function c0(i,s){var l=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(wi(s,i),Bi(i),u&4){try{wa(3,i,i.return),Ql(3,i)}catch(Xe){tn(i,i.return,Xe)}try{wa(5,i,i.return)}catch(Xe){tn(i,i.return,Xe)}}break;case 1:wi(s,i),Bi(i),u&512&&l!==null&&uo(l,l.return);break;case 5:if(wi(s,i),Bi(i),u&512&&l!==null&&uo(l,l.return),i.flags&32){var p=i.stateNode;try{ue(p,"")}catch(Xe){tn(i,i.return,Xe)}}if(u&4&&(p=i.stateNode,p!=null)){var x=i.memoizedProps,T=l!==null?l.memoizedProps:x,F=i.type,z=i.updateQueue;if(i.updateQueue=null,z!==null)try{F==="input"&&x.type==="radio"&&x.name!=null&&vt(p,x),De(F,T);var oe=De(F,x);for(T=0;T<z.length;T+=2){var ye=z[T],Se=z[T+1];ye==="style"?ge(p,Se):ye==="dangerouslySetInnerHTML"?ne(p,Se):ye==="children"?ue(p,Se):L(p,ye,Se,oe)}switch(F){case"input":Wt(p,x);break;case"textarea":Mn(p,x);break;case"select":var _e=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!x.multiple;var Oe=x.value;Oe!=null?Lt(p,!!x.multiple,Oe,!1):_e!==!!x.multiple&&(x.defaultValue!=null?Lt(p,!!x.multiple,x.defaultValue,!0):Lt(p,!!x.multiple,x.multiple?[]:"",!1))}p[ha]=x}catch(Xe){tn(i,i.return,Xe)}}break;case 6:if(wi(s,i),Bi(i),u&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,x=i.memoizedProps;try{p.nodeValue=x}catch(Xe){tn(i,i.return,Xe)}}break;case 3:if(wi(s,i),Bi(i),u&4&&l!==null&&l.memoizedState.isDehydrated)try{na(s.containerInfo)}catch(Xe){tn(i,i.return,Xe)}break;case 4:wi(s,i),Bi(i);break;case 13:wi(s,i),Bi(i),p=i.child,p.flags&8192&&(x=p.memoizedState!==null,p.stateNode.isHidden=x,!x||p.alternate!==null&&p.alternate.memoizedState!==null||(Wf=$t())),u&4&&l0(i);break;case 22:if(ye=l!==null&&l.memoizedState!==null,i.mode&1?(Dn=(oe=Dn)||ye,wi(s,i),Dn=oe):wi(s,i),Bi(i),u&8192){if(oe=i.memoizedState!==null,(i.stateNode.isHidden=oe)&&!ye&&(i.mode&1)!==0)for(Be=i,ye=i.child;ye!==null;){for(Se=Be=ye;Be!==null;){switch(_e=Be,Oe=_e.child,_e.tag){case 0:case 11:case 14:case 15:wa(4,_e,_e.return);break;case 1:uo(_e,_e.return);var Ge=_e.stateNode;if(typeof Ge.componentWillUnmount=="function"){u=_e,l=_e.return;try{s=u,Ge.props=s.memoizedProps,Ge.state=s.memoizedState,Ge.componentWillUnmount()}catch(Xe){tn(u,l,Xe)}}break;case 5:uo(_e,_e.return);break;case 22:if(_e.memoizedState!==null){d0(Se);continue}}Oe!==null?(Oe.return=_e,Be=Oe):d0(Se)}ye=ye.sibling}e:for(ye=null,Se=i;;){if(Se.tag===5){if(ye===null){ye=Se;try{p=Se.stateNode,oe?(x=p.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(F=Se.stateNode,z=Se.memoizedProps.style,T=z!=null&&z.hasOwnProperty("display")?z.display:null,F.style.display=he("display",T))}catch(Xe){tn(i,i.return,Xe)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=oe?"":Se.memoizedProps}catch(Xe){tn(i,i.return,Xe)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===i)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===i)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===i)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:wi(s,i),Bi(i),u&4&&l0(i);break;case 21:break;default:wi(s,i),Bi(i)}}function Bi(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(s0(l)){var u=l;break e}l=l.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(ue(p,""),u.flags&=-33);var x=o0(i);Vf(i,x,p);break;case 3:case 4:var T=u.stateNode.containerInfo,F=o0(i);Bf(i,F,T);break;default:throw Error(t(161))}}catch(z){tn(i,i.return,z)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function GM(i,s,l){Be=i,u0(i)}function u0(i,s,l){for(var u=(i.mode&1)!==0;Be!==null;){var p=Be,x=p.child;if(p.tag===22&&u){var T=p.memoizedState!==null||Zl;if(!T){var F=p.alternate,z=F!==null&&F.memoizedState!==null||Dn;F=Zl;var oe=Dn;if(Zl=T,(Dn=z)&&!oe)for(Be=p;Be!==null;)T=Be,z=T.child,T.tag===22&&T.memoizedState!==null?h0(p):z!==null?(z.return=T,Be=z):h0(p);for(;x!==null;)Be=x,u0(x),x=x.sibling;Be=p,Zl=F,Dn=oe}f0(i)}else(p.subtreeFlags&8772)!==0&&x!==null?(x.return=p,Be=x):f0(i)}}function f0(i){for(;Be!==null;){var s=Be;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Dn||Ql(5,s);break;case 1:var u=s.stateNode;if(s.flags&4&&!Dn)if(l===null)u.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:Mi(s.type,l.memoizedProps);u.componentDidUpdate(p,l.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var x=s.updateQueue;x!==null&&dg(s,x,u);break;case 3:var T=s.updateQueue;if(T!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}dg(s,T,l)}break;case 5:var F=s.stateNode;if(l===null&&s.flags&4){l=F;var z=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&l.focus();break;case"img":z.src&&(l.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var oe=s.alternate;if(oe!==null){var ye=oe.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&na(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Dn||s.flags&512&&zf(s)}catch(_e){tn(s,s.return,_e)}}if(s===i){Be=null;break}if(l=s.sibling,l!==null){l.return=s.return,Be=l;break}Be=s.return}}function d0(i){for(;Be!==null;){var s=Be;if(s===i){Be=null;break}var l=s.sibling;if(l!==null){l.return=s.return,Be=l;break}Be=s.return}}function h0(i){for(;Be!==null;){var s=Be;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Ql(4,s)}catch(z){tn(s,l,z)}break;case 1:var u=s.stateNode;if(typeof u.componentDidMount=="function"){var p=s.return;try{u.componentDidMount()}catch(z){tn(s,p,z)}}var x=s.return;try{zf(s)}catch(z){tn(s,x,z)}break;case 5:var T=s.return;try{zf(s)}catch(z){tn(s,T,z)}}}catch(z){tn(s,s.return,z)}if(s===i){Be=null;break}var F=s.sibling;if(F!==null){F.return=s.return,Be=F;break}Be=s.return}}var WM=Math.ceil,Jl=R.ReactCurrentDispatcher,Hf=R.ReactCurrentOwner,fi=R.ReactCurrentBatchConfig,Et=0,xn=null,cn=null,Tn=0,ti=0,fo=Lr(0),hn=0,Ta=null,xs=0,ec=0,Gf=0,Aa=null,Yn=null,Wf=0,ho=1/0,cr=null,tc=!1,jf=null,zr=null,nc=!1,Br=null,ic=0,ba=0,Xf=null,rc=-1,sc=0;function kn(){return(Et&6)!==0?$t():rc!==-1?rc:rc=$t()}function Vr(i){return(i.mode&1)===0?1:(Et&2)!==0&&Tn!==0?Tn&-Tn:bM.transition!==null?(sc===0&&(sc=Fe()),sc):(i=mt,i!==0||(i=window.event,i=i===void 0?16:mm(i.type)),i)}function Ti(i,s,l,u){if(50<ba)throw ba=0,Xf=null,Error(t(185));pt(i,l,u),((Et&2)===0||i!==xn)&&(i===xn&&((Et&2)===0&&(ec|=l),hn===4&&Hr(i,Tn)),qn(i,u),l===1&&Et===0&&(s.mode&1)===0&&(ho=$t()+500,Ll&&Ur()))}function qn(i,s){var l=i.callbackNode;It(i,s);var u=kt(i,i===xn?Tn:0);if(u===0)l!==null&&Ko(l),i.callbackNode=null,i.callbackPriority=0;else if(s=u&-u,i.callbackPriority!==s){if(l!=null&&Ko(l),s===1)i.tag===0?AM(m0.bind(null,i)):eg(m0.bind(null,i)),MM(function(){(Et&6)===0&&Ur()}),l=null;else{switch(tr(u)){case 1:l=Zo;break;case 4:l=b;break;case 16:l=X;break;case 536870912:l=ee;break;default:l=X}l=E0(l,p0.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function p0(i,s){if(rc=-1,sc=0,(Et&6)!==0)throw Error(t(327));var l=i.callbackNode;if(po()&&i.callbackNode!==l)return null;var u=kt(i,i===xn?Tn:0);if(u===0)return null;if((u&30)!==0||(u&i.expiredLanes)!==0||s)s=oc(i,u);else{s=u;var p=Et;Et|=2;var x=v0();(xn!==i||Tn!==s)&&(cr=null,ho=$t()+500,ys(i,s));do try{YM();break}catch(F){g0(i,F)}while(!0);uf(),Jl.current=x,Et=p,cn!==null?s=0:(xn=null,Tn=0,s=hn)}if(s!==0){if(s===2&&(p=ln(i),p!==0&&(u=p,s=Yf(i,p))),s===1)throw l=Ta,ys(i,0),Hr(i,u),qn(i,$t()),l;if(s===6)Hr(i,u);else{if(p=i.current.alternate,(u&30)===0&&!jM(p)&&(s=oc(i,u),s===2&&(x=ln(i),x!==0&&(u=x,s=Yf(i,x))),s===1))throw l=Ta,ys(i,0),Hr(i,u),qn(i,$t()),l;switch(i.finishedWork=p,i.finishedLanes=u,s){case 0:case 1:throw Error(t(345));case 2:Ss(i,Yn,cr);break;case 3:if(Hr(i,u),(u&130023424)===u&&(s=Wf+500-$t(),10<s)){if(kt(i,0)!==0)break;if(p=i.suspendedLanes,(p&u)!==u){kn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Qu(Ss.bind(null,i,Yn,cr),s);break}Ss(i,Yn,cr);break;case 4:if(Hr(i,u),(u&4194240)===u)break;for(s=i.eventTimes,p=-1;0<u;){var T=31-we(u);x=1<<T,T=s[T],T>p&&(p=T),u&=~x}if(u=p,u=$t()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*WM(u/1960))-u,10<u){i.timeoutHandle=Qu(Ss.bind(null,i,Yn,cr),u);break}Ss(i,Yn,cr);break;case 5:Ss(i,Yn,cr);break;default:throw Error(t(329))}}}return qn(i,$t()),i.callbackNode===l?p0.bind(null,i):null}function Yf(i,s){var l=Aa;return i.current.memoizedState.isDehydrated&&(ys(i,s).flags|=256),i=oc(i,s),i!==2&&(s=Yn,Yn=l,s!==null&&qf(s)),i}function qf(i){Yn===null?Yn=i:Yn.push.apply(Yn,i)}function jM(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var u=0;u<l.length;u++){var p=l[u],x=p.getSnapshot;p=p.value;try{if(!yi(x(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Hr(i,s){for(s&=~Gf,s&=~ec,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-we(s),u=1<<l;i[l]=-1,s&=~u}}function m0(i){if((Et&6)!==0)throw Error(t(327));po();var s=kt(i,0);if((s&1)===0)return qn(i,$t()),null;var l=oc(i,s);if(i.tag!==0&&l===2){var u=ln(i);u!==0&&(s=u,l=Yf(i,u))}if(l===1)throw l=Ta,ys(i,0),Hr(i,s),qn(i,$t()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,Ss(i,Yn,cr),qn(i,$t()),null}function $f(i,s){var l=Et;Et|=1;try{return i(s)}finally{Et=l,Et===0&&(ho=$t()+500,Ll&&Ur())}}function _s(i){Br!==null&&Br.tag===0&&(Et&6)===0&&po();var s=Et;Et|=1;var l=fi.transition,u=mt;try{if(fi.transition=null,mt=1,i)return i()}finally{mt=u,fi.transition=l,Et=s,(Et&6)===0&&Ur()}}function Kf(){ti=fo.current,Ht(fo)}function ys(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,SM(l)),cn!==null)for(l=cn.return;l!==null;){var u=l;switch(sf(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Dl();break;case 3:lo(),Ht(Wn),Ht(Rn),xf();break;case 5:gf(u);break;case 4:lo();break;case 13:Ht(Kt);break;case 19:Ht(Kt);break;case 10:ff(u.type._context);break;case 22:case 23:Kf()}l=l.return}if(xn=i,cn=i=Gr(i.current,null),Tn=ti=s,hn=0,Ta=null,Gf=ec=xs=0,Yn=Aa=null,ms!==null){for(s=0;s<ms.length;s++)if(l=ms[s],u=l.interleaved,u!==null){l.interleaved=null;var p=u.next,x=l.pending;if(x!==null){var T=x.next;x.next=p,u.next=T}l.pending=u}ms=null}return i}function g0(i,s){do{var l=cn;try{if(uf(),Gl.current=Yl,Wl){for(var u=Zt.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}Wl=!1}if(vs=0,vn=dn=Zt=null,_a=!1,ya=0,Hf.current=null,l===null||l.return===null){hn=1,Ta=s,cn=null;break}e:{var x=i,T=l.return,F=l,z=s;if(s=Tn,F.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var oe=z,ye=F,Se=ye.tag;if((ye.mode&1)===0&&(Se===0||Se===11||Se===15)){var _e=ye.alternate;_e?(ye.updateQueue=_e.updateQueue,ye.memoizedState=_e.memoizedState,ye.lanes=_e.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Oe=Vg(T);if(Oe!==null){Oe.flags&=-257,Hg(Oe,T,F,x,s),Oe.mode&1&&Bg(x,oe,s),s=Oe,z=oe;var Ge=s.updateQueue;if(Ge===null){var Xe=new Set;Xe.add(z),s.updateQueue=Xe}else Ge.add(z);break e}else{if((s&1)===0){Bg(x,oe,s),Zf();break e}z=Error(t(426))}}else if(Yt&&F.mode&1){var on=Vg(T);if(on!==null){(on.flags&65536)===0&&(on.flags|=256),Hg(on,T,F,x,s),lf(co(z,F));break e}}x=z=co(z,F),hn!==4&&(hn=2),Aa===null?Aa=[x]:Aa.push(x),x=T;do{switch(x.tag){case 3:x.flags|=65536,s&=-s,x.lanes|=s;var Z=kg(x,z,s);fg(x,Z);break e;case 1:F=z;var G=x.type,te=x.stateNode;if((x.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(zr===null||!zr.has(te)))){x.flags|=65536,s&=-s,x.lanes|=s;var Ee=zg(x,F,s);fg(x,Ee);break e}}x=x.return}while(x!==null)}_0(l)}catch(Ke){s=Ke,cn===l&&l!==null&&(cn=l=l.return);continue}break}while(!0)}function v0(){var i=Jl.current;return Jl.current=Yl,i===null?Yl:i}function Zf(){(hn===0||hn===3||hn===2)&&(hn=4),xn===null||(xs&268435455)===0&&(ec&268435455)===0||Hr(xn,Tn)}function oc(i,s){var l=Et;Et|=2;var u=v0();(xn!==i||Tn!==s)&&(cr=null,ys(i,s));do try{XM();break}catch(p){g0(i,p)}while(!0);if(uf(),Et=l,Jl.current=u,cn!==null)throw Error(t(261));return xn=null,Tn=0,hn}function XM(){for(;cn!==null;)x0(cn)}function YM(){for(;cn!==null&&!ml();)x0(cn)}function x0(i){var s=M0(i.alternate,i,ti);i.memoizedProps=i.pendingProps,s===null?_0(i):cn=s,Hf.current=null}function _0(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=zM(l,s,ti),l!==null){cn=l;return}}else{if(l=BM(l,s),l!==null){l.flags&=32767,cn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{hn=6,cn=null;return}}if(s=s.sibling,s!==null){cn=s;return}cn=s=i}while(s!==null);hn===0&&(hn=5)}function Ss(i,s,l){var u=mt,p=fi.transition;try{fi.transition=null,mt=1,qM(i,s,l,u)}finally{fi.transition=p,mt=u}return null}function qM(i,s,l,u){do po();while(Br!==null);if((Et&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var x=l.lanes|l.childLanes;if(Hn(i,x),i===xn&&(cn=xn=null,Tn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||nc||(nc=!0,E0(X,function(){return po(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=fi.transition,fi.transition=null;var T=mt;mt=1;var F=Et;Et|=4,Hf.current=null,HM(i,l),c0(l,i),pM(Ku),vl=!!$u,Ku=$u=null,i.current=l,GM(l),Ru(),Et=F,mt=T,fi.transition=x}else i.current=l;if(nc&&(nc=!1,Br=i,ic=p),x=i.pendingLanes,x===0&&(zr=null),ke(l.stateNode),qn(i,$t()),s!==null)for(u=i.onRecoverableError,l=0;l<s.length;l++)p=s[l],u(p.value,{componentStack:p.stack,digest:p.digest});if(tc)throw tc=!1,i=jf,jf=null,i;return(ic&1)!==0&&i.tag!==0&&po(),x=i.pendingLanes,(x&1)!==0?i===Xf?ba++:(ba=0,Xf=i):ba=0,Ur(),null}function po(){if(Br!==null){var i=tr(ic),s=fi.transition,l=mt;try{if(fi.transition=null,mt=16>i?16:i,Br===null)var u=!1;else{if(i=Br,Br=null,ic=0,(Et&6)!==0)throw Error(t(331));var p=Et;for(Et|=4,Be=i.current;Be!==null;){var x=Be,T=x.child;if((Be.flags&16)!==0){var F=x.deletions;if(F!==null){for(var z=0;z<F.length;z++){var oe=F[z];for(Be=oe;Be!==null;){var ye=Be;switch(ye.tag){case 0:case 11:case 15:wa(8,ye,x)}var Se=ye.child;if(Se!==null)Se.return=ye,Be=Se;else for(;Be!==null;){ye=Be;var _e=ye.sibling,Oe=ye.return;if(r0(ye),ye===oe){Be=null;break}if(_e!==null){_e.return=Oe,Be=_e;break}Be=Oe}}}var Ge=x.alternate;if(Ge!==null){var Xe=Ge.child;if(Xe!==null){Ge.child=null;do{var on=Xe.sibling;Xe.sibling=null,Xe=on}while(Xe!==null)}}Be=x}}if((x.subtreeFlags&2064)!==0&&T!==null)T.return=x,Be=T;else e:for(;Be!==null;){if(x=Be,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:wa(9,x,x.return)}var Z=x.sibling;if(Z!==null){Z.return=x.return,Be=Z;break e}Be=x.return}}var G=i.current;for(Be=G;Be!==null;){T=Be;var te=T.child;if((T.subtreeFlags&2064)!==0&&te!==null)te.return=T,Be=te;else e:for(T=G;Be!==null;){if(F=Be,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:Ql(9,F)}}catch(Ke){tn(F,F.return,Ke)}if(F===T){Be=null;break e}var Ee=F.sibling;if(Ee!==null){Ee.return=F.return,Be=Ee;break e}Be=F.return}}if(Et=p,Ur(),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(J,i)}catch{}u=!0}return u}finally{mt=l,fi.transition=s}}return!1}function y0(i,s,l){s=co(l,s),s=kg(i,s,1),i=Or(i,s,1),s=kn(),i!==null&&(pt(i,1,s),qn(i,s))}function tn(i,s,l){if(i.tag===3)y0(i,i,l);else for(;s!==null;){if(s.tag===3){y0(s,i,l);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(zr===null||!zr.has(u))){i=co(l,i),i=zg(s,i,1),s=Or(s,i,1),i=kn(),s!==null&&(pt(s,1,i),qn(s,i));break}}s=s.return}}function $M(i,s,l){var u=i.pingCache;u!==null&&u.delete(s),s=kn(),i.pingedLanes|=i.suspendedLanes&l,xn===i&&(Tn&l)===l&&(hn===4||hn===3&&(Tn&130023424)===Tn&&500>$t()-Wf?ys(i,0):Gf|=l),qn(i,s)}function S0(i,s){s===0&&((i.mode&1)===0?s=1:(s=qe,qe<<=1,(qe&130023424)===0&&(qe=4194304)));var l=kn();i=or(i,s),i!==null&&(pt(i,s,l),qn(i,l))}function KM(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),S0(i,l)}function ZM(i,s){var l=0;switch(i.tag){case 13:var u=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:u=i.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(s),S0(i,l)}var M0;M0=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||Wn.current)Xn=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return Xn=!1,kM(i,s,l);Xn=(i.flags&131072)!==0}else Xn=!1,Yt&&(s.flags&1048576)!==0&&tg(s,Ul,s.index);switch(s.lanes=0,s.tag){case 2:var u=s.type;Kl(i,s),i=s.pendingProps;var p=to(s,Rn.current);ao(s,l),p=Sf(null,s,u,i,p,l);var x=Mf();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,jn(u)?(x=!0,Nl(s)):x=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,pf(s),p.updater=ql,s.stateNode=p,p._reactInternals=s,Rf(s,u,i,l),s=Nf(null,s,u,!0,x,l)):(s.tag=0,Yt&&x&&rf(s),On(null,s,p,l),s=s.child),s;case 16:u=s.elementType;e:{switch(Kl(i,s),i=s.pendingProps,p=u._init,u=p(u._payload),s.type=u,p=s.tag=JM(u),i=Mi(u,i),p){case 0:s=Df(null,s,u,i,l);break e;case 1:s=qg(null,s,u,i,l);break e;case 11:s=Gg(null,s,u,i,l);break e;case 14:s=Wg(null,s,u,Mi(u.type,i),l);break e}throw Error(t(306,u,""))}return s;case 0:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Mi(u,p),Df(i,s,u,p,l);case 1:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Mi(u,p),qg(i,s,u,p,l);case 3:e:{if($g(s),i===null)throw Error(t(387));u=s.pendingProps,x=s.memoizedState,p=x.element,ug(i,s),Vl(s,u,null,l);var T=s.memoizedState;if(u=T.element,x.isDehydrated)if(x={element:u,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},s.updateQueue.baseState=x,s.memoizedState=x,s.flags&256){p=co(Error(t(423)),s),s=Kg(i,s,u,l,p);break e}else if(u!==p){p=co(Error(t(424)),s),s=Kg(i,s,u,l,p);break e}else for(ei=Nr(s.stateNode.containerInfo.firstChild),Jn=s,Yt=!0,Si=null,l=lg(s,null,u,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ro(),u===p){s=lr(i,s,l);break e}On(i,s,u,l)}s=s.child}return s;case 5:return hg(s),i===null&&af(s),u=s.type,p=s.pendingProps,x=i!==null?i.memoizedProps:null,T=p.children,Zu(u,p)?T=null:x!==null&&Zu(u,x)&&(s.flags|=32),Yg(i,s),On(i,s,T,l),s.child;case 6:return i===null&&af(s),null;case 13:return Zg(i,s,l);case 4:return mf(s,s.stateNode.containerInfo),u=s.pendingProps,i===null?s.child=so(s,null,u,l):On(i,s,u,l),s.child;case 11:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Mi(u,p),Gg(i,s,u,p,l);case 7:return On(i,s,s.pendingProps,l),s.child;case 8:return On(i,s,s.pendingProps.children,l),s.child;case 12:return On(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(u=s.type._context,p=s.pendingProps,x=s.memoizedProps,T=p.value,zt(kl,u._currentValue),u._currentValue=T,x!==null)if(yi(x.value,T)){if(x.children===p.children&&!Wn.current){s=lr(i,s,l);break e}}else for(x=s.child,x!==null&&(x.return=s);x!==null;){var F=x.dependencies;if(F!==null){T=x.child;for(var z=F.firstContext;z!==null;){if(z.context===u){if(x.tag===1){z=ar(-1,l&-l),z.tag=2;var oe=x.updateQueue;if(oe!==null){oe=oe.shared;var ye=oe.pending;ye===null?z.next=z:(z.next=ye.next,ye.next=z),oe.pending=z}}x.lanes|=l,z=x.alternate,z!==null&&(z.lanes|=l),df(x.return,l,s),F.lanes|=l;break}z=z.next}}else if(x.tag===10)T=x.type===s.type?null:x.child;else if(x.tag===18){if(T=x.return,T===null)throw Error(t(341));T.lanes|=l,F=T.alternate,F!==null&&(F.lanes|=l),df(T,l,s),T=x.sibling}else T=x.child;if(T!==null)T.return=x;else for(T=x;T!==null;){if(T===s){T=null;break}if(x=T.sibling,x!==null){x.return=T.return,T=x;break}T=T.return}x=T}On(i,s,p.children,l),s=s.child}return s;case 9:return p=s.type,u=s.pendingProps.children,ao(s,l),p=ci(p),u=u(p),s.flags|=1,On(i,s,u,l),s.child;case 14:return u=s.type,p=Mi(u,s.pendingProps),p=Mi(u.type,p),Wg(i,s,u,p,l);case 15:return jg(i,s,s.type,s.pendingProps,l);case 17:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Mi(u,p),Kl(i,s),s.tag=1,jn(u)?(i=!0,Nl(s)):i=!1,ao(s,l),Fg(s,u,p),Rf(s,u,p,l),Nf(null,s,u,!0,i,l);case 19:return Jg(i,s,l);case 22:return Xg(i,s,l)}throw Error(t(156,s.tag))};function E0(i,s){return cs(i,s)}function QM(i,s,l,u){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(i,s,l,u){return new QM(i,s,l,u)}function Qf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function JM(i){if(typeof i=="function")return Qf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===$)return 11;if(i===Q)return 14}return 2}function Gr(i,s){var l=i.alternate;return l===null?(l=di(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function ac(i,s,l,u,p,x){var T=2;if(u=i,typeof i=="function")Qf(i)&&(T=1);else if(typeof i=="string")T=5;else e:switch(i){case k:return Ms(l.children,p,x,s);case w:T=8,p|=8;break;case U:return i=di(12,l,s,p|2),i.elementType=U,i.lanes=x,i;case fe:return i=di(13,l,s,p),i.elementType=fe,i.lanes=x,i;case de:return i=di(19,l,s,p),i.elementType=de,i.lanes=x,i;case q:return lc(l,p,x,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case H:T=10;break e;case B:T=9;break e;case $:T=11;break e;case Q:T=14;break e;case ce:T=16,u=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=di(T,l,s,p),s.elementType=i,s.type=u,s.lanes=x,s}function Ms(i,s,l,u){return i=di(7,i,u,s),i.lanes=l,i}function lc(i,s,l,u){return i=di(22,i,u,s),i.elementType=q,i.lanes=l,i.stateNode={isHidden:!1},i}function Jf(i,s,l){return i=di(6,i,null,s),i.lanes=l,i}function ed(i,s,l){return s=di(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function eE(i,s,l,u,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=En(0),this.expirationTimes=En(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=En(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function td(i,s,l,u,p,x,T,F,z){return i=new eE(i,s,l,F,z),s===1?(s=1,x===!0&&(s|=8)):s=0,x=di(3,null,null,s),i.current=x,x.stateNode=i,x.memoizedState={element:u,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},pf(x),i}function tE(i,s,l){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:u==null?null:""+u,children:i,containerInfo:s,implementation:l}}function w0(i){if(!i)return Ir;i=i._reactInternals;e:{if(Fn(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(jn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(jn(l))return Qm(i,l,s)}return s}function T0(i,s,l,u,p,x,T,F,z){return i=td(l,u,!0,i,p,x,T,F,z),i.context=w0(null),l=i.current,u=kn(),p=Vr(l),x=ar(u,p),x.callback=s??null,Or(l,x,p),i.current.lanes=p,pt(i,p,u),qn(i,u),i}function cc(i,s,l,u){var p=s.current,x=kn(),T=Vr(p);return l=w0(l),s.context===null?s.context=l:s.pendingContext=l,s=ar(x,T),s.payload={element:i},u=u===void 0?null:u,u!==null&&(s.callback=u),i=Or(p,s,T),i!==null&&(Ti(i,p,T,x),Bl(i,p,T)),T}function uc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function A0(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function nd(i,s){A0(i,s),(i=i.alternate)&&A0(i,s)}function nE(){return null}var b0=typeof reportError=="function"?reportError:function(i){console.error(i)};function id(i){this._internalRoot=i}fc.prototype.render=id.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));cc(i,s,null,null)},fc.prototype.unmount=id.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;_s(function(){cc(null,i,null,null)}),s[nr]=null}};function fc(i){this._internalRoot=i}fc.prototype.unstable_scheduleHydration=function(i){if(i){var s=Ut();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Cr.length&&s!==0&&s<Cr[l].priority;l++);Cr.splice(l,0,i),l===0&&hm(i)}};function rd(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function dc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function R0(){}function iE(i,s,l,u,p){if(p){if(typeof u=="function"){var x=u;u=function(){var oe=uc(T);x.call(oe)}}var T=T0(s,u,i,0,null,!1,!1,"",R0);return i._reactRootContainer=T,i[nr]=T.current,fa(i.nodeType===8?i.parentNode:i),_s(),T}for(;p=i.lastChild;)i.removeChild(p);if(typeof u=="function"){var F=u;u=function(){var oe=uc(z);F.call(oe)}}var z=td(i,0,!1,null,null,!1,!1,"",R0);return i._reactRootContainer=z,i[nr]=z.current,fa(i.nodeType===8?i.parentNode:i),_s(function(){cc(s,z,l,u)}),z}function hc(i,s,l,u,p){var x=l._reactRootContainer;if(x){var T=x;if(typeof p=="function"){var F=p;p=function(){var z=uc(T);F.call(z)}}cc(s,T,i,p)}else T=iE(l,s,i,p,u);return uc(T)}Nt=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=Mt(s.pendingLanes);l!==0&&(Gn(s,l|1),qn(s,$t()),(Et&6)===0&&(ho=$t()+500,Ur()))}break;case 13:_s(function(){var u=or(i,1);if(u!==null){var p=kn();Ti(u,i,1,p)}}),nd(i,1)}},Bt=function(i){if(i.tag===13){var s=or(i,134217728);if(s!==null){var l=kn();Ti(s,i,134217728,l)}nd(i,134217728)}},xi=function(i){if(i.tag===13){var s=Vr(i),l=or(i,s);if(l!==null){var u=kn();Ti(l,i,s,u)}nd(i,s)}},Ut=function(){return mt},_i=function(i,s){var l=mt;try{return mt=i,s()}finally{mt=l}},nt=function(i,s,l){switch(s){case"input":if(Wt(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var u=l[s];if(u!==i&&u.form===i.form){var p=Pl(u);if(!p)throw Error(t(90));Gt(u),Wt(u,p)}}}break;case"textarea":Mn(i,l);break;case"select":s=l.value,s!=null&&Lt(i,!!l.multiple,s,!1)}},Ne=$f,ve=_s;var rE={usingClientEntryPoint:!1,Events:[pa,Js,Pl,pe,Ce,$f]},Ra={findFiberByHostInstance:fs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sE={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=ls(i),i===null?null:i.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||nE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{J=pc.inject(sE),Te=pc}catch{}}return $n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rE,$n.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rd(s))throw Error(t(200));return tE(i,s,null,l)},$n.createRoot=function(i,s){if(!rd(i))throw Error(t(299));var l=!1,u="",p=b0;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=td(i,1,!1,null,null,l,!1,u,p),i[nr]=s.current,fa(i.nodeType===8?i.parentNode:i),new id(s)},$n.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=ls(s),i=i===null?null:i.stateNode,i},$n.flushSync=function(i){return _s(i)},$n.hydrate=function(i,s,l){if(!dc(s))throw Error(t(200));return hc(null,i,s,!0,l)},$n.hydrateRoot=function(i,s,l){if(!rd(i))throw Error(t(405));var u=l!=null&&l.hydratedSources||null,p=!1,x="",T=b0;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),s=T0(s,null,i,1,l??null,p,!1,x,T),i[nr]=s.current,fa(i),u)for(i=0;i<u.length;i++)l=u[i],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new fc(s)},$n.render=function(i,s,l){if(!dc(s))throw Error(t(200));return hc(null,i,s,!1,l)},$n.unmountComponentAtNode=function(i){if(!dc(i))throw Error(t(40));return i._reactRootContainer?(_s(function(){hc(null,null,i,!1,function(){i._reactRootContainer=null,i[nr]=null})}),!0):!1},$n.unstable_batchedUpdates=$f,$n.unstable_renderSubtreeIntoContainer=function(i,s,l,u){if(!dc(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return hc(i,s,l,!1,u)},$n.version="18.3.1-next-f1338f8080-20240426",$n}var F0;function mE(){if(F0)return ad.exports;F0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),ad.exports=pE(),ad.exports}var O0;function gE(){if(O0)return mc;O0=1;var n=mE();return mc.createRoot=n.createRoot,mc.hydrateRoot=n.hydrateRoot,mc}var vE=gE(),k0="1.3.25";function u_(n,e,t){return Math.max(n,Math.min(e,t))}function xE(n,e,t){return(1-t)*n+t*e}function _E(n,e,t,r){return xE(n,e,1-Math.exp(-t*r))}function yE(n,e){return(n%e+e)%e}var SE=class{constructor(){Qe(this,"isRunning",!1);Qe(this,"value",0);Qe(this,"from",0);Qe(this,"to",0);Qe(this,"currentTime",0);Qe(this,"lerp");Qe(this,"duration");Qe(this,"easing");Qe(this,"onUpdate")}advance(n){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=n;const r=u_(0,this.currentTime/this.duration,1);e=r>=1;const o=e?1:this.easing(r);this.value=this.from+(this.to-this.from)*o}else this.lerp?(this.value=_E(this.value,this.to,this.lerp*60,n),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(n,e,{lerp:t,duration:r,easing:o,onStart:a,onUpdate:c}){this.from=this.value=n,this.to=e,this.lerp=t,this.duration=r,this.easing=o,this.currentTime=0,this.isRunning=!0,a==null||a(),this.onUpdate=c}};function ME(n,e){let t;return function(...r){clearTimeout(t),t=setTimeout(()=>{t=void 0,n.apply(this,r)},e)}}var EE=class{constructor(n,e,{autoResize:t=!0,debounce:r=250}={}){Qe(this,"width",0);Qe(this,"height",0);Qe(this,"scrollHeight",0);Qe(this,"scrollWidth",0);Qe(this,"debouncedResize");Qe(this,"wrapperResizeObserver");Qe(this,"contentResizeObserver");Qe(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Qe(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Qe(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=n,this.content=e,t&&(this.debouncedResize=ME(this.resize,r),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var n,e;(n=this.wrapperResizeObserver)==null||n.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},f_=class{constructor(){Qe(this,"events",{})}emit(n,...e){var r;const t=this.events[n]||[];for(let o=0,a=t.length;o<a;o++)(r=t[o])==null||r.call(t,...e)}on(n,e){return this.events[n]?this.events[n].push(e):this.events[n]=[e],()=>{var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(r=>e!==r)}}off(n,e){var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(r=>e!==r)}destroy(){this.events={}}};const wE=100/6,jr={passive:!1};function z0(n,e){return n===1?wE:n===2?e:1}var TE=class{constructor(n,e={wheelMultiplier:1,touchMultiplier:1}){Qe(this,"touchStart",{x:0,y:0});Qe(this,"lastDelta",{x:0,y:0});Qe(this,"window",{width:0,height:0});Qe(this,"emitter",new f_);Qe(this,"onTouchStart",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})});Qe(this,"onTouchMove",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n,r=-(e-this.touchStart.x)*this.options.touchMultiplier,o=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:r,y:o},this.emitter.emit("scroll",{deltaX:r,deltaY:o,event:n})});Qe(this,"onTouchEnd",n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})});Qe(this,"onWheel",n=>{let{deltaX:e,deltaY:t,deltaMode:r}=n;const o=z0(r,this.window.width),a=z0(r,this.window.height);e*=o,t*=a,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:n})});Qe(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=n,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,jr),this.element.addEventListener("touchstart",this.onTouchStart,jr),this.element.addEventListener("touchmove",this.onTouchMove,jr),this.element.addEventListener("touchend",this.onTouchEnd,jr)}on(n,e){return this.emitter.on(n,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,jr),this.element.removeEventListener("touchstart",this.onTouchStart,jr),this.element.removeEventListener("touchmove",this.onTouchMove,jr),this.element.removeEventListener("touchend",this.onTouchEnd,jr)}};const B0=n=>Math.min(1,1.001-2**(-10*n));var AE=class{constructor({wrapper:n=window,content:e=document.documentElement,eventsTarget:t=n,smoothWheel:r=!0,syncTouch:o=!1,syncTouchLerp:a=.075,touchInertiaExponent:c=1.7,duration:f,easing:d,lerp:h=.1,infinite:g=!1,orientation:v="vertical",gestureOrientation:m=v==="horizontal"?"both":"vertical",touchMultiplier:y=1,wheelMultiplier:M=1,autoResize:A=!0,prevent:S,virtualScroll:_,overscroll:D=!0,autoRaf:L=!1,anchors:R=!1,autoToggle:N=!1,allowNestedScroll:P=!1,__experimental__naiveDimensions:k=!1,naiveDimensions:w=k,stopInertiaOnNavigate:U=!1}={}){Qe(this,"_isScrolling",!1);Qe(this,"_isStopped",!1);Qe(this,"_isLocked",!1);Qe(this,"_preventNextNativeScrollEvent",!1);Qe(this,"_resetVelocityTimeout",null);Qe(this,"_rafId",null);Qe(this,"_isDraggingSelection",!1);Qe(this,"isTouching");Qe(this,"isIos");Qe(this,"time",0);Qe(this,"userData",{});Qe(this,"lastVelocity",0);Qe(this,"velocity",0);Qe(this,"direction",0);Qe(this,"options");Qe(this,"targetScroll");Qe(this,"animatedScroll");Qe(this,"animate",new SE);Qe(this,"emitter",new f_);Qe(this,"dimensions");Qe(this,"virtualScroll");Qe(this,"onScrollEnd",n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()});Qe(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Qe(this,"onTransitionEnd",n=>{var e;(e=n.propertyName)!=null&&e.includes("overflow")&&n.target===this.rootElement&&this.checkOverflow()});Qe(this,"onClick",n=>{const e=n.composedPath().filter(r=>r instanceof HTMLAnchorElement&&r.href).map(r=>new URL(r.href)),t=new URL(window.location.href);if(this.options.anchors){const r=e.find(o=>t.host===o.host&&t.pathname===o.pathname&&o.hash);if(r){const o=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=decodeURIComponent(r.hash);this.scrollTo(a,o);return}}if(this.options.stopInertiaOnNavigate&&e.some(r=>t.host===r.host&&t.pathname!==r.pathname)){this.reset();return}});Qe(this,"onPointerDown",n=>{n.button===1&&this.reset()});Qe(this,"onVirtualScroll",n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:e,deltaY:t,event:r}=n;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:r}),r.ctrlKey||r.lenisStopPropagation)return;const o=r.type.includes("touch"),a=r.type.includes("wheel");if(o&&this.isIos&&(r.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(r)),this._isDraggingSelection)){r.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=r.type==="touchstart"||r.type==="touchmove";const c=e===0&&t===0;if(this.options.syncTouch&&o&&r.type==="touchstart"&&c&&!this.isStopped&&!this.isLocked){this.reset();return}const f=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(c||f)return;let d=r.composedPath();d=d.slice(0,d.indexOf(this.rootElement));const h=this.options.prevent,g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(d.find(M=>{var A,S,_,D,L;return M instanceof HTMLElement&&(typeof h=="function"&&(h==null?void 0:h(M))||((A=M.hasAttribute)==null?void 0:A.call(M,"data-lenis-prevent"))||g==="vertical"&&((S=M.hasAttribute)==null?void 0:S.call(M,"data-lenis-prevent-vertical"))||g==="horizontal"&&((_=M.hasAttribute)==null?void 0:_.call(M,"data-lenis-prevent-horizontal"))||o&&((D=M.hasAttribute)==null?void 0:D.call(M,"data-lenis-prevent-touch"))||a&&((L=M.hasAttribute)==null?void 0:L.call(M,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(M,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){r.cancelable&&r.preventDefault();return}if(!(this.options.syncTouch&&o||this.options.smoothWheel&&a)){this.isScrolling="native",this.animate.stop(),r.lenisStopPropagation=!0;return}let v=t;this.options.gestureOrientation==="both"?v=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(v=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(r.lenisStopPropagation=!0),r.cancelable&&r.preventDefault();const m=o&&this.options.syncTouch,y=o&&r.type==="touchend";y&&(v=Math.sign(v)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+v,{programmatic:!1,...m?{lerp:y?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Qe(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Qe(this,"raf",n=>{const e=n-(this.time||n);this.time=n,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=k0,window.lenis||(window.lenis={}),window.lenis.version=k0,v==="horizontal"&&(window.lenis.horizontal=!0),o===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!n||n===document.documentElement)&&(n=window),typeof f=="number"&&typeof d!="function"?d=B0:typeof d=="function"&&typeof f!="number"&&(f=1),this.options={wrapper:n,content:e,eventsTarget:t,smoothWheel:r,syncTouch:o,syncTouchLerp:a,touchInertiaExponent:c,duration:f,easing:d,lerp:h,infinite:g,gestureOrientation:m,orientation:v,touchMultiplier:y,wheelMultiplier:M,autoResize:A,prevent:S,virtualScroll:_,overscroll:D,autoRaf:L,anchors:R,autoToggle:N,allowNestedScroll:P,naiveDimensions:w,stopInertiaOnNavigate:U},this.dimensions=new EE(n,e,{autoResize:A}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new TE(t,{touchMultiplier:y,wheelMultiplier:M}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,e){return this.emitter.on(n,e)}off(n,e){return this.emitter.off(n,e)}get overflow(){const n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}isTouchOnSelectionHandle(n){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=n.targetTouches[0]??n.changedTouches[0];if(!t)return!1;const r=e.getRangeAt(0).getClientRects();if(r.length===0)return!1;const o=r[0],a=r[r.length-1],c=40,f=Math.hypot(t.clientX-o.left,t.clientY-o.top)<=c,d=Math.hypot(t.clientX-a.right,t.clientY-a.bottom)<=c;return f||d}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(n,{offset:e=0,immediate:t=!1,lock:r=!1,programmatic:o=!0,lerp:a=o?this.options.lerp:void 0,duration:c=o?this.options.duration:void 0,easing:f=o?this.options.easing:void 0,onStart:d,onComplete:h,force:g=!1,userData:v}={}){if((this.isStopped||this.isLocked)&&!g)return;let m=n,y=e;if(typeof m=="string"&&["top","left","start","#"].includes(m))m=0;else if(typeof m=="string"&&["bottom","right","end"].includes(m))m=this.limit;else{let M=null;if(typeof m=="string"?(M=m.startsWith("#")?document.getElementById(m.slice(1)):document.querySelector(m),M||(m==="#top"?m=0:console.warn("Lenis: Target not found",m))):m instanceof HTMLElement&&(m!=null&&m.nodeType)&&(M=m),M){if(this.options.wrapper!==window){const R=this.rootElement.getBoundingClientRect();y-=this.isHorizontal?R.left:R.top}const A=M.getBoundingClientRect(),S=getComputedStyle(M),_=this.isHorizontal?Number.parseFloat(S.scrollMarginLeft):Number.parseFloat(S.scrollMarginTop),D=getComputedStyle(this.rootElement),L=this.isHorizontal?Number.parseFloat(D.scrollPaddingLeft):Number.parseFloat(D.scrollPaddingTop);m=(this.isHorizontal?A.left:A.top)+this.animatedScroll-(Number.isNaN(_)?0:_)-(Number.isNaN(L)?0:L)}}if(typeof m=="number"){if(m+=y,this.options.infinite){if(o){this.targetScroll=this.animatedScroll=this.scroll;const M=m-this.animatedScroll;M>this.limit/2?m-=this.limit:M<-this.limit/2&&(m+=this.limit)}}else m=u_(0,m,this.limit);if(m===this.targetScroll){d==null||d(this),h==null||h(this);return}if(this.userData=v??{},t){this.animatedScroll=this.targetScroll=m,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),h==null||h(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}o||(this.targetScroll=m),typeof c=="number"&&typeof f!="function"?f=B0:typeof f=="function"&&typeof c!="number"&&(c=1),this.animate.fromTo(this.animatedScroll,m,{duration:c,easing:f,lerp:a,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling="smooth",d==null||d(this)},onUpdate:(M,A)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=M-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=M,this.setScroll(this.scroll),o&&(this.targetScroll=M),A||this.emit(),A&&(this.reset(),this.emit(),h==null||h(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:e,deltaY:t}){const r=Date.now();n._lenis||(n._lenis={});const o=n._lenis;let a,c,f,d,h,g,v,m,y,M;if(r-(o.time??0)>2e3){o.time=Date.now();const P=window.getComputedStyle(n);if(o.computedStyle=P,a=["auto","overlay","scroll"].includes(P.overflowX),c=["auto","overlay","scroll"].includes(P.overflowY),h=["auto"].includes(P.overscrollBehaviorX),g=["auto"].includes(P.overscrollBehaviorY),o.hasOverflowX=a,o.hasOverflowY=c,!(a||c))return!1;v=n.scrollWidth,m=n.scrollHeight,y=n.clientWidth,M=n.clientHeight,f=v>y,d=m>M,o.isScrollableX=f,o.isScrollableY=d,o.scrollWidth=v,o.scrollHeight=m,o.clientWidth=y,o.clientHeight=M,o.hasOverscrollBehaviorX=h,o.hasOverscrollBehaviorY=g}else f=o.isScrollableX,d=o.isScrollableY,a=o.hasOverflowX,c=o.hasOverflowY,v=o.scrollWidth,m=o.scrollHeight,y=o.clientWidth,M=o.clientHeight,h=o.hasOverscrollBehaviorX,g=o.hasOverscrollBehaviorY;if(!(a&&f||c&&d))return!1;const A=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let S,_,D,L,R,N;if(A==="horizontal")S=Math.round(n.scrollLeft),_=v-y,D=e,L=a,R=f,N=h;else if(A==="vertical")S=Math.round(n.scrollTop),_=m-M,D=t,L=c,R=d,N=g;else return!1;return!N&&(S>=_||S<=0)?!0:(D>0?S<_:S>0)&&L&&R}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?yE(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(n=>{this.rootElement.classList.add(n)})}cleanUpClassName(){for(const n of Array.from(this.rootElement.classList))(n==="lenis"||n.startsWith("lenis-"))&&this.rootElement.classList.remove(n)}};function bE(){return ze.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const n=new AE({duration:1.15,easing:r=>Math.min(1,1.001-Math.pow(2,-10*r))});let e=0;const t=r=>{n.raf(r),e=requestAnimationFrame(t)};return e=requestAnimationFrame(t),()=>{cancelAnimationFrame(e),n.destroy()}},[]),null}const d_=ze.createContext({});function pu(n){const e=ze.useRef(null);return e.current===null&&(e.current=n()),e.current}const dp=ze.createContext(null),mu=ze.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function RE(n=!0){const e=ze.useContext(dp);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,a=ze.useId();ze.useEffect(()=>{n&&o(a)},[n]);const c=ze.useCallback(()=>n&&r&&r(a),[a,r,n]);return!t&&r?[!1,c]:[!0]}const hp=typeof window<"u",gu=hp?ze.useLayoutEffect:ze.useEffect,Bn=n=>n;let CE=Bn,h_=Bn;function pp(n){let e;return()=>(e===void 0&&(e=n()),e)}const Os=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r},vr=n=>n*1e3,xr=n=>n/1e3,PE={useManualTiming:!1};function DE(n){let e=new Set,t=new Set,r=!1,o=!1;const a=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function f(h){a.has(h)&&(d.schedule(h),n()),h(c)}const d={schedule:(h,g=!1,v=!1)=>{const y=v&&r?e:t;return g&&a.add(h),y.has(h)||y.add(h),h},cancel:h=>{t.delete(h),a.delete(h)},process:h=>{if(c=h,r){o=!0;return}r=!0,[e,t]=[t,e],e.forEach(f),e.clear(),r=!1,o&&(o=!1,d.process(h))}};return d}const gc=["read","resolveKeyframes","update","preRender","render","postRender"],NE=40;function p_(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,c=gc.reduce((_,D)=>(_[D]=DE(a),_),{}),{read:f,resolveKeyframes:d,update:h,preRender:g,render:v,postRender:m}=c,y=()=>{const _=performance.now();t=!1,o.delta=r?1e3/60:Math.max(Math.min(_-o.timestamp,NE),1),o.timestamp=_,o.isProcessing=!0,f.process(o),d.process(o),h.process(o),g.process(o),v.process(o),m.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(y))},M=()=>{t=!0,r=!0,o.isProcessing||n(y)};return{schedule:gc.reduce((_,D)=>{const L=c[D];return _[D]=(R,N=!1,P=!1)=>(t||M(),L.schedule(R,N,P)),_},{}),cancel:_=>{for(let D=0;D<gc.length;D++)c[gc[D]].cancel(_)},state:o,steps:c}}const{schedule:Rt,cancel:Ii,state:pn,steps:ud}=p_(typeof requestAnimationFrame<"u"?requestAnimationFrame:Bn,!0),m_=ze.createContext({strict:!1}),V0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Oo={};for(const n in V0)Oo[n]={isEnabled:e=>V0[n].some(t=>!!e[t])};function LE(n){for(const e in n)Oo[e]={...Oo[e],...n[e]}}const IE=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Jc(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||IE.has(n)}let g_=n=>!Jc(n);function UE(n){n&&(g_=e=>e.startsWith("on")?!Jc(e):n(e))}try{UE(require("@emotion/is-prop-valid").default)}catch{}function FE(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||(g_(o)||t===!0&&Jc(o)||!e&&!Jc(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}function OE(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...r)=>n(...r);return new Proxy(t,{get:(r,o)=>o==="create"?n:(e.has(o)||e.set(o,n(o)),e.get(o))})}const vu=ze.createContext({});function Za(n){return typeof n=="string"||Array.isArray(n)}function xu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const mp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],gp=["initial",...mp];function _u(n){return xu(n.animate)||gp.some(e=>Za(n[e]))}function v_(n){return!!(_u(n)||n.variants)}function kE(n,e){if(_u(n)){const{initial:t,animate:r}=n;return{initial:t===!1||Za(t)?t:void 0,animate:Za(r)?r:void 0}}return n.inherit!==!1?e:{}}function zE(n){const{initial:e,animate:t}=kE(n,ze.useContext(vu));return ze.useMemo(()=>({initial:e,animate:t}),[H0(e),H0(t)])}function H0(n){return Array.isArray(n)?n.join(" "):n}const BE=Symbol.for("motionComponentSymbol");function Co(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function VE(n,e,t){return ze.useCallback(r=>{r&&n.onMount&&n.onMount(r),e&&(r?e.mount(r):e.unmount()),t&&(typeof t=="function"?t(r):Co(t)&&(t.current=r))},[e])}const vp=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),HE="framerAppearId",x_="data-"+vp(HE),{schedule:xp}=p_(queueMicrotask,!1),__=ze.createContext({});function GE(n,e,t,r,o){var a,c;const{visualElement:f}=ze.useContext(vu),d=ze.useContext(m_),h=ze.useContext(dp),g=ze.useContext(mu).reducedMotion,v=ze.useRef(null);r=r||d.renderer,!v.current&&r&&(v.current=r(n,{visualState:e,parent:f,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:g}));const m=v.current,y=ze.useContext(__);m&&!m.projection&&o&&(m.type==="html"||m.type==="svg")&&WE(v.current,t,o,y);const M=ze.useRef(!1);ze.useInsertionEffect(()=>{m&&M.current&&m.update(t,h)});const A=t[x_],S=ze.useRef(!!A&&!(!((a=window.MotionHandoffIsComplete)===null||a===void 0)&&a.call(window,A))&&((c=window.MotionHasOptimisedAnimation)===null||c===void 0?void 0:c.call(window,A)));return gu(()=>{m&&(M.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),xp.render(m.render),S.current&&m.animationState&&m.animationState.animateChanges())}),ze.useEffect(()=>{m&&(!S.current&&m.animationState&&m.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var _;(_=window.MotionHandoffMarkAsComplete)===null||_===void 0||_.call(window,A)}),S.current=!1))}),m}function WE(n,e,t,r){const{layoutId:o,layout:a,drag:c,dragConstraints:f,layoutScroll:d,layoutRoot:h}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:y_(n.parent)),n.projection.setOptions({layoutId:o,layout:a,alwaysMeasureLayout:!!c||f&&Co(f),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,layoutScroll:d,layoutRoot:h})}function y_(n){if(n)return n.options.allowProjection!==!1?n.projection:y_(n.parent)}function jE({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:r,Component:o}){var a,c;n&&LE(n);function f(h,g){let v;const m={...ze.useContext(mu),...h,layoutId:XE(h)},{isStatic:y}=m,M=zE(h),A=r(h,y);if(!y&&hp){YE();const S=qE(m);v=S.MeasureLayout,M.visualElement=GE(o,A,m,e,S.ProjectionNode)}return C.jsxs(vu.Provider,{value:M,children:[v&&M.visualElement?C.jsx(v,{visualElement:M.visualElement,...m}):null,t(o,h,VE(A,M.visualElement,g),A,y,M.visualElement)]})}f.displayName=`motion.${typeof o=="string"?o:`create(${(c=(a=o.displayName)!==null&&a!==void 0?a:o.name)!==null&&c!==void 0?c:""})`}`;const d=ze.forwardRef(f);return d[BE]=o,d}function XE({layoutId:n}){const e=ze.useContext(d_).id;return e&&n!==void 0?e+"-"+n:n}function YE(n,e){ze.useContext(m_).strict}function qE(n){const{drag:e,layout:t}=Oo;if(!e&&!t)return{};const r={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const $E=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function _p(n){return typeof n!="string"||n.includes("-")?!1:!!($E.indexOf(n)>-1||/[A-Z]/u.test(n))}function G0(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function yp(n,e,t,r){if(typeof e=="function"){const[o,a]=G0(r);e=e(t!==void 0?t:n.custom,o,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,a]=G0(r);e=e(t!==void 0?t:n.custom,o,a)}return e}const rh=n=>Array.isArray(n),KE=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),ZE=n=>rh(n)?n[n.length-1]||0:n,Sn=n=>!!(n&&n.getVelocity);function Hc(n){const e=Sn(n)?n.get():n;return KE(e)?e.toValue():e}function QE({scrapeMotionValuesFromProps:n,createRenderState:e,onUpdate:t},r,o,a){const c={latestValues:JE(r,o,a,n),renderState:e()};return t&&(c.onMount=f=>t({props:r,current:f,...c}),c.onUpdate=f=>t(f)),c}const S_=n=>(e,t)=>{const r=ze.useContext(vu),o=ze.useContext(dp),a=()=>QE(n,e,r,o);return t?a():pu(a)};function JE(n,e,t,r){const o={},a=r(n,{});for(const m in a)o[m]=Hc(a[m]);let{initial:c,animate:f}=n;const d=_u(n),h=v_(n);e&&h&&!d&&n.inherit!==!1&&(c===void 0&&(c=e.initial),f===void 0&&(f=e.animate));let g=t?t.initial===!1:!1;g=g||c===!1;const v=g?f:c;if(v&&typeof v!="boolean"&&!xu(v)){const m=Array.isArray(v)?v:[v];for(let y=0;y<m.length;y++){const M=yp(n,m[y]);if(M){const{transitionEnd:A,transition:S,..._}=M;for(const D in _){let L=_[D];if(Array.isArray(L)){const R=g?L.length-1:0;L=L[R]}L!==null&&(o[D]=L)}for(const D in A)o[D]=A[D]}}}return o}const Wo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Vs=new Set(Wo),M_=n=>e=>typeof e=="string"&&e.startsWith(n),E_=M_("--"),ew=M_("var(--"),Sp=n=>ew(n)?tw.test(n.split("/*")[0].trim()):!1,tw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,w_=(n,e)=>e&&typeof n=="number"?e.transform(n):n,Qi=(n,e,t)=>t>e?e:t<n?n:t,jo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Qa={...jo,transform:n=>Qi(0,1,n)},vc={...jo,default:1},il=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Qr=il("deg"),Yi=il("%"),st=il("px"),nw=il("vh"),iw=il("vw"),W0={...Yi,parse:n=>Yi.parse(n)/100,transform:n=>Yi.transform(n*100)},rw={borderWidth:st,borderTopWidth:st,borderRightWidth:st,borderBottomWidth:st,borderLeftWidth:st,borderRadius:st,radius:st,borderTopLeftRadius:st,borderTopRightRadius:st,borderBottomRightRadius:st,borderBottomLeftRadius:st,width:st,maxWidth:st,height:st,maxHeight:st,top:st,right:st,bottom:st,left:st,padding:st,paddingTop:st,paddingRight:st,paddingBottom:st,paddingLeft:st,margin:st,marginTop:st,marginRight:st,marginBottom:st,marginLeft:st,backgroundPositionX:st,backgroundPositionY:st},sw={rotate:Qr,rotateX:Qr,rotateY:Qr,rotateZ:Qr,scale:vc,scaleX:vc,scaleY:vc,scaleZ:vc,skew:Qr,skewX:Qr,skewY:Qr,distance:st,translateX:st,translateY:st,translateZ:st,x:st,y:st,z:st,perspective:st,transformPerspective:st,opacity:Qa,originX:W0,originY:W0,originZ:st},j0={...jo,transform:Math.round},Mp={...rw,...sw,zIndex:j0,size:st,fillOpacity:Qa,strokeOpacity:Qa,numOctaves:j0},ow={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},aw=Wo.length;function lw(n,e,t){let r="",o=!0;for(let a=0;a<aw;a++){const c=Wo[a],f=n[c];if(f===void 0)continue;let d=!0;if(typeof f=="number"?d=f===(c.startsWith("scale")?1:0):d=parseFloat(f)===0,!d||t){const h=w_(f,Mp[c]);if(!d){o=!1;const g=ow[c]||c;r+=`${g}(${h}) `}t&&(e[c]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function Ep(n,e,t){const{style:r,vars:o,transformOrigin:a}=n;let c=!1,f=!1;for(const d in e){const h=e[d];if(Vs.has(d)){c=!0;continue}else if(E_(d)){o[d]=h;continue}else{const g=w_(h,Mp[d]);d.startsWith("origin")?(f=!0,a[d]=g):r[d]=g}}if(e.transform||(c||t?r.transform=lw(e,n.transform,t):r.transform&&(r.transform="none")),f){const{originX:d="50%",originY:h="50%",originZ:g=0}=a;r.transformOrigin=`${d} ${h} ${g}`}}const cw={offset:"stroke-dashoffset",array:"stroke-dasharray"},uw={offset:"strokeDashoffset",array:"strokeDasharray"};function fw(n,e,t=1,r=0,o=!0){n.pathLength=1;const a=o?cw:uw;n[a.offset]=st.transform(-r);const c=st.transform(e),f=st.transform(t);n[a.array]=`${c} ${f}`}function X0(n,e,t){return typeof n=="string"?n:st.transform(e+t*n)}function dw(n,e,t){const r=X0(e,n.x,n.width),o=X0(t,n.y,n.height);return`${r} ${o}`}function wp(n,{attrX:e,attrY:t,attrScale:r,originX:o,originY:a,pathLength:c,pathSpacing:f=1,pathOffset:d=0,...h},g,v){if(Ep(n,h,v),g){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:m,style:y,dimensions:M}=n;m.transform&&(M&&(y.transform=m.transform),delete m.transform),M&&(o!==void 0||a!==void 0||y.transform)&&(y.transformOrigin=dw(M,o!==void 0?o:.5,a!==void 0?a:.5)),e!==void 0&&(m.x=e),t!==void 0&&(m.y=t),r!==void 0&&(m.scale=r),c!==void 0&&fw(m,c,f,d,!1)}const Tp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),T_=()=>({...Tp(),attrs:{}}),Ap=n=>typeof n=="string"&&n.toLowerCase()==="svg";function A_(n,{style:e,vars:t},r,o){Object.assign(n.style,e,o&&o.getProjectionStyles(r));for(const a in t)n.style.setProperty(a,t[a])}const b_=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function R_(n,e,t,r){A_(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(b_.has(o)?o:vp(o),e.attrs[o])}const eu={};function hw(n){Object.assign(eu,n)}function C_(n,{layout:e,layoutId:t}){return Vs.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!eu[n]||n==="opacity")}function bp(n,e,t){var r;const{style:o}=n,a={};for(const c in o)(Sn(o[c])||e.style&&Sn(e.style[c])||C_(c,n)||((r=t==null?void 0:t.getValue(c))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(a[c]=o[c]);return a}function P_(n,e,t){const r=bp(n,e,t);for(const o in n)if(Sn(n[o])||Sn(e[o])){const a=Wo.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[a]=n[o]}return r}function pw(n,e){try{e.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const Y0=["x","y","width","height","cx","cy","r"],mw={useVisualState:S_({scrapeMotionValuesFromProps:P_,createRenderState:T_,onUpdate:({props:n,prevProps:e,current:t,renderState:r,latestValues:o})=>{if(!t)return;let a=!!n.drag;if(!a){for(const f in o)if(Vs.has(f)){a=!0;break}}if(!a)return;let c=!e;if(e)for(let f=0;f<Y0.length;f++){const d=Y0[f];n[d]!==e[d]&&(c=!0)}c&&Rt.read(()=>{pw(t,r),Rt.render(()=>{wp(r,o,Ap(t.tagName),n.transformTemplate),R_(t,r)})})}})},gw={useVisualState:S_({scrapeMotionValuesFromProps:bp,createRenderState:Tp})};function D_(n,e,t){for(const r in e)!Sn(e[r])&&!C_(r,t)&&(n[r]=e[r])}function vw({transformTemplate:n},e){return ze.useMemo(()=>{const t=Tp();return Ep(t,e,n),Object.assign({},t.vars,t.style)},[e])}function xw(n,e){const t=n.style||{},r={};return D_(r,t,n),Object.assign(r,vw(n,e)),r}function _w(n,e){const t={},r=xw(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}function yw(n,e,t,r){const o=ze.useMemo(()=>{const a=T_();return wp(a,e,Ap(r),n.transformTemplate),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};D_(a,n.style,n),o.style={...a,...o.style}}return o}function Sw(n=!1){return(t,r,o,{latestValues:a},c)=>{const d=(_p(t)?yw:_w)(r,a,c,t),h=FE(r,typeof t=="string",n),g=t!==ze.Fragment?{...h,...d,ref:o}:{},{children:v}=r,m=ze.useMemo(()=>Sn(v)?v.get():v,[v]);return ze.createElement(t,{...g,children:m})}}function Mw(n,e){return function(r,{forwardMotionProps:o}={forwardMotionProps:!1}){const c={..._p(r)?mw:gw,preloadedFeatures:n,useRender:Sw(o),createVisualElement:e,Component:r};return jE(c)}}function N_(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}function yu(n,e,t){const r=n.getProps();return yp(r,e,t!==void 0?t:r.custom,n)}const L_=pp(()=>window.ScrollTimeline!==void 0);class Ew{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=t}attachTimeline(e,t){const r=this.animations.map(o=>{if(L_()&&o.attachTimeline)return o.attachTimeline(e);if(typeof t=="function")return t(o)});return()=>{r.forEach((o,a)=>{o&&o(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class ww extends Ew{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function Rp(n,e){return n?n[e]||n.default||n:void 0}const sh=2e4;function I_(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<sh;)e+=t,r=n.next(e);return e>=sh?1/0:e}function Cp(n){return typeof n=="function"}function q0(n,e){n.timeline=e,n.onfinish=null}const Pp=n=>Array.isArray(n)&&typeof n[0]=="number",Tw={linearEasing:void 0};function Aw(n,e){const t=pp(n);return()=>{var r;return(r=Tw[e])!==null&&r!==void 0?r:t()}}const tu=Aw(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),U_=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let a=0;a<o;a++)r+=n(Os(0,o-1,a))+", ";return`linear(${r.substring(0,r.length-2)})`};function F_(n){return!!(typeof n=="function"&&tu()||!n||typeof n=="string"&&(n in oh||tu())||Pp(n)||Array.isArray(n)&&n.every(F_))}const Ba=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,oh={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ba([0,.65,.55,1]),circOut:Ba([.55,0,1,.45]),backIn:Ba([.31,.01,.66,-.59]),backOut:Ba([.33,1.53,.69,.99])};function O_(n,e){if(n)return typeof n=="function"&&tu()?U_(n,e):Pp(n)?Ba(n):Array.isArray(n)?n.map(t=>O_(t,e)||oh.easeOut):oh[n]}const Ci={x:!1,y:!1};function k_(){return Ci.x||Ci.y}function Dp(n,e,t){var r;if(n instanceof Element)return[n];if(typeof n=="string"){let o=document;const a=(r=void 0)!==null&&r!==void 0?r:o.querySelectorAll(n);return a?Array.from(a):[]}return Array.from(n)}function z_(n,e){const t=Dp(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function $0(n){return e=>{e.pointerType==="touch"||k_()||n(e)}}function bw(n,e,t={}){const[r,o,a]=z_(n,t),c=$0(f=>{const{target:d}=f,h=e(f);if(typeof h!="function"||!d)return;const g=$0(v=>{h(v),d.removeEventListener("pointerleave",g)});d.addEventListener("pointerleave",g,o)});return r.forEach(f=>{f.addEventListener("pointerenter",c,o)}),a}const B_=(n,e)=>e?n===e?!0:B_(n,e.parentElement):!1,Np=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,Rw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Cw(n){return Rw.has(n.tagName)||n.tabIndex!==-1}const Va=new WeakSet;function K0(n){return e=>{e.key==="Enter"&&n(e)}}function fd(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const Pw=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=K0(()=>{if(Va.has(t))return;fd(t,"down");const o=K0(()=>{fd(t,"up")}),a=()=>fd(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function Z0(n){return Np(n)&&!k_()}function Dw(n,e,t={}){const[r,o,a]=z_(n,t),c=f=>{const d=f.currentTarget;if(!Z0(f)||Va.has(d))return;Va.add(d);const h=e(f),g=(y,M)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",m),!(!Z0(y)||!Va.has(d))&&(Va.delete(d),typeof h=="function"&&h(y,{success:M}))},v=y=>{g(y,t.useGlobalTarget||B_(d,y.target))},m=y=>{g(y,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",m,o)};return r.forEach(f=>{!Cw(f)&&f.getAttribute("tabindex")===null&&(f.tabIndex=0),(t.useGlobalTarget?window:f).addEventListener("pointerdown",c,o),f.addEventListener("focus",h=>Pw(h,o),o)}),a}function Nw(n){return n==="x"||n==="y"?Ci[n]?null:(Ci[n]=!0,()=>{Ci[n]=!1}):Ci.x||Ci.y?null:(Ci.x=Ci.y=!0,()=>{Ci.x=Ci.y=!1})}const V_=new Set(["width","height","top","left","right","bottom",...Wo]);let Gc;function Lw(){Gc=void 0}const qi={now:()=>(Gc===void 0&&qi.set(pn.isProcessing||PE.useManualTiming?pn.timestamp:performance.now()),Gc),set:n=>{Gc=n,queueMicrotask(Lw)}};function Lp(n,e){n.indexOf(e)===-1&&n.push(e)}function Ip(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class Up{constructor(){this.subscriptions=[]}add(e){return Lp(this.subscriptions,e),()=>Ip(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let a=0;a<o;a++){const c=this.subscriptions[a];c&&c(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Fp(n,e){return e?n*(1e3/e):0}const Q0=30,Iw=n=>!isNaN(parseFloat(n)),ja={current:void 0};class Uw{constructor(e,t={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,o=!0)=>{const a=qi.now();this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=qi.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Iw(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Up);const r=this.events[e].add(t);return e==="change"?()=>{r(),Rt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return ja.current&&ja.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=qi.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Q0)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,Q0);return Fp(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Wi(n,e){return new Uw(n,e)}function Fw(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Wi(t))}function Ow(n,e){const t=yu(n,e);let{transitionEnd:r={},transition:o={},...a}=t||{};a={...a,...r};for(const c in a){const f=ZE(a[c]);Fw(n,c,f)}}function kw(n){return!!(Sn(n)&&n.add)}function ah(n,e){const t=n.getValue("willChange");if(kw(t))return t.add(e)}function H_(n){return n.props[x_]}const G_=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,zw=1e-7,Bw=12;function Vw(n,e,t,r,o){let a,c,f=0;do c=e+(t-e)/2,a=G_(c,r,o)-n,a>0?t=c:e=c;while(Math.abs(a)>zw&&++f<Bw);return c}function rl(n,e,t,r){if(n===e&&t===r)return Bn;const o=a=>Vw(a,0,1,n,t);return a=>a===0||a===1?a:G_(o(a),e,r)}const W_=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,j_=n=>e=>1-n(1-e),X_=rl(.33,1.53,.69,.99),Op=j_(X_),Y_=W_(Op),q_=n=>(n*=2)<1?.5*Op(n):.5*(2-Math.pow(2,-10*(n-1))),kp=n=>1-Math.sin(Math.acos(n)),$_=j_(kp),K_=W_(kp),Z_=n=>/^0[^.\s]+$/u.test(n);function Hw(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Z_(n):!0}const Xa=n=>Math.round(n*1e5)/1e5,zp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Gw(n){return n==null}const Ww=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Bp=(n,e)=>t=>!!(typeof t=="string"&&Ww.test(t)&&t.startsWith(n)||e&&!Gw(t)&&Object.prototype.hasOwnProperty.call(t,e)),Q_=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,a,c,f]=r.match(zp);return{[n]:parseFloat(o),[e]:parseFloat(a),[t]:parseFloat(c),alpha:f!==void 0?parseFloat(f):1}},jw=n=>Qi(0,255,n),dd={...jo,transform:n=>Math.round(jw(n))},Ls={test:Bp("rgb","red"),parse:Q_("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+dd.transform(n)+", "+dd.transform(e)+", "+dd.transform(t)+", "+Xa(Qa.transform(r))+")"};function Xw(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const lh={test:Bp("#"),parse:Xw,transform:Ls.transform},Po={test:Bp("hsl","hue"),parse:Q_("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+Yi.transform(Xa(e))+", "+Yi.transform(Xa(t))+", "+Xa(Qa.transform(r))+")"},In={test:n=>Ls.test(n)||lh.test(n)||Po.test(n),parse:n=>Ls.test(n)?Ls.parse(n):Po.test(n)?Po.parse(n):lh.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Ls.transform(n):Po.transform(n)},Yw=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function qw(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(zp))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(Yw))===null||t===void 0?void 0:t.length)||0)>0}const J_="number",ey="color",$w="var",Kw="var(",J0="${}",Zw=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ja(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let a=0;const f=e.replace(Zw,d=>(In.test(d)?(r.color.push(a),o.push(ey),t.push(In.parse(d))):d.startsWith(Kw)?(r.var.push(a),o.push($w),t.push(d)):(r.number.push(a),o.push(J_),t.push(parseFloat(d))),++a,J0)).split(J0);return{values:t,split:f,indexes:r,types:o}}function ty(n){return Ja(n).values}function ny(n){const{split:e,types:t}=Ja(n),r=e.length;return o=>{let a="";for(let c=0;c<r;c++)if(a+=e[c],o[c]!==void 0){const f=t[c];f===J_?a+=Xa(o[c]):f===ey?a+=In.transform(o[c]):a+=o[c]}return a}}const Qw=n=>typeof n=="number"?0:n;function Jw(n){const e=ty(n);return ny(n)(e.map(Qw))}const ns={test:qw,parse:ty,createTransformer:ny,getAnimatableNone:Jw},eT=new Set(["brightness","contrast","saturate","opacity"]);function tT(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(zp)||[];if(!r)return n;const o=t.replace(r,"");let a=eT.has(e)?1:0;return r!==t&&(a*=100),e+"("+a+o+")"}const nT=/\b([a-z-]*)\(.*?\)/gu,ch={...ns,getAnimatableNone:n=>{const e=n.match(nT);return e?e.map(tT).join(" "):n}},iT={...Mp,color:In,backgroundColor:In,outlineColor:In,fill:In,stroke:In,borderColor:In,borderTopColor:In,borderRightColor:In,borderBottomColor:In,borderLeftColor:In,filter:ch,WebkitFilter:ch},Vp=n=>iT[n];function iy(n,e){let t=Vp(n);return t!==ch&&(t=ns),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const rT=new Set(["auto","none","0"]);function sT(n,e,t){let r=0,o;for(;r<n.length&&!o;){const a=n[r];typeof a=="string"&&!rT.has(a)&&Ja(a).values.length&&(o=n[r]),r++}if(o&&t)for(const a of e)n[a]=iy(t,o)}const ev=n=>n===jo||n===st,tv=(n,e)=>parseFloat(n.split(", ")[e]),nv=(n,e)=>(t,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/u);if(o)return tv(o[1],e);{const a=r.match(/^matrix\((.+)\)$/u);return a?tv(a[1],n):0}},oT=new Set(["x","y","z"]),aT=Wo.filter(n=>!oT.has(n));function lT(n){const e=[];return aT.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const ko={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:nv(4,13),y:nv(5,14)};ko.translateX=ko.x;ko.translateY=ko.y;const Fs=new Set;let uh=!1,fh=!1;function ry(){if(fh){const n=Array.from(Fs).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=lT(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([a,c])=>{var f;(f=r.getValue(a))===null||f===void 0||f.set(c)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}fh=!1,uh=!1,Fs.forEach(n=>n.complete()),Fs.clear()}function sy(){Fs.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(fh=!0)})}function cT(){sy(),ry()}class Hp{constructor(e,t,r,o,a,c=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=a,this.isAsync=c}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Fs.add(this),uh||(uh=!0,Rt.read(sy),Rt.resolveKeyframes(ry))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;for(let a=0;a<e.length;a++)if(e[a]===null)if(a===0){const c=o==null?void 0:o.get(),f=e[e.length-1];if(c!==void 0)e[0]=c;else if(r&&t){const d=r.readValue(t,f);d!=null&&(e[0]=d)}e[0]===void 0&&(e[0]=f),o&&c===void 0&&o.set(e[0])}else e[a]=e[a-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Fs.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Fs.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const oy=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),uT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function fT(n){const e=uT.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function ay(n,e,t=1){const[r,o]=fT(n);if(!r)return;const a=window.getComputedStyle(e).getPropertyValue(r);if(a){const c=a.trim();return oy(c)?parseFloat(c):c}return Sp(o)?ay(o,e,t+1):o}const ly=n=>e=>e.test(n),dT={test:n=>n==="auto",parse:n=>n},cy=[jo,st,Yi,Qr,iw,nw,dT],iv=n=>cy.find(ly(n));class uy extends Hp{constructor(e,t,r,o,a){super(e,t,r,o,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),Sp(h))){const g=ay(h,t.current);g!==void 0&&(e[d]=g),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!V_.has(r)||e.length!==2)return;const[o,a]=e,c=iv(o),f=iv(a);if(c!==f)if(ev(c)&&ev(f))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)Hw(e[o])&&r.push(o);r.length&&sT(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ko[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var e;const{element:t,name:r,unresolvedKeyframes:o}=this;if(!t||!t.current)return;const a=t.getValue(r);a&&a.jump(this.measuredOrigin,!1);const c=o.length-1,f=o[c];o[c]=ko[r](t.measureViewportBox(),window.getComputedStyle(t.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([d,h])=>{t.getValue(d).set(h)}),this.resolveNoneKeyframes()}}const rv=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(ns.test(n)||n==="0")&&!n.startsWith("url("));function hT(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function pT(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],c=rv(o,e),f=rv(a,e);return!c||!f?!1:hT(n)||(t==="spring"||Cp(t))&&r}const mT=n=>n!==null;function Su(n,{repeat:e,repeatType:t="loop"},r){const o=n.filter(mT),a=e&&t!=="loop"&&e%2===1?0:o.length-1;return!a||r===void 0?o[a]:r}const gT=40;class fy{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:c="loop",...f}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=qi.now(),this.options={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:a,repeatType:c,...f},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>gT?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&cT(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=qi.now(),this.hasAttemptedResolve=!0;const{name:r,type:o,velocity:a,delay:c,onComplete:f,onUpdate:d,isGenerator:h}=this.options;if(!h&&!pT(e,r,o,a))if(c)this.options.duration=0;else{d&&d(Su(e,this.options,t)),f&&f(),this.resolveFinishedPromise();return}const g=this.initPlayback(e,t);g!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...g},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const Qt=(n,e,t)=>n+(e-n)*t;function hd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function vT({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,a=0,c=0;if(!e)o=a=c=t;else{const f=t<.5?t*(1+e):t+e-t*e,d=2*t-f;o=hd(d,f,n+1/3),a=hd(d,f,n),c=hd(d,f,n-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:r}}function nu(n,e){return t=>t>0?e:n}const pd=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},xT=[lh,Ls,Po],_T=n=>xT.find(e=>e.test(n));function sv(n){const e=_T(n);if(!e)return!1;let t=e.parse(n);return e===Po&&(t=vT(t)),t}const ov=(n,e)=>{const t=sv(n),r=sv(e);if(!t||!r)return nu(n,e);const o={...t};return a=>(o.red=pd(t.red,r.red,a),o.green=pd(t.green,r.green,a),o.blue=pd(t.blue,r.blue,a),o.alpha=Qt(t.alpha,r.alpha,a),Ls.transform(o))},yT=(n,e)=>t=>e(n(t)),sl=(...n)=>n.reduce(yT),dh=new Set(["none","hidden"]);function ST(n,e){return dh.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function MT(n,e){return t=>Qt(n,e,t)}function Gp(n){return typeof n=="number"?MT:typeof n=="string"?Sp(n)?nu:In.test(n)?ov:TT:Array.isArray(n)?dy:typeof n=="object"?In.test(n)?ov:ET:nu}function dy(n,e){const t=[...n],r=t.length,o=n.map((a,c)=>Gp(a)(a,e[c]));return a=>{for(let c=0;c<r;c++)t[c]=o[c](a);return t}}function ET(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=Gp(n[o])(n[o],e[o]));return o=>{for(const a in r)t[a]=r[a](o);return t}}function wT(n,e){var t;const r=[],o={color:0,var:0,number:0};for(let a=0;a<e.values.length;a++){const c=e.types[a],f=n.indexes[c][o[c]],d=(t=n.values[f])!==null&&t!==void 0?t:0;r[a]=d,o[c]++}return r}const TT=(n,e)=>{const t=ns.createTransformer(e),r=Ja(n),o=Ja(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?dh.has(n)&&!o.values.length||dh.has(e)&&!r.values.length?ST(n,e):sl(dy(wT(r,o),o.values),t):nu(n,e)};function hy(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Qt(n,e,t):Gp(n)(n,e)}const AT=5;function py(n,e,t){const r=Math.max(e-AT,0);return Fp(t-n(r),e-r)}const nn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},md=.001;function bT({duration:n=nn.duration,bounce:e=nn.bounce,velocity:t=nn.velocity,mass:r=nn.mass}){let o,a,c=1-e;c=Qi(nn.minDamping,nn.maxDamping,c),n=Qi(nn.minDuration,nn.maxDuration,xr(n)),c<1?(o=h=>{const g=h*c,v=g*n,m=g-t,y=hh(h,c),M=Math.exp(-v);return md-m/y*M},a=h=>{const v=h*c*n,m=v*t+t,y=Math.pow(c,2)*Math.pow(h,2)*n,M=Math.exp(-v),A=hh(Math.pow(h,2),c);return(-o(h)+md>0?-1:1)*((m-y)*M)/A}):(o=h=>{const g=Math.exp(-h*n),v=(h-t)*n+1;return-md+g*v},a=h=>{const g=Math.exp(-h*n),v=(t-h)*(n*n);return g*v});const f=5/n,d=CT(o,a,f);if(n=vr(n),isNaN(d))return{stiffness:nn.stiffness,damping:nn.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:c*2*Math.sqrt(r*h),duration:n}}}const RT=12;function CT(n,e,t){let r=t;for(let o=1;o<RT;o++)r=r-n(r)/e(r);return r}function hh(n,e){return n*Math.sqrt(1-e*e)}const PT=["duration","bounce"],DT=["stiffness","damping","mass"];function av(n,e){return e.some(t=>n[t]!==void 0)}function NT(n){let e={velocity:nn.velocity,stiffness:nn.stiffness,damping:nn.damping,mass:nn.mass,isResolvedFromDuration:!1,...n};if(!av(n,DT)&&av(n,PT))if(n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,a=2*Qi(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:nn.mass,stiffness:o,damping:a}}else{const t=bT(n);e={...e,...t,mass:nn.mass},e.isResolvedFromDuration=!0}return e}function my(n=nn.visualDuration,e=nn.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const a=t.keyframes[0],c=t.keyframes[t.keyframes.length-1],f={done:!1,value:a},{stiffness:d,damping:h,mass:g,duration:v,velocity:m,isResolvedFromDuration:y}=NT({...t,velocity:-xr(t.velocity||0)}),M=m||0,A=h/(2*Math.sqrt(d*g)),S=c-a,_=xr(Math.sqrt(d/g)),D=Math.abs(S)<5;r||(r=D?nn.restSpeed.granular:nn.restSpeed.default),o||(o=D?nn.restDelta.granular:nn.restDelta.default);let L;if(A<1){const N=hh(_,A);L=P=>{const k=Math.exp(-A*_*P);return c-k*((M+A*_*S)/N*Math.sin(N*P)+S*Math.cos(N*P))}}else if(A===1)L=N=>c-Math.exp(-_*N)*(S+(M+_*S)*N);else{const N=_*Math.sqrt(A*A-1);L=P=>{const k=Math.exp(-A*_*P),w=Math.min(N*P,300);return c-k*((M+A*_*S)*Math.sinh(w)+N*S*Math.cosh(w))/N}}const R={calculatedDuration:y&&v||null,next:N=>{const P=L(N);if(y)f.done=N>=v;else{let k=0;A<1&&(k=N===0?vr(M):py(L,N,P));const w=Math.abs(k)<=r,U=Math.abs(c-P)<=o;f.done=w&&U}return f.value=f.done?c:P,f},toString:()=>{const N=Math.min(I_(R),sh),P=U_(k=>R.next(N*k).value,N,30);return N+"ms "+P}};return R}function lv({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:c,min:f,max:d,restDelta:h=.5,restSpeed:g}){const v=n[0],m={done:!1,value:v},y=w=>f!==void 0&&w<f||d!==void 0&&w>d,M=w=>f===void 0?d:d===void 0||Math.abs(f-w)<Math.abs(d-w)?f:d;let A=t*e;const S=v+A,_=c===void 0?S:c(S);_!==S&&(A=_-v);const D=w=>-A*Math.exp(-w/r),L=w=>_+D(w),R=w=>{const U=D(w),H=L(w);m.done=Math.abs(U)<=h,m.value=m.done?_:H};let N,P;const k=w=>{y(m.value)&&(N=w,P=my({keyframes:[m.value,M(m.value)],velocity:py(L,w,m.value),damping:o,stiffness:a,restDelta:h,restSpeed:g}))};return k(0),{calculatedDuration:null,next:w=>{let U=!1;return!P&&N===void 0&&(U=!0,R(w),k(w)),N!==void 0&&w>=N?P.next(w-N):(!U&&R(w),m)}}}const LT=rl(.42,0,1,1),IT=rl(0,0,.58,1),gy=rl(.42,0,.58,1),UT=n=>Array.isArray(n)&&typeof n[0]!="number",FT={linear:Bn,easeIn:LT,easeInOut:gy,easeOut:IT,circIn:kp,circInOut:K_,circOut:$_,backIn:Op,backInOut:Y_,backOut:X_,anticipate:q_},cv=n=>{if(Pp(n)){h_(n.length===4);const[e,t,r,o]=n;return rl(e,t,r,o)}else if(typeof n=="string")return FT[n];return n};function OT(n,e,t){const r=[],o=t||hy,a=n.length-1;for(let c=0;c<a;c++){let f=o(n[c],n[c+1]);if(e){const d=Array.isArray(e)?e[c]||Bn:e;f=sl(d,f)}r.push(f)}return r}function Wp(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const a=n.length;if(h_(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const f=OT(e,r,o),d=f.length,h=g=>{if(c&&g<n[0])return e[0];let v=0;if(d>1)for(;v<n.length-2&&!(g<n[v+1]);v++);const m=Os(n[v],n[v+1],g);return f[v](m)};return t?g=>h(Qi(n[0],n[a-1],g)):h}function kT(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=Os(0,e,r);n.push(Qt(t,1,o))}}function vy(n){const e=[0];return kT(e,n.length-1),e}function zT(n,e){return n.map(t=>t*e)}function BT(n,e){return n.map(()=>e||gy).splice(0,n.length-1)}function iu({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=UT(r)?r.map(cv):cv(r),a={done:!1,value:e[0]},c=zT(t&&t.length===e.length?t:vy(e),n),f=Wp(c,e,{ease:Array.isArray(o)?o:BT(e,o)});return{calculatedDuration:n,next:d=>(a.value=f(d),a.done=d>=n,a)}}const VT=n=>{const e=({timestamp:t})=>n(t);return{start:()=>Rt.update(e,!0),stop:()=>Ii(e),now:()=>pn.isProcessing?pn.timestamp:qi.now()}},HT={decay:lv,inertia:lv,tween:iu,keyframes:iu,spring:my},GT=n=>n/100;class Mu extends fy{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:d}=this.options;d&&d()};const{name:t,motionValue:r,element:o,keyframes:a}=this.options,c=(o==null?void 0:o.KeyframeResolver)||Hp,f=(d,h)=>this.onKeyframesResolved(d,h);this.resolver=new c(a,f,t,r,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:a,velocity:c=0}=this.options,f=Cp(t)?t:HT[t]||iu;let d,h;f!==iu&&typeof e[0]!="number"&&(d=sl(GT,hy(e[0],e[1])),e=[0,100]);const g=f({...this.options,keyframes:e});a==="mirror"&&(h=f({...this.options,keyframes:[...e].reverse(),velocity:-c})),g.calculatedDuration===null&&(g.calculatedDuration=I_(g));const{calculatedDuration:v}=g,m=v+o,y=m*(r+1)-o;return{generator:g,mirroredGenerator:h,mapPercentToKeyframes:d,calculatedDuration:v,resolvedDuration:m,totalDuration:y}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:r}=this;if(!r){const{keyframes:w}=this.options;return{done:!0,value:w[w.length-1]}}const{finalKeyframe:o,generator:a,mirroredGenerator:c,mapPercentToKeyframes:f,keyframes:d,calculatedDuration:h,totalDuration:g,resolvedDuration:v}=r;if(this.startTime===null)return a.next(0);const{delay:m,repeat:y,repeatType:M,repeatDelay:A,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-g/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const _=this.currentTime-m*(this.speed>=0?1:-1),D=this.speed>=0?_<0:_>g;this.currentTime=Math.max(_,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=g);let L=this.currentTime,R=a;if(y){const w=Math.min(this.currentTime,g)/v;let U=Math.floor(w),H=w%1;!H&&w>=1&&(H=1),H===1&&U--,U=Math.min(U,y+1),!!(U%2)&&(M==="reverse"?(H=1-H,A&&(H-=A/v)):M==="mirror"&&(R=c)),L=Qi(0,1,H)*v}const N=D?{done:!1,value:d[0]}:R.next(L);f&&(N.value=f(N.value));let{done:P}=N;!D&&h!==null&&(P=this.speed>=0?this.currentTime>=g:this.currentTime<=0);const k=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&P);return k&&o!==void 0&&(N.value=Su(d,this.options,o)),S&&S(N.value),k&&this.finish(),N}get duration(){const{resolved:e}=this;return e?xr(e.calculatedDuration):0}get time(){return xr(this.currentTime)}set time(e){e=vr(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=xr(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=VT,onPlay:t,startTime:r}=this.options;this.driver||(this.driver=e(a=>this.tick(a))),t&&t();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}function WT(n){return new Mu(n)}const jT=new Set(["opacity","clipPath","filter","transform"]);function XT(n,e,t,{delay:r=0,duration:o=300,repeat:a=0,repeatType:c="loop",ease:f="easeInOut",times:d}={}){const h={[e]:t};d&&(h.offset=d);const g=O_(f,o);return Array.isArray(g)&&(h.easing=g),n.animate(h,{delay:r,duration:o,easing:Array.isArray(g)?"linear":g,fill:"both",iterations:a+1,direction:c==="reverse"?"alternate":"normal"})}const YT=pp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),ru=10,qT=2e4;function $T(n){return Cp(n.type)||n.type==="spring"||!F_(n.ease)}function KT(n,e){const t=new Mu({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:n[0]};const o=[];let a=0;for(;!r.done&&a<qT;)r=t.sample(a),o.push(r.value),a+=ru;return{times:void 0,keyframes:o,duration:a-ru,ease:"linear"}}const xy={anticipate:q_,backInOut:Y_,circInOut:K_};function ZT(n){return n in xy}class uv extends fy{constructor(e){super(e);const{name:t,motionValue:r,element:o,keyframes:a}=this.options;this.resolver=new uy(a,(c,f)=>this.onKeyframesResolved(c,f),t,r,o),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:r=300,times:o,ease:a,type:c,motionValue:f,name:d,startTime:h}=this.options;if(!f.owner||!f.owner.current)return!1;if(typeof a=="string"&&tu()&&ZT(a)&&(a=xy[a]),$T(this.options)){const{onComplete:v,onUpdate:m,motionValue:y,element:M,...A}=this.options,S=KT(e,A);e=S.keyframes,e.length===1&&(e[1]=e[0]),r=S.duration,o=S.times,a=S.ease,c="keyframes"}const g=XT(f.owner.current,d,e,{...this.options,duration:r,times:o,ease:a});return g.startTime=h??this.calcStartTime(),this.pendingTimeline?(q0(g,this.pendingTimeline),this.pendingTimeline=void 0):g.onfinish=()=>{const{onComplete:v}=this.options;f.set(Su(e,this.options,t)),v&&v(),this.cancel(),this.resolveFinishedPromise()},{animation:g,duration:r,times:o,type:c,ease:a,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return xr(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return xr(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.currentTime=vr(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return Bn;const{animation:r}=t;q0(r,e)}return Bn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:r,duration:o,type:a,ease:c,times:f}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:g,onComplete:v,element:m,...y}=this.options,M=new Mu({...y,keyframes:r,duration:o,type:a,ease:c,times:f,isGenerator:!0}),A=vr(this.time);h.setWithVelocity(M.sample(A-ru).value,M.sample(A).value,ru)}const{onStop:d}=this.options;d&&d(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:r,repeatDelay:o,repeatType:a,damping:c,type:f}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=t.owner.getProps();return YT()&&r&&jT.has(r)&&!d&&!h&&!o&&a!=="mirror"&&c!==0&&f!=="inertia"}}const QT={type:"spring",stiffness:500,damping:25,restSpeed:10},JT=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),e1={type:"keyframes",duration:.8},t1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},n1=(n,{keyframes:e})=>e.length>2?e1:Vs.has(n)?n.startsWith("scale")?JT(e[1]):QT:t1;function i1({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:o,repeat:a,repeatType:c,repeatDelay:f,from:d,elapsed:h,...g}){return!!Object.keys(g).length}const jp=(n,e,t,r={},o,a)=>c=>{const f=Rp(r,n)||{},d=f.delay||r.delay||0;let{elapsed:h=0}=r;h=h-vr(d);let g={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...f,delay:-h,onUpdate:m=>{e.set(m),f.onUpdate&&f.onUpdate(m)},onComplete:()=>{c(),f.onComplete&&f.onComplete()},name:n,motionValue:e,element:a?void 0:o};i1(f)||(g={...g,...n1(n,g)}),g.duration&&(g.duration=vr(g.duration)),g.repeatDelay&&(g.repeatDelay=vr(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let v=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(g.duration=0,g.delay===0&&(v=!0)),v&&!a&&e.get()!==void 0){const m=Su(g.keyframes,f);if(m!==void 0)return Rt.update(()=>{g.onUpdate(m),g.onComplete()}),new ww([])}return!a&&uv.supports(g)?new uv(g):new Mu(g)};function r1({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function _y(n,e,{delay:t=0,transitionOverride:r,type:o}={}){var a;let{transition:c=n.getDefaultTransition(),transitionEnd:f,...d}=e;r&&(c=r);const h=[],g=o&&n.animationState&&n.animationState.getState()[o];for(const v in d){const m=n.getValue(v,(a=n.latestValues[v])!==null&&a!==void 0?a:null),y=d[v];if(y===void 0||g&&r1(g,v))continue;const M={delay:t,...Rp(c||{},v)};let A=!1;if(window.MotionHandoffAnimation){const _=H_(n);if(_){const D=window.MotionHandoffAnimation(_,v,Rt);D!==null&&(M.startTime=D,A=!0)}}ah(n,v),m.start(jp(v,m,y,n.shouldReduceMotion&&V_.has(v)?{type:!1}:M,n,A));const S=m.animation;S&&h.push(S)}return f&&Promise.all(h).then(()=>{Rt.update(()=>{f&&Ow(n,f)})}),h}function ph(n,e,t={}){var r;const o=yu(n,e,t.type==="exit"?(r=n.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:a=n.getDefaultTransition()||{}}=o||{};t.transitionOverride&&(a=t.transitionOverride);const c=o?()=>Promise.all(_y(n,o,t)):()=>Promise.resolve(),f=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:g=0,staggerChildren:v,staggerDirection:m}=a;return s1(n,e,g+h,v,m,t)}:()=>Promise.resolve(),{when:d}=a;if(d){const[h,g]=d==="beforeChildren"?[c,f]:[f,c];return h().then(()=>g())}else return Promise.all([c(),f(t.delay)])}function s1(n,e,t=0,r=0,o=1,a){const c=[],f=(n.variantChildren.size-1)*r,d=o===1?(h=0)=>h*r:(h=0)=>f-h*r;return Array.from(n.variantChildren).sort(o1).forEach((h,g)=>{h.notify("AnimationStart",e),c.push(ph(h,e,{...a,delay:t+d(g)}).then(()=>h.notify("AnimationComplete",e)))}),Promise.all(c)}function o1(n,e){return n.sortNodePosition(e)}function a1(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(a=>ph(n,a,t));r=Promise.all(o)}else if(typeof e=="string")r=ph(n,e,t);else{const o=typeof e=="function"?yu(n,e,t.custom):e;r=Promise.all(_y(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const l1=gp.length;function yy(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?yy(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<l1;t++){const r=gp[t],o=n.props[r];(Za(o)||o===!1)&&(e[r]=o)}return e}const c1=[...mp].reverse(),u1=mp.length;function f1(n){return e=>Promise.all(e.map(({animation:t,options:r})=>a1(n,t,r)))}function d1(n){let e=f1(n),t=fv(),r=!0;const o=d=>(h,g)=>{var v;const m=yu(n,g,d==="exit"?(v=n.presenceContext)===null||v===void 0?void 0:v.custom:void 0);if(m){const{transition:y,transitionEnd:M,...A}=m;h={...h,...A,...M}}return h};function a(d){e=d(n)}function c(d){const{props:h}=n,g=yy(n.parent)||{},v=[],m=new Set;let y={},M=1/0;for(let S=0;S<u1;S++){const _=c1[S],D=t[_],L=h[_]!==void 0?h[_]:g[_],R=Za(L),N=_===d?D.isActive:null;N===!1&&(M=S);let P=L===g[_]&&L!==h[_]&&R;if(P&&r&&n.manuallyAnimateOnMount&&(P=!1),D.protectedKeys={...y},!D.isActive&&N===null||!L&&!D.prevProp||xu(L)||typeof L=="boolean")continue;const k=h1(D.prevProp,L);let w=k||_===d&&D.isActive&&!P&&R||S>M&&R,U=!1;const H=Array.isArray(L)?L:[L];let B=H.reduce(o(_),{});N===!1&&(B={});const{prevResolvedValues:$={}}=D,fe={...$,...B},de=q=>{w=!0,m.has(q)&&(U=!0,m.delete(q)),D.needsAnimating[q]=!0;const W=n.getValue(q);W&&(W.liveStyle=!1)};for(const q in fe){const W=B[q],ae=$[q];if(y.hasOwnProperty(q))continue;let le=!1;rh(W)&&rh(ae)?le=!N_(W,ae):le=W!==ae,le?W!=null?de(q):m.add(q):W!==void 0&&m.has(q)?de(q):D.protectedKeys[q]=!0}D.prevProp=L,D.prevResolvedValues=B,D.isActive&&(y={...y,...B}),r&&n.blockInitialAnimation&&(w=!1),w&&(!(P&&k)||U)&&v.push(...H.map(q=>({animation:q,options:{type:_}})))}if(m.size){const S={};m.forEach(_=>{const D=n.getBaseTarget(_),L=n.getValue(_);L&&(L.liveStyle=!0),S[_]=D??null}),v.push({animation:S})}let A=!!v.length;return r&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(A=!1),r=!1,A?e(v):Promise.resolve()}function f(d,h){var g;if(t[d].isActive===h)return Promise.resolve();(g=n.variantChildren)===null||g===void 0||g.forEach(m=>{var y;return(y=m.animationState)===null||y===void 0?void 0:y.setActive(d,h)}),t[d].isActive=h;const v=c(d);for(const m in t)t[m].protectedKeys={};return v}return{animateChanges:c,setActive:f,setAnimateFunction:a,getState:()=>t,reset:()=>{t=fv(),r=!0}}}function h1(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!N_(e,n):!1}function Es(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function fv(){return{animate:Es(!0),whileInView:Es(),whileHover:Es(),whileTap:Es(),whileDrag:Es(),whileFocus:Es(),exit:Es()}}class rs{constructor(e){this.isMounted=!1,this.node=e}update(){}}class p1 extends rs{constructor(e){super(e),e.animationState||(e.animationState=d1(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();xu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let m1=0;class g1 extends rs{constructor(){super(...arguments),this.id=m1++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const v1={animation:{Feature:p1},exit:{Feature:g1}};function el(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}function ol(n){return{point:{x:n.pageX,y:n.pageY}}}const x1=n=>e=>Np(e)&&n(e,ol(e));function Ya(n,e,t,r){return el(n,e,x1(t),r)}const dv=(n,e)=>Math.abs(n-e);function _1(n,e){const t=dv(n.x,e.x),r=dv(n.y,e.y);return Math.sqrt(t**2+r**2)}class Sy{constructor(e,t,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=vd(this.lastMoveEventInfo,this.history),m=this.startEvent!==null,y=_1(v.offset,{x:0,y:0})>=3;if(!m&&!y)return;const{point:M}=v,{timestamp:A}=pn;this.history.push({...M,timestamp:A});const{onStart:S,onMove:_}=this.handlers;m||(S&&S(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),_&&_(this.lastMoveEvent,v)},this.handlePointerMove=(v,m)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=gd(m,this.transformPagePoint),Rt.update(this.updatePoint,!0)},this.handlePointerUp=(v,m)=>{this.end();const{onEnd:y,onSessionEnd:M,resumeAnimation:A}=this.handlers;if(this.dragSnapToOrigin&&A&&A(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=vd(v.type==="pointercancel"?this.lastMoveEventInfo:gd(m,this.transformPagePoint),this.history);this.startEvent&&y&&y(v,S),M&&M(v,S)},!Np(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=r,this.contextWindow=o||window;const c=ol(e),f=gd(c,this.transformPagePoint),{point:d}=f,{timestamp:h}=pn;this.history=[{...d,timestamp:h}];const{onSessionStart:g}=t;g&&g(e,vd(f,this.history)),this.removeListeners=sl(Ya(this.contextWindow,"pointermove",this.handlePointerMove),Ya(this.contextWindow,"pointerup",this.handlePointerUp),Ya(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Ii(this.updatePoint)}}function gd(n,e){return e?{point:e(n.point)}:n}function hv(n,e){return{x:n.x-e.x,y:n.y-e.y}}function vd({point:n},e){return{point:n,delta:hv(n,My(e)),offset:hv(n,y1(e)),velocity:S1(e,.1)}}function y1(n){return n[0]}function My(n){return n[n.length-1]}function S1(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=My(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>vr(e)));)t--;if(!r)return{x:0,y:0};const a=xr(o.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const c={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}const Ey=1e-4,M1=1-Ey,E1=1+Ey,wy=.01,w1=0-wy,T1=0+wy;function si(n){return n.max-n.min}function A1(n,e,t){return Math.abs(n-e)<=t}function pv(n,e,t,r=.5){n.origin=r,n.originPoint=Qt(e.min,e.max,n.origin),n.scale=si(t)/si(e),n.translate=Qt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=M1&&n.scale<=E1||isNaN(n.scale))&&(n.scale=1),(n.translate>=w1&&n.translate<=T1||isNaN(n.translate))&&(n.translate=0)}function qa(n,e,t,r){pv(n.x,e.x,t.x,r?r.originX:void 0),pv(n.y,e.y,t.y,r?r.originY:void 0)}function mv(n,e,t){n.min=t.min+e.min,n.max=n.min+si(e)}function b1(n,e,t){mv(n.x,e.x,t.x),mv(n.y,e.y,t.y)}function gv(n,e,t){n.min=e.min-t.min,n.max=n.min+si(e)}function $a(n,e,t){gv(n.x,e.x,t.x),gv(n.y,e.y,t.y)}function R1(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?Qt(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?Qt(t,n,r.max):Math.min(n,t)),n}function vv(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function C1(n,{top:e,left:t,bottom:r,right:o}){return{x:vv(n.x,t,o),y:vv(n.y,e,r)}}function xv(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function P1(n,e){return{x:xv(n.x,e.x),y:xv(n.y,e.y)}}function D1(n,e){let t=.5;const r=si(n),o=si(e);return o>r?t=Os(e.min,e.max-r,n.min):r>o&&(t=Os(n.min,n.max-o,e.min)),Qi(0,1,t)}function N1(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const mh=.35;function L1(n=mh){return n===!1?n=0:n===!0&&(n=mh),{x:_v(n,"left","right"),y:_v(n,"top","bottom")}}function _v(n,e,t){return{min:yv(n,e),max:yv(n,t)}}function yv(n,e){return typeof n=="number"?n:n[e]||0}const Sv=()=>({translate:0,scale:1,origin:0,originPoint:0}),Do=()=>({x:Sv(),y:Sv()}),Mv=()=>({min:0,max:0}),an=()=>({x:Mv(),y:Mv()});function mi(n){return[n("x"),n("y")]}function Ty({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function I1({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function U1(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function xd(n){return n===void 0||n===1}function gh({scale:n,scaleX:e,scaleY:t}){return!xd(n)||!xd(e)||!xd(t)}function Rs(n){return gh(n)||Ay(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Ay(n){return Ev(n.x)||Ev(n.y)}function Ev(n){return n&&n!=="0%"}function su(n,e,t){const r=n-t,o=e*r;return t+o}function wv(n,e,t,r,o){return o!==void 0&&(n=su(n,o,r)),su(n,t,r)+e}function vh(n,e=0,t=1,r,o){n.min=wv(n.min,e,t,r,o),n.max=wv(n.max,e,t,r,o)}function by(n,{x:e,y:t}){vh(n.x,e.translate,e.scale,e.originPoint),vh(n.y,t.translate,t.scale,t.originPoint)}const Tv=.999999999999,Av=1.0000000000001;function F1(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let a,c;for(let f=0;f<o;f++){a=t[f],c=a.projectionDelta;const{visualElement:d}=a.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Lo(n,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),c&&(e.x*=c.x.scale,e.y*=c.y.scale,by(n,c)),r&&Rs(a.latestValues)&&Lo(n,a.latestValues))}e.x<Av&&e.x>Tv&&(e.x=1),e.y<Av&&e.y>Tv&&(e.y=1)}function No(n,e){n.min=n.min+e,n.max=n.max+e}function bv(n,e,t,r,o=.5){const a=Qt(n.min,n.max,o);vh(n,e,t,a,r)}function Lo(n,e){bv(n.x,e.x,e.scaleX,e.scale,e.originX),bv(n.y,e.y,e.scaleY,e.scale,e.originY)}function Ry(n,e){return Ty(U1(n.getBoundingClientRect(),e))}function O1(n,e,t){const r=Ry(n,t),{scroll:o}=e;return o&&(No(r.x,o.offset.x),No(r.y,o.offset.y)),r}const Cy=({current:n})=>n?n.ownerDocument.defaultView:null,k1=new WeakMap;class z1{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=an(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=g=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(ol(g).point)},a=(g,v)=>{const{drag:m,dragPropagation:y,onDragStart:M}=this.getProps();if(m&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Nw(m),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),mi(S=>{let _=this.getAxisMotionValue(S).get()||0;if(Yi.test(_)){const{projection:D}=this.visualElement;if(D&&D.layout){const L=D.layout.layoutBox[S];L&&(_=si(L)*(parseFloat(_)/100))}}this.originPoint[S]=_}),M&&Rt.postRender(()=>M(g,v)),ah(this.visualElement,"transform");const{animationState:A}=this.visualElement;A&&A.setActive("whileDrag",!0)},c=(g,v)=>{const{dragPropagation:m,dragDirectionLock:y,onDirectionLock:M,onDrag:A}=this.getProps();if(!m&&!this.openDragLock)return;const{offset:S}=v;if(y&&this.currentDirection===null){this.currentDirection=B1(S),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",v.point,S),this.updateAxis("y",v.point,S),this.visualElement.render(),A&&A(g,v)},f=(g,v)=>this.stop(g,v),d=()=>mi(g=>{var v;return this.getAnimationState(g)==="paused"&&((v=this.getAxisMotionValue(g).animation)===null||v===void 0?void 0:v.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new Sy(e,{onSessionStart:o,onStart:a,onMove:c,onSessionEnd:f,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:Cy(this.visualElement)})}stop(e,t){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=t;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&Rt.postRender(()=>a(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!xc(e,o,this.currentDirection))return;const a=this.getAxisMotionValue(e);let c=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(c=R1(c,this.constraints[e],this.elastic[e])),a.set(c)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,a=this.constraints;t&&Co(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&o?this.constraints=C1(o.layoutBox,t):this.constraints=!1,this.elastic=L1(r),a!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&mi(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=N1(o.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Co(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const a=O1(r,o.root,this.visualElement.getTransformPagePoint());let c=P1(o.layout.layoutBox,a);if(t){const f=t(I1(c));this.hasMutatedConstraints=!!f,f&&(c=Ty(f))}return c}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:a,dragSnapToOrigin:c,onDragTransitionEnd:f}=this.getProps(),d=this.constraints||{},h=mi(g=>{if(!xc(g,t,this.currentDirection))return;let v=d&&d[g]||{};c&&(v={min:0,max:0});const m=o?200:1e6,y=o?40:1e7,M={type:"inertia",velocity:r?e[g]:0,bounceStiffness:m,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...a,...v};return this.startAxisValueAnimation(g,M)});return Promise.all(h).then(f)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return ah(this.visualElement,e),r.start(jp(e,r,0,t,this.visualElement,!1))}stopAnimation(){mi(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){mi(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){mi(t=>{const{drag:r}=this.getProps();if(!xc(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(t);if(o&&o.layout){const{min:c,max:f}=o.layout.layoutBox[t];a.set(e[t]-Qt(c,f,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!Co(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};mi(c=>{const f=this.getAxisMotionValue(c);if(f&&this.constraints!==!1){const d=f.get();o[c]=D1({min:d,max:d},this.constraints[c])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),mi(c=>{if(!xc(c,e,null))return;const f=this.getAxisMotionValue(c),{min:d,max:h}=this.constraints[c];f.set(Qt(d,h,o[c]))})}addListeners(){if(!this.visualElement.current)return;k1.set(this.visualElement,this);const e=this.visualElement.current,t=Ya(e,"pointerdown",d=>{const{drag:h,dragListener:g=!0}=this.getProps();h&&g&&this.start(d)}),r=()=>{const{dragConstraints:d}=this.getProps();Co(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,a=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Rt.read(r);const c=el(window,"resize",()=>this.scalePositionWithinConstraints()),f=o.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(mi(g=>{const v=this.getAxisMotionValue(g);v&&(this.originPoint[g]+=d[g].translate,v.set(v.get()+d[g].translate))}),this.visualElement.render())}));return()=>{c(),t(),a(),f&&f()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:c=mh,dragMomentum:f=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:a,dragElastic:c,dragMomentum:f}}}function xc(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function B1(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class V1 extends rs{constructor(e){super(e),this.removeGroupControls=Bn,this.removeListeners=Bn,this.controls=new z1(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Bn}unmount(){this.removeGroupControls(),this.removeListeners()}}const Rv=n=>(e,t)=>{n&&Rt.postRender(()=>n(e,t))};class H1 extends rs{constructor(){super(...arguments),this.removePointerDownListener=Bn}onPointerDown(e){this.session=new Sy(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Cy(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:Rv(e),onStart:Rv(t),onMove:r,onEnd:(a,c)=>{delete this.session,o&&Rt.postRender(()=>o(a,c))}}}mount(){this.removePointerDownListener=Ya(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Wc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Cv(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Pa={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(st.test(n))n=parseFloat(n);else return n;const t=Cv(n,e.target.x),r=Cv(n,e.target.y);return`${t}% ${r}%`}},G1={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=ns.parse(n);if(o.length>5)return r;const a=ns.createTransformer(n),c=typeof o[0]!="number"?1:0,f=t.x.scale*e.x,d=t.y.scale*e.y;o[0+c]/=f,o[1+c]/=d;const h=Qt(f,d,.5);return typeof o[2+c]=="number"&&(o[2+c]/=h),typeof o[3+c]=="number"&&(o[3+c]/=h),a(o)}};class W1 extends ze.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:a}=e;hw(j1),a&&(t.group&&t.group.add(a),r&&r.register&&o&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),Wc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:a}=this.props,c=r.projection;return c&&(c.isPresent=a,o||e.layoutDependency!==t||t===void 0?c.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?c.promote():c.relegate()||Rt.postRender(()=>{const f=c.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),xp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Py(n){const[e,t]=RE(),r=ze.useContext(d_);return C.jsx(W1,{...n,layoutGroup:r,switchLayoutGroup:ze.useContext(__),isPresent:e,safeToRemove:t})}const j1={borderRadius:{...Pa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Pa,borderTopRightRadius:Pa,borderBottomLeftRadius:Pa,borderBottomRightRadius:Pa,boxShadow:G1};function X1(n,e,t){const r=Sn(n)?n:Wi(n);return r.start(jp("",r,e,t)),r.animation}function Y1(n){return n instanceof SVGElement&&n.tagName!=="svg"}const q1=(n,e)=>n.depth-e.depth;class $1{constructor(){this.children=[],this.isDirty=!1}add(e){Lp(this.children,e),this.isDirty=!0}remove(e){Ip(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(q1),this.isDirty=!1,this.children.forEach(e)}}function K1(n,e){const t=qi.now(),r=({timestamp:o})=>{const a=o-t;a>=e&&(Ii(r),n(a-e))};return Rt.read(r,!0),()=>Ii(r)}const Dy=["TopLeft","TopRight","BottomLeft","BottomRight"],Z1=Dy.length,Pv=n=>typeof n=="string"?parseFloat(n):n,Dv=n=>typeof n=="number"||st.test(n);function Q1(n,e,t,r,o,a){o?(n.opacity=Qt(0,t.opacity!==void 0?t.opacity:1,J1(r)),n.opacityExit=Qt(e.opacity!==void 0?e.opacity:1,0,eA(r))):a&&(n.opacity=Qt(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,r));for(let c=0;c<Z1;c++){const f=`border${Dy[c]}Radius`;let d=Nv(e,f),h=Nv(t,f);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||Dv(d)===Dv(h)?(n[f]=Math.max(Qt(Pv(d),Pv(h),r),0),(Yi.test(h)||Yi.test(d))&&(n[f]+="%")):n[f]=h}(e.rotate||t.rotate)&&(n.rotate=Qt(e.rotate||0,t.rotate||0,r))}function Nv(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const J1=Ny(0,.5,$_),eA=Ny(.5,.95,Bn);function Ny(n,e,t){return r=>r<n?0:r>e?1:t(Os(n,e,r))}function Lv(n,e){n.min=e.min,n.max=e.max}function hi(n,e){Lv(n.x,e.x),Lv(n.y,e.y)}function Iv(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function Uv(n,e,t,r,o){return n-=e,n=su(n,1/t,r),o!==void 0&&(n=su(n,1/o,r)),n}function tA(n,e=0,t=1,r=.5,o,a=n,c=n){if(Yi.test(e)&&(e=parseFloat(e),e=Qt(c.min,c.max,e/100)-c.min),typeof e!="number")return;let f=Qt(a.min,a.max,r);n===a&&(f-=e),n.min=Uv(n.min,e,t,f,o),n.max=Uv(n.max,e,t,f,o)}function Fv(n,e,[t,r,o],a,c){tA(n,e[t],e[r],e[o],e.scale,a,c)}const nA=["x","scaleX","originX"],iA=["y","scaleY","originY"];function Ov(n,e,t,r){Fv(n.x,e,nA,t?t.x:void 0,r?r.x:void 0),Fv(n.y,e,iA,t?t.y:void 0,r?r.y:void 0)}function kv(n){return n.translate===0&&n.scale===1}function Ly(n){return kv(n.x)&&kv(n.y)}function zv(n,e){return n.min===e.min&&n.max===e.max}function rA(n,e){return zv(n.x,e.x)&&zv(n.y,e.y)}function Bv(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function Iy(n,e){return Bv(n.x,e.x)&&Bv(n.y,e.y)}function Vv(n){return si(n.x)/si(n.y)}function Hv(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class sA{constructor(){this.members=[]}add(e){Lp(this.members,e),e.scheduleRender()}remove(e){if(Ip(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let r;for(let o=t;o>=0;o--){const a=this.members[o];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function oA(n,e,t){let r="";const o=n.x.translate/e.x,a=n.y.translate/e.y,c=(t==null?void 0:t.z)||0;if((o||a||c)&&(r=`translate3d(${o}px, ${a}px, ${c}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:g,rotateX:v,rotateY:m,skewX:y,skewY:M}=t;h&&(r=`perspective(${h}px) ${r}`),g&&(r+=`rotate(${g}deg) `),v&&(r+=`rotateX(${v}deg) `),m&&(r+=`rotateY(${m}deg) `),y&&(r+=`skewX(${y}deg) `),M&&(r+=`skewY(${M}deg) `)}const f=n.x.scale*e.x,d=n.y.scale*e.y;return(f!==1||d!==1)&&(r+=`scale(${f}, ${d})`),r||"none"}const Cs={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Ha=typeof window<"u"&&window.MotionDebug!==void 0,_d=["","X","Y","Z"],aA={visibility:"hidden"},Gv=1e3;let lA=0;function yd(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function Uy(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=H_(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Rt,!(o||a))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&Uy(r)}function Fy({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(c={},f=e==null?void 0:e()){this.id=lA++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ha&&(Cs.totalNodes=Cs.resolvedTargetDeltas=Cs.recalculatedProjection=0),this.nodes.forEach(fA),this.nodes.forEach(gA),this.nodes.forEach(vA),this.nodes.forEach(dA),Ha&&window.MotionDebug.record(Cs)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new $1)}addEventListener(c,f){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new Up),this.eventHandlers.get(c).add(f)}notifyListeners(c,...f){const d=this.eventHandlers.get(c);d&&d.notify(...f)}hasListeners(c){return this.eventHandlers.has(c)}mount(c,f=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Y1(c),this.instance=c;const{layoutId:d,layout:h,visualElement:g}=this.options;if(g&&!g.current&&g.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),f&&(h||d)&&(this.isLayoutDirty=!0),n){let v;const m=()=>this.root.updateBlockedByResize=!1;n(c,()=>{this.root.updateBlockedByResize=!0,v&&v(),v=K1(m,250),Wc.hasAnimatedSinceResize&&(Wc.hasAnimatedSinceResize=!1,this.nodes.forEach(jv))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&g&&(d||h)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:m,hasRelativeTargetChanged:y,layout:M})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const A=this.options.transition||g.getDefaultTransition()||MA,{onLayoutAnimationStart:S,onLayoutAnimationComplete:_}=g.getProps(),D=!this.targetLayout||!Iy(this.targetLayout,M)||y,L=!m&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||L||m&&(D||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(v,L);const R={...Rp(A,"layout"),onPlay:S,onComplete:_};(g.shouldReduceMotion||this.options.layoutRoot)&&(R.delay=0,R.type=!1),this.startAnimation(R)}else m||jv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=M})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ii(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(xA),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Uy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const v=this.path[g];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:f,layout:d}=this.options;if(f===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Wv);return}this.isUpdating||this.nodes.forEach(pA),this.isUpdating=!1,this.nodes.forEach(mA),this.nodes.forEach(cA),this.nodes.forEach(uA),this.clearAllSnapshots();const f=qi.now();pn.delta=Qi(0,1e3/60,f-pn.timestamp),pn.timestamp=f,pn.isProcessing=!0,ud.update.process(pn),ud.preRender.process(pn),ud.render.process(pn),pn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,xp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(hA),this.sharedNodes.forEach(_A)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Rt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Rt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=an(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(f=!1),f){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!Ly(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,g=h!==this.prevTransformTemplateValue;c&&(f||Rs(this.latestValues)||g)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const f=this.measurePageBox();let d=this.removeElementScroll(f);return c&&(d=this.removeTransform(d)),EA(d),{animationId:this.root.animationId,measuredBox:f,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:f}=this.options;if(!f)return an();const d=f.measureViewportBox();if(!(((c=this.scroll)===null||c===void 0?void 0:c.wasRoot)||this.path.some(wA))){const{scroll:g}=this.root;g&&(No(d.x,g.offset.x),No(d.y,g.offset.y))}return d}removeElementScroll(c){var f;const d=an();if(hi(d,c),!((f=this.scroll)===null||f===void 0)&&f.wasRoot)return d;for(let h=0;h<this.path.length;h++){const g=this.path[h],{scroll:v,options:m}=g;g!==this.root&&v&&m.layoutScroll&&(v.wasRoot&&hi(d,c),No(d.x,v.offset.x),No(d.y,v.offset.y))}return d}applyTransform(c,f=!1){const d=an();hi(d,c);for(let h=0;h<this.path.length;h++){const g=this.path[h];!f&&g.options.layoutScroll&&g.scroll&&g!==g.root&&Lo(d,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),Rs(g.latestValues)&&Lo(d,g.latestValues)}return Rs(this.latestValues)&&Lo(d,this.latestValues),d}removeTransform(c){const f=an();hi(f,c);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!Rs(h.latestValues))continue;gh(h.latestValues)&&h.updateSnapshot();const g=an(),v=h.measurePageBox();hi(g,v),Ov(f,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,g)}return Rs(this.latestValues)&&Ov(f,this.latestValues),f}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==pn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var f;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==d;if(!(c||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((f=this.parent)===null||f===void 0)&&f.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:m}=this.options;if(!(!this.layout||!(v||m))){if(this.resolvedRelativeTargetAt=pn.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=an(),this.relativeTargetOrigin=an(),$a(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),hi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=an(),this.targetWithTransforms=an()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),b1(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):hi(this.target,this.layout.layoutBox),by(this.target,this.targetDelta)):hi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=an(),this.relativeTargetOrigin=an(),$a(this.relativeTargetOrigin,this.target,y.target),hi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ha&&Cs.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||gh(this.parent.latestValues)||Ay(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var c;const f=this.getLead(),d=!!this.resumingFrom||this!==f;let h=!0;if((this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty)&&(h=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===pn.timestamp&&(h=!1),h)return;const{layout:g,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||v))return;hi(this.layoutCorrected,this.layout.layoutBox);const m=this.treeScale.x,y=this.treeScale.y;F1(this.layoutCorrected,this.treeScale,this.path,d),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=an());const{target:M}=f;if(!M){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Iv(this.prevProjectionDelta.x,this.projectionDelta.x),Iv(this.prevProjectionDelta.y,this.projectionDelta.y)),qa(this.projectionDelta,this.layoutCorrected,M,this.latestValues),(this.treeScale.x!==m||this.treeScale.y!==y||!Hv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Hv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",M)),Ha&&Cs.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var f;if((f=this.options.visualElement)===null||f===void 0||f.scheduleRender(),c){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Do(),this.projectionDelta=Do(),this.projectionDeltaWithTransform=Do()}setAnimationOrigin(c,f=!1){const d=this.snapshot,h=d?d.latestValues:{},g={...this.latestValues},v=Do();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const m=an(),y=d?d.source:void 0,M=this.layout?this.layout.source:void 0,A=y!==M,S=this.getStack(),_=!S||S.members.length<=1,D=!!(A&&!_&&this.options.crossfade===!0&&!this.path.some(SA));this.animationProgress=0;let L;this.mixTargetDelta=R=>{const N=R/1e3;Xv(v.x,c.x,N),Xv(v.y,c.y,N),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&($a(m,this.layout.layoutBox,this.relativeParent.layout.layoutBox),yA(this.relativeTarget,this.relativeTargetOrigin,m,N),L&&rA(this.relativeTarget,L)&&(this.isProjectionDirty=!1),L||(L=an()),hi(L,this.relativeTarget)),A&&(this.animationValues=g,Q1(g,h,this.latestValues,N,D,_)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=N},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ii(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Rt.update(()=>{Wc.hasAnimatedSinceResize=!0,this.currentAnimation=X1(0,Gv,{...c,onUpdate:f=>{this.mixTargetDelta(f),c.onUpdate&&c.onUpdate(f)},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Gv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:f,target:d,layout:h,latestValues:g}=c;if(!(!f||!d||!h)){if(this!==c&&this.layout&&h&&Oy(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||an();const v=si(this.layout.layoutBox.x);d.x.min=c.target.x.min,d.x.max=d.x.min+v;const m=si(this.layout.layoutBox.y);d.y.min=c.target.y.min,d.y.max=d.y.min+m}hi(f,d),Lo(f,g),qa(this.projectionDeltaWithTransform,this.layoutCorrected,f,g)}}registerSharedNode(c,f){this.sharedNodes.has(c)||this.sharedNodes.set(c,new sA),this.sharedNodes.get(c).add(f);const h=f.options.initialPromotionConfig;f.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(f):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var c;const{layoutId:f}=this.options;return f?((c=this.getStack())===null||c===void 0?void 0:c.lead)||this:this}getPrevLead(){var c;const{layoutId:f}=this.options;return f?(c=this.getStack())===null||c===void 0?void 0:c.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:f,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),c&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let f=!1;const{latestValues:d}=c;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(f=!0),!f)return;const h={};d.z&&yd("z",c,h,this.animationValues);for(let g=0;g<_d.length;g++)yd(`rotate${_d[g]}`,c,h,this.animationValues),yd(`skew${_d[g]}`,c,h,this.animationValues);c.render();for(const g in h)c.setStaticValue(g,h[g]),this.animationValues&&(this.animationValues[g]=h[g]);c.scheduleRender()}getProjectionStyles(c){var f,d;if(!this.instance||this.isSVG)return;if(!this.isVisible)return aA;const h={visibility:""},g=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=Hc(c==null?void 0:c.pointerEvents)||"",h.transform=g?g(this.latestValues,""):"none",h;const v=this.getLead();if(!this.projectionDelta||!this.layout||!v.target){const A={};return this.options.layoutId&&(A.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,A.pointerEvents=Hc(c==null?void 0:c.pointerEvents)||""),this.hasProjected&&!Rs(this.latestValues)&&(A.transform=g?g({},""):"none",this.hasProjected=!1),A}const m=v.animationValues||v.latestValues;this.applyTransformsToTarget(),h.transform=oA(this.projectionDeltaWithTransform,this.treeScale,m),g&&(h.transform=g(m,h.transform));const{x:y,y:M}=this.projectionDelta;h.transformOrigin=`${y.origin*100}% ${M.origin*100}% 0`,v.animationValues?h.opacity=v===this?(d=(f=m.opacity)!==null&&f!==void 0?f:this.latestValues.opacity)!==null&&d!==void 0?d:1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:h.opacity=v===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const A in eu){if(m[A]===void 0)continue;const{correct:S,applyTo:_}=eu[A],D=h.transform==="none"?m[A]:S(m[A],v);if(_){const L=_.length;for(let R=0;R<L;R++)h[_[R]]=D}else h[A]=D}return this.options.layoutId&&(h.pointerEvents=v===this?Hc(c==null?void 0:c.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var f;return(f=c.currentAnimation)===null||f===void 0?void 0:f.stop()}),this.root.nodes.forEach(Wv),this.root.sharedNodes.clear()}}}function cA(n){n.updateLayout()}function uA(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:a}=n.options,c=t.source!==n.layout.source;a==="size"?mi(v=>{const m=c?t.measuredBox[v]:t.layoutBox[v],y=si(m);m.min=r[v].min,m.max=m.min+y}):Oy(a,t.layoutBox,r)&&mi(v=>{const m=c?t.measuredBox[v]:t.layoutBox[v],y=si(r[v]);m.max=m.min+y,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+y)});const f=Do();qa(f,r,t.layoutBox);const d=Do();c?qa(d,n.applyTransform(o,!0),t.measuredBox):qa(d,r,t.layoutBox);const h=!Ly(f);let g=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:m,layout:y}=v;if(m&&y){const M=an();$a(M,t.layoutBox,m.layoutBox);const A=an();$a(A,r,y.layoutBox),Iy(M,A)||(g=!0),v.options.layoutRoot&&(n.relativeTarget=A,n.relativeTargetOrigin=M,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:d,layoutDelta:f,hasLayoutChanged:h,hasRelativeTargetChanged:g})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function fA(n){Ha&&Cs.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function dA(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function hA(n){n.clearSnapshot()}function Wv(n){n.clearMeasurements()}function pA(n){n.isLayoutDirty=!1}function mA(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function jv(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function gA(n){n.resolveTargetDelta()}function vA(n){n.calcProjection()}function xA(n){n.resetSkewAndRotation()}function _A(n){n.removeLeadSnapshot()}function Xv(n,e,t){n.translate=Qt(e.translate,0,t),n.scale=Qt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function Yv(n,e,t,r){n.min=Qt(e.min,t.min,r),n.max=Qt(e.max,t.max,r)}function yA(n,e,t,r){Yv(n.x,e.x,t.x,r),Yv(n.y,e.y,t.y,r)}function SA(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const MA={duration:.45,ease:[.4,0,.1,1]},qv=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),$v=qv("applewebkit/")&&!qv("chrome/")?Math.round:Bn;function Kv(n){n.min=$v(n.min),n.max=$v(n.max)}function EA(n){Kv(n.x),Kv(n.y)}function Oy(n,e,t){return n==="position"||n==="preserve-aspect"&&!A1(Vv(e),Vv(t),.2)}function wA(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const TA=Fy({attachResizeListener:(n,e)=>el(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Sd={current:void 0},ky=Fy({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Sd.current){const n=new TA({});n.mount(window),n.setOptions({layoutScroll:!0}),Sd.current=n}return Sd.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),AA={pan:{Feature:H1},drag:{Feature:V1,ProjectionNode:ky,MeasureLayout:Py}};function Zv(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,a=r[o];a&&Rt.postRender(()=>a(e,ol(e)))}class bA extends rs{mount(){const{current:e}=this.node;e&&(this.unmount=bw(e,t=>(Zv(this.node,t,"Start"),r=>Zv(this.node,r,"End"))))}unmount(){}}class RA extends rs{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=sl(el(this.node.current,"focus",()=>this.onFocus()),el(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Qv(n,e,t){const{props:r}=n;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),a=r[o];a&&Rt.postRender(()=>a(e,ol(e)))}class CA extends rs{mount(){const{current:e}=this.node;e&&(this.unmount=Dw(e,t=>(Qv(this.node,t,"Start"),(r,{success:o})=>Qv(this.node,r,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const xh=new WeakMap,Md=new WeakMap,PA=n=>{const e=xh.get(n.target);e&&e(n)},DA=n=>{n.forEach(PA)};function NA({root:n,...e}){const t=n||document;Md.has(t)||Md.set(t,{});const r=Md.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(DA,{root:n,...e})),r[o]}function LA(n,e,t){const r=NA(e);return xh.set(n,t),r.observe(n),()=>{xh.delete(n),r.unobserve(n)}}const IA={some:0,all:1};class UA extends rs{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:a}=e,c={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:IA[o]},f=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,a&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:g,onViewportLeave:v}=this.node.getProps(),m=h?g:v;m&&m(d)};return LA(this.node.current,c,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(FA(e,t))&&this.startObserver()}unmount(){}}function FA({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const OA={inView:{Feature:UA},tap:{Feature:CA},focus:{Feature:RA},hover:{Feature:bA}},kA={layout:{ProjectionNode:ky,MeasureLayout:Py}},ou={current:null},Xp={current:!1};function zy(){if(Xp.current=!0,!!hp)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>ou.current=n.matches;n.addListener(e),e()}else ou.current=!1}const zA=[...cy,In,ns],BA=n=>zA.find(ly(n)),Jv=new WeakMap;function VA(n,e,t){for(const r in e){const o=e[r],a=t[r];if(Sn(o))n.addValue(r,o);else if(Sn(a))n.addValue(r,Wi(o,{owner:n}));else if(a!==o)if(n.hasValue(r)){const c=n.getValue(r);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=n.getStaticValue(r);n.addValue(r,Wi(c!==void 0?c:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const ex=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class HA{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:a,visualState:c},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Hp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=qi.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,Rt.render(this.render,!1,!0))};const{latestValues:d,renderState:h,onUpdate:g}=c;this.onUpdate=g,this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=f,this.blockInitialAnimation=!!a,this.isControllingVariants=_u(t),this.isVariantNode=v_(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...m}=this.scrapeMotionValuesFromProps(t,{},this);for(const y in m){const M=m[y];d[y]!==void 0&&Sn(M)&&M.set(d[y],!1)}}mount(e){this.current=e,Jv.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),Xp.current||zy(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ou.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Jv.delete(this.current),this.projection&&this.projection.unmount(),Ii(this.notifyUpdate),Ii(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Vs.has(e),o=t.on("change",f=>{this.latestValues[e]=f,this.props.onUpdate&&Rt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=t.on("renderRequest",this.scheduleRender);let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),a(),c&&c(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Oo){const t=Oo[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):an()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<ex.length;r++){const o=ex[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a="on"+o,c=e[a];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=VA(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Wi(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){var r;let o=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options);return o!=null&&(typeof o=="string"&&(oy(o)||Z_(o))?o=parseFloat(o):!BA(o)&&ns.test(t)&&(o=iy(e,t)),this.setBaseTarget(e,Sn(o)?o.get():o)),Sn(o)?o.get():o}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const c=yp(this.props,r,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);c&&(o=c[e])}if(r&&o!==void 0)return o;const a=this.getBaseTargetFromProps(this.props,e);return a!==void 0&&!Sn(a)?a:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Up),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class By extends HA{constructor(){super(...arguments),this.KeyframeResolver=uy}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Sn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function GA(n){return window.getComputedStyle(n)}class WA extends By{constructor(){super(...arguments),this.type="html",this.renderInstance=A_}readValueFromInstance(e,t){if(Vs.has(t)){const r=Vp(t);return r&&r.default||0}else{const r=GA(e),o=(E_(t)?r.getPropertyValue(t):r[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Ry(e,t)}build(e,t,r){Ep(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return bp(e,t,r)}}class jA extends By{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=an}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Vs.has(t)){const r=Vp(t);return r&&r.default||0}return t=b_.has(t)?t:vp(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return P_(e,t,r)}build(e,t,r){wp(e,t,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,r,o){R_(e,t,r,o)}mount(e){this.isSVGTag=Ap(e.tagName),super.mount(e)}}const XA=(n,e)=>_p(n)?new jA(e):new WA(e,{allowProjection:n!==ze.Fragment}),YA=Mw({...v1,...OA,...AA,...kA},XA),rn=OE(YA);function Vy(n,e){let t;const r=()=>{const{currentTime:o}=e,c=(o===null?0:o.value)/100;t!==c&&n(c),t=c};return Rt.update(r,!0),()=>Ii(r)}const jc=new WeakMap;let Jr;function qA(n,e){if(e){const{inlineSize:t,blockSize:r}=e[0];return{width:t,height:r}}else return n instanceof SVGElement&&"getBBox"in n?n.getBBox():{width:n.offsetWidth,height:n.offsetHeight}}function $A({target:n,contentRect:e,borderBoxSize:t}){var r;(r=jc.get(n))===null||r===void 0||r.forEach(o=>{o({target:n,contentSize:e,get size(){return qA(n,t)}})})}function KA(n){n.forEach($A)}function ZA(){typeof ResizeObserver>"u"||(Jr=new ResizeObserver(KA))}function QA(n,e){Jr||ZA();const t=Dp(n);return t.forEach(r=>{let o=jc.get(r);o||(o=new Set,jc.set(r,o)),o.add(e),Jr==null||Jr.observe(r)}),()=>{t.forEach(r=>{const o=jc.get(r);o==null||o.delete(e),o!=null&&o.size||Jr==null||Jr.unobserve(r)})}}const Xc=new Set;let Ka;function JA(){Ka=()=>{const n={width:window.innerWidth,height:window.innerHeight},e={target:window,size:n,contentSize:n};Xc.forEach(t=>t(e))},window.addEventListener("resize",Ka)}function eb(n){return Xc.add(n),Ka||JA(),()=>{Xc.delete(n),!Xc.size&&Ka&&(Ka=void 0)}}function tb(n,e){return typeof n=="function"?eb(n):QA(n,e)}const nb=50,tx=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),ib=()=>({time:0,x:tx(),y:tx()}),rb={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function nx(n,e,t,r){const o=t[e],{length:a,position:c}=rb[e],f=o.current,d=t.time;o.current=n[`scroll${c}`],o.scrollLength=n[`scroll${a}`]-n[`client${a}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=Os(0,o.scrollLength,o.current);const h=r-d;o.velocity=h>nb?0:Fp(o.current-f,h)}function sb(n,e,t){nx(n,"x",e,t),nx(n,"y",e,t),e.time=t}function ob(n,e){const t={x:0,y:0};let r=n;for(;r&&r!==e;)if(r instanceof HTMLElement)t.x+=r.offsetLeft,t.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const o=r.getBoundingClientRect();r=r.parentElement;const a=r.getBoundingClientRect();t.x+=o.left-a.left,t.y+=o.top-a.top}else if(r instanceof SVGGraphicsElement){const{x:o,y:a}=r.getBBox();t.x+=o,t.y+=a;let c=null,f=r.parentNode;for(;!c;)f.tagName==="svg"&&(c=f),f=r.parentNode;r=c}else break;return t}const _h={start:0,center:.5,end:1};function ix(n,e,t=0){let r=0;if(n in _h&&(n=_h[n]),typeof n=="string"){const o=parseFloat(n);n.endsWith("px")?r=o:n.endsWith("%")?n=o/100:n.endsWith("vw")?r=o/100*document.documentElement.clientWidth:n.endsWith("vh")?r=o/100*document.documentElement.clientHeight:n=o}return typeof n=="number"&&(r=e*n),t+r}const ab=[0,0];function lb(n,e,t,r){let o=Array.isArray(n)?n:ab,a=0,c=0;return typeof n=="number"?o=[n,n]:typeof n=="string"&&(n=n.trim(),n.includes(" ")?o=n.split(" "):o=[n,_h[n]?n:"0"]),a=ix(o[0],t,r),c=ix(o[1],e),a-c}const cb={All:[[0,0],[1,1]]},ub={x:0,y:0};function fb(n){return"getBBox"in n&&n.tagName!=="svg"?n.getBBox():{width:n.clientWidth,height:n.clientHeight}}function db(n,e,t){const{offset:r=cb.All}=t,{target:o=n,axis:a="y"}=t,c=a==="y"?"height":"width",f=o!==n?ob(o,n):ub,d=o===n?{width:n.scrollWidth,height:n.scrollHeight}:fb(o),h={width:n.clientWidth,height:n.clientHeight};e[a].offset.length=0;let g=!e[a].interpolate;const v=r.length;for(let m=0;m<v;m++){const y=lb(r[m],h[c],d[c],f[a]);!g&&y!==e[a].interpolatorOffsets[m]&&(g=!0),e[a].offset[m]=y}g&&(e[a].interpolate=Wp(e[a].offset,vy(r),{clamp:!1}),e[a].interpolatorOffsets=[...e[a].offset]),e[a].progress=Qi(0,1,e[a].interpolate(e[a].current))}function hb(n,e=n,t){if(t.x.targetOffset=0,t.y.targetOffset=0,e!==n){let r=e;for(;r&&r!==n;)t.x.targetOffset+=r.offsetLeft,t.y.targetOffset+=r.offsetTop,r=r.offsetParent}t.x.targetLength=e===n?e.scrollWidth:e.clientWidth,t.y.targetLength=e===n?e.scrollHeight:e.clientHeight,t.x.containerLength=n.clientWidth,t.y.containerLength=n.clientHeight}function pb(n,e,t,r={}){return{measure:()=>hb(n,r.target,t),update:o=>{sb(n,t,o),(r.offset||r.target)&&db(n,t,r)},notify:()=>e(t)}}const Da=new WeakMap,rx=new WeakMap,Ed=new WeakMap,sx=n=>n===document.documentElement?window:n;function Yp(n,{container:e=document.documentElement,...t}={}){let r=Ed.get(e);r||(r=new Set,Ed.set(e,r));const o=ib(),a=pb(e,n,o,t);if(r.add(a),!Da.has(e)){const f=()=>{for(const m of r)m.measure()},d=()=>{for(const m of r)m.update(pn.timestamp)},h=()=>{for(const m of r)m.notify()},g=()=>{Rt.read(f,!1,!0),Rt.read(d,!1,!0),Rt.update(h,!1,!0)};Da.set(e,g);const v=sx(e);window.addEventListener("resize",g,{passive:!0}),e!==document.documentElement&&rx.set(e,tb(e,g)),v.addEventListener("scroll",g,{passive:!0})}const c=Da.get(e);return Rt.read(c,!1,!0),()=>{var f;Ii(c);const d=Ed.get(e);if(!d||(d.delete(a),d.size))return;const h=Da.get(e);Da.delete(e),h&&(sx(e).removeEventListener("scroll",h),(f=rx.get(e))===null||f===void 0||f(),window.removeEventListener("resize",h))}}function mb({source:n,container:e,axis:t="y"}){n&&(e=n);const r={value:0},o=Yp(a=>{r.value=a[t].progress*100},{container:e,axis:t});return{currentTime:r,cancel:o}}const wd=new Map;function Hy({source:n,container:e=document.documentElement,axis:t="y"}={}){n&&(e=n),wd.has(e)||wd.set(e,{});const r=wd.get(e);return r[t]||(r[t]=L_()?new ScrollTimeline({source:e,axis:t}):mb({source:e,axis:t})),r[t]}function gb(n){return n.length===2}function Gy(n){return n&&(n.target||n.offset)}function vb(n,e){return gb(n)||Gy(e)?Yp(t=>{n(t[e.axis].progress,t)},e):Vy(n,Hy(e))}function xb(n,e){if(n.flatten(),Gy(e))return n.pause(),Yp(t=>{n.time=n.duration*t[e.axis].progress},e);{const t=Hy(e);return n.attachTimeline?n.attachTimeline(t,r=>(r.pause(),Vy(o=>{r.time=r.duration*o},t))):Bn}}function _b(n,{axis:e="y",...t}={}){const r={axis:e,...t};return typeof n=="function"?vb(n,r):xb(n,r)}function ox(n,e){CE(!!(!e||e.current))}const yb=()=>({scrollX:Wi(0),scrollY:Wi(0),scrollXProgress:Wi(0),scrollYProgress:Wi(0)});function al({container:n,target:e,layoutEffect:t=!0,...r}={}){const o=pu(yb);return(t?gu:ze.useEffect)(()=>(ox("target",e),ox("container",n),_b((c,{x:f,y:d})=>{o.scrollX.set(f.current),o.scrollXProgress.set(f.progress),o.scrollY.set(d.current),o.scrollYProgress.set(d.progress)},{...r,container:(n==null?void 0:n.current)||void 0,target:(e==null?void 0:e.current)||void 0})),[n,e,JSON.stringify(r.offset)]),o}function Wy(n){const e=pu(()=>Wi(n)),{isStatic:t}=ze.useContext(mu);if(t){const[,r]=ze.useState(n);ze.useEffect(()=>e.on("change",r),[])}return e}function jy(n,e){const t=Wy(e()),r=()=>t.set(e());return r(),gu(()=>{const o=()=>Rt.preRender(r,!1,!0),a=n.map(c=>c.on("change",o));return()=>{a.forEach(c=>c()),Ii(r)}}),t}function ax(n){return typeof n=="number"?n:parseFloat(n)}function Sb(n,e={}){const{isStatic:t}=ze.useContext(mu),r=ze.useRef(null),o=Wy(Sn(n)?ax(n.get()):n),a=ze.useRef(o.get()),c=ze.useRef(()=>{}),f=()=>{const h=r.current;h&&h.time===0&&h.sample(pn.delta),d(),r.current=WT({keyframes:[o.get(),a.current],velocity:o.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...e,onUpdate:c.current})},d=()=>{r.current&&r.current.stop()};return ze.useInsertionEffect(()=>o.attach((h,g)=>t?g(h):(a.current=h,c.current=g,Rt.update(f),o.get()),d),[JSON.stringify(e)]),gu(()=>{if(Sn(n))return n.on("change",h=>o.set(ax(h)))},[o]),o}const Mb=n=>n&&typeof n=="object"&&n.mix,Eb=n=>Mb(n)?n.mix:void 0;function wb(...n){const e=!Array.isArray(n[0]),t=e?0:-1,r=n[0+t],o=n[1+t],a=n[2+t],c=n[3+t],f=Wp(o,a,{mixer:Eb(a[0]),...c});return e?f(r):f}function Tb(n){ja.current=[],n();const e=jy(ja.current,n);return ja.current=void 0,e}function Li(n,e,t,r){if(typeof n=="function")return Tb(n);const o=typeof e=="function"?e:wb(e,t,r);return Array.isArray(n)?lx(n,o):lx([n],([a])=>o(a))}function lx(n,e){const t=pu(()=>[]);return jy(n,()=>{t.length=0;const r=n.length;for(let o=0;o<r;o++)t[o]=n[o].get();return e(t)})}function Hs(){!Xp.current&&zy();const[n]=ze.useState(ou.current);return n}const Ab={some:0,all:1};function bb(n,e,{root:t,margin:r,amount:o="some"}={}){const a=Dp(n),c=new WeakMap,f=h=>{h.forEach(g=>{const v=c.get(g.target);if(g.isIntersecting!==!!v)if(g.isIntersecting){const m=e(g);typeof m=="function"?c.set(g.target,m):d.unobserve(g.target)}else typeof v=="function"&&(v(g),c.delete(g.target))})},d=new IntersectionObserver(f,{root:t,rootMargin:r,threshold:typeof o=="number"?o:Ab[o]});return a.forEach(h=>d.observe(h)),()=>d.disconnect()}function Rb(n,{root:e,margin:t,amount:r,once:o=!1}={}){const[a,c]=ze.useState(!1);return ze.useEffect(()=>{if(!n.current||o&&a)return;const f=()=>(c(!0),o?void 0:()=>c(!1)),d={root:e&&e.current||void 0,margin:t,amount:r};return bb(n.current,f,d)},[e,n,t,o,r]),a}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qp="185",Cb=0,cx=1,Pb=2,Yc=1,Db=2,Ga=3,is=0,Zn=1,mr=2,_r=0,Io=1,ux=2,fx=3,dx=4,Nb=5,Ds=100,Lb=101,Ib=102,Ub=103,Fb=104,Ob=200,kb=201,zb=202,Bb=203,yh=204,Sh=205,Vb=206,Hb=207,Gb=208,Wb=209,jb=210,Xb=211,Yb=212,qb=213,$b=214,Mh=0,Eh=1,wh=2,zo=3,Th=4,Ah=5,bh=6,Rh=7,Xy=0,Kb=1,Zb=2,$i=0,Yy=1,qy=2,$y=3,Ky=4,Zy=5,Qy=6,Jy=7,eS=300,ks=301,Bo=302,Td=303,Ad=304,Eu=306,Ch=1e3,gr=1001,Ph=1002,An=1003,Qb=1004,_c=1005,Un=1006,bd=1007,Is=1008,vi=1009,tS=1010,nS=1011,tl=1012,$p=1013,Ji=1014,ji=1015,Er=1016,Kp=1017,Zp=1018,nl=1020,iS=35902,rS=35899,sS=1021,oS=1022,Ni=1023,wr=1026,Us=1027,aS=1028,Qp=1029,zs=1030,Jp=1031,em=1033,qc=33776,$c=33777,Kc=33778,Zc=33779,Dh=35840,Nh=35841,Lh=35842,Ih=35843,Uh=36196,Fh=37492,Oh=37496,kh=37488,zh=37489,au=37490,Bh=37491,Vh=37808,Hh=37809,Gh=37810,Wh=37811,jh=37812,Xh=37813,Yh=37814,qh=37815,$h=37816,Kh=37817,Zh=37818,Qh=37819,Jh=37820,ep=37821,tp=36492,np=36494,ip=36495,rp=36283,sp=36284,lu=36285,op=36286,Jb=3200,hx=0,eR=1,es="",gi="srgb",cu="srgb-linear",uu="linear",Ft="srgb",mo=7680,px=519,tR=512,nR=513,iR=514,tm=515,rR=516,sR=517,nm=518,oR=519,mx=35044,gx="300 es",Xi=2e3,fu=2001;function aR(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function du(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lR(){const n=du("canvas");return n.style.display="block",n}const vx={};function xx(...n){const e="THREE."+n.shift();console.log(e,...n)}function lS(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function lt(...n){n=lS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function wt(...n){n=lS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Uo(...n){const e=n.join(" ");e in vx||(vx[e]=!0,lt(...n))}function cR(n,e,t){return new Promise(function(r,o){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:r()}}setTimeout(a,t)})}const uR={[Mh]:Eh,[wh]:bh,[Th]:Rh,[zo]:Ah,[Eh]:Mh,[bh]:wh,[Rh]:Th,[Ah]:zo};class Gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rd=Math.PI/180,ap=180/Math.PI;function ll(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[t&63|128]+Nn[t>>8&255]+"-"+Nn[t>>16&255]+Nn[t>>24&255]+Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]).toLowerCase()}function yt(n,e,t){return Math.max(e,Math.min(t,n))}function fR(n,e){return(n%e+e)%e}function Cd(n,e,t){return(1-t)*n+t*e}function Na(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const am=class am{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*r-c*o+e.x,this.y=a*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};am.prototype.isVector2=!0;let Ct=am;class Xo{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,a,c,f){let d=r[o+0],h=r[o+1],g=r[o+2],v=r[o+3],m=a[c+0],y=a[c+1],M=a[c+2],A=a[c+3];if(v!==A||d!==m||h!==y||g!==M){let S=d*m+h*y+g*M+v*A;S<0&&(m=-m,y=-y,M=-M,A=-A,S=-S);let _=1-f;if(S<.9995){const D=Math.acos(S),L=Math.sin(D);_=Math.sin(_*D)/L,f=Math.sin(f*D)/L,d=d*_+m*f,h=h*_+y*f,g=g*_+M*f,v=v*_+A*f}else{d=d*_+m*f,h=h*_+y*f,g=g*_+M*f,v=v*_+A*f;const D=1/Math.sqrt(d*d+h*h+g*g+v*v);d*=D,h*=D,g*=D,v*=D}}e[t]=d,e[t+1]=h,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,a,c){const f=r[o],d=r[o+1],h=r[o+2],g=r[o+3],v=a[c],m=a[c+1],y=a[c+2],M=a[c+3];return e[t]=f*M+g*v+d*y-h*m,e[t+1]=d*M+g*m+h*v-f*y,e[t+2]=h*M+g*y+f*m-d*v,e[t+3]=g*M-f*v-d*m-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,a=e._z,c=e._order,f=Math.cos,d=Math.sin,h=f(r/2),g=f(o/2),v=f(a/2),m=d(r/2),y=d(o/2),M=d(a/2);switch(c){case"XYZ":this._x=m*g*v+h*y*M,this._y=h*y*v-m*g*M,this._z=h*g*M+m*y*v,this._w=h*g*v-m*y*M;break;case"YXZ":this._x=m*g*v+h*y*M,this._y=h*y*v-m*g*M,this._z=h*g*M-m*y*v,this._w=h*g*v+m*y*M;break;case"ZXY":this._x=m*g*v-h*y*M,this._y=h*y*v+m*g*M,this._z=h*g*M+m*y*v,this._w=h*g*v-m*y*M;break;case"ZYX":this._x=m*g*v-h*y*M,this._y=h*y*v+m*g*M,this._z=h*g*M-m*y*v,this._w=h*g*v+m*y*M;break;case"YZX":this._x=m*g*v+h*y*M,this._y=h*y*v+m*g*M,this._z=h*g*M-m*y*v,this._w=h*g*v-m*y*M;break;case"XZY":this._x=m*g*v-h*y*M,this._y=h*y*v-m*g*M,this._z=h*g*M+m*y*v,this._w=h*g*v+m*y*M;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],a=t[8],c=t[1],f=t[5],d=t[9],h=t[2],g=t[6],v=t[10],m=r+f+v;if(m>0){const y=.5/Math.sqrt(m+1);this._w=.25/y,this._x=(g-d)*y,this._y=(a-h)*y,this._z=(c-o)*y}else if(r>f&&r>v){const y=2*Math.sqrt(1+r-f-v);this._w=(g-d)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(a+h)/y}else if(f>v){const y=2*Math.sqrt(1+f-r-v);this._w=(a-h)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(d+g)/y}else{const y=2*Math.sqrt(1+v-r-f);this._w=(c-o)/y,this._x=(a+h)/y,this._y=(d+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,a=e._z,c=e._w,f=t._x,d=t._y,h=t._z,g=t._w;return this._x=r*g+c*f+o*h-a*d,this._y=o*g+c*d+a*f-r*h,this._z=a*g+c*h+r*d-o*f,this._w=c*g-r*f-o*d-a*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,a=e._z,c=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,a=-a,c=-c,f=-f);let d=1-t;if(f<.9995){const h=Math.acos(f),g=Math.sin(h);d=Math.sin(d*h)/g,t=Math.sin(t*h)/g,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const lm=class lm{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_x.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_x.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*o,this.y=a[1]*t+a[4]*r+a[7]*o,this.z=a[2]*t+a[5]*r+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*r+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*r+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*r+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,a=e.x,c=e.y,f=e.z,d=e.w,h=2*(c*o-f*r),g=2*(f*t-a*o),v=2*(a*r-c*t);return this.x=t+d*h+c*v-f*g,this.y=r+d*g+f*h-a*v,this.z=o+d*v+a*g-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*o,this.y=a[1]*t+a[5]*r+a[9]*o,this.z=a[2]*t+a[6]*r+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,a=e.z,c=t.x,f=t.y,d=t.z;return this.x=o*d-a*f,this.y=a*c-r*d,this.z=r*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Pd.copy(this).projectOnVector(e),this.sub(Pd)}reflect(e){return this.sub(Pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lm.prototype.isVector3=!0;let ie=lm;const Pd=new ie,_x=new Xo,cm=class cm{constructor(e,t,r,o,a,c,f,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,f,d,h)}set(e,t,r,o,a,c,f,d,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=t,g[4]=a,g[5]=d,g[6]=r,g[7]=c,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],f=r[3],d=r[6],h=r[1],g=r[4],v=r[7],m=r[2],y=r[5],M=r[8],A=o[0],S=o[3],_=o[6],D=o[1],L=o[4],R=o[7],N=o[2],P=o[5],k=o[8];return a[0]=c*A+f*D+d*N,a[3]=c*S+f*L+d*P,a[6]=c*_+f*R+d*k,a[1]=h*A+g*D+v*N,a[4]=h*S+g*L+v*P,a[7]=h*_+g*R+v*k,a[2]=m*A+y*D+M*N,a[5]=m*S+y*L+M*P,a[8]=m*_+y*R+M*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],f=e[5],d=e[6],h=e[7],g=e[8];return t*c*g-t*f*h-r*a*g+r*f*d+o*a*h-o*c*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],f=e[5],d=e[6],h=e[7],g=e[8],v=g*c-f*h,m=f*d-g*a,y=h*a-c*d,M=t*v+r*m+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=v*A,e[1]=(o*h-g*r)*A,e[2]=(f*r-o*c)*A,e[3]=m*A,e[4]=(g*t-o*d)*A,e[5]=(o*a-f*t)*A,e[6]=y*A,e[7]=(r*d-h*t)*A,e[8]=(c*t-r*a)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,a,c,f){const d=Math.cos(a),h=Math.sin(a);return this.set(r*d,r*h,-r*(d*c+h*f)+c+e,-o*h,o*d,-o*(-h*c+d*f)+f+t,0,0,1),this}scale(e,t){return Uo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dd.makeScale(e,t)),this}rotate(e){return Uo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dd.makeRotation(-e)),this}translate(e,t){return Uo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};cm.prototype.isMatrix3=!0;let ft=cm;const Dd=new ft,yx=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sx=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dR(){const n={enabled:!0,workingColorSpace:cu,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Ft&&(o.r=yr(o.r),o.g=yr(o.g),o.b=yr(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ft&&(o.r=Fo(o.r),o.g=Fo(o.g),o.b=Fo(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===es?uu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return Uo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return Uo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[cu]:{primaries:e,whitePoint:r,transfer:uu,toXYZ:yx,fromXYZ:Sx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:e,whitePoint:r,transfer:Ft,toXYZ:yx,fromXYZ:Sx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),n}const _t=dR();function yr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let go;class hR{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{go===void 0&&(go=du("canvas")),go.width=e.width,go.height=e.height;const o=go.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=go}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=du("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=yr(a[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(yr(t[r]/255)*255):t[r]=yr(t[r]);return{data:t,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pR=0;class im{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pR++}),this.uuid=ll(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?a.push(Nd(o[c].image)):a.push(Nd(o[c]))}else a=Nd(o);r.url=a}return t||(e.images[this.uuid]=r),r}}function Nd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?hR.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let mR=0;const Ld=new ie;class Vn extends Gs{constructor(e=Vn.DEFAULT_IMAGE,t=Vn.DEFAULT_MAPPING,r=gr,o=gr,a=Un,c=Is,f=Ni,d=vi,h=Vn.DEFAULT_ANISOTROPY,g=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mR++}),this.uuid=ll(),this.name="",this.source=new im(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ld).x}get height(){return this.source.getSize(Ld).y}get depth(){return this.source.getSize(Ld).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){lt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){lt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ch:e.x=e.x-Math.floor(e.x);break;case gr:e.x=e.x<0?0:1;break;case Ph:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ch:e.y=e.y-Math.floor(e.y);break;case gr:e.y=e.y<0?0:1;break;case Ph:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=eS;Vn.DEFAULT_ANISOTROPY=1;const um=class um{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,a;const d=e.elements,h=d[0],g=d[4],v=d[8],m=d[1],y=d[5],M=d[9],A=d[2],S=d[6],_=d[10];if(Math.abs(g-m)<.01&&Math.abs(v-A)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+m)<.1&&Math.abs(v+A)<.1&&Math.abs(M+S)<.1&&Math.abs(h+y+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(h+1)/2,R=(y+1)/2,N=(_+1)/2,P=(g+m)/4,k=(v+A)/4,w=(M+S)/4;return L>R&&L>N?L<.01?(r=0,o=.707106781,a=.707106781):(r=Math.sqrt(L),o=P/r,a=k/r):R>N?R<.01?(r=.707106781,o=0,a=.707106781):(o=Math.sqrt(R),r=P/o,a=w/o):N<.01?(r=.707106781,o=.707106781,a=0):(a=Math.sqrt(N),r=k/a,o=w/a),this.set(r,o,a,t),this}let D=Math.sqrt((S-M)*(S-M)+(v-A)*(v-A)+(m-g)*(m-g));return Math.abs(D)<.001&&(D=1),this.x=(S-M)/D,this.y=(v-A)/D,this.z=(m-g)/D,this.w=Math.acos((h+y+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};um.prototype.isVector4=!0;let sn=um;class gR extends Gs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},a=new Vn(o),c=r.count;for(let f=0;f<c;f++)this.textures[f]=a.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new im(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends gR{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class cS extends Vn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=An,this.minFilter=An,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vR extends Vn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=An,this.minFilter=An,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hu=class hu{constructor(e,t,r,o,a,c,f,d,h,g,v,m,y,M,A,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,f,d,h,g,v,m,y,M,A,S)}set(e,t,r,o,a,c,f,d,h,g,v,m,y,M,A,S){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=a,_[5]=c,_[9]=f,_[13]=d,_[2]=h,_[6]=g,_[10]=v,_[14]=m,_[3]=y,_[7]=M,_[11]=A,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hu().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/vo.setFromMatrixColumn(e,0).length(),a=1/vo.setFromMatrixColumn(e,1).length(),c=1/vo.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,a=e.z,c=Math.cos(r),f=Math.sin(r),d=Math.cos(o),h=Math.sin(o),g=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const m=c*g,y=c*v,M=f*g,A=f*v;t[0]=d*g,t[4]=-d*v,t[8]=h,t[1]=y+M*h,t[5]=m-A*h,t[9]=-f*d,t[2]=A-m*h,t[6]=M+y*h,t[10]=c*d}else if(e.order==="YXZ"){const m=d*g,y=d*v,M=h*g,A=h*v;t[0]=m+A*f,t[4]=M*f-y,t[8]=c*h,t[1]=c*v,t[5]=c*g,t[9]=-f,t[2]=y*f-M,t[6]=A+m*f,t[10]=c*d}else if(e.order==="ZXY"){const m=d*g,y=d*v,M=h*g,A=h*v;t[0]=m-A*f,t[4]=-c*v,t[8]=M+y*f,t[1]=y+M*f,t[5]=c*g,t[9]=A-m*f,t[2]=-c*h,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const m=c*g,y=c*v,M=f*g,A=f*v;t[0]=d*g,t[4]=M*h-y,t[8]=m*h+A,t[1]=d*v,t[5]=A*h+m,t[9]=y*h-M,t[2]=-h,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const m=c*d,y=c*h,M=f*d,A=f*h;t[0]=d*g,t[4]=A-m*v,t[8]=M*v+y,t[1]=v,t[5]=c*g,t[9]=-f*g,t[2]=-h*g,t[6]=y*v+M,t[10]=m-A*v}else if(e.order==="XZY"){const m=c*d,y=c*h,M=f*d,A=f*h;t[0]=d*g,t[4]=-v,t[8]=h*g,t[1]=m*v+A,t[5]=c*g,t[9]=y*v-M,t[2]=M*v-y,t[6]=f*g,t[10]=A*v+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xR,e,_R)}lookAt(e,t,r){const o=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Xr.crossVectors(r,ni),Xr.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Xr.crossVectors(r,ni)),Xr.normalize(),yc.crossVectors(ni,Xr),o[0]=Xr.x,o[4]=yc.x,o[8]=ni.x,o[1]=Xr.y,o[5]=yc.y,o[9]=ni.y,o[2]=Xr.z,o[6]=yc.z,o[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],f=r[4],d=r[8],h=r[12],g=r[1],v=r[5],m=r[9],y=r[13],M=r[2],A=r[6],S=r[10],_=r[14],D=r[3],L=r[7],R=r[11],N=r[15],P=o[0],k=o[4],w=o[8],U=o[12],H=o[1],B=o[5],$=o[9],fe=o[13],de=o[2],Q=o[6],ce=o[10],q=o[14],W=o[3],ae=o[7],le=o[11],O=o[15];return a[0]=c*P+f*H+d*de+h*W,a[4]=c*k+f*B+d*Q+h*ae,a[8]=c*w+f*$+d*ce+h*le,a[12]=c*U+f*fe+d*q+h*O,a[1]=g*P+v*H+m*de+y*W,a[5]=g*k+v*B+m*Q+y*ae,a[9]=g*w+v*$+m*ce+y*le,a[13]=g*U+v*fe+m*q+y*O,a[2]=M*P+A*H+S*de+_*W,a[6]=M*k+A*B+S*Q+_*ae,a[10]=M*w+A*$+S*ce+_*le,a[14]=M*U+A*fe+S*q+_*O,a[3]=D*P+L*H+R*de+N*W,a[7]=D*k+L*B+R*Q+N*ae,a[11]=D*w+L*$+R*ce+N*le,a[15]=D*U+L*fe+R*q+N*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[12],c=e[1],f=e[5],d=e[9],h=e[13],g=e[2],v=e[6],m=e[10],y=e[14],M=e[3],A=e[7],S=e[11],_=e[15],D=d*y-h*m,L=f*y-h*v,R=f*m-d*v,N=c*y-h*g,P=c*m-d*g,k=c*v-f*g;return t*(A*D-S*L+_*R)-r*(M*D-S*N+_*P)+o*(M*L-A*N+_*k)-a*(M*R-A*P+S*k)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[1],c=e[5],f=e[9],d=e[2],h=e[6],g=e[10];return t*(c*g-f*h)-r*(a*g-f*d)+o*(a*h-c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],f=e[5],d=e[6],h=e[7],g=e[8],v=e[9],m=e[10],y=e[11],M=e[12],A=e[13],S=e[14],_=e[15],D=t*f-r*c,L=t*d-o*c,R=t*h-a*c,N=r*d-o*f,P=r*h-a*f,k=o*h-a*d,w=g*A-v*M,U=g*S-m*M,H=g*_-y*M,B=v*S-m*A,$=v*_-y*A,fe=m*_-y*S,de=D*fe-L*$+R*B+N*H-P*U+k*w;if(de===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/de;return e[0]=(f*fe-d*$+h*B)*Q,e[1]=(o*$-r*fe-a*B)*Q,e[2]=(A*k-S*P+_*N)*Q,e[3]=(m*P-v*k-y*N)*Q,e[4]=(d*H-c*fe-h*U)*Q,e[5]=(t*fe-o*H+a*U)*Q,e[6]=(S*R-M*k-_*L)*Q,e[7]=(g*k-m*R+y*L)*Q,e[8]=(c*$-f*H+h*w)*Q,e[9]=(r*H-t*$-a*w)*Q,e[10]=(M*P-A*R+_*D)*Q,e[11]=(v*R-g*P-y*D)*Q,e[12]=(f*U-c*B-d*w)*Q,e[13]=(t*B-r*U+o*w)*Q,e[14]=(A*L-M*N-S*D)*Q,e[15]=(g*N-v*L+m*D)*Q,this}scale(e){const t=this.elements,r=e.x,o=e.y,a=e.z;return t[0]*=r,t[4]*=o,t[8]*=a,t[1]*=r,t[5]*=o,t[9]*=a,t[2]*=r,t[6]*=o,t[10]*=a,t[3]*=r,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),a=1-r,c=e.x,f=e.y,d=e.z,h=a*c,g=a*f;return this.set(h*c+r,h*f-o*d,h*d+o*f,0,h*f+o*d,g*f+r,g*d-o*c,0,h*d-o*f,g*d+o*c,a*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,a,c){return this.set(1,r,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,a=t._x,c=t._y,f=t._z,d=t._w,h=a+a,g=c+c,v=f+f,m=a*h,y=a*g,M=a*v,A=c*g,S=c*v,_=f*v,D=d*h,L=d*g,R=d*v,N=r.x,P=r.y,k=r.z;return o[0]=(1-(A+_))*N,o[1]=(y+R)*N,o[2]=(M-L)*N,o[3]=0,o[4]=(y-R)*P,o[5]=(1-(m+_))*P,o[6]=(S+D)*P,o[7]=0,o[8]=(M+L)*k,o[9]=(S-D)*k,o[10]=(1-(m+A))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinantAffine();if(a===0)return r.set(1,1,1),t.identity(),this;let c=vo.set(o[0],o[1],o[2]).length();const f=vo.set(o[4],o[5],o[6]).length(),d=vo.set(o[8],o[9],o[10]).length();a<0&&(c=-c),Ai.copy(this);const h=1/c,g=1/f,v=1/d;return Ai.elements[0]*=h,Ai.elements[1]*=h,Ai.elements[2]*=h,Ai.elements[4]*=g,Ai.elements[5]*=g,Ai.elements[6]*=g,Ai.elements[8]*=v,Ai.elements[9]*=v,Ai.elements[10]*=v,t.setFromRotationMatrix(Ai),r.x=c,r.y=f,r.z=d,this}makePerspective(e,t,r,o,a,c,f=Xi,d=!1){const h=this.elements,g=2*a/(t-e),v=2*a/(r-o),m=(t+e)/(t-e),y=(r+o)/(r-o);let M,A;if(d)M=a/(c-a),A=c*a/(c-a);else if(f===Xi)M=-(c+a)/(c-a),A=-2*c*a/(c-a);else if(f===fu)M=-c/(c-a),A=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=v,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,a,c,f=Xi,d=!1){const h=this.elements,g=2/(t-e),v=2/(r-o),m=-(t+e)/(t-e),y=-(r+o)/(r-o);let M,A;if(d)M=1/(c-a),A=c/(c-a);else if(f===Xi)M=-2/(c-a),A=-(c+a)/(c-a);else if(f===fu)M=-1/(c-a),A=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=v,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=M,h[14]=A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};hu.prototype.isMatrix4=!0;let fn=hu;const vo=new ie,Ai=new fn,xR=new ie(0,0,0),_R=new ie(1,1,1),Xr=new ie,yc=new ie,ni=new ie,Mx=new fn,Ex=new Xo;class Bs{constructor(e=0,t=0,r=0,o=Bs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,a=o[0],c=o[4],f=o[8],d=o[1],h=o[5],g=o[9],v=o[2],m=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-yt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(m,y),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(f,a)):(this._x=Math.atan2(-g,y),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Mx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mx,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ex.setFromEuler(this),this.setFromQuaternion(Ex,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bs.DEFAULT_ORDER="XYZ";class uS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yR=0;const wx=new ie,xo=new Xo,ur=new fn,Sc=new ie,La=new ie,SR=new ie,MR=new Xo,Tx=new ie(1,0,0),Ax=new ie(0,1,0),bx=new ie(0,0,1),Rx={type:"added"},ER={type:"removed"},_o={type:"childadded",child:null},Id={type:"childremoved",child:null};class ri extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yR++}),this.uuid=ll(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ri.DEFAULT_UP.clone();const e=new ie,t=new Bs,r=new Xo,o=new ie(1,1,1);function a(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new fn},normalMatrix:{value:new ft}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=ri.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xo.setFromAxisAngle(e,t),this.quaternion.multiply(xo),this}rotateOnWorldAxis(e,t){return xo.setFromAxisAngle(e,t),this.quaternion.premultiply(xo),this}rotateX(e){return this.rotateOnAxis(Tx,e)}rotateY(e){return this.rotateOnAxis(Ax,e)}rotateZ(e){return this.rotateOnAxis(bx,e)}translateOnAxis(e,t){return wx.copy(e).applyQuaternion(this.quaternion),this.position.add(wx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tx,e)}translateY(e){return this.translateOnAxis(Ax,e)}translateZ(e){return this.translateOnAxis(bx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ur.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Sc.copy(e):Sc.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),La.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ur.lookAt(La,Sc,this.up):ur.lookAt(Sc,La,this.up),this.quaternion.setFromRotationMatrix(ur),o&&(ur.extractRotation(o.matrixWorld),xo.setFromRotationMatrix(ur),this.quaternion.premultiply(xo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rx),_o.child=e,this.dispatchEvent(_o),_o.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ER),Id.child=e,this.dispatchEvent(Id),Id.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ur.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ur.multiply(e.parent.matrixWorld)),e.applyMatrix4(ur),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rx),_o.child=e,this.dispatchEvent(_o),_o.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,e,SR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,MR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*r-a[8]*o,a[13]+=r-a[1]*t-a[5]*r-a[9]*o,a[14]+=o-a[2]*t-a[6]*r-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const a=this.children;for(let c=0,f=a.length;c<f;c++)a[c].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,g=d.length;h<g;h++){const v=d[h];a(e.shapes,v)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(a(e.materials,this.material[d]));o.material=f}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(a(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),h=c(e.textures),g=c(e.images),v=c(e.shapes),m=c(e.skeletons),y=c(e.animations),M=c(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),m.length>0&&(r.skeletons=m),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=o,r;function c(f){const d=[];for(const h in f){const g=f[h];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}ri.DEFAULT_UP=new ie(0,1,0);ri.DEFAULT_MATRIX_AUTO_UPDATE=!0;ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Mc extends ri{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wR={type:"move"};class Ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,a=null,c=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const A of e.hand.values()){const S=t.getJointPose(A,r),_=this._getHandJoint(h,A);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],m=g.position.distanceTo(v.position),y=.02,M=.005;h.inputState.pinching&&m>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&a!==null&&(o=a),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(wR)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Mc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const fS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yr={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function Fd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Tt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=_t.workingColorSpace){return this.r=e,this.g=t,this.b=r,_t.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=_t.workingColorSpace){if(e=fR(e,1),t=yt(t,0,1),r=yt(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,c=2*r-a;this.r=Fd(c,a,e+1/3),this.g=Fd(c,a,e),this.b=Fd(c,a,e-1/3)}return _t.colorSpaceToWorking(this,o),this}setStyle(e,t=gi){function r(a){a!==void 0&&parseFloat(a)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:lt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gi){const r=fS[e.toLowerCase()];return r!==void 0?this.setHex(r,t):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}copyLinearToSRGB(e){return this.r=Fo(e.r),this.g=Fo(e.g),this.b=Fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return _t.workingToColorSpace(Ln.copy(this),e),Math.round(yt(Ln.r*255,0,255))*65536+Math.round(yt(Ln.g*255,0,255))*256+Math.round(yt(Ln.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(Ln.copy(this),t);const r=Ln.r,o=Ln.g,a=Ln.b,c=Math.max(r,o,a),f=Math.min(r,o,a);let d,h;const g=(f+c)/2;if(f===c)d=0,h=0;else{const v=c-f;switch(h=g<=.5?v/(c+f):v/(2-c-f),c){case r:d=(o-a)/v+(o<a?6:0);break;case o:d=(a-r)/v+2;break;case a:d=(r-o)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=g,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=gi){_t.workingToColorSpace(Ln.copy(this),e);const t=Ln.r,r=Ln.g,o=Ln.b;return e!==gi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Yr),this.setHSL(Yr.h+e,Yr.s+t,Yr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Yr),e.getHSL(Ec);const r=Cd(Yr.h,Ec.h,t),o=Cd(Yr.s,Ec.s,t),a=Cd(Yr.l,Ec.l,t);return this.setHSL(r,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*o,this.g=a[1]*t+a[4]*r+a[7]*o,this.b=a[2]*t+a[5]*r+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Tt;Tt.NAMES=fS;class TR extends ri{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bs,this.environmentIntensity=1,this.environmentRotation=new Bs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const bi=new ie,fr=new ie,Od=new ie,dr=new ie,yo=new ie,So=new ie,Cx=new ie,kd=new ie,zd=new ie,Bd=new ie,Vd=new sn,Hd=new sn,Gd=new sn;class Di{constructor(e=new ie,t=new ie,r=new ie){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),bi.subVectors(e,t),o.cross(bi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,r,o,a){bi.subVectors(o,t),fr.subVectors(r,t),Od.subVectors(e,t);const c=bi.dot(bi),f=bi.dot(fr),d=bi.dot(Od),h=fr.dot(fr),g=fr.dot(Od),v=c*h-f*f;if(v===0)return a.set(0,0,0),null;const m=1/v,y=(h*d-f*g)*m,M=(c*g-f*d)*m;return a.set(1-y-M,M,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,dr)===null?!1:dr.x>=0&&dr.y>=0&&dr.x+dr.y<=1}static getInterpolation(e,t,r,o,a,c,f,d){return this.getBarycoord(e,t,r,o,dr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,dr.x),d.addScaledVector(c,dr.y),d.addScaledVector(f,dr.z),d)}static getInterpolatedAttribute(e,t,r,o,a,c){return Vd.setScalar(0),Hd.setScalar(0),Gd.setScalar(0),Vd.fromBufferAttribute(e,t),Hd.fromBufferAttribute(e,r),Gd.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Vd,a.x),c.addScaledVector(Hd,a.y),c.addScaledVector(Gd,a.z),c}static isFrontFacing(e,t,r,o){return bi.subVectors(r,t),fr.subVectors(e,t),bi.cross(fr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),bi.cross(fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,a){return Di.getInterpolation(e,this.a,this.b,this.c,t,r,o,a)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,a=this.c;let c,f;yo.subVectors(o,r),So.subVectors(a,r),kd.subVectors(e,r);const d=yo.dot(kd),h=So.dot(kd);if(d<=0&&h<=0)return t.copy(r);zd.subVectors(e,o);const g=yo.dot(zd),v=So.dot(zd);if(g>=0&&v<=g)return t.copy(o);const m=d*v-g*h;if(m<=0&&d>=0&&g<=0)return c=d/(d-g),t.copy(r).addScaledVector(yo,c);Bd.subVectors(e,a);const y=yo.dot(Bd),M=So.dot(Bd);if(M>=0&&y<=M)return t.copy(a);const A=y*h-d*M;if(A<=0&&h>=0&&M<=0)return f=h/(h-M),t.copy(r).addScaledVector(So,f);const S=g*M-y*v;if(S<=0&&v-g>=0&&y-M>=0)return Cx.subVectors(a,o),f=(v-g)/(v-g+(y-M)),t.copy(o).addScaledVector(Cx,f);const _=1/(S+A+m);return c=A*_,f=m*_,t.copy(r).addScaledVector(yo,c).addScaledVector(So,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class cl{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=a.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Ri):Ri.fromBufferAttribute(a,c),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),wc.copy(r.boundingBox)),wc.applyMatrix4(e.matrixWorld),this.union(wc)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ia),Tc.subVectors(this.max,Ia),Mo.subVectors(e.a,Ia),Eo.subVectors(e.b,Ia),wo.subVectors(e.c,Ia),qr.subVectors(Eo,Mo),$r.subVectors(wo,Eo),ws.subVectors(Mo,wo);let t=[0,-qr.z,qr.y,0,-$r.z,$r.y,0,-ws.z,ws.y,qr.z,0,-qr.x,$r.z,0,-$r.x,ws.z,0,-ws.x,-qr.y,qr.x,0,-$r.y,$r.x,0,-ws.y,ws.x,0];return!Wd(t,Mo,Eo,wo,Tc)||(t=[1,0,0,0,1,0,0,0,1],!Wd(t,Mo,Eo,wo,Tc))?!1:(Ac.crossVectors(qr,$r),t=[Ac.x,Ac.y,Ac.z],Wd(t,Mo,Eo,wo,Tc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hr=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Ri=new ie,wc=new cl,Mo=new ie,Eo=new ie,wo=new ie,qr=new ie,$r=new ie,ws=new ie,Ia=new ie,Tc=new ie,Ac=new ie,Ts=new ie;function Wd(n,e,t,r,o){for(let a=0,c=n.length-3;a<=c;a+=3){Ts.fromArray(n,a);const f=o.x*Math.abs(Ts.x)+o.y*Math.abs(Ts.y)+o.z*Math.abs(Ts.z),d=e.dot(Ts),h=t.dot(Ts),g=r.dot(Ts);if(Math.max(-Math.max(d,h,g),Math.min(d,h,g))>f)return!1}return!0}const un=new ie,bc=new Ct;let AR=0;class Zi extends Gs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:AR++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=mx,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)bc.fromBufferAttribute(this,t),bc.applyMatrix3(e),this.setXY(t,bc.x,bc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Na(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Kn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Na(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Na(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Na(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Na(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),r=Kn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),r=Kn(r,this.array),o=Kn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,a){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),r=Kn(r,this.array),o=Kn(o,this.array),a=Kn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class dS extends Zi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class hS extends Zi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Sr extends Zi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const bR=new cl,Ua=new ie,jd=new ie;class rm{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):bR.setFromPoints(e).getCenter(r);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ua.subVectors(e,this.center);const t=Ua.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Ua,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ua.copy(e.center).add(jd)),this.expandByPoint(Ua.copy(e.center).sub(jd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let RR=0;const pi=new fn,Xd=new ri,To=new ie,ii=new cl,Fa=new cl,yn=new ie;class Tr extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RR++}),this.uuid=ll(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(aR(e)?hS:dS)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new ft().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,r){return pi.makeTranslation(e,t,r),this.applyMatrix4(pi),this}scale(e,t,r){return pi.makeScale(e,t,r),this.applyMatrix4(pi),this}lookAt(e){return Xd.lookAt(e),Xd.updateMatrix(),this.applyMatrix4(Xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(To).negate(),this.translate(To.x,To.y,To.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Sr(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ii.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rm);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const f=t[a];Fa.setFromBufferAttribute(f),this.morphTargetsRelative?(yn.addVectors(ii.min,Fa.min),ii.expandByPoint(yn),yn.addVectors(ii.max,Fa.max),ii.expandByPoint(yn)):(ii.expandByPoint(Fa.min),ii.expandByPoint(Fa.max))}ii.getCenter(r);let o=0;for(let a=0,c=e.count;a<c;a++)yn.fromBufferAttribute(e,a),o=Math.max(o,r.distanceToSquared(yn));if(t)for(let a=0,c=t.length;a<c;a++){const f=t[a],d=this.morphTargetsRelative;for(let h=0,g=f.count;h<g;h++)yn.fromBufferAttribute(f,h),d&&(To.fromBufferAttribute(e,h),yn.add(To)),o=Math.max(o,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,a=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==r.count)&&(c=new Zi(new Float32Array(4*r.count),4),this.setAttribute("tangent",c));const f=[],d=[];for(let w=0;w<r.count;w++)f[w]=new ie,d[w]=new ie;const h=new ie,g=new ie,v=new ie,m=new Ct,y=new Ct,M=new Ct,A=new ie,S=new ie;function _(w,U,H){h.fromBufferAttribute(r,w),g.fromBufferAttribute(r,U),v.fromBufferAttribute(r,H),m.fromBufferAttribute(a,w),y.fromBufferAttribute(a,U),M.fromBufferAttribute(a,H),g.sub(h),v.sub(h),y.sub(m),M.sub(m);const B=1/(y.x*M.y-M.x*y.y);isFinite(B)&&(A.copy(g).multiplyScalar(M.y).addScaledVector(v,-y.y).multiplyScalar(B),S.copy(v).multiplyScalar(y.x).addScaledVector(g,-M.x).multiplyScalar(B),f[w].add(A),f[U].add(A),f[H].add(A),d[w].add(S),d[U].add(S),d[H].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let w=0,U=D.length;w<U;++w){const H=D[w],B=H.start,$=H.count;for(let fe=B,de=B+$;fe<de;fe+=3)_(e.getX(fe+0),e.getX(fe+1),e.getX(fe+2))}const L=new ie,R=new ie,N=new ie,P=new ie;function k(w){N.fromBufferAttribute(o,w),P.copy(N);const U=f[w];L.copy(U),L.sub(N.multiplyScalar(N.dot(U))).normalize(),R.crossVectors(P,U);const B=R.dot(d[w])<0?-1:1;c.setXYZW(w,L.x,L.y,L.z,B)}for(let w=0,U=D.length;w<U;++w){const H=D[w],B=H.start,$=H.count;for(let fe=B,de=B+$;fe<de;fe+=3)k(e.getX(fe+0)),k(e.getX(fe+1)),k(e.getX(fe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Zi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let m=0,y=r.count;m<y;m++)r.setXYZ(m,0,0,0);const o=new ie,a=new ie,c=new ie,f=new ie,d=new ie,h=new ie,g=new ie,v=new ie;if(e)for(let m=0,y=e.count;m<y;m+=3){const M=e.getX(m+0),A=e.getX(m+1),S=e.getX(m+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,A),c.fromBufferAttribute(t,S),g.subVectors(c,a),v.subVectors(o,a),g.cross(v),f.fromBufferAttribute(r,M),d.fromBufferAttribute(r,A),h.fromBufferAttribute(r,S),f.add(g),d.add(g),h.add(g),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let m=0,y=t.count;m<y;m+=3)o.fromBufferAttribute(t,m+0),a.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),g.subVectors(c,a),v.subVectors(o,a),g.cross(v),r.setXYZ(m+0,g.x,g.y,g.z),r.setXYZ(m+1,g.x,g.y,g.z),r.setXYZ(m+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(f,d){const h=f.array,g=f.itemSize,v=f.normalized,m=new h.constructor(d.length*g);let y=0,M=0;for(let A=0,S=d.length;A<S;A++){f.isInterleavedBufferAttribute?y=d[A]*f.data.stride+f.offset:y=d[A]*g;for(let _=0;_<g;_++)m[M++]=h[y++]}return new Zi(m,g,v)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tr,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],h=e(d,r);t.setAttribute(f,h)}const a=this.morphAttributes;for(const f in a){const d=[],h=a[f];for(let g=0,v=h.length;g<v;g++){const m=h[g],y=e(m,r);d.push(y)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const h=c[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],g=[];for(let v=0,m=h.length;v<m;v++){const y=h[v];g.push(y.toJSON(e.data))}g.length>0&&(o[d]=g,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(t))}const a=e.morphAttributes;for(const h in a){const g=[],v=a[h];for(let m=0,y=v.length;m<y;m++)g.push(v[m].clone(t));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,g=c.length;h<g;h++){const v=c[h];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let CR=0;class wu extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CR++}),this.uuid=ll(),this.name="",this.type="Material",this.blending=Io,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yh,this.blendDst=Sh,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=px,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mo,this.stencilZFail=mo,this.stencilZPass=mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){lt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){lt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Io&&(r.blending=this.blending),this.side!==is&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==yh&&(r.blendSrc=this.blendSrc),this.blendDst!==Sh&&(r.blendDst=this.blendDst),this.blendEquation!==Ds&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==zo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==px&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==mo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==mo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(a){const c=[];for(const f in a){const d=a[f];delete d.metadata,c.push(d)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(r.textures=a),c.length>0&&(r.images=c)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Ct().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ct().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let a=0;a!==o;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const pr=new ie,Yd=new ie,Rc=new ie,Kr=new ie,qd=new ie,Cc=new ie,$d=new ie;class PR{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pr.copy(this.origin).addScaledVector(this.direction,t),pr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Yd.copy(e).add(t).multiplyScalar(.5),Rc.copy(t).sub(e).normalize(),Kr.copy(this.origin).sub(Yd);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Rc),f=Kr.dot(this.direction),d=-Kr.dot(Rc),h=Kr.lengthSq(),g=Math.abs(1-c*c);let v,m,y,M;if(g>0)if(v=c*d-f,m=c*f-d,M=a*g,v>=0)if(m>=-M)if(m<=M){const A=1/g;v*=A,m*=A,y=v*(v+c*m+2*f)+m*(c*v+m+2*d)+h}else m=a,v=Math.max(0,-(c*m+f)),y=-v*v+m*(m+2*d)+h;else m=-a,v=Math.max(0,-(c*m+f)),y=-v*v+m*(m+2*d)+h;else m<=-M?(v=Math.max(0,-(-c*a+f)),m=v>0?-a:Math.min(Math.max(-a,-d),a),y=-v*v+m*(m+2*d)+h):m<=M?(v=0,m=Math.min(Math.max(-a,-d),a),y=m*(m+2*d)+h):(v=Math.max(0,-(c*a+f)),m=v>0?a:Math.min(Math.max(-a,-d),a),y=-v*v+m*(m+2*d)+h);else m=c>0?-a:a,v=Math.max(0,-(c*m+f)),y=-v*v+m*(m+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Yd).addScaledVector(Rc,m),y}intersectSphere(e,t){pr.subVectors(e.center,this.origin);const r=pr.dot(this.direction),o=pr.dot(pr)-r*r,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),f=r-c,d=r+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,a,c,f,d;const h=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,m=this.origin;return h>=0?(r=(e.min.x-m.x)*h,o=(e.max.x-m.x)*h):(r=(e.max.x-m.x)*h,o=(e.min.x-m.x)*h),g>=0?(a=(e.min.y-m.y)*g,c=(e.max.y-m.y)*g):(a=(e.max.y-m.y)*g,c=(e.min.y-m.y)*g),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),v>=0?(f=(e.min.z-m.z)*v,d=(e.max.z-m.z)*v):(f=(e.max.z-m.z)*v,d=(e.min.z-m.z)*v),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,pr)!==null}intersectTriangle(e,t,r,o,a){qd.subVectors(t,e),Cc.subVectors(r,e),$d.crossVectors(qd,Cc);let c=this.direction.dot($d),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Kr.subVectors(this.origin,e);const d=f*this.direction.dot(Cc.crossVectors(Kr,Cc));if(d<0)return null;const h=f*this.direction.dot(qd.cross(Kr));if(h<0||d+h>c)return null;const g=-f*Kr.dot($d);return g<0?null:this.at(g/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pS extends wu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bs,this.combine=Xy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Px=new fn,As=new PR,Pc=new rm,Dx=new ie,Dc=new ie,Nc=new ie,Lc=new ie,Kd=new ie,Ic=new ie,Nx=new ie,Uc=new ie;class er extends ri{constructor(e=new Tr,t=new pS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const f=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,a=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(a&&f){Ic.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const g=f[d],v=a[d];g!==0&&(Kd.fromBufferAttribute(v,e),c?Ic.addScaledVector(Kd,g):Ic.addScaledVector(Kd.sub(t),g))}t.add(Ic)}return t}raycast(e,t){const r=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Pc.copy(r.boundingSphere),Pc.applyMatrix4(a),As.copy(e.ray).recast(e.near),!(Pc.containsPoint(As.origin)===!1&&(As.intersectSphere(Pc,Dx)===null||As.origin.distanceToSquared(Dx)>(e.far-e.near)**2))&&(Px.copy(a).invert(),As.copy(e.ray).applyMatrix4(Px),!(r.boundingBox!==null&&As.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,r){let o;const a=this.geometry,c=this.material,f=a.index,d=a.attributes.position,h=a.attributes.uv,g=a.attributes.uv1,v=a.attributes.normal,m=a.groups,y=a.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,A=m.length;M<A;M++){const S=m[M],_=c[S.materialIndex],D=Math.max(S.start,y.start),L=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let R=D,N=L;R<N;R+=3){const P=f.getX(R),k=f.getX(R+1),w=f.getX(R+2);o=Fc(this,_,e,r,h,g,v,P,k,w),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),A=Math.min(f.count,y.start+y.count);for(let S=M,_=A;S<_;S+=3){const D=f.getX(S),L=f.getX(S+1),R=f.getX(S+2);o=Fc(this,c,e,r,h,g,v,D,L,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let M=0,A=m.length;M<A;M++){const S=m[M],_=c[S.materialIndex],D=Math.max(S.start,y.start),L=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let R=D,N=L;R<N;R+=3){const P=R,k=R+1,w=R+2;o=Fc(this,_,e,r,h,g,v,P,k,w),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let S=M,_=A;S<_;S+=3){const D=S,L=S+1,R=S+2;o=Fc(this,c,e,r,h,g,v,D,L,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function DR(n,e,t,r,o,a,c,f){let d;if(e.side===Zn?d=r.intersectTriangle(c,a,o,!0,f):d=r.intersectTriangle(o,a,c,e.side===is,f),d===null)return null;Uc.copy(f),Uc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Uc);return h<t.near||h>t.far?null:{distance:h,point:Uc.clone(),object:n}}function Fc(n,e,t,r,o,a,c,f,d,h){n.getVertexPosition(f,Dc),n.getVertexPosition(d,Nc),n.getVertexPosition(h,Lc);const g=DR(n,e,t,r,Dc,Nc,Lc,Nx);if(g){const v=new ie;Di.getBarycoord(Nx,Dc,Nc,Lc,v),o&&(g.uv=Di.getInterpolatedAttribute(o,f,d,h,v,new Ct)),a&&(g.uv1=Di.getInterpolatedAttribute(a,f,d,h,v,new Ct)),c&&(g.normal=Di.getInterpolatedAttribute(c,f,d,h,v,new ie),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const m={a:f,b:d,c:h,normal:new ie,materialIndex:0};Di.getNormal(Dc,Nc,Lc,m.normal),g.face=m,g.barycoord=v}return g}class NR extends Vn{constructor(e=null,t=1,r=1,o,a,c,f,d,h=An,g=An,v,m){super(null,c,f,d,h,g,o,a,v,m),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zd=new ie,LR=new ie,IR=new ft;class Ps{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Zd.subVectors(r,t).cross(LR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Zd),a=this.normal.dot(o);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||IR.getNormalMatrix(e),o=this.coplanarPoint(Zd).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bs=new rm,UR=new Ct(.5,.5),Oc=new ie;class mS{constructor(e=new Ps,t=new Ps,r=new Ps,o=new Ps,a=new Ps,c=new Ps){this.planes=[e,t,r,o,a,c]}set(e,t,r,o,a,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(a),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Xi,r=!1){const o=this.planes,a=e.elements,c=a[0],f=a[1],d=a[2],h=a[3],g=a[4],v=a[5],m=a[6],y=a[7],M=a[8],A=a[9],S=a[10],_=a[11],D=a[12],L=a[13],R=a[14],N=a[15];if(o[0].setComponents(h-c,y-g,_-M,N-D).normalize(),o[1].setComponents(h+c,y+g,_+M,N+D).normalize(),o[2].setComponents(h+f,y+v,_+A,N+L).normalize(),o[3].setComponents(h-f,y-v,_-A,N-L).normalize(),r)o[4].setComponents(d,m,S,R).normalize(),o[5].setComponents(h-d,y-m,_-S,N-R).normalize();else if(o[4].setComponents(h-d,y-m,_-S,N-R).normalize(),t===Xi)o[5].setComponents(h+d,y+m,_+S,N+R).normalize();else if(t===fu)o[5].setComponents(d,m,S,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){bs.center.set(0,0,0);const t=UR.distanceTo(e.center);return bs.radius=.7071067811865476+t,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Oc.x=o.normal.x>0?e.max.x:e.min.x,Oc.y=o.normal.y>0?e.max.y:e.min.y,Oc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gS extends Vn{constructor(e=[],t=ks,r,o,a,c,f,d,h,g){super(e,t,r,o,a,c,f,d,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vo extends Vn{constructor(e,t,r=Ji,o,a,c,f=An,d=An,h,g=wr,v=1){if(g!==wr&&g!==Us)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:v};super(m,o,a,c,f,d,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new im(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class FR extends Vo{constructor(e,t=Ji,r=ks,o,a,c=An,f=An,d,h=wr){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,t,r,o,a,c,f,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class vS extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ul extends Tr{constructor(e=1,t=1,r=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:a,depthSegments:c};const f=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const d=[],h=[],g=[],v=[];let m=0,y=0;M("z","y","x",-1,-1,r,t,e,c,a,0),M("z","y","x",1,-1,r,t,-e,c,a,1),M("x","z","y",1,1,e,r,t,o,c,2),M("x","z","y",1,-1,e,r,-t,o,c,3),M("x","y","z",1,-1,e,t,r,o,a,4),M("x","y","z",-1,-1,e,t,-r,o,a,5),this.setIndex(d),this.setAttribute("position",new Sr(h,3)),this.setAttribute("normal",new Sr(g,3)),this.setAttribute("uv",new Sr(v,2));function M(A,S,_,D,L,R,N,P,k,w,U){const H=R/k,B=N/w,$=R/2,fe=N/2,de=P/2,Q=k+1,ce=w+1;let q=0,W=0;const ae=new ie;for(let le=0;le<ce;le++){const O=le*B-fe;for(let K=0;K<Q;K++){const Ie=K*H-$;ae[A]=Ie*D,ae[S]=O*L,ae[_]=de,h.push(ae.x,ae.y,ae.z),ae[A]=0,ae[S]=0,ae[_]=P>0?1:-1,g.push(ae.x,ae.y,ae.z),v.push(K/k),v.push(1-le/w),q+=1}}for(let le=0;le<w;le++)for(let O=0;O<k;O++){const K=m+O+Q*le,Ie=m+O+Q*(le+1),$e=m+(O+1)+Q*(le+1),Ve=m+(O+1)+Q*le;d.push(K,Ie,Ve),d.push(Ie,$e,Ve),W+=6}f.addGroup(y,W,U),y+=W,m+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class fl extends Tr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const a=e/2,c=t/2,f=Math.floor(r),d=Math.floor(o),h=f+1,g=d+1,v=e/f,m=t/d,y=[],M=[],A=[],S=[];for(let _=0;_<g;_++){const D=_*m-c;for(let L=0;L<h;L++){const R=L*v-a;M.push(R,-D,0),A.push(0,0,1),S.push(L/f),S.push(1-_/d)}}for(let _=0;_<d;_++)for(let D=0;D<f;D++){const L=D+h*_,R=D+h*(_+1),N=D+1+h*(_+1),P=D+1+h*_;y.push(L,R,P),y.push(R,N,P)}this.setIndex(y),this.setAttribute("position",new Sr(M,3)),this.setAttribute("normal",new Sr(A,3)),this.setAttribute("uv",new Sr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ho(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];if(Lx(o))o.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Lx(o[0])){const a=[];for(let c=0,f=o.length;c<f;c++)a[c]=o[c].clone();e[t][r]=a}else e[t][r]=o.slice();else e[t][r]=o}}return e}function zn(n){const e={};for(let t=0;t<n.length;t++){const r=Ho(n[t]);for(const o in r)e[o]=r[o]}return e}function Lx(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function OR(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xS(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const kR={clone:Ho,merge:zn};var zR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends wu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zR,this.fragmentShader=BR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ho(e.uniforms),this.uniformsGroups=OR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Tt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Ct().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ie().fromArray(o.value);break;case"v4":this.uniforms[r].value=new sn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ft().fromArray(o.value);break;case"m4":this.uniforms[r].value=new fn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class VR extends Ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class HR extends wu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GR extends wu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kc=new ie,zc=new Xo,Vi=new ie;class _S extends ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(kc,zc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,zc,Vi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(kc,zc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,zc,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Zr=new ie,Ix=new Ct,Ux=new Ct;class Pi extends _S{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ap*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ap*2*Math.atan(Math.tan(Rd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z),Zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z)}getViewSize(e,t){return this.getViewBounds(e,Ix,Ux),t.subVectors(Ux,Ix)}setViewOffset(e,t,r,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rd*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;a+=c.offsetX*o/d,t-=c.offsetY*r/h,o*=c.width/d,r*=c.height/h}const f=this.filmOffset;f!==0&&(a+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class sm extends _S{constructor(e=-1,t=1,r=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=r-e,c=r+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,f-=g*this.view.offsetY,d=f-g*this.view.height}this.projectionMatrix.makeOrthographic(a,c,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ao=-90,bo=1;class WR extends ri{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Pi(Ao,bo,e,t);o.layers=this.layers,this.add(o);const a=new Pi(Ao,bo,e,t);a.layers=this.layers,this.add(a);const c=new Pi(Ao,bo,e,t);c.layers=this.layers,this.add(c);const f=new Pi(Ao,bo,e,t);f.layers=this.layers,this.add(f);const d=new Pi(Ao,bo,e,t);d.layers=this.layers,this.add(d);const h=new Pi(Ao,bo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,a,c,f,d]=t;for(const h of t)this.remove(h);if(e===Xi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===fu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,f,d,h,g]=this.children,v=e.getRenderTarget(),m=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(r,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(v,m,y),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class jR extends Pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const fm=class fm{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const a=this.elements;return a[0]=e,a[2]=t,a[1]=r,a[3]=o,this}};fm.prototype.isMatrix2=!0;let Fx=fm;function Ox(n,e,t,r){const o=XR(r);switch(t){case sS:return n*e;case aS:return n*e/o.components*o.byteLength;case Qp:return n*e/o.components*o.byteLength;case zs:return n*e*2/o.components*o.byteLength;case Jp:return n*e*2/o.components*o.byteLength;case oS:return n*e*3/o.components*o.byteLength;case Ni:return n*e*4/o.components*o.byteLength;case em:return n*e*4/o.components*o.byteLength;case qc:case $c:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Kc:case Zc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nh:case Ih:return Math.max(n,16)*Math.max(e,8)/4;case Dh:case Lh:return Math.max(n,8)*Math.max(e,8)/2;case Uh:case Fh:case kh:case zh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Oh:case au:case Bh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case jh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case qh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case $h:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Qh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Jh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ep:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case tp:case np:case ip:return Math.ceil(n/4)*Math.ceil(e/4)*16;case rp:case sp:return Math.ceil(n/4)*Math.ceil(e/4)*8;case lu:case op:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function XR(n){switch(n){case vi:case tS:return{byteLength:1,components:1};case tl:case nS:case Er:return{byteLength:2,components:1};case Kp:case Zp:return{byteLength:2,components:4};case Ji:case $p:case ji:return{byteLength:4,components:1};case iS:case rS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qp}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yS(){let n=null,e=!1,t=null,r=null;function o(a,c){t(a,c),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function YR(n){const e=new WeakMap;function t(f,d){const h=f.array,g=f.usage,v=h.byteLength,m=n.createBuffer();n.bindBuffer(d,m),n.bufferData(d,h,g),f.onUploadCallback();let y;if(h instanceof Float32Array)y=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=n.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?y=n.HALF_FLOAT:y=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=n.SHORT;else if(h instanceof Uint32Array)y=n.UNSIGNED_INT;else if(h instanceof Int32Array)y=n.INT;else if(h instanceof Int8Array)y=n.BYTE;else if(h instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,d,h){const g=d.array,v=d.updateRanges;if(n.bindBuffer(h,f),v.length===0)n.bufferSubData(h,0,g);else{v.sort((y,M)=>y.start-M.start);let m=0;for(let y=1;y<v.length;y++){const M=v[m],A=v[y];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++m,v[m]=A)}v.length=m+1;for(let y=0,M=v.length;y<M;y++){const A=v[y];n.bufferSubData(h,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function a(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(n.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,d),h.version=f.version}}return{get:o,remove:a,update:c}}var qR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$R=`#ifdef USE_ALPHAHASH
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
#endif`,KR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eC=`#ifdef USE_AOMAP
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
#endif`,tC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nC=`#ifdef USE_BATCHING
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
#endif`,iC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,aC=`#ifdef USE_IRIDESCENCE
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
#endif`,lC=`#ifdef USE_BUMPMAP
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
#endif`,cC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vC=`#define PI 3.141592653589793
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
} // validated`,xC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_C=`vec3 transformedNormal = objectNormal;
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
#endif`,yC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,MC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wC="gl_FragColor = linearToOutputTexel( gl_FragColor );",TC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AC=`#ifdef USE_ENVMAP
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
#endif`,bC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,RC=`#ifdef USE_ENVMAP
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
#endif`,CC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PC=`#ifdef USE_ENVMAP
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
#endif`,DC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UC=`#ifdef USE_GRADIENTMAP
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
}`,FC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zC=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,BC=`#ifdef USE_ENVMAP
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
#endif`,VC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jC=`PhysicalMaterial material;
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
#endif`,XC=`uniform sampler2D dfgLUT;
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
}`,YC=`
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
#endif`,qC=`#if defined( RE_IndirectDiffuse )
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
#endif`,$C=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KC=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ZC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rP=`#if defined( USE_POINTS_UV )
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
#endif`,sP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uP=`#ifdef USE_MORPHTARGETS
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
#endif`,fP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hP=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vP=`#ifdef USE_NORMALMAP
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
#endif`,xP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_P=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,MP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,EP=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,DP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,LP=`float getShadowMask() {
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
}`,IP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UP=`#ifdef USE_SKINNING
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
#endif`,FP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,OP=`#ifdef USE_SKINNING
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
#endif`,kP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VP=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,HP=`#ifdef USE_TRANSMISSION
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
#endif`,GP=`#ifdef USE_TRANSMISSION
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
#endif`,WP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$P=`uniform sampler2D t2D;
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
}`,KP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZP=`#ifdef ENVMAP_TYPE_CUBE
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
}`,QP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e3=`#include <common>
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
}`,t3=`#if DEPTH_PACKING == 3200
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
}`,n3=`#define DISTANCE
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
}`,i3=`#define DISTANCE
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
}`,r3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o3=`uniform float scale;
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
}`,a3=`uniform vec3 diffuse;
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
}`,l3=`#include <common>
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
}`,c3=`uniform vec3 diffuse;
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
}`,u3=`#define LAMBERT
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
}`,f3=`#define LAMBERT
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
}`,d3=`#define MATCAP
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
}`,h3=`#define MATCAP
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
}`,p3=`#define NORMAL
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
}`,m3=`#define NORMAL
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
}`,g3=`#define PHONG
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
}`,v3=`#define PHONG
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
}`,x3=`#define STANDARD
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
}`,_3=`#define STANDARD
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
}`,y3=`#define TOON
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
}`,S3=`#define TOON
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
}`,M3=`uniform float size;
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
}`,E3=`uniform vec3 diffuse;
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
}`,w3=`#include <common>
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
}`,T3=`uniform vec3 color;
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
}`,A3=`uniform float rotation;
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
}`,b3=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:qR,alphahash_pars_fragment:$R,alphamap_fragment:KR,alphamap_pars_fragment:ZR,alphatest_fragment:QR,alphatest_pars_fragment:JR,aomap_fragment:eC,aomap_pars_fragment:tC,batching_pars_vertex:nC,batching_vertex:iC,begin_vertex:rC,beginnormal_vertex:sC,bsdfs:oC,iridescence_fragment:aC,bumpmap_pars_fragment:lC,clipping_planes_fragment:cC,clipping_planes_pars_fragment:uC,clipping_planes_pars_vertex:fC,clipping_planes_vertex:dC,color_fragment:hC,color_pars_fragment:pC,color_pars_vertex:mC,color_vertex:gC,common:vC,cube_uv_reflection_fragment:xC,defaultnormal_vertex:_C,displacementmap_pars_vertex:yC,displacementmap_vertex:SC,emissivemap_fragment:MC,emissivemap_pars_fragment:EC,colorspace_fragment:wC,colorspace_pars_fragment:TC,envmap_fragment:AC,envmap_common_pars_fragment:bC,envmap_pars_fragment:RC,envmap_pars_vertex:CC,envmap_physical_pars_fragment:BC,envmap_vertex:PC,fog_vertex:DC,fog_pars_vertex:NC,fog_fragment:LC,fog_pars_fragment:IC,gradientmap_pars_fragment:UC,lightmap_pars_fragment:FC,lights_lambert_fragment:OC,lights_lambert_pars_fragment:kC,lights_pars_begin:zC,lights_toon_fragment:VC,lights_toon_pars_fragment:HC,lights_phong_fragment:GC,lights_phong_pars_fragment:WC,lights_physical_fragment:jC,lights_physical_pars_fragment:XC,lights_fragment_begin:YC,lights_fragment_maps:qC,lights_fragment_end:$C,lightprobes_pars_fragment:KC,logdepthbuf_fragment:ZC,logdepthbuf_pars_fragment:QC,logdepthbuf_pars_vertex:JC,logdepthbuf_vertex:eP,map_fragment:tP,map_pars_fragment:nP,map_particle_fragment:iP,map_particle_pars_fragment:rP,metalnessmap_fragment:sP,metalnessmap_pars_fragment:oP,morphinstance_vertex:aP,morphcolor_vertex:lP,morphnormal_vertex:cP,morphtarget_pars_vertex:uP,morphtarget_vertex:fP,normal_fragment_begin:dP,normal_fragment_maps:hP,normal_pars_fragment:pP,normal_pars_vertex:mP,normal_vertex:gP,normalmap_pars_fragment:vP,clearcoat_normal_fragment_begin:xP,clearcoat_normal_fragment_maps:_P,clearcoat_pars_fragment:yP,iridescence_pars_fragment:SP,opaque_fragment:MP,packing:EP,premultiplied_alpha_fragment:wP,project_vertex:TP,dithering_fragment:AP,dithering_pars_fragment:bP,roughnessmap_fragment:RP,roughnessmap_pars_fragment:CP,shadowmap_pars_fragment:PP,shadowmap_pars_vertex:DP,shadowmap_vertex:NP,shadowmask_pars_fragment:LP,skinbase_vertex:IP,skinning_pars_vertex:UP,skinning_vertex:FP,skinnormal_vertex:OP,specularmap_fragment:kP,specularmap_pars_fragment:zP,tonemapping_fragment:BP,tonemapping_pars_fragment:VP,transmission_fragment:HP,transmission_pars_fragment:GP,uv_pars_fragment:WP,uv_pars_vertex:jP,uv_vertex:XP,worldpos_vertex:YP,background_vert:qP,background_frag:$P,backgroundCube_vert:KP,backgroundCube_frag:ZP,cube_vert:QP,cube_frag:JP,depth_vert:e3,depth_frag:t3,distance_vert:n3,distance_frag:i3,equirect_vert:r3,equirect_frag:s3,linedashed_vert:o3,linedashed_frag:a3,meshbasic_vert:l3,meshbasic_frag:c3,meshlambert_vert:u3,meshlambert_frag:f3,meshmatcap_vert:d3,meshmatcap_frag:h3,meshnormal_vert:p3,meshnormal_frag:m3,meshphong_vert:g3,meshphong_frag:v3,meshphysical_vert:x3,meshphysical_frag:_3,meshtoon_vert:y3,meshtoon_frag:S3,points_vert:M3,points_frag:E3,shadow_vert:w3,shadow_frag:T3,sprite_vert:A3,sprite_frag:b3},Le={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Gi={basic:{uniforms:zn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:zn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Tt(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:zn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:zn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:zn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Tt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:zn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:zn([Le.points,Le.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:zn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:zn([Le.common,Le.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:zn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:zn([Le.sprite,Le.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:zn([Le.common,Le.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:zn([Le.lights,Le.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Gi.physical={uniforms:zn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Bc={r:0,b:0,g:0},R3=new fn,SS=new ft;SS.set(-1,0,0,0,1,0,0,0,1);function C3(n,e,t,r,o,a){const c=new Tt(0);let f=o===!0?0:1,d,h,g=null,v=0,m=null;function y(D){let L=D.isScene===!0?D.background:null;if(L&&L.isTexture){const R=D.backgroundBlurriness>0;L=e.get(L,R)}return L}function M(D){let L=!1;const R=y(D);R===null?S(c,f):R&&R.isColor&&(S(R,1),L=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function A(D,L){const R=y(L);R&&(R.isCubeTexture||R.mapping===Eu)?(h===void 0&&(h=new er(new ul(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:Ho(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,P,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=R,h.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(R3.makeRotationFromEuler(L.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(SS),h.material.toneMapped=_t.getTransfer(R.colorSpace)!==Ft,(g!==R||v!==R.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,g=R,v=R.version,m=n.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(d===void 0&&(d=new er(new fl(2,2),new Ui({name:"BackgroundMaterial",uniforms:Ho(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=R,d.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,d.material.toneMapped=_t.getTransfer(R.colorSpace)!==Ft,R.matrixAutoUpdate===!0&&R.updateMatrix(),d.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||v!==R.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,g=R,v=R.version,m=n.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null))}function S(D,L){D.getRGB(Bc,xS(n)),t.buffers.color.setClear(Bc.r,Bc.g,Bc.b,L,a)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(D,L=1){c.set(D),f=L,S(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(D){f=D,S(c,f)},render:M,addToRenderList:A,dispose:_}}function P3(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=m(null);let a=o,c=!1;function f(B,$,fe,de,Q){let ce=!1;const q=v(B,de,fe,$);a!==q&&(a=q,h(a.object)),ce=y(B,de,fe,Q),ce&&M(B,de,fe,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(ce||c)&&(c=!1,R(B,$,fe,de),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function d(){return n.createVertexArray()}function h(B){return n.bindVertexArray(B)}function g(B){return n.deleteVertexArray(B)}function v(B,$,fe,de){const Q=de.wireframe===!0;let ce=r[$.id];ce===void 0&&(ce={},r[$.id]=ce);const q=B.isInstancedMesh===!0?B.id:0;let W=ce[q];W===void 0&&(W={},ce[q]=W);let ae=W[fe.id];ae===void 0&&(ae={},W[fe.id]=ae);let le=ae[Q];return le===void 0&&(le=m(d()),ae[Q]=le),le}function m(B){const $=[],fe=[],de=[];for(let Q=0;Q<t;Q++)$[Q]=0,fe[Q]=0,de[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:fe,attributeDivisors:de,object:B,attributes:{},index:null}}function y(B,$,fe,de){const Q=a.attributes,ce=$.attributes;let q=0;const W=fe.getAttributes();for(const ae in W)if(W[ae].location>=0){const O=Q[ae];let K=ce[ae];if(K===void 0&&(ae==="instanceMatrix"&&B.instanceMatrix&&(K=B.instanceMatrix),ae==="instanceColor"&&B.instanceColor&&(K=B.instanceColor)),O===void 0||O.attribute!==K||K&&O.data!==K.data)return!0;q++}return a.attributesNum!==q||a.index!==de}function M(B,$,fe,de){const Q={},ce=$.attributes;let q=0;const W=fe.getAttributes();for(const ae in W)if(W[ae].location>=0){let O=ce[ae];O===void 0&&(ae==="instanceMatrix"&&B.instanceMatrix&&(O=B.instanceMatrix),ae==="instanceColor"&&B.instanceColor&&(O=B.instanceColor));const K={};K.attribute=O,O&&O.data&&(K.data=O.data),Q[ae]=K,q++}a.attributes=Q,a.attributesNum=q,a.index=de}function A(){const B=a.newAttributes;for(let $=0,fe=B.length;$<fe;$++)B[$]=0}function S(B){_(B,0)}function _(B,$){const fe=a.newAttributes,de=a.enabledAttributes,Q=a.attributeDivisors;fe[B]=1,de[B]===0&&(n.enableVertexAttribArray(B),de[B]=1),Q[B]!==$&&(n.vertexAttribDivisor(B,$),Q[B]=$)}function D(){const B=a.newAttributes,$=a.enabledAttributes;for(let fe=0,de=$.length;fe<de;fe++)$[fe]!==B[fe]&&(n.disableVertexAttribArray(fe),$[fe]=0)}function L(B,$,fe,de,Q,ce,q){q===!0?n.vertexAttribIPointer(B,$,fe,Q,ce):n.vertexAttribPointer(B,$,fe,de,Q,ce)}function R(B,$,fe,de){A();const Q=de.attributes,ce=fe.getAttributes(),q=$.defaultAttributeValues;for(const W in ce){const ae=ce[W];if(ae.location>=0){let le=Q[W];if(le===void 0&&(W==="instanceMatrix"&&B.instanceMatrix&&(le=B.instanceMatrix),W==="instanceColor"&&B.instanceColor&&(le=B.instanceColor)),le!==void 0){const O=le.normalized,K=le.itemSize,Ie=e.get(le);if(Ie===void 0)continue;const $e=Ie.buffer,Ve=Ie.type,re=Ie.bytesPerElement,xe=Ve===n.INT||Ve===n.UNSIGNED_INT||le.gpuType===$p;if(le.isInterleavedBufferAttribute){const me=le.data,Ue=me.stride,et=le.offset;if(me.isInstancedInterleavedBuffer){for(let tt=0;tt<ae.locationSize;tt++)_(ae.location+tt,me.meshPerAttribute);B.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let tt=0;tt<ae.locationSize;tt++)S(ae.location+tt);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let tt=0;tt<ae.locationSize;tt++)L(ae.location+tt,K/ae.locationSize,Ve,O,Ue*re,(et+K/ae.locationSize*tt)*re,xe)}else{if(le.isInstancedBufferAttribute){for(let me=0;me<ae.locationSize;me++)_(ae.location+me,le.meshPerAttribute);B.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let me=0;me<ae.locationSize;me++)S(ae.location+me);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let me=0;me<ae.locationSize;me++)L(ae.location+me,K/ae.locationSize,Ve,O,K*re,K/ae.locationSize*me*re,xe)}}else if(q!==void 0){const O=q[W];if(O!==void 0)switch(O.length){case 2:n.vertexAttrib2fv(ae.location,O);break;case 3:n.vertexAttrib3fv(ae.location,O);break;case 4:n.vertexAttrib4fv(ae.location,O);break;default:n.vertexAttrib1fv(ae.location,O)}}}}D()}function N(){U();for(const B in r){const $=r[B];for(const fe in $){const de=$[fe];for(const Q in de){const ce=de[Q];for(const q in ce)g(ce[q].object),delete ce[q];delete de[Q]}}delete r[B]}}function P(B){if(r[B.id]===void 0)return;const $=r[B.id];for(const fe in $){const de=$[fe];for(const Q in de){const ce=de[Q];for(const q in ce)g(ce[q].object),delete ce[q];delete de[Q]}}delete r[B.id]}function k(B){for(const $ in r){const fe=r[$];for(const de in fe){const Q=fe[de];if(Q[B.id]===void 0)continue;const ce=Q[B.id];for(const q in ce)g(ce[q].object),delete ce[q];delete Q[B.id]}}}function w(B){for(const $ in r){const fe=r[$],de=B.isInstancedMesh===!0?B.id:0,Q=fe[de];if(Q!==void 0){for(const ce in Q){const q=Q[ce];for(const W in q)g(q[W].object),delete q[W];delete Q[ce]}delete fe[de],Object.keys(fe).length===0&&delete r[$]}}}function U(){H(),c=!0,a!==o&&(a=o,h(a.object))}function H(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:U,resetDefaultState:H,dispose:N,releaseStatesOfGeometry:P,releaseStatesOfObject:w,releaseStatesOfProgram:k,initAttributes:A,enableAttribute:S,disableUnusedAttributes:D}}function D3(n,e,t){let r;function o(d){r=d}function a(d,h){n.drawArrays(r,d,h),t.update(h,r,1)}function c(d,h,g){g!==0&&(n.drawArraysInstanced(r,d,h,g),t.update(h,r,g))}function f(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,h,0,g);let m=0;for(let y=0;y<g;y++)m+=h[y];t.update(m,r,1)}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=f}function N3(n,e,t,r){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(k){return!(k!==Ni&&r.convert(k)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const w=k===Er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==vi&&r.convert(k)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==ji&&!w)}function d(k){if(k==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const g=d(h);g!==h&&(lt("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const v=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),D=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),L=n.getParameter(n.MAX_VARYING_VECTORS),R=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=n.getParameter(n.MAX_SAMPLES),P=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:m,maxTextures:y,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:R,maxSamples:N,samples:P}}function L3(n){const e=this;let t=null,r=0,o=!1,a=!1;const c=new Ps,f=new ft,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,m){const y=v.length!==0||m||r!==0||o;return o=m,r=v.length,y},this.beginShadows=function(){a=!0,g(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,m){t=g(v,m,0)},this.setState=function(v,m,y){const M=v.clippingPlanes,A=v.clipIntersection,S=v.clipShadows,_=n.get(v);if(!o||M===null||M.length===0||a&&!S)a?g(null):h();else{const D=a?0:r,L=D*4;let R=_.clippingState||null;d.value=R,R=g(M,m,L,y);for(let N=0;N!==L;++N)R[N]=t[N];_.clippingState=R,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,m,y,M){const A=v!==null?v.length:0;let S=null;if(A!==0){if(S=d.value,M!==!0||S===null){const _=y+A*4,D=m.matrixWorldInverse;f.getNormalMatrix(D),(S===null||S.length<_)&&(S=new Float32Array(_));for(let L=0,R=y;L!==A;++L,R+=4)c.copy(v[L]).applyMatrix4(D,f),c.normal.toArray(S,R),S[R+3]=c.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}const ts=4,kx=[.125,.215,.35,.446,.526,.582],Ns=20,I3=256,Oa=new sm,zx=new Tt;let Qd=null,Jd=0,eh=0,th=!1;const U3=new ie;class Bx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,a={}){const{size:c=256,position:f=U3}=a;Qd=this._renderer.getRenderTarget(),Jd=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qd,Jd,eh),this._renderer.xr.enabled=th,e.scissorTest=!1,Ro(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ks||e.mapping===Bo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qd=this._renderer.getRenderTarget(),Jd=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Er,format:Ni,colorSpace:cu,depthBuffer:!1},o=Vx(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vx(e,t,r);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=F3(a)),this._blurMaterial=k3(a,e,t),this._ggxMaterial=O3(a,e,t)}return o}_compileMaterial(e){const t=new er(new Tr,e);this._renderer.compile(t,Oa)}_sceneToCubeUV(e,t,r,o,a){const d=new Pi(90,1,t,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,m=v.autoClear,y=v.toneMapping;v.getClearColor(zx),v.toneMapping=$i,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new er(new ul,new pS({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let _=!1;const D=e.background;D?D.isColor&&(S.color.copy(D),e.background=null,_=!0):(S.color.copy(zx),_=!0);for(let L=0;L<6;L++){const R=L%3;R===0?(d.up.set(0,h[L],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+g[L],a.y,a.z)):R===1?(d.up.set(0,0,h[L]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+g[L],a.z)):(d.up.set(0,h[L],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+g[L]));const N=this._cubeSize;Ro(o,R*N,L>2?N:0,N,N),v.setRenderTarget(o),_&&v.render(A,d),v.render(e,d)}v.toneMapping=y,v.autoClear=m,e.background=D}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===ks||e.mapping===Bo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hx());const a=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const f=a.uniforms;f.envMap.value=e;const d=this._cubeSize;Ro(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(c,Oa)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,h=r/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-g*g),m=0+h*1.25,y=v*m,{_lodMax:M}=this,A=this._sizeLods[r],S=3*A*(r>M-ts?r-M+ts:0),_=4*(this._cubeSize-A);d.envMap.value=e.texture,d.roughness.value=y,d.mipInt.value=M-t,Ro(a,S,_,3*A,2*A),o.setRenderTarget(a),o.render(f,Oa),d.envMap.value=a.texture,d.roughness.value=0,d.mipInt.value=M-r,Ro(e,S,_,3*A,2*A),o.setRenderTarget(e),o.render(f,Oa)}_blur(e,t,r,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",a),this._halfBlur(c,e,r,r,o,"longitudinal",a)}_halfBlur(e,t,r,o,a,c,f){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&wt("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[o];v.material=h;const m=h.uniforms,y=this._sizeLods[r]-1,M=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*Ns-1),A=a/M,S=isFinite(a)?1+Math.floor(g*A):Ns;S>Ns&&lt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ns}`);const _=[];let D=0;for(let k=0;k<Ns;++k){const w=k/A,U=Math.exp(-w*w/2);_.push(U),k===0?D+=U:k<S&&(D+=2*U)}for(let k=0;k<_.length;k++)_[k]=_[k]/D;m.envMap.value=e.texture,m.samples.value=S,m.weights.value=_,m.latitudinal.value=c==="latitudinal",f&&(m.poleAxis.value=f);const{_lodMax:L}=this;m.dTheta.value=M,m.mipInt.value=L-r;const R=this._sizeLods[o],N=3*R*(o>L-ts?o-L+ts:0),P=4*(this._cubeSize-R);Ro(t,N,P,3*R,2*R),d.setRenderTarget(t),d.render(v,Oa)}}function F3(n){const e=[],t=[],r=[];let o=n;const a=n-ts+1+kx.length;for(let c=0;c<a;c++){const f=Math.pow(2,o);e.push(f);let d=1/f;c>n-ts?d=kx[c-n+ts-1]:c===0&&(d=0),t.push(d);const h=1/(f-2),g=-h,v=1+h,m=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,M=6,A=3,S=2,_=1,D=new Float32Array(A*M*y),L=new Float32Array(S*M*y),R=new Float32Array(_*M*y);for(let P=0;P<y;P++){const k=P%3*2/3-1,w=P>2?0:-1,U=[k,w,0,k+2/3,w,0,k+2/3,w+1,0,k,w,0,k+2/3,w+1,0,k,w+1,0];D.set(U,A*M*P),L.set(m,S*M*P);const H=[P,P,P,P,P,P];R.set(H,_*M*P)}const N=new Tr;N.setAttribute("position",new Zi(D,A)),N.setAttribute("uv",new Zi(L,S)),N.setAttribute("faceIndex",new Zi(R,_)),r.push(new er(N,null)),o>ts&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function Vx(n,e,t){const r=new Ki(n,e,t);return r.texture.mapping=Eu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ro(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function O3(n,e,t){return new Ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:I3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tu(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function k3(n,e,t){const r=new Float32Array(Ns),o=new ie(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Tu(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Hx(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tu(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Gx(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Tu(){return`

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
	`}class MS extends Ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new gS(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new ul(5,5,5),a=new Ui({name:"CubemapFromEquirect",uniforms:Ho(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Zn,blending:_r});a.uniforms.tEquirect.value=t;const c=new er(o,a),f=t.minFilter;return t.minFilter===Is&&(t.minFilter=Un),new WR(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(a)}}function z3(n){let e=new WeakMap,t=new WeakMap,r=null;function o(m,y=!1){return m==null?null:y?c(m):a(m)}function a(m){if(m&&m.isTexture){const y=m.mapping;if(y===Td||y===Ad)if(e.has(m)){const M=e.get(m).texture;return f(M,m.mapping)}else{const M=m.image;if(M&&M.height>0){const A=new MS(M.height);return A.fromEquirectangularTexture(n,m),e.set(m,A),m.addEventListener("dispose",h),f(A.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const y=m.mapping,M=y===Td||y===Ad,A=y===ks||y===Bo;if(M||A){let S=t.get(m);const _=S!==void 0?S.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==_)return r===null&&(r=new Bx(n)),S=M?r.fromEquirectangular(m,S):r.fromCubemap(m,S),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),S.texture;if(S!==void 0)return S.texture;{const D=m.image;return M&&D&&D.height>0||A&&D&&d(D)?(r===null&&(r=new Bx(n)),S=M?r.fromEquirectangular(m):r.fromCubemap(m),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),m.addEventListener("dispose",g),S.texture):null}}}return m}function f(m,y){return y===Td?m.mapping=ks:y===Ad&&(m.mapping=Bo),m}function d(m){let y=0;const M=6;for(let A=0;A<M;A++)m[A]!==void 0&&y++;return y===M}function h(m){const y=m.target;y.removeEventListener("dispose",h);const M=e.get(y);M!==void 0&&(e.delete(y),M.dispose())}function g(m){const y=m.target;y.removeEventListener("dispose",g);const M=t.get(y);M!==void 0&&(t.delete(y),M.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function B3(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=n.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Uo("WebGLRenderer: "+r+" extension not supported."),o}}}function V3(n,e,t,r){const o={},a=new WeakMap;function c(v){const m=v.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",c),delete o[m.id];const y=a.get(m);y&&(e.remove(y),a.delete(m)),r.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function f(v,m){return o[m.id]===!0||(m.addEventListener("dispose",c),o[m.id]=!0,t.memory.geometries++),m}function d(v){const m=v.attributes;for(const y in m)e.update(m[y],n.ARRAY_BUFFER)}function h(v){const m=[],y=v.index,M=v.attributes.position;let A=0;if(M===void 0)return;if(y!==null){const D=y.array;A=y.version;for(let L=0,R=D.length;L<R;L+=3){const N=D[L+0],P=D[L+1],k=D[L+2];m.push(N,P,P,k,k,N)}}else{const D=M.array;A=M.version;for(let L=0,R=D.length/3-1;L<R;L+=3){const N=L+0,P=L+1,k=L+2;m.push(N,P,P,k,k,N)}}const S=new(M.count>=65535?hS:dS)(m,1);S.version=A;const _=a.get(v);_&&e.remove(_),a.set(v,S)}function g(v){const m=a.get(v);if(m){const y=v.index;y!==null&&m.version<y.version&&h(v)}else h(v);return a.get(v)}return{get:f,update:d,getWireframeAttribute:g}}function H3(n,e,t){let r;function o(v){r=v}let a,c;function f(v){a=v.type,c=v.bytesPerElement}function d(v,m){n.drawElements(r,m,a,v*c),t.update(m,r,1)}function h(v,m,y){y!==0&&(n.drawElementsInstanced(r,m,a,v*c,y),t.update(m,r,y))}function g(v,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,m,0,a,v,0,y);let A=0;for(let S=0;S<y;S++)A+=m[S];t.update(A,r,1)}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=g}function G3(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,c,f){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=f*(a/3);break;case n.LINES:t.lines+=f*(a/2);break;case n.LINE_STRIP:t.lines+=f*(a-1);break;case n.LINE_LOOP:t.lines+=f*a;break;case n.POINTS:t.points+=f*a;break;default:wt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function W3(n,e,t){const r=new WeakMap,o=new sn;function a(c,f,d){const h=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let m=r.get(f);if(m===void 0||m.count!==v){let U=function(){k.dispose(),r.delete(f),f.removeEventListener("dispose",U)};m!==void 0&&m.texture.dispose();const y=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,A=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],_=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let L=0;y===!0&&(L=1),M===!0&&(L=2),A===!0&&(L=3);let R=f.attributes.position.count*L,N=1;R>e.maxTextureSize&&(N=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const P=new Float32Array(R*N*4*v),k=new cS(P,R,N,v);k.type=ji,k.needsUpdate=!0;const w=L*4;for(let H=0;H<v;H++){const B=S[H],$=_[H],fe=D[H],de=R*N*4*H;for(let Q=0;Q<B.count;Q++){const ce=Q*w;y===!0&&(o.fromBufferAttribute(B,Q),P[de+ce+0]=o.x,P[de+ce+1]=o.y,P[de+ce+2]=o.z,P[de+ce+3]=0),M===!0&&(o.fromBufferAttribute($,Q),P[de+ce+4]=o.x,P[de+ce+5]=o.y,P[de+ce+6]=o.z,P[de+ce+7]=0),A===!0&&(o.fromBufferAttribute(fe,Q),P[de+ce+8]=o.x,P[de+ce+9]=o.y,P[de+ce+10]=o.z,P[de+ce+11]=fe.itemSize===4?o.w:1)}}m={count:v,texture:k,size:new Ct(R,N)},r.set(f,m),f.addEventListener("dispose",U)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let y=0;for(let A=0;A<h.length;A++)y+=h[A];const M=f.morphTargetsRelative?1:1-y;d.getUniforms().setValue(n,"morphTargetBaseInfluence",M),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:a}}function j3(n,e,t,r,o){let a=new WeakMap;function c(h){const g=o.render.frame,v=h.geometry,m=e.get(h,v);if(a.get(m)!==g&&(e.update(m),a.set(m,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==g&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),a.set(h,g))),h.isSkinnedMesh){const y=h.skeleton;a.get(y)!==g&&(y.update(),a.set(y,g))}return m}function f(){a=new WeakMap}function d(h){const g=h.target;g.removeEventListener("dispose",d),r.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:c,dispose:f}}const X3={[Yy]:"LINEAR_TONE_MAPPING",[qy]:"REINHARD_TONE_MAPPING",[$y]:"CINEON_TONE_MAPPING",[Ky]:"ACES_FILMIC_TONE_MAPPING",[Qy]:"AGX_TONE_MAPPING",[Jy]:"NEUTRAL_TONE_MAPPING",[Zy]:"CUSTOM_TONE_MAPPING"};function Y3(n,e,t,r,o,a){const c=new Ki(e,t,{type:n,depthBuffer:o,stencilBuffer:a,samples:r?4:0,depthTexture:o?new Vo(e,t):void 0}),f=new Ki(e,t,{type:Er,depthBuffer:!1,stencilBuffer:!1}),d=new Tr;d.setAttribute("position",new Sr([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Sr([0,2,0,0,2,0],2));const h=new VR({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new er(d,h),v=new sm(-1,1,1,-1,0,1);let m=null,y=null,M=!1,A,S=null,_=[],D=!1;this.setSize=function(L,R){c.setSize(L,R),f.setSize(L,R);for(let N=0;N<_.length;N++){const P=_[N];P.setSize&&P.setSize(L,R)}},this.setEffects=function(L){_=L,D=_.length>0&&_[0].isRenderPass===!0;const R=c.width,N=c.height;for(let P=0;P<_.length;P++){const k=_[P];k.setSize&&k.setSize(R,N)}},this.begin=function(L,R){if(M||L.toneMapping===$i&&_.length===0)return!1;if(S=R,R!==null){const N=R.width,P=R.height;(c.width!==N||c.height!==P)&&this.setSize(N,P)}return D===!1&&L.setRenderTarget(c),A=L.toneMapping,L.toneMapping=$i,!0},this.hasRenderPass=function(){return D},this.end=function(L,R){L.toneMapping=A,M=!0;let N=c,P=f;for(let k=0;k<_.length;k++){const w=_[k];if(w.enabled!==!1&&(w.render(L,P,N,R),w.needsSwap!==!1)){const U=N;N=P,P=U}}if(m!==L.outputColorSpace||y!==L.toneMapping){m=L.outputColorSpace,y=L.toneMapping,h.defines={},_t.getTransfer(m)===Ft&&(h.defines.SRGB_TRANSFER="");const k=X3[y];k&&(h.defines[k]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=N.texture,L.setRenderTarget(S),L.render(g,v),S=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),f.dispose(),d.dispose(),h.dispose()}}const ES=new Vn,lp=new Vo(1,1),wS=new cS,TS=new vR,AS=new gS,Wx=[],jx=[],Xx=new Float32Array(16),Yx=new Float32Array(9),qx=new Float32Array(4);function Yo(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let a=Wx[o];if(a===void 0&&(a=new Float32Array(o),Wx[o]=a),e!==0){r.toArray(a,0);for(let c=1,f=0;c!==e;++c)f+=t,n[c].toArray(a,f)}return a}function mn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function gn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Au(n,e){let t=jx[e];t===void 0&&(t=new Int32Array(e),jx[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function q3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2fv(this.addr,e),gn(t,e)}}function K3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;n.uniform3fv(this.addr,e),gn(t,e)}}function Z3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4fv(this.addr,e),gn(t,e)}}function Q3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(mn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,r))return;qx.set(r),n.uniformMatrix2fv(this.addr,!1,qx),gn(t,r)}}function J3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(mn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,r))return;Yx.set(r),n.uniformMatrix3fv(this.addr,!1,Yx),gn(t,r)}}function e2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(mn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,r))return;Xx.set(r),n.uniformMatrix4fv(this.addr,!1,Xx),gn(t,r)}}function t2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function n2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2iv(this.addr,e),gn(t,e)}}function i2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;n.uniform3iv(this.addr,e),gn(t,e)}}function r2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4iv(this.addr,e),gn(t,e)}}function s2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function o2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2uiv(this.addr,e),gn(t,e)}}function a2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;n.uniform3uiv(this.addr,e),gn(t,e)}}function l2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4uiv(this.addr,e),gn(t,e)}}function c2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let a;this.type===n.SAMPLER_2D_SHADOW?(lp.compareFunction=t.isReversedDepthBuffer()?nm:tm,a=lp):a=ES,t.setTexture2D(e||a,o)}function u2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||TS,o)}function f2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||AS,o)}function d2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||wS,o)}function h2(n){switch(n){case 5126:return q3;case 35664:return $3;case 35665:return K3;case 35666:return Z3;case 35674:return Q3;case 35675:return J3;case 35676:return e2;case 5124:case 35670:return t2;case 35667:case 35671:return n2;case 35668:case 35672:return i2;case 35669:case 35673:return r2;case 5125:return s2;case 36294:return o2;case 36295:return a2;case 36296:return l2;case 35678:case 36198:case 36298:case 36306:case 35682:return c2;case 35679:case 36299:case 36307:return u2;case 35680:case 36300:case 36308:case 36293:return f2;case 36289:case 36303:case 36311:case 36292:return d2}}function p2(n,e){n.uniform1fv(this.addr,e)}function m2(n,e){const t=Yo(e,this.size,2);n.uniform2fv(this.addr,t)}function g2(n,e){const t=Yo(e,this.size,3);n.uniform3fv(this.addr,t)}function v2(n,e){const t=Yo(e,this.size,4);n.uniform4fv(this.addr,t)}function x2(n,e){const t=Yo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function _2(n,e){const t=Yo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function y2(n,e){const t=Yo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function S2(n,e){n.uniform1iv(this.addr,e)}function M2(n,e){n.uniform2iv(this.addr,e)}function E2(n,e){n.uniform3iv(this.addr,e)}function w2(n,e){n.uniform4iv(this.addr,e)}function T2(n,e){n.uniform1uiv(this.addr,e)}function A2(n,e){n.uniform2uiv(this.addr,e)}function b2(n,e){n.uniform3uiv(this.addr,e)}function R2(n,e){n.uniform4uiv(this.addr,e)}function C2(n,e,t){const r=this.cache,o=e.length,a=Au(t,o);mn(r,a)||(n.uniform1iv(this.addr,a),gn(r,a));let c;this.type===n.SAMPLER_2D_SHADOW?c=lp:c=ES;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||c,a[f])}function P2(n,e,t){const r=this.cache,o=e.length,a=Au(t,o);mn(r,a)||(n.uniform1iv(this.addr,a),gn(r,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||TS,a[c])}function D2(n,e,t){const r=this.cache,o=e.length,a=Au(t,o);mn(r,a)||(n.uniform1iv(this.addr,a),gn(r,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||AS,a[c])}function N2(n,e,t){const r=this.cache,o=e.length,a=Au(t,o);mn(r,a)||(n.uniform1iv(this.addr,a),gn(r,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||wS,a[c])}function L2(n){switch(n){case 5126:return p2;case 35664:return m2;case 35665:return g2;case 35666:return v2;case 35674:return x2;case 35675:return _2;case 35676:return y2;case 5124:case 35670:return S2;case 35667:case 35671:return M2;case 35668:case 35672:return E2;case 35669:case 35673:return w2;case 5125:return T2;case 36294:return A2;case 36295:return b2;case 36296:return R2;case 35678:case 36198:case 36298:case 36306:case 35682:return C2;case 35679:case 36299:case 36307:return P2;case 35680:case 36300:case 36308:case 36293:return D2;case 36289:case 36303:case 36311:case 36292:return N2}}class I2{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=h2(t.type)}}class U2{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=L2(t.type)}}class F2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const f=o[a];f.setValue(e,t[f.id],r)}}}const nh=/(\w+)(\])?(\[|\.)?/g;function $x(n,e){n.seq.push(e),n.map[e.id]=e}function O2(n,e,t){const r=n.name,o=r.length;for(nh.lastIndex=0;;){const a=nh.exec(r),c=nh.lastIndex;let f=a[1];const d=a[2]==="]",h=a[3];if(d&&(f=f|0),h===void 0||h==="["&&c+2===o){$x(t,h===void 0?new I2(f,n,e):new U2(f,n,e));break}else{let v=t.map[f];v===void 0&&(v=new F2(f),$x(t,v)),t=v}}}class Qc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const f=e.getActiveUniform(t,c),d=e.getUniformLocation(t,f.name);O2(f,d,this)}const o=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):a.push(c);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,r,o){const a=this.map[t];a!==void 0&&a.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let a=0,c=t.length;a!==c;++a){const f=t[a],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function Kx(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const k2=37297;let z2=0;function B2(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const Zx=new ft;function V2(n){_t._getMatrix(Zx,_t.workingColorSpace,n);const e=`mat3( ${Zx.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(n)){case uu:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Qx(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+B2(n.getShaderSource(e),f)}else return a}function H2(n,e){const t=V2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const G2={[Yy]:"Linear",[qy]:"Reinhard",[$y]:"Cineon",[Ky]:"ACESFilmic",[Qy]:"AgX",[Jy]:"Neutral",[Zy]:"Custom"};function W2(n,e){const t=G2[e];return t===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vc=new ie;function j2(){_t.getLuminanceCoefficients(Vc);const n=Vc.x.toFixed(4),e=Vc.y.toFixed(4),t=Vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wa).join(`
`)}function Y2(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function q2(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const a=n.getActiveAttrib(e,o),c=a.name;let f=1;a.type===n.FLOAT_MAT2&&(f=2),a.type===n.FLOAT_MAT3&&(f=3),a.type===n.FLOAT_MAT4&&(f=4),t[c]={type:a.type,location:n.getAttribLocation(e,c),locationSize:f}}return t}function Wa(n){return n!==""}function Jx(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function e_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $2=/^[ \t]*#include +<([\w\d./]+)>/gm;function cp(n){return n.replace($2,Z2)}const K2=new Map;function Z2(n,e){let t=ht[e];if(t===void 0){const r=K2.get(e);if(r!==void 0)t=ht[r],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return cp(t)}const Q2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function t_(n){return n.replace(Q2,J2)}function J2(n,e,t,r){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function n_(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const eD={[Yc]:"SHADOWMAP_TYPE_PCF",[Ga]:"SHADOWMAP_TYPE_VSM"};function tD(n){return eD[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const nD={[ks]:"ENVMAP_TYPE_CUBE",[Bo]:"ENVMAP_TYPE_CUBE",[Eu]:"ENVMAP_TYPE_CUBE_UV"};function iD(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":nD[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const rD={[Bo]:"ENVMAP_MODE_REFRACTION"};function sD(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":rD[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const oD={[Xy]:"ENVMAP_BLENDING_MULTIPLY",[Kb]:"ENVMAP_BLENDING_MIX",[Zb]:"ENVMAP_BLENDING_ADD"};function aD(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":oD[n.combine]||"ENVMAP_BLENDING_NONE"}function lD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function cD(n,e,t,r){const o=n.getContext(),a=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=tD(t),h=iD(t),g=sD(t),v=aD(t),m=lD(t),y=X2(t),M=Y2(a),A=o.createProgram();let S,_,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Wa).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Wa).join(`
`),_.length>0&&(_+=`
`)):(S=[n_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),_=[n_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$i?"#define TONE_MAPPING":"",t.toneMapping!==$i?ht.tonemapping_pars_fragment:"",t.toneMapping!==$i?W2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,H2("linearToOutputTexel",t.outputColorSpace),j2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wa).join(`
`)),c=cp(c),c=Jx(c,t),c=e_(c,t),f=cp(f),f=Jx(f,t),f=e_(f,t),c=t_(c),f=t_(f),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",t.glslVersion===gx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=D+S+c,R=D+_+f,N=Kx(o,o.VERTEX_SHADER,L),P=Kx(o,o.FRAGMENT_SHADER,R);o.attachShader(A,N),o.attachShader(A,P),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function k(B){if(n.debug.checkShaderErrors){const $=o.getProgramInfoLog(A)||"",fe=o.getShaderInfoLog(N)||"",de=o.getShaderInfoLog(P)||"",Q=$.trim(),ce=fe.trim(),q=de.trim();let W=!0,ae=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,A,N,P);else{const le=Qx(o,N,"vertex"),O=Qx(o,P,"fragment");wt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+Q+`
`+le+`
`+O)}else Q!==""?lt("WebGLProgram: Program Info Log:",Q):(ce===""||q==="")&&(ae=!1);ae&&(B.diagnostics={runnable:W,programLog:Q,vertexShader:{log:ce,prefix:S},fragmentShader:{log:q,prefix:_}})}o.deleteShader(N),o.deleteShader(P),w=new Qc(o,A),U=q2(o,A)}let w;this.getUniforms=function(){return w===void 0&&k(this),w};let U;this.getAttributes=function(){return U===void 0&&k(this),U};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=o.getProgramParameter(A,k2)),H},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=z2++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=N,this.fragmentShader=P,this}let uD=0;class fD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new dD(e),t.set(e,r)),r}}class dD{constructor(e){this.id=uD++,this.code=e,this.usedTimes=0}}function hD(n){return n===zs||n===au||n===lu}function pD(n,e,t,r,o,a){const c=new uS,f=new fD,d=new Set,h=[],g=new Map,v=r.logarithmicDepthBuffer;let m=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return d.add(w),w===0?"uv":`uv${w}`}function A(w,U,H,B,$,fe){const de=B.fog,Q=$.geometry,ce=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,q=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,W=e.get(w.envMap||ce,q),ae=W&&W.mapping===Eu?W.image.height:null,le=y[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&lt("WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const O=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,K=O!==void 0?O.length:0;let Ie=0;Q.morphAttributes.position!==void 0&&(Ie=1),Q.morphAttributes.normal!==void 0&&(Ie=2),Q.morphAttributes.color!==void 0&&(Ie=3);let $e,Ve,re,xe;if(le){const He=Gi[le];$e=He.vertexShader,Ve=He.fragmentShader}else{$e=w.vertexShader,Ve=w.fragmentShader;const He=f.getVertexShaderStage(w),Ot=f.getFragmentShaderStage(w);f.update(w,He,Ot),re=He.id,xe=Ot.id}const me=n.getRenderTarget(),Ue=n.state.buffers.depth.getReversed(),et=$.isInstancedMesh===!0,tt=$.isBatchedMesh===!0,Gt=!!w.map,dt=!!w.matcap,Pt=!!W,St=!!w.aoMap,vt=!!w.lightMap,Wt=!!w.bumpMap&&w.wireframe===!1,Jt=!!w.normalMap,en=!!w.displacementMap,qt=!!w.emissiveMap,Lt=!!w.metalnessMap,jt=!!w.roughnessMap,j=w.anisotropy>0,Mn=w.clearcoat>0,At=w.dispersion>0,I=w.iridescence>0,E=w.sheen>0,Y=w.transmission>0,ne=j&&!!w.anisotropyMap,ue=Mn&&!!w.clearcoatMap,Me=Mn&&!!w.clearcoatNormalMap,Re=Mn&&!!w.clearcoatRoughnessMap,he=I&&!!w.iridescenceMap,ge=I&&!!w.iridescenceThicknessMap,Pe=E&&!!w.sheenColorMap,Ye=E&&!!w.sheenRoughnessMap,De=!!w.specularMap,be=!!w.specularColorMap,Je=!!w.specularIntensityMap,nt=Y&&!!w.transmissionMap,ot=Y&&!!w.thicknessMap,V=!!w.gradientMap,Ae=!!w.alphaMap,pe=w.alphaTest>0,Ce=!!w.alphaHash,Ne=!!w.extensions;let ve=$i;w.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(ve=n.toneMapping);const We={shaderID:le,shaderType:w.type,shaderName:w.name,vertexShader:$e,fragmentShader:Ve,defines:w.defines,customVertexShaderID:re,customFragmentShaderID:xe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:tt,batchingColor:tt&&$._colorsTexture!==null,instancing:et,instancingColor:et&&$.instanceColor!==null,instancingMorph:et&&$.morphTexture!==null,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:Gt,matcap:dt,envMap:Pt,envMapMode:Pt&&W.mapping,envMapCubeUVHeight:ae,aoMap:St,lightMap:vt,bumpMap:Wt,normalMap:Jt,displacementMap:en,emissiveMap:qt,normalMapObjectSpace:Jt&&w.normalMapType===eR,normalMapTangentSpace:Jt&&w.normalMapType===hx,packedNormalMap:Jt&&w.normalMapType===hx&&hD(w.normalMap.format),metalnessMap:Lt,roughnessMap:jt,anisotropy:j,anisotropyMap:ne,clearcoat:Mn,clearcoatMap:ue,clearcoatNormalMap:Me,clearcoatRoughnessMap:Re,dispersion:At,iridescence:I,iridescenceMap:he,iridescenceThicknessMap:ge,sheen:E,sheenColorMap:Pe,sheenRoughnessMap:Ye,specularMap:De,specularColorMap:be,specularIntensityMap:Je,transmission:Y,transmissionMap:nt,thicknessMap:ot,gradientMap:V,opaque:w.transparent===!1&&w.blending===Io&&w.alphaToCoverage===!1,alphaMap:Ae,alphaTest:pe,alphaHash:Ce,combine:w.combine,mapUv:Gt&&M(w.map.channel),aoMapUv:St&&M(w.aoMap.channel),lightMapUv:vt&&M(w.lightMap.channel),bumpMapUv:Wt&&M(w.bumpMap.channel),normalMapUv:Jt&&M(w.normalMap.channel),displacementMapUv:en&&M(w.displacementMap.channel),emissiveMapUv:qt&&M(w.emissiveMap.channel),metalnessMapUv:Lt&&M(w.metalnessMap.channel),roughnessMapUv:jt&&M(w.roughnessMap.channel),anisotropyMapUv:ne&&M(w.anisotropyMap.channel),clearcoatMapUv:ue&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:Me&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&M(w.sheenRoughnessMap.channel),specularMapUv:De&&M(w.specularMap.channel),specularColorMapUv:be&&M(w.specularColorMap.channel),specularIntensityMapUv:Je&&M(w.specularIntensityMap.channel),transmissionMapUv:nt&&M(w.transmissionMap.channel),thicknessMapUv:ot&&M(w.thicknessMap.channel),alphaMapUv:Ae&&M(w.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Jt||j),vertexNormals:!!Q.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!Q.attributes.uv&&(Gt||Ae),fog:!!de,useFog:w.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||Q.attributes.normal===void 0&&Jt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ue,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Ie,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:fe.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:ve,decodeVideoTexture:Gt&&w.map.isVideoTexture===!0&&_t.getTransfer(w.map.colorSpace)===Ft,decodeVideoTextureEmissive:qt&&w.emissiveMap.isVideoTexture===!0&&_t.getTransfer(w.emissiveMap.colorSpace)===Ft,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===mr,flipSided:w.side===Zn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ne&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&w.extensions.multiDraw===!0||tt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return We.vertexUv1s=d.has(1),We.vertexUv2s=d.has(2),We.vertexUv3s=d.has(3),d.clear(),We}function S(w){const U=[];if(w.shaderID?U.push(w.shaderID):(U.push(w.customVertexShaderID),U.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)U.push(H),U.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(_(U,w),D(U,w),U.push(n.outputColorSpace)),U.push(w.customProgramCacheKey),U.join()}function _(w,U){w.push(U.precision),w.push(U.outputColorSpace),w.push(U.envMapMode),w.push(U.envMapCubeUVHeight),w.push(U.mapUv),w.push(U.alphaMapUv),w.push(U.lightMapUv),w.push(U.aoMapUv),w.push(U.bumpMapUv),w.push(U.normalMapUv),w.push(U.displacementMapUv),w.push(U.emissiveMapUv),w.push(U.metalnessMapUv),w.push(U.roughnessMapUv),w.push(U.anisotropyMapUv),w.push(U.clearcoatMapUv),w.push(U.clearcoatNormalMapUv),w.push(U.clearcoatRoughnessMapUv),w.push(U.iridescenceMapUv),w.push(U.iridescenceThicknessMapUv),w.push(U.sheenColorMapUv),w.push(U.sheenRoughnessMapUv),w.push(U.specularMapUv),w.push(U.specularColorMapUv),w.push(U.specularIntensityMapUv),w.push(U.transmissionMapUv),w.push(U.thicknessMapUv),w.push(U.combine),w.push(U.fogExp2),w.push(U.sizeAttenuation),w.push(U.morphTargetsCount),w.push(U.morphAttributeCount),w.push(U.numDirLights),w.push(U.numPointLights),w.push(U.numSpotLights),w.push(U.numSpotLightMaps),w.push(U.numHemiLights),w.push(U.numRectAreaLights),w.push(U.numDirLightShadows),w.push(U.numPointLightShadows),w.push(U.numSpotLightShadows),w.push(U.numSpotLightShadowsWithMaps),w.push(U.numLightProbes),w.push(U.shadowMapType),w.push(U.toneMapping),w.push(U.numClippingPlanes),w.push(U.numClipIntersection),w.push(U.depthPacking)}function D(w,U){c.disableAll(),U.instancing&&c.enable(0),U.instancingColor&&c.enable(1),U.instancingMorph&&c.enable(2),U.matcap&&c.enable(3),U.envMap&&c.enable(4),U.normalMapObjectSpace&&c.enable(5),U.normalMapTangentSpace&&c.enable(6),U.clearcoat&&c.enable(7),U.iridescence&&c.enable(8),U.alphaTest&&c.enable(9),U.vertexColors&&c.enable(10),U.vertexAlphas&&c.enable(11),U.vertexUv1s&&c.enable(12),U.vertexUv2s&&c.enable(13),U.vertexUv3s&&c.enable(14),U.vertexTangents&&c.enable(15),U.anisotropy&&c.enable(16),U.alphaHash&&c.enable(17),U.batching&&c.enable(18),U.dispersion&&c.enable(19),U.batchingColor&&c.enable(20),U.gradientMap&&c.enable(21),U.packedNormalMap&&c.enable(22),U.vertexNormals&&c.enable(23),w.push(c.mask),c.disableAll(),U.fog&&c.enable(0),U.useFog&&c.enable(1),U.flatShading&&c.enable(2),U.logarithmicDepthBuffer&&c.enable(3),U.reversedDepthBuffer&&c.enable(4),U.skinning&&c.enable(5),U.morphTargets&&c.enable(6),U.morphNormals&&c.enable(7),U.morphColors&&c.enable(8),U.premultipliedAlpha&&c.enable(9),U.shadowMapEnabled&&c.enable(10),U.doubleSided&&c.enable(11),U.flipSided&&c.enable(12),U.useDepthPacking&&c.enable(13),U.dithering&&c.enable(14),U.transmission&&c.enable(15),U.sheen&&c.enable(16),U.opaque&&c.enable(17),U.pointsUvs&&c.enable(18),U.decodeVideoTexture&&c.enable(19),U.decodeVideoTextureEmissive&&c.enable(20),U.alphaToCoverage&&c.enable(21),U.numLightProbeGrids>0&&c.enable(22),U.hasPositionAttribute&&c.enable(23),w.push(c.mask)}function L(w){const U=y[w.type];let H;if(U){const B=Gi[U];H=kR.clone(B.uniforms)}else H=w.uniforms;return H}function R(w,U){let H=g.get(U);return H!==void 0?++H.usedTimes:(H=new cD(n,U,w,o),h.push(H),g.set(U,H)),H}function N(w){if(--w.usedTimes===0){const U=h.indexOf(w);h[U]=h[h.length-1],h.pop(),g.delete(w.cacheKey),w.destroy()}}function P(w){f.remove(w)}function k(){f.dispose()}return{getParameters:A,getProgramCacheKey:S,getUniforms:L,acquireProgram:R,releaseProgram:N,releaseShaderCache:P,programs:h,dispose:k}}function mD(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let f=n.get(c);return f===void 0&&(f={},n.set(c,f)),f}function r(c){n.delete(c)}function o(c,f,d){n.get(c)[f]=d}function a(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:a}}function gD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function i_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function r_(){const n=[];let e=0;const t=[],r=[],o=[];function a(){e=0,t.length=0,r.length=0,o.length=0}function c(m){let y=0;return m.isInstancedMesh&&(y+=2),m.isSkinnedMesh&&(y+=1),y}function f(m,y,M,A,S,_){let D=n[e];return D===void 0?(D={id:m.id,object:m,geometry:y,material:M,materialVariant:c(m),groupOrder:A,renderOrder:m.renderOrder,z:S,group:_},n[e]=D):(D.id=m.id,D.object=m,D.geometry=y,D.material=M,D.materialVariant=c(m),D.groupOrder=A,D.renderOrder=m.renderOrder,D.z=S,D.group=_),e++,D}function d(m,y,M,A,S,_){const D=f(m,y,M,A,S,_);M.transmission>0?r.push(D):M.transparent===!0?o.push(D):t.push(D)}function h(m,y,M,A,S,_){const D=f(m,y,M,A,S,_);M.transmission>0?r.unshift(D):M.transparent===!0?o.unshift(D):t.unshift(D)}function g(m,y,M){t.length>1&&t.sort(m||gD),r.length>1&&r.sort(y||i_),o.length>1&&o.sort(y||i_),M&&(t.reverse(),r.reverse(),o.reverse())}function v(){for(let m=e,y=n.length;m<y;m++){const M=n[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:a,push:d,unshift:h,finish:v,sort:g}}function vD(){let n=new WeakMap;function e(r,o){const a=n.get(r);let c;return a===void 0?(c=new r_,n.set(r,[c])):o>=a.length?(c=new r_,a.push(c)):c=a[o],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function xD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new Tt};break;case"SpotLight":t={position:new ie,direction:new ie,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":t={color:new Tt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return n[e.id]=t,t}}}function _D(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let yD=0;function SD(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function MD(n){const e=new xD,t=_D(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ie);const o=new ie,a=new fn,c=new fn;function f(h){let g=0,v=0,m=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let y=0,M=0,A=0,S=0,_=0,D=0,L=0,R=0,N=0,P=0,k=0;h.sort(SD);for(let U=0,H=h.length;U<H;U++){const B=h[U],$=B.color,fe=B.intensity,de=B.distance;let Q=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===zs?Q=B.shadow.map.texture:Q=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)g+=$.r*fe,v+=$.g*fe,m+=$.b*fe;else if(B.isLightProbe){for(let ce=0;ce<9;ce++)r.probe[ce].addScaledVector(B.sh.coefficients[ce],fe);k++}else if(B.isDirectionalLight){const ce=e.get(B);if(ce.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const q=B.shadow,W=t.get(B);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,r.directionalShadow[y]=W,r.directionalShadowMap[y]=Q,r.directionalShadowMatrix[y]=B.shadow.matrix,D++}r.directional[y]=ce,y++}else if(B.isSpotLight){const ce=e.get(B);ce.position.setFromMatrixPosition(B.matrixWorld),ce.color.copy($).multiplyScalar(fe),ce.distance=de,ce.coneCos=Math.cos(B.angle),ce.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ce.decay=B.decay,r.spot[A]=ce;const q=B.shadow;if(B.map&&(r.spotLightMap[N]=B.map,N++,q.updateMatrices(B),B.castShadow&&P++),r.spotLightMatrix[A]=q.matrix,B.castShadow){const W=t.get(B);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,r.spotShadow[A]=W,r.spotShadowMap[A]=Q,R++}A++}else if(B.isRectAreaLight){const ce=e.get(B);ce.color.copy($).multiplyScalar(fe),ce.halfWidth.set(B.width*.5,0,0),ce.halfHeight.set(0,B.height*.5,0),r.rectArea[S]=ce,S++}else if(B.isPointLight){const ce=e.get(B);if(ce.color.copy(B.color).multiplyScalar(B.intensity),ce.distance=B.distance,ce.decay=B.decay,B.castShadow){const q=B.shadow,W=t.get(B);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,W.shadowCameraNear=q.camera.near,W.shadowCameraFar=q.camera.far,r.pointShadow[M]=W,r.pointShadowMap[M]=Q,r.pointShadowMatrix[M]=B.shadow.matrix,L++}r.point[M]=ce,M++}else if(B.isHemisphereLight){const ce=e.get(B);ce.skyColor.copy(B.color).multiplyScalar(fe),ce.groundColor.copy(B.groundColor).multiplyScalar(fe),r.hemi[_]=ce,_++}}S>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=m;const w=r.hash;(w.directionalLength!==y||w.pointLength!==M||w.spotLength!==A||w.rectAreaLength!==S||w.hemiLength!==_||w.numDirectionalShadows!==D||w.numPointShadows!==L||w.numSpotShadows!==R||w.numSpotMaps!==N||w.numLightProbes!==k)&&(r.directional.length=y,r.spot.length=A,r.rectArea.length=S,r.point.length=M,r.hemi.length=_,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=R+N-P,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=k,w.directionalLength=y,w.pointLength=M,w.spotLength=A,w.rectAreaLength=S,w.hemiLength=_,w.numDirectionalShadows=D,w.numPointShadows=L,w.numSpotShadows=R,w.numSpotMaps=N,w.numLightProbes=k,r.version=yD++)}function d(h,g){let v=0,m=0,y=0,M=0,A=0;const S=g.matrixWorldInverse;for(let _=0,D=h.length;_<D;_++){const L=h[_];if(L.isDirectionalLight){const R=r.directional[v];R.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),v++}else if(L.isSpotLight){const R=r.spot[y];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),y++}else if(L.isRectAreaLight){const R=r.rectArea[M];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(S),c.identity(),a.copy(L.matrixWorld),a.premultiply(S),c.extractRotation(a),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),M++}else if(L.isPointLight){const R=r.point[m];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(S),m++}else if(L.isHemisphereLight){const R=r.hemi[A];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(S),A++}}}return{setup:f,setupView:d,state:r}}function s_(n){const e=new MD(n),t=[],r=[],o=[];function a(m){v.camera=m,t.length=0,r.length=0,o.length=0}function c(m){t.push(m)}function f(m){r.push(m)}function d(m){o.push(m)}function h(){e.setup(t)}function g(m){e.setupView(t,m)}const v={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:v,setupLights:h,setupLightsView:g,pushLight:c,pushShadow:f,pushLightProbeGrid:d}}function ED(n){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let f;return c===void 0?(f=new s_(n),e.set(o,[f])):a>=c.length?(f=new s_(n),c.push(f)):f=c[a],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const wD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TD=`uniform sampler2D shadow_pass;
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
}`,AD=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],bD=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],o_=new fn,ka=new ie,ih=new ie;function RD(n,e,t){let r=new mS;const o=new Ct,a=new Ct,c=new sn,f=new HR,d=new GR,h={},g=t.maxTextureSize,v={[is]:Zn,[Zn]:is,[mr]:mr},m=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:wD,fragmentShader:TD}),y=m.clone();y.defines.HORIZONTAL_PASS=1;const M=new Tr;M.setAttribute("position",new Zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new er(M,m),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc;let _=this.type;this.render=function(P,k,w){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;this.type===Db&&(lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Yc);const U=n.getRenderTarget(),H=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),$=n.state;$.setBlending(_r),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const fe=_!==this.type;fe&&k.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(Q=>Q.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,Q=P.length;de<Q;de++){const ce=P[de],q=ce.shadow;if(q===void 0){lt("WebGLShadowMap:",ce,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const W=q.getFrameExtents();o.multiply(W),a.copy(q.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(a.x=Math.floor(g/W.x),o.x=a.x*W.x,q.mapSize.x=a.x),o.y>g&&(a.y=Math.floor(g/W.y),o.y=a.y*W.y,q.mapSize.y=a.y));const ae=n.state.buffers.depth.getReversed();if(q.camera._reversedDepth=ae,q.map===null||fe===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Ga){if(ce.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Ki(o.x,o.y,{format:zs,type:Er,minFilter:Un,magFilter:Un,generateMipmaps:!1}),q.map.texture.name=ce.name+".shadowMap",q.map.depthTexture=new Vo(o.x,o.y,ji),q.map.depthTexture.name=ce.name+".shadowMapDepth",q.map.depthTexture.format=wr,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=An,q.map.depthTexture.magFilter=An}else ce.isPointLight?(q.map=new MS(o.x),q.map.depthTexture=new FR(o.x,Ji)):(q.map=new Ki(o.x,o.y),q.map.depthTexture=new Vo(o.x,o.y,Ji)),q.map.depthTexture.name=ce.name+".shadowMap",q.map.depthTexture.format=wr,this.type===Yc?(q.map.depthTexture.compareFunction=ae?nm:tm,q.map.depthTexture.minFilter=Un,q.map.depthTexture.magFilter=Un):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=An,q.map.depthTexture.magFilter=An);q.camera.updateProjectionMatrix()}const le=q.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<le;O++){if(q.map.isWebGLCubeRenderTarget)n.setRenderTarget(q.map,O),n.clear();else{O===0&&(n.setRenderTarget(q.map),n.clear());const K=q.getViewport(O);c.set(a.x*K.x,a.y*K.y,a.x*K.z,a.y*K.w),$.viewport(c)}if(ce.isPointLight){const K=q.camera,Ie=q.matrix,$e=ce.distance||K.far;$e!==K.far&&(K.far=$e,K.updateProjectionMatrix()),ka.setFromMatrixPosition(ce.matrixWorld),K.position.copy(ka),ih.copy(K.position),ih.add(AD[O]),K.up.copy(bD[O]),K.lookAt(ih),K.updateMatrixWorld(),Ie.makeTranslation(-ka.x,-ka.y,-ka.z),o_.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),q._frustum.setFromProjectionMatrix(o_,K.coordinateSystem,K.reversedDepth)}else q.updateMatrices(ce);r=q.getFrustum(),R(k,w,q.camera,ce,this.type)}q.isPointLightShadow!==!0&&this.type===Ga&&D(q,w),q.needsUpdate=!1}_=this.type,S.needsUpdate=!1,n.setRenderTarget(U,H,B)};function D(P,k){const w=e.update(A);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,y.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,y.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ki(o.x,o.y,{format:zs,type:Er})),m.uniforms.shadow_pass.value=P.map.depthTexture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(k,null,w,m,A,null),y.uniforms.shadow_pass.value=P.mapPass.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(k,null,w,y,A,null)}function L(P,k,w,U){let H=null;const B=w.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(B!==void 0)H=B;else if(H=w.isPointLight===!0?d:f,n.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const $=H.uuid,fe=k.uuid;let de=h[$];de===void 0&&(de={},h[$]=de);let Q=de[fe];Q===void 0&&(Q=H.clone(),de[fe]=Q,k.addEventListener("dispose",N)),H=Q}if(H.visible=k.visible,H.wireframe=k.wireframe,U===Ga?H.side=k.shadowSide!==null?k.shadowSide:k.side:H.side=k.shadowSide!==null?k.shadowSide:v[k.side],H.alphaMap=k.alphaMap,H.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,H.map=k.map,H.clipShadows=k.clipShadows,H.clippingPlanes=k.clippingPlanes,H.clipIntersection=k.clipIntersection,H.displacementMap=k.displacementMap,H.displacementScale=k.displacementScale,H.displacementBias=k.displacementBias,H.wireframeLinewidth=k.wireframeLinewidth,H.linewidth=k.linewidth,w.isPointLight===!0&&H.isMeshDistanceMaterial===!0){const $=n.properties.get(H);$.light=w}return H}function R(P,k,w,U,H){if(P.visible===!1)return;if(P.layers.test(k.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&H===Ga)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,P.matrixWorld);const fe=e.update(P),de=P.material;if(Array.isArray(de)){const Q=fe.groups;for(let ce=0,q=Q.length;ce<q;ce++){const W=Q[ce],ae=de[W.materialIndex];if(ae&&ae.visible){const le=L(P,ae,U,H);P.onBeforeShadow(n,P,k,w,fe,le,W),n.renderBufferDirect(w,null,fe,le,P,W),P.onAfterShadow(n,P,k,w,fe,le,W)}}}else if(de.visible){const Q=L(P,de,U,H);P.onBeforeShadow(n,P,k,w,fe,Q,null),n.renderBufferDirect(w,null,fe,Q,P,null),P.onAfterShadow(n,P,k,w,fe,Q,null)}}const $=P.children;for(let fe=0,de=$.length;fe<de;fe++)R($[fe],k,w,U,H)}function N(P){P.target.removeEventListener("dispose",N);for(const w in h){const U=h[w],H=P.target.uuid;H in U&&(U[H].dispose(),delete U[H])}}}function CD(n,e){function t(){let V=!1;const Ae=new sn;let pe=null;const Ce=new sn(0,0,0,0);return{setMask:function(Ne){pe!==Ne&&!V&&(n.colorMask(Ne,Ne,Ne,Ne),pe=Ne)},setLocked:function(Ne){V=Ne},setClear:function(Ne,ve,We,He,Ot){Ot===!0&&(Ne*=He,ve*=He,We*=He),Ae.set(Ne,ve,We,He),Ce.equals(Ae)===!1&&(n.clearColor(Ne,ve,We,He),Ce.copy(Ae))},reset:function(){V=!1,pe=null,Ce.set(-1,0,0,0)}}}function r(){let V=!1,Ae=!1,pe=null,Ce=null,Ne=null;return{setReversed:function(ve){if(Ae!==ve){const We=e.get("EXT_clip_control");ve?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Ae=ve;const He=Ne;Ne=null,this.setClear(He)}},getReversed:function(){return Ae},setTest:function(ve){ve?me(n.DEPTH_TEST):Ue(n.DEPTH_TEST)},setMask:function(ve){pe!==ve&&!V&&(n.depthMask(ve),pe=ve)},setFunc:function(ve){if(Ae&&(ve=uR[ve]),Ce!==ve){switch(ve){case Mh:n.depthFunc(n.NEVER);break;case Eh:n.depthFunc(n.ALWAYS);break;case wh:n.depthFunc(n.LESS);break;case zo:n.depthFunc(n.LEQUAL);break;case Th:n.depthFunc(n.EQUAL);break;case Ah:n.depthFunc(n.GEQUAL);break;case bh:n.depthFunc(n.GREATER);break;case Rh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ce=ve}},setLocked:function(ve){V=ve},setClear:function(ve){Ne!==ve&&(Ne=ve,Ae&&(ve=1-ve),n.clearDepth(ve))},reset:function(){V=!1,pe=null,Ce=null,Ne=null,Ae=!1}}}function o(){let V=!1,Ae=null,pe=null,Ce=null,Ne=null,ve=null,We=null,He=null,Ot=null;return{setTest:function(Dt){V||(Dt?me(n.STENCIL_TEST):Ue(n.STENCIL_TEST))},setMask:function(Dt){Ae!==Dt&&!V&&(n.stencilMask(Dt),Ae=Dt)},setFunc:function(Dt,bn,oi){(pe!==Dt||Ce!==bn||Ne!==oi)&&(n.stencilFunc(Dt,bn,oi),pe=Dt,Ce=bn,Ne=oi)},setOp:function(Dt,bn,oi){(ve!==Dt||We!==bn||He!==oi)&&(n.stencilOp(Dt,bn,oi),ve=Dt,We=bn,He=oi)},setLocked:function(Dt){V=Dt},setClear:function(Dt){Ot!==Dt&&(n.clearStencil(Dt),Ot=Dt)},reset:function(){V=!1,Ae=null,pe=null,Ce=null,Ne=null,ve=null,We=null,He=null,Ot=null}}}const a=new t,c=new r,f=new o,d=new WeakMap,h=new WeakMap;let g={},v={},m={},y=new WeakMap,M=[],A=null,S=!1,_=null,D=null,L=null,R=null,N=null,P=null,k=null,w=new Tt(0,0,0),U=0,H=!1,B=null,$=null,fe=null,de=null,Q=null;const ce=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,W=0;const ae=n.getParameter(n.VERSION);ae.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(ae)[1]),q=W>=1):ae.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),q=W>=2);let le=null,O={};const K=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),$e=new sn().fromArray(K),Ve=new sn().fromArray(Ie);function re(V,Ae,pe,Ce){const Ne=new Uint8Array(4),ve=n.createTexture();n.bindTexture(V,ve),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let We=0;We<pe;We++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,Ce,0,n.RGBA,n.UNSIGNED_BYTE,Ne):n.texImage2D(Ae+We,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ne);return ve}const xe={};xe[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),f.setClear(0),me(n.DEPTH_TEST),c.setFunc(zo),Wt(!1),Jt(cx),me(n.CULL_FACE),St(_r);function me(V){g[V]!==!0&&(n.enable(V),g[V]=!0)}function Ue(V){g[V]!==!1&&(n.disable(V),g[V]=!1)}function et(V,Ae){return m[V]!==Ae?(n.bindFramebuffer(V,Ae),m[V]=Ae,V===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Ae),V===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function tt(V,Ae){let pe=M,Ce=!1;if(V){pe=y.get(Ae),pe===void 0&&(pe=[],y.set(Ae,pe));const Ne=V.textures;if(pe.length!==Ne.length||pe[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,We=Ne.length;ve<We;ve++)pe[ve]=n.COLOR_ATTACHMENT0+ve;pe.length=Ne.length,Ce=!0}}else pe[0]!==n.BACK&&(pe[0]=n.BACK,Ce=!0);Ce&&n.drawBuffers(pe)}function Gt(V){return A!==V?(n.useProgram(V),A=V,!0):!1}const dt={[Ds]:n.FUNC_ADD,[Lb]:n.FUNC_SUBTRACT,[Ib]:n.FUNC_REVERSE_SUBTRACT};dt[Ub]=n.MIN,dt[Fb]=n.MAX;const Pt={[Ob]:n.ZERO,[kb]:n.ONE,[zb]:n.SRC_COLOR,[yh]:n.SRC_ALPHA,[jb]:n.SRC_ALPHA_SATURATE,[Gb]:n.DST_COLOR,[Vb]:n.DST_ALPHA,[Bb]:n.ONE_MINUS_SRC_COLOR,[Sh]:n.ONE_MINUS_SRC_ALPHA,[Wb]:n.ONE_MINUS_DST_COLOR,[Hb]:n.ONE_MINUS_DST_ALPHA,[Xb]:n.CONSTANT_COLOR,[Yb]:n.ONE_MINUS_CONSTANT_COLOR,[qb]:n.CONSTANT_ALPHA,[$b]:n.ONE_MINUS_CONSTANT_ALPHA};function St(V,Ae,pe,Ce,Ne,ve,We,He,Ot,Dt){if(V===_r){S===!0&&(Ue(n.BLEND),S=!1);return}if(S===!1&&(me(n.BLEND),S=!0),V!==Nb){if(V!==_||Dt!==H){if((D!==Ds||N!==Ds)&&(n.blendEquation(n.FUNC_ADD),D=Ds,N=Ds),Dt)switch(V){case Io:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ux:n.blendFunc(n.ONE,n.ONE);break;case fx:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dx:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:wt("WebGLState: Invalid blending: ",V);break}else switch(V){case Io:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ux:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case fx:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dx:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",V);break}L=null,R=null,P=null,k=null,w.set(0,0,0),U=0,_=V,H=Dt}return}Ne=Ne||Ae,ve=ve||pe,We=We||Ce,(Ae!==D||Ne!==N)&&(n.blendEquationSeparate(dt[Ae],dt[Ne]),D=Ae,N=Ne),(pe!==L||Ce!==R||ve!==P||We!==k)&&(n.blendFuncSeparate(Pt[pe],Pt[Ce],Pt[ve],Pt[We]),L=pe,R=Ce,P=ve,k=We),(He.equals(w)===!1||Ot!==U)&&(n.blendColor(He.r,He.g,He.b,Ot),w.copy(He),U=Ot),_=V,H=!1}function vt(V,Ae){V.side===mr?Ue(n.CULL_FACE):me(n.CULL_FACE);let pe=V.side===Zn;Ae&&(pe=!pe),Wt(pe),V.blending===Io&&V.transparent===!1?St(_r):St(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),a.setMask(V.colorWrite);const Ce=V.stencilWrite;f.setTest(Ce),Ce&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),qt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):Ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(V){B!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),B=V)}function Jt(V){V!==Cb?(me(n.CULL_FACE),V!==$&&(V===cx?n.cullFace(n.BACK):V===Pb?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ue(n.CULL_FACE),$=V}function en(V){V!==fe&&(q&&n.lineWidth(V),fe=V)}function qt(V,Ae,pe){V?(me(n.POLYGON_OFFSET_FILL),(de!==Ae||Q!==pe)&&(de=Ae,Q=pe,c.getReversed()&&(Ae=-Ae),n.polygonOffset(Ae,pe))):Ue(n.POLYGON_OFFSET_FILL)}function Lt(V){V?me(n.SCISSOR_TEST):Ue(n.SCISSOR_TEST)}function jt(V){V===void 0&&(V=n.TEXTURE0+ce-1),le!==V&&(n.activeTexture(V),le=V)}function j(V,Ae,pe){pe===void 0&&(le===null?pe=n.TEXTURE0+ce-1:pe=le);let Ce=O[pe];Ce===void 0&&(Ce={type:void 0,texture:void 0},O[pe]=Ce),(Ce.type!==V||Ce.texture!==Ae)&&(le!==pe&&(n.activeTexture(pe),le=pe),n.bindTexture(V,Ae||xe[V]),Ce.type=V,Ce.texture=Ae)}function Mn(){const V=O[le];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function At(){try{n.compressedTexImage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function E(){try{n.texSubImage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function Y(){try{n.texSubImage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function ne(){try{n.compressedTexSubImage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function ue(){try{n.compressedTexSubImage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function Me(){try{n.texStorage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function Re(){try{n.texStorage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function he(){try{n.texImage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function ge(){try{n.texImage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function Pe(V){return v[V]!==void 0?v[V]:n.getParameter(V)}function Ye(V,Ae){v[V]!==Ae&&(n.pixelStorei(V,Ae),v[V]=Ae)}function De(V){$e.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),$e.copy(V))}function be(V){Ve.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),Ve.copy(V))}function Je(V,Ae){let pe=h.get(Ae);pe===void 0&&(pe=new WeakMap,h.set(Ae,pe));let Ce=pe.get(V);Ce===void 0&&(Ce=n.getUniformBlockIndex(Ae,V.name),pe.set(V,Ce))}function nt(V,Ae){const Ce=h.get(Ae).get(V);d.get(Ae)!==Ce&&(n.uniformBlockBinding(Ae,Ce,V.__bindingPointIndex),d.set(Ae,Ce))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),g={},v={},le=null,O={},m={},y=new WeakMap,M=[],A=null,S=!1,_=null,D=null,L=null,R=null,N=null,P=null,k=null,w=new Tt(0,0,0),U=0,H=!1,B=null,$=null,fe=null,de=null,Q=null,$e.set(0,0,n.canvas.width,n.canvas.height),Ve.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),f.reset()}return{buffers:{color:a,depth:c,stencil:f},enable:me,disable:Ue,bindFramebuffer:et,drawBuffers:tt,useProgram:Gt,setBlending:St,setMaterial:vt,setFlipSided:Wt,setCullFace:Jt,setLineWidth:en,setPolygonOffset:qt,setScissorTest:Lt,activeTexture:jt,bindTexture:j,unbindTexture:Mn,compressedTexImage2D:At,compressedTexImage3D:I,texImage2D:he,texImage3D:ge,pixelStorei:Ye,getParameter:Pe,updateUBOMapping:Je,uniformBlockBinding:nt,texStorage2D:Me,texStorage3D:Re,texSubImage2D:E,texSubImage3D:Y,compressedTexSubImage2D:ne,compressedTexSubImage3D:ue,scissor:De,viewport:be,reset:ot}}function PD(n,e,t,r,o,a,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ct,g=new WeakMap,v=new Set;let m;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(I,E){return M?new OffscreenCanvas(I,E):du("canvas")}function S(I,E,Y){let ne=1;const ue=At(I);if((ue.width>Y||ue.height>Y)&&(ne=Y/Math.max(ue.width,ue.height)),ne<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Me=Math.floor(ne*ue.width),Re=Math.floor(ne*ue.height);m===void 0&&(m=A(Me,Re));const he=E?A(Me,Re):m;return he.width=Me,he.height=Re,he.getContext("2d").drawImage(I,0,0,Me,Re),lt("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+Me+"x"+Re+")."),he}else return"data"in I&&lt("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),I;return I}function _(I){return I.generateMipmaps}function D(I){n.generateMipmap(I)}function L(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(I,E,Y,ne,ue,Me=!1){if(I!==null){if(n[I]!==void 0)return n[I];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Re;ne&&(Re=e.get("EXT_texture_norm16"),Re||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=E;if(E===n.RED&&(Y===n.FLOAT&&(he=n.R32F),Y===n.HALF_FLOAT&&(he=n.R16F),Y===n.UNSIGNED_BYTE&&(he=n.R8),Y===n.UNSIGNED_SHORT&&Re&&(he=Re.R16_EXT),Y===n.SHORT&&Re&&(he=Re.R16_SNORM_EXT)),E===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(he=n.R8UI),Y===n.UNSIGNED_SHORT&&(he=n.R16UI),Y===n.UNSIGNED_INT&&(he=n.R32UI),Y===n.BYTE&&(he=n.R8I),Y===n.SHORT&&(he=n.R16I),Y===n.INT&&(he=n.R32I)),E===n.RG&&(Y===n.FLOAT&&(he=n.RG32F),Y===n.HALF_FLOAT&&(he=n.RG16F),Y===n.UNSIGNED_BYTE&&(he=n.RG8),Y===n.UNSIGNED_SHORT&&Re&&(he=Re.RG16_EXT),Y===n.SHORT&&Re&&(he=Re.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(he=n.RG8UI),Y===n.UNSIGNED_SHORT&&(he=n.RG16UI),Y===n.UNSIGNED_INT&&(he=n.RG32UI),Y===n.BYTE&&(he=n.RG8I),Y===n.SHORT&&(he=n.RG16I),Y===n.INT&&(he=n.RG32I)),E===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(he=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(he=n.RGB16UI),Y===n.UNSIGNED_INT&&(he=n.RGB32UI),Y===n.BYTE&&(he=n.RGB8I),Y===n.SHORT&&(he=n.RGB16I),Y===n.INT&&(he=n.RGB32I)),E===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(he=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(he=n.RGBA16UI),Y===n.UNSIGNED_INT&&(he=n.RGBA32UI),Y===n.BYTE&&(he=n.RGBA8I),Y===n.SHORT&&(he=n.RGBA16I),Y===n.INT&&(he=n.RGBA32I)),E===n.RGB&&(Y===n.UNSIGNED_SHORT&&Re&&(he=Re.RGB16_EXT),Y===n.SHORT&&Re&&(he=Re.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(he=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(he=n.R11F_G11F_B10F)),E===n.RGBA){const ge=Me?uu:_t.getTransfer(ue);Y===n.FLOAT&&(he=n.RGBA32F),Y===n.HALF_FLOAT&&(he=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(he=ge===Ft?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&Re&&(he=Re.RGBA16_EXT),Y===n.SHORT&&Re&&(he=Re.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(he=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(he=n.RGB5_A1)}return(he===n.R16F||he===n.R32F||he===n.RG16F||he===n.RG32F||he===n.RGBA16F||he===n.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function N(I,E){let Y;return I?E===null||E===Ji||E===nl?Y=n.DEPTH24_STENCIL8:E===ji?Y=n.DEPTH32F_STENCIL8:E===tl&&(Y=n.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ji||E===nl?Y=n.DEPTH_COMPONENT24:E===ji?Y=n.DEPTH_COMPONENT32F:E===tl&&(Y=n.DEPTH_COMPONENT16),Y}function P(I,E){return _(I)===!0||I.isFramebufferTexture&&I.minFilter!==An&&I.minFilter!==Un?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function k(I){const E=I.target;E.removeEventListener("dispose",k),U(E),E.isVideoTexture&&g.delete(E),E.isHTMLTexture&&v.delete(E)}function w(I){const E=I.target;E.removeEventListener("dispose",w),B(E)}function U(I){const E=r.get(I);if(E.__webglInit===void 0)return;const Y=I.source,ne=y.get(Y);if(ne){const ue=ne[E.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&H(I),Object.keys(ne).length===0&&y.delete(Y)}r.remove(I)}function H(I){const E=r.get(I);n.deleteTexture(E.__webglTexture);const Y=I.source,ne=y.get(Y);delete ne[E.__cacheKey],c.memory.textures--}function B(I){const E=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(E.__webglFramebuffer[ne]))for(let ue=0;ue<E.__webglFramebuffer[ne].length;ue++)n.deleteFramebuffer(E.__webglFramebuffer[ne][ue]);else n.deleteFramebuffer(E.__webglFramebuffer[ne]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[ne])}else{if(Array.isArray(E.__webglFramebuffer))for(let ne=0;ne<E.__webglFramebuffer.length;ne++)n.deleteFramebuffer(E.__webglFramebuffer[ne]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ne=0;ne<E.__webglColorRenderbuffer.length;ne++)E.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[ne]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=I.textures;for(let ne=0,ue=Y.length;ne<ue;ne++){const Me=r.get(Y[ne]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),c.memory.textures--),r.remove(Y[ne])}r.remove(I)}let $=0;function fe(){$=0}function de(){return $}function Q(I){$=I}function ce(){const I=$;return I>=o.maxTextures&&lt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),$+=1,I}function q(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function W(I,E){const Y=r.get(I);if(I.isVideoTexture&&j(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Y.__version!==I.version){const ne=I.image;if(ne===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(Y,I,E);return}}else I.isExternalTexture&&(Y.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+E)}function ae(I,E){const Y=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){Ue(Y,I,E);return}else I.isExternalTexture&&(Y.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+E)}function le(I,E){const Y=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){Ue(Y,I,E);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+E)}function O(I,E){const Y=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&Y.__version!==I.version){et(Y,I,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+E)}const K={[Ch]:n.REPEAT,[gr]:n.CLAMP_TO_EDGE,[Ph]:n.MIRRORED_REPEAT},Ie={[An]:n.NEAREST,[Qb]:n.NEAREST_MIPMAP_NEAREST,[_c]:n.NEAREST_MIPMAP_LINEAR,[Un]:n.LINEAR,[bd]:n.LINEAR_MIPMAP_NEAREST,[Is]:n.LINEAR_MIPMAP_LINEAR},$e={[tR]:n.NEVER,[oR]:n.ALWAYS,[nR]:n.LESS,[tm]:n.LEQUAL,[iR]:n.EQUAL,[nm]:n.GEQUAL,[rR]:n.GREATER,[sR]:n.NOTEQUAL};function Ve(I,E){if(E.type===ji&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Un||E.magFilter===bd||E.magFilter===_c||E.magFilter===Is||E.minFilter===Un||E.minFilter===bd||E.minFilter===_c||E.minFilter===Is)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,K[E.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,K[E.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,K[E.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,Ie[E.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,Ie[E.minFilter]),E.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,$e[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===An||E.minFilter!==_c&&E.minFilter!==Is||E.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function re(I,E){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",k));const ne=E.source;let ue=y.get(ne);ue===void 0&&(ue={},y.set(ne,ue));const Me=q(E);if(Me!==I.__cacheKey){ue[Me]===void 0&&(ue[Me]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,Y=!0),ue[Me].usedTimes++;const Re=ue[I.__cacheKey];Re!==void 0&&(ue[I.__cacheKey].usedTimes--,Re.usedTimes===0&&H(E)),I.__cacheKey=Me,I.__webglTexture=ue[Me].texture}return Y}function xe(I,E,Y){return Math.floor(Math.floor(I/Y)/E)}function me(I,E,Y,ne){const Me=I.updateRanges;if(Me.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,Y,ne,E.data);else{Me.sort((Ye,De)=>Ye.start-De.start);let Re=0;for(let Ye=1;Ye<Me.length;Ye++){const De=Me[Re],be=Me[Ye],Je=De.start+De.count,nt=xe(be.start,E.width,4),ot=xe(De.start,E.width,4);be.start<=Je+1&&nt===ot&&xe(be.start+be.count-1,E.width,4)===nt?De.count=Math.max(De.count,be.start+be.count-De.start):(++Re,Me[Re]=be)}Me.length=Re+1;const he=t.getParameter(n.UNPACK_ROW_LENGTH),ge=t.getParameter(n.UNPACK_SKIP_PIXELS),Pe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let Ye=0,De=Me.length;Ye<De;Ye++){const be=Me[Ye],Je=Math.floor(be.start/4),nt=Math.ceil(be.count/4),ot=Je%E.width,V=Math.floor(Je/E.width),Ae=nt,pe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ot),t.pixelStorei(n.UNPACK_SKIP_ROWS,V),t.texSubImage2D(n.TEXTURE_2D,0,ot,V,Ae,pe,Y,ne,E.data)}I.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,he),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(n.UNPACK_SKIP_ROWS,Pe)}}function Ue(I,E,Y){let ne=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=n.TEXTURE_3D);const ue=re(I,E),Me=E.source;t.bindTexture(ne,I.__webglTexture,n.TEXTURE0+Y);const Re=r.get(Me);if(Me.version!==Re.__version||ue===!0){if(t.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const pe=_t.getPrimaries(_t.workingColorSpace),Ce=E.colorSpace===es?null:_t.getPrimaries(E.colorSpace),Ne=E.colorSpace===es||pe===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let ge=S(E.image,!1,o.maxTextureSize);ge=Mn(E,ge);const Pe=a.convert(E.format,E.colorSpace),Ye=a.convert(E.type);let De=R(E.internalFormat,Pe,Ye,E.normalized,E.colorSpace,E.isVideoTexture);Ve(ne,E);let be;const Je=E.mipmaps,nt=E.isVideoTexture!==!0,ot=Re.__version===void 0||ue===!0,V=Me.dataReady,Ae=P(E,ge);if(E.isDepthTexture)De=N(E.format===Us,E.type),ot&&(nt?t.texStorage2D(n.TEXTURE_2D,1,De,ge.width,ge.height):t.texImage2D(n.TEXTURE_2D,0,De,ge.width,ge.height,0,Pe,Ye,null));else if(E.isDataTexture)if(Je.length>0){nt&&ot&&t.texStorage2D(n.TEXTURE_2D,Ae,De,Je[0].width,Je[0].height);for(let pe=0,Ce=Je.length;pe<Ce;pe++)be=Je[pe],nt?V&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,be.width,be.height,Pe,Ye,be.data):t.texImage2D(n.TEXTURE_2D,pe,De,be.width,be.height,0,Pe,Ye,be.data);E.generateMipmaps=!1}else nt?(ot&&t.texStorage2D(n.TEXTURE_2D,Ae,De,ge.width,ge.height),V&&me(E,ge,Pe,Ye)):t.texImage2D(n.TEXTURE_2D,0,De,ge.width,ge.height,0,Pe,Ye,ge.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){nt&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,De,Je[0].width,Je[0].height,ge.depth);for(let pe=0,Ce=Je.length;pe<Ce;pe++)if(be=Je[pe],E.format!==Ni)if(Pe!==null)if(nt){if(V)if(E.layerUpdates.size>0){const Ne=Ox(be.width,be.height,E.format,E.type);for(const ve of E.layerUpdates){const We=be.data.subarray(ve*Ne/be.data.BYTES_PER_ELEMENT,(ve+1)*Ne/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,ve,be.width,be.height,1,Pe,We)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,be.width,be.height,ge.depth,Pe,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pe,De,be.width,be.height,ge.depth,0,be.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?V&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,be.width,be.height,ge.depth,Pe,Ye,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,pe,De,be.width,be.height,ge.depth,0,Pe,Ye,be.data)}else{nt&&ot&&t.texStorage2D(n.TEXTURE_2D,Ae,De,Je[0].width,Je[0].height);for(let pe=0,Ce=Je.length;pe<Ce;pe++)be=Je[pe],E.format!==Ni?Pe!==null?nt?V&&t.compressedTexSubImage2D(n.TEXTURE_2D,pe,0,0,be.width,be.height,Pe,be.data):t.compressedTexImage2D(n.TEXTURE_2D,pe,De,be.width,be.height,0,be.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?V&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,be.width,be.height,Pe,Ye,be.data):t.texImage2D(n.TEXTURE_2D,pe,De,be.width,be.height,0,Pe,Ye,be.data)}else if(E.isDataArrayTexture)if(nt){if(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,De,ge.width,ge.height,ge.depth),V)if(E.layerUpdates.size>0){const pe=Ox(ge.width,ge.height,E.format,E.type);for(const Ce of E.layerUpdates){const Ne=ge.data.subarray(Ce*pe/ge.data.BYTES_PER_ELEMENT,(Ce+1)*pe/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ce,ge.width,ge.height,1,Pe,Ye,Ne)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Pe,Ye,ge.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ge.width,ge.height,ge.depth,0,Pe,Ye,ge.data);else if(E.isData3DTexture)nt?(ot&&t.texStorage3D(n.TEXTURE_3D,Ae,De,ge.width,ge.height,ge.depth),V&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Pe,Ye,ge.data)):t.texImage3D(n.TEXTURE_3D,0,De,ge.width,ge.height,ge.depth,0,Pe,Ye,ge.data);else if(E.isFramebufferTexture){if(ot)if(nt)t.texStorage2D(n.TEXTURE_2D,Ae,De,ge.width,ge.height);else{let pe=ge.width,Ce=ge.height;for(let Ne=0;Ne<Ae;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,De,pe,Ce,0,Pe,Ye,null),pe>>=1,Ce>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){const pe=n.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),ge.parentNode!==pe){pe.appendChild(ge),v.add(E),pe.onpaint=Ce=>{const Ne=Ce.changedElements;for(const ve of v)Ne.includes(ve.image)&&(ve.needsUpdate=!0)},pe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ge);else{const Ne=n.RGBA,ve=n.RGBA,We=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ne,ve,We,ge)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Je.length>0){if(nt&&ot){const pe=At(Je[0]);t.texStorage2D(n.TEXTURE_2D,Ae,De,pe.width,pe.height)}for(let pe=0,Ce=Je.length;pe<Ce;pe++)be=Je[pe],nt?V&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,Pe,Ye,be):t.texImage2D(n.TEXTURE_2D,pe,De,Pe,Ye,be);E.generateMipmaps=!1}else if(nt){if(ot){const pe=At(ge);t.texStorage2D(n.TEXTURE_2D,Ae,De,pe.width,pe.height)}V&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,Ye,ge)}else t.texImage2D(n.TEXTURE_2D,0,De,Pe,Ye,ge);_(E)&&D(ne),Re.__version=Me.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function et(I,E,Y){if(E.image.length!==6)return;const ne=re(I,E),ue=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+Y);const Me=r.get(ue);if(ue.version!==Me.__version||ne===!0){t.activeTexture(n.TEXTURE0+Y);const Re=_t.getPrimaries(_t.workingColorSpace),he=E.colorSpace===es?null:_t.getPrimaries(E.colorSpace),ge=E.colorSpace===es||Re===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Pe=E.isCompressedTexture||E.image[0].isCompressedTexture,Ye=E.image[0]&&E.image[0].isDataTexture,De=[];for(let ve=0;ve<6;ve++)!Pe&&!Ye?De[ve]=S(E.image[ve],!0,o.maxCubemapSize):De[ve]=Ye?E.image[ve].image:E.image[ve],De[ve]=Mn(E,De[ve]);const be=De[0],Je=a.convert(E.format,E.colorSpace),nt=a.convert(E.type),ot=R(E.internalFormat,Je,nt,E.normalized,E.colorSpace),V=E.isVideoTexture!==!0,Ae=Me.__version===void 0||ne===!0,pe=ue.dataReady;let Ce=P(E,be);Ve(n.TEXTURE_CUBE_MAP,E);let Ne;if(Pe){V&&Ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,ot,be.width,be.height);for(let ve=0;ve<6;ve++){Ne=De[ve].mipmaps;for(let We=0;We<Ne.length;We++){const He=Ne[We];E.format!==Ni?Je!==null?V?pe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We,0,0,He.width,He.height,Je,He.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We,ot,He.width,He.height,0,He.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We,0,0,He.width,He.height,Je,nt,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We,ot,He.width,He.height,0,Je,nt,He.data)}}}else{if(Ne=E.mipmaps,V&&Ae){Ne.length>0&&Ce++;const ve=At(De[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,ot,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ye){V?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,De[ve].width,De[ve].height,Je,nt,De[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ot,De[ve].width,De[ve].height,0,Je,nt,De[ve].data);for(let We=0;We<Ne.length;We++){const Ot=Ne[We].image[ve].image;V?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We+1,0,0,Ot.width,Ot.height,Je,nt,Ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We+1,ot,Ot.width,Ot.height,0,Je,nt,Ot.data)}}else{V?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Je,nt,De[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ot,Je,nt,De[ve]);for(let We=0;We<Ne.length;We++){const He=Ne[We];V?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We+1,0,0,Je,nt,He.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We+1,ot,Je,nt,He.image[ve])}}}_(E)&&D(n.TEXTURE_CUBE_MAP),Me.__version=ue.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function tt(I,E,Y,ne,ue,Me){const Re=a.convert(Y.format,Y.colorSpace),he=a.convert(Y.type),ge=R(Y.internalFormat,Re,he,Y.normalized,Y.colorSpace),Pe=r.get(E),Ye=r.get(Y);if(Ye.__renderTarget=E,!Pe.__hasExternalTextures){const De=Math.max(1,E.width>>Me),be=Math.max(1,E.height>>Me);ue===n.TEXTURE_3D||ue===n.TEXTURE_2D_ARRAY?t.texImage3D(ue,Me,ge,De,be,E.depth,0,Re,he,null):t.texImage2D(ue,Me,ge,De,be,0,Re,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),jt(E)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,ue,Ye.__webglTexture,0,Lt(E)):(ue===n.TEXTURE_2D||ue>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,ue,Ye.__webglTexture,Me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Gt(I,E,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,I),E.depthBuffer){const ne=E.depthTexture,ue=ne&&ne.isDepthTexture?ne.type:null,Me=N(E.stencilBuffer,ue),Re=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;jt(E)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt(E),Me,E.width,E.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt(E),Me,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Me,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,I)}else{const ne=E.textures;for(let ue=0;ue<ne.length;ue++){const Me=ne[ue],Re=a.convert(Me.format,Me.colorSpace),he=a.convert(Me.type),ge=R(Me.internalFormat,Re,he,Me.normalized,Me.colorSpace);jt(E)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt(E),ge,E.width,E.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt(E),ge,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ge,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function dt(I,E,Y){const ne=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ue=r.get(E.depthTexture);if(ue.__renderTarget=E,(!ue.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ne){if(ue.__webglInit===void 0&&(ue.__webglInit=!0,E.depthTexture.addEventListener("dispose",k)),ue.__webglTexture===void 0){ue.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ue.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,E.depthTexture);const Pe=a.convert(E.depthTexture.format),Ye=a.convert(E.depthTexture.type);let De;E.depthTexture.format===wr?De=n.DEPTH_COMPONENT24:E.depthTexture.format===Us&&(De=n.DEPTH24_STENCIL8);for(let be=0;be<6;be++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,De,E.width,E.height,0,Pe,Ye,null)}}else W(E.depthTexture,0);const Me=ue.__webglTexture,Re=Lt(E),he=ne?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,ge=E.depthTexture.format===Us?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===wr)jt(E)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,he,Me,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,ge,he,Me,0);else if(E.depthTexture.format===Us)jt(E)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,he,Me,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,ge,he,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Pt(I){const E=r.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const ne=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ne){const ue=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ne.removeEventListener("dispose",ue)};ne.addEventListener("dispose",ue),E.__depthDisposeCallback=ue}E.__boundDepthTexture=ne}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(Y)for(let ne=0;ne<6;ne++)dt(E.__webglFramebuffer[ne],I,ne);else{const ne=I.texture.mipmaps;ne&&ne.length>0?dt(E.__webglFramebuffer[0],I,0):dt(E.__webglFramebuffer,I,0)}else if(Y){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]===void 0)E.__webglDepthbuffer[ne]=n.createRenderbuffer(),Gt(E.__webglDepthbuffer[ne],I,!1);else{const ue=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=E.__webglDepthbuffer[ne];n.bindRenderbuffer(n.RENDERBUFFER,Me),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,Me)}}else{const ne=I.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),Gt(E.__webglDepthbuffer,I,!1);else{const ue=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Me),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,Me)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function St(I,E,Y){const ne=r.get(I);E!==void 0&&tt(ne.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&Pt(I)}function vt(I){const E=I.texture,Y=r.get(I),ne=r.get(E);I.addEventListener("dispose",w);const ue=I.textures,Me=I.isWebGLCubeRenderTarget===!0,Re=ue.length>1;if(Re||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=E.version,c.memory.textures++),Me){Y.__webglFramebuffer=[];for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[he]=[];for(let ge=0;ge<E.mipmaps.length;ge++)Y.__webglFramebuffer[he][ge]=n.createFramebuffer()}else Y.__webglFramebuffer[he]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let he=0;he<E.mipmaps.length;he++)Y.__webglFramebuffer[he]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Re)for(let he=0,ge=ue.length;he<ge;he++){const Pe=r.get(ue[he]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),c.memory.textures++)}if(I.samples>0&&jt(I)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let he=0;he<ue.length;he++){const ge=ue[he];Y.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[he]);const Pe=a.convert(ge.format,ge.colorSpace),Ye=a.convert(ge.type),De=R(ge.internalFormat,Pe,Ye,ge.normalized,ge.colorSpace,I.isXRRenderTarget===!0),be=Lt(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,De,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,Y.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),Gt(Y.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Me){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,E);for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)tt(Y.__webglFramebuffer[he][ge],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ge);else tt(Y.__webglFramebuffer[he],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);_(E)&&D(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let he=0,ge=ue.length;he<ge;he++){const Pe=ue[he],Ye=r.get(Pe);let De=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(De=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(De,Ye.__webglTexture),Ve(De,Pe),tt(Y.__webglFramebuffer,I,Pe,n.COLOR_ATTACHMENT0+he,De,0),_(Pe)&&D(De)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(he=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,ne.__webglTexture),Ve(he,E),E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)tt(Y.__webglFramebuffer[ge],I,E,n.COLOR_ATTACHMENT0,he,ge);else tt(Y.__webglFramebuffer,I,E,n.COLOR_ATTACHMENT0,he,0);_(E)&&D(he),t.unbindTexture()}I.depthBuffer&&Pt(I)}function Wt(I){const E=I.textures;for(let Y=0,ne=E.length;Y<ne;Y++){const ue=E[Y];if(_(ue)){const Me=L(I),Re=r.get(ue).__webglTexture;t.bindTexture(Me,Re),D(Me),t.unbindTexture()}}}const Jt=[],en=[];function qt(I){if(I.samples>0){if(jt(I)===!1){const E=I.textures,Y=I.width,ne=I.height;let ue=n.COLOR_BUFFER_BIT;const Me=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=r.get(I),he=E.length>1;if(he)for(let Pe=0;Pe<E.length;Pe++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const ge=I.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Pe=0;Pe<E.length;Pe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ue|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ue|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Pe]);const Ye=r.get(E[Pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,Y,ne,0,0,Y,ne,ue,n.NEAREST),d===!0&&(Jt.length=0,en.length=0,Jt.push(n.COLOR_ATTACHMENT0+Pe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Jt.push(Me),en.push(Me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,en)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Jt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Pe=0;Pe<E.length;Pe++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Pe]);const Ye=r.get(E[Pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&d){const E=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Lt(I){return Math.min(o.maxSamples,I.samples)}function jt(I){const E=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function j(I){const E=c.render.frame;g.get(I)!==E&&(g.set(I,E),I.update())}function Mn(I,E){const Y=I.colorSpace,ne=I.format,ue=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Y!==cu&&Y!==es&&(_t.getTransfer(Y)===Ft?(ne!==Ni||ue!==vi)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",Y)),E}function At(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=ce,this.resetTextureUnits=fe,this.getTextureUnits=de,this.setTextureUnits=Q,this.setTexture2D=W,this.setTexture2DArray=ae,this.setTexture3D=le,this.setTextureCube=O,this.rebindTextures=St,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function DD(n,e){function t(r,o=es){let a;const c=_t.getTransfer(o);if(r===vi)return n.UNSIGNED_BYTE;if(r===Kp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Zp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===iS)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===rS)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===tS)return n.BYTE;if(r===nS)return n.SHORT;if(r===tl)return n.UNSIGNED_SHORT;if(r===$p)return n.INT;if(r===Ji)return n.UNSIGNED_INT;if(r===ji)return n.FLOAT;if(r===Er)return n.HALF_FLOAT;if(r===sS)return n.ALPHA;if(r===oS)return n.RGB;if(r===Ni)return n.RGBA;if(r===wr)return n.DEPTH_COMPONENT;if(r===Us)return n.DEPTH_STENCIL;if(r===aS)return n.RED;if(r===Qp)return n.RED_INTEGER;if(r===zs)return n.RG;if(r===Jp)return n.RG_INTEGER;if(r===em)return n.RGBA_INTEGER;if(r===qc||r===$c||r===Kc||r===Zc)if(c===Ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===qc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$c)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Kc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Zc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===qc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$c)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Kc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Zc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Dh||r===Nh||r===Lh||r===Ih)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Dh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Nh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Lh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ih)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Uh||r===Fh||r===Oh||r===kh||r===zh||r===au||r===Bh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Uh||r===Fh)return c===Ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Oh)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(r===kh)return a.COMPRESSED_R11_EAC;if(r===zh)return a.COMPRESSED_SIGNED_R11_EAC;if(r===au)return a.COMPRESSED_RG11_EAC;if(r===Bh)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Vh||r===Hh||r===Gh||r===Wh||r===jh||r===Xh||r===Yh||r===qh||r===$h||r===Kh||r===Zh||r===Qh||r===Jh||r===ep)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Vh)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Hh)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gh)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wh)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===jh)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Xh)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Yh)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===qh)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===$h)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Kh)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zh)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Qh)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Jh)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ep)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===tp||r===np||r===ip)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===tp)return c===Ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===np)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ip)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===rp||r===sp||r===lu||r===op)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===rp)return a.COMPRESSED_RED_RGTC1_EXT;if(r===sp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===lu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===op)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===nl?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const ND=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LD=`
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

}`;class ID{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new vS(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ui({vertexShader:ND,fragmentShader:LD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new er(new fl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UD extends Gs{constructor(e,t){super();const r=this;let o=null,a=1,c=null,f="local-floor",d=1,h=null,g=null,v=null,m=null,y=null,M=null;const A=typeof XRWebGLBinding<"u",S=new ID,_={},D=t.getContextAttributes();let L=null,R=null;const N=[],P=[],k=new Ct;let w=null;const U=new Pi;U.viewport=new sn;const H=new Pi;H.viewport=new sn;const B=[U,H],$=new jR;let fe=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let xe=N[re];return xe===void 0&&(xe=new Ud,N[re]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(re){let xe=N[re];return xe===void 0&&(xe=new Ud,N[re]=xe),xe.getGripSpace()},this.getHand=function(re){let xe=N[re];return xe===void 0&&(xe=new Ud,N[re]=xe),xe.getHandSpace()};function Q(re){const xe=P.indexOf(re.inputSource);if(xe===-1)return;const me=N[xe];me!==void 0&&(me.update(re.inputSource,re.frame,h||c),me.dispatchEvent({type:re.type,data:re.inputSource}))}function ce(){o.removeEventListener("select",Q),o.removeEventListener("selectstart",Q),o.removeEventListener("selectend",Q),o.removeEventListener("squeeze",Q),o.removeEventListener("squeezestart",Q),o.removeEventListener("squeezeend",Q),o.removeEventListener("end",ce),o.removeEventListener("inputsourceschange",q);for(let re=0;re<N.length;re++){const xe=P[re];xe!==null&&(P[re]=null,N[re].disconnect(xe))}fe=null,de=null,S.reset();for(const re in _)delete _[re];e.setRenderTarget(L),y=null,m=null,v=null,o=null,R=null,Ve.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){a=re,r.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){f=re,r.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(re){h=re},this.getBaseLayer=function(){return m!==null?m:y},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",Q),o.addEventListener("selectstart",Q),o.addEventListener("selectend",Q),o.addEventListener("squeeze",Q),o.addEventListener("squeezestart",Q),o.addEventListener("squeezeend",Q),o.addEventListener("end",ce),o.addEventListener("inputsourceschange",q),D.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(k),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ue=null,et=null;D.depth&&(et=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=D.stencil?Us:wr,Ue=D.stencil?nl:Ji);const tt={colorFormat:t.RGBA8,depthFormat:et,scaleFactor:a};v=this.getBinding(),m=v.createProjectionLayer(tt),o.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),R=new Ki(m.textureWidth,m.textureHeight,{format:Ni,type:vi,depthTexture:new Vo(m.textureWidth,m.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const me={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(o,t,me),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),R=new Ki(y.framebufferWidth,y.framebufferHeight,{format:Ni,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await o.requestReferenceSpace(f),Ve.setContext(o),Ve.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function q(re){for(let xe=0;xe<re.removed.length;xe++){const me=re.removed[xe],Ue=P.indexOf(me);Ue>=0&&(P[Ue]=null,N[Ue].disconnect(me))}for(let xe=0;xe<re.added.length;xe++){const me=re.added[xe];let Ue=P.indexOf(me);if(Ue===-1){for(let tt=0;tt<N.length;tt++)if(tt>=P.length){P.push(me),Ue=tt;break}else if(P[tt]===null){P[tt]=me,Ue=tt;break}if(Ue===-1)break}const et=N[Ue];et&&et.connect(me)}}const W=new ie,ae=new ie;function le(re,xe,me){W.setFromMatrixPosition(xe.matrixWorld),ae.setFromMatrixPosition(me.matrixWorld);const Ue=W.distanceTo(ae),et=xe.projectionMatrix.elements,tt=me.projectionMatrix.elements,Gt=et[14]/(et[10]-1),dt=et[14]/(et[10]+1),Pt=(et[9]+1)/et[5],St=(et[9]-1)/et[5],vt=(et[8]-1)/et[0],Wt=(tt[8]+1)/tt[0],Jt=Gt*vt,en=Gt*Wt,qt=Ue/(-vt+Wt),Lt=qt*-vt;if(xe.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Lt),re.translateZ(qt),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),et[10]===-1)re.projectionMatrix.copy(xe.projectionMatrix),re.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const jt=Gt+qt,j=dt+qt,Mn=Jt-Lt,At=en+(Ue-Lt),I=Pt*dt/j*jt,E=St*dt/j*jt;re.projectionMatrix.makePerspective(Mn,At,I,E,jt,j),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function O(re,xe){xe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(xe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let xe=re.near,me=re.far;S.texture!==null&&(S.depthNear>0&&(xe=S.depthNear),S.depthFar>0&&(me=S.depthFar)),$.near=H.near=U.near=xe,$.far=H.far=U.far=me,(fe!==$.near||de!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),fe=$.near,de=$.far),$.layers.mask=re.layers.mask|6,U.layers.mask=$.layers.mask&-5,H.layers.mask=$.layers.mask&-3;const Ue=re.parent,et=$.cameras;O($,Ue);for(let tt=0;tt<et.length;tt++)O(et[tt],Ue);et.length===2?le($,U,H):$.projectionMatrix.copy(U.projectionMatrix),K(re,$,Ue)};function K(re,xe,me){me===null?re.matrix.copy(xe.matrixWorld):(re.matrix.copy(me.matrixWorld),re.matrix.invert(),re.matrix.multiply(xe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(xe.projectionMatrix),re.projectionMatrixInverse.copy(xe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=ap*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(m===null&&y===null))return d},this.setFoveation=function(re){d=re,m!==null&&(m.fixedFoveation=re),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=re)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh($)},this.getCameraTexture=function(re){return _[re]};let Ie=null;function $e(re,xe){if(g=xe.getViewerPose(h||c),M=xe,g!==null){const me=g.views;y!==null&&(e.setRenderTargetFramebuffer(R,y.framebuffer),e.setRenderTarget(R));let Ue=!1;me.length!==$.cameras.length&&($.cameras.length=0,Ue=!0);for(let dt=0;dt<me.length;dt++){const Pt=me[dt];let St=null;if(y!==null)St=y.getViewport(Pt);else{const Wt=v.getViewSubImage(m,Pt);St=Wt.viewport,dt===0&&(e.setRenderTargetTextures(R,Wt.colorTexture,Wt.depthStencilTexture),e.setRenderTarget(R))}let vt=B[dt];vt===void 0&&(vt=new Pi,vt.layers.enable(dt),vt.viewport=new sn,B[dt]=vt),vt.matrix.fromArray(Pt.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(Pt.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(St.x,St.y,St.width,St.height),dt===0&&($.matrix.copy(vt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Ue===!0&&$.cameras.push(vt)}const et=o.enabledFeatures;if(et&&et.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){v=r.getBinding();const dt=v.getDepthInformation(me[0]);dt&&dt.isValid&&dt.texture&&S.init(dt,o.renderState)}if(et&&et.includes("camera-access")&&A){e.state.unbindTexture(),v=r.getBinding();for(let dt=0;dt<me.length;dt++){const Pt=me[dt].camera;if(Pt){let St=_[Pt];St||(St=new vS,_[Pt]=St);const vt=v.getCameraImage(Pt);St.sourceTexture=vt}}}}for(let me=0;me<N.length;me++){const Ue=P[me],et=N[me];Ue!==null&&et!==void 0&&et.update(Ue,xe,h||c)}Ie&&Ie(re,xe),xe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xe}),M=null}const Ve=new yS;Ve.setAnimationLoop($e),this.setAnimationLoop=function(re){Ie=re},this.dispose=function(){}}}const FD=new fn,bS=new ft;bS.set(-1,0,0,0,1,0,0,0,1);function OD(n,e){function t(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,xS(n)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function o(S,_,D,L,R){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?a(S,_):_.isMeshLambertMaterial?(a(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(a(S,_),v(S,_)):_.isMeshPhongMaterial?(a(S,_),g(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(a(S,_),m(S,_),_.isMeshPhysicalMaterial&&y(S,_,R)):_.isMeshMatcapMaterial?(a(S,_),M(S,_)):_.isMeshDepthMaterial?a(S,_):_.isMeshDistanceMaterial?(a(S,_),A(S,_)):_.isMeshNormalMaterial?a(S,_):_.isLineBasicMaterial?(c(S,_),_.isLineDashedMaterial&&f(S,_)):_.isPointsMaterial?d(S,_,D,L):_.isSpriteMaterial?h(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function a(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,t(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Zn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,t(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Zn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,t(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,t(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const D=e.get(_),L=D.envMap,R=D.envMapRotation;L&&(S.envMap.value=L,S.envMapRotation.value.setFromMatrix4(FD.makeRotationFromEuler(R)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(bS),S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,S.aoMapTransform))}function c(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform))}function f(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function d(S,_,D,L){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*D,S.scale.value=L*.5,_.map&&(S.map.value=_.map,t(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function h(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function m(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function y(S,_,D){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Zn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,_){_.matcap&&(S.matcap.value=_.matcap)}function A(S,_){const D=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function kD(n,e,t,r){let o={},a={},c=[];const f=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(R,N){const P=N.program;r.uniformBlockBinding(R,P)}function h(R,N){let P=o[R.id];P===void 0&&(S(R),P=g(R),o[R.id]=P,R.addEventListener("dispose",D));const k=N.program;r.updateUBOMapping(R,k);const w=e.render.frame;a[R.id]!==w&&(m(R),a[R.id]=w)}function g(R){const N=v();R.__bindingPointIndex=N;const P=n.createBuffer(),k=R.__size,w=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,P),n.bufferData(n.UNIFORM_BUFFER,k,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,N,P),P}function v(){for(let R=0;R<f;R++)if(c.indexOf(R)===-1)return c.push(R),R;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(R){const N=o[R.id],P=R.uniforms,k=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,N);for(let w=0,U=P.length;w<U;w++){const H=P[w];if(Array.isArray(H))for(let B=0,$=H.length;B<$;B++)y(H[B],w,B,k);else y(H,w,0,k)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function y(R,N,P,k){if(A(R,N,P,k)===!0){const w=R.__offset,U=R.value;if(Array.isArray(U)){let H=0;for(let B=0;B<U.length;B++){const $=U[B],fe=_($);M($,R.__data,H),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(H+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(U,R.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,R.__data)}}function M(R,N,P){typeof R=="number"||typeof R=="boolean"?N[0]=R:R.isMatrix3?(N[0]=R.elements[0],N[1]=R.elements[1],N[2]=R.elements[2],N[3]=0,N[4]=R.elements[3],N[5]=R.elements[4],N[6]=R.elements[5],N[7]=0,N[8]=R.elements[6],N[9]=R.elements[7],N[10]=R.elements[8],N[11]=0):ArrayBuffer.isView(R)?N.set(new R.constructor(R.buffer,R.byteOffset,N.length)):R.toArray(N,P)}function A(R,N,P,k){const w=R.value,U=N+"_"+P;if(k[U]===void 0)return typeof w=="number"||typeof w=="boolean"?k[U]=w:ArrayBuffer.isView(w)?k[U]=w.slice():k[U]=w.clone(),!0;{const H=k[U];if(typeof w=="number"||typeof w=="boolean"){if(H!==w)return k[U]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(H.equals(w)===!1)return H.copy(w),!0}}return!1}function S(R){const N=R.uniforms;let P=0;const k=16;for(let U=0,H=N.length;U<H;U++){const B=Array.isArray(N[U])?N[U]:[N[U]];for(let $=0,fe=B.length;$<fe;$++){const de=B[$],Q=Array.isArray(de.value)?de.value:[de.value];for(let ce=0,q=Q.length;ce<q;ce++){const W=Q[ce],ae=_(W),le=P%k,O=le%ae.boundary,K=le+O;P+=O,K!==0&&k-K<ae.storage&&(P+=k-K),de.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),de.__offset=P,P+=ae.storage}}}const w=P%k;return w>0&&(P+=k-w),R.__size=P,R.__cache={},this}function _(R){const N={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(N.boundary=4,N.storage=4):R.isVector2?(N.boundary=8,N.storage=8):R.isVector3||R.isColor?(N.boundary=16,N.storage=12):R.isVector4?(N.boundary=16,N.storage=16):R.isMatrix3?(N.boundary=48,N.storage=48):R.isMatrix4?(N.boundary=64,N.storage=64):R.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(N.boundary=16,N.storage=R.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",R),N}function D(R){const N=R.target;N.removeEventListener("dispose",D);const P=c.indexOf(N.__bindingPointIndex);c.splice(P,1),n.deleteBuffer(o[N.id]),delete o[N.id],delete a[N.id]}function L(){for(const R in o)n.deleteBuffer(o[R]);c=[],o={},a={}}return{bind:d,update:h,dispose:L}}const zD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function BD(){return Hi===null&&(Hi=new NR(zD,16,16,zs,Er),Hi.name="DFG_LUT",Hi.minFilter=Un,Hi.magFilter=Un,Hi.wrapS=gr,Hi.wrapT=gr,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class VD{constructor(e={}){const{canvas:t=lR(),context:r=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:m=!1,outputBufferType:y=vi}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=c;const A=y,S=new Set([em,Jp,Qp]),_=new Set([vi,Ji,tl,nl,Kp,Zp]),D=new Uint32Array(4),L=new Int32Array(4),R=new ie;let N=null,P=null;const k=[],w=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const H=this;let B=!1,$=null,fe=null,de=null,Q=null;this._outputColorSpace=gi;let ce=0,q=0,W=null,ae=-1,le=null;const O=new sn,K=new sn;let Ie=null;const $e=new Tt(0);let Ve=0,re=t.width,xe=t.height,me=1,Ue=null,et=null;const tt=new sn(0,0,re,xe),Gt=new sn(0,0,re,xe);let dt=!1;const Pt=new mS;let St=!1,vt=!1;const Wt=new fn,Jt=new ie,en=new sn,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function jt(){return W===null?me:1}let j=r;function Mn(b,X){return t.getContext(b,X)}try{const b={alpha:!0,depth:o,stencil:a,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qp}`),t.addEventListener("webglcontextlost",Ot,!1),t.addEventListener("webglcontextrestored",Dt,!1),t.addEventListener("webglcontextcreationerror",bn,!1),j===null){const X="webgl2";if(j=Mn(X,b),j===null)throw Mn(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw wt("WebGLRenderer: "+b.message),b}let At,I,E,Y,ne,ue,Me,Re,he,ge,Pe,Ye,De,be,Je,nt,ot,V,Ae,pe,Ce,Ne,ve;function We(){At=new B3(j),At.init(),Ce=new DD(j,At),I=new N3(j,At,e,Ce),E=new CD(j,At),I.reversedDepthBuffer&&m&&E.buffers.depth.setReversed(!0),fe=j.createFramebuffer(),de=j.createFramebuffer(),Q=j.createFramebuffer(),Y=new G3(j),ne=new mD,ue=new PD(j,At,E,ne,I,Ce,Y),Me=new z3(H),Re=new YR(j),Ne=new P3(j,Re),he=new V3(j,Re,Y,Ne),ge=new j3(j,he,Re,Ne,Y),V=new W3(j,I,ue),Je=new L3(ne),Pe=new pD(H,Me,At,I,Ne,Je),Ye=new OD(H,ne),De=new vD,be=new ED(At),ot=new C3(H,Me,E,ge,M,d),nt=new RD(H,ge,I),ve=new kD(j,Y,I,E),Ae=new D3(j,At,Y),pe=new H3(j,At,Y),Y.programs=Pe.programs,H.capabilities=I,H.extensions=At,H.properties=ne,H.renderLists=De,H.shadowMap=nt,H.state=E,H.info=Y}We(),A!==vi&&(U=new Y3(A,t.width,t.height,f,o,a));const He=new UD(H,j);this.xr=He,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const b=At.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=At.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(b){b!==void 0&&(me=b,this.setSize(re,xe,!1))},this.getSize=function(b){return b.set(re,xe)},this.setSize=function(b,X,se=!0){if(He.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}re=b,xe=X,t.width=Math.floor(b*me),t.height=Math.floor(X*me),se===!0&&(t.style.width=b+"px",t.style.height=X+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(re*me,xe*me).floor()},this.setDrawingBufferSize=function(b,X,se){re=b,xe=X,me=se,t.width=Math.floor(b*se),t.height=Math.floor(X*se),this.setViewport(0,0,b,X)},this.setEffects=function(b){if(A===vi){wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let X=0;X<b.length;X++)if(b[X].isOutputPass===!0){lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(O)},this.getViewport=function(b){return b.copy(tt)},this.setViewport=function(b,X,se,ee){b.isVector4?tt.set(b.x,b.y,b.z,b.w):tt.set(b,X,se,ee),E.viewport(O.copy(tt).multiplyScalar(me).round())},this.getScissor=function(b){return b.copy(Gt)},this.setScissor=function(b,X,se,ee){b.isVector4?Gt.set(b.x,b.y,b.z,b.w):Gt.set(b,X,se,ee),E.scissor(K.copy(Gt).multiplyScalar(me).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(b){E.setScissorTest(dt=b)},this.setOpaqueSort=function(b){Ue=b},this.setTransparentSort=function(b){et=b},this.getClearColor=function(b){return b.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(b=!0,X=!0,se=!0){let ee=0;if(b){let J=!1;if(W!==null){const Te=W.texture.format;J=S.has(Te)}if(J){const Te=W.texture.type,ke=_.has(Te),we=ot.getClearColor(),je=ot.getClearAlpha(),Ze=we.r,ct=we.g,ut=we.b;ke?(D[0]=Ze,D[1]=ct,D[2]=ut,D[3]=je,j.clearBufferuiv(j.COLOR,0,D)):(L[0]=Ze,L[1]=ct,L[2]=ut,L[3]=je,j.clearBufferiv(j.COLOR,0,L))}else ee|=j.COLOR_BUFFER_BIT}X&&(ee|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(ee|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&j.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),$=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Ot,!1),t.removeEventListener("webglcontextrestored",Dt,!1),t.removeEventListener("webglcontextcreationerror",bn,!1),ot.dispose(),De.dispose(),be.dispose(),ne.dispose(),Me.dispose(),ge.dispose(),Ne.dispose(),ve.dispose(),Pe.dispose(),He.dispose(),He.removeEventListener("sessionstart",dl),He.removeEventListener("sessionend",hl),Fn.stop()};function Ot(b){b.preventDefault(),xx("WebGLRenderer: Context Lost."),B=!0}function Dt(){xx("WebGLRenderer: Context Restored."),B=!1;const b=Y.autoReset,X=nt.enabled,se=nt.autoUpdate,ee=nt.needsUpdate,J=nt.type;We(),Y.autoReset=b,nt.enabled=X,nt.autoUpdate=se,nt.needsUpdate=ee,nt.type=J}function bn(b){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function oi(b){const X=b.target;X.removeEventListener("dispose",oi),ss(X)}function ss(b){Ws(b),ne.remove(b)}function Ws(b){const X=ne.get(b).programs;X!==void 0&&(X.forEach(function(se){Pe.releaseProgram(se)}),b.isShaderMaterial&&Pe.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,se,ee,J,Te){X===null&&(X=qt);const ke=J.isMesh&&J.matrixWorld.determinantAffine()<0,we=$t(b,X,se,ee,J);E.setMaterial(ee,ke);let je=se.index,Ze=1;if(ee.wireframe===!0){if(je=he.getWireframeAttribute(se),je===void 0)return;Ze=2}const ct=se.drawRange,ut=se.attributes.position;let qe=ct.start*Ze,Mt=(ct.start+ct.count)*Ze;Te!==null&&(qe=Math.max(qe,Te.start*Ze),Mt=Math.min(Mt,(Te.start+Te.count)*Ze)),je!==null?(qe=Math.max(qe,0),Mt=Math.min(Mt,je.count)):ut!=null&&(qe=Math.max(qe,0),Mt=Math.min(Mt,ut.count));const kt=Mt-qe;if(kt<0||kt===1/0)return;Ne.setup(J,ee,we,se,je);let Xt,It=Ae;if(je!==null&&(Xt=Re.get(je),It=pe,It.setIndex(Xt)),J.isMesh)ee.wireframe===!0?(E.setLineWidth(ee.wireframeLinewidth*jt()),It.setMode(j.LINES)):It.setMode(j.TRIANGLES);else if(J.isLine){let ln=ee.linewidth;ln===void 0&&(ln=1),E.setLineWidth(ln*jt()),J.isLineSegments?It.setMode(j.LINES):J.isLineLoop?It.setMode(j.LINE_LOOP):It.setMode(j.LINE_STRIP)}else J.isPoints?It.setMode(j.POINTS):J.isSprite&&It.setMode(j.TRIANGLES);if(J.isBatchedMesh)if(At.get("WEBGL_multi_draw"))It.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const ln=J._multiDrawStarts,Fe=J._multiDrawCounts,En=J._multiDrawCount,pt=je?Re.get(je).bytesPerElement:1,Hn=ne.get(ee).currentProgram.getUniforms();for(let Gn=0;Gn<En;Gn++)Hn.setValue(j,"_gl_DrawID",Gn),It.render(ln[Gn]/pt,Fe[Gn])}else if(J.isInstancedMesh)It.renderInstances(qe,kt,J.count);else if(se.isInstancedBufferGeometry){const ln=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Fe=Math.min(se.instanceCount,ln);It.renderInstances(qe,kt,Fe)}else It.render(qe,kt)};function os(b,X,se){b.transparent===!0&&b.side===mr&&b.forceSinglePass===!1?(b.side=Zn,b.needsUpdate=!0,cs(b,X,se),b.side=is,b.needsUpdate=!0,cs(b,X,se),b.side=mr):cs(b,X,se)}this.compile=function(b,X,se=null){se===null&&(se=b),P=be.get(se),P.init(X),w.push(P),se.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(P.pushLight(J),J.castShadow&&P.pushShadow(J))}),b!==se&&b.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(P.pushLight(J),J.castShadow&&P.pushShadow(J))}),P.setupLights();const ee=new Set;return b.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Te=J.material;if(Te)if(Array.isArray(Te))for(let ke=0;ke<Te.length;ke++){const we=Te[ke];os(we,se,J),ee.add(we)}else os(Te,se,J),ee.add(Te)}),P=w.pop(),ee},this.compileAsync=function(b,X,se=null){const ee=this.compile(b,X,se);return new Promise(J=>{function Te(){if(ee.forEach(function(ke){ne.get(ke).currentProgram.isReady()&&ee.delete(ke)}),ee.size===0){J(b);return}setTimeout(Te,10)}At.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let as=null;function bu(b){as&&as(b)}function dl(){Fn.stop()}function hl(){Fn.start()}const Fn=new yS;Fn.setAnimationLoop(bu),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(b){as=b,He.setAnimationLoop(b),b===null?Fn.stop():Fn.start()},He.addEventListener("sessionstart",dl),He.addEventListener("sessionend",hl),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;$!==null&&$.renderStart(b,X);const se=He.enabled===!0&&He.isPresenting===!0,ee=U!==null&&(W===null||se)&&U.begin(H,W);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(X),X=He.getCamera()),b.isScene===!0&&b.onBeforeRender(H,b,X,W),P=be.get(b,w.length),P.init(X),P.state.textureUnits=ue.getTextureUnits(),w.push(P),Wt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Pt.setFromProjectionMatrix(Wt,Xi,X.reversedDepth),vt=this.localClippingEnabled,St=Je.init(this.clippingPlanes,vt),N=De.get(b,k.length),N.init(),k.push(N),He.enabled===!0&&He.isPresenting===!0){const ke=H.xr.getDepthSensingMesh();ke!==null&&js(ke,X,-1/0,H.sortObjects)}js(b,X,0,H.sortObjects),N.finish(),H.sortObjects===!0&&N.sort(Ue,et,X.reversedDepth),Lt=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,Lt&&ot.addToRenderList(N,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),St===!0&&Je.beginShadows();const J=P.state.shadowsArray;if(nt.render(J,b,X),St===!0&&Je.endShadows(),(ee&&U.hasRenderPass())===!1){const ke=N.opaque,we=N.transmissive;if(P.setupLights(),X.isArrayCamera){const je=X.cameras;if(we.length>0)for(let Ze=0,ct=je.length;Ze<ct;Ze++){const ut=je[Ze];pl(ke,we,b,ut)}Lt&&ot.render(b);for(let Ze=0,ct=je.length;Ze<ct;Ze++){const ut=je[Ze];qo(N,b,ut,ut.viewport)}}else we.length>0&&pl(ke,we,b,X),Lt&&ot.render(b),qo(N,b,X)}W!==null&&q===0&&(ue.updateMultisampleRenderTarget(W),ue.updateRenderTargetMipmap(W)),ee&&U.end(H),b.isScene===!0&&b.onAfterRender(H,b,X),Ne.resetDefaultState(),ae=-1,le=null,w.pop(),w.length>0?(P=w[w.length-1],ue.setTextureUnits(P.state.textureUnits),St===!0&&Je.setGlobalState(H.clippingPlanes,P.state.camera)):P=null,k.pop(),k.length>0?N=k[k.length-1]:N=null,$!==null&&$.renderEnd()};function js(b,X,se,ee){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)se=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLightProbeGrid)P.pushLightProbeGrid(b);else if(b.isLight)P.pushLight(b),b.castShadow&&P.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Pt.intersectsSprite(b)){ee&&en.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Wt);const ke=ge.update(b),we=b.material;we.visible&&N.push(b,ke,we,se,en.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Pt.intersectsObject(b))){const ke=ge.update(b),we=b.material;if(ee&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),en.copy(b.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),en.copy(ke.boundingSphere.center)),en.applyMatrix4(b.matrixWorld).applyMatrix4(Wt)),Array.isArray(we)){const je=ke.groups;for(let Ze=0,ct=je.length;Ze<ct;Ze++){const ut=je[Ze],qe=we[ut.materialIndex];qe&&qe.visible&&N.push(b,ke,qe,se,en.z,ut)}}else we.visible&&N.push(b,ke,we,se,en.z,null)}}const Te=b.children;for(let ke=0,we=Te.length;ke<we;ke++)js(Te[ke],X,se,ee)}function qo(b,X,se,ee){const{opaque:J,transmissive:Te,transparent:ke}=b;P.setupLightsView(se),St===!0&&Je.setGlobalState(H.clippingPlanes,se),ee&&E.viewport(O.copy(ee)),J.length>0&&ls(J,X,se),Te.length>0&&ls(Te,X,se),ke.length>0&&ls(ke,X,se),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function pl(b,X,se,ee){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ee.id]===void 0){const qe=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ee.id]=new Ki(1,1,{generateMipmaps:!0,type:qe?Er:vi,minFilter:Is,samples:Math.max(4,I.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace})}const Te=P.state.transmissionRenderTarget[ee.id],ke=ee.viewport||O;Te.setSize(ke.z*H.transmissionResolutionScale,ke.w*H.transmissionResolutionScale);const we=H.getRenderTarget(),je=H.getActiveCubeFace(),Ze=H.getActiveMipmapLevel();H.setRenderTarget(Te),H.getClearColor($e),Ve=H.getClearAlpha(),Ve<1&&H.setClearColor(16777215,.5),H.clear(),Lt&&ot.render(se);const ct=H.toneMapping;H.toneMapping=$i;const ut=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),P.setupLightsView(ee),St===!0&&Je.setGlobalState(H.clippingPlanes,ee),ls(b,se,ee),ue.updateMultisampleRenderTarget(Te),ue.updateRenderTargetMipmap(Te),At.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Mt=0,kt=X.length;Mt<kt;Mt++){const Xt=X[Mt],{object:It,geometry:ln,material:Fe,group:En}=Xt;if(Fe.side===mr&&It.layers.test(ee.layers)){const pt=Fe.side;Fe.side=Zn,Fe.needsUpdate=!0,$o(It,se,ee,ln,Fe,En),Fe.side=pt,Fe.needsUpdate=!0,qe=!0}}qe===!0&&(ue.updateMultisampleRenderTarget(Te),ue.updateRenderTargetMipmap(Te))}H.setRenderTarget(we,je,Ze),H.setClearColor($e,Ve),ut!==void 0&&(ee.viewport=ut),H.toneMapping=ct}function ls(b,X,se){const ee=X.isScene===!0?X.overrideMaterial:null;for(let J=0,Te=b.length;J<Te;J++){const ke=b[J],{object:we,geometry:je,group:Ze}=ke;let ct=ke.material;ct.allowOverride===!0&&ee!==null&&(ct=ee),we.layers.test(se.layers)&&$o(we,X,se,je,ct,Ze)}}function $o(b,X,se,ee,J,Te){b.onBeforeRender(H,X,se,ee,J,Te),b.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),J.onBeforeRender(H,X,se,ee,b,Te),J.transparent===!0&&J.side===mr&&J.forceSinglePass===!1?(J.side=Zn,J.needsUpdate=!0,H.renderBufferDirect(se,X,ee,J,b,Te),J.side=is,J.needsUpdate=!0,H.renderBufferDirect(se,X,ee,J,b,Te),J.side=mr):H.renderBufferDirect(se,X,ee,J,b,Te),b.onAfterRender(H,X,se,ee,J,Te)}function cs(b,X,se){X.isScene!==!0&&(X=qt);const ee=ne.get(b),J=P.state.lights,Te=P.state.shadowsArray,ke=J.state.version,we=Pe.getParameters(b,J.state,Te,X,se,P.state.lightProbeGridArray),je=Pe.getProgramCacheKey(we);let Ze=ee.programs;ee.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?X.environment:null,ee.fog=X.fog;const ct=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;ee.envMap=Me.get(b.envMap||ee.environment,ct),ee.envMapRotation=ee.environment!==null&&b.envMap===null?X.environmentRotation:b.envMapRotation,Ze===void 0&&(b.addEventListener("dispose",oi),Ze=new Map,ee.programs=Ze);let ut=Ze.get(je);if(ut!==void 0){if(ee.currentProgram===ut&&ee.lightsStateVersion===ke)return ml(b,we),ut}else we.uniforms=Pe.getUniforms(b),$!==null&&b.isNodeMaterial&&$.build(b,se,we),b.onBeforeCompile(we,H),ut=Pe.acquireProgram(we,je),Ze.set(je,ut),ee.uniforms=we.uniforms;const qe=ee.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(qe.clippingPlanes=Je.uniform),ml(b,we),ee.needsLights=Zo(b),ee.lightsStateVersion=ke,ee.needsLights&&(qe.ambientLightColor.value=J.state.ambient,qe.lightProbe.value=J.state.probe,qe.directionalLights.value=J.state.directional,qe.directionalLightShadows.value=J.state.directionalShadow,qe.spotLights.value=J.state.spot,qe.spotLightShadows.value=J.state.spotShadow,qe.rectAreaLights.value=J.state.rectArea,qe.ltc_1.value=J.state.rectAreaLTC1,qe.ltc_2.value=J.state.rectAreaLTC2,qe.pointLights.value=J.state.point,qe.pointLightShadows.value=J.state.pointShadow,qe.hemisphereLights.value=J.state.hemi,qe.directionalShadowMatrix.value=J.state.directionalShadowMatrix,qe.spotLightMatrix.value=J.state.spotLightMatrix,qe.spotLightMap.value=J.state.spotLightMap,qe.pointShadowMatrix.value=J.state.pointShadowMatrix),ee.lightProbeGrid=P.state.lightProbeGridArray.length>0,ee.currentProgram=ut,ee.uniformsList=null,ut}function Ko(b){if(b.uniformsList===null){const X=b.currentProgram.getUniforms();b.uniformsList=Qc.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function ml(b,X){const se=ne.get(b);se.outputColorSpace=X.outputColorSpace,se.batching=X.batching,se.batchingColor=X.batchingColor,se.instancing=X.instancing,se.instancingColor=X.instancingColor,se.instancingMorph=X.instancingMorph,se.skinning=X.skinning,se.morphTargets=X.morphTargets,se.morphNormals=X.morphNormals,se.morphColors=X.morphColors,se.morphTargetsCount=X.morphTargetsCount,se.numClippingPlanes=X.numClippingPlanes,se.numIntersection=X.numClipIntersection,se.vertexAlphas=X.vertexAlphas,se.vertexTangents=X.vertexTangents,se.toneMapping=X.toneMapping}function Ru(b,X){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;R.setFromMatrixPosition(X.matrixWorld);for(let se=0,ee=b.length;se<ee;se++){const J=b[se];if(J.texture!==null&&J.boundingBox.containsPoint(R))return J}return null}function $t(b,X,se,ee,J){X.isScene!==!0&&(X=qt),ue.resetTextureUnits();const Te=X.fog,ke=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?X.environment:null,we=W===null?H.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:_t.workingColorSpace,je=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,Ze=Me.get(ee.envMap||ke,je),ct=ee.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ut=!!se.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),qe=!!se.morphAttributes.position,Mt=!!se.morphAttributes.normal,kt=!!se.morphAttributes.color;let Xt=$i;ee.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Xt=H.toneMapping);const It=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,ln=It!==void 0?It.length:0,Fe=ne.get(ee),En=P.state.lights;if(St===!0&&(vt===!0||b!==le)){const Ut=b===le&&ee.id===ae;Je.setState(ee,b,Ut)}let pt=!1;ee.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==En.state.version||Fe.outputColorSpace!==we||J.isBatchedMesh&&Fe.batching===!1||!J.isBatchedMesh&&Fe.batching===!0||J.isBatchedMesh&&Fe.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Fe.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Fe.instancing===!1||!J.isInstancedMesh&&Fe.instancing===!0||J.isSkinnedMesh&&Fe.skinning===!1||!J.isSkinnedMesh&&Fe.skinning===!0||J.isInstancedMesh&&Fe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Fe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Fe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Fe.instancingMorph===!1&&J.morphTexture!==null||Fe.envMap!==Ze||ee.fog===!0&&Fe.fog!==Te||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Je.numPlanes||Fe.numIntersection!==Je.numIntersection)||Fe.vertexAlphas!==ct||Fe.vertexTangents!==ut||Fe.morphTargets!==qe||Fe.morphNormals!==Mt||Fe.morphColors!==kt||Fe.toneMapping!==Xt||Fe.morphTargetsCount!==ln||!!Fe.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,Fe.__version=ee.version);let Hn=Fe.currentProgram;pt===!0&&(Hn=cs(ee,X,J),$&&ee.isNodeMaterial&&$.onUpdateProgram(ee,Hn,Fe));let Gn=!1,mt=!1,tr=!1;const Nt=Hn.getUniforms(),Bt=Fe.uniforms;if(E.useProgram(Hn.program)&&(Gn=!0,mt=!0,tr=!0),ee.id!==ae&&(ae=ee.id,mt=!0),Fe.needsLights){const Ut=Ru(P.state.lightProbeGridArray,J);Fe.lightProbeGrid!==Ut&&(Fe.lightProbeGrid=Ut,mt=!0)}if(Gn||le!==b){E.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Nt.setValue(j,"projectionMatrix",b.projectionMatrix),Nt.setValue(j,"viewMatrix",b.matrixWorldInverse);const _i=Nt.map.cameraPosition;_i!==void 0&&_i.setValue(j,Jt.setFromMatrixPosition(b.matrixWorld)),I.logarithmicDepthBuffer&&Nt.setValue(j,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Nt.setValue(j,"isOrthographic",b.isOrthographicCamera===!0),le!==b&&(le=b,mt=!0,tr=!0)}if(Fe.needsLights&&(En.state.directionalShadowMap.length>0&&Nt.setValue(j,"directionalShadowMap",En.state.directionalShadowMap,ue),En.state.spotShadowMap.length>0&&Nt.setValue(j,"spotShadowMap",En.state.spotShadowMap,ue),En.state.pointShadowMap.length>0&&Nt.setValue(j,"pointShadowMap",En.state.pointShadowMap,ue)),J.isSkinnedMesh){Nt.setOptional(j,J,"bindMatrix"),Nt.setOptional(j,J,"bindMatrixInverse");const Ut=J.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),Nt.setValue(j,"boneTexture",Ut.boneTexture,ue))}J.isBatchedMesh&&(Nt.setOptional(j,J,"batchingTexture"),Nt.setValue(j,"batchingTexture",J._matricesTexture,ue),Nt.setOptional(j,J,"batchingIdTexture"),Nt.setValue(j,"batchingIdTexture",J._indirectTexture,ue),Nt.setOptional(j,J,"batchingColorTexture"),J._colorsTexture!==null&&Nt.setValue(j,"batchingColorTexture",J._colorsTexture,ue));const xi=se.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&V.update(J,se,Hn),(mt||Fe.receiveShadow!==J.receiveShadow)&&(Fe.receiveShadow=J.receiveShadow,Nt.setValue(j,"receiveShadow",J.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&X.environment!==null&&(Bt.envMapIntensity.value=X.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=BD()),mt){if(Nt.setValue(j,"toneMappingExposure",H.toneMappingExposure),Fe.needsLights&&Cu(Bt,tr),Te&&ee.fog===!0&&Ye.refreshFogUniforms(Bt,Te),Ye.refreshMaterialUniforms(Bt,ee,me,xe,P.state.transmissionRenderTarget[b.id]),Fe.needsLights&&Fe.lightProbeGrid){const Ut=Fe.lightProbeGrid;Bt.probesSH.value=Ut.texture,Bt.probesMin.value.copy(Ut.boundingBox.min),Bt.probesMax.value.copy(Ut.boundingBox.max),Bt.probesResolution.value.copy(Ut.resolution)}Qc.upload(j,Ko(Fe),Bt,ue)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Qc.upload(j,Ko(Fe),Bt,ue),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Nt.setValue(j,"center",J.center),Nt.setValue(j,"modelViewMatrix",J.modelViewMatrix),Nt.setValue(j,"normalMatrix",J.normalMatrix),Nt.setValue(j,"modelMatrix",J.matrixWorld),ee.uniformsGroups!==void 0){const Ut=ee.uniformsGroups;for(let _i=0,Fi=Ut.length;_i<Fi;_i++){const us=Ut[_i];ve.update(us,Hn),ve.bind(us,Hn)}}return Hn}function Cu(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function Zo(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(b,X,se){const ee=ne.get(b);ee.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),ne.get(b.texture).__webglTexture=X,ne.get(b.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:se,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,X){const se=ne.get(b);se.__webglFramebuffer=X,se.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(b,X=0,se=0){W=b,ce=X,q=se;let ee=null,J=!1,Te=!1;if(b){const we=ne.get(b);if(we.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(j.FRAMEBUFFER,we.__webglFramebuffer),O.copy(b.viewport),K.copy(b.scissor),Ie=b.scissorTest,E.viewport(O),E.scissor(K),E.setScissorTest(Ie),ae=-1;return}else if(we.__webglFramebuffer===void 0)ue.setupRenderTarget(b);else if(we.__hasExternalTextures)ue.rebindTextures(b,ne.get(b.texture).__webglTexture,ne.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ct=b.depthTexture;if(we.__boundDepthTexture!==ct){if(ct!==null&&ne.has(ct)&&(b.width!==ct.image.width||b.height!==ct.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(b)}}const je=b.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Te=!0);const Ze=ne.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ze[X])?ee=Ze[X][se]:ee=Ze[X],J=!0):b.samples>0&&ue.useMultisampledRTT(b)===!1?ee=ne.get(b).__webglMultisampledFramebuffer:Array.isArray(Ze)?ee=Ze[se]:ee=Ze,O.copy(b.viewport),K.copy(b.scissor),Ie=b.scissorTest}else O.copy(tt).multiplyScalar(me).floor(),K.copy(Gt).multiplyScalar(me).floor(),Ie=dt;if(se!==0&&(ee=fe),E.bindFramebuffer(j.FRAMEBUFFER,ee)&&E.drawBuffers(b,ee),E.viewport(O),E.scissor(K),E.setScissorTest(Ie),J){const we=ne.get(b.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+X,we.__webglTexture,se)}else if(Te){const we=X;for(let je=0;je<b.textures.length;je++){const Ze=ne.get(b.textures[je]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+je,Ze.__webglTexture,se,we)}}else if(b!==null&&se!==0){const we=ne.get(b.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,we.__webglTexture,se)}ae=-1},this.readRenderTargetPixels=function(b,X,se,ee,J,Te,ke,we=0){if(!(b&&b.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=ne.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ke!==void 0&&(je=je[ke]),je){E.bindFramebuffer(j.FRAMEBUFFER,je);try{const Ze=b.textures[we],ct=Ze.format,ut=Ze.type;if(b.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+we),!I.textureFormatReadable(ct)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(ut)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-ee&&se>=0&&se<=b.height-J&&j.readPixels(X,se,ee,J,Ce.convert(ct),Ce.convert(ut),Te)}finally{const Ze=W!==null?ne.get(W).__webglFramebuffer:null;E.bindFramebuffer(j.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(b,X,se,ee,J,Te,ke,we=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=ne.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ke!==void 0&&(je=je[ke]),je)if(X>=0&&X<=b.width-ee&&se>=0&&se<=b.height-J){E.bindFramebuffer(j.FRAMEBUFFER,je);const Ze=b.textures[we],ct=Ze.format,ut=Ze.type;if(b.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+we),!I.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,qe),j.bufferData(j.PIXEL_PACK_BUFFER,Te.byteLength,j.STREAM_READ),j.readPixels(X,se,ee,J,Ce.convert(ct),Ce.convert(ut),0);const Mt=W!==null?ne.get(W).__webglFramebuffer:null;E.bindFramebuffer(j.FRAMEBUFFER,Mt);const kt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await cR(j,kt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,qe),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Te),j.deleteBuffer(qe),j.deleteSync(kt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,X=null,se=0){const ee=Math.pow(2,-se),J=Math.floor(b.image.width*ee),Te=Math.floor(b.image.height*ee),ke=X!==null?X.x:0,we=X!==null?X.y:0;ue.setTexture2D(b,0),j.copyTexSubImage2D(j.TEXTURE_2D,se,0,0,ke,we,J,Te),E.unbindTexture()},this.copyTextureToTexture=function(b,X,se=null,ee=null,J=0,Te=0){let ke,we,je,Ze,ct,ut,qe,Mt,kt;const Xt=b.isCompressedTexture?b.mipmaps[Te]:b.image;if(se!==null)ke=se.max.x-se.min.x,we=se.max.y-se.min.y,je=se.isBox3?se.max.z-se.min.z:1,Ze=se.min.x,ct=se.min.y,ut=se.isBox3?se.min.z:0;else{const Bt=Math.pow(2,-J);ke=Math.floor(Xt.width*Bt),we=Math.floor(Xt.height*Bt),b.isDataArrayTexture?je=Xt.depth:b.isData3DTexture?je=Math.floor(Xt.depth*Bt):je=1,Ze=0,ct=0,ut=0}ee!==null?(qe=ee.x,Mt=ee.y,kt=ee.z):(qe=0,Mt=0,kt=0);const It=Ce.convert(X.format),ln=Ce.convert(X.type);let Fe;X.isData3DTexture?(ue.setTexture3D(X,0),Fe=j.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ue.setTexture2DArray(X,0),Fe=j.TEXTURE_2D_ARRAY):(ue.setTexture2D(X,0),Fe=j.TEXTURE_2D),E.activeTexture(j.TEXTURE0),E.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,X.flipY),E.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),E.pixelStorei(j.UNPACK_ALIGNMENT,X.unpackAlignment);const En=E.getParameter(j.UNPACK_ROW_LENGTH),pt=E.getParameter(j.UNPACK_IMAGE_HEIGHT),Hn=E.getParameter(j.UNPACK_SKIP_PIXELS),Gn=E.getParameter(j.UNPACK_SKIP_ROWS),mt=E.getParameter(j.UNPACK_SKIP_IMAGES);E.pixelStorei(j.UNPACK_ROW_LENGTH,Xt.width),E.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Xt.height),E.pixelStorei(j.UNPACK_SKIP_PIXELS,Ze),E.pixelStorei(j.UNPACK_SKIP_ROWS,ct),E.pixelStorei(j.UNPACK_SKIP_IMAGES,ut);const tr=b.isDataArrayTexture||b.isData3DTexture,Nt=X.isDataArrayTexture||X.isData3DTexture;if(b.isDepthTexture){const Bt=ne.get(b),xi=ne.get(X),Ut=ne.get(Bt.__renderTarget),_i=ne.get(xi.__renderTarget);E.bindFramebuffer(j.READ_FRAMEBUFFER,Ut.__webglFramebuffer),E.bindFramebuffer(j.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let Fi=0;Fi<je;Fi++)tr&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ne.get(b).__webglTexture,J,ut+Fi),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ne.get(X).__webglTexture,Te,kt+Fi)),j.blitFramebuffer(Ze,ct,ke,we,qe,Mt,ke,we,j.DEPTH_BUFFER_BIT,j.NEAREST);E.bindFramebuffer(j.READ_FRAMEBUFFER,null),E.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(J!==0||b.isRenderTargetTexture||ne.has(b)){const Bt=ne.get(b),xi=ne.get(X);E.bindFramebuffer(j.READ_FRAMEBUFFER,de),E.bindFramebuffer(j.DRAW_FRAMEBUFFER,Q);for(let Ut=0;Ut<je;Ut++)tr?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Bt.__webglTexture,J,ut+Ut):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Bt.__webglTexture,J),Nt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,xi.__webglTexture,Te,kt+Ut):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,xi.__webglTexture,Te),J!==0?j.blitFramebuffer(Ze,ct,ke,we,qe,Mt,ke,we,j.COLOR_BUFFER_BIT,j.NEAREST):Nt?j.copyTexSubImage3D(Fe,Te,qe,Mt,kt+Ut,Ze,ct,ke,we):j.copyTexSubImage2D(Fe,Te,qe,Mt,Ze,ct,ke,we);E.bindFramebuffer(j.READ_FRAMEBUFFER,null),E.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Nt?b.isDataTexture||b.isData3DTexture?j.texSubImage3D(Fe,Te,qe,Mt,kt,ke,we,je,It,ln,Xt.data):X.isCompressedArrayTexture?j.compressedTexSubImage3D(Fe,Te,qe,Mt,kt,ke,we,je,It,Xt.data):j.texSubImage3D(Fe,Te,qe,Mt,kt,ke,we,je,It,ln,Xt):b.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Te,qe,Mt,ke,we,It,ln,Xt.data):b.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Te,qe,Mt,Xt.width,Xt.height,It,Xt.data):j.texSubImage2D(j.TEXTURE_2D,Te,qe,Mt,ke,we,It,ln,Xt);E.pixelStorei(j.UNPACK_ROW_LENGTH,En),E.pixelStorei(j.UNPACK_IMAGE_HEIGHT,pt),E.pixelStorei(j.UNPACK_SKIP_PIXELS,Hn),E.pixelStorei(j.UNPACK_SKIP_ROWS,Gn),E.pixelStorei(j.UNPACK_SKIP_IMAGES,mt),Te===0&&X.generateMipmaps&&j.generateMipmap(Fe),E.unbindTexture()},this.initRenderTarget=function(b){ne.get(b).__webglFramebuffer===void 0&&ue.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ue.setTextureCube(b,0):b.isData3DTexture?ue.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ue.setTexture2DArray(b,0):ue.setTexture2D(b,0),E.unbindTexture()},this.resetState=function(){ce=0,q=0,W=null,E.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}const HD=`
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
`,GD=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;function up({className:n}){const e=ze.useRef(null);return ze.useEffect(()=>{const t=e.current;if(!t)return;const r=window.matchMedia("(prefers-reduced-motion: reduce)").matches,o=new VD({antialias:!1,powerPreference:"low-power"});o.setPixelRatio(Math.min(window.devicePixelRatio,1.6)),t.appendChild(o.domElement);const a=new TR,c=new sm(-1,1,1,-1,0,1),f={uTime:{value:0},uRes:{value:new Ct(1,1)},uBase:{value:new Tt("#141112")},uGlow:{value:new Tt("#5b1825")},uSheen:{value:new Tt("#a64a5a")}},d=new er(new fl(2,2),new Ui({uniforms:f,vertexShader:GD,fragmentShader:HD}));a.add(d);const h=()=>{const{clientWidth:S,clientHeight:_}=t;o.setSize(S,_,!1),f.uRes.value.set(S,_)};h();const g=new ResizeObserver(h);g.observe(t);let v=0,m=!0;const y=performance.now(),M=()=>{m&&(f.uTime.value=(performance.now()-y)/1e3,o.render(a,c)),v=requestAnimationFrame(M)},A=new IntersectionObserver(([S])=>{m=S.isIntersecting});return A.observe(t),r?(f.uTime.value=12,o.render(a,c)):v=requestAnimationFrame(M),()=>{cancelAnimationFrame(v),A.disconnect(),g.disconnect(),d.geometry.dispose(),d.material.dispose(),o.dispose(),t.removeChild(o.domElement)}},[]),C.jsx("div",{ref:e,"aria-hidden":"true",className:`pointer-events-none absolute inset-0 [&>canvas]:h-full [&>canvas]:w-full ${n??""}`})}const a_=[{text:"Spójne obrazy.",from:"-58%",accent:!1},{text:"Pod kontrolą człowieka.",from:"62%",accent:!0},{text:"Gotowe do publikacji.",from:"-64%",accent:!1}],WD=[[.04,.5],[.18,.66],[.34,.82]];function jD({progress:n,text:e,from:t,accent:r,range:o}){const a=Li(n,o,[t,"0%"]),c=Li(n,[o[0],o[0]+.55*(o[1]-o[0])],[0,1]);return C.jsx(rn.p,{style:{x:a,opacity:c},className:`font-display text-[clamp(2.4rem,6.4vw,5rem)] leading-[1.06] tracking-[-0.015em] will-change-transform ${r?"italic text-vn-burgundy-soft":"text-vn-cream"}`,children:e})}function XD(){const n=ze.useRef(null),e=Hs(),{scrollYProgress:t}=al({target:n,offset:["start start","end end"]}),r=Li(t,[.72,.95],[0,1]),o=Li(t,[.78,.95],[0,1]);return e?C.jsxs("section",{className:"relative overflow-hidden bg-[#141112] text-vn-cream",children:[C.jsx(up,{}),C.jsx("div",{className:"relative mx-auto max-w-[1400px] px-5 py-28 md:px-10",children:a_.map(a=>C.jsx("p",{className:`font-display text-[clamp(2.4rem,6.4vw,5rem)] leading-[1.06] ${a.accent?"italic text-vn-burgundy-soft":"text-vn-cream"}`,children:a.text},a.text))})]}):C.jsx("section",{ref:n,className:"relative h-[260vh] bg-[#141112]",children:C.jsxs("div",{className:"sticky top-0 flex h-screen flex-col justify-center overflow-hidden",children:[C.jsx(up,{}),C.jsx("div",{"aria-hidden":"true",className:"absolute inset-x-0 top-0 h-[22vh] bg-[linear-gradient(180deg,#141112,transparent)]"}),C.jsxs("div",{className:"relative mx-auto w-full max-w-[1400px] px-5 md:px-10",children:[C.jsx("div",{className:"space-y-2 md:space-y-3",children:a_.map((a,c)=>C.jsx(jD,{progress:t,text:a.text,from:a.from,accent:a.accent,range:WD[c]},a.text))}),C.jsx(rn.div,{style:{scaleX:r},className:"mt-12 h-px origin-left bg-vn-cream/30"}),C.jsx(rn.p,{style:{opacity:o},className:"spec mt-5 text-vn-cream/45",children:"VN—STATEMENT/01 · zasada każdego obrazu"})]})]})})}const za="/e/",l_=[{label:"Oferta",anchor:"#oferta"},{label:"Proces",anchor:"#proces"},{label:"Zastosowania",anchor:"#zastosowania"},{label:"Konfigurator",page:"konfigurator.html"},{label:"Pakiety",anchor:"#pakiety"},{label:"Kontakt",anchor:"#kontakt"}];function YD({home:n=!0}){const e=f=>f.page?za+f.page:n?f.anchor:za+f.anchor,[t,r]=ze.useState(!1),[o,a]=ze.useState(!1);ze.useEffect(()=>{const f=()=>r(window.scrollY>32);return f(),window.addEventListener("scroll",f,{passive:!0}),()=>window.removeEventListener("scroll",f)},[]),ze.useEffect(()=>(document.documentElement.style.overflow=o?"hidden":"",()=>{document.documentElement.style.overflow=""}),[o]);const c=!t||o;return C.jsxs("header",{className:`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${o?"border-b border-white/10 bg-vn-charcoal":t?"border-b border-vn-line/80 bg-vn-bg/85 backdrop-blur-md":"border-b border-transparent bg-transparent"}`,children:[C.jsxs("nav",{"aria-label":"Nawigacja główna",className:"mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-[72px] md:px-10",children:[C.jsxs("a",{href:n?"#top":za,"aria-label":"visNEX — początek strony",className:`wordmark text-[1.35rem] transition-colors duration-500 ${c?"text-vn-cream":"text-vn-charcoal"}`,onClick:()=>a(!1),children:[C.jsx("em",{children:"vis"}),"NEX"]}),C.jsxs("div",{className:"hidden items-center gap-9 lg:flex",children:[l_.map(f=>C.jsx("a",{href:e(f),className:`spec transition-colors duration-300 ${c?"text-vn-cream/70 hover:text-vn-cream":"text-vn-muted hover:text-vn-charcoal"}`,children:f.label},f.label)),C.jsx("a",{href:n?"#kontakt":za+"#kontakt",className:`btn !px-5 !py-3 ${c?"btn-cream":"btn-charcoal"}`,children:"Zamów wizualizacje"})]}),C.jsxs("button",{type:"button","aria-label":o?"Zamknij menu":"Otwórz menu","aria-expanded":o,onClick:()=>a(!o),className:`flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden ${c?"text-vn-cream":"text-vn-charcoal"}`,children:[C.jsx("span",{className:`h-px w-6 bg-current transition-transform duration-300 ${o?"translate-y-[3px] rotate-45":""}`}),C.jsx("span",{className:`h-px w-6 bg-current transition-transform duration-300 ${o?"-translate-y-[3px] -rotate-45":""}`})]})]}),C.jsx("div",{className:`absolute inset-x-0 top-full h-[calc(100dvh-4rem)] bg-vn-charcoal transition-opacity duration-300 lg:hidden ${o?"opacity-100":"pointer-events-none opacity-0"}`,children:C.jsxs("div",{className:"flex h-full flex-col justify-between px-6 pb-10 pt-12",children:[C.jsx("div",{className:"flex flex-col gap-2",children:l_.map((f,d)=>C.jsx("a",{href:e(f),onClick:()=>a(!1),className:"border-b border-white/10 py-4 font-display text-3xl text-vn-cream",style:{transitionDelay:`${d*40}ms`},children:f.label},f.label))}),C.jsx("a",{href:n?"#kontakt":za+"#kontakt",onClick:()=>a(!1),className:"btn btn-cream w-full",children:"Zamów wizualizacje"})]})})]})}const Go=[.22,1,.36,1];function xt({children:n,delay:e=0,y:t=28,x:r=0,className:o,mask:a=!1}){const c=Hs();return a&&!c?C.jsx("div",{className:`overflow-hidden ${o??""}`,children:C.jsx(rn.div,{initial:{y:"108%"},whileInView:{y:"0%"},viewport:{once:!0,margin:"-72px"},transition:{duration:1.1,delay:e,ease:Go},children:n})}):C.jsx(rn.div,{className:o,initial:c?{opacity:0}:{opacity:0,y:r?0:t,x:r},whileInView:c?{opacity:1}:{opacity:1,y:0,x:0},viewport:{once:!0,margin:"-72px"},transition:{duration:.9,delay:e,ease:Go},children:n})}const Mr=n=>"/e/"+n.replace(/^\//,""),qD=(()=>{const n=[...["Wizualizacje","AI,","które","wyglądają","jak"].map(t=>({word:t,italic:!1})),...["materiał","dla","marki"].map(t=>({word:t,italic:!0})),{word:"premium.",italic:!0}];let e=0;return n.map(t=>{const r={...t,offset:e};return e+=t.word.length,r})})();function $D(){const n=Hs(),e=ze.useRef(null),{scrollYProgress:t}=al({target:e,offset:["start start","end start"]}),r=Li(t,[0,1],["0%","18%"]),o=Li(t,[0,1],[0,-90]),a=Li(t,[0,.7],[1,0]),c=f=>({initial:n?{opacity:0}:{opacity:0,y:32},animate:n?{opacity:1}:{opacity:1,y:0},transition:{duration:1,delay:f,ease:Go}});return C.jsxs("section",{id:"top",ref:e,className:"relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-vn-ink text-vn-cream",children:[C.jsx(rn.div,{className:"absolute inset-0",style:n?void 0:{y:r},initial:n?void 0:{scale:1.08},animate:n?void 0:{scale:1},transition:{duration:2.4,ease:Go},children:C.jsxs("video",{className:"h-full w-full object-cover",poster:Mr("images/hero-poster.jpg"),autoPlay:!0,muted:!0,loop:!0,playsInline:!0,"aria-hidden":"true",children:[C.jsx("source",{src:Mr("videos/hero.mp4"),type:"video/mp4"}),C.jsx("source",{src:Mr("videos/hero.webm"),type:"video/webm"})]})}),C.jsx("div",{className:"video-duotone"}),C.jsx("div",{className:"video-duotone-boost"}),C.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(90deg,rgba(14,11,11,0.9)_0%,rgba(14,11,11,0.55)_38%,rgba(14,11,11,0.08)_68%,rgba(14,11,11,0.25)_100%)]"}),C.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(180deg,rgba(14,11,11,0.45)_0%,rgba(14,11,11,0)_28%,rgba(14,11,11,0)_50%,rgba(20,17,18,0.55)_78%,rgba(20,17,18,0.92)_94%,#141112_100%)]"}),C.jsxs(rn.div,{style:n?void 0:{y:o,opacity:a},className:"relative mx-auto w-full max-w-[1400px] px-5 pb-14 pt-40 md:px-10 md:pb-20",children:[C.jsx(rn.p,{...c(.15),className:"eyebrow text-vn-cream/60",children:"Ekspercka usługa wspierana AI"}),C.jsx(rn.h1,{...c(.3),"aria-label":"Wizualizacje AI, które wyglądają jak materiał dla marki premium.",className:"mt-7 max-w-[1050px] text-[clamp(2.6rem,7vw,5.4rem)] leading-[1.04] text-white",children:qD.map((f,d)=>C.jsx("span",{className:"inline-block whitespace-nowrap",children:[...f.word].map((h,g)=>{const v=f.offset+g;return C.jsx(rn.span,{className:`inline-block will-change-transform ${f.italic?"italic":""}`,animate:n?void 0:{y:[0,-3.5,0,2.5,0]},transition:{duration:5.5+v*13%40/10,delay:1.6+v%9*.22,repeat:1/0,ease:"easeInOut"},children:h},g)})},d)).flatMap(f=>[f," "])}),C.jsx(rn.p,{...c(.48),className:"mt-8 max-w-[560px] text-[1.0625rem] leading-relaxed text-vn-cream/72",children:"visNEX tworzy spójne obrazy do stron, ofert i reklam dla firm z branży wnętrzarskiej i budowlanej — z kontrolą stylu, realizmu i jakości na każdym etapie."}),C.jsxs(rn.div,{...c(.62),className:"mt-10 flex flex-wrap gap-4",children:[C.jsx("a",{href:"#pakiety",className:"btn btn-cream",children:"Zamów pakiet wizualizacji"}),C.jsx("a",{href:"#proces",className:"btn btn-ghost-cream",children:"Zobacz proces"})]}),C.jsxs(rn.div,{...c(.8),className:"mt-16 flex flex-col justify-between gap-3 border-t border-white/12 pt-5 sm:flex-row sm:items-baseline",children:[C.jsx("p",{className:"spec text-vn-cream/45",children:"Drzwi · podłogi · kuchnie · sztukateria · LED · remonty · home improvement"}),C.jsx("p",{className:"spec hidden text-vn-cream/35 md:block",children:"VN—HERO/01 · 16:9 · status: ready"})]})]})]})}function KD(){return C.jsx("section",{id:"oferta",className:"bg-vn-bg",children:C.jsxs("div",{className:"mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-44",children:[C.jsx(xt,{children:C.jsx("p",{className:"eyebrow text-vn-muted",children:"01 — Manifest"})}),C.jsxs("div",{className:"mt-10 grid gap-14 lg:grid-cols-12 lg:gap-10",children:[C.jsx(xt,{className:"lg:col-span-7",mask:!0,children:C.jsxs("h2",{className:"text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.14]",children:["Nie generujemy przypadkowych obrazów."," ",C.jsx("em",{className:"text-vn-burgundy",children:"Projektujemy wizualizacje pod sprzedaż."})]})}),C.jsxs("div",{className:"space-y-6 text-[1.0625rem] leading-relaxed text-vn-muted lg:col-span-4 lg:col-start-9",children:[C.jsx(xt,{delay:.1,x:90,children:C.jsx("p",{children:"AI potrafi stworzyć ładny obraz. Problem zaczyna się wtedy, gdy obraz ma pracować na stronie, w reklamie albo ofercie. Wtedy liczy się kadr, produkt, światło, spójność, realizm i cel."})}),C.jsx(xt,{delay:.18,x:90,children:C.jsx("p",{children:"visNEX łączy prompt engineering, selekcję i kontrolę jakości, żeby dostarczyć wizualizacje gotowe do użycia w komunikacji marki."})})]})]})]})})}function RS({left:n,right:e,tone:t="light"}){const r=t==="light"?"text-vn-muted":"text-vn-cream/55";return C.jsxs("div",{className:`spec flex items-baseline justify-between gap-4 ${r}`,children:[C.jsx("span",{children:n}),C.jsx("span",{className:"text-right",children:e})]})}function om({children:n,amount:e=7,className:t}){const r=ze.useRef(null),o=Hs(),{scrollYProgress:a}=al({target:r,offset:["start end","end start"]}),c=Li(a,[0,1],[`-${e}%`,`${e}%`]);return o?C.jsx("div",{ref:r,className:t,children:n}):C.jsx("div",{ref:r,className:`h-full w-full ${t??""}`,children:C.jsx(rn.div,{style:{y:c,scale:1+e/45},className:"h-full w-full",children:n})})}const ZD=[{no:"01",title:"Kierunek wizualny",text:"Ustalamy styl, kategorię, zastosowanie i to, co obraz ma sprzedać.",image:"/images/system-kierunek.webp",alt:"Loftowa kuchnia w graficie, dębie i cegle",plate:["VN—SYS/01 · kuchnie","4:5 · direction"]},{no:"02",title:"Prompt engineering",text:"Tworzymy precyzyjne prompty pod scenę, materiał, światło, kadr i produkt.",image:"/images/system-prompt.webp",alt:"Sztukateria LED w dwukondygnacyjnym holu",plate:["VN—SYS/02 · sztukateria LED","4:5 · generated"]},{no:"03",title:"Selekcja",text:"Odrzucamy obrazy, które wyglądają sztucznie, generycznie albo nie pokazują oferty.",image:"/images/system-selekcja.webp",alt:"Drzwi przesuwne w nowoczesnym domu",plate:["VN—SYS/03 · drzwi","16:9 · selected"]},{no:"04",title:"Korekty",text:"Dopracowujemy perspektywę, proporcje, kolor, światło i detale.",image:"/images/system-korekty.webp",alt:"Podłoga w jodełkę w świetle dziennym",plate:["VN—SYS/04 · podłogi","16:9 · refined"]}];function QD({p:n,index:e}){const t=Hs(),r=e%2===0,o=ze.useRef(null),a=Rb(o,{once:!0,margin:"-60px"}),c=t?{opacity:0}:{clipPath:r?"inset(0% 100% 0% 0%)":"inset(0% 0% 0% 100%)"},f=t?{opacity:1}:{clipPath:"inset(0% 0% 0% 0%)"};return C.jsxs("article",{ref:o,className:"grid items-center gap-8 md:grid-cols-12 md:gap-0",children:[C.jsx("div",{className:`md:col-span-7 ${r?"md:col-start-1":"md:col-start-6"} md:row-start-1`,children:C.jsxs(rn.div,{initial:c,animate:a?f:c,transition:{duration:1.1,ease:Go},children:[C.jsx("div",{className:"frame-img aspect-[4/3]",children:C.jsx(om,{amount:6,children:C.jsx("img",{src:Mr(n.image),alt:n.alt,loading:"lazy"})})}),C.jsx("div",{className:"mt-3",children:C.jsx(RS,{left:n.plate[0],right:n.plate[1]})})]})}),C.jsx(xt,{x:r?120:-120,className:`relative z-10 md:col-span-5 md:row-start-1 ${r?"md:col-start-8 md:pl-10":"md:col-start-1 md:pr-10 md:text-right"}`,children:C.jsxs("div",{className:"relative",children:[C.jsx("span",{"aria-hidden":"true",className:`pointer-events-none absolute hidden font-display text-[clamp(7rem,12vw,11rem)] leading-none text-vn-bg-warm md:-top-24 md:block ${r?"-left-2":"-right-2"}`,children:n.no}),C.jsxs("div",{className:"relative",children:[C.jsxs("span",{className:"spec text-vn-burgundy",children:[n.no," / 04"]}),C.jsx("h3",{className:"mt-4 text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.1]",children:n.title}),C.jsx("p",{className:`mt-4 max-w-[40ch] text-[0.9375rem] leading-relaxed text-vn-muted ${r?"":"md:ml-auto"}`,children:n.text})]})]})})]})}function JD(){return C.jsx("section",{id:"system",className:"overflow-hidden bg-vn-bg",children:C.jsxs("div",{className:"mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40",children:[C.jsx(xt,{children:C.jsx("p",{className:"eyebrow text-vn-muted",children:"02 — System wizualizacji"})}),C.jsx(xt,{delay:.08,mask:!0,children:C.jsxs("h2",{className:"mt-8 max-w-[820px] text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.14]",children:["System, który pilnuje obrazu"," ",C.jsx("em",{className:"text-vn-burgundy",children:"od briefu do finalnego pliku"}),"."]})}),C.jsx("div",{className:"mt-20 flex flex-col gap-24 md:gap-32",children:ZD.map((n,e)=>C.jsx(QD,{p:n,index:e},n.no))})]})})}const eN=[{title:"Hero na stronę",text:"Duże kadry do pierwszych sekcji strony, landing page’y i kampanii.",image:"/images/use-hero.webp",alt:"Sypialnia z boazerią ścienną w burgundzie i orzechu — kadr hero",plate:["boazeria ścienna","16:9 · ready"],span:"md:col-span-12",aspect:"aspect-[16/9] md:aspect-[21/9]"},{title:"Kategorie produktowe",text:"Spójne wizualizacje dla drzwi, podłóg, kuchni, listew, LED, blatów i innych ofert.",image:"/images/use-kategorie.webp",alt:"Kuchnia z kamiennym blatem — wizualizacja kategorii produktowej",plate:["kuchnie","4:5 · ready"],span:"md:col-span-7",aspect:"aspect-[4/3] md:h-full"},{title:"Reklamy i social media",text:"Pionowe i poziome obrazy do kampanii, postów, rolek, banerów i grafik sprzedażowych.",image:"/images/use-social.webp",alt:"Piwnica win z czarnym kamiennym blatem — pionowy kadr do social media",plate:["wnętrza premium","9:16 · ready"],span:"md:col-span-5",aspect:"aspect-[4/5] md:aspect-[3/4]"},{title:"Oferty i prezentacje",text:"Materiały do PDF-ów, moodboardów, ofert handlowych i prezentacji dla klienta.",image:"/images/use-oferty.webp",alt:"Sztukateria i listwy przysufitowe — obraz do oferty handlowej",plate:["sztukateria","4:5 · ready"],span:"md:col-span-12",aspect:"aspect-[16/9] md:aspect-[16/8]"}];function tN(){return C.jsx("section",{id:"zastosowania",className:"bg-vn-bg",children:C.jsxs("div",{className:"mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40",children:[C.jsx(xt,{children:C.jsx("p",{className:"eyebrow text-vn-muted",children:"03 — Zastosowania"})}),C.jsx(xt,{delay:.08,x:-140,children:C.jsxs("h2",{className:"mt-8 max-w-[880px] text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.14]",children:["Obrazy do miejsc, w których klient naprawdę"," ",C.jsx("em",{className:"text-vn-burgundy",children:"podejmuje decyzję"}),"."]})}),C.jsx("div",{className:"mt-16 grid gap-5 md:grid-cols-12 md:gap-6",children:eN.map((n,e)=>C.jsx(xt,{delay:.09*e,y:56,className:`group/card ${n.span}`,children:C.jsxs("div",{className:"flex h-full flex-col",children:[C.jsx("div",{className:`frame-img ${n.aspect}`,children:C.jsx(om,{children:C.jsx("img",{src:Mr(n.image),alt:n.alt,loading:"lazy"})})}),C.jsxs("div",{className:"flex flex-1 flex-col border-x border-b hairline bg-vn-bg px-5 pb-5 pt-4",children:[C.jsx("h3",{className:"text-xl",children:n.title}),C.jsx("p",{className:"mb-5 mt-2 text-[0.9375rem] leading-relaxed text-vn-muted",children:n.text}),C.jsx("div",{className:"mt-auto border-t hairline pt-3",children:C.jsx(RS,{left:n.plate[0],right:n.plate[1]})})]})]})},n.title))})]})})}const nN=[{name:"Producenci i dystrybutorzy",text:"Gdy oferta jest dobra, ale brakuje jej spójnej oprawy wizualnej."},{name:"Firmy wykonawcze",text:"Gdy realizacje są niespójne, a strona potrzebuje lepszych obrazów."},{name:"Agencje www i marketingowe",text:"Gdy klient nie ma materiałów do strony, reklam albo landing page’a."},{name:"Studia wnętrz i architekci",text:"Gdy potrzebna jest szybka seria koncepcyjnych, estetycznych kadrów."}];function iN(){return C.jsx("section",{id:"dla-kogo",className:"bg-vn-bg",children:C.jsxs("div",{className:"mx-auto max-w-[1400px] px-5 pb-28 md:px-10 md:pb-40",children:[C.jsx(xt,{children:C.jsx("p",{className:"eyebrow text-vn-muted",children:"04 — Dla kogo"})}),C.jsx(xt,{delay:.08,y:-70,children:C.jsxs("h2",{className:"mt-8 max-w-[820px] text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.14]",children:["Dla marek, które sprzedają"," ",C.jsx("em",{className:"text-vn-burgundy",children:"produkt obrazem"}),"."]})}),C.jsx("div",{className:"mt-16 border-t hairline",children:nN.map((n,e)=>C.jsx(xt,{delay:.09*e,y:26,children:C.jsxs("div",{className:"group grid gap-2 border-b hairline py-8 transition-colors duration-300 md:grid-cols-12 md:items-baseline md:py-10",children:[C.jsx("span",{className:"spec text-vn-muted-light md:col-span-1",children:String(e+1).padStart(2,"0")}),C.jsx("h3",{className:"text-[clamp(1.4rem,2.4vw,2rem)] transition-colors duration-300 group-hover:text-vn-burgundy md:col-span-6",children:n.name}),C.jsx("p",{className:"text-[0.9375rem] leading-relaxed text-vn-muted md:col-span-4 md:col-start-9",children:n.text})]})},n.name))})]})})}const c_={hidden:{opacity:0,y:18},show:{opacity:1,y:0,transition:{duration:.6,ease:Go}}},rN=["przypadkowe prompty","zmienny styl","obraz bez celu","dużo odrzutów","efekt „ładne, ale sztuczne”","brak kontroli nad produktem","trudna powtarzalność"],sN=["brief pod zastosowanie","kierunek wizualny","spójna seria","selekcja i poprawki","nacisk na realizm","produkt jako bohater","gotowość do publikacji"];function oN(){return C.jsxs("section",{className:"relative overflow-hidden bg-vn-charcoal-soft text-vn-cream",children:[C.jsx(up,{className:"opacity-70"}),C.jsx("div",{"aria-hidden":"true",className:"absolute inset-0 bg-[linear-gradient(180deg,rgba(28,26,24,0.55),rgba(28,26,24,0.2)_40%,rgba(28,26,24,0.6))]"}),C.jsxs("div",{className:"relative mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40",children:[C.jsx(xt,{children:C.jsx("p",{className:"eyebrow text-vn-cream/50",children:"05 — Porównanie"})}),C.jsx(xt,{delay:.08,x:150,children:C.jsxs("h2",{className:"mt-8 max-w-[860px] text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.14]",children:["Różnica między generatorem a"," ",C.jsx("em",{className:"text-vn-burgundy-soft",children:"usługą ekspercką"}),"."]})}),C.jsxs("div",{className:"mt-16 grid gap-10 md:grid-cols-2 md:gap-6",children:[C.jsx(xt,{delay:.1,y:36,className:"h-full",children:C.jsxs("div",{className:"flex h-full flex-col border border-white/10 p-8 md:p-10",children:[C.jsx("p",{className:"spec text-vn-cream/45",children:"Zwykły generator AI"}),C.jsx(rn.ul,{className:"mt-8 space-y-4",initial:"hidden",whileInView:"show",viewport:{once:!0,margin:"-60px"},transition:{staggerChildren:.09},children:rN.map(n=>C.jsxs(rn.li,{variants:c_,className:"flex items-baseline gap-4 text-[1rem] leading-relaxed text-vn-cream/55",children:[C.jsx("span",{"aria-hidden":"true",className:"spec text-vn-cream/30",children:"—"}),n]},n))})]})}),C.jsx(xt,{delay:.2,y:36,className:"h-full",children:C.jsxs("div",{className:"relative flex h-full flex-col border border-vn-burgundy-soft/40 bg-white/[0.035] p-8 md:p-10",children:[C.jsx("div",{className:"absolute inset-x-0 top-0 h-[3px] bg-vn-burgundy"}),C.jsxs("p",{className:"wordmark text-[1.05rem] text-vn-cream",children:[C.jsx("em",{children:"vis"}),"NEX"]}),C.jsx(rn.ul,{className:"mt-8 space-y-4",initial:"hidden",whileInView:"show",viewport:{once:!0,margin:"-60px"},transition:{staggerChildren:.09,delayChildren:.15},children:sN.map(n=>C.jsxs(rn.li,{variants:c_,className:"flex items-baseline gap-4 text-[1rem] leading-relaxed text-vn-cream/90",children:[C.jsx("span",{"aria-hidden":"true",className:"mt-[0.5em] block h-[7px] w-[7px] shrink-0 self-start bg-vn-burgundy-soft"}),n]},n))})]})})]})]})]})}const aN=[{no:"01",title:"Brief",text:"Opisujesz branżę, ofertę, styl, formaty i zastosowanie obrazów."},{no:"02",title:"Kierunek",text:"Ustalamy estetykę, typ kadrów, ton marki i zasady wizualne."},{no:"03",title:"Produkcja",text:"Tworzymy warianty, selekcjonujemy najlepsze i odrzucamy słabe ujęcia."},{no:"04",title:"Finalizacja",text:"Dopracowujemy wybrane obrazy i przygotowujemy pliki do publikacji."}];function lN(){const n=ze.useRef(null),e=Hs(),{scrollYProgress:t}=al({target:n,offset:["start 0.72","end 0.45"]}),r=Sb(t,{stiffness:90,damping:26,restDelta:.001}),o=Li(r,a=>`${Math.min(100,Math.max(0,a*100))}%`);return C.jsx("section",{id:"proces",className:"overflow-hidden bg-vn-bg",children:C.jsxs("div",{className:"mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40",children:[C.jsx(xt,{children:C.jsx("p",{className:"eyebrow text-vn-muted",children:"06 — Proces"})}),C.jsx(xt,{delay:.08,y:-70,children:C.jsxs("h2",{className:"mt-8 max-w-[860px] text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.14]",children:["Proces prosty dla klienta."," ",C.jsx("em",{className:"text-vn-burgundy",children:"Precyzyjny po naszej stronie."})]})}),C.jsxs("div",{ref:n,className:"relative mx-auto mt-24 max-w-[980px]",children:[C.jsx("div",{className:"absolute bottom-0 left-[7px] top-0 w-px bg-vn-line md:left-1/2 md:-translate-x-1/2"}),C.jsx(rn.div,{style:e?void 0:{scaleY:r},className:"absolute bottom-0 left-[7px] top-0 w-px origin-top bg-vn-burgundy md:left-1/2 md:-translate-x-1/2"}),!e&&C.jsx(rn.div,{style:{top:o},className:"absolute left-[7px] z-10 h-[11px] w-[11px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-vn-burgundy bg-vn-bg md:left-1/2"}),C.jsx("ol",{className:"space-y-20 md:space-y-28",children:aN.map((a,c)=>{const f=c%2===0;return C.jsxs("li",{className:"relative grid gap-3 pl-10 md:grid-cols-2 md:gap-0 md:pl-0",children:[C.jsx("span",{"aria-hidden":"true",className:"absolute left-[7px] top-2 h-[7px] w-[7px] -translate-x-1/2 bg-vn-burgundy md:left-1/2"}),C.jsxs(xt,{x:f?-110:110,className:f?"md:col-start-1 md:pr-14 md:text-right":"md:col-start-2 md:pl-14",children:[C.jsxs("span",{className:"spec text-vn-burgundy",children:[a.no," / 04"]}),C.jsx("h3",{className:"mt-3 text-[clamp(1.4rem,2.4vw,2rem)]",children:a.title}),C.jsx("p",{className:`mt-3 max-w-[38ch] text-[0.9375rem] leading-relaxed text-vn-muted ${f?"md:ml-auto":""}`,children:a.text})]})]},a.no)})})]})]})})}const cN=[{name:"Start",audience:"Dla firm, które chcą sprawdzić kierunek.",scope:["6 finalnych wizualizacji","1 kierunek wizualny","1 tura poprawek","formaty 16:9 lub 9:16","gotowe pliki do użycia"],price:"od 990 zł",priceNote:"netto",cta:"Zamów pakiet Start"},{name:"Strona",audience:"Dla firm, które potrzebują obrazów do landing page’a lub nowej strony.",scope:["12 finalnych wizualizacji","hero + sekcje + kategorie","2 tury poprawek","spójny styl serii","formaty pod www i social"],price:"od 1 990 zł",priceNote:"netto",featured:!0,cta:"Zamów pakiet Strona"},{name:"Kampania",audience:"Dla marek, które potrzebują większej serii do reklam, www i social.",scope:["24 finalne wizualizacje","kilka formatów","warianty stylistyczne","2 tury poprawek","selekcja i dopracowanie finalnych obrazów"],price:"od 3 490 zł",priceNote:"netto",cta:"Zamów pakiet Kampania"},{name:"Dla agencji",audience:"Dla agencji www, SEO i marketingowych.",scope:["stała współpraca","wizualizacje dla klientów końcowych","priorytetowa realizacja","możliwość pracy white label","rozliczenie pakietowe albo miesięczne"],price:"wycena indywidualna",cta:"Porozmawiajmy"}];function uN(){return C.jsx("section",{id:"pakiety",className:"bg-vn-bg-warm",children:C.jsxs("div",{className:"mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40",children:[C.jsx(xt,{children:C.jsx("p",{className:"eyebrow text-vn-muted",children:"07 — Pakiety"})}),C.jsx(xt,{delay:.08,y:-70,children:C.jsxs("h2",{className:"mt-8 max-w-[820px] text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.14]",children:["Pakiety na start,"," ",C.jsx("em",{className:"text-vn-burgundy",children:"stronę albo kampanię"}),"."]})}),C.jsx("div",{className:"mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4",children:cN.map((n,e)=>C.jsx(xt,{delay:.1*e,y:48,className:"h-full",children:C.jsxs("article",{className:`flex h-full flex-col p-8 ${n.featured?"relative bg-vn-charcoal text-vn-cream":"border hairline bg-vn-bg"}`,children:[n.featured&&C.jsx("div",{className:"absolute inset-x-0 top-0 h-[3px] bg-vn-burgundy"}),C.jsxs("div",{className:"flex items-baseline justify-between gap-3",children:[C.jsx("h3",{className:"text-2xl",children:n.name}),n.featured&&C.jsx("span",{className:"spec text-vn-burgundy-soft",children:"najczęściej wybierany"})]}),C.jsx("p",{className:`mt-3 min-h-[3.6em] text-[0.875rem] leading-relaxed ${n.featured?"text-vn-cream/65":"text-vn-muted"}`,children:n.audience}),C.jsx("ul",{className:`mt-6 space-y-3 border-t pt-6 text-[0.9375rem] leading-snug ${n.featured?"border-white/12":"hairline"}`,children:n.scope.map(t=>C.jsxs("li",{className:"flex items-baseline gap-3",children:[C.jsx("span",{"aria-hidden":"true",className:`block h-[6px] w-[6px] mt-[0.5em] shrink-0 self-start ${n.featured?"bg-vn-burgundy-soft":"bg-vn-burgundy"}`}),C.jsx("span",{className:n.featured?"text-vn-cream/85":"text-vn-charcoal/85",children:t})]},t))}),C.jsxs("div",{className:"mt-auto pt-10",children:[C.jsxs("p",{className:`font-display text-[1.75rem] leading-none ${n.featured?"text-vn-cream":"text-vn-charcoal"}`,children:[n.price,n.priceNote&&C.jsx("span",{className:`ml-2 align-baseline text-[0.9rem] ${n.featured?"text-vn-cream/55":"text-vn-muted"}`,children:n.priceNote})]}),C.jsx("a",{href:"#kontakt",className:`btn mt-6 w-full ${n.featured?"btn-burgundy":"btn-charcoal"}`,children:n.cta})]})]})},n.name))}),C.jsx(xt,{delay:.1,children:C.jsx("p",{className:"spec mt-10 text-vn-muted-light",children:"Ceny orientacyjne — finalna wycena zależy od zakresu, formatów i liczby poprawek."})})]})})}const fN=[{no:"01",title:"6 wizualizacji kategorii dla firmy od drzwi",industry:"drzwi",image:"/images/case-drzwi.webp",alt:"Drzwi dwuskrzydłowe w eleganckiej sali — wizualizacja kategorii",spec:"VN—CASE/01 · kategorie · seria 6 · ready"},{no:"02",title:"Hero i sekcje dla strony o podłogach",industry:"podłogi",image:"/images/case-podlogi.webp",alt:"Podłoga drewniana w świetle dziennym — kadr hero dla strony o podłogach",spec:"VN—CASE/02 · www · hero + sekcje · ready"},{no:"03",title:"Pionowe kadry do social media dla studia wnętrz",industry:"studio wnętrz",image:"/images/case-social.webp",alt:"Kamienna ściana w pokoju odsłuchowym — pionowy kadr do social media",spec:"VN—CASE/03 · social · 9:16 · ready"},{no:"04",title:"Kampania dla firmy od kuchni",industry:"kuchnie",image:"/images/case-kuchnie.webp",alt:"Kuchnia w układzie U — kadr kampanii reklamowej",spec:"VN—CASE/04 · kampania · seria · ready"},{no:"05",title:"Obrazy ofertowe dla wykonawcy remontów",industry:"remonty",image:"/images/case-remonty.webp",alt:"Schody z oświetleniem LED przypodłogowym — obraz do oferty wykonawcy",spec:"VN—CASE/05 · oferta · PDF + www · ready"}];function dN({c:n,index:e}){const t=ze.useRef(null),r=Hs(),o=e%2===1,{scrollYProgress:a}=al({target:t,offset:["start end","center 0.42"]}),c=Li(a,[0,1],[o?"-45%":"45%","0%"]),f=Li(a,[0,.55],[0,1]);return C.jsxs("article",{ref:t,className:"group/card relative",children:[C.jsx(xt,{y:52,children:C.jsxs("div",{className:"relative",children:[C.jsx("div",{className:"frame-img aspect-[16/10] max-h-[86vh] w-full md:aspect-[16/8.5]",children:C.jsx(om,{amount:8,children:C.jsx("img",{src:Mr(n.image),alt:n.alt,loading:"lazy"})})}),C.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(14,11,11,0.55)_100%)]"}),C.jsxs(rn.div,{style:r?void 0:{x:c,opacity:f},className:`absolute bottom-6 z-10 max-w-[88%] will-change-transform md:bottom-10 md:max-w-[62%] ${o?"left-5 md:left-10":"right-5 text-right md:right-10"}`,children:[C.jsx("span",{className:"spec text-vn-cream/70",children:n.no}),C.jsx("h3",{className:"mt-2 font-display text-[clamp(1.9rem,4.4vw,4rem)] leading-[1.06] text-vn-cream [text-shadow:0_2px_34px_rgba(14,11,11,0.55)]",children:n.title})]})]})}),C.jsxs("div",{className:`mt-4 flex flex-wrap items-baseline gap-4 ${o?"":"justify-end"}`,children:[C.jsx("span",{className:"pill text-vn-charcoal/80",children:n.industry}),C.jsx("span",{className:"spec text-vn-muted-light",children:n.spec})]})]})}function hN(){return C.jsx("section",{id:"przyklady",className:"overflow-hidden bg-vn-bg",children:C.jsxs("div",{className:"mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40",children:[C.jsx(xt,{children:C.jsx("p",{className:"eyebrow text-vn-muted",children:"08 — Przykłady"})}),C.jsx(xt,{delay:.08,mask:!0,children:C.jsxs("h2",{className:"mt-8 max-w-[860px] text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.14]",children:["Serie wizualne zamiast"," ",C.jsx("em",{className:"text-vn-burgundy",children:"pojedynczych obrazków"}),"."]})}),C.jsx("div",{className:"mt-20 flex flex-col gap-24 md:gap-32",children:fN.map((n,e)=>C.jsx(dN,{c:n,index:e},n.no))})]})})}const pN=[{q:"Czy to są zwykłe obrazy z AI?",a:"Nie. AI jest narzędziem, ale finalny efekt przechodzi przez brief, kierunek wizualny, selekcję i kontrolę jakości."},{q:"Czy mogę używać tych wizualizacji komercyjnie?",a:"Tak, obrazy są przygotowywane z myślą o użyciu w komunikacji marki. Szczegóły wykorzystania określa oferta i regulamin współpracy."},{q:"Czy potrzebuję własnych zdjęć?",a:"Nie zawsze. Możemy pracować na briefie, przykładach stylu, zdjęciach produktu lub materiałach referencyjnych."},{q:"Czy to zastępuje sesję zdjęciową?",a:"Nie zawsze. To alternatywa lub uzupełnienie wtedy, gdy potrzebujesz spójnych materiałów szybciej, szerzej albo dla scen, których jeszcze nie masz."},{q:"Ile trwa realizacja?",a:"Zależnie od pakietu i liczby poprawek. Małe pakiety zwykle są możliwe do realizacji szybciej niż pełne serie na stronę."},{q:"Co jeśli obraz wygląda zbyt sztucznie?",a:"Właśnie dlatego proces obejmuje selekcję i poprawki. Słabe, generyczne obrazy są odrzucane."},{q:"Czy pracujesz z agencjami?",a:"Tak. visNEX może wspierać agencje jako zaplecze do tworzenia wizualizacji dla klientów."}];function mN(){return C.jsx("section",{id:"faq",className:"bg-vn-bg",children:C.jsx("div",{className:"mx-auto max-w-[1400px] px-5 pb-28 md:px-10 md:pb-40",children:C.jsxs("div",{className:"grid gap-12 lg:grid-cols-12",children:[C.jsxs("div",{className:"lg:col-span-4",children:[C.jsx(xt,{children:C.jsx("p",{className:"eyebrow text-vn-muted",children:"09 — FAQ"})}),C.jsx(xt,{delay:.08,x:-120,children:C.jsxs("h2",{className:"mt-8 text-[clamp(1.9rem,3vw,2.6rem)] leading-[1.14]",children:["Realne pytania przed"," ",C.jsx("em",{className:"text-vn-burgundy",children:"pierwszym pakietem"}),"."]})})]}),C.jsx("div",{className:"lg:col-span-7 lg:col-start-6",children:C.jsx("div",{className:"border-t hairline",children:pN.map((n,e)=>C.jsx(xt,{delay:.06*e,y:22,children:C.jsxs("details",{className:"group border-b hairline",children:[C.jsxs("summary",{className:"flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden",children:[C.jsx("h3",{className:"text-[1.15rem] leading-snug",children:n.q}),C.jsxs("span",{"aria-hidden":"true",className:"relative block h-4 w-4 shrink-0",children:[C.jsx("span",{className:"absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-vn-charcoal"}),C.jsx("span",{className:"absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-vn-charcoal transition-transform duration-300 group-open:scale-y-0"})]})]}),C.jsx("p",{className:"max-w-[62ch] pb-7 text-[0.9375rem] leading-relaxed text-vn-muted",children:n.a})]})},n.q))})})]})})})}function gN(){return C.jsxs("section",{id:"kontakt",className:"relative flex min-h-[92svh] flex-col justify-end overflow-hidden bg-vn-ink text-vn-cream",children:[C.jsxs("video",{className:"absolute inset-0 h-full w-full object-cover opacity-60",poster:Mr("images/hero-poster.jpg"),autoPlay:!0,muted:!0,loop:!0,playsInline:!0,"aria-hidden":"true",children:[C.jsx("source",{src:Mr("videos/hero.mp4"),type:"video/mp4"}),C.jsx("source",{src:Mr("videos/hero.webm"),type:"video/webm"})]}),C.jsx("div",{className:"video-duotone"}),C.jsx("div",{className:"video-duotone-boost"}),C.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(180deg,rgba(14,11,11,0.82)_0%,rgba(14,11,11,0.35)_55%,rgba(14,11,11,0.9)_100%)]"}),C.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(55%_60%_at_75%_35%,rgba(122,37,51,0.35),transparent_70%)]"}),C.jsxs("div",{className:"relative mx-auto w-full max-w-[1400px] px-5 py-24 md:px-10 md:py-32",children:[C.jsx(xt,{children:C.jsx("p",{className:"eyebrow text-vn-cream/55",children:"10 — Kontakt"})}),C.jsxs("div",{className:"mt-12 flex flex-wrap gap-x-16 gap-y-8",children:[C.jsx(xt,{delay:.08,children:C.jsxs("div",{children:[C.jsx("span",{className:"pill",children:"Napisz do nas"}),C.jsx("p",{className:"spec mt-4 text-vn-cream/60",children:"kontakt@visnex.pl"})]})}),C.jsx(xt,{delay:.14,children:C.jsxs("div",{children:[C.jsx("span",{className:"pill",children:"Zakres na start"}),C.jsx("p",{className:"spec mt-4 text-vn-cream/60",children:"brief · kierunek wizualny · pakiet"})]})})]}),C.jsx(xt,{delay:.12,y:-60,children:C.jsxs("h2",{className:"mt-16 max-w-[1000px] text-[clamp(2.1rem,4.8vw,4.1rem)] leading-[1.1]",children:["Potrzebujesz obrazów, które nie wyglądają jak"," ",C.jsx("em",{children:"przypadkowe AI"}),"?"]})}),C.jsx(xt,{delay:.28,children:C.jsx("p",{className:"mt-7 max-w-[560px] text-[1.0625rem] leading-relaxed text-vn-cream/75",children:"Opisz branżę, ofertę i zastosowanie. Przygotujemy kierunek wizualny i pakiet wizualizacji gotowych do publikacji."})}),C.jsx(xt,{delay:.34,children:C.jsxs("a",{href:"mailto:kontakt@visnex.pl?subject=Brief%20%E2%80%94%20wizualizacje%20visNEX",className:"group mt-10 inline-block font-display text-[clamp(1.5rem,3.2vw,2.6rem)] italic text-vn-cream",children:["Wyślij brief → kontakt@visnex.pl",C.jsx("span",{className:"mt-3 block h-px w-full origin-left bg-vn-cream/60 transition-transform duration-700 ease-out group-hover:scale-x-50"})]})})]})]})}const vN=[{label:"Oferta",href:"#oferta"},{label:"Proces",href:"#proces"},{label:"Zastosowania",href:"#zastosowania"},{label:"Pakiety",href:"#pakiety"},{label:"FAQ",href:"#faq"}];function xN(){return C.jsx("footer",{className:"bg-vn-charcoal text-vn-cream",children:C.jsxs("div",{className:"mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20",children:[C.jsxs("div",{className:"flex flex-col justify-between gap-12 md:flex-row md:items-start",children:[C.jsxs("div",{children:[C.jsxs("p",{className:"wordmark text-[1.6rem]",children:[C.jsx("em",{children:"vis"}),"NEX"]}),C.jsx("p",{className:"mt-4 max-w-[38ch] text-[0.9375rem] leading-relaxed text-vn-cream/55",children:"Wizualizacje AI dla stron, ofert i reklam marek wnętrzarskich. AI pod kontrolą człowieka."})]}),C.jsx("nav",{"aria-label":"Nawigacja w stopce",className:"flex flex-col gap-3",children:vN.map(n=>C.jsx("a",{href:n.href,className:"spec text-vn-cream/60 transition-colors hover:text-vn-cream",children:n.label},n.href))}),C.jsxs("div",{className:"flex flex-col gap-3",children:[C.jsx("p",{className:"spec text-vn-cream/40",children:"Kontakt"}),C.jsx("a",{href:"mailto:kontakt@visnex.pl",className:"spec text-vn-cream/60 transition-colors hover:text-vn-cream",children:"kontakt@visnex.pl"})]})]}),C.jsxs("div",{className:"mt-16 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row",children:[C.jsxs("p",{className:"spec text-vn-cream/35",children:["© ",new Date().getFullYear()," ",C.jsx("span",{className:"normal-case",children:"visNEX"}),". Wszelkie prawa zastrzeżone."]}),C.jsx("p",{className:"spec text-vn-cream/35",children:"wizualizacje sprzedażowe · realizm · kontrola jakości"})]})]})})}function _N(){return C.jsxs("div",{className:"grain",children:[C.jsx(bE,{}),C.jsx(YD,{}),C.jsxs("main",{children:[C.jsx($D,{}),C.jsx(XD,{}),C.jsx(KD,{}),C.jsx(JD,{}),C.jsx(tN,{}),C.jsx(iN,{}),C.jsx(oN,{}),C.jsx(lN,{}),C.jsx(uN,{}),C.jsx(hN,{}),C.jsx(mN,{}),C.jsx(gN,{})]}),C.jsx(xN,{})]})}vE.createRoot(document.getElementById("root")).render(C.jsx(ze.StrictMode,{children:C.jsx(_N,{})}));
