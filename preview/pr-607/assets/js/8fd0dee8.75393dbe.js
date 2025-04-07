"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[31323],{28453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>d});var t=r(96540);const n={},a=t.createContext(n);function i(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(a.Provider,{value:s},e.children)}},97723:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"Spark/spark-streaming/streaming-sources-and-targets/streaming-event-apps","title":"Event-based","description":"Event-based Source and Target Gems for Streaming Data Applications","source":"@site/docs/Spark/spark-streaming/streaming-sources-and-targets/streaming-event-gem.md","sourceDirName":"Spark/spark-streaming/streaming-sources-and-targets","slug":"/engineers/event-based-streaming-source-and-targets","permalink":"/prophecy-docs-staging/preview/pr-607/engineers/event-based-streaming-source-and-targets","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"spark","permalink":"/prophecy-docs-staging/preview/pr-607/tags/spark"},{"inline":true,"label":"streaming","permalink":"/prophecy-docs-staging/preview/pr-607/tags/streaming"},{"inline":true,"label":"kafka","permalink":"/prophecy-docs-staging/preview/pr-607/tags/kafka"}],"version":"current","frontMatter":{"title":"Event-based","id":"streaming-event-apps","slug":"/engineers/event-based-streaming-source-and-targets","description":"Event-based Source and Target Gems for Streaming Data Applications","tags":["spark","streaming","kafka"]},"sidebar":"mySidebar","previous":{"title":"File-based","permalink":"/prophecy-docs-staging/preview/pr-607/engineers/file-based-streaming-source-and-targets"},"next":{"title":"Warehouse-based","permalink":"/prophecy-docs-staging/preview/pr-607/engineers/warehouse-based-streaming-source-and-targets"}}');var n=r(74848),a=r(28453);const i={title:"Event-based",id:"streaming-event-apps",slug:"/engineers/event-based-streaming-source-and-targets",description:"Event-based Source and Target Gems for Streaming Data Applications",tags:["spark","streaming","kafka"]},d=void 0,o={},c=[{value:"Event-based Sources and Targets",id:"event-based-sources-and-targets",level:2},{value:"Create a Kafka Source gem",id:"create-a-kafka-source-gem",level:2},{value:"Entering Authentication Credentials",id:"entering-authentication-credentials",level:3}];function l(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"event-based-sources-and-targets",children:"Event-based Sources and Targets"}),"\n",(0,n.jsxs)(s.p,{children:["Prophecy supports ",(0,n.jsx)(s.strong,{children:"Kafka Streaming"})," Source and Target. More information on supported Kafka Source and Target options are available ",(0,n.jsx)(s.a,{href:"https://spark.apache.org/docs/latest/structured-streaming-kafka-integration.html",children:"here"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["The Kafka gem allows inferring the schema of the events by automatically populating the ",(0,n.jsx)(s.code,{children:"value"})," column. Schema inference works with both JSON and AVRO file formats. A user is required to provide an example event for schema inference."]}),"\n",(0,n.jsx)(s.h2,{id:"create-a-kafka-source-gem",children:"Create a Kafka Source gem"}),"\n",(0,n.jsx)(s.p,{children:"A Kafka Source gem allows the Streaming pipeline continuously pull data from a Kafka topic. The following options are supported:"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Property"})}),(0,n.jsx)(s.th,{children:"Optional"}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Default Value"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Comment"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Broker List"}),(0,n.jsx)(s.td,{children:"False"}),(0,n.jsx)(s.td,{children:"N/A"}),(0,n.jsxs)(s.td,{children:["List of Kafka brokers separated by commas. For eg. ",(0,n.jsx)(s.code,{children:"kdj-ibg1.us-east-2.aws.cloud:9092, kdj-ibg2.us-east-2.aws.cloud:9092,kdj-ibg3.us-east-2.aws.cloud:9092"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Group ID"})}),(0,n.jsx)(s.td,{children:"True"}),(0,n.jsx)(s.td,{children:"None"}),(0,n.jsx)(s.td,{children:"Consumer group ID."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Session Timeout"})}),(0,n.jsx)(s.td,{children:"False"}),(0,n.jsx)(s.td,{children:"6000"}),(0,n.jsxs)(s.td,{children:["Corresponds to the ",(0,n.jsx)(s.code,{children:"session.timeout.ms"})," field"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Security Protocol"})}),(0,n.jsx)(s.td,{children:"False"}),(0,n.jsx)(s.td,{children:"SASL_SSL"}),(0,n.jsxs)(s.td,{children:["Supported values are ",(0,n.jsx)(s.code,{children:"SASL_SSL"}),", ",(0,n.jsx)(s.code,{children:"PLAINTEXT"}),", ",(0,n.jsx)(s.code,{children:"SSL"}),", ",(0,n.jsx)(s.code,{children:"SSL_PLAINTEXT"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"SASL Mechanisms"})}),(0,n.jsx)(s.td,{children:"False"}),(0,n.jsx)(s.td,{children:"SCRAM-SHA-256"}),(0,n.jsxs)(s.td,{children:["SASL mechanism to handle username/password authentication. Supported values are ",(0,n.jsx)(s.code,{children:"PLAIN"}),", ",(0,n.jsx)(s.code,{children:"SCRAM-SHA-256"})," and ",(0,n.jsx)(s.code,{children:"SCRAM-SHA-512"}),", ",(0,n.jsx)(s.code,{children:"GSSAPI"}),", ",(0,n.jsx)(s.code,{children:"OAUTHBEARER"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Kafka Topic"})}),(0,n.jsx)(s.td,{children:"False"}),(0,n.jsx)(s.td,{children:"N/A"}),(0,n.jsx)(s.td,{children:"Name of Kafka Topic to Consume"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"entering-authentication-credentials",children:"Entering Authentication Credentials"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Databricks Secrets (recommended)"}),": Use Databricks to manage your credentials"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"UserName, Password"}),": Use ",(0,n.jsx)(s.strong,{children:"ONLY"})," for test deployments and during development. This writes credentials to Git repository, which isn't good practice."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}}}]);