"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[3232],{28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>o});var n=a(96540);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}},49235:(e,t,a)=>{a.d(t,{A:()=>r});a(96540);var n=a(74848);function r(e){return(0,n.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,n.jsxs)("span",{className:"badge-dependency",children:[(0,n.jsx)("span",{className:"left",children:e.python_package_name}),(0,n.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,n.jsxs)("span",{className:"badge-dependency",children:[(0,n.jsx)("span",{className:"left",children:e.scala_package_name}),(0,n.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,n.jsxs)("span",{className:"badge-dependency",children:[(0,n.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,n.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,n.jsxs)("span",{className:"badge-dependency",children:[(0,n.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,n.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,n.jsxs)("span",{className:"badge-spark",children:[(0,n.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,n.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,n.jsxs)("span",{className:"badge-spark",children:[(0,n.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,n.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,n.jsxs)("span",{className:"badge-spark",children:[(0,n.jsx)("span",{className:"left",children:"Livy"}),(0,n.jsx)("span",{className:"right",children:e.livy})]})}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]})}},52584:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"Spark/gems/transform/unpivot","title":"Unpivot","description":"Use the Unpivot gem to transform your data from a wide format to a long format","source":"@site/docs/Spark/gems/transform/unpivot.md","sourceDirName":"Spark/gems/transform","slug":"/engineers/unpivot","permalink":"/prophecy-docs-staging/preview/pr-599/engineers/unpivot","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-599/tags/gems"},{"inline":true,"label":"unpivot","permalink":"/prophecy-docs-staging/preview/pr-599/tags/unpivot"},{"inline":true,"label":"wideformat","permalink":"/prophecy-docs-staging/preview/pr-599/tags/wideformat"},{"inline":true,"label":"longformat","permalink":"/prophecy-docs-staging/preview/pr-599/tags/longformat"}],"version":"current","frontMatter":{"title":"Unpivot","id":"unpivot","slug":"/engineers/unpivot","description":"Use the Unpivot gem to transform your data from a wide format to a long format","tags":["gems","unpivot","wideformat","longformat"]},"sidebar":"mySidebar","previous":{"title":"SetOperation","permalink":"/prophecy-docs-staging/preview/pr-599/engineers/set-operation"},"next":{"title":"WindowFunction","permalink":"/prophecy-docs-staging/preview/pr-599/engineers/window-function"}}');var r=a(74848),s=a(28453),i=a(49235),o=a(65537),l=a(79329);const c={title:"Unpivot",id:"unpivot",slug:"/engineers/unpivot",description:"Use the Unpivot gem to transform your data from a wide format to a long format",tags:["gems","unpivot","wideformat","longformat"]},d=void 0,u={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Example code",id:"example-code",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.2.36+",scala_package_name:"",scala_package_version:"",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"Not Supported"}),"\n",(0,r.jsx)(t.p,{children:"Use the Unpivot gem to transform your data from a wide format to a long format."}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["If you want to pivot the data, rather than unpivot, use the ",(0,r.jsx)(t.a,{href:"/engineers/aggregate",children:"Aggregate"})," gem."]})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Column(s) to use as identifiers"}),(0,r.jsx)(t.td,{children:"The column(s) that will identify to which group or entity the observation corresponds to."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Columns to unpivot"}),(0,r.jsx)(t.td,{children:"The columns (wide format) that you would like to transform into a single column (long format)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Variable column name"}),(0,r.jsx)(t.td,{children:"The name of the column that contains the names of the unpivoted columns. This helps describe the values in the value column."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Value column name"}),(0,r.jsx)(t.td,{children:"The name of the column that will contain the values from the unpivoted columns."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"Transforming your data into a long format can be beneficial when creating visualizations, comparing variables, handling dynamic data, and more."}),"\n",(0,r.jsx)(t.p,{children:"Let's think about a time series example. If you have product sales data in a wide format, you may want to transform it into a long format before modeling the time series and analyzing the seasonal patterns in sales."}),"\n",(0,r.jsx)(t.p,{children:"The image below shows sample input and output tables for this scenario."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Wide and long formats of time series data",src:a(68541).A+"",width:"2812",height:"900"})}),"\n",(0,r.jsx)(t.p,{children:"This table describes how this transformation was achieved:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Input"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Column(s) to use as identifiers"}),(0,r.jsxs)(t.td,{children:["The ",(0,r.jsx)(t.em,{children:"Product"})," column is the identifier because it defines which product the sales correspond to."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Columns to unpivot"}),(0,r.jsx)(t.td,{children:"All of the quarterly sales columns will be unpivoted."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Variable column name"}),(0,r.jsxs)(t.td,{children:["The variable column is named ",(0,r.jsx)(t.em,{children:"Quarter"})," because it identifies the sales period."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Value column name"}),(0,r.jsxs)(t.td,{children:["The value column is named ",(0,r.jsx)(t.em,{children:"UnitsSold"})," because it contains information about number of units sold."]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"example-code",children:"Example code"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["To see the generated source code of your project, ",(0,r.jsx)(t.a,{href:"/engineers/project-lifecycle/#review-the-code",children:"switch to the Code view"})," in the project header."]})}),"\n","\n",(0,r.jsx)(o.A,{children:(0,r.jsx)(l.A,{value:"py",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-py",children:'def unpivot_products_by_quarter(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    return in0.unpivot(["Product"], [col for col in in0.columns if col not in ["Product"]], "Quarter", "UnitsSold")\n'})})})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},65537:(e,t,a)=>{a.d(t,{A:()=>w});var n=a(96540),r=a(18215),s=a(65627),i=a(56347),o=a(50372),l=a(30604),c=a(11861),d=a(78749);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,u]=m({queryString:a,groupId:r}),[f,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,d.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),b=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=a(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=a(74848);function v(e){let{className:t,block:a,selectedValue:n,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const t=e.currentTarget,a=l.indexOf(t),r=o[a].value;r!==n&&(c(t),i(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{l.push(e)},onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function j(e){let{lazy:t,children:a,selectedValue:s}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function w(e){const t=(0,g.A)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(t))}},68541:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/unpivot-time-series-84c93d408d25ba8cdda39ce7906de127.png"},79329:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var n=a(18215);const r={tabItem:"tabItem_Ymn6"};var s=a(74848);function i(e){let{children:t,hidden:a,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,i),hidden:a,children:t})}}}]);