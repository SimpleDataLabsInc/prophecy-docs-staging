"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[58998],{16665:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"Spark/gems/custom/directory","title":"Directory","description":"Return a listing of all the files in a specified directory","source":"@site/docs/Spark/gems/custom/directory.md","sourceDirName":"Spark/gems/custom","slug":"/engineers/directory","permalink":"/prophecy-docs-staging/preview/pr-603/engineers/directory","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-603/tags/gems"},{"inline":true,"label":"directory","permalink":"/prophecy-docs-staging/preview/pr-603/tags/directory"}],"version":"current","frontMatter":{"title":"Directory","id":"directory","slug":"/engineers/directory","description":"Return a listing of all the files in a specified directory","tags":["gems","directory"]},"sidebar":"mySidebar","previous":{"title":"RestAPIEnrich","permalink":"/prophecy-docs-staging/preview/pr-603/engineers/rest-api-enrich"},"next":{"title":"Expression builder","permalink":"/prophecy-docs-staging/preview/pr-603/engineers/expression-builder"}}');var n=t(74848),s=t(28453),i=t(49235),l=t(65537),c=t(79329);const o={title:"Directory",id:"directory",slug:"/engineers/directory",description:"Return a listing of all the files in a specified directory",tags:["gems","directory"]},d=void 0,u={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Sample output",id:"sample-output",level:2},{value:"Example code",id:"example-code",level:2}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.2.27+",scala_package_name:"",scala_package_version:"",scala_lib:"8.2.1+",python_lib:"1.9.16+",uc_single:"14.3+",uc_shared:"Not Supported",livy:"Not Supported"}),"\n",(0,n.jsx)(r.p,{children:"The Directory gem returns a listing of all the files in a specified directory including file metadata such as file creation time, type, size, path, and more."}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameters"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Location"}),(0,n.jsx)(r.td,{children:"The location of the directory that you want to return"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Include Subdirectories"}),(0,n.jsx)(r.td,{children:"A checkbox you can enable to return all of the subdirectories in the defined location"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"File Specification"}),(0,n.jsx)(r.td,{children:"A regex filter to help you find your files in the file browser"})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"sample-output",children:"Sample output"}),"\n",(0,n.jsx)(r.p,{children:"Below is an example output of a Directory gem. It includes seven columns:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"name"}),"\n",(0,n.jsx)(r.li,{children:"path"}),"\n",(0,n.jsx)(r.li,{children:"size"}),"\n",(0,n.jsx)(r.li,{children:"creation_time"}),"\n",(0,n.jsx)(r.li,{children:"modification_time"}),"\n",(0,n.jsx)(r.li,{children:"parent_directory"}),"\n",(0,n.jsx)(r.li,{children:"file_type"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"Directory output",src:t(33374).A+"",width:"2620",height:"1508"})}),"\n",(0,n.jsx)(r.h2,{id:"example-code",children:"Example code"}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsxs)(r.p,{children:["To see the generated source code of your project, ",(0,n.jsx)(r.a,{href:"/engineers/project-lifecycle/#review-the-code",children:"switch to the Code view"})," in the project header."]})}),"\n","\n",(0,n.jsx)(l.A,{children:(0,n.jsx)(c.A,{value:"py",label:"Python",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-py",children:'def directory_listing(spark: SparkSession) -> DataFrame:\n    from prophecy.libs.utils import directory_listing\n\n    return directory_listing(spark, "dbfs:/source_file.txt", False, "*.*")\n'})})})})]})}function m(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var a=t(96540);const n={},s=a.createContext(n);function i(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:r},e.children)}},33374:(e,r,t)=>{t.d(r,{A:()=>a});const a=t.p+"assets/images/directory-output-5c78ac217ba1ea17391a9318bd778412.png"},49235:(e,r,t)=>{t.d(r,{A:()=>n});t(96540);var a=t(74848);function n(e){return(0,a.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:e.python_package_name}),(0,a.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:e.scala_package_name}),(0,a.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,a.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,a.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,a.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,a.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Livy"}),(0,a.jsx)("span",{className:"right",children:e.livy})]})}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]})}},65537:(e,r,t)=>{t.d(r,{A:()=>_});var a=t(96540),n=t(18215),s=t(65627),i=t(56347),l=t(50372),c=t(30604),o=t(11861),d=t(78749);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:t,attributes:a,default:n}}=e;return{value:r,label:t,attributes:a,default:n}}))}(t);return function(e){const r=(0,o.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const n=(0,i.W6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,c.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(n.location.search);r.set(s,e),n.replace({...n.location,search:r.toString()})}),[s,n])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,s=p(e),[i,c]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:s}))),[o,u]=m({queryString:t,groupId:n}),[f,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,s]=(0,d.Dv)(t);return[n,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:n}),g=(()=>{const e=o??f;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{g&&c(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=t(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(74848);function x(e){let{className:r,block:t,selectedValue:a,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),d=e=>{const r=e.currentTarget,t=c.indexOf(r),n=l[t].value;n!==a&&(o(r),i(n))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}r?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},r),children:l.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>{c.push(e)},onKeyDown:u,onClick:d,...s,className:(0,n.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":a===r}),children:t??r},r)}))})}function j(e){let{lazy:r,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function v(e){const r=f(e);return(0,y.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,y.jsx)(x,{...r,...e}),(0,y.jsx)(j,{...r,...e})]})}function _(e){const r=(0,b.A)();return(0,y.jsx)(v,{...e,children:u(e.children)},String(r))}},79329:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var a=t(18215);const n={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,i),hidden:t,children:r})}}}]);