"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[59486],{28453:(e,r,a)=>{a.d(r,{R:()=>l,x:()=>i});var s=a(96540);const n={},t=s.createContext(n);function l(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(t.Provider,{value:r},e.children)}},30348:(e,r,a)=>{a.d(r,{A:()=>s});const s=a.p+"assets/images/new-output-struct-3ce5e9c0d51e7c9aa09b4c45cb8bf45c.png"},47132:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"Spark/gems/transform/column-parser","title":"ColumnParser","description":"Parse XML or JSON inside a table","source":"@site/docs/Spark/gems/transform/column-parser.md","sourceDirName":"Spark/gems/transform","slug":"/engineers/column-parser","permalink":"/prophecy-docs-staging/preview/pr-615/engineers/column-parser","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-615/tags/gems"},{"inline":true,"label":"transform","permalink":"/prophecy-docs-staging/preview/pr-615/tags/transform"},{"inline":true,"label":"parse","permalink":"/prophecy-docs-staging/preview/pr-615/tags/parse"}],"version":"current","frontMatter":{"title":"ColumnParser","id":"column-parser","slug":"/engineers/column-parser","description":"Parse XML or JSON inside a table","tags":["gems","transform","parse"]},"sidebar":"mySidebar","previous":{"title":"BulkColumnRename","permalink":"/prophecy-docs-staging/preview/pr-615/engineers/bulk-column-rename"},"next":{"title":"DataCleansing","permalink":"/prophecy-docs-staging/preview/pr-615/engineers/data-cleansing"}}');var n=a(74848),t=a(28453),l=a(49235),i=a(65537),c=a(79329);const o={title:"ColumnParser",id:"column-parser",slug:"/engineers/column-parser",description:"Parse XML or JSON inside a table",tags:["gems","transform","parse"]},u=void 0,d={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Output",id:"output",level:2},{value:"Example code",id:"example-code",level:2}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.2.27+",scala_package_name:"",scala_package_version:"",scala_lib:"8.2.1",python_lib:"1.9.16",uc_single:"14.3+",uc_shared:"14.3+",livy:"Not Supported"}),"\n",(0,n.jsx)(r.p,{children:"The ColumnParser lets you parse XML or JSON that is included in a column of your table."}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Source Column Name"}),(0,n.jsx)(r.td,{children:"The name of the column that contains the XML or JSON records."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Parser Type"}),(0,n.jsx)(r.td,{children:"The format that you want to be parsed (XML or JSON)."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Parsing Method"}),(0,n.jsx)(r.td,{children:"The method that Prophecy will use to generate the schema of the output."})]})]})]}),"\n",(0,n.jsx)(r.p,{children:"When you select a parsing method, you have three options:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Parse automatically."})," Prophecy infers the schema by reading the first 40 records."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Parse from sample record."})," Prophecy uses the schema that you provide in the sample record."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Parse from schema."})," Prophecy uses the schema that you provide in the form of a schema struct."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"output",children:"Output"}),"\n",(0,n.jsxs)(r.p,{children:["The schema of the ColumnParser gem output includes the parsed content as a ",(0,n.jsx)(r.strong,{children:"struct"})," data type, in addition to all of the input columns."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"New output struct",src:a(30348).A+"",width:"2620",height:"1508"})}),"\n",(0,n.jsx)(r.h2,{id:"example-code",children:"Example code"}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsxs)(r.p,{children:["To see the compiled code of your project, ",(0,n.jsx)(r.a,{href:"/engineers/pipelines#project-editor",children:"switch to the Code view"})," in the project header."]})}),"\n",(0,n.jsx)(r.p,{children:"This example shows the code to parse XML."}),"\n","\n",(0,n.jsx)(i.A,{children:(0,n.jsx)(c.A,{value:"py",label:"Python",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-py",children:'def xml_column_parser(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    from prophecy.libs.utils import xml_parse\n\n    return xml_parse(in0, "XML", "parseAuto", None, None)\n'})})})})]})}function m(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},49235:(e,r,a)=>{a.d(r,{A:()=>n});a(96540);var s=a(74848);function n(e){return(0,s.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:e.python_package_name}),(0,s.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:e.scala_package_name}),(0,s.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,s.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,s.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,s.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,s.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Livy"}),(0,s.jsx)("span",{className:"right",children:e.livy})]})}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]})}},65537:(e,r,a)=>{a.d(r,{A:()=>k});var s=a(96540),n=a(18215),t=a(65627),l=a(56347),i=a(50372),c=a(30604),o=a(11861),u=a(78749);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:a}=e;return(0,s.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:a,attributes:s,default:n}}=e;return{value:r,label:a,attributes:s,default:n}}))}(a);return function(e){const r=(0,o.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,a])}function h(e){let{value:r,tabValues:a}=e;return a.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:a}=e;const n=(0,l.W6)(),t=function(e){let{queryString:r=!1,groupId:a}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:r,groupId:a});return[(0,c.aZ)(t),(0,s.useCallback)((e=>{if(!t)return;const r=new URLSearchParams(n.location.search);r.set(t,e),n.replace({...n.location,search:r.toString()})}),[t,n])]}function g(e){const{defaultValue:r,queryString:a=!1,groupId:n}=e,t=p(e),[l,c]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=a.find((e=>e.default))??a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:t}))),[o,d]=m({queryString:a,groupId:n}),[g,b]=function(e){let{groupId:r}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,t]=(0,u.Dv)(a);return[n,(0,s.useCallback)((e=>{a&&t.set(e)}),[a,t])]}({groupId:n}),f=(()=>{const e=o??g;return h({value:e,tabValues:t})?e:null})();(0,i.A)((()=>{f&&c(f)}),[f]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),b(e)}),[d,b,t]),tabValues:t}}var b=a(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=a(74848);function y(e){let{className:r,block:a,selectedValue:s,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.a_)(),u=e=>{const r=e.currentTarget,a=c.indexOf(r),n=i[a].value;n!==s&&(o(r),l(n))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;r=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;r=c[a]??c[c.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},r),children:i.map((e=>{let{value:r,label:a,attributes:t}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>{c.push(e)},onKeyDown:d,onClick:u,...t,className:(0,n.A)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":s===r}),children:a??r},r)}))})}function j(e){let{lazy:r,children:a,selectedValue:t}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==t})))})}function v(e){const r=g(e);return(0,x.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,x.jsx)(y,{...r,...e}),(0,x.jsx)(j,{...r,...e})]})}function k(e){const r=(0,b.A)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(r))}},79329:(e,r,a)=>{a.d(r,{A:()=>l});a(96540);var s=a(18215);const n={tabItem:"tabItem_Ymn6"};var t=a(74848);function l(e){let{children:r,hidden:a,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,l),hidden:a,children:r})}}}]);