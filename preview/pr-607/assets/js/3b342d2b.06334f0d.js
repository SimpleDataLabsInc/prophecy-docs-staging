"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[32163],{28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var i=s(96540);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}},38914:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"administration/fabrics/prophecy-fabrics/connections/mssql","title":"MSSQL","description":"Learn how to connect with Microsoft SQL Server","source":"@site/docs/administration/fabrics/prophecy-fabrics/connections/mssql.md","sourceDirName":"administration/fabrics/prophecy-fabrics/connections","slug":"/administration/fabrics/prophecy-fabrics/connections/mssql","permalink":"/prophecy-docs-staging/preview/pr-607/administration/fabrics/prophecy-fabrics/connections/mssql","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"connections","permalink":"/prophecy-docs-staging/preview/pr-607/tags/connections"},{"inline":true,"label":"msssql","permalink":"/prophecy-docs-staging/preview/pr-607/tags/msssql"}],"version":"current","frontMatter":{"title":"MSSQL","id":"mssql","description":"Learn how to connect with Microsoft SQL Server","tags":["connections","msssql"]},"sidebar":"adminSidebar","previous":{"title":"MongoDB","permalink":"/prophecy-docs-staging/preview/pr-607/administration/fabrics/prophecy-fabrics/connections/mongodb"},"next":{"title":"Amazon S3","permalink":"/prophecy-docs-staging/preview/pr-607/administration/fabrics/prophecy-fabrics/connections/s3"}}');var t=s(74848),r=s(28453);const o={title:"MSSQL",id:"mssql",description:"Learn how to connect with Microsoft SQL Server",tags:["connections","msssql"]},c=void 0,a={},d=[{value:"Parameters",id:"parameters",level:2},{value:"MSSQL permissions",id:"mssql-permissions",level:2},{value:"Sharing connections within teams",id:"sharing-connections-within-teams",level:2},{value:"Sync connection",id:"sync-connection",level:2},{value:"Limitations",id:"limitations",level:2}];function l(e){const n={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Microsoft SQL Server (MSSQL) is a reliable, enterprise-grade relational database used for storing and querying structured data, with strong support for transactions, security, and complex SQL. It\u2019s a popular choice for organizations already invested in the Microsoft ecosystem or needing a stable on-prem or cloud-compatible data platform."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Feature"}),(0,t.jsx)(n.th,{children:"Supported"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Read data with a ",(0,t.jsx)(n.a,{href:"/analysts/source-target",children:"Source gem"})]}),(0,t.jsx)(n.td,{children:"Yes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Write data with a ",(0,t.jsx)(n.a,{href:"/analysts/source-target",children:"Target gem"})]}),(0,t.jsx)(n.td,{children:"Yes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Browse data in the ",(0,t.jsx)(n.a,{href:"/analysts/pipelines",children:"Environment browser"})]}),(0,t.jsx)(n.td,{children:"Yes"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:"To create a connection with Microsoft SQL Server, enter the following parameters:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Connection Name"}),(0,t.jsx)(n.td,{children:"Name to to identify your connection"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Server"}),(0,t.jsx)(n.td,{children:"Server to use for the connection"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Port"}),(0,t.jsx)(n.td,{children:"Port to use for the connection"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Username"}),(0,t.jsx)(n.td,{children:"Username for your Microsoft SQL Server instance"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Password (",(0,t.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-607/administration/secrets/",children:"Secret required"}),")"]}),(0,t.jsx)(n.td,{children:"Password for your Microsoft SQL Server instance"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"mssql-permissions",children:"MSSQL permissions"}),"\n",(0,t.jsx)(n.p,{children:"When you create an MSSQL connection in Prophecy, access permissions are tied to the credentials you use. This means you will only see the data your MSSQL credentials have permission to access. Any actions you perform\u2014such as reading or writing files\u2014are done using those credentials."}),"\n",(0,t.jsx)(n.p,{children:"To fully leverage an MSSQL connection in Prophecy, you need the following MSSQL permissions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Example"}),"\n",(0,t.jsx)(n.li,{children:"Example"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"sharing-connections-within-teams",children:"Sharing connections within teams"}),"\n",(0,t.jsxs)(n.p,{children:["Connections in Prophecy are stored within ",(0,t.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-607/administration/fabrics/prophecy-fabrics/",children:"fabrics"}),", which are assigned to specific teams. Once a MSSQL connection is added to a fabric, all team members that have access to the fabric can use the connection in their projects. No additional authentication is required\u2014team members automatically inherit the access and permissions of the original connection."]}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsx)(n.p,{children:"Be mindful of the access level granted by the stored credentials. Anyone on the team will have the same permissions\u2014including access to sensitive data if allowed."}),(0,t.jsx)(n.p,{children:"To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials."})]}),"\n",(0,t.jsx)(n.h2,{id:"sync-connection",children:"Sync connection"}),"\n",(0,t.jsx)(n.p,{children:"Prophecy fetches data from MSSQL connections in the following ways:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["When you browse a MSSQL connection in the ",(0,t.jsx)(n.a,{href:"/analysts/pipelines",children:"Environment browser"}),", Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"When a pipeline runs, Source gems will read the latest available version of the data. Keep in mind that schema evolution may or may not be picked up automatically depending on the type of Source gem used."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"limitations",children:"Limitations"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}}}]);