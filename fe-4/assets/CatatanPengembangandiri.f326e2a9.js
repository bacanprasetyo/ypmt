import{v as b,c as f,x as w,y as v,z as y,e as r,A as c,B as s,C as n,D as e,E as o,F as d,L as k,M as C,P as B,H as m,N as u}from"./index.5ee08ead.js";import{a as A,B as P}from"./BreadCrumbSpace.a51527f0.js";const S={class:"pt-4 px-10 md:flex justify-between"},D=e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},"Catatan Pengembangandiri Siswa")],-1),j={class:"md:py-0 py-4"},N=u(" Pengembangandiri "),I=u(" Index "),V=e("div",{class:"pt-4 px-10 md:flex justify-between"},[e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"})]),e("div",{class:"md:py-0 py-4 space-x-2 space-y-2"})],-1),R={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},z={class:"w-full lg:w-full"},E={class:"bg-white shadow rounded-lg px-4 py-4"},F={key:0},G={key:0},H={class:"text-sm font-medium text-center flex justify-center space-x-0"},M=e("button",{class:"btn btn-sm btn-primary tooltip","data-tip":"Detail"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1),K={key:1},L={class:"text-center"},T={key:2},U={__name:"CatatanPengembangandiri",setup($){const l=b();f(()=>l.getSekolah),l.$subscribe((t,x)=>{}),w().setPagesActive("pengembangandiri"),v(),y();const _=r([]),i=r([]),p=[{label:"No",field:"no",width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Actions",field:"actions",sortable:!1,width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Ide dan Imajinasi",field:"idedanimajinasi",type:"String"},{label:"Ketrampilan",field:"ketrampilan",type:"String"}];return(async()=>{try{const t=await B.get("siswa/data/catatan/pengembangandiri");return _.value=t.data,i.value=t.data,t.data}catch(t){console.error(t)}})(),(t,x)=>{const g=c("router-link"),h=c("vue-good-table");return s(),n(C,null,[e("div",S,[D,e("div",j,[o(A,null,{content:d(()=>[N,o(P),I]),_:1})])]),V,e("div",R,[e("div",z,[e("div",E,[i.value?(s(),n("div",F,[o(h,{columns:p,rows:i.value,"search-options":{enabled:!0},"pagination-options":{enabled:!0,perPageDropdown:[10,20,50]},styleClass:"vgt-table striped bordered condensed",class:"py-0"},{"table-row":d(a=>[a.column.field=="actions"?(s(),n("span",G,[e("div",H,[o(g,{to:{name:"AdminPengembangandiriDetail",params:{id:a.row.id}}},{default:d(()=>[M]),_:2},1032,["to"])])])):a.column.field=="no"?(s(),n("span",K,[e("div",L,m(a.index+1),1)])):(s(),n("span",T,m(a.formattedRow[a.column.field]),1))]),_:1},8,["rows"])])):k("",!0)])])])],64)}}};export{U as default};
