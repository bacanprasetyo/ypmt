import{s as y,y as B,u as S,a as j,b as A,r as o,o as u,d as D,e,t as c,f as d,w as m,B as T,g as V,h as F,i as p,F as P,j as C,k as N,l as G,m as h,A as _,T as g}from"./index.181de641.js";const I={class:"pt-4 px-10 md:flex justify-between"},$={class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},q={class:"md:py-0 py-4"},R=h(" Penjurusan "),W=h(" Tambah "),E={class:"px-4 py-4"},K={class:"w-full"},U={class:"bg-white shadow rounded-lg px-0 py-4"},z={class:"w-full lg:w-fi mx-4"},H={class:"p-2 sm:p-6 xl:p-8"},J={class:"pt-0 px-0"},L={class:"w-full mx-0"},M={class:"bg-white rounded-lg p-0 sm:p-6 xl:p-0"},O={class:"grid md:grid-cols-2 gap-2"},Q=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Keterangan",-1),X={class:"text-xs text-red-600 mt-1"},Y=e("div",{class:"w-full flex justify-end mt-4 px-20"},[e("button",{class:"btn btn-active btn-lg btn-primary"}," Simpan ")],-1),se={name:"Tambah",setup(Z){const l=y();B(()=>l.getSekolah),l.$subscribe((t,a)=>{}),S().setPagesActive("penjurusan");const x=j(),b=A();o([]),o([]);const r=o([]),n=o({}),i=b.params.id;(async()=>{try{const t=await _.get(`gurubk/datasiswa/${i}/penjurusan`);return n.value={keterangan:t.data.keterangan},r.value=t.siswa,t}catch(t){g.danger("Warning","Data Gagal dimuat"),console.error(t)}})();const f=t=>t?t.length<1?"This Field must be at least 2 characters":!0:"This field is required",v=()=>{k()},k=async t=>{let a={keterangan:n.value.keterangan};try{const s=await _.post(`gurubk/datasiswa/${i}/penjurusan`,a);return x.push({name:"AdminAnalisaPenjurusan"}),s.data}catch(s){g.danger("Warning","Data gagal ditambahkan!"),console.error(s)}};return(t,a)=>(u(),D(G,null,[e("div",I,[e("div",null,[e("span",$,"Analisa Penjurusan : "+c(r.value.nama),1)]),e("div",q,[d(V,null,{content:m(()=>[R,d(T),W]),_:1})])]),e("div",E,[e("div",K,[e("div",U,[e("div",z,[e("div",H,[r.value?(u(),F(p(C),{key:0,onSubmit:v},{default:m(({errors:s})=>[e("div",J,[e("div",L,[e("div",M,[e("div",O,[e("div",null,[Q,d(p(P),{modelValue:n.value.keterangan,"onUpdate:modelValue":a[0]||(a[0]=w=>n.value.keterangan=w),rules:f,type:"text",name:"keterangan",ref:"keterangan",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),e("div",X,c(s.keterangan),1)])]),Y])])])]),_:1})):N("",!0)])])])])])],64))}};export{se as default};
