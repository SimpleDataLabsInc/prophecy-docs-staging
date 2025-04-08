"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[64139],{28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}},57063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"type":"mdx","permalink":"/prophecy-docs-staging/preview/pr-587/mdapi/","source":"@site/src/pages/mdapi/index.md","title":"Prophecy Metadata API","description":"Metadata API","frontMatter":{"title":"Prophecy Metadata API","id":"mdapi","description":"Metadata API","tags":[]},"unlisted":false}');var a=n(74848),s=n(28453);const r={title:"Prophecy Metadata API",id:"mdapi",description:"Metadata API",tags:[]},o=void 0,c={},h=[{value:"Overview",id:"overview",level:2},{value:"Request URL",id:"request-url",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Schema",id:"schema",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Please note that this document is subject to change at any time without notice."}),"\n",(0,a.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(t.p,{children:["For an overview of the concepts used in the Metadata API, see ",(0,a.jsx)(t.a,{href:"https://www.prophecy.io/blog/prophecyhub-metadata-re-invented-with-git-graphql-for-data-engineering",children:"this blog post"})]}),"\n",(0,a.jsx)(t.h2,{id:"request-url",children:"Request URL"}),"\n",(0,a.jsx)(t.p,{children:"There are two components to the request URL: The base and the path."}),"\n",(0,a.jsxs)(t.p,{children:["The base will depend on the endpoint that you use to access Prophecy, i.e ",(0,a.jsx)(t.code,{children:"https://app.prophecy.io/"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["The path is always the same for all deployments: ",(0,a.jsx)(t.code,{children:"api/md/graphql"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"authentication",children:"Authentication"}),"\n",(0,a.jsx)(t.p,{children:"Authentication with the Prophecy GraphQL API is via including a Prophecy API token with the appropriate header."}),"\n",(0,a.jsx)(t.h2,{id:"schema",children:"Schema"}),"\n",(0,a.jsx)(t.p,{children:"The base schema for all GraphQL queries is:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"schema {\n    query: Query\n    mutation: Mutate\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"There are three kinds of entites in use in the API:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/mdapi/types",children:"Types"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/mdapi/enums",children:"Enums"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/mdapi/inputs",children:"Inputs"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);