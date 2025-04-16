"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[32163],{28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(96540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}},38914:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"administration/fabrics/prophecy-fabrics/connections/mssql","title":"MSSQL","description":"Learn how to connect with Microsoft SQL Server","source":"@site/docs/administration/fabrics/prophecy-fabrics/connections/mssql.md","sourceDirName":"administration/fabrics/prophecy-fabrics/connections","slug":"/administration/fabrics/prophecy-fabrics/connections/mssql","permalink":"/prophecy-docs-staging/preview/pr-615/administration/fabrics/prophecy-fabrics/connections/mssql","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"connections","permalink":"/prophecy-docs-staging/preview/pr-615/tags/connections"},{"inline":true,"label":"msssql","permalink":"/prophecy-docs-staging/preview/pr-615/tags/msssql"}],"version":"current","frontMatter":{"title":"MSSQL","id":"mssql","description":"Learn how to connect with Microsoft SQL Server","tags":["connections","msssql"]},"sidebar":"adminSidebar","previous":{"title":"MongoDB","permalink":"/prophecy-docs-staging/preview/pr-615/administration/fabrics/prophecy-fabrics/connections/mongodb"},"next":{"title":"Amazon S3","permalink":"/prophecy-docs-staging/preview/pr-615/administration/fabrics/prophecy-fabrics/connections/s3"}}');var i=s(74848),r=s(28453);const o={title:"MSSQL",id:"mssql",description:"Learn how to connect with Microsoft SQL Server",tags:["connections","msssql"]},a=void 0,c={},d=[{value:"Feature support",id:"feature-support",level:2},{value:"Parameters",id:"parameters",level:2},{value:"MSSQL permissions",id:"mssql-permissions",level:2},{value:"Sharing connections within teams",id:"sharing-connections-within-teams",level:2},{value:"Fetching data",id:"fetching-data",level:2}];function h(e){const n={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Use this connection to integrate with Microsoft SQL Server (MSSQL)\u2014a relational database used for storing and querying structured data, with strong support for transactions, security, and complex SQL."}),"\n",(0,i.jsx)(n.h2,{id:"feature-support",children:"Feature support"}),"\n",(0,i.jsx)(n.p,{children:"The table below outlines whether the connection supports certain Prophecy features."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Feature"}),(0,i.jsx)(n.th,{children:"Supported"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Read data with a ",(0,i.jsx)(n.a,{href:"/analysts/source-target",children:"Source gem"})]}),(0,i.jsx)(n.td,{children:"Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Write data with a ",(0,i.jsx)(n.a,{href:"/analysts/source-target",children:"Target gem"})]}),(0,i.jsx)(n.td,{children:"Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Browse data in the ",(0,i.jsx)(n.a,{href:"/analysts/pipelines",children:"Environment browser"})]}),(0,i.jsx)(n.td,{children:"Yes"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(n.p,{children:"To create a connection with Microsoft SQL Server, enter the following parameters:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Connection Name"}),(0,i.jsx)(n.td,{children:"Name to to identify your connection"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Server"}),(0,i.jsx)(n.td,{children:"Server to use for the connection"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Port"}),(0,i.jsx)(n.td,{children:"Port to use for the connection"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Username"}),(0,i.jsx)(n.td,{children:"Username for your Microsoft SQL Server instance"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Password (",(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-615/administration/secrets/",children:"Secret required"}),")"]}),(0,i.jsx)(n.td,{children:"Password for your Microsoft SQL Server instance"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"mssql-permissions",children:"MSSQL permissions"}),"\n",(0,i.jsx)(n.p,{children:"When you create an MSSQL connection in Prophecy, access permissions are tied to the credentials you use. This is because Prophecy uses your credentials to execute all data operations, such as reading from or writing to tables. To fully leverage an MSSQL connection in Prophecy, you need read and write access to the tables you use."}),"\n",(0,i.jsx)(n.h2,{id:"sharing-connections-within-teams",children:"Sharing connections within teams"}),"\n",(0,i.jsxs)(n.p,{children:["Connections in Prophecy are stored within ",(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-615/administration/fabrics/prophecy-fabrics/",children:"fabrics"}),", which are assigned to specific teams. Once a MSSQL connection is added to a fabric, all team members that have access to the fabric can use the connection in their projects. No additional authentication is required\u2014team members automatically inherit the access and permissions of the original connection."]}),"\n",(0,i.jsxs)(n.admonition,{type:"caution",children:[(0,i.jsx)(n.p,{children:"Be mindful of the access level granted by the stored credentials. Anyone on the team will have the same permissions\u2014including access to sensitive data if allowed."}),(0,i.jsx)(n.p,{children:"To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials."})]}),"\n",(0,i.jsx)(n.h2,{id:"fetching-data",children:"Fetching data"}),"\n",(0,i.jsx)(n.p,{children:"Prophecy fetches data from MSSQL connections in the following ways:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When you browse a MSSQL connection in the ",(0,i.jsx)(n.a,{href:"/analysts/pipelines",children:"Environment browser"}),", Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"When a pipeline runs, Source gems will read the latest available version of the data. If the schema of your data in MSSQL changes, Prophecy will automatically use the new schema."}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);