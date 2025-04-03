"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[74072],{20360:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"release_notes/2023/November_2023","title":"November 2023","description":"Release notes for November","source":"@site/docs/release_notes/2023/nov2023.md","sourceDirName":"release_notes/2023","slug":"/release_notes/2023/November_2023","permalink":"/prophecy-docs-staging/preview/pr-598/release_notes/2023/November_2023","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"release notes","permalink":"/prophecy-docs-staging/preview/pr-598/tags/release-notes"},{"inline":true,"label":"changelog","permalink":"/prophecy-docs-staging/preview/pr-598/tags/changelog"}],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10,"id":"November_2023","description":"Release notes for November","title":"November 2023","tags":["release notes","changelog"]},"sidebar":"mySidebar","previous":{"title":"December 2023","permalink":"/prophecy-docs-staging/preview/pr-598/release_notes/2023/December_2023"},"next":{"title":"October 2023","permalink":"/prophecy-docs-staging/preview/pr-598/release_notes/2023/October_2023"}}');var t=r(74848),s=r(28453);const i={sidebar_position:10,id:"November_2023",description:"Release notes for November",title:"November 2023",tags:["release notes","changelog"]},a=void 0,l={},c=[{value:"3.2.5.* (November 28, 2023)",id:"325-november-28-2023",level:2},{value:"Features",id:"FeaturesRelease325",level:3},{value:"Low Code Airflow Enhancements",id:"low-code-airflow-enhancements",level:4},{value:"Release enhancements",id:"release-enhancements",level:4},{value:"Data Explorer for Spark",id:"data-explorer-for-spark",level:4}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"325-november-28-2023",children:"3.2.5.* (November 28, 2023)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Prophecy Python libs version: 1.7.0"}),"\n",(0,t.jsx)(n.li,{children:"Prophecy Scala libs version: 7.1.37"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"FeaturesRelease325",children:"Features"}),"\n",(0,t.jsx)(n.h4,{id:"low-code-airflow-enhancements",children:"Low Code Airflow Enhancements"}),"\n",(0,t.jsx)(n.p,{children:"We're excited to introduce several new features in our Low Code Airflow Support to enhance your orchestration experience:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"For-Loop Support with Subgraphs"}),"\nNow, you can easily incorporate loops into your task orchestration. Looping over tasks is a common use case in orchestrations, especially when running Spark pipelines with different configurations. Our Low Code Airflow introduces support for For-Loops through the concept of Subgraphs."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Project-Level Functions"}),"\nReusing common Python functions across operators or even across different DAGs is now a breeze. With the introduction of Project-Level Functions in Low Code Airflow, you can define functions at the project level, making them accessible to all DAGs within the project. This promotes code reusability and simplifies DAG development."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Direct Snowflake Connection and Gem Support"}),"\nExpanding our SQL capabilities, we now offer direct support for executing SQL queries on connected Snowflake instances. While we already supported SQL execution via DBT, this release allows users to run SQLs directly, providing more flexibility in working with Snowflake."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Trigger DAG Operator"}),"\nIn orchestration, it's common to initiate jobs from a parent Job. Airflow facilitates this through the ",(0,t.jsx)(n.a,{href:"https://airflow.apache.org/docs/apache-airflow/stable/_api/airflow/operators/trigger_dagrun/index.html",children:"Trigger DAG Run Operator"}),". We're thrilled to announce that Low Code Airflow now seamlessly incorporates this functionality. Users can leverage this gem to effortlessly trigger additional jobs in Prophecy or any DAG they've created in Airflow."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"release-enhancements",children:"Release enhancements"}),"\n",(0,t.jsx)(n.p,{children:"Last Month we release some advance settings to give more granular control to User for their Releases. Building upon that, we have added small enhancements in the Release path."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Show Deployment history"}),": Previously we used to show the List of all releases made through Prophecy and the current deployed version of all Jobs per fabric. With this release, we have added a new tab to show ",(0,t.jsx)(n.code,{children:"Deployment History"})," of the project too. User can also check the logs for past deployments from the ",(0,t.jsx)(n.code,{children:"Deployment History"})," tab."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Deployment_history",src:r(37172).A+"",width:"2880",height:"1726"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Delete Branch while Merging"}),": Most of the Git providers have the functionality to delete the branch while merging to the Main/Master branch. This options helps to keep the number of development branches in check and helps in keeping the tree clean. On the merge screen we have added a checkbox to delete the branch after Merge. Please note, this only deletes the branch from Prophecy and not from your Git."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Delete_branch",src:r(87361).A+"",width:"2880",height:"1726"})}),"\n",(0,t.jsx)(n.h4,{id:"data-explorer-for-spark",children:"Data Explorer for Spark"}),"\n",(0,t.jsxs)(n.p,{children:["The Data Explorer feature empowers users to explore and analyze their data samples directly within the UI. We already supported this in our Low-code SQL product. With this release, we extended the same capabilities in the Low code Spark product too.\nWith this feature, users can gain insights, verify data accuracy, and make informed decisions by leveraging the filter, sort, download and Save as gem capabilities directly in UI. Please refer ",(0,t.jsx)(n.a,{href:"/engineers/data-explorer",children:"here"})," for detailed documentation."]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var o=r(96540);const t={},s=o.createContext(t);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:n},e.children)}},37172:(e,n,r)=>{r.d(n,{A:()=>o});const o=r.p+"assets/images/Deployment_history-137bef03fc09eb5f4e23835d8b771a86.png"},87361:(e,n,r)=>{r.d(n,{A:()=>o});const o=r.p+"assets/images/Delete_branch_during_merge-53cf16f84fa11299b281a7e3d374cf33.png"}}]);