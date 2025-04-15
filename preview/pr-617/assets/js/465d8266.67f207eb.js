"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[69572],{28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var i=s(96540);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}},99623:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"administration/fabrics/prophecy-fabrics/connections/snowflake","title":"Snowflake","description":"Learn how to connect with Snowflake","source":"@site/docs/administration/fabrics/prophecy-fabrics/connections/snowflake.md","sourceDirName":"administration/fabrics/prophecy-fabrics/connections","slug":"/administration/fabrics/prophecy-fabrics/connections/snowflake","permalink":"/prophecy-docs-staging/preview/pr-617/administration/fabrics/prophecy-fabrics/connections/snowflake","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"connections","permalink":"/prophecy-docs-staging/preview/pr-617/tags/connections"},{"inline":true,"label":"sql","permalink":"/prophecy-docs-staging/preview/pr-617/tags/sql"},{"inline":true,"label":"snowflake","permalink":"/prophecy-docs-staging/preview/pr-617/tags/snowflake"}],"version":"current","frontMatter":{"title":"Snowflake","id":"snowflake","description":"Learn how to connect with Snowflake","tags":["connections","sql","snowflake"]},"sidebar":"adminSidebar","previous":{"title":"Databricks","permalink":"/prophecy-docs-staging/preview/pr-617/administration/fabrics/prophecy-fabrics/connections/databricks"},"next":{"title":"MongoDB","permalink":"/prophecy-docs-staging/preview/pr-617/administration/fabrics/prophecy-fabrics/connections/mongodb"}}');var t=s(74848),r=s(28453);const a={title:"Snowflake",id:"snowflake",description:"Learn how to connect with Snowflake",tags:["connections","sql","snowflake"]},o=void 0,c={},l=[{value:"Feature support",id:"feature-support",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Snowflake permissions",id:"snowflake-permissions",level:2},{value:"Sharing connections within teams",id:"sharing-connections-within-teams",level:2},{value:"Fetching data",id:"fetching-data",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Learn how to set up and use a Snowflake connection in Prophecy. With a Snowflake connection, you can read from and write to your Snowflake data warehouse using Source and Target gems, browse data in the Environment browser, and run pipelines that process Snowflake data."}),"\n",(0,t.jsx)(n.h2,{id:"feature-support",children:"Feature support"}),"\n",(0,t.jsx)(n.p,{children:"The table below outlines whether the connection supports certain Prophecy features."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Feature"}),(0,t.jsx)(n.th,{children:"Supported"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Read data with a ",(0,t.jsx)(n.a,{href:"/analysts/source-target",children:"Source gem"})]}),(0,t.jsx)(n.td,{children:"Yes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Write data with a ",(0,t.jsx)(n.a,{href:"/analysts/source-target",children:"Target gem"})]}),(0,t.jsx)(n.td,{children:"Yes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Browse data in the ",(0,t.jsx)(n.a,{href:"/analysts/pipelines",children:"Environment browser"})]}),(0,t.jsx)(n.td,{children:"Yes"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,t.jsx)(n.p,{children:"There are a few limitations on the data types you can read from Snowflake:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Prophecy reads ",(0,t.jsx)(n.code,{children:"Object"}),", ",(0,t.jsx)(n.code,{children:"Array"}),", and ",(0,t.jsx)(n.code,{children:"Variant"})," types as ",(0,t.jsx)(n.code,{children:"String"})," type."]}),"\n",(0,t.jsxs)(n.li,{children:["Prophecy does not support writing ",(0,t.jsx)(n.code,{children:"Binary"})," type columns."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:"To create a connection with Snowflake, enter the following parameters:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Connection Name"}),(0,t.jsx)(n.td,{children:"Name to to identify your connection"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Account"}),(0,t.jsxs)(n.td,{children:["URL of your Snowflake account, typically in the format",(0,t.jsx)("br",{}),(0,t.jsx)(n.code,{children:"https://<orgname>-<account_name>.snowflakecomputing.com"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Database"}),(0,t.jsx)(n.td,{children:"Default database for reading and writing data"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Schema"}),(0,t.jsx)(n.td,{children:"Default schema for reading and writing data"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Warehouse"}),(0,t.jsx)(n.td,{children:"Name of the SQL warehouse to use for the connection"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Role"}),(0,t.jsxs)(n.td,{children:["Snowflake ",(0,t.jsx)(n.a,{href:"https://docs.snowflake.com/en/user-guide/security-access-control-overview",children:"role"})," of the user to connect"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Authentication method"}),(0,t.jsxs)(n.td,{children:["Enter your Snowflake username and use a ",(0,t.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-617/administration/secrets/",children:"secret"})," to enter your password."]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"snowflake-permissions",children:"Snowflake permissions"}),"\n",(0,t.jsx)(n.p,{children:"When you create a Snowflake connection in Prophecy, all access is governed by the Snowflake credentials you provide. This is because Prophecy uses your credentials to execute all data operations, such as reading or writing files."}),"\n",(0,t.jsx)(n.p,{children:"To successfully use a Snowflake connection in Prophecy, make sure your Snowflake user has the following permissions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Read and write access to target tables"}),(0,t.jsx)(n.br,{}),"\n","Your user must be able to ",(0,t.jsx)(n.code,{children:"SELECT"}),", ",(0,t.jsx)(n.code,{children:"INSERT"}),", ",(0,t.jsx)(n.code,{children:"UPDATE"}),", and ",(0,t.jsx)(n.code,{children:"DELETE"})," on the specific tables used in your Prophecy pipelines."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Ownership of target tables"}),(0,t.jsx)(n.br,{}),"\n","Prophecy may require full control of the table (including altering or replacing it). This means the role should have ",(0,t.jsx)(n.code,{children:"OWNERSHIP"})," on the table."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Create and use file formats"}),(0,t.jsx)(n.br,{}),"\n","Prophecy writes data to Snowflake by first uploading Parquet files to a stage. You need:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Permission to ",(0,t.jsx)(n.code,{children:"CREATE FILE FORMAT"})," in the target schema"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"USAGE"})," on any existing file formats used for reading/writing Parquet"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Write access to a stage"}),(0,t.jsx)(n.br,{}),"\n","Typically, Prophecy uses your ",(0,t.jsx)(n.strong,{children:"user stage"})," for uploading Parquet files, so your user needs permission to write to that stage."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"sharing-connections-within-teams",children:"Sharing connections within teams"}),"\n",(0,t.jsxs)(n.p,{children:["Connections in Prophecy are stored within ",(0,t.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-617/administration/fabrics/prophecy-fabrics/",children:"fabrics"}),", which are assigned to specific teams. Once a Snowflake connection is added to a fabric, all team members that have access to the fabric can use the connection in their projects. No additional authentication is required\u2014team members automatically inherit the access and permissions of the original connection."]}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsx)(n.p,{children:"Be mindful of the access level granted by the stored credentials. Anyone on the team will have the same permissions\u2014including access to sensitive data if allowed."}),(0,t.jsx)(n.p,{children:"To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials."})]}),"\n",(0,t.jsx)(n.h2,{id:"fetching-data",children:"Fetching data"}),"\n",(0,t.jsx)(n.p,{children:"Prophecy fetches data from Snowflake connections in the following ways:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["When you browse a Snowflake connection in the ",(0,t.jsx)(n.a,{href:"/analysts/pipelines",children:"Environment browser"}),", Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"When a pipeline runs, Source gems will read the latest available version of the data. If the schema of your data in Snowflake changes, Prophecy will automatically use the new schema."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);