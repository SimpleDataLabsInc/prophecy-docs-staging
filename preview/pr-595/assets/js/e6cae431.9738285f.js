"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[22085],{17218:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/external_release_tag_deploy_start-19e27cacec1e4d58ce478a87efcdc21a.png"},21534:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/external_release_tag_list-63f303439c66dc1cf9c3bd6ed65e12be.png"},22728:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/external_release_tag_create_dependency-4a830331f3ad592ad56da688dbb639f8.png"},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var s=n(96540);const a={},r=s.createContext(a);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(r.Provider,{value:t},e.children)}},36439:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/external_release_tag_deploy-18df710fa59f690a2391cd33ecc2fbd8.png"},59528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"ci-cd/deployment/use-external-release-tags","title":"External release tags in Prophecy","description":"Use external release tags for deployment and dependency in Prophecy","source":"@site/docs/ci-cd/deployment/use-external-release-tags.md","sourceDirName":"ci-cd/deployment","slug":"/ci-cd/deployment/use-external-release-tags","permalink":"/prophecy-docs-staging/preview/pr-595/ci-cd/deployment/use-external-release-tags","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"how-to","permalink":"/prophecy-docs-staging/preview/pr-595/tags/how-to"},{"inline":true,"label":"external","permalink":"/prophecy-docs-staging/preview/pr-595/tags/external"},{"inline":true,"label":"release","permalink":"/prophecy-docs-staging/preview/pr-595/tags/release"},{"inline":true,"label":"tags","permalink":"/prophecy-docs-staging/preview/pr-595/tags/tags"},{"inline":true,"label":"deploy","permalink":"/prophecy-docs-staging/preview/pr-595/tags/deploy"},{"inline":true,"label":"package","permalink":"/prophecy-docs-staging/preview/pr-595/tags/package"},{"inline":true,"label":"dependency","permalink":"/prophecy-docs-staging/preview/pr-595/tags/dependency"},{"inline":true,"label":"cicd","permalink":"/prophecy-docs-staging/preview/pr-595/tags/cicd"}],"version":"current","frontMatter":{"title":"External release tags in Prophecy","sidebar_label":"External release tags","id":"use-external-release-tags","description":"Use external release tags for deployment and dependency in Prophecy","tags":["how-to","external","release","tags","deploy","package","dependency","cicd"]},"sidebar":"mySidebar","previous":{"title":"Deploy a project","permalink":"/prophecy-docs-staging/preview/pr-595/ci-cd/deployment/deploy-project"},"next":{"title":"Prophecy Build Tool (PBT)","permalink":"/prophecy-docs-staging/preview/pr-595/ci-cd/prophecy-build-tool/"}}');var a=n(74848),r=n(28453);const l={title:"External release tags in Prophecy",sidebar_label:"External release tags",id:"use-external-release-tags",description:"Use external release tags for deployment and dependency in Prophecy",tags:["how-to","external","release","tags","deploy","package","dependency","cicd"]},o=void 0,i={},c=[{value:"View external release tags",id:"view-external-release-tags",level:2},{value:"Deploy an external release tag",id:"deploy-an-external-release-tag",level:2},{value:"Use the release as a dependency",id:"use-the-release-as-a-dependency",level:2},{value:"FAQ",id:"faq",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["If you use external CI-CD tools to merge and release your projects, you can use ",(0,a.jsx)(t.a,{href:"https://git-scm.com/book/en/v2/Git-Basics-Tagging",children:"release tags"})," from those tools within Prophecy for deployment and dependencies."]}),"\n",(0,a.jsx)(t.p,{children:"Once you've deployed an external tag in Prophecy, you can add that release as a dependency in a project."}),"\n",(0,a.jsx)(t.h2,{id:"view-external-release-tags",children:"View external release tags"}),"\n",(0,a.jsxs)(t.p,{children:["Any externally created release tag that you pull into Prophecy is visible on the ",(0,a.jsx)(t.strong,{children:"Releases & Deployments"})," tab of your project metadata."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"External_tags_list",src:n(21534).A+"",width:"2880",height:"1726"})}),"\n",(0,a.jsxs)(t.p,{children:["Tags that are created externally are labeled with an ",(0,a.jsx)(t.strong,{children:"(1) External"})," tag. If your latest tags aren't showing, click on the ",(0,a.jsx)(t.strong,{children:"(2) Refresh"})," button to refresh the list of tags."]}),"\n",(0,a.jsx)(t.h2,{id:"deploy-an-external-release-tag",children:"Deploy an external release tag"}),"\n",(0,a.jsx)(t.p,{children:"To deploy an existing tag, follow these steps:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["From ",(0,a.jsx)(t.code,{children:"..."})," in the top right corner, select ",(0,a.jsx)(t.strong,{children:"(1) Deploy"}),". This opens the Deploy dialog."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Deploy_button",src:n(36439).A+"",width:"2880",height:"1726"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Select a release version you wish to deploy by using the ",(0,a.jsx)(t.strong,{children:"(1) Choose a release"})," dropdown. Once you select a version, the table below shows the jobs that are going to be modified (there might not be any jobs). Click ",(0,a.jsx)(t.strong,{children:"(2) Deploy"})," to start the deployment."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Deploy_start",src:n(17218).A+"",width:"2880",height:"1726"})}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["If you have enabled ",(0,a.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-595/ci-cd/deployment/#deployment-modes",children:"Selective Job Deployment"}),", then you can pick the jobs you wish to deploy. Additionally, you have the option to override the fabrics for these jobs. Job selection ",(0,a.jsx)(t.strong,{children:"is not required"})," to deploy the release."]})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"This deploys a new release. You can access deployment logs from the Deployment History tab."}),"\n",(0,a.jsx)(t.h2,{id:"use-the-release-as-a-dependency",children:"Use the release as a dependency"}),"\n",(0,a.jsx)(t.p,{children:"Once you've deployed a tag, you can use the release as a dependency in a project."}),"\n",(0,a.jsxs)(t.p,{children:["First, navigate to the ",(0,a.jsx)(t.strong,{children:"(1) Dependencies"})," tab of the relevant project and click ",(0,a.jsx)(t.strong,{children:"(2) + Add Dependency"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Add_dependency",src:n(98765).A+"",width:"2880",height:"1726"})}),"\n",(0,a.jsxs)(t.p,{children:["Next, in the ",(0,a.jsx)(t.strong,{children:"Create Dependency"})," dialog:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["For ",(0,a.jsx)(t.strong,{children:"Type"}),", select ",(0,a.jsx)(t.strong,{children:"Package Hub Dependency"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["For ",(0,a.jsx)(t.strong,{children:"Name"}),", choose the project that contains the external release tag."]}),"\n",(0,a.jsxs)(t.li,{children:["For ",(0,a.jsx)(t.strong,{children:"Version"}),", select the option that matches your external release tag."]}),"\n",(0,a.jsxs)(t.li,{children:["Click ",(0,a.jsx)(t.strong,{children:"Create Dependency"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Add_dependency_2",src:n(22728).A+"",width:"2880",height:"1726"})}),"\n",(0,a.jsx)(t.p,{children:"You can also edit a dependency and update its version to an externally released version."}),"\n",(0,a.jsx)(t.h2,{id:"faq",children:"FAQ"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"How does Prophecy support tags from a repo that is linked to multiple Prophecy projects?"})}),"\n",(0,a.jsx)(t.p,{children:"A Git tag is a pointer to a specific commit in the repo. It's not linked to a subfolder in the repo. So in this case, if you create a tag, it would be available for all projects linked to the repo."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Do the tags have to follow a certain pattern to be recognized?"})}),"\n",(0,a.jsx)(t.p,{children:"No. Prophecy supports all tag patterns supported in Git. Prophecy automatically recognizes external tags after you visit the Release and Deployment page or refresh the page."})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},98765:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/external_release_tag_dependency-1bfc2eb36862c38df6ec9f2b3acc0b1b.png"}}]);