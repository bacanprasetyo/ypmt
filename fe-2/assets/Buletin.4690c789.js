import{b,d as g,c as w,u as v,a as y,r as c,e as r,o,f as a,g as e,h as n,w as i,y as k,B,t as u,s as C,n as A,x as _,A as S}from"./index.0a1e5a66.js";const D={class:"pt-4 px-10 md:flex justify-between"},N=e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},"Buletin Psikologi ")],-1),j={class:"md:py-0 py-4"},P=_(" Buletin "),V=_(" Index "),R=e("div",{class:"pt-4 px-10 md:flex justify-between"},[e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"})]),e("div",{class:"md:py-0 py-4 space-x-2 space-y-2"})],-1),F={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},G={class:"w-full lg:w-full"},I={class:"bg-white shadow rounded-lg px-4 py-4"},T={key:0},z={key:0},E={class:"text-sm font-medium text-center flex justify-center space-x-0"},H=e("button",{class:"btn btn-sm btn-primary tooltip","data-tip":"Detail"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1),J={key:1},M={class:"text-center"},$={key:2},Q={name:"Buletin",setup(q){const d=b();g(()=>d.getSekolah),d.$subscribe((t,x)=>{}),w().setPagesActive("buletin"),v(),y();const m=c([]),l=c([]),p=[{label:"No",field:"no",width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Actions",field:"actions",sortable:!1,width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Judul",field:"nama",type:"String"},{label:"Tipe",field:"tipe",type:"String"},{label:"File",field:"file",type:"String"}];return(async()=>{try{const t=await S.get("guest/data/buletin");return m.value=t.data,l.value=t.data,t.data}catch(t){console.error(t)}})(),(t,x)=>{const h=r("router-link"),f=r("vue-good-table");return o(),a(A,null,[e("div",D,[N,e("div",j,[n(B,null,{content:i(()=>[P,n(k),V]),_:1})])]),R,e("div",F,[e("div",G,[e("div",I,[l.value?(o(),a("div",T,[n(f,{columns:p,rows:l.value,"search-options":{enabled:!0},"pagination-options":{enabled:!0,perPageDropdown:[10,20,50]},styleClass:"vgt-table striped bordered condensed",class:"py-0"},{"table-row":i(s=>[s.column.field=="actions"?(o(),a("span",z,[e("div",E,[n(h,{to:{name:"AdminBuletinDetail",params:{id:s.row.id}}},{default:i(()=>[H]),_:2},1032,["to"])])])):s.column.field=="no"?(o(),a("span",J,[e("div",M,u(s.index+1),1)])):(o(),a("span",$,u(s.formattedRow[s.column.field]),1))]),_:1},8,["rows"])])):C("",!0)])])])],64)}}};export{Q as default};
