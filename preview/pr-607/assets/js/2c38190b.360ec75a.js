"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[18059],{28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>l});var i=s(96540);const n={},a=i.createContext(n);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(a.Provider,{value:t},e.children)}},81654:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"ci-cd/tests","title":"Unit tests","description":"Implementing unit tests in Prophecy","source":"@site/docs/ci-cd/tests.md","sourceDirName":"ci-cd","slug":"/engineers/unit-tests","permalink":"/prophecy-docs-staging/preview/pr-607/engineers/unit-tests","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"spark","permalink":"/prophecy-docs-staging/preview/pr-607/tags/spark"},{"inline":true,"label":"development","permalink":"/prophecy-docs-staging/preview/pr-607/tags/development"},{"inline":true,"label":"CICD","permalink":"/prophecy-docs-staging/preview/pr-607/tags/cicd"},{"inline":true,"label":"testing","permalink":"/prophecy-docs-staging/preview/pr-607/tags/testing"},{"inline":true,"label":"unit tests","permalink":"/prophecy-docs-staging/preview/pr-607/tags/unit-tests"}],"version":"current","frontMatter":{"title":"Unit tests","id":"tests","slug":"/engineers/unit-tests","description":"Implementing unit tests in Prophecy","tags":["spark","development","CICD","testing","unit tests"]},"sidebar":"mySidebar","previous":{"title":"Best practices","permalink":"/prophecy-docs-staging/preview/pr-607/engineers/git-best-practices"},"next":{"title":"Data diff","permalink":"/prophecy-docs-staging/preview/pr-607/engineers/data-diff"}}');var n=s(74848),a=s(28453);const r={title:"Unit tests",id:"tests",slug:"/engineers/unit-tests",description:"Implementing unit tests in Prophecy",tags:["spark","development","CICD","testing","unit tests"]},l=void 0,o={},c=[{value:"Output rows equality",id:"output-rows-equality",level:2},{value:"Example",id:"output-rows-equality",level:3},{value:"Output predicates",id:"output-predicates",level:2},{value:"Example",id:"output-predicates",level:3},{value:"Generating sample data for test cases automatically",id:"generating-sample-data-for-test-cases-automatically",level:2},{value:"Generated code",id:"generated-code",level:2},{value:"Renaming the name of unit test",id:"renaming-the-name-of-unit-test",level:2}];function d(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Writing good unit tests is one of the key stages of the CI/CD process. It ensures that the changes made by developers to projects will be verified and all the functionality will work correctly after deployment."}),"\n",(0,n.jsx)(t.p,{children:"Prophecy makes the process of writing unit cases easier by giving an interactive environment via which unit test cases can be configured across each component."}),"\n",(0,n.jsx)(t.p,{children:"There are two types of unit test cases which can be configured through Prophecy UI:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Output rows equality"}),"\n",(0,n.jsx)(t.li,{children:"Output predicates"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Let us understand both types in detail:"}),"\n",(0,n.jsx)(t.h2,{id:"output-rows-equality",children:"Output rows equality"}),"\n",(0,n.jsx)(t.p,{children:"Automatically takes a snapshot of the data for the component and allows to continuously test that the logic performs as intended. This would simply check the equality of the output rows."}),"\n",(0,n.jsx)(t.h3,{id:"output-rows-equality",children:"Example"}),"\n",(0,n.jsx)(t.p,{children:"In the below example we would create below unit tests:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"To check the join condition correctly for one-to-one mappings."}),"\n",(0,n.jsx)(t.li,{children:"To check the join condition correctly for one-to-many mappings."}),"\n"]}),"\n",(0,n.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,n.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,n.jsx)("iframe",{src:"https://user-images.githubusercontent.com/103921419/174785192-7d99a6e1-d8bf-445f-bf51-981526e3a1e6.mp4",title:"Output rows equality",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,n.jsx)(t.h2,{id:"output-predicates",children:"Output predicates"}),"\n",(0,n.jsx)(t.p,{children:"These are more advanced unit tests where multiple rules need to pass in order for the test as a whole to pass. Requires Spark expression to be used as predicates."}),"\n",(0,n.jsx)(t.h3,{id:"output-predicates",children:"Example"}),"\n",(0,n.jsx)(t.p,{children:"In the below example we will create below unit tests:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Check that the value of amount column is ",(0,n.jsx)(t.code,{children:">0"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Check whether first name is not equal to last name."}),"\n"]}),"\n",(0,n.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,n.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,n.jsx)("iframe",{src:"https://user-images.githubusercontent.com/103921419/174785268-5266a044-087f-40cb-a846-f7b548275986.mp4",title:"Output predicates",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,n.jsx)(t.h2,{id:"generating-sample-data-for-test-cases-automatically",children:"Generating sample data for test cases automatically"}),"\n",(0,n.jsx)(t.p,{children:"To generate sample input data automatically from the source DataFrame, this option can be enabled while creating unit test."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Pipeline needs to run once, to generate units test based on auto-generated sample data."})}),"\n",(0,n.jsx)(t.p,{children:"Let's generate sample data automatically for the unit test case we created in above example."}),"\n",(0,n.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,n.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,n.jsx)("iframe",{src:"https://user-images.githubusercontent.com/103921419/174785504-6ee9b766-958a-4dd8-8fc8-9835a3fb4294.mp4",title:"Generate sample data",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,n.jsx)(t.h2,{id:"generated-code",children:"Generated code"}),"\n",(0,n.jsx)(t.p,{children:"Behind the scenes, the code for unit tests is automatically generated in our repository.\nLet's have a look at the generated code for our unit test above."}),"\n",(0,n.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,n.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,n.jsx)("iframe",{src:"https://user-images.githubusercontent.com/103921419/174785480-294ca5de-9fd2-4e17-94a7-078a3619dddc.mp4",title:"Generate code",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,n.jsx)(t.h2,{id:"renaming-the-name-of-unit-test",children:"Renaming the name of unit test"}),"\n",(0,n.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,n.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,n.jsx)("iframe",{src:"https://user-images.githubusercontent.com/103921419/174785461-8d717efb-87a7-44d2-82a0-d0db6e833b29.mp4",title:"Generate code",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);