"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[8268],{9599:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/inputs-57a290a2b7434199ea908a36c7bb3f43.png"},19456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>h,default:()=>o,frontMatter:()=>d,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"Spark/gems/spark-gems","title":"Gems","description":"Prophecy Spark Gems","source":"@site/docs/Spark/gems/gems.md","sourceDirName":"Spark/gems","slug":"/engineers/gems","permalink":"/prophecy-docs-staging/preview/pr-619/engineers/gems","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"spark","permalink":"/prophecy-docs-staging/preview/pr-619/tags/spark"},{"inline":true,"label":"gem","permalink":"/prophecy-docs-staging/preview/pr-619/tags/gem"}],"version":"current","frontMatter":{"title":"Gems","id":"spark-gems","slug":"/engineers/gems","description":"Prophecy Spark Gems","tags":["spark","gem"]},"sidebar":"mySidebar","previous":{"title":"Datasets","permalink":"/prophecy-docs-staging/preview/pr-619/engineers/dataset"},"next":{"title":"Source And Target","permalink":"/prophecy-docs-staging/preview/pr-619/engineers/source-target"}}');var i=n(74848),r=n(28453);const d={title:"Gems",id:"spark-gems",slug:"/engineers/gems",description:"Prophecy Spark Gems",tags:["spark","gem"]},h=void 0,l={},c=[{value:"Categories",id:"categories",level:2},{value:"Gem instance",id:"gem-instance",level:2},{value:"Gem configuration",id:"gem-configuration",level:2},{value:"Input ports",id:"input-ports",level:2},{value:"Output ports",id:"output-ports",level:2},{value:"Action menu",id:"action-menu",level:2},{value:"Gem phase",id:"gem-phase",level:3}];function a(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-619/gems",children:"Gems"})," are functional units in a ",(0,i.jsx)(t.a,{href:"/engineers/pipelines",children:"pipeline"})," that perform tasks such as reading, transforming, writing, or handling other data operations."]}),"\n",(0,i.jsx)(t.h2,{id:"categories",children:"Categories"}),"\n",(0,i.jsx)(t.p,{children:"The table below outlines the different Spark gem categories."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Category"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/engineers/source-target",children:(0,i.jsx)(t.strong,{children:"Source and Target"})})}),(0,i.jsx)(t.td,{children:"The set of gems that help with loading and saving data."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/engineers/transform",children:(0,i.jsx)(t.strong,{children:"Transform"})})}),(0,i.jsx)(t.td,{children:"The set of gems that help with transforming data."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/engineers/join-split",children:(0,i.jsx)(t.strong,{children:"Join and Split"})})}),(0,i.jsx)(t.td,{children:"The set of gems that help with the process of merging or splitting DataFrame(s) to create new DataFrame(s)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/engineers/custom/",children:(0,i.jsx)(t.strong,{children:"Custom"})})}),(0,i.jsx)(t.td,{children:"The set of gems that our creative teams build using Expression Builder to extend the Prophecy capabilities."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/engineers/machine-learning/",children:(0,i.jsx)(t.strong,{children:"Machine Learning"})})}),(0,i.jsx)(t.td,{children:"The set of gems that prepare data or use data for Machine Learning."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/engineers/subgraph",children:(0,i.jsx)(t.strong,{children:"Subgraph"})})}),(0,i.jsx)(t.td,{children:"A gem that can contain many other gems within it."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"gem-instance",children:"Gem instance"}),"\n",(0,i.jsx)(t.p,{children:"When you click on a gem from the gem drawer, an instance of that gem gets added to your pipeline canvas. Use the image and the table below to understand the UI of a gem."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Gem Instance",src:n(98993).A+"",width:"2628",height:"1490"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Callout"}),(0,i.jsx)(t.th,{children:"UI element"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,i.jsx)(t.td,{children:"Gem label"}),(0,i.jsx)(t.td,{children:"The name of this particular gem instance. It must be unique within a given pipeline."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,i.jsx)(t.td,{children:"Gem type name"}),(0,i.jsx)(t.td,{children:"The type of gem."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"3"}),(0,i.jsx)(t.td,{children:"Input ports"}),(0,i.jsx)(t.td,{children:"One or more ports that accept connections from upstream gems."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,i.jsx)(t.td,{children:"Output ports"}),(0,i.jsx)(t.td,{children:"One or more ports that connect to downstream gems."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"5"}),(0,i.jsx)(t.td,{children:"Gem phase"}),(0,i.jsxs)(t.td,{children:["The ",(0,i.jsx)(t.a,{href:"#gem-phase",children:"phase"})," for this gem instance, which defines the order in which gem instances are executed."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"6"}),(0,i.jsx)(t.td,{children:"Open"}),(0,i.jsx)(t.td,{children:"The button that lets you open the gem configuration."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"7"}),(0,i.jsx)(t.td,{children:"Run button"}),(0,i.jsx)(t.td,{children:"A button that runs the pipeline up to and including the gem."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"8"}),(0,i.jsx)(t.td,{children:"Action menu"}),(0,i.jsx)(t.td,{children:"A menu that includes options to change the phase of the gem, add run conditions, delete the gem, and more."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"gem-configuration",children:"Gem configuration"}),"\n",(0,i.jsx)(t.p,{children:"When you open a gem, you can configure how the gem will work."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Gem instance configuration",src:n(81782).A+"",width:"2620",height:"1508"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"}}),(0,i.jsx)(t.th,{children:"UI element"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,i.jsx)(t.td,{children:"Gem instance name"}),(0,i.jsx)(t.td,{children:"The name of this particular gem instance."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,i.jsx)(t.td,{children:"Inputs and outputs"}),(0,i.jsx)(t.td,{children:"The inputs and outputs for this gem instance."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"3"}),(0,i.jsx)(t.td,{children:"Gem configuration"}),(0,i.jsx)(t.td,{children:"The configuration for this instance. Each gem will be different. See the documentation for individual gems for more information."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,i.jsx)(t.td,{children:"Run button"}),(0,i.jsx)(t.td,{children:"A button that runs the pipeline up to and including the gem."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"5"}),(0,i.jsx)(t.td,{children:"Diagnostics"}),(0,i.jsx)(t.td,{children:"A diagnostics window that will show a list of configuration errors if they exist."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"6"}),(0,i.jsx)(t.td,{children:"Data"}),(0,i.jsx)(t.td,{children:"A preview of the output table that is available if you run the gem."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"7"}),(0,i.jsx)(t.td,{children:"Unit tests"}),(0,i.jsxs)(t.td,{children:["A set of unit tests. See ",(0,i.jsx)(t.a,{href:"/engineers/unit-tests",children:"here"})," for more details."]})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"input-ports",children:"Input ports"}),"\n",(0,i.jsxs)(t.p,{children:["The Input tab defines the incoming connections accepted by the gem. Most gem types only accept one connection, but some (such as ",(0,i.jsx)(t.a,{href:"/engineers/join",children:"Join"}),") allow for multiple inputs."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Input UI",src:n(9599).A+"",width:"2620",height:"1352"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"}}),(0,i.jsx)(t.th,{children:"UI element"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,i.jsx)(t.td,{children:"Search"}),(0,i.jsx)(t.td,{children:"A field that will filter your input columns."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,i.jsx)(t.td,{children:"Add Input"}),(0,i.jsx)(t.td,{children:"If the gem supports multiple inputs, you can click this button to add more input ports to this instance."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"3"}),(0,i.jsx)(t.td,{children:"Input"}),(0,i.jsx)(t.td,{children:"The name of the input port and the name of the input gem instance."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,i.jsx)(t.td,{children:"Port schema"}),(0,i.jsx)(t.td,{children:"The schema of the port (columns and column types). The schema will only appear when an input port is present."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"5"}),(0,i.jsx)(t.td,{children:"Edit ports"}),(0,i.jsx)(t.td,{children:"A button that lets you edit or delete ports."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"output-ports",children:"Output ports"}),"\n",(0,i.jsx)(t.p,{children:"The Output tab defines the outgoing schemas that will be available to downstream gems. In some cases, the Prophecy compiler can't infer the output schema automatically, so you have the option to infer the schema using your connected fabric or specify it manually."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"}}),(0,i.jsx)(t.th,{children:"UI element"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,i.jsx)(t.td,{children:"Output schema"}),(0,i.jsx)(t.td,{children:"Output schema for this gem instance. This will be the schema of the data that downstream gem instances will use"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,i.jsx)(t.td,{children:"Custom schema"}),(0,i.jsx)(t.td,{children:"Toggle this to enable custom output schema editing"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"3"}),(0,i.jsx)(t.td,{children:"Infer from cluster"}),(0,i.jsx)(t.td,{children:"Run the gem code on the connected cluster and infer the schema from the result"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,i.jsx)(t.td,{children:"Edit schema"}),(0,i.jsx)(t.td,{children:"Edit the output schema manually"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"action-menu",children:"Action menu"}),"\n",(0,i.jsx)(t.p,{children:"The action menu gives you more granular control over individual gems. When you expand the action menu, you see the following options:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Action"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Description"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Explain"})}),(0,i.jsx)(t.td,{children:"Copilot adds a comment to the gem that explains what it does."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Fix"})}),(0,i.jsx)(t.td,{children:"Copilot resolves an error in the gem configuration."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Label"})}),(0,i.jsx)(t.td,{children:"Copilot renames the gem."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Add Comment"})}),(0,i.jsx)(t.td,{children:"Manually write a comment that explains the gem."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Add Condition"})}),(0,i.jsxs)(t.td,{children:["Write a ",(0,i.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-619/engineers/conditional-execution",children:"condition"})," that will restrict gem execution during pipeline runs."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Change Phase"})}),(0,i.jsxs)(t.td,{children:["Change the ",(0,i.jsx)(t.a,{href:"#gem-phase",children:"phase"})," of the gem."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Delete"})}),(0,i.jsx)(t.td,{children:"Remove the gem from the pipeline."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Cache"})}),(0,i.jsx)(t.td,{children:"Cache the entire gem output dataset. This is useful if you have multiple pipeline branches from one gem. If you cache the dataset from that gem, Spark will not have to compute upstream gems multiple times for each branch."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Data Preview"})}),(0,i.jsxs)(t.td,{children:["If ",(0,i.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-619/engineers/data-sampling",children:"selective data sampling"})," is enabled, use this checkbox to enable or disable the generation of the data sample for the gem."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Data Profile"})}),(0,i.jsxs)(t.td,{children:["Enable or disable ",(0,i.jsx)(t.a,{href:"/engineers/data-profile",children:"data profiling"})," for the gem output."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Data Diff"})}),(0,i.jsxs)(t.td,{children:["If ",(0,i.jsx)(t.a,{href:"/engineers/data-diff",children:"Data Diff"})," is configured for a Target gem, use this checkbox to enable or disable the data diff output."]})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Gem action menu",src:n(78031).A+"",width:"2620",height:"1508"})}),"\n",(0,i.jsx)(t.h3,{id:"gem-phase",children:"Gem phase"}),"\n",(0,i.jsx)(t.p,{children:"In a data pipeline, the phase of a gem determines the sequence in which it runs. This sequencing is managed by adjusting the order of the generated pipeline code."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-scala",children:"def apply(spark: SparkSession): Unit = {\n  val df_my_orders     = my_orders(spark).cache()\n  val df_Repartition_1 = Repartition_1(spark, df_my_orders)\n  Write_CSV(spark, df_Repartition_1)\n  val df_SchemaTransform_1 = SchemaTransform_1(spark, df_my_orders)\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"Here\u2019s how it works:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Gems are assigned a numerical phase (e.g., ",(0,i.jsx)(t.code,{children:"0"}),", ",(0,i.jsx)(t.code,{children:"1"}),", ",(0,i.jsx)(t.code,{children:"-1"}),"), where lower values run first. For example, a gem with phase ",(0,i.jsx)(t.code,{children:"0"})," will execute before a gem with phase ",(0,i.jsx)(t.code,{children:"1"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["When a gem runs, all its upstream gems must also run. This means that if a downstream gem has phase ",(0,i.jsx)(t.code,{children:"0"})," and an upstream gem has phase ",(0,i.jsx)(t.code,{children:"1"}),", the upstream gem will be grouped into phase ",(0,i.jsx)(t.code,{children:"0"})," to ensure proper execution."]}),"\n",(0,i.jsxs)(t.li,{children:["Because of this dependency, the phase assigned to the last gem in a branch determines the phase of the entire branch. This means that when configuring gem phases, you only need to focus on the ",(0,i.jsx)(t.em,{children:"leaf nodes"}),"\u2014the final gems in each branch of the pipeline."]}),"\n"]})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>h});var s=n(96540);const i={},r=s.createContext(i);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}},78031:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/gem-action-menu-e770aa9c8e7545049a6810b543961a97.png"},81782:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/instance_open-7d8e7317c021c7788b3dd171b9f1818b.png"},98993:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/instance-095306c75e37bf6d7858b5783ba65e17.png"}}]);