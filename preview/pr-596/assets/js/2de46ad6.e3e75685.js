"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[27303],{28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>c});var i=r(96540);const t={},a=i.createContext(t);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(a.Provider,{value:n},e.children)}},74170:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"Spark/gems/machine-learning/machine-learning","title":"Machine Learning","description":"Preparing and Using Data for Machine Learning","source":"@site/docs/Spark/gems/machine-learning/machine-learning.md","sourceDirName":"Spark/gems/machine-learning","slug":"/Spark/gems/machine-learning/","permalink":"/prophecy-docs-staging/preview/pr-596/Spark/gems/machine-learning/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"generative-ai","permalink":"/prophecy-docs-staging/preview/pr-596/tags/generative-ai"},{"inline":true,"label":"machine-learning","permalink":"/prophecy-docs-staging/preview/pr-596/tags/machine-learning"},{"inline":true,"label":"llm","permalink":"/prophecy-docs-staging/preview/pr-596/tags/llm"},{"inline":true,"label":"pinecone","permalink":"/prophecy-docs-staging/preview/pr-596/tags/pinecone"},{"inline":true,"label":"openai","permalink":"/prophecy-docs-staging/preview/pr-596/tags/openai"}],"version":"current","frontMatter":{"title":"Machine Learning","id":"machine-learning","description":"Preparing and Using Data for Machine Learning","tags":["generative-ai","machine-learning","llm","pinecone","openai"]},"sidebar":"mySidebar","previous":{"title":"WhileIterator","permalink":"/prophecy-docs-staging/preview/pr-596/Spark/gems/subgraph/while-iterator"},"next":{"title":"OpenAI","permalink":"/prophecy-docs-staging/preview/pr-596/Spark/gems/machine-learning/ml-openai"}}');var t=r(74848),a=r(28453),s=r(99563),c=r(89791);const o={title:"Machine Learning",id:"machine-learning",description:"Preparing and Using Data for Machine Learning",tags:["generative-ai","machine-learning","llm","pinecone","openai"]},l=void 0,p={},d=[{value:"Cluster library dependencies",id:"cluster-library-dependencies",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Each page below describes one of the set of gems that prepare or use data for Machine Learning. These gems have a required ",(0,t.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-596/Spark/gems/machine-learning/#cluster-library-dependencies",children:"Cluster library dependency"}),". For an example set of pipelines that use these gems to create a Generative AI Chatbot, see this ",(0,t.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-596/Spark/gems/machine-learning/gen-ai-chatbot",children:"guide."})]}),"\n","\n",(0,t.jsx)(s.A,{items:(0,c.$S)().items}),"\n",(0,t.jsx)(n.h3,{id:"cluster-library-dependencies",children:"Cluster library dependencies"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/prophecy-io/spark-ai/tree/main",children:(0,t.jsx)(n.strong,{children:"Spark-AI"})})," - Toolbox for building Generative AI applications on top of Apache Spark. This library dependency is required for the Machine Learning gem functionality. Setup this dependency in one of two ways:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Option a. Import a project with the spark-ai dependency preconfigured, as in this ",(0,t.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-596/Spark/gems/machine-learning/gen-ai-chatbot#1c-load-the-git-repository",children:"guide."})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Option b. Alternatively, add ",(0,t.jsx)(n.code,{children:"prophecy-spark-ai==0.1.8"})," as a Python library, and ",(0,t.jsx)(n.code,{children:"io.prophecy:spark-ai_2.12:0.1.8"})," as a Maven library to the pipeline ",(0,t.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-596/engineers/dependencies",children:"dependencies."})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.a,{href:"https://github.com/prophecy-io/spark-ai/tree/main#roadmap",children:"here"})," to see the roadmap for what's coming in the future with the Spark-AI toolbox."]})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},81430:(e,n,r)=>{r.d(n,{W:()=>l});var i=r(96540),t=r(40797);const a=["zero","one","two","few","many","other"];function s(e){return a.filter((n=>e.includes(n)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,t.A)();return(0,i.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:s(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),c}}),[e])}function l(){const e=o();return{selectMessage:(n,r)=>function(e,n,r){const i=e.split("|");if(1===i.length)return i[0];i.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);const t=r.select(n),a=r.pluralForms.indexOf(t);return i[Math.min(a,i.length-1)]}(r,n,e)}}},89791:(e,n,r)=>{r.d(n,{$S:()=>i});r(40797);function i(){return r(56942).$S(...arguments)}},99563:(e,n,r)=>{r.d(n,{A:()=>y});r(96540);var i=r(18215),t=r(93751),a=r(56289),s=r(81430),c=r(22887),o=r(50539),l=r(9303);const p={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(74848);function h(e){let{href:n,children:r}=e;return(0,d.jsx)(a.A,{href:n,className:(0,i.A)("card padding--lg",p.cardContainer),children:r})}function g(e){let{href:n,icon:r,title:t,description:a}=e;return(0,d.jsxs)(h,{href:n,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,i.A)("text--truncate",p.cardTitle),title:t,children:[r," ",t]}),a&&(0,d.jsx)("p",{className:(0,i.A)("text--truncate",p.cardDescription),title:a,children:a})]})}function u(e){let{item:n}=e;const r=(0,t.Nr)(n),i=function(){const{selectMessage:e}=(0,s.W)();return n=>e(n,(0,o.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return r?(0,d.jsx)(g,{href:r,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??i(n.items.length)}):null}function m(e){let{item:n}=e;const r=(0,c.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,t.cC)(n.docId??void 0);return(0,d.jsx)(g,{href:n.href,icon:r,title:n.label,description:n.description??i?.description})}function f(e){let{item:n}=e;switch(n.type){case"link":return(0,d.jsx)(m,{item:n});case"category":return(0,d.jsx)(u,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function x(e){let{className:n}=e;const r=(0,t.$S)();return(0,d.jsx)(y,{items:r.items,className:n})}function y(e){const{items:n,className:r}=e;if(!n)return(0,d.jsx)(x,{...e});const a=(0,t.d1)(n);return(0,d.jsx)("section",{className:(0,i.A)("row",r),children:a.map(((e,n)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},n)))})}}}]);