"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[2492],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(96540);const i={},l=s.createContext(i);function o(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(l.Provider,{value:t},e.children)}},90168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"analysts/development/gems/source-target/troubleshooting/multi-source-table","title":"Multiple pipelines writing to the same table","description":"Work around dbt limitations to append data from multiple sources into one table","source":"@site/docs/analysts/development/gems/source-target/troubleshooting/multi-source-table.md","sourceDirName":"analysts/development/gems/source-target/troubleshooting","slug":"/analysts/multi-source-table","permalink":"/prophecy-docs-staging/preview/pr-620/analysts/multi-source-table","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Multiple pipelines writing to the same table","sidebar_label":"Multi-source table","id":"multi-source-table","slug":"/analysts/multi-source-table","description":"Work around dbt limitations to append data from multiple sources into one table","tags":[]},"sidebar":"mySidebar","previous":{"title":"MongoDB","permalink":"/prophecy-docs-staging/preview/pr-620/analysts/mongodb"},"next":{"title":"Aggregate","permalink":"/prophecy-docs-staging/preview/pr-620/analysts/aggregate"}}');var i=n(74848),l=n(28453);const o={title:"Multiple pipelines writing to the same table",sidebar_label:"Multi-source table",id:"multi-source-table",slug:"/analysts/multi-source-table",description:"Work around dbt limitations to append data from multiple sources into one table",tags:[]},a=void 0,r={},d=[{value:"Example",id:"example",level:2},{value:"Why this happens",id:"why-this-happens",level:2},{value:"Solution",id:"solution",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Prophecy doesn't allow multiple pipelines or branches to write directly to the same table. As such, it also doesn't directly support appending data from multiple sources into a single table. Use the ",(0,i.jsx)(t.a,{href:"#solution",children:"solution"})," provided as a workaround to this limitation."]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:"Assume you try the following scenario:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Pipeline A appends data to ",(0,i.jsx)(t.code,{children:"final_table"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Pipeline B also tries to append different data to ",(0,i.jsx)(t.code,{children:"final_table"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This will result in errors or unexpected behavior."}),"\n",(0,i.jsx)(t.h2,{id:"why-this-happens",children:"Why this happens"}),"\n",(0,i.jsxs)(t.p,{children:["Prophecy executes SQL transformations by generating and running ",(0,i.jsx)(t.a,{href:"/engineers/models",children:"dbt models"}),". dbt operates with a model-centric approach where each model is responsible for generating or updating a specific table. dbt expects a ",(0,i.jsx)(t.strong,{children:"1:1 relationship between models and tables"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"solution",children:"Solution"}),"\n",(0,i.jsx)(t.p,{children:"To resolve this, split the write operations into separate intermediate tables and use a third table to consolidate the data via a union."}),"\n",(0,i.jsx)(t.p,{children:"We recommended the following process:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Pipeline 1 writes to ",(0,i.jsx)(t.code,{children:"intermediate_table_1"})]}),"\n",(0,i.jsxs)(t.li,{children:["Pipeline 2 writes to ",(0,i.jsx)(t.code,{children:"intermediate_table_2"})]}),"\n",(0,i.jsxs)(t.li,{children:["Pipeline 3 unions the two tables into a ",(0,i.jsx)(t.code,{children:"final_table"})]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);