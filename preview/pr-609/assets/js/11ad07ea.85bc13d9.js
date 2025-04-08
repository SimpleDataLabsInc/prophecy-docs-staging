"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[57275],{10377:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/branch_protection_checks_example-7e8c4c644e13a1ba1063b02c12bc69bf.png"},11564:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/jenkins-pipeline-type-4d7aeee7bb2244684372f0837a48065e.png"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var s=i(96540);const t={},l=s.createContext(t);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(l.Provider,{value:n},e.children)}},35749:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/github-push-webhook-config-9a4804406cd4f55fa64138d3a7a53104.png"},36186:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/github-pat-permissions-1159de9b446912b916366bc151617d44.png"},39093:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/finding_fabric_id-87410893ebcaca3eacb01a38c64cb5b8.png"},39855:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/hello-cicd-declarative-test_configure-43413747f1aeb0f70cf6e1cf48bd5423.png"},57716:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/hello-cicd-declarative-test_configure-trigger-b06bc1a9f59b1e5464626785ebb61bd3.png"},61184:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"ci-cd/prophecy-build-tool/prophecy-build-tool-jenkins","title":"PBT on Jenkins","description":"Example Usage of Prophecy Build Tool on Jenkins","source":"@site/docs/ci-cd/prophecy-build-tool/pbt-jenkins.md","sourceDirName":"ci-cd/prophecy-build-tool","slug":"/engineers/jenkins-prophecy-build-tool","permalink":"/prophecy-docs-staging/preview/pr-609/engineers/jenkins-prophecy-build-tool","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"metadata","permalink":"/prophecy-docs-staging/preview/pr-609/tags/metadata"},{"inline":true,"label":"build","permalink":"/prophecy-docs-staging/preview/pr-609/tags/build"},{"inline":true,"label":"deploy","permalink":"/prophecy-docs-staging/preview/pr-609/tags/deploy"},{"inline":true,"label":"test","permalink":"/prophecy-docs-staging/preview/pr-609/tags/test"},{"inline":true,"label":"cli","permalink":"/prophecy-docs-staging/preview/pr-609/tags/cli"},{"inline":true,"label":"continuous integration","permalink":"/prophecy-docs-staging/preview/pr-609/tags/continuous-integration"},{"inline":true,"label":"continuous deployment","permalink":"/prophecy-docs-staging/preview/pr-609/tags/continuous-deployment"},{"inline":true,"label":"cicd","permalink":"/prophecy-docs-staging/preview/pr-609/tags/cicd"},{"inline":true,"label":"jenkins","permalink":"/prophecy-docs-staging/preview/pr-609/tags/jenkins"}],"version":"current","frontMatter":{"title":"PBT on Jenkins","id":"prophecy-build-tool-jenkins","slug":"/engineers/jenkins-prophecy-build-tool","description":"Example Usage of Prophecy Build Tool on Jenkins","tags":["metadata","build","deploy","test","cli","continuous integration","continuous deployment","cicd","jenkins"]},"sidebar":"mySidebar","previous":{"title":"PBT on GitHub Actions","permalink":"/prophecy-docs-staging/preview/pr-609/engineers/github-actions-prophecy-build-tool"},"next":{"title":"Orchestration","permalink":"/prophecy-docs-staging/preview/pr-609/engineers/orchestration"}}');var t=i(74848),l=i(28453);const o={title:"PBT on Jenkins",id:"prophecy-build-tool-jenkins",slug:"/engineers/jenkins-prophecy-build-tool",description:"Example Usage of Prophecy Build Tool on Jenkins",tags:["metadata","build","deploy","test","cli","continuous integration","continuous deployment","cicd","jenkins"]},r=void 0,p={},a=[{value:"Example GitHub Repo",id:"example-github-repo",level:2},{value:"Context of the Jenkins CI/CD Example",id:"context-of-the-jenkins-cicd-example",level:2},{value:"Preparation",id:"preparation",level:2},{value:"Jenkins plugins",id:"jenkins-plugins",level:3},{value:"Jenkins Secrets",id:"jenkins-secrets",level:3},{value:"FABRIC_ID",id:"fabric_id",level:3},{value:"Testing pipeline",id:"testing-pipeline",level:2},{value:"Testing pipeline - Pipeline Creation",id:"testing-pipeline---pipeline-creation",level:3},{value:"Testing pipeline - Trigger",id:"testing-pipeline---trigger",level:3},{value:"Testing pipeline - Pipeline Code",id:"testing-pipeline---pipeline-code",level:3},{value:"Testing pipeline - Explanation of Stages",id:"testing-pipeline---explanation-of-stages",level:3},{value:"Deploy pipeline",id:"deploy-pipeline",level:2},{value:"Deploy pipeline - Pipeline Creation",id:"deploy-pipeline---pipeline-creation",level:3},{value:"Deploy Pipeline - Trigger",id:"deploy-pipeline---trigger",level:3},{value:"Deploy Pipeline - Pipeline Code",id:"deploy-pipeline---pipeline-code",level:3},{value:"Deploy Pipeline - Explanation of Pipeline",id:"deploy-pipeline---explanation-of-pipeline",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"example-github-repo",children:(0,t.jsx)(n.a,{href:"https://github.com/prophecy-samples/external-cicd-template",children:"Example GitHub Repo"})}),"\n",(0,t.jsx)(n.h2,{id:"context-of-the-jenkins-cicd-example",children:"Context of the Jenkins CI/CD Example"}),"\n",(0,t.jsxs)(n.p,{children:['In this section we will explore how to set up separate "testing" and "deploying" Jenkins jobs using declarative pipelines. These jobs will be triggered when items are merged into the following protected branches\n',(0,t.jsx)(n.code,{children:"prod"}),", ",(0,t.jsx)(n.code,{children:"qa"}),", ",(0,t.jsx)(n.code,{children:"develop"}),". Each of these three branches represents a different Databricks Workspace environment. We\nwant to be able to test and deploy our pipelines into each of these three workspaces during our release workflow."]}),"\n",(0,t.jsxs)(n.p,{children:["The release process on GitHub is defined as merging and testing to branches in the following\norder: ",(0,t.jsx)(n.code,{children:"feature-branch"})," > ",(0,t.jsx)(n.code,{children:"develop"})," > ",(0,t.jsx)(n.code,{children:"qa"})," > ",(0,t.jsx)(n.code,{children:"prod"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"branch_protection_checks_example.png",src:i(10377).A+"",width:"1042",height:"252"}),"\n",(0,t.jsx)(n.em,{children:"When PRs are made to a protected branch, the unit tests must pass before the PR can be merged"})]}),"\n",(0,t.jsx)(n.p,{children:"Once the PR is merged successfully, we deploy the artifacts and job definitions to Databricks."}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"The Git project for this example will soon be made publicly available. To keep as much\nof the CICD logic attached to the Git project itself, we will store the Jenkinsfiles\ndirectly in the repo and only store the Jenkins Triggers and Credentials in the Jenkins\nserver."}),(0,t.jsxs)(n.p,{children:["This example is currently designed for Pyspark pipelines. To use the same recipe\nfor Scala pipelines, just make sure ",(0,t.jsx)(n.code,{children:"JDK 11"})," is installed on your Jenkins nodes."]})]}),"\n",(0,t.jsx)(n.h2,{id:"preparation",children:"Preparation"}),"\n",(0,t.jsx)(n.p,{children:"You should have access to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"a Git repo with an existing Prophecy project"}),"\n",(0,t.jsx)(n.li,{children:"a Jenkins Server where you can create new pipelines and credentials"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"jenkins-plugins",children:"Jenkins plugins"}),"\n",(0,t.jsx)(n.p,{children:"The following plugins were used for this example:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://plugins.jenkins.io/ghprb/",children:"GitHub Pull Request Builder"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"for the build/test job"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://plugins.jenkins.io/github/",children:"GitHub"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"for the deploy job"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"These plugins may have published vulnerabilities for older versions of Jenkins.\nPlease make sure to check with your Jenkins server admin or\nsecurity admin before installing any plugins."})}),"\n",(0,t.jsx)(n.h3,{id:"jenkins-secrets",children:"Jenkins Secrets"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"You may require more or less secrets depending on the number of workspaces you\nare deploying to."})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["DEMO_DATABRICKS_HOST","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["the hostname for our Databricks workspace that houses our ",(0,t.jsx)(n.code,{children:"qa"})," and ",(0,t.jsx)(n.code,{children:"dev"})," environments."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["DEMO_DATBRICKS_TOKEN","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"the token for DATABRICKS_HOST"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["PROD_DATABRICKS_HOST","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["the hostname for our Databricks workspace that houses our ",(0,t.jsx)(n.code,{children:"prod"})," environment."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["PROD_DATBRICKS_TOKEN","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"the token for PROD_DATABRICKS_HOST"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"fabric_id",children:"FABRIC_ID"}),"\n",(0,t.jsx)(n.p,{children:"Find the Fabric IDs for your fabrics by navigating to the Metadata page of that Fabric and observing the URL."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Metadata"})," > ",(0,t.jsx)(n.code,{children:"Fabrics"})," > ",(0,t.jsx)(n.code,{children:"<your Fabric>"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"finding_fabric_id.png",src:i(39093).A+"",width:"668",height:"532"})}),"\n",(0,t.jsx)(n.h2,{id:"testing-pipeline",children:"Testing pipeline"}),"\n",(0,t.jsx)(n.p,{children:"This pipeline uses PBT to validate the pipelines and run all Prophecy unit tests."}),"\n",(0,t.jsx)(n.h3,{id:"testing-pipeline---pipeline-creation",children:"Testing pipeline - Pipeline Creation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a Jenkins pipeline\n",(0,t.jsx)(n.img,{alt:"jenkins-pipeline-type.png",src:i(11564).A+"",width:"2330",height:"344"})]}),"\n",(0,t.jsx)(n.li,{children:"Configure the GitHub project URL"}),"\n",(0,t.jsx)(n.li,{children:"Choose GitHub Pull Request Builder as the trigger type."}),"\n",(0,t.jsxs)(n.li,{children:["Provide credentials to GitHub","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["creating a fine-grained Personal Acces Token (PAT) in GitHub. The PAT should be\nscoped to yourself or your Organization, have access to the repository containing the Prophecy project, and\nappropriate permissions:\n",(0,t.jsx)(n.img,{alt:"github-pat-permissions.png",src:i(36186).A+"",width:"1716",height:"554"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Choose pipeline Script from SCM"}),"\n",(0,t.jsx)(n.li,{children:"Provide the path to our Jenkinsfile within the repo"}),"\n"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:" Refer to this image for all settings. "}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"hello-cicd-declarative-test_configure.png",src:i(39855).A+"",width:"1044",height:"2932"})})]}),"\n",(0,t.jsx)(n.h3,{id:"testing-pipeline---trigger",children:"Testing pipeline - Trigger"}),"\n",(0,t.jsxs)(n.p,{children:["We use the ",(0,t.jsx)(n.a,{href:"https://plugins.jenkins.io/ghprb/",children:"GitHub Pull Request Builder"})," to trigger any time there is a new pull request or a change\non a pull request (comment or new commit) to our special branches: ",(0,t.jsx)(n.code,{children:"develop"}),", ",(0,t.jsx)(n.code,{children:"qa"}),", ",(0,t.jsx)(n.code,{children:"prod"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"By providing GitHub credentials to the GHPRB plugin it will be able to automatically\ncreate webhooks in GitHub."}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:" Refer to this image for all settings. "}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"hello-cicd-declarative-test_configure-trigger.png",src:i(57716).A+"",width:"1116",height:"3591"})})]}),"\n",(0,t.jsx)(n.h3,{id:"testing-pipeline---pipeline-code",children:"Testing pipeline - Pipeline Code"}),"\n",(0,t.jsx)(n.p,{children:"Create a Groovy Jenkinsfile in the project repository at the below location (relative to root)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:".jenkins/deploy-declarative.groovy\n"})}),"\n",(0,t.jsx)(n.p,{children:"Use the following code as a template, replacing the URLs as necessary:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-groovy",children:'pipeline {\n    agent any\n    environment {\n        PROJECT_PATH = "./hello_project"\n        VENV_NAME = ".venv"\n    }\n    stages {\n        stage(\'checkout\') {\n            steps {\n                git branch: \'${ghprbSourceBranch}\', credentialsId: \'jenkins-cicd-runner-demo\', url: \'git@github.com:prophecy-samples/external-cicd-template.git\'\n                sh "apt-get install -y python3-venv"\n            }\n        }\n        stage(\'install pbt\') {\n            steps {\n                sh """#!/bin/bash -xe\n                python3 --version\n                if [[ ! -d "$VENV_NAME" ]]; then\n                    python3 -m venv $VENV_NAME\n                fi\n                source ./$VENV_NAME/bin/activate\n                python3 -m pip install -U pip\n                python3 -m pip install -U build pytest wheel pytest-html pyspark prophecy-build-tool\n                """\n            }\n        }\n        stage(\'validate\') {\n            steps {\n                sh """\n                . ./$VENV_NAME/bin/activate\n                python3 -m pbt validate --path $PROJECT_PATH\n                """\n            }\n        }\n        stage(\'test\') {\n            steps {\n                sh """\n                . ./$VENV_NAME/bin/activate\n                python3 -m pbt test --path $PROJECT_PATH\n                """\n            }\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"testing-pipeline---explanation-of-stages",children:"Testing pipeline - Explanation of Stages"}),"\n",(0,t.jsx)(n.p,{children:"The pipeline performs the following actions in order:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["('checkout') SCM checkout of the Prophecy project from Git","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Since we are using the GHRPB plugin to trigger this pipeline, it will checkout the code\nthe source branch that triggered the PR with the special provided environment variable\n",(0,t.jsx)(n.code,{children:"${ghprbSourceBranch}"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"('install pbt') Install PBT and its dependencies to our Jenkins worker node"}),"\n",(0,t.jsx)(n.li,{children:"('valiadate') Use PBT to validate the pipelines do not have any syntactical errors."}),"\n",(0,t.jsx)(n.li,{children:"('test') Use PBT to run unit tests defined in the Prophecy pipelines"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Each invocation of ",(0,t.jsx)(n.code,{children:"sh"})," in the Jenkins pipeline runs in its own shell context. For this reason we\nsource the venv containing the ",(0,t.jsx)(n.code,{children:"pbt"})," tool at the beginning of each ",(0,t.jsx)(n.code,{children:"sh"})," command."]})}),"\n",(0,t.jsx)(n.h2,{id:"deploy-pipeline",children:"Deploy pipeline"}),"\n",(0,t.jsx)(n.p,{children:"This pipeline uses PBT to deploy the Prophecy pipelines to their appropriate fabrics."}),"\n",(0,t.jsx)(n.h3,{id:"deploy-pipeline---pipeline-creation",children:"Deploy pipeline - Pipeline Creation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a Jenkins Pipeline\n",(0,t.jsx)(n.img,{alt:"jenkins-pipeline-type.png",src:i(11564).A+"",width:"2330",height:"344"})]}),"\n",(0,t.jsx)(n.li,{children:'Choose "GitHub hook for GITScm polling" as the trigger.'}),"\n",(0,t.jsx)(n.li,{children:'Choose "Pipeline from SCM" with our GitHub repo as the repository'}),"\n",(0,t.jsxs)(n.li,{children:["Choose the branches to trigger on (",(0,t.jsx)(n.code,{children:"develop"}),", ",(0,t.jsx)(n.code,{children:"qa"}),", ",(0,t.jsx)(n.code,{children:"prod"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:['Point the "Script path" ',(0,t.jsx)(n.a,{href:"#deploy-pipeline---pipeline-code",children:"to our Jenkinsfile"})," containing the deploy logic"]}),"\n"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:" Refer to this image for all settings. "}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"hello-cicd-declarative-deploy_configure.png",src:i(99530).A+"",width:"1031",height:"2748"})})]}),"\n",(0,t.jsx)(n.h3,{id:"deploy-pipeline---trigger",children:"Deploy Pipeline - Trigger"}),"\n",(0,t.jsx)(n.p,{children:"Set up a simple webhook trigger for this job inside of GitHub."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Navigate to ",(0,t.jsx)(n.code,{children:"Settings > Webhooks > Add Webhook"})]}),"\n",(0,t.jsxs)(n.li,{children:["Create a new webhook like this:\n",(0,t.jsx)(n.img,{alt:"github-push-webhook-config.png",src:i(35749).A+"",width:"2398",height:"1644"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"deploy-pipeline---pipeline-code",children:"Deploy Pipeline - Pipeline Code"}),"\n",(0,t.jsx)(n.p,{children:"Create a Groovy Jenkinsfile in the project repository at the below location (relative to root)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:".jenkins/test-declarative.groovy\n"})}),"\n",(0,t.jsx)(n.p,{children:"Use the following code as a template, replacing the fabric IDs and URLs as necessary:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-groovy",children:'def DEFAULT_FABRIC = "1174"\ndef fabricPerBranch = [\n        prod: "4004",\n        qa: "4005",\n        develop: DEFAULT_FABRIC\n]\n\npipeline {\n    agent any\n    environment {\n        DATABRICKS_HOST =  credentials("${env.GIT_BRANCH == "prod" ? "DEMO_PROD_DATABRICKS_HOST" : "DEMO_DATABRICKS_HOST"}")\n        DATABRICKS_TOKEN = credentials("${env.GIT_BRANCH == "prod" ? "DEMO_PROD_DATABRICKS_TOKEN" : "DEMO_DATABRICKS_TOKEN"}")\n\n        PROJECT_PATH = "./hello_project"\n        VENV_NAME = ".venv"\n        FABRIC_ID = fabricPerBranch.getOrDefault("${env.GIT_BRANCH}", DEFAULT_FABRIC)\n    }\n    stages {\n        stage(\'prepare system\') {\n            steps {\n                sh "apt-get install -y python3-venv"\n            }\n        }\n        stage(\'install pbt\') {\n            steps {\n                sh """#!/bin/bash -xe\n                python3 --version\n                if [[ ! -d "$VENV_NAME" ]]; then\n                    python3 -m venv $VENV_NAME\n                fi\n                source ./$VENV_NAME/bin/activate\n                python3 -m pip install -U pip\n                python3 -m pip install -U build pytest wheel pytest-html pyspark prophecy-build-tool\n                """\n            }\n        }\n        stage(\'deploy\') {\n            steps {\n                sh """\n                . ./$VENV_NAME/bin/activate\n                python3 -m pbt deploy --fabric-ids $FABRIC_ID --path $PROJECT_PATH\n                """\n            }\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"deploy-pipeline---explanation-of-pipeline",children:"Deploy Pipeline - Explanation of Pipeline"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"('environment' block) - Choose which Prophecy fabric / Databricks Workspace to deploy jobs to."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"The DATABRICKS_HOST and DATABRICKS_TOKEN env variables must match the configuration of the fabric we are attempting to deploy."})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["('prepare system') - Ensure python3 is available on worker nodes. You can skip this if your Jenkins nodes already have ",(0,t.jsx)(n.code,{children:"python3-venv"})," installed."]}),"\n",(0,t.jsx)(n.li,{children:"('install pbt') - Ensure PBT and its dependencies are installed"}),"\n",(0,t.jsxs)(n.li,{children:["('deploy') - use PBT to deploy the Databricks jobs for our chosen fabric","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Builds all the pipelines present in the project and generates a .jar/.whl artifact for each pipeline"}),"\n",(0,t.jsx)(n.li,{children:"Uploads the pipeline .jar/.whl artifacts for each of the deployed jobs (next step)"}),"\n",(0,t.jsxs)(n.li,{children:["Creates or Updates the Databricks jobs based on ",(0,t.jsx)(n.code,{children:"databricks-job.json"})," files for the Prophecy project (only those that use ",(0,t.jsx)(n.code,{children:"$FABRIC_ID"}),")"]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},99530:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/hello-cicd-declarative-deploy_configure-2359b5c143b60c247f5696e5b012c097.png"}}]);