"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[12945],{28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}},47754:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/code-to-visual-spark-6841948de15aea10b5211e0e8e8f5cbd.png"},64033:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"Spark/copilot-for-spark-users","title":"Pipeline development for Engineers","description":"Using Spark with Prophecy\'s Data Transformation Copilot","source":"@site/docs/Spark/Spark.md","sourceDirName":"Spark","slug":"/engineers/pipeline-development","permalink":"/prophecy-docs-staging/preview/pr-612/engineers/pipeline-development","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"spark","permalink":"/prophecy-docs-staging/preview/pr-612/tags/spark"},{"inline":true,"label":"warehouse","permalink":"/prophecy-docs-staging/preview/pr-612/tags/warehouse"}],"version":"current","frontMatter":{"title":"Pipeline development for Engineers","id":"copilot-for-spark-users","sidebar_label":"Pipeline development","slug":"/engineers/pipeline-development","description":"Using Spark with Prophecy\'s Data Transformation Copilot","tags":["spark","warehouse"]},"sidebar":"mySidebar","previous":{"title":"App components","permalink":"/prophecy-docs-staging/preview/pr-612/analysts/business-application-components"},"next":{"title":"Pipelines","permalink":"/prophecy-docs-staging/preview/pr-612/engineers/pipelines"}}');var r=t(74848),s=t(28453),o=t(99563),a=t(89791);const l={title:"Pipeline development for Engineers",id:"copilot-for-spark-users",sidebar_label:"Pipeline development",slug:"/engineers/pipeline-development",description:"Using Spark with Prophecy's Data Transformation Copilot",tags:["spark","warehouse"]},c=void 0,p={},d=[{value:"Data transformations",id:"data-transformations",level:2},{value:"Interactive development",id:"interactive-development",level:2},{value:"CI/CD",id:"cicd",level:2},{value:"Extensibility",id:"extensibility",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function u(e){const n={a:"a",h2:"h2",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:(0,r.jsx)("span",{class:"badge",children:"Spark"})}),"\n",(0,r.jsx)(n.p,{children:"Pipeline development is foundational to data engineering. Prophecy simplifies the development of Spark-based data pipelines with a visual interface that automatically compiles pipelines into production-ready code."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Visual and code editor split screen",src:t(47754).A+"",width:"2100",height:"1351"})}),"\n",(0,r.jsx)(n.h2,{id:"data-transformations",children:"Data transformations"}),"\n",(0,r.jsx)(n.p,{children:"Pipelines include a wide range of pre-built visual components that enable source/target operations, transformations, join/split operations, and machine learning capabilities. These components include datasets, gems, functions, and jobs."}),"\n",(0,r.jsx)(n.h2,{id:"interactive-development",children:"Interactive development"}),"\n",(0,r.jsx)(n.p,{children:"Prophecy enhances Spark pipeline development with features like interim data sampling, which allows users to troubleshoot by visualizing the data flow, comparing historical runs, and inspecting individual datasets in the visual interface."}),"\n",(0,r.jsx)(n.h2,{id:"cicd",children:"CI/CD"}),"\n",(0,r.jsx)(n.p,{children:"Prophecy supports CI/CD by managing all project version control on Git and providing control over how you release and deploy projects. This way, you can develop your pipelines in accordance with your Git workflows and other CI/CD tools."}),"\n",(0,r.jsx)(n.h2,{id:"extensibility",children:"Extensibility"}),"\n",(0,r.jsxs)(n.p,{children:["In Prophecy, ",(0,r.jsx)(n.a,{href:"/engineers/extensibility",children:"extensibility"})," enables data practitioners to create and share pipeline components through the Package Hub, which allows teams to build reusable elements rather than rebuilding them for each project."]}),"\n",(0,r.jsx)(n.h2,{id:"whats-next",children:"What's next"}),"\n",(0,r.jsx)(n.p,{children:"Learn more about pipeline development in the following pages."}),"\n","\n",(0,r.jsx)(o.A,{items:(0,a.$S)().items})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},81430:(e,n,t)=>{t.d(n,{W:()=>c});var i=t(96540),r=t(40797);const s=["zero","one","two","few","many","other"];function o(e){return s.filter((n=>e.includes(n)))}const a={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,i.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:o(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),a}}),[e])}function c(){const e=l();return{selectMessage:(n,t)=>function(e,n,t){const i=e.split("|");if(1===i.length)return i[0];i.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);const r=t.select(n),s=t.pluralForms.indexOf(r);return i[Math.min(s,i.length-1)]}(t,n,e)}}},89791:(e,n,t)=>{t.d(n,{$S:()=>i});t(40797);function i(){return t(56942).$S(...arguments)}},99563:(e,n,t)=>{t.d(n,{A:()=>x});t(96540);var i=t(18215),r=t(93751),s=t(56289),o=t(81430),a=t(22887),l=t(50539),c=t(9303);const p={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=t(74848);function u(e){let{href:n,children:t}=e;return(0,d.jsx)(s.A,{href:n,className:(0,i.A)("card padding--lg",p.cardContainer),children:t})}function h(e){let{href:n,icon:t,title:r,description:s}=e;return(0,d.jsxs)(u,{href:n,children:[(0,d.jsxs)(c.A,{as:"h2",className:(0,i.A)("text--truncate",p.cardTitle),title:r,children:[t," ",r]}),s&&(0,d.jsx)("p",{className:(0,i.A)("text--truncate",p.cardDescription),title:s,children:s})]})}function m(e){let{item:n}=e;const t=(0,r.Nr)(n),i=function(){const{selectMessage:e}=(0,o.W)();return n=>e(n,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,d.jsx)(h,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??i(n.items.length)}):null}function f(e){let{item:n}=e;const t=(0,a.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.cC)(n.docId??void 0);return(0,d.jsx)(h,{href:n.href,icon:t,title:n.label,description:n.description??i?.description})}function g(e){let{item:n}=e;switch(n.type){case"link":return(0,d.jsx)(f,{item:n});case"category":return(0,d.jsx)(m,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function v(e){let{className:n}=e;const t=(0,r.$S)();return(0,d.jsx)(x,{items:t.items,className:n})}function x(e){const{items:n,className:t}=e;if(!n)return(0,d.jsx)(v,{...e});const s=(0,r.d1)(n);return(0,d.jsx)("section",{className:(0,i.A)("row",t),children:s.map(((e,n)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},n)))})}}}]);