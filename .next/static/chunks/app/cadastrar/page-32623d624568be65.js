(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{8844:function(e,t,r){Promise.resolve().then(r.bind(r,8152))},648:function(e,t,r){"use strict";r.d(t,{h:function(){return n}});var a=r(7908),s=r(146);let n=a.Z.create({baseURL:"http://127.0.0.1",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});n.interceptors.request.use(e=>{let t=s.Z.get("token");return t&&(e.headers=e.headers||{},e.headers.Authorization="Bearer ".concat(t)),e},e=>Promise.reject(e))},8152:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var a=r(3827),s=r(930),n=r(703),o=r(4090),i=r(146),c=r(7907),l=r(8792),u=r(648),d=r(6288),p=r(1632);function h(){let[e,t]=(0,o.useState)(""),[r,h]=(0,o.useState)(""),[x,f]=(0,o.useState)(""),[m,j]=(0,o.useState)(!1),b=(0,c.useRouter)();async function g(){j(!0);try{let t=await u.h.post("/user/create",{email:e,password:r,confirmPassword:x});d.toast.promise(()=>new Promise(e=>setTimeout(()=>e(t),2e3)),{loading:"Criando...",success:e=>"".concat(e.data.message)}),setTimeout(()=>b.push("/entrar"),4e3)}catch(e){d.toast.error(e.response.data.message),j(!1)}}return(0,o.useLayoutEffect)(()=>{i.Z.get("user")&&(0,c.redirect)("dashboard/home")},[]),(0,a.jsxs)("div",{className:"w-full min-h-screen flex flex-col items-center justify-center",children:[(0,a.jsx)(n.default,{alt:"Logo",src:s.Z,width:100,height:100,sizes:"(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33.3vw"}),(0,a.jsxs)("div",{className:"w-full max-w-[480px] flex flex-col gap-5 mt-10 py-10 px-5 border border-project-blue-600 rounded-xl",children:[(0,a.jsx)("h1",{className:"text-3xl text-center text-project-blue-100",children:"Crie sua conta"}),(0,a.jsx)("input",{onChange:e=>t(e.target.value),className:"py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl",placeholder:"Email",type:"text"}),(0,a.jsx)("input",{onChange:e=>h(e.target.value),className:"py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl",placeholder:"Senha",type:"password"}),(0,a.jsx)("input",{onChange:e=>f(e.target.value),className:"py-2 px-4 border border-project-blue-600 text-white bg-project-gray-900 rounded-xl",placeholder:"Confirmar senha",type:"password"}),(0,a.jsx)("button",{disabled:m,onClick:g,className:"flex items-center justify-center text-base py-2 rounded-xl text-white bg-project-blue-600 disabled:cursor-wait",children:m?(0,a.jsx)(p.f,{}):"Criar"}),(0,a.jsxs)("p",{className:"text-project-gray-600 text-right",children:["J\xe1 \xe9 cadastrado? entre ",(0,a.jsx)(l.default,{href:"/entrar",className:"text-project-blue-300 underline",children:"aqui!"})]})]})]})}},1632:function(e,t,r){"use strict";r.d(t,{f:function(){return s}});var a=r(3827);function s(){return(0,a.jsxs)("svg",{className:"w-6 h-6 text-white animate-spin transition-all",fill:"none",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",fill:"currentColor"})]})}},930:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo.165c366f.png",height:101,width:100,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAz0lEQVR42i1Puw6CQBC8XzB8j28RFfE0ihZqY2WjtYUWFCYk2lLiJ0FPSXZV/AOaW3cJl0wymZmb3VV6CIrRmNkQzUeYaQezmY2RaEoeG5a2MdVDpFELyO0CCWc9FU8Cr1ooj4e32a/RTPtQzp1KixWTfNwG8j00j7AgwWKMxmkCiae4Nj8fPxRcC3MPCnqGP7pdvubEGn/MFdfFaw9pu8Jy5aLZaDQ7H0seJfvEajlBi0OJ2wPyBkDMSfikA4k/RYsDIGjwohEjqxFxU3XmH0RrjoXq9fbqAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[519,999,792,202,971,69,744],function(){return e(e.s=8844)}),_N_E=e.O()}]);