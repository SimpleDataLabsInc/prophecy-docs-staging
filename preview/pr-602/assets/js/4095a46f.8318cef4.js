"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[58354],{6366:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"release_notes/2023/July_2023","title":"July 2023","description":"Release notes for July","source":"@site/docs/release_notes/2023/july2023.md","sourceDirName":"release_notes/2023","slug":"/release_notes/2023/July_2023","permalink":"/prophecy-docs-staging/preview/pr-602/release_notes/2023/July_2023","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"release notes","permalink":"/prophecy-docs-staging/preview/pr-602/tags/release-notes"},{"inline":true,"label":"changelog","permalink":"/prophecy-docs-staging/preview/pr-602/tags/changelog"}],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"id":"July_2023","description":"Release notes for July","title":"July 2023","tags":["release notes","changelog"]},"sidebar":"mySidebar","previous":{"title":"August 2023","permalink":"/prophecy-docs-staging/preview/pr-602/release_notes/2023/August_2023"},"next":{"title":"June 2023","permalink":"/prophecy-docs-staging/preview/pr-602/release_notes/2023/June_2023"}}');var t=i(74848),r=i(28453);const o={sidebar_position:6,id:"July_2023",description:"Release notes for July",title:"July 2023",tags:["release notes","changelog"]},a=void 0,l={},c=[{value:"3.1.2.* (July 26, 2023)",id:"312-july-26-2023",level:2},{value:"Features",id:"FeaturesRelease312",level:3},{value:"Livy Fabric Users can now enable Execution Metrics",id:"livy-fabric-users-can-now-enable-execution-metrics",level:4},{value:"Users can now select all-purpose Databricks clusters for testing their Jobs",id:"users-can-now-select-all-purpose-databricks-clusters-for-testing-their-jobs",level:4},{value:"Minor Improvements",id:"MinorImprovements312",level:3},{value:"Low code Airflow Enhancements",id:"low-code-airflow-enhancements",level:4},{value:"Low code SQL Enhancements",id:"low-code-sql-enhancements",level:4},{value:"Low code Spark Enhancements",id:"low-code-spark-enhancements",level:4},{value:"3.1.1.* (July 6, 2023)",id:"311-july-6-2023",level:2},{value:"Features",id:"UpdatesRelease311",level:3},{value:"Conditional Execution In Spark Pipelines",id:"conditional-execution-in-spark-pipelines",level:4},{value:"Revamped Prophecy Fabrics UI",id:"revamped-prophecy-fabrics-ui",level:4},{value:"New Features in Low Code Airflow",id:"new-features-in-low-code-airflow",level:4},{value:"Minor Improvements",id:"UXImprovements311",level:3},{value:"Ability to Attach Cluster to multiple Pipelines for Interactive Run",id:"ability-to-attach-cluster-to-multiple-pipelines-for-interactive-run",level:4},{value:"Alert and warning diagnostics for Users passing plain-text Username password in gems",id:"alert-and-warning-diagnostics-for-users-passing-plain-text-username-password-in-gems",level:4},{value:"Improved Entity Discovery on Info Pages",id:"improved-entity-discovery-on-info-pages",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"312-july-26-2023",children:"3.1.2.* (July 26, 2023)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Prophecy Python libs version: 1.5.9"}),"\n",(0,t.jsx)(n.li,{children:"Prophecy Scala libs version: 7.1.3"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"FeaturesRelease312",children:"Features"}),"\n",(0,t.jsx)(n.h4,{id:"livy-fabric-users-can-now-enable-execution-metrics",children:"Livy Fabric Users can now enable Execution Metrics"}),"\n",(0,t.jsx)(n.p,{children:"Livy Fabric users can now enable Execution Metrics and historical runs to track the performance of their Spark pipelines. To enable Execution Metrics, users need to create the following tables:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Pipeline Metrics Table"}),"\n",(0,t.jsx)(n.li,{children:"Component (Dataset) Metrics Table"}),"\n",(0,t.jsx)(n.li,{children:"Interim Table"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The instructions for creating these tables can be found ",(0,t.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-602/engineers/execution-metrics",children:"here"})]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"Note: Existing Livy users who had Execution Metrics enabled before this release may experience failures in their pipelines if the above tables are not created. To mitigate this issue, users can either:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Set the ",(0,t.jsx)(n.code,{children:"EXECUTION_METRICS_DISABLED"})," flag to true in their deployment."]}),"\n",(0,t.jsx)(n.li,{children:"Create the above-mentioned tables."}),"\n"]}),(0,t.jsxs)(n.p,{children:["If you have any questions, please contact us at ",(0,t.jsx)(n.a,{href:"mailto:success@Prophecy.io",children:"contact us"}),"."]})]}),"\n",(0,t.jsx)(n.h4,{id:"users-can-now-select-all-purpose-databricks-clusters-for-testing-their-jobs",children:"Users can now select all-purpose Databricks clusters for testing their Jobs"}),"\n",(0,t.jsx)(n.p,{children:"Users can now select all-purpose Databricks clusters for testing their Jobs. This can be useful for quickly testing changes to a Job without affecting the production environment."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Note: Selecting an all-purpose Databricks cluster for testing will not change the Fabric/Job size configured in the Job settings for release and scheduling. This means that the Job will still run on the specified Fabric/Job-size when it is released or scheduled."})}),"\n",(0,t.jsx)(n.h3,{id:"MinorImprovements312",children:"Minor Improvements"}),"\n",(0,t.jsx)(n.h4,{id:"low-code-airflow-enhancements",children:"Low code Airflow Enhancements"}),"\n",(0,t.jsx)(n.p,{children:"We have made a few minor enhancements to our low-code Airflow support. These enhancements include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Support for DAG level params/configs at Job level: Users can now add configs for Airflow Jobs similar to Spark pipelines and use Jinja templating to refer them in their gems."}),"\n",(0,t.jsxs)(n.li,{children:["Support for ",(0,t.jsx)(n.a,{href:"https://airflow.apache.org/docs/apache-airflow/2.4.3/_api/airflow/operators/python/index.html#airflow.operators.python.BranchPythonOperator",children:"BranchPythonOperator"}),": This allows a User to \u201cbranch\u201d or follow a path following the execution of this task."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"low-code-sql-enhancements",children:"Low code SQL Enhancements"}),"\n",(0,t.jsx)(n.p,{children:"We have made a few minor enhancements to our low-code SQL support. These enhancements include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"SetOperations gem: This gem will allow users to add Union, Intersection or Exception functionality while modifying their Target models."}),"\n",(0,t.jsx)(n.li,{children:"Adding Trino as a SQL Provider in our Low Code SQL product as Beta. Stay tuned for more comprehensive documentation"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"low-code-spark-enhancements",children:"Low code Spark Enhancements"}),"\n",(0,t.jsx)(n.p,{children:"We have made a few minor enhancements to our low-code Spark support. These enhancements include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Moved Salesforce Type under Application section in Source and Target gems: The Salesforce type has been moved from the Warehouse tab to the Application tab in both source and target gems. This change makes it easier for users to find the Salesforce type and to understand its purpose."}),"\n",(0,t.jsx)(n.li,{children:"Added Information type diagnostic in Script gem: In script gem, output Schema cannot be inferred automatically. If you need an output schema, you will need to infer the schema from a cluster. Without doing this, the output schema is empty. We have now added an Information Diagnostics message to guide Users about inferring Schema manually if they need an output schema."}),"\n",(0,t.jsx)(n.li,{children:"Added keyboard Shortcut: We have added a keyboard shortcut to select all gems in the low-code platform. The shortcut is Ctrl+A."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"311-july-6-2023",children:"3.1.1.* (July 6, 2023)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Prophecy Python libs version: 1.5.6"}),"\n",(0,t.jsx)(n.li,{children:"Prophecy Scala libs version: 7.0.50"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"UpdatesRelease311",children:"Features"}),"\n",(0,t.jsx)(n.h4,{id:"conditional-execution-in-spark-pipelines",children:"Conditional Execution In Spark Pipelines"}),"\n",(0,t.jsx)(n.p,{children:"We are thrilled to announce the addition of support for conditional execution in Spark gems within our pipeline framework. This highly anticipated feature provides users with the ability to effortlessly build conditional transformation scenarios directly on our user interface (UI)."}),"\n",(0,t.jsxs)(n.p,{children:["Conditional execution allows users to define specific criteria or rules that determine whether a particular transformation should be applied or skipped during pipeline execution.\nBy leveraging conditional execution, users can easily implement complex data processing logic and dynamically adapt their pipelines based on varying conditions. This empowers users to efficiently handle different scenarios, such as filtering out irrelevant data, applying specific transformations based on business rules, or performing conditional aggregations.\nMore details on this feature can be found ",(0,t.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-602/engineers/conditional-execution",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"revamped-prophecy-fabrics-ui",children:"Revamped Prophecy Fabrics UI"}),"\n",(0,t.jsxs)(n.p,{children:["We are excited to announce the revamped Prophecy Fabrics user interface (UI), designed to achieve feature parity with the Databricks cluster creation flow. This significant update ensures that users have a seamless experience and consistent options when creating clusters within Prophecy.\nThe new UI introduces an enhanced Job sizes interface that captures all the options and flexibility provided by Databricks for cluster creation. These Job sizes can be leveraged to create clusters when executing pipelines through Prophecy or scheduling Jobs through Prophecy.\nWith this improvement, users can easily configure and customize clusters to meet their specific requirements, ensuring optimal performance and resource allocation for their data processing tasks.\nPlease read more about this feature ",(0,t.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-602/administration/fabrics/Spark-fabrics/databricks/",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"new-features-in-low-code-airflow",children:"New Features in Low Code Airflow"}),"\n",(0,t.jsx)(n.p,{children:"Following our recent General Availability Announcement for Low Code Airflow, we are excited to introduce additional features that further enhance the capabilities of the platform."}),"\n",(0,t.jsx)(n.p,{children:"In this release, we have introduced new gems in Low Code Airflow Jobs, enabling users to incorporate more functionality into their Airflow DAGs.\nUsers can now easily add the following operators to their DAGs: Slack Operator, Email Operator, HTTP Sensor, and File Sensors. These operators expand the range of actions and triggers available, providing users with more flexibility in designing their data workflows.\nFurthermore, we are pleased to announce that we have extended support for scheduling DBT projects from private Git repositories. This enhancement allows users to seamlessly integrate and schedule DBT projects hosted in private repositories, providing greater security and control over their data transformation processes."}),"\n",(0,t.jsx)(n.h3,{id:"UXImprovements311",children:"Minor Improvements"}),"\n",(0,t.jsx)(n.h4,{id:"ability-to-attach-cluster-to-multiple-pipelines-for-interactive-run",children:"Ability to Attach Cluster to multiple Pipelines for Interactive Run"}),"\n",(0,t.jsx)(n.p,{children:"Previously, users could only connect a cluster to a single pipeline, limiting their ability to use Prophecy in multiple tabs.\nWith this enhancement, users can now attach clusters to different pipelines in different tabs, enabling concurrent connections without interference.\nThis improvement offers increased flexibility and productivity, allowing users to seamlessly switch between pipeline configurations, perform parallel analyses, and efficiently manage data workflows."}),"\n",(0,t.jsx)(n.h4,{id:"alert-and-warning-diagnostics-for-users-passing-plain-text-username-password-in-gems",children:"Alert and warning diagnostics for Users passing plain-text Username password in gems"}),"\n",(0,t.jsxs)(n.p,{children:["Using hardcoded usernames and passwords is not recommended when working with gems.\nThis approach can result in unsafe code, as the credentials may be exposed in your configured Git repository for the Project.\nWe have added Warnings and Diagnostics if Users are using plain text Passwords in gems. Read about the recommended usage ",(0,t.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-602/administration/secrets/",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"improved-entity-discovery-on-info-pages",children:"Improved Entity Discovery on Info Pages"}),"\n",(0,t.jsx)(n.p,{children:"To enhance the discoverability of our entities, we try to provide comprehensive information on related entities directly on the info page.\nWhen viewing a Project's info page, users can now see all associated pipelines, jobs, datasets, and subgraphs contained within the project.\nLikewise, when accessing a pipeline's info page, users can easily identify the Jobs utilizing the pipeline, as well as all Published Subgraphs that are used within the pipeline.\nFor datasets, users can quickly discover all pipelines that utilize the dataset."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(96540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);