"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[26488],{28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>s});var t=i(96540);const r={},a=t.createContext(r);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:n},e.children)}},80538:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"release_notes/2023/June_2023","title":"June 2023","description":"Release notes for June","source":"@site/docs/release_notes/2023/june2023.md","sourceDirName":"release_notes/2023","slug":"/release_notes/2023/June_2023","permalink":"/prophecy-docs-staging/preview/pr-595/release_notes/2023/June_2023","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"release notes","permalink":"/prophecy-docs-staging/preview/pr-595/tags/release-notes"},{"inline":true,"label":"changelog","permalink":"/prophecy-docs-staging/preview/pr-595/tags/changelog"}],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"id":"June_2023","description":"Release notes for June","title":"June 2023","tags":["release notes","changelog"]},"sidebar":"mySidebar","previous":{"title":"July 2023","permalink":"/prophecy-docs-staging/preview/pr-595/release_notes/2023/July_2023"},"next":{"title":"May 2023","permalink":"/prophecy-docs-staging/preview/pr-595/release_notes/2023/May_2023"}}');var r=i(74848),a=i(28453);const o={sidebar_position:5,id:"June_2023",description:"Release notes for June",title:"June 2023",tags:["release notes","changelog"]},s=void 0,l={},d=[{value:"3.1.0.* (June 22, 2023)",id:"310-june-22-2023",level:2},{value:"Features",id:"UpdatesRelease300",level:3},{value:"Data Copilot",id:"data-copilot",level:4},{value:"Generative-AI",id:"generative-ai",level:4},{value:"General Availability Announcement: Low Code Airflow",id:"general-availability-announcement-low-code-airflow",level:4},{value:"Data Explorer For SQL",id:"data-explorer-for-sql",level:4},{value:"DLT Jobs Support",id:"dlt-jobs-support",level:4},{value:"Minor Improvements",id:"UXImprovements300",level:3},{value:"PingID and AAD",id:"pingid-and-aad",level:4},{value:"Config Package Name support in pipelines",id:"config-package-name-support-in-pipelines",level:4},{value:"Other Minor Improvements",id:"other-minor-improvements",level:4},{value:"3.0.2.* (June 02, 2023)",id:"302-june-02-2023",level:2},{value:"Minor Improvements",id:"UXImprovements302",level:3},{value:"EMR Support (Beta)",id:"emr-support-beta",level:4},{value:"Databricks support enhancements",id:"databricks-support-enhancements",level:4}];function c(e){const n={a:"a",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"310-june-22-2023",children:"3.1.0.* (June 22, 2023)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Prophecy Python libs version: 1.5.5"}),"\n",(0,r.jsx)(n.li,{children:"Prophecy Scala libs version: 7.0.48"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"UpdatesRelease300",children:"Features"}),"\n",(0,r.jsx)(n.h4,{id:"data-copilot",children:"Data Copilot"}),"\n",(0,r.jsxs)(n.p,{children:["We're thrilled to announce a major update that aims to revolutionize the process of building models and pipelines. With our latest release, creating a new model from scratch has never been easier\u2014all you need are simple English prompts.\nBut that's not all! Our ",(0,r.jsx)(n.strong,{children:"Data Copilot"})," can also predict granular expressions, making it simpler to write any transformations in your gems.\nPlease refer to below video for quick intro."]}),"\n",(0,r.jsx)("div",{style:{position:"relative","padding-bottom":"56.25%",height:0},children:(0,r.jsx)("iframe",{src:"https://www.loom.com/embed/688df0fdb87e4b6abe5dd78a4e81c9e9",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})}),"\n",(0,r.jsx)(n.h4,{id:"generative-ai",children:"Generative-AI"}),"\n",(0,r.jsx)(n.p,{children:"With this Release, Prophecy is empowering you to build generative AI applications directly on top of your enterprise private data.\nWith this exciting feature, you can create pipelines that seamlessly ingest data from various sources such as Slack, Asana, Documentation, and web scraping. The information is then vectorized and fed into a vector database. Utilizing these vectors, you can do many thing like develop dynamic and interactive live chatbot applications by effortlessly streaming messages through Kafka."}),"\n",(0,r.jsx)(n.p,{children:"Here is a quick video demonstrating the same."}),"\n",(0,r.jsx)("div",{style:{position:"relative","padding-bottom":"56.25%",height:0},children:(0,r.jsx)("iframe",{src:"https://www.loom.com/embed/a89ee52de80e41abb9b5647c1da73e18",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})}),"\n",(0,r.jsx)(n.p,{children:"Here are two example templates that serve as valuable references as you embark on your generative AI application journey."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/prophecy-samples/gen-ai-chatbot-template",children:"https://github.com/prophecy-samples/gen-ai-chatbot-template"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/prophecy-samples/gen-ai-med-advisor-template",children:"https://github.com/prophecy-samples/gen-ai-med-advisor-template"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["These templates leverage the power of our ",(0,r.jsx)(n.a,{href:"https://github.com/prophecy-io/spark-ai",children:"toolbox"})," built on top of Apache Spark, providing you with robust data infrastructure to kickstart your development process. With Prophecy and its toolbox, you can confidently build and scale data-driven solutions for generative AI applications."]}),"\n",(0,r.jsx)(n.h4,{id:"general-availability-announcement-low-code-airflow",children:"General Availability Announcement: Low Code Airflow"}),"\n",(0,r.jsx)(n.p,{children:"We are delighted to announce the General Availability (GA) release of our highly anticipated Low Code Airflow Jobs Support feature! Following a successful beta phase, we have refined and optimized this functionality to provide you with a robust and user-friendly experience.\nHere are the key highlights of this feature:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Prophecy Managed Airflow"}),": We are excited to introduce Prophecy Managed Airflow, which is now available for trials and even production use cases. You can seamlessly utilize it with DBT or Spark pipeline. Stay tuned for upcoming updates as we continue to expand our support for more operators."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Support for MWAA, Composer 1 and 2"})," : With our Low Code Airflow Jobs Support, you can easily connect and schedule jobs to your own MWAA/Composer managed Airflow environment. Enjoy the convenience of leveraging your existing infrastructure."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Gem Builder for Airflow"})," : To further enhance customization and extensibility, we have added support for Airflow gems in ",(0,r.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-595/engineers/gem-builder",children:"Gem Builder"}),". This feature empowers you to add any operators you desire, allowing for greater versatility and tailored workflows with Airflow."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For detailed documentation on this feature, including setup instructions and best practices, please refer to our comprehensive documentation available ",(0,r.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-595/Orchestration/airflow/",children:"here"})]}),"\n",(0,r.jsx)(n.h4,{id:"data-explorer-for-sql",children:"Data Explorer For SQL"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-595/analysts/data-explorer",children:"Data Explorer"})," feature empowers users to explore and analyze their data samples directly within the user interface (UI).\nWith this feature, users can gain insights, verify data accuracy, and make informed decisions by leveraging the filter/sort/download capabilities directly in UI."]}),"\n",(0,r.jsx)(n.h4,{id:"dlt-jobs-support",children:"DLT Jobs Support"}),"\n",(0,r.jsxs)(n.p,{children:["Delta Live Tables (DLT)(",(0,r.jsx)(n.a,{href:"https://www.databricks.com/product/delta-live-tables",children:"https://www.databricks.com/product/delta-live-tables"}),") is a powerful feature that empowers you to effortlessly build and manage reliable batch and streaming data pipelines on the Databricks Lakehouse Platform.\nWe are excited to announce that Prophecy now supports scheduling DLT pipelines through Prophecy Jobs."]}),"\n",(0,r.jsx)(n.h3,{id:"UXImprovements300",children:"Minor Improvements"}),"\n",(0,r.jsx)(n.p,{children:"In addition to resolving minor issues in our Low-Code-Spark and Low-Code-SQL features, we have introduced below enhancements and fixes."}),"\n",(0,r.jsx)(n.h4,{id:"pingid-and-aad",children:"PingID and AAD"}),"\n",(0,r.jsx)(n.p,{children:"Enhanced user authentication experience by adding PingID support for seamless integration with Azure Active Directory (AAD), ensuring secure and streamlined access to your applications."}),"\n",(0,r.jsx)(n.h4,{id:"config-package-name-support-in-pipelines",children:"Config Package Name support in pipelines"}),"\n",(0,r.jsx)(n.p,{children:'Introduced a new parameter in Pipeline Settings called "Config Package Name," allowing users to specify a folder where config files will be generated. This enhancement addresses potential conflicts when running multiple pipelines with identical config names in the same cluster by organizing the config files under designated folders.'}),"\n",(0,r.jsx)(n.h4,{id:"other-minor-improvements",children:"Other Minor Improvements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'We have improved the user experience by relocating the options to edit configuration names, delete, and edit as JSON under the "..." menu. Additionally, we have introduced the functionality to duplicate pipeline configurations.'}),"\n",(0,r.jsx)(n.li,{children:"Along with fixing minor issues in CSV, Fixed format and Flatten schema gems, we have added two new gems on our Spark IDE: Compare Columns and Hashing."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"302-june-02-2023",children:"3.0.2.* (June 02, 2023)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Prophecy Python libs version: 1.5.4"}),"\n",(0,r.jsx)(n.li,{children:"Prophecy Scala libs version: 7.0.32"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"UXImprovements302",children:"Minor Improvements"}),"\n",(0,r.jsx)(n.h4,{id:"emr-support-beta",children:"EMR Support (Beta)"}),"\n",(0,r.jsxs)(n.p,{children:["Users may connect to Amazon EMR clusters by creating ",(0,r.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-595/administration/fabrics/Spark-fabrics/Fabrics",children:"EMR Fabrics"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"databricks-support-enhancements",children:"Databricks support enhancements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Catalog Table gem now supports selecting catalog for unity-enabled Databricks workspaces."}),"\n",(0,r.jsx)(n.li,{children:"Added Info, description and a link to docs for and gems in UI"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);