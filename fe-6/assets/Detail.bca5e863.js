import{m as k,l as D}from"./id.e6069473.js";import{a as A,b as B,c as S,r as m,j as b,o as r,e as l,f as t,t as _,g as o,w as p,h as d,q as $,F as C,A as h,T as P}from"./index.448f190d.js";import{B as T}from"./ButtonEdit.f4c977b9.js";import{B as j}from"./ButtonDel.5c0a604a.js";import{_ as E}from"./ButtonKembali.88dd9feb.js";const N={class:"pt-4 px-10 md:flex justify-between"},R={class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},V={class:"md:py-0 py-4 space-x-2 space-y-2"},F=t("button",{class:"btn btn-primary"},"Tambah",-1),q={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},z={class:"w-full lg:w-full"},I={class:"bg-base-200 shadow rounded-lg px-4 py-4"},L={key:0},M={key:0},G={class:"text-sm font-medium text-center flex justify-center space-x-1"},H={key:1},J={class:"text-center"},K={key:2},se={__name:"Detail",setup(O){k.updateLocale("id",D),A().setsubMenuActive("prestasi"),B();const u=S(),n=u.params.id,i=u.params.id2;u.params.id3;const f=m([]),c=m([]),v=[{label:"Actions",field:"actions",sortable:!1,width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Prestasi",field:"prestasi",type:"String"}];(async()=>{try{const e=await h.get(`owner/datasekolah/${n}/siswa/${i}/catatanprestasisiswa`);return f.value=e.data,c.value=f.value,e.data}catch(e){console.error(e)}})();const w=m([]);(async()=>{try{const e=await h.get(`owner/datasekolah/${n}/siswa/${i}`);return w.value=e.data,e.data}catch(e){console.error(e)}})();const y=async(e,x)=>{if(confirm("Apakah anda yakin menghapus data ini?"))try{const s=await h.delete(`owner/datasekolah/${n}/siswa/${i}/catatanprestasisiswa/${e}`);return c.value.splice(x,1),P.success("Success","Data Berhasil dihapus!"),s.data}catch(s){console.error(s)}};return(e,x)=>{const s=b("router-link"),g=b("vue-good-table");return r(),l(C,null,[t("div",N,[t("div",null,[t("span",R,_(w.value.nama),1)]),t("div",V,[o(s,{to:{name:"AdminSekolahDetailPrestasiDetailTambah",params:{id:d(n),id2:d(i)}}},{default:p(()=>[F]),_:1},8,["to"]),o(E)])]),t("div",q,[t("div",z,[t("div",I,[c.value?(r(),l("div",L,[o(g,{"line-numbers":!0,columns:v,rows:c.value,"search-options":{enabled:!0},"pagination-options":{enabled:!0,perPageDropdown:[10,20,50]},styleClass:"vgt-table striped bordered condensed",class:"py-0"},{"table-row":p(a=>[a.column.field=="actions"?(r(),l("span",M,[t("div",G,[o(s,{to:{name:"AdminSekolahDetailPrestasiDetailEdit",params:{id:d(n),id2:d(i),id3:a.row.id}}},{default:p(()=>[o(T)]),_:2},1032,["to"]),o(j,{onClick:X=>y(a.row.id,a.index)},null,8,["onClick"])])])):a.column.field=="no"?(r(),l("span",H,[t("div",J,_(a.index+1),1)])):(r(),l("span",K,_(a.formattedRow[a.column.field]),1))]),_:1},8,["rows"])])):$("",!0)])])])],64)}}};export{se as default};
