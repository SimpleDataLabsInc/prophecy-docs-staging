"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[35449],{28453:(e,r,s)=>{s.d(r,{R:()=>a,x:()=>l});var t=s(96540);const n={},i=t.createContext(n);function a(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(i.Provider,{value:r},e.children)}},49235:(e,r,s)=>{s.d(r,{A:()=>n});s(96540);var t=s(74848);function n(e){return(0,t.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.python_package_name}),(0,t.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.scala_package_name}),(0,t.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,t.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,t.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,t.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,t.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Livy"}),(0,t.jsx)("span",{className:"right",children:e.livy})]})}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]})}},64044:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"Spark/gems/source-target/file/json","title":"JSON","description":"Parameters and properties to read from and write to JSON files","source":"@site/docs/Spark/gems/source-target/file/json.md","sourceDirName":"Spark/gems/source-target/file","slug":"/engineers/json","permalink":"/prophecy-docs-staging/preview/pr-606/engineers/json","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-606/tags/gems"},{"inline":true,"label":"file","permalink":"/prophecy-docs-staging/preview/pr-606/tags/file"},{"inline":true,"label":"json","permalink":"/prophecy-docs-staging/preview/pr-606/tags/json"}],"version":"current","frontMatter":{"title":"JSON","id":"json","slug":"/engineers/json","description":"Parameters and properties to read from and write to JSON files","tags":["gems","file","json"]},"sidebar":"mySidebar","previous":{"title":"Fixed Format","permalink":"/prophecy-docs-staging/preview/pr-606/engineers/fixed-format"},"next":{"title":"Kafka","permalink":"/prophecy-docs-staging/preview/pr-606/engineers/kafka"}}');var n=s(74848),i=s(28453),a=s(49235),l=s(65537),d=s(79329);const o={title:"JSON",id:"json",slug:"/engineers/json",description:"Parameters and properties to read from and write to JSON files",tags:["gems","file","json"]},c=void 0,h={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Source",id:"source",level:2},{value:"Source properties",id:"source-properties",level:3},{value:"Supported corrupt record modes",id:"supported-corrupt-record-modes",level:3},{value:"Example",id:"source-example",level:3},{value:"Generated Code",id:"source-code",level:3},{value:"Target",id:"target",level:2},{value:"Target properties",id:"target-properties",level:3},{value:"Supported write modes",id:"supported-write-modes",level:3},{value:"Example",id:"target-example",level:3},{value:"Generated Code",id:"target-code",level:3},{value:"Producing A Single Output File",id:"producing-a-single-output-file",level:3}];function u(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.0.1+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"3.0.1+"}),"\n",(0,n.jsx)(r.p,{children:"The JSON (JavaScript Object Notation) file type:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Is human-readable, which simplifies how you debug and interact with data."}),"\n",(0,n.jsx)(r.li,{children:"Has a flexible schema, which makes it easy to add or modify fields without changing the file format."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Tab"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Location"}),(0,n.jsx)(r.td,{children:"Location"}),(0,n.jsx)(r.td,{children:"File path to read from or write to the JSON file."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Schema"}),(0,n.jsx)(r.td,{children:"Properties"}),(0,n.jsxs)(r.td,{children:["Schema to apply on the loaded data.",(0,n.jsx)("br",{}),"In the Source gem, you can define or edit the schema visually or in JSON code.",(0,n.jsx)("br",{}),"In the Target gem, you can view the schema visually or as JSON code."]})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"source",children:"Source"}),"\n",(0,n.jsx)(r.p,{children:"The Source gem reads data from JSON files and allows you to optionally specify the following additional properties."}),"\n",(0,n.jsx)(r.h3,{id:"source-properties",children:"Source properties"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property name"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Description"}),(0,n.jsx)(r.td,{children:"Description of your dataset."}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Use user-defined schema"}),(0,n.jsx)(r.td,{children:"Whether to use the schema you define."}),(0,n.jsx)(r.td,{children:"true"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Parse Multi-line records"}),(0,n.jsxs)(r.td,{children:["Whether to parse one record, which may span multiple lines, per file. ",(0,n.jsx)("br",{}),"JSON built-in functions ignore this option."]}),(0,n.jsx)(r.td,{children:"false"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"New line separator"}),(0,n.jsxs)(r.td,{children:["Sets a separator for each line. The separator can be one or more characters. ",(0,n.jsx)("br",{}),"JSON built-in functions ignore this option."]}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"\\r"}),", ",(0,n.jsx)(r.code,{children:"\\r\\n"})," and ",(0,n.jsx)(r.code,{children:"\\n"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Infer primitive values as string type"}),(0,n.jsxs)(r.td,{children:["Whether to infer all primitive values as a ",(0,n.jsx)(r.code,{children:"String"})," type."]}),(0,n.jsx)(r.td,{children:"false"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Infer floating-point values as decimal or double type"}),(0,n.jsxs)(r.td,{children:["Whether to infer all floating-point values as a ",(0,n.jsx)(r.code,{children:"Decimal"})," type. ",(0,n.jsx)("br",{}),"If the value does not fit in ",(0,n.jsx)(r.code,{children:"Decimal"}),", then the Source gem infers them as a ",(0,n.jsx)(r.code,{children:"Double"}),"."]}),(0,n.jsx)(r.td,{children:"false"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Ignore Java/C++ style comment in Json records"}),(0,n.jsx)(r.td,{children:"Whether to ignore Java and C++ style comments in JSON records."}),(0,n.jsx)(r.td,{children:"false"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Allow unquoted field names"}),(0,n.jsx)(r.td,{children:"Whether to allow unquoted JSON field names."}),(0,n.jsx)(r.td,{children:"false"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Allow single quotes"}),(0,n.jsx)(r.td,{children:"Whether to allow single quotes in addition to double quotes."}),(0,n.jsx)(r.td,{children:"true"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Allow leading zero in numbers"}),(0,n.jsx)(r.td,{children:"Whether to allow leading zeros in numbers."}),(0,n.jsx)(r.td,{children:"false"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Allow Backslash escaping"}),(0,n.jsx)(r.td,{children:"Whether to accept quotes on all characters using the backslash quoting mechanism."}),(0,n.jsx)(r.td,{children:"false"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Allow unquoted control characters in JSON string"}),(0,n.jsx)(r.td,{children:"Whether to allow unquoted control characters."}),(0,n.jsx)(r.td,{children:"false"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Mode to deal with corrupt records"}),(0,n.jsxs)(r.td,{children:["How to handle corrupt data. For a list of the possible values, see ",(0,n.jsx)(r.a,{href:"#supported-corrupt-record-modes",children:"Supported corrupt record modes"}),"."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"PERMISSIVE"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Column name of a corrupt record"}),(0,n.jsx)(r.td,{children:"Name of the column to create for corrupt records."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"_corrupt_records"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Date Format String"}),(0,n.jsx)(r.td,{children:"Sets the string that indicates a date format."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"yyyy-MM-dd"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Timestamp Format String"}),(0,n.jsx)(r.td,{children:"Sets the string that indicates a timestamp format."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"yyyy-MM-dd'T'HH:mm:ss[.SSS][XXX]"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Sampling ratio for schema inferring"}),(0,n.jsxs)(r.td,{children:["Defines a fraction of rows to use for schema inferring. ",(0,n.jsx)("br",{}),"CSV built-in functions ignore this option."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"1.0"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Ignore column with all null values during schema inferring"}),(0,n.jsx)(r.td,{children:"Whether to ignore column of all null values or empty arrays during schema inference."}),(0,n.jsx)(r.td,{children:"false"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Recursive File Lookup"}),(0,n.jsxs)(r.td,{children:["Whether to recursively load files and disable partition inferring. If the data source explicitly specifies the ",(0,n.jsx)(r.code,{children:"partitionSpec"})," when the",(0,n.jsx)(r.code,{children:"recursiveFileLookup"})," is ",(0,n.jsx)(r.code,{children:"true"}),", the Source gem throws an exception."]}),(0,n.jsx)(r.td,{children:"false"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"supported-corrupt-record-modes",children:"Supported corrupt record modes"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Mode"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"PERMISSIVE"}),(0,n.jsx)(r.td,{children:"Put the malformed string into the corrupt records column, and set the malformed fields to null."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"DROPMALFORMED"}),(0,n.jsx)(r.td,{children:"Ignore the entire corrupted record. This mode is not supported in the CSV built-in functions."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"FAILFAST"}),(0,n.jsx)(r.td,{children:"Throw an exception when it meets a corrupted record."})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"source-example",children:"Example"}),"\n",(0,n.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,n.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,n.jsx)("iframe",{src:"https://user-images.githubusercontent.com/130362885/234556861-d5b82f1a-883e-4b49-bebe-0ac47511583e.mp4",title:"Json Source",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,n.jsx)(r.h3,{id:"source-code",children:"Generated Code"}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsxs)(r.p,{children:["To see the generated source code of your project, ",(0,n.jsx)(r.a,{href:"/engineers/project-lifecycle/#review-the-code",children:"switch to the Code view"})," in the project header."]})}),"\n","\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(d.A,{value:"py",label:"Python",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-py",children:'def ReadDelta(spark: SparkSession) -> DataFrame:\n    return spark.read.format("json").load("dbfs:/FileStore/data/example.json")\n'})})}),(0,n.jsx)(d.A,{value:"scala",label:"Scala",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-scala",children:'object ReadJson {\n\n    def apply(spark: SparkSession): DataFrame =\n        spark.read\n            .format("json")\n            .load("dbfs:/FileStore/data/example.json")\n\n}\n'})})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"target",children:"Target"}),"\n",(0,n.jsx)(r.p,{children:"The Target gem writes data to JSON files and allows you to optionally specify the following additional properties."}),"\n",(0,n.jsx)(r.h3,{id:"target-properties",children:"Target properties"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property name"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Description"}),(0,n.jsx)(r.td,{children:"Description of your dataset."}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Line Separator"}),(0,n.jsx)(r.td,{children:"Defines the line separator to use for parsing."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"\\n"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Write Mode"}),(0,n.jsxs)(r.td,{children:["How to handle existing data. For a list of the possible values, see ",(0,n.jsx)(r.a,{href:"#supported-write-modes",children:"Supported write modes"}),"."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"error"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Partition Columns"}),(0,n.jsx)(r.td,{children:"List of columns to partition the JSON file by."}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Compression Codec"}),(0,n.jsxs)(r.td,{children:["Compression codec when writing to the JSON file. ",(0,n.jsx)("br",{}),"The JSON file supports the following codecs: ",(0,n.jsx)(r.code,{children:"bzip2"}),", ",(0,n.jsx)(r.code,{children:"gzip"}),", ",(0,n.jsx)(r.code,{children:"lz4"}),", ",(0,n.jsx)(r.code,{children:"snappy"}),", and ",(0,n.jsx)(r.code,{children:"deflate"}),". ",(0,n.jsx)("br",{}),"JSON built-in functions ignore this option."]}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Date Format String"}),(0,n.jsx)(r.td,{children:"String that indicates a date format."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"yyyy-MM-dd"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Timestamp Format String"}),(0,n.jsx)(r.td,{children:"String that indicates a timestamp format."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"yyyy-MM-dd'T'HH:mm:ss[.SSS][XXX]"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Encoding"}),(0,n.jsxs)(r.td,{children:["Specifies to encode (charset) saved json files. ",(0,n.jsx)("br",{}),"JSON built-in functions ignore this option."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"UTF-8"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Ignore null fields"}),(0,n.jsx)(r.td,{children:"Whether to ignore null fields when generating JSON objects."}),(0,n.jsx)(r.td,{children:"false"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"supported-write-modes",children:"Supported write modes"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Write mode"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"error"}),(0,n.jsx)(r.td,{children:"If the data already exists, throw an exception."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"overwrite"}),(0,n.jsxs)(r.td,{children:["If the data already exists, overwrite the data with the contents of the ",(0,n.jsx)(r.code,{children:"DataFrame"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"append"}),(0,n.jsxs)(r.td,{children:["If the data already exists, append the contents of the ",(0,n.jsx)(r.code,{children:"DataFrame"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ignore"}),(0,n.jsxs)(r.td,{children:["If the data already exists, do nothing with the contents of the ",(0,n.jsx)(r.code,{children:"DataFrame"}),". ",(0,n.jsx)("br",{}),"This is similar to the ",(0,n.jsx)(r.code,{children:"CREATE TABLE IF NOT EXISTS"})," clause in SQL."]})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"target-example",children:"Example"}),"\n",(0,n.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,n.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,n.jsx)("iframe",{src:"https://user-images.githubusercontent.com/130362885/234556999-72c22d9b-c99e-4e6c-8887-b54b8d5d94f1.mp4",title:"Json Target",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,n.jsx)(r.h3,{id:"target-code",children:"Generated Code"}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsxs)(r.p,{children:["To see the generated source code of your project, ",(0,n.jsx)(r.a,{href:"/engineers/project-lifecycle/#review-the-code",children:"switch to the Code view"})," in the project header."]})}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(d.A,{value:"py",label:"Python",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-py",children:'def write_json(spark: SparkSession, in0: DataFrame):\n    in0.write\\\n        .format("json")\\\n        .mode("overwrite")\\\n        .save("dbfs:/data/test_output.json")\n'})})}),(0,n.jsx)(d.A,{value:"scala",label:"Scala",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-scala",children:'object write_json {\n  def apply(spark: SparkSession, in: DataFrame): Unit =\n    in.write\n        .format("json")\n        .mode("overwrite")\n        .save("dbfs:/data/test_output.json")\n}\n'})})})]}),"\n",(0,n.jsx)(r.h3,{id:"producing-a-single-output-file",children:"Producing A Single Output File"}),"\n",(0,n.jsx)(r.admonition,{type:"caution",children:(0,n.jsx)(r.p,{children:"We do not recommended this for extremely large data sets because it may overwhelm the worker node writing the file."})}),"\n",(0,n.jsxs)(r.p,{children:["Due to Spark's distributed nature, Prophecy writes output files as multiple separate partition files. If you want a single output file, such as reporting or exporting to an external system, use a ",(0,n.jsx)(r.code,{children:"Repartition"})," gem in ",(0,n.jsx)(r.code,{children:"Coalesce"})," mode with one output partition:"]}),"\n",(0,n.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,n.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,n.jsx)("iframe",{src:"https://user-images.githubusercontent.com/130362885/234560215-5f85e164-638c-4cb9-abc6-dbd9cefb0e05.mp4",title:"Single Output file",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,n.jsx)("br",{})]})}function x(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},65537:(e,r,s)=>{s.d(r,{A:()=>w});var t=s(96540),n=s(18215),i=s(65627),a=s(56347),l=s(50372),d=s(30604),o=s(11861),c=s(78749);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:s}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:s,attributes:t,default:n}}=e;return{value:r,label:s,attributes:t,default:n}}))}(s);return function(e){const r=(0,o.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,s])}function u(e){let{value:r,tabValues:s}=e;return s.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:s}=e;const n=(0,a.W6)(),i=function(e){let{queryString:r=!1,groupId:s}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:r,groupId:s});return[(0,d.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(n.location.search);r.set(i,e),n.replace({...n.location,search:r.toString()})}),[i,n])]}function j(e){const{defaultValue:r,queryString:s=!1,groupId:n}=e,i=p(e),[a,d]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:i}))),[o,h]=x({queryString:s,groupId:n}),[j,m]=function(e){let{groupId:r}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,i]=(0,c.Dv)(s);return[n,(0,t.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:n}),f=(()=>{const e=o??j;return u({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{f&&d(f)}),[f]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),m(e)}),[h,m,i]),tabValues:i}}var m=s(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(74848);function b(e){let{className:r,block:s,selectedValue:t,selectValue:a,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),c=e=>{const r=e.currentTarget,s=d.indexOf(r),n=l[s].value;n!==t&&(o(r),a(n))},h=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=d.indexOf(e.currentTarget)+1;r=d[s]??d[0];break}case"ArrowLeft":{const s=d.indexOf(e.currentTarget)-1;r=d[s]??d[d.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":s},r),children:l.map((e=>{let{value:r,label:s,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>{d.push(e)},onKeyDown:h,onClick:c,...i,className:(0,n.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":t===r}),children:s??r},r)}))})}function y(e){let{lazy:r,children:s,selectedValue:i}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==i})))})}function v(e){const r=j(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,g.jsx)(b,{...r,...e}),(0,g.jsx)(y,{...r,...e})]})}function w(e){const r=(0,m.A)();return(0,g.jsx)(v,{...e,children:h(e.children)},String(r))}},79329:(e,r,s)=>{s.d(r,{A:()=>a});s(96540);var t=s(18215);const n={tabItem:"tabItem_Ymn6"};var i=s(74848);function a(e){let{children:r,hidden:s,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(n.tabItem,a),hidden:s,children:r})}}}]);