import{a as j,b as S,c as q,r as c,j as U,o as k,e as A,f as a,t as n,g as d,v as B,w as _,h as o,q as K,F as M,A as v,T as h,S as $,x as C,V as F}from"./index.45c605a6.js";import{_ as T}from"./ButtonKembali.c3be9ff2.js";import{F as I,a as u}from"./vee-validate.esm.1f9274e8.js";import{m as N,l as z}from"./id.e7cd1306.js";const P={class:"pt-4 px-10 md:flex justify-between"},R={class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},E={class:"md:py-0 py-4 space-x-2 space-y-2"},H={class:"px-4 py-4"},L={class:"w-full"},O={class:"bg-white shadow rounded-lg px-0 py-4"},W={class:"w-full lg:w-fi mx-4"},G={class:"p-2 sm:p-6 xl:p-8"},J={class:"pt-0 px-0"},Q={class:"w-full mx-0"},X={class:"bg-white rounded-lg p-0 sm:p-6 xl:p-0"},Y={class:"grid md:grid-cols-2 gap-2"},Z=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Tanggal",-1),aa={class:"text-xs text-red-600 mt-1"},ea=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Ide dan Imajinasi",-1),ta={class:"text-xs text-red-600 mt-1"},sa=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Ketrampilan",-1),la={class:"text-xs text-red-600 mt-1"},na=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Kreatif",-1),ia={class:"text-xs text-red-600 mt-1"},da=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Organisasi",-1),oa={class:"text-xs text-red-600 mt-1"},ua=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Kelanjutan Studi",-1),ma={class:"text-xs text-red-600 mt-1"},ra=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Hobi",-1),ca={class:"text-xs text-red-600 mt-1"},pa=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Cita - cita",-1),xa={class:"text-xs text-red-600 mt-1"},va=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Kemampuan Khusus",-1),fa={class:"text-xs text-red-600 mt-1"},ba=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Keterangan",-1),ga={class:"text-xs text-red-600 mt-1"},ka=a("div",{class:"w-full flex justify-end mt-4 px-20"},[a("button",{class:"btn btn-active btn-lg btn-primary"}," Simpan ")],-1),qa={__name:"DetailTambah",setup(_a){N.updateLocale("id",z),j().setsubMenuActive("pengembangandiri");const w=S(),p=q(),r=p.params.id,x=p.params.id2;p.params.id3;const f=c([]),e=c([]),b=c([]);(async()=>{try{const l=await v.get(`owner/datasekolah/${r}/catatanpengembangandiri/siswa`);return f.value=l.data,b.value=f.value,l.data}catch(l){console.error(l)}})();const g=c([]);(async()=>{try{const l=await v.get(`owner/datasekolah/${r}/siswa/${x}`);return g.value=l.data,l.data}catch(l){console.error(l)}})();const y=()=>{V()},V=async l=>{let t={tanggal:e.value.tanggal,idedanimajinasi:e.value.idedanimajinasi,ketrampilan:e.value.ketrampilan,kreatif:e.value.kreatif,organisasi:e.value.organisasi,kelanjutanstudi:e.value.kelanjutanstudi,hobi:e.value.hobi,citacita:e.value.citacita,kemampuankhusus:e.value.kemampuankhusus,keterangan:e.value.keterangan};try{const m=await v.post(`owner/datasekolah/${r}/siswa/${x}/catatanpengembangandiri`,t);return h.success("Success","Data Berhasil ditambahkan!"),w.push({name:"AdminSekolahDetailPengembangandiriDetail",params:{id:r,id2:x}}),m.data}catch(m){h.danger("Warning","Data gagal ditambahkan!"),console.error(m)}};return(l,t)=>{const m=U("Datepicker");return k(),A(M,null,[a("div",P,[a("div",null,[a("span",R,n(g.value.nama),1)]),a("div",E,[d(T)])]),a("div",H,[a("div",L,[a("div",O,[a("div",W,[a("div",G,[b.value?(k(),B(o(I),{key:0,onSubmit:y},{default:_(({errors:i})=>[a("div",J,[a("div",Q,[a("div",X,[a("div",Y,[a("div",null,[Z,d(m,{modelValue:e.value.tanggal,"onUpdate:modelValue":t[0]||(t[0]=s=>e.value.tanggal=s),format:"yyyy/MM/dd","value-format":"yyyy-MM-dd",rules:l.validateData,required:""},{"calendar-header":_(({index:s,day:D})=>[a("div",{class:$(s===5||s===6?"red-color":"")},n(D),3)]),_:1},8,["modelValue","rules"]),a("div",aa,n(i.tanggal),1)]),a("div",null,[ea,d(o(u),{modelValue:e.value.idedanimajinasi,"onUpdate:modelValue":t[1]||(t[1]=s=>e.value.idedanimajinasi=s),rules:l.validateData,type:"text",name:"idedanimajinasi",ref:"idedanimajinasi",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),a("div",ta,n(i.idedanimajinasi),1)]),a("div",null,[sa,d(o(u),{modelValue:e.value.ketrampilan,"onUpdate:modelValue":t[2]||(t[2]=s=>e.value.ketrampilan=s),rules:l.validateData,type:"text",name:"ketrampilan",ref:"ketrampilan",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),a("div",la,n(i.ketrampilan),1)]),a("div",null,[na,d(o(u),{modelValue:e.value.kreatif,"onUpdate:modelValue":t[3]||(t[3]=s=>e.value.kreatif=s),rules:l.validateData,type:"text",name:"kreatif",ref:"kreatif",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),a("div",ia,n(i.kreatif),1)]),a("div",null,[da,d(o(u),{modelValue:e.value.organisasi,"onUpdate:modelValue":t[4]||(t[4]=s=>e.value.organisasi=s),rules:l.validateData,type:"text",name:"organisasi",ref:"organisasi",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),a("div",oa,n(i.organisasi),1)]),a("div",null,[ua,d(o(u),{modelValue:e.value.kelanjutanstudi,"onUpdate:modelValue":t[5]||(t[5]=s=>e.value.kelanjutanstudi=s),rules:l.validateData,type:"text",name:"kelanjutanstudi",ref:"kelanjutanstudi",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),a("div",ma,n(i.kelanjutanstudi),1)]),a("div",null,[ra,d(o(u),{modelValue:e.value.hobi,"onUpdate:modelValue":t[6]||(t[6]=s=>e.value.hobi=s),rules:l.validateData,type:"text",name:"hobi",ref:"hobi",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),a("div",ca,n(i.hobi),1)]),a("div",null,[pa,d(o(u),{modelValue:e.value.citacita,"onUpdate:modelValue":t[7]||(t[7]=s=>e.value.citacita=s),rules:l.validateData,type:"text",name:"citacita",ref:"citacita",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),a("div",xa,n(i.citacita),1)]),a("div",null,[va,d(o(u),{modelValue:e.value.kemampuankhusus,"onUpdate:modelValue":t[8]||(t[8]=s=>e.value.kemampuankhusus=s),rules:l.validateData,type:"text",name:"kemampuankhusus",ref:"kemampuankhusus",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),a("div",fa,n(i.kemampuankhusus),1)]),a("div",null,[ba,C(a("textarea",{"onUpdate:modelValue":t[9]||(t[9]=s=>e.value.keterangan=s),class:"textarea textarea-accent md:w-full max-w-2xl",placeholder:""},null,512),[[F,e.value.keterangan]]),a("div",ga,n(i.keterangan),1)])]),ka])])])]),_:1})):K("",!0)])])])])])],64)}}};export{qa as default};
