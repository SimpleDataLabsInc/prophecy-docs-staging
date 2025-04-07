"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[76512],{24021:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/Use_secret-a1e811f96018f92edfe2ee315b0b7fe1.png"},28453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>c});var n=r(96540);const t={},i=n.createContext(t);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(i.Provider,{value:s},e.children)}},74066:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"administration/secrets/secrets","title":"Secrets","description":"Connect to external data providers using secrets","source":"@site/docs/administration/secrets/secrets.md","sourceDirName":"administration/secrets","slug":"/administration/secrets/","permalink":"/prophecy-docs-staging/preview/pr-608/administration/secrets/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"secrets","permalink":"/prophecy-docs-staging/preview/pr-608/tags/secrets"},{"inline":true,"label":"credentials","permalink":"/prophecy-docs-staging/preview/pr-608/tags/credentials"}],"version":"current","frontMatter":{"title":"Secrets","id":"secrets","description":"Connect to external data providers using secrets","sidebar_class_name":"hidden","tags":["secrets","credentials"]},"sidebar":"adminSidebar","previous":{"title":"Open Source","permalink":"/prophecy-docs-staging/preview/pr-608/administration/fabrics/airflow-fabrics/open-source-airflow"},"next":{"title":"Secret providers","permalink":"/prophecy-docs-staging/preview/pr-608/administration/secrets/secret-providers"}}');var t=r(74848),i=r(28453);const o={title:"Secrets",id:"secrets",description:"Connect to external data providers using secrets",sidebar_class_name:"hidden",tags:["secrets","credentials"]},c=void 0,a={},l=[{value:"Usage",id:"usage",level:2},{value:"Pipeline configurations",id:"pipeline-configurations",level:3}];function d(e){const s={a:"a",admonition:"admonition",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["In some cases, you'll need to input credentials in Prophecy for authentication to external systems. This is why Prophecy lets you create ",(0,t.jsx)(s.strong,{children:"secrets"})," that securely encrypt your sensitive information. These secrets can be used in your connections or throughout your pipelines (in Source gems, for example)."]}),"\n",(0,t.jsxs)(s.p,{children:["We provide a Prophecy-hosted secret manager, as well as other ",(0,t.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-608/administration/secrets/secret-providers",children:"secret providers"})," such as Databricks."]}),"\n",(0,t.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(s.p,{children:["If any gem requires a authentication field like ",(0,t.jsx)(s.strong,{children:"username"})," or ",(0,t.jsx)(s.strong,{children:"password"}),", you will have the option to ",(0,t.jsx)(s.strong,{children:"Insert Secret"})," as shown below."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"use_secret",src:r(24021).A+"",width:"2880",height:"1084"})}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Click on ",(0,t.jsx)(s.strong,{children:"Insert Secret"})," to will open the dropdown for all secrets and providers available in your fabric. If you don't see your secrets, confirm you have correct fabric selected in the top right corner."]}),"\n",(0,t.jsxs)(s.li,{children:["Attach a cluster from top right corner to be able to ",(0,t.jsx)(s.strong,{children:"Refresh Secrets"})," for any provider."]}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.p,{children:"If you use plain text for username and password fields, you will see a warning diagnostic in your gem."})}),"\n",(0,t.jsx)(s.h3,{id:"pipeline-configurations",children:"Pipeline configurations"}),"\n",(0,t.jsxs)(s.p,{children:["If you want to populate secrets dynamically in your pipeline, you can set up secrets in ",(0,t.jsx)(s.a,{href:"/engineers/pipeline-configuration-secrets",children:"pipeline configurations"}),"."]})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);