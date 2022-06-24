import{u as B,d as D,a as C,b as A,c as S,r as h,j as v,o as l,e as i,f as t,t as _,g as o,w as m,h as $,q as P,F as T,A as p,i as c,T as E}from"./index.dfcd09a3.js";import{B as K,a as L}from"./BreadCrumbSpace.9a2a2377.js";import{B as N}from"./ButtonEdit.94bd996a.js";import{B as V}from"./ButtonDel.1ddcb298.js";const R={class:"pt-4 px-10 md:flex justify-between"},z={class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},F={class:"md:py-0 py-4"},G=c(" Kata - kata bijak "),I=c(" Index "),M={class:"md:pt-6"},q={class:"md:flex justify-between px-10"},H={class:"space-x-1 space-y-1 pt-1 md:pt-0"},J=t("button",{class:"btn btn-info hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),c(" Tambah Penjelasan ")],-1),O={class:"space-x-1 space-y-1 pt-1 md:pt-0"},Q=t("button",{class:"btn hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),c(" Kembali ")],-1),U=[Q],W={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},X={class:"w-full lg:w-full"},Y={class:"bg-white shadow rounded-lg px-4 py-4"},Z={key:0},tt={key:0},et={class:"text-sm font-medium text-center flex justify-center space-x-1"},at={key:1},st={class:"text-left"},ot={key:2},mt={__name:"Detail",setup(nt){const w=B();D(()=>w.getSekolah),w.$subscribe((e,s)=>{}),C().setPagesActive("katabijak");const k=A(),r=S().params.id,x=h([]),d=h([]),g=[{label:"Actions",field:"actions",sortable:!1,width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Penjelasan",field:"penjelasan",type:"String"}];(async()=>{try{const e=await p.get(`owner/katabijak/${r}/detail`);return x.value=e.data,d.value=e.data,e.data}catch(e){console.error(e)}})();const b=async(e,s)=>{k.push({name:"AdminKatabijakDetailEdit",params:{id:r,id2:e}})},f=async(e,s)=>{if(confirm("Apakah anda yakin menghapus data ini?"))try{const n=await p.delete(`owner/katabijak/${r}/detail/${e}`);return d.value.splice(s,1),E.success("Success","Data Berhasil dihapus!"),n.data}catch(n){console.error(n)}},u=h([]);return(async()=>{try{const e=await p.get(`owner/katabijak/${r}`);return u.value=e.data,console.log(u.value),e.data}catch(e){console.error(e)}})(),(e,s)=>{const n=v("router-link"),y=v("vue-good-table");return l(),i(T,null,[t("div",R,[t("div",null,[t("span",z,_(u.value.judul),1)]),t("div",F,[o(K,null,{content:m(()=>[G,o(L),I]),_:1})])]),t("div",M,[t("div",q,[t("div",H,[o(n,{to:{name:"AdminKatabijakDetailTambah"}},{default:m(()=>[J]),_:1})]),t("div",O,[t("span",{onClick:s[0]||(s[0]=a=>$(k).go(-1))},U)])])]),t("div",W,[t("div",X,[t("div",Y,[d.value?(l(),i("div",Z,[o(y,{columns:g,rows:d.value,"line-numbers":!0,"search-options":{enabled:!0},"pagination-options":{enabled:!0,perPageDropdown:[10,20,50]},styleClass:"vgt-table striped bordered condensed",class:"py-0"},{"table-row":m(a=>[a.column.field=="actions"?(l(),i("span",tt,[t("div",et,[o(N,{onClick:j=>b(a.row.id,a.index)},null,8,["onClick"]),o(V,{onClick:j=>f(a.row.id,a.index)},null,8,["onClick"])])])):a.column.field=="jml_sekolah"?(l(),i("span",at,[t("div",st,_(a.row.jml_sekolah)+" Sekolah",1)])):(l(),i("span",ot,_(a.formattedRow[a.column.field]),1))]),_:1},8,["rows"])])):P("",!0)])])])],64)}}};export{mt as default};
