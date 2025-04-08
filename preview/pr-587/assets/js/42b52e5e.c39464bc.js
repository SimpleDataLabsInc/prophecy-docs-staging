"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[78659],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var i=t(96540);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}},93926:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"administration/self-hosted/configurations/configure-object-store","title":"Object Store Configuration","description":"Prophecy installations allow certain critical data like backups and audit logs to synced to object stores like S3, Azure Blob Storage, GCS etc.","source":"@site/docs/administration/self-hosted/configurations/configure-object-store.md","sourceDirName":"administration/self-hosted/configurations","slug":"/administration/self-hosted/configurations/configure-object-store","permalink":"/prophecy-docs-staging/preview/pr-587/administration/self-hosted/configurations/configure-object-store","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"object store","permalink":"/prophecy-docs-staging/preview/pr-587/tags/object-store"},{"inline":true,"label":"configuration","permalink":"/prophecy-docs-staging/preview/pr-587/tags/configuration"},{"inline":true,"label":"disaster recovery","permalink":"/prophecy-docs-staging/preview/pr-587/tags/disaster-recovery"},{"inline":true,"label":"AWS","permalink":"/prophecy-docs-staging/preview/pr-587/tags/aws"},{"inline":true,"label":"s3","permalink":"/prophecy-docs-staging/preview/pr-587/tags/s-3"},{"inline":true,"label":"azure blob","permalink":"/prophecy-docs-staging/preview/pr-587/tags/azure-blob"},{"inline":true,"label":"NFS","permalink":"/prophecy-docs-staging/preview/pr-587/tags/nfs"},{"inline":true,"label":"GCP","permalink":"/prophecy-docs-staging/preview/pr-587/tags/gcp"},{"inline":true,"label":"GCS","permalink":"/prophecy-docs-staging/preview/pr-587/tags/gcs"}],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Object Store Configuration","id":"configure-object-store","description":"Prophecy installations allow certain critical data like backups and audit logs to synced to object stores like S3, Azure Blob Storage, GCS etc.","sidebar_position":5,"tags":["object store","configuration","disaster recovery","AWS","s3","azure blob","NFS","GCP","GCS"]},"sidebar":"adminSidebar","previous":{"title":"Audit Events Configuration","permalink":"/prophecy-docs-staging/preview/pr-587/administration/self-hosted/configurations/configure-audit-logs"},"next":{"title":"Sandbox Configuration","permalink":"/prophecy-docs-staging/preview/pr-587/administration/self-hosted/configurations/sandbox-configuration"}}');var r=t(74848),o=t(28453);const s={title:"Object Store Configuration",id:"configure-object-store",description:"Prophecy installations allow certain critical data like backups and audit logs to synced to object stores like S3, Azure Blob Storage, GCS etc.",sidebar_position:5,tags:["object store","configuration","disaster recovery","AWS","s3","azure blob","NFS","GCP","GCS"]},c=void 0,d={},l=[{value:"Edit Object Store Configurations",id:"edit-object-store-configurations",level:2},{value:"Configuration options",id:"configuration-options",level:2},{value:"Generic Configuration Variables",id:"generic-configuration-variables",level:3},{value:"Provider specific configuration",id:"provider-specific-configuration",level:3},{value:"AWS S3",id:"aws-s3",level:4},{value:"Azure Blob Storage",id:"azure-blob-storage",level:4},{value:"GCP Cloud Storage",id:"gcp-cloud-storage",level:4},{value:"Local PV (NFS)",id:"local-pv-nfs",level:4}];function a(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Prophecy supports storing essential data, including backups and audit logs, by integrating with cloud object stores like AWS S3, Azure Blob Storage, GCP Cloud Storage, and local persistent volumes (e.g., NFS-backed). This section explains how to configure these storage options."}),"\n",(0,r.jsx)(n.h2,{id:"edit-object-store-configurations",children:"Edit Object Store Configurations"}),"\n",(0,r.jsx)(n.p,{children:"To edit object store configurations in Prophecy, follow these steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Log in to Prophecy as an admin user."}),"\n",(0,r.jsxs)(n.li,{children:["Navigate to the ",(0,r.jsx)(n.strong,{children:"Admin"})," tab of the Prophecy ",(0,r.jsx)(n.strong,{children:"Settings"})," page."]}),"\n",(0,r.jsxs)(n.li,{children:["Within the Admin main tab, select the ",(0,r.jsx)(n.strong,{children:"Config"})," subtab."]}),"\n",(0,r.jsxs)(n.li,{children:["Finally, click on the ",(0,r.jsx)(n.strong,{children:"Object Store Config"})," subtab to configure the object store settings."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration-options",children:"Configuration options"}),"\n",(0,r.jsx)(n.p,{children:"Below are JSON configurations within the Prophecy UI that need to be enabled to support this functionality. You will have to configure only the options which you require. Make sure to maintain a JSON format mentioned below while configuring the different options."}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["All sensitive keys are displayed in ",(0,r.jsx)(n.code,{children:"********"})," format. However, you may supply the new values in normal text and save the JSON to update the keys."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n  "aws": {\n    "accessKey": "********",\n    "s3": {\n      "bucketName": "athena-ondemand-backup",\n      "endpoint": "https://s3.us-west-2.amazonaws.com",\n      "forcePathStyle": true,\n      "region": "us-west-2"\n    },\n    "secretKey": "********"\n  },\n  "azure": {\n    "accessKey": "********",\n    "blobStorage": {\n      "accountName": "prophecyathenabackup",\n      "containerName": "athena-ondemand-backup",\n      "serviceURL": "https://prophecyathenabackup.blob.core.windows.net/"\n    },\n    "useManagedIdentityToAuthenticate": false\n  },\n  "cloudProvider": "gcp",\n  "gcp": {\n    "cloudStorage": {\n      "bucketName": "athena-ondemand-backup"\n    },\n    "serviceAccount": "********"\n  },\n  "localLocation": "/backup",\n  "locationType": "gcp-cloud-stoage"\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"generic-configuration-variables",children:"Generic Configuration Variables"}),"\n",(0,r.jsx)(n.p,{children:"These are the generic configurations which are required to be set irrespective of the provider."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Configuration variable name"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"locationType"})}),(0,r.jsxs)(n.td,{children:["Which provider to use for the object store. Supports ",(0,r.jsx)(n.code,{children:"local"}),", ",(0,r.jsx)(n.code,{children:"s3"}),", ",(0,r.jsx)(n.code,{children:"azure-blob-storage"}),", ",(0,r.jsx)(n.code,{children:"gcp-cloud-storage"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"local"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"localLocation"})}),(0,r.jsx)(n.td,{children:"Any PVC Mount point with where local backup is done. Is required even for provider based object stores for a temporary location."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/backup"})})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"provider-specific-configuration",children:"Provider specific configuration"}),"\n",(0,r.jsx)(n.p,{children:"This section outlines there various configurations at each provider level."}),"\n",(0,r.jsx)(n.h4,{id:"aws-s3",children:"AWS S3"}),"\n",(0,r.jsxs)(n.p,{children:["For this provider, set ",(0,r.jsx)(n.code,{children:"locationType"})," to ",(0,r.jsx)(n.code,{children:"s3"})," and configure using the following variables:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Environment variable name"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"aws.s3.bucketName"})}),(0,r.jsx)(n.td,{children:"S3 Bucket name"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"athena-ondemand-backup"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"aws.s3.endpoint"})}),(0,r.jsx)(n.td,{children:"S3 Endpoint used to communicate with"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"https://s3.us-west-2.amazonaws.com"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"aws.s3.forcePathStyle"})}),(0,r.jsx)(n.td,{children:"If S3 should use path style for bucket name"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"aws.s3.region"})}),(0,r.jsx)(n.td,{children:"S3 Region"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"us-west-2"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"aws.accessKey"})}),(0,r.jsx)(n.td,{children:"AWS Access key with the required privileges"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"aws.secretKey"})}),(0,r.jsx)(n.td,{children:"AWS Secret key with the required privileges"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"localLocation"})}),(0,r.jsx)(n.td,{children:"Any PVC Mount point with storage"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/backup"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"locationType"})}),(0,r.jsx)(n.td,{children:"Set to AWS S3"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"s3"})})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"azure-blob-storage",children:"Azure Blob Storage"}),"\n",(0,r.jsxs)(n.p,{children:["For this provider, set ",(0,r.jsx)(n.code,{children:"locationType"})," to ",(0,r.jsx)(n.code,{children:"azure-blob-storage"})," and configure using the following variables:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Environment variable name"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"azure.blobStorage.accountName"})}),(0,r.jsx)(n.td,{children:"Storage Account name"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"prophecyathenabackup"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"azure.blobStorage.serviceURL"})}),(0,r.jsx)(n.td,{children:"Storage Account Service URL"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"https://prophecyathenabackup.blob.core.windows.net/"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"azure.blobStorage.containerName"})}),(0,r.jsx)(n.td,{children:"Container name within the Storage Account"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"athena-ondemand-backup"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"azure.useManagedIdentityToAuthenticate"})}),(0,r.jsx)(n.td,{children:"Wheather to use system managed identity (role) to authenticate"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"azure.accessKey"})}),(0,r.jsx)(n.td,{children:"Storage Access key"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"localLocation"})}),(0,r.jsx)(n.td,{children:"Any PVC Mount point with storage"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/backup"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"locationType"})}),(0,r.jsx)(n.td,{children:"Set to Azure Blob Storage"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"azure-blob-storage"})})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"gcp-cloud-storage",children:"GCP Cloud Storage"}),"\n",(0,r.jsxs)(n.p,{children:["For this provider, set ",(0,r.jsx)(n.code,{children:"locationType"})," to ",(0,r.jsx)(n.code,{children:"gcp-cloud-storage"})," and configure using the following variables:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Environment variable name"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"gcp.serviceAccount"})}),(0,r.jsx)(n.td,{children:"Is the GCP Service Account in Base64 Encoded format with the required privileges"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"gcp.cloudStorage.bucketName"})}),(0,r.jsx)(n.td,{children:"Container name within the Storage Account"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"athena-ondemand-backup"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"localLocation"})}),(0,r.jsx)(n.td,{children:"Any PVC Mount point with storage"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/backup"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"locationType"})}),(0,r.jsx)(n.td,{children:"Set to GCP Cloud Storage"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"gcp-cloud-storage"})})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"local-pv-nfs",children:"Local PV (NFS)"}),"\n",(0,r.jsx)(n.p,{children:"As this utilizes the local persistent volumes (PVs) offered by Kubernetes, no extra configuration is needed. All backups are stored directly on the disk, which can be supported by protocols such as NFS."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Environment variable name"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"localLocation"})}),(0,r.jsx)(n.td,{children:"Any PVC Mount point with storage"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/backup"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"locationType"})}),(0,r.jsx)(n.td,{children:"Set to local"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"local"})})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}}}]);