"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[46622],{28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(96540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}},48232:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"getting-started/concepts/gems","title":"Gems","description":"Transform your data with Prophecy gems","source":"@site/docs/getting-started/concepts/gems.md","sourceDirName":"getting-started/concepts","slug":"/gems","permalink":"/prophecy-docs-staging/preview/pr-605/gems","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-605/tags/gems"},{"inline":true,"label":"transformations","permalink":"/prophecy-docs-staging/preview/pr-605/tags/transformations"},{"inline":true,"label":"concepts","permalink":"/prophecy-docs-staging/preview/pr-605/tags/concepts"}],"version":"current","frontMatter":{"title":"Gems","id":"gems","slug":"/gems","description":"Transform your data with Prophecy gems","tags":["gems","transformations","concepts"]},"sidebar":"mySidebar","previous":{"title":"Pipelines","permalink":"/prophecy-docs-staging/preview/pr-605/pipelines"},"next":{"title":"Quick starts","permalink":"/prophecy-docs-staging/preview/pr-605/quick-start"}}');var i=s(74848),r=s(28453);const a={title:"Gems",id:"gems",slug:"/gems",description:"Transform your data with Prophecy gems",tags:["gems","transformations","concepts"]},o=void 0,c={},l=[{value:"Why use gems?",id:"why-use-gems",level:2},{value:"Gem execution",id:"gem-execution",level:2},{value:"Gem functionality",id:"gem-functionality",level:2},{value:"What&#39;s next\u200b",id:"whats-next",level:2}];function d(e){const n={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Prophecy gems are reusable building blocks designed to accelerate the development of your pipelines. These building blocks let you ingest, transform, and store your data in a modular way. Each gem is visually configurable and produces its own block of code."}),"\n",(0,i.jsx)(n.h2,{id:"why-use-gems",children:"Why use gems?"}),"\n",(0,i.jsx)(n.p,{children:"Gems are the core components of a pipeline. The intuitive visual interface enables:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Reusability"}),": Reduces time spent writing repetitive code by leveraging prebuilt transformations."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Consistency"}),": Enforces coding and data processing standards across your team."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Scalability"}),": Lets Prophecy optimize your Spark code and SQL queries for you so you can easily scale your pipelines."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"gem-execution",children:"Gem execution"}),"\n",(0,i.jsxs)(n.p,{children:["Gems run on the execution engine defined in your attached ",(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-605/fabrics",children:"fabric"}),". If you want to see the underlying code per gem, you can switch to the ",(0,i.jsx)(n.strong,{children:"Code"})," view of your project and open the gem file. This code is automatically compiled and optimized by Prophecy."]}),"\n",(0,i.jsx)(n.h2,{id:"gem-functionality",children:"Gem functionality"}),"\n",(0,i.jsx)(n.p,{children:"Gems will vary based on project type because they are written in different languages (Python, Scala, or SQL) to match the project language. Gems let you:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Ingest"})," data from various sources, such as databases or APIs to bring data into your system for processing."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Transform"})," at different stages, starting with raw data, then cleaning and structuring it for analysis, and finally optimizing it for reporting and business insights."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parse"})," data to restructure it, extract relevant fields, convert formats, or reorganize data to ensure consistency and compatibility with downstream processes."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Clean"})," data by identifying and correcting inconsistencies, missing values, duplicates, and errors, ensuring high-quality data for reliable analysis and decision-making."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Write"})," data to your desired output, whether it's a database, data warehouse, or another storage system, so it's ready to use in analytics or machine learning."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"whats-next",children:"What's next\u200b"}),"\n",(0,i.jsx)(n.p,{children:"To start using gems in your pipelines:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Explore the available ",(0,i.jsx)(n.a,{href:"/engineers/gems/",children:"Engineering (Spark) gems"})," and ",(0,i.jsx)(n.a,{href:"/analysts/gems",children:"Analyst gems"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Add and connect various gems in your pipeline canvas."}),"\n",(0,i.jsxs)(n.li,{children:["Browse the [Package Hub](",(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-605/gems",children:"Gems"})," are visually-packaged parcels of code that perform specific operations on data. While Prophecy provides many gems out of the box, Prophecy also lets you create your own gems! Not only can you create new gems, but you can also share them in the ",(0,i.jsx)(n.a,{href:"/engineers/package-hub",children:"Package Hub"})," or with selected teams.\nd) to find additional gems and components that you can use."]}),"\n",(0,i.jsxs)(n.li,{children:["Take a peek at our ",(0,i.jsx)(n.a,{href:"/engineers/extensibility",children:"Gem Builder"})," for an introduction to custom gems."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);