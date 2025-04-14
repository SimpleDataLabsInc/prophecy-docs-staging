"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[49365],{28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var r=i(96540);const s={},t=r.createContext(s);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:n},e.children)}},52318:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"Spark/project-best-practices","title":"Best practices","description":"Learn about what we recommend to do if you are working in a project.","source":"@site/docs/Spark/best-practices.md","sourceDirName":"Spark","slug":"/engineers/project-best-practices","permalink":"/prophecy-docs-staging/preview/pr-614/engineers/project-best-practices","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"project","permalink":"/prophecy-docs-staging/preview/pr-614/tags/project"},{"inline":true,"label":"best practices","permalink":"/prophecy-docs-staging/preview/pr-614/tags/best-practices"}],"version":"current","frontMatter":{"title":"Best practices","id":"project-best-practices","slug":"/engineers/project-best-practices","description":"Learn about what we recommend to do if you are working in a project.","tags":["project","best practices"]},"sidebar":"mySidebar","previous":{"title":"Streaming Transformations","permalink":"/prophecy-docs-staging/preview/pr-614/engineers/spark-streaming-transformations"},"next":{"title":"Data modeling","permalink":"/prophecy-docs-staging/preview/pr-614/engineers/data-models"}}');var s=i(74848),t=i(28453);const o={title:"Best practices",id:"project-best-practices",slug:"/engineers/project-best-practices",description:"Learn about what we recommend to do if you are working in a project.",tags:["project","best practices"]},a=void 0,c={},l=[{value:"Projects",id:"projects",level:2},{value:"Re-usable entities",id:"re-usable-entities",level:2},{value:"Pipelines",id:"pipelines",level:2},{value:"Configurations",id:"configurations",level:2},{value:"Datasets",id:"datasets",level:2},{value:"Pipeline optimizations",id:"pipeline-optimizations",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"projects",children:"Projects"}),"\n",(0,s.jsx)(n.p,{children:"Limit the total number of pipelines per project to keep your project modular."}),"\n",(0,s.jsx)(n.p,{children:"This helps you have:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Better Git version control and Git tagging"}),"\n",(0,s.jsx)(n.li,{children:"A faster code generation and compilation as common entities are compiled across all pipelines when changes are made"}),"\n",(0,s.jsx)(n.li,{children:"More control during deployment"}),"\n",(0,s.jsxs)(n.li,{children:["Shared resources across teams and in ",(0,s.jsx)(n.a,{href:"/engineers/package-hub",children:"Package Hub"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"re-usable-entities",children:"Re-usable entities"}),"\n",(0,s.jsx)(n.p,{children:"Keep common entities in a common project."}),"\n",(0,s.jsxs)(n.p,{children:["Common entities can include user defined functions, reusable-subgraphs, gems, and fully configurable pipelines. This allows you to share the project in a read-only and version controlled manner with other teams when you publish it as a ",(0,s.jsx)(n.a,{href:"/engineers/package-hub",children:"package"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"pipelines",children:"Pipelines"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Limit the number of gems per pipeline to keep your pipeline modular."}),"\n",(0,s.jsx)(n.p,{children:"This helps you have:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Shorter recover and retry times for failed tasks in Spark pipelines"}),"\n",(0,s.jsx)(n.li,{children:"More control during orchestration"}),"\n",(0,s.jsx)(n.li,{children:"Shorter recovery times for failed jobs"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.a,{href:"/engineers/pipeline-settings#job",children:"Job Sampling"})," only for debugging purposes and for smaller pipelines because sampling incurs a large computational penalty in Spark."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configurations",children:"Configurations"}),"\n",(0,s.jsxs)(n.p,{children:["You can configure Prophecy gems to use ",(0,s.jsx)(n.a,{href:"/engineers/configurations",children:"configuration"})," variables such as path or a subset of path variables in Source and Target gems."]}),"\n",(0,s.jsxs)(n.p,{children:["Typically, configuration variables are static. However, if you want to assign a dynamic value to a configuration variable at runtime, you may overwrite the ",(0,s.jsx)(n.code,{children:"Config"})," variable using a Script component."]}),"\n",(0,s.jsx)(n.p,{children:"Run the following syntax at a low phase value (-1) before the rest of your pipeline:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"Config.var_name =new_value\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This lets you achieve a ",(0,s.jsx)(n.strong,{children:"dynamic runtime configuration."})]}),"\n",(0,s.jsx)(n.h2,{id:"datasets",children:"Datasets"}),"\n",(0,s.jsx)(n.p,{children:"Don\u2019t duplicate your dataset in the a pipeline. Your dataset contains a unique set of properties. If you duplicate it in your pipeline, its properties become unstable due to the duplicate copy of properties."}),"\n",(0,s.jsx)(n.h2,{id:"pipeline-optimizations",children:"Pipeline optimizations"}),"\n",(0,s.jsx)(n.p,{children:"To optimize your pipeline:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For most cases, use the ",(0,s.jsx)(n.a,{href:"/engineers/reformat",children:"Reformat gem"})," instead of the ",(0,s.jsx)(n.a,{href:"/engineers/schema-transform",children:"SchemaTransform gem"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The Reformat gem calls the Spark ",(0,s.jsx)(n.code,{children:"select()"})," function once, which is not very computationally expensive. The SchemaTransform gem uses the Spark ",(0,s.jsx)(n.code,{children:"withColumn()"})," function, which is applied to each column one-by-one (more computationally intensive)."]}),"\n",(0,s.jsx)(n.p,{children:"You should use the SchemaTransform gem if you are creating a small number of columns that will be specifically used for downstream calculations in subsequent gems."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If you have a gem that has multiple output ports, try caching the data in that gem."}),"\n",(0,s.jsx)(n.p,{children:"Spark lazily evaluates action calls, which means it reevaluates the same part of the flow unless you cache it. This is helpful before you branch to multiple output ports."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Larger datasets may be too large to cache."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Broadcast smaller tables in your ",(0,s.jsx)(n.a,{href:"/engineers/join",children:"Join gem"})," to increase your performance."]}),"\n",(0,s.jsxs)(n.p,{children:["Control the broadcast threshold based on your cluster size by setting the ",(0,s.jsx)(n.code,{children:"spark.sql.autoBroadcastJoinThreshold"})," property to a value greater than 10MB. To learn more, see ",(0,s.jsx)(n.a,{href:"https://spark.apache.org/docs/latest/sql-performance-tuning.html",children:"Performance Tuning"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Remove the ",(0,s.jsx)(n.a,{href:"/engineers/order-by",children:"OrderBy"})," and ",(0,s.jsx)(n.a,{href:"/engineers/deduplicate",children:"Deduplicate"})," gems wherever you don't need them."]}),"\n",(0,s.jsxs)(n.p,{children:["If you need the Deduplicate gem, be mindful on which ",(0,s.jsx)(n.code,{children:"Row to keep"})," to select.",(0,s.jsx)("br",{}),"The ",(0,s.jsx)(n.code,{children:"first"})," and ",(0,s.jsx)(n.code,{children:"last"})," options are more expensive than ",(0,s.jsx)(n.code,{children:"any"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Set an appropriate value for the ",(0,s.jsx)(n.code,{children:"spark.sql.shuffle.partitions"})," property."]}),"\n",(0,s.jsxs)(n.p,{children:["For skewed, overparititioned, or underpartitioned Source datasets, consider using the ",(0,s.jsx)(n.a,{href:"/engineers/repartition",children:"Repartition"})," gem to repartition your dataset to an appropriate number of partitions."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}}}]);