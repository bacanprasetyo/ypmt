import{a as U,b as A,c as B,r as c,j as q,o as _,e as M,f as a,t as n,g as d,n as P,w as f,h as u,p as T,F as $,A as k,T as h,S as F,P as y,Q as K,Z as C}from"./index.156f8da1.js";import{_ as j}from"./ButtonKembali.09b291f6.js";import{F as N,a as i}from"./vee-validate.esm.8976f289.js";import{m as R,l as z}from"./id.a01925db.js";const E={class:"pt-4 px-10 md:flex justify-between"},G={class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},I={class:"md:py-0 py-4 space-x-2 space-y-2"},L={class:"px-4 py-4"},Q={class:"w-full"},W={class:"bg-white shadow rounded-lg px-0 py-4"},Z={class:"w-full lg:w-fi mx-4"},H={class:"p-2 sm:p-6 xl:p-8"},J={class:"pt-0 px-0"},O={class:"w-full mx-0"},X={class:"bg-white rounded-lg p-0 sm:p-6 xl:p-0"},Y={class:"grid md:grid-cols-2 gap-2"},aa=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Tanggal",-1),ea={class:"text-xs text-red-600 mt-1"},sa=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Kasus",-1),ta={class:"text-xs text-red-600 mt-1"},la=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Pengambilan data",-1),na={class:"text-xs text-red-600 mt-1"},oa=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Sumber kasus",-1),da={class:"text-xs text-red-600 mt-1"},ua=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Golongan kasus",-1),ia=a("option",{disabled:"",selected:""},"Pilih ?",-1),ma=a("option",null,"Sedang",-1),ra=a("option",null,"Ringan",-1),ca=[ia,ma,ra],ba={class:"text-xs text-red-600 mt-1"},pa=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Penyebab timbul kasus",-1),ka={class:"text-xs text-red-600 mt-1"},ga=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Teknik Konseling",-1),xa={class:"text-xs text-red-600 mt-1"},va=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Keberhasilan Penanganan kasus",-1),_a={class:"text-xs text-red-600 mt-1"},fa=a("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Keterangan",-1),ha={class:"text-xs text-red-600 mt-1"},ya=a("div",{class:"w-full flex justify-end mt-4 px-20"},[a("button",{class:"btn btn-active btn-lg btn-primary"}," Simpan ")],-1),Ma={__name:"DetailTambah",setup(wa){R.updateLocale("id",z),U().setsubMenuActive("kasus");const w=A(),b=B(),r=b.params.id,p=b.params.id2;b.params.id3;const g=c([]),e=c([]),x=c([]);(async()=>{try{const l=await k.get(`owner/datasekolah/${r}/catatankasussiswa/siswa`);return g.value=l.data,x.value=g.value,l.data}catch(l){console.error(l)}})();const v=c([]);(async()=>{try{const l=await k.get(`owner/datasekolah/${r}/siswa/${p}`);return v.value=l.data,l.data}catch(l){console.error(l)}})();const V=()=>{D()},D=async l=>{let s={kasus:e.value.kasus,tanggal:e.value.tanggal,pengambilandata:e.value.pengambilandata,sumberkasus:e.value.sumberkasus,golkasus:e.value.golkasus,penyebabtimbulkasus:e.value.penyebabtimbulkasus,teknikkonseling:e.value.teknikkonseling,keberhasilanpenanganankasus:e.value.keberhasilanpenanganankasus,keterangan:e.value.keterangan};try{const m=await k.post(`owner/datasekolah/${r}/siswa/${p}/catatankasussiswa`,s);return h.success("Success","Data Berhasil ditambahkan!"),w.push({name:"AdminSekolahDetailKasusDetail",params:{id:r,id2:p}}),m.data}catch(m){h.danger("Warning","Data gagal ditambahkan!"),console.error(m)}};return(l,s)=>{const m=q("Datepicker");return _(),M($,null,[a("div",E,[a("div",null,[a("span",G,n(v.value.nama),1)]),a("div",I,[d(j)])]),a("div",L,[a("div",Q,[a("div",W,[a("div",Z,[a("div",H,[x.value?(_(),P(u(N),{key:0,onSubmit:V},{default:f(({errors:o})=>[a("div",J,[a("div",O,[a("div",X,[a("div",Y,[a("div",null,[aa,d(m,{modelValue:e.value.tanggal,"onUpdate:modelValue":s[0]||(s[0]=t=>e.value.tanggal=t),format:"yyyy/MM/dd","value-format":"yyyy-MM-dd",rules:l.validateData,required:""},{"calendar-header":f(({index:t,day:S})=>[a("div",{class:F(t===5||t===6?"red-color":"")},n(S),3)]),_:1},8,["modelValue","rules"]),a("div",ea,n(o.tanggal),1)]),a("div",null,[sa,d(u(i),{modelValue:e.value.kasus,"onUpdate:modelValue":s[1]||(s[1]=t=>e.value.kasus=t),rules:l.validateData,type:"text",name:"kasus",ref:"kasus",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),a("div",ta,n(o.kasus),1)]),a("div",null,[la,d(u(i),{modelValue:e.value.pengambilandata,"onUpdate:modelValue":s[2]||(s[2]=t=>e.value.pengambilandata=t),rules:l.validateData,type:"text",name:"pengambilandata",ref:"pengambilandata",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),a("div",na,n(o.pengambilandata),1)]),a("div",null,[oa,d(u(i),{modelValue:e.value.sumberkasus,"onUpdate:modelValue":s[3]||(s[3]=t=>e.value.sumberkasus=t),rules:l.validateData,type:"text",name:"sumberkasus",ref:"sumberkasus",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),a("div",da,n(o.sumberkasus),1)]),a("div",null,[ua,y(a("select",{class:"select select-bordered w-full max-w-xs","onUpdate:modelValue":s[4]||(s[4]=t=>e.value.golkasus=t),name:"golkasus",ref:"golkasus"},ca,512),[[K,e.value.golkasus]]),a("div",ba,n(o.golkasus),1)]),a("div",null,[pa,d(u(i),{modelValue:e.value.penyebabtimbulkasus,"onUpdate:modelValue":s[5]||(s[5]=t=>e.value.penyebabtimbulkasus=t),rules:l.validateData,type:"text",name:"penyebabtimbulkasus",ref:"penyebabtimbulkasus",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),a("div",ka,n(o.penyebabtimbulkasus),1)]),a("div",null,[ga,d(u(i),{modelValue:e.value.teknikkonseling,"onUpdate:modelValue":s[6]||(s[6]=t=>e.value.teknikkonseling=t),rules:l.validateData,type:"text",name:"teknikkonseling",ref:"teknikkonseling",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),a("div",xa,n(o.teknikkonseling),1)]),a("div",null,[va,d(u(i),{modelValue:e.value.keberhasilanpenanganankasus,"onUpdate:modelValue":s[7]||(s[7]=t=>e.value.keberhasilanpenanganankasus=t),rules:l.validateData,type:"text",name:"keberhasilanpenanganankasus",ref:"keberhasilanpenanganankasus",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue","rules"]),a("div",_a,n(o.keberhasilanpenanganankasus),1)]),a("div",null,[fa,y(a("textarea",{"onUpdate:modelValue":s[8]||(s[8]=t=>e.value.keterangan=t),class:"textarea textarea-accent md:w-full max-w-2xl",placeholder:""},null,512),[[C,e.value.keterangan]]),a("div",ha,n(o.keterangan),1)])]),ya])])])]),_:1})):T("",!0)])])])])])],64)}}};export{Ma as default};
