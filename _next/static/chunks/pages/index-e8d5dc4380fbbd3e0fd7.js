(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8158:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var r,i=n(5893),o=n(9008),a=n(7294);!function(e){e.RESET="RESET",e.SET_REGION="SET_REGION",e.SET_PROVINCE="SET_PROVINCE",e.SET_CITY="SET_CITY",e.SET_STREET="SET_STREET",e.SET_NUMBER_EGON="SET_NUMBER_EGON"}(r||(r={}));var c={region:"",province:"",city:"",street:"",number:"",egon:""},s=function(e,t){switch(t.type){case r.RESET:return c;case r.SET_REGION:return{region:t.payload};case r.SET_PROVINCE:return{region:e.region,province:t.payload};case r.SET_CITY:return{region:e.region,province:e.province,city:t.payload};case r.SET_STREET:return{region:e.region,province:e.province,city:e.city,street:t.payload};case r.SET_NUMBER_EGON:return{region:e.region,province:e.province,city:e.city,street:e.street,number:t.payload,egon:t.egon};default:return e}},l=(0,a.createContext)({state:c,dispatch:function(){}}),u=function(){return(0,a.useContext)(l)},p=function(e){var t=e.children,n=(0,a.useReducer)(s,c),r=n[0],o=n[1];return(0,i.jsx)(l.Provider,{value:{state:r,dispatch:o},children:t})},d=function(e){var t=e.href,n=e.text,r=e.children,o=e.className;return(0,i.jsxs)("a",{className:"text-sm font-light text-gray-300 hover:underline ".concat(o),target:"_blank",rel:"noopener noreferrer",href:t,children:[n,r]})},f=function(){return(0,i.jsxs)("footer",{className:"flex flex-col items-center justify-center w-full bg-indigo-900 py-2",children:[(0,i.jsxs)("p",{children:["Creato da"," ",(0,i.jsx)(d,{href:"https://edoardo.ranghieri.com",text:"TheEdoRan",className:"text-white !text-base font-semibold hover:no-underline"})," ","con \u2764\ufe0f"]}),(0,i.jsxs)("div",{className:"flex items-center justify-center gap-4",children:[(0,i.jsx)("p",{children:(0,i.jsx)(d,{href:"https://github.com/theedoran/mappatura2021",text:"Codice Sorgente"})}),(0,i.jsx)("p",{children:(0,i.jsx)(d,{href:"https://forum.fibra.click/d/22321-esiti-mappatura-infratel-2021",text:"Informazioni"})})]})]})},x=n(7757),m=n.n(x),h=n(5861),g=n(5671),b=n(7326),v=n(136),j=n(2963),y=n(1120),E=n(7952),w=n(4942),N=n(4156),C=n.n(N),O=n(9066);function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,y.Z)(e);if(t){var i=(0,y.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,j.Z)(this,n)}}var _=function(e){(0,v.Z)(n,e);var t=S(n);function n(e,r){var i;return(0,g.Z)(this,n),i=t.call(this),(0,w.Z)((0,b.Z)(i),"status",0),i.message=e,i.status=r,i}return n}((0,E.Z)(Error)),T=function(e){429===e.status?O.ZP.error("Hey, vacci piano!\nRiprova tra una decina di minuti.",{id:"search-field-too-many-requests-error"}):O.ZP.error("Errore nel comunicare con il server.\nRiprova pi\xf9 tardi.",{id:"search-field-error"})},R=function(){var e=(0,h.Z)(m().mark((function e(t){var n;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mappatura2021.duckdns.org/api").concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new _(n.statusText,n.status);case 5:return e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=C()(R,{promise:!0,primitive:!0});function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,w.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=(0,n(5152).default)((function(){return Promise.all([n.e(774),n.e(821)]).then(n.bind(n,7821))}),{ssr:!1,loadableGenerated:{webpack:function(){return[7821]},modules:["../components/layout/SearchField.tsx -> react-select"]}}),Z=function(e){return e.map((function(e){return{value:e,label:e}}))},D=function(e){return e.map((function(e){return{value:e.number,label:e.number,egon:e.egon}}))},U=function(e){var t=e.context,n=e.disabled,o=e.title,c=e.className,s=e.menuPlacement,l=e.showOptionsOnClick,p=void 0!==l&&l,d=u(),f=d.state,x=d.dispatch,g=(0,a.useState)([]),b=g[0],v=g[1],j=(0,a.useState)(""),y=j[0],E=j[1],w=function(e){var n,i,o=e.get,a=e.fetch,c=e.payload,s=e.egon;switch(t){case"regions":return o?f.region:a?k("/regions"):x({type:r.SET_REGION,payload:c});case"provinces":return o?f.province:a?(i=f.region,k("/".concat(encodeURIComponent(i),"/provinces"))):x({type:r.SET_PROVINCE,payload:c});case"cities":return o?f.city:a?(n=f.province,k("/".concat(encodeURIComponent(n),"/cities"))):x({type:r.SET_CITY,payload:c});case"streets":return o?f.street:a?function(e,t){return k("/".concat(encodeURIComponent(e),"/").concat(encodeURIComponent(t),"/streets"))}(f.province,f.city):x({type:r.SET_STREET,payload:c});case"numbers":return o?f.number:a?function(e,t,n){return k("/".concat(encodeURIComponent(e),"/").concat(encodeURIComponent(t),"/").concat(encodeURIComponent(n),"/numbers"))}(f.province,f.city,f.street):x({type:r.SET_NUMBER_EGON,payload:c,egon:s});default:return}},N=function(){var e=(0,h.Z)(m().mark((function e(){var r;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,w({fetch:!0});case 5:if(r=e.sent,"numbers"!==t){e.next=9;break}return v(D(r)),e.abrupt("return");case 9:v(Z(r)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0),T(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}(),C=(0,a.useCallback)((function(){if(!p&&!y)return[{label:"Digita un nome",value:"__search_placeholder",isDisabled:!0}];var e=b.filter((function(e){var t=e.label;return null===t||void 0===t?void 0:t.toLowerCase().includes(y.toLowerCase())}));return"numbers"!==t&&y&&(e=e.sort((function(e,t){var n=e.label,r=t.label;return n.length-r.length||n.localeCompare(r)})).slice(0,100)),e}),[b,p,y,t]);return(0,a.useEffect)((function(){N()}),[f]),(0,i.jsxs)("div",{className:"w-full",children:[(0,i.jsx)("h3",{className:"text-indigo-200 text-xl mb-3",children:o}),(0,i.jsx)(M,{isDisabled:n,cacheOptions:!0,defaultOptions:!0,options:C(),onInputChange:function(e){return E(e)},menuPlacement:s,styles:{control:function(e,t){var n=t.isDisabled;return I(I({},e),{},{backgroundColor:n?"#b0b0b0":"#f7f7f7",fontStyle:n?"italic":"normal"})},option:function(e,t){var n=t.isDisabled,r=t.isFocused;return I(I({},e),{},{backgroundColor:n?"transparent":r?"#deebff":"white",color:"#4760a3"})},placeholder:function(e){return I(I({},e),{},{lineHeight:"1rem"})}},value:function(){var e=w({get:!0});return e?{label:e,value:e}:null}(),onChange:function(e){!function(e){var t=e.payload,n=e.egon;w({get:!1,payload:t,egon:n})}({payload:e.value,egon:e.egon})},noOptionsMessage:function(e){return e.inputValue?"Nessun risultato":""},className:"w-full text-blue-900 ".concat(c),placeholder:"".concat(p?"Seleziona":"Cerca"," ").concat(o.toLowerCase())})]})},F={"":{text:"bianco",className:"bg-white text-black border-black"},n:{text:"nero",className:"bg-black border-white"},g:{text:"grigio",className:"bg-gray-500 border-whtie"}},V={30:"30-99 Mbit/s",100:"100-199 Mbit/s",200:"200-299 Mbit/s",300:"300-1000 Mbit/s",1e3:"> 1000 Mbit/s"},G={0:"< 30 Mbit/s",1:"< 300 Mbit/s",2:">= 300 Mbit/s"},z=function(e){var t=e.text,n=e.children;return(0,i.jsxs)("h2",{className:"text-2xl sm:text-3xl text-indigo-100 uppercase",children:[t," ",n]})},L=function(e){var t=e.children;return(0,i.jsx)("div",{className:"flex flex-col gap-5 items-center",children:t})},Y=function(e){var t=e.data,n=(0,a.useRef)(null);return(0,a.useEffect)((function(){var e;null===(e=n.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[]),(0,i.jsxs)("div",{ref:n,className:"flex flex-col items-center gap-10",children:[(0,i.jsxs)(L,{children:[(0,i.jsx)(z,{text:"Colore del civico",children:(0,i.jsx)("span",{className:"text-white font-medium",children:t.number})}),(0,i.jsxs)("div",{className:"text-center",children:[(0,i.jsx)("div",{className:"text-4xl sm:text-5xl py-3 px-4 border-2 ".concat(F[t.color].className),children:F[t.color].text.toUpperCase()}),(0,i.jsx)(d,{href:"https://fibra.click/aree-nere-grigie-bianche/",text:"Maggiori informazioni sui colori"})]})]}),!!t.peakSpeed&&(0,i.jsxs)(L,{children:[(0,i.jsx)(z,{text:"Velocit\xe0 di picco"}),(0,i.jsx)("pre",{className:"text-3xl sm:text-5xl",children:V[t.peakSpeed]})]}),(0,i.jsxs)(L,{children:[(0,i.jsx)(z,{text:"Velocit\xe0 massima"}),(0,i.jsx)("pre",{className:"text-3xl sm:text-5xl",children:G[t.below300Mbps]})]})]})},B=function(e){var t=e.children,n=e.disabled,r=e.className,o=e.onClick,a=e.type;return(0,i.jsx)("button",{disabled:n,className:"mt-5 outline-none border-2 py-2 px-3 sm:py-3 sm:px-4 rounded-lg shadow-sm transition-all hover:brightness-110 disabled:hover:brightness-100 disabled:grayscale disabled:cursor-default ".concat(r),type:a,onClick:o,children:t})},W=function(){return(0,i.jsx)("div",{className:"w-full border-t lg:w-auto lg:border-l border-gray-300 opacity-30"})},q=function(e){var t=e.className;return(0,i.jsxs)("svg",{className:"w-16 h-16 text-indigo-100 animate-spin ".concat(t),viewBox:"0 0 186 186",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{d:"M186 93C186 144.362 144.362 186 93 186C41.6375 186 0 144.362 0 93C0 41.6375 41.6375 0 93 0C144.362 0 186 41.6375 186 93ZM20.46 93C20.46 133.063 52.9373 165.54 93 165.54C133.063 165.54 165.54 133.063 165.54 93C165.54 52.9373 133.063 20.46 93 20.46C52.9373 20.46 20.46 52.9373 20.46 93Z",fill:"#F5F5F5",fillOpacity:"0.2"}),(0,i.jsx)("path",{d:"M29.8863 24.6943C47.1213 8.76942 69.7393 -0.0515139 93.2051 0.000226065C116.671 0.0519661 139.25 8.97255 156.414 24.9733L142.463 39.9392C129.075 27.4586 111.463 20.5005 93.1599 20.4602C74.8566 20.4198 57.2146 27.3001 43.7713 39.7216L29.8863 24.6943Z",fill:"#F5F5F5",fillOpacity:"0.8"})]})},Q=function(){var e=u(),t=e.state,n=e.dispatch,o=(0,a.useState)(null),c=o[0],s=o[1],l=(0,a.useState)(!1),p=l[0],d=l[1];return(0,i.jsxs)("div",{className:"flex flex-col lg:flex-row justify-center items-center lg:items-stretch w-full pb-5 gap-10 lg:gap-20",children:[(0,i.jsxs)("form",{className:"flex flex-col items-center gap-6 w-80 sm:w-[28rem]",onSubmit:function(e){var n;(e.preventDefault(),t.egon)&&(d(!0),s(null),(n=t.egon,k("/egon?id=".concat(n))).then((function(e){return s(e)})).catch((function(e){console.error(e),T(e)})).finally((function(){return d(!1)})))},children:[(0,i.jsx)(U,{title:"Regione",context:"regions",menuPlacement:"bottom",showOptionsOnClick:!0}),(0,i.jsx)(U,{title:"Provincia",context:"provinces",disabled:!t.region,menuPlacement:"bottom",showOptionsOnClick:!0}),(0,i.jsx)(U,{title:"Citt\xe0",context:"cities",disabled:!t.region||!t.province,menuPlacement:"bottom"}),(0,i.jsxs)("div",{className:"flex w-full gap-2",children:[(0,i.jsx)(U,{title:"Via",context:"streets",disabled:!t.region||!t.province||!t.city,menuPlacement:"top"}),(0,i.jsx)(U,{title:"Civico",context:"numbers",disabled:!t.region||!t.province||!t.city||!t.street,menuPlacement:"top",showOptionsOnClick:!0})]}),(0,i.jsxs)("div",{className:"flex justify-center items-center gap-5",children:[(0,i.jsx)(B,{disabled:!t.egon,className:"bg-yellow-400 text-blue-900",type:"submit",children:t.egon&&c||p?"Riesegui la ricerca":"Esegui la ricerca"}),!!c&&!!t.egon&&(0,i.jsx)(B,{className:"bg-red-500 text-indigo-100",type:"button",onClick:function(e){e.preventDefault(),s(null),n({type:r.RESET})},children:"Pulisci i campi"})]})]}),p&&!c&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(W,{}),(0,i.jsx)("div",{className:"flex items-center justify-center w-80",children:(0,i.jsx)(q,{})})]}),!p&&!!c&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(W,{}),(0,i.jsx)(Y,{data:c})]})]})};function H(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.default,{children:[(0,i.jsx)("title",{children:"Esito Mappatura Infratel 2021"}),(0,i.jsx)("meta",{name:"description",content:"Scopri le informazioni riguardanti la copertura prevista entro il 2026 al tuo indirizzo."}),(0,i.jsx)("meta",{name:"google-site-verification",content:"J21o39Q5f6SmTWkCZmkgJq6KV6aZ-FC5E6WSOQxgL0U"}),(0,i.jsx)("link",{rel:"shortcut icon",type:"image/x-icon",href:"favicon.ico"})]}),(0,i.jsxs)("main",{className:"flex flex-1 flex-col p-5 items-center w-full",children:[(0,i.jsx)("h1",{className:"text-2xl sm:text-4xl font-medium mb-1 drop-shadow-lg",children:"Mappatura Infratel 2021"}),(0,i.jsx)("h2",{className:"sm:text-lg italic font-light text-blue-300 mb-3 drop-shadow-lg",children:"Copertura prevista entro il 2026 in Italia"}),(0,i.jsx)(p,{children:(0,i.jsx)(Q,{})}),(0,i.jsx)(d,{className:"text-center whitespace-pre-line mt-5 lg:mt-0",href:"https://www.paypal.com/donate/?hosted_button_id=KYWCW2M82AY28",text:"Questo sito \xe8 gratis e senza pubblicit\xe0.\nOffrimi un \ud83c\udf75 per tenere in vita questo progetto."})]}),(0,i.jsx)(f,{})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8158)}])}},function(e){e.O(0,[774,635,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);