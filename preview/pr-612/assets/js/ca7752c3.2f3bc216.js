"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[75518],{28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>d});var n=t(96540);const s={},a=n.createContext(s);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:r},e.children)}},68223:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"Spark/gems/source-target/source-target","title":"Source And Target","description":"Set of gems related to reading and writing data","source":"@site/docs/Spark/gems/source-target/source-target.md","sourceDirName":"Spark/gems/source-target","slug":"/engineers/source-target","permalink":"/prophecy-docs-staging/preview/pr-612/engineers/source-target","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-612/tags/gems"},{"inline":true,"label":"file","permalink":"/prophecy-docs-staging/preview/pr-612/tags/file"},{"inline":true,"label":"warehouse","permalink":"/prophecy-docs-staging/preview/pr-612/tags/warehouse"},{"inline":true,"label":"catalog","permalink":"/prophecy-docs-staging/preview/pr-612/tags/catalog"},{"inline":true,"label":"lookup","permalink":"/prophecy-docs-staging/preview/pr-612/tags/lookup"}],"version":"current","frontMatter":{"title":"Source And Target","id":"source-target","slug":"/engineers/source-target","description":"Set of gems related to reading and writing data","tags":["gems","file","warehouse","catalog","lookup"]},"sidebar":"mySidebar","previous":{"title":"Gems","permalink":"/prophecy-docs-staging/preview/pr-612/engineers/gems"},"next":{"title":"Avro","permalink":"/prophecy-docs-staging/preview/pr-612/engineers/avro"}}');var s=t(74848),a=t(28453);const i={title:"Source And Target",id:"source-target",slug:"/engineers/source-target",description:"Set of gems related to reading and writing data",tags:["gems","file","warehouse","catalog","lookup"]},d=void 0,l={},o=[{value:"File",id:"file",level:2},{value:"Synthetic data generator",id:"synthetic-data-generator",level:3},{value:"Warehouse",id:"warehouse",level:2},{value:"Catalog",id:"catalog",level:2},{value:"Lookup",id:"lookup",level:2}];function c(e){const r={a:"a",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"The Source and Target gems to help you work with various file-based formats, connect to a warehouse-style data source, and work with various table-based formats."}),"\n",(0,s.jsx)(r.h2,{id:"file",children:"File"}),"\n",(0,s.jsx)(r.p,{children:"You can use the Source and Target gems to help you work with following file-based formats:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Formats"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/engineers/avro",children:"Avro"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/engineers/json",children:"JSON"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/engineers/seed",children:"Seed"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/engineers/csv",children:"CSV"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/engineers/kafka",children:"Kafka"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/engineers/text",children:"Text"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/engineers/delta",children:"Delta"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/engineers/orc",children:"ORC"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/engineers/xlsx",children:"XLSX (Excel)"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/engineers/fixed-format",children:"Fixed Format"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/engineers/parquet",children:"Parquet"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/engineers/xml",children:"XML"})})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"synthetic-data-generator",children:"Synthetic data generator"}),"\n",(0,s.jsxs)(r.p,{children:["You can generate synthetic data with ",(0,s.jsx)(r.a,{href:"/engineers/data-generator",children:"the data generator file type"}),". It allows you to specify the data type of each column and populates them with randomly generated data. You can also specify additional requirements such as the boundaries for each row, and the percentage of rows that must have null values."]}),"\n",(0,s.jsx)(r.h2,{id:"warehouse",children:"Warehouse"}),"\n",(0,s.jsx)(r.p,{children:"You can use the Source and Target gems to help you connect to the following warehouse-style data sources:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Data Sources"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/engineers/bigquery",children:"BigQuery"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/engineers/mongodb",children:"MongoDB"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/engineers/snowflake",children:"Snowflake"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/engineers/cosmosdb",children:"CosmosDB"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/engineers/oracle",children:"Oracle"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/engineers/teradata",children:"Teradata"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/engineers/db2",children:"DB2"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/engineers/redshift",children:"Redshift"})}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/engineers/jdbc",children:"JDBC"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/engineers/salesforce",children:"Salesforce"})}),(0,s.jsx)(r.td,{})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"catalog",children:"Catalog"}),"\n",(0,s.jsx)(r.p,{children:"You can use the Source and Target gems to help you work with the following table-based formats:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Formats"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/engineers/delta",children:"Delta"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/engineers/hive-table",children:"Hive"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/engineers/iceberg",children:"Iceberg"})})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"lookup",children:"Lookup"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/engineers/lookup",children:"Lookup"})," is a special component that allows you to broadcast any data and use it anywhere in your pipeline at a later time."]})]})}function h(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);