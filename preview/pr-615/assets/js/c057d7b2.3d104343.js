"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[59285],{12343:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"release_notes/2024/Jan_2024","title":"January 2024","description":"Release notes for January","source":"@site/docs/release_notes/2024/jan2024.md","sourceDirName":"release_notes/2024","slug":"/release_notes/2024/Jan_2024","permalink":"/prophecy-docs-staging/preview/pr-615/release_notes/2024/Jan_2024","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"release notes","permalink":"/prophecy-docs-staging/preview/pr-615/tags/release-notes"},{"inline":true,"label":"changelog","permalink":"/prophecy-docs-staging/preview/pr-615/tags/changelog"}],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"id":"Jan_2024","description":"Release notes for January","title":"January 2024","tags":["release notes","changelog"]},"sidebar":"mySidebar","previous":{"title":"February 2024","permalink":"/prophecy-docs-staging/preview/pr-615/release_notes/2024/Feb_2024"},"next":{"title":"December 2023","permalink":"/prophecy-docs-staging/preview/pr-615/release_notes/2023/December_2023"}}');var t=s(74848),r=s(28453);const i={sidebar_position:1,id:"Jan_2024",description:"Release notes for January",title:"January 2024",tags:["release notes","changelog"]},o=void 0,c={},l=[{value:"3.2.8.* (Jan 11, 2024)",id:"328-jan-11-2024",level:2},{value:"Features",id:"FeaturesRelease328",level:3},{value:"Run as another User/Service Principal for Databricks Jobs",id:"run-as-another-userservice-principal-for-databricks-jobs",level:4}];function h(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"328-jan-11-2024",children:"3.2.8.* (Jan 11, 2024)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Prophecy Python libs version: 1.7.4"}),"\n",(0,t.jsx)(n.li,{children:"Prophecy Scala libs version: 7.1.53"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"FeaturesRelease328",children:"Features"}),"\n",(0,t.jsx)(n.h4,{id:"run-as-another-userservice-principal-for-databricks-jobs",children:"Run as another User/Service Principal for Databricks Jobs"}),"\n",(0,t.jsxs)(n.p,{children:["By default, Databricks Jobs run as the identity of the Job owner. This means that the Job assumes the permissions of the Job Owner, and it can only access data and database object that the owner has permission to access.\nYou can change the identity that the Job is running as to a Service Principal and then your Job will assume the permission of that service principle. Workspace admins can also change the identity that Job is running to a different user in\nthe workspace. To change the ",(0,t.jsx)(n.code,{children:"run as"})," settings you need to have either they can manage or is the owner permission on the Job. To change this, simply go to Job settings, and Change the Run As settings as shown below."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"run_as",src:s(71106).A+"",width:"2880",height:"1726"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var a=s(96540);const t={},r=a.createContext(t);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(r.Provider,{value:n},e.children)}},71106:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/jan_run_as_service_prinicpal-1b6da218addd5725fc47b8c1dcd9aaa5.png"}}]);