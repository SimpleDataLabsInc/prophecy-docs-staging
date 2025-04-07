"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[82362],{4803:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/okta_dl_cert-0f492bd46f0627d7206c135c6c8ef2e9.png"},10006:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/sso-scim-647df26fc0d3bba6a708477cb2d5074b.png"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var s=i(96540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}},40937:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/okta_xml-7c8ba189fececf1f90db537d0685afac.png"},81224:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/okta_example-4e85f048aa3e058aed50b83093c2739c.png"},91206:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"administration/authentication/saml-scim","title":"SAML and SCIM","description":"SAML authentication","source":"@site/docs/administration/authentication/saml-scim.md","sourceDirName":"administration/authentication","slug":"/administration/authentication/saml-scim","permalink":"/prophecy-docs-staging/preview/pr-608/administration/authentication/saml-scim","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"authentication","permalink":"/prophecy-docs-staging/preview/pr-608/tags/authentication"},{"inline":true,"label":"saml","permalink":"/prophecy-docs-staging/preview/pr-608/tags/saml"},{"inline":true,"label":"okta","permalink":"/prophecy-docs-staging/preview/pr-608/tags/okta"},{"inline":true,"label":"azureAD","permalink":"/prophecy-docs-staging/preview/pr-608/tags/azure-ad"}],"version":"current","sidebarPosition":5,"frontMatter":{"title":"SAML and SCIM","id":"saml-scim","description":"SAML authentication","sidebar_position":5,"tags":["authentication","saml","okta","azureAD"]},"sidebar":"adminSidebar","previous":{"title":"Azure Active Directory","permalink":"/prophecy-docs-staging/preview/pr-608/administration/authentication/azure-ad"},"next":{"title":"Databricks OAuth","permalink":"/prophecy-docs-staging/preview/pr-608/databricks-oauth-authentication"}}');var t=i(74848),r=i(28453);const o={title:"SAML and SCIM",id:"saml-scim",description:"SAML authentication",sidebar_position:5,tags:["authentication","saml","okta","azureAD"]},l=void 0,a={},c=[{value:"Requirements",id:"requirements",level:2},{value:"SAML configuration",id:"saml-configuration",level:2},{value:"Group Naming Conventions for SCIM",id:"group-naming-conventions-for-scim",level:2},{value:"Team Role Mapping",id:"team-role-mapping",level:3},{value:"Self-hosted Deployments Only",id:"self-hosted-deployments-only",level:3},{value:"AzureAD",id:"azuread",level:2},{value:"Basic SAML Configuration",id:"basic-saml-configuration",level:3},{value:"Attributes &amp; Claims",id:"attributes--claims",level:3},{value:"SAML certificates",id:"saml-certificates",level:3},{value:"Set up ProphecyAzureADApp",id:"set-up-prophecyazureadapp",level:3},{value:"Okta",id:"okta",level:2},{value:"Information required from Okta",id:"information-required-from-okta",level:3},{value:"Download SAML Signing Certificate",id:"download-saml-signing-certificate",level:4},{value:"SSO URL",id:"sso-url",level:4},{value:"Entity and SSO Issuer",id:"entity-and-sso-issuer",level:4}];function d(e){const n={br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Use this page to understand how to set up SAML authentication and SCIM provisioning in Prophecy."}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Organization admin role in Prophecy."}),"\n",(0,t.jsxs)(n.li,{children:["SCIM enabled in Prophecy deployment ",(0,t.jsx)(n.code,{children:"config"})," (Dedicated SaaS and self-hosted deployments only)."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"saml-configuration",children:"SAML configuration"}),"\n",(0,t.jsx)(n.p,{children:"To set up SSO using SAML:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Navigate to ",(0,t.jsx)(n.strong,{children:"Settings > SSO"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Choose ",(0,t.jsx)(n.strong,{children:"SAML"})," as the Authentication Provider."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Generate SCIM Token"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Choose the relevant ",(0,t.jsx)(n.strong,{children:"IDP"}),". This can be Okta, AzureAD, Google, or others."]}),"\n",(0,t.jsxs)(n.li,{children:["Input your ",(0,t.jsx)(n.strong,{children:"SSO URL"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Add your ",(0,t.jsx)(n.strong,{children:"Certificate"})," or skip certificate verification."]}),"\n",(0,t.jsxs)(n.li,{children:["Fill in your ",(0,t.jsx)(n.strong,{children:"Entity issuer"})," and ",(0,t.jsx)(n.strong,{children:"SSO issuer"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"SSO settings for SAML and SCIM configurations",src:i(10006).A+"",width:"2620",height:"1511"})}),"\n",(0,t.jsx)(n.h2,{id:"group-naming-conventions-for-scim",children:"Group Naming Conventions for SCIM"}),"\n",(0,t.jsx)(n.p,{children:"Groups defined in your SCIM protocol are mapped to teams and admins in Prophecy. Follow the naming convention below to assign the correct roles to users."}),"\n",(0,t.jsx)(n.h3,{id:"team-role-mapping",children:"Team Role Mapping"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Group Name"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Role in Prophecy"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"<teamname>"})}),(0,t.jsx)(n.td,{children:"Users will be assigned to the team with the same name in Prophecy."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"<teamname>-admin"})}),(0,t.jsx)(n.td,{children:"Users will be assigned as Team Admins for the corresponding team in Prophecy."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"self-hosted-deployments-only",children:"Self-hosted Deployments Only"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Group Name"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Role in Prophecy"})})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"prophecy-admin"})}),(0,t.jsx)(n.td,{children:"Users will be Cluster Admins in Prophecy."})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"azuread",children:"AzureAD"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Configure SAML for Azure Active Directory and enable SCIM provisioning"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Log into AzureAD as an administrator and create a new Enterprise Application like ",(0,t.jsx)(n.code,{children:"ProphecyAzureADApp"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["In the home page search bar, search for ",(0,t.jsx)(n.strong,{children:"Enterprise Applications"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"New Application > Create your own application"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Give name for the application like ",(0,t.jsx)(n.code,{children:"ProphecyAzureADApp"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Choose the radio button ",(0,t.jsx)(n.strong,{children:"Integrate any other application you don't find in the gallery (Non-gallery)"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Create"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["In Manage section on the left, click ",(0,t.jsx)(n.strong,{children:"Single sign-on"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Choose ",(0,t.jsx)(n.strong,{children:"SAML"})," as the Single sign-on method."]}),"\n"]}),(0,t.jsxs)(n.p,{children:["Now the form for ",(0,t.jsx)(n.strong,{children:"Set up Single Sign-On with SAML"})," will open. You'll have to fill out different sections of the form."]}),(0,t.jsx)(n.h3,{id:"basic-saml-configuration",children:"Basic SAML Configuration"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Provide an Identifier (Entity ID) which is a unique ID to identify this application to Azure Active Directory."}),"\n",(0,t.jsxs)(n.li,{children:["In the same section, configure ",(0,t.jsx)(n.strong,{children:"Reply URL"})," and ",(0,t.jsx)(n.strong,{children:"Sign on URL"})," as:",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"https://your-prophecy-ide-url.domain/api/oauth/samlCallback"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),(0,t.jsx)(n.h3,{id:"attributes--claims",children:"Attributes & Claims"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Edit"})," button and then ",(0,t.jsx)(n.strong,{children:"Add new claim"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Give ",(0,t.jsx)(n.strong,{children:"Name"})," as ",(0,t.jsx)(n.code,{children:"email"})," and ",(0,t.jsx)(n.strong,{children:"Source Attribute"})," as ",(0,t.jsx)(n.code,{children:"user.userprincipalname"}),", and click ",(0,t.jsx)(n.strong,{children:"Save"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Add one more claim by clicking on ",(0,t.jsx)(n.strong,{children:"Add new claim"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Give ",(0,t.jsx)(n.strong,{children:"Name"})," as ",(0,t.jsx)(n.code,{children:"name"})," and ",(0,t.jsx)(n.strong,{children:"Source Attribute"})," as ",(0,t.jsx)(n.code,{children:"user.givenname"}),", and click ",(0,t.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),(0,t.jsx)(n.h3,{id:"saml-certificates",children:"SAML certificates"}),(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"SAML certificates"})," section, download ",(0,t.jsx)(n.code,{children:"Certificate (Base64)"})," file to be used while configuring SSO in Prophecy UI."]}),(0,t.jsx)(n.h3,{id:"set-up-prophecyazureadapp",children:"Set up ProphecyAzureADApp"}),(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Set up ProphecyAzureADApp"})," section, copy ",(0,t.jsx)(n.code,{children:"Login URL"})," and ",(0,t.jsx)(n.code,{children:"Azure AD Identifier"})," to be used while configuring SSO in Prophecy UI."]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"AzureAD config example",src:i(96796).A+"",width:"674",height:"679"})})]}),"\n",(0,t.jsx)(n.h2,{id:"okta",children:"Okta"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Configure SAML for Okta and enable SCIM provisioning"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Log in to Okta as an administrator."}),"\n",(0,t.jsxs)(n.li,{children:["On the homepage, navigate to ",(0,t.jsx)(n.strong,{children:"Applications"})," > ",(0,t.jsx)(n.strong,{children:"Applications"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Create App Integration"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.strong,{children:"SAML 2.0"})," and click ",(0,t.jsx)(n.strong,{children:"Next"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Enter ",(0,t.jsx)(n.strong,{children:"App Name"})," as ",(0,t.jsx)(n.em,{children:"Prophecy SAML App"})," and click ",(0,t.jsx)(n.strong,{children:"Next"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["For ",(0,t.jsx)(n.strong,{children:"Single Sign-On URL"}),", specify ",(0,t.jsx)(n.code,{children:"https://your-prophecy-ide-url.domain/api/oauth/samlCallback"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.strong,{children:"Use this"})," for both ",(0,t.jsx)(n.strong,{children:"Recipient URL"})," and ",(0,t.jsx)(n.strong,{children:"Destination URL"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["In ",(0,t.jsx)(n.strong,{children:"Audience URI (SP Entity ID)"}),", provide a name to serve as the entity issuer ID (e.g., ",(0,t.jsx)(n.em,{children:"prophecyokta"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["Set ",(0,t.jsx)(n.strong,{children:"Name ID format"})," to ",(0,t.jsx)(n.strong,{children:"EmailAddress"})," from the dropdown."]}),"\n",(0,t.jsxs)(n.li,{children:["For ",(0,t.jsx)(n.strong,{children:"Application Username"}),", select ",(0,t.jsx)(n.strong,{children:"Email"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Under ",(0,t.jsx)(n.strong,{children:"Attribute Statements"}),", add two attributes ",(0,t.jsx)(n.strong,{children:"name"})," and ",(0,t.jsx)(n.strong,{children:"email"}),"."]}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Okta config example",src:i(81224).A+"",width:"1127",height:"1466"})}),(0,t.jsxs)(n.ol,{start:"12",children:["\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Next"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Choose ",(0,t.jsx)(n.strong,{children:"I\u2019m an Okta customer adding an internal app"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Finish"}),". The ",(0,t.jsx)(n.em,{children:"Prophecy SAML App"})," is now displayed."]}),"\n"]}),(0,t.jsx)(n.h3,{id:"information-required-from-okta",children:"Information required from Okta"}),(0,t.jsx)(n.h4,{id:"download-saml-signing-certificate",children:"Download SAML Signing Certificate"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Navigate to the ",(0,t.jsx)(n.strong,{children:"Sign On"})," tab of ",(0,t.jsx)(n.em,{children:"Prophecy SAML App"})," in Okta."]}),"\n",(0,t.jsxs)(n.li,{children:["Locate the ",(0,t.jsx)(n.strong,{children:"SAML Signing Certificates"})," section."]}),"\n",(0,t.jsx)(n.li,{children:"Click the download button, as shown in the example below, to download the certificate:"}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Download Okta Cert",src:i(4803).A+"",width:"1138",height:"788"})}),(0,t.jsx)(n.h4,{id:"sso-url",children:"SSO URL"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In the same ",(0,t.jsx)(n.strong,{children:"Sign On"})," tab under ",(0,t.jsx)(n.strong,{children:"SAML Signing Certificates"}),", click ",(0,t.jsx)(n.strong,{children:"View IdP metadata"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"This action opens an XML file in a new browser tab."}),"\n",(0,t.jsxs)(n.li,{children:["Copy the red-highlighted text in the ",(0,t.jsx)(n.strong,{children:"Location"})," section of the XML file and use it as the ",(0,t.jsx)(n.strong,{children:"SSO URL"})," in Prophecy IDE."]}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"IDP Metadata",src:i(92785).A+"",width:"3142",height:"820"})}),(0,t.jsx)(n.h4,{id:"entity-and-sso-issuer",children:"Entity and SSO Issuer"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to the ",(0,t.jsx)(n.strong,{children:"General"})," tab, then navigate to the ",(0,t.jsx)(n.strong,{children:"SAML Settings"})," section and click ",(0,t.jsx)(n.strong,{children:"Edit"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Next"})," to reach the ",(0,t.jsx)(n.strong,{children:"Configure SAML"})," section."]}),"\n",(0,t.jsxs)(n.li,{children:["Scroll to the bottom and click the ",(0,t.jsx)(n.strong,{children:"Preview the SAML assertion"})," button."]}),"\n",(0,t.jsx)(n.li,{children:"This opens a new browser tab."}),"\n",(0,t.jsxs)(n.li,{children:["Copy the highlighted information from the preview and use it as the ",(0,t.jsx)(n.strong,{children:"Entity Issuer"})," and ",(0,t.jsx)(n.strong,{children:"SSO Issuer"})," in Prophecy IDE."]}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"SAML Assertion",src:i(40937).A+"",width:"2736",height:"1116"})})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},92785:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/okta_idp_metadata_xml-2c9061db8a27d4d1f3621d3c6d8a045f.png"},96796:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/azure_enterpriseapp_sso-3d4936d29f9ecbe90eb9228ca6bfa896.png"}}]);