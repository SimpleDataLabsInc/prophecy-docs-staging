"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[37814],{23594:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"administration/fabrics/prophecy-fabrics/connections/mongodb","title":"MongoDB","description":"Learn how to connect with MongoDB","source":"@site/docs/administration/fabrics/prophecy-fabrics/connections/mongodb.md","sourceDirName":"administration/fabrics/prophecy-fabrics/connections","slug":"/administration/fabrics/prophecy-fabrics/connections/mongodb","permalink":"/prophecy-docs-staging/preview/pr-607/administration/fabrics/prophecy-fabrics/connections/mongodb","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"connections","permalink":"/prophecy-docs-staging/preview/pr-607/tags/connections"},{"inline":true,"label":"mongodb","permalink":"/prophecy-docs-staging/preview/pr-607/tags/mongodb"}],"version":"current","frontMatter":{"title":"MongoDB","id":"mongodb","description":"Learn how to connect with MongoDB","tags":["connections","mongodb"]},"sidebar":"adminSidebar","previous":{"title":"Snowflake","permalink":"/prophecy-docs-staging/preview/pr-607/administration/fabrics/prophecy-fabrics/connections/snowflake"},"next":{"title":"MSSQL","permalink":"/prophecy-docs-staging/preview/pr-607/administration/fabrics/prophecy-fabrics/connections/mssql"}}');var s=t(74848),o=t(28453);const r={title:"MongoDB",id:"mongodb",description:"Learn how to connect with MongoDB",tags:["connections","mongodb"]},a=void 0,c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"MongoDB permissions",id:"mongodb-permissions",level:2},{value:"Sharing connections within teams",id:"sharing-connections-within-teams",level:2},{value:"Sync connection",id:"sync-connection",level:2},{value:"Limitations",id:"limitations",level:2}];function l(e){const n={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"MongoDB is a popular NoSQL database designed to store and retrieve unstructured or semi-structured data using flexible, JSON-like documents. It\u2019s often used in modern applications where data structures can evolve over time."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Feature"}),(0,s.jsx)(n.th,{children:"Supported"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Read data with a ",(0,s.jsx)(n.a,{href:"/analysts/source-target",children:"Source gem"})]}),(0,s.jsx)(n.td,{children:"Yes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Write data with a ",(0,s.jsx)(n.a,{href:"/analysts/source-target",children:"Target gem"})]}),(0,s.jsx)(n.td,{children:"Yes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Browse data in the ",(0,s.jsx)(n.a,{href:"/analysts/pipelines",children:"Environment browser"})]}),(0,s.jsx)(n.td,{children:"Yes"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:"To create a connection with MongoDB, enter the following parameters:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Connection Name"}),(0,s.jsx)(n.td,{children:"Name to to identify your connection"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Protocol"}),(0,s.jsx)(n.td,{children:"Protocol to use to communicate to the database"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Host"}),(0,s.jsx)(n.td,{children:"Where your MongoDB instance runs"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Username"}),(0,s.jsx)(n.td,{children:"Username for your MongoDB instance"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Password (",(0,s.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-607/administration/secrets/",children:"Secret required"}),")"]}),(0,s.jsx)(n.td,{children:"Password for your MongoDB instance"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Database"}),(0,s.jsx)(n.td,{children:"Default database for reading and writing data"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsx)(n.td,{children:"Collection to use for the connection"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"mongodb-permissions",children:"MongoDB permissions"}),"\n",(0,s.jsx)(n.p,{children:"When you create an MongoDB connection in Prophecy, access permissions are tied to the credentials you use. This means you will only see the data your MongoDB credentials have permission to access. Any actions you perform\u2014such as reading or writing files\u2014are done using those credentials."}),"\n",(0,s.jsx)(n.p,{children:"To fully leverage an MongoDB connection in Prophecy, you need the following MongoDB permissions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Example"}),"\n",(0,s.jsx)(n.li,{children:"Example"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"sharing-connections-within-teams",children:"Sharing connections within teams"}),"\n",(0,s.jsx)(n.p,{children:"Connections are stored inside fabrics that are assigned to certain teams. Once an MongoDB connection is added to a fabric:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Anyone in the team can use that connection in pipelines and browse it in the Environment browser."}),"\n",(0,s.jsx)(n.li,{children:"Team members do not need to reauthenticate. They inherit the same access and permissions as the original connection setup."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Everyone who uses the connection will operate with the same access level granted by the stored credentials."}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Be mindful of what permissions the credentials provide. If they allow access to sensitive data, anyone on the team using that connection will have the same level of access."})}),"\n",(0,s.jsx)(n.h2,{id:"sync-connection",children:"Sync connection"}),"\n",(0,s.jsx)(n.p,{children:"As you start using MongoDB connections in Prophecy, it\u2019s important to understand how data is fetched and kept up to date in a project."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["When you browse an MongoDB connection in the ",(0,s.jsx)(n.a,{href:"/analysts/pipelines",children:"Environment browser"}),", Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"When a pipeline runs, Source gems will read the latest available version of the data. Keep in mind that schema evolution may or may not be picked up automatically depending on the type of Source gem used."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"limitations",children:"Limitations"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);