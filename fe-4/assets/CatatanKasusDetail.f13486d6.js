import{v as u,c as y,x as g,y as v,z as x,e as l,B as c,C as i,D as s,G as e,E as _,F as b,H as w,u as f,M as m,P as k,N as d}from"./index.92074ed7.js";import{a as B,B as C}from"./BreadCrumbSpace.0ec30673.js";const K={key:0,class:"pt-4 px-10 md:flex justify-between"},A={class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},P={class:"md:py-0 py-4"},S=d(" Kasus "),D=d(" Index "),N={class:"pt-4 px-10 md:flex justify-between"},G=s("div",null,[s("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"})],-1),V={class:"md:py-0 py-4 space-x-2 space-y-2"},j=s("button",{class:"btn hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),d(" Kembali ")],-1),$=[j],z={class:"w-full lg:w-full"},E={class:"bg-white shadow rounded-lg px-4 py-2"},F={class:"overflow-x-auto px-4 space-y-10 py-2"},I={class:"space-y-2"},L=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Pengambilan data ",-1),M={class:"space-y-2 border-b-2 py-2"},R={class:"indent-8 text-gray-700"},T={class:"w-full lg:w-full"},H={class:"bg-white shadow rounded-lg px-4 py-2"},q={class:"overflow-x-auto px-4 space-y-10 py-2"},J={class:"space-y-2"},O=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Sumber kasus ",-1),Q={class:"space-y-2 border-b-2 py-2"},U={class:"indent-8 text-gray-700"},W={class:"w-full lg:w-full"},X={class:"bg-white shadow rounded-lg px-4 py-2"},Y={class:"overflow-x-auto px-4 space-y-10 py-2"},Z={class:"space-y-2"},ss=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Golongan kasus ",-1),ts={class:"space-y-2 border-b-2 py-2"},es={class:"indent-8 text-gray-700"},as={class:"w-full lg:w-full"},os={class:"bg-white shadow rounded-lg px-4 py-2"},ds={class:"overflow-x-auto px-4 space-y-10 py-2"},ns={class:"space-y-2"},ls=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Penyebab timbul kasus ",-1),cs={class:"space-y-2 border-b-2 py-2"},is={class:"indent-8 text-gray-700"},_s={class:"w-full lg:w-full"},rs={class:"bg-white shadow rounded-lg px-4 py-2"},hs={class:"overflow-x-auto px-4 space-y-10 py-2"},ps={class:"space-y-2"},us=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Teknik Konseling ",-1),ys={class:"space-y-2 border-b-2 py-2"},gs={class:"indent-8 text-gray-700"},vs={class:"w-full lg:w-full"},xs={class:"bg-white shadow rounded-lg px-4 py-2"},bs={class:"overflow-x-auto px-4 space-y-10 py-2"},ws={class:"space-y-2"},fs=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Keberhasilan Penanganan kasus ",-1),ms={class:"space-y-2 border-b-2 py-2"},ks={class:"indent-8 text-gray-700"},Bs={class:"w-full lg:w-full"},Cs={class:"bg-white shadow rounded-lg px-4 py-2"},Ks={class:"overflow-x-auto px-4 space-y-10 py-2"},As={class:"space-y-2"},Ps=s("h1",{class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"}," Keterangan ",-1),Ss={class:"space-y-2 border-b-2 py-2"},Ds={class:"indent-8 text-gray-700"},Fs={__name:"CatatanKasusDetail",setup(Ns){const n=u();y(()=>n.getSekolah),n.$subscribe((a,o)=>{}),g().setPagesActive("kasus");const r=v(),h=x().params.id,p=l([]),t=l([]);return(async()=>{try{const a=await k.get(`siswa/data/catatan/kasus/${h}`);return p.value=a.data,t.value=a.data,a.data}catch(a){console.error(a)}})(),(a,o)=>(c(),i(m,null,[t.value?(c(),i("div",K,[s("div",null,[s("span",A,"Kasus : "+e(t.value.kasus),1)]),s("div",P,[_(B,null,{content:b(()=>[S,_(C),D]),_:1})])])):w("",!0),s("div",N,[G,s("div",V,[s("span",{onClick:o[0]||(o[0]=$s=>f(r).go(-1))},$)])]),s("div",z,[s("div",E,[s("div",F,[s("div",I,[L,s("div",M,[s("p",R,e(t.value.pengambilandata),1)])])])])]),s("div",T,[s("div",H,[s("div",q,[s("div",J,[O,s("div",Q,[s("p",U,e(t.value.sumberkasus),1)])])])])]),s("div",W,[s("div",X,[s("div",Y,[s("div",Z,[ss,s("div",ts,[s("p",es,e(t.value.golkasus),1)])])])])]),s("div",as,[s("div",os,[s("div",ds,[s("div",ns,[ls,s("div",cs,[s("p",is,e(t.value.penyebabtimbulkasus),1)])])])])]),s("div",_s,[s("div",rs,[s("div",hs,[s("div",ps,[us,s("div",ys,[s("p",gs,e(t.value.teknikkonseling),1)])])])])]),s("div",vs,[s("div",xs,[s("div",bs,[s("div",ws,[fs,s("div",ms,[s("p",ks,e(t.value.keberhasilanpenanganankasus),1)])])])])]),s("div",Bs,[s("div",Cs,[s("div",Ks,[s("div",As,[Ps,s("div",Ss,[s("p",Ds,e(t.value.Keterangan),1)])])])])])],64))}};export{Fs as default};
