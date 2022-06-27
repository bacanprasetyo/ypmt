import{u as b,d as k,a as g,b as w,c as y,r as m,o as V,e as B,f as e,g as o,w as _,h as n,F as S,A as j,T as v,t as u,i as c}from"./index.8258c87c.js";import{B as A,a as T}from"./BreadCrumbSpace.6f520c36.js";import{F as D,a as r}from"./vee-validate.esm.c6862196.js";const F={class:"pt-4 px-10 md:flex justify-between"},q=e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"}," Kecerdasan Majemuk ")],-1),C={class:"md:py-0 py-4"},K=c(" Kecerdasan Majemuk "),M=c(" Tambah "),U={class:"pt-4 px-10 md:flex justify-between"},I=e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"})],-1),N={class:"md:py-0 py-4 space-x-2 space-y-2"},G=e("button",{class:"btn hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),c(" Kembali ")],-1),L=[G],P={class:"px-4 py-4"},R={class:"w-full"},$={class:"bg-white shadow rounded-lg px-0 py-4"},z={class:"w-full lg:w-fi mx-4"},E={class:"p-2 sm:p-6 xl:p-8"},W={class:"pt-0 px-0"},H={class:"w-full mx-0"},J={class:"bg-white rounded-lg p-0 sm:p-6 xl:p-0"},O={class:"grid md:grid-cols-2 gap-2"},Q=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Multiple Intellegences",-1),X={class:"text-xs text-red-600 mt-1"},Y=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Visual",-1),Z={class:"text-xs text-red-600 mt-1"},ee=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Auditif",-1),te={class:"text-xs text-red-600 mt-1"},se=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"KInestetik",-1),ae={class:"text-xs text-red-600 mt-1"},le=e("div",{class:"w-full flex justify-end mt-4 px-20"},[e("button",{class:"btn btn-active btn-lg btn-primary"}," Simpan ")],-1),me={__name:"Tambah",setup(oe){const p=b();k(()=>p.getSekolah),p.$subscribe((i,t)=>{}),g().setPagesActive("kecerdasanmajemuk");const x=w();y().params.id,m([]);const s=m([]);m([]);const d=i=>i?i.length<1?"This Field must be at least 2 characters":!0:"This field is required",f=()=>{h()},h=async i=>{let t={nama:s.value.nama,visual:s.value.visual,auditif:s.value.auditif,kinestetik:s.value.kinestetik};try{const a=await j.post("owner/kecerdasanmajemuk",t);return v.success("Success","Data Berhasil ditambahkan!"),x.push({name:"AdminKecerdasanMajemuk"}),a.data}catch(a){v.danger("Warning","Data gagal ditambahkan!"),console.error(a)}};return(i,t)=>(V(),B(S,null,[e("div",F,[q,e("div",C,[o(A,null,{content:_(()=>[K,o(T),M]),_:1})])]),e("div",U,[I,e("div",N,[e("span",{onClick:t[0]||(t[0]=a=>n(x).go(-1))},L)])]),e("div",P,[e("div",R,[e("div",$,[e("div",z,[e("div",E,[o(n(D),{onSubmit:f},{default:_(({errors:a})=>[e("div",W,[e("div",H,[e("div",J,[e("div",O,[e("div",null,[Q,o(n(r),{modelValue:s.value.nama,"onUpdate:modelValue":t[1]||(t[1]=l=>s.value.nama=l),rules:d,type:"text",name:"nama",ref:"nama",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),e("div",X,u(a.nama),1)]),e("div",null,[Y,o(n(r),{modelValue:s.value.visual,"onUpdate:modelValue":t[2]||(t[2]=l=>s.value.visual=l),rules:d,type:"text",name:"visual",ref:"visual",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),e("div",Z,u(a.visual),1)]),e("div",null,[ee,o(n(r),{modelValue:s.value.auditif,"onUpdate:modelValue":t[3]||(t[3]=l=>s.value.auditif=l),rules:d,type:"text",name:"auditif",ref:"auditif",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),e("div",te,u(a.auditif),1)]),e("div",null,[se,o(n(r),{modelValue:s.value.kinestetik,"onUpdate:modelValue":t[4]||(t[4]=l=>s.value.kinestetik=l),rules:d,type:"text",name:"kinestetik",ref:"kinestetik",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),e("div",ae,u(a.kinestetik),1)])]),le])])])]),_:1})])])])])])],64))}};export{me as default};
