import{u as V,d as C,a as $,b as j,c as A,r as l,j as F,o as b,e as K,f as a,t as m,g as i,w as f,h as d,v as N,q as T,F as E,A as u,T as p,S as W,i as _}from"./index.45c605a6.js";import{B as q,a as G}from"./BreadCrumbSpace.65bc8e75.js";import{F as z,a as L}from"./vee-validate.esm.1f9274e8.js";const P={class:"pt-4 px-10 md:flex justify-between"},R={class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},U={class:"md:py-0 py-4"},I=_(" Klasifikasi "),M=_(" Edit "),H={class:"pt-4 px-10 md:flex justify-between"},J=a("div",null,[a("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"})],-1),O={class:"md:py-0 py-4 space-x-2 space-y-2"},Q=a("button",{class:"btn hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[a("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),_(" Kembali ")],-1),X=[Q],Y={class:"px-4 py-4"},Z={class:"w-full"},aa={class:"bg-white shadow rounded-lg px-0 py-4"},ta={class:"w-full lg:w-fi mx-4"},ea={class:"p-2 sm:p-6 xl:p-8"},sa={class:"pt-0 px-0"},oa={class:"w-full mx-0"},la={class:"bg-white rounded-lg p-0 sm:p-6 xl:p-0"},na={class:"grid md:grid-cols-2 gap-2"},ia=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Nama",-1),da={class:"text-xs text-red-600 mt-1"},ra=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Walikelas",-1),ca={class:"text-xs text-red-600 mt-1"},ma=a("div",{class:"w-full flex justify-end mt-4 px-20"},[a("button",{class:"btn btn-active btn-lg btn-primary"}," Simpan ")],-1),ga={__name:"Edit",setup(ua){const h=V();C(()=>h.getSekolah),h.$subscribe((t,e)=>{}),$().setPagesActive("sekolah");const x=j(),v=A(),n=v.params.id,w=v.params.id2;l([]);const s=l([]),y=l([]);(async()=>{try{const t=await u.get(`owner/datasekolah/${n}/kelas/${w}`);return s.value={nama:t.data.nama,nomeridentitas:t.data.nomeridentitas,alamat:t.data.alamat,jk:t.data.jk,walikelas_id:{label:`${t.data.walikelas?t.data.walikelas.nama:""}`,id:t.data.walikelas_id}},t.data}catch(t){console.error(t)}})();const B=t=>t?t.length<1?"This Field must be at least 2 characters":!0:"This field is required",D=()=>{S()},S=async t=>{let e={nama:s.value.nama,walikelas_id:s.value.walikelas_id.id};try{const o=await u.put(`owner/datasekolah/${n}/kelas/${w}`,e);return p.success("Success","Data Berhasil ditambahkan!"),x.push({name:"AdminSekolahDetailKelas",params:{id:n}}),o.data}catch(o){p.danger("Warning","Data gagal ditambahkan!"),console.error(o)}},g=l([]);let k=l([]);return(async()=>{try{const t=await u.get(`owner/datasekolah/${n}/walikelas`);return g.value=t.data,g.value.forEach(e=>{k.value.push({label:e.nama,id:e.id})}),t}catch(t){p.danger("Warning","Data Gagal dimuat"),console.error(t)}})(),(t,e)=>{const o=F("v-select");return b(),K(E,null,[a("div",P,[a("div",null,[a("span",R,m(s.value.nama),1)]),a("div",U,[i(q,null,{content:f(()=>[I,i(G),M]),_:1})])]),a("div",H,[J,a("div",O,[a("span",{onClick:e[0]||(e[0]=r=>d(x).go(-1))},X)])]),a("div",Y,[a("div",Z,[a("div",aa,[a("div",ta,[a("div",ea,[y.value?(b(),N(d(z),{key:0,onSubmit:D},{default:f(({errors:r})=>[a("div",sa,[a("div",oa,[a("div",la,[a("div",na,[a("div",null,[ia,i(d(L),{modelValue:s.value.nama,"onUpdate:modelValue":e[1]||(e[1]=c=>s.value.nama=c),rules:B,type:"text",name:"nama",ref:"nama",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),a("div",da,m(r.nama),1)]),a("div",null,[ra,i(o,{class:W(["py-2 px-3 w-72 mx-auto md:mx-0",{disabled:!1}]),options:d(k),modelValue:s.value.walikelas_id,"onUpdate:modelValue":e[2]||(e[2]=c=>s.value.walikelas_id=c)},null,8,["options","modelValue"]),a("div",ca,m(r.nama),1)])]),ma])])])]),_:1})):T("",!0)])])])])])],64)}}};export{ga as default};
