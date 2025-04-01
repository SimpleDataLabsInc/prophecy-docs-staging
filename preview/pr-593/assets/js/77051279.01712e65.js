"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[75713],{28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var i=r(96540);const s={},n=i.createContext(s);function a(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(n.Provider,{value:t},e.children)}},49235:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var i=r(74848);function s(e){return(0,i.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,i.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,i.jsxs)("span",{className:"badge-dependency",children:[(0,i.jsx)("span",{className:"left",children:e.python_package_name}),(0,i.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,i.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,i.jsxs)("span",{className:"badge-dependency",children:[(0,i.jsx)("span",{className:"left",children:e.scala_package_name}),(0,i.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,i.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,i.jsxs)("span",{className:"badge-dependency",children:[(0,i.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,i.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,i.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,i.jsxs)("span",{className:"badge-dependency",children:[(0,i.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,i.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,i.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,i.jsxs)("span",{className:"badge-spark",children:[(0,i.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,i.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,i.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,i.jsxs)("span",{className:"badge-spark",children:[(0,i.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,i.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,i.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,i.jsxs)("span",{className:"badge-spark",children:[(0,i.jsx)("span",{className:"left",children:"Livy"}),(0,i.jsx)("span",{className:"right",children:e.livy})]})}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{})]})}},65537:(e,t,r)=>{r.d(t,{A:()=>w});var i=r(96540),s=r(18215),n=r(65627),a=r(56347),o=r(50372),l=r(30604),d=r(11861),c=r(78749);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:r}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:r,attributes:i,default:s}}=e;return{value:t,label:r,attributes:i,default:s}}))}(r);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const s=(0,a.W6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(n),(0,i.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(s.location.search);t.set(n,e),s.replace({...s.location,search:t.toString()})}),[n,s])]}function j(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,n=u(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=r.find((e=>e.default))??r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:n}))),[d,h]=x({queryString:r,groupId:s}),[j,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,n]=(0,c.Dv)(r);return[s,(0,i.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:s}),f=(()=>{const e=d??j;return p({value:e,tabValues:n})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),m(e)}),[h,m,n]),tabValues:n}}var m=r(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function g(e){let{className:t,block:r,selectedValue:i,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,n.a_)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),s=o[r].value;s!==i&&(d(t),a(s))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>{l.push(e)},onKeyDown:h,onClick:c,...n,className:(0,s.A)("tabs__item",f.tabItem,n?.className,{"tabs__item--active":i===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:n}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function v(e){const t=j(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,b.jsx)(g,{...t,...e}),(0,b.jsx)(y,{...t,...e})]})}function w(e){const t=(0,m.A)();return(0,b.jsx)(v,{...e,children:h(e.children)},String(t))}},79329:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var i=r(18215);const s={tabItem:"tabItem_Ymn6"};var n=r(74848);function a(e){let{children:t,hidden:r,className:a}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,a),hidden:r,children:t})}},81455:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"Spark/gems/source-target/warehouse/bigquery","title":"BigQuery","description":"BigQuery","source":"@site/docs/Spark/gems/source-target/warehouse/bigquery.md","sourceDirName":"Spark/gems/source-target/warehouse","slug":"/engineers/bigquery","permalink":"/prophecy-docs-staging/preview/pr-593/engineers/bigquery","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-593/tags/gems"},{"inline":true,"label":"warehouse","permalink":"/prophecy-docs-staging/preview/pr-593/tags/warehouse"},{"inline":true,"label":"bigquery","permalink":"/prophecy-docs-staging/preview/pr-593/tags/bigquery"}],"version":"current","frontMatter":{"title":"BigQuery","id":"bigquery","slug":"/engineers/bigquery","description":"BigQuery","tags":["gems","warehouse","bigquery"]},"sidebar":"mySidebar","previous":{"title":"XML","permalink":"/prophecy-docs-staging/preview/pr-593/engineers/xml"},"next":{"title":"CosmosDB","permalink":"/prophecy-docs-staging/preview/pr-593/engineers/cosmosdb"}}');var s=r(74848),n=r(28453),a=r(49235),o=r(65537),l=r(79329);const d={title:"BigQuery",id:"bigquery",slug:"/engineers/bigquery",description:"BigQuery",tags:["gems","warehouse","bigquery"]},c=void 0,h={},u=[{value:"Source",id:"source",level:2},{value:"Source Parameters",id:"source-parameters",level:3},{value:"Example",id:"example",level:2},{value:"Generated Code",id:"source-code",level:3},{value:"Target",id:"target",level:2},{value:"Target Parameters",id:"target-parameters",level:3},{value:"Generated Code",id:"target-code",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{python_package_name:"ProphecyWarehousePython",python_package_version:"0.0.1+",scala_package_name:"",scala_package_version:"",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"Not Supported"}),"\n",(0,s.jsx)(t.admonition,{title:"Built on",type:"info",children:(0,s.jsxs)(t.p,{children:["This connector is built on top of the already available ",(0,s.jsx)(t.a,{href:"https://github.com/GoogleCloudDataproc/spark-bigquery-connector/",children:(0,s.jsx)(t.code,{children:"spark-bigquery-connector"})})," connector. ",(0,s.jsx)("br",{}),"\nFor non-Databricks clusters, we need to install the corresponding library and please refer the library compatiblity matrix in the ",(0,s.jsx)(t.a,{href:"https://github.com/GoogleCloudDataproc/spark-bigquery-connector#connector-to-spark-compatibility-matrix",children:(0,s.jsx)(t.code,{children:"Spark BigQuery"})})," documentation. ",(0,s.jsx)("br",{})]})}),"\n",(0,s.jsxs)(t.p,{children:["Allows read and write operations on ",(0,s.jsx)(t.code,{children:"BigQuery"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"source",children:"Source"}),"\n",(0,s.jsx)(t.p,{children:"Reads data from BigQuery tables."}),"\n",(0,s.jsx)(t.p,{children:"For establishing the connecting to BigQuery we have below three options:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"None: Users are not required to set any credentails if the BigQuery configurations are set at cluster level."}),"\n",(0,s.jsx)(t.li,{children:"JSON Credentials Filepath: BigQuery JSON key configuration can be passed to BigQuery."}),"\n",(0,s.jsxs)(t.li,{children:["Databricks secrets: If the JSON configuration is directly stored on pipeline configs as Databricks secrets then refer the config variable as ",(0,s.jsx)(t.code,{children:"${config_vairable}"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{title:"How to get the JSON Credentials from BigQuery?",type:"info",children:(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Steps to get download BigQuery JSON Credentials"}),(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[" Goto ",(0,s.jsx)("a",{href:"https://console.cloud.google.com/apis/credentials",children:(0,s.jsx)(t.a,{href:"https://console.cloud.google.com/apis/credentials",children:"https://console.cloud.google.com/apis/credentials"})})," "]}),(0,s.jsx)("li",{children:' Click on "+ CREATE CREDENTIALS" button on top next and select "Service account" '}),(0,s.jsx)("li",{children:" Fill in the credentail creation form and will create the Service account after submit "}),(0,s.jsx)("li",{children:' Skip the above steps if Service account is already created and goto "KEYS" section of service account '}),(0,s.jsx)("li",{children:' Click on "ADD KEY" -> Create new Key -> Select "JSON" key type -> CREATE will download the json configuration file '})]})]})}),"\n",(0,s.jsx)(t.h3,{id:"source-parameters",children:"Source Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Required"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Parent Project Name"}),(0,s.jsx)(t.td,{children:"Google Cloud Project ID of the table to bill for the export"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Table Name"}),(0,s.jsx)(t.td,{children:"Name of the table"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Credentials file path"}),(0,s.jsx)(t.td,{children:"Path to BigQuery credentials file. If the credentials are set Spark conf level then select none in credentials options."}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Configuration variable name"}),(0,s.jsxs)(t.td,{children:["Choose the Databricks secrets and specify the variable in ",(0,s.jsx)(t.code,{children:"${<variable>}"})," format if the secrets are defined in pipeline configs."]}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Is secret Base64 encoded"}),(0,s.jsx)(t.td,{children:"Enable if the configuration variable above is Base64 encoded."}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Project Name"}),(0,s.jsx)(t.td,{children:"(Optional) Google Cloud Project ID of the table. Defaults to the project of the Service Account being used."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Dataset Name"}),(0,s.jsx)(t.td,{children:"(Optional) Dataset containing the table. Required unless it's mentioned in the Table Name."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Maximum partitions"}),(0,s.jsx)(t.td,{children:"(Optional) Maximum number of partitions to split the data into. Actual number may be less if BigQuery deems the data small enough."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Minimum partitions"}),(0,s.jsx)(t.td,{children:"(Optional) Minimal number of partitions to split the data into. Actual number may be less if BigQuery deems the data small enough."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Enables read views"}),(0,s.jsx)(t.td,{children:"(Optional) Enables the connector to read from views and not only tables. Please read the relevant section before activating this option."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MaterializedView projectID"}),(0,s.jsx)(t.td,{children:"(Optional) Project id where the materialized view is going to be created"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MaterializedView dataset"}),(0,s.jsx)(t.td,{children:"(Optional) Dataset where the materialized view is going to be created. This dataset should be in same location as the view or the queried tables."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Materialized expiration time in min's"}),(0,s.jsx)(t.td,{children:"(Optional) Expiration time of the temporary table holding the materialized data of a view or a query, in minutes. Notice that the connector may re-use the temporary table due to the use of local cache and in order to reduce BigQuery computation, so very low values may cause errors."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Read dataformat"}),(0,s.jsx)(t.td,{children:"(Optional) Data Format for reading from BigQuery. Options : ARROW, AVRO Unsupported Arrow filters are not pushed down and results are filtered later by Spark. (Currently Arrow does not support disjunction across columns.)"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Enable optimize-empty-projection"}),(0,s.jsx)(t.td,{children:"(Optional) Connector uses an optimized empty projection (select without any columns) logic, used for count() execution"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Enable push-all-filters"}),(0,s.jsx)(t.td,{children:"(Optional) Pushes all the filters Spark can delegate to BigQuery Storage API. This reduces amount of data that needs to be sent from BigQuery Storage API servers to Spark clients. Default: true"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Additional Job Labels"}),(0,s.jsx)(t.td,{children:"(Optional) Can be used to add labels to the connector initiated query and load BigQuery jobs. Multiple labels can be set."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Traceability Application Name"}),(0,s.jsx)(t.td,{children:"(Optional) Application name used to trace BigQuery Storage read and write sessions. Setting the application name is required to set the trace ID on the sessions."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Traceability Job ID"}),(0,s.jsx)(t.td,{children:"(Optional) Job ID used to trace BigQuery Storage read and write sessions."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Proxy URL"}),(0,s.jsxs)(t.td,{children:["(Optional) Address of the proxy server. The proxy must be a HTTP proxy and address should be in the ",(0,s.jsx)(t.code,{children:"host:port"})," format. Can be alternatively set in the Spark configuration (spark.conf.set(...)) or in Hadoop Configuration (fs.gs.proxy.address)."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Proxy username"}),(0,s.jsxs)(t.td,{children:["(Optional) UserName used to connect to the proxy. Can be alternatively set in the Spark configuration ",(0,s.jsx)(t.code,{children:"(spark.conf.set(...))"})," or in Hadoop Configuration (fs.gs.proxy.username)."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Proxy password"}),(0,s.jsxs)(t.td,{children:["(Optional) Password used to connect to the proxy. Can be alternatively set in the Spark configuration ",(0,s.jsx)(t.code,{children:"(spark.conf.set(...))"})," or in Hadoop Configuration (fs.gs.proxy.password)."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Maximum HTTP retries"}),(0,s.jsxs)(t.td,{children:["(Optional) Maximum number of retries for the low-level HTTP requests to BigQuery. Can be alternatively set in the Spark configuration ",(0,s.jsx)(t.code,{children:'(spark.conf.set("httpMaxRetry", ...))'})," or in Hadoop Configuration (fs.gs.http.max.retry). Default is 10."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"HTTP Connection timeout in MSec's"}),(0,s.jsxs)(t.td,{children:["(Optional) Timeout in milliseconds to establish a connection with BigQuery. Can be alternatively set in the Spark configuration ",(0,s.jsx)(t.code,{children:'(spark.conf.set("httpConnectTimeout", ...))'})," or in Hadoop Configuration (fs.gs.http.connect-timeout). Default is 60000."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"HTTP Read timeout in MSec's"}),(0,s.jsxs)(t.td,{children:["(Optional) Timeout in milliseconds to read data from an established connection. Can be alternatively set in the Spark configuration ",(0,s.jsx)(t.code,{children:'(spark.conf.set("httpReadTimeout", ...))'})," or in Hadoop Configuration (fs.gs.http.read-timeout). Default is 60000."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Arrow Compression Codec"}),(0,s.jsxs)(t.td,{children:["(Optional) Compression codec while reading from a BigQuery table when using Arrow format. Options : ZSTD (Zstandard compression), LZ4_FRAME (",(0,s.jsx)(t.a,{href:"https://github.com/lz4/lz4/blob/dev/doc/lz4_Frame_format.md",children:"https://github.com/lz4/lz4/blob/dev/doc/lz4_Frame_format.md"}),"), COMPRESSION_UNSPECIFIED. Default is COMPRESSION_UNSPECIFIED."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Cache expiration time in min's"}),(0,s.jsx)(t.td,{children:"(Optional) Expiration time of the in-memory cache storing query information. To disable caching, set the value to 0. Default is 15 min's."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Cache read session timeout in sec's"}),(0,s.jsx)(t.td,{children:"(Optional) Timeout in seconds to create a ReadSession when reading a table. For Extremely large table this value should be increased. Default is 600 sec's."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Conversation datetime zone ID"}),(0,s.jsx)(t.td,{children:"(Optional) Time zone ID used to convert BigQuery's DATETIME into Spark's Timestamp, and vice versa. The full list can be seen by running java.time.ZoneId.getAvailableZoneIds() in Java/Scala, or sc._jvm.java.time.ZoneId.getAvailableZoneIds() in pyspark. Default is UTC."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Job query priority"}),(0,s.jsxs)(t.td,{children:["(Optional) Priority levels set for the job while reading data from BigQuery query. The permitted values are",":BATCH"," - Query is queued and started as soon as idle resources are available, usually within a few minutes. If the query hasn't started within 3 hours, its priority is changed to INTERACTIVE."]}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"Below is an example of fetching all customer data from BigQuery using Prophecy IDE.\nWe will be using BigQuery table to fetch the customer data."}),"\n",(0,s.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,s.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,s.jsx)("iframe",{src:"https://user-images.githubusercontent.com/103921419/233473742-49cb6104-1f4b-4380-b34d-b89dc81d7921.mp4",title:"BigQuery Source",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,s.jsx)(t.h3,{id:"source-code",children:"Generated Code"}),"\n","\n",(0,s.jsx)(o.A,{children:(0,s.jsx)(l.A,{value:"py",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-py",children:'def read_bigquery(spark: SparkSession) -> DataFrame:\n    return spark.read\\\n        .format("bigquery")\\\n        .option("credentials", "dbfs:/bucket/prefix/file.json")\\\n        .option("table", "tablename")\\\n        .load()\n\n'})})})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"target",children:"Target"}),"\n",(0,s.jsx)(t.p,{children:"Create/update BigQuery Tables"}),"\n",(0,s.jsx)(t.h3,{id:"target-parameters",children:"Target Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Required"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Parent Project Name"}),(0,s.jsx)(t.td,{children:"Google Cloud Project ID of the table to bill for the export"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Table Name"}),(0,s.jsx)(t.td,{children:"Name of the table"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Credentials file path"}),(0,s.jsx)(t.td,{children:"Path to BigQuery credentials file. If the credentials are set at Spark conf level then select none in credentials options."}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Configuration variable name"}),(0,s.jsxs)(t.td,{children:["Choose the Databricks secrets and specify the variable in ",(0,s.jsx)(t.code,{children:"${<variable>}"})," format if the secrets are defined in pipeline configs."]}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Is secret Base64 encoded"}),(0,s.jsx)(t.td,{children:"Enable if the configuration variable above is Base64 encoded"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Project Name"}),(0,s.jsx)(t.td,{children:"(Optional) Google Cloud Project ID of the table. Defaults to the project of the Service Account being used."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Dataset Name"}),(0,s.jsx)(t.td,{children:"(Optional) Dataset containing the table. Required unless it's mentioned in the Table Name."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Table labels"}),(0,s.jsx)(t.td,{children:"(Optional) Can be used to add labels to the table while writing to a table. Multiple labels can be set."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Disposition creation"}),(0,s.jsxs)(t.td,{children:["(Optional) Specifies whether the Job is allowed to create new tables. The permitted values are",":CREATE_IF_NEEDED"," - Configures the job to create the table if it does not exist, CREATE_NEVER - Configures the job to fail if the table does not exist."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Write Method"}),(0,s.jsx)(t.td,{children:"(Optional) Controls the method in which the data is written to BigQuery. Available values are direct to use the BigQuery Storage Write API and indirect which writes the data first to GCS and then triggers a BigQuery load operation."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Temporary GCS Bucket"}),(0,s.jsxs)(t.td,{children:["(Optional) GCS bucket that temporarily holds the data before it is loaded to BigQuery. Required unless set in the Spark configuration ",(0,s.jsx)(t.code,{children:"(spark.conf.set(...))"}),". Not supported by the ",(0,s.jsx)(t.code,{children:"DIRECT"})," write method."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Persistent GCS Bucket"}),(0,s.jsxs)(t.td,{children:["(Optional) GCS bucket that holds the data before it is loaded to BigQuery. If informed, the data won't be deleted after write data into BigQuery. Not supported by the ",(0,s.jsx)(t.code,{children:"DIRECT"})," write method."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Persistent GCS Path"}),(0,s.jsxs)(t.td,{children:["(Optional) GCS path that holds the data before it is loaded to BigQuery. Used only with persistentGcsBucket. Not supported by the ",(0,s.jsx)(t.code,{children:"DIRECT"})," write method."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Intermediate dataformat"}),(0,s.jsxs)(t.td,{children:['(Optional) Format of the data before it is loaded to BigQuery, values can be either "parquet","orc" or "avro". In order to use the Avro format, the ',(0,s.jsx)(t.code,{children:"spark-avro"})," package must be added in runtime. Default is parquet."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Date partition"}),(0,s.jsx)(t.td,{children:'(Optional) date partition the data is going to be written to. Should be a date string given in the format YYYYMMDD. Can be used to overwrite the data of a single partition, like this: df.write.format("bigquery").option("datePartition", "20220331").mode("overwrite").save("table"). Can also be used with different partition types like: HOUR: YYYYMMDDHH, MONTH: YYYYMM, YEAR: YYYY'}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Partition field"}),(0,s.jsxs)(t.td,{children:["(Optional) field is specified together with ",(0,s.jsx)(t.code,{children:"partitionType"}),", the table is partitioned by this field. The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED. If the option is not set for a partitioned table, then the table will be partitioned by pseudo column, referenced via either'_PARTITIONTIME' as TIMESTAMP type, or '_PARTITIONDATE' as DATE type. Not supported by the ",(0,s.jsx)(t.code,{children:"DIRECT"})," write method."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Partition expiration MSec's"}),(0,s.jsxs)(t.td,{children:["(Optional) Number of milliseconds for which to keep the storage for partitions in the table. The storage in a partition will have an expiration time of its partition time plus this value. Not supported by the ",(0,s.jsx)(t.code,{children:"DIRECT"})," write method."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Partition type of the field"}),(0,s.jsxs)(t.td,{children:["(Optional) Supported types are: HOUR, DAY, MONTH, YEAR. This option is mandatory for a target table to be partitioned. Default is DAY. Not supported by the ",(0,s.jsx)(t.code,{children:"DIRECT"})," write method."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Cluster field"}),(0,s.jsx)(t.td,{children:"(Optional) A string of non-repeated, top level columns."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Enable allow-field-addition"}),(0,s.jsx)(t.td,{children:"(Optional) Adds the ALLOW_FIELD_ADDITION SchemaUpdateOption to the BigQuery LoadJob. Allowed values are true and false. Default is false."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Enable allow-field-relaxation"}),(0,s.jsx)(t.td,{children:"(Optional) Adds the ALLOW_FIELD_RELAXATION SchemaUpdateOption to the BigQuery LoadJob. Allowed values are true and false. Default is false."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Proxy URL"}),(0,s.jsxs)(t.td,{children:["(Optional) Address of the proxy server. The proxy must be a HTTP proxy and address should be in the ",(0,s.jsx)(t.code,{children:"host:port"})," format. Can be alternatively set in the Spark configuration ",(0,s.jsx)(t.code,{children:"(spark.conf.set(...))"})," or in Hadoop Configuration (fs.gs.proxy.address)."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Proxy username"}),(0,s.jsxs)(t.td,{children:["(Optional) UserName used to connect to the proxy. Can be alternatively set in the Spark configuration ",(0,s.jsx)(t.code,{children:"(spark.conf.set(...))"})," or in Hadoop Configuration (fs.gs.proxy.username)."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Proxy password"}),(0,s.jsxs)(t.td,{children:["(Optional) Password used to connect to the proxy. Can be alternatively set in the Spark configuration ",(0,s.jsx)(t.code,{children:"(spark.conf.set(...))"})," or in Hadoop Configuration (fs.gs.proxy.password)."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Maximum HTTP retries"}),(0,s.jsxs)(t.td,{children:["(Optional) Maximum number of retries for the low-level HTTP requests to BigQuery. Can be alternatively set in the Spark configuration ",(0,s.jsx)(t.code,{children:'(spark.conf.set("httpMaxRetry", ...))'})," or in Hadoop Configuration (fs.gs.http.max.retry). Default is 10."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"HTTP Connection timeout in MSec's"}),(0,s.jsxs)(t.td,{children:["(Optional) Timeout in milliseconds to establish a connection with BigQuery. Can be alternatively set in the Spark configuration ",(0,s.jsx)(t.code,{children:'(spark.conf.set("httpConnectTimeout", ...))'})," or in Hadoop Configuration (fs.gs.http.connect-timeout). Default is 60000."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Enable mode-check-for-schema-fields"}),(0,s.jsx)(t.td,{children:"(Optional) Checks the mode of every field in destination schema to be equal to the mode in corresponding source field schema, during DIRECT write. Default is true."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Enable list-interface"}),(0,s.jsxs)(t.td,{children:["(Optional) Indicates whether to use schema inference specifically when the mode is Parquet (",(0,s.jsx)(t.a,{href:"https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#parquetoptions",children:"https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#parquetoptions"}),"). Default is true."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Conversation datetime zone ID"}),(0,s.jsx)(t.td,{children:"(Optional) Time zone ID used to convert BigQuery's DATETIME into Spark's Timestamp, and vice versa. The full list can be seen by running java.time.ZoneId.getAvailableZoneIds() in Java/Scala, or sc._jvm.java.time.ZoneId.getAvailableZoneIds() in pyspark. Default is UTC."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Job query priority"}),(0,s.jsx)(t.td,{children:"(Optional) Option will be effective when DIRECT write is used with OVERWRITE mode, where the connector overwrites the destination table using MERGE statement."}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"target-code",children:"Generated Code"}),"\n",(0,s.jsx)(o.A,{children:(0,s.jsxs)(l.A,{value:"py",label:"Python",children:[(0,s.jsx)(t.p,{children:"Direct write using the BigQuery Storage Write API"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-py",children:'def write_bigquery(spark: SparkSession, in0: DataFrame):\n    in0.write \\\n        .format("bigquery") \\\n        .option("writeMethod", "direct") \\\n        .save("dataset.table")\n'})}),(0,s.jsx)(t.p,{children:"Indirect write using the BigQuery Storage Write API"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-py",children:'def write_bigquery(spark: SparkSession, in0: DataFrame):\n    in0.write \\\n        .format("bigquery") \\\n        .option("temporaryGcsBucket","some-bucket") \\\n        .save("dataset.table")\n'})})]})})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}}}]);