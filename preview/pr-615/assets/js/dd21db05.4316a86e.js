"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[67879],{28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>l});var i=t(96540);const n={},r=i.createContext(n);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:s},e.children)}},43057:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/code-expression-builder-0a54eaefe94a809a8bdc8472023196f9.png"},43565:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/copilot-visual-expression-195fddcbee1d768098aa328897d9e900.png"},81430:(e,s,t)=>{t.d(s,{W:()=>c});var i=t(96540),n=t(40797);const r=["zero","one","two","few","many","other"];function o(e){return r.filter((s=>e.includes(s)))}const l={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,n.A)();return(0,i.useMemo)((()=>{try{return function(e){const s=new Intl.PluralRules(e);return{locale:e,pluralForms:o(s.resolvedOptions().pluralCategories),select:e=>s.select(e)}}(e)}catch(s){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${s.message}\n`),l}}),[e])}function c(){const e=a();return{selectMessage:(s,t)=>function(e,s,t){const i=e.split("|");if(1===i.length)return i[0];i.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);const n=t.select(s),r=t.pluralForms.indexOf(n);return i[Math.min(r,i.length-1)]}(t,s,e)}}},84476:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"analysts/development/gems/visual-expression-builder/visual-expression-builder","title":"Visual expression builder","description":"About the visual expression builder","source":"@site/docs/analysts/development/gems/visual-expression-builder/visual-expression-builder.md","sourceDirName":"analysts/development/gems/visual-expression-builder","slug":"/analysts/visual-expression-builder","permalink":"/prophecy-docs-staging/preview/pr-615/analysts/visual-expression-builder","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"development","permalink":"/prophecy-docs-staging/preview/pr-615/tags/development"},{"inline":true,"label":"visual expressions","permalink":"/prophecy-docs-staging/preview/pr-615/tags/visual-expressions"},{"inline":true,"label":"sql","permalink":"/prophecy-docs-staging/preview/pr-615/tags/sql"}],"version":"current","frontMatter":{"title":"Visual expression builder","id":"visual-expression-builder","slug":"/analysts/visual-expression-builder","description":"About the visual expression builder","tags":["development","visual expressions","sql"]},"sidebar":"mySidebar","previous":{"title":"Macro","permalink":"/prophecy-docs-staging/preview/pr-615/analysts/macro"},"next":{"title":"Visual expressions reference","permalink":"/prophecy-docs-staging/preview/pr-615/analysts/visual-expression-builder-reference"}}');var n=t(74848),r=t(28453),o=t(99563),l=t(89791);const a={title:"Visual expression builder",id:"visual-expression-builder",slug:"/analysts/visual-expression-builder",description:"About the visual expression builder",tags:["development","visual expressions","sql"]},c=void 0,u={},d=[{value:"Build with Copilot",id:"build-with-copilot",level:2},{value:"Code view",id:"code-view",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function p(e){const s={a:"a",admonition:"admonition",h2:"h2",img:"img",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Use the visual expression builder to write complex SQL expressions without worrying about syntax. The visual expression builder can help you to better understand the relationships between different functions and their arguments. You can use visual expressions in gems and data tests."}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["To understand how to build expressions with the visual expression build, see the ",(0,n.jsx)(s.a,{href:"/analysts/visual-expression-builder-reference",children:"reference guide"}),"."]})}),"\n",(0,n.jsx)(s.h2,{id:"build-with-copilot",children:"Build with Copilot"}),"\n",(0,n.jsx)(s.p,{children:"You can use Copilot from the visual expression builder for additional help. Whether you're exploring functions, learning what's possible, or writing expressions with prompts, Copilot supports your workflow."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Copilot in the visual expression builder",src:t(43565).A+"",width:"2870",height:"1610"})}),"\n",(0,n.jsx)(s.h2,{id:"code-view",children:"Code view"}),"\n",(0,n.jsx)(s.p,{children:"To view the SQL expressions generated by the visual expression builder, you can switch to the Code view of a gem or of the project. If you update any expressions in the Code view, they will be converted back to visual expressions in the Visual view."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Code Expression Builder",src:t(43057).A+"",width:"2620",height:"1509"})}),"\n",(0,n.jsx)(s.p,{children:"You can also ask Copilot to generate SQL expressions directly in the Code view."}),"\n",(0,n.jsx)(s.h2,{id:"whats-next",children:"What's next"}),"\n",(0,n.jsx)(s.p,{children:"To continue developing with the visual expression builder, see the following pages:"}),"\n","\n",(0,n.jsx)(o.A,{items:(0,l.$S)().items})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},89791:(e,s,t)=>{t.d(s,{$S:()=>i});t(40797);function i(){return t(56942).$S(...arguments)}},99563:(e,s,t)=>{t.d(s,{A:()=>v});t(96540);var i=t(18215),n=t(93751),r=t(56289),o=t(81430),l=t(22887),a=t(50539),c=t(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=t(74848);function p(e){let{href:s,children:t}=e;return(0,d.jsx)(r.A,{href:s,className:(0,i.A)("card padding--lg",u.cardContainer),children:t})}function h(e){let{href:s,icon:t,title:n,description:r}=e;return(0,d.jsxs)(p,{href:s,children:[(0,d.jsxs)(c.A,{as:"h2",className:(0,i.A)("text--truncate",u.cardTitle),title:n,children:[t," ",n]}),r&&(0,d.jsx)("p",{className:(0,i.A)("text--truncate",u.cardDescription),title:r,children:r})]})}function m(e){let{item:s}=e;const t=(0,n.Nr)(s),i=function(){const{selectMessage:e}=(0,o.W)();return s=>e(s,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:s}))}();return t?(0,d.jsx)(h,{href:t,icon:"\ud83d\uddc3\ufe0f",title:s.label,description:s.description??i(s.items.length)}):null}function x(e){let{item:s}=e;const t=(0,l.A)(s.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,n.cC)(s.docId??void 0);return(0,d.jsx)(h,{href:s.href,icon:t,title:s.label,description:s.description??i?.description})}function f(e){let{item:s}=e;switch(s.type){case"link":return(0,d.jsx)(x,{item:s});case"category":return(0,d.jsx)(m,{item:s});default:throw new Error(`unknown item type ${JSON.stringify(s)}`)}}function g(e){let{className:s}=e;const t=(0,n.$S)();return(0,d.jsx)(v,{items:t.items,className:s})}function v(e){const{items:s,className:t}=e;if(!s)return(0,d.jsx)(g,{...e});const r=(0,n.d1)(s);return(0,d.jsx)("section",{className:(0,i.A)("row",t),children:r.map(((e,s)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},s)))})}}}]);