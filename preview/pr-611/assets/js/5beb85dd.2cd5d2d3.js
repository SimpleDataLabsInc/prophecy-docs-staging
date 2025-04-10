"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[14334],{28453:(e,a,r)=>{r.d(a,{R:()=>s,x:()=>l});var t=r(96540);const n={},i=t.createContext(n);function s(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(i.Provider,{value:a},e.children)}},49235:(e,a,r)=>{r.d(a,{A:()=>n});r(96540);var t=r(74848);function n(e){return(0,t.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.python_package_name}),(0,t.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.scala_package_name}),(0,t.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,t.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,t.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,t.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,t.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Livy"}),(0,t.jsx)("span",{className:"right",children:e.livy})]})}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]})}},65537:(e,a,r)=>{r.d(a,{A:()=>k});var t=r(96540),n=r(18215),i=r(65627),s=r(56347),l=r(50372),c=r(30604),o=r(11861),d=r(78749);function p(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:a,children:r}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return p(e).map((e=>{let{props:{value:a,label:r,attributes:t,default:n}}=e;return{value:a,label:r,attributes:t,default:n}}))}(r);return function(e){const a=(0,o.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,r])}function u(e){let{value:a,tabValues:r}=e;return r.some((e=>e.value===a))}function x(e){let{queryString:a=!1,groupId:r}=e;const n=(0,s.W6)(),i=function(e){let{queryString:a=!1,groupId:r}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:a,groupId:r});return[(0,c.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const a=new URLSearchParams(n.location.search);a.set(i,e),n.replace({...n.location,search:a.toString()})}),[i,n])]}function m(e){const{defaultValue:a,queryString:r=!1,groupId:n}=e,i=h(e),[s,c]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!u({value:a,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:i}))),[o,p]=x({queryString:r,groupId:n}),[m,g]=function(e){let{groupId:a}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,i]=(0,d.Dv)(r);return[n,(0,t.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:n}),j=(()=>{const e=o??m;return u({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{j&&c(j)}),[j]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),p(e),g(e)}),[p,g,i]),tabValues:i}}var g=r(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function b(e){let{className:a,block:r,selectedValue:t,selectValue:s,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),d=e=>{const a=e.currentTarget,r=c.indexOf(a),n=l[r].value;n!==t&&(o(a),s(n))},p=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;a=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;a=c[r]??c[c.length-1];break}}a?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},a),children:l.map((e=>{let{value:a,label:r,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>{c.push(e)},onKeyDown:p,onClick:d,...i,className:(0,n.A)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":t===a}),children:r??a},a)}))})}function y(e){let{lazy:a,children:r,selectedValue:i}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(a){const e=s.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==i})))})}function v(e){const a=m(e);return(0,f.jsxs)("div",{className:(0,n.A)("tabs-container",j.tabList),children:[(0,f.jsx)(b,{...a,...e}),(0,f.jsx)(y,{...a,...e})]})}function k(e){const a=(0,g.A)();return(0,f.jsx)(v,{...e,children:p(e.children)},String(a))}},79329:(e,a,r)=>{r.d(a,{A:()=>s});r(96540);var t=r(18215);const n={tabItem:"tabItem_Ymn6"};var i=r(74848);function s(e){let{children:a,hidden:r,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(n.tabItem,s),hidden:r,children:a})}},97963:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>p,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"Spark/gems/join-split/Repartition","title":"Repartition","description":"Repartition or coalesce a DataFrame","source":"@site/docs/Spark/gems/join-split/repartition.md","sourceDirName":"Spark/gems/join-split","slug":"/engineers/repartition","permalink":"/prophecy-docs-staging/preview/pr-611/engineers/repartition","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-611/tags/gems"},{"inline":true,"label":"join-split","permalink":"/prophecy-docs-staging/preview/pr-611/tags/join-split"},{"inline":true,"label":"partition","permalink":"/prophecy-docs-staging/preview/pr-611/tags/partition"},{"inline":true,"label":"repartition","permalink":"/prophecy-docs-staging/preview/pr-611/tags/repartition"},{"inline":true,"label":"coalesce","permalink":"/prophecy-docs-staging/preview/pr-611/tags/coalesce"}],"version":"current","frontMatter":{"title":"Repartition","id":"Repartition","slug":"/engineers/repartition","description":"Repartition or coalesce a DataFrame","tags":["gems","join-split","partition","repartition","coalesce"]},"sidebar":"mySidebar","previous":{"title":"Join","permalink":"/prophecy-docs-staging/preview/pr-611/engineers/join"},"next":{"title":"RowDistributor","permalink":"/prophecy-docs-staging/preview/pr-611/engineers/row-distributor"}}');var n=r(74848),i=r(28453),s=r(49235),l=r(65537),c=r(79329);const o={title:"Repartition",id:"Repartition",slug:"/engineers/repartition",description:"Repartition or coalesce a DataFrame",tags:["gems","join-split","partition","repartition","coalesce"]},d=void 0,p={},h=[{value:"Hash Repartitoning",id:"hash-repartitoning",level:2},{value:"Parameters",id:"hash-repartitoning",level:3},{value:"Compiled code",id:"hash-repartitoning",level:3},{value:"Random Repartitioning",id:"random-repartitioning",level:2},{value:"Parameters",id:"random-repartitioning",level:3},{value:"Compiled code",id:"random-repartitioning",level:3},{value:"Range Repartitoning",id:"range-repartitoning",level:2},{value:"Parameters",id:"range-repartitoning",level:3},{value:"Compiled code",id:"range-repartitoning",level:3},{value:"Coalesce",id:"coalesce",level:2},{value:"Parameters",id:"coalesce",level:3},{value:"Compiled code",id:"coalesce",level:3},{value:"Video demo",id:"video-demo",level:2}];function u(e){const a={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.0.1+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"3.0.1+"}),"\n",(0,n.jsx)(a.p,{children:"This will repartition or coalesce the input DataFrame based on the specified configuration. There are four different repartitioning options:"}),"\n",(0,n.jsx)(a.h2,{id:"hash-repartitoning",children:"Hash Repartitoning"}),"\n",(0,n.jsx)(a.p,{children:"Repartitions the data evenly across various partitions based on the hash value of the specified key."}),"\n",(0,n.jsx)(a.h3,{id:"hash-repartitoning",children:"Parameters"}),"\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Parameter"}),(0,n.jsx)(a.th,{children:"Description"}),(0,n.jsx)(a.th,{children:"Required"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"DataFrame"}),(0,n.jsx)(a.td,{children:"Input DataFrame"}),(0,n.jsx)(a.td,{children:"True"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Overwrite default partitions"}),(0,n.jsx)(a.td,{children:"Flag to overwrite default partitions"}),(0,n.jsx)(a.td,{children:"False"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Number of partitions"}),(0,n.jsx)(a.td,{children:"Integer value specifying number of partitions"}),(0,n.jsx)(a.td,{children:"False"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Repartition expression(s)"}),(0,n.jsx)(a.td,{children:"List of expressions to repartition by"}),(0,n.jsx)(a.td,{children:"True"})]})]})]}),"\n",(0,n.jsx)(a.h3,{id:"hash-repartitoning",children:"Compiled code"}),"\n","\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(c.A,{value:"py",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-py",children:'def hashRepartition(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    return in0.repartition(5, col("customer_id"))\n'})})}),(0,n.jsx)(c.A,{value:"scala",label:"Scala",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-scala",children:'object hashRepartition {\n\n  def apply(spark: SparkSession, in: DataFrame): DataFrame =\n    in.repartition(5, col("customer_id"))\n\n}\n'})})})]}),"\n",(0,n.jsx)(a.h2,{id:"random-repartitioning",children:"Random Repartitioning"}),"\n",(0,n.jsx)(a.p,{children:"Repartitions without data distribution defined."}),"\n",(0,n.jsx)(a.h3,{id:"random-repartitioning",children:"Parameters"}),"\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(a.th,{style:{textAlign:"left"},children:"Description"}),(0,n.jsx)(a.th,{style:{textAlign:"left"},children:"Required"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{style:{textAlign:"left"},children:"DataFrame"}),(0,n.jsx)(a.td,{style:{textAlign:"left"},children:"Input DataFrame"}),(0,n.jsx)(a.td,{style:{textAlign:"left"},children:"True"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{style:{textAlign:"left"},children:"Number of partitions"}),(0,n.jsx)(a.td,{style:{textAlign:"left"},children:"Integer value specifying number of partitions"}),(0,n.jsx)(a.td,{style:{textAlign:"left"},children:"True"})]})]})]}),"\n",(0,n.jsx)(a.h3,{id:"random-repartitioning",children:"Compiled code"}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(c.A,{value:"py",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-py",children:"def randomRepartition(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    return in0.repartition(5)\n"})})}),(0,n.jsx)(c.A,{value:"scala",label:"Scala",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-scala",children:"object randomRepartition {\n\n  def apply(spark: SparkSession, in: DataFrame): DataFrame =\n    in.repartition(5)\n\n}\n"})})})]}),"\n",(0,n.jsx)(a.h2,{id:"range-repartitoning",children:"Range Repartitoning"}),"\n",(0,n.jsx)(a.p,{children:"Repartitions the data with tuples having keys within the same range on the same worker."}),"\n",(0,n.jsx)(a.h3,{id:"range-repartitoning",children:"Parameters"}),"\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Parameter"}),(0,n.jsx)(a.th,{children:"Description"}),(0,n.jsx)(a.th,{children:"Required"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"DataFrame"}),(0,n.jsx)(a.td,{children:"Input DataFrame"}),(0,n.jsx)(a.td,{children:"True"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Overwrite default partitions"}),(0,n.jsx)(a.td,{children:"Flag to overwrite default partitions"}),(0,n.jsx)(a.td,{children:"False"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Number of partitions"}),(0,n.jsx)(a.td,{children:"Integer value specifying number of partitions"}),(0,n.jsx)(a.td,{children:"False"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Repartition expression(s) with sorting"}),(0,n.jsx)(a.td,{children:"List of expressions to repartition by with corresponding sorting order"}),(0,n.jsx)(a.td,{children:"True"})]})]})]}),"\n",(0,n.jsx)(a.h3,{id:"range-repartitoning",children:"Compiled code"}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(c.A,{value:"py",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-py",children:'def RepartitionByRange(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    return in0.repartitionByRange(5, col("customer_id").asc())\n'})})}),(0,n.jsx)(c.A,{value:"scala",label:"Scala",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-scala",children:'object RepartitionByRange {\n\n  def apply(spark: SparkSession, in: DataFrame): DataFrame =\n    in.repartitionByRange(5, col("customer_id").asc())\n\n}\n'})})})]}),"\n",(0,n.jsx)(a.h2,{id:"coalesce",children:"Coalesce"}),"\n",(0,n.jsx)(a.p,{children:"Reduces the number of partitions without shuffling the dataset."}),"\n",(0,n.jsx)(a.h3,{id:"coalesce",children:"Parameters"}),"\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(a.th,{style:{textAlign:"left"},children:"Description"}),(0,n.jsx)(a.th,{style:{textAlign:"left"},children:"Required"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{style:{textAlign:"left"},children:"DataFrame"}),(0,n.jsx)(a.td,{style:{textAlign:"left"},children:"Input DataFrame"}),(0,n.jsx)(a.td,{style:{textAlign:"left"},children:"True"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{style:{textAlign:"left"},children:"Number of partitions"}),(0,n.jsx)(a.td,{style:{textAlign:"left"},children:"Integer value specifying number of partitions"}),(0,n.jsx)(a.td,{style:{textAlign:"left"},children:"True"})]})]})]}),"\n",(0,n.jsx)(a.h3,{id:"coalesce",children:"Compiled code"}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(c.A,{value:"py",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-py",children:"def Coalesce(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    return in0.coalesce(5)\n"})})}),(0,n.jsx)(c.A,{value:"scala",label:"Scala",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-scala",children:"object Coalesce {\n\n  def apply(spark: SparkSession, in: DataFrame): DataFrame =\n    in.coalesce(5)\n\n}\n"})})})]}),"\n",(0,n.jsx)(a.h2,{id:"video-demo",children:"Video demo"}),"\n",(0,n.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,n.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,n.jsx)("iframe",{src:"https://user-images.githubusercontent.com/103921419/174014498-277e1037-8634-4752-a4f1-e0e1aae66659.mp4",title:"Repartition",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})})]})}function x(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}}}]);