import{s as b,y as g,u as w,a as v,b as y,r,c,o as a,d as o,e,f as n,w as d,B as k,g as B,t as u,k as C,l as S,m,A}from"./index.181de641.js";const R={class:"pt-4 px-10 md:flex justify-between"},D=e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},"Referensi Studi & Kerja ")],-1),j={class:"md:py-0 py-4"},N=m(" Referensi "),V=m(" Index "),P=e("div",{class:"pt-4 px-10 md:flex justify-between"},[e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"})]),e("div",{class:"md:py-0 py-4 space-x-2 space-y-2"})],-1),F={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},G={class:"w-full lg:w-full"},I={class:"bg-white shadow rounded-lg px-4 py-4"},T={key:0},z={key:0},E={class:"text-sm font-medium text-center flex justify-center space-x-0"},H=e("button",{class:"btn btn-sm btn-primary tooltip","data-tip":"Detail"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1),J={key:1},K={class:"text-center"},M={key:2},Q={name:"ReferensiStudi",setup($){const i=b();g(()=>i.getSekolah),i.$subscribe((t,x)=>{}),w().setPagesActive("referensistudi"),v(),y();const _=r([]),l=r([]),p=[{label:"No",field:"no",width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Actions",field:"actions",sortable:!1,width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Judul",field:"nama",type:"String"},{label:"Tipe",field:"tipe",type:"String"},{label:"File",field:"file",type:"String"}];return(async()=>{try{const t=await A.get("guest/data/referensi");return _.value=t.data,l.value=t.data,t.data}catch(t){console.error(t)}})(),(t,x)=>{const f=c("router-link"),h=c("vue-good-table");return a(),o(S,null,[e("div",R,[D,e("div",j,[n(B,null,{content:d(()=>[N,n(k),V]),_:1})])]),P,e("div",F,[e("div",G,[e("div",I,[l.value?(a(),o("div",T,[n(h,{columns:p,rows:l.value,"search-options":{enabled:!0},"pagination-options":{enabled:!0,perPageDropdown:[10,20,50]},styleClass:"vgt-table striped bordered condensed",class:"py-0"},{"table-row":d(s=>[s.column.field=="actions"?(a(),o("span",z,[e("div",E,[n(f,{to:{name:"AdminReferensiStudiDetail",params:{id:s.row.id}}},{default:d(()=>[H]),_:2},1032,["to"])])])):s.column.field=="no"?(a(),o("span",J,[e("div",K,u(s.index+1),1)])):(a(),o("span",M,u(s.formattedRow[s.column.field]),1))]),_:1},8,["rows"])])):C("",!0)])])])],64)}}};export{Q as default};
