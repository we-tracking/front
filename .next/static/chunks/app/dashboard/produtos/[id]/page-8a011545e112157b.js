(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[891],{8851:function(e,t,r){Promise.resolve().then(r.bind(r,752))},648:function(e,t,r){"use strict";r.d(t,{h:function(){return o}});var l=r(7908),a=r(146);let o=l.Z.create({baseURL:"http://127.0.0.1",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});o.interceptors.request.use(e=>{let t=a.Z.get("token");return t&&(e.headers=e.headers||{},e.headers.Authorization="Bearer ".concat(t)),e},e=>Promise.reject(e))},373:function(e,t,r){"use strict";r.d(t,{J:function(){return a}});var l=r(648);async function a(){return l.h.get("/web-source")}},6977:function(e,t,r){"use strict";r.d(t,{s:function(){return a}});var l=r(648);async function a(e){return l.h.post("/product",e)}},752:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var l=r(3827),a=r(4090),o=r(648);async function s(e){return o.h.get("/web-source/product/".concat(e))}var n=r(3558),c=r(6540),i=r(8792);async function d(e){return o.h.get("/product/history/".concat(e))}var u=r(94),x=r(1606),p=r(373);async function m(e,t){return o.h.get("/product/history/".concat(e,"/").concat(t))}function f(e){let{idProduct:t,idStore:r,setCloseModal:o,imgStore:s}=e,[n,c]=(0,a.useState)([]),i=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=e=>{i.current&&!i.current.contains(e.target)&&o(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[o]),(0,a.useEffect)(()=>{(async function(){let e=await m(t,r);200===e.status&&c(e.data.data.items)})()},[]),(0,l.jsx)("div",{className:"absolute w-full h-full flex items-center justify-center inset-0 bg-[rgba(0,0,0,0.4)]",children:(0,l.jsxs)("div",{ref:i,className:"w-full max-w-lg max-h-[800px] bg-project-gray-800 relative rounded-xl pb-10 animations-all",children:[(0,l.jsx)("button",{onClick:()=>o(!1),className:"w-10 h-10 bg-red-600 rounded-full absolute -top-5 -right-5 text-lg font-black text-white transition-all hover:scale-105",children:"X"}),(0,l.jsx)("h1",{className:"text-3xl text-project-gray-300 text-center py-10",children:"Hist\xf3rico de pre\xe7os"}),(0,l.jsx)("div",{className:"w-full mb-5 px-10",children:(0,l.jsx)("img",{src:s,alt:"Imagem da loja"})}),(0,l.jsx)("div",{className:"w-full h-[400px] flex flex-col overflow-y-auto  gap-5 px-10",children:null==n?void 0:n.map(e=>(0,l.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,l.jsxs)("span",{className:"flex items-center gap-2 text-base text-project-gray-500",children:["Pre\xe7o: ",(0,l.jsxs)("p",{children:["R$",e.price]})]}),(0,l.jsxs)("span",{className:"flex items-center gap-2 text-base text-project-gray-500",children:["Data: ",(0,l.jsx)("p",{children:function(e){let t=new Date(e);return new Intl.DateTimeFormat("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(t)}(e.checkTime)})]})]},e.checkTime))})]})})}var g=r(6977),h=r(6288);function j(e){var t,r,o,m,j;let{params:b}=e,[v,y]=(0,a.useState)(!1),[w,N]=(0,a.useState)(!1),[C,S]=(0,a.useState)(""),[k,E]=(0,a.useState)(""),[P,I]=(0,a.useState)(""),[L,q]=(0,a.useState)([]),[A,_]=(0,a.useState)(0),[B,F]=(0,a.useState)(0),[R,T]=(0,a.useState)(""),[z,U]=(0,a.useState)([]),M=(e,t)=>{U(r=>r.map(r=>r.id===e?{...r,url:t}:r))},{data:V,isLoading:D}=(0,c.a)({queryKey:["product"],queryFn:()=>s(b.id)}),{data:H,isLoading:K}=(0,c.a)({queryKey:["product-price"],queryFn:()=>d(b.id)}),{data:O}=(0,c.a)({queryKey:["webSource"],queryFn:p.J});async function J(){try{let e=await (0,g.s)({name:C,ean:k,imagePath:P,webSources:z});h.toast.promise(()=>new Promise(t=>setTimeout(()=>t(e),2e3)),{loading:"Verificando...",success:()=>"Produto editado com sucesso"}),200===e.status&&setTimeout(()=>location.reload(),4e3)}catch(e){h.toast.error(null==e?void 0:e.response.data.message)}}return((0,a.useEffect)(()=>{var e,t,r,l,a;S(null==V?void 0:null===(e=V.data.data.items.product)||void 0===e?void 0:e.name),E(null==V?void 0:null===(t=V.data.data.items.product)||void 0===t?void 0:t.ean),I(null==V?void 0:null===(r=V.data.data.items.product)||void 0===r?void 0:r.imagePath),q(null==O?void 0:null===(l=O.data.data)||void 0===l?void 0:l.filter(e=>{let{id:t}=e;return null==H?void 0:H.data.data.some(e=>{let{webSourceId:r}=e;return t===r})}));let o=null==V?void 0:null===(a=V.data.data.items.webSources)||void 0===a?void 0:a.filter(e=>!(null==O?void 0:O.data.data.some(t=>Number(t.webSourceId)===e.id)));U(null==o?void 0:o.map(e=>({id:Number(e.webSourceId),url:e.url})))},[V,H,O]),D||K)?(0,l.jsx)(n.g,{}):(console.log(H),(0,l.jsxs)("main",{className:"",children:[(0,l.jsxs)("div",{className:"grid grid-cols-3 items-start justify-between",children:[(0,l.jsx)("div",{className:"",children:(0,l.jsx)("h1",{className:"block overflow-hidden text-3xl text-project-gray-300 capitalize",children:null==V?void 0:null===(t=V.data.data.items.product)||void 0===t?void 0:t.name})}),(0,l.jsx)("div",{className:"flex justify-end",children:(0,l.jsxs)("p",{className:"w-max p-2 text-project-gray-700 border border-project-gray-700 rounded-xl",children:["EAN: ",null==V?void 0:null===(r=V.data.data.items.product)||void 0===r?void 0:r.ean]})}),(0,l.jsxs)("div",{className:"flex gap-5 justify-end",children:[(0,l.jsx)("button",{onClick:()=>y(!0),className:"w-min py-2 px-8 rounded-xl text-lg font-bold text-white bg-project-blue-300",children:"Editar"}),(0,l.jsx)(i.default,{className:"w-min py-2 px-8 rounded-xl text-lg font-bold text-project-gray-900 bg-project-blue-100",href:"/dashboard/produtos",children:"Voltar"})]})]}),(0,l.jsxs)("div",{className:"flex items-start justify-between gap-10 mt-16",children:[(0,l.jsx)("div",{className:"w-full max-w-52 rounded-xl",children:(0,l.jsx)("img",{className:"w-full rounded-xl",src:null==V?void 0:null===(o=V.data.data.items.product)||void 0===o?void 0:o.imagePath,alt:"imagem do produto"})}),(0,l.jsx)("div",{className:"flex gap-10 py-10",children:null==H?void 0:null===(j=H.data)||void 0===j?void 0:null===(m=j.data)||void 0===m?void 0:m.map(e=>(0,l.jsxs)("div",{className:"min-h-96 flex flex-col items-center justify-between py-5 px-4 bg-project-gray-850 rounded-xl",children:[(0,l.jsxs)("div",{className:"flex flex-col items-center gap-5",children:[(0,l.jsx)("h2",{className:"text-2xl text-project-gray-600",children:null==e?void 0:e.webSourceName}),(0,l.jsx)("img",{className:"w-full max-w-40",src:null==e?void 0:e.webSourceLogo,alt:"Logo Marca"})]}),(0,l.jsxs)("p",{className:"flex flex-col text-xs text-project-gray-700",children:["Pre\xe7o ",(0,l.jsxs)("span",{className:"text-2xl text-project-gray-300",children:["R$",null==e?void 0:e.price]})]}),(0,l.jsxs)("div",{className:"flex flex-col w-full gap-5",children:[(0,l.jsx)("button",{onClick:()=>{N(!0),F(e.webSourceId),_(e.productId),T(e.webSourceLogo)},className:"w-full flex items-center justify-center py-2 rounded-xl text-lg font-bold text-project-gray-900 bg-project-blue-300 transition-all hover:scale-105",children:"Hist\xf3rico"}),(0,l.jsx)("a",{href:"https://".concat(e.domain),target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-center py-2 rounded-xl text-lg font-bold text-project-gray-900 bg-project-blue-100 transition-all hover:scale-105",children:"Ir ao site"})]})]},null==e?void 0:e.webSourceId))})]}),v&&(0,l.jsxs)(u.u,{closeModal:y,title:"Editar Produto",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-5 mb-10",children:[(0,l.jsxs)("label",{className:"flex flex-col gap-2 text-base text-project-gray-350",children:["Nome do produto",(0,l.jsx)("input",{className:"w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl",placeholder:"Nome",type:"text",value:C,onChange:e=>S(e.target.value)})]}),(0,l.jsxs)("label",{className:"flex flex-col gap-2 text-base text-project-gray-350",children:["EAN",(0,l.jsx)("input",{className:"w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl",placeholder:"Informe o EAN",type:"text",value:k,onChange:e=>E(e.target.value)})]}),(0,l.jsxs)("label",{className:"flex flex-col gap-2 text-base text-project-gray-350",children:["Link da imagem",(0,l.jsx)("input",{className:"w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl",placeholder:"Informe o link da imagem",type:"text",value:P,onChange:e=>I(e.target.value)})]}),(0,l.jsx)(x.P,{options:null==O?void 0:O.data.data,value:L,setValue:q,product:null==V?void 0:V.data.data})]}),null==z?void 0:z.map(e=>(0,l.jsxs)("div",{className:"flex flex-col gap-5 my-5",children:[1===e.id&&(0,l.jsxs)("label",{className:"flex flex-col gap-2 text-base text-project-gray-350",children:["Url do extra",(0,l.jsx)("input",{className:"w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl",placeholder:"Informe a url do Extra",value:e.url,onChange:t=>M(e.id,t.target.value)})]}),2===e.id&&(0,l.jsxs)("label",{className:"flex flex-col gap-2 text-base text-project-gray-350",children:["Url da Casas Bahia",(0,l.jsx)("input",{className:"w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl",placeholder:"Informe a url da Casas Bahia",value:e.url,onChange:t=>M(e.id,t.target.value)})]}),3===e.id&&(0,l.jsxs)("label",{className:"flex flex-col gap-2 text-base text-project-gray-350",children:["Url do Ponto Frio",(0,l.jsx)("input",{className:"w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl",placeholder:"Informe a url do Ponto Frio",value:e.url,onChange:t=>M(e.id,t.target.value)})]}),4===e.id&&(0,l.jsxs)("label",{className:"flex flex-col gap-2 text-base text-project-gray-350",children:["Url do Carrefour",(0,l.jsx)("input",{className:"w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl",placeholder:"Informe a url do Carrefour",value:e.url,onChange:t=>M(e.id,t.target.value)})]})]},e.id)),(0,l.jsx)("button",{onClick:J,className:"w-full text-base py-2 rounded-xl text-white bg-project-blue-600",children:"Editar"})]}),w&&(0,l.jsx)(f,{idProduct:A,idStore:B,setCloseModal:N,imgStore:R})]}))}},3558:function(e,t,r){"use strict";r.d(t,{g:function(){return a}});var l=r(3827);function a(){return(0,l.jsx)("div",{className:"flex items-center justify-center absolute inset-0",children:(0,l.jsxs)("svg",{className:"w-20 h-20 text-project-blue-100 animate-spin transition-all",fill:"none",viewBox:"0 0 24 24",children:[(0,l.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,l.jsx)("path",{className:"opacity-75",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",fill:"currentColor"})]})})}},94:function(e,t,r){"use strict";r.d(t,{u:function(){return o}});var l=r(3827),a=r(4090);function o(e){let{children:t,title:r,closeModal:o}=e,s=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=e=>{s.current&&!s.current.contains(e.target)&&o(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[o]),(0,l.jsx)("div",{className:"w-full h-full flex items-center justify-center absolute inset-0 bg-[rgba(0,0,0,0.5)] ",children:(0,l.jsxs)("div",{ref:s,className:"w-full max-w-[500px] p-5 relative bg-project-gray-850 rounded-xl animations-all",children:[(0,l.jsx)("button",{onClick:()=>o(!1),className:"w-10 h-10 bg-red-600 rounded-full absolute -top-5 -right-5 text-lg font-black text-white",children:"X"}),(0,l.jsx)("h1",{className:"text-2xl text-project-gray-300 font-medium mb-5",children:r}),(0,l.jsx)("div",{className:"w-full",children:t})]})})}},1606:function(e,t,r){"use strict";r.d(t,{P:function(){return o}});var l=r(3827),a=r(4090);function o(e){let{value:t,setValue:r,options:o,product:s}=e,[n,c]=(0,a.useState)(!1);function i(e){console.log("value",t),t.includes(e)?r(t.filter(t=>t!==e)):r([...t,e])}return(0,l.jsxs)("div",{className:"w-full min-h-[1.5em] flex items-center relative gap-4 py-2 px-4 border border-project-blue-600 outline-none rounded-xl focus:border-project-blue-100 cursor-pointer ".concat(n?"border-project-blue-100":""," ").concat((null==s?void 0:s.items.webSources.length)?"cursor-not-allowed":""),onBlur:()=>c(!1),onClick:()=>c(e=>!e),children:[(0,l.jsxs)("span",{className:"flex flex-wrap gap-1 flex-grow text-project-gray-350",children:[!t.length&&(0,l.jsx)("p",{className:"text-project-gray-500",children:"Escolha os sites"}),(null==s?void 0:s.items.webSources.length)?null==s?void 0:s.items.webSources.map(e=>(0,l.jsxs)("button",{onClick:e=>{e.stopPropagation()},className:"flex items-center gap-2 border border-project-gray-700 p-2 rounded-lg cursor-not-allowed",children:[e.name,(0,l.jsx)("span",{className:"",children:"\xd7"})]},e.webSourceId)):t.map(e=>(0,l.jsxs)("button",{onClick:t=>{t.stopPropagation(),i(e)},className:"flex items-center gap-2 border border-project-gray-700 p-2 rounded-lg hover:bg-project-blue-100 hover:text-project-red-500",children:[e.name,(0,l.jsx)("span",{className:"",children:"\xd7"})]},e.id))]}),(0,l.jsx)("button",{onClick:e=>{e.stopPropagation(),r([])},className:"bg-none text-lg border-none outline-none p-0 text-project-gray-500 focus:text-white hover:text-white cursor-pointer ".concat((null==s?void 0:s.items.webSources.length)&&"cursor-not-allowed"),children:"\xd7"}),(0,l.jsx)("div",{className:"bg-project-gray-500 self-stretch w-[.05em]"}),(0,l.jsx)("div",{className:"translate-[0 25%] border-[.25em] border-transparent border-t-project-gray-500"}),(0,l.jsx)("ul",{className:"w-full absolute m-0 p-0 list-none min-h-full overflow-y-auto border border-project-blue-100 rounded-xl left-0 bg-project-gray-750 z-50 top-16 ".concat(n?"block":"hidden"),children:null==o?void 0:o.map(e=>(0,l.jsx)("li",{onClick:t=>{t.stopPropagation(),i(e),c(!1)},className:"py-1 px-2 text-project-gray-300 cursor-pointer hover:text-project-gray-900 hover:bg-project-blue-100",children:e.name},e.id))})]})}}},function(e){e.O(0,[519,999,792,369,540,971,69,744],function(){return e(e.s=8851)}),_N_E=e.O()}]);