"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[12201],{23169:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"Spark/gems/transform/transform","title":"Transform","description":"Set of gems related to the transformation of data","source":"@site/docs/Spark/gems/transform/transform.md","sourceDirName":"Spark/gems/transform","slug":"/engineers/transform","permalink":"/prophecy-docs-staging/preview/pr-620/engineers/transform","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Transform","id":"transform","slug":"/engineers/transform","description":"Set of gems related to the transformation of data","tags":[]},"sidebar":"mySidebar","previous":{"title":"Lookup","permalink":"/prophecy-docs-staging/preview/pr-620/engineers/lookup"},"next":{"title":"Aggregate","permalink":"/prophecy-docs-staging/preview/pr-620/engineers/aggregate"}}');var t=n(74848),a=n(28453),c=n(49235),i=n(99563),o=n(89791);const l={title:"Transform",id:"transform",slug:"/engineers/transform",description:"Set of gems related to the transformation of data",tags:[]},p=void 0,d={},h=[];function m(e){const s={p:"p",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.0.1+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"3.0.1+"}),"\n",(0,t.jsx)(s.p,{children:"Constitutes the set of gems that help with transforming data."}),"\n","\n",(0,t.jsx)(i.A,{items:(0,o.$S)().items})]})}function u(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>i});var r=n(96540);const t={},a=r.createContext(t);function c(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(a.Provider,{value:s},e.children)}},49235:(e,s,n)=>{n.d(s,{A:()=>t});n(96540);var r=n(74848);function t(e){return(0,r.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,r.jsxs)("span",{className:"badge-dependency",children:[(0,r.jsx)("span",{className:"left",children:e.python_package_name}),(0,r.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,r.jsxs)("span",{className:"badge-dependency",children:[(0,r.jsx)("span",{className:"left",children:e.scala_package_name}),(0,r.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,r.jsxs)("span",{className:"badge-dependency",children:[(0,r.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,r.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,r.jsxs)("span",{className:"badge-dependency",children:[(0,r.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,r.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,r.jsxs)("span",{className:"badge-spark",children:[(0,r.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,r.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,r.jsxs)("span",{className:"badge-spark",children:[(0,r.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,r.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,r.jsxs)("span",{className:"badge-spark",children:[(0,r.jsx)("span",{className:"left",children:"Livy"}),(0,r.jsx)("span",{className:"right",children:e.livy})]})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]})}},81430:(e,s,n)=>{n.d(s,{W:()=>l});var r=n(96540),t=n(40797);const a=["zero","one","two","few","many","other"];function c(e){return a.filter((s=>e.includes(s)))}const i={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,t.A)();return(0,r.useMemo)((()=>{try{return function(e){const s=new Intl.PluralRules(e);return{locale:e,pluralForms:c(s.resolvedOptions().pluralCategories),select:e=>s.select(e)}}(e)}catch(s){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${s.message}\n`),i}}),[e])}function l(){const e=o();return{selectMessage:(s,n)=>function(e,s,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const t=n.select(s),a=n.pluralForms.indexOf(t);return r[Math.min(a,r.length-1)]}(n,s,e)}}},89791:(e,s,n)=>{n.d(s,{$S:()=>r});n(40797);function r(){return n(56942).$S(...arguments)}},99563:(e,s,n)=>{n.d(s,{A:()=>j});n(96540);var r=n(18215),t=n(93751),a=n(56289),c=n(81430),i=n(22887),o=n(50539),l=n(9303);const p={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function h(e){let{href:s,children:n}=e;return(0,d.jsx)(a.A,{href:s,className:(0,r.A)("card padding--lg",p.cardContainer),children:n})}function m(e){let{href:s,icon:n,title:t,description:a}=e;return(0,d.jsxs)(h,{href:s,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",p.cardTitle),title:t,children:[n," ",t]}),a&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",p.cardDescription),title:a,children:a})]})}function u(e){let{item:s}=e;const n=(0,t.Nr)(s),r=function(){const{selectMessage:e}=(0,c.W)();return s=>e(s,(0,o.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:s}))}();return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:s.label,description:s.description??r(s.items.length)}):null}function f(e){let{item:s}=e;const n=(0,i.A)(s.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,t.cC)(s.docId??void 0);return(0,d.jsx)(m,{href:s.href,icon:n,title:s.label,description:s.description??r?.description})}function g(e){let{item:s}=e;switch(s.type){case"link":return(0,d.jsx)(f,{item:s});case"category":return(0,d.jsx)(u,{item:s});default:throw new Error(`unknown item type ${JSON.stringify(s)}`)}}function x(e){let{className:s}=e;const n=(0,t.$S)();return(0,d.jsx)(j,{items:n.items,className:s})}function j(e){const{items:s,className:n}=e;if(!s)return(0,d.jsx)(x,{...e});const a=(0,t.d1)(s);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:a.map(((e,s)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},s)))})}}}]);