"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[42685],{28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var s=t(96540);const a={},n=s.createContext(a);function i(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(n.Provider,{value:r},e.children)}},49005:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"Spark/gems/source-target/file/parquet","title":"Parquet","description":"Parameters and properties to read from and write to Parquet files","source":"@site/docs/Spark/gems/source-target/file/parquet.md","sourceDirName":"Spark/gems/source-target/file","slug":"/engineers/parquet","permalink":"/prophecy-docs-staging/preview/pr-593/engineers/parquet","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-593/tags/gems"},{"inline":true,"label":"file","permalink":"/prophecy-docs-staging/preview/pr-593/tags/file"},{"inline":true,"label":"parquet","permalink":"/prophecy-docs-staging/preview/pr-593/tags/parquet"}],"version":"current","frontMatter":{"title":"Parquet","id":"parquet","slug":"/engineers/parquet","description":"Parameters and properties to read from and write to Parquet files","tags":["gems","file","parquet"]},"sidebar":"mySidebar","previous":{"title":"ORC","permalink":"/prophecy-docs-staging/preview/pr-593/engineers/orc"},"next":{"title":"Seed","permalink":"/prophecy-docs-staging/preview/pr-593/engineers/seed"}}');var a=t(74848),n=t(28453),i=t(49235),l=t(65537),o=t(79329);const c={title:"Parquet",id:"parquet",slug:"/engineers/parquet",description:"Parameters and properties to read from and write to Parquet files",tags:["gems","file","parquet"]},d=void 0,h={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Source",id:"source",level:2},{value:"Source properties",id:"source-properties",level:3},{value:"Supported Int96 rebase modes",id:"supported-int96-rebase-modes",level:3},{value:"Supported Datetime rebase modes",id:"supported-datetime-rebase-modes",level:3},{value:"Example",id:"source-example",level:3},{value:"Generated Code",id:"source-code",level:3},{value:"Target",id:"target",level:2},{value:"Target properties",id:"target-properties",level:3},{value:"Supported write modes",id:"supported-write-modes",level:3},{value:"Example",id:"target",level:3},{value:"Generated Code",id:"target-code",level:3}];function u(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.0.1+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"3.2.0+"}),"\n",(0,a.jsx)(r.p,{children:"The Parquet file type:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Is an open-source columnar file format designed for efficient data storage and retrieval."}),"\n",(0,a.jsx)(r.li,{children:"Handles large volumes of data by supporting complex predicate pushdown, nested schemas, and a wide variety of column encoding types."}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Parameter"}),(0,a.jsx)(r.th,{children:"Tab"}),(0,a.jsx)(r.th,{children:"Description"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Location"}),(0,a.jsx)(r.td,{children:"Location"}),(0,a.jsx)(r.td,{children:"File path to read from or write to the Parquet file."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Schema"}),(0,a.jsx)(r.td,{children:"Properties"}),(0,a.jsxs)(r.td,{children:["Schema to apply on the loaded data.",(0,a.jsx)("br",{}),"In the Source gem, you can define or edit the schema visually or in JSON code.",(0,a.jsx)("br",{}),"In the Target gem, you can view the schema visually or as JSON code."]})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"source",children:"Source"}),"\n",(0,a.jsx)(r.p,{children:"The Source gem reads data from Parquet files and allows you to optionally specify the following additional properties."}),"\n",(0,a.jsx)(r.h3,{id:"source-properties",children:"Source properties"}),"\n",(0,a.jsxs)(r.p,{children:["| Property name           | Description                                                                                                                                                                                                                                                              | Default                                                               |\n| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- | --- |\n| Description             | Description of your dataset.                                                                                                                                                                                                                                             | None                                                                  |\n| Use user-defined schema | Whether to use the schema you define.                                                                                                                                                                                                                                    | false                                                                 |\n| Merge schema            | Whether the Target gem should merge schemas from all the Parquet part-files collected. This overrides ",(0,a.jsx)(r.code,{children:"spark.sql.parquet.mergeSchema"}),".                                                                                                                                   | (value of ",(0,a.jsx)(r.code,{children:"spark.sql."}),(0,a.jsx)("br",{}),(0,a.jsx)(r.code,{children:"parquet."}),(0,a.jsx)("br",{}),(0,a.jsx)(r.code,{children:"mergeSchema"}),")              |     |\n| Datetime Rebase Mode    | Specify the rebasing mode for the values of the DATE, TIMESTAMP_MILLIS, TIMESTAMP_MICROS logical types from the Julian to Proleptic Gregorian calendar. ",(0,a.jsx)("br",{}),"For a list of the possible values, see ",(0,a.jsx)(r.a,{href:"#supported-datetime-rebase-modes",children:"Supported Datetime rebase modes"}),". | (value of ",(0,a.jsx)(r.code,{children:"spark.sql."}),(0,a.jsx)("br",{}),(0,a.jsx)(r.code,{children:"parquet"}),(0,a.jsx)("br",{}),(0,a.jsx)(r.code,{children:".datetimeRebaseModeInRead"}),") |\n| Int96 Rebase Mode       | Specify the rebasing mode for INT96 timestamps from the Julian to Proleptic Gregorian calendar. For a list of the possible values, see ",(0,a.jsx)(r.a,{href:"#supported-int96-rebase-modes",children:"Supported Int96 rebase modes"}),".                                                                    | (value of ",(0,a.jsx)(r.code,{children:"spark.sql."}),(0,a.jsx)("br",{}),(0,a.jsx)(r.code,{children:"parquet"}),(0,a.jsx)("br",{}),(0,a.jsx)(r.code,{children:".int96RebaseModeInRead"}),")    |\n| Recursive File Lookup   | Whether to recursively load files and disable partition inferring. If the data source explicitly specifies the ",(0,a.jsx)(r.code,{children:"partitionSpec"})," when the",(0,a.jsx)(r.code,{children:"recursiveFileLookup"})," is ",(0,a.jsx)(r.code,{children:"true"}),", the Source gem throws an exception.                                                              | false                                                                 |\n| Path Global Filter      | Glob pattern to only include files with paths matching the pattern. The syntax follows ",(0,a.jsx)(r.a,{href:"https://hadoop.apache.org/docs/stable/api/org/apache/hadoop/fs/GlobFilter.html",children:"GlobFilter"})," and does not change the behavior of partition discovery.                             | None                                                                  |\n| Modified Before         | Timestamp to only include files with modification times occurring before the time you specify. The timestamp must be in the following form: YYYY-MM-DDTHH:mm",":ss"," (e.g. 2020-06-01T13:00:00).                                                                              | None                                                                  |\n| Modified After          | Timestamp to only include files with modification times occurring after the time you specify. The timestamp must be in the following form: YYYY-MM-DDTHH:mm",":ss"," (e.g. 2020-06-01T13:00:00).                                                                               | None                                                                  |"]}),"\n",(0,a.jsx)(r.h3,{id:"supported-int96-rebase-modes",children:"Supported Int96 rebase modes"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Int96 rebase mode"}),(0,a.jsx)(r.th,{children:"Description"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"EXCEPTION"}),(0,a.jsx)(r.td,{children:"Fails in reads of ancient INT96 timestamps that are ambiguous between two calendars."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"CORRECTED"}),(0,a.jsx)(r.td,{children:"Loads INT96 timestamps without rebasing."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"LEGACY"}),(0,a.jsx)(r.td,{children:"Rebases ancient INT96 timestamps from the Julian to Proleptic Gregorian."})]})]})]}),"\n",(0,a.jsx)(r.h3,{id:"supported-datetime-rebase-modes",children:"Supported Datetime rebase modes"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Datetime rebase mode"}),(0,a.jsx)(r.th,{children:"Description"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"EXCEPTION"}),(0,a.jsx)(r.td,{children:"Fails in reads of ancient dates and timestamps that are ambiguous between two calendars."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"CORRECTED"}),(0,a.jsx)(r.td,{children:"Loads dates and timestamps without rebasing."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"LEGACY"}),(0,a.jsx)(r.td,{children:"Rebases ancient dates and timestamps from the Julian to Proleptic Gregorian."})]})]})]}),"\n",(0,a.jsx)(r.h3,{id:"source-example",children:"Example"}),"\n",(0,a.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,a.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,a.jsx)("iframe",{src:"https://user-images.githubusercontent.com/103921419/175030738-4c53b5c9-73e7-46c7-9fdc-c49048f78572.mp4",title:"Parquet Source",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,a.jsx)(r.h3,{id:"source-code",children:"Generated Code"}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsxs)(r.p,{children:["To see the generated source code of your project, ",(0,a.jsx)(r.a,{href:"/engineers/project-lifecycle/#review-the-code",children:"switch to the Code view"})," in the project header."]})}),"\n","\n",(0,a.jsxs)(l.A,{children:[(0,a.jsx)(o.A,{value:"py",label:"Python",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-py",children:'def read_parquet(spark: SparkSession) -> DataFrame:\n    return spark.read\\\n        .format("parquet")\\\n        .option("mergeSchema", True)\\\n        .load("dbfs:/FileStore/Users/parquet/test.parquet")\n'})})}),(0,a.jsx)(o.A,{value:"scala",label:"Scala",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-scala",children:'object read_parquet {\n\n  def apply(spark: SparkSession): DataFrame =\n    spark.read\n        .format("parquet")\n        .option("mergeSchema", true)\n        .load("dbfs:/FileStore/Users/parquet/test.parquet")\n\n}\n'})})})]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"target",children:"Target"}),"\n",(0,a.jsx)(r.p,{children:"The Target gem writes data to Parquet files and allows you to optionally specify the following additional properties."}),"\n",(0,a.jsx)(r.h3,{id:"target-properties",children:"Target properties"}),"\n",(0,a.jsxs)(r.p,{children:["| Property name     | Description                                                                                                                                                                                                                                                | Default  |\n| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---- |\n| Description       | Description of your dataset.                                                                                                                                                                                                                               | None     |\n| Partition Columns | List of columns to partition the Parquet file by.                                                                                                                                                                                                          |          | None |\n| Compression Codec | Compression codec when writing to the Parquet file. ",(0,a.jsx)("br",{}),"The Parquet file supports the following codecs: ",(0,a.jsx)(r.code,{children:"none"}),", ",(0,a.jsx)(r.code,{children:"uncompressed"}),", ",(0,a.jsx)(r.code,{children:"gzip"}),", ",(0,a.jsx)(r.code,{children:"lz4"}),", ",(0,a.jsx)(r.code,{children:"snappy"}),", ",(0,a.jsx)(r.code,{children:"lzo"}),", ",(0,a.jsx)(r.code,{children:"brotli"}),", and ",(0,a.jsx)(r.code,{children:"zstd"}),". This overrides the ",(0,a.jsx)(r.code,{children:"spark.sql.parquet.compression.codec"})," parameter. | ",(0,a.jsx)(r.code,{children:"snappy"})," |\n| Write Mode        | How to handle existing data. For a list of the possible values, see ",(0,a.jsx)(r.a,{href:"#supported-write-modes",children:"Supported write modes"}),".                                                                                                                                       | ",(0,a.jsx)(r.code,{children:"error"}),"  |"]}),"\n",(0,a.jsx)(r.h3,{id:"supported-write-modes",children:"Supported write modes"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Write mode"}),(0,a.jsx)(r.th,{children:"Description"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"error"}),(0,a.jsx)(r.td,{children:"If the data already exists, throw an exception."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"overwrite"}),(0,a.jsxs)(r.td,{children:["If the data already exists, overwrite the data with the contents of the ",(0,a.jsx)(r.code,{children:"DataFrame"}),"."]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"append"}),(0,a.jsxs)(r.td,{children:["If the data already exists, append the contents of the ",(0,a.jsx)(r.code,{children:"DataFrame"}),"."]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"ignore"}),(0,a.jsxs)(r.td,{children:["If the data already exists, do nothing with the contents of the ",(0,a.jsx)(r.code,{children:"DataFrame"}),". ",(0,a.jsx)("br",{}),"This is similar to the ",(0,a.jsx)(r.code,{children:"CREATE TABLE IF NOT EXISTS"})," clause in SQL."]})]})]})]}),"\n",(0,a.jsx)(r.h3,{id:"target",children:"Example"}),"\n",(0,a.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,a.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,a.jsx)("iframe",{src:"https://user-images.githubusercontent.com/103921419/175030713-9de9d38a-c145-42e9-8411-baa44a70d0d0.mp4",title:"Parquet Target",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,a.jsx)(r.h3,{id:"target-code",children:"Generated Code"}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsxs)(r.p,{children:["To see the generated source code of your project, ",(0,a.jsx)(r.a,{href:"/engineers/project-lifecycle/#review-the-code",children:"switch to the Code view"})," in the project header."]})}),"\n",(0,a.jsxs)(l.A,{children:[(0,a.jsx)(o.A,{value:"py",label:"Python",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-py",children:'def write_parquet(spark: SparkSession, in0: DataFrame):\n    in0.write\\\n        .format("parquet")\\\n        .mode("overwrite")\\\n        .save("dbfs:/data/test_output.parquet")\n'})})}),(0,a.jsx)(o.A,{value:"scala",label:"Scala",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-scala",children:'object write_parquet {\n  def apply(spark: SparkSession, in: DataFrame): Unit =\n    in.write\n        .format("parquet")\n        .mode("overwrite")\n        .save("dbfs:/data/test_output.parquet")\n}\n'})})})]})]})}function m(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},49235:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var s=t(74848);function a(e){return(0,s.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:e.python_package_name}),(0,s.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:e.scala_package_name}),(0,s.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,s.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,s.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,s.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,s.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Livy"}),(0,s.jsx)("span",{className:"right",children:e.livy})]})}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]})}},65537:(e,r,t)=>{t.d(r,{A:()=>w});var s=t(96540),a=t(18215),n=t(65627),i=t(56347),l=t(50372),o=t(30604),c=t(11861),d=t(78749);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:t}=e;return(0,s.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:t,attributes:s,default:a}}=e;return{value:r,label:t,attributes:s,default:a}}))}(t);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function u(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const a=(0,i.W6)(),n=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,o.aZ)(n),(0,s.useCallback)((e=>{if(!n)return;const r=new URLSearchParams(a.location.search);r.set(n,e),a.replace({...a.location,search:r.toString()})}),[n,a])]}function x(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,n=p(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:n}))),[c,h]=m({queryString:t,groupId:a}),[x,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,n]=(0,d.Dv)(t);return[a,(0,s.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:a}),j=(()=>{const e=c??x;return u({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{j&&o(j)}),[j]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!u({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),f(e)}),[h,f,n]),tabValues:n}}var f=t(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function g(e){let{className:r,block:t,selectedValue:s,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.a_)(),d=e=>{const r=e.currentTarget,t=o.indexOf(r),a=l[t].value;a!==s&&(c(r),i(a))},h=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},r),children:l.map((e=>{let{value:r,label:t,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>{o.push(e)},onKeyDown:h,onClick:d,...n,className:(0,a.A)("tabs__item",j.tabItem,n?.className,{"tabs__item--active":s===r}),children:t??r},r)}))})}function y(e){let{lazy:r,children:t,selectedValue:n}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function v(e){const r=x(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,b.jsx)(g,{...r,...e}),(0,b.jsx)(y,{...r,...e})]})}function w(e){const r=(0,f.A)();return(0,b.jsx)(v,{...e,children:h(e.children)},String(r))}},79329:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var s=t(18215);const a={tabItem:"tabItem_Ymn6"};var n=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,i),hidden:t,children:r})}}}]);