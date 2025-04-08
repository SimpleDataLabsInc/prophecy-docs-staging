"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[18235],{20701:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"administration/self-hosted/upgrade-backup-restore","title":"Upgrades and backups","description":"Learn how to upgrade, back up, and restore Prophecy.","source":"@site/docs/administration/self-hosted/upgrade-backup-restore.md","sourceDirName":"administration/self-hosted","slug":"/administration/self-hosted/upgrade-backup-restore","permalink":"/prophecy-docs-staging/preview/pr-587/administration/self-hosted/upgrade-backup-restore","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"upgrade","permalink":"/prophecy-docs-staging/preview/pr-587/tags/upgrade"},{"inline":true,"label":"backup","permalink":"/prophecy-docs-staging/preview/pr-587/tags/backup"},{"inline":true,"label":"restore","permalink":"/prophecy-docs-staging/preview/pr-587/tags/restore"}],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Upgrades and backups","id":"upgrade-backup-restore","description":"Learn how to upgrade, back up, and restore Prophecy.","sidebar_position":4,"tags":["upgrade","backup","restore"]},"sidebar":"adminSidebar","previous":{"title":"Sandbox Configuration","permalink":"/prophecy-docs-staging/preview/pr-587/administration/self-hosted/configurations/sandbox-configuration"},"next":{"title":"Custom artifact repository","permalink":"/prophecy-docs-staging/preview/pr-587/administration/self-hosted/configure-sparkedge"}}');var s=r(74848),i=r(28453);const a={title:"Upgrades and backups",id:"upgrade-backup-restore",description:"Learn how to upgrade, back up, and restore Prophecy.",sidebar_position:4,tags:["upgrade","backup","restore"]},o=void 0,c={},d=[{value:"Upgrade",id:"upgrade",level:2},{value:"Backup",id:"backup",level:2},{value:"On-demand backups",id:"on-demand-backups",level:3},{value:"Regular automatic backups",id:"regular-automatic-backups",level:3},{value:"View past backups",id:"view-past-backups",level:3},{value:"Additional backup APIs",id:"additional-backup-apis",level:3},{value:"Restore",id:"restore",level:2},{value:"On-demand restore",id:"on-demand-restore",level:3},{value:"Additional restore APIs",id:"additional-restore-apis",level:3},{value:"Backup and restore guidelines",id:"backup-and-restore-guidelines",level:2},{value:"Migrate to different cluster",id:"migrate-to-different-cluster",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This page outlines different actions you may perform to maintain your Prophecy installation."}),"\n",(0,s.jsx)(n.h2,{id:"upgrade",children:"Upgrade"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"You may want to back up Prophecy before you upgrade."})}),"\n",(0,s.jsxs)(n.p,{children:["To upgrade Prophecy, you can do so in ",(0,s.jsx)(n.strong,{children:"Settings > Admin"}),"."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Navigate to the ",(0,s.jsx)(n.strong,{children:"Admin"})," tab of the Prophecy ",(0,s.jsx)(n.strong,{children:"Settings"})," page."]}),"\n",(0,s.jsxs)(n.li,{children:["Click on ",(0,s.jsx)(n.strong,{children:"Upgrade Version"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Choose the version you would like to upgrade to in the ",(0,s.jsx)(n.strong,{children:"Version"})," dropdown."]}),"\n",(0,s.jsxs)(n.li,{children:["Make sure that ",(0,s.jsx)(n.strong,{children:"Disable Rollback"})," toggle is on."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Upgrade version in Admin settings",src:r(33311).A+"",width:"2620",height:"1511"})}),"\n",(0,s.jsx)(n.h2,{id:"backup",children:"Backup"}),"\n",(0,s.jsx)(n.p,{children:"Backups can be triggered manually via the API, or they can be configured to run automatically."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Backup storage depends on ",(0,s.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-587/administration/self-hosted/configurations/configure-object-store",children:"object store configurations"}),". Make sure to configure these before proceeding below."]})}),"\n",(0,s.jsx)(n.h3,{id:"on-demand-backups",children:"On-demand backups"}),"\n",(0,s.jsxs)(n.p,{children:["You can use the Backup API to start a backup. See ",(0,s.jsx)(n.a,{href:"./generate-api-key/",children:"Generate API Key"})," if you need an API key."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"curl --location --request POST 'https://{prophecy-url}/api/backup' \\\n--header 'Cookie: prophecy-token={api-key}' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{}'\n"})}),"\n",(0,s.jsx)(n.p,{children:"Response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n"code": 202,\n"message": "Request Accepted with timestamp 2023-02-02t16-00-00"\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"regular-automatic-backups",children:"Regular automatic backups"}),"\n",(0,s.jsx)(n.p,{children:"You can configure regular backups in Prophecy in settings."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Log in to Prophecy as an admin user."}),"\n",(0,s.jsx)(n.li,{children:"Click on the three dots at the bottom left corner."}),"\n",(0,s.jsxs)(n.li,{children:["Navigate to ",(0,s.jsx)(n.strong,{children:"Settings > Admin > Config > backupConfig"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Make sure ",(0,s.jsx)(n.code,{children:"enableRegularBackups"})," is set to true."]}),"\n",(0,s.jsx)(n.li,{children:"Edit other variables to fit your requirements."}),"\n",(0,s.jsx)(n.li,{children:"Save your changes."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Below is a list of supported variables that you can change."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Configuration variable name"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Default value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"backupFrequency"})}),(0,s.jsxs)(n.td,{children:["How frequently to purge old user events from the internal database. Defaults to daily at 00:00. Uses ",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/robfig/cron#hdr-CRON_Expression_Format",children:"6-digit CRON"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0 0 0 * * *"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"backupRetentionCount"})}),(0,s.jsxs)(n.td,{children:["Number of last ",(0,s.jsx)(n.code,{children:"N"})," backups to retain."]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"30"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"enableRegularBackups"})}),(0,s.jsx)(n.td,{children:"State of automated backup creation."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"You can also use the Backup Schedule API to schedule a backup."}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"curl -s 'https://<prophecy-env-url>/api/feature/getConfig?configType=backup' \\\n  -H 'cookie: prophecy-token=<prophecy-access-token>' \\\n  | jq -r '.data.backupConfig.backupFrequency'\n"})}),"\n",(0,s.jsx)(n.p,{children:"Response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"0 0 0 * * *\n"})}),"\n",(0,s.jsx)(n.h3,{id:"view-past-backups",children:"View past backups"}),"\n",(0,s.jsxs)(n.p,{children:["You can view a history of backups in ",(0,s.jsx)(n.strong,{children:"Settings > Admin > Backup"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"additional-backup-apis",children:"Additional backup APIs"}),"\n",(0,s.jsx)(n.p,{children:"Here is a list of additional APIs for backups. One sample call may look like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:" curl --location --request POST 'https://{prophecy-url}/api/backup' \\\n --header 'Cookie: prophecy-token={api-key}' \\\n --header 'Content-Type: application/json' \\\n --data-raw '{}'\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"API"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Parameters"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"GET"})," ",(0,s.jsx)(n.code,{children:"https://{prophecy-url}/api/backup/latest"})]}),(0,s.jsx)(n.td,{children:"This API returns the status current/last backup operation triggered."}),(0,s.jsx)(n.td,{children:"None expected"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"GET"})," ",(0,s.jsx)(n.code,{children:"https://{prophecy-url}/api/backup/status"})]}),(0,s.jsx)(n.td,{children:"This API returns the status of the backup with a certain timestamp. If there is no timestamp passed and there is an ongoing backup, the status for ongoing backup is returned."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"timestamp"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"GET"})," ",(0,s.jsx)(n.code,{children:"https://{prophecy-url}/api/backup/list"})]}),(0,s.jsx)(n.td,{children:"This API returns the list of available backups."}),(0,s.jsx)(n.td,{children:"None expected"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"GET"})," ",(0,s.jsx)(n.code,{children:"https://{prophecy-url}/api/backup/delete"})]}),(0,s.jsxs)(n.td,{children:["This API attempts the delete the backup data (local and upstream) and also the metadata (database entries) associated with it. Note that in case of ",(0,s.jsx)(n.code,{children:"enableRegularBackups"})," set to true, backups are older than ",(0,s.jsx)(n.code,{children:"backupRetentionCount"})," in reverse order are garbage collected automatically."]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"timestamp"})})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["You can add ",(0,s.jsx)(n.code,{children:'| jq \'.data["backup-list"] | map(select(.status == "Success"))\''})," to your ",(0,s.jsx)(n.code,{children:"backup/list"})," API request to retrieve a list of only usable backups. Conversely, use ",(0,s.jsx)(n.code,{children:'| jq \'.data["backup-list"] | map(select(.status != "Success"))\''})," to retrieve a list of failed backups."]})}),"\n",(0,s.jsx)(n.h2,{id:"restore",children:"Restore"}),"\n",(0,s.jsx)(n.p,{children:"Restore is an on-demand based overwrite of the whole Prophecy configuration to reflect the state of a particular backup.\nThe restore operation always assumes a running destination Prophecy cluster where the data and the configuration of source cluster will be restored."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"If backup was taken in Athena's local Persistent Volume, it needs to be copied to Athena's Persistent Volume in the destination cluster before the restore operation can be performed."})}),"\n",(0,s.jsx)(n.h3,{id:"on-demand-restore",children:"On-demand restore"}),"\n",(0,s.jsxs)(n.p,{children:["You can restore using the Restore API. See ",(0,s.jsx)(n.a,{href:"./generate-api-key/",children:"Generate API Key"})," if you need an API key."]}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsx)(n.p,{children:"This API should be used with extreme caution as triggering this will lead to loss of current state/data."})}),"\n",(0,s.jsxs)(n.p,{children:["The below API is used to trigger a restore operation. It expects one parameter which is the ",(0,s.jsx)(n.code,{children:"timestamp"})," of a successful backup."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"curl --location --request POST 'https://{prophecy-url}/api/restore' \\\n--header 'Cookie: prophecy-token={api-key}' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"timestamp\": \"2022-11-22t10-00-00\",\n    \"sourceNamespace\": \"{Source cluster controlplane namespace}\"\n}'\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Sample API call with disable of gitserver restore. You may use similar options for ",(0,s.jsx)(n.code,{children:"artifactory"})," / ",(0,s.jsx)(n.code,{children:"edweb"})," / ",(0,s.jsx)(n.code,{children:"metagraph"})," / ",(0,s.jsx)(n.code,{children:"openidfederator"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'curl --location --request POST \'https://{prophecy-url}/api/restore\' \\\n--header \'Cookie: prophecy-token={api-key}\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "timestamp": "2022-11-22t10-00-00",\n    "sourceNamespace": "{Source cluster controlplane namespace}",\n    "svcs": {\n        "gitserver": {\n            "disable": false\n        },\n    }\n}\'\n'})}),"\n",(0,s.jsx)(n.p,{children:"In the above API:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"timestamp"})," is the timestamp of the backup to use to perform the restore"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sourceNamespace"})," is the namespace in which source cluster's control plane was installed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"svcs"}),": This JSON object needs to be set only when you wish to skip restore of any particular service by setting ",(0,s.jsx)(n.code,{children:"disabled"})," as ",(0,s.jsx)(n.code,{children:"true"}),". Otherwise, you can skip ",(0,s.jsx)(n.code,{children:"svcs"})," field entirely."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Sample response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "code": 202,\n    "message": "Request Accepted"\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"additional-restore-apis",children:"Additional restore APIs"}),"\n",(0,s.jsx)(n.p,{children:"Here is a list of additional APIs for restore. One sample call may look like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"curl --location --request POST 'https://{prophecy-url}/api/backup'\n--header 'Cookie: prophecy-token={api-key}'\n--header 'Content-Type: application/json'\n--data-raw '{}'\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"API"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Parameters"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"GET"})," ",(0,s.jsx)(n.code,{children:"https://{prophecy-url}/api/restore/status"})]}),(0,s.jsx)(n.td,{children:"This API returns the status of the restore operation with a certain timestamp. If there is no timestamp passed and there is an ongoing restore, the status for the ongoing restore is returned."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"timestamp"})})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"backup-and-restore-guidelines",children:"Backup and restore guidelines"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Take backups regularly, preferably to cloud storage."}),"\n",(0,s.jsx)(n.li,{children:"Create a Disaster Recovery Kubernetes in a different region."}),"\n",(0,s.jsx)(n.li,{children:"Install Prophecy in the remote Kubernetes and keep it in standby. In other words, scale down all pods."}),"\n",(0,s.jsx)(n.li,{children:"Disaster Recovery restore can be initiated from the remote region when the primary goes down."}),"\n",(0,s.jsx)(n.li,{children:"Once the restore is done, the Disaster Recovery site is available for work to continue."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"migrate-to-different-cluster",children:"Migrate to different cluster"}),"\n",(0,s.jsx)(n.p,{children:"If there is a requirement to migrate to a different Kubernetes cluster, you can leverage the backups for that:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Create a new Kubernetes cluster and install Prophecy based on Prophecy installation requirements."}),"\n",(0,s.jsx)(n.li,{children:"Back up the source cluster."}),"\n",(0,s.jsx)(n.li,{children:"Restore the backup into new cluster."}),"\n",(0,s.jsx)(n.li,{children:"Check that everything works as expected."}),"\n",(0,s.jsx)(n.li,{children:"Plan a downtime for the source cluster, initiate a fresh backup and restore it to the new cluster."}),"\n",(0,s.jsxs)(n.li,{children:["If the new cluster needs to use the old DNS, the DNS entry of old cluster should point to new cluster's ",(0,s.jsx)(n.code,{children:"Loadbalancer"})," and the ",(0,s.jsx)(n.code,{children:"Ingress"})," of the new cluster needs to be changed to use the old name. Contact support if you require assistance with these steps."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var t=r(96540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}},33311:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/upgrade-version-299aa03df5d926f970f23f9a7c43e102.png"}}]);