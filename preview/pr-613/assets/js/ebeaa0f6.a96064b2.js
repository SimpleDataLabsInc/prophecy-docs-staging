"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[14235],{1920:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"analysts/version-control/version-control","title":"Versioning","description":"Save and view project history","source":"@site/docs/analysts/version-control/version-control.md","sourceDirName":"analysts/version-control","slug":"/analysts/versioning","permalink":"/prophecy-docs-staging/preview/pr-613/analysts/versioning","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Versioning","id":"version-control","slug":"/analysts/versioning","description":"Save and view project history","tags":[]},"sidebar":"mySidebar","previous":{"title":"Use project tests","permalink":"/prophecy-docs-staging/preview/pr-613/analysts/project-tests"},"next":{"title":"Publication","permalink":"/prophecy-docs-staging/preview/pr-613/analysts/project-publication"}}');var n=i(74848),t=i(28453);const o={title:"Versioning",id:"version-control",slug:"/analysts/versioning",description:"Save and view project history",tags:[]},l=void 0,c={},a=[{value:"Version control options",id:"version-control-options",level:2},{value:"Workflow",id:"workflow",level:2},{value:"Save to draft",id:"save-to-draft",level:3},{value:"Publish new version",id:"publish-new-version",level:3},{value:"Show version history",id:"show-version-history",level:3},{value:"Restore previous version",id:"restore-previous-version",level:3},{value:"Powered by Git",id:"powered-by-git",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["This page details the different types of version control in Prophecy, the stages of the visual workflow, and the relationship to ",(0,n.jsx)(s.a,{href:"#powered-by-git",children:"Git"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"version-control-options",children:"Version control options"}),"\n",(0,n.jsx)(s.p,{children:"When you create a SQL project in Prophecy, you will have the option to select the Git Storage Model for the project. There are a few models to choose from."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Git Storage Model"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Simple"}),(0,n.jsxs)(s.td,{children:["Provides an intuitive visual workflow for project drafting and publication. Users all work on the same ",(0,n.jsx)(s.code,{children:"dev"})," branch in the Git backend."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Normal (no forks)"}),(0,n.jsx)(s.td,{children:"Enables the typical Git workflow aligned with DevOps best practices. Users all work in the same repository on different branches."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Fork per user"}),(0,n.jsx)(s.td,{children:"(External Git only) Enables the typical Git workflow aligned with DevOps best practices. Users work on their own copy of the repository."})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:["The following sections demonstrate the ",(0,n.jsx)(s.strong,{children:"visual workflow"})," for projects that use the Simple Git Storage Model. To view the workflow for normal Git, visit the section on ",(0,n.jsx)(s.a,{href:"/engineers/git",children:"Git"})," in the documentation."]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["The way you use Git will also influence how you collaborate in Prophecy. To learn more, visit ",(0,n.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-613/analysts/collaboration-modes",children:"Real-time collaboration"}),"."]})}),"\n",(0,n.jsx)(s.h2,{id:"workflow",children:"Workflow"}),"\n",(0,n.jsx)(s.p,{children:"The following sections describe the versioning workflow for the Simple Git Storage Model. In Simple mode, Prophecy creates a linear version history per project where you can audit changes, see collaborator activity, and revert to previous versions."}),"\n",(0,n.jsx)(s.h3,{id:"save-to-draft",children:"Save to draft"}),"\n",(0,n.jsxs)(s.p,{children:["As you develop your project, Prophecy automatically preserves your changes. In addition, we recommend periodically saving your changes as drafts. Click ",(0,n.jsx)(s.strong,{children:"Save to draft"})," on the project canvas to do so."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameters"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Version description"}),(0,n.jsx)(s.td,{children:"Summarizes the changes made since the last saved version."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Changes since last saved"}),(0,n.jsx)(s.td,{children:"Lists all the entities that anyone adds, removes, or modifies since the last saved version."})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"publish-new-version",children:"Publish new version"}),"\n",(0,n.jsx)(s.p,{children:"When you publish a project, the new version becomes available for:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-613/analysts/scheduling",children:"Scheduled pipeline runs"})," (depending on the fabric)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-613/analysts/extensibility#package-hub",children:"Package Hub"})," packages"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-613/analysts/business-applications",children:"App Directory"})," applications"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["To learn more, visit our page on ",(0,n.jsx)(s.a,{href:"/analysts/project-publication",children:"project publication"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"show-version-history",children:"Show version history"}),"\n",(0,n.jsxs)(s.p,{children:["Prophecy tracks different versions of your project that you save and publish. You can access the version history from the project editor or within the ",(0,n.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-613/projects#metadata",children:"project metadata"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"From the version history, you can:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"View modifications in each version."}),"\n",(0,n.jsx)(s.li,{children:"View the author of each change."}),"\n",(0,n.jsx)(s.li,{children:"Revert to previous versions."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"restore-previous-version",children:"Restore previous version"}),"\n",(0,n.jsx)(s.p,{children:"To restore a previous version:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Open the project version history."}),"\n",(0,n.jsx)(s.li,{children:"Expand a version."}),"\n",(0,n.jsx)(s.li,{children:"Click on a specific saved version."}),"\n",(0,n.jsx)(s.li,{children:"Review the state of the project for this version and verify that you wish to restore it."}),"\n",(0,n.jsxs)(s.li,{children:["Click ",(0,n.jsx)(s.strong,{children:"Restore this version"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"powered-by-git",children:"Powered by Git"}),"\n",(0,n.jsx)(s.p,{children:"As you move through the versioning workflow in your project, Prophecy actually maps these actions to Git processes in the backend. In other words, actions like saving, publishing, and restoring changes trigger Git commands. This is possible because all Prophecy projects are hosted on Git, regardless of the project's Git storage model (simple or normal)."}),"\n",(0,n.jsx)(s.p,{children:"The following table and diagram explains what each versioning action does in Git. If you connect to an external Git provider (rather than use Prophecy-managed Git), you can view how each action in is reflected in Git as you work on your project."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Prophecy action"}),(0,n.jsx)(s.th,{children:"Git backend"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Save to draft"}),(0,n.jsx)(s.td,{children:(0,n.jsxs)("ul",{class:"table-list",children:[(0,n.jsx)("li",{children:"Pulls changes from the remote development branch"}),(0,n.jsx)("li",{children:"Pulls changes from the main branch"}),(0,n.jsx)("li",{children:"Commits changes to a development branch"})]})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Publish"}),(0,n.jsx)(s.td,{children:(0,n.jsxs)("ul",{class:"table-list",children:[(0,n.jsx)("li",{children:"Merges changes into the main branch"}),(0,n.jsx)("li",{children:"Adds a Git tag with the published version number"})]})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Restore previous version"}),(0,n.jsx)(s.td,{children:(0,n.jsxs)("ul",{class:"table-list",children:[(0,n.jsxs)("li",{children:["Runs ",(0,n.jsx)(s.code,{children:"git reset --soft"})]}),(0,n.jsx)("li",{children:"Commits the changes"}),(0,n.jsx)("li",{children:"Pushes the changes"})]})})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Simple Git",src:i(74856).A+"",width:"2244",height:"2244"})})]})}function d(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>l});var r=i(96540);const n={},t=r.createContext(n);function o(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(t.Provider,{value:s},e.children)}},74856:(e,s,i)=>{i.d(s,{A:()=>r});const r=i.p+"assets/images/git-flow-simple-e771d9c2c505465468d11c56db6515d7.jpg"}}]);