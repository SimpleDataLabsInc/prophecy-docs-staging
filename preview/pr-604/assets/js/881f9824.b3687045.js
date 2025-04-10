"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[51275],{28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var a=r(96540);const s={},n=a.createContext(s);function i(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(n.Provider,{value:t},e.children)}},46805:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>x,frontMatter:()=>c,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"Spark/gems/source-target/catalog-table/delta","title":"Delta Table","description":"Read from or write to tables managed by a Delta table metastore","source":"@site/docs/Spark/gems/source-target/catalog-table/delta.md","sourceDirName":"Spark/gems/source-target/catalog-table","slug":"/engineers/delta-table","permalink":"/prophecy-docs-staging/preview/pr-604/engineers/delta-table","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-604/tags/gems"},{"inline":true,"label":"catalog","permalink":"/prophecy-docs-staging/preview/pr-604/tags/catalog"},{"inline":true,"label":"delta","permalink":"/prophecy-docs-staging/preview/pr-604/tags/delta"}],"version":"current","frontMatter":{"title":"Delta Table","id":"delta","slug":"/engineers/delta-table","description":"Read from or write to tables managed by a Delta table metastore","tags":["gems","catalog","delta"]},"sidebar":"mySidebar","previous":{"title":"Teradata","permalink":"/prophecy-docs-staging/preview/pr-604/engineers/teradata"},"next":{"title":"Hive Table","permalink":"/prophecy-docs-staging/preview/pr-604/engineers/hive-table"}}');var s=r(74848),n=r(28453),i=r(49235),l=r(65537),d=r(79329);const c={title:"Delta Table",id:"delta",slug:"/engineers/delta-table",description:"Read from or write to tables managed by a Delta table metastore",tags:["gems","catalog","delta"]},o=void 0,h={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Source",id:"source",level:2},{value:"Source properties",id:"source-properties",level:3},{value:"Source example",id:"source-example",level:3},{value:"Compiled code",id:"source-code",level:3},{value:"Without filter predicate",id:"without-filter-predicate",level:4},{value:"With filter predicate",id:"with-filter-predicate",level:4},{value:"Target",id:"target",level:2},{value:"Target properties",id:"target-properties",level:3},{value:"Supported write modes",id:"supported-write-modes",level:3},{value:"Target example",id:"target-example",level:3},{value:"Compiled code",id:"target-code",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.0.1+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"Not Supported"}),"\n",(0,s.jsx)(t.p,{children:"Reads from and writes to Delta tables that your execution environment's Metadata catalog manages."}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.p,{children:"Before you specify parameters and properties, select the Delta table type:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Open the Source or Target gem configuration."}),"\n",(0,s.jsxs)(t.li,{children:["On the ",(0,s.jsx)(t.strong,{children:"Type & Format"})," page, select ",(0,s.jsx)(t.strong,{children:"Catalog Table"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["On the ",(0,s.jsx)(t.strong,{children:"Properties"})," page, set the ",(0,s.jsx)(t.strong,{children:"provider"})," property to ",(0,s.jsx)(t.code,{children:"delta"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Tab"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Use Unity Catalog"}),(0,s.jsx)(t.td,{children:"Location"}),(0,s.jsx)(t.td,{children:"Whether to use a Unity catalog."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Catalog"}),(0,s.jsx)(t.td,{children:"Location"}),(0,s.jsx)(t.td,{children:"If you use a unity catalog, specify which catalog to use."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Database"}),(0,s.jsx)(t.td,{children:"Location"}),(0,s.jsx)(t.td,{children:"Name of the database to connect to."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Table"}),(0,s.jsx)(t.td,{children:"Location"}),(0,s.jsx)(t.td,{children:"Name of the table to connect to."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Use file path"}),(0,s.jsx)(t.td,{children:"Location"}),(0,s.jsx)(t.td,{children:"Whether to use a custom file path to store underlying files in the Target gem."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Schema"}),(0,s.jsx)(t.td,{children:"Properties"}),(0,s.jsxs)(t.td,{children:["Schema to apply on the loaded data.",(0,s.jsx)("br",{}),"In the Source gem, you can define or edit the schema visually or in JSON code.",(0,s.jsx)("br",{}),"In the Target gem, you can view the schema visually or as JSON code."]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"source",children:"Source"}),"\n",(0,s.jsx)(t.p,{children:"The Source gem reads data from Delta tables and allows you to optionally specify the following additional properties."}),"\n",(0,s.jsx)(t.h3,{id:"source-properties",children:"Source properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Properties"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"Description of your dataset."}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Provider"}),(0,s.jsxs)(t.td,{children:["Provider to use. ",(0,s.jsxs)(t.strong,{children:["You must set this to ",(0,s.jsx)(t.code,{children:"delta"}),"."]})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"delta"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Filter Predicate"}),(0,s.jsx)(t.td,{children:"Where clause to filter the table by."}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Read timestamp"}),(0,s.jsxs)(t.td,{children:["Time travel in milliseconds to a specific timestamp. ",(0,s.jsx)("br",{}),"This value should be between the first commit timestamp and the latest commit timestamp in the table."]}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Read version"}),(0,s.jsx)(t.td,{children:"Time travel to a specific version of the table."}),(0,s.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsxs)(t.p,{children:["You can only select ",(0,s.jsx)(t.code,{children:"Read Timestamp"})," or ",(0,s.jsx)(t.code,{children:"Read Version"}),", not both."]}),(0,s.jsx)(t.p,{children:"If you don't use a time travel option, the Source gem fetches the most recent version of each row by default."})]}),"\n",(0,s.jsxs)(t.p,{children:["To learn more about Delta time travel and its use cases, see ",(0,s.jsx)(t.a,{href:"https://databricks.com/blog/2019/02/04/introducing-delta-time-travel-for-large-scale-data-lakes.html",children:"Introducing Delta Time Travel for Large Scale Data Lakes"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"source-example",children:"Source example"}),"\n",(0,s.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,s.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,s.jsx)("iframe",{src:"https://user-images.githubusercontent.com/103921419/173573367-057f47b0-c56c-4ffd-9ceb-27bc34444b41.mp4",title:"Catalog delta source",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,s.jsx)(t.h3,{id:"source-code",children:"Compiled code"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["To see the compiled code of your project, ",(0,s.jsx)(t.a,{href:"/engineers/pipelines#project-editor",children:"switch to the Code view"})," in the project header."]})}),"\n",(0,s.jsx)(t.h4,{id:"without-filter-predicate",children:"Without filter predicate"}),"\n","\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(d.A,{value:"py",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-py",children:'def Source(spark: SparkSession) -> DataFrame:\n    return spark.read.table(f"test_db.test_table")\n'})})}),(0,s.jsx)(d.A,{value:"scala",label:"Scala",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-scala",children:'object Source {\n\n  def apply(spark: SparkSession): DataFrame = {\n    spark.read.table("test_db.test_table")\n  }\n\n}\n'})})})]}),"\n",(0,s.jsx)(t.h4,{id:"with-filter-predicate",children:"With filter predicate"}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(d.A,{value:"py",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-py",children:'def Source(spark: SparkSession) -> DataFrame:\n    return spark.sql("SELECT * FROM test_db.test_table WHERE col > 10")\n'})})}),(0,s.jsx)(d.A,{value:"scala",label:"Scala",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-scala",children:'object Source {\n\n  def apply(spark: SparkSession): DataFrame =\n    spark.sql("SELECT * FROM test_db.test_table WHERE col > 10")\n\n}\n'})})})]}),"\n",(0,s.jsx)(t.h2,{id:"target",children:"Target"}),"\n",(0,s.jsx)(t.p,{children:"The Target gem writes data to Delta tables and allows you to optionally specify the following additional properties."}),"\n",(0,s.jsx)(t.h3,{id:"target-properties",children:"Target properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"Description of your dataset."}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Provider"}),(0,s.jsxs)(t.td,{children:["Provider to use. ",(0,s.jsxs)(t.strong,{children:["You must set this to ",(0,s.jsx)(t.code,{children:"delta"}),"."]})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"delta"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Write Mode"}),(0,s.jsxs)(t.td,{children:["How to handle existing data. For a list of the possible values, see ",(0,s.jsx)(t.a,{href:"#supported-write-modes",children:"Supported write modes"}),"."]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"error"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Use insert into"}),(0,s.jsxs)(t.td,{children:["Whether to use the ",(0,s.jsx)(t.code,{children:"insertInto()"})," method to write instead of the ",(0,s.jsx)(t.code,{children:"save()"})," method."]}),(0,s.jsx)(t.td,{children:"false"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Overwrite table schema"}),(0,s.jsx)(t.td,{children:"Whether to overwrite the schema of the Delta table."}),(0,s.jsx)(t.td,{children:"false"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Merge DataFrame schema into table schema"}),(0,s.jsxs)(t.td,{children:["Whether to automatically add columns that are present in the ",(0,s.jsx)(t.code,{children:"DataFrame"})," but not in the Target table to the end of the schema as part of a write transaction."]}),(0,s.jsx)(t.td,{children:"false"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Partition Columns"}),(0,s.jsx)(t.td,{children:"List of columns to partition the Delta table table by."}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Overwrite partition predicate"}),(0,s.jsx)(t.td,{children:"Selectively overwrite only the data that satisfies the given where clause expression."}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Optimize write"}),(0,s.jsx)(t.td,{children:"Whether to optimize Spark partition sizes based on the actual data."}),(0,s.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"supported-write-modes",children:"Supported write modes"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Write mode"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"overwrite"}),(0,s.jsxs)(t.td,{children:["If the data already exists, overwrite the data with the contents of the ",(0,s.jsx)(t.code,{children:"DataFrame"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"error"}),(0,s.jsx)(t.td,{children:"If the data already exists, throw an exception."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"append"}),(0,s.jsxs)(t.td,{children:["If the data already exists, append the contents of the ",(0,s.jsx)(t.code,{children:"DataFrame"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ignore"}),(0,s.jsxs)(t.td,{children:["If the data already exists, do nothing with the contents of the ",(0,s.jsx)(t.code,{children:"DataFrame"}),". ",(0,s.jsx)("br",{}),"This is similar to the ",(0,s.jsx)(t.code,{children:"CREATE TABLE IF NOT EXISTS"})," clause in SQL."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"merge"}),(0,s.jsxs)(t.td,{children:["Use the Delta ",(0,s.jsx)(t.code,{children:"merge"})," command to insert, delete and update data. For more information, see ",(0,s.jsx)(t.a,{href:"/engineers/delta",children:"DeltaTableOperations"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"scd2 merge"}),(0,s.jsxs)(t.td,{children:["Store and manage the current and historical data over time. For more information, see ",(0,s.jsx)(t.a,{href:"/engineers/delta",children:"DeltaTableOperations"}),"."]})]})]})]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["These ",(0,s.jsx)(t.code,{children:"overwrite"}),", ",(0,s.jsx)(t.code,{children:"append"}),", ",(0,s.jsx)(t.code,{children:"ignore"}),", and ",(0,s.jsx)(t.code,{children:"error"})," write modes operate the same way as with other native Spark-supported formats such as Parquet."]})}),"\n",(0,s.jsx)(t.h3,{id:"target-example",children:"Target example"}),"\n",(0,s.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,s.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,s.jsx)("iframe",{src:"https://user-images.githubusercontent.com/103921419/173573390-2295b399-f6af-49f1-b398-dfd66072d1b3.mp4",title:"Catalog Delta target",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,s.jsx)(t.h3,{id:"target-code",children:"Compiled code"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["To see the compiled code of your project, ",(0,s.jsx)(t.a,{href:"/engineers/pipelines#project-editor",children:"switch to the Code view"})," in the project header."]})}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(d.A,{value:"py",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-py",children:'def Target(spark: SparkSession, in0: DataFrame):\n    in0.write\\\n        .format("delta")\\\n        .mode("overwrite")\\\n        .saveAsTable("test_db.test_table")\n'})})}),(0,s.jsx)(d.A,{value:"scala",label:"Scala",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-scala",children:'object Target {\n\n  def apply(spark: SparkSession, in: DataFrame): DataFrame = {\n    in.write\n      .format("delta")\n      .mode("overwrite")\n      .saveAsTable("test_db.test_table")\n  }\n\n}\n'})})})]})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},49235:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var a=r(74848);function s(e){return(0,a.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:e.python_package_name}),(0,a.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:e.scala_package_name}),(0,a.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,a.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,a.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,a.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,a.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Livy"}),(0,a.jsx)("span",{className:"right",children:e.livy})]})}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]})}},65537:(e,t,r)=>{r.d(t,{A:()=>w});var a=r(96540),s=r(18215),n=r(65627),i=r(56347),l=r(50372),d=r(30604),c=r(11861),o=r(78749);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:s}}=e;return{value:t,label:r,attributes:a,default:s}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function u(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const s=(0,i.W6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,d.aZ)(n),(0,a.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(s.location.search);t.set(n,e),s.replace({...s.location,search:t.toString()})}),[n,s])]}function j(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,n=p(e),[i,d]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:n}))),[c,h]=x({queryString:r,groupId:s}),[j,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,n]=(0,o.Dv)(r);return[s,(0,a.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:s}),b=(()=>{const e=c??j;return u({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{b&&d(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),m(e)}),[h,m,n]),tabValues:n}}var m=r(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function f(e){let{className:t,block:r,selectedValue:a,selectValue:i,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.a_)(),o=e=>{const t=e.currentTarget,r=d.indexOf(t),s=l[r].value;s!==a&&(c(t),i(s))},h=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{d.push(e)},onKeyDown:h,onClick:o,...n,className:(0,s.A)("tabs__item",b.tabItem,n?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:n}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=j(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,g.jsx)(f,{...t,...e}),(0,g.jsx)(v,{...t,...e})]})}function w(e){const t=(0,m.A)();return(0,g.jsx)(y,{...e,children:h(e.children)},String(t))}},79329:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var a=r(18215);const s={tabItem:"tabItem_Ymn6"};var n=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,i),hidden:r,children:t})}}}]);