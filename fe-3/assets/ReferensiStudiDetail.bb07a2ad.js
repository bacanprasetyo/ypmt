import{u,d as y,a as g,b as x,c as v,r as i,o as l,e as c,f as s,g as r,w,p as f,h as b,t as o,F as m,A as k,i as d}from"./index.72df8a16.js";import{B}from"./BreadCrumb.a3741b2a.js";import{B as S}from"./BreadCrumbSpace.553db193.js";const A={key:0,class:"pt-4 px-10 md:flex justify-between"},C=s("div",null,[s("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},"Detail Referensi Studi & Kerja")],-1),j={class:"md:py-0 py-4"},D=d(" Klasifikasi Referensi Studi "),R=d(" Index "),N={class:"pt-4 px-10 md:flex justify-between"},V=s("div",null,[s("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"})],-1),F={class:"md:py-0 py-4 space-x-2 space-y-2"},K=s("button",{class:"btn hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),d(" Kembali ")],-1),L=[K],$={class:"w-full lg:w-full"},G={class:"bg-white shadow rounded-lg px-4 py-2"},I={class:"overflow-x-auto px-4 space-y-10 py-2"},J={class:"space-y-2"},P=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Judul ",-1),z={class:"space-y-2 border-b-2 py-2"},E={class:"indent-8 text-gray-700"},M={class:"w-full lg:w-full"},T={class:"bg-white shadow rounded-lg px-4 py-2"},q={class:"overflow-x-auto px-4 space-y-10 py-2"},H={class:"space-y-2"},O=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Jenis ",-1),Q={class:"space-y-2 border-b-2 py-2"},U={class:"indent-8 text-gray-700"},W={class:"w-full lg:w-full"},X={class:"bg-white shadow rounded-lg px-4 py-2"},Y={class:"overflow-x-auto px-4 space-y-10 py-2"},Z={class:"space-y-2"},ss=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Link ",-1),ts={class:"space-y-2 border-b-2 py-2"},es={class:"indent-8 text-gray-700"},os={class:"w-full lg:w-full"},as={class:"bg-white shadow rounded-lg px-4 py-2"},ds={class:"overflow-x-auto px-4 space-y-10 py-2"},ns={class:"space-y-2"},is=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," File ",-1),ls={class:"space-y-2 border-b-2 py-2"},cs={class:"indent-8 text-gray-700"},vs={__name:"ReferensiStudiDetail",setup(rs){const n=u();y(()=>n.getSekolah),n.$subscribe((t,a)=>{}),g().setPagesActive("referensistudi");const _=x(),p=v().params.id,h=i([]),e=i([]);return(async()=>{try{const t=await k.get(`guest/data/referensi/${p}`);return h.value=t.data,e.value=t.data,t.data}catch(t){console.error(t)}})(),(t,a)=>(l(),c(m,null,[e.value?(l(),c("div",A,[C,s("div",j,[r(B,null,{content:w(()=>[D,r(S),R]),_:1})])])):f("",!0),s("div",N,[V,s("div",F,[s("span",{onClick:a[0]||(a[0]=us=>b(_).go(-1))},L)])]),s("div",$,[s("div",G,[s("div",I,[s("div",J,[P,s("div",z,[s("p",E,o(e.value.nama),1)])])])])]),s("div",M,[s("div",T,[s("div",q,[s("div",H,[O,s("div",Q,[s("p",U,o(e.value.jenis),1)])])])])]),s("div",W,[s("div",X,[s("div",Y,[s("div",Z,[ss,s("div",ts,[s("p",es,o(e.value.link),1)])])])])]),s("div",os,[s("div",as,[s("div",ds,[s("div",ns,[is,s("div",ls,[s("p",cs,o(e.value.file),1)])])])])])],64))}};export{vs as default};
