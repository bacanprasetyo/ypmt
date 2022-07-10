import{_ as c}from"./github-copilot.951fda1a.js";import{a as d,b as r,c as _,r as h,o as t,e as o,f as s,t as e,p,F as u,U as i,A as m}from"./index.156f8da1.js";const w={class:"md:py-4 px-4 lg:flex flex-wrap gap-4"},v={class:"w-full lg:w-full"},k={class:"bg-base-100 shadow rounded-lg px-4 py-4"},f={class:"overflow-x-auto"},y={class:"table table-compact"},g=s("td",{class:"whitespace-nowrap w-1/12"},"Nama Sekolah",-1),b=s("td",{class:"whitespace-nowrap w-1/12"},":",-1),x={class:"whitespace-nowrap w-10/12"},A=s("td",{class:"whitespace-nowrap w-1/12"},"Alamat",-1),S=s("td",{class:"whitespace-nowrap w-1/12"},":",-1),B={class:"whitespace-nowrap w-10/12"},D=s("td",{class:"whitespace-nowrap w-1/12"},"Nama Kepala Sekolah",-1),j=s("td",{class:"whitespace-nowrap w-1/12"},":",-1),E={class:"whitespace-nowrap w-10/12"},K=s("td",{class:"whitespace-nowrap w-1/12"},"Wilayah",-1),L=s("td",{class:"whitespace-nowrap w-1/12"},":",-1),N={class:"whitespace-nowrap w-10/12"},O=s("div",{class:"px-4 py-10"},[s("h3",{class:"font-bold"})],-1),q={key:0,class:"w-full flex justify-center flex-wrap"},F={class:"xl:flex felx-wrap gap-10 xl:w-full px-4 justify-center space-y-4 w-full"},H={class:"card xl:w-2/5 bg-base-100 shadow-xl"},P={class:"w-full flex justify-center"},R={class:"avatar hover:scale-110 transition-all duration-500",for:"my-modal-1"},V={class:"w-52 mask mask-squircle"},C=["src"],G={key:1,src:c},I=s("input",{type:"checkbox",id:"my-modal-1",class:"modal-toggle"},null,-1),M={for:"my-modal-1",class:"modal cursor-pointer"},U={class:"modal-box relative",for:""},W=["src"],$={key:1,src:c},z={class:"card-body items-center text-center"},J={class:"card-title"},Q=s("p",null,"LOGO SEKOLAH",-1),T=s("div",{class:"card-actions"},null,-1),X={class:"card xl:w-2/5 bg-base-100 shadow-xl"},Y={class:"w-full flex justify-center"},Z={class:"avatar hover:scale-110 transition-all duration-500",for:"my-modal-2"},ss={class:"w-52 mask mask-squircle"},as=["src"],ts={key:1,src:i},os=s("input",{type:"checkbox",id:"my-modal-2",class:"modal-toggle"},null,-1),es={for:"my-modal-2",class:"modal cursor-pointer"},ls={class:"modal-box relative",for:""},cs=["src"],is={key:1,src:i},ns={class:"card-body items-center text-center"},ds={class:"card-title"},rs=s("p",null,"KEPALA SEKOLAH",-1),_s=s("div",{class:"card-actions"},null,-1),fs={__name:"SekolahDashboard",setup(hs){d().setsubMenuActive("dashboard"),r();const n=_().params.id,a=h([]);return(async()=>{try{const l=await m.get(`owner/sekolah/${n}`);return a.value=l.data,l.data}catch(l){console.error(l)}})(),(l,ws)=>(t(),o(u,null,[s("div",w,[s("div",v,[s("div",k,[s("div",f,[s("table",y,[s("tbody",null,[s("tr",null,[g,b,s("td",x,e(a.value.nama),1)]),s("tr",null,[A,S,s("td",B,e(a.value.alamat),1)]),s("tr",null,[D,j,s("td",E,e(a.value.kepsek_nama),1)]),s("tr",null,[K,L,s("td",N,e(a.value.provinsi)+" - "+e(a.value.kabupaten)+" - "+e(a.value.kecamatan),1)])])])])])])]),O,a.value.photo?(t(),o("div",q,[s("div",F,[s("div",H,[s("div",P,[s("label",R,[s("div",V,[a.value.photo.logosekolah?(t(),o("img",{key:0,src:a.value.photo.logosekolah},null,8,C)):(t(),o("img",G))])])]),I,s("label",M,[s("label",U,[a.value.photo.logosekolah?(t(),o("img",{key:0,src:a.value.photo.logosekolah},null,8,W)):(t(),o("img",$))])]),s("div",z,[s("h2",J,e(a.value.nama),1),Q,T])]),s("div",X,[s("div",Y,[s("label",Z,[s("div",ss,[a.value.photo.kepalasekolah?(t(),o("img",{key:0,src:a.value.photo.kepalasekolah},null,8,as)):(t(),o("img",ts))])]),os,s("label",es,[s("label",ls,[a.value.photo.kepalasekolah?(t(),o("img",{key:0,src:a.value.photo.kepalasekolah},null,8,cs)):(t(),o("img",is))])])]),s("div",ns,[s("h2",ds,e(a.value.kepsek_nama),1),rs,_s])])])])):p("",!0)],64))}};export{fs as default};
