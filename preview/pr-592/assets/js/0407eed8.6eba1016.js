"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[49474],{7151:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/databricks-fabric-config-78ab98376a7da14bbfed4b667671ee64.png"},17602:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"administration/authentication/databricks-oauth","title":"Databricks OAuth","description":"Prophecy Databricks OAuth integration","source":"@site/docs/administration/authentication/databricks-oauth.md","sourceDirName":"administration/authentication","slug":"/databricks-oauth-authentication","permalink":"/prophecy-docs-staging/preview/pr-592/databricks-oauth-authentication","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"authentication","permalink":"/prophecy-docs-staging/preview/pr-592/tags/authentication"},{"inline":true,"label":"databricks","permalink":"/prophecy-docs-staging/preview/pr-592/tags/databricks"},{"inline":true,"label":"oauth","permalink":"/prophecy-docs-staging/preview/pr-592/tags/oauth"}],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Databricks OAuth","id":"databricks-oauth","slug":"/databricks-oauth-authentication","description":"Prophecy Databricks OAuth integration","sidebar_position":6,"tags":["authentication","databricks","oauth"]},"sidebar":"adminSidebar","previous":{"title":"SAML and SCIM","permalink":"/prophecy-docs-staging/preview/pr-592/administration/authentication/saml-scim"},"next":{"title":"Syncing audit logs from SaaS","permalink":"/prophecy-docs-staging/preview/pr-592/administration/saas/audit-logging"}}');var s=i(74848),a=i(28453);const r={title:"Databricks OAuth",id:"databricks-oauth",slug:"/databricks-oauth-authentication",description:"Prophecy Databricks OAuth integration",sidebar_position:6,tags:["authentication","databricks","oauth"]},o=void 0,c={},h=[{value:"Requirements",id:"requirements",level:2},{value:"Register Prophecy as an app connection in Databricks",id:"app-connection",level:3},{value:"Use cases supported by Databricks",id:"use-cases-supported-by-databricks",level:2},{value:"User-to-Machine (U2M)",id:"user-to-machine-u2m",level:3},{value:"Machine-to-Machine (M2M)",id:"machine-to-machine-m2m",level:3},{value:"Security",id:"security",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Prophecy provides Databricks OAuth to align with industry-standard authentication flows. This gives you more granular access control, making it a good alternative to Personal Access Tokens (PATs). This integration works with both Spark clusters and SQL warehouses."}),"\n",(0,s.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Prophecy 3.4.3.1 or later."}),"\n",(0,s.jsx)(t.li,{children:"An app connection between Databricks and Prophecy. This connection is set up by default in SaaS environments and no further action is needed."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["For Dedicated SaaS and self-hosted deployments, follow the steps below. Prior to performing this one-time registration process, ",(0,s.jsx)(t.strong,{children:"users will see the OAuth option in fabrics but will be unable to use it."})]}),"\n",(0,s.jsx)(t.h3,{id:"app-connection",children:"Register Prophecy as an app connection in Databricks"}),"\n",(0,s.jsxs)(t.p,{children:["First, a Databricks ",(0,s.jsx)(t.a,{href:"https://docs.databricks.com/en/admin/index.html#what-are-account-admins",children:"account admin"})," needs to complete the following steps ",(0,s.jsx)(t.strong,{children:"once"})," for your Prophecy deployment:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["On Databricks, navigate to ",(0,s.jsx)(t.strong,{children:"Account Settings > App connections"})," in your account console."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://docs.databricks.com/en/integrations/enable-disable-oauth.html#enable-custom-oauth-applications-using-the-databricks-ui",children:"Create a new App connection"})," for Prophecy. Ensure that:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Access scopes are set to ",(0,s.jsx)(t.strong,{children:"ALL APIs"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["The redirect URL contains ",(0,s.jsx)(t.code,{children:"<your_prophecy_url>/api/databricks/oauthredirect"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"This process generates Databricks OAuth Application fields on the Prophecy side."}),"\n",(0,s.jsxs)(t.li,{children:["Under Client ID, copy your ",(0,s.jsx)(t.strong,{children:"OAuth Client ID"})," for the application, and share it with your Prophecy Cluster Admin."]}),"\n",(0,s.jsxs)(t.li,{children:["Under Client secret, select ",(0,s.jsx)(t.strong,{children:"Generate a client secret"}),". Share it with your Prophecy Cluster Admin."]}),"\n",(0,s.jsxs)(t.li,{children:["Click ",(0,s.jsx)(t.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Then, the Prophecy cluster admin has to add the Databricks credentials to Prophecy:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Navigate to ",(0,s.jsx)(t.strong,{children:"Admin Settings > Security"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Under ",(0,s.jsx)(t.strong,{children:"Databricks OAuth Application (U2M)"}),", paste the ",(0,s.jsx)(t.strong,{children:"Client ID"})," and the ",(0,s.jsx)(t.strong,{children:"Client Secret"})," into the respective fields."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Security settings in Prophecy",src:i(67914).A+"",width:"2620",height:"1002"})}),"\n",(0,s.jsx)(t.p,{children:"Finally, the Prophecy Kubernetes cluster must be restarted to enact these changes."}),"\n",(0,s.jsx)(t.h2,{id:"use-cases-supported-by-databricks",children:"Use cases supported by Databricks"}),"\n",(0,s.jsx)(t.p,{children:"In Prophecy, you can use Databricks OAuth in two ways. The most common method is U2M, but you can optionally use M2M as well."}),"\n",(0,s.jsx)(t.h3,{id:"user-to-machine-u2m",children:(0,s.jsx)(t.a,{href:"https://docs.databricks.com/en/dev-tools/auth/oauth-u2m.html",children:"User-to-Machine (U2M)"})}),"\n",(0,s.jsxs)(t.p,{children:["This method is used for ",(0,s.jsx)(t.strong,{children:"pipeline development"})," and ",(0,s.jsx)(t.strong,{children:"job configuration"}),". In this case, users authenticate individually via Databricks. In this case, users access data based on their individual identity and the permissions already defined within the Databricks Unity Catalog."]}),"\n",(0,s.jsxs)(t.p,{children:["To configure a ",(0,s.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-592/fabrics",children:"fabric"})," for this use case:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Create a new Spark or SQL fabric."}),"\n",(0,s.jsxs)(t.li,{children:["Choose ",(0,s.jsx)(t.strong,{children:"Databricks"})," as the provider."]}),"\n",(0,s.jsx)(t.li,{children:"Enter the relevant Databricks workspace URL."}),"\n",(0,s.jsxs)(t.li,{children:["Choose ",(0,s.jsx)(t.strong,{children:"OAuth"})," as the authentication method."]}),"\n",(0,s.jsxs)(t.li,{children:["Click ",(0,s.jsx)(t.strong,{children:"Test Connection"})," to test the sign in to Databricks."]}),"\n",(0,s.jsxs)(t.li,{children:["Finish the fabric configuration as normal and click ",(0,s.jsx)(t.strong,{children:"Complete"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["You ",(0,s.jsx)(t.strong,{children:"do not"})," have to fill out the Service Principal Client ID and Service Principal Client Secret for this use case."]}),"\n",(0,s.jsx)(t.p,{children:"Now, anyone who uses this fabric can use their individual Databricks credentials for authentication. Prophecy will automatically prompt users to sign in when necessary."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Databricks login prompt",src:i(57718).A+"",width:"2620",height:"1508"})}),"\n",(0,s.jsx)(t.p,{children:"When you try to sign in, a new browser tab will automatically open. If the tab does not open, you may need to bypass or disable pop-up blockers."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"You only need to sign in periodically depending on the OAuth timeout settings within Databricks. SaaS deployments automatically use the default time period. If you have a Dedicated SaaS or self-hosted deployment, your Databricks Account Administrator can adjust the timeout setting."})}),"\n",(0,s.jsx)(t.h3,{id:"machine-to-machine-m2m",children:(0,s.jsx)(t.a,{href:"https://docs.databricks.com/en/dev-tools/auth/oauth-m2m.html",children:"Machine-to-Machine (M2M)"})}),"\n",(0,s.jsxs)(t.p,{children:["This method is used for ",(0,s.jsx)(t.strong,{children:"project deployment"}),". In this case, authentication is performed using Databricks ",(0,s.jsx)(t.a,{href:"https://docs.databricks.com/en/dev-tools/auth/oauth-m2m.html",children:"service principal"})," credentials for unattended operations (such as automated deployment). The minimum level of access that your service principal requires (including access to clusters, tables, etc.) will vary per use case."]}),"\n",(0,s.jsxs)(t.p,{children:["To configure a ",(0,s.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-592/fabrics",children:"fabric"})," for this use case:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Create a new Spark or SQL fabric."}),"\n",(0,s.jsxs)(t.li,{children:["Choose ",(0,s.jsx)(t.strong,{children:"Databricks"})," as the provider."]}),"\n",(0,s.jsx)(t.li,{children:"Enter the relevant Databricks workspace URL."}),"\n",(0,s.jsxs)(t.li,{children:["Choose ",(0,s.jsx)(t.strong,{children:"OAuth"})," as the authentication method."]}),"\n",(0,s.jsxs)(t.li,{children:["Enter the ",(0,s.jsx)(t.strong,{children:"Service Principal Client ID"})," and ",(0,s.jsx)(t.strong,{children:"Service Principal Client Secret"})," into the respective fields. This is different from the Client ID and Client Secret that was used to set up the ",(0,s.jsx)(t.a,{href:"#app-connection",children:"app connection"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Click ",(0,s.jsx)(t.strong,{children:"Test Connection"})," to test the sign in to Databricks."]}),"\n",(0,s.jsxs)(t.li,{children:["Finish the fabric configuration as normal and click ",(0,s.jsx)(t.strong,{children:"Complete"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Databricks fabric configuration",src:i(7151).A+"",width:"2620",height:"1508"})}),"\n",(0,s.jsxs)(t.p,{children:["Now, when this fabric is used, ",(0,s.jsx)(t.strong,{children:"scheduled jobs will always run as the service principal"}),". In the Airflow and Databricks Job IDE, a warning will display if the connected fabric does not contain service principal OAuth Credentials."]}),"\n",(0,s.jsx)(t.p,{children:"Additionally, project releases and deployment will be performed by the service principal on behalf of the Prophecy team admin when using this fabric."}),"\n",(0,s.jsx)(t.h2,{id:"security",children:"Security"}),"\n",(0,s.jsx)(t.p,{children:"Prophecy ensures robust security measures during the OAuth authentication process, following best practices documented by Databricks. For example:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The authentication process follows a three-step OAuth flow to generate tokens, leveraging Proof Key for Code Exchange (PKCE) to enhance security. Prophecy uses a Prophecy-hosted callback URL to capture and process authorization codes, issuing and securely storing access tokens."}),"\n",(0,s.jsx)(t.li,{children:"Prophecy securely stores the refresh token, which is used to renew itself and obtain new access tokens, to ensure uninterrupted authenticated connectivity to Databricks. Tokens are encrypted before being stored in the database, following the same stringent encryption standards applied to other credentials managed by Prophecy."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var n=i(96540);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}},57718:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/databricks-fabric-login-53195f7395809140e30d7e9b14b41eef.png"},67914:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/databricks-oauth-admin-a3b45c9c2a1bb61c199e42d7e6576ee0.png"}}]);