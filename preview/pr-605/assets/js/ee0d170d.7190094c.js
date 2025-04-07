"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[52317],{28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var i=n(96540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}},63191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"getting-started/concepts/Fabric","title":"Fabrics","description":"Run pipelines in execution environments","source":"@site/docs/getting-started/concepts/fabrics.md","sourceDirName":"getting-started/concepts","slug":"/fabrics","permalink":"/prophecy-docs-staging/preview/pr-605/fabrics","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"concepts","permalink":"/prophecy-docs-staging/preview/pr-605/tags/concepts"},{"inline":true,"label":"fabric","permalink":"/prophecy-docs-staging/preview/pr-605/tags/fabric"},{"inline":true,"label":"execution","permalink":"/prophecy-docs-staging/preview/pr-605/tags/execution"}],"version":"current","frontMatter":{"title":"Fabrics","id":"Fabric","slug":"/fabrics","description":"Run pipelines in execution environments","tags":["concepts","fabric","execution"]},"sidebar":"mySidebar","previous":{"title":"Getting started","permalink":"/prophecy-docs-staging/preview/pr-605/getting-started/"},"next":{"title":"Projects","permalink":"/prophecy-docs-staging/preview/pr-605/projects"}}');var r=n(74848),s=n(28453);const a={title:"Fabrics",id:"Fabric",slug:"/fabrics",description:"Run pipelines in execution environments",tags:["concepts","fabric","execution"]},c=void 0,o={},d=[{value:"Fabric types",id:"fabric-types",level:2},{value:"Separate environments and access",id:"separate-environments-and-access",level:2},{value:"Components",id:"components",level:2},{value:"Fabric usage",id:"fabric-usage",level:2},{value:"Fabric metadata",id:"fabric-metadata",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function l(e){const t={a:"a",admonition:"admonition",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Prophecy enables you to develop high-quality data pipelines, but where do these pipelines actually run? Before building a pipeline, it's essential to understand that it must be executed within an ",(0,r.jsx)(t.strong,{children:"execution environment"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["While Prophecy offers some built-in execution capabilities through ",(0,r.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-605/administration/architecture",children:"Prophecy Automate"})," (the Prophecy-native runtime), the majority of computation and all data storage occur in ",(0,r.jsx)(t.strong,{children:"external"})," environments like Databricks or Snowflake. This is where ",(0,r.jsx)(t.strong,{children:"fabrics"})," come in\u2014they serve as the bridge between Prophecy and these execution environments for seamless connectivity and integration."]}),"\n",(0,r.jsx)(t.h2,{id:"fabric-types",children:"Fabric types"}),"\n",(0,r.jsx)(t.p,{children:"Different fabrics are designed to support specific project types. Use the table below to identify which fabric best aligns with your project's execution requirements."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Fabric type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Usage"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/administration/fabrics/prophecy-fabrics/",children:"Prophecy"})}),(0,r.jsx)(t.td,{children:"Compute with Prophecy Automate and a SQL warehouse"}),(0,r.jsxs)(t.td,{children:["Run ",(0,r.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-605/analysts/pipelines",children:"pipelines"})," in SQL projects."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/administration/fabrics/Spark-fabrics/Fabrics",children:"Spark"})}),(0,r.jsx)(t.td,{children:"Compute with a Spark engine"}),(0,r.jsxs)(t.td,{children:["Run ",(0,r.jsx)(t.a,{href:"/engineers/pipelines",children:"pipelines"})," in PySpark/Scala projects and Databricks jobs."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/administration/fabrics/sql-fabrics/Fabrics",children:"SQL"})}),(0,r.jsx)(t.td,{children:"Compute with a SQL warehouse"}),(0,r.jsxs)(t.td,{children:["Run ",(0,r.jsx)(t.a,{href:"/engineers/data-models",children:"models"})," in SQL projects. You cannot run pipelines."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"/engineers/airflow",children:"Airflow"})," jobs."]}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"separate-environments-and-access",children:"Separate environments and access"}),"\n",(0,r.jsx)(t.p,{children:"Fabrics provide a structured way to separate working environments with team-based access. At minimum, you might have a development and production environment, but you may also have fabrics for QA, Staging, etc."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Development fabric:"})," Environment used for testing and experimentation, where pipelines can be iterated on without impacting live data or processes."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Production fabric:"})," Environment hosts stable, validated pipelines that process live data for business operations."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"When you create a fabric, you assign it to a team. Only users in that team can access the fabric. To control access in your production environment, create a team with only those users who can execute and deploy pipelines in production."}),"\n",(0,r.jsx)(t.h2,{id:"components",children:"Components"}),"\n",(0,r.jsxs)(t.p,{children:["Fabrics define all the necessary components that Prophecy needs to communicate with a specific execution environment. Each execution environment will require its own unique fabric configuration. Fabric creation, outlined in the ",(0,r.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-605/administration/",children:"administration"})," section of the documentation, is typically handled by team administrators."]}),"\n",(0,r.jsx)(t.p,{children:"Find the key components below that correspond to distinct sections within the fabric's settings."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Component"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Credentials"}),(0,r.jsx)(t.td,{children:"Prophecy securely encrypts your credentials and uses them to connect to your external environments."}),(0,r.jsx)(t.td,{children:"Credentials are required to establish connections to external execution environments."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Cluster configuration"}),(0,r.jsx)(t.td,{children:"This will determine the computation resources allocated to you."}),(0,r.jsx)(t.td,{children:"Cluster configurations are required. Defaults are pre-configured based on your credentials."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Connections"}),(0,r.jsx)(t.td,{children:"To connect to multiple data providers for use in your pipelines, you can add additional connections to your fabric."}),(0,r.jsx)(t.td,{children:"One connection to a primary execution environment is required. Additional connections are optional."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Secrets"}),(0,r.jsx)(t.td,{children:"Fabrics can store secrets from different secret providers such as HashiCorp Vault."}),(0,r.jsx)(t.td,{children:"Secrets are not required for fabric creation. However, sometimes secrets are required for connections. If a secret is required, you will be prompted to create one."})]})]})]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"Prophecy provides a trial Prophecy-managed fabric that can get you started with building your pipelines. However, you will need to connect to external execution environments for your production workflows."})}),"\n",(0,r.jsx)(t.h2,{id:"fabric-usage",children:"Fabric usage"}),"\n",(0,r.jsx)(t.p,{children:"To execute your pipelines, you must attach a fabric to your project, as fabrics define the project's execution environment. You can switch between different fabrics within a project based on factors such as whether you want to use a development or production execution environment. All fabrics created for your teams will be available for you to view and use."}),"\n",(0,r.jsx)(t.p,{children:"To attach a fabric to a project:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Open a project from the Prophecy metadata page."}),"\n",(0,r.jsx)(t.li,{children:"Open a pipeline or model that you want to work on."}),"\n",(0,r.jsxs)(t.li,{children:["Expand the ",(0,r.jsx)(t.strong,{children:"Attach Cluster"})," menu. This menu will differ slightly between Spark and SQL projects."]}),"\n",(0,r.jsx)(t.li,{children:"Select a fabric. You will be shown fabrics that have the same data provider as your project (e.g., Databricks)."}),"\n",(0,r.jsx)(t.li,{children:"Attach to a cluster or create a new cluster."}),"\n",(0,r.jsx)(t.li,{children:"Run your pipeline or model. This executes the data transformation on the environment defined in the fabric!"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"AttachCluster",src:n(69688).A+"",width:"2880",height:"1726"})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Even though teams share fabrics, ",(0,r.jsx)(t.strong,{children:"each user must add their individual credentials"})," to be able to use the fabric in their projects."]})}),"\n",(0,r.jsx)(t.h2,{id:"fabric-metadata",children:"Fabric metadata"}),"\n",(0,r.jsxs)(t.p,{children:["A list of all fabrics available to you can be found in the ",(0,r.jsx)(t.strong,{children:"Fabrics"})," tab of the ",(0,r.jsx)(t.strong,{children:"Metadata"})," page. You can click into each fabric to access the fabric settings. These will resemble the settings that appear during fabric creation."]}),"\n",(0,r.jsx)(t.h2,{id:"whats-next",children:"What's next"}),"\n",(0,r.jsxs)(t.p,{children:["Fabrics are often configured by team admins. Learn more about different types of fabrics in our Administration documentation on ",(0,r.jsx)(t.a,{href:"/administration/fabrics",children:"Fabric setup"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},69688:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/DatabricksAttachCluster-887b2f0d9f6e957f93304ae5a3ec60c8.png"}}]);