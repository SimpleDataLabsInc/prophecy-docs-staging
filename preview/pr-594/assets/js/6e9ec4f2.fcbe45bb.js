"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[29468],{28453:(e,a,n)=>{n.d(a,{R:()=>l,x:()=>c});var s=n(96540);const r={},t=s.createContext(r);function l(e){const a=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:a},e.children)}},28737:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/bulk-add-prefix-04cac34e9823bce1bf40be9486f03131.png"},49235:(e,a,n)=>{n.d(a,{A:()=>r});n(96540);var s=n(74848);function r(e){return(0,s.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/package-hub/",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:e.python_package_name}),(0,s.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/package-hub/",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:e.scala_package_name}),(0,s.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,s.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,s.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,s.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,s.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Livy"}),(0,s.jsx)("span",{className:"right",children:e.livy})]})}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]})}},53987:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"Spark/gems/transform/bulk-column-rename","title":"BulkColumnRename","description":"Rename multiple columns in your dataset in a systematic way","source":"@site/docs/Spark/gems/transform/bulk-column-rename.md","sourceDirName":"Spark/gems/transform","slug":"/Spark/gems/transform/bulk-column-rename","permalink":"/prophecy-docs-staging/preview/pr-594/Spark/gems/transform/bulk-column-rename","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-594/tags/gems"},{"inline":true,"label":"rename","permalink":"/prophecy-docs-staging/preview/pr-594/tags/rename"},{"inline":true,"label":"columns","permalink":"/prophecy-docs-staging/preview/pr-594/tags/columns"}],"version":"current","frontMatter":{"title":"BulkColumnRename","id":"bulk-column-rename","description":"Rename multiple columns in your dataset in a systematic way","tags":["gems","rename","columns"]},"sidebar":"mySidebar","previous":{"title":"BulkColumnExpressions","permalink":"/prophecy-docs-staging/preview/pr-594/Spark/gems/transform/bulk-column-expressions"},"next":{"title":"ColumnParser","permalink":"/prophecy-docs-staging/preview/pr-594/Spark/gems/transform/column-parser"}}');var r=n(74848),t=n(28453),l=n(49235),c=n(65537),i=n(79329);const o={title:"BulkColumnRename",id:"bulk-column-rename",description:"Rename multiple columns in your dataset in a systematic way",tags:["gems","rename","columns"]},u=void 0,d={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Add a prefix",id:"add-a-prefix",level:3},{value:"Use a custom expression",id:"use-a-custom-expression",level:3},{value:"Example code",id:"example-code",level:2}];function m(e){const a={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.2.11+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.1.9+",scala_lib:"7.1.97",python_lib:"1.8.19",uc_single:"14.3+",uc_shared:"Not Supported",livy:"3.0.1+"}),"\n",(0,r.jsx)(a.p,{children:"Use the BulkColumnRename gem to rename multiple columns in your dataset in a systematic way."}),"\n",(0,r.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Parameter"}),(0,r.jsx)(a.th,{children:"Description"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Columns to rename"}),(0,r.jsx)(a.td,{children:"Select one or more columns to rename from the dropdown."})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Method"}),(0,r.jsx)(a.td,{children:"Choose to add a prefix, add a suffix, or use a custom expression to change column names."})]})]})]}),"\n",(0,r.jsx)(a.p,{children:"Based on the method you select, you will see an option to enter the prefix, suffix, or expression of your choice."}),"\n",(0,r.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(a.h3,{id:"add-a-prefix",children:"Add a prefix"}),"\n",(0,r.jsxs)(a.p,{children:["One example is to add the prefix ",(0,r.jsx)(a.code,{children:"meta_"})," to tag columns that contain metadata."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Add prefix to multiple columns",src:n(28737).A+"",width:"2620",height:"1508"})}),"\n",(0,r.jsx)(a.h3,{id:"use-a-custom-expression",children:"Use a custom expression"}),"\n",(0,r.jsxs)(a.p,{children:["You can accomplish the same or more complex changes using a custom expression like ",(0,r.jsx)(a.code,{children:"concat('meta_', column_name)"}),"."]}),"\n",(0,r.jsx)(a.h2,{id:"example-code",children:"Example code"}),"\n","\n",(0,r.jsxs)(c.A,{children:[(0,r.jsx)(i.A,{value:"py",label:"Python",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-py",children:'def bulk_rename_customer_id(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    from prophecy.utils.transpiler.dataframe_fcns import evaluate_expression\n\n    return evaluate_expression(\n        in0,\n        userExpression = "concat(\'int_\', column_name)",\n        selectedColumnNames = ["customer_id"],\n        sparkSession = spark\n    )\n'})})}),(0,r.jsx)(i.A,{value:"scala",label:"Scala",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-scala",children:'object bulk_column_rename {\n  def apply(context: Context, in: DataFrame): DataFrame = {\n    import org.apache.spark.sql.ProphecyDataFrame\n    ProphecyDataFrame\n      .extendedDataFrame(in)\n      .evaluate_expression("concat(\'c_\',column_name)",\n                           List(" code"),\n                           context.spark\n      )\n  }\n}\n'})})})]})]})}function h(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},65537:(e,a,n)=>{n.d(a,{A:()=>k});var s=n(96540),r=n(18215),t=n(65627),l=n(56347),c=n(50372),i=n(30604),o=n(11861),u=n(78749);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:n}=e;return(0,s.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:n,attributes:s,default:r}}=e;return{value:a,label:n,attributes:s,default:r}}))}(n);return function(e){const a=(0,o.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function m(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:n}=e;const r=(0,l.W6)(),t=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,i.aZ)(t),(0,s.useCallback)((e=>{if(!t)return;const a=new URLSearchParams(r.location.search);a.set(t,e),r.replace({...r.location,search:a.toString()})}),[t,r])]}function x(e){const{defaultValue:a,queryString:n=!1,groupId:r}=e,t=p(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:a,tabValues:t}))),[o,d]=h({queryString:n,groupId:r}),[x,b]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,t]=(0,u.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:r}),f=(()=>{const e=o??x;return m({value:e,tabValues:t})?e:null})();(0,c.A)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,t]),tabValues:t}}var b=n(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function y(e){let{className:a,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.a_)(),u=e=>{const a=e.currentTarget,n=i.indexOf(a),r=c[n].value;r!==s&&(o(a),l(r))},d=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;a=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;a=i[n]??i[i.length-1];break}}a?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},a),children:c.map((e=>{let{value:a,label:n,attributes:t}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,ref:e=>{i.push(e)},onKeyDown:d,onClick:u,...t,className:(0,r.A)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":s===a}),children:n??a},a)}))})}function v(e){let{lazy:a,children:n,selectedValue:t}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==t})))})}function j(e){const a=x(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,g.jsx)(y,{...a,...e}),(0,g.jsx)(v,{...a,...e})]})}function k(e){const a=(0,b.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(a))}},79329:(e,a,n)=>{n.d(a,{A:()=>l});n(96540);var s=n(18215);const r={tabItem:"tabItem_Ymn6"};var t=n(74848);function l(e){let{children:a,hidden:n,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,l),hidden:n,children:a})}}}]);