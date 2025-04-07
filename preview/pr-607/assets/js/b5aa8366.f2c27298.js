"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[33161],{24037:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"administration/self-hosted/configurations/sandbox-configuration","title":"Sandbox Configuration","description":"Prophecy installations allows configuration of various sandbox configuration","source":"@site/docs/administration/self-hosted/configurations/sandbox-configuration.md","sourceDirName":"administration/self-hosted/configurations","slug":"/administration/self-hosted/configurations/sandbox-configuration","permalink":"/prophecy-docs-staging/preview/pr-607/administration/self-hosted/configurations/sandbox-configuration","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"sandbox","permalink":"/prophecy-docs-staging/preview/pr-607/tags/sandbox"},{"inline":true,"label":"configuration","permalink":"/prophecy-docs-staging/preview/pr-607/tags/configuration"},{"inline":true,"label":"Scala","permalink":"/prophecy-docs-staging/preview/pr-607/tags/scala"},{"inline":true,"label":"Python","permalink":"/prophecy-docs-staging/preview/pr-607/tags/python"},{"inline":true,"label":"reserve pods","permalink":"/prophecy-docs-staging/preview/pr-607/tags/reserve-pods"}],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Sandbox Configuration","id":"sandbox-configuration","description":"Prophecy installations allows configuration of various sandbox configuration","sidebar_position":7,"tags":["sandbox","configuration","Scala","Python","reserve pods"]},"sidebar":"adminSidebar","previous":{"title":"Object Store Configuration","permalink":"/prophecy-docs-staging/preview/pr-607/administration/self-hosted/configurations/configure-object-store"},"next":{"title":"Upgrades and backups","permalink":"/prophecy-docs-staging/preview/pr-607/administration/self-hosted/upgrade-backup-restore"}}');var o=i(74848),r=i(28453);const t={title:"Sandbox Configuration",id:"sandbox-configuration",description:"Prophecy installations allows configuration of various sandbox configuration",sidebar_position:7,tags:["sandbox","configuration","Scala","Python","reserve pods"]},d=void 0,a={},c=[{value:"What is sandboxing?",id:"what-is-sandboxing",level:2},{value:"How to configure sandboxes",id:"how-to-configure-sandboxes",level:2},{value:"Configuration options",id:"configuration-options",level:2},{value:"Configuration Variables",id:"configuration-variables",level:3}];function l(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"In the traditional Prophecy deployment model, a single microservice, known as the editor web, handled all user requests using a threading approach. Each user request corresponded to a browser tab (session) used to perform operations on pipelines within the integrated development environment (IDE). However, this model faced limitations in isolating sessions and scaling the microservice vertically to handle increasing user requests. These limitations led to significant resource consumption in the editor web microservice, reducing its ability to manage requests effectively."}),"\n",(0,o.jsx)(n.h2,{id:"what-is-sandboxing",children:"What is sandboxing?"}),"\n",(0,o.jsx)(n.p,{children:"To address these challenges, Prophecy version 3.2 introduced a new approach to isolation and load management called sandboxing. This feature provisions a pair of microservices for each user request: the Gem Plugin and Schema Analysis, collectively referred to as a sandbox. This allows users to run their pipelines independently in isolated environments."}),"\n",(0,o.jsx)(n.p,{children:"For example, if three users each open two browser tabs in the IDE, six pods are provisioned for both the Gem Plugin and Schema Analysis. This ensures that users can run their pipelines without interference, maintaining complete isolation."}),"\n",(0,o.jsx)(n.h2,{id:"how-to-configure-sandboxes",children:"How to configure sandboxes"}),"\n",(0,o.jsxs)(n.p,{children:["Newer versions of Prophecy are defaulted to use sandboxing (",(0,o.jsx)(n.code,{children:"ENABLE_SANDBOXING: true"}),") as the default way to deploy Prophecy services. To configure object store settings in the Prophecy UI, follow these steps:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Log in to Prophecy as an admin user."}),"\n",(0,o.jsxs)(n.li,{children:["Navigate to the ",(0,o.jsx)(n.strong,{children:"Admin"})," tab of the Prophecy ",(0,o.jsx)(n.strong,{children:"Settings"})," page."]}),"\n",(0,o.jsxs)(n.li,{children:["Within the Admin main tab, select the ",(0,o.jsx)(n.strong,{children:"Config"})," subtab."]}),"\n",(0,o.jsxs)(n.li,{children:["Finally, click on the ",(0,o.jsx)(n.strong,{children:"Sandbox Config"})," subtab to configure the settings."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"configuration-options",children:"Configuration options"}),"\n",(0,o.jsx)(n.p,{children:"Below are JSON configurations within the Prophecy UI that need to be enabled to support this functionality. You will have to configure only the options which you require. Make sure to maintain a JSON format mentioned below while configuring the different options."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{\n  "enableSandboxSharing": false,\n  "PythonSandbox": {\n    "GemPluginPod": {\n      "cpu": {\n        "limit": "2",\n        "request": "0.5"\n      },\n      "memory": {\n        "limit": "2.5Gi",\n        "request": "2.5Gi"\n      }\n    },\n    "schemaAnalysisPod": {\n      "cpu": {\n        "limit": "2",\n        "request": "0.5"\n      },\n      "memory": {\n        "limit": "2.5Gi",\n        "request": "2.5Gi"\n      }\n    }\n  },\n  "PythonSandboxPoolSize": 2,\n  "sandboxImageRegistry": "gcr.io/prophecy-share",\n  "sandboxImageTag": "<current-prophecy-version>",\n  "sandboxMaxTotalPods": 100,\n  "sandboxMonitoringInterval": 2,\n  "sandboxPoolHealthCheckInterval": 100,\n  "sandboxStalePodsCleanupInterval": 4,\n  "ScalaSandbox": {\n    "GemPluginPod": {\n      "cpu": {\n        "limit": "2",\n        "request": "0.5"\n      },\n      "memory": {\n        "limit": "2.5Gi",\n        "request": "2.5Gi"\n      }\n    },\n    "schemaAnalysisPod": {\n      "cpu": {\n        "limit": "2",\n        "request": "0.5"\n      },\n      "memory": {\n        "limit": "2.5Gi",\n        "request": "2.5Gi"\n      }\n    }\n  },\n  "ScalaSandboxPoolSize": 3\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"configuration-variables",children:"Configuration Variables"}),"\n",(0,o.jsx)(n.p,{children:"These are the generic configurations which are required to be set irrespective of the provider."}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Configuration variable name"}),(0,o.jsx)(n.th,{children:"Description"}),(0,o.jsx)(n.th,{children:"Default value"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"enableSandboxSharing"})}),(0,o.jsx)(n.td,{children:"is an advanced feature that let's users share a sandbox between multiple sessions"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"false"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"PythonSandbox.GemPluginPod.cpu.limit"})}),(0,o.jsx)(n.td,{children:"Configures the CPU limit of the Python Gem plugin pod"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"2"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"PythonSandbox.GemPluginPod.cpu.request"})}),(0,o.jsx)(n.td,{children:"Configures the CPU request of the Python Gem plugin pod"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"0.5"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"PythonSandbox.GemPluginPod.memory.limit"})}),(0,o.jsx)(n.td,{children:"Configures the Memory limit of the Python Gem plugin pod"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"2.5Gi"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"PythonSandbox.GemPluginPod.memory.request"})}),(0,o.jsx)(n.td,{children:"Configures the Memory request of the Python Gem plugin pod"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"2.5Gi"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"PythonSandbox.schemaAnalysisPod.cpu.limit"})}),(0,o.jsx)(n.td,{children:"Configures the CPU limit of the Python schema analysis pod"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"2"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"PythonSandbox.schemaAnalysisPod.cpu.request"})}),(0,o.jsx)(n.td,{children:"Configures the CPU request of the Python schema analysis pod"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"0.5"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"PythonSandbox.schemaAnalysisPod.memory.limit"})}),(0,o.jsx)(n.td,{children:"Configures the Memory limit of the Python schema analysis pod"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"2.5Gi"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"PythonSandbox.schemaAnalysisPod.memory.request"})}),(0,o.jsx)(n.td,{children:"Configures the Memory request of the Python schema analysis pod"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"2.5Gi"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"PythonSandboxPoolSize"})}),(0,o.jsx)(n.td,{children:"number of concurrent Python sessions/tabs startup (reserved) allowed"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"2"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"sandboxImageRegistry"})}),(0,o.jsx)(n.td,{children:"image registry to be used for pulling sandbox images from"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"gcr.io/prophecy-share"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"sandboxImageTag"})}),(0,o.jsx)(n.td,{children:"image tag to be used for pulling sandbox images. Defaulted to current Prophecy version"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"<current-prophecy-version-running>"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"sandboxMaxTotalPods"})}),(0,o.jsx)(n.td,{children:"maximum number of Scala + Python (Gem plugin + schema analysis) pods allowed. This is used to restrict the number of pods spun up in case of surge of users."}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"false"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"sandboxMonitoringInterval"})}),(0,o.jsx)(n.td,{children:"Monitoring interval used to spin up new sandbox pods as per session requests in seconds (s)."}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"2"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"sandboxPoolHealthCheckInterval"})}),(0,o.jsx)(n.td,{children:"Pool health check interval used to check the health of each pod in seconds (s)."}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"100"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"sandboxStalePodsCleanupInterval"})}),(0,o.jsx)(n.td,{children:"Clean up period used to clean up unused pods in seconds (s)."}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"4"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"ScalaSandbox.GemPluginPod.cpu.limit"})}),(0,o.jsx)(n.td,{children:"Configures the CPU limit of the Scala Gem plugin pod"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"2"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"ScalaSandbox.GemPluginPod.cpu.request"})}),(0,o.jsx)(n.td,{children:"Configures the CPU request of the Scala Gem plugin pod"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"0.5"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"ScalaSandbox.GemPluginPod.memory.limit"})}),(0,o.jsx)(n.td,{children:"Configures the Memory limit of the Scala Gem plugin pod"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"2.5Gi"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"ScalaSandbox.GemPluginPod.memory.request"})}),(0,o.jsx)(n.td,{children:"Configures the Memory request of the Scala Gem plugin pod"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"2.5Gi"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"ScalaSandbox.schemaAnalysisPod.cpu.limit"})}),(0,o.jsx)(n.td,{children:"Configures the CPU limit of the Scala schema analysis pod"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"2"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"ScalaSandbox.schemaAnalysisPod.cpu.request"})}),(0,o.jsx)(n.td,{children:"Configures the CPU request of the Scala schema analysis pod"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"0.5"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"ScalaSandbox.schemaAnalysisPod.memory.limit"})}),(0,o.jsx)(n.td,{children:"Configures the Memory limit of the Scala schema analysis pod"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"2.5Gi"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"ScalaSandbox.schemaAnalysisPod.memory.request"})}),(0,o.jsx)(n.td,{children:"Configures the Memory request of the Scala schema analysis pod"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"2.5Gi"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"ScalaSandboxPoolSize"})}),(0,o.jsx)(n.td,{children:"number of concurrent Scala sessions/tabs startup (reserved) allowed"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"3"})})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>d});var s=i(96540);const o={},r=s.createContext(o);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);