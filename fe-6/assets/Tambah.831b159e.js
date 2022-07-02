import{u as w,d as b,a as g,b as y,c as k,r as u,o as V,e as B,f as e,t as r,g as o,w as _,h as n,F as S,A,T as h,i as c}from"./index.4a2704ea.js";import{B as D}from"./BreadCrumb.2392f240.js";import{B as F}from"./BreadCrumbSpace.b214e2a9.js";import{F as T,a as m}from"./vee-validate.esm.a3ee68bd.js";const q={class:"pt-4 px-10 md:flex justify-between"},C={class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},U={class:"md:py-0 py-4"},j=c(" Yayasan "),N=c(" Edit "),E={class:"pt-4 px-10 md:flex justify-between"},P=e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"})],-1),G={class:"md:py-0 py-4 space-x-2 space-y-2"},L=e("button",{class:"btn hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),c(" Kembali ")],-1),R=[L],Y={class:"px-4 py-4"},$={class:"w-full"},z={class:"bg-white shadow rounded-lg px-0 py-4"},I={class:"w-full lg:w-fi mx-4"},K={class:"p-2 sm:p-6 xl:p-8"},M={class:"pt-0 px-0"},W={class:"w-full mx-0"},H={class:"bg-white rounded-lg p-0 sm:p-6 xl:p-0"},J={class:"grid md:grid-cols-2 gap-2"},O=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Nama",-1),Q={class:"text-xs text-red-600 mt-1"},X=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Email",-1),Z={class:"text-xs text-red-600 mt-1"},ee=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Username",-1),se={class:"text-xs text-red-600 mt-1"},te=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Password",-1),ae={class:"text-xs text-red-600 mt-1"},le=e("div",{class:"w-full flex justify-end mt-4 px-20"},[e("button",{class:"btn btn-active btn-lg btn-primary"}," Simpan ")],-1),ce={__name:"Tambah",setup(oe){const p=w();b(()=>p.getSekolah),p.$subscribe((d,t)=>{}),g().setPagesActive("yayasan");const x=y();k().params.id,u([]);const s=u([]);u([]);const i=d=>d?d.length<1?"This Field must be at least 2 characters":!0:"This field is required",v=()=>{f()},f=async d=>{let t={nama:s.value.nama,email:s.value.email,username:s.value.username,password:s.value.password};try{const a=await A.post("owner/yayasan",t);return h.success("Success","Data Berhasil ditambahkan!"),x.push({name:"AdminYayasan"}),a.data}catch(a){h.danger("Warning","Data gagal ditambahkan!"),console.error(a)}};return(d,t)=>(V(),B(S,null,[e("div",q,[e("div",null,[e("span",C,r(s.value.nama),1)]),e("div",U,[o(D,null,{content:_(()=>[j,o(F),N]),_:1})])]),e("div",E,[P,e("div",G,[e("span",{onClick:t[0]||(t[0]=a=>n(x).go(-1))},R)])]),e("div",Y,[e("div",$,[e("div",z,[e("div",I,[e("div",K,[o(n(T),{onSubmit:v},{default:_(({errors:a})=>[e("div",M,[e("div",W,[e("div",H,[e("div",J,[e("div",null,[O,o(n(m),{modelValue:s.value.nama,"onUpdate:modelValue":t[1]||(t[1]=l=>s.value.nama=l),rules:i,type:"text",name:"nama",ref:"nama",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),e("div",Q,r(a.nama),1)]),e("div",null,[X,o(n(m),{modelValue:s.value.email,"onUpdate:modelValue":t[2]||(t[2]=l=>s.value.email=l),rules:i,type:"email",name:"email",ref:"email",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),e("div",Z,r(a.email),1)]),e("div",null,[ee,o(n(m),{modelValue:s.value.username,"onUpdate:modelValue":t[3]||(t[3]=l=>s.value.username=l),rules:i,type:"text",name:"username",ref:"username",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),e("div",se,r(a.username),1)]),e("div",null,[te,o(n(m),{modelValue:s.value.password,"onUpdate:modelValue":t[4]||(t[4]=l=>s.value.password=l),rules:i,type:"password",name:"password",ref:"password",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),e("div",ae,r(a.password),1)])]),le])])])]),_:1})])])])])])],64))}};export{ce as default};
