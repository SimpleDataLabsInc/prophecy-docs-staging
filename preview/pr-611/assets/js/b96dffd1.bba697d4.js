"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[67003],{28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>a});var r=o(96540);const n={},i=r.createContext(n);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(i.Provider,{value:t},e.children)}},67083:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"ci-cd/git/Git","title":"Git","description":"Understand how Prophecy uses Git for version control","source":"@site/docs/ci-cd/git/git.md","sourceDirName":"ci-cd/git","slug":"/engineers/git","permalink":"/prophecy-docs-staging/preview/pr-611/engineers/git","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"metadata","permalink":"/prophecy-docs-staging/preview/pr-611/tags/metadata"},{"inline":true,"label":"Git","permalink":"/prophecy-docs-staging/preview/pr-611/tags/git"}],"version":"current","frontMatter":{"title":"Git","id":"Git","slug":"/engineers/git","description":"Understand how Prophecy uses Git for version control","tags":["metadata","Git"]},"sidebar":"mySidebar","previous":{"title":"CI/CD in Prophecy","permalink":"/prophecy-docs-staging/preview/pr-611/engineers/ci-cd"},"next":{"title":"Git workflow","permalink":"/prophecy-docs-staging/preview/pr-611/engineers/git-workflow"}}');var n=o(74848),i=o(28453);const s={title:"Git",id:"Git",slug:"/engineers/git",description:"Understand how Prophecy uses Git for version control",tags:["metadata","Git"]},a=void 0,c={},l=[{value:"Projects and Git repositories",id:"projects-and-git-repositories",level:2},{value:"Add Git credentials to Prophecy",id:"Git-credentials",level:2},{value:"GitHub Oauth",id:"github-oauth",level:3},{value:"Fork per User",id:"fork-per-user",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function d(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Prophecy utilizes ",(0,n.jsx)(t.a,{href:"https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control",children:"Git"})," to align with DevOps practices. Git lets you:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Store your visual pipelines as code."}),"\n",(0,n.jsx)(t.li,{children:"Track your project metadata, including workflows, schedules, datasets, and computed metadata."}),"\n",(0,n.jsx)(t.li,{children:"Collaborate on your projects and perform code reviews."}),"\n",(0,n.jsx)(t.li,{children:"Track changes across time."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"projects-and-git-repositories",children:"Projects and Git repositories"}),"\n",(0,n.jsx)(t.p,{children:"When you create a project in Prophecy, you must choose an empty Git repository or a path in a repository to host the underlying project code. This way, Prophecy can keep track of any changes to the project (including pipelines, models, datasets, and jobs) in a systematic way."}),"\n",(0,n.jsxs)(t.p,{children:["If you're unfamiliar with Git, or you don't need to connect to an external Git repository, you can connect your projects to ",(0,n.jsx)(t.strong,{children:"Prophecy-managed"})," repositories. To leverage the full functionality of Git, however, you need to connect your projects to external Git repositories. To do so, you need to add external Git credentials to Prophecy."]}),"\n",(0,n.jsx)(t.h2,{id:"Git-credentials",children:"Add Git credentials to Prophecy"}),"\n",(0,n.jsx)(t.p,{children:"When you create a project in Prophecy, You can either choose a Prophecy-managed repository or connect an external repository."}),"\n",(0,n.jsx)(t.p,{children:"To add an external Git account to your Prophecy environment:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Open ",(0,n.jsx)(t.strong,{children:"Settings"})," from the ellipses menu in the left sidebar."]}),"\n",(0,n.jsxs)(t.li,{children:["Select the ",(0,n.jsx)(t.strong,{children:"Git"})," tab. You will see any existing Git credentials here."]}),"\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.strong,{children:"Add new"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Choose the relevant ",(0,n.jsx)(t.strong,{children:"Git Provider"})," and provide the following details:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"An alias for your Git credentials."}),"\n",(0,n.jsx)(t.li,{children:"Your Git email."}),"\n",(0,n.jsx)(t.li,{children:"Your Git username."}),"\n",(0,n.jsx)(t.li,{children:"Your Git personal access token (PAT). You should be able to find instructions on accessing your personal access token in each external provider's documentation."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.strong,{children:"Connect"})," to save the credentials."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"You can also enter new Git credentials directly when creating a new project."}),"\n",(0,n.jsx)(t.h3,{id:"github-oauth",children:"GitHub Oauth"}),"\n",(0,n.jsx)(t.p,{children:"If you choose GitHub as your external Git provider, you can add your Git credentials using GitHub Oauth."}),"\n",(0,n.jsxs)(t.p,{children:["To use GitHub Oauth, a GitHub admin will need to ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/apps/oauth-apps/using-oauth-apps/authorizing-oauth-apps",children:"authorize Prophecy"})," to access the APIs required to access your organization's repositories. Follow the ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/organizations/managing-oauth-access-to-your-organizations-data/approving-oauth-apps-for-your-organization",children:"approval steps"})," to set this up."]}),"\n",(0,n.jsx)(t.h2,{id:"fork-per-user",children:"Fork per User"}),"\n",(0,n.jsxs)(t.p,{children:["When you create a project, you have the option to choose a single repository shared among users, or to ",(0,n.jsx)(t.strong,{children:"Fork per User"}),". When you Fork per User, every user gets their own ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo",children:"fork"})," of the repository."]}),"\n",(0,n.jsx)(t.p,{children:"When you fork a repository, you must already have both the upstream repository and a Fork per User repository present."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Changes made in forked repository do not affect the upstream repository."}),"\n",(0,n.jsx)(t.li,{children:"Please follow the normal Git flow for raising pull requests to the original repository from the forked repository."}),"\n"]})}),"\n",(0,n.jsx)(t.h2,{id:"whats-next",children:"What's next"}),"\n",(0,n.jsxs)(t.p,{children:["Learn more about the ",(0,n.jsx)(t.a,{href:"/engineers/git-workflow",children:"Git workflow"})," or try it yourself in ",(0,n.jsx)(t.a,{href:"/engineers/deployment",children:"Develop and deploy a project"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);