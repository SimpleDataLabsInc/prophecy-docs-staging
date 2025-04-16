"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[37814],{23594:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"administration/fabrics/prophecy-fabrics/connections/mongodb","title":"MongoDB","description":"Learn how to connect with MongoDB","source":"@site/docs/administration/fabrics/prophecy-fabrics/connections/mongodb.md","sourceDirName":"administration/fabrics/prophecy-fabrics/connections","slug":"/administration/fabrics/prophecy-fabrics/connections/mongodb","permalink":"/prophecy-docs-staging/preview/pr-615/administration/fabrics/prophecy-fabrics/connections/mongodb","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"connections","permalink":"/prophecy-docs-staging/preview/pr-615/tags/connections"},{"inline":true,"label":"mongodb","permalink":"/prophecy-docs-staging/preview/pr-615/tags/mongodb"}],"version":"current","frontMatter":{"title":"MongoDB","id":"mongodb","description":"Learn how to connect with MongoDB","tags":["connections","mongodb"]},"sidebar":"adminSidebar","previous":{"title":"Snowflake","permalink":"/prophecy-docs-staging/preview/pr-615/administration/fabrics/prophecy-fabrics/connections/snowflake"},"next":{"title":"MSSQL","permalink":"/prophecy-docs-staging/preview/pr-615/administration/fabrics/prophecy-fabrics/connections/mssql"}}');var s=t(74848),o=t(28453);const r={title:"MongoDB",id:"mongodb",description:"Learn how to connect with MongoDB",tags:["connections","mongodb"]},c=void 0,a={},d=[{value:"Feature support",id:"feature-support",level:2},{value:"Parameters",id:"parameters",level:2},{value:"MongoDB permissions",id:"mongodb-permissions",level:2},{value:"Sharing connections within teams",id:"sharing-connections-within-teams",level:2},{value:"Fetching data",id:"fetching-data",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"MongoDB is a NoSQL database designed to store and retrieve unstructured or semi-structured data using BSON documents."}),"\n",(0,s.jsx)(n.h2,{id:"feature-support",children:"Feature support"}),"\n",(0,s.jsx)(n.p,{children:"The table below outlines whether the connection supports certain Prophecy features."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Feature"}),(0,s.jsx)(n.th,{children:"Supported"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Read data with a ",(0,s.jsx)(n.a,{href:"/analysts/source-target",children:"Source gem"})]}),(0,s.jsx)(n.td,{children:"Yes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Write data with a ",(0,s.jsx)(n.a,{href:"/analysts/source-target",children:"Target gem"})]}),(0,s.jsx)(n.td,{children:"Yes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Browse data in the ",(0,s.jsx)(n.a,{href:"/analysts/pipelines",children:"Environment browser"})]}),(0,s.jsx)(n.td,{children:"Yes"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:"To create a connection with MongoDB, enter the following parameters:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Connection Name"}),(0,s.jsx)(n.td,{children:"Name to to identify your connection"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Protocol"}),(0,s.jsx)(n.td,{children:"Protocol to use to communicate to the database"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Host"}),(0,s.jsx)(n.td,{children:"Where your MongoDB instance runs"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Username"}),(0,s.jsx)(n.td,{children:"Username for your MongoDB instance"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Password (",(0,s.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-615/administration/secrets/",children:"Secret required"}),")"]}),(0,s.jsx)(n.td,{children:"Password for your MongoDB instance"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Database"}),(0,s.jsx)(n.td,{children:"Default database for reading and writing data"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsx)(n.td,{children:"Collection to use for the connection"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"mongodb-permissions",children:"MongoDB permissions"}),"\n",(0,s.jsx)(n.p,{children:"When you create an MongoDB connection in Prophecy, access permissions are tied to the credentials you use. This is because Prophecy uses your credentials to execute all data operations, such as reading from or writing to collections."}),"\n",(0,s.jsx)(n.p,{children:"To fully leverage a MongoDB connection in Prophecy, you need the following MongoDB permissions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Read"})," from the collection defined in the connection"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Write"})," to the collection defined in the connection"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"sharing-connections-within-teams",children:"Sharing connections within teams"}),"\n",(0,s.jsxs)(n.p,{children:["Connections in Prophecy are stored within ",(0,s.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-615/administration/fabrics/prophecy-fabrics/",children:"fabrics"}),", which are assigned to specific teams. Once a MongoDB connection is added to a fabric, all team members that have access to the fabric can use the connection in their projects. No additional authentication is required\u2014team members automatically inherit the access and permissions of the original connection."]}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsx)(n.p,{children:"Be mindful of the access level granted by the stored credentials. Anyone on the team will have the same permissions\u2014including access to sensitive data if allowed."}),(0,s.jsx)(n.p,{children:"To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials."})]}),"\n",(0,s.jsx)(n.h2,{id:"fetching-data",children:"Fetching data"}),"\n",(0,s.jsx)(n.p,{children:"Prophecy fetches data from MongoDB connections in the following ways:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["When you browse an MongoDB connection in the ",(0,s.jsx)(n.a,{href:"/analysts/pipelines",children:"Environment browser"}),", Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"When a pipeline runs, Source gems will read the latest available version of the data. Keep in mind that schema evolution may or may not be picked up automatically depending on the type of Source gem used."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);