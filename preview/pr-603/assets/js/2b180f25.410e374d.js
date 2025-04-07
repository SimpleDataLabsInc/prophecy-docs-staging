"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[75521],{8181:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/lineage-choose-and-run-64a57df52c39d99e97ebd30fd374073f.png"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var a=i(96540);const s={},t=a.createContext(s);function r(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(t.Provider,{value:n},e.children)}},43900:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/lineage-group-and-expand-9a1756cfc6f0be3e4be84d136a324659.png"},52551:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"lineage/lineage-run-and-diagnose","title":"Lineage run and diagnose","description":"Project lineage run and diagnose","source":"@site/docs/lineage/lineage-run-and-diagnose.md","sourceDirName":"lineage","slug":"/engineers/lineage-run-and-diagnose","permalink":"/prophecy-docs-staging/preview/pr-603/engineers/lineage-run-and-diagnose","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"metadata","permalink":"/prophecy-docs-staging/preview/pr-603/tags/metadata"},{"inline":true,"label":"lineage","permalink":"/prophecy-docs-staging/preview/pr-603/tags/lineage"},{"inline":true,"label":"run","permalink":"/prophecy-docs-staging/preview/pr-603/tags/run"},{"inline":true,"label":"diagnose","permalink":"/prophecy-docs-staging/preview/pr-603/tags/diagnose"}],"version":"current","frontMatter":{"title":"Lineage run and diagnose","id":"lineage-run-and-diagnose","slug":"/engineers/lineage-run-and-diagnose","description":"Project lineage run and diagnose","tags":["metadata","lineage","run","diagnose"]},"sidebar":"mySidebar","previous":{"title":"Lineage extractor","permalink":"/prophecy-docs-staging/preview/pr-603/engineers/lineage-extractor"},"next":{"title":"Lineage view","permalink":"/prophecy-docs-staging/preview/pr-603/engineers/lineage-view-and-search"}}');var s=i(74848),t=i(28453);const r={title:"Lineage run and diagnose",id:"lineage-run-and-diagnose",slug:"/engineers/lineage-run-and-diagnose",description:"Project lineage run and diagnose",tags:["metadata","lineage","run","diagnose"]},o=void 0,l={},d=[{value:"Lineage run",id:"lineage-run",level:2},{value:"Runtime logs",id:"runtime-logs",level:2},{value:"Lineage diagnose",id:"lineage-diagnose",level:2}];function g(e){const n={admonition:"admonition",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"When you open a SQL project, the canvas shows the lineage view of your project. On this page, you can run the different flows and inspect the lineage."}),"\n",(0,s.jsx)(n.h2,{id:"lineage-run",children:"Lineage run"}),"\n",(0,s.jsx)(n.p,{children:"You can interactively run your project from the lineage page using the following steps."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Click the up arrow next to the play button to select which entities you'd like to include in your run. You can choose to run all seeds, all models, and all tests."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Lineage View",src:i(8181).A+"",width:"2640",height:"1501"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Once you've made your selection, click the Play button."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"After the run has completed, you can click to view interim data."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"View interim data",src:i(91605).A+"",width:"2812",height:"814"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"The run order is determined by the topological sort of the entities and their dependencies."})}),"\n",(0,s.jsx)(n.h2,{id:"runtime-logs",children:"Runtime logs"}),"\n",(0,s.jsx)(n.p,{children:"After a lineage run, runtime logs will be generated that include information about successful and failed runs. In the Runtime Logs panel, you can:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Search"}),"\n",(0,s.jsx)(n.li,{children:"Filter"}),"\n",(0,s.jsx)(n.li,{children:"Sort"}),"\n",(0,s.jsx)(n.li,{children:"Download logs"}),"\n",(0,s.jsx)(n.li,{children:"Clear logs"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Logs are grouped for easy viewing. You can click a grouping to expand it."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Lineage Search",src:i(43900).A+"",width:"2812",height:"814"})}),"\n",(0,s.jsx)(n.h2,{id:"lineage-diagnose",children:"Lineage diagnose"}),"\n",(0,s.jsx)(n.p,{children:"From the Runtime Logs panel, you can diagnose a failed run."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["On an opened failed run, click ",(0,s.jsx)(n.strong,{children:"Diagnose"})," next to the error log."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Lineage Search",src:i(80610).A+"",width:"2640",height:"1499"})}),"\n",(0,s.jsx)(n.p,{children:"You are shown the error and a suggestion for a possible way to fix it."})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},80610:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/lineage-diagnose-03a7bd4370e49706e4dd3158869c73de.png"},91605:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/lineage-view-interim-data-b42c358d2a599a99a32e2b852da455e7.png"}}]);