"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[54328],{28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var n=r(96540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}},33392:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/files/WhatsNewWebinarNov13Slides-509cb3e035c736cf86881169f5ae0405.pdf"},74595:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"release_notes/2024/October_2024/webinar_new_features/webinar_new_features","title":"Webinar New Features to Turbocharge Pipeline Development","description":"Don\'t miss these features - upgrade today","source":"@site/docs/release_notes/2024/October_2024/webinar_new_features/webinar_new_features.md","sourceDirName":"release_notes/2024/October_2024/webinar_new_features","slug":"/release_notes/2024/October_2024/webinar_new_features/","permalink":"/prophecy-docs-staging/preview/pr-620/release_notes/2024/October_2024/webinar_new_features/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"release","permalink":"/prophecy-docs-staging/preview/pr-620/tags/release"},{"inline":true,"label":"webinar","permalink":"/prophecy-docs-staging/preview/pr-620/tags/webinar"}],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"id":"webinar_new_features","description":"Don\'t miss these features - upgrade today","title":"Webinar New Features to Turbocharge Pipeline Development","tags":["release","webinar"]},"sidebar":"mySidebar","previous":{"title":"October 2024","permalink":"/prophecy-docs-staging/preview/pr-620/release_notes/2024/October_2024/"},"next":{"title":"Accelerating with AI","permalink":"/prophecy-docs-staging/preview/pr-620/release_notes/2024/October_2024/webinar_new_features/ai_capabilities"}}');var s=r(74848),i=r(28453),a=r(99563),o=r(89791);const l={sidebar_position:1,id:"webinar_new_features",description:"Don't miss these features - upgrade today",title:"Webinar New Features to Turbocharge Pipeline Development",tags:["release","webinar"]},c=void 0,u={},d=[];function p(e){const t={a:"a",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["We've assembled some of our favorite features released recently including the latest and greatest features from 3.4. If you missed the webinar, don't worry! Click for the full video ",(0,s.jsx)(t.a,{href:"https://prophecy-1.wistia.com/medias/ka9pj2cq09",children:"EMEA"})," / ",(0,s.jsx)(t.a,{href:"https://prophecy-1.wistia.com/medias/lou4c4sr7b",children:"AMER"})," and find the slides ",(0,s.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(33392).A+"",children:"here"}),". Need something bite-size? The pages below have 1-2 min videos about each feature."]}),"\n",(0,s.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,s.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,s.jsx)("iframe",{src:"https://fast.wistia.net/embed/iframe/lou4c4sr7b?seo=false?videoFoam=true",title:"FullWebinarAMER",allow:"autoplay; fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,s.jsx)(t.p,{children:"Don't miss out - upgrade today!"}),"\n","\n",(0,s.jsx)(a.A,{items:(0,o.$S)().items})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},81430:(e,t,r)=>{r.d(t,{W:()=>c});var n=r(96540),s=r(40797);const i=["zero","one","two","few","many","other"];function a(e){return i.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function c(){const e=l();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=r.select(t),i=r.pluralForms.indexOf(s);return n[Math.min(i,n.length-1)]}(r,t,e)}}},89791:(e,t,r)=>{r.d(t,{$S:()=>n});r(40797);function n(){return r(56942).$S(...arguments)}},99563:(e,t,r)=>{r.d(t,{A:()=>g});r(96540);var n=r(18215),s=r(93751),i=r(56289),a=r(81430),o=r(22887),l=r(50539),c=r(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(74848);function p(e){let{href:t,children:r}=e;return(0,d.jsx)(i.A,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:r})}function f(e){let{href:t,icon:r,title:s,description:i}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)(c.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:s,children:[r," ",s]}),i&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:i,children:i})]})}function m(e){let{item:t}=e;const r=(0,s.Nr)(t),n=function(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,d.jsx)(f,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function h(e){let{item:t}=e;const r=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(f,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function w(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const r=(0,s.$S)();return(0,d.jsx)(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(b,{...e});const i=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",r),children:i.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(w,{item:e})},t)))})}}}]);