"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[35392],{457:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"Spark/gems/source-target/warehouse/mongodb","title":"MongoDB","description":"Parameters and properties to read from and write to the MongoDB warehouse.","source":"@site/docs/Spark/gems/source-target/warehouse/mongodb.md","sourceDirName":"Spark/gems/source-target/warehouse","slug":"/engineers/mongodb","permalink":"/prophecy-docs-staging/preview/pr-610/engineers/mongodb","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-610/tags/gems"},{"inline":true,"label":"warehouse","permalink":"/prophecy-docs-staging/preview/pr-610/tags/warehouse"},{"inline":true,"label":"mongodb","permalink":"/prophecy-docs-staging/preview/pr-610/tags/mongodb"}],"version":"current","frontMatter":{"title":"MongoDB","id":"mongodb","slug":"/engineers/mongodb","description":"Parameters and properties to read from and write to the MongoDB warehouse.","tags":["gems","warehouse","mongodb"]},"sidebar":"mySidebar","previous":{"title":"JDBC","permalink":"/prophecy-docs-staging/preview/pr-610/engineers/jdbc"},"next":{"title":"Oracle","permalink":"/prophecy-docs-staging/preview/pr-610/engineers/oracle"}}');var s=n(74848),o=n(28453),i=n(49235),a=n(65537),l=n(79329);const c={title:"MongoDB",id:"mongodb",slug:"/engineers/mongodb",description:"Parameters and properties to read from and write to the MongoDB warehouse.",tags:["gems","warehouse","mongodb"]},d=void 0,h={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Source",id:"source",level:2},{value:"Source properties",id:"source-properties",level:3},{value:"Example",id:"source-example",level:3},{value:"Compiled code",id:"source-code",level:3},{value:"Target",id:"target",level:2},{value:"Target properties",id:"target-properties",level:3},{value:"Supported write modes",id:"supported-write-modes",level:3},{value:"Example",id:"target-example",level:3},{value:"Compiled code",id:"target-code",level:3}];function u(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{python_package_name:"ProphecyWarehousePython",python_package_version:"0.0.1+",scala_package_name:"ProphecyWarehouseScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"Not Supported",uc_shared:"Not Supported",livy:"Not Supported"}),"\n",(0,s.jsx)(r.admonition,{title:"Built on",type:"info",children:(0,s.jsxs)(r.p,{children:["Built on ",(0,s.jsx)(r.a,{href:"https://www.mongodb.com/docs/spark-connector/v10.0/#mongodb-connector-for-spark",children:"MongoDB Spark Connector"})," v10.0. ",(0,s.jsx)("br",{}),"\nTo add ",(0,s.jsx)(r.code,{children:"mongodb-spark-connector"})," jar as a dependency, see ",(0,s.jsx)(r.a,{href:"/engineers/dependencies",children:"Spark dependencies"}),"."]})}),"\n",(0,s.jsx)(r.p,{children:"You can read from and write to MongoDB."}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Tab"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Username"}),(0,s.jsx)(r.td,{children:"Location"}),(0,s.jsx)(r.td,{children:"Username of your MongoDB instance."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Password"}),(0,s.jsx)(r.td,{children:"Location"}),(0,s.jsx)(r.td,{children:"Password of your MongoDB instance."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Driver"}),(0,s.jsx)(r.td,{children:"Location"}),(0,s.jsxs)(r.td,{children:["Driver string for your mongodb connection. ",(0,s.jsx)("br",{}),"Possible values are: ",(0,s.jsx)(r.code,{children:"mongodb"}),", or ",(0,s.jsx)(r.code,{children:"mongodb+srv"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Cluster IP Address and Options"}),(0,s.jsx)(r.td,{children:"Location"}),(0,s.jsxs)(r.td,{children:["Cluster IP and options for your MongoDB connection. ",(0,s.jsx)("br",{}),"For example: ",(0,s.jsx)(r.code,{children:"cluster0.prophecy.mongodb.xyz/?retryWrites=true&w=majority"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Database"}),(0,s.jsx)(r.td,{children:"Location"}),(0,s.jsx)(r.td,{children:"Database where you want to read from and write to."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Collection"}),(0,s.jsx)(r.td,{children:"Location"}),(0,s.jsx)(r.td,{children:"Collection where you want to read from and write to."})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"source",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:"The Source gem reads data from MongoDB and allows you to optionally specify the following additional properties."}),"\n",(0,s.jsx)(r.h3,{id:"source-properties",children:"Source properties"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Properties"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Description"}),(0,s.jsx)(r.td,{children:"Description of your dataset."}),(0,s.jsx)(r.td,{children:"None"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Mongo client factory"}),(0,s.jsxs)(r.td,{children:["MongoClientFactory configuration key. ",(0,s.jsx)("br",{}),"To specify a custom implementation, implement the ",(0,s.jsx)(r.code,{children:"com.mongodb.spark.sql.connector.connection.MongoClientFactory"})," interface."]}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"com.mongodb.spark.sql"}),(0,s.jsx)("br",{}),(0,s.jsx)(r.code,{children:".connector.connection."}),(0,s.jsx)("br",{}),(0,s.jsx)(r.code,{children:"DefaultMongoClientFactory"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"partitioner class name"}),(0,s.jsxs)(r.td,{children:["Partitioner full class name. ",(0,s.jsx)("br",{}),"To specify a custom implementation, implement the ",(0,s.jsx)(r.code,{children:"com.mongodb.spark.sql.connector.read.partitioner.Partitioner"})," interface."]}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"com.mongodb.spark.sql."}),(0,s.jsx)("br",{}),(0,s.jsx)(r.code,{children:".connector.read.partitioner."}),(0,s.jsx)("br",{}),(0,s.jsx)(r.code,{children:"SamplePartitioner"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Partition field"}),(0,s.jsx)(r.td,{children:"Unique field to use for partitioning."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"_id"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Partition size"}),(0,s.jsxs)(r.td,{children:["Size in MB for each partition. ",(0,s.jsx)("br",{}),"Smaller partition sizes create more partitions that contain fewer documents."]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"64"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Number of samples per partition"}),(0,s.jsxs)(r.td,{children:["Number of samples to take per partition. ",(0,s.jsx)("br",{}),"The total number of samples taken is: ",(0,s.jsx)("br",{}),(0,s.jsx)(r.code,{children:"samples per partition * ( count / number of documents per partition)"})]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"10"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Minimum no. of Docs for Schema inference"}),(0,s.jsx)(r.td,{children:"Number of documents to sample from the collection when inferring the schema."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"1000"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Enable Map types when inferring schema"}),(0,s.jsxs)(r.td,{children:["Whether to enable Map types when inferring the schema. ",(0,s.jsx)("br",{}),"If you enable this, the Source gem infers large compatible ",(0,s.jsx)(r.code,{children:"struct"})," types to a ",(0,s.jsx)(r.code,{children:"MapType"})," instead."]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"true"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Minimum no. of a StructType for MapType inference"}),(0,s.jsxs)(r.td,{children:["Minimum size of a ",(0,s.jsx)(r.code,{children:"StructType"})," before inferring it as a ",(0,s.jsx)(r.code,{children:"MapType"}),"."]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"250"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Pipeline aggregation"}),(0,s.jsxs)(r.td,{children:["Custom aggregation pipeline to apply to the collection before sending the data to Spark. ",(0,s.jsx)("br",{}),"The value must be an extended JSON single document or list of documents.",(0,s.jsx)("br",{})," A single document should resemble the following: ",(0,s.jsx)(r.code,{children:'{"$match": {"closed": false}}'})," ",(0,s.jsx)("br",{}),"A list of documents should resemble the following: ",(0,s.jsx)(r.code,{children:'[{"$match": {"closed": false}}, {"$project": {"status": 1, "name": 1, "description": 1}}]'})]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:'{"$match": {"closed": false}}'})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Enable AllowDiskUse aggregation"}),(0,s.jsxs)(r.td,{children:["Whether to enable ",(0,s.jsx)(r.code,{children:"AllowDiskUse"})," aggregation."]}),(0,s.jsx)(r.td,{children:"false"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"source-example",children:"Example"}),"\n",(0,s.jsxs)(r.p,{children:["The following example configures a Source gem to read from the ",(0,s.jsx)(r.code,{children:"sample_airbnb.listingsAndReviews"})," collection in MongoDB.\nAfter you configure the Source gem, view schema by clicking ",(0,s.jsx)(r.code,{children:"Infer Schema"})," in the Properties tab and view data by clicking ",(0,s.jsx)(r.code,{children:"Load"})," inside the Preview tab."]}),"\n",(0,s.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,s.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,s.jsx)("iframe",{src:"https://user-images.githubusercontent.com/16856802/218975988-7e445ee5-81c1-4c0c-90dd-711ec28f0a38.mp4",title:"MongoDB Source",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",allowfullscreen:"allowfullscreen",mozallowfullscreen:"mozallowfullscreen",msallowfullscreen:"msallowfullscreen",oallowfullscreen:"oallowfullscreen",webkitallowfullscreen:"webkitallowfullscreen",width:"100%",height:"100%"})})}),"\n",(0,s.jsx)(r.h3,{id:"source-code",children:"Compiled code"}),"\n",(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsxs)(r.p,{children:["To see the compiled code of your project, ",(0,s.jsx)(r.a,{href:"/engineers/pipelines#project-editor",children:"switch to the Code view"})," in the project header."]})}),"\n","\n",(0,s.jsx)(a.A,{defaultValue:"scala",children:(0,s.jsx)(l.A,{value:"scala",label:"Scala",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-scala",children:'object input_mongodb {\n\ndef apply(context: Context): DataFrame = {\n    context.spark.read\n      .format("mongodb")\n      .option(\n        "connection.uri",\n        f"${"mongodb+srv"}://${"ashish_mongotrial"}:${"password"}@${"cluster0.zveltwx.mongodb.net/?retryWrites=true&w=majority"}".trim\n      )\n      .option("database",   "test_input")\n      .option("collection", "listAndReviews")\n      .load()\n  }\n\n}\n'})})})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"target",children:"Target"}),"\n",(0,s.jsx)(r.p,{children:"The Target gem writes data to MongoDB and allows you to optionally specify the following additional properties."}),"\n",(0,s.jsx)(r.h3,{id:"target-properties",children:"Target properties"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Property"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Description"}),(0,s.jsx)(r.td,{children:"Description of your dataset."}),(0,s.jsx)(r.td,{children:"None"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Write Mode"}),(0,s.jsxs)(r.td,{children:["How to handle existing data. For a list of the possible values, see ",(0,s.jsx)(r.a,{href:"#supported-write-modes",children:"Supported write modes"}),"."]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"overwrite"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Mongo client factory"}),(0,s.jsxs)(r.td,{children:["MongoClientFactory configuration key. ",(0,s.jsx)("br",{}),"To specify a custom implementation, implement the ",(0,s.jsx)(r.code,{children:"com.mongodb.spark.sql.connector.connection.MongoClientFactory"})," interface."]}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"com.mongodb.spark.sql."}),(0,s.jsx)("br",{}),(0,s.jsx)(r.code,{children:"connector.connection."}),(0,s.jsx)("br",{}),(0,s.jsx)(r.code,{children:"DefaultMongoClientFactory"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Maximum batch size"}),(0,s.jsx)(r.td,{children:"Maximum number of operations to batch in bulk operations."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"512"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ordered"}),(0,s.jsx)(r.td,{children:"Whether to perform ordered bulk operations."}),(0,s.jsx)(r.td,{children:"true"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"operationType"}),(0,s.jsxs)(r.td,{children:["Type of write operation to perform. ",(0,s.jsx)("br",{}),"Possible values are: ",(0,s.jsx)(r.code,{children:"insert"}),", ",(0,s.jsx)(r.code,{children:"replace"})," or ",(0,s.jsx)(r.code,{children:"update"})]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"replace"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"List of id fields"}),(0,s.jsxs)(r.td,{children:["Field or list of fields to organize the data. ",(0,s.jsx)("br",{}),"To specify more than one field, separate them using a comma. ",(0,s.jsx)("br",{}),"For example: ",(0,s.jsx)(r.code,{children:'"fieldName1,fieldName2"'})]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"_id"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"writeConcern.w"}),(0,s.jsxs)(r.td,{children:["Write concern option to acknowledge the level the change propagated in the MongoDB replica set. ",(0,s.jsx)("br",{}),"Possible values are: ",(0,s.jsx)(r.code,{children:"MAJORITY"}),", ",(0,s.jsx)(r.code,{children:"W1"}),", ",(0,s.jsx)(r.code,{children:"W2"}),", ",(0,s.jsx)(r.code,{children:"W3"}),", ",(0,s.jsx)(r.code,{children:"ACKNOWLEDGED"})," or ",(0,s.jsx)(r.code,{children:"UNACKNOWLEDGED"})]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"ACKNOWLEDGED"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Enable Write journal"}),(0,s.jsx)(r.td,{children:"Whether to enable request for acknowledgment that the data is confirmed on the on-disk journal for the criteria specified in the w option."}),(0,s.jsx)(r.td,{children:"false"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Write timeout in MSec"}),(0,s.jsx)(r.td,{children:"Non-negative number of milliseconds to wait before returning an error when a write operation."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"0"})})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"supported-write-modes",children:"Supported write modes"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Write mode"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"overwrite"}),(0,s.jsxs)(r.td,{children:["If the data already exists, overwrite the data with the contents of the ",(0,s.jsx)(r.code,{children:"DataFrame"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"append"}),(0,s.jsxs)(r.td,{children:["If the data already exists, append the contents of the ",(0,s.jsx)(r.code,{children:"DataFrame"}),"."]})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"target-example",children:"Example"}),"\n",(0,s.jsxs)(r.p,{children:["The following example configures a Target gem to write data to the ",(0,s.jsx)(r.code,{children:"sample_airbnb.listingsAndReviews"})," collection in MongoDB."]}),"\n",(0,s.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,s.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,s.jsx)("iframe",{src:"https://user-images.githubusercontent.com/16856802/218750916-a3ea2ead-9c81-42c9-9ad2-c60a61cdde4a.mp4",title:"MongoDB Target",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",allowfullscreen:"allowfullscreen",mozallowfullscreen:"mozallowfullscreen",msallowfullscreen:"msallowfullscreen",oallowfullscreen:"oallowfullscreen",webkitallowfullscreen:"webkitallowfullscreen",width:"100%",height:"100%"})})}),"\n",(0,s.jsx)(r.h3,{id:"target-code",children:"Compiled code"}),"\n",(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsxs)(r.p,{children:["To see the compiled code of your project, ",(0,s.jsx)(r.a,{href:"/engineers/pipelines#project-editor",children:"switch to the Code view"})," in the project header."]})}),"\n",(0,s.jsx)(a.A,{defaultValue:"scala",children:(0,s.jsx)(l.A,{value:"scala",label:"Scala",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-scala",children:'object output_mongodb {\n  def apply(context: Context, df: DataFrame): Unit = {\n    df.write\n      .format("mongodb")\n      .mode("overwrite")\n      .option(\n        "connection.uri",\n        f"${"mongodb+srv"}://${"ashish_mongotrial"}:${"password"}@${"cluster0.zveltwx.mongodb.net/?retryWrites=true&w=majority"}".trim\n      )\n      .option("database",      "test")\n      .option("collection",    "test_output")\n      .option("ordered",       "true")\n      .option("operationType", "replace")\n      .save()\n  }\n}\n'})})})})]})}function x(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>a});var t=n(96540);const s={},o=t.createContext(s);function i(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:r},e.children)}},49235:(e,r,n)=>{n.d(r,{A:()=>s});n(96540);var t=n(74848);function s(e){return(0,t.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.python_package_name}),(0,t.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.scala_package_name}),(0,t.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,t.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,t.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,t.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,t.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Livy"}),(0,t.jsx)("span",{className:"right",children:e.livy})]})}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]})}},65537:(e,r,n)=>{n.d(r,{A:()=>v});var t=n(96540),s=n(18215),o=n(65627),i=n(56347),a=n(50372),l=n(30604),c=n(11861),d=n(78749);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:s}}=e;return{value:r,label:n,attributes:t,default:s}}))}(n);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function u(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:n}=e;const s=(0,i.W6)(),o=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,l.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(s.location.search);r.set(o,e),s.replace({...s.location,search:r.toString()})}),[o,s])]}function j(e){const{defaultValue:r,queryString:n=!1,groupId:s}=e,o=p(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:o}))),[c,h]=x({queryString:n,groupId:s}),[j,m]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,o]=(0,d.Dv)(n);return[s,(0,t.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:s}),g=(()=>{const e=c??j;return u({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),m(e)}),[h,m,o]),tabValues:o}}var m=n(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function b(e){let{className:r,block:n,selectedValue:t,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const r=e.currentTarget,n=l.indexOf(r),s=a[n].value;s!==t&&(c(r),i(s))},h=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;r=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;r=l[n]??l[l.length-1];break}}r?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},r),children:a.map((e=>{let{value:r,label:n,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>{l.push(e)},onKeyDown:h,onClick:d,...o,className:(0,s.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function w(e){let{lazy:r,children:n,selectedValue:o}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==o})))})}function y(e){const r=j(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,f.jsx)(b,{...r,...e}),(0,f.jsx)(w,{...r,...e})]})}function v(e){const r=(0,m.A)();return(0,f.jsx)(y,{...e,children:h(e.children)},String(r))}},79329:(e,r,n)=>{n.d(r,{A:()=>i});n(96540);var t=n(18215);const s={tabItem:"tabItem_Ymn6"};var o=n(74848);function i(e){let{children:r,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,i),hidden:n,children:r})}}}]);