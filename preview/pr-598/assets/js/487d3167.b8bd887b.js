"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[2223],{28453:(e,s,r)=>{r.d(s,{R:()=>n,x:()=>c});var a=r(96540);const t={},i=a.createContext(t);function n(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),a.createElement(i.Provider,{value:s},e.children)}},49235:(e,s,r)=>{r.d(s,{A:()=>t});r(96540);var a=r(74848);function t(e){return(0,a.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:e.python_package_name}),(0,a.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:e.scala_package_name}),(0,a.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,a.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,a.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,a.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,a.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Livy"}),(0,a.jsx)("span",{className:"right",children:e.livy})]})}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]})}},85997:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"Spark/gems/source-target/file/seed","title":"Seed","description":"Parameters and properties to read from Seed files","source":"@site/docs/Spark/gems/source-target/file/seed.md","sourceDirName":"Spark/gems/source-target/file","slug":"/engineers/seed","permalink":"/prophecy-docs-staging/preview/pr-598/engineers/seed","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-598/tags/gems"},{"inline":true,"label":"file","permalink":"/prophecy-docs-staging/preview/pr-598/tags/file"},{"inline":true,"label":"seed","permalink":"/prophecy-docs-staging/preview/pr-598/tags/seed"}],"version":"current","frontMatter":{"title":"Seed","id":"seed","slug":"/engineers/seed","description":"Parameters and properties to read from Seed files","tags":["gems","file","seed"]},"sidebar":"mySidebar","previous":{"title":"Parquet","permalink":"/prophecy-docs-staging/preview/pr-598/engineers/parquet"},"next":{"title":"Text","permalink":"/prophecy-docs-staging/preview/pr-598/engineers/text"}}');var t=r(74848),i=r(28453),n=r(49235);const c={title:"Seed",id:"seed",slug:"/engineers/seed",description:"Parameters and properties to read from Seed files",tags:["gems","file","seed"]},d=void 0,l={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Source",id:"source",level:2},{value:"Source properties",id:"source-properties",level:3},{value:"Target",id:"target",level:2}];function o(e){const s={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.2.31+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.2.5.6",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"Not Supported",livy:"3.2.0+"}),"\n",(0,t.jsx)(s.p,{children:"The Seed file type:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Is a configuration file that provides initial data or settings for an application."}),"\n",(0,t.jsx)(s.li,{children:"Allows you to manually write small CSV files into your Prophecy pipelines."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"You can only read data from Seed files in Prophecy."}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Tab"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Data"}),(0,t.jsx)(s.td,{children:"Data"}),(0,t.jsx)(s.td,{children:"Data you provide in the Seed format."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Schema"}),(0,t.jsx)(s.td,{children:"Properties"}),(0,t.jsxs)(s.td,{children:["Schema to apply on the data. You can define or edit the schema as a JSON, or infer it with the ",(0,t.jsx)(s.code,{children:"Infer Schema"})," button."]})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"source",children:"Source"}),"\n",(0,t.jsx)(s.p,{children:"The Source gem reads data from Seed files and allows you to optionally specify the following additional properties."}),"\n",(0,t.jsx)(s.h3,{id:"source-properties",children:"Source properties"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Property name"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Default"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Select an appropriate delimiter for entered data"}),(0,t.jsx)(s.td,{children:"Character to separate data you enter."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:","})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"First row is header"}),(0,t.jsx)(s.td,{children:"Whether the first row is the table header."}),(0,t.jsx)(s.td,{children:"true"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Enforce specified or inferred schema"}),(0,t.jsx)(s.td,{children:"Whether the output schema must match what you define in this tab."}),(0,t.jsx)(s.td,{children:"false"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Auto Infer schema from the data"}),(0,t.jsx)(s.td,{children:"Whether you want to automatically enter the schema."}),(0,t.jsx)(s.td,{children:"false"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"target",children:"Target"}),"\n",(0,t.jsx)(s.p,{children:"The Target gem does not support writing to Seed files."})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}}}]);