import{u as w,d as k,a as y,b as j,c as B,r as n,o as S,e as D,f as t,t as p,g as l,w as m,h as _,F as A,A as h,T as r,x as T,V as P,i}from"./index.448f190d.js";import{B as C,a as F}from"./BreadCrumbSpace.fc234203.js";import{F as V}from"./vee-validate.esm.45d16ae2.js";const G={class:"pt-4 px-10 md:flex justify-between"},K={class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},N={class:"md:py-0 py-4"},$=i(" Klasifikasi "),E=i(" Edit "),L={class:"pt-4 px-10 md:flex justify-between"},M=t("div",null,[t("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"})],-1),R={class:"md:py-0 py-4 space-x-2 space-y-2"},W=t("button",{class:"btn hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),i(" Kembali ")],-1),q=[W],z={class:"px-4 py-4"},I={class:"w-full"},U={class:"bg-white shadow rounded-lg px-0 py-4"},H={class:"w-full lg:w-fi mx-4"},J={class:"p-2 sm:p-6 xl:p-8"},O={class:"pt-0 px-0"},Q={class:"w-full mx-0"},X={class:"bg-white rounded-lg p-0 sm:p-6 xl:p-0"},Y={class:"grid md:grid-cols-2 gap-2"},Z={class:"grid col-span-2"},tt=t("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Penjelasan",-1),et={class:"text-xs text-red-600 mt-1"},st=t("div",{class:"w-full flex justify-end mt-4 px-20"},[t("button",{class:"btn btn-active btn-lg btn-primary"}," Simpan ")],-1),ct={__name:"DetailTambah",setup(at){const d=w();k(()=>d.getSekolah),d.$subscribe((e,s)=>{}),y().setPagesActive("katabijak");const c=j(),u=B().params.id;n([]);const o=n([]);n([]);const x=n([]);(async()=>{try{const e=await h.get("owner/paket");return x.value=e.data,e}catch(e){r.danger("Warning","Data Gagal dimuat"),console.error(e)}})();const g=e=>e?e.length<1?"This Field must be at least 2 characters":!0:"This field is required",b=()=>{v()},v=async e=>{let s={penjelasan:o.value.penjelasan};try{const a=await h.post(`owner/katabijak/${u}/detail`,s);return r.success("Success","Data Berhasil ditambahkan!"),c.push({name:"AdminKatabijakDetail",params:{id:u}}),a.data}catch(a){r.danger("Warning","Data gagal ditambahkan!"),console.error(a)}};return(e,s)=>(S(),D(A,null,[t("div",G,[t("div",null,[t("span",K,p(o.value.nama),1)]),t("div",N,[l(C,null,{content:m(()=>[$,l(F),E]),_:1})])]),t("div",L,[M,t("div",R,[t("span",{onClick:s[0]||(s[0]=a=>_(c).go(-1))},q)])]),t("div",z,[t("div",I,[t("div",U,[t("div",H,[t("div",J,[l(_(V),{onSubmit:b},{default:m(({errors:a})=>[t("div",O,[t("div",Q,[t("div",X,[t("div",Y,[t("div",Z,[tt,T(t("textarea",{"onUpdate:modelValue":s[1]||(s[1]=f=>o.value.penjelasan=f),rules:g,name:"penjelasan",ref:"penjelasan",class:"textarea textarea-bordered md:w-full max-w-2xl",placeholder:""},null,512),[[P,o.value.penjelasan]]),t("div",et,p(a.penjelasan),1)])]),st])])])]),_:1})])])])])])],64))}};export{ct as default};
