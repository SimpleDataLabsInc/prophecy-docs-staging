"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[17350],{8332:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>f,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"administration/fabrics/airflow-fabrics/airflow-fabrics","title":"Airflow fabrics","description":"How Prophecy integrates with Airflow","source":"@site/docs/administration/fabrics/airflow-fabrics/airflow-fabrics.md","sourceDirName":"administration/fabrics/airflow-fabrics","slug":"/administration/fabrics/airflow-fabrics/","permalink":"/prophecy-docs-staging/preview/pr-594/administration/fabrics/airflow-fabrics/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"scheduling","permalink":"/prophecy-docs-staging/preview/pr-594/tags/scheduling"},{"inline":true,"label":"airflow","permalink":"/prophecy-docs-staging/preview/pr-594/tags/airflow"},{"inline":true,"label":"jobs","permalink":"/prophecy-docs-staging/preview/pr-594/tags/jobs"}],"version":"current","frontMatter":{"title":"Airflow fabrics","id":"airflow-fabrics","description":"How Prophecy integrates with Airflow","tags":["scheduling","airflow","jobs"]},"sidebar":"adminSidebar","previous":{"title":"Snowflake SQL","permalink":"/prophecy-docs-staging/preview/pr-594/administration/fabrics/sql-fabrics/snowflake"},"next":{"title":"Connections","permalink":"/prophecy-docs-staging/preview/pr-594/administration/fabrics/airflow-fabrics/connections/"}}');var t=n(74848),s=n(28453),o=n(99563),a=n(89791);const c={title:"Airflow fabrics",id:"airflow-fabrics",description:"How Prophecy integrates with Airflow",tags:["scheduling","airflow","jobs"]},l=void 0,f={},d=[{value:"What&#39;s next",id:"whats-next",level:2}];function u(e){const r={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["To connect to a running Airflow Instance, you would need to create a ",(0,t.jsx)(r.a,{href:"/prophecy-docs-staging/preview/pr-594/fabrics",children:"fabric"})," of type Airflow.\nProphecy provides you with three different types of fabrics depending upon where your Airflow Instance is running."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"/prophecy-docs-staging/preview/pr-594/administration/fabrics/airflow-fabrics/prophecy_managed_airflow_fabric",children:"Prophecy Managed Airflow"})}),": Use this if you do not have an Airflow instance and want to test Airflow out."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"/prophecy-docs-staging/preview/pr-594/administration/fabrics/airflow-fabrics/MWAA_fabric",children:"MWAA"})}),": Use MWAA if you have an Amazon Managed Workflows for Apache Airflow instance running."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"/prophecy-docs-staging/preview/pr-594/administration/fabrics/airflow-fabrics/composer_fabric",children:"Composer"})}),": Use Composer if you have a GCP Cloud Composer Airflow instance running."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Once you have set up an Airflow, you can schedule an Airflow job using our easy-to-use interface. Follow this guide to ",(0,t.jsx)(r.a,{href:"/prophecy-docs-staging/preview/pr-594/Orchestration/airflow/airflow-tutorial-spark",children:"create an Airflow job"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"whats-next",children:"What's next"}),"\n",(0,t.jsx)(r.p,{children:"To continue with Airflow setup, see the following pages:"}),"\n","\n",(0,t.jsx)(o.A,{items:(0,a.$S)().items})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>a});var i=n(96540);const t={},s=i.createContext(t);function o(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:r},e.children)}},81430:(e,r,n)=>{n.d(r,{W:()=>l});var i=n(96540),t=n(40797);const s=["zero","one","two","few","many","other"];function o(e){return s.filter((r=>e.includes(r)))}const a={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,t.A)();return(0,i.useMemo)((()=>{try{return function(e){const r=new Intl.PluralRules(e);return{locale:e,pluralForms:o(r.resolvedOptions().pluralCategories),select:e=>r.select(e)}}(e)}catch(r){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${r.message}\n`),a}}),[e])}function l(){const e=c();return{selectMessage:(r,n)=>function(e,r,n){const i=e.split("|");if(1===i.length)return i[0];i.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);const t=n.select(r),s=n.pluralForms.indexOf(t);return i[Math.min(s,i.length-1)]}(n,r,e)}}},89791:(e,r,n)=>{n.d(r,{$S:()=>i});n(40797);function i(){return n(56942).$S(...arguments)}},99563:(e,r,n)=>{n.d(r,{A:()=>b});n(96540);var i=n(18215),t=n(93751),s=n(56289),o=n(81430),a=n(22887),c=n(50539),l=n(9303);const f={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function u(e){let{href:r,children:n}=e;return(0,d.jsx)(s.A,{href:r,className:(0,i.A)("card padding--lg",f.cardContainer),children:n})}function p(e){let{href:r,icon:n,title:t,description:s}=e;return(0,d.jsxs)(u,{href:r,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,i.A)("text--truncate",f.cardTitle),title:t,children:[n," ",t]}),s&&(0,d.jsx)("p",{className:(0,i.A)("text--truncate",f.cardDescription),title:s,children:s})]})}function h(e){let{item:r}=e;const n=(0,t.Nr)(r),i=function(){const{selectMessage:e}=(0,o.W)();return r=>e(r,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r}))}();return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:r.description??i(r.items.length)}):null}function m(e){let{item:r}=e;const n=(0,a.A)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,t.cC)(r.docId??void 0);return(0,d.jsx)(p,{href:r.href,icon:n,title:r.label,description:r.description??i?.description})}function w(e){let{item:r}=e;switch(r.type){case"link":return(0,d.jsx)(m,{item:r});case"category":return(0,d.jsx)(h,{item:r});default:throw new Error(`unknown item type ${JSON.stringify(r)}`)}}function g(e){let{className:r}=e;const n=(0,t.$S)();return(0,d.jsx)(b,{items:n.items,className:r})}function b(e){const{items:r,className:n}=e;if(!r)return(0,d.jsx)(g,{...e});const s=(0,t.d1)(r);return(0,d.jsx)("section",{className:(0,i.A)("row",n),children:s.map(((e,r)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(w,{item:e})},r)))})}}}]);