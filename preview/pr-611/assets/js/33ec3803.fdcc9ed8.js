"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[32627],{3325:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"Orchestration/airflow/airflow","title":"Airflow","description":"How Prophecy integrates with Airflow","source":"@site/docs/Orchestration/airflow/airflow.md","sourceDirName":"Orchestration/airflow","slug":"/engineers/airflow","permalink":"/prophecy-docs-staging/preview/pr-611/engineers/airflow","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"scheduling","permalink":"/prophecy-docs-staging/preview/pr-611/tags/scheduling"},{"inline":true,"label":"airflow","permalink":"/prophecy-docs-staging/preview/pr-611/tags/airflow"},{"inline":true,"label":"jobs","permalink":"/prophecy-docs-staging/preview/pr-611/tags/jobs"}],"version":"current","frontMatter":{"title":"Airflow","id":"airflow","slug":"/engineers/airflow","description":"How Prophecy integrates with Airflow","tags":["scheduling","airflow","jobs"]},"sidebar":"mySidebar","previous":{"title":"Use Pipeline Monitoring","permalink":"/prophecy-docs-staging/preview/pr-611/engineers/use-pipeline-monitoring"},"next":{"title":"Build an Airflow job","permalink":"/prophecy-docs-staging/preview/pr-611/engineers/spark-airflow-tutorial"}}');var n=s(74848),t=s(28453);const l={title:"Airflow",id:"airflow",slug:"/engineers/airflow",description:"How Prophecy integrates with Airflow",tags:["scheduling","airflow","jobs"]},d=void 0,a={},c=[{value:"Features",id:"features",level:2},{value:"Airflow Gems",id:"airflow-gems",level:2},{value:"Sensor",id:"sensor",level:3},{value:"Data Transfer",id:"data-transfer",level:3},{value:"Spark/SQL",id:"sparksql",level:3},{value:"Trigger/Notify",id:"triggernotify",level:3},{value:"Custom",id:"custom",level:3},{value:"Subgraph",id:"subgraph",level:3}];function o(e){const r={a:"a",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://airflow.apache.org/",children:"Apache Airflow"})," is an open-source workflow automation and orchestration platform that helps organizations schedule, monitor, and manage complex data workflows.\nIt is a popular choice for organizations of all sizes to handle data pipelines, ETL processes, and task automation."]}),"\n",(0,n.jsx)(r.h2,{id:"features",children:"Features"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Feature"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Directed acyclic graphs (DAGs)"}),(0,n.jsxs)(r.td,{children:["Each job in Prophecy represents an Airflow ",(0,n.jsx)(r.a,{href:"https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/dags.html",children:"DAG"}),", and contains gems that represent various tasks."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Dynamic workflow scheduling"}),(0,n.jsx)(r.td,{children:"In the job settings, you can configure complex dependencies, retries, and time-based triggers for tasks."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Extensibility"}),(0,n.jsxs)(r.td,{children:["Custom gems can be written and used within Airflow jobs. These gems can be shared via the ",(0,n.jsx)(r.a,{href:"/engineers/package-hub",children:"Package Hub"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Monitoring and logging"}),(0,n.jsx)(r.td,{children:"Task progress, logging, and alerting can be monitored from the Airflow environment or the Prophecy UI."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Parallel execution and scalability"}),(0,n.jsx)(r.td,{children:"Airflow can execute multiple tasks in parallel and scale horizontally to accommodate high workloads."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Visual and code views"}),(0,n.jsx)(r.td,{children:"Visually-developed Airflow jobs are automatically compiled into high-quality and open-source Airflow code."})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"airflow-gems",children:"Airflow Gems"}),"\n",(0,n.jsx)(r.p,{children:"Prophecy provides a set of gems that you can use in your Airflow jobs. They are listed below and grouped by category."}),"\n",(0,n.jsx)(r.h3,{id:"sensor",children:"Sensor"}),"\n",(0,n.jsx)("div",{class:"fixed-table",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Gem"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"EMRClusterSensor"}),(0,n.jsx)(r.td,{children:"Waits for a specific EMR cluster state"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"EMRPipelineSensor"}),(0,n.jsx)(r.td,{children:"Waits for a specific EMR pipeline state"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"HTTPSensor"}),(0,n.jsx)(r.td,{children:"Waits for a specific HTTP endpoint"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"S3FileSensor"}),(0,n.jsx)(r.td,{children:"Waits for a specific S3 file"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"SFTPSensor"}),(0,n.jsx)(r.td,{children:"Waits for a specific file on an SFTP path"})]})]})]})}),"\n",(0,n.jsx)(r.h3,{id:"data-transfer",children:"Data Transfer"}),"\n",(0,n.jsx)("div",{class:"fixed-table",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Gem"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"SFTPToS3"}),(0,n.jsx)(r.td,{children:"Transfer files from an SFTP server to Amazon S3"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"SFTPToSnowflake"}),(0,n.jsx)(r.td,{children:"Copies data from SFTP to Snowflake and creates a table"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"TableauExtract"}),(0,n.jsx)(r.td,{children:"Generates Tableau Hyper files"})]})]})]})}),"\n",(0,n.jsx)(r.h3,{id:"sparksql",children:"Spark/SQL"}),"\n",(0,n.jsx)("div",{class:"fixed-table",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Gem"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"DatabricksPipeline"}),(0,n.jsx)(r.td,{children:"Runs a Databricks pipeline (Spark or SQL)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"DataprocPipeline"}),(0,n.jsx)(r.td,{children:"Runs a pipeline on Dataproc"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"DataprocServerlessPipeline"}),(0,n.jsx)(r.td,{children:"Runs a pipeline on Dataproc serverless"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"DataprocTesting"}),(0,n.jsx)(r.td,{children:"Runs a pipeline on Dataproc"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"EMRCreateCluster"}),(0,n.jsx)(r.td,{children:"Creates an EMR cluster"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"EMRPipeline"}),(0,n.jsx)(r.td,{children:"Runs an pipeline on EMR"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Model"}),(0,n.jsx)(r.td,{children:"Runs a SQL model"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"OnPremPipeline"}),(0,n.jsx)(r.td,{children:"Runs a pipeline on a Hadoop cluster"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"SnowflakeSQL"}),(0,n.jsx)(r.td,{children:"Runs a SQL query on Snowflake"})]})]})]})}),"\n",(0,n.jsx)(r.h3,{id:"triggernotify",children:"Trigger/Notify"}),"\n",(0,n.jsx)("div",{class:"fixed-table",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Gem"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Email"}),(0,n.jsx)(r.td,{children:"Sends a notification via email"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Slack"}),(0,n.jsx)(r.td,{children:"Sends a notification via Slack"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"TriggerDag"}),(0,n.jsx)(r.td,{children:"Trigger another Airflow job via its name or DAG ID"})]})]})]})}),"\n",(0,n.jsx)(r.h3,{id:"custom",children:"Custom"}),"\n",(0,n.jsx)("div",{class:"fixed-table",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Gem"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Branch"}),(0,n.jsx)(r.td,{children:"Insert a Python lambda or function"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Python"}),(0,n.jsx)(r.td,{children:"Insert Python code"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Script"}),(0,n.jsx)(r.td,{children:"Insert a Shell script"})]})]})]})}),"\n",(0,n.jsx)(r.h3,{id:"subgraph",children:"Subgraph"}),"\n",(0,n.jsx)("div",{class:"fixed-table",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Gem"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ForEachLoop"}),(0,n.jsx)(r.td,{children:"Iterate through a set of gems depending on code, a JSON list, or gem output"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"TaskGroup"}),(0,n.jsx)(r.td,{children:"Group a set of gems in your Airflow job"})]})]})]})})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>l,x:()=>d});var i=s(96540);const n={},t=i.createContext(n);function l(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);