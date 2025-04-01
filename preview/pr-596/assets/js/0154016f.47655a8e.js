"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[27972],{28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var s=i(96540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}},28574:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"Orchestration/airflow/airflow-tutorial-spark","title":"Build an Airflow job","description":"A tutorial on orchestrating Spark and SQL jobs with Airflow","source":"@site/docs/Orchestration/airflow/airflow-tutorial-spark.md","sourceDirName":"Orchestration/airflow","slug":"/Orchestration/airflow/airflow-tutorial-spark","permalink":"/prophecy-docs-staging/preview/pr-596/Orchestration/airflow/airflow-tutorial-spark","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"airflow","permalink":"/prophecy-docs-staging/preview/pr-596/tags/airflow"},{"inline":true,"label":"tutorial","permalink":"/prophecy-docs-staging/preview/pr-596/tags/tutorial"}],"version":"current","frontMatter":{"title":"Build an Airflow job","id":"airflow-tutorial-spark","description":"A tutorial on orchestrating Spark and SQL jobs with Airflow","tags":["airflow","tutorial"]},"sidebar":"mySidebar","previous":{"title":"Airflow","permalink":"/prophecy-docs-staging/preview/pr-596/Orchestration/airflow/"},"next":{"title":"Databricks Jobs","permalink":"/prophecy-docs-staging/preview/pr-596/Orchestration/databricks-jobs"}}');var t=i(74848),r=i(28453);const o={title:"Build an Airflow job",id:"airflow-tutorial-spark",description:"A tutorial on orchestrating Spark and SQL jobs with Airflow",tags:["airflow","tutorial"]},l=void 0,a={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Create Airflow fabric",id:"create-airflow-fabric",level:2},{value:"Add an AWS connection",id:"add-an-aws-connection",level:3},{value:"Add an email connection",id:"add-an-email-connection",level:3},{value:"Add a Databricks Spark connection",id:"add-a-databricks-spark-connection",level:3},{value:"Create an Airflow job",id:"create-an-airflow-job",level:2},{value:"Add a S3 file Sensor gem",id:"add-a-s3-file-sensor-gem",level:3},{value:"Add an email gem",id:"add-an-email-gem",level:3},{value:"Add a Spark pipeline gem",id:"add-a-spark-pipeline-gem",level:3},{value:"Run and debug",id:"run-and-debug",level:2},{value:"Release and deploy",id:"release-and-deploy",level:2},{value:"Monitor",id:"monitor",level:2},{value:"What\u2019s next",id:"whats-next",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Let's build a job with Airflow (or an ",(0,t.jsx)(n.a,{href:"https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/dags.html",children:"Airflow DAG"}),") to schedule and run your Spark and SQL pipelines. In this tutorial, you will:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create a Prophecy-managed Airflow fabric and connections to AWS, Email, and Databricks."}),"\n",(0,t.jsx)(n.li,{children:"Configure an Airflow job to run when a new file is uploaded to an S3 bucket."}),"\n",(0,t.jsx)(n.li,{children:"Configure the same job to send an email notification prior to pipeline execution."}),"\n",(0,t.jsx)(n.li,{children:"Run, debug, and enable the job."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsx)(n.p,{children:"This tutorial requires:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A Databricks account"}),"\n",(0,t.jsx)(n.li,{children:"A Prophecy project with a Spark pipeline"}),"\n",(0,t.jsx)(n.li,{children:"An AWS account with an S3 bucket"}),"\n",(0,t.jsx)(n.li,{children:"An email account and access to SMTP settings"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"create-airflow-fabric",children:"Create Airflow fabric"}),"\n",(0,t.jsx)(n.p,{children:"To run an Airflow job, you need to define an environment where you will run the job. Therefore, you need to create an Airflow fabric."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Click the ",(0,t.jsx)(n.strong,{children:"Create Entity"})," button."]}),"\n",(0,t.jsxs)(n.li,{children:["Choose ",(0,t.jsx)(n.strong,{children:"Create Fabric"})," option."]}),"\n",(0,t.jsxs)(n.li,{children:["On the Basic Info page:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Enter a ",(0,t.jsx)(n.strong,{children:"Fabric Name"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Enter a ",(0,t.jsx)(n.strong,{children:"Fabric Description"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Choose the ",(0,t.jsx)(n.strong,{children:"Team"})," that will own the fabric."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Continue"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Configure the Provider information.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Choose ",(0,t.jsx)(n.strong,{children:"Prophecy Managed"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Continue"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"add-an-aws-connection",children:"Add an AWS connection"}),"\n",(0,t.jsx)(n.p,{children:"In order to trigger your Airflow job using an S3 File Sensor, you need to add an AQS connection in your Airflow fabric. In the Connections tab of the fabric setup:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Click on the ",(0,t.jsx)(n.strong,{children:"+ Add Connection"})," button."]}),"\n",(0,t.jsxs)(n.li,{children:["Select AWS in ",(0,t.jsx)(n.strong,{children:"Connection Type"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Provide a ",(0,t.jsx)(n.strong,{children:"Connection Name"})," to identify your connection."]}),"\n",(0,t.jsxs)(n.li,{children:["Add a ",(0,t.jsx)(n.strong,{children:"Description"})," of your choice."]}),"\n",(0,t.jsxs)(n.li,{children:["Provide the ",(0,t.jsx)(n.strong,{children:"AWS Access Key ID"})," and ",(0,t.jsx)(n.strong,{children:"AWS Secret Access Key"}),". Visit the ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html",children:"AWS site"})," to learn how to access these keys."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save"})," to establish the connection."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Add_AWS_connection",src:i(49455).A+"",width:"2880",height:"1726"})}),"\n",(0,t.jsx)(n.h3,{id:"add-an-email-connection",children:"Add an email connection"}),"\n",(0,t.jsx)(n.p,{children:"Next, we'll add an email connection that will be used to send emails on your behalf."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Click on the ",(0,t.jsx)(n.strong,{children:"+ Add Connection"})," button."]}),"\n",(0,t.jsxs)(n.li,{children:["Select Email in ",(0,t.jsx)(n.strong,{children:"Connection Type"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Provide a ",(0,t.jsx)(n.strong,{children:"Connection Name"})," to identify your connection."]}),"\n",(0,t.jsxs)(n.li,{children:["Add a ",(0,t.jsx)(n.strong,{children:"Description"})," of your choice."]}),"\n",(0,t.jsxs)(n.li,{children:["Provide the ",(0,t.jsx)(n.strong,{children:"(4) Host"})," as your SMTP host example ",(0,t.jsx)(n.code,{children:"smtp.gmail.com"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Provide the login credentials for this server in ",(0,t.jsx)(n.strong,{children:"(5)Login"})," and ",(0,t.jsx)(n.strong,{children:"(6)Password"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Add your SMTP port in the ",(0,t.jsx)(n.strong,{children:"Port"})," field."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save"})," to establish the connection."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Add_Email_connection.png",src:i(41617).A+"",width:"2880",height:"1726"})}),"\n",(0,t.jsx)(n.h3,{id:"add-a-databricks-spark-connection",children:"Add a Databricks Spark connection"}),"\n",(0,t.jsx)(n.p,{children:"To run your Databricks pipelines, you need to make a connection to your Databricks environment."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Click on the ",(0,t.jsx)(n.strong,{children:"+ Add Connection"})," button."]}),"\n",(0,t.jsxs)(n.li,{children:["Select Databricks (Spark) in ",(0,t.jsx)(n.strong,{children:"Connection Type"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Under ",(0,t.jsx)(n.strong,{children:"Fabric"}),", select a Databricks Spark fabric. This must be created beforehand."]}),"\n",(0,t.jsxs)(n.li,{children:["Optionally, provide a description in the ",(0,t.jsx)(n.strong,{children:"Description"})," box."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save"})," to establish the connection."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Add_DB_Spark_connection.png",src:i(58480).A+"",width:"2880",height:"1726"})}),"\n",(0,t.jsx)(n.h2,{id:"create-an-airflow-job",children:"Create an Airflow job"}),"\n",(0,t.jsx)(n.p,{children:"A job contains gems that perform various tasks (running pipelines/models/scripts, etc.) that you can schedule to run at a certain frequency. Every job represents an Airflow DAG. Let's create a job."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Click the ",(0,t.jsx)(n.strong,{children:"Create Entity"})," button."]}),"\n",(0,t.jsxs)(n.li,{children:["Choose ",(0,t.jsx)(n.strong,{children:"Job"})," option."]}),"\n",(0,t.jsxs)(n.li,{children:["Select the ",(0,t.jsx)(n.strong,{children:"project"})," in which you want to create the job. This project should contain at least one Spark pipeline."]}),"\n",(0,t.jsxs)(n.li,{children:["Pick your development ",(0,t.jsx)(n.strong,{children:"branch"}),". Here you can pick an existing branch for development, or create a new one."]}),"\n",(0,t.jsxs)(n.li,{children:["Provide a ",(0,t.jsx)(n.strong,{children:"Name"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Pick ",(0,t.jsx)(n.strong,{children:"Airflow"})," as the scheduler."]}),"\n",(0,t.jsxs)(n.li,{children:["Select the ",(0,t.jsx)(n.strong,{children:"fabric"})," that you just created."]}),"\n",(0,t.jsxs)(n.li,{children:["Fill in a ",(0,t.jsx)(n.strong,{children:"Schedule"})," that defines the job frequency. You can modify this at any time."]}),"\n",(0,t.jsxs)(n.li,{children:["Add a ",(0,t.jsx)(n.strong,{children:"Description"})," about the job you are creating."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Create New"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Create_Job",src:i(97786).A+"",width:"2880",height:"1084"})}),"\n",(0,t.jsxs)(n.p,{children:["This will take you to the ",(0,t.jsx)(n.strong,{children:"job editor"})," where you can start building the job."]}),"\n",(0,t.jsx)(n.h3,{id:"add-a-s3-file-sensor-gem",children:"Add a S3 file Sensor gem"}),"\n",(0,t.jsx)(n.p,{children:"In the job editor canvas:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Click on ",(0,t.jsx)(n.strong,{children:"Sensors"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Drag the ",(0,t.jsx)(n.strong,{children:"S3FileSensor"})," gem from the dropdown to the canvas."]}),"\n",(0,t.jsxs)(n.li,{children:["Click and open the newly added gem to view the gem configurations.\n",(0,t.jsx)(n.img,{alt:"Add_S3_gem",src:i(92568).A+"",width:"2880",height:"1084"})]}),"\n",(0,t.jsx)(n.li,{children:"Specify the S3 bucket/path that we will track to trigger the job."}),"\n",(0,t.jsxs)(n.li,{children:["In ",(0,t.jsx)(n.strong,{children:"S3 Path(s)"}),", specify the complete path of file in your bucket. Airflow will check if this file exists in the specified bucket periodically and trigger the job when it arrives."]}),"\n",(0,t.jsxs)(n.li,{children:["Select the created Connection for AWS in ",(0,t.jsx)(n.strong,{children:"Connection name"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save"}),".\n",(0,t.jsx)(n.img,{alt:"Add_S3_gem_details",src:i(82976).A+"",width:"2880",height:"1726"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"add-an-email-gem",children:"Add an email gem"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Click on ",(0,t.jsx)(n.strong,{children:"Trigger/Notify"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Drag the ",(0,t.jsx)(n.strong,{children:"Email"})," gem from the dropdown to the canvas."]}),"\n",(0,t.jsx)(n.li,{children:"Connect the sensor gem output to the email gem input."}),"\n",(0,t.jsxs)(n.li,{children:["Click and open the newly added gem to view the gem configurations.\n",(0,t.jsx)(n.img,{alt:"Add_email_gem",src:i(31722).A+"",width:"2880",height:"1084"})]}),"\n",(0,t.jsxs)(n.li,{children:["In ",(0,t.jsx)(n.strong,{children:"To"}),", add your Email id where you want to receive the notification Email when the job is triggered."]}),"\n",(0,t.jsxs)(n.li,{children:["Select the ",(0,t.jsx)(n.strong,{children:"Connection name"}),", you created for Email."]}),"\n",(0,t.jsxs)(n.li,{children:["You can provide a ",(0,t.jsx)(n.strong,{children:"Subject"})," for the Email"]}),"\n",(0,t.jsxs)(n.li,{children:["Add ",(0,t.jsx)(n.strong,{children:"Email content"})," that will populate the body of the email. For example, you can add an Airflow parameter available to access the execution time in a job."]}),"\n",(0,t.jsx)(n.li,{children:"Optionally, add CC and BCC email addresses."}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save"}),".\n",(0,t.jsx)(n.img,{alt:"Add_email_gem_details",src:i(78632).A+"",width:"2880",height:"1726"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"add-a-spark-pipeline-gem",children:"Add a Spark pipeline gem"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Click on ",(0,t.jsx)(n.strong,{children:"Spark/SQL"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Drag the ",(0,t.jsx)(n.strong,{children:"DatabricksPipeline"})," gem from the dropdown to the canvas."]}),"\n",(0,t.jsx)(n.li,{children:"Connect the email gem output to the pipeline gem input."}),"\n",(0,t.jsxs)(n.li,{children:["Click and open the newly added gem to view the gem configurations.\n",(0,t.jsx)(n.img,{alt:"Add_Pipeline_Gem",src:i(81e3).A+"",width:"2880",height:"1084"})]}),"\n",(0,t.jsxs)(n.li,{children:["Select the ",(0,t.jsx)(n.strong,{children:"Pipeline to schedule"})," you want to run."]}),"\n",(0,t.jsx)(n.li,{children:"Select the configuration to use during the scheduled pipeline run."}),"\n",(0,t.jsxs)(n.li,{children:["Pick ",(0,t.jsx)(n.strong,{children:"Fabric and Cluster size to run this pipeline"})," for running this pipeline in Databricks."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save"}),".\n",(0,t.jsx)(n.img,{alt:"Add_pipeline_gem_details",src:i(74696).A+"",width:"2880",height:"1726"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"run-and-debug",children:"Run and debug"}),"\n",(0,t.jsx)(n.p,{children:"Now that your job is ready, you can go ahead and run it."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Click on the ",(0,t.jsx)(n.strong,{children:"Run"})," button to trigger an on-demand run. This creates a temporary DAG and uploads to Airflow."]}),"\n",(0,t.jsxs)(n.li,{children:["When you click on run, you will see a Job Details Toaster.\n",(0,t.jsx)(n.img,{alt:"Run_job",src:i(28651).A+"",width:"1440",height:"542"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click on ",(0,t.jsx)(n.strong,{children:"Details"})," to open the detailed logs of the run."]}),"\n",(0,t.jsx)(n.li,{children:"Review all the steps involved in the run and also detailed logs for each step."}),"\n",(0,t.jsxs)(n.li,{children:["Click on ",(0,t.jsx)(n.strong,{children:"+"})," button to open the logs for a particular step.\n",(0,t.jsx)(n.img,{alt:"Run_job_logs",src:i(98626).A+"",width:"2880",height:"1726"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"release-and-deploy",children:"Release and deploy"}),"\n",(0,t.jsx)(n.p,{children:"Once you have developed and tested the job, it\u2019s time to commit and push the code to the project Git repository and release the job to Airflow."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Open Git workflow",src:i(43501).A+"",width:"2880",height:"1726"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Start by toggling our job to be ",(0,t.jsx)(n.strong,{children:"Enabled"}),". Once you release the project, Airflow will recognize that this job is enabled."]}),"\n",(0,t.jsxs)(n.li,{children:["Open the Git workflow by clicking the ",(0,t.jsx)(n.strong,{children:"Release"})," button in the project header or clicking the ",(0,t.jsx)(n.strong,{children:"Commit button"})," in the project footer."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Commit"})," your changes. This saves the current state of your project to your branch."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Pull"})," any upstream or remote changes. This ensures that your branch is up-to-date with collaborators' changes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Merge"}),' your changes into the main project branch. The main branch should contain the "official" version of your project. Use a ',(0,t.jsx)(n.strong,{children:"Pull Request"})," to merge your changes if the main branch is protected."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Release"})," your changes. When you release your project, you create a new ",(0,t.jsx)(n.strong,{children:"version"})," of it. At this point, your job will be built and deployed on Airflow."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Release_screen",src:i(74267).A+"",width:"2880",height:"1726"})}),"\n",(0,t.jsx)(n.h2,{id:"monitor",children:"Monitor"}),"\n",(0,t.jsx)(n.p,{children:"During the release process, Prophecy automatically packages, tests, and deploys your jobs to Airflow. Once the process is finished, you can see the deployed and running job within your Airflow environment."}),"\n",(0,t.jsx)(n.h2,{id:"whats-next",children:"What\u2019s next"}),"\n",(0,t.jsx)(n.p,{children:"Great work! You've created an Airflow job in Prophecy, ran it successfully, released, scheduled, and monitored the job."}),"\n",(0,t.jsxs)(n.p,{children:["If you ever encounter any difficulties, don't hesitate to reach out to us (",(0,t.jsx)(n.a,{href:"mailto:contact.us@Prophecy.io",children:"contact.us@Prophecy.io"}),") or join our ",(0,t.jsx)(n.a,{href:"https://prophecy-io-support.slack.com/join/shared_invite/zt-moq3xzoj-~5MSJ6WPnZfz7bwsqWi8tQ#/shared-invite/email",children:"Slack community"})," for assistance. We're here to help!"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28651:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/3.18_Run_Job-c74a733a23a3662c9b2c4b204e5d6e77.png"},31722:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/3.12_Add_email_gem-f2bba81229a0f484fdc25e31628bd56c.png"},41617:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/3.5_Email_connection-6f392517477fe16388989d4f089be6ed.png"},43501:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/3.20_start_commit-7a8c082c2fa41a0cafdafe163f6165fc.png"},49455:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/3.4_AWS_Connection-4c3d3bfbc9c76e839dcbb6d4e1ef3584.png"},58480:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/3.6_DB_Spark_connection-51d1e9b4ff69f1e17085ec10d3654309.png"},74267:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/3.24_release_screen-b32cb4fe551f57d51245adbc73e8a84d.png"},74696:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/3.15_Add_pipeline_gem_details-eeb2d4df18f9331c0a63cfdc96143c49.png"},78632:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/3.13_Add_email_gem_details-da3c19e263c58acfb80a805ecd66952f.png"},81e3:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/3.14_Add_pipeline_gem-45d2e7e3d46a095c899b6af03a1d4814.png"},82976:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/3.11_Add_s3_gem_details-54d44ee280c2cf7fceae32152dbedd46.png"},92568:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/3.10_Add_s3_gem-2a946a09ee73912bc8abaa7b6f0a5160.png"},97786:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/3.9_Create_Job-9fb3cbc0e3246cb19970d24284235919.png"},98626:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/3.19_Run_Job_logs-0323f46acaadbf4f38db46f45a8de52f.png"}}]);