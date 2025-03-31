"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[88132],{6046:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/databricks-job-creation-from-pipeline-a5f148c2b2ce1ebfb3037517c2d53ed8.png"},8661:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/databricks-jobs-pipeline-config-e7e41f2a83032abd13757a6ef3d17c12.png"},15791:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/databricks-job-example-44729011c5907c78c30c0b8f86276e40.png"},21876:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/databricks-jobs-script-config-1ecac2eda041dac20f670f3a9380faf1.png"},21973:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/databricks-jobs-multi-cluster-eg-66a6d04dd6284d3a717d06d48ffca37a.png"},27882:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/databricks-jobs-single-cluster-eg-32e4fb49f206dea7c50b81079cc7f3fe.png"},28453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>a});var s=t(96540);const n={},r=s.createContext(n);function o(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:i},e.children)}},37704:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"Orchestration/databricks-jobs","title":"Databricks Jobs","description":"Databricks jobs","source":"@site/docs/Orchestration/databricks-jobs.md","sourceDirName":"Orchestration","slug":"/Orchestration/databricks-jobs","permalink":"/prophecy-docs-staging/preview/pr-595/Orchestration/databricks-jobs","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"jobs","permalink":"/prophecy-docs-staging/preview/pr-595/tags/jobs"},{"inline":true,"label":"deployment","permalink":"/prophecy-docs-staging/preview/pr-595/tags/deployment"},{"inline":true,"label":"scheduling","permalink":"/prophecy-docs-staging/preview/pr-595/tags/scheduling"}],"version":"current","frontMatter":{"title":"Databricks Jobs","description":"Databricks jobs","id":"databricks-jobs","tags":["jobs","deployment","scheduling"]},"sidebar":"mySidebar","previous":{"title":"Build an Airflow job","permalink":"/prophecy-docs-staging/preview/pr-595/Orchestration/airflow/airflow-tutorial-spark"},"next":{"title":"Multi Jobs Trigger","permalink":"/prophecy-docs-staging/preview/pr-595/Orchestration/multi-jobs-trigger"}}');var n=t(74848),r=t(28453);const o={title:"Databricks Jobs",description:"Databricks jobs",id:"databricks-jobs",tags:["jobs","deployment","scheduling"]},a=void 0,l={},c=[{value:"Development",id:"development",level:2},{value:"Your first job",id:"your-first-job",level:3},{value:"Building the job",id:"building-the-job",level:3},{value:"Pipeline Gem",id:"pipeline-gem",level:4},{value:"Script Gem",id:"script-gem",level:4},{value:"Visual == Code",id:"visual--code",level:2},{value:"Job Configuration",id:"job-configuration",level:2},{value:"Deployment Modes",id:"deployment-modes",level:2},{value:"Multi Job Cluster Mode",id:"multi-job-cluster-mode",level:3},{value:"Single Job Cluster Mode",id:"single-job-cluster-mode",level:3},{value:"Job Monitoring",id:"job-monitoring",level:2},{value:"Guides",id:"guides",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["Once you have developed a ",(0,n.jsx)(i.a,{href:"/prophecy-docs-staging/preview/pr-595/Spark/pipelines/",children:"Spark pipeline"})," using Prophecy, you will want to schedule it to run at\nsome frequency. To support this, Prophecy provides a visual layer on top of Databricks jobs for an easy orchestration."]}),"\n",(0,n.jsx)(i.h2,{id:"development",children:"Development"}),"\n",(0,n.jsx)(i.h3,{id:"your-first-job",children:"Your first job"}),"\n",(0,n.jsx)(i.p,{children:"You can create a job from two places. If you're going to schedule only a single pipeline, the easiest way to\nbuild a job for it is to do it directly from the pipeline editor screen. This way your job is automatically initialized\nwith the pipeline you create it from."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Databricks job Creation From pipeline",src:t(6046).A+"",width:"4053",height:"1335"})}),"\n",(0,n.jsxs)(i.p,{children:["To do that, simply navigate to your pipeline, and click on the Schedule button (1). That opens a modal that shows all\nthe jobs that refer to this job or allow you to create a completely new job from scratch. Upon clicking\nCreate New (2) you are redirected to the ",(0,n.jsx)(i.a,{href:"/Orchestration/databricks-jobs#building-the-job",children:"job building page"}),"."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Databricks Job Creation",src:t(71154).A+"",width:"4053",height:"1335"})}),"\n",(0,n.jsx)(i.p,{children:"Alternatively, if you'd like to create a new job completely from scratch, you can do that directly from the entity\ncreation page (1). There you can choose the job tile (2) and that opens a similar modal where you can define your\njob details (3)."}),"\n",(0,n.jsx)(i.p,{children:"Whenever, creating a new job you're asked for the following details:"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Field Name"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Project"}),(0,n.jsxs)(i.td,{children:["Which ",(0,n.jsx)(i.a,{href:"/prophecy-docs-staging/preview/pr-595/projects",children:"Project"})," to create the job in. This controls who has access to the job, groups jobs together for lineage, and allows you to use pipelines already published within that project."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Branch"}),(0,n.jsx)(i.td,{children:"Which Git branch to use when developing this job."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Name"}),(0,n.jsx)(i.td,{children:"Unique job name."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Scheduler"}),(0,n.jsx)(i.td,{children:"The underlying engine that's going to execute your job. Databricks is recommended."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Fabric"}),(0,n.jsxs)(i.td,{children:["The ",(0,n.jsx)(i.a,{href:"/prophecy-docs-staging/preview/pr-595/fabrics",children:"execution fabric"})," to which the job is going to be deployed."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Job Size"}),(0,n.jsxs)(i.td,{children:["The ",(0,n.jsx)(i.a,{href:"/prophecy-docs-staging/preview/pr-595/fabrics",children:"default size"})," of the cluster that's going to be created for the job to run."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Schedule Interval"}),(0,n.jsxs)(i.td,{children:["Defines how often your job is going to run. The interval is defined using the ",(0,n.jsx)(i.a,{href:"http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html",children:"Quartz format"}),". You can click on the clock icon to select the interval."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Alerts email"}),(0,n.jsx)(i.td,{children:"Comma separated list of emails that are going to receive notifications on specific job status events (start, failure, or success)."})]})]})]}),"\n",(0,n.jsx)(i.h3,{id:"building-the-job",children:"Building the job"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Example Databricks job",src:t(15791).A+"",width:"2762",height:"1222"})}),"\n",(0,n.jsx)(i.p,{children:"Now that you've created your first job, you can start adding gems to the canvas to define which pipelines will\nbe run during the job. To define dependencies between the pipelines within the job you can simply connect them\nby dragging-and-dropping the edges between gems."}),"\n",(0,n.jsx)(i.p,{children:"Two gem types are available when defining Databricks jobs:"}),"\n",(0,n.jsx)(i.h4,{id:"pipeline-gem",children:"Pipeline Gem"}),"\n",(0,n.jsx)(i.p,{children:"The Pipeline gem triggers a Spark pipeline developed in Prophecy."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Pipeline Component",src:t(8661).A+"",width:"3000",height:"1588"})}),"\n",(0,n.jsx)(i.p,{children:"Settings for pipeline component can be inherited from overall job configuration or can be set inside the component itself."}),"\n",(0,n.jsx)(i.h4,{id:"script-gem",children:"Script Gem"}),"\n",(0,n.jsx)(i.p,{children:"Script gem can be used to write any ad-hoc code."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Script Component",src:t(21876).A+"",width:"3010",height:"1794"})}),"\n",(0,n.jsx)(i.p,{children:"Settings for script component can be inherited from overall job configuration or can be set inside the component itself."}),"\n",(0,n.jsx)(i.h2,{id:"visual--code",children:"Visual == Code"}),"\n",(0,n.jsx)(i.p,{children:"The visual graph created on the jobs page is automatically converted to code (JSON) in the backend which gets committed to Git."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Code View",src:t(49287).A+"",width:"3324",height:"1850"})}),"\n",(0,n.jsx)(i.h2,{id:"job-configuration",children:"Job Configuration"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Example Configuration",src:t(83130).A+"",width:"3006",height:"1446"})}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Field Name"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Scheduler"}),(0,n.jsx)(i.td,{children:"The underlying engine that's going to execute your job. Databricks is recommended."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Fabric"}),(0,n.jsxs)(i.td,{children:["The ",(0,n.jsx)(i.a,{href:"/prophecy-docs-staging/preview/pr-595/fabrics",children:"execution fabric"})," to which the job is going to be deployed."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Cluster Size"}),(0,n.jsxs)(i.td,{children:["The ",(0,n.jsx)(i.a,{href:"/prophecy-docs-staging/preview/pr-595/fabrics",children:"default size"})," of the cluster that's going to be created for the job to run."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Cluster Mode"}),(0,n.jsxs)(i.td,{children:["Can be selected as ",(0,n.jsx)(i.code,{children:"Single"})," (all gems within the job re-use the same Cluster) or ",(0,n.jsx)(i.code,{children:"Multi"})," (all gems within the job run on a separate new cluster)"]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Schedule Interval"}),(0,n.jsxs)(i.td,{children:["Defines how often your job is going to run. The interval is defined using the ",(0,n.jsx)(i.a,{href:"http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html",children:"Quartz format"}),". You can click on the clock icon to select the interval."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Pipeline level Timeout"}),(0,n.jsx)(i.td,{children:"Timeout at pipeline level"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Alerts Email for pipeline"}),(0,n.jsx)(i.td,{children:"Comma separated list of emails, that are going to receive notifications on specific job status events (job start, failure, or success) for entire pipeline."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Per Gem Timeout"}),(0,n.jsx)(i.td,{children:"Timeout for each gem in job pipeline"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Number of retries per gem"}),(0,n.jsx)(i.td,{children:"Number of retries for each gem in job pipeline"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Alerts Email per gem"}),(0,n.jsx)(i.td,{children:"Comma separated list of emails that are going to receive notifications on specific job status events (start, failure, or success) for each gem in job pipeline."})]})]})]}),"\n",(0,n.jsx)(i.p,{children:"To change the job name itself, go to Prophecy's metadata page. Locate the job within a project, and click the pencil icon."}),"\n",(0,n.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,n.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,n.jsx)("iframe",{src:"https://fast.wistia.net/embed/iframe/hlqqxqyq87?seo=false?videoFoam=true",title:"Getting Started With SQL Video",allow:"autoplay; fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,n.jsx)(i.h2,{id:"deployment-modes",children:"Deployment Modes"}),"\n",(0,n.jsx)(i.p,{children:"To deploy a job on Databricks, we need to release the project from Prophecy UI as shown in example below. As soon as the project is\nreleased, the job would start appearing on Databricks jobs page as well."}),"\n",(0,n.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,n.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,n.jsx)("iframe",{src:"https://user-images.githubusercontent.com/103921419/184726064-67e3df01-ba4c-431e-92e9-8bda92a19530.mp4",title:"Job Deployment",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsxs)(i.admonition,{type:"info",children:[(0,n.jsx)(i.p,{children:"Make sure to enable the job before creating a Release. If it is not enabled the job will not run on the specified schedule."}),(0,n.jsx)(i.p,{children:"If a job's selected fabric is changed it will create a separate Databricks job definition. The previous job (with the previous fabric) will be paused automatically and the new version will be scheduled."})]}),"\n",(0,n.jsx)(i.p,{children:"Prophecy supports two different job deployment models. Each has different impacts on job cost and parallelism."}),"\n",(0,n.jsx)(i.h3,{id:"multi-job-cluster-mode",children:"Multi Job Cluster Mode"}),"\n",(0,n.jsx)(i.p,{children:"In this mode, each component of job will spawn a separate cluster of its own."}),"\n",(0,n.jsx)(i.p,{children:"Here's how the Databricks UI looks for Prophecy's Multi Cluster Mode."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Multi Job Cluster",src:t(21973).A+"",width:"3322",height:"1756"})}),"\n",(0,n.jsx)(i.h3,{id:"single-job-cluster-mode",children:"Single Job Cluster Mode"}),"\n",(0,n.jsx)(i.p,{children:"In this mode, each component of job will run on the same cluster."}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsxs)(i.p,{children:["To use single cluster mode the package name across each pipeline in job should be unique.\nThis is done to ensure that the folder structure for one pipeline does not overwrite another.\nPlease refer to the steps below in continuation to our earlier ",(0,n.jsx)(i.a,{href:"databricks-jobs#deployment-modes",children:"Example"})," on how to configure package name in pipeline."]})}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,n.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,n.jsx)("iframe",{src:"https://user-images.githubusercontent.com/103921419/184726133-51bf76ec-31d7-4976-8d7d-68230c28e233.mp4",title:"Single Cluster Mode",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,n.jsx)(i.p,{children:"Here's how the Databricks UI looks for Prophecy's Single Cluster Mode."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Single Job Cluster",src:t(27882).A+"",width:"3320",height:"1776"})}),"\n",(0,n.jsx)(i.h2,{id:"job-monitoring",children:"Job Monitoring"}),"\n",(0,n.jsx)(i.p,{children:"Prophecy provides monitoring page which shows the status (enable/disable) of all the jobs deployed via Prophecy and\nstatus of historic/current runs (success/failure/in-progress) for quick reference."}),"\n",(0,n.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,n.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,n.jsx)("iframe",{src:"https://user-images.githubusercontent.com/103921419/184726121-d2b7c5c7-ec01-48b1-9764-781292940f53.mp4",title:"Monitoring",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,n.jsx)(i.h2,{id:"guides",children:"Guides"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"multi-jobs-trigger",children:"How to trigger a job from another job?"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/prophecy-docs-staging/preview/pr-595/ci-cd/reliable-ci-cd",children:"How to design a reliable CI/CD process?"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},49287:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/databricks-jobs-code-view-b0a6f49e0f77cb400aa84d00e72ed68f.png"},71154:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/databricks-job-creation-8b9fa7361efb938c441c3d5038733934.png"},83130:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/databricks-job-config-example-e0806c65b871d08950145d379a564d04.png"}}]);