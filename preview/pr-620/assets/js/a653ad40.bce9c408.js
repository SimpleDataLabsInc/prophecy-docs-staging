"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[65501],{28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var r=s(96540);const i={},t=r.createContext(i);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}},71649:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"release_notes/2025/3-4-5","title":"Prophecy 3.4.5.x","description":"Release notes for version 3.4.5","source":"@site/docs/release_notes/2025/3-4-5.md","sourceDirName":"release_notes/2025","slug":"/release_notes/2025/3-4-5","permalink":"/prophecy-docs-staging/preview/pr-620/release_notes/2025/3-4-5","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"release notes","permalink":"/prophecy-docs-staging/preview/pr-620/tags/release-notes"},{"inline":true,"label":"changelog","permalink":"/prophecy-docs-staging/preview/pr-620/tags/changelog"},{"inline":true,"label":"january","permalink":"/prophecy-docs-staging/preview/pr-620/tags/january"}],"version":"current","frontMatter":{"id":"3-4-5","description":"Release notes for version 3.4.5","title":"Prophecy 3.4.5.x","tags":["release notes","changelog","january"]},"sidebar":"mySidebar","previous":{"title":"Prophecy 4.0.0.x","permalink":"/prophecy-docs-staging/preview/pr-620/release_notes/2025/4-0-0"},"next":{"title":"Prophecy 3.4.4.x","permalink":"/prophecy-docs-staging/preview/pr-620/release_notes/2025/3-4-4"}}');var i=s(74848),t=s(28453);const a={id:"3-4-5",description:"Release notes for version 3.4.5",title:"Prophecy 3.4.5.x",tags:["release notes","changelog","january"]},l=void 0,o={},c=[{value:"Features",id:"features",level:2},{value:"Fixes",id:"fixes",level:2},{value:"Prophecy Library versions",id:"prophecy-library-versions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"March 4, 2025"}),"\n",(0,i.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,i.jsx)(n.p,{children:"The following are features and improvements available in this release."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["You can now sort, filter, and search through your data in the ",(0,i.jsx)(n.a,{href:"/engineers/data-explorer",children:"Data Explorer"})," without rerunning the gem."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["We've added the ",(0,i.jsx)(n.a,{href:"/engineers/data-sampling#selective-recommended",children:"Selective"})," sampling setting to let you enable or disable data samples for individual gems."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"We now support Snowflake as a connection on our Prophecy-managed Airflow fabric."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["To change role restrictions for fabric-level ",(0,i.jsx)(n.a,{href:"/engineers/execution",children:"data sampling settings"}),", we have introduced two new flags that you can enable on your Prophecy deployment."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ALLOW_FABRIC_ACCESS_CLUSTER_ADMIN"}),": Grants cluster admins full access to fabrics, even if they are not team admins."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"DISALLOW_FABRIC_CODEDEPS_UPDATE_TEAM_ADMIN"}),": Prevents team admins from modifying the data sampling settings within a fabric."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"fixes",children:"Fixes"}),"\n",(0,i.jsx)(n.p,{children:"The following are fixes available in this release."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Users in Databricks groups assigned to single user clusters will have the permission to attach to the cluster in Prophecy without any further action."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"prophecy-library-versions",children:"Prophecy Library versions"}),"\n",(0,i.jsx)(n.p,{children:"The following are the newest available Prophecy Library versions in this release."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["ProphecyLibsPython: ",(0,i.jsx)(n.code,{children:"1.9.36"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["ProphecyLibsScala: ",(0,i.jsx)(n.code,{children:"8.8.2"})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);