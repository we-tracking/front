(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19],{1233:function(e,t,r){Promise.resolve().then(r.bind(r,4296))},7907:function(e,t,r){"use strict";var a=r(5313);r.o(a,"redirect")&&r.d(t,{redirect:function(){return a.redirect}}),r.o(a,"usePathname")&&r.d(t,{usePathname:function(){return a.usePathname}}),r.o(a,"useRouter")&&r.d(t,{useRouter:function(){return a.useRouter}})},648:function(e,t,r){"use strict";r.d(t,{h:function(){return l}});var a=r(7908),o=r(146);let l=a.Z.create({baseURL:"http://127.0.0.1",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});l.interceptors.request.use(e=>{let t=o.Z.get("token");return t&&(e.headers=e.headers||{},e.headers.Authorization="Bearer ".concat(t)),e},e=>Promise.reject(e))},8907:function(e,t,r){"use strict";r.d(t,{D:function(){return o}});var a=r(648);async function o(){return a.h.get("/product")}},373:function(e,t,r){"use strict";r.d(t,{J:function(){return o}});var a=r(648);async function o(){return a.h.get("/web-source")}},6977:function(e,t,r){"use strict";r.d(t,{s:function(){return o}});var a=r(648);async function o(e){return a.h.post("/product",e)}},4296:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var a=r(3827),o=r(4090),l=r(94),s=r(8907),n=r(6540),c=r(8792),u=r(3558),i=r(373),d=r(1606),x=r(6977),p=r(6288),m=r(7907),h=r(1632),b=r(648);async function f(e){return b.h.get("/product/delete/".concat(e))}function j(e){let{id:t,nameProduct:r,setCloseModal:l}=e,[s,n]=(0,o.useState)(!1),c=(0,o.useRef)(null);async function u(){n(!0);try{let e=await f(t);p.toast.promise(()=>new Promise(t=>setTimeout(()=>t(e),2e3)),{loading:"Excluindo...",success:e=>"".concat(e.data.message)}),200===e.status&&n(!1),setTimeout(()=>location.reload(),4e3)}catch(e){p.toast.error(e.response.data.message),n(!1)}}return(0,o.useEffect)(()=>{let e=e=>{c.current&&!c.current.contains(e.target)&&l(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[l]),(0,a.jsx)("div",{className:"absolute w-full h-full flex items-center justify-center inset-0 bg-[rgba(0,0,0,0.4)]",children:(0,a.jsxs)("div",{ref:c,className:"w-full max-w-lg max-h-[800px] bg-project-gray-800 relative rounded-xl pb-10 animations-all",children:[(0,a.jsx)("button",{onClick:()=>l(!1),className:"w-10 h-10 bg-red-600 rounded-full absolute -top-5 -right-5 text-lg font-black text-white transition-all hover:scale-105",children:"X"}),(0,a.jsx)("h1",{className:"text-3xl text-project-gray-300 text-center py-5",children:"Excluir produto"}),(0,a.jsxs)("div",{className:"flex flex-col gap-2 mb-10",children:[(0,a.jsx)("p",{className:"text-base text-project-gray-600 text-center",children:"Voc\xea est\xe1 excluindo este produto:"}),(0,a.jsx)("p",{className:"text-xl text-project-gray-300 text-center",children:r}),(0,a.jsx)("p",{className:"text-base text-project-gray-600 text-center",children:"Tem certeza ?"})]}),(0,a.jsxs)("div",{className:"flex gap-5 px-5",children:[(0,a.jsx)("button",{disabled:s,onClick:u,className:"w-full flex items-center justify-center text-base py-2 rounded-xl text-white transition-all bg-project-blue-600 hover:scale-105 disabled:cursor-wait",children:s?(0,a.jsx)(h.f,{}):"Sim"}),(0,a.jsx)("button",{onClick:()=>l(!1),className:"w-full text-base py-2 rounded-xl text-white transition-all bg-project-red-500 hover:scale-105",children:"N\xe3o"})]})]})})}function g(){let[e,t]=(0,o.useState)([]),[r,h]=(0,o.useState)(""),[b,f]=(0,o.useState)(""),[g,w]=(0,o.useState)(""),[y,v]=(0,o.useState)(""),[N,C]=(0,o.useState)(0),[k,S]=(0,o.useState)([]),P=(0,m.useRouter)(),[E,z]=(0,o.useState)(!1),[A,L]=(0,o.useState)(!1),{data:R,isLoading:B}=(0,n.a)({queryKey:["allProducts"],queryFn:s.D}),{data:T}=(0,n.a)({queryKey:["webSource"],queryFn:i.J});if((0,o.useLayoutEffect)(()=>{e&&S(e.map(e=>({id:e.id,url:""})))},[e]),B)return(0,a.jsx)(u.g,{});async function V(){try{let e=await (0,x.s)({name:r,ean:b,imagePath:g,webSources:k});p.toast.promise(()=>new Promise(t=>setTimeout(()=>t(e),2e3)),{loading:"Verificando...",success:()=>"".concat(e.data.message)}),console.log("produto cadastrado",e),200===e.status&&setTimeout(()=>P.push("/dashboard/produtos/".concat(e.data.data.id)),4e3)}catch(e){p.toast.error(null==e?void 0:e.response.data.message)}}let _=(e,t)=>{S(r=>r.map(r=>r.id===e?{...r,url:t}:r))};return(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsxs)("div",{className:"animations-all",children:[(0,a.jsx)("button",{onClick:()=>L(!0),className:"py-3 px-5 mb-10 rounded-xl font-semibold bg-gradient text-black",children:"Novo Produto"}),(0,a.jsxs)("table",{className:"block w-full bg-project-gray-900 border border-project-gray-800 rounded-xl",children:[(0,a.jsx)("thead",{className:"block",children:(0,a.jsxs)("tr",{className:"flex w-full text-project-gray-300 text-2xl text-left border-b border-project-gray-800 p-5",children:[(0,a.jsx)("th",{className:"w-1/2 ",children:"Nome"}),(0,a.jsx)("th",{className:"w-1/5"}),(0,a.jsx)("th",{className:"w-1/5 "}),(0,a.jsx)("th",{className:"w-1/5 "})]})}),(0,a.jsx)("tbody",{className:"block w-full h-[700px] overflow-y-auto scroll",children:(null==R?void 0:R.data.data.length)?null==R?void 0:R.data.data.map((e,t)=>(0,a.jsxs)("tr",{className:"w-full block text-base text-project-gray-700 p-5 ".concat(t%2==0?"bg-[#303030]":"bg-[#2A2A2B]"),children:[(0,a.jsx)("td",{className:"w-1/2",children:e.name}),(0,a.jsx)("td",{className:"w-1/2",children:(0,a.jsx)(c.default,{href:"produtos/".concat(e.id),className:"inline-block bg-project-blue-600 text-white px-4 py-2 rounded-xl mr-2 hover:scale-105",children:"Detalhes"})}),(0,a.jsx)("td",{className:"w-1/2",children:(0,a.jsx)("button",{onClick:()=>{var t,r;return t=e.id,r=e.name,void(C(t),v(r),z(!0))},className:" bg-project-red-500 text-white px-4 py-2 rounded-xl hover:scale-105",children:"Excluir"})})]},e.id)):(0,a.jsx)("tr",{className:"w-full block text-base text-project-gray-700 p-5",children:(0,a.jsx)("td",{className:"w-full flex items-center justify-center text-xl text-project-gray-350",children:"Voce nao tem produtos cadastrados"})})})]})]}),A&&(0,a.jsxs)(l.u,{closeModal:L,title:"Cadastrar novo produto",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-5 mb-10",children:[(0,a.jsx)("input",{className:"w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl",placeholder:"Nome",type:"text",onChange:e=>h(e.target.value)}),(0,a.jsx)("input",{className:"w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl",placeholder:"Ean do produto",type:"text",onChange:e=>f(e.target.value)}),(0,a.jsx)("input",{className:"w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl",placeholder:"Link da imagem",type:"text",onChange:e=>w(e.target.value)}),(0,a.jsx)(d.P,{options:null==T?void 0:T.data.data,value:e,setValue:t})]}),null==k?void 0:k.map(e=>(0,a.jsxs)("div",{className:"flex flex-col gap-5 my-5",children:[1===e.id&&(0,a.jsx)("input",{className:"w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl",placeholder:"Informe a url do Extra",value:e.url,onChange:t=>_(e.id,t.target.value)}),2===e.id&&(0,a.jsx)("input",{className:"w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl",placeholder:"Informe a url da Casas Bahia",value:e.url,onChange:t=>_(e.id,t.target.value)}),3===e.id&&(0,a.jsx)("input",{className:"w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl",placeholder:"Informe a url do Ponto Frio",value:e.url,onChange:t=>_(e.id,t.target.value)}),4===e.id&&(0,a.jsx)("input",{className:"w-full py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl",placeholder:"Informe a url do Carrefour",value:e.url,onChange:t=>_(e.id,t.target.value)})]},e.id)),(0,a.jsx)("button",{onClick:V,className:"w-full text-base py-2 rounded-xl text-white bg-project-blue-600",children:"Cadastrar produto"})]}),E&&(0,a.jsx)(j,{id:N,nameProduct:y,setCloseModal:z})]})}},3558:function(e,t,r){"use strict";r.d(t,{g:function(){return o}});var a=r(3827);function o(){return(0,a.jsx)("div",{className:"flex items-center justify-center absolute inset-0",children:(0,a.jsxs)("svg",{className:"w-20 h-20 text-project-blue-100 animate-spin transition-all",fill:"none",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",fill:"currentColor"})]})})}},1632:function(e,t,r){"use strict";r.d(t,{f:function(){return o}});var a=r(3827);function o(){return(0,a.jsxs)("svg",{className:"w-6 h-6 text-white animate-spin transition-all",fill:"none",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",fill:"currentColor"})]})}},94:function(e,t,r){"use strict";r.d(t,{u:function(){return l}});var a=r(3827),o=r(4090);function l(e){let{children:t,title:r,closeModal:l}=e,s=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let e=e=>{s.current&&!s.current.contains(e.target)&&l(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[l]),(0,a.jsx)("div",{className:"w-full h-full flex items-center justify-center absolute inset-0 bg-[rgba(0,0,0,0.5)] ",children:(0,a.jsxs)("div",{ref:s,className:"w-full max-w-[500px] p-5 relative bg-project-gray-850 rounded-xl animations-all",children:[(0,a.jsx)("button",{onClick:()=>l(!1),className:"w-10 h-10 bg-red-600 rounded-full absolute -top-5 -right-5 text-lg font-black text-white",children:"X"}),(0,a.jsx)("h1",{className:"text-2xl text-project-gray-300 font-medium mb-5",children:r}),(0,a.jsx)("div",{className:"w-full",children:t})]})})}},1606:function(e,t,r){"use strict";r.d(t,{P:function(){return l}});var a=r(3827),o=r(4090);function l(e){let{value:t,setValue:r,options:l,product:s}=e,[n,c]=(0,o.useState)(!1);function u(e){console.log("value",t),t.includes(e)?r(t.filter(t=>t!==e)):r([...t,e])}return(0,a.jsxs)("div",{className:"w-full min-h-[1.5em] flex items-center relative gap-4 py-2 px-4 border border-project-blue-600 outline-none rounded-xl focus:border-project-blue-100 cursor-pointer ".concat(n?"border-project-blue-100":""," ").concat((null==s?void 0:s.items.webSources.length)?"cursor-not-allowed":""),onBlur:()=>c(!1),onClick:()=>c(e=>!e),children:[(0,a.jsxs)("span",{className:"flex flex-wrap gap-1 flex-grow text-project-gray-350",children:[!t.length&&(0,a.jsx)("p",{className:"text-project-gray-500",children:"Escolha os sites"}),(null==s?void 0:s.items.webSources.length)?null==s?void 0:s.items.webSources.map(e=>(0,a.jsxs)("button",{onClick:e=>{e.stopPropagation()},className:"flex items-center gap-2 border border-project-gray-700 p-2 rounded-lg cursor-not-allowed",children:[e.name,(0,a.jsx)("span",{className:"",children:"\xd7"})]},e.webSourceId)):t.map(e=>(0,a.jsxs)("button",{onClick:t=>{t.stopPropagation(),u(e)},className:"flex items-center gap-2 border border-project-gray-700 p-2 rounded-lg hover:bg-project-blue-100 hover:text-project-red-500",children:[e.name,(0,a.jsx)("span",{className:"",children:"\xd7"})]},e.id))]}),(0,a.jsx)("button",{onClick:e=>{e.stopPropagation(),r([])},className:"bg-none text-lg border-none outline-none p-0 text-project-gray-500 focus:text-white hover:text-white cursor-pointer ".concat((null==s?void 0:s.items.webSources.length)&&"cursor-not-allowed"),children:"\xd7"}),(0,a.jsx)("div",{className:"bg-project-gray-500 self-stretch w-[.05em]"}),(0,a.jsx)("div",{className:"translate-[0 25%] border-[.25em] border-transparent border-t-project-gray-500"}),(0,a.jsx)("ul",{className:"w-full absolute m-0 p-0 list-none min-h-full overflow-y-auto border border-project-blue-100 rounded-xl left-0 bg-project-gray-750 z-50 top-16 ".concat(n?"block":"hidden"),children:null==l?void 0:l.map(e=>(0,a.jsx)("li",{onClick:t=>{t.stopPropagation(),u(e),c(!1)},className:"py-1 px-2 text-project-gray-300 cursor-pointer hover:text-project-gray-900 hover:bg-project-blue-100",children:e.name},e.id))})]})}}},function(e){e.O(0,[519,999,792,369,540,971,69,744],function(){return e(e.s=1233)}),_N_E=e.O()}]);