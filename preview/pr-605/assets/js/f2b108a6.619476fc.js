"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[22605],{21701:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>o,frontMatter:()=>d,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"analysts/development/gems/gems","title":"Gems","description":"Power your pipelines with gems","source":"@site/docs/analysts/development/gems/gems.md","sourceDirName":"analysts/development/gems","slug":"/analysts/gems","permalink":"/prophecy-docs-staging/preview/pr-605/analysts/gems","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-605/tags/gems"},{"inline":true,"label":"sql","permalink":"/prophecy-docs-staging/preview/pr-605/tags/sql"},{"inline":true,"label":"analyst","permalink":"/prophecy-docs-staging/preview/pr-605/tags/analyst"}],"version":"current","frontMatter":{"title":"Gems","id":"gems","slug":"/analysts/gems","description":"Power your pipelines with gems","tags":["gems","sql","analyst"]},"sidebar":"mySidebar","previous":{"title":"Pipeline parameters","permalink":"/prophecy-docs-staging/preview/pr-605/analysts/pipeline-parameters"},"next":{"title":"Source and Target","permalink":"/prophecy-docs-staging/preview/pr-605/analysts/source-target"}}');var i=t(74848),r=t(28453);const d={title:"Gems",id:"gems",slug:"/analysts/gems",description:"Power your pipelines with gems",tags:["gems","sql","analyst"]},l=void 0,a={},c=[{value:"Categories",id:"categories",level:2},{value:"Interactive gem examples",id:"interactive-gem-examples",level:2},{value:"Gem instance",id:"gem-instance",level:2},{value:"Gem configuration",id:"gem-configuration",level:2},{value:"Visual and code view",id:"visual-and-code-view",level:3},{value:"Action menu",id:"action-menu",level:2},{value:"Gem phase",id:"gem-phase",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-605/gems",children:"Gems"})," are functional units in a pipeline that perform tasks such as reading, transforming, writing, or handling other data operations. When you build pipelines in a SQL project, some gems will be powered by ",(0,i.jsx)(n.a,{href:"/administration/architecture",children:"Prophecy Automate"}),", and some gems will be powered by SQL dbt."]}),"\n",(0,i.jsx)(n.h2,{id:"categories",children:"Categories"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Category"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Execution"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Source/Target"})}),(0,i.jsx)(n.td,{children:"Read and write data from various data providers."}),(0,i.jsx)(n.td,{children:"Prophecy Automate"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Transform"})}),(0,i.jsx)(n.td,{children:"Modify, enrich, or reshape data during processing."}),(0,i.jsx)(n.td,{children:"SQL warehouse"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Prepare"})}),(0,i.jsx)(n.td,{children:"Clean, structure, and optimize data for analysis."}),(0,i.jsx)(n.td,{children:"SQL warehouse"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Join"})}),(0,i.jsx)(n.td,{children:"Merge, split, or link datasets."}),(0,i.jsx)(n.td,{children:"SQL warehouse"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Parse"})}),(0,i.jsx)(n.td,{children:"Interpret structured formats in columns like XML and JSON."}),(0,i.jsx)(n.td,{children:"SQL warehouse"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Report"})}),(0,i.jsx)(n.td,{children:"Share results through channels such as email or Tableau."}),(0,i.jsx)(n.td,{children:"Prophecy Automate"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Custom"})}),(0,i.jsx)(n.td,{children:"Enhance and extend Prophecy\u2019s functionality."}),(0,i.jsx)(n.td,{children:"Depends"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"interactive-gem-examples",children:"Interactive gem examples"}),"\n",(0,i.jsxs)(n.p,{children:["To test a gem hands-on, you can try the ",(0,i.jsx)(n.strong,{children:"interactive example"})," of the gem. If you search for a gem in the project sidebar, you can open the associated example and run the pre-configured pipeline!"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Gem example",src:t(44148).A+"",width:"2812",height:"900"})}),"\n",(0,i.jsx)(n.h2,{id:"gem-instance",children:"Gem instance"}),"\n",(0,i.jsx)(n.p,{children:"When you click on a gem from the gem drawer, an instance of that gem gets added to your pipeline canvas. Use the image and the table below to understand the UI of a gem."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Gem instance",src:t(24394).A+"",width:"2620",height:"1508"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Callout"}),(0,i.jsx)(n.th,{children:"UI element"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"1"}),(0,i.jsx)(n.td,{children:"Gem label"}),(0,i.jsx)(n.td,{children:"The name of this particular gem instance. It must be unique within a given pipeline."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"2"}),(0,i.jsx)(n.td,{children:"Gem type name"}),(0,i.jsx)(n.td,{children:"The type of gem."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"3"}),(0,i.jsx)(n.td,{children:"Input ports"}),(0,i.jsx)(n.td,{children:"One or more ports that accept connections from upstream gems."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"4"}),(0,i.jsx)(n.td,{children:"Output ports"}),(0,i.jsx)(n.td,{children:"One or more ports that connect to downstream gems."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"5"}),(0,i.jsx)(n.td,{children:"Gem phase"}),(0,i.jsxs)(n.td,{children:["The ",(0,i.jsx)(n.a,{href:"#gem-phase",children:"phase"})," for this gem instance, which defines the order in which gem instances are executed."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"6"}),(0,i.jsx)(n.td,{children:"Open"}),(0,i.jsx)(n.td,{children:"The button that lets you open the gem configuration."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"7"}),(0,i.jsx)(n.td,{children:"Run button"}),(0,i.jsx)(n.td,{children:"A button that runs the pipeline up to and including the gem."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"8"}),(0,i.jsx)(n.td,{children:"Action menu"}),(0,i.jsx)(n.td,{children:"A menu that includes options to change the phase of the gem, add run conditions, delete the gem, and more."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"9"}),(0,i.jsx)(n.td,{children:"Warning"}),(0,i.jsx)(n.td,{children:"Indicator that the gem contains errors to be fixed."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"gem-configuration",children:"Gem configuration"}),"\n",(0,i.jsx)(n.p,{children:"When you open a gem, you can configure how the gem will work. Explore our individual gem documentation to understand each gem's parameters."}),"\n",(0,i.jsx)(n.h3,{id:"visual-and-code-view",children:"Visual and code view"}),"\n",(0,i.jsxs)(n.p,{children:["Some gems can be configured in the ",(0,i.jsx)(n.strong,{children:"visual"})," view or the ",(0,i.jsx)(n.strong,{children:"code"})," view. Use the visual expression builder to populate fields in the visual view. Prophecy will automatically convert visual expressions into SQL expressions. You can edit these SQL statements or write your own in the code view."]}),"\n",(0,i.jsx)(n.h2,{id:"action-menu",children:"Action menu"}),"\n",(0,i.jsx)(n.p,{children:"The action menu gives you more granular control over individual gems. When you expand the action menu, you see the following options:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Action"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Description"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Explain"})}),(0,i.jsx)(n.td,{children:"Copilot adds a comment to the gem that explains what it does."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Fix"})}),(0,i.jsx)(n.td,{children:"Copilot resolves an error in the gem configuration."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Label"})}),(0,i.jsx)(n.td,{children:"Copilot renames the gem."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Add Comment"})}),(0,i.jsx)(n.td,{children:"Manually write a comment that explains the gem."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Change Phase"})}),(0,i.jsxs)(n.td,{children:["Change the ",(0,i.jsx)(n.a,{href:"#gem-phase",children:"phase"})," of the gem."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Delete"})}),(0,i.jsx)(n.td,{children:"Remove the gem from the pipeline."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"gem-phase",children:"Gem phase"}),"\n",(0,i.jsxs)(n.p,{children:["In a data pipeline, the ",(0,i.jsx)(n.strong,{children:"phase"})," of a gem determines the sequence in which it runs. Here\u2019s how it works:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Gems are assigned a numerical phase (e.g., ",(0,i.jsx)(n.code,{children:"0"}),", ",(0,i.jsx)(n.code,{children:"1"}),", ",(0,i.jsx)(n.code,{children:"-1"}),"), where lower values run first. For example, a gem with phase ",(0,i.jsx)(n.code,{children:"0"})," will execute before a gem with phase ",(0,i.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["When a gem runs, all its upstream gems must also run. This means that if a downstream gem has phase ",(0,i.jsx)(n.code,{children:"0"})," and an upstream gem has phase ",(0,i.jsx)(n.code,{children:"1"}),", the upstream gem will be grouped into phase ",(0,i.jsx)(n.code,{children:"0"})," to ensure proper execution."]}),"\n",(0,i.jsxs)(n.li,{children:["Because of this dependency, the phase assigned to the last gem in a branch determines the phase of the entire branch. This means that when configuring gem phases, you only need to focus on the ",(0,i.jsx)(n.em,{children:"leaf nodes"}),"\u2014the final gems in each branch of the pipeline."]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},24394:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/gem-instance-eb3ff7c21e30c6cd3a064b181ee2d34d.png"},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var s=t(96540);const i={},r=s.createContext(i);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}},44148:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/interactive-example-081b16697a974eab8a674e8a71265889.png"}}]);