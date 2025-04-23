(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var zd={exports:{}},Rl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function fw(){if(B_)return Rl;B_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return Rl.Fragment=e,Rl.jsx=n,Rl.jsxs=n,Rl}var j_;function dw(){return j_||(j_=1,zd.exports=fw()),zd.exports}var ee=dw(),Bd={exports:{}},Re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_;function mw(){if(H_)return Re;H_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),w=Symbol.iterator;function D(O){return O===null||typeof O!="object"?null:(O=w&&O[w]||O["@@iterator"],typeof O=="function"?O:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,Q={};function H(O,J,he){this.props=O,this.context=J,this.refs=Q,this.updater=he||k}H.prototype.isReactComponent={},H.prototype.setState=function(O,J){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,J,"setState")},H.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function $(){}$.prototype=H.prototype;function ne(O,J,he){this.props=O,this.context=J,this.refs=Q,this.updater=he||k}var Z=ne.prototype=new $;Z.constructor=ne,z(Z,H.prototype),Z.isPureReactComponent=!0;var me=Array.isArray,ue={H:null,A:null,T:null,S:null},we=Object.prototype.hasOwnProperty;function M(O,J,he,se,ae,Ie){return he=Ie.ref,{$$typeof:r,type:O,key:J,ref:he!==void 0?he:null,props:Ie}}function b(O,J){return M(O.type,J,void 0,void 0,void 0,O.props)}function S(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function I(O){var J={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(he){return J[he]})}var V=/\/+/g;function U(O,J){return typeof O=="object"&&O!==null&&O.key!=null?I(""+O.key):J.toString(36)}function C(){}function _t(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(C,C):(O.status="pending",O.then(function(J){O.status==="pending"&&(O.status="fulfilled",O.value=J)},function(J){O.status==="pending"&&(O.status="rejected",O.reason=J)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function ft(O,J,he,se,ae){var Ie=typeof O;(Ie==="undefined"||Ie==="boolean")&&(O=null);var be=!1;if(O===null)be=!0;else switch(Ie){case"bigint":case"string":case"number":be=!0;break;case"object":switch(O.$$typeof){case r:case e:be=!0;break;case E:return be=O._init,ft(be(O._payload),J,he,se,ae)}}if(be)return ae=ae(O),be=se===""?"."+U(O,0):se,me(ae)?(he="",be!=null&&(he=be.replace(V,"$&/")+"/"),ft(ae,J,he,"",function(it){return it})):ae!=null&&(S(ae)&&(ae=b(ae,he+(ae.key==null||O&&O.key===ae.key?"":(""+ae.key).replace(V,"$&/")+"/")+be)),J.push(ae)),1;be=0;var dt=se===""?".":se+":";if(me(O))for(var ze=0;ze<O.length;ze++)se=O[ze],Ie=dt+U(se,ze),be+=ft(se,J,he,Ie,ae);else if(ze=D(O),typeof ze=="function")for(O=ze.call(O),ze=0;!(se=O.next()).done;)se=se.value,Ie=dt+U(se,ze++),be+=ft(se,J,he,Ie,ae);else if(Ie==="object"){if(typeof O.then=="function")return ft(_t(O),J,he,se,ae);throw J=String(O),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return be}function re(O,J,he){if(O==null)return O;var se=[],ae=0;return ft(O,se,"","",function(Ie){return J.call(he,Ie,ae++)}),se}function ve(O){if(O._status===-1){var J=O._result;J=J(),J.then(function(he){(O._status===0||O._status===-1)&&(O._status=1,O._result=he)},function(he){(O._status===0||O._status===-1)&&(O._status=2,O._result=he)}),O._status===-1&&(O._status=0,O._result=J)}if(O._status===1)return O._result.default;throw O._result}var de=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function qe(){}return Re.Children={map:re,forEach:function(O,J,he){re(O,function(){J.apply(this,arguments)},he)},count:function(O){var J=0;return re(O,function(){J++}),J},toArray:function(O){return re(O,function(J){return J})||[]},only:function(O){if(!S(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Re.Component=H,Re.Fragment=n,Re.Profiler=o,Re.PureComponent=ne,Re.StrictMode=s,Re.Suspense=p,Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ue,Re.act=function(){throw Error("act(...) is not supported in production builds of React.")},Re.cache=function(O){return function(){return O.apply(null,arguments)}},Re.cloneElement=function(O,J,he){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var se=z({},O.props),ae=O.key,Ie=void 0;if(J!=null)for(be in J.ref!==void 0&&(Ie=void 0),J.key!==void 0&&(ae=""+J.key),J)!we.call(J,be)||be==="key"||be==="__self"||be==="__source"||be==="ref"&&J.ref===void 0||(se[be]=J[be]);var be=arguments.length-2;if(be===1)se.children=he;else if(1<be){for(var dt=Array(be),ze=0;ze<be;ze++)dt[ze]=arguments[ze+2];se.children=dt}return M(O.type,ae,void 0,void 0,Ie,se)},Re.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},Re.createElement=function(O,J,he){var se,ae={},Ie=null;if(J!=null)for(se in J.key!==void 0&&(Ie=""+J.key),J)we.call(J,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(ae[se]=J[se]);var be=arguments.length-2;if(be===1)ae.children=he;else if(1<be){for(var dt=Array(be),ze=0;ze<be;ze++)dt[ze]=arguments[ze+2];ae.children=dt}if(O&&O.defaultProps)for(se in be=O.defaultProps,be)ae[se]===void 0&&(ae[se]=be[se]);return M(O,Ie,void 0,void 0,null,ae)},Re.createRef=function(){return{current:null}},Re.forwardRef=function(O){return{$$typeof:m,render:O}},Re.isValidElement=S,Re.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:ve}},Re.memo=function(O,J){return{$$typeof:y,type:O,compare:J===void 0?null:J}},Re.startTransition=function(O){var J=ue.T,he={};ue.T=he;try{var se=O(),ae=ue.S;ae!==null&&ae(he,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(qe,de)}catch(Ie){de(Ie)}finally{ue.T=J}},Re.unstable_useCacheRefresh=function(){return ue.H.useCacheRefresh()},Re.use=function(O){return ue.H.use(O)},Re.useActionState=function(O,J,he){return ue.H.useActionState(O,J,he)},Re.useCallback=function(O,J){return ue.H.useCallback(O,J)},Re.useContext=function(O){return ue.H.useContext(O)},Re.useDebugValue=function(){},Re.useDeferredValue=function(O,J){return ue.H.useDeferredValue(O,J)},Re.useEffect=function(O,J){return ue.H.useEffect(O,J)},Re.useId=function(){return ue.H.useId()},Re.useImperativeHandle=function(O,J,he){return ue.H.useImperativeHandle(O,J,he)},Re.useInsertionEffect=function(O,J){return ue.H.useInsertionEffect(O,J)},Re.useLayoutEffect=function(O,J){return ue.H.useLayoutEffect(O,J)},Re.useMemo=function(O,J){return ue.H.useMemo(O,J)},Re.useOptimistic=function(O,J){return ue.H.useOptimistic(O,J)},Re.useReducer=function(O,J,he){return ue.H.useReducer(O,J,he)},Re.useRef=function(O){return ue.H.useRef(O)},Re.useState=function(O){return ue.H.useState(O)},Re.useSyncExternalStore=function(O,J,he){return ue.H.useSyncExternalStore(O,J,he)},Re.useTransition=function(){return ue.H.useTransition()},Re.version="19.0.0",Re}var q_;function Vm(){return q_||(q_=1,Bd.exports=mw()),Bd.exports}var F=Vm(),jd={exports:{}},Il={},Hd={exports:{}},qd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_;function pw(){return F_||(F_=1,function(r){function e(re,ve){var de=re.length;re.push(ve);e:for(;0<de;){var qe=de-1>>>1,O=re[qe];if(0<o(O,ve))re[qe]=ve,re[de]=O,de=qe;else break e}}function n(re){return re.length===0?null:re[0]}function s(re){if(re.length===0)return null;var ve=re[0],de=re.pop();if(de!==ve){re[0]=de;e:for(var qe=0,O=re.length,J=O>>>1;qe<J;){var he=2*(qe+1)-1,se=re[he],ae=he+1,Ie=re[ae];if(0>o(se,de))ae<O&&0>o(Ie,se)?(re[qe]=Ie,re[ae]=de,qe=ae):(re[qe]=se,re[he]=de,qe=he);else if(ae<O&&0>o(Ie,de))re[qe]=Ie,re[ae]=de,qe=ae;else break e}}return ve}function o(re,ve){var de=re.sortIndex-ve.sortIndex;return de!==0?de:re.id-ve.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var p=[],y=[],E=1,w=null,D=3,k=!1,z=!1,Q=!1,H=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;function Z(re){for(var ve=n(y);ve!==null;){if(ve.callback===null)s(y);else if(ve.startTime<=re)s(y),ve.sortIndex=ve.expirationTime,e(p,ve);else break;ve=n(y)}}function me(re){if(Q=!1,Z(re),!z)if(n(p)!==null)z=!0,_t();else{var ve=n(y);ve!==null&&ft(me,ve.startTime-re)}}var ue=!1,we=-1,M=5,b=-1;function S(){return!(r.unstable_now()-b<M)}function I(){if(ue){var re=r.unstable_now();b=re;var ve=!0;try{e:{z=!1,Q&&(Q=!1,$(we),we=-1),k=!0;var de=D;try{t:{for(Z(re),w=n(p);w!==null&&!(w.expirationTime>re&&S());){var qe=w.callback;if(typeof qe=="function"){w.callback=null,D=w.priorityLevel;var O=qe(w.expirationTime<=re);if(re=r.unstable_now(),typeof O=="function"){w.callback=O,Z(re),ve=!0;break t}w===n(p)&&s(p),Z(re)}else s(p);w=n(p)}if(w!==null)ve=!0;else{var J=n(y);J!==null&&ft(me,J.startTime-re),ve=!1}}break e}finally{w=null,D=de,k=!1}ve=void 0}}finally{ve?V():ue=!1}}}var V;if(typeof ne=="function")V=function(){ne(I)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,C=U.port2;U.port1.onmessage=I,V=function(){C.postMessage(null)}}else V=function(){H(I,0)};function _t(){ue||(ue=!0,V())}function ft(re,ve){we=H(function(){re(r.unstable_now())},ve)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(re){re.callback=null},r.unstable_continueExecution=function(){z||k||(z=!0,_t())},r.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<re?Math.floor(1e3/re):5},r.unstable_getCurrentPriorityLevel=function(){return D},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(re){switch(D){case 1:case 2:case 3:var ve=3;break;default:ve=D}var de=D;D=ve;try{return re()}finally{D=de}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(re,ve){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var de=D;D=re;try{return ve()}finally{D=de}},r.unstable_scheduleCallback=function(re,ve,de){var qe=r.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?qe+de:qe):de=qe,re){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=de+O,re={id:E++,callback:ve,priorityLevel:re,startTime:de,expirationTime:O,sortIndex:-1},de>qe?(re.sortIndex=de,e(y,re),n(p)===null&&re===n(y)&&(Q?($(we),we=-1):Q=!0,ft(me,de-qe))):(re.sortIndex=O,e(p,re),z||k||(z=!0,_t())),re},r.unstable_shouldYield=S,r.unstable_wrapCallback=function(re){var ve=D;return function(){var de=D;D=ve;try{return re.apply(this,arguments)}finally{D=de}}}}(qd)),qd}var G_;function gw(){return G_||(G_=1,Hd.exports=pw()),Hd.exports}var Fd={exports:{}},Gt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_;function yw(){if(K_)return Gt;K_=1;var r=Vm();function e(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,y,E){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:w==null?null:""+w,children:p,containerInfo:y,implementation:E}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Gt.createPortal=function(p,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return u(p,y,null,E)},Gt.flushSync=function(p){var y=f.T,E=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=y,s.p=E,s.d.f()}},Gt.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},Gt.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Gt.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var E=y.as,w=m(E,y.crossOrigin),D=typeof y.integrity=="string"?y.integrity:void 0,k=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:w,integrity:D,fetchPriority:k}):E==="script"&&s.d.X(p,{crossOrigin:w,integrity:D,fetchPriority:k,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Gt.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=m(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},Gt.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,w=m(E,y.crossOrigin);s.d.L(p,E,{crossOrigin:w,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Gt.preloadModule=function(p,y){if(typeof p=="string")if(y){var E=m(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},Gt.requestFormReset=function(p){s.d.r(p)},Gt.unstable_batchedUpdates=function(p,y){return p(y)},Gt.useFormState=function(p,y,E){return f.H.useFormState(p,y,E)},Gt.useFormStatus=function(){return f.H.useHostTransitionStatus()},Gt.version="19.0.0",Gt}var $_;function _w(){if($_)return Fd.exports;$_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Fd.exports=yw(),Fd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_;function vw(){if(Q_)return Il;Q_=1;var r=gw(),e=Vm(),n=_w();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var u=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),D=Symbol.for("react.consumer"),k=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),Z=Symbol.for("react.offscreen"),me=Symbol.for("react.memo_cache_sentinel"),ue=Symbol.iterator;function we(t){return t===null||typeof t!="object"?null:(t=ue&&t[ue]||t["@@iterator"],typeof t=="function"?t:null)}var M=Symbol.for("react.client.reference");function b(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===M?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case p:return"Fragment";case m:return"Portal";case E:return"Profiler";case y:return"StrictMode";case Q:return"Suspense";case H:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case k:return(t.displayName||"Context")+".Provider";case D:return(t._context.displayName||"Context")+".Consumer";case z:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $:return i=t.displayName||null,i!==null?i:b(t.type)||"Memo";case ne:i=t._payload,t=t._init;try{return b(t(i))}catch{}}return null}var S=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=Object.assign,V,U;function C(t){if(V===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);V=i&&i[1]||"",U=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+V+t+U}var _t=!1;function ft(t,i){if(!t||_t)return"";_t=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(G){var j=G}Reflect.construct(t,[],W)}else{try{W.call()}catch(G){j=G}t.call(W.prototype)}}else{try{throw Error()}catch(G){j=G}(W=t())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(G){if(G&&j&&typeof G.stack=="string")return[G.stack,j.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var R=v.split(`
`),P=T.split(`
`);for(h=l=0;l<R.length&&!R[l].includes("DetermineComponentFrameRoot");)l++;for(;h<P.length&&!P[h].includes("DetermineComponentFrameRoot");)h++;if(l===R.length||h===P.length)for(l=R.length-1,h=P.length-1;1<=l&&0<=h&&R[l]!==P[h];)h--;for(;1<=l&&0<=h;l--,h--)if(R[l]!==P[h]){if(l!==1||h!==1)do if(l--,h--,0>h||R[l]!==P[h]){var K=`
`+R[l].replace(" at new "," at ");return t.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",t.displayName)),K}while(1<=l&&0<=h);break}}}finally{_t=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?C(a):""}function re(t){switch(t.tag){case 26:case 27:case 5:return C(t.type);case 16:return C("Lazy");case 13:return C("Suspense");case 19:return C("SuspenseList");case 0:case 15:return t=ft(t.type,!1),t;case 11:return t=ft(t.type.render,!1),t;case 1:return t=ft(t.type,!0),t;default:return""}}function ve(t){try{var i="";do i+=re(t),t=t.return;while(t);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function de(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function qe(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function O(t){if(de(t)!==t)throw Error(s(188))}function J(t){var i=t.alternate;if(!i){if(i=de(t),i===null)throw Error(s(188));return i!==t?null:t}for(var a=t,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return O(h),t;if(d===l)return O(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,T=h.child;T;){if(T===a){v=!0,a=h,l=d;break}if(T===l){v=!0,l=h,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,l=h;break}if(T===l){v=!0,l=d,a=h;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:i}function he(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=he(t),i!==null)return i;t=t.sibling}return null}var se=Array.isArray,ae=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ie={pending:!1,data:null,method:null,action:null},be=[],dt=-1;function ze(t){return{current:t}}function it(t){0>dt||(t.current=be[dt],be[dt]=null,dt--)}function Ke(t,i){dt++,be[dt]=t.current,t.current=i}var Xt=ze(null),Ai=ze(null),_n=ze(null),lr=ze(null);function ur(t,i){switch(Ke(_n,i),Ke(Ai,t),Ke(Xt,null),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)&&(i=i.namespaceURI)?p_(i):0;break;default:if(t=t===8?i.parentNode:i,i=t.tagName,t=t.namespaceURI)t=p_(t),i=g_(t,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}it(Xt),Ke(Xt,i)}function Si(){it(Xt),it(Ai),it(_n)}function To(t){t.memoizedState!==null&&Ke(lr,t);var i=Xt.current,a=g_(i,t.type);i!==a&&(Ke(Ai,t),Ke(Xt,a))}function ra(t){Ai.current===t&&(it(Xt),it(Ai)),lr.current===t&&(it(lr),Tl._currentValue=Ie)}var sa=Object.prototype.hasOwnProperty,hs=r.unstable_scheduleCallback,aa=r.unstable_cancelCallback,Bh=r.unstable_shouldYield,Ao=r.unstable_requestPaint,sn=r.unstable_now,hu=r.unstable_getCurrentPriorityLevel,vt=r.unstable_ImmediatePriority,Ct=r.unstable_UserBlockingPriority,wi=r.unstable_NormalPriority,fu=r.unstable_LowPriority,So=r.unstable_IdlePriority,jh=r.log,fs=r.unstable_setDisableYieldValue,cr=null,qt=null;function wo(t){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(cr,t,void 0,(t.current.flags&128)===128)}catch{}}function Wn(t){if(typeof jh=="function"&&fs(t),qt&&typeof qt.setStrictMode=="function")try{qt.setStrictMode(cr,t)}catch{}}var Wt=Math.clz32?Math.clz32:mu,bo=Math.log,du=Math.LN2;function mu(t){return t>>>=0,t===0?32:31-(bo(t)/du|0)|0}var Zn=128,hr=4194304;function zn(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function vn(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,h=t.suspendedLanes,d=t.pingedLanes,v=t.warmLanes;t=t.finishedLanes!==0;var T=a&134217727;return T!==0?(a=T&~h,a!==0?l=zn(a):(d&=T,d!==0?l=zn(d):t||(v=T&~v,v!==0&&(l=zn(v))))):(T=a&~h,T!==0?l=zn(T):d!==0?l=zn(d):t||(v=a&~v,v!==0&&(l=zn(v)))),l===0?0:i!==0&&i!==l&&(i&h)===0&&(h=l&-l,v=i&-i,h>=v||h===32&&(v&4194176)!==0)?i:l}function fr(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function oa(t,i){switch(t){case 1:case 2:case 4:case 8:return i+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ro(){var t=Zn;return Zn<<=1,(Zn&4194176)===0&&(Zn=128),t}function dr(){var t=hr;return hr<<=1,(hr&62914560)===0&&(hr=4194304),t}function la(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function ut(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function pu(t,i,a,l,h,d){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,R=t.expirationTimes,P=t.hiddenUpdates;for(a=v&~a;0<a;){var K=31-Wt(a),W=1<<K;T[K]=0,R[K]=-1;var j=P[K];if(j!==null)for(P[K]=null,K=0;K<j.length;K++){var G=j[K];G!==null&&(G.lane&=-536870913)}a&=~W}l!==0&&mr(t,l,0),d!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=d&~(v&~i))}function mr(t,i,a){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Wt(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194218}function pr(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Wt(a),h=1<<l;h&i|t[l]&i&&(t[l]|=i),a&=~h}}function gu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function yu(){var t=ae.p;return t!==0?t:(t=window.event,t===void 0?32:P_(t.type))}function gr(t,i){var a=ae.p;try{return ae.p=t,i()}finally{ae.p=a}}var Jn=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Jn,Et="__reactProps$"+Jn,bi="__reactContainer$"+Jn,ds="__reactEvents$"+Jn,ua="__reactListeners$"+Jn,ei="__reactHandles$"+Jn,Io="__reactResources$"+Jn,yr="__reactMarker$"+Jn;function ms(t){delete t[Dt],delete t[Et],delete t[ds],delete t[ua],delete t[ei]}function Bn(t){var i=t[Dt];if(i)return i;for(var a=t.parentNode;a;){if(i=a[bi]||a[Dt]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=v_(t);t!==null;){if(a=t[Dt])return a;t=v_(t)}return i}t=a,a=t.parentNode}return null}function Ri(t){if(t=t[Dt]||t[bi]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function _r(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function vr(t){var i=t[Io];return i||(i=t[Io]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Je(t){t[yr]=!0}var Co=new Set,ca={};function cn(t,i){an(t,i),an(t+"Capture",i)}function an(t,i){for(ca[t]=i,t=0;t<i.length;t++)Co.add(i[t])}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Do={},Oo={};function _u(t){return sa.call(Oo,t)?!0:sa.call(Do,t)?!1:Hh.test(t)?Oo[t]=!0:(Do[t]=!0,!1)}function Er(t,i,a){if(_u(i))if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+a)}}function Tr(t,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+a)}}function En(t,i,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(i,a,""+l)}}function Zt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vu(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function qh(t){var i=vu(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ps(t){t._valueTracker||(t._valueTracker=qh(t))}function No(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=vu(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function ha(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ii=/[\n"\\]/g;function rt(t){return t.replace(Ii,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ar(t,i,a,l,h,d,v,T){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),i!=null?v==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+Zt(i)):t.value!==""+Zt(i)&&(t.value=""+Zt(i)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),i!=null?fa(t,v,Zt(i)):a!=null?fa(t,v,Zt(a)):l!=null&&t.removeAttribute("value"),h==null&&d!=null&&(t.defaultChecked=!!d),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Zt(T):t.removeAttribute("name")}function gs(t,i,a,l,h,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+Zt(a):"",i=i!=null?""+Zt(i):a,T||i===t.value||(t.value=i),t.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=T?t.checked:!!l,t.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v)}function fa(t,i,a){i==="number"&&ha(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Be(t,i,a,l){if(t=t.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=i.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Zt(a),i=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function ys(t,i,a){if(i!=null&&(i=""+Zt(i),i!==t.value&&(t.value=i),a==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=a!=null?""+Zt(a):""}function Sr(t,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(se(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=Zt(i),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function Tn(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Fh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mo(t,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,a):typeof a!="number"||a===0||Fh.has(i)?i==="float"?t.cssFloat=a:t[i]=(""+a).trim():t[i]=a+"px"}function Eu(t,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&Mo(t,h,l)}else for(var d in i)i.hasOwnProperty(d)&&Mo(t,d,i[d])}function Vo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Kh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ti(t){return Kh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var An=null;function da(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ci=null,Di=null;function Oi(t){var i=Ri(t);if(i&&(t=i.stateNode)){var a=t[Et]||null;e:switch(t=i.stateNode,i.type){case"input":if(Ar(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+rt(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var h=l[Et]||null;if(!h)throw Error(s(90));Ar(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===t.form&&No(l)}break e;case"textarea":ys(t,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&Be(t,!!a.multiple,i,!1)}}}var Po=!1;function Tu(t,i,a){if(Po)return t(i,a);Po=!0;try{var l=t(i);return l}finally{if(Po=!1,(Ci!==null||Di!==null)&&(fc(),Ci&&(i=Ci,t=Di,Di=Ci=null,Oi(i),t)))for(i=0;i<t.length;i++)Oi(t[i])}}function _s(t,i){var a=t.stateNode;if(a===null)return null;var l=a[Et]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Sn=!1;if(hn)try{var vs={};Object.defineProperty(vs,"passive",{get:function(){Sn=!0}}),window.addEventListener("test",vs,vs),window.removeEventListener("test",vs,vs)}catch{Sn=!1}var ni=null,wr=null,Ni=null;function ko(){if(Ni)return Ni;var t,i=wr,a=i.length,l,h="value"in ni?ni.value:ni.textContent,d=h.length;for(t=0;t<a&&i[t]===h[t];t++);var v=a-t;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return Ni=h.slice(t,1<l?1-l:void 0)}function ii(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ri(){return!0}function xo(){return!1}function Ot(t){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ri:xo,this.isPropagationStopped=xo,this}return I(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ri)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ri)},persist:function(){},isPersistent:ri}),i}var Fe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ma=Ot(Fe),Es=I({},Fe,{view:0,detail:0}),Au=Ot(Es),pa,ga,si,Ts=I({},Es,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ws,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==si&&(si&&t.type==="mousemove"?(pa=t.screenX-si.screenX,ga=t.screenY-si.screenY):ga=pa=0,si=t),pa)},movementY:function(t){return"movementY"in t?t.movementY:ga}}),wn=Ot(Ts),Su=I({},Ts,{dataTransfer:0}),$h=Ot(Su),As=I({},Es,{relatedTarget:0}),ya=Ot(As),Lo=I({},Fe,{animationName:0,elapsedTime:0,pseudoElement:0}),_a=Ot(Lo),wu=I({},Fe,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),va=Ot(wu),Qh=I({},Fe,{data:0}),Uo=Ot(Qh),Ss={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ru={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zo(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Ru[t])?!!i[t]:!1}function ws(){return zo}var Iu=I({},Es,{key:function(t){if(t.key){var i=Ss[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ii(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ws,charCode:function(t){return t.type==="keypress"?ii(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ii(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ea=Ot(Iu),Cu=I({},Ts,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bo=Ot(Cu),Mi=I({},Es,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ws}),Du=Ot(Mi),Ou=I({},Fe,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nu=Ot(Ou),Mu=I({},Ts,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ta=Ot(Mu),Jt=I({},Fe,{newState:0,oldState:0}),Vu=Ot(Jt),Pu=[9,13,27,32],ai=hn&&"CompositionEvent"in window,c=null;hn&&"documentMode"in document&&(c=document.documentMode);var g=hn&&"TextEvent"in window&&!c,_=hn&&(!ai||c&&8<c&&11>=c),A=" ",L=!1;function q(t,i){switch(t){case"keyup":return Pu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ie(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ke=!1;function Tt(t,i){switch(t){case"compositionend":return ie(i);case"keypress":return i.which!==32?null:(L=!0,A);case"textInput":return t=i.data,t===A&&L?null:t;default:return null}}function xe(t,i){if(ke)return t==="compositionend"||!ai&&q(t,i)?(t=ko(),Ni=wr=ni=null,ke=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var Nt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function At(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Nt[t.type]:i==="textarea"}function Vi(t,i,a,l){Ci?Di?Di.push(l):Di=[l]:Ci=l,i=yc(i,"onChange"),0<i.length&&(a=new ma("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var xt=null,oi=null;function jo(t){c_(t,0)}function ku(t){var i=_r(t);if(No(i))return t}function zp(t,i){if(t==="change")return i}var Bp=!1;if(hn){var Yh;if(hn){var Xh="oninput"in document;if(!Xh){var jp=document.createElement("div");jp.setAttribute("oninput","return;"),Xh=typeof jp.oninput=="function"}Yh=Xh}else Yh=!1;Bp=Yh&&(!document.documentMode||9<document.documentMode)}function Hp(){xt&&(xt.detachEvent("onpropertychange",qp),oi=xt=null)}function qp(t){if(t.propertyName==="value"&&ku(oi)){var i=[];Vi(i,oi,t,da(t)),Tu(jo,i)}}function HA(t,i,a){t==="focusin"?(Hp(),xt=i,oi=a,xt.attachEvent("onpropertychange",qp)):t==="focusout"&&Hp()}function qA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ku(oi)}function FA(t,i){if(t==="click")return ku(i)}function GA(t,i){if(t==="input"||t==="change")return ku(i)}function KA(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var fn=typeof Object.is=="function"?Object.is:KA;function Ho(t,i){if(fn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!sa.call(i,h)||!fn(t[h],i[h]))return!1}return!0}function Fp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gp(t,i){var a=Fp(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Fp(a)}}function Kp(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Kp(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function $p(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=ha(t.document);i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=ha(t.document)}return i}function Wh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function $A(t,i){var a=$p(i);i=t.focusedElem;var l=t.selectionRange;if(a!==i&&i&&i.ownerDocument&&Kp(i.ownerDocument.documentElement,i)){if(l!==null&&Wh(i)){if(t=l.start,a=l.end,a===void 0&&(a=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(a,i.value.length);else if(a=(t=i.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var h=i.textContent.length,d=Math.min(l.start,h);l=l.end===void 0?d:Math.min(l.end,h),!a.extend&&d>l&&(h=l,l=d,d=h),h=Gp(i,d);var v=Gp(i,l);h&&v&&(a.rangeCount!==1||a.anchorNode!==h.node||a.anchorOffset!==h.offset||a.focusNode!==v.node||a.focusOffset!==v.offset)&&(t=t.createRange(),t.setStart(h.node,h.offset),a.removeAllRanges(),d>l?(a.addRange(t),a.extend(v.node,v.offset)):(t.setEnd(v.node,v.offset),a.addRange(t)))}}for(t=[],a=i;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)a=t[i],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var QA=hn&&"documentMode"in document&&11>=document.documentMode,Aa=null,Zh=null,qo=null,Jh=!1;function Qp(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Jh||Aa==null||Aa!==ha(l)||(l=Aa,"selectionStart"in l&&Wh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),qo&&Ho(qo,l)||(qo=l,l=yc(Zh,"onSelect"),0<l.length&&(i=new ma("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=Aa)))}function bs(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var Sa={animationend:bs("Animation","AnimationEnd"),animationiteration:bs("Animation","AnimationIteration"),animationstart:bs("Animation","AnimationStart"),transitionrun:bs("Transition","TransitionRun"),transitionstart:bs("Transition","TransitionStart"),transitioncancel:bs("Transition","TransitionCancel"),transitionend:bs("Transition","TransitionEnd")},ef={},Yp={};hn&&(Yp=document.createElement("div").style,"AnimationEvent"in window||(delete Sa.animationend.animation,delete Sa.animationiteration.animation,delete Sa.animationstart.animation),"TransitionEvent"in window||delete Sa.transitionend.transition);function Rs(t){if(ef[t])return ef[t];if(!Sa[t])return t;var i=Sa[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Yp)return ef[t]=i[a];return t}var Xp=Rs("animationend"),Wp=Rs("animationiteration"),Zp=Rs("animationstart"),YA=Rs("transitionrun"),XA=Rs("transitionstart"),WA=Rs("transitioncancel"),Jp=Rs("transitionend"),eg=new Map,tg="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function jn(t,i){eg.set(t,i),cn(i,[t])}var bn=[],wa=0,tf=0;function xu(){for(var t=wa,i=tf=wa=0;i<t;){var a=bn[i];bn[i++]=null;var l=bn[i];bn[i++]=null;var h=bn[i];bn[i++]=null;var d=bn[i];if(bn[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&ng(a,h,d)}}function Lu(t,i,a,l){bn[wa++]=t,bn[wa++]=i,bn[wa++]=a,bn[wa++]=l,tf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function nf(t,i,a,l){return Lu(t,i,a,l),Uu(t)}function br(t,i){return Lu(t,null,null,i),Uu(t)}function ng(t,i,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=t.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(h=!0)),t=d,d=d.return;h&&i!==null&&t.tag===3&&(d=t.stateNode,h=31-Wt(a),d=d.hiddenUpdates,t=d[h],t===null?d[h]=[i]:t.push(i),i.lane=a|536870912)}function Uu(t){if(50<ml)throw ml=0,ud=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var ba={},ig=new WeakMap;function Rn(t,i){if(typeof t=="object"&&t!==null){var a=ig.get(t);return a!==void 0?a:(i={value:t,source:i,stack:ve(i)},ig.set(t,i),i)}return{value:t,source:i,stack:ve(i)}}var Ra=[],Ia=0,zu=null,Bu=0,In=[],Cn=0,Is=null,Pi=1,ki="";function Cs(t,i){Ra[Ia++]=Bu,Ra[Ia++]=zu,zu=t,Bu=i}function rg(t,i,a){In[Cn++]=Pi,In[Cn++]=ki,In[Cn++]=Is,Is=t;var l=Pi;t=ki;var h=32-Wt(l)-1;l&=~(1<<h),a+=1;var d=32-Wt(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Pi=1<<32-Wt(i)+h|a<<h|l,ki=d+t}else Pi=1<<d|a<<h|l,ki=t}function rf(t){t.return!==null&&(Cs(t,1),rg(t,1,0))}function sf(t){for(;t===zu;)zu=Ra[--Ia],Ra[Ia]=null,Bu=Ra[--Ia],Ra[Ia]=null;for(;t===Is;)Is=In[--Cn],In[Cn]=null,ki=In[--Cn],In[Cn]=null,Pi=In[--Cn],In[Cn]=null}var en=null,Lt=null,je=!1,Hn=null,li=!1,af=Error(s(519));function Ds(t){var i=Error(s(418,""));throw Ko(Rn(i,t)),af}function sg(t){var i=t.stateNode,a=t.type,l=t.memoizedProps;switch(i[Dt]=t,i[Et]=l,a){case"dialog":Ve("cancel",i),Ve("close",i);break;case"iframe":case"object":case"embed":Ve("load",i);break;case"video":case"audio":for(a=0;a<gl.length;a++)Ve(gl[a],i);break;case"source":Ve("error",i);break;case"img":case"image":case"link":Ve("error",i),Ve("load",i);break;case"details":Ve("toggle",i);break;case"input":Ve("invalid",i),gs(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ps(i);break;case"select":Ve("invalid",i);break;case"textarea":Ve("invalid",i),Sr(i,l.value,l.defaultValue,l.children),ps(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||m_(i.textContent,a)?(l.popover!=null&&(Ve("beforetoggle",i),Ve("toggle",i)),l.onScroll!=null&&Ve("scroll",i),l.onScrollEnd!=null&&Ve("scrollend",i),l.onClick!=null&&(i.onclick=_c),i=!0):i=!1,i||Ds(t)}function ag(t){for(en=t.return;en;)switch(en.tag){case 3:case 27:li=!0;return;case 5:case 13:li=!1;return;default:en=en.return}}function Fo(t){if(t!==en)return!1;if(!je)return ag(t),je=!0,!1;var i=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Rd(t.type,t.memoizedProps)),a=!a),a&&(i=!0),i&&Lt&&Ds(t),ag(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(i===0){Lt=Fn(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;t=t.nextSibling}Lt=null}}else Lt=en?Fn(t.stateNode.nextSibling):null;return!0}function Go(){Lt=en=null,je=!1}function Ko(t){Hn===null?Hn=[t]:Hn.push(t)}var $o=Error(s(460)),og=Error(s(474)),of={then:function(){}};function lg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ju(){}function ug(t,i,a){switch(a=t[a],a===void 0?t.push(i):a!==i&&(i.then(ju,ju),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,t===$o?Error(s(483)):t;default:if(typeof i.status=="string")i.then(ju,ju);else{if(t=Xe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,t===$o?Error(s(483)):t}throw Qo=i,$o}}var Qo=null;function cg(){if(Qo===null)throw Error(s(459));var t=Qo;return Qo=null,t}var Ca=null,Yo=0;function Hu(t){var i=Yo;return Yo+=1,Ca===null&&(Ca=[]),ug(Ca,t,i)}function Xo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function qu(t,i){throw i.$$typeof===u?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function hg(t){var i=t._init;return i(t._payload)}function fg(t){function i(x,N){if(t){var B=x.deletions;B===null?(x.deletions=[N],x.flags|=16):B.push(N)}}function a(x,N){if(!t)return null;for(;N!==null;)i(x,N),N=N.sibling;return null}function l(x){for(var N=new Map;x!==null;)x.key!==null?N.set(x.key,x):N.set(x.index,x),x=x.sibling;return N}function h(x,N){return x=Lr(x,N),x.index=0,x.sibling=null,x}function d(x,N,B){return x.index=B,t?(B=x.alternate,B!==null?(B=B.index,B<N?(x.flags|=33554434,N):B):(x.flags|=33554434,N)):(x.flags|=1048576,N)}function v(x){return t&&x.alternate===null&&(x.flags|=33554434),x}function T(x,N,B,Y){return N===null||N.tag!==6?(N=td(B,x.mode,Y),N.return=x,N):(N=h(N,B),N.return=x,N)}function R(x,N,B,Y){var le=B.type;return le===p?K(x,N,B.props.children,Y,B.key):N!==null&&(N.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ne&&hg(le)===N.type)?(N=h(N,B.props),Xo(N,B),N.return=x,N):(N=oc(B.type,B.key,B.props,null,x.mode,Y),Xo(N,B),N.return=x,N)}function P(x,N,B,Y){return N===null||N.tag!==4||N.stateNode.containerInfo!==B.containerInfo||N.stateNode.implementation!==B.implementation?(N=nd(B,x.mode,Y),N.return=x,N):(N=h(N,B.children||[]),N.return=x,N)}function K(x,N,B,Y,le){return N===null||N.tag!==7?(N=zs(B,x.mode,Y,le),N.return=x,N):(N=h(N,B),N.return=x,N)}function W(x,N,B){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=td(""+N,x.mode,B),N.return=x,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case f:return B=oc(N.type,N.key,N.props,null,x.mode,B),Xo(B,N),B.return=x,B;case m:return N=nd(N,x.mode,B),N.return=x,N;case ne:var Y=N._init;return N=Y(N._payload),W(x,N,B)}if(se(N)||we(N))return N=zs(N,x.mode,B,null),N.return=x,N;if(typeof N.then=="function")return W(x,Hu(N),B);if(N.$$typeof===k)return W(x,rc(x,N),B);qu(x,N)}return null}function j(x,N,B,Y){var le=N!==null?N.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return le!==null?null:T(x,N,""+B,Y);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case f:return B.key===le?R(x,N,B,Y):null;case m:return B.key===le?P(x,N,B,Y):null;case ne:return le=B._init,B=le(B._payload),j(x,N,B,Y)}if(se(B)||we(B))return le!==null?null:K(x,N,B,Y,null);if(typeof B.then=="function")return j(x,N,Hu(B),Y);if(B.$$typeof===k)return j(x,N,rc(x,B),Y);qu(x,B)}return null}function G(x,N,B,Y,le){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return x=x.get(B)||null,T(N,x,""+Y,le);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case f:return x=x.get(Y.key===null?B:Y.key)||null,R(N,x,Y,le);case m:return x=x.get(Y.key===null?B:Y.key)||null,P(N,x,Y,le);case ne:var De=Y._init;return Y=De(Y._payload),G(x,N,B,Y,le)}if(se(Y)||we(Y))return x=x.get(B)||null,K(N,x,Y,le,null);if(typeof Y.then=="function")return G(x,N,B,Hu(Y),le);if(Y.$$typeof===k)return G(x,N,B,rc(N,Y),le);qu(N,Y)}return null}function ce(x,N,B,Y){for(var le=null,De=null,fe=N,ye=N=0,Pt=null;fe!==null&&ye<B.length;ye++){fe.index>ye?(Pt=fe,fe=null):Pt=fe.sibling;var He=j(x,fe,B[ye],Y);if(He===null){fe===null&&(fe=Pt);break}t&&fe&&He.alternate===null&&i(x,fe),N=d(He,N,ye),De===null?le=He:De.sibling=He,De=He,fe=Pt}if(ye===B.length)return a(x,fe),je&&Cs(x,ye),le;if(fe===null){for(;ye<B.length;ye++)fe=W(x,B[ye],Y),fe!==null&&(N=d(fe,N,ye),De===null?le=fe:De.sibling=fe,De=fe);return je&&Cs(x,ye),le}for(fe=l(fe);ye<B.length;ye++)Pt=G(fe,x,ye,B[ye],Y),Pt!==null&&(t&&Pt.alternate!==null&&fe.delete(Pt.key===null?ye:Pt.key),N=d(Pt,N,ye),De===null?le=Pt:De.sibling=Pt,De=Pt);return t&&fe.forEach(function(Fr){return i(x,Fr)}),je&&Cs(x,ye),le}function Ae(x,N,B,Y){if(B==null)throw Error(s(151));for(var le=null,De=null,fe=N,ye=N=0,Pt=null,He=B.next();fe!==null&&!He.done;ye++,He=B.next()){fe.index>ye?(Pt=fe,fe=null):Pt=fe.sibling;var Fr=j(x,fe,He.value,Y);if(Fr===null){fe===null&&(fe=Pt);break}t&&fe&&Fr.alternate===null&&i(x,fe),N=d(Fr,N,ye),De===null?le=Fr:De.sibling=Fr,De=Fr,fe=Pt}if(He.done)return a(x,fe),je&&Cs(x,ye),le;if(fe===null){for(;!He.done;ye++,He=B.next())He=W(x,He.value,Y),He!==null&&(N=d(He,N,ye),De===null?le=He:De.sibling=He,De=He);return je&&Cs(x,ye),le}for(fe=l(fe);!He.done;ye++,He=B.next())He=G(fe,x,ye,He.value,Y),He!==null&&(t&&He.alternate!==null&&fe.delete(He.key===null?ye:He.key),N=d(He,N,ye),De===null?le=He:De.sibling=He,De=He);return t&&fe.forEach(function(hw){return i(x,hw)}),je&&Cs(x,ye),le}function ot(x,N,B,Y){if(typeof B=="object"&&B!==null&&B.type===p&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case f:e:{for(var le=B.key;N!==null;){if(N.key===le){if(le=B.type,le===p){if(N.tag===7){a(x,N.sibling),Y=h(N,B.props.children),Y.return=x,x=Y;break e}}else if(N.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ne&&hg(le)===N.type){a(x,N.sibling),Y=h(N,B.props),Xo(Y,B),Y.return=x,x=Y;break e}a(x,N);break}else i(x,N);N=N.sibling}B.type===p?(Y=zs(B.props.children,x.mode,Y,B.key),Y.return=x,x=Y):(Y=oc(B.type,B.key,B.props,null,x.mode,Y),Xo(Y,B),Y.return=x,x=Y)}return v(x);case m:e:{for(le=B.key;N!==null;){if(N.key===le)if(N.tag===4&&N.stateNode.containerInfo===B.containerInfo&&N.stateNode.implementation===B.implementation){a(x,N.sibling),Y=h(N,B.children||[]),Y.return=x,x=Y;break e}else{a(x,N);break}else i(x,N);N=N.sibling}Y=nd(B,x.mode,Y),Y.return=x,x=Y}return v(x);case ne:return le=B._init,B=le(B._payload),ot(x,N,B,Y)}if(se(B))return ce(x,N,B,Y);if(we(B)){if(le=we(B),typeof le!="function")throw Error(s(150));return B=le.call(B),Ae(x,N,B,Y)}if(typeof B.then=="function")return ot(x,N,Hu(B),Y);if(B.$$typeof===k)return ot(x,N,rc(x,B),Y);qu(x,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,N!==null&&N.tag===6?(a(x,N.sibling),Y=h(N,B),Y.return=x,x=Y):(a(x,N),Y=td(B,x.mode,Y),Y.return=x,x=Y),v(x)):a(x,N)}return function(x,N,B,Y){try{Yo=0;var le=ot(x,N,B,Y);return Ca=null,le}catch(fe){if(fe===$o)throw fe;var De=Mn(29,fe,null,x.mode);return De.lanes=Y,De.return=x,De}finally{}}}var Os=fg(!0),dg=fg(!1),Da=ze(null),Fu=ze(0);function mg(t,i){t=Ki,Ke(Fu,t),Ke(Da,i),Ki=t|i.baseLanes}function lf(){Ke(Fu,Ki),Ke(Da,Da.current)}function uf(){Ki=Fu.current,it(Da),it(Fu)}var Dn=ze(null),ui=null;function Rr(t){var i=t.alternate;Ke(St,St.current&1),Ke(Dn,t),ui===null&&(i===null||Da.current!==null||i.memoizedState!==null)&&(ui=t)}function pg(t){if(t.tag===22){if(Ke(St,St.current),Ke(Dn,t),ui===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(ui=t)}}else Ir()}function Ir(){Ke(St,St.current),Ke(Dn,Dn.current)}function xi(t){it(Dn),ui===t&&(ui=null),it(St)}var St=ze(0);function Gu(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ZA=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(a){return a()})}},JA=r.unstable_scheduleCallback,eS=r.unstable_NormalPriority,wt={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cf(){return{controller:new ZA,data:new Map,refCount:0}}function Wo(t){t.refCount--,t.refCount===0&&JA(eS,function(){t.controller.abort()})}var Zo=null,hf=0,Oa=0,Na=null;function tS(t,i){if(Zo===null){var a=Zo=[];hf=0,Oa=yd(),Na={status:"pending",value:void 0,then:function(l){a.push(l)}}}return hf++,i.then(gg,gg),i}function gg(){if(--hf===0&&Zo!==null){Na!==null&&(Na.status="fulfilled");var t=Zo;Zo=null,Oa=0,Na=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function nS(t,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var yg=S.S;S.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&tS(t,i),yg!==null&&yg(t,i)};var Ns=ze(null);function ff(){var t=Ns.current;return t!==null?t:Xe.pooledCache}function Ku(t,i){i===null?Ke(Ns,Ns.current):Ke(Ns,i.pool)}function _g(){var t=ff();return t===null?null:{parent:wt._currentValue,pool:t}}var Cr=0,Ce=null,$e=null,mt=null,$u=!1,Ma=!1,Ms=!1,Qu=0,Jo=0,Va=null,iS=0;function ct(){throw Error(s(321))}function df(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!fn(t[a],i[a]))return!1;return!0}function mf(t,i,a,l,h,d){return Cr=d,Ce=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,S.H=t===null||t.memoizedState===null?Vs:Dr,Ms=!1,d=a(l,h),Ms=!1,Ma&&(d=Eg(i,a,l,h)),vg(t),d}function vg(t){S.H=ci;var i=$e!==null&&$e.next!==null;if(Cr=0,mt=$e=Ce=null,$u=!1,Jo=0,Va=null,i)throw Error(s(300));t===null||Mt||(t=t.dependencies,t!==null&&ic(t)&&(Mt=!0))}function Eg(t,i,a,l){Ce=t;var h=0;do{if(Ma&&(Va=null),Jo=0,Ma=!1,25<=h)throw Error(s(301));if(h+=1,mt=$e=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}S.H=Ps,d=i(a,l)}while(Ma);return d}function rS(){var t=S.H,i=t.useState()[0];return i=typeof i.then=="function"?el(i):i,t=t.useState()[0],($e!==null?$e.memoizedState:null)!==t&&(Ce.flags|=1024),i}function pf(){var t=Qu!==0;return Qu=0,t}function gf(t,i,a){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~a}function yf(t){if($u){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}$u=!1}Cr=0,mt=$e=Ce=null,Ma=!1,Jo=Qu=0,Va=null}function on(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?Ce.memoizedState=mt=t:mt=mt.next=t,mt}function pt(){if($e===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var i=mt===null?Ce.memoizedState:mt.next;if(i!==null)mt=i,$e=t;else{if(t===null)throw Ce.alternate===null?Error(s(467)):Error(s(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},mt===null?Ce.memoizedState=mt=t:mt=mt.next=t}return mt}var Yu;Yu=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function el(t){var i=Jo;return Jo+=1,Va===null&&(Va=[]),t=ug(Va,t,i),i=Ce,(mt===null?i.memoizedState:mt.next)===null&&(i=i.alternate,S.H=i===null||i.memoizedState===null?Vs:Dr),t}function Xu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return el(t);if(t.$$typeof===k)return Ft(t)}throw Error(s(438,String(t)))}function _f(t){var i=null,a=Ce.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Ce.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Yu(),Ce.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(t),l=0;l<t;l++)a[l]=me;return i.index++,a}function Li(t,i){return typeof i=="function"?i(t):i}function Wu(t){var i=pt();return vf(i,$e,t)}function vf(t,i,a){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=t.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=t.baseState,h===null)t.memoizedState=d;else{i=h.next;var T=v=null,R=null,P=i,K=!1;do{var W=P.lane&-536870913;if(W!==P.lane?(Le&W)===W:(Cr&W)===W){var j=P.revertLane;if(j===0)R!==null&&(R=R.next={lane:0,revertLane:0,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),W===Oa&&(K=!0);else if((Cr&j)===j){P=P.next,j===Oa&&(K=!0);continue}else W={lane:0,revertLane:P.revertLane,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},R===null?(T=R=W,v=d):R=R.next=W,Ce.lanes|=j,Ur|=j;W=P.action,Ms&&a(d,W),d=P.hasEagerState?P.eagerState:a(d,W)}else j={lane:W,revertLane:P.revertLane,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},R===null?(T=R=j,v=d):R=R.next=j,Ce.lanes|=W,Ur|=W;P=P.next}while(P!==null&&P!==i);if(R===null?v=d:R.next=T,!fn(d,t.memoizedState)&&(Mt=!0,K&&(a=Na,a!==null)))throw a;t.memoizedState=d,t.baseState=v,t.baseQueue=R,l.lastRenderedState=d}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Ef(t){var i=pt(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=t(d,v.action),v=v.next;while(v!==h);fn(d,i.memoizedState)||(Mt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function Tg(t,i,a){var l=Ce,h=pt(),d=je;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!fn(($e||h).memoizedState,a);if(v&&(h.memoizedState=a,Mt=!0),h=h.queue,Sf(wg.bind(null,l,h,t),[t]),h.getSnapshot!==i||v||mt!==null&&mt.memoizedState.tag&1){if(l.flags|=2048,Pa(9,Sg.bind(null,l,h,a,i),{destroy:void 0},null),Xe===null)throw Error(s(349));d||(Cr&60)!==0||Ag(l,i,a)}return a}function Ag(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Ce.updateQueue,i===null?(i=Yu(),Ce.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Sg(t,i,a,l){i.value=a,i.getSnapshot=l,bg(i)&&Rg(t)}function wg(t,i,a){return a(function(){bg(i)&&Rg(t)})}function bg(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!fn(t,a)}catch{return!0}}function Rg(t){var i=br(t,2);i!==null&&tn(i,t,2)}function Tf(t){var i=on();if(typeof t=="function"){var a=t;if(t=a(),Ms){Wn(!0);try{a()}finally{Wn(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:t},i}function Ig(t,i,a,l){return t.baseState=a,vf(t,$e,typeof l=="function"?l:Li)}function sS(t,i,a,l,h){if(ec(t))throw Error(s(485));if(t=i.action,t!==null){var d={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};S.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,Cg(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Cg(t,i){var a=i.action,l=i.payload,h=t.state;if(i.isTransition){var d=S.T,v={};S.T=v;try{var T=a(h,l),R=S.S;R!==null&&R(v,T),Dg(t,i,T)}catch(P){Af(t,i,P)}finally{S.T=d}}else try{d=a(h,l),Dg(t,i,d)}catch(P){Af(t,i,P)}}function Dg(t,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Og(t,i,l)},function(l){return Af(t,i,l)}):Og(t,i,a)}function Og(t,i,a){i.status="fulfilled",i.value=a,Ng(i),t.state=a,i=t.pending,i!==null&&(a=i.next,a===i?t.pending=null:(a=a.next,i.next=a,Cg(t,a)))}function Af(t,i,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,Ng(i),i=i.next;while(i!==l)}t.action=null}function Ng(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Mg(t,i){return i}function Vg(t,i){if(je){var a=Xe.formState;if(a!==null){e:{var l=Ce;if(je){if(Lt){t:{for(var h=Lt,d=li;h.nodeType!==8;){if(!d){h=null;break t}if(h=Fn(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){Lt=Fn(h.nextSibling),l=h.data==="F!";break e}}Ds(l)}l=!1}l&&(i=a[0])}}return a=on(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mg,lastRenderedState:i},a.queue=l,a=Wg.bind(null,Ce,l),l.dispatch=a,l=Tf(!1),d=Cf.bind(null,Ce,!1,l.queue),l=on(),h={state:i,dispatch:null,action:t,pending:null},l.queue=h,a=sS.bind(null,Ce,h,d,a),h.dispatch=a,l.memoizedState=t,[i,a,!1]}function Pg(t){var i=pt();return kg(i,$e,t)}function kg(t,i,a){i=vf(t,i,Mg)[0],t=Wu(Li)[0],i=typeof i=="object"&&i!==null&&typeof i.then=="function"?el(i):i;var l=pt(),h=l.queue,d=h.dispatch;return a!==l.memoizedState&&(Ce.flags|=2048,Pa(9,aS.bind(null,h,a),{destroy:void 0},null)),[i,d,t]}function aS(t,i){t.action=i}function xg(t){var i=pt(),a=$e;if(a!==null)return kg(i,a,t);pt(),i=i.memoizedState,a=pt();var l=a.queue.dispatch;return a.memoizedState=t,[i,l,!1]}function Pa(t,i,a,l){return t={tag:t,create:i,inst:a,deps:l,next:null},i=Ce.updateQueue,i===null&&(i=Yu(),Ce.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t),t}function Lg(){return pt().memoizedState}function Zu(t,i,a,l){var h=on();Ce.flags|=t,h.memoizedState=Pa(1|i,a,{destroy:void 0},l===void 0?null:l)}function Ju(t,i,a,l){var h=pt();l=l===void 0?null:l;var d=h.memoizedState.inst;$e!==null&&l!==null&&df(l,$e.memoizedState.deps)?h.memoizedState=Pa(i,a,d,l):(Ce.flags|=t,h.memoizedState=Pa(1|i,a,d,l))}function Ug(t,i){Zu(8390656,8,t,i)}function Sf(t,i){Ju(2048,8,t,i)}function zg(t,i){return Ju(4,2,t,i)}function Bg(t,i){return Ju(4,4,t,i)}function jg(t,i){if(typeof i=="function"){t=t();var a=i(t);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Hg(t,i,a){a=a!=null?a.concat([t]):null,Ju(4,4,jg.bind(null,i,t),a)}function wf(){}function qg(t,i){var a=pt();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&df(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Fg(t,i){var a=pt();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&df(i,l[1]))return l[0];if(l=t(),Ms){Wn(!0);try{t()}finally{Wn(!1)}}return a.memoizedState=[l,i],l}function bf(t,i,a){return a===void 0||(Cr&1073741824)!==0?t.memoizedState=i:(t.memoizedState=a,t=Ky(),Ce.lanes|=t,Ur|=t,a)}function Gg(t,i,a,l){return fn(a,i)?a:Da.current!==null?(t=bf(t,a,l),fn(t,i)||(Mt=!0),t):(Cr&42)===0?(Mt=!0,t.memoizedState=a):(t=Ky(),Ce.lanes|=t,Ur|=t,i)}function Kg(t,i,a,l,h){var d=ae.p;ae.p=d!==0&&8>d?d:8;var v=S.T,T={};S.T=T,Cf(t,!1,i,a);try{var R=h(),P=S.S;if(P!==null&&P(T,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var K=nS(R,l);tl(t,i,K,gn(t))}else tl(t,i,l,gn(t))}catch(W){tl(t,i,{then:function(){},status:"rejected",reason:W},gn())}finally{ae.p=d,S.T=v}}function oS(){}function Rf(t,i,a,l){if(t.tag!==5)throw Error(s(476));var h=$g(t).queue;Kg(t,h,i,Ie,a===null?oS:function(){return Qg(t),a(l)})}function $g(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:Ie,baseState:Ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:Ie},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:a},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Qg(t){var i=$g(t).next.queue;tl(t,i,{},gn())}function If(){return Ft(Tl)}function Yg(){return pt().memoizedState}function Xg(){return pt().memoizedState}function lS(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var a=gn();t=Mr(a);var l=Vr(i,t,a);l!==null&&(tn(l,i,a),rl(l,i,a)),i={cache:cf()},t.payload=i;return}i=i.return}}function uS(t,i,a){var l=gn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ec(t)?Zg(i,a):(a=nf(t,i,a,l),a!==null&&(tn(a,t,l),Jg(a,i,l)))}function Wg(t,i,a){var l=gn();tl(t,i,a,l)}function tl(t,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ec(t))Zg(i,h);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,T=d(v,a);if(h.hasEagerState=!0,h.eagerState=T,fn(T,v))return Lu(t,i,h,0),Xe===null&&xu(),!1}catch{}finally{}if(a=nf(t,i,h,l),a!==null)return tn(a,t,l),Jg(a,i,l),!0}return!1}function Cf(t,i,a,l){if(l={lane:2,revertLane:yd(),action:l,hasEagerState:!1,eagerState:null,next:null},ec(t)){if(i)throw Error(s(479))}else i=nf(t,a,l,2),i!==null&&tn(i,t,2)}function ec(t){var i=t.alternate;return t===Ce||i!==null&&i===Ce}function Zg(t,i){Ma=$u=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Jg(t,i,a){if((a&4194176)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,pr(t,a)}}var ci={readContext:Ft,use:Xu,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useLayoutEffect:ct,useInsertionEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useSyncExternalStore:ct,useId:ct};ci.useCacheRefresh=ct,ci.useMemoCache=ct,ci.useHostTransitionStatus=ct,ci.useFormState=ct,ci.useActionState=ct,ci.useOptimistic=ct;var Vs={readContext:Ft,use:Xu,useCallback:function(t,i){return on().memoizedState=[t,i===void 0?null:i],t},useContext:Ft,useEffect:Ug,useImperativeHandle:function(t,i,a){a=a!=null?a.concat([t]):null,Zu(4194308,4,jg.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Zu(4194308,4,t,i)},useInsertionEffect:function(t,i){Zu(4,2,t,i)},useMemo:function(t,i){var a=on();i=i===void 0?null:i;var l=t();if(Ms){Wn(!0);try{t()}finally{Wn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(t,i,a){var l=on();if(a!==void 0){var h=a(i);if(Ms){Wn(!0);try{a(i)}finally{Wn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=uS.bind(null,Ce,t),[l.memoizedState,t]},useRef:function(t){var i=on();return t={current:t},i.memoizedState=t},useState:function(t){t=Tf(t);var i=t.queue,a=Wg.bind(null,Ce,i);return i.dispatch=a,[t.memoizedState,a]},useDebugValue:wf,useDeferredValue:function(t,i){var a=on();return bf(a,t,i)},useTransition:function(){var t=Tf(!1);return t=Kg.bind(null,Ce,t.queue,!0,!1),on().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,a){var l=Ce,h=on();if(je){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Xe===null)throw Error(s(349));(Le&60)!==0||Ag(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,Ug(wg.bind(null,l,d,t),[t]),l.flags|=2048,Pa(9,Sg.bind(null,l,d,a,i),{destroy:void 0},null),a},useId:function(){var t=on(),i=Xe.identifierPrefix;if(je){var a=ki,l=Pi;a=(l&~(1<<32-Wt(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=Qu++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=iS++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},useCacheRefresh:function(){return on().memoizedState=lS.bind(null,Ce)}};Vs.useMemoCache=_f,Vs.useHostTransitionStatus=If,Vs.useFormState=Vg,Vs.useActionState=Vg,Vs.useOptimistic=function(t){var i=on();i.memoizedState=i.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Cf.bind(null,Ce,!0,a),a.dispatch=i,[t,i]};var Dr={readContext:Ft,use:Xu,useCallback:qg,useContext:Ft,useEffect:Sf,useImperativeHandle:Hg,useInsertionEffect:zg,useLayoutEffect:Bg,useMemo:Fg,useReducer:Wu,useRef:Lg,useState:function(){return Wu(Li)},useDebugValue:wf,useDeferredValue:function(t,i){var a=pt();return Gg(a,$e.memoizedState,t,i)},useTransition:function(){var t=Wu(Li)[0],i=pt().memoizedState;return[typeof t=="boolean"?t:el(t),i]},useSyncExternalStore:Tg,useId:Yg};Dr.useCacheRefresh=Xg,Dr.useMemoCache=_f,Dr.useHostTransitionStatus=If,Dr.useFormState=Pg,Dr.useActionState=Pg,Dr.useOptimistic=function(t,i){var a=pt();return Ig(a,$e,t,i)};var Ps={readContext:Ft,use:Xu,useCallback:qg,useContext:Ft,useEffect:Sf,useImperativeHandle:Hg,useInsertionEffect:zg,useLayoutEffect:Bg,useMemo:Fg,useReducer:Ef,useRef:Lg,useState:function(){return Ef(Li)},useDebugValue:wf,useDeferredValue:function(t,i){var a=pt();return $e===null?bf(a,t,i):Gg(a,$e.memoizedState,t,i)},useTransition:function(){var t=Ef(Li)[0],i=pt().memoizedState;return[typeof t=="boolean"?t:el(t),i]},useSyncExternalStore:Tg,useId:Yg};Ps.useCacheRefresh=Xg,Ps.useMemoCache=_f,Ps.useHostTransitionStatus=If,Ps.useFormState=xg,Ps.useActionState=xg,Ps.useOptimistic=function(t,i){var a=pt();return $e!==null?Ig(a,$e,t,i):(a.baseState=t,[t,a.queue.dispatch])};function Df(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:I({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Of={isMounted:function(t){return(t=t._reactInternals)?de(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=gn(),h=Mr(l);h.payload=i,a!=null&&(h.callback=a),i=Vr(t,h,l),i!==null&&(tn(i,t,l),rl(i,t,l))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=gn(),h=Mr(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Vr(t,h,l),i!==null&&(tn(i,t,l),rl(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=gn(),l=Mr(a);l.tag=2,i!=null&&(l.callback=i),i=Vr(t,l,a),i!==null&&(tn(i,t,a),rl(i,t,a))}};function ey(t,i,a,l,h,d,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!Ho(a,l)||!Ho(h,d):!0}function ty(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Of.enqueueReplaceState(i,i.state,null)}function ks(t,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(t=t.defaultProps){a===i&&(a=I({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}var tc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function ny(t){tc(t)}function iy(t){console.error(t)}function ry(t){tc(t)}function nc(t,i){try{var a=t.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function sy(t,i,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Nf(t,i,a){return a=Mr(a),a.tag=3,a.payload={element:null},a.callback=function(){nc(t,i)},a}function ay(t){return t=Mr(t),t.tag=3,t}function oy(t,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;t.payload=function(){return h(d)},t.callback=function(){sy(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){sy(i,a,l),typeof h!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function cS(t,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&il(i,a,h,!0),a=Dn.current,a!==null){switch(a.tag){case 13:return ui===null?fd():a.alternate===null&&at===0&&(at=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===of?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),md(t,l,h)),!1;case 22:return a.flags|=65536,l===of?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),md(t,l,h)),!1}throw Error(s(435,a.tag))}return md(t,l,h),fd(),!1}if(je)return i=Dn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==af&&(t=Error(s(422),{cause:l}),Ko(Rn(t,a)))):(l!==af&&(i=Error(s(423),{cause:l}),Ko(Rn(i,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=Rn(l,a),h=Nf(t.stateNode,l,h),Kf(t,h),at!==4&&(at=2)),!1;var d=Error(s(520),{cause:l});if(d=Rn(d,a),fl===null?fl=[d]:fl.push(d),at!==4&&(at=2),i===null)return!0;l=Rn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=Nf(a.stateNode,l,t),Kf(a,t),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(zr===null||!zr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=ay(h),oy(h,t,a,l),Kf(a,h),!1}a=a.return}while(a!==null);return!1}var ly=Error(s(461)),Mt=!1;function Ut(t,i,a,l){i.child=t===null?dg(i,null,a,l):Os(i,t.child,a,l)}function uy(t,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return Ls(i),l=mf(t,i,a,v,d,h),T=pf(),t!==null&&!Mt?(gf(t,i,h),Ui(t,i,h)):(je&&T&&rf(i),i.flags|=1,Ut(t,i,l,h),i.child)}function cy(t,i,a,l,h){if(t===null){var d=a.type;return typeof d=="function"&&!ed(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,hy(t,i,d,l,h)):(t=oc(a.type,null,l,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!Bf(t,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:Ho,a(v,l)&&t.ref===i.ref)return Ui(t,i,h)}return i.flags|=1,t=Lr(d,l),t.ref=i.ref,t.return=i,i.child=t}function hy(t,i,a,l,h){if(t!==null){var d=t.memoizedProps;if(Ho(d,l)&&t.ref===i.ref)if(Mt=!1,i.pendingProps=l=d,Bf(t,h))(t.flags&131072)!==0&&(Mt=!0);else return i.lanes=t.lanes,Ui(t,i,h)}return Mf(t,i,a,l,h)}function fy(t,i,a){var l=i.pendingProps,h=l.children,d=(i.stateNode._pendingVisibility&2)!==0,v=t!==null?t.memoizedState:null;if(nl(t,i),l.mode==="hidden"||d){if((i.flags&128)!==0){if(l=v!==null?v.baseLanes|a:a,t!==null){for(h=i.child=t.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return dy(t,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ku(i,v!==null?v.cachePool:null),v!==null?mg(i,v):lf(),pg(i);else return i.lanes=i.childLanes=536870912,dy(t,i,v!==null?v.baseLanes|a:a,a)}else v!==null?(Ku(i,v.cachePool),mg(i,v),Ir(),i.memoizedState=null):(t!==null&&Ku(i,null),lf(),Ir());return Ut(t,i,h,a),i.child}function dy(t,i,a,l){var h=ff();return h=h===null?null:{parent:wt._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},t!==null&&Ku(i,null),lf(),pg(i),t!==null&&il(t,i,l,!0),null}function nl(t,i){var a=i.ref;if(a===null)t!==null&&t.ref!==null&&(i.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(i.flags|=2097664)}}function Mf(t,i,a,l,h){return Ls(i),a=mf(t,i,a,l,void 0,h),l=pf(),t!==null&&!Mt?(gf(t,i,h),Ui(t,i,h)):(je&&l&&rf(i),i.flags|=1,Ut(t,i,a,h),i.child)}function my(t,i,a,l,h,d){return Ls(i),i.updateQueue=null,a=Eg(i,l,a,h),vg(t),l=pf(),t!==null&&!Mt?(gf(t,i,d),Ui(t,i,d)):(je&&l&&rf(i),i.flags|=1,Ut(t,i,a,d),i.child)}function py(t,i,a,l,h){if(Ls(i),i.stateNode===null){var d=ba,v=a.contextType;typeof v=="object"&&v!==null&&(d=Ft(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Of,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Ff(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Ft(v):ba,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Df(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Of.enqueueReplaceState(d,d.state,null),al(i,l,d,h),sl(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var T=i.memoizedProps,R=ks(a,T);d.props=R;var P=d.context,K=a.contextType;v=ba,typeof K=="object"&&K!==null&&(v=Ft(K));var W=a.getDerivedStateFromProps;K=typeof W=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,K||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||P!==v)&&ty(i,d,l,v),Nr=!1;var j=i.memoizedState;d.state=j,al(i,l,d,h),sl(),P=i.memoizedState,T||j!==P||Nr?(typeof W=="function"&&(Df(i,a,W,l),P=i.memoizedState),(R=Nr||ey(i,a,R,l,j,P,v))?(K||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=P),d.props=l,d.state=P,d.context=v,l=R):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Gf(t,i),v=i.memoizedProps,K=ks(a,v),d.props=K,W=i.pendingProps,j=d.context,P=a.contextType,R=ba,typeof P=="object"&&P!==null&&(R=Ft(P)),T=a.getDerivedStateFromProps,(P=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==W||j!==R)&&ty(i,d,l,R),Nr=!1,j=i.memoizedState,d.state=j,al(i,l,d,h),sl();var G=i.memoizedState;v!==W||j!==G||Nr||t!==null&&t.dependencies!==null&&ic(t.dependencies)?(typeof T=="function"&&(Df(i,a,T,l),G=i.memoizedState),(K=Nr||ey(i,a,K,l,j,G,R)||t!==null&&t.dependencies!==null&&ic(t.dependencies))?(P||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,G,R),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,G,R)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&j===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&j===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=G),d.props=l,d.state=G,d.context=R,l=K):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&j===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&j===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,nl(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=Os(i,t.child,null,h),i.child=Os(i,null,a,h)):Ut(t,i,a,h),i.memoizedState=d.state,t=i.child):t=Ui(t,i,h),t}function gy(t,i,a,l){return Go(),i.flags|=256,Ut(t,i,a,l),i.child}var Vf={dehydrated:null,treeContext:null,retryLane:0};function Pf(t){return{baseLanes:t,cachePool:_g()}}function kf(t,i,a){return t=t!==null?t.childLanes&~a:0,i&&(t|=Vn),t}function yy(t,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=t!==null&&t.memoizedState===null?!1:(St.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,t===null){if(je){if(h?Rr(i):Ir(),je){var T=Lt,R;if(R=T){e:{for(R=T,T=li;R.nodeType!==8;){if(!T){T=null;break e}if(R=Fn(R.nextSibling),R===null){T=null;break e}}T=R}T!==null?(i.memoizedState={dehydrated:T,treeContext:Is!==null?{id:Pi,overflow:ki}:null,retryLane:536870912},R=Mn(18,null,null,0),R.stateNode=T,R.return=i,i.child=R,en=i,Lt=null,R=!0):R=!1}R||Ds(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return T.data==="$!"?i.lanes=16:i.lanes=536870912,null;xi(i)}return T=l.children,l=l.fallback,h?(Ir(),h=i.mode,T=Lf({mode:"hidden",children:T},h),l=zs(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,h=i.child,h.memoizedState=Pf(a),h.childLanes=kf(t,v,a),i.memoizedState=Vf,l):(Rr(i),xf(i,T))}if(R=t.memoizedState,R!==null&&(T=R.dehydrated,T!==null)){if(d)i.flags&256?(Rr(i),i.flags&=-257,i=Uf(t,i,a)):i.memoizedState!==null?(Ir(),i.child=t.child,i.flags|=128,i=null):(Ir(),h=l.fallback,T=i.mode,l=Lf({mode:"visible",children:l.children},T),h=zs(h,T,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,Os(i,t.child,null,a),l=i.child,l.memoizedState=Pf(a),l.childLanes=kf(t,v,a),i.memoizedState=Vf,i=h);else if(Rr(i),T.data==="$!"){if(v=T.nextSibling&&T.nextSibling.dataset,v)var P=v.dgst;v=P,l=Error(s(419)),l.stack="",l.digest=v,Ko({value:l,source:null,stack:null}),i=Uf(t,i,a)}else if(Mt||il(t,i,a,!1),v=(a&t.childLanes)!==0,Mt||v){if(v=Xe,v!==null){if(l=a&-a,(l&42)!==0)l=1;else switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=64;break;case 268435456:l=134217728;break;default:l=0}if(l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==R.retryLane)throw R.retryLane=l,br(t,l),tn(v,t,l),ly}T.data==="$?"||fd(),i=Uf(t,i,a)}else T.data==="$?"?(i.flags|=128,i.child=t.child,i=bS.bind(null,t),T._reactRetry=i,i=null):(t=R.treeContext,Lt=Fn(T.nextSibling),en=i,je=!0,Hn=null,li=!1,t!==null&&(In[Cn++]=Pi,In[Cn++]=ki,In[Cn++]=Is,Pi=t.id,ki=t.overflow,Is=i),i=xf(i,l.children),i.flags|=4096);return i}return h?(Ir(),h=l.fallback,T=i.mode,R=t.child,P=R.sibling,l=Lr(R,{mode:"hidden",children:l.children}),l.subtreeFlags=R.subtreeFlags&31457280,P!==null?h=Lr(P,h):(h=zs(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=t.child.memoizedState,T===null?T=Pf(a):(R=T.cachePool,R!==null?(P=wt._currentValue,R=R.parent!==P?{parent:P,pool:P}:R):R=_g(),T={baseLanes:T.baseLanes|a,cachePool:R}),h.memoizedState=T,h.childLanes=kf(t,v,a),i.memoizedState=Vf,l):(Rr(i),a=t.child,t=a.sibling,a=Lr(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,t!==null&&(v=i.deletions,v===null?(i.deletions=[t],i.flags|=16):v.push(t)),i.child=a,i.memoizedState=null,a)}function xf(t,i){return i=Lf({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Lf(t,i){return qy(t,i,0,null)}function Uf(t,i,a){return Os(i,t.child,null,a),t=xf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function _y(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Hf(t.return,i,a)}function zf(t,i,a,l,h){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function vy(t,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Ut(t,i,l.children,a),l=St.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_y(t,a,i);else if(t.tag===19)_y(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(Ke(St,l),h){case"forwards":for(a=i.child,h=null;a!==null;)t=a.alternate,t!==null&&Gu(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),zf(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&Gu(t)===null){i.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}zf(i,!0,a,null,d);break;case"together":zf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ui(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Ur|=i.lanes,(a&i.childLanes)===0)if(t!==null){if(il(t,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,a=Lr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Lr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function Bf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&ic(t)))}function hS(t,i,a){switch(i.tag){case 3:ur(i,i.stateNode.containerInfo),Or(i,wt,t.memoizedState.cache),Go();break;case 27:case 5:To(i);break;case 4:ur(i,i.stateNode.containerInfo);break;case 10:Or(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Rr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?yy(t,i,a):(Rr(i),t=Ui(t,i,a),t!==null?t.sibling:null);Rr(i);break;case 19:var h=(t.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(il(t,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return vy(t,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Ke(St,St.current),l)break;return null;case 22:case 23:return i.lanes=0,fy(t,i,a);case 24:Or(i,wt,t.memoizedState.cache)}return Ui(t,i,a)}function Ey(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps)Mt=!0;else{if(!Bf(t,a)&&(i.flags&128)===0)return Mt=!1,hS(t,i,a);Mt=(t.flags&131072)!==0}else Mt=!1,je&&(i.flags&1048576)!==0&&rg(i,Bu,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")ed(l)?(t=ks(l,t),i.tag=1,i=py(null,i,l,t,a)):(i.tag=0,i=Mf(null,i,l,t,a));else{if(l!=null){if(h=l.$$typeof,h===z){i.tag=11,i=uy(null,i,l,t,a);break e}else if(h===$){i.tag=14,i=cy(null,i,l,t,a);break e}}throw i=b(l)||l,Error(s(306,i,""))}}return i;case 0:return Mf(t,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=ks(l,i.pendingProps),py(t,i,l,h,a);case 3:e:{if(ur(i,i.stateNode.containerInfo),t===null)throw Error(s(387));var d=i.pendingProps;h=i.memoizedState,l=h.element,Gf(t,i),al(i,d,null,a);var v=i.memoizedState;if(d=v.cache,Or(i,wt,d),d!==h.cache&&qf(i,[wt],a,!0),sl(),d=v.element,h.isDehydrated)if(h={element:d,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=gy(t,i,d,a);break e}else if(d!==l){l=Rn(Error(s(424)),i),Ko(l),i=gy(t,i,d,a);break e}else for(Lt=Fn(i.stateNode.containerInfo.firstChild),en=i,je=!0,Hn=null,li=!0,a=dg(i,null,d,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Go(),d===l){i=Ui(t,i,a);break e}Ut(t,i,d,a)}i=i.child}return i;case 26:return nl(t,i),t===null?(a=S_(i.type,null,i.pendingProps,null))?i.memoizedState=a:je||(a=i.type,t=i.pendingProps,l=vc(_n.current).createElement(a),l[Dt]=i,l[Et]=t,zt(l,a,t),Je(l),i.stateNode=l):i.memoizedState=S_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return To(i),t===null&&je&&(l=i.stateNode=E_(i.type,i.pendingProps,_n.current),en=i,li=!0,Lt=Fn(l.firstChild)),l=i.pendingProps.children,t!==null||je?Ut(t,i,l,a):i.child=Os(i,null,l,a),nl(t,i),i.child;case 5:return t===null&&je&&((h=l=Lt)&&(l=jS(l,i.type,i.pendingProps,li),l!==null?(i.stateNode=l,en=i,Lt=Fn(l.firstChild),li=!1,h=!0):h=!1),h||Ds(i)),To(i),h=i.type,d=i.pendingProps,v=t!==null?t.memoizedProps:null,l=d.children,Rd(h,d)?l=null:v!==null&&Rd(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=mf(t,i,rS,null,null,a),Tl._currentValue=h),nl(t,i),Ut(t,i,l,a),i.child;case 6:return t===null&&je&&((t=a=Lt)&&(a=HS(a,i.pendingProps,li),a!==null?(i.stateNode=a,en=i,Lt=null,t=!0):t=!1),t||Ds(i)),null;case 13:return yy(t,i,a);case 4:return ur(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Os(i,null,l,a):Ut(t,i,l,a),i.child;case 11:return uy(t,i,i.type,i.pendingProps,a);case 7:return Ut(t,i,i.pendingProps,a),i.child;case 8:return Ut(t,i,i.pendingProps.children,a),i.child;case 12:return Ut(t,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,Or(i,i.type,l.value),Ut(t,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Ls(i),h=Ft(h),l=l(h),i.flags|=1,Ut(t,i,l,a),i.child;case 14:return cy(t,i,i.type,i.pendingProps,a);case 15:return hy(t,i,i.type,i.pendingProps,a);case 19:return vy(t,i,a);case 22:return fy(t,i,a);case 24:return Ls(i),l=Ft(wt),t===null?(h=ff(),h===null&&(h=Xe,d=cf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},Ff(i),Or(i,wt,h)):((t.lanes&a)!==0&&(Gf(t,i),al(i,null,null,a),sl()),h=t.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Or(i,wt,l)):(l=d.cache,Or(i,wt,l),l!==h.cache&&qf(i,[wt],a,!0))),Ut(t,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}var jf=ze(null),xs=null,zi=null;function Or(t,i,a){Ke(jf,i._currentValue),i._currentValue=a}function Bi(t){t._currentValue=jf.current,it(jf)}function Hf(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function qf(t,i,a,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=h;for(var R=0;R<i.length;R++)if(T.context===i[R]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Hf(d.return,a,t),l||(v=null);break e}d=T.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Hf(v,a,t),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===t){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function il(t,i,a,l){t=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=h.type;fn(h.pendingProps.value,v.value)||(t!==null?t.push(T):t=[T])}}else if(h===lr.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(Tl):t=[Tl])}h=h.return}t!==null&&qf(i,t,a,l),i.flags|=262144}function ic(t){for(t=t.firstContext;t!==null;){if(!fn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ls(t){xs=t,zi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ft(t){return Ty(xs,t)}function rc(t,i){return xs===null&&Ls(t),Ty(t,i)}function Ty(t,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},zi===null){if(t===null)throw Error(s(308));zi=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else zi=zi.next=i;return a}var Nr=!1;function Ff(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Mr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Vr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(tt&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Uu(t),ng(t,null,a),i}return Lu(t,l,i,a),Uu(t)}function rl(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194176)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,pr(t,a)}}function Kf(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}var $f=!1;function sl(){if($f){var t=Na;if(t!==null)throw t}}function al(t,i,a,l){$f=!1;var h=t.updateQueue;Nr=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var R=T,P=R.next;R.next=null,v===null?d=P:v.next=P,v=R;var K=t.alternate;K!==null&&(K=K.updateQueue,T=K.lastBaseUpdate,T!==v&&(T===null?K.firstBaseUpdate=P:T.next=P,K.lastBaseUpdate=R))}if(d!==null){var W=h.baseState;v=0,K=P=R=null,T=d;do{var j=T.lane&-536870913,G=j!==T.lane;if(G?(Le&j)===j:(l&j)===j){j!==0&&j===Oa&&($f=!0),K!==null&&(K=K.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var ce=t,Ae=T;j=i;var ot=a;switch(Ae.tag){case 1:if(ce=Ae.payload,typeof ce=="function"){W=ce.call(ot,W,j);break e}W=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=Ae.payload,j=typeof ce=="function"?ce.call(ot,W,j):ce,j==null)break e;W=I({},W,j);break e;case 2:Nr=!0}}j=T.callback,j!==null&&(t.flags|=64,G&&(t.flags|=8192),G=h.callbacks,G===null?h.callbacks=[j]:G.push(j))}else G={lane:j,tag:T.tag,payload:T.payload,callback:T.callback,next:null},K===null?(P=K=G,R=W):K=K.next=G,v|=j;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;G=T,T=G.next,G.next=null,h.lastBaseUpdate=G,h.shared.pending=null}}while(!0);K===null&&(R=W),h.baseState=R,h.firstBaseUpdate=P,h.lastBaseUpdate=K,d===null&&(h.shared.lanes=0),Ur|=v,t.lanes=v,t.memoizedState=W}}function Ay(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function Sy(t,i){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Ay(a[t],i)}function ol(t,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&t)===t){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(T){Ye(i,i.return,T)}}function Pr(t,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&t)===t){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,h=i;var R=a;try{T()}catch(P){Ye(h,R,P)}}}l=l.next}while(l!==d)}}catch(P){Ye(i,i.return,P)}}function wy(t){var i=t.updateQueue;if(i!==null){var a=t.stateNode;try{Sy(i,a)}catch(l){Ye(t,t.return,l)}}}function by(t,i,a){a.props=ks(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){Ye(t,i,l)}}function Us(t,i){try{var a=t.ref;if(a!==null){var l=t.stateNode;switch(t.tag){case 26:case 27:case 5:var h=l;break;default:h=l}typeof a=="function"?t.refCleanup=a(h):a.current=h}}catch(d){Ye(t,i,d)}}function dn(t,i){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Ye(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Ye(t,i,h)}else a.current=null}function Ry(t){var i=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Ye(t,t.return,h)}}function Iy(t,i,a){try{var l=t.stateNode;xS(l,t.type,a,i),l[Et]=i}catch(h){Ye(t,t.return,h)}}function Cy(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function Qf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Cy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yf(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=_c));else if(l!==4&&l!==27&&(t=t.child,t!==null))for(Yf(t,i,a),t=t.sibling;t!==null;)Yf(t,i,a),t=t.sibling}function sc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&l!==27&&(t=t.child,t!==null))for(sc(t,i,a),t=t.sibling;t!==null;)sc(t,i,a),t=t.sibling}var ji=!1,st=!1,Xf=!1,Dy=typeof WeakSet=="function"?WeakSet:Set,Vt=null,Oy=!1;function fS(t,i){if(t=t.containerInfo,wd=bc,t=$p(t),Wh(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var v=0,T=-1,R=-1,P=0,K=0,W=t,j=null;t:for(;;){for(var G;W!==a||h!==0&&W.nodeType!==3||(T=v+h),W!==d||l!==0&&W.nodeType!==3||(R=v+l),W.nodeType===3&&(v+=W.nodeValue.length),(G=W.firstChild)!==null;)j=W,W=G;for(;;){if(W===t)break t;if(j===a&&++P===h&&(T=v),j===d&&++K===l&&(R=v),(G=W.nextSibling)!==null)break;W=j,j=W.parentNode}W=G}a=T===-1||R===-1?null:{start:T,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(bd={focusedElem:t,selectionRange:a},bc=!1,Vt=i;Vt!==null;)if(i=Vt,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Vt=t;else for(;Vt!==null;){switch(i=Vt,d=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var ce=ks(a.type,h,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(ce,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(Ae){Ye(a,a.return,Ae)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,a=t.nodeType,a===9)Dd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Dd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,Vt=t;break}Vt=i.return}return ce=Oy,Oy=!1,ce}function Ny(t,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:qi(t,a),l&4&&ol(5,a);break;case 1:if(qi(t,a),l&4)if(t=a.stateNode,i===null)try{t.componentDidMount()}catch(T){Ye(a,a.return,T)}else{var h=ks(a.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(T){Ye(a,a.return,T)}}l&64&&wy(a),l&512&&Us(a,a.return);break;case 3:if(qi(t,a),l&64&&(l=a.updateQueue,l!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Sy(l,t)}catch(T){Ye(a,a.return,T)}}break;case 26:qi(t,a),l&512&&Us(a,a.return);break;case 27:case 5:qi(t,a),i===null&&l&4&&Ry(a),l&512&&Us(a,a.return);break;case 12:qi(t,a);break;case 13:qi(t,a),l&4&&Py(t,a);break;case 22:if(h=a.memoizedState!==null||ji,!h){i=i!==null&&i.memoizedState!==null||st;var d=ji,v=st;ji=h,(st=i)&&!v?kr(t,a,(a.subtreeFlags&8772)!==0):qi(t,a),ji=d,st=v}l&512&&(a.memoizedProps.mode==="manual"?Us(a,a.return):dn(a,a.return));break;default:qi(t,a)}}function My(t){var i=t.alternate;i!==null&&(t.alternate=null,My(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&ms(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var gt=null,mn=!1;function Hi(t,i,a){for(a=a.child;a!==null;)Vy(t,i,a),a=a.sibling}function Vy(t,i,a){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(cr,a)}catch{}switch(a.tag){case 26:st||dn(a,i),Hi(t,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:st||dn(a,i);var l=gt,h=mn;for(gt=a.stateNode,Hi(t,i,a),a=a.stateNode,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);ms(a),gt=l,mn=h;break;case 5:st||dn(a,i);case 6:h=gt;var d=mn;if(gt=null,Hi(t,i,a),gt=h,mn=d,gt!==null)if(mn)try{t=gt,l=a.stateNode,t.nodeType===8?t.parentNode.removeChild(l):t.removeChild(l)}catch(v){Ye(a,i,v)}else try{gt.removeChild(a.stateNode)}catch(v){Ye(a,i,v)}break;case 18:gt!==null&&(mn?(i=gt,a=a.stateNode,i.nodeType===8?Cd(i.parentNode,a):i.nodeType===1&&Cd(i,a),bl(i)):Cd(gt,a.stateNode));break;case 4:l=gt,h=mn,gt=a.stateNode.containerInfo,mn=!0,Hi(t,i,a),gt=l,mn=h;break;case 0:case 11:case 14:case 15:st||Pr(2,a,i),st||Pr(4,a,i),Hi(t,i,a);break;case 1:st||(dn(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&by(a,i,l)),Hi(t,i,a);break;case 21:Hi(t,i,a);break;case 22:st||dn(a,i),st=(l=st)||a.memoizedState!==null,Hi(t,i,a),st=l;break;default:Hi(t,i,a)}}function Py(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{bl(t)}catch(a){Ye(i,i.return,a)}}function dS(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Dy),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Dy),i;default:throw Error(s(435,t.tag))}}function Wf(t,i){var a=dS(t);i.forEach(function(l){var h=RS.bind(null,t,l);a.has(l)||(a.add(l),l.then(h,h))})}function On(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=t,v=i,T=v;e:for(;T!==null;){switch(T.tag){case 27:case 5:gt=T.stateNode,mn=!1;break e;case 3:gt=T.stateNode.containerInfo,mn=!0;break e;case 4:gt=T.stateNode.containerInfo,mn=!0;break e}T=T.return}if(gt===null)throw Error(s(160));Vy(d,v,h),gt=null,mn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)ky(i,t),i=i.sibling}var qn=null;function ky(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:On(i,t),Nn(t),l&4&&(Pr(3,t,t.return),ol(3,t),Pr(5,t,t.return));break;case 1:On(i,t),Nn(t),l&512&&(st||a===null||dn(a,a.return)),l&64&&ji&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=qn;if(On(i,t),Nn(t),l&512&&(st||a===null||dn(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[yr]||d[Dt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),zt(d,l,a),d[Dt]=t,Je(d),l=d;break e;case"link":var v=R_("link","href",h).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break t}}d=h.createElement(l),zt(d,l,a),h.head.appendChild(d);break;case"meta":if(v=R_("meta","content",h).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break t}}d=h.createElement(l),zt(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[Dt]=t,Je(d),l=d}t.stateNode=l}else I_(h,t.type,t.stateNode);else t.stateNode=b_(h,l,t.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?I_(h,t.type,t.stateNode):b_(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Iy(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(l&4&&t.alternate===null){h=t.stateNode,d=t.memoizedProps;try{for(var R=h.firstChild;R;){var P=R.nextSibling,K=R.nodeName;R[yr]||K==="HEAD"||K==="BODY"||K==="SCRIPT"||K==="STYLE"||K==="LINK"&&R.rel.toLowerCase()==="stylesheet"||h.removeChild(R),R=P}for(var W=t.type,j=h.attributes;j.length;)h.removeAttributeNode(j[0]);zt(h,W,d),h[Dt]=t,h[Et]=d}catch(ce){Ye(t,t.return,ce)}}case 5:if(On(i,t),Nn(t),l&512&&(st||a===null||dn(a,a.return)),t.flags&32){h=t.stateNode;try{Tn(h,"")}catch(ce){Ye(t,t.return,ce)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,Iy(t,h,a!==null?a.memoizedProps:h)),l&1024&&(Xf=!0);break;case 6:if(On(i,t),Nn(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(ce){Ye(t,t.return,ce)}}break;case 3:if(Ac=null,h=qn,qn=Ec(i.containerInfo),On(i,t),qn=h,Nn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{bl(i.containerInfo)}catch(ce){Ye(t,t.return,ce)}Xf&&(Xf=!1,xy(t));break;case 4:l=qn,qn=Ec(t.stateNode.containerInfo),On(i,t),Nn(t),qn=l;break;case 12:On(i,t),Nn(t);break;case 13:On(i,t),Nn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ad=sn()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Wf(t,l)));break;case 22:if(l&512&&(st||a===null||dn(a,a.return)),R=t.memoizedState!==null,P=a!==null&&a.memoizedState!==null,K=ji,W=st,ji=K||R,st=W||P,On(i,t),st=W,ji=K,Nn(t),i=t.stateNode,i._current=t,i._visibility&=-3,i._visibility|=i._pendingVisibility&2,l&8192&&(i._visibility=R?i._visibility&-2:i._visibility|1,R&&(i=ji||st,a===null||P||i||ka(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))e:for(a=null,i=t;;){if(i.tag===5||i.tag===26||i.tag===27){if(a===null){P=a=i;try{if(h=P.stateNode,R)d=h.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{v=P.stateNode,T=P.memoizedProps.style;var G=T!=null&&T.hasOwnProperty("display")?T.display:null;v.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(ce){Ye(P,P.return,ce)}}}else if(i.tag===6){if(a===null){P=i;try{P.stateNode.nodeValue=R?"":P.memoizedProps}catch(ce){Ye(P,P.return,ce)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Wf(t,a))));break;case 19:On(i,t),Nn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Wf(t,l)));break;case 21:break;default:On(i,t),Nn(t)}}function Nn(t){var i=t.flags;if(i&2){try{if(t.tag!==27){e:{for(var a=t.return;a!==null;){if(Cy(a)){var l=a;break e}a=a.return}throw Error(s(160))}switch(l.tag){case 27:var h=l.stateNode,d=Qf(t);sc(t,d,h);break;case 5:var v=l.stateNode;l.flags&32&&(Tn(v,""),l.flags&=-33);var T=Qf(t);sc(t,T,v);break;case 3:case 4:var R=l.stateNode.containerInfo,P=Qf(t);Yf(t,P,R);break;default:throw Error(s(161))}}}catch(K){Ye(t,t.return,K)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function xy(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;xy(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function qi(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Ny(t,i.alternate,i),i=i.sibling}function ka(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Pr(4,i,i.return),ka(i);break;case 1:dn(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&by(i,i.return,a),ka(i);break;case 26:case 27:case 5:dn(i,i.return),ka(i);break;case 22:dn(i,i.return),i.memoizedState===null&&ka(i);break;default:ka(i)}t=t.sibling}}function kr(t,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=t,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:kr(h,d,a),ol(4,d);break;case 1:if(kr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(P){Ye(l,l.return,P)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var R=h.shared.hiddenCallbacks;if(R!==null)for(h.shared.hiddenCallbacks=null,h=0;h<R.length;h++)Ay(R[h],T)}catch(P){Ye(l,l.return,P)}}a&&v&64&&wy(d),Us(d,d.return);break;case 26:case 27:case 5:kr(h,d,a),a&&l===null&&v&4&&Ry(d),Us(d,d.return);break;case 12:kr(h,d,a);break;case 13:kr(h,d,a),a&&v&4&&Py(h,d);break;case 22:d.memoizedState===null&&kr(h,d,a),Us(d,d.return);break;default:kr(h,d,a)}i=i.sibling}}function Zf(t,i){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Wo(a))}function Jf(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Wo(t))}function xr(t,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Ly(t,i,a,l),i=i.sibling}function Ly(t,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:xr(t,i,a,l),h&2048&&ol(9,i);break;case 3:xr(t,i,a,l),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Wo(t)));break;case 12:if(h&2048){xr(t,i,a,l),t=i.stateNode;try{var d=i.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(R){Ye(i,i.return,R)}}else xr(t,i,a,l);break;case 23:break;case 22:d=i.stateNode,i.memoizedState!==null?d._visibility&4?xr(t,i,a,l):ll(t,i):d._visibility&4?xr(t,i,a,l):(d._visibility|=4,xa(t,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&Zf(i.alternate,i);break;case 24:xr(t,i,a,l),h&2048&&Jf(i.alternate,i);break;default:xr(t,i,a,l)}}function xa(t,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=t,v=i,T=a,R=l,P=v.flags;switch(v.tag){case 0:case 11:case 15:xa(d,v,T,R,h),ol(8,v);break;case 23:break;case 22:var K=v.stateNode;v.memoizedState!==null?K._visibility&4?xa(d,v,T,R,h):ll(d,v):(K._visibility|=4,xa(d,v,T,R,h)),h&&P&2048&&Zf(v.alternate,v);break;case 24:xa(d,v,T,R,h),h&&P&2048&&Jf(v.alternate,v);break;default:xa(d,v,T,R,h)}i=i.sibling}}function ll(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=t,l=i,h=l.flags;switch(l.tag){case 22:ll(a,l),h&2048&&Zf(l.alternate,l);break;case 24:ll(a,l),h&2048&&Jf(l.alternate,l);break;default:ll(a,l)}i=i.sibling}}var ul=8192;function La(t){if(t.subtreeFlags&ul)for(t=t.child;t!==null;)Uy(t),t=t.sibling}function Uy(t){switch(t.tag){case 26:La(t),t.flags&ul&&t.memoizedState!==null&&tw(qn,t.memoizedState,t.memoizedProps);break;case 5:La(t);break;case 3:case 4:var i=qn;qn=Ec(t.stateNode.containerInfo),La(t),qn=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=ul,ul=16777216,La(t),ul=i):La(t));break;default:La(t)}}function zy(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function cl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Vt=l,jy(l,t)}zy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)By(t),t=t.sibling}function By(t){switch(t.tag){case 0:case 11:case 15:cl(t),t.flags&2048&&Pr(9,t,t.return);break;case 3:cl(t);break;case 12:cl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&4&&(t.return===null||t.return.tag!==13)?(i._visibility&=-5,ac(t)):cl(t);break;default:cl(t)}}function ac(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Vt=l,jy(l,t)}zy(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Pr(8,i,i.return),ac(i);break;case 22:a=i.stateNode,a._visibility&4&&(a._visibility&=-5,ac(i));break;default:ac(i)}t=t.sibling}}function jy(t,i){for(;Vt!==null;){var a=Vt;switch(a.tag){case 0:case 11:case 15:Pr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Wo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Vt=l;else e:for(a=t;Vt!==null;){l=Vt;var h=l.sibling,d=l.return;if(My(l),l===a){Vt=null;break e}if(h!==null){h.return=d,Vt=h;break e}Vt=d}}}function mS(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(t,i,a,l){return new mS(t,i,a,l)}function ed(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Lr(t,i){var a=t.alternate;return a===null?(a=Mn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Hy(t,i){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,i=a.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function oc(t,i,a,l,h,d){var v=0;if(l=t,typeof t=="function")ed(t)&&(v=1);else if(typeof t=="string")v=JS(t,a,Xt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case p:return zs(a.children,h,d,i);case y:v=8,h|=24;break;case E:return t=Mn(12,a,i,h|2),t.elementType=E,t.lanes=d,t;case Q:return t=Mn(13,a,i,h),t.elementType=Q,t.lanes=d,t;case H:return t=Mn(19,a,i,h),t.elementType=H,t.lanes=d,t;case Z:return qy(a,h,d,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:case k:v=10;break e;case D:v=9;break e;case z:v=11;break e;case $:v=14;break e;case ne:v=16,l=null;break e}v=29,a=Error(s(130,t===null?"null":typeof t,"")),l=null}return i=Mn(v,a,i,h),i.elementType=t,i.type=l,i.lanes=d,i}function zs(t,i,a,l){return t=Mn(7,t,l,i),t.lanes=a,t}function qy(t,i,a,l){t=Mn(22,t,l,i),t.elementType=Z,t.lanes=a;var h={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var d=h._current;if(d===null)throw Error(s(456));if((h._pendingVisibility&2)===0){var v=br(d,2);v!==null&&(h._pendingVisibility|=2,tn(v,d,2))}},attach:function(){var d=h._current;if(d===null)throw Error(s(456));if((h._pendingVisibility&2)!==0){var v=br(d,2);v!==null&&(h._pendingVisibility&=-3,tn(v,d,2))}}};return t.stateNode=h,t}function td(t,i,a){return t=Mn(6,t,null,i),t.lanes=a,t}function nd(t,i,a){return i=Mn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Fi(t){t.flags|=4}function Fy(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!C_(i)){if(i=Dn.current,i!==null&&((Le&4194176)===Le?ui!==null:(Le&62914560)!==Le&&(Le&536870912)===0||i!==ui))throw Qo=of,og;t.flags|=8192}}function lc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?dr():536870912,t.lanes|=i,za|=i)}function hl(t,i){if(!je)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function et(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&31457280,l|=h.flags&31457280,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function pS(t,i,a){var l=i.pendingProps;switch(sf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(i),null;case 1:return et(i),null;case 3:return a=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Bi(wt),Si(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Fo(i)?Fi(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Hn!==null&&(cd(Hn),Hn=null))),et(i),null;case 26:return a=i.memoizedState,t===null?(Fi(i),a!==null?(et(i),Fy(i,a)):(et(i),i.flags&=-16777217)):a?a!==t.memoizedState?(Fi(i),et(i),Fy(i,a)):(et(i),i.flags&=-16777217):(t.memoizedProps!==l&&Fi(i),et(i),i.flags&=-16777217),null;case 27:ra(i),a=_n.current;var h=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Fi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return et(i),null}t=Xt.current,Fo(i)?sg(i):(t=E_(h,l,a),i.stateNode=t,Fi(i))}return et(i),null;case 5:if(ra(i),a=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Fi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return et(i),null}if(t=Xt.current,Fo(i))sg(i);else{switch(h=vc(_n.current),t){case 1:t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=h.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}t[Dt]=i,t[Et]=l;e:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)t.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break e;for(;h.sibling===null;){if(h.return===null||h.return===i)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=t;e:switch(zt(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Fi(i)}}return et(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Fi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(t=_n.current,Fo(i)){if(t=i.stateNode,a=i.memoizedProps,l=null,h=en,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[Dt]=i,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||m_(t.nodeValue,a)),t||Ds(i)}else t=vc(t).createTextNode(l),t[Dt]=i,i.stateNode=t}return et(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=Fo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Dt]=i}else Go(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;et(i),h=!1}else Hn!==null&&(cd(Hn),Hn=null),h=!0;if(!h)return i.flags&256?(xi(i),i):(xi(i),null)}if(xi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==t&&a&&(i.child.flags|=8192),lc(i,i.updateQueue),et(i),null;case 4:return Si(),t===null&&Td(i.stateNode.containerInfo),et(i),null;case 10:return Bi(i.type),et(i),null;case 19:if(it(St),h=i.memoizedState,h===null)return et(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)hl(h,!1);else{if(at!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=Gu(t),d!==null){for(i.flags|=128,hl(h,!1),t=d.updateQueue,i.updateQueue=t,lc(i,t),i.subtreeFlags=0,t=a,a=i.child;a!==null;)Hy(a,t),a=a.sibling;return Ke(St,St.current&1|2),i.child}t=t.sibling}h.tail!==null&&sn()>uc&&(i.flags|=128,l=!0,hl(h,!1),i.lanes=4194304)}else{if(!l)if(t=Gu(d),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,lc(i,t),hl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!je)return et(i),null}else 2*sn()-h.renderingStartTime>uc&&a!==536870912&&(i.flags|=128,l=!0,hl(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(t=h.last,t!==null?t.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=sn(),i.sibling=null,t=St.current,Ke(St,l?t&1|2:t&1),i):(et(i),null);case 22:case 23:return xi(i),uf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(et(i),i.subtreeFlags&6&&(i.flags|=8192)):et(i),a=i.updateQueue,a!==null&&lc(i,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),t!==null&&it(Ns),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Bi(wt),et(i),null;case 25:return null}throw Error(s(156,i.tag))}function gS(t,i){switch(sf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Bi(wt),Si(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return ra(i),null;case 13:if(xi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Go()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return it(St),null;case 4:return Si(),null;case 10:return Bi(i.type),null;case 22:case 23:return xi(i),uf(),t!==null&&it(Ns),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Bi(wt),null;case 25:return null;default:return null}}function Gy(t,i){switch(sf(i),i.tag){case 3:Bi(wt),Si();break;case 26:case 27:case 5:ra(i);break;case 4:Si();break;case 13:xi(i);break;case 19:it(St);break;case 10:Bi(i.type);break;case 22:case 23:xi(i),uf(),t!==null&&it(Ns);break;case 24:Bi(wt)}}var yS={getCacheForType:function(t){var i=Ft(wt),a=i.data.get(t);return a===void 0&&(a=t(),i.data.set(t,a)),a}},_S=typeof WeakMap=="function"?WeakMap:Map,tt=0,Xe=null,Oe=null,Le=0,We=0,pn=null,Gi=!1,Ua=!1,id=!1,Ki=0,at=0,Ur=0,Bs=0,rd=0,Vn=0,za=0,fl=null,hi=null,sd=!1,ad=0,uc=1/0,cc=null,zr=null,hc=!1,js=null,dl=0,od=0,ld=null,ml=0,ud=null;function gn(){if((tt&2)!==0&&Le!==0)return Le&-Le;if(S.T!==null){var t=Oa;return t!==0?t:yd()}return yu()}function Ky(){Vn===0&&(Vn=(Le&536870912)===0||je?Ro():536870912);var t=Dn.current;return t!==null&&(t.flags|=32),Vn}function tn(t,i,a){(t===Xe&&We===2||t.cancelPendingCommit!==null)&&(Ba(t,0),$i(t,Le,Vn,!1)),ut(t,a),((tt&2)===0||t!==Xe)&&(t===Xe&&((tt&2)===0&&(Bs|=a),at===4&&$i(t,Le,Vn,!1)),fi(t))}function $y(t,i,a){if((tt&6)!==0)throw Error(s(327));var l=!a&&(i&60)===0&&(i&t.expiredLanes)===0||fr(t,i),h=l?TS(t,i):dd(t,i,!0),d=l;do{if(h===0){Ua&&!l&&$i(t,i,0,!1);break}else if(h===6)$i(t,i,0,!Gi);else{if(a=t.current.alternate,d&&!vS(a)){h=dd(t,i,!1),d=!1;continue}if(h===2){if(d=i,t.errorRecoveryDisabledLanes&d)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;e:{var T=t;h=fl;var R=T.current.memoizedState.isDehydrated;if(R&&(Ba(T,v).flags|=256),v=dd(T,v,!1),v!==2){if(id&&!R){T.errorRecoveryDisabledLanes|=d,Bs|=d,h=4;break e}d=hi,hi=h,d!==null&&cd(d)}h=v}if(d=!1,h!==2)continue}}if(h===1){Ba(t,0),$i(t,i,0,!0);break}e:{switch(l=t,h){case 0:case 1:throw Error(s(345));case 4:if((i&4194176)===i){$i(l,i,Vn,!Gi);break e}break;case 2:hi=null;break;case 3:case 5:break;default:throw Error(s(329))}if(l.finishedWork=a,l.finishedLanes=i,(i&62914560)===i&&(d=ad+300-sn(),10<d)){if($i(l,i,Vn,!Gi),vn(l,0)!==0)break e;l.timeoutHandle=y_(Qy.bind(null,l,a,hi,cc,sd,i,Vn,Bs,za,Gi,2,-0,0),d);break e}Qy(l,a,hi,cc,sd,i,Vn,Bs,za,Gi,0,-0,0)}}break}while(!0);fi(t)}function cd(t){hi===null?hi=t:hi.push.apply(hi,t)}function Qy(t,i,a,l,h,d,v,T,R,P,K,W,j){var G=i.subtreeFlags;if((G&8192||(G&16785408)===16785408)&&(El={stylesheets:null,count:0,unsuspend:ew},Uy(i),i=nw(),i!==null)){t.cancelPendingCommit=i(t_.bind(null,t,a,l,h,v,T,R,1,W,j)),$i(t,d,v,!P);return}t_(t,a,l,h,v,T,R,K,W,j)}function vS(t){for(var i=t;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!fn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function $i(t,i,a,l){i&=~rd,i&=~Bs,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var h=i;0<h;){var d=31-Wt(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&mr(t,a,i)}function fc(){return(tt&6)===0?(pl(0),!1):!0}function hd(){if(Oe!==null){if(We===0)var t=Oe.return;else t=Oe,zi=xs=null,yf(t),Ca=null,Yo=0,t=Oe;for(;t!==null;)Gy(t.alternate,t),t=t.return;Oe=null}}function Ba(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,US(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),hd(),Xe=t,Oe=a=Lr(t.current,null),Le=i,We=0,pn=null,Gi=!1,Ua=fr(t,i),id=!1,za=Vn=rd=Bs=Ur=at=0,hi=fl=null,sd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var h=31-Wt(l),d=1<<h;i|=t[h],l&=~d}return Ki=i,xu(),a}function Yy(t,i){Ce=null,S.H=ci,i===$o?(i=cg(),We=3):i===og?(i=cg(),We=4):We=i===ly?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,pn=i,Oe===null&&(at=1,nc(t,Rn(i,t.current)))}function Xy(){var t=S.H;return S.H=ci,t===null?ci:t}function Wy(){var t=S.A;return S.A=yS,t}function fd(){at=4,Gi||(Le&4194176)!==Le&&Dn.current!==null||(Ua=!0),(Ur&134217727)===0&&(Bs&134217727)===0||Xe===null||$i(Xe,Le,Vn,!1)}function dd(t,i,a){var l=tt;tt|=2;var h=Xy(),d=Wy();(Xe!==t||Le!==i)&&(cc=null,Ba(t,i)),i=!1;var v=at;e:do try{if(We!==0&&Oe!==null){var T=Oe,R=pn;switch(We){case 8:hd(),v=6;break e;case 3:case 2:case 6:Dn.current===null&&(i=!0);var P=We;if(We=0,pn=null,ja(t,T,R,P),a&&Ua){v=0;break e}break;default:P=We,We=0,pn=null,ja(t,T,R,P)}}ES(),v=at;break}catch(K){Yy(t,K)}while(!0);return i&&t.shellSuspendCounter++,zi=xs=null,tt=l,S.H=h,S.A=d,Oe===null&&(Xe=null,Le=0,xu()),v}function ES(){for(;Oe!==null;)Zy(Oe)}function TS(t,i){var a=tt;tt|=2;var l=Xy(),h=Wy();Xe!==t||Le!==i?(cc=null,uc=sn()+500,Ba(t,i)):Ua=fr(t,i);e:do try{if(We!==0&&Oe!==null){i=Oe;var d=pn;t:switch(We){case 1:We=0,pn=null,ja(t,i,d,1);break;case 2:if(lg(d)){We=0,pn=null,Jy(i);break}i=function(){We===2&&Xe===t&&(We=7),fi(t)},d.then(i,i);break e;case 3:We=7;break e;case 4:We=5;break e;case 7:lg(d)?(We=0,pn=null,Jy(i)):(We=0,pn=null,ja(t,i,d,7));break;case 5:var v=null;switch(Oe.tag){case 26:v=Oe.memoizedState;case 5:case 27:var T=Oe;if(!v||C_(v)){We=0,pn=null;var R=T.sibling;if(R!==null)Oe=R;else{var P=T.return;P!==null?(Oe=P,dc(P)):Oe=null}break t}}We=0,pn=null,ja(t,i,d,5);break;case 6:We=0,pn=null,ja(t,i,d,6);break;case 8:hd(),at=6;break e;default:throw Error(s(462))}}AS();break}catch(K){Yy(t,K)}while(!0);return zi=xs=null,S.H=l,S.A=h,tt=a,Oe!==null?0:(Xe=null,Le=0,xu(),at)}function AS(){for(;Oe!==null&&!Bh();)Zy(Oe)}function Zy(t){var i=Ey(t.alternate,t,Ki);t.memoizedProps=t.pendingProps,i===null?dc(t):Oe=i}function Jy(t){var i=t,a=i.alternate;switch(i.tag){case 15:case 0:i=my(a,i,i.pendingProps,i.type,void 0,Le);break;case 11:i=my(a,i,i.pendingProps,i.type.render,i.ref,Le);break;case 5:yf(i);default:Gy(a,i),i=Oe=Hy(i,Ki),i=Ey(a,i,Ki)}t.memoizedProps=t.pendingProps,i===null?dc(t):Oe=i}function ja(t,i,a,l){zi=xs=null,yf(i),Ca=null,Yo=0;var h=i.return;try{if(cS(t,h,i,a,Le)){at=1,nc(t,Rn(a,t.current)),Oe=null;return}}catch(d){if(h!==null)throw Oe=h,d;at=1,nc(t,Rn(a,t.current)),Oe=null;return}i.flags&32768?(je||l===1?t=!0:Ua||(Le&536870912)!==0?t=!1:(Gi=t=!0,(l===2||l===3||l===6)&&(l=Dn.current,l!==null&&l.tag===13&&(l.flags|=16384))),e_(i,t)):dc(i)}function dc(t){var i=t;do{if((i.flags&32768)!==0){e_(i,Gi);return}t=i.return;var a=pS(i.alternate,i,Ki);if(a!==null){Oe=a;return}if(i=i.sibling,i!==null){Oe=i;return}Oe=i=t}while(i!==null);at===0&&(at=5)}function e_(t,i){do{var a=gS(t.alternate,t);if(a!==null){a.flags&=32767,Oe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(t=t.sibling,t!==null)){Oe=t;return}Oe=t=a}while(t!==null);at=6,Oe=null}function t_(t,i,a,l,h,d,v,T,R,P){var K=S.T,W=ae.p;try{ae.p=2,S.T=null,SS(t,i,a,l,W,h,d,v,T,R,P)}finally{S.T=K,ae.p=W}}function SS(t,i,a,l,h,d,v,T){do Ha();while(js!==null);if((tt&6)!==0)throw Error(s(327));var R=t.finishedWork;if(l=t.finishedLanes,R===null)return null;if(t.finishedWork=null,t.finishedLanes=0,R===t.current)throw Error(s(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var P=R.lanes|R.childLanes;if(P|=tf,pu(t,l,P,d,v,T),t===Xe&&(Oe=Xe=null,Le=0),(R.subtreeFlags&10256)===0&&(R.flags&10256)===0||hc||(hc=!0,od=P,ld=a,IS(wi,function(){return Ha(),null})),a=(R.flags&15990)!==0,(R.subtreeFlags&15990)!==0||a?(a=S.T,S.T=null,d=ae.p,ae.p=2,v=tt,tt|=4,fS(t,R),ky(R,t),$A(bd,t.containerInfo),bc=!!wd,bd=wd=null,t.current=R,Ny(t,R.alternate,R),Ao(),tt=v,ae.p=d,S.T=a):t.current=R,hc?(hc=!1,js=t,dl=l):n_(t,P),P=t.pendingLanes,P===0&&(zr=null),wo(R.stateNode),fi(t),i!==null)for(h=t.onRecoverableError,R=0;R<i.length;R++)P=i[R],h(P.value,{componentStack:P.stack});return(dl&3)!==0&&Ha(),P=t.pendingLanes,(l&4194218)!==0&&(P&42)!==0?t===ud?ml++:(ml=0,ud=t):ml=0,pl(0),null}function n_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Wo(i)))}function Ha(){if(js!==null){var t=js,i=od;od=0;var a=gu(dl),l=S.T,h=ae.p;try{if(ae.p=32>a?32:a,S.T=null,js===null)var d=!1;else{a=ld,ld=null;var v=js,T=dl;if(js=null,dl=0,(tt&6)!==0)throw Error(s(331));var R=tt;if(tt|=4,By(v.current),Ly(v,v.current,T,a),tt=R,pl(0,!1),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(cr,v)}catch{}d=!0}return d}finally{ae.p=h,S.T=l,n_(t,i)}}return!1}function i_(t,i,a){i=Rn(a,i),i=Nf(t.stateNode,i,2),t=Vr(t,i,2),t!==null&&(ut(t,2),fi(t))}function Ye(t,i,a){if(t.tag===3)i_(t,t,a);else for(;i!==null;){if(i.tag===3){i_(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(zr===null||!zr.has(l))){t=Rn(a,t),a=ay(2),l=Vr(i,a,2),l!==null&&(oy(a,l,i,t),ut(l,2),fi(l));break}}i=i.return}}function md(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new _S;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(id=!0,h.add(a),t=wS.bind(null,t,i,a),i.then(t,t))}function wS(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xe===t&&(Le&a)===a&&(at===4||at===3&&(Le&62914560)===Le&&300>sn()-ad?(tt&2)===0&&Ba(t,0):rd|=a,za===Le&&(za=0)),fi(t)}function r_(t,i){i===0&&(i=dr()),t=br(t,i),t!==null&&(ut(t,i),fi(t))}function bS(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),r_(t,a)}function RS(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),r_(t,a)}function IS(t,i){return hs(t,i)}var mc=null,qa=null,pd=!1,pc=!1,gd=!1,Hs=0;function fi(t){t!==qa&&t.next===null&&(qa===null?mc=qa=t:qa=qa.next=t),pc=!0,pd||(pd=!0,DS(CS))}function pl(t,i){if(!gd&&pc){gd=!0;do for(var a=!1,l=mc;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-Wt(42|t)+1)-1,d&=h&~(v&~T),d=d&201326677?d&201326677|1:d?d|2:0}d!==0&&(a=!0,o_(l,d))}else d=Le,d=vn(l,l===Xe?d:0),(d&3)===0||fr(l,d)||(a=!0,o_(l,d));l=l.next}while(a);gd=!1}}function CS(){pc=pd=!1;var t=0;Hs!==0&&(LS()&&(t=Hs),Hs=0);for(var i=sn(),a=null,l=mc;l!==null;){var h=l.next,d=s_(l,i);d===0?(l.next=null,a===null?mc=h:a.next=h,h===null&&(qa=a)):(a=l,(t!==0||(d&3)!==0)&&(pc=!0)),l=h}pl(t)}function s_(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var v=31-Wt(d),T=1<<v,R=h[v];R===-1?((T&a)===0||(T&l)!==0)&&(h[v]=oa(T,i)):R<=i&&(t.expiredLanes|=T),d&=~T}if(i=Xe,a=Le,a=vn(t,t===i?a:0),l=t.callbackNode,a===0||t===i&&We===2||t.cancelPendingCommit!==null)return l!==null&&l!==null&&aa(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||fr(t,a)){if(i=a&-a,i===t.callbackPriority)return i;switch(l!==null&&aa(l),gu(a)){case 2:case 8:a=Ct;break;case 32:a=wi;break;case 268435456:a=So;break;default:a=wi}return l=a_.bind(null,t),a=hs(a,l),t.callbackPriority=i,t.callbackNode=a,i}return l!==null&&l!==null&&aa(l),t.callbackPriority=2,t.callbackNode=null,2}function a_(t,i){var a=t.callbackNode;if(Ha()&&t.callbackNode!==a)return null;var l=Le;return l=vn(t,t===Xe?l:0),l===0?null:($y(t,l,i),s_(t,sn()),t.callbackNode!=null&&t.callbackNode===a?a_.bind(null,t):null)}function o_(t,i){if(Ha())return null;$y(t,i,!0)}function DS(t){zS(function(){(tt&6)!==0?hs(vt,t):t()})}function yd(){return Hs===0&&(Hs=Ro()),Hs}function l_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ti(""+t)}function u_(t,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,t.id&&a.setAttribute("form",t.id),i.parentNode.insertBefore(a,i),t=new FormData(t),a.parentNode.removeChild(a),t}function OS(t,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=l_((h[Et]||null).action),v=l.submitter;v&&(i=(i=v[Et]||null)?l_(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var T=new ma("action","action",null,l,h);t.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Hs!==0){var R=v?u_(h,v):new FormData(h);Rf(a,{pending:!0,data:R,method:h.method,action:d},null,R)}}else typeof d=="function"&&(T.preventDefault(),R=v?u_(h,v):new FormData(h),Rf(a,{pending:!0,data:R,method:h.method,action:d},d,R))},currentTarget:h}]})}}for(var _d=0;_d<tg.length;_d++){var vd=tg[_d],NS=vd.toLowerCase(),MS=vd[0].toUpperCase()+vd.slice(1);jn(NS,"on"+MS)}jn(Xp,"onAnimationEnd"),jn(Wp,"onAnimationIteration"),jn(Zp,"onAnimationStart"),jn("dblclick","onDoubleClick"),jn("focusin","onFocus"),jn("focusout","onBlur"),jn(YA,"onTransitionRun"),jn(XA,"onTransitionStart"),jn(WA,"onTransitionCancel"),jn(Jp,"onTransitionEnd"),an("onMouseEnter",["mouseout","mouseover"]),an("onMouseLeave",["mouseout","mouseover"]),an("onPointerEnter",["pointerout","pointerover"]),an("onPointerLeave",["pointerout","pointerover"]),cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),cn("onBeforeInput",["compositionend","keypress","textInput","paste"]),cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gl));function c_(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],h=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var T=l[v],R=T.instance,P=T.currentTarget;if(T=T.listener,R!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=P;try{d(h)}catch(K){tc(K)}h.currentTarget=null,d=R}else for(v=0;v<l.length;v++){if(T=l[v],R=T.instance,P=T.currentTarget,T=T.listener,R!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=P;try{d(h)}catch(K){tc(K)}h.currentTarget=null,d=R}}}}function Ve(t,i){var a=i[ds];a===void 0&&(a=i[ds]=new Set);var l=t+"__bubble";a.has(l)||(h_(i,t,2,!1),a.add(l))}function Ed(t,i,a){var l=0;i&&(l|=4),h_(a,t,l,i)}var gc="_reactListening"+Math.random().toString(36).slice(2);function Td(t){if(!t[gc]){t[gc]=!0,Co.forEach(function(a){a!=="selectionchange"&&(VS.has(a)||Ed(a,!1,t),Ed(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[gc]||(i[gc]=!0,Ed("selectionchange",!1,i))}}function h_(t,i,a,l){switch(P_(i)){case 2:var h=sw;break;case 8:h=aw;break;default:h=Pd}a=h.bind(null,i,a,t),h=void 0,!Sn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(i,a,{capture:!0,passive:h}):t.addEventListener(i,a,!0):h!==void 0?t.addEventListener(i,a,{passive:h}):t.addEventListener(i,a,!1)}function Ad(t,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===h||T.nodeType===8&&T.parentNode===h)break;if(v===4)for(v=l.return;v!==null;){var R=v.tag;if((R===3||R===4)&&(R=v.stateNode.containerInfo,R===h||R.nodeType===8&&R.parentNode===h))return;v=v.return}for(;T!==null;){if(v=Bn(T),v===null)return;if(R=v.tag,R===5||R===6||R===26||R===27){l=d=v;continue e}T=T.parentNode}}l=l.return}Tu(function(){var P=d,K=da(a),W=[];e:{var j=eg.get(t);if(j!==void 0){var G=ma,ce=t;switch(t){case"keypress":if(ii(a)===0)break e;case"keydown":case"keyup":G=Ea;break;case"focusin":ce="focus",G=ya;break;case"focusout":ce="blur",G=ya;break;case"beforeblur":case"afterblur":G=ya;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=wn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=$h;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=Du;break;case Xp:case Wp:case Zp:G=_a;break;case Jp:G=Nu;break;case"scroll":case"scrollend":G=Au;break;case"wheel":G=Ta;break;case"copy":case"cut":case"paste":G=va;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Bo;break;case"toggle":case"beforetoggle":G=Vu}var Ae=(i&4)!==0,ot=!Ae&&(t==="scroll"||t==="scrollend"),x=Ae?j!==null?j+"Capture":null:j;Ae=[];for(var N=P,B;N!==null;){var Y=N;if(B=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||B===null||x===null||(Y=_s(N,x),Y!=null&&Ae.push(yl(N,Y,B))),ot)break;N=N.return}0<Ae.length&&(j=new G(j,ce,null,a,K),W.push({event:j,listeners:Ae}))}}if((i&7)===0){e:{if(j=t==="mouseover"||t==="pointerover",G=t==="mouseout"||t==="pointerout",j&&a!==An&&(ce=a.relatedTarget||a.fromElement)&&(Bn(ce)||ce[bi]))break e;if((G||j)&&(j=K.window===K?K:(j=K.ownerDocument)?j.defaultView||j.parentWindow:window,G?(ce=a.relatedTarget||a.toElement,G=P,ce=ce?Bn(ce):null,ce!==null&&(ot=de(ce),Ae=ce.tag,ce!==ot||Ae!==5&&Ae!==27&&Ae!==6)&&(ce=null)):(G=null,ce=P),G!==ce)){if(Ae=wn,Y="onMouseLeave",x="onMouseEnter",N="mouse",(t==="pointerout"||t==="pointerover")&&(Ae=Bo,Y="onPointerLeave",x="onPointerEnter",N="pointer"),ot=G==null?j:_r(G),B=ce==null?j:_r(ce),j=new Ae(Y,N+"leave",G,a,K),j.target=ot,j.relatedTarget=B,Y=null,Bn(K)===P&&(Ae=new Ae(x,N+"enter",ce,a,K),Ae.target=B,Ae.relatedTarget=ot,Y=Ae),ot=Y,G&&ce)t:{for(Ae=G,x=ce,N=0,B=Ae;B;B=Fa(B))N++;for(B=0,Y=x;Y;Y=Fa(Y))B++;for(;0<N-B;)Ae=Fa(Ae),N--;for(;0<B-N;)x=Fa(x),B--;for(;N--;){if(Ae===x||x!==null&&Ae===x.alternate)break t;Ae=Fa(Ae),x=Fa(x)}Ae=null}else Ae=null;G!==null&&f_(W,j,G,Ae,!1),ce!==null&&ot!==null&&f_(W,ot,ce,Ae,!0)}}e:{if(j=P?_r(P):window,G=j.nodeName&&j.nodeName.toLowerCase(),G==="select"||G==="input"&&j.type==="file")var le=zp;else if(At(j))if(Bp)le=GA;else{le=qA;var De=HA}else G=j.nodeName,!G||G.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?P&&Vo(P.elementType)&&(le=zp):le=FA;if(le&&(le=le(t,P))){Vi(W,le,a,K);break e}De&&De(t,j,P),t==="focusout"&&P&&j.type==="number"&&P.memoizedProps.value!=null&&fa(j,"number",j.value)}switch(De=P?_r(P):window,t){case"focusin":(At(De)||De.contentEditable==="true")&&(Aa=De,Zh=P,qo=null);break;case"focusout":qo=Zh=Aa=null;break;case"mousedown":Jh=!0;break;case"contextmenu":case"mouseup":case"dragend":Jh=!1,Qp(W,a,K);break;case"selectionchange":if(QA)break;case"keydown":case"keyup":Qp(W,a,K)}var fe;if(ai)e:{switch(t){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else ke?q(t,a)&&(ye="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(_&&a.locale!=="ko"&&(ke||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&ke&&(fe=ko()):(ni=K,wr="value"in ni?ni.value:ni.textContent,ke=!0)),De=yc(P,ye),0<De.length&&(ye=new Uo(ye,t,null,a,K),W.push({event:ye,listeners:De}),fe?ye.data=fe:(fe=ie(a),fe!==null&&(ye.data=fe)))),(fe=g?Tt(t,a):xe(t,a))&&(ye=yc(P,"onBeforeInput"),0<ye.length&&(De=new Uo("onBeforeInput","beforeinput",null,a,K),W.push({event:De,listeners:ye}),De.data=fe)),OS(W,t,P,a,K)}c_(W,i)})}function yl(t,i,a){return{instance:t,listener:i,currentTarget:a}}function yc(t,i){for(var a=i+"Capture",l=[];t!==null;){var h=t,d=h.stateNode;h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=_s(t,a),h!=null&&l.unshift(yl(t,h,d)),h=_s(t,i),h!=null&&l.push(yl(t,h,d))),t=t.return}return l}function Fa(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function f_(t,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var T=a,R=T.alternate,P=T.stateNode;if(T=T.tag,R!==null&&R===l)break;T!==5&&T!==26&&T!==27||P===null||(R=P,h?(P=_s(a,d),P!=null&&v.unshift(yl(a,P,R))):h||(P=_s(a,d),P!=null&&v.push(yl(a,P,R)))),a=a.return}v.length!==0&&t.push({event:i,listeners:v})}var PS=/\r\n?/g,kS=/\u0000|\uFFFD/g;function d_(t){return(typeof t=="string"?t:""+t).replace(PS,`
`).replace(kS,"")}function m_(t,i){return i=d_(i),d_(t)===i}function _c(){}function Qe(t,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Tn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Tn(t,""+l);break;case"className":Tr(t,"class",l);break;case"tabIndex":Tr(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Tr(t,a,l);break;case"style":Eu(t,l,d);break;case"data":if(i!=="object"){Tr(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=ti(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Qe(t,i,"name",h.name,h,null),Qe(t,i,"formEncType",h.formEncType,h,null),Qe(t,i,"formMethod",h.formMethod,h,null),Qe(t,i,"formTarget",h.formTarget,h,null)):(Qe(t,i,"encType",h.encType,h,null),Qe(t,i,"method",h.method,h,null),Qe(t,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=ti(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=_c);break;case"onScroll":l!=null&&Ve("scroll",t);break;case"onScrollEnd":l!=null&&Ve("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=ti(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":Ve("beforetoggle",t),Ve("toggle",t),Er(t,"popover",l);break;case"xlinkActuate":En(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":En(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":En(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":En(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":En(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":En(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":En(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":En(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":En(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Er(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Gh.get(a)||a,Er(t,a,l))}}function Sd(t,i,a,l,h,d){switch(a){case"style":Eu(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof l=="string"?Tn(t,l):(typeof l=="number"||typeof l=="bigint")&&Tn(t,""+l);break;case"onScroll":l!=null&&Ve("scroll",t);break;case"onScrollEnd":l!=null&&Ve("scrollend",t);break;case"onClick":l!=null&&(t.onclick=_c);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ca.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=t[Et]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,l,h);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):Er(t,a,l)}}}function zt(t,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ve("error",t),Ve("load",t);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Qe(t,i,d,v,a,null)}}h&&Qe(t,i,"srcSet",a.srcSet,a,null),l&&Qe(t,i,"src",a.src,a,null);return;case"input":Ve("invalid",t);var T=d=v=h=null,R=null,P=null;for(l in a)if(a.hasOwnProperty(l)){var K=a[l];if(K!=null)switch(l){case"name":h=K;break;case"type":v=K;break;case"checked":R=K;break;case"defaultChecked":P=K;break;case"value":d=K;break;case"defaultValue":T=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,i));break;default:Qe(t,i,l,K,a,null)}}gs(t,d,T,R,P,v,h,!1),ps(t);return;case"select":Ve("invalid",t),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:Qe(t,i,h,T,a,null)}i=d,a=v,t.multiple=!!l,i!=null?Be(t,!!l,i,!1):a!=null&&Be(t,!!l,a,!0);return;case"textarea":Ve("invalid",t),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Qe(t,i,v,T,a,null)}Sr(t,l,h,d),ps(t);return;case"option":for(R in a)if(a.hasOwnProperty(R)&&(l=a[R],l!=null))switch(R){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Qe(t,i,R,l,a,null)}return;case"dialog":Ve("cancel",t),Ve("close",t);break;case"iframe":case"object":Ve("load",t);break;case"video":case"audio":for(l=0;l<gl.length;l++)Ve(gl[l],t);break;case"image":Ve("error",t),Ve("load",t);break;case"details":Ve("toggle",t);break;case"embed":case"source":case"link":Ve("error",t),Ve("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(P in a)if(a.hasOwnProperty(P)&&(l=a[P],l!=null))switch(P){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Qe(t,i,P,l,a,null)}return;default:if(Vo(i)){for(K in a)a.hasOwnProperty(K)&&(l=a[K],l!==void 0&&Sd(t,i,K,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Qe(t,i,T,l,a,null))}function xS(t,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,T=null,R=null,P=null,K=null;for(G in a){var W=a[G];if(a.hasOwnProperty(G)&&W!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":R=W;default:l.hasOwnProperty(G)||Qe(t,i,G,null,l,W)}}for(var j in l){var G=l[j];if(W=a[j],l.hasOwnProperty(j)&&(G!=null||W!=null))switch(j){case"type":d=G;break;case"name":h=G;break;case"checked":P=G;break;case"defaultChecked":K=G;break;case"value":v=G;break;case"defaultValue":T=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,i));break;default:G!==W&&Qe(t,i,j,G,l,W)}}Ar(t,v,T,R,P,K,d,h);return;case"select":G=v=T=j=null;for(d in a)if(R=a[d],a.hasOwnProperty(d)&&R!=null)switch(d){case"value":break;case"multiple":G=R;default:l.hasOwnProperty(d)||Qe(t,i,d,null,l,R)}for(h in l)if(d=l[h],R=a[h],l.hasOwnProperty(h)&&(d!=null||R!=null))switch(h){case"value":j=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==R&&Qe(t,i,h,d,l,R)}i=T,a=v,l=G,j!=null?Be(t,!!a,j,!1):!!l!=!!a&&(i!=null?Be(t,!!a,i,!0):Be(t,!!a,a?[]:"",!1));return;case"textarea":G=j=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Qe(t,i,T,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":j=h;break;case"defaultValue":G=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Qe(t,i,v,h,l,d)}ys(t,j,G);return;case"option":for(var ce in a)if(j=a[ce],a.hasOwnProperty(ce)&&j!=null&&!l.hasOwnProperty(ce))switch(ce){case"selected":t.selected=!1;break;default:Qe(t,i,ce,null,l,j)}for(R in l)if(j=l[R],G=a[R],l.hasOwnProperty(R)&&j!==G&&(j!=null||G!=null))switch(R){case"selected":t.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:Qe(t,i,R,j,l,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ae in a)j=a[Ae],a.hasOwnProperty(Ae)&&j!=null&&!l.hasOwnProperty(Ae)&&Qe(t,i,Ae,null,l,j);for(P in l)if(j=l[P],G=a[P],l.hasOwnProperty(P)&&j!==G&&(j!=null||G!=null))switch(P){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,i));break;default:Qe(t,i,P,j,l,G)}return;default:if(Vo(i)){for(var ot in a)j=a[ot],a.hasOwnProperty(ot)&&j!==void 0&&!l.hasOwnProperty(ot)&&Sd(t,i,ot,void 0,l,j);for(K in l)j=l[K],G=a[K],!l.hasOwnProperty(K)||j===G||j===void 0&&G===void 0||Sd(t,i,K,j,l,G);return}}for(var x in a)j=a[x],a.hasOwnProperty(x)&&j!=null&&!l.hasOwnProperty(x)&&Qe(t,i,x,null,l,j);for(W in l)j=l[W],G=a[W],!l.hasOwnProperty(W)||j===G||j==null&&G==null||Qe(t,i,W,j,l,G)}var wd=null,bd=null;function vc(t){return t.nodeType===9?t:t.ownerDocument}function p_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function g_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Rd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Id=null;function LS(){var t=window.event;return t&&t.type==="popstate"?t===Id?!1:(Id=t,!0):(Id=null,!1)}var y_=typeof setTimeout=="function"?setTimeout:void 0,US=typeof clearTimeout=="function"?clearTimeout:void 0,__=typeof Promise=="function"?Promise:void 0,zS=typeof queueMicrotask=="function"?queueMicrotask:typeof __<"u"?function(t){return __.resolve(null).then(t).catch(BS)}:y_;function BS(t){setTimeout(function(){throw t})}function Cd(t,i){var a=i,l=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(l===0){t.removeChild(h),bl(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=h}while(a);bl(i)}function Dd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Dd(a),ms(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function jS(t,i,a,l){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[yr])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==h.rel||t.getAttribute("href")!==(h.href==null?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Fn(t.nextSibling),t===null)break}return null}function HS(t,i,a){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Fn(t.nextSibling),t===null))return null;return t}function Fn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}function v_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}function E_(t,i,a){switch(i=vc(a),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}var Pn=new Map,T_=new Set;function Ec(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var Qi=ae.d;ae.d={f:qS,r:FS,D:GS,C:KS,L:$S,m:QS,X:XS,S:YS,M:WS};function qS(){var t=Qi.f(),i=fc();return t||i}function FS(t){var i=Ri(t);i!==null&&i.tag===5&&i.type==="form"?Qg(i):Qi.r(t)}var Ga=typeof document>"u"?null:document;function A_(t,i,a){var l=Ga;if(l&&typeof i=="string"&&i){var h=rt(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),T_.has(h)||(T_.add(h),t={rel:t,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),zt(i,"link",t),Je(i),l.head.appendChild(i)))}}function GS(t){Qi.D(t),A_("dns-prefetch",t,null)}function KS(t,i){Qi.C(t,i),A_("preconnect",t,i)}function $S(t,i,a){Qi.L(t,i,a);var l=Ga;if(l&&t&&i){var h='link[rel="preload"][as="'+rt(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+rt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+rt(a.imageSizes)+'"]')):h+='[href="'+rt(t)+'"]';var d=h;switch(i){case"style":d=Ka(t);break;case"script":d=$a(t)}Pn.has(d)||(t=I({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:t,as:i},a),Pn.set(d,t),l.querySelector(h)!==null||i==="style"&&l.querySelector(_l(d))||i==="script"&&l.querySelector(vl(d))||(i=l.createElement("link"),zt(i,"link",t),Je(i),l.head.appendChild(i)))}}function QS(t,i){Qi.m(t,i);var a=Ga;if(a&&t){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+rt(l)+'"][href="'+rt(t)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=$a(t)}if(!Pn.has(d)&&(t=I({rel:"modulepreload",href:t},i),Pn.set(d,t),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vl(d)))return}l=a.createElement("link"),zt(l,"link",t),Je(l),a.head.appendChild(l)}}}function YS(t,i,a){Qi.S(t,i,a);var l=Ga;if(l&&t){var h=vr(l).hoistableStyles,d=Ka(t);i=i||"default";var v=h.get(d);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(_l(d)))T.loading=5;else{t=I({rel:"stylesheet",href:t,"data-precedence":i},a),(a=Pn.get(d))&&Od(t,a);var R=v=l.createElement("link");Je(R),zt(R,"link",t),R._p=new Promise(function(P,K){R.onload=P,R.onerror=K}),R.addEventListener("load",function(){T.loading|=1}),R.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Tc(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:T},h.set(d,v)}}}function XS(t,i){Qi.X(t,i);var a=Ga;if(a&&t){var l=vr(a).hoistableScripts,h=$a(t),d=l.get(h);d||(d=a.querySelector(vl(h)),d||(t=I({src:t,async:!0},i),(i=Pn.get(h))&&Nd(t,i),d=a.createElement("script"),Je(d),zt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function WS(t,i){Qi.M(t,i);var a=Ga;if(a&&t){var l=vr(a).hoistableScripts,h=$a(t),d=l.get(h);d||(d=a.querySelector(vl(h)),d||(t=I({src:t,async:!0,type:"module"},i),(i=Pn.get(h))&&Nd(t,i),d=a.createElement("script"),Je(d),zt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function S_(t,i,a,l){var h=(h=_n.current)?Ec(h):null;if(!h)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Ka(a.href),a=vr(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ka(a.href);var d=vr(h).hoistableStyles,v=d.get(t);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,v),(d=h.querySelector(_l(t)))&&!d._p&&(v.instance=d,v.state.loading=5),Pn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Pn.set(t,a),d||ZS(h,t,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=$a(a),a=vr(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ka(t){return'href="'+rt(t)+'"'}function _l(t){return'link[rel="stylesheet"]['+t+"]"}function w_(t){return I({},t,{"data-precedence":t.precedence,precedence:null})}function ZS(t,i,a,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),zt(i,"link",a),Je(i),t.head.appendChild(i))}function $a(t){return'[src="'+rt(t)+'"]'}function vl(t){return"script[async]"+t}function b_(t,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+rt(a.href)+'"]');if(l)return i.instance=l,Je(l),l;var h=I({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Je(l),zt(l,"style",h),Tc(l,a.precedence,t),i.instance=l;case"stylesheet":h=Ka(a.href);var d=t.querySelector(_l(h));if(d)return i.state.loading|=4,i.instance=d,Je(d),d;l=w_(a),(h=Pn.get(h))&&Od(l,h),d=(t.ownerDocument||t).createElement("link"),Je(d);var v=d;return v._p=new Promise(function(T,R){v.onload=T,v.onerror=R}),zt(d,"link",l),i.state.loading|=4,Tc(d,a.precedence,t),i.instance=d;case"script":return d=$a(a.src),(h=t.querySelector(vl(d)))?(i.instance=h,Je(h),h):(l=a,(h=Pn.get(d))&&(l=I({},a),Nd(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),Je(h),zt(h,"link",l),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Tc(l,a.precedence,t));return i.instance}function Tc(t,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(t,i.firstChild))}function Od(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Nd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Ac=null;function R_(t,i,a){if(Ac===null){var l=new Map,h=Ac=new Map;h.set(a,l)}else h=Ac,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var d=a[h];if(!(d[yr]||d[Dt]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=t+v;var T=l.get(v);T?T.push(d):l.set(v,[d])}}return l}function I_(t,i,a){t=t.ownerDocument||t,t.head.insertBefore(a,i==="title"?t.querySelector("head > title"):null)}function JS(t,i,a){if(a===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function C_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var El=null;function ew(){}function tw(t,i,a){if(El===null)throw Error(s(475));var l=El;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Ka(a.href),d=t.querySelector(_l(h));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Sc.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=d,Je(d);return}d=t.ownerDocument||t,a=w_(a),(h=Pn.get(h))&&Od(a,h),d=d.createElement("link"),Je(d);var v=d;v._p=new Promise(function(T,R){v.onload=T,v.onerror=R}),zt(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Sc.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function nw(){if(El===null)throw Error(s(475));var t=El;return t.stylesheets&&t.count===0&&Md(t,t.stylesheets),0<t.count?function(i){var a=setTimeout(function(){if(t.stylesheets&&Md(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Sc(){if(this.count--,this.count===0){if(this.stylesheets)Md(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var wc=null;function Md(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,wc=new Map,i.forEach(iw,t),wc=null,Sc.call(t))}function iw(t,i){if(!(i.state.loading&4)){var a=wc.get(t);if(a)var l=a.get(null);else{a=new Map,wc.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=Sc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var Tl={$$typeof:k,Provider:null,Consumer:null,_currentValue:Ie,_currentValue2:Ie,_threadCount:0};function rw(t,i,a,l,h,d,v,T){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=la(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=la(0),this.hiddenUpdates=la(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function D_(t,i,a,l,h,d,v,T,R,P,K,W){return t=new rw(t,i,a,v,T,R,P,W),i=1,d===!0&&(i|=24),d=Mn(3,null,null,i),t.current=d,d.stateNode=t,i=cf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Ff(d),t}function O_(t){return t?(t=ba,t):ba}function N_(t,i,a,l,h,d){h=O_(h),l.context===null?l.context=h:l.pendingContext=h,l=Mr(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Vr(t,l,i),a!==null&&(tn(a,t,i),rl(a,t,i))}function M_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Vd(t,i){M_(t,i),(t=t.alternate)&&M_(t,i)}function V_(t){if(t.tag===13){var i=br(t,67108864);i!==null&&tn(i,t,67108864),Vd(t,67108864)}}var bc=!0;function sw(t,i,a,l){var h=S.T;S.T=null;var d=ae.p;try{ae.p=2,Pd(t,i,a,l)}finally{ae.p=d,S.T=h}}function aw(t,i,a,l){var h=S.T;S.T=null;var d=ae.p;try{ae.p=8,Pd(t,i,a,l)}finally{ae.p=d,S.T=h}}function Pd(t,i,a,l){if(bc){var h=kd(l);if(h===null)Ad(t,i,l,Rc,a),k_(t,l);else if(lw(h,t,i,a,l))l.stopPropagation();else if(k_(t,l),i&4&&-1<ow.indexOf(t)){for(;h!==null;){var d=Ri(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=zn(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var R=1<<31-Wt(v);T.entanglements[1]|=R,v&=~R}fi(d),(tt&6)===0&&(uc=sn()+500,pl(0))}}break;case 13:T=br(d,2),T!==null&&tn(T,d,2),fc(),Vd(d,2)}if(d=kd(l),d===null&&Ad(t,i,l,Rc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else Ad(t,i,l,null,a)}}function kd(t){return t=da(t),xd(t)}var Rc=null;function xd(t){if(Rc=null,t=Bn(t),t!==null){var i=de(t);if(i===null)t=null;else{var a=i.tag;if(a===13){if(t=qe(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Rc=t,null}function P_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(hu()){case vt:return 2;case Ct:return 8;case wi:case fu:return 32;case So:return 268435456;default:return 32}default:return 32}}var Ld=!1,Br=null,jr=null,Hr=null,Al=new Map,Sl=new Map,qr=[],ow="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function k_(t,i){switch(t){case"focusin":case"focusout":Br=null;break;case"dragenter":case"dragleave":jr=null;break;case"mouseover":case"mouseout":Hr=null;break;case"pointerover":case"pointerout":Al.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sl.delete(i.pointerId)}}function wl(t,i,a,l,h,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Ri(i),i!==null&&V_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function lw(t,i,a,l,h){switch(i){case"focusin":return Br=wl(Br,t,i,a,l,h),!0;case"dragenter":return jr=wl(jr,t,i,a,l,h),!0;case"mouseover":return Hr=wl(Hr,t,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return Al.set(d,wl(Al.get(d)||null,t,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,Sl.set(d,wl(Sl.get(d)||null,t,i,a,l,h)),!0}return!1}function x_(t){var i=Bn(t.target);if(i!==null){var a=de(i);if(a!==null){if(i=a.tag,i===13){if(i=qe(a),i!==null){t.blockedOn=i,gr(t.priority,function(){if(a.tag===13){var l=gn(),h=br(a,l);h!==null&&tn(h,a,l),Vd(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ic(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=kd(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);An=l,a.target.dispatchEvent(l),An=null}else return i=Ri(a),i!==null&&V_(i),t.blockedOn=a,!1;i.shift()}return!0}function L_(t,i,a){Ic(t)&&a.delete(i)}function uw(){Ld=!1,Br!==null&&Ic(Br)&&(Br=null),jr!==null&&Ic(jr)&&(jr=null),Hr!==null&&Ic(Hr)&&(Hr=null),Al.forEach(L_),Sl.forEach(L_)}function Cc(t,i){t.blockedOn===i&&(t.blockedOn=null,Ld||(Ld=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,uw)))}var Dc=null;function U_(t){Dc!==t&&(Dc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Dc===t&&(Dc=null);for(var i=0;i<t.length;i+=3){var a=t[i],l=t[i+1],h=t[i+2];if(typeof l!="function"){if(xd(l||a)===null)continue;break}var d=Ri(a);d!==null&&(t.splice(i,3),i-=3,Rf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function bl(t){function i(R){return Cc(R,t)}Br!==null&&Cc(Br,t),jr!==null&&Cc(jr,t),Hr!==null&&Cc(Hr,t),Al.forEach(i),Sl.forEach(i);for(var a=0;a<qr.length;a++){var l=qr[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<qr.length&&(a=qr[0],a.blockedOn===null);)x_(a),a.blockedOn===null&&qr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[Et]||null;if(typeof d=="function")v||U_(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[Et]||null)T=v.formAction;else if(xd(h)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),U_(a)}}}function Ud(t){this._internalRoot=t}Oc.prototype.render=Ud.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=gn();N_(a,l,t,i,null,null)},Oc.prototype.unmount=Ud.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;t.tag===0&&Ha(),N_(t.current,2,null,t,null,null),fc(),i[bi]=null}};function Oc(t){this._internalRoot=t}Oc.prototype.unstable_scheduleHydration=function(t){if(t){var i=yu();t={blockedOn:null,target:t,priority:i};for(var a=0;a<qr.length&&i!==0&&i<qr[a].priority;a++);qr.splice(a,0,t),a===0&&x_(t)}};var z_=e.version;if(z_!=="19.0.0")throw Error(s(527,z_,"19.0.0"));ae.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=J(i),t=t!==null?he(t):null,t=t===null?null:t.stateNode,t};var cw={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:S,findFiberByHostInstance:Bn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nc.isDisabled&&Nc.supportsFiber)try{cr=Nc.inject(cw),qt=Nc}catch{}}return Il.createRoot=function(t,i){if(!o(t))throw Error(s(299));var a=!1,l="",h=ny,d=iy,v=ry,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=D_(t,1,!1,null,null,a,l,h,d,v,T,null),t[bi]=i.current,Td(t.nodeType===8?t.parentNode:t),new Ud(i)},Il.hydrateRoot=function(t,i,a){if(!o(t))throw Error(s(299));var l=!1,h="",d=ny,v=iy,T=ry,R=null,P=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(R=a.unstable_transitionCallbacks),a.formState!==void 0&&(P=a.formState)),i=D_(t,1,!0,i,a??null,l,h,d,v,T,R,P),i.context=O_(null),a=i.current,l=gn(),h=Mr(l),h.callback=null,Vr(a,h,l),i.current.lanes=l,ut(i,l),fi(i),t[bi]=i.current,Td(t),new Oc(i)},Il.version="19.0.0",Il}var Y_;function Ew(){if(Y_)return jd.exports;Y_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),jd.exports=vw(),jd.exports}var Tw=Ew(),Cl={},X_;function Aw(){if(X_)return Cl;X_=1,Object.defineProperty(Cl,"__esModule",{value:!0}),Cl.parse=f,Cl.serialize=y;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,u=(()=>{const D=function(){};return D.prototype=Object.create(null),D})();function f(D,k){const z=new u,Q=D.length;if(Q<2)return z;const H=(k==null?void 0:k.decode)||E;let $=0;do{const ne=D.indexOf("=",$);if(ne===-1)break;const Z=D.indexOf(";",$),me=Z===-1?Q:Z;if(ne>me){$=D.lastIndexOf(";",ne-1)+1;continue}const ue=m(D,$,ne),we=p(D,ne,ue),M=D.slice(ue,we);if(z[M]===void 0){let b=m(D,ne+1,me),S=p(D,me,b);const I=H(D.slice(b,S));z[M]=I}$=me+1}while($<Q);return z}function m(D,k,z){do{const Q=D.charCodeAt(k);if(Q!==32&&Q!==9)return k}while(++k<z);return z}function p(D,k,z){for(;k>z;){const Q=D.charCodeAt(--k);if(Q!==32&&Q!==9)return k+1}return z}function y(D,k,z){const Q=(z==null?void 0:z.encode)||encodeURIComponent;if(!r.test(D))throw new TypeError(`argument name is invalid: ${D}`);const H=Q(k);if(!e.test(H))throw new TypeError(`argument val is invalid: ${k}`);let $=D+"="+H;if(!z)return $;if(z.maxAge!==void 0){if(!Number.isInteger(z.maxAge))throw new TypeError(`option maxAge is invalid: ${z.maxAge}`);$+="; Max-Age="+z.maxAge}if(z.domain){if(!n.test(z.domain))throw new TypeError(`option domain is invalid: ${z.domain}`);$+="; Domain="+z.domain}if(z.path){if(!s.test(z.path))throw new TypeError(`option path is invalid: ${z.path}`);$+="; Path="+z.path}if(z.expires){if(!w(z.expires)||!Number.isFinite(z.expires.valueOf()))throw new TypeError(`option expires is invalid: ${z.expires}`);$+="; Expires="+z.expires.toUTCString()}if(z.httpOnly&&($+="; HttpOnly"),z.secure&&($+="; Secure"),z.partitioned&&($+="; Partitioned"),z.priority)switch(typeof z.priority=="string"?z.priority.toLowerCase():void 0){case"low":$+="; Priority=Low";break;case"medium":$+="; Priority=Medium";break;case"high":$+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${z.priority}`)}if(z.sameSite)switch(typeof z.sameSite=="string"?z.sameSite.toLowerCase():z.sameSite){case!0:case"strict":$+="; SameSite=Strict";break;case"lax":$+="; SameSite=Lax";break;case"none":$+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${z.sameSite}`)}return $}function E(D){if(D.indexOf("%")===-1)return D;try{return decodeURIComponent(D)}catch{return D}}function w(D){return o.call(D)==="[object Date]"}return Cl}Aw();/**
 * react-router v7.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var W_="popstate";function Sw(r={}){function e(s,o){let{pathname:u,search:f,hash:m}=s.location;return om("",{pathname:u,search:f,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(s,o){return typeof o=="string"?o:jl(o)}return bw(e,n,null,r)}function Ze(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Kn(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ww(){return Math.random().toString(36).substring(2,10)}function Z_(r,e){return{usr:r.state,key:r.key,idx:e}}function om(r,e,n=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?ho(e):e,state:n,key:e&&e.key||s||ww()}}function jl({pathname:r="/",search:e="",hash:n=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function ho(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substring(n),r=r.substring(0,n));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function bw(r,e,n,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,f=o.history,m="POP",p=null,y=E();y==null&&(y=0,f.replaceState({...f.state,idx:y},""));function E(){return(f.state||{idx:null}).idx}function w(){m="POP";let H=E(),$=H==null?null:H-y;y=H,p&&p({action:m,location:Q.location,delta:$})}function D(H,$){m="PUSH";let ne=om(Q.location,H,$);y=E()+1;let Z=Z_(ne,y),me=Q.createHref(ne);try{f.pushState(Z,"",me)}catch(ue){if(ue instanceof DOMException&&ue.name==="DataCloneError")throw ue;o.location.assign(me)}u&&p&&p({action:m,location:Q.location,delta:1})}function k(H,$){m="REPLACE";let ne=om(Q.location,H,$);y=E();let Z=Z_(ne,y),me=Q.createHref(ne);f.replaceState(Z,"",me),u&&p&&p({action:m,location:Q.location,delta:0})}function z(H){let $=o.location.origin!=="null"?o.location.origin:o.location.href,ne=typeof H=="string"?H:jl(H);return ne=ne.replace(/ $/,"%20"),Ze($,`No window.location.(origin|href) available to create URL for href: ${ne}`),new URL(ne,$)}let Q={get action(){return m},get location(){return r(o,f)},listen(H){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(W_,w),p=H,()=>{o.removeEventListener(W_,w),p=null}},createHref(H){return e(o,H)},createURL:z,encodeLocation(H){let $=z(H);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:D,replace:k,go(H){return f.go(H)}};return Q}function PE(r,e,n="/"){return Rw(r,e,n,!1)}function Rw(r,e,n,s){let o=typeof e=="string"?ho(e):e,u=tr(o.pathname||"/",n);if(u==null)return null;let f=kE(r);Iw(f);let m=null;for(let p=0;m==null&&p<f.length;++p){let y=Uw(u);m=xw(f[p],y,s)}return m}function kE(r,e=[],n=[],s=""){let o=(u,f,m)=>{let p={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};p.relativePath.startsWith("/")&&(Ze(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let y=Zi([s,p.relativePath]),E=n.concat(p);u.children&&u.children.length>0&&(Ze(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),kE(u.children,e,E,y)),!(u.path==null&&!u.index)&&e.push({path:y,score:Pw(y,u.index),routesMeta:E})};return r.forEach((u,f)=>{var m;if(u.path===""||!((m=u.path)!=null&&m.includes("?")))o(u,f);else for(let p of xE(u.path))o(u,f,p)}),e}function xE(r){let e=r.split("/");if(e.length===0)return[];let[n,...s]=e,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let f=xE(s.join("/")),m=[];return m.push(...f.map(p=>p===""?u:[u,p].join("/"))),o&&m.push(...f),m.map(p=>r.startsWith("/")&&p===""?"/":p)}function Iw(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:kw(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var Cw=/^:[\w-]+$/,Dw=3,Ow=2,Nw=1,Mw=10,Vw=-2,J_=r=>r==="*";function Pw(r,e){let n=r.split("/"),s=n.length;return n.some(J_)&&(s+=Vw),e&&(s+=Ow),n.filter(o=>!J_(o)).reduce((o,u)=>o+(Cw.test(u)?Dw:u===""?Nw:Mw),s)}function kw(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function xw(r,e,n=!1){let{routesMeta:s}=r,o={},u="/",f=[];for(let m=0;m<s.length;++m){let p=s[m],y=m===s.length-1,E=u==="/"?e:e.slice(u.length)||"/",w=Xc({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},E),D=p.route;if(!w&&y&&n&&!s[s.length-1].route.index&&(w=Xc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!w)return null;Object.assign(o,w.params),f.push({params:o,pathname:Zi([u,w.pathname]),pathnameBase:Hw(Zi([u,w.pathnameBase])),route:D}),w.pathnameBase!=="/"&&(u=Zi([u,w.pathnameBase]))}return f}function Xc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=Lw(r.path,r.caseSensitive,r.end),o=e.match(n);if(!o)return null;let u=o[0],f=u.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:s.reduce((y,{paramName:E,isOptional:w},D)=>{if(E==="*"){let z=m[D]||"";f=u.slice(0,u.length-z.length).replace(/(.)\/+$/,"$1")}const k=m[D];return w&&!k?y[E]=void 0:y[E]=(k||"").replace(/%2F/g,"/"),y},{}),pathname:u,pathnameBase:f,pattern:r}}function Lw(r,e=!1,n=!0){Kn(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,p)=>(s.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function Uw(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Kn(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function tr(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}function zw(r,e="/"){let{pathname:n,search:s="",hash:o=""}=typeof r=="string"?ho(r):r;return{pathname:n?n.startsWith("/")?n:Bw(n,e):e,search:qw(s),hash:Fw(o)}}function Bw(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Gd(r,e,n,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function jw(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Pm(r){let e=jw(r);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function km(r,e,n,s=!1){let o;typeof r=="string"?o=ho(r):(o={...r},Ze(!o.pathname||!o.pathname.includes("?"),Gd("?","pathname","search",o)),Ze(!o.pathname||!o.pathname.includes("#"),Gd("#","pathname","hash",o)),Ze(!o.search||!o.search.includes("#"),Gd("#","search","hash",o)));let u=r===""||o.pathname==="",f=u?"/":o.pathname,m;if(f==null)m=n;else{let w=e.length-1;if(!s&&f.startsWith("..")){let D=f.split("/");for(;D[0]==="..";)D.shift(),w-=1;o.pathname=D.join("/")}m=w>=0?e[w]:"/"}let p=zw(o,m),y=f&&f!=="/"&&f.endsWith("/"),E=(u||f===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(y||E)&&(p.pathname+="/"),p}var Zi=r=>r.join("/").replace(/\/\/+/g,"/"),Hw=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),qw=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Fw=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Gw(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var LE=["POST","PUT","PATCH","DELETE"];new Set(LE);var Kw=["GET",...LE];new Set(Kw);var fo=F.createContext(null);fo.displayName="DataRouter";var _h=F.createContext(null);_h.displayName="DataRouterState";var UE=F.createContext({isTransitioning:!1});UE.displayName="ViewTransition";var $w=F.createContext(new Map);$w.displayName="Fetchers";var Qw=F.createContext(null);Qw.displayName="Await";var Yn=F.createContext(null);Yn.displayName="Navigation";var eu=F.createContext(null);eu.displayName="Location";var Ti=F.createContext({outlet:null,matches:[],isDataRoute:!1});Ti.displayName="Route";var xm=F.createContext(null);xm.displayName="RouteError";function Yw(r,{relative:e}={}){Ze(mo(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=F.useContext(Yn),{hash:o,pathname:u,search:f}=tu(r,{relative:e}),m=u;return n!=="/"&&(m=u==="/"?n:Zi([n,u])),s.createHref({pathname:m,search:f,hash:o})}function mo(){return F.useContext(eu)!=null}function us(){return Ze(mo(),"useLocation() may be used only in the context of a <Router> component."),F.useContext(eu).location}var zE="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function BE(r){F.useContext(Yn).static||F.useLayoutEffect(r)}function vh(){let{isDataRoute:r}=F.useContext(Ti);return r?lb():Xw()}function Xw(){Ze(mo(),"useNavigate() may be used only in the context of a <Router> component.");let r=F.useContext(fo),{basename:e,navigator:n}=F.useContext(Yn),{matches:s}=F.useContext(Ti),{pathname:o}=us(),u=JSON.stringify(Pm(s)),f=F.useRef(!1);return BE(()=>{f.current=!0}),F.useCallback((p,y={})=>{if(Kn(f.current,zE),!f.current)return;if(typeof p=="number"){n.go(p);return}let E=km(p,JSON.parse(u),o,y.relative==="path");r==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:Zi([e,E.pathname])),(y.replace?n.replace:n.push)(E,y.state,y)},[e,n,u,o,r])}F.createContext(null);function tu(r,{relative:e}={}){let{matches:n}=F.useContext(Ti),{pathname:s}=us(),o=JSON.stringify(Pm(n));return F.useMemo(()=>km(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function Ww(r,e){return jE(r,e)}function jE(r,e,n,s){var ne;Ze(mo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:u}=F.useContext(Yn),{matches:f}=F.useContext(Ti),m=f[f.length-1],p=m?m.params:{},y=m?m.pathname:"/",E=m?m.pathnameBase:"/",w=m&&m.route;{let Z=w&&w.path||"";HE(y,!w||Z.endsWith("*")||Z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${Z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Z}"> to <Route path="${Z==="/"?"*":`${Z}/*`}">.`)}let D=us(),k;if(e){let Z=typeof e=="string"?ho(e):e;Ze(E==="/"||((ne=Z.pathname)==null?void 0:ne.startsWith(E)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${Z.pathname}" was given in the \`location\` prop.`),k=Z}else k=D;let z=k.pathname||"/",Q=z;if(E!=="/"){let Z=E.replace(/^\//,"").split("/");Q="/"+z.replace(/^\//,"").split("/").slice(Z.length).join("/")}let H=!u&&n&&n.matches&&n.matches.length>0?n.matches:PE(r,{pathname:Q});Kn(w||H!=null,`No routes matched location "${k.pathname}${k.search}${k.hash}" `),Kn(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${k.pathname}${k.search}${k.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let $=nb(H&&H.map(Z=>Object.assign({},Z,{params:Object.assign({},p,Z.params),pathname:Zi([E,o.encodeLocation?o.encodeLocation(Z.pathname).pathname:Z.pathname]),pathnameBase:Z.pathnameBase==="/"?E:Zi([E,o.encodeLocation?o.encodeLocation(Z.pathnameBase).pathname:Z.pathnameBase])})),f,n,s);return e&&$?F.createElement(eu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...k},navigationType:"POP"}},$):$}function Zw(){let r=ob(),e=Gw(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=F.createElement(F.Fragment,null,F.createElement("p",null,"💿 Hey developer 👋"),F.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",F.createElement("code",{style:u},"ErrorBoundary")," or"," ",F.createElement("code",{style:u},"errorElement")," prop on your route.")),F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:o},n):null,f)}var Jw=F.createElement(Zw,null),eb=class extends F.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?F.createElement(Ti.Provider,{value:this.props.routeContext},F.createElement(xm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function tb({routeContext:r,match:e,children:n}){let s=F.useContext(fo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),F.createElement(Ti.Provider,{value:r},n)}function nb(r,e=[],n=null,s=null){if(r==null){if(!n)return null;if(n.errors)r=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let o=r,u=n==null?void 0:n.errors;if(u!=null){let p=o.findIndex(y=>y.route.id&&(u==null?void 0:u[y.route.id])!==void 0);Ze(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let f=!1,m=-1;if(n)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(m=p),y.route.id){let{loaderData:E,errors:w}=n,D=y.route.loader&&!E.hasOwnProperty(y.route.id)&&(!w||w[y.route.id]===void 0);if(y.route.lazy||D){f=!0,m>=0?o=o.slice(0,m+1):o=[o[0]];break}}}return o.reduceRight((p,y,E)=>{let w,D=!1,k=null,z=null;n&&(w=u&&y.route.id?u[y.route.id]:void 0,k=y.route.errorElement||Jw,f&&(m<0&&E===0?(HE("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),D=!0,z=null):m===E&&(D=!0,z=y.route.hydrateFallbackElement||null)));let Q=e.concat(o.slice(0,E+1)),H=()=>{let $;return w?$=k:D?$=z:y.route.Component?$=F.createElement(y.route.Component,null):y.route.element?$=y.route.element:$=p,F.createElement(tb,{match:y,routeContext:{outlet:p,matches:Q,isDataRoute:n!=null},children:$})};return n&&(y.route.ErrorBoundary||y.route.errorElement||E===0)?F.createElement(eb,{location:n.location,revalidation:n.revalidation,component:k,error:w,children:H(),routeContext:{outlet:null,matches:Q,isDataRoute:!0}}):H()},null)}function Lm(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ib(r){let e=F.useContext(fo);return Ze(e,Lm(r)),e}function rb(r){let e=F.useContext(_h);return Ze(e,Lm(r)),e}function sb(r){let e=F.useContext(Ti);return Ze(e,Lm(r)),e}function Um(r){let e=sb(r),n=e.matches[e.matches.length-1];return Ze(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function ab(){return Um("useRouteId")}function ob(){var s;let r=F.useContext(xm),e=rb("useRouteError"),n=Um("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[n]}function lb(){let{router:r}=ib("useNavigate"),e=Um("useNavigate"),n=F.useRef(!1);return BE(()=>{n.current=!0}),F.useCallback(async(o,u={})=>{Kn(n.current,zE),n.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...u}))},[r,e])}var ev={};function HE(r,e,n){!e&&!ev[r]&&(ev[r]=!0,Kn(!1,n))}F.memo(ub);function ub({routes:r,future:e,state:n}){return jE(r,void 0,n,e)}function cb({to:r,replace:e,state:n,relative:s}){Ze(mo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=F.useContext(Yn);Kn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=F.useContext(Ti),{pathname:f}=us(),m=vh(),p=km(r,Pm(u),f,s==="path"),y=JSON.stringify(p);return F.useEffect(()=>{m(JSON.parse(y),{replace:e,state:n,relative:s})},[m,y,s,e,n]),null}function Kr(r){Ze(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function hb({basename:r="/",children:e=null,location:n,navigationType:s="POP",navigator:o,static:u=!1}){Ze(!mo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),m=F.useMemo(()=>({basename:f,navigator:o,static:u,future:{}}),[f,o,u]);typeof n=="string"&&(n=ho(n));let{pathname:p="/",search:y="",hash:E="",state:w=null,key:D="default"}=n,k=F.useMemo(()=>{let z=tr(p,f);return z==null?null:{location:{pathname:z,search:y,hash:E,state:w,key:D},navigationType:s}},[f,p,y,E,w,D,s]);return Kn(k!=null,`<Router basename="${f}"> is not able to match the URL "${p}${y}${E}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:F.createElement(Yn.Provider,{value:m},F.createElement(eu.Provider,{children:e,value:k}))}function fb({children:r,location:e}){return Ww(lm(r),e)}function lm(r,e=[]){let n=[];return F.Children.forEach(r,(s,o)=>{if(!F.isValidElement(s))return;let u=[...e,o];if(s.type===F.Fragment){n.push.apply(n,lm(s.props.children,u));return}Ze(s.type===Kr,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ze(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=lm(s.props.children,u)),n.push(f)}),n}var zc="get",Bc="application/x-www-form-urlencoded";function Eh(r){return r!=null&&typeof r.tagName=="string"}function db(r){return Eh(r)&&r.tagName.toLowerCase()==="button"}function mb(r){return Eh(r)&&r.tagName.toLowerCase()==="form"}function pb(r){return Eh(r)&&r.tagName.toLowerCase()==="input"}function gb(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function yb(r,e){return r.button===0&&(!e||e==="_self")&&!gb(r)}var Mc=null;function _b(){if(Mc===null)try{new FormData(document.createElement("form"),0),Mc=!1}catch{Mc=!0}return Mc}var vb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Kd(r){return r!=null&&!vb.has(r)?(Kn(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Bc}"`),null):r}function Eb(r,e){let n,s,o,u,f;if(mb(r)){let m=r.getAttribute("action");s=m?tr(m,e):null,n=r.getAttribute("method")||zc,o=Kd(r.getAttribute("enctype"))||Bc,u=new FormData(r)}else if(db(r)||pb(r)&&(r.type==="submit"||r.type==="image")){let m=r.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||m.getAttribute("action");if(s=p?tr(p,e):null,n=r.getAttribute("formmethod")||m.getAttribute("method")||zc,o=Kd(r.getAttribute("formenctype"))||Kd(m.getAttribute("enctype"))||Bc,u=new FormData(m,r),!_b()){let{name:y,type:E,value:w}=r;if(E==="image"){let D=y?`${y}.`:"";u.append(`${D}x`,"0"),u.append(`${D}y`,"0")}else y&&u.append(y,w)}}else{if(Eh(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=zc,s=null,o=Bc,f=r}return u&&o==="text/plain"&&(f=u,u=void 0),{action:s,method:n.toLowerCase(),encType:o,formData:u,body:f}}function zm(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function Tb(r,e){if(r.id in e)return e[r.id];try{let n=await import(r.module);return e[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ab(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Sb(r,e,n){let s=await Promise.all(r.map(async o=>{let u=e.routes[o.route.id];if(u){let f=await Tb(u,n);return f.links?f.links():[]}return[]}));return Ib(s.flat(1).filter(Ab).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function tv(r,e,n,s,o,u){let f=(p,y)=>n[y]?p.route.id!==n[y].route.id:!0,m=(p,y)=>{var E;return n[y].pathname!==p.pathname||((E=n[y].route.path)==null?void 0:E.endsWith("*"))&&n[y].params["*"]!==p.params["*"]};return u==="assets"?e.filter((p,y)=>f(p,y)||m(p,y)):u==="data"?e.filter((p,y)=>{var w;let E=s.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(f(p,y)||m(p,y))return!0;if(p.route.shouldRevalidate){let D=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((w=n[0])==null?void 0:w.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof D=="boolean")return D}return!0}):[]}function wb(r,e,{includeHydrateFallback:n}={}){return bb(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function bb(r){return[...new Set(r)]}function Rb(r){let e={},n=Object.keys(r).sort();for(let s of n)e[s]=r[s];return e}function Ib(r,e){let n=new Set;return new Set(e),r.reduce((s,o)=>{let u=JSON.stringify(Rb(o));return n.has(u)||(n.add(u),s.push({key:u,link:o})),s},[])}function Cb(r,e){let n=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return n.pathname==="/"?n.pathname="_root.data":e&&tr(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function qE(){let r=F.useContext(fo);return zm(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Db(){let r=F.useContext(_h);return zm(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Bm=F.createContext(void 0);Bm.displayName="FrameworkContext";function FE(){let r=F.useContext(Bm);return zm(r,"You must render this element inside a <HydratedRouter> element"),r}function Ob(r,e){let n=F.useContext(Bm),[s,o]=F.useState(!1),[u,f]=F.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:y,onMouseLeave:E,onTouchStart:w}=e,D=F.useRef(null);F.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let Q=$=>{$.forEach(ne=>{f(ne.isIntersecting)})},H=new IntersectionObserver(Q,{threshold:.5});return D.current&&H.observe(D.current),()=>{H.disconnect()}}},[r]),F.useEffect(()=>{if(s){let Q=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(Q)}}},[s]);let k=()=>{o(!0)},z=()=>{o(!1),f(!1)};return n?r!=="intent"?[u,D,{}]:[u,D,{onFocus:Dl(m,k),onBlur:Dl(p,z),onMouseEnter:Dl(y,k),onMouseLeave:Dl(E,z),onTouchStart:Dl(w,k)}]:[!1,D,{}]}function Dl(r,e){return n=>{r&&r(n),n.defaultPrevented||e(n)}}function Nb({page:r,...e}){let{router:n}=qE(),s=F.useMemo(()=>PE(n.routes,r,n.basename),[n.routes,r,n.basename]);return s?F.createElement(Vb,{page:r,matches:s,...e}):null}function Mb(r){let{manifest:e,routeModules:n}=FE(),[s,o]=F.useState([]);return F.useEffect(()=>{let u=!1;return Sb(r,e,n).then(f=>{u||o(f)}),()=>{u=!0}},[r,e,n]),s}function Vb({page:r,matches:e,...n}){let s=us(),{manifest:o,routeModules:u}=FE(),{basename:f}=qE(),{loaderData:m,matches:p}=Db(),y=F.useMemo(()=>tv(r,e,p,o,s,"data"),[r,e,p,o,s]),E=F.useMemo(()=>tv(r,e,p,o,s,"assets"),[r,e,p,o,s]),w=F.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let z=new Set,Q=!1;if(e.forEach($=>{var Z;let ne=o.routes[$.route.id];!ne||!ne.hasLoader||(!y.some(me=>me.route.id===$.route.id)&&$.route.id in m&&((Z=u[$.route.id])!=null&&Z.shouldRevalidate)||ne.hasClientLoader?Q=!0:z.add($.route.id))}),z.size===0)return[];let H=Cb(r,f);return Q&&z.size>0&&H.searchParams.set("_routes",e.filter($=>z.has($.route.id)).map($=>$.route.id).join(",")),[H.pathname+H.search]},[f,m,s,o,y,e,r,u]),D=F.useMemo(()=>wb(E,o),[E,o]),k=Mb(E);return F.createElement(F.Fragment,null,w.map(z=>F.createElement("link",{key:z,rel:"prefetch",as:"fetch",href:z,...n})),D.map(z=>F.createElement("link",{key:z,rel:"modulepreload",href:z,...n})),k.map(({key:z,link:Q})=>F.createElement("link",{key:z,...Q})))}function Pb(...r){return e=>{r.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var GE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{GE&&(window.__reactRouterVersion="7.3.0")}catch{}function kb({basename:r,children:e,window:n}){let s=F.useRef();s.current==null&&(s.current=Sw({window:n,v5Compat:!0}));let o=s.current,[u,f]=F.useState({action:o.action,location:o.location}),m=F.useCallback(p=>{F.startTransition(()=>f(p))},[f]);return F.useLayoutEffect(()=>o.listen(m),[o,m]),F.createElement(hb,{basename:r,children:e,location:u.location,navigationType:u.action,navigator:o})}var KE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nn=F.forwardRef(function({onClick:e,discover:n="render",prefetch:s="none",relative:o,reloadDocument:u,replace:f,state:m,target:p,to:y,preventScrollReset:E,viewTransition:w,...D},k){let{basename:z}=F.useContext(Yn),Q=typeof y=="string"&&KE.test(y),H,$=!1;if(typeof y=="string"&&Q&&(H=y,GE))try{let S=new URL(window.location.href),I=y.startsWith("//")?new URL(S.protocol+y):new URL(y),V=tr(I.pathname,z);I.origin===S.origin&&V!=null?y=V+I.search+I.hash:$=!0}catch{Kn(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ne=Yw(y,{relative:o}),[Z,me,ue]=Ob(s,D),we=zb(y,{replace:f,state:m,target:p,preventScrollReset:E,relative:o,viewTransition:w});function M(S){e&&e(S),S.defaultPrevented||we(S)}let b=F.createElement("a",{...D,...ue,href:H||ne,onClick:$||u?e:M,ref:Pb(k,me),target:p,"data-discover":!Q&&n==="render"?"true":void 0});return Z&&!Q?F.createElement(F.Fragment,null,b,F.createElement(Nb,{page:ne})):b});nn.displayName="Link";var xb=F.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:s="",end:o=!1,style:u,to:f,viewTransition:m,children:p,...y},E){let w=tu(f,{relative:y.relative}),D=us(),k=F.useContext(_h),{navigator:z,basename:Q}=F.useContext(Yn),H=k!=null&&Fb(w)&&m===!0,$=z.encodeLocation?z.encodeLocation(w).pathname:w.pathname,ne=D.pathname,Z=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;n||(ne=ne.toLowerCase(),Z=Z?Z.toLowerCase():null,$=$.toLowerCase()),Z&&Q&&(Z=tr(Z,Q)||Z);const me=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let ue=ne===$||!o&&ne.startsWith($)&&ne.charAt(me)==="/",we=Z!=null&&(Z===$||!o&&Z.startsWith($)&&Z.charAt($.length)==="/"),M={isActive:ue,isPending:we,isTransitioning:H},b=ue?e:void 0,S;typeof s=="function"?S=s(M):S=[s,ue?"active":null,we?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let I=typeof u=="function"?u(M):u;return F.createElement(nn,{...y,"aria-current":b,className:S,ref:E,style:I,to:f,viewTransition:m},typeof p=="function"?p(M):p)});xb.displayName="NavLink";var Lb=F.forwardRef(({discover:r="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:o,state:u,method:f=zc,action:m,onSubmit:p,relative:y,preventScrollReset:E,viewTransition:w,...D},k)=>{let z=Hb(),Q=qb(m,{relative:y}),H=f.toLowerCase()==="get"?"get":"post",$=typeof m=="string"&&KE.test(m),ne=Z=>{if(p&&p(Z),Z.defaultPrevented)return;Z.preventDefault();let me=Z.nativeEvent.submitter,ue=(me==null?void 0:me.getAttribute("formmethod"))||f;z(me||Z.currentTarget,{fetcherKey:e,method:ue,navigate:n,replace:o,state:u,relative:y,preventScrollReset:E,viewTransition:w})};return F.createElement("form",{ref:k,method:H,action:Q,onSubmit:s?p:ne,...D,"data-discover":!$&&r==="render"?"true":void 0})});Lb.displayName="Form";function Ub(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $E(r){let e=F.useContext(fo);return Ze(e,Ub(r)),e}function zb(r,{target:e,replace:n,state:s,preventScrollReset:o,relative:u,viewTransition:f}={}){let m=vh(),p=us(),y=tu(r,{relative:u});return F.useCallback(E=>{if(yb(E,e)){E.preventDefault();let w=n!==void 0?n:jl(p)===jl(y);m(r,{replace:w,state:s,preventScrollReset:o,relative:u,viewTransition:f})}},[p,m,y,n,s,e,r,o,u,f])}var Bb=0,jb=()=>`__${String(++Bb)}__`;function Hb(){let{router:r}=$E("useSubmit"),{basename:e}=F.useContext(Yn),n=ab();return F.useCallback(async(s,o={})=>{let{action:u,method:f,encType:m,formData:p,body:y}=Eb(s,e);if(o.navigate===!1){let E=o.fetcherKey||jb();await r.fetch(E,n,o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||f,formEncType:o.encType||m,flushSync:o.flushSync})}else await r.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||f,formEncType:o.encType||m,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,n])}function qb(r,{relative:e}={}){let{basename:n}=F.useContext(Yn),s=F.useContext(Ti);Ze(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={...tu(r||".",{relative:e})},f=us();if(r==null){u.search=f.search;let m=new URLSearchParams(u.search),p=m.getAll("index");if(p.some(E=>E==="")){m.delete("index"),p.filter(w=>w).forEach(w=>m.append("index",w));let E=m.toString();u.search=E?`?${E}`:""}}return(!r||r===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:Zi([n,u.pathname])),jl(u)}function Fb(r,e={}){let n=F.useContext(UE);Ze(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=$E("useViewTransitionState"),o=tu(r,{relative:e.relative});if(!n.isTransitioning)return!1;let u=tr(n.currentLocation.pathname,s)||n.currentLocation.pathname,f=tr(n.nextLocation.pathname,s)||n.nextLocation.pathname;return Xc(o.pathname,f)!=null||Xc(o.pathname,u)!=null}new TextEncoder;const Gb=()=>{};var nv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},Kb=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],m=r[n++],p=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],f=r[n++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return e.join("")},YE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,m=f?r[o+1]:0,p=o+2<r.length,y=p?r[o+2]:0,E=u>>2,w=(u&3)<<4|m>>4;let D=(m&15)<<2|y>>6,k=y&63;p||(k=64,f||(D=64)),s.push(n[E],n[w],n[D],n[k])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(QE(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Kb(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const w=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||y==null||w==null)throw new $b;const D=u<<2|m>>4;if(s.push(D),y!==64){const k=m<<4&240|y>>2;if(s.push(k),w!==64){const z=y<<6&192|w;s.push(z)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class $b extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qb=function(r){const e=QE(r);return YE.encodeByteArray(e,!0)},Wc=function(r){return Qb(r).replace(/\./g,"")},XE=function(r){try{return YE.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=()=>Yb().__FIREBASE_DEFAULTS__,Wb=()=>{if(typeof process>"u"||typeof nv>"u")return;const r=nv.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Zb=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&XE(r[1]);return e&&JSON.parse(e)},Th=()=>{try{return Gb()||Xb()||Wb()||Zb()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},WE=r=>{var e,n;return(n=(e=Th())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},Jb=r=>{const e=WE(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ZE=()=>{var r;return(r=Th())===null||r===void 0?void 0:r.config},JE=r=>{var e;return(e=Th())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tR(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Wc(JSON.stringify(n)),Wc(JSON.stringify(f)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Yt())}function iR(){var r;const e=(r=Th())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function eT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function sR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function aR(){const r=Yt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function oR(){return!iR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function tT(){try{return typeof indexedDB=="object"}catch{return!1}}function nT(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}function lR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR="FirebaseError";class Xn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=uR,Object.setPrototypeOf(this,Xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zs.prototype.create)}}class Zs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,u=this.errors[e],f=u?cR(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new Xn(o,m,s)}}function cR(r,e){return r.replace(hR,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const hR=/\{\$([^}]+)}/g;function fR(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ns(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=e[o];if(iv(u)&&iv(f)){if(!ns(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function iv(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ol(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Nl(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}function dR(r,e){const n=new mR(r,e);return n.subscribe.bind(n)}class mR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");pR(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=$d),o.error===void 0&&(o.error=$d),o.complete===void 0&&(o.complete=$d);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pR(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function $d(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=1e3,yR=2,_R=4*60*60*1e3,vR=.5;function rv(r,e=gR,n=yR){const s=e*Math.pow(n,r),o=Math.round(vR*s*(Math.random()-.5)*2);return Math.min(_R,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(r){return r&&r._delegate?r._delegate:r}class $n{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new eR;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(AR(e))try{this.getOrInitializeService({instanceIdentifier:qs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=qs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qs){return this.instances.has(e)}getOptions(e=qs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(e,n){var s;const o=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const f=this.instances.get(o);return f&&e(f,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:TR(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qs){return this.component?this.component.multipleInstances?e:qs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TR(r){return r===qs?void 0:r}function AR(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ER(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ne||(Ne={}));const wR={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},bR=Ne.INFO,RR={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},IR=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=RR[e];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ah{constructor(e){this.name=e,this._logLevel=bR,this._logHandler=IR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const CR=(r,e)=>e.some(n=>r instanceof n);let sv,av;function DR(){return sv||(sv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OR(){return av||(av=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iT=new WeakMap,um=new WeakMap,rT=new WeakMap,Qd=new WeakMap,jm=new WeakMap;function NR(r){const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(Zr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&iT.set(n,r)}).catch(()=>{}),jm.set(e,r),e}function MR(r){if(um.has(r))return;const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});um.set(r,e)}let cm={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return um.get(r);if(e==="objectStoreNames")return r.objectStoreNames||rT.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zr(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function VR(r){cm=r(cm)}function PR(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(Yd(this),e,...n);return rT.set(s,e.sort?e.sort():[e]),Zr(s)}:OR().includes(r)?function(...e){return r.apply(Yd(this),e),Zr(iT.get(this))}:function(...e){return Zr(r.apply(Yd(this),e))}}function kR(r){return typeof r=="function"?PR(r):(r instanceof IDBTransaction&&MR(r),CR(r,DR())?new Proxy(r,cm):r)}function Zr(r){if(r instanceof IDBRequest)return NR(r);if(Qd.has(r))return Qd.get(r);const e=kR(r);return e!==r&&(Qd.set(r,e),jm.set(e,r)),e}const Yd=r=>jm.get(r);function sT(r,e,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,e),m=Zr(f);return s&&f.addEventListener("upgradeneeded",p=>{s(Zr(f.result),p.oldVersion,p.newVersion,Zr(f.transaction),p)}),n&&f.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const xR=["get","getKey","getAll","getAllKeys","count"],LR=["put","add","delete","clear"],Xd=new Map;function ov(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Xd.get(e))return Xd.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=LR.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||xR.includes(n)))return;const u=async function(f,...m){const p=this.transaction(f,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[n](...m),o&&p.done]))[0]};return Xd.set(e,u),u}VR(r=>({...r,get:(e,n,s)=>ov(e,n)||r.get(e,n,s),has:(e,n)=>!!ov(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zR(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function zR(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hm="@firebase/app",lv="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=new Ah("@firebase/app"),BR="@firebase/app-compat",jR="@firebase/analytics-compat",HR="@firebase/analytics",qR="@firebase/app-check-compat",FR="@firebase/app-check",GR="@firebase/auth",KR="@firebase/auth-compat",$R="@firebase/database",QR="@firebase/data-connect",YR="@firebase/database-compat",XR="@firebase/functions",WR="@firebase/functions-compat",ZR="@firebase/installations",JR="@firebase/installations-compat",eI="@firebase/messaging",tI="@firebase/messaging-compat",nI="@firebase/performance",iI="@firebase/performance-compat",rI="@firebase/remote-config",sI="@firebase/remote-config-compat",aI="@firebase/storage",oI="@firebase/storage-compat",lI="@firebase/firestore",uI="@firebase/vertexai",cI="@firebase/firestore-compat",hI="firebase",fI="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm="[DEFAULT]",dI={[hm]:"fire-core",[BR]:"fire-core-compat",[HR]:"fire-analytics",[jR]:"fire-analytics-compat",[FR]:"fire-app-check",[qR]:"fire-app-check-compat",[GR]:"fire-auth",[KR]:"fire-auth-compat",[$R]:"fire-rtdb",[QR]:"fire-data-connect",[YR]:"fire-rtdb-compat",[XR]:"fire-fn",[WR]:"fire-fn-compat",[ZR]:"fire-iid",[JR]:"fire-iid-compat",[eI]:"fire-fcm",[tI]:"fire-fcm-compat",[nI]:"fire-perf",[iI]:"fire-perf-compat",[rI]:"fire-rc",[sI]:"fire-rc-compat",[aI]:"fire-gcs",[oI]:"fire-gcs-compat",[lI]:"fire-fst",[cI]:"fire-fst-compat",[uI]:"fire-vertex","fire-js":"fire-js",[hI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc=new Map,mI=new Map,dm=new Map;function uv(r,e){try{r.container.addComponent(e)}catch(n){nr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function _i(r){const e=r.name;if(dm.has(e))return nr.debug(`There were multiple attempts to register component ${e}.`),!1;dm.set(e,r);for(const n of Zc.values())uv(n,r);for(const n of mI.values())uv(n,r);return!0}function Js(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function kn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jr=new Zs("app","Firebase",pI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=fI;function aT(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:fm,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw Jr.create("bad-app-name",{appName:String(o)});if(n||(n=ZE()),!n)throw Jr.create("no-options");const u=Zc.get(o);if(u){if(ns(n,u.options)&&ns(s,u.config))return u;throw Jr.create("duplicate-app",{appName:o})}const f=new SR(o);for(const p of dm.values())f.addComponent(p);const m=new gI(n,s,f);return Zc.set(o,m),m}function Hm(r=fm){const e=Zc.get(r);if(!e&&r===fm&&ZE())return aT();if(!e)throw Jr.create("no-app",{appName:r});return e}function Ln(r,e,n){var s;let o=(s=dI[r])!==null&&s!==void 0?s:r;n&&(o+=`-${n}`);const u=o.match(/\s|\//),f=e.match(/\s|\//);if(u||f){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&f&&m.push("and"),f&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nr.warn(m.join(" "));return}_i(new $n(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI="firebase-heartbeat-database",_I=1,Hl="firebase-heartbeat-store";let Wd=null;function oT(){return Wd||(Wd=sT(yI,_I,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Hl)}catch(n){console.warn(n)}}}}).catch(r=>{throw Jr.create("idb-open",{originalErrorMessage:r.message})})),Wd}async function vI(r){try{const n=(await oT()).transaction(Hl),s=await n.objectStore(Hl).get(lT(r));return await n.done,s}catch(e){if(e instanceof Xn)nr.warn(e.message);else{const n=Jr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});nr.warn(n.message)}}}async function cv(r,e){try{const s=(await oT()).transaction(Hl,"readwrite");await s.objectStore(Hl).put(e,lT(r)),await s.done}catch(n){if(n instanceof Xn)nr.warn(n.message);else{const s=Jr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});nr.warn(s.message)}}}function lT(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=1024,TI=30;class AI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=hv();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>TI){const f=bI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){nr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=hv(),{heartbeatsToSend:s,unsentEntries:o}=SI(this._heartbeatsCache.heartbeats),u=Wc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return nr.warn(n),""}}}function hv(){return new Date().toISOString().substring(0,10)}function SI(r,e=EI){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),fv(n)>e){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),fv(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class wI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tT()?nT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return cv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return cv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function fv(r){return Wc(JSON.stringify({version:2,heartbeats:r})).length}function bI(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(r){_i(new $n("platform-logger",e=>new UR(e),"PRIVATE")),_i(new $n("heartbeat",e=>new AI(e),"PRIVATE")),Ln(hm,lv,r),Ln(hm,lv,"esm2017"),Ln("fire-js","")}RI("");var II="firebase",CI="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ln(II,CI,"app");function qm(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(n[s[o]]=r[s[o]]);return n}function uT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const DI=uT,cT=new Zs("auth","Firebase",uT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc=new Ah("@firebase/auth");function OI(r,...e){Jc.logLevel<=Ne.WARN&&Jc.warn(`Auth (${po}): ${r}`,...e)}function jc(r,...e){Jc.logLevel<=Ne.ERROR&&Jc.error(`Auth (${po}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(r,...e){throw Fm(r,...e)}function mi(r,...e){return Fm(r,...e)}function hT(r,e,n){const s=Object.assign(Object.assign({},DI()),{[e]:n});return new Zs("auth","Firebase",s).create(e,{appName:r.name})}function Ji(r){return hT(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fm(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return cT.create(r,...e)}function _e(r,e,...n){if(!r)throw Fm(e,...n)}function Yi(r){const e="INTERNAL ASSERTION FAILED: "+r;throw jc(e),new Error(e)}function ir(r,e){r||Yi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function NI(){return dv()==="http:"||dv()==="https:"}function dv(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(NI()||eT()||"connection"in navigator)?navigator.onLine:!0}function VI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n){this.shortDelay=e,this.longDelay=n,ir(n>e,"Short delay should be less than long delay!"),this.isMobile=nR()||sR()}get(){return MI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(r,e){ir(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=new iu(3e4,6e4);function ar(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function or(r,e,n,s,o={}){return dT(r,o,async()=>{let u={},f={};s&&(e==="GET"?f=s:u={body:JSON.stringify(s)});const m=nu(Object.assign({key:r.config.apiKey},f)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:e,headers:p},u);return rR()||(y.referrerPolicy="no-referrer"),fT.fetch()(mT(r,r.config.apiHost,n,m),y)})}async function dT(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},PI),e);try{const o=new LI(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw Vc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[p,y]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vc(r,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw Vc(r,"email-already-in-use",f);if(p==="USER_DISABLED")throw Vc(r,"user-disabled",f);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw hT(r,E,y);Qn(r,E)}}catch(o){if(o instanceof Xn)throw o;Qn(r,"network-request-failed",{message:String(o)})}}async function ru(r,e,n,s,o={}){const u=await or(r,e,n,s,o);return"mfaPendingCredential"in u&&Qn(r,"multi-factor-auth-required",{_serverResponse:u}),u}function mT(r,e,n,s){const o=`${e}${n}?${s}`;return r.config.emulator?Gm(r.config,o):`${r.config.apiScheme}://${o}`}function xI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class LI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(mi(this.auth,"network-request-failed")),kI.get())})}}function Vc(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=mi(r,e,s);return o.customData._tokenResponse=n,o}function mv(r){return r!==void 0&&r.enterprise!==void 0}class UI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return xI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function zI(r,e){return or(r,"GET","/v2/recaptchaConfig",ar(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BI(r,e){return or(r,"POST","/v1/accounts:delete",e)}async function pT(r,e){return or(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jI(r,e=!1){const n=rn(r),s=await n.getIdToken(e),o=Km(s);_e(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:kl(Zd(o.auth_time)),issuedAtTime:kl(Zd(o.iat)),expirationTime:kl(Zd(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Zd(r){return Number(r)*1e3}function Km(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return jc("JWT malformed, contained fewer than 3 sections"),null;try{const o=XE(n);return o?JSON.parse(o):(jc("Failed to decode base64 JWT payload"),null)}catch(o){return jc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function pv(r){const e=Km(r);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ql(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Xn&&HI(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function HI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=kl(this.lastLoginAt),this.creationTime=kl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eh(r){var e;const n=r.auth,s=await r.getIdToken(),o=await ql(r,pT(n,{idToken:s}));_e(o==null?void 0:o.users.length,n,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const f=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?gT(u.providerUserInfo):[],m=GI(r.providerData,f),p=r.isAnonymous,y=!(r.email&&u.passwordHash)&&!(m!=null&&m.length),E=p?y:!1,w={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new pm(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(r,w)}async function FI(r){const e=rn(r);await eh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function GI(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function gT(r){return r.map(e=>{var{providerId:n}=e,s=qm(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KI(r,e){const n=await dT(r,{},async()=>{const s=nu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=mT(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",fT.fetch()(f,{method:"POST",headers:m,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function $I(r,e){return or(r,"POST","/v2/accounts:revokeToken",ar(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const n=pv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await KI(e,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new Ja;return s&&(_e(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),o&&(_e(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),u&&(_e(typeof u=="number","internal-error",{appName:e}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ja,this.toJSON())}_performRefresh(){return Yi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(r,e){_e(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Xi{constructor(e){var{uid:n,auth:s,stsTokenManager:o}=e,u=qm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new pm(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await ql(this,this.stsTokenManager.getToken(this.auth,e));return _e(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jI(this,e)}reload(){return FI(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await eh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kn(this.auth.app))return Promise.reject(Ji(this.auth));const e=await this.getIdToken();return await ql(this,BI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,o,u,f,m,p,y,E;const w=(s=n.displayName)!==null&&s!==void 0?s:void 0,D=(o=n.email)!==null&&o!==void 0?o:void 0,k=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,z=(f=n.photoURL)!==null&&f!==void 0?f:void 0,Q=(m=n.tenantId)!==null&&m!==void 0?m:void 0,H=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,$=(y=n.createdAt)!==null&&y!==void 0?y:void 0,ne=(E=n.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:Z,emailVerified:me,isAnonymous:ue,providerData:we,stsTokenManager:M}=n;_e(Z&&M,e,"internal-error");const b=Ja.fromJSON(this.name,M);_e(typeof Z=="string",e,"internal-error"),Gr(w,e.name),Gr(D,e.name),_e(typeof me=="boolean",e,"internal-error"),_e(typeof ue=="boolean",e,"internal-error"),Gr(k,e.name),Gr(z,e.name),Gr(Q,e.name),Gr(H,e.name),Gr($,e.name),Gr(ne,e.name);const S=new Xi({uid:Z,auth:e,email:D,emailVerified:me,displayName:w,isAnonymous:ue,photoURL:z,phoneNumber:k,tenantId:Q,stsTokenManager:b,createdAt:$,lastLoginAt:ne});return we&&Array.isArray(we)&&(S.providerData=we.map(I=>Object.assign({},I))),H&&(S._redirectEventId=H),S}static async _fromIdTokenResponse(e,n,s=!1){const o=new Ja;o.updateFromServerResponse(n);const u=new Xi({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await eh(u),u}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];_e(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?gT(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new Ja;m.updateFromIdToken(s);const p=new Xi({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new pm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=new Map;function Wi(r){ir(r instanceof Function,"Expected a class definition");let e=gv.get(r);return e?(ir(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,gv.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yT.type="NONE";const yv=yT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(r,e,n){return`firebase:${r}:${e}:${n}`}class eo{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Hc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Hc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new eo(Wi(yv),e,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||Wi(yv);const f=Hc(s,e.config.apiKey,e.name);let m=null;for(const y of n)try{const E=await y._get(f);if(E){const w=Xi._fromJSON(e,E);y!==u&&(m=w),u=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new eo(u,e,s):(u=p[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(f)}catch{}})),new eo(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(TT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_T(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ST(e))return"Blackberry";if(wT(e))return"Webos";if(vT(e))return"Safari";if((e.includes("chrome/")||ET(e))&&!e.includes("edge/"))return"Chrome";if(AT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function _T(r=Yt()){return/firefox\//i.test(r)}function vT(r=Yt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ET(r=Yt()){return/crios\//i.test(r)}function TT(r=Yt()){return/iemobile/i.test(r)}function AT(r=Yt()){return/android/i.test(r)}function ST(r=Yt()){return/blackberry/i.test(r)}function wT(r=Yt()){return/webos/i.test(r)}function $m(r=Yt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function QI(r=Yt()){var e;return $m(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YI(){return aR()&&document.documentMode===10}function bT(r=Yt()){return $m(r)||AT(r)||wT(r)||ST(r)||/windows phone/i.test(r)||TT(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(r,e=[]){let n;switch(r){case"Browser":n=_v(Yt());break;case"Worker":n=`${_v(Yt())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${po}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((f,m)=>{try{const p=e(u);f(p)}catch(p){m(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WI(r,e={}){return or(r,"GET","/v2/passwordPolicy",ar(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=6;class JI{constructor(e){var n,s,o,u;const f=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:ZI,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,o,u,f,m;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(f=p.containsNumericCharacter)!==null&&f!==void 0?f:!0),p.isValid&&(p.isValid=(m=p.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vv(this),this.idTokenSubscription=new vv(this),this.beforeStateQueue=new XI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wi(n)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await eo.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await pT(this,{idToken:e}),s=await Xi._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(kn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,m=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!f||f===m)&&(p!=null&&p.user)&&(o=p.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await eh(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kn(this.app))return Promise.reject(Ji(this));const n=e?rn(e):null;return n&&_e(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kn(this.app)?Promise.reject(Ji(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kn(this.app)?Promise.reject(Ji(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WI(this),n=new JI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await $I(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wi(e)||this._popupRedirectResolver;_e(n,this,"argument-error"),this.redirectPersistenceManager=await eo.create(this,[Wi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,o);return()=>{f=!0,p()}}else{const p=e.addObserver(n);return()=>{f=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=RT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;if(kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&OI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function cs(r){return rn(r)}class vv{constructor(e){this.auth=e,this.observer=null,this.addObserver=dR(n=>this.observer=n)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tC(r){Sh=r}function IT(r){return Sh.loadJS(r)}function nC(){return Sh.recaptchaEnterpriseScript}function iC(){return Sh.gapiScript}function rC(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class sC{constructor(){this.enterprise=new aC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class aC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const oC="recaptcha-enterprise",CT="NO_RECAPTCHA";class lC{constructor(e){this.type=oC,this.auth=cs(e)}async verify(e="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{zI(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const y=new UI(p);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,f(y.siteKey)}}).catch(p=>{m(p)})})}function o(u,f,m){const p=window.grecaptcha;mv(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:e}).then(y=>{f(y)}).catch(()=>{f(CT)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new sC().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(m=>{if(!n&&mv(window.grecaptcha))o(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let p=nC();p.length!==0&&(p+=m),IT(p).then(()=>{o(m,u,f)}).catch(y=>{f(y)})}}).catch(m=>{f(m)})})}}async function Ev(r,e,n,s=!1,o=!1){const u=new lC(r);let f;if(o)f=CT;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const m=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const p=m.phoneEnrollmentInfo.phoneNumber,y=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const p=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function th(r,e,n,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await Ev(r,e,n,n==="getOobCode");return s(r,f)}else return s(r,e).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await Ev(r,e,n,n==="getOobCode");return s(r,m)}else return Promise.reject(f)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(r,e){const n=Js(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(ns(u,e??{}))return o;Qn(o,"already-initialized")}return n.initialize({options:e})}function cC(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Wi);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function hC(r,e,n){const s=cs(r);_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=DT(e),{host:f,port:m}=fC(e),p=m===null?"":`:${m}`,y={url:`${u}//${f}${p}/`},E=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){_e(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),_e(ns(y,s.config.emulator)&&ns(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,dC()}function DT(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function fC(r){const e=DT(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Tv(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:Tv(f)}}}function Tv(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function dC(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yi("not implemented")}_getIdTokenResponse(e){return Yi("not implemented")}_linkToIdToken(e,n){return Yi("not implemented")}_getReauthenticationResolver(e){return Yi("not implemented")}}async function mC(r,e){return or(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pC(r,e){return ru(r,"POST","/v1/accounts:signInWithPassword",ar(r,e))}async function gC(r,e){return or(r,"POST","/v1/accounts:sendOobCode",ar(r,e))}async function yC(r,e){return gC(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _C(r,e){return ru(r,"POST","/v1/accounts:signInWithEmailLink",ar(r,e))}async function vC(r,e){return ru(r,"POST","/v1/accounts:signInWithEmailLink",ar(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl extends Qm{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new Fl(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Fl(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return th(e,n,"signInWithPassword",pC);case"emailLink":return _C(e,{email:this._email,oobCode:this._password});default:Qn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return th(e,s,"signUpPassword",mC);case"emailLink":return vC(e,{idToken:n,email:this._email,oobCode:this._password});default:Qn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(r,e){return ru(r,"POST","/v1/accounts:signInWithIdp",ar(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC="http://localhost";class Ks extends Qm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ks(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=n,u=qm(n,["providerId","signInMethod"]);if(!s||!o)return null;const f=new Ks(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(e){const n=this.buildRequest();return to(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,to(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,to(e,n)}buildRequest(){const e={requestUri:EC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=nu(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function AC(r){const e=Ol(Nl(r)).link,n=e?Ol(Nl(e)).deep_link_id:null,s=Ol(Nl(r)).deep_link_id;return(s?Ol(Nl(s)).link:null)||s||n||e||r}class Ym{constructor(e){var n,s,o,u,f,m;const p=Ol(Nl(e)),y=(n=p.apiKey)!==null&&n!==void 0?n:null,E=(s=p.oobCode)!==null&&s!==void 0?s:null,w=TC((o=p.mode)!==null&&o!==void 0?o:null);_e(y&&E&&w,"argument-error"),this.apiKey=y,this.operation=w,this.code=E,this.continueUrl=(u=p.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(f=p.languageCode)!==null&&f!==void 0?f:null,this.tenantId=(m=p.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const n=AC(e);try{return new Ym(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this.providerId=go.PROVIDER_ID}static credential(e,n){return Fl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ym.parseLink(n);return _e(s,"argument-error"),Fl._fromEmailAndCode(e,s.code,s.tenantId)}}go.PROVIDER_ID="password";go.EMAIL_PASSWORD_SIGN_IN_METHOD="password";go.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su extends OT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends su{constructor(){super("facebook.com")}static credential(e){return Ks._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $r.credential(e.oauthAccessToken)}catch{return null}}}$r.FACEBOOK_SIGN_IN_METHOD="facebook.com";$r.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends su{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ks._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Qr.credential(n,s)}catch{return null}}}Qr.GOOGLE_SIGN_IN_METHOD="google.com";Qr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends su{constructor(){super("github.com")}static credential(e){return Ks._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yr.credential(e.oauthAccessToken)}catch{return null}}}Yr.GITHUB_SIGN_IN_METHOD="github.com";Yr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends su{constructor(){super("twitter.com")}static credential(e,n){return Ks._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Xr.credential(n,s)}catch{return null}}}Xr.TWITTER_SIGN_IN_METHOD="twitter.com";Xr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SC(r,e){return ru(r,"POST","/v1/accounts:signUp",ar(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const u=await Xi._fromIdTokenResponse(e,s,o),f=Av(s);return new $s({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=Av(s);return new $s({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function Av(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh extends Xn{constructor(e,n,s,o){var u;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,nh.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new nh(e,n,s,o)}}function NT(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?nh._fromErrorAndOperation(r,u,e,s):u})}async function wC(r,e,n=!1){const s=await ql(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return $s._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bC(r,e,n=!1){const{auth:s}=r;if(kn(s.app))return Promise.reject(Ji(s));const o="reauthenticate";try{const u=await ql(r,NT(s,o,e,r),n);_e(u.idToken,s,"internal-error");const f=Km(u.idToken);_e(f,s,"internal-error");const{sub:m}=f;return _e(r.uid===m,s,"user-mismatch"),$s._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Qn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MT(r,e,n=!1){if(kn(r.app))return Promise.reject(Ji(r));const s="signIn",o=await NT(r,s,e),u=await $s._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}async function RC(r,e){return MT(cs(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VT(r){const e=cs(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function IC(r,e,n){const s=cs(r);await th(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",yC)}async function CC(r,e,n){if(kn(r.app))return Promise.reject(Ji(r));const s=cs(r),f=await th(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",SC).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&VT(r),p}),m=await $s._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(m.user),m}function DC(r,e,n){return kn(r.app)?Promise.reject(Ji(r)):RC(rn(r),go.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&VT(r),s})}function OC(r,e,n,s){return rn(r).onIdTokenChanged(e,n,s)}function NC(r,e,n){return rn(r).beforeAuthStateChanged(e,n)}function MC(r,e,n,s){return rn(r).onAuthStateChanged(e,n,s)}function PT(r){return rn(r).signOut()}const ih="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ih,"1"),this.storage.removeItem(ih),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC=1e3,PC=10;class xT extends kT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((f,m,p)=>{this.notifyListeners(f,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);YI()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,PC):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},VC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xT.type="LOCAL";const kC=xT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT extends kT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}LT.type="SESSION";const UT=LT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xC(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new wh(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async y=>y(n.origin,u)),p=await xC(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,p)=>{const y=Xm("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(w){const D=w;if(D.data.eventId===y)switch(D.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(D.data.response);break;default:clearTimeout(E),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(){return window}function UC(r){pi().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(){return typeof pi().WorkerGlobalScope<"u"&&typeof pi().importScripts=="function"}async function zC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function BC(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function jC(){return zT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT="firebaseLocalStorageDb",HC=1,rh="firebaseLocalStorage",jT="fbase_key";class au{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bh(r,e){return r.transaction([rh],e?"readwrite":"readonly").objectStore(rh)}function qC(){const r=indexedDB.deleteDatabase(BT);return new au(r).toPromise()}function gm(){const r=indexedDB.open(BT,HC);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(rh,{keyPath:jT})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(rh)?e(s):(s.close(),await qC(),e(await gm()))})})}async function Sv(r,e,n){const s=bh(r,!0).put({[jT]:e,value:n});return new au(s).toPromise()}async function FC(r,e){const n=bh(r,!1).get(e),s=await new au(n).toPromise();return s===void 0?null:s.value}function wv(r,e){const n=bh(r,!0).delete(e);return new au(n).toPromise()}const GC=800,KC=3;class HT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>KC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wh._getInstance(jC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zC(),!this.activeServiceWorker)return;this.sender=new LC(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||BC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gm();return await Sv(e,ih,"1"),await wv(e,ih),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Sv(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>FC(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=bh(o,!1).getAll();return new au(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}HT.type="LOCAL";const $C=HT;new iu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(r,e){return e?Wi(e):(_e(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm extends Qm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return to(e,this._buildIdpRequest())}_linkToIdToken(e,n){return to(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return to(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function YC(r){return MT(r.auth,new Wm(r),r.bypassAuthState)}function XC(r){const{auth:e,user:n}=r;return _e(n,e,"internal-error"),bC(n,new Wm(r),r.bypassAuthState)}async function WC(r){const{auth:e,user:n}=r;return _e(n,e,"internal-error"),wC(n,new Wm(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e,n,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=e;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YC;case"linkViaPopup":case"linkViaRedirect":return WC;case"reauthViaPopup":case"reauthViaRedirect":return XC;default:Qn(this.auth,"internal-error")}}resolve(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC=new iu(2e3,1e4);class Za extends qT{constructor(e,n,s,o,u){super(e,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Za.currentPopupAction&&Za.currentPopupAction.cancel(),Za.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){ir(this.filter.length===1,"Popup operations only handle one event");const e=Xm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Za.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ZC.get())};e()}}Za.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC="pendingRedirect",qc=new Map;class e1 extends qT{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=qc.get(this.auth._key());if(!e){try{const s=await t1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}qc.set(this.auth._key(),e)}return this.bypassAuthState||qc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function t1(r,e){const n=r1(e),s=i1(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function n1(r,e){qc.set(r._key(),e)}function i1(r){return Wi(r._redirectPersistence)}function r1(r){return Hc(JC,r.config.apiKey,r.name)}async function s1(r,e,n=!1){if(kn(r.app))return Promise.reject(Ji(r));const s=cs(r),o=QC(s,e),f=await new e1(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1=10*60*1e3;class o1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!l1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!FT(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(mi(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=a1&&this.cachedEventUids.clear(),this.cachedEventUids.has(bv(e))}saveEventToCache(e){this.cachedEventUids.add(bv(e)),this.lastProcessedEventTime=Date.now()}}function bv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function FT({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function l1(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return FT(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u1(r,e={}){return or(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,h1=/^https?/;async function f1(r){if(r.config.emulator)return;const{authorizedDomains:e}=await u1(r);for(const n of e)try{if(d1(n))return}catch{}Qn(r,"unauthorized-domain")}function d1(r){const e=mm(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!h1.test(n))return!1;if(c1.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1=new iu(3e4,6e4);function Rv(){const r=pi().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function p1(r){return new Promise((e,n)=>{var s,o,u;function f(){Rv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rv(),n(mi(r,"network-request-failed"))},timeout:m1.get()})}if(!((o=(s=pi().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=pi().gapi)===null||u===void 0)&&u.load)f();else{const m=rC("iframefcb");return pi()[m]=()=>{gapi.load?f():n(mi(r,"network-request-failed"))},IT(`${iC()}?onload=${m}`).catch(p=>n(p))}}).catch(e=>{throw Fc=null,e})}let Fc=null;function g1(r){return Fc=Fc||p1(r),Fc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1=new iu(5e3,15e3),_1="__/auth/iframe",v1="emulator/auth/iframe",E1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},T1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function A1(r){const e=r.config;_e(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?Gm(e,v1):`https://${r.config.authDomain}/${_1}`,s={apiKey:e.apiKey,appName:r.name,v:po},o=T1.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${nu(s).slice(1)}`}async function S1(r){const e=await g1(r),n=pi().gapi;return _e(n,r,"internal-error"),e.open({where:document.body,url:A1(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:E1,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=mi(r,"network-request-failed"),m=pi().setTimeout(()=>{u(f)},y1.get());function p(){pi().clearTimeout(m),o(s)}s.ping(p).then(p,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},b1=500,R1=600,I1="_blank",C1="http://localhost";class Iv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function D1(r,e,n,s=b1,o=R1){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const p=Object.assign(Object.assign({},w1),{width:s.toString(),height:o.toString(),top:u,left:f}),y=Yt().toLowerCase();n&&(m=ET(y)?I1:n),_T(y)&&(e=e||C1,p.scrollbars="yes");const E=Object.entries(p).reduce((D,[k,z])=>`${D}${k}=${z},`,"");if(QI(y)&&m!=="_self")return O1(e||"",m),new Iv(null);const w=window.open(e||"",m,E);_e(w,r,"popup-blocked");try{w.focus()}catch{}return new Iv(w)}function O1(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1="__/auth/handler",M1="emulator/auth/handler",V1=encodeURIComponent("fac");async function Cv(r,e,n,s,o,u){_e(r.config.authDomain,r,"auth-domain-config-required"),_e(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:po,eventId:o};if(e instanceof OT){e.setDefaultLanguage(r.languageCode),f.providerId=e.providerId||"",fR(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,w]of Object.entries({}))f[E]=w}if(e instanceof su){const E=e.getScopes().filter(w=>w!=="");E.length>0&&(f.scopes=E.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const p=await r._getAppCheckToken(),y=p?`#${V1}=${encodeURIComponent(p)}`:"";return`${P1(r)}?${nu(m).slice(1)}${y}`}function P1({config:r}){return r.emulator?Gm(r,M1):`https://${r.authDomain}/${N1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="webStorageSupport";class k1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=UT,this._completeRedirectFn=s1,this._overrideRedirectResult=n1}async _openPopup(e,n,s,o){var u;ir((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const f=await Cv(e,n,s,mm(),o);return D1(e,f,Xm())}async _openRedirect(e,n,s,o){await this._originValidation(e);const u=await Cv(e,n,s,mm(),o);return UC(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(ir(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await S1(e),s=new o1(e);return n.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jd,{type:Jd},o=>{var u;const f=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Jd];f!==void 0&&n(!!f),Qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=f1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bT()||vT()||$m()}}const x1=k1;var Dv="@firebase/auth",Ov="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U1(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function z1(r){_i(new $n("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;_e(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:RT(r)},y=new eC(s,o,u,p);return cC(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),_i(new $n("auth-internal",e=>{const n=cs(e.getProvider("auth").getImmediate());return(s=>new L1(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ln(Dv,Ov,U1(r)),Ln(Dv,Ov,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1=5*60,j1=JE("authIdTokenMaxAge")||B1;let Nv=null;const H1=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>j1)return;const o=n==null?void 0:n.token;Nv!==o&&(Nv=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function q1(r=Hm()){const e=Js(r,"auth");if(e.isInitialized())return e.getImmediate();const n=uC(r,{popupRedirectResolver:x1,persistence:[$C,kC,UT]}),s=JE("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=H1(u.toString());NC(n,f,()=>f(n.currentUser)),OC(n,m=>f(m))}}const o=WE("auth");return o&&hC(n,`http://${o}`),n}function F1(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}tC({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=mi("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",F1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});z1("Browser");const GT="@firebase/installations",Zm="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT=1e4,$T=`w:${Zm}`,QT="FIS_v2",G1="https://firebaseinstallations.googleapis.com/v1",K1=60*60*1e3,$1="installations",Q1="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Qs=new Zs($1,Q1,Y1);function YT(r){return r instanceof Xn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT({projectId:r}){return`${G1}/projects/${r}/installations`}function WT(r){return{token:r.token,requestStatus:2,expiresIn:W1(r.expiresIn),creationTime:Date.now()}}async function ZT(r,e){const s=(await e.json()).error;return Qs.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function JT({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function X1(r,{refreshToken:e}){const n=JT(r);return n.append("Authorization",Z1(e)),n}async function e0(r){const e=await r();return e.status>=500&&e.status<600?r():e}function W1(r){return Number(r.replace("s","000"))}function Z1(r){return`${QT} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J1({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=XT(r),o=JT(r),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:n,authVersion:QT,appId:r.appId,sdkVersion:$T},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await e0(()=>fetch(s,m));if(p.ok){const y=await p.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:WT(y.authToken)}}else throw await ZT("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eD(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tD=/^[cdef][\w-]{21}$/,ym="";function nD(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=iD(r);return tD.test(n)?n:ym}catch{return ym}}function iD(r){return eD(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0=new Map;function i0(r,e){const n=Rh(r);r0(n,e),rD(n,e)}function r0(r,e){const n=n0.get(r);if(n)for(const s of n)s(e)}function rD(r,e){const n=sD();n&&n.postMessage({key:r,fid:e}),aD()}let Fs=null;function sD(){return!Fs&&"BroadcastChannel"in self&&(Fs=new BroadcastChannel("[Firebase] FID Change"),Fs.onmessage=r=>{r0(r.data.key,r.data.fid)}),Fs}function aD(){n0.size===0&&Fs&&(Fs.close(),Fs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oD="firebase-installations-database",lD=1,Ys="firebase-installations-store";let em=null;function Jm(){return em||(em=sT(oD,lD,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(Ys)}}})),em}async function sh(r,e){const n=Rh(r),o=(await Jm()).transaction(Ys,"readwrite"),u=o.objectStore(Ys),f=await u.get(n);return await u.put(e,n),await o.done,(!f||f.fid!==e.fid)&&i0(r,e.fid),e}async function s0(r){const e=Rh(r),s=(await Jm()).transaction(Ys,"readwrite");await s.objectStore(Ys).delete(e),await s.done}async function Ih(r,e){const n=Rh(r),o=(await Jm()).transaction(Ys,"readwrite"),u=o.objectStore(Ys),f=await u.get(n),m=e(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&i0(r,m.fid),m}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ep(r){let e;const n=await Ih(r.appConfig,s=>{const o=uD(s),u=cD(r,o);return e=u.registrationPromise,u.installationEntry});return n.fid===ym?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function uD(r){const e=r||{fid:nD(),registrationStatus:0};return a0(e)}function cD(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Qs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=hD(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:fD(r)}:{installationEntry:e}}async function hD(r,e){try{const n=await J1(r,e);return sh(r.appConfig,n)}catch(n){throw YT(n)&&n.customData.serverCode===409?await s0(r.appConfig):await sh(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function fD(r){let e=await Mv(r.appConfig);for(;e.registrationStatus===1;)await t0(100),e=await Mv(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await ep(r);return s||n}return e}function Mv(r){return Ih(r,e=>{if(!e)throw Qs.create("installation-not-found");return a0(e)})}function a0(r){return dD(r)?{fid:r.fid,registrationStatus:0}:r}function dD(r){return r.registrationStatus===1&&r.registrationTime+KT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mD({appConfig:r,heartbeatServiceProvider:e},n){const s=pD(r,n),o=X1(r,n),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:$T,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await e0(()=>fetch(s,m));if(p.ok){const y=await p.json();return WT(y)}else throw await ZT("Generate Auth Token",p)}function pD(r,{fid:e}){return`${XT(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tp(r,e=!1){let n;const s=await Ih(r.appConfig,u=>{if(!o0(u))throw Qs.create("not-registered");const f=u.authToken;if(!e&&_D(f))return u;if(f.requestStatus===1)return n=gD(r,e),u;{if(!navigator.onLine)throw Qs.create("app-offline");const m=ED(u);return n=yD(r,m),m}});return n?await n:s.authToken}async function gD(r,e){let n=await Vv(r.appConfig);for(;n.authToken.requestStatus===1;)await t0(100),n=await Vv(r.appConfig);const s=n.authToken;return s.requestStatus===0?tp(r,e):s}function Vv(r){return Ih(r,e=>{if(!o0(e))throw Qs.create("not-registered");const n=e.authToken;return TD(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function yD(r,e){try{const n=await mD(r,e),s=Object.assign(Object.assign({},e),{authToken:n});return await sh(r.appConfig,s),n}catch(n){if(YT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await s0(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await sh(r.appConfig,s)}throw n}}function o0(r){return r!==void 0&&r.registrationStatus===2}function _D(r){return r.requestStatus===2&&!vD(r)}function vD(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+K1}function ED(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function TD(r){return r.requestStatus===1&&r.requestTime+KT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AD(r){const e=r,{installationEntry:n,registrationPromise:s}=await ep(e);return s?s.catch(console.error):tp(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SD(r,e=!1){const n=r;return await wD(n),(await tp(n,e)).token}async function wD(r){const{registrationPromise:e}=await ep(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bD(r){if(!r||!r.options)throw tm("App Configuration");if(!r.name)throw tm("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!r.options[n])throw tm(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function tm(r){return Qs.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0="installations",RD="installations-internal",ID=r=>{const e=r.getProvider("app").getImmediate(),n=bD(e),s=Js(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},CD=r=>{const e=r.getProvider("app").getImmediate(),n=Js(e,l0).getImmediate();return{getId:()=>AD(n),getToken:o=>SD(n,o)}};function DD(){_i(new $n(l0,ID,"PUBLIC")),_i(new $n(RD,CD,"PRIVATE"))}DD();Ln(GT,Zm);Ln(GT,Zm,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="analytics",OD="firebase_id",ND="origin",MD=60*1e3,VD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",np="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new Ah("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},yn=new Zs("analytics","Analytics",PD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kD(r){if(!r.startsWith(np)){const e=yn.create("invalid-gtag-resource",{gtagURL:r});return un.warn(e.message),""}return r}function u0(r){return Promise.all(r.map(e=>e.catch(n=>n)))}function xD(r,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,e)),n}function LD(r,e){const n=xD("firebase-js-sdk-policy",{createScriptURL:kD}),s=document.createElement("script"),o=`${np}?l=${r}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function UD(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function zD(r,e,n,s,o,u){const f=s[o];try{if(f)await e[f];else{const p=(await u0(n)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(m){un.error(m)}r("config",o,u)}async function BD(r,e,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const m=await u0(n);for(const p of f){const y=m.find(w=>w.measurementId===p),E=y&&e[y.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",s,o||{})}catch(u){un.error(u)}}function jD(r,e,n,s){async function o(u,...f){try{if(u==="event"){const[m,p]=f;await BD(r,e,n,m,p)}else if(u==="config"){const[m,p]=f;await zD(r,e,n,s,m,p)}else if(u==="consent"){const[m,p]=f;r("consent",m,p)}else if(u==="get"){const[m,p,y]=f;r("get",m,p,y)}else if(u==="set"){const[m]=f;r("set",m)}else r(u,...f)}catch(m){un.error(m)}}return o}function HD(r,e,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=jD(u,r,e,n),{gtagCore:u,wrappedGtag:window[o]}}function qD(r){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(np)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD=30,GD=1e3;class KD{constructor(e={},n=GD){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const c0=new KD;function $D(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function QD(r){var e;const{appId:n,apiKey:s}=r,o={method:"GET",headers:$D(s)},u=VD.replace("{app-id}",n),f=await fetch(u,o);if(f.status!==200&&f.status!==304){let m="";try{const p=await f.json();!((e=p.error)===null||e===void 0)&&e.message&&(m=p.error.message)}catch{}throw yn.create("config-fetch-failed",{httpStatus:f.status,responseMessage:m})}return f.json()}async function YD(r,e=c0,n){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw yn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw yn.create("no-api-key")}const f=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new ZD;return setTimeout(async()=>{m.abort()},MD),h0({appId:s,apiKey:o,measurementId:u},f,m,e)}async function h0(r,{throttleEndTimeMillis:e,backoffCount:n},s,o=c0){var u;const{appId:f,measurementId:m}=r;try{await XD(s,e)}catch(p){if(m)return un.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:f,measurementId:m};throw p}try{const p=await QD(r);return o.deleteThrottleMetadata(f),p}catch(p){const y=p;if(!WD(y)){if(o.deleteThrottleMetadata(f),m)return un.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:f,measurementId:m};throw p}const E=Number((u=y==null?void 0:y.customData)===null||u===void 0?void 0:u.httpStatus)===503?rv(n,o.intervalMillis,FD):rv(n,o.intervalMillis),w={throttleEndTimeMillis:Date.now()+E,backoffCount:n+1};return o.setThrottleMetadata(f,w),un.debug(`Calling attemptFetch again in ${E} millis`),h0(r,w,s,o)}}function XD(r,e){return new Promise((n,s)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(u),s(yn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function WD(r){if(!(r instanceof Xn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class ZD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function JD(r,e,n,s,o){if(o&&o.global){r("event",n,s);return}else{const u=await e,f=Object.assign(Object.assign({},s),{send_to:u});r("event",n,f)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eO(){if(tT())try{await nT()}catch(r){return un.warn(yn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return un.warn(yn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function tO(r,e,n,s,o,u,f){var m;const p=YD(r);p.then(k=>{n[k.measurementId]=k.appId,r.options.measurementId&&k.measurementId!==r.options.measurementId&&un.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${k.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(k=>un.error(k)),e.push(p);const y=eO().then(k=>{if(k)return s.getId()}),[E,w]=await Promise.all([p,y]);qD(u)||LD(u,E.measurementId),o("js",new Date);const D=(m=f==null?void 0:f.config)!==null&&m!==void 0?m:{};return D[ND]="firebase",D.update=!0,w!=null&&(D[OD]=w),o("config",E.measurementId,D),E.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e){this.app=e}_delete(){return delete xl[this.app.options.appId],Promise.resolve()}}let xl={},Pv=[];const kv={};let nm="dataLayer",iO="gtag",xv,f0,Lv=!1;function rO(){const r=[];if(eT()&&r.push("This is a browser extension environment."),lR()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=yn.create("invalid-analytics-context",{errorInfo:e});un.warn(n.message)}}function sO(r,e,n){rO();const s=r.options.appId;if(!s)throw yn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)un.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw yn.create("no-api-key");if(xl[s]!=null)throw yn.create("already-exists",{id:s});if(!Lv){UD(nm);const{wrappedGtag:u,gtagCore:f}=HD(xl,Pv,kv,nm,iO);f0=u,xv=f,Lv=!0}return xl[s]=tO(r,Pv,kv,e,xv,nm,n),new nO(r)}function aO(r=Hm()){r=rn(r);const e=Js(r,ah);return e.isInitialized()?e.getImmediate():oO(r)}function oO(r,e={}){const n=Js(r,ah);if(n.isInitialized()){const o=n.getImmediate();if(ns(e,n.getOptions()))return o;throw yn.create("already-initialized")}return n.initialize({options:e})}function lO(r,e,n,s){r=rn(r),JD(f0,xl[r.app.options.appId],e,n,s).catch(o=>un.error(o))}const Uv="@firebase/analytics",zv="0.10.12";function uO(){_i(new $n(ah,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return sO(s,o,n)},"PUBLIC")),_i(new $n("analytics-internal",r,"PRIVATE")),Ln(Uv,zv),Ln(Uv,zv,"esm2017");function r(e){try{const n=e.getProvider(ah).getImmediate();return{logEvent:(s,o,u)=>lO(n,s,o,u)}}catch(n){throw yn.create("interop-component-reg-failed",{reason:n})}}}uO();var Bv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var es,d0;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(M,b){function S(){}S.prototype=b.prototype,M.D=b.prototype,M.prototype=new S,M.prototype.constructor=M,M.C=function(I,V,U){for(var C=Array(arguments.length-2),_t=2;_t<arguments.length;_t++)C[_t-2]=arguments[_t];return b.prototype[V].apply(I,C)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(M,b,S){S||(S=0);var I=Array(16);if(typeof b=="string")for(var V=0;16>V;++V)I[V]=b.charCodeAt(S++)|b.charCodeAt(S++)<<8|b.charCodeAt(S++)<<16|b.charCodeAt(S++)<<24;else for(V=0;16>V;++V)I[V]=b[S++]|b[S++]<<8|b[S++]<<16|b[S++]<<24;b=M.g[0],S=M.g[1],V=M.g[2];var U=M.g[3],C=b+(U^S&(V^U))+I[0]+3614090360&4294967295;b=S+(C<<7&4294967295|C>>>25),C=U+(V^b&(S^V))+I[1]+3905402710&4294967295,U=b+(C<<12&4294967295|C>>>20),C=V+(S^U&(b^S))+I[2]+606105819&4294967295,V=U+(C<<17&4294967295|C>>>15),C=S+(b^V&(U^b))+I[3]+3250441966&4294967295,S=V+(C<<22&4294967295|C>>>10),C=b+(U^S&(V^U))+I[4]+4118548399&4294967295,b=S+(C<<7&4294967295|C>>>25),C=U+(V^b&(S^V))+I[5]+1200080426&4294967295,U=b+(C<<12&4294967295|C>>>20),C=V+(S^U&(b^S))+I[6]+2821735955&4294967295,V=U+(C<<17&4294967295|C>>>15),C=S+(b^V&(U^b))+I[7]+4249261313&4294967295,S=V+(C<<22&4294967295|C>>>10),C=b+(U^S&(V^U))+I[8]+1770035416&4294967295,b=S+(C<<7&4294967295|C>>>25),C=U+(V^b&(S^V))+I[9]+2336552879&4294967295,U=b+(C<<12&4294967295|C>>>20),C=V+(S^U&(b^S))+I[10]+4294925233&4294967295,V=U+(C<<17&4294967295|C>>>15),C=S+(b^V&(U^b))+I[11]+2304563134&4294967295,S=V+(C<<22&4294967295|C>>>10),C=b+(U^S&(V^U))+I[12]+1804603682&4294967295,b=S+(C<<7&4294967295|C>>>25),C=U+(V^b&(S^V))+I[13]+4254626195&4294967295,U=b+(C<<12&4294967295|C>>>20),C=V+(S^U&(b^S))+I[14]+2792965006&4294967295,V=U+(C<<17&4294967295|C>>>15),C=S+(b^V&(U^b))+I[15]+1236535329&4294967295,S=V+(C<<22&4294967295|C>>>10),C=b+(V^U&(S^V))+I[1]+4129170786&4294967295,b=S+(C<<5&4294967295|C>>>27),C=U+(S^V&(b^S))+I[6]+3225465664&4294967295,U=b+(C<<9&4294967295|C>>>23),C=V+(b^S&(U^b))+I[11]+643717713&4294967295,V=U+(C<<14&4294967295|C>>>18),C=S+(U^b&(V^U))+I[0]+3921069994&4294967295,S=V+(C<<20&4294967295|C>>>12),C=b+(V^U&(S^V))+I[5]+3593408605&4294967295,b=S+(C<<5&4294967295|C>>>27),C=U+(S^V&(b^S))+I[10]+38016083&4294967295,U=b+(C<<9&4294967295|C>>>23),C=V+(b^S&(U^b))+I[15]+3634488961&4294967295,V=U+(C<<14&4294967295|C>>>18),C=S+(U^b&(V^U))+I[4]+3889429448&4294967295,S=V+(C<<20&4294967295|C>>>12),C=b+(V^U&(S^V))+I[9]+568446438&4294967295,b=S+(C<<5&4294967295|C>>>27),C=U+(S^V&(b^S))+I[14]+3275163606&4294967295,U=b+(C<<9&4294967295|C>>>23),C=V+(b^S&(U^b))+I[3]+4107603335&4294967295,V=U+(C<<14&4294967295|C>>>18),C=S+(U^b&(V^U))+I[8]+1163531501&4294967295,S=V+(C<<20&4294967295|C>>>12),C=b+(V^U&(S^V))+I[13]+2850285829&4294967295,b=S+(C<<5&4294967295|C>>>27),C=U+(S^V&(b^S))+I[2]+4243563512&4294967295,U=b+(C<<9&4294967295|C>>>23),C=V+(b^S&(U^b))+I[7]+1735328473&4294967295,V=U+(C<<14&4294967295|C>>>18),C=S+(U^b&(V^U))+I[12]+2368359562&4294967295,S=V+(C<<20&4294967295|C>>>12),C=b+(S^V^U)+I[5]+4294588738&4294967295,b=S+(C<<4&4294967295|C>>>28),C=U+(b^S^V)+I[8]+2272392833&4294967295,U=b+(C<<11&4294967295|C>>>21),C=V+(U^b^S)+I[11]+1839030562&4294967295,V=U+(C<<16&4294967295|C>>>16),C=S+(V^U^b)+I[14]+4259657740&4294967295,S=V+(C<<23&4294967295|C>>>9),C=b+(S^V^U)+I[1]+2763975236&4294967295,b=S+(C<<4&4294967295|C>>>28),C=U+(b^S^V)+I[4]+1272893353&4294967295,U=b+(C<<11&4294967295|C>>>21),C=V+(U^b^S)+I[7]+4139469664&4294967295,V=U+(C<<16&4294967295|C>>>16),C=S+(V^U^b)+I[10]+3200236656&4294967295,S=V+(C<<23&4294967295|C>>>9),C=b+(S^V^U)+I[13]+681279174&4294967295,b=S+(C<<4&4294967295|C>>>28),C=U+(b^S^V)+I[0]+3936430074&4294967295,U=b+(C<<11&4294967295|C>>>21),C=V+(U^b^S)+I[3]+3572445317&4294967295,V=U+(C<<16&4294967295|C>>>16),C=S+(V^U^b)+I[6]+76029189&4294967295,S=V+(C<<23&4294967295|C>>>9),C=b+(S^V^U)+I[9]+3654602809&4294967295,b=S+(C<<4&4294967295|C>>>28),C=U+(b^S^V)+I[12]+3873151461&4294967295,U=b+(C<<11&4294967295|C>>>21),C=V+(U^b^S)+I[15]+530742520&4294967295,V=U+(C<<16&4294967295|C>>>16),C=S+(V^U^b)+I[2]+3299628645&4294967295,S=V+(C<<23&4294967295|C>>>9),C=b+(V^(S|~U))+I[0]+4096336452&4294967295,b=S+(C<<6&4294967295|C>>>26),C=U+(S^(b|~V))+I[7]+1126891415&4294967295,U=b+(C<<10&4294967295|C>>>22),C=V+(b^(U|~S))+I[14]+2878612391&4294967295,V=U+(C<<15&4294967295|C>>>17),C=S+(U^(V|~b))+I[5]+4237533241&4294967295,S=V+(C<<21&4294967295|C>>>11),C=b+(V^(S|~U))+I[12]+1700485571&4294967295,b=S+(C<<6&4294967295|C>>>26),C=U+(S^(b|~V))+I[3]+2399980690&4294967295,U=b+(C<<10&4294967295|C>>>22),C=V+(b^(U|~S))+I[10]+4293915773&4294967295,V=U+(C<<15&4294967295|C>>>17),C=S+(U^(V|~b))+I[1]+2240044497&4294967295,S=V+(C<<21&4294967295|C>>>11),C=b+(V^(S|~U))+I[8]+1873313359&4294967295,b=S+(C<<6&4294967295|C>>>26),C=U+(S^(b|~V))+I[15]+4264355552&4294967295,U=b+(C<<10&4294967295|C>>>22),C=V+(b^(U|~S))+I[6]+2734768916&4294967295,V=U+(C<<15&4294967295|C>>>17),C=S+(U^(V|~b))+I[13]+1309151649&4294967295,S=V+(C<<21&4294967295|C>>>11),C=b+(V^(S|~U))+I[4]+4149444226&4294967295,b=S+(C<<6&4294967295|C>>>26),C=U+(S^(b|~V))+I[11]+3174756917&4294967295,U=b+(C<<10&4294967295|C>>>22),C=V+(b^(U|~S))+I[2]+718787259&4294967295,V=U+(C<<15&4294967295|C>>>17),C=S+(U^(V|~b))+I[9]+3951481745&4294967295,M.g[0]=M.g[0]+b&4294967295,M.g[1]=M.g[1]+(V+(C<<21&4294967295|C>>>11))&4294967295,M.g[2]=M.g[2]+V&4294967295,M.g[3]=M.g[3]+U&4294967295}s.prototype.u=function(M,b){b===void 0&&(b=M.length);for(var S=b-this.blockSize,I=this.B,V=this.h,U=0;U<b;){if(V==0)for(;U<=S;)o(this,M,U),U+=this.blockSize;if(typeof M=="string"){for(;U<b;)if(I[V++]=M.charCodeAt(U++),V==this.blockSize){o(this,I),V=0;break}}else for(;U<b;)if(I[V++]=M[U++],V==this.blockSize){o(this,I),V=0;break}}this.h=V,this.o+=b},s.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var b=1;b<M.length-8;++b)M[b]=0;var S=8*this.o;for(b=M.length-8;b<M.length;++b)M[b]=S&255,S/=256;for(this.u(M),M=Array(16),b=S=0;4>b;++b)for(var I=0;32>I;I+=8)M[S++]=this.g[b]>>>I&255;return M};function u(M,b){var S=m;return Object.prototype.hasOwnProperty.call(S,M)?S[M]:S[M]=b(M)}function f(M,b){this.h=b;for(var S=[],I=!0,V=M.length-1;0<=V;V--){var U=M[V]|0;I&&U==b||(S[V]=U,I=!1)}this.g=S}var m={};function p(M){return-128<=M&&128>M?u(M,function(b){return new f([b|0],0>b?-1:0)}):new f([M|0],0>M?-1:0)}function y(M){if(isNaN(M)||!isFinite(M))return w;if(0>M)return H(y(-M));for(var b=[],S=1,I=0;M>=S;I++)b[I]=M/S|0,S*=4294967296;return new f(b,0)}function E(M,b){if(M.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(M.charAt(0)=="-")return H(E(M.substring(1),b));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=y(Math.pow(b,8)),I=w,V=0;V<M.length;V+=8){var U=Math.min(8,M.length-V),C=parseInt(M.substring(V,V+U),b);8>U?(U=y(Math.pow(b,U)),I=I.j(U).add(y(C))):(I=I.j(S),I=I.add(y(C)))}return I}var w=p(0),D=p(1),k=p(16777216);r=f.prototype,r.m=function(){if(Q(this))return-H(this).m();for(var M=0,b=1,S=0;S<this.g.length;S++){var I=this.i(S);M+=(0<=I?I:4294967296+I)*b,b*=4294967296}return M},r.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(z(this))return"0";if(Q(this))return"-"+H(this).toString(M);for(var b=y(Math.pow(M,6)),S=this,I="";;){var V=me(S,b).g;S=$(S,V.j(b));var U=((0<S.g.length?S.g[0]:S.h)>>>0).toString(M);if(S=V,z(S))return U+I;for(;6>U.length;)U="0"+U;I=U+I}},r.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function z(M){if(M.h!=0)return!1;for(var b=0;b<M.g.length;b++)if(M.g[b]!=0)return!1;return!0}function Q(M){return M.h==-1}r.l=function(M){return M=$(this,M),Q(M)?-1:z(M)?0:1};function H(M){for(var b=M.g.length,S=[],I=0;I<b;I++)S[I]=~M.g[I];return new f(S,~M.h).add(D)}r.abs=function(){return Q(this)?H(this):this},r.add=function(M){for(var b=Math.max(this.g.length,M.g.length),S=[],I=0,V=0;V<=b;V++){var U=I+(this.i(V)&65535)+(M.i(V)&65535),C=(U>>>16)+(this.i(V)>>>16)+(M.i(V)>>>16);I=C>>>16,U&=65535,C&=65535,S[V]=C<<16|U}return new f(S,S[S.length-1]&-2147483648?-1:0)};function $(M,b){return M.add(H(b))}r.j=function(M){if(z(this)||z(M))return w;if(Q(this))return Q(M)?H(this).j(H(M)):H(H(this).j(M));if(Q(M))return H(this.j(H(M)));if(0>this.l(k)&&0>M.l(k))return y(this.m()*M.m());for(var b=this.g.length+M.g.length,S=[],I=0;I<2*b;I++)S[I]=0;for(I=0;I<this.g.length;I++)for(var V=0;V<M.g.length;V++){var U=this.i(I)>>>16,C=this.i(I)&65535,_t=M.i(V)>>>16,ft=M.i(V)&65535;S[2*I+2*V]+=C*ft,ne(S,2*I+2*V),S[2*I+2*V+1]+=U*ft,ne(S,2*I+2*V+1),S[2*I+2*V+1]+=C*_t,ne(S,2*I+2*V+1),S[2*I+2*V+2]+=U*_t,ne(S,2*I+2*V+2)}for(I=0;I<b;I++)S[I]=S[2*I+1]<<16|S[2*I];for(I=b;I<2*b;I++)S[I]=0;return new f(S,0)};function ne(M,b){for(;(M[b]&65535)!=M[b];)M[b+1]+=M[b]>>>16,M[b]&=65535,b++}function Z(M,b){this.g=M,this.h=b}function me(M,b){if(z(b))throw Error("division by zero");if(z(M))return new Z(w,w);if(Q(M))return b=me(H(M),b),new Z(H(b.g),H(b.h));if(Q(b))return b=me(M,H(b)),new Z(H(b.g),b.h);if(30<M.g.length){if(Q(M)||Q(b))throw Error("slowDivide_ only works with positive integers.");for(var S=D,I=b;0>=I.l(M);)S=ue(S),I=ue(I);var V=we(S,1),U=we(I,1);for(I=we(I,2),S=we(S,2);!z(I);){var C=U.add(I);0>=C.l(M)&&(V=V.add(S),U=C),I=we(I,1),S=we(S,1)}return b=$(M,V.j(b)),new Z(V,b)}for(V=w;0<=M.l(b);){for(S=Math.max(1,Math.floor(M.m()/b.m())),I=Math.ceil(Math.log(S)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),U=y(S),C=U.j(b);Q(C)||0<C.l(M);)S-=I,U=y(S),C=U.j(b);z(U)&&(U=D),V=V.add(U),M=$(M,C)}return new Z(V,M)}r.A=function(M){return me(this,M).h},r.and=function(M){for(var b=Math.max(this.g.length,M.g.length),S=[],I=0;I<b;I++)S[I]=this.i(I)&M.i(I);return new f(S,this.h&M.h)},r.or=function(M){for(var b=Math.max(this.g.length,M.g.length),S=[],I=0;I<b;I++)S[I]=this.i(I)|M.i(I);return new f(S,this.h|M.h)},r.xor=function(M){for(var b=Math.max(this.g.length,M.g.length),S=[],I=0;I<b;I++)S[I]=this.i(I)^M.i(I);return new f(S,this.h^M.h)};function ue(M){for(var b=M.g.length+1,S=[],I=0;I<b;I++)S[I]=M.i(I)<<1|M.i(I-1)>>>31;return new f(S,M.h)}function we(M,b){var S=b>>5;b%=32;for(var I=M.g.length-S,V=[],U=0;U<I;U++)V[U]=0<b?M.i(U+S)>>>b|M.i(U+S+1)<<32-b:M.i(U+S);return new f(V,M.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,d0=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=E,es=f}).apply(typeof Bv<"u"?Bv:typeof self<"u"?self:typeof window<"u"?window:{});var Pc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var m0,Ml,p0,Gc,_m,g0,y0,_0;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,_){return c==Array.prototype||c==Object.prototype||(c[g]=_.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pc=="object"&&Pc];for(var g=0;g<c.length;++g){var _=c[g];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(c,g){if(g)e:{var _=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var L=c[A];if(!(L in _))break e;_=_[L]}c=c[c.length-1],A=_[c],g=g(A),g!=A&&g!=null&&e(_,c,{configurable:!0,writable:!0,value:g})}}function u(c,g){c instanceof String&&(c+="");var _=0,A=!1,L={next:function(){if(!A&&_<c.length){var q=_++;return{value:g(q,c[q]),done:!1}}return A=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(c){return c||function(){return u(this,function(g,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function p(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function y(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function E(c,g,_){return c.call.apply(c.bind,arguments)}function w(c,g,_){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,A),c.apply(g,L)}}return function(){return c.apply(g,arguments)}}function D(c,g,_){return D=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:w,D.apply(null,arguments)}function k(c,g){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function z(c,g){function _(){}_.prototype=g.prototype,c.aa=g.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(A,L,q){for(var ie=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)ie[ke-2]=arguments[ke];return g.prototype[L].apply(A,ie)}}function Q(c){const g=c.length;if(0<g){const _=Array(g);for(let A=0;A<g;A++)_[A]=c[A];return _}return[]}function H(c,g){for(let _=1;_<arguments.length;_++){const A=arguments[_];if(p(A)){const L=c.length||0,q=A.length||0;c.length=L+q;for(let ie=0;ie<q;ie++)c[L+ie]=A[ie]}else c.push(A)}}class ${constructor(g,_){this.i=g,this.j=_,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function ne(c){return/^[\s\xa0]*$/.test(c)}function Z(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function me(c){return me[" "](c),c}me[" "]=function(){};var ue=Z().indexOf("Gecko")!=-1&&!(Z().toLowerCase().indexOf("webkit")!=-1&&Z().indexOf("Edge")==-1)&&!(Z().indexOf("Trident")!=-1||Z().indexOf("MSIE")!=-1)&&Z().indexOf("Edge")==-1;function we(c,g,_){for(const A in c)g.call(_,c[A],A,c)}function M(c,g){for(const _ in c)g.call(void 0,c[_],_,c)}function b(c){const g={};for(const _ in c)g[_]=c[_];return g}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(c,g){let _,A;for(let L=1;L<arguments.length;L++){A=arguments[L];for(_ in A)c[_]=A[_];for(let q=0;q<S.length;q++)_=S[q],Object.prototype.hasOwnProperty.call(A,_)&&(c[_]=A[_])}}function V(c){var g=1;c=c.split(":");const _=[];for(;0<g&&c.length;)_.push(c.shift()),g--;return c.length&&_.push(c.join(":")),_}function U(c){m.setTimeout(()=>{throw c},0)}function C(){var c=qe;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class _t{constructor(){this.h=this.g=null}add(g,_){const A=ft.get();A.set(g,_),this.h?this.h.next=A:this.g=A,this.h=A}}var ft=new $(()=>new re,c=>c.reset());class re{constructor(){this.next=this.g=this.h=null}set(g,_){this.h=g,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,de=!1,qe=new _t,O=()=>{const c=m.Promise.resolve(void 0);ve=()=>{c.then(J)}};var J=()=>{for(var c;c=C();){try{c.h.call(c.g)}catch(_){U(_)}var g=ft;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}de=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var ae=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};m.addEventListener("test",_,g),m.removeEventListener("test",_,g)}catch{}return c}();function Ie(c,g){if(se.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(ue){e:{try{me(g.nodeName);var L=!0;break e}catch{}L=!1}L||(g=null)}}else _=="mouseover"?g=c.fromElement:_=="mouseout"&&(g=c.toElement);this.relatedTarget=g,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:be[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ie.aa.h.call(this)}}z(Ie,se);var be={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var dt="closure_listenable_"+(1e6*Math.random()|0),ze=0;function it(c,g,_,A,L){this.listener=c,this.proxy=null,this.src=g,this.type=_,this.capture=!!A,this.ha=L,this.key=++ze,this.da=this.fa=!1}function Ke(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Xt(c){this.src=c,this.g={},this.h=0}Xt.prototype.add=function(c,g,_,A,L){var q=c.toString();c=this.g[q],c||(c=this.g[q]=[],this.h++);var ie=_n(c,g,A,L);return-1<ie?(g=c[ie],_||(g.fa=!1)):(g=new it(g,this.src,q,!!A,L),g.fa=_,c.push(g)),g};function Ai(c,g){var _=g.type;if(_ in c.g){var A=c.g[_],L=Array.prototype.indexOf.call(A,g,void 0),q;(q=0<=L)&&Array.prototype.splice.call(A,L,1),q&&(Ke(g),c.g[_].length==0&&(delete c.g[_],c.h--))}}function _n(c,g,_,A){for(var L=0;L<c.length;++L){var q=c[L];if(!q.da&&q.listener==g&&q.capture==!!_&&q.ha==A)return L}return-1}var lr="closure_lm_"+(1e6*Math.random()|0),ur={};function Si(c,g,_,A,L){if(Array.isArray(g)){for(var q=0;q<g.length;q++)Si(c,g[q],_,A,L);return null}return _=hu(_),c&&c[dt]?c.K(g,_,y(A)?!!A.capture:!1,L):To(c,g,_,!1,A,L)}function To(c,g,_,A,L,q){if(!g)throw Error("Invalid event type");var ie=y(L)?!!L.capture:!!L,ke=Ao(c);if(ke||(c[lr]=ke=new Xt(c)),_=ke.add(g,_,A,ie,q),_.proxy)return _;if(A=ra(),_.proxy=A,A.src=c,A.listener=_,c.addEventListener)ae||(L=ie),L===void 0&&(L=!1),c.addEventListener(g.toString(),A,L);else if(c.attachEvent)c.attachEvent(aa(g.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function ra(){function c(_){return g.call(c.src,c.listener,_)}const g=Bh;return c}function sa(c,g,_,A,L){if(Array.isArray(g))for(var q=0;q<g.length;q++)sa(c,g[q],_,A,L);else A=y(A)?!!A.capture:!!A,_=hu(_),c&&c[dt]?(c=c.i,g=String(g).toString(),g in c.g&&(q=c.g[g],_=_n(q,_,A,L),-1<_&&(Ke(q[_]),Array.prototype.splice.call(q,_,1),q.length==0&&(delete c.g[g],c.h--)))):c&&(c=Ao(c))&&(g=c.g[g.toString()],c=-1,g&&(c=_n(g,_,A,L)),(_=-1<c?g[c]:null)&&hs(_))}function hs(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[dt])Ai(g.i,c);else{var _=c.type,A=c.proxy;g.removeEventListener?g.removeEventListener(_,A,c.capture):g.detachEvent?g.detachEvent(aa(_),A):g.addListener&&g.removeListener&&g.removeListener(A),(_=Ao(g))?(Ai(_,c),_.h==0&&(_.src=null,g[lr]=null)):Ke(c)}}}function aa(c){return c in ur?ur[c]:ur[c]="on"+c}function Bh(c,g){if(c.da)c=!0;else{g=new Ie(g,this);var _=c.listener,A=c.ha||c.src;c.fa&&hs(c),c=_.call(A,g)}return c}function Ao(c){return c=c[lr],c instanceof Xt?c:null}var sn="__closure_events_fn_"+(1e9*Math.random()>>>0);function hu(c){return typeof c=="function"?c:(c[sn]||(c[sn]=function(g){return c.handleEvent(g)}),c[sn])}function vt(){he.call(this),this.i=new Xt(this),this.M=this,this.F=null}z(vt,he),vt.prototype[dt]=!0,vt.prototype.removeEventListener=function(c,g,_,A){sa(this,c,g,_,A)};function Ct(c,g){var _,A=c.F;if(A)for(_=[];A;A=A.F)_.push(A);if(c=c.M,A=g.type||g,typeof g=="string")g=new se(g,c);else if(g instanceof se)g.target=g.target||c;else{var L=g;g=new se(A,c),I(g,L)}if(L=!0,_)for(var q=_.length-1;0<=q;q--){var ie=g.g=_[q];L=wi(ie,A,!0,g)&&L}if(ie=g.g=c,L=wi(ie,A,!0,g)&&L,L=wi(ie,A,!1,g)&&L,_)for(q=0;q<_.length;q++)ie=g.g=_[q],L=wi(ie,A,!1,g)&&L}vt.prototype.N=function(){if(vt.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var _=c.g[g],A=0;A<_.length;A++)Ke(_[A]);delete c.g[g],c.h--}}this.F=null},vt.prototype.K=function(c,g,_,A){return this.i.add(String(c),g,!1,_,A)},vt.prototype.L=function(c,g,_,A){return this.i.add(String(c),g,!0,_,A)};function wi(c,g,_,A){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var L=!0,q=0;q<g.length;++q){var ie=g[q];if(ie&&!ie.da&&ie.capture==_){var ke=ie.listener,Tt=ie.ha||ie.src;ie.fa&&Ai(c.i,ie),L=ke.call(Tt,A)!==!1&&L}}return L&&!A.defaultPrevented}function fu(c,g,_){if(typeof c=="function")_&&(c=D(c,_));else if(c&&typeof c.handleEvent=="function")c=D(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:m.setTimeout(c,g||0)}function So(c){c.g=fu(()=>{c.g=null,c.i&&(c.i=!1,So(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class jh extends he{constructor(g,_){super(),this.m=g,this.l=_,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:So(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fs(c){he.call(this),this.h=c,this.g={}}z(fs,he);var cr=[];function qt(c){we(c.g,function(g,_){this.g.hasOwnProperty(_)&&hs(g)},c),c.g={}}fs.prototype.N=function(){fs.aa.N.call(this),qt(this)},fs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wo=m.JSON.stringify,Wn=m.JSON.parse,Wt=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function bo(){}bo.prototype.h=null;function du(c){return c.h||(c.h=c.i())}function mu(){}var Zn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function hr(){se.call(this,"d")}z(hr,se);function zn(){se.call(this,"c")}z(zn,se);var vn={},fr=null;function oa(){return fr=fr||new vt}vn.La="serverreachability";function Ro(c){se.call(this,vn.La,c)}z(Ro,se);function dr(c){const g=oa();Ct(g,new Ro(g))}vn.STAT_EVENT="statevent";function la(c,g){se.call(this,vn.STAT_EVENT,c),this.stat=g}z(la,se);function ut(c){const g=oa();Ct(g,new la(g,c))}vn.Ma="timingevent";function pu(c,g){se.call(this,vn.Ma,c),this.size=g}z(pu,se);function mr(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},g)}function pr(){this.g=!0}pr.prototype.xa=function(){this.g=!1};function gu(c,g,_,A,L,q){c.info(function(){if(c.g)if(q)for(var ie="",ke=q.split("&"),Tt=0;Tt<ke.length;Tt++){var xe=ke[Tt].split("=");if(1<xe.length){var Nt=xe[0];xe=xe[1];var At=Nt.split("_");ie=2<=At.length&&At[1]=="type"?ie+(Nt+"="+xe+"&"):ie+(Nt+"=redacted&")}}else ie=null;else ie=q;return"XMLHTTP REQ ("+A+") [attempt "+L+"]: "+g+`
`+_+`
`+ie})}function yu(c,g,_,A,L,q,ie){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+L+"]: "+g+`
`+_+`
`+q+" "+ie})}function gr(c,g,_,A){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+Dt(c,_)+(A?" "+A:"")})}function Jn(c,g){c.info(function(){return"TIMEOUT: "+g})}pr.prototype.info=function(){};function Dt(c,g){if(!c.g)return g;if(!g)return null;try{var _=JSON.parse(g);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var A=_[c];if(!(2>A.length)){var L=A[1];if(Array.isArray(L)&&!(1>L.length)){var q=L[0];if(q!="noop"&&q!="stop"&&q!="close")for(var ie=1;ie<L.length;ie++)L[ie]=""}}}}return wo(_)}catch{return g}}var Et={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ds;function ua(){}z(ua,bo),ua.prototype.g=function(){return new XMLHttpRequest},ua.prototype.i=function(){return{}},ds=new ua;function ei(c,g,_,A){this.j=c,this.i=g,this.l=_,this.R=A||1,this.U=new fs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Io}function Io(){this.i=null,this.g="",this.h=!1}var yr={},ms={};function Bn(c,g,_){c.L=1,c.v=ys(rt(g)),c.m=_,c.P=!0,Ri(c,null)}function Ri(c,g){c.F=Date.now(),Je(c),c.A=rt(c.v);var _=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),Di(_.i,"t",A),c.C=0,_=c.j.J,c.h=new Io,c.g=Nu(c.j,_?g:null,!c.m),0<c.O&&(c.M=new jh(D(c.Y,c,c.g),c.O)),g=c.U,_=c.g,A=c.ca;var L="readystatechange";Array.isArray(L)||(L&&(cr[0]=L.toString()),L=cr);for(var q=0;q<L.length;q++){var ie=Si(_,L[q],A||g.handleEvent,!1,g.h||g);if(!ie)break;g.g[ie.key]=ie}g=c.H?b(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),dr(),gu(c.i,c.u,c.A,c.l,c.R,c.m)}ei.prototype.ca=function(c){c=c.target;const g=this.M;g&&wn(c)==3?g.j():this.Y(c)},ei.prototype.Y=function(c){try{if(c==this.g)e:{const At=wn(this.g);var g=this.g.Ba();const Vi=this.g.Z();if(!(3>At)&&(At!=3||this.g&&(this.h.h||this.g.oa()||Su(this.g)))){this.J||At!=4||g==7||(g==8||0>=Vi?dr(3):dr(2)),ca(this);var _=this.g.Z();this.X=_;t:if(_r(this)){var A=Su(this.g);c="";var L=A.length,q=wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){an(this),cn(this);var ie="";break t}this.h.i=new m.TextDecoder}for(g=0;g<L;g++)this.h.h=!0,c+=this.h.i.decode(A[g],{stream:!(q&&g==L-1)});A.length=0,this.h.g+=c,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=_==200,yu(this.i,this.u,this.A,this.l,this.R,At,_),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,Tt=this.g;if((ke=Tt.g?Tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ne(ke)){var xe=ke;break t}}xe=null}if(_=xe)gr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hn(this,_);else{this.o=!1,this.s=3,ut(12),an(this),cn(this);break e}}if(this.P){_=!0;let xt;for(;!this.J&&this.C<ie.length;)if(xt=vr(this,ie),xt==ms){At==4&&(this.s=4,ut(14),_=!1),gr(this.i,this.l,null,"[Incomplete Response]");break}else if(xt==yr){this.s=4,ut(15),gr(this.i,this.l,ie,"[Invalid Chunk]"),_=!1;break}else gr(this.i,this.l,xt,null),hn(this,xt);if(_r(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||ie.length!=0||this.h.h||(this.s=1,ut(16),_=!1),this.o=this.o&&_,!_)gr(this.i,this.l,ie,"[Invalid Chunked Response]"),an(this),cn(this);else if(0<ie.length&&!this.W){this.W=!0;var Nt=this.j;Nt.g==this&&Nt.ba&&!Nt.M&&(Nt.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),ws(Nt),Nt.M=!0,ut(11))}}else gr(this.i,this.l,ie,null),hn(this,ie);At==4&&an(this),this.o&&!this.J&&(At==4?Cu(this.j,this):(this.o=!1,Je(this)))}else $h(this.g),_==400&&0<ie.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),an(this),cn(this)}}}catch{}finally{}};function _r(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function vr(c,g){var _=c.C,A=g.indexOf(`
`,_);return A==-1?ms:(_=Number(g.substring(_,A)),isNaN(_)?yr:(A+=1,A+_>g.length?ms:(g=g.slice(A,A+_),c.C=A+_,g)))}ei.prototype.cancel=function(){this.J=!0,an(this)};function Je(c){c.S=Date.now()+c.I,Co(c,c.I)}function Co(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=mr(D(c.ba,c),g)}function ca(c){c.B&&(m.clearTimeout(c.B),c.B=null)}ei.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Jn(this.i,this.A),this.L!=2&&(dr(),ut(17)),an(this),this.s=2,cn(this)):Co(this,this.S-c)};function cn(c){c.j.G==0||c.J||Cu(c.j,c)}function an(c){ca(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,qt(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function hn(c,g){try{var _=c.j;if(_.G!=0&&(_.g==c||Er(_.h,c))){if(!c.K&&Er(_.h,c)&&_.G==3){try{var A=_.Da.g.parse(g)}catch{A=null}if(Array.isArray(A)&&A.length==3){var L=A;if(L[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)Ea(_),_a(_);else break e;zo(_),ut(18)}}else _.za=L[1],0<_.za-_.T&&37500>L[2]&&_.F&&_.v==0&&!_.C&&(_.C=mr(D(_.Za,_),6e3));if(1>=_u(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Mi(_,11)}else if((c.K||_.g==c)&&Ea(_),!ne(g))for(L=_.Da.g.parse(g),g=0;g<L.length;g++){let xe=L[g];if(_.T=xe[0],xe=xe[1],_.G==2)if(xe[0]=="c"){_.K=xe[1],_.ia=xe[2];const Nt=xe[3];Nt!=null&&(_.la=Nt,_.j.info("VER="+_.la));const At=xe[4];At!=null&&(_.Aa=At,_.j.info("SVER="+_.Aa));const Vi=xe[5];Vi!=null&&typeof Vi=="number"&&0<Vi&&(A=1.5*Vi,_.L=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const xt=c.g;if(xt){const oi=xt.g?xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oi){var q=A.h;q.g||oi.indexOf("spdy")==-1&&oi.indexOf("quic")==-1&&oi.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Tr(q,q.h),q.h=null))}if(A.D){const jo=xt.g?xt.g.getResponseHeader("X-HTTP-Session-Id"):null;jo&&(A.ya=jo,Be(A.I,A.D,jo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),A=_;var ie=c;if(A.qa=Ou(A,A.J?A.ia:null,A.W),ie.K){En(A.h,ie);var ke=ie,Tt=A.L;Tt&&(ke.I=Tt),ke.B&&(ca(ke),Je(ke)),A.g=ie}else Ru(A);0<_.i.length&&va(_)}else xe[0]!="stop"&&xe[0]!="close"||Mi(_,7);else _.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?Mi(_,7):Lo(_):xe[0]!="noop"&&_.l&&_.l.ta(xe),_.v=0)}}dr(4)}catch{}}var Hh=class{constructor(c,g){this.g=c,this.map=g}};function Do(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Oo(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function _u(c){return c.h?1:c.g?c.g.size:0}function Er(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function Tr(c,g){c.g?c.g.add(g):c.h=g}function En(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Do.prototype.cancel=function(){if(this.i=Zt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Zt(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const _ of c.g.values())g=g.concat(_.D);return g}return Q(c.i)}function vu(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(p(c)){for(var g=[],_=c.length,A=0;A<_;A++)g.push(c[A]);return g}g=[],_=0;for(A in c)g[_++]=c[A];return g}function qh(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(p(c)||typeof c=="string"){var g=[];c=c.length;for(var _=0;_<c;_++)g.push(_);return g}g=[],_=0;for(const A in c)g[_++]=A;return g}}}function ps(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(p(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var _=qh(c),A=vu(c),L=A.length,q=0;q<L;q++)g.call(void 0,A[q],_&&_[q],c)}var No=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ha(c,g){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var A=c[_].indexOf("="),L=null;if(0<=A){var q=c[_].substring(0,A);L=c[_].substring(A+1)}else q=c[_];g(q,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Ii(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Ii){this.h=c.h,Ar(this,c.j),this.o=c.o,this.g=c.g,gs(this,c.s),this.l=c.l;var g=c.i,_=new ti;_.i=g.i,g.g&&(_.g=new Map(g.g),_.h=g.h),fa(this,_),this.m=c.m}else c&&(g=String(c).match(No))?(this.h=!1,Ar(this,g[1]||"",!0),this.o=Sr(g[2]||""),this.g=Sr(g[3]||"",!0),gs(this,g[4]),this.l=Sr(g[5]||"",!0),fa(this,g[6]||"",!0),this.m=Sr(g[7]||"")):(this.h=!1,this.i=new ti(null,this.h))}Ii.prototype.toString=function(){var c=[],g=this.j;g&&c.push(Tn(g,Mo,!0),":");var _=this.g;return(_||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Tn(g,Mo,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(Tn(_,_.charAt(0)=="/"?Vo:Eu,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",Tn(_,Kh)),c.join("")};function rt(c){return new Ii(c)}function Ar(c,g,_){c.j=_?Sr(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function gs(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function fa(c,g,_){g instanceof ti?(c.i=g,Po(c.i,c.h)):(_||(g=Tn(g,Gh)),c.i=new ti(g,c.h))}function Be(c,g,_){c.i.set(g,_)}function ys(c){return Be(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Sr(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Tn(c,g,_){return typeof c=="string"?(c=encodeURI(c).replace(g,Fh),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Fh(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Mo=/[#\/\?@]/g,Eu=/[#\?:]/g,Vo=/[#\?]/g,Gh=/[#\?@]/g,Kh=/#/g;function ti(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function An(c){c.g||(c.g=new Map,c.h=0,c.i&&ha(c.i,function(g,_){c.add(decodeURIComponent(g.replace(/\+/g," ")),_)}))}r=ti.prototype,r.add=function(c,g){An(this),this.i=null,c=Oi(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(g),this.h+=1,this};function da(c,g){An(c),g=Oi(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Ci(c,g){return An(c),g=Oi(c,g),c.g.has(g)}r.forEach=function(c,g){An(this),this.g.forEach(function(_,A){_.forEach(function(L){c.call(g,L,A,this)},this)},this)},r.na=function(){An(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),_=[];for(let A=0;A<g.length;A++){const L=c[A];for(let q=0;q<L.length;q++)_.push(g[A])}return _},r.V=function(c){An(this);let g=[];if(typeof c=="string")Ci(this,c)&&(g=g.concat(this.g.get(Oi(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)g=g.concat(c[_])}return g},r.set=function(c,g){return An(this),this.i=null,c=Oi(this,c),Ci(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},r.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Di(c,g,_){da(c,g),0<_.length&&(c.i=null,c.g.set(Oi(c,g),Q(_)),c.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var _=0;_<g.length;_++){var A=g[_];const q=encodeURIComponent(String(A)),ie=this.V(A);for(A=0;A<ie.length;A++){var L=q;ie[A]!==""&&(L+="="+encodeURIComponent(String(ie[A]))),c.push(L)}}return this.i=c.join("&")};function Oi(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function Po(c,g){g&&!c.j&&(An(c),c.i=null,c.g.forEach(function(_,A){var L=A.toLowerCase();A!=L&&(da(this,A),Di(this,L,_))},c)),c.j=g}function Tu(c,g){const _=new pr;if(m.Image){const A=new Image;A.onload=k(Sn,_,"TestLoadImage: loaded",!0,g,A),A.onerror=k(Sn,_,"TestLoadImage: error",!1,g,A),A.onabort=k(Sn,_,"TestLoadImage: abort",!1,g,A),A.ontimeout=k(Sn,_,"TestLoadImage: timeout",!1,g,A),m.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else g(!1)}function _s(c,g){const _=new pr,A=new AbortController,L=setTimeout(()=>{A.abort(),Sn(_,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:A.signal}).then(q=>{clearTimeout(L),q.ok?Sn(_,"TestPingServer: ok",!0,g):Sn(_,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(L),Sn(_,"TestPingServer: error",!1,g)})}function Sn(c,g,_,A,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),A(_)}catch{}}function vs(){this.g=new Wt}function ni(c,g,_){const A=_||"";try{ps(c,function(L,q){let ie=L;y(L)&&(ie=wo(L)),g.push(A+q+"="+encodeURIComponent(ie))})}catch(L){throw g.push(A+"type="+encodeURIComponent("_badmap")),L}}function wr(c){this.l=c.Ub||null,this.j=c.eb||!1}z(wr,bo),wr.prototype.g=function(){return new Ni(this.l,this.j)},wr.prototype.i=function(c){return function(){return c}}({});function Ni(c,g){vt.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}z(Ni,vt),r=Ni.prototype,r.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,ri(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||m).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ii(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ri(this)),this.g&&(this.readyState=3,ri(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ko(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function ko(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?ii(this):ri(this),this.readyState==3&&ko(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,ii(this))},r.Qa=function(c){this.g&&(this.response=c,ii(this))},r.ga=function(){this.g&&ii(this)};function ii(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ri(c)}r.setRequestHeader=function(c,g){this.u.append(c,g)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var _=g.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=g.next();return c.join(`\r
`)};function ri(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ni.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function xo(c){let g="";return we(c,function(_,A){g+=A,g+=":",g+=_,g+=`\r
`}),g}function Ot(c,g,_){e:{for(A in _){var A=!1;break e}A=!0}A||(_=xo(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):Be(c,g,_))}function Fe(c){vt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}z(Fe,vt);var ma=/^https?$/i,Es=["POST","PUT"];r=Fe.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,g,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ds.g(),this.v=this.o?du(this.o):du(ds),this.g.onreadystatechange=D(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(q){Au(this,q);return}if(c=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var L in A)_.set(L,A[L]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const q of A.keys())_.set(q,A.get(q));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find(q=>q.toLowerCase()=="content-type"),L=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Es,g,void 0))||A||L||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,ie]of _)this.g.setRequestHeader(q,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ts(this),this.u=!0,this.g.send(c),this.u=!1}catch(q){Au(this,q)}};function Au(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,pa(c),si(c)}function pa(c){c.A||(c.A=!0,Ct(c,"complete"),Ct(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ct(this,"complete"),Ct(this,"abort"),si(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),si(this,!0)),Fe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ga(this):this.bb())},r.bb=function(){ga(this)};function ga(c){if(c.h&&typeof f<"u"&&(!c.v[1]||wn(c)!=4||c.Z()!=2)){if(c.u&&wn(c)==4)fu(c.Ea,0,c);else if(Ct(c,"readystatechange"),wn(c)==4){c.h=!1;try{const ie=c.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var _;if(!(_=g)){var A;if(A=ie===0){var L=String(c.D).match(No)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),A=!ma.test(L?L.toLowerCase():"")}_=A}if(_)Ct(c,"complete"),Ct(c,"success");else{c.m=6;try{var q=2<wn(c)?c.g.statusText:""}catch{q=""}c.l=q+" ["+c.Z()+"]",pa(c)}}finally{si(c)}}}}function si(c,g){if(c.g){Ts(c);const _=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Ct(c,"ready");try{_.onreadystatechange=A}catch{}}}function Ts(c){c.I&&(m.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function wn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<wn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Wn(g)}};function Su(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function $h(c){const g={};c=(c.g&&2<=wn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(ne(c[A]))continue;var _=V(c[A]);const L=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const q=g[L]||[];g[L]=q,q.push(_)}M(g,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function As(c,g,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||g}function ya(c){this.Aa=0,this.i=[],this.j=new pr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=As("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=As("baseRetryDelayMs",5e3,c),this.cb=As("retryDelaySeedMs",1e4,c),this.Wa=As("forwardChannelMaxRetries",2,c),this.wa=As("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Do(c&&c.concurrentRequestLimit),this.Da=new vs,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ya.prototype,r.la=8,r.G=1,r.connect=function(c,g,_,A){ut(0),this.W=c,this.H=g||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.I=Ou(this,null,this.W),va(this)};function Lo(c){if(wu(c),c.G==3){var g=c.U++,_=rt(c.I);if(Be(_,"SID",c.K),Be(_,"RID",g),Be(_,"TYPE","terminate"),Ss(c,_),g=new ei(c,c.j,g),g.L=2,g.v=ys(rt(_)),_=!1,m.navigator&&m.navigator.sendBeacon)try{_=m.navigator.sendBeacon(g.v.toString(),"")}catch{}!_&&m.Image&&(new Image().src=g.v,_=!0),_||(g.g=Nu(g.j,null),g.g.ea(g.v)),g.F=Date.now(),Je(g)}Du(c)}function _a(c){c.g&&(ws(c),c.g.cancel(),c.g=null)}function wu(c){_a(c),c.u&&(m.clearTimeout(c.u),c.u=null),Ea(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function va(c){if(!Oo(c.h)&&!c.s){c.s=!0;var g=c.Ga;ve||O(),de||(ve(),de=!0),qe.add(g,c),c.B=0}}function Qh(c,g){return _u(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=mr(D(c.Ga,c,g),Bo(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const L=new ei(this,this.j,c);let q=this.o;if(this.S&&(q?(q=b(q),I(q,this.S)):q=this.S),this.m!==null||this.O||(L.H=q,q=null),this.P)e:{for(var g=0,_=0;_<this.i.length;_++){t:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(g+=A,4096<g){g=_;break e}if(g===4096||_===this.i.length-1){g=_+1;break e}}g=1e3}else g=1e3;g=bu(this,L,g),_=rt(this.I),Be(_,"RID",c),Be(_,"CVER",22),this.D&&Be(_,"X-HTTP-Session-Id",this.D),Ss(this,_),q&&(this.O?g="headers="+encodeURIComponent(String(xo(q)))+"&"+g:this.m&&Ot(_,this.m,q)),Tr(this.h,L),this.Ua&&Be(_,"TYPE","init"),this.P?(Be(_,"$req",g),Be(_,"SID","null"),L.T=!0,Bn(L,_,null)):Bn(L,_,g),this.G=2}}else this.G==3&&(c?Uo(this,c):this.i.length==0||Oo(this.h)||Uo(this))};function Uo(c,g){var _;g?_=g.l:_=c.U++;const A=rt(c.I);Be(A,"SID",c.K),Be(A,"RID",_),Be(A,"AID",c.T),Ss(c,A),c.m&&c.o&&Ot(A,c.m,c.o),_=new ei(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),g&&(c.i=g.D.concat(c.i)),g=bu(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Tr(c.h,_),Bn(_,A,g)}function Ss(c,g){c.H&&we(c.H,function(_,A){Be(g,A,_)}),c.l&&ps({},function(_,A){Be(g,A,_)})}function bu(c,g,_){_=Math.min(c.i.length,_);var A=c.l?D(c.l.Na,c.l,c):null;e:{var L=c.i;let q=-1;for(;;){const ie=["count="+_];q==-1?0<_?(q=L[0].g,ie.push("ofs="+q)):q=0:ie.push("ofs="+q);let ke=!0;for(let Tt=0;Tt<_;Tt++){let xe=L[Tt].g;const Nt=L[Tt].map;if(xe-=q,0>xe)q=Math.max(0,L[Tt].g-100),ke=!1;else try{ni(Nt,ie,"req"+xe+"_")}catch{A&&A(Nt)}}if(ke){A=ie.join("&");break e}}}return c=c.i.splice(0,_),g.D=c,A}function Ru(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;ve||O(),de||(ve(),de=!0),qe.add(g,c),c.v=0}}function zo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=mr(D(c.Fa,c),Bo(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,Iu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=mr(D(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),_a(this),Iu(this))};function ws(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function Iu(c){c.g=new ei(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=rt(c.qa);Be(g,"RID","rpc"),Be(g,"SID",c.K),Be(g,"AID",c.T),Be(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&Be(g,"TO",c.ja),Be(g,"TYPE","xmlhttp"),Ss(c,g),c.m&&c.o&&Ot(g,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=ys(rt(g)),_.m=null,_.P=!0,Ri(_,c)}r.Za=function(){this.C!=null&&(this.C=null,_a(this),zo(this),ut(19))};function Ea(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function Cu(c,g){var _=null;if(c.g==g){Ea(c),ws(c),c.g=null;var A=2}else if(Er(c.h,g))_=g.D,En(c.h,g),A=1;else return;if(c.G!=0){if(g.o)if(A==1){_=g.m?g.m.length:0,g=Date.now()-g.F;var L=c.B;A=oa(),Ct(A,new pu(A,_)),va(c)}else Ru(c);else if(L=g.s,L==3||L==0&&0<g.X||!(A==1&&Qh(c,g)||A==2&&zo(c)))switch(_&&0<_.length&&(g=c.h,g.i=g.i.concat(_)),L){case 1:Mi(c,5);break;case 4:Mi(c,10);break;case 3:Mi(c,6);break;default:Mi(c,2)}}}function Bo(c,g){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*g}function Mi(c,g){if(c.j.info("Error code "+g),g==2){var _=D(c.fb,c),A=c.Xa;const L=!A;A=new Ii(A||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Ar(A,"https"),ys(A),L?Tu(A.toString(),_):_s(A.toString(),_)}else ut(2);c.G=0,c.l&&c.l.sa(g),Du(c),wu(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function Du(c){if(c.G=0,c.ka=[],c.l){const g=Zt(c.h);(g.length!=0||c.i.length!=0)&&(H(c.ka,g),H(c.ka,c.i),c.h.i.length=0,Q(c.i),c.i.length=0),c.l.ra()}}function Ou(c,g,_){var A=_ instanceof Ii?rt(_):new Ii(_);if(A.g!="")g&&(A.g=g+"."+A.g),gs(A,A.s);else{var L=m.location;A=L.protocol,g=g?g+"."+L.hostname:L.hostname,L=+L.port;var q=new Ii(null);A&&Ar(q,A),g&&(q.g=g),L&&gs(q,L),_&&(q.l=_),A=q}return _=c.D,g=c.ya,_&&g&&Be(A,_,g),Be(A,"VER",c.la),Ss(c,A),A}function Nu(c,g,_){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new Fe(new wr({eb:_})):new Fe(c.pa),g.Ha(c.J),g}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mu(){}r=Mu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ta(){}Ta.prototype.g=function(c,g){return new Jt(c,g)};function Jt(c,g){vt.call(this),this.g=new ya(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!ne(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!ne(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new ai(this)}z(Jt,vt),Jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Jt.prototype.close=function(){Lo(this.g)},Jt.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=wo(c),c=_);g.i.push(new Hh(g.Ya++,c)),g.G==3&&va(g)},Jt.prototype.N=function(){this.g.l=null,delete this.j,Lo(this.g),delete this.g,Jt.aa.N.call(this)};function Vu(c){hr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const _ in g){c=_;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}z(Vu,hr);function Pu(){zn.call(this),this.status=1}z(Pu,zn);function ai(c){this.g=c}z(ai,Mu),ai.prototype.ua=function(){Ct(this.g,"a")},ai.prototype.ta=function(c){Ct(this.g,new Vu(c))},ai.prototype.sa=function(c){Ct(this.g,new Pu)},ai.prototype.ra=function(){Ct(this.g,"b")},Ta.prototype.createWebChannel=Ta.prototype.g,Jt.prototype.send=Jt.prototype.o,Jt.prototype.open=Jt.prototype.m,Jt.prototype.close=Jt.prototype.close,_0=function(){return new Ta},y0=function(){return oa()},g0=vn,_m={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Et.NO_ERROR=0,Et.TIMEOUT=8,Et.HTTP_ERROR=6,Gc=Et,bi.COMPLETE="complete",p0=bi,mu.EventType=Zn,Zn.OPEN="a",Zn.CLOSE="b",Zn.ERROR="c",Zn.MESSAGE="d",vt.prototype.listen=vt.prototype.K,Ml=mu,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,m0=Fe}).apply(typeof Pc<"u"?Pc:typeof self<"u"?self:typeof window<"u"?window:{});const jv="@firebase/firestore",Hv="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$t.UNAUTHENTICATED=new $t(null),$t.GOOGLE_CREDENTIALS=new $t("google-credentials-uid"),$t.FIRST_PARTY=new $t("first-party-uid"),$t.MOCK_USER=new $t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yo="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=new Ah("@firebase/firestore");function Qa(){return Xs.logLevel}function oe(r,...e){if(Xs.logLevel<=Ne.DEBUG){const n=e.map(ip);Xs.debug(`Firestore (${yo}): ${r}`,...n)}}function rr(r,...e){if(Xs.logLevel<=Ne.ERROR){const n=e.map(ip);Xs.error(`Firestore (${yo}): ${r}`,...n)}}function io(r,...e){if(Xs.logLevel<=Ne.WARN){const n=e.map(ip);Xs.warn(`Firestore (${yo}): ${r}`,...n)}}function ip(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(r="Unexpected state"){const e=`FIRESTORE (${yo}) INTERNAL ASSERTION FAILED: `+r;throw rr(e),new Error(e)}function Ge(r,e){r||Ee()}function Se(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class pe extends Xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n($t.UNAUTHENTICATED))}shutdown(){}}class hO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fO{constructor(e){this.t=e,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ge(this.o===void 0);let s=this.i;const o=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let u=new ts;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ts,e.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const p=u;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},m=p=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(p=>m(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ts)}},0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ge(typeof s.accessToken=="string"),new v0(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ge(e===null||typeof e=="string"),new $t(e)}}class dO{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class mO{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new dO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n($t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pO{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,kn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Ge(this.o===void 0);const s=u=>{u.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.R;return this.R=u.token,oe("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new qv(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ge(typeof n.token=="string"),this.R=n.token,new qv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gO(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=gO(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=e.charAt(o[u]%62))}return s}}function Pe(r,e){return r<e?-1:r>e?1:0}function ro(r,e,n){return r.length===e.length&&r.every((s,o)=>n(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv=-62135596800,Gv=1e6;class Rt{static now(){return Rt.fromMillis(Date.now())}static fromDate(e){return Rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Gv);return new Rt(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new pe(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new pe(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Fv)throw new pe(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new pe(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Gv}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Fv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new Rt(0,0))}static max(){return new Te(new Rt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv="__name__";class di{constructor(e,n,s){n===void 0?n=0:n>e.length&&Ee(),s===void 0?s=e.length-n:s>e.length-n&&Ee(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return di.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof di?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const u=di.compareSegments(e.get(o),n.get(o));if(u!==0)return u}return Math.sign(e.length-n.length)}static compareSegments(e,n){const s=di.isNumericId(e),o=di.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?di.extractNumericId(e).compare(di.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return es.fromString(e.substring(4,e.length-2))}}class lt extends di{construct(e,n,s){return new lt(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new pe(te.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new lt(n)}static emptyPath(){return new lt([])}}const yO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class jt extends di{construct(e,n,s){return new jt(e,n,s)}static isValidIdentifier(e){return yO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),jt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Kv}static keyField(){return new jt([Kv])}static fromServerFormat(e){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new pe(te.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new pe(te.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new pe(te.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new pe(te.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new jt(n)}static emptyPath(){return new jt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(lt.fromString(e))}static fromName(e){return new ge(lt.fromString(e).popFirst(5))}static empty(){return new ge(lt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&lt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return lt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new lt(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=-1;function _O(r,e){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(s===1e9?new Rt(n+1,0):new Rt(n,s));return new is(o,ge.empty(),e)}function vO(r){return new is(r.readTime,r.key,Gl)}class is{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new is(Te.min(),ge.empty(),Gl)}static max(){return new is(Te.max(),ge.empty(),Gl)}}function EO(r,e){let n=r.readTime.compareTo(e.readTime);return n!==0?n:(n=ge.comparator(r.documentKey,e.documentKey),n!==0?n:Pe(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _o(r){if(r.code!==te.FAILED_PRECONDITION||r.message!==TO)throw r;oe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new X((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof X?n:X.resolve(n)}catch(n){return X.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):X.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):X.reject(n)}static resolve(e){return new X((n,s)=>{n(e)})}static reject(e){return new X((n,s)=>{s(e)})}static waitFor(e){return new X((n,s)=>{let o=0,u=0,f=!1;e.forEach(m=>{++o,m.next(()=>{++u,f&&u===o&&n()},p=>s(p))}),f=!0,u===o&&n()})}static or(e){let n=X.resolve(!1);for(const s of e)n=n.next(o=>o?X.resolve(o):s());return n}static forEach(e,n){const s=[];return e.forEach((o,u)=>{s.push(n.call(this,o,u))}),this.waitFor(s)}static mapArray(e,n){return new X((s,o)=>{const u=e.length,f=new Array(u);let m=0;for(let p=0;p<u;p++){const y=p;n(e[y]).next(E=>{f[y]=E,++m,m===u&&s(f)},E=>o(E))}})}static doWhile(e,n){return new X((s,o)=>{const u=()=>{e()===!0?n().next(()=>{u()},o):s()};u()})}}function SO(r){const e=r.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function vo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.oe(s),this._e=s=>n.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Ch.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=-1;function Dh(r){return r==null}function oh(r){return r===0&&1/r==-1/0}function wO(r){return typeof r=="number"&&Number.isInteger(r)&&!oh(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0="";function bO(r){let e="";for(let n=0;n<r.length;n++)e.length>0&&(e=$v(e)),e=RO(r.get(n),e);return $v(e)}function RO(r,e){let n=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case T0:n+="";break;default:n+=u}}return n}function $v(r){return r+T0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(r){let e=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e++;return e}function ea(r,e){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e(n,r[n])}function A0(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n){this.comparator=e,this.root=n||Bt.EMPTY}insert(e,n){return new nt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Bt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Bt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new kc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new kc(this.root,e,this.comparator,!1)}getReverseIterator(){return new kc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new kc(this.root,e,this.comparator,!0)}}class kc{constructor(e,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=n?s(e.key,n):1,n&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Bt{constructor(e,n,s,o,u){this.key=e,this.value=n,this.color=s??Bt.RED,this.left=o??Bt.EMPTY,this.right=u??Bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,o,u){return new Bt(e??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return Bt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ee();const e=this.left.check();if(e!==this.right.check())throw Ee();return e+(this.isRed()?0:1)}}Bt.EMPTY=null,Bt.RED=!0,Bt.BLACK=!1;Bt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee()}get value(){throw Ee()}get color(){throw Ee()}get left(){throw Ee()}get right(){throw Ee()}copy(e,n,s,o,u){return this}insert(e,n,s){return new Bt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yv(this.data.getIterator())}getIteratorFrom(e){return new Yv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof It)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new It(this.comparator);return n.data=e,n}}class Yv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.fields=e,e.sort(jt.comparator)}static empty(){return new Gn([])}unionWith(e){let n=new It(jt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Gn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ro(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new S0("Invalid base64 string: "+u):u}}(e);return new Ht(n)}static fromUint8Array(e){const n=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(e);return new Ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ht.EMPTY_BYTE_STRING=new Ht("");const IO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rs(r){if(Ge(!!r),typeof r=="string"){let e=0;const n=IO.exec(r);if(Ge(!!n),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ht(r.seconds),nanos:ht(r.nanos)}}function ht(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ss(r){return typeof r=="string"?Ht.fromBase64String(r):Ht.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0="server_timestamp",b0="__type__",R0="__previous_value__",I0="__local_write_time__";function sp(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[b0])===null||n===void 0?void 0:n.stringValue)===w0}function Oh(r){const e=r.mapValue.fields[R0];return sp(e)?Oh(e):e}function Kl(r){const e=rs(r.mapValue.fields[I0].timestampValue);return new Rt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e,n,s,o,u,f,m,p,y){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=y}}const lh="(default)";class $l{constructor(e,n){this.projectId=e,this.database=n||lh}static empty(){return new $l("","")}get isDefaultDatabase(){return this.database===lh}isEqual(e){return e instanceof $l&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0="__type__",DO="__max__",xc={mapValue:{}},D0="__vector__",uh="value";function as(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?sp(r)?4:NO(r)?9007199254740991:OO(r)?10:11:Ee()}function vi(r,e){if(r===e)return!0;const n=as(r);if(n!==as(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Kl(r).isEqual(Kl(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=rs(o.timestampValue),m=rs(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,u){return ss(o.bytesValue).isEqual(ss(u.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,u){return ht(o.geoPointValue.latitude)===ht(u.geoPointValue.latitude)&&ht(o.geoPointValue.longitude)===ht(u.geoPointValue.longitude)}(r,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return ht(o.integerValue)===ht(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=ht(o.doubleValue),m=ht(u.doubleValue);return f===m?oh(f)===oh(m):isNaN(f)&&isNaN(m)}return!1}(r,e);case 9:return ro(r.arrayValue.values||[],e.arrayValue.values||[],vi);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Qv(f)!==Qv(m))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(m[p]===void 0||!vi(f[p],m[p])))return!1;return!0}(r,e);default:return Ee()}}function Ql(r,e){return(r.values||[]).find(n=>vi(n,e))!==void 0}function so(r,e){if(r===e)return 0;const n=as(r),s=as(e);if(n!==s)return Pe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pe(r.booleanValue,e.booleanValue);case 2:return function(u,f){const m=ht(u.integerValue||u.doubleValue),p=ht(f.integerValue||f.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1}(r,e);case 3:return Xv(r.timestampValue,e.timestampValue);case 4:return Xv(Kl(r),Kl(e));case 5:return Pe(r.stringValue,e.stringValue);case 6:return function(u,f){const m=ss(u),p=ss(f);return m.compareTo(p)}(r.bytesValue,e.bytesValue);case 7:return function(u,f){const m=u.split("/"),p=f.split("/");for(let y=0;y<m.length&&y<p.length;y++){const E=Pe(m[y],p[y]);if(E!==0)return E}return Pe(m.length,p.length)}(r.referenceValue,e.referenceValue);case 8:return function(u,f){const m=Pe(ht(u.latitude),ht(f.latitude));return m!==0?m:Pe(ht(u.longitude),ht(f.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Wv(r.arrayValue,e.arrayValue);case 10:return function(u,f){var m,p,y,E;const w=u.fields||{},D=f.fields||{},k=(m=w[uh])===null||m===void 0?void 0:m.arrayValue,z=(p=D[uh])===null||p===void 0?void 0:p.arrayValue,Q=Pe(((y=k==null?void 0:k.values)===null||y===void 0?void 0:y.length)||0,((E=z==null?void 0:z.values)===null||E===void 0?void 0:E.length)||0);return Q!==0?Q:Wv(k,z)}(r.mapValue,e.mapValue);case 11:return function(u,f){if(u===xc.mapValue&&f===xc.mapValue)return 0;if(u===xc.mapValue)return 1;if(f===xc.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),y=f.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let w=0;w<p.length&&w<E.length;++w){const D=Pe(p[w],E[w]);if(D!==0)return D;const k=so(m[p[w]],y[E[w]]);if(k!==0)return k}return Pe(p.length,E.length)}(r.mapValue,e.mapValue);default:throw Ee()}}function Xv(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Pe(r,e);const n=rs(r),s=rs(e),o=Pe(n.seconds,s.seconds);return o!==0?o:Pe(n.nanos,s.nanos)}function Wv(r,e){const n=r.values||[],s=e.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=so(n[o],s[o]);if(u)return u}return Pe(n.length,s.length)}function ao(r){return vm(r)}function vm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=rs(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return ss(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return ge.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=vm(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${vm(n.fields[f])}`;return o+"}"}(r.mapValue):Ee()}function Kc(r){switch(as(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Oh(r);return e?16+Kc(e):16;case 5:return 2*r.stringValue.length;case 6:return ss(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Kc(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return ea(s.fields,(u,f)=>{o+=u.length+Kc(f)}),o}(r.mapValue);default:throw Ee()}}function Em(r){return!!r&&"integerValue"in r}function ap(r){return!!r&&"arrayValue"in r}function Zv(r){return!!r&&"nullValue"in r}function Jv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function $c(r){return!!r&&"mapValue"in r}function OO(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[C0])===null||n===void 0?void 0:n.stringValue)===D0}function Ll(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return ea(r.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ll(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ll(r.arrayValue.values[n]);return e}return Object.assign({},r)}function NO(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===DO}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.value=e}static empty(){return new xn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!$c(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ll(n)}setAll(e){let n=jt.emptyPath(),s={},o=[];e.forEach((f,m)=>{if(!n.isImmediateParentOf(m)){const p=this.getFieldsMap(n);this.applyChanges(p,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=Ll(f):o.push(m.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(e){const n=this.field(e.popLast());$c(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=n.mapValue.fields[e.get(s)];$c(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,s){ea(n,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new xn(Ll(this.value))}}function O0(r){const e=[];return ea(r.fields,(n,s)=>{const o=new jt([n]);if($c(s)){const u=O0(s.mapValue).fields;if(u.length===0)e.push(o);else for(const f of u)e.push(o.child(f))}else e.push(o)}),new Gn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n,s,o,u,f,m){this.key=e,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(e){return new Qt(e,0,Te.min(),Te.min(),Te.min(),xn.empty(),0)}static newFoundDocument(e,n,s,o){return new Qt(e,1,n,Te.min(),s,o,0)}static newNoDocument(e,n){return new Qt(e,2,n,Te.min(),Te.min(),xn.empty(),0)}static newUnknownDocument(e,n){return new Qt(e,3,n,Te.min(),Te.min(),xn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,n){this.position=e,this.inclusive=n}}function eE(r,e,n){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],f=r.position[o];if(u.field.isKeyField()?s=ge.comparator(ge.fromName(f.referenceValue),n.key):s=so(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function tE(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!vi(r.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,n="asc"){this.field=e,this.dir=n}}function MO(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{}class bt extends N0{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new PO(e,n,s):n==="array-contains"?new LO(e,s):n==="in"?new UO(e,s):n==="not-in"?new zO(e,s):n==="array-contains-any"?new BO(e,s):new bt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new kO(e,s):new xO(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(so(n,this.value)):n!==null&&as(this.value)===as(n)&&this.matchesComparison(so(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ei extends N0{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Ei(e,n)}matches(e){return M0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function M0(r){return r.op==="and"}function V0(r){return VO(r)&&M0(r)}function VO(r){for(const e of r.filters)if(e instanceof Ei)return!1;return!0}function Tm(r){if(r instanceof bt)return r.field.canonicalString()+r.op.toString()+ao(r.value);if(V0(r))return r.filters.map(e=>Tm(e)).join(",");{const e=r.filters.map(n=>Tm(n)).join(",");return`${r.op}(${e})`}}function P0(r,e){return r instanceof bt?function(s,o){return o instanceof bt&&s.op===o.op&&s.field.isEqual(o.field)&&vi(s.value,o.value)}(r,e):r instanceof Ei?function(s,o){return o instanceof Ei&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,m)=>u&&P0(f,o.filters[m]),!0):!1}(r,e):void Ee()}function k0(r){return r instanceof bt?function(n){return`${n.field.canonicalString()} ${n.op} ${ao(n.value)}`}(r):r instanceof Ei?function(n){return n.op.toString()+" {"+n.getFilters().map(k0).join(" ,")+"}"}(r):"Filter"}class PO extends bt{constructor(e,n,s){super(e,n,s),this.key=ge.fromName(s.referenceValue)}matches(e){const n=ge.comparator(e.key,this.key);return this.matchesComparison(n)}}class kO extends bt{constructor(e,n){super(e,"in",n),this.keys=x0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class xO extends bt{constructor(e,n){super(e,"not-in",n),this.keys=x0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function x0(r,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ge.fromName(s.referenceValue))}class LO extends bt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ap(n)&&Ql(n.arrayValue,this.value)}}class UO extends bt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ql(this.value.arrayValue,n)}}class zO extends bt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ql(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ql(this.value.arrayValue,n)}}class BO extends bt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ap(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ql(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e,n=null,s=[],o=[],u=null,f=null,m=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.le=null}}function nE(r,e=null,n=[],s=[],o=null,u=null,f=null){return new jO(r,e,n,s,o,u,f)}function op(r){const e=Se(r);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Tm(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Dh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ao(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ao(s)).join(",")),e.le=n}return e.le}function lp(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!MO(r.orderBy[n],e.orderBy[n]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!P0(r.filters[n],e.filters[n]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!tE(r.startAt,e.startAt)&&tE(r.endAt,e.endAt)}function Am(r){return ge.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,n=null,s=[],o=[],u=null,f="F",m=null,p=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=p,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function HO(r,e,n,s,o,u,f,m){return new Nh(r,e,n,s,o,u,f,m)}function up(r){return new Nh(r)}function iE(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function qO(r){return r.collectionGroup!==null}function Ul(r){const e=Se(r);if(e.he===null){e.he=[];const n=new Set;for(const u of e.explicitOrderBy)e.he.push(u),n.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new It(jt.comparator);return f.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(m=m.add(y.field))})}),m})(e).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||e.he.push(new hh(u,s))}),n.has(jt.keyField().canonicalString())||e.he.push(new hh(jt.keyField(),s))}return e.he}function gi(r){const e=Se(r);return e.Pe||(e.Pe=FO(e,Ul(r))),e.Pe}function FO(r,e){if(r.limitType==="F")return nE(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new hh(o.field,u)});const n=r.endAt?new ch(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new ch(r.startAt.position,r.startAt.inclusive):null;return nE(r.path,r.collectionGroup,e,r.filters,r.limit,n,s)}}function Sm(r,e,n){return new Nh(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,n,r.startAt,r.endAt)}function Mh(r,e){return lp(gi(r),gi(e))&&r.limitType===e.limitType}function L0(r){return`${op(gi(r))}|lt:${r.limitType}`}function Ya(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>k0(o)).join(", ")}]`),Dh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>ao(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>ao(o)).join(",")),`Target(${s})`}(gi(r))}; limitType=${r.limitType})`}function Vh(r,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ge.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,e)&&function(s,o){for(const u of Ul(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(f,m,p){const y=eE(f,m,p);return f.inclusive?y<=0:y<0}(s.startAt,Ul(s),o)||s.endAt&&!function(f,m,p){const y=eE(f,m,p);return f.inclusive?y>=0:y>0}(s.endAt,Ul(s),o))}(r,e)}function GO(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function U0(r){return(e,n)=>{let s=!1;for(const o of Ul(r)){const u=KO(o,e,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function KO(r,e,n){const s=r.field.isKeyField()?ge.comparator(e.key,n.key):function(u,f,m){const p=f.data.field(u),y=m.data.field(u);return p!==null&&y!==null?so(p,y):Ee()}(r.field,e,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ea(this.inner,(n,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return A0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O=new nt(ge.comparator);function sr(){return $O}const z0=new nt(ge.comparator);function Vl(...r){let e=z0;for(const n of r)e=e.insert(n.key,n);return e}function B0(r){let e=z0;return r.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Gs(){return zl()}function j0(){return zl()}function zl(){return new ta(r=>r.toString(),(r,e)=>r.isEqual(e))}const QO=new nt(ge.comparator),YO=new It(ge.comparator);function Me(...r){let e=YO;for(const n of r)e=e.add(n);return e}const XO=new It(Pe);function WO(){return XO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oh(e)?"-0":e}}function H0(r){return{integerValue:""+r}}function ZO(r,e){return wO(e)?H0(e):cp(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(){this._=void 0}}function JO(r,e,n){return r instanceof Yl?function(o,u){const f={fields:{[b0]:{stringValue:w0},[I0]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&sp(u)&&(u=Oh(u)),u&&(f.fields[R0]=u),{mapValue:f}}(n,e):r instanceof Xl?F0(r,e):r instanceof Wl?G0(r,e):function(o,u){const f=q0(o,u),m=rE(f)+rE(o.Ie);return Em(f)&&Em(o.Ie)?H0(m):cp(o.serializer,m)}(r,e)}function e2(r,e,n){return r instanceof Xl?F0(r,e):r instanceof Wl?G0(r,e):n}function q0(r,e){return r instanceof fh?function(s){return Em(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Yl extends Ph{}class Xl extends Ph{constructor(e){super(),this.elements=e}}function F0(r,e){const n=K0(e);for(const s of r.elements)n.some(o=>vi(o,s))||n.push(s);return{arrayValue:{values:n}}}class Wl extends Ph{constructor(e){super(),this.elements=e}}function G0(r,e){let n=K0(e);for(const s of r.elements)n=n.filter(o=>!vi(o,s));return{arrayValue:{values:n}}}class fh extends Ph{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function rE(r){return ht(r.integerValue||r.doubleValue)}function K0(r){return ap(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e,n){this.field=e,this.transform=n}}function n2(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof Xl&&o instanceof Xl||s instanceof Wl&&o instanceof Wl?ro(s.elements,o.elements,vi):s instanceof fh&&o instanceof fh?vi(s.Ie,o.Ie):s instanceof Yl&&o instanceof Yl}(r.transform,e.transform)}class i2{constructor(e,n){this.version=e,this.transformResults=n}}class er{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new er}static exists(e){return new er(void 0,e)}static updateTime(e){return new er(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qc(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class kh{}function $0(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Y0(r.key,er.none()):new ou(r.key,r.data,er.none());{const n=r.data,s=xn.empty();let o=new It(jt.comparator);for(let u of e.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new na(r.key,s,new Gn(o.toArray()),er.none())}}function r2(r,e,n){r instanceof ou?function(o,u,f){const m=o.value.clone(),p=aE(o.fieldTransforms,u,f.transformResults);m.setAll(p),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(r,e,n):r instanceof na?function(o,u,f){if(!Qc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=aE(o.fieldTransforms,u,f.transformResults),p=u.data;p.setAll(Q0(o)),p.setAll(m),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,e,n):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,e,n)}function Bl(r,e,n,s){return r instanceof ou?function(u,f,m,p){if(!Qc(u.precondition,f))return m;const y=u.value.clone(),E=oE(u.fieldTransforms,p,f);return y.setAll(E),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,e,n,s):r instanceof na?function(u,f,m,p){if(!Qc(u.precondition,f))return m;const y=oE(u.fieldTransforms,p,f),E=f.data;return E.setAll(Q0(u)),E.setAll(y),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(w=>w.field))}(r,e,n,s):function(u,f,m){return Qc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(r,e,n)}function s2(r,e){let n=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=q0(s.transform,o||null);u!=null&&(n===null&&(n=xn.empty()),n.set(s.field,u))}return n||null}function sE(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&ro(s,o,(u,f)=>n2(u,f))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class ou extends kh{constructor(e,n,s,o=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class na extends kh{constructor(e,n,s,o,u=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Q0(r){const e=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);e.set(n,s)}}),e}function aE(r,e,n){const s=new Map;Ge(r.length===n.length);for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,m=e.data.field(u.field);s.set(u.field,e2(f,m,n[o]))}return s}function oE(r,e,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,JO(u,f,e))}return s}class Y0 extends kh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class a2 extends kh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e,n,s,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&r2(u,e,s[o])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Bl(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Bl(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=j0();return this.mutations.forEach(o=>{const u=e.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const p=$0(f,m);p!==null&&s.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(Te.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Me())}isEqual(e){return this.batchId===e.batchId&&ro(this.mutations,e.mutations,(n,s)=>sE(n,s))&&ro(this.baseMutations,e.baseMutations,(n,s)=>sE(n,s))}}class hp{constructor(e,n,s,o){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(e,n,s){Ge(e.mutations.length===s.length);let o=function(){return QO}();const u=e.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new hp(e,n,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt,Ue;function c2(r){switch(r){case te.OK:return Ee();case te.CANCELLED:case te.UNKNOWN:case te.DEADLINE_EXCEEDED:case te.RESOURCE_EXHAUSTED:case te.INTERNAL:case te.UNAVAILABLE:case te.UNAUTHENTICATED:return!1;case te.INVALID_ARGUMENT:case te.NOT_FOUND:case te.ALREADY_EXISTS:case te.PERMISSION_DENIED:case te.FAILED_PRECONDITION:case te.ABORTED:case te.OUT_OF_RANGE:case te.UNIMPLEMENTED:case te.DATA_LOSS:return!0;default:return Ee()}}function X0(r){if(r===void 0)return rr("GRPC error has no .code"),te.UNKNOWN;switch(r){case yt.OK:return te.OK;case yt.CANCELLED:return te.CANCELLED;case yt.UNKNOWN:return te.UNKNOWN;case yt.DEADLINE_EXCEEDED:return te.DEADLINE_EXCEEDED;case yt.RESOURCE_EXHAUSTED:return te.RESOURCE_EXHAUSTED;case yt.INTERNAL:return te.INTERNAL;case yt.UNAVAILABLE:return te.UNAVAILABLE;case yt.UNAUTHENTICATED:return te.UNAUTHENTICATED;case yt.INVALID_ARGUMENT:return te.INVALID_ARGUMENT;case yt.NOT_FOUND:return te.NOT_FOUND;case yt.ALREADY_EXISTS:return te.ALREADY_EXISTS;case yt.PERMISSION_DENIED:return te.PERMISSION_DENIED;case yt.FAILED_PRECONDITION:return te.FAILED_PRECONDITION;case yt.ABORTED:return te.ABORTED;case yt.OUT_OF_RANGE:return te.OUT_OF_RANGE;case yt.UNIMPLEMENTED:return te.UNIMPLEMENTED;case yt.DATA_LOSS:return te.DATA_LOSS;default:return Ee()}}(Ue=yt||(yt={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h2(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2=new es([4294967295,4294967295],0);function lE(r){const e=h2().encode(r),n=new d0;return n.update(e),new Uint8Array(n.digest())}function uE(r){const e=new DataView(r.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new es([n,s],0),new es([o,u],0)]}class fp{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Pl(`Invalid padding: ${n}`);if(s<0)throw new Pl(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Pl(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Pl(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=es.fromNumber(this.Ee)}Ae(e,n,s){let o=e.add(n.multiply(es.fromNumber(s)));return o.compare(f2)===1&&(o=new es([o.getBits(0),o.getBits(1)],0)),o.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=lE(e),[s,o]=uE(n);for(let u=0;u<this.hashCount;u++){const f=this.Ae(s,o,u);if(!this.Re(f))return!1}return!0}static create(e,n,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),f=new fp(u,o,n);return s.forEach(m=>f.insert(m)),f}insert(e){if(this.Ee===0)return;const n=lE(e),[s,o]=uE(n);for(let u=0;u<this.hashCount;u++){const f=this.Ae(s,o,u);this.Ve(f)}}Ve(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Pl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n,s,o,u){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const o=new Map;return o.set(e,lu.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new xh(Te.min(),o,new nt(Pe),sr(),Me())}}class lu{constructor(e,n,s,o,u){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new lu(s,n,Me(),Me(),Me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,n,s,o){this.me=e,this.removedTargetIds=n,this.key=s,this.fe=o}}class W0{constructor(e,n){this.targetId=e,this.ge=n}}class Z0{constructor(e,n,s=Ht.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=o}}class cE{constructor(){this.pe=0,this.ye=hE(),this.we=Ht.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=Me(),n=Me(),s=Me();return this.ye.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:Ee()}}),new lu(this.we,this.be,e,n,s)}Me(){this.Se=!1,this.ye=hE()}xe(e,n){this.Se=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Ge(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class d2{constructor(e){this.ke=e,this.qe=new Map,this.Qe=sr(),this.$e=Lc(),this.Ke=Lc(),this.Ue=new nt(Pe)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const s=this.He(n);switch(e.state){case 0:this.Je(n)&&s.Ce(e.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(e.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(n);break;case 3:this.Je(n)&&(s.Le(),s.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),s.Ce(e.resumeToken));break;default:Ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((s,o)=>{this.Je(o)&&n(o)})}Ze(e){const n=e.targetId,s=e.ge.count,o=this.Xe(n);if(o){const u=o.target;if(Am(u))if(s===0){const f=new ge(u.path);this.ze(n,f,Qt.newNoDocument(f,Te.min()))}else Ge(s===1);else{const f=this.et(n);if(f!==s){const m=this.tt(e),p=m?this.nt(m,e,f):1;if(p!==0){this.Ye(n);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(n,y)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=ss(s).toUint8Array()}catch(p){if(p instanceof S0)return io("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new fp(f,o,u)}catch(p){return io(p instanceof Pl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.Ee===0?null:m}nt(e,n,s){return n.ge.count===s-this.st(e,n.targetId)?0:2}st(e,n){const s=this.ke.getRemoteKeysForTarget(n);let o=0;return s.forEach(u=>{const f=this.ke.it(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.ze(n,u,null),o++)}),o}ot(e){const n=new Map;this.qe.forEach((u,f)=>{const m=this.Xe(f);if(m){if(u.current&&Am(m.target)){const p=new ge(m.target.path);this._t(p).has(f)||this.ut(f,p)||this.ze(f,p,Qt.newNoDocument(p,e))}u.ve&&(n.set(f,u.Fe()),u.Me())}});let s=Me();this.Ke.forEach((u,f)=>{let m=!0;f.forEachWhile(p=>{const y=this.Xe(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.Qe.forEach((u,f)=>f.setReadTime(e));const o=new xh(e,n,this.Ue,this.Qe,s);return this.Qe=sr(),this.$e=Lc(),this.Ke=Lc(),this.Ue=new nt(Pe),o}Ge(e,n){if(!this.Je(e))return;const s=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,s),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ke=this.Ke.insert(n.key,this.ct(n.key).add(e))}ze(e,n,s){if(!this.Je(e))return;const o=this.He(e);this.ut(e,n)?o.xe(n,1):o.Oe(n),this.Ke=this.Ke.insert(n,this.ct(n).delete(e)),this.Ke=this.Ke.insert(n,this.ct(n).add(e)),s&&(this.Qe=this.Qe.insert(n,s))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new cE,this.qe.set(e,n)),n}ct(e){let n=this.Ke.get(e);return n||(n=new It(Pe),this.Ke=this.Ke.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new It(Pe),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||oe("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new cE),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function Lc(){return new nt(ge.comparator)}function hE(){return new nt(ge.comparator)}const m2={asc:"ASCENDING",desc:"DESCENDING"},p2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},g2={and:"AND",or:"OR"};class y2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function wm(r,e){return r.useProto3Json||Dh(e)?e:{value:e}}function dh(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function J0(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function _2(r,e){return dh(r,e.toTimestamp())}function yi(r){return Ge(!!r),Te.fromTimestamp(function(n){const s=rs(n);return new Rt(s.seconds,s.nanos)}(r))}function dp(r,e){return bm(r,e).canonicalString()}function bm(r,e){const n=function(o){return new lt(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?n:n.child(e)}function eA(r){const e=lt.fromString(r);return Ge(sA(e)),e}function Rm(r,e){return dp(r.databaseId,e.path)}function im(r,e){const n=eA(e);if(n.get(1)!==r.databaseId.projectId)throw new pe(te.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new pe(te.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new ge(nA(n))}function tA(r,e){return dp(r.databaseId,e)}function v2(r){const e=eA(r);return e.length===4?lt.emptyPath():nA(e)}function Im(r){return new lt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function nA(r){return Ge(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function fE(r,e,n){return{name:Rm(r,e),fields:n.value.mapValue.fields}}function E2(r,e){let n;if("targetChange"in e){e.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(y,E){return y.useProto3Json?(Ge(E===void 0||typeof E=="string"),Ht.fromBase64String(E||"")):(Ge(E===void 0||E instanceof Buffer||E instanceof Uint8Array),Ht.fromUint8Array(E||new Uint8Array))}(r,e.targetChange.resumeToken),f=e.targetChange.cause,m=f&&function(y){const E=y.code===void 0?te.UNKNOWN:X0(y.code);return new pe(E,y.message||"")}(f);n=new Z0(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=im(r,s.document.name),u=yi(s.document.updateTime),f=s.document.createTime?yi(s.document.createTime):Te.min(),m=new xn({mapValue:{fields:s.document.fields}}),p=Qt.newFoundDocument(o,u,f,m),y=s.targetIds||[],E=s.removedTargetIds||[];n=new Yc(y,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=im(r,s.document),u=s.readTime?yi(s.readTime):Te.min(),f=Qt.newNoDocument(o,u),m=s.removedTargetIds||[];n=new Yc([],m,f.key,f)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=im(r,s.document),u=s.removedTargetIds||[];n=new Yc([],u,o,null)}else{if(!("filter"in e))return Ee();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new u2(o,u),m=s.targetId;n=new W0(m,f)}}return n}function T2(r,e){let n;if(e instanceof ou)n={update:fE(r,e.key,e.value)};else if(e instanceof Y0)n={delete:Rm(r,e.key)};else if(e instanceof na)n={update:fE(r,e.key,e.data),updateMask:O2(e.fieldMask)};else{if(!(e instanceof a2))return Ee();n={verify:Rm(r,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(u,f){const m=f.transform;if(m instanceof Yl)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Xl)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Wl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof fh)return{fieldPath:f.field.canonicalString(),increment:m.Ie};throw Ee()}(0,s))),e.precondition.isNone||(n.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:_2(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Ee()}(r,e.precondition)),n}function A2(r,e){return r&&r.length>0?(Ge(e!==void 0),r.map(n=>function(o,u){let f=o.updateTime?yi(o.updateTime):yi(u);return f.isEqual(Te.min())&&(f=yi(u)),new i2(f,o.transformResults||[])}(n,e))):[]}function S2(r,e){return{documents:[tA(r,e.path)]}}function w2(r,e){const n={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=tA(r,o);const u=function(y){if(y.length!==0)return rA(Ei.create(y,"and"))}(e.filters);u&&(n.structuredQuery.where=u);const f=function(y){if(y.length!==0)return y.map(E=>function(D){return{field:Xa(D.field),direction:I2(D.dir)}}(E))}(e.orderBy);f&&(n.structuredQuery.orderBy=f);const m=wm(r,e.limit);return m!==null&&(n.structuredQuery.limit=m),e.startAt&&(n.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ht:n,parent:o}}function b2(r){let e=v2(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){Ge(s===1);const E=n.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];n.where&&(u=function(w){const D=iA(w);return D instanceof Ei&&V0(D)?D.getFilters():[D]}(n.where));let f=[];n.orderBy&&(f=function(w){return w.map(D=>function(z){return new hh(Wa(z.field),function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(z.direction))}(D))}(n.orderBy));let m=null;n.limit&&(m=function(w){let D;return D=typeof w=="object"?w.value:w,Dh(D)?null:D}(n.limit));let p=null;n.startAt&&(p=function(w){const D=!!w.before,k=w.values||[];return new ch(k,D)}(n.startAt));let y=null;return n.endAt&&(y=function(w){const D=!w.before,k=w.values||[];return new ch(k,D)}(n.endAt)),HO(e,o,f,u,m,"F",p,y)}function R2(r,e){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function iA(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Wa(n.unaryFilter.field);return bt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Wa(n.unaryFilter.field);return bt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Wa(n.unaryFilter.field);return bt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Wa(n.unaryFilter.field);return bt.create(f,"!=",{nullValue:"NULL_VALUE"});default:return Ee()}}(r):r.fieldFilter!==void 0?function(n){return bt.create(Wa(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return Ei.create(n.compositeFilter.filters.map(s=>iA(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ee()}}(n.compositeFilter.op))}(r):Ee()}function I2(r){return m2[r]}function C2(r){return p2[r]}function D2(r){return g2[r]}function Xa(r){return{fieldPath:r.canonicalString()}}function Wa(r){return jt.fromServerFormat(r.fieldPath)}function rA(r){return r instanceof bt?function(n){if(n.op==="=="){if(Jv(n.value))return{unaryFilter:{field:Xa(n.field),op:"IS_NAN"}};if(Zv(n.value))return{unaryFilter:{field:Xa(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Jv(n.value))return{unaryFilter:{field:Xa(n.field),op:"IS_NOT_NAN"}};if(Zv(n.value))return{unaryFilter:{field:Xa(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xa(n.field),op:C2(n.op),value:n.value}}}(r):r instanceof Ei?function(n){const s=n.getFilters().map(o=>rA(o));return s.length===1?s[0]:{compositeFilter:{op:D2(n.op),filters:s}}}(r):Ee()}function O2(r){const e=[];return r.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function sA(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n,s,o,u=Te.min(),f=Te.min(),m=Ht.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(e){return new Wr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e){this.Tt=e}}function M2(r){const e=b2({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Sm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(){this.Tn=new P2}addToCollectionParentIndex(e,n){return this.Tn.add(n),X.resolve()}getCollectionParents(e,n){return X.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return X.resolve()}deleteFieldIndex(e,n){return X.resolve()}deleteAllFieldIndexes(e){return X.resolve()}createTargetIndexes(e,n){return X.resolve()}getDocumentsMatchingTarget(e,n){return X.resolve(null)}getIndexType(e,n){return X.resolve(0)}getFieldIndexes(e,n){return X.resolve([])}getNextCollectionGroupToUpdate(e){return X.resolve(null)}getMinOffset(e,n){return X.resolve(is.min())}getMinOffsetFromCollectionGroup(e,n){return X.resolve(is.min())}updateCollectionGroup(e,n,s){return X.resolve()}updateIndexEntries(e,n){return X.resolve()}}class P2{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n]||new It(lt.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(e){return(this.index[e]||new It(lt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},aA=41943040;class ln{static withCacheSize(e){return new ln(e,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln.DEFAULT_COLLECTION_PERCENTILE=10,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ln.DEFAULT=new ln(aA,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ln.DISABLED=new ln(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new oo(0)}static Un(){return new oo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE="LruGarbageCollector",k2=1048576;function pE([r,e],[n,s]){const o=Pe(r,n);return o===0?Pe(e,s):o}class x2{constructor(e){this.Hn=e,this.buffer=new It(pE),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();pE(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class L2{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){oe(mE,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){vo(n)?oe(mE,"Ignoring IndexedDB error during garbage collection: ",n):await _o(n)}await this.er(3e5)})}}class U2{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return X.resolve(Ch.ae);const s=new x2(n);return this.tr.forEachTarget(e,o=>s.Zn(o.sequenceNumber)).next(()=>this.tr.rr(e,o=>s.Zn(o))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.tr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),X.resolve(dE)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),dE):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let s,o,u,f,m,p,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,f=Date.now(),this.nthSequenceNumber(e,o))).next(w=>(s=w,m=Date.now(),this.removeTargets(e,s,n))).next(w=>(u=w,p=Date.now(),this.removeOrphanedDocuments(e,s))).next(w=>(y=Date.now(),Qa()<=Ne.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${w} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),X.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:w})))}}function z2(r,e){return new U2(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(){this.changes=new ta(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Qt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?X.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e,n,s,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,n))).next(o=>(s!==null&&Bl(s.mutation,o,Gn.empty(),Rt.now()),o))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Me()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Me()){const o=Gs();return this.populateOverlays(e,o,n).next(()=>this.computeViews(e,n,o,s).next(u=>{let f=Vl();return u.forEach((m,p)=>{f=f.insert(m,p.overlayedDocument)}),f}))}getOverlayedDocuments(e,n){const s=Gs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Me()))}populateOverlays(e,n,s){const o=[];return s.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((f,m)=>{n.set(f,m)})})}computeViews(e,n,s,o){let u=sr();const f=zl(),m=function(){return zl()}();return n.forEach((p,y)=>{const E=s.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof na)?u=u.insert(y.key,y):E!==void 0?(f.set(y.key,E.mutation.getFieldMask()),Bl(E.mutation,y,E.mutation.getFieldMask(),Rt.now())):f.set(y.key,Gn.empty())}),this.recalculateAndSaveOverlays(e,u).next(p=>(p.forEach((y,E)=>f.set(y,E)),n.forEach((y,E)=>{var w;return m.set(y,new j2(E,(w=f.get(y))!==null&&w!==void 0?w:null))}),m))}recalculateAndSaveOverlays(e,n){const s=zl();let o=new nt((f,m)=>f-m),u=Me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(f=>{for(const m of f)m.keys().forEach(p=>{const y=n.get(p);if(y===null)return;let E=s.get(p)||Gn.empty();E=m.applyToLocalView(y,E),s.set(p,E);const w=(o.get(m.batchId)||Me()).add(p);o=o.insert(m.batchId,w)})}).next(()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),y=p.key,E=p.value,w=j0();E.forEach(D=>{if(!u.has(D)){const k=$0(n.get(D),s.get(D));k!==null&&w.set(D,k),u=u.add(D)}}),f.push(this.documentOverlayCache.saveOverlays(e,y,w))}return X.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,o){return function(f){return ge.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):qO(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,o):this.getDocumentsMatchingCollectionQuery(e,n,s,o)}getNextDocuments(e,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,o-u.size):X.resolve(Gs());let m=Gl,p=u;return f.next(y=>X.forEach(y,(E,w)=>(m<w.largestBatchId&&(m=w.largestBatchId),u.get(E)?X.resolve():this.remoteDocumentCache.getEntry(e,E).next(D=>{p=p.insert(E,D)}))).next(()=>this.populateOverlays(e,y,u)).next(()=>this.computeViews(e,p,y,Me())).next(E=>({batchId:m,changes:B0(E)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ge(n)).next(s=>{let o=Vl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,n,s,o){const u=n.collectionGroup;let f=Vl();return this.indexManager.getCollectionParents(e,u).next(m=>X.forEach(m,p=>{const y=function(w,D){return new Nh(D,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(n,p.child(u));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next(E=>{E.forEach((w,D)=>{f=f.insert(w,D)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(e,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,u,o))).next(f=>{u.forEach((p,y)=>{const E=y.getKey();f.get(E)===null&&(f=f.insert(E,Qt.newInvalidDocument(E)))});let m=Vl();return f.forEach((p,y)=>{const E=u.get(p);E!==void 0&&Bl(E.mutation,y,Gn.empty(),Rt.now()),Vh(n,y)&&(m=m.insert(p,y))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return X.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:yi(o.createTime)}}(n)),X.resolve()}getNamedQuery(e,n){return X.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(o){return{name:o.name,query:M2(o.bundledQuery),readTime:yi(o.readTime)}}(n)),X.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(){this.overlays=new nt(ge.comparator),this.Rr=new Map}getOverlay(e,n){return X.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Gs();return X.forEach(n,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((o,u)=>{this.Et(e,n,u)}),X.resolve()}removeOverlaysForBatchId(e,n,s){const o=this.Rr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Rr.delete(s)),X.resolve()}getOverlaysForCollection(e,n,s){const o=Gs(),u=n.length+1,f=new ge(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const p=m.getNext().value,y=p.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&p.largestBatchId>s&&o.set(p.getKey(),p)}return X.resolve(o)}getOverlaysForCollectionGroup(e,n,s,o){let u=new nt((y,E)=>y-E);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let E=u.get(y.largestBatchId);E===null&&(E=Gs(),u=u.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const m=Gs(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,E)=>m.set(y,E)),!(m.size()>=o)););return X.resolve(m)}Et(e,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.Rr.get(o.largestBatchId).delete(s.key);this.Rr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new l2(n,s));let u=this.Rr.get(n);u===void 0&&(u=Me(),this.Rr.set(n,u)),this.Rr.set(n,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(){this.sessionToken=Ht.EMPTY_BYTE_STRING}getSessionToken(e){return X.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,X.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(){this.Vr=new It(kt.mr),this.gr=new It(kt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const s=new kt(e,n);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.wr(new kt(e,n))}br(e,n){e.forEach(s=>this.removeReference(s,n))}Sr(e){const n=new ge(new lt([])),s=new kt(n,e),o=new kt(n,e+1),u=[];return this.gr.forEachInRange([s,o],f=>{this.wr(f),u.push(f.key)}),u}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new ge(new lt([])),s=new kt(n,e),o=new kt(n,e+1);let u=Me();return this.gr.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(e){const n=new kt(e,0),s=this.Vr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class kt{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return ge.comparator(e.key,n.key)||Pe(e.Cr,n.Cr)}static pr(e,n){return Pe(e.Cr,n.Cr)||ge.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new It(kt.mr)}checkEmpty(e){return X.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,o){const u=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new o2(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Mr=this.Mr.add(new kt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return X.resolve(f)}lookupMutationBatch(e,n){return X.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,o=this.Nr(s),u=o<0?0:o;return X.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.mutationQueue.length===0?rp:this.Fr-1)}getAllMutationBatches(e){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new kt(n,0),o=new kt(n,Number.POSITIVE_INFINITY),u=[];return this.Mr.forEachInRange([s,o],f=>{const m=this.Or(f.Cr);u.push(m)}),X.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new It(Pe);return n.forEach(o=>{const u=new kt(o,0),f=new kt(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([u,f],m=>{s=s.add(m.Cr)})}),X.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,o=s.length+1;let u=s;ge.isDocumentKey(u)||(u=u.child(""));const f=new kt(new ge(u),0);let m=new It(Pe);return this.Mr.forEachWhile(p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(m=m.add(p.Cr)),!0)},f),X.resolve(this.Br(m))}Br(e){const n=[];return e.forEach(s=>{const o=this.Or(s);o!==null&&n.push(o)}),n}removeMutationBatch(e,n){Ge(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return X.forEach(n.mutations,o=>{const u=new kt(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,n){const s=new kt(n,0),o=this.Mr.firstAfterOrEqual(s);return X.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,X.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e){this.kr=e,this.docs=function(){return new nt(ge.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.kr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return X.resolve(s?s.document.mutableCopy():Qt.newInvalidDocument(n))}getEntries(e,n){let s=sr();return n.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Qt.newInvalidDocument(o))}),X.resolve(s)}getDocumentsMatchingQuery(e,n,s,o){let u=sr();const f=n.path,m=new ge(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||EO(vO(E),s)<=0||(o.has(E.key)||Vh(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return X.resolve(u)}getAllFromCollectionGroup(e,n,s,o){Ee()}qr(e,n){return X.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Q2(this)}getSize(e){return X.resolve(this.size)}}class Q2 extends B2{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Ir.addEntry(e,o)):this.Ir.removeEntry(s)}),X.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(e){this.persistence=e,this.Qr=new ta(n=>op(n),lp),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.$r=0,this.Kr=new mp,this.targetCount=0,this.Ur=oo.Kn()}forEachTarget(e,n){return this.Qr.forEach((s,o)=>n(o)),X.resolve()}getLastRemoteSnapshotVersion(e){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return X.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.$r&&(this.$r=n),X.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ur=new oo(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,X.resolve()}updateTargetData(e,n){return this.zn(n),X.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Kr.Sr(n.targetId),this.targetCount-=1,X.resolve()}removeTargets(e,n,s){let o=0;const u=[];return this.Qr.forEach((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.Qr.delete(f),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),X.waitFor(u).next(()=>o)}getTargetCount(e){return X.resolve(this.targetCount)}getTargetData(e,n){const s=this.Qr.get(n)||null;return X.resolve(s)}addMatchingKeys(e,n,s){return this.Kr.yr(n,s),X.resolve()}removeMatchingKeys(e,n,s){this.Kr.br(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(f=>{u.push(o.markPotentiallyOrphaned(e,f))}),X.waitFor(u)}removeMatchingKeysForTargetId(e,n){return this.Kr.Sr(n),X.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Kr.vr(n);return X.resolve(s)}containsKey(e,n){return X.resolve(this.Kr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Ch(0),this.zr=!1,this.zr=!0,this.jr=new G2,this.referenceDelegate=e(this),this.Hr=new Y2(this),this.indexManager=new V2,this.remoteDocumentCache=function(o){return new $2(o)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new N2(n),this.Yr=new q2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new F2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Wr[e.toKey()];return s||(s=new K2(n,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,s){oe("MemoryPersistence","Starting transaction:",e);const o=new X2(this.Gr.next());return this.referenceDelegate.Zr(),s(o).next(u=>this.referenceDelegate.Xr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}ei(e,n){return X.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,n)))}}class X2 extends AO{constructor(e){super(),this.currentSequenceNumber=e}}class pp{constructor(e){this.persistence=e,this.ti=new mp,this.ni=null}static ri(e){return new pp(e)}get ii(){if(this.ni)return this.ni;throw Ee()}addReference(e,n,s){return this.ti.addReference(s,n),this.ii.delete(s.toString()),X.resolve()}removeReference(e,n,s){return this.ti.removeReference(s,n),this.ii.add(s.toString()),X.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),X.resolve()}removeTarget(e,n){this.ti.Sr(n.targetId).forEach(o=>this.ii.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(o=>{o.forEach(u=>this.ii.add(u.toString()))}).next(()=>s.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.ii,s=>{const o=ge.fromPath(s);return this.si(e,o).next(u=>{u||n.removeEntry(o,Te.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(s=>{s?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return X.or([()=>X.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class mh{constructor(e,n){this.persistence=e,this.oi=new ta(s=>bO(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=z2(this,n)}static ri(e,n){return new mh(e,n)}Zr(){}Xr(e){return X.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(o=>s+o))}sr(e){let n=0;return this.rr(e,s=>{n++}).next(()=>n)}rr(e,n){return X.forEach(this.oi,(s,o)=>this.ar(e,s,o).next(u=>u?X.resolve():n(o)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.qr(e,f=>this.ar(e,f,n).next(m=>{m||(s++,u.removeEntry(f,Te.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),X.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.oi.set(s,e.currentSequenceNumber),X.resolve()}removeReference(e,n,s){return this.oi.set(s,e.currentSequenceNumber),X.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),X.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Kc(e.data.value)),n}ar(e,n,s){return X.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.oi.get(n);return X.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n,s,o){this.targetId=e,this.fromCache=n,this.Hi=s,this.Ji=o}static Yi(e,n){let s=Me(),o=Me();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new gp(e,n.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return oR()?8:SO(Yt())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,s,o){const u={result:null};return this.rs(e,n).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.ss(e,n,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new W2;return this._s(e,n,f).next(m=>{if(u.result=m,this.Xi)return this.us(e,n,f,m.size)})}).next(()=>u.result)}us(e,n,s,o){return s.documentReadCount<this.es?(Qa()<=Ne.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",Ya(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),X.resolve()):(Qa()<=Ne.DEBUG&&oe("QueryEngine","Query:",Ya(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ts*o?(Qa()<=Ne.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",Ya(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gi(n))):X.resolve())}rs(e,n){if(iE(n))return X.resolve(null);let s=gi(n);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=Sm(n,null,"F"),s=gi(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const f=Me(...u);return this.ns.getDocuments(e,f).next(m=>this.indexManager.getMinOffset(e,s).next(p=>{const y=this.cs(n,m);return this.ls(n,y,f,p.readTime)?this.rs(e,Sm(n,null,"F")):this.hs(e,y,n,p)}))})))}ss(e,n,s,o){return iE(n)||o.isEqual(Te.min())?X.resolve(null):this.ns.getDocuments(e,s).next(u=>{const f=this.cs(n,u);return this.ls(n,f,s,o)?X.resolve(null):(Qa()<=Ne.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ya(n)),this.hs(e,f,n,_O(o,Gl)).next(m=>m))})}cs(e,n){let s=new It(U0(e));return n.forEach((o,u)=>{Vh(e,u)&&(s=s.add(u))}),s}ls(e,n,s,o){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const u=e.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}_s(e,n,s){return Qa()<=Ne.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",Ya(n)),this.ns.getDocumentsMatchingQuery(e,n,is.min(),s)}hs(e,n,s,o){return this.ns.getDocumentsMatchingQuery(e,s,o).next(u=>(n.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="LocalStore",J2=3e8;class eN{constructor(e,n,s,o){this.persistence=e,this.Ps=n,this.serializer=o,this.Ts=new nt(Pe),this.Is=new ta(u=>op(u),lp),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new H2(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function tN(r,e,n,s){return new eN(r,e,n,s)}async function lA(r,e){const n=Se(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,n.As(e),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],m=[];let p=Me();for(const y of o){f.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of u){m.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return n.localDocuments.getDocuments(s,p).next(y=>({Rs:y,removedBatchIds:f,addedBatchIds:m}))})})}function nN(r,e){const n=Se(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=n.ds.newChangeBuffer({trackRemovals:!0});return function(m,p,y,E){const w=y.batch,D=w.keys();let k=X.resolve();return D.forEach(z=>{k=k.next(()=>E.getEntry(p,z)).next(Q=>{const H=y.docVersions.get(z);Ge(H!==null),Q.version.compareTo(H)<0&&(w.applyToRemoteDocument(Q,y),Q.isValidDocument()&&(Q.setReadTime(y.commitVersion),E.addEntry(Q)))})}),k.next(()=>m.mutationQueue.removeMutationBatch(p,w))}(n,s,e,u).next(()=>u.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let p=Me();for(let y=0;y<m.mutationResults.length;++y)m.mutationResults[y].transformResults.length>0&&(p=p.add(m.batch.mutations[y].key));return p}(e))).next(()=>n.localDocuments.getDocuments(s,o))})}function uA(r){const e=Se(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function iN(r,e){const n=Se(r),s=e.snapshotVersion;let o=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=n.ds.newChangeBuffer({trackRemovals:!0});o=n.Ts;const m=[];e.targetChanges.forEach((E,w)=>{const D=o.get(w);if(!D)return;m.push(n.Hr.removeMatchingKeys(u,E.removedDocuments,w).next(()=>n.Hr.addMatchingKeys(u,E.addedDocuments,w)));let k=D.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(w)!==null?k=k.withResumeToken(Ht.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):E.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(E.resumeToken,s)),o=o.insert(w,k),function(Q,H,$){return Q.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=J2?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(D,k,E)&&m.push(n.Hr.updateTargetData(u,k))});let p=sr(),y=Me();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))}),m.push(rN(u,f,e.documentUpdates).next(E=>{p=E.Vs,y=E.fs})),!s.isEqual(Te.min())){const E=n.Hr.getLastRemoteSnapshotVersion(u).next(w=>n.Hr.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(E)}return X.waitFor(m).next(()=>f.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,p,y)).next(()=>p)}).then(u=>(n.Ts=o,u))}function rN(r,e,n){let s=Me(),o=Me();return n.forEach(u=>s=s.add(u)),e.getEntries(r,s).next(u=>{let f=sr();return n.forEach((m,p)=>{const y=u.get(m);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(Te.min())?(e.removeEntry(m,p.readTime),f=f.insert(m,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),f=f.insert(m,p)):oe(yp,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",p.version)}),{Vs:f,fs:o}})}function sN(r,e){const n=Se(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=rp),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function aN(r,e){const n=Se(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.Hr.getTargetData(s,e).next(u=>u?(o=u,X.resolve(o)):n.Hr.allocateTargetId(s).next(f=>(o=new Wr(e,f,"TargetPurposeListen",s.currentSequenceNumber),n.Hr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.Ts.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(s.targetId,s),n.Is.set(e,s.targetId)),s})}async function Cm(r,e,n){const s=Se(r),o=s.Ts.get(e),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!vo(f))throw f;oe(yp,`Failed to update sequence numbers for target ${e}: ${f}`)}s.Ts=s.Ts.remove(e),s.Is.delete(o.target)}function gE(r,e,n){const s=Se(r);let o=Te.min(),u=Me();return s.persistence.runTransaction("Execute query","readwrite",f=>function(p,y,E){const w=Se(p),D=w.Is.get(E);return D!==void 0?X.resolve(w.Ts.get(D)):w.Hr.getTargetData(y,E)}(s,f,gi(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(f,m.targetId).next(p=>{u=p})}).next(()=>s.Ps.getDocumentsMatchingQuery(f,e,n?o:Te.min(),n?u:Me())).next(m=>(oN(s,GO(e),m),{documents:m,gs:u})))}function oN(r,e,n){let s=r.Es.get(e)||Te.min();n.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.Es.set(e,s)}class yE{constructor(){this.activeTargetIds=WO()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lN{constructor(){this.ho=new yE,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,s){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new yE,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E="ConnectivityMonitor";class vE{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){oe(_E,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){oe(_E,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uc=null;function Dm(){return Uc===null?Uc=function(){return 268435456+Math.round(2147483648*Math.random())}():Uc++,"0x"+Uc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="RestConnection",cN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class hN{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${s}/databases/${o}`,this.wo=this.databaseId.database===lh?`project_id=${s}`:`project_id=${s}&database_id=${o}`}bo(e,n,s,o,u){const f=Dm(),m=this.So(e,n.toUriEncodedString());oe(rm,`Sending RPC '${e}' ${f}:`,m,s);const p={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(p,o,u),this.vo(e,m,p,s).then(y=>(oe(rm,`Received RPC '${e}' ${f}: `,y),y),y=>{throw io(rm,`RPC '${e}' ${f} failed with error: `,y,"url: ",m,"request:",s),y})}Co(e,n,s,o,u,f){return this.bo(e,n,s,o,u)}Do(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+yo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}So(e,n){const s=cN[e];return`${this.po}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="WebChannelConnection";class dN extends hN{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,s,o){const u=Dm();return new Promise((f,m)=>{const p=new m0;p.setWithCredentials(!0),p.listenOnce(p0.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Gc.NO_ERROR:const E=p.getResponseJson();oe(Kt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),f(E);break;case Gc.TIMEOUT:oe(Kt,`RPC '${e}' ${u} timed out`),m(new pe(te.DEADLINE_EXCEEDED,"Request time out"));break;case Gc.HTTP_ERROR:const w=p.getStatus();if(oe(Kt,`RPC '${e}' ${u} failed with status:`,w,"response text:",p.getResponseText()),w>0){let D=p.getResponseJson();Array.isArray(D)&&(D=D[0]);const k=D==null?void 0:D.error;if(k&&k.status&&k.message){const z=function(H){const $=H.toLowerCase().replace(/_/g,"-");return Object.values(te).indexOf($)>=0?$:te.UNKNOWN}(k.status);m(new pe(z,k.message))}else m(new pe(te.UNKNOWN,"Server responded with status "+p.getStatus()))}else m(new pe(te.UNAVAILABLE,"Connection failed."));break;default:Ee()}}finally{oe(Kt,`RPC '${e}' ${u} completed.`)}});const y=JSON.stringify(o);oe(Kt,`RPC '${e}' ${u} sending request:`,o),p.send(n,"POST",y,s,15)})}Wo(e,n,s){const o=Dm(),u=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=_0(),m=y0(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Do(p.initMessageHeaders,n,s),p.encodeInitMessageHeaders=!0;const E=u.join("");oe(Kt,`Creating RPC '${e}' stream ${o}: ${E}`,p);const w=f.createWebChannel(E,p);let D=!1,k=!1;const z=new fN({Fo:H=>{k?oe(Kt,`Not sending because RPC '${e}' stream ${o} is closed:`,H):(D||(oe(Kt,`Opening RPC '${e}' stream ${o} transport.`),w.open(),D=!0),oe(Kt,`RPC '${e}' stream ${o} sending:`,H),w.send(H))},Mo:()=>w.close()}),Q=(H,$,ne)=>{H.listen($,Z=>{try{ne(Z)}catch(me){setTimeout(()=>{throw me},0)}})};return Q(w,Ml.EventType.OPEN,()=>{k||(oe(Kt,`RPC '${e}' stream ${o} transport opened.`),z.Qo())}),Q(w,Ml.EventType.CLOSE,()=>{k||(k=!0,oe(Kt,`RPC '${e}' stream ${o} transport closed`),z.Ko())}),Q(w,Ml.EventType.ERROR,H=>{k||(k=!0,io(Kt,`RPC '${e}' stream ${o} transport errored:`,H),z.Ko(new pe(te.UNAVAILABLE,"The operation could not be completed")))}),Q(w,Ml.EventType.MESSAGE,H=>{var $;if(!k){const ne=H.data[0];Ge(!!ne);const Z=ne,me=(Z==null?void 0:Z.error)||(($=Z[0])===null||$===void 0?void 0:$.error);if(me){oe(Kt,`RPC '${e}' stream ${o} received error:`,me);const ue=me.status;let we=function(S){const I=yt[S];if(I!==void 0)return X0(I)}(ue),M=me.message;we===void 0&&(we=te.INTERNAL,M="Unknown error status: "+ue+" with message "+me.message),k=!0,z.Ko(new pe(we,M)),w.close()}else oe(Kt,`RPC '${e}' stream ${o} received:`,ne),z.Uo(ne)}}),Q(m,g0.STAT_EVENT,H=>{H.stat===_m.PROXY?oe(Kt,`RPC '${e}' stream ${o} detected buffering proxy`):H.stat===_m.NOPROXY&&oe(Kt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{z.$o()},0),z}}function sm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(r){return new y2(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,n,s=1e3,o=1.5,u=6e4){this.Ti=e,this.timerId=n,this.Go=s,this.zo=o,this.jo=u,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),o=Math.max(0,n-s);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE="PersistentStream";class hA{constructor(e,n,s,o,u,f,m,p){this.Ti=e,this.n_=s,this.r_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new cA(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===te.RESOURCE_EXHAUSTED?(rr(n.toString()),rr("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===te.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.i_===n&&this.V_(s,o)},s=>{e(()=>{const o=new pe(te.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(o)})})}V_(e,n){const s=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{s(()=>this.m_(o))}),this.stream.onMessage(o=>{s(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return oe(EE,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(oe(EE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mN extends hA{constructor(e,n,s,o,u,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=E2(this.serializer,e),s=function(u){if(!("targetChange"in u))return Te.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?Te.min():f.readTime?yi(f.readTime):Te.min()}(e);return this.listener.p_(n,s)}y_(e){const n={};n.database=Im(this.serializer),n.addTarget=function(u,f){let m;const p=f.target;if(m=Am(p)?{documents:S2(u,p)}:{query:w2(u,p).ht},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=J0(u,f.resumeToken);const y=wm(u,f.expectedCount);y!==null&&(m.expectedCount=y)}else if(f.snapshotVersion.compareTo(Te.min())>0){m.readTime=dh(u,f.snapshotVersion.toTimestamp());const y=wm(u,f.expectedCount);y!==null&&(m.expectedCount=y)}return m}(this.serializer,e);const s=R2(this.serializer,e);s&&(n.labels=s),this.I_(n)}w_(e){const n={};n.database=Im(this.serializer),n.removeTarget=e,this.I_(n)}}class pN extends hA{constructor(e,n,s,o,u,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Ge(!!e.streamToken),this.lastStreamToken=e.streamToken,Ge(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=A2(e.writeResults,e.commitTime),s=yi(e.commitTime);return this.listener.v_(s,n)}C_(){const e={};e.database=Im(this.serializer),this.I_(e)}S_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>T2(this.serializer,s))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{}class yN extends gN{constructor(e,n,s,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new pe(te.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.bo(e,bm(n,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new pe(te.UNKNOWN,u.toString())})}Co(e,n,s,o,u){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.Co(e,bm(n,s),o,f,m,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new pe(te.UNKNOWN,f.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class _N{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(rr(n),this.N_=!1):oe("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws="RemoteStore";class vN{constructor(e,n,s,o,u){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=u,this.z_.To(f=>{s.enqueueAndForget(async()=>{ia(this)&&(oe(Ws,"Restarting streams for network reachability change."),await async function(p){const y=Se(p);y.W_.add(4),await uu(y),y.j_.set("Unknown"),y.W_.delete(4),await Uh(y)}(this))})}),this.j_=new _N(s,o)}}async function Uh(r){if(ia(r))for(const e of r.G_)await e(!0)}async function uu(r){for(const e of r.G_)await e(!1)}function fA(r,e){const n=Se(r);n.U_.has(e.targetId)||(n.U_.set(e.targetId,e),Tp(n)?Ep(n):Eo(n).c_()&&vp(n,e))}function _p(r,e){const n=Se(r),s=Eo(n);n.U_.delete(e),s.c_()&&dA(n,e),n.U_.size===0&&(s.c_()?s.P_():ia(n)&&n.j_.set("Unknown"))}function vp(r,e){if(r.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Eo(r).y_(e)}function dA(r,e){r.H_.Ne(e),Eo(r).w_(e)}function Ep(r){r.H_=new d2({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>r.U_.get(e)||null,it:()=>r.datastore.serializer.databaseId}),Eo(r).start(),r.j_.B_()}function Tp(r){return ia(r)&&!Eo(r).u_()&&r.U_.size>0}function ia(r){return Se(r).W_.size===0}function mA(r){r.H_=void 0}async function EN(r){r.j_.set("Online")}async function TN(r){r.U_.forEach((e,n)=>{vp(r,e)})}async function AN(r,e){mA(r),Tp(r)?(r.j_.q_(e),Ep(r)):r.j_.set("Unknown")}async function SN(r,e,n){if(r.j_.set("Online"),e instanceof Z0&&e.state===2&&e.cause)try{await async function(o,u){const f=u.cause;for(const m of u.targetIds)o.U_.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.U_.delete(m),o.H_.removeTarget(m))}(r,e)}catch(s){oe(Ws,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ph(r,s)}else if(e instanceof Yc?r.H_.We(e):e instanceof W0?r.H_.Ze(e):r.H_.je(e),!n.isEqual(Te.min()))try{const s=await uA(r.localStore);n.compareTo(s)>=0&&await function(u,f){const m=u.H_.ot(f);return m.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=u.U_.get(y);E&&u.U_.set(y,E.withResumeToken(p.resumeToken,f))}}),m.targetMismatches.forEach((p,y)=>{const E=u.U_.get(p);if(!E)return;u.U_.set(p,E.withResumeToken(Ht.EMPTY_BYTE_STRING,E.snapshotVersion)),dA(u,p);const w=new Wr(E.target,p,y,E.sequenceNumber);vp(u,w)}),u.remoteSyncer.applyRemoteEvent(m)}(r,n)}catch(s){oe(Ws,"Failed to raise snapshot:",s),await ph(r,s)}}async function ph(r,e,n){if(!vo(e))throw e;r.W_.add(1),await uu(r),r.j_.set("Offline"),n||(n=()=>uA(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{oe(Ws,"Retrying IndexedDB access"),await n(),r.W_.delete(1),await Uh(r)})}function pA(r,e){return e().catch(n=>ph(r,n,e))}async function zh(r){const e=Se(r),n=os(e);let s=e.K_.length>0?e.K_[e.K_.length-1].batchId:rp;for(;wN(e);)try{const o=await sN(e.localStore,s);if(o===null){e.K_.length===0&&n.P_();break}s=o.batchId,bN(e,o)}catch(o){await ph(e,o)}gA(e)&&yA(e)}function wN(r){return ia(r)&&r.K_.length<10}function bN(r,e){r.K_.push(e);const n=os(r);n.c_()&&n.b_&&n.S_(e.mutations)}function gA(r){return ia(r)&&!os(r).u_()&&r.K_.length>0}function yA(r){os(r).start()}async function RN(r){os(r).C_()}async function IN(r){const e=os(r);for(const n of r.K_)e.S_(n.mutations)}async function CN(r,e,n){const s=r.K_.shift(),o=hp.from(s,e,n);await pA(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await zh(r)}async function DN(r,e){e&&os(r).b_&&await async function(s,o){if(function(f){return c2(f)&&f!==te.ABORTED}(o.code)){const u=s.K_.shift();os(s).h_(),await pA(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await zh(s)}}(r,e),gA(r)&&yA(r)}async function TE(r,e){const n=Se(r);n.asyncQueue.verifyOperationInProgress(),oe(Ws,"RemoteStore received new credentials");const s=ia(n);n.W_.add(3),await uu(n),s&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await Uh(n)}async function ON(r,e){const n=Se(r);e?(n.W_.delete(2),await Uh(n)):e||(n.W_.add(2),await uu(n),n.j_.set("Unknown"))}function Eo(r){return r.J_||(r.J_=function(n,s,o){const u=Se(n);return u.M_(),new mN(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{xo:EN.bind(null,r),No:TN.bind(null,r),Lo:AN.bind(null,r),p_:SN.bind(null,r)}),r.G_.push(async e=>{e?(r.J_.h_(),Tp(r)?Ep(r):r.j_.set("Unknown")):(await r.J_.stop(),mA(r))})),r.J_}function os(r){return r.Y_||(r.Y_=function(n,s,o){const u=Se(n);return u.M_(),new pN(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:RN.bind(null,r),Lo:DN.bind(null,r),D_:IN.bind(null,r),v_:CN.bind(null,r)}),r.G_.push(async e=>{e?(r.Y_.h_(),await zh(r)):(await r.Y_.stop(),r.K_.length>0&&(oe(Ws,`Stopping write stream with ${r.K_.length} pending writes`),r.K_=[]))})),r.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,n,s,o,u){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new ts,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,u){const f=Date.now()+s,m=new Ap(e,n,f,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new pe(te.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sp(r,e){if(rr("AsyncQueue",`${e}: ${r}`),vo(r))return new pe(te.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{static emptySet(e){return new no(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||ge.comparator(n.key,s.key):(n,s)=>ge.comparator(n.key,s.key),this.keyedMap=Vl(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof no)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new no;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(){this.Z_=new nt(ge.comparator)}track(e){const n=e.doc.key,s=this.Z_.get(n);s?e.type!==0&&s.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&s.type!==1?this.Z_=this.Z_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Z_=this.Z_.remove(n):e.type===1&&s.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):Ee():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,s)=>{e.push(s)}),e}}class lo{constructor(e,n,s,o,u,f,m,p,y){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,n,s,o,u){const f=[];return n.forEach(m=>{f.push({type:0,doc:m})}),new lo(e,n,no.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class MN{constructor(){this.queries=SE(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,s){const o=Se(n),u=o.queries;o.queries=SE(),u.forEach((f,m)=>{for(const p of m.ta)p.onError(s)})})(this,new pe(te.ABORTED,"Firestore shutting down"))}}function SE(){return new ta(r=>L0(r),Mh)}async function VN(r,e){const n=Se(r);let s=3;const o=e.query;let u=n.queries.get(o);u?!u.na()&&e.ra()&&(s=2):(u=new NN,s=e.ra()?0:1);try{switch(s){case 0:u.ea=await n.onListen(o,!0);break;case 1:u.ea=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=Sp(f,`Initialization of query '${Ya(e.query)}' failed`);return void e.onError(m)}n.queries.set(o,u),u.ta.push(e),e.sa(n.onlineState),u.ea&&e.oa(u.ea)&&wp(n)}async function PN(r,e){const n=Se(r),s=e.query;let o=3;const u=n.queries.get(s);if(u){const f=u.ta.indexOf(e);f>=0&&(u.ta.splice(f,1),u.ta.length===0?o=e.ra()?0:1:!u.na()&&e.ra()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function kN(r,e){const n=Se(r);let s=!1;for(const o of e){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.ta)m.oa(o)&&(s=!0);f.ea=o}}s&&wp(n)}function xN(r,e,n){const s=Se(r),o=s.queries.get(e);if(o)for(const u of o.ta)u.onError(n);s.queries.delete(e)}function wp(r){r.ia.forEach(e=>{e.next()})}var Om,wE;(wE=Om||(Om={}))._a="default",wE.Cache="cache";class LN{constructor(e,n,s){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new lo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const s=n!=="Offline";return(!this.options.Ta||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Om.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.key=e}}class vA{constructor(e){this.key=e}}class UN{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Me(),this.mutatedKeys=Me(),this.ya=U0(e),this.wa=new no(this.ya)}get ba(){return this.fa}Sa(e,n){const s=n?n.Da:new AE,o=n?n.wa:this.wa;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,w)=>{const D=o.get(E),k=Vh(this.query,w)?w:null,z=!!D&&this.mutatedKeys.has(D.key),Q=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let H=!1;D&&k?D.data.isEqual(k.data)?z!==Q&&(s.track({type:3,doc:k}),H=!0):this.va(D,k)||(s.track({type:2,doc:k}),H=!0,(p&&this.ya(k,p)>0||y&&this.ya(k,y)<0)&&(m=!0)):!D&&k?(s.track({type:0,doc:k}),H=!0):D&&!k&&(s.track({type:1,doc:D}),H=!0,(p||y)&&(m=!0)),H&&(k?(f=f.add(k),u=Q?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{wa:f,Da:s,ls:m,mutatedKeys:u}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,o){const u=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const f=e.Da.X_();f.sort((E,w)=>function(k,z){const Q=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee()}};return Q(k)-Q(z)}(E.type,w.type)||this.ya(E.doc,w.doc)),this.Ca(s),o=o!=null&&o;const m=n&&!o?this.Fa():[],p=this.pa.size===0&&this.current&&!o?1:0,y=p!==this.ga;return this.ga=p,f.length!==0||y?{snapshot:new lo(this.query,e.wa,u,f,e.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:m}:{Ma:m}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new AE,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Me(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const n=[];return e.forEach(s=>{this.pa.has(s)||n.push(new vA(s))}),this.pa.forEach(s=>{e.has(s)||n.push(new _A(s))}),n}Oa(e){this.fa=e.gs,this.pa=Me();const n=this.Sa(e.documents);return this.applyChanges(n,!0)}Na(){return lo.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const bp="SyncEngine";class zN{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class BN{constructor(e){this.key=e,this.Ba=!1}}class jN{constructor(e,n,s,o,u,f){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.La={},this.ka=new ta(m=>L0(m),Mh),this.qa=new Map,this.Qa=new Set,this.$a=new nt(ge.comparator),this.Ka=new Map,this.Ua=new mp,this.Wa={},this.Ga=new Map,this.za=oo.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function HN(r,e,n=!0){const s=bA(r);let o;const u=s.ka.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Na()):o=await EA(s,e,n,!0),o}async function qN(r,e){const n=bA(r);await EA(n,e,!0,!1)}async function EA(r,e,n,s){const o=await aN(r.localStore,gi(e)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await FN(r,e,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&fA(r.remoteStore,o),m}async function FN(r,e,n,s,o){r.Ha=(w,D,k)=>async function(Q,H,$,ne){let Z=H.view.Sa($);Z.ls&&(Z=await gE(Q.localStore,H.query,!1).then(({documents:M})=>H.view.Sa(M,Z)));const me=ne&&ne.targetChanges.get(H.targetId),ue=ne&&ne.targetMismatches.get(H.targetId)!=null,we=H.view.applyChanges(Z,Q.isPrimaryClient,me,ue);return RE(Q,H.targetId,we.Ma),we.snapshot}(r,w,D,k);const u=await gE(r.localStore,e,!0),f=new UN(e,u.gs),m=f.Sa(u.documents),p=lu.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=f.applyChanges(m,r.isPrimaryClient,p);RE(r,n,y.Ma);const E=new zN(e,n,f);return r.ka.set(e,E),r.qa.has(n)?r.qa.get(n).push(e):r.qa.set(n,[e]),y.snapshot}async function GN(r,e,n){const s=Se(r),o=s.ka.get(e),u=s.qa.get(o.targetId);if(u.length>1)return s.qa.set(o.targetId,u.filter(f=>!Mh(f,e))),void s.ka.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Cm(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&_p(s.remoteStore,o.targetId),Nm(s,o.targetId)}).catch(_o)):(Nm(s,o.targetId),await Cm(s.localStore,o.targetId,!0))}async function KN(r,e){const n=Se(r),s=n.ka.get(e),o=n.qa.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),_p(n.remoteStore,s.targetId))}async function $N(r,e,n){const s=eM(r);try{const o=await function(f,m){const p=Se(f),y=Rt.now(),E=m.reduce((k,z)=>k.add(z.key),Me());let w,D;return p.persistence.runTransaction("Locally write mutations","readwrite",k=>{let z=sr(),Q=Me();return p.ds.getEntries(k,E).next(H=>{z=H,z.forEach(($,ne)=>{ne.isValidDocument()||(Q=Q.add($))})}).next(()=>p.localDocuments.getOverlayedDocuments(k,z)).next(H=>{w=H;const $=[];for(const ne of m){const Z=s2(ne,w.get(ne.key).overlayedDocument);Z!=null&&$.push(new na(ne.key,Z,O0(Z.value.mapValue),er.exists(!0)))}return p.mutationQueue.addMutationBatch(k,y,$,m)}).next(H=>{D=H;const $=H.applyToLocalDocumentSet(w,Q);return p.documentOverlayCache.saveOverlays(k,H.batchId,$)})}).then(()=>({batchId:D.batchId,changes:B0(w)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(f,m,p){let y=f.Wa[f.currentUser.toKey()];y||(y=new nt(Pe)),y=y.insert(m,p),f.Wa[f.currentUser.toKey()]=y}(s,o.batchId,n),await cu(s,o.changes),await zh(s.remoteStore)}catch(o){const u=Sp(o,"Failed to persist write");n.reject(u)}}async function TA(r,e){const n=Se(r);try{const s=await iN(n.localStore,e);e.targetChanges.forEach((o,u)=>{const f=n.Ka.get(u);f&&(Ge(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?f.Ba=!0:o.modifiedDocuments.size>0?Ge(f.Ba):o.removedDocuments.size>0&&(Ge(f.Ba),f.Ba=!1))}),await cu(n,s,e)}catch(s){await _o(s)}}function bE(r,e,n){const s=Se(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.ka.forEach((u,f)=>{const m=f.view.sa(e);m.snapshot&&o.push(m.snapshot)}),function(f,m){const p=Se(f);p.onlineState=m;let y=!1;p.queries.forEach((E,w)=>{for(const D of w.ta)D.sa(m)&&(y=!0)}),y&&wp(p)}(s.eventManager,e),o.length&&s.La.p_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function QN(r,e,n){const s=Se(r);s.sharedClientState.updateQueryState(e,"rejected",n);const o=s.Ka.get(e),u=o&&o.key;if(u){let f=new nt(ge.comparator);f=f.insert(u,Qt.newNoDocument(u,Te.min()));const m=Me().add(u),p=new xh(Te.min(),new Map,new nt(Pe),f,m);await TA(s,p),s.$a=s.$a.remove(u),s.Ka.delete(e),Rp(s)}else await Cm(s.localStore,e,!1).then(()=>Nm(s,e,n)).catch(_o)}async function YN(r,e){const n=Se(r),s=e.batch.batchId;try{const o=await nN(n.localStore,e);SA(n,s,null),AA(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await cu(n,o)}catch(o){await _o(o)}}async function XN(r,e,n){const s=Se(r);try{const o=await function(f,m){const p=Se(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return p.mutationQueue.lookupMutationBatch(y,m).next(w=>(Ge(w!==null),E=w.keys(),p.mutationQueue.removeMutationBatch(y,w))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,E,m)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>p.localDocuments.getDocuments(y,E))})}(s.localStore,e);SA(s,e,n),AA(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await cu(s,o)}catch(o){await _o(o)}}function AA(r,e){(r.Ga.get(e)||[]).forEach(n=>{n.resolve()}),r.Ga.delete(e)}function SA(r,e,n){const s=Se(r);let o=s.Wa[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(n?u.reject(n):u.resolve(),o=o.remove(e)),s.Wa[s.currentUser.toKey()]=o}}function Nm(r,e,n=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.qa.get(e))r.ka.delete(s),n&&r.La.Ja(s,n);r.qa.delete(e),r.isPrimaryClient&&r.Ua.Sr(e).forEach(s=>{r.Ua.containsKey(s)||wA(r,s)})}function wA(r,e){r.Qa.delete(e.path.canonicalString());const n=r.$a.get(e);n!==null&&(_p(r.remoteStore,n),r.$a=r.$a.remove(e),r.Ka.delete(n),Rp(r))}function RE(r,e,n){for(const s of n)s instanceof _A?(r.Ua.addReference(s.key,e),WN(r,s)):s instanceof vA?(oe(bp,"Document no longer in limbo: "+s.key),r.Ua.removeReference(s.key,e),r.Ua.containsKey(s.key)||wA(r,s.key)):Ee()}function WN(r,e){const n=e.key,s=n.path.canonicalString();r.$a.get(n)||r.Qa.has(s)||(oe(bp,"New document in limbo: "+n),r.Qa.add(s),Rp(r))}function Rp(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const e=r.Qa.values().next().value;r.Qa.delete(e);const n=new ge(lt.fromString(e)),s=r.za.next();r.Ka.set(s,new BN(n)),r.$a=r.$a.insert(n,s),fA(r.remoteStore,new Wr(gi(up(n.path)),s,"TargetPurposeLimboResolution",Ch.ae))}}async function cu(r,e,n){const s=Se(r),o=[],u=[],f=[];s.ka.isEmpty()||(s.ka.forEach((m,p)=>{f.push(s.Ha(p,e,n).then(y=>{var E;if((y||n)&&s.isPrimaryClient){const w=y?!y.fromCache:(E=n==null?void 0:n.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(p.targetId,w?"current":"not-current")}if(y){o.push(y);const w=gp.Yi(p.targetId,y);u.push(w)}}))}),await Promise.all(f),s.La.p_(o),await async function(p,y){const E=Se(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>X.forEach(y,D=>X.forEach(D.Hi,k=>E.persistence.referenceDelegate.addReference(w,D.targetId,k)).next(()=>X.forEach(D.Ji,k=>E.persistence.referenceDelegate.removeReference(w,D.targetId,k)))))}catch(w){if(!vo(w))throw w;oe(yp,"Failed to update sequence numbers: "+w)}for(const w of y){const D=w.targetId;if(!w.fromCache){const k=E.Ts.get(D),z=k.snapshotVersion,Q=k.withLastLimboFreeSnapshotVersion(z);E.Ts=E.Ts.insert(D,Q)}}}(s.localStore,u))}async function ZN(r,e){const n=Se(r);if(!n.currentUser.isEqual(e)){oe(bp,"User change. New user:",e.toKey());const s=await lA(n.localStore,e);n.currentUser=e,function(u,f){u.Ga.forEach(m=>{m.forEach(p=>{p.reject(new pe(te.CANCELLED,f))})}),u.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await cu(n,s.Rs)}}function JN(r,e){const n=Se(r),s=n.Ka.get(e);if(s&&s.Ba)return Me().add(s.key);{let o=Me();const u=n.qa.get(e);if(!u)return o;for(const f of u){const m=n.ka.get(f);o=o.unionWith(m.view.ba)}return o}}function bA(r){const e=Se(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=TA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=QN.bind(null,e),e.La.p_=kN.bind(null,e.eventManager),e.La.Ja=xN.bind(null,e.eventManager),e}function eM(r){const e=Se(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=YN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=XN.bind(null,e),e}class gh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Lh(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return tN(this.persistence,new Z2,e.initialUser,this.serializer)}Xa(e){return new oA(pp.ri,this.serializer)}Za(e){return new lN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gh.provider={build:()=>new gh};class tM extends gh{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Ge(this.persistence.referenceDelegate instanceof mh);const s=this.persistence.referenceDelegate.garbageCollector;return new L2(s,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?ln.withCacheSize(this.cacheSizeBytes):ln.DEFAULT;return new oA(s=>mh.ri(s,n),this.serializer)}}class Mm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>bE(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZN.bind(null,this.syncEngine),await ON(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new MN}()}createDatastore(e){const n=Lh(e.databaseInfo.databaseId),s=function(u){return new dN(u)}(e.databaseInfo);return function(u,f,m,p){return new yN(u,f,m,p)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,o,u,f,m){return new vN(s,o,u,f,m)}(this.localStore,this.datastore,e.asyncQueue,n=>bE(this.syncEngine,n,0),function(){return vE.D()?new vE:new uN}())}createSyncEngine(e,n){return function(o,u,f,m,p,y,E){const w=new jN(o,u,f,m,p,y);return E&&(w.ja=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(o){const u=Se(o);oe(Ws,"RemoteStore shutting down."),u.W_.add(5),await uu(u),u.z_.shutdown(),u.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Mm.provider={build:()=>new Mm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):rr("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls="FirestoreClient";class iM{constructor(e,n,s,o,u){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=$t.UNAUTHENTICATED,this.clientId=E0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{oe(ls,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(oe(ls,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ts;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Sp(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function am(r,e){r.asyncQueue.verifyOperationInProgress(),oe(ls,"Initializing OfflineComponentProvider");const n=r.configuration;await e.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await lA(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function IE(r,e){r.asyncQueue.verifyOperationInProgress();const n=await rM(r);oe(ls,"Initializing OnlineComponentProvider"),await e.initialize(n,r.configuration),r.setCredentialChangeListener(s=>TE(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>TE(e.remoteStore,o)),r._onlineComponents=e}async function rM(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){oe(ls,"Using user provided OfflineComponentProvider");try{await am(r,r._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(o){return o.name==="FirebaseError"?o.code===te.FAILED_PRECONDITION||o.code===te.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;io("Error using user provided cache. Falling back to memory cache: "+n),await am(r,new gh)}}else oe(ls,"Using default OfflineComponentProvider"),await am(r,new tM(void 0));return r._offlineComponents}async function RA(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(oe(ls,"Using user provided OnlineComponentProvider"),await IE(r,r._uninitializedComponentsProvider._online)):(oe(ls,"Using default OnlineComponentProvider"),await IE(r,new Mm))),r._onlineComponents}function sM(r){return RA(r).then(e=>e.syncEngine)}async function aM(r){const e=await RA(r),n=e.eventManager;return n.onListen=HN.bind(null,e.syncEngine),n.onUnlisten=GN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=qN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=KN.bind(null,e.syncEngine),n}function oM(r,e,n={}){const s=new ts;return r.asyncQueue.enqueueAndForget(async()=>function(u,f,m,p,y){const E=new nM({next:D=>{E.su(),f.enqueueAndForget(()=>PN(u,w));const k=D.docs.has(m);!k&&D.fromCache?y.reject(new pe(te.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&D.fromCache&&p&&p.source==="server"?y.reject(new pe(te.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(D)},error:D=>y.reject(D)}),w=new LN(up(m.path),E,{includeMetadataChanges:!0,Ta:!0});return VN(u,w)}(await aM(r),r.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lM(r,e,n){if(!n)throw new pe(te.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function uM(r,e,n,s){if(e===!0&&s===!0)throw new pe(te.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function DE(r){if(!ge.isDocumentKey(r))throw new pe(te.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Ip(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Ee()}function Zl(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new pe(te.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ip(r);throw new pe(te.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA="firestore.googleapis.com",OE=!0;class NE{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new pe(te.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=CA,this.ssl=OE}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:OE;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=aA;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<k2)throw new pe(te.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=IA((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new pe(te.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new pe(te.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new pe(te.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Cp{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new NE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new pe(te.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new pe(te.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new NE(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new cO;switch(s.type){case"firstParty":return new mO(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new pe(te.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=CE.get(n);s&&(oe("ComponentProvider","Removing Datastore"),CE.delete(n),s.terminate())}(this),Promise.resolve()}}function cM(r,e,n,s={}){var o;const u=(r=Zl(r,Cp))._getSettings(),f=Object.assign(Object.assign({},u),{emulatorOptions:r._getEmulatorOptions()}),m=`${e}:${n}`;u.host!==CA&&u.host!==m&&io("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},u),{host:m,ssl:!1,emulatorOptions:s});if(!ns(p,f)&&(r._setSettings(p),s.mockUserToken)){let y,E;if(typeof s.mockUserToken=="string")y=s.mockUserToken,E=$t.MOCK_USER;else{y=tR(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const w=s.mockUserToken.sub||s.mockUserToken.user_id;if(!w)throw new pe(te.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new $t(w)}r._authCredentials=new hO(new v0(y,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Dp(this.firestore,e,this._query)}}class Un{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Un(this.firestore,e,this._key)}}class Jl extends Dp{constructor(e,n,s){super(e,n,up(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Un(this.firestore,null,new ge(e))}withConverter(e){return new Jl(this.firestore,e,this._path)}}function DA(r,e,...n){if(r=rn(r),arguments.length===1&&(e=E0.newId()),lM("doc","path",e),r instanceof Cp){const s=lt.fromString(e,...n);return DE(s),new Un(r,null,new ge(s))}{if(!(r instanceof Un||r instanceof Jl))throw new pe(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(lt.fromString(e,...n));return DE(s),new Un(r.firestore,r instanceof Jl?r.converter:null,new ge(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME="AsyncQueue";class VE{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new cA(this,"async_queue_retry"),this.bu=()=>{const s=sm();s&&oe(ME,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.Su=e;const n=sm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=sm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new ts;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!vo(e))throw e;oe(ME,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.Su.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const o=function(f){let m=f.message||"";return f.stack&&(m=f.stack.includes(f.message)?f.stack:f.message+`
`+f.stack),m}(s);throw rr("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.pu=!1,s))));return this.Su=n,n}enqueueAfterDelay(e,n,s){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const o=Ap.createAndSchedule(this,e,n,s,u=>this.Fu(u));return this.fu.push(o),o}Du(){this.gu&&Ee()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class Op extends Cp{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new VE,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new VE(e),this._firestoreClient=void 0,await e}}}function hM(r,e){const n=typeof r=="object"?r:Hm(),s=typeof r=="string"?r:lh,o=Js(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Jb("firestore");u&&cM(o,...u)}return o}function OA(r){if(r._terminated)throw new pe(te.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||fM(r),r._firestoreClient}function fM(r){var e,n,s;const o=r._freezeSettings(),u=function(m,p,y,E){return new CO(m,p,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,IA(E.experimentalLongPollingOptions),E.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new iM(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(m){const p=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(p),_online:p}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new uo(Ht.fromBase64String(e))}catch(n){throw new pe(te.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new uo(Ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new pe(te.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new jt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new pe(te.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new pe(te.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dM=/^__.*__$/;class mM{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new na(e,this.data,this.fieldMask,n,this.fieldTransforms):new ou(e,this.data,n,this.fieldTransforms)}}function NA(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee()}}class kp{constructor(e,n,s,o,u,f){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Bu(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new kp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.ku({path:s,Qu:!1});return o.$u(e),o}Ku(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.ku({path:s,Qu:!1});return o.Bu(),o}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return yh(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(NA(this.Lu)&&dM.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class pM{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Lh(e)}ju(e,n,s,o=!1){return new kp({Lu:e,methodName:n,zu:s,path:jt.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gM(r){const e=r._freezeSettings(),n=Lh(r._databaseId);return new pM(r._databaseId,!!e.ignoreUndefinedProperties,n)}function yM(r,e,n,s,o,u={}){const f=r.ju(u.merge||u.mergeFields?2:0,e,n,o);kA("Data must be an object, but it was:",f,s);const m=VA(s,f);let p,y;if(u.merge)p=new Gn(f.fieldMask),y=f.fieldTransforms;else if(u.mergeFields){const E=[];for(const w of u.mergeFields){const D=_M(e,w,n);if(!f.contains(D))throw new pe(te.INVALID_ARGUMENT,`Field '${D}' is specified in your field mask but missing from your input data.`);EM(E,D)||E.push(D)}p=new Gn(E),y=f.fieldTransforms.filter(w=>p.covers(w.field))}else p=null,y=f.fieldTransforms;return new mM(new xn(m),p,y)}class xp extends Mp{_toFieldTransform(e){return new t2(e.path,new Yl)}isEqual(e){return e instanceof xp}}function MA(r,e){if(PA(r=rn(r)))return kA("Unsupported field value:",e,r),VA(r,e);if(r instanceof Mp)return function(s,o){if(!NA(o.Lu))throw o.Wu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,o){const u=[];let f=0;for(const m of s){let p=MA(m,o.Uu(f));p==null&&(p={nullValue:"NULL_VALUE"}),u.push(p),f++}return{arrayValue:{values:u}}}(r,e)}return function(s,o){if((s=rn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return ZO(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Rt.fromDate(s);return{timestampValue:dh(o.serializer,u)}}if(s instanceof Rt){const u=new Rt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:dh(o.serializer,u)}}if(s instanceof Vp)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof uo)return{bytesValue:J0(o.serializer,s._byteString)};if(s instanceof Un){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.Wu(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:dp(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Pp)return function(f,m){return{mapValue:{fields:{[C0]:{stringValue:D0},[uh]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw m.Wu("VectorValues must only contain numeric values.");return cp(m.serializer,y)})}}}}}}(s,o);throw o.Wu(`Unsupported field value: ${Ip(s)}`)}(r,e)}function VA(r,e){const n={};return A0(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ea(r,(s,o)=>{const u=MA(o,e.qu(s));u!=null&&(n[s]=u)}),{mapValue:{fields:n}}}function PA(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Rt||r instanceof Vp||r instanceof uo||r instanceof Un||r instanceof Mp||r instanceof Pp)}function kA(r,e,n){if(!PA(n)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(n)){const s=Ip(n);throw s==="an object"?e.Wu(r+" a custom object"):e.Wu(r+" "+s)}}function _M(r,e,n){if((e=rn(e))instanceof Np)return e._internalPath;if(typeof e=="string")return xA(r,e);throw yh("Field path arguments must be of type string or ",r,!1,void 0,n)}const vM=new RegExp("[~\\*/\\[\\]]");function xA(r,e,n){if(e.search(vM)>=0)throw yh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new Np(...e.split("."))._internalPath}catch{throw yh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function yh(r,e,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${e}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(u||f)&&(p+=" (found",u&&(p+=` in field ${s}`),f&&(p+=` in document ${o}`),p+=")"),new pe(te.INVALID_ARGUMENT,m+r+p)}function EM(r,e){return r.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,n,s,o,u){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Un(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(UA("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class TM extends LA{data(){return super.data()}}function UA(r,e){return typeof e=="string"?xA(r,e):e instanceof Np?e._internalPath:e._delegate._internalPath}class AM{convertValue(e,n="none"){switch(as(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ht(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return ea(e,(o,u)=>{s[o]=this.convertValue(u,n)}),s}convertVectorValue(e){var n,s,o;const u=(o=(s=(n=e.fields)===null||n===void 0?void 0:n[uh].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(f=>ht(f.doubleValue));return new Pp(u)}convertGeoPoint(e){return new Vp(ht(e.latitude),ht(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Oh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Kl(e));default:return null}}convertTimestamp(e){const n=rs(e);return new Rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=lt.fromString(e);Ge(sA(s));const o=new $l(s.get(1),s.get(3)),u=new ge(s.popFirst(5));return o.isEqual(n)||rr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SM(r,e,n){let s;return s=r?r.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zA extends LA{constructor(e,n,s,o,u,f){super(e,n,s,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new bM(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(UA("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class bM extends zA{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RM(r){r=Zl(r,Un);const e=Zl(r.firestore,Op);return oM(OA(e),r._key).then(n=>OM(e,r,n))}class IM extends AM{constructor(e){super(),this.firestore=e}convertBytes(e){return new uo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Un(this.firestore,null,n)}}function CM(r,e,n){r=Zl(r,Un);const s=Zl(r.firestore,Op),o=SM(r.converter,e);return DM(s,[yM(gM(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,er.none())])}function DM(r,e){return function(s,o){const u=new ts;return s.asyncQueue.enqueueAndForget(async()=>$N(await sM(s),o,u)),u.promise}(OA(r),e)}function OM(r,e,n){const s=n.docs.get(e._key),o=new IM(r);return new zA(r,o,e._key,s,new wM(n.hasPendingWrites,n.fromCache),e.converter)}function NM(){return new xp("serverTimestamp")}(function(e,n=!0){(function(o){yo=o})(po),_i(new $n("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new Op(new fO(s.getProvider("auth-internal")),new pO(f,s.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new pe(te.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $l(y.options.projectId,E)}(f,o),f);return u=Object.assign({useFetchStreams:n},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),Ln(jv,Hv,e),Ln(jv,Hv,"esm2017")})();const MM={apiKey:"AIzaSyAVa7tctuxJqBAxQ6NU6wWksHJ7nY4f7IM",authDomain:"psychological-app-a359c.firebaseapp.com",projectId:"psychological-app-a359c",storageBucket:"psychological-app-a359c.firebasestorage.app",messagingSenderId:"312700987588",appId:"1:312700987588:web:1336063a52ad5a08104191",measurementId:"G-V5631FJKXS"},Lp=aT(MM),co=q1(Lp);aO(Lp);const BA=hM(Lp),VM=async r=>{const e=DA(BA,"users",r),n=await RM(e);return n.exists()?n.data().role:null},jA=F.createContext(),PM=({children:r})=>{const[e,n]=F.useState(null),[s,o]=F.useState(null),[u,f]=F.useState(!0);F.useEffect(()=>{const p=MC(co,async y=>{if(n(y),y){const E=await VM(y.uid);o(E)}else console.warn("No role found for user."),o(null);f(!1)});return()=>p()},[]);const m=()=>PT(co);return ee.jsx(jA.Provider,{value:{user:e,role:s,logout:m,loading:u},children:!u&&r})},Up=()=>F.useContext(jA),kM=()=>{const[r,e]=F.useState(""),[n,s]=F.useState(""),[o,u]=F.useState(""),[f,m]=F.useState(""),p=async y=>{y.preventDefault();try{const w=(await CC(co,r,n)).user;await CM(DA(BA,"users",w.uid),{email:r,role:o,createdAt:NM()}),alert("User created successfully!")}catch(E){console.log(E),m(E.message)}};return ee.jsxs("div",{children:[ee.jsx("h2",{children:"Sign Up"}),ee.jsxs("form",{onSubmit:p,children:[ee.jsx("input",{type:"email",placeholder:"Email",value:r,onChange:y=>e(y.target.value),required:!0}),ee.jsx("input",{type:"password",placeholder:"Password",value:n,onChange:y=>s(y.target.value),required:!0}),ee.jsxs("select",{type:"role",value:o,onChange:y=>u(y.target.value),children:[ee.jsx("option",{value:"student",children:"Student"}),ee.jsx("option",{value:"parent",children:"Parent"}),ee.jsx("option",{value:"teacher",children:"Teacher"})]}),ee.jsx("button",{type:"submit",children:"Sign Up"})]}),f&&ee.jsx("p",{children:f})]})},xM=()=>{const[r,e]=F.useState(""),[n,s]=F.useState(""),[o,u]=F.useState(""),f=vh(),m=async p=>{p.preventDefault();try{await DC(co,r,n),alert("Login successful!"),f("/Home")}catch(y){u(y.message)}};return ee.jsxs("div",{className:"login-container",children:[ee.jsxs("form",{onSubmit:m,className:"login-form",children:[ee.jsxs("div",{className:"input-group",children:[ee.jsx("label",{htmlFor:"email",children:"Email"}),ee.jsx("input",{type:"email",id:"email",value:r,onChange:p=>e(p.target.value),required:!0})]}),ee.jsxs("div",{className:"input-group",children:[ee.jsx("label",{htmlFor:"pass",children:"Password"}),ee.jsx("input",{type:"password",id:"pass",value:n,onChange:p=>s(p.target.value),required:!0})]}),ee.jsx("button",{type:"submit",children:"Login"}),ee.jsxs("div",{className:"login-links",children:[ee.jsxs("p",{children:["Haven't got an account? ",ee.jsx(nn,{to:"/signup",children:"Sign up"})]}),ee.jsx("p",{children:ee.jsx(nn,{to:"/forgot-password",children:"Forgot password?"})})]})]}),o&&ee.jsx("p",{children:o})]})},LM=()=>{const{user:r,logout:e}=Up();return ee.jsxs("div",{children:[ee.jsxs("h2",{children:["Welcome, ",r==null?void 0:r.email,"!"]}),ee.jsx("button",{onClick:e,children:"Logout"})]})},UM=({children:r})=>{const{user:e}=Up();return e?r:ee.jsx(cb,{to:"/login"})},zM=()=>{console.log("Navbar is rendering...");const{user:r,role:e}=Up();return console.log("User:",r),console.log("Role:",e),ee.jsxs("nav",{className:"navbar",children:[ee.jsx("div",{className:"logo",children:"Neurodetective"}),ee.jsxs("div",{className:"nav-sections",children:[ee.jsxs("ul",{className:"nav-links",children:[ee.jsx("li",{children:ee.jsx(nn,{to:"/",children:"Home"})}),ee.jsx("li",{children:ee.jsx(nn,{to:"/about",children:"About Us"})}),ee.jsx("li",{children:ee.jsx(nn,{to:"/psychosphere",children:"PsychoSphere"})}),e==="student"&&ee.jsxs(ee.Fragment,{children:[ee.jsx("li",{children:ee.jsx(nn,{to:"/my-humor",children:"My Humor"})}),ee.jsx("li",{children:ee.jsx(nn,{to:"/games",children:"Games"})})]}),e==="parent"&&ee.jsx("li",{children:ee.jsx(nn,{to:"/child",children:"Child"})}),e==="teacher"&&ee.jsxs(ee.Fragment,{children:[ee.jsx("li",{children:ee.jsx(nn,{to:"/class",children:"Class"})}),ee.jsx("li",{children:ee.jsx(nn,{to:"/chat",children:"Chat"})})]})]}),ee.jsx("div",{className:"logout-section",children:r?ee.jsx(nn,{to:"/logout",className:"logout-button",children:"Logout"}):ee.jsx(nn,{to:"/login",children:"Login/Register"})})]})]})},BM=()=>ee.jsxs("div",{className:"home-container",children:[ee.jsx("h1",{children:"Welcome to Neurodetective"}),ee.jsx("p",{children:"Your platform for psychological insights and learning."})]}),jM=()=>ee.jsxs("div",{className:"psychosfera-container",children:[ee.jsx("h1",{children:"Welcome to PsychoSfera"}),ee.jsx("p",{children:"This is your space to explore psychology, mindfulness, and mental well-being ✨🧘‍♀️"})]}),HM=()=>{const r=vh();return F.useEffect(()=>{(async()=>{try{await PT(co),alert("Zosta�e� wylogowany!"),r("/Home")}catch(n){console.error("B��d podczas wylogowania:",n)}})()},[r]),ee.jsx("p",{children:"Wylogowywanie..."})},qM=()=>{const[r,e]=F.useState(""),[n,s]=F.useState(""),o=async u=>{u.preventDefault();try{await IC(co,r),s("Password reset email sent! Check your inbox.")}catch(f){s(f.message)}};return ee.jsx("div",{className:"forgot-password-container",children:ee.jsxs("form",{onSubmit:o,className:"forgot-password-form",children:[ee.jsx("h2",{children:"Reset Password"}),ee.jsx("p",{children:"Enter your email, and we'll send you a link to reset your password."}),ee.jsx("input",{type:"email",placeholder:"Email",value:r,onChange:u=>e(u.target.value),required:!0}),ee.jsx("button",{type:"submit",children:"Send Reset Email"}),n&&ee.jsx("p",{className:"message",children:n}),ee.jsx("p",{children:ee.jsx(nn,{to:"/login",children:"Back to Login"})})]})})};function FM(){return F.useEffect(()=>{fetch("http://localhost:8000/api/hello/").then(r=>r.json()).then(r=>console.log("API response:",r)).catch(r=>console.error("API error:",r))},[]),ee.jsx(PM,{children:ee.jsxs(kb,{children:[ee.jsx(zM,{}),ee.jsxs(fb,{children:[ee.jsx(Kr,{path:"/",element:ee.jsx(BM,{})}),ee.jsx(Kr,{path:"/signup",element:ee.jsx(kM,{})}),ee.jsx(Kr,{path:"/login",element:ee.jsx(xM,{})}),ee.jsx(Kr,{path:"/dashboard",element:ee.jsx(UM,{children:ee.jsx(LM,{})})}),ee.jsx(Kr,{path:"/psychosphere",element:ee.jsx(jM,{})}),ee.jsx(Kr,{path:"/forgot-password",element:ee.jsx(qM,{})}),ee.jsx(Kr,{path:"/Logout",element:ee.jsx(HM,{})})]})]})})}Tw.createRoot(document.getElementById("root")).render(ee.jsx(F.StrictMode,{children:ee.jsx(FM,{})}));
