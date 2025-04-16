"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[25449],{22642:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"administration/fabrics/prophecy-fabrics/connections/smtp","title":"SMTP","description":"Learn how to configure an SMTP connection","source":"@site/docs/administration/fabrics/prophecy-fabrics/connections/smtp.md","sourceDirName":"administration/fabrics/prophecy-fabrics/connections","slug":"/administration/fabrics/prophecy-fabrics/connections/smtp","permalink":"/prophecy-docs-staging/preview/pr-615/administration/fabrics/prophecy-fabrics/connections/smtp","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"connections","permalink":"/prophecy-docs-staging/preview/pr-615/tags/connections"},{"inline":true,"label":"smtp","permalink":"/prophecy-docs-staging/preview/pr-615/tags/smtp"}],"version":"current","frontMatter":{"title":"SMTP","id":"smtp","description":"Learn how to configure an SMTP connection","tags":["connections","smtp"]},"sidebar":"adminSidebar","previous":{"title":"Microsoft SharePoint","permalink":"/prophecy-docs-staging/preview/pr-615/administration/fabrics/prophecy-fabrics/connections/sharepoint"},"next":{"title":"Tableau","permalink":"/prophecy-docs-staging/preview/pr-615/administration/fabrics/prophecy-fabrics/connections/tableau"}}');var r=t(74848),s=t(28453);const o={title:"SMTP",id:"smtp",description:"Learn how to configure an SMTP connection",tags:["connections","smtp"]},c=void 0,a={},d=[{value:"Feature support",id:"feature-support",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Sharing connections within teams",id:"sharing-connections-within-teams",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"SMTP (Simple Mail Transfer Protocol) connections are used to send emails over the internet by allowing communication between email clients and servers. When you create an SMTP connection in Prophecy, the user credentials you provide are used to establish the connection. This user will always be the sender of an email when you use the Email gem with this connection."}),"\n",(0,r.jsx)(n.h2,{id:"feature-support",children:"Feature support"}),"\n",(0,r.jsx)(n.p,{children:"The table below outlines whether the connection supports certain Prophecy features."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Feature"}),(0,r.jsx)(n.th,{children:"Supported"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Read data with a ",(0,r.jsx)(n.a,{href:"/analysts/source-target",children:"Source gem"})]}),(0,r.jsx)(n.td,{children:"No"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Write data with a Report gem"}),(0,r.jsx)(n.td,{children:"Yes"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Browse data in the ",(0,r.jsx)(n.a,{href:"/analysts/pipelines",children:"Environment browser"})]}),(0,r.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,r.jsx)(n.p,{children:"Only basic authentication is supported. The SMTP server must support plain username and password authentication. Prophecy does not currently support OAuth or other advanced authentication methods for SMTP connections."}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(n.p,{children:"To create an SMTP connection, enter the following parameters:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Connection Name"}),(0,r.jsxs)(n.td,{children:["Unique name for the connection (e.g., ",(0,r.jsx)(n.code,{children:"MySMTPConnection"}),")"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"URL"}),(0,r.jsxs)(n.td,{children:["SMTP server URL (e.g., ",(0,r.jsx)(n.code,{children:"smtp.gmail.com"}),")"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Port"}),(0,r.jsx)(n.td,{children:"SMTP port. Port options may vary between SMTP services."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Username"}),(0,r.jsx)(n.td,{children:"Your SMTP username"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Password (",(0,r.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-615/administration/secrets/",children:"Secret required"}),")"]}),(0,r.jsx)(n.td,{children:"Your SMTP password"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"sharing-connections-within-teams",children:"Sharing connections within teams"}),"\n",(0,r.jsxs)(n.p,{children:["Connections in Prophecy are stored within ",(0,r.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-615/administration/fabrics/prophecy-fabrics/",children:"fabrics"}),", which are assigned to specific teams. Once an SMTP connection is added to a fabric, anyone in the team can use that connection to send emails from a pipeline."]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);