import{u as D,d as q,a as A,b as P,c as U,r,o as c,e as p,f as e,t as o,g as d,w,h as u,v as N,q as C,F as g,A as x,T as _,x as y,y as V,z as F,i as v}from"./index.dfcd09a3.js";import{B as T,a as K}from"./BreadCrumbSpace.9a2a2377.js";import{F as $,a as m}from"./vee-validate.esm.31f810d4.js";const E={class:"pt-4 px-10 md:flex justify-between"},G={class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},L={class:"md:py-0 py-4"},z=v(" Sekolah "),M=v(" Edit "),R={class:"pt-4 px-10 md:flex justify-between"},W=e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"})],-1),I={class:"md:py-0 py-4 space-x-2 space-y-2"},H=e("button",{class:"btn hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),v(" Kembali ")],-1),J=[H],O={class:"px-4 py-4"},Q={class:"w-full"},X={class:"bg-white shadow rounded-lg px-0 py-4"},Y={class:"w-full lg:w-fi mx-4"},Z={class:"p-2 sm:p-6 xl:p-8"},ee={class:"pt-0 px-0"},te={class:"w-full mx-0"},ae={class:"bg-white rounded-lg p-0 sm:p-6 xl:p-0"},se={class:"grid md:grid-cols-2 gap-2"},le=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Nama",-1),ne={class:"text-xs text-red-600 mt-1"},oe=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Alamat",-1),de={class:"text-xs text-red-600 mt-1"},ue=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Status",-1),ie=e("option",{disabled:"",selected:""},"Pilih Status ?",-1),me=e("option",null,"Aktif",-1),re=e("option",null,"Nonaktif",-1),ce=[ie,me,re],pe={class:"text-xs text-red-600 mt-1"},xe=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Paket",-1),_e=e("option",{disabled:"",selected:""},"Pilih Paket ?",-1),ve=["value"],be={class:"text-xs text-red-600 mt-1"},ke=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Nama Kepala Sekolah",-1),he={class:"text-xs text-red-600 mt-1"},fe=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Tahun Ajaran",-1),we={class:"text-xs text-red-600 mt-1"},ge=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Semester",-1),ye={class:"text-xs text-red-600 mt-1"},Ve=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Provinsi",-1),Se={class:"text-xs text-red-600 mt-1"},Be=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Kabupaten",-1),je={class:"text-xs text-red-600 mt-1"},De=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Kecamatan",-1),qe={class:"text-xs text-red-600 mt-1"},Ae=e("div",{class:"w-full flex justify-end mt-4 px-20"},[e("button",{class:"btn btn-active btn-lg btn-primary"}," Simpan ")],-1),Ee={__name:"Edit",setup(Pe){const b=D();q(()=>b.getSekolah),b.$subscribe((l,a)=>{}),A().setPagesActive("yayasan");const k=P(),h=U().params.id;r([]);const t=r([]),S=r([]);(async()=>{try{const l=await x.get(`owner/sekolah/${h}`);return t.value=l.data,l.data}catch(l){console.error(l)}})();const f=r([]);(async()=>{try{const l=await x.get("owner/paket");return f.value=l.data,l}catch(l){_.danger("Warning","Data Gagal dimuat"),console.error(l)}})();const i=l=>l?l.length<1?"This Field must be at least 2 characters":!0:"This field is required",B=()=>{j()},j=async l=>{let a={nama:t.value.nama,alamat:t.value.alamat,status:t.value.status,kepsek_nama:t.value.kepsek_nama,tahunajaran_nama:t.value.tahunajaran_nama,semester_nama:t.value.semester_nama,kecamatan:t.value.kecamatan,kabupaten:t.value.kabupaten,provinsi:t.value.provinsi,paket_id:t.value.paket_id};try{const n=await x.put(`owner/sekolah/${h}`,a);return _.success("Success","Data Berhasil ditambahkan!"),k.push({name:"AdminSekolah"}),n.data}catch(n){_.danger("Warning","Data gagal ditambahkan!"),console.error(n)}};return(l,a)=>(c(),p(g,null,[e("div",E,[e("div",null,[e("span",G,o(t.value.nama),1)]),e("div",L,[d(T,null,{content:w(()=>[z,d(K),M]),_:1})])]),e("div",R,[W,e("div",I,[e("span",{onClick:a[0]||(a[0]=n=>u(k).go(-1))},J)])]),e("div",O,[e("div",Q,[e("div",X,[e("div",Y,[e("div",Z,[S.value?(c(),N(u($),{key:0,onSubmit:B},{default:w(({errors:n})=>[e("div",ee,[e("div",te,[e("div",ae,[e("div",se,[e("div",null,[le,d(u(m),{modelValue:t.value.nama,"onUpdate:modelValue":a[1]||(a[1]=s=>t.value.nama=s),rules:i,type:"text",name:"nama",ref:"nama",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),e("div",ne,o(n.nama),1)]),e("div",null,[oe,d(u(m),{modelValue:t.value.alamat,"onUpdate:modelValue":a[2]||(a[2]=s=>t.value.alamat=s),rules:i,type:"text",name:"alamat",ref:"alamat",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),e("div",de,o(n.alamat),1)]),e("div",null,[ue,y(e("select",{class:"select select-bordered w-full max-w-xs","onUpdate:modelValue":a[3]||(a[3]=s=>t.value.status=s)},ce,512),[[V,t.value.status]]),e("div",pe,o(n.status),1)]),e("div",null,[xe,y(e("select",{class:"select select-bordered w-full max-w-xs","onUpdate:modelValue":a[4]||(a[4]=s=>t.value.paket_id=s)},[_e,(c(!0),p(g,null,F(f.value,s=>(c(),p("option",{value:s.id},o(s.nama),9,ve))),256))],512),[[V,t.value.paket_id]]),e("div",be,o(n.paket_id),1)]),e("div",null,[ke,d(u(m),{modelValue:t.value.kepsek_nama,"onUpdate:modelValue":a[5]||(a[5]=s=>t.value.kepsek_nama=s),rules:i,type:"text",name:"kepsek_nama",ref:"kepsek_nama",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),e("div",he,o(n.kepsek_nama),1)]),e("div",null,[fe,d(u(m),{modelValue:t.value.tahunajaran_nama,"onUpdate:modelValue":a[6]||(a[6]=s=>t.value.tahunajaran_nama=s),rules:i,type:"text",name:"tahunajaran_nama",ref:"tahunajaran_nama",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),e("div",we,o(n.tahunajaran_nama),1)]),e("div",null,[ge,d(u(m),{modelValue:t.value.semester_nama,"onUpdate:modelValue":a[7]||(a[7]=s=>t.value.semester_nama=s),rules:i,type:"text",name:"semester_nama",ref:"semester_nama",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),e("div",ye,o(n.semester_nama),1)]),e("div",null,[Ve,d(u(m),{modelValue:t.value.provinsi,"onUpdate:modelValue":a[8]||(a[8]=s=>t.value.provinsi=s),rules:i,type:"text",name:"provinsi",ref:"provinsi",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),e("div",Se,o(n.provinsi),1)]),e("div",null,[Be,d(u(m),{modelValue:t.value.kabupaten,"onUpdate:modelValue":a[9]||(a[9]=s=>t.value.kabupaten=s),rules:i,type:"text",name:"kabupaten",ref:"kabupaten",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),e("div",je,o(n.kabupaten),1)]),e("div",null,[De,d(u(m),{modelValue:t.value.kecamatan,"onUpdate:modelValue":a[10]||(a[10]=s=>t.value.kecamatan=s),rules:i,type:"text",name:"kecamatan",ref:"kecamatan",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),e("div",qe,o(n.kecamatan),1)])]),Ae])])])]),_:1})):C("",!0)])])])])])],64))}};export{Ee as default};
