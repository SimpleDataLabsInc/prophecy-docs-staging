"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[91552],{28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(96540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}},40724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"Spark/gems/custom/custom","title":"Custom","description":"Collection of gems that do not fit into the other available categories","source":"@site/docs/Spark/gems/custom/custom.md","sourceDirName":"Spark/gems/custom","slug":"/engineers/custom","permalink":"/prophecy-docs-staging/preview/pr-616/engineers/custom","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Custom","id":"custom","slug":"/engineers/custom","description":"Collection of gems that do not fit into the other available categories","tags":[]},"sidebar":"mySidebar","previous":{"title":"Generative AI Chatbot","permalink":"/prophecy-docs-staging/preview/pr-616/engineers/generative-ai-chatbot"},"next":{"title":"Script","permalink":"/prophecy-docs-staging/preview/pr-616/engineers/script"}}');var o=n(74848),s=n(28453),i=n(99563),c=n(89791);const a={title:"Custom",id:"custom",slug:"/engineers/custom",description:"Collection of gems that do not fit into the other available categories",tags:[]},l=void 0,u={},m=[];function d(e){const t={p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Includes a set of gems that do not fall into the other available categories of gems."}),"\n","\n",(0,o.jsx)(i.A,{items:(0,c.$S)().items})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},81430:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(96540),o=n(40797);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}},89791:(e,t,n)=>{n.d(t,{$S:()=>r});n(40797);function r(){return n(56942).$S(...arguments)}},99563:(e,t,n)=>{n.d(t,{A:()=>v});n(96540);var r=n(18215),o=n(93751),s=n(56289),i=n(81430),c=n(22887),a=n(50539),l=n(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var m=n(74848);function d(e){let{href:t,children:n}=e;return(0,m.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:o,description:s}=e;return(0,m.jsxs)(d,{href:t,children:[(0,m.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:o,children:[n," ",o]}),s&&(0,m.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function f(e){let{item:t}=e;const n=(0,o.Nr)(t),r=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,m.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return(0,m.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,m.jsx)(h,{item:t});case"category":return(0,m.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,o.$S)();return(0,m.jsx)(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return(0,m.jsx)(x,{...e});const s=(0,o.d1)(t);return(0,m.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,m.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,m.jsx)(g,{item:e})},t)))})}}}]);