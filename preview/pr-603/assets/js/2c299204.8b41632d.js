"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[74864],{28453:(t,e,r)=>{r.d(e,{R:()=>c,x:()=>o});var n=r(96540);const s={},i=n.createContext(s);function c(t){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:c(t.components),n.createElement(i.Provider,{value:e},t.children)}},38432:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"getting-started/quick-starts/quick-starts","title":"Quick starts","description":"Explore the visual canvas","source":"@site/docs/getting-started/quick-starts/quick-starts.md","sourceDirName":"getting-started/quick-starts","slug":"/quick-start","permalink":"/prophecy-docs-staging/preview/pr-603/quick-start","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Quick starts","id":"quick-starts","slug":"/quick-start","description":"Explore the visual canvas","tags":[]},"sidebar":"mySidebar","previous":{"title":"Gems","permalink":"/prophecy-docs-staging/preview/pr-603/gems"},"next":{"title":"Quick start for Analysts","permalink":"/prophecy-docs-staging/preview/pr-603/analysts/quick-start"}}');var s=r(74848),i=r(28453),c=r(99563),o=r(89791);const a={title:"Quick starts",id:"quick-starts",slug:"/quick-start",description:"Explore the visual canvas",tags:[]},l=void 0,u={},d=[];function p(t){const e={p:"p",...(0,i.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"To get started with the visual canvas in Prophecy, try one of these quick starts."}),"\n","\n",(0,s.jsx)(c.A,{items:(0,o.$S)().items})]})}function m(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(p,{...t})}):p(t)}},81430:(t,e,r)=>{r.d(e,{W:()=>l});var n=r(96540),s=r(40797);const i=["zero","one","two","few","many","other"];function c(t){return i.filter((e=>t.includes(e)))}const o={locale:"en",pluralForms:c(["one","other"]),select:t=>1===t?"one":"other"};function a(){const{i18n:{currentLocale:t}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(t){const e=new Intl.PluralRules(t);return{locale:t,pluralForms:c(e.resolvedOptions().pluralCategories),select:t=>e.select(t)}}(t)}catch(e){return console.error(`Failed to use Intl.PluralRules for locale "${t}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${e.message}\n`),o}}),[t])}function l(){const t=a();return{selectMessage:(e,r)=>function(t,e,r){const n=t.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${t}`);const s=r.select(e),i=r.pluralForms.indexOf(s);return n[Math.min(i,n.length-1)]}(r,e,t)}}},89791:(t,e,r)=>{r.d(e,{$S:()=>n});r(40797);function n(){return r(56942).$S(...arguments)}},99563:(t,e,r)=>{r.d(e,{A:()=>k});r(96540);var n=r(18215),s=r(93751),i=r(56289),c=r(81430),o=r(22887),a=r(50539),l=r(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(74848);function p(t){let{href:e,children:r}=t;return(0,d.jsx)(i.A,{href:e,className:(0,n.A)("card padding--lg",u.cardContainer),children:r})}function m(t){let{href:e,icon:r,title:s,description:i}=t;return(0,d.jsxs)(p,{href:e,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:s,children:[r," ",s]}),i&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:i,children:i})]})}function f(t){let{item:e}=t;const r=(0,s.Nr)(e),n=function(){const{selectMessage:t}=(0,c.W)();return e=>t(e,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))}();return r?(0,d.jsx)(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??n(e.items.length)}):null}function h(t){let{item:e}=t;const r=(0,o.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(e.docId??void 0);return(0,d.jsx)(m,{href:e.href,icon:r,title:e.label,description:e.description??n?.description})}function g(t){let{item:e}=t;switch(e.type){case"link":return(0,d.jsx)(h,{item:e});case"category":return(0,d.jsx)(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function x(t){let{className:e}=t;const r=(0,s.$S)();return(0,d.jsx)(k,{items:r.items,className:e})}function k(t){const{items:e,className:r}=t;if(!e)return(0,d.jsx)(x,{...t});const i=(0,s.d1)(e);return(0,d.jsx)("section",{className:(0,n.A)("row",r),children:i.map(((t,e)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:t})},e)))})}}}]);