import{b as h,d as g,c as y,u as x,a as v,r as d,o as c,f as i,g as s,h as r,w,y as b,B as m,s as f,j as k,t as a,n as B,x as n,A}from"./index.0a1e5a66.js";const C={key:0,class:"pt-4 px-10 md:flex justify-between"},D=s("div",null,[s("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},"Detail Buletin Psikologi")],-1),S={class:"md:py-0 py-4"},j=n(" Buletin Psikologi "),N=n(" Index "),P={class:"pt-4 px-10 md:flex justify-between"},V=s("div",null,[s("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"})],-1),L={class:"md:py-0 py-4 space-x-2 space-y-2"},$=s("button",{class:"btn hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),n(" Kembali ")],-1),F=[$],G={class:"w-full lg:w-full"},I={class:"bg-white shadow rounded-lg px-4 py-2"},R={class:"overflow-x-auto px-4 space-y-10 py-2"},z={class:"space-y-2"},E=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Judul ",-1),J={class:"space-y-2 border-b-2 py-2"},K={class:"indent-8 text-gray-700"},M={class:"w-full lg:w-full"},T={class:"bg-white shadow rounded-lg px-4 py-2"},q={class:"overflow-x-auto px-4 space-y-10 py-2"},H={class:"space-y-2"},O=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Link ",-1),Q={class:"space-y-2 border-b-2 py-2"},U={class:"indent-8 text-gray-700"},W={class:"w-full lg:w-full"},X={class:"bg-white shadow rounded-lg px-4 py-2"},Y={class:"overflow-x-auto px-4 space-y-10 py-2"},Z={class:"space-y-2"},ss=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," File ",-1),ts={class:"space-y-2 border-b-2 py-2"},es={class:"indent-8 text-gray-700"},is={name:"BuletinDetail",setup(os){const l=h();g(()=>l.getSekolah),l.$subscribe((t,o)=>{}),y().setPagesActive("buletin");const _=x(),u=v().params.id,p=d([]),e=d([]);return(async()=>{try{const t=await A.get(`guest/data/buletin/${u}`);return p.value=t.data,e.value=t.data,t.data}catch(t){console.error(t)}})(),(t,o)=>(c(),i(B,null,[e.value?(c(),i("div",C,[D,s("div",S,[r(m,null,{content:w(()=>[j,r(b),N]),_:1})])])):f("",!0),s("div",P,[V,s("div",L,[s("span",{onClick:o[0]||(o[0]=ds=>k(_).go(-1))},F)])]),s("div",G,[s("div",I,[s("div",R,[s("div",z,[E,s("div",J,[s("p",K,a(e.value.nama),1)])])])])]),s("div",M,[s("div",T,[s("div",q,[s("div",H,[O,s("div",Q,[s("p",U,a(e.value.link),1)])])])])]),s("div",W,[s("div",X,[s("div",Y,[s("div",Z,[ss,s("div",ts,[s("p",es,a(e.value.file),1)])])])])])],64))}};export{is as default};
