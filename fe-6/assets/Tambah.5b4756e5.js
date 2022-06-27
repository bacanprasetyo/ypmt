import{u as f,d as g,a as w,b as k,c as y,r as i,o as j,e as B,f as t,g as n,w as m,h as _,F as S,A as D,T as p,x as h,Y as A,t as x,y as T,i as d}from"./index.127bc060.js";import{B as C,a as F}from"./BreadCrumbSpace.79d12274.js";import{F as V}from"./vee-validate.esm.e44cb252.js";const K={class:"pt-4 px-10 md:flex justify-between"},P=t("div",null,[t("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"}," Klasifikasi Akademis & Profesi ")],-1),M={class:"md:py-0 py-4"},N=d(" Klasifikasi "),E=d(" Edit "),G={class:"pt-4 px-10 md:flex justify-between"},L=t("div",null,[t("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-gray-700 shadow-sm"})],-1),R={class:"md:py-0 py-4 space-x-2 space-y-2"},U=t("button",{class:"btn hover:shadow-lg shadow text-white hover:text-gray-100 gap-2"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})]),d(" Kembali ")],-1),$=[U],q={class:"px-4 py-4"},z={class:"w-full"},I={class:"bg-white shadow rounded-lg px-0 py-4"},J={class:"w-full lg:w-fi mx-4"},W={class:"p-2 sm:p-6 xl:p-8"},Y={class:"pt-0 px-0"},H={class:"w-full mx-0"},O={class:"bg-white rounded-lg p-0 sm:p-6 xl:p-0"},Q={class:"grid md:grid-cols-2 gap-2"},X={class:"grid col-span-2"},Z=t("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Judul",-1),tt={class:"text-xs text-red-600 mt-1"},st=t("label",{for:"name",class:"text-sm font-medium text-gray-900 block mb-2"},"Status",-1),et=t("option",{disabled:"",selected:""},"Pilih ?",-1),at=t("option",null,"Ditampilkan",-1),ot=t("option",null,"Disembunyikan",-1),lt=[et,at,ot],it={class:"text-xs text-red-600 mt-1"},nt=t("div",{class:"w-full flex justify-end mt-4 px-20"},[t("button",{class:"btn btn-active btn-lg btn-primary"}," Simpan ")],-1),pt={__name:"Tambah",setup(dt){const r=f();g(()=>r.getSekolah),r.$subscribe((o,s)=>{}),w().setPagesActive("katabijak");const c=k();y().params.id,i([]);const a=i([]);i([]);const u=o=>o?o.length<1?"This Field must be at least 2 characters":!0:"This field is required",b=()=>{v()},v=async o=>{let s={judul:a.value.judul,status:a.value.status};try{const e=await D.post("owner/katabijak",s);return p.success("Success","Data Berhasil ditambahkan!"),c.push({name:"AdminKatabijak"}),e.data}catch(e){p.danger("Warning","Data gagal ditambahkan!"),console.error(e)}};return(o,s)=>(j(),B(S,null,[t("div",K,[P,t("div",M,[n(C,null,{content:m(()=>[N,n(F),E]),_:1})])]),t("div",G,[L,t("div",R,[t("span",{onClick:s[0]||(s[0]=e=>_(c).go(-1))},$)])]),t("div",q,[t("div",z,[t("div",I,[t("div",J,[t("div",W,[n(_(V),{onSubmit:b},{default:m(({errors:e})=>[t("div",Y,[t("div",H,[t("div",O,[t("div",Q,[t("div",X,[Z,h(t("textarea",{"onUpdate:modelValue":s[1]||(s[1]=l=>a.value.judul=l),rules:u,name:"judul",ref:"judul",class:"textarea textarea-bordered md:w-full max-w-2xl",placeholder:""},null,512),[[A,a.value.judul]]),t("div",tt,x(e.judul),1)]),t("div",null,[st,h(t("select",{class:"select select-bordered w-full max-w-xs","onUpdate:modelValue":s[2]||(s[2]=l=>a.value.status=l),rules:u},lt,512),[[T,a.value.status]]),t("div",it,x(e.status),1)])]),nt])])])]),_:1})])])])])])],64))}};export{pt as default};
