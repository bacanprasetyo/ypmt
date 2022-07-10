import{_ as A}from"./github-copilot.951fda1a.js";import{B as M}from"./BreadCrumb.47384a78.js";import{F,a as w}from"./vee-validate.esm.8976f289.js";import{b as $,c as K,u as z,a as G,d as f,r as u,j as H,o as r,e as c,f as s,g as _,w as y,n as B,h as p,p as T,t as h,F as J,i as k,A as g,T as n}from"./index.156f8da1.js";import{m as Q,l as X}from"./id.a01925db.js";const Y={class:"pt-4 px-10 md:flex justify-between"},Z=s("div",null,[s("span",{class:"text-2xl sm:text-3xl leading-none font-bold text-base-content shadow-sm"},"Profile")],-1),ss={class:"md:py-0 py-4"},ts=k(" Profile "),es=k(" Index "),as=s("div",{class:"px-4 pt-10"},[s("h3",{class:"font-bold"},"UPDATE DATA ADMINISTRATOR")],-1),os={class:"px-4 py-0"},ls={class:"w-full"},ns={class:"bg-base-100 shadow-lg rounded-lg px-0 py-0"},rs={class:"w-full lg:w-fi mx-0"},ds={class:"p-2 sm:p-6 xl:p-8"},is={class:"pt-0 px-0"},cs={class:"w-full mx-0"},us={class:"rounded-lg p-0 sm:p-6 xl:p-0"},ps={class:"grid md:grid-cols-2 gap-2"},ms=s("label",{for:"name",class:"text-sm font-medium text-base-content block mb-2"},"Nama",-1),_s={class:"text-xs text-red-600 mt-1"},fs=s("div",{class:"w-full flex justify-end mt-4 px-20"},[s("button",{class:"btn btn-lg btn-primary"},"Simpan")],-1),hs=s("div",{class:"px-4 py-10"},[s("h3",{class:"font-bold"},"UPDATE PASSWORD")],-1),gs={class:"px-4 py-0 shadow-lg"},vs={class:"w-full"},xs={class:"bg-base-100 shadow rounded-lg px-0 py-0"},bs={class:"w-full lg:w-fi mx-0"},ws={class:"p-2 sm:p-6 xl:p-8"},ys={class:"pt-0 px-0"},ks={class:"w-full mx-0"},Ss={class:"rounded-lg p-0 sm:p-6 xl:p-0"},Ds={class:"grid md:grid-cols-2 gap-2"},Ps=s("label",{for:"password",class:"text-sm font-medium text-base-content block mb-2"},"Password",-1),Fs={class:"text-xs text-red-600 mt-1"},Bs=s("label",{for:"password2",class:"text-sm font-medium text-base-content block mb-2"},"Konfirmasi Password",-1),Ts={class:"text-xs text-red-600 mt-1"},As={class:"w-full flex justify-end mt-4 px-20 gap-4"},Vs=s("div",{class:"collapse collapse-arrow shadow-sm border border-spacing-1"},[s("input",{type:"checkbox"}),s("div",{class:"collapse-title text-md font-bold"}," Catatan : "),s("div",{class:"collapse-content text-sm"},[s("p",null,"# Minimal 3 Karakter")])],-1),Cs={key:0,class:"btn btn-lg btn-primary"},Us=s("div",{class:"px-4 py-4"},[s("h3",{class:"font-bold"},"UPDATE PHOTO")],-1),js={class:"w-full flex justify-center flex-wrap"},Ls={class:"xl:flex felx-wrap gap-10 xl:w-full px-4 justify-center space-y-4"},Is={class:"card xl:w-2/5 bg-base-100 shadow-xl"},Os={class:"w-full flex justify-center"},qs={class:"avatar hover:scale-110 transition-all duration-500",for:"my-modal-1"},Rs={class:"w-52 mask mask-squircle"},Ns=["src"],Ws={key:1,src:A},Es=s("input",{type:"checkbox",id:"my-modal-1",class:"modal-toggle"},null,-1),Ms={for:"my-modal-1",class:"modal cursor-pointer"},$s={class:"modal-box relative",for:""},Ks=["src"],zs={key:1,src:A},Gs={class:"card-body items-center text-center"},Hs={class:"card-title"},Js=s("div",{class:"card-actions"},null,-1),Qs={class:"px-10 pt-2"},Xs=s("p",{class:"text-sm font-bold"},"Pilih Logo :",-1),Ys={class:"flex justify-end px-10 pb-4"},Zs=s("div",{class:"collapse collapse-arrow shadow-sm border border-spacing-1"},[s("input",{type:"checkbox"}),s("div",{class:"collapse-title text-md font-bold"},"Catatan Upload PHOTO:"),s("div",{class:"collapse-content text-sm"},[s("p",null,"# Extensi : .jpg / .png"),s("p",null,[k("# Max Size : 1 MB"),s("br")])])],-1),dt={__name:"MyProfile",setup(st){$(),K(),Q.updateLocale("id",X);const m=z();G().setPagesActive("profile"),f(()=>m.getPaket),f(()=>m.getStats);const V=f(()=>m.getIdentitas),C=f(()=>m.getSekolah),S=u([]),v=u({nama:V.value.nama}),U=e=>e?e.length<1?"This Field must be at least 2 characters":!0:"This field is required";m.$subscribe((e,t)=>{});const j=()=>{L()},L=async e=>{let t={nama:v.value.nama};try{const a=await g.post("owner/myprofile/update",t);return n.success("Success","Data Berhasil update!"),a.data}catch(a){n.danger("Warning","Data gagal ditambahkan!"),console.error(a)}},x=u(!1),I=()=>{n.warning("Info","Gagal! Password tidak sama!")},d=u({password:"",password_confirmation:""}),D=()=>{d.value.password!=""&&(d.value.password!=d.value.password_confirmation?x.value=!1:x.value=!0)},P=e=>e?e.length<3?"This Field must be at least 2 characters":!0:"This field is required",O=()=>{q()},q=async e=>{let t={password:d.value.password};try{const a=await g.post("owner/myprofile/updatepassword",t);return n.success("Success","Data Berhasil update!"),a.data}catch(a){n.danger("Warning","Data gagal ditambahkan!"),console.error(a)}},R=e=>e?e.size>1048576?(n.danger("Warning","File harus kurang dari 1mb!"),!1):e.type!="image/jpeg"&&e.type!="image/png"?(n.danger("Warning","File harus jpg/png!"),!1):!0:(n.danger("Info","Pilih File terlebih dahulu!"),!1),N=async(e,t)=>{let a="";t=="logo"?a="owner/myprofile/upload/logo":t=="kepala"?a="owner/myprofile/upload/kepala":a="owner/myprofile/upload/user";let l=new FormData;l.append("file",e);try{const o=await g.post(a,l,{headers:{"Content-Type":"multipart/form-data"}});return n.success("Success","Data Berhasil update!"),console.log(o),o.data}catch(o){n.danger("Warning","Data gagal ditambahkan!"),console.error(o)}},i=u(null),b=u(null),W=()=>{R(b.value)&&N(b.value,"logo")},E=e=>{let t=e.target.files[0];b.value=t,i.value=URL.createObjectURL(t),console.log(t,i.value)};return(async()=>{try{const e=await g.get("owner/myprofile/upload/getphoto");return i.value=e.data.logo,e.data}catch(e){console.error(e)}})(),(e,t)=>{const a=H("BreadCrumbSpace");return r(),c(J,null,[s("div",Y,[Z,s("div",ss,[_(M,null,{content:y(()=>[ts,_(a),es]),_:1})])]),as,s("div",os,[s("div",ls,[s("div",ns,[s("div",rs,[s("div",ds,[S.value?(r(),B(p(F),{key:0,onSubmit:j},{default:y(({errors:l})=>[s("div",is,[s("div",cs,[s("div",us,[s("div",ps,[s("div",null,[ms,_(p(w),{modelValue:v.value.nama,"onUpdate:modelValue":t[0]||(t[0]=o=>v.value.nama=o),rules:U,type:"text",name:"nama",ref:"nama",class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),s("div",_s,h(l.nama),1)])]),fs])])])]),_:1})):T("",!0)])])])])]),hs,s("div",gs,[s("div",vs,[s("div",xs,[s("div",bs,[s("div",ws,[S.value?(r(),B(p(F),{key:0,onSubmit:O},{default:y(({errors:l})=>[s("div",ys,[s("div",ks,[s("div",Ss,[s("div",Ds,[s("div",null,[Ps,_(p(w),{modelValue:d.value.password,"onUpdate:modelValue":t[1]||(t[1]=o=>d.value.password=o),rules:P,type:"password",name:"password",ref:"password",class:"input input-bordered md:w-full max-w-2xl",onKeyup:t[2]||(t[2]=o=>D()),required:""},null,8,["modelValue"]),s("div",Fs,h(l.password),1)]),s("div",null,[Bs,_(p(w),{modelValue:d.value.password_confirmation,"onUpdate:modelValue":t[3]||(t[3]=o=>d.value.password_confirmation=o),rules:P,type:"password",name:"password_confirmation",ref:"password_confirmation",onKeyup:t[4]||(t[4]=o=>D()),class:"input input-bordered md:w-full max-w-2xl",required:""},null,8,["modelValue"]),s("div",Ts,h(l.password_confirmation),1)])]),s("div",As,[Vs,x.value?(r(),c("button",Cs," Simpan ")):(r(),c("span",{key:1,class:"btn btn-lg btn-dark",onClick:t[5]||(t[5]=o=>I())}," Simpan "))])])])])]),_:1})):T("",!0)])])])])]),Us,s("div",js,[s("div",Ls,[s("div",Is,[s("div",Os,[s("label",qs,[s("div",Rs,[i.value?(r(),c("img",{key:0,src:i.value},null,8,Ns)):(r(),c("img",Ws))])])]),Es,s("label",Ms,[s("label",$s,[i.value?(r(),c("img",{key:0,src:i.value},null,8,Ks)):(r(),c("img",zs))])]),s("div",Gs,[s("h2",Hs,h(p(C).nama),1),Js]),s("div",Qs,[Xs,s("input",{type:"file",name:"photoLogoSekolah",onChange:t[6]||(t[6]=l=>E(l)),class:"input md:w-full max-w-2xl",required:""},null,32)]),s("div",Ys,[s("button",{class:"btn btn-lg btn-primary",onClick:t[7]||(t[7]=l=>W())}," UPLOAD ")])])])]),Zs],64)}}};export{dt as default};
