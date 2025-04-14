"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[42387],{28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>p});var o=i(96540);const r={},t=o.createContext(r);function s(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(t.Provider,{value:n},e.children)}},49348:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/prophecy-libs-python-d4ee8e9e684e0487dc404dbcd108081e.png"},64867:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/turn-on-pipeline-monitoring-24c97b1b8f9c9e52735b047cad96b32e.png"},92705:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"Orchestration/pipeline-monitoring/enable-pipeline-monitoring","title":"Enable Pipeline Monitoring","description":"How to enable Pipeline Monitoring for Spark","source":"@site/docs/Orchestration/pipeline-monitoring/enable-pipeline-monitoring.md","sourceDirName":"Orchestration/pipeline-monitoring","slug":"/engineers/enable-pipeline-monitoring","permalink":"/prophecy-docs-staging/preview/pr-615/engineers/enable-pipeline-monitoring","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"how-to","permalink":"/prophecy-docs-staging/preview/pr-615/tags/how-to"},{"inline":true,"label":"setup","permalink":"/prophecy-docs-staging/preview/pr-615/tags/setup"},{"inline":true,"label":"monitoring","permalink":"/prophecy-docs-staging/preview/pr-615/tags/monitoring"},{"inline":true,"label":"spark","permalink":"/prophecy-docs-staging/preview/pr-615/tags/spark"}],"version":"current","frontMatter":{"title":"Enable Pipeline Monitoring","id":"enable-pipeline-monitoring","slug":"/engineers/enable-pipeline-monitoring","description":"How to enable Pipeline Monitoring for Spark","tags":["how-to","setup","monitoring","spark"]},"sidebar":"mySidebar","previous":{"title":"Pipeline Monitoring","permalink":"/prophecy-docs-staging/preview/pr-615/engineers/pipeline-monitoring"},"next":{"title":"Use Pipeline Monitoring","permalink":"/prophecy-docs-staging/preview/pr-615/engineers/use-pipeline-monitoring"}}');var r=i(74848),t=i(28453);const s={title:"Enable Pipeline Monitoring",id:"enable-pipeline-monitoring",slug:"/engineers/enable-pipeline-monitoring",description:"How to enable Pipeline Monitoring for Spark",tags:["how-to","setup","monitoring","spark"]},p=void 0,l={},a=[{value:"Update Prophecy Library version",id:"update-prophecy-library-version",level:2},{value:"Turn on the Pipeline Monitoring flag",id:"turn-on-the-pipeline-monitoring-flag",level:2}];function c(e){const n={a:"a",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"To use Pipeline Monitoring, you must enable it by updating the Prophecy Library version in your project dependencies, and turn on the Pipeline Monitoring flag in Pipeline Settings."}),"\n",(0,r.jsx)(n.h2,{id:"update-prophecy-library-version",children:"Update Prophecy Library version"}),"\n",(0,r.jsx)(n.p,{children:"Pipeline Monitoring requires your project to be on the follow versions:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Prophecy Scala libs version 8.0.23 or above."}),"\n",(0,r.jsx)(n.li,{children:"Prophecy Python libs version 1.9.9 or above."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["You can check your ",(0,r.jsx)(n.strong,{children:"ProphecyLibsPython"})," version under ",(0,r.jsx)(n.strong,{children:"Dependencies"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If your project's Prophecy Scala and Python libs versions are out of date, ",(0,r.jsx)(n.strong,{children:"Update"})," them."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"ProphecyLibsPython",src:i(49348).A+"",width:"2620",height:"1506"})}),"\n",(0,r.jsxs)(n.p,{children:["If you have uncommitted changes in your pipelines, you may be prompted to either ",(0,r.jsx)(n.strong,{children:"Commit & Save"})," or ",(0,r.jsx)(n.strong,{children:"Save Without Committing"}),". The update will affect all pipelines in your project."]}),"\n",(0,r.jsxs)(n.p,{children:["For an up-to-date list of Prophecy versions and libraries, see ",(0,r.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-615/release_notes/version_chart/",children:"Version Chart"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"turn-on-the-pipeline-monitoring-flag",children:"Turn on the Pipeline Monitoring flag"}),"\n",(0,r.jsx)(n.p,{children:"By default, Pipeline Monitoring is enabled for all new pipelines. For existing pipelines, the feature is turned off by default in order to prevent unexpected changes in your generated pipeline code."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["To turn on Pipeline Monitoring, you must toggle on ",(0,r.jsx)(n.strong,{children:"Enable Pipeline monitoring"})," in ",(0,r.jsx)(n.strong,{children:"Pipeline Settings"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Turn on Pipeline Monitoring",src:i(64867).A+"",width:"2812",height:"896"})}),"\n",(0,r.jsx)(n.p,{children:"You can check the code view to see added instrument annotations that adds all of the details for monitoring your pipeline."})]})}function g(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);