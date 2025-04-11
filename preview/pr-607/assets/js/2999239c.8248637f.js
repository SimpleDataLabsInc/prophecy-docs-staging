"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[97315],{28453:(e,a,r)=>{r.d(a,{R:()=>l,x:()=>c});var s=r(96540);const n={},t=s.createContext(n);function l(e){const a=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(t.Provider,{value:a},e.children)}},38986:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"Spark/gems/transform/sample-rows","title":"SampleRows","description":"Sample records by choosing a specific number or percentage of records","source":"@site/docs/Spark/gems/transform/sample-rows.md","sourceDirName":"Spark/gems/transform","slug":"/engineers/sample-rows","permalink":"/prophecy-docs-staging/preview/pr-607/engineers/sample-rows","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-607/tags/gems"},{"inline":true,"label":"transform","permalink":"/prophecy-docs-staging/preview/pr-607/tags/transform"},{"inline":true,"label":"sample","permalink":"/prophecy-docs-staging/preview/pr-607/tags/sample"}],"version":"current","frontMatter":{"title":"SampleRows","id":"sample-rows","slug":"/engineers/sample-rows","description":"Sample records by choosing a specific number or percentage of records","tags":["gems","transform","sample"]},"sidebar":"mySidebar","previous":{"title":"Reformat","permalink":"/prophecy-docs-staging/preview/pr-607/engineers/reformat"},"next":{"title":"SchemaTransform","permalink":"/prophecy-docs-staging/preview/pr-607/engineers/schema-transform"}}');var n=r(74848),t=r(28453),l=r(49235),c=r(65537),i=r(79329);const o={title:"SampleRows",id:"sample-rows",slug:"/engineers/sample-rows",description:"Sample records by choosing a specific number or percentage of records",tags:["gems","transform","sample"]},p=void 0,d={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Example code",id:"example-code",level:2}];function h(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.2.25+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"Not Supported",uc_shared:"14.3+",livy:"3.0.1+"}),"\n",(0,n.jsx)(a.p,{children:"Use the SampleRows gem to sample records by choosing a specific number or percentage of records."}),"\n",(0,n.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Parameter"}),(0,n.jsx)(a.th,{children:"Description"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Sampling strategy"}),(0,n.jsx)(a.td,{children:"An option between sampling by number of records or percentage of records"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Sampling ratio"}),(0,n.jsx)(a.td,{children:"The ratio of records that you wish to sample"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Random seed"}),(0,n.jsx)(a.td,{children:"A number that lets you reproduce the random sample"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"With replacement"}),(0,n.jsx)(a.td,{children:"When enabled, this allows records to be returned to the sample pool after selection"})]})]})]}),"\n",(0,n.jsx)(a.h2,{id:"example-code",children:"Example code"}),"\n",(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsxs)(a.p,{children:["To see the compiled code of your project, ",(0,n.jsx)(a.a,{href:"/engineers/pipelines#project-editor",children:"switch to the Code view"})," in the project header."]})}),"\n","\n",(0,n.jsxs)(c.A,{children:[(0,n.jsx)(i.A,{value:"py",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-py",children:"def SampleRows_1(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    return in0.sample(withReplacement = False, fraction = 0.5)\n"})})}),(0,n.jsx)(i.A,{value:"scala",label:"Scala",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-scala",children:'object SampleRows_1 {\n  def apply(context: Context, in: DataFrame): DataFrame =\n    in.sample(false, "0.5".toDouble)\n}\n'})})})]})]})}function m(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},49235:(e,a,r)=>{r.d(a,{A:()=>n});r(96540);var s=r(74848);function n(e){return(0,s.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:e.python_package_name}),(0,s.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:e.scala_package_name}),(0,s.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,s.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,s.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,s.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,s.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Livy"}),(0,s.jsx)("span",{className:"right",children:e.livy})]})}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]})}},65537:(e,a,r)=>{r.d(a,{A:()=>k});var s=r(96540),n=r(18215),t=r(65627),l=r(56347),c=r(50372),i=r(30604),o=r(11861),p=r(78749);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:a,children:r}=e;return(0,s.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:r,attributes:s,default:n}}=e;return{value:a,label:r,attributes:s,default:n}}))}(r);return function(e){const a=(0,o.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,r])}function h(e){let{value:a,tabValues:r}=e;return r.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:r}=e;const n=(0,l.W6)(),t=function(e){let{queryString:a=!1,groupId:r}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:a,groupId:r});return[(0,i.aZ)(t),(0,s.useCallback)((e=>{if(!t)return;const a=new URLSearchParams(n.location.search);a.set(t,e),n.replace({...n.location,search:a.toString()})}),[t,n])]}function b(e){const{defaultValue:a,queryString:r=!1,groupId:n}=e,t=u(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:a,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:a,tabValues:t}))),[o,d]=m({queryString:r,groupId:n}),[b,f]=function(e){let{groupId:a}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,t]=(0,p.Dv)(r);return[n,(0,s.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:n}),g=(()=>{const e=o??b;return h({value:e,tabValues:t})?e:null})();(0,c.A)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,t]),tabValues:t}}var f=r(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function y(e){let{className:a,block:r,selectedValue:s,selectValue:l,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.a_)(),p=e=>{const a=e.currentTarget,r=i.indexOf(a),n=c[r].value;n!==s&&(o(a),l(n))},d=e=>{let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;a=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;a=i[r]??i[i.length-1];break}}a?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},a),children:c.map((e=>{let{value:a,label:r,attributes:t}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,ref:e=>{i.push(e)},onKeyDown:d,onClick:p,...t,className:(0,n.A)("tabs__item",g.tabItem,t?.className,{"tabs__item--active":s===a}),children:r??a},a)}))})}function j(e){let{lazy:a,children:r,selectedValue:t}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==t})))})}function v(e){const a=b(e);return(0,x.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,x.jsx)(y,{...a,...e}),(0,x.jsx)(j,{...a,...e})]})}function k(e){const a=(0,f.A)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(a))}},79329:(e,a,r)=>{r.d(a,{A:()=>l});r(96540);var s=r(18215);const n={tabItem:"tabItem_Ymn6"};var t=r(74848);function l(e){let{children:a,hidden:r,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,l),hidden:r,children:a})}}}]);