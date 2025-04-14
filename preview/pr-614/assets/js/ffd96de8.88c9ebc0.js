"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[827],{28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>d});var r=t(96540);const n={},i=r.createContext(n);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(i.Provider,{value:s},e.children)}},36273:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>d,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"Spark/gems/source-target/warehouse/cosmos","title":"CosmosDB","description":"Parameters and properties to read from and write to the CosmosDB warehouse","source":"@site/docs/Spark/gems/source-target/warehouse/cosmos.md","sourceDirName":"Spark/gems/source-target/warehouse","slug":"/engineers/cosmosdb","permalink":"/prophecy-docs-staging/preview/pr-614/engineers/cosmosdb","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-614/tags/gems"},{"inline":true,"label":"warehouse","permalink":"/prophecy-docs-staging/preview/pr-614/tags/warehouse"},{"inline":true,"label":"cosmos","permalink":"/prophecy-docs-staging/preview/pr-614/tags/cosmos"},{"inline":true,"label":"azure","permalink":"/prophecy-docs-staging/preview/pr-614/tags/azure"}],"version":"current","frontMatter":{"title":"CosmosDB","id":"cosmos","slug":"/engineers/cosmosdb","description":"Parameters and properties to read from and write to the CosmosDB warehouse","tags":["gems","warehouse","cosmos","azure"]},"sidebar":"mySidebar","previous":{"title":"BigQuery","permalink":"/prophecy-docs-staging/preview/pr-614/engineers/bigquery"},"next":{"title":"DB2","permalink":"/prophecy-docs-staging/preview/pr-614/engineers/db2"}}');var n=t(74848),i=t(28453),o=t(49235);const d={title:"CosmosDB",id:"cosmos",slug:"/engineers/cosmosdb",description:"Parameters and properties to read from and write to the CosmosDB warehouse",tags:["gems","warehouse","cosmos","azure"]},c=void 0,a={},l=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Master key authentication",id:"master-key-authentication",level:3},{value:"Service principle based authentication",id:"service-principle-based-authentication",level:3},{value:"Source",id:"source",level:2},{value:"Source properties",id:"source-properties",level:3},{value:"Throughput control configs",id:"throughput-control-configs",level:3},{value:"Target",id:"target",level:2},{value:"Target properties",id:"target-properties",level:3},{value:"Supported write modes",id:"supported-write-modes",level:3},{value:"Supported write strategies",id:"supported-write-strategies",level:3},{value:"ItemPatch properties",id:"itempatch-properties",level:3}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.A,{python_package_name:"ProphecyWarehousePython",python_package_version:"0.0.1+",scala_package_name:"",scala_package_version:"",scala_lib:"",python_lib:"",uc_single:"Not Supported",uc_shared:"Not Supported",livy:"Not Supported"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"azure-cosmos-spark"})," connector is an integration between Azure CosmosDB and Apache Spark, which allows you to read and write data from and to CosmosDB using Spark."]}),"\n",(0,n.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(s.p,{children:["For Spark 3.3, ",(0,n.jsx)(s.a,{href:"/engineers/dependencies",children:"connect a dependency"})," that has the following Maven coordinates on your Databricks or OnPrem Execution Cluster:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:"com.azure.cosmos.spark:azure-cosmos-spark_3-3_2-12:4.18.1\n"})}),"\n",(0,n.jsxs)(s.p,{children:["For other versions of Spark, see ",(0,n.jsx)(s.a,{href:"https://github.com/Azure/azure-sdk-for-java/tree/main/sdk/cosmos/azure-cosmos-spark_3-3_2-12",children:"Azure Cosmos DB OLTP Spark 3 connector"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)("div",{style:{position:"relative","padding-bottom":"56.25%",height:0},children:(0,n.jsx)("iframe",{src:"https://www.loom.com/embed/f5c150ff8a1b4c1fb1485c20e08fde50",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Tab"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Default"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Authentication Type"}),(0,n.jsx)(s.td,{children:"Location"}),(0,n.jsxs)(s.td,{children:["How you want to authenticate. ",(0,n.jsx)("br",{}),"Possible values are: ",(0,n.jsx)(s.code,{children:"Master Key"}),"(PrimaryReadWriteKeys, SecondReadWriteKeys, PrimaryReadOnlyKeys, SecondReadWriteKeys), ",(0,n.jsx)(s.code,{children:"Service Principle Based"})," ",(0,n.jsx)("br",{})," To see all the additional parameters for each authentication type, see ",(0,n.jsx)(s.a,{href:"#master-key-authentication",children:"Master key authentication"})," and ",(0,n.jsx)(s.a,{href:"#service-principle-based-authentication",children:"Service principle based authentication"}),"."]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Master Key"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Data Source"}),(0,n.jsx)(s.td,{children:"Location"}),(0,n.jsx)(s.td,{children:"Whether the gem should load all data in the container, or return the data using a custom query."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"DB Table"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Azure Environment"}),(0,n.jsx)(s.td,{children:"Location"}),(0,n.jsxs)(s.td,{children:["Azure environment of the CosmosDB account. ",(0,n.jsx)("br",{}),"Possible values are: ",(0,n.jsx)(s.code,{children:"Azure"}),", ",(0,n.jsx)(s.code,{children:"AzureChina"}),", ",(0,n.jsx)(s.code,{children:"AzureUsGovernment"}),", or ",(0,n.jsx)(s.code,{children:"AzureGermany"}),"."]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Azure"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Custom Query"}),(0,n.jsx)(s.td,{children:"Location"}),(0,n.jsxs)(s.td,{children:["Custom query to process against the CosmosDB endpoint instead of dynamically generating the query through the predicate push down. ",(0,n.jsx)("br",{}),"Usually it is recommended to rely on Spark's predicate push down because that generates the most efficient set of filters based on the query plan. But in Spark 3.1, there were a couple of predicates such as aggregates that cannot be pushed down yet, so the custom query is a fallback that allows you to push them into the query sent to CosmosDB. If specified, with schema inference enabled, the custom query will also be used to infer the schema."]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"SELECT 1"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Schema"}),(0,n.jsx)(s.td,{children:"Properties"}),(0,n.jsxs)(s.td,{children:["Schema to apply on the loaded data.",(0,n.jsx)("br",{}),"In the Source gem, you can define or edit the schema visually or in JSON code.",(0,n.jsx)("br",{}),"In the Target gem, you can view the schema visually or as JSON code."]}),(0,n.jsx)(s.td,{})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"master-key-authentication",children:"Master key authentication"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Account Endpoint"}),(0,n.jsx)(s.td,{children:"Account URI of your CosmosDB account."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Account Key"}),(0,n.jsx)(s.td,{children:"Account key of your CosmosDB account."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Database"}),(0,n.jsx)(s.td,{children:"Database name of your CosmosDB account."})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"service-principle-based-authentication",children:"Service principle based authentication"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Subscription Id"}),(0,n.jsx)(s.td,{children:"Subscription Id of your CosmosDB account."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Tenant Id"}),(0,n.jsx)(s.td,{children:"Tenant Id of your CosmosDB account."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Resource Group Name"}),(0,n.jsx)(s.td,{children:"Resource group of your CosmosDB account."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Client Id"}),(0,n.jsx)(s.td,{children:"Client Id, or Application Id of your service principle."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Client Secret"}),(0,n.jsx)(s.td,{children:"Client secret, or password of your service principle."})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"source",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:"The Source gem reads data from CosmosDB and allows you to optionally specify the following additional properties."}),"\n",(0,n.jsx)(s.h3,{id:"source-properties",children:"Source properties"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Properties"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Default"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsx)(s.td,{children:"Description of your dataset."}),(0,n.jsx)(s.td,{children:"None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Enable Infer Schema"}),(0,n.jsx)(s.td,{children:"Whether the Source gem should load all data in the container. If not, the Source gem returns the data using a custom query."}),(0,n.jsx)(s.td,{children:"true"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Application name"}),(0,n.jsx)(s.td,{children:"Name of your application."}),(0,n.jsx)(s.td,{children:"None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Inclusion Mode"}),(0,n.jsxs)(s.td,{children:["Determines whether to serialize or skip null and default values to JSON. ",(0,n.jsx)("br",{}),"Possible values are: ",(0,n.jsx)("br",{}),"- ",(0,n.jsx)(s.code,{children:"Always"}),", which means the Source gem should create JSON properties for null and default values ",(0,n.jsx)("br",{}),"- ",(0,n.jsx)(s.code,{children:"NonNull"}),", which means the Source gem does not create JSON properties for null values ",(0,n.jsx)("br",{}),"- ",(0,n.jsx)(s.code,{children:"NonEmpty"}),", which means the Source gem does not create JSON properties for empty values"]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Always"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"DateTime Conversion Mode"}),(0,n.jsxs)(s.td,{children:["How to convert your DateTime values. ",(0,n.jsx)("br",{}),"Possible values are: ",(0,n.jsx)("br",{}),"- ",(0,n.jsx)(s.code,{children:"Default"}),", which means to convert ",(0,n.jsx)(s.code,{children:"java.sql.Date/java.time.LocalDate"})," to ",(0,n.jsx)(s.code,{children:"EpochDay"}),", and ",(0,n.jsx)(s.code,{children:"java.sql.Timestamp/java.time.Instant"})," to ",(0,n.jsx)(s.code,{children:"MicrosecondsFromEpoch"}),". ",(0,n.jsx)("br",{}),"- ",(0,n.jsx)(s.code,{children:"AlwaysEpochMilliseconds"}),", which means to convert ",(0,n.jsx)(s.code,{children:"java.sql.Date"}),", ",(0,n.jsx)(s.code,{children:"java.time.LocalDate"}),", and ",(0,n.jsx)(s.code,{children:"java.sql.Timestamp and java.time.Instant"})," to ",(0,n.jsx)(s.code,{children:"MillisecondsFromEpoch"}),". ",(0,n.jsx)("br",{}),"- ",(0,n.jsx)(s.code,{children:"AlwaysEpochMillisecondsWithSystemDefaultTimezone"}),", which means to convert like ",(0,n.jsx)(s.code,{children:"AlwaysEpochMilliseconds"}),", but to also assume the System default timezone."]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Default"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Schema Conversion Mode"}),(0,n.jsxs)(s.td,{children:["How your document contains an attribute that does not map to the schema type. ",(0,n.jsx)("br",{}),"Possible values are: ",(0,n.jsx)("br",{}),"- ",(0,n.jsx)(s.code,{children:"Relaxed"}),", which uses a null value ",(0,n.jsx)("br",{}),"- ",(0,n.jsx)(s.code,{children:"Strict"}),", which throws an exception"]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Relaxed"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Partitioning Strategy"}),(0,n.jsxs)(s.td,{children:["Partitioning strategy to use. ",(0,n.jsx)("br",{}),"Possible values are: ",(0,n.jsx)(s.code,{children:"Default"}),", ",(0,n.jsx)(s.code,{children:"Custom"}),", ",(0,n.jsx)(s.code,{children:"Restrictive"})," or ",(0,n.jsx)(s.code,{children:"Aggressive"})]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Default"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Preferred Regions List"}),(0,n.jsx)(s.td,{children:"List of regions you prefer."}),(0,n.jsx)(s.td,{children:"None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Disable Tcp Connection Endpoint Rediscovery"}),(0,n.jsxs)(s.td,{children:["Whether to disable TCP connection endpoint rediscovery. ",(0,n.jsx)("br",{})," You should disable TCP connection endpoint rediscovery when using custom domain names with private endpoints in a custom Spark environment. When using Azure Databricks or Azure Synapse as Spark runtime it should never be required to disable endpoint rediscovery."]}),(0,n.jsx)(s.td,{children:"false"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Allow Invalid JSON With Duplicate JSON Properties"}),(0,n.jsx)(s.td,{children:"Whether the CosmosDB Java SDK and Spark connector fails when the Source gem reads JSON documents that contain JSON objects with multiple properties of the same name."}),(0,n.jsx)(s.td,{children:"false"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Partitioning Targeted Count"}),(0,n.jsx)(s.td,{children:"Ideal number of partitions to use. If you have a custom strategy, the Spark Connector uses this value."}),(0,n.jsx)(s.td,{children:"None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Partitioning Feed Range Filter"}),(0,n.jsxs)(s.td,{children:["Scopes the query to a single logical CosmosDB partition, or a subset of logical partitions. ",(0,n.jsx)("br",{})," The Source gem modifies the partitioning strategy to only create partitions for the scoped logical partitions. This property reduces the necessary Spark tasks and partitions."]}),(0,n.jsx)(s.td,{children:"None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Use Gateway Mode"}),(0,n.jsx)(s.td,{children:"Whether to use gateway mode for the client operations."}),(0,n.jsx)(s.td,{children:"false"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Force Eventual Consistency"}),(0,n.jsx)(s.td,{children:"Whether to make the client use eventual consistency for read operations instead of using the default account level consistency."}),(0,n.jsx)(s.td,{children:"true"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Max Item Count"}),(0,n.jsxs)(s.td,{children:["Maximum number of documents to return for a single query or change feed request. ",(0,n.jsx)("br",{}),"Consider increasing this value only for average document sizes significantly smaller than 1KB, or when projection reduces the number of properties selected in queries significantly, such as only selecting ",(0,n.jsx)(s.code,{children:"id"})," of documents."]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"1000"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Max Integrated Staleness in MS"}),(0,n.jsxs)(s.td,{children:["Maximum staleness window in milliseconds for the point read or query request results in the integrated cache when using the dedicated gateway. To learn more, see ",(0,n.jsx)(s.a,{href:"https://learn.microsoft.com/en-gb/azure/cosmos-db/integrated-cache#maxintegratedcachestaleness",children:"MaxIntegratedCacheStaleness"}),"."]}),(0,n.jsx)(s.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"throughput-control-configs",children:"Throughput control configs"}),"\n",(0,n.jsxs)(s.p,{children:["Having throughput controls help isolate the performance needs of applications running against a container by limiting the amount of ",(0,n.jsx)(s.a,{href:"https://learn.microsoft.com/en-us/azure/cosmos-db/request-units",children:"request units"})," a Spark client consumes."]}),"\n",(0,n.jsx)(s.p,{children:"Several advanced scenarios benefit from client-side throughput control:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Different operations and tasks have different priorities"})}),"\n",(0,n.jsx)(s.p,{children:"You can prevent normal transactions from throttling due to data ingestion or copy activities. Some operations or tasks aren't sensitive to latency and are more tolerant to being throttled than others."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Provide fairness and isolation to different end users"})}),"\n",(0,n.jsx)(s.p,{children:"Applications usually have many end users, where some may send too many requests. This consumes all available throughput and causes others to throttle."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Load balancing of throughput between different Azure Cosmos DB clients"})}),"\n",(0,n.jsx)(s.p,{children:"Assure all the clients get an equal share of the throughput."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Property"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Default"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Enable Throughput Control Options"}),(0,n.jsx)(s.td,{children:"Whether to enable throughput control."}),(0,n.jsx)(s.td,{children:"false"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Throughput Control Account Endpoint"}),(0,n.jsxs)(s.td,{children:["CosmosDB Account Endpoint URI for throughput control. ",(0,n.jsx)("br",{}),"If not defined, the Source gem uses the ",(0,n.jsx)(s.code,{children:"spark.cosmos.accountEndpoint"})," property."]}),(0,n.jsx)(s.td,{children:"None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Throughput Control Account Key"}),(0,n.jsx)(s.td,{children:"CosmosDB Account Key for throughput control."}),(0,n.jsx)(s.td,{children:"None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Throughput Control Preferred Regions List"}),(0,n.jsxs)(s.td,{children:["Comma-separated list of regions you prefer to use for a multi-region CosmosDB account. ",(0,n.jsx)("br",{}),"Use a collocated Spark cluster with your CosmosDB account and pass the Spark cluster region as a preferred region. To see a list of Azure regions, see ",(0,n.jsx)(s.a,{href:"https://learn.microsoft.com/en-gb/dotnet/api/microsoft.azure.documents.locationnames?view=azure-dotnet&preserve-view=true",children:"LocationNames Class"}),"."]}),(0,n.jsx)(s.td,{children:"None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Disable TCP connection endpoint Rediscovery"}),(0,n.jsxs)(s.td,{children:["Whether to disable TCP connection endpoint rediscovery. ",(0,n.jsx)("br",{})," You should disable TCP connection endpoint rediscovery when using custom domain names with private endpoints in a custom Spark environment. When using Azure Databricks or Azure Synapse as Spark runtime it should never be required to disable endpoint rediscovery."]}),(0,n.jsx)(s.td,{children:"false"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Use Gateway Mode"}),(0,n.jsx)(s.td,{children:"Whether to use gateway mode for the client operations."}),(0,n.jsx)(s.td,{children:"false"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Use Dedicated Container"}),(0,n.jsx)(s.td,{children:"Whether to provide a dedicated throughput control container."}),(0,n.jsx)(s.td,{children:"true"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Throughput control group name"}),(0,n.jsx)(s.td,{children:"Name of your throughput control group."}),(0,n.jsx)(s.td,{children:"None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Renew Interval in MS"}),(0,n.jsx)(s.td,{children:"How often the client is going to update the throughput usage of itself."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"5s"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Expire Interval in MS"}),(0,n.jsx)(s.td,{children:"How quickly to detect an offline client."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"11s"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Throughput control group target throughput"}),(0,n.jsxs)(s.td,{children:["Number of ",(0,n.jsx)(s.a,{href:"https://learn.microsoft.com/en-us/azure/cosmos-db/request-units",children:"request units"})," in your throughput control group target throughput."]}),(0,n.jsx)(s.td,{children:"None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Throughput control group target throughput threshold"}),(0,n.jsxs)(s.td,{children:["Threshold in ",(0,n.jsx)(s.a,{href:"https://learn.microsoft.com/en-us/azure/cosmos-db/request-units",children:"request units"})," of your throughput control group target throughput."]}),(0,n.jsx)(s.td,{children:"None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Database which will be used for throughput global control"}),(0,n.jsx)(s.td,{children:"Database to use for throughput global control."}),(0,n.jsx)(s.td,{children:"None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Container which will be used for throughput global control"}),(0,n.jsx)(s.td,{children:"Container to use for throughput global control."}),(0,n.jsx)(s.td,{children:"None"})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:["To learn more about throughput control, see ",(0,n.jsx)(s.a,{href:"https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/throughput-control-spark",children:"Azure Cosmos DB Spark connector: Throughput control"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"target",children:"Target"}),"\n",(0,n.jsx)(s.p,{children:"The Target gem writes data to CosmosDB and allows you to optionally specify the following additional properties."}),"\n",(0,n.jsx)(s.h3,{id:"target-properties",children:"Target properties"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Property"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Default"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsx)(s.td,{children:"Description of your dataset."}),(0,n.jsx)(s.td,{children:"None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Write Mode"}),(0,n.jsxs)(s.td,{children:["How to handle existing data. For a list of the possible values, see ",(0,n.jsx)(s.a,{href:"#supported-write-modes",children:"Supported write modes"}),"."]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"append"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Write Strategy"}),(0,n.jsxs)(s.td,{children:["How to write your data. For a list of the possible values, see ",(0,n.jsx)(s.a,{href:"#supported-write-strategies",children:"Supported write strategies"}),"."]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"ItemOverwrite"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Enable Write Bulk"}),(0,n.jsx)(s.td,{children:"Whether to write to CosmosDB in bulk."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"true"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Date Format"}),(0,n.jsx)(s.td,{children:"String that indicates a date format."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"yyyy-MM-dd"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Timestamp Format"}),(0,n.jsx)(s.td,{children:"String that indicates a timestamp format."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"yyyy-MM-dd'T'HH:mm:ss.SSSXXX"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Max Retry Attempts"}),(0,n.jsx)(s.td,{children:"Number of times CosmosDB writes retry attempts on retriable failures, such as a connection or write error."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"10"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Max Concurrency"}),(0,n.jsxs)(s.td,{children:["Maximum number of jobs to run at any time. ",(0,n.jsx)("br",{}),"If you don't specify a value, the Target gem determines a value based on the Spark executor VM Size."]}),(0,n.jsx)(s.td,{children:"None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Max No. of Pending Bulk Operations"}),(0,n.jsxs)(s.td,{children:["Limit of bulk operations being processed concurrently. ",(0,n.jsx)("br",{}),"If you don't specify a value, the Target gem determines a value based on the Spark executor VM Size. If the volume of data is large for the provisioned throughput on the destination container, this setting can be adjusted by following the estimation of ",(0,n.jsx)(s.code,{children:"1000 x Cores"}),"."]}),(0,n.jsx)(s.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"supported-write-modes",children:"Supported write modes"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Write mode"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"error"}),(0,n.jsx)(s.td,{children:"If the data already exists, throw an exception."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"overwrite"}),(0,n.jsxs)(s.td,{children:["If the data already exists, overwrite the data with the contents of the ",(0,n.jsx)(s.code,{children:"DataFrame"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"append"}),(0,n.jsxs)(s.td,{children:["If the data already exists, append the contents of the ",(0,n.jsx)(s.code,{children:"DataFrame"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ignore"}),(0,n.jsxs)(s.td,{children:["If the data already exists, do nothing with the contents of the ",(0,n.jsx)(s.code,{children:"DataFrame"}),". ",(0,n.jsx)("br",{}),"This is similar to the ",(0,n.jsx)(s.code,{children:"CREATE TABLE IF NOT EXISTS"})," clause in SQL."]})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"supported-write-strategies",children:"Supported write strategies"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Write strategy"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ItemOverwrite"}),(0,n.jsx)(s.td,{children:"Performs an upsert."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ItemOverwriteIfNotModified"}),(0,n.jsx)(s.td,{children:"If an ETag property of the row is empty, or null, insert the document, or ignore the document if it already exists."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ItemAppend"}),(0,n.jsxs)(s.td,{children:["Same as ",(0,n.jsx)(s.code,{children:"ItemOverwriteIfNotModified"}),". Additionally, if an Etag value exists, the connector attempts to replace the document with ETag pre-condition. If the document changes, the Target gem skips the update and does not update the document with the content of the data frame row."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ItemDelete"}),(0,n.jsx)(s.td,{children:"Deletes all documents."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ItemDeleteIfNotModified"}),(0,n.jsx)(s.td,{children:"Deletes all documents where the ETag hasn't changed."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ItemPatch"}),(0,n.jsxs)(s.td,{children:["Partially updates all documents based on the patch configuration. Then, provide values for ",(0,n.jsx)(s.a,{href:"#itempatch-properties",children:"the additional properties"}),"."]})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"itempatch-properties",children:"ItemPatch properties"}),"\n",(0,n.jsxs)(s.p,{children:["These configurations are valid only when you select ",(0,n.jsx)(s.code,{children:"ItemPatch"})," as your ",(0,n.jsx)(s.code,{children:"Write Strategy"}),"."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Property"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Default Value"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Default Patch Operation Type"}),(0,n.jsxs)(s.td,{children:["Default CosmosDB patch operation type. ",(0,n.jsx)("br",{}),"Possible values are: ",(0,n.jsx)(s.code,{children:"None"}),", ",(0,n.jsx)(s.code,{children:"Add"}),", ",(0,n.jsx)(s.code,{children:"Set"}),", ",(0,n.jsx)(s.code,{children:"Replace"}),", ",(0,n.jsx)(s.code,{children:"Remove"}),", or ",(0,n.jsx)(s.code,{children:"Increment"}),". ",(0,n.jsx)("br",{}),"Choose ",(0,n.jsx)(s.code,{children:"none"})," for no operation, and for the rest, see ",(0,n.jsx)(s.a,{href:"https://learn.microsoft.com/en-gb/azure/cosmos-db/partial-document-update#supported-operations",children:"Supported operations"})," to determine which one to select."]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Replace"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Patch Column Configs"}),(0,n.jsxs)(s.td,{children:["CosmosDB patch column configurations. ",(0,n.jsx)("br",{}),"This can contain multiple definitions that match the separated by comma pattern: ",(0,n.jsx)("br",{}),"- ",(0,n.jsx)(s.code,{children:"col(column).op(operationType)"})," ",(0,n.jsx)("br",{}),"- ",(0,n.jsx)(s.code,{children:"col(column).path(patchInCosmosdb).op(operationType)"}),", which also allows you to define a different CosmosDB path."]}),(0,n.jsx)(s.td,{children:"None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Patch Filter"}),(0,n.jsx)(s.td,{children:"Conditional patch to use."}),(0,n.jsx)(s.td,{children:"None"})]})]})]})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},49235:(e,s,t)=>{t.d(s,{A:()=>n});t(96540);var r=t(74848);function n(e){return(0,r.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,r.jsxs)("span",{className:"badge-dependency",children:[(0,r.jsx)("span",{className:"left",children:e.python_package_name}),(0,r.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,r.jsxs)("span",{className:"badge-dependency",children:[(0,r.jsx)("span",{className:"left",children:e.scala_package_name}),(0,r.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,r.jsxs)("span",{className:"badge-dependency",children:[(0,r.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,r.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,r.jsxs)("span",{className:"badge-dependency",children:[(0,r.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,r.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,r.jsxs)("span",{className:"badge-spark",children:[(0,r.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,r.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,r.jsxs)("span",{className:"badge-spark",children:[(0,r.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,r.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,r.jsxs)("span",{className:"badge-spark",children:[(0,r.jsx)("span",{className:"left",children:"Livy"}),(0,r.jsx)("span",{className:"right",children:e.livy})]})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]})}}}]);