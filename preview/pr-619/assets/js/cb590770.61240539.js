"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[17308],{28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>t});var r=n(96540);const o={},a=r.createContext(o);function s(e){const i=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:i},e.children)}},29316:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"administration/fabrics/airflow-fabrics/prophecy_managed_airflow_fabric","title":"Prophecy Managed Airflow","description":"How Prophecy create a Prophecy Managed Airflow fabric","source":"@site/docs/administration/fabrics/airflow-fabrics/prophecy-managed.md","sourceDirName":"administration/fabrics/airflow-fabrics","slug":"/administration/fabrics/airflow-fabrics/prophecy_managed_airflow_fabric","permalink":"/prophecy-docs-staging/preview/pr-619/administration/fabrics/airflow-fabrics/prophecy_managed_airflow_fabric","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"scheduling","permalink":"/prophecy-docs-staging/preview/pr-619/tags/scheduling"},{"inline":true,"label":"airflow","permalink":"/prophecy-docs-staging/preview/pr-619/tags/airflow"},{"inline":true,"label":"jobs","permalink":"/prophecy-docs-staging/preview/pr-619/tags/jobs"},{"inline":true,"label":"prophecyManaged","permalink":"/prophecy-docs-staging/preview/pr-619/tags/prophecy-managed"},{"inline":true,"label":"fabric","permalink":"/prophecy-docs-staging/preview/pr-619/tags/fabric"}],"version":"current","frontMatter":{"title":"Prophecy Managed Airflow","id":"prophecy_managed_airflow_fabric","description":"How Prophecy create a Prophecy Managed Airflow fabric","tags":["scheduling","airflow","jobs","prophecyManaged","fabric"]},"sidebar":"adminSidebar","previous":{"title":"Email connection","permalink":"/prophecy-docs-staging/preview/pr-619/administration/fabrics/airflow-fabrics/connections/airflow_email_connections"},"next":{"title":"Composer","permalink":"/prophecy-docs-staging/preview/pr-619/administration/fabrics/airflow-fabrics/composer_fabric"}}');var o=n(74848),a=n(28453);const s={title:"Prophecy Managed Airflow",id:"prophecy_managed_airflow_fabric",description:"How Prophecy create a Prophecy Managed Airflow fabric",tags:["scheduling","airflow","jobs","prophecyManaged","fabric"]},t=void 0,c={},l=[{value:"Create the fabric",id:"create-the-fabric",level:2},{value:"Add Airflow connections",id:"add-airflow-connections",level:2},{value:"Limitations",id:"limitations",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.p,{children:["If you are new to Airflow and do not have an Airflow instance, you can use ",(0,o.jsx)(i.strong,{children:"Prophecy Managed Airflow"})," to try it out. When you create an Airflow fabric using Prophecy Managed Airflow, the fabric will be available to you for 21 days. Let's see how to set up this fabric."]}),"\n",(0,o.jsx)(i.h2,{id:"create-the-fabric",children:"Create the fabric"}),"\n",(0,o.jsx)(i.p,{children:"To create a new Airflow fabric:"}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsxs)(i.li,{children:["Click the ",(0,o.jsx)(i.strong,{children:"Create Entity"})," button."]}),"\n",(0,o.jsxs)(i.li,{children:["Choose ",(0,o.jsx)(i.strong,{children:"Create Fabric"})," option."]}),"\n",(0,o.jsxs)(i.li,{children:["On the Basic Info page:","\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["Enter a ",(0,o.jsx)(i.strong,{children:"Fabric Name"}),"."]}),"\n",(0,o.jsxs)(i.li,{children:["Enter a ",(0,o.jsx)(i.strong,{children:"Fabric Description"}),"."]}),"\n",(0,o.jsxs)(i.li,{children:["Choose the ",(0,o.jsx)(i.strong,{children:"Team"})," that will own the fabric."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["Click ",(0,o.jsx)(i.strong,{children:"Continue"}),"."]}),"\n",(0,o.jsxs)(i.li,{children:["Configure the Provider information.","\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["Choose ",(0,o.jsx)(i.strong,{children:"Prophecy Managed"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"add-airflow-connections",children:"Add Airflow connections"}),"\n",(0,o.jsx)(i.p,{children:"To perform actions like running a pipeline in your Airflow job, you need add various Airflow connections. For example, to run a Spark pipeline, we need to add a connection to a Spark engine."}),"\n",(0,o.jsxs)(i.p,{children:["In the ",(0,o.jsx)(i.strong,{children:"Connections"})," tab, click ",(0,o.jsx)(i.strong,{children:"+ Add Connection"})," to set up a new connection. You can add multiple connections in the fabric."]}),"\n",(0,o.jsxs)(i.p,{children:["To view a list of connection types with configuration details, visit our page on ",(0,o.jsx)(i.a,{href:"/prophecy-docs-staging/preview/pr-619/administration/fabrics/airflow-fabrics/connections/",children:"Airflow connections"}),"."]}),"\n",(0,o.jsx)(i.admonition,{type:"info",children:(0,o.jsxs)(i.p,{children:["To let Prophecy Managed Airflow connect to applications like Snowflake, you may need to Whitelist the NAT IP ",(0,o.jsx)(i.code,{children:"34.28.21.243"})," in your applications."]})}),"\n",(0,o.jsx)(i.h2,{id:"limitations",children:"Limitations"}),"\n",(0,o.jsx)(i.p,{children:"Prophecy Managed Airflow has the following limitations:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["Prophecy Managed Airflow is run on a Composer instance of size ",(0,o.jsx)(i.strong,{children:"large"}),". The maximum number of DAGs is ",(0,o.jsx)(i.code,{children:"1000"}),". The maximum total number of concurrent tasks running in parallel is ",(0,o.jsx)(i.code,{children:"10"}),"."]}),"\n",(0,o.jsx)(i.li,{children:"For security purposes, some types of tasks and operations are blocked on Prophecy Managed Airflow. For example, running Python or Script tasks are restricted.\nThis is to prevent any misuse by malicious code in these tasks."}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"Please reach out to Prophecy support team if any of these restrictions or limits is blocking your use cases."})]})}function p(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);