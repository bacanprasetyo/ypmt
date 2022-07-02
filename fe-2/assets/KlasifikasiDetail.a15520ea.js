import{b as y,d as g,c as u,u as x,a as v,r as l,o as c,f as n,g as s,h as _,w,y as b,B as f,s as m,j as k,t as e,n as B,x as d,A}from"./index.8c2c018c.js";const S={key:0,class:"pt-4 px-10 md:flex justify-between"},j=s("div",null,[s("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},"Detail Klasifikasi Akademis dan Profesi")],-1),C={class:"md:py-0 py-4"},D=d(" Klasifikasi Akademis "),K=d(" Index "),N={class:"pt-4 px-10 md:flex justify-between"},P=s("div",null,[s("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"})],-1),V={class:"md:py-0 py-4 space-x-2 space-y-2"},I=s("button",{class:"btn hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),d(" Kembali ")],-1),L=[I],$={class:"w-full lg:w-full"},G={class:"bg-white shadow rounded-lg px-4 py-2"},R={class:"overflow-x-auto px-4 space-y-10 py-2"},q={class:"space-y-2"},z=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Bidang ",-1),E={class:"space-y-2 border-b-2 py-2"},F={class:"indent-8 text-gray-700"},J={class:"w-full lg:w-full"},M={class:"bg-white shadow rounded-lg px-4 py-2"},Q={class:"overflow-x-auto px-4 space-y-10 py-2"},T={class:"space-y-2"},H=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Akademis ",-1),O={class:"space-y-2 border-b-2 py-2"},U={class:"indent-8 text-gray-700"},W={class:"w-full lg:w-full"},X={class:"bg-white shadow rounded-lg px-4 py-2"},Y={class:"overflow-x-auto px-4 space-y-10 py-2"},Z={class:"space-y-2"},ss=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Profesi ",-1),ts={class:"space-y-2 border-b-2 py-2"},es={class:"indent-8 text-gray-700"},as={class:"w-full lg:w-full"},os={class:"bg-white shadow rounded-lg px-4 py-2"},ds={class:"overflow-x-auto px-4 space-y-10 py-2"},is={class:"space-y-2"},ls=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Nilai Standart ",-1),cs={class:"space-y-2 border-b-2 py-2"},ns={class:"indent-8 text-gray-700"},_s={class:"w-full lg:w-full"},rs={class:"bg-white shadow rounded-lg px-4 py-2"},hs={class:"overflow-x-auto px-4 space-y-10 py-2"},ps={class:"space-y-2"},ys=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," IQ Standart ",-1),gs={class:"space-y-2 border-b-2 py-2"},us={class:"indent-8 text-gray-700"},xs={class:"w-full lg:w-full"},vs={class:"bg-white shadow rounded-lg px-4 py-2"},ws={class:"overflow-x-auto px-4 space-y-10 py-2"},bs={class:"space-y-2"},fs=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Jurusan dan Bidang Studi yang ditekuni ",-1),ms={class:"space-y-2 border-b-2 py-2"},ks={class:"indent-8 text-gray-700"},Bs={class:"w-full lg:w-full"},As={class:"bg-white shadow rounded-lg px-4 py-2"},Ss={class:"overflow-x-auto px-4 space-y-10 py-2"},js={class:"space-y-2"},Cs=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Pekerjaan dan Keterangan ",-1),Ds={class:"space-y-2 border-b-2 py-2"},Ks={class:"indent-8 text-gray-700"},Ns={class:"w-full lg:w-full"},Ps={class:"bg-white shadow rounded-lg px-4 py-2"},Vs={class:"overflow-x-auto px-4 space-y-10 py-2"},Is={class:"space-y-2"},Ls=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Link ",-1),$s={class:"space-y-2 border-b-2 py-2"},Gs={class:"indent-8 text-gray-700"},Ms={name:"KlasifikasiDetail",setup(Rs){const i=y();g(()=>i.getSekolah),i.$subscribe((a,o)=>{}),u().setPagesActive("klasifikasi");const r=x(),h=v().params.id,p=l([]),t=l([]);return(async()=>{try{const a=await A.get(`guest/data/klasifikasi/${h}`);return p.value=a.data,t.value=a.data,a.data}catch(a){console.error(a)}})(),(a,o)=>(c(),n(B,null,[t.value?(c(),n("div",S,[j,s("div",C,[_(f,null,{content:w(()=>[D,_(b),K]),_:1})])])):m("",!0),s("div",N,[P,s("div",V,[s("span",{onClick:o[0]||(o[0]=Fs=>k(r).go(-1))},L)])]),s("div",$,[s("div",G,[s("div",R,[s("div",q,[z,s("div",E,[s("p",F,e(t.value.bidang),1)])])])])]),s("div",J,[s("div",M,[s("div",Q,[s("div",T,[H,s("div",O,[s("p",U,e(t.value.akademis),1)])])])])]),s("div",W,[s("div",X,[s("div",Y,[s("div",Z,[ss,s("div",ts,[s("p",es,e(t.value.profesi),1)])])])])]),s("div",as,[s("div",os,[s("div",ds,[s("div",is,[ls,s("div",cs,[s("p",ns,e(t.value.nilaistandart),1)])])])])]),s("div",_s,[s("div",rs,[s("div",hs,[s("div",ps,[ys,s("div",gs,[s("p",us,e(t.value.iqstandart),1)])])])])]),s("div",xs,[s("div",vs,[s("div",ws,[s("div",bs,[fs,s("div",ms,[s("p",ks,e(t.value.jurusandanbidangstudi),1)])])])])]),s("div",Bs,[s("div",As,[s("div",Ss,[s("div",js,[Cs,s("div",Ds,[s("p",Ks,e(t.value.pekerjaandanketerangan),1)])])])])]),s("div",Ns,[s("div",Ps,[s("div",Vs,[s("div",Is,[Ls,s("div",$s,[s("p",Gs,e(t.value.ket),1)])])])])])],64))}};export{Ms as default};
