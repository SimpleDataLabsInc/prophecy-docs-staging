"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[92750],{28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>s});var r=t(96540);const i={},o=r.createContext(i);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(o.Provider,{value:n},e.children)}},79817:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"administration/fabrics/airflow-fabrics/connections/airflow_fabric_connections","title":"Connections","description":"How to create connections in Prophecy Managed Airflow fabric","source":"@site/docs/administration/fabrics/airflow-fabrics/connections/connections.md","sourceDirName":"administration/fabrics/airflow-fabrics/connections","slug":"/administration/fabrics/airflow-fabrics/connections/","permalink":"/prophecy-docs-staging/preview/pr-600/administration/fabrics/airflow-fabrics/connections/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"scheduling","permalink":"/prophecy-docs-staging/preview/pr-600/tags/scheduling"},{"inline":true,"label":"airflow","permalink":"/prophecy-docs-staging/preview/pr-600/tags/airflow"},{"inline":true,"label":"jobs","permalink":"/prophecy-docs-staging/preview/pr-600/tags/jobs"},{"inline":true,"label":"prophecyManaged","permalink":"/prophecy-docs-staging/preview/pr-600/tags/prophecy-managed"},{"inline":true,"label":"fabric","permalink":"/prophecy-docs-staging/preview/pr-600/tags/fabric"},{"inline":true,"label":"connections","permalink":"/prophecy-docs-staging/preview/pr-600/tags/connections"}],"version":"current","frontMatter":{"title":"Connections","id":"airflow_fabric_connections","description":"How to create connections in Prophecy Managed Airflow fabric","tags":["scheduling","airflow","jobs","prophecyManaged","fabric","connections"]},"sidebar":"adminSidebar","previous":{"title":"Airflow fabrics","permalink":"/prophecy-docs-staging/preview/pr-600/administration/fabrics/airflow-fabrics/"},"next":{"title":"Databricks Spark connection","permalink":"/prophecy-docs-staging/preview/pr-600/administration/fabrics/airflow-fabrics/connections/dbx_spark_connections"}}');var i=t(74848),o=t(28453),c=t(99563),s=t(89791);const a={title:"Connections",id:"airflow_fabric_connections",description:"How to create connections in Prophecy Managed Airflow fabric",tags:["scheduling","airflow","jobs","prophecyManaged","fabric","connections"]},l=void 0,d={},p=[];function u(e){const n={a:"a",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["You need Airflow to talk to various other systems in your Data Platform to be able to do certain tasks like send Email, trigger Spark pipelines and SQL models.\nFor these we create ",(0,i.jsx)(n.a,{href:"https://airflow.apache.org/docs/apache-airflow/stable/authoring-and-scheduling/connections.html",children:"connections"})," in Airflow."]}),"\n",(0,i.jsx)(n.p,{children:"For Prophecy Managed Airflow, you can provide all the details required to connect to your external systems in Connections page, and Prophecy will set up the Airflow connection for you.\nThe credentials for your connections are stored securely in a Google Cloud Secret Manager."}),"\n","\n",(0,i.jsx)(c.A,{items:(0,s.$S)().items})]})}function f(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},81430:(e,n,t)=>{t.d(n,{W:()=>l});var r=t(96540),i=t(40797);const o=["zero","one","two","few","many","other"];function c(e){return o.filter((n=>e.includes(n)))}const s={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:c(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),s}}),[e])}function l(){const e=a();return{selectMessage:(n,t)=>function(e,n,t){const r=e.split("|");if(1===r.length)return r[0];r.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=t.select(n),o=t.pluralForms.indexOf(i);return r[Math.min(o,r.length-1)]}(t,n,e)}}},89791:(e,n,t)=>{t.d(n,{$S:()=>r});t(40797);function r(){return t(56942).$S(...arguments)}},99563:(e,n,t)=>{t.d(n,{A:()=>w});t(96540);var r=t(18215),i=t(93751),o=t(56289),c=t(81430),s=t(22887),a=t(50539),l=t(9303);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var p=t(74848);function u(e){let{href:n,children:t}=e;return(0,p.jsx)(o.A,{href:n,className:(0,r.A)("card padding--lg",d.cardContainer),children:t})}function f(e){let{href:n,icon:t,title:i,description:o}=e;return(0,p.jsxs)(u,{href:n,children:[(0,p.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:i,children:[t," ",i]}),o&&(0,p.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:o,children:o})]})}function m(e){let{item:n}=e;const t=(0,i.Nr)(n),r=function(){const{selectMessage:e}=(0,c.W)();return n=>e(n,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,p.jsx)(f,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??r(n.items.length)}):null}function h(e){let{item:n}=e;const t=(0,s.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(n.docId??void 0);return(0,p.jsx)(f,{href:n.href,icon:t,title:n.label,description:n.description??r?.description})}function g(e){let{item:n}=e;switch(n.type){case"link":return(0,p.jsx)(h,{item:n});case"category":return(0,p.jsx)(m,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function b(e){let{className:n}=e;const t=(0,i.$S)();return(0,p.jsx)(w,{items:t.items,className:n})}function w(e){const{items:n,className:t}=e;if(!n)return(0,p.jsx)(b,{...e});const o=(0,i.d1)(n);return(0,p.jsx)("section",{className:(0,r.A)("row",t),children:o.map(((e,n)=>(0,p.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,p.jsx)(g,{item:e})},n)))})}}}]);