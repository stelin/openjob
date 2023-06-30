import{_ as E}from"./preload-helper.101896b7.js";import{h as v,ap as A,ar as S,r as V,K as I,o as L,a9 as a,ac as N,j as w,k as O,D as e,x as t,l as _,B as s,y as F,v as P,C as d,u as j}from"./vue.543fafcc.js";import{u as J}from"./routesList.76e57b72.js";import{J as K}from"./index.4ac74e37.js";import{ay as q}from"./index.070d5527.js";import"./index.3b68140d.js";const G={class:"system-menu-container layout-pd"},H={class:"system-menu-search mb15"},Q={class:"ml10"},U=v({name:"systemMenu"}),ae=v({...U,setup(W){const y=A(()=>E(()=>import("./dialog.10348805.js"),["assets/dialog.10348805.js","assets/preload-helper.101896b7.js","assets/vue.543fafcc.js","assets/routesList.76e57b72.js","assets/index.a654b9cd.js","assets/vue-i18n.cjs.f888bd5c.js","assets/_commonjsHelpers.35101cd5.js","assets/index.18e5bded.js","assets/themeConfig.ab165958.js"])),b=J(),{routesList:g}=S(b),u=V(),r=I({tableData:{data:[],loading:!0}}),p=()=>{r.tableData.loading=!0,r.tableData.data=g.value,setTimeout(()=>{r.tableData.loading=!1},500)},m=l=>{u.value.openDialog(l)},D=(l,i)=>{u.value.openDialog(l,i)},x=l=>{K.confirm(`此操作将永久删除路由：${l.path}, 是否继续?`,"提示",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"}).then(()=>{q.success("删除成功"),p()}).catch(()=>{})};return L(()=>{p()}),(l,i)=>{const C=a("el-input"),k=a("ele-Search"),f=a("el-icon"),c=a("el-button"),B=a("ele-FolderAdd"),T=a("SvgIcon"),n=a("el-table-column"),z=a("el-tag"),M=a("el-table"),R=a("el-card"),$=N("loading");return w(),O("div",G,[e(R,{shadow:"hover"},{default:t(()=>[_("div",H,[e(C,{size:"default",placeholder:"请输入菜单名称",style:{"max-width":"180px"}}),e(c,{size:"default",type:"primary",class:"ml10"},{default:t(()=>[e(f,null,{default:t(()=>[e(k)]),_:1}),s(" 查询 ")]),_:1}),e(c,{size:"default",type:"success",class:"ml10",onClick:m},{default:t(()=>[e(f,null,{default:t(()=>[e(B)]),_:1}),s(" 新增菜单 ")]),_:1})]),F((w(),P(M,{data:r.tableData.data,style:{width:"100%"},"row-key":"path","tree-props":{children:"children",hasChildren:"hasChildren"}},{default:t(()=>[e(n,{label:"菜单名称","show-overflow-tooltip":""},{default:t(o=>[e(T,{name:o.row.meta.icon},null,8,["name"]),_("span",Q,d(l.$t(o.row.meta.title)),1)]),_:1}),e(n,{prop:"path",label:"路由路径","show-overflow-tooltip":""}),e(n,{label:"组件路径","show-overflow-tooltip":""},{default:t(o=>[_("span",null,d(o.row.component),1)]),_:1}),e(n,{label:"权限标识","show-overflow-tooltip":""},{default:t(o=>[_("span",null,d(o.row.meta.roles),1)]),_:1}),e(n,{label:"排序","show-overflow-tooltip":"",width:"80"},{default:t(o=>[s(d(o.$index),1)]),_:1}),e(n,{label:"类型","show-overflow-tooltip":"",width:"80"},{default:t(o=>[e(z,{type:"success",size:"small"},{default:t(()=>[s(d(o.row.xx)+"菜单",1)]),_:2},1024)]),_:1}),e(n,{label:"操作","show-overflow-tooltip":"",width:"140"},{default:t(o=>[e(c,{size:"small",text:"",type:"primary",onClick:i[0]||(i[0]=h=>m("add"))},{default:t(()=>[s("新增")]),_:1}),e(c,{size:"small",text:"",type:"primary",onClick:h=>D("edit",o.row)},{default:t(()=>[s("修改")]),_:2},1032,["onClick"]),e(c,{size:"small",text:"",type:"primary",onClick:h=>x(o.row)},{default:t(()=>[s("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[$,r.tableData.loading]])]),_:1}),e(j(y),{ref_key:"menuDialogRef",ref:u,onRefresh:i[1]||(i[1]=o=>p())},null,512)])}}});export{ae as default};