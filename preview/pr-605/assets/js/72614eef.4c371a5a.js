"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[43699],{10757:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"data-modeling/gems/datasources/datasources","title":"Model sources","description":"access your data","source":"@site/docs/data-modeling/gems/datasources/datasources.md","sourceDirName":"data-modeling/gems/datasources","slug":"/engineers/model-sources","permalink":"/prophecy-docs-staging/preview/pr-605/engineers/model-sources","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"SQL","permalink":"/prophecy-docs-staging/preview/pr-605/tags/sql"},{"inline":true,"label":"sources","permalink":"/prophecy-docs-staging/preview/pr-605/tags/sources"},{"inline":true,"label":"seeds","permalink":"/prophecy-docs-staging/preview/pr-605/tags/seeds"}],"version":"current","frontMatter":{"title":"Model sources","id":"datasources","slug":"/engineers/model-sources","description":"access your data","tags":["SQL","sources","seeds"]},"sidebar":"mySidebar","previous":{"title":"SQL Gems","permalink":"/prophecy-docs-staging/preview/pr-605/engineers/data-modeling-gems"},"next":{"title":"Target models","permalink":"/prophecy-docs-staging/preview/pr-605/engineers/target-models"}}');var o=t(74848),i=t(28453);const d={title:"Model sources",id:"datasources",slug:"/engineers/model-sources",description:"access your data",tags:["SQL","sources","seeds"]},r=void 0,a={},l=[{value:"Sources",id:"sources",level:2},{value:"Seeds",id:"seeds",level:2},{value:"Models",id:"models",level:2},{value:"Advanced model settings",id:"advanced-model-settings",level:3},{value:"What&#39;s next",id:"whats-next",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:["To load data into a SQL model, use ",(0,o.jsx)(s.a,{href:"#seeds",children:"Seed"}),", ",(0,o.jsx)(s.a,{href:"#sources",children:"Source"}),", or ",(0,o.jsx)(s.a,{href:"#models",children:"Model"})," gems. These are all based on ",(0,o.jsx)(s.a,{href:"https://docs.getdbt.com/docs/build/projects",children:"dbt"})," concepts."]}),"\n",(0,o.jsx)(s.h2,{id:"sources",children:"Sources"}),"\n",(0,o.jsx)(s.p,{children:"Sources are pointers to tables in the SQL warehouse(s) specified in the SQL fabric."}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["You can browse available tables in the ",(0,o.jsx)(s.strong,{children:"Environment"})," tab of the Project Editor. Tables can be dragged onto the model canvas."]}),"\n",(0,o.jsxs)(s.li,{children:["To upload a file to the warehouse directly from Prophecy, use the ",(0,o.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-605/analysts/upload-file",children:"Upload File"})," option."]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Source1",src:t(89813).A+"",width:"2620",height:"1508"})}),"\n",(0,o.jsx)(s.admonition,{type:"note",children:(0,o.jsxs)(s.p,{children:["You can also add a source by clicking the ",(0,o.jsx)(s.strong,{children:"plus"})," sign next to Sources. Use this when you want to define your data model without a cluster connection or predefined table."]})}),"\n",(0,o.jsx)(s.h2,{id:"seeds",children:"Seeds"}),"\n",(0,o.jsx)(s.p,{children:"Seeds let you load small CSV files into Prophecy. This is useful for small test datasets or lookup mappings, like a list of cities or countries. Seeds are saved as SQL files on Git when projects are committed and released. Follow the steps below to create a seed and write to the SQL warehouse defined in the fabric."}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["Inside the model canvas, from the project tab, select ",(0,o.jsx)(s.strong,{children:"+ Add Seed"})," and provide a name."]}),"\n",(0,o.jsxs)(s.li,{children:["Open the ",(0,o.jsx)(s.strong,{children:"Code view"})," to view the text editor. You'll see a file for your seed."]}),"\n",(0,o.jsx)(s.li,{children:"Paste the data here in CSV format separated by commas."}),"\n",(0,o.jsx)(s.li,{children:"The seed file should be listed in the files that will be committed to Git."}),"\n",(0,o.jsxs)(s.li,{children:["To make the seed usable in your project, run the seed by clicking the ",(0,o.jsx)(s.strong,{children:"large play button"})," in the bottom right corner."]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Seed1",src:t(53569).A+"",width:"2880",height:"1084"})}),"\n",(0,o.jsx)(s.p,{children:"To write the seed to your SQL warehouse:"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsx)(s.li,{children:"Create a new model and define its location."}),"\n",(0,o.jsx)(s.li,{children:"Add the seed to the model canvas."}),"\n",(0,o.jsxs)(s.li,{children:["Connect your seed to the ",(0,o.jsx)(s.strong,{children:"Target Model"})," gem."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Run"})," the model. This runs the Target Model gem that writes the seed to the warehouse."]}),"\n",(0,o.jsxs)(s.li,{children:["To view the new table in your SQL warehouse, click on the ",(0,o.jsx)(s.strong,{children:"Environment"})," tab in the project."]}),"\n",(0,o.jsxs)(s.li,{children:["Use the ",(0,o.jsx)(s.strong,{children:"Refetch Sources"})," button to resync the data."]}),"\n",(0,o.jsx)(s.li,{children:"Now, you should see the new table."}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Seed2",src:t(96138).A+"",width:"2620",height:"1508"})}),"\n",(0,o.jsx)(s.h2,{id:"models",children:"Models"}),"\n",(0,o.jsxs)(s.p,{children:["A model is similar to a pipeline, as both contain data transformation steps. Unlike a pipeline, however, each model defines a single ",(0,o.jsx)(s.a,{href:"https://docs.getdbt.com/docs/build/materializations#materializations",children:"materialized view or table"}),". Because models define a single materialized view or table, models can serve as inputs to other models. Each model is a single SQL file in the Code view."]}),"\n",(0,o.jsx)(s.p,{children:"To create a new model:"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["Click the ",(0,o.jsx)(s.strong,{children:"plus"})," sign next to Models."]}),"\n",(0,o.jsx)(s.li,{children:"Provide a name for the new model and define the desired storage path in Git to store the new model SQL file."}),"\n",(0,o.jsxs)(s.li,{children:["Click ",(0,o.jsx)(s.strong,{children:"Create"}),". This opens the model canvas. A ",(0,o.jsx)(s.a,{href:"/engineers/target-models",children:"Target Model"})," gem automatically appears on the canvas."]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Model1",src:t(98525).A+"",width:"2812",height:"900"})}),"\n",(0,o.jsx)(s.admonition,{type:"note",children:(0,o.jsxs)(s.p,{children:["You can't use statements (such as ",(0,o.jsx)(s.code,{children:"CALL"})," and ",(0,o.jsx)(s.code,{children:"EXECUTE IMMEDIATE"}),") directly inside of models. Instead, you must use them in pre-hooks."]})}),"\n",(0,o.jsx)(s.h3,{id:"advanced-model-settings",children:"Advanced model settings"}),"\n",(0,o.jsx)(s.p,{children:"The advanced settings of a model let you define whether the model should be materialized as a view, table, ephemeral, incremental, or dynamic table."}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Model2",src:t(99362).A+"",width:"2620",height:"1397"})}),"\n",(0,o.jsx)(s.h2,{id:"whats-next",children:"What's next"}),"\n",(0,o.jsxs)(s.p,{children:["For more details on dbt concepts including ",(0,o.jsx)(s.a,{href:"https://docs.getdbt.com/docs/build/sources",children:"sources"}),", ",(0,o.jsx)(s.a,{href:"https://docs.getdbt.com/docs/build/seeds",children:"seeds"}),", and ",(0,o.jsx)(s.a,{href:"https://docs.getdbt.com/docs/build/models",children:"models"}),", explore the dbt documentation."]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>r});var n=t(96540);const o={},i=n.createContext(o);function d(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),n.createElement(i.Provider,{value:s},e.children)}},53569:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/Seed1-872bb650c42ac27ed7421742853bcf69.png"},89813:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/Source1-57d630ece73011c556b69fd43299c0a6.png"},96138:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/Seed2-65d0c283cf17ab38bb152faf4a900050.png"},98525:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/Model1-ad8a22c735a0923d9986ff265a2b9796.png"},99362:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/model-settings-9796ceebab166117768e99c2308d44d4.png"}}]);