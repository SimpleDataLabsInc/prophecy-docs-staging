"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[62745],{28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>o});var a=r(96540);const s={},i=a.createContext(s);function t(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(i.Provider,{value:n},e.children)}},37826:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"Spark/gems/transform/window-function","title":"WindowFunction","description":"Aggregate and transform Windowed data","source":"@site/docs/Spark/gems/transform/window-function.md","sourceDirName":"Spark/gems/transform","slug":"/engineers/window-function","permalink":"/prophecy-docs-staging/preview/pr-601/engineers/window-function","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-601/tags/gems"},{"inline":true,"label":"window","permalink":"/prophecy-docs-staging/preview/pr-601/tags/window"},{"inline":true,"label":"aggregate","permalink":"/prophecy-docs-staging/preview/pr-601/tags/aggregate"}],"version":"current","frontMatter":{"title":"WindowFunction","id":"window-function","slug":"/engineers/window-function","description":"Aggregate and transform Windowed data","tags":["gems","window","aggregate"]},"sidebar":"mySidebar","previous":{"title":"Unpivot","permalink":"/prophecy-docs-staging/preview/pr-601/engineers/unpivot"},"next":{"title":"Join & Split","permalink":"/prophecy-docs-staging/preview/pr-601/engineers/join-split"}}');var s=r(74848),i=r(28453),t=r(49235),o=r(65537),c=r(79329);const l={title:"WindowFunction",id:"window-function",slug:"/engineers/window-function",description:"Aggregate and transform Windowed data",tags:["gems","window","aggregate"]},d=void 0,u={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Ranking Functions with Window",id:"ranking-functions-with-window",level:3},{value:"Analytical Functions with Window",id:"analytical-functions-with-window",level:3},{value:"Aggregate Functions with Window",id:"aggregate-functions-with-window",level:3}];function p(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.0.1+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"3.0.1+"}),"\n",(0,s.jsxs)(n.p,{children:["The WindowFunction lets you define a ",(0,s.jsx)(n.strong,{children:"WindowSpec"})," and apply window functions on a DataFrame."]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Required"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DataFrame"}),(0,s.jsx)(n.td,{children:"Input DataFrame"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Target column"}),(0,s.jsx)(n.td,{children:"Output Column name"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Source expression"}),(0,s.jsx)(n.td,{children:"Window function expression to perform over the created Window"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Order columns"}),(0,s.jsxs)(n.td,{children:["Columns to order by in Window. Must be a numeric type column if a ",(0,s.jsx)(n.code,{children:"Range Frame"})," is selected"]}),(0,s.jsxs)(n.td,{children:["Required when ",(0,s.jsx)(n.code,{children:"Source expression"})," has a Ranking/Analytical function ",(0,s.jsx)(n.strong,{children:"OR"})," when ",(0,s.jsx)(n.code,{children:"Range Frame"})," is selected"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Partition column"}),(0,s.jsx)(n.td,{children:"Column to partition by in Window"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Row frame"}),(0,s.jsx)(n.td,{children:"Row based frame boundary to apply on Window"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Range frame"}),(0,s.jsx)(n.td,{children:"Range based frame boundary to apply on Window"}),(0,s.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.strong,{children:"Order Columns"})," are not defined, an unbound window frame ",(0,s.jsx)(n.code,{children:"(rowFrame, unboundedPreceding, unboundedFollowing)"})," is used by default.\nWhen ",(0,s.jsx)(n.strong,{children:"Order Columns"})," are defined, a growing window frame ",(0,s.jsx)(n.code,{children:"(rangeFrame, unboundedPreceding, currentRow)"})," is used by default."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.h3,{id:"ranking-functions-with-window",children:"Ranking Functions with Window"}),"\n",(0,s.jsxs)(n.p,{children:["Examples of ranking functions are: ",(0,s.jsx)(n.code,{children:"row_number()"}),", ",(0,s.jsx)(n.code,{children:"rank()"}),", ",(0,s.jsx)(n.code,{children:"dense_rank()"})," and ",(0,s.jsx)(n.code,{children:"ntile()"})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Only the default window frame ",(0,s.jsx)(n.code,{children:"(rowFrame, unboundedPreceding, currentRow)"})," can be used with Ranking functions"]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Example usage of Window - Ranking",src:r(39810).A+"",width:"1920",height:"1080"})}),"\n","\n",(0,s.jsxs)(o.A,{children:[(0,s.jsx)(c.A,{value:"py",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'def rank_cust_orders(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    return in0\\\n        .withColumn(\n            "order_number",\n            row_number().over(\n                Window.partitionBy(col("customer_id")).orderBy(col("order_date").asc())\n            )\n        )\\\n        .withColumn(\n            "order_recency",\n             ntile(2).over(\n                 Window.partitionBy(col("customer_id")).orderBy(col("order_date").asc())\n             )\n         )\n'})})}),(0,s.jsx)(c.A,{value:"scala",label:"Scala",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-scala",children:'object rank_cust_orders {\n\n  def apply(spark: SparkSession, in1: DataFrame): DataFrame = {\n    import org.apache.spark.sql.expressions.{Window, WindowSpec}\n    in1\n      .withColumn(\n        "order_number",\n        row_number().over(\n          Window.partitionBy(col("customer_id")).orderBy(col("order_date").asc)\n        )\n      )\n      .withColumn(\n        "order_recency",\n        ntile(2).over(\n          Window.partitionBy(col("customer_id")).orderBy(col("order_date").asc)\n        )\n      )\n  }\n}\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"analytical-functions-with-window",children:"Analytical Functions with Window"}),"\n",(0,s.jsxs)(n.p,{children:["Examples of analytical functions are: ",(0,s.jsx)(n.code,{children:"lead()"}),", ",(0,s.jsx)(n.code,{children:"lag()"}),", ",(0,s.jsx)(n.code,{children:"cume_dist()"}),", etc."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Window frame for ",(0,s.jsx)(n.code,{children:"lead()"})," and ",(0,s.jsx)(n.code,{children:"lag()"})," can not be specified."]}),"\n",(0,s.jsxs)(n.li,{children:["Only the default window frame ",(0,s.jsx)(n.code,{children:"(rangeFrame, unboundedPreceding, currentRow)"})," can be used with ",(0,s.jsx)(n.code,{children:"cume_dist()"})]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Example usage of Window - Analytical",src:r(80232).A+"",width:"1920",height:"1080"})}),"\n",(0,s.jsxs)(o.A,{children:[(0,s.jsx)(c.A,{value:"py",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'def analyse_orders(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    return in0\\\n        .withColumn(\n          "previous_order_date",\n          lag(col("order_date")).over(\n            Window.partitionBy(col("customer_id")).orderBy(col("order_id").asc())\n          )\n        )\\\n        .withColumn(\n            "next_order_date",\n            lead(col("order_date")).over(\n                Window.partitionBy(col("customer_id")).orderBy(col("order_id").asc())\n            )\n        )\n'})})}),(0,s.jsx)(c.A,{value:"scala",label:"Scala",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-scala",children:'object analyse_orders {\n  def apply(spark: SparkSession, in1: DataFrame): DataFrame = {\n    import org.apache.spark.sql.expressions.{Window, WindowSpec}\n    in1\n      .withColumn(\n        "previous_order_date",\n        lag(col("order_date")).over(\n          Window.partitionBy(col("customer_id")).orderBy(col("order_date").asc)\n        )\n      )\n      .withColumn(\n        "next_order_date",\n        lead(col("order_date")).over(\n          Window.partitionBy(col("customer_id")).orderBy(col("order_date").asc)\n        )\n      )\n  }\n}\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"aggregate-functions-with-window",children:"Aggregate Functions with Window"}),"\n",(0,s.jsxs)(n.p,{children:["Examples of aggregate functions are: ",(0,s.jsx)(n.code,{children:"min()"}),", ",(0,s.jsx)(n.code,{children:"max()"}),", ",(0,s.jsx)(n.code,{children:"avg()"}),", etc."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Example usage of Window - Aggregate",src:r(45843).A+"",width:"1847",height:"1016"})}),"\n",(0,s.jsxs)(o.A,{children:[(0,s.jsx)(c.A,{value:"py",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'def agg_orders(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    return in0\\\n        .withColumn(\n          "running_avg_spend",\n          avg(col("amount"))\\\n            .over(Window.partitionBy(col("customer_id"))\\\n                    .rowsBetween(Window.unboundedPreceding, Window.currentRow))\n        )\\\n        .withColumn("running_max_spend", max(col("amount"))\\\n        .over(Window.partitionBy(col("customer_id"))\\\n                .rowsBetween(Window.unboundedPreceding, Window.currentRow)))\n'})})}),(0,s.jsx)(c.A,{value:"scala",label:"Scala",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-scala",children:'object agg_orders {\n  def apply(spark: SparkSession, in1: DataFrame): DataFrame = {\n    import org.apache.spark.sql.expressions.{Window, WindowSpec}\n    in1\n      .withColumn("running_avg_spend",\n                  avg(col("amount")).over(\n                    Window\n                      .partitionBy(col("customer_id"))\n                      .rowsBetween(Window.unboundedPreceding, Window.currentRow)\n                  )\n      )\n      .withColumn("running_max_spend",\n                  max(col("amount")).over(\n                    Window\n                      .partitionBy(col("customer_id"))\n                      .rowsBetween(Window.unboundedPreceding, Window.currentRow)\n                  )\n      )\n  }\n}\n'})})})]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},39810:(e,n,r)=>{r.d(n,{A:()=>a});const a=r.p+"assets/images/window_eg_ranking-50daead83be3eaf26cb68c15845a722b.png"},45843:(e,n,r)=>{r.d(n,{A:()=>a});const a=r.p+"assets/images/window_eg_agg-8a34b6829ab9ac882ccba44db524a903.png"},49235:(e,n,r)=>{r.d(n,{A:()=>s});r(96540);var a=r(74848);function s(e){return(0,a.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:e.python_package_name}),(0,a.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:e.scala_package_name}),(0,a.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,a.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,a.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,a.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,a.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Livy"}),(0,a.jsx)("span",{className:"right",children:e.livy})]})}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]})}},65537:(e,n,r)=>{r.d(n,{A:()=>_});var a=r(96540),s=r(18215),i=r(65627),t=r(56347),o=r(50372),c=r(30604),l=r(11861),d=r(78749);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:s}}=e;return{value:n,label:r,attributes:a,default:s}}))}(r);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const s=(0,t.W6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function g(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,i=h(e),[t,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[l,u]=m({queryString:r,groupId:s}),[g,w]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Dv)(r);return[s,(0,a.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),x=(()=>{const e=l??g;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{x&&c(x)}),[x]);return{selectedValue:t,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),w(e)}),[u,w,i]),tabValues:i}}var w=r(9136);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function j(e){let{className:n,block:r,selectedValue:a,selectValue:t,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),d=e=>{const n=e.currentTarget,r=c.indexOf(n),s=o[r].value;s!==a&&(l(n),t(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{c.push(e)},onKeyDown:u,onClick:d,...i,className:(0,s.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:i}=e;const t=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=g(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,f.jsx)(j,{...n,...e}),(0,f.jsx)(b,{...n,...e})]})}function _(e){const n=(0,w.A)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(n))}},79329:(e,n,r)=>{r.d(n,{A:()=>t});r(96540);var a=r(18215);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function t(e){let{children:n,hidden:r,className:t}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,t),hidden:r,children:n})}},80232:(e,n,r)=>{r.d(n,{A:()=>a});const a=r.p+"assets/images/window_eg_analytical-f61582f4e18249a8c33cf5a3210326e4.png"}}]);