"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[33901],{15065:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"api/api","title":"Prophecy API","description":"Prophecy metadata available through the Prophecy API","source":"@site/docs/api/api.md","sourceDirName":"api","slug":"/api/","permalink":"/prophecy-docs-staging/preview/pr-618/api/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"PAT","permalink":"/prophecy-docs-staging/preview/pr-618/tags/pat"},{"inline":true,"label":"token","permalink":"/prophecy-docs-staging/preview/pr-618/tags/token"},{"inline":true,"label":"Personal Access Token","permalink":"/prophecy-docs-staging/preview/pr-618/tags/personal-access-token"},{"inline":true,"label":"graphqlAPI","permalink":"/prophecy-docs-staging/preview/pr-618/tags/graphql-api"}],"version":"current","frontMatter":{"title":"Prophecy API","id":"api","sidebar_class_name":"hidden","description":"Prophecy metadata available through the Prophecy API","tags":["PAT","token","Personal Access Token","graphqlAPI"]}}');var n=t(74848),r=t(28453);const o={title:"Prophecy API",id:"api",sidebar_class_name:"hidden",description:"Prophecy metadata available through the Prophecy API",tags:["PAT","token","Personal Access Token","graphqlAPI"]},i=void 0,c={},h=[{value:"Prophecy metadata available through the Prophecy API",id:"prophecy-metadata-available-through-the-prophecy-api",level:2},{value:"Personal Access Token",id:"personal-access-token",level:2},{value:"Generate a PAT",id:"generate-a-pat",level:3},{value:"Get the Prophecy GraphQL Schema",id:"get-the-prophecy-graphql-schema",level:2}];function p(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"prophecy-metadata-available-through-the-prophecy-api",children:"Prophecy metadata available through the Prophecy API"}),"\n",(0,n.jsxs)(a.p,{children:["Prophecy users can access their metadata using the Prophecy API. To access these APIs, users just create a Personal Access Token (PAT). Try accessing the Prophecy ",(0,n.jsx)(a.a,{href:"#get-the-prophecy-graphql-schema",children:"GraphQL Schema"}),". One popular use case is to access Prophecy metadata through automated scripts and integrate this data into an existing data visualization system."]}),"\n",(0,n.jsx)(a.h2,{id:"personal-access-token",children:"Personal Access Token"}),"\n",(0,n.jsx)(a.p,{children:"A Personal Access Token (PAT) is the token which customer can use for authentication to our API servers.\nThis will enable customers to use PAT in their scripts and integrate Prophecy seamlessly to their data visualization ecosystem."}),"\n",(0,n.jsx)(a.h3,{id:"generate-a-pat",children:"Generate a PAT"}),"\n",(0,n.jsxs)(a.p,{children:["Create and Manage API tokens from the Access Tokens tab in the Prophecy UI ",(0,n.jsx)(a.a,{href:"https://app.prophecy.io/metadata/settings",children:"Settings"})," page. Also, check token usage and expiration. Copy the token you have generated, as this will not be displayed on Prophecy UI again. You can use this token for accessing any Read/Write APIs to access Metadata, Lineage, etc."]}),"\n",(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsx)(a.p,{children:"These tokens are per user and will inherit all the access from that user."})}),"\n",(0,n.jsx)(a.h2,{id:"get-the-prophecy-graphql-schema",children:"Get the Prophecy GraphQL Schema"}),"\n",(0,n.jsx)(a.p,{children:"You can use Prophecy API Endpoints to create a single pane of glass interface for data stewards and engineers to see pipelines, datasets, and lineage."}),"\n",(0,n.jsx)(a.p,{children:"Use this short guide to get started with Postman by importing Prophecy's GraphQL schema."}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["Install ",(0,n.jsx)(a.a,{href:"https://www.postman.com/downloads/",children:"Postman"}),"."]}),"\n",(0,n.jsx)(a.li,{children:"Create a new GraphQL request."}),"\n",(0,n.jsxs)(a.li,{children:["Enter the GraphQL API endpoint as the URL ",(0,n.jsx)(a.code,{children:"https://app.prophecy.io/api/md/graphql"}),"."]}),"\n",(0,n.jsxs)(a.li,{children:["Go to the Headers Tab and enter ",(0,n.jsx)(a.code,{children:"X-Auth-Token"})," for the key and your API token as the value."]}),"\n",(0,n.jsx)(a.li,{children:"Go to the Schema Tab and refresh the schema using GraphQL Introspection."}),"\n",(0,n.jsx)(a.li,{children:"Go to the Query Tab to see the schema."}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"If you need help using the Prophecy APIs, reach out to Prophecy support team for additional guidance and assistance."})]})}function l(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>o,x:()=>i});var s=t(96540);const n={},r=s.createContext(n);function o(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);