"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[88913],{28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>c});var n=i(96540);const r={},o=n.createContext(r);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}},71746:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"administration/authentication/azure-ad","title":"Azure Active Directory","description":"Authentication using Azure Active Directory","source":"@site/docs/administration/authentication/azure-ad.md","sourceDirName":"administration/authentication","slug":"/administration/authentication/azure-ad","permalink":"/prophecy-docs-staging/preview/pr-608/administration/authentication/azure-ad","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"authentication","permalink":"/prophecy-docs-staging/preview/pr-608/tags/authentication"},{"inline":true,"label":"active-directory","permalink":"/prophecy-docs-staging/preview/pr-608/tags/active-directory"},{"inline":true,"label":"azure","permalink":"/prophecy-docs-staging/preview/pr-608/tags/azure"}],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Azure Active Directory","id":"azure-ad","description":"Authentication using Azure Active Directory","sidebar_position":3,"tags":["authentication","active-directory","azure"]},"sidebar":"adminSidebar","previous":{"title":"Authentication","permalink":"/prophecy-docs-staging/preview/pr-608/administration/authentication/"},"next":{"title":"SAML and SCIM","permalink":"/prophecy-docs-staging/preview/pr-608/administration/authentication/saml-scim"}}');var r=i(74848),o=i(28453);const s={title:"Azure Active Directory",id:"azure-ad",description:"Authentication using Azure Active Directory",sidebar_position:3,tags:["authentication","active-directory","azure"]},c=void 0,a={},d=[{value:"Register a new Azure App",id:"register-a-new-azure-app",level:2},{value:"API Permission",id:"api-permission",level:2},{value:"Certificates and Secrets",id:"certificates-and-secrets",level:2},{value:"Client ID",id:"client-id",level:2},{value:"Configure Prophecy to connect with Azure Active Directory",id:"configure-prophecy-to-connect-with-azure-active-directory",level:2}];function l(e){const t={a:"a",br:"br",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This document describes how to configure Azure Active Directory for Prophecy authentication."}),"\n",(0,r.jsx)(t.h2,{id:"register-a-new-azure-app",children:"Register a new Azure App"}),"\n",(0,r.jsxs)(t.p,{children:["First, you need to log in to the ",(0,r.jsx)(t.a,{href:"https://portal.azure.com/",children:"Azure portal"})," as an administrator and register a new app."]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["In the Azure portal, open the ",(0,r.jsx)(t.strong,{children:"App registrations"})," page."]}),"\n",(0,r.jsxs)(t.li,{children:["Click ",(0,r.jsx)(t.strong,{children:"New Registration"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Name it ",(0,r.jsx)(t.code,{children:"ProphecyAzureADApp"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Choose the supported account type: ",(0,r.jsx)(t.strong,{children:"Accounts in this organizational directory only (xxxxx only - Single tenant)"})]}),"\n",(0,r.jsxs)(t.li,{children:["For the Redirect URI, choose ",(0,r.jsx)(t.strong,{children:"Web"})," in the dropdown and use:",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.code,{children:"https://your-prophecy-ide-url.domain/api/oauth/azureadCallback"})]}),"\n",(0,r.jsxs)(t.li,{children:["Click ",(0,r.jsx)(t.strong,{children:"Register"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"api-permission",children:"API Permission"}),"\n",(0,r.jsxs)(t.p,{children:["Next, go to ",(0,r.jsx)(t.strong,{children:"API permissions"})," on the left-hand side and add this set of API permissions:"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("img",{width:"799",alt:"Screenshot 2022-06-13 at 9 57 16 PM",src:"https://user-images.githubusercontent.com/59466885/173400731-acb084df-31a7-4858-b6ba-f395e888e60e.png"}),"\n",(0,r.jsx)(t.h2,{id:"certificates-and-secrets",children:"Certificates and Secrets"}),"\n",(0,r.jsxs)(t.p,{children:["Then, go to ",(0,r.jsx)(t.strong,{children:"Certificates and Secrets"}),", add a new secret, and note down the value of this secret."]}),"\n",(0,r.jsx)(t.h2,{id:"client-id",children:"Client ID"}),"\n",(0,r.jsxs)(t.p,{children:["Finally, click on ",(0,r.jsx)(t.strong,{children:"Overview"})," on the left-hand side and note down the Application (client) ID."]}),"\n",(0,r.jsx)(t.h2,{id:"configure-prophecy-to-connect-with-azure-active-directory",children:"Configure Prophecy to connect with Azure Active Directory"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Log in to Prophecy as an admin user."}),"\n",(0,r.jsxs)(t.li,{children:["Navigate to the ",(0,r.jsx)(t.strong,{children:"SSO"})," tab of the Prophecy ",(0,r.jsx)(t.strong,{children:"Settings"})," page."]}),"\n",(0,r.jsxs)(t.li,{children:["Under ",(0,r.jsx)(t.strong,{children:"Authentication Provider"}),", select Azure Active Directory."]}),"\n",(0,r.jsxs)(t.li,{children:["Enter the ",(0,r.jsx)(t.strong,{children:"Client ID"})," and the ",(0,r.jsx)(t.strong,{children:"Client Secret"})," at minimum."]}),"\n",(0,r.jsxs)(t.li,{children:["Click ",(0,r.jsx)(t.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Once you have logged out, you will be able to see a ",(0,r.jsx)(t.strong,{children:"Login with Azure Active Directory"})," option. Now, your Azure AD users will be able to login to Prophecy with this option."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);