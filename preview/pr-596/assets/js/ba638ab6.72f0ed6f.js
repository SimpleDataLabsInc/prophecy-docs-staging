"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[71540],{28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var d=r(96540);const s={},n=d.createContext(s);function i(e){const t=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(n.Provider,{value:t},e.children)}},81731:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});const d=JSON.parse('{"id":"administration/saas/audit-logging","title":"Syncing audit logs from SaaS","description":"Prophecy Audit logs available to be exported in S3","source":"@site/docs/administration/saas/configure-audit-logging.md","sourceDirName":"administration/saas","slug":"/administration/saas/audit-logging","permalink":"/prophecy-docs-staging/preview/pr-596/administration/saas/audit-logging","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"audit logs","permalink":"/prophecy-docs-staging/preview/pr-596/tags/audit-logs"},{"inline":true,"label":"s3","permalink":"/prophecy-docs-staging/preview/pr-596/tags/s-3"},{"inline":true,"label":"reference","permalink":"/prophecy-docs-staging/preview/pr-596/tags/reference"}],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Syncing audit logs from SaaS","id":"audit-logging","description":"Prophecy Audit logs available to be exported in S3","sidebar_position":7,"tags":["audit logs","s3","reference"]},"sidebar":"adminSidebar","previous":{"title":"Databricks OAuth","permalink":"/prophecy-docs-staging/preview/pr-596/databricks-oauth-authentication"},"next":{"title":"Cloud architectures","permalink":"/prophecy-docs-staging/preview/pr-596/administration/saas/cloud-architectures"}}');var s=r(74848),n=r(28453);const i={title:"Syncing audit logs from SaaS",id:"audit-logging",description:"Prophecy Audit logs available to be exported in S3",sidebar_position:7,tags:["audit logs","s3","reference"]},c=void 0,l={},a=[{value:"Configure S3 bucket for logs",id:"configure-s3-bucket-for-logs",level:2},{value:"Audit events",id:"audit-events",level:2}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Prophecy provides access to audit logs of activities performed by Prophecy users, allowing your enterprise to monitor detailed usage patterns.\nThe Prophecy admin can configure a S3 bucket to sync these events from Prophecy to their environment."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["This is only available for SaaS and requires manual effort. Please ",(0,s.jsx)(t.a,{href:"https://www.prophecy.io/request-a-demo",children:"contact us"})," to learn more about this in detail."]})}),"\n",(0,s.jsx)(t.p,{children:"An empty AWS S3 bucket with read/write permissions is required. Follow the guidelines below to set up the bucket correctly."}),"\n",(0,s.jsx)(t.h2,{id:"configure-s3-bucket-for-logs",children:"Configure S3 bucket for logs"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Create the S3 Bucket:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Log in to your AWS account and navigate to the S3 service."}),"\n",(0,s.jsx)(t.li,{children:'Click on "Create Bucket" to initiate the bucket creation process.'}),"\n",(0,s.jsxs)(t.li,{children:["Choose a unique name for your bucket, following the format: ",(0,s.jsx)(t.code,{children:"prophecy-customer-backend-events-xyz"}),", where ",(0,s.jsx)(t.code,{children:"xyz"})," represents your name or any identifier of your choice."]}),"\n",(0,s.jsxs)(t.li,{children:["Select the desired AWS Region for the bucket. Ideally, choose the ",(0,s.jsx)(t.code,{children:"us-east-1 (N. Virginia)"}),". If this region is not available, please inform us which region you selected as it requires additional configuration on our end."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Set Object Ownership:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["After creating the bucket, ensure that the object ownership is set to ",(0,s.jsx)(t.code,{children:"ACLs disabled (recommended)"}),". This can be done during or after the bucket creation process."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Configuring Bucket Permissions for Prophecy:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Open the newly created bucket in the AWS Management Console."}),"\n",(0,s.jsx)(t.li,{children:'Go to the "Permissions" section and locate the "Bucket Policy" tab.'}),"\n",(0,s.jsx)(t.li,{children:"Apply the following permissions to allow Prophecy's IAM role to sync S3 objects using AWS DataSync."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'{\n  "Version": "2008-10-17",\n  "Statement": [\n    {\n      "Sid": "DataSyncCreateS3LocationAndTaskAccess",\n      "Effect": "Allow",\n      "Principal": {\n        "AWS": "arn:aws:iam::133450206866:role/AWSDataSyncS3BucketAccessCustomerBackendEventsRole"\n      },\n      "Action": [\n        "s3:GetBucketLocation",\n        "s3:ListBucket",\n        "s3:ListBucketMultipartUploads",\n        "s3:AbortMultipartUpload",\n        "s3:GetObject",\n        "s3:ListMultipartUploadParts",\n        "s3:PutObject",\n        "s3:GetObjectTagging",\n        "s3:PutObjectTagging",\n        "s3:DeleteObject"\n      ],\n      "Resource": [\n        "arn:aws:s3:::prophecy-customer-backend-events-xyz",\n        "arn:aws:s3:::prophecy-customer-backend-events-xyz/*"\n      ]\n    },\n    {\n      "Sid": "DataSyncCreateS3Location",\n      "Effect": "Allow",\n      "Principal": {\n        "AWS": "arn:aws:iam::133450206866:user/s3access"\n      },\n      "Action": "s3:ListBucket",\n      "Resource": "arn:aws:s3:::prophecy-customer-backend-events-xyz"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["In the sample above, replace ",(0,s.jsx)(t.code,{children:"arn:aws:s3:::prophecy-customer-backend-events-xyz"})," with the ARN of your destination bucket."]}),"\n",(0,s.jsxs)(t.p,{children:["Note that we need the Prophecy user principal (",(0,s.jsx)(t.code,{children:"s3access"}),") to be able to create S3 location at Prophecy's account and hence require this role with Sid ",(0,s.jsx)(t.code,{children:"DataSyncCreateS3Location"}),".\nPlease ",(0,s.jsx)(t.a,{href:"mailto:success@Prophecy.io",children:"contact us"})," with bucket ARN and region to enable this in your account."]}),"\n",(0,s.jsx)(t.h2,{id:"audit-events",children:"Audit events"}),"\n",(0,s.jsx)(t.p,{children:"This table lists events for each Entity/Action along with the Request parameters grouped by the entity."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"Prophecy Uses GraphQL queries so you may find some difference in Request and Response parameters depending upon where the Queries are used from."})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Entity"}),(0,s.jsx)(t.th,{children:"Query"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Request Parameters"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Fabric"}),(0,s.jsx)(t.td,{children:"fabricDetailQuery"}),(0,s.jsx)(t.td,{children:"Get Fabric Details"}),(0,s.jsx)(t.td,{children:'["id"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"addFabric"}),(0,s.jsx)(t.td,{children:"Add a Fabric"}),(0,s.jsx)(t.td,{children:'["name", "ownerUid"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"updateOwnedBy"}),(0,s.jsx)(t.td,{children:"Update Team owing the Fabric"}),(0,s.jsx)(t.td,{children:'["id","targetUid"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"userFabricQuery"}),(0,s.jsx)(t.td,{children:"Get all Fabrics for User"}),(0,s.jsx)(t.td,{children:'["uid"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Project"}),(0,s.jsx)(t.td,{children:"addProject"}),(0,s.jsx)(t.td,{children:"Add a project"}),(0,s.jsx)(t.td,{children:'["name","forkMode","language", "ownerUid", "mainBranchModificationAllowed"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"getDetails"}),(0,s.jsx)(t.td,{children:"Get Details of a Project"}),(0,s.jsx)(t.td,{children:'["projectId"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"project"}),(0,s.jsx)(t.td,{children:"List all projects for User"}),(0,s.jsx)(t.td,{children:'["uid"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"teamProjectAvailable"}),(0,s.jsx)(t.td,{children:"Available Projects for that Team"}),(0,s.jsx)(t.td,{children:'["uid", "language"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"addProjectDependency"}),(0,s.jsx)(t.td,{children:"Add a dependency Project to Current"}),(0,s.jsx)(t.td,{children:'["projectId", "DependencyProjectUid"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"updateProjectDependency"}),(0,s.jsx)(t.td,{children:"Update dependency Project to a new released version"}),(0,s.jsx)(t.td,{children:'["projectId", "DependencyProjectUid", "ReleaseTag"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"removeProjectDependency"}),(0,s.jsx)(t.td,{children:"Removed an added dependency"}),(0,s.jsx)(t.td,{children:'["projectId", "DependencyProjectUid"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"projectDependenciesQuery"}),(0,s.jsx)(t.td,{children:"List all project Dependencies"}),(0,s.jsx)(t.td,{children:'["projectId"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"projectReleaseStatus"}),(0,s.jsx)(t.td,{children:"Gives Status of last Release for given project"}),(0,s.jsx)(t.td,{children:'["projectID", "statuses"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"projectSyncFromGit"}),(0,s.jsx)(t.td,{children:"Status of Git sync of project"}),(0,s.jsx)(t.td,{children:'["uid"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"releaseProject"}),(0,s.jsx)(t.td,{children:"Release a Project"}),(0,s.jsx)(t.td,{children:'["branch", "message","version","projectID", "CommitHash"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"gitFooter"}),(0,s.jsx)(t.td,{children:"Details for Git for commit/branchNAme etc"}),(0,s.jsx)(t.td,{children:'["projectID"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"addSubscriberToProject"}),(0,s.jsx)(t.td,{children:"Add Subscriber to a Project"}),(0,s.jsx)(t.td,{children:'["uid", "teamId"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"projectBranches"}),(0,s.jsx)(t.td,{children:"List of available branches for this project"}),(0,s.jsx)(t.td,{children:'["projectId"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"cloneProject"}),(0,s.jsx)(t.td,{children:"Created clone of current project"}),(0,s.jsx)(t.td,{children:'["uid", "name", "teamUid", "copyMainBranchReleaseTags"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Pipeline"}),(0,s.jsx)(t.td,{children:"addPipeline"}),(0,s.jsx)(t.td,{children:"Add a new Pipeline"}),(0,s.jsx)(t.td,{children:'["name", "branch", "ownerId", "doCheckout"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"tableQueryPipeline"}),(0,s.jsx)(t.td,{children:"Lists all pipelines for project"}),(0,s.jsx)(t.td,{children:'["projectId", "sortOrder", "sortColumn"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"tableQueryPipeline"}),(0,s.jsx)(t.td,{children:"Lists all pipelines for User"}),(0,s.jsx)(t.td,{children:'["uid", "sortOrder", "sortColumn"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"pipelineDetailsQuery"}),(0,s.jsx)(t.td,{children:"Get Details of Pipeline"}),(0,s.jsx)(t.td,{children:'["Uid"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"clonePipeline"}),(0,s.jsx)(t.td,{children:"Cloned a Pipeline"}),(0,s.jsx)(t.td,{children:'["branch", "sourcePipelineId", "targetPipelineName", "ownerUid", "doCheckout"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"addSubgraph"}),(0,s.jsx)(t.td,{children:"When Subgraph is added to a Pipeline"}),(0,s.jsx)(t.td,{children:'["mode", "name", "language", "ownerUID"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"addUDFBulk"}),(0,s.jsx)(t.td,{children:"UDFs added to a Project"}),(0,s.jsx)(t.td,{children:'["udfs.name","udfs.description", "projectUID"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"removeUDFBulk"}),(0,s.jsx)(t.td,{children:"UDFs removed form a project"}),(0,s.jsx)(t.td,{children:'["uids"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"getSubgraph"}),(0,s.jsx)(t.td,{children:"Get Subgraph by given Id"}),(0,s.jsx)(t.td,{children:'["uid"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Job"}),(0,s.jsx)(t.td,{children:"addJob"}),(0,s.jsx)(t.td,{children:"Add a Job"}),(0,s.jsx)(t.td,{children:'["name", "branch","fabricUID", "scheduler", "doCheckout", "projectUID"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"updateJobConfiguration"}),(0,s.jsx)(t.td,{children:"Job configurations are updated"}),(0,s.jsx)(t.td,{children:'["emails", "jobUID", "enabled", "onStart", "fabricId", "onFailure", "onSuccess", "clusterMode", "scheduleCron"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"latestJobReleaseByJobIdAndFabricID"}),(0,s.jsx)(t.td,{children:"Get Jobs Release by Fabric Id"}),(0,s.jsx)(t.td,{children:'["jobUID", "fabricUID"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"jobReleaseByProjectRelease"}),(0,s.jsx)(t.td,{children:"Gets Jobs Released by Project ID"}),(0,s.jsx)(t.td,{children:'["projectReleaseUID"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"jobQuery"}),(0,s.jsx)(t.td,{children:"Geta a Job by gievn Id"}),(0,s.jsx)(t.td,{children:'["uid"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"addJobRelease"}),(0,s.jsx)(t.td,{children:"Adds a Job released mapping to project Release"}),(0,s.jsx)(t.td,{children:'["jobUID", "fabricUID", "scheduler", "schedulerJobUID", "projectReleaseUID"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"tableQueryJob"}),(0,s.jsx)(t.td,{children:"list query for Jobs"}),(0,s.jsx)(t.td,{children:'["uid", "sortOrder", "sortColumn"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Dataset"}),(0,s.jsx)(t.td,{children:"queryDataset"}),(0,s.jsx)(t.td,{children:"When Datasets are queried from any page"}),(0,s.jsx)(t.td,{children:'["uid", "optionalProjectUID"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"addDataset"}),(0,s.jsx)(t.td,{children:"Added a new Dataset"}),(0,s.jsx)(t.td,{children:'["mode", "name", "ownerUID", "fabricUID", "datasetType"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"addMultipleDatasets"}),(0,s.jsx)(t.td,{children:"Add Multiple Datasets"}),(0,s.jsx)(t.td,{children:'["names", "ownerUID", "tableNameList", "schemaNameList", "descriptionsList", "schemaAspectList", "databaseNamesList]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Team"}),(0,s.jsx)(t.td,{children:"addTeam"}),(0,s.jsx)(t.td,{children:"Added a new Team"}),(0,s.jsx)(t.td,{children:'["name", "adminUid"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"getUserTeam"}),(0,s.jsx)(t.td,{children:"Get Teams for a User"}),(0,s.jsx)(t.td,{children:'["uid"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"addteamAdmin"}),(0,s.jsx)(t.td,{children:"Add a user as Admin"}),(0,s.jsx)(t.td,{children:'["teamUid", "userUid", "invitationAccepted"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"user"}),(0,s.jsx)(t.td,{children:"List All teams for Users with Members"}),(0,s.jsx)(t.td,{children:'["uid"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"User"}),(0,s.jsx)(t.td,{children:"getUser"}),(0,s.jsx)(t.td,{children:"Get User"}),(0,s.jsx)(t.td,{children:'["email"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"tableQueryUser"}),(0,s.jsx)(t.td,{children:"List query for the User"}),(0,s.jsx)(t.td,{children:'["uid", "sortOrder", "sortColumn"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"userAllFabricInfoAspect"}),(0,s.jsx)(t.td,{children:"Get User Details"}),(0,s.jsx)(t.td,{children:'["uid"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"setPassword"}),(0,s.jsx)(t.td,{children:"user Sets a new Password"}),(0,s.jsx)(t.td,{children:'["uid", "newPassword"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Git"}),(0,s.jsx)(t.td,{children:"deleteBranch"}),(0,s.jsx)(t.td,{children:"Deleted a Branch"}),(0,s.jsx)(t.td,{children:'["projectId", "branchName"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"checkout"}),(0,s.jsx)(t.td,{children:"Checkout a new branch"}),(0,s.jsx)(t.td,{children:'["projectId" , "branchName"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"prCreationRedirectUrl"}),(0,s.jsx)(t.td,{children:"Pr Creation button clicked"}),(0,s.jsx)(t.td,{children:'["to", "from", "projectId"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"createPR"}),(0,s.jsx)(t.td,{children:"Pr Creation button clicked"}),(0,s.jsx)(t.td,{children:'["to", "from", "toFork", "fromFork":, "projectId"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"cleanCommit"}),(0,s.jsx)(t.td,{children:"Committed any changes"}),(0,s.jsx)(t.td,{children:'["message", "projectId"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"commit"}),(0,s.jsx)(t.td,{children:"Commit button clicked"}),(0,s.jsx)(t.td,{children:'["branch", "message", "projectId"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"pullOrigin"}),(0,s.jsx)(t.td,{children:"pull origin branch"}),(0,s.jsx)(t.td,{children:'["branch", "projectId"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"checkGitConnection"}),(0,s.jsx)(t.td,{children:"Test Git connection"}),(0,s.jsx)(t.td,{children:'["externalUriArg", "pushAccessCheck", "userGitCredsUID"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"linkSavedCredsToExternalGit"}),(0,s.jsx)(t.td,{children:"Linked Saved Creds to a project"}),(0,s.jsx)(t.td,{children:'["projectUID", "userGitCredsUID"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"unlinkExternalGit"}),(0,s.jsx)(t.td,{children:"Unlink the saved creds"}),(0,s.jsx)(t.td,{children:'["projectUID"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"checkout"}),(0,s.jsx)(t.td,{children:"When USer checks out a new branch"}),(0,s.jsx)(t.td,{children:'["branchName","projectUID"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"branchDivergence"}),(0,s.jsx)(t.td,{children:"When user compares two branches for commit screen"}),(0,s.jsx)(t.td,{children:'["projectId", "branchName", "baseBranchName"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"branchInfo"}),(0,s.jsx)(t.td,{children:"Gives details of a particular working branch"}),(0,s.jsx)(t.td,{children:'["projectId", "branchName", "remoteType"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"setPrCreationTemplate"}),(0,s.jsx)(t.td,{children:"When user Sets PR creation template"}),(0,s.jsx)(t.td,{children:'["projectId", "customPrTemplate", "prCreationEnabled"}]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"getPrCreationTemplate"}),(0,s.jsx)(t.td,{children:"Gets PR creation template"}),(0,s.jsx)(t.td,{children:'["projectId"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"deleteUserGitCreds"}),(0,s.jsx)(t.td,{children:"When user deleted saved Git creds"}),(0,s.jsx)(t.td,{children:'["uid"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"linkExternalGit"}),(0,s.jsx)(t.td,{children:"Link saved Git creds"}),(0,s.jsx)(t.td,{children:'["projectUID", "externalRepoUri", "userGitCredsUID"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"mergeMaster"}),(0,s.jsx)(t.td,{children:"Merge to master branch"}),(0,s.jsx)(t.td,{children:'["prNumber", "projectId", "entityConflicts", "projectConflicts", "resolvedConflicts"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Transpiler"}),(0,s.jsx)(t.td,{children:"transpilerImport"}),(0,s.jsx)(t.td,{children:"Transpiler Import started"}),(0,s.jsx)(t.td,{children:'["uid"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"addTranspilerImport"}),(0,s.jsx)(t.td,{children:"Importing files to Prophecy Transpiler"}),(0,s.jsx)(t.td,{children:'["name", "status", "storagePath", "transpilerType"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Generic"}),(0,s.jsx)(t.td,{children:"removeEntity"}),(0,s.jsx)(t.td,{children:"When any entity is removed"}),(0,s.jsx)(t.td,{children:'["uid", "entityKind"]'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"updateEntity"}),(0,s.jsx)(t.td,{children:"When any entity is updated"}),(0,s.jsx)(t.td,{children:'["uid", "entityKind", "entityFieldName", "entityFieldValue"]'})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}}}]);