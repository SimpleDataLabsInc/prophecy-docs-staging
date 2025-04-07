"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[70778],{28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var a=n(96540);const l={},s=a.createContext(l);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),a.createElement(s.Provider,{value:t},e.children)}},49235:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var a=n(74848);function l(e){return(0,a.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:e.python_package_name}),(0,a.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:e.scala_package_name}),(0,a.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,a.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,a.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,a.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,a.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Livy"}),(0,a.jsx)("span",{className:"right",children:e.livy})]})}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]})}},65537:(e,t,n)=>{n.d(t,{A:()=>v});var a=n(96540),l=n(18215),s=n(65627),r=n(56347),c=n(50372),o=n(30604),i=n(11861),u=n(78749);function m(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return m(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}(n);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const l=(0,r.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(l.location.search);t.set(s,e),l.replace({...l.location,search:t.toString()})}),[s,l])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,s=d(e),[r,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[i,m]=h({queryString:n,groupId:l}),[x,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,s]=(0,u.Dv)(n);return[l,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:l}),g=(()=>{const e=i??x;return p({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{g&&o(g)}),[g]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),m(e),f(e)}),[m,f,s]),tabValues:s}}var f=n(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=n(74848);function b(e){let{className:t,block:n,selectedValue:a,selectValue:r,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),l=c[n].value;l!==a&&(i(t),r(l))},m=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{o.push(e)},onKeyDown:m,onClick:u,...s,className:(0,l.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=x(e);return(0,_.jsxs)("div",{className:(0,l.A)("tabs-container",g.tabList),children:[(0,_.jsx)(b,{...t,...e}),(0,_.jsx)(j,{...t,...e})]})}function v(e){const t=(0,f.A)();return(0,_.jsx)(y,{...e,children:m(e.children)},String(t))}},79329:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var a=n(18215);const l={tabItem:"tabItem_Ymn6"};var s=n(74848);function r(e){let{children:t,hidden:n,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,r),hidden:n,children:t})}},92937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"Spark/gems/join-split/compare-columns","title":"CompareColumns","description":"Compare columns between two dataframes","source":"@site/docs/Spark/gems/join-split/compare-columns.md","sourceDirName":"Spark/gems/join-split","slug":"/engineers/compare-columns","permalink":"/prophecy-docs-staging/preview/pr-608/engineers/compare-columns","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-608/tags/gems"},{"inline":true,"label":"compare","permalink":"/prophecy-docs-staging/preview/pr-608/tags/compare"},{"inline":true,"label":"diff","permalink":"/prophecy-docs-staging/preview/pr-608/tags/diff"},{"inline":true,"label":"compare-columns","permalink":"/prophecy-docs-staging/preview/pr-608/tags/compare-columns"}],"version":"current","frontMatter":{"title":"CompareColumns","id":"compare-columns","slug":"/engineers/compare-columns","description":"Compare columns between two dataframes","tags":["gems","compare","diff","compare-columns"]},"sidebar":"mySidebar","previous":{"title":"Join & Split","permalink":"/prophecy-docs-staging/preview/pr-608/engineers/join-split"},"next":{"title":"Join","permalink":"/prophecy-docs-staging/preview/pr-608/engineers/join"}}');var l=n(74848),s=n(28453),r=n(49235),c=n(65537),o=n(79329);const i={title:"CompareColumns",id:"compare-columns",slug:"/engineers/compare-columns",description:"Compare columns between two dataframes",tags:["gems","compare","diff","compare-columns"]},u=void 0,m={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Example - Compare columns of two DataFrames",id:"example---compare-columns-of-two-dataframes",level:3},{value:"Example code",id:"example-code",level:3}];function p(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.0.1+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"3.0.1+"}),"\n",(0,l.jsx)(t.p,{children:"The CompareColumns gem lets you compare columns between two DataFrames based on the key id columns defined."}),"\n",(0,l.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Required"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"DataFrame 1"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"First input DataFrame"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"True"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"DataFrame 2"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Second input DataFrame"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"True"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ID columns to retain(Select Id Columns)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"List of columns that are used joining two dataframes"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"True"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Output Column Name(Select Output Columns)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"In the output, alias name of the column name that was compared among dataframes"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"True"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Match Count Column Name(Select Output Columns)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"In the output, alias name of the column that shows the count of rows that matched between two dataframes"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"True"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Mismatch Count Column Name(Select Output Columns)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"In the output, alias name of the column that shows the count of rows that mismatched between two dataframes"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"True"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Mismatch Example Left Column Name(Select Output Columns)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"In the output, alias name of the column displaying an incorrect left column value"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"True"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Mismatch Example Right Column Name(Select Output Columns)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"In the output, alias name of the column displaying an incorrect right column value"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"True"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Mismatch Example ID Column Prefix(Select Output Columns)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"In the output, alias name of the ID column value that mismatched between two dataframes"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"True"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"example---compare-columns-of-two-dataframes",children:"Example - Compare columns of two DataFrames"}),"\n",(0,l.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,l.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,l.jsx)("iframe",{src:"https://github.com/SimpleDataLabsInc/prophecy-docs/assets/130362885/23c23ea9-e98b-4624-91a8-597cfaf0e647",title:"Compare columns",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,l.jsx)(t.h3,{id:"example-code",children:"Example code"}),"\n","\n",(0,l.jsxs)(c.A,{children:[(0,l.jsx)(o.A,{value:"py",label:"Python",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-py",children:'def CompareColumns_1(spark: SparkSession, in0: DataFrame, in1: DataFrame) -> DataFrame:\n    joined = exploded1\\\n                 .join(\n                   exploded2,\n                   reduce(\n                     lambda a, c: a & c,\n                     [col(f"exploded1.column_name") == col(f"exploded2.column_name"),                       col(f"exploded1.customer_id") == col(f"exploded2.customer_id")],\n                     lit(True)\n                   ),\n                   "full_outer"\n                 )\\\n                 .select(\n                   coalesce(col(f"exploded1.column_name"), col(f"exploded2.column_name")).alias("column_name"),\n                   coalesce(col(f"exploded1.customer_id"), col(f"exploded2.customer_id")).alias("customer_id"),\n                   col(\n                       f"exploded1.##value##"\n                     )\\\n                     .alias(\n                     "##left_value##"\n                   ),\n                   col(\n                       f"exploded2.##value##"\n                     )\\\n                     .alias(\n                     "##right_value##"\n                   )\n                 )\\\n                 .withColumn(\n                   "match_count",\n                   when(\n                       coalesce(\n                         (\n                           col("##left_value##")\n                           == col(\n                             "##right_value##"\n                           )\n                         ),\n                         (\n                           col(\n                               "##left_value##"\n                             )\\\n                             .isNull()\n                           & col(\n                               "##right_value##"\n                             )\\\n                             .isNull()\n                         )\n                       ),\n                       lit(1)\n                     )\\\n                     .otherwise(lit(0))\n                 )\\\n                 .withColumn(\n        "mismatch_count",\n        when(\n            coalesce(\n              (\n                col("##left_value##")\n                != col(\n                  "##right_value##"\n                )\n              ),\n              ~ (\n                col(\n                    "##left_value##"\n                  )\\\n                  .isNull()\n                & col(\n                    "##right_value##"\n                  )\\\n                  .isNull()\n              )\n            ),\n            lit(1)\n          )\\\n          .otherwise(lit(0))\n                 )\n    mismatchExamples = joined\\\n                           .select(\n                             col("column_name"),\n                             col("customer_id"),\n                             lit(0).alias("match_count"),\n                             lit(0).alias("mismatch_count"),\n                             col(\n                                 "##left_value##"\n                               )\\\n                               .alias("mismatch_example_left"),\n                             col(\n                                 "##right_value##"\n                               )\\\n                               .alias("mismatch_example_right")\n                           )\\\n                           .dropDuplicates(["column_name"])\n\n    return joined\\\n        .union(mismatchExamples)\\\n        .groupBy("column_name")\\\n        .agg(\n          sum("match_count").alias("match_count"),\n          sum("mismatch_count").alias("mismatch_count"),\n          first(col("mismatch_example_left"), ignorenulls = True).alias("mismatch_example_left"),\n          first(col("mismatch_example_right"), ignorenulls = True).alias("mismatch_example_right"),\n          first(\n              when(coalesce(col("mismatch_example_left"), col("mismatch_example_right")).isNotNull(), col("customer_id"))\\\n                .otherwise(lit(None)),\n              ignorenulls = True\n            )\\\n            .alias("mismatch_example_customer_id")\n        )\\\n        .orderBy(col("mismatch_count").desc(), col("column_name"))\n\n'})})}),(0,l.jsx)(o.A,{value:"scala",label:"Scala",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-scala",children:'object CompareColumns_1 {\n   def apply(context: Context, in0: DataFrame, in1: DataFrame): DataFrame = {\n    import org.apache.spark.sql.expressions.Window\n    val joined = in0\n      .select(\n        col("customer_id"),\n        explode_outer(\n          map(\n            (in0.columns.toSet -- List("customer_id").toSet).toSeq.flatMap(c =>\n              List(lit(c), col(c).cast("string"))\n            ): _*\n          )\n        ).as(List("column_name", "##value##"))\n      )\n      .as("exploded1")\n      .join(\n        in1\n          .select(\n            col("customer_id"),\n            explode_outer(\n              map(\n                (in0.columns.toSet -- List("customer_id").toSet).toSeq\n                  .flatMap(c => List(lit(c), col(c).cast("string"))): _*\n              )\n            ).as(List("column_name", "##value##"))\n          )\n          .as("exploded2"),\n        lit(true)\n          .and(col("exploded1.column_name") === col("exploded2.column_name"))\n          .and(col("exploded1.customer_id") === col("exploded2.customer_id")),\n        "full_outer"\n      )\n      .select(\n        coalesce(col("exploded1.column_name"), col("exploded2.column_name"))\n          .as("column_name"),\n        coalesce(col("exploded1.customer_id"), col("exploded2.customer_id"))\n          .as("customer_id"),\n        col("exploded1.##value##").as("##left_value##"),\n        col("exploded2.##value##").as("##right_value##")\n      )\n      .withColumn(\n        "match_count",\n        when(\n          coalesce(col("##left_value##") === col("##right_value##"),\n                   col("##left_value##").isNull && col("##right_value##").isNull\n          ),\n          lit(1)\n        ).otherwise(lit(0))\n      )\n      .withColumn(\n        "mismatch_count",\n        when(coalesce(\n               col("##left_value##") =!= col("##right_value##"),\n               !(col("##left_value##").isNull && col("##right_value##").isNull)\n             ),\n             lit(1)\n        ).otherwise(lit(0))\n      )\n    joined\n      .groupBy("column_name")\n      .agg(\n        sum("match_count").as("match_count"),\n        sum("mismatch_count").as("mismatch_count"),\n        first(col("mismatch_example_left"), ignoreNulls = true)\n          .as("mismatch_example_left"),\n        first(col("mismatch_example_right"), ignoreNulls = true)\n          .as("mismatch_example_right"),\n        first(when(coalesce(col("mismatch_example_left"),\n                            col("mismatch_example_right")\n                   ).isNotNull,\n                   col("customer_id")\n              ).otherwise(lit(null)),\n              ignoreNulls = true\n        ).as("mismatch_example_customer_id")\n      )\n      .orderBy(col("mismatch_count").desc, col("column_name"))\n   }\n}\n'})})})]}),"\n",(0,l.jsx)(t.p,{children:"Below are the steps that are performed to compare two DataFrames in compare column gem:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Pivot the DataFrame to get the key column's, compare column name and value"}),"\n",(0,l.jsx)(t.li,{children:"Join the pivoted DataFrames and compare the column value using key column's"}),"\n",(0,l.jsx)(t.li,{children:"Calculate the match and mismatch record counts"}),"\n"]}),"\n",(0,l.jsx)(t.admonition,{type:"note",children:(0,l.jsx)(t.p,{children:"Repartition the DataFrames as they will be exploded and joined with each other"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}}}]);