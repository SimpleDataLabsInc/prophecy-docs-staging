"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[89706],{11500:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/watermarkinputoutput-031574357ec93fec3e14413c2f4862fd.png"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(96540);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}},82467:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"Spark/spark-streaming/transformations-streaming","title":"Streaming Transformations","description":"Spark Streaming with Prophecy\'s easy-to-use interface","source":"@site/docs/Spark/spark-streaming/streaming-transformations.md","sourceDirName":"Spark/spark-streaming","slug":"/engineers/spark-streaming-transformations","permalink":"/prophecy-docs-staging/preview/pr-614/engineers/spark-streaming-transformations","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"spark","permalink":"/prophecy-docs-staging/preview/pr-614/tags/spark"},{"inline":true,"label":"streaming","permalink":"/prophecy-docs-staging/preview/pr-614/tags/streaming"}],"version":"current","frontMatter":{"title":"Streaming Transformations","id":"transformations-streaming","slug":"/engineers/spark-streaming-transformations","description":"Spark Streaming with Prophecy\'s easy-to-use interface","tags":["spark","streaming"]},"sidebar":"mySidebar","previous":{"title":"Warehouse-based","permalink":"/prophecy-docs-staging/preview/pr-614/engineers/warehouse-based-streaming-source-and-targets"},"next":{"title":"Best practices","permalink":"/prophecy-docs-staging/preview/pr-614/engineers/project-best-practices"}}');var a=r(74848),s=r(28453);const i={title:"Streaming Transformations",id:"transformations-streaming",slug:"/engineers/spark-streaming-transformations",description:"Spark Streaming with Prophecy's easy-to-use interface",tags:["spark","streaming"]},o=void 0,c={},d=[{value:"Transformation Gems",id:"transformation-gems",level:2},{value:"Watermarking",id:"watermarking",level:3}];function m(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"transformation-gems",children:"Transformation Gems"}),"\n",(0,a.jsxs)(n.p,{children:["Transform gems that generate code but do not work within Streaming Applications include ",(0,a.jsx)(n.code,{children:"OrderBy"}),", ",(0,a.jsx)(n.code,{children:"Limit"}),", and ",(0,a.jsx)(n.code,{children:"Window"})," (partitionBy).\nAlthough ",(0,a.jsx)(n.code,{children:"Window"})," would work with a watermarked column (explained below) as part of the partitioning, it is advised to use ",(0,a.jsx)(n.code,{children:"window()"})," or ",(0,a.jsx)(n.code,{children:"session_window()"})," from the ",(0,a.jsx)(n.code,{children:"pyspark.sql.functions package"})," ",(0,a.jsx)(n.a,{href:"https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.functions.session_window.html#:~:text=session_window,-pyspark.sql.functions&text=Generates%20session%20window%20given%20a,according%20to%20the%20given%20inputs.",children:"(link)"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"watermarking",children:"Watermarking"}),"\n",(0,a.jsxs)(n.p,{children:["Watermarking is a technique that enables aggregations on streaming data by limiting the state over which the aggregation is performed. In order to prevent out-of-memory errors, we have introduced support for watermarking. More information on watermarking is available in the Spark documentation ",(0,a.jsx)(n.a,{href:"https://spark.apache.org/docs/latest/structured-streaming-programming-guide.html#window-operations-on-event-time",children:"here"})]}),"\n",(0,a.jsxs)(n.p,{children:["We have added a Watermarking gem in the Transform Section that allows a user to add a Watermark to a DataFrame.\n",(0,a.jsx)(n.img,{alt:"Example usage of Watermark - Watermark Table",src:r(11500).A+"",width:"3054",height:"938"})]}),"\n",(0,a.jsxs)(n.p,{children:["In this example, we add Watermarking to the ",(0,a.jsx)(n.code,{children:"timestamp"})," column. A user may enter the column name or select one from the Schema Table on the left. The text box is editable. Finally, define the Watermark Duration.\nIt is recommended to use Watermarking on a Streaming DataFrame in case you're planning to use any of the following operations on it:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/engineers/aggregate",children:"Aggregate"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/engineers/deduplicate",children:"Deduplicate"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/engineers/sql-statement",children:"SQL Statement"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/engineers/join",children:"Join"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}}}]);