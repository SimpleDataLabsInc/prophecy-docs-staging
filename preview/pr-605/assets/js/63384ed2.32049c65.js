"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[2040],{28453:(t,e,r)=>{r.d(e,{R:()=>o,x:()=>a});var n=r(96540);const s={},i=n.createContext(s);function o(t){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:o(t.components),n.createElement(i.Provider,{value:e},t.children)}},69644:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"getting-started/getting-started","title":"Getting started","description":"Getting started with Prophecy","source":"@site/docs/getting-started/getting-started.md","sourceDirName":"getting-started","slug":"/getting-started/","permalink":"/prophecy-docs-staging/preview/pr-605/getting-started/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Getting started","id":"getting-started","description":"Getting started with Prophecy","tags":[]},"sidebar":"mySidebar","previous":{"title":"Prophecy","permalink":"/prophecy-docs-staging/preview/pr-605/"},"next":{"title":"Fabrics","permalink":"/prophecy-docs-staging/preview/pr-605/fabrics"}}');var s=r(74848),i=r(28453),o=r(99563),a=r(89791);const c={title:"Getting started",id:"getting-started",description:"Getting started with Prophecy",tags:[]},l=void 0,d={},u=[];function p(t){const e={em:"em",p:"p",...(0,i.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["To get started with Prophecy, you must first understand ",(0,s.jsx)(e.em,{children:"how"})," you are going to use Prophecy."]}),"\n",(0,s.jsx)(e.p,{children:"Will you try to extract business insights from the data, or are you more focused on ensuring that data is available and reliable? Are you identifying data trends, or are you monitoring data quality? Do you want to optimize the computation of data pipelines, or do you want to build pipelines that prepare data for reporting? Keep this in mind as you read through our getting started material."}),"\n","\n",(0,s.jsx)(o.A,{items:(0,a.$S)().items})]})}function m(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(p,{...t})}):p(t)}},81430:(t,e,r)=>{r.d(e,{W:()=>l});var n=r(96540),s=r(40797);const i=["zero","one","two","few","many","other"];function o(t){return i.filter((e=>t.includes(e)))}const a={locale:"en",pluralForms:o(["one","other"]),select:t=>1===t?"one":"other"};function c(){const{i18n:{currentLocale:t}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(t){const e=new Intl.PluralRules(t);return{locale:t,pluralForms:o(e.resolvedOptions().pluralCategories),select:t=>e.select(t)}}(t)}catch(e){return console.error(`Failed to use Intl.PluralRules for locale "${t}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${e.message}\n`),a}}),[t])}function l(){const t=c();return{selectMessage:(e,r)=>function(t,e,r){const n=t.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${t}`);const s=r.select(e),i=r.pluralForms.indexOf(s);return n[Math.min(i,n.length-1)]}(r,e,t)}}},89791:(t,e,r)=>{r.d(e,{$S:()=>n});r(40797);function n(){return r(56942).$S(...arguments)}},99563:(t,e,r)=>{r.d(e,{A:()=>x});r(96540);var n=r(18215),s=r(93751),i=r(56289),o=r(81430),a=r(22887),c=r(50539),l=r(9303);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=r(74848);function p(t){let{href:e,children:r}=t;return(0,u.jsx)(i.A,{href:e,className:(0,n.A)("card padding--lg",d.cardContainer),children:r})}function m(t){let{href:e,icon:r,title:s,description:i}=t;return(0,u.jsxs)(p,{href:e,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:s,children:[r," ",s]}),i&&(0,u.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:i,children:i})]})}function g(t){let{item:e}=t;const r=(0,s.Nr)(e),n=function(){const{selectMessage:t}=(0,o.W)();return e=>t(e,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))}();return r?(0,u.jsx)(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??n(e.items.length)}):null}function h(t){let{item:e}=t;const r=(0,a.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(e.docId??void 0);return(0,u.jsx)(m,{href:e.href,icon:r,title:e.label,description:e.description??n?.description})}function f(t){let{item:e}=t;switch(e.type){case"link":return(0,u.jsx)(h,{item:e});case"category":return(0,u.jsx)(g,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function y(t){let{className:e}=t;const r=(0,s.$S)();return(0,u.jsx)(x,{items:r.items,className:e})}function x(t){const{items:e,className:r}=t;if(!e)return(0,u.jsx)(y,{...t});const i=(0,s.d1)(e);return(0,u.jsx)("section",{className:(0,n.A)("row",r),children:i.map(((t,e)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(f,{item:t})},e)))})}}}]);