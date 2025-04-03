"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[18458],{7448:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"Orchestration/multi-jobs-trigger","title":"Multi Jobs Trigger","description":"Complex pipeline interactions and timing","source":"@site/docs/Orchestration/multi-jobs-trigger.md","sourceDirName":"Orchestration","slug":"/engineers/multi-jobs-trigger","permalink":"/prophecy-docs-staging/preview/pr-601/engineers/multi-jobs-trigger","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"scheduling","permalink":"/prophecy-docs-staging/preview/pr-601/tags/scheduling"},{"inline":true,"label":"jobs","permalink":"/prophecy-docs-staging/preview/pr-601/tags/jobs"},{"inline":true,"label":"trigger","permalink":"/prophecy-docs-staging/preview/pr-601/tags/trigger"},{"inline":true,"label":"pipelines","permalink":"/prophecy-docs-staging/preview/pr-601/tags/pipelines"},{"inline":true,"label":"tutorial","permalink":"/prophecy-docs-staging/preview/pr-601/tags/tutorial"}],"version":"current","frontMatter":{"title":"Multi Jobs Trigger","id":"multi-jobs-trigger","slug":"/engineers/multi-jobs-trigger","description":"Complex pipeline interactions and timing","tags":["scheduling","jobs","trigger","pipelines","tutorial"]},"sidebar":"mySidebar","previous":{"title":"Databricks Jobs","permalink":"/prophecy-docs-staging/preview/pr-601/engineers/databricks-jobs"},"next":{"title":"Extensibility","permalink":"/prophecy-docs-staging/preview/pr-601/engineers/extensibility"}}');var r=i(74848),n=i(28453);const o={title:"Multi Jobs Trigger",id:"multi-jobs-trigger",slug:"/engineers/multi-jobs-trigger",description:"Complex pipeline interactions and timing",tags:["scheduling","jobs","trigger","pipelines","tutorial"]},a=void 0,l={},c=[{value:"Time-based Approach",id:"time-based-approach",level:2},{value:"Trigger-based Approach",id:"trigger-based-approach",level:2},{value:"Deploying Jobs",id:"deploying-jobs",level:3},{value:"Job trigger",id:"job-trigger",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["To better structure your projects, sometimes you would like to create multiple different jobs that trigger only a specific set of pipelines. E.g. when using the ",(0,r.jsx)(t.a,{href:"https://www.prophecy.io/blogs/prophecy-with-delta#bronze-silver-gold-layers",children:"Bronze, Silver, Gold"})," architecture, one might want to have a project for each one of the stages and run each stage sequentially - run ",(0,r.jsx)(t.em,{children:"Gold"})," after ",(0,r.jsx)(t.em,{children:"Silver"})," is finished and ",(0,r.jsx)(t.em,{children:"Silver"})," and after ",(0,r.jsx)(t.em,{children:"Bronze"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"However, this poses a question: How to schedule multiple jobs together?"}),"\n",(0,r.jsx)(t.h2,{id:"time-based-approach",children:"Time-based Approach"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Data pipeline",src:i(60567).A+"",width:"2576",height:"850"})}),"\n",(0,r.jsxs)(t.p,{children:["One traditional approach is to schedule the sequential jobs to run at different time intervals. E.g. the ",(0,r.jsx)(t.em,{children:"first job"})," can\nrun at 7am and the ",(0,r.jsx)(t.em,{children:"second job"})," can run an hour later. This works well, if there's no data dependencies between those\njobs, or we're confident the ",(0,r.jsx)(t.em,{children:"first job"})," is going to always finish before the ",(0,r.jsx)(t.em,{children:"second job"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["But what would happen if our ",(0,r.jsx)(t.em,{children:"first job"})," (e.g. bronze ingestion) hasn't yet finished, but the ",(0,r.jsx)(t.em,{children:"second job"})," (e.g. silver\ncleanup) is about to start? This could potentially result in only partially processed data or even break the downstream\njobs completely. Recoverability and maintenance also becomes more difficult."]}),"\n",(0,r.jsx)(t.h2,{id:"trigger-based-approach",children:"Trigger-based Approach"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Data pipeline",src:i(21114).A+"",width:"2576",height:"850"})}),"\n",(0,r.jsx)(t.p,{children:"This is where, it might be worth to explore the trigger-based approach. Using this approach, we place additional\ntriggers in our upstream jobs that trigger the jobs that should be executed after those finished."}),"\n",(0,r.jsxs)(t.p,{children:["To achieve that we can leverage the ",(0,r.jsx)(t.code,{children:"Script"})," gem\nand ",(0,r.jsx)(t.a,{href:"https://docs.databricks.com/dev-tools/api/latest/jobs.html#operation/JobsRunNow",children:"Databricks Jobs API"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"To be able to trigger a job from within another job, we need to:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Deploy the job we want to trigger and find it's Databricks ",(0,r.jsx)(t.code,{children:"job_id"})]}),"\n",(0,r.jsxs)(t.li,{children:["Add a ",(0,r.jsx)(t.code,{children:"Script"})," gem to the scheduled job that triggers the other one"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"deploying-jobs",children:"Deploying Jobs"}),"\n",(0,r.jsx)(t.p,{children:"First of all, to be able to trigger one job from another, we need to release it and get it\u2019s Databricks job id."}),"\n",(0,r.jsx)(t.p,{children:"Please note that this job is disabled - as we\u2019re only going to run it from a manual API, instead of a time-based\ntrigger."}),"\n",(0,r.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,r.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,r.jsx)("iframe",{src:"https://fast.wistia.net/embed/iframe/0f08c3ppuc?videoFoam=true",title:"Deploying Jobs Video",allow:"autoplay; fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,r.jsx)("script",{src:"https://fast.wistia.net/assets/external/E-v1.js",async:!0}),"\n",(0,r.jsx)(t.h3,{id:"job-trigger",children:"Job trigger"}),"\n",(0,r.jsxs)(t.p,{children:["Once we have the ID of the job that we'd like to trigger, we can go ahead and create a ",(0,r.jsx)(t.code,{children:"Script"})," gem in our upstream job\nthat's going to run it."]}),"\n",(0,r.jsx)(t.p,{children:"Insert the following script to trigger a job:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"import requests\n\n# STEP 1: Enter your workspace ID here\ndomain = 'https://dbc-147abc45-b6c7.cloud.databricks.com'\n# STEP 2: Ensure you have a workspace.token secret created and accessible\ntoken = dbutils.secrets.get(scope='workspace', key='token')\n\nresponse = requests.post(\n    '%s/api/2.1/jobs/run-now' % (domain),\n    headers={'Authorization': 'Bearer %s' % token},\n    # STEP 3: Enter a job_id you'd like to trigger\n    json={'job_id': '549136548916411'}\n)\n\nif response.status_code == 200:\n    print(response.json())\nelse:\n    raise Exception('An error occurred triggering the job. Complete error: %s' % (response.json()))\n"})}),"\n",(0,r.jsx)(t.p,{children:"Make sure to specify the following arguments:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Databricks workspace url - ",(0,r.jsx)(t.a,{href:"https://docs.databricks.com/workspace/workspace-details.html#workspace-instance-names-urls-and-ids",children:"How to find it?"})]}),"\n",(0,r.jsxs)(t.li,{children:["Databricks token - ",(0,r.jsx)(t.a,{href:"https://docs.databricks.com/dev-tools/api/latest/authentication.html#generate-a-personal-access-token",children:"How to generate it?"})]}),"\n",(0,r.jsx)(t.li,{children:"The Databricks job id as previously embedded"}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["Please note, that it's not recommended to store your Databricks token within the code directly, as that creates a\npotential venue for the attacker. A better approach is to leverage Databricks secrets. Check\nout ",(0,r.jsx)(t.a,{href:"https://docs.databricks.com/security/secrets/secrets.html#create-a-secret-in-a-databricks-backed-scope",children:"this guide"}),"\nto learn how to create Databricks secrets."]})})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21114:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/jobs-tigger-trigger-based-b5eed9ac15b9428b382457b81ea37d2f.png"},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var s=i(96540);const r={},n=s.createContext(r);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(n.Provider,{value:t},e.children)}},60567:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/jobs-tigger-time-based-649f522e8ee643b80d9facaf5588b9b8.png"}}]);