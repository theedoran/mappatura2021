(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8158:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Q}});var n,i=r(5893),c=r(9008),s=r(7294),a=r(6156);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}!function(e){e.RESET="RESET",e.SET_REGION="SET_REGION",e.SET_PROVINCE="SET_PROVINCE",e.SET_CITY="SET_CITY",e.SET_STREET="SET_STREET",e.SET_NUMBER_EGON="SET_NUMBER_EGON"}(n||(n={}));var u={region:"",province:"",city:"",street:"",number:"",egon:""},p=function(){return u},f=function(e,t){switch(t.type){case n.RESET:return p();case n.SET_REGION:return l(l({},p()),{},{region:t.payload});case n.SET_PROVINCE:return l(l({},p()),{},{region:e.region,province:t.payload});case n.SET_CITY:return l(l({},p()),{},{region:e.region,province:e.province,city:t.payload});case n.SET_STREET:return l(l({},p()),{},{region:e.region,province:e.province,city:e.city,street:t.payload});case n.SET_NUMBER_EGON:return l(l({},p()),{},{region:e.region,province:e.province,city:e.city,street:e.street,number:t.payload,egon:t.egon});default:return e}},d=(0,s.createContext)({state:u,dispatch:function(){}}),x=function(){return(0,s.useContext)(d)},h=function(e){var t=e.children,r=(0,s.useReducer)(f,u),n=r[0],c=r[1];return(0,i.jsx)(d.Provider,{value:{state:n,dispatch:c},children:t})},m=function(e){var t=e.href,r=e.text,n=e.children,c=e.className;return(0,i.jsxs)("a",{className:"text-sm font-light text-gray-300 hover:underline ".concat(c),target:"_blank",rel:"noopener noreferrer",href:t,children:[r,n]})},b=function(){return(0,i.jsxs)("footer",{className:"flex flex-col items-center justify-center w-full bg-indigo-900 py-2",children:[(0,i.jsxs)("p",{children:["Creato da"," ",(0,i.jsx)(m,{href:"https://edoardo.ranghieri.com",text:"TheEdoRan",className:"text-white text-base font-semibold hover:no-underline"})," ","con \u2764\ufe0f"]}),(0,i.jsxs)("div",{className:"flex items-center justify-center gap-4",children:[(0,i.jsx)("p",{children:(0,i.jsx)(m,{href:"https://github.com/theedoran/mappatura2021",text:"Codice Sorgente"})}),(0,i.jsx)("p",{children:(0,i.jsx)(m,{href:"https://forum.fibra.click/d/22321-esiti-mappatura-infratel-2021",text:"Informazioni"})})]})]})},g=r(7757),v=r.n(g),j=r(2137),y=r(6610),E=r(3349),N=r(69),w=r(6070),O=r(7608),S=r(5366),C=r(4156),T=r.n(C),R=r(9066);function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,O.Z)(e);if(t){var i=(0,O.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,w.Z)(this,r)}}var P=function(e){(0,N.Z)(r,e);var t=_(r);function r(e,n){var i;return(0,y.Z)(this,r),i=t.call(this),(0,a.Z)((0,E.Z)(i),"status",0),i.message=e,i.status=n,i}return r}((0,S.Z)(Error)),k=function(e){429===e.status?R.ZP.error("Hey, vacci piano!\nRiprova tra una decina di minuti.",{id:"search-field-too-many-requests-error"}):R.ZP.error("Errore nel comunicare con il server.\nRiprova pi\xf9 tardi.",{id:"search-field-error"})},I=function(){var e=(0,j.Z)(v().mark((function e(t){var r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mappatura2021.duckdns.org/api").concat(t));case 2:if((r=e.sent).ok){e.next=5;break}throw new P(r.statusText,r.status);case 5:return e.abrupt("return",r.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=T()(I,{promise:!0,primitive:!0});function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var V=(0,r(5152).default)((function(){return Promise.all([r.e(774),r.e(433)]).then(r.bind(r,6433))}),{ssr:!1,loadableGenerated:{webpack:function(){return[6433]},modules:["../components/layout/SearchField.tsx -> react-select"]}}),U=function(e){return e.map((function(e){return{value:e,label:"VALLEDAOSTA"===e?"VALLE D'AOSTA":e}}))},F=function(e){return e.map((function(e){return{value:e.number,label:e.number,egon:e.egon}}))},G=function(e){var t=e.context,r=e.disabled,c=e.title,a=e.className,o=x(),l=o.state,u=o.dispatch,p=(0,s.useState)([{label:"",value:"",egon:""}]),f=p[0],d=p[1],h=function(e){var r,i,c=e.get,s=e.fetch,a=e.payload,o=e.egon;switch(t){case"regions":return c?l.region:s?M("/regions"):u({type:n.SET_REGION,payload:a});case"provinces":return c?l.province:s?(i=l.region,M("/".concat(i,"/provinces"))):u({type:n.SET_PROVINCE,payload:a});case"cities":return c?l.city:s?(r=l.province,M("/".concat(encodeURIComponent(r),"/cities"))):u({type:n.SET_CITY,payload:a});case"streets":return c?l.street:s?function(e,t){return M("/".concat(encodeURIComponent(e),"/").concat(encodeURIComponent(t),"/streets"))}(l.province,l.city):u({type:n.SET_STREET,payload:a});case"numbers":return c?l.number:s?function(e,t,r){return M("/".concat(encodeURIComponent(e),"/").concat(encodeURIComponent(t),"/").concat(encodeURIComponent(r),"/numbers"))}(l.province,l.city,l.street):u({type:n.SET_NUMBER_EGON,payload:a,egon:o});default:return}},m=function(){var e=(0,j.Z)(v().mark((function e(){var n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,h({fetch:!0});case 5:if(n=e.sent,"numbers"!==t){e.next=9;break}return d(F(n)),e.abrupt("return");case 9:d(U(n)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0),k(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){m()}),[l]),(0,i.jsxs)("div",{className:"w-full",children:[(0,i.jsx)("h3",{className:"text-indigo-200 text-xl mb-3",children:c}),(0,i.jsx)(V,{isDisabled:r,cacheOptions:!0,defaultOptions:!0,options:f,styles:{control:function(e,t){var r=t.isDisabled;return D(D({},e),{},{backgroundColor:r?"#b0b0b0":"#f7f7f7",fontStyle:r?"italic":"normal"})}},value:function(){var e=h({get:!0});return e?{label:e,value:e}:null}(),onChange:function(e){!function(e){var t=e.payload,r=e.egon;h({get:!1,payload:t,egon:r})}({payload:e.value,egon:e.egon})},noOptionsMessage:function(e){return e.inputValue?"Nessun risultato":""},className:"w-full text-blue-900 ".concat(a),placeholder:"Seleziona",filterOption:function(e,t){var r=e.data;return t?r.label.toLowerCase().includes(t):f.indexOf(r)<50}})]})},L={"":{text:"bianco",className:"bg-white text-black border-black"},n:{text:"nero",className:"bg-black border-white"},g:{text:"grigio",className:"bg-gray-500 border-whtie"}},z={30:"30-99 Mbit/s",100:"100-199 Mbit/s",200:"200-299 Mbit/s",300:"300-1000 Mbit/s",1e3:"> 1000 Mbit/s"},A={0:"< 30 Mbit/s",1:"< 300 Mbit/s",2:">= 300 Mbit/s"},B=function(e){var t=e.text,r=e.children;return(0,i.jsxs)("h2",{className:"text-2xl sm:text-3xl text-indigo-100 uppercase",children:[t," ",r]})},Y=function(e){var t=e.children;return(0,i.jsx)("div",{className:"flex flex-col gap-5 items-center",children:t})},X=function(e){var t=e.data,r=(0,s.useRef)(null);return(0,s.useEffect)((function(){var e;null===(e=r.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[]),(0,i.jsxs)("div",{ref:r,className:"flex flex-col items-center gap-10",children:[(0,i.jsxs)(Y,{children:[(0,i.jsx)(B,{text:"Colore del civico",children:(0,i.jsx)("span",{className:"text-white font-medium",children:t.number})}),(0,i.jsxs)("div",{className:"text-center",children:[(0,i.jsx)("div",{className:"text-4xl sm:text-5xl py-3 px-4 border-2 ".concat(L[t.color].className),children:L[t.color].text.toUpperCase()}),(0,i.jsx)(m,{href:"https://fibra.click/aree-nere-grigie-bianche/",text:"Maggiori informazioni sui colori"})]})]}),!!t.peakVel&&(0,i.jsxs)(Y,{children:[(0,i.jsx)(B,{text:"Velocit\xe0 di picco"}),(0,i.jsx)("pre",{className:"text-3xl sm:text-5xl",children:z[t.peakVel]})]}),(0,i.jsxs)(Y,{children:[(0,i.jsx)(B,{text:"Velocit\xe0 massima"}),(0,i.jsx)("pre",{className:"text-3xl sm:text-5xl",children:A[t.below300Mbps]})]})]})},q=function(e){var t=e.children,r=e.disabled,n=e.className,c=e.onClick,s=e.type;return(0,i.jsx)("button",{disabled:r,className:"mt-5 outline-none border-2 py-2 px-3 sm:py-3 sm:px-4 rounded-lg shadow-sm transition-all hover:brightness-110 disabled:hover:brightness-100 disabled:grayscale disabled:cursor-default ".concat(n),type:s,onClick:c,children:t})},H=function(){return(0,i.jsx)("div",{className:"w-full border-t lg:w-auto lg:border-l border-gray-300 opacity-30"})},J=function(e){var t=e.className;return(0,i.jsxs)("svg",{className:"w-16 h-16 text-indigo-100 animate-spin ".concat(t),viewBox:"0 0 186 186",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{d:"M186 93C186 144.362 144.362 186 93 186C41.6375 186 0 144.362 0 93C0 41.6375 41.6375 0 93 0C144.362 0 186 41.6375 186 93ZM20.46 93C20.46 133.063 52.9373 165.54 93 165.54C133.063 165.54 165.54 133.063 165.54 93C165.54 52.9373 133.063 20.46 93 20.46C52.9373 20.46 20.46 52.9373 20.46 93Z",fill:"#F5F5F5",fillOpacity:"0.2"}),(0,i.jsx)("path",{d:"M29.8863 24.6943C47.1213 8.76942 69.7393 -0.0515139 93.2051 0.000226065C116.671 0.0519661 139.25 8.97255 156.414 24.9733L142.463 39.9392C129.075 27.4586 111.463 20.5005 93.1599 20.4602C74.8566 20.4198 57.2146 27.3001 43.7713 39.7216L29.8863 24.6943Z",fill:"#F5F5F5",fillOpacity:"0.8"})]})},K=function(){var e=x(),t=e.state,r=e.dispatch,c=(0,s.useState)(null),a=c[0],o=c[1],l=(0,s.useState)(!1),u=l[0],p=l[1];return(0,i.jsxs)("div",{className:"flex flex-col lg:flex-row justify-center items-center lg:items-stretch w-full pb-5 lg:pb-0 gap-20",children:[(0,i.jsxs)("form",{className:"flex flex-col items-center gap-6 w-80 sm:w-[28rem]",onSubmit:function(e){var r;(e.preventDefault(),t.egon)&&(p(!0),o(null),(r=t.egon,M("/egon?id=".concat(r))).then((function(e){return o(e)})).catch((function(e){console.error(e),k(e)})).finally((function(){return p(!1)})))},children:[(0,i.jsx)(G,{title:"Regione",context:"regions"}),(0,i.jsx)(G,{title:"Provincia",context:"provinces",disabled:!t.region}),(0,i.jsx)(G,{title:"Citt\xe0",context:"cities",disabled:!t.region||!t.province}),(0,i.jsxs)("div",{className:"flex w-full gap-2",children:[(0,i.jsx)(G,{title:"Via",context:"streets",disabled:!t.region||!t.province||!t.city}),(0,i.jsx)(G,{title:"Civico",context:"numbers",disabled:!t.region||!t.province||!t.city||!t.street})]}),(0,i.jsxs)("div",{className:"flex justify-center items-center gap-5",children:[(0,i.jsx)(q,{disabled:!t.egon,className:"bg-yellow-400 text-blue-900",type:"submit",children:t.egon&&a||u?"Riesegui la ricerca":"Esegui la ricerca"}),!!a&&!!t.egon&&(0,i.jsx)(q,{className:"bg-red-500 text-indigo-100",type:"button",onClick:function(e){e.preventDefault(),o(null),r({type:n.RESET})},children:"Pulisci i campi"})]})]}),u&&!a&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(H,{}),(0,i.jsx)("div",{className:"flex items-center justify-center w-80",children:(0,i.jsx)(J,{})})]}),!u&&!!a&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(H,{}),(0,i.jsx)(X,{data:a})]})]})};function Q(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(c.default,{children:[(0,i.jsx)("title",{children:"Esito Mappatura Infratel 2021"}),(0,i.jsx)("meta",{name:"description",content:"Scopri le informazioni riguardanti la copertura prevista per il 2026 al tuo indirizzo."}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("main",{className:"flex flex-1 flex-col p-5 items-center w-full",children:[(0,i.jsx)("h1",{className:"text-2xl sm:text-4xl font-medium mb-1 drop-shadow-lg",children:"Mappatura Infratel 2021"}),(0,i.jsx)("h2",{className:"sm:text-lg italic font-light text-blue-300 mb-10 drop-shadow-lg",children:"Copertura prevista per il 2026"}),(0,i.jsx)(h,{children:(0,i.jsx)(K,{})})]}),(0,i.jsx)(b,{})]})}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8158)}])}},function(e){e.O(0,[774,253,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);