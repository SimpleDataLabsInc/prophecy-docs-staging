"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[48461],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(96540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}},81430:(e,t,n)=>{n.d(t,{W:()=>l});var i=n(96540),r=n(40797);const s=["zero","one","two","few","many","other"];function o(e){return s.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,i.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function l(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const i=e.split("|");if(1===i.length)return i[0];i.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);const r=n.select(t),s=n.pluralForms.indexOf(r);return i[Math.min(s,i.length-1)]}(n,t,e)}}},89791:(e,t,n)=>{n.d(t,{$S:()=>i});n(40797);function i(){return n(56942).$S(...arguments)}},98327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"administration/self-hosted/configurations/configurations","title":"Configurations","description":"Admin settings configurations","source":"@site/docs/administration/self-hosted/configurations/configurations.md","sourceDirName":"administration/self-hosted/configurations","slug":"/administration/self-hosted/configurations/","permalink":"/prophecy-docs-staging/preview/pr-599/administration/self-hosted/configurations/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"admin","permalink":"/prophecy-docs-staging/preview/pr-599/tags/admin"},{"inline":true,"label":"settings","permalink":"/prophecy-docs-staging/preview/pr-599/tags/settings"},{"inline":true,"label":"configurations","permalink":"/prophecy-docs-staging/preview/pr-599/tags/configurations"}],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Configurations","id":"configurations","description":"Admin settings configurations","sidebar_position":1,"tags":["admin","settings","configurations"]},"sidebar":"adminSidebar","previous":{"title":"Azure Marketplace guide","permalink":"/prophecy-docs-staging/preview/pr-599/administration/self-hosted/installation-marketplaces/install-azure-marketplace"},"next":{"title":"Alerts Configuration","permalink":"/prophecy-docs-staging/preview/pr-599/administration/self-hosted/configurations/configure-alerts"}}');var r=n(74848),s=n(28453),o=n(99563),a=n(89791);const c={title:"Configurations",id:"configurations",description:"Admin settings configurations",sidebar_position:1,tags:["admin","settings","configurations"]},l=void 0,u={},d=[];function p(e){const t={p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Admin users have to ability to change certain Configs in the Admin settings of their Prophecy environment."}),"\n","\n",(0,r.jsx)(o.A,{items:(0,a.$S)().items})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},99563:(e,t,n)=>{n.d(t,{A:()=>v});n(96540);var i=n(18215),r=n(93751),s=n(56289),o=n(81430),a=n(22887),c=n(50539),l=n(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function p(e){let{href:t,children:n}=e;return(0,d.jsx)(s.A,{href:t,className:(0,i.A)("card padding--lg",u.cardContainer),children:n})}function f(e){let{href:t,icon:n,title:r,description:s}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,i.A)("text--truncate",u.cardTitle),title:r,children:[n," ",r]}),s&&(0,d.jsx)("p",{className:(0,i.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function m(e){let{item:t}=e;const n=(0,r.Nr)(t),i=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??i(t.items.length)}):null}function g(e){let{item:t}=e;const n=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.cC)(t.docId??void 0);return(0,d.jsx)(f,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(g,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,r.$S)();return(0,d.jsx)(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,r.d1)(t);return(0,d.jsx)("section",{className:(0,i.A)("row",n),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}}}]);