"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[49709],{28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>c});var r=a(96540);const n={},s=r.createContext(n);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:t},e.children)}},49235:(e,t,a)=>{a.d(t,{A:()=>n});a(96540);var r=a(74848);function n(e){return(0,r.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/extensibility/package-hub/",children:(0,r.jsxs)("span",{className:"badge-dependency",children:[(0,r.jsx)("span",{className:"left",children:e.python_package_name}),(0,r.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/extensibility/package-hub/",children:(0,r.jsxs)("span",{className:"badge-dependency",children:[(0,r.jsx)("span",{className:"left",children:e.scala_package_name}),(0,r.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,r.jsxs)("span",{className:"badge-dependency",children:[(0,r.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,r.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,r.jsxs)("span",{className:"badge-dependency",children:[(0,r.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,r.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,r.jsxs)("span",{className:"badge-spark",children:[(0,r.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,r.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,r.jsxs)("span",{className:"badge-spark",children:[(0,r.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,r.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,r.jsxs)("span",{className:"badge-spark",children:[(0,r.jsx)("span",{className:"left",children:"Livy"}),(0,r.jsx)("span",{className:"right",children:e.livy})]})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]})}},54039:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"Spark/gems/transform/fuzzy-match","title":"FuzzyMatch","description":"Identify non-identical duplicates in your data","source":"@site/docs/Spark/gems/transform/fuzzy-match.md","sourceDirName":"Spark/gems/transform","slug":"/Spark/gems/transform/fuzzy-match","permalink":"/prophecy-docs-staging/preview/pr-596/Spark/gems/transform/fuzzy-match","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-596/tags/gems"},{"inline":true,"label":"fuzzy match","permalink":"/prophecy-docs-staging/preview/pr-596/tags/fuzzy-match"}],"version":"current","frontMatter":{"title":"FuzzyMatch","id":"fuzzy-match","description":"Identify non-identical duplicates in your data","tags":["gems","fuzzy match"]},"sidebar":"mySidebar","previous":{"title":"FlattenSchema","permalink":"/prophecy-docs-staging/preview/pr-596/Spark/gems/transform/flatten-schema"},"next":{"title":"Limit","permalink":"/prophecy-docs-staging/preview/pr-596/Spark/gems/transform/limit"}}');var n=a(74848),s=a(28453),i=a(49235),c=a(65537),l=a(79329);const o={title:"FuzzyMatch",id:"fuzzy-match",description:"Identify non-identical duplicates in your data",tags:["gems","fuzzy match"]},d=void 0,h={},u=[{value:"Input and Output",id:"input-and-output",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Example code",id:"example-code",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{python_package_name:"",python_package_version:"",scala_package_name:"",scala_package_version:"",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"Not Supported",livy:"Not Supported"}),"\n",(0,n.jsx)(t.p,{children:"Use the FuzzyMatch gem to identify non-identical duplicates in your data."}),"\n",(0,n.jsx)(t.h2,{id:"input-and-output",children:"Input and Output"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"DataFrame"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"in0"})}),(0,n.jsx)(t.td,{children:"Includes the DataFrame on which duplicates will be checked."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"out"})}),(0,n.jsx)(t.td,{children:"Generates one record per fuzzy match."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Tab"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Merge/Purge Mode"}),(0,n.jsx)(t.td,{children:"Configuration"}),(0,n.jsx)(t.td,{children:"Records are either compared from a single source (Purge) or across multiple sources (Merge)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Source ID Field"}),(0,n.jsx)(t.td,{children:"Configuration"}),(0,n.jsxs)(t.td,{children:["Unique identifier for each source when using ",(0,n.jsx)(t.strong,{children:"Merge"})," mode."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Record ID Field"}),(0,n.jsx)(t.td,{children:"Configuration"}),(0,n.jsx)(t.td,{children:"Unique identifier for each record."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Match threshold percentage"}),(0,n.jsx)(t.td,{children:"Configuration"}),(0,n.jsx)(t.td,{children:"If the match score is less than the threshold, the record does not qualify as a match."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Include similarity score"}),(0,n.jsx)(t.td,{children:"Configuration"}),(0,n.jsx)(t.td,{children:"Checkbox to enable for an additional output column that includes the similarity score."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Field name"}),(0,n.jsx)(t.td,{children:"Match Fields"}),(0,n.jsx)(t.td,{children:"Name of the column that you want to check for duplicates."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Match function"}),(0,n.jsx)(t.td,{children:"Match Fields"}),(0,n.jsx)(t.td,{children:"The method that generates the similarity score."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.p,{children:"One common use case for the FuzzyMatch gem is to match similarly spelled names. This can be useful for identifying accidentally misspelled names."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Create a FuzzyMatch gem and use the ",(0,n.jsx)(t.strong,{children:"customer_id"})," as the Record ID. Then, add a match field for the ",(0,n.jsx)(t.strong,{children:"first_name"})," column."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"FuzzyMatch names",src:a(81326).A+"",width:"2620",height:"1508"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Run the gem and see that the output includes the Record IDs of the records with fuzzy matches."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"FuzzyMatch output",src:a(81754).A+"",width:"2620",height:"1508"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Join the output with the original dataset to view the matched names."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"FuzzyMatch joined",src:a(67057).A+"",width:"2620",height:"1508"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"example-code",children:"Example code"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["To see the generated source code of your project, ",(0,n.jsx)(t.a,{href:"/engineers/project-lifecycle/#review-the-code",children:"switch to the Code view"})," in the project header."]})}),"\n","\n",(0,n.jsx)(c.A,{children:(0,n.jsx)(l.A,{value:"py",label:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-py",children:'def fuzzy_match_customers(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    from prophecy.utils.transpiler.dataframe_fcns import fuzzyPurgeMode\n\n    return fuzzyPurgeMode(\n        in0,\n        spark,\n        recordId = "customer_id",\n        matchFields = {"first_name" : "name"},\n        threshold = 0.8,\n        includeSimilarityScore = True\n    )\n'})})})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},65537:(e,t,a)=>{a.d(t,{A:()=>k});var r=a(96540),n=a(18215),s=a(65627),i=a(56347),c=a(50372),l=a(30604),o=a(11861),d=a(78749);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=u(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[o,h]=m({queryString:a,groupId:n}),[f,x]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,d.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),g=(()=>{const e=o??f;return p({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),x(e)}),[h,x,s]),tabValues:s}}var x=a(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=a(74848);function b(e){let{className:t,block:a,selectedValue:r,selectValue:i,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),d=e=>{const t=e.currentTarget,a=l.indexOf(t),n=c[a].value;n!==r&&(o(t),i(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:c.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{l.push(e)},onKeyDown:h,onClick:d,...s,className:(0,n.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function y(e){let{lazy:t,children:a,selectedValue:s}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=f(e);return(0,j.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,j.jsx)(b,{...t,...e}),(0,j.jsx)(y,{...t,...e})]})}function k(e){const t=(0,x.A)();return(0,j.jsx)(v,{...e,children:h(e.children)},String(t))}},67057:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/fuzzy-match-join-9686d0d9cb51575484b9d7bb8d97eb9a.png"},79329:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var r=a(18215);const n={tabItem:"tabItem_Ymn6"};var s=a(74848);function i(e){let{children:t,hidden:a,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,i),hidden:a,children:t})}},81326:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/fuzzy-match-fields-55f10c33a6b6bd7f6a3bffb60192d2bc.png"},81754:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/fuzzy-match-output-e67be8e0fe8fa807003d4ca0dc1676ed.png"}}]);