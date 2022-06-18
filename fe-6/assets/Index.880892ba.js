import{B as A}from"./ButtonCetak.c37c94f2.js";import{B as $}from"./ButtonMore.9ce6a0f2.js";import{m as v,l as V}from"./id.e7cd1306.js";import{a as j,b as N,c as P,r as i,j as m,o as d,e as r,f as t,g as c,S as F,h as g,w as b,q as M,F as R,A as x,T as w,t as h}from"./index.45c605a6.js";const Y=t("div",{class:"pt-4 px-10 md:flex justify-between"},[t("div",null,[t("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"}," Catatan Pengembangan Diri Siswa")]),t("div",{class:"md:py-0 py-4 space-x-2 space-y-2"})],-1),E={class:"w-full bg-base-200 shadow py-4 px-4"},z={class:"flex justify-center"},I={class:"py-2"},L={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},T={class:"w-full lg:w-full"},U={class:"bg-base-200 shadow rounded-lg px-4 py-4"},W={key:0},q={key:0},G={class:"text-sm font-medium text-center flex justify-center space-x-1"},H={key:1},J={class:"text-center"},O={key:2},ie={__name:"Index",setup(Q){const k="https://be.ypmt-psiprobk.com/";v.updateLocale("id",V),j().setsubMenuActive("pengembangandiri"),N();const u=P().params.id,n=i([]),l=i([]),y=[{label:"No",field:"no",width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Actions",field:"actions",sortable:!1,width:"50px",tdClass:"text-center",thClass:"text-center"},{label:"Nama Siswa",field:"nama",type:"String"},{label:"Kelas",field:"kelas_nama",type:"String"},{label:"Data",field:"jml",type:"String"}];(async()=>{try{const e=await x.get(`owner/datasekolah/${u}/catatanpengembangandiri/siswa`);return n.value=e.data,l.value=n.value,e.data}catch(e){console.error(e)}})();const p=i([]),o=i({label:"Semua Kelas",id:"Semua Kelas"});let _=i([{label:"Semua Kelas",id:"Semua Kelas"},{label:"Belum masuk Kelas",id:"Belum masuk Kelas"}]);(async()=>{try{const e=await x.get(`owner/datasekolah/${u}/kelas`);return p.value=e.data,p.value.forEach(a=>{_.value.push({label:a.nama,id:a.id})}),e}catch(e){w.danger("Warning","Data Gagal dimuat"),console.error(e)}})();const C=()=>{if(o.value.id==="Semua Kelas")l.value=n.value;else if(o.value.id==="Belum masuk Kelas"){let e=n.value.filter(a=>a.kelas===null);l.value=e}else{let e=n.value.filter(a=>a.kelas_id==o.value.id);l.value=e}},f=e=>window.btoa(e),K=(e=null,a=v().format("YYYY-MM-Do"))=>{e===null?w.danger("Warning","Data tidak valid!"):window.open(`${k}api/guest/cetak/catatanpengembangandiri/${f(e)}?token=${f(a)}`)};return(e,a)=>{const S=m("v-select"),B=m("router-link"),D=m("vue-good-table");return d(),r(R,null,[Y,t("div",E,[t("div",z,[c(S,{class:F(["py-2 px-3 w-72 mx-auto md:mx-0",{disabled:!1}]),options:g(_),modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=s=>o.value=s)},null,8,["options","modelValue"]),t("div",I,[t("button",{class:"btn btn-sm btn-info p-2",onClick:a[1]||(a[1]=s=>C())}," Cari ")])])]),t("div",L,[t("div",T,[t("div",U,[l.value?(d(),r("div",W,[c(D,{columns:y,rows:l.value,"search-options":{enabled:!0},"pagination-options":{enabled:!0,perPageDropdown:[10,20,50]},styleClass:"vgt-table striped bordered condensed",class:"py-0"},{"table-row":b(s=>[s.column.field=="actions"?(d(),r("span",q,[t("div",G,[c(A,{onClick:te=>K(s.row.id)},null,8,["onClick"]),c(B,{to:{name:"AdminSekolahDetailPengembangandiriDetail",params:{id:g(u),id2:s.row.id}}},{default:b(()=>[c($)]),_:2},1032,["to"])])])):s.column.field=="no"?(d(),r("span",H,[t("div",J,h(s.index+1),1)])):(d(),r("span",O,h(s.formattedRow[s.column.field]),1))]),_:1},8,["rows"])])):M("",!0)])])])],64)}}};export{ie as default};
