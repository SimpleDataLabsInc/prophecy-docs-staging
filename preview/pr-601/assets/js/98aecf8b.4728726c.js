"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[5579],{28453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>l});var a=r(96540);const t={},n=a.createContext(t);function i(e){const s=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(n.Provider,{value:s},e.children)}},41334:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>h,contentTitle:()=>o,default:()=>x,frontMatter:()=>c,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"Spark/gems/source-target/warehouse/salesforce","title":"Salesforce","description":"Salesforce","source":"@site/docs/Spark/gems/source-target/warehouse/salesforce.md","sourceDirName":"Spark/gems/source-target/warehouse","slug":"/engineers/salesforce","permalink":"/prophecy-docs-staging/preview/pr-601/engineers/salesforce","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-601/tags/gems"},{"inline":true,"label":"warehouse","permalink":"/prophecy-docs-staging/preview/pr-601/tags/warehouse"},{"inline":true,"label":"salesforce","permalink":"/prophecy-docs-staging/preview/pr-601/tags/salesforce"}],"version":"current","frontMatter":{"title":"Salesforce","id":"salesforce","slug":"/engineers/salesforce","description":"Salesforce","tags":["gems","warehouse","salesforce"]},"sidebar":"mySidebar","previous":{"title":"Redshift","permalink":"/prophecy-docs-staging/preview/pr-601/engineers/redshift"},"next":{"title":"Snowflake","permalink":"/prophecy-docs-staging/preview/pr-601/engineers/snowflake"}}');var t=r(74848),n=r(28453),i=r(49235),l=r(65537),d=r(79329);const c={title:"Salesforce",id:"salesforce",slug:"/engineers/salesforce",description:"Salesforce",tags:["gems","warehouse","salesforce"]},o=void 0,h={},u=[{value:"Source",id:"source",level:2},{value:"Source Parameters",id:"source-parameters",level:3},{value:"Example",id:"example",level:2},{value:"Generated Code",id:"source-code",level:3},{value:"Target",id:"target",level:2},{value:"Target Parameters",id:"target-parameters",level:3},{value:"Generated Code",id:"target-code",level:3}];function p(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.A,{python_package_name:"ProphecyWebAppPython",python_package_version:"0.0.1+",scala_package_name:"",scala_package_version:"",scala_lib:"",python_lib:"",uc_single:"Not Supported",uc_shared:"Not Supported",livy:"Not Supported"}),"\n",(0,t.jsx)(s.p,{children:"This gem has below features:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Dataset Creation - Create dataset in Salesforce Wave from Spark DataFrame."}),"\n",(0,t.jsx)(s.li,{children:"Read Salesforce Wave dataset - User has to provide SAQL to read data from Salesforce Wave. The query result will be constructed as DataFrame."}),"\n",(0,t.jsx)(s.li,{children:"Read Salesforce Object - User has to provide SOQL to read data from Salesforce object. The query result will be constructed as DataFrame."}),"\n",(0,t.jsx)(s.li,{children:"Update Salesforce Object - Salesforce object will be updated with the details present in DataFrame."}),"\n"]}),"\n",(0,t.jsxs)(s.admonition,{type:"note",children:[(0,t.jsxs)(s.p,{children:["This connector is built on top of the already available ",(0,t.jsx)(s.a,{href:"https://github.com/springml/spark-salesforce/",children:(0,t.jsx)(s.code,{children:"spark-salesforce connector"})}),"."]}),(0,t.jsxs)(s.p,{children:["To use this gem in Prophecy, ",(0,t.jsx)(s.code,{children:"com.springml:spark-salesforce_2.12:1.1.4"})," Maven external dependency needs to be installed on cluster.\nFor installing dependencies from Prophecy UI. Please check ",(0,t.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-601/engineers/dependencies",children:"dependency management docs"}),"."]})]}),"\n",(0,t.jsx)(s.h2,{id:"source",children:"Source"}),"\n",(0,t.jsx)(s.p,{children:"Reads data from Salesforce object and wave datasets."}),"\n",(0,t.jsx)(s.h3,{id:"source-parameters",children:"Source Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Required"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Dataset Name"}),(0,t.jsx)(s.td,{children:"Name of the dataset"}),(0,t.jsx)(s.td,{children:"True"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Credential Type"}),(0,t.jsxs)(s.td,{children:["Credential Type: ",(0,t.jsx)(s.code,{children:"Databricks Secrets"})," or ",(0,t.jsx)(s.code,{children:"Username & Password"})]}),(0,t.jsx)(s.td,{children:"True"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Credentials"}),(0,t.jsx)(s.td,{children:"Databricks credential name, else username and password for the snowflake account"}),(0,t.jsxs)(s.td,{children:["Required if ",(0,t.jsx)(s.code,{children:"Credential Type"})," is ",(0,t.jsx)(s.code,{children:"Databricks Secrets"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Username"}),(0,t.jsx)(s.td,{children:"Salesforce Wave Username. This user should have privilege to upload datasets or execute SAQL or execute SOQL."}),(0,t.jsxs)(s.td,{children:["Required if ",(0,t.jsx)(s.code,{children:"Credential Type"})," is ",(0,t.jsx)(s.code,{children:"Username & Password"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Password"}),(0,t.jsx)(s.td,{children:"Salesforce Wave Password. Please append security token along with password. For example, if a user\u2019s password is mypassword, and the security token is XXXXXXXXXX, the user must provide mypasswordXXXXXXXXXX"}),(0,t.jsxs)(s.td,{children:["Required if ",(0,t.jsx)(s.code,{children:"Credential Type"})," is ",(0,t.jsx)(s.code,{children:"Username & Password"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Login Url"}),(0,t.jsxs)(s.td,{children:["(Optional) Salesforce Login URL. Default value ",(0,t.jsx)(s.a,{href:"https://login.salesforce.com",children:"https://login.salesforce.com"}),"."]}),(0,t.jsx)(s.td,{children:"True"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Read from source"}),(0,t.jsxs)(s.td,{children:["Strategy to read data: ",(0,t.jsx)(s.code,{children:"SAQL"})," or ",(0,t.jsx)(s.code,{children:"SOQL"}),"."]}),(0,t.jsx)(s.td,{children:"True"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"SAQL Query"}),(0,t.jsx)(s.td,{children:"(Optional) SAQL query to used to query Salesforce Wave. Mandatory for reading Salesforce Wave dataset"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"SOQL Query"}),(0,t.jsx)(s.td,{children:"(Optional) SOQL query to used to query Salesforce Object. Mandatory for reading Salesforce Object like Opportunity"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Version"}),(0,t.jsx)(s.td,{children:"(Optional) Salesforce API Version. Default 35.0"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Infer Schema"}),(0,t.jsx)(s.td,{children:"(Optional) Infer schema from the query results. Sample rows will be taken to find the datatype."}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Date Format"}),(0,t.jsxs)(s.td,{children:["(Optional) A string that indicates the format that follow java.text.SimpleDateFormat to use when reading timestamps. ",(0,t.jsx)("br",{})," This applies to TimestampType. By default, it is null which means trying to parse timestamp by ",(0,t.jsx)(s.code,{children:"java.sql.Timestamp.valueOf()"}),"."]}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Result Variable"}),(0,t.jsxs)(s.td,{children:["(Optional) result variable used in SAQL query. To paginate SAQL queries this package will add the required offset and limit.",(0,t.jsx)("br",{})," For example, in this SAQL query q = load ",(0,t.jsx)(s.code,{children:'\\"<Dataset_id>/<Dataset_version_id>\\"'}),"; q = foreach q generate 'Name' as 'Name', 'Email' as 'Email'; q is the result variable."]}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Page Size"}),(0,t.jsxs)(s.td,{children:["(Optional) Page size for each query to be executed against Salesforce Wave. Default value is 2000.",(0,t.jsx)("br",{})," This option can only be used if resultVariable is set."]}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Bulk"}),(0,t.jsx)(s.td,{children:"(Optional) Flag to enable bulk query. This is the preferred method when loading large sets of data. Salesforce will process batches in the background. Default value is false."}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PK Chunking"}),(0,t.jsx)(s.td,{children:"(Optional) Flag to enable automatic primary key chunking for bulk query job. This splits bulk queries into separate batches that of the size defined by chunkSize option. By default false and the default chunk size is 100,000."}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Chunk size"}),(0,t.jsx)(s.td,{children:"(Optional) The size of the number of records to include in each batch. Default value is 100,000. This option can only be used when pkChunking is true. Maximum size is 250,000."}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Timeout"}),(0,t.jsxs)(s.td,{children:["(Optional) The maximum time spent polling for the completion of bulk query job.",(0,t.jsx)("br",{})," This option can only be used when bulk is true."]}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Max chars per column"}),(0,t.jsx)(s.td,{children:"(Optional) The maximum length of a column. This option can only be used when bulk is true. Default value is 4096."}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Query All"}),(0,t.jsx)(s.td,{children:"(Optional) Toggle to retrieve deleted and archived records for SOQL queries. Default value is false."}),(0,t.jsx)(s.td,{})]})]})]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:["Steps to reset your Salesforce security token can be found at this ",(0,t.jsx)(s.a,{href:"https://www.mcafee.com/blogs/enterprise/cloud-security/what-is-salesforce-security-token-and-how-do-i-find-it/",children:"link."})]})}),"\n",(0,t.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(s.p,{children:["Below is an example of fetching all leads from sales cloud using Prophecy IDE.\nWe will be using ",(0,t.jsx)(s.code,{children:"SOQL"})," query to query our leads dataset on sales cloud."]}),"\n",(0,t.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,t.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,t.jsx)("iframe",{src:"https://user-images.githubusercontent.com/103921419/193517497-54c5544d-3b98-45ae-95e1-cb036bad6e4c.mp4",title:"Salesforce Source",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,t.jsx)(s.h3,{id:"source-code",children:"Generated Code"}),"\n","\n",(0,t.jsx)(l.A,{children:(0,t.jsx)(d.A,{value:"py",label:"Python",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-py",children:'def read_salesforce(spark: SparkSession) -> DataFrame:\n    return spark.read\\\n        .format("com.springml.spark.salesforce")\\\n        .option("username", "your_salesforce_username")\\\n        .option("password", "your_salesforce_password_with_secutiry_token")\\\n        .option("soql", "select id, name, email from lead")\\\n        .load()\n\n'})})})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"target",children:"Target"}),"\n",(0,t.jsx)(s.p,{children:"Create/update datasets and Salesforce objects."}),"\n",(0,t.jsx)(s.h3,{id:"target-parameters",children:"Target Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Required"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Dataset Name"}),(0,t.jsx)(s.td,{children:"Name of the dataset"}),(0,t.jsx)(s.td,{children:"True"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Credential Type"}),(0,t.jsxs)(s.td,{children:["Credential Type: ",(0,t.jsx)(s.code,{children:"Databricks Secrets"})," or ",(0,t.jsx)(s.code,{children:"Username & Password"})]}),(0,t.jsx)(s.td,{children:"True"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Credentials"}),(0,t.jsx)(s.td,{children:"Databricks credential name, else username and password for the snowflake account"}),(0,t.jsxs)(s.td,{children:["Required if ",(0,t.jsx)(s.code,{children:"Credential Type"})," is ",(0,t.jsx)(s.code,{children:"Databricks Secrets"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Username"}),(0,t.jsx)(s.td,{children:"Salesforce Wave Username. This user should have privilege to upload datasets or execute SAQL or execute SOQL."}),(0,t.jsxs)(s.td,{children:["Required if ",(0,t.jsx)(s.code,{children:"Credential Type"})," is ",(0,t.jsx)(s.code,{children:"Username & Password"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Password"}),(0,t.jsx)(s.td,{children:"Salesforce Wave Password. Please append security token along with password.For example, if a user\u2019s password is mypassword, and the security token is XXXXXXXXXX, the user must provide mypasswordXXXXXXXXXX"}),(0,t.jsxs)(s.td,{children:["Required if ",(0,t.jsx)(s.code,{children:"Credential Type"})," is ",(0,t.jsx)(s.code,{children:"Username & Password"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Login Url"}),(0,t.jsxs)(s.td,{children:["(Optional) Salesforce Login URL. Default value ",(0,t.jsx)(s.a,{href:"https://login.salesforce.com",children:"https://login.salesforce.com"}),"."]}),(0,t.jsx)(s.td,{children:"True"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Salesforce dataset name"}),(0,t.jsx)(s.td,{children:"(Optional) Name of the Dataset to be created in Salesforce Wave. Required for Dataset Creation."}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Salesforce object name"}),(0,t.jsx)(s.td,{children:"(Optional) Salesforce Object to be updated. (e.g.) Contact. Mandatory if bulk is true."}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Metadata Config in JSON"}),(0,t.jsxs)(s.td,{children:["(Optional) Metadata configuration which will be used to construct [Salesforce Wave Dataset Metadata] ",(0,t.jsx)("br",{})," (",(0,t.jsx)(s.a,{href:"https://resources.docs.salesforce.com/sfdc/pdf/bi_dev_guide_ext_data_format.pdf",children:"https://resources.docs.salesforce.com/sfdc/pdf/bi_dev_guide_ext_data_format.pdf"}),"). Metadata configuration has to be provided in JSON format."]}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Upsert"}),(0,t.jsx)(s.td,{children:'(Optional) Flag to upsert data to Salesforce. This performs an insert or update operation using the "externalIdFieldName" as the primary ID. Existing fields that are not in the DataFrame being pushed will not be updated. Default "false".'}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"External Id Field Name"}),(0,t.jsx)(s.td,{children:'(Optional) The name of the field used as the external ID for Salesforce Object. This value is only used when doing an update or upsert. Default "Id".'}),(0,t.jsx)(s.td,{})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"target-code",children:"Generated Code"}),"\n",(0,t.jsx)(l.A,{children:(0,t.jsx)(d.A,{value:"py",label:"Python",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-py",children:'def write_salesforce(spark: SparkSession, in0: DataFrame):\n    in0.write.format("com.springml.spark.salesforce")\\\n\t\t  .option("username", "your_salesforce_username")\\\n\t\t  .option("password", "your_salesforce_password_with_secutiry_token")\\\n\t\t  .option("DatasetName", "your_Dataset_name")\n\t\t  .save()\n'})})})})]})}function x(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},49235:(e,s,r)=>{r.d(s,{A:()=>t});r(96540);var a=r(74848);function t(e){return(0,a.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:e.python_package_name}),(0,a.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:e.scala_package_name}),(0,a.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,a.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,a.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,a.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,a.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Livy"}),(0,a.jsx)("span",{className:"right",children:e.livy})]})}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]})}},65537:(e,s,r)=>{r.d(s,{A:()=>w});var a=r(96540),t=r(18215),n=r(65627),i=r(56347),l=r(50372),d=r(30604),c=r(11861),o=r(78749);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:s,children:r}=e;return(0,a.useMemo)((()=>{const e=s??function(e){return h(e).map((e=>{let{props:{value:s,label:r,attributes:a,default:t}}=e;return{value:s,label:r,attributes:a,default:t}}))}(r);return function(e){const s=(0,c.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,r])}function p(e){let{value:s,tabValues:r}=e;return r.some((e=>e.value===s))}function x(e){let{queryString:s=!1,groupId:r}=e;const t=(0,i.W6)(),n=function(e){let{queryString:s=!1,groupId:r}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:s,groupId:r});return[(0,d.aZ)(n),(0,a.useCallback)((e=>{if(!n)return;const s=new URLSearchParams(t.location.search);s.set(n,e),t.replace({...t.location,search:s.toString()})}),[n,t])]}function f(e){const{defaultValue:s,queryString:r=!1,groupId:t}=e,n=u(e),[i,d]=(0,a.useState)((()=>function(e){let{defaultValue:s,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:n}))),[c,h]=x({queryString:r,groupId:t}),[f,j]=function(e){let{groupId:s}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(s),[t,n]=(0,o.Dv)(r);return[t,(0,a.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:t}),m=(()=>{const e=c??f;return p({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{m&&d(m)}),[m]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),j(e)}),[h,j,n]),tabValues:n}}var j=r(9136);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function g(e){let{className:s,block:r,selectedValue:a,selectValue:i,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.a_)(),o=e=>{const s=e.currentTarget,r=d.indexOf(s),t=l[r].value;t!==a&&(c(s),i(t))},h=e=>{let s=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;s=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;s=d[r]??d[d.length-1];break}}s?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},s),children:l.map((e=>{let{value:s,label:r,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===s?0:-1,"aria-selected":a===s,ref:e=>{d.push(e)},onKeyDown:h,onClick:o,...n,className:(0,t.A)("tabs__item",m.tabItem,n?.className,{"tabs__item--active":a===s}),children:r??s},s)}))})}function y(e){let{lazy:s,children:r,selectedValue:n}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(s){const e=i.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,s)=>(0,a.cloneElement)(e,{key:s,hidden:e.props.value!==n})))})}function v(e){const s=f(e);return(0,b.jsxs)("div",{className:(0,t.A)("tabs-container",m.tabList),children:[(0,b.jsx)(g,{...s,...e}),(0,b.jsx)(y,{...s,...e})]})}function w(e){const s=(0,j.A)();return(0,b.jsx)(v,{...e,children:h(e.children)},String(s))}},79329:(e,s,r)=>{r.d(s,{A:()=>i});r(96540);var a=r(18215);const t={tabItem:"tabItem_Ymn6"};var n=r(74848);function i(e){let{children:s,hidden:r,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,i),hidden:r,children:s})}}}]);