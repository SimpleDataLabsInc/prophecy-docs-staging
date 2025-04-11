"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[14985],{17591:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/dataset-statistics-c2b3edf73209d1d054f2035cd6e2cc03.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var i=n(96540);const r={},a=i.createContext(r);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:t},e.children)}},44010:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ExecutionMetrics-8178f8e88df9b6e16b91ffda98b0387c.png"},72192:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ExecutionMetricsConfig-2a7b17f12df522323677d0a9adb37c57.png"},80477:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/execution-metrcis-dataset1-41d4c633030f0bb3cd954ec20572efe5.png"},94626:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/execution-metrics-pipeline-bb5b7de769753028fe7748962f1d0780.png"},98893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"Spark/execution/execution-metrics","title":"Execution metrics","description":"Execution Metrics","source":"@site/docs/Spark/execution/execution-metrics.md","sourceDirName":"Spark/execution","slug":"/engineers/execution-metrics","permalink":"/prophecy-docs-staging/preview/pr-613/engineers/execution-metrics","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"execution","permalink":"/prophecy-docs-staging/preview/pr-613/tags/execution"},{"inline":true,"label":"metrics","permalink":"/prophecy-docs-staging/preview/pr-613/tags/metrics"},{"inline":true,"label":"spark","permalink":"/prophecy-docs-staging/preview/pr-613/tags/spark"}],"version":"current","frontMatter":{"title":"Execution metrics","id":"execution-metrics","slug":"/engineers/execution-metrics","description":"Execution Metrics","tags":["execution","metrics","spark"]},"sidebar":"mySidebar","previous":{"title":"Execution","permalink":"/prophecy-docs-staging/preview/pr-613/engineers/execution"},"next":{"title":"Data sampling settings","permalink":"/prophecy-docs-staging/preview/pr-613/engineers/data-sampling"}}');var r=n(74848),a=n(28453);const o={title:"Execution metrics",id:"execution-metrics",slug:"/engineers/execution-metrics",description:"Execution Metrics",tags:["execution","metrics","spark"]},s=void 0,c={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Historical runs",id:"historical-runs",level:2},{value:"Data storage behavior",id:"data-storage-behavior",level:2},{value:"Team level access-control",id:"team-level-access-control",level:2},{value:"Create tables using Delta (for Databricks)",id:"create-tables-using-delta-for-databricks",level:2},{value:"Grant permissions",id:"grant-permissions",level:3},{value:"Creating Tables using Parquet (for Livy)",id:"creating-tables-using-parquet-for-livy",level:2}];function l(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"When running pipelines and jobs, you may want to review metrics related to execution like records read/written, bytes read/written, total time taken, and data samples generated between components. These dataset, pipeline-run, and job-run related metrics are accumulated and stored on your data plane and can be viewed later from the Prophecy user interface."}),"\n",(0,r.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsx)(t.p,{children:"To store and view execution metrics, admins must configure the execution metrics settings for their teams."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Enable execution metrics for the team."}),"\n",(0,r.jsx)(t.li,{children:"Create tables to store historical execution data (or leave the Prophecy default). Tables can be any format like Avro, Parquet, ORC, or Delta."}),"\n",(0,r.jsx)(t.li,{children:"Set the data storage behavior."}),"\n",(0,r.jsx)(t.li,{children:"Give team members access to these tables."}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Reading execution metrics from High-Concurrency Clusters with Table-ACL enabled is supported in Databricks runtimes 11.0 or below. Execution metrics are ",(0,r.jsx)(t.strong,{children:"not available"})," for ",(0,r.jsx)(t.code,{children:"Shared mode"})," clusters (both normal workspaces and Unity catalog workspaces). You should see an error when trying to get historical runs of pipelines/jobs executed on ",(0,r.jsx)(t.code,{children:"Shared mode"})," clusters."]})}),"\n",(0,r.jsx)(t.h2,{id:"historical-runs",children:"Historical runs"}),"\n",(0,r.jsx)(t.p,{children:"You can find historical runs in pipeline and dataset metadata."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Pipeline_Execution_Metrics",src:n(94626).A+"",width:"1722",height:"550"})}),"\n",(0,r.jsx)(t.p,{children:"Each row here is one run of the pipeline. You can click and go to a particular run and see the interims for that run or metrics like Rows read/written, time taken, etc."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Execution_Metrics",src:n(44010).A+"",width:"1669",height:"756"})}),"\n",(0,r.jsx)(t.p,{children:"You can also see Execution Metrics for each dataset in the pipeline."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Dataset_metrcis",src:n(80477).A+"",width:"1666",height:"580"})}),"\n",(0,r.jsx)(t.p,{children:"Each row here is one run where this dataset was used. You can click and go to a particular run and see more detailed insights on your data along with preview."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Dataset_stats",src:n(17591).A+"",width:"1530",height:"886"})}),"\n",(0,r.jsx)(t.h2,{id:"data-storage-behavior",children:"Data storage behavior"}),"\n",(0,r.jsx)(t.p,{children:"Depending on flags settings, the storage behavior for execution metrics changes. For example, certain data may be written depending on whether a pipeline flag is turned on or off. See the following table to learn how the behavior changes."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"On"}),(0,r.jsx)(t.th,{children:"Off"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Execution metrics flag"}),(0,r.jsx)(t.td,{children:"Available data will be stored."}),(0,r.jsx)(t.td,{children:"Nothing will be stored. Interactive runs will show data depending on what other flags were enabled."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Pipeline data sampling flag"}),(0,r.jsx)(t.td,{children:"Available data will be stored based on the execution metrics flag. Interims for interactive run will be visible in the UI and stored based on the execution metrics flag."}),(0,r.jsx)(t.td,{children:"Available data will be stored based on the execution metrics flag. Interims from interactive run will neither be visible in the UI nor will they be stored."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Job data sampling flag"}),(0,r.jsx)(t.td,{children:"Available data will be stored based on the execution metrics flag. Interims for job run will get generated but stored based on the execution metrics flag."}),(0,r.jsx)(t.td,{children:"Available data will be stored based on the execution metrics flag. Interims from job run will neither be visible in the (historical) UI nor will they be stored."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Pipeline monitoring flag"}),(0,r.jsx)(t.td,{children:"Available data will be stored based on the execution metrics flag. Individual Gem level data will be visible in the UI but stored based on the execution metrics flag."}),(0,r.jsx)(t.td,{children:"Available data with be stored based on the execution metrics flag. Individual Gem level data will neither be visible in the UI nor will it be stored."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"team-level-access-control",children:"Team level access-control"}),"\n",(0,r.jsx)(t.p,{children:"For clusters with table ACL enabled, you may have limited access on catalogs, schemas, and tables. Here we advise\nyou to setup the execution metrics tables beforehand. Data is stored in the workspace storage itself, and you can choose\nthe tables from Team view in the Prophecy UI."}),"\n",(0,r.jsx)(t.p,{children:"There are three execution metrics tables that store data for pipelines, individual components, and the generated data samples, also known as interims. You have the option to choose the following at the time of team creation:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Pipeline runs table"}),": The pipeline metrics table that contains metrics and code for pipeline runs"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Component runs table"}),": The component (dataset) metrics table that contains metrics for individual component runs"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Interims table"}),": The interims table that contains samples of data, depending on the interim mode selected"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"ExecutionMetricsConfig.png",src:n(72192).A+"",width:"1518",height:"896"})}),"\n",(0,r.jsx)(t.h2,{id:"create-tables-using-delta-for-databricks",children:"Create tables using Delta (for Databricks)"}),"\n",(0,r.jsx)(t.p,{children:"The following are sample Create table commands for tables using Delta. These are suitable for Databricks or if your metastore supports Delta tables."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:"Pipeline metrics table"})}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"  CREATE TABLE IF NOT EXISTS <database>.<pipeline_runs_table_name>\n  (\n      uid STRING NOT NULL COMMENT 'Unique identifier for the pipeline run',\n      pipeline_uri STRING NOT NULL COMMENT 'URI of the pipeline',\n      job_uri STRING COMMENT 'URI of the job associated with the pipeline run',\n      job_run_uid STRING COMMENT 'Unique identifier for the job run',\n      task_run_uid STRING COMMENT 'Unique identifier for the task run',\n      status STRING COMMENT 'Status of the pipeline run',\n      fabric_uid STRING NOT NULL COMMENT 'Unique identifier for the fabric',\n      time_taken LONG COMMENT 'Time taken for the pipeline run',\n      rows_read LONG COMMENT 'Number of rows read during the pipeline run',\n      rows_written LONG COMMENT 'Number of rows written during the pipeline run',\n      created_at TIMESTAMP COMMENT 'Timestamp when the pipeline run was created',\n      created_by STRING NOT NULL COMMENT 'Prophecy user ID who created the pipeline run',\n      run_type STRING COMMENT 'Type of the run - Interactive, Adhoc, or Scheduled',\n      input_datasets ARRAY<STRING> COMMENT 'List of input datasets',\n      output_datasets ARRAY<STRING> COMMENT 'List of output datasets',\n      workflow_code MAP<STRING, STRING> COMMENT 'Workflow code associated with the pipeline run',\n      expired BOOLEAN COMMENT 'Indicates if the pipeline run has expired',\n      branch STRING COMMENT 'Git entity information for the pipeline run. Can be branch name or release tag',\n      pipeline_config STRING COMMENT 'Pipeline configuration details',\n      user_config STRING COMMENT 'User configuration details',\n      expected_interims INT COMMENT 'Expected number of interims',\n      actual_interims INT COMMENT 'Actual number of interims',\n      logs STRING COMMENT 'Logs for the pipeline run'\n  )\n  USING DELTA\n  PARTITIONED BY (fabric_uid, pipeline_uri, created_by)\n  LOCATION '<table_path>'\n  TBLPROPERTIES (delta.autoOptimize.optimizeWrite = true, delta.autoOptimize.autoCompact = true)\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:"Component metrics table"})}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"  CREATE TABLE IF NOT EXISTS <database>.<component_runs_table_name>\n  (\n      uid STRING NOT NULL COMMENT 'Unique identifier for the component run',\n      component_uri STRING NOT NULL COMMENT 'URI of the component',\n      pipeline_uri STRING COMMENT 'URI of the pipeline associated with the component run',\n      pipeline_run_uid STRING NOT NULL COMMENT 'Unique identifier for the pipeline run',\n      fabric_uid STRING NOT NULL COMMENT 'Unique identifier for the fabric',\n      component_name STRING COMMENT 'Name of the component',\n      interim_component_name STRING COMMENT 'Name of the component holding interim for this component. Targets are supplied interims by the upstream component',\n      component_type STRING COMMENT 'Type of the component - Source, Reformat, Target, etc.',\n      interim_subgraph_name STRING COMMENT 'Name of the graph where interim component resides',\n      interim_process_id STRING COMMENT 'Identifier for the interim process',\n      interim_out_port STRING COMMENT 'Output port for the interim component',\n      created_at TIMESTAMP COMMENT 'Timestamp when the component run was created',\n      created_by STRING NOT NULL COMMENT 'Identifier of the user who created the component run',\n      records LONG COMMENT 'Number of records processed by the component. Represents the aggregated amount of all rows read through this component. Rows can be re-read if there were multiple downstream components or if Spark ran the same plan multiple times',\n      bytes LONG COMMENT 'Number of bytes processed by the component',\n      partitions LONG COMMENT 'Number of partitions of the data processed by the component',\n      expired BOOLEAN COMMENT 'Indicates if the component run has expired',\n      run_type STRING COMMENT 'Type of the run',\n      job_uri STRING COMMENT 'URI of the job associated with the component run',\n      branch STRING COMMENT 'Branch information for the component run',\n      gem_name STRING COMMENT 'Hierarchical component name',\n      process_id STRING COMMENT 'Process identifier of the gem',\n      gem_type STRING COMMENT 'Type of the gem',\n      input_gems ARRAY<STRUCT<gem_name: STRING, from_port: STRING, to_port: STRING, num_rows: LONG>> COMMENT 'List of input gems with details',\n      output_gems ARRAY<STRUCT<gem_name: STRING, from_port: STRING, to_port: STRING, num_rows: LONG>> COMMENT 'List of output gems with details',\n      in_ports ARRAY<STRING> COMMENT 'List of input ports',\n      out_ports ARRAY<STRING> COMMENT 'List of output ports',\n      num_rows_output LONG COMMENT 'Number of rows output by the component. Represents the maximum number of rows read through this component across Spark plans and possible re-runs',\n      stdout ARRAY<STRUCT<content: STRING, time: LONG>> COMMENT 'Standard output logs',\n      stderr ARRAY<STRUCT<content: STRING, time: LONG>> COMMENT 'Standard error logs',\n      start_time LONG COMMENT 'Start time of the component run',\n      end_time LONG COMMENT 'End time of the component run',\n      state STRING COMMENT 'State of the component run',\n      exception STRUCT<exception_type: STRING, msg: STRING, cause_msg: STRING, stack_trace: STRING, time: LONG> COMMENT 'Exception details if any occurred during the component run'\n  )\n  USING DELTA\n  PARTITIONED BY (fabric_uid, component_uri, created_by)\n  LOCATION '<table_path>'\n  TBLPROPERTIES (delta.autoOptimize.optimizeWrite = true, delta.autoOptimize.autoCompact = true)\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:"Interims table"})}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"  CREATE TABLE IF NOT EXISTS <database>.<interims_table_name>\n  (\n      uid STRING NOT NULL COMMENT 'Unique identifier for the interim',\n      interim STRING COMMENT 'Interim data or information',\n      created_by STRING COMMENT 'Identifier of the user who created the interim',\n      created_at TIMESTAMP COMMENT 'Timestamp when the interim was created',\n      fabric_uid STRING COMMENT 'Unique identifier for the fabric'\n  )\n  USING DELTA\n  PARTITIONED BY (created_by, fabric_uid)\n  LOCATION '<table_path>'\n  TBLPROPERTIES (delta.autoOptimize.optimizeWrite = true, delta.autoOptimize.autoCompact = true)\n"})}),"\n",(0,r.jsx)(t.h3,{id:"grant-permissions",children:"Grant permissions"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"  GRANT USAGE ON SCHEMA <database> TO group1;\n  GRANT USAGE ON SCHEMA <database> TO group2;\n\n  GRANT SELECT ON <database.component-runs-table> TO group1;\n  GRANT SELECT ON <database.component-runs-table> TO group2;\n  GRANT MODIFY ON <database.component-runs-table> TO group1;\n  GRANT MODIFY ON <database.component-runs-table> TO group2;\n\n  GRANT SELECT ON <database.pipeline-runs-table> TO group1;\n  GRANT SELECT ON <database.pipeline-runs-table> TO group2;\n  GRANT MODIFY ON <database.pipeline-runs-table> TO group1;\n  GRANT MODIFY ON <database.pipeline-runs-table> TO group2;\n\n  GRANT SELECT ON <database.interims-table> TO group1;\n  GRANT SELECT ON <database.interims-table> TO group2;\n  GRANT MODIFY ON <database.interims-table> TO group1;\n  GRANT MODIFY ON <database.interims-table> TO group2;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"creating-tables-using-parquet-for-livy",children:"Creating Tables using Parquet (for Livy)"}),"\n",(0,r.jsx)(t.p,{children:"The following are sample Create table commands for tables using Parquet. These are suitable for Livy or for your Hive metastore in Hadoop setups."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:"Pipeline metrics table"})}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"  CREATE TABLE IF NOT EXISTS <database>.<pipeline_runs_table_name>\n  (\n      uid STRING NOT NULL COMMENT 'Unique identifier for the pipeline run',\n      pipeline_uri STRING NOT NULL COMMENT 'URI of the pipeline',\n      job_uri STRING COMMENT 'URI of the job associated with the pipeline run',\n      job_run_uid STRING COMMENT 'Unique identifier for the job run',\n      task_run_uid STRING COMMENT 'Unique identifier for the task run',\n      status STRING COMMENT 'Status of the pipeline run',\n      fabric_uid STRING NOT NULL COMMENT 'Unique identifier for the fabric',\n      time_taken LONG COMMENT 'Time taken for the pipeline run',\n      rows_read LONG COMMENT 'Number of rows read during the pipeline run',\n      rows_written LONG COMMENT 'Number of rows written during the pipeline run',\n      created_at TIMESTAMP COMMENT 'Timestamp when the pipeline run was created',\n      created_by STRING NOT NULL COMMENT 'Prophecy user ID who created the pipeline run',\n      run_type STRING COMMENT 'Type of the run - Interactive, Adhoc, or Scheduled',\n      input_datasets ARRAY<STRING> COMMENT 'List of input datasets',\n      output_datasets ARRAY<STRING> COMMENT 'List of output datasets',\n      workflow_code MAP<STRING, STRING> COMMENT 'Workflow code associated with the pipeline run',\n      expired BOOLEAN COMMENT 'Indicates if the pipeline run has expired',\n      branch STRING COMMENT 'Git entity information for the pipeline run. Can be branch name or release tag',\n      pipeline_config STRING COMMENT 'Pipeline configuration details',\n      user_config STRING COMMENT 'User configuration details',\n      expected_interims INT COMMENT 'Expected number of interims',\n      actual_interims INT COMMENT 'Actual number of interims',\n      logs STRING COMMENT 'Logs for the pipeline run'\n  ) stored as parquet\n  PARTITIONED BY (fabric_uid, pipeline_uri, created_by)\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:"Component metrics table"})}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"  CREATE TABLE IF NOT EXISTS <database>.<component_runs_table_name>\n  (\n      uid STRING NOT NULL COMMENT 'Unique identifier for the component run',\n    component_uri STRING NOT NULL COMMENT 'URI of the component',\n    pipeline_uri STRING COMMENT 'URI of the pipeline associated with the component run',\n    pipeline_run_uid STRING NOT NULL COMMENT 'Unique identifier for the pipeline run',\n    fabric_uid STRING NOT NULL COMMENT 'Unique identifier for the fabric',\n    component_name STRING COMMENT 'Name of the component',\n    interim_component_name STRING COMMENT 'Name of the component holding interim for this component. Targets are supplied interims by the upstream component',\n    component_type STRING COMMENT 'Type of the component - Source, Reformat, Target, etc.',\n    interim_subgraph_name STRING COMMENT 'Name of the graph where interim component resides',\n    interim_process_id STRING COMMENT 'Identifier for the interim process',\n    interim_out_port STRING COMMENT 'Output port for the interim component',\n    created_at TIMESTAMP COMMENT 'Timestamp when the component run was created',\n    created_by STRING NOT NULL COMMENT 'Identifier of the user who created the component run',\n    records LONG COMMENT 'Number of records processed by the component. Represents the aggregated amount of all rows read through this component. Rows can be re-read if there were multiple downstream components or if Spark ran the same plan multiple times',\n    bytes LONG COMMENT 'Number of bytes processed by the component',\n    partitions LONG COMMENT 'Number of partitions of the data processed by the component',\n    expired BOOLEAN COMMENT 'Indicates if the component run has expired',\n    run_type STRING COMMENT 'Type of the run',\n    job_uri STRING COMMENT 'URI of the job associated with the component run',\n    branch STRING COMMENT 'Branch information for the component run',\n    gem_name STRING COMMENT 'Hierarchical component name',\n    process_id STRING COMMENT 'Process identifier of the gem',\n    gem_type STRING COMMENT 'Type of the gem',\n    input_gems ARRAY<STRUCT<gem_name: STRING, from_port: STRING, to_port: STRING, num_rows: LONG>> COMMENT 'List of input gems with details',\n    output_gems ARRAY<STRUCT<gem_name: STRING, from_port: STRING, to_port: STRING, num_rows: LONG>> COMMENT 'List of output gems with details',\n    in_ports ARRAY<STRING> COMMENT 'List of input ports',\n    out_ports ARRAY<STRING> COMMENT 'List of output ports',\n    num_rows_output LONG COMMENT 'Number of rows output by the component. Represents the maximum number of rows read through this component across Spark plans and possible re-runs',\n    stdout ARRAY<STRUCT<content: STRING, time: LONG>> COMMENT 'Standard output logs',\n    stderr ARRAY<STRUCT<content: STRING, time: LONG>> COMMENT 'Standard error logs',\n    start_time LONG COMMENT 'Start time of the component run',\n    end_time LONG COMMENT 'End time of the component run',\n    state STRING COMMENT 'State of the component run',\n    exception STRUCT<exception_type: STRING, msg: STRING, cause_msg: STRING, stack_trace: STRING, time: LONG> COMMENT 'Exception details if any occurred during the component run'\n  ) stored as parquet\n  PARTITIONED BY (fabric_uid, component_uri, created_by)\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:"Interims table"})}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"  CREATE TABLE IF NOT EXISTS <database>.<interims_table_name>\n  (\n      uid STRING NOT NULL COMMENT 'Unique identifier for the interim',\n      interim STRING COMMENT 'Interim data or information',\n      created_by STRING COMMENT 'Identifier of the user who created the interim',\n      created_at TIMESTAMP COMMENT 'Timestamp when the interim was created',\n      fabric_uid STRING COMMENT 'Unique identifier for the fabric'\n  ) stored as parquet\n  PARTITIONED BY (created_by, fabric_uid)\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);