var P=Object.defineProperty,F=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var j=(l,n,t)=>n in l?P(l,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[n]=t,A=(l,n)=>{for(var t in n||(n={}))N.call(n,t)&&j(l,t,n[t]);if(B)for(var t of B(n))L.call(n,t)&&j(l,t,n[t]);return l},C=(l,n)=>F(l,E(n));import{r as d,o as _,e as r,f as a,t as s,F as w,z as b,q as v,i,A as I,u as D,a as M,b as z,c as Q,j as O,g as $,w as T,v as R,T as K}from"./index.dfcd09a3.js";import{B as H,a as U}from"./BreadCrumbSpace.9a2a2377.js";const G=(l="")=>{let n=null;return l.indexOf("/")>0?n=l?l.split("/"):null:l.indexOf("-")>0?n=l?l.split("-"):null:l.indexOf(".")>0?n=l?l.split("."):null:n=l?l.split(" "):null,n?n[0]:null},V=(l=null)=>{let n=l;return l=="SBS"?n="Sangat Baik Sekali":l=="BS"?n="Baik Sekali":l=="B"?n="Baik":l=="CB"?n="Cukup Baik":l=="C"?n="Cukup":l=="HC"?n="Hampir Cukup":l=="K"?n="Kurang":l=="KS"?n="Kurang Sekali":l=="SKS"?n="Sangat Kurang Sekali":l=="STS"?n="Sangat Tinggi Sekali":l=="TS"?n="Tinggi Sekali":l=="T"?n="Tinggi":l=="CT"?n="Cukup Tinggi":l=="C"?n="Cukup":l=="CR"?n="Cukup Rendah":l=="AR"?n="Agak Rendah":l=="R"?n="Rendah":l=="RS"?n="Rendah Sekali":l=="SRS"&&(n="Sangat Rendah Sekali"),n},X=(l=null)=>{let n="Moron";return l>139?n="Genius":140>l&&l>=130?n="Berbakat":130>l&&l>=120?n="Superior":120>l&&l>=110?n="Di Atas Rata - Rata":110>l&&l>=105?n="Rata - Rata Atas":105>l&&l>=100?n="Rata - Rata":100>l&&l>=90?n="Rata - Rata Bawah":90>l&&l>=80?n="Lambat Belajar":80>l&&l>=60?n="Borderline":n="Moron",n},J=(l=null)=>{let n="Kurang Lancar";return l>119?n="Sangat Lancar Sekali":120>l&&l>=110?n="Lancar Sekali":110>l&&l>=105?n="Lancar":105>l&&l>=90?n="Cukup Lancar":90>l&&l>=80?n="Kurang Lancar":n="Sangat Kurang Lancar",n},Y=(l=null)=>{let n="Lebih Tinggi";return l>119||120>l&&l>=110||110>l&&l>=105?n="Seimbang dan Lebih Tinggi":(105>l&&l>=90||90>l&&l>=80,n="Lebih Tinggi"),n},g={getKelas:G,kepanjangan:V,iqKet:X,getKesimpulanIq:J,getKesimpulanEqSq:Y},W={key:0},Z={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},aa={class:"w-full lg:w-full"},ea={class:"bg-base-100 shadow rounded-lg px-4 py-4"},sa={class:"overflow-x-auto"},ta={class:"table table-compact"},na=a("td",{class:"whitespace-nowrap w-1/12"},"No Induk",-1),la=a("td",{class:"whitespace-nowrap w-1/12"},":",-1),ia={class:"whitespace-nowrap w-10/12"},_a=a("td",null,"Nama",-1),ra=a("td",null,":",-1),oa=a("td",null,"Umur",-1),da=a("td",null,":",-1),ua=a("td",null,"Jenis Kelamin",-1),pa=a("td",null,":",-1),ka=a("td",null,"Sekolah",-1),ca=a("td",null,":",-1),ha=a("div",{class:"pt-4 px-10 md:flex justify-between"},[a("div",null,[a("span",{class:"text-2xl sm:text-2xl leading-none font-bold text-gray-700 shadow-sm"},"ASPEK PSIKOLOGIS YANG DIUNGKAP")]),a("div",{class:"md:py-0 py-4 space-x-2 space-y-2"})],-1),ga={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},va={class:"w-full lg:w-full"},wa={class:"bg-base-100 shadow rounded-lg px-4 py-4"},fa={class:"overflow-x-auto"},ba={class:"table table-compact w-full"},qa=a("td",{class:"whitespace-nowrap w-1/100"},"I.",-1),ma=a("td",{class:"whitespace-nowrap w-1/100"}," IQ (Intelegence Quotient) / CFIT ",-1),ya=a("td",{class:"whitespace-nowrap w-1/100"},":",-1),Sa={class:"whitespace-nowrap w-1/100"},xa=a("td",{class:"whitespace-nowrap w-1/100"},"II.",-1),$a=a("td",{class:"whitespace-nowrap w-1/100"}," EQ (Emotional Quotient) ",-1),Ka=a("td",{class:"whitespace-nowrap w-1/100"},":",-1),Ia={class:"whitespace-nowrap w-1/100"},Ba=a("td",{class:"whitespace-nowrap w-1/100"},"III.",-1),ja=a("td",{class:"whitespace-nowrap w-1/100"}," Sc.Q (Social Quotient) ",-1),Aa=a("td",{class:"whitespace-nowrap w-1/100"},":",-1),Ca={class:"whitespace-nowrap w-1/100"},Ta={class:"md:py-2 px-4 lg:flex flex-wrap"},Ra={class:"w-full lg:w-3/6"},Pa={class:"bg-base-100 shadow rounded-lg px-4 py-4"},Fa={class:"overflow-x-auto"},Ea={class:"table table-compact table-zebra w-full shadow shadow-sm"},Na=a("tr",null,[a("th",{class:"whitespace-nowrap w-1/100"},"IV."),a("th",{class:"whitespace-nowrap w-1/12"},"ASPEK KEPRIBADIAN"),a("th",{class:"whitespace-nowrap w-1/100"},"%"),a("th",{class:"whitespace-nowrap w-1/100"},"Keterangan"),a("th",{class:"whitespace-nowrap w-1/100"},"Rank")],-1),La={class:"whitespace-nowrap w-1/12"},Da={class:"whitespace-pre-wrap"},Ma={class:"w-full lg:w-3/6"},za={class:"bg-base-100 shadow rounded-lg px-4 py-4"},Qa={class:"overflow-x-auto"},Oa={class:"table table-compact table-zebra w-full"},Ha=a("tr",null,[a("th",{class:"whitespace-nowrap w-1/100"}),a("th",{class:"whitespace-nowrap w-5/12"}," ANALISA KEPRIBADIAN TERKUAT ")],-1),Ua={class:"bg-base-100 shadow rounded-lg px-4 py-4"},Ga={class:"overflow-x-auto"},Va={class:"table table-compact table-zebra w-full"},Xa=a("tr",null,[a("th",{class:"whitespace-nowrap w-1/100"}),a("th",{class:"whitespace-nowrap w-5/12"}," Faktor Kepribadian Subyek Terkuat Positif (+) ")],-1),Ja={class:"whitespace-pre-wrap"},Ya={class:"bg-base-100 shadow rounded-lg px-4 py-4"},Wa={class:"overflow-x-auto"},Za={class:"table table-compact table-zebra w-full"},ae=a("tr",null,[a("th",{class:"whitespace-nowrap w-1/100"}),a("th",{class:"whitespace-nowrap w-5/12"}," Faktor Kepribadian Subyek Terkuat Negatif (-) ")],-1),ee={class:"whitespace-pre-wrap"},se={class:"bg-base-100 shadow rounded-lg px-4 py-4"},te={class:"overflow-x-auto"},ne={class:"table table-compact table-zebra w-full"},le=a("tr",null,[a("th",{class:"whitespace-nowrap w-1/100"},"IX."),a("th",{class:"whitespace-nowrap w-5/12"}," TIPE BAKAT YANG DISUKAI ")],-1),ie=a("td",null,"1.",-1),_e=a("td",null,"2.",-1),re=a("td",null,"3.",-1),oe={class:"bg-base-100 shadow rounded-lg px-4 py-4"},de={class:"overflow-x-auto"},ue={class:"table table-compact table-zebra w-full"},pe=a("tr",null,[a("th",{class:"whitespace-nowrap w-1/100"},"X."),a("th",{class:"whitespace-nowrap w-5/12"}," MINAT PEKERJAAN TERKUAT ")],-1),ke=a("td",null,"1.",-1),ce=a("td",null,"2.",-1),he=a("td",null,"3.",-1),ge=a("div",{class:"pt-4 px-10 md:flex justify-between"},[a("div",null,[a("span",{class:"text-2xl sm:text-xl leading-none font-bold text-gray-600 shadow-sm"},"V. KESIMPULAN DAN SARAN 22")]),a("div",{class:"md:py-0 py-4 space-x-2 space-y-2"})],-1),ve={class:"pt-4 px-10 md:flex justify-between"},we={class:"text-lg sm:text-lg leading-1 font-md text-gray-600 shadow-sm space-y-2"},fe={class:"indent-8"},be=i(" Potensi kecerdasan subyek yang dapat digunakan saat ini "),qe=i(",(IQ="),me=i(", CFIT = "),ye=i(" artinya dengan tingkat kemampuan menggunakan kecerdasan majemuk tergolong "),Se=i(". "),xe={key:0,class:"indent-8"},$e=i(" Dalam belajar subyek disarankan menggunakan "),Ke=i(", sedangkan yang perlu dilatih dan dibiasakan yaitu "),Ie=i(". "),Be={key:1,class:"indent-8"},je=i(" Kecerdasan Emosi nya "),Ae=i(". Kecerdasan Sosialnya "),Ce=i(". Karakter kepribadian subyek yang terkuat dan mempengaruhi aktivitas sehari-hari yaitu "),Te=i(" terdiri dari aspek positif dan perlu ditingkatkan, dikembangkan, dan dipertahankan, sedangkan aspek negatif perlu dirubah dan dikendalikan supaya tidak menghambat prestasi subyek. "),Re={key:2},Pe={class:"indent-8"},Fe=i(" Dalam kelanjutan studi "),Ee=i(" tapi perlu ditunjang oleh EQ dan SQ "),Ne=i(" dari potensi kecerdasan yang dimiliki subyek dan menunjukkan adanya upaya keseimbangan antara potensi kecerdasan koqnitif - usaha / semangat didukung oleh emosi positif - kematangan kemampuan sosialnya. "),Le={key:0,class:"indent-8"},De=i(" Kelanjutan studi disarankan masuk Sekolah "),Me=i(" dengan Jurusan "),ze=i(", Sekolah "),Qe=i(" dengan Jurusan "),Oe=i(". "),He={key:1,class:"indent-8"},Ue=i(" Kelanjutan studi disarankan masuk Fakultas "),Ge=i(" dengan Prodi "),Ve=i(", Fakultas "),Xe=i(" dengan Prodi "),Je=a("div",{class:"md:py-0 py-4 space-x-2 space-y-2"},null,-1),Ye={__name:"CardSertifikat1",props:{siswa:Object,default(){return null},aspekKepribadianRank:Object,default(){return null},temp:Object,default(){return null},kelas:Object,default(){return null}},setup(l){const n=l,t=d(n.siswa),u=d(n.aspekKepribadianRank),c=d(n.temp),e=d([]),p=d(n.kelas);return t.value.iq_ket=g.iqKet(n.siswa.sertifikat.iq),t.value.eq_persen_keterangan=g.kepanjangan(n.siswa.sertifikat.eq_persen_keterangan),t.value.scq_persen_keterangan=g.kepanjangan(n.siswa.sertifikat.scq_persen_keterangan),t.value.iqh=g.kepanjangan(n.siswa.sertifikat.iqh),t.value.eq_persen_keterangan=g.kepanjangan(n.siswa.sertifikat.eq_persen_keterangan),t.value.scq_persen_keterangan=g.kepanjangan(n.siswa.sertifikat.scq_persen_keterangan),t.value.iq_kesimpulan=g.getKesimpulanIq(n.siswa.sertifikat.iq),t.value.eqsq_kesimpulan=g.getKesimpulanEqSq(n.siswa.sertifikat.iq),d([{label:"Sangat Kurang Sekali",code:"SKS"},{label:"Kurang Sekali",code:"KS"},{label:"Kurang",code:"K"},{label:"Hampir Cukup",code:"HC"},{label:"Cukup",code:"C"},{label:"Cukup Baik",code:"CB"},{label:"Baik",code:"B"},{label:"Sangat Baik",code:"BS"},{label:"Sangat Baik Sekali",code:"SBS"}]),(async m=>{try{const f=await I.get(`owner/paket/${m}`);return e.value=f.data,console.log(e.value),f.data}catch(f){console.error(f)}})(t.value.paket_id),(m,f)=>t.value?(_(),r("div",W,[a("div",Z,[a("div",aa,[a("div",ea,[a("div",sa,[a("table",ta,[a("tbody",null,[a("tr",null,[na,la,a("td",ia,s(t.value.nomeridentitas),1)]),a("tr",null,[_a,ra,a("td",null,s(t.value.nama),1)]),a("tr",null,[oa,da,a("td",null,s(t.value.deteksi.umur),1)]),a("tr",null,[ua,pa,a("td",null,s(t.value.jk),1)]),a("tr",null,[ka,ca,a("td",null,s(t.value.sekolah_nama),1)])])])])])])]),ha,a("div",ga,[a("div",va,[a("div",wa,[a("div",fa,[a("table",ba,[a("tbody",null,[a("tr",null,[qa,ma,ya,a("td",Sa,s(t.value.sertifikat.iq),1),a("td",null,"/ "+s(t.value.iq_ket),1)]),a("tr",null,[xa,$a,Ka,a("td",Ia,s(t.value.sertifikat.eq_persen),1),a("td",null,"/ "+s(t.value.eq_persen_keterangan),1)]),a("tr",null,[Ba,ja,Aa,a("td",Ca,s(t.value.sertifikat.scq_persen),1),a("td",null,"/ "+s(t.value.scq_persen_keterangan),1)])])])])])])]),a("div",Ta,[a("div",Ra,[a("div",Pa,[a("div",Fa,[a("table",Ea,[a("tbody",null,[Na,(_(!0),r(w,null,b(u.value,(k,o)=>(_(),r("tr",null,[a("td",null,s(o+1),1),a("td",La,s(k.nama),1),a("td",null,s(k.persen),1),a("td",Da,s(k.keterangan),1),a("td",null,s(k.rank),1)]))),256))])])])])]),a("div",Ma,[a("div",za,[a("div",Qa,[a("table",Oa,[a("tbody",null,[Ha,(_(!0),r(w,null,b(u.value.slice(0,5),(k,o)=>(_(),r("tr",null,[a("td",null,s(o+1)+".",1),a("td",null,s(k.nama),1)]))),256))])])])]),a("div",Ua,[a("div",Ga,[a("table",Va,[a("tbody",null,[Xa,(_(!0),r(w,null,b(u.value.slice(0,5),(k,o)=>(_(),r("tr",null,[a("td",null,s(o+1)+".",1),a("td",Ja,s(k.positif_diungkap),1)]))),256))])])])]),a("div",Ya,[a("div",Wa,[a("table",Za,[a("tbody",null,[ae,(_(!0),r(w,null,b(u.value.slice(0,5),(k,o)=>(_(),r("tr",null,[a("td",null,s(o+1)+".",1),a("td",ee,s(k.negatif_diungkap),1)]))),256))])])])]),a("div",se,[a("div",te,[a("table",ne,[a("tbody",null,[le,a("tr",null,[ie,a("td",null,s(t.value.sertifikat.tipe_bakat_1),1)]),a("tr",null,[_e,a("td",null,s(t.value.sertifikat.tipe_bakat_2),1)]),a("tr",null,[re,a("td",null,s(t.value.sertifikat.tipe_bakat_3),1)])])])])]),a("div",oe,[a("div",de,[a("table",ue,[a("tbody",null,[pe,a("tr",null,[ke,a("td",null,s(t.value.sertifikat.minat_pekerjaan_1),1)]),a("tr",null,[ce,a("td",null,s(t.value.sertifikat.minat_pekerjaan_2),1)]),a("tr",null,[he,a("td",null,s(t.value.sertifikat.minat_pekerjaan_3),1)])])])])])])]),ge,a("div",ve,[a("div",null,[a("div",we,[a("p",fe,[be,a("b",null,s(t.value.iq),1),qe,a("b",null,s(t.value.iq),1),me,a("b",null,s(t.value.sertifikat.iq_persen)+"%)",1),ye,a("b",null,s(t.value.iqh),1),Se]),c.value.length>7?(_(),r("p",xe,[$e,a("b",null,s(c.value[0].nama)+","+s(c.value[1].nama)+", "+s(c.value[2].nama),1),Ke,a("b",null,s(c.value[6].nama)+" dan "+s(c.value[7].nama),1),Ie])):v("",!0),c.value.length>7?(_(),r("p",Be,[je,a("b",null,s(t.value.eq_persen_keterangan)+",("+s(t.value.sertifikat.eq_persen)+"%)",1),Ae,a("b",null,s(t.value.scq_persen_keterangan)+" (ScQ= "+s(t.value.sertifikat.scq_persen)+"%)",1),Ce,a("b",null,s(u.value[0].nama)+", "+s(u.value[1].nama)+", "+s(u.value[2].nama)+", "+s(u.value[3].nama)+", "+s(u.value[4].nama),1),Te])):v("",!0),e.value.ist=="Aktif"?(_(),r("div",Re,[a("p",Pe,[Fe,a("b",null,s(t.value.iq_kesimpulan),1),Ee,a("b",null,s(t.value.eqsq_kesimpulan),1),Ne]),p.value=="IX"||p.value=="ix"||p.value=="9"?(_(),r("p",Le,[De,a("b",null,s(t.value.sertifikat.saran_fakultas_1),1),Me,a("b",null,s(t.value.sertifikat.saran_fakultas_1_prodi),1),ze,a("b",null,s(t.value.sertifikat.saran_fakultas_2),1),Qe,a("b",null,s(t.value.sertifikat.saran_fakultas_2_prodi),1),Oe])):p.value=="XI"||p.value=="xi"||p.value=="11"||p.value=="12"||p.value=="XII"||p.value=="xii"?(_(),r("p",He,[Ue,a("b",null,s(t.value.sertifikat.saran_fakultas_1),1),Ge,a("b",null,s(t.value.sertifikat.saran_fakultas_1_prodi),1),Ve,a("b",null,s(t.value.sertifikat.saran_fakultas_2),1),Xe,a("b",null,s(t.value.sertifikat.saran_fakultas_2_prodi),1)])):v("",!0)])):v("",!0)])]),Je])])):v("",!0)}},We={key:0},Ze={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},as={class:"w-full lg:w-full"},es={class:"bg-base-100 shadow rounded-lg px-4 py-4"},ss={class:"overflow-x-auto"},ts={class:"table table-compact"},ns=a("td",{class:"whitespace-nowrap w-1/12"},"No Induk",-1),ls=a("td",{class:"whitespace-nowrap w-1/12"},":",-1),is={class:"whitespace-nowrap w-10/12"},_s=a("td",null,"Nama",-1),rs=a("td",null,":",-1),os=a("td",null,"Umur",-1),ds=a("td",null,":",-1),us=a("td",null,"Jenis Kelamin",-1),ps=a("td",null,":",-1),ks=a("td",null,"Sekolah",-1),cs=a("td",null,":",-1),hs=a("div",{class:"pt-4 px-10 md:flex justify-between"},[a("div",null,[a("span",{class:"text-2xl sm:text-2xl leading-none font-bold text-gray-700 shadow-sm"},"ASPEK PSIKOLOGIS YANG DIUNGKAP")]),a("div",{class:"md:py-0 py-4 space-x-2 space-y-2"})],-1),gs={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},vs={class:"w-full lg:w-full"},ws={class:"bg-base-100 shadow rounded-lg px-4 py-4"},fs={class:"overflow-x-auto"},bs={class:"table table-compact w-full"},qs=a("td",{class:"whitespace-nowrap w-1/100"},"I.",-1),ms=a("td",{class:"whitespace-nowrap w-1/100"}," IQ (Intelegence Quotient) / IST ",-1),ys=a("td",{class:"whitespace-nowrap w-1/100"},":",-1),Ss={class:"whitespace-nowrap w-1/100"},xs=a("td",{class:"whitespace-nowrap w-1/100"},"II.",-1),$s=a("td",{class:"whitespace-nowrap w-1/100"}," EQ (Emotional Quotient) ",-1),Ks=a("td",{class:"whitespace-nowrap w-1/100"},":",-1),Is={class:"whitespace-nowrap w-1/100"},Bs=a("td",{class:"whitespace-nowrap w-1/100"},"III.",-1),js=a("td",{class:"whitespace-nowrap w-1/100"}," Sc.Q (Social Quotient) ",-1),As=a("td",{class:"whitespace-nowrap w-1/100"},":",-1),Cs={class:"whitespace-nowrap w-1/100"},Ts={class:"pt-4 px-10 md:flex justify-between"},Rs={class:"text-xl sm:text-xl leading-none font-bold text-gray-700 shadow-sm"},Ps=a("div",{class:"md:py-0 py-4 space-x-2 space-y-2"},null,-1),Fs={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},Es={class:"w-full lg:w-full"},Ns={class:"bg-base-100 shadow rounded-lg px-4 py-4"},Ls={class:"overflow-x-auto w-full md:w-10/12 2xl:w-full"},Ds={class:"table table-compact w-full border-collapse border border-gray-400"},Ms=a("tr",null,[a("td",{class:"whitespace-nowrap w-1/100 border-collapse border border-gray-400 text-center"}," IV. "),a("td",{class:"whitespace-nowrap w-1/100 border-collapse border border-gray-400"}," IQ (KM) 8 Kecerdasan "),a("td",{class:"whitespace-pre-wrap w-1/100 border-collapse border border-gray-400"}," Rank Nilai "),a("td",{class:"whitespace-pre-wrap w-1/100 border-collapse border border-gray-400"}," Sangat Kurang Sekali "),a("td",{class:"whitespace-pre-wrap w-1/100 border-collapse border border-gray-400"}," Kurang Sekali "),a("td",{class:"whitespace-pre-wrap w-1/100 border-collapse border border-gray-400"}," Kurang "),a("td",{class:"whitespace-pre-wrap w-1/100 border-collapse border border-gray-400"}," Hampir Cukup "),a("td",{class:"whitespace-pre-wrap w-1/100 border-collapse border border-gray-400"}," Cukup "),a("td",{class:"whitespace-pre-wrap w-1/100 border-collapse border border-gray-400"}," Cukup Baik "),a("td",{class:"whitespace-pre-wrap w-1/100 border-collapse border border-gray-400"}," Baik "),a("td",{class:"whitespace-pre-wrap w-1/100 border-collapse border border-gray-400"}," Baik Sekali "),a("td",{class:"whitespace-pre-wrap w-1/100 border-collapse border border-gray-400"}," Sangat Baik Sekali ")],-1),zs=a("td",{class:"whitespace-nowrap w-1/100 border-collapse border border-gray-400"},null,-1),Qs={class:"whitespace-nowrap w-1/100 border-collapse border border-gray-400"},Os={class:"whitespace-nowrap w-1/100 border-collapse border border-gray-400 text-center"},Hs={class:"whitespace-nowrap w-1/100 border-collapse border border-gray-400"},Us={key:0,class:"flex justify-center"},Gs=a("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[a("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})],-1),Vs=[Gs],Xs=a("td",{class:"whitespace-nowrap w-1/100 border-collapse border border-gray-400 text-center"}," V. ",-1),Js=a("td",{class:"whitespace-nowrap w-1/100 border-collapse border border-gray-400"}," Pengetahuan Umum ",-1),Ys=a("td",{class:"whitespace-nowrap w-1/100 border-collapse border border-gray-400"},null,-1),Ws={class:"whitespace-nowrap w-1/100 border-collapse border border-gray-400"},Zs={key:0,class:"flex justify-center"},at=a("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[a("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})],-1),et=[at],st=a("td",{class:"whitespace-nowrap w-1/100 border-collapse border border-gray-400 text-center"}," VI. ",-1),tt=a("td",{class:"whitespace-nowrap w-1/100 border-collapse border border-gray-400"}," Kreativitas ",-1),nt=a("td",{class:"whitespace-nowrap w-1/100 border-collapse border border-gray-400"},null,-1),lt={class:"whitespace-nowrap w-1/100 border-collapse border border-gray-400"},it={key:0,class:"flex justify-center"},_t=a("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[a("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})],-1),rt=[_t],ot=a("td",{class:"whitespace-nowrap w-1/100 border-collapse border border-gray-400 text-center"}," VII. ",-1),dt=a("td",{class:"whitespace-nowrap w-1/100 border-collapse border border-gray-400"}," Kemampuan Mengingat ",-1),ut=a("td",{class:"whitespace-nowrap w-1/100 border-collapse border border-gray-400"},null,-1),pt={class:"whitespace-nowrap w-1/100 border-collapse border border-gray-400"},kt={key:0,class:"flex justify-center"},ct=a("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[a("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})],-1),ht=[ct],gt={class:"md:py-2 px-4 lg:flex flex-wrap"},vt={class:"w-full lg:w-3/6"},wt={class:"bg-base-100 shadow rounded-lg px-4 py-4"},ft={class:"overflow-x-auto"},bt={class:"table table-compact table-zebra w-full shadow shadow-sm"},qt=a("tr",null,[a("th",{class:"whitespace-nowrap w-1/100"},"VIII."),a("th",{class:"whitespace-nowrap w-1/12"},"ASPEK KEPRIBADIAN"),a("th",{class:"whitespace-nowrap w-1/100"},"%"),a("th",{class:"whitespace-nowrap w-1/100"},"Keterangan"),a("th",{class:"whitespace-nowrap w-1/100"},"Rank")],-1),mt={class:"whitespace-nowrap w-1/12"},yt={class:"whitespace-pre-wrap"},St={class:"w-full lg:w-3/6"},xt={class:"bg-base-100 shadow rounded-lg px-4 py-4"},$t={class:"overflow-x-auto"},Kt={class:"table table-compact table-zebra w-full"},It=a("tr",null,[a("th",{class:"whitespace-nowrap w-1/100"}),a("th",{class:"whitespace-nowrap w-5/12"}," ANALISA KEPRIBADIAN TERKUAT ")],-1),Bt={class:"bg-base-100 shadow rounded-lg px-4 py-4"},jt={class:"overflow-x-auto"},At={class:"table table-compact table-zebra w-full"},Ct=a("tr",null,[a("th",{class:"whitespace-nowrap w-1/100"}),a("th",{class:"whitespace-nowrap w-5/12"}," Faktor Kepribadian Subyek Terkuat Positif (+) ")],-1),Tt={class:"whitespace-pre-wrap"},Rt={class:"bg-base-100 shadow rounded-lg px-4 py-4"},Pt={class:"overflow-x-auto"},Ft={class:"table table-compact table-zebra w-full"},Et=a("tr",null,[a("th",{class:"whitespace-nowrap w-1/100"}),a("th",{class:"whitespace-nowrap w-5/12"}," Faktor Kepribadian Subyek Terkuat Negatif (-) ")],-1),Nt={class:"whitespace-pre-wrap"},Lt={class:"bg-base-100 shadow rounded-lg px-4 py-4"},Dt={class:"overflow-x-auto"},Mt={class:"table table-compact table-zebra w-full"},zt=a("tr",null,[a("th",{class:"whitespace-nowrap w-1/100"},"IX."),a("th",{class:"whitespace-nowrap w-5/12"}," TIPE BAKAT YANG DISUKAI ")],-1),Qt=a("td",null,"1.",-1),Ot=a("td",null,"2.",-1),Ht=a("td",null,"3.",-1),Ut={class:"bg-base-100 shadow rounded-lg px-4 py-4"},Gt={class:"overflow-x-auto"},Vt={class:"table table-compact table-zebra w-full"},Xt=a("tr",null,[a("th",{class:"whitespace-nowrap w-1/100"},"X."),a("th",{class:"whitespace-nowrap w-5/12"}," MINAT PEKERJAAN TERKUAT ")],-1),Jt=a("td",null,"1.",-1),Yt=a("td",null,"2.",-1),Wt=a("td",null,"3.",-1),Zt=a("div",{class:"pt-4 px-10 md:flex justify-between"},[a("div",null,[a("span",{class:"text-2xl sm:text-xl leading-none font-bold text-gray-600 shadow-sm"},"XI. KESIMPULAN DAN SARAN ")]),a("div",{class:"md:py-0 py-4 space-x-2 space-y-2"})],-1),an={class:"pt-4 px-10 md:flex justify-between"},en={class:"text-lg sm:text-lg leading-1 font-md text-gray-600 shadow-sm space-y-2"},sn={class:"indent-8"},tn=i(" Potensi kecerdasan subyek yang dapat digunakan saat ini "),nn=i(",(IQ="),ln=i(", IST = "),_n=i(" artinya dengan tingkat kemampuan menggunakan kecerdasan majemuk tergolong "),rn=i(". "),on={key:0,class:"indent-8"},dn=i(" Dalam belajar subyek disarankan menggunakan "),un=i(", sedangkan yang perlu dilatih dan dibiasakan yaitu "),pn=i(". "),kn={key:1,class:"indent-8"},cn=i(" Kecerdasan Emosi nya "),hn=i(". Kecerdasan Sosialnya "),gn=i(". Karakter kepribadian subyek yang terkuat dan mempengaruhi aktivitas sehari-hari yaitu "),vn=i(" terdiri dari aspek positif dan perlu ditingkatkan, dikembangkan, dan dipertahankan, sedangkan aspek negatif perlu dirubah dan dikendalikan supaya tidak menghambat prestasi subyek. "),wn={key:2},fn={class:"indent-8"},bn=i(" Dalam kelanjutan studi "),qn=i(" tapi perlu ditunjang oleh EQ dan SQ "),mn=i(" dari potensi kecerdasan yang dimiliki subyek dan menunjukkan adanya upaya keseimbangan antara potensi kecerdasan koqnitif - usaha / semangat didukung oleh emosi positif - kematangan kemampuan sosialnya. "),yn={key:0,class:"indent-8"},Sn=i(" Kelanjutan studi disarankan masuk Sekolah "),xn=i(" dengan Jurusan "),$n=i(", Sekolah "),Kn=i(" dengan Jurusan "),In=i(". "),Bn={key:1,class:"indent-8"},jn=i(" Kelanjutan studi disarankan masuk Fakultas "),An=i(" dengan Prodi "),Cn=i(", Fakultas "),Tn=i(" dengan Prodi "),Rn=a("div",{class:"md:py-0 py-4 space-x-2 space-y-2"},null,-1),Pn={__name:"CardSertifikat2",props:{siswa:Object,default(){return null},aspekKepribadianRank:Object,default(){return null},temp:Object,default(){return null},kelas:Object,default(){return null}},setup(l){const n=l,t=d(n.siswa),u=d(n.aspekKepribadianRank),c=d(n.temp),e=d([]),p=d(n.kelas);t.value.iq_ket=g.iqKet(n.siswa.sertifikat.iq),t.value.eq_persen_keterangan=g.kepanjangan(n.siswa.sertifikat.eq_persen_keterangan),t.value.scq_persen_keterangan=g.kepanjangan(n.siswa.sertifikat.scq_persen_keterangan),t.value.iqh=g.kepanjangan(n.siswa.sertifikat.iqh),t.value.eq_persen_keterangan=g.kepanjangan(n.siswa.sertifikat.eq_persen_keterangan),t.value.scq_persen_keterangan=g.kepanjangan(n.siswa.sertifikat.scq_persen_keterangan),t.value.iq_kesimpulan=g.getKesimpulanIq(n.siswa.sertifikat.iq),t.value.eqsq_kesimpulan=g.getKesimpulanEqSq(n.siswa.sertifikat.iq);const q=d([{label:"Sangat Kurang Sekali",code:"SKS"},{label:"Kurang Sekali",code:"KS"},{label:"Kurang",code:"K"},{label:"Hampir Cukup",code:"HC"},{label:"Cukup",code:"C"},{label:"Cukup Baik",code:"CB"},{label:"Baik",code:"B"},{label:"Sangat Baik",code:"BS"},{label:"Sangat Baik Sekali",code:"SBS"}]);return(async f=>{try{const k=await I.get(`owner/paket/${f}`);return e.value=k.data,k.data}catch(k){console.error(k)}})(t.value.paket_id),(f,k)=>t.value?(_(),r("div",We,[a("div",Ze,[a("div",as,[a("div",es,[a("div",ss,[a("table",ts,[a("tbody",null,[a("tr",null,[ns,ls,a("td",is,s(t.value.nomeridentitas),1)]),a("tr",null,[_s,rs,a("td",null,s(t.value.nama),1)]),a("tr",null,[os,ds,a("td",null,s(t.value.deteksi.umur),1)]),a("tr",null,[us,ps,a("td",null,s(t.value.jk),1)]),a("tr",null,[ks,cs,a("td",null,s(t.value.sekolah_nama),1)])])])])])])]),hs,a("div",gs,[a("div",vs,[a("div",ws,[a("div",fs,[a("table",bs,[a("tbody",null,[a("tr",null,[qs,ms,ys,a("td",Ss,s(t.value.sertifikat.iq),1),a("td",null,"/ "+s(t.value.iq_ket),1)]),a("tr",null,[xs,$s,Ks,a("td",Is,s(t.value.sertifikat.eq_persen),1),a("td",null,"/ "+s(t.value.eq_persen_keterangan),1)]),a("tr",null,[Bs,js,As,a("td",Cs,s(t.value.sertifikat.scq_persen),1),a("td",null,"/ "+s(t.value.scq_persen_keterangan),1)])])])])])])]),a("div",Ts,[a("div",null,[a("span",Rs,"IV. IQ (KM) 8 Kecerdasan "+s(t.value.sertifikat.iq_persen)+" % Keterangan : "+s(t.value.sertifikat.iqh),1)]),Ps]),a("div",Fs,[a("div",Es,[a("div",Ns,[a("div",Ls,[a("table",Ds,[a("tbody",null,[Ms,(_(!0),r(w,null,b(c.value,(o,y)=>(_(),r("tr",null,[zs,a("td",Qs,s(o.nama),1),a("td",Os,s(y+1),1),(_(!0),r(w,null,b(q.value,h=>(_(),r("td",Hs,[h.code==o.ket||h.altCode==o.ket?(_(),r("span",Us,Vs)):v("",!0)]))),256))]))),256)),a("tr",null,[Xs,Js,Ys,(_(!0),r(w,null,b(q.value,o=>(_(),r("td",Ws,[o.code==t.value.sertifikat.km_p1_keterangan||o.altCode==t.value.sertifikat.km_p1_keterangan?(_(),r("span",Zs,et)):v("",!0)]))),256))]),a("tr",null,[st,tt,nt,(_(!0),r(w,null,b(q.value,o=>(_(),r("td",lt,[o.code==t.value.sertifikat.km_kr_keterangan||o.altCode==t.value.sertifikat.km_kr_keterangan?(_(),r("span",it,rt)):v("",!0)]))),256))]),a("tr",null,[ot,dt,ut,(_(!0),r(w,null,b(q.value,o=>(_(),r("td",pt,[o.code==t.value.sertifikat.km_p9_keterangan||o.altCode==t.value.sertifikat.km_p9_keterangan?(_(),r("span",kt,ht)):v("",!0)]))),256))])])])])])])]),a("div",gt,[a("div",vt,[a("div",wt,[a("div",ft,[a("table",bt,[a("tbody",null,[qt,(_(!0),r(w,null,b(u.value,(o,y)=>(_(),r("tr",null,[a("td",null,s(y+1),1),a("td",mt,s(o.nama),1),a("td",null,s(o.persen),1),a("td",yt,s(o.keterangan),1),a("td",null,s(o.rank),1)]))),256))])])])])]),a("div",St,[a("div",xt,[a("div",$t,[a("table",Kt,[a("tbody",null,[It,(_(!0),r(w,null,b(u.value.slice(0,5),(o,y)=>(_(),r("tr",null,[a("td",null,s(y+1)+".",1),a("td",null,s(o.nama),1)]))),256))])])])]),a("div",Bt,[a("div",jt,[a("table",At,[a("tbody",null,[Ct,(_(!0),r(w,null,b(u.value.slice(0,5),(o,y)=>(_(),r("tr",null,[a("td",null,s(y+1)+".",1),a("td",Tt,s(o.positif_diungkap),1)]))),256))])])])]),a("div",Rt,[a("div",Pt,[a("table",Ft,[a("tbody",null,[Et,(_(!0),r(w,null,b(u.value.slice(0,5),(o,y)=>(_(),r("tr",null,[a("td",null,s(y+1)+".",1),a("td",Nt,s(o.negatif_diungkap),1)]))),256))])])])]),a("div",Lt,[a("div",Dt,[a("table",Mt,[a("tbody",null,[zt,a("tr",null,[Qt,a("td",null,s(t.value.sertifikat.tipe_bakat_1),1)]),a("tr",null,[Ot,a("td",null,s(t.value.sertifikat.tipe_bakat_2),1)]),a("tr",null,[Ht,a("td",null,s(t.value.sertifikat.tipe_bakat_3),1)])])])])]),a("div",Ut,[a("div",Gt,[a("table",Vt,[a("tbody",null,[Xt,a("tr",null,[Jt,a("td",null,s(t.value.sertifikat.minat_pekerjaan_1),1)]),a("tr",null,[Yt,a("td",null,s(t.value.sertifikat.minat_pekerjaan_2),1)]),a("tr",null,[Wt,a("td",null,s(t.value.sertifikat.minat_pekerjaan_3),1)])])])])])])]),Zt,a("div",an,[a("div",null,[a("div",en,[a("p",sn,[tn,a("b",null,s(t.value.iq),1),nn,a("b",null,s(t.value.iq),1),ln,a("b",null,s(t.value.sertifikat.iq_persen)+"%)",1),_n,a("b",null,s(t.value.iqh),1),rn]),c.value.length>7?(_(),r("p",on,[dn,a("b",null,s(c.value[0].nama)+","+s(c.value[1].nama)+", "+s(c.value[2].nama),1),un,a("b",null,s(c.value[6].nama)+" dan "+s(c.value[7].nama),1),pn])):v("",!0),c.value.length>7?(_(),r("p",kn,[cn,a("b",null,s(t.value.eq_persen_keterangan)+",("+s(t.value.sertifikat.eq_persen)+"%)",1),hn,a("b",null,s(t.value.scq_persen_keterangan)+" (ScQ= "+s(t.value.sertifikat.scq_persen)+"%)",1),gn,a("b",null,s(u.value[0].nama)+", "+s(u.value[1].nama)+", "+s(u.value[2].nama)+", "+s(u.value[3].nama)+", "+s(u.value[4].nama),1),vn])):v("",!0),e.value.ist=="Aktif"?(_(),r("div",wn,[a("p",fn,[bn,a("b",null,s(t.value.iq_kesimpulan),1),qn,a("b",null,s(t.value.eqsq_kesimpulan),1),mn]),p.value=="IX"||p.value=="ix"||p.value=="9"?(_(),r("p",yn,[Sn,a("b",null,s(t.value.sertifikat.saran_fakultas_1),1),xn,a("b",null,s(t.value.sertifikat.saran_fakultas_1_prodi),1),$n,a("b",null,s(t.value.sertifikat.saran_fakultas_2),1),Kn,a("b",null,s(t.value.sertifikat.saran_fakultas_2_prodi),1),In])):p.value=="XI"||p.value=="xi"||p.value=="11"||p.value=="12"||p.value=="XII"||p.value=="xii"?(_(),r("p",Bn,[jn,a("b",null,s(t.value.sertifikat.saran_fakultas_1),1),An,a("b",null,s(t.value.sertifikat.saran_fakultas_1_prodi),1),Cn,a("b",null,s(t.value.sertifikat.saran_fakultas_2),1),Tn,a("b",null,s(t.value.sertifikat.saran_fakultas_2_prodi),1)])):v("",!0)])):v("",!0)])]),Rn])])):v("",!0)}},Fn={class:"pt-4 px-10 md:flex justify-between"},En=a("div",null,[a("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"})],-1),Nn={class:"md:py-0 py-4"},Ln=i(" Siswa "),Dn=i(" Edit "),Mn={class:"pt-4 px-10 md:flex justify-between"},zn=a("div",null,[a("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"},"Sertifikat Psikologis ")],-1),Qn={class:"md:py-0 py-4 space-x-2 space-y-2"},On=a("button",{class:"btn hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[a("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),i(" Kembali ")],-1),Hn={key:0},Xn={__name:"Sertifikat",setup(l){D().$subscribe((h,S)=>{}),d([]),M().setsubMenuActive("hasilpsikologi"),z();const u=Q(),c=d([]);d([]);const e=d([]),p=d([]),q=d(),m=d([]),f=d([{nama:""}]),k=d([]),o=d(null);return(async()=>{try{const h=await I.get(`owner/hasilpsikologi/detail/${u.params.id2}`);return c.value=h.data,p.value=h.data,o.value=g.getKelas(h.data.kelas_nama),e.value=h.data.sertifikat,q.value=h.data,h.status=="failed"?(K.danger("Warning","Anda tidak memiliki Akses siswa ini!"),h.data):h.data.sertifikat==null||h.data.deteksi==null?(K.danger("Warning","Data Api Siswa tidak ditemukan!"),h.data):(m.value=[{nama:"Faktor Sikap Dingin",rank:e.value.hspq_a_kr_rank,persen:e.value.hspq_a_kr_persen,ket:e.value.hspq_a_kr_keterangan,positif_diungkap:e.value.hspq_a_kr_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_a_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Emosi Labil",rank:e.value.hspq_c_kr_rank,persen:e.value.hspq_c_kr_persen,ket:e.value.hspq_c_kr_keterangan,positif_diungkap:e.value.hspq_c_kr_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_c_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Sulit Bergairah",rank:e.value.hspq_d_kr_rank,persen:e.value.hspq_d_kr_persen,ket:e.value.hspq_d_kr_keterangan,positif_diungkap:e.value.hspq_d_kr_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_d_kr_aspek_negatif_di_ungkap},{nama:"Faktor Patuh atau Tunduk",rank:e.value.hspq_e_kr_rank,persen:e.value.hspq_e_kr_persen,ket:e.value.hspq_e_kr_keterangan,positif_diungkap:e.value.hspq_e_kr_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_d_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sungguh-sungguh",rank:e.value.hspq_f_kr_rank,persen:e.value.hspq_f_kr_persen,ket:e.value.hspq_f_kr_keterangan,positif_diungkap:e.value.hspq_f_kr_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_f_kr_aspek_negatif_di_ungkap},{nama:"Faktor Menolak Peraturan",rank:e.value.hspq_g_kr_rank,persen:e.value.hspq_g_kr_persen,ket:e.value.hspq_g_kr_keterangan,positif_diungkap:e.value.hspq_g_kr_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_g_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Keras Hati",rank:e.value.hspq_h_kr_rank,persen:e.value.hspq_h_kr_persen,ket:e.value.hspq_h_kr_keterangan,positif_diungkap:e.value.hspq_h_kr_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_h_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Pemalu",rank:e.value.hspq_i_kr_rank,persen:e.value.hspq_i_kr_persen,ket:e.value.hspq_i_kr_keterangan,positif_diungkap:e.value.hspq_i_kr_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_i_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Bersemangat",rank:e.value.hspq_j_kr_rank,persen:e.value.hspq_j_kr_persen,ket:e.value.hspq_j_kr_keterangan,positif_diungkap:e.value.hspq_j_kr_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_j_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Percaya Diri",rank:e.value.hspq_o_kr_rank,persen:e.value.hspq_o_kr_persen,ket:e.value.hspq_o_kr_keterangan,positif_diungkap:e.value.hspq_o_kr_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_o_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Kurang Mandiri",rank:e.value.hspq_q2_kr_rank,persen:e.value.hspq_q2_kr_persen,ket:e.value.hspq_q2_kr_keterangan,positif_diungkap:e.value.hspq_q2_kr_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_q2_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Kurang Disiplin",rank:e.value.hspq_q3_kr_rank,persen:e.value.hspq_q3_kr_persen,ket:e.value.hspq_q3_kr_keterangan,positif_diungkap:e.value.hspq_q3_kr_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_q3_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Rileks atau santai",rank:e.value.hspq_q4_kr_rank,persen:e.value.hspq_q4_kr_persen,ket:e.value.hspq_q4_kr_keterangan,positif_diungkap:e.value.hspq_q4_kr_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_q4_kr_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Hangat",rank:e.value.hspq_a_kn_rank,persen:e.value.hspq_a_kn_persen,ket:e.value.hspq_a_kn_keterangan,positif_diungkap:e.value.hspq_a_kn_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_a_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Emosi Stabil",rank:e.value.hspq_c_kn_rank,persen:e.value.hspq_c_kn_persen,ket:e.value.hspq_c_kn_keterangan,positif_diungkap:e.value.hspq_c_kn_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_c_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Bergairah",rank:e.value.hspq_d_kn_rank,persen:e.value.hspq_d_kn_persen,ket:e.value.hspq_d_kn_keterangan,positif_diungkap:e.value.hspq_d_kn_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_d_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Dominasi",rank:e.value.hspq_e_kn_rank,persen:e.value.hspq_e_kn_persen,ket:e.value.hspq_e_kn_keterangan,positif_diungkap:e.value.hspq_e_kn_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_e_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Keceriaan",rank:e.value.hspq_f_kn_rank,persen:e.value.hspq_f_kn_persen,ket:e.value.hspq_f_kn_keterangan,positif_diungkap:e.value.hspq_f_kn_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_f_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Taat Peraturan",rank:e.value.hspq_g_kn_rank,persen:e.value.hspq_g_kn_persen,ket:e.value.hspq_g_kn_keterangan,positif_diungkap:e.value.hspq_g_kn_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_g_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Lembut Hati / Peka",rank:e.value.hspq_h_kn_rank,persen:e.value.hspq_h_kn_persen,ket:e.value.hspq_h_kn_keterangan,positif_diungkap:e.value.hspq_h_kn_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_h_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Pemberani",rank:e.value.hspq_i_kn_rank,persen:e.value.hspq_i_kn_persen,ket:e.value.hspq_i_kn_keterangan,positif_diungkap:e.value.hspq_i_kn_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_i_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Menarik Diri",rank:e.value.hspq_j_kn_rank,persen:e.value.hspq_j_kn_persen,ket:e.value.hspq_j_kn_keterangan,positif_diungkap:e.value.hspq_j_kn_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_j_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Ketakutan",rank:e.value.hspq_o_kn_rank,persen:e.value.hspq_o_kn_persen,ket:e.value.hspq_o_kn_keterangan,positif_diungkap:e.value.hspq_o_kn_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_o_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Mandiri",rank:e.value.hspq_q2_kn_rank,persen:e.value.hspq_q2_kn_persen,ket:e.value.hspq_q2_kn_keterangan,positif_diungkap:e.value.hspq_q2_kn_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_q2_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Disiplin",rank:e.value.hspq_q3_kn_rank,persen:e.value.hspq_q3_kn_persen,ket:e.value.hspq_q3_kn_keterangan,positif_diungkap:e.value.hspq_q3_kn_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_q3_kn_aspek_negatif_di_ungkap},{nama:"Faktor Sikap Tegang",rank:e.value.hspq_q4_kn_rank,persen:e.value.hspq_q4_kn_persen,ket:e.value.hspq_q4_kn_keterangan,positif_diungkap:e.value.hspq_q4_kn_aspek_positif_di_ungkap,negatif_diungkap:e.value.hspq_q4_kn_aspek_negatif_di_ungkap}],m.value=m.value.map((S,x)=>C(A({},S),{keterangan:g.kepanjangan(S.ket)})),m.value.sort(function(S,x){return S.rank-x.rank}),k.value=[{nama:"Kecerdasan Linguistik",persen:e.value.kb_persen,ket:e.value.kbh},{nama:"Kecerdasan Logis - Matematis",persen:e.value.lm_persen,ket:e.value.lmh},{nama:"Kecerdasan Spasial",persen:e.value.ks_persen,ket:e.value.ksh},{nama:"Kecerdasan Musikal",persen:e.value.km_persen,ket:e.value.kmh},{nama:"Kecerdasan Kinetik",persen:e.value.kk_persen,ket:e.value.kkh},{nama:"Kecerdasan Interpersonal",persen:e.value.ki_persen,ket:e.value.kih},{nama:"Kecerdasan Intrapersonal",persen:e.value.ka_persen,ket:e.value.kah},{nama:"Kecerdasan Natural",persen:e.value.kn_persen,ket:e.value.knh}],f.value=k.value.slice(0),f.value.sort(function(S,x){return x.persen-S.persen}),h.data)}catch(h){K.danger("Warning","Data Siswa tidak ditemukan!"),console.error(h)}})(),u.params.id,u.params.id2,d([{label:"Sangat Kurang Sekali",code:"SKS"},{label:"Kurang Sekali",code:"KS"},{label:"Kurang",code:"K"},{label:"Hampir Cukup",code:"HC"},{label:"Cukup",code:"C"},{label:"Cukup Baik",code:"CB"},{label:"Baik",code:"B"},{label:"Sangat Baik",code:"BS"},{label:"Sangat Baik Sekali",code:"SBS"}]),d([{label:"91-99",ket:"Sangat Tinggi Sekali / Sangat Mengganggu Sekali",kode:"STS"},{label:"81-90",ket:"Tinggi Sekali / Mengganggu Sekali",kode:"TS"},{label:"71-80",ket:"Tinggi / Mengganggu",kode:"T"},{label:"61-70",ket:"Cukup Tinggi / Cukup Mengganggu",kode:"CT"},{label:"41-60",ket:"Cukup / Terkendali",kode:"C"},{label:"31-40",ket:"Agak Rendah / Cukup Terkendali",kode:"AR"},{label:"21-30",ket:"Rendah / Terkendali Baik",kode:"R"},{label:"11-20",ket:"Rendah Sekali / Terkendali Baik Sekali",kode:"RS"},{label:"01-10",ket:"Sangat Rendah Sekali / Sangat Terkendali Baik Sekali",kode:"SRS"}]),(h,S)=>{const x=O("router-link");return _(),r(w,null,[a("div",Fn,[En,a("div",Nn,[$(H,null,{content:T(()=>[Ln,$(U),Dn]),_:1})])]),a("div",Mn,[zn,a("div",Qn,[$(x,{to:{name:"AdminHasilPsikologi"}},{default:T(()=>[On]),_:1})])]),q.value?(_(),r("div",Hn,[q.value.paket_nama!="Premium"?(_(),R(Pn,{key:0,siswa:q.value,aspekKepribadianRank:m.value,temp:f.value,kelas:o.value},null,8,["siswa","aspekKepribadianRank","temp","kelas"])):(_(),R(Ye,{key:1,siswa:q.value,aspekKepribadianRank:m.value,temp:f.value,kelas:o.value},null,8,["siswa","aspekKepribadianRank","temp","kelas"]))])):v("",!0)],64)}}};export{Xn as default};
