"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[29614],{2247:(e,n,o)=>{o.d(n,{A:()=>s});const s=o.p+"assets/images/nov-download-logs-4c240b6b6dc50b0ac1dd1c51931a0116.png"},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>l});var s=o(96540);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}},87718:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"administration/self-hosted/download-logs","title":"Download logs","description":"Download Prophecy support logs","source":"@site/docs/administration/self-hosted/download-logs.md","sourceDirName":"administration/self-hosted","slug":"/administration/self-hosted/download-logs","permalink":"/prophecy-docs-staging/preview/pr-613/administration/self-hosted/download-logs","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"download","permalink":"/prophecy-docs-staging/preview/pr-613/tags/download"},{"inline":true,"label":"support logs","permalink":"/prophecy-docs-staging/preview/pr-613/tags/support-logs"}],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Download logs","id":"download-logs","description":"Download Prophecy support logs","sidebar_position":6,"tags":["download","support logs"]},"sidebar":"adminSidebar","previous":{"title":"Resource monitoring","permalink":"/prophecy-docs-staging/preview/pr-613/administration/self-hosted/resource-monitoring"},"next":{"title":"Generate API key","permalink":"/prophecy-docs-staging/preview/pr-613/administration/self-hosted/generate-api-key"}}');var t=o(74848),i=o(28453);const r={title:"Download logs",id:"download-logs",description:"Download Prophecy support logs",sidebar_position:6,tags:["download","support logs"]},l=void 0,a={},d=[{value:"Download logs features",id:"download-logs-features",level:3},{value:"Enable Prophecy Downloads logs",id:"enable-prophecy-downloads-logs",level:2},{value:"Navigate to the Download logs UI",id:"navigate-to-the-download-logs-ui",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"This feature requires Prophecy 3.4.1.0 or later."})}),"\n",(0,t.jsx)(n.p,{children:"Prophecy lets you download logs to help debug issues with your Prophecy services. As an admin, you can download environment logs directly from Prophecy without needing access to your Prophecy cluster or assistance from Prophecy Support."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Download logs",src:o(2247).A+"",width:"2620",height:"1508"})}),"\n",(0,t.jsx)(n.p,{children:"This streamlines the process and reduces delays in troubleshooting by enabling you to quickly share logs and environment details with Zendesk for further analysis."}),"\n",(0,t.jsx)(n.h3,{id:"download-logs-features",children:"Download logs features"}),"\n",(0,t.jsx)(n.p,{children:"You can use the Download Logs feature to capture logs using the Services and time selectors."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"All services are selected by default."}),"\n",(0,t.jsx)(n.li,{children:"The download supports one hour of logs from the Start Time."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The captured logs include all relevant Prophecy configurations, such as the following items:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Kubernetes cluster configuration, including resource quotas and node configuration"}),"\n",(0,t.jsx)(n.li,{children:"Cluster custom resources"}),"\n",(0,t.jsx)(n.li,{children:"Config maps and files"}),"\n",(0,t.jsx)(n.li,{children:"Resource consumption logs"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Sensitive information, such as customer preview data, credentials, tokens, or passwords, is scrubbed or redacted from the download bundle."})}),"\n",(0,t.jsx)(n.h2,{id:"enable-prophecy-downloads-logs",children:"Enable Prophecy Downloads logs"}),"\n",(0,t.jsxs)(n.p,{children:["Before you can download logs, you must enable it in your ",(0,t.jsx)(n.a,{href:"../prophecy-deployment",children:"self-hosted"})," deployment."]}),"\n",(0,t.jsx)(n.p,{children:"See the following requirements for enabling the Prophecy logs:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Prophecy collects the logs of all pods and stores it in the Athena Pod."}),"\n",(0,t.jsx)(n.li,{children:"Each pod uses an additional 500 MB ephemeral storage for temporary storage."}),"\n",(0,t.jsx)(n.li,{children:"Athena requires additional storage of around 100 GB to store one week of logs."}),"\n",(0,t.jsxs)(n.li,{children:["A new container image fluentbit (",(0,t.jsx)(n.code,{children:"gcr.io/prophecy-share/fluent-bit:2.2.3"}),") is required for this feature."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To enable Minio in Athena and provide it a volume, follow these steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Add env variables to Athena STS:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'  - name: MINIO_ENDPOINT\n    value: athena:9000\n  - name: ENABLE_FLUENTBIT_SIDECARS\n    value: "true"\n  - name: RUN_ATHENA_MINIO\n    value: "true"\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Add volume to Athena STS:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"  volumeClaimTemplates:\n  ...\n  - apiVersion: v1\n    kind: PersistentVolumeClaim\n    metadata:\n      creationTimestamp: null\n      name: minio-storage\n    spec:\n      accessModes:\n      - ReadWriteOnce\n      resources:\n        requests:\n          storage: 10Gi\n      volumeMode: Filesystem\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Add volume mount to Athena:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"  volumeMounts:\n  ...\n  - mountPath: /minio/data\n    name: minio-storage\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Add the Minio port to Athena SVC:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"  ports:\n  ...\n  - name: minio\n    port: 9000\n    protocol: TCP\n    targetPort: 9000\n"})}),"\n",(0,t.jsx)(n.h2,{id:"navigate-to-the-download-logs-ui",children:"Navigate to the Download logs UI"}),"\n",(0,t.jsx)(n.p,{children:"To download logs in the Prophecy UI, follow these steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Log in to the Prophecy UI as an admin user."}),"\n",(0,t.jsxs)(n.li,{children:["Click on the ",(0,t.jsx)(n.strong,{children:"three dots"})," at the bottom left corner and select the ",(0,t.jsx)(n.strong,{children:"Settings"})," icon from the submenu."]}),"\n",(0,t.jsxs)(n.li,{children:["Navigate to the ",(0,t.jsx)(n.strong,{children:"Admin"})," main tab."]}),"\n",(0,t.jsxs)(n.li,{children:["Within the Admin main tab, access the ",(0,t.jsx)(n.strong,{children:"Logs"})," sub tab."]}),"\n",(0,t.jsxs)(n.li,{children:["Set the ",(0,t.jsx)(n.strong,{children:"Services"})," and ",(0,t.jsx)(n.strong,{children:"Start Date/Time"}),", and then click ",(0,t.jsx)(n.strong,{children:"Download"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"After several seconds, the file will download via your browser. The download generates a compressed file containing logs, suitable for sharing with a Prophecy support engineer."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);