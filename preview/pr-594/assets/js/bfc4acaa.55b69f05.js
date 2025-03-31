"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[19984],{8690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"ci-cd/git/git-workflow","title":"Git workflow","description":"Follow the Git workflow in your Prophecy project","source":"@site/docs/ci-cd/git/git-workflow.md","sourceDirName":"ci-cd/git","slug":"/ci-cd/git/git-workflow","permalink":"/prophecy-docs-staging/preview/pr-594/ci-cd/git/git-workflow","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Git","permalink":"/prophecy-docs-staging/preview/pr-594/tags/git"},{"inline":true,"label":"workflow","permalink":"/prophecy-docs-staging/preview/pr-594/tags/workflow"}],"version":"current","frontMatter":{"title":"Git workflow","id":"git-workflow","description":"Follow the Git workflow in your Prophecy project","tags":["Git","workflow"]},"sidebar":"mySidebar","previous":{"title":"Git","permalink":"/prophecy-docs-staging/preview/pr-594/ci-cd/git/"},"next":{"title":"Resolve conflicts","permalink":"/prophecy-docs-staging/preview/pr-594/ci-cd/git/git-resolve"}}');var o=n(74848),r=n(28453);const s={title:"Git workflow",id:"git-workflow",description:"Follow the Git workflow in your Prophecy project",tags:["Git","workflow"]},c=void 0,l={},h=[{value:"Checkout",id:"checkout",level:2},{value:"Commit",id:"commit",level:2},{value:"Pull",id:"pull",level:2},{value:"Merge",id:"merge",level:2},{value:"Release and Deploy",id:"release-and-deploy",level:2},{value:"Rollback or restore",id:"rollback-or-restore",level:2}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"You can interact with a project's Git workflow from the project metadata page or within the project editor."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Git workflow",src:n(70490).A+"",width:"2812",height:"900"})}),"\n",(0,o.jsx)(t.h2,{id:"checkout",children:"Checkout"}),"\n",(0,o.jsxs)(t.p,{children:["In Prophecy, you cannot make edits directly on the ",(0,o.jsx)(t.code,{children:"main"})," branch of your project. Instead, you have to make changes on a development branch and merge those changes into the main branch."]}),"\n",(0,o.jsx)(t.p,{children:"Therefore, the Git workflow begins by creating and checking out a new branch."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Git checkout",src:n(86785).A+"",width:"2620",height:"1508"})}),"\n",(0,o.jsx)(t.p,{children:"When you are selecting a branch to checkout, you might be able to select branches that have been created remotely. Once you checkout a remote branch, it will be cloned locally, and it will no longer show up in the list of remote branches."}),"\n",(0,o.jsx)(t.h2,{id:"commit",children:"Commit"}),"\n",(0,o.jsxs)(t.p,{children:["When you make changes to your pipeline, you need to commit these changes to save them. You can view these changes either visually, or using the ",(0,o.jsx)(t.strong,{children:"Code changes"})," view."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"View Git changes",src:n(33666).A+"",width:"2812",height:"900"})}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:(0,o.jsx)(t.strong,{children:"Feature"})}),(0,o.jsx)(t.th,{children:(0,o.jsx)(t.strong,{children:"View"})}),(0,o.jsx)(t.th,{children:(0,o.jsx)(t.strong,{children:"Description"})})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Branch history"}),(0,o.jsx)(t.td,{children:"Visual"}),(0,o.jsx)(t.td,{children:"Shows previous commits on the branch."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Entities changed"}),(0,o.jsx)(t.td,{children:"Visual"}),(0,o.jsx)(t.td,{children:"Explains which entities were modified."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Code changes toggle"}),(0,o.jsx)(t.td,{children:"Code"}),(0,o.jsx)(t.td,{children:"Allows you to view the code differences, with highlighted lines for additions and deletions."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Code changes tab"}),(0,o.jsx)(t.td,{children:"Code"}),(0,o.jsx)(t.td,{children:"Displays all of the files with changes."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Metadata changes tab"}),(0,o.jsx)(t.td,{children:"Code"}),(0,o.jsx)(t.td,{children:"Displays all of the Prophecy metadata files with changes."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Reset"}),(0,o.jsx)(t.td,{children:"Both"}),(0,o.jsx)(t.td,{children:"Reverts the changes."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Commit Message"}),(0,o.jsx)(t.td,{children:"Both"}),(0,o.jsx)(t.td,{children:"Explains the changes that will be saved in this commit."})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"pull",children:"Pull"}),"\n",(0,o.jsx)(t.p,{children:"Sometimes, you will be able to go straight from committing your changes to merging your changes. However, there are a few steps you might need to complete before merging your changes:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Pull ",(0,o.jsx)(t.strong,{children:"remote"})," changes into the ",(0,o.jsx)(t.strong,{children:"local"})," current branch."]}),"\n",(0,o.jsxs)(t.li,{children:["Pull ",(0,o.jsx)(t.strong,{children:"remote"})," changes into the ",(0,o.jsx)(t.strong,{children:"local"})," base branch. Note that the base branch will be ",(0,o.jsx)(t.code,{children:"main"})," by default."]}),"\n",(0,o.jsxs)(t.li,{children:["Pull changes from the ",(0,o.jsx)(t.strong,{children:"local"})," base branch into the ",(0,o.jsx)(t.strong,{children:"local"})," current branch. You will not be able to complete this step before pulling remote commits."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Git pull",src:n(46688).A+"",width:"2620",height:"1508"})}),"\n",(0,o.jsxs)(t.p,{children:["Once you complete these steps, you might run into merge conflicts. If that happens, you can ",(0,o.jsx)(t.a,{href:"git-resolve",children:"use the Prophecy interface"})," to resolve them."]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"Before you pull remote changes into local branches, you will have to commit (or discard) your local changes."})}),"\n",(0,o.jsx)(t.h2,{id:"merge",children:"Merge"}),"\n",(0,o.jsxs)(t.p,{children:["Once you have committed your changes, you have the ability to ",(0,o.jsx)(t.strong,{children:"merge"})," them to a different branch. If you merged your branch in your external repository, you can tell Prophecy that you did so."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Merge branch",src:n(71585).A+"",width:"2620",height:"1511"})}),"\n",(0,o.jsx)(t.h2,{id:"release-and-deploy",children:"Release and Deploy"}),"\n",(0,o.jsxs)(t.p,{children:["Once the changes are merged, you can ",(0,o.jsx)(t.a,{href:"/ci-cd/deployment/",children:"release and deploy"})," a branch from the Prophecy user interface."]}),"\n",(0,o.jsx)(t.h2,{id:"rollback-or-restore",children:"Rollback or restore"}),"\n",(0,o.jsx)(t.p,{children:"If you have changes that you do not want to commit, there are a few ways to discard them."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Click the Reset button in the commit stage of the Git workflow. This discards all changes in your project since the last commit."}),"\n",(0,o.jsx)(t.li,{children:"Restore a particular component from the the Project Browser."}),"\n",(0,o.jsx)(t.li,{children:"Rollback changes to a particular component in the Git workflow."}),"\n",(0,o.jsx)(t.li,{children:"Rollback to a specific commit in the Git workflow."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Rollback component",src:n(53309).A+"",width:"2812",height:"900"})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var i=n(96540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}},33666:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/git-code-changes-28157bfd1f17017c36a36f285eea829e.png"},46688:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/git-pull-8c2ebd935b424a2ffe0705d0b1cc66c2.png"},53309:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/git-rollback-49824f47befb9f2d2cb9b5285e840fbe.png"},70490:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/git-workflow-4a5e9344f38fff8be6f9ad4f7886f680.png"},71585:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/merge-branch-274d2a209d2738a9f5c93371f05f8218.png"},86785:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/git-checkout-3e3bfaea47938563c20c3f4aff781bd2.png"}}]);