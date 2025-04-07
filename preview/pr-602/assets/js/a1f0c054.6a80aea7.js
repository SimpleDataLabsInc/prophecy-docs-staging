"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[12225],{28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>r});var t=n(96540);const i={},o=t.createContext(i);function a(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:s},e.children)}},69469:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/model-view-98e2d6a7d717d5d8f6c290f59bc1f208.png"},74765:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"data-modeling/Model","title":"Models","description":"SQL models define a single target table or view","source":"@site/docs/data-modeling/models.md","sourceDirName":"data-modeling","slug":"/engineers/models","permalink":"/prophecy-docs-staging/preview/pr-602/engineers/models","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"concepts","permalink":"/prophecy-docs-staging/preview/pr-602/tags/concepts"},{"inline":true,"label":"Models","permalink":"/prophecy-docs-staging/preview/pr-602/tags/models"},{"inline":true,"label":"sql","permalink":"/prophecy-docs-staging/preview/pr-602/tags/sql"},{"inline":true,"label":"target","permalink":"/prophecy-docs-staging/preview/pr-602/tags/target"}],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Models","id":"Model","slug":"/engineers/models","description":"SQL models define a single target table or view","sidebar_position":2,"tags":["concepts","Models","sql","target"]},"sidebar":"mySidebar","previous":{"title":"Data modeling","permalink":"/prophecy-docs-staging/preview/pr-602/engineers/data-models"},"next":{"title":"SQL Gems","permalink":"/prophecy-docs-staging/preview/pr-602/engineers/data-modeling-gems"}}');var i=n(74848),o=n(28453);const a={title:"Models",id:"Model",slug:"/engineers/models",description:"SQL models define a single target table or view",sidebar_position:2,tags:["concepts","Models","sql","target"]},r=void 0,l={},d=[{value:"Data modeling",id:"data-modeling",level:2},{value:"Model development",id:"model-development",level:2},{value:"Models vs pipelines",id:"models-vs-pipelines",level:2}];function c(e){const s={a:"a",admonition:"admonition",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["Models are based on SQL-native code and use the ",(0,i.jsx)(s.a,{href:"https://docs.getdbt.com/docs/build/models",children:"dbt Core\u2122\ufe0f"})," build system. Models define a single dataset, typically a table or view, and are useful for transforming data directly in a data warehouse or for existing dbt users. They are best suited for data analytics and transformation needs."]}),"\n",(0,i.jsxs)(s.p,{children:["You can build models from a ",(0,i.jsx)(s.strong,{children:"visual"})," or ",(0,i.jsx)(s.strong,{children:"code"})," interface. When using the visual interface, model components are automatically compiled into SQL select statements that you can reuse and customize."]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"Prophecy\u2019s visual interface supports SQL models only. If you\u2019d like to define Python models, you can still use them within the code interface."})}),"\n",(0,i.jsx)(s.h2,{id:"data-modeling",children:"Data modeling"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Data modeling"})," refers to shaping your data from its raw state to its transformed final state. In Prophecy and dbt, data models are SQL statements that build a single table or view and enable better management. Data models incorporate step-by-step logic, compatible with Prophecy ",(0,i.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-602/gems",children:"gems"}),". Each model is stored as a SQL file on Git as open-source code. Models can also be reused through Prophecy ",(0,i.jsx)(s.a,{href:"/engineers/package-hub",children:"packages"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"model-development",children:"Model development"}),"\n",(0,i.jsxs)(s.p,{children:["In the ",(0,i.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-602/projects#project-editor",children:"Project Editor"})," of a SQL project, Prophecy displays models using a lineage view, a visual view, and a code view. As you develop your models, you can commit and release your changes via ",(0,i.jsx)(s.a,{href:"/engineers/git",children:"Git"}),"."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Lineage view"}),". When you open a SQL project, you first see the ",(0,i.jsx)(s.strong,{children:"lineage"})," view. The lineage provides a high-level view of the project's models with dependencies displayed from left to right."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"lineage-view",src:n(99589).A+"",width:"2880",height:"1726"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Visual view"}),". If you open a specific model, you are taken to the model visual canvas. The visual canvas shows each step needed to move from the referenced tables/seeds/models to the final model. ",(0,i.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-602/gems",children:"Gems"})," drive data transformations in Prophecy."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Code view"}),". Any changes that you make in the visual view are automatically compiled into code (and vice-versa)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"model-view",src:n(69469).A+"",width:"2880",height:"1726"})}),"\n",(0,i.jsx)(s.h2,{id:"models-vs-pipelines",children:"Models vs pipelines"}),"\n",(0,i.jsx)(s.p,{children:"Models are data transformations that run exclusively on a SQL warehouse using dbt. Because of this, models follow dbt limitations like each model can only define one output. Pipelines, on the other hand, can use a Spark engine (for Python or Scala projects) or Prophecy Automate (for SQL projects) for computation. Because of this, pipelines are more flexible in their capabilities."})]})}function p(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},99589:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/lineage-view-0c1713925db518e6783a8b746bfb7dab.png"}}]);