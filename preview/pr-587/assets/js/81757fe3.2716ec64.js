"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[69613],{15950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"data-modeling/gems/target-models/target-models","title":"Target models","description":"Target Models are a sequence of data transformation steps which define a single table or view","source":"@site/docs/data-modeling/gems/target-models/target-models.md","sourceDirName":"data-modeling/gems/target-models","slug":"/engineers/target-models","permalink":"/prophecy-docs-staging/preview/pr-587/engineers/target-models","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"concept","permalink":"/prophecy-docs-staging/preview/pr-587/tags/concept"},{"inline":true,"label":"model","permalink":"/prophecy-docs-staging/preview/pr-587/tags/model"},{"inline":true,"label":"SQL","permalink":"/prophecy-docs-staging/preview/pr-587/tags/sql"},{"inline":true,"label":"table","permalink":"/prophecy-docs-staging/preview/pr-587/tags/table"}],"version":"current","frontMatter":{"title":"Target models","id":"target-models","slug":"/engineers/target-models","description":"Target Models are a sequence of data transformation steps which define a single table or view","tags":["concept","model","SQL","table"]},"sidebar":"mySidebar","previous":{"title":"Model sources","permalink":"/prophecy-docs-staging/preview/pr-587/engineers/model-sources"},"next":{"title":"Location","permalink":"/prophecy-docs-staging/preview/pr-587/engineers/location-target-model"}}');var s=n(74848),i=n(28453),l=n(99563),d=n(89791);const c={title:"Target models",id:"target-models",slug:"/engineers/target-models",description:"Target Models are a sequence of data transformation steps which define a single table or view",tags:["concept","model","SQL","table"]},a=void 0,o={},h=[{value:"Target Model tabs",id:"target-model-tabs",level:2},{value:"dbt advance settings",id:"dbt-advance-settings",level:2},{value:"dbt properties mapping",id:"dbt-properties-mapping",level:3},{value:"What&#39;s next",id:"whats-next",level:2}];function x(e){const t={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The Target Model Gem has different tabs that help you set advanced options and make it easy for you define how you want to materialize your data using write formats. You can see the UI and capabilities by opening the Target model in your SQL projects."}),"\n",(0,s.jsx)(t.p,{children:"These simplified options allow you to use dbt Core\u2122 properties without the need to have any dbt knowledge."}),"\n",(0,s.jsx)(t.h2,{id:"target-model-tabs",children:"Target Model tabs"}),"\n",(0,s.jsx)(t.p,{children:"The tabs within the Target model include the following:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-587/engineers/type-and-format-target-model",children:"Type & Format"})}),": Update the format of the model between different types of materializations"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-587/engineers/location-target-model",children:"Location"})}),": Update the location by overwriting the Database, Schema, or Alias"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-587/engineers/schema-target-model",children:"Schema"})}),": Make schema changes"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-587/engineers/sql-query-target-model",children:"SQL Query"})}),": View and enable your custom SQL query"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-587/engineers/write-options-target-model",children:"Write Options"})}),": Use Write Modes such as Overwrite, Append, and Merge"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Target Model tabs",src:n(71757).A+"",width:"2620",height:"1507"})}),"\n",(0,s.jsx)(t.h2,{id:"dbt-advance-settings",children:"dbt advance settings"}),"\n",(0,s.jsx)(t.p,{children:"You can find advance settings are available for defining model write formats and other DBT options. These include all dbt native settings, traditionally accessible from the yaml file."}),"\n",(0,s.jsx)(t.p,{children:"If you're familiar with dbt, then you can navigate to and update the advance settings."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Click ",(0,s.jsx)(t.strong,{children:"..."})," > ",(0,s.jsx)(t.strong,{children:"Advance Settings"}),". The advance setting dialog opens."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Advance Settings",src:n(93586).A+"",width:"1400",height:"825"})}),"\n",(0,s.jsx)(t.p,{children:"The object properties describe everything from physical locations, materialization logic, business metadata, and access control definitions."}),"\n",(0,s.jsx)(t.h3,{id:"dbt-properties-mapping",children:"dbt properties mapping"}),"\n",(0,s.jsx)(t.p,{children:"The following table maps all of the dbt properties for Databricks and Snowflake to the tabs of Prophecy\u2019s Target model:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"dbt property name"}),(0,s.jsx)(t.th,{children:"Provider"}),(0,s.jsx)(t.th,{children:"Target model tab"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"file_format"}),(0,s.jsx)(t.td,{children:"Databricks"}),(0,s.jsx)(t.td,{children:"Type & Format"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"alias"}),(0,s.jsx)(t.td,{children:"All"}),(0,s.jsx)(t.td,{children:"Location"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"database"}),(0,s.jsx)(t.td,{children:"All"}),(0,s.jsx)(t.td,{children:"Location"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"location_root"}),(0,s.jsx)(t.td,{children:"Databricks"}),(0,s.jsx)(t.td,{children:"Location"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"contract"}),(0,s.jsx)(t.td,{children:"All"}),(0,s.jsx)(t.td,{children:"Schema"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"enabled"}),(0,s.jsx)(t.td,{children:"All"}),(0,s.jsx)(t.td,{children:"Schema"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"schema"}),(0,s.jsx)(t.td,{children:"All"}),(0,s.jsx)(t.td,{children:"Schema"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tags"}),(0,s.jsx)(t.td,{children:"All"}),(0,s.jsx)(t.td,{children:"Schema"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cluster_by"}),(0,s.jsx)(t.td,{children:"Snowflake"}),(0,s.jsx)(t.td,{children:"Schema"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"partition_by"}),(0,s.jsx)(t.td,{children:"Snowflake"}),(0,s.jsx)(t.td,{children:"Schema"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"clustered_by"}),(0,s.jsx)(t.td,{children:"Databricks"}),(0,s.jsx)(t.td,{children:"Schema"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"buckets"}),(0,s.jsx)(t.td,{children:"Databricks"}),(0,s.jsx)(t.td,{children:"Schema"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"transient"}),(0,s.jsx)(t.td,{children:"Snowflake"}),(0,s.jsx)(t.td,{children:"Schema"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"query_tag"}),(0,s.jsx)(t.td,{children:"Snowflake"}),(0,s.jsx)(t.td,{children:"Schema"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"automatic_clustering"}),(0,s.jsx)(t.td,{children:"Snowflake"}),(0,s.jsx)(t.td,{children:"Schema"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"snowflake_warehouse"}),(0,s.jsx)(t.td,{children:"Snowflake"}),(0,s.jsx)(t.td,{children:"Schema"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"copy_grants"}),(0,s.jsx)(t.td,{children:"Snowflake"}),(0,s.jsx)(t.td,{children:"Schema"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secure"}),(0,s.jsx)(t.td,{children:"Snowflake"}),(0,s.jsx)(t.td,{children:"Schema"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"target_lag"}),(0,s.jsx)(t.td,{children:"Snowflake"}),(0,s.jsx)(t.td,{children:"Schema"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"docs"}),(0,s.jsx)(t.td,{children:"All"}),(0,s.jsx)(t.td,{children:"Schema"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"group"}),(0,s.jsx)(t.td,{children:"All"}),(0,s.jsx)(t.td,{children:"Schema"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"meta"}),(0,s.jsx)(t.td,{children:"All"}),(0,s.jsx)(t.td,{children:"Schema"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"persist_docs"}),(0,s.jsx)(t.td,{children:"All"}),(0,s.jsx)(t.td,{children:"Schema"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"full_refresh"}),(0,s.jsx)(t.td,{children:"All"}),(0,s.jsx)(t.td,{children:"Write Options"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"incremental_predicates"}),(0,s.jsx)(t.td,{children:"All"}),(0,s.jsx)(t.td,{children:"Write Options"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"incremental_strategy"}),(0,s.jsx)(t.td,{children:"All"}),(0,s.jsx)(t.td,{children:"Write Options"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"materialized"}),(0,s.jsx)(t.td,{children:"All"}),(0,s.jsx)(t.td,{children:"Write Options"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"on_schema_change"}),(0,s.jsx)(t.td,{children:"All"}),(0,s.jsx)(t.td,{children:"Write Options"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"merge_exclude_columns"}),(0,s.jsx)(t.td,{children:"Snowflake, Spark"}),(0,s.jsx)(t.td,{children:"Write Options"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"merge_update_columns"}),(0,s.jsx)(t.td,{children:"Snowflake, Spark"}),(0,s.jsx)(t.td,{children:"Write Options"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"whats-next",children:"What's next"}),"\n",(0,s.jsx)(t.p,{children:"To continue configuring your Target model, see the following pages:"}),"\n","\n",(0,s.jsx)(l.A,{items:(0,d.$S)().items})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>d});var r=n(96540);const s={},i=r.createContext(s);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}},71757:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/type-and-format-eaf38b8366ed98821902c60a9340e372.png"},81430:(e,t,n)=>{n.d(t,{W:()=>a});var r=n(96540),s=n(40797);const i=["zero","one","two","few","many","other"];function l(e){return i.filter((t=>e.includes(t)))}const d={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),d}}),[e])}function a(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),i=n.pluralForms.indexOf(s);return r[Math.min(i,r.length-1)]}(n,t,e)}}},89791:(e,t,n)=>{n.d(t,{$S:()=>r});n(40797);function r(){return n(56942).$S(...arguments)}},93586:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/advance-settings-28a870269f8ad4c6b7f3315cb1e726f0.png"},99563:(e,t,n)=>{n.d(t,{A:()=>f});n(96540);var r=n(18215),s=n(93751),i=n(56289),l=n(81430),d=n(22887),c=n(50539),a=n(9303);const o={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var h=n(74848);function x(e){let{href:t,children:n}=e;return(0,h.jsx)(i.A,{href:t,className:(0,r.A)("card padding--lg",o.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:s,description:i}=e;return(0,h.jsxs)(x,{href:t,children:[(0,h.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",o.cardTitle),title:s,children:[n," ",s]}),i&&(0,h.jsx)("p",{className:(0,r.A)("text--truncate",o.cardDescription),title:i,children:i})]})}function j(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,l.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,h.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function m(e){let{item:t}=e;const n=(0,d.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,h.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,h.jsx)(m,{item:t});case"category":return(0,h.jsx)(j,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function u(e){let{className:t}=e;const n=(0,s.$S)();return(0,h.jsx)(f,{items:n.items,className:t})}function f(e){const{items:t,className:n}=e;if(!t)return(0,h.jsx)(u,{...e});const i=(0,s.d1)(t);return(0,h.jsx)("section",{className:(0,r.A)("row",n),children:i.map(((e,t)=>(0,h.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,h.jsx)(g,{item:e})},t)))})}}}]);