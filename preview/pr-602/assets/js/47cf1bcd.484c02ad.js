"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[59811],{5991:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"Spark/gems/custom/sql-statement","title":"SQLStatement","description":"Create DataFrames based on custom SQL queries","source":"@site/docs/Spark/gems/custom/sql-statement.md","sourceDirName":"Spark/gems/custom","slug":"/engineers/sql-statement","permalink":"/prophecy-docs-staging/preview/pr-602/engineers/sql-statement","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-602/tags/gems"},{"inline":true,"label":"sql","permalink":"/prophecy-docs-staging/preview/pr-602/tags/sql"},{"inline":true,"label":"custom","permalink":"/prophecy-docs-staging/preview/pr-602/tags/custom"}],"version":"current","frontMatter":{"title":"SQLStatement","id":"sql-statement","slug":"/engineers/sql-statement","description":"Create DataFrames based on custom SQL queries","tags":["gems","sql","custom"]},"sidebar":"mySidebar","previous":{"title":"Script","permalink":"/prophecy-docs-staging/preview/pr-602/engineers/script"},"next":{"title":"DeltaTableOperations","permalink":"/prophecy-docs-staging/preview/pr-602/engineers/delta-table-operations"}}');var r=t(74848),n=t(28453),l=t(49235),i=t(65537),c=t(79329);const o={title:"SQLStatement",id:"sql-statement",slug:"/engineers/sql-statement",description:"Create DataFrames based on custom SQL queries",tags:["gems","sql","custom"]},d=void 0,u={},p=[{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3},{value:"Generated Code",id:"generated-code",level:3}];function h(e){const a={admonition:"admonition",code:"code",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.A,{python_package_name:"",python_package_version:"",scala_package_name:"",scala_package_version:"",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"3.0.1+"}),"\n",(0,r.jsx)(a.p,{children:"Create one or more DataFrame(s) based on provided SQL queries to run against one or more input DataFrames."}),"\n",(0,r.jsx)(a.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(a.th,{style:{textAlign:"left"},children:"Meaning"}),(0,r.jsx)(a.th,{style:{textAlign:"left"},children:"Required"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"DataFrame(s)"}),(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"Input DataFrame(s)"}),(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"True"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"SQL Queries"}),(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"SQL Query for each output tab"}),(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"True"})]})]})]}),"\n",(0,r.jsx)(a.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"SQL example 1",src:t(89461).A+"",width:"2504",height:"502"})}),"\n",(0,r.jsx)(a.admonition,{type:"info",children:(0,r.jsxs)(a.p,{children:["Number of inputs and outputs can be changed as needed by clicking the ",(0,r.jsx)(a.code,{children:"+"})," button on the respective tab."]})}),"\n",(0,r.jsx)(a.h3,{id:"generated-code",children:"Generated Code"}),"\n","\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(c.A,{value:"py",label:"Python",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-py",children:'def SQLStatement(spark: SparkSession, orders: DataFrame, customers: DataFrame) -> (DataFrame, DataFrame):\n    orders.createOrReplaceTempView("orders")\n    customers.createOrReplaceTempView("customers")\n    df1 = spark.sql("select * from orders inner join customers on orders.customer_id = customers.customer_id")\n    df2 = spark.sql("select distinct customer_id from orders")\n\n    return df1, df2\n\n'})})}),(0,r.jsx)(c.A,{value:"scala",label:"Scala",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-scala",children:'object SQLStatement {\n\n  def apply(\n      spark: SparkSession,\n      orders: DataFrame,\n      customers: DataFrame\n  ): (DataFrame, DataFrame) = {\n    orders.createOrReplaceTempView("orders")\n    customers.createOrReplaceTempView("customers")\n    (\n      spark.sql(\n        """select * from orders inner join customers on orders.customer_id = customers.customer_id"""\n      ),\n      spark.sql(\n        """select distinct customer_id from orders"""\n      )\n    )\n  }\n\n}\n\n'})})})]})]})}function m(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>l,x:()=>i});var s=t(96540);const r={},n=s.createContext(r);function l(e){const a=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(n.Provider,{value:a},e.children)}},49235:(e,a,t)=>{t.d(a,{A:()=>r});t(96540);var s=t(74848);function r(e){return(0,s.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:e.python_package_name}),(0,s.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:e.scala_package_name}),(0,s.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,s.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,s.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,s.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,s.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Livy"}),(0,s.jsx)("span",{className:"right",children:e.livy})]})}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]})}},65537:(e,a,t)=>{t.d(a,{A:()=>k});var s=t(96540),r=t(18215),n=t(65627),l=t(56347),i=t(50372),c=t(30604),o=t(11861),d=t(78749);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:t}=e;return(0,s.useMemo)((()=>{const e=a??function(e){return u(e).map((e=>{let{props:{value:a,label:t,attributes:s,default:r}}=e;return{value:a,label:t,attributes:s,default:r}}))}(t);return function(e){const a=(0,o.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function h(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:t}=e;const r=(0,l.W6)(),n=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,c.aZ)(n),(0,s.useCallback)((e=>{if(!n)return;const a=new URLSearchParams(r.location.search);a.set(n,e),r.replace({...r.location,search:a.toString()})}),[n,r])]}function b(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,n=p(e),[l,c]=(0,s.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:a,tabValues:n}))),[o,u]=m({queryString:t,groupId:r}),[b,g]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,n]=(0,d.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:r}),f=(()=>{const e=o??b;return h({value:e,tabValues:n})?e:null})();(0,i.A)((()=>{f&&c(f)}),[f]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,n]),tabValues:n}}var g=t(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function y(e){let{className:a,block:t,selectedValue:s,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,n.a_)(),d=e=>{const a=e.currentTarget,t=c.indexOf(a),r=i[t].value;r!==s&&(o(a),l(r))},u=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}a?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},a),children:i.map((e=>{let{value:a,label:t,attributes:n}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,ref:e=>{c.push(e)},onKeyDown:u,onClick:d,...n,className:(0,r.A)("tabs__item",f.tabItem,n?.className,{"tabs__item--active":s===a}),children:t??a},a)}))})}function j(e){let{lazy:a,children:t,selectedValue:n}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==n})))})}function v(e){const a=b(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,x.jsx)(y,{...a,...e}),(0,x.jsx)(j,{...a,...e})]})}function k(e){const a=(0,g.A)();return(0,x.jsx)(v,{...e,children:u(e.children)},String(a))}},79329:(e,a,t)=>{t.d(a,{A:()=>l});t(96540);var s=t(18215);const r={tabItem:"tabItem_Ymn6"};var n=t(74848);function l(e){let{children:a,hidden:t,className:l}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,l),hidden:t,children:a})}},89461:(e,a,t)=>{t.d(a,{A:()=>s});const s=t.p+"assets/images/sqlstatement_eg_1-83a269e80f80336bc9cf0e8f3e9eb11e.png"}}]);