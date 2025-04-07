"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[85754],{28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}},38906:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/gem_comment-1471eb15bacaf3c799c3624f2180a841.gif"},45906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"release_notes/2023/May_2023","title":"May 2023","description":"Release notes for May","source":"@site/docs/release_notes/2023/may2023.md","sourceDirName":"release_notes/2023","slug":"/release_notes/2023/May_2023","permalink":"/prophecy-docs-staging/preview/pr-604/release_notes/2023/May_2023","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"release notes","permalink":"/prophecy-docs-staging/preview/pr-604/tags/release-notes"},{"inline":true,"label":"changelog","permalink":"/prophecy-docs-staging/preview/pr-604/tags/changelog"}],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"id":"May_2023","description":"Release notes for May","title":"May 2023","tags":["release notes","changelog"]},"sidebar":"mySidebar","previous":{"title":"June 2023","permalink":"/prophecy-docs-staging/preview/pr-604/release_notes/2023/June_2023"},"next":{"title":"April 2023","permalink":"/prophecy-docs-staging/preview/pr-604/release_notes/2023/Apr_2023"}}');var o=n(74848),i=n(28453);const r={sidebar_position:4,id:"May_2023",description:"Release notes for May",title:"May 2023",tags:["release notes","changelog"]},a=void 0,l={},d=[{value:"3.0.1.* (May 17, 2023)",id:"301-may-17-2023",level:2},{value:"Minor Improvements",id:"UXImprovements301",level:3},{value:"Job filter support in PBT",id:"job-filter-support-in-pbt",level:4},{value:"Gem updates",id:"gem-updates",level:4},{value:"Group select gems to batch changes like phase",id:"group-select-gems-to-batch-changes-like-phase",level:4},{value:"Ability to add comments on gems in UI",id:"ability-to-add-comments-on-gems-in-ui",level:4},{value:"UX update on Merge conflict resolution screens",id:"ux-update-on-merge-conflict-resolution-screens",level:4},{value:"Added warning before deleting branch from local and remote",id:"added-warning-before-deleting-branch-from-local-and-remote",level:4},{value:"Support for Unit tests with Lookups through PBT",id:"support-for-unit-tests-with-lookups-through-pbt",level:4}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"301-may-17-2023",children:"3.0.1.* (May 17, 2023)"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Prophecy Python libs version: 1.5.1"}),"\n",(0,o.jsx)(t.li,{children:"Prophecy Scala libs version: 7.0.24"}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"UXImprovements301",children:"Minor Improvements"}),"\n",(0,o.jsx)(t.h4,{id:"job-filter-support-in-pbt",children:"Job filter support in PBT"}),"\n",(0,o.jsxs)(t.p,{children:["Users can now filter the jobs and just release selected JobIds with PBT. When releasing only selected Jobs using this filter, Prophecy Build tool will figure out automatically what pipelines are being used by the Job and only build those. Please find more details of this enhancement ",(0,o.jsx)(t.a,{href:"/engineers/prophecy-build-tool#deploy-specific-jobs-using-jobid-filter",children:"here"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"User can find the JobId on the Jobs details page in the bottom right corner as shown below."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"job_id",src:n(97742).A+"",width:"3454",height:"1928"})}),"\n",(0,o.jsx)(t.h4,{id:"gem-updates",children:"Gem updates"}),"\n",(0,o.jsxs)(t.p,{children:["Added support for keeping only distinct rows in Deduplicate gem. More details are updated ",(0,o.jsx)(t.a,{href:"/engineers/deduplicate",children:"here"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"RestAPIEnrich gem is enhanced to parse the response automatically based on the sample record provided in the gem."}),"\n",(0,o.jsx)(t.h4,{id:"group-select-gems-to-batch-changes-like-phase",children:"Group select gems to batch changes like phase"}),"\n",(0,o.jsx)(t.p,{children:"Users can now select multiple gems at a time and update phase for all of them together. They can also delete the selected gems by single click."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"group-select-gems",src:n(46127).A+"",width:"3454",height:"1928"})}),"\n",(0,o.jsx)(t.h4,{id:"ability-to-add-comments-on-gems-in-ui",children:"Ability to add comments on gems in UI"}),"\n",(0,o.jsx)(t.p,{children:"Users can now add detailed comments on their gems on UI. They can use this to add more detailed description to let others know about what that gem is actually doing.\nPlease note, these comments right now are shown in UI only and are not reflected in generated code."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"gem_comment",src:n(38906).A+"",width:"3454",height:"1928"})}),"\n",(0,o.jsx)(t.h4,{id:"ux-update-on-merge-conflict-resolution-screens",children:"UX update on Merge conflict resolution screens"}),"\n",(0,o.jsx)(t.p,{children:"Added a button at the top of merge conflict resolution that lets you choose all changes from left or right side instead of clicking each toggle individually."}),"\n",(0,o.jsx)(t.h4,{id:"added-warning-before-deleting-branch-from-local-and-remote",children:"Added warning before deleting branch from local and remote"}),"\n",(0,o.jsx)(t.p,{children:"User would now see a warning before deleting the branch from local/remote. Please see below video for example."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"delete-warning",src:n(77431).A+"",width:"3454",height:"1928"})}),"\n",(0,o.jsx)(t.h4,{id:"support-for-unit-tests-with-lookups-through-pbt",children:"Support for Unit tests with Lookups through PBT"}),"\n",(0,o.jsxs)(t.p,{children:["Previously due to Prophecy-libs dependency, unit tests for pipelines having Lookup gems were failing when Run through Prophecy Build tool.\nProphecy has now added support in ",(0,o.jsx)(t.code,{children:"pbt test"})," command to download required dependencies from maven central. User can additionally pass ",(0,o.jsx)(t.code,{children:"--driver-library-path"})," as a parameter to ",(0,o.jsx)(t.code,{children:"pbt test"})," command to override to some custom path."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},46127:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/group-select-gem-dd937099660a4e253960a26059c3371f.gif"},77431:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/warning-delete-89fe71e7c097725cd48932e95ea654af.gif"},97742:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/job-id-9016c3a7f886bbfa181789c2097deca6.gif"}}]);