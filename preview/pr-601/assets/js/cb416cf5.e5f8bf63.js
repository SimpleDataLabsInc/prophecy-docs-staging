"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[463],{15858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"Orchestration/Orchestration","title":"Orchestration","description":"Airflow and Databricks Jobs","source":"@site/docs/Orchestration/Orchestration.md","sourceDirName":"Orchestration","slug":"/engineers/orchestration","permalink":"/prophecy-docs-staging/preview/pr-601/engineers/orchestration","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"jobs","permalink":"/prophecy-docs-staging/preview/pr-601/tags/jobs"},{"inline":true,"label":"deployment","permalink":"/prophecy-docs-staging/preview/pr-601/tags/deployment"},{"inline":true,"label":"scheduling","permalink":"/prophecy-docs-staging/preview/pr-601/tags/scheduling"}],"version":"current","frontMatter":{"title":"Orchestration","id":"Orchestration","slug":"/engineers/orchestration","description":"Airflow and Databricks Jobs","tags":["jobs","deployment","scheduling"]},"sidebar":"mySidebar","previous":{"title":"PBT on Jenkins","permalink":"/prophecy-docs-staging/preview/pr-601/engineers/jenkins-prophecy-build-tool"},"next":{"title":"Pipeline Monitoring","permalink":"/prophecy-docs-staging/preview/pr-601/engineers/pipeline-monitoring"}}');var s=n(74848),o=n(28453),i=n(99563),c=n(89791);const a={title:"Orchestration",id:"Orchestration",slug:"/engineers/orchestration",description:"Airflow and Databricks Jobs",tags:["jobs","deployment","scheduling"]},l=void 0,d={},u=[{value:"What&#39;s next",id:"whats-next",level:2}];function p(e){const t={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Once you have developed a Spark data pipeline or an SQL model using Prophecy, you will want to schedule it to run at some frequency. To\nsupport this, Prophecy provides you with an easy-to-use interface to develop jobs, using two different\nschedulers:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-601/engineers/databricks-jobs",children:"Databricks Jobs"})}),": for simpler data-pipeline use-cases, where you just\norchestrate multiple data-pipelines to run together. Databricks Jobs is a ",(0,s.jsx)(t.strong,{children:"recommended"})," scheduler, if you're\nDatabricks Native."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-601/engineers/airflow",children:"Airflow"})}),": for more complex use-cases, where you have to use various operators, or need\nany additional data pre-and-post-processing, you can interface from Prophecy with your production-ready Airflow deployment. To get started with your first Airflow jobs, try Prophecy Managed Airflow using this ",(0,s.jsx)(t.a,{href:"/engineers/spark-airflow-tutorial",children:"guide"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-601/Orchestration/alternative-schedulers",children:"Custom"})}),": Alternatively, since Prophecy provides you native Spark code on Git, you can easily integrate with any other scheduler or custom solution."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"whats-next",children:"What's next"}),"\n",(0,s.jsx)(t.p,{children:"To continue using orchestration solutions, see the following pages:"}),"\n","\n",(0,s.jsx)(i.A,{items:(0,c.$S)().items})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(96540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}},81430:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(96540),s=n(40797);const o=["zero","one","two","few","many","other"];function i(e){return o.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),o=n.pluralForms.indexOf(s);return r[Math.min(o,r.length-1)]}(n,t,e)}}},89791:(e,t,n)=>{n.d(t,{$S:()=>r});n(40797);function r(){return n(56942).$S(...arguments)}},99563:(e,t,n)=>{n.d(t,{A:()=>x});n(96540);var r=n(18215),s=n(93751),o=n(56289),i=n(81430),c=n(22887),a=n(50539),l=n(9303);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(74848);function p(e){let{href:t,children:n}=e;return(0,u.jsx)(o.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:s,description:o}=e;return(0,u.jsxs)(p,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),o&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:o,children:o})]})}function g(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function m(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,u.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(m,{item:t});case"category":return(0,u.jsx)(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,s.$S)();return(0,u.jsx)(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(y,{...e});const o=(0,s.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:o.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(f,{item:e})},t)))})}}}]);