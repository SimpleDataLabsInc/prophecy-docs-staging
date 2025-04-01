"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[23581],{23705:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"Spark/gems/transform/data-cleansing","title":"DataCleansing","description":"Standardize data formats and address missing or null values in the data","source":"@site/docs/Spark/gems/transform/data-cleansing.md","sourceDirName":"Spark/gems/transform","slug":"/Spark/gems/transform/data-cleansing","permalink":"/prophecy-docs-staging/preview/pr-596/Spark/gems/transform/data-cleansing","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-596/tags/gems"},{"inline":true,"label":"clean","permalink":"/prophecy-docs-staging/preview/pr-596/tags/clean"},{"inline":true,"label":"format","permalink":"/prophecy-docs-staging/preview/pr-596/tags/format"}],"version":"current","frontMatter":{"title":"DataCleansing","id":"data-cleansing","description":"Standardize data formats and address missing or null values in the data","tags":["gems","clean","format"]},"sidebar":"mySidebar","previous":{"title":"ColumnParser","permalink":"/prophecy-docs-staging/preview/pr-596/Spark/gems/transform/column-parser"},"next":{"title":"DataQualityCheck","permalink":"/prophecy-docs-staging/preview/pr-596/Spark/gems/transform/data-quality-check"}}');var s=n(74848),r=n(28453),l=n(49235),i=n(65537),c=n(79329);const o={title:"DataCleansing",id:"data-cleansing",description:"Standardize data formats and address missing or null values in the data",tags:["gems","clean","format"]},d=void 0,u={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Example code",id:"example-code",level:2}];function h(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.A,{python_package_name:"",python_package_version:"",scala_package_name:"",scala_package_version:"",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"3.0.1+"}),"\n",(0,s.jsx)(a.p,{children:"Use the DataCleansing gem to standardize data formats and address missing or null values in the data."}),"\n",(0,s.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Parameter"}),(0,s.jsx)(a.th,{children:"Description"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Select columns you want to clean"}),(0,s.jsx)(a.td,{children:"The set of columns on which to perform cleaning transformations"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Remove null data"}),(0,s.jsx)(a.td,{children:"The method used to remove null data"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Replace null values in column"}),(0,s.jsx)(a.td,{children:"The method used to replace null values"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Clean data"}),(0,s.jsx)(a.td,{children:"Different ways to standardize the format of data in columns"})]})]})]}),"\n",(0,s.jsx)(a.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(a.p,{children:["Assume you have a table that includes customer feedback on individual orders. In this scenario, some customers may not provide feedback, resulting in null values in the data. You can use the DataCleansing gem to replace null values with the string ",(0,s.jsx)(a.code,{children:"NA"}),"."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Replace null with string",src:n(82591).A+"",width:"2620",height:"1508"})}),"\n",(0,s.jsx)(a.h2,{id:"example-code",children:"Example code"}),"\n",(0,s.jsx)(a.admonition,{type:"tip",children:(0,s.jsxs)(a.p,{children:["To see the generated source code of your project, ",(0,s.jsx)(a.a,{href:"/engineers/project-lifecycle/#review-the-code",children:"switch to the Code view"})," in the project header."]})}),"\n","\n",(0,s.jsx)(i.A,{children:(0,s.jsx)(c.A,{value:"py",label:"Python",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-py",children:'def data_cleansing_customer_id(spark: SparkSession, df: DataFrame) -> DataFrame:\n    from pyspark.sql.functions import col, trim, regexp_replace, lower, upper, initcap\n    from pyspark.sql.types import StringType, IntegerType, FloatType, DoubleType, LongType, ShortType\n    transformed_columns = []\n\n    # Check if column exists after null operations\n    if "customer_id" not in df.columns:\n        print("Warning: Column \'customer_id\' not found after null operation. Skipping transformations for this column.")\n    else:\n        col_type = df.schema["customer_id"].dataType\n\n        # If the column is a string type, apply text-based operations\n        if isinstance(df.schema["customer_id"].dataType, StringType):\n            df = df.na.fill({"customer_id" : "NA"})\n            transformed_columns = [lower(col("customer_id")).alias("customer_id")]\n        elif isinstance(col_type, (IntegerType, FloatType, DoubleType, LongType, ShortType)):\n            df = df.na.fill({"customer_id" : 0})\n            transformed_columns = [col("customer_id")]\n        else:\n            transformed_columns = [col("customer_id")]\n\n    df = df.select(*[col(c) for c in df.columns if c not in ["customer_id"]], *transformed_columns)\n\n    return df\n'})})})})]})}function m(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>l,x:()=>i});var t=n(96540);const s={},r=t.createContext(s);function l(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:a},e.children)}},49235:(e,a,n)=>{n.d(a,{A:()=>s});n(96540);var t=n(74848);function s(e){return(0,t.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/package-hub/",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.python_package_name}),(0,t.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/package-hub/",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.scala_package_name}),(0,t.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,t.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,t.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,t.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,t.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Livy"}),(0,t.jsx)("span",{className:"right",children:e.livy})]})}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]})}},65537:(e,a,n)=>{n.d(a,{A:()=>_});var t=n(96540),s=n(18215),r=n(65627),l=n(56347),i=n(50372),c=n(30604),o=n(11861),d=n(78749);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return u(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:s}}=e;return{value:a,label:n,attributes:t,default:s}}))}(n);return function(e){const a=(0,o.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function h(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:n}=e;const s=(0,l.W6)(),r=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,c.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(s.location.search);a.set(r,e),s.replace({...s.location,search:a.toString()})}),[r,s])]}function f(e){const{defaultValue:a,queryString:n=!1,groupId:s}=e,r=p(e),[l,c]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:r}))),[o,u]=m({queryString:n,groupId:s}),[f,g]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[s,r]=(0,d.Dv)(n);return[s,(0,t.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),b=(()=>{const e=o??f;return h({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{b&&c(b)}),[b]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var g=n(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function y(e){let{className:a,block:n,selectedValue:t,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.a_)(),d=e=>{const a=e.currentTarget,n=c.indexOf(a),s=i[n].value;s!==t&&(o(a),l(s))},u=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;a=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;a=c[n]??c[c.length-1];break}}a?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},a),children:i.map((e=>{let{value:a,label:n,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>{c.push(e)},onKeyDown:u,onClick:d,...r,className:(0,s.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":t===a}),children:n??a},a)}))})}function v(e){let{lazy:a,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function j(e){const a=f(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,x.jsx)(y,{...a,...e}),(0,x.jsx)(v,{...a,...e})]})}function _(e){const a=(0,g.A)();return(0,x.jsx)(j,{...e,children:u(e.children)},String(a))}},79329:(e,a,n)=>{n.d(a,{A:()=>l});n(96540);var t=n(18215);const s={tabItem:"tabItem_Ymn6"};var r=n(74848);function l(e){let{children:a,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,l),hidden:n,children:a})}},82591:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/replace-null-with-string-d6f58e1cf09526c92a2b5f45e327d7e7.png"}}]);