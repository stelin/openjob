import{_ as t}from"./preload-helper.101896b7.js";import{h as r,ap as s,ar as _,b as m,a4 as d,j as c,v as f,z as p,u as y}from"./vue.bd0669ce.js";import{u as v}from"./themeConfig.cb88f033.js";import{L as a}from"./storage.b628b270.js";import{e as n}from"./mitt.7f99bbc0.js";const L=r({name:"layout"}),A=r({...L,setup(E){const u={defaults:s(()=>t(()=>import("./defaults.dd902c02.js"),["assets/defaults.dd902c02.js","assets/preload-helper.101896b7.js","assets/vue.bd0669ce.js","assets/themeConfig.cb88f033.js","assets/loading.3e617409.js","assets/loading.70fbfd85.css"])),classic:s(()=>t(()=>import("./classic.9b428667.js"),["assets/classic.9b428667.js","assets/preload-helper.101896b7.js","assets/vue.bd0669ce.js","assets/themeConfig.cb88f033.js"])),transverse:s(()=>t(()=>import("./transverse.d923b61c.js"),["assets/transverse.d923b61c.js","assets/preload-helper.101896b7.js","assets/vue.bd0669ce.js","assets/themeConfig.cb88f033.js"])),columns:s(()=>t(()=>import("./columns.7f36d57d.js"),["assets/columns.7f36d57d.js","assets/preload-helper.101896b7.js","assets/vue.bd0669ce.js","assets/themeConfig.cb88f033.js"]))},l=v(),{themeConfig:e}=_(l),i=()=>{a.get("oldLayout")||a.set("oldLayout",e.value.layout);const o=document.body.clientWidth;o<1e3?(e.value.isCollapse=!1,n.emit("layoutMobileResize",{layout:"defaults",clientWidth:o})):n.emit("layoutMobileResize",{layout:a.get("oldLayout")?a.get("oldLayout"):e.value.layout,clientWidth:o})};return m(()=>{i(),window.addEventListener("resize",i)}),d(()=>{window.removeEventListener("resize",i)}),(o,R)=>(c(),f(p(u[y(e).layout])))}});export{A as default};