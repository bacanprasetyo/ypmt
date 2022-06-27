import{a as x,b as w,c as m,r as n,o as d,f as i,g as e,h as u,w as v,t as a,F as o,Q as r,k as f,R as y,T as p,p as b}from"./index.59165bd9.js";import{B as S,a as T}from"./BreadCrumbSpace.2547de69.js";const A={class:"pt-4 px-10 md:flex justify-between"},N=e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"})],-1),R={class:"md:py-0 py-4"},C=b(" Deteksi "),B=e("div",{class:"pt-4 px-10 md:flex justify-between"},[e("div",null,[e("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"},"Deteksi Psikologis")]),e("div",{class:"md:py-0 py-4 space-x-2 space-y-2"})],-1),I={key:0},D={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},j={class:"w-full lg:w-full"},E={class:"bg-white shadow rounded-lg px-4 py-4"},K={class:"overflow-x-auto"},M={class:"table table-compact"},G=e("td",{class:"whitespace-nowrap w-1/12"},"No Induk",-1),P=e("td",{class:"whitespace-nowrap w-1/12"},":",-1),Q={class:"whitespace-nowrap w-10/12"},q=e("td",null,"Nama",-1),V=e("td",null,":",-1),F=e("td",null,"Umur",-1),L=e("td",null,":",-1),U=e("td",null,"Jenis Kelamin",-1),W=e("td",null,":",-1),J=e("td",null,"Sekolah",-1),z=e("td",null,":",-1),H=e("div",{class:"pt-4 px-10 md:flex justify-between"},[e("div",null,[e("span",{class:"text-2xl sm:text-2xl leading-none font-bold text-gray-700 shadow-sm"},"1.Deteksi Gangguan Masalah")]),e("div",{class:"md:py-0 py-4 space-x-2 space-y-2"})],-1),O={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},X={class:"w-full lg:w-full"},Y={class:"bg-white shadow rounded-lg px-4 py-4"},Z={class:"overflow-x-auto"},$={class:"table table-compact w-full"},ee=e("tr",null,[e("th",{class:"whitespace-nowrap w-1/100"},"No"),e("th",{class:"whitespace-nowrap w-5/12"},"Gangguan Karakter"),e("th",{class:"whitespace-nowrap w-1/100"},"Rank"),e("th",{class:"whitespace-nowrap w-1/100"},"%"),e("th",{class:"whitespace-nowrap w-1/100"},"ket"),e("th",{class:"whitespace-nowrap w-5/12"})],-1),ae=["value"],te=e("div",{class:"pt-4 px-10 md:flex justify-between"},[e("div",null,[e("span",{class:"text-2xl sm:text-2xl leading-none font-bold text-gray-700 shadow-sm"},"KETERANGAN NEGATIF")]),e("div",{class:"md:py-0 py-4 space-x-2 space-y-2"})],-1),se={class:"md:py-2 px-4 lg:flex flex-wrap gap-4"},le={class:"w-full lg:w-full"},ne={class:"bg-white shadow rounded-lg px-4 py-4"},de={class:"overflow-x-auto"},ie={class:"table table-compact w-full"},oe=e("tr",null,[e("th",{class:"whitespace-nowrap w-1/100"},"Range"),e("th",{class:"whitespace-nowrap w-1/100"},":"),e("th",{class:"whitespace-nowrap w-full"},"Keterangan")],-1),ce={class:"text-center"},ue=e("td",null,":",-1),re=e("div",{class:"pt-4 px-10 md:flex justify-between"},[e("div",null,[e("span",{class:"text-2xl sm:text-xl leading-none font-bold text-gray-600 shadow-sm"},"KESIMPULAN DAN SARAN")]),e("div",{class:"md:py-0 py-4 space-x-2 space-y-2"})],-1),pe={class:"pt-4 px-10 md:flex justify-between"},_e={class:"text-2xl sm:text-xl leading-none font-bold text-gray-600 shadow-sm"},ke=e("div",{class:"md:py-0 py-4 space-x-2 space-y-2"},null,-1),ge={class:"pt-4 px-10 md:flex justify-between"},he={class:"text-2xl sm:text-xl leading-none font-bold text-gray-600 shadow-sm"},xe=e("div",{class:"md:py-0 py-4 space-x-2 space-y-2"},null,-1),we={class:"pt-4 px-10 md:flex justify-between"},me={class:"text-2xl sm:text-xl leading-none font-bold text-gray-600 shadow-sm"},ve=e("div",{class:"md:py-0 py-4 space-x-2 space-y-2"},null,-1),Ne={__name:"Deteksi",setup(fe){x().setPagesActive("deteksi"),w();const _=m(),k=n([]);n([]),n([]);const g=n([]),t=n();(async()=>{try{const s=await y.get("ortu/data/sertifikat");return k.value=s.data,g.value=s.data,t.value=s.data,s.status=="failed"?(p.danger("Warning","Anda tidak memiliki Akses siswa ini!"),s.data):((s.data.sertifikat==null||s.data.deteksi==null)&&p.danger("Warning","Data Api Siswa tidak ditemukan!"),s.data)}catch(s){console.error(s)}})(),_.params.id;const h=n([{label:"91-99",ket:"Sangat Tinggi Sekali / Sangat Mengganggu Sekali",kode:"STS"},{label:"81-90",ket:"Tinggi Sekali / Mengganggu Sekali",kode:"TS"},{label:"71-80",ket:"Tinggi / Mengganggu",kode:"T"},{label:"61-70",ket:"Cukup Tinggi / Cukup Mengganggu",kode:"CT"},{label:"41-60",ket:"Cukup / Terkendali",kode:"C"},{label:"31-40",ket:"Agak Rendah / Cukup Terkendali",kode:"AR"},{label:"21-30",ket:"Rendah / Terkendali Baik",kode:"R"},{label:"11-20",ket:"Rendah Sekali / Terkendali Baik Sekali",kode:"RS"},{label:"01-10",ket:"Sangat Rendah Sekali / Sangat Terkendali Baik Sekali",kode:"SRS"}]);return(s,Se)=>(d(),i(o,null,[e("div",A,[N,e("div",R,[u(S,null,{content:v(()=>[C,u(T)]),_:1})])]),B,t.value?(d(),i("div",I,[e("div",D,[e("div",j,[e("div",E,[e("div",K,[e("table",M,[e("tbody",null,[e("tr",null,[G,P,e("td",Q,a(t.value.nomeridentitas),1)]),e("tr",null,[q,V,e("td",null,a(t.value.nama),1)]),e("tr",null,[F,L,e("td",null,a(t.value.deteksi.umur),1)]),e("tr",null,[U,W,e("td",null,a(t.value.jk),1)]),e("tr",null,[J,z,e("td",null,a(t.value.sekolah_nama),1)])])])])])])]),H,e("div",O,[e("div",X,[e("div",Y,[e("div",Z,[e("table",$,[e("tbody",null,[ee,(d(!0),i(o,null,r(t.value.deteksi.apiprobk_deteksi_list.slice(0,79),(l,c)=>(d(),i("tr",{class:"hover",key:l.id},[e("td",null,a(c+1),1),e("td",null,a(l.deteksi_nama),1),e("td",null,a(l.deteksi_rank),1),e("td",null,a(l.deteksi_score),1),e("td",null,a(l.deteksi_keterangan),1),e("td",null,[e("progress",{class:"progress progress-info w-full",value:l.deteksi_score,max:"100"},null,8,ae)])]))),128))])])])])])]),te,e("div",se,[e("div",le,[e("div",ne,[e("div",de,[e("table",ie,[e("tbody",null,[oe,(d(!0),i(o,null,r(h.value,(l,c)=>(d(),i("tr",null,[e("td",ce,a(l.label),1),ue,e("td",null,a(l.ket)+" ("+a(l.kode)+")",1)]))),256))])])])])])]),re,e("div",pe,[e("div",null,[e("span",_e,"II. EQ (Emotional Quotient): "+a(t.value.deteksi.deteksi_eq_total_persen)+" "+a(t.value.deteksi.deteksi_eq_total_keterangan),1)]),ke]),e("div",ge,[e("div",null,[e("span",he,"III. SCQ (Social Quotient): "+a(t.value.deteksi.deteksi_scq_total_persen)+" "+a(t.value.deteksi.deteksi_scq_total_keterangan),1)]),xe]),e("div",we,[e("div",null,[e("span",me,"Saat ini anda memiliki Gangguan Karakter :"+a(t.value.deteksi.deteksi_total_persen)+" "+a(t.value.deteksi.deteksi_total_keterangan)+" yang dapat menimbulkan masalah dan mengganggu aktivitas usaha anda dalam mencapai keberhasilan. Sedangkan karakter negatif yang perlu anda kendalikan dan bersifat merugikan di antaranya yaitu dalam Posisi Nilai Cukup Tinggi ke atas sampai nilai Sangat Tinggi Sekali, nilai Cukup perlu diperhatikan dikhawatirkan suatu saat akan mengalami perubahan meningkat.",1)]),ve])])):f("",!0)],64))}};export{Ne as default};
