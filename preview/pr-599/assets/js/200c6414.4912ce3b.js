"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[655],{28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}},57809:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"administration/fabrics/prophecy-fabrics/connections/connections","title":"Connections","description":"A list of connections that you can configure for projects","source":"@site/docs/administration/fabrics/prophecy-fabrics/connections/connections.md","sourceDirName":"administration/fabrics/prophecy-fabrics/connections","slug":"/administration/fabrics/prophecy-fabrics/connections/","permalink":"/prophecy-docs-staging/preview/pr-599/administration/fabrics/prophecy-fabrics/connections/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"connections","permalink":"/prophecy-docs-staging/preview/pr-599/tags/connections"},{"inline":true,"label":"sql","permalink":"/prophecy-docs-staging/preview/pr-599/tags/sql"}],"version":"current","frontMatter":{"title":"Connections","id":"connections","description":"A list of connections that you can configure for projects","tags":["connections","sql"]},"sidebar":"adminSidebar","previous":{"title":"Prophecy fabrics","permalink":"/prophecy-docs-staging/preview/pr-599/administration/fabrics/prophecy-fabrics/"},"next":{"title":"Databricks","permalink":"/prophecy-docs-staging/preview/pr-599/administration/fabrics/prophecy-fabrics/connections/databricks"}}');var i=t(74848),s=t(28453);const o={title:"Connections",id:"connections",description:"A list of connections that you can configure for projects",tags:["connections","sql"]},c=void 0,a={},d=[{value:"Supported connections",id:"supported-connections",level:2}];function l(e){const n={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Prophecy lets you work with various data providers when building your pipelines. To make this easier, you can create ",(0,i.jsx)(n.strong,{children:"connections"})," between Prophecy and a data provider. Once you add connections a fabric and use that fabric in a project, you can:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Reuse credentials that are established in the connection."}),"\n",(0,i.jsxs)(n.li,{children:["Browse data from the data provider in the ",(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-599/projects#project-editor",children:"Environment browser"})," of your Prophecy project."]}),"\n",(0,i.jsx)(n.li,{children:"Auto-index data for search in the Prophecy interface."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Connections are stored per ",(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-599/fabrics",children:"fabric"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"supported-connections",children:"Supported connections"}),"\n",(0,i.jsx)(n.p,{children:"If you are using a Prophecy fabric, you can add the following connections. You will have to be attached to a fabric to utilize its connections."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Connection"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"./databricks",children:"Databricks"})}),(0,i.jsx)(n.td,{children:"Cloud data warehouse"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"./snowflake",children:"Snowflake"})}),(0,i.jsx)(n.td,{children:"Cloud data warehouse"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Databricks volumes"}),(0,i.jsx)(n.td,{children:"File store"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Snowflake stage"}),(0,i.jsx)(n.td,{children:"File store"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"./s3",children:"Amazon S3"})}),(0,i.jsx)(n.td,{children:"File store"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"./sftp",children:"SFTP"})}),(0,i.jsx)(n.td,{children:"File store"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"./sharepoint",children:"Microsoft Sharepoint"})}),(0,i.jsx)(n.td,{children:"File store"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"./smartsheet",children:"Smartsheet"})}),(0,i.jsx)(n.td,{children:"Web application"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"./mssql",children:"MSSQL"})}),(0,i.jsx)(n.td,{children:"Database"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"./mongodb",children:"MongoDB"})}),(0,i.jsx)(n.td,{children:"Database"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"./tableau",children:"Tableau"})}),(0,i.jsx)(n.td,{children:"BI tool"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);