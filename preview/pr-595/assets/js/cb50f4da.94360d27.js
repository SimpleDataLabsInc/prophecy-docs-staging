"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[67808],{12051:(n,e,o)=>{o.d(e,{A:()=>i});const i=o.p+"assets/images/remove-condition-2f0d921c5867ca62d56a7aef96672430.png"},28453:(n,e,o)=>{o.d(e,{R:()=>r,x:()=>a});var i=o(96540);const t={},s=i.createContext(t);function r(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),i.createElement(s.Provider,{value:e},n.children)}},40094:(n,e,o)=>{o.d(e,{A:()=>i});const i=o.p+"assets/images/add-condition-fc593983953825e4addfa252167c5bd7.png"},49397:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"Spark/execution/conditional-execution","title":"Conditional execution","description":"Conditionally run or skip transformations within Spark gems","source":"@site/docs/Spark/execution/conditional-execution.md","sourceDirName":"Spark/execution","slug":"/engineers/conditional-execution","permalink":"/prophecy-docs-staging/preview/pr-595/engineers/conditional-execution","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Conditional","permalink":"/prophecy-docs-staging/preview/pr-595/tags/conditional"},{"inline":true,"label":"Execution","permalink":"/prophecy-docs-staging/preview/pr-595/tags/execution"}],"version":"current","frontMatter":{"title":"Conditional execution","id":"conditional-execution","slug":"/engineers/conditional-execution","description":"Conditionally run or skip transformations within Spark gems","tags":["Conditional","Execution"]},"sidebar":"mySidebar","previous":{"title":"Data sampling settings","permalink":"/prophecy-docs-staging/preview/pr-595/engineers/data-sampling"},"next":{"title":"Data exploration","permalink":"/prophecy-docs-staging/preview/pr-595/Spark/data-explorer/"}}');var t=o(74848),s=o(28453);const r={title:"Conditional execution",id:"conditional-execution",slug:"/engineers/conditional-execution",description:"Conditionally run or skip transformations within Spark gems",tags:["Conditional","Execution"]},a=void 0,c={},l=[{value:"Configure conditions",id:"configure-conditions",level:2},{value:"Pass-through condition",id:"pass-through-condition",level:2},{value:"Removal condition",id:"removal-condition",level:2},{value:"Example: Run if input record count &gt; 0",id:"example-run-if-input-record-count--0",level:3}];function d(n){const e={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"For granular data processing control, you can conditionally run or skip transformations within gems in your pipeline."}),"\n",(0,t.jsxs)(e.p,{children:["This means you can configure ",(0,t.jsx)(e.strong,{children:"pass-through conditions"})," on gems to dynamically control whether a transformation is executed. You also have the option to configure a ",(0,t.jsx)(e.strong,{children:"removal condition"})," on a gem, which not only skips the transformation but also removes the gem and all associated downstream transformations from pipeline execution."]}),"\n",(0,t.jsx)(e.h2,{id:"configure-conditions",children:"Configure conditions"}),"\n",(0,t.jsx)(e.p,{children:"To configure a condition on a gem:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["Click the ",(0,t.jsx)(e.strong,{children:"..."})," (ellipsis) on a gem."]}),"\n",(0,t.jsxs)(e.li,{children:["Select the ",(0,t.jsx)(e.strong,{children:"Add Condition"})," option."]}),"\n",(0,t.jsxs)(e.li,{children:["Choose the ",(0,t.jsx)(e.strong,{children:"Pass through condition"})," or ",(0,t.jsx)(e.strong,{children:"Remove condition"})," option."]}),"\n",(0,t.jsx)(e.li,{children:"Write your condition in Scala or Python, depending on your project language."}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Add a condition",src:o(40094).A+"",width:"2620",height:"1508"})}),"\n",(0,t.jsx)(e.p,{children:"When a condition is set on a gem, a (C) symbol will appear before the gem name. When a gem meets a pass-through or removed condition, the interims will not be displayed on the edges associated with that gem."}),"\n",(0,t.jsx)(e.h2,{id:"pass-through-condition",children:"Pass-through condition"}),"\n",(0,t.jsx)(e.p,{children:"Pass-through conditions let you skip the transformation of a gem or subgraph and maintain the input data as the output data. This ensures that the data passes through the gem or subgraph without any modification."}),"\n",(0,t.jsx)(e.p,{children:"When using pass-through conditions, be aware that:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"The gem or subgraph must be connected in the pipeline, meaning it should have both an input port and an output port. This allows the data to flow through the gem."}),"\n",(0,t.jsx)(e.li,{children:"Pass-through conditions are not applicable to source and target elements within the pipeline. These elements represent the data source and destination and do not involve any transformation logic."}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"removal-condition",children:"Removal condition"}),"\n",(0,t.jsx)(e.p,{children:"When a removal condition is met, the associated gem and all of its downstream gems are excluded from the pipeline execution. Unlike pass-through conditions, you can use removal conditions on Source and Target gems."}),"\n",(0,t.jsx)(e.h3,{id:"example-run-if-input-record-count--0",children:"Example: Run if input record count > 0"}),"\n",(0,t.jsx)(e.p,{children:"Assume you only want to write to a target table if the input record count is greater than zero."}),"\n",(0,t.jsx)(e.p,{children:"You can use a removal condition to do so:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["Click the ",(0,t.jsx)(e.strong,{children:"..."})," (ellipsis) on the Target gem."]}),"\n",(0,t.jsxs)(e.li,{children:["Select the ",(0,t.jsx)(e.strong,{children:"Add Condition"})," option."]}),"\n",(0,t.jsx)(e.li,{children:"Note that you can only define a removal condition."}),"\n",(0,t.jsxs)(e.li,{children:["Use the condition ",(0,t.jsx)(e.code,{children:"df_<input_gem_name>.count() > 0"}),". This example is Python code."]}),"\n",(0,t.jsxs)(e.li,{children:["Click ",(0,t.jsx)(e.strong,{children:"OK"})," to save."]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Remove condition on Target gem",src:o(12051).A+"",width:"2620",height:"1508"})})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}}}]);