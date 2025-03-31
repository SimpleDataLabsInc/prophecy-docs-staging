"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[34910],{10582:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"Spark/gems/transform/dynamic-replace","title":"DynamicReplace","description":"Dynamically generate values depending on certain conditions","source":"@site/docs/Spark/gems/transform/dynamic-replace.md","sourceDirName":"Spark/gems/transform","slug":"/Spark/gems/transform/dynamic-replace","permalink":"/prophecy-docs-staging/preview/pr-594/Spark/gems/transform/dynamic-replace","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-594/tags/gems"},{"inline":true,"label":"transform","permalink":"/prophecy-docs-staging/preview/pr-594/tags/transform"}],"version":"current","frontMatter":{"title":"DynamicReplace","id":"dynamic-replace","description":"Dynamically generate values depending on certain conditions","tags":["gems","transform"]},"sidebar":"mySidebar","previous":{"title":"Deduplicate","permalink":"/prophecy-docs-staging/preview/pr-594/Spark/gems/transform/deduplicate"},"next":{"title":"DynamicSelect","permalink":"/prophecy-docs-staging/preview/pr-594/Spark/gems/transform/dynamic-select"}}');var r=a(74848),t=a(28453),i=a(49235),l=a(65537),c=a(79329);const o={title:"DynamicReplace",id:"dynamic-replace",description:"Dynamically generate values depending on certain conditions",tags:["gems","transform"]},d=void 0,h={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Define datasets",id:"define-datasets",level:3},{value:"Configure the gem",id:"configure-the-gem",level:3},{value:"Example code",id:"example-code",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{python_package_name:"",python_package_version:"",scala_package_name:"",scala_package_version:"",scala_lib:"",python_lib:"",uc_single:"Not Supported",uc_shared:"Not Supported",livy:"Not Supported"}),"\n",(0,r.jsx)(n.p,{children:"Use the DynamicReplace gem to replace a set of values with dynamically generated values depending on certain conditions."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["If you want to create new columns based on a set of conditions (rather than perform in-place replacement), you can use ",(0,r.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-594/Spark/functions/business-rules-engine/",children:"business rules"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Field Name Field"}),(0,r.jsxs)(n.td,{children:["Column from ",(0,r.jsx)(n.strong,{children:"in1"})," that contains field names from ",(0,r.jsx)(n.strong,{children:"in0"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Boolean Expression Field"}),(0,r.jsxs)(n.td,{children:["Column from ",(0,r.jsx)(n.strong,{children:"in1"})," that contains an expression that is used to evaluate the data from ",(0,r.jsx)(n.strong,{children:"in0"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Output Value Field"}),(0,r.jsxs)(n.td,{children:["Column from ",(0,r.jsx)(n.strong,{children:"in1"})," that contains replacement data. It can contain static values or expressions that act on the data from ",(0,r.jsx)(n.strong,{children:"in0"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Values are Expressions"}),(0,r.jsx)(n.td,{children:"Checkbox to enable if the Output Value column contains expressions to define the replacement value."})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["If a value does not meet a condition, then it will be replaced with a ",(0,r.jsx)(n.strong,{children:"null"})," value."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Expressions must be in Spark SQL format."})}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"If you have a dataset with a numeric column and need to apply an upper limit to its values dynamically, you can use the DynamicReplace gem. In this example, any value in a certain column over 200,000 (like 250,000) will be replaced with the value 200,000."}),"\n",(0,r.jsx)(n.h3,{id:"define-datasets",children:"Define datasets"}),"\n",(0,r.jsx)(n.p,{children:"The DynamicReplace gem requires two inputs. These are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"original dataset"}),". This contains the target column(s) for replacement and is the ",(0,r.jsx)(n.strong,{children:"in0"})," of the DynamicReplace gem."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"parameters dataset"}),". This contains the dynamic replacement parameters and is the ",(0,r.jsx)(n.strong,{children:"in1"})," of the DynamicReplace gem."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The parameters dataset must follow a specific format to define how values should be replaced. Below is an example parameters table:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"original_column"}),(0,r.jsx)(n.th,{children:"condition"}),(0,r.jsx)(n.th,{children:"output_value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sales"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"sales > 200000"})}),(0,r.jsx)(n.td,{children:"200000"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sales"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"sales <= 200000"})}),(0,r.jsx)(n.td,{children:"sales"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Each row represents a condition that will be applied to a certain column. In this case, these conditions are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If the value of a sale is more than 200,000, it is replaced with 200,000."}),"\n",(0,r.jsx)(n.li,{children:"If the value of a sale is less than or equal to 200,000, it remains unchanged."}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"You can also add conditions for multiple columns in this parameters dataset if required by your use case."})}),"\n",(0,r.jsx)(n.h3,{id:"configure-the-gem",children:"Configure the gem"}),"\n",(0,r.jsx)(n.p,{children:"Once you have both datasets in your pipeline:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Add a DynamicReplace gem to the pipeline canvas."}),"\n",(0,r.jsx)(n.li,{children:"Connect the inputs to the DynamicReplace gem."}),"\n",(0,r.jsx)(n.li,{children:"Configure the DynamicReplace gem."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For this example, you would configure the gem using the following values:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Field Name Field"}),(0,r.jsx)(n.td,{children:"original_column"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Boolean Expression Field"}),(0,r.jsx)(n.td,{children:"condition"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Output Value Field"}),(0,r.jsx)(n.td,{children:"output_value"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Values are Expressions"}),(0,r.jsx)(n.td,{children:"enabled"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"example-code",children:"Example code"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["To see the generated source code of your project, ",(0,r.jsx)(n.a,{href:"/engineers/project-lifecycle/#review-the-code",children:"switch to the Code view"})," in the project header."]})}),"\n","\n",(0,r.jsx)(l.A,{children:(0,r.jsx)(c.A,{value:"py",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'def dynamic_replace_expression(spark: SparkSession, in0: DataFrame, in1: DataFrame) -> DataFrame:\n    from prophecy.utils import ProphecyDataFrame\n\n    return ProphecyDataFrame(in0, spark)\\\n        .dynamicReplaceExpr(in1.withColumn("__rowId", monotonically_increasing_id().cast("integer"))._jdf, "__rowId", "source_column", "condition", "output_value", spark)\n'})})})})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>l});var s=a(96540);const r={},t=s.createContext(r);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:n},e.children)}},49235:(e,n,a)=>{a.d(n,{A:()=>r});a(96540);var s=a(74848);function r(e){return(0,s.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/package-hub/",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:e.python_package_name}),(0,s.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/package-hub/",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:e.scala_package_name}),(0,s.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,s.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,s.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,s.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,s.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Livy"}),(0,s.jsx)("span",{className:"right",children:e.livy})]})}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]})}},65537:(e,n,a)=>{a.d(n,{A:()=>_});var s=a(96540),r=a(18215),t=a(65627),i=a(56347),l=a(50372),c=a(30604),o=a(11861),d=a(78749);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:a}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:a,attributes:s,default:r}}=e;return{value:n,label:a,attributes:s,default:r}}))}(a);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const r=(0,i.W6)(),t=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,c.aZ)(t),(0,s.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(r.location.search);n.set(t,e),r.replace({...r.location,search:n.toString()})}),[t,r])]}function x(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,t=u(e),[i,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=a.find((e=>e.default))??a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:t}))),[o,h]=m({queryString:a,groupId:r}),[x,f]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,t]=(0,d.Dv)(a);return[r,(0,s.useCallback)((e=>{a&&t.set(e)}),[a,t])]}({groupId:r}),j=(()=>{const e=o??x;return p({value:e,tabValues:t})?e:null})();(0,l.A)((()=>{j&&c(j)}),[j]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),f(e)}),[h,f,t]),tabValues:t}}var f=a(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(74848);function y(e){let{className:n,block:a,selectedValue:s,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.a_)(),d=e=>{const n=e.currentTarget,a=c.indexOf(n),r=l[a].value;r!==s&&(o(n),i(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:l.map((e=>{let{value:n,label:a,attributes:t}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>{c.push(e)},onKeyDown:h,onClick:d,...t,className:(0,r.A)("tabs__item",j.tabItem,t?.className,{"tabs__item--active":s===n}),children:a??n},n)}))})}function b(e){let{lazy:n,children:a,selectedValue:t}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function v(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,g.jsx)(y,{...n,...e}),(0,g.jsx)(b,{...n,...e})]})}function _(e){const n=(0,f.A)();return(0,g.jsx)(v,{...e,children:h(e.children)},String(n))}},79329:(e,n,a)=>{a.d(n,{A:()=>i});a(96540);var s=a(18215);const r={tabItem:"tabItem_Ymn6"};var t=a(74848);function i(e){let{children:n,hidden:a,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:a,children:n})}}}]);