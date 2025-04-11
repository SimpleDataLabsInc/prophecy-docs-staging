"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[79359],{479:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/ClusterSearch-04a7220e044a82a023a46417befad583.gif"},25725:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"release_notes/2023/Mar_2023","title":"March 2023","description":"Release notes for March","source":"@site/docs/release_notes/2023/mar2023.md","sourceDirName":"release_notes/2023","slug":"/release_notes/2023/Mar_2023","permalink":"/prophecy-docs-staging/preview/pr-612/release_notes/2023/Mar_2023","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"release notes","permalink":"/prophecy-docs-staging/preview/pr-612/tags/release-notes"},{"inline":true,"label":"changelog","permalink":"/prophecy-docs-staging/preview/pr-612/tags/changelog"}],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"id":"Mar_2023","description":"Release notes for March","title":"March 2023","tags":["release notes","changelog"]},"sidebar":"mySidebar","previous":{"title":"April 2023","permalink":"/prophecy-docs-staging/preview/pr-612/release_notes/2023/Apr_2023"},"next":{"title":"February 2023","permalink":"/prophecy-docs-staging/preview/pr-612/release_notes/2023/Feb_2023"}}');var n=s(74848),a=s(28453);const r={sidebar_position:2,id:"Mar_2023",description:"Release notes for March",title:"March 2023",tags:["release notes","changelog"]},l=void 0,o={},c=[{value:"2.10.0.* (Mar 31, 2023)",id:"2100-mar-31-2023",level:2},{value:"Improvements",id:"ImprovementsRelease2100",level:3},{value:"Search box on available clusters",id:"search-box-on-available-clusters",level:4},{value:"Performance Improvements for Projects with large Number of Entities",id:"performance-improvements-for-projects-with-large-number-of-entities",level:4},{value:"Datasets improvements",id:"datasets-improvements",level:4},{value:"Warning when deleting Teams",id:"warning-when-deleting-teams",level:4},{value:"2.9.0.* (Mar 24, 2023)",id:"290-mar-24-2023",level:2},{value:"Features",id:"UpdatesRelease290",level:3},{value:"Sharable Subgraphs and UDFs",id:"sharable-subgraphs-and-udfs",level:4},{value:"Ability to commit and Release from the pipeline page",id:"ability-to-commit-and-release-from-the-pipeline-page",level:4},{value:"Improvements",id:"ImprovementsRelease290",level:3},{value:"Ability to rename a cluster while attaching",id:"ability-to-rename-a-cluster-while-attaching",level:4},{value:"Checkout remote branches",id:"checkout-remote-branches",level:4},{value:"Open Project lineage view",id:"open-project-lineage-view",level:4},{value:"Cluster auto-attach behavior",id:"cluster-auto-attach-behavior",level:4},{value:"Control Data Sampling behavior for Configured Pipelines",id:"control-data-sampling-behavior-for-configured-pipelines",level:4}];function d(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"2100-mar-31-2023",children:"2.10.0.* (Mar 31, 2023)"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Prophecy Python libs version: 1.4.8"}),"\n",(0,n.jsx)(t.li,{children:"Prophecy Scala libs version: 7.0.16"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"ImprovementsRelease2100",children:"Improvements"}),"\n",(0,n.jsx)(t.h4,{id:"search-box-on-available-clusters",children:"Search box on available clusters"}),"\n",(0,n.jsx)(t.p,{children:"Find clusters faster with cluster search"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"SearchCluster",src:s(479).A+"",width:"3456",height:"2158"})}),"\n",(0,n.jsx)(t.h4,{id:"performance-improvements-for-projects-with-large-number-of-entities",children:"Performance Improvements for Projects with large Number of Entities"}),"\n",(0,n.jsx)(t.p,{children:"With this release, we have optimized the Project Browser to handle Projects with more than 500 pipelines/datasets. User should not see delays and should be able to seamlessly browse Entities in large Projects."}),"\n",(0,n.jsx)(t.h4,{id:"datasets-improvements",children:"Datasets improvements"}),"\n",(0,n.jsx)(t.p,{children:"We have removed Restrictions to allow users to be able to save datasets with Diagnostics errors like missing Input ports/Schema etc.\nAlong with this we have also added ability to Choose Source/Target while adding a Dataset to pipeline from browser. Please see below video for example."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"SourceTargetGems",src:s(93047).A+"",width:"3456",height:"2158"})}),"\n",(0,n.jsx)(t.h4,{id:"warning-when-deleting-teams",children:"Warning when deleting Teams"}),"\n",(0,n.jsxs)(t.p,{children:["Users will now see Warnings as shown below before deleting Teams etc. Similar warnings are shown while deleting a Project or fabric too.",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.img,{alt:"DeleteTeam",src:s(49162).A+"",width:"1451",height:"942"})]}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"Deleting a Team, deletes all the projects, pipelines, datasets, jobs, fabrics owned by that team."})}),"\n",(0,n.jsx)(t.h2,{id:"290-mar-24-2023",children:"2.9.0.* (Mar 24, 2023)"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Prophecy Python libs version: 1.4.7"}),"\n",(0,n.jsx)(t.li,{children:"Prophecy Scala libs version: 7.0.10"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"UpdatesRelease290",children:"Features"}),"\n",(0,n.jsx)(t.h4,{id:"sharable-subgraphs-and-udfs",children:"Sharable Subgraphs and UDFs"}),"\n",(0,n.jsxs)(t.p,{children:["One of the best practices during Data-Project development is to ",(0,n.jsx)(t.em,{children:"Use standardized components"}),". Prophecy enables this standardization in a few ways:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Our standard gems"}),"\n",(0,n.jsx)(t.li,{children:"User-Defined Functions"}),"\n",(0,n.jsx)(t.li,{children:"Reusable Subgraphs"}),"\n",(0,n.jsx)(t.li,{children:"Custom gems"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["With this release, ",(0,n.jsx)(t.code,{children:"Subgraph"}),"s and ",(0,n.jsx)(t.code,{children:"User-Defined Function"}),'s can now be shared across multiple projects and teams. This allows central Data Platform teams to build reusable code to cover a wide variety of business needs, such as Encryption/Decryption or Identity Masking, and have their "consumers" (the Data Practitioners) take a dependency on that reusable code. Since it\'s all versioned, when the reusable code changes, the downstream consumers will be notified and can update accordingly.']}),"\n",(0,n.jsxs)(t.p,{children:["Data admins can also ",(0,n.jsx)(t.em,{children:"Create deployment templates for the pipelines"})," that have the best practices baked into them for authorization, notifications,\nhandling of errors, and logging the correct information."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"Please note, Users will see new Uncommitted changes in their pipelines when they open it. They can see UDF code being added to all pipelines, Configs added to Subgraphs, etc."})}),"\n",(0,n.jsxs)(t.p,{children:["Please see ",(0,n.jsx)(t.a,{href:"/engineers/package-hub",children:"here"})," for more details on this Feature."]}),"\n",(0,n.jsx)(t.h4,{id:"ability-to-commit-and-release-from-the-pipeline-page",children:"Ability to commit and Release from the pipeline page"}),"\n",(0,n.jsxs)(t.p,{children:["A user can complete the entire CI-CD process from ",(0,n.jsx)(t.code,{children:"commit"})," to ",(0,n.jsx)(t.code,{children:"release"})," from the pipeline editor. Please see the below video for an example."]}),"\n",(0,n.jsx)("div",{style:{position:"relative","padding-bottom":"56.25%",height:0},children:(0,n.jsx)("iframe",{src:"https://www.loom.com/embed/5b62a4af13b243019705ee001875e773",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})}),"\n",(0,n.jsx)(t.h3,{id:"ImprovementsRelease290",children:"Improvements"}),"\n",(0,n.jsx)(t.h4,{id:"ability-to-rename-a-cluster-while-attaching",children:"Ability to rename a cluster while attaching"}),"\n",(0,n.jsx)(t.p,{children:"When attaching to a cluster, User can now provide a custom name to the cluster (if creating a new cluster), to be able to identify it in the future again.\nPlease see the below video for an example."}),"\n",(0,n.jsx)("div",{style:{position:"relative","padding-bottom":"56.25%",height:0},children:(0,n.jsx)("iframe",{src:"https://www.loom.com/embed/d28f3ba9dd80482f983f5f7e753d1588",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})}),"\n",(0,n.jsx)(t.h4,{id:"checkout-remote-branches",children:"Checkout remote branches"}),"\n",(0,n.jsx)(t.p,{children:"Users can now check out branches created directly in Git(outside of Prophecy) for editing. On the checkout screen, users will now see a list of remote and local branches separately. Once checked out, the branch will be shown as a local branch.\nPlease see the below video for an example."}),"\n",(0,n.jsx)("div",{style:{position:"relative","padding-bottom":"56.25%",height:0},children:(0,n.jsx)("iframe",{src:"https://www.loom.com/embed/cd9fb2c1a43940c98683b6451625bac1",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})}),"\n",(0,n.jsx)(t.h4,{id:"open-project-lineage-view",children:"Open Project lineage view"}),"\n",(0,n.jsxs)(t.p,{children:["When clicking ",(0,n.jsx)(t.code,{children:"Open Project"})," from a Project page, Users will now see a Birds-eye view of their entire Project. They will have shortcuts to edit pipelines and access all Metadata from this screen. Please see the below video for an example."]}),"\n",(0,n.jsx)("div",{style:{position:"relative","padding-bottom":"56.25%",height:0},children:(0,n.jsx)("iframe",{src:"https://www.loom.com/embed/69fcdee808af4b94844bd603ca93865e",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})}),"\n",(0,n.jsx)(t.h4,{id:"cluster-auto-attach-behavior",children:"Cluster auto-attach behavior"}),"\n",(0,n.jsxs)(t.p,{children:["For Configured pipelines (Read-Only mode from Dependencies) in pipeline view, Cluster will auto-attach to the ",(0,n.jsx)(t.code,{children:"last-used"})," cluster from the fabric. This behavior is now consistent for all pipelines in Edit/Read-Only mode.\nPlease see the below video for an example."]}),"\n",(0,n.jsx)("div",{style:{position:"relative","padding-bottom":"56.25%",height:0},children:(0,n.jsx)("iframe",{src:"https://www.loom.com/embed/09bb5a748d874382bbf6f6c0aebb3d25",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})}),"\n",(0,n.jsx)(t.h4,{id:"control-data-sampling-behavior-for-configured-pipelines",children:"Control Data Sampling behavior for Configured Pipelines"}),"\n",(0,n.jsxs)(t.p,{children:["A User can now change the Data Sampling ",(0,n.jsx)(t.a,{href:"/engineers/execution/#interactive-execution",children:"Interims"})," for Interactive Runs of Configured pipelines(Read-Only mode from Dependencies).\nPlease see the below video for an example."]}),"\n",(0,n.jsx)("div",{style:{position:"relative","padding-bottom":"56.25%",height:0},children:(0,n.jsx)("iframe",{src:"https://www.loom.com/embed/a30e25b0cfc842c4b198f8c36349a879",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>l});var i=s(96540);const n={},a=i.createContext(n);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(a.Provider,{value:t},e.children)}},49162:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/deleteTeam-d6ad9d79b5dd99096bc10357a8f2fb5b.png"},93047:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/SourceTarget-f427a464203ce6006a55cdbc144f037a.gif"}}]);