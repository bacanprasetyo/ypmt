import{u as g,d as k,a as v,b as y,c as S,r as m,j as _,o as a,e as o,f as e,g as n,w as d,q as B,F as C,A as j,t as l,i as u}from"./index.127bc060.js";import{B as A,a as D}from"./BreadCrumbSpace.79d12274.js";import{B as N}from"./ButtonEdit.164f0963.js";const E={class:"pt-4 px-10 md:flex justify-between"},P=e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},"Sekolah ")],-1),V={class:"md:py-0 py-4"},I=u(" Sekolah "),R=u(" Index "),F=e("div",{class:"pt-4 px-10 md:flex justify-between"},[e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"})]),e("div",{class:"md:py-0 py-4 space-x-2 space-y-2"})],-1),G={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},J={class:"w-full lg:w-full"},K={class:"bg-white shadow rounded-lg px-4 py-4"},$={key:0},q={key:0},z={class:"text-sm font-medium text-center flex justify-center space-x-1"},H=e("button",{class:"btn btn-sm btn-primary tooltip","data-tip":"Detail"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1),M={key:1},T={class:"text-center"},L={key:2},O={class:"text-center"},Q={key:3},U={class:"text-center"},W={key:4},oe={__name:"Index",setup(X){const c=g();k(()=>c.getSekolah),c.$subscribe((s,r)=>{}),v().setPagesActive("sekolah");const h=y();S();const x=m([]),i=m([]),p=[{label:"No",field:"no",width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Actions",field:"actions",sortable:!1,width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Nama",field:"nama",type:"String"},{label:"Status",field:"status",type:"String"},{label:"Paket",field:"paket_nama",type:"String"},{label:"Jumlah Siswa",field:"jml_siswa",type:"String"},{label:"Jumlah Kelas",field:"jml_kelas",type:"String"}];(async()=>{try{const s=await j.get("owner/sekolah");return x.value=s.data,i.value=s.data,s.data}catch(s){console.error(s)}})();const w=async(s,r)=>{h.push({name:"AdminSekolahEdit",params:{id:s}})};return(s,r)=>{const f=_("router-link"),b=_("vue-good-table");return a(),o(C,null,[e("div",E,[P,e("div",V,[n(A,null,{content:d(()=>[I,n(D),R]),_:1})])]),F,e("div",G,[e("div",J,[e("div",K,[i.value?(a(),o("div",$,[n(b,{columns:p,rows:i.value,"search-options":{enabled:!0},"pagination-options":{enabled:!0,perPageDropdown:[10,20,50]},styleClass:"vgt-table striped bordered condensed",class:"py-0"},{"table-row":d(t=>[t.column.field=="actions"?(a(),o("span",q,[e("div",z,[n(N,{onClick:ee=>w(t.row.id,t.index)},null,8,["onClick"]),n(f,{to:{name:"AdminSekolahDetailDashboard",params:{id:t.row.id}}},{default:d(()=>[H]),_:2},1032,["to"])])])):t.column.field=="no"?(a(),o("span",M,[e("div",T,l(t.index+1),1)])):t.column.field=="jml_siswa"?(a(),o("span",L,[e("div",O,l(t.row.jml_siswa)+" Siswa",1)])):t.column.field=="jml_kelas"?(a(),o("span",Q,[e("div",U,l(t.row.jml_siswa)+" Kelas",1)])):(a(),o("span",W,l(t.formattedRow[t.column.field]),1))]),_:1},8,["rows"])])):B("",!0)])])])],64)}}};export{oe as default};
