import{u as g,d as x,a as b,b as f,c as v,r,j as c,o as s,e as a,f as t,g as n,w as i,q as k,F as y,A as B,t as A,i as u}from"./index.127bc060.js";import{B as C,a as S}from"./BreadCrumbSpace.79d12274.js";const j={class:"pt-4 px-10 md:flex justify-between"},D=t("div",null,[t("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},"Penanganan Deteksi Masalah ")],-1),P={class:"md:py-0 py-4"},M=u(" Penanganan "),N=u(" Index "),V=t("div",{class:"md:pt-6"},[t("div",{class:"md:flex justify-between px-10"},[t("div",{class:"space-x-1 space-y-1 pt-1 md:pt-0"}),t("div",{class:"space-x-1 space-y-1 pt-1 md:pt-0"})])],-1),I={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},R={class:"w-full lg:w-full"},T={class:"bg-white shadow rounded-lg px-4 py-4"},z={key:0},F={key:0},G={class:"text-sm font-medium text-center flex justify-center space-x-1"},q=t("button",{class:"btn btn-sm btn-primary tooltip","data-tip":"Detail"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1),E={key:1},H={class:"text-sm font-medium text-center flex justify-center"},L={key:0,class:"tooltip btn btn-sm btn-success","data-tip":"Sudah Terisi"},$=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"})],-1),J=[$],K={key:1,class:"tooltip btn btn-sm","data-tip":"Belum Terisi"},O=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"})],-1),Q=[O],U={key:2},et={__name:"Index",setup(W){const d=g();x(()=>d.getSekolah),d.$subscribe((e,p)=>{}),b().setPagesActive("penanganan"),f(),v();const m=r([]),l=r([]),_=[{label:"Actions",field:"actions",sortable:!1,width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Nama ",field:"nama",type:"String"},{label:"Status",field:"status",type:"String"}];return(async()=>{try{const e=await B.get("owner/penanganandeteksimasalah/masterdeteksi");return m.value=e.data,l.value=e.data,e.data}catch(e){console.error(e)}})(),(e,p)=>{const h=c("router-link"),w=c("vue-good-table");return s(),a(y,null,[t("div",j,[D,t("div",P,[n(C,null,{content:i(()=>[M,n(S),N]),_:1})])]),V,t("div",I,[t("div",R,[t("div",T,[l.value?(s(),a("div",z,[n(w,{columns:_,rows:l.value,"line-numbers":!0,"search-options":{enabled:!0},"pagination-options":{enabled:!0,perPageDropdown:[10,20,50]},styleClass:"vgt-table striped bordered condensed",class:"py-0"},{"table-row":i(o=>[o.column.field=="actions"?(s(),a("span",F,[t("div",G,[n(h,{to:{name:"AdminPenangananDetail",params:{id:o.row.id}}},{default:i(()=>[q]),_:2},1032,["to"])])])):o.column.field=="status"?(s(),a("span",E,[t("div",H,[o.row.penanganandeteksimasalah.length>0?(s(),a("button",L,J)):(s(),a("button",K,Q))])])):(s(),a("span",U,A(o.formattedRow[o.column.field]),1))]),_:1},8,["rows"])])):k("",!0)])])])],64)}}};export{et as default};
