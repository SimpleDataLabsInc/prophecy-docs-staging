"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[33852],{10246:(e,a,r)=>{r.d(a,{A:()=>n});const n=r.p+"assets/images/agg_eg_1-40497a04aacf57cef089dc04e8968b62.png"},13473:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"Spark/gems/transform/aggregate","title":"Aggregate","description":"Group data and apply aggregation methods or pivot operations","source":"@site/docs/Spark/gems/transform/aggregate.md","sourceDirName":"Spark/gems/transform","slug":"/engineers/aggregate","permalink":"/prophecy-docs-staging/preview/pr-599/engineers/aggregate","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-599/tags/gems"},{"inline":true,"label":"aggregate","permalink":"/prophecy-docs-staging/preview/pr-599/tags/aggregate"},{"inline":true,"label":"group by","permalink":"/prophecy-docs-staging/preview/pr-599/tags/group-by"},{"inline":true,"label":"sum","permalink":"/prophecy-docs-staging/preview/pr-599/tags/sum"},{"inline":true,"label":"count","permalink":"/prophecy-docs-staging/preview/pr-599/tags/count"}],"version":"current","frontMatter":{"title":"Aggregate","id":"aggregate","slug":"/engineers/aggregate","description":"Group data and apply aggregation methods or pivot operations","tags":["gems","aggregate","group by","sum","count"]},"sidebar":"mySidebar","previous":{"title":"Transform","permalink":"/prophecy-docs-staging/preview/pr-599/engineers/transform"},"next":{"title":"BulkColumnExpressions","permalink":"/prophecy-docs-staging/preview/pr-599/engineers/bulk-column-expressions"}}');var s=r(74848),t=r(28453),i=r(49235),l=r(65537),o=r(79329);const c={title:"Aggregate",id:"aggregate",slug:"/engineers/aggregate",description:"Group data and apply aggregation methods or pivot operations",tags:["gems","aggregate","group by","sum","count"]},d=void 0,u={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Aggregation without Grouping",id:"aggregation-without-grouping",level:3},{value:"Aggregation with Grouping",id:"aggregation-with-grouping",level:3},{value:"Pivot Columns",id:"pivot-columns",level:3},{value:"Propagate all input Columns",id:"propagate-all-input-columns",level:3}];function g(e){const a={admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.0.1+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"3.0.1+"}),"\n",(0,s.jsx)(a.p,{children:"Allows you to group the data and apply aggregation methods and pivot operation."}),"\n",(0,s.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Parameter"}),(0,s.jsx)(a.th,{children:"Description"}),(0,s.jsx)(a.th,{children:"Required"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"DataFrame"}),(0,s.jsx)(a.td,{children:"Input DataFrame"}),(0,s.jsx)(a.td,{children:"True"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Target column (Aggregate Tab)"}),(0,s.jsx)(a.td,{children:"Output column name of aggregated column"}),(0,s.jsx)(a.td,{children:"True"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Expression (Aggregate Tab)"}),(0,s.jsxs)(a.td,{children:["Aggregate function expression",(0,s.jsx)("br",{})," Eg: ",(0,s.jsx)(a.code,{children:'sum("amount")'}),", ",(0,s.jsx)(a.code,{children:"count(*)"}),", ",(0,s.jsx)(a.code,{children:'avg("amount")'})]}),(0,s.jsx)(a.td,{children:"True"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Target column (Group By Tab)"}),(0,s.jsx)(a.td,{children:"Output column name of grouped column"}),(0,s.jsxs)(a.td,{children:["Required if ",(0,s.jsx)(a.code,{children:"Pivot Column"})," is present"]})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Expression (Group By Tab)"}),(0,s.jsxs)(a.td,{children:["Column expression to group on ",(0,s.jsx)("br",{})," Eg: ",(0,s.jsx)(a.code,{children:'col("id")'}),", ",(0,s.jsx)(a.code,{children:'month(col("order_date"))'})]}),(0,s.jsxs)(a.td,{children:["Required if a ",(0,s.jsx)(a.code,{children:"Target Column"}),"(Group By) is present"]})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Pivot column"}),(0,s.jsx)(a.td,{children:"Column name to pivot"}),(0,s.jsx)(a.td,{children:"False"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Unique values"}),(0,s.jsxs)(a.td,{children:["List of values in ",(0,s.jsx)(a.code,{children:"Pivot Column"})," that will be translated to columns in the output DataFrame"]}),(0,s.jsx)(a.td,{children:"False"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Propagate All Input Columns"}),(0,s.jsxs)(a.td,{children:["If ",(0,s.jsx)(a.code,{children:"true"}),", all columns from the DataFrame would be propagated to output DataFrame. By default all columns apart from ones specified in ",(0,s.jsx)(a.code,{children:"group by"}),", ",(0,s.jsx)(a.code,{children:"pivot"}),", ",(0,s.jsx)(a.code,{children:"aggregate"})," expressions are propagated as ",(0,s.jsx)(a.code,{children:"first(col_name)"})," in the output DataFrame"]}),(0,s.jsx)(a.td,{children:"False"})]})]})]}),"\n",(0,s.jsx)(a.admonition,{type:"info",children:(0,s.jsxs)(a.p,{children:["Providing ",(0,s.jsx)(a.code,{children:"Unique values"})," while performing pivot operation improves the performance of the operation since Spark does not have to first compute the list of distinct values of ",(0,s.jsx)(a.code,{children:"Pivot Column"})," internally."]})}),"\n",(0,s.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(a.h3,{id:"aggregation-without-grouping",children:"Aggregation without Grouping"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Example usage of Aggregate - Aggregation without Grouping",src:r(10246).A+"",width:"1691",height:"629"})}),"\n","\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(o.A,{value:"py",label:"Python",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-py",children:'def total_orders(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    return in0.agg(count(lit(1)).alias("number_of_orders"))\n'})})}),(0,s.jsx)(o.A,{value:"scala",label:"Scala",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-scala",children:'object total_orders {\n  def apply(spark: SparkSession, in: DataFrame): DataFrame =\n    in.agg(count(lit(1)).as("number_of_orders"))\n}\n'})})})]}),"\n",(0,s.jsx)(a.h3,{id:"aggregation-with-grouping",children:"Aggregation with Grouping"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Example usage of Aggregate - Aggregation with Grouping",src:r(91453).A+"",width:"1851",height:"796"})}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(o.A,{value:"py",label:"Python",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-py",children:'def orders_by_date(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    df1 = in0.groupBy(concat(month(col("order_date")), lit("/"), year(col("order_date")))\n                      .alias("order_month(MM/YYYY)"))\n    return df1.agg(count(lit(1)).alias("number_of_orders"))\n'})})}),(0,s.jsx)(o.A,{value:"scala",label:"Scala",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-scala",children:'object orders_by_date {\n  def apply(spark: SparkSession, in: DataFrame): DataFrame =\n    in.groupBy(\n        concat(month(col("order_date")), lit("/"), year(col("order_date")))\n          .as("order_month(MM/YYYY)")\n      )\n      .agg(count(lit(1)).as("number_of_orders"))\n}\n'})})})]}),"\n",(0,s.jsx)(a.h3,{id:"pivot-columns",children:"Pivot Columns"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Example usage of Aggregate - Pivoting",src:r(70324).A+"",width:"1920",height:"1080"})}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(o.A,{value:"py",label:"Python",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-py",children:'def orders_by_date_N_status(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    df1 = in0.groupBy(concat(month(col("order_date")), lit("/"), year(col("order_date"))).alias("order_month(MM/YYYY)"))\n    df2 = df1.pivot("order_status", ["Approved", "Finished", "Pending", "Started"])\n    return df2.agg(count(lit(1)).alias("number_of_orders"))\n'})})}),(0,s.jsx)(o.A,{value:"scala",label:"Scala",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-scala",children:'object orders_by_date_N_status {\n  def apply(spark: SparkSession, in: DataFrame): DataFrame =\n    in.groupBy(\n        concat(month(col("order_date")), lit("/"), year(col("order_date")))\n          .as("order_month(MM/YYYY)")\n      )\n      .pivot(col("order_status"),\n             List("Approved", "Finished", "Pending", "Started")\n      )\n      .agg(count(lit(1)).as("number_of_orders"))\n}\n'})})})]}),"\n",(0,s.jsx)(a.h3,{id:"propagate-all-input-columns",children:"Propagate all input Columns"}),"\n",(0,s.jsxs)(a.p,{children:["This option in used to propagate all columns from input DataFrame to output DataFrame.\nBy default ",(0,s.jsx)(a.code,{children:"first(col_name)"})," is used as aggregate function for columns not specified in ",(0,s.jsx)(a.code,{children:"group by"}),", ",(0,s.jsx)(a.code,{children:"pivot"}),", ",(0,s.jsx)(a.code,{children:"aggregate"})," expressions."]}),"\n",(0,s.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,s.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,s.jsx)("iframe",{src:"https://user-images.githubusercontent.com/103921419/185245719-2be22f30-c84f-4b85-8712-be626c77e4e4.mp4",title:"Aggregate Propagate columns",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(o.A,{value:"py",label:"Python",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-py",children:'def Aggregate_1(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    df1 = in0.groupBy(col("customer_id"))\n\n    return df1.agg(\n        *[first(col("order_date")).alias("order_date")],\n        *[\n          first(col(x)).alias(x)\n          for x in in0.columns\n          if x not in ["order_date", "customer_id"]\n        ]\n    )\n'})})}),(0,s.jsx)(o.A,{value:"scala",label:"Scala",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-scala",children:'object Aggregate {\n\n  def apply(spark: SparkSession, in: DataFrame): DataFrame =\n    in.agg(first(col("order_date")).as("order_date"),\n           List() ++ in.columns.toList\n             .diff(List("order_date", "customer_id"))\n             .map(x => first(col(x)).as(x)): _*\n    )\n\n}\n'})})})]})]})}function h(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},28453:(e,a,r)=>{r.d(a,{R:()=>i,x:()=>l});var n=r(96540);const s={},t=n.createContext(s);function i(e){const a=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(t.Provider,{value:a},e.children)}},49235:(e,a,r)=>{r.d(a,{A:()=>s});r(96540);var n=r(74848);function s(e){return(0,n.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,n.jsxs)("span",{className:"badge-dependency",children:[(0,n.jsx)("span",{className:"left",children:e.python_package_name}),(0,n.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,n.jsxs)("span",{className:"badge-dependency",children:[(0,n.jsx)("span",{className:"left",children:e.scala_package_name}),(0,n.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,n.jsxs)("span",{className:"badge-dependency",children:[(0,n.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,n.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,n.jsxs)("span",{className:"badge-dependency",children:[(0,n.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,n.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,n.jsxs)("span",{className:"badge-spark",children:[(0,n.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,n.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,n.jsxs)("span",{className:"badge-spark",children:[(0,n.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,n.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,n.jsxs)("span",{className:"badge-spark",children:[(0,n.jsx)("span",{className:"left",children:"Livy"}),(0,n.jsx)("span",{className:"right",children:e.livy})]})}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]})}},65537:(e,a,r)=>{r.d(a,{A:()=>_});var n=r(96540),s=r(18215),t=r(65627),i=r(56347),l=r(50372),o=r(30604),c=r(11861),d=r(78749);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:r}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return u(e).map((e=>{let{props:{value:a,label:r,attributes:n,default:s}}=e;return{value:a,label:r,attributes:n,default:s}}))}(r);return function(e){const a=(0,c.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,r])}function g(e){let{value:a,tabValues:r}=e;return r.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:r}=e;const s=(0,i.W6)(),t=function(e){let{queryString:a=!1,groupId:r}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:a,groupId:r});return[(0,o.aZ)(t),(0,n.useCallback)((e=>{if(!t)return;const a=new URLSearchParams(s.location.search);a.set(t,e),s.replace({...s.location,search:a.toString()})}),[t,s])]}function m(e){const{defaultValue:a,queryString:r=!1,groupId:s}=e,t=p(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!g({value:a,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:t}))),[c,u]=h({queryString:r,groupId:s}),[m,x]=function(e){let{groupId:a}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(a),[s,t]=(0,d.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:s}),f=(()=>{const e=c??m;return g({value:e,tabValues:t})?e:null})();(0,l.A)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!g({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,t]),tabValues:t}}var x=r(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function j(e){let{className:a,block:r,selectedValue:n,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.a_)(),d=e=>{const a=e.currentTarget,r=o.indexOf(a),s=l[r].value;s!==n&&(c(a),i(s))},u=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;a=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;a=o[r]??o[o.length-1];break}}a?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},a),children:l.map((e=>{let{value:a,label:r,attributes:t}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>{o.push(e)},onKeyDown:u,onClick:d,...t,className:(0,s.A)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":n===a}),children:r??a},a)}))})}function v(e){let{lazy:a,children:r,selectedValue:t}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(a){const e=i.find((e=>e.props.value===t));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==t})))})}function y(e){const a=m(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,b.jsx)(j,{...a,...e}),(0,b.jsx)(v,{...a,...e})]})}function _(e){const a=(0,x.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(a))}},70324:(e,a,r)=>{r.d(a,{A:()=>n});const n=r.p+"assets/images/agg_eg_3-60109ae121ceafd6b5b2dbf9cdb855d7.png"},79329:(e,a,r)=>{r.d(a,{A:()=>i});r(96540);var n=r(18215);const s={tabItem:"tabItem_Ymn6"};var t=r(74848);function i(e){let{children:a,hidden:r,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:r,children:a})}},91453:(e,a,r)=>{r.d(a,{A:()=>n});const n=r.p+"assets/images/agg_eg_2-8f09b2a49e553ed7489fa41295f6f74e.png"}}]);