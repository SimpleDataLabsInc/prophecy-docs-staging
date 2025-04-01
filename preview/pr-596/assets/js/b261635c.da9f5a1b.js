"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[16641],{28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}},44053:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"release_notes/2023/September_2023","title":"September 2023","description":"Release notes for September","source":"@site/docs/release_notes/2023/sept2023.md","sourceDirName":"release_notes/2023","slug":"/release_notes/2023/September_2023","permalink":"/prophecy-docs-staging/preview/pr-596/release_notes/2023/September_2023","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"release notes","permalink":"/prophecy-docs-staging/preview/pr-596/tags/release-notes"},{"inline":true,"label":"changelog","permalink":"/prophecy-docs-staging/preview/pr-596/tags/changelog"}],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8,"id":"September_2023","description":"Release notes for September","title":"September 2023","tags":["release notes","changelog"]},"sidebar":"mySidebar","previous":{"title":"October 2023","permalink":"/prophecy-docs-staging/preview/pr-596/release_notes/2023/October_2023"},"next":{"title":"August 2023","permalink":"/prophecy-docs-staging/preview/pr-596/release_notes/2023/August_2023"}}');var r=t(74848),s=t(28453);const o={sidebar_position:8,id:"September_2023",description:"Release notes for September",title:"September 2023",tags:["release notes","changelog"]},a=void 0,l={},c=[{value:"3.2.0.* (September 14, 2023)",id:"320-september-14-2023",level:2},{value:"Features",id:"FeaturesRelease320",level:3},{value:"Introducing Package Hub",id:"introducing-package-hub",level:4},{value:"Knowledge Graph - Connectors",id:"knowledge-graph---connectors",level:4},{value:"Copilot 2.0",id:"copilot-20",level:4},{value:"DataProc fabric",id:"dataproc-fabric",level:4},{value:"DLT Support in SQL",id:"dlt-support-in-sql",level:4},{value:"Guided private deployment",id:"guided-private-deployment",level:4},{value:"Minor Improvements",id:"UXImprovements320",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,r.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,r.jsx)("iframe",{src:"https://fast.wistia.net/embed/iframe/tbge2mermg?seo=false?videoFoam=true",title:"Getting Started With SQL Video",allow:"autoplay; fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,r.jsx)("script",{src:"https://fast.wistia.net/assets/external/E-v1.js",async:!0}),"\n",(0,r.jsx)(n.h2,{id:"320-september-14-2023",children:"3.2.0.* (September 14, 2023)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Prophecy Python libs version: 1.6.1"}),"\n",(0,r.jsx)(n.li,{children:"Prophecy Scala libs version: 7.1.14"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"FeaturesRelease320",children:"Features"}),"\n",(0,r.jsx)(n.h4,{id:"introducing-package-hub",children:"Introducing Package Hub"}),"\n",(0,r.jsxs)(n.p,{children:["We are excited to introduce the ",(0,r.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-596/extensibility/package-hub/",children:"Package Hub"})," with Prophecy version 3.2. This feature allows platform leads to create and share standardized pipeline components, including ",(0,r.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-596/engineers/gem-builder",children:"custom gems"}),", subgraphs, datasets, pipelines, and ",(0,r.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-596/extensibility/package-hub/",children:"more"}),". For instance, you can now ensure consistent data encryption in line with your company's policies. Simply create a new Project, add the required custom encryption gems and components, and publish it as a Package. Other teams can easily add this as a dependency and utilize the components from the Package."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Please note that all Prophecy-provided gems now follow the same concept of Packages. With this release, your existing Projects will depend on Prophecy-provided packages for gems. Your existing pipelines and Projects should seamlessly work with this upgrade. If you encounter any issues, please don't hesitate to reach out to our support team."})}),"\n",(0,r.jsx)(n.h4,{id:"knowledge-graph---connectors",children:"Knowledge Graph - Connectors"}),"\n",(0,r.jsxs)(n.p,{children:["When you navigate to the Environment browser in the Project browser, you can browse the ",(0,r.jsx)(n.code,{children:"Catalog tables"})," from the Databricks fabric to which you are connected.\nThese ",(0,r.jsx)(n.code,{children:"Catalog Tables"})," are automatically refreshed in the background using connectors in the fabric.\nWe'll refresh the tables according to the defined refresh frequency in your Connector settings.\nThis ensures that users no longer need to wait and manually refresh the Environment Tab while creating or modifying pipelines."]}),"\n",(0,r.jsx)(n.h4,{id:"copilot-20",children:"Copilot 2.0"}),"\n",(0,r.jsx)(n.p,{children:"We've worked hard to enhance your Copilot experience in version 3.2. With this release, we've added AI magic to the following features:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Generate User-Defined Functions (UDFs) for your Spark Projects with simple English prompts."}),"\n",(0,r.jsx)(n.li,{children:"Incrementally add a gem or a group of gems to your pipeline."}),"\n",(0,r.jsx)(n.li,{children:"Generate custom Pyspark or Scala Spark code for your custom scripts in pipelines."}),"\n",(0,r.jsx)(n.li,{children:"Automatically generate labels and descriptions for gems, pipelines, models, or even your entire project's Readme."}),"\n",(0,r.jsx)(n.li,{children:"Generate smart column metadata for any or all columns in your Datasets."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"We believe these additions to Prophecy's Copilot capabilities will make managing and analyzing data a breeze."}),"\n",(0,r.jsx)(n.h4,{id:"dataproc-fabric",children:"DataProc fabric"}),"\n",(0,r.jsx)(n.p,{children:"We're thrilled to announce that this release introduces first-class support for Dataproc. You can now create a Dataproc fabric to run pipelines interactively. With this addition, we now support all types of Spark execution environments."}),"\n",(0,r.jsx)(n.h4,{id:"dlt-support-in-sql",children:"DLT Support in SQL"}),"\n",(0,r.jsxs)(n.p,{children:["With this release, we're adding support for ",(0,r.jsx)(n.a,{href:"https://docs.databricks.com/en/delta-live-tables/index.html",children:"Delta Live Tables"})," in our Low Code SQL product. This is achieved by supporting Materialized views in our low-code SQL product. Simply set the ",(0,r.jsx)(n.code,{children:"materialized"})," property in the DBT Defined Configs as shown below:"]}),"\n",(0,r.jsx)(n.h4,{id:"guided-private-deployment",children:"Guided private deployment"}),"\n",(0,r.jsx)(n.p,{children:"Prophecy Private Deployment now gives users the capability to install Prophecy securely within their Virtual Private Cloud (VPC). To simplify this process, we've introduced a dedicated deployment tool accessible through the settings page. This tool provides administrators with a comprehensive, step-by-step guide, ensuring a seamless deployment experience. It guides you through the setup of the necessary infrastructure and the deployment of Prophecy using Helm Charts.\nTo enable Guided Private Deployment, please get in touch with our support team."}),"\n",(0,r.jsx)(n.h3,{id:"UXImprovements320",children:"Minor Improvements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Enhanced UX for Project Metadata Screens"})," : Our Project Metadata Screens have received a fresh look with this release, improving the overall Project browsing experience. Rest assured, all existing functionalities remain intact with this new look."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Code Generation Improvements"}),": We're continually working to ensure that the code generated for your Spark pipelines is of the highest quality. In this release, we've made some minor improvements to the code generation, so you may notice some small enhancements when you next open your pipeline Code."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Option to Delete Branch Locally"}),": We've added a new option to delete a branch from the local repository only, giving you more control over branch management."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Organize models in Subdirectories"}),": You can now better organize your models in our Low Code SQL product using subdirectories."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);