"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[35700],{13601:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"analysts/development/development","title":"Pipeline development for Analysts","description":"Introduction to pipeline development for analysts","source":"@site/docs/analysts/development/development.md","sourceDirName":"analysts/development","slug":"/analysts/pipeline-development","permalink":"/prophecy-docs-staging/preview/pr-611/analysts/pipeline-development","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"project","permalink":"/prophecy-docs-staging/preview/pr-611/tags/project"},{"inline":true,"label":"pipeline","permalink":"/prophecy-docs-staging/preview/pr-611/tags/pipeline"},{"inline":true,"label":"analyst","permalink":"/prophecy-docs-staging/preview/pr-611/tags/analyst"},{"inline":true,"label":"development","permalink":"/prophecy-docs-staging/preview/pr-611/tags/development"}],"version":"current","frontMatter":{"title":"Pipeline development for Analysts","sidebar_label":"Pipeline development","id":"development","slug":"/analysts/pipeline-development","description":"Introduction to pipeline development for analysts","tags":["project","pipeline","analyst","development"]},"sidebar":"mySidebar","previous":{"title":"February 2023","permalink":"/prophecy-docs-staging/preview/pr-611/release_notes/2023/Feb_2023"},"next":{"title":"Pipelines","permalink":"/prophecy-docs-staging/preview/pr-611/analysts/pipelines"}}');var r=n(74848),s=n(28453),o=n(99563),l=n(89791);const a={title:"Pipeline development for Analysts",sidebar_label:"Pipeline development",id:"development",slug:"/analysts/pipeline-development",description:"Introduction to pipeline development for analysts",tags:["project","pipeline","analyst","development"]},c=void 0,p={},d=[{value:"What&#39;s next",id:"whats-next",level:2}];function u(e){const t={h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Prophecy makes it easy to extract insights from data to support decision-making. It does so by bridging the gap between data engineering and analysis\u2014all in one platform."}),"\n",(0,r.jsx)(t.p,{children:"Review the pipeline development section of the docs to learn about:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Building pipelines."})," Use the project and pipeline interface in the Prophecy development environment."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Copilot functionality."})," Interact with Copilot to automatically generate full pipelines or pipeline components."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Available gems."})," View all of the available components that you can drag onto your canvas and arrange into a pipeline."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Data exploration."})," Generate data samples through the pipeline to understand what your data looks like at each stage."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Data connections."})," Create connections to external data providers so you can leverage that data natively in Prophecy."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Writing functions."})," Extend your project functionality by building functions that can be used in gems."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Data tests."})," Ensure that your business data is generated reliably over time."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Collaboration."})," Understand how to best work with teammates on your projects and pipelines."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"whats-next",children:"What's next"}),"\n",(0,r.jsx)(t.p,{children:"Explore the following categories and pages for a closer look into pipeline development."}),"\n","\n",(0,r.jsx)(o.A,{items:(0,l.$S)().items})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(96540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}},81430:(e,t,n)=>{n.d(t,{W:()=>c});var i=n(96540),r=n(40797);const s=["zero","one","two","few","many","other"];function o(e){return s.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,i.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const i=e.split("|");if(1===i.length)return i[0];i.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);const r=n.select(t),s=n.pluralForms.indexOf(r);return i[Math.min(s,i.length-1)]}(n,t,e)}}},89791:(e,t,n)=>{n.d(t,{$S:()=>i});n(40797);function i(){return n(56942).$S(...arguments)}},99563:(e,t,n)=>{n.d(t,{A:()=>y});n(96540);var i=n(18215),r=n(93751),s=n(56289),o=n(81430),l=n(22887),a=n(50539),c=n(9303);const p={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function u(e){let{href:t,children:n}=e;return(0,d.jsx)(s.A,{href:t,className:(0,i.A)("card padding--lg",p.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:r,description:s}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(c.A,{as:"h2",className:(0,i.A)("text--truncate",p.cardTitle),title:r,children:[n," ",r]}),s&&(0,d.jsx)("p",{className:(0,i.A)("text--truncate",p.cardDescription),title:s,children:s})]})}function h(e){let{item:t}=e;const n=(0,r.Nr)(t),i=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??i(t.items.length)}):null}function g(e){let{item:t}=e;const n=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(g,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,r.$S)();return(0,d.jsx)(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,r.d1)(t);return(0,d.jsx)("section",{className:(0,i.A)("row",n),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}}}]);