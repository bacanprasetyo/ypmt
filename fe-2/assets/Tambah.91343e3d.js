import{b as y,d as V,c as B,u as A,a as S,r as m,o as b,f as D,g as a,t as r,h as o,w as x,y as P,B as q,i as T,j as d,F as u,q as F,s as U,n as C,x as v,A as _,T as j}from"./index.5790ddae.js";const I={class:"pt-4 px-10 md:flex justify-between"},N={class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},G={class:"md:py-0 py-4"},$=v(" Penjurusan "),R=v(" Tambah "),W={class:"px-4 py-4"},E={class:"w-full"},H={class:"bg-white shadow rounded-lg px-0 py-4"},K={class:"w-full lg:w-fi mx-4"},M={class:"p-2 sm:p-6 xl:p-8"},z={class:"pt-0 px-0"},J={class:"w-full mx-0"},L={class:"bg-white rounded-lg p-0 sm:p-6 xl:p-0"},O={class:"grid md:grid-cols-2 gap-2"},Q=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Hobi",-1),X={class:"text-xs text-red-600 mt-1"},Y=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Pekerjaan Bapak",-1),Z={class:"text-xs text-red-600 mt-1"},aa=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Pekerjaan Ibu",-1),ea={class:"text-xs text-red-600 mt-1"},ta=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Pekerjaan Kakek",-1),sa={class:"text-xs text-red-600 mt-1"},na=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Analisa Pekerjaan",-1),la={class:"text-xs text-red-600 mt-1"},oa=a("div",{class:"w-full flex justify-end mt-4 px-20"},[a("button",{class:"btn btn-active btn-lg btn-primary"}," Simpan ")],-1),ma={name:"Tambah",setup(ra){const k=y();V(()=>k.getSekolah),k.$subscribe((t,s)=>{}),B().setPagesActive("minatbakat");const h=A(),f=S();m([]),m([]);const p=m([]),e=m({}),c=f.params.id;(async()=>{try{const t=await _.get(`gurubk/datasiswa/${c}/minatbakat`);return e.value={hobi:t.data.hobi,pekerjaanbapak:t.data.pekerjaanbapak,pekerjaanibu:t.data.pekerjaanibu,pekerjaankakek:t.data.pekerjaankakek,analisapekerjaan:t.data.analisapekerjaan},p.value=t.siswa,t}catch(t){j.danger("Warning","Data Gagal dimuat"),console.error(t)}})();const i=t=>t?t.length<1?"This Field must be at least 2 characters":!0:"This field is required",g=()=>{w()},w=async t=>{let s={hobi:e.value.hobi,pekerjaanbapak:e.value.pekerjaanbapak,pekerjaanibu:e.value.pekerjaanibu,pekerjaankakek:e.value.pekerjaankakek,analisapekerjaan:e.value.analisapekerjaan};try{const n=await _.post(`gurubk/datasiswa/${c}/minatbakat`,s);return h.push({name:"AdminAnalisaMinatBakat"}),n.data}catch(n){j.danger("Warning","Data gagal ditambahkan!"),console.error(n)}};return(t,s)=>(b(),D(C,null,[a("div",I,[a("div",null,[a("span",N,"Analisa Penjurusan : "+r(p.value.nama),1)]),a("div",G,[o(q,null,{content:x(()=>[$,o(P),R]),_:1})])]),a("div",W,[a("div",E,[a("div",H,[a("div",K,[a("div",M,[p.value?(b(),T(d(F),{key:0,onSubmit:g},{default:x(({errors:n})=>[a("div",z,[a("div",J,[a("div",L,[a("div",O,[a("div",null,[Q,o(d(u),{modelValue:e.value.hobi,"onUpdate:modelValue":s[0]||(s[0]=l=>e.value.hobi=l),rules:i,type:"text",name:"hobi",ref:"hobi",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),a("div",X,r(n.hobi),1)]),a("div",null,[Y,o(d(u),{modelValue:e.value.pekerjaanbapak,"onUpdate:modelValue":s[1]||(s[1]=l=>e.value.pekerjaanbapak=l),rules:i,type:"text",name:"pekerjaanbapak",ref:"pekerjaanbapak",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),a("div",Z,r(n.pekerjaanbapak),1)]),a("div",null,[aa,o(d(u),{modelValue:e.value.pekerjaanibu,"onUpdate:modelValue":s[2]||(s[2]=l=>e.value.pekerjaanibu=l),rules:i,type:"text",name:"pekerjaanibu",ref:"pekerjaanibu",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),a("div",ea,r(n.pekerjaanibu),1)]),a("div",null,[ta,o(d(u),{modelValue:e.value.pekerjaankakek,"onUpdate:modelValue":s[3]||(s[3]=l=>e.value.pekerjaankakek=l),rules:i,type:"text",name:"pekerjaankakek",ref:"pekerjaankakek",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),a("div",sa,r(n.pekerjaankakek),1)]),a("div",null,[na,o(d(u),{modelValue:e.value.analisapekerjaan,"onUpdate:modelValue":s[4]||(s[4]=l=>e.value.analisapekerjaan=l),rules:i,type:"text",name:"analisapekerjaan",ref:"analisapekerjaan",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),a("div",la,r(n.analisapekerjaan),1)])]),oa])])])]),_:1})):U("",!0)])])])])])],64))}};export{ma as default};
