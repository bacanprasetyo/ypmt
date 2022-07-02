import{m as h,l as C,b as A,d as f,c as R,u as j,a as P,r,e as g,o as s,f as n,g as e,h as l,w as c,y as D,B as N,t as u,s as T,n as V,x as k,A as I,T as K}from"./index.0a1e5a66.js";const $={class:"pt-4 px-10 md:flex justify-between"},z=e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},"Klasifikasi Akademis dan Profesi ")],-1),E={class:"md:py-0 py-4"},H=k(" Klasifikasi "),L=k(" Index "),M={class:"pt-4 px-10 md:flex justify-between"},Y=e("button",{class:"btn btn-sm"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"})])],-1),O=[Y],G=e("div",{class:"md:py-0 py-4 space-x-2 space-y-2"},null,-1),J={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},U={class:"w-full lg:w-full"},q={class:"bg-white shadow rounded-lg px-4 py-4"},F={key:0},Q={key:0},W={class:"text-sm font-medium text-center flex justify-center space-x-0"},X=e("button",{class:"btn btn-sm btn-primary tooltip","data-tip":"Detail"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1),Z={key:1},ee={class:"text-center"},te={key:2},ae={class:"text-left"},se={key:3},de={name:"Klasifikasi",setup(ne){h.updateLocale("id",C);const w={}.VITE_API_URL,m=A();f(()=>m.getSekolah),m.$subscribe((t,i)=>{}),R().setPagesActive("klasifikasi"),j(),P();const b=r([]),d=r([]),v=[{label:"Actions",field:"actions",sortable:!1,width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Bidang",field:"bidang",type:"String"},{label:"Akademis",field:"akademis",type:"String"},{label:"Profesi",field:"profesi",type:"String"},{label:"Nilai Standart",field:"nilaistandart",type:"String"},{label:"IQ Standart",field:"iqstandart",type:"String"},{label:"Jurusan & Bidang Studi yang ditekuni",field:"jurusandanbidangstudi",type:"String"},{label:"Pekerjaan & Keterangan",field:"pekerjaandanketerangan",type:"String"},{label:"Link",field:"ket",type:"String"}];(async()=>{try{const t=await I.get("guest/data/klasifikasi");return b.value=t.data,d.value=t.data,t.data}catch(t){console.error(t)}})();const o=r([]),_=f(()=>o.value.selectedRows?x():o.value.selectedRows),p=t=>window.btoa(t),y=(t=h().format("YYYY-MM-Do"))=>{_.value.length<1?K.danger("Warning","Pilih data terlebih dahulu!"):window.open(`${w}api/guest/cetak/klasifikasi/?token=${p(t)}&data=${p(JSON.stringify(_.value))}`)},x=()=>{let t=[];return o.value.selectedRows.length>0&&o.value.selectedRows.forEach(i=>{t.push(i.id)}),t};return(t,i)=>{const S=g("router-link"),B=g("vue-good-table");return s(),n(V,null,[e("div",$,[z,e("div",E,[l(N,null,{content:c(()=>[H,l(D),L]),_:1})])]),e("div",M,[e("div",null,[e("a",{onClick:i[0]||(i[0]=a=>y())},O)]),G]),e("div",J,[e("div",U,[e("div",q,[d.value?(s(),n("div",F,[l(B,{ref_key:"myTable",ref:o,onOnSelectedRowsChange:t.selectionChanged,"line-numbers":!0,columns:v,rows:d.value,"search-options":{enabled:!0},"pagination-options":{enabled:!0,perPageDropdown:[10,20,50]},styleClass:"vgt-table striped bordered condensed",class:"py-0","select-options":{enabled:!0}},{"table-row":c(a=>[a.column.field=="actions"?(s(),n("span",Q,[e("div",W,[l(S,{to:{name:"AdminKlasifikasiDetail",params:{id:a.row.id}}},{default:c(()=>[X]),_:2},1032,["to"])])])):a.column.field=="no"?(s(),n("span",Z,[e("div",ee,u(a.index+1),1)])):a.column.field=="pekerjaandanketerangan"?(s(),n("span",te,[e("div",ae,u(a.row.pekerjaandanketerangan.slice(0,40)+"..."),1)])):(s(),n("span",se,u(a.formattedRow[a.column.field]),1))]),_:1},8,["onOnSelectedRowsChange","rows"])])):T("",!0)])])])],64)}}};export{de as default};
