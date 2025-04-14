"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[76450],{28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>o});var s=t(96540);const a={},n=s.createContext(a);function i(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(n.Provider,{value:r},e.children)}},49235:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var s=t(74848);function a(e){return(0,s.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:e.python_package_name}),(0,s.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:e.scala_package_name}),(0,s.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,s.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,s.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,s.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,s.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Livy"}),(0,s.jsx)("span",{className:"right",children:e.livy})]})}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]})}},62043:(e,r,t)=>{t.d(r,{A:()=>s});const s=t.p+"assets/images/avro_schema_eg1-217e0799fe8eebba43d02a30cd1011a7.png"},65537:(e,r,t)=>{t.d(r,{A:()=>w});var s=t(96540),a=t(18215),n=t(65627),i=t(56347),o=t(50372),l=t(30604),d=t(11861),c=t(78749);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:t}=e;return(0,s.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:t,attributes:s,default:a}}=e;return{value:r,label:t,attributes:s,default:a}}))}(t);return function(e){const r=(0,d.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function u(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const a=(0,i.W6)(),n=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(n),(0,s.useCallback)((e=>{if(!n)return;const r=new URLSearchParams(a.location.search);r.set(n,e),a.replace({...a.location,search:r.toString()})}),[n,a])]}function x(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,n=p(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:n}))),[d,h]=m({queryString:t,groupId:a}),[x,j]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,n]=(0,c.Dv)(t);return[a,(0,s.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:a}),f=(()=>{const e=d??x;return u({value:e,tabValues:n})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!u({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),j(e)}),[h,j,n]),tabValues:n}}var j=t(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function g(e){let{className:r,block:t,selectedValue:s,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,n.a_)(),c=e=>{const r=e.currentTarget,t=l.indexOf(r),a=o[t].value;a!==s&&(d(r),i(a))},h=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},r),children:o.map((e=>{let{value:r,label:t,attributes:n}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>{l.push(e)},onKeyDown:h,onClick:c,...n,className:(0,a.A)("tabs__item",f.tabItem,n?.className,{"tabs__item--active":s===r}),children:t??r},r)}))})}function b(e){let{lazy:r,children:t,selectedValue:n}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function y(e){const r=x(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,v.jsx)(g,{...r,...e}),(0,v.jsx)(b,{...r,...e})]})}function w(e){const r=(0,j.A)();return(0,v.jsx)(y,{...e,children:h(e.children)},String(r))}},78894:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"Spark/gems/source-target/file/avro","title":"Avro","description":"Parameters and properties to read from and write to Avro files","source":"@site/docs/Spark/gems/source-target/file/avro.md","sourceDirName":"Spark/gems/source-target/file","slug":"/engineers/avro","permalink":"/prophecy-docs-staging/preview/pr-614/engineers/avro","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-614/tags/gems"},{"inline":true,"label":"file","permalink":"/prophecy-docs-staging/preview/pr-614/tags/file"},{"inline":true,"label":"avro","permalink":"/prophecy-docs-staging/preview/pr-614/tags/avro"}],"version":"current","frontMatter":{"title":"Avro","id":"avro","slug":"/engineers/avro","description":"Parameters and properties to read from and write to Avro files","tags":["gems","file","avro"]},"sidebar":"mySidebar","previous":{"title":"Source And Target","permalink":"/prophecy-docs-staging/preview/pr-614/engineers/source-target"},"next":{"title":"CSV","permalink":"/prophecy-docs-staging/preview/pr-614/engineers/csv"}}');var a=t(74848),n=t(28453),i=t(49235),o=t(65537),l=t(79329);const d={title:"Avro",id:"avro",slug:"/engineers/avro",description:"Parameters and properties to read from and write to Avro files",tags:["gems","file","avro"]},c=void 0,h={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Source",id:"source",level:2},{value:"Source properties",id:"source-properties",level:3},{value:"Schema evolution",id:"schema-evolution",level:4},{value:"Example",id:"source",level:3},{value:"Schema used in example above",id:"schema-used-in-example-above",level:4},{value:"Compiled code",id:"source-code",level:3},{value:"Target",id:"target",level:2},{value:"Target properties",id:"target-properties",level:3},{value:"Supported write modes",id:"supported-write-modes",level:3},{value:"Example",id:"target",level:3},{value:"Compiled code",id:"target-code",level:3}];function u(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.0.1+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"Not Supported"}),"\n",(0,a.jsx)(r.p,{children:"The Avro file type:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Is a row-based, open-source data serialization system."}),"\n",(0,a.jsx)(r.li,{children:"Supports schema evolution, which allows schemas to evolve over time without breaking compatibility."}),"\n",(0,a.jsx)(r.li,{children:"Stores the data in a binary format, which makes the data compact and efficient."}),"\n",(0,a.jsx)(r.li,{children:"Usually appears in big data environments, data streaming applications, and scenarios where data serialization and storage are important."}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Parameter"}),(0,a.jsx)(r.th,{children:"Tab"}),(0,a.jsx)(r.th,{children:"Description"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Location"}),(0,a.jsx)(r.td,{children:"Location"}),(0,a.jsx)(r.td,{children:"File path to read from or write to the Avro file."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Schema"}),(0,a.jsx)(r.td,{children:"Properties"}),(0,a.jsxs)(r.td,{children:["Schema to apply on the loaded data.",(0,a.jsx)("br",{}),"In the Source gem, you can define or edit the schema visually or in JSON code.",(0,a.jsx)("br",{}),"In the Target gem, you can view the schema visually or as JSON code."]})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"source",children:"Source"}),"\n",(0,a.jsx)(r.p,{children:"The Source gem reads data from Avro files and allows you to optionally specify the following additional properties."}),"\n",(0,a.jsx)(r.h3,{id:"source-properties",children:"Source properties"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Property name"}),(0,a.jsx)(r.th,{children:"Description"}),(0,a.jsx)(r.th,{children:"Default"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Description"}),(0,a.jsx)(r.td,{children:"Description of your dataset."}),(0,a.jsx)(r.td,{children:"None"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Use user-defined schema"}),(0,a.jsx)(r.td,{children:"Whether to use the schema you define."}),(0,a.jsx)(r.td,{children:"false"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Ignore files without .avro extension while reading"}),(0,a.jsxs)(r.td,{children:[(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.em,{children:"DEPRECATED"})}),". Whether to load files without the ",(0,a.jsx)(r.code,{children:".avro"})," extension. ",(0,a.jsx)("br",{}),(0,a.jsx)(r.strong,{children:"This parameter will be removed in a future release."})," ",(0,a.jsx)("br",{}),"To filter file names, use the ",(0,a.jsx)(r.code,{children:"Path Glob Filter"})," property."]}),(0,a.jsx)(r.td,{children:"true"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Recursive File Lookup"}),(0,a.jsxs)(r.td,{children:["Whether to recursively load files and disable partition inferring. If the data source explicitly specifies the ",(0,a.jsx)(r.code,{children:"partitionSpec"})," when the",(0,a.jsx)(r.code,{children:"recursiveFileLookup"})," is ",(0,a.jsx)(r.code,{children:"true"}),", the Source gem throws an exception."]}),(0,a.jsx)(r.td,{children:"false"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Path Global Filter"}),(0,a.jsxs)(r.td,{children:["Glob pattern to only include files with paths matching the pattern. The syntax follows ",(0,a.jsx)(r.a,{href:"https://hadoop.apache.org/docs/stable/api/org/apache/hadoop/fs/GlobFilter.html",children:"GlobFilter"})," and does not change the behavior of partition discovery."]}),(0,a.jsx)(r.td,{children:"None"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Modified Before"}),(0,a.jsxs)(r.td,{children:["Timestamp to only include files with modification times occurring before the time you specify. The timestamp must be in the following format: ",(0,a.jsx)(r.code,{children:"YYYY-MM-DDTHH:mm:ss"})," (e.g. 2020-06-01T13:00:00)"]}),(0,a.jsx)(r.td,{children:"None"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Modified After"}),(0,a.jsxs)(r.td,{children:["Timestamp to only include files with modification times occurring after the time you specify. The timestamp must be in the following format: ",(0,a.jsx)(r.code,{children:"YYYY-MM-DDTHH:mm:ss"})," (e.g. 2020-06-01T13:00:00)"]}),(0,a.jsx)(r.td,{children:"None"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Avro Schema"}),(0,a.jsxs)(r.td,{children:["Additional schema a user provides in JSON format. To learn more, see ",(0,a.jsx)(r.a,{href:"#schema-evolution",children:"Schema evolution"}),"."]}),(0,a.jsx)(r.td,{children:"None"})]})]})]}),"\n",(0,a.jsx)(r.h4,{id:"schema-evolution",children:"Schema evolution"}),"\n",(0,a.jsxs)(r.p,{children:["When reading an Avro file, you can set the ",(0,a.jsx)(r.code,{children:"Avro Schema"})," parameter to a newer evolved schema, which is compatible but different from the schema written to storage. The resulting ",(0,a.jsx)(r.code,{children:"DataFrame"})," follows the newer evolved schema."]}),"\n",(0,a.jsxs)(r.p,{children:["For example, if you set an evolved schema to contain one additional column with a default value, the resulting ",(0,a.jsx)(r.code,{children:"DataFrame"})," contains the new column too."]}),"\n",(0,a.jsx)(r.h3,{id:"source",children:"Example"}),"\n",(0,a.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,a.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,a.jsx)("iframe",{src:"https://user-images.githubusercontent.com/103921419/174399585-40067429-953e-4157-a5db-d80e25713d24.mp4",title:"Avro Source",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,a.jsx)(r.h4,{id:"schema-used-in-example-above",children:"Schema used in example above"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"Avro schema used",src:t(62043).A+"",width:"736",height:"492"})}),"\n",(0,a.jsx)(r.h3,{id:"source-code",children:"Compiled code"}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsxs)(r.p,{children:["To see the compiled code of your project, ",(0,a.jsx)(r.a,{href:"/engineers/pipelines#project-editor",children:"switch to the Code view"})," in the project header."]})}),"\n","\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(l.A,{value:"py",label:"Python",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-py",children:'def read_avro(spark: SparkSession) -> DataFrame:\n    return spark.read\\\n        .format("avro")\\\n        .option("ignoreExtension", True)\\\n        .option(\n          "avroSchema",\n          "{\\"type\\":\\"record\\",\\"name\\":\\"Person\\",\\"fields\\":[{\\"name\\":\\"firstname\\",\\"type\\":\\"string\\"},{\\"name\\":\\"middlename\\",\\"type\\":\\"string\\"},{\\"name\\":\\"lastname\\",\\"type\\":\\"string\\"},{\\"name\\":\\"dob_year\\",\\"type\\":\\"int\\"},{\\"name\\":\\"dob_month\\",\\"type\\":\\"int\\"},{\\"name\\":\\"gender\\",\\"type\\":\\"string\\"},{\\"name\\":\\"salary\\",\\"type\\":\\"int\\"}]}"\n        )\\\n        .load("dbfs:/FileStore/Users/abhinav/avro/test.avro")\n'})})}),(0,a.jsx)(l.A,{value:"scala",label:"Scala",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-scala",children:'object read_avro {\n\n  def apply(spark: SparkSession): DataFrame =\n    spark.read\n        .format("avro")\n        .option("ignoreExtension", true)\n        .option(\n          "avroSchema",\n          "{\\"type\\":\\"record\\",\\"name\\":\\"Person\\",\\"fields\\":[{\\"name\\":\\"firstname\\",\\"type\\":\\"string\\"},{\\"name\\":\\"middlename\\",\\"type\\":\\"string\\"},{\\"name\\":\\"lastname\\",\\"type\\":\\"string\\"},{\\"name\\":\\"dob_year\\",\\"type\\":\\"int\\"},{\\"name\\":\\"dob_month\\",\\"type\\":\\"int\\"},{\\"name\\":\\"gender\\",\\"type\\":\\"string\\"},{\\"name\\":\\"salary\\",\\"type\\":\\"int\\"}]}"\n        )\n        .load("dbfs:/FileStore/Users/abhinav/avro/test.avro")\n\n}\n'})})})]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"target",children:"Target"}),"\n",(0,a.jsx)(r.p,{children:"The Target gem writes data to Avro files and allows you to optionally specify the following additional properties."}),"\n",(0,a.jsx)(r.h3,{id:"target-properties",children:"Target properties"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Property name"}),(0,a.jsx)(r.th,{children:"Description"}),(0,a.jsx)(r.th,{children:"Default"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Description"}),(0,a.jsx)(r.td,{children:"Description of your dataset."}),(0,a.jsx)(r.td,{children:"None"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Avro Schema"}),(0,a.jsxs)(r.td,{children:["Additional schema a user provides in JSON format. You can set this parameter if the expected output Avro schema doesn't match the schema Spark converts. ",(0,a.jsx)("br",{}),"For example, the expected schema of a column is an ",(0,a.jsx)(r.code,{children:"enum"})," type, instead of a ",(0,a.jsx)(r.code,{children:"string"})," type in the default converted schema."]}),(0,a.jsx)(r.td,{children:"None"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Write Mode"}),(0,a.jsxs)(r.td,{children:["How to handle existing data. For a list of the possible values, see ",(0,a.jsx)(r.a,{href:"#supported-write-modes",children:"Supported write modes"}),"."]}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"error"})})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Compression"}),(0,a.jsxs)(r.td,{children:["Compression codec when writing to the Avro file. ",(0,a.jsx)("br",{}),"The Avro file supports the following codecs: ",(0,a.jsx)(r.code,{children:"uncompressed"}),", ",(0,a.jsx)(r.code,{children:"snappy"}),", ",(0,a.jsx)(r.code,{children:"deflate"}),", ",(0,a.jsx)(r.code,{children:"bzip2"}),", and ",(0,a.jsx)(r.code,{children:"xz"}),". ",(0,a.jsx)("br",{}),"This defaults to the value of the ",(0,a.jsx)(r.code,{children:"spark.sql.avro.compression.codec"})," parameter."]}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"snappy"})})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Partition Columns"}),(0,a.jsx)(r.td,{children:"List of columns to partition the Avro files by."}),(0,a.jsx)(r.td,{children:"None"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Record Name"}),(0,a.jsx)(r.td,{children:"Top level record name in the result."}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"topLevelRecord"})})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Record Namespace"}),(0,a.jsx)(r.td,{children:"Record namespace in the result."}),(0,a.jsx)(r.td,{children:'"" (empty string)'})]})]})]}),"\n",(0,a.jsx)(r.h3,{id:"supported-write-modes",children:"Supported write modes"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Write mode"}),(0,a.jsx)(r.th,{children:"Description"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"error"}),(0,a.jsx)(r.td,{children:"If the data already exists, throw an exception."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"overwrite"}),(0,a.jsxs)(r.td,{children:["If the data already exists, overwrite the data with the contents of the ",(0,a.jsx)(r.code,{children:"DataFrame"}),"."]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"append"}),(0,a.jsxs)(r.td,{children:["If the data already exists, append the contents of the ",(0,a.jsx)(r.code,{children:"DataFrame"}),"."]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"ignore"}),(0,a.jsxs)(r.td,{children:["If the data already exists, do nothing with the contents of the ",(0,a.jsx)(r.code,{children:"DataFrame"}),". ",(0,a.jsx)("br",{}),"This is similar to the ",(0,a.jsx)(r.code,{children:"CREATE TABLE IF NOT EXISTS"})," clause in SQL."]})]})]})]}),"\n",(0,a.jsx)(r.h3,{id:"target",children:"Example"}),"\n",(0,a.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,a.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,a.jsx)("iframe",{src:"https://user-images.githubusercontent.com/103921419/174399603-07080a2f-a52b-4feb-a029-733f947fad6c.mp4",title:"Avro Target",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,a.jsx)(r.h3,{id:"target-code",children:"Compiled code"}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsxs)(r.p,{children:["To see the compiled code of your project, ",(0,a.jsx)(r.a,{href:"/engineers/pipelines#project-editor",children:"switch to the Code view"})," in the project header."]})}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(l.A,{value:"py",label:"Python",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-py",children:'def write_avro(spark: SparkSession, in0: DataFrame):\n    in0.write\\\n        .format("avro")\\\n        .mode("overwrite")\\\n        .partitionBy("dob_year","dob_month")\\\n        .save("dbfs:/data/test_output.avro")\n'})})}),(0,a.jsx)(l.A,{value:"scala",label:"Scala",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-scala",children:'object write_avro {\n  def apply(spark: SparkSession, in: DataFrame): Unit =\n    in.write\n        .format("avro")\n        .mode("overwrite")\n        .partitionBy("dob_year","dob_month")\n        .save("dbfs:/data/test_output.avro")\n}\n'})})})]})]})}function m(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},79329:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var s=t(18215);const a={tabItem:"tabItem_Ymn6"};var n=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,i),hidden:t,children:r})}}}]);