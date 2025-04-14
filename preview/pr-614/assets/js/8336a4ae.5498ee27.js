"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[31602],{28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var i=s(96540);const n={},r=i.createContext(n);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:t},e.children)}},35175:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"administration/self-hosted/configurations/configure-audit-logs","title":"Audit Events Configuration","description":"Track and log user actions for auditing purposes","source":"@site/docs/administration/self-hosted/configurations/configure-audit-logs.md","sourceDirName":"administration/self-hosted/configurations","slug":"/administration/self-hosted/configurations/configure-audit-logs","permalink":"/prophecy-docs-staging/preview/pr-614/administration/self-hosted/configurations/configure-audit-logs","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"audit events","permalink":"/prophecy-docs-staging/preview/pr-614/tags/audit-events"},{"inline":true,"label":"audit logs","permalink":"/prophecy-docs-staging/preview/pr-614/tags/audit-logs"},{"inline":true,"label":"disaster recovery","permalink":"/prophecy-docs-staging/preview/pr-614/tags/disaster-recovery"},{"inline":true,"label":"s3","permalink":"/prophecy-docs-staging/preview/pr-614/tags/s-3"},{"inline":true,"label":"azure blob","permalink":"/prophecy-docs-staging/preview/pr-614/tags/azure-blob"},{"inline":true,"label":"NFS","permalink":"/prophecy-docs-staging/preview/pr-614/tags/nfs"},{"inline":true,"label":"GCS","permalink":"/prophecy-docs-staging/preview/pr-614/tags/gcs"}],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Audit Events Configuration","id":"configure-audit-logs","description":"Track and log user actions for auditing purposes","sidebar_position":2,"tags":["audit events","audit logs","disaster recovery","s3","azure blob","NFS","GCS"]},"sidebar":"adminSidebar","previous":{"title":"Alerts Configuration","permalink":"/prophecy-docs-staging/preview/pr-614/administration/self-hosted/configurations/configure-alerts"},"next":{"title":"Object Store Configuration","permalink":"/prophecy-docs-staging/preview/pr-614/administration/self-hosted/configurations/configure-object-store"}}');var n=s(74848),r=s(28453);const o={title:"Audit Events Configuration",id:"configure-audit-logs",description:"Track and log user actions for auditing purposes",sidebar_position:2,tags:["audit events","audit logs","disaster recovery","s3","azure blob","NFS","GCS"]},a=void 0,d={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Edit Audit Configs",id:"edit-audit-configs",level:3},{value:"JSON format",id:"json-format",level:3},{value:"Supported Configuration Variables",id:"supported-configuration-variables",level:3},{value:"To enable user events audit logs",id:"to-enable-user-events-audit-logs",level:3},{value:"User events audit logs output",id:"user-events-audit-logs-output",level:2},{value:"Sample output of user audit logs",id:"sample-output-of-user-audit-logs",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Prophecy provides strong support for storing audit events (logs) in cloud object stores, including AWS S3, Azure Blob Storage, GCP Cloud Storage, or local persistent volumes (PV). Customize the audit events configuration to:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Track and log every user action."}),"\n",(0,n.jsx)(t.li,{children:"Enable retrieval of user activity records from persistent storage or an object store for auditing."}),"\n",(0,n.jsx)(t.li,{children:"Store user actions in designated database tables for structured tracking."}),"\n",(0,n.jsx)(t.li,{children:"Periodically transfer recorded data to an object store for efficient long-term storage and management."}),"\n"]}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsxs)(t.p,{children:["Events storage depends on ",(0,n.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-614/administration/self-hosted/configurations/configure-object-store",children:"object store configurations"}),". Make sure to configure these before proceeding below."]}),(0,n.jsxs)(t.p,{children:["Dedicated SaaS users should contact ",(0,n.jsx)(t.a,{href:"/getting-help",children:"Prophecy Support"})," to enable storing audit logs in object stores."]})]}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(t.p,{children:"There are certain environment variables that need to be configured in Athena based on the kind of user events audit logs required."}),"\n",(0,n.jsx)(t.h3,{id:"edit-audit-configs",children:"Edit Audit Configs"}),"\n",(0,n.jsx)(t.p,{children:"To edit audit configurations in Prophecy, follow these steps:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Log in to Prophecy as an admin user."}),"\n",(0,n.jsxs)(t.li,{children:["Navigate to the ",(0,n.jsx)(t.strong,{children:"Admin"})," tab of the Prophecy ",(0,n.jsx)(t.strong,{children:"Settings"})," page."]}),"\n",(0,n.jsxs)(t.li,{children:["Within the Admin main tab, select the ",(0,n.jsx)(t.strong,{children:"Config"})," subtab."]}),"\n",(0,n.jsxs)(t.li,{children:["Finally, click on the ",(0,n.jsx)(t.strong,{children:"Audit Config"})," subtab to configure the audit settings."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"json-format",children:"JSON format"}),"\n",(0,n.jsx)(t.p,{children:"Below are JSON configurations within the Prophecy UI that need to be enabled to support this functionality. You will have to configure only the options which you require. Make sure to maintain a JSON format mentioned below while configuring the different options."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'{\n  "disableUeventsGC": false,\n  "enableUserEvents": false,\n  "ueventsGCSchedule": "0 0 1 * * *",\n  "ueventsSchedule": "0 0 */1 * * *"\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"supported-configuration-variables",children:"Supported Configuration Variables"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Configuration variable name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"disableUeventsGC"})}),(0,n.jsxs)(t.td,{children:["Garbage collection of user events from local DB is enabled by default once the events have been pushed to upstream object store. Set this to ",(0,n.jsx)(t.code,{children:"true"})," to disable this garbage collection to retain this data locally as well. Note that setting this to ",(0,n.jsx)(t.code,{children:"true"})," could potentially result in a very large DB size."]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"false"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"enableUserEvents"})}),(0,n.jsxs)(t.td,{children:["Set to ",(0,n.jsx)(t.code,{children:"true"})," to enable user event audit logs"]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"false"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"ueventsSchedule"})}),(0,n.jsxs)(t.td,{children:["How frequently to push user events to object store. Defaults to every one hour. Uses ",(0,n.jsx)(t.a,{href:"https://pkg.go.dev/github.com/robfig/cron#hdr-CRON_Expression_Format",children:"6-digit CRON"})]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"0 0 */1 * * *"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"ueventsGCSchedule"})}),(0,n.jsxs)(t.td,{children:["How frequently to purge old user events from the internal database. Defaults to daily 1 am. Uses ",(0,n.jsx)(t.a,{href:"https://pkg.go.dev/github.com/robfig/cron#hdr-CRON_Expression_Format",children:"6-digit CRON"})]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"0 0 1 * * *"})})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"to-enable-user-events-audit-logs",children:"To enable user events audit logs"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Set ",(0,n.jsx)(t.code,{children:"enableUserEvents"})," to ",(0,n.jsx)(t.code,{children:"true"})]}),"\n",(0,n.jsxs)(t.li,{children:["Set ",(0,n.jsx)(t.code,{children:"ueventsSchedule"})," to the ",(0,n.jsx)(t.a,{href:"https://pkg.go.dev/github.com/robfig/cron#hdr-CRON_Expression_Format",children:"CRON"})," string for how frequently you'd like user events pushed to the object store."]}),"\n",(0,n.jsxs)(t.li,{children:["Set ",(0,n.jsx)(t.code,{children:"ueventsGCSchedule"})," to the ",(0,n.jsx)(t.a,{href:"https://pkg.go.dev/github.com/robfig/cron#hdr-CRON_Expression_Format",children:"CRON"})," string for how frequently you'd like old user events removed from the database.\nPVC Mount point with storage | ",(0,n.jsx)(t.code,{children:"/backup"})," |"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"user-events-audit-logs-output",children:"User events audit logs output"}),"\n",(0,n.jsxs)(t.p,{children:["By default pushes events to ",(0,n.jsx)(t.code,{children:"/namespace/audit/"})," directory in the S3 bucket configured."]}),"\n",(0,n.jsx)(t.h3,{id:"sample-output-of-user-audit-logs",children:"Sample output of user audit logs"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'{"opType": "Query", "createdAt": 1690610557857, "nameHints": ["User"], "userEmail": "prophecy-system@prophecy.io", "customerName": "prophecy.io", "responseCode": 200, "requestParams": {"email": "\\"adminuser@prophecy.io\\""}, "requestPayload": "[\\"_id\\",\\"name\\",\\"firstName\\",\\"lastName\\",\\"email\\",\\"created\\",\\"createdBy\\",\\"aspects(aspect:[Info]){AspectName AspectValue}\\"]", "latencyInMillis": 11}\n{"opType": "Query", "createdAt": 1690552930350, "nameHints": ["ProjectReleaseByProjectIdAndStatus"], "userEmail": "prophecy-system@prophecy.io", "customerName": "prophecy.io", "responseCode": 200, "requestParams": {"statuses": "[Pending,Running,Retrying]"}, "requestPayload": "[\\"_id\\",\\"releaseTag\\",\\"status\\",\\"attempt\\",\\"createdBy\\",\\"project{_id name}\\"]", "latencyInMillis": 5}\n{"opType": "Query", "createdAt": 1690610557967, "nameHints": ["User"], "userEmail": "prophecy-system@prophecy.io", "customerName": "prophecy.io", "responseCode": 200, "requestParams": {"email": "\\"adminuser@prophecy.io\\""}, "requestPayload": "[\\"_id\\",\\"name\\",\\"firstName\\",\\"lastName\\",\\"email\\",\\"created\\",\\"createdBy\\",\\"aspects(aspect:[Info]){AspectName AspectValue}\\"]", "latencyInMillis": 10}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);