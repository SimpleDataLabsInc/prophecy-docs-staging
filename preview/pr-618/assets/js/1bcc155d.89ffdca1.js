"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[52545],{28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var r=s(96540);const i={},l=r.createContext(i);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(l.Provider,{value:n},e.children)}},83533:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"release_notes/2025/3-4-4","title":"Prophecy 3.4.4.x","description":"Release notes for version 3.4.4","source":"@site/docs/release_notes/2025/3-4-4.md","sourceDirName":"release_notes/2025","slug":"/release_notes/2025/3-4-4","permalink":"/prophecy-docs-staging/preview/pr-618/release_notes/2025/3-4-4","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"release notes","permalink":"/prophecy-docs-staging/preview/pr-618/tags/release-notes"},{"inline":true,"label":"changelog","permalink":"/prophecy-docs-staging/preview/pr-618/tags/changelog"},{"inline":true,"label":"january","permalink":"/prophecy-docs-staging/preview/pr-618/tags/january"}],"version":"current","frontMatter":{"id":"3-4-4","description":"Release notes for version 3.4.4","title":"Prophecy 3.4.4.x","tags":["release notes","changelog","january"]},"sidebar":"mySidebar","previous":{"title":"Prophecy 3.4.5.x","permalink":"/prophecy-docs-staging/preview/pr-618/release_notes/2025/3-4-5"},"next":{"title":"Prophecy 3.4.3.x","permalink":"/prophecy-docs-staging/preview/pr-618/release_notes/2025/3-4-3"}}');var i=s(74848),l=s(28453);const t={id:"3-4-4",description:"Release notes for version 3.4.4",title:"Prophecy 3.4.4.x",tags:["release notes","changelog","january"]},a=void 0,o={},c=[{value:"Features",id:"features",level:2},{value:"Fixes",id:"fixes",level:2},{value:"Prophecy Library versions",id:"prophecy-library-versions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"January 31, 2025"}),"\n",(0,i.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,i.jsx)(n.p,{children:"The following are features and improvements available in this release."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["New ",(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-618/engineers/business-rules",children:"business rule"})," capabilities include:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Setting a timeframe in which business rules should apply."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Automatic detection of conflicting rule logic."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Defining multiple output columns per business rule."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Dynamically populate the ",(0,i.jsx)(n.a,{href:"/engineers/location-target-model",children:"overwrite location"})," for a SQL target model using functions and variables in your database definition."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["This update lets you define more than one unique key when writing a SQL model using an ",(0,i.jsx)(n.a,{href:"/engineers/write-options-target-model",children:"SCD2 merge approach"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["A new optional ",(0,i.jsx)(n.code,{children:"Namespace"})," field lets you specify the isolated environment in your ",(0,i.jsx)(n.a,{href:"/administration/secrets/secret-providers",children:"Hashicorp Vault"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["BigQuery ",(0,i.jsx)(n.a,{href:"/administration/fabrics/sql-fabrics/Fabrics",children:"SQL fabrics"})," now include a field that lets you include your CMEK to access datasets protected by CMEK."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Include the ",(0,i.jsx)(n.code,{children:"customOutputSchemaEnabled"})," function in a ",(0,i.jsx)(n.a,{href:"/engineers/gem-builder-reference",children:"custom Spark gem"})," code to enable or disable the ",(0,i.jsx)(n.strong,{children:"Custom Schema"})," toggle."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"fixes",children:"Fixes"}),"\n",(0,i.jsx)(n.p,{children:"The following are fixes available in this release."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"We now support using Snowflake tables that include quotation marks in the table name."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"We have removed some redundancy and have fixed how partial runs execute on Databricks UC standard clusters to improve performance."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Errors captured from sandbox are now displayed with a stacktrace showing the lines in your code which caused an exception to be thrown."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"prophecy-library-versions",children:"Prophecy Library versions"}),"\n",(0,i.jsx)(n.p,{children:"The following are the newest available Prophecy Library versions in this release."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["ProphecyLibsPython: ",(0,i.jsx)(n.code,{children:"1.9.33"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["ProphecyLibsScala: ",(0,i.jsx)(n.code,{children:"8.8.0"})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);