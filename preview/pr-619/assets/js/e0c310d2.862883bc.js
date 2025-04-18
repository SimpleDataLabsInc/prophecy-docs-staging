"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[71027],{8760:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"analysts/development/data-explorer","title":"Data exploration","description":"Generate data samples through the pipeline during development","source":"@site/docs/analysts/development/data-explorer.md","sourceDirName":"analysts/development","slug":"/analysts/data-explorer","permalink":"/prophecy-docs-staging/preview/pr-619/analysts/data-explorer","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"execution","permalink":"/prophecy-docs-staging/preview/pr-619/tags/execution"},{"inline":true,"label":"explorer","permalink":"/prophecy-docs-staging/preview/pr-619/tags/explorer"},{"inline":true,"label":"sort","permalink":"/prophecy-docs-staging/preview/pr-619/tags/sort"},{"inline":true,"label":"filter","permalink":"/prophecy-docs-staging/preview/pr-619/tags/filter"},{"inline":true,"label":"interim","permalink":"/prophecy-docs-staging/preview/pr-619/tags/interim"},{"inline":true,"label":"data","permalink":"/prophecy-docs-staging/preview/pr-619/tags/data"}],"version":"current","frontMatter":{"title":"Data exploration","id":"data-explorer","slug":"/analysts/data-explorer","description":"Generate data samples through the pipeline during development","tags":["execution","explorer","sort","filter","interim","data"]},"sidebar":"mySidebar","previous":{"title":"Connections","permalink":"/prophecy-docs-staging/preview/pr-619/analysts/connections"},"next":{"title":"Functions","permalink":"/prophecy-docs-staging/preview/pr-619/analysts/functions"}}');var r=a(74848),i=a(28453);const l={title:"Data exploration",id:"data-explorer",slug:"/analysts/data-explorer",description:"Generate data samples through the pipeline during development",tags:["execution","explorer","sort","filter","interim","data"]},s=void 0,o={},p=[{value:"Generate samples",id:"generate-samples",level:2},{value:"Explore the data",id:"explore-the-data",level:2},{value:"Apply to all data",id:"apply-to-all-data",level:2},{value:"Create gems",id:"create-gems",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"The Data Explorer can help you navigate your interim data samples and understand your data better. Use it to confirm the structure of each column, review data entries, and make sure the data types are correct."}),"\n",(0,r.jsx)(t.h2,{id:"generate-samples",children:"Generate samples"}),"\n",(0,r.jsxs)(t.p,{children:["To use the Data Explorer, you need to ",(0,r.jsx)(t.a,{href:"/analysts/pipeline-execution/#interactive-execution",children:"interactively run"})," your pipelines to generate data samples. This lets you view a sample output of each gem. To load the Data Explorer, simply click on the table icon in between gems after a pipeline run."]}),"\n",(0,r.jsx)(t.h2,{id:"explore-the-data",children:"Explore the data"}),"\n",(0,r.jsx)(t.p,{children:"The Data Explorer enables the following functionality."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Sort the data"}),"\n",(0,r.jsx)(t.li,{children:"Filter the data"}),"\n",(0,r.jsx)(t.li,{children:"Search through the data"}),"\n",(0,r.jsx)(t.li,{children:"Show or hide columns in the preview"}),"\n",(0,r.jsx)(t.li,{children:"Export the data sample in CSV or JSON format"}),"\n",(0,r.jsx)(t.li,{children:"Save the data transformation as a new gem"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"DataExplorationSQL",src:a(43045).A+"",width:"2620",height:"1508"})}),"\n",(0,r.jsx)(t.h2,{id:"apply-to-all-data",children:"Apply to all data"}),"\n",(0,r.jsxs)(t.p,{children:["When you filter, sort, or search through the data, you are only working with the ",(0,r.jsx)(t.strong,{children:"visible sample"})," of the data. To apply these to the whole dataset in the preview, you must either:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Load the whole dataset into the preview by clicking ",(0,r.jsx)(t.strong,{children:"Load More"})," after the last record in the preview until all records are shown."]}),"\n",(0,r.jsxs)(t.li,{children:["Click ",(0,r.jsx)(t.strong,{children:"Run"})," in the top right corner of the data preview. This will filter and sort based on all of the data in the backend (rather than a sample)."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"create-gems",children:"Create gems"}),"\n",(0,r.jsxs)(t.p,{children:["After analyzing the data, you can retain the filter and sort options in the pipeline by clicking on the ",(0,r.jsx)(t.strong,{children:"Create Gems"})," option. This action saves the applied filter and sort as a ",(0,r.jsx)(t.code,{children:"Filter"})," and ",(0,r.jsx)(t.code,{children:"OrderBy"})," gem in the pipeline."]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>l,x:()=>s});var n=a(96540);const r={},i=n.createContext(r);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:t},e.children)}},43045:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/DataExplorationSQL-8e9122d2b7581ec27286c6b6299285ec.png"}}]);