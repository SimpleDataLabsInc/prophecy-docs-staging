"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[29923],{23314:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"release_notes/2024/June_2024","title":"June 2024","description":"Release notes for June","source":"@site/docs/release_notes/2024/june2024.md","sourceDirName":"release_notes/2024","slug":"/release_notes/2024/June_2024","permalink":"/prophecy-docs-staging/preview/pr-616/release_notes/2024/June_2024","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"release notes","permalink":"/prophecy-docs-staging/preview/pr-616/tags/release-notes"},{"inline":true,"label":"changelog","permalink":"/prophecy-docs-staging/preview/pr-616/tags/changelog"},{"inline":true,"label":"june","permalink":"/prophecy-docs-staging/preview/pr-616/tags/june"}],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"id":"June_2024","description":"Release notes for June","title":"June 2024","tags":["release notes","changelog","june"]},"sidebar":"mySidebar","previous":{"title":"July 2024","permalink":"/prophecy-docs-staging/preview/pr-616/release_notes/2024/July_2024"},"next":{"title":"May 2024","permalink":"/prophecy-docs-staging/preview/pr-616/release_notes/2024/May_2024"}}');var i=s(74848),o=s(28453);const r={sidebar_position:6,id:"June_2024",description:"Release notes for June",title:"June 2024",tags:["release notes","changelog","june"]},a=void 0,l={},c=[{value:"3.3.7.* (June 7, 2024)",id:"337-june-7-2024",level:2},{value:"Features",id:"Features337",level:3},{value:"Copilot AI Improvements",id:"copilot-ai-improvements",level:4},{value:"Spark Copilot Enhancements",id:"spark-copilot-enhancements",level:4},{value:"SQL Copilot Enhancements",id:"sql-copilot-enhancements",level:4}];function d(e){const n={h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"337-june-7-2024",children:"3.3.7.* (June 7, 2024)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Prophecy Python libs version: 1.9.4"}),"\n",(0,i.jsx)(n.li,{children:"Prophecy Scala libs version: 8.0.5"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"Features337",children:"Features"}),"\n",(0,i.jsx)(n.h4,{id:"copilot-ai-improvements",children:"Copilot AI Improvements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Auto documentation and description"}),": The AI experience in Spark and SQL copilot is now automated. This includes automatic documentation and descriptions for gems, datasets, columns, projects, and more. Additionally, Git commit and release messages are now auto-generated."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Conversational interface"}),": Users can now interactively modify existing models after generating them with the Copilot, allowing for continuous, incremental prompts through a chat like interface."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"UDFs and Macros in copilot expression predictions"}),": The copilot can now predict expressions using custom UDFs and Macros defined in Spark and SQL projects."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Data Context in Prompts"}),": Users can enable data context for expression prediction, ensuring the use of customer data context in gems. This feature can be enabled by a Team admin in the Team level settings."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Along with above, Various UX improvements have been made to ensure a seamless AI experience in our Data Transformation Copilots."}),"\n",(0,i.jsx)(n.h4,{id:"spark-copilot-enhancements",children:"Spark Copilot Enhancements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Business Rule Engine"}),": Added support for Business Rules in Spark Copilot. Users can define business rules as functions and use them in any of their transformation gems to apply.\nNote User defined functions are also moved to the left side project Browser with this change."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"sql-copilot-enhancements",children:"SQL Copilot Enhancements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Auto AI suggestions in SQL code editor"}),": The SQL copilot now features AI auto-suggestions in the SQL ",(0,i.jsx)(n.strong,{children:"code view"})," too, facilitating easier model modification directly in code."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Auto suggest Expression based on Target schema"}),": When a target gem schema is already defined, expressions for the preceding gem can be auto-predicted based on the connected input and output gems."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SQL File upload"}),": Users can directly upload files such as CSV, Excel, JSON, and Parquet to Snowflake or Databricks through Prophecy. Drag and drop files onto the canvas or switch to the environment tab to upload."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Along with above features, Execution and load times for SQL models have been significantly reduced, with a 60% improvement."})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(96540);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);