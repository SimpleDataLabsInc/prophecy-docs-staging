"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[22777],{26648:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/limit_eg_1-541be60d2f406a01a92c7ae2ca28cf29.png"},28453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>l});var r=t(96540);const s={},n=r.createContext(s);function i(e){const a=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(n.Provider,{value:a},e.children)}},49235:(e,a,t)=>{t.d(a,{A:()=>s});t(96540);var r=t(74848);function s(e){return(0,r.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,r.jsxs)("span",{className:"badge-dependency",children:[(0,r.jsx)("span",{className:"left",children:e.python_package_name}),(0,r.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,r.jsxs)("span",{className:"badge-dependency",children:[(0,r.jsx)("span",{className:"left",children:e.scala_package_name}),(0,r.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,r.jsxs)("span",{className:"badge-dependency",children:[(0,r.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,r.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,r.jsxs)("span",{className:"badge-dependency",children:[(0,r.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,r.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,r.jsxs)("span",{className:"badge-spark",children:[(0,r.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,r.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,r.jsxs)("span",{className:"badge-spark",children:[(0,r.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,r.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,r.jsxs)("span",{className:"badge-spark",children:[(0,r.jsx)("span",{className:"left",children:"Livy"}),(0,r.jsx)("span",{className:"right",children:e.livy})]})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]})}},65537:(e,a,t)=>{t.d(a,{A:()=>k});var r=t(96540),s=t(18215),n=t(65627),i=t(56347),l=t(50372),c=t(30604),o=t(11861),u=t(78749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:s}}=e;return{value:a,label:t,attributes:r,default:s}}))}(t);return function(e){const a=(0,o.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function h(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:t}=e;const s=(0,i.W6)(),n=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,c.aZ)(n),(0,r.useCallback)((e=>{if(!n)return;const a=new URLSearchParams(s.location.search);a.set(n,e),s.replace({...s.location,search:a.toString()})}),[n,s])]}function f(e){const{defaultValue:a,queryString:t=!1,groupId:s}=e,n=p(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:n}))),[o,d]=m({queryString:t,groupId:s}),[f,g]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[s,n]=(0,u.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:s}),b=(()=>{const e=o??f;return h({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{b&&c(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),g(e)}),[d,g,n]),tabValues:n}}var g=t(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function y(e){let{className:a,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,n.a_)(),u=e=>{const a=e.currentTarget,t=c.indexOf(a),s=l[t].value;s!==r&&(o(a),i(s))},d=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}a?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},a),children:l.map((e=>{let{value:a,label:t,attributes:n}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===a?0:-1,"aria-selected":r===a,ref:e=>{c.push(e)},onKeyDown:d,onClick:u,...n,className:(0,s.A)("tabs__item",b.tabItem,n?.className,{"tabs__item--active":r===a}),children:t??a},a)}))})}function j(e){let{lazy:a,children:t,selectedValue:n}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n})))})}function v(e){const a=f(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,x.jsx)(y,{...a,...e}),(0,x.jsx)(j,{...a,...e})]})}function k(e){const a=(0,g.A)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(a))}},79329:(e,a,t)=>{t.d(a,{A:()=>i});t(96540);var r=t(18215);const s={tabItem:"tabItem_Ymn6"};var n=t(74848);function i(e){let{children:a,hidden:t,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:t,children:a})}},81474:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"Spark/gems/transform/limit","title":"Limit","description":"Limit the number of rows","source":"@site/docs/Spark/gems/transform/limit.md","sourceDirName":"Spark/gems/transform","slug":"/engineers/limit","permalink":"/prophecy-docs-staging/preview/pr-605/engineers/limit","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-605/tags/gems"},{"inline":true,"label":"limit","permalink":"/prophecy-docs-staging/preview/pr-605/tags/limit"}],"version":"current","frontMatter":{"title":"Limit","id":"limit","slug":"/engineers/limit","description":"Limit the number of rows","tags":["gems","limit"]},"sidebar":"mySidebar","previous":{"title":"FuzzyMatch","permalink":"/prophecy-docs-staging/preview/pr-605/engineers/fuzzy-match"},"next":{"title":"OrderBy","permalink":"/prophecy-docs-staging/preview/pr-605/engineers/order-by"}}');var s=t(74848),n=t(28453),i=t(49235),l=t(65537),c=t(79329);const o={title:"Limit",id:"limit",slug:"/engineers/limit",description:"Limit the number of rows",tags:["gems","limit"]},u=void 0,d={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Limit to 10 rows",id:"limit-to-10-rows",level:2},{value:"Code",id:"code",level:2}];function h(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.0.1+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"3.0.1+"}),"\n",(0,s.jsx)(a.p,{children:"Limits the number of rows in the output."}),"\n",(0,s.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{style:{textAlign:"left"},children:"Parameter"}),(0,s.jsx)(a.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{style:{textAlign:"left"},children:"DataFrame"}),(0,s.jsx)(a.td,{style:{textAlign:"left"},children:"Input DataFrame"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{style:{textAlign:"left"},children:"Limit"}),(0,s.jsxs)(a.td,{style:{textAlign:"left"},children:["Number of rows required in output. Allowed range: [0, 2",(0,s.jsx)("sup",{children:"31"})," -1]"]})]})]})]}),"\n",(0,s.jsx)(a.h2,{id:"limit-to-10-rows",children:"Limit to 10 rows"}),"\n",(0,s.jsxs)(a.p,{children:["If you want to limit your output to 10 rows, you can input ",(0,s.jsx)(a.code,{children:"10"})," in the Limit gem."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Example usage of Limit",src:t(26648).A+"",width:"940",height:"268"})}),"\n",(0,s.jsx)(a.admonition,{type:"note",children:(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/engineers/execution",children:"Data samples"})," generated before the Limit gem might also be limited. This is because Spark tries to push the limit down to earlier stages of execution to minimize data processing. This means Spark may reduce the number of rows fetched from the source or processed in earlier transformations."]})}),"\n",(0,s.jsx)(a.h2,{id:"code",children:"Code"}),"\n","\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(c.A,{value:"py",label:"Python",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-py",children:"def limit(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    return in0.limit(10)\n\n"})})}),(0,s.jsx)(c.A,{value:"scala",label:"Scala",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-scala",children:"object limit {\n  def apply(spark: SparkSession, in: DataFrame): DataFrame =\n    in.limit(10)\n}\n"})})})]})]})}function m(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);