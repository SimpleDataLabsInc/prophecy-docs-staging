"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[34088],{28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>o});var a=t(96540);const s={},n=a.createContext(s);function i(e){const r=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(n.Provider,{value:r},e.children)}},28504:(e,r,t)=>{t.d(r,{A:()=>a});const a=t.p+"assets/images/ff-target-small-4279378adafa421862f32729ff6b7cf5.gif"},43802:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"Spark/gems/source-target/file/fixed-format","title":"Fixed Format","description":"Parameters and properties to read from and write to Fixed Format files","source":"@site/docs/Spark/gems/source-target/file/fixed-format.md","sourceDirName":"Spark/gems/source-target/file","slug":"/engineers/fixed-format","permalink":"/prophecy-docs-staging/preview/pr-607/engineers/fixed-format","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-607/tags/gems"},{"inline":true,"label":"file","permalink":"/prophecy-docs-staging/preview/pr-607/tags/file"},{"inline":true,"label":"fixed-format","permalink":"/prophecy-docs-staging/preview/pr-607/tags/fixed-format"}],"version":"current","frontMatter":{"title":"Fixed Format","id":"fixed-format","slug":"/engineers/fixed-format","description":"Parameters and properties to read from and write to Fixed Format files","tags":["gems","file","fixed-format"]},"sidebar":"mySidebar","previous":{"title":"Delta","permalink":"/prophecy-docs-staging/preview/pr-607/engineers/delta"},"next":{"title":"JSON","permalink":"/prophecy-docs-staging/preview/pr-607/engineers/json"}}');var s=t(74848),n=t(28453),i=t(49235),o=t(65537),l=t(79329);const c={title:"Fixed Format",id:"fixed-format",slug:"/engineers/fixed-format",description:"Parameters and properties to read from and write to Fixed Format files",tags:["gems","file","fixed-format"]},d=void 0,h={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Source",id:"source",level:2},{value:"Source Properties",id:"source-properties",level:3},{value:"Example",id:"source-example",level:3},{value:"Generated Code",id:"source-code",level:3},{value:"Target",id:"target",level:2},{value:"Target Properties",id:"target-properties",level:3},{value:"Supported write modes",id:"supported-write-modes",level:3},{value:"Example",id:"target-example",level:3},{value:"Generated Code",id:"target-code",level:3}];function u(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.0.1+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"Not Supported",livy:"Not Supported"}),"\n",(0,s.jsx)(r.admonition,{title:"Enterprise Only",type:"caution",children:(0,s.jsxs)(r.p,{children:["To learn more about our Enterprise offering, please ",(0,s.jsx)(r.a,{href:"https://www.prophecy.io/request-a-demo",children:"contact us"}),"."]})}),"\n",(0,s.jsx)(r.p,{children:"A Fixed Format (Fixed-Length Format) file type:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Is a text file where each field or column occupies a predetermined, constant number of characters in each record."}),"\n",(0,s.jsx)(r.li,{children:"Can parse and process quickly because the software knows exactly where to find each field."}),"\n",(0,s.jsx)(r.li,{children:"Is often used in legacy systems, data exchange, and performance-critical applications."}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Tab"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Location"}),(0,s.jsx)(r.td,{children:"Location"}),(0,s.jsx)(r.td,{children:"File path to read from or write to the Fixed Format file."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Schema"}),(0,s.jsx)(r.td,{children:"Properties"}),(0,s.jsxs)(r.td,{children:["Schema to apply on the loaded data.",(0,s.jsx)("br",{}),"In the Source gem, you can define or edit the schema visually or in JSON code.",(0,s.jsx)("br",{}),"In the Target gem, you can view the schema visually or as JSON code."]})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"source",children:"Source"}),"\n",(0,s.jsx)(r.p,{children:"The Source gem reads data from Fixed Format files and allows you to optionally specify the following additional properties."}),"\n",(0,s.jsx)(r.h3,{id:"source-properties",children:"Source Properties"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Property name"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Description"}),(0,s.jsx)(r.td,{children:"Description of your dataset."}),(0,s.jsx)(r.td,{children:"None"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Skip header lines"}),(0,s.jsx)(r.td,{children:"Number of lines to skip at the beginning of the file."}),(0,s.jsx)(r.td,{children:"None"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Skip footer lines"}),(0,s.jsx)(r.td,{children:"Number of lines to skip at the end of the file."}),(0,s.jsx)(r.td,{children:"None"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Fixed Format Schema"}),(0,s.jsxs)(r.td,{children:["Schema string for the fixed format file. ",(0,s.jsx)("br",{}),"Supports either EBCDIC or ASCII formats."]}),(0,s.jsx)(r.td,{children:"None"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"source-example",children:"Example"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"Fixed format source example",src:t(45424).A+"",width:"1183",height:"672"})}),"\n",(0,s.jsx)(r.h3,{id:"source-code",children:"Generated Code"}),"\n",(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsxs)(r.p,{children:["To see the generated source code of your project, ",(0,s.jsx)(r.a,{href:"/engineers/project-lifecycle/#review-the-code",children:"switch to the Code view"})," in the project header."]})}),"\n","\n",(0,s.jsxs)(o.A,{children:[(0,s.jsx)(l.A,{value:"py",label:"Python",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-py",children:'def read_ebcdic(spark: SparkSession) -> DataFrame:\n    from prophecy.utils.transpiler import parse\n\n    return spark.read\\\n        .option("schema", parse("ebcdic record\\nstring(18) c_name;\\ndecimal(10, 0) c_custkey ;\\nend"))\\\n        .format("io.prophecy.libs.FixedFileFormat")\\\n        .load("/FileStore/tables/fixed_format/test/read_ebcdic")\n\n'})})}),(0,s.jsx)(l.A,{value:"scala",label:"Scala",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-scala",children:'object ReadEbcdic {\n\n  def apply(spark: SparkSession): DataFrame = {\n    import _root_.io.prophecy.abinitio.dml.DMLSchema.parse\n    import _root_.io.prophecy.libs.{FFSchemaRecord, _}\n    import play.api.libs.json.Json\n    import _root_.io.prophecy.libs.FixedFormatSchemaImplicits._\n    spark.read\n      .option(\n        "schema",\n        Some("""ebcdic record\n                string(6) service ;\n                string(2) person ;\n                decimal(2, 0) data ;\n                string(1) format ;\n                string(1) working ;\n                end""").map(s => parse(s).asInstanceOf[FFSchemaRecord])\n                          .map(s => Json.stringify(Json.toJson(s)))\n                          .getOrElse("")\n      )\n      .format("io.prophecy.libs.FixedFileFormat")\n      .load("/FileStore/tables/fixed_format/test/write_ebcdic")\n      .cache()\n  }\n\n}\n'})})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"target",children:"Target"}),"\n",(0,s.jsx)(r.p,{children:"The Target gem writes data to Fixed Format files and allows you to optionally specify the following additional properties."}),"\n",(0,s.jsx)(r.h3,{id:"target-properties",children:"Target Properties"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Property name"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Write Mode"}),(0,s.jsxs)(r.td,{children:["How to handle existing data. For a list of the possible values, see ",(0,s.jsx)(r.a,{href:"#supported-write-modes",children:"Supported write modes"}),"."]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"error"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Description"}),(0,s.jsx)(r.td,{children:"Description of your dataset."}),(0,s.jsx)(r.td,{children:"None"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Fixed Format Schema"}),(0,s.jsxs)(r.td,{children:["Schema string for the fixed format file. ",(0,s.jsx)("br",{}),"Supports either EBCDIC or ASCII formats."]}),(0,s.jsx)(r.td,{children:"None"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"supported-write-modes",children:"Supported write modes"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Write mode"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"error"}),(0,s.jsx)(r.td,{children:"If the data already exists, throw an exception."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"overwrite"}),(0,s.jsxs)(r.td,{children:["If the data already exists, overwrite the data with the contents of the ",(0,s.jsx)(r.code,{children:"DataFrame"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"append"}),(0,s.jsxs)(r.td,{children:["If the data already exists, append the contents of the ",(0,s.jsx)(r.code,{children:"DataFrame"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ignore"}),(0,s.jsxs)(r.td,{children:["If the data already exists, do nothing with the contents of the ",(0,s.jsx)(r.code,{children:"DataFrame"}),". ",(0,s.jsx)("br",{}),"This is similar to the ",(0,s.jsx)(r.code,{children:"CREATE TABLE IF NOT EXISTS"})," clause in SQL."]})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"target-example",children:"Example"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"Fixed format target Example",src:t(28504).A+"",width:"894",height:"470"})}),"\n",(0,s.jsx)(r.h3,{id:"target-code",children:"Generated Code"}),"\n",(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsxs)(r.p,{children:["To see the generated source code of your project, ",(0,s.jsx)(r.a,{href:"/engineers/project-lifecycle/#review-the-code",children:"switch to the Code view"})," in the project header."]})}),"\n",(0,s.jsxs)(o.A,{children:[(0,s.jsx)(l.A,{value:"py",label:"Python",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-py",children:'def write_ebcdic(spark: SparkSession, in0: DataFrame):\n    from prophecy.utils.transpiler import parse\n    in0.write\\\n        .mode("overwrite")\\\n        .option("schema", parse("ebcdic record\\nstring(18) c_name ;\\ndecimal(10, 0) c_custkey ;\\nend"))\\\n        .format("io.prophecy.libs.FixedFileFormat")\\\n        .save("/FileStore/tables/fixed_format/test/write_ebcdic_alt")\n'})})}),(0,s.jsx)(l.A,{value:"scala",label:"Scala",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-scala",children:'object write_ebcdic {\n\n  def apply(spark: SparkSession, in: DataFrame): Unit = {\n    import _root_.io.prophecy.abinitio.dml.DMLSchema.parse\n    import _root_.io.prophecy.libs.{FFSchemaRecord, _}\n    import play.api.libs.json.Json\n    import _root_.io.prophecy.libs.FixedFormatSchemaImplicits._\n    val schema = Some("""ebcdic record\n                            string(6) service ;\n                            string(2) person ;\n                            decimal(2, 0) data ;\n                            string(1) format ;\n                            string(1) working ;\n                            end""").map(s => parse(s).asInstanceOf[FFSchemaRecord])\n    var writer = in.write.format("io.prophecy.libs.FixedFileFormat")\n    writer = writer.mode("overwrite")\n    schema\n      .map(s => Json.stringify(Json.toJson(s)))\n      .foreach(schema => writer = writer.option("schema", schema))\n    writer.save("/FileStore/tables/fixed_format/test/write_ebcdic_alt")\n  }\n\n}\n'})})})]})]})}function m(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},45424:(e,r,t)=>{t.d(r,{A:()=>a});const a=t.p+"assets/images/ff-source-small-3b13c691a868ae9789a145fe6cd1157e.gif"},49235:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var a=t(74848);function s(e){return(0,a.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:e.python_package_name}),(0,a.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:e.scala_package_name}),(0,a.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,a.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,a.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,a.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,a.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Livy"}),(0,a.jsx)("span",{className:"right",children:e.livy})]})}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]})}},65537:(e,r,t)=>{t.d(r,{A:()=>w});var a=t(96540),s=t(18215),n=t(65627),i=t(56347),o=t(50372),l=t(30604),c=t(11861),d=t(78749);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:t,attributes:a,default:s}}=e;return{value:r,label:t,attributes:a,default:s}}))}(t);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function u(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const s=(0,i.W6)(),n=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(n),(0,a.useCallback)((e=>{if(!n)return;const r=new URLSearchParams(s.location.search);r.set(n,e),s.replace({...s.location,search:r.toString()})}),[n,s])]}function x(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,n=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:n}))),[c,h]=m({queryString:t,groupId:s}),[x,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,n]=(0,d.Dv)(t);return[s,(0,a.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:s}),j=(()=>{const e=c??x;return u({value:e,tabValues:n})?e:null})();(0,o.A)((()=>{j&&l(j)}),[j]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,n]),tabValues:n}}var f=t(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function b(e){let{className:r,block:t,selectedValue:a,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.a_)(),d=e=>{const r=e.currentTarget,t=l.indexOf(r),s=o[t].value;s!==a&&(c(r),i(s))},h=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},r),children:o.map((e=>{let{value:r,label:t,attributes:n}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>{l.push(e)},onKeyDown:h,onClick:d,...n,className:(0,s.A)("tabs__item",j.tabItem,n?.className,{"tabs__item--active":a===r}),children:t??r},r)}))})}function y(e){let{lazy:r,children:t,selectedValue:n}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function v(e){const r=x(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,g.jsx)(b,{...r,...e}),(0,g.jsx)(y,{...r,...e})]})}function w(e){const r=(0,f.A)();return(0,g.jsx)(v,{...e,children:h(e.children)},String(r))}},79329:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var a=t(18215);const s={tabItem:"tabItem_Ymn6"};var n=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,i),hidden:t,children:r})}}}]);