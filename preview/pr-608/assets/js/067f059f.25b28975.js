"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[69986],{28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>l});var t=s(96540);const a={},n=t.createContext(a);function i(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(n.Provider,{value:r},e.children)}},32768:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"Spark/gems/source-target/file/orc","title":"ORC","description":"Parameters and properties to read from and write to ORC files","source":"@site/docs/Spark/gems/source-target/file/orc.md","sourceDirName":"Spark/gems/source-target/file","slug":"/engineers/orc","permalink":"/prophecy-docs-staging/preview/pr-608/engineers/orc","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-608/tags/gems"},{"inline":true,"label":"file","permalink":"/prophecy-docs-staging/preview/pr-608/tags/file"},{"inline":true,"label":"orc","permalink":"/prophecy-docs-staging/preview/pr-608/tags/orc"}],"version":"current","frontMatter":{"title":"ORC","id":"orc","slug":"/engineers/orc","description":"Parameters and properties to read from and write to ORC files","tags":["gems","file","orc"]},"sidebar":"mySidebar","previous":{"title":"Kafka","permalink":"/prophecy-docs-staging/preview/pr-608/engineers/kafka"},"next":{"title":"Parquet","permalink":"/prophecy-docs-staging/preview/pr-608/engineers/parquet"}}');var a=s(74848),n=s(28453),i=s(49235),l=s(65537),c=s(79329);const o={title:"ORC",id:"orc",slug:"/engineers/orc",description:"Parameters and properties to read from and write to ORC files",tags:["gems","file","orc"]},d=void 0,h={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Source",id:"source",level:2},{value:"Source properties",id:"source-properties",level:3},{value:"Example",id:"source-example",level:3},{value:"Generated Code",id:"source-code",level:3},{value:"Target",id:"target",level:2},{value:"Target properties",id:"target-properties",level:3},{value:"Supported write modes",id:"supported-write-modes",level:3},{value:"Example",id:"example-target",level:3},{value:"Generated Code",id:"target-code",level:3}];function u(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.0.1+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"3.2.0+"}),"\n",(0,a.jsx)(r.p,{children:"The ORC (Optimized Row Columnar) file type:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Is a columnar file format designed for Spark and Hadoop workloads."}),"\n",(0,a.jsx)(r.li,{children:"Offers high compression ratios, which helps reduce storage costs."}),"\n",(0,a.jsx)(r.li,{children:"Optimizes for large streaming reads, but with integrated support for finding required rows quickly."}),"\n",(0,a.jsx)(r.li,{children:"Is type-aware, which means it can choose an encoding for the type and builds an internal index while you write to the file."}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Parameter"}),(0,a.jsx)(r.th,{children:"Tab"}),(0,a.jsx)(r.th,{children:"Description"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Location"}),(0,a.jsx)(r.td,{children:"Location"}),(0,a.jsx)(r.td,{children:"File path to read from or write to the ORC file."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Schema"}),(0,a.jsx)(r.td,{children:"Properties"}),(0,a.jsxs)(r.td,{children:["Schema to apply on the loaded data.",(0,a.jsx)("br",{}),"In the Source gem, you can define or edit the schema visually or in JSON code.",(0,a.jsx)("br",{}),"In the Target gem, you can view the schema visually or as JSON code."]})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"source",children:"Source"}),"\n",(0,a.jsx)(r.p,{children:"The Source gem reads data from ORC files and allows you to optionally specify the following additional properties."}),"\n",(0,a.jsx)(r.h3,{id:"source-properties",children:"Source properties"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Property name"}),(0,a.jsx)(r.th,{children:"Description"}),(0,a.jsx)(r.th,{children:"Default"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Description"}),(0,a.jsx)(r.td,{children:"Description of your dataset."}),(0,a.jsx)(r.td,{children:"None"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Use user-defined schema"}),(0,a.jsx)(r.td,{children:"Whether to use the schema you define."}),(0,a.jsx)(r.td,{children:"false"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Recursive File Lookup"}),(0,a.jsxs)(r.td,{children:["Whether to recursively load files and disable partition inferring. If the data source explicitly specifies the ",(0,a.jsx)(r.code,{children:"partitionSpec"})," when the",(0,a.jsx)(r.code,{children:"recursiveFileLookup"})," is ",(0,a.jsx)(r.code,{children:"true"}),", the Source gem throws an exception."]}),(0,a.jsx)(r.td,{children:"false"})]})]})]}),"\n",(0,a.jsx)(r.h3,{id:"source-example",children:"Example"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"ORC source example",src:s(77298).A+"",width:"716",height:"375"})}),"\n",(0,a.jsx)(r.h3,{id:"source-code",children:"Generated Code"}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsxs)(r.p,{children:["To see the generated source code of your project, ",(0,a.jsx)(r.a,{href:"/engineers/project-lifecycle/#review-the-code",children:"switch to the Code view"})," in the project header."]})}),"\n","\n",(0,a.jsxs)(l.A,{children:[(0,a.jsx)(c.A,{value:"py",label:"Python",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-py",children:'def read_orc(spark: SparkSession) -> DataFrame:\n    return spark.read\\\n        .format("orc")\\\n        .load("dbfs:/FileStore/Users/orc/test.orc")\n'})})}),(0,a.jsx)(c.A,{value:"scala",label:"Scala",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-scala",children:'object read_orc {\n\n  def apply(spark: SparkSession): DataFrame =\n    spark.read\n      .format("orc")\n      .load("dbfs:/FileStore/Users/orc/test.orc")\n\n}\n'})})})]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"target",children:"Target"}),"\n",(0,a.jsx)(r.p,{children:"The Target gem writes data to ORC files and allows you to optionally specify the following additional properties."}),"\n",(0,a.jsx)(r.h3,{id:"target-properties",children:"Target properties"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Property name"}),(0,a.jsx)(r.th,{children:"Description"}),(0,a.jsx)(r.th,{children:"Default"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Description"}),(0,a.jsx)(r.td,{children:"Description of your dataset."}),(0,a.jsx)(r.td,{children:"None"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Write Mode"}),(0,a.jsxs)(r.td,{children:["How to handle existing data. For a list of the possible values, see ",(0,a.jsx)(r.a,{href:"#supported-write-modes",children:"Supported write modes"}),"."]}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"error"})})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Partition Columns"}),(0,a.jsx)(r.td,{children:"List of columns to partition the ORC files by."}),(0,a.jsx)(r.td,{children:"None"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Compression Codec"}),(0,a.jsxs)(r.td,{children:["Compression codec when writing to the ORC file. ",(0,a.jsx)("br",{}),"The ORC file supports the following codecs: ",(0,a.jsx)(r.code,{children:"none"}),", ",(0,a.jsx)(r.code,{children:"snappy"}),", ",(0,a.jsx)(r.code,{children:"zlib"}),", and ",(0,a.jsx)(r.code,{children:"lzo"}),"."]}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"snappy"})})]})]})]}),"\n",(0,a.jsx)(r.h3,{id:"supported-write-modes",children:"Supported write modes"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Write mode"}),(0,a.jsx)(r.th,{children:"Description"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"error"}),(0,a.jsx)(r.td,{children:"If the data already exists, throw an exception."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"overwrite"}),(0,a.jsxs)(r.td,{children:["If the data already exists, overwrite the data with the contents of the ",(0,a.jsx)(r.code,{children:"DataFrame"}),"."]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"append"}),(0,a.jsxs)(r.td,{children:["If the data already exists, append the contents of the ",(0,a.jsx)(r.code,{children:"DataFrame"}),"."]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"ignore"}),(0,a.jsxs)(r.td,{children:["If the data already exists, do nothing with the contents of the ",(0,a.jsx)(r.code,{children:"DataFrame"}),". ",(0,a.jsx)("br",{}),"This is similar to the ",(0,a.jsx)(r.code,{children:"CREATE TABLE IF NOT EXISTS"})," clause in SQL."]})]})]})]}),"\n",(0,a.jsx)(r.h3,{id:"example-target",children:"Example"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"ORC target example",src:s(68274).A+"",width:"896",height:"469"})}),"\n",(0,a.jsx)(r.h3,{id:"target-code",children:"Generated Code"}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsxs)(r.p,{children:["To see the generated source code of your project, ",(0,a.jsx)(r.a,{href:"/engineers/project-lifecycle/#review-the-code",children:"switch to the Code view"})," in the project header."]})}),"\n",(0,a.jsxs)(l.A,{children:[(0,a.jsx)(c.A,{value:"py",label:"Python",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-py",children:'def write_orc(spark: SparkSession, in0: DataFrame):\n    in0.write\\\n        .format("orc")\\\n        .mode("overwrite")\\\n        .save("dbfs:/data/test_output.orc")\n'})})}),(0,a.jsx)(c.A,{value:"scala",label:"Scala",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-scala",children:'object write_orc {\n  def apply(spark: SparkSession, in: DataFrame): Unit =\n    in.write\n        .format("orc")\n        .mode("overwrite")\n        .save("dbfs:/data/test_output.orc")\n}\n'})})})]})]})}function x(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},49235:(e,r,s)=>{s.d(r,{A:()=>a});s(96540);var t=s(74848);function a(e){return(0,t.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.python_package_name}),(0,t.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.scala_package_name}),(0,t.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,t.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,t.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,t.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,t.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Livy"}),(0,t.jsx)("span",{className:"right",children:e.livy})]})}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]})}},65537:(e,r,s)=>{s.d(r,{A:()=>w});var t=s(96540),a=s(18215),n=s(65627),i=s(56347),l=s(50372),c=s(30604),o=s(11861),d=s(78749);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:s}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:s,attributes:t,default:a}}=e;return{value:r,label:s,attributes:t,default:a}}))}(s);return function(e){const r=(0,o.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,s])}function u(e){let{value:r,tabValues:s}=e;return s.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:s}=e;const a=(0,i.W6)(),n=function(e){let{queryString:r=!1,groupId:s}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:r,groupId:s});return[(0,c.aZ)(n),(0,t.useCallback)((e=>{if(!n)return;const r=new URLSearchParams(a.location.search);r.set(n,e),a.replace({...a.location,search:r.toString()})}),[n,a])]}function j(e){const{defaultValue:r,queryString:s=!1,groupId:a}=e,n=p(e),[i,c]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:n}))),[o,h]=x({queryString:s,groupId:a}),[j,m]=function(e){let{groupId:r}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,n]=(0,d.Dv)(s);return[a,(0,t.useCallback)((e=>{s&&n.set(e)}),[s,n])]}({groupId:a}),f=(()=>{const e=o??j;return u({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{f&&c(f)}),[f]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),m(e)}),[h,m,n]),tabValues:n}}var m=s(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(74848);function b(e){let{className:r,block:s,selectedValue:t,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,n.a_)(),d=e=>{const r=e.currentTarget,s=c.indexOf(r),a=l[s].value;a!==t&&(o(r),i(a))},h=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;r=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;r=c[s]??c[c.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},r),children:l.map((e=>{let{value:r,label:s,attributes:n}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>{c.push(e)},onKeyDown:h,onClick:d,...n,className:(0,a.A)("tabs__item",f.tabItem,n?.className,{"tabs__item--active":t===r}),children:s??r},r)}))})}function y(e){let{lazy:r,children:s,selectedValue:n}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===n));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function v(e){const r=j(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,g.jsx)(b,{...r,...e}),(0,g.jsx)(y,{...r,...e})]})}function w(e){const r=(0,m.A)();return(0,g.jsx)(v,{...e,children:h(e.children)},String(r))}},68274:(e,r,s)=>{s.d(r,{A:()=>t});const t=s.p+"assets/images/orc-target-8c534f0813a6ad460e0c157328a417b8.gif"},77298:(e,r,s)=>{s.d(r,{A:()=>t});const t=s.p+"assets/images/orc-source-817b9eb92fffac09d195741fd213450e.gif"},79329:(e,r,s)=>{s.d(r,{A:()=>i});s(96540);var t=s(18215);const a={tabItem:"tabItem_Ymn6"};var n=s(74848);function i(e){let{children:r,hidden:s,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,i),hidden:s,children:r})}}}]);