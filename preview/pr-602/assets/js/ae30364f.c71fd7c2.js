"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[49709],{28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var a=n(96540);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}},49235:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var a=n(74848);function r(e){return(0,a.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:e.python_package_name}),(0,a.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:e.scala_package_name}),(0,a.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,a.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,a.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,a.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,a.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Livy"}),(0,a.jsx)("span",{className:"right",children:e.livy})]})}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]})}},54039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>m,frontMatter:()=>d,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"Spark/gems/transform/fuzzy-match","title":"FuzzyMatch","description":"Identify non-identical duplicates in your data","source":"@site/docs/Spark/gems/transform/fuzzy-match.md","sourceDirName":"Spark/gems/transform","slug":"/engineers/fuzzy-match","permalink":"/prophecy-docs-staging/preview/pr-602/engineers/fuzzy-match","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-602/tags/gems"},{"inline":true,"label":"fuzzy match","permalink":"/prophecy-docs-staging/preview/pr-602/tags/fuzzy-match"}],"version":"current","frontMatter":{"title":"FuzzyMatch","id":"fuzzy-match","slug":"/engineers/fuzzy-match","description":"Identify non-identical duplicates in your data","tags":["gems","fuzzy match"]},"sidebar":"mySidebar","previous":{"title":"FlattenSchema","permalink":"/prophecy-docs-staging/preview/pr-602/engineers/flatten-schema"},"next":{"title":"Limit","permalink":"/prophecy-docs-staging/preview/pr-602/engineers/limit"}}');var r=n(74848),s=n(28453),i=n(49235),c=n(65537),l=n(79329);const d={title:"FuzzyMatch",id:"fuzzy-match",slug:"/engineers/fuzzy-match",description:"Identify non-identical duplicates in your data",tags:["gems","fuzzy match"]},o=void 0,h={},u=[{value:"Input and Output",id:"input-and-output",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Example code",id:"example-code",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{python_package_name:"",python_package_version:"",scala_package_name:"",scala_package_version:"",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"Not Supported",livy:"Not Supported"}),"\n",(0,r.jsx)(t.p,{children:"Use the FuzzyMatch gem to identify non-identical duplicates in your data."}),"\n",(0,r.jsx)(t.h2,{id:"input-and-output",children:"Input and Output"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"DataFrame"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"in0"})}),(0,r.jsx)(t.td,{children:"Includes the DataFrame on which duplicates will be checked."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"out"})}),(0,r.jsx)(t.td,{children:"Generates one record per fuzzy match."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Tab"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Merge/Purge Mode"}),(0,r.jsx)(t.td,{children:"Configuration"}),(0,r.jsx)(t.td,{children:"Records are either compared from a single source (Purge) or across multiple sources (Merge)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Source ID Field"}),(0,r.jsx)(t.td,{children:"Configuration"}),(0,r.jsxs)(t.td,{children:["Unique identifier for each source when using ",(0,r.jsx)(t.strong,{children:"Merge"})," mode."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Record ID Field"}),(0,r.jsx)(t.td,{children:"Configuration"}),(0,r.jsx)(t.td,{children:"Unique identifier for each record."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Match threshold percentage"}),(0,r.jsx)(t.td,{children:"Configuration"}),(0,r.jsx)(t.td,{children:"If the match score is less than the threshold, the record does not qualify as a match."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Include similarity score"}),(0,r.jsx)(t.td,{children:"Configuration"}),(0,r.jsx)(t.td,{children:"Checkbox to enable for an additional output column that includes the similarity score."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Field name"}),(0,r.jsx)(t.td,{children:"Match Fields"}),(0,r.jsx)(t.td,{children:"Name of the column that you want to check for duplicates."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Match function"}),(0,r.jsx)(t.td,{children:"Match Fields"}),(0,r.jsx)(t.td,{children:"The method that generates the similarity score."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"One common use case for the FuzzyMatch gem is to match similarly spelled names. This can be useful for identifying accidentally misspelled names."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Create a FuzzyMatch gem and use the ",(0,r.jsx)(t.strong,{children:"customer_id"})," as the Record ID. Then, add a match field for the ",(0,r.jsx)(t.strong,{children:"first_name"})," column."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"FuzzyMatch names",src:n(81326).A+"",width:"2620",height:"1508"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Run the gem and see that the output includes the Record IDs of the records with fuzzy matches."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"FuzzyMatch output",src:n(81754).A+"",width:"2620",height:"1508"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Join the output with the original dataset to view the matched names."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"FuzzyMatch joined",src:n(67057).A+"",width:"2620",height:"1508"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"example-code",children:"Example code"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["To see the generated source code of your project, ",(0,r.jsx)(t.a,{href:"/engineers/project-lifecycle/#review-the-code",children:"switch to the Code view"})," in the project header."]})}),"\n","\n",(0,r.jsx)(c.A,{children:(0,r.jsx)(l.A,{value:"py",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-py",children:'def fuzzy_match_customers(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    from prophecy.utils.transpiler.dataframe_fcns import fuzzyPurgeMode\n\n    return fuzzyPurgeMode(\n        in0,\n        spark,\n        recordId = "customer_id",\n        matchFields = {"first_name" : "name"},\n        threshold = 0.8,\n        includeSimilarityScore = True\n    )\n'})})})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},65537:(e,t,n)=>{n.d(t,{A:()=>z});var a=n(96540),r=n(18215),s=n(65627),i=n(56347),c=n(50372),l=n(30604),d=n(11861),o=n(78749);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=u(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[d,h]=m({queryString:n,groupId:r}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,o.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),g=(()=>{const e=d??f;return p({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),x(e)}),[h,x,s]),tabValues:s}}var x=n(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(74848);function b(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),o=e=>{const t=e.currentTarget,n=l.indexOf(t),r=c[n].value;r!==a&&(d(t),i(r))},h=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{l.push(e)},onKeyDown:h,onClick:o,...s,className:(0,r.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=f(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,j.jsx)(b,{...t,...e}),(0,j.jsx)(y,{...t,...e})]})}function z(e){const t=(0,x.A)();return(0,j.jsx)(v,{...e,children:h(e.children)},String(t))}},67057:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/fuzzy-match-join-9686d0d9cb51575484b9d7bb8d97eb9a.png"},79329:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var a=n(18215);const r={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:n,children:t})}},81326:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/fuzzy-match-fields-55f10c33a6b6bd7f6a3bffb60192d2bc.png"},81754:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/fuzzy-match-output-e67be8e0fe8fa807003d4ca0dc1676ed.png"}}]);