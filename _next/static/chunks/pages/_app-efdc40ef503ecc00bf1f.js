(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1476:function(t,n,e){"use strict";e.r(n);var r=e(5893),o=e(4942),i=(e(3146),e(9066));function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function s(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){(0,o.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}n.default=function(t){var n=t.Component,e=t.pageProps;return(0,r.jsxs)("div",{className:"flex flex-col w-full min-h-screen bg-indigo-800 text-indigo-100",children:[(0,r.jsx)(i.x7,{position:"top-center",toastOptions:{error:{style:{background:"#e61717",color:"white",whiteSpace:"pre-line"}}}}),(0,r.jsx)(n,s({},e))]})}},6363:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return e(1476)}])},3146:function(){},9066:function(t,n,e){"use strict";e.d(n,{x7:function(){return yt},ZP:function(){return bt}});var r=e(7294);let o={data:""},i=t=>"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||o,a=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/g,s=/\/\*[^]*?\*\/|\s\s+|\n/g,u=(t,n)=>{let e,r="",o="",i="";for(let a in t){let s=t[a];"object"==typeof s?(e=n?n.replace(/([^,])+/g,(t=>a.replace(/([^,])+/g,(n=>/&/.test(n)?n.replace(/&/g,t):t?t+" "+n:n)))):a,o+="@"==a[0]?"f"==a[1]?u(s,a):a+"{"+u(s,"k"==a[1]?"":n)+"}":u(s,e)):"@"==a[0]&&"i"==a[1]?r=a+" "+s+";":(a=a.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=u.p?u.p(a,s):a+":"+s+";")}return i[0]?(e=n?n+"{"+i+"}":i,r+e+o):r+o},c={},f=t=>{let n="";for(let e in t)n+=e+("object"==typeof t[e]?f(t[e]):t[e]);return n},l=(t,n,e,r,o)=>{let i="object"==typeof t?f(t):t,l=c[i]||(c[i]=(t=>{let n=0,e=11;for(;n<t.length;)e=101*e+t.charCodeAt(n++)>>>0;return"go"+e})(i));if(!c[l]){let n="object"==typeof t?t:(t=>{let n,e=[{}];for(;n=a.exec(t.replace(s,""));)n[4]&&e.shift(),n[3]?e.unshift(e[0][n[3]]=e[0][n[3]]||{}):n[4]||(e[0][n[1]]=n[2]);return e[0]})(t);c[l]=u(o?{["@keyframes "+l]:n}:n,e?"":"."+l)}return((t,n,e)=>{-1==n.data.indexOf(t)&&(n.data=e?t+n.data:n.data+t)})(c[l],n,r),l},d=(t,n,e)=>t.reduce(((t,r,o)=>{let i=n[o];if(i&&i.call){let t=i(e),n=t&&t.props&&t.props.className||/^go/.test(t)&&t;i=n?"."+n:t&&"object"==typeof t?t.props?"":u(t,""):t}return t+r+(null==i?"":i)}),"");function p(t){let n=this||{},e=t.call?t(n.p):t;return l(e.unshift?e.raw?d(e,[].slice.call(arguments,1),n.p):e.reduce(((t,e)=>e?Object.assign(t,e.call?e(n.p):e):t),{}):e,i(n.target),n.g,n.o,n.k)}p.bind({g:1});let m,v,g,y=p.bind({k:1});function b(t,n){let e=this||{};return function(){let r=arguments;function o(i,a){let s=Object.assign({},i),u=s.className||o.className;e.p=Object.assign({theme:v&&v()},s),e.o=/ *go\d+/.test(u),s.className=p.apply(e,r)+(u?" "+u:""),n&&(s.ref=a);let c=s.as||t;return g&&c[0]&&g(s),m(c,s)}return n?n(o):o}}function h(){return(h=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function T(t,n){return n||(n=t.slice(0)),t.raw=n,t}var O,x=function(t,n){return function(t){return"function"===typeof t}(t)?t(n):t},E=function(){var t=0;return function(){return(++t).toString()}}(),S=function(){var t=void 0;return function(){if(void 0===t){var n=matchMedia("(prefers-reduced-motion: reduce)");t=!n||n.matches}return t}}();!function(t){t[t.ADD_TOAST=0]="ADD_TOAST",t[t.UPDATE_TOAST=1]="UPDATE_TOAST",t[t.UPSERT_TOAST=2]="UPSERT_TOAST",t[t.DISMISS_TOAST=3]="DISMISS_TOAST",t[t.REMOVE_TOAST=4]="REMOVE_TOAST",t[t.START_PAUSE=5]="START_PAUSE",t[t.END_PAUSE=6]="END_PAUSE"}(O||(O={}));var w=new Map,A=function(t){if(!w.has(t)){var n=setTimeout((function(){w.delete(t),D({type:O.REMOVE_TOAST,toastId:t})}),1e3);w.set(t,n)}},_=function t(n,e){switch(e.type){case O.ADD_TOAST:return h({},n,{toasts:[e.toast].concat(n.toasts).slice(0,20)});case O.UPDATE_TOAST:return e.toast.id&&function(t){var n=w.get(t);n&&clearTimeout(n)}(e.toast.id),h({},n,{toasts:n.toasts.map((function(t){return t.id===e.toast.id?h({},t,e.toast):t}))});case O.UPSERT_TOAST:var r=e.toast;return n.toasts.find((function(t){return t.id===r.id}))?t(n,{type:O.UPDATE_TOAST,toast:r}):t(n,{type:O.ADD_TOAST,toast:r});case O.DISMISS_TOAST:var o=e.toastId;return o?A(o):n.toasts.forEach((function(t){A(t.id)})),h({},n,{toasts:n.toasts.map((function(t){return t.id===o||void 0===o?h({},t,{visible:!1}):t}))});case O.REMOVE_TOAST:return void 0===e.toastId?h({},n,{toasts:[]}):h({},n,{toasts:n.toasts.filter((function(t){return t.id!==e.toastId}))});case O.START_PAUSE:return h({},n,{pausedAt:e.time});case O.END_PAUSE:var i=e.time-(n.pausedAt||0);return h({},n,{pausedAt:void 0,toasts:n.toasts.map((function(t){return h({},t,{pauseDuration:t.pauseDuration+i})}))})}},P=[],j={toasts:[],pausedAt:void 0},D=function(t){j=_(j,t),P.forEach((function(t){t(j)}))},k={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},N=function(t){return function(n,e){var r=function(t,n,e){return void 0===n&&(n="blank"),h({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},e,{id:(null==e?void 0:e.id)||E()})}(n,t,e);return D({type:O.UPSERT_TOAST,toast:r}),r.id}},U=function(t,n){return N("blank")(t,n)};U.error=N("error"),U.success=N("success"),U.loading=N("loading"),U.custom=N("custom"),U.dismiss=function(t){D({type:O.DISMISS_TOAST,toastId:t})},U.remove=function(t){return D({type:O.REMOVE_TOAST,toastId:t})},U.promise=function(t,n,e){var r=U.loading(n.loading,h({},e,null==e?void 0:e.loading));return t.then((function(t){return U.success(x(n.success,t),h({id:r},e,null==e?void 0:e.success)),t})).catch((function(t){U.error(x(n.error,t),h({id:r},e,null==e?void 0:e.error))})),t};var I=function(t){var n=function(t){void 0===t&&(t={});var n=(0,r.useState)(j),e=n[0],o=n[1];(0,r.useEffect)((function(){return P.push(o),function(){var t=P.indexOf(o);t>-1&&P.splice(t,1)}}),[e]);var i=e.toasts.map((function(n){var e,r,o;return h({},t,t[n.type],n,{duration:n.duration||(null==(e=t[n.type])?void 0:e.duration)||(null==(r=t)?void 0:r.duration)||k[n.type],style:h({},t.style,null==(o=t[n.type])?void 0:o.style,n.style)})}));return h({},e,{toasts:i})}(t),e=n.toasts,o=n.pausedAt;(0,r.useEffect)((function(){if(!o){var t=Date.now(),n=e.map((function(n){if(n.duration!==1/0){var e=(n.duration||0)+n.pauseDuration-(t-n.createdAt);if(!(e<0))return setTimeout((function(){return U.dismiss(n.id)}),e);n.visible&&U.dismiss(n.id)}}));return function(){n.forEach((function(t){return t&&clearTimeout(t)}))}}}),[e,o]);var i=(0,r.useMemo)((function(){return{startPause:function(){D({type:O.START_PAUSE,time:Date.now()})},endPause:function(){o&&D({type:O.END_PAUSE,time:Date.now()})},updateHeight:function(t,n){return D({type:O.UPDATE_TOAST,toast:{id:t,height:n}})},calculateOffset:function(t,n){var r,o=n||{},i=o.reverseOrder,a=void 0!==i&&i,s=o.gutter,u=void 0===s?8:s,c=o.defaultPosition,f=e.filter((function(n){return(n.position||c)===(t.position||c)&&n.height})),l=f.findIndex((function(n){return n.id===t.id})),d=f.filter((function(t,n){return n<l&&t.visible})).length;return(r=f.filter((function(t){return t.visible}))).slice.apply(r,a?[d+1]:[0,d]).reduce((function(t,n){return t+(n.height||0)+u}),0)}}}),[e,o]);return{toasts:e,handlers:i}};function M(){var t=T(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"]);return M=function(){return t},t}function R(){var t=T(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]);return R=function(){return t},t}function C(){var t=T(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return C=function(){return t},t}function z(){var t=T(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]);return z=function(){return t},t}var F=y(z()),V=y(C()),Z=y(R()),H=b("div")(M(),(function(t){return t.primary||"#ff4b4b"}),F,V,(function(t){return t.secondary||"#fff"}),Z);function L(){var t=T(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"]);return L=function(){return t},t}function X(){var t=T(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return X=function(){return t},t}var q=y(X()),B=b("div")(L(),(function(t){return t.secondary||"#e0e0e0"}),(function(t){return t.primary||"#616161"}),q);function Y(){var t=T(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"]);return Y=function(){return t},t}function $(){var t=T(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]);return $=function(){return t},t}function G(){var t=T(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]);return G=function(){return t},t}var J=y(G()),K=y($()),Q=b("div")(Y(),(function(t){return t.primary||"#61d345"}),J,K,(function(t){return t.secondary||"#fff"}));function W(){var t=T(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"]);return W=function(){return t},t}function tt(){var t=T(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return tt=function(){return t},t}function nt(){var t=T(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]);return nt=function(){return t},t}function et(){var t=T(["\n  position: absolute;\n"]);return et=function(){return t},t}var rt=b("div")(et()),ot=b("div")(nt()),it=y(tt()),at=b("div")(W(),it),st=function(t){var n=t.toast,e=n.icon,o=n.type,i=n.iconTheme;return void 0!==e?"string"===typeof e?(0,r.createElement)(at,null,e):e:"blank"===o?null:(0,r.createElement)(ot,null,(0,r.createElement)(B,Object.assign({},i)),"loading"!==o&&(0,r.createElement)(rt,null,"error"===o?(0,r.createElement)(H,Object.assign({},i)):(0,r.createElement)(Q,Object.assign({},i))))};function ut(){var t=T(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n"]);return ut=function(){return t},t}function ct(){var t=T(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]);return ct=function(){return t},t}var ft=function(t){return"\n0% {transform: translate3d(0,"+-200*t+"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n"},lt=function(t){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,"+-150*t+"%,-1px) scale(.6); opacity:0;}\n"},dt=b("div",r.forwardRef)(ct()),pt=b("div")(ut()),mt=(0,r.memo)((function(t){var n=t.toast,e=t.position,o=t.style,i=t.children,a=null!=n&&n.height?function(t,n){var e=t.includes("top")?1:-1,r=S()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ft(e),lt(e)],o=r[1];return{animation:n?y(r[0])+" 0.35s cubic-bezier(.21,1.02,.73,1) forwards":y(o)+" 0.4s forwards cubic-bezier(.06,.71,.55,1)"}}(n.position||e||"top-center",n.visible):{opacity:0},s=(0,r.createElement)(st,{toast:n}),u=(0,r.createElement)(pt,Object.assign({},n.ariaProps),x(n.message,n));return(0,r.createElement)(dt,{className:n.className,style:h({},a,o,n.style)},"function"===typeof i?i({icon:s,message:u}):(0,r.createElement)(r.Fragment,null,s,u))}));function vt(){var t=T(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]);return vt=function(){return t},t}!function(t,n,e,r){u.p=n,m=t,v=e,g=r}(r.createElement);var gt=p(vt()),yt=function(t){var n=t.reverseOrder,e=t.position,o=void 0===e?"top-center":e,i=t.toastOptions,a=t.gutter,s=t.children,u=t.containerStyle,c=t.containerClassName,f=I(i),l=f.toasts,d=f.handlers;return(0,r.createElement)("div",{style:h({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},u),className:c,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map((function(t){var e,i=t.position||o,u=function(t,n){var e=t.includes("top"),r=e?{top:0}:{bottom:0},o=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return h({left:0,right:0,display:"flex",position:"absolute",transition:S()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY("+n*(e?1:-1)+"px)"},r,o)}(i,d.calculateOffset(t,{reverseOrder:n,gutter:a,defaultPosition:o})),c=t.height?void 0:(e=function(n){d.updateHeight(t.id,n.height)},function(t){t&&setTimeout((function(){var n=t.getBoundingClientRect();e(n)}))});return(0,r.createElement)("div",{ref:c,className:t.visible?gt:"",key:t.id,style:u},"custom"===t.type?x(t.message,t):s?s(t):(0,r.createElement)(mt,{toast:t,position:i}))})))},bt=U},4942:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,{Z:function(){return r}})}},function(t){var n=function(n){return t(t.s=n)};t.O(0,[774,179],(function(){return n(6363),n(4651)}));var e=t.O();_N_E=e}]);