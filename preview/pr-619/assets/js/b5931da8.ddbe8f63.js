"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[77068],{23101:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"release_notes/2024/April_2024","title":"April 2024","description":"Release notes for April","source":"@site/docs/release_notes/2024/april2024.md","sourceDirName":"release_notes/2024","slug":"/release_notes/2024/April_2024","permalink":"/prophecy-docs-staging/preview/pr-619/release_notes/2024/April_2024","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"release notes","permalink":"/prophecy-docs-staging/preview/pr-619/tags/release-notes"},{"inline":true,"label":"changelog","permalink":"/prophecy-docs-staging/preview/pr-619/tags/changelog"},{"inline":true,"label":"april","permalink":"/prophecy-docs-staging/preview/pr-619/tags/april"}],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"id":"April_2024","description":"Release notes for April","title":"April 2024","tags":["release notes","changelog","april"]},"sidebar":"mySidebar","previous":{"title":"May 2024","permalink":"/prophecy-docs-staging/preview/pr-619/release_notes/2024/May_2024"},"next":{"title":"March 2024","permalink":"/prophecy-docs-staging/preview/pr-619/release_notes/2024/March_2024"}}');var s=i(74848),t=i(28453);const o={sidebar_position:4,id:"April_2024",description:"Release notes for April",title:"April 2024",tags:["release notes","changelog","april"]},l=void 0,a={},c=[{value:"3.3.5.* (April 30, 2024)",id:"335-april-30-2024",level:2},{value:"Features",id:"Features335",level:3},{value:"Parametrized Gems in Spark",id:"parametrized-gems-in-spark",level:4},{value:"Copilot Fix It for Spark and SQL expressions",id:"copilot-fix-it-for-spark-and-sql-expressions",level:4},{value:"3.3.4.* (April 12, 2024)",id:"334-april-12-2024",level:2},{value:"Minor Improvements",id:"MinorImprovements334",level:3},{value:"3.3.3.* (April 1, 2024)",id:"333-april-1-2024",level:2},{value:"Features",id:"Features333",level:3},{value:"Prophecy Libs as First class Project Dependency",id:"prophecy-libs-as-first-class-project-dependency",level:4},{value:"Secrets in Pipeline Config",id:"secrets-in-pipeline-config",level:4},{value:"Minor Improvements",id:"MinorImprovements333",level:3}];function p(e){const n={admonition:"admonition",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"335-april-30-2024",children:"3.3.5.* (April 30, 2024)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Prophecy Python libs version: 1.8.15"}),"\n",(0,s.jsx)(n.li,{children:"Prophecy Scala libs version: 7.1.93"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"Features335",children:"Features"}),"\n",(0,s.jsx)(n.h4,{id:"parametrized-gems-in-spark",children:"Parametrized Gems in Spark"}),"\n",(0,s.jsx)(n.p,{children:"Many enterprises use generic pipelines that act like frameworks. These pipelines have the same basic transformation rules but work with files that have different schemas. They generally have different output columns, computed using different expressions.\nTo help with this, Prophecy now lets you completely parameterize your transformation gems. This means the logic for all the expressions along with output columns can come from a pipeline config. So, you can use one pipeline as a framework and run it with different setups."}),"\n",(0,s.jsx)(n.h4,{id:"copilot-fix-it-for-spark-and-sql-expressions",children:"Copilot Fix It for Spark and SQL expressions"}),"\n",(0,s.jsx)(n.p,{children:"Also, in our last update, we'd enabled Copilot to suggest expressions automatically based on output column names. With this release, we've added a feature called Copilot Fix It. It can fix any errors in your expression logic with just a click of the \"Fix with AI\" button. It can correct things like syntax mistakes, wrong function calls, or typos."}),"\n",(0,s.jsx)(n.h2,{id:"334-april-12-2024",children:"3.3.4.* (April 12, 2024)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Prophecy Python libs version: 1.8.15"}),"\n",(0,s.jsx)(n.li,{children:"Prophecy Scala libs version: 7.1.88"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"MinorImprovements334",children:"Minor Improvements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Streamlined Expression Suggestions"}),": Enhancing the Copilot feature, we now automatically suggest expressions when users add a new column in the gem. These suggestions are tailored to the target column name and can be accepted with a simple press of the Tab button."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Improved Filtering UX for Problem and Runtime Logs"}),": To enhance the debugging experience in pipelines, we've refined the user interface for logging. This includes the addition of search, filter, sort, and download options."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"333-april-1-2024",children:"3.3.3.* (April 1, 2024)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Prophecy Python libs version: 1.8.13"}),"\n",(0,s.jsx)(n.li,{children:"Prophecy Scala libs version: 7.1.82"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"Features333",children:"Features"}),"\n",(0,s.jsx)(n.h4,{id:"prophecy-libs-as-first-class-project-dependency",children:"Prophecy Libs as First class Project Dependency"}),"\n",(0,s.jsx)(n.p,{children:"Prophecy Libs is a Prophecy-provided library designed to enhance your pipelines. These libraries provide essential features such as interims, monitoring, and secret management while maintaining clean and concise pipeline code. When executing your pipelines, Prophecy Libs need to be installed on your clusters.\nIn our latest release, we\u2019ve made Prophecy Libs a Project Dependency configurable by the user. This gives you control over when to update dependencies in your pipelines and on long-running clusters."}),"\n",(0,s.jsx)(n.h4,{id:"secrets-in-pipeline-config",children:"Secrets in Pipeline Config"}),"\n",(0,s.jsx)(n.p,{children:"Users can now create pipeline configurations of type Secrets. These configurations can be utilized within their gems. This flexibility allows users to manage username/password changes across different environments by creating distinct config instances. With this, even when working with various fabrics, users can continue using the same gem and pipeline."}),"\n",(0,s.jsx)(n.h3,{id:"MinorImprovements333",children:"Minor Improvements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Code Generation Improvements"}),": We\u2019ve fine-tuned the code generation process for Spark pipelines, ensuring top-notch quality. You might notice some minor uncommitted changes when you revisit your pipeline code."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Low Code SQL Improvements"}),": We\u2019ve revamped the UI for Port schema in SQL gems, enhancing the user experience for modifying and managing Input/Output Ports. Additionally, our Copilot fix-it feature now helps users rectify expression errors interactively."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Airflow Improvements"}),": While building Jobs interactively in Airflow, users can now utilize the Trigger DAG run operator to test unreleased DAGs."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Git Improvements"}),": Git Merge screens now allow merging to branches other than the main branch. Plus, if you\u2019re rolling back on the main branch, you\u2019ll be prompted to create a new branch for the rollback."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Please be aware that when you next open your Projects for editing, you may notice uncommitted changes due to this update."})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var r=i(96540);const s={},t=r.createContext(s);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);