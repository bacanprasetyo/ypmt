import{s as A,y as P,u as T,a as $,b as M,r as m,c as U,o as b,d as y,e as a,t as n,f as r,w as v,B as q,g as F,k as j,i as d,h as N,n as z,F as c,z as E,E as I,j as K,l as G,m as _,A as g,T as V}from"./index.9945e784.js";const L={key:0,class:"pt-4 px-10 md:flex justify-between"},R={class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},W={class:"md:py-0 py-4"},H=_(" Kasus "),J=_(" Tambah "),O={class:"pt-4 px-10 md:flex justify-between"},Q=a("div",null,[a("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"})],-1),X={class:"md:py-0 py-4 space-x-2 space-y-2"},Y=a("button",{class:"btn hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[a("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),_(" Kembali ")],-1),Z=[Y],aa={class:"px-4 py-4"},ea={class:"w-full"},ta={class:"bg-white shadow rounded-lg px-0 py-4"},sa={class:"w-full lg:w-fi mx-4"},la={class:"p-2 sm:p-6 xl:p-8"},na={class:"pt-0 px-0"},oa={class:"w-full mx-0"},ra={class:"bg-white rounded-lg p-0 sm:p-6 xl:p-0"},da={class:"grid md:grid-cols-2 gap-2"},ia=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Tanggal",-1),ua={class:"text-xs text-red-600 mt-1"},ma=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Prestasi",-1),ca={class:"text-xs text-red-600 mt-1"},pa=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Teknik Belajar",-1),xa={class:"text-xs text-red-600 mt-1"},ba=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Saran Belajar",-1),va={class:"text-xs text-red-600 mt-1"},ga=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Penunjang Belajar",-1),_a={class:"text-xs text-red-600 mt-1"},ka=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Kesimpulan dan Saran",-1),ha={class:"text-xs text-red-600 mt-1"},fa=a("div",{class:"w-full flex justify-end mt-4 px-20"},[a("button",{class:"btn btn-active btn-lg btn-primary"}," Simpan ")],-1),Da={name:"PersiswaEdit",setup(wa){const k=A();P(()=>k.getSekolah),k.$subscribe((t,s)=>{}),T().setPagesActive("prestasi");const h=$(),f=M(),u=f.params.id,p=f.params.id2,B=m([]),w=m([]),x=m([]),e=m([]);(async()=>{try{const t=await g.get(`gurubk/catatan/prestasi/${u}`);return B.value=t.data,w.value=t.data,x.value=t.siswa,t.data}catch(t){console.error(t)}})(),(async()=>{try{const t=await g.get(`gurubk/catatan/prestasi/${u}/data/${p}`);return e.value=t.data,t.data}catch(t){console.error(t)}})();const D=()=>{S()},S=async t=>{let s={tanggal:e.value.tanggal,prestasi:e.value.prestasi,teknikbelajar:e.value.teknikbelajar,saranabelajar:e.value.saranabelajar,penunjangbelajar:e.value.penunjangbelajar,kesimpulandansaran:e.value.kesimpulandansaran};try{const i=await g.put(`gurubk/catatan/prestasi/${u}/data/${p}`,s);return V.success("Success","Data Berhasil ditambahkan!"),h.push({name:"AdminCatatanPrestasiPersiswa",params:{id:u,id2:p}}),i.data}catch(i){V.danger("Warning","Data gagal ditambahkan!"),console.error(i)}};return(t,s)=>{const i=U("Datepicker");return b(),y(G,null,[x.value?(b(),y("div",L,[a("div",null,[a("span",R,n(x.value.nama),1)]),a("div",W,[r(F,null,{content:v(()=>[H,r(q),J]),_:1})])])):j("",!0),a("div",O,[Q,a("div",X,[a("span",{onClick:s[0]||(s[0]=o=>d(h).go(-1))},Z)])]),a("div",aa,[a("div",ea,[a("div",ta,[a("div",sa,[a("div",la,[w.value?(b(),N(d(K),{key:0,onSubmit:D},{default:v(({errors:o})=>[a("div",na,[a("div",oa,[a("div",ra,[a("div",da,[a("div",null,[ia,r(i,{modelValue:e.value.tanggal,"onUpdate:modelValue":s[1]||(s[1]=l=>e.value.tanggal=l),format:"yyyy/MM/dd","value-format":"yyyy-MM-dd",rules:t.validateData,required:""},{"calendar-header":v(({index:l,day:C})=>[a("div",{class:z(l===5||l===6?"red-color":"")},n(C),3)]),_:1},8,["modelValue","rules"]),a("div",ua,n(o.tanggal),1)]),a("div",null,[ma,r(d(c),{modelValue:e.value.prestasi,"onUpdate:modelValue":s[2]||(s[2]=l=>e.value.prestasi=l),rules:t.validateData,type:"text",name:"prestasi",ref:"prestasi",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),a("div",ca,n(o.prestasi),1)]),a("div",null,[pa,r(d(c),{modelValue:e.value.teknikbelajar,"onUpdate:modelValue":s[3]||(s[3]=l=>e.value.teknikbelajar=l),rules:t.validateData,type:"text",name:"teknikbelajar",ref:"teknikbelajar",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),a("div",xa,n(o.teknikbelajar),1)]),a("div",null,[ba,r(d(c),{modelValue:e.value.saranabelajar,"onUpdate:modelValue":s[4]||(s[4]=l=>e.value.saranabelajar=l),rules:t.validateData,type:"text",name:"saranabelajar",ref:"saranabelajar",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),a("div",va,n(o.saranabelajar),1)]),a("div",null,[ga,r(d(c),{modelValue:e.value.penunjangbelajar,"onUpdate:modelValue":s[5]||(s[5]=l=>e.value.penunjangbelajar=l),rules:t.validateData,type:"text",name:"penunjangbelajar",ref:"penunjangbelajar",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),a("div",_a,n(o.penunjangbelajar),1)]),a("div",null,[ka,E(a("textarea",{"onUpdate:modelValue":s[6]||(s[6]=l=>e.value.kesimpulandansaran=l),class:"textarea textarea-accent md:w-full max-w-2xl",placeholder:""},null,512),[[I,e.value.kesimpulandansaran]]),a("div",ha,n(o.kesimpulandansaran),1)])]),fa])])])]),_:1})):j("",!0)])])])])])],64)}}};export{Da as default};
