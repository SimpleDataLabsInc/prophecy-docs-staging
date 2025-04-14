"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[23142],{28453:(e,s,i)=>{i.d(s,{R:()=>a,x:()=>o});var n=i(96540);const t={},r=n.createContext(t);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(r.Provider,{value:s},e.children)}},34198:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/UDFConflictError-359fef75776a0e189364223324d5a0ff.png"},76302:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/SharedUDFs-8323adb61e9406e5a9854144c0acbb14.png"},86385:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"extensibility/package-hub/sharable-udfs","title":"Build Shareable UDFs","description":"Sharable UDFs within the project and to other projects","source":"@site/docs/extensibility/package-hub/ShareableUDFs.md","sourceDirName":"extensibility/package-hub","slug":"/engineers/shareable-udfs","permalink":"/prophecy-docs-staging/preview/pr-614/engineers/shareable-udfs","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Build Shareable UDFs","id":"sharable-udfs","slug":"/engineers/shareable-udfs","description":"Sharable UDFs within the project and to other projects","tags":[]},"sidebar":"mySidebar","previous":{"title":"Build Shareable Subgraphs","permalink":"/prophecy-docs-staging/preview/pr-614/engineers/shareable-subgraphs"},"next":{"title":"Gem Builder for SQL","permalink":"/prophecy-docs-staging/preview/pr-614/analysts/gem-builder"}}');var t=i(74848),r=i(28453);const a={title:"Build Shareable UDFs",id:"sharable-udfs",slug:"/engineers/shareable-udfs",description:"Sharable UDFs within the project and to other projects",tags:[]},o=void 0,l={},c=[{value:"Across Pipelines",id:"across-pipelines",level:2},{value:"Across projects",id:"across-projects",level:2}];function d(e){const s={a:"a",admonition:"admonition",em:"em",h2:"h2",img:"img",p:"p",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Users can share the ",(0,t.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-614/engineers/user-defined-functions",children:"user-defined functions (UDF)"})," across their pipelines and projects."]}),"\n",(0,t.jsx)(s.h2,{id:"across-pipelines",children:"Across Pipelines"}),"\n",(0,t.jsx)(s.p,{children:"Any UDF defined in a pipeline is defined at the project level by default. So, it is accessible to all pipelines in the project immediately.\nAs a user opens a pipeline, the UDFs are also copied to the Code of that pipeline. They would also see the same changes reflected in the uncommitted changes for their pipeline."}),"\n",(0,t.jsx)(s.p,{children:"Please see this video for an example"}),"\n",(0,t.jsx)("div",{style:{position:"relative","padding-bottom":"56.25%",height:0},children:(0,t.jsx)("iframe",{src:"https://www.loom.com/embed/94c362dcffe04a66be6d63502f0c0cfb",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})}),"\n",(0,t.jsx)(s.admonition,{type:"caution",children:(0,t.jsx)(s.p,{children:"Please note that UDF code is only copied to Code for that pipeline once the pipeline is opened.\nSo, if a user has edited or added UDF in a pipeline, you might see uncommitted changes for another pipeline whenever you open it."})}),"\n",(0,t.jsx)(s.h2,{id:"across-projects",children:"Across projects"}),"\n",(0,t.jsxs)(s.p,{children:["Once a project (let's call it ",(0,t.jsx)(s.em,{children:"BaseProject"}),") is added as a dependency to another project (let's call it ",(0,t.jsx)(s.em,{children:"AppProject"}),"), all project-level UDFs from ",(0,t.jsx)(s.em,{children:"BaseProject"})," are available in all pipelines of ",(0,t.jsx)(s.em,{children:"AppProject"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"For example:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"SharedUDFs",src:i(76302).A+"",width:"1557",height:"966"})}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:["Please note that all these UDF are ready only in ",(0,t.jsx)(s.em,{children:"AppProject"})," and can only be edited in ",(0,t.jsx)(s.em,{children:"BaseProject"})]})}),"\n",(0,t.jsxs)(s.p,{children:["Also, if a User has UDFs coming from two different projects with conflicting definitions, they will see an error diagnostics in the UDF screen as below.\n",(0,t.jsx)(s.img,{alt:"UDFConflict",src:i(34198).A+"",width:"1552",height:"969"})]}),"\n",(0,t.jsxs)(s.p,{children:["If a UDF is modified or a new UDF is added in ",(0,t.jsx)(s.em,{children:"BaseProject"}),", these changes will only reflect in ",(0,t.jsx)(s.em,{children:"AppProject"})," after the user Releases the ",(0,t.jsx)(s.em,{children:"BaseProject"})," again, and updates dependency in ",(0,t.jsx)(s.em,{children:"AppProject"})]})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);