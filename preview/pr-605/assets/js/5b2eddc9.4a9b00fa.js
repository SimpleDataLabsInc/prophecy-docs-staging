"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[71625],{28453:(e,a,r)=>{r.d(a,{R:()=>l,x:()=>i});var t=r(96540);const n={},s=t.createContext(n);function l(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(s.Provider,{value:a},e.children)}},41978:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"Spark/gems/transform/filter","title":"Filter","description":"Filter your data based on a custom filter condition","source":"@site/docs/Spark/gems/transform/filter.md","sourceDirName":"Spark/gems/transform","slug":"/engineers/filter","permalink":"/prophecy-docs-staging/preview/pr-605/engineers/filter","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-605/tags/gems"},{"inline":true,"label":"filter","permalink":"/prophecy-docs-staging/preview/pr-605/tags/filter"},{"inline":true,"label":"where","permalink":"/prophecy-docs-staging/preview/pr-605/tags/where"}],"version":"current","frontMatter":{"title":"Filter","id":"filter","slug":"/engineers/filter","description":"Filter your data based on a custom filter condition","tags":["gems","filter","where"]},"sidebar":"mySidebar","previous":{"title":"DynamicSelect","permalink":"/prophecy-docs-staging/preview/pr-605/engineers/dynamic-select"},"next":{"title":"FlattenSchema","permalink":"/prophecy-docs-staging/preview/pr-605/engineers/flatten-schema"}}');var n=r(74848),s=r(28453),l=r(49235),i=r(65537),c=r(79329);const o={title:"Filter",id:"filter",slug:"/engineers/filter",description:"Filter your data based on a custom filter condition",tags:["gems","filter","where"]},d=void 0,u={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Spark Code",id:"spark-code",level:2}];function h(e){const a={code:"code",h2:"h2",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.0.1+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"3.0.1+"}),"\n",(0,n.jsx)(a.p,{children:"Filters DataFrame based on the provided filter condition"}),"\n",(0,n.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(a.th,{style:{textAlign:"left"},children:"Description"}),(0,n.jsx)(a.th,{style:{textAlign:"left"},children:"Required"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{style:{textAlign:"left"},children:"DataFrame"}),(0,n.jsx)(a.td,{style:{textAlign:"left"},children:"Input DataFrame on which the filter condition will be applied."}),(0,n.jsx)(a.td,{style:{textAlign:"left"},children:"True"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{style:{textAlign:"left"},children:"Filter Condition"}),(0,n.jsx)(a.td,{style:{textAlign:"left"},children:"BooleanType column or boolean expression. Supports SQL, Python and Scala expressions."}),(0,n.jsx)(a.td,{style:{textAlign:"left"},children:"True"})]})]})]}),"\n",(0,n.jsx)(a.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Example usage of Filter",src:r(82895).A+"",width:"2034",height:"802"})}),"\n",(0,n.jsx)(a.h2,{id:"spark-code",children:"Spark Code"}),"\n","\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(c.A,{value:"py",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-py",children:'def Filter_Orders(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    return in0.filter(\n        (\n          ((col("order_category") == lit("Marketing"))\n          & ((col("order_status") == lit("Finished")) | (col("order_status") == lit("Approved"))))\n          & ~ col("is_discounted")\n        )\n    )\n'})})}),(0,n.jsx)(c.A,{value:"scala",label:"Scala",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-scala",children:'object Filter_Orders {\n\n  def apply(spark: SparkSession, in: DataFrame): DataFrame =\n    in.filter(\n      (\n        col("order_category") === lit("Marketing"))\n        .and(\n          (col("order_status") === lit("Finished"))\n            .or(col("order_status") === lit("Approved"))\n        )\n        .and(!col("is_discounted"))\n    )\n}\n'})})})]})]})}function m(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},49235:(e,a,r)=>{r.d(a,{A:()=>n});r(96540);var t=r(74848);function n(e){return(0,t.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.python_package_name}),(0,t.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.scala_package_name}),(0,t.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,t.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,t.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,t.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,t.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Livy"}),(0,t.jsx)("span",{className:"right",children:e.livy})]})}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]})}},65537:(e,a,r)=>{r.d(a,{A:()=>k});var t=r(96540),n=r(18215),s=r(65627),l=r(56347),i=r(50372),c=r(30604),o=r(11861),d=r(78749);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:r}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return u(e).map((e=>{let{props:{value:a,label:r,attributes:t,default:n}}=e;return{value:a,label:r,attributes:t,default:n}}))}(r);return function(e){const a=(0,o.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,r])}function h(e){let{value:a,tabValues:r}=e;return r.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:r}=e;const n=(0,l.W6)(),s=function(e){let{queryString:a=!1,groupId:r}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:a,groupId:r});return[(0,c.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(n.location.search);a.set(s,e),n.replace({...n.location,search:a.toString()})}),[s,n])]}function f(e){const{defaultValue:a,queryString:r=!1,groupId:n}=e,s=p(e),[l,c]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:s}))),[o,u]=m({queryString:r,groupId:n}),[f,g]=function(e){let{groupId:a}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,s]=(0,d.Dv)(r);return[n,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),b=(()=>{const e=o??f;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&c(b)}),[b]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=r(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function y(e){let{className:a,block:r,selectedValue:t,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),d=e=>{const a=e.currentTarget,r=c.indexOf(a),n=i[r].value;n!==t&&(o(a),l(n))},u=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;a=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;a=c[r]??c[c.length-1];break}}a?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},a),children:i.map((e=>{let{value:a,label:r,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>{c.push(e)},onKeyDown:u,onClick:d,...s,className:(0,n.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===a}),children:r??a},a)}))})}function v(e){let{lazy:a,children:r,selectedValue:s}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==s})))})}function j(e){const a=f(e);return(0,x.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,x.jsx)(y,{...a,...e}),(0,x.jsx)(v,{...a,...e})]})}function k(e){const a=(0,g.A)();return(0,x.jsx)(j,{...e,children:u(e.children)},String(a))}},79329:(e,a,r)=>{r.d(a,{A:()=>l});r(96540);var t=r(18215);const n={tabItem:"tabItem_Ymn6"};var s=r(74848);function l(e){let{children:a,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(n.tabItem,l),hidden:r,children:a})}},82895:(e,a,r)=>{r.d(a,{A:()=>t});const t=r.p+"assets/images/filter_eg_1-ba6f5ebc4ade54f4f8bc7d8d44dae592.png"}}]);