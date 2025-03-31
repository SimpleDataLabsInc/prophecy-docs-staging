"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[35392],{457:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"Spark/gems/source-target/warehouse/mongodb","title":"MongoDB","description":"MongoDB","source":"@site/docs/Spark/gems/source-target/warehouse/mongodb.md","sourceDirName":"Spark/gems/source-target/warehouse","slug":"/Spark/gems/source-target/warehouse/mongodb","permalink":"/Spark/gems/source-target/warehouse/mongodb","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/tags/gems"},{"inline":true,"label":"warehouse","permalink":"/tags/warehouse"},{"inline":true,"label":"mongodb","permalink":"/tags/mongodb"}],"version":"current","frontMatter":{"title":"MongoDB","id":"mongodb","description":"MongoDB","tags":["gems","warehouse","mongodb"]},"sidebar":"mySidebar","previous":{"title":"JDBC","permalink":"/Spark/gems/source-target/warehouse/jdbc"},"next":{"title":"Oracle","permalink":"/Spark/gems/source-target/warehouse/oracle"}}');var s=n(74848),i=n(28453),a=n(49235),o=n(65537),l=n(79329);const c={title:"MongoDB",id:"mongodb",description:"MongoDB",tags:["gems","warehouse","mongodb"]},d=void 0,h={},u=[{value:"Source",id:"source",level:2},{value:"Source Parameters",id:"source-parameters",level:3},{value:"Example",id:"source-example",level:3},{value:"Generated Code",id:"source-code",level:3},{value:"Target",id:"target",level:2},{value:"Target Parameters",id:"target-parameters",level:3},{value:"Supported Write Modes",id:"supported-write-modes",level:3},{value:"Example",id:"target-example",level:3},{value:"Generated Code",id:"target-code",level:3}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{python_package_name:"ProphecyWarehousePython",python_package_version:"0.0.1+",scala_package_name:"ProphecyWarehouseScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"Not Supported",uc_shared:"Not Supported",livy:"Not Supported"}),"\n",(0,s.jsx)(r.admonition,{title:"Built on",type:"info",children:(0,s.jsxs)(r.p,{children:["Built on ",(0,s.jsx)(r.a,{href:"https://www.mongodb.com/docs/spark-connector/v10.0/#mongodb-connector-for-spark",children:"MongoDB Spark Connector"})," v10.0. ",(0,s.jsx)("br",{}),"\nAdd ",(0,s.jsx)(r.code,{children:"mongodb-spark-connector"})," jar as dependency ",(0,s.jsx)(r.a,{href:"/engineers/dependencies",children:"for more"}),"."]})}),"\n",(0,s.jsxs)(r.p,{children:["Allows read and write operations on ",(0,s.jsx)(r.code,{children:"MongoDB"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"source",children:"Source"}),"\n",(0,s.jsx)(r.h3,{id:"source-parameters",children:"Source Parameters"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://www.mongodb.com/docs/spark-connector/v10.0/configuration/read/",children:"Official documentation"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Required"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Username"}),(0,s.jsx)(r.td,{children:"Username for MongoDB instance"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Password"}),(0,s.jsx)(r.td,{children:"Password for MongoDB instance"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Driver"}),(0,s.jsxs)(r.td,{children:["Driver string for mongodb connection, e.g. ",(0,s.jsx)(r.code,{children:"mongodb"})," or ",(0,s.jsx)(r.code,{children:"mongodb+srv"})]}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Cluster IP Address and Options"}),(0,s.jsxs)(r.td,{children:["Cluster IP and options(if required) for the MongoDB connection, ",(0,s.jsx)("br",{})," e.g. ",(0,s.jsx)(r.code,{children:"cluster0.prophecy.mongodb.xyz/?retryWrites=true&w=majority"})]}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Database"}),(0,s.jsx)(r.td,{children:"Database from which we want to read the data."}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Collection"}),(0,s.jsx)(r.td,{children:"Collection from which we want to read the data."}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"mongoClientFactory"}),(0,s.jsxs)(r.td,{children:["MongoClientFactory configuration key. ",(0,s.jsx)("br",{})," You can specify a custom implementation which must implement the ",(0,s.jsx)(r.code,{children:"com.mongodb.spark.sql.connector.connection.MongoClientFactory"})," interface. ",(0,s.jsx)("br",{})," Default: ",(0,s.jsx)(r.code,{children:"com.mongodb.spark.sql.connector.connection.DefaultMongoClientFactory"})]}),(0,s.jsx)(r.td,{children:"False"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"partitioner"}),(0,s.jsxs)(r.td,{children:["The partitioner full class name. You can specify a custom implementation which must implement the ",(0,s.jsx)(r.code,{children:"com.mongodb.spark.sql.connector.read.partitioner.Partitioner"})," interface. ",(0,s.jsx)("br",{})," Default: ",(0,s.jsx)(r.code,{children:"com.mongodb.spark.sql.connector.read.partitioner.SamplePartitioner"})]}),(0,s.jsx)(r.td,{children:"False"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"partitioner.options.partition.field"}),(0,s.jsxs)(r.td,{children:["The field to use for partitioning, which must be a unique field. ",(0,s.jsx)("br",{})," Default: ",(0,s.jsx)(r.code,{children:"_id"})]}),(0,s.jsx)(r.td,{children:"False"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"partitioner.options.partition.size"}),(0,s.jsxs)(r.td,{children:["The size (in MB) for each partition. Smaller partition sizes create more partitions containing fewer documents. ",(0,s.jsx)("br",{})," Default: ",(0,s.jsx)(r.code,{children:"64"})]}),(0,s.jsx)(r.td,{children:"False"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"partitioner.options.samples.per.partition"}),(0,s.jsxs)(r.td,{children:["The number of samples to take per partition. The total number of samples taken is: ",(0,s.jsx)(r.code,{children:"samples per partiion * ( count / number of documents per partition)"})," ",(0,s.jsx)("br",{})," Default: ",(0,s.jsx)(r.code,{children:"10"})]}),(0,s.jsx)(r.td,{children:"False"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"sampleSize"}),(0,s.jsxs)(r.td,{children:["The number of documents to sample from the collection when inferring the schema. ",(0,s.jsx)("br",{})," Default: ",(0,s.jsx)(r.code,{children:"1000"})]}),(0,s.jsx)(r.td,{children:"False"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"sql.inferSchema.mapTypes.enabled"}),(0,s.jsxs)(r.td,{children:["Whether to enable Map types when inferring the schema. When enabled, large compatible struct types are inferred to a MapType instead. ",(0,s.jsx)("br",{})," Default: ",(0,s.jsx)(r.code,{children:"true"})]}),(0,s.jsx)(r.td,{children:"False"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"sql.inferSchema.mapTypes.minimum.key.size"}),(0,s.jsxs)(r.td,{children:["Minimum size of a StructType before inferring as a MapType. ",(0,s.jsx)("br",{})," Default: ",(0,s.jsx)(r.code,{children:"250"})]}),(0,s.jsx)(r.td,{children:"False"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"aggregation.pipeline"}),(0,s.jsxs)(r.td,{children:["Specifies a custom aggregation pipeline to apply to the collection before sending data to Spark. The value must be either an extended JSON single document or list of documents.",(0,s.jsx)("br",{})," A single document should resemble the following:",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'{"$match": {"closed": false}}'})," ",(0,s.jsx)("br",{})," A list of documents should resemble the following:",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:'[{"$match": {"closed": false}}, {"$project": {"status": 1, "name": 1, "description": 1}}]'})]}),(0,s.jsx)(r.td,{children:"False"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"aggregation.allowDiskUse"}),(0,s.jsxs)(r.td,{children:["Specifies whether to allow storage to disk when running the aggregation. ",(0,s.jsx)("br",{})," Default: ",(0,s.jsx)(r.code,{children:"true"})]}),(0,s.jsx)(r.td,{children:"False"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"source-example",children:"Example"}),"\n",(0,s.jsxs)(r.p,{children:["Below is an example of configuring MongoDB Source using Prophecy IDE.\nWe will be reading Airbnb public ",(0,s.jsx)(r.code,{children:"listingReviews"})," dataset using in-built ",(0,s.jsx)(r.code,{children:"MongoDB"})," Source gem.",(0,s.jsx)("br",{}),"\nAfter configuration you can view schema by clicking ",(0,s.jsx)(r.code,{children:"Infer Schema"})," in properties tab and also view data by clicking ",(0,s.jsx)(r.code,{children:"Load"})," inside Preview tab."]}),"\n",(0,s.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,s.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,s.jsx)("iframe",{src:"https://user-images.githubusercontent.com/16856802/218975988-7e445ee5-81c1-4c0c-90dd-711ec28f0a38.mp4",title:"MongoDB Source",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",allowfullscreen:"allowfullscreen",mozallowfullscreen:"mozallowfullscreen",msallowfullscreen:"msallowfullscreen",oallowfullscreen:"oallowfullscreen",webkitallowfullscreen:"webkitallowfullscreen",width:"100%",height:"100%"})})}),"\n",(0,s.jsx)(r.h3,{id:"source-code",children:"Generated Code"}),"\n","\n",(0,s.jsx)(o.A,{defaultValue:"scala",children:(0,s.jsx)(l.A,{value:"scala",label:"Scala",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-scala",children:'object input_mongodb {\n\n  def apply(context: Context): DataFrame = {\n    context.spark.read\n      .format("mongodb")\n      .option(\n        "connection.uri",\n        f"${"mongodb+srv"}://${"ashish_mongotrial"}:${"password"}@${"cluster0.zveltwx.mongodb.net/?retryWrites=true&w=majority"}".trim\n      )\n      .option("database",   "test_input")\n      .option("collection", "listAndReviews")\n      .load()\n  }\n}\n'})})})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"target",children:"Target"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://www.mongodb.com/docs/spark-connector/v10.0/configuration/write/",children:"Official documentation"})}),"\n",(0,s.jsx)(r.h3,{id:"target-parameters",children:"Target Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Required"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Username"}),(0,s.jsx)(r.td,{children:"Username for MongoDB instance"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Password"}),(0,s.jsx)(r.td,{children:"Password for MongoDB instance"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Driver"}),(0,s.jsxs)(r.td,{children:["Driver string for mongodb connection, e.g. ",(0,s.jsx)(r.code,{children:"mongodb"})," or ",(0,s.jsx)(r.code,{children:"mongodb+srv"})]}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Cluster IP Address and Options"}),(0,s.jsxs)(r.td,{children:["Cluster IP and options(if required) for the MongoDB connection, ",(0,s.jsx)("br",{})," e.g. ",(0,s.jsx)(r.code,{children:"cluster0.prophecy.mongodb.xyz/?retryWrites=true&w=majority"})]}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Database"}),(0,s.jsx)(r.td,{children:"Database to which we want to write the data."}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Collection"}),(0,s.jsx)(r.td,{children:"Collection to which we want to write the data."}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"mongoClientFactory"}),(0,s.jsxs)(r.td,{children:["MongoClientFactory configuration key. ",(0,s.jsx)("br",{})," You can specify a custom implementation which must implement the ",(0,s.jsx)(r.code,{children:"com.mongodb.spark.sql.connector.connection.MongoClientFactory"})," interface. ",(0,s.jsx)("br",{})," Default: ",(0,s.jsx)(r.code,{children:"com.mongodb.spark.sql.connector.connection.DefaultMongoClientFactory"})]}),(0,s.jsx)(r.td,{children:"False"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"maxBatchSize"}),(0,s.jsxs)(r.td,{children:["Specifies the maximum number of operations to batch in bulk operations. ",(0,s.jsx)("br",{})," Default: ",(0,s.jsx)(r.code,{children:"512"})]}),(0,s.jsx)(r.td,{children:"False"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ordered"}),(0,s.jsxs)(r.td,{children:["Specifies whether to perform ordered bulk operations. ",(0,s.jsx)("br",{})," Default: ",(0,s.jsx)(r.code,{children:"true"})]}),(0,s.jsx)(r.td,{children:"False"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"operationType"}),(0,s.jsxs)(r.td,{children:["Specifies the type of write operation to perform. You can set this to one of the following values: ",(0,s.jsx)(r.code,{children:"insert"}),", ",(0,s.jsx)(r.code,{children:"replace"})," or ",(0,s.jsx)(r.code,{children:"update"})," ",(0,s.jsx)("br",{})," Default: ",(0,s.jsx)(r.code,{children:"replace"})]}),(0,s.jsx)(r.td,{children:"False"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"idFieldList"}),(0,s.jsxs)(r.td,{children:["Field or list of fields by which to split the collection data. To specify more than one field, separate them using a comma as shown in the following example:",(0,s.jsx)(r.code,{children:'"fieldName1,fieldName2"'})," ",(0,s.jsx)("br",{})," Default: ",(0,s.jsx)(r.code,{children:"_id"})]}),(0,s.jsx)(r.td,{children:"False"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"writeConcern.w"}),(0,s.jsxs)(r.td,{children:["Specifies w, a write concern option to acknowledge the level to which the change propagated in the MongoDB replica set. You can specify one of the following values: ",(0,s.jsx)(r.code,{children:"MAJORITY"}),", ",(0,s.jsx)(r.code,{children:"W1"}),", ",(0,s.jsx)(r.code,{children:"W2"}),", ",(0,s.jsx)(r.code,{children:"W3"}),", ",(0,s.jsx)(r.code,{children:"ACKNOWLEDGED"})," or ",(0,s.jsx)(r.code,{children:"UNACKNOWLEDGED"}),(0,s.jsx)("br",{})," Default: ",(0,s.jsx)(r.code,{children:"_ACKNOWLEDGED"})]}),(0,s.jsx)(r.td,{children:"False"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"writeConcern.journal"}),(0,s.jsxs)(r.td,{children:["Specifies j, a write concern option to enable request for acknowledgment that the data is confirmed on on-disk journal for the criteria specified in the w option.",(0,s.jsx)("br",{})," You can specify either ",(0,s.jsx)(r.code,{children:"true"})," or ",(0,s.jsx)(r.code,{children:"false"}),"."]}),(0,s.jsx)(r.td,{children:"False"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"writeConcern.wTimeoutMS"}),(0,s.jsxs)(r.td,{children:["Specifies wTimeoutMS, a write concern option to return an error when a write operation exceeds the number of milliseconds. If you use this optional setting, you must specify a ",(0,s.jsx)(r.code,{children:"non-negative"})," integer."]}),(0,s.jsx)(r.td,{children:"False"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"supported-write-modes",children:"Supported Write Modes"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Write Mode"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"overwrite"}),(0,s.jsxs)(r.td,{children:["If data already exists, ",(0,s.jsx)(r.code,{children:"overwrite"})," the contents of the Collection with data."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"append"}),(0,s.jsxs)(r.td,{children:["If data already exists, ",(0,s.jsx)(r.code,{children:"append"})," the data on to the contents of the Collection."]})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"target-example",children:"Example"}),"\n",(0,s.jsxs)(r.p,{children:["Below is an example of configuring MongoDB Target using Prophecy IDE.\nWe will be writing back Airbnb public ",(0,s.jsx)(r.code,{children:"listingReviews"})," data into a collection in ",(0,s.jsx)(r.code,{children:"MongoDB"})," using our in-built Target gem."]}),"\n",(0,s.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,s.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,s.jsx)("iframe",{src:"https://user-images.githubusercontent.com/16856802/218750916-a3ea2ead-9c81-42c9-9ad2-c60a61cdde4a.mp4",title:"MongoDB Target",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",allowfullscreen:"allowfullscreen",mozallowfullscreen:"mozallowfullscreen",msallowfullscreen:"msallowfullscreen",oallowfullscreen:"oallowfullscreen",webkitallowfullscreen:"webkitallowfullscreen",width:"100%",height:"100%"})})}),"\n",(0,s.jsx)(r.h3,{id:"target-code",children:"Generated Code"}),"\n",(0,s.jsx)(o.A,{defaultValue:"scala",children:(0,s.jsx)(l.A,{value:"scala",label:"Scala",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-scala",children:'object output_mongodb {\n  def apply(context: Context, df: DataFrame): Unit = {\n    df.write\n      .format("mongodb")\n      .mode("overwrite")\n      .option(\n        "connection.uri",\n        f"${"mongodb+srv"}://${"ashish_mongotrial"}:${"password"}@${"cluster0.zveltwx.mongodb.net/?retryWrites=true&w=majority"}".trim\n      )\n      .option("database",      "test")\n      .option("collection",    "test_output")\n      .option("ordered",       "true")\n      .option("operationType", "replace")\n      .save()\n  }\n}\n'})})})})]})}function x(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>o});var t=n(96540);const s={},i=t.createContext(s);function a(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:r},e.children)}},49235:(e,r,n)=>{n.d(r,{A:()=>s});n(96540);var t=n(74848);function s(e){return(0,t.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/package-hub/",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.python_package_name}),(0,t.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/package-hub/",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.scala_package_name}),(0,t.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,t.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,t.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,t.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,t.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Livy"}),(0,t.jsx)("span",{className:"right",children:e.livy})]})}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]})}},65537:(e,r,n)=>{n.d(r,{A:()=>v});var t=n(96540),s=n(18215),i=n(65627),a=n(56347),o=n(50372),l=n(30604),c=n(11861),d=n(78749);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:s}}=e;return{value:r,label:n,attributes:t,default:s}}))}(n);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:n}=e;const s=(0,a.W6)(),i=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,l.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(s.location.search);r.set(i,e),s.replace({...s.location,search:r.toString()})}),[i,s])]}function j(e){const{defaultValue:r,queryString:n=!1,groupId:s}=e,i=u(e),[a,l]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:i}))),[c,h]=x({queryString:n,groupId:s}),[j,m]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,i]=(0,d.Dv)(n);return[s,(0,t.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),f=(()=>{const e=c??j;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),m(e)}),[h,m,i]),tabValues:i}}var m=n(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function b(e){let{className:r,block:n,selectedValue:t,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const r=e.currentTarget,n=l.indexOf(r),s=o[n].value;s!==t&&(c(r),a(s))},h=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;r=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;r=l[n]??l[l.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},r),children:o.map((e=>{let{value:r,label:n,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>{l.push(e)},onKeyDown:h,onClick:d,...i,className:(0,s.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function w(e){let{lazy:r,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==i})))})}function y(e){const r=j(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,g.jsx)(b,{...r,...e}),(0,g.jsx)(w,{...r,...e})]})}function v(e){const r=(0,m.A)();return(0,g.jsx)(y,{...e,children:h(e.children)},String(r))}},79329:(e,r,n)=>{n.d(r,{A:()=>a});n(96540);var t=n(18215);const s={tabItem:"tabItem_Ymn6"};var i=n(74848);function a(e){let{children:r,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,a),hidden:n,children:r})}}}]);