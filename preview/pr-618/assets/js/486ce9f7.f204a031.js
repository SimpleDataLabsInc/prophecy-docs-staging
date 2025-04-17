"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[44281],{8811:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/script_remove_inputs-1fa64b1d98805f98b57fc6f20fe50b10.png"},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>c});var n=t(96540);const a={},i=n.createContext(a);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:s},e.children)}},45625:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/script_generate_df-0b0db4e4ec1c0de934b618e41102edc5.png"},49235:(e,s,t)=>{t.d(s,{A:()=>a});t(96540);var n=t(74848);function a(e){return(0,n.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,n.jsxs)("span",{className:"badge-dependency",children:[(0,n.jsx)("span",{className:"left",children:e.python_package_name}),(0,n.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,n.jsxs)("span",{className:"badge-dependency",children:[(0,n.jsx)("span",{className:"left",children:e.scala_package_name}),(0,n.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,n.jsxs)("span",{className:"badge-dependency",children:[(0,n.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,n.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,n.jsxs)("span",{className:"badge-dependency",children:[(0,n.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,n.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,n.jsxs)("span",{className:"badge-spark",children:[(0,n.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,n.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,n.jsxs)("span",{className:"badge-spark",children:[(0,n.jsx)("span",{className:"left",children:"Databricks UC Standard"}),(0,n.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,n.jsxs)("span",{className:"badge-spark",children:[(0,n.jsx)("span",{className:"left",children:"Livy"}),(0,n.jsx)("span",{className:"right",children:e.livy})]})}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]})}},64747:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"Spark/gems/custom/script","title":"Script","description":"Provide a place to use a SparkSession and whatever code you wish to use","source":"@site/docs/Spark/gems/custom/script.md","sourceDirName":"Spark/gems/custom","slug":"/engineers/script","permalink":"/prophecy-docs-staging/preview/pr-618/engineers/script","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"custom","permalink":"/prophecy-docs-staging/preview/pr-618/tags/custom"},{"inline":true,"label":"code","permalink":"/prophecy-docs-staging/preview/pr-618/tags/code"}],"version":"current","frontMatter":{"title":"Script","id":"script","slug":"/engineers/script","description":"Provide a place to use a SparkSession and whatever code you wish to use","tags":["custom","code"]},"sidebar":"mySidebar","previous":{"title":"Custom","permalink":"/prophecy-docs-staging/preview/pr-618/engineers/custom"},"next":{"title":"SQLStatement","permalink":"/prophecy-docs-staging/preview/pr-618/engineers/sql-statement"}}');var a=t(74848),i=t(28453),r=t(49235);const c={title:"Script",id:"script",slug:"/engineers/script",description:"Provide a place to use a SparkSession and whatever code you wish to use",tags:["custom","code"]},l=void 0,d={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Schema",id:"schema",level:2},{value:"Examples",id:"examples",level:2},{value:"Script gem with Input and Output: Un-pivoting a DataFrame",id:"script-gem-with-input-and-output-un-pivoting-a-dataframe",level:3},{value:"Script gem with only Output: Generating a DataFrame",id:"script-gem-with-only-output-generating-a-dataframe",level:3}];function o(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.A,{python_package_name:"",python_package_version:"",scala_package_name:"",scala_package_version:"",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"3.0.1+"}),"\n",(0,a.jsxs)(s.p,{children:["Provides a ",(0,a.jsx)(s.code,{children:"SparkSession"})," and allows you to run custom code."]}),"\n",(0,a.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,a.jsx)(s.th,{style:{textAlign:"left"},children:"Meaning"}),(0,a.jsx)(s.th,{style:{textAlign:"left"},children:"Required"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{style:{textAlign:"left"},children:"Input DataFrame(s)"}),(0,a.jsx)(s.td,{style:{textAlign:"left"},children:"Input DataFrame(s)"}),(0,a.jsx)(s.td,{style:{textAlign:"left"},children:"False"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{style:{textAlign:"left"},children:"Output DataFrame(s)"}),(0,a.jsx)(s.td,{style:{textAlign:"left"},children:"Output DataFrame(s)"}),(0,a.jsx)(s.td,{style:{textAlign:"left"},children:"False"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{style:{textAlign:"left"},children:"Code"}),(0,a.jsx)(s.td,{style:{textAlign:"left"},children:"Custom code to be executed"}),(0,a.jsx)(s.td,{style:{textAlign:"left"},children:"True"})]})]})]}),"\n",(0,a.jsxs)(s.admonition,{type:"info",children:[(0,a.jsxs)(s.p,{children:["To remove input/output DataFrame(s), simply click ",(0,a.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",color:"#667085",class:"sc-jrAFXE hhLaQQ ui-icon undefined",children:(0,a.jsx)("path",{d:"M11.9999 2C10.2458 2 8.78514 3.31072 8.53998 5H5.11908C5.0765 4.99271 5.03337 4.98912 4.99017 4.98926C4.95285 4.99006 4.91564 4.99365 4.87885 5H3.24994C3.15056 4.99859 3.05188 5.01696 2.95966 5.05402C2.86743 5.09108 2.78349 5.1461 2.71271 5.21588C2.64194 5.28566 2.58573 5.36882 2.54737 5.46051C2.50901 5.5522 2.48926 5.65061 2.48926 5.75C2.48926 5.84939 2.50901 5.9478 2.54737 6.03949C2.58573 6.13118 2.64194 6.21434 2.71271 6.28412C2.78349 6.3539 2.86743 6.40892 2.95966 6.44598C3.05188 6.48304 3.15056 6.50141 3.24994 6.5H4.31928L5.57806 19.5146C5.7136 20.918 6.90583 22 8.31537 22H15.6835C17.0931 22 18.2854 20.9181 18.4208 19.5146L19.6806 6.5H20.7499C20.8493 6.50141 20.948 6.48304 21.0402 6.44598C21.1324 6.40892 21.2164 6.3539 21.2872 6.28412C21.3579 6.21434 21.4141 6.13118 21.4525 6.03949C21.4909 5.9478 21.5106 5.84939 21.5106 5.75C21.5106 5.65061 21.4909 5.5522 21.4525 5.46051C21.4141 5.36882 21.3579 5.28566 21.2872 5.21588C21.2164 5.1461 21.1324 5.09108 21.0402 5.05402C20.948 5.01696 20.8493 4.99859 20.7499 5H19.122C19.0425 4.98709 18.9613 4.98709 18.8818 5H15.4599C15.2147 3.31072 13.7541 2 11.9999 2ZM11.9999 3.5C12.9395 3.5 13.7103 4.13408 13.9306 5H10.0693C10.2896 4.13408 11.0604 3.5 11.9999 3.5ZM5.82513 6.5H18.1738L16.9277 19.3701C16.8652 20.0177 16.3339 20.5 15.6835 20.5H8.31537C7.66591 20.5 7.13369 20.0168 7.07123 19.3701L5.82513 6.5ZM10.2382 8.98926C10.0395 8.99236 9.8501 9.07423 9.71167 9.21686C9.57324 9.3595 9.49709 9.55125 9.49994 9.75V17.25C9.49853 17.3494 9.5169 17.4481 9.55396 17.5403C9.59102 17.6325 9.64604 17.7164 9.71582 17.7872C9.7856 17.858 9.86876 17.9142 9.96045 17.9526C10.0521 17.9909 10.1505 18.0107 10.2499 18.0107C10.3493 18.0107 10.4477 17.9909 10.5394 17.9526C10.6311 17.9142 10.7143 17.858 10.7841 17.7872C10.8538 17.7164 10.9089 17.6325 10.9459 17.5403C10.983 17.4481 11.0013 17.3494 10.9999 17.25V9.75C11.0014 9.64962 10.9827 9.54997 10.9449 9.45695C10.9071 9.36394 10.851 9.27946 10.78 9.20852C10.709 9.13757 10.6244 9.08161 10.5313 9.04395C10.4383 9.00629 10.3386 8.98769 10.2382 8.98926V8.98926ZM13.7382 8.98926C13.5395 8.99236 13.3501 9.07423 13.2117 9.21686C13.0732 9.3595 12.9971 9.55125 12.9999 9.75V17.25C12.9985 17.3494 13.0169 17.4481 13.054 17.5403C13.091 17.6325 13.146 17.7164 13.2158 17.7872C13.2856 17.858 13.3688 17.9142 13.4605 17.9526C13.5521 17.9909 13.6505 18.0107 13.7499 18.0107C13.8493 18.0107 13.9477 17.9909 14.0394 17.9526C14.1311 17.9142 14.2143 17.858 14.2841 17.7872C14.3538 17.7164 14.4089 17.6325 14.4459 17.5403C14.483 17.4481 14.5013 17.3494 14.4999 17.25V9.75C14.5014 9.64962 14.4827 9.54997 14.4449 9.45695C14.4071 9.36394 14.351 9.27946 14.28 9.20852C14.209 9.13757 14.1244 9.08161 14.0313 9.04395C13.9383 9.00629 13.8386 8.98769 13.7382 8.98926V8.98926Z"})})," icon on the left sidebar"]}),(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Script - Remove inputs",src:t(8811).A+"",width:"1920",height:"344"})})]}),"\n",(0,a.jsx)(s.h2,{id:"schema",children:"Schema"}),"\n",(0,a.jsxs)(s.p,{children:["When executing a custom script gem, the output schema is not known by Prophecy so it must be inferred from a sample computation result. Click the ",(0,a.jsx)(s.code,{children:"Custom Schema"})," button and ",(0,a.jsx)(s.code,{children:"Infer from cluster"})," as shown in the ",(0,a.jsx)(s.strong,{children:"Gems --\x3e Outputs"})," ",(0,a.jsx)(s.a,{href:"/engineers/gems#output-ports",children:"description"}),". The schema will be inferred according to the script and the Spark version running on the connected cluster."]}),"\n",(0,a.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(s.hr,{}),"\n",(0,a.jsx)(s.h3,{id:"script-gem-with-input-and-output-un-pivoting-a-dataframe",children:"Script gem with Input and Output: Un-pivoting a DataFrame"}),"\n",(0,a.jsxs)(s.p,{children:["We'll perform the ",(0,a.jsx)(s.code,{children:"unpivot"})," operation using our custom code"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Script - Unpivot",src:t(65448).A+"",width:"1726",height:"812"})}),"\n",(0,a.jsx)(s.hr,{}),"\n",(0,a.jsx)(s.h3,{id:"script-gem-with-only-output-generating-a-dataframe",children:"Script gem with only Output: Generating a DataFrame"}),"\n",(0,a.jsxs)(s.p,{children:["We'll use the provided ",(0,a.jsx)(s.code,{children:"SparkSession"})," to create and return a DataFrame"]}),"\n",(0,a.jsx)(s.admonition,{type:"note",children:(0,a.jsx)(s.p,{children:"Since we removed the input port, we don't see input DataFrame in the method signature"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Script - Unpivot",src:t(45625).A+"",width:"2110",height:"1228"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},65448:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/script_unpivot-be4b541e680f7028ab24c2a3b37ebda4.png"}}]);