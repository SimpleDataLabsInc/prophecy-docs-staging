"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[8632],{28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(96540);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}},81430:(e,n,i)=>{i.d(n,{W:()=>c});var t=i(96540),r=i(40797);const o=["zero","one","two","few","many","other"];function s(e){return o.filter((n=>e.includes(n)))}const l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,t.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:s(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),l}}),[e])}function c(){const e=a();return{selectMessage:(n,i)=>function(e,n,i){const t=e.split("|");if(1===t.length)return t[0];t.length>i.pluralForms.length&&console.error(`For locale=${i.locale}, a maximum of ${i.pluralForms.length} plural forms are expected (${i.pluralForms.join(",")}), but the message contains ${t.length}: ${e}`);const r=i.select(n),o=i.pluralForms.indexOf(r);return t[Math.min(o,t.length-1)]}(i,n,e)}}},85769:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"Orchestration/pipeline-monitoring/pipeline-monitoring","title":"Pipeline Monitoring","description":"About Pipeline Monitoring for Spark","source":"@site/docs/Orchestration/pipeline-monitoring/pipeline-monitoring.md","sourceDirName":"Orchestration/pipeline-monitoring","slug":"/Orchestration/pipeline-monitoring/","permalink":"/prophecy-docs-staging/preview/pr-596/Orchestration/pipeline-monitoring/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"concept","permalink":"/prophecy-docs-staging/preview/pr-596/tags/concept"},{"inline":true,"label":"monitoring","permalink":"/prophecy-docs-staging/preview/pr-596/tags/monitoring"},{"inline":true,"label":"spark","permalink":"/prophecy-docs-staging/preview/pr-596/tags/spark"}],"version":"current","frontMatter":{"title":"Pipeline Monitoring","id":"pipeline-monitoring","description":"About Pipeline Monitoring for Spark","tags":["concept","monitoring","spark"]},"sidebar":"mySidebar","previous":{"title":"Orchestration","permalink":"/prophecy-docs-staging/preview/pr-596/Orchestration/"},"next":{"title":"Enable Pipeline Monitoring","permalink":"/prophecy-docs-staging/preview/pr-596/Orchestration/pipeline-monitoring/enable-pipeline-monitoring"}}');var r=i(74848),o=i(28453),s=i(99563),l=i(89791);const a={title:"Pipeline Monitoring",id:"pipeline-monitoring",description:"About Pipeline Monitoring for Spark",tags:["concept","monitoring","spark"]},c=void 0,u={},p=[{value:"Pipeline Monitoring features",id:"pipeline-monitoring-features",level:2},{value:"Possible Pipeline errors and failures",id:"possible-pipeline-errors-and-failures",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function d(e){const n={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Pipeline Monitoring enables you as a Spark Copilot user to monitor and debug your scheduled and interactive pipeline runs through Prophecy. The primary goal of pipeline, model, and job observability is to assist you in quickly pinpointing errors, minimize the cost of fixes, and reduce downtime."}),"\n",(0,r.jsx)(n.p,{children:"When enabled, Prophecy highlights the gem that causes the failure at runtime. You can view log stack traces in the Prophecy UI in order to to debug runtime issues. Pipeline Monitoring is available for any scheduled job runs and all interactive runs through the Prophecy UI."}),"\n",(0,r.jsx)(n.h2,{id:"pipeline-monitoring-features",children:"Pipeline Monitoring features"}),"\n",(0,r.jsx)(n.p,{children:"You can seamlessly address data health issues and monitor scheduled or ad-hoc runs without the need to switch to Databricks or Snowflake by using the following features:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Detect and monitor"}),": Identify errors at runtime, and monitor scheduled production runs."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Alert"}),": Get prompt alerts in case of failures according to severity."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Troubleshoot and fix with recommended solutions"}),": Identify the cause of failures, fix them AI recommended solutions, and rerun failed or skipped tasks. Prophecy's Pipeline Monitoring encompasses all functionalities equivalent to those found in Databricks Workflows and Airflow jobs."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"possible-pipeline-errors-and-failures",children:"Possible Pipeline errors and failures"}),"\n",(0,r.jsx)(n.p,{children:"During runtime, a pipeline can fail due to different kinds of errors or failures such as the following:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Failure before plan execution started by Spark"}),"\n",(0,r.jsx)(n.li,{children:"Failure when the gem has diagnostics or compilation issues because of a change in some common component"}),"\n",(0,r.jsx)(n.li,{children:"Runtime error due to unexpected data, such as data type mismatch"}),"\n",(0,r.jsx)(n.li,{children:"Error during write, such as write mode error or target data type mismatch"}),"\n",(0,r.jsx)(n.li,{children:"Driver/Executor errors like exceeding memory limits (OOMs)"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"whats-next",children:"What's next"}),"\n",(0,r.jsx)(n.p,{children:"To enable and use Pipeline Monitoring, see the following pages:"}),"\n","\n",(0,r.jsx)(s.A,{items:(0,l.$S)().items}),"\n",(0,r.jsxs)(n.p,{children:["For information on the stored execution metrics, see ",(0,r.jsx)(n.a,{href:"/engineers/execution-metrics",children:"Execution Metrics"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},89791:(e,n,i)=>{i.d(n,{$S:()=>t});i(40797);function t(){return i(56942).$S(...arguments)}},99563:(e,n,i)=>{i.d(n,{A:()=>j});i(96540);var t=i(18215),r=i(93751),o=i(56289),s=i(81430),l=i(22887),a=i(50539),c=i(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var p=i(74848);function d(e){let{href:n,children:i}=e;return(0,p.jsx)(o.A,{href:n,className:(0,t.A)("card padding--lg",u.cardContainer),children:i})}function h(e){let{href:n,icon:i,title:r,description:o}=e;return(0,p.jsxs)(d,{href:n,children:[(0,p.jsxs)(c.A,{as:"h2",className:(0,t.A)("text--truncate",u.cardTitle),title:r,children:[i," ",r]}),o&&(0,p.jsx)("p",{className:(0,t.A)("text--truncate",u.cardDescription),title:o,children:o})]})}function m(e){let{item:n}=e;const i=(0,r.Nr)(n),t=function(){const{selectMessage:e}=(0,s.W)();return n=>e(n,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return i?(0,p.jsx)(h,{href:i,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??t(n.items.length)}):null}function g(e){let{item:n}=e;const i=(0,l.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",t=(0,r.cC)(n.docId??void 0);return(0,p.jsx)(h,{href:n.href,icon:i,title:n.label,description:n.description??t?.description})}function f(e){let{item:n}=e;switch(n.type){case"link":return(0,p.jsx)(g,{item:n});case"category":return(0,p.jsx)(m,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function x(e){let{className:n}=e;const i=(0,r.$S)();return(0,p.jsx)(j,{items:i.items,className:n})}function j(e){const{items:n,className:i}=e;if(!n)return(0,p.jsx)(x,{...e});const o=(0,r.d1)(n);return(0,p.jsx)("section",{className:(0,t.A)("row",i),children:o.map(((e,n)=>(0,p.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,p.jsx)(f,{item:e})},n)))})}}}]);