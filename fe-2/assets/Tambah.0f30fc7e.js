import{u as A,r as l,a as K,b as C,c as h,o as x,d as D,e,t as r,f as n,w as c,B as T,g as j,h as F,i as u,F as N,n as W,j as q,k as z,l as E,m,A as v,T as b}from"./index.9945e784.js";const L={class:"pt-4 px-10 md:flex justify-between"},P={class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},R={class:"md:py-0 py-4"},U=m(" Kelas "),$=m(" Tambah "),I={class:"pt-4 px-10 md:flex justify-between"},M=e("div",null,null,-1),G={class:"md:py-0 py-4 space-x-2 space-y-2"},H=e("button",{class:"btn hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),m(" Kembali ")],-1),J={class:"px-4 py-4"},O={class:"w-full"},Q={class:"bg-base-100 shadow rounded-lg px-0 py-4"},X={class:"w-full lg:w-fi mx-4"},Y={class:"p-2 sm:p-6 xl:p-8"},Z={class:"pt-0 px-0"},ee={class:"w-full mx-0"},se={class:"bg-base-100 rounded-lg p-0 sm:p-6 xl:p-0"},ae={class:"grid md:grid-cols-2 gap-2"},te=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Nama",-1),le={class:"text-xs text-red-600 mt-1"},oe=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Walikelas",-1),ne={class:"text-xs text-red-600 mt-1"},de=e("div",{class:"w-full flex justify-end mt-4 px-20"},[e("button",{class:"btn btn-active btn-lg btn-primary"}," Simpan ")],-1),ue={name:"Tambah",setup(ie){A().setPagesActive("kelas");let _=l([]);const f=K(),w=C(),g=l([]);l([]);const k=l([]),t=l([]);l({label:"Semua Kelas",id:"Semua Kelas"}),w.params.id;const y=a=>a?a.length<1?"This Field must be at least 2 characters":!0:"This field is required",B=()=>{S()},S=async a=>{let s={nama:t.value.nama,walikelas_id:t.value.walikelas_id.id};try{const o=await v.post("gurubk/kelas",s);return b.success("Success","Data Berhasil update!"),f.push({name:"AdminKelas"}),o.data}catch(o){b.danger("Warning","Data gagal diupdate!"),console.error(o)}},d=async()=>{try{const a=await v.get("gurubk/walikelas");d.value=a.data,d.value.forEach(s=>{_.value.push({label:`${s.nama} (${s.jml_kelas} Kelas)`,id:s.id})})}catch(a){console.error(a)}};return d(),(a,s)=>{const o=h("router-link"),V=h("v-select");return x(),D(E,null,[e("div",L,[e("div",null,[e("span",P,r(g.value.nama),1)]),e("div",R,[n(j,null,{content:c(()=>[U,n(T),$]),_:1})])]),e("div",I,[M,e("div",G,[n(o,{to:{name:"AdminKelas"}},{default:c(()=>[H]),_:1})])]),e("div",J,[e("div",O,[e("div",Q,[e("div",X,[e("div",Y,[k.value?(x(),F(u(q),{key:0,onSubmit:B},{default:c(({errors:p})=>[e("div",Z,[e("div",ee,[e("div",se,[e("div",ae,[e("div",null,[te,n(u(N),{modelValue:t.value.nama,"onUpdate:modelValue":s[0]||(s[0]=i=>t.value.nama=i),rules:y,type:"text",name:"nama",ref:"nama",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),e("div",le,r(p.nama),1)]),e("div",null,[oe,n(V,{class:W(["py-2 px-3 w-72 mx-auto md:mx-0",{disabled:!1}]),options:u(_),modelValue:t.value.walikelas_id,"onUpdate:modelValue":s[1]||(s[1]=i=>t.value.walikelas_id=i)},null,8,["options","modelValue"]),e("div",ne,r(p.walikelas_id),1)])]),de])])])]),_:1})):z("",!0)])])])])])],64)}}};export{ue as default};
