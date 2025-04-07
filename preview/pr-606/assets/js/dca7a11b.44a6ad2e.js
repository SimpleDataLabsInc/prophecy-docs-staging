"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[12179],{3290:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"Spark/gems/join-split/row-distributor","title":"RowDistributor","description":"Create multiple DataFrames based on filter conditions","source":"@site/docs/Spark/gems/join-split/row-distributor.md","sourceDirName":"Spark/gems/join-split","slug":"/engineers/row-distributor","permalink":"/prophecy-docs-staging/preview/pr-606/engineers/row-distributor","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-606/tags/gems"},{"inline":true,"label":"split","permalink":"/prophecy-docs-staging/preview/pr-606/tags/split"},{"inline":true,"label":"filter","permalink":"/prophecy-docs-staging/preview/pr-606/tags/filter"},{"inline":true,"label":"row distributor","permalink":"/prophecy-docs-staging/preview/pr-606/tags/row-distributor"}],"version":"current","frontMatter":{"title":"RowDistributor","id":"row-distributor","slug":"/engineers/row-distributor","description":"Create multiple DataFrames based on filter conditions","tags":["gems","split","filter","row distributor"]},"sidebar":"mySidebar","previous":{"title":"Repartition","permalink":"/prophecy-docs-staging/preview/pr-606/engineers/repartition"},"next":{"title":"Subgraph","permalink":"/prophecy-docs-staging/preview/pr-606/engineers/subgraph"}}');var s=a(74848),n=a(28453),i=a(49235),l=a(65537),o=a(79329);const c={title:"RowDistributor",id:"row-distributor",slug:"/engineers/row-distributor",description:"Create multiple DataFrames based on filter conditions",tags:["gems","split","filter","row distributor"]},d=void 0,u={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Generated Code",id:"generated-code",level:2}];function h(e){const r={admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.0.1+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"3.0.1+"}),"\n",(0,s.jsx)(r.p,{children:"Use the RowDistributor gem to create multiple DataFrames based on provided filter conditions from an input DataFrame."}),"\n",(0,s.jsx)(r.p,{children:"This is useful for cases where rows from the input DataFrame needs to be distributed into multiple DataFrames in different ways for downstream gems."}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Required"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"DataFrame"}),(0,s.jsx)(r.td,{children:"Input DataFrame for which rows needs to be distributed into multiple DataFrames"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Filter Conditions"}),(0,s.jsx)(r.td,{children:"Boolean Type column or boolean expression for each output tab. Supports SQL, Python and Scala expressions"}),(0,s.jsx)(r.td,{children:"True"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"Row distributor 1",src:a(60523).A+"",width:"1748",height:"850"})}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsxs)(r.p,{children:["Number of outputs can be changed as needed by clicking the ",(0,s.jsx)(r.code,{children:"+"})," button."]})}),"\n",(0,s.jsx)(r.h2,{id:"generated-code",children:"Generated Code"}),"\n","\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(o.A,{value:"py",label:"Python",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-py",children:'def RowDistributor(spark: SparkSession, in0: DataFrame) -> (DataFrame, DataFrame, DataFrame):\n    df1 = in0.filter((col("order_status") == lit("Started")))\n    df2 = in0.filter((col("order_status") == lit("Approved")))\n    df3 = in0.filter((col("order_status") == lit("Finished")))\n\n    return df1, df2, df3\n'})})}),(0,s.jsx)(o.A,{value:"scala",label:"Scala",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-scala",children:'object RowDistributor {\n\n  def apply(\n    spark: SparkSession,\n    in:    DataFrame\n  ): (DataFrame, DataFrame, DataFrame) =\n    (in.filter(col("order_status") === lit("Started")),\n     in.filter(col("order_status") === lit("Approved")),\n     in.filter(col("order_status") === lit("Finished"))\n    )\n\n}\n'})})})]})]})}function m(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,r,a)=>{a.d(r,{R:()=>i,x:()=>l});var t=a(96540);const s={},n=t.createContext(s);function i(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(n.Provider,{value:r},e.children)}},49235:(e,r,a)=>{a.d(r,{A:()=>s});a(96540);var t=a(74848);function s(e){return(0,t.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.python_package_name}),(0,t.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.scala_package_name}),(0,t.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,t.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,t.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,t.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,t.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Livy"}),(0,t.jsx)("span",{className:"right",children:e.livy})]})}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]})}},60523:(e,r,a)=>{a.d(r,{A:()=>t});const t=a.p+"assets/images/rowdistributor_eg_1-45da3213c2f5f108833af1d18986f6d7.png"},65537:(e,r,a)=>{a.d(r,{A:()=>k});var t=a(96540),s=a(18215),n=a(65627),i=a(56347),l=a(50372),o=a(30604),c=a(11861),d=a(78749);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:a}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:a,attributes:t,default:s}}=e;return{value:r,label:a,attributes:t,default:s}}))}(a);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,a])}function h(e){let{value:r,tabValues:a}=e;return a.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:a}=e;const s=(0,i.W6)(),n=function(e){let{queryString:r=!1,groupId:a}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:r,groupId:a});return[(0,o.aZ)(n),(0,t.useCallback)((e=>{if(!n)return;const r=new URLSearchParams(s.location.search);r.set(n,e),s.replace({...s.location,search:r.toString()})}),[n,s])]}function b(e){const{defaultValue:r,queryString:a=!1,groupId:s}=e,n=p(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:n}))),[c,u]=m({queryString:a,groupId:s}),[b,f]=function(e){let{groupId:r}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,n]=(0,d.Dv)(a);return[s,(0,t.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:s}),g=(()=>{const e=c??b;return h({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,n]),tabValues:n}}var f=a(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=a(74848);function j(e){let{className:r,block:a,selectedValue:t,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.a_)(),d=e=>{const r=e.currentTarget,a=o.indexOf(r),s=l[a].value;s!==t&&(c(r),i(s))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;r=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;r=o[a]??o[o.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},r),children:l.map((e=>{let{value:r,label:a,attributes:n}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>{o.push(e)},onKeyDown:u,onClick:d,...n,className:(0,s.A)("tabs__item",g.tabItem,n?.className,{"tabs__item--active":t===r}),children:a??r},r)}))})}function y(e){let{lazy:r,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===n));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function v(e){const r=b(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,x.jsx)(j,{...r,...e}),(0,x.jsx)(y,{...r,...e})]})}function k(e){const r=(0,f.A)();return(0,x.jsx)(v,{...e,children:u(e.children)},String(r))}},79329:(e,r,a)=>{a.d(r,{A:()=>i});a(96540);var t=a(18215);const s={tabItem:"tabItem_Ymn6"};var n=a(74848);function i(e){let{children:r,hidden:a,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,i),hidden:a,children:r})}}}]);