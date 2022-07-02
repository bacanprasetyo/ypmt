import{b as C,d as U,c as A,u as K,a as T,r as m,e as M,o as x,f as _,g as e,t as n,h as d,w as v,y as P,B as F,s as w,j as o,i as N,z as $,F as u,k as z,E as I,q as E,n as G,x as b,A as y,T as V}from"./index.0a1e5a66.js";const L={key:0,class:"pt-4 px-10 md:flex justify-between"},R={class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},H={class:"md:py-0 py-4"},O=b(" Kasus "),W=b(" Tambah "),J={class:"pt-4 px-10 md:flex justify-between"},Q=e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"})],-1),X={class:"md:py-0 py-4 space-x-2 space-y-2"},Y=e("button",{class:"btn hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),b(" Kembali ")],-1),Z=[Y],ee={class:"px-4 py-4"},ae={class:"w-full"},te={class:"bg-white shadow rounded-lg px-0 py-4"},se={class:"w-full lg:w-fi mx-4"},le={class:"p-2 sm:p-6 xl:p-8"},ne={class:"pt-0 px-0"},ie={class:"w-full mx-0"},de={class:"bg-white rounded-lg p-0 sm:p-6 xl:p-0"},oe={class:"grid md:grid-cols-2 gap-2"},ue=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Tanggal",-1),re={class:"text-xs text-red-600 mt-1"},me=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Ide dan Imajinasi",-1),ce={class:"text-xs text-red-600 mt-1"},pe=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Ketrampilan",-1),xe={class:"text-xs text-red-600 mt-1"},ve=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Kreatif",-1),be={class:"text-xs text-red-600 mt-1"},ge=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Organisasi",-1),ke={class:"text-xs text-red-600 mt-1"},fe=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Kelanjutan Studi",-1),he={class:"text-xs text-red-600 mt-1"},_e=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Hobi",-1),we={class:"text-xs text-red-600 mt-1"},ye=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Cita - cita",-1),Ve={class:"text-xs text-red-600 mt-1"},je=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Kemampuan Khusus",-1),De={class:"text-xs text-red-600 mt-1"},Be=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Keterangan",-1),Se={class:"text-xs text-red-600 mt-1"},qe=e("div",{class:"w-full flex justify-end mt-4 px-20"},[e("button",{class:"btn btn-active btn-lg btn-primary"}," Simpan ")],-1),Te={name:"PersiswaTambah",setup(Ce){const g=C();U(()=>g.getSekolah),g.$subscribe((l,t)=>{}),A().setPagesActive("pengembangandiri");const k=K(),f=T(),c=f.params.id,j=f.params.id2,D=m([]),h=m([]),p=m([]),a=m([]);(async()=>{try{const l=await y.get(`gurubk/catatan/pengembangandiri/${c}`);return D.value=l.data,h.value=l.data,p.value=l.siswa,l.data}catch(l){console.error(l)}})();const B=()=>{S()},S=async l=>{let t={tanggal:a.value.tanggal,idedanimajinasi:a.value.idedanimajinasi,ketrampilan:a.value.ketrampilan,kreatif:a.value.kreatif,organisasi:a.value.organisasi,kelanjutanstudi:a.value.kelanjutanstudi,hobi:a.value.hobi,citacita:a.value.citacita,kemampuankhusus:a.value.kemampuankhusus,keterangan:a.value.keterangan};try{const r=await y.post(`gurubk/catatan/pengembangandiri/${c}`,t);return V.success("Success","Data Berhasil ditambahkan!"),k.push({name:"AdminCatatanPengembangandiriPersiswa",params:{id:c,id2:j}}),r.data}catch(r){V.danger("Warning","Data gagal ditambahkan!"),console.error(r)}};return(l,t)=>{const r=M("Datepicker");return x(),_(G,null,[p.value?(x(),_("div",L,[e("div",null,[e("span",R,n(p.value.nama),1)]),e("div",H,[d(F,null,{content:v(()=>[O,d(P),W]),_:1})])])):w("",!0),e("div",J,[Q,e("div",X,[e("span",{onClick:t[0]||(t[0]=i=>o(k).go(-1))},Z)])]),e("div",ee,[e("div",ae,[e("div",te,[e("div",se,[e("div",le,[h.value?(x(),N(o(E),{key:0,onSubmit:B},{default:v(({errors:i})=>[e("div",ne,[e("div",ie,[e("div",de,[e("div",oe,[e("div",null,[ue,d(r,{modelValue:a.value.tanggal,"onUpdate:modelValue":t[1]||(t[1]=s=>a.value.tanggal=s),format:"yyyy/MM/dd","value-format":"yyyy-MM-dd",rules:l.validateData,required:""},{"calendar-header":v(({index:s,day:q})=>[e("div",{class:$(s===5||s===6?"red-color":"")},n(q),3)]),_:1},8,["modelValue","rules"]),e("div",re,n(i.tanggal),1)]),e("div",null,[me,d(o(u),{modelValue:a.value.idedanimajinasi,"onUpdate:modelValue":t[2]||(t[2]=s=>a.value.idedanimajinasi=s),rules:l.validateData,type:"text",name:"idedanimajinasi",ref:"idedanimajinasi",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),e("div",ce,n(i.idedanimajinasi),1)]),e("div",null,[pe,d(o(u),{modelValue:a.value.ketrampilan,"onUpdate:modelValue":t[3]||(t[3]=s=>a.value.ketrampilan=s),rules:l.validateData,type:"text",name:"ketrampilan",ref:"ketrampilan",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),e("div",xe,n(i.ketrampilan),1)]),e("div",null,[ve,d(o(u),{modelValue:a.value.kreatif,"onUpdate:modelValue":t[4]||(t[4]=s=>a.value.kreatif=s),rules:l.validateData,type:"text",name:"kreatif",ref:"kreatif",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),e("div",be,n(i.kreatif),1)]),e("div",null,[ge,d(o(u),{modelValue:a.value.organisasi,"onUpdate:modelValue":t[5]||(t[5]=s=>a.value.organisasi=s),rules:l.validateData,type:"text",name:"organisasi",ref:"organisasi",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),e("div",ke,n(i.organisasi),1)]),e("div",null,[fe,d(o(u),{modelValue:a.value.kelanjutanstudi,"onUpdate:modelValue":t[6]||(t[6]=s=>a.value.kelanjutanstudi=s),rules:l.validateData,type:"text",name:"kelanjutanstudi",ref:"kelanjutanstudi",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),e("div",he,n(i.kelanjutanstudi),1)]),e("div",null,[_e,d(o(u),{modelValue:a.value.hobi,"onUpdate:modelValue":t[7]||(t[7]=s=>a.value.hobi=s),rules:l.validateData,type:"text",name:"hobi",ref:"hobi",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),e("div",we,n(i.hobi),1)]),e("div",null,[ye,d(o(u),{modelValue:a.value.citacita,"onUpdate:modelValue":t[8]||(t[8]=s=>a.value.citacita=s),rules:l.validateData,type:"text",name:"citacita",ref:"citacita",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),e("div",Ve,n(i.citacita),1)]),e("div",null,[je,d(o(u),{modelValue:a.value.kemampuankhusus,"onUpdate:modelValue":t[9]||(t[9]=s=>a.value.kemampuankhusus=s),rules:l.validateData,type:"text",name:"kemampuankhusus",ref:"kemampuankhusus",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),e("div",De,n(i.kemampuankhusus),1)]),e("div",null,[Be,z(e("textarea",{"onUpdate:modelValue":t[10]||(t[10]=s=>a.value.keterangan=s),class:"textarea textarea-accent md:w-full max-w-2xl",placeholder:""},null,512),[[I,a.value.keterangan]]),e("div",Se,n(i.keterangan),1)])]),qe])])])]),_:1})):w("",!0)])])])])])],64)}}};export{Te as default};
