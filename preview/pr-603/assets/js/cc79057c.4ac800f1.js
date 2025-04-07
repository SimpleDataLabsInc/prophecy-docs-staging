"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[78334],{20449:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"release_notes/2024/July_2024","title":"July 2024","description":"Release notes for July","source":"@site/docs/release_notes/2024/july2024.md","sourceDirName":"release_notes/2024","slug":"/release_notes/2024/July_2024","permalink":"/prophecy-docs-staging/preview/pr-603/release_notes/2024/July_2024","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"release notes","permalink":"/prophecy-docs-staging/preview/pr-603/tags/release-notes"},{"inline":true,"label":"changelog","permalink":"/prophecy-docs-staging/preview/pr-603/tags/changelog"},{"inline":true,"label":"july","permalink":"/prophecy-docs-staging/preview/pr-603/tags/july"}],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7,"id":"July_2024","description":"Release notes for July","title":"July 2024","tags":["release notes","changelog","july"]},"sidebar":"mySidebar","previous":{"title":"New UI for SQL","permalink":"/prophecy-docs-staging/preview/pr-603/release_notes/2024/August_2024/new-ui-sql-onboarding"},"next":{"title":"June 2024","permalink":"/prophecy-docs-staging/preview/pr-603/release_notes/2024/June_2024"}}');var s=i(74848),t=i(28453);const o={sidebar_position:7,id:"July_2024",description:"Release notes for July",title:"July 2024",tags:["release notes","changelog","july"]},l=void 0,a={},c=[{value:"3.3.8.* (July 8, 2024)",id:"338-july-8-2024",level:2},{value:"Features",id:"Features338",level:3},{value:"Supporting maven dependencies for Livy",id:"supporting-maven-dependencies-for-livy",level:4},{value:"Airflow Copilot enhancements",id:"airflow-copilot-enhancements",level:4},{value:"Pipeline Monitoring (beta)",id:"pipeline-monitoring-beta",level:4},{value:"Minor Improvements",id:"minor-improvements",level:3}];function p(e){const n={a:"a",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"338-july-8-2024",children:"3.3.8.* (July 8, 2024)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Prophecy Python libs version: 1.9.9"}),"\n",(0,s.jsx)(n.li,{children:"Prophecy Scala libs version: 8.0.22"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"Features338",children:"Features"}),"\n",(0,s.jsx)(n.h4,{id:"supporting-maven-dependencies-for-livy",children:"Supporting maven dependencies for Livy"}),"\n",(0,s.jsx)(n.p,{children:"Prophecy now supports adding Maven dependencies to pipelines, which are automatically installed on a cluster during pipeline attachment. This feature, previously available for Databricks, is now extended to Livy fabrics."}),"\n",(0,s.jsx)(n.h4,{id:"airflow-copilot-enhancements",children:"Airflow Copilot enhancements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"New Categories And Gems"}),": We have introduced new categories and gems, including SFTP Sensor, SFTP to Snowflake, Tableau Extract, and SFTP to S3. The gem Palette has been re-categorized with new sections for Data Transfer, Trigger/Notify, etc., to enhance gem discovery."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Simplified Model Gem"}),": The UX for the model gem in Airflow has been simplified. The model gem now automatically handles running the current working branch for the selected model and schedules the same upon release. Users can still choose to override these settings in the UI."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"pipeline-monitoring-beta",children:"Pipeline Monitoring (beta)"}),"\n",(0,s.jsx)(n.p,{children:"Pipeline Monitoring enables Spark Copilot users to monitor and debug their scheduled and interactive pipeline runs through Prophecy. When enabled, Prophecy highlights the gem that causes the failure at runtime. Users can view log stack traces in the Prophecy UI to debug runtime issues faster. This feature is available for all interactive runs through the Prophecy UI and any scheduled job runs."}),"\n",(0,s.jsxs)(n.p,{children:["To enable this, update the Prophecy Library version in your project dependencies to the latest (1.9.9), and add the Enable pipeline monitoring flag in pipeline settings. See ",(0,s.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-603/engineers/enable-pipeline-monitoring",children:"Enable Pipeline Monitoring"}),".\nNote that this feature is currently in beta."]}),"\n",(0,s.jsxs)(n.p,{children:["For more information, see ",(0,s.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-603/engineers/pipeline-monitoring",children:"Pipeline Monitoring"})," and ",(0,s.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-603/engineers/use-pipeline-monitoring",children:"Use Pipeline Monitoring"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"minor-improvements",children:"Minor Improvements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Support for Apache Iceberg in Sources and Targets"}),": Users can now use Iceberg Catalog tables for reading and writing data in Spark Copilot. This feature is currently available only in Python projects."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Duplicate Shared Pipelines"}),': Users can now duplicate a shared pipeline from a dependency project into their current project. This is useful for teams sharing a "starter" pipeline with basic gems and configurations, allowing other users to copy and start new pipeline development.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Support DBR 14.x and 15.x"}),": Prophecy now supports Databricks Runtime versions 14.x and 15.x for all interactive and scheduled runs via Prophecy."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var r=i(96540);const s={},t=r.createContext(s);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);