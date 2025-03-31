"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[21893],{8320:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/monitoring-297ae03824ef043e55ff5d71e4b84663.png"},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var t=r(96540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}},88439:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"administration/self-hosted/resource-monitoring","title":"Resource monitoring","description":"Find an overview of resource monitoring, alert configuration, and scaling recommendations","source":"@site/docs/administration/self-hosted/resource-monitoring.md","sourceDirName":"administration/self-hosted","slug":"/administration/self-hosted/resource-monitoring","permalink":"/prophecy-docs-staging/preview/pr-592/administration/self-hosted/resource-monitoring","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"scaling","permalink":"/prophecy-docs-staging/preview/pr-592/tags/scaling"},{"inline":true,"label":"resources","permalink":"/prophecy-docs-staging/preview/pr-592/tags/resources"},{"inline":true,"label":"monitoring","permalink":"/prophecy-docs-staging/preview/pr-592/tags/monitoring"}],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Resource monitoring","id":"resource-monitoring","description":"Find an overview of resource monitoring, alert configuration, and scaling recommendations","sidebar_position":5,"tags":["scaling","resources","monitoring"]},"sidebar":"adminSidebar","previous":{"title":"Custom artifact repository","permalink":"/prophecy-docs-staging/preview/pr-592/administration/self-hosted/configure-sparkedge"},"next":{"title":"Download logs","permalink":"/prophecy-docs-staging/preview/pr-592/administration/self-hosted/download-logs"}}');var s=r(74848),i=r(28453);const o={title:"Resource monitoring",id:"resource-monitoring",description:"Find an overview of resource monitoring, alert configuration, and scaling recommendations",sidebar_position:5,tags:["scaling","resources","monitoring"]},c=void 0,d={},a=[{value:"Monitoring",id:"monitoring",level:2},{value:"Alerts",id:"alerts",level:2},{value:"Scaling",id:"scaling",level:2}];function l(e){const n={a:"a",admonition:"admonition",h2:"h2",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This page provides an overview of resource monitoring, alert configuration, and scaling recommendations for effectively managing Prophecy deployments."}),"\n",(0,s.jsx)(n.h2,{id:"monitoring",children:"Monitoring"}),"\n",(0,s.jsxs)(n.p,{children:["To better understand how Prophecy is using resources, you can find an overview in ",(0,s.jsx)(n.strong,{children:"Settings > Admin > Monitoring"}),". The different components correspond to the microservices that run on the Kubernetes cluster."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Monitoring settings",src:r(8320).A+"",width:"2620",height:"1511"})}),"\n",(0,s.jsx)(n.p,{children:"When usage levels reach yellow or red zones, you can choose whether to allocate additional resources. In most cases, temporary spikes in CPU and memory usage type do not necessitate action."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Resource"}),(0,s.jsx)(n.th,{children:"Usage"}),(0,s.jsx)(n.th,{children:"Suggested action"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"CPU"}),(0,s.jsx)(n.td,{children:"Red zone persists for more than 1 hour"}),(0,s.jsx)(n.td,{children:"CPU allocated to the service is under-provisioned. Increase by 10%."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Memory"}),(0,s.jsx)(n.td,{children:"Red zone persists for more than 1 hour"}),(0,s.jsx)(n.td,{children:"Memory allocated to the service is under-provisioned. Increase by 10%."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Storage GBytes"}),(0,s.jsx)(n.td,{children:"Yellow zone is reached"}),(0,s.jsx)(n.td,{children:"Increase the storage capacity of the PVC in your Kubernetes deployment that corresponds to the service."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Storage File Count"}),(0,s.jsx)(n.td,{children:"Yellow zone is reached"}),(0,s.jsx)(n.td,{children:"Increase the storage capacity of the PVC in your Kubernetes deployment that corresponds to the service."})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.admonition,{title:"Getting help",type:"note",children:(0,s.jsxs)(n.p,{children:["If you need help increasing resources for a service in your Kubernetes deployment, reach out to ",(0,s.jsx)(n.a,{href:"/getting-help/",children:"Prophecy support"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"alerts",children:"Alerts"}),"\n",(0,s.jsxs)(n.p,{children:["To set up automated alerts about your resource usage, visit the page on ",(0,s.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-592/administration/self-hosted/configurations/configure-alerts",children:"Alerts Configuration"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"scaling",children:"Scaling"}),"\n",(0,s.jsxs)(n.p,{children:["Scaling is taken care of by the ",(0,s.jsx)(n.strong,{children:"Autoscaler"})," component in our platform. Therefore, if something happens like the number of\nusers increases by 10 times, the Prophecy deployment can be scaled appropriately."]}),"\n",(0,s.jsx)(n.p,{children:"The following are estimated recommended cluster sizes depending on the number of concurrent users:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Number of users"}),(0,s.jsx)(n.th,{children:"25"}),(0,s.jsx)(n.th,{children:"50"}),(0,s.jsx)(n.th,{children:"100"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"CPUs"}),(0,s.jsx)(n.td,{children:"56 vCPUs"}),(0,s.jsx)(n.td,{children:"96 vCPUs"}),(0,s.jsx)(n.td,{children:"180 vCPUs"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Memory"}),(0,s.jsx)(n.td,{children:"128 GB"}),(0,s.jsx)(n.td,{children:"256 GB"}),(0,s.jsx)(n.td,{children:"440 GB"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Disk space (with backups)"}),(0,s.jsx)(n.td,{children:"360 GB"}),(0,s.jsx)(n.td,{children:"720 GB"}),(0,s.jsx)(n.td,{children:"1440 GB"})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"The recommended resource may vary based on the intensity of the usage of each developer. The numbers\npresented above are based on the average recorded usage of Prophecy customers."})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}}}]);