"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[209],{20862:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"release_notes/2024/August_2024/August_2024","title":"August 2024","description":"Release notes for August","source":"@site/docs/release_notes/2024/August_2024/August_2024.md","sourceDirName":"release_notes/2024/August_2024","slug":"/release_notes/2024/August_2024/","permalink":"/prophecy-docs-staging/preview/pr-618/release_notes/2024/August_2024/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"release notes","permalink":"/prophecy-docs-staging/preview/pr-618/tags/release-notes"},{"inline":true,"label":"changelog","permalink":"/prophecy-docs-staging/preview/pr-618/tags/changelog"},{"inline":true,"label":"august","permalink":"/prophecy-docs-staging/preview/pr-618/tags/august"}],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"id":"August_2024","description":"Release notes for August","title":"August 2024","tags":["release notes","changelog","august"]},"sidebar":"mySidebar","previous":{"title":"September 2024","permalink":"/prophecy-docs-staging/preview/pr-618/release_notes/2024/September_2024"},"next":{"title":"New UI for SQL","permalink":"/prophecy-docs-staging/preview/pr-618/release_notes/2024/August_2024/new-ui-sql-onboarding"}}');var t=s(74848),o=s(28453);const i={sidebar_position:1,id:"August_2024",description:"Release notes for August",title:"August 2024",tags:["release notes","changelog","august"]},a=void 0,l={},c=[{value:"3.3.9.* (August 12, 2024)",id:"339-august-12-2024",level:2},{value:"Features",id:"Features339",level:3},{value:"Spark Copilot Enhancements",id:"Spark339",level:4},{value:"SQL Copilot Enhancements",id:"SQL339",level:4},{value:"Airflow Copilot Enhancements",id:"Airflow339",level:4},{value:"Minor Improvements",id:"MinorImprovements339",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"339-august-12-2024",children:"3.3.9.* (August 12, 2024)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Prophecy Python libs version: 1.9.9"}),"\n",(0,t.jsx)(n.li,{children:"Prophecy Scala libs version: 8.0.29"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"Features339",children:"Features"}),"\n",(0,t.jsx)(n.h4,{id:"Spark339",children:"Spark Copilot Enhancements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Support custom artifactory resolve plibs version"}),": We now support adding custom PyPI or Maven dependencies for pipelines running on all Spark fabrics including EMR, Dataproc, etc."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Support for config resolution inside call_func()"}),": Config variables inside of the ",(0,t.jsx)(n.code,{children:"call_function()"})," and ",(0,t.jsx)(n.code,{children:"call_func()"})," are now supported. The new syntax is ",(0,t.jsx)(n.code,{children:'call_function("{{catalogName}}.{{database}}.{{funcName}}", "{{firstArg}}")'}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Support for proxy-user impersonation in Kerberos Livy Fabric Auth"}),": As an admin user, you can configure multiple Keytab accounts in the ",(0,t.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-618/administration/fabrics/Spark-fabrics/livy",children:"security settings"}),". You can upload the Keytab files and set up proxy-user impersonation in Kerberos for secure authentication to Livy fabrics."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"SQL339",children:"SQL Copilot Enhancements"}),"\n",(0,t.jsxs)(n.p,{children:["In this release, we've updated the UX and capabilities of the expression builder, target model, and more. Read our ",(0,t.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-618/release_notes/2024/August_2024/new-ui-sql-onboarding",children:"New SQL UI Onboarding Guide"})," to get familiar with the updated interface."]}),"\n",(0,t.jsx)(n.h4,{id:"Airflow339",children:"Airflow Copilot Enhancements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Support for partial run for Airflow Jobs"}),": We've added play buttons on gems, which you can use to start partial runs for Airflow Jobs."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Ability to create a model from the model dropdown"}),": While configuring the model gem in your job, you now have the option to create a model from the model dropdown."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"MinorImprovements339",children:"Minor Improvements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Clone a Prophecy Job"}),": You can now clone a Prophecy job just as you may clone a pipeline. This is useful for job renaming issues."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var r=s(96540);const t={},o=r.createContext(t);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);