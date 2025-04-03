"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[92713],{28453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>o});var s=n(96540);const t={},r=s.createContext(t);function a(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:i},e.children)}},35194:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/DatabricksFabric1-dfb745cd8ac8b254dac9fbdb3e65c420.png"},43505:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/DatabricksFabric2-693ac4981dd8c1e1300707ed71804377.png"},74642:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"administration/fabrics/sql-fabrics/databricks","title":"Databricks SQL","description":"Run models on a Databricks SQL warehouse","source":"@site/docs/administration/fabrics/sql-fabrics/databricks.md","sourceDirName":"administration/fabrics/sql-fabrics","slug":"/administration/fabrics/sql-fabrics/databricks","permalink":"/prophecy-docs-staging/preview/pr-600/administration/fabrics/sql-fabrics/databricks","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"databricks","permalink":"/prophecy-docs-staging/preview/pr-600/tags/databricks"},{"inline":true,"label":"sql","permalink":"/prophecy-docs-staging/preview/pr-600/tags/sql"},{"inline":true,"label":"fabric","permalink":"/prophecy-docs-staging/preview/pr-600/tags/fabric"}],"version":"current","frontMatter":{"title":"Databricks SQL","id":"databricks","description":"Run models on a Databricks SQL warehouse","tags":["databricks","sql","fabric"]},"sidebar":"adminSidebar","previous":{"title":"SQL fabrics","permalink":"/prophecy-docs-staging/preview/pr-600/administration/fabrics/sql-fabrics/Fabrics"},"next":{"title":"Snowflake SQL","permalink":"/prophecy-docs-staging/preview/pr-600/administration/fabrics/sql-fabrics/snowflake"}}');var t=n(74848),r=n(28453);const a={title:"Databricks SQL",id:"databricks",description:"Run models on a Databricks SQL warehouse",tags:["databricks","sql","fabric"]},o=void 0,c={},l=[{value:"Create a fabric",id:"create-a-fabric",level:2},{value:"Basic Info",id:"basic-info",level:2},{value:"Provider",id:"provider",level:3},{value:"Optional: Connections",id:"optional-connections",level:3},{value:"What&#39;s next",id:"whats-next",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["To use your Databricks SQL warehouse for execution in Prophecy, you need to create a SQL ",(0,t.jsx)(i.a,{href:"/prophecy-docs-staging/preview/pr-600/fabrics",children:"fabric"})," with a Databricks connection."]}),"\n",(0,t.jsx)(i.h2,{id:"create-a-fabric",children:"Create a fabric"}),"\n",(0,t.jsx)(i.p,{children:"Fabrics define your Prophecy project execution environment. To create a new fabric:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Click on the ",(0,t.jsx)(i.strong,{children:"Create Entity"})," button from the left navigation bar."]}),"\n",(0,t.jsxs)(i.li,{children:["Click on the ",(0,t.jsx)(i.strong,{children:"Fabric"})," tile."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"basic-info",children:"Basic Info"}),"\n",(0,t.jsxs)(i.p,{children:["Next, complete the fields in the ",(0,t.jsx)(i.strong,{children:"Basic Info"})," page."]}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Provide a fabric title and description. It can be helpful to include descriptors like ",(0,t.jsx)(i.code,{children:"dev"})," or ",(0,t.jsx)(i.code,{children:"prod"})," in your title."]}),"\n",(0,t.jsx)(i.li,{children:"Select a team to own this fabric. Click the dropdown to list the teams your user is a member. If you don\u2019t see the desired team, ask a Prophecy Administrator to add you to a team."}),"\n",(0,t.jsxs)(i.li,{children:["Click ",(0,t.jsx)(i.strong,{children:"Continue"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"DBInfo",src:n(35194).A+"",width:"2880",height:"1084"})}),"\n",(0,t.jsx)(i.h3,{id:"provider",children:"Provider"}),"\n",(0,t.jsx)(i.p,{children:"The SQL provider is both the storage warehouse and the execution environment where your SQL code will run. To configure the provider:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Select ",(0,t.jsx)(i.strong,{children:"SQL"})," as the Provider type."]}),"\n",(0,t.jsxs)(i.li,{children:["Click the dropdown menu for the list of supported Provider types, and select ",(0,t.jsx)(i.strong,{children:"Databricks"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Copy the ",(0,t.jsx)(i.strong,{children:"JDBC URL"})," from the Databricks UI as shown. This is the URL that Prophecy will connect for SQL Warehouse data storage and execution. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["If using self-signed certificates, add ",(0,t.jsx)(i.code,{children:"AllowSelfSignedCerts=1"})," to your JDBC URL."]})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["Add a ",(0,t.jsx)(i.strong,{children:"personal access token"})," (PAT) that will let Prophecy connect to Databricks. Each user supplies their own token when using the fabric. To generate a PAT, follow ",(0,t.jsx)(i.a,{href:"https://docs.databricks.com/en/dev-tools/auth/pat.html#databricks-personal-access-tokens-for-workspace-users",children:"the Databricks documentation"}),"."]}),"\n",(0,t.jsx)(i.li,{children:"Optional: Enter the Catalog name if you are using Unity Catalog."}),"\n",(0,t.jsxs)(i.li,{children:["Click ",(0,t.jsx)(i.strong,{children:"Continue"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"SFProvider",src:n(43505).A+"",width:"2880",height:"1084"})}),"\n",(0,t.jsxs)(i.p,{children:["Prophecy respects ",(0,t.jsx)(i.strong,{children:"individual user credentials"})," when accessing Databricks catalogs, tables, databases, etc."]}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsx)(i.p,{children:"Prophecy supports Databricks Volumes. When you run a Python or Scala pipeline via a job, you must bundle them as whl/jar artifacts. These artifacts must then be made accessible to the Databricks job in order to use them as a library installed on the cluster. You can designate a path to a Volume for uploading the whl/jar files under Artifacts."})}),"\n",(0,t.jsx)(i.h3,{id:"optional-connections",children:"Optional: Connections"}),"\n",(0,t.jsx)(i.p,{children:"If you want to crawl your warehouse metadata on a regular basis, you can set a connection here."}),"\n",(0,t.jsx)(i.h2,{id:"whats-next",children:"What's next"}),"\n",(0,t.jsxs)(i.p,{children:["Attach a fabric to your SQL project and begin ",(0,t.jsx)(i.a,{href:"/engineers/data-models",children:"data modeling"}),"!"]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);