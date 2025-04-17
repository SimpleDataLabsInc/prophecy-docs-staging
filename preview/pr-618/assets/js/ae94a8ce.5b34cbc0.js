"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[44193],{19285:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>c,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"administration/fabrics/prophecy-fabrics/prophecy-fabrics","title":"Prophecy fabrics","description":"Use Prophecy and SQL to run pipelines","source":"@site/docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md","sourceDirName":"administration/fabrics/prophecy-fabrics","slug":"/administration/fabrics/prophecy-fabrics/","permalink":"/prophecy-docs-staging/preview/pr-618/administration/fabrics/prophecy-fabrics/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"fabric","permalink":"/prophecy-docs-staging/preview/pr-618/tags/fabric"},{"inline":true,"label":"SQL","permalink":"/prophecy-docs-staging/preview/pr-618/tags/sql"},{"inline":true,"label":"analyst","permalink":"/prophecy-docs-staging/preview/pr-618/tags/analyst"}],"version":"current","frontMatter":{"title":"Prophecy fabrics","description":"Use Prophecy and SQL to run pipelines","id":"prophecy-fabrics","sidebar_label":"Prophecy fabrics","tags":["fabric","SQL","analyst"]},"sidebar":"adminSidebar","previous":{"title":"Fabrics","permalink":"/prophecy-docs-staging/preview/pr-618/administration/fabrics"},"next":{"title":"Connections","permalink":"/prophecy-docs-staging/preview/pr-618/administration/fabrics/prophecy-fabrics/connections/"}}');var s=i(74848),t=i(28453);const c={title:"Prophecy fabrics",description:"Use Prophecy and SQL to run pipelines",id:"prophecy-fabrics",sidebar_label:"Prophecy fabrics",tags:["fabric","SQL","analyst"]},o=void 0,a={},h=[{value:"Create a Prophecy fabric",id:"create-a-prophecy-fabric",level:2},{value:"Basic Info",id:"basic-info",level:3},{value:"Providers",id:"providers",level:3},{value:"Connections",id:"connections",level:3},{value:"Secrets",id:"secrets",level:3},{value:"Save the fabric",id:"save-the-fabric",level:2}];function d(e){const r={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"To build SQL project, connect to Prophecy fabrics for pipeline execution. Prophecy fabrics leverage multiple engines for execution:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Primary SQL warehouse"}),": This is your external SQL environment, serving as the default data storage and query execution engine. A primary SQL warehouse connection is mandatory when configuring a Prophecy fabric. All SQL queries within your pipelines are executed in the primary warehouse."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Prophecy Automate"}),": This is Prophecy's runtime environment, responsible for pipeline orchestration and data flow management. It facilitates data movement between external systems (e.g., Salesforce, Tableau) and the SQL warehouse."]}),"\n"]}),"\n",(0,s.jsx)(r.admonition,{title:"Primary SQL warehouse",type:"info",children:(0,s.jsx)(r.p,{children:"Prophecy executes SQL queries exclusively in the primary SQL warehouse. If you configure additional SQL connections in your fabric, Prophecy will use only use them for explicit data read and write operations within specific pipeline components."})}),"\n",(0,s.jsx)(r.h2,{id:"create-a-prophecy-fabric",children:"Create a Prophecy fabric"}),"\n",(0,s.jsx)(r.p,{children:"Use the following instructions to create a Prophecy fabric."}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["From the left sidebar, click the ",(0,s.jsx)(r.strong,{children:"+"})," sign."]}),"\n",(0,s.jsxs)(r.li,{children:["On the Create Entity page, select ",(0,s.jsx)(r.strong,{children:"Fabric"}),"."]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Each of the following sections corresponds to a tab of the fabric settings."}),"\n",(0,s.jsx)(r.h3,{id:"basic-info",children:"Basic Info"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Required"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Name"}),(0,s.jsx)(r.td,{children:"The name of the fabric."}),(0,s.jsx)(r.td,{children:"Yes"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Description"}),(0,s.jsx)(r.td,{children:"A description of the fabric."}),(0,s.jsx)(r.td,{children:"No"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/prophecy-docs-staging/preview/pr-618/administration/teams-users/teams-users",children:"Team"})}),(0,s.jsx)(r.td,{children:"The team that will have access to the fabric."}),(0,s.jsx)(r.td,{children:"Yes"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"providers",children:"Providers"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Required"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Provider Type"}),(0,s.jsxs)(r.td,{children:["The type of fabric. Choose ",(0,s.jsx)(r.strong,{children:"Prophecy"}),"."]}),(0,s.jsx)(r.td,{children:"Yes"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Provider"}),(0,s.jsx)(r.td,{children:"The provider of the primary SQL warehouse. Prophecy supports Databricks, Snowflake, and BigQuery."}),(0,s.jsx)(r.td,{children:"Yes"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Advanced Settings"}),(0,s.jsxs)(r.td,{children:["The option to use Prophecy Automate from a different networking zone (only applicable if ",(0,s.jsx)(r.a,{href:"/prophecy-docs-staging/preview/pr-618/administration/architecture",children:"not deployed in Prophecy network"}),")."]}),(0,s.jsx)(r.td,{children:"No"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"connections",children:"Connections"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Required"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"SQL Warehouse Connection"}),(0,s.jsx)(r.td,{children:"The primary SQL warehouse connection. When you use this fabric, all SQL queries will be executed on this warehouse."}),(0,s.jsx)(r.td,{children:"Yes"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Connections"}),(0,s.jsx)(r.td,{children:"Additional connections to external data providers that will be accessible to those who use this fabric."}),(0,s.jsx)(r.td,{children:"No"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"secrets",children:"Secrets"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Required"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Secrets"}),(0,s.jsx)(r.td,{children:"Secrets that will be accessible to those who use this fabric."}),(0,s.jsx)(r.td,{children:"Required for certain connections"})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"save-the-fabric",children:"Save the fabric"}),"\n",(0,s.jsx)(r.p,{children:"Once you have configured these parameters:"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"Prophecy will test the connection for you."}),"\n",(0,s.jsx)(r.li,{children:"If the connection fails, Prophecy will provide an error to help you troubleshoot the connection."}),"\n",(0,s.jsxs)(r.li,{children:["If the connection succeeds, you can ",(0,s.jsx)(r.strong,{children:"Save"})," the connection."]}),"\n"]})]})}function l(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>c,x:()=>o});var n=i(96540);const s={},t=n.createContext(s);function c(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);