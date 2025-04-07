"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[27800],{1609:(e,i,n)=>{n.d(i,{A:()=>o});const o=n.p+"assets/images/gem-failure-details-2af8f0ff50d27c2e7941605b37608b40.png"},15512:(e,i,n)=>{n.d(i,{A:()=>o});const o=n.p+"assets/images/view-runtime-logs-09dcd81a2a11a6b568d5bba68f4efa54.png"},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>l});var o=n(96540);const r={},t=o.createContext(r);function s(e){const i=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(t.Provider,{value:i},e.children)}},56259:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"Orchestration/pipeline-monitoring/use-pipeline-monitoring","title":"Use Pipeline Monitoring","description":"How to use Pipeline Monitoring for Spark","source":"@site/docs/Orchestration/pipeline-monitoring/use-pipeline-monitoring.md","sourceDirName":"Orchestration/pipeline-monitoring","slug":"/engineers/use-pipeline-monitoring","permalink":"/prophecy-docs-staging/preview/pr-605/engineers/use-pipeline-monitoring","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"how-to","permalink":"/prophecy-docs-staging/preview/pr-605/tags/how-to"},{"inline":true,"label":"monitoring","permalink":"/prophecy-docs-staging/preview/pr-605/tags/monitoring"},{"inline":true,"label":"historical runs","permalink":"/prophecy-docs-staging/preview/pr-605/tags/historical-runs"},{"inline":true,"label":"spark","permalink":"/prophecy-docs-staging/preview/pr-605/tags/spark"}],"version":"current","frontMatter":{"title":"Use Pipeline Monitoring","id":"use-pipeline-monitoring","slug":"/engineers/use-pipeline-monitoring","description":"How to use Pipeline Monitoring for Spark","tags":["how-to","monitoring","historical runs","spark"]},"sidebar":"mySidebar","previous":{"title":"Enable Pipeline Monitoring","permalink":"/prophecy-docs-staging/preview/pr-605/engineers/enable-pipeline-monitoring"},"next":{"title":"Airflow","permalink":"/prophecy-docs-staging/preview/pr-605/engineers/airflow"}}');var r=n(74848),t=n(28453);const s={title:"Use Pipeline Monitoring",id:"use-pipeline-monitoring",slug:"/engineers/use-pipeline-monitoring",description:"How to use Pipeline Monitoring for Spark",tags:["how-to","monitoring","historical runs","spark"]},l=void 0,a={},c=[{value:"Detect and monitor failures",id:"detect-and-monitor-failures",level:2},{value:"Troubleshoot and fix problems",id:"troubleshoot-and-fix-problems",level:2},{value:"View historical runs",id:"view-historical-runs",level:2}];function d(e){const i={admonition:"admonition",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:"You can use Pipeline Monitoring to help identify errors and failures at runtime. You can identify the cause of the failures, fix them with recommended solutions, and rerun failed or skipped tasks."}),"\n",(0,r.jsx)(i.h2,{id:"detect-and-monitor-failures",children:"Detect and monitor failures"}),"\n",(0,r.jsx)(i.p,{children:"After your scheduled or ad-hoc run, you can view detected failures on your pipeline. Gems with an error or warning are highlighted on the Visual canvas."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Hover over the gem to see failure details, such as run duration and the exception."}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Gem failure-details",src:n(1609).A+"",width:"2620",height:"1506"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["You can click ",(0,r.jsx)(i.strong,{children:"Open Logs"})," to open the Runtime Logs of that gem."]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"From the Runtime Logs panel, you can see other logs of the current run, including those that have succeeded. You can filter or sort the logs, and adjust the view."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Click ",(0,r.jsx)(i.strong,{children:"More details"})," to see the entire exception details."]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"View runtime logs",src:n(15512).A+"",width:"2812",height:"897"})}),"\n",(0,r.jsx)(i.h2,{id:"troubleshoot-and-fix-problems",children:"Troubleshoot and fix problems"}),"\n",(0,r.jsxs)(i.p,{children:["From the Runtime Logs panel, you can swap the tabs by clicking ",(0,r.jsx)(i.strong,{children:"Problems"}),". The Problems tab shows you a compilation of Warnings and Errors, where they can be found, and brief descriptions of each."]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Click the name to view the problem. A side panel will open, taking you to the error location."}),"\n",(0,r.jsxs)(i.li,{children:["Or you can click ",(0,r.jsx)(i.strong,{children:"Fix with AI"})," to use a recommended solution made by Spark Copilot. And then try rerunning your task."]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"View and fix problems with AI",src:n(90410).A+"",width:"2812",height:"897"})}),"\n",(0,r.jsx)(i.h2,{id:"view-historical-runs",children:"View historical runs"}),"\n",(0,r.jsx)(i.p,{children:"You can see a complete history with logs and other debugging details for all of your scheduled and ad-hoc runs."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["To view historical runs, select ",(0,r.jsx)(i.strong,{children:"Run History"}),"."]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"This will take you to the Historical View of your pipeline in your particular fabric."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"View run history",src:n(64486).A+"",width:"2812",height:"896"})}),"\n",(0,r.jsx)(i.admonition,{type:"note",children:(0,r.jsx)(i.p,{children:"It may take a moment to load the Historical View since Prophecy is using your cluster to fetch the historical run information from your table."})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"You can view different versions of your pipeline from the dropdown, or go back to view the Run Details."}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["Successful runs are labeled with a ","\u2714\ufe0f",", while failed runs are labeled with a ","\u26a0\ufe0f","."]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"You can see the number of rows read and written at the top right."}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Historical monitoring options and details",src:n(83702).A+"",width:"2620",height:"1504"})})]})}function p(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},64486:(e,i,n)=>{n.d(i,{A:()=>o});const o=n.p+"assets/images/view-run-history-176025b65dcfe5b86f800a04dcee9156.png"},83702:(e,i,n)=>{n.d(i,{A:()=>o});const o=n.p+"assets/images/historical-monitoring-options-b653dfab1d3458cd12bfaaf6ec87c606.png"},90410:(e,i,n)=>{n.d(i,{A:()=>o});const o=n.p+"assets/images/view-and-fix-problems-09904466a32169b4dceae3242d14126f.png"}}]);