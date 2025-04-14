"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[17585],{10321:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/oct-limit-data-preview-interims-b37ec1a06104508551195a267acd7190.png"},16509:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/oct-gem-builder-interface-f2d289f0ea1bf31ba480debfecc52bfd.png"},16608:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"release_notes/2024/October_2024/October_2024","title":"October 2024","description":"Release notes for October","source":"@site/docs/release_notes/2024/October_2024/October_2024.md","sourceDirName":"release_notes/2024/October_2024","slug":"/release_notes/2024/October_2024/","permalink":"/prophecy-docs-staging/preview/pr-615/release_notes/2024/October_2024/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"release notes","permalink":"/prophecy-docs-staging/preview/pr-615/tags/release-notes"},{"inline":true,"label":"changelog","permalink":"/prophecy-docs-staging/preview/pr-615/tags/changelog"},{"inline":true,"label":"october","permalink":"/prophecy-docs-staging/preview/pr-615/tags/october"}],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"id":"October_2024","description":"Release notes for October","title":"October 2024","tags":["release notes","changelog","october"]},"sidebar":"mySidebar","previous":{"title":"November 2024","permalink":"/prophecy-docs-staging/preview/pr-615/release_notes/2024/November_2024"},"next":{"title":"Webinar New Features to Turbocharge Pipeline Development","permalink":"/prophecy-docs-staging/preview/pr-615/release_notes/2024/October_2024/webinar_new_features/"}}');var i=s(74848),r=s(28453);const o={sidebar_position:1,id:"October_2024",description:"Release notes for October",title:"October 2024",tags:["release notes","changelog","october"]},a=void 0,c={},l=[{value:"3.4.* (October 28, 2024)",id:"34-october-28-2024",level:2},{value:"Features",id:"Features34",level:3},{value:"Spark Copilot Enhancements",id:"Spark34",level:4},{value:"SQL Copilot Enhancements",id:"SQL34",level:4},{value:"AI Copilot Enhancements",id:"AICopilot34",level:4},{value:"Minor Improvements",id:"MinorImprovements34",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"34-october-28-2024",children:"3.4.* (October 28, 2024)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Prophecy Python libs version: 1.9.24"}),"\n",(0,i.jsx)(n.li,{children:"Prophecy Scala libs version: 8.4.0"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"Features34",children:"Features"}),"\n",(0,i.jsx)(n.h4,{id:"Spark34",children:"Spark Copilot Enhancements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Limit data preview in interims"}),": There is a new global level flag that admins can use to disable Data sampling for a given fabric. This flag overrides the pipeline level Data sampling settings. When disabled, you won't be able to see production data in the interims when you run the pipeline."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Create a new model test",src:s(10321).A+"",width:"2620",height:"1508"})}),"\n",(0,i.jsx)(n.p,{children:"Data sampling is enabled on by default. When left enabled, Data sampling uses the pipeline's data sampling settings. Prophecy samples data during the interactive run experience to provide the best debugging experience for users."}),"\n",(0,i.jsxs)(n.p,{children:["For more information, see ",(0,i.jsx)(n.a,{href:"/engineers/execution/#interactive-execution",children:"Interims"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"SQL34",children:"SQL Copilot Enhancements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Data tests"}),": We now support model and column data tests, which are dbt macro generated tests that can be parametrized and applied to a given model or any number of columns."]}),"\n",(0,i.jsx)(n.p,{children:"You can create a new data test definition to use in your model or column test, or you can use an out-of-the-box supported dbt Simple data test."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Create a new model test",src:s(21498).A+"",width:"2620",height:"1507"})}),"\n",(0,i.jsxs)(n.p,{children:["For more information, see ",(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-615/analysts/model-column-tests",children:"Use model and column tests"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Variant type support"}),": You can use Prophecy to convert your variant schemas into flat, structured formats to make them easier to understand and use for analytics."]}),"\n",(0,i.jsx)(n.p,{children:"This is available for when you want to determine the variant schema of your Snowflake array or object."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Schema and column selector",src:s(71926).A+"",width:"2620",height:"1507"})}),"\n",(0,i.jsx)(n.p,{children:"Using the variant schema functionality, you can do the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Infer the variant schema"}),"\n",(0,i.jsx)(n.li,{children:"Configure the parsing limit for inferring the column structure"}),"\n",(0,i.jsx)(n.li,{children:"Use a nested column inside of the Visual Expression Builder"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For more information, see ",(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-615/analysts/variant-schema",children:"Variant schema"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Flatten Schema gem"}),": When processing raw data it can be useful to flatten complex data types like ",(0,i.jsx)(n.code,{children:"Struct"}),"s and ",(0,i.jsx)(n.code,{children:"Array"}),"s into simpler, flatter schemas. This gem builds upon the variant type support by allowing you to preserve all schemas, and not just the first one."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Input schema",src:s(22159).A+"",width:"1310",height:"754"})}),"\n",(0,i.jsx)(n.p,{children:"FlattenSchema works on Snowflake sources that have nested columns that you'd like to extract into a flat schema."}),"\n",(0,i.jsxs)(n.p,{children:["For more information, see ",(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-615/analysts/flatten-schema",children:"FlattenSchema"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Deduplicate gem"}),": You can use the deduplicate gem to remove rows with duplicate values of specified columns. There are four ",(0,i.jsx)(n.strong,{children:"Row to keep"})," options that you can use in your deduplicate gem."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Deduplicate Row to keep",src:s(86761).A+"",width:"2620",height:"1507"})}),"\n",(0,i.jsxs)(n.p,{children:["For more information, see ",(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-615/analysts/deduplicate",children:"Deduplicate"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Gem builder"}),": You can add custom gems to your SQL projects using the gem builder. You can create custom source, target, and transformation gems, and then publish them for your team to use."]}),"\n",(0,i.jsx)(n.p,{children:"Our SQL gem builder supports Databricks and Snowflake SQL."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Gem builder customize interface",src:s(16509).A+"",width:"2812",height:"898"})}),"\n",(0,i.jsxs)(n.p,{children:["For more information, see ",(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-615/analysts/gem-builder",children:"Gem builder"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"AICopilot34",children:"AI Copilot Enhancements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Voice interface in Copilot conversations"}),": You can now use audio to interact with Data Copilot. Copilot will transcribe your request and read aloud the text response shown in the chat."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Voice interface in copilot conversations",src:s(51119).A+"",width:"2620",height:"1508"})}),"\n",(0,i.jsx)(n.p,{children:"You must use Google Chrome to use the voice interface."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Enhanced Gem Modification for AI Copilot"}),": We\u2019ve upgraded the graph modification experience in AI Copilot. Now, you can specify particular gems for Copilot to focus on, allowing you to better control and limit the scope of changes. This added flexibility is especially valuable when working with large model graphs, making targeted edits more efficient and precise."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For example, here are a few ideas that you can base your prompts on:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Propagate the customer ID through all the gems"}),"\n",(0,i.jsx)(n.li,{children:"Add a reformat gem after this"}),"\n",(0,i.jsx)(n.li,{children:"Join selected gems on common columns"}),"\n",(0,i.jsx)(n.li,{children:"Join this gem with payment data"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Modify gems in copilot conversations",src:s(59800).A+"",width:"2880",height:"1618"})}),"\n",(0,i.jsx)(n.p,{children:"Added/updated gems are highlighted in yellow."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Use previous prompts in chat with AI Copilot"}),": Now you can revert to a previous prompt, and Copilot will return the result for that prompt. Go ahead and edit the previous prompt - AI Copilot will accept the edits and generate a suggestion accordingly."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Prompt suggestions"}),": AI Copilot will now make suggested prompts in the Chat interface. Click a suggested prompt to view the resulting model graph."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Chat interface",src:s(28942).A+"",width:"2880",height:"1618"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Updated Explain dialog design"}),": We've updated the Explain dialog design so that it's cleaner and easier to use."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Explain summary design",src:s(19555).A+"",width:"2620",height:"1508"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"MinorImprovements34",children:"Minor Improvements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Code diff on merge screen"}),": You can view the code changes of your commit when you start the process to commit changes. This gives you granular change visibility so that you can understand the detailed changes being made to your pipelines, models, datasets, and other entities."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"View Git code changes",src:s(38776).A+"",width:"2620",height:"1521"})}),"\n",(0,i.jsxs)(n.p,{children:["You can also use manual merge to resolve conflicts. This provides you with simple, yet effective ways to resolve merge conflicts for granular changes. For SQL, you can also toggle on ",(0,i.jsx)(n.strong,{children:"Code Changes"})," to view and edit the code directly on the files."]}),"\n",(0,i.jsxs)(n.p,{children:["For more information, see the ",(0,i.jsx)(n.a,{href:"/engineers/git",children:"Git docs"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Databricks Volumes support"}),": Prophecy now supports Databricks Volumes. When you run a Python or Scala pipeline via a job, you must bundle them as whl/jar artifacts. These artifacts must then be made accessible to the Databricks job in order to use them as a library installed on the cluster."]}),"\n",(0,i.jsx)(n.p,{children:"You can designate a path to a Volume for uploading the whl/jar files on the Providers tab of your Databricks fabric."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Databricks Volume Artifacts",src:s(24175).A+"",width:"2620",height:"1582"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Prophecy Lib version"}),": You can now find out what the current Prophecy Library version is on your clusters. Use the Cluster Attached dropdown to see the log for the current version in the fabric connection logs."]}),"\n",(0,i.jsx)("img",{src:s(79379).A,alt:"Prophecy libs version in the fabric cluster",width:"58%"}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},19555:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/oct-explain-summary-design-3227769ae31305a3decae3a1d4101621.png"},21498:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/oct-model-test-new-test-bce5fc3606997e45c6f3a8281b2023bc.png"},22159:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/oct-flatten_input-6f94e353ebd52d670b50729aecc0dbb1.png"},24175:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/oct-databricks-volume-artifacts-b55dc5b4d6b1c6f41a1268294c71e008.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(96540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}},28942:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/oct-chat-interface-45673b1b7afdae960a50c8478cadf4dc.png"},38776:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/oct-git-code-changes-74ce380b0704b3960b3b980a35ea654a.png"},51119:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/oct-voice-interface-copilot-5121d225e6c7c9725744750c0f52a877.png"},59800:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/oct-modify-gems-copilot2-2dc5e2d7c41784bb3c0a86809032bf74.png"},71926:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/oct-variant-infer-schema-77134126e589a14820f81792a352645d.png"},79379:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/oct-libs-version-cluster-7ea8640f9dba60b47588b349a6fbac79.png"},86761:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/oct-deduplicate_row_to_keep-d77d5f3a3d4592a545e78c80f5da1c7a.png"}}]);