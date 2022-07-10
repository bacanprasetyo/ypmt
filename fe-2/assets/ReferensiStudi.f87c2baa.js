import{b as w,d as y,c as g,u as v,a as k,r as d,e as c,o as s,f as o,g as e,h as a,w as i,y as B,B as S,t as _,j as A,s as C,n as D,x as u,A as R}from"./index.5790ddae.js";const j={class:"pt-4 px-10 md:flex justify-between"},N=e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},"Referensi Studi & Kerja ")],-1),V={class:"md:py-0 py-4"},P=u(" Referensi "),E=u(" Index "),F=e("div",{class:"pt-4 px-10 md:flex justify-between"},[e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"})]),e("div",{class:"md:py-0 py-4 space-x-2 space-y-2"})],-1),G={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},I={class:"w-full lg:w-full"},T={class:"bg-white shadow rounded-lg px-4 py-4"},U={key:0},z={key:0},H={class:"text-sm font-medium text-center flex justify-center space-x-0"},J=e("button",{class:"btn btn-sm btn-primary tooltip","data-tip":"Detail"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1),K={key:1},L={class:"text-center"},M={key:2},$={key:0,class:"text-left"},q=["href"],O=e("button",{class:"btn btn-primary"},"Download",-1),Q=[O],W={key:1},X=["href"],Y=e("button",{class:"btn btn-primary"},"Download",-1),Z=[Y],ee={key:3},ae={name:"ReferensiStudi",setup(te){const m="https://be.ypmt-psiprobk.com/",r=w();y(()=>r.getSekolah),r.$subscribe((n,h)=>{}),g().setPagesActive("referensistudi"),v(),k();const p=d([]),l=d([]),f=[{label:"Actions",field:"actions",sortable:!1,width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Judul",field:"nama",type:"String"},{label:"Tipe",field:"tipe",type:"String"},{label:"File",field:"file",type:"String"}];return(async()=>{try{const n=await R.get("guest/data/referensi");return p.value=n.data,l.value=n.data,n.data}catch(n){console.error(n)}})(),(n,h)=>{const b=c("router-link"),x=c("vue-good-table");return s(),o(D,null,[e("div",j,[N,e("div",V,[a(S,null,{content:i(()=>[P,a(B),E]),_:1})])]),F,e("div",G,[e("div",I,[e("div",T,[l.value?(s(),o("div",U,[a(x,{"line-numbers":!0,columns:f,rows:l.value,"search-options":{enabled:!0},"pagination-options":{enabled:!0,perPageDropdown:[10,20,50]},styleClass:"vgt-table striped bordered condensed",class:"py-0"},{"table-row":i(t=>[t.column.field=="actions"?(s(),o("span",z,[e("div",H,[a(b,{to:{name:"AdminReferensiStudiDetail",params:{id:t.row.id}}},{default:i(()=>[J]),_:2},1032,["to"])])])):t.column.field=="no"?(s(),o("span",K,[e("div",L,_(t.index+1),1)])):t.column.field=="file"?(s(),o("span",M,[t.row.tipe!="Upload"?(s(),o("div",$,[e("a",{href:t.row.link,target:"_blank",rel:"noopener noreferrer"},Q,8,q)])):(s(),o("div",W,[e("a",{href:A(m)+t.row.file,target:"_blank",rel:"noopener noreferrer"},Z,8,X)]))])):(s(),o("span",ee,_(t.formattedRow[t.column.field]),1))]),_:1},8,["rows"])])):C("",!0)])])])],64)}}};export{ae as default};
