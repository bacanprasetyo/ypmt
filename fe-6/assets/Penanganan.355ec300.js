import{B as A}from"./ButtonCetak.c37c94f2.js";import{m as w,l as R}from"./id.e7cd1306.js";import{u as M,d as D,a as P,b as $,c as N,r as l,j,o as i,e as d,f as a,g as r,w as m,h as L,t as n,F as f,z as I,q as V,A as v,T as c,i as g}from"./index.45c605a6.js";/* empty css                                                                    */import{B as Y,a as z}from"./BreadCrumbSpace.65bc8e75.js";const E={class:"pt-4 px-10 md:flex justify-between"},W=a("div",null,[a("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"})],-1),F={class:"md:py-0 py-4"},G=g(" Siswa "),K=g(" Edit "),U={class:"pt-4 px-10 md:flex justify-between"},q=a("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm px-2"},"Penanganan Deteksi Masalah",-1),H={class:"md:py-0 py-4 space-x-2 space-y-2"},J=a("button",{class:"btn hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[a("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),g(" Kembali ")],-1),O={key:0},Q={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},X={class:"w-full lg:w-full"},Z={class:"bg-white shadow rounded-lg px-4 py-4"},aa={class:"overflow-x-auto"},ea={class:"table table-compact"},ta=a("td",{class:"whitespace-nowrap w-1/12"},"No Induk",-1),na=a("td",{class:"whitespace-nowrap w-1/12"},":",-1),sa={class:"whitespace-nowrap w-10/12"},la=a("td",null,"Nama",-1),oa=a("td",null,":",-1),ia=a("td",null,"Umur",-1),da=a("td",null,":",-1),ra=a("td",null,"Jenis Kelamin",-1),ua=a("td",null,":",-1),ca=a("td",null,"Sekolah",-1),ga=a("td",null,":",-1),ka={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},pa={class:"w-full lg:w-full"},_a={class:"bg-white shadow rounded-lg px-4 py-4"},ha={class:"overflow-x-auto px-4 space-y-10 mt-4 py-4"},wa={class:"space-y-2"},ma={class:"text-lg font-bold text-gray-700"},fa={class:"indent-8 text-gray-700"},Ra={__name:"Penanganan",setup(va){w.updateLocale("id",R);const S="https://be.ypmt-psiprobk.com/",k=M();D(()=>k.getPaket),k.$subscribe((e,t)=>{}),P().setsubMenuActive("hasilpsikologi"),$();const u=N(),x=l([]);l([]);const p=l([]),b=l([]),s=l();u.params.id;const _=u.params.id2;(async()=>{try{const e=await v.get(`admin/datahasildeteksi/${_}/penanganan`);return p.value=e.data.deteksi,e.data}catch(e){console.error(e)}})(),(async()=>{try{const e=await v.get(`owner/hasilpsikologi/detail/${u.params.id2}`);return x.value=e.data,b.value=e.data,s.value=e.data,e.status=="failed"?(c.danger("Warning","Anda tidak memiliki Akses siswa ini!"),e.data):((e.data.sertifikat==null||e.data.deteksi==null)&&c.danger("Warning","Data Api Siswa tidak ditemukan!"),e.data)}catch(e){console.error(e)}})(),l([{label:"91-99",ket:"Sangat Tinggi Sekali / Sangat Mengganggu Sekali",kode:"STS"},{label:"81-90",ket:"Tinggi Sekali / Mengganggu Sekali",kode:"TS"},{label:"71-80",ket:"Tinggi / Mengganggu",kode:"T"},{label:"61-70",ket:"Cukup Tinggi / Cukup Mengganggu",kode:"CT"},{label:"41-60",ket:"Cukup / Terkendali",kode:"C"},{label:"31-40",ket:"Agak Rendah / Cukup Terkendali",kode:"AR"},{label:"21-30",ket:"Rendah / Terkendali Baik",kode:"R"},{label:"11-20",ket:"Rendah Sekali / Terkendali Baik Sekali",kode:"RS"},{label:"01-10",ket:"Sangat Rendah Sekali / Sangat Terkendali Baik Sekali",kode:"SRS"}]);const y=(e=99)=>{let t=null;return e>90?t="Sangat Tinggi Sekali / Sangat Mengganggu Sekali":91>e&&e>=81?t="Tinggi Sekali / Mengganggu Sekali (TS)":81>e&&e>=71?t="Tinggi / Mengganggu":71>e&&e>=61?t="Cukup Tinggi / Cukup Mengganggu":61>e&&e>=41?t="Cukup / Terkendali ":41>e&&e>=31?t="Agak Rendah / Cukup Terkendali ":31>e&&e>=21?t="Rendah / Terkendali Baik ":21>e&&e>=11?t="Rendah Sekali / Terkendali Baik Sekali":t="Sangat Rendah Sekali / Sangan Terkendali Baik Sekali ",t},h=e=>window.btoa(e),T=(e=null,t=w().format("YYYY-MM-Do"))=>{e===null?c.danger("Warning","Data tidak valid!"):window.open(`${S}api/guest/cetak/penanganan/${h(e)}?token=${h(t)}`)};return(e,t)=>{const B=j("router-link");return i(),d(f,null,[a("div",E,[W,a("div",F,[r(Y,null,{content:m(()=>[G,r(z),K]),_:1})])]),a("div",U,[a("div",null,[q,r(A,{onClick:t[0]||(t[0]=o=>T(L(_)))})]),a("div",H,[r(B,{to:{name:"AdminHasilPsikologi"}},{default:m(()=>[J]),_:1})])]),a("div",null,[s.value?(i(),d("div",O,[a("div",Q,[a("div",X,[a("div",Z,[a("div",aa,[a("table",ea,[a("tbody",null,[a("tr",null,[ta,na,a("td",sa,n(s.value.nomeridentitas),1)]),a("tr",null,[la,oa,a("td",null,n(s.value.nama),1)]),a("tr",null,[ia,da,a("td",null,n(s.value.deteksi.umur),1)]),a("tr",null,[ra,ua,a("td",null,n(s.value.jk),1)]),a("tr",null,[ca,ga,a("td",null,n(s.value.sekolah_nama),1)])])])])])])]),a("div",ka,[a("div",pa,[a("div",_a,[a("div",ha,[(i(!0),d(f,null,I(p.value,(o,C)=>(i(),d("div",wa,[a("h1",ma,n(C+1)+". "+n(o.nama)+" : "+n(o.score)+" - "+n(y(o.score)),1),a("p",fa,n(o.penanganan),1)]))),256))])])])])])):V("",!0)])],64)}}};export{Ra as default};
