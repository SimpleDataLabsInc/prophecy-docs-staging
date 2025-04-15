"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[56534],{13998:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/interactive-execution-play-options-7843a9990d02ca987ac910a754629874.png"},21216:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"Spark/execution/execution","title":"Execution","description":"How Prophecy computes pipelines","source":"@site/docs/Spark/execution/execution.md","sourceDirName":"Spark/execution","slug":"/engineers/execution","permalink":"/prophecy-docs-staging/preview/pr-616/engineers/execution","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"execution","permalink":"/prophecy-docs-staging/preview/pr-616/tags/execution"},{"inline":true,"label":"interactive","permalink":"/prophecy-docs-staging/preview/pr-616/tags/interactive"},{"inline":true,"label":"jobs","permalink":"/prophecy-docs-staging/preview/pr-616/tags/jobs"},{"inline":true,"label":"shell","permalink":"/prophecy-docs-staging/preview/pr-616/tags/shell"}],"version":"current","frontMatter":{"title":"Execution","id":"execution","slug":"/engineers/execution","description":"How Prophecy computes pipelines","tags":["execution","interactive","jobs","shell"]},"sidebar":"mySidebar","previous":{"title":"Expression builder","permalink":"/prophecy-docs-staging/preview/pr-616/engineers/expression-builder"},"next":{"title":"Execution metrics","permalink":"/prophecy-docs-staging/preview/pr-616/engineers/execution-metrics"}}');var r=t(74848),s=t(28453);const o={title:"Execution",id:"execution",slug:"/engineers/execution",description:"How Prophecy computes pipelines",tags:["execution","interactive","jobs","shell"]},c=void 0,a={},l=[{value:"Interactive execution",id:"interactive-execution",level:2},{value:"Scheduled execution",id:"scheduled-execution",level:2},{value:"Shell execution",id:"shell-execution",level:2},{value:"Execution information",id:"execution-information",level:2},{value:"Execution on Databricks",id:"execution-on-databricks",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Prophecy executes pipelines based on the type of Spark cluster and the operation being performed. You can run pipelines interactively, schedule them, or execute them using the built-in Spark shell. Each execution provides information through logs and metrics to help you manage and monitor data transformations."}),"\n",(0,r.jsx)(n.h2,{id:"interactive-execution",children:"Interactive execution"}),"\n",(0,r.jsxs)(n.p,{children:["When you run a pipeline in the pipeline canvas, Prophecy generates interim ",(0,r.jsx)(n.strong,{children:"data samples"})," that let you preview the output of your data transformations. There are two ways to run a pipeline interactively:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Run the entire pipeline using the ",(0,r.jsx)(n.strong,{children:"play"})," button on the pipeline canvas."]}),"\n",(0,r.jsxs)(n.li,{children:["Execute the pipeline up to and including a particular gem using the ",(0,r.jsx)(n.strong,{children:"play"})," button on that gem. This is also know as a ",(0,r.jsx)(n.strong,{children:"partial run"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Interactive run options",src:t(13998).A+"",width:"2620",height:"1508"})}),"\n",(0,r.jsxs)(n.p,{children:["After you run your pipeline, data samples will appear between gems. These previews are temporarily cached. Learn about how these ",(0,r.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-616/engineers/data-sampling",children:"data samples"})," are generated or discover the ",(0,r.jsx)(n.a,{href:"/engineers/data-explorer",children:"Data Explorer"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"scheduled-execution",children:"Scheduled execution"}),"\n",(0,r.jsxs)(n.p,{children:["When you create ",(0,r.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-616/engineers/orchestration",children:"jobs"})," in Prophecy, you schedule when certain pipelines will run. Prophecy executes pipelines based on the ",(0,r.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-616/fabrics",children:"fabric"})," defined in the pipeline's job settings. Prophecy will automatically run jobs once relevant projects are released and deployed."]}),"\n",(0,r.jsx)(n.h2,{id:"shell-execution",children:"Shell execution"}),"\n",(0,r.jsxs)(n.p,{children:["Prophecy comes with an built-in interactive Spark shell that supports both Python and Scala. The shell is an easy way to quickly analyze data or test Spark commands. The Spark context and session are available within the shell as variables ",(0,r.jsx)(n.code,{children:"sc"})," and ",(0,r.jsx)(n.code,{children:"spark"})," respectively."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Interactive execution",src:t(68843).A+"",width:"3226",height:"1070"})}),"\n",(0,r.jsx)(n.h2,{id:"execution-information",children:"Execution information"}),"\n",(0,r.jsx)(n.p,{children:"Once you run a pipeline, there are several ways for you to better understand the execution."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Callout"}),(0,r.jsx)(n.th,{children:"Information"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"1"})}),(0,r.jsx)(n.td,{children:"Problems"}),(0,r.jsx)(n.td,{children:"Errors from your pipeline execution that will be shown in a dialog window, as well as in the canvas footer."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"2"})}),(0,r.jsx)(n.td,{children:"Runtime logs"}),(0,r.jsx)(n.td,{children:"The progress with timestamps of your pipeline runs and any errors."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"3"})}),(0,r.jsx)(n.td,{children:"Execution code"}),(0,r.jsx)(n.td,{children:"The code Prophecy runs to execute your pipeline. You can copy and paste this code elsewhere for debugging."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"4"})}),(0,r.jsx)(n.td,{children:"Runtime metrics"}),(0,r.jsx)(n.td,{children:"Various Spark metrics collected during runtime."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"5"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-616/engineers/execution-metrics",children:"Execution metrics"})}),(0,r.jsxs)(n.td,{children:["Metrics that can be found in the ",(0,r.jsx)(n.strong,{children:"Metadata"})," of a pipeline, or from the ",(0,r.jsx)(n.strong,{children:"Run History"})," button under the ",(0,r.jsx)(n.strong,{children:"..."})," menu."]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Use the image below to help you find the relevant information."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Execution information",src:t(66815).A+"",width:"2620",height:"1508"})}),"\n",(0,r.jsx)(n.h2,{id:"execution-on-databricks",children:"Execution on Databricks"}),"\n",(0,r.jsxs)(n.p,{children:["Databricks clusters come with various ",(0,r.jsx)(n.a,{href:"https://docs.databricks.com/clusters/create-cluster.html#what-is-cluster-access-mode",children:"Access Modes"}),". To use Unity Catalog Shared clusters, check for feature support ",(0,r.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-616/administration/fabrics/Spark-fabrics/databricks/ucshared",children:"here"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["When using ",(0,r.jsx)(n.code,{children:"High Concurrency"})," or ",(0,r.jsx)(n.code,{children:"Shared Mode"})," Databricks Clusters you may notice a delay when running the first command, or when your cluster is scaling up to meet demand. This delay is due to Prophecy and pipeline dependencies (Maven or Python packages) being installed. For the best performance, it is recommended that you cache packages in an Artifactory or on DBFS. Please ",(0,r.jsx)(n.a,{href:"https://help.prophecy.io/support/tickets/new",children:"contact us"})," to learn more about this."]})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}},66815:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/run-info-c999d194c1477171837e6b5a157df927.png"},68843:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/int_exc_1-06819b9fb816e6634e0c7c55e0225ffe.png"}}]);