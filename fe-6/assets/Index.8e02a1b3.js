import{u as k,d as B,a as C,b as S,c as A,r as m,j as _,o as n,e as l,f as t,g as a,w as d,p as j,F as D,Z as N,A as p,t as c,i as u,T as L}from"./index.fc06c4ac.js";import{B as E}from"./BreadCrumb.fbfc3a03.js";import{B as T}from"./BreadCrumbSpace.ec2385ea.js";import{B as V}from"./ButtonEdit.f92d8c0a.js";import{B as Y}from"./ButtonDel.170e6075.js";const z={class:"pt-4 px-10 md:flex justify-between"},I=t("div",null,[t("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},"Yayasan ")],-1),M={class:"md:py-0 py-4"},$=u(" Yayasan "),P=u(" Index "),R={class:"md:pt-6"},F={class:"md:flex justify-between px-10"},G={class:"space-x-1 space-y-1 pt-1 md:pt-0"},H=t("button",{class:"btn btn-info hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),u(" Tambah ")],-1),Z=N('<div class="space-x-1 space-y-1 pt-1 md:pt-0"><button class="btn btn-info hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg> Import </button><button class="btn btn-info hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg> Export </button></div>',1),q={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},J={class:"w-full lg:w-full"},K={class:"bg-white shadow rounded-lg px-4 py-4"},O={key:0},Q={key:0},U={class:"text-sm font-medium text-center flex justify-center space-x-1"},W=t("button",{class:"btn btn-sm btn-primary tooltip","data-tip":"Detail"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1),X={key:1},tt={class:"text-center"},et={key:2},st={class:"text-left"},at={key:3},ht={__name:"Index",setup(ot){const h=k();B(()=>h.getSekolah),h.$subscribe((s,r)=>{}),C().setPagesActive("yayasan");const w=S();A();const x=m([]),i=m([]),v=[{label:"No",field:"no",width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Actions",field:"actions",sortable:!1,width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Nama",field:"nama",type:"String"},{label:"Status",field:"status_login",type:"String"},{label:"Sekolah",field:"jml_sekolah",type:"String"}];(async()=>{try{const s=await p.get("owner/yayasan");return x.value=s.data,i.value=s.data,s.data}catch(s){console.error(s)}})();const g=async(s,r)=>{w.push({name:"AdminYayasanEdit",params:{id:s}})},f=async(s,r)=>{if(confirm("Apakah anda yakin menghapus data ini?"))try{const o=await p.delete(`owner/yayasan/${s}`);return i.value.splice(r,1),L.success("Success","Data Berhasil dihapus!"),o.data}catch(o){console.error(o)}};return(s,r)=>{const o=_("router-link"),y=_("vue-good-table");return n(),l(D,null,[t("div",z,[I,t("div",M,[a(E,null,{content:d(()=>[$,a(T),P]),_:1})])]),t("div",R,[t("div",F,[t("div",G,[a(o,{to:{name:"AdminYayasanTambah"}},{default:d(()=>[H]),_:1})]),Z])]),t("div",q,[t("div",J,[t("div",K,[i.value?(n(),l("div",O,[a(y,{columns:v,rows:i.value,"search-options":{enabled:!0},"pagination-options":{enabled:!0,perPageDropdown:[10,20,50]},styleClass:"vgt-table striped bordered condensed",class:"py-0"},{"table-row":d(e=>[e.column.field=="actions"?(n(),l("span",Q,[t("div",U,[a(V,{onClick:b=>g(e.row.id,e.index)},null,8,["onClick"]),a(Y,{onClick:b=>f(e.row.id,e.index)},null,8,["onClick"]),a(o,{to:{name:"AdminYayasanDetail",params:{id:e.row.id}}},{default:d(()=>[W]),_:2},1032,["to"])])])):e.column.field=="no"?(n(),l("span",X,[t("div",tt,c(e.index+1),1)])):e.column.field=="jml_sekolah"?(n(),l("span",et,[t("div",st,c(e.row.jml_sekolah)+" Sekolah",1)])):(n(),l("span",at,c(e.formattedRow[e.column.field]),1))]),_:1},8,["rows"])])):j("",!0)])])])],64)}}};export{ht as default};
