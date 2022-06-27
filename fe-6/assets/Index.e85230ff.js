import{u as y,d as B,a as j,b as C,c as A,r as m,j as _,o as n,e as i,f as t,g as s,w as r,q as D,F as S,A as h,t as p,i as c,T as K}from"./index.8258c87c.js";import{B as T,a as E}from"./BreadCrumbSpace.6f520c36.js";import{B as N}from"./ButtonEdit.5d40700f.js";import{B as V}from"./ButtonDel.373c2b68.js";const $={class:"pt-4 px-10 md:flex justify-between"},I=t("div",null,[t("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},"Kata - kata bijak ")],-1),P={class:"md:py-0 py-4"},R=c(" Kata - kata bijak "),z=c(" Index "),F={class:"md:pt-6"},G={class:"md:flex justify-between px-10"},L={class:"space-x-1 space-y-1 pt-1 md:pt-0"},M=t("button",{class:"btn btn-info hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),c(" Tambah ")],-1),q=t("div",{class:"space-x-1 space-y-1 pt-1 md:pt-0"},null,-1),H={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},J={class:"w-full lg:w-full"},O={class:"bg-white shadow rounded-lg px-4 py-4"},Q={key:0},U={key:0},W={class:"text-sm font-medium text-center flex justify-center space-x-1"},X=t("button",{class:"btn btn-sm btn-primary tooltip","data-tip":"Detail"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1),Y={key:1},Z={class:"text-left"},tt={key:2},dt={__name:"Index",setup(et){const u=y();B(()=>u.getSekolah),u.$subscribe((e,d)=>{}),j().setPagesActive("katabijak");const k=C();A();const w=m([]),l=m([]),b=[{label:"Actions",field:"actions",sortable:!1,width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Judul",field:"judul",type:"String"},{label:"Status",field:"status",type:"String"}];(async()=>{try{const e=await h.get("owner/katabijak");return w.value=e.data,l.value=e.data,e.data}catch(e){console.error(e)}})();const x=async(e,d)=>{k.push({name:"AdminKatabijakEdit",params:{id:e}})},f=async(e,d)=>{if(confirm("Apakah anda yakin menghapus data ini?"))try{const o=await h.delete(`owner/katabijak/${e}`);return l.value.splice(d,1),K.success("Success","Data Berhasil dihapus!"),o.data}catch(o){console.error(o)}};return(e,d)=>{const o=_("router-link"),v=_("vue-good-table");return n(),i(S,null,[t("div",$,[I,t("div",P,[s(T,null,{content:r(()=>[R,s(E),z]),_:1})])]),t("div",F,[t("div",G,[t("div",L,[s(o,{to:{name:"AdminKatabijakTambah"}},{default:r(()=>[M]),_:1})]),q])]),t("div",H,[t("div",J,[t("div",O,[l.value?(n(),i("div",Q,[s(v,{columns:b,rows:l.value,"line-numbers":!0,"search-options":{enabled:!0},"pagination-options":{enabled:!0,perPageDropdown:[10,20,50]},styleClass:"vgt-table striped bordered condensed",class:"py-0"},{"table-row":r(a=>[a.column.field=="actions"?(n(),i("span",U,[t("div",W,[s(N,{onClick:g=>x(a.row.id,a.index)},null,8,["onClick"]),s(V,{onClick:g=>f(a.row.id,a.index)},null,8,["onClick"]),s(o,{to:{name:"AdminKatabijakDetail",params:{id:a.row.id}}},{default:r(()=>[X]),_:2},1032,["to"])])])):a.column.field=="jml_sekolah"?(n(),i("span",Y,[t("div",Z,p(a.row.jml_sekolah)+" Sekolah",1)])):(n(),i("span",tt,p(a.formattedRow[a.column.field]),1))]),_:1},8,["rows"])])):D("",!0)])])])],64)}}};export{dt as default};
