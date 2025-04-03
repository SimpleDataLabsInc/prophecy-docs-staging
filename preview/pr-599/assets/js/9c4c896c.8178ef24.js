"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[23852],{24123:(e,a,t)=>{t.d(a,{A:()=>s});const s=t.p+"assets/images/kafka_target_eg_1-498e2012164f661686168fbd52aebaaf.png"},28453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>l});var s=t(96540);const r={},n=s.createContext(r);function i(e){const a=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(n.Provider,{value:a},e.children)}},38999:(e,a,t)=>{t.d(a,{A:()=>s});const s=t.p+"assets/images/kafka_source_eg_1-5d9b36695526379b9a62cf152b6170bf.png"},47983:(e,a,t)=>{t.d(a,{A:()=>s});const s=t.p+"assets/images/kafka_pipeline_eg-f97290ea76491916f47acf312a5ea95b.gif"},49235:(e,a,t)=>{t.d(a,{A:()=>r});t(96540);var s=t(74848);function r(e){return(0,s.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:e.python_package_name}),(0,s.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:e.scala_package_name}),(0,s.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,s.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,s.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,s.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,s.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Livy"}),(0,s.jsx)("span",{className:"right",children:e.livy})]})}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]})}},65537:(e,a,t)=>{t.d(a,{A:()=>v});var s=t(96540),r=t(18215),n=t(65627),i=t(56347),l=t(50372),o=t(30604),c=t(11861),d=t(78749);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:t}=e;return(0,s.useMemo)((()=>{const e=a??function(e){return h(e).map((e=>{let{props:{value:a,label:t,attributes:s,default:r}}=e;return{value:a,label:t,attributes:s,default:r}}))}(t);return function(e){const a=(0,c.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function u(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function f(e){let{queryString:a=!1,groupId:t}=e;const r=(0,i.W6)(),n=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,o.aZ)(n),(0,s.useCallback)((e=>{if(!n)return;const a=new URLSearchParams(r.location.search);a.set(n,e),r.replace({...r.location,search:a.toString()})}),[n,r])]}function m(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,n=p(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!u({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:a,tabValues:n}))),[c,h]=f({queryString:t,groupId:r}),[m,x]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,n]=(0,d.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:r}),g=(()=>{const e=c??m;return u({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!u({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),x(e)}),[h,x,n]),tabValues:n}}var x=t(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function k(e){let{className:a,block:t,selectedValue:s,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.a_)(),d=e=>{const a=e.currentTarget,t=o.indexOf(a),r=l[t].value;r!==s&&(c(a),i(r))},h=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;a=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;a=o[t]??o[o.length-1];break}}a?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},a),children:l.map((e=>{let{value:a,label:t,attributes:n}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,ref:e=>{o.push(e)},onKeyDown:h,onClick:d,...n,className:(0,r.A)("tabs__item",g.tabItem,n?.className,{"tabs__item--active":s===a}),children:t??a},a)}))})}function y(e){let{lazy:a,children:t,selectedValue:n}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=i.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==n})))})}function b(e){const a=m(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,j.jsx)(k,{...a,...e}),(0,j.jsx)(y,{...a,...e})]})}function v(e){const a=(0,x.A)();return(0,j.jsx)(b,{...e,children:h(e.children)},String(a))}},79329:(e,a,t)=>{t.d(a,{A:()=>i});t(96540);var s=t(18215);const r={tabItem:"tabItem_Ymn6"};var n=t(74848);function i(e){let{children:a,hidden:t,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:t,children:a})}},85768:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"Spark/gems/source-target/file/kafka","title":"Kafka","description":"Parameters and properties to read from and write to Kafka files","source":"@site/docs/Spark/gems/source-target/file/kafka-stream.md","sourceDirName":"Spark/gems/source-target/file","slug":"/engineers/kafka","permalink":"/prophecy-docs-staging/preview/pr-599/engineers/kafka","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-599/tags/gems"},{"inline":true,"label":"file","permalink":"/prophecy-docs-staging/preview/pr-599/tags/file"},{"inline":true,"label":"kafka","permalink":"/prophecy-docs-staging/preview/pr-599/tags/kafka"}],"version":"current","frontMatter":{"title":"Kafka","id":"kafka","slug":"/engineers/kafka","description":"Parameters and properties to read from and write to Kafka files","tags":["gems","file","kafka"]},"sidebar":"mySidebar","previous":{"title":"JSON","permalink":"/prophecy-docs-staging/preview/pr-599/engineers/json"},"next":{"title":"ORC","permalink":"/prophecy-docs-staging/preview/pr-599/engineers/orc"}}');var r=t(74848),n=t(28453),i=t(49235),l=t(65537),o=t(79329);const c={title:"Kafka",id:"kafka",slug:"/engineers/kafka",description:"Parameters and properties to read from and write to Kafka files",tags:["gems","file","kafka"]},d=void 0,h={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Source",id:"source",level:2},{value:"Source properties",id:"source-properties",level:3},{value:"Example",id:"source-example",level:3},{value:"Generated Code",id:"source-code",level:3},{value:"Target",id:"target",level:2},{value:"Target properties",id:"target-properties",level:3},{value:"Example",id:"target-example",level:3},{value:"Generated Code",id:"target-code",level:3},{value:"Example Pipeline",id:"example-pipeline",level:2},{value:"Source Pipeline Example",id:"source-pipeline-example",level:3},{value:"Metadata Table",id:"metadata-table",level:4},{value:"Spark Code used for script component",id:"spark-code-used-for-script-component",level:4}];function u(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.0.1+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"1.9.24",uc_single:"Not Supported",uc_shared:"14.3+",livy:"Not Supported"}),"\n",(0,r.jsxs)(a.p,{children:["The Kafka file type is used in ",(0,r.jsx)(a.a,{href:"https://kafka.apache.org/",children:"Apache Kafka"}),", which:"]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Is an open-source distributed event streaming platform."}),"\n",(0,r.jsx)(a.li,{children:"Handles high volumes of data and delivers messages with low latency."}),"\n",(0,r.jsx)(a.li,{children:"Supports real-time analytics, stream processing, fault tolerance, scalability, data integration, and event-driven architectures."}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Parameter"}),(0,r.jsx)(a.th,{children:"Tab"}),(0,r.jsx)(a.th,{children:"Description"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Bootstrap Server/Broker List"}),(0,r.jsx)(a.td,{children:"Location"}),(0,r.jsx)(a.td,{children:"Comma separated list of Kafka brokers."})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Security Protocol"}),(0,r.jsx)(a.td,{children:"Location"}),(0,r.jsxs)(a.td,{children:["Security protocol for Kafka. (Default value is ",(0,r.jsx)(a.code,{children:"SASL_SSL"}),".)"]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"SASL Mechanisms"}),(0,r.jsx)(a.td,{children:"Location"}),(0,r.jsxs)(a.td,{children:["Default SASL Mechanism for ",(0,r.jsx)(a.code,{children:"SASL_SSL"}),". (Default value is ",(0,r.jsx)(a.code,{children:"SCRAM-SHA-256"}),".)"]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Credentials"}),(0,r.jsx)(a.td,{children:"Location"}),(0,r.jsxs)(a.td,{children:["How to provide your credentials. ",(0,r.jsx)("br",{}),"You can select: ",(0,r.jsx)(a.code,{children:"Databricks Secrets"}),", ",(0,r.jsx)(a.code,{children:"Username & Password"}),", or ",(0,r.jsx)(a.code,{children:"Environment variables"})]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Kafka topic"}),(0,r.jsx)(a.td,{children:"Location"}),(0,r.jsx)(a.td,{children:"Comma separated list of Kafka topics."})]})]})]}),"\n",(0,r.jsx)(a.h2,{id:"source",children:"Source"}),"\n",(0,r.jsxs)(a.p,{children:["The Source gem reads data from Kafka stream in batch mode and allows you to optionally specify the following additional properties. This means that Kafka only reads data incrementally from the last offset stored in the specified Metadata table. If the Metadata table is not present, then Kafka reads data from the ",(0,r.jsx)(a.code,{children:"earliest"})," offset."]}),"\n",(0,r.jsx)(a.h3,{id:"source-properties",children:"Source properties"}),"\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Property name"}),(0,r.jsx)(a.th,{children:"Description"}),(0,r.jsx)(a.th,{children:"Default"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Group Id"}),(0,r.jsx)(a.td,{children:"Kafka consumer group ID."}),(0,r.jsx)(a.td,{children:"None"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Session Timeout"}),(0,r.jsx)(a.td,{children:"Session timeout for Kafka."}),(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"6000"})})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Store offsets read per partition in Delta table"}),(0,r.jsx)(a.td,{children:"Whether to store offsets read per partition in Delta table."}),(0,r.jsx)(a.td,{children:"false"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Metadata Table"}),(0,r.jsx)(a.td,{children:"Delta table to store offsets for each topic and partition."}),(0,r.jsx)(a.td,{children:"None"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Kerberos service name for Kafka SASL"}),(0,r.jsx)(a.td,{children:"Name of your Kerberos service to use in Kafka."}),(0,r.jsx)(a.td,{children:"None"})]})]})]}),"\n",(0,r.jsx)(a.h3,{id:"source-example",children:"Example"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Example usage of Filter",src:t(38999).A+"",width:"3024",height:"1590"})}),"\n",(0,r.jsx)(a.h3,{id:"source-code",children:"Generated Code"}),"\n",(0,r.jsx)(a.admonition,{type:"tip",children:(0,r.jsxs)(a.p,{children:["To see the generated source code of your project, ",(0,r.jsx)(a.a,{href:"/engineers/project-lifecycle/#review-the-code",children:"switch to the Code view"})," in the project header."]})}),"\n","\n",(0,r.jsx)(l.A,{children:(0,r.jsx)(o.A,{value:"py",label:"Python",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-py",children:'def KafkaSource(spark: SparkSession) -> DataFrame:\n    from delta.tables import DeltaTable\n    import json\n    from pyspark.dbutils import DBUtils\n\n    if spark.catalog._jcatalog.tableExists(f"metadata.kafka_offsets"):\n        offset_dict = {}\n\n        for row in DeltaTable.forName(spark, f"metadata.kafka_offsets").toDF().collect():\n            if row["topic"] in offset_dict.keys():\n                offset_dict[row["topic"]].update({row["partition"] : row["max_offset"] + 1})\n            else:\n                offset_dict[row["topic"]] = {row["partition"] : row["max_offset"] + 1}\n\n        return (spark.read\\\n            .format("kafka")\\\n            .options(\n              **{\n                "kafka.sasl.jaas.config": (\n                  f"kafkashaded.org.apache.kafka.common.security.scram.ScramLoginModule"\n                  + f\' required username="{DBUtils(spark).secrets.get(scope = "test", key = "username")}" password="{DBUtils(spark).secrets.get(scope = "test", key = "password")}";\'\n                ),\n                "kafka.sasl.mechanism": "SCRAM-SHA-256",\n                "kafka.security.protocol": "SASL_SSL",\n                "kafka.bootstrap.servers": "broker1.aws.com:9094,broker2.aws.com:9094",\n                "kafka.session.timeout.ms": "6000",\n                "group.id": "group_id_1",\n                "subscribe": "my_first_topic,my_second_topic",\n                "startingOffsets": json.dumps(offset_dict),\n              }\n            )\\\n            .load()\\\n            .withColumn("value", col("value").cast("string"))\\\n            .withColumn("key", col("key").cast("string")))\n    else:\n        return (spark.read\\\n            .format("kafka")\\\n            .options(\n              **{\n                "kafka.sasl.jaas.config": (\n                  f"kafkashaded.org.apache.kafka.common.security.scram.ScramLoginModule"\n                  + f\' required username="{DBUtils(spark).secrets.get(scope = "test", key = "username")}" password="{DBUtils(spark).secrets.get(scope = "test", key = "password")}";\'\n                ),\n                "kafka.sasl.mechanism": "SCRAM-SHA-256",\n                "kafka.security.protocol": "SASL_SSL",\n                "kafka.bootstrap.servers": "broker1.aws.com:9094,broker2.aws.com:9094",\n                "kafka.session.timeout.ms": "6000",\n                "group.id": "group_id_1",\n                "subscribe": "my_first_topic,my_second_topic"\n              }\n            )\\\n            .load()\\\n            .withColumn("value", col("value").cast("string"))\\\n            .withColumn("key", col("key").cast("string")))\n'})})})}),"\n",(0,r.jsx)(a.hr,{}),"\n",(0,r.jsx)(a.h2,{id:"target",children:"Target"}),"\n",(0,r.jsx)(i.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.0.1+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"Not Supported",uc_shared:"14.3+",livy:"Not Supported"}),"\n",(0,r.jsxs)(a.p,{children:["The Target gem writes data to each row from the ",(0,r.jsx)(a.code,{children:"Dataframe"})," to a Kafka topic as JSON messages and allows you to optionally specify the following additional properties."]}),"\n",(0,r.jsx)(a.h3,{id:"target-properties",children:"Target properties"}),"\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Property name"}),(0,r.jsx)(a.th,{children:"Description"}),(0,r.jsx)(a.th,{children:"Default"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Message Unique Key"}),(0,r.jsx)(a.td,{children:"Key to help determine which partition to write the data to."}),(0,r.jsx)(a.td,{children:"None"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Kerberos service name for Kafka SASL"}),(0,r.jsx)(a.td,{children:"Name of your Kerberos service to use in Kafka."}),(0,r.jsx)(a.td,{children:"None"})]})]})]}),"\n",(0,r.jsx)(a.h3,{id:"target-example",children:"Example"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Example usage of Filter",src:t(24123).A+"",width:"3042",height:"1452"})}),"\n",(0,r.jsx)(a.h3,{id:"target-code",children:"Generated Code"}),"\n",(0,r.jsx)(a.admonition,{type:"tip",children:(0,r.jsxs)(a.p,{children:["To see the generated source code of your project, ",(0,r.jsx)(a.a,{href:"/engineers/project-lifecycle/#review-the-code",children:"switch to the Code view"})," in the project header."]})}),"\n",(0,r.jsx)(l.A,{children:(0,r.jsx)(o.A,{value:"py",label:"Python",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-py",children:'def KafkaTarget(spark: SparkSession, in0: DataFrame):\n    df1 = in0.select(to_json(struct("*")).alias("value"))\n    df2 = df1.selectExpr("CAST(value AS STRING)")\n    df2.write\\\n        .format("kafka")\\\n        .options(\n          **{\n            "kafka.sasl.jaas.config": (\n              f"kafkashaded.org.apache.kafka.common.security.scram.ScramLoginModule"\n              + f\' required username="{DBUtils(spark).secrets.get(scope = "test", key = "username")}" password="{DBUtils(spark).secrets.get(scope = "test", key = "password")}";\'\n            ),\n            "kafka.sasl.mechanism": "SCRAM-SHA-256",\n            "kafka.security.protocol": "SASL_SSL",\n            "kafka.bootstrap.servers": "broker1.aws.com:9094,broker2.aws.com:9094",\n            "topic": "my_first_topic,my_second_topic",\n          }\n        )\\\n        .save()\n'})})})}),"\n",(0,r.jsx)(a.hr,{}),"\n",(0,r.jsx)(a.h2,{id:"example-pipeline",children:"Example Pipeline"}),"\n",(0,r.jsx)(a.h3,{id:"source-pipeline-example",children:"Source Pipeline Example"}),"\n",(0,r.jsx)(a.p,{children:"In this example, you read JSON messages from Kafka, parse them, remove any null messages, and persist the data to a Delta table."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Example usage of Filter",src:t(47983).A+"",width:"1139",height:"584"})}),"\n",(0,r.jsx)(a.admonition,{type:"tip",children:(0,r.jsxs)(a.p,{children:["To see the generated source code of your project, ",(0,r.jsx)(a.a,{href:"/engineers/project-lifecycle/#review-the-code",children:"switch to the Code view"})," in the project header."]})}),"\n",(0,r.jsx)(a.h4,{id:"metadata-table",children:"Metadata Table"}),"\n",(0,r.jsx)(a.p,{children:"To avoid reprocessing messages on subsequent pipeline runs, update a table with the last processed offsets for each Kafka partition and topic. When you run the pipeline, the table only gets a batch of messages that arrived since the previously-processed offset."}),"\n",(0,r.jsxs)(a.p,{children:["In this example, you update ",(0,r.jsx)(a.code,{children:"metadata.kafka_offsets"}),", which has the following structure:"]}),"\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{style:{textAlign:"left"},children:"topic"}),(0,r.jsx)(a.th,{style:{textAlign:"left"},children:"partition"}),(0,r.jsx)(a.th,{style:{textAlign:"left"},children:"max_offset"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"my_first_topic"}),(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"0"}),(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"10"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"my_first_topic"}),(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"1"}),(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"5"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"my_second_topic"}),(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"0"}),(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"10"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"my_second_topic"}),(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"1"}),(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"5"})]})]})]}),"\n",(0,r.jsx)(a.p,{children:"Taking this approach provides you the with following benefits:"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"Builds the pipeline interactively without committing any offsets."}),"\n",(0,r.jsx)(a.li,{children:"Production workflows only consume messages that arrived since the previously-processed offset."}),"\n",(0,r.jsx)(a.li,{children:"You can replay old messages by modifying the Metadata table."}),"\n"]}),"\n",(0,r.jsx)(a.admonition,{type:"note",children:(0,r.jsxs)(a.p,{children:["For production workflows the ",(0,r.jsx)(a.a,{href:"/engineers/gems#gem-phase",children:"phase"})," for the ",(0,r.jsx)(a.code,{children:"Script"})," gem that updates the offsets should be greater than the phase of the Target gem. This ensures that offsets only update in the table after Prophecy safely persists the data to the Target."]})}),"\n",(0,r.jsx)(a.h4,{id:"spark-code-used-for-script-component",children:"Spark Code used for script component"}),"\n",(0,r.jsx)(a.admonition,{type:"tip",children:(0,r.jsxs)(a.p,{children:["To see the generated source code of your project, ",(0,r.jsx)(a.a,{href:"/engineers/project-lifecycle/#review-the-code",children:"switch to the Code view"})," in the project header."]})}),"\n",(0,r.jsx)(l.A,{children:(0,r.jsx)(o.A,{value:"py",label:"Python",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-py",children:'def UpdateOffsets(spark: SparkSession, in0: DataFrame):\n\n    if not ("SColumnExpression" in locals()):\n        from delta.tables import DeltaTable\n        import pyspark.sql.functions as f\n        metadataTable = "metadata.kafka_offsets"\n        metaDataDf = in0.groupBy("partition", "topic").agg(f.max(f.col("`offset`").cast("int")).alias("max_offset"))\n\n        if not spark.catalog._jcatalog.tableExists(metadataTable):\n            metaDataDf.write.format("delta").mode("overwrite").saveAsTable(metadataTable)\n        else:\n            DeltaTable\\\n                .forName(spark, metadataTable)\\\n                .alias("target")\\\n                .merge(\n                  metaDataDf.alias("source"),\n                  (\n                    (col("source.`partition`") == col("target.`partition`"))\n                    & (col("source.`topic`") == col("target.`topic`"))\n                  )\n                )\\\n                .whenMatchedUpdateAll()\\\n                .whenNotMatchedInsertAll()\\\n                .execute()\n'})})})})]})}function f(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}}}]);