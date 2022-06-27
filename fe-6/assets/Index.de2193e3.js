import{u as y,d as B,a as C,b as A,c as D,r as _,j as h,o as n,e as i,f as e,g as a,w as r,q as S,F as j,A as p,t as c,i as u}from"./index.127bc060.js";import{B as R,a as N}from"./BreadCrumbSpace.79d12274.js";import{B as T}from"./ButtonEdit.164f0963.js";import{B as E}from"./ButtonDel.a70821bd.js";const V={class:"pt-4 px-10 md:flex justify-between"},$=e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},"Referensi Studi & Kerja ")],-1),F={class:"md:py-0 py-4"},I=u(" Referensi "),P=u(" Index "),z={class:"md:pt-6"},G={class:"md:flex justify-between px-10"},L={class:"space-x-1 space-y-1 pt-1 md:pt-0"},M=e("button",{class:"btn btn-info hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),u(" Tambah ")],-1),q=e("div",{class:"space-x-1 space-y-1 pt-1 md:pt-0"},null,-1),H={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},J={class:"w-full lg:w-full"},K={class:"bg-white shadow rounded-lg px-4 py-4"},Y={key:0},O={key:0},Q={class:"text-sm font-medium text-center flex justify-center space-x-1"},U=e("button",{class:"btn btn-sm btn-primary tooltip","data-tip":"Detail"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1),W={key:1},X={class:"text-center"},Z={key:2},ee={class:"text-left"},te={key:3},re={__name:"Index",setup(se){const m=y();B(()=>m.getSekolah),m.$subscribe((s,d)=>{}),C().setPagesActive("referensi");const f=A();D();const x=_([]),l=_([]),w=[{label:"No",field:"no",width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Actions",field:"actions",sortable:!1,width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Judul",field:"nama",type:"String"},{label:"Tipe",field:"tipe",type:"String"},{label:"File",field:"file",type:"String"}];(async()=>{try{const s=await p.get("owner/referensi");return x.value=s.data,l.value=s.data,s.data}catch(s){console.error(s)}})();const v=async(s,d)=>{f.push({name:"AdminReferensiEdit",params:{id:s}})},b=async(s,d)=>{if(confirm("Apakah anda yakin menghapus data ini?"))try{const o=await p.delete(`owner/klasifikasi/${s}`);return l.value.splice(d,1),Toast.success("Success","Data Berhasil dihapus!"),o.data}catch(o){console.error(o)}};return(s,d)=>{const o=h("router-link"),g=h("vue-good-table");return n(),i(j,null,[e("div",V,[$,e("div",F,[a(R,null,{content:r(()=>[I,a(N),P]),_:1})])]),e("div",z,[e("div",G,[e("div",L,[a(o,{to:{name:"AdminReferensiTambah"}},{default:r(()=>[M]),_:1})]),q])]),e("div",H,[e("div",J,[e("div",K,[l.value?(n(),i("div",Y,[a(g,{columns:w,rows:l.value,"search-options":{enabled:!0},"pagination-options":{enabled:!0,perPageDropdown:[10,20,50]},styleClass:"vgt-table striped bordered condensed",class:"py-0"},{"table-row":r(t=>[t.column.field=="actions"?(n(),i("span",O,[e("div",Q,[a(T,{onClick:k=>v(t.row.id,t.index)},null,8,["onClick"]),a(E,{onClick:k=>b(t.row.id,t.index)},null,8,["onClick"]),a(o,{to:{name:"AdminYayasanDetail",params:{id:t.row.id}}},{default:r(()=>[U]),_:2},1032,["to"])])])):t.column.field=="no"?(n(),i("span",W,[e("div",X,c(t.index+1),1)])):t.column.field=="jml_sekolah"?(n(),i("span",Z,[e("div",ee,c(t.row.jml_sekolah)+" Sekolah",1)])):(n(),i("span",te,c(t.formattedRow[t.column.field]),1))]),_:1},8,["rows"])])):S("",!0)])])])],64)}}};export{re as default};
