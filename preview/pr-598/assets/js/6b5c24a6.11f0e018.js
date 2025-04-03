"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[18808],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}},58199:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"data-modeling/configuration","title":"Configurations","description":"Configure SQL project and model variables","source":"@site/docs/data-modeling/configuration.md","sourceDirName":"data-modeling","slug":"/engineers/data-model-configurations","permalink":"/prophecy-docs-staging/preview/pr-598/engineers/data-model-configurations","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"SQL","permalink":"/prophecy-docs-staging/preview/pr-598/tags/sql"},{"inline":true,"label":"development","permalink":"/prophecy-docs-staging/preview/pr-598/tags/development"},{"inline":true,"label":"config","permalink":"/prophecy-docs-staging/preview/pr-598/tags/config"},{"inline":true,"label":"variable","permalink":"/prophecy-docs-staging/preview/pr-598/tags/variable"}],"version":"current","frontMatter":{"title":"Configurations","id":"configuration","slug":"/engineers/data-model-configurations","description":"Configure SQL project and model variables","tags":["SQL","development","config","variable"]},"sidebar":"mySidebar","previous":{"title":"Execution","permalink":"/prophecy-docs-staging/preview/pr-598/engineers/data-model-execution"},"next":{"title":"Lineage","permalink":"/prophecy-docs-staging/preview/pr-598/engineers/lineage"}}');var o=t(74848),r=t(28453);const s={title:"Configurations",id:"configuration",slug:"/engineers/data-model-configurations",description:"Configure SQL project and model variables",tags:["SQL","development","config","variable"]},a=void 0,d={},c=[{value:"Types",id:"types",level:2},{value:"Syntax",id:"syntax",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Model configurations are settings that define how a model should be built and behave within your data warehouse."}),"\n",(0,o.jsxs)(n.p,{children:["When you open a SQL project, you can find ",(0,o.jsx)(n.strong,{children:"Configuration"})," under the ",(0,o.jsx)(n.strong,{children:"..."})," ellipses menu in the project header. If you use a configuration in your model, you can switch to the code view to see the configuration encoded in the ",(0,o.jsx)(n.code,{children:"dbt_project.yml"})," or ",(0,o.jsx)(n.code,{children:"schema.yml/properties.yml"})," file."]}),"\n",(0,o.jsx)(n.admonition,{title:"See also",type:"note",children:(0,o.jsxs)(n.p,{children:["Further information can be found in the dbt documentation on ",(0,o.jsx)(n.a,{href:"https://docs.getdbt.com/reference/model-configs",children:"model configurations"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"types",children:"Types"}),"\n",(0,o.jsx)(n.p,{children:"Configurations are variables that you can use in various gem fields. There are two types of configurations."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Model configurations"}),": Only accessible in a specific model."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Project configurations"}),": Accessible to any component within a specific project."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(n.p,{children:"The variable name and value should both be valid in Python. The way you reference these variables differ between model and project configurations. The table below shows some usage examples for each type of configuration."}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Python Syntax"}),(0,o.jsx)(n.th,{children:"SQL Syntax"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Model"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"key"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"{{ key }}"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Project"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:'var("key", "defaultvalue")'})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:'{{ var("key", "defaultvalue") }}'})})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:["Note that the ",(0,o.jsx)(n.code,{children:"defaultvalue"})," is optional for project configurations."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}}}]);