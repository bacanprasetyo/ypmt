var F=Object.defineProperty,P=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var I=(l,n,t)=>n in l?F(l,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[n]=t,B=(l,n)=>{for(var t in n||(n={}))N.call(n,t)&&I(l,t,n[t]);if($)for(var t of $(n))L.call(n,t)&&I(l,t,n[t]);return l},j=(l,n)=>P(l,E(n));import{r as p,o as _,e as o,f as a,t as s,F as v,s as f,n as g,i,u as D,d as M,a as Q,b as z,c as H,j as U,g as x,w as A,p as C,h as T,A as O,T as K}from"./index.2bd312bc.js";import{B as V,a as G}from"./BreadCrumbSpace.2c4184a4.js";const X=(l="")=>{let n=l?l.split("/"):null;return n?n[0]:null},J=(l=null)=>{let n=l;return l=="SBS"?n="Sangat Baik Sekali":l=="BS"?n="Baik Sekali":l=="B"?n="Baik":l=="CB"?n="Cukup Baik":l=="C"?n="Cukup":l=="HC"?n="Hampir Cukup":l=="K"?n="Kurang":l=="KS"?n="Kurang Sekali":l=="SKS"?n="Sangat Kurang Sekali":l=="STS"?n="Sangat Tinggi Sekali":l=="TS"?n="Tinggi Sekali":l=="T"?n="Tinggi":l=="CT"?n="Cukup Tinggi":l=="C"?n="Cukup":l=="CR"?n="Cukup Rendah":l=="AR"?n="Agak Rendah":l=="R"?n="Rendah":l=="RS"?n="Rendah Sekali":l=="SRS"&&(n="Sangat Rendah Sekali"),n},Y=(l=null)=>{let n="Moron";return l>139?n="Genius":140>l&&l>=130?n="Berbakat":130>l&&l>=120?n="Superior":120>l&&l>=110?n="Di Atas Rata - Rata":110>l&&l>=105?n="Rata - Rata Atas":105>l&&l>=100?n="Rata - Rata":100>l&&l>=90?n="Rata - Rata Bawah":90>l&&l>=80?n="Lambat Belajar":80>l&&l>=60?n="Borderline":n="Moron",n},W=(l=null)=>{let n="Kurang Lancar";return l>119?n="Sangat Lancar Sekali":120>l&&l>=110?n="Lancar Sekali":110>l&&l>=105?n="Lancar":105>l&&l>=90?n="Cukup Lancar":90>l&&l>=80?n="Kurang Lancar":n="Sangat Kurang Lancar",n},Z=(l=null)=>{let n="Lebih Tinggi";return l>119||120>l&&l>=110||110>l&&l>=105?n="Seimbang dan Lebih Tinggi":(105>l&&l>=90||90>l&&l>=80,n="Lebih Tinggi"),n},k={getKelas:X,kepanjangan:J,iqKet:Y,getKesimpulanIq:W,getKesimpulanEqSq:Z},aa={key:0},ea={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},sa={class:"w-full lg:w-full"},ta={class:"bg-base-100 shadow rounded-lg px-4 py-4"},na={class:"overflow-x-auto"},la={class:"table table-compact"},ia=a("td",{class:"whitespace-nowrap w-1/12"},"No Induk",-1),_a=a("td",{class:"whitespace-nowrap w-1/12"},":",-1),oa={class:"whitespace-nowrap w-10/12"},ua=a("td",null,"Nama",-1),pa=a("td",null,":",-1),ra=a("td",null,"Umur",-1),da=a("td",null,":",-1),ka=a("td",null,"Jenis Kelamin",-1),ca=a("td",null,":",-1),ha=a("td",null,"Sekolah",-1),ga=a("td",null,":",-1),wa=a("div",{class:"pt-4 px-10 md:flex justify-between"},[a("div",null,[a("span",{class:"text-2xl sm:text-2xl leading-none font-bold text-gray-700 shadow-sm"},"ASPEK PSIKOLOGIS YANG DIUNGKAP")]),a("div",{class:"md:py-0 py-4 space-x-2 space-y-2"})],-1),va={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},fa={class:"w-full lg:w-full"},ba={class:"bg-base-100 shadow rounded-lg px-4 py-4"},qa={class:"overflow-x-auto"},ma={class:"table table-compact w-full"},Sa=a("td",{class:"whitespace-nowrap w-1/100"},"I.",-1),ya=a("td",{class:"whitespace-nowrap w-1/100"}," IQ (Intelegence Quotient) / CFIT ",-1),xa=a("td",{class:"whitespace-nowrap w-1/100"},":",-1),Ka={class:"whitespace-nowrap w-1/100"},$a=a("td",{class:"whitespace-nowrap w-1/100"},"II.",-1),Ia=a("td",{class:"whitespace-nowrap w-1/100"}," EQ (Emotional Quotient) ",-1),Ba=a("td",{class:"whitespace-nowrap w-1/100"},":",-1),ja={class:"whitespace-nowrap w-1/100"},Aa=a("td",{class:"whitespace-nowrap w-1/100"},"III.",-1),Ca=a("td",{class:"whitespace-nowrap w-1/100"}," Sc.Q (Social Quotient) ",-1),Ta=a("td",{class:"whitespace-nowrap w-1/100"},":",-1),Ra={class:"whitespace-nowrap w-1/100"},Fa={class:"md:py-2 px-4 lg:flex flex-wrap"},Pa={class:"w-full lg:w-3/6"},Ea={class:"bg-base-100 shadow rounded-lg px-4 py-4"},Na={class:"overflow-x-auto"},La={class:"table table-compact table-zebra w-full shadow shadow-sm"},Da=a("tr",null,[a("th",{class:"whitespace-nowrap w-1/100"},"IV."),a("th",{class:"whitespace-nowrap w-1/12"},"ASPEK KEPRIBADIAN"),a("th",{class:"whitespace-nowrap w-1/100"},"%"),a("th",{class:"whitespace-nowrap w-1/100"},"Keterangan"),a("th",{class:"whitespace-nowrap w-1/100"},"Rank")],-1),Ma={class:"whitespace-nowrap w-1/12"},Qa={class:"whitespace-pre-wrap"},za={class:"w-full lg:w-3/6"},Ha={class:"bg-base-100 shadow rounded-lg px-4 py-4"},Ua={class:"overflow-x-auto"},Oa={class:"table table-compact table-zebra w-full"},Va=a("tr",null,[a("th",{class:"whitespace-nowrap w-1/100"}),a("th",{class:"whitespace-nowrap w-5/12"}," ANALISA KEPRIBADIAN TERKUAT ")],-1),Ga={class:"bg-base-100 shadow rounded-lg px-4 py-4"},Xa={class:"overflow-x-auto"},Ja={class:"table table-compact table-zebra w-full"},Ya=a("tr",null,[a("th",{class:"whitespace-nowrap w-1/100"}),a("th",{class:"whitespace-nowrap w-5/12"}," Faktor Kepribadian Subyek Terkuat Positif (+) ")],-1),Wa={class:"whitespace-pre-wrap"},Za={class:"bg-base-100 shadow rounded-lg px-4 py-4"},ae={class:"overflow-x-auto"},ee={class:"table table-compact table-zebra w-full"},se=a("tr",null,[a("th",{class:"whitespace-nowrap w-1/100"}),a("th",{class:"whitespace-nowrap w-5/12"}," Faktor Kepribadian Subyek Terkuat Negatif (-) ")],-1),te={class:"whitespace-pre-wrap"},ne={class:"bg-base-100 shadow rounded-lg px-4 py-4"},le={class:"overflow-x-auto"},ie={class:"table table-compact table-zebra w-full"},_e=a("tr",null,[a("th",{class:"whitespace-nowrap w-1/100"},"IX."),a("th",{class:"whitespace-nowrap w-5/12"}," TIPE BAKAT YANG DISUKAI ")],-1),oe=a("td",null,"1.",-1),ue=a("td",null,"2.",-1),pe=a("td",null,"3.",-1),re={class:"bg-base-100 shadow rounded-lg px-4 py-4"},de={class:"overflow-x-auto"},ke={class:"table table-compact table-zebra w-full"},ce=a("tr",null,[a("th",{class:"whitespace-nowrap w-1/100"},"X."),a("th",{class:"whitespace-nowrap w-5/12"}," MINAT PEKERJAAN TERKUAT ")],-1),he=a("td",null,"1.",-1),ge=a("td",null,"2.",-1),we=a("td",null,"3.",-1),ve=a("div",{class:"pt-4 px-10 md:flex justify-between"},[a("div",null,[a("span",{class:"text-2xl sm:text-xl leading-none font-bold text-gray-600 shadow-sm"},"V. KESIMPULAN DAN SARAN")]),a("div",{class:"md:py-0 py-4 space-x-2 space-y-2"})],-1),fe={class:"pt-4 px-10 md:flex justify-between"},be={class:"text-lg sm:text-lg leading-1 font-md text-gray-600 shadow-sm space-y-2"},qe={class:"indent-8"},me=i(" Potensi kecerdasan subyek yang dapat digunakan saat ini "),Se=i(",(IQ="),ye=i(", CFIT = "),xe=i(" artinya dengan tingkat kemampuan menggunakan kecerdasan majemuk tergolong "),Ke=i(". "),$e={key:0,class:"indent-8"},Ie=i(" Dalam belajar subyek disarankan menggunakan "),Be=i(", sedangkan yang perlu dilatih dan dibiasakan yaitu "),je=i(". "),Ae={key:1,class:"indent-8"},Ce=i(" Kecerdasan Emosi nya "),Te=i(". Kecerdasan Sosialnya "),Re=i(". Karakter kepribadian subyek yang terkuat dan mempengaruhi aktivitas sehari-hari yaitu "),Fe=i(" terdiri dari aspek positif dan perlu ditingkatkan, dikembangkan, dan dipertahankan, sedangkan aspek negatif perlu dirubah dan dikendalikan supaya tidak menghambat prestasi subyek. "),Pe={key:2},Ee={class:"indent-8"},Ne=i(" Dalam kelanjutan studi "),Le=i(" tapi perlu ditunjang oleh EQ dan SQ "),De=i(" dari potensi kecerdasan yang dimiliki subyek dan menunjukkan adanya upaya keseimbangan antara potensi kecerdasan koqnitif - usaha / semangat didukung oleh emosi positif - kematangan kemampuan sosialnya. "),Me={key:0,class:"indent-8"},Qe=i(" Kelanjutan studi disarankan masuk Sekolah "),ze=i(" dengan Jurusan "),He=i(", Sekolah "),Ue=i(" dengan Jurusan "),Oe=i(". "),Ve={key:1,class:"indent-8"},Ge=i(" Kelanjutan studi disarankan masuk Fakultas "),Xe=i(" dengan Prodi "),Je=i(", Fakultas "),Ye=i(" dengan Prodi "),We=a("div",{class:"md:py-0 py-4 space-x-2 space-y-2"},null,-1),Ze={__name:"CardSertifikat1",props:{siswa:Object,default(){return null},aspekKepribadianRank:Object,default(){return null},temp:Object,default(){return null},paket:Object,default(){return null}},setup(l){const n=l,t=p(n.siswa),r=p(n.aspekKepribadianRank),d=p(n.temp),S=p(n.paket);return t.value.iq_ket=k.iqKet(n.siswa.sertifikat.iq),t.value.eq_persen_keterangan=k.kepanjangan(n.siswa.sertifikat.eq_persen_keterangan),t.value.scq_persen_keterangan=k.kepanjangan(n.siswa.sertifikat.scq_persen_keterangan),t.value.iqh=k.kepanjangan(n.siswa.sertifikat.iqh),t.value.eq_persen_keterangan=k.kepanjangan(n.siswa.sertifikat.eq_persen_keterangan),t.value.scq_persen_keterangan=k.kepanjangan(n.siswa.sertifikat.scq_persen_keterangan),t.value.iq_kesimpulan=k.getKesimpulanIq(n.siswa.sertifikat.iq),t.value.eqsq_kesimpulan=k.getKesimpulanEqSq(n.siswa.sertifikat.iq),p([{label:"Sangat Kurang Sekali",code:"SKS"},{label:"Kurang Sekali",code:"KS"},{label:"Kurang",code:"K"},{label:"Hampir Cukup",code:"HC"},{label:"Cukup",code:"C",altCode:"CB"},{label:"Kurang Baik",code:"KB"},{label:"Baik",code:"B"},{label:"Sangat Baik",code:"SB"},{label:"Sangat Baik Sekali",code:"SBS"}]),(e,b)=>t.value?(_(),o("div",aa,[a("div",ea,[a("div",sa,[a("div",ta,[a("div",na,[a("table",la,[a("tbody",null,[a("tr",null,[ia,_a,a("td",oa,s(t.value.nomeridentitas),1)]),a("tr",null,[ua,pa,a("td",null,s(t.value.nama),1)]),a("tr",null,[ra,da,a("td",null,s(t.value.deteksi.umur),1)]),a("tr",null,[ka,ca,a("td",null,s(t.value.jk),1)]),a("tr",null,[ha,ga,a("td",null,s(t.value.sekolah_nama),1)])])])])])])]),wa,a("div",va,[a("div",fa,[a("div",ba,[a("div",qa,[a("table",ma,[a("tbody",null,[a("tr",null,[Sa,ya,xa,a("td",Ka,s(t.value.sertifikat.iq),1),a("td",null,"/ "+s(t.value.iq_ket),1)]),a("tr",null,[$a,Ia,Ba,a("td",ja,s(t.value.sertifikat.eq_persen),1),a("td",null,"/ "+s(t.value.eq_persen_keterangan),1)]),a("tr",null,[Aa,Ca,Ta,a("td",Ra,s(t.value.sertifikat.scq_persen),1),a("td",null,"/ "+s(t.value.scq_persen_keterangan),1)])])])])])])]),a("div",Fa,[a("div",Pa,[a("div",Ea,[a("div",Na,[a("table",La,[a("tbody",null,[Da,(_(!0),o(v,null,f(r.value,(c,u)=>(_(),o("tr",null,[a("td",null,s(u+1),1),a("td",Ma,s(c.nama),1),a("td",null,s(c.persen),1),a("td",Qa,s(c.keterangan),1),a("td",null,s(c.rank),1)]))),256))])])])])]),a("div",za,[a("div",Ha,[a("div",Ua,[a("table",Oa,[a("tbody",null,[Va,(_(!0),o(v,null,f(r.value.slice(0,5),(c,u)=>(_(),o("tr",null,[a("td",null,s(u+1)+".",1),a("td",null,s(c.nama),1)]))),256))])])])]),a("div",Ga,[a("div",Xa,[a("table",Ja,[a("tbody",null,[Ya,(_(!0),o(v,null,f(r.value.slice(0,5),(c,u)=>(_(),o("tr",null,[a("td",null,s(u+1)+".",1),a("td",Wa,s(c.positif_diungkap),1)]))),256))])])])]),a("div",Za,[a("div",ae,[a("table",ee,[a("tbody",null,[se,(_(!0),o(v,null,f(r.value.slice(0,5),(c,u)=>(_(),o("tr",null,[a("td",null,s(u+1)+".",1),a("td",te,s(c.negatif_diungkap),1)]))),256))])])])]),a("div",ne,[a("div",le,[a("table",ie,[a("tbody",null,[_e,a("tr",null,[oe,a("td",null,s(t.value.sertifikat.tipe_bakat_1),1)]),a("tr",null,[ue,a("td",null,s(t.value.sertifikat.tipe_bakat_2),1)]),a("tr",null,[pe,a("td",null,s(t.value.sertifikat.tipe_bakat_3),1)])])])])]),a("div",re,[a("div",de,[a("table",ke,[a("tbody",null,[ce,a("tr",null,[he,a("td",null,s(t.value.sertifikat.minat_pekerjaan_1),1)]),a("tr",null,[ge,a("td",null,s(t.value.sertifikat.minat_pekerjaan_2),1)]),a("tr",null,[we,a("td",null,s(t.value.sertifikat.minat_pekerjaan_3),1)])])])])])])]),ve,a("div",fe,[a("div",null,[a("div",be,[a("p",qe,[me,a("b",null,s(t.value.iq),1),Se,a("b",null,s(t.value.iq),1),ye,a("b",null,s(t.value.sertifikat.iq_persen)+"%)",1),xe,a("b",null,s(t.value.iqh),1),Ke]),d.value.length>7?(_(),o("p",$e,[Ie,a("b",null,s(d.value[0].nama)+","+s(d.value[1].nama)+", "+s(d.value[2].nama),1),Be,a("b",null,s(d.value[6].nama)+" dan "+s(d.value[7].nama),1),je])):g("",!0),d.value.length>7?(_(),o("p",Ae,[Ce,a("b",null,s(t.value.eq_persen_keterangan)+",("+s(t.value.sertifikat.eq_persen)+"%)",1),Te,a("b",null,s(t.value.scq_persen_keterangan)+" (ScQ= "+s(t.value.sertifikat.scq_persen)+"%)",1),Re,a("b",null,s(r.value[0].nama)+", "+s(r.value[1].nama)+", "+s(r.value[2].nama)+", "+s(r.value[3].nama)+", "+s(r.value[4].nama),1),Fe])):g("",!0),S.value.ist=="Aktif"?(_(),o("div",Pe,[a("p",Ee,[Ne,a("b",null,s(t.value.iq_kesimpulan),1),Le,a("b",null,s(t.value.eqsq_kesimpulan),1),De]),e.kelas=="IX"||e.kelas=="ix"||e.kelas=="9"?(_(),o("p",Me,[Qe,a("b",null,s(t.value.sertifikat.saran_fakultas_1),1),ze,a("b",null,s(t.value.sertifikat.saran_fakultas_1_prodi),1),He,a("b",null,s(t.value.sertifikat.saran_fakultas_2),1),Ue,a("b",null,s(t.value.sertifikat.saran_fakultas_2_prodi),1),Oe])):e.kelas=="XI"||e.kelas=="xi"||e.kelas=="11"||e.kelas=="12"||e.kelas=="XII"||e.kelas=="xii"?(_(),o("p",Ve,[Ge,a("b",null,s(t.value.sertifikat.saran_fakultas_1),1),Xe,a("b",null,s(t.value.sertifikat.saran_fakultas_1_prodi),1),Je,a("b",null,s(t.value.sertifikat.saran_fakultas_2),1),Ye,a("b",null,s(t.value.sertifikat.saran_fakultas_2_prodi),1)])):g("",!0)])):g("",!0)])]),We])])):g("",!0)}},as={key:0},es={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},ss={class:"w-full lg:w-full"},ts={class:"bg-base-100 shadow rounded-lg px-4 py-4"},ns={class:"overflow-x-auto"},ls={class:"table table-compact"},is=a("td",{class:"whitespace-nowrap w-1/12"},"No Induk",-1),_s=a("td",{class:"whitespace-nowrap w-1/12"},":",-1),os={class:"whitespace-nowrap w-10/12"},us=a("td",null,"Nama",-1),ps=a("td",null,":",-1),rs=a("td",null,"Umur",-1),ds=a("td",null,":",-1),ks=a("td",null,"Jenis Kelamin",-1),cs=a("td",null,":",-1),hs=a("td",null,"Sekolah",-1),gs=a("td",null,":",-1),ws=a("div",{class:"pt-4 px-10 md:flex justify-between"},[a("div",null,[a("span",{class:"text-2xl sm:text-2xl leading-none font-bold text-gray-700 shadow-sm"},"ASPEK PSIKOLOGIS YANG DIUNGKAP")]),a("div",{class:"md:py-0 py-4 space-x-2 space-y-2"})],-1),vs={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},fs={class:"w-full lg:w-full"},bs={class:"bg-base-100 shadow rounded-lg px-4 py-4"},qs={class:"overflow-x-auto"},ms={class:"table table-compact w-full"},Ss=a("td",{class:"whitespace-nowrap w-1/100"},"I.",-1),ys=a("td",{class:"whitespace-nowrap w-1/100"}," IQ (Intelegence Quotient) / CFIT ",-1),xs=a("td",{class:"whitespace-nowrap w-1/100"},":",-1),Ks={class:"whitespace-nowrap w-1/100"},$s=a("td",{class:"whitespace-nowrap w-1/100"},"II.",-1),Is=a("td",{class:"whitespace-nowrap w-1/100"}," EQ (Emotional Quotient) ",-1),Bs=a("td",{class:"whitespace-nowrap w-1/100"},":",-1),js={class:"whitespace-nowrap w-1/100"},As=a("td",{class:"whitespace-nowrap w-1/100"},"III.",-1),Cs=a("td",{class:"whitespace-nowrap w-1/100"}," Sc.Q (Social Quotient) ",-1),Ts=a("td",{class:"whitespace-nowrap w-1/100"},":",-1),Rs={class:"whitespace-nowrap w-1/100"},Fs={class:"pt-4 px-10 md:flex justify-between"},Ps={class:"text-xl sm:text-xl leading-none font-bold text-gray-700 shadow-sm"},Es=a("div",{class:"md:py-0 py-4 space-x-2 space-y-2"},null,-1),Ns={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},Ls={class:"w-full lg:w-full"},Ds={class:"bg-base-100 shadow rounded-lg px-4 py-4"},Ms={class:"overflow-x-auto"},Qs={class:"table table-compact w-full"},zs=a("tr",null,[a("td",{class:"whitespace-nowrap w-1/100"},"IV."),a("td",{class:"whitespace-nowrap w-1/100"}," IQ (KM) 8 Kecerdasan "),a("td",{class:"whitespace-pre-wrap w-1/100"},"Rank Nilai"),a("td",{class:"whitespace-pre-wrap w-1/100"}," Sangat Kurang Sekali "),a("td",{class:"whitespace-pre-wrap w-1/100"},"Kurang Sekali"),a("td",{class:"whitespace-pre-wrap w-1/100"},"Kurang"),a("td",{class:"whitespace-pre-wrap w-1/100"},"Hampir Cukup"),a("td",{class:"whitespace-pre-wrap w-1/100"},"Cukup"),a("td",{class:"whitespace-pre-wrap w-1/100"},"Kurang Baik"),a("td",{class:"whitespace-pre-wrap w-1/100"},"Baik"),a("td",{class:"whitespace-pre-wrap w-1/100"},"Baik Sekali"),a("td",{class:"whitespace-pre-wrap w-1/100"}," Sangat Baik Sekali ")],-1),Hs=a("td",{class:"whitespace-nowrap w-1/100"},null,-1),Us={class:"whitespace-nowrap w-1/100"},Os={class:"whitespace-nowrap w-1/100"},Vs={class:"whitespace-nowrap w-1/100"},Gs={key:0,class:"flex justify-center"},Xs=a("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[a("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})],-1),Js=[Xs],Ys=a("td",{class:"whitespace-nowrap w-1/100"},"V.",-1),Ws=a("td",{class:"whitespace-nowrap w-1/100"},"Pengetahuan Umum",-1),Zs=a("td",{class:"whitespace-nowrap w-1/100"},null,-1),at={class:"whitespace-nowrap w-1/100"},et={key:0,class:"flex justify-center"},st=a("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[a("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})],-1),tt=[st],nt=a("td",{class:"whitespace-nowrap w-1/100"},"VI.",-1),lt=a("td",{class:"whitespace-nowrap w-1/100"},"Kreativitas",-1),it=a("td",{class:"whitespace-nowrap w-1/100"},null,-1),_t={class:"whitespace-nowrap w-1/100"},ot={key:0,class:"flex justify-center"},ut=a("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[a("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})],-1),pt=[ut],rt=a("td",{class:"whitespace-nowrap w-1/100"},"VII.",-1),dt=a("td",{class:"whitespace-nowrap w-1/100"},"Kemampuan Mengingat",-1),kt=a("td",{class:"whitespace-nowrap w-1/100"},null,-1),ct={class:"whitespace-nowrap w-1/100"},ht={key:0,class:"flex justify-center"},gt=a("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[a("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})],-1),wt=[gt],vt={class:"md:py-2 px-4 lg:flex flex-wrap"},ft={class:"w-full lg:w-3/6"},bt={class:"bg-base-100 shadow rounded-lg px-4 py-4"},qt={class:"overflow-x-auto"},mt={class:"table table-compact table-zebra w-full shadow shadow-sm"},St=a("tr",null,[a("th",{class:"whitespace-nowrap w-1/100"},"VIII."),a("th",{class:"whitespace-nowrap w-1/12"},"ASPEK KEPRIBADIAN"),a("th",{class:"whitespace-nowrap w-1/100"},"%"),a("th",{class:"whitespace-nowrap w-1/100"},"Keterangan"),a("th",{class:"whitespace-nowrap w-1/100"},"Rank")],-1),yt={class:"whitespace-nowrap w-1/12"},xt={class:"whitespace-pre-wrap"},Kt={class:"w-full lg:w-3/6"},$t={class:"bg-base-100 shadow rounded-lg px-4 py-4"},It={class:"overflow-x-auto"},Bt={class:"table table-compact table-zebra w-full"},jt=a("tr",null,[a("th",{class:"whitespace-nowrap w-1/100"}),a("th",{class:"whitespace-nowrap w-5/12"}," ANALISA KEPRIBADIAN TERKUAT ")],-1),At={class:"bg-base-100 shadow rounded-lg px-4 py-4"},Ct={class:"overflow-x-auto"},Tt={class:"table table-compact table-zebra w-full"},Rt=a("tr",null,[a("th",{class:"whitespace-nowrap w-1/100"}),a("th",{class:"whitespace-nowrap w-5/12"}," Faktor Kepribadian Subyek Terkuat Positif (+) ")],-1),Ft={class:"whitespace-pre-wrap"},Pt={class:"bg-base-100 shadow rounded-lg px-4 py-4"},Et={class:"overflow-x-auto"},Nt={class:"table table-compact table-zebra w-full"},Lt=a("tr",null,[a("th",{class:"whitespace-nowrap w-1/100"}),a("th",{class:"whitespace-nowrap w-5/12"}," Faktor Kepribadian Subyek Terkuat Negatif (-) ")],-1),Dt={class:"whitespace-pre-wrap"},Mt={class:"bg-base-100 shadow rounded-lg px-4 py-4"},Qt={class:"overflow-x-auto"},zt={class:"table table-compact table-zebra w-full"},Ht=a("tr",null,[a("th",{class:"whitespace-nowrap w-1/100"},"IX."),a("th",{class:"whitespace-nowrap w-5/12"}," TIPE BAKAT YANG DISUKAI ")],-1),Ut=a("td",null,"1.",-1),Ot=a("td",null,"2.",-1),Vt=a("td",null,"3.",-1),Gt={class:"bg-base-100 shadow rounded-lg px-4 py-4"},Xt={class:"overflow-x-auto"},Jt={class:"table table-compact table-zebra w-full"},Yt=a("tr",null,[a("th",{class:"whitespace-nowrap w-1/100"},"X."),a("th",{class:"whitespace-nowrap w-5/12"}," MINAT PEKERJAAN TERKUAT ")],-1),Wt=a("td",null,"1.",-1),Zt=a("td",null,"2.",-1),an=a("td",null,"3.",-1),en=a("div",{class:"pt-4 px-10 md:flex justify-between"},[a("div",null,[a("span",{class:"text-2xl sm:text-xl leading-none font-bold text-gray-600 shadow-sm"},"XI. KESIMPULAN DAN SARAN")]),a("div",{class:"md:py-0 py-4 space-x-2 space-y-2"})],-1),sn={class:"pt-4 px-10 md:flex justify-between"},tn={class:"text-lg sm:text-lg leading-1 font-md text-gray-600 shadow-sm space-y-2"},nn={class:"indent-8"},ln=i(" Potensi kecerdasan subyek yang dapat digunakan saat ini "),_n=i(",(IQ="),on=i(", CFIT = "),un=i(" artinya dengan tingkat kemampuan menggunakan kecerdasan majemuk tergolong "),pn=i(". "),rn={key:0,class:"indent-8"},dn=i(" Dalam belajar subyek disarankan menggunakan "),kn=i(", sedangkan yang perlu dilatih dan dibiasakan yaitu "),cn=i(". "),hn={key:1,class:"indent-8"},gn=i(" Kecerdasan Emosi nya "),wn=i(". Kecerdasan Sosialnya "),vn=i(". Karakter kepribadian subyek yang terkuat dan mempengaruhi aktivitas sehari-hari yaitu "),fn=i(" terdiri dari aspek positif dan perlu ditingkatkan, dikembangkan, dan dipertahankan, sedangkan aspek negatif perlu dirubah dan dikendalikan supaya tidak menghambat prestasi subyek. "),bn={key:2},qn={class:"indent-8"},mn=i(" Dalam kelanjutan studi "),Sn=i(" tapi perlu ditunjang oleh EQ dan SQ "),yn=i(" dari potensi kecerdasan yang dimiliki subyek dan menunjukkan adanya upaya keseimbangan antara potensi kecerdasan koqnitif - usaha / semangat didukung oleh emosi positif - kematangan kemampuan sosialnya. "),xn={key:0,class:"indent-8"},Kn=i(" Kelanjutan studi disarankan masuk Sekolah "),$n=i(" dengan Jurusan "),In=i(", Sekolah "),Bn=i(" dengan Jurusan "),jn=i(". "),An={key:1,class:"indent-8"},Cn=i(" Kelanjutan studi disarankan masuk Fakultas "),Tn=i(" dengan Prodi "),Rn=i(", Fakultas "),Fn=i(" dengan Prodi "),Pn=a("div",{class:"md:py-0 py-4 space-x-2 space-y-2"},null,-1),En={__name:"CardSertifikat2",props:{siswa:Object,default(){return null},aspekKepribadianRank:Object,default(){return null},temp:Object,default(){return null},paket:Object,default(){return null}},setup(l){const n=l,t=p(n.siswa),r=p(n.aspekKepribadianRank),d=p(n.temp),S=p(n.paket);t.value.iq_ket=k.iqKet(n.siswa.sertifikat.iq),t.value.eq_persen_keterangan=k.kepanjangan(n.siswa.sertifikat.eq_persen_keterangan),t.value.scq_persen_keterangan=k.kepanjangan(n.siswa.sertifikat.scq_persen_keterangan),t.value.iqh=k.kepanjangan(n.siswa.sertifikat.iqh),t.value.eq_persen_keterangan=k.kepanjangan(n.siswa.sertifikat.eq_persen_keterangan),t.value.scq_persen_keterangan=k.kepanjangan(n.siswa.sertifikat.scq_persen_keterangan),t.value.iq_kesimpulan=k.getKesimpulanIq(n.siswa.sertifikat.iq),t.value.eqsq_kesimpulan=k.getKesimpulanEqSq(n.siswa.sertifikat.iq);const e=p([{label:"Sangat Kurang Sekali",code:"SKS"},{label:"Kurang Sekali",code:"KS"},{label:"Kurang",code:"K"},{label:"Hampir Cukup",code:"HC"},{label:"Cukup",code:"C",altCode:"CB"},{label:"Kurang Baik",code:"KB"},{label:"Baik",code:"B"},{label:"Sangat Baik",code:"SB"},{label:"Sangat Baik Sekali",code:"SBS"}]);return(b,c)=>t.value?(_(),o("div",as,[a("div",es,[a("div",ss,[a("div",ts,[a("div",ns,[a("table",ls,[a("tbody",null,[a("tr",null,[is,_s,a("td",os,s(t.value.nomeridentitas),1)]),a("tr",null,[us,ps,a("td",null,s(t.value.nama),1)]),a("tr",null,[rs,ds,a("td",null,s(t.value.deteksi.umur),1)]),a("tr",null,[ks,cs,a("td",null,s(t.value.jk),1)]),a("tr",null,[hs,gs,a("td",null,s(t.value.sekolah_nama),1)])])])])])])]),ws,a("div",vs,[a("div",fs,[a("div",bs,[a("div",qs,[a("table",ms,[a("tbody",null,[a("tr",null,[Ss,ys,xs,a("td",Ks,s(t.value.sertifikat.iq),1),a("td",null,"/ "+s(t.value.iq_ket),1)]),a("tr",null,[$s,Is,Bs,a("td",js,s(t.value.sertifikat.eq_persen),1),a("td",null,"/ "+s(t.value.eq_persen_keterangan),1)]),a("tr",null,[As,Cs,Ts,a("td",Rs,s(t.value.sertifikat.scq_persen),1),a("td",null,"/ "+s(t.value.scq_persen_keterangan),1)])])])])])])]),a("div",Fs,[a("div",null,[a("span",Ps,"IV. IQ (KM) 8 Kecerdasan "+s(t.value.sertifikat.iq_persen)+" % Keterangan : "+s(t.value.sertifikat.iqh),1)]),Es]),a("div",Ns,[a("div",Ls,[a("div",Ds,[a("div",Ms,[a("table",Qs,[a("tbody",null,[zs,(_(!0),o(v,null,f(d.value,(u,w)=>(_(),o("tr",null,[Hs,a("td",Us,s(u.nama),1),a("td",Os,s(w+1),1),(_(!0),o(v,null,f(e.value,y=>(_(),o("td",Vs,[y.code==u.ket||y.altCode==u.ket?(_(),o("span",Gs,Js)):g("",!0)]))),256))]))),256)),a("tr",null,[Ys,Ws,Zs,(_(!0),o(v,null,f(e.value,u=>(_(),o("td",at,[u.code==t.value.sertifikat.km_p1_keterangan||u.altCode==t.value.sertifikat.km_p1_keterangan?(_(),o("span",et,tt)):g("",!0)]))),256))]),a("tr",null,[nt,lt,it,(_(!0),o(v,null,f(e.value,u=>(_(),o("td",_t,[u.code==t.value.sertifikat.km_kr_keterangan||u.altCode==t.value.sertifikat.km_kr_keterangan?(_(),o("span",ot,pt)):g("",!0)]))),256))]),a("tr",null,[rt,dt,kt,(_(!0),o(v,null,f(e.value,u=>(_(),o("td",ct,[u.code==t.value.sertifikat.km_p9_keterangan||u.altCode==t.value.sertifikat.km_p9_keterangan?(_(),o("span",ht,wt)):g("",!0)]))),256))])])])])])])]),a("div",vt,[a("div",ft,[a("div",bt,[a("div",qt,[a("table",mt,[a("tbody",null,[St,(_(!0),o(v,null,f(r.value,(u,w)=>(_(),o("tr",null,[a("td",null,s(w+1),1),a("td",yt,s(u.nama),1),a("td",null,s(u.persen),1),a("td",xt,s(u.keterangan),1),a("td",null,s(u.rank),1)]))),256))])])])])]),a("div",Kt,[a("div",$t,[a("div",It,[a("table",Bt,[a("tbody",null,[jt,(_(!0),o(v,null,f(r.value.slice(0,5),(u,w)=>(_(),o("tr",null,[a("td",null,s(w+1)+".",1),a("td",null,s(u.nama),1)]))),256))])])])]),a("div",At,[a("div",Ct,[a("table",Tt,[a("tbody",null,[Rt,(_(!0),o(v,null,f(r.value.slice(0,5),(u,w)=>(_(),o("tr",null,[a("td",null,s(w+1)+".",1),a("td",Ft,s(u.positif_diungkap),1)]))),256))])])])]),a("div",Pt,[a("div",Et,[a("table",Nt,[a("tbody",null,[Lt,(_(!0),o(v,null,f(r.value.slice(0,5),(u,w)=>(_(),o("tr",null,[a("td",null,s(w+1)+".",1),a("td",Dt,s(u.negatif_diungkap),1)]))),256))])])])]),a("div",Mt,[a("div",Qt,[a("table",zt,[a("tbody",null,[Ht,a("tr",null,[Ut,a("td",null,s(t.value.sertifikat.tipe_bakat_1),1)]),a("tr",null,[Ot,a("td",null,s(t.value.sertifikat.tipe_bakat_2),1)]),a("tr",null,[Vt,a("td",null,s(t.value.sertifikat.tipe_bakat_3),1)])])])])]),a("div",Gt,[a("div",Xt,[a("table",Jt,[a("tbody",null,[Yt,a("tr",null,[Wt,a("td",null,s(t.value.sertifikat.minat_pekerjaan_1),1)]),a("tr",null,[Zt,a("td",null,s(t.value.sertifikat.minat_pekerjaan_2),1)]),a("tr",null,[an,a("td",null,s(t.value.sertifikat.minat_pekerjaan_3),1)])])])])])])]),en,a("div",sn,[a("div",null,[a("div",tn,[a("p",nn,[ln,a("b",null,s(t.value.iq),1),_n,a("b",null,s(t.value.iq),1),on,a("b",null,s(t.value.sertifikat.iq_persen)+"%)",1),un,a("b",null,s(t.value.iqh),1),pn]),d.value.length>7?(_(),o("p",rn,[dn,a("b",null,s(d.value[0].nama)+","+s(d.value[1].nama)+", "+s(d.value[2].nama),1),kn,a("b",null,s(d.value[6].nama)+" dan "+s(d.value[7].nama),1),cn])):g("",!0),d.value.length>7?(_(),o("p",hn,[gn,a("b",null,s(t.value.eq_persen_keterangan)+",("+s(t.value.sertifikat.eq_persen)+"%)",1),wn,a("b",null,s(t.value.scq_persen_keterangan)+" (ScQ= "+s(t.value.sertifikat.scq_persen)+"%)",1),vn,a("b",null,s(r.value[0].nama)+", "+s(r.value[1].nama)+", "+s(r.value[2].nama)+", "+s(r.value[3].nama)+", "+s(r.value[4].nama),1),fn])):g("",!0),S.value.ist=="Aktif"?(_(),o("div",bn,[a("p",qn,[mn,a("b",null,s(t.value.iq_kesimpulan),1),Sn,a("b",null,s(t.value.eqsq_kesimpulan),1),yn]),b.kelas=="IX"||b.kelas=="ix"||b.kelas=="9"?(_(),o("p",xn,[Kn,a("b",null,s(t.value.sertifikat.saran_fakultas_1),1),$n,a("b",null,s(t.value.sertifikat.saran_fakultas_1_prodi),1),In,a("b",null,s(t.value.sertifikat.saran_fakultas_2),1),Bn,a("b",null,s(t.value.sertifikat.saran_fakultas_2_prodi),1),jn])):b.kelas=="XI"||b.kelas=="xi"||b.kelas=="11"||b.kelas=="12"||b.kelas=="XII"||b.kelas=="xii"?(_(),o("p",An,[Cn,a("b",null,s(t.value.sertifikat.saran_fakultas_1),1),Tn,a("b",null,s(t.value.sertifikat.saran_fakultas_1_prodi),1),Rn,a("b",null,s(t.value.sertifikat.saran_fakultas_2),1),Fn,a("b",null,s(t.value.sertifikat.saran_fakultas_2_prodi),1)])):g("",!0)])):g("",!0)])]),Pn])])):g("",!0)}},Nn={class:"pt-4 px-10 md:flex justify-between"},Ln=a("div",null,[a("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"})],-1),Dn={class:"md:py-0 py-4"},Mn=i(" Siswa "),Qn=i(" Edit "),zn={class:"pt-4 px-10 md:flex justify-between"},Hn=a("div",null,[a("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"},"Sertifikat Psikologis")],-1),Un={class:"md:py-0 py-4 space-x-2 space-y-2"},On=a("button",{class:"btn hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[a("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),i(" Kembali ")],-1),Vn={key:0},Wn={__name:"Sertifikat",setup(l){const n=D(),t=M(()=>n.getPaket);n.$subscribe((h,q)=>{}),Q().setsubMenuActive("hasilpsikologi"),z();const d=H(),S=p([]);p([]);const e=p([]),b=p([]),c=p(),u=p([]),w=p([{nama:""}]),y=p([]),R=p(null);return(async()=>{try{const h=await O.get(`yayasan/hasilpsikologi/detail/${d.params.id}`);return S.value=h.data,b.value=h.data,R.value=k.getKelas(h.data.kelas_nama),e.value=h.data.sertifikat,c.value=h.data,h.status=="failed"?(K.danger("Warning","Anda tidak memiliki Akses siswa ini!"),h.data):h.data.sertifikat==null||h.data.deteksi==null?(K.danger("Warning","Data Api Siswa tidak ditemukan!"),h.data):(u.value=[{nama:"Faktor Sikap Dingin",rank:e.value.hspq_a_kr_rank,persen:e.value.hspq_a_kr_persen,ket:e.value.hspq_a_kr_keterangan,positif_diungkap:e.value.hspq_a_kr_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_a_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Emosi Labil",rank:e.value.hspq_c_kr_rank,persen:e.value.hspq_c_kr_persen,ket:e.value.hspq_c_kr_keterangan,positif_diungkap:e.value.hspq_c_kr_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_c_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Sulit Bergairah",rank:e.value.hspq_d_kr_rank,persen:e.value.hspq_d_kr_persen,ket:e.value.hspq_d_kr_keterangan,positif_diungkap:e.value.hspq_d_kr_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_d_kr_aspek_negatif_di_ungkap},{nama:"Faktor Patuh atau Tunduk",rank:e.value.hspq_e_kr_rank,persen:e.value.hspq_e_kr_persen,ket:e.value.hspq_e_kr_keterangan,positif_diungkap:e.value.hspq_e_kr_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_d_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sungguh-sungguh",rank:e.value.hspq_f_kr_rank,persen:e.value.hspq_f_kr_persen,ket:e.value.hspq_f_kr_keterangan,positif_diungkap:e.value.hspq_f_kr_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_f_kr_aspek_negatif_di_ungkap},{nama:"Faktor Menolak Peraturan",rank:e.value.hspq_g_kr_rank,persen:e.value.hspq_g_kr_persen,ket:e.value.hspq_g_kr_keterangan,positif_diungkap:e.value.hspq_g_kr_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_g_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Keras Hati",rank:e.value.hspq_h_kr_rank,persen:e.value.hspq_h_kr_persen,ket:e.value.hspq_h_kr_keterangan,positif_diungkap:e.value.hspq_h_kr_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_h_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Pemalu",rank:e.value.hspq_i_kr_rank,persen:e.value.hspq_i_kr_persen,ket:e.value.hspq_i_kr_keterangan,positif_diungkap:e.value.hspq_i_kr_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_i_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Bersemangat",rank:e.value.hspq_j_kr_rank,persen:e.value.hspq_j_kr_persen,ket:e.value.hspq_j_kr_keterangan,positif_diungkap:e.value.hspq_j_kr_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_j_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Percaya Diri",rank:e.value.hspq_o_kr_rank,persen:e.value.hspq_o_kr_persen,ket:e.value.hspq_o_kr_keterangan,positif_diungkap:e.value.hspq_o_kr_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_o_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Kurang Mandiri",rank:e.value.hspq_q2_kr_rank,persen:e.value.hspq_q2_kr_persen,ket:e.value.hspq_q2_kr_keterangan,positif_diungkap:e.value.hspq_q2_kr_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_q2_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Kurang Disiplin",rank:e.value.hspq_q3_kr_rank,persen:e.value.hspq_q3_kr_persen,ket:e.value.hspq_q3_kr_keterangan,positif_diungkap:e.value.hspq_q3_kr_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_q3_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Rileks atau santai",rank:e.value.hspq_q4_kr_rank,persen:e.value.hspq_q4_kr_persen,ket:e.value.hspq_q4_kr_keterangan,positif_diungkap:e.value.hspq_q4_kr_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_q4_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Hangat",rank:e.value.hspq_a_kn_rank,persen:e.value.hspq_a_kn_persen,ket:e.value.hspq_a_kn_keterangan,positif_diungkap:e.value.hspq_a_kn_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_a_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Emosi Stabil",rank:e.value.hspq_c_kn_rank,persen:e.value.hspq_c_kn_persen,ket:e.value.hspq_c_kn_keterangan,positif_diungkap:e.value.hspq_c_kn_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_c_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Bergairah",rank:e.value.hspq_d_kn_rank,persen:e.value.hspq_d_kn_persen,ket:e.value.hspq_d_kn_keterangan,positif_diungkap:e.value.hspq_d_kn_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_d_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Dominasi",rank:e.value.hspq_e_kn_rank,persen:e.value.hspq_e_kn_persen,ket:e.value.hspq_e_kn_keterangan,positif_diungkap:e.value.hspq_e_kn_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_e_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Keceriaan",rank:e.value.hspq_f_kn_rank,persen:e.value.hspq_f_kn_persen,ket:e.value.hspq_f_kn_keterangan,positif_diungkap:e.value.hspq_f_kn_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_f_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Taat Peraturan",rank:e.value.hspq_g_kn_rank,persen:e.value.hspq_g_kn_persen,ket:e.value.hspq_g_kn_keterangan,positif_diungkap:e.value.hspq_g_kn_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_g_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Lembut Hati / Peka",rank:e.value.hspq_h_kn_rank,persen:e.value.hspq_h_kn_persen,ket:e.value.hspq_h_kn_keterangan,positif_diungkap:e.value.hspq_h_kn_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_h_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Pemberani",rank:e.value.hspq_i_kn_rank,persen:e.value.hspq_i_kn_persen,ket:e.value.hspq_i_kn_keterangan,positif_diungkap:e.value.hspq_i_kn_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_i_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Menarik Diri",rank:e.value.hspq_j_kn_rank,persen:e.value.hspq_j_kn_persen,ket:e.value.hspq_j_kn_keterangan,positif_diungkap:e.value.hspq_j_kn_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_j_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Ketakutan",rank:e.value.hspq_o_kn_rank,persen:e.value.hspq_o_kn_persen,ket:e.value.hspq_o_kn_keterangan,positif_diungkap:e.value.hspq_o_kn_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_o_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Mandiri",rank:e.value.hspq_q2_kn_rank,persen:e.value.hspq_q2_kn_persen,ket:e.value.hspq_q2_kn_keterangan,positif_diungkap:e.value.hspq_q2_kn_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_q2_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Disiplin",rank:e.value.hspq_q3_kn_rank,persen:e.value.hspq_q3_kn_persen,ket:e.value.hspq_q3_kn_keterangan,positif_diungkap:e.value.hspq_q3_kn_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_q3_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Tegang",rank:e.value.hspq_q4_kn_rank,persen:e.value.hspq_q4_kn_persen,ket:e.value.hspq_q4_kn_keterangan,positif_diungkap:e.value.hspq_q4_kn_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_q4_kn_aspek_negatif_di_ungkap}],u.value=u.value.map((q,m)=>j(B({},q),{keterangan:k.kepanjangan(q.ket)})),u.value.sort(function(q,m){return q.rank-m.rank}),y.value=[{nama:"Kecerdasan Linguistik",persen:e.value.kb_persen,ket:e.value.kbh},{nama:"Kecerdasan Logis - Matematis",persen:e.value.lm_persen,ket:e.value.lmh},{nama:"Kecerdasan Spasial",persen:e.value.ks_persen,ket:e.value.ksh},{nama:"Kecerdasan Musikal",persen:e.value.km_persen,ket:e.value.kmh},{nama:"Kecerdasan Kinetik",persen:e.value.kk_persen,ket:e.value.kkh},{nama:"Kecerdasan Interpersonal",persen:e.value.ki_persen,ket:e.value.kih},{nama:"Kecerdasan Intrapersonal",persen:e.value.ka_persen,ket:e.value.kah},{nama:"Kecerdasan Natural",persen:e.value.kn_persen,ket:e.value.knh}],w.value=y.value.slice(0),w.value.sort(function(q,m){return m.persen-q.persen}),h.data)}catch(h){K.danger("Warning","Data Siswa tidak ditemukan!"),console.error(h)}})(),d.params.id,p([{label:"Sangat Kurang Sekali",code:"SKS"},{label:"Kurang Sekali",code:"KS"},{label:"Kurang",code:"K"},{label:"Hampir Cukup",code:"HC"},{label:"Cukup",code:"C",altCode:"CB"},{label:"Kurang Baik",code:"KB"},{label:"Baik",code:"B"},{label:"Sangat Baik",code:"SB"},{label:"Sangat Baik Sekali",code:"SBS"}]),p([{label:"91-99",ket:"Sangat Tinggi Sekali / Sangat Mengganggu Sekali",kode:"STS"},{label:"81-90",ket:"Tinggi Sekali / Mengganggu Sekali",kode:"TS"},{label:"71-80",ket:"Tinggi / Mengganggu",kode:"T"},{label:"61-70",ket:"Cukup Tinggi / Cukup Mengganggu",kode:"CT"},{label:"41-60",ket:"Cukup / Terkendali",kode:"C"},{label:"31-40",ket:"Agak Rendah / Cukup Terkendali",kode:"AR"},{label:"21-30",ket:"Rendah / Terkendali Baik",kode:"R"},{label:"11-20",ket:"Rendah Sekali / Terkendali Baik Sekali",kode:"RS"},{label:"01-10",ket:"Sangat Rendah Sekali / Sangat Terkendali Baik Sekali",kode:"SRS"}]),(h,q)=>{const m=U("router-link");return _(),o(v,null,[a("div",Nn,[Ln,a("div",Dn,[x(V,null,{content:A(()=>[Mn,x(G),Qn]),_:1})])]),a("div",zn,[Hn,a("div",Un,[x(m,{to:{name:"AdminHasilPsikologi"}},{default:A(()=>[On]),_:1})])]),c.value?(_(),o("div",Vn,[c.value.paket_nama!="Premium"?(_(),C(En,{key:0,siswa:c.value,aspekKepribadianRank:u.value,temp:w.value,paket:T(t)},null,8,["siswa","aspekKepribadianRank","temp","paket"])):(_(),C(Ze,{key:1,siswa:c.value,aspekKepribadianRank:u.value,temp:w.value,paket:T(t)},null,8,["siswa","aspekKepribadianRank","temp","paket"]))])):g("",!0)],64)}}};export{Wn as default};
