import{s as l}from"./subPageHero.d6963c7b.js";import{_ as i,g as r,o as _,c as d,a as s,b as e,d as p,Q as n,w as u,C as m,F as h,p as f,f as w}from"./index.6586212f.js";import{B as g}from"./breadCrumb.dcd65122.js";const o=t=>(f("data-v-f00cd267"),t=t(),w(),t),v={id:"",class:"web-common-inner common-main-section"},x={id:"newswr-detail"},b=o(()=>e("input",{type:"text",placeholder:"\uC81C\uBAA9\uC785\uB825",class:"editor-title"},null,-1)),y=o(()=>e("div",{class:"news-name-url-box"},[e("input",{type:"text",placeholder:"\uB274\uC2A4\uC0AC \uBA85",class:"c-name"}),e("input",{type:"text",placeholder:"\uB274\uC2A4 URL",class:"c-url"})],-1)),k={class:"editorWr"},B={class:"mt-20 text-center flex gap-2 justify-center"},C=o(()=>e("button",{class:"all-btn"},"\uCDE8\uC18C",-1)),I={components:{QuillEditor:n},data(){return{editorOption:{placeholder:"\uB0B4\uC6A9\uC77C \uC785\uB825\uD558\uC138\uC694",modules:{toolbar:[[{size:["small",!1,"large","huge"]}],["bold","italic","underline","strike"],["image","video"]],syntax:{highlight:t=>hljs.highlightAuto(t).value}}},content:""}}},j=Object.assign(I,{__name:"news_wr",setup(t){return(a,N)=>{const c=r("router-link");return _(),d(h,null,[s(l),e("div",v,[s(g),e("section",x,[b,y,e("div",k,[s(p(n),{options:a.editorOption,theme:"snow"},null,8,["options"])])]),e("div",B,[s(c,{to:{name:"News"}},{default:u(()=>[C]),_:1})])]),s(m)],64)}}}),F=i(j,[["__scopeId","data-v-f00cd267"]]);export{F as default};