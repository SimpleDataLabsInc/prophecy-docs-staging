"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[30848],{19483:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"analysts/development/pipelines/pipelines","title":"Pipelines","description":"Use pipelines in SQL projects","source":"@site/docs/analysts/development/pipelines/pipelines.md","sourceDirName":"analysts/development/pipelines","slug":"/analysts/pipelines","permalink":"/prophecy-docs-staging/preview/pr-615/analysts/pipelines","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"SQL","permalink":"/prophecy-docs-staging/preview/pr-615/tags/sql"},{"inline":true,"label":"pipeline","permalink":"/prophecy-docs-staging/preview/pr-615/tags/pipeline"},{"inline":true,"label":"analyst","permalink":"/prophecy-docs-staging/preview/pr-615/tags/analyst"}],"version":"current","frontMatter":{"title":"Pipelines","id":"pipelines","slug":"/analysts/pipelines","description":"Use pipelines in SQL projects","tags":["SQL","pipeline","analyst"]},"sidebar":"mySidebar","previous":{"title":"Pipeline development","permalink":"/prophecy-docs-staging/preview/pr-615/analysts/pipeline-development"},"next":{"title":"Pipeline execution","permalink":"/prophecy-docs-staging/preview/pr-615/analysts/pipeline-execution"}}');var s=n(74848),r=n(28453);const o={title:"Pipelines",id:"pipelines",slug:"/analysts/pipelines",description:"Use pipelines in SQL projects",tags:["SQL","pipeline","analyst"]},l=void 0,d={},c=[{value:"Pipeline creation",id:"pipeline-creation",level:2},{value:"Project editor",id:"project-editor",level:2},{value:"Sidebar",id:"sidebar",level:3},{value:"Canvas",id:"canvas",level:3},{value:"Header",id:"header",level:3},{value:"Footer",id:"footer",level:3}];function a(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["In Prophecy, data pipelines are designed to facilitate efficient data movement and transformation. In SQL projects, these pipelines execute within a ",(0,s.jsx)(i.a,{href:"/prophecy-docs-staging/preview/pr-615/administration/fabrics/prophecy-fabrics/",children:"Prophecy fabric"})," that orchestrates operations using ",(0,s.jsx)(i.a,{href:"/analysts/pipeline-execution",children:"Prophecy Automate"})," in conjunction with your chosen SQL warehouse."]}),"\n",(0,s.jsx)(i.h2,{id:"pipeline-creation",children:"Pipeline creation"}),"\n",(0,s.jsxs)(i.p,{children:["To create a new pipeline, navigate to the ",(0,s.jsx)(i.strong,{children:"Create Entity"})," page in the left sidebar. You can also create pipelines directly within an open project."]}),"\n",(0,s.jsx)(i.p,{children:"The following table describes the parameters you must provide when you create a pipeline."}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Parameter"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Project"}),(0,s.jsx)(i.td,{children:"The project where the pipeline will live."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Pipeline name"}),(0,s.jsx)(i.td,{children:"The name that identifies the pipeline."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Directory path"}),(0,s.jsxs)(i.td,{children:["The file path where this pipeline information will be stored in the project Git repository.",(0,s.jsx)("br",{}),"The default location is the ",(0,s.jsx)(i.code,{children:"pipelines"})," directory."]})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"project-editor",children:"Project editor"}),"\n",(0,s.jsx)(i.p,{children:"When you build a pipeline, it helps to be familiar with the project editor interface. The following sections describe each area of the project editor."}),"\n",(0,s.jsx)(i.h3,{id:"sidebar",children:"Sidebar"}),"\n",(0,s.jsx)(i.p,{children:"The project sidebar includes the following elements:"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Element"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Project Browser"})}),(0,s.jsx)(i.td,{children:"Allows you to browse through all of your existing pipelines and manage different components of your project, such as gems, tables, and functions."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Environment Browser"})}),(0,s.jsx)(i.td,{children:"Provides access to the various data sources and connections that have been configured in your fabric."})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"canvas",children:"Canvas"}),"\n",(0,s.jsx)(i.p,{children:"The canvas includes the following elements:"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Element"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Canvas"})}),(0,s.jsxs)(i.td,{children:["A workspace where you can add and connect various gems to build your pipeline.",(0,s.jsx)("br",{}),"It provides a drag-and-drop interface for designing your data flow."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Gem Drawer"})}),(0,s.jsx)(i.td,{children:"A toolbox that contains all the available gems, organized by gem category, that you can use in your pipeline."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Run Button"})}),(0,s.jsxs)(i.td,{children:["A button to trigger interactive pipeline execution.",(0,s.jsx)("br",{}),"This allows you to test and run the pipeline in real-time, which makes it easier to troubleshoot and verify the pipeline's performance before deployment. To learn more, visit ",(0,s.jsx)(i.a,{href:"/analysts/pipeline-execution/#interactive-execution",children:"Execution"}),"."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Copilot"})}),(0,s.jsxs)(i.td,{children:["An AI-powered assistant that helps build your pipeline.",(0,s.jsx)("br",{}),"Copilot can generate gems for you or fix diagnostic errors, making it easier to create complex workflows."]})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"header",children:"Header"}),"\n",(0,s.jsx)(i.p,{children:"The project header includes the following elements:"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Element"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Config"})}),(0,s.jsx)(i.td,{children:"Settings where you define dynamic pipeline parameters that control how your pipeline behaves at runtime."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Pipeline Options Menu"})}),(0,s.jsxs)(i.td,{children:["Accesses various settings and metadata for your pipeline.",(0,s.jsx)("br",{}),"It allows you to configure things like execution frequency, project dependencies, and other project-specific settings."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Visual/Code Toggle"})}),(0,s.jsxs)(i.td,{children:["Switch to the code view to see your visually-developed pipeline compiled into raw code.",(0,s.jsx)("br",{}),"This view helps users who prefer working with code to understand the underlying logic."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Version Menu"})}),(0,s.jsxs)(i.td,{children:["If you create your project using the ",(0,s.jsx)(i.a,{href:"/prophecy-docs-staging/preview/pr-615/analysts/versioning",children:"simple Git storage model"}),", you will see the version menu in the project header.",(0,s.jsx)("br",{}),"Use this menu to save your project, publish your project, or view your project history."]})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"footer",children:"Footer"}),"\n",(0,s.jsx)(i.p,{children:"The project footer includes the following elements:"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Element"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Diagnostics"})}),(0,s.jsxs)(i.td,{children:["Highlights any issues or errors in your pipeline that need attention.",(0,s.jsx)("br",{}),"It provides detailed feedback on what needs to be fixed to ensure that your pipeline runs successfully."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Runtime Logs"})}),(0,s.jsxs)(i.td,{children:["Offers detailed insights into the status and progress of your pipeline executions.",(0,s.jsx)("br",{}),"They show real-time information, errors, and other diagnostic messages, which helps you monitor and troubleshoot the pipeline's performance."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Git Workflow"})}),(0,s.jsxs)(i.td,{children:["If you create your project using the ",(0,s.jsx)(i.a,{href:"/prophecy-docs-staging/preview/pr-615/analysts/versioning",children:"normal Git storage model"}),", you will see the Git workflow in the project footer."]})]})]})]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>l});var t=n(96540);const s={},r=t.createContext(s);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);