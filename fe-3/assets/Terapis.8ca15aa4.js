import{B as N}from"./CardLockedFitur.vue_vue_type_style_index_0_scoped_true_lang.01cf0651.js";import{m as F,l as I}from"./id.724ba1c3.js";import{u as $,d as z,a as E,b as R,c as H,r as i,z as V,j as W,o as u,e as l,f as e,g,w as K,h as Y,t as p,F as f,s as B,n as G,A as D,T as h,i as c}from"./index.2bd312bc.js";import{B as U,a as J}from"./BreadCrumbSpace.2c4184a4.js";const O={class:"pt-4 px-10 md:flex justify-between"},Q=e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"})],-1),X={class:"md:py-0 py-4"},Z=c(" Siswa "),aa=c(" Edit "),ea={class:"pt-4 px-10 md:flex justify-between"},na=e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm px-2"},"Terapis Karakter Positif",-1),_a={class:"md:py-0 py-4 space-x-2 space-y-2"},sa=e("button",{class:"btn hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),c(" Kembali ")],-1),ta={key:0},pa={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},ia={class:"w-full lg:w-full"},ka={class:"bg-white shadow rounded-lg px-4 py-4"},ra={class:"overflow-x-auto"},ua={class:"table table-compact"},la=e("td",{class:"whitespace-nowrap w-1/12"},"No Induk",-1),oa=e("td",{class:"whitespace-nowrap w-1/12"},":",-1),da={class:"whitespace-nowrap w-10/12"},ga=e("td",null,"Nama",-1),ha=e("td",null,":",-1),va=e("td",null,"Umur",-1),fa=e("td",null,":",-1),ca=e("td",null,"Jenis Kelamin",-1),qa=e("td",null,":",-1),ma=e("td",null,"Sekolah",-1),wa=e("td",null,":",-1),xa={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},ba={class:"w-full lg:w-full"},ya={class:"bg-white shadow rounded-lg px-4 py-4"},Sa={class:"overflow-x-auto px-4 space-y-10 py-4"},Fa={class:"space-y-2"},Ka={class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 shadow"},Ba={class:"space-y-2 border-b-2 py-2"},Da={class:"text-lg font-bold text-gray-700 py-2 bg-gray-100 capitalize"},ja=e("h1",{class:"text-md font-bold text-gray-700 bg-gray-50"}," a. Pemahaman dan Pengertian ",-1),Pa={class:"indent-8 text-gray-700"},Aa=e("h1",{class:"text-md font-bold text-gray-700 bg-gray-50"}," b. Tujuan dan Manfaat ",-1),Ma={class:"indent-8 text-gray-700"},Ca=e("h1",{class:"text-md font-bold text-gray-700 bg-gray-50"}," c. Pembiasaan Sikap dan Penerapan ",-1),La={class:"indent-8 text-gray-700"},Ha={__name:"Terapis",setup(Ta){F.updateLocale("id",I);const j="https://be.ypmt-psiprobk.com/",q=$();z(()=>q.getPaket),q.$subscribe((n,_)=>{}),E().setsubMenuActive("hasilpsikologi"),R();const m=H(),P=i([]);i([]);const a=i([]),A=i([]),r=i(),d=i([]),w=i([{nama:""}]),x=i([]),o=i([]);(async()=>{try{const n=await D.get(`yayasan/hasilpsikologi/detail/${m.params.id}`);if(P.value=n.data,A.value=n.data,a.value=n.data.sertifikat,r.value=n.data,n.status=="failed")return h.danger("Warning","Anda tidak memiliki Akses siswa ini!"),n.data;if(n.data.sertifikat==null||n.data.deteksi==null)return h.danger("Warning","Data Api Siswa tidak ditemukan!"),n.data;d.value=[{nama:"Faktor Sikap Dingin",rank:a.value.hspq_a_kr_rank,persen:a.value.hspq_a_kr_persen,ket:a.value.hspq_a_kr_keterangan,positif_diungkap:a.value.hspq_a_kr_aspek_positif_di_ungkap,negatif_diungkap:a.value.hspq_a_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Emosi Labil",rank:a.value.hspq_c_kr_rank,persen:a.value.hspq_c_kr_persen,ket:a.value.hspq_c_kr_keterangan,positif_diungkap:a.value.hspq_c_kr_aspek_positif_di_ungkap,negatif_diungkap:a.value.hspq_c_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Sulit Bergairah",rank:a.value.hspq_d_kr_rank,persen:a.value.hspq_d_kr_persen,ket:a.value.hspq_d_kr_keterangan,positif_diungkap:a.value.hspq_d_kr_aspek_positif_di_ungkap,negatif_diungkap:a.value.hspq_d_kr_aspek_negatif_di_ungkap},{nama:"Faktor Patuh atau Tunduk",rank:a.value.hspq_e_kr_rank,persen:a.value.hspq_e_kr_persen,ket:a.value.hspq_e_kr_keterangan,positif_diungkap:a.value.hspq_e_kr_aspek_positif_di_ungkap,negatif_diungkap:a.value.hspq_d_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sungguh-sungguh",rank:a.value.hspq_f_kr_rank,persen:a.value.hspq_f_kr_persen,ket:a.value.hspq_f_kr_keterangan,positif_diungkap:a.value.hspq_f_kr_aspek_positif_di_ungkap,negatif_diungkap:a.value.hspq_f_kr_aspek_negatif_di_ungkap},{nama:"Faktor Menolak Peraturan",rank:a.value.hspq_g_kr_rank,persen:a.value.hspq_g_kr_persen,ket:a.value.hspq_g_kr_keterangan,positif_diungkap:a.value.hspq_g_kr_aspek_positif_di_ungkap,negatif_diungkap:a.value.hspq_g_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Keras Hati",rank:a.value.hspq_h_kr_rank,persen:a.value.hspq_h_kr_persen,ket:a.value.hspq_h_kr_keterangan,positif_diungkap:a.value.hspq_h_kr_aspek_positif_di_ungkap,negatif_diungkap:a.value.hspq_h_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Pemalu",rank:a.value.hspq_i_kr_rank,persen:a.value.hspq_i_kr_persen,ket:a.value.hspq_i_kr_keterangan,positif_diungkap:a.value.hspq_i_kr_aspek_positif_di_ungkap,negatif_diungkap:a.value.hspq_i_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Bersemangat",rank:a.value.hspq_j_kr_rank,persen:a.value.hspq_j_kr_persen,ket:a.value.hspq_j_kr_keterangan,positif_diungkap:a.value.hspq_j_kr_aspek_positif_di_ungkap,negatif_diungkap:a.value.hspq_j_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Percaya Diri",rank:a.value.hspq_o_kr_rank,persen:a.value.hspq_o_kr_persen,ket:a.value.hspq_o_kr_keterangan,positif_diungkap:a.value.hspq_o_kr_aspek_positif_di_ungkap,negatif_diungkap:a.value.hspq_o_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Kurang Mandiri",rank:a.value.hspq_q2_kr_rank,persen:a.value.hspq_q2_kr_persen,ket:a.value.hspq_q2_kr_keterangan,positif_diungkap:a.value.hspq_q2_kr_aspek_positif_di_ungkap,negatif_diungkap:a.value.hspq_q2_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Kurang Disiplin",rank:a.value.hspq_q3_kr_rank,persen:a.value.hspq_q3_kr_persen,ket:a.value.hspq_q3_kr_keterangan,positif_diungkap:a.value.hspq_q3_kr_aspek_positif_di_ungkap,negatif_diungkap:a.value.hspq_q3_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Rileks atau santai",rank:a.value.hspq_q4_kr_rank,persen:a.value.hspq_q4_kr_persen,ket:a.value.hspq_q4_kr_keterangan,positif_diungkap:a.value.hspq_q4_kr_aspek_positif_di_ungkap,negatif_diungkap:a.value.hspq_q4_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Hangat",rank:a.value.hspq_a_kn_rank,persen:a.value.hspq_a_kn_persen,ket:a.value.hspq_a_kn_keterangan,positif_diungkap:a.value.hspq_a_kn_aspek_positif_di_ungkap,negatif_diungkap:a.value.hspq_a_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Emosi Stabil",rank:a.value.hspq_c_kn_rank,persen:a.value.hspq_c_kn_persen,ket:a.value.hspq_c_kn_keterangan,positif_diungkap:a.value.hspq_c_kn_aspek_positif_di_ungkap,negatif_diungkap:a.value.hspq_c_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Bergairah",rank:a.value.hspq_d_kn_rank,persen:a.value.hspq_d_kn_persen,ket:a.value.hspq_d_kn_keterangan,positif_diungkap:a.value.hspq_d_kn_aspek_positif_di_ungkap,negatif_diungkap:a.value.hspq_d_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Dominasi",rank:a.value.hspq_e_kn_rank,persen:a.value.hspq_e_kn_persen,ket:a.value.hspq_e_kn_keterangan,positif_diungkap:a.value.hspq_e_kn_aspek_positif_di_ungkap,negatif_diungkap:a.value.hspq_e_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Keceriaan",rank:a.value.hspq_f_kn_rank,persen:a.value.hspq_f_kn_persen,ket:a.value.hspq_f_kn_keterangan,positif_diungkap:a.value.hspq_f_kn_aspek_positif_di_ungkap,negatif_diungkap:a.value.hspq_f_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Taat Peraturan",rank:a.value.hspq_g_kn_rank,persen:a.value.hspq_g_kn_persen,ket:a.value.hspq_g_kn_keterangan,positif_diungkap:a.value.hspq_g_kn_aspek_positif_di_ungkap,negatif_diungkap:a.value.hspq_g_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Lembut Hati / Peka",rank:a.value.hspq_h_kn_rank,persen:a.value.hspq_h_kn_persen,ket:a.value.hspq_h_kn_keterangan,positif_diungkap:a.value.hspq_h_kn_aspek_positif_di_ungkap,negatif_diungkap:a.value.hspq_h_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Pemberani",rank:a.value.hspq_i_kn_rank,persen:a.value.hspq_i_kn_persen,ket:a.value.hspq_i_kn_keterangan,positif_diungkap:a.value.hspq_i_kn_aspek_positif_di_ungkap,negatif_diungkap:a.value.hspq_i_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Menarik Diri",rank:a.value.hspq_j_kn_rank,persen:a.value.hspq_j_kn_persen,ket:a.value.hspq_j_kn_keterangan,positif_diungkap:a.value.hspq_j_kn_aspek_positif_di_ungkap,negatif_diungkap:a.value.hspq_j_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Ketakutan",rank:a.value.hspq_o_kn_rank,persen:a.value.hspq_o_kn_persen,ket:a.value.hspq_o_kn_keterangan,positif_diungkap:a.value.hspq_o_kn_aspek_positif_di_ungkap,negatif_diungkap:a.value.hspq_o_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Mandiri",rank:a.value.hspq_q2_kn_rank,persen:a.value.hspq_q2_kn_persen,ket:a.value.hspq_q2_kn_keterangan,positif_diungkap:a.value.hspq_q2_kn_aspek_positif_di_ungkap,negatif_diungkap:a.value.hspq_q2_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Disiplin",rank:a.value.hspq_q3_kn_rank,persen:a.value.hspq_q3_kn_persen,ket:a.value.hspq_q3_kn_keterangan,positif_diungkap:a.value.hspq_q3_kn_aspek_positif_di_ungkap,negatif_diungkap:a.value.hspq_q3_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Tegang",rank:a.value.hspq_q4_kn_rank,persen:a.value.hspq_q4_kn_persen,ket:a.value.hspq_q4_kn_keterangan,positif_diungkap:a.value.hspq_q4_kn_aspek_positif_di_ungkap,negatif_diungkap:a.value.hspq_q4_kn_aspek_negatif_di_ungkap}],d.value.sort(function(_,s){return _.rank-s.rank}),x.value=[{nama:"Kecerdasan Linguistik",persen:a.value.kb_persen,ket:a.value.kbh},{nama:"Kecerdasan Logis - Matematis",persen:a.value.lm_persen,ket:a.value.lmh},{nama:"Kecerdasan Spasial",persen:a.value.ks_persen,ket:a.value.ksh},{nama:"Kecerdasan Musikal",persen:a.value.km_persen,ket:a.value.kmh},{nama:"Kecerdasan Kinetik",persen:a.value.kk_persen,ket:a.value.kkh},{nama:"Kecerdasan Interpersonal",persen:a.value.ki_persen,ket:a.value.kih},{nama:"Kecerdasan Intrapersonal",persen:a.value.ka_persen,ket:a.value.kah},{nama:"Kecerdasan Natural",persen:a.value.kn_persen,ket:a.value.knh}],w.value=x.value.slice(0),w.value.sort(function(_,s){return s.persen-_.persen});for(let _=0;_<5;_++){let t=d.value[_].positif_diungkap.split(",");for(let k=0;k<t.length;k++){let T=t[k].replace(/[^a-z0-9\s\-]/gi,"").replace("Sikap","").trim().toLowerCase();t[k]=T}let v={label:d.value[_].positif_diungkap,dataSend:t,data:[]};o.value.push(v),b.value=v}return n.data}catch(n){h.danger("Warning","Data Siswa tidak ditemukan!"),console.error(n)}})();const b=i(""),M=m.params.id,C=async(n,_)=>{let s={kalimat:n};try{const t=await D.post("admin/fungsi/terapis/perkalimat",s);return o.value[_].data=t.data,t.data}catch(t){console.error(t)}};V(b,async(n,_)=>{for(let s=0;s<o.value.length;s++)C(o.value[s].dataSend,s)});const y=n=>window.btoa(n),L=(n=null,_=F().format("YYYY-MM-Do"))=>{n===null?h.danger("Warning","Data tidak valid!"):window.open(`${j}api/guest/cetak/terapis/${y(n)}?token=${y(_)}`)};return(n,_)=>{const s=W("router-link");return u(),l(f,null,[e("div",O,[Q,e("div",X,[g(U,null,{content:K(()=>[Z,g(J),aa]),_:1})])]),e("div",ea,[e("div",null,[na,g(N,{onClick:_[0]||(_[0]=t=>L(Y(M)))})]),e("div",_a,[g(s,{to:{name:"AdminHasilPsikologi"}},{default:K(()=>[sa]),_:1})])]),e("div",null,[r.value?(u(),l("div",ta,[e("div",pa,[e("div",ia,[e("div",ka,[e("div",ra,[e("table",ua,[e("tbody",null,[e("tr",null,[la,oa,e("td",da,p(r.value.nomeridentitas),1)]),e("tr",null,[ga,ha,e("td",null,p(r.value.nama),1)]),e("tr",null,[va,fa,e("td",null,p(r.value.deteksi.umur),1)]),e("tr",null,[ca,qa,e("td",null,p(r.value.jk),1)]),e("tr",null,[ma,wa,e("td",null,p(r.value.sekolah_nama),1)])])])])])])]),(u(!0),l(f,null,B(o.value,(t,v)=>(u(),l("div",xa,[e("div",ba,[e("div",ya,[e("div",Sa,[e("div",Fa,[e("h1",Ka,p(t.label),1),(u(!0),l(f,null,B(t.data,(k,S)=>(u(),l("div",Ba,[e("h1",Da,p(S+1)+". "+p(k.nama),1),ja,e("p",Pa,p(k.pemahaman),1),Aa,e("p",Ma,p(k.tujuandanmanfaat),1),Ca,e("p",La,p(k.pembiasaansikap),1)]))),256))])])])])]))),256))])):G("",!0)])],64)}}};export{Ha as default};
