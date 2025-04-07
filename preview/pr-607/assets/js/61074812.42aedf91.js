"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[17066],{11379:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"getting-started/concepts/pipelines","title":"Pipelines","description":"Build pipelines in projects to execute data ingestion, transformation, and egress","source":"@site/docs/getting-started/concepts/pipelines.md","sourceDirName":"getting-started/concepts","slug":"/pipelines","permalink":"/prophecy-docs-staging/preview/pr-607/pipelines","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"pipeline","permalink":"/prophecy-docs-staging/preview/pr-607/tags/pipeline"},{"inline":true,"label":"concepts","permalink":"/prophecy-docs-staging/preview/pr-607/tags/concepts"}],"version":"current","frontMatter":{"title":"Pipelines","id":"pipelines","slug":"/pipelines","description":"Build pipelines in projects to execute data ingestion, transformation, and egress","tags":["pipeline","concepts"]},"sidebar":"mySidebar","previous":{"title":"Templates","permalink":"/prophecy-docs-staging/preview/pr-607/templates"},"next":{"title":"Gems","permalink":"/prophecy-docs-staging/preview/pr-607/gems"}}');var s=i(74848),o=i(28453);const r={title:"Pipelines",id:"pipelines",slug:"/pipelines",description:"Build pipelines in projects to execute data ingestion, transformation, and egress",tags:["pipeline","concepts"]},a=void 0,l={},p=[{value:"Ingestion and egress",id:"ingestion-and-egress",level:2},{value:"Data transformation",id:"data-transformation",level:2},{value:"Pipeline deployment",id:"pipeline-deployment",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function d(e){const n={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Pipelines are essential components in data processing workflows, enabling the automated movement and transformation of data. They define a sequence of steps that extract data from a source, process or transform it, and load it into a destination system. Pipelines ensure data flows efficiently and consistently, which can be tracked using built-in ",(0,s.jsx)(n.a,{href:"/analysts/monitoring",children:"pipeline monitoring"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Let's explore the core concepts of pipelines, including ingestion, egress, transformation, and deployment."}),"\n",(0,s.jsx)(n.h2,{id:"ingestion-and-egress",children:"Ingestion and egress"}),"\n",(0,s.jsx)(n.p,{children:"Ingestion refers to the process of collecting raw data from various sources, such as databases, APIs, web applications, etc. This step ensures that data is captured and stored for further processing. Egress, on the other hand, is the final step where processed data is delivered to its destination. This could be a data warehouse, a dashboard, or another external system."}),"\n",(0,s.jsxs)(n.p,{children:["You define how data comes in and out of your pipeline during pipeline development. Data ingestion and egress may differ depending on whether the pipelines are executed in development or production environment. The way Prophecy performs ingestion and egress will also vary between ",(0,s.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-607/projects",children:"project types"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"data-transformation",children:"Data transformation"}),"\n",(0,s.jsx)(n.p,{children:"Once data is ingested, it often needs to be cleaned, enriched, and structured to make it useful. Data transformation involves modifying data formats, aggregating values, filtering records, and applying business logic. Some common transformations include:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Normalization & Standardization:"})," Ensuring consistency across datasets."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Aggregation:"})," Summarizing large datasets for analysis."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Filtering & Enrichment:"})," Removing irrelevant data and enhancing it with additional attributes."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"pipeline-deployment",children:"Pipeline deployment"}),"\n",(0,s.jsx)(n.p,{children:"A key goal of pipeline development is to make the pipeline ready for deployment in production. Once a pipeline is developed, tested, and validated, it can be deployed to an execution environment where it will run automatically according to the defined schedule or trigger. The deployment process ensures that the pipeline is set up to handle real-time (Spark only) or batch processing with minimal manual intervention."}),"\n",(0,s.jsx)(n.p,{children:"During deployment, you configure the environment, such as selecting the appropriate compute resources, scheduling execution times, and ensuring the pipeline is connected to the necessary data sources and destinations. You also choose which version of the pipeline will be deployed."}),"\n",(0,s.jsxs)(n.p,{children:["When your pipelines are deployed, you can make sure they run as expected using our built-in ",(0,s.jsx)(n.a,{href:"/analysts/monitoring",children:"monitoring"})," feature."]}),"\n",(0,s.jsx)(n.h2,{id:"whats-next",children:"What's next"}),"\n",(0,s.jsx)(n.p,{children:"Learn about different forms of pipeline development:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-607/analysts/pipeline-development",children:"Pipeline development for Analysts"})," using Prophecy Automate and SQL warehouse."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/engineers/pipeline-development",children:"Pipeline development for Engineers"})," using Spark execution environments."]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(96540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);