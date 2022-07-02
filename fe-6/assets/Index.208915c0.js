import{u as y,d as B,a as C,b as A,c as D,r as _,j as h,o as n,e as i,f as e,g as a,w as d,p as S,F as j,A as p,t as c,i as m}from"./index.fc06c4ac.js";import{B as T}from"./BreadCrumb.fbfc3a03.js";import{B as N}from"./BreadCrumbSpace.ec2385ea.js";import{B as P}from"./ButtonEdit.f92d8c0a.js";import{B as E}from"./ButtonDel.170e6075.js";const V={class:"pt-4 px-10 md:flex justify-between"},$=e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},"Terapis Karakter Positif ")],-1),I={class:"md:py-0 py-4"},R=m(" Terapis "),z=m(" Index "),F={class:"md:pt-6"},G={class:"md:flex justify-between px-10"},K={class:"space-x-1 space-y-1 pt-1 md:pt-0"},L=e("button",{class:"btn btn-info hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),m(" Tambah ")],-1),M=e("div",{class:"space-x-1 space-y-1 pt-1 md:pt-0"},null,-1),H={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},Y={class:"w-full lg:w-full"},q={class:"bg-white shadow rounded-lg px-4 py-4"},J={key:0},O={key:0},Q={class:"text-sm font-medium text-center flex justify-center space-x-1"},U=e("button",{class:"btn btn-sm btn-primary tooltip","data-tip":"Detail"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1),W={key:1},X={class:"text-center"},Z={key:2},ee={class:"text-left"},te={key:3},ce={__name:"Index",setup(se){const u=y();B(()=>u.getSekolah),u.$subscribe((s,r)=>{}),C().setPagesActive("terapis");const x=A();D();const w=_([]),l=_([]),f=[{label:"No",field:"no",width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Actions",field:"actions",sortable:!1,width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Nama Karakter",field:"namakarakter",type:"String"},{label:"Pemahaman dan Pengertian",field:"pemahaman",type:"String"}];(async()=>{try{const s=await p.get("owner/terapis");return w.value=s.data,l.value=s.data,s.data}catch(s){console.error(s)}})();const v=async(s,r)=>{x.push({name:"AdminTerapisEdit",params:{id:s}})},k=async(s,r)=>{if(confirm("Apakah anda yakin menghapus data ini?"))try{const o=await p.delete(`owner/terapis/${s}`);return l.value.splice(r,1),Toast.success("Success","Data Berhasil dihapus!"),o.data}catch(o){console.error(o)}};return(s,r)=>{const o=h("router-link"),g=h("vue-good-table");return n(),i(j,null,[e("div",V,[$,e("div",I,[a(T,null,{content:d(()=>[R,a(N),z]),_:1})])]),e("div",F,[e("div",G,[e("div",K,[a(o,{to:{name:"AdminTerapisTambah"}},{default:d(()=>[L]),_:1})]),M])]),e("div",H,[e("div",Y,[e("div",q,[l.value?(n(),i("div",J,[a(g,{columns:f,rows:l.value,"search-options":{enabled:!0},"pagination-options":{enabled:!0,perPageDropdown:[10,20,50]},styleClass:"vgt-table striped bordered condensed",class:"py-0"},{"table-row":d(t=>[t.column.field=="actions"?(n(),i("span",O,[e("div",Q,[a(P,{onClick:b=>v(t.row.id,t.index)},null,8,["onClick"]),a(E,{onClick:b=>k(t.row.id,t.index)},null,8,["onClick"]),a(o,{to:{name:"AdminYayasanDetail",params:{id:t.row.id}}},{default:d(()=>[U]),_:2},1032,["to"])])])):t.column.field=="no"?(n(),i("span",W,[e("div",X,c(t.index+1),1)])):t.column.field=="jml_sekolah"?(n(),i("span",Z,[e("div",ee,c(t.row.jml_sekolah)+" Sekolah",1)])):(n(),i("span",te,c(t.formattedRow[t.column.field]),1))]),_:1},8,["rows"])])):S("",!0)])])])],64)}}};export{ce as default};
