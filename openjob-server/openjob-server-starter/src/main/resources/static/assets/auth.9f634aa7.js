import{h as t,ar as u,a as m,u as f,m as p,A as c}from"./vue.543fafcc.js";import{u as l}from"./userInfo.2fef1b52.js";import"./storage.b628b270.js";const d=t({name:"auth"}),g=t({...d,props:{value:{type:String,default:()=>""}},setup(s){const o=s,r=l(),{userInfos:a}=u(r),n=m(()=>a.value.authBtnList.some(e=>e===o.value));return(e,i)=>f(n)?p(e.$slots,"default",{key:0}):c("",!0)}});export{g as default};