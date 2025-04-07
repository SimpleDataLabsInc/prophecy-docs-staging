"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[88358],{895:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/configuredataproc-de836f1a36174699c6b423a4020b1468.png"},914:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/createkey-df185df0c31ff443686691fe7acf65d5.png"},3235:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/selectdataproc-c2d482f0c1741fbcdff9d93c38fe857e.png"},27254:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/proclib-3851b837a56dad4601bdb874c93b4191.png"},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>t});var i=r(96540);const s={},c=i.createContext(s);function a(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(c.Provider,{value:n},e.children)}},37867:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/bucketloc-daf4b54c4bce9935598c9fd2697f7673.png"},44318:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/selectenv-b717862604ca2782864c0295f3004b0d.png"},49684:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"administration/fabrics/Spark-fabrics/gcp-dataproc-fabric-guide","title":"Google Cloud Dataproc","description":"Configure a GCP Dataproc fabric","source":"@site/docs/administration/fabrics/Spark-fabrics/dataproc.md","sourceDirName":"administration/fabrics/Spark-fabrics","slug":"/administration/fabrics/Spark-fabrics/gcp-dataproc-fabric-guide","permalink":"/prophecy-docs-staging/preview/pr-605/administration/fabrics/Spark-fabrics/gcp-dataproc-fabric-guide","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"deployment","permalink":"/prophecy-docs-staging/preview/pr-605/tags/deployment"},{"inline":true,"label":"configuration","permalink":"/prophecy-docs-staging/preview/pr-605/tags/configuration"},{"inline":true,"label":"google","permalink":"/prophecy-docs-staging/preview/pr-605/tags/google"},{"inline":true,"label":"gcp","permalink":"/prophecy-docs-staging/preview/pr-605/tags/gcp"},{"inline":true,"label":"dataproc","permalink":"/prophecy-docs-staging/preview/pr-605/tags/dataproc"},{"inline":true,"label":"livy","permalink":"/prophecy-docs-staging/preview/pr-605/tags/livy"}],"version":"current","sidebarPosition":8,"frontMatter":{"title":"Google Cloud Dataproc","id":"gcp-dataproc-fabric-guide","description":"Configure a GCP Dataproc fabric","sidebar_position":8,"tags":["deployment","configuration","google","gcp","dataproc","livy"]},"sidebar":"adminSidebar","previous":{"title":"Amazon EMR","permalink":"/prophecy-docs-staging/preview/pr-605/administration/fabrics/Spark-fabrics/emr"},"next":{"title":"Azure Synapse","permalink":"/prophecy-docs-staging/preview/pr-605/administration/fabrics/Spark-fabrics/azure-synapse-fabric-guide"}}');var s=r(74848),c=r(28453);const a={title:"Google Cloud Dataproc",id:"gcp-dataproc-fabric-guide",description:"Configure a GCP Dataproc fabric",sidebar_position:8,tags:["deployment","configuration","google","gcp","dataproc","livy"]},t=void 0,o={},l=[{value:"Requirements",id:"requirements",level:2},{value:"Create a Dataproc Cluster",id:"create-a-dataproc-cluster",level:2},{value:"Create a Dataproc fabric",id:"create-a-dataproc-fabric",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Livy Cluster Cannot Access Scala or Python Libraries",id:"livy-cluster-cannot-access-scala-or-python-libraries",level:3}];function d(e){const n={br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"In the context of Spark execution engines, users have the flexibility to opt for Google Cloud Dataproc. This guide offers step-by-step instructions on creating a fabric that enables seamless connectivity to the Dataproc environment."}),"\n",(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsx)(n.p,{children:"Livy must be installed on your cluster. Prophecy provides a script required to deploy a Dataproc cluster."}),"\n",(0,s.jsx)(n.h2,{id:"create-a-dataproc-cluster",children:"Create a Dataproc Cluster"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If you don't already have a private key, create a private key for the service account that you're using."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Dataproc security",src:r(914).A+"",width:"2658",height:"1414"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Ensure you have the following permissions configured."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'gcloud projects add-iam-policy-binding <project-name> \\\n--member "<service-account-name>" \\\n--role "roles/serviceusage.serviceUsageViewer"\n\ngcloud projects add-iam-policy-binding <project-name> \\\n--member "<service-account-name>" \\\n--role "roles/dataproc.worker"\n\ngcloud projects add-iam-policy-binding core-shard-398601 \\\n--member "<service-account-name>" \\\n--role "storage.objects.get"\n\ngcloud storage buckets add-iam-policy-binding gs://<bucket-name> \\\n--member="<service-account-name>" --role=roles/storage.admin --project <project-name>\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Associate secret key to service account."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"gcloud config set account meitestserviceaccount@core-shard-398601.iam.gserviceaccount.com \\\n--key-file=<local-private-key-location>\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Start a Dataproc cluster using ",(0,s.jsx)(n.code,{children:"install-livy.sh"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:' gcloud dataproc clusters create <cluster-name> \\\n--scopes <permission-scope> \\\n--region <cluster-region> \\\n--initialization-actions \'gs://prophecy-public-gcp/livy-installer-script/install-livy.sh\' \\\n--properties "hive:hive.metastore.warehouse.dir=<gs://bucket/datasets>" \\\n--metadata "enable-cloud-sql-proxy-on-workers=false" \\\n--bucket <cluster-data-bucket-name> \\\n--region <region> \\\n--zone <zone> \\\n--single-node \\\n--master-machine-type n2-standard-4 \\\n--master-boot-disk-size 500 \\\n--image-version 2.0-debian10 \\\n--project <project-name> \\\n--service-account="<service-account-name>" \\\n--dataproc-metastore=projects/<project-name>/locations/<region>/services/<metastore-service-name>\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"create-a-dataproc-fabric",children:"Create a Dataproc fabric"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create a fabric and select ",(0,s.jsx)(n.strong,{children:"Dataproc"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"select dataproc",src:r(3235).A+"",width:"1610",height:"1120"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Fill out your ",(0,s.jsx)(n.strong,{children:"Project Name"})," and ",(0,s.jsx)(n.strong,{children:"Region"}),", and upload the ",(0,s.jsx)(n.strong,{children:"Private Key"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"configure dataproc",src:r(895).A+"",width:"1590",height:"1108"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click on ",(0,s.jsx)(n.strong,{children:"Fetch environments"})," and select the Dataproc ",(0,s.jsx)(n.strong,{children:"cluster"})," that you created earlier."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"select cluster",src:r(44318).A+"",width:"1638",height:"1130"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Leave everything as default and provide the ",(0,s.jsx)(n.strong,{children:"Livy URL"}),". Locate the ",(0,s.jsx)(n.strong,{children:"External IP"})," of your cluster instance. Optionally, you may configure the DNS instead of using the IP. The URL is ",(0,s.jsx)(n.code,{children:"http://<external-ip>:8998"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"livy ip",src:r(63457).A+"",width:"2762",height:"1456"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Configure the bucket associated with your cluster."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"bucket location",src:r(37867).A+"",width:"1568",height:"778"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Add the ",(0,s.jsx)(n.strong,{children:"Job Size"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Job Size",src:r(75285).A+"",width:"1054",height:"940"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Configure Scala Library Path.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"gs://prophecy-public-gcp/prophecy-scala-libs/"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Configure Python Library Path.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"gs://prophecy-public-gcp/prophecy-python-libs/"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"dependencies",src:r(27254).A+"",width:"2558",height:"1156"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click on ",(0,s.jsx)(n.strong,{children:"Complete"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(n.h3,{id:"livy-cluster-cannot-access-scala-or-python-libraries",children:"Livy Cluster Cannot Access Scala or Python Libraries"}),"\n",(0,s.jsx)(n.p,{children:"It is possible to encounter the following error message when using a Dataproc fabric."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Creating new Livy Session...\nUsing prophecy libs path...repo1.maven.org...\nUsing python libraries...files.pythonhosted.org...\n...\norg.apache.spark.deploy.SparkSubmit.main(SparkSubmit.scala)\\n\\nYARN Diagnostics: ","level":"error"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Here are some ways to resolve the issue and allow successful Livy session creation."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Adjust Network Settings"}),": Ensure the Livy Cluster allows outbound traffic to:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Scala Library URL: ",(0,s.jsx)(n.code,{children:"repo1.maven.org"})]}),"\n",(0,s.jsxs)(n.li,{children:["Python Library URL: ",(0,s.jsx)(n.code,{children:"files.pythonhosted.org"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Configure Library Paths"}),": Manually set the library paths:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Scala Library Path: ",(0,s.jsx)(n.code,{children:"gs://prophecy-public-gcp/prophecy-scala-libs/"})]}),"\n",(0,s.jsxs)(n.li,{children:["Python Library Path: ",(0,s.jsx)(n.code,{children:"gs://prophecy-public-gcp/prophecy-python-libs/"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Use an Internal GCS Bucket"}),": Host the required libraries internally by creating two folders in a GCS bucket and placing ",(0,s.jsx)(n.code,{children:"prophecy-scala-libs"})," and ",(0,s.jsx)(n.code,{children:"prophecy-python-libs"})," inside."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},63457:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/externalip-14d94f9be32eb3313cd74a434d232955.png"},75285:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/procjobsize-bea0c95d10965dae7f92b60097ba9f52.png"}}]);