"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[24161],{28453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>o});var t=r(96540);const a={},n=t.createContext(a);function i(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(n.Provider,{value:s},e.children)}},49235:(e,s,r)=>{r.d(s,{A:()=>a});r(96540);var t=r(74848);function a(e){return(0,t.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.python_package_name}),(0,t.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.scala_package_name}),(0,t.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,t.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,t.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,t.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,t.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Livy"}),(0,t.jsx)("span",{className:"right",children:e.livy})]})}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]})}},57386:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>h,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"Spark/gems/source-target/warehouse/snowflake","title":"Snowflake","description":"Parameters and properties to read from and write to the Snowflake warehouse.","source":"@site/docs/Spark/gems/source-target/warehouse/snowflake.md","sourceDirName":"Spark/gems/source-target/warehouse","slug":"/engineers/snowflake","permalink":"/prophecy-docs-staging/preview/pr-604/engineers/snowflake","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-604/tags/gems"},{"inline":true,"label":"warehouse","permalink":"/prophecy-docs-staging/preview/pr-604/tags/warehouse"},{"inline":true,"label":"snowflake","permalink":"/prophecy-docs-staging/preview/pr-604/tags/snowflake"}],"version":"current","frontMatter":{"title":"Snowflake","id":"snowflake","slug":"/engineers/snowflake","description":"Parameters and properties to read from and write to the Snowflake warehouse.","tags":["gems","warehouse","snowflake"]},"sidebar":"mySidebar","previous":{"title":"Salesforce","permalink":"/prophecy-docs-staging/preview/pr-604/engineers/salesforce"},"next":{"title":"Teradata","permalink":"/prophecy-docs-staging/preview/pr-604/engineers/teradata"}}');var a=r(74848),n=r(28453),i=r(49235),o=r(65537),l=r(79329);const c={title:"Snowflake",id:"snowflake",slug:"/engineers/snowflake",description:"Parameters and properties to read from and write to the Snowflake warehouse.",tags:["gems","warehouse","snowflake"]},d=void 0,h={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Source",id:"source",level:2},{value:"Source properties",id:"source-properties",level:3},{value:"Example",id:"source-example",level:3},{value:"Generated code",id:"source-code",level:3},{value:"Target",id:"target",level:2},{value:"Target properties",id:"target-properties",level:3},{value:"Supported write modes",id:"supported-write-modes",level:3},{value:"Example",id:"target-example",level:3},{value:"Generated code",id:"target-code",level:3}];function u(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{python_package_name:"ProphecyWarehousePython",python_package_version:"0.0.1+",scala_package_name:"ProphecyWarehouseScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"Not Supported"}),"\n",(0,a.jsx)(s.p,{children:"You can read from and write to Snowflake."}),"\n",(0,a.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Parameter"}),(0,a.jsx)(s.th,{children:"Tab"}),(0,a.jsx)(s.th,{children:"Description"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Authentication Type"}),(0,a.jsx)(s.td,{children:"Location"}),(0,a.jsxs)(s.td,{children:["How you want to authenticate. ",(0,a.jsx)("br",{}),"Possible values are: ",(0,a.jsx)(s.code,{children:"Username & Password"}),", or ",(0,a.jsx)(s.code,{children:"Key Pair Authentication"}),". ",(0,a.jsx)("br",{})," To configure key pair authentication on Snowflake, see ",(0,a.jsx)(s.a,{href:"https://docs.snowflake.com/en/user-guide/key-pair-auth#configuring-key-pair-authentication",children:"Configuring key-pair authentication"}),"."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Username"}),(0,a.jsx)(s.td,{children:"Location"}),(0,a.jsxs)(s.td,{children:["Username of the Snowflake user if you selected ",(0,a.jsx)(s.code,{children:"Username & Password"})," for the authentication type."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Password"}),(0,a.jsx)(s.td,{children:"Location"}),(0,a.jsxs)(s.td,{children:["Password for the Snowflake user if you selected ",(0,a.jsx)(s.code,{children:"Username & Password"})," for the authentication type."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Private key filepath"}),(0,a.jsx)(s.td,{children:"Location"}),(0,a.jsxs)(s.td,{children:["Location of your private key filepath in PKCS8 format if you selected ",(0,a.jsx)(s.code,{children:"Key Pair Authentication"})," for the authentication type."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Private key passphrase"}),(0,a.jsx)(s.td,{children:"Location"}),(0,a.jsxs)(s.td,{children:["Passphrase of your private key file if you selected ",(0,a.jsx)(s.code,{children:"Key Pair Authentication"})," for the authentication type."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Snowflake URL"}),(0,a.jsx)(s.td,{children:"Location"}),(0,a.jsxs)(s.td,{children:["Hostname for your account in the format: ",(0,a.jsx)(s.code,{children:"<account_identifier>.snowflakecomputing.com"})," ",(0,a.jsx)("br",{}),"For example: ",(0,a.jsx)(s.code,{children:"https://DJ07623.ap-south-1.aws.snowflakecomputing.com"})]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Database"}),(0,a.jsx)(s.td,{children:"Location"}),(0,a.jsx)(s.td,{children:"Database to use for the session."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Schema"}),(0,a.jsx)(s.td,{children:"Location"}),(0,a.jsx)(s.td,{children:"Schema to use for the session."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Warehouse"}),(0,a.jsx)(s.td,{children:"Location"}),(0,a.jsx)(s.td,{children:"Default virtual warehouse to use for the session."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Role"}),(0,a.jsx)(s.td,{children:"Location"}),(0,a.jsx)(s.td,{children:"Default security role to use for the session."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Data Source"}),(0,a.jsx)(s.td,{children:"Location"}),(0,a.jsxs)(s.td,{children:["Strategy to read data. ",(0,a.jsx)("br",{}),"Possible values are: ",(0,a.jsx)(s.code,{children:"DB Table"})," or ",(0,a.jsx)(s.code,{children:"SQL Query"}),"."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Table"}),(0,a.jsx)(s.td,{children:"Location"}),(0,a.jsx)(s.td,{children:"Name of the table to be read."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"SQL Query"}),(0,a.jsx)(s.td,{children:"Location"}),(0,a.jsxs)(s.td,{children:["SQL query that contains a",(0,a.jsx)(s.code,{children:"SELECT"})," statement to run."]})]})]})]}),"\n",(0,a.jsx)(s.h2,{id:"source",children:"Source"}),"\n",(0,a.jsx)(s.p,{children:"The Source gem reads data from Snowflake and allows you to optionally specify the following additional property."}),"\n",(0,a.jsx)(s.h3,{id:"source-properties",children:"Source properties"}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Properties"}),(0,a.jsx)(s.th,{children:"Description"}),(0,a.jsx)(s.th,{children:"Default"})]})}),(0,a.jsx)(s.tbody,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Description"}),(0,a.jsx)(s.td,{children:"Description of your dataset."}),(0,a.jsx)(s.td,{children:"None"})]})})]}),"\n",(0,a.jsx)(s.h3,{id:"source-example",children:"Example"}),"\n",(0,a.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,a.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,a.jsx)("iframe",{src:"https://user-images.githubusercontent.com/130362885/235865924-aff354cc-ab30-4ef7-8885-1e66c285d3d7.mp4",title:"Snowfalke Source",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,a.jsx)(s.h3,{id:"source-code",children:"Generated code"}),"\n",(0,a.jsx)(s.admonition,{type:"tip",children:(0,a.jsxs)(s.p,{children:["To see the generated source code of your project, ",(0,a.jsx)(s.a,{href:"/engineers/project-lifecycle/#review-the-code",children:"switch to the Code view"})," in the project header."]})}),"\n","\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(l.A,{value:"py",label:"Python",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-py",children:'def sf_customer(spark: SparkSession) -> DataFrame:\n    from pyspark.dbutils import DBUtils\n\n    return spark.read\\\n        .format("snowflake")\\\n        .options(\n          **{\n            "sfUrl": "https://DJ07623.ap-south-1.aws.snowflakecomputing.com",\n            "sfUser": "anshuman",\n            "sfPassword": "*******",\n            "sfDatabase": "SNOWFLAKE_SAMPLE_DATA",\n            "sfSchema": "TPCDS_SF100TCL",\n            "sfWarehouse": "COMPUTE_WH"\n          }\n        )\\\n        .option("dbtable", "CUSTOMER")\\\n        .load()\n'})})}),(0,a.jsx)(l.A,{value:"scala",label:"Scala",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-scala",children:'object customer_snow_src {\n  def apply(spark: SparkSession): DataFrame = {\n    import com.databricks.dbutils_v1.DBUtilsHolder.dbutils\n    var reader = context.spark.read\n      .format("snowflake")\n      .options(\n        Map(\n          "sfUrl" \u2192 "https://DJ07623.ap-south-1.aws.snowflakecomputing.com",\n          "sfUser" \u2192 "anshuman",\n          "sfPassword" \u2192 "******",\n          "sfDatabase" \u2192 "SNOWFLAKE_SAMPLE_DATA",\n          "sfSchema" \u2192 "TPCDS_SF100TCL",\n          "sfWarehouse" \u2192 "COMPUTE_WH"\n        )\n      )\n    reader = reader.option("dbtable", "CUSTOMER")\n    reader.load()\n  }\n}\n'})})})]}),"\n",(0,a.jsx)(s.hr,{}),"\n",(0,a.jsx)(s.h2,{id:"target",children:"Target"}),"\n",(0,a.jsx)(s.p,{children:"The Target gem writes data to Snowflake and allows you to optionally specify the following additional properties."}),"\n",(0,a.jsx)(s.h3,{id:"target-properties",children:"Target properties"}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Property"}),(0,a.jsx)(s.th,{children:"Description"}),(0,a.jsx)(s.th,{children:"Default"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Description"}),(0,a.jsx)(s.td,{children:"Description of your dataset."}),(0,a.jsx)(s.td,{children:"None"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Write Mode"}),(0,a.jsxs)(s.td,{children:["How to handle existing data. For a list of the possible values, see ",(0,a.jsx)(s.a,{href:"#supported-write-modes",children:"Supported write modes"}),"."]}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"overwrite"})})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Run post-script SQL"}),(0,a.jsxs)(s.td,{children:["DDL and DML SQL statements to execute before the Target gem writes data.",(0,a.jsx)("br",{})," This is intended for statements that do not return a result set, such as DDL statements like ",(0,a.jsx)(s.code,{children:"CREATE TABLE"})," and DML statements like ",(0,a.jsx)(s.code,{children:"INSERT, UPDATE, and DELETE"}),"."]}),(0,a.jsx)(s.td,{children:"None"})]})]})]}),"\n",(0,a.jsx)(s.h3,{id:"supported-write-modes",children:"Supported write modes"}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Write mode"}),(0,a.jsx)(s.th,{children:"Description"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"error"}),(0,a.jsx)(s.td,{children:"If the data already exists, throw an exception."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"overwrite"}),(0,a.jsxs)(s.td,{children:["If the data already exists, overwrite the data with the contents of the ",(0,a.jsx)(s.code,{children:"DataFrame"}),"."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"append"}),(0,a.jsxs)(s.td,{children:["If the data already exists, append the contents of the ",(0,a.jsx)(s.code,{children:"DataFrame"}),"."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"ignore"}),(0,a.jsxs)(s.td,{children:["If the data already exists, do nothing with the contents of the ",(0,a.jsx)(s.code,{children:"DataFrame"}),". ",(0,a.jsx)("br",{}),"This is similar to the ",(0,a.jsx)(s.code,{children:"CREATE TABLE IF NOT EXISTS"})," clause in SQL."]})]})]})]}),"\n",(0,a.jsx)(s.h3,{id:"target-example",children:"Example"}),"\n",(0,a.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,a.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,a.jsx)("iframe",{src:"https://user-images.githubusercontent.com/130362885/235865992-6af2ad3b-f98b-46b7-ae09-9bc3cd12e6cc.mp4",title:"Snowfalke Target",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,a.jsx)(s.h3,{id:"target-code",children:"Generated code"}),"\n",(0,a.jsx)(s.admonition,{type:"tip",children:(0,a.jsxs)(s.p,{children:["To see the generated source code of your project, ",(0,a.jsx)(s.a,{href:"/engineers/project-lifecycle/#review-the-code",children:"switch to the Code view"})," in the project header."]})}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(l.A,{value:"py",label:"Python",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-py",children:'def customer_snow_tg(spark: SparkSession, in0: DataFrame):\n    from pyspark.dbutils import DBUtils\n    options = {\n        "sfUrl": "https://DJ07623.ap-south-1.aws.snowflakecomputing.com",\n        "sfUser": "anshuman",\n        "sfPassword": "******",\n        "sfDatabase": "SNOWFLAKE_SAMPLE_DATA",\n        "sfSchema": "TPCDS_SF100TCL",\n        "sfWarehouse": "COMPUTE_WH"\n    }\n    writer = in0.write.format("snowflake").options(**options)\n    writer = writer.option("dbtable", "CUSTOMERS")\n    writer = writer.mode("overwrite")\n    writer.save()\n'})})}),(0,a.jsx)(l.A,{value:"scala",label:"Scala",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-scala",children:'object customer_snow_tg {\n  def apply(spark: SparkSession, in: DataFrame): Unit = {\n\n    import net.snowflake.spark.snowflake.Utils\n    import com.databricks.dbutils_v1.DBUtilsHolder.dbutils\n    val options = Map("sfUrl" \u2192 "https://DJ07623.ap-south-1.aws.snowflakecomputing.com",\n                      "sfUser" \u2192 "anshuman",\n                      "sfPassword" \u2192 "******",\n                      "sfDatabase" \u2192 "SNOWFLAKE_SAMPLE_DATA",\n                      "sfSchema" \u2192 "TPCDS_SF100TCL",\n                      "sfWarehouse" \u2192 "COMPUTE_WH"\n    )\n    var writer = in.write.format("snowflake").options(options)\n    writer = writer.option("dbtable", "test_table")\n    writer = writer.mode("overwrite")\n    writer.save()\n  }\n}\n'})})})]})]})}function f(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},65537:(e,s,r)=>{r.d(s,{A:()=>v});var t=r(96540),a=r(18215),n=r(65627),i=r(56347),o=r(50372),l=r(30604),c=r(11861),d=r(78749);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:s,children:r}=e;return(0,t.useMemo)((()=>{const e=s??function(e){return h(e).map((e=>{let{props:{value:s,label:r,attributes:t,default:a}}=e;return{value:s,label:r,attributes:t,default:a}}))}(r);return function(e){const s=(0,c.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,r])}function u(e){let{value:s,tabValues:r}=e;return r.some((e=>e.value===s))}function f(e){let{queryString:s=!1,groupId:r}=e;const a=(0,i.W6)(),n=function(e){let{queryString:s=!1,groupId:r}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:s,groupId:r});return[(0,l.aZ)(n),(0,t.useCallback)((e=>{if(!n)return;const s=new URLSearchParams(a.location.search);s.set(n,e),a.replace({...a.location,search:s.toString()})}),[n,a])]}function x(e){const{defaultValue:s,queryString:r=!1,groupId:a}=e,n=p(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:s,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!u({value:s,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:s,tabValues:n}))),[c,h]=f({queryString:r,groupId:a}),[x,j]=function(e){let{groupId:s}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(s),[a,n]=(0,d.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:a}),m=(()=>{const e=c??x;return u({value:e,tabValues:n})?e:null})();(0,o.A)((()=>{m&&l(m)}),[m]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),j(e)}),[h,j,n]),tabValues:n}}var j=r(9136);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function g(e){let{className:s,block:r,selectedValue:t,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.a_)(),d=e=>{const s=e.currentTarget,r=l.indexOf(s),a=o[r].value;a!==t&&(c(s),i(a))},h=e=>{let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;s=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;s=l[r]??l[l.length-1];break}}s?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},s),children:o.map((e=>{let{value:s,label:r,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===s?0:-1,"aria-selected":t===s,ref:e=>{l.push(e)},onKeyDown:h,onClick:d,...n,className:(0,a.A)("tabs__item",m.tabItem,n?.className,{"tabs__item--active":t===s}),children:r??s},s)}))})}function w(e){let{lazy:s,children:r,selectedValue:n}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(s){const e=i.find((e=>e.props.value===n));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==n})))})}function y(e){const s=x(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,b.jsx)(g,{...s,...e}),(0,b.jsx)(w,{...s,...e})]})}function v(e){const s=(0,j.A)();return(0,b.jsx)(y,{...e,children:h(e.children)},String(s))}},79329:(e,s,r)=>{r.d(s,{A:()=>i});r(96540);var t=r(18215);const a={tabItem:"tabItem_Ymn6"};var n=r(74848);function i(e){let{children:s,hidden:r,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,i),hidden:r,children:s})}}}]);