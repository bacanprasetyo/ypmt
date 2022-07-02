import{u as g,d as x,a as f,b,c as v,r as d,j as c,o as s,e as o,f as t,g as n,w as l,p as k,F as y,A as B,t as A,i as u}from"./index.fc06c4ac.js";import{B as C}from"./BreadCrumb.fbfc3a03.js";import{B as S}from"./BreadCrumbSpace.ec2385ea.js";const j={class:"pt-4 px-10 md:flex justify-between"},D=t("div",null,[t("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},"Penanganan Deteksi Masalah ")],-1),P={class:"md:py-0 py-4"},M=u(" Penanganan "),N=u(" Index "),V=t("div",{class:"md:pt-6"},[t("div",{class:"md:flex justify-between px-10"},[t("div",{class:"space-x-1 space-y-1 pt-1 md:pt-0"}),t("div",{class:"space-x-1 space-y-1 pt-1 md:pt-0"})])],-1),I={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},R={class:"w-full lg:w-full"},T={class:"bg-white shadow rounded-lg px-4 py-4"},z={key:0},F={key:0},G={class:"text-sm font-medium text-center flex justify-center space-x-1"},E=t("button",{class:"btn btn-sm btn-primary tooltip","data-tip":"Detail"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1),H={key:1},L={class:"text-sm font-medium text-center flex justify-center"},$={key:0,class:"tooltip btn btn-sm btn-success","data-tip":"Sudah Terisi"},q=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"})],-1),J=[q],K={key:1,class:"tooltip btn btn-sm","data-tip":"Belum Terisi"},O=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"})],-1),Q=[O],U={key:2},st={__name:"Index",setup(W){const r=g();x(()=>r.getSekolah),r.$subscribe((e,p)=>{}),f().setPagesActive("penanganan"),b(),v();const m=d([]),i=d([]),_=[{label:"Actions",field:"actions",sortable:!1,width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Nama ",field:"nama",type:"String"},{label:"Status",field:"status",type:"String"}];return(async()=>{try{const e=await B.get("owner/penanganandeteksimasalah/masterdeteksi");return m.value=e.data,i.value=e.data,e.data}catch(e){console.error(e)}})(),(e,p)=>{const h=c("router-link"),w=c("vue-good-table");return s(),o(y,null,[t("div",j,[D,t("div",P,[n(C,null,{content:l(()=>[M,n(S),N]),_:1})])]),V,t("div",I,[t("div",R,[t("div",T,[i.value?(s(),o("div",z,[n(w,{columns:_,rows:i.value,"line-numbers":!0,"search-options":{enabled:!0},"pagination-options":{enabled:!0,perPageDropdown:[10,20,50]},styleClass:"vgt-table striped bordered condensed",class:"py-0"},{"table-row":l(a=>[a.column.field=="actions"?(s(),o("span",F,[t("div",G,[n(h,{to:{name:"AdminPenangananDetail",params:{id:a.row.id}}},{default:l(()=>[E]),_:2},1032,["to"])])])):a.column.field=="status"?(s(),o("span",H,[t("div",L,[a.row.penanganandeteksimasalah.length>0?(s(),o("button",$,J)):(s(),o("button",K,Q))])])):(s(),o("span",U,A(a.formattedRow[a.column.field]),1))]),_:1},8,["rows"])])):k("",!0)])])])],64)}}};export{st as default};
