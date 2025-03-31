"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[76639],{7817:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"ci-cd/git/git-best-practices","title":"Best practices","description":"Learn about what we recommend to do if you are working with Git.","source":"@site/docs/ci-cd/git/best-practices.md","sourceDirName":"ci-cd/git","slug":"/engineers/git-best-practices","permalink":"/prophecy-docs-staging/preview/pr-592/engineers/git-best-practices","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"git","permalink":"/prophecy-docs-staging/preview/pr-592/tags/git"},{"inline":true,"label":"best practices","permalink":"/prophecy-docs-staging/preview/pr-592/tags/best-practices"}],"version":"current","frontMatter":{"title":"Best practices","id":"git-best-practices","slug":"/engineers/git-best-practices","description":"Learn about what we recommend to do if you are working with Git.","tags":["git","best practices"]},"sidebar":"mySidebar","previous":{"title":"Pull request templates","permalink":"/prophecy-docs-staging/preview/pr-592/ci-cd/git/pr-templates"},"next":{"title":"Unit tests","permalink":"/prophecy-docs-staging/preview/pr-592/ci-cd/tests"}}');var t=r(74848),s=r(28453);const c={title:"Best practices",id:"git-best-practices",slug:"/engineers/git-best-practices",description:"Learn about what we recommend to do if you are working with Git.",tags:["git","best practices"]},a=void 0,l={},o=[{value:"Overview",id:"overview",level:2},{value:"Deep dive: Branching Strategy",id:"deep-dive-branching-strategy",level:2},{value:"Small teams",id:"small-teams",level:3},{value:"Large teams",id:"large-teams",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"To minimize and ideally avoid conflicts in your pull requests:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Have each user create their own feature branches."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Keep feature branches modular, which means:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Only modify assets as needed on your feature branch"}),"\n",(0,t.jsx)(n.li,{children:"Avoid modifying assets that other users are modifying in parallel feature branches"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"deep-dive-branching-strategy",children:"Deep dive: Branching Strategy"}),"\n",(0,t.jsx)(n.p,{children:"Use a proper Git branching strategy that aligns with your team's goals."}),"\n",(0,t.jsx)(n.h3,{id:"small-teams",children:"Small teams"}),"\n",(0,t.jsx)(n.p,{children:"For small teams:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Have a main branch for developers to merge in their changes."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"(Optional) Create a release branch to use as a staging area for releases across different environments."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Check out a new feature branch off the main branch for any new features."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Pull in the latest changes and resolve all merge conflicts on your feature branch before merging it into the main branch."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Have one developer work on a pipeline at any given time."}),"\n",(0,t.jsx)(n.p,{children:"A Prophecy merge conflict resolution occurs at the entity level, and a pipeline is considered as a single entity."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Have your admin enable pull requests for specific projects."}),"\n",(0,t.jsx)(n.p,{children:"This encourages teams to perform code reviews and collaborate, which ensures higher code quality and fewer bugs."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"large-teams",children:"Large teams"}),"\n",(0,t.jsx)(n.p,{children:"For large teams with rigid and separate execution environments, and promotion processes:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create the following branches: ",(0,t.jsx)(n.code,{children:"main"}),", ",(0,t.jsx)(n.code,{children:"release"}),", ",(0,t.jsx)(n.code,{children:"develop"}),", and feature branches"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Correspond each branch to different execution environment:"}),"\n",(0,t.jsx)(n.p,{children:"For example, the following branches may correspond to the following execution environments:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Branch"}),(0,t.jsx)(n.th,{children:"Execution environment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"main"}),", or ",(0,t.jsx)(n.code,{children:"hotfix"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"prod"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"release"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"uat"}),", ",(0,t.jsx)(n.code,{children:"test"}),", or ",(0,t.jsx)(n.code,{children:"qa"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"develop"}),", or ",(0,t.jsx)(n.code,{children:"feature"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"dev"})})]})]})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>a});var i=r(96540);const t={},s=i.createContext(t);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);