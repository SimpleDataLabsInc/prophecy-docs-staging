"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[94441],{2682:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"Spark/data-explorer/data-explorer","title":"Data exploration","description":"Data explorer for Spark","source":"@site/docs/Spark/data-explorer/data-explorer.md","sourceDirName":"Spark/data-explorer","slug":"/Spark/data-explorer/","permalink":"/Spark/data-explorer/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"execution","permalink":"/tags/execution"},{"inline":true,"label":"explorer","permalink":"/tags/explorer"},{"inline":true,"label":"sort","permalink":"/tags/sort"},{"inline":true,"label":"filter","permalink":"/tags/filter"},{"inline":true,"label":"interim","permalink":"/tags/interim"},{"inline":true,"label":"data","permalink":"/tags/data"}],"version":"current","frontMatter":{"title":"Data exploration","id":"data-explorer","description":"Data explorer for Spark","tags":["execution","explorer","sort","filter","interim","data"]},"sidebar":"mySidebar","previous":{"title":"Conditional execution","permalink":"/engineers/conditional-execution"},"next":{"title":"Data profiling","permalink":"/Spark/data-explorer/data-profile"}}');var n=a(74848),i=a(28453);const l={title:"Data exploration",id:"data-explorer",description:"Data explorer for Spark",tags:["execution","explorer","sort","filter","interim","data"]},o=void 0,s={},d=[{value:"Data preview",id:"data-preview",level:2},{value:"Large sample interims",id:"large-sample-interims",level:3}];function c(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["During project development, you can interactively run your pipelines and analyze the ",(0,n.jsx)(t.a,{href:"/engineers/execution#interactive-execution",children:"data samples"})," that result in the ",(0,n.jsx)(t.strong,{children:"data explorer"}),". Use the data explorer to confirm the structure of each column, review data entries, and make sure the data types are correct."]}),"\n",(0,n.jsx)(t.h2,{id:"data-preview",children:"Data preview"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Data Preview"})," tab of the data explorer enables the following functionality."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Sort the data"}),"\n",(0,n.jsx)(t.li,{children:"Filter the data"}),"\n",(0,n.jsx)(t.li,{children:"Search through the data"}),"\n",(0,n.jsx)(t.li,{children:"Show or hide columns in the preview"}),"\n",(0,n.jsx)(t.li,{children:"Export the data sample in CSV or JSON format"}),"\n",(0,n.jsx)(t.li,{children:"Save the data transformation as a new gem"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Data_explorer",src:a(33907).A+"",width:"2620",height:"1508"})}),"\n",(0,n.jsxs)(t.p,{children:["When you filter, sort, or search through the data, you are only working with the ",(0,n.jsx)(t.strong,{children:"visible sample"})," of the data. To apply these to the whole dataset in the preview, you must either:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Load the whole dataset into the preview by clicking ",(0,n.jsx)(t.strong,{children:"Load More"})," after the last record in the preview until all records are shown."]}),"\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.strong,{children:"Run"})," in the top right corner of the data preview. This will filter and sort based on all of the data in the backend (rather than a sample)."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"large-sample-interims",children:"Large sample interims"}),"\n",(0,n.jsxs)(t.p,{children:["If you want to see larger samples in the data explorer, you can enable the ",(0,n.jsx)(t.a,{href:"/engineers/data-sampling#selective-recommended",children:"Selective"})," data sampling setting. When you enable this option, you will be able to see up to 10,000 rows in the data sample by default. You'll also see all columns by default."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"You can still load more records into the preview when using selective data sampling."})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>l,x:()=>o});var r=a(96540);const n={},i=r.createContext(n);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(i.Provider,{value:t},e.children)}},33907:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/Data_Explorer-cc5d1c6d6c9d420acd2855ef1ba5ffab.png"}}]);