"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[40842],{7396:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"analysts/development/pipelines/execution","title":"Pipeline execution","description":"Run a set of defined operations in a pipeline","source":"@site/docs/analysts/development/pipelines/execution.md","sourceDirName":"analysts/development/pipelines","slug":"/analysts/pipeline-execution","permalink":"/prophecy-docs-staging/preview/pr-598/analysts/pipeline-execution","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Pipeline execution","id":"execution","slug":"/analysts/pipeline-execution","description":"Run a set of defined operations in a pipeline","tags":[]},"sidebar":"mySidebar","previous":{"title":"Pipelines","permalink":"/prophecy-docs-staging/preview/pr-598/analysts/pipelines"},"next":{"title":"Pipeline parameters","permalink":"/prophecy-docs-staging/preview/pr-598/analysts/pipeline-parameters"}}');var s=t(74848),r=t(28453);const a={title:"Pipeline execution",id:"execution",slug:"/analysts/pipeline-execution",description:"Run a set of defined operations in a pipeline",tags:[]},o=void 0,l={},c=[{value:"Converged execution",id:"converged-execution",level:2},{value:"Interactive execution",id:"interactive-execution",level:2},{value:"Scheduled execution",id:"scheduled-execution",level:2},{value:"External sources",id:"external-sources",level:2}];function p(e){const n={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["While SQL projects leverage SQL for core data transformations, pipeline execution is a hybrid process. ",(0,s.jsx)(n.a,{href:"/administration/fabrics/prophecy-fabrics/",children:"Prophecy fabrics"})," make it possible for ",(0,s.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-598/administration/architecture",children:"Prophecy Automate"})," to manage the overall pipeline flow and utilize the SQL warehouse for data processing tasks. This page describes how Prophecy runs pipelines in different execution scenarios."]}),"\n",(0,s.jsx)(n.h2,{id:"converged-execution",children:"Converged execution"}),"\n",(0,s.jsx)(n.p,{children:"Prophecy uses different engines to perform execution."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"SQL warehouse"}),": Your own external SQL environment used to store tables, create tables, and execute queries."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Prophecy Automate"}),": Runtime that handles orchestration and the flow of external data from systems like Salesforce and Tableau in and out of the pipeline. To learn more, jump to ",(0,s.jsx)(n.a,{href:"#external-sources",children:"external sources"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"interactive-execution",children:"Interactive execution"}),"\n",(0,s.jsx)(n.p,{children:"Prophecy lets you interactively run your pipeline in the pipeline canvas and preview data transformations at every step. This helps you understand and validate your data transformations during development. There are two ways to start an interactive run:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Run the entire pipeline using the ",(0,s.jsx)(n.strong,{children:"play"})," button on the pipeline canvas."]}),"\n",(0,s.jsxs)(n.li,{children:["Execute the pipeline up to and including a particular gem using the ",(0,s.jsx)(n.strong,{children:"play"})," button on that gem."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["After you run a pipeline, data samples will appear between nodes in your pipeline. When you click on a data sample, Prophecy loads the data and opens the ",(0,s.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-598/analysts/data-explorer",children:"Data Explorer"}),". The Data Explorer lets you sort, filter, and search through the gem output."]}),"\n",(0,s.jsx)(n.h2,{id:"scheduled-execution",children:"Scheduled execution"}),"\n",(0,s.jsx)(n.p,{children:"Scheduling allows you to automate your data pipelines at predefined intervals. For each pipeline in your project, you can configure independent schedules that specify how often a pipeline runs and whether to send alerts during the automated runs. The execution environment of the scheduled run is determined during project publication."}),"\n",(0,s.jsxs)(n.p,{children:["To learn more about deploying projects to specific execution environments, see ",(0,s.jsx)(n.a,{href:"/analysts/versioning",children:"Versioning"})," and ",(0,s.jsx)(n.a,{href:"/analysts/scheduling",children:"Scheduling"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"external-sources",children:"External sources"}),"\n",(0,s.jsxs)(n.p,{children:["When you read from and write to external sources, your pipeline runs steps behind the scenes to make the data compatible with SQL. Because SQL requires ",(0,s.jsx)(n.a,{href:"/analysts/source-target/#tables",children:"tables"})," to perform transformations, Prophecy Automate will create temporary tables in your SQL warehouse throughout the pipeline when necessary. These tables allow SQL to process external data and transform it."]}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"caution",children:(0,s.jsx)(n.p,{children:"You will not see these tables appear in the canvas during pipeline runs, and the tables will be deleted from the SQL warehouse after the pipeline run completes."})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);