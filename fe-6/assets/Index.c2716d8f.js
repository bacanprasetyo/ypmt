import{B as A}from"./ButtonCetak.f434e34f.js";import{B as $}from"./ButtonMore.41c541d8.js";import{m as v,l as V}from"./id.e6069473.js";import{a as j,b as N,c as F,r as i,j as m,o as d,e as r,f as t,g as c,S as M,h as x,w as b,q as R,F as Y,A as w,T as g,t as h}from"./index.448f190d.js";const E=t("div",{class:"pt-4 px-10 md:flex justify-between"},[t("div",null,[t("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"}," Catatan Kasus Siswa ")]),t("div",{class:"md:py-0 py-4 space-x-2 space-y-2"})],-1),P={class:"w-full bg-base-200 shadow py-4 px-4"},z={class:"flex justify-center"},I={class:"py-2"},L={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},T={class:"w-full lg:w-full"},U={class:"bg-base-200 shadow rounded-lg px-4 py-4"},W={key:0},q={key:0},G={class:"text-sm font-medium text-center flex justify-center space-x-1"},H={key:1},J={class:"text-center"},O={key:2},ie={__name:"Index",setup(Q){const k="http://127.0.0.1:8000/";v.updateLocale("id",V),j().setsubMenuActive("kasus"),N();const u=F().params.id,o=i([]),l=i([]),y=[{label:"No",field:"no",width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Actions",field:"actions",sortable:!1,width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Nama Siswa",field:"nama",type:"String"},{label:"Kelas",field:"kelas_nama",type:"String"},{label:"Kasus",field:"jml",type:"String"}];(async()=>{try{const e=await w.get(`owner/datasekolah/${u}/catatankasussiswa/siswa`);return o.value=e.data,l.value=o.value,e.data}catch(e){console.error(e)}})();const p=i([]),n=i({label:"Semua Kelas",id:"Semua Kelas"});let _=i([{label:"Semua Kelas",id:"Semua Kelas"},{label:"Belum masuk Kelas",id:"Belum masuk Kelas"}]);(async()=>{try{const e=await w.get(`owner/datasekolah/${u}/kelas`);return p.value=e.data,p.value.forEach(a=>{_.value.push({label:a.nama,id:a.id})}),e}catch(e){g.danger("Warning","Data Gagal dimuat"),console.error(e)}})();const K=()=>{if(n.value.id==="Semua Kelas")l.value=o.value;else if(n.value.id==="Belum masuk Kelas"){let e=o.value.filter(a=>a.kelas===null);l.value=e}else{let e=o.value.filter(a=>a.kelas_id==n.value.id);l.value=e}},f=e=>window.btoa(e),C=(e=null,a=v().format("YYYY-MM-Do"))=>{e===null?g.danger("Warning","Data tidak valid!"):window.open(`${k}api/guest/cetak/catatankasus/${f(e)}?token=${f(a)}`)};return(e,a)=>{const S=m("v-select"),B=m("router-link"),D=m("vue-good-table");return d(),r(Y,null,[E,t("div",P,[t("div",z,[c(S,{class:M(["py-2 px-3 w-72 mx-auto md:mx-0",{disabled:!1}]),options:x(_),modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=s=>n.value=s)},null,8,["options","modelValue"]),t("div",I,[t("button",{class:"btn btn-sm btn-info p-2",onClick:a[1]||(a[1]=s=>K())}," Cari ")])])]),t("div",L,[t("div",T,[t("div",U,[l.value?(d(),r("div",W,[c(D,{columns:y,rows:l.value,"search-options":{enabled:!0},"pagination-options":{enabled:!0,perPageDropdown:[10,20,50]},styleClass:"vgt-table striped bordered condensed",class:"py-0"},{"table-row":b(s=>[s.column.field=="actions"?(d(),r("span",q,[t("div",G,[c(A,{onClick:te=>C(s.row.id)},null,8,["onClick"]),c(B,{to:{name:"AdminSekolahDetailKasusDetail",params:{id:x(u),id2:s.row.id}}},{default:b(()=>[c($)]),_:2},1032,["to"])])])):s.column.field=="no"?(d(),r("span",H,[t("div",J,h(s.index+1),1)])):(d(),r("span",O,h(s.formattedRow[s.column.field]),1))]),_:1},8,["rows"])])):R("",!0)])])])],64)}}};export{ie as default};
