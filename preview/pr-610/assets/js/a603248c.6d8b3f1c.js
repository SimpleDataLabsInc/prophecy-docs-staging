"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[73164],{8861:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/databricks_secrets_config-d74ea437f1452c1e832ca53d6368f406.png"},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>o});var i=n(96540);const t={},r=i.createContext(t);function c(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(r.Provider,{value:s},e.children)}},70260:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/databricks_secrets_value-cc7003ed2959520832658578047c47c0.png"},71991:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"Spark/pipelines/secrets-configs","title":"Secrets in pipeline configurations","description":"Store secrets in pipeline config","source":"@site/docs/Spark/pipelines/secrets-configs.md","sourceDirName":"Spark/pipelines","slug":"/engineers/pipeline-configuration-secrets","permalink":"/prophecy-docs-staging/preview/pr-610/engineers/pipeline-configuration-secrets","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"spark","permalink":"/prophecy-docs-staging/preview/pr-610/tags/spark"},{"inline":true,"label":"secrets","permalink":"/prophecy-docs-staging/preview/pr-610/tags/secrets"},{"inline":true,"label":"credentials","permalink":"/prophecy-docs-staging/preview/pr-610/tags/credentials"}],"version":"current","frontMatter":{"title":"Secrets in pipeline configurations","sidebar_label":"Secrets in configurations","id":"secrets-configs","slug":"/engineers/pipeline-configuration-secrets","description":"Store secrets in pipeline config","tags":["spark","secrets","credentials"]},"sidebar":"mySidebar","previous":{"title":"Configurations","permalink":"/prophecy-docs-staging/preview/pr-610/engineers/configurations"},"next":{"title":"Pipeline settings","permalink":"/prophecy-docs-staging/preview/pr-610/engineers/pipeline-settings"}}');var t=n(74848),r=n(28453);const c={title:"Secrets in pipeline configurations",sidebar_label:"Secrets in configurations",id:"secrets-configs",slug:"/engineers/pipeline-configuration-secrets",description:"Store secrets in pipeline config",tags:["spark","secrets","credentials"]},o=void 0,a={},l=[{value:"Use cases",id:"use-cases",level:2},{value:"Example",id:"example",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Secrets provide secure authentication for connecting to various data tools like Salesforce, REST APIs, and Snowflake by storing sensitive credentials in centralized secret providers rather than exposing them in code. Any time you need to enter credentials in a Prophecy pipeline, you will be prompted to insert a secret or insert a configuration."}),"\n",(0,t.jsx)(s.p,{children:"Follow this guide to understand how to use configurations for secrets."}),"\n",(0,t.jsx)(s.h2,{id:"use-cases",children:"Use cases"}),"\n",(0,t.jsx)(s.p,{children:"There are a few cases in which you might want to add secrets to pipeline configurations, rather than inserting the secrets directly into gems."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"You want different credentials to be used for different pipeline runs (for example, development vs. production runs)."}),"\n",(0,t.jsx)(s.li,{children:"You use the secret in multiple gems in the pipeline. If your secret is in a pipeline config, then you can change the value once in the config and it will apply to all gems."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(s.p,{children:"In this example, we demonstrate using Databricks secrets to configure Snowflake credentials to establish a connection to Snowflake within a gem."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Create secrets in Databricks."})," ",(0,t.jsx)(s.a,{href:"https://docs.databricks.com/security/secrets/index.html",children:"Create your secret scope and keys in Databricks"}),". For this example, create a secret for your Snowflake username and a secret for the password. Assume we created scope ",(0,t.jsx)(s.code,{children:"demo-scope"})," and added two secrets with key ",(0,t.jsx)(s.code,{children:"snowflake-username"})," and ",(0,t.jsx)(s.code,{children:"snowflake-password"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Create pipeline config to map to secrets."})," Add configs of Type ",(0,t.jsx)(s.code,{children:"databricks_secret"})," in ",(0,t.jsx)(s.a,{href:"/engineers/configurations",children:"Pipeline Configs"}),". Let's say we call it ",(0,t.jsx)(s.code,{children:"snowflake_user"})," and ",(0,t.jsx)(s.code,{children:"snowflake_pass"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"img.png",src:n(8861).A+"",width:"1726",height:"966"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Provide values to the config created."})," Now, lets add value for the created configs ",(0,t.jsx)(s.code,{children:"snowflake_user"})," and ",(0,t.jsx)(s.code,{children:"snowflake_pass"})," in the default config. You can also add multiple values in different configs. For value, add the scope and key you created for your secret in the first step and save it. It's now ready to be used in your gems."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"img2.png",src:n(70260).A+"",width:"1726",height:"968"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Add a Snowflake gem to your pipeline and use the config."})," Use the Config with syntax as ",(0,t.jsx)(s.code,{children:"${snowflake_user}"})," and ",(0,t.jsx)(s.code,{children:"${snowflake_pass}"})," in the username and password field respectively and define all other required fields in the gem as is."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"img3.png",src:n(85412).A+"",width:"1727",height:"966"})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},85412:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/snowflake_gem-e2231988f4aac1651682635c6fcae55c.png"}}]);