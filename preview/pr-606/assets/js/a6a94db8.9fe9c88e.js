"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[70826],{17744:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"analysts/version-control/publication","title":"Project publication","description":"Publish your projects to create new deployments","source":"@site/docs/analysts/version-control/publication.md","sourceDirName":"analysts/version-control","slug":"/analysts/project-publication","permalink":"/prophecy-docs-staging/preview/pr-606/analysts/project-publication","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Project publication","sidebar_label":"Publication","id":"publication","slug":"/analysts/project-publication","description":"Publish your projects to create new deployments","tags":[]},"sidebar":"mySidebar","previous":{"title":"Versioning","permalink":"/prophecy-docs-staging/preview/pr-606/analysts/versioning"},"next":{"title":"Scheduling","permalink":"/prophecy-docs-staging/preview/pr-606/analysts/scheduling"}}');var n=s(74848),o=s(28453);const r={title:"Project publication",sidebar_label:"Publication",id:"publication",slug:"/analysts/project-publication",description:"Publish your projects to create new deployments",tags:[]},l=void 0,a={},c=[{value:"Publication steps",id:"publication-steps",level:2},{value:"Publication parameters",id:"publication-parameters",level:2},{value:"Publish the project",id:"publish-the-project",level:2},{value:"Request to publish",id:"request-to-publish",level:2},{value:"Monitor deployed projects",id:"monitor-deployed-projects",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Project publication is an essential step in the project lifecycle. Each published version marks the project as production-ready and enables its use across different systems."}),"\n",(0,n.jsx)(t.h2,{id:"publication-steps",children:"Publication steps"}),"\n",(0,n.jsx)(t.p,{children:"When you publish a project, two key processes occur: release and deployment."}),"\n",(0,n.jsx)(t.p,{children:"First, the project is released, creating a new version and preparing it for distribution. During this process, Prophecy assigns a version label to the project and makes the new version available in packages and business applications."}),"\n",(0,n.jsxs)(t.p,{children:["Next, the project is deployed, configuring it for execution in different environments. The deployment process builds the project for each target environment (defined by ",(0,n.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-606/fabrics",children:"fabrics"}),") and enables pipeline ",(0,n.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-606/analysts/scheduling",children:"schedules"})," for each fabric."]}),"\n",(0,n.jsx)(t.h2,{id:"publication-parameters",children:"Publication parameters"}),"\n",(0,n.jsx)(t.p,{children:"Once you save your project as a draft, you have the option to Publish that version of the project. Review the following table to understand the publication parameters."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameters"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Version details"}),(0,n.jsx)(t.td,{children:"Copilot automatically populates the version details, but you can edit the version number or description if necessary."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Changes that will be published"}),(0,n.jsx)(t.td,{children:"Prophecy lists the saved drafts that include changes to be reflected in the new published version."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Select the fabric(s) to publish"}),(0,n.jsxs)(t.td,{children:["Prophecy creates a new project deployment for each fabric. If a deployment already exists, it is updated. To see your deployments, review the ",(0,n.jsx)(t.a,{href:"/analysts/monitoring",children:"Monitoring"})," page."]})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["Prophecy lets you publish different versions of a project to different fabrics. This might be useful if you want ",(0,n.jsx)(t.code,{children:"Version 1"})," published on a development fabric and ",(0,n.jsx)(t.code,{children:"Version 2"})," published on a production fabric. (You cannot publish two different versions to the same fabric.)"]}),"\n",(0,n.jsx)(t.h2,{id:"publish-the-project",children:"Publish the project"}),"\n",(0,n.jsx)(t.p,{children:"Follow the steps below to understand how to publish your project from the Prophecy interface."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.strong,{children:"Publish"})," from the project header."]}),"\n",(0,n.jsx)(t.li,{children:"Review the version details and the changes to be published."}),"\n",(0,n.jsx)(t.li,{children:"Select one or more fabrics to publish to."}),"\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.strong,{children:"Publish"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["If you use the version dropdown and select ",(0,n.jsx)(t.strong,{children:"Publish new version"})," before saving as a draft, you will be prompted to save your project to the version history first."]})}),"\n",(0,n.jsx)(t.h2,{id:"request-to-publish",children:"Request to publish"}),"\n",(0,n.jsxs)(t.p,{children:["Prophecy lets multiple users work on the same project ",(0,n.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-606/analysts/collaboration",children:"simultaneously"}),". If you try to publish the project while multiple people are working on it, you can ",(0,n.jsx)(t.strong,{children:"request to publish"})," the project. This way, all collaborators can be aware of the publication as they work on the project and approve or veto the action."]}),"\n",(0,n.jsx)(t.h2,{id:"monitor-deployed-projects",children:"Monitor deployed projects"}),"\n",(0,n.jsxs)(t.p,{children:["All of your teams' published projects will appear in the ",(0,n.jsx)(t.a,{href:"/analysts/monitoring",children:"Monitoring"})," page in Prophecy. This lets you see information like build results, deployment versions, publication dates, and more."]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>l});var i=s(96540);const n={},o=i.createContext(n);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);