import{a as p,b as f,c as x,r,j as w,o as a,e as s,f as o,g as d,w as b,q as v,A as y,t as c}from"./index.dfcd09a3.js";import{B as k}from"./ButtonEdit.94bd996a.js";const A={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},B={class:"w-full lg:w-full"},C={class:"bg-white shadow rounded-lg px-4 py-4"},D={key:0},S={key:0},j={class:"text-sm font-medium text-center flex justify-center space-x-0"},E={key:1},N={class:"text-left"},P={key:2},z={__name:"Index",setup(R){p().setsubMenuActive("pengguna");const i=f(),l=x().params.id,u=r([]),n=r([]),m=[{label:"Actions",field:"actions",sortable:!1,width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Nama Pengguna",field:"nama",type:"String"},{label:"Username",field:"username",type:"String"}];(async()=>{try{const e=await y.get(`owner/datasekolah/${l}}/gurubk`);return u.value=e.data,n.value=e.data,e.data}catch(e){console.error(e)}})();const _=async(e,g)=>{i.push({name:"AdminSekolahDetailPenggunaEdit",params:{id:l,id2:e}})};return(e,g)=>{const h=w("vue-good-table");return a(),s("div",A,[o("div",B,[o("div",C,[n.value?(a(),s("div",D,[d(h,{columns:m,rows:n.value,"line-numbers":!0,"search-options":{enabled:!0},"pagination-options":{enabled:!0,perPageDropdown:[10,20,50]},styleClass:"vgt-table striped bordered condensed",class:"py-0"},{"table-row":b(t=>[t.column.field=="actions"?(a(),s("span",S,[o("div",j,[d(k,{onClick:q=>_(t.row.id,t.index)},null,8,["onClick"])])])):t.column.field=="jml_sekolah"?(a(),s("span",E,[o("div",N,c(t.row.jml_sekolah)+" Sekolah",1)])):(a(),s("span",P,c(t.formattedRow[t.column.field]),1))]),_:1},8,["rows"])])):v("",!0)])])])}}};export{z as default};
