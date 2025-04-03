"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[64990],{9e3:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"Spark/execution/data-sampling","title":"Data sampling settings","description":"Choose when to sample data during interactive execution","source":"@site/docs/Spark/execution/data-sampling.md","sourceDirName":"Spark/execution","slug":"/engineers/data-sampling","permalink":"/prophecy-docs-staging/preview/pr-600/engineers/data-sampling","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"interactive execution","permalink":"/prophecy-docs-staging/preview/pr-600/tags/interactive-execution"},{"inline":true,"label":"data sampling","permalink":"/prophecy-docs-staging/preview/pr-600/tags/data-sampling"}],"version":"current","frontMatter":{"title":"Data sampling settings","id":"data-sampling","slug":"/engineers/data-sampling","description":"Choose when to sample data during interactive execution","tags":["interactive execution","data sampling"]},"sidebar":"mySidebar","previous":{"title":"Execution metrics","permalink":"/prophecy-docs-staging/preview/pr-600/engineers/execution-metrics"},"next":{"title":"Conditional execution","permalink":"/prophecy-docs-staging/preview/pr-600/engineers/conditional-execution"}}');var a=i(74848),s=i(28453);const r={title:"Data sampling settings",id:"data-sampling",slug:"/engineers/data-sampling",description:"Choose when to sample data during interactive execution",tags:["interactive execution","data sampling"]},l=void 0,d={},c=[{value:"Interactive run configuration",id:"interactive-run-configuration",level:2},{value:"Data sampling modes",id:"data-sampling-modes",level:2},{value:"All (default)",id:"all-default",level:3},{value:"Selective (recommended)",id:"selective-recommended",level:3},{value:"Sources",id:"sources",level:3},{value:"Targets",id:"targets",level:3},{value:"IO",id:"io",level:3},{value:"Vanilla",id:"vanilla",level:3},{value:"Cached interims",id:"cached-interims",level:2},{value:"Fabric settings",id:"fabric-settings",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["You can choose different ",(0,a.jsx)(n.strong,{children:"data sampling settings"})," to control how Prophecy generates data samples during interactive pipeline execution."]}),"\n",(0,a.jsx)(n.h2,{id:"interactive-run-configuration",children:"Interactive run configuration"}),"\n",(0,a.jsx)(n.p,{children:"For each pipeline, you can enable, disable, or change interactive data sampling and job data sampling modes. To quickly update the interactive execution settings:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Hover the large ",(0,a.jsx)(n.strong,{children:"play"})," button."]}),"\n",(0,a.jsxs)(n.li,{children:["Click on the ",(0,a.jsx)(n.strong,{children:"ellipses"})," that appears on hover."]}),"\n",(0,a.jsxs)(n.li,{children:["Change your data sampling settings. This will update your ",(0,a.jsx)(n.a,{href:"/engineers/pipeline-settings#run-settings",children:"pipeline settings"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Interactive run configuration",src:i(95936).A+"",width:"2620",height:"1508"})}),"\n",(0,a.jsx)(n.h2,{id:"data-sampling-modes",children:"Data sampling modes"}),"\n",(0,a.jsx)(n.p,{children:"Prophecy provides the following data sampling modes."}),"\n",(0,a.jsx)(n.h3,{id:"all-default",children:"All (default)"}),"\n",(0,a.jsx)(n.p,{children:"All gems (excluding Target gems) generate data samples."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"All interims",src:i(21130).A+"",width:"2620",height:"1508"})}),"\n",(0,a.jsx)(n.h3,{id:"selective-recommended",children:"Selective (recommended)"}),"\n",(0,a.jsxs)(n.p,{children:["When you choose selective data sampling, you gain the ability to enable or disable data samples for individual gems. To do so, use the ",(0,a.jsx)(n.strong,{children:"Data Preview"})," checkbox in the gem ",(0,a.jsx)(n.a,{href:"/engineers/gems",children:"action menu"}),". Selectively-generated samples load up to 10,000 rows by default."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Selective",src:i(12003).A+"",width:"2620",height:"1508"})}),"\n",(0,a.jsxs)(n.p,{children:["If the ",(0,a.jsx)(n.strong,{children:"Data Preview"})," option is not selected for a gem, you'll see a pale-color gem output after running the data pipeline. This means that no data sample was generated. To generate it, open the pale interim and it will load the data. After it loads, the data sample will display the normal bold color."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Normally on Databricks UC shared clusters, data samples are only generated on edge nodes. With selective interims, you can select to generate samples from any gem."})}),"\n",(0,a.jsx)(n.h3,{id:"sources",children:"Sources"}),"\n",(0,a.jsx)(n.p,{children:"Only Source gems generate data samples."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Source interims",src:i(50564).A+"",width:"2620",height:"1508"})}),"\n",(0,a.jsx)(n.h3,{id:"targets",children:"Targets"}),"\n",(0,a.jsx)(n.p,{children:"Only gems before Target gems generate data samples."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Target interims",src:i(44656).A+"",width:"2620",height:"1508"})}),"\n",(0,a.jsx)(n.h3,{id:"io",children:"IO"}),"\n",(0,a.jsx)(n.p,{children:"Data samples are only generated after Source gems or before Target gems (not between intermediate gems)."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"IO interims",src:i(87329).A+"",width:"2620",height:"1508"})}),"\n",(0,a.jsx)(n.h3,{id:"vanilla",children:"Vanilla"}),"\n",(0,a.jsx)(n.p,{children:"This Databricks-specific setting generates data samples on the last node(s) of a pipeline. If the pipeline branch ends with a Target gem, the data sample appears before the Target gem (like the Target mode)."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Vanilla interims",src:i(62046).A+"",width:"2620",height:"1508"})}),"\n",(0,a.jsx)(n.h2,{id:"cached-interims",children:"Cached interims"}),"\n",(0,a.jsx)(n.p,{children:"If you change your data samplings settings and re-run your pipeline, you might see some grayed-out data samples. These are the cached data samples from previous runs. They might be outdated."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Cached interims",src:i(36679).A+"",width:"2620",height:"1508"})}),"\n",(0,a.jsx)(n.h2,{id:"fabric-settings",children:"Fabric settings"}),"\n",(0,a.jsxs)(n.p,{children:["In a fabric, you can enable or disable data sampling and override pipeline-level settings when a pipeline runs on that fabric. This option is available in the ",(0,a.jsx)(n.strong,{children:"Advanced"})," tab of a fabric. A common use case is preventing sample data generation in ",(0,a.jsx)(n.strong,{children:"production"})," pipelines."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Create a new model test",src:i(54830).A+"",width:"2620",height:"1508"})}),"\n",(0,a.jsx)(n.p,{children:"By default, only team admins can access the Advanced tab in a fabric. However, there are two flags you can set in your deployment to change this behavior:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"ALLOW_FABRIC_ACCESS_CLUSTER_ADMIN"}),": Grants cluster admins full access to fabrics, even if they are not team admins."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"DISALLOW_FABRIC_CODEDEPS_UPDATE_TEAM_ADMIN"}),": Prevents team admins from modifying the data sampling settings within a fabric."]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},12003:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/selective-interims-11cd7f8c9b87012f5f35fd04159473a3.png"},21130:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/all-interims-d84d352f8316b5ff16464f13d0c4c533.png"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(96540);const a={},s=t.createContext(a);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:n},e.children)}},36679:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/cached-interims-ed38111ee6ce17dd0b9f0dcf3a7e089d.png"},44656:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/target-interims-4ca8cc47a6070f214a7822ee2b05df96.png"},50564:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/source-interims-4acf1d0622a2ac0c24cf968b5ed96d4f.png"},54830:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/limit-data-preview-interims-b37ec1a06104508551195a267acd7190.png"},62046:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/vanilla-interims-450e62becd531b96e13b2f4eca5896fd.png"},87329:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/io-interims-111ead7fc5301e539b23ed41762cd79e.png"},95936:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/interactive-run-config-04e9d774c19fa15c211ba460a5b5c637.png"}}]);