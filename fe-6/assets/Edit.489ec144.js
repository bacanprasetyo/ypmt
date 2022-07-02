import{u as S,d as A,a as $,b as C,c as F,r as n,o as b,e as K,f as e,t as u,g as r,w as k,h as d,n as N,p as T,F as j,A as c,T as p,i as x}from"./index.fc06c4ac.js";import{B as q}from"./BreadCrumb.fbfc3a03.js";import{B as E}from"./BreadCrumbSpace.ec2385ea.js";import{F as P,a as h}from"./vee-validate.esm.ed15b338.js";const U={class:"pt-4 px-10 md:flex justify-between"},G={class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},W={class:"md:py-0 py-4"},L=x(" Klasifikasi "),R=x(" Edit "),z={class:"pt-4 px-10 md:flex justify-between"},I=e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"})],-1),M={class:"md:py-0 py-4 space-x-2 space-y-2"},H=e("button",{class:"btn hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),x(" Kembali ")],-1),J=[H],O={class:"px-4 py-4"},Q={class:"w-full"},X={class:"bg-white shadow rounded-lg px-0 py-4"},Y={class:"w-full lg:w-fi mx-4"},Z={class:"p-2 sm:p-6 xl:p-8"},ee={class:"pt-0 px-0"},ae={class:"w-full mx-0"},te={class:"bg-white rounded-lg p-0 sm:p-6 xl:p-0"},se={class:"grid md:grid-cols-2 gap-2"},oe=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Nama",-1),le={class:"text-xs text-red-600 mt-1"},ne=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Username",-1),re={class:"text-xs text-red-600 mt-1"},de=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Password",-1),ie={class:"text-xs text-red-600 mt-1"},ue=e("div",{class:"w-full flex justify-end mt-4 px-20"},[e("button",{class:"btn btn-active btn-lg btn-primary"}," Simpan ")],-1),ve={__name:"Edit",setup(me){const _=S();A(()=>_.getSekolah),_.$subscribe((a,t)=>{}),$().setPagesActive("sekolah");const w=C(),g=F(),i=g.params.id,v=g.params.id2;n([]);const s=n([]),y=n([]);(async()=>{try{const a=await c.get(`owner/datasekolah/${i}/gurubk/${v}`);return s.value={nama:a.data.nama,username:a.data.username},a.data}catch(a){console.error(a)}})();const m=a=>a?a.length<1?"This Field must be at least 2 characters":!0:"This field is required",B=()=>{D()},D=async a=>{let t={nama:s.value.nama,username:s.value.username,password:s.value.password};try{const o=await c.put(`owner/datasekolah/${i}/gurubk/${v}`,t);return p.success("Success","Data Berhasil ditambahkan!"),w.push({name:"AdminSekolahDetailPengguna",params:{id:i}}),o.data}catch(o){p.danger("Warning","Data gagal ditambahkan!"),console.error(o)}},f=n([]);let V=n([]);return(async()=>{try{const a=await c.get(`owner/datasekolah/${i}/walikelas`);return f.value=a.data,f.value.forEach(t=>{V.value.push({label:t.nama,id:t.id})}),a}catch(a){p.danger("Warning","Data Gagal dimuat"),console.error(a)}})(),(a,t)=>(b(),K(j,null,[e("div",U,[e("div",null,[e("span",G,u(s.value.nama),1)]),e("div",W,[r(q,null,{content:k(()=>[L,r(E),R]),_:1})])]),e("div",z,[I,e("div",M,[e("span",{onClick:t[0]||(t[0]=o=>d(w).go(-1))},J)])]),e("div",O,[e("div",Q,[e("div",X,[e("div",Y,[e("div",Z,[y.value?(b(),N(d(P),{key:0,onSubmit:B},{default:k(({errors:o})=>[e("div",ee,[e("div",ae,[e("div",te,[e("div",se,[e("div",null,[oe,r(d(h),{modelValue:s.value.nama,"onUpdate:modelValue":t[1]||(t[1]=l=>s.value.nama=l),rules:m,type:"text",name:"nama",ref:"nama",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),e("div",le,u(o.nama),1)]),e("div",null,[ne,r(d(h),{modelValue:s.value.username,"onUpdate:modelValue":t[2]||(t[2]=l=>s.value.username=l),rules:m,type:"text",name:"username",ref:"username",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),e("div",re,u(o.username),1)]),e("div",null,[de,r(d(h),{modelValue:s.value.password,"onUpdate:modelValue":t[3]||(t[3]=l=>s.value.password=l),rules:m,type:"password",name:"password",ref:"password",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),e("div",ie,u(o.password),1)])]),ue])])])]),_:1})):T("",!0)])])])])])],64))}};export{ve as default};
