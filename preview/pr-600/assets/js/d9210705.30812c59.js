"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[23607],{3914:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/gem-cluster-run-80efa9091c1f5e791b94ee0f08d27599.png"},10352:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/databricksACL-5886fefd9ceea645fd97a4dc66439316.png"},21829:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"release_notes/2023/Apr_2023","title":"April 2023","description":"Release notes for April","source":"@site/docs/release_notes/2023/apr2023.md","sourceDirName":"release_notes/2023","slug":"/release_notes/2023/Apr_2023","permalink":"/prophecy-docs-staging/preview/pr-600/release_notes/2023/Apr_2023","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"release notes","permalink":"/prophecy-docs-staging/preview/pr-600/tags/release-notes"},{"inline":true,"label":"changelog","permalink":"/prophecy-docs-staging/preview/pr-600/tags/changelog"}],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"id":"Apr_2023","description":"Release notes for April","title":"April 2023","tags":["release notes","changelog"]},"sidebar":"mySidebar","previous":{"title":"May 2023","permalink":"/prophecy-docs-staging/preview/pr-600/release_notes/2023/May_2023"},"next":{"title":"March 2023","permalink":"/prophecy-docs-staging/preview/pr-600/release_notes/2023/Mar_2023"}}');var n=r(74848),a=r(28453);const o={sidebar_position:3,id:"Apr_2023",description:"Release notes for April",title:"April 2023",tags:["release notes","changelog"]},i=void 0,l={},c=[{value:"3.0.0.* (Apr 26, 2023)",id:"300-apr-26-2023",level:2},{value:"Features",id:"UpdatesRelease300",level:3},{value:"Low-Code SQL",id:"low-code-sql",level:4},{value:"Expression Builder",id:"expression-builder",level:4},{value:"Airflow (<em>Beta</em>)",id:"airflow-beta",level:4},{value:"Improvements",id:"UXImprovements300",level:3},{value:"Support for Databricks ACL",id:"support-for-databricks-acl",level:4},{value:"New UI for Source/Target gems",id:"new-ui-for-sourcetarget-gems",level:4},{value:"New Data Observability Page",id:"new-data-observability-page",level:4},{value:"Attach a cluster and run from the gem",id:"attach-a-cluster-and-run-from-the-gem",level:4}];function d(e){const s={a:"a",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"300-apr-26-2023",children:"3.0.0.* (Apr 26, 2023)"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Prophecy Python libs version: 1.5.0"}),"\n",(0,n.jsx)(s.li,{children:"Prophecy Scala libs version: 7.0.18"}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"UpdatesRelease300",children:"Features"}),"\n",(0,n.jsx)(s.h4,{id:"low-code-sql",children:"Low-Code SQL"}),"\n",(0,n.jsxs)(s.p,{children:["With the release of ",(0,n.jsx)(s.strong,{children:"Prophecy 3.0"}),", we continue to double-down on our goal of combining the best of both worlds: ",(0,n.jsx)(s.strong,{children:"high-quality code based on software engineering best practices"})," with a ",(0,n.jsx)(s.strong,{children:"complete, easy-to-use visual environment"}),".\nLow-Code SQL, brings a new way to develop data models in SQL through a visual interface.\nVisual = Code allows both SQL coders and business users to easily collaborate on the same project.\nBusiness users can visually create their data models, with all their work automatically turning into high-quality code on Git. Engineers can use SQL and advanced macros through a code-based editor, with Prophecy parses their code and visualizes it on an editable canvas and ensuring both views remain in sync at all times."]}),"\n",(0,n.jsx)(s.p,{children:"At any step of the process, data users can interactively run their models to make sure they're going in the right direction\nProjects built through Prophecy are stored in the dbt Core format as repositories on Git, which allows data teams to follow the best software engineering practices for CI/CD.\nData users can import an existing dbt Core project or start from scratch. They can publish those projects to other teams or subscribe to already existing ones."}),"\n",(0,n.jsx)(s.h4,{id:"expression-builder",children:"Expression Builder"}),"\n",(0,n.jsxs)(s.p,{children:["To perform data analysis and manipulation, Spark has provided various functions. These functions enable users to perform various transformations on their data.\nIn order to perform complex data analysis tasks, it's important to be able to construct expressions that combine the Spark functions in various ways.\nProphecy has now made this easy with support of ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"/engineers/expression-builder",children:"Expression Builder"})}),".\nUsing the Spark Expression Builder can save you time and effort when constructing complex expressions, and can help you to better understand the relationships between different functions and their arguments.\nPlease refer ",(0,n.jsx)(s.a,{href:"/engineers/expression-builder",children:"here"})," for Detailed documentation on this feature."]}),"\n",(0,n.jsxs)(s.h4,{id:"airflow-beta",children:["Airflow (",(0,n.jsx)(s.em,{children:"Beta"}),")"]}),"\n",(0,n.jsx)(s.p,{children:"Apache Airflow is an open-source platform used to programmatically author, schedule, and monitor workflows."}),"\n",(0,n.jsx)(s.p,{children:"Airflow allows users to define workflows as DAGs (Directed Acyclic Graphs), where each node in the graph represents a task that needs to be executed.\nTasks can be Data Pipelines in Spark/Python or SQL or scripts. Dependencies between tasks are defined using operators, which are essentially plugins that define how tasks interact with each other."}),"\n",(0,n.jsxs)(s.p,{children:["With Prophecy, you can create and manage Airflow jobs using a visual Drag and drop interface. This allows you to easily design and schedule complex workflows, without having to write any code.\nPlease refer ",(0,n.jsx)(s.a,{href:"/engineers/airflow",children:"here"})," for detailed documentation on this feature."]}),"\n",(0,n.jsx)(s.h3,{id:"UXImprovements300",children:"Improvements"}),"\n",(0,n.jsx)(s.h4,{id:"support-for-databricks-acl",children:"Support for Databricks ACL"}),"\n",(0,n.jsx)(s.p,{children:"Users can now manage Access to their Databricks jobs via Prophecy UI. This would enable them to Edit and Manage all Databricks jobs ACL wile configuring a job in Prophecy UI itself.\nPlease see below screenshot for example."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"databricks-acl",src:r(10352).A+"",width:"1714",height:"968"})}),"\n",(0,n.jsx)(s.h4,{id:"new-ui-for-sourcetarget-gems",children:"New UI for Source/Target gems"}),"\n",(0,n.jsx)(s.p,{children:'Prophecy has revamped the UI for source and target gems to enhance user experience and streamline the process of creating new datasets. The updated design features a Tabular format for quickly filtering by source types and a "popular" section for easy access to frequently used sources. Additionally, while creating a new Source/target, gem UI now includes a radio button Selection menu for selecting an existing dataset to use as the source/target.\nPlease see below screenshot for example'}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"source-target-gems",src:r(83743).A+"",width:"1548",height:"961"})}),"\n",(0,n.jsx)(s.h4,{id:"new-data-observability-page",children:"New Data Observability Page"}),"\n",(0,n.jsx)(s.p,{children:"Prophecy has updated the UI for the Data Observability page (previously known as Monitoring). You can now monitor the jobs from this page."}),"\n",(0,n.jsx)(s.h4,{id:"attach-a-cluster-and-run-from-the-gem",children:"Attach a cluster and run from the gem"}),"\n",(0,n.jsx)(s.p,{children:"User can now Attach to a cluster and run their Pipeline till current gem from the gem screen itself. Please see below image for reference."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Gem-cluster-run",src:r(3914).A+"",width:"1551",height:"968"})})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>i});var t=r(96540);const n={},a=t.createContext(n);function o(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(a.Provider,{value:s},e.children)}},83743:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/new-source-target-gems-6d4485fa18148db3b97c38bdb2210e6c.png"}}]);