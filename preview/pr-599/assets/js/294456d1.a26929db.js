"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[15400],{13432:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"administration/fabrics/sql-fabrics/snowflake","title":"Snowflake SQL","description":"Run models on a Snowflake warehouse","source":"@site/docs/administration/fabrics/sql-fabrics/snowflake.md","sourceDirName":"administration/fabrics/sql-fabrics","slug":"/administration/fabrics/sql-fabrics/snowflake","permalink":"/prophecy-docs-staging/preview/pr-599/administration/fabrics/sql-fabrics/snowflake","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"snowflake","permalink":"/prophecy-docs-staging/preview/pr-599/tags/snowflake"},{"inline":true,"label":"sql","permalink":"/prophecy-docs-staging/preview/pr-599/tags/sql"},{"inline":true,"label":"fabric","permalink":"/prophecy-docs-staging/preview/pr-599/tags/fabric"}],"version":"current","frontMatter":{"title":"Snowflake SQL","id":"snowflake","description":"Run models on a Snowflake warehouse","tags":["snowflake","sql","fabric"]},"sidebar":"adminSidebar","previous":{"title":"Databricks SQL","permalink":"/prophecy-docs-staging/preview/pr-599/administration/fabrics/sql-fabrics/databricks"},"next":{"title":"Airflow fabrics","permalink":"/prophecy-docs-staging/preview/pr-599/administration/fabrics/airflow-fabrics/"}}');var i=r(74848),o=r(28453);const t={title:"Snowflake SQL",id:"snowflake",description:"Run models on a Snowflake warehouse",tags:["snowflake","sql","fabric"]},a=void 0,c={},l=[{value:"Create a fabric",id:"create-a-fabric",level:2},{value:"Basic Info",id:"basic-info",level:2},{value:"Provider",id:"provider",level:3},{value:"Schedule jobs",id:"schedule-jobs",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["To use your Snowflake warehouse for execution in Prophecy, you need to create a SQL ",(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-599/fabrics",children:"fabric"})," with a Snowflake connection."]}),"\n",(0,i.jsx)(n.h2,{id:"create-a-fabric",children:"Create a fabric"}),"\n",(0,i.jsx)(n.p,{children:"Fabrics define your Prophecy project execution environment. To create a new fabric:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Click on the ",(0,i.jsx)(n.strong,{children:"Create Entity"})," button from the left navigation bar."]}),"\n",(0,i.jsxs)(n.li,{children:["Click on the ",(0,i.jsx)(n.strong,{children:"Fabric"})," tile."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"basic-info",children:"Basic Info"}),"\n",(0,i.jsxs)(n.p,{children:["Next, complete the fields in the ",(0,i.jsx)(n.strong,{children:"Basic Info"})," page."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Provide a fabric title and description. It can be helpful to include descriptors like ",(0,i.jsx)(n.code,{children:"dev"})," or ",(0,i.jsx)(n.code,{children:"prod"})," in your title."]}),"\n",(0,i.jsx)(n.li,{children:"Select a team to own this fabric. Click the dropdown to list the teams your user is a member. If you don\u2019t see the desired team, ask a Prophecy Administrator to add you to a team."}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Continue"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"SFBasicInfo",src:r(82966).A+"",width:"2880",height:"1084"})}),"\n",(0,i.jsx)(n.h3,{id:"provider",children:"Provider"}),"\n",(0,i.jsx)(n.p,{children:"The SQL provider is both the storage warehouse and the execution environment where your SQL code will run. To configure the provider:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Select ",(0,i.jsx)(n.strong,{children:"SQL"})," as the Provider type."]}),"\n",(0,i.jsxs)(n.li,{children:["Click the dropdown menu for the list of supported Provider types and select ",(0,i.jsx)(n.strong,{children:"Snowflake"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Add the ",(0,i.jsx)(n.strong,{children:"Snowflake Account URL"})," (for example, ",(0,i.jsx)(n.code,{children:"https://<org>-<account>.snowflakecomputing.com"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["Add the ",(0,i.jsx)(n.strong,{children:"username"})," that will be used to connect to the Snowflake Warehouse."]}),"\n",(0,i.jsxs)(n.li,{children:["Add the ",(0,i.jsx)(n.strong,{children:"password"})," that will be used to connect to the Snowflake Warehouse. ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Each Prophecy user will provide their own username/password credential upon login. Prophecy respects the access scope of the Snowflake credentials, meaning users in Prophecy can read tables from each database and schema for which they have access in Snowflake. These username/password credentials are encrypted for secure storage."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Add the Snowflake ",(0,i.jsx)(n.a,{href:"https://docs.snowflake.com/en/user-guide/security-access-control-overview#roles",children:"role"})," that Prophecy will use to read data and execute queries on the Snowflake Warehouse. The role must be already granted to the username/password provided above."]}),"\n",(0,i.jsxs)(n.li,{children:["Specify the ",(0,i.jsx)(n.strong,{children:"Snowflake warehouse"})," for default writes for this execution environment."]}),"\n",(0,i.jsxs)(n.li,{children:["Specify the desired ",(0,i.jsx)(n.strong,{children:"Snowflake database and schema"})," where tables will be written to by default."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Continue"})," to complete fabric setup."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"SFProvider",src:r(96941).A+"",width:"2880",height:"1726"})}),"\n",(0,i.jsx)(n.h2,{id:"schedule-jobs",children:"Schedule jobs"}),"\n",(0,i.jsxs)(n.p,{children:["SQL models can be scheduled using Airflow to run on Snowflake. Create an ",(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-599/administration/fabrics/airflow-fabrics/",children:"Airflow fabric"}),", and set up a Snowflake connection that references the Snowflake fabric created above."]}),"\n",(0,i.jsx)(n.h2,{id:"whats-next",children:"What's next"}),"\n",(0,i.jsxs)(n.p,{children:["Attach a fabric to your SQL project and begin ",(0,i.jsx)(n.a,{href:"/engineers/data-models",children:"data modeling"}),"!"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>a});var s=r(96540);const i={},o=s.createContext(i);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(o.Provider,{value:n},e.children)}},82966:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/SnowflakeFabric1-de9169ac652415399ba6a7f2248ab96d.png"},96941:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/SnowflakeFabric2-89b80f1e394b7881e79f27225cd905e9.png"}}]);