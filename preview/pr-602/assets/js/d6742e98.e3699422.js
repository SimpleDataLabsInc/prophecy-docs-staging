"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[64732],{28453:(e,r,d)=>{d.d(r,{R:()=>n,x:()=>h});var t=d(96540);const s={},i=t.createContext(s);function n(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function h(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),t.createElement(i.Provider,{value:r},e.children)}},73839:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>c,contentTitle:()=>h,default:()=>x,frontMatter:()=>n,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"administration/fabrics/Spark-fabrics/databricks/ucshared","title":"UC Shared Cluster Support","description":"Gem support for UC Shared clusters","source":"@site/docs/administration/fabrics/Spark-fabrics/databricks/UCShared.md","sourceDirName":"administration/fabrics/Spark-fabrics/databricks","slug":"/administration/fabrics/Spark-fabrics/databricks/ucshared","permalink":"/prophecy-docs-staging/preview/pr-602/administration/fabrics/Spark-fabrics/databricks/ucshared","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"unitycatalog","permalink":"/prophecy-docs-staging/preview/pr-602/tags/unitycatalog"},{"inline":true,"label":"shared","permalink":"/prophecy-docs-staging/preview/pr-602/tags/shared"},{"inline":true,"label":"uc","permalink":"/prophecy-docs-staging/preview/pr-602/tags/uc"},{"inline":true,"label":"unity","permalink":"/prophecy-docs-staging/preview/pr-602/tags/unity"},{"inline":true,"label":"catalog","permalink":"/prophecy-docs-staging/preview/pr-602/tags/catalog"},{"inline":true,"label":"fabric","permalink":"/prophecy-docs-staging/preview/pr-602/tags/fabric"},{"inline":true,"label":"databricks","permalink":"/prophecy-docs-staging/preview/pr-602/tags/databricks"}],"version":"current","sidebarPosition":1,"frontMatter":{"title":"UC Shared Cluster Support","id":"ucshared","description":"Gem support for UC Shared clusters","sidebar_position":1,"tags":["unitycatalog","shared","uc","unity","catalog","fabric","databricks"]},"sidebar":"adminSidebar","previous":{"title":"Databricks","permalink":"/prophecy-docs-staging/preview/pr-602/administration/fabrics/Spark-fabrics/databricks/"},"next":{"title":"Prophecy-managed","permalink":"/prophecy-docs-staging/preview/pr-602/engineers/prophecy-managed-fabric"}}');var s=d(74848),i=d(28453);const n={title:"UC Shared Cluster Support",id:"ucshared",description:"Gem support for UC Shared clusters",sidebar_position:1,tags:["unitycatalog","shared","uc","unity","catalog","fabric","databricks"]},h=void 0,c={},l=[{value:"Cluster Types",id:"cluster-types",level:2},{value:"Gem Support",id:"gem-support",level:2},{value:"Sources / Targets",id:"sources--targets",level:3},{value:"Warehouses",id:"warehouses",level:3},{value:"Catalog Table",id:"catalog-table",level:3},{value:"Lookup",id:"lookup",level:3},{value:"Transform",id:"transform",level:3},{value:"Join/Split",id:"joinsplit",level:3},{value:"Custom",id:"custom",level:3},{value:"Subgraph",id:"subgraph",level:3},{value:"Streaming",id:"streaming",level:3}];function o(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"cluster-types",children:"Cluster Types"}),"\n",(0,s.jsxs)(r.p,{children:["Databricks clusters come with various ",(0,s.jsx)(r.a,{href:"https://docs.databricks.com/clusters/create-cluster.html#what-is-cluster-access-mode",children:"Access Modes"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"To implement features including interactive pipeline runs, Prophecy has written some libraries in Python and Scala. These libraries need to be installed on the cluster."}),"\n",(0,s.jsx)(r.p,{children:"As a result, some Prophecy features are not supported on all cluster access modes. See the table below to check if a particular Prophecy feature is supported on a cluster access mode."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Prophecy Feature"}),(0,s.jsx)(r.th,{children:"Single User"}),(0,s.jsx)(r.th,{children:"Shared"}),(0,s.jsx)(r.th,{children:"No isolation shared"}),(0,s.jsx)(r.th,{children:"Unity Catalog Single User"}),(0,s.jsx)(r.th,{children:"Unity Catalog Shared"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Library installations"}),(0,s.jsx)(r.td,{children:"Supported"}),(0,s.jsx)(r.td,{children:"Supported but interim nodes can't be attached"}),(0,s.jsx)(r.td,{children:"Supported"}),(0,s.jsx)(r.td,{children:"Supported"}),(0,s.jsx)(r.td,{children:"Version-dependent"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/engineers/execution/#interactive-execution",children:"Data samples"})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.a,{href:"/engineers/data-sampling#all-default",children:"Regular"})," and ",(0,s.jsx)(r.a,{href:"/engineers/data-sampling#selective-recommended",children:"Selective"})]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/engineers/data-sampling#vanilla",children:"Vanilla"})}),(0,s.jsx)(r.td,{children:"Regular and Selective"}),(0,s.jsx)(r.td,{children:"Regular and Selective"}),(0,s.jsx)(r.td,{children:"Vanilla and Selective"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/prophecy-docs-staging/preview/pr-602/engineers/execution-metrics",children:"Execution metrics"})}),(0,s.jsx)(r.td,{children:"Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Supported"}),(0,s.jsx)(r.td,{children:"Supported"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Not Supported"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/prophecy-docs-staging/preview/pr-602/engineers/use-pipeline-monitoring#view-historical-runs",children:"Run history"})}),(0,s.jsx)(r.td,{children:"Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Supported"}),(0,s.jsx)(r.td,{children:"Supported"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Not Supported"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.a,{href:"/engineers/execution",children:"Interactive run"})," progress"]}),(0,s.jsx)(r.td,{children:"Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Supported"}),(0,s.jsx)(r.td,{children:"Supported"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Not Supported"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Interactive runs on pre-existing clusters"}),(0,s.jsx)(r.td,{children:"Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Supported"}),(0,s.jsx)(r.td,{children:"Supported"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Not Supported"})})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:["When using Databricks with a ",(0,s.jsx)(r.code,{children:"Shared"})," access mode, you must also connect to ",(0,s.jsx)(r.code,{children:"Shared Mode"})," clusters."]}),"\n",(0,s.jsx)(r.h2,{id:"gem-support",children:"Gem Support"}),"\n",(0,s.jsx)(r.p,{children:"A subset of Prophecy gems are not supported on UC Shared clusters according to the UC Shared cluster version (12.2, 14.3, or 15.4). Each row indicates the minimum Prophecy Package version required for that gem to be supported on the relevant UC Shared cluster version listed."}),"\n",(0,s.jsx)(r.p,{children:"Legacy Shared clusters 12.2 and below are shown for reference only; the later versions are strongly recommended."}),"\n",(0,s.jsx)(r.h3,{id:"sources--targets",children:"Sources / Targets"}),"\n",(0,s.jsx)(r.p,{children:"Minimum Prophecy Package version required to support Databricks Unity Catalog Shared Clusters:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Gem"}),(0,s.jsx)(r.th,{children:"Package"}),(0,s.jsx)(r.th,{children:"12.2 - Shared"}),(0,s.jsx)(r.th,{children:"14.3 - UC shared"}),(0,s.jsx)(r.th,{children:"15.4 - UC shared"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Avro"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Csv (Only File Path)"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Csv (SFTP - Source)"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Csv (Sharepoint - Source)"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Delta"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Json"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ORC"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Parque"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Text"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Fixed Format"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Xlsx"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Xml"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Seed"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Createdata"}),(0,s.jsx)(r.td,{children:"ProphecySparkAbinitioPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Mtime"}),(0,s.jsx)(r.td,{children:"ProphecySparkAbinitioPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"warehouses",children:"Warehouses"}),"\n",(0,s.jsx)(r.p,{children:"Minimum Prophecy Package version required to support Databricks Unity Catalog Shared Clusters:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Gem"}),(0,s.jsx)(r.th,{children:"Package"}),(0,s.jsx)(r.th,{children:"12.2 - Shared"}),(0,s.jsx)(r.th,{children:"14.3 - UC shared"}),(0,s.jsx)(r.th,{children:"15.4 - UC shared"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"JDBC"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"synapse"}),(0,s.jsx)(r.td,{children:"ProphecyWarehousePython"}),(0,s.jsx)(r.td,{children:"0.0.8"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Data Generator"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Kafka (Source)"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Kafka (Target)"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Bigquery (Source)"}),(0,s.jsx)(r.td,{children:"ProphecyWarehousePython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Bigquery (Target)"}),(0,s.jsx)(r.td,{children:"ProphecyWarehousePython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Mongodb (Driver Mongodb+srv)"}),(0,s.jsx)(r.td,{children:"ProphecyWarehousePython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Mongodb (Driver Mongodb)"}),(0,s.jsx)(r.td,{children:"ProphecyWarehousePython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Redshift"}),(0,s.jsx)(r.td,{children:"ProphecyWarehousePython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"catalog-table",children:"Catalog Table"}),"\n",(0,s.jsx)(r.p,{children:"Minimum Prophecy Package version required to support Databricks Unity Catalog Shared Clusters:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Gem"}),(0,s.jsx)(r.th,{children:"Package"}),(0,s.jsx)(r.th,{children:"12.2 - Shared"}),(0,s.jsx)(r.th,{children:"14.3 - UC shared"}),(0,s.jsx)(r.th,{children:"15.4 - UC shared"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Catalog Table"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Iceberg"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"Pending"}),(0,s.jsx)(r.td,{children:"Pending"}),(0,s.jsx)(r.td,{children:"Pending"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"lookup",children:"Lookup"}),"\n",(0,s.jsx)(r.p,{children:"Minimum Prophecy Package version required to support Databricks Unity Catalog Shared Clusters:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Gem"}),(0,s.jsx)(r.th,{children:"Package"}),(0,s.jsx)(r.th,{children:"12.2 - Shared"}),(0,s.jsx)(r.th,{children:"14.3 - UC shared"}),(0,s.jsx)(r.th,{children:"15.4 - UC shared"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Lookup"}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"})]})})]}),"\n",(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsxs)(r.p,{children:["Instead of ",(0,s.jsx)(r.code,{children:"Lookup"}),", use ",(0,s.jsx)(r.code,{children:"Left join"})," when working on UC Shared clusters."]})}),"\n",(0,s.jsx)(r.h3,{id:"transform",children:"Transform"}),"\n",(0,s.jsx)(r.p,{children:"Minimum Prophecy Package version required to support Databricks Unity Catalog Shared Clusters:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Gem"}),(0,s.jsx)(r.th,{children:"Package"}),(0,s.jsx)(r.th,{children:"12.2 - Shared"}),(0,s.jsx)(r.th,{children:"14.3 - UC shared"}),(0,s.jsx)(r.th,{children:"15.4 - UC shared"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Aggregate"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"BulkColumnExpressions"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"SampleRows"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Unpivot"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ColumnParser"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"DynamicSelect"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Deduplicate"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Filter"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"FlattenSchema"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Limit"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"OrderBy"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Reformat"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"DataCleansing"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"SchemaTransform"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"SetOperation"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"WindowFunction"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"BulkColumnRename"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Not Supportedrmalize"}),(0,s.jsx)(r.td,{children:"ProphecySparkAbinitioPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"0.2.24"}),(0,s.jsx)(r.td,{children:"0.2.24"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"MetaPivot"}),(0,s.jsx)(r.td,{children:"ProphecySparkAbinitioPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"0.2.24"}),(0,s.jsx)(r.td,{children:"0.2.24"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ReadRaw"}),(0,s.jsx)(r.td,{children:"ProphecySparkAbinitioPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Pending"}),(0,s.jsx)(r.td,{children:"Pending"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ReadSeparated Values"}),(0,s.jsx)(r.td,{children:"ProphecySparkAbinitioPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"0.2.24"}),(0,s.jsx)(r.td,{children:"0.2.24"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"WriteSeparated Values"}),(0,s.jsx)(r.td,{children:"ProphecySparkAbinitioPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"0.2.24"}),(0,s.jsx)(r.td,{children:"0.2.24"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"SyncDataFrameColumnsWithSchema"}),(0,s.jsx)(r.td,{children:"ProphecySparkAbinitioPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"0.2.24"}),(0,s.jsx)(r.td,{children:"0.2.24"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Sequence"}),(0,s.jsx)(r.td,{children:"ProphecySparkAbinitioPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"0.2.24"}),(0,s.jsx)(r.td,{children:"0.2.24"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"AssignKeys"}),(0,s.jsx)(r.td,{children:"ProphecySparkAbinitioPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"0.2.24"}),(0,s.jsx)(r.td,{children:"0.2.24"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"RoundRobinPartition"}),(0,s.jsx)(r.td,{children:"ProphecySparkAbinitioPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"0.2.24"}),(0,s.jsx)(r.td,{children:"0.2.24"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"CompareRecords"}),(0,s.jsx)(r.td,{children:"ProphecySparkAbinitioPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"0.2.24"}),(0,s.jsx)(r.td,{children:"0.2.24"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"DynamicReplace"}),(0,s.jsx)(r.td,{children:"ProphecySparkAlteryxPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Pending"}),(0,s.jsx)(r.td,{children:"Pending"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"FuzzyMatch"}),(0,s.jsx)(r.td,{children:"ProphecySparkAlteryxPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Pending"}),(0,s.jsx)(r.td,{children:"Pending"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"joinsplit",children:"Join/Split"}),"\n",(0,s.jsx)(r.p,{children:"Minimum Prophecy Package version required to support Databricks Unity Catalog Shared Clusters:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Gem"}),(0,s.jsx)(r.th,{children:"Package"}),(0,s.jsx)(r.th,{children:"12.2 - Shared"}),(0,s.jsx)(r.th,{children:"14.3 - UC shared"}),(0,s.jsx)(r.th,{children:"15.4 - UC shared"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Join"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Repartition"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"RowDistributor"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"CompareColumns"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"custom",children:"Custom"}),"\n",(0,s.jsx)(r.p,{children:"Minimum Prophecy Package version required to support Databricks Unity Catalog Shared Clusters:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Gem"}),(0,s.jsx)(r.th,{children:"Package"}),(0,s.jsx)(r.th,{children:"12.2 - Shared"}),(0,s.jsx)(r.th,{children:"14.3 - UC shared"}),(0,s.jsx)(r.th,{children:"15.4 - UC shared"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Script"}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsx)(r.td,{children:"Supported"}),(0,s.jsx)(r.td,{children:"Supported"}),(0,s.jsx)(r.td,{children:"Supported"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"DeltaTableOperations"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"Supported"}),(0,s.jsx)(r.td,{children:"Supported"}),(0,s.jsx)(r.td,{children:"Supported"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"FileOperation (DBFS Copy)"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"Supported"}),(0,s.jsx)(r.td,{children:"Supported"}),(0,s.jsx)(r.td,{children:"Supported"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"FileOperation"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"Pending"}),(0,s.jsx)(r.td,{children:"Pending"}),(0,s.jsx)(r.td,{children:"Pending"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Directory"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"RestAPlEnrich"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"0.0.24"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Email"}),(0,s.jsx)(r.td,{children:"ProphecyWebAppPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"EmailData"}),(0,s.jsx)(r.td,{children:"ProphecyWebAppPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Tableau"}),(0,s.jsx)(r.td,{children:"ProphecyWebAppPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Not Supported"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ReadMultipleFiles"}),(0,s.jsx)(r.td,{children:"ProphecySparkAbinitioPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Pending"}),(0,s.jsx)(r.td,{children:"Pending"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"WriteMultipleFiles"}),(0,s.jsx)(r.td,{children:"ProphecySparkAbinitioPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Pending"}),(0,s.jsx)(r.td,{children:"Pending"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Display"}),(0,s.jsx)(r.td,{children:"ProphecySparkAbinitioPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Pending"}),(0,s.jsx)(r.td,{children:"Pending"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Trash"}),(0,s.jsx)(r.td,{children:"ProphecySparkAbinitioPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Pending"}),(0,s.jsx)(r.td,{children:"Pending"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Todo"}),(0,s.jsx)(r.td,{children:"ProphecySparkAbinitioPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"Pending"}),(0,s.jsx)(r.td,{children:"Pending"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Assertions"}),(0,s.jsx)(r.td,{children:"ProphecySparkAbinitioPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"0.0.24"}),(0,s.jsx)(r.td,{children:"0.0.24"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Log"}),(0,s.jsx)(r.td,{children:"ProphecySparkAbinitioPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"0.0.24"}),(0,s.jsx)(r.td,{children:"0.0.24"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"subgraph",children:"Subgraph"}),"\n",(0,s.jsx)(r.p,{children:"Minimum Prophecy Package version required to support Databricks Unity Catalog Shared Clusters:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Gem"}),(0,s.jsx)(r.th,{children:"Package"}),(0,s.jsx)(r.th,{children:"12.2 - Shared"}),(0,s.jsx)(r.th,{children:"14.3 - UC shared"}),(0,s.jsx)(r.th,{children:"15.4 - UC shared"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Basic"}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsx)(r.td,{children:"Supported"}),(0,s.jsx)(r.td,{children:"Supported"}),(0,s.jsx)(r.td,{children:"Supported"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Published subgraph"}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsx)(r.td,{children:"Supported"}),(0,s.jsx)(r.td,{children:"Supported"}),(0,s.jsx)(r.td,{children:"Supported"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"WhileIterator"}),(0,s.jsx)(r.td,{children:"ProphecySparkAlteryxPython"}),(0,s.jsx)(r.td,{children:"Not Supported"}),(0,s.jsx)(r.td,{children:"0.0.4"}),(0,s.jsx)(r.td,{children:"0.0.4"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Table Iterator"}),(0,s.jsx)(r.td,{children:"ProphecySparkBasicsPython"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"}),(0,s.jsx)(r.td,{children:"0.2.39"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Catalog"}),(0,s.jsx)(r.td,{children:"ProphecyStreamingPython"}),(0,s.jsx)(r.td,{children:"Pending"}),(0,s.jsx)(r.td,{children:"Pending"}),(0,s.jsx)(r.td,{children:"Pending"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"streaming",children:"Streaming"}),"\n",(0,s.jsx)(r.p,{children:"Streaming gems and capabilities are not supported on UC Shared clusters as of Prophecy 3.4.x."})]})}function x(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}}}]);