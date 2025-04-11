"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[69088],{334:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/aws_create_role_2-b0081cdb92267b0727d1135973afc126.png"},5514:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/mwaa_snowflake_connection-6edda6ec6ff862683cdee3fee5dab2e3.png"},21629:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/aws_create_role-deb67ae5dd2485b56de960a282c45765.png"},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>a});var i=o(96540);const t={},s=i.createContext(t);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(s.Provider,{value:n},e.children)}},30932:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/aws_iamrole_policies2-60b35b894385a47161bf789bcd9f773f.png"},44674:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/Fabric_Create-d23d384a07e74abee7b04879025b6cf6.png"},51164:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/aws_iamrole_policies-0f06d2e0aa64aa178e97059846f25963.png"},55446:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"administration/fabrics/airflow-fabrics/MWAA_fabric","title":"MWAA","description":"How to create a MWAA Airflow fabric","source":"@site/docs/administration/fabrics/airflow-fabrics/mwaa.md","sourceDirName":"administration/fabrics/airflow-fabrics","slug":"/administration/fabrics/airflow-fabrics/MWAA_fabric","permalink":"/prophecy-docs-staging/preview/pr-612/administration/fabrics/airflow-fabrics/MWAA_fabric","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"scheduling","permalink":"/prophecy-docs-staging/preview/pr-612/tags/scheduling"},{"inline":true,"label":"airflow","permalink":"/prophecy-docs-staging/preview/pr-612/tags/airflow"},{"inline":true,"label":"jobs","permalink":"/prophecy-docs-staging/preview/pr-612/tags/jobs"},{"inline":true,"label":"MWAA","permalink":"/prophecy-docs-staging/preview/pr-612/tags/mwaa"},{"inline":true,"label":"fabric","permalink":"/prophecy-docs-staging/preview/pr-612/tags/fabric"}],"version":"current","frontMatter":{"title":"MWAA","id":"MWAA_fabric","description":"How to create a MWAA Airflow fabric","tags":["scheduling","airflow","jobs","MWAA","fabric"]},"sidebar":"adminSidebar","previous":{"title":"Composer","permalink":"/prophecy-docs-staging/preview/pr-612/administration/fabrics/airflow-fabrics/composer_fabric"},"next":{"title":"Open Source","permalink":"/prophecy-docs-staging/preview/pr-612/administration/fabrics/airflow-fabrics/open-source-airflow"}}');var t=o(74848),s=o(28453);const r={title:"MWAA",id:"MWAA_fabric",description:"How to create a MWAA Airflow fabric",tags:["scheduling","airflow","jobs","MWAA","fabric"]},a=void 0,c={},l=[{value:"How to create an MWAA Airflow fabric",id:"how-to-create-an-mwaa-airflow-fabric",level:2},{value:"MWAA Access key auth",id:"mwaa-access-key-auth",level:3},{value:"MWAA IAM Role auth",id:"mwaa-iam-role-auth",level:3},{value:"Setting up Connections",id:"setting-up-connections",level:2},{value:"Setting up Snowflake connection",id:"setting-up-snowflake-connection",level:3},{value:"Create an Airflow Job",id:"create-an-airflow-job",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["You can use Prophecy to connect to your ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/managed-workflows-for-apache-airflow/",children:"Amazon Managed Workflows for Apache Airflow (Amazon MWAA)"})," , to create, run, and monitor your Airflow DAGs.\nFor this, you would need to create a MWAA Airflow fabric."]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-create-an-mwaa-airflow-fabric",children:"How to create an MWAA Airflow fabric"}),"\n",(0,t.jsxs)(n.p,{children:["Setting up a fabric is very straightforward. Click the ",(0,t.jsx)(n.strong,{children:"(1) Create Entity"})," button, and choose the ",(0,t.jsx)(n.strong,{children:"(2) Create Fabric"})," option. The fabric creation is composed of two steps: Basic Info and Providers setup.\nOn the Basic Info screen, enter a ",(0,t.jsx)(n.strong,{children:"(3) Fabric Name"}),", ",(0,t.jsx)(n.strong,{children:"(4) Fabric Description"}),", and choose the ",(0,t.jsx)(n.strong,{children:"(5) Team"})," that\u2019s going to own the fabric."]}),"\n",(0,t.jsxs)(n.p,{children:["Once ready, click ",(0,t.jsx)(n.strong,{children:"(6) Continue"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"CreateFabric",src:o(44674).A+"",width:"2880",height:"1084"})}),"\n",(0,t.jsxs)(n.p,{children:["Since we\u2019re setting up a fabric connected to MWAA Airflow, choose ",(0,t.jsx)(n.strong,{children:"Airflow"})," as the ",(0,t.jsx)(n.strong,{children:"(1) Provider Type"})," and ",(0,t.jsx)(n.strong,{children:"MWAA"})," as the ",(0,t.jsx)(n.strong,{children:"(2) Provider"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Once you select MWAA, you will start seeing fields for credentials.\nMWAA fabric offers two types of authentication."}),"\n",(0,t.jsx)(n.h3,{id:"mwaa-access-key-auth",children:"MWAA Access key auth"}),"\n",(0,t.jsxs)(n.p,{children:["By default, you would see option to provide your Access key and Secret key for authentication. Check ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html",children:"here"})," on how to set up and get your access and secret keys for authentication.\nProvide your ",(0,t.jsx)(n.strong,{children:"(1) Access Key"})," and ",(0,t.jsx)(n.strong,{children:"(2) Secret Key"})," and then select the ",(0,t.jsx)(n.strong,{children:"(3) region"})," where your MWAA Airflow instance is running. Click on ",(0,t.jsx)(n.strong,{children:"(4) Fetch environments"})," to fetch all Airflow instances running in this region."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"MWAA_auth1",src:o(89214).A+"",width:"2880",height:"1726"})}),"\n",(0,t.jsxs)(n.p,{children:["You can now select the Airflow environment for which you want to create the fabric in Prophecy. As you select the ",(0,t.jsx)(n.strong,{children:"(1) Airflow Environment"}),", the ",(0,t.jsx)(n.strong,{children:"(2) Environment name"}),", ",(0,t.jsx)(n.strong,{children:"(3) Airflow URL"})," and ",(0,t.jsx)(n.strong,{children:"(4) DAG Location"})," would be fetched for you.\nThese details are only shown for verification purposes and cannot be edited. Once verified, click ",(0,t.jsx)(n.strong,{children:"(5) Continue"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"MWAA_auth_2",src:o(75888).A+"",width:"2880",height:"1726"})}),"\n",(0,t.jsxs)(n.p,{children:["This completes the fabric Creation and you can start setting up ",(0,t.jsx)(n.a,{href:"#setting-up-connections",children:"Connections"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"mwaa-iam-role-auth",children:"MWAA IAM Role auth"}),"\n",(0,t.jsxs)(n.p,{children:["If you do not wish to provide Access keys and secret keys authentication to Prophecy, you can use ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html",children:"Assume Roles"})," as an alternate authentication mechanism."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Please reach out to Prophecy support team to enable assume role Auth and disable Access keys authentication in your teams."})}),"\n",(0,t.jsxs)(n.p,{children:["To create an AssumeRole for Prophecy, we are going to use ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html",children:"IAM role access across Account"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Go to the Identity and Access Management (IAM) home page in your AWS account, and go to ",(0,t.jsx)(n.strong,{children:"(1)Policies"}),". Click on ",(0,t.jsx)(n.strong,{children:"(2) Create policy"})," ."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"aws_iam_policies",src:o(51164).A+"",width:"2880",height:"1084"})}),"\n",(0,t.jsxs)(n.p,{children:["We need ListEnvironments permission for Airflow, PutObject, GetObject and DeleteObject to the S3 bucket used by your Airflow for uploading DAGs and pipeline Artifacts and CreateCLiToken, GetEnvironment on the Airflow Instance.\nFor simplicity, you can switch to ",(0,t.jsx)(n.strong,{children:"(3) JSON"})," and use below JSON policy and replace values for Airflow Environment and S3 bucket."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "VisualEditor0",\n      "Effect": "Allow",\n      "Action": "airflow:ListEnvironments",\n      "Resource": "*"\n    },\n    {\n      "Sid": "VisualEditor1",\n      "Effect": "Allow",\n      "Action": [\n        "s3:PutObject",\n        "s3:GetObject",\n        "airflow:CreateCliToken",\n        "s3:DeleteObject",\n        "airflow:GetEnvironment"\n      ],\n      "Resource": [\n        "arn:aws:airflow:<location>:<account id>:environment/<mwaa-environment-name>",\n        "arn:aws:s3:::<s3-bucketname>/*"\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Once the permissions are selected (or provided via json), click on ",(0,t.jsx)(n.strong,{children:"(4) Next"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"aws_policies",src:o(30932).A+"",width:"2880",height:"1084"}),"\nGive a **(1) Policy name. Optionally you can add a ",(0,t.jsx)(n.strong,{children:"(2) description"})," too. Once done, click on **(3) Create Policy** to save this."]}),"\n",(0,t.jsxs)(n.p,{children:["Now go to ",(0,t.jsx)(n.strong,{children:"(1) Roles"})," from the left sidebar, and click on ",(0,t.jsx)(n.strong,{children:"(2)Create Role"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"aws_role",src:o(21629).A+"",width:"2880",height:"1084"}),"\nIn Trusted entity type, select ",(0,t.jsx)(n.strong,{children:"(3) AWS Account"})," and select ",(0,t.jsx)(n.strong,{children:"(4)Another AWS account"})," in An AWS account section.",(0,t.jsx)(n.br,{}),"\n","Provide Prophecy's ",(0,t.jsx)(n.strong,{children:"(5) account ID"})," as ",(0,t.jsx)(n.code,{children:"133450206866"}),". And click ",(0,t.jsx)(n.strong,{children:"(6) Next"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"aws_role_2",src:o(334).A+"",width:"2880",height:"1084"}),"\nSelect the Policy which you created just above and click on ",(0,t.jsx)(n.strong,{children:"(1) Next"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Provide a ",(0,t.jsx)(n.strong,{children:"(1)role name"})," and optionally provide a ",(0,t.jsx)(n.strong,{children:"(2)description"}),".\n",(0,t.jsx)(n.strong,{children:"(3)Edit"})," the trusted Select trusted entities Json, to only provide access to ",(0,t.jsx)(n.code,{children:"prophecy-mwaa"})," users created for this auth and not to all Prophecy Users as shown below."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Principal": {\n        "AWS": "arn:aws:iam::133450206866:user/prophecy-mwaa"\n      },\n      "Action": "sts:AssumeRole",\n      "Condition": {}\n    }\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Once done click on ",(0,t.jsx)(n.strong,{children:"(4)create role"}),". The role is created."]}),"\n",(0,t.jsx)(n.p,{children:"Now you can go to the created Role and copy the ARN of this role to be provided in Prophecy fabric."}),"\n",(0,t.jsx)(n.p,{children:"Once the assume role authentication is enabled, you would see below fields for authentication in MWAA fabric."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"MWAA_auth_3",src:o(91641).A+"",width:"2880",height:"1726"})}),"\n",(0,t.jsxs)(n.p,{children:["Here you can provide the AssumeRole created for Prophecy and provide the region where your Airflow instance is running. Once done, click on ",(0,t.jsx)(n.strong,{children:"(3) Fetch environment"})," to list the Airflow Instances which are accessible to provided AssumeRole."]}),"\n",(0,t.jsxs)(n.p,{children:["You can now select the Airflow environment for which you want to create the fabric in Prophecy. As you select the ",(0,t.jsx)(n.strong,{children:"(1) Airflow Environment"}),", the ",(0,t.jsx)(n.strong,{children:"(2) Environment name"}),", ",(0,t.jsx)(n.strong,{children:"(3) Airflow URL"})," and ",(0,t.jsx)(n.strong,{children:"(4) DAG Location"})," would be fetched for you.\nThese details are only shown for verification purposes and cannot be edited. Once verified, click ",(0,t.jsx)(n.strong,{children:"(5) Continue"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"MWAA_auth_2",src:o(75888).A+"",width:"2880",height:"1726"})}),"\n",(0,t.jsx)(n.p,{children:"This completes the fabric creation and you can start setting up Connections."}),"\n",(0,t.jsx)(n.h2,{id:"setting-up-connections",children:"Setting up Connections"}),"\n",(0,t.jsxs)(n.p,{children:["You need Airflow to talk to various other systems in your Data Platform to be able to do certain tasks like sending Email, triggering Spark pipelines, and SQL models.\nFor these, we create ",(0,t.jsx)(n.a,{href:"https://airflow.apache.org/docs/apache-airflow/stable/authoring-and-scheduling/connections.html",children:"connections"})," in Airflow."]}),"\n",(0,t.jsx)(n.p,{children:"You can map connections already created in your MWAA, in the Connections Tab of the fabric.\nProphecy will use these connections to fetch the connection-id to generate the correct Airflow Code when you use these in your Airflow gems."}),"\n",(0,t.jsxs)(n.p,{children:["For adding a connection, Click on ",(0,t.jsx)(n.strong,{children:"(1) Add Connection"})," button. This Opens up the Connection form as shown."]}),"\n",(0,t.jsx)(n.h3,{id:"setting-up-snowflake-connection",children:"Setting up Snowflake connection"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"snowflake",src:o(5514).A+"",width:"2880",height:"1084"}),"\nTo be able to schedule your Snowflake SQL models via Airflow, you need to have a Snowflake Connection over DBT from Airflow to your Snowflake Airflow. You need to create the connection in Airflow and provide the mapping to Prophecy in this form."]}),"\n",(0,t.jsxs)(n.p,{children:["Select ",(0,t.jsx)(n.strong,{children:"(2) Connection Type"})," as Snowflake(DBT), and select the ",(0,t.jsx)(n.strong,{children:"(3) Fabric"})," you have in Prophecy for your desired Snowflake environment. Provide the ",(0,t.jsx)(n.strong,{children:"(4) Profile Directory"})," and ",(0,t.jsx)(n.strong,{children:"(5) Profile Name"})," used while setting up the connection in Airflow."]}),"\n",(0,t.jsxs)(n.p,{children:["Make sure you select the fabric for the same Snowflake environment you have already created the connection for in your Airflow.\nOnce done, hit ",(0,t.jsx)(n.strong,{children:"(4) Save"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"create-an-airflow-job",children:"Create an Airflow Job"}),"\n",(0,t.jsxs)(n.p,{children:["Once the MWAA Airflow fabric is setup with the relevant connections, Airflow job scheduling is done with an easy-to-use interface. Follow this guide to ",(0,t.jsx)(n.a,{href:"/engineers/spark-airflow-tutorial",children:"Create an Airflow job"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},75888:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/MWAA_Auth_2-104a90d039aac6fbf835e2da6e3901bd.png"},89214:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/MWAA_Auth1-1346c0a942f7d780f6988f1ec05f7b0f.png"},91641:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/MWAA_Auth_3-bd533ba19d0d75c9e4c78eea2f921314.png"}}]);