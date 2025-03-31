"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[53193],{976:(e,r,t)=>{t.d(r,{A:()=>a});const a=t.p+"assets/images/spark-pipeline-settings-57f8518c7df28863b9d468c3f6d9c13d.png"},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var a=t(96540);const s={},n=a.createContext(s);function i(e){const r=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(n.Provider,{value:r},e.children)}},49235:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var a=t(74848);function s(e){return(0,a.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/extensibility/package-hub/",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:e.python_package_name}),(0,a.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/extensibility/package-hub/",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:e.scala_package_name}),(0,a.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,a.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,a.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,a.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,a.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Livy"}),(0,a.jsx)("span",{className:"right",children:e.livy})]})}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]})}},62709:(e,r,t)=>{t.d(r,{A:()=>a});const a=t.p+"assets/images/open-pipeline-settings-7f4727f13dde8416efbd6a7ab37186c5.png"},65537:(e,r,t)=>{t.d(r,{A:()=>k});var a=t(96540),s=t(18215),n=t(65627),i=t(56347),l=t(50372),c=t(30604),o=t(11861),d=t(78749);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:t,attributes:a,default:s}}=e;return{value:r,label:t,attributes:a,default:s}}))}(t);return function(e){const r=(0,o.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function u(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function g(e){let{queryString:r=!1,groupId:t}=e;const s=(0,i.W6)(),n=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,c.aZ)(n),(0,a.useCallback)((e=>{if(!n)return;const r=new URLSearchParams(s.location.search);r.set(n,e),s.replace({...s.location,search:r.toString()})}),[n,s])]}function m(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,n=p(e),[i,c]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:n}))),[o,h]=g({queryString:t,groupId:s}),[m,x]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,n]=(0,d.Dv)(t);return[s,(0,a.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:s}),j=(()=>{const e=o??m;return u({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{j&&c(j)}),[j]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),x(e)}),[h,x,n]),tabValues:n}}var x=t(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function f(e){let{className:r,block:t,selectedValue:a,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,n.a_)(),d=e=>{const r=e.currentTarget,t=c.indexOf(r),s=l[t].value;s!==a&&(o(r),i(s))},h=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},r),children:l.map((e=>{let{value:r,label:t,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>{c.push(e)},onKeyDown:h,onClick:d,...n,className:(0,s.A)("tabs__item",j.tabItem,n?.className,{"tabs__item--active":a===r}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:n}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function y(e){const r=m(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,b.jsx)(f,{...r,...e}),(0,b.jsx)(v,{...r,...e})]})}function k(e){const r=(0,x.A)();return(0,b.jsx)(y,{...e,children:h(e.children)},String(r))}},69881:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>d,default:()=>g,frontMatter:()=>o,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"Spark/gems/source-target/catalog-table/iceberg","title":"Iceberg","description":"Iceberg","source":"@site/docs/Spark/gems/source-target/catalog-table/iceberg.md","sourceDirName":"Spark/gems/source-target/catalog-table","slug":"/Spark/gems/source-target/catalog-table/iceberg","permalink":"/prophecy-docs-staging/preview/pr-595/Spark/gems/source-target/catalog-table/iceberg","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-595/tags/gems"},{"inline":true,"label":"file","permalink":"/prophecy-docs-staging/preview/pr-595/tags/file"},{"inline":true,"label":"iceberg","permalink":"/prophecy-docs-staging/preview/pr-595/tags/iceberg"}],"version":"current","frontMatter":{"title":"Iceberg","id":"iceberg","description":"Iceberg","tags":["gems","file","iceberg"]},"sidebar":"mySidebar","previous":{"title":"Hive Table","permalink":"/prophecy-docs-staging/preview/pr-595/Spark/gems/source-target/catalog-table/hive"},"next":{"title":"Lookup","permalink":"/prophecy-docs-staging/preview/pr-595/Spark/gems/source-target/lookup"}}');var s=t(74848),n=t(28453),i=t(49235),l=t(65537),c=t(79329);const o={title:"Iceberg",id:"iceberg",description:"Iceberg",tags:["gems","file","iceberg"]},d=void 0,h={},p=[{value:"Required Settings",id:"required-settings",level:2},{value:"Environment Setting",id:"environment-setting",level:3},{value:"Initialization Settings",id:"initialization-settings",level:3},{value:"Runtime Settings",id:"runtime-settings",level:3},{value:"Source",id:"source",level:2},{value:"Source Parameters",id:"source-parameters",level:3},{value:"Example",id:"source-example",level:3},{value:"Generated Code",id:"source-code",level:3},{value:"Target",id:"target",level:2},{value:"Target Parameters",id:"target-parameters",level:3},{value:"Supported Write Modes",id:"supported-write-modes",level:4},{value:"Target Example",id:"target-example",level:3},{value:"Generated Code",id:"target-code",level:3}];function u(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.2.15+",scala_package_name:"",scala_package_version:"",scala_lib:"",python_lib:"",uc_single:"Not Supported",uc_shared:"Not Supported",livy:"Not Supported"}),"\n",(0,s.jsx)(r.p,{children:"Reads and writes Iceberg tables, including Iceberg Merge operations and Time travel."}),"\n",(0,s.jsx)(r.h2,{id:"required-settings",children:"Required Settings"}),"\n",(0,s.jsx)(r.p,{children:"Before you can use Iceberg source gems, you must configure some required settings at the environment, initialization, and runtime stages."}),"\n",(0,s.jsx)(r.h3,{id:"environment-setting",children:"Environment Setting"}),"\n",(0,s.jsx)(r.p,{children:"You must configure a required Spark JAR dependency in your fabric environment."}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"JAR dependency"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Package: ",(0,s.jsx)(r.code,{children:"https://repo1.maven.org/maven2/org/apache/iceberg/iceberg-spark-runtime-3.3_2.12/1.5.0/iceberg-spark-runtime-3.3_2.12-1.5.0.jar"})]}),"\n"]}),"\n",(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsx)(r.p,{children:"The JAR dependency is available on your compute platform wherever Spark is installed, such as on your Databricks cluster, EMR, or Dataproc."})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"initialization-settings",children:"Initialization Settings"}),"\n",(0,s.jsx)(r.p,{children:"You must configure the following Spark session property during the Spark session initialization."}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Spark session property:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Key - ",(0,s.jsx)(r.code,{children:"spark.sql.extensions"})]}),"\n",(0,s.jsxs)(r.li,{children:["Value - ",(0,s.jsx)(r.code,{children:"org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions"})]}),"\n"]}),"\n",(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsxs)(r.p,{children:["This can be done during cluster bootstrap. For example, you can set ",(0,s.jsx)(r.code,{children:'--properties "spark:spark.sql.extensions=org.apache.iceberg.spark.extensions.IcebergSparkSessionExtentions" \\'})," with your create clusters command."]})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"runtime-settings",children:"Runtime Settings"}),"\n",(0,s.jsx)(r.p,{children:"You must configure the following Spark conf properties, which can be done during the Spark session runtime."}),"\n",(0,s.jsx)(r.p,{children:"These properties allow you to configure multiple catalogs and your respective metastores for Iceberg tables and data management. You can configure Hadoop and Hive as catalogs."}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Spark conf properties"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Configure Hadoop as catalog"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"spark.sql.catalog.<catalog_name>=org.apache.iceberg.spark.SparkCatalog"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"spark.sql.catalog.<catalog_name>.type=hadoop"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"spark.sql.catalog.<catalog_name>.warehouse=gs://<bucket>/<folder_1>/<folder_1>/"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Configure Hive as catalog"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"spark.sql.catalog.<catalog_name>=org.apache.iceberg.spark.SparkCatalog"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"spark.sql.catalog.<catalog_name>.type=hive"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"spark.sql.catalog.<catalog_name>.warehouse=gs://<bucket>/<folder_1>/<folder_1>/"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"spark.sql.catalog.<catalog_name>.uri=thrift://10.91.64.30:9083"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsxs)(r.p,{children:["You can set the default catalog by using ",(0,s.jsx)(r.code,{children:"spark.default.catalog=<catalog_name>"}),"."]})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"To configure the Spark conf properties, follow these steps:"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Click ",(0,s.jsx)(r.strong,{children:"..."})," at the top of the Prophecy canvas, and then click ",(0,s.jsx)(r.strong,{children:"Pipeline Settings"})," under Manage."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"Open Pipeline Settings",src:t(62709).A+"",width:"2620",height:"1509"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"On the Spark dialog, under Spark Configuration, add the Spark conf properties."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"Spark Pipeline Settings",src:t(976).A+"",width:"2620",height:"1509"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"source",children:"Source"}),"\n",(0,s.jsx)(r.h3,{id:"source-parameters",children:"Source Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Required"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Catalog Name"}),(0,s.jsx)(r.td,{children:"Any configured Hadoop/Hive catalog name"}),(0,s.jsx)(r.td,{children:"True (If any default catalog is not configured in Spark runtime properties.)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Schema Name (Database Name)"}),(0,s.jsx)(r.td,{children:"Name of the database"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Table Name"}),(0,s.jsx)(r.td,{children:"Name of the table"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Read Timestamp"}),(0,s.jsx)(r.td,{children:"Time travel to a specific timestamp (value should be in milliseconds)"}),(0,s.jsx)(r.td,{children:"False"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Read Snapshot"}),(0,s.jsx)(r.td,{children:"Time travel to a specific version of the table (value should be a snapshot ID)"}),(0,s.jsx)(r.td,{children:"False"})]})]})]}),"\n",(0,s.jsxs)(r.admonition,{type:"note",children:[(0,s.jsx)(r.p,{children:"For time travel on Iceberg tables:"}),(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["Only ",(0,s.jsx)(r.code,{children:"Read Timestamp"})," ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.em,{children:"OR"})})," ",(0,s.jsx)(r.code,{children:"Read Snapshot"})," can be selected, not both."]}),"\n",(0,s.jsx)(r.li,{children:"Timestamp should be between the first commit timestamp and the latest commit timestamp in the table."}),"\n",(0,s.jsx)(r.li,{children:"Snapshot needs to be a snapshot ID."}),"\n"]}),(0,s.jsx)(r.p,{children:"By default most recent version of each row is fetched if no time travel option is used."})]}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsxs)(r.p,{children:["To read more about Iceberg time travel and its use cases, see the ",(0,s.jsx)(r.a,{href:"https://iceberg.apache.org/docs/nightly/hive/?h=time#timetravel",children:"Apache Iceberg docs"}),"."]})}),"\n",(0,s.jsx)(r.h3,{id:"source-example",children:"Example"}),"\n",(0,s.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,s.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,s.jsx)("iframe",{src:"https://fast.wistia.net/embed/iframe/b1vt6gv6bl?seo=false?videoFoam=true",title:"Iceberg source example",allow:"autoplay; fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,s.jsx)("script",{src:"https://fast.wistia.net/assets/external/E-v1.js",async:!0}),"\n",(0,s.jsx)(r.h3,{id:"source-code",children:"Generated Code"}),"\n","\n",(0,s.jsx)(l.A,{children:(0,s.jsx)(c.A,{value:"py",label:"Python",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-py",children:'def iceberg_read(spark: SparkSession) -> DataFrame:\n    return spark.read.format("iceberg").load("`hadoop_catalog_1`.`prophecy_doc_demo`.`employees_test`")\n'})})})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"target",children:"Target"}),"\n",(0,s.jsx)(r.h3,{id:"target-parameters",children:"Target Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Required"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Catalog Type"}),(0,s.jsx)(r.td,{children:"File path to write the Iceberg table to"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Catalog Name"}),(0,s.jsx)(r.td,{children:"Any configured Hadoop/Hive catalog name"}),(0,s.jsx)(r.td,{children:"True (If any default catalog is not configured in Spark runtime properties.)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Schema Name (Database Name)"}),(0,s.jsx)(r.td,{children:"Name of the database"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Table Name"}),(0,s.jsx)(r.td,{children:"Name of the table"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"File Location"}),(0,s.jsx)(r.td,{children:"External file path to store data (Only applicable if Catalog type is Hive.)"}),(0,s.jsx)(r.td,{children:"False"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Partition Columns"}),(0,s.jsx)(r.td,{children:"List of columns to partition the Iceberg table by (Provide it during createOrReplace write mode to leverage overwritePartitions write mode in future.)"}),(0,s.jsx)(r.td,{children:"False"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Merge schema"}),(0,s.jsx)(r.td,{children:"If true, then any columns that are present in the DataFrame but not in the target table are automatically added on to the end of the schema as part of a write transaction."}),(0,s.jsx)(r.td,{children:"False"})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"supported-write-modes",children:"Supported Write Modes"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Write Mode"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"overwrite"}),(0,s.jsx)(r.td,{children:"If data already exists, overwrite with the contents of the DataFrame"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"append"}),(0,s.jsx)(r.td,{children:"If data already exists, append the contents of the DataFrame"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ignore"}),(0,s.jsxs)(r.td,{children:["If data already exists, do nothing with the contents of the DataFrame. This is similar to a ",(0,s.jsx)(r.code,{children:"CREATE TABLE IF NOT EXISTS"})," in SQL."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"error"}),(0,s.jsx)(r.td,{children:"If data already exists, throw an exception."})]})]})]}),"\n",(0,s.jsx)(r.p,{children:"Among these write modes overwrite and append works the same way as in case of parquet file writes."}),"\n",(0,s.jsx)(r.h3,{id:"target-example",children:"Target Example"}),"\n",(0,s.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,s.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,s.jsx)("iframe",{src:"https://fast.wistia.net/embed/iframe/8j80hc4k1e?seo=false?videoFoam=true",title:"Iceberg-target-example",allow:"autoplay; fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,s.jsx)("script",{src:"https://fast.wistia.net/assets/external/E-v1.js",async:!0}),"\n",(0,s.jsx)(r.h3,{id:"target-code",children:"Generated Code"}),"\n",(0,s.jsx)(l.A,{children:(0,s.jsx)(c.A,{value:"py",label:"Python",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-py",children:'def iceberg_write(spark: SparkSession, in0: DataFrame):\n    df1 = in0.writeTo("`hadoop_catalog_1`.`prophecy_doc_demo`.`employees_test`")\n    df2 = df1.using("iceberg")\n    df3 = df2.partitionedBy("Department")\n    df4 = df3.tableProperty("write.spark.accept-any-schema", "true")\n    df4.createOrReplace()\n'})})})})]})}function g(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},79329:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var a=t(18215);const s={tabItem:"tabItem_Ymn6"};var n=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,i),hidden:t,children:r})}}}]);