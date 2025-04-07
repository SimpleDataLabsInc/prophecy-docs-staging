"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[3575],{13915:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"extensibility/package-hub/shareable-pipelines","title":"Build Shareable Pipelines","description":"Shareable Pipelines within the project and to other projects","source":"@site/docs/extensibility/package-hub/ShareablePipelines.md","sourceDirName":"extensibility/package-hub","slug":"/engineers/shareable-pipelines","permalink":"/prophecy-docs-staging/preview/pr-602/engineers/shareable-pipelines","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Build Shareable Pipelines","id":"shareable-pipelines","slug":"/engineers/shareable-pipelines","description":"Shareable Pipelines within the project and to other projects","tags":[]},"sidebar":"mySidebar","previous":{"title":"Package Hub","permalink":"/prophecy-docs-staging/preview/pr-602/engineers/package-hub"},"next":{"title":"Build Shareable Datasets","permalink":"/prophecy-docs-staging/preview/pr-602/engineers/shareable-datasets"}}');var s=i(74848),r=i(28453);const o={title:"Build Shareable Pipelines",id:"shareable-pipelines",slug:"/engineers/shareable-pipelines",description:"Shareable Pipelines within the project and to other projects",tags:[]},a=void 0,l={},p=[];function c(e){const n={admonition:"admonition",em:"em",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Users can share the pipelines from one project to another project and run it with a config in the dependent projects.\nThis way Data admins can ",(0,s.jsx)(n.em,{children:"Create deployment templates for the pipelines"})," that have the best practices baked into them for authorization, notifications,\nhandling of errors, and logging the correct information."]}),"\n",(0,s.jsxs)(n.p,{children:["An Admin User will create the pipeline in a project, let's call it ",(0,s.jsx)(n.em,{children:"Base project"}),".\nThey can add config variables to the pipeline, values for which can be provided while using the pipeline in another project called ",(0,s.jsx)(n.em,{children:"App project"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Users can run these pipelines then interactively, or also schedule them in jobs."}),"\n",(0,s.jsxs)(n.p,{children:["To use a pipeline from ",(0,s.jsx)(n.em,{children:"Base project"})," for interactive runs, the User would need to create a Config in ",(0,s.jsx)(n.em,{children:"App project"}),". Once added, this pipeline would be visible in ",(0,s.jsx)(n.em,{children:"App project"}),".\nPlease see the below video for interactive runs."]}),"\n",(0,s.jsx)("div",{style:{position:"relative","padding-bottom":"56.25%",height:0},children:(0,s.jsx)("iframe",{src:"https://www.loom.com/embed/a0dd8b6c896d4bd8b784ca46c1ecc932",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Please note, this pipeline is marked as ",(0,s.jsx)(n.strong,{children:"read-only"})," in ",(0,s.jsx)(n.em,{children:"App project"}),". Only configs can be added and edited for this pipeline here in ",(0,s.jsx)(n.em,{children:"App project"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["For jobs, you don't need to import a pipeline. When tyou create a job in ",(0,s.jsx)(n.em,{children:"App project"})," you will be able to select any pipeline from ",(0,s.jsx)(n.em,{children:"Base project"})," in the pipeline operator. All configs from ",(0,s.jsx)(n.em,{children:"Base project"})," and ",(0,s.jsx)(n.em,{children:"App project"})," are then available here in job."]}),"\n",(0,s.jsxs)(n.p,{children:["Please see the below video for sharing ",(0,s.jsx)(n.strong,{children:"Configured Pipelines"})," in jobs."]}),"\n",(0,s.jsx)("div",{style:{position:"relative","padding-bottom":"56.25%",height:0},children:(0,s.jsx)("iframe",{src:"https://www.loom.com/embed/77536ed8e8f149849a1997cd369eaeb4",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Please note, if a pipeline has a config with the same name in ",(0,s.jsx)(n.em,{children:"App project"})," and ",(0,s.jsx)(n.em,{children:"Base project"}),", the one in ",(0,s.jsx)(n.em,{children:"App project"})," would be considered final."]})}),"\n",(0,s.jsxs)(n.p,{children:["Any Modification to existing pipelines or new pipelines will be updated in ",(0,s.jsx)(n.em,{children:"AppProject"})," only after Releasing ",(0,s.jsx)(n.em,{children:"BaseProject"}),", and updating the dependency in ",(0,s.jsx)(n.em,{children:"AppProject"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(96540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);