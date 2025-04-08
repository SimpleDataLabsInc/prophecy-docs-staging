"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[87093],{28240:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"Spark/spark-streaming/streaming-sources-and-targets/streaming-sources-and-targets","title":"Streaming Sources and Targets","description":"Spark streaming sources and targets","source":"@site/docs/Spark/spark-streaming/streaming-sources-and-targets/streaming-sources-and-targets.md","sourceDirName":"Spark/spark-streaming/streaming-sources-and-targets","slug":"/engineers/streaming-source-and-targets","permalink":"/prophecy-docs-staging/preview/pr-609/engineers/streaming-source-and-targets","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Streaming Sources and Targets","id":"streaming-sources-and-targets","slug":"/engineers/streaming-source-and-targets","description":"Spark streaming sources and targets","tags":[]},"sidebar":"mySidebar","previous":{"title":"Spark Structured Streaming","permalink":"/prophecy-docs-staging/preview/pr-609/engineers/spark-streaming"},"next":{"title":"File-based","permalink":"/prophecy-docs-staging/preview/pr-609/engineers/file-based-streaming-source-and-targets"}}');var s=r(74848),a=r(28453),i=r(99563),o=r(89791);const c={title:"Streaming Sources and Targets",id:"streaming-sources-and-targets",slug:"/engineers/streaming-source-and-targets",description:"Spark streaming sources and targets",tags:[]},l=void 0,u={},d=[];function g(e){const t={p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Spark streaming sources and targets include the following topics:"}),"\n","\n",(0,s.jsx)(i.A,{items:(0,o.$S)().items})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var n=r(96540);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}},81430:(e,t,r)=>{r.d(t,{W:()=>l});var n=r(96540),s=r(40797);const a=["zero","one","two","few","many","other"];function i(e){return a.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function l(){const e=c();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=r.select(t),a=r.pluralForms.indexOf(s);return n[Math.min(a,n.length-1)]}(r,t,e)}}},89791:(e,t,r)=>{r.d(t,{$S:()=>n});r(40797);function n(){return r(56942).$S(...arguments)}},99563:(e,t,r)=>{r.d(t,{A:()=>k});r(96540);var n=r(18215),s=r(93751),a=r(56289),i=r(81430),o=r(22887),c=r(50539),l=r(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(74848);function g(e){let{href:t,children:r}=e;return(0,d.jsx)(a.A,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:s,description:a}=e;return(0,d.jsxs)(g,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:s,children:[r," ",s]}),a&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:a,children:a})]})}function p(e){let{item:t}=e;const r=(0,s.Nr)(t),n=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,d.jsx)(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function f(e){let{item:t}=e;const r=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,s.$S)();return(0,d.jsx)(k,{items:r.items,className:t})}function k(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(x,{...e});const a=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",r),children:a.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}}}]);