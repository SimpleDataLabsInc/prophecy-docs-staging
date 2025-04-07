"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[27843],{9106:(e,o,n)=>{n.d(o,{A:()=>r});const r=n.p+"assets/images/Composer_Fabric2-e4b60fe2f20d912211ff53aea4c281ec.png"},13914:(e,o,n)=>{n.d(o,{A:()=>r});const r=n.p+"assets/images/Composer_Fabric-2a84b8c0e2b4e0055110b0553f135853.png"},28453:(e,o,n)=>{n.d(o,{R:()=>s,x:()=>a});var r=n(96540);const i={},t=r.createContext(i);function s(e){const o=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(t.Provider,{value:o},e.children)}},28992:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"administration/fabrics/airflow-fabrics/composer_fabric","title":"Composer","description":"How Prophecy creates a Composer Airflow fabric","source":"@site/docs/administration/fabrics/airflow-fabrics/composer.md","sourceDirName":"administration/fabrics/airflow-fabrics","slug":"/administration/fabrics/airflow-fabrics/composer_fabric","permalink":"/prophecy-docs-staging/preview/pr-603/administration/fabrics/airflow-fabrics/composer_fabric","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"scheduling","permalink":"/prophecy-docs-staging/preview/pr-603/tags/scheduling"},{"inline":true,"label":"airflow","permalink":"/prophecy-docs-staging/preview/pr-603/tags/airflow"},{"inline":true,"label":"jobs","permalink":"/prophecy-docs-staging/preview/pr-603/tags/jobs"},{"inline":true,"label":"composer","permalink":"/prophecy-docs-staging/preview/pr-603/tags/composer"},{"inline":true,"label":"fabric","permalink":"/prophecy-docs-staging/preview/pr-603/tags/fabric"}],"version":"current","frontMatter":{"title":"Composer","id":"composer_fabric","description":"How Prophecy creates a Composer Airflow fabric","tags":["scheduling","airflow","jobs","composer","fabric"]},"sidebar":"adminSidebar","previous":{"title":"Prophecy Managed Airflow","permalink":"/prophecy-docs-staging/preview/pr-603/administration/fabrics/airflow-fabrics/prophecy_managed_airflow_fabric"},"next":{"title":"MWAA","permalink":"/prophecy-docs-staging/preview/pr-603/administration/fabrics/airflow-fabrics/MWAA_fabric"}}');var i=n(74848),t=n(28453);const s={title:"Composer",id:"composer_fabric",description:"How Prophecy creates a Composer Airflow fabric",tags:["scheduling","airflow","jobs","composer","fabric"]},a=void 0,c={},l=[{value:"How to create a Composer Airflow fabric",id:"how-to-create-a-composer-airflow-fabric",level:2},{value:"Setting up Connections",id:"setting-up-connections",level:2},{value:"Setting up Databricks Spark connection",id:"setting-up-databricks-spark-connection",level:3},{value:"Setting up Snowflake SQL Connection",id:"setting-up-snowflake-sql-connection",level:3},{value:"Create an Airflow Job",id:"create-an-airflow-job",level:2}];function d(e){const o={a:"a",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.p,{children:"You can use Prophecy to connect to your Cloud Composer-based Airflow, to create, run, and monitor your Airflow DAGs.\nFor this, you would need to create a Composer Airflow fabric."}),"\n",(0,i.jsx)(o.h2,{id:"how-to-create-a-composer-airflow-fabric",children:"How to create a Composer Airflow fabric"}),"\n",(0,i.jsxs)(o.p,{children:["Setting up a fabric is very straightforward. Click the ",(0,i.jsx)(o.strong,{children:"(1) Create Entity"})," button, and choose the ",(0,i.jsx)(o.strong,{children:"(2) Create Fabric"})," option. The fabric creation is composed of two steps: Basic Info and Providers setup.\nOn the Basic Info screen, enter a ",(0,i.jsx)(o.strong,{children:"(3) Fabric Name"}),", ",(0,i.jsx)(o.strong,{children:"(4) Fabric Description"}),", and choose the ",(0,i.jsx)(o.strong,{children:"(5) Team"})," that\u2019s going to own the fabric."]}),"\n",(0,i.jsxs)(o.p,{children:["Once ready, click ",(0,i.jsx)(o.strong,{children:"(6) Continue"}),"."]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"CreateFabric",src:n(44674).A+"",width:"2880",height:"1084"})}),"\n",(0,i.jsxs)(o.p,{children:["Since we\u2019re setting up a fabric connected to Cloud Composer Airflow, choose ",(0,i.jsx)(o.strong,{children:"Airflow"})," as the ",(0,i.jsx)(o.strong,{children:"(1) Provider Type"})," and ",(0,i.jsx)(o.strong,{children:"Cloud Composer"})," as the ",(0,i.jsx)(o.strong,{children:"(2) Provider"}),"."]}),"\n",(0,i.jsx)(o.p,{children:"Once you select Cloud Composer, you will start seeing fields for credentials as shown below."}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"ComposerFabric",src:n(13914).A+"",width:"2880",height:"1726"})}),"\n",(0,i.jsxs)(o.p,{children:["Type in your GCP project in the ",(0,i.jsx)(o.strong,{children:"(3)Project ID"})," field, and select the ",(0,i.jsx)(o.strong,{children:"(4)Location"})," from dropdown. And Upload your ",(0,i.jsx)(o.strong,{children:"(5)Private key"})," file to authenticate.\nClick on ",(0,i.jsx)(o.strong,{children:"(6) Fetch Environments"})," to fetch the Airflow Instances running in the mentioned GCP project."]}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.img,{alt:"ComposerFabric2",src:n(9106).A+"",width:"2880",height:"1726"}),"\nSelect the desired instance of Airflow, in the ",(0,i.jsx)(o.strong,{children:"(1) Airflow Environment"})," dropdown. This will autofill the ",(0,i.jsx)(o.strong,{children:"(2) Airflow URL"})," and ",(0,i.jsx)(o.strong,{children:"(3)Dag location"})," field which are uneditable.\nClick on ",(0,i.jsx)(o.strong,{children:"(4) Continue"}),"."]}),"\n",(0,i.jsx)(o.p,{children:"This completes the fabric creation For Composer, and you can now start adding Connections."}),"\n",(0,i.jsx)(o.h2,{id:"setting-up-connections",children:"Setting up Connections"}),"\n",(0,i.jsxs)(o.p,{children:["You need Airflow to talk to various other systems in your Data Platform to be able to do certain tasks like sending Email, triggering Spark pipelines, and SQL models.\nFor these, we create ",(0,i.jsx)(o.a,{href:"https://airflow.apache.org/docs/apache-airflow/stable/authoring-and-scheduling/connections.html",children:"connections"})," in Airflow."]}),"\n",(0,i.jsx)(o.p,{children:"You can map connections already created in your Composer, in the Connections Tab of the fabric.\nProphecy will use these connections to fetch the connection-id to generate the correct Airflow Code when you use these in your Airflow gems."}),"\n",(0,i.jsxs)(o.p,{children:["For adding a connection, Click on ",(0,i.jsx)(o.strong,{children:"(1) Add Connection"})," button. This Opens up the Connection form as shown."]}),"\n",(0,i.jsx)(o.h3,{id:"setting-up-databricks-spark-connection",children:"Setting up Databricks Spark connection"}),"\n",(0,i.jsx)(o.p,{children:"To be able to schedule your Databricks Spark pipelines via Airflow, you need to have a Databricks Spark Connections from Airflow to your Databricks Workspace. You need to create the connection in Airflow and provide the mapping to Prophecy in this form."}),"\n",(0,i.jsxs)(o.p,{children:["Select ",(0,i.jsx)(o.strong,{children:"(2) Connection Type"})," as Databricks(Spark), and select the ",(0,i.jsx)(o.strong,{children:"(3) Fabric"})," you have in Prophecy for the desired Databricks Workspace. Select the ",(0,i.jsx)(o.strong,{children:"(4) Connection id"})," you have created for this Databricks workspace in your Airflow.\nMake sure you select the fabric for the same Databricks workspace you have already created the connection for in your Airflow.\nOnce done, hit ",(0,i.jsx)(o.strong,{children:"(4) Save"}),"."]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"Composer_connection",src:n(74166).A+"",width:"2880",height:"1084"})}),"\n",(0,i.jsx)(o.h3,{id:"setting-up-snowflake-sql-connection",children:"Setting up Snowflake SQL Connection"}),"\n",(0,i.jsxs)(o.p,{children:["Similarly, setup a connection to a Snowflake fabric following ",(0,i.jsx)(o.a,{href:"/prophecy-docs-staging/preview/pr-603/administration/fabrics/airflow-fabrics/MWAA_fabric#setting-up-connections",children:"these"})," steps."]}),"\n",(0,i.jsx)(o.h2,{id:"create-an-airflow-job",children:"Create an Airflow Job"}),"\n",(0,i.jsxs)(o.p,{children:["Once the Airflow Composer fabric is setup with the relevant connections, Airflow job scheduling is done with an easy-to-use interface. Follow this guide to ",(0,i.jsx)(o.a,{href:"/engineers/spark-airflow-tutorial",children:"Create an Airflow job"}),"."]})]})}function p(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},44674:(e,o,n)=>{n.d(o,{A:()=>r});const r=n.p+"assets/images/Fabric_Create-d23d384a07e74abee7b04879025b6cf6.png"},74166:(e,o,n)=>{n.d(o,{A:()=>r});const r=n.p+"assets/images/Composer_connections-43774fe979c973dde7c27b3a3fac5995.png"}}]);