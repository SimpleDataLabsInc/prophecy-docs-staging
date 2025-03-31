"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[7811],{28453:(e,r,s)=>{s.d(r,{R:()=>a,x:()=>c});var i=s(96540);const n={},t=i.createContext(n);function a(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(t.Provider,{value:r},e.children)}},58905:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"administration/fabrics/sql-fabrics/Fabrics","title":"SQL fabrics","description":"Perform SQL computations on a SQL warehouse","source":"@site/docs/administration/fabrics/sql-fabrics/fabrics.md","sourceDirName":"administration/fabrics/sql-fabrics","slug":"/administration/fabrics/sql-fabrics/Fabrics","permalink":"/prophecy-docs-staging/preview/pr-592/administration/fabrics/sql-fabrics/Fabrics","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"fabric","permalink":"/prophecy-docs-staging/preview/pr-592/tags/fabric"},{"inline":true,"label":"SQL","permalink":"/prophecy-docs-staging/preview/pr-592/tags/sql"},{"inline":true,"label":"execution","permalink":"/prophecy-docs-staging/preview/pr-592/tags/execution"},{"inline":true,"label":"snowflake","permalink":"/prophecy-docs-staging/preview/pr-592/tags/snowflake"},{"inline":true,"label":"databricks","permalink":"/prophecy-docs-staging/preview/pr-592/tags/databricks"}],"version":"current","frontMatter":{"title":"SQL fabrics","description":"Perform SQL computations on a SQL warehouse","id":"Fabrics","sidebar_class_name":"hidden","tags":["fabric","SQL","execution","snowflake","databricks"]},"sidebar":"adminSidebar","previous":{"title":"Azure Synapse","permalink":"/prophecy-docs-staging/preview/pr-592/administration/fabrics/Spark-fabrics/azure-synapse-fabric-guide"},"next":{"title":"Databricks SQL","permalink":"/prophecy-docs-staging/preview/pr-592/administration/fabrics/sql-fabrics/databricks"}}');var n=s(74848),t=s(28453);const a={title:"SQL fabrics",description:"Perform SQL computations on a SQL warehouse",id:"Fabrics",sidebar_class_name:"hidden",tags:["fabric","SQL","execution","snowflake","databricks"]},c=void 0,o={},d=[{value:"When to use SQL fabrics",id:"when-to-use-sql-fabrics",level:2},{value:"Job scheduling",id:"job-scheduling",level:2}];function l(e){const r={a:"a",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["SQL ",(0,n.jsx)(r.a,{href:"/prophecy-docs-staging/preview/pr-592/fabrics",children:"fabrics"})," let Prophecy connect to SQL warehouses for storage and compute engine capabilities. Prophecy supports connections to Databricks and Snowflake SQL warehouses."]}),"\n",(0,n.jsx)(r.h2,{id:"when-to-use-sql-fabrics",children:"When to use SQL fabrics"}),"\n",(0,n.jsxs)(r.p,{children:["When working with SQL projects in Prophecy, you have the option to use either a ",(0,n.jsx)(r.a,{href:"/administration/fabrics/prophecy-fabrics",children:"Prophecy fabric"})," or a SQL fabric. The choice depends on whether your project requires external data integration or is confined to computations within a SQL warehouse. Use the following table to determine the appropriate fabric."]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Feature"}),(0,n.jsx)(r.th,{children:"Prophecy fabric"}),(0,n.jsx)(r.th,{children:"SQL fabric"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Compute models in your project"}),(0,n.jsx)(r.td,{children:"Yes"}),(0,n.jsx)(r.td,{children:"Yes"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Ingest data from external connections like Salesforce or SFTP"}),(0,n.jsx)(r.td,{children:"Yes"}),(0,n.jsx)(r.td,{children:"No"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Send data through external connections like Salesforce or SFTP"}),(0,n.jsx)(r.td,{children:"Yes"}),(0,n.jsx)(r.td,{children:"No"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Operates entirely within a connected SQL warehouse"}),(0,n.jsx)(r.td,{children:"No"}),(0,n.jsx)(r.td,{children:"Yes"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["Requires ",(0,n.jsx)(r.a,{href:"/administration/architecture",children:"Prophecy Automate"})]}),(0,n.jsx)(r.td,{children:"Yes"}),(0,n.jsx)(r.td,{children:"No"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Run jobs or scheduled pipelines natively"}),(0,n.jsx)(r.td,{children:"Yes"}),(0,n.jsx)(r.td,{children:"No"})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"job-scheduling",children:"Job scheduling"}),"\n",(0,n.jsx)(r.p,{children:"If you use a SQL fabric, you can set up jobs on a regular basis using:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/prophecy-docs-staging/preview/pr-592/Orchestration/airflow/",children:"Airflow"})," (Snowflake users)."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/prophecy-docs-staging/preview/pr-592/Orchestration/databricks-jobs",children:"Databricks jobs"})," (Databricks users)."]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}}}]);