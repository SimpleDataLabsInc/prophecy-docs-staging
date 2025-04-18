"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[19231],{28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(96540);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}},35372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"administration/authentication/authentication","title":"Authentication","description":"Prophecy support for identity providers for authentication and authorization","source":"@site/docs/administration/authentication/authentication.md","sourceDirName":"administration/authentication","slug":"/administration/authentication/","permalink":"/prophecy-docs-staging/preview/pr-620/administration/authentication/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"SSO","permalink":"/prophecy-docs-staging/preview/pr-620/tags/sso"},{"inline":true,"label":"authentication","permalink":"/prophecy-docs-staging/preview/pr-620/tags/authentication"},{"inline":true,"label":"admin","permalink":"/prophecy-docs-staging/preview/pr-620/tags/admin"}],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Authentication","sidebar_position":2,"id":"authentication","description":"Prophecy support for identity providers for authentication and authorization","sidebar_class_name":"hidden","tags":["SSO","authentication","admin"]},"sidebar":"adminSidebar","previous":{"title":"Security","permalink":"/prophecy-docs-staging/preview/pr-620/administration/security"},"next":{"title":"Active Directory with LDAP","permalink":"/prophecy-docs-staging/preview/pr-620/administration/authentication/active_directory"}}');var r=n(74848),o=n(28453),s=n(99563),a=n(89791);const c={title:"Authentication",sidebar_position:2,id:"authentication",description:"Prophecy support for identity providers for authentication and authorization",sidebar_class_name:"hidden",tags:["SSO","authentication","admin"]},l=void 0,d={},u=[{value:"What&#39;s next",id:"whats-next",level:2}];function h(e){const t={admonition:"admonition",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Prophecy integrates with identity providers to let you log in using your external credentials.\nWhen accessing execution infrastructure (including Spark, schedulers, storage, and other cloud resources), Prophecy securely passes your identity in compliance with your existing authorization mechanisms."}),"\n",(0,r.jsx)(t.p,{children:"We currently support the following options for Prophecy login:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Prophecy Managed"}),(0,r.jsx)(t.td,{children:"Use credentials managed directly by Prophecy."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"LDAP"}),(0,r.jsx)(t.td,{children:"Authenticate via LDAP, integrating with your organization's directory services."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SAML"}),(0,r.jsx)(t.td,{children:"Leverage SAML to log in with identity providers such as Google, Okta, Azure Active Directory, and others."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Azure Active Directory"}),(0,r.jsx)(t.td,{children:"Use Microsoft's cloud-based identity and access management service for authentication."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Google"}),(0,r.jsx)(t.td,{children:"Log in using your Google account credentials."})]})]})]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"Only cluster admins on self-hosted environments have permission to view and edit SSO settings."})}),"\n",(0,r.jsx)(t.p,{children:"If you require some other authentication mechanism, please reach out to our team."}),"\n",(0,r.jsx)(t.h2,{id:"whats-next",children:"What's next"}),"\n",(0,r.jsx)(t.p,{children:"To learn more about with authentication with Prophecy, see the following pages:"}),"\n","\n",(0,r.jsx)(s.A,{items:(0,a.$S)().items})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},81430:(e,t,n)=>{n.d(t,{W:()=>l});var i=n(96540),r=n(40797);const o=["zero","one","two","few","many","other"];function s(e){return o.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,i.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function l(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const i=e.split("|");if(1===i.length)return i[0];i.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);const r=n.select(t),o=n.pluralForms.indexOf(r);return i[Math.min(o,i.length-1)]}(n,t,e)}}},89791:(e,t,n)=>{n.d(t,{$S:()=>i});n(40797);function i(){return n(56942).$S(...arguments)}},99563:(e,t,n)=>{n.d(t,{A:()=>y});n(96540);var i=n(18215),r=n(93751),o=n(56289),s=n(81430),a=n(22887),c=n(50539),l=n(9303);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(74848);function h(e){let{href:t,children:n}=e;return(0,u.jsx)(o.A,{href:t,className:(0,i.A)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:r,description:o}=e;return(0,u.jsxs)(h,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,i.A)("text--truncate",d.cardTitle),title:r,children:[n," ",r]}),o&&(0,u.jsx)("p",{className:(0,i.A)("text--truncate",d.cardDescription),title:o,children:o})]})}function m(e){let{item:t}=e;const n=(0,r.Nr)(t),i=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??i(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,r.$S)();return(0,u.jsx)(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const o=(0,r.d1)(t);return(0,u.jsx)("section",{className:(0,i.A)("row",n),children:o.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}}}]);