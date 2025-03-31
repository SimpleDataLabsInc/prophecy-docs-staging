"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[67879],{11492:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/visual-expression-builder-2e02835cf9422312680b0bd2065b861a.png"},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>o});var t=n(96540);const i={},r=t.createContext(i);function l(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:s},e.children)}},43057:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/code-expression-builder-0a54eaefe94a809a8bdc8472023196f9.png"},81430:(e,s,n)=>{n.d(s,{W:()=>c});var t=n(96540),i=n(40797);const r=["zero","one","two","few","many","other"];function l(e){return r.filter((s=>e.includes(s)))}const o={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,t.useMemo)((()=>{try{return function(e){const s=new Intl.PluralRules(e);return{locale:e,pluralForms:l(s.resolvedOptions().pluralCategories),select:e=>s.select(e)}}(e)}catch(s){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${s.message}\n`),o}}),[e])}function c(){const e=a();return{selectMessage:(s,n)=>function(e,s,n){const t=e.split("|");if(1===t.length)return t[0];t.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${t.length}: ${e}`);const i=n.select(s),r=n.pluralForms.indexOf(i);return t[Math.min(r,t.length-1)]}(n,s,e)}}},84120:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/ask-ai-expression-f8691719d4bbf203ae4915bd0b4446c9.png"},84476:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"analysts/development/gems/visual-expression-builder/visual-expression-builder","title":"Visual expression builder","description":"About the Visual Expression Builder","source":"@site/docs/analysts/development/gems/visual-expression-builder/visual-expression-builder.md","sourceDirName":"analysts/development/gems/visual-expression-builder","slug":"/analysts/visual-expression-builder","permalink":"/prophecy-docs-staging/preview/pr-595/analysts/visual-expression-builder","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"development","permalink":"/prophecy-docs-staging/preview/pr-595/tags/development"},{"inline":true,"label":"visual expressions","permalink":"/prophecy-docs-staging/preview/pr-595/tags/visual-expressions"},{"inline":true,"label":"sql","permalink":"/prophecy-docs-staging/preview/pr-595/tags/sql"}],"version":"current","frontMatter":{"title":"Visual expression builder","id":"visual-expression-builder","slug":"/analysts/visual-expression-builder","description":"About the Visual Expression Builder","tags":["development","visual expressions","sql"]},"sidebar":"mySidebar","previous":{"title":"Macro","permalink":"/prophecy-docs-staging/preview/pr-595/analysts/macro"},"next":{"title":"Visual expressions reference","permalink":"/prophecy-docs-staging/preview/pr-595/analysts/visual-expression-builder-reference"}}');var i=n(74848),r=n(28453),l=n(99563),o=n(89791);const a={title:"Visual expression builder",id:"visual-expression-builder",slug:"/analysts/visual-expression-builder",description:"About the Visual Expression Builder",tags:["development","visual expressions","sql"]},c=void 0,d={},u=[{value:"Expression types",id:"expression-types",level:2},{value:"Static",id:"static",level:3},{value:"Dynamic",id:"dynamic",level:3},{value:"Code view",id:"code-view",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function h(e){const s={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"The Visual Expression Builder helps you build SQL expressions visually by handling the syntax for you."}),"\n",(0,i.jsx)(s.p,{children:"Using the Visual Expression Builder can save you time and effort when constructing complex expressions, and can help you to better understand the relationships between different functions and their arguments. You can use visual expressions in SQL gems, as well as in the Data Explorer and for data tests."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Visual Expression Builder",src:n(11492).A+"",width:"2620",height:"1509"})}),"\n",(0,i.jsx)(s.h2,{id:"expression-types",children:"Expression types"}),"\n",(0,i.jsx)(s.h3,{id:"static",children:"Static"}),"\n",(0,i.jsx)(s.p,{children:"These types of expressions are SQL-native."}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Type"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Example"})})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Column selection"}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"customer_id"}),", ",(0,i.jsx)(s.code,{children:"amounts"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Hardcoded value"}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"15"}),", ",(0,i.jsx)(s.code,{children:"Poland"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Function call"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:'concat(amount, " ", currency)'})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Case statement"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"WHEN active_flag = True THEN first_name OTHERWISE last_name"})})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"dynamic",children:"Dynamic"}),"\n",(0,i.jsx)(s.p,{children:"These types of expressions are Prophecy-native."}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Type"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Example"})})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Configuration value"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"$currency"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Secret value"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"$jdbc_url"})})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"code-view",children:"Code view"}),"\n",(0,i.jsx)(s.p,{children:"If you wish to view the SQL expressions generated by the Visual Expression Builder, you can switch to the Code view of the project. If you update any expressions in the Code view, they will be converted back to visual expressions in the Visual view."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Code Expression Builder",src:n(43057).A+"",width:"2620",height:"1509"})}),"\n",(0,i.jsxs)(s.p,{children:["While viewing the Code view of your expressions, you can click ",(0,i.jsx)(s.strong,{children:"Ask AI"})," to generate your expressions using an English text prompt. You can then review the code expressions, view them on the Visual view, and test them by running the model up to and including the gem with the expressions."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Ask AI to generate",src:n(84120).A+"",width:"2620",height:"1509"})}),"\n",(0,i.jsx)(s.h2,{id:"whats-next",children:"What's next"}),"\n",(0,i.jsx)(s.p,{children:"To continue developing with the Visual Expression Builder, see the following pages:"}),"\n","\n",(0,i.jsx)(l.A,{items:(0,o.$S)().items})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},89791:(e,s,n)=>{n.d(s,{$S:()=>t});n(40797);function t(){return n(56942).$S(...arguments)}},99563:(e,s,n)=>{n.d(s,{A:()=>f});n(96540);var t=n(18215),i=n(93751),r=n(56289),l=n(81430),o=n(22887),a=n(50539),c=n(9303);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(74848);function h(e){let{href:s,children:n}=e;return(0,u.jsx)(r.A,{href:s,className:(0,t.A)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:s,icon:n,title:i,description:r}=e;return(0,u.jsxs)(h,{href:s,children:[(0,u.jsxs)(c.A,{as:"h2",className:(0,t.A)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),r&&(0,u.jsx)("p",{className:(0,t.A)("text--truncate",d.cardDescription),title:r,children:r})]})}function x(e){let{item:s}=e;const n=(0,i.Nr)(s),t=function(){const{selectMessage:e}=(0,l.W)();return s=>e(s,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:s}))}();return n?(0,u.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:s.label,description:s.description??t(s.items.length)}):null}function m(e){let{item:s}=e;const n=(0,o.A)(s.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",t=(0,i.cC)(s.docId??void 0);return(0,u.jsx)(p,{href:s.href,icon:n,title:s.label,description:s.description??t?.description})}function g(e){let{item:s}=e;switch(s.type){case"link":return(0,u.jsx)(m,{item:s});case"category":return(0,u.jsx)(x,{item:s});default:throw new Error(`unknown item type ${JSON.stringify(s)}`)}}function j(e){let{className:s}=e;const n=(0,i.$S)();return(0,u.jsx)(f,{items:n.items,className:s})}function f(e){const{items:s,className:n}=e;if(!s)return(0,u.jsx)(j,{...e});const r=(0,i.d1)(s);return(0,u.jsx)("section",{className:(0,t.A)("row",n),children:r.map(((e,s)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},s)))})}}}]);