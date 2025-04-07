"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[5579],{28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>l});var t=s(96540);const a={},n=t.createContext(a);function i(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(n.Provider,{value:r},e.children)}},41334:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"Spark/gems/source-target/warehouse/salesforce","title":"Salesforce","description":"Salesforce","source":"@site/docs/Spark/gems/source-target/warehouse/salesforce.md","sourceDirName":"Spark/gems/source-target/warehouse","slug":"/engineers/salesforce","permalink":"/prophecy-docs-staging/preview/pr-606/engineers/salesforce","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-606/tags/gems"},{"inline":true,"label":"warehouse","permalink":"/prophecy-docs-staging/preview/pr-606/tags/warehouse"},{"inline":true,"label":"salesforce","permalink":"/prophecy-docs-staging/preview/pr-606/tags/salesforce"}],"version":"current","frontMatter":{"title":"Salesforce","id":"salesforce","slug":"/engineers/salesforce","description":"Salesforce","tags":["gems","warehouse","salesforce"]},"sidebar":"mySidebar","previous":{"title":"Redshift","permalink":"/prophecy-docs-staging/preview/pr-606/engineers/redshift"},"next":{"title":"Snowflake","permalink":"/prophecy-docs-staging/preview/pr-606/engineers/snowflake"}}');var a=s(74848),n=s(28453),i=s(49235),l=s(65537),o=s(79329);const c={title:"Salesforce",id:"salesforce",slug:"/engineers/salesforce",description:"Salesforce",tags:["gems","warehouse","salesforce"]},d=void 0,h={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Source",id:"source",level:2},{value:"Source properties",id:"source-properties",level:3},{value:"Example",id:"example",level:2},{value:"Generated code",id:"source-code",level:3},{value:"Target",id:"target",level:2},{value:"Target properties",id:"target-properties",level:3},{value:"Generated code",id:"target-code",level:3}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{python_package_name:"ProphecyWebAppPython",python_package_version:"0.0.1+",scala_package_name:"",scala_package_version:"",scala_lib:"",python_lib:"",uc_single:"Not Supported",uc_shared:"Not Supported",livy:"Not Supported"}),"\n",(0,a.jsxs)(r.admonition,{title:"Built on",type:"info",children:[(0,a.jsxs)(r.p,{children:["This connector is built on top of the already available ",(0,a.jsx)(r.a,{href:"https://github.com/springml/spark-salesforce/",children:"Spark Salesforce Library"}),"."]}),(0,a.jsxs)(r.p,{children:["Install the ",(0,a.jsx)(r.code,{children:"com.springml:spark-salesforce_2.12:1.1.4"})," Maven external dependency on your cluster.\nTo learn about installing dependencies in Prophecy UI, see ",(0,a.jsx)(r.a,{href:"/engineers/dependencies",children:"Spark dependencies"}),"."]})]}),"\n",(0,a.jsx)(r.p,{children:"With the Source and Target gem, you can perform the following with Salesforce:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["Create datasets in Salesforce Wave from Spark ",(0,a.jsx)(r.code,{children:"DataFrame"}),"."]}),"\n",(0,a.jsxs)(r.li,{children:["Read a Salesforce Wave dataset where the user provides a SAQL to read data from Salesforce Wave. The Source gem constructs the query result as a ",(0,a.jsx)(r.code,{children:"DataFrame"}),"."]}),"\n",(0,a.jsxs)(r.li,{children:["Read a Salesforce object where the user provides a SOQL to read data from Salesforce object. The Source gem constructs a query result as a ",(0,a.jsx)(r.code,{children:"DataFrame"}),"."]}),"\n",(0,a.jsxs)(r.li,{children:["Update a Salesforce object where the Target gem updates the Salesforce object with the details present in ",(0,a.jsx)(r.code,{children:"DataFrame"}),"."]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(r.p,{children:"Before you specify parameters and properties, select the Salesforce application:"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsx)(r.li,{children:"Open the gem configuration."}),"\n",(0,a.jsxs)(r.li,{children:["On the ",(0,a.jsx)(r.strong,{children:"Type & Format"})," page, navigate to the ",(0,a.jsx)(r.strong,{children:"Applications"})," tab."]}),"\n",(0,a.jsxs)(r.li,{children:["Select ",(0,a.jsx)(r.strong,{children:"Salesforce"}),"."]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Parameter"}),(0,a.jsx)(r.th,{children:"Tab"}),(0,a.jsx)(r.th,{children:"Description"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Credentials"}),(0,a.jsx)(r.td,{children:"Location"}),(0,a.jsxs)(r.td,{children:["How to provide your credentials. ",(0,a.jsx)("br",{}),"You can select: ",(0,a.jsx)(r.code,{children:"Databricks Secrets"}),", ",(0,a.jsx)(r.code,{children:"Username & Password"}),", or ",(0,a.jsx)(r.code,{children:"Environment variables"})]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"User Name"}),(0,a.jsx)(r.td,{children:"Location"}),(0,a.jsxs)(r.td,{children:["Salesforce Wave username. ",(0,a.jsx)("br",{}),"This user must have privileges to upload datasets or execute SAQL or SOQL."]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Password"}),(0,a.jsx)(r.td,{children:"Location"}),(0,a.jsxs)(r.td,{children:["Salesforce Wave Password. ",(0,a.jsx)("br",{}),(0,a.jsx)(r.strong,{children:"Append your security token along with password."})," ",(0,a.jsx)("br",{}),"To reset your Salesforce security token, see ",(0,a.jsx)(r.a,{href:"https://help.salesforce.com/s/articleView?id=xcloud.user_security_token.htm&language=en_US&type=5",children:"Reset Your Security Token"}),"."]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Login URL"}),(0,a.jsx)(r.td,{children:"Location"}),(0,a.jsxs)(r.td,{children:["Salesforce Login URL. ",(0,a.jsx)("br",{}),"Default: ",(0,a.jsx)(r.code,{children:"https://login.salesforce.com."})]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Data Source"}),(0,a.jsx)(r.td,{children:"Location"}),(0,a.jsxs)(r.td,{children:["Strategy to read data in the Source gem. ",(0,a.jsx)("br",{}),"Possible values are: ",(0,a.jsx)(r.code,{children:"SAQL"}),", or ",(0,a.jsx)(r.code,{children:"SOQL"}),"."]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"SAQL Query"}),(0,a.jsx)(r.td,{children:"Location"}),(0,a.jsxs)(r.td,{children:["If you select ",(0,a.jsx)(r.code,{children:"SAQL"})," as the ",(0,a.jsx)(r.strong,{children:"Data Source"}),", SAQL query to use to query Salesforce Wave."]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"SOQL Query"}),(0,a.jsx)(r.td,{children:"Location"}),(0,a.jsxs)(r.td,{children:["If you select ",(0,a.jsx)(r.code,{children:"SOQL"})," as the ",(0,a.jsx)(r.strong,{children:"Data Source"}),", SOQL query to used to query Salesforce Object."]})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"source",children:"Source"}),"\n",(0,a.jsx)(r.p,{children:"The Source gem reads data from Salesforce objects and allows you to optionally specify the following additional properties."}),"\n",(0,a.jsx)(r.h3,{id:"source-properties",children:"Source properties"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Properties"}),(0,a.jsx)(r.th,{children:"Description"}),(0,a.jsx)(r.th,{children:"Default"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Description"}),(0,a.jsx)(r.td,{children:"Description of your dataset."}),(0,a.jsx)(r.td,{children:"None"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Primary key chunking (Optional)"}),(0,a.jsxs)(r.td,{children:["Whether to enable automatic primary key chunking for bulk query job. ",(0,a.jsx)("br",{}),"This splits bulk queries into separate batches of the size defined by ",(0,a.jsx)(r.strong,{children:"Chunk size"})," property."]}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"100000"})})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Chunk size"}),(0,a.jsxs)(r.td,{children:["Number of records to include in each batch. ",(0,a.jsx)("br",{}),"You can only use this property when you enable ",(0,a.jsx)(r.strong,{children:"Primary key chunking"}),". Maximum size is ",(0,a.jsx)(r.code,{children:"250000"}),"."]}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"100000"})})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Timeout"}),(0,a.jsxs)(r.td,{children:["Maximum time spent polling for the completion of bulk query job.",(0,a.jsx)("br",{}),"You can only use this property when you ",(0,a.jsx)(r.strong,{children:"enable bulk query"}),"."]}),(0,a.jsx)(r.td,{children:"false"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Max Length of column (Optional)"}),(0,a.jsxs)(r.td,{children:["Maximum length of a column. ",(0,a.jsx)("br",{}),"You can only use this property when you ",(0,a.jsx)(r.strong,{children:"enable bulk query"}),"."]}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"4096"})})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"External ID field name for Salesforce Object (Optional)"}),(0,a.jsx)(r.td,{children:"Name of the external ID field in a Salesforce object."}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"Id"})})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Enable bulk query (Optional)"}),(0,a.jsxs)(r.td,{children:["Whether to enable bulk query. ",(0,a.jsx)("br",{}),"This is the preferred method when loading large sets of data. Salesforce processes batches in the background."]}),(0,a.jsx)(r.td,{children:"false"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Retrieve deleted and archived records (Optional)"}),(0,a.jsx)(r.td,{children:"Whether to retrieve deleted and archived records for SOQL queries."}),(0,a.jsx)(r.td,{children:"false"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Infer Schema"}),(0,a.jsxs)(r.td,{children:["Whether to infer schema from the query results. ",(0,a.jsx)("br",{}),"The Source gem takes sample rows to find the datatype."]}),(0,a.jsx)(r.td,{children:"false"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Date Format"}),(0,a.jsxs)(r.td,{children:["String that indicates the format for ",(0,a.jsx)(r.code,{children:"java.text.SimpleDateFormat"})," to follow when reading timestamps. ",(0,a.jsx)("br",{}),"This applies to ",(0,a.jsx)(r.code,{children:"TimestampType"}),"."]}),(0,a.jsx)(r.td,{children:"null"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Salesforce API Version (Optional)"}),(0,a.jsx)(r.td,{children:"Version of the Salesforce API to use."}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"35.0"})})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(r.p,{children:["The following example uses a ",(0,a.jsx)(r.code,{children:"SOQL"})," query to query our leads dataset on the sales cloud."]}),"\n",(0,a.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,a.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,a.jsx)("iframe",{src:"https://user-images.githubusercontent.com/103921419/193517497-54c5544d-3b98-45ae-95e1-cb036bad6e4c.mp4",title:"Salesforce Source",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,a.jsx)(r.h3,{id:"source-code",children:"Generated code"}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsxs)(r.p,{children:["To see the generated source code of your project, ",(0,a.jsx)(r.a,{href:"/engineers/project-lifecycle/#review-the-code",children:"switch to the Code view"})," in the project header."]})}),"\n","\n",(0,a.jsx)(l.A,{children:(0,a.jsx)(o.A,{value:"py",label:"Python",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-py",children:'def read_salesforce(spark: SparkSession) -> DataFrame:\n    return spark.read\\\n        .format("com.springml.spark.salesforce")\\\n        .option("username", "your_salesforce_username")\\\n        .option("password", "your_salesforce_password_with_secutiry_token")\\\n        .option("soql", "select id, name, email from lead")\\\n        .load()\n'})})})}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"target",children:"Target"}),"\n",(0,a.jsx)(r.p,{children:"The Target gem writes data to Salesforce objects and allows you to optionally specify the following additional properties."}),"\n",(0,a.jsx)(r.h3,{id:"target-properties",children:"Target properties"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Property"}),(0,a.jsx)(r.th,{children:"Description"}),(0,a.jsx)(r.th,{children:"Default"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Description"}),(0,a.jsx)(r.td,{children:"Description of your dataset."}),(0,a.jsx)(r.td,{children:"None"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"SF object to be updated (Optional)"}),(0,a.jsxs)(r.td,{children:["Salesforce object to update when you enable ",(0,a.jsx)(r.strong,{children:"bulk query"}),"."]}),(0,a.jsx)(r.td,{children:"false"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Name of the dataset to be created in Salesforce Wave"}),(0,a.jsx)(r.td,{children:"Name of the Dataset to create in Salesforce Wave."}),(0,a.jsx)(r.td,{children:"None"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Metadata configuration in json (Optional)"}),(0,a.jsxs)(r.td,{children:["JSON formatted metadata configuration to construct a ",(0,a.jsx)(r.a,{href:"https://resources.docs.salesforce.com/sfdc/pdf/bi_dev_guide_ext_data_format.pdf",children:"Salesforce Wave Dataset Metadata"}),"."]}),(0,a.jsx)(r.td,{children:"None"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"External ID field name for Salesforce Object (Optional)"}),(0,a.jsx)(r.td,{children:"Name of the external ID field in a Salesforce object when the Target gem updates or upserts into Salesforce."}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"Id"})})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Flag to upsert data to Salesforce (Optional)"}),(0,a.jsxs)(r.td,{children:["Whether to upsert data to Salesforce. ",(0,a.jsx)("br",{}),"This property performs an insert or update operation using the ",(0,a.jsx)(r.code,{children:"externalIdFieldName"})," as the primary ID. The Target gem does not update existing fields that are not in the ",(0,a.jsx)(r.code,{children:"DataFrame"})," being pushed."]}),(0,a.jsx)(r.td,{children:"false"})]})]})]}),"\n",(0,a.jsx)(r.h3,{id:"target-code",children:"Generated code"}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsxs)(r.p,{children:["To see the generated source code of your project, ",(0,a.jsx)(r.a,{href:"/engineers/project-lifecycle/#review-the-code",children:"switch to the Code view"})," in the project header."]})}),"\n",(0,a.jsx)(l.A,{children:(0,a.jsx)(o.A,{value:"py",label:"Python",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-py",children:'def write_salesforce(spark: SparkSession, in0: DataFrame):\n    in0.write.format("com.springml.spark.salesforce")\\\n\t\t  .option("username", "your_salesforce_username")\\\n\t\t  .option("password", "your_salesforce_password_with_secutiry_token")\\\n\t\t  .option("DatasetName", "your_Dataset_name")\n\t\t  .save()\n'})})})})]})}function x(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},49235:(e,r,s)=>{s.d(r,{A:()=>a});s(96540);var t=s(74848);function a(e){return(0,t.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.python_package_name}),(0,t.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.scala_package_name}),(0,t.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,t.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,t.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,t.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,t.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Livy"}),(0,t.jsx)("span",{className:"right",children:e.livy})]})}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]})}},65537:(e,r,s)=>{s.d(r,{A:()=>S});var t=s(96540),a=s(18215),n=s(65627),i=s(56347),l=s(50372),o=s(30604),c=s(11861),d=s(78749);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:r,children:s}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:s,attributes:t,default:a}}=e;return{value:r,label:s,attributes:t,default:a}}))}(s);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,s])}function p(e){let{value:r,tabValues:s}=e;return s.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:s}=e;const a=(0,i.W6)(),n=function(e){let{queryString:r=!1,groupId:s}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:r,groupId:s});return[(0,o.aZ)(n),(0,t.useCallback)((e=>{if(!n)return;const r=new URLSearchParams(a.location.search);r.set(n,e),a.replace({...a.location,search:r.toString()})}),[n,a])]}function j(e){const{defaultValue:r,queryString:s=!1,groupId:a}=e,n=u(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:n}))),[c,h]=x({queryString:s,groupId:a}),[j,f]=function(e){let{groupId:r}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,n]=(0,d.Dv)(s);return[a,(0,t.useCallback)((e=>{s&&n.set(e)}),[s,n])]}({groupId:a}),m=(()=>{const e=c??j;return p({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{m&&o(m)}),[m]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),f(e)}),[h,f,n]),tabValues:n}}var f=s(9136);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(74848);function b(e){let{className:r,block:s,selectedValue:t,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.a_)(),d=e=>{const r=e.currentTarget,s=o.indexOf(r),a=l[s].value;a!==t&&(c(r),i(a))},h=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;r=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;r=o[s]??o[o.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},r),children:l.map((e=>{let{value:r,label:s,attributes:n}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>{o.push(e)},onKeyDown:h,onClick:d,...n,className:(0,a.A)("tabs__item",m.tabItem,n?.className,{"tabs__item--active":t===r}),children:s??r},r)}))})}function y(e){let{lazy:r,children:s,selectedValue:n}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===n));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function v(e){const r=j(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,g.jsx)(b,{...r,...e}),(0,g.jsx)(y,{...r,...e})]})}function S(e){const r=(0,f.A)();return(0,g.jsx)(v,{...e,children:h(e.children)},String(r))}},79329:(e,r,s)=>{s.d(r,{A:()=>i});s(96540);var t=s(18215);const a={tabItem:"tabItem_Ymn6"};var n=s(74848);function i(e){let{children:r,hidden:s,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,i),hidden:s,children:r})}}}]);