"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[489],{13441:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"Spark/gems/transform/dynamic-select","title":"DynamicSelect","description":"Dynamically filter columns of your dataset based on a set of conditions","source":"@site/docs/Spark/gems/transform/dynamic-select.md","sourceDirName":"Spark/gems/transform","slug":"/engineers/dynamic-select","permalink":"/prophecy-docs-staging/preview/pr-614/engineers/dynamic-select","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-614/tags/gems"},{"inline":true,"label":"filter","permalink":"/prophecy-docs-staging/preview/pr-614/tags/filter"},{"inline":true,"label":"dynamic","permalink":"/prophecy-docs-staging/preview/pr-614/tags/dynamic"}],"version":"current","frontMatter":{"title":"DynamicSelect","id":"dynamic-select","slug":"/engineers/dynamic-select","description":"Dynamically filter columns of your dataset based on a set of conditions","tags":["gems","filter","dynamic"]},"sidebar":"mySidebar","previous":{"title":"DynamicReplace","permalink":"/prophecy-docs-staging/preview/pr-614/engineers/dynamic-replace"},"next":{"title":"Filter","permalink":"/prophecy-docs-staging/preview/pr-614/engineers/filter"}}');var t=a(74848),i=a(28453),c=a(49235);const r={title:"DynamicSelect",id:"dynamic-select",slug:"/engineers/dynamic-select",description:"Dynamically filter columns of your dataset based on a set of conditions",tags:["gems","filter","dynamic"]},l=void 0,o={},d=[{value:"Configuration",id:"configuration",level:2},{value:"Examples",id:"examples",level:2},{value:"Remove date columns using field type",id:"remove-date-columns-using-field-type",level:3},{value:"Remove date columns with an expression",id:"remove-date-columns-with-an-expression",level:3}];function p(e){const s={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.2.27+",scala_package_name:"",scala_package_version:"",scala_lib:"8.2.1",python_lib:"1.9.16",uc_single:"14.3+",uc_shared:"Not Supported",livy:"3.0.1+"}),"\n",(0,t.jsx)(s.p,{children:"Use the DynamicSelect gem to dynamically filter columns of your dataset based on a set of conditions."}),"\n",(0,t.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(s.p,{children:"There are two ways to configure the DynamicSelect."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Configuration"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Select field types"}),(0,t.jsx)(s.td,{children:"Choose one or more types of columns to keep in the dataset, such as string, decimal, or date."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Select via expression"}),(0,t.jsx)(s.td,{children:"Create an expression that limits the type of columns to keep in the dataset."})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.p,{children:"You\u2019ll use DynamicSelect when you want to avoid hard-coding your choice of columns. In other words, rather than define each column to keep in your pipeline, you let the system automatically choose the columns based on certain conditions or rules."}),"\n",(0,t.jsx)(s.h3,{id:"remove-date-columns-using-field-type",children:"Remove date columns using field type"}),"\n",(0,t.jsxs)(s.p,{children:["Assume you would like to remove irrelevant date and timestamp columns from your dataset. You can do so with the ",(0,t.jsx)(s.strong,{children:"Select field types"})," method by selecting all field types to maintain, except for date and timestamp."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Keep all columns except Date and Timestamp column using the visual interface",src:a(88104).A+"",width:"2620",height:"1508"})}),"\n",(0,t.jsx)(s.h3,{id:"remove-date-columns-with-an-expression",children:"Remove date columns with an expression"}),"\n",(0,t.jsxs)(s.p,{children:["Using the same example, you can accomplish the same task with the ",(0,t.jsx)(s.strong,{children:"Select via expression"})," method by inputting the the expression ",(0,t.jsx)(s.code,{children:"column_type NOT IN ('date', 'timestamp')"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,s,a)=>{a.d(s,{R:()=>c,x:()=>r});var n=a(96540);const t={},i=n.createContext(t);function c(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(i.Provider,{value:s},e.children)}},49235:(e,s,a)=>{a.d(s,{A:()=>t});a(96540);var n=a(74848);function t(e){return(0,n.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,n.jsxs)("span",{className:"badge-dependency",children:[(0,n.jsx)("span",{className:"left",children:e.python_package_name}),(0,n.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,n.jsxs)("span",{className:"badge-dependency",children:[(0,n.jsx)("span",{className:"left",children:e.scala_package_name}),(0,n.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,n.jsxs)("span",{className:"badge-dependency",children:[(0,n.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,n.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,n.jsxs)("span",{className:"badge-dependency",children:[(0,n.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,n.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,n.jsxs)("span",{className:"badge-spark",children:[(0,n.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,n.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,n.jsxs)("span",{className:"badge-spark",children:[(0,n.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,n.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,n.jsxs)("span",{className:"badge-spark",children:[(0,n.jsx)("span",{className:"left",children:"Livy"}),(0,n.jsx)("span",{className:"right",children:e.livy})]})}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]})}},88104:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/remove-date-timestamp-3a1ea91b088d881397d1d64a7f02d9f7.png"}}]);