"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[43772],{12276:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"ci-cd/deployment/deploy-project","title":"Develop and deploy a project","description":"Learn how to use Git for deployment","source":"@site/docs/ci-cd/deployment/deploy-project.md","sourceDirName":"ci-cd/deployment","slug":"/engineers/develop-and-deploy","permalink":"/prophecy-docs-staging/preview/pr-593/engineers/develop-and-deploy","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"how-to","permalink":"/prophecy-docs-staging/preview/pr-593/tags/how-to"},{"inline":true,"label":"project","permalink":"/prophecy-docs-staging/preview/pr-593/tags/project"},{"inline":true,"label":"git","permalink":"/prophecy-docs-staging/preview/pr-593/tags/git"},{"inline":true,"label":"deploy","permalink":"/prophecy-docs-staging/preview/pr-593/tags/deploy"}],"version":"current","frontMatter":{"title":"Develop and deploy a project","id":"deploy-project","slug":"/engineers/develop-and-deploy","sidebar_label":"Deploy a project","description":"Learn how to use Git for deployment","tags":["how-to","project","git","deploy"]},"sidebar":"mySidebar","previous":{"title":"Deployment","permalink":"/prophecy-docs-staging/preview/pr-593/engineers/deployment"},"next":{"title":"External release tags","permalink":"/prophecy-docs-staging/preview/pr-593/engineers/external-release-tags"}}');var o=t(74848),s=t(28453);const i={title:"Develop and deploy a project",id:"deploy-project",slug:"/engineers/develop-and-deploy",sidebar_label:"Deploy a project",description:"Learn how to use Git for deployment",tags:["how-to","project","git","deploy"]},c=void 0,a={},l=[{value:"Create a project",id:"create-a-project",level:2},{value:"Checkout branch",id:"checkout-branch",level:2},{value:"Make changes on the branch",id:"make-changes-on-the-branch",level:2},{value:"Merge changes",id:"merge-changes",level:2},{value:"Release and Deploy",id:"release-and-deploy",level:2}];function h(e){const n={a:"a",admonition:"admonition",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Prophecy provides a recommended mechanism for using Git based development. The four main phases of integrating your changes are ",(0,o.jsx)(n.strong,{children:"Commit"}),", ",(0,o.jsx)(n.strong,{children:"Pull"}),", ",(0,o.jsx)(n.strong,{children:"Merge"}),", and ",(0,o.jsx)(n.strong,{children:"Release"}),". A standard development pattern looks like this, though other mechanisms like forking are also supported:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Project deploy",src:t(32584).A+"",width:"1461",height:"1215"})}),"\n",(0,o.jsx)(n.p,{children:"Let's develop and deploy a project to illustrate these phases."}),"\n",(0,o.jsx)(n.h2,{id:"create-a-project",children:"Create a project"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Open the ",(0,o.jsx)(n.strong,{children:"Create Entity"})," page from the left sidebar."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Project"})]}),"\n",(0,o.jsx)(n.li,{children:"Create a new project or import an existing project."}),"\n",(0,o.jsx)(n.li,{children:"Choose existing Git credentials or connect new Git credentials."}),"\n",(0,o.jsx)(n.li,{children:"Specify the desired repository and path accessible to your Git user to store the project."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"For new projects, specify an empty repository or an empty path within an existing repository. For imported projects, select a repository, forked repository, or repository path that already contains the relevant project code."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"New project",src:t(74041).A+"",width:"2620",height:"1511"})}),"\n",(0,o.jsx)(n.h2,{id:"checkout-branch",children:"Checkout branch"}),"\n",(0,o.jsx)(n.p,{children:"A branch in Git is like a separate version of your project where you can make changes without affecting the main version. It lets you work on new features or fixes independently, and you can later merge your changes back into the main project."}),"\n",(0,o.jsx)(n.p,{children:"Let's checkout (or switch to) a different branch."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Open a project in the editor."}),"\n",(0,o.jsxs)(n.li,{children:["Select the ",(0,o.jsx)(n.strong,{children:"Git"})," tab in the bottom bar."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Checkout branch"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Choose an existing branch from the dropdown or create a new branch by typing a new name."}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Checkout"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Checkout branch",src:t(90094).A+"",width:"2620",height:"1511"})}),"\n",(0,o.jsx)(n.h2,{id:"make-changes-on-the-branch",children:"Make changes on the branch"}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.strong,{children:"commit"})," represents changes to one or more files in your project that let you keep and view project history. When you make changes to the pipeline, you will want to commit them. Let's see how to commit pipeline changes to preserve them in Git."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Make a change in your project, such as creating a new pipeline."}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Commit Changes"})," to open the Commit window."]}),"\n",(0,o.jsx)(n.li,{children:"Write a commit message or let our Copilot write one for you."}),"\n",(0,o.jsxs)(n.li,{children:["Review the change and click ",(0,o.jsx)(n.strong,{children:"Commit"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Commit changes",src:t(32988).A+"",width:"2812",height:"900"})}),"\n",(0,o.jsxs)(n.p,{children:["Once you have commited your changes, you have the option to continue developing your pipelines or to ",(0,o.jsx)(n.strong,{children:"merge"})," your changes. In this case, choose ",(0,o.jsx)(n.strong,{children:"Continue"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"merge-changes",children:"Merge changes"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Merge"})," will take the changes in the ",(0,o.jsx)(n.em,{children:"current branch"})," and merge them into a ",(0,o.jsx)(n.em,{children:"base branch"}),". Your changes will become part of the base branch and will be available to anyone else whose can access the base branch."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Ensure that you are merging to the correct base branch."}),"\n",(0,o.jsx)(n.li,{children:"Review the commits that you are merging."}),"\n",(0,o.jsxs)(n.li,{children:["If everything looks right, click ",(0,o.jsx)(n.strong,{children:"Merge"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Merge changes",src:t(66520).A+"",width:"2620",height:"1511"})}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsxs)(n.p,{children:["In this how-to, we have not discussed the ",(0,o.jsx)(n.strong,{children:"Pull"})," section of the Commit window. ",(0,o.jsx)(n.strong,{children:"Pull"})," brings changes that have occurred in ",(0,o.jsx)(n.a,{href:"https://git-scm.com/book/ms/v2/Git-Basics-Working-with-Remotes",children:"remote branches"})," into the Prophecy-local branches."]}),(0,o.jsxs)(n.p,{children:["If you have any upstream changes that need to be pulled into the local branches, you'll see that option in the ",(0,o.jsx)(n.strong,{children:"Pull"})," section before moving on to ",(0,o.jsx)(n.strong,{children:"Merge"}),"."]})]}),"\n",(0,o.jsx)(n.h2,{id:"release-and-deploy",children:"Release and Deploy"}),"\n",(0,o.jsxs)(n.p,{children:["When you ",(0,o.jsx)(n.strong,{children:"Release and Deploy"})," your project, a particular commit is tagged in the base branch with a user-specified version. This allows you designate a new version as ready for production, or inform users who may be subscribed to datasets defined within your project that there might be changes in the published dataset."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Select the commit you wish to deploy."}),"\n",(0,o.jsxs)(n.li,{children:["Specify the release version. This is usually a number, using a strategy like ",(0,o.jsx)(n.a,{href:"https://semver.org/",children:"semantic versioning"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Fill in the release notes to describe the release."}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Release and Deploy"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Release changes",src:t(17648).A+"",width:"2620",height:"1511"})}),"\n",(0,o.jsxs)(n.p,{children:["At this point, you have worked through one iteration of your project's lifecycle! To learn more about different deployment options, visit ",(0,o.jsx)(n.a,{href:"/engineers/deployment",children:"Deployment"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},17648:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/release-project-0f20b9b8a61b43d8dbbabad112a7e773.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(96540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}},32584:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/project_deploy-58d1040202710b31048a032ab397b7a9.png"},32988:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/commit-changes-41c6fc9ba7a23a801fe1f06dcc6246b3.png"},66520:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/merge-274d2a209d2738a9f5c93371f05f8218.png"},74041:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/new_project_git_credentials-e46020300307b78945544de1e0c3234d.png"},90094:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/checkout-branch-20c051de2b5c10dd522cfeb29319f305.png"}}]);