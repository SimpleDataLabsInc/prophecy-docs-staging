"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[78104],{18912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"ci-cd/deployment/Deployment","title":"Deployment","description":"Release projects and deploy jobs","source":"@site/docs/ci-cd/deployment/deployment.md","sourceDirName":"ci-cd/deployment","slug":"/engineers/deployment","permalink":"/prophecy-docs-staging/preview/pr-605/engineers/deployment","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"metadata","permalink":"/prophecy-docs-staging/preview/pr-605/tags/metadata"},{"inline":true,"label":"Git","permalink":"/prophecy-docs-staging/preview/pr-605/tags/git"},{"inline":true,"label":"release","permalink":"/prophecy-docs-staging/preview/pr-605/tags/release"},{"inline":true,"label":"build","permalink":"/prophecy-docs-staging/preview/pr-605/tags/build"},{"inline":true,"label":"deploy","permalink":"/prophecy-docs-staging/preview/pr-605/tags/deploy"}],"version":"current","frontMatter":{"title":"Deployment","id":"Deployment","slug":"/engineers/deployment","description":"Release projects and deploy jobs","tags":["metadata","Git","release","build","deploy"]},"sidebar":"mySidebar","previous":{"title":"Data diff","permalink":"/prophecy-docs-staging/preview/pr-605/engineers/data-diff"},"next":{"title":"Deploy a project","permalink":"/prophecy-docs-staging/preview/pr-605/engineers/develop-and-deploy"}}');var i=n(74848),o=n(28453);const l={title:"Deployment",id:"Deployment",slug:"/engineers/deployment",description:"Release projects and deploy jobs",tags:["metadata","Git","release","build","deploy"]},r=void 0,a={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Overview",id:"overview",level:2},{value:"Release",id:"release",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Advanced Settings",id:"advanced-settings",level:2},{value:"Deployment modes",id:"deployment-modes",level:3},{value:"Unit tests",id:"unit-tests",level:3},{value:"History",id:"history",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function p(e){const t={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Once you have developed and tested your custom components like gems, pipelines, models, or jobs in Prophecy, the next step is to make them available for use. This involves Releasing and Deploying them to the respective environments."}),"\n",(0,i.jsxs)(t.p,{children:["You can Release and Deploy via Prophecy UI or you can use ",(0,i.jsx)(t.a,{href:"/engineers/prophecy-build-tool",children:"Prophecy Build Tool"})," CLI to integrate with any other CI-CD tools. Lets see how you can do it via the Prophecy UI below."]}),"\n",(0,i.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(t.p,{children:["You must be a ",(0,i.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-605/administration/",children:"team admin"})," to release and deploy a project."]}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(t.p,{children:["What happens when you click ",(0,i.jsx)(t.strong,{children:"Release and Deploy"})," in the ",(0,i.jsx)(t.a,{href:"/engineers/git-workflow",children:"Git workflow"})," of your project?"]}),"\n",(0,i.jsx)(t.h3,{id:"release",children:"Release"}),"\n",(0,i.jsx)(t.p,{children:"The release step ensures that your new project code is synced to your Git repository."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A ",(0,i.jsx)(t.a,{href:"https://git-scm.com/book/en/v2/Git-Basics-Tagging",children:"Git tag"})," is created with the version you specify."]}),"\n",(0,i.jsx)(t.li,{children:"The new project version is pushed to your Git repository."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"deploy",children:"Deploy"}),"\n",(0,i.jsx)(t.p,{children:"The deploy step builds all the pipelines and gems, uploads the artifacts, and schedules all the jobs in the project to the respective environments."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Pipelines are compiled and built into an artifact (Wheel file for Python and Jar file for Scala). These artifacts are then uploaded to your environment."}),"\n",(0,i.jsx)(t.li,{children:"Gems (including custom gems) are built and uploaded to an internal artifactory. They aren't directly copied to your environments, as they are used in generating code for the pipelines, not during job/pipeline execution. Note, the code for gems do get committed to your Git repo as part of the project."}),"\n",(0,i.jsx)(t.li,{children:"Depending on the type of job (Databricks or Airflow), jobs are copied to their respective environments as JSON files for Databricks jobs and as Python DAGs for Airflow."}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"There are no specific deployment steps needed for other project entities."})}),"\n",(0,i.jsx)(t.h2,{id:"advanced-settings",children:"Advanced Settings"}),"\n",(0,i.jsx)(t.p,{children:"For most users, a regular project release takes care of both the release and deployment of pipelines, gems, and jobs to respective environments. However, if you want more control over the deployment process, you can update the project settings."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Open the ",(0,i.jsx)(t.strong,{children:"Settings"})," page in the project metadata."]}),"\n",(0,i.jsxs)(t.li,{children:["Open the ",(0,i.jsx)(t.strong,{children:"Deployment"})," subtab."]}),"\n",(0,i.jsx)(t.li,{children:"Change the deployment mode or enable/disable unit testing."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Deployment_settings",src:n(52392).A+"",width:"2880",height:"1726"})}),"\n",(0,i.jsx)(t.h3,{id:"deployment-modes",children:"Deployment modes"}),"\n",(0,i.jsx)(t.p,{children:"Deployment modes dictate how the release and deploy steps will be controlled."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Deploy on Release (default)"}),": Release and deploy in a single step."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Staged Release and Deployment"}),": Separate release and deploy into two separate steps."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Selective Job Deployment"}),": Select specific jobs during the Deploy step. Use this if you have many jobs in a project and only want to deploy a few at a time. ",(0,i.jsx)(t.em,{children:"Only the deployed jobs will use the latest versions of pipelines, datasets, and subgraphs."})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"unit-tests",children:"Unit tests"}),"\n",(0,i.jsxs)(t.p,{children:["Writing good ",(0,i.jsx)(t.a,{href:"/engineers/unit-tests",children:"unit tests"})," is key for data pipeline quality and management. When you enable unit tests for deployment, unit tests will run as part of pipeline builds. This might lead to a slight increase in the build time."]}),"\n",(0,i.jsx)(t.h2,{id:"history",children:"History"}),"\n",(0,i.jsxs)(t.p,{children:["You can view the release and deployment history in the ",(0,i.jsx)(t.strong,{children:"Releases & Deployments"})," tab of your project metadata."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Releases_and_Deployments",src:n(80178).A+"",width:"2880",height:"1726"})}),"\n",(0,i.jsx)(t.p,{children:"The page includes the following subtabs."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Releases"}),": Find a history of releases including information about the author, creation time, and latest tag. You can also view the logs of the latest deployment associated with that tag."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Current Version"}),": View the current state of all deployed jobs per environment. Select the fabric to view the list of all jobs deployed in that environment, along with their versions and deployment logs."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Deployment History"}),": See the history of all past deployments, along with the time that it was deployed and related logs."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"whats-next",children:"What's next"}),"\n",(0,i.jsxs)(t.p,{children:["Follow the tutorial ",(0,i.jsx)(t.a,{href:"/engineers/develop-and-deploy",children:"Develop and deploy a project"})," to try to deploy a project yourself!"]})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var s=n(96540);const i={},o=s.createContext(i);function l(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(o.Provider,{value:t},e.children)}},52392:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/settings_for_deployment-e48d01af0afdaf1eaf49a34349844680.png"},80178:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Release_&_Deployments-ef32b979903ce78e0bbe4b1298d28d61.png"}}]);