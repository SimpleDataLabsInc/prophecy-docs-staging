"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[3e4],{28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(96540);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}},40014:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/git-conflict-code-changes-fa149c138dcda9b59538af4122ae650d.png"},40979:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/git-conflict-manual-merge-4b742420cb078b40a5efbeff9cd8d036.png"},54548:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/git-conflict-merge-strategy-bcbe6c2515e08a9bf68a56658cea2ed1.png"},63949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"ci-cd/git/git-resolve","title":"Resolve conflicts","description":"Resolve conflicts that you may run into while merging your changes","source":"@site/docs/ci-cd/git/git-resolve.md","sourceDirName":"ci-cd/git","slug":"/engineers/resolve-git-conflicts","permalink":"/prophecy-docs-staging/preview/pr-615/engineers/resolve-git-conflicts","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"metadata","permalink":"/prophecy-docs-staging/preview/pr-615/tags/metadata"},{"inline":true,"label":"Git","permalink":"/prophecy-docs-staging/preview/pr-615/tags/git"},{"inline":true,"label":"resolve","permalink":"/prophecy-docs-staging/preview/pr-615/tags/resolve"}],"version":"current","frontMatter":{"title":"Resolve conflicts","id":"git-resolve","slug":"/engineers/resolve-git-conflicts","description":"Resolve conflicts that you may run into while merging your changes","tags":["metadata","Git","resolve"]},"sidebar":"mySidebar","previous":{"title":"Git workflow","permalink":"/prophecy-docs-staging/preview/pr-615/engineers/git-workflow"},"next":{"title":"Pull request templates","permalink":"/prophecy-docs-staging/preview/pr-615/engineers/git-pull-requests"}}');var i=n(74848),o=n(28453);const s={title:"Resolve conflicts",id:"git-resolve",slug:"/engineers/resolve-git-conflicts",description:"Resolve conflicts that you may run into while merging your changes",tags:["metadata","Git","resolve"]},c=void 0,l={},a=[{value:"Merge in Prophecy",id:"merge-in-prophecy",level:2},{value:"Left or right merge strategy",id:"left-or-right-merge-strategy",level:3},{value:"Code changes merge strategy",id:"code-changes-merge-strategy",level:3},{value:"Remote and local branch conflicts",id:"remote-and-local-branch-conflicts",level:2}];function h(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"This page describes how to resolve conflicts that you may run into while merging your changes. There are two ways to resolve merge conflicts when they arise:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Merge using the Prophecy interface"}),"\n",(0,i.jsx)(t.li,{children:"Merge in your external Git interface"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"merge-in-prophecy",children:"Merge in Prophecy"}),"\n",(0,i.jsx)(t.p,{children:"There are a couple of ways to manually resolve merge conflicts in Prophecy."}),"\n",(0,i.jsx)(t.h3,{id:"left-or-right-merge-strategy",children:"Left or right merge strategy"}),"\n",(0,i.jsxs)(t.p,{children:["The Left or Right merge strategy gives you a the option to resolve the conflict by choosing one version of your code to keep. After choosing, you can click ",(0,i.jsx)(t.strong,{children:"Next"})," to continue the merge process."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Choose a Git conflict manual merge",src:n(40979).A+"",width:"2620",height:"1508"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"(A)"})," ",(0,i.jsx)(t.strong,{children:"Strategy"}),": You must choose a preferred strategy to resolve the conflict. Here the Left strategy keeps the version on branch ",(0,i.jsx)(t.code,{children:"master"}),", while the Right strategy keeps the version on branch ",(0,i.jsx)(t.code,{children:"dev"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"(B)"})," ",(0,i.jsx)(t.strong,{children:"Open on master"}),": Clicking this opens the model on branch ",(0,i.jsx)(t.code,{children:"master"})," for you to view."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"(C)"})," ",(0,i.jsx)(t.strong,{children:"Open on dev"}),": Clicking this opens the model on branch ",(0,i.jsx)(t.code,{children:"dev"})," for you to view."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Here are the read-only views on branch ",(0,i.jsx)(t.code,{children:"master"})," on the left and branch ",(0,i.jsx)(t.code,{children:"dev"})," on the right:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"View Git conflict merge strategies",src:n(54548).A+"",width:"2812",height:"898"})}),"\n",(0,i.jsx)(t.h3,{id:"code-changes-merge-strategy",children:"Code changes merge strategy"}),"\n",(0,i.jsxs)(t.p,{children:["For SQL, you can also toggle on ",(0,i.jsx)(t.strong,{children:"Code Changes"})," to view and edit the code before validating. You can resolve conflicts by making code changes directly on the files."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"View Git conflict merge strategies",src:n(40014).A+"",width:"2620",height:"1508"})}),"\n",(0,i.jsxs)(t.p,{children:["Once you've made the changes that you want to keep, click ",(0,i.jsx)(t.strong,{children:"Next"}),". The merge process will compile the files."]}),"\n",(0,i.jsxs)(t.admonition,{title:"Errors caused by conflict resolution",type:"info",children:[(0,i.jsxs)(t.p,{children:["In rare cases, your merge attempt may result in an error after the compile completes. You'll be asked to fix the error before proceeding. See ",(0,i.jsx)(t.strong,{children:"Diagnostics"})," at the bottom for details on what the error is and how you might go about fixing it. Once you've fixed the error, click ",(0,i.jsx)(t.strong,{children:"Try Again"}),"."]}),(0,i.jsxs)(t.p,{children:["If you're confident that the errors are fine to leave as is, click ",(0,i.jsx)(t.strong,{children:"Ignore Errors"}),"."]})]}),"\n",(0,i.jsx)(t.h2,{id:"remote-and-local-branch-conflicts",children:"Remote and local branch conflicts"}),"\n",(0,i.jsx)(t.p,{children:"If your commit history differs between a remote and local branch (due to actions like rebasing and reverting), one way to resolve this is to delete one of the branches."}),"\n",(0,i.jsx)(t.p,{children:"To delete the local branch:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Open the ",(0,i.jsx)(t.strong,{children:"Git"})," menu from the project footer."]}),"\n",(0,i.jsxs)(t.li,{children:["Choose ",(0,i.jsx)(t.strong,{children:"Delete branch"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Select the branch you wish to delete."}),"\n",(0,i.jsxs)(t.li,{children:["Click the ",(0,i.jsx)(t.strong,{children:"Delete local branch"})," button."]}),"\n",(0,i.jsxs)(t.li,{children:["Click ",(0,i.jsx)(t.strong,{children:"Delete"})," to confirm deletion."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Delete a Git branch",src:n(95019).A+"",width:"2812",height:"900"})}),"\n",(0,i.jsx)(t.p,{children:"To delete the remote branch, do so from your external Git provider."})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},95019:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/git-delete-branch-2e41014253345b009b76ceec80e6ddc9.png"}}]);