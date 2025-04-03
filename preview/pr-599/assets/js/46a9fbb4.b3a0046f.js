"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[2113],{1335:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/create-streaming-pipeline-09c38e5fc7c91853e19a517c3024c518.png"},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>o});var n=t(96540);const i={},s=n.createContext(i);function a(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:r},e.children)}},48111:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"Spark/spark-streaming/streaming","title":"Spark Structured Streaming","description":"Prophecy Streaming Gems","source":"@site/docs/Spark/spark-streaming/spark-streaming.md","sourceDirName":"Spark/spark-streaming","slug":"/engineers/spark-streaming","permalink":"/prophecy-docs-staging/preview/pr-599/engineers/spark-streaming","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"streaming","permalink":"/prophecy-docs-staging/preview/pr-599/tags/streaming"},{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-599/tags/gems"},{"inline":true,"label":"source","permalink":"/prophecy-docs-staging/preview/pr-599/tags/source"},{"inline":true,"label":"target","permalink":"/prophecy-docs-staging/preview/pr-599/tags/target"}],"version":"current","frontMatter":{"title":"Spark Structured Streaming","id":"streaming","slug":"/engineers/spark-streaming","description":"Prophecy Streaming Gems","tags":["streaming","gems","source","target"]},"sidebar":"mySidebar","previous":{"title":"User-defined functions","permalink":"/prophecy-docs-staging/preview/pr-599/engineers/user-defined-functions"},"next":{"title":"Streaming Sources and Targets","permalink":"/prophecy-docs-staging/preview/pr-599/engineers/streaming-source-and-targets"}}');var i=t(74848),s=t(28453);const a={title:"Spark Structured Streaming",id:"streaming",slug:"/engineers/spark-streaming",description:"Prophecy Streaming Gems",tags:["streaming","gems","source","target"]},o=void 0,c={},l=[{value:"Spark Structured Streaming using Prophecy IDE",id:"spark-structured-streaming-using-prophecy-ide",level:2},{value:"Working with a streaming pipeline",id:"working-with-a-streaming-pipeline",level:3},{value:"Streaming Sources and Targets",id:"streaming-sources-and-targets",level:3},{value:"Streaming Transformations",id:"streaming-transformations",level:3}];function p(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:["Prophecy provides native support for streaming data running on Spark Structured Streaming. This documentation assumes you are already familiar with how Structured Streaming works. For more information, you can consult the Structured Streaming documentation ",(0,i.jsx)(r.a,{href:"https://spark.apache.org/docs/latest/structured-streaming-programming-guide.html",children:"here"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["Streaming ",(0,i.jsx)(r.a,{href:"/engineers/pipelines",children:"pipelines"})," work differently from batch pipelines:"]}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsx)(r.li,{children:"Streaming applications are always running, continuously processing incoming data."}),"\n",(0,i.jsxs)(r.li,{children:["Data is processed in micro-batches, with the notable exception of ",(0,i.jsx)(r.a,{href:"https://spark.apache.org/docs/latest/structured-streaming-programming-guide.html#continuous-processing",children:"Continuous Triggers"})," (an experimental feature available in Spark3.3). Continuous triggers are not supported by Prophecy."]}),"\n",(0,i.jsx)(r.li,{children:"Streaming applications handle transient data rather than maintain the entire data. Aggregations and joins require watermarking for maintaining a limited state."}),"\n",(0,i.jsxs)(r.li,{children:["All Streaming datasets can behave similarly to Batch datasets using the Spark ",(0,i.jsx)(r.a,{href:"https://spark.apache.org/docs/latest/api/python/reference/pyspark.ss/api/pyspark.sql.streaming.DataStreamWriter.foreachBatch.html",children:(0,i.jsx)(r.code,{children:"ForEachBatch"})}),", though ",(0,i.jsx)(r.code,{children:"ForEachBatch"})," is not supported by Prophecy."]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["The streaming capability is available for ",(0,i.jsx)(r.code,{children:"Python"})," projects that do not use UC Shared clusters."]}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Project Type"}),(0,i.jsx)(r.th,{children:"Spark Cluster Access Mode"}),(0,i.jsx)(r.th,{children:"Spark Cluster Type"}),(0,i.jsx)(r.th,{children:"Structured Streaming Capability"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Python"}),(0,i.jsx)(r.td,{children:"Single User"}),(0,i.jsx)(r.td,{children:"UC, legacy"}),(0,i.jsx)(r.td,{children:"Supported as of Prophecy3.4.x"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Python"}),(0,i.jsx)(r.td,{children:"Shared"}),(0,i.jsx)(r.td,{children:"UC"}),(0,i.jsx)(r.td,{children:"Not supported as of Prophecy3.4.x"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Scala"}),(0,i.jsx)(r.td,{children:"Any Mode"}),(0,i.jsx)(r.td,{children:"Any type"}),(0,i.jsx)(r.td,{children:"Not supported as of Prophecy3.4.x"})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"spark-structured-streaming-using-prophecy-ide",children:"Spark Structured Streaming using Prophecy IDE"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.img,{alt:"How to Create a Streaming pipeline",src:t(1335).A+"",width:"1816",height:"1270"}),"\nWithin a Prophecy ",(0,i.jsx)(r.code,{children:"Python"})," project, a user can create a Structured Streaming pipeline using the Streaming(beta) mode."]}),"\n",(0,i.jsx)(r.h3,{id:"working-with-a-streaming-pipeline",children:"Working with a streaming pipeline"}),"\n",(0,i.jsxs)(r.p,{children:["To create a streaming pipeline, users can follow a process similar to creating a Batch pipeline in a ",(0,i.jsx)(r.code,{children:"Python"})," project. Streaming pipelines work differently from Batch pipelines in the following ways:"]}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["Partial runs are not supported for streaming applications. A partial run is only allowed on a ",(0,i.jsx)(r.code,{children:"Streaming Target"})," gem."]}),"\n",(0,i.jsx)(r.li,{children:"Streaming pipelines are long-running tasks and process data at intervals. Currently, they do not capture cumulative statistics."}),"\n",(0,i.jsx)(r.li,{children:'Streaming pipelines are continuous and do not stop running. To terminate a Streaming pipeline, users need to click the "X" button. A Streaming pipeline is an ongoing process and will not terminate itself.'}),"\n",(0,i.jsxs)(r.li,{children:["To deploy the pipeline on Databricks, users can follow the same process described ",(0,i.jsx)(r.a,{href:"/engineers/databricks-jobs",children:"here"}),". A scheduled job will check if the Streaming pipeline is running every X minutes. If the pipeline is not running, the job will attempt to start it."]}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"streaming-sources-and-targets",children:"Streaming Sources and Targets"}),"\n",(0,i.jsx)(r.p,{children:"Spark Structured Streaming applications have a variety of source and target components available to construct Piplines."}),"\n",(0,i.jsxs)(r.p,{children:["Streaming source gems render to ",(0,i.jsx)(r.code,{children:"spark.readStream()"})," on the Spark side. Currently, we support file stream-based sources and targets, warehouse-based targets, and event stream-based sources and targets. For more information on Streaming Source and Target gems, click ",(0,i.jsx)(r.a,{href:"/prophecy-docs-staging/preview/pr-599/engineers/streaming-source-and-targets",children:"here"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["Additionally, any batch data sources can be used in a streaming application. Batch data sources are read using the ",(0,i.jsx)(r.code,{children:"spark.read()"})," function at every processing trigger (due to Spark evaluating lazily). More on triggers ",(0,i.jsx)(r.a,{href:"https://spark.apache.org/docs/latest/structured-streaming-programming-guide.html#triggers",children:"here"}),". For more information on Batch Source and Target gems, click ",(0,i.jsx)(r.a,{href:"//engineers/source-target",children:"here"}),"."]}),"\n",(0,i.jsx)(r.h3,{id:"streaming-transformations",children:"Streaming Transformations"}),"\n",(0,i.jsxs)(r.p,{children:["For more information on Streaming Transformations, click ",(0,i.jsx)(r.a,{href:"/prophecy-docs-staging/preview/pr-599/engineers/spark-streaming-transformations",children:"here"}),"."]})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}}}]);