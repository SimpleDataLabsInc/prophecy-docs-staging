"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[94735],{5378:(e,r,s)=>{s.d(r,{A:()=>t});const t=s.p+"assets/images/Secret_provider_Screen-68981c2a8e53f879ff02549a9c930f5c.png"},28453:(e,r,s)=>{s.d(r,{R:()=>a,x:()=>c});var t=s(96540);const i={},n=t.createContext(i);function a(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(n.Provider,{value:r},e.children)}},84274:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"administration/secrets/secret-providers","title":"Secret providers","description":"Add secrets to your Prophecy fabric","source":"@site/docs/administration/secrets/secret-providers.md","sourceDirName":"administration/secrets","slug":"/administration/secrets/secret-providers","permalink":"/prophecy-docs-staging/preview/pr-596/administration/secrets/secret-providers","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"secrets","permalink":"/prophecy-docs-staging/preview/pr-596/tags/secrets"},{"inline":true,"label":"connections","permalink":"/prophecy-docs-staging/preview/pr-596/tags/connections"},{"inline":true,"label":"fabrics","permalink":"/prophecy-docs-staging/preview/pr-596/tags/fabrics"}],"version":"current","frontMatter":{"title":"Secret providers","id":"secret-providers","description":"Add secrets to your Prophecy fabric","tags":["secrets","connections","fabrics"]},"sidebar":"adminSidebar","previous":{"title":"Secrets","permalink":"/prophecy-docs-staging/preview/pr-596/administration/secrets/"},"next":{"title":"Architecture","permalink":"/prophecy-docs-staging/preview/pr-596/administration/architecture"}}');var i=s(74848),n=s(28453);const a={title:"Secret providers",id:"secret-providers",description:"Add secrets to your Prophecy fabric",tags:["secrets","connections","fabrics"]},c=void 0,o={},d=[{value:"Prophecy",id:"prophecy",level:2},{value:"Databricks",id:"databricks",level:2},{value:"HashiCorp Vault",id:"hashicorp-vault",level:2},{value:"Environment Variables",id:"environment-variables",level:2}];function l(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Secrets"})," help you safeguard sensitive information such as API keys, passwords, and encryption keys. When you create a fabric, you can add one or more secret providers to manage your secrets for that fabric. Then, you can create secrets for use in your pipelines."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"secret_screen",src:s(5378).A+"",width:"2880",height:"1084"})}),"\n",(0,i.jsxs)(r.p,{children:["You can configure multiple secret providers per fabric in the ",(0,i.jsx)(r.strong,{children:"Providers"})," tab of the fabric configuration. Providers and secrets can be added, edited, and deleted from Prophecy. We support the following providers."]}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Secret Provider"}),(0,i.jsx)(r.th,{children:"Details"}),(0,i.jsx)(r.th,{children:"Platform"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Prophecy"}),(0,i.jsxs)(r.td,{children:["Recommended if you use ",(0,i.jsx)(r.a,{href:"/prophecy-docs-staging/preview/pr-596/administration/architecture",children:"Prophecy Automate"})]}),(0,i.jsx)(r.td,{children:"Prophecy"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Databricks Secrets"}),(0,i.jsx)(r.td,{children:"Recommended if you are a Databricks user"}),(0,i.jsx)(r.td,{children:"Databricks"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"HashiCorp Vault"}),(0,i.jsx)(r.td,{children:"Recommended if your organization privileges HashiCorp Vault"}),(0,i.jsx)(r.td,{children:"Any Spark"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Environment Variables"}),(0,i.jsx)(r.td,{children:"Recommended if your organization privileges environment variables"}),(0,i.jsx)(r.td,{children:"Any Spark"})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"prophecy",children:"Prophecy"}),"\n",(0,i.jsxs)(r.p,{children:["Prophecy provides its own secret manager for Prophecy fabrics to securely store both text-based secrets (like passwords) and binary data (such as uploaded certificates). We prioritize the security of your data with advanced encryption techniques designed to protect against unauthorized access. ",(0,i.jsx)(r.a,{href:"/getting-help",children:"Contact us"})," to learn more about our native secret management."]}),"\n",(0,i.jsx)(r.h2,{id:"databricks",children:"Databricks"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"https://docs.databricks.com/en/security/secrets/index.html",children:"Databricks"})," is the most commonly used secret provider in Prophecy. By default, a Databricks secret provider is added to all Databricks fabrics. You can remove this if required."]}),"\n",(0,i.jsx)(r.p,{children:"If you add new secrets in Databricks, you can refresh secrets in Prophecy to fetch them. You can also add new secrets directly in Prophecy. To refresh or add secrets, you must be attached to a cluster. You can only access secrets that you also can access in Databricks."}),"\n",(0,i.jsx)(r.admonition,{title:"Free trials",type:"info",children:(0,i.jsx)(r.p,{children:"If you are using a free trial, you can use Databricks as the secret provider. Your secrets will be automatically cleaned up after the trial expires. While Prophecy assigns a separate scope to each Prophecy-managed fabric, it is not recommended to use your production data tools for trials."})}),"\n",(0,i.jsx)(r.h2,{id:"hashicorp-vault",children:"HashiCorp Vault"}),"\n",(0,i.jsxs)(r.p,{children:["Prophecy supports ",(0,i.jsx)(r.a,{href:"https://developer.hashicorp.com/vault/docs/what-is-vault",children:"HashiCorp Vault"})," as a secret provider. When you set up HashiCorp Vault, you'll see a few additional configuration fields."]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Namespace"}),": An optional field to specify the namespace within a multi-tenant Vault."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Address"}),": Auto-filled from Spark cluster. You must first set up a ",(0,i.jsx)(r.code,{children:"VAULT_ADDR"})," environment variable in the Spark cluster."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Token"}),": Auto-filled from Spark cluster. You must first set up a ",(0,i.jsx)(r.code,{children:"VAULT_TOKEN"})," environment variable in the Spark cluster."]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"If you add new secrets to your vault, you can refresh secrets in Prophecy to fetch them. You can also add new secrets directly in Prophecy. To refresh or add secrets, you must be attached to a cluster. You can only access secrets that you also have access to in your Spark cluster."}),"\n",(0,i.jsx)(r.h2,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,i.jsx)(r.p,{children:"If you prefer a simple way to manage secrets, you can use environment variables available in your Spark cluster. To do so:"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["Add a new secret provider and choose ",(0,i.jsx)(r.strong,{children:"Environment"}),"."]}),"\n",(0,i.jsx)(r.li,{children:"Add a new secret. Prophecy will automatically map this secret to an environment variable in your Spark cluster."}),"\n",(0,i.jsx)(r.li,{children:"Verify that the new environment variable exists in your Spark cluster with the correct value."}),"\n"]}),"\n",(0,i.jsx)(r.admonition,{type:"note",children:(0,i.jsx)(r.p,{children:"This method does not support refreshing or fetching secrets."})})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);