import{u as y,r as a,a as B,b as S,c as V,o as _,d as A,e,t as i,f as n,w as r,B as C,g as D,h as K,i as u,F as x,j as N,k as T,l as j,m as c,A as F,T as h}from"./index.181de641.js";const W={class:"pt-4 px-10 md:flex justify-between"},q={class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},E={class:"md:py-0 py-4"},I=c(" WaliKelas "),L=c(" Edit "),P={class:"pt-4 px-10 md:flex justify-between"},R=e("div",null,null,-1),U={class:"md:py-0 py-4 space-x-2 space-y-2"},z=e("button",{class:"btn hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),c(" Kembali ")],-1),M={class:"px-4 py-4"},G={class:"w-full"},H={class:"bg-base-100 shadow rounded-lg px-0 py-4"},J={class:"w-full lg:w-fi mx-4"},O={class:"p-2 sm:p-6 xl:p-8"},Q={class:"pt-0 px-0"},X={class:"w-full mx-0"},Y={class:"bg-base-100 rounded-lg p-0 sm:p-6 xl:p-0"},Z={class:"grid md:grid-cols-2 gap-2"},$=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Nama",-1),ee={class:"text-xs text-red-600 mt-1"},te=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Nomer Induk",-1),se={class:"text-xs text-red-600 mt-1"},ae=e("div",{class:"w-full flex justify-end mt-4 px-20"},[e("button",{class:"btn btn-active btn-lg btn-primary"}," Simpan ")],-1),de={name:"Tambah",setup(oe){y().setPagesActive("walikelas"),a([]);const v=B(),b=S(),f=a([]);a([]);const g=a([]),t=a([]);a({label:"Semua Kelas",id:"Semua Kelas"}),b.params.id;const m=l=>l?l.length<1?"This Field must be at least 2 characters":!0:"This field is required",w=()=>{k()},k=async l=>{let s={nama:t.value.nama,nomerinduk:t.value.nomerinduk};try{const o=await F.post("gurubk/walikelas",s);return h.success("Success","Data Berhasil update!"),v.push({name:"AdminWaliKelas"}),o.data}catch(o){h.danger("Warning","Data gagal diupdate!"),console.error(o)}};return(l,s)=>{const o=V("router-link");return _(),A(j,null,[e("div",W,[e("div",null,[e("span",q,i(f.value.nama),1)]),e("div",E,[n(D,null,{content:r(()=>[I,n(C),L]),_:1})])]),e("div",P,[R,e("div",U,[n(o,{to:{name:"AdminWaliKelas"}},{default:r(()=>[z]),_:1})])]),e("div",M,[e("div",G,[e("div",H,[e("div",J,[e("div",O,[g.value?(_(),K(u(N),{key:0,onSubmit:w},{default:r(({errors:p})=>[e("div",Q,[e("div",X,[e("div",Y,[e("div",Z,[e("div",null,[$,n(u(x),{modelValue:t.value.nama,"onUpdate:modelValue":s[0]||(s[0]=d=>t.value.nama=d),rules:m,type:"text",name:"nama",ref:"nama",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),e("div",ee,i(p.nama),1)]),e("div",null,[te,n(u(x),{modelValue:t.value.nomerinduk,"onUpdate:modelValue":s[1]||(s[1]=d=>t.value.nomerinduk=d),rules:m,type:"text",name:"nomerinduk",ref:"nomerinduk",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),e("div",se,i(p.nomerinduk),1)])]),ae])])])]),_:1})):T("",!0)])])])])])],64)}}};export{de as default};
