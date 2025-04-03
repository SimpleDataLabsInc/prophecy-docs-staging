"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[3871],{28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var r=s(96540);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}},52369:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"release_notes/2024/September_2024","title":"September 2024","description":"Release notes for September","source":"@site/docs/release_notes/2024/sept2024.md","sourceDirName":"release_notes/2024","slug":"/release_notes/2024/September_2024","permalink":"/prophecy-docs-staging/preview/pr-599/release_notes/2024/September_2024","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"release notes","permalink":"/prophecy-docs-staging/preview/pr-599/tags/release-notes"},{"inline":true,"label":"changelog","permalink":"/prophecy-docs-staging/preview/pr-599/tags/changelog"},{"inline":true,"label":"september","permalink":"/prophecy-docs-staging/preview/pr-599/tags/september"}],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_position":9,"id":"September_2024","description":"Release notes for September","title":"September 2024","tags":["release notes","changelog","september"]},"sidebar":"mySidebar","previous":{"title":"Developing Pipelines","permalink":"/prophecy-docs-staging/preview/pr-599/release_notes/2024/October_2024/webinar_new_features/development_highlights"},"next":{"title":"August 2024","permalink":"/prophecy-docs-staging/preview/pr-599/release_notes/2024/August_2024/"}}');var i=s(74848),t=s(28453);const o={sidebar_position:9,id:"September_2024",description:"Release notes for September",title:"September 2024",tags:["release notes","changelog","september"]},l=void 0,a={},c=[{value:"3.3.11.* (September 20, 2024)",id:"3311-september-20-2024",level:2},{value:"Features",id:"Features3311",level:3},{value:"Spark Copilot Enhancements",id:"Spark3311",level:4},{value:"SQL Copilot Enhancements",id:"SQL3311",level:4},{value:"Minor Improvements",id:"MinorImprovements3311",level:3},{value:"3.3.10.* (September 2, 2024)",id:"3310-september-2-2024",level:2},{value:"Features",id:"Features3310",level:3},{value:"Spark Copilot Enhancements",id:"Spark3310",level:4},{value:"SQL Copilot Enhancements",id:"SQL3310",level:4},{value:"UX Improvements",id:"UXImprovements3310",level:3},{value:"Minor Improvements",id:"MinorImprovements3310",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"3311-september-20-2024",children:"3.3.11.* (September 20, 2024)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Prophecy Python libs version: 1.9.16"}),"\n",(0,i.jsx)(n.li,{children:"Prophecy Scala libs version: 8.2.1"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"Features3311",children:"Features"}),"\n",(0,i.jsx)(n.h4,{id:"Spark3311",children:"Spark Copilot Enhancements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Jinja Config syntax"}),": We've unified the config syntax across all project types by supporting Jinja config syntax."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, instead of using ",(0,i.jsx)(n.code,{children:"'$test_expression'"})," for SQL or ",(0,i.jsx)(n.code,{children:"Config.test_expression"})," for Scala/Python, you can use ",(0,i.jsx)(n.code,{children:"{{test_expression}}"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Jinja Config syntax example",src:s(58454).A+"",width:"2640",height:"1517"})}),"\n",(0,i.jsxs)(n.p,{children:["For more information on enabling the syntax, supported functionalities, and examples, see ",(0,i.jsx)(n.a,{href:"/engineers/configurations",children:"Jinja Config syntax"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"SQL3311",children:"SQL Copilot Enhancements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Lineage run"}),": You can now run your project from the lineage view. By using the play button, you can select which entities you'd like to include in your run."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Lineage choose and run",src:s(83947).A+"",width:"2640",height:"1501"})}),"\n",(0,i.jsx)(n.p,{children:"After the run has completed, you can click to view interim data."}),"\n",(0,i.jsx)(n.p,{children:"From the resulting Runtime Logs panel, you can see logs of the current run, which are grouped for easy viewing. Click on a grouping to expand it."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Lineage group and expand",src:s(98122).A+"",width:"2812",height:"814"})}),"\n",(0,i.jsx)(n.p,{children:"We also help you diagnose errors in failed runs. Simply click the Diagnose button next to the error log. You are shown the error and a suggestion for a possible way to fix it."}),"\n",(0,i.jsxs)(n.p,{children:["For more information, see ",(0,i.jsx)(n.a,{href:"/engineers/lineage-run-and-diagnose",children:"Lineage run and diagnose"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Parametrized schema"}),": In some scenarios, you may need to parameterize your location paths using external variables. You can do this by enabling the Schema field parameterization on the Location tab of your Target model."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"MinorImprovements3311",children:"Minor Improvements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Deployment APIs"}),": You can use our external APIs for deployment and monitoring of your Prophecy project."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"3310-september-2-2024",children:"3.3.10.* (September 2, 2024)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Prophecy Python libs version: 1.9.14"}),"\n",(0,i.jsx)(n.li,{children:"Prophecy Scala libs version: 8.1.4"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"Features3310",children:"Features"}),"\n",(0,i.jsx)(n.h4,{id:"Spark3310",children:"Spark Copilot Enhancements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Source suggestion"}),": While working on your pipeline, if there is an unconnected source, Data Copilot will now suggest other sources that you can add to it on the graph."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"SQL3310",children:"SQL Copilot Enhancements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SQL Subgraph"}),": We now support subgraphs in SQL models. Subgraphs allow you to wrap multiple different gems under a single parent gem. These logical groupings can simplify the Visual view of your model."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Support for configurations in the Target model"}),": The Target model supports column selection and project-level configurations."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Schedule button"}),": Just as you can schedule a pipeline in Spark, you can now use the Schedule button to schedule a model in SQL. Opening the Schedule screen shows all existing jobs. You can also create a new job."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Support dragging function parameters"}),": You can drag and drop function parameters in the Visual view of the expression builder."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"UXImprovements3310",children:"UX Improvements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Support teams search"}),": You can use search on the teams select box during fabric creation."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SQL upload file button"}),": The Upload File button is now always present on the Environment browser."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"MinorImprovements3310",children:"Minor Improvements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Fix with AI while saving gems"}),": When saving a gem, Data Copilot provides a one-click option to automatically resolve any diagnostic errors within the gem."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Auto describe datasets"}),": We now automatically describe datasets and their columns when you drop a dataset from the Environment browser. Additionally, we improved the quality of the descriptions using interim data when you run your pipeline."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"UDFs and Macros in Copilot expression suggestions"}),": The Data Copilot can now generate expressions using custom UDFs and Macros defined in Spark and SQL projects."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Prevent unnecessary code changes"}),": Unnecessary code changes are no longer made for the following cases:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"after a new user loads a job that was created by another user in the pipeline"}),"\n",(0,i.jsx)(n.li,{children:"after multiple users open a pipeline with published subgraphs"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"UI doesn't refresh after pull origin fix"}),": We've fixed an issue where merged changes didn't appear after pulling origin in Prophecy until you've refreshed the UI."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Fabric configuration reset fix"}),": We've fixed an issue where the fabric configuration would reset during creation when adding a job size and selecting JSON."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Upgrade dbt version"}),": We've upgraded our dbt supported version to v1.8."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},58454:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/sept-jinja-config-syntax-example-f8192535f1e7545697921fb79a7edcf9.png"},83947:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/sept-lineage-choose-and-run-64a57df52c39d99e97ebd30fd374073f.png"},98122:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/sept-lineage-group-and-expand-9a1756cfc6f0be3e4be84d136a324659.png"}}]);