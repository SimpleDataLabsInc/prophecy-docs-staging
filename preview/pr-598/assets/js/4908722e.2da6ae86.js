"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[8742],{16967:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"Spark/pipelines/pipelines","title":"Pipelines","description":"Flows that represent the data journey","source":"@site/docs/Spark/pipelines/pipelines.md","sourceDirName":"Spark/pipelines","slug":"/engineers/pipelines","permalink":"/prophecy-docs-staging/preview/pr-598/engineers/pipelines","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"concepts","permalink":"/prophecy-docs-staging/preview/pr-598/tags/concepts"},{"inline":true,"label":"pipelines","permalink":"/prophecy-docs-staging/preview/pr-598/tags/pipelines"}],"version":"current","frontMatter":{"title":"Pipelines","id":"pipelines","slug":"/engineers/pipelines","description":"Flows that represent the data journey","tags":["concepts","pipelines"]},"sidebar":"mySidebar","previous":{"title":"Pipeline development","permalink":"/prophecy-docs-staging/preview/pr-598/engineers/pipeline-development"},"next":{"title":"Configurations","permalink":"/prophecy-docs-staging/preview/pr-598/engineers/configurations"}}');var s=i(74848),r=i(28453);const a={title:"Pipelines",id:"pipelines",slug:"/engineers/pipelines",description:"Flows that represent the data journey",tags:["concepts","pipelines"]},d=void 0,l={},o=[{value:"Creation",id:"creation",level:2},{value:"Project editor",id:"project-editor",level:2},{value:"Canvas",id:"canvas",level:3},{value:"Metadata",id:"metadata",level:2}];function c(e){const t={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Pipelines are groups of data transformations that you can build from a ",(0,s.jsx)(t.strong,{children:"visual"})," or ",(0,s.jsx)(t.strong,{children:"code"})," interface. When using the visual interface, each component of a pipeline is automatically compiled into code that you can reuse and customize."]}),"\n",(0,s.jsx)(t.p,{children:"Under the hood, pipelines are based on Spark-native code. Pipelines are ideal for Spark environments like Databricks or EMR, particularly for tasks such as complex data ingestion (e.g., loading data from Salesforce or JDBC), handling advanced data transformations (e.g., working with complex data types), and supporting machine learning workflows."}),"\n",(0,s.jsx)(t.h2,{id:"creation",children:"Creation"}),"\n",(0,s.jsxs)(t.p,{children:["If you want to create a new pipeline, you can do so from the ",(0,s.jsx)(t.strong,{children:"Create Entity"})," page in the left sidebar. You can also create pipelines directly within the ",(0,s.jsx)(t.a,{href:"/projects/#project-editor",children:"Project Editor"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The following table describes the parameters for pipeline creation."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Project"}),(0,s.jsx)(t.td,{children:"The project to create the pipeline in. This controls access to the pipeline, groups pipelines together, and lets you use datasets in the project."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Branch"}),(0,s.jsx)(t.td,{children:"The Git branch to use for pipeline development."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Name"}),(0,s.jsx)(t.td,{children:"The name of the pipeline."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Mode"}),(0,s.jsx)(t.td,{children:"Whether the pipeline will be batch mode (collect and process data in scheduled intervals) or streaming (ingest and transmit data in real-time)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"A field to describe the purpose of the pipeline."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"project-editor",children:"Project editor"}),"\n",(0,s.jsx)(t.p,{children:"When building your pipelines, it helps to be familiar with the project editor interface. The following table describes different areas of the project editor."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Callout"}),(0,s.jsx)(t.th,{children:"Component"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"Project tab"}),(0,s.jsx)(t.td,{children:"A list in the left sidebar that shows all of the project components. When in code view, this project tab shows the file directory with the code components."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2"}),(0,s.jsx)(t.td,{children:"Environment browser"}),(0,s.jsx)(t.td,{children:"A list in the left sidebar that lets you browse different assets in your connected execution environment. For example, you can browse the Unity Catalog if you are attached to a Databricks fabric."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"3"}),(0,s.jsx)(t.td,{children:"Search"}),(0,s.jsx)(t.td,{children:"A search that lets you find different components like gems in your project and pipelines."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"4"}),(0,s.jsx)(t.td,{children:"Canvas"}),(0,s.jsx)(t.td,{children:"The area in the center of the project where you build your pipelines visually."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"5"}),(0,s.jsx)(t.td,{children:"Header"}),(0,s.jsx)(t.td,{children:"A menu that includes various configurations such as project settings, dependency management, cluster attachment, scheduling, and more. It also provides a toggle to switch between the Visual view and Code view."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"6"}),(0,s.jsx)(t.td,{children:"Footer"}),(0,s.jsx)(t.td,{children:"A menu that includes diagnostic information, execution metrics, execution code, and the Git workflow."})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"See these components marked in the image below."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Project Editor",src:i(58209).A+"",width:"2620",height:"1508"})}),"\n",(0,s.jsx)(t.h3,{id:"canvas",children:"Canvas"}),"\n",(0,s.jsx)(t.p,{children:"Let's take a closer look at the pipeline canvas. The canvas includes:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Canvas"}),": space to add and connect gems."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Gem drawer"}),": toolbox that contains all available gems."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Run button"}),": click to ",(0,s.jsx)(t.a,{href:"/engineers/execution",children:"execute the pipeline interactively"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Copilot"}),": AI assistant to help build your pipeline."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Pipeline canvas",src:i(38379).A+"",width:"2620",height:"1508"})}),"\n",(0,s.jsx)(t.h2,{id:"metadata",children:"Metadata"}),"\n",(0,s.jsxs)(t.p,{children:["To view a list of pipelines in Prophecy, navigate to the ",(0,s.jsx)(t.strong,{children:"Metadata"})," page from the left sidebar. For more granular metadata, click into a pipeline. Pipeline metadata can also be accessed from the header of the ",(0,s.jsx)(t.a,{href:"/projects/#project-editor",children:"Project Editor"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Pipeline metadata",src:i(68400).A+"",width:"2620",height:"1508"})}),"\n",(0,s.jsx)(t.p,{children:"The table below describes the different tabs inside an individual pipeline's metadata."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Tab"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Info"}),(0,s.jsx)(t.td,{children:"A list of the input and output datasets of the pipeline. You can also edit the pipeline name and description here."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Relations"}),(0,s.jsx)(t.td,{children:"A list of jobs and subgraphs that include the pipeline."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Code"}),(0,s.jsx)(t.td,{children:"The code that is stored in the Git repository for the pipeline."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Runs"}),(0,s.jsx)(t.td,{children:"A history of pipeline runs per fabric."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>d});var n=i(96540);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}},38379:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/pipeline-canvas-d7411647eedf276fc5dd947d3ea0c56c.png"},58209:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/project-editor-dec100b8075584852a38b4e775e0e400.png"},68400:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/pipeline-metadata-35351e5c8d9d1d8f5e3a476a80b38e68.png"}}]);