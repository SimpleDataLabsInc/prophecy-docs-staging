"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[81213],{28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}},51282:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"administration/fabrics/prophecy-fabrics/connections/sftp","title":"SFTP","description":"Learn how to set up an SFTP connection in Prophecy","source":"@site/docs/administration/fabrics/prophecy-fabrics/connections/sftp.md","sourceDirName":"administration/fabrics/prophecy-fabrics/connections","slug":"/administration/fabrics/prophecy-fabrics/connections/sftp","permalink":"/prophecy-docs-staging/preview/pr-607/administration/fabrics/prophecy-fabrics/connections/sftp","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"connections","permalink":"/prophecy-docs-staging/preview/pr-607/tags/connections"},{"inline":true,"label":"sftp","permalink":"/prophecy-docs-staging/preview/pr-607/tags/sftp"}],"version":"current","frontMatter":{"title":"SFTP","id":"sftp","description":"Learn how to set up an SFTP connection in Prophecy","tags":["connections","sftp"]},"sidebar":"adminSidebar","previous":{"title":"Amazon S3","permalink":"/prophecy-docs-staging/preview/pr-607/administration/fabrics/prophecy-fabrics/connections/s3"},"next":{"title":"Smartsheet","permalink":"/prophecy-docs-staging/preview/pr-607/administration/fabrics/prophecy-fabrics/connections/smartsheet"}}');var i=t(74848),r=t(28453);const o={title:"SFTP",id:"sftp",description:"Learn how to set up an SFTP connection in Prophecy",tags:["connections","sftp"]},a=void 0,c={},d=[{value:"Feature support",id:"feature-support",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Authentication methods",id:"authentication-methods",level:2},{value:"SFTP permissions",id:"sftp-permissions",level:2},{value:"Sharing connections within teams",id:"sharing-connections-within-teams",level:2},{value:"Fetching data",id:"fetching-data",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"SFTP (Secure File Transfer Protocol) is a secure way to transfer files over the internet using an encrypted connection between a client and a server. It\u2019s commonly used to exchange data between systems, especially in enterprise environments where security and reliability are critical."}),"\n",(0,i.jsx)(n.p,{children:"In Prophecy, you can use an SFTP connection to read from and write to remote file systems directly in your data pipelines. This is useful when your data is stored outside cloud storage or databases, such as in on-premise servers or partner systems."}),"\n",(0,i.jsx)(n.h2,{id:"feature-support",children:"Feature support"}),"\n",(0,i.jsx)(n.p,{children:"The table below outlines whether the connection supports certain Prophecy features."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Feature"}),(0,i.jsx)(n.th,{children:"Supported"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Read data with a ",(0,i.jsx)(n.a,{href:"/analysts/source-target",children:"Source gem"})]}),(0,i.jsx)(n.td,{children:"Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Write data with a ",(0,i.jsx)(n.a,{href:"/analysts/source-target",children:"Target gem"})]}),(0,i.jsx)(n.td,{children:"Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Browse data in the ",(0,i.jsx)(n.a,{href:"/analysts/pipelines",children:"Environment browser"})]}),(0,i.jsx)(n.td,{children:"Yes"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsx)(n.p,{children:"Keep in mind the following limitations when using an SFTP connection."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Simultaneous writes can cause file corruption."})," If multiple processes\u2014such as different Prophecy jobs\u2014try to write to the same file at the same time using the same SFTP connection details, it can result in race conditions or corrupted files. This happens because the connector doesn't perform any client-side locking to coordinate access."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Network latency affects transfer performance."})," The speed and reliability of SFTP transfers depend on the physical distance between the SFTP server and Prophecy\u2019s infrastructure. Servers that are geographically closer to your Prophecy environment will generally provide faster, more stable performance. Servers located farther away may introduce higher latency, leading to slower or less consistent data transfers. For best results, use SFTP servers in the same region as your Prophecy environment."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(n.p,{children:"To configure an SFTP connection in Prophecy, enter the following parameters:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Connection Name"}),(0,i.jsxs)(n.td,{children:["Unique name for the connection (e.g., ",(0,i.jsx)(n.code,{children:"MySFTPConnection"}),")"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Host"}),(0,i.jsx)(n.td,{children:"Hostname or IP address of the SFTP server"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Port"}),(0,i.jsxs)(n.td,{children:["Port number for SFTP (default is ",(0,i.jsx)(n.code,{children:"22"}),")"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Username"}),(0,i.jsx)(n.td,{children:"Your SFTP username"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Authentication Method"}),(0,i.jsxs)(n.td,{children:["Choice between ",(0,i.jsx)(n.strong,{children:"Password"})," or ",(0,i.jsx)(n.strong,{children:"Private Key"})," authentication"]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"authentication-methods",children:"Authentication methods"}),"\n",(0,i.jsx)(n.p,{children:"You can configure your SFTP connection with one of the following authentication methods:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Password."})," Use a ",(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-607/administration/secrets/",children:"secret"})," to enter your SFTP password."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Private key"}),". Upload a file that contains your SFTP private key."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"sftp-permissions",children:"SFTP permissions"}),"\n",(0,i.jsx)(n.p,{children:"When you use an SFTP connection in Prophecy, permissions depend on the underlying SSH server and filesystem permissions on the server."}),"\n",(0,i.jsx)(n.h2,{id:"sharing-connections-within-teams",children:"Sharing connections within teams"}),"\n",(0,i.jsxs)(n.p,{children:["Connections in Prophecy are stored within ",(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-607/administration/fabrics/prophecy-fabrics/",children:"fabrics"}),", which are assigned to specific teams. Once an SFTP connection is added to a fabric, all team members that have access to the fabric can use the connection in their projects. No additional authentication is required\u2014team members automatically inherit the access and permissions of the original connection."]}),"\n",(0,i.jsxs)(n.admonition,{type:"caution",children:[(0,i.jsx)(n.p,{children:"Be mindful of the access level granted by the stored credentials. Anyone on the team will have the same permissions\u2014including access to sensitive data if allowed."}),(0,i.jsx)(n.p,{children:"To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials."})]}),"\n",(0,i.jsx)(n.h2,{id:"fetching-data",children:"Fetching data"}),"\n",(0,i.jsx)(n.p,{children:"Prophecy fetches data from SFTP connections in the following ways:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When you browse an SFTP connection in the ",(0,i.jsx)(n.a,{href:"/analysts/pipelines",children:"Environment browser"}),", Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"When a pipeline runs, Source gems will read the latest available version of the data. If the schema changes in the external connection, you will need to re-infer the schema in Prophecy."}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);