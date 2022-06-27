import{m as w,l as M}from"./id.a73b72f2.js";import{u as $,d as f,a as T,b as E,c as V,r,j as v,o as n,e as o,f as e,g as l,w as u,q as I,F as K,A as g,t as m,i as h}from"./index.127bc060.js";import{B as N,a as z}from"./BreadCrumbSpace.79d12274.js";import{B as L}from"./ButtonEdit.164f0963.js";import{B as P}from"./ButtonDel.a70821bd.js";const Y={class:"pt-4 px-10 md:flex justify-between"},H=e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},"Kecerdasan Majemuk ")],-1),O={class:"md:py-0 py-4"},F=h(" Kecerdasan Majemuk "),G=h(" Index "),q={class:"md:pt-6"},J={class:"md:flex justify-between px-10"},U={class:"space-x-1 space-y-1 pt-1 md:pt-0"},W=e("button",{class:"btn btn-info hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),h(" Tambah ")],-1),Q=e("button",{class:"btn btn-sm"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"})])],-1),X=[Q],Z=e("div",{class:"space-x-1 space-y-1 pt-1 md:pt-0"},null,-1),ee={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},te={class:"w-full lg:w-full"},ae={class:"bg-white shadow rounded-lg px-4 py-4"},se={key:0},ne={key:0},oe={class:"text-sm font-medium text-center flex justify-center space-x-1"},le={key:1},ie={class:"text-center"},de={key:2},ce={class:"text-left"},re={key:3},ve={__name:"Index",setup(ue){w.updateLocale("id",M);const b="https://be.ypmt-psiprobk.com/",_=$();f(()=>_.getSekolah),_.$subscribe((t,s)=>{}),T().setPagesActive("kecerdasanmajemuk");const x=E();V();const y=r([]),c=r([]),B=[{label:"Actions",field:"actions",sortable:!1,width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Multiple Intellegences",field:"nama",type:"String"},{label:"Visual",field:"visual",type:"String"},{label:"Auditif",field:"auditif",type:"String"},{label:"KInestetik",field:"kinestetik",type:"String"}];(async()=>{try{const t=await g.get("owner/kecerdasanmajemuk");return y.value=t.data,c.value=t.data,t.data}catch(t){console.error(t)}})();const C=async(t,s)=>{x.push({name:"AdminKecerdasanMajemukEdit",params:{id:t}})},j=async(t,s)=>{if(confirm("Apakah anda yakin menghapus data ini?"))try{const d=await g.delete(`owner/kecerdasanmajemuk/${t}`);return c.value.splice(s,1),Toast.success("Success","Data Berhasil dihapus!"),d.data}catch(d){console.error(d)}},i=r([]),p=f(()=>i.value.selectedRows?A():i.value.selectedRows),k=t=>window.btoa(t),S=(t=w().format("YYYY-MM-Do"))=>{p.value.length<1?Toast.danger("Warning","Pilih data terlebih dahulu!"):window.open(`${b}api/guest/cetak/kecerdasanmajemuk/?token=${k(t)}&data=${k(JSON.stringify(p.value))}`)},A=()=>{let t=[];return i.value.selectedRows.length>0&&i.value.selectedRows.forEach(s=>{t.push(s.id)}),t};return(t,s)=>{const d=v("router-link"),D=v("vue-good-table");return n(),o(K,null,[e("div",Y,[H,e("div",O,[l(N,null,{content:u(()=>[F,l(z),G]),_:1})])]),e("div",q,[e("div",J,[e("div",U,[l(d,{to:{name:"AdminKecerdasanMajemukTambah"}},{default:u(()=>[W]),_:1}),e("a",{onClick:s[0]||(s[0]=a=>S())},X)]),Z])]),e("div",ee,[e("div",te,[e("div",ae,[c.value?(n(),o("div",se,[l(D,{ref_key:"myTable",ref:i,onOnSelectedRowsChange:t.selectionChanged,"line-numbers":!0,"select-options":{enabled:!1},columns:B,rows:c.value,"search-options":{enabled:!0},"pagination-options":{enabled:!0,perPageDropdown:[10,20,50]},styleClass:"vgt-table striped bordered condensed",class:"py-0"},{"table-row":u(a=>[a.column.field=="actions"?(n(),o("span",ne,[e("div",oe,[l(L,{onClick:R=>C(a.row.id,a.index)},null,8,["onClick"]),l(P,{onClick:R=>j(a.row.id,a.index)},null,8,["onClick"])])])):a.column.field=="no"?(n(),o("span",le,[e("div",ie,m(a.index+1),1)])):a.column.field=="pekerjaandanketerangan"?(n(),o("span",de,[e("div",ce,m(a.row.pekerjaandanketerangan.slice(0,40)+"..."),1)])):(n(),o("span",re,m(a.formattedRow[a.column.field]),1))]),_:1},8,["onOnSelectedRowsChange","rows"])])):I("",!0)])])])],64)}}};export{ve as default};
