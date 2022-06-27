import{u as y,d as B,a as C,b as A,c as D,r as _,j as h,o as n,e as l,f as e,g as o,w as c,q as S,F as j,A as p,t as r,i as u}from"./index.8258c87c.js";import{B as N,a as T}from"./BreadCrumbSpace.6f520c36.js";import{B as E}from"./ButtonEdit.5d40700f.js";import{B as P}from"./ButtonDel.373c2b68.js";const V={class:"pt-4 px-10 md:flex justify-between"},$=e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},"Buletin Psikologi ")],-1),F={class:"md:py-0 py-4"},I=u(" Buletin "),R=u(" Index "),z={class:"md:pt-6"},G={class:"md:flex justify-between px-10"},L={class:"space-x-1 space-y-1 pt-1 md:pt-0"},M=e("button",{class:"btn btn-info hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),u(" Tambah ")],-1),q=e("div",{class:"space-x-1 space-y-1 pt-1 md:pt-0"},null,-1),H={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},J={class:"w-full lg:w-full"},Y={class:"bg-white shadow rounded-lg px-4 py-4"},K={key:0},O={key:0},Q={class:"text-sm font-medium text-center flex justify-center space-x-1"},U=e("button",{class:"btn btn-sm btn-primary tooltip","data-tip":"Detail"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1),W={key:1},X={class:"text-center"},Z={key:2},ee={class:"text-left"},te={key:3},ce={__name:"Index",setup(se){const m=y();B(()=>m.getSekolah),m.$subscribe((s,d)=>{}),C().setPagesActive("buletin");const x=A();D();const w=_([]),i=_([]),f=[{label:"No",field:"no",width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Actions",field:"actions",sortable:!1,width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Judul",field:"nama",type:"String"},{label:"Tipe",field:"tipe",type:"String"},{label:"File",field:"file",type:"String"}];(async()=>{try{const s=await p.get("owner/buletinpsikologi");return w.value=s.data,i.value=s.data,s.data}catch(s){console.error(s)}})();const v=async(s,d)=>{x.push({name:"AdminBuletinEdit",params:{id:s}})},b=async(s,d)=>{if(confirm("Apakah anda yakin menghapus data ini?"))try{const a=await p.delete(`owner/klasifikasi/${s}`);return i.value.splice(d,1),Toast.success("Success","Data Berhasil dihapus!"),a.data}catch(a){console.error(a)}};return(s,d)=>{const a=h("router-link"),g=h("vue-good-table");return n(),l(j,null,[e("div",V,[$,e("div",F,[o(N,null,{content:c(()=>[I,o(T),R]),_:1})])]),e("div",z,[e("div",G,[e("div",L,[o(a,{to:{name:"AdminBuletinTambah"}},{default:c(()=>[M]),_:1})]),q])]),e("div",H,[e("div",J,[e("div",Y,[i.value?(n(),l("div",K,[o(g,{columns:f,rows:i.value,"search-options":{enabled:!0},"pagination-options":{enabled:!0,perPageDropdown:[10,20,50]},styleClass:"vgt-table striped bordered condensed",class:"py-0"},{"table-row":c(t=>[t.column.field=="actions"?(n(),l("span",O,[e("div",Q,[o(E,{onClick:k=>v(t.row.id,t.index)},null,8,["onClick"]),o(P,{onClick:k=>b(t.row.id,t.index)},null,8,["onClick"]),o(a,{to:{name:"AdminYayasanDetail",params:{id:t.row.id}}},{default:c(()=>[U]),_:2},1032,["to"])])])):t.column.field=="no"?(n(),l("span",W,[e("div",X,r(t.index+1),1)])):t.column.field=="jml_sekolah"?(n(),l("span",Z,[e("div",ee,r(t.row.jml_sekolah)+" Sekolah",1)])):(n(),l("span",te,r(t.formattedRow[t.column.field]),1))]),_:1},8,["rows"])])):S("",!0)])])])],64)}}};export{ce as default};
