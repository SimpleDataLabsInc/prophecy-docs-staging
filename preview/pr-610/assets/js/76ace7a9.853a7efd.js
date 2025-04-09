"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[4274],{28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}},74234:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"administration/self-hosted/installation-marketplaces/install-azure-marketplace","title":"Azure Marketplace guide","description":"Install Prophecy via Azure Marketplace","source":"@site/docs/administration/self-hosted/installation-marketplaces/install-azure-marketplace.md","sourceDirName":"administration/self-hosted/installation-marketplaces","slug":"/administration/self-hosted/installation-marketplaces/install-azure-marketplace","permalink":"/prophecy-docs-staging/preview/pr-610/administration/self-hosted/installation-marketplaces/install-azure-marketplace","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"deployment","permalink":"/prophecy-docs-staging/preview/pr-610/tags/deployment"},{"inline":true,"label":"installation","permalink":"/prophecy-docs-staging/preview/pr-610/tags/installation"},{"inline":true,"label":"marketplaces","permalink":"/prophecy-docs-staging/preview/pr-610/tags/marketplaces"},{"inline":true,"label":"azure","permalink":"/prophecy-docs-staging/preview/pr-610/tags/azure"}],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Azure Marketplace guide","id":"install-azure-marketplace","description":"Install Prophecy via Azure Marketplace","sidebar_position":1,"tags":["deployment","installation","marketplaces","azure"]},"sidebar":"adminSidebar","previous":{"title":"Installation via Marketplaces","permalink":"/prophecy-docs-staging/preview/pr-610/administration/self-hosted/installation-marketplaces/"},"next":{"title":"Configurations","permalink":"/prophecy-docs-staging/preview/pr-610/administration/self-hosted/configurations/"}}');var i=t(74848),s=t(28453);const a={title:"Azure Marketplace guide",id:"install-azure-marketplace",description:"Install Prophecy via Azure Marketplace",sidebar_position:1,tags:["deployment","installation","marketplaces","azure"]},o=void 0,l={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Open Azure Marketplace",id:"open-azure-marketplace",level:2},{value:"Create Prophecy",id:"create-prophecy",level:2},{value:"Go to resource",id:"go-to-resource",level:2},{value:"Launch the Prophecy IDE",id:"launch-the-prophecy-ide",level:2}];function d(e){const n={a:"a",admonition:"admonition",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This page outlines how to install Prophecy via Azure Marketplace."}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsx)(n.p,{children:"To complete this process, you need:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"Contributor"})," or ",(0,i.jsx)(n.strong,{children:"Owner"})," role in Azure."]}),"\n",(0,i.jsx)(n.li,{children:"A minimum of six Standard_DS4_v2 family types of VMs. You'll need to assign an appropriate quota in your Azure subscription for a region where you are planning to deploy Prophecy."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Contact Prophecy to discuss future scaling needs."})}),"\n",(0,i.jsx)(n.h2,{id:"open-azure-marketplace",children:"Open Azure Marketplace"}),"\n",(0,i.jsx)(n.p,{children:"To get started:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open the ",(0,i.jsx)(n.a,{href:"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/simpledatalabsinc1635791235920.prophecy-data-engineering",children:"Prophecy"})," product page in Azure Marketplace and click ",(0,i.jsx)(n.strong,{children:"Get It Now"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"Create this app in Azure"})," window, select the ",(0,i.jsx)(n.strong,{children:"Prophecy Private SaaS - Enterprise Grade Support"})," plan (unless advised otherwise)."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Continue"}),". You will be directed to the Azure portal."]}),"\n",(0,i.jsxs)(n.li,{children:["In the portal, click ",(0,i.jsx)(n.strong,{children:"Create"})," to begin the Prophecy IDE setup."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"create-prophecy",children:"Create Prophecy"}),"\n",(0,i.jsxs)(n.p,{children:["Next, fill out the required fields of the ",(0,i.jsx)(n.strong,{children:"Basics"})," tab."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Select your Azure subscription."}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"Resource group"})," field, choose or create a resource group for the application."]}),"\n",(0,i.jsxs)(n.li,{children:["Select the ",(0,i.jsx)(n.strong,{children:"Region"})," of the instance."]}),"\n",(0,i.jsxs)(n.li,{children:["For the ",(0,i.jsx)(n.strong,{children:"Configure Base Domain and TLS"})," option, you have two choices:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use Prophecy's Base Domain. If you choose this option, Prophecy manages the certificates and domain for you."}),"\n",(0,i.jsx)(n.li,{children:"Use your own Base Domain and Certificate. If you choose this option, you can deploy your own TLS certificates and manage the domain for the Prophecy IDE using your own DNS zones."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Give the application a name."}),"\n",(0,i.jsx)(n.li,{children:"Note that this installation will generate a managed resource group where all Prophecy resources will be created."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When you have finished filling out the ",(0,i.jsx)(n.strong,{children:"Basics"})," tab, click ",(0,i.jsx)(n.strong,{children:"Review + create"}),". Then, agree to the terms and conditions and click ",(0,i.jsx)(n.strong,{children:"Create"}),". This will start the Prophecy deployment."]}),"\n",(0,i.jsx)(n.h2,{id:"go-to-resource",children:"Go to resource"}),"\n",(0,i.jsx)(n.p,{children:"It takes around 20 to 30 minutes to finish the installation. Once installation is complete:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.strong,{children:"Go to resource"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.strong,{children:"Parameters and Outputs"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["If you are using the Prophecy domain, you will be able to access the cluster with the ",(0,i.jsx)(n.strong,{children:"prophecyURL"}),", ",(0,i.jsx)(n.strong,{children:"adminUser"}),", and ",(0,i.jsx)(n.strong,{children:"credentials"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["If you are using your own domain:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Note down ",(0,i.jsx)(n.strong,{children:"prophecyURL"}),", ",(0,i.jsx)(n.strong,{children:"loadBalancerIP"}),", ",(0,i.jsx)(n.strong,{children:"adminUser"})," and ",(0,i.jsx)(n.strong,{children:"credentials"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Reach out to your DNS admin and request to add a Type A entry for the prophecyURL and the loadBalancerIP address."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"launch-the-prophecy-ide",children:"Launch the Prophecy IDE"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Open the Prophecy IDE with the prophecyURL that you noted."}),"\n",(0,i.jsx)(n.li,{children:"Login using the adminUser and credentials that you noted."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Now, you are free to get started with Prophecy!"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);