"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[47475],{28453:(e,r,a)=>{a.d(r,{R:()=>l,x:()=>i});var s=a(96540);const n={},t=s.createContext(n);function l(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(t.Provider,{value:r},e.children)}},49235:(e,r,a)=>{a.d(r,{A:()=>n});a(96540);var s=a(74848);function n(e){return(0,s.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:e.python_package_name}),(0,s.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:e.scala_package_name}),(0,s.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,s.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,s.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,s.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,s.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Livy"}),(0,s.jsx)("span",{className:"right",children:e.livy})]})}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]})}},65537:(e,r,a)=>{a.d(r,{A:()=>k});var s=a(96540),n=a(18215),t=a(65627),l=a(56347),i=a(50372),c=a(30604),o=a(11861),d=a(78749);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:a}=e;return(0,s.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:a,attributes:s,default:n}}=e;return{value:r,label:a,attributes:s,default:n}}))}(a);return function(e){const r=(0,o.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,a])}function h(e){let{value:r,tabValues:a}=e;return a.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:a}=e;const n=(0,l.W6)(),t=function(e){let{queryString:r=!1,groupId:a}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:r,groupId:a});return[(0,c.aZ)(t),(0,s.useCallback)((e=>{if(!t)return;const r=new URLSearchParams(n.location.search);r.set(t,e),n.replace({...n.location,search:r.toString()})}),[t,n])]}function b(e){const{defaultValue:r,queryString:a=!1,groupId:n}=e,t=p(e),[l,c]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=a.find((e=>e.default))??a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:t}))),[o,u]=m({queryString:a,groupId:n}),[b,g]=function(e){let{groupId:r}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,t]=(0,d.Dv)(a);return[n,(0,s.useCallback)((e=>{a&&t.set(e)}),[a,t])]}({groupId:n}),f=(()=>{const e=o??b;return h({value:e,tabValues:t})?e:null})();(0,i.A)((()=>{f&&c(f)}),[f]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,t]),tabValues:t}}var g=a(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=a(74848);function x(e){let{className:r,block:a,selectedValue:s,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.a_)(),d=e=>{const r=e.currentTarget,a=c.indexOf(r),n=i[a].value;n!==s&&(o(r),l(n))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;r=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;r=c[a]??c[c.length-1];break}}r?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},r),children:i.map((e=>{let{value:r,label:a,attributes:t}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>{c.push(e)},onKeyDown:u,onClick:d,...t,className:(0,n.A)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":s===r}),children:a??r},r)}))})}function j(e){let{lazy:r,children:a,selectedValue:t}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==t})))})}function v(e){const r=b(e);return(0,y.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,y.jsx)(x,{...r,...e}),(0,y.jsx)(j,{...r,...e})]})}function k(e){const r=(0,g.A)();return(0,y.jsx)(v,{...e,children:u(e.children)},String(r))}},68246:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"Spark/gems/transform/order-by","title":"OrderBy","description":"Sort your data based on one or more columns","source":"@site/docs/Spark/gems/transform/order-by.md","sourceDirName":"Spark/gems/transform","slug":"/engineers/order-by","permalink":"/prophecy-docs-staging/preview/pr-610/engineers/order-by","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-610/tags/gems"},{"inline":true,"label":"order by","permalink":"/prophecy-docs-staging/preview/pr-610/tags/order-by"},{"inline":true,"label":"sort","permalink":"/prophecy-docs-staging/preview/pr-610/tags/sort"},{"inline":true,"label":"ascending","permalink":"/prophecy-docs-staging/preview/pr-610/tags/ascending"},{"inline":true,"label":"descending","permalink":"/prophecy-docs-staging/preview/pr-610/tags/descending"}],"version":"current","frontMatter":{"title":"OrderBy","id":"order-by","slug":"/engineers/order-by","description":"Sort your data based on one or more columns","tags":["gems","order by","sort","ascending","descending"]},"sidebar":"mySidebar","previous":{"title":"Limit","permalink":"/prophecy-docs-staging/preview/pr-610/engineers/limit"},"next":{"title":"Reformat","permalink":"/prophecy-docs-staging/preview/pr-610/engineers/reformat"}}');var n=a(74848),t=a(28453),l=a(49235),i=a(65537),c=a(79329);const o={title:"OrderBy",id:"order-by",slug:"/engineers/order-by",description:"Sort your data based on one or more columns",tags:["gems","order by","sort","ascending","descending"]},d=void 0,u={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Spark Code",id:"spark-code",level:2}];function h(e){const r={code:"code",h2:"h2",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.0.1+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"3.0.1+"}),"\n",(0,n.jsx)(r.p,{children:"Sorts a DataFrame on one or more columns in ascending or descending order."}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Required"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"DataFrame"}),(0,n.jsx)(r.td,{children:"Input DataFrame to be sorted"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Order columns"}),(0,n.jsx)(r.td,{children:"Columns to sort DataFrame by"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Sort"}),(0,n.jsx)(r.td,{children:"Order of sorting - ascending or descending"}),(0,n.jsx)(r.td,{children:"True"})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"Example usage of OrderBy",src:a(98935).A+"",width:"940",height:"260"})}),"\n",(0,n.jsx)(r.h2,{id:"spark-code",children:"Spark Code"}),"\n","\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(c.A,{value:"py",label:"Python",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-py",children:'def Sort(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    return in0.orderBy(col("name").asc(), col("updated_at").desc())\n'})})}),(0,n.jsx)(c.A,{value:"scala",label:"Scala",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-scala",children:'object Sort {\n  def apply(spark: SparkSession, in: DataFrame): DataFrame =\n    in.orderBy(col("updated_at").desc, col("name").asc)\n}\n'})})})]})]})}function m(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},79329:(e,r,a)=>{a.d(r,{A:()=>l});a(96540);var s=a(18215);const n={tabItem:"tabItem_Ymn6"};var t=a(74848);function l(e){let{children:r,hidden:a,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,l),hidden:a,children:r})}},98935:(e,r,a)=>{a.d(r,{A:()=>s});const s=a.p+"assets/images/orderby_eg_0-860c1a17045d750aa875a39dbcf114fc.png"}}]);