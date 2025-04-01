"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[92352],{26445:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"administration/self-hosted/configurations/configure-alerts","title":"Alerts Configuration","description":"Prophecy alerts configuration","source":"@site/docs/administration/self-hosted/configurations/configure-alerts.md","sourceDirName":"administration/self-hosted/configurations","slug":"/administration/self-hosted/configurations/configure-alerts","permalink":"/prophecy-docs-staging/preview/pr-596/administration/self-hosted/configurations/configure-alerts","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"alerts","permalink":"/prophecy-docs-staging/preview/pr-596/tags/alerts"},{"inline":true,"label":"alerting","permalink":"/prophecy-docs-staging/preview/pr-596/tags/alerting"},{"inline":true,"label":"monitoring","permalink":"/prophecy-docs-staging/preview/pr-596/tags/monitoring"}],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Alerts Configuration","id":"configure-alerts","description":"Prophecy alerts configuration","sidebar_position":1,"tags":["alerts","alerting","monitoring"]},"sidebar":"adminSidebar","previous":{"title":"Configurations","permalink":"/prophecy-docs-staging/preview/pr-596/administration/self-hosted/configurations/"},"next":{"title":"Audit Events Configuration","permalink":"/prophecy-docs-staging/preview/pr-596/administration/self-hosted/configurations/configure-audit-logs"}}');var s=i(74848),t=i(28453);const l={title:"Alerts Configuration",id:"configure-alerts",description:"Prophecy alerts configuration",sidebar_position:1,tags:["alerts","alerting","monitoring"]},o=void 0,d={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Alerting features",id:"alerting-features",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Edit Alert Configs",id:"edit-alert-configs",level:3},{value:"JSON format",id:"json-format",level:3},{value:"Supported configuration variables",id:"supported-configuration-variables",level:3},{value:"Alerting guidelines",id:"alerting-guidelines",level:2}];function a(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"One way to monitor resource usage in Prophecy-managed microservices is to configure alerts. Some configurations include:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Alerting when resource utilization approaches defined thresholds."}),"\n",(0,s.jsxs)(n.li,{children:["Email setup for alerts (",(0,s.jsx)(n.strong,{children:"strongly recommended"}),")."]}),"\n",(0,s.jsx)(n.li,{children:"Critical service suspension in the event of resource overflows."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Resource monitoring is enabled by default, providing insights into CPU, memory, and disk usage for critical services. This feature reports current usage levels alongside defined limits, ensuring admins have a clear view of resource consumption. This feature can be disabled if not necessary."}),"\n",(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsx)(n.p,{children:"Alerting is supported for Prophecy version 3.4.1 and above."}),"\n",(0,s.jsx)(n.h2,{id:"alerting-features",children:"Alerting features"}),"\n",(0,s.jsx)(n.p,{children:"Alerts are of two levels:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"WARNING"}),": Nearing configured limits"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CRITICAL"}),": At or above configured limits"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Different thresholds are tracked:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Alerts generated on"}),(0,s.jsx)(n.th,{children:"Suggested action"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"CPU_USAGE"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"CRITICAL"})}),(0,s.jsx)(n.td,{children:"Evaluate whether the CPU usage persists or is temporary. Increase CPU provisioned if high usage persists."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DISK_USAGE"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"WARNING"})," & ",(0,s.jsx)(n.strong,{children:"CRITICAL"})]}),(0,s.jsxs)(n.td,{children:["Take preventative steps upon ",(0,s.jsx)(n.strong,{children:"WARNING"})," alert to increase PVC storage capacity."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"FILE_COUNT"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"WARNING"})," & ",(0,s.jsx)(n.strong,{children:"CRITICAL"})]}),(0,s.jsxs)(n.td,{children:["Take preventative steps upon ",(0,s.jsx)(n.strong,{children:"WARNING"})," alert to increase PVC storage capacity."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MEMORY_USAGE"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"CRITICAL"})}),(0,s.jsx)(n.td,{children:"Evaluate whether the memory usage persists or is temporary. Increase memory provisioned if high usage persists."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"To prevent data corruption, certain critical services, such as Metagraph and Gitserver, are automatically suspended when disk usage limits are reached. This feature is enabled by default but can be disabled if needed."}),"\n",(0,s.jsx)(n.p,{children:"By default, alerts are displayed as notification banners in the Prophecy UI, which direct users to a comprehensive view on the monitoring page for detailed insights."}),"\n",(0,s.jsx)(n.p,{children:"We also support email-based alerts, which can be configured by providing the necessary SMTP details. On resolution of alerts, email notifications are sent."}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:"There are certain environment variables that need to be configured in the Prophecy admin UI."}),"\n",(0,s.jsx)(n.h3,{id:"edit-alert-configs",children:"Edit Alert Configs"}),"\n",(0,s.jsx)(n.p,{children:"To edit the alert configurations in Prophecy, follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Log in to Prophecy as an admin user."}),"\n",(0,s.jsxs)(n.li,{children:["Navigate to the ",(0,s.jsx)(n.strong,{children:"Admin"})," tab of the Prophecy ",(0,s.jsx)(n.strong,{children:"Settings"})," page."]}),"\n",(0,s.jsxs)(n.li,{children:["Within the Admin main tab, select the ",(0,s.jsx)(n.strong,{children:"Config"})," subtab."]}),"\n",(0,s.jsxs)(n.li,{children:["Click on the ",(0,s.jsx)(n.strong,{children:"Alert Config"})," subtab to configure the alert settings."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"json-format",children:"JSON format"}),"\n",(0,s.jsx)(n.p,{children:"Below are JSON configurations within the Prophecy UI that need to be enabled to support this functionality. You will have to configure only the options which you require. Make sure to maintain a JSON format mentioned below while configuring the different options. Most of the values below are defaults or sample values."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n  "alertConfigs": [\n    {\n      "maxAllowedOccurrenceCount": 20,\n      "metricsType": "CPU_USAGE",\n      "thresholdValue": 0.95\n    },\n    {\n      "maxAllowedOccurrenceCount": 3,\n      "metricsType": "DISK_USAGE",\n      "thresholdValue": 0.95\n    },\n    {\n      "maxAllowedOccurrenceCount": 3,\n      "metricsType": "FILE_COUNT",\n      "thresholdValue": 0.95\n    },\n    {\n      "maxAllowedOccurrenceCount": 20,\n      "metricsType": "MEMORY_USAGE",\n      "thresholdValue": 0.8\n    }\n  ],\n  "enableAlerts": true,\n  "enableServiceSuspend": true,\n  "notificationEmailIDs": [\n    "customer1@test.com",\n    "customer2@test.com"\n  ],\n  "reAlertIntervalinMinutes": 120,\n  "relativeWarningThreshold": 0.05,\n  "smtp": {\n    "password": "********",\n    "senderEmailID": "sender@test.com",\n    "serverHostname": "smtp.test.com",\n    "serverPort": 587\n  },\n  "suspensionWindowinMinutes": 60\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"supported-configuration-variables",children:"Supported configuration variables"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Configuration variable name"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Default value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"alertConfigs.maxAllowedOccurrenceCount"})}),(0,s.jsx)(n.td,{children:"Number of consecutive occurrences to hit before triggering an alert (warning/critical). Every interval defaults to 30s."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"20 (or) 10mins"})," for CPU/Memory, ",(0,s.jsx)(n.code,{children:"3 (or) 1.5mins"})," for Disk Usage/File Count"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"alertConfigs.metricsType"})}),(0,s.jsx)(n.td,{children:"The metric type tracked"}),(0,s.jsx)(n.td,{children:"CPU_USAGE, DISK_USAGE, FILE_COUNT, MEMORY_USAGE"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"alertConfigs.thresholdValue"})}),(0,s.jsx)(n.td,{children:"The threshold value beyond which alert is triggered. This is a fractional value between 0 and 1"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"0.8"})," for MEMORY_USAGE and ",(0,s.jsx)(n.code,{children:"0.95"})," for others"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"enableAlerts"})}),(0,s.jsx)(n.td,{children:"Enabling of alerting system"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"true"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"notificationEmailIDs"})}),(0,s.jsx)(n.td,{children:"List of emails to notify in case of hitting alerts, this list is comma separated"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"[]"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"reAlertIntervalinMinutes"})}),(0,s.jsx)(n.td,{children:"How often should triggered alerts resend the email in minutes"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"120"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"relativeWarningThreshold"})}),(0,s.jsxs)(n.td,{children:["It is the (configured threshold - relativeWarningThreshold) value after which ",(0,s.jsx)(n.code,{children:"WARNING"})," is generated before hitting ",(0,s.jsx)(n.code,{children:"CRITICAL"})," state. This is a fractional value between 0 and 1. Defaulted to 5% less than threshold value."]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0.05"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"smtp.password"})}),(0,s.jsxs)(n.td,{children:["The password of the SMTP server credential. This is an encrypted value. Setting this to ",(0,s.jsx)(n.code,{children:"NULL"})," will disable email alerting."]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"NULL"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"smtp.senderEmailID"})}),(0,s.jsxs)(n.td,{children:["The send email ID at the SMTP server. Setting this to ",(0,s.jsx)(n.code,{children:"NULL"})," will disable SMTP email alerting."]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"NULL"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"smtp.serverHostname"})}),(0,s.jsx)(n.td,{children:"The SMTP hostname of the server."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"smtp.gmail.com"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"smtp.serverPort"})}),(0,s.jsxs)(n.td,{children:["The SMTP port of the server credential. Setting this to ",(0,s.jsx)(n.code,{children:"0"})," will disable SMTP email alerting."]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"587"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"suspensionWindowinMinutes"})}),(0,s.jsx)(n.td,{children:"Time after which suspension of critical services is to be done in minutes"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"60"})})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"alerting-guidelines",children:"Alerting guidelines"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The default configured values satisfy most use cases."}),"\n",(0,s.jsxs)(n.li,{children:["If you set ",(0,s.jsx)(n.code,{children:"enableAlerts"})," to false, this will disable the alerting system. Monitoring will still work and be visible from the Admin Monitoring subtab."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var r=i(96540);const s={},t=r.createContext(s);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);