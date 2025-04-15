"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[43209],{28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>s});var n=o(96540);const a={},i=n.createContext(a);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:t},e.children)}},56380:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/location-overwrite-778eeb364ca66520df7c69f1c39a1bd9.png"},68040:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"data-modeling/gems/target-models/location","title":"Location","description":"Location of Target Models","source":"@site/docs/data-modeling/gems/target-models/location.md","sourceDirName":"data-modeling/gems/target-models","slug":"/engineers/location-target-model","permalink":"/prophecy-docs-staging/preview/pr-616/engineers/location-target-model","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"concept","permalink":"/prophecy-docs-staging/preview/pr-616/tags/concept"},{"inline":true,"label":"model","permalink":"/prophecy-docs-staging/preview/pr-616/tags/model"},{"inline":true,"label":"location","permalink":"/prophecy-docs-staging/preview/pr-616/tags/location"},{"inline":true,"label":"SQL","permalink":"/prophecy-docs-staging/preview/pr-616/tags/sql"}],"version":"current","frontMatter":{"title":"Location","id":"location","slug":"/engineers/location-target-model","description":"Location of Target Models","tags":["concept","model","location","SQL"]},"sidebar":"mySidebar","previous":{"title":"Target models","permalink":"/prophecy-docs-staging/preview/pr-616/engineers/target-models"},"next":{"title":"Schema","permalink":"/prophecy-docs-staging/preview/pr-616/engineers/schema-target-model"}}');var a=o(74848),i=o(28453);const r={title:"Location",id:"location",slug:"/engineers/location-target-model",description:"Location of Target Models",tags:["concept","model","location","SQL"]},s=void 0,l={},d=[{value:"Overwrite location",id:"overwrite-location",level:2},{value:"Advanced mode",id:"advanced-mode",level:3},{value:"Example",id:"example",level:3}];function c(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"You can use the Location tab to overwrite the database, schema, or alias of your Target model."}),"\n",(0,a.jsx)(t.p,{children:"The full location of a table, view, and other objects consists of a database, schema, and alias. dbt allows its users to overwrite any of those parts of the location, with a combination of macros and additional project, folder, and model-level configurations. This tab simplifies those dbt object location parts."}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.strong,{children:"Location"})," section shows you where your model will be stored ",(0,a.jsx)(t.strong,{children:"by default"}),". This is inferred from the configuration of your connected ",(0,a.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-616/fabrics",children:"fabric"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"overwrite-location",children:"Overwrite location"}),"\n",(0,a.jsx)(t.p,{children:"You also have the option to overwrite location behavior and define it from scratch."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Field"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Advanced mode"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Database"}),(0,a.jsx)(t.td,{children:"The name of the target SQL database"}),(0,a.jsx)(t.td,{children:"Yes"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Schema"}),(0,a.jsx)(t.td,{children:"The name of the target schema (collection of database objects)"}),(0,a.jsx)(t.td,{children:"Yes"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Alias"}),(0,a.jsx)(t.td,{children:"The name of the created table or view"}),(0,a.jsx)(t.td,{children:"No"})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"advanced-mode",children:"Advanced mode"}),"\n",(0,a.jsxs)(t.p,{children:["You can use ",(0,a.jsx)(t.strong,{children:"Advanced mode"})," for the database or schema when you want to populate these fields dynamically."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Location",src:o(56380).A+"",width:"2620",height:"1508"})}),"\n",(0,a.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.p,{children:"Let's say you want to use one database location during development and interactive execution, but you want to write to a different database for production. You can use a configuration variable to do so."}),"\n",(0,a.jsx)(t.p,{children:"First, you will have to create the variable:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Click ",(0,a.jsx)(t.strong,{children:"..."})," in the project header and select ",(0,a.jsx)(t.strong,{children:"Configuration"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Make sure you are in ",(0,a.jsx)(t.strong,{children:"Project Configuration"}),"."]}),"\n",(0,a.jsx)(t.li,{children:"Create a variable and make the default value the name of the development database you want to use during interactive execution. The value should be a string."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Next, how will you change the variable to save to a ",(0,a.jsx)(t.strong,{children:"production"})," database?"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Create a job that includes your model."}),"\n",(0,a.jsxs)(t.li,{children:["Open the model configuration and add the ",(0,a.jsx)(t.strong,{children:"Supply variables to project"})," DBT property."]}),"\n",(0,a.jsx)(t.li,{children:"Add your project variable and assign it the name of the production database. This will override the default value you provided in the Project Configuration."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Now, when the job runs, your model should be stored in the production database."}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"You can also run a dbt command using the --vars flag to override the default variable value."})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}}}]);