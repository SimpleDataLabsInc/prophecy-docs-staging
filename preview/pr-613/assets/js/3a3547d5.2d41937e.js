"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[96665],{3417:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/dev-qa-prod-be4c5dab33d67936196d5f3660e0e263.png"},7001:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/prophecy-setup-73170a1782cb0235e9e92461bb2741c9.png"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}},31038:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/run-progress-e5e5c558ac5f7224b0cff9b62f14eecb.png"},87953:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"ci-cd/reliable-ci-cd","title":"CI/CD in Prophecy","description":"Continuous integration and continuous delivery in Prophecy","source":"@site/docs/ci-cd/reliable-ci-cd.md","sourceDirName":"ci-cd","slug":"/engineers/ci-cd","permalink":"/prophecy-docs-staging/preview/pr-613/engineers/ci-cd","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"cicd","permalink":"/prophecy-docs-staging/preview/pr-613/tags/cicd"},{"inline":true,"label":"deployment","permalink":"/prophecy-docs-staging/preview/pr-613/tags/deployment"},{"inline":true,"label":"devops","permalink":"/prophecy-docs-staging/preview/pr-613/tags/devops"},{"inline":true,"label":"qa","permalink":"/prophecy-docs-staging/preview/pr-613/tags/qa"},{"inline":true,"label":"testing","permalink":"/prophecy-docs-staging/preview/pr-613/tags/testing"}],"version":"current","frontMatter":{"title":"CI/CD in Prophecy","image":"img/reliable-ci-cd/dev-qa-prod.png","id":"reliable-ci-cd","slug":"/engineers/ci-cd","description":"Continuous integration and continuous delivery in Prophecy","tags":["cicd","deployment","devops","qa","testing"]},"sidebar":"mySidebar","previous":{"title":"Lineage view","permalink":"/prophecy-docs-staging/preview/pr-613/engineers/lineage-view-and-search"},"next":{"title":"Git","permalink":"/prophecy-docs-staging/preview/pr-613/engineers/git"}}');var o=t(74848),s=t(28453);const r={title:"CI/CD in Prophecy",image:"img/reliable-ci-cd/dev-qa-prod.png",id:"reliable-ci-cd",slug:"/engineers/ci-cd",description:"Continuous integration and continuous delivery in Prophecy",tags:["cicd","deployment","devops","qa","testing"]},l=void 0,a={},c=[{value:"Single-fabric development",id:"single-fabric-development",level:2},{value:"Multi-fabric Deployment with Prophecy",id:"multi-fabric-deployment-with-prophecy",level:2},{value:"Development and Production",id:"development-and-production",level:3},{value:"Entities setup",id:"entities-setup",level:4},{value:"Development and Testing",id:"development-and-testing",level:4},{value:"Deployment to Production",id:"deployment-to-production",level:4},{value:"Multi-fabric Deployment with GitHub",id:"multi-fabric-deployment-with-github",level:2},{value:"Deploy with Prophecy Build Tool",id:"deploy-with-prophecy-build-tool",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Continuous Integration and Continuous Delivery (CI/CD)"})," streamlines software development by automating testing and deployment. With ",(0,o.jsx)(n.strong,{children:"CI"}),", code changes are frequently integrated and tested to catch issues early. ",(0,o.jsx)(n.strong,{children:"CD"})," ensures that once approved, tested code is automatically deployed to production, enabling fast and reliable releases. Continue reading to learn about how to implement CI/CD in Prophecy."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Data pipeline",src:t(3417).A+"",width:"3000",height:"1604"})}),"\n",(0,o.jsx)(n.h2,{id:"single-fabric-development",children:"Single-fabric development"}),"\n",(0,o.jsx)(n.p,{children:"Consider a simple scenario in which you have a single execution environment (like one Databricks workspace). One team works in this environment for both development and productionization. To accommodate this in Prophecy, you will have:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Multiple projects"}),": your Git repositories which store all the Spark, Airflow, and metadata code"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Multiple data pipelines"}),": various ETL / ELT tasks written in Spark"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Multiple jobs"}),": the orchestration of your data pipelines written in Databricks jobs or Airflow"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"A single team"}),": all your teammates in the same place, with the same access"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"A single fabric"}),": the connection to your Databricks workspace"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Minimum project setup",src:t(90919).A+"",width:"3200",height:"1338"})}),"\n",(0,o.jsxs)(n.p,{children:["This is great for simple setups and very small teams, but can quickly lead to many problems. In such a setup, it's very easy for you and your teammates to make mistakes and ",(0,o.jsx)(n.strong,{children:"accidentally affect production"})," pipelines. There's also ",(0,o.jsx)(n.strong,{children:"lack of data separation"}),", so any PII information becomes visible to everyone!"]}),"\n",(0,o.jsx)(n.h2,{id:"multi-fabric-deployment-with-prophecy",children:"Multi-fabric Deployment with Prophecy"}),"\n",(0,o.jsxs)(n.p,{children:["Let's consider a better alternative to a single environment development. The simplest alternative involves adding just one more execution environment called ",(0,o.jsx)(n.strong,{children:"production"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["By separating your ",(0,o.jsx)(n.strong,{children:"development"})," or QA use-cases from your ",(0,o.jsx)(n.strong,{children:"production"})," use-cases, you get:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"PII safety (by using mock or anonymized data)"}),"\n",(0,o.jsx)(n.li,{children:"Faster development (by using smaller data samples)"}),"\n",(0,o.jsx)(n.li,{children:"Reduced development costs (by using smaller cluster sizes)"}),"\n",(0,o.jsx)(n.li,{children:"Increased data quality confidence (by only pushing code after tests and validations pass)"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You can push your code to the ",(0,o.jsx)(n.strong,{children:"production environment"})," only after you're confident it's going to work well. The production environment has access to your real data, uses large optimal clusters, and has significantly restricted access. In some cases, only the operational support teams should have access to your production environment."]}),"\n",(0,o.jsxs)(n.p,{children:["If you'd like to involve more stages, to even further increase the reliability of your development process, you can add a ",(0,o.jsx)(n.strong,{children:"QA environment"}),". That environment should have data, hardware, and software that closely simulates the Production environment (e.g. data slices directly taken from production), and should serve as a holding area. Using QA, your engineers make sure that the jobs are going to run smoothly in the production environment, without actually potentially breaking production, if some code is wrong."]}),"\n",(0,o.jsx)(n.h3,{id:"development-and-production",children:"Development and Production"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Prophecy Setup",src:t(7001).A+"",width:"3200",height:"2006"})}),"\n",(0,o.jsxs)(n.p,{children:["For our example, however, let's focus on a setup with two environments: ",(0,o.jsx)(n.strong,{children:"Development"})," and ",(0,o.jsx)(n.strong,{children:"Production"}),". Our ",(0,o.jsx)(n.strong,{children:"Development environment"})," is accessible to our whole organization (developers, analysts, support) and is connected to our development Databricks workspace, which contains only dummy customer data. Whereas, our ",(0,o.jsx)(n.strong,{children:"Production environment"})," is only accessible to our production support team and is connected to our production Databricks workspace, which has real customer data."]}),"\n",(0,o.jsx)(n.h4,{id:"entities-setup",children:"Entities setup"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Create two ",(0,o.jsx)(n.strong,{children:"teams"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"developers"})," - a superset of all the teams, which contains your developers and members of the ",(0,o.jsx)(n.code,{children:"prod_support"})," team"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"prod_support"})," - team composed of members who have privileged production access permissions"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Create two ",(0,o.jsx)(n.strong,{children:"fabrics"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"development"})," - owned by the ",(0,o.jsx)(n.code,{children:"developers"})," team"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"production"})," - owned by the ",(0,o.jsx)(n.code,{children:"prod_support"})," team"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Set up your ",(0,o.jsx)(n.strong,{children:"Projects"}),": create your projects, as you would before. Projects should be owned by the ",(0,o.jsx)(n.code,{children:"developers"})," ",(0,o.jsx)(n.em,{children:"team"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Set up your ",(0,o.jsx)(n.strong,{children:"jobs"}),": for every single set of pipelines you'd like to schedule, create two jobs."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Job_development"}),": Jobs built by the ",(0,o.jsx)(n.code,{children:"developers"})," for integration and testing purposes"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Job_production"}),": Jobs built by the ",(0,o.jsx)(n.code,{children:"prod_support"})," team, based on the development jobs - they will run in the production environment"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)("div",{style:{position:"relative","padding-bottom":"56.25%",height:0},children:(0,o.jsx)("iframe",{src:"https://www.loom.com/embed/b9669f374f504e469b2f88374bcf35d3",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})}),"\n",(0,o.jsx)(n.h4,{id:"development-and-testing",children:"Development and Testing"}),"\n",(0,o.jsx)(n.p,{children:"Phew, that was a lot of work! But the biggest chunk is behind us \ud83d\udcaa."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Run Progress",src:t(31038).A+"",width:"8212",height:"2322"})}),"\n",(0,o.jsx)(n.p,{children:"Now that we have set up our fabrics and Teams, built some pipelines, it's time to test the whole data flow on our development environment."}),"\n",(0,o.jsx)(n.p,{children:"Testing your pipelines and jobs is very simple. Simple click on the play button and watch your code run!"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"Currently, we're spinning up a new cluster for each of the tasks, therefore your job might take a few minutes\nto complete."})}),"\n",(0,o.jsx)(n.h4,{id:"deployment-to-production",children:"Deployment to Production"}),"\n",(0,o.jsxs)(n.p,{children:["Once we're confident that our job works correctly, and we have tested it well, we can start deploying it to our ",(0,o.jsx)(n.strong,{children:"production"})," environment. In our setup, only a production support engineer can do that. Therefore, login as them,\nduplicate your job on the production fabric, set appropriate pipeline configurations and enable it."]}),"\n",(0,o.jsx)(n.p,{children:"That's it! Now you can commit any remaining changes and release your pipeline. Prophecy automatically takes care of the release process, by building your pipelines, running unit tests, and finally deploying the pipeline JARs/wheels alongside the job definition directly to Databricks (or AirFlow)."}),"\n",(0,o.jsxs)(n.p,{children:["If you're new to this process, check out, our ",(0,o.jsx)(n.a,{href:"/engineers/git",children:"Git"})," and jobs deployment documentation."]}),"\n",(0,o.jsx)("div",{style:{position:"relative","padding-bottom":"56.25%",height:0},children:(0,o.jsx)("iframe",{src:"https://www.loom.com/embed/28153636876f409184e6ba2dcbc8f273",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})}),"\n",(0,o.jsx)(n.h2,{id:"multi-fabric-deployment-with-github",children:"Multi-fabric Deployment with GitHub"}),"\n",(0,o.jsx)(n.p,{children:"So far, we looked at how Prophecy makes it really easy to deploy our jobs to multiple environments, directly using the CI / CD system built into it. However, it is often the case that you want to deploy your pipelines from your Git instead. This enables you to have a more secure production environment, where it doesn't have to connect to directly Prophecy itself."}),"\n",(0,o.jsx)(n.p,{children:"As we know, Prophecy publishes all the entities (pipelines, jobs, metadata, etc) directly on your Git. That means you can very easily deploy that code to whatever Databricks environment you'd like - very easily."}),"\n",(0,o.jsx)(n.h3,{id:"deploy-with-prophecy-build-tool",children:"Deploy with Prophecy Build Tool"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/engineers/prophecy-build-tool",children:"Prophecy Build Tool (PBT)"})," is a cli tool that can be used to build, test, and deploy projects created by Prophecy. PBT integrates with either ",(0,o.jsx)(n.a,{href:"/engineers/github-actions-prophecy-build-tool",children:"github actions"})," or ",(0,o.jsx)(n.a,{href:"/engineers/jenkins-prophecy-build-tool",children:"Jenkins"})," to facilitate deploying your code from your Git repository. Make use of the ",(0,o.jsx)(n.code,{children:"--fabric-ids"})," option to deploy using the Multi-fabric approach."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},90919:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/min-project-setup-4098dd2390227337f38e9acda6980177.png"}}]);