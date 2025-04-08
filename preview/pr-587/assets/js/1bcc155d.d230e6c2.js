"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[52545],{28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var r=s(96540);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}},83533:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"release_notes/2025/3-4-4","title":"Prophecy 3.4.4.x","description":"Release notes for version 3.4.4","source":"@site/docs/release_notes/2025/3-4-4.md","sourceDirName":"release_notes/2025","slug":"/release_notes/2025/3-4-4","permalink":"/prophecy-docs-staging/preview/pr-587/release_notes/2025/3-4-4","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"release notes","permalink":"/prophecy-docs-staging/preview/pr-587/tags/release-notes"},{"inline":true,"label":"changelog","permalink":"/prophecy-docs-staging/preview/pr-587/tags/changelog"},{"inline":true,"label":"january","permalink":"/prophecy-docs-staging/preview/pr-587/tags/january"}],"version":"current","frontMatter":{"id":"3-4-4","description":"Release notes for version 3.4.4","title":"Prophecy 3.4.4.x","tags":["release notes","changelog","january"]},"sidebar":"mySidebar","previous":{"title":"Prophecy 3.4.5.x","permalink":"/prophecy-docs-staging/preview/pr-587/release_notes/2025/3-4-5"},"next":{"title":"Prophecy 3.4.3.x","permalink":"/prophecy-docs-staging/preview/pr-587/release_notes/2025/3-4-3"}}');var i=s(74848),t=s(28453);const o={id:"3-4-4",description:"Release notes for version 3.4.4",title:"Prophecy 3.4.4.x",tags:["release notes","changelog","january"]},a=void 0,l={},c=[{value:"Features",id:"features",level:2},{value:"Expanded business rules capabilities",id:"expanded-business-rules-capabilities",level:3},{value:"Updates",id:"updates",level:2},{value:"New custom gem function",id:"new-custom-gem-function",level:3},{value:"Advanced mode for SQL target model",id:"advanced-mode-for-sql-target-model",level:3},{value:"Use multiple unique keys",id:"use-multiple-unique-keys",level:3},{value:"Multi-tenancy support for Hashicorp Vault",id:"multi-tenancy-support-for-hashicorp-vault",level:3},{value:"Customer-managed encryption keys (CMEK) for BigQuery",id:"customer-managed-encryption-keys-cmek-for-bigquery",level:3},{value:"Fixes",id:"fixes",level:2},{value:"Improved performance on UC shared clusters",id:"improved-performance-on-uc-shared-clusters",level:3},{value:"Allow use of tables with quotes",id:"allow-use-of-tables-with-quotes",level:3},{value:"Better error detection in Gem Builder",id:"better-error-detection-in-gem-builder",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"January 31, 2025"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Prophecy Python libs version: 1.9.33"}),"\n",(0,i.jsx)(n.li,{children:"Prophecy Scala libs version: 8.8.0"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,i.jsx)(n.h3,{id:"expanded-business-rules-capabilities",children:"Expanded business rules capabilities"}),"\n",(0,i.jsxs)(n.p,{children:["The new ",(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-587/engineers/business-rules",children:"business rule"})," capabilities include:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Setting a timeframe in which business rules should apply."}),"\n",(0,i.jsx)(n.li,{children:"Automatic detection of conflicting rule logic."}),"\n",(0,i.jsx)(n.li,{children:"Defining multiple output columns per business rule."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"updates",children:"Updates"}),"\n",(0,i.jsx)(n.h3,{id:"new-custom-gem-function",children:"New custom gem function"}),"\n",(0,i.jsxs)(n.p,{children:["When you are ",(0,i.jsx)(n.a,{href:"/engineers/gem-builder-reference",children:"building a custom Spark gem"}),", you can include the ",(0,i.jsx)(n.code,{children:"customOutputSchemaEnabled"})," function in your gem code to enable or disable to ",(0,i.jsx)(n.strong,{children:"Custom Schema"})," toggle by default. This toggle can be found in the ",(0,i.jsx)(n.strong,{children:"Output"})," tab of a gem."]}),"\n",(0,i.jsx)(n.h3,{id:"advanced-mode-for-sql-target-model",children:"Advanced mode for SQL target model"}),"\n",(0,i.jsxs)(n.p,{children:["When you want to ",(0,i.jsx)(n.a,{href:"/engineers/location-target-model",children:"overwrite the default database"})," for your target model, you can now use ",(0,i.jsx)(n.strong,{children:"advanced mode"})," to dynamically populate the field. Rather than inputting a simple string, you can now use functions, values, and variables in your database definition."]}),"\n",(0,i.jsx)(n.h3,{id:"use-multiple-unique-keys",children:"Use multiple unique keys"}),"\n",(0,i.jsxs)(n.p,{children:["Previously when writing a SQL model using an ",(0,i.jsx)(n.a,{href:"/engineers/write-options-target-model",children:"SCD 2 merge approach"}),", you could only define one unique key. This update lets you define one or more unique keys."]}),"\n",(0,i.jsx)(n.h3,{id:"multi-tenancy-support-for-hashicorp-vault",children:"Multi-tenancy support for Hashicorp Vault"}),"\n",(0,i.jsxs)(n.p,{children:["When you set up Hashicorp Vault as a secret provider, a new optional ",(0,i.jsx)(n.strong,{children:"Namespace"})," field lets you specify the isolated environment in your Vault."]}),"\n",(0,i.jsx)(n.h3,{id:"customer-managed-encryption-keys-cmek-for-bigquery",children:"Customer-managed encryption keys (CMEK) for BigQuery"}),"\n",(0,i.jsx)(n.p,{children:"BigQuery SQL fabrics now include a field that lets you include your CMEK. This way, you can access datasets protected by CMEK in Prophecy."}),"\n",(0,i.jsx)(n.h2,{id:"fixes",children:"Fixes"}),"\n",(0,i.jsx)(n.h3,{id:"improved-performance-on-uc-shared-clusters",children:"Improved performance on UC shared clusters"}),"\n",(0,i.jsx)(n.p,{children:"We have removed some redundancy and have fixed how partial runs execute on Databricks UC shared clusters."}),"\n",(0,i.jsx)(n.h3,{id:"allow-use-of-tables-with-quotes",children:"Allow use of tables with quotes"}),"\n",(0,i.jsx)(n.p,{children:"This fix lets you use Snowflake tables that include quotation marks in the table name."}),"\n",(0,i.jsx)(n.h3,{id:"better-error-detection-in-gem-builder",children:"Better error detection in Gem Builder"}),"\n",(0,i.jsx)(n.p,{children:"Errors captured from sandbox are now displayed with a stacktrace showing the lines in your code which caused an exception to be thrown."})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}}}]);