"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[18755],{23340:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"Spark/gems/transform/bulk-column-expressions","title":"BulkColumnExpressions","description":"Change the data type of multiple columns at once","source":"@site/docs/Spark/gems/transform/bulk-column-expressions.md","sourceDirName":"Spark/gems/transform","slug":"/engineers/bulk-column-expressions","permalink":"/prophecy-docs-staging/preview/pr-607/engineers/bulk-column-expressions","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-607/tags/gems"},{"inline":true,"label":"type","permalink":"/prophecy-docs-staging/preview/pr-607/tags/type"},{"inline":true,"label":"columns","permalink":"/prophecy-docs-staging/preview/pr-607/tags/columns"}],"version":"current","frontMatter":{"title":"BulkColumnExpressions","id":"bulk-column-expressions","slug":"/engineers/bulk-column-expressions","description":"Change the data type of multiple columns at once","tags":["gems","type","columns"]},"sidebar":"mySidebar","previous":{"title":"Aggregate","permalink":"/prophecy-docs-staging/preview/pr-607/engineers/aggregate"},"next":{"title":"BulkColumnRename","permalink":"/prophecy-docs-staging/preview/pr-607/engineers/bulk-column-rename"}}');var t=s(74848),r=s(28453),l=s(49235),i=s(65537),c=s(79329);const o={title:"BulkColumnExpressions",id:"bulk-column-expressions",slug:"/engineers/bulk-column-expressions",description:"Change the data type of multiple columns at once",tags:["gems","type","columns"]},u=void 0,d={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Example code",id:"example-code",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.A,{python_package_name:"",python_package_version:"",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.1.9+",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"3.0.1+"}),"\n",(0,t.jsx)(n.p,{children:"The BulkColumnExpressions gem primarily lets you cast or change the data type of multiple columns at once. It provides additional functionality, including:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Adding a prefix or suffix to selected columns."}),"\n",(0,t.jsx)(n.li,{children:"Applying a custom expression to selected columns."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Data Type of the columns to do operations on"}),(0,t.jsx)(n.td,{children:"The data type of columns to select."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Selected Columns"}),(0,t.jsx)(n.td,{children:"The columns on which to apply transformations."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Change output column name"}),(0,t.jsx)(n.td,{children:"An option to add a prefix or suffix to the selected column names."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Change output column type"}),(0,t.jsx)(n.td,{children:"The data type that the columns will be transformed into."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Output Expression"}),(0,t.jsxs)(n.td,{children:["A Spark SQL expression that can be applied to the selected columns. This field is required. If you only want to select the column, use ",(0,t.jsx)(n.code,{children:"column_value"})," as the expression."]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Assume you have some columns in a table that represent zero-based indices and are stored as long data types. You want them to represent one-based indices and be stored as integers to optimize memory use."}),"\n",(0,t.jsx)(n.p,{children:"Using the BulkColumnExpressions gem, you can:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Filter your columns by long data types."}),"\n",(0,t.jsx)(n.li,{children:"Select the columns you wish to transform."}),"\n",(0,t.jsx)(n.li,{children:"Cast the output column(s) to be integers."}),"\n",(0,t.jsxs)(n.li,{children:["Include ",(0,t.jsx)(n.code,{children:"column_value + 1"})," in the expression field to shift the indices."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example-code",children:"Example code"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["To see the compiled code of your project, ",(0,t.jsx)(n.a,{href:"/engineers/pipelines#project-editor",children:"switch to the Code view"})," in the project header."]})}),"\n","\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(c.A,{value:"py",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'def bulk_column_casting(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    return in0.select(\n        *(\n          [expr("`customer_id`").alias("str_customer_id").cast(StringType())]\n          + [col("`" + colName + "`") for colName in sorted(set(in0.columns) - {"customer_id"})]\n          + []\n        )\n    )\n'})})}),(0,t.jsx)(c.A,{value:"scala",label:"Scala",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:'object bulk_column_expressions {\n  def apply(context: Context, in: DataFrame): DataFrame = {\n    var allExpressions = List(\n      expr(\n        "column_value"\n          .replace("column_value", "`status`")\n          .replace("column_name",  "\'status\'")\n      ).as("status").cast(StringType)\n    ) ++ (in.columns.toSet -- List("status").toSet).map(columnName =>\n      col("`" + columnName + "`")\n    )\n    in.select(allExpressions: _*)\n  }\n}\n'})})})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var a=s(96540);const t={},r=a.createContext(t);function l(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(r.Provider,{value:n},e.children)}},49235:(e,n,s)=>{s.d(n,{A:()=>t});s(96540);var a=s(74848);function t(e){return(0,a.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:e.python_package_name}),(0,a.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:e.scala_package_name}),(0,a.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,a.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,a.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,a.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,a.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Livy"}),(0,a.jsx)("span",{className:"right",children:e.livy})]})}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]})}},65537:(e,n,s)=>{s.d(n,{A:()=>k});var a=s(96540),t=s(18215),r=s(65627),l=s(56347),i=s(50372),c=s(30604),o=s(11861),u=s(78749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:s}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:a,default:t}}=e;return{value:n,label:s,attributes:a,default:t}}))}(s);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function h(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const t=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,r=p(e),[l,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[o,d]=m({queryString:s,groupId:t}),[x,b]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,r]=(0,u.Dv)(s);return[t,(0,a.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:t}),g=(()=>{const e=o??x;return h({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{g&&c(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=s(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(74848);function y(e){let{className:n,block:s,selectedValue:a,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.a_)(),u=e=>{const n=e.currentTarget,s=c.indexOf(n),t=i[s].value;t!==a&&(o(n),l(t))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:i.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{c.push(e)},onKeyDown:d,onClick:u,...r,className:(0,t.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":a===n}),children:s??n},n)}))})}function j(e){let{lazy:n,children:s,selectedValue:r}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,t.A)("tabs-container",g.tabList),children:[(0,f.jsx)(y,{...n,...e}),(0,f.jsx)(j,{...n,...e})]})}function k(e){const n=(0,b.A)();return(0,f.jsx)(v,{...e,children:d(e.children)},String(n))}},79329:(e,n,s)=>{s.d(n,{A:()=>l});s(96540);var a=s(18215);const t={tabItem:"tabItem_Ymn6"};var r=s(74848);function l(e){let{children:n,hidden:s,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,l),hidden:s,children:n})}}}]);