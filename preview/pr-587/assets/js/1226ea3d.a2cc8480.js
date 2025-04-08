"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[53193],{976:(e,r,t)=>{t.d(r,{A:()=>s});const s=t.p+"assets/images/spark-pipeline-settings-57f8518c7df28863b9d468c3f6d9c13d.png"},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var s=t(96540);const a={},n=s.createContext(a);function i(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(n.Provider,{value:r},e.children)}},49235:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var s=t(74848);function a(e){return(0,s.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:e.python_package_name}),(0,s.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:e.scala_package_name}),(0,s.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,s.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,s.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,s.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,s.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Livy"}),(0,s.jsx)("span",{className:"right",children:e.livy})]})}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]})}},62709:(e,r,t)=>{t.d(r,{A:()=>s});const s=t.p+"assets/images/open-pipeline-settings-7f4727f13dde8416efbd6a7ab37186c5.png"},65537:(e,r,t)=>{t.d(r,{A:()=>w});var s=t(96540),a=t(18215),n=t(65627),i=t(56347),l=t(50372),o=t(30604),c=t(11861),d=t(78749);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:t}=e;return(0,s.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:t,attributes:s,default:a}}=e;return{value:r,label:t,attributes:s,default:a}}))}(t);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function u(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function g(e){let{queryString:r=!1,groupId:t}=e;const a=(0,i.W6)(),n=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,o.aZ)(n),(0,s.useCallback)((e=>{if(!n)return;const r=new URLSearchParams(a.location.search);r.set(n,e),a.replace({...a.location,search:r.toString()})}),[n,a])]}function x(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,n=p(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:n}))),[c,h]=g({queryString:t,groupId:a}),[x,m]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,n]=(0,d.Dv)(t);return[a,(0,s.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:a}),j=(()=>{const e=c??x;return u({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{j&&o(j)}),[j]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!u({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),m(e)}),[h,m,n]),tabValues:n}}var m=t(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function f(e){let{className:r,block:t,selectedValue:s,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.a_)(),d=e=>{const r=e.currentTarget,t=o.indexOf(r),a=l[t].value;a!==s&&(c(r),i(a))},h=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},r),children:l.map((e=>{let{value:r,label:t,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>{o.push(e)},onKeyDown:h,onClick:d,...n,className:(0,a.A)("tabs__item",j.tabItem,n?.className,{"tabs__item--active":s===r}),children:t??r},r)}))})}function y(e){let{lazy:r,children:t,selectedValue:n}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function v(e){const r=x(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,b.jsx)(f,{...r,...e}),(0,b.jsx)(y,{...r,...e})]})}function w(e){const r=(0,m.A)();return(0,b.jsx)(v,{...e,children:h(e.children)},String(r))}},69881:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"Spark/gems/source-target/catalog-table/iceberg","title":"Iceberg","description":"Read from or write to tables managed by Iceberg","source":"@site/docs/Spark/gems/source-target/catalog-table/iceberg.md","sourceDirName":"Spark/gems/source-target/catalog-table","slug":"/engineers/iceberg","permalink":"/prophecy-docs-staging/preview/pr-587/engineers/iceberg","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-587/tags/gems"},{"inline":true,"label":"file","permalink":"/prophecy-docs-staging/preview/pr-587/tags/file"},{"inline":true,"label":"iceberg","permalink":"/prophecy-docs-staging/preview/pr-587/tags/iceberg"}],"version":"current","frontMatter":{"title":"Iceberg","id":"iceberg","slug":"/engineers/iceberg","description":"Read from or write to tables managed by Iceberg","tags":["gems","file","iceberg"]},"sidebar":"mySidebar","previous":{"title":"Hive Table","permalink":"/prophecy-docs-staging/preview/pr-587/engineers/hive-table"},"next":{"title":"Lookup","permalink":"/prophecy-docs-staging/preview/pr-587/engineers/lookup"}}');var a=t(74848),n=t(28453),i=t(49235),l=t(65537),o=t(79329);const c={title:"Iceberg",id:"iceberg",slug:"/engineers/iceberg",description:"Read from or write to tables managed by Iceberg",tags:["gems","file","iceberg"]},d=void 0,h={},p=[{value:"Required Settings",id:"required-settings",level:2},{value:"Environment Setting",id:"environment-setting",level:3},{value:"Initialization Settings",id:"initialization-settings",level:3},{value:"Runtime Settings",id:"runtime-settings",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Source",id:"source",level:2},{value:"Source properties",id:"source-properties",level:3},{value:"Example",id:"source-example",level:3},{value:"Compiled code",id:"source-code",level:3},{value:"Target",id:"target",level:2},{value:"Target properties",id:"target-properties",level:3},{value:"Supported write modes",id:"supported-write-modes",level:3},{value:"Target Example",id:"target-example",level:3},{value:"Compiled code",id:"target-code",level:3}];function u(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.2.15+",scala_package_name:"",scala_package_version:"",scala_lib:"",python_lib:"",uc_single:"Not Supported",uc_shared:"Not Supported",livy:"Not Supported"}),"\n",(0,a.jsx)(r.p,{children:"Reads from and writes to Iceberg tables, including Iceberg merge operations and time travel."}),"\n",(0,a.jsx)(r.h2,{id:"required-settings",children:"Required Settings"}),"\n",(0,a.jsx)(r.p,{children:"To use the Source gem with the Iceberg catalog table type, you must configure the following required settings at the environment, initialization, and runtime stages."}),"\n",(0,a.jsx)(r.h3,{id:"environment-setting",children:"Environment Setting"}),"\n",(0,a.jsx)(r.p,{children:"Configure the following Spark JAR dependency package in your fabric environment:"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.code,{children:"https://repo1.maven.org/maven2/org/apache/iceberg/iceberg-spark-runtime-3.3_2.12/1.5.0/iceberg-spark-runtime-3.3_2.12-1.5.0.jar"})}),"\n",(0,a.jsx)(r.p,{children:"This dependency is available on your compute platform where you installed Spark, such as your Databricks cluster, EMR, or Dataproc."}),"\n",(0,a.jsx)(r.h3,{id:"initialization-settings",children:"Initialization Settings"}),"\n",(0,a.jsx)(r.p,{children:"Configure the following Spark session property during the Spark session initialization."}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["Key: ",(0,a.jsx)(r.code,{children:"spark.sql.extensions"})]}),"\n",(0,a.jsxs)(r.li,{children:["Value: ",(0,a.jsx)(r.code,{children:"org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions"})]}),"\n"]}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsxs)(r.p,{children:["You can also do this during cluster bootstrap. For example, you can set ",(0,a.jsx)(r.code,{children:'--properties "spark:spark.sql.extensions=org.apache.iceberg.spark.extensions.IcebergSparkSessionExtentions" \\'})," with a create clusters command."]})}),"\n",(0,a.jsx)(r.h3,{id:"runtime-settings",children:"Runtime Settings"}),"\n",(0,a.jsx)(r.p,{children:"The following properties allow you to configure multiple catalogs and your respective metastores for Iceberg tables and data management."}),"\n",(0,a.jsx)(r.p,{children:"To configure Spark conf properties:"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Navigate to ",(0,a.jsx)(r.strong,{children:"Pipeline Settings"}),"."]}),"\n",(0,a.jsxs)(r.p,{children:["a. Click ",(0,a.jsx)(r.strong,{children:"..."})," at the top of the Prophecy canvas.",(0,a.jsx)("br",{}),"\nb. Under ",(0,a.jsx)(r.strong,{children:"Manage"}),", click ",(0,a.jsx)(r.strong,{children:"Pipeline Settings"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"Open Pipeline Settings",src:t(62709).A+"",width:"2620",height:"1509"})}),"\n",(0,a.jsxs)(r.ol,{start:"2",children:["\n",(0,a.jsxs)(r.li,{children:["In your ",(0,a.jsx)(r.strong,{children:"Spark"})," tab, under ",(0,a.jsx)(r.strong,{children:"Spark Configuration"}),", add your Spark conf properties."]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"Spark Pipeline Settings",src:t(976).A+"",width:"2620",height:"1509"})}),"\n",(0,a.jsx)(r.p,{children:"To configure Hadoop as a catalog, add the following Spark conf properties:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.code,{children:"spark.sql.catalog.<catalog_name>=org.apache.iceberg.spark.SparkCatalog"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.code,{children:"spark.sql.catalog.<catalog_name>.type=hadoop"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.code,{children:"spark.sql.catalog.<catalog_name>.warehouse=gs://<bucket>/<folder_1>/<folder_1>/"})}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"To configure Hive as a catalog, add the following Spark conf properties:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.code,{children:"spark.sql.catalog.<catalog_name>=org.apache.iceberg.spark.SparkCatalog"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.code,{children:"spark.sql.catalog.<catalog_name>.type=hive"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.code,{children:"spark.sql.catalog.<catalog_name>.warehouse=gs://<bucket>/<folder_1>/<folder_1>/"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.code,{children:"spark.sql.catalog.<catalog_name>.uri=thrift://10.91.64.30:9083"})}),"\n"]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsxs)(r.p,{children:["You can set the default catalog by using ",(0,a.jsx)(r.code,{children:"spark.default.catalog=<catalog_name>"}),"."]})}),"\n",(0,a.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsx)(r.p,{children:"The Source and Target gems require the following parameters to read from and write to Iceberg:"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Parameter"}),(0,a.jsx)(r.th,{children:"Tab"}),(0,a.jsx)(r.th,{children:"Description"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Use Catalog"}),(0,a.jsx)(r.td,{children:"Location"}),(0,a.jsx)(r.td,{children:"Whether to use a configured Hadoop or Hive catalog name."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Catalog Name"}),(0,a.jsx)(r.td,{children:"Location"}),(0,a.jsxs)(r.td,{children:["Name of your catalog if you enable ",(0,a.jsx)(r.strong,{children:"Use Catalog"}),"."]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Schema Name (Database Name)"}),(0,a.jsx)(r.td,{children:"Location"}),(0,a.jsx)(r.td,{children:"Name of the database to connect to."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Table Name"}),(0,a.jsx)(r.td,{children:"Location"}),(0,a.jsx)(r.td,{children:"Name of the table to connect to."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Catalog Type"}),(0,a.jsx)(r.td,{children:"Location"}),(0,a.jsxs)(r.td,{children:["File path to write the Iceberg table in the Target gem. ",(0,a.jsx)("br",{}),"Possible values are: ",(0,a.jsx)(r.code,{children:"hive"}),", ",(0,a.jsx)(r.code,{children:"hadoop"}),", or ",(0,a.jsx)(r.code,{children:"other"})]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"File location"}),(0,a.jsx)(r.td,{children:"Location"}),(0,a.jsxs)(r.td,{children:["Location of your file if you select ",(0,a.jsx)(r.code,{children:"hive"})," or ",(0,a.jsx)(r.code,{children:"other"})," for the ",(0,a.jsx)(r.strong,{children:"Catalog Type"}),"."]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Schema"}),(0,a.jsx)(r.td,{children:"Properties"}),(0,a.jsxs)(r.td,{children:["Schema to apply on the loaded data.",(0,a.jsx)("br",{}),"In the Source gem, you can define or edit the schema visually or in JSON code.",(0,a.jsx)("br",{}),"In the Target gem, you can view the schema visually or as JSON code."]})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"source",children:"Source"}),"\n",(0,a.jsx)(r.p,{children:"The Source gem reads data from Iceberg and allows you to optionally specify the following additional properties."}),"\n",(0,a.jsx)(r.h3,{id:"source-properties",children:"Source properties"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Properties"}),(0,a.jsx)(r.th,{children:"Description"}),(0,a.jsx)(r.th,{children:"Default"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Description"}),(0,a.jsx)(r.td,{children:"Description of your dataset."}),(0,a.jsx)(r.td,{children:"None"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Read timestamp"}),(0,a.jsxs)(r.td,{children:["Time travel in milliseconds to a specific timestamp. ",(0,a.jsx)("br",{}),"This value should be between the first commit timestamp and the latest commit timestamp in the table."]}),(0,a.jsx)(r.td,{children:"None"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Read snapshot"}),(0,a.jsx)(r.td,{children:"Snapshot ID to time travel to a specific table version."}),(0,a.jsx)(r.td,{children:"None"})]})]})]}),"\n",(0,a.jsxs)(r.admonition,{type:"note",children:[(0,a.jsxs)(r.p,{children:["You can only select ",(0,a.jsx)(r.code,{children:"Read timestamp"})," or ",(0,a.jsx)(r.code,{children:"Read snapshot"}),", not both."]}),(0,a.jsx)(r.p,{children:"If you don't use a time travel option, the Source gem fetches the most recent version of each row by default."})]}),"\n",(0,a.jsxs)(r.p,{children:["To learn more about Iceberg time travel and its use cases, see ",(0,a.jsx)(r.a,{href:"https://iceberg.apache.org/docs/nightly/hive/?h=time#timetravel",children:"Apache Iceberg TIMETRAVEL"}),"."]}),"\n",(0,a.jsx)(r.h3,{id:"source-example",children:"Example"}),"\n",(0,a.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,a.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,a.jsx)("iframe",{src:"https://fast.wistia.net/embed/iframe/b1vt6gv6bl?seo=false?videoFoam=true",title:"Iceberg source example",allow:"autoplay; fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,a.jsx)("script",{src:"https://fast.wistia.net/assets/external/E-v1.js",async:!0}),"\n",(0,a.jsx)(r.h3,{id:"source-code",children:"Compiled code"}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsxs)(r.p,{children:["To see the compiled code of your project, ",(0,a.jsx)(r.a,{href:"/engineers/pipelines#project-editor",children:"switch to the Code view"})," in the project header."]})}),"\n","\n",(0,a.jsx)(l.A,{children:(0,a.jsx)(o.A,{value:"py",label:"Python",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-py",children:'def iceberg_read(spark: SparkSession) -> DataFrame:\n    return spark.read.format("iceberg").load("`hadoop_catalog_1`.`prophecy_doc_demo`.`employees_test`")\n'})})})}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"target",children:"Target"}),"\n",(0,a.jsx)(r.p,{children:"The Target gem writes data to Iceberg and allows you to optionally specify the following additional properties."}),"\n",(0,a.jsx)(r.h3,{id:"target-properties",children:"Target properties"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Property"}),(0,a.jsx)(r.th,{children:"Description"}),(0,a.jsx)(r.th,{children:"Default"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Description"}),(0,a.jsx)(r.td,{children:"Description of your dataset."}),(0,a.jsx)(r.td,{children:"None"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Write Mode"}),(0,a.jsxs)(r.td,{children:["How to handle existing data. For a list of the possible values, see ",(0,a.jsx)(r.a,{href:"#supported-write-modes",children:"Supported write modes"}),"."]}),(0,a.jsx)(r.td,{children:"None"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Merge schema"}),(0,a.jsxs)(r.td,{children:["Whether to automatically add columns present in the ",(0,a.jsx)(r.code,{children:"DataFrame"})," but not in the Target table to the end of the schema as part of a write transaction."]}),(0,a.jsx)(r.td,{children:"false"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Partition Columns"}),(0,a.jsxs)(r.td,{children:["List of columns to partition the Iceberg table by. ",(0,a.jsx)("br",{}),"Provide this during a ",(0,a.jsx)(r.code,{children:"createOrReplace"})," write mode to leverage the",(0,a.jsx)(r.code,{children:"overwritePartitions"})," write mode in the future."]}),(0,a.jsx)(r.td,{children:"None"})]})]})]}),"\n",(0,a.jsx)(r.h3,{id:"supported-write-modes",children:"Supported write modes"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Write Mode"}),(0,a.jsx)(r.th,{children:"Description"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"createOrReplace"}),(0,a.jsx)(r.td,{children:"Create or replace the Iceberg table."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"append"}),(0,a.jsx)(r.td,{children:"If data already exists, append the contents of the DataFrame to the Iceberg table."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"overwritePartitions"}),(0,a.jsx)(r.td,{children:"Dynamically overwrite partitions in the Iceberg table."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"overwrite"}),(0,a.jsxs)(r.td,{children:["If data already exists, explicitly overwrite the partitions with the ",(0,a.jsx)(r.code,{children:"Overwrite Condition"})," you specify."]})]})]})]}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsx)(r.p,{children:"Among these write modes, overwrite and append work the same way for parquet file writes."})}),"\n",(0,a.jsx)(r.h3,{id:"target-example",children:"Target Example"}),"\n",(0,a.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,a.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,a.jsx)("iframe",{src:"https://fast.wistia.net/embed/iframe/8j80hc4k1e?seo=false?videoFoam=true",title:"Iceberg-target-example",allow:"autoplay; fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,a.jsx)("script",{src:"https://fast.wistia.net/assets/external/E-v1.js",async:!0}),"\n",(0,a.jsx)(r.h3,{id:"target-code",children:"Compiled code"}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsxs)(r.p,{children:["To see the compiled code of your project, ",(0,a.jsx)(r.a,{href:"/engineers/pipelines#project-editor",children:"switch to the Code view"})," in the project header."]})}),"\n",(0,a.jsx)(l.A,{children:(0,a.jsx)(o.A,{value:"py",label:"Python",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-py",children:'def iceberg_write(spark: SparkSession, in0: DataFrame):\n    df1 = in0.writeTo("`hadoop_catalog_1`.`prophecy_doc_demo`.`employees_test`")\n    df2 = df1.using("iceberg")\n    df3 = df2.partitionedBy("Department")\n    df4 = df3.tableProperty("write.spark.accept-any-schema", "true")\n    df4.createOrReplace()\n'})})})})]})}function g(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},79329:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var s=t(18215);const a={tabItem:"tabItem_Ymn6"};var n=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,i),hidden:t,children:r})}}}]);