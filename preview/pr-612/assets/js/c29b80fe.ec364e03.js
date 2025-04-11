"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[32594],{28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(96540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}},49350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"Spark/gems/join-split/join-split","title":"Join & Split","description":"The set of gems that can split or join one or more DataFrames","source":"@site/docs/Spark/gems/join-split/join-split.md","sourceDirName":"Spark/gems/join-split","slug":"/engineers/join-split","permalink":"/prophecy-docs-staging/preview/pr-612/engineers/join-split","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Join & Split","id":"join-split","slug":"/engineers/join-split","description":"The set of gems that can split or join one or more DataFrames","tags":[]},"sidebar":"mySidebar","previous":{"title":"WindowFunction","permalink":"/prophecy-docs-staging/preview/pr-612/engineers/window-function"},"next":{"title":"CompareColumns","permalink":"/prophecy-docs-staging/preview/pr-612/engineers/compare-columns"}}');var s=n(74848),o=n(28453),i=n(99563),c=n(89791);const l={title:"Join & Split",id:"join-split",slug:"/engineers/join-split",description:"The set of gems that can split or join one or more DataFrames",tags:[]},a=void 0,u={},p=[];function m(e){const t={p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Includes the set of gems that help with the process of merging or splitting DataFrames to create new DataFrames."}),"\n","\n",(0,s.jsx)(i.A,{items:(0,c.$S)().items})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},81430:(e,t,n)=>{n.d(t,{W:()=>a});var r=n(96540),s=n(40797);const o=["zero","one","two","few","many","other"];function i(e){return o.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),o=n.pluralForms.indexOf(s);return r[Math.min(o,r.length-1)]}(n,t,e)}}},89791:(e,t,n)=>{n.d(t,{$S:()=>r});n(40797);function r(){return n(56942).$S(...arguments)}},99563:(e,t,n)=>{n.d(t,{A:()=>x});n(96540);var r=n(18215),s=n(93751),o=n(56289),i=n(81430),c=n(22887),l=n(50539),a=n(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var p=n(74848);function m(e){let{href:t,children:n}=e;return(0,p.jsx)(o.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function d(e){let{href:t,icon:n,title:s,description:o}=e;return(0,p.jsxs)(m,{href:t,children:[(0,p.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:s,children:[n," ",s]}),o&&(0,p.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:o,children:o})]})}function f(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,p.jsx)(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,p.jsx)(d,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,p.jsx)(h,{item:t});case"category":return(0,p.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function j(e){let{className:t}=e;const n=(0,s.$S)();return(0,p.jsx)(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return(0,p.jsx)(j,{...e});const o=(0,s.d1)(t);return(0,p.jsx)("section",{className:(0,r.A)("row",n),children:o.map(((e,t)=>(0,p.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,p.jsx)(g,{item:e})},t)))})}}}]);