import{B as A}from"./CardLockedFitur.vue_vue_type_style_index_0_scoped_true_lang.08e643a5.js";import{m as w,l as R}from"./id.b77d1238.js";import{u as M,d as D,a as P,b as $,c as N,r as l,j,o as i,e as d,f as a,g as r,w as f,h as L,t as n,F as m,s as I,n as V,A as v,T as u,i as c}from"./index.84dce459.js";import{B as Y,a as E}from"./BreadCrumbSpace.0e12b452.js";const W={class:"pt-4 px-10 md:flex justify-between"},z=a("div",null,[a("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"})],-1),F={class:"md:py-0 py-4"},G=c(" Siswa "),K=c(" Edit "),U={class:"pt-4 px-10 md:flex justify-between"},H=a("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm px-2"},"Penanganan Deteksi Masalah",-1),J={class:"md:py-0 py-4 space-x-2 space-y-2"},q=a("button",{class:"btn hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[a("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),c(" Kembali ")],-1),O={key:0},Q={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},X={class:"w-full lg:w-full"},Z={class:"bg-white shadow rounded-lg px-4 py-4"},aa={class:"overflow-x-auto"},ea={class:"table table-compact"},ta=a("td",{class:"whitespace-nowrap w-1/12"},"No Induk",-1),na=a("td",{class:"whitespace-nowrap w-1/12"},":",-1),sa={class:"whitespace-nowrap w-10/12"},la=a("td",null,"Nama",-1),oa=a("td",null,":",-1),ia=a("td",null,"Umur",-1),da=a("td",null,":",-1),ra=a("td",null,"Jenis Kelamin",-1),ua=a("td",null,":",-1),ca=a("td",null,"Sekolah",-1),ga=a("td",null,":",-1),ka={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},_a={class:"w-full lg:w-full"},pa={class:"bg-white shadow rounded-lg px-4 py-4"},ha={class:"overflow-x-auto px-4 space-y-10 mt-4 py-4"},wa={class:"space-y-2"},fa={class:"text-lg font-bold text-gray-700"},ma={class:"indent-8 text-gray-700"},Aa={__name:"Penanganan",setup(va){w.updateLocale("id",R);const S="http://127.0.0.1:8000/",g=M();D(()=>g.getPaket),g.$subscribe((e,t)=>{}),P().setsubMenuActive("hasilpsikologi"),$();const k=N(),x=l([]);l([]);const _=l([]),b=l([]),s=l(),p=k.params.id;(async()=>{try{const e=await v.get(`admin/datahasildeteksi/${p}/penanganan`);return _.value=e.data.deteksi,e.data}catch(e){console.error(e)}})(),(async()=>{try{const e=await v.get(`yayasan/hasilpsikologi/detail/${k.params.id}`);return x.value=e.data,b.value=e.data,s.value=e.data,e.status=="failed"?(u.danger("Warning","Anda tidak memiliki Akses siswa ini!"),e.data):((e.data.sertifikat==null||e.data.deteksi==null)&&u.danger("Warning","Data Api Siswa tidak ditemukan!"),e.data)}catch(e){console.error(e)}})(),l([{label:"91-99",ket:"Sangat Tinggi Sekali / Sangat Mengganggu Sekali",kode:"STS"},{label:"81-90",ket:"Tinggi Sekali / Mengganggu Sekali",kode:"TS"},{label:"71-80",ket:"Tinggi / Mengganggu",kode:"T"},{label:"61-70",ket:"Cukup Tinggi / Cukup Mengganggu",kode:"CT"},{label:"41-60",ket:"Cukup / Terkendali",kode:"C"},{label:"31-40",ket:"Agak Rendah / Cukup Terkendali",kode:"AR"},{label:"21-30",ket:"Rendah / Terkendali Baik",kode:"R"},{label:"11-20",ket:"Rendah Sekali / Terkendali Baik Sekali",kode:"RS"},{label:"01-10",ket:"Sangat Rendah Sekali / Sangat Terkendali Baik Sekali",kode:"SRS"}]);const y=(e=99)=>{let t=null;return e>90?t="Sangat Tinggi Sekali / Sangat Mengganggu Sekali":91>e&&e>=81?t="Tinggi Sekali / Mengganggu Sekali (TS)":81>e&&e>=71?t="Tinggi / Mengganggu":71>e&&e>=61?t="Cukup Tinggi / Cukup Mengganggu":61>e&&e>=41?t="Cukup / Terkendali ":41>e&&e>=31?t="Agak Rendah / Cukup Terkendali ":31>e&&e>=21?t="Rendah / Terkendali Baik ":21>e&&e>=11?t="Rendah Sekali / Terkendali Baik Sekali":t="Sangat Rendah Sekali / Sangan Terkendali Baik Sekali ",t},h=e=>window.btoa(e),T=(e=null,t=w().format("YYYY-MM-Do"))=>{e===null?u.danger("Warning","Data tidak valid!"):window.open(`${S}api/guest/cetak/penanganan/${h(e)}?token=${h(t)}`)};return(e,t)=>{const B=j("router-link");return i(),d(m,null,[a("div",W,[z,a("div",F,[r(Y,null,{content:f(()=>[G,r(E),K]),_:1})])]),a("div",U,[a("div",null,[H,r(A,{onClick:t[0]||(t[0]=o=>T(L(p)))})]),a("div",J,[r(B,{to:{name:"AdminHasilPsikologi"}},{default:f(()=>[q]),_:1})])]),a("div",null,[s.value?(i(),d("div",O,[a("div",Q,[a("div",X,[a("div",Z,[a("div",aa,[a("table",ea,[a("tbody",null,[a("tr",null,[ta,na,a("td",sa,n(s.value.nomeridentitas),1)]),a("tr",null,[la,oa,a("td",null,n(s.value.nama),1)]),a("tr",null,[ia,da,a("td",null,n(s.value.deteksi.umur),1)]),a("tr",null,[ra,ua,a("td",null,n(s.value.jk),1)]),a("tr",null,[ca,ga,a("td",null,n(s.value.sekolah_nama),1)])])])])])])]),a("div",ka,[a("div",_a,[a("div",pa,[a("div",ha,[(i(!0),d(m,null,I(_.value,(o,C)=>(i(),d("div",wa,[a("h1",fa,n(C+1)+". "+n(o.nama)+" : "+n(o.score)+" - "+n(y(o.score)),1),a("p",ma,n(o.penanganan),1)]))),256))])])])])])):V("",!0)])],64)}}};export{Aa as default};
