"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[65501],{28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var r=s(96540);const a={},t=r.createContext(a);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(t.Provider,{value:n},e.children)}},71649:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"release_notes/2025/3-4-5","title":"Prophecy 3.4.5.x","description":"Release notes for version 3.4.5","source":"@site/docs/release_notes/2025/3-4-5.md","sourceDirName":"release_notes/2025","slug":"/release_notes/2025/3-4-5","permalink":"/prophecy-docs-staging/preview/pr-606/release_notes/2025/3-4-5","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"release notes","permalink":"/prophecy-docs-staging/preview/pr-606/tags/release-notes"},{"inline":true,"label":"changelog","permalink":"/prophecy-docs-staging/preview/pr-606/tags/changelog"},{"inline":true,"label":"january","permalink":"/prophecy-docs-staging/preview/pr-606/tags/january"}],"version":"current","frontMatter":{"id":"3-4-5","description":"Release notes for version 3.4.5","title":"Prophecy 3.4.5.x","tags":["release notes","changelog","january"]},"sidebar":"mySidebar","previous":{"title":"2025","permalink":"/prophecy-docs-staging/preview/pr-606/release_notes/2025/"},"next":{"title":"Prophecy 3.4.4.x","permalink":"/prophecy-docs-staging/preview/pr-606/release_notes/2025/3-4-4"}}');var a=s(74848),t=s(28453);const i={id:"3-4-5",description:"Release notes for version 3.4.5",title:"Prophecy 3.4.5.x",tags:["release notes","changelog","january"]},o=void 0,l={},c=[{value:"Features",id:"features",level:2},{value:"Enhanced Data Explorer experience",id:"enhanced-data-explorer-experience",level:3},{value:"Updates",id:"updates",level:2},{value:"Snowflake for Prophecy-managed Airflow",id:"snowflake-for-prophecy-managed-airflow",level:3},{value:"Data sampling settings restriction",id:"data-sampling-settings-restriction",level:3},{value:"Fixes",id:"fixes",level:2},{value:"Single user clusters used by a Databricks group",id:"single-user-clusters-used-by-a-databricks-group",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"March 4, 2025"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Prophecy Python libs version: 1.9.36"}),"\n",(0,a.jsx)(n.li,{children:"Prophecy Scala libs version: 8.8.2"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,a.jsx)(n.h3,{id:"enhanced-data-explorer-experience",children:"Enhanced Data Explorer experience"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"/engineers/data-explorer",children:"Data Explorer"})," has been enhanced in the following ways:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Filter and sort happen in the frontend. It no longer requires execution in the backend."}),"\n",(0,a.jsxs)(n.li,{children:["You can search your data using the new ",(0,a.jsx)(n.strong,{children:"Search"})," function."]}),"\n",(0,a.jsxs)(n.li,{children:["You can load larger data samples at a time using the new ",(0,a.jsx)(n.strong,{children:"Selective"})," data sampling setting."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"updates",children:"Updates"}),"\n",(0,a.jsx)(n.h3,{id:"snowflake-for-prophecy-managed-airflow",children:"Snowflake for Prophecy-managed Airflow"}),"\n",(0,a.jsx)(n.p,{children:"We now support Snowflake as a connection on our Prophecy-managed Airflow fabric."}),"\n",(0,a.jsx)(n.h3,{id:"data-sampling-settings-restriction",children:"Data sampling settings restriction"}),"\n",(0,a.jsxs)(n.p,{children:["To change role restrictions for fabric-level ",(0,a.jsx)(n.a,{href:"/engineers/execution",children:"data sampling settings"}),", we have introduced two new flags that you can enable on your Prophecy deployment."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"ALLOW_FABRIC_ACCESS_CLUSTER_ADMIN"}),": Grants cluster admins full access to fabrics, even if they are not team admins."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"DISALLOW_FABRIC_CODEDEPS_UPDATE_TEAM_ADMIN"}),": Prevents team admins from modifying the data sampling settings within a fabric."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"fixes",children:"Fixes"}),"\n",(0,a.jsx)(n.h3,{id:"single-user-clusters-used-by-a-databricks-group",children:"Single user clusters used by a Databricks group"}),"\n",(0,a.jsx)(n.p,{children:"Users in Databricks groups assigned to single user clusters will have the permission to attach to the cluster in Prophecy without any further action."})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);