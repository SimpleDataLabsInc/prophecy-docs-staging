"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[64738],{28453:(e,a,r)=>{r.d(a,{R:()=>l,x:()=>i});var s=r(96540);const t={},n=s.createContext(t);function l(e){const a=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(n.Provider,{value:a},e.children)}},37281:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"Spark/gems/transform/reformat","title":"Reformat","description":"Select one or more columns or values using expressions and functions","source":"@site/docs/Spark/gems/transform/reformat.md","sourceDirName":"Spark/gems/transform","slug":"/Spark/gems/transform/reformat","permalink":"/prophecy-docs-staging/preview/pr-592/Spark/gems/transform/reformat","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-592/tags/gems"},{"inline":true,"label":"select","permalink":"/prophecy-docs-staging/preview/pr-592/tags/select"},{"inline":true,"label":"reformat","permalink":"/prophecy-docs-staging/preview/pr-592/tags/reformat"},{"inline":true,"label":"transform","permalink":"/prophecy-docs-staging/preview/pr-592/tags/transform"}],"version":"current","frontMatter":{"title":"Reformat","id":"reformat","description":"Select one or more columns or values using expressions and functions","tags":["gems","select","reformat","transform"]},"sidebar":"mySidebar","previous":{"title":"OrderBy","permalink":"/prophecy-docs-staging/preview/pr-592/Spark/gems/transform/order-by"},"next":{"title":"SampleRows","permalink":"/prophecy-docs-staging/preview/pr-592/Spark/gems/transform/sample-rows"}}');var t=r(74848),n=r(28453),l=r(49235),i=r(65537),o=r(79329);const c={title:"Reformat",id:"reformat",description:"Select one or more columns or values using expressions and functions",tags:["gems","select","reformat","transform"]},d=void 0,u={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Spark Code",id:"spark-code",level:2},{value:"Advanced Import",id:"advanced-import",level:2},{value:"Using Advanced Import",id:"using-advanced-import",level:3},{value:"Format",id:"format",level:3}];function h(e){const a={admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.0.1+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"3.0.1+"}),"\n",(0,t.jsx)(a.p,{children:"Transforms one or more column names or values by using expressions and/or functions. It's useful when we need to extract only the required columns or make changes column-wise."}),"\n",(0,t.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(a.th,{style:{textAlign:"left"},children:"Description"}),(0,t.jsx)(a.th,{style:{textAlign:"left"},children:"Required"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{style:{textAlign:"left"},children:"DataFrame"}),(0,t.jsx)(a.td,{style:{textAlign:"left"},children:"Input DataFrame on which changes are required"}),(0,t.jsx)(a.td,{style:{textAlign:"left"},children:"True"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{style:{textAlign:"left"},children:"Target column"}),(0,t.jsx)(a.td,{style:{textAlign:"left"},children:"Output column name"}),(0,t.jsx)(a.td,{style:{textAlign:"left"},children:"False"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{style:{textAlign:"left"},children:"Expression"}),(0,t.jsx)(a.td,{style:{textAlign:"left"},children:"Expression to compute target column"}),(0,t.jsxs)(a.td,{style:{textAlign:"left"},children:["Required if a ",(0,t.jsx)(a.code,{children:"Target column"})," is present"]})]})]})]}),"\n",(0,t.jsx)(a.admonition,{type:"info",children:(0,t.jsx)(a.p,{children:"If no columns are selected, then all columns are passed through to the output"})}),"\n",(0,t.jsx)(a.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Example usage of Reformat",src:r(51611).A+"",width:"1209",height:"724"})}),"\n",(0,t.jsx)(a.h2,{id:"spark-code",children:"Spark Code"}),"\n",(0,t.jsxs)(a.p,{children:["Reformat converts to a SQL ",(0,t.jsx)(a.code,{children:"Select"})," or in relational terms into a projection, unlike ",(0,t.jsx)(a.code,{children:"SchemaTransform"})," gem which uses underlying ",(0,t.jsx)(a.code,{children:"withColumn"})," construct"]}),"\n","\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(o.A,{value:"py",label:"Python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-py",children:'def Reformat(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    return in0.select(\n        col("id"),\n        col("email").alias("email_address"),\n        col("name"),\n        col("updated_at"),\n        concat_ws("$$$", col("address_line1"), col("address_line2"), col("postal_code"))\n            .alias("address_string")\n    )\n'})})}),(0,t.jsx)(o.A,{value:"scala",label:"Scala",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:'object Reformat {\n\n  def apply(spark: SparkSession, in: DataFrame): DataFrame =\n    in.select(\n      col("id"),\n      col("email").as("email_address"),\n      col("name"),\n      col("updated_at"),\n      expr("concat_ws(\'$$$\', address_line1, address_line2, postal_code)").as("address_string")\n    )\n }\n\n'})})})]}),"\n",(0,t.jsx)(a.h2,{id:"advanced-import",children:"Advanced Import"}),"\n",(0,t.jsxs)(a.p,{children:["The Advanced Import feature allows you to bulk import statements that are structured similarly to CSV/TSV files. This can be useful if you have your expressions/transformation logic in another format and just want to quickly configure a ",(0,t.jsx)(a.code,{children:"Reformat"})," gem based on this logic."]}),"\n",(0,t.jsx)(a.h3,{id:"using-advanced-import",children:"Using Advanced Import"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["Click the ",(0,t.jsx)(a.code,{children:"Advanced"})," button in the `Reformat UI"]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Advanced import toggle",src:r(45497).A+"",width:"2090",height:"1395"})}),"\n",(0,t.jsxs)(a.ol,{start:"2",children:["\n",(0,t.jsx)(a.li,{children:"Enter the expressions into the text area using the format as described below:"}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Advanced import mode",src:r(69858).A+"",width:"2618",height:"2026"})}),"\n",(0,t.jsxs)(a.ol,{start:"3",children:["\n",(0,t.jsxs)(a.li,{children:["Use the button at the top (labeled ",(0,t.jsx)(a.code,{children:"Expressions"}),") to switch back to the expressions view. This will translate the expressions from the CSV format to the table format and will show any errors detected."]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"format",children:"Format"}),"\n",(0,t.jsxs)(a.p,{children:["The format of these expressions is ",(0,t.jsx)(a.code,{children:"target_name,target_expr"}),", where ",(0,t.jsx)(a.code,{children:"target_name"})," is the desired new column name and ",(0,t.jsx)(a.code,{children:"target_expr"})," is the Spark expression that will be used to generate the new column."]}),"\n",(0,t.jsxs)(a.admonition,{type:"caution",children:[(0,t.jsxs)(a.p,{children:["For ",(0,t.jsx)(a.code,{children:"target_expr"})," values that contain a comma ",(0,t.jsx)(a.code,{children:","})," or span multiple lines, you must surround them by ",(0,t.jsx)(a.code,{children:"``"})," on either side. For example:"]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"customer_id,customer_id\nfull_name,``concat(first_name, ' ', last_name)``\n"})})]})]})}function m(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},45497:(e,a,r)=>{r.d(a,{A:()=>s});const s=r.p+"assets/images/reformat_advanced-c65c99761ced1311392e26c6c335bf7b.png"},49235:(e,a,r)=>{r.d(a,{A:()=>t});r(96540);var s=r(74848);function t(e){return(0,s.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/package-hub/",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:e.python_package_name}),(0,s.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/package-hub/",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:e.scala_package_name}),(0,s.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,s.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,s.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,s.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,s.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Livy"}),(0,s.jsx)("span",{className:"right",children:e.livy})]})}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]})}},51611:(e,a,r)=>{r.d(a,{A:()=>s});const s=r.p+"assets/images/reformat_eg_1-9a9344e1d3174c50427768400047df6c.png"},65537:(e,a,r)=>{r.d(a,{A:()=>_});var s=r(96540),t=r(18215),n=r(65627),l=r(56347),i=r(50372),o=r(30604),c=r(11861),d=r(78749);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:r}=e;return(0,s.useMemo)((()=>{const e=a??function(e){return u(e).map((e=>{let{props:{value:a,label:r,attributes:s,default:t}}=e;return{value:a,label:r,attributes:s,default:t}}))}(r);return function(e){const a=(0,c.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,r])}function h(e){let{value:a,tabValues:r}=e;return r.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:r}=e;const t=(0,l.W6)(),n=function(e){let{queryString:a=!1,groupId:r}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:a,groupId:r});return[(0,o.aZ)(n),(0,s.useCallback)((e=>{if(!n)return;const a=new URLSearchParams(t.location.search);a.set(n,e),t.replace({...t.location,search:a.toString()})}),[n,t])]}function f(e){const{defaultValue:a,queryString:r=!1,groupId:t}=e,n=p(e),[l,o]=(0,s.useState)((()=>function(e){let{defaultValue:a,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:a,tabValues:n}))),[c,u]=m({queryString:r,groupId:t}),[f,x]=function(e){let{groupId:a}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,n]=(0,d.Dv)(r);return[t,(0,s.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:t}),g=(()=>{const e=c??f;return h({value:e,tabValues:n})?e:null})();(0,i.A)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,n]),tabValues:n}}var x=r(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function j(e){let{className:a,block:r,selectedValue:s,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.a_)(),d=e=>{const a=e.currentTarget,r=o.indexOf(a),t=i[r].value;t!==s&&(c(a),l(t))},u=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;a=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;a=o[r]??o[o.length-1];break}}a?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},a),children:i.map((e=>{let{value:a,label:r,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,ref:e=>{o.push(e)},onKeyDown:u,onClick:d,...n,className:(0,t.A)("tabs__item",g.tabItem,n?.className,{"tabs__item--active":s===a}),children:r??a},a)}))})}function v(e){let{lazy:a,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==n})))})}function y(e){const a=f(e);return(0,b.jsxs)("div",{className:(0,t.A)("tabs-container",g.tabList),children:[(0,b.jsx)(j,{...a,...e}),(0,b.jsx)(v,{...a,...e})]})}function _(e){const a=(0,x.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(a))}},69858:(e,a,r)=>{r.d(a,{A:()=>s});const s=r.p+"assets/images/reformat_advanced_2-c906ca7673c85cf3c013bdd6923d471b.png"},79329:(e,a,r)=>{r.d(a,{A:()=>l});r(96540);var s=r(18215);const t={tabItem:"tabItem_Ymn6"};var n=r(74848);function l(e){let{children:a,hidden:r,className:l}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,l),hidden:r,children:a})}}}]);