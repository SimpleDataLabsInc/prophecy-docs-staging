"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[31902],{28453:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>l});var t=n(96540);const r={},s=t.createContext(r);function i(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:a},e.children)}},43483:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/set_eg_1-46701e21c8cebc491888db3d556e8345.png"},45740:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/set_add_inputs-bdf7b6691fc473ea1eee60161a5b9786.png"},48911:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"Spark/gems/transform/set-operation","title":"SetOperation","description":"Union, Intersect and Difference","source":"@site/docs/Spark/gems/transform/set-operation.md","sourceDirName":"Spark/gems/transform","slug":"/engineers/set-operation","permalink":"/prophecy-docs-staging/preview/pr-605/engineers/set-operation","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-605/tags/gems"},{"inline":true,"label":"set","permalink":"/prophecy-docs-staging/preview/pr-605/tags/set"},{"inline":true,"label":"union","permalink":"/prophecy-docs-staging/preview/pr-605/tags/union"},{"inline":true,"label":"intersect","permalink":"/prophecy-docs-staging/preview/pr-605/tags/intersect"},{"inline":true,"label":"difference","permalink":"/prophecy-docs-staging/preview/pr-605/tags/difference"}],"version":"current","frontMatter":{"title":"SetOperation","id":"set-operation","slug":"/engineers/set-operation","description":"Union, Intersect and Difference","tags":["gems","set","union","intersect","difference"]},"sidebar":"mySidebar","previous":{"title":"SchemaTransform","permalink":"/prophecy-docs-staging/preview/pr-605/engineers/schema-transform"},"next":{"title":"Unpivot","permalink":"/prophecy-docs-staging/preview/pr-605/engineers/unpivot"}}');var r=n(74848),s=n(28453),i=n(49235),l=n(65537),c=n(79329);const o={title:"SetOperation",id:"set-operation",slug:"/engineers/set-operation",description:"Union, Intersect and Difference",tags:["gems","set","union","intersect","difference"]},p=void 0,d={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Operation Type: <code>Union</code>",id:"operation-type-union",level:3},{value:"Operation Type: <code>Intersect All</code>",id:"operation-type-intersect-all",level:3},{value:"Operation Type: <code>Except All</code>",id:"operation-type-except-all",level:3}];function h(e){const a={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.0.1+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"3.0.1+"}),"\n",(0,r.jsx)(a.p,{children:"Use the SetOperation gem to perform addition or subtraction of rows from DataFrames with identical schemas and different data."}),"\n",(0,r.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(a.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"DataFrame 1"}),(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"First input DataFrame"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"DataFrame 2"}),(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"Second input DataFrame"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"DataFrame N"}),(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"Nth input DataFrame"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"Operation type"}),(0,r.jsx)(a.td,{style:{textAlign:"left"},children:(0,r.jsxs)("ul",{style:{margin:0,padding:"0 1rem"},children:[(0,r.jsx)("li",{children:" Union: Returns a DataFrame containing rows in any one of the input DataFrames, while preserving duplicates."}),(0,r.jsx)("li",{children:"Intersect All: Returns a DataFrame containing rows in all of the input DataFrames, while preserving duplicates."}),(0,r.jsx)("li",{children:"Except All: Returns a DataFrames containing rows in the first DataFrame, but not in the other DataFrames, while preserving duplicates."})]})})]})]})]}),"\n",(0,r.jsxs)(a.p,{children:["To add more input DataFrames, you can click the ",(0,r.jsx)(a.code,{children:"+"})," icon on the left sidebar."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Set Operation - Add input dataframe",src:n(45740).A+"",width:"556",height:"136"})}),"\n",(0,r.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(a.h3,{id:"operation-type-union",children:["Operation Type: ",(0,r.jsx)(a.code,{children:"Union"})]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Example usage of Set Operation - Union",src:n(43483).A+"",width:"1798",height:"904"})}),"\n","\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(c.A,{value:"py",label:"Python",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-py",children:"def union(spark: SparkSession, in0: DataFrame, in1: DataFrame, ) -> DataFrame:\n    return in0.unionAll(in1)\n"})})}),(0,r.jsx)(c.A,{value:"scala",label:"Scala",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-scala",children:"object union {\n  def apply(spark: SparkSession, in0: DataFrame, in1: DataFrame): DataFrame =\n    in0.unionAll(in1)\n}\n"})})})]}),"\n",(0,r.jsxs)(a.h3,{id:"operation-type-intersect-all",children:["Operation Type: ",(0,r.jsx)(a.code,{children:"Intersect All"})]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Example usage of Set Operation - Intersect All",src:n(62272).A+"",width:"1822",height:"868"})}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(c.A,{value:"py",label:"Python",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-py",children:"def intersectAll(spark: SparkSession, in0: DataFrame, in1: DataFrame, ) -> DataFrame:\n    return in0.intersectAll(in1)\n"})})}),(0,r.jsx)(c.A,{value:"scala",label:"Scala",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-scala",children:"object intersectAll {\n  def apply(spark: SparkSession, in0: DataFrame, in1: DataFrame): DataFrame =\n    in0.intersectAll(in1)\n}\n"})})})]}),"\n",(0,r.jsxs)(a.h3,{id:"operation-type-except-all",children:["Operation Type: ",(0,r.jsx)(a.code,{children:"Except All"})]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Example usage of Set Operation - Except All",src:n(86473).A+"",width:"1812",height:"783"})}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(c.A,{value:"py",label:"Python",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-py",children:"def exceptAll(spark: SparkSession, in0: DataFrame, in1: DataFrame, ) -> DataFrame:\n    return in0.exceptAll(in1)\n"})})}),(0,r.jsx)(c.A,{value:"scala",label:"Scala",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-scala",children:"object exceptAll {\n  def apply(spark: SparkSession, in0: DataFrame, in1: DataFrame): DataFrame =\n    in0.exceptAll(in1)\n}\n"})})})]})]})}function m(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},49235:(e,a,n)=>{n.d(a,{A:()=>r});n(96540);var t=n(74848);function r(e){return(0,t.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.python_package_name}),(0,t.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.scala_package_name}),(0,t.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,t.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,t.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,t.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,t.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Livy"}),(0,t.jsx)("span",{className:"right",children:e.livy})]})}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]})}},62272:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/set_eg_2-fe430fbd13a44d729c0c0ef00e7ca2d9.png"},65537:(e,a,n)=>{n.d(a,{A:()=>k});var t=n(96540),r=n(18215),s=n(65627),i=n(56347),l=n(50372),c=n(30604),o=n(11861),p=n(78749);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:r}}=e;return{value:a,label:n,attributes:t,default:r}}))}(n);return function(e){const a=(0,o.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function h(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:n}=e;const r=(0,i.W6)(),s=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,c.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(r.location.search);a.set(s,e),r.replace({...r.location,search:a.toString()})}),[s,r])]}function g(e){const{defaultValue:a,queryString:n=!1,groupId:r}=e,s=u(e),[i,c]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:s}))),[o,d]=m({queryString:n,groupId:r}),[g,f]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,s]=(0,p.Dv)(n);return[r,(0,t.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),x=(()=>{const e=o??g;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{x&&c(x)}),[x]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=n(9136);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function j(e){let{className:a,block:n,selectedValue:t,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),p=e=>{const a=e.currentTarget,n=c.indexOf(a),r=l[n].value;r!==t&&(o(a),i(r))},d=e=>{let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;a=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;a=c[n]??c[c.length-1];break}}a?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},a),children:l.map((e=>{let{value:a,label:n,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>{c.push(e)},onKeyDown:d,onClick:p,...s,className:(0,r.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":t===a}),children:n??a},a)}))})}function y(e){let{lazy:a,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=i.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==s})))})}function v(e){const a=g(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...a,...e}),(0,b.jsx)(y,{...a,...e})]})}function k(e){const a=(0,f.A)();return(0,b.jsx)(v,{...e,children:d(e.children)},String(a))}},79329:(e,a,n)=>{n.d(a,{A:()=>i});n(96540);var t=n(18215);const r={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(e){let{children:a,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:n,children:a})}},86473:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/set_eg_3-5ad43a57037f0e1ada3b964fcf2934a7.png"}}]);