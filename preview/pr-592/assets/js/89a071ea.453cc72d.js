"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[41279],{8321:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"analysts/development/gems/source-target/source-target","title":"Source and Target","description":"Source and target gems","source":"@site/docs/analysts/development/gems/source-target/source-target.md","sourceDirName":"analysts/development/gems/source-target","slug":"/analysts/source-target","permalink":"/analysts/source-target","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Source and Target","id":"source-target","slug":"/analysts/source-target","description":"Source and target gems","tags":[]},"sidebar":"mySidebar","previous":{"title":"Gems","permalink":"/analysts/gems"},"next":{"title":"Table","permalink":"/analysts/table"}}');var n=r(74848),a=r(28453);const i={title:"Source and Target",id:"source-target",slug:"/analysts/source-target",description:"Source and target gems",tags:[]},d=void 0,c={},o=[{value:"Tables",id:"tables",level:2},{value:"External Sources and Targets",id:"external-sources-and-targets",level:2}];function l(e){const t={a:"a",admonition:"admonition",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Source and Target gems define how Prophecy reads and writes data in your pipeline."}),"\n",(0,n.jsx)(t.h2,{id:"tables",children:"Tables"}),"\n",(0,n.jsx)("span",{class:"badge",children:"SQL"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.p,{children:"Tables are natively read from and written to the SQL warehouse that is configured as your primary SQL connection in a Prophecy fabric."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Table"}),(0,n.jsx)(t.td,{children:"Persistent storage of structured data in your SQL warehouse. Faster for frequent queries (indexed)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"View"}),(0,n.jsx)(t.td,{children:"A virtual table that derives data dynamically from a query. Slower for complex queries (computed at runtime)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Seed"}),(0,n.jsx)(t.td,{children:"Small CSV-format files that you can write directly in Prophecy."})]})]})]}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["When deciding between tables and external sources, consider the primary SQL connection in your Prophecy fabric. Processing tables natively in the SQL warehouse will be fast, but processing external data is slower.",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Do not create an external connection that duplicates your primary SQL warehouse connection."})]})}),"\n",(0,n.jsx)(t.h2,{id:"external-sources-and-targets",children:"External Sources and Targets"}),"\n",(0,n.jsx)("span",{class:"badge",children:"Prophecy Automate"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.p,{children:"To use data from outside of your SQL warehouse, you can use the following external sources and targets. This data is not persisted in Prophecy, but rather read through Prophecy."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"File or External Table"}),(0,n.jsxs)(t.th,{children:[(0,n.jsx)(t.a,{href:"/analysts/connections",children:"Connection"})," types"]})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CSV"}),(0,n.jsx)(t.td,{children:"S3, SFTP, Sharepoint, Databricks"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"JSON"}),(0,n.jsx)(t.td,{children:"S3, SFTP, Sharepoint, Databricks"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"XLSX"}),(0,n.jsx)(t.td,{children:"S3, SFTP, Sharepoint, Databricks, Smartsheet"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"XML"}),(0,n.jsx)(t.td,{children:"S3, SFTP, Sharepoint, Databricks"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Databricks"}),(0,n.jsx)(t.td,{children:"Databricks"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Snowflake"}),(0,n.jsx)(t.td,{children:"Snowflake"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MSSQL"}),(0,n.jsx)(t.td,{children:"MSSQL"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MongoDB"}),(0,n.jsx)(t.td,{children:"MongoDB"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>d});var s=r(96540);const n={},a=s.createContext(n);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);