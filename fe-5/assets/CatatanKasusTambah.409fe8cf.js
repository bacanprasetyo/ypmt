import{u as S,d as g,b as C,c as U,a as K,r as c,e as T,o as v,f as q,g as e,h as d,w as b,j as u,i as M,k as A,F as P,R as j,T as _,n as F,t as n,m as f,v as N,W as R,p}from"./index.f4c1f5d6.js";import{F as z,a as i}from"./vee-validate.esm.47e84153.js";import{m as G,l as I}from"./id.f4b93be0.js";import{B as L,a as W}from"./BreadCrumbSpace.7c99e697.js";const $={class:"pt-4 px-10 md:flex justify-between"},E=e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},"Tambah")],-1),H={class:"md:py-0 py-4"},J=p(" Kasus "),O=p(" Index "),Q={class:"pt-4 px-10 md:flex justify-between"},X=e("div",null,null,-1),Y={class:"md:py-0 py-4"},Z=e("button",{class:"btn hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),p(" Kembali ")],-1),ee=[Z],ae={class:"px-4 py-4"},se={class:"w-full"},te={class:"bg-white shadow rounded-lg px-0 py-4"},le={class:"w-full lg:w-fi mx-4"},ne={class:"p-2 sm:p-6 xl:p-8"},oe={class:"pt-0 px-0"},de={class:"w-full mx-0"},ue={class:"bg-white rounded-lg p-0 sm:p-6 xl:p-0"},ie={class:"grid md:grid-cols-2 gap-2"},me=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Tanggal",-1),re={class:"text-xs text-red-600 mt-1"},ce=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Kasus",-1),be={class:"text-xs text-red-600 mt-1"},pe=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Pengambilan data",-1),ke={class:"text-xs text-red-600 mt-1"},xe=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Sumber kasus",-1),ge={class:"text-xs text-red-600 mt-1"},ve=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Golongan kasus",-1),_e=e("option",{disabled:"",selected:""},"Pilih ?",-1),fe=e("option",null,"Sedang",-1),he=e("option",null,"Ringan",-1),ye=[_e,fe,he],we={class:"text-xs text-red-600 mt-1"},Ve=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Penyebab timbul kasus",-1),De={class:"text-xs text-red-600 mt-1"},Be=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Teknik Konseling",-1),Se={class:"text-xs text-red-600 mt-1"},Ce=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Keberhasilan Penanganan kasus",-1),Ue={class:"text-xs text-red-600 mt-1"},Ke=e("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Keterangan",-1),Te={class:"text-xs text-red-600 mt-1"},qe=e("div",{class:"w-full flex justify-end mt-4 px-20"},[e("button",{class:"btn btn-active btn-lg btn-primary"}," Simpan ")],-1),Re={__name:"CatatanKasusTambah",setup(Me){G.updateLocale("id",I);const r=S();g(()=>r.getSekolah),g(()=>r.getIdentitas),r.$subscribe((o,s)=>{});const k=C(),x=U(),h=x.params.id,y=x.params.id2;K().setPagesActive("kasus"),c([]);const w=c([]),a=c([]),V=()=>{D()},D=async o=>{let s={kasus:a.value.kasus,tanggal:a.value.tanggal,pengambilandata:a.value.pengambilandata,sumberkasus:a.value.sumberkasus,golkasus:a.value.golkasus,penyebabtimbulkasus:a.value.penyebabtimbulkasus,teknikkonseling:a.value.teknikkonseling,keberhasilanpenanganankasus:a.value.keberhasilanpenanganankasus,keterangan:a.value.keterangan};try{const m=await j.post("ortu/data/catatan/kasus",s);return _.success("Success","Data Berhasil ditambahkan!"),k.push({name:"AdminCatatanKasus",params:{id:h,id2:y}}),m.data}catch(m){_.danger("Warning","Data gagal ditambahkan!"),console.error(m)}};return(o,s)=>{const m=T("Datepicker");return v(),q(P,null,[e("div",$,[E,e("div",H,[d(L,null,{content:b(()=>[J,d(W),O]),_:1})])]),e("div",Q,[X,e("div",Y,[e("span",{onClick:s[0]||(s[0]=l=>u(k).go(-1))},ee)])]),e("div",ae,[e("div",se,[e("div",te,[e("div",le,[e("div",ne,[w.value?(v(),M(u(z),{key:0,onSubmit:V},{default:b(({errors:l})=>[e("div",oe,[e("div",de,[e("div",ue,[e("div",ie,[e("div",null,[me,d(m,{modelValue:a.value.tanggal,"onUpdate:modelValue":s[1]||(s[1]=t=>a.value.tanggal=t),format:"yyyy/MM/dd","value-format":"yyyy-MM-dd",rules:o.validateData,required:""},{"calendar-header":b(({index:t,day:B})=>[e("div",{class:F(t===5||t===6?"red-color":"")},n(B),3)]),_:1},8,["modelValue","rules"]),e("div",re,n(l.tanggal),1)]),e("div",null,[ce,d(u(i),{modelValue:a.value.kasus,"onUpdate:modelValue":s[2]||(s[2]=t=>a.value.kasus=t),rules:o.validateData,type:"text",name:"kasus",ref:"kasus",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),e("div",be,n(l.kasus),1)]),e("div",null,[pe,d(u(i),{modelValue:a.value.pengambilandata,"onUpdate:modelValue":s[3]||(s[3]=t=>a.value.pengambilandata=t),rules:o.validateData,type:"text",name:"pengambilandata",ref:"pengambilandata",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),e("div",ke,n(l.pengambilandata),1)]),e("div",null,[xe,d(u(i),{modelValue:a.value.sumberkasus,"onUpdate:modelValue":s[4]||(s[4]=t=>a.value.sumberkasus=t),rules:o.validateData,type:"text",name:"sumberkasus",ref:"sumberkasus",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),e("div",ge,n(l.sumberkasus),1)]),e("div",null,[ve,f(e("select",{class:"select select-bordered w-full max-w-xs","onUpdate:modelValue":s[5]||(s[5]=t=>a.value.golkasus=t),name:"golkasus",ref:"golkasus"},ye,512),[[N,a.value.golkasus]]),e("div",we,n(l.golkasus),1)]),e("div",null,[Ve,d(u(i),{modelValue:a.value.penyebabtimbulkasus,"onUpdate:modelValue":s[6]||(s[6]=t=>a.value.penyebabtimbulkasus=t),rules:o.validateData,type:"text",name:"penyebabtimbulkasus",ref:"penyebabtimbulkasus",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),e("div",De,n(l.penyebabtimbulkasus),1)]),e("div",null,[Be,d(u(i),{modelValue:a.value.teknikkonseling,"onUpdate:modelValue":s[7]||(s[7]=t=>a.value.teknikkonseling=t),rules:o.validateData,type:"text",name:"teknikkonseling",ref:"teknikkonseling",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),e("div",Se,n(l.teknikkonseling),1)]),e("div",null,[Ce,d(u(i),{modelValue:a.value.keberhasilanpenanganankasus,"onUpdate:modelValue":s[8]||(s[8]=t=>a.value.keberhasilanpenanganankasus=t),rules:o.validateData,type:"text",name:"keberhasilanpenanganankasus",ref:"keberhasilanpenanganankasus",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),e("div",Ue,n(l.keberhasilanpenanganankasus),1)]),e("div",null,[Ke,f(e("textarea",{"onUpdate:modelValue":s[9]||(s[9]=t=>a.value.keterangan=t),class:"textarea textarea-accent md:w-full max-w-2xl",placeholder:""},null,512),[[R,a.value.keterangan]]),e("div",Te,n(l.keterangan),1)])]),qe])])])]),_:1})):A("",!0)])])])])])],64)}}};export{Re as default};
