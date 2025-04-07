"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[19177],{28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var i=s(96540);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}},32223:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"Spark/gems/expression-builder","title":"Expression builder","description":"Expression Builder","source":"@site/docs/Spark/gems/expression-builder.md","sourceDirName":"Spark/gems","slug":"/engineers/expression-builder","permalink":"/prophecy-docs-staging/preview/pr-605/engineers/expression-builder","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"spark","permalink":"/prophecy-docs-staging/preview/pr-605/tags/spark"},{"inline":true,"label":"development","permalink":"/prophecy-docs-staging/preview/pr-605/tags/development"},{"inline":true,"label":"functions","permalink":"/prophecy-docs-staging/preview/pr-605/tags/functions"},{"inline":true,"label":"expressions","permalink":"/prophecy-docs-staging/preview/pr-605/tags/expressions"}],"version":"current","frontMatter":{"title":"Expression builder","id":"expression-builder","slug":"/engineers/expression-builder","description":"Expression Builder","tags":["spark","development","functions","expressions"]},"sidebar":"mySidebar","previous":{"title":"Directory","permalink":"/prophecy-docs-staging/preview/pr-605/engineers/directory"},"next":{"title":"Execution","permalink":"/prophecy-docs-staging/preview/pr-605/engineers/execution"}}');var r=s(74848),t=s(28453);const o={title:"Expression builder",id:"expression-builder",slug:"/engineers/expression-builder",description:"Expression Builder",tags:["spark","development","functions","expressions"]},l=void 0,c={},a=[{value:"Spark Expression Builder",id:"spark-expression-builder",level:2},{value:"Search",id:"search",level:3},{value:"Insert",id:"insert",level:3},{value:"Run and Verify the output",id:"run-and-verify-the-output",level:3}];function d(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Analyzing and manipulating data with Spark functions often requires building complex expressions that combine multiple functions. Prophecy makes this easier with the ",(0,r.jsx)(n.strong,{children:"Expression Builder"}),", which streamlines the creation of complex expressions, saving time and effort. It also helps you better understand the relationships between functions and their arguments."]}),"\n",(0,r.jsx)("div",{style:{position:"relative","padding-bottom":"56.25%",height:0},children:(0,r.jsx)("iframe",{src:"https://www.loom.com/embed/958ccd09f1a5435fa4348be6dca3996e",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})}),"\n",(0,r.jsx)(n.h2,{id:"spark-expression-builder",children:"Spark Expression Builder"}),"\n",(0,r.jsx)(n.p,{children:"To navigate to the Spark Expression Builder:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Navigate to the column you want to edit, and open the expanded editor."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click on the ",(0,r.jsx)(n.strong,{children:"Expression Builder"})," button."]}),"\n",(0,r.jsx)(n.p,{children:"Now, you can search for, and insert functions, columns or configurations in your canvas."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"search",children:"Search"}),"\n",(0,r.jsx)(n.p,{children:"To search for a function in Spark Expression Builder:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click the ",(0,r.jsx)(n.strong,{children:"fx"})," button."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"In the search bar at the top of the screen, type the function name."}),"\n",(0,r.jsx)(n.p,{children:"A list of matching functions appears. When you click on a function, you see information about its syntax, arguments, and an example on how to use it."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"insert",children:"Insert"}),"\n",(0,r.jsx)(n.p,{children:"You can insert a function, column, or configuration into your expression."}),"\n",(0,r.jsx)(n.p,{children:"To insert a function:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Navigate to, or search for the function you want to use."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click on the ",(0,r.jsx)(n.strong,{children:"Insert Function"})," button."]}),"\n",(0,r.jsx)(n.p,{children:"To specify an argument for the function, click on the function and fill in the required fields."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"To insert a column:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Click the ",(0,r.jsx)(n.strong,{children:"Columns"})," tab."]}),"\n",(0,r.jsxs)(n.li,{children:["Click on the column you want to insert, and click ",(0,r.jsx)(n.strong,{children:"Insert Column"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"To insert a configuration:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Click the ",(0,r.jsx)(n.strong,{children:"Configurations"})," tab."]}),"\n",(0,r.jsxs)(n.li,{children:["Click on the column you want to insert, and click ",(0,r.jsx)(n.strong,{children:"Insert Configuration"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"run-and-verify-the-output",children:"Run and Verify the output"}),"\n",(0,r.jsx)(n.p,{children:"You can attach to a cluster and run your pipeline for the current gem on the same screen."}),"\n",(0,r.jsx)(n.p,{children:"To run your code:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click the ",(0,r.jsx)(n.strong,{children:"Run"})," button."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click the ",(0,r.jsx)(n.strong,{children:"Data"})," button to see your results."]}),"\n",(0,r.jsx)(n.p,{children:"Verify the results to ensure that your data analysis tasks are accurate and reliable."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["This data is same as what you see in ",(0,r.jsx)(n.a,{href:"/engineers/data-sampling",children:"interims"})," view."]})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);