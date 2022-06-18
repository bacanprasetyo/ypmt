import{u as B,d as _,b as D,c as S,a as C,r as c,e as T,o as g,f as P,g as a,h as o,w as p,j as r,i as A,k as M,F as U,R as q,T as f,n as F,t as d,m as N,W as z,p as x}from"./index.1fb43c0e.js";import{F as I,a as u}from"./vee-validate.esm.c4e4704b.js";import{m as L,l as R}from"./id.90193431.js";import{B as G,a as K}from"./BreadCrumbSpace.52bc305b.js";const W={class:"pt-4 px-10 md:flex justify-between"},$=a("div",null,[a("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},"Tambah")],-1),E={class:"md:py-0 py-4"},H=x(" Prestasi "),J=x(" Index "),O={class:"pt-4 px-10 md:flex justify-between"},Q=a("div",null,null,-1),X={class:"md:py-0 py-4"},Y=a("button",{class:"btn hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[a("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),x(" Kembali ")],-1),Z=[Y],aa={class:"px-4 py-4"},ea={class:"w-full"},ta={class:"bg-white shadow rounded-lg px-0 py-4"},sa={class:"w-full lg:w-fi mx-4"},la={class:"p-2 sm:p-6 xl:p-8"},na={class:"pt-0 px-0"},oa={class:"w-full mx-0"},da={class:"bg-white rounded-lg p-0 sm:p-6 xl:p-0"},ra={class:"grid md:grid-cols-2 gap-2"},ia=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Tanggal",-1),ua={class:"text-xs text-red-600 mt-1"},ma=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Prestasi",-1),ca={class:"text-xs text-red-600 mt-1"},pa=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Teknik Belajar",-1),xa={class:"text-xs text-red-600 mt-1"},ba=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Saran Belajar",-1),va={class:"text-xs text-red-600 mt-1"},_a=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Penunjang Belajar",-1),ga={class:"text-xs text-red-600 mt-1"},fa=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Kesimpulan dan Saran",-1),ha={class:"text-xs text-red-600 mt-1"},ka=a("div",{class:"w-full flex justify-end mt-4 px-20"},[a("button",{class:"btn btn-active btn-lg btn-primary"}," Simpan ")],-1),Sa={__name:"CatatanPrestasiTambah",setup(ja){L.updateLocale("id",R);const m=B();_(()=>m.getSekolah),_(()=>m.getIdentitas),m.$subscribe((l,t)=>{});const b=D(),v=S(),h=v.params.id,k=v.params.id2;C().setPagesActive("prestasi"),c([]);const j=c([]),e=c([]),w=()=>{y()},y=async l=>{let t={tanggal:e.value.tanggal,prestasi:e.value.prestasi,teknikbelajar:e.value.teknikbelajar,saranabelajar:e.value.saranabelajar,penunjangbelajar:e.value.penunjangbelajar,kesimpulandansaran:e.value.kesimpulandansaran};try{const i=await q.post("ortu/data/catatan/prestasi",t);return f.success("Success","Data Berhasil ditambahkan!"),b.push({name:"AdminPrestasi",params:{id:h,id2:k}}),i.data}catch(i){f.danger("Warning","Data gagal ditambahkan!"),console.error(i)}};return(l,t)=>{const i=T("Datepicker");return g(),P(U,null,[a("div",W,[$,a("div",E,[o(G,null,{content:p(()=>[H,o(K),J]),_:1})])]),a("div",O,[Q,a("div",X,[a("span",{onClick:t[0]||(t[0]=n=>r(b).go(-1))},Z)])]),a("div",aa,[a("div",ea,[a("div",ta,[a("div",sa,[a("div",la,[j.value?(g(),A(r(I),{key:0,onSubmit:w},{default:p(({errors:n})=>[a("div",na,[a("div",oa,[a("div",da,[a("div",ra,[a("div",null,[ia,o(i,{modelValue:e.value.tanggal,"onUpdate:modelValue":t[1]||(t[1]=s=>e.value.tanggal=s),format:"yyyy/MM/dd","value-format":"yyyy-MM-dd",rules:l.validateData,required:""},{"calendar-header":p(({index:s,day:V})=>[a("div",{class:F(s===5||s===6?"red-color":"")},d(V),3)]),_:1},8,["modelValue","rules"]),a("div",ua,d(n.tanggal),1)]),a("div",null,[ma,o(r(u),{modelValue:e.value.prestasi,"onUpdate:modelValue":t[2]||(t[2]=s=>e.value.prestasi=s),rules:l.validateData,type:"text",name:"prestasi",ref:"prestasi",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),a("div",ca,d(n.prestasi),1)]),a("div",null,[pa,o(r(u),{modelValue:e.value.teknikbelajar,"onUpdate:modelValue":t[3]||(t[3]=s=>e.value.teknikbelajar=s),rules:l.validateData,type:"text",name:"teknikbelajar",ref:"teknikbelajar",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),a("div",xa,d(n.teknikbelajar),1)]),a("div",null,[ba,o(r(u),{modelValue:e.value.saranabelajar,"onUpdate:modelValue":t[4]||(t[4]=s=>e.value.saranabelajar=s),rules:l.validateData,type:"text",name:"saranabelajar",ref:"saranabelajar",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),a("div",va,d(n.saranabelajar),1)]),a("div",null,[_a,o(r(u),{modelValue:e.value.penunjangbelajar,"onUpdate:modelValue":t[5]||(t[5]=s=>e.value.penunjangbelajar=s),rules:l.validateData,type:"text",name:"penunjangbelajar",ref:"penunjangbelajar",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),a("div",ga,d(n.penunjangbelajar),1)]),a("div",null,[fa,N(a("textarea",{"onUpdate:modelValue":t[6]||(t[6]=s=>e.value.kesimpulandansaran=s),class:"textarea textarea-accent md:w-full max-w-2xl",placeholder:""},null,512),[[z,e.value.kesimpulandansaran]]),a("div",ha,d(n.kesimpulandansaran),1)])]),ka])])])]),_:1})):M("",!0)])])])])])],64)}}};export{Sa as default};
