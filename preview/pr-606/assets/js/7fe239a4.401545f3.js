"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[40590],{2432:(e,o,n)=>{n.d(o,{A:()=>i});const i=n.p+"assets/images/data_copilot_open_ai_flow_architecture-4c702bd41d9fa2a37c3c60a05acbb5b6.png"},28453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>s});var i=n(96540);const t={},a=i.createContext(t);function r(e){const o=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:o},e.children)}},82036:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"administration/self-hosted/enable-data-copilot","title":"Enable Data Copilot","description":"How to enable Prophecy Data Copilot for private VPC SaaS environments.","source":"@site/docs/administration/self-hosted/enable-data-copilot.md","sourceDirName":"administration/self-hosted","slug":"/administration/self-hosted/enable-data-copilot","permalink":"/prophecy-docs-staging/preview/pr-606/administration/self-hosted/enable-data-copilot","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"concepts","permalink":"/prophecy-docs-staging/preview/pr-606/tags/concepts"},{"inline":true,"label":"copilot","permalink":"/prophecy-docs-staging/preview/pr-606/tags/copilot"},{"inline":true,"label":"installation","permalink":"/prophecy-docs-staging/preview/pr-606/tags/installation"},{"inline":true,"label":"upgrade","permalink":"/prophecy-docs-staging/preview/pr-606/tags/upgrade"}],"version":"current","sidebarPosition":10,"frontMatter":{"title":"Enable Data Copilot","id":"enable-data-copilot","description":"How to enable Prophecy Data Copilot for private VPC SaaS environments.","sidebar_position":10,"tags":["concepts","copilot","installation","upgrade"]},"sidebar":"adminSidebar","previous":{"title":"Generate API key","permalink":"/prophecy-docs-staging/preview/pr-606/administration/self-hosted/generate-api-key"},"next":{"title":"Self-hosted","permalink":"/prophecy-docs-staging/preview/pr-606/administration/self-hosted/"}}');var t=n(74848),a=n(28453);const r={title:"Enable Data Copilot",id:"enable-data-copilot",description:"How to enable Prophecy Data Copilot for private VPC SaaS environments.",sidebar_position:10,tags:["concepts","copilot","installation","upgrade"]},s=void 0,l={},d=[{value:"Installation",id:"installation",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Additional installation options",id:"additional-installation-options",level:2},{value:"How to enable Data Copilot on my self-hosted or on-premise installation of Prophecy",id:"how-to-enable-data-copilot-on-my-self-hosted-or-on-premise-installation-of-prophecy",level:3},{value:"How to disable Data Copilot for my users",id:"how-to-disable-data-copilot-for-my-users",level:3}];function p(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Prophecy Data Copilot"})," is an AI-powered assistant that delivers intelligent suggestions and automates repetitive tasks for visual data transformations. You can read more about it at ",(0,t.jsx)(o.a,{href:"/prophecy-docs-staging/preview/pr-606/data-copilot",children:"Data Copilot"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["Data Copilot leverages OpenAI's generative AI models to understand user intent, and enriched by the organizations' ",(0,t.jsx)(o.a,{href:"/prophecy-docs-staging/preview/pr-606/data-copilot#knowledge-graph",children:"knowledge graph"}),", to automate repetitive data engineering tasks. By default, Data Copilot leverages ",(0,t.jsx)(o.strong,{children:"Prophecy's managed OpenAI subscription and is entirely free"})," for existing Prophecy customers. Prophecy uses user queries and metadata when communicating with OpenAI. Prophecy never sends any customer data to OpenAI."]}),"\n",(0,t.jsx)(o.p,{children:"However, for the most security conscious organizations, it is possible to configure Prophecy to use your own OpenAI endpoint. This page describes how to enable Prophecy Data Copilot for private VPC SaaS environments and configure it to use your own OpenAI or Azure OpenAI endpoint."}),"\n",(0,t.jsx)(o.admonition,{type:"note",children:(0,t.jsx)(o.p,{children:"Prophecy also supports running Data Copilot from locally hosted private models such as Llama or Mistral. Additionally, you can configure Prophecy Data Copilot to use custom LLM endpoints provided by Anthropic, AWS Bedrock, Google Vertex AI, and Databricks Model Serving."})}),"\n",(0,t.jsx)(o.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(o.p,{children:"From the Kubernetes cluster where Prophecy services are running:"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["Check that the ",(0,t.jsx)(o.code,{children:"prophecy-operator"}),", ",(0,t.jsx)(o.code,{children:"edweb"}),", ",(0,t.jsx)(o.code,{children:"metagraph"}),", and other Prophecy services are running version ",(0,t.jsx)(o.code,{children:"3.3.8.0"})," or greater."]}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["The above services should all be running the same release-version as the ",(0,t.jsx)(o.code,{children:"copilot"})," service defined in the image below, for example ",(0,t.jsx)(o.code,{children:"3.3.8.0"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["Check that the ",(0,t.jsx)(o.code,{children:"athena"})," Prophecy service is running version ",(0,t.jsx)(o.code,{children:"3.3.8.0"})," or greater. This is only required if using the pipeline approach to the upgrade."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["In the ",(0,t.jsx)(o.code,{children:"ProphecyCluster"})," CR, do the following:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["Add ",(0,t.jsx)(o.code,{children:"copilot"})," to ",(0,t.jsx)(o.code,{children:"enabledapps"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["Once deployed, wait for the ",(0,t.jsx)(o.code,{children:"copilot-cm"})," to be created. Then edit the default values in the configmap to match the ENVs required."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"Supply the API keys for the appropriate endpoint and ENV as below. Prophecy Copilot requires two types of models:"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"Smart LLM for complex tasks"})}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["Recommended Model: ",(0,t.jsx)(o.code,{children:"gpt-4o"})]}),"\n",(0,t.jsx)(o.li,{children:"Supported Models: Any model from the gpt-4 family"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"Fast LLM for easy and fast tasks"})}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["Recommended Model: ",(0,t.jsx)(o.code,{children:"gpt-4o-mini"})]}),"\n",(0,t.jsxs)(o.li,{children:["Examples: ",(0,t.jsx)(o.code,{children:"gpt-4o-mini"}),", ",(0,t.jsx)(o.code,{children:"gpt-3.5-turbo"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:"These models ensure optimal performance and efficiency for various tasks within Prophecy Copilot."}),"\n",(0,t.jsx)(o.p,{children:"OpenAI"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"AI_MODEL_PROVIDERS_CREDS: \"{ 'openai' : {'api_key': '___openai_api_key___'} }\"\nAVAILABLE_AI_MODELS: \"{ 'fast_model': {'provider': 'openai', 'model_name': 'gpt-4o-mini' }, 'smart_model': {'provider': 'openai', 'model_name': 'gpt-4o'} }\"\nNUM_WORKERS: \"< add value here >\"\nPORT: \"< add value here >\"\n"})}),"\n",(0,t.jsx)(o.p,{children:"Azure's OpenAI"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"AI_MODEL_PROVIDERS_CREDS: \"{ 'azure_openai' : {'api_key': '___azure_openai_api_key___', 'api_endpoint': 'https://name.openai.azure.com/'} }\"\nAVAILABLE_AI_MODELS: \"{ 'fast_model': {'provider': 'azure_openai', 'model_name': 'gpt-4o-mini', 'deployment_name': '___4o_mini_deployment___' }, 'smart_model': {'provider': 'azure_openai', 'model_name': 'gpt-4o', 'deployment_name': '___4o_deployment___'} }\"\nNUM_WORKERS: \"< add value here >\"\nPORT: \"< add value here >\"\n"})}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"Enable the following variable on the common CP config map:"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.code,{children:'COPILOT_ENABLED: "true"'})}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["If the app pod, especially ",(0,t.jsx)(o.code,{children:"copilot"}),", doesn't redeploy itself, restart the app pod."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"architecture",children:"Architecture"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Prophecy Data Copilot &amp; OpenAI Flow Architecture",src:n(2432).A+"",width:"3840",height:"1816"})}),"\n",(0,t.jsx)(o.h2,{id:"additional-installation-options",children:"Additional installation options"}),"\n",(0,t.jsx)(o.h3,{id:"how-to-enable-data-copilot-on-my-self-hosted-or-on-premise-installation-of-prophecy",children:"How to enable Data Copilot on my self-hosted or on-premise installation of Prophecy"}),"\n",(0,t.jsxs)(o.p,{children:["Data Copilot is enabled or disabled at deployment time. If you run Prophecy within your ",(0,t.jsx)(o.a,{href:"/prophecy-docs-staging/preview/pr-606/administration/prophecy-deployment#self-hosted",children:"own VPC"}),", set the flag in the deployment or upgrade configuration. To learn more about how to connect Prophecy Data Copilot to private OpenAI endpoints, speak to your Prophecy account owner."]}),"\n",(0,t.jsx)(o.h3,{id:"how-to-disable-data-copilot-for-my-users",children:"How to disable Data Copilot for my users"}),"\n",(0,t.jsxs)(o.p,{children:["You have the option to disable Data Copilot if you run Prophecy within your ",(0,t.jsx)(o.a,{href:"/prophecy-docs-staging/preview/pr-606/administration/prophecy-deployment#self-hosted",children:"own VPC"}),". You may choose to enable or disable Data Copilot across your Prophecy Platform at deployment time."]})]})}function c(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}}}]);