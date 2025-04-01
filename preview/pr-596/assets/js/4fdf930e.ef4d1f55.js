"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[14026],{28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>s});var n=a(96540);const o={},r=n.createContext(o);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:t},e.children)}},62068:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"data-modeling/gems/target-models/type-and-format","title":"Type and Format","description":"Type and Format of Target Models","source":"@site/docs/data-modeling/gems/target-models/type-and-format.md","sourceDirName":"data-modeling/gems/target-models","slug":"/data-modeling/gems/target-models/type-and-format","permalink":"/prophecy-docs-staging/preview/pr-596/data-modeling/gems/target-models/type-and-format","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"concept","permalink":"/prophecy-docs-staging/preview/pr-596/tags/concept"},{"inline":true,"label":"model","permalink":"/prophecy-docs-staging/preview/pr-596/tags/model"},{"inline":true,"label":"type","permalink":"/prophecy-docs-staging/preview/pr-596/tags/type"},{"inline":true,"label":"format","permalink":"/prophecy-docs-staging/preview/pr-596/tags/format"},{"inline":true,"label":"SQL","permalink":"/prophecy-docs-staging/preview/pr-596/tags/sql"}],"version":"current","frontMatter":{"title":"Type and Format","id":"type-and-format","description":"Type and Format of Target Models","tags":["concept","model","type","format","SQL"]},"sidebar":"mySidebar","previous":{"title":"SQL Query","permalink":"/prophecy-docs-staging/preview/pr-596/data-modeling/gems/target-models/sql-query"},"next":{"title":"Write Options","permalink":"/prophecy-docs-staging/preview/pr-596/data-modeling/gems/target-models/write-options"}}');var o=a(74848),r=a(28453);const i={title:"Type and Format",id:"type-and-format",description:"Type and Format of Target Models",tags:["concept","model","type","format","SQL"]},s=void 0,l={},d=[{value:"Materialization types",id:"materialization-types",level:2}];function p(e){const t={h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"You can use the Type & Format tab to update the format of the model between different types of materializations. This determines the underlying physical format of your Target model."}),"\n",(0,o.jsx)(t.p,{children:"You can select the type of data you want to write from. The Warehouse represents all native warehouse and optimized data formats."}),"\n",(0,o.jsx)(t.h2,{id:"materialization-types",children:"Materialization types"}),"\n",(0,o.jsx)(t.p,{children:"The model materialization types include the following:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"View"}),": View models are rebuilt as a view on each run. Views built on top of source data always have the latest records, but they don't store any additional data. So they're simply queries based on other tables. Use the view materialization type for models that don't do significant transformations. This is the default type."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Table"}),": Table models are rebuilt as a table on each run. Tables are fast to query, but they can take a long time to rebuild. Use the table materialization type for any models that are queried by BI tools. To apply a write mode to your Target model, you must use the Table type."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Ephemeral"}),": Ephemeral models aren't built into the database. Instead, the model code is taken from an ephemeral model and inserted into its dependent models using a common table expression (CTE). Use the ephemeral materialization type for undemanding transformations that appear at the start of your DAG."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Materialized View"}),": Materialized View models are a combination of a view and a table. They are similar to incremental models in that they serve similar use cases. A materialized view model allows you to create and maintain a materialized view in the target database Warehouse type. This is not supported in Snowflake."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Type &amp; Format",src:a(71757).A+"",width:"2620",height:"1507"})}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},71757:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/type-and-format-eaf38b8366ed98821902c60a9340e372.png"}}]);