import{v as b,c as v,x as w,y as g,z as y,e as r,A as c,B as a,C as o,D as e,E as n,F as i,H as k,M as B,P as C,G as u,N as _}from"./index.92074ed7.js";import{a as S,B as A}from"./BreadCrumbSpace.0ec30673.js";const D={class:"pt-4 px-10 md:flex justify-between"},R=e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},"Referensi Studi & Kerja ")],-1),N={class:"md:py-0 py-4"},j=_(" Referensi "),P=_(" Index "),V=e("div",{class:"pt-4 px-10 md:flex justify-between"},[e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"})]),e("div",{class:"md:py-0 py-4 space-x-2 space-y-2"})],-1),F={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},G={class:"w-full lg:w-full"},z={class:"bg-white shadow rounded-lg px-4 py-4"},E={key:0},H={key:0},I={class:"text-sm font-medium text-center flex justify-center space-x-0"},M=e("button",{class:"btn btn-sm btn-primary tooltip","data-tip":"Detail"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1),T={key:1},J={class:"text-center"},K={key:2},U={__name:"ReferensiStudi",setup($){const d=b();v(()=>d.getSekolah),d.$subscribe((t,x)=>{}),w().setPagesActive("referensistudi"),g(),y();const m=r([]),l=r([]),p=[{label:"No",field:"no",width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Actions",field:"actions",sortable:!1,width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Judul",field:"nama",type:"String"},{label:"Tipe",field:"tipe",type:"String"},{label:"File",field:"file",type:"String"}];return(async()=>{try{const t=await C.get("siswa/data/referensi");return m.value=t.data,l.value=t.data,t.data}catch(t){console.error(t)}})(),(t,x)=>{const f=c("router-link"),h=c("vue-good-table");return a(),o(B,null,[e("div",D,[R,e("div",N,[n(S,null,{content:i(()=>[j,n(A),P]),_:1})])]),V,e("div",F,[e("div",G,[e("div",z,[l.value?(a(),o("div",E,[n(h,{columns:p,rows:l.value,"search-options":{enabled:!0},"pagination-options":{enabled:!0,perPageDropdown:[10,20,50]},styleClass:"vgt-table striped bordered condensed",class:"py-0"},{"table-row":i(s=>[s.column.field=="actions"?(a(),o("span",H,[e("div",I,[n(f,{to:{name:"AdminReferensiStudiDetail",params:{id:s.row.id}}},{default:i(()=>[M]),_:2},1032,["to"])])])):s.column.field=="no"?(a(),o("span",T,[e("div",J,u(s.index+1),1)])):(a(),o("span",K,u(s.formattedRow[s.column.field]),1))]),_:1},8,["rows"])])):k("",!0)])])])],64)}}};export{U as default};
