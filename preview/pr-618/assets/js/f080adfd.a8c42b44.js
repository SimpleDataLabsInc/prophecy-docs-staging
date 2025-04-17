"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[5596],{12733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"Spark/functions/udfs","title":"User-defined functions","description":"User-defined functions","source":"@site/docs/Spark/functions/user-defined-functions.md","sourceDirName":"Spark/functions","slug":"/engineers/user-defined-functions","permalink":"/prophecy-docs-staging/preview/pr-618/engineers/user-defined-functions","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"extensibility","permalink":"/prophecy-docs-staging/preview/pr-618/tags/extensibility"},{"inline":true,"label":"udfs","permalink":"/prophecy-docs-staging/preview/pr-618/tags/udfs"},{"inline":true,"label":"udafs","permalink":"/prophecy-docs-staging/preview/pr-618/tags/udafs"},{"inline":true,"label":"SQL","permalink":"/prophecy-docs-staging/preview/pr-618/tags/sql"},{"inline":true,"label":"python","permalink":"/prophecy-docs-staging/preview/pr-618/tags/python"}],"version":"current","frontMatter":{"title":"User-defined functions","id":"udfs","slug":"/engineers/user-defined-functions","description":"User-defined functions","tags":["extensibility","udfs","udafs","SQL","python"]},"sidebar":"mySidebar","previous":{"title":"Business rules engine","permalink":"/prophecy-docs-staging/preview/pr-618/engineers/business-rules"},"next":{"title":"Spark Structured Streaming","permalink":"/prophecy-docs-staging/preview/pr-618/engineers/spark-streaming"}}');var s=n(74848),i=n(28453),a=n(65537),l=n(79329);const o={title:"User-defined functions",id:"udfs",slug:"/engineers/user-defined-functions",description:"User-defined functions",tags:["extensibility","udfs","udafs","SQL","python"]},c=void 0,d={},u=[{value:"Create UDFs",id:"create-udfs",level:2},{value:"Parameters",id:"parameters",level:3},{value:"How to Create UDFs",id:"how-to-create-udfs",level:3},{value:"Import UDFs",id:"import-udfs",level:2},{value:"How to Import UDFs",id:"how-to-import-udfs",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Prophecy lets you ",(0,s.jsx)(t.a,{href:"#create-udfs",children:"create"})," or ",(0,s.jsx)(t.a,{href:"#import-udfs",children:"import"})," user-defined functions (UDFs) which can be used anywhere in the pipeline. Prophecy supports creating UDFs written in Python/Scala and importing UDFs written in SQL."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Project Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Create UDFs"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Import UDFs"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Python"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Python/Scala"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"SQL"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Scala"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Python/Scala"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Not supported"})]})]})]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Learn about UDF support in Databricks on our documentation on cluster ",(0,s.jsx)(t.a,{href:"/administration/fabrics/Spark-fabrics/databricks/ucshared",children:"access modes"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"create-udfs",children:"Create UDFs"}),"\n",(0,s.jsx)(t.p,{children:"Prophecy supports creating UDFs written in Python or Scala."}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Required"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Function name"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The name of the function as it appears in your project."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"UDF Name"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The name of the UDF that will register it. All calls to the UDF will use this name."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Definition"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Definition of the UDF function. ",(0,s.jsx)("br",{})," For example, ",(0,s.jsx)(t.code,{children:"udf((value:Int)=>value*value)"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"UDF initialization code"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Code block that contains initialization of entities used by UDFs. This could, for example, contain any static mapping that a UDF might use."}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"False"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"how-to-create-udfs",children:"How to Create UDFs"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Create a new function. You can find the ",(0,s.jsx)(t.strong,{children:"Functions"})," section in the left sidebar of a project page."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Add a function to the pipeline",src:n(16634).A+"",width:"2620",height:"1508"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"Define the function."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Define the function",src:n(27592).A+"",width:"2620",height:"1508"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:"Call the function."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Call the function",src:n(41479).A+"",width:"2620",height:"1508"})}),"\n","\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(l.A,{value:"py",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-py",children:'country_code_map = {"Mexico" : "MX", "USA" : "US", "India" : "IN"}\n\ndef registerUDFs(spark: SparkSession):\n    spark.udf.register("get_country_code", get_country_code)\n\n@udf(returnType = StringType())\ndef get_country_code(country: str):\n    return country_code_map.get(country, "Not Found")\n'})})}),(0,s.jsx)(l.A,{value:"scala",label:"Scala",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-scala",children:'object UDFs extends Serializable {\n  val country_code_map = Map("Mexico" -> "MX", "USA" -> "US", "India" -> "IN")\n\n  def registerUDFs(spark: SparkSession) =\n    spark.udf.register("get_country_code", get_country_code)\n\n  def get_country_code =\n    udf { (country: String) =>\n      country_code_map.getOrElse(country, "Not Found")\n    }\n\n}\n'})})})]}),"\n",(0,s.jsx)(t.h2,{id:"import-udfs",children:"Import UDFs"}),"\n",(0,s.jsx)(t.p,{children:"SQL UDFs stored in Databricks Unity Catalog can be imported to Python projects and reused within any Gem."}),"\n",(0,s.jsx)(t.h3,{id:"how-to-import-udfs",children:"How to Import UDFs"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"From a Python Project, attach to a Databricks Spark cluster using a Fabric. Be sure the Fabric credentials allow access to the Databricks Catalog containing the desired SQL function(s)."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Open the Environment browser, and select the appropriate Catalog and Schema. The list of SQL functions appears in the Environment browser.\n",(0,s.jsx)(t.img,{alt:"img",src:n(20954).A+"",width:"2880",height:"786"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Call the SQL UDF from any Gem in the Project.\n",(0,s.jsx)(t.img,{alt:"img",src:n(57288).A+"",width:"2880",height:"754"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"If the Fabric is updated, click the list of functions inside the Environment browser. This will refresh to reflect the functions available according to the new Fabric's credentials."}),"\n"]}),"\n"]})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},16634:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/add-function-4db4256c36d145dbd2a5cd9cdd181ec2.png"},20954:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/sql-udf-25befa6583fc2f820cfc479a8c4ceb8b.png"},27592:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/define-function-68dfefe1259016cb154c88f65edc6ecf.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}},41479:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/call-function-bfaab9dfdb71a9bb151a99f58baa79fb.png"},57288:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/sql-call-function-a903ca9b686df4f1e517280b91ea120c.png"},65537:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),s=n(18215),i=n(65627),a=n(56347),l=n(50372),o=n(30604),c=n(11861),d=n(78749);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=h(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,u]=p({queryString:n,groupId:s}),[g,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,d.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),m=(()=>{const e=c??g;return f({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{m&&o(m)}),[m]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,i]),tabValues:i}}var x=n(9136);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),s=l[n].value;s!==r&&(c(t),a(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{o.push(e)},onKeyDown:u,onClick:d,...i,className:(0,s.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function v(e){const t=g(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,b.jsx)(y,{...t,...e}),(0,b.jsx)(j,{...t,...e})]})}function w(e){const t=(0,x.A)();return(0,b.jsx)(v,{...e,children:u(e.children)},String(t))}},79329:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(18215);const s={tabItem:"tabItem_Ymn6"};var i=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}}}]);