"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[40405],{1184:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/dedup_eg_first-332e45b4e9c2056f28e516fab0a25776.png"},9184:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/dedup_eg_last-bb06dca08a11dc0d78e142cddf134ea6.png"},12627:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/deduplicate_eg_1-31f75cb0d1229ebd70c3aa9de7c45f13.png"},13314:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"Spark/gems/transform/deduplicate","title":"Deduplicate","description":"Remove rows with duplicate values of specified columns","source":"@site/docs/Spark/gems/transform/deduplicate.md","sourceDirName":"Spark/gems/transform","slug":"/engineers/deduplicate","permalink":"/prophecy-docs-staging/preview/pr-598/engineers/deduplicate","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-598/tags/gems"},{"inline":true,"label":"dedupe","permalink":"/prophecy-docs-staging/preview/pr-598/tags/dedupe"},{"inline":true,"label":"distinct","permalink":"/prophecy-docs-staging/preview/pr-598/tags/distinct"},{"inline":true,"label":"unique","permalink":"/prophecy-docs-staging/preview/pr-598/tags/unique"}],"version":"current","frontMatter":{"title":"Deduplicate","id":"deduplicate","slug":"/engineers/deduplicate","description":"Remove rows with duplicate values of specified columns","tags":["gems","dedupe","distinct","unique"]},"sidebar":"mySidebar","previous":{"title":"DataQualityCheck","permalink":"/prophecy-docs-staging/preview/pr-598/engineers/data-quality-check"},"next":{"title":"DynamicReplace","permalink":"/prophecy-docs-staging/preview/pr-598/engineers/dynamic-replace"}}');var r=a(74848),t=a(28453),i=a(49235),l=a(65537),c=a(79329);const o={title:"Deduplicate",id:"deduplicate",slug:"/engineers/deduplicate",description:"Remove rows with duplicate values of specified columns",tags:["gems","dedupe","distinct","unique"]},d=void 0,u={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Rows to keep: <code>Any</code>",id:"rows-to-keep-any",level:3},{value:"Rows to keep: <code>First</code>",id:"rows-to-keep-first",level:3},{value:"Rows to keep: <code>Last</code>",id:"rows-to-keep-last",level:3},{value:"Rows to keep: <code>Unique Only</code>",id:"rows-to-keep-unique-only",level:3},{value:"Rows to keep: <code>Distinct Rows</code>",id:"rows-to-keep-distinct-rows",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.0.1+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"3.0.1+"}),"\n",(0,r.jsx)(n.p,{children:"Removes rows with duplicate values of specified columns."}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"DataFrame"}),(0,r.jsx)(n.td,{children:"Input DataFrame"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Row to keep"}),(0,r.jsx)(n.td,{children:(0,r.jsxs)("ul",{style:{margin:0,padding:"0 1rem"},children:[(0,r.jsxs)("li",{children:["Any (Default): Keeps any one row among duplicates. Uses underlying ",(0,r.jsx)(n.code,{children:"dropDuplicates"})," construct. "]}),(0,r.jsx)("li",{children:"First: Keeps first occurrence of the duplicate row. "}),(0,r.jsx)("li",{children:"Last: Keeps last occurrence of the duplicate row."}),(0,r.jsx)("li",{children:"Unique Only: Keeps rows that don't have duplicates. "}),(0,r.jsxs)("li",{children:["Distinct Rows: Keeps all distinct rows. This is equivalent to performing a ",(0,r.jsx)(n.code,{children:"df.distinct()"})," operation."]})]})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Deduplicate columns"}),(0,r.jsxs)(n.td,{children:["Columns to consider while removing duplicate rows (not required for ",(0,r.jsx)(n.code,{children:"Distinct Rows"}),")"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Order columns"}),(0,r.jsxs)(n.td,{children:["Columns to sort DataFrame on before de-duping in case of ",(0,r.jsx)(n.code,{children:"First"})," and ",(0,r.jsx)(n.code,{children:"Last"})," rows to keep"]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.h3,{id:"rows-to-keep-any",children:["Rows to keep: ",(0,r.jsx)(n.code,{children:"Any"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Example usage of Deduplicate",src:a(12627).A+"",width:"940",height:"283"})}),"\n","\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(c.A,{value:"py",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'def dedup(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    return in0.dropDuplicates(["tran_id"])\n'})})}),(0,r.jsx)(c.A,{value:"scala",label:"Scala",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:'object dedup {\n  def apply(spark: SparkSession, in: DataFrame): DataFrame = {\n    in.dropDuplicates(List("tran_id"))\n  }\n}\n'})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"rows-to-keep-first",children:["Rows to keep: ",(0,r.jsx)(n.code,{children:"First"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Example usage of Deduplicate - First",src:a(1184).A+"",width:"2000",height:"845"})}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(c.A,{value:"py",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'def earliest_cust_order(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    return in0\\\n        .withColumn(\n          "row_number",\n          row_number()\\\n            .over(Window\\\n            .partitionBy("customer_id")\\\n            .orderBy(col("order_dt").asc())\n        )\\\n        .filter(col("row_number") == lit(1))\\\n        .drop("row_number")\n'})})}),(0,r.jsx)(c.A,{value:"scala",label:"Scala",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:'object earliest_cust_order {\n  def apply(spark: SparkSession, in: DataFrame): DataFrame = {\n    import org.apache.spark.sql.expressions.Window\n    in.withColumn(\n        "row_number",\n        row_number().over(\n          Window\n            .partitionBy("customer_id")\n            .orderBy(col("order_date").asc)\n        )\n      )\n      .filter(col("row_number") === lit(1))\n      .drop("row_number")\n  }\n}\n'})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"rows-to-keep-last",children:["Rows to keep: ",(0,r.jsx)(n.code,{children:"Last"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Example usage of Deduplicate - Last",src:a(9184).A+"",width:"3974",height:"1678"})}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(c.A,{value:"py",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'def latest_cust_order(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    return in0\\\n        .withColumn(\n          "row_number",\n          row_number()\\\n            .over(Window\\\n            .partitionBy("customer_id")\\\n            .orderBy(col("order_dt").asc())\n        )\\\n        .withColumn(\n          "count",\n          count("*")\\\n            .over(Window\\\n            .partitionBy("customer_id")\n        )\\\n        .filter(col("row_number") == col("count"))\\\n        .drop("row_number")\\\n        .drop("count")\n'})})}),(0,r.jsx)(c.A,{value:"scala",label:"Scala",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:'object latest_cust_order {\n  def apply(spark: SparkSession, in: DataFrame): DataFrame = {\n    import org.apache.spark.sql.expressions.Window\n    in.withColumn(\n        "row_number",\n        row_number().over(\n          Window\n            .partitionBy("customer_id")\n            .orderBy(col("order_date").asc)\n        )\n      )\n      .withColumn(\n        "count",\n        count("*").over(\n          Window\n            .partitionBy("customer_id")\n        )\n      )\n      .filter(col("row_number") === col("count"))\n      .drop("row_number")\n      .drop("count")\n  }\n}\n'})})})]}),"\n",(0,r.jsxs)(n.h3,{id:"rows-to-keep-unique-only",children:["Rows to keep: ",(0,r.jsx)(n.code,{children:"Unique Only"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Example usage of Deduplicate - Unique",src:a(59209).A+"",width:"1906",height:"809"})}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(c.A,{value:"py",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'def single_order_customers(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    return in0\\\n        .withColumn(\n          "count",\n          count("*")\\\n            .over(Window\\\n            .partitionBy("customer_id")\n        )\\\n        .filter(col("count") == lit(1))\\\n        .drop("count")\n'})})}),(0,r.jsx)(c.A,{value:"scala",label:"Scala",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:'object single_order_customers {\n  def apply(spark: SparkSession, in: DataFrame): DataFrame = {\n    import org.apache.spark.sql.expressions.Window\n    in.withColumn(\n        "count",\n        count("*").over(\n          Window\n            .partitionBy("customer_id")\n        )\n      )\n      .filter(col("count") === lit(1))\n      .drop("count")\n  }\n\n}\n'})})})]}),"\n",(0,r.jsxs)(n.h3,{id:"rows-to-keep-distinct-rows",children:["Rows to keep: ",(0,r.jsx)(n.code,{children:"Distinct Rows"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Example usage of Deduplicate - Distinct",src:a(21524).A+"",width:"2042",height:"846"})}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(c.A,{value:"py",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"def single_order_customers(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    return in0.distinct()\n"})})}),(0,r.jsx)(c.A,{value:"scala",label:"Scala",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:"object single_order_customers {\n  def apply(spark: SparkSession, in: DataFrame): DataFrame = {\n    in.distinct()\n  }\n\n}\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},21524:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/dedup_eg_distinct-ce4df273ebe6eccd4b71e44f1fd66777.png"},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>l});var s=a(96540);const r={},t=s.createContext(r);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:n},e.children)}},49235:(e,n,a)=>{a.d(n,{A:()=>r});a(96540);var s=a(74848);function r(e){return(0,s.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:e.python_package_name}),(0,s.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:e.scala_package_name}),(0,s.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,s.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,s.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,s.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,s.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Livy"}),(0,s.jsx)("span",{className:"right",children:e.livy})]})}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]})}},59209:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/dedup_eg_unique-1265d14fa8c45ec25a4bdd2e874deb6b.png"},65537:(e,n,a)=>{a.d(n,{A:()=>v});var s=a(96540),r=a(18215),t=a(65627),i=a(56347),l=a(50372),c=a(30604),o=a(11861),d=a(78749);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:s,default:r}}=e;return{value:n,label:a,attributes:s,default:r}}))}(a);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const r=(0,i.W6)(),t=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,c.aZ)(t),(0,s.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(r.location.search);n.set(t,e),r.replace({...r.location,search:n.toString()})}),[t,r])]}function g(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,t=p(e),[i,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=a.find((e=>e.default))??a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:t}))),[o,u]=m({queryString:a,groupId:r}),[g,x]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,t]=(0,d.Dv)(a);return[r,(0,s.useCallback)((e=>{a&&t.set(e)}),[a,t])]}({groupId:r}),b=(()=>{const e=o??g;return h({value:e,tabValues:t})?e:null})();(0,l.A)((()=>{b&&c(b)}),[b]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),x(e)}),[u,x,t]),tabValues:t}}var x=a(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=a(74848);function j(e){let{className:n,block:a,selectedValue:s,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.a_)(),d=e=>{const n=e.currentTarget,a=c.indexOf(n),r=l[a].value;r!==s&&(o(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:l.map((e=>{let{value:n,label:a,attributes:t}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>{c.push(e)},onKeyDown:u,onClick:d,...t,className:(0,r.A)("tabs__item",b.tabItem,t?.className,{"tabs__item--active":s===n}),children:a??n},n)}))})}function y(e){let{lazy:n,children:a,selectedValue:t}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function w(e){const n=g(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,f.jsx)(j,{...n,...e}),(0,f.jsx)(y,{...n,...e})]})}function v(e){const n=(0,x.A)();return(0,f.jsx)(w,{...e,children:u(e.children)},String(n))}},79329:(e,n,a)=>{a.d(n,{A:()=>i});a(96540);var s=a(18215);const r={tabItem:"tabItem_Ymn6"};var t=a(74848);function i(e){let{children:n,hidden:a,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:a,children:n})}}}]);