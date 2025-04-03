"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[83603],{22084:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/cluster_restart_terminate-1f2288fcb15d60bcd4588ccc3a7800cd.png"},28453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>a});var n=r(96540);const t={},i=n.createContext(t);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(i.Provider,{value:s},e.children)}},35585:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/EMRFabric-76129a28b13e62ec130bc0b8307c84ad.png"},74019:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"release_notes/2023/August_2023","title":"August 2023","description":"Release notes for August","source":"@site/docs/release_notes/2023/aug2023.md","sourceDirName":"release_notes/2023","slug":"/release_notes/2023/August_2023","permalink":"/prophecy-docs-staging/preview/pr-599/release_notes/2023/August_2023","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"release notes","permalink":"/prophecy-docs-staging/preview/pr-599/tags/release-notes"},{"inline":true,"label":"changelog","permalink":"/prophecy-docs-staging/preview/pr-599/tags/changelog"}],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7,"id":"August_2023","description":"Release notes for August","title":"August 2023","tags":["release notes","changelog"]},"sidebar":"mySidebar","previous":{"title":"September 2023","permalink":"/prophecy-docs-staging/preview/pr-599/release_notes/2023/September_2023"},"next":{"title":"July 2023","permalink":"/prophecy-docs-staging/preview/pr-599/release_notes/2023/July_2023"}}');var t=r(74848),i=r(28453);const o={sidebar_position:7,id:"August_2023",description:"Release notes for August",title:"August 2023",tags:["release notes","changelog"]},a=void 0,l={},c=[{value:"3.1.4.* (August 11, 2023)",id:"314-august-11-2023",level:2},{value:"Features",id:"FeaturesRelease314",level:3},{value:"Synapse Fabric",id:"synapse-fabric",level:4},{value:"EMR support for Low code Orchestration",id:"emr-support-for-low-code-orchestration",level:4},{value:"3.1.3.* (August 3, 2023)",id:"313-august-3-2023",level:2},{value:"Features",id:"FeaturesRelease313",level:3},{value:"EMR Fabric",id:"emr-fabric",level:4},{value:"Minor Improvements",id:"MinorImprovements312",level:3},{value:"Low code SQL Improvements",id:"low-code-sql-improvements",level:4},{value:"Low code Spark Improvements",id:"low-code-spark-improvements",level:4},{value:"Other Minor Improvements",id:"other-minor-improvements",level:4}];function d(e){const s={a:"a",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"314-august-11-2023",children:"3.1.4.* (August 11, 2023)"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Prophecy Python libs version: 1.5.10"}),"\n",(0,t.jsx)(s.li,{children:"Prophecy Scala libs version: 7.1.7"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"FeaturesRelease314",children:"Features"}),"\n",(0,t.jsx)(s.h4,{id:"synapse-fabric",children:"Synapse Fabric"}),"\n",(0,t.jsx)(s.p,{children:"We are excited to announce that this release introduces first-class support for Azure Synapse Fabric type.\nThis new feature empowers our Users to seamlessly create and run their data Pipelines on Azure Synapse instances directly from the Prophecy platform."}),"\n",(0,t.jsx)(s.h4,{id:"emr-support-for-low-code-orchestration",children:"EMR support for Low code Orchestration"}),"\n",(0,t.jsxs)(s.p,{children:["Building upon our previous release, we're excited to announce an extension of our EMR capabilities. In this update, we proudly introduce support for ",(0,t.jsx)(s.strong,{children:"Releasing Pipelines on EMR"}),", along with enhanced ",(0,t.jsx)(s.strong,{children:"EMR cluster management"})," through ",(0,t.jsx)(s.strong,{children:"Airflow"}),". Our latest additions include brand-new EMR Operators and Sensors, empowering users to seamlessly oversee EMR clusters and conveniently schedule pipelines on their EMR Fabrics."]}),"\n",(0,t.jsx)(s.h2,{id:"313-august-3-2023",children:"3.1.3.* (August 3, 2023)"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Prophecy Python libs version: 1.5.10"}),"\n",(0,t.jsx)(s.li,{children:"Prophecy Scala libs version: 7.1.6"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"FeaturesRelease313",children:"Features"}),"\n",(0,t.jsx)(s.h4,{id:"emr-fabric",children:"EMR Fabric"}),"\n",(0,t.jsx)(s.p,{children:"We are excited to announce that this release introduces first-class support for EMR Fabric type.\nThis new feature empowers data engineers and data scientists to seamlessly create and run their data Pipelines on Amazon Elastic MapReduce (EMR) instances directly from the Prophecy platform."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"EMRFabric.png",src:r(35585).A+"",width:"1728",height:"968"})}),"\n",(0,t.jsx)(s.h3,{id:"MinorImprovements312",children:"Minor Improvements"}),"\n",(0,t.jsx)(s.h4,{id:"low-code-sql-improvements",children:"Low code SQL Improvements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Copilot support for Trino: We've integrated Copilot support for Trino in our Low code SQL product."}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"low-code-spark-improvements",children:"Low code Spark Improvements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Restart and Terminate cluster functionality: Prophecy now allows users to Restart and Terminate Databricks Clusters directly from the platform. See the reference image below.\n",(0,t.jsx)(s.img,{alt:"cluster_restart_terminate.png",src:r(22084).A+"",width:"508",height:"599"})]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"other-minor-improvements",children:"Other Minor Improvements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Audit Logging support for Azure: Prophecy now enables syncing of ",(0,t.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-599/administration/saas/audit-logging",children:"audit logs"})," to Azure Data Lake Storage (ADLS)"]}),"\n",(0,t.jsx)(s.li,{children:"With this Release,admins will no longer have the ability to remove themselves from a team. This avoids accidental removal of self from a team."}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);