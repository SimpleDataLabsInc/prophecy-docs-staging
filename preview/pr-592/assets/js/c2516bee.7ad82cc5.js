"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[39616],{5981:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/unpivot-macro-92824266d824d6cb0d688d19df0493f9.png"},19997:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"analysts/development/gems/custom/macro","title":"Macro","description":"Use dbt macros in your pipelines","source":"@site/docs/analysts/development/gems/custom/macro.md","sourceDirName":"analysts/development/gems/custom","slug":"/analysts/macro","permalink":"/prophecy-docs-staging/preview/pr-592/analysts/macro","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-592/tags/gems"},{"inline":true,"label":"analyst","permalink":"/prophecy-docs-staging/preview/pr-592/tags/analyst"},{"inline":true,"label":"custom","permalink":"/prophecy-docs-staging/preview/pr-592/tags/custom"}],"version":"current","frontMatter":{"title":"Macro","id":"macro","slug":"/analysts/macro","description":"Use dbt macros in your pipelines","tags":["gems","analyst","custom"]},"sidebar":"mySidebar","previous":{"title":"RestAPI","permalink":"/prophecy-docs-staging/preview/pr-592/analysts/rest-api"},"next":{"title":"Visual expression builder","permalink":"/prophecy-docs-staging/preview/pr-592/analysts/visual-expression-builder"}}');var r=n(74848),i=n(28453);const a={title:"Macro",id:"macro",slug:"/analysts/macro",description:"Use dbt macros in your pipelines",tags:["gems","analyst","custom"]},o=void 0,c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Example: dbt_utils",id:"example-dbt_utils",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{class:"badge",children:"SQL"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.p,{children:"The Macro gem lets you use a macro that you have defined or imported in your SQL project. Macros provide a simple interface where you can define the values of your macro parameters (arguments). Use the Macro gem when you:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Import macros via DBT Hub dependency."}),"\n",(0,r.jsx)(s.li,{children:"Want to use a simple interface for custom gems."}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Macro"}),(0,r.jsxs)(s.td,{children:["The macro that you wish to use.",(0,r.jsx)("br",{}),"Note: You can only select a Gem macro. You cannot select a macro defined as a ",(0,r.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-592/analysts/functions",children:"function"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["Parameter ",(0,r.jsx)(s.code,{children:"1"})]}),(0,r.jsx)(s.td,{children:"A parameter that is defined in the macro. This is a value that is passed to the macro."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["Parameter ",(0,r.jsx)(s.code,{children:"N"})]}),(0,r.jsx)(s.td,{children:"Additional parameters that are defined in the macro."})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"example-dbt_utils",children:"Example: dbt_utils"}),"\n",(0,r.jsxs)(s.p,{children:["For this example, assume you want to use the ",(0,r.jsx)(s.code,{children:"dbt_utils"})," package as a ",(0,r.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-592/analysts/extensibility#dependencies",children:"dependency"})," in your project."]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Open the ",(0,r.jsx)(s.strong,{children:"Options"})," (ellipses) menu in the project header."]}),"\n",(0,r.jsxs)(s.li,{children:["Select ",(0,r.jsx)(s.strong,{children:"Dependencies"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Click ",(0,r.jsx)(s.strong,{children:"+ Add Dependency"}),"."]}),"\n",(0,r.jsx)(s.li,{children:"Choose the dependency type (Project, GitHub, or DBT Hub)."}),"\n",(0,r.jsxs)(s.li,{children:["Add the package ",(0,r.jsx)(s.code,{children:"dbt-labs/dbt_utils"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Choose version ",(0,r.jsx)(s.code,{children:"1.3.0"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Click ",(0,r.jsx)(s.strong,{children:"Create"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Click ",(0,r.jsx)(s.strong,{children:"Reload and Save"})," to download the package."]}),"\n",(0,r.jsx)(s.li,{children:"Review the functions and gems that are available in the dbt_utils package. You can click any function or gem to see the underlying macro code."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"To use one of the imported gems in your pipeline:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"Add the Macro gem to the canvas."}),"\n",(0,r.jsx)(s.li,{children:"Open the gem configuration."}),"\n",(0,r.jsxs)(s.li,{children:["In the ",(0,r.jsx)(s.strong,{children:"Macro"})," field, choose the gem that you want to use. The gem parameters should appear."]}),"\n",(0,r.jsx)(s.li,{children:"Fill in the parameters. These are the arguments of the dbt macro."}),"\n",(0,r.jsx)(s.li,{children:"Save and run the gem."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["The following image shows the unpivot macro imported from ",(0,r.jsx)(s.code,{children:"dbt_utils"})," in a Macro gem."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Unpivot macro",src:n(5981).A+"",width:"2620",height:"1508"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>o});var t=n(96540);const r={},i=t.createContext(r);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);