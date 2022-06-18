import{a as y,b as f,c as b,r as n,o,e as i,f as e,g as h,w as S,h as T,t,F as d,s as k,n as A,A as C,T as g,i as c}from"./index.2bd312bc.js";import{B as N,a as R}from"./BreadCrumbSpace.2c4184a4.js";const B={class:"pt-4 px-10 md:flex justify-between"},I=e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"})],-1),j={class:"md:py-0 py-4"},D=c(" Siswa "),E=c(" Edit "),K={class:"pt-4 px-10 md:flex justify-between"},M=e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"},"Deteksi Psikologis")],-1),G={class:"md:py-0 py-4 space-x-2 space-y-2"},P=e("button",{class:"btn hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),c(" Kembali ")],-1),q=[P],L={key:0},Q={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},V={class:"w-full lg:w-full"},F={class:"bg-white shadow rounded-lg px-4 py-4"},U={class:"overflow-x-auto"},W={class:"table table-compact"},$=e("td",{class:"whitespace-nowrap w-1/12"},"No Induk",-1),z=e("td",{class:"whitespace-nowrap w-1/12"},":",-1),J={class:"whitespace-nowrap w-10/12"},H=e("td",null,"Nama",-1),O=e("td",null,":",-1),X=e("td",null,"Umur",-1),Y=e("td",null,":",-1),Z=e("td",null,"Jenis Kelamin",-1),ee=e("td",null,":",-1),te=e("td",null,"Sekolah",-1),ae=e("td",null,":",-1),se=e("div",{class:"pt-4 px-10 md:flex justify-between"},[e("div",null,[e("span",{class:"text-2xl sm:text-2xl leading-none font-bold text-gray-700 shadow-sm"},"1.Deteksi Gangguan Masalah")]),e("div",{class:"md:py-0 py-4 space-x-2 space-y-2"})],-1),le={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},ne={class:"w-full lg:w-full"},oe={class:"bg-white shadow rounded-lg px-4 py-4"},ie={class:"overflow-x-auto"},de={class:"table table-compact w-full"},ce=e("tr",null,[e("th",{class:"whitespace-nowrap w-1/100"},"No"),e("th",{class:"whitespace-nowrap w-5/12"},"Gangguan Karakter"),e("th",{class:"whitespace-nowrap w-1/100"},"Rank"),e("th",{class:"whitespace-nowrap w-1/100"},"%"),e("th",{class:"whitespace-nowrap w-1/100"},"ket"),e("th",{class:"whitespace-nowrap w-5/12"})],-1),ue=["value"],re=e("div",{class:"pt-4 px-10 md:flex justify-between"},[e("div",null,[e("span",{class:"text-2xl sm:text-2xl leading-none font-bold text-gray-700 shadow-sm"},"KETERANGAN NEGATIF")]),e("div",{class:"md:py-0 py-4 space-x-2 space-y-2"})],-1),pe={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},_e={class:"w-full lg:w-full"},he={class:"bg-white shadow rounded-lg px-4 py-4"},ke={class:"overflow-x-auto"},ge={class:"table table-compact w-full"},we=e("tr",null,[e("th",{class:"whitespace-nowrap w-1/100"},"Range"),e("th",{class:"whitespace-nowrap w-1/100"},":"),e("th",{class:"whitespace-nowrap w-full"},"Keterangan")],-1),xe={class:"text-center"},me=e("td",null,":",-1),ve=e("div",{class:"pt-4 px-10 md:flex justify-between"},[e("div",null,[e("span",{class:"text-2xl sm:text-xl leading-none font-bold text-gray-600 shadow-sm"},"KESIMPULAN DAN SARAN")]),e("div",{class:"md:py-0 py-4 space-x-2 space-y-2"})],-1),ye={class:"pt-4 px-10 md:flex justify-between"},fe={class:"text-2xl sm:text-xl leading-none font-bold text-gray-600 shadow-sm"},be=e("div",{class:"md:py-0 py-4 space-x-2 space-y-2"},null,-1),Se={class:"pt-4 px-10 md:flex justify-between"},Te={class:"text-2xl sm:text-xl leading-none font-bold text-gray-600 shadow-sm"},Ae=e("div",{class:"md:py-0 py-4 space-x-2 space-y-2"},null,-1),Ce={class:"pt-4 px-10 md:flex justify-between"},Ne={class:"text-2xl sm:text-xl leading-none font-bold text-gray-600 shadow-sm"},Re=e("div",{class:"md:py-0 py-4 space-x-2 space-y-2"},null,-1),Ee={__name:"Deteksi",setup(Be){const u=y();u.setPagesActive("sekolah"),u.setsubMenuActive("hasilpsikologi");const w=f(),r=b(),x=n([]);n([]),n([]);const m=n([]),a=n();(async()=>{try{const s=await C.get(`yayasan/hasilpsikologi/detail/${r.params.id}`);return x.value=s.data,m.value=s.data,a.value=s.data,s.status=="failed"?(g.danger("Warning","Anda tidak memiliki Akses siswa ini!"),s.data):((s.data.sertifikat==null||s.data.deteksi==null)&&g.danger("Warning","Data Api Siswa tidak ditemukan!"),s.data)}catch(s){console.error(s)}})(),r.params.id;const v=n([{label:"91-99",ket:"Sangat Tinggi Sekali / Sangat Mengganggu Sekali",kode:"STS"},{label:"81-90",ket:"Tinggi Sekali / Mengganggu Sekali",kode:"TS"},{label:"71-80",ket:"Tinggi / Mengganggu",kode:"T"},{label:"61-70",ket:"Cukup Tinggi / Cukup Mengganggu",kode:"CT"},{label:"41-60",ket:"Cukup / Terkendali",kode:"C"},{label:"31-40",ket:"Agak Rendah / Cukup Terkendali",kode:"AR"},{label:"21-30",ket:"Rendah / Terkendali Baik",kode:"R"},{label:"11-20",ket:"Rendah Sekali / Terkendali Baik Sekali",kode:"RS"},{label:"01-10",ket:"Sangat Rendah Sekali / Sangat Terkendali Baik Sekali",kode:"SRS"}]);return(s,p)=>(o(),i(d,null,[e("div",B,[I,e("div",j,[h(N,null,{content:S(()=>[D,h(R),E]),_:1})])]),e("div",K,[M,e("div",G,[e("span",{onClick:p[0]||(p[0]=l=>T(w).go(-1))},q)])]),a.value?(o(),i("div",L,[e("div",Q,[e("div",V,[e("div",F,[e("div",U,[e("table",W,[e("tbody",null,[e("tr",null,[$,z,e("td",J,t(a.value.nomeridentitas),1)]),e("tr",null,[H,O,e("td",null,t(a.value.nama),1)]),e("tr",null,[X,Y,e("td",null,t(a.value.deteksi.umur),1)]),e("tr",null,[Z,ee,e("td",null,t(a.value.jk),1)]),e("tr",null,[te,ae,e("td",null,t(a.value.sekolah_nama),1)])])])])])])]),se,e("div",le,[e("div",ne,[e("div",oe,[e("div",ie,[e("table",de,[e("tbody",null,[ce,(o(!0),i(d,null,k(a.value.deteksi.apiprobk_deteksi_list.slice(0,79),(l,_)=>(o(),i("tr",{class:"hover",key:l.id},[e("td",null,t(_+1),1),e("td",null,t(l.deteksi_nama),1),e("td",null,t(l.deteksi_rank),1),e("td",null,t(l.deteksi_score),1),e("td",null,t(l.deteksi_keterangan),1),e("td",null,[e("progress",{class:"progress progress-info w-full",value:l.deteksi_score,max:"100"},null,8,ue)])]))),128))])])])])])]),re,e("div",pe,[e("div",_e,[e("div",he,[e("div",ke,[e("table",ge,[e("tbody",null,[we,(o(!0),i(d,null,k(v.value,(l,_)=>(o(),i("tr",null,[e("td",xe,t(l.label),1),me,e("td",null,t(l.ket)+" ("+t(l.kode)+")",1)]))),256))])])])])])]),ve,e("div",ye,[e("div",null,[e("span",fe,"II. EQ (Emotional Quotient): "+t(a.value.deteksi.deteksi_eq_total_persen)+" "+t(a.value.deteksi.deteksi_eq_total_keterangan),1)]),be]),e("div",Se,[e("div",null,[e("span",Te,"III. SCQ (Social Quotient): "+t(a.value.deteksi.deteksi_scq_total_persen)+" "+t(a.value.deteksi.deteksi_scq_total_keterangan),1)]),Ae]),e("div",Ce,[e("div",null,[e("span",Ne,"Saat ini anda memiliki Gangguan Karakter :"+t(a.value.deteksi.deteksi_total_persen)+" "+t(a.value.deteksi.deteksi_total_keterangan)+" yang dapat menimbulkan masalah dan mengganggu aktivitas usaha anda dalam mencapai keberhasilan. Sedangkan karakter negatif yang perlu anda kendalikan dan bersifat merugikan di antaranya yaitu dalam Posisi Nilai Cukup Tinggi ke atas sampai nilai Sangat Tinggi Sekali, nilai Cukup perlu diperhatikan dikhawatirkan suatu saat akan mengalami perubahan meningkat.",1)]),Re])])):A("",!0)],64))}};export{Ee as default};
