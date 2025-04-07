"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[71691],{2683:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/selectsparkpool-0ef94c63f173e425a9264e33bbb130a5.png"},14504:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"administration/fabrics/Spark-fabrics/azure-synapse-fabric-guide","title":"Azure Synapse","description":"Configure an Azure Synapse fabric","source":"@site/docs/administration/fabrics/Spark-fabrics/synapsefabric.md","sourceDirName":"administration/fabrics/Spark-fabrics","slug":"/administration/fabrics/Spark-fabrics/azure-synapse-fabric-guide","permalink":"/prophecy-docs-staging/preview/pr-603/administration/fabrics/Spark-fabrics/azure-synapse-fabric-guide","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"deployment","permalink":"/prophecy-docs-staging/preview/pr-603/tags/deployment"},{"inline":true,"label":"configuration","permalink":"/prophecy-docs-staging/preview/pr-603/tags/configuration"},{"inline":true,"label":"open-source-spark","permalink":"/prophecy-docs-staging/preview/pr-603/tags/open-source-spark"},{"inline":true,"label":"livy","permalink":"/prophecy-docs-staging/preview/pr-603/tags/livy"}],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Azure Synapse","id":"azure-synapse-fabric-guide","description":"Configure an Azure Synapse fabric","sidebar_position":6,"tags":["deployment","configuration","open-source-spark","livy"]},"sidebar":"adminSidebar","previous":{"title":"Google Cloud Dataproc","permalink":"/prophecy-docs-staging/preview/pr-603/administration/fabrics/Spark-fabrics/gcp-dataproc-fabric-guide"},"next":{"title":"SQL fabrics","permalink":"/prophecy-docs-staging/preview/pr-603/administration/fabrics/sql-fabrics/Fabrics"}}');var i=s(74848),a=s(28453);const t={title:"Azure Synapse",id:"azure-synapse-fabric-guide",description:"Configure an Azure Synapse fabric",sidebar_position:6,tags:["deployment","configuration","open-source-spark","livy"]},o=void 0,c={},p=[{value:"An existing Azure Synapse Analytics environment",id:"an-existing-azure-synapse-analytics-environment",level:2},{value:"Configure connectivity between Synapse and Prophecy",id:"configure-connectivity-between-synapse-and-prophecy",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In the context of Spark execution engines, users have the flexibility to opt for Azure Synapse Analytics while utilizing Prophecy. Use this step-by-step guide on creating a fabric to connect to the Azure Synapse Workspace via Livy."}),"\n",(0,i.jsx)(n.p,{children:"Feel free to explore the following sections to gain insights into the integration of Azure Synapse Analytics with Prophecy."}),"\n",(0,i.jsx)(n.h2,{id:"an-existing-azure-synapse-analytics-environment",children:"An existing Azure Synapse Analytics environment"}),"\n",(0,i.jsx)(n.p,{children:"A properly configured Azure Synapse Analytics environment is required before configuring a Synapse fabric on Prophecy. Prophecy configurations include the following:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["A Synapse workspace with proper security configured. If you don't have an existing workspace, you may deploy one from the ",(0,i.jsx)(n.a,{href:"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/microsoft.synapse?tab=overview",children:"Azure Marketplace"}),"."]}),"\n",(0,i.jsx)("img",{src:s(64666).A,alt:"Synapse security",width:"75%"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Deploy a Synapse Spark Pool if one doesn't already exist."}),"\n",(0,i.jsx)("img",{src:s(22019).A,alt:"Synapse pool",width:"75%"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Make sure the Application is registered."}),"\n",(0,i.jsx)("img",{src:s(84523).A,alt:"Synapse security",width:"75%"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a secret for your Application."}),"\n",(0,i.jsx)("img",{src:s(95504).A,alt:"Synapse security",width:"75%"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Make a note of your secret. We need this information for your fabric."}),"\n",(0,i.jsx)("img",{src:s(89696).A,alt:"Synapse security",width:"75%"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Configure Application, Workspace, Storage roles to ensure proper access."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Find more information on assigning roles from ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/synapse-analytics/security/how-to-set-up-access-control",children:"Azure's documentation"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"configure-connectivity-between-synapse-and-prophecy",children:"Configure connectivity between Synapse and Prophecy"}),"\n",(0,i.jsxs)(n.p,{children:["Note that the Prophecy public IP is ",(0,i.jsx)(n.code,{children:"3.133.35.237"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Navigate to Prophecy's UI and click on ",(0,i.jsx)(n.strong,{children:"Create Fabric"}),". The fabric will establish a connection with your Synapse environment and utilize it as the execution engine for your pipelines."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.p,{children:["Choose ",(0,i.jsx)(n.strong,{children:"Synapse"})," as your ",(0,i.jsx)(n.strong,{children:"Provider"}),"."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("img",{src:s(84254).A,alt:"Synapse connect",width:"75%"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.p,{children:["Copy and paste your ",(0,i.jsx)(n.strong,{children:"Application Client ID"}),", ",(0,i.jsx)(n.strong,{children:"Secret Value"}),", and ",(0,i.jsx)(n.strong,{children:"Tenant ID"})," from the App Registration page."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("img",{src:s(54933).A,alt:"Synapse connect",width:"75%"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.p,{children:["Copy and paste your Synapse ",(0,i.jsx)(n.strong,{children:"Resource Group Name"})," and ",(0,i.jsx)(n.strong,{children:"Subscription ID"})," from your Synapse workspace."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("img",{src:s(65707).A,alt:"Synapse connect",width:"75%"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.p,{children:["Click on ",(0,i.jsx)(n.strong,{children:"Fetch environments"}),"."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.p,{children:["Select your Spark pool from the ",(0,i.jsx)(n.em,{children:"Spark environment"})," dropdown. All other fields should be automatically populated after selecting your Spark Pool."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("img",{src:s(2683).A,alt:"Synapse connect",width:"75%"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.p,{children:["Click on ",(0,i.jsx)(n.strong,{children:"Add Job Size"})," and configure the Job size that you would like to use for processing."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("img",{src:s(16202).A,alt:"Synapse connect",width:"55%"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:"Now we configure the dependencies."}),"\n",(0,i.jsxs)(n.p,{children:["Under ",(0,i.jsx)(n.strong,{children:"Scala"})," enter the following ",(0,i.jsx)(n.strong,{children:"Path"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"https://prophecypublicazure.blob.core.windows.net/prophecy-public-libs/prophecy-scala-libs/"})}),"\n",(0,i.jsxs)(n.p,{children:["Under ",(0,i.jsx)(n.strong,{children:"Python"})," enter the following ",(0,i.jsx)(n.strong,{children:"Path"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"https://prophecypublicazure.blob.core.windows.net/prophecy-public-libs/prophecy-python-libs/"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.p,{children:["Click on ",(0,i.jsx)(n.strong,{children:"Complete"}),"."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:"Your fabric for Azure Synapase fabric is configured! Try creating a cluster using the fabric that you've just created and attach to it."}),"\n",(0,i.jsx)(n.p,{children:"Run a simple pipeline and make sure that the interim returns data properly."})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},16202:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/addjsize-ec782a5eff9f50e2262c40a1a6119949.png"},22019:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/sparkpool-f11414709c16f4a952aca06d4b200923.png"},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var r=s(96540);const i={},a=r.createContext(i);function t(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(a.Provider,{value:n},e.children)}},54933:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/appconfig-789fe02f6fa14e7f82f5efc59de14f1a.png"},64666:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/workspaceiam-60537a0ed72b6c75d6cc8621e28aab15.png"},65707:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/workspaceconfig-60630470c8dad38b02232738cd1c73e4.png"},84254:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/provider1-0e071e211d1877540e95952cb5b2bb69.png"},84523:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/add_app-937bdc1428ee0a97e3acea501772e31a.png"},89696:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/secret2-1656c462b0ffbe7727121c767b70b650.png"},95504:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/secret-8c889e31442b5be84a4c5fad20548931.png"}}]);