"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[51827],{28453:(e,i,a)=>{a.d(i,{R:()=>n,x:()=>c});var r=a(96540);const t={},s=r.createContext(t);function n(e){const i=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),r.createElement(s.Provider,{value:i},e.children)}},69132:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>n,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"administration/fabrics/Spark-fabrics/databricks/databricks","title":"Databricks","description":"Configuring Databricks Fabric","source":"@site/docs/administration/fabrics/Spark-fabrics/databricks/databricks.md","sourceDirName":"administration/fabrics/Spark-fabrics/databricks","slug":"/administration/fabrics/Spark-fabrics/databricks/","permalink":"/prophecy-docs-staging/preview/pr-592/administration/fabrics/Spark-fabrics/databricks/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"concepts","permalink":"/prophecy-docs-staging/preview/pr-592/tags/concepts"},{"inline":true,"label":"fabric","permalink":"/prophecy-docs-staging/preview/pr-592/tags/fabric"},{"inline":true,"label":"databricks","permalink":"/prophecy-docs-staging/preview/pr-592/tags/databricks"},{"inline":true,"label":"livy","permalink":"/prophecy-docs-staging/preview/pr-592/tags/livy"},{"inline":true,"label":"prophecyManaged","permalink":"/prophecy-docs-staging/preview/pr-592/tags/prophecy-managed"}],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Databricks","id":"databricks","description":"Configuring Databricks Fabric","sidebar_position":2,"tags":["concepts","fabric","databricks","livy","prophecyManaged"]},"sidebar":"adminSidebar","previous":{"title":"Spark fabrics","permalink":"/prophecy-docs-staging/preview/pr-592/administration/fabrics/Spark-fabrics/Fabrics"},"next":{"title":"UC Shared Cluster Support","permalink":"/prophecy-docs-staging/preview/pr-592/administration/fabrics/Spark-fabrics/databricks/ucshared"}}');var t=a(74848),s=a(28453);const n={title:"Databricks",id:"databricks",description:"Configuring Databricks Fabric",sidebar_position:2,tags:["concepts","fabric","databricks","livy","prophecyManaged"]},c=void 0,o={},l=[{value:"Fields",id:"fields",level:2},{value:"Databricks credentials",id:"databricks-credentials",level:3},{value:"Cluster details",id:"cluster-details",level:3},{value:"Job sizes",id:"job-sizes",level:3},{value:"Prophecy Library",id:"prophecy-library",level:3},{value:"Artifacts",id:"artifacts",level:3},{value:"Databricks execution",id:"databricks-execution",level:2}];function d(e){const i={a:"a",admonition:"admonition",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["Create a Databricks fabric to connect Prophecy to your existing Databricks environment. Think of a fabric as connection to your ",(0,t.jsx)(i.a,{href:"https://docs.databricks.com/workspace/index.html#navigate-the-workspace",children:"Databricks workspace"}),".\nThis fabric enables Prophecy to connect to existing Spark clusters (or create new ones), execute Spark pipelines, read and write data, etc - all according to each user's permissions defined by their personal access token."]}),"\n",(0,t.jsx)(i.p,{children:"Please refer to the video below for a step-by-step example."}),"\n",(0,t.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,t.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,t.jsx)("iframe",{src:"https://user-images.githubusercontent.com/121796483/217735090-41853091-ef2e-4d60-bdf6-62fe31a7ee3b.mp4",title:"Databricks Fabric",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,t.jsx)(i.h2,{id:"fields",children:"Fields"}),"\n",(0,t.jsx)(i.h3,{id:"databricks-credentials",children:"Databricks credentials"}),"\n",(0,t.jsxs)(i.p,{children:["Here you will provide your Databricks Workspace URL and ",(0,t.jsx)(i.a,{href:"https://docs.databricks.com/dev-tools/api/latest/authentication.html#generate-a-personal-access-token",children:"Personal Access Token"})," (PAT). The PAT must have permission to attach clusters. If you'd like to create clusters or read/write data from Prophecy, then these permissions should be enabled for the PAT as well. Keep in mind each user will need to use their own PAT in the fabric. Prophecy respects the permissions scoped to each user."]}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["When using ",(0,t.jsx)(i.strong,{children:"Active Directory"}),", Prophecy takes care of the auto-generation and refreshing of the Databricks personal access tokens. Read more about it ",(0,t.jsx)(i.a,{href:"https://docs.microsoft.com/en-us/azure/databricks/dev-tools/api/latest/aad/",children:"here"}),"."]})}),"\n",(0,t.jsx)(i.h3,{id:"cluster-details",children:"Cluster details"}),"\n",(0,t.jsxs)(i.p,{children:["Here you would need to provide the ",(0,t.jsx)(i.a,{href:"https://docs.databricks.com/runtime/dbr.html#databricks-runtime",children:"Databricks Runtime version"}),", Executor and Drive Machine Types and Termination Timeout if any. These cluster details will be used when creating a cluster via Prophecy during Interactive development and for job clusters during Scheduled Databricks job runs."]}),"\n",(0,t.jsx)(i.admonition,{type:"caution",children:(0,t.jsxs)(i.p,{children:["If you're interested in the Shared cluster mode, please note: Unity Catalog (UC) clusters in Shared access mode have ",(0,t.jsx)(i.a,{href:"https://docs.databricks.com/en/compute/access-mode-limitations.html#shared-access-mode-limitations-on-unity-catalog",children:"particular limitations"})," that prevent ",(0,t.jsx)(i.a,{href:"./ucshared",children:"these"})," Prophecy features from working as designed."]})}),"\n",(0,t.jsx)(i.h3,{id:"job-sizes",children:"Job sizes"}),"\n",(0,t.jsx)(i.p,{children:"You can create job sizes here using which clusters can be spawned while testing through the Prophecy UI. Here you can provide Cluster mode, Databricks Runtime version, total number of the Executors, Core and Memory for them, etc. This provides all the options which are available on Databricks while spawning clusters through Databricks. We recommend using the smallest machines and smallest number of nodes appropriate for your use case."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Editing a Job",src:a(81883).A+"",width:"1283",height:"1068"})}),"\n",(0,t.jsx)(i.p,{children:"In Json you can just copy-paste your compute Json from Databricks."}),"\n",(0,t.jsx)(i.h3,{id:"prophecy-library",children:"Prophecy Library"}),"\n",(0,t.jsx)(i.p,{children:"These are some Scala and Python libraries written by Prophecy to provide additional functionalities on top of Spark. These would get automatically installed in your Spark execution environment when you attach to a cluster/create new cluster. These libraries are also publicly available on Maven central and Pypi respectively."}),"\n",(0,t.jsx)(i.h3,{id:"artifacts",children:"Artifacts"}),"\n",(0,t.jsx)(i.p,{children:"Prophecy supports Databricks Volumes. When you run a Python or Scala pipeline via a job, you must bundle them as whl/jar artifacts. These artifacts must then be made accessible to the Databricks job in order to use them as a library installed on the cluster. You can designate a path to a Volume for uploading the whl/jar files under Artifacts."}),"\n",(0,t.jsx)(i.h2,{id:"databricks-execution",children:"Databricks execution"}),"\n",(0,t.jsx)(i.p,{children:"To learn about Databricks execution, visit:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/prophecy-docs-staging/preview/pr-592/engineers/execution",children:"Interactive Execution"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/prophecy-docs-staging/preview/pr-592/engineers/execution-metrics",children:"Execution Metrics"})}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},81883:(e,i,a)=>{a.d(i,{A:()=>r});const r=a.p+"assets/images/job_size_new-f8b58a9a3298e4d5e3b3efbff4b0d61c.png"}}]);