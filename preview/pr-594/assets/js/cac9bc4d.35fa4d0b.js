"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[84566],{28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(96540);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}},39916:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"administration/fabrics/Spark-fabrics/Fabrics","title":"Spark fabrics","description":"Connect Prophecy to an external execution engine","source":"@site/docs/administration/fabrics/Spark-fabrics/fabrics.md","sourceDirName":"administration/fabrics/Spark-fabrics","slug":"/administration/fabrics/Spark-fabrics/Fabrics","permalink":"/prophecy-docs-staging/preview/pr-594/administration/fabrics/Spark-fabrics/Fabrics","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Livy","permalink":"/prophecy-docs-staging/preview/pr-594/tags/livy"},{"inline":true,"label":"Fabrics","permalink":"/prophecy-docs-staging/preview/pr-594/tags/fabrics"},{"inline":true,"label":"Execution","permalink":"/prophecy-docs-staging/preview/pr-594/tags/execution"}],"version":"current","frontMatter":{"title":"Spark fabrics","description":"Connect Prophecy to an external execution engine","id":"Fabrics","sidebar_class_name":"hidden","tags":["Livy","Fabrics","Execution"]},"sidebar":"adminSidebar","previous":{"title":"Tableau","permalink":"/prophecy-docs-staging/preview/pr-594/administration/fabrics/prophecy-fabrics/connections/tableau"},"next":{"title":"Databricks","permalink":"/prophecy-docs-staging/preview/pr-594/administration/fabrics/Spark-fabrics/databricks/"}}');var i=n(74848),s=n(28453),a=n(99563),o=n(89791);const c={title:"Spark fabrics",description:"Connect Prophecy to an external execution engine",id:"Fabrics",sidebar_class_name:"hidden",tags:["Livy","Fabrics","Execution"]},l=void 0,d={},u=[{value:"What&#39;s next",id:"whats-next",level:2}];function p(e){const t={a:"a",admonition:"admonition",h2:"h2",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["A ",(0,i.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-594/fabrics",children:"fabric"})," is a logical execution environment. Teams can organize their data engineering into multiple environments such as development, staging, and production."]}),"\n",(0,i.jsx)(t.p,{children:"Prophecy provides a Prophecy-managed Spark fabric that can get you started with building your pipelines. However, you can also create your own fabrics to connect to other execution environments, such as a Databricks workspace."}),"\n",(0,i.jsxs)(t.p,{children:["When you connect to ",(0,i.jsx)(t.strong,{children:"external"})," environments, Prophecy has the same level of access as the user authenticated for that fabric. Therefore, if you need to do something like create a cluster in Prophecy, you will first need the permission to create clusters ",(0,i.jsx)(t.strong,{children:"in your respective execution environment"}),"."]}),"\n",(0,i.jsx)(t.admonition,{title:"Diagnostics",type:"info",children:(0,i.jsxs)(t.p,{children:["To troubleshoot fabric creation or connection issues, take a look at the fabric ",(0,i.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-594/fabric-diagnostics",children:"diagnostics"}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"whats-next",children:"What's next"}),"\n",(0,i.jsx)(t.p,{children:"Click on a tile below to learn how to create a fabric for a certain provider."}),"\n","\n",(0,i.jsx)(a.A,{items:(0,o.$S)().items})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},81430:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(96540),i=n(40797);const s=["zero","one","two","few","many","other"];function a(e){return s.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function l(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),s=n.pluralForms.indexOf(i);return r[Math.min(s,r.length-1)]}(n,t,e)}}},89791:(e,t,n)=>{n.d(t,{$S:()=>r});n(40797);function r(){return n(56942).$S(...arguments)}},99563:(e,t,n)=>{n.d(t,{A:()=>x});n(96540);var r=n(18215),i=n(93751),s=n(56289),a=n(81430),o=n(22887),c=n(50539),l=n(9303);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(74848);function p(e){let{href:t,children:n}=e;return(0,u.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:i,description:s}=e;return(0,u.jsxs)(p,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),s&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function f(e){let{item:t}=e;const n=(0,i.Nr)(t),r=function(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function m(e){let{item:t}=e;const n=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,u.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(m,{item:t});case"category":return(0,u.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,i.$S)();return(0,u.jsx)(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(b,{...e});const s=(0,i.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}}}]);