"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[6499],{28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var n=i(96540);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}},37854:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"administration/security","title":"Security","description":"Learn about Prophecy\'s security practices","source":"@site/docs/administration/security.md","sourceDirName":"administration","slug":"/administration/security","permalink":"/prophecy-docs-staging/preview/pr-601/administration/security","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"security","permalink":"/prophecy-docs-staging/preview/pr-601/tags/security"},{"inline":true,"label":"network","permalink":"/prophecy-docs-staging/preview/pr-601/tags/network"}],"version":"current","frontMatter":{"title":"Security","id":"security","description":"Learn about Prophecy\'s security practices","tags":["security","network"]},"sidebar":"adminSidebar","previous":{"title":"Prophecy deployment","permalink":"/prophecy-docs-staging/preview/pr-601/administration/prophecy-deployment"},"next":{"title":"Authentication","permalink":"/prophecy-docs-staging/preview/pr-601/administration/authentication/"}}');var r=i(74848),s=i(28453);const o={title:"Security",id:"security",description:"Learn about Prophecy's security practices",tags:["security","network"]},a=void 0,c={},l=[{value:"Framework",id:"framework",level:2},{value:"Product",id:"product",level:3},{value:"AI and LLMs",id:"ai-and-llms",level:3},{value:"Deployments",id:"deployments",level:3},{value:"Operations",id:"operations",level:3},{value:"Network configuration",id:"network-configuration",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Prophecy is SOC 2 compliant and safeguards data at every level across the product stack. Whether you use our multi-tenant, cloud-native SaaS platform or a self-hosted deployment, Prophecy is designed to meet the rigorous security requirements that are standard for enterprises."}),"\n",(0,r.jsx)(t.h2,{id:"framework",children:"Framework"}),"\n",(0,r.jsx)(t.p,{children:"The following is the framework we employ to ensure security with Prophecy."}),"\n",(0,r.jsx)(t.h3,{id:"product",children:"Product"}),"\n",(0,r.jsx)(t.p,{children:"Prophecy incorporates robust product security features to safeguard user access, data integrity, and compliance."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Authentication"}),". Authentication methods, including Single Sign-On (SSO) and Multi-Factor Authentication (MFA), ensure only authorized individuals can access the platform."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Authorization"}),'. Role-Based Access Control (RBAC) enforces a "least privilege" model, granting users only the permissions they need.']}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Auditing"}),". Detailed auditing capabilities log all user and admin activities for complete transparency and accountability."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Data protection"}),". Data is protected through encryption at rest and in motion, with compliant key management practices to safeguard sensitive information. While Prophecy code is stored in Git repositories, your data is not."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"ai-and-llms",children:"AI and LLMs"}),"\n",(0,r.jsx)(t.p,{children:"Prophecy takes a thoughtful approach to AI Large Language Model (LLM) security. While AI is used to make suggestions, it is never used to directly transform data or make business decisions. Prophecy Data Transformation Copilot is classified as a \u201cminimal risk\u201d AI application, in accordance with the EU Artificial Intelligence Act. Prophecy ensures that AI functionality remains transparent, secure, and trustworthy."}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Using an LLM with Prophecy is optional."})}),"\n",(0,r.jsx)(t.h3,{id:"deployments",children:"Deployments"}),"\n",(0,r.jsx)(t.p,{children:"Here\u2019s the full range of deployment options:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"SaaS"}),". Our highly secure and scalable default offering that employs multi-tenant architecture with multiple layers of logical isolation. Runs on Prophecy\u2019s AWS VPC."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Dedicated SaaS"}),". A single-tenant deployment option for organizations that prefer more isolated infrastructure deployed on a dedicated Prophecy AWS or Azure VPC."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Self-hosted"}),". Deployed in the customer\u2019s own network or Virtual Private Cloud (VPC). Not generally recommended. Contact Prophecy for more information."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"With these flexible options, Prophecy ensures every organization can adopt the deployment model that best suits their security and operational requirements."}),"\n",(0,r.jsx)(t.h3,{id:"operations",children:"Operations"}),"\n",(0,r.jsx)(t.p,{children:"Operational security is a key pillar of Prophecy\u2019s approach. The platform is built on hardened infrastructure designed to withstand external threats. Regular penetration testing ensures that vulnerabilities are identified and addressed promptly, while continuous vulnerability scanning and management further strengthen defenses. These practices ensure that Prophecy remains secure, reliable, and resilient against emerging threats."}),"\n",(0,r.jsx)(t.h2,{id:"network-configuration",children:"Network configuration"}),"\n",(0,r.jsx)(t.p,{children:"If you or your organization uses a firewall, VPN, or proxy, Prophecy might not work as expected. Review the following table to help you troubleshoot any issues."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Configuration"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"WebSocket connection"}),(0,r.jsx)(t.td,{children:"Prophecy uses a WebSocket connection while talking to certain backend services. Modify your setup to allow this WebSocket connection."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Whitelist URLs"}),(0,r.jsxs)(t.td,{children:["If you are using SaaS, you must whitelist the following URLs in your network:",(0,r.jsxs)("ul",{class:"table-list",children:[(0,r.jsx)("li",{children:(0,r.jsx)(t.code,{children:"http://app.prophecy.io/"})}),(0,r.jsx)("li",{children:(0,r.jsx)(t.code,{children:"http://execution.dp.app.prophecy.io/"})})]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Git providers"}),(0,r.jsxs)(t.td,{children:["Prophecy project code is stored in Git repositories. If you use Git providers within private networks behind firewalls, you must add the Prophecy Control Plane IP address ",(0,r.jsx)(t.code,{children:"3.133.35.237"})," to the private network allow-list or the Git provider ",(0,r.jsx)(t.a,{href:"https://github.blog/2019-12-12-ip-allow-lists-now-in-public-beta/",children:"allow-list"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Databricks connection"}),(0,r.jsxs)(t.td,{children:["If you limit Databricks network access, you must add the ",(0,r.jsx)(t.strong,{children:"Prophecy Data Plane IP address"})," ",(0,r.jsx)(t.code,{children:"3.133.35.237"})," to the Databricks allowed ",(0,r.jsx)(t.a,{href:"https://docs.databricks.com/security/network/ip-access-list.html",children:"access list"}),". If using Databricks OAuth, you need to ensure network connectivity between your browser and the Databricks workspace."]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);