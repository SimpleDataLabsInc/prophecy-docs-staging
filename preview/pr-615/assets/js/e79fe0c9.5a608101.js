"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[42105],{28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>r});var a=o(96540);const i={},n=a.createContext(i);function s(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(n.Provider,{value:t},e.children)}},38465:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"copilot/copilot","title":"Data Copilot","description":"The AI assistant for data pipelines and models","source":"@site/docs/copilot/copilot.md","sourceDirName":"copilot","slug":"/data-copilot","permalink":"/prophecy-docs-staging/preview/pr-615/data-copilot","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"concepts","permalink":"/prophecy-docs-staging/preview/pr-615/tags/concepts"},{"inline":true,"label":"copilot","permalink":"/prophecy-docs-staging/preview/pr-615/tags/copilot"},{"inline":true,"label":"generativeai","permalink":"/prophecy-docs-staging/preview/pr-615/tags/generativeai"}],"version":"current","frontMatter":{"title":"Data Copilot","id":"copilot","slug":"/data-copilot","sidebar_class_name":"hidden","description":"The AI assistant for data pipelines and models","tags":["concepts","copilot","generativeai"]},"sidebar":"mySidebar","previous":{"title":"Data modeling for Engineers","permalink":"/prophecy-docs-staging/preview/pr-615/engineers/data-modeling"},"next":{"title":"AI capabilities","permalink":"/prophecy-docs-staging/preview/pr-615/data-copilot-ai-capabilities"}}');var i=o(74848),n=o(28453),s=o(99563),r=o(89791);const l={title:"Data Copilot",id:"copilot",slug:"/data-copilot",sidebar_class_name:"hidden",description:"The AI assistant for data pipelines and models",tags:["concepts","copilot","generativeai"]},c=void 0,p={},d=[{value:"Building models and pipelines with Prophecy\u2019s Data Copilot",id:"building-models-and-pipelines-with-prophecys-data-copilot",level:2},{value:"Knowledge Graph",id:"knowledge-graph",level:2},{value:"Deployment",id:"deployment",level:2},{value:"FAQ",id:"faq",level:2},{value:"How is Prophecy Copilot different than GitHub Copilot?",id:"how-is-prophecy-copilot-different-than-github-copilot",level:4},{value:"Which datasets are accessible to Prophecy Data Copilot?",id:"which-datasets-are-accessible-to-prophecy-data-copilot",level:4},{value:"How much will I pay for Prophecy Copilot?",id:"how-much-will-i-pay-for-prophecy-copilot",level:4},{value:"Can I use my own private OpenAI instance?",id:"can-i-use-my-own-private-openai-instance",level:4},{value:"Does Prophecy Data Copilot support text prompts in languages other than English?",id:"does-prophecy-data-copilot-support-text-prompts-in-languages-other-than-english",level:4},{value:"Try Data Copilot",id:"try-data-copilot",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function h(e){const t={a:"a",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Prophecy\u2019s end-to-end platform makes data pipeline development faster and accessible to more users. On top of that, you have an AI assistant to boost that productivity even further."}),"\n",(0,i.jsx)(t.h2,{id:"building-models-and-pipelines-with-prophecys-data-copilot",children:"Building models and pipelines with Prophecy\u2019s Data Copilot"}),"\n",(0,i.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"62.5% 0 0 0",position:"relative"},children:(0,i.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,i.jsx)("iframe",{src:"https://fast.wistia.net/embed/iframe/t7m3boc575?seo=false?videoFoam=true",title:"Design a Pipeline Video",allow:"autoplay; fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,i.jsx)("script",{src:"https://fast.wistia.net/assets/external/E-v1.js",async:!0}),"\n",(0,i.jsxs)(t.p,{children:["To learn more about what Data Copilot can do, see ",(0,i.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-615/data-copilot-ai-capabilities",children:"Data Copilot AI capabilities"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"knowledge-graph",children:"Knowledge Graph"}),"\n",(0,i.jsx)(t.p,{children:"Data Copilot works by enhancing the user\u2019s prompt using a knowledge graph. Each team in each organization gets its own knowledge graph."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Knowledge Graph",src:o(43423).A+"",width:"2880",height:"1868"})}),"\n",(0,i.jsx)(t.p,{children:"Our knowledge graph includes metadata for a project\u2019s entities (such as datasets, schemas, seeds, models, and pipelines) and the statistical usages of these entities. We built the knowledge graph intentionally to include metadata but not data. The dataset structure is included in the knowledge graph but individual dataset records are not."}),"\n",(0,i.jsxs)(t.p,{children:["For more details, see ",(0,i.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-615/data-copilot-data-privacy",children:"Data privacy with Data Copilot"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Architecture",src:o(40100).A+"",width:"2880",height:"2026"})}),"\n",(0,i.jsx)(t.p,{children:"Prophecy sends the enhanced Prompt to OpenAI. The large language model (LLM) returns SQL or Spark code, and Prophecy verifies whether this code is valid. Once Prophecy fixes the code, Prophecy generates a visual pipeline and displays this pipeline to you for review."}),"\n",(0,i.jsx)(t.h2,{id:"deployment",children:"Deployment"}),"\n",(0,i.jsx)(t.p,{children:"Data Copilot is available for all customers using Prophecy\u2019s managed SaaS offering and uses the SaaS version of OpenAI's Language model. Customers using the self-hosted or on-premise offerings can enable Data Copilot as a flag in the deployment / upgrade configuration."}),"\n",(0,i.jsxs)(t.p,{children:["For more details, see ",(0,i.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-615/administration/self-hosted/enable-data-copilot",children:"Enable Data Copilot"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"faq",children:"FAQ"}),"\n",(0,i.jsx)(t.h3,{id:""}),"\n",(0,i.jsx)(t.h4,{id:"how-is-prophecy-copilot-different-than-github-copilot",children:"How is Prophecy Copilot different than GitHub Copilot?"}),"\n",(0,i.jsx)(t.p,{children:"GitHub Copilot is a great tool to boost productivity and extend the reach of the coding community. However, not every problem is solved with direct coding. More importantly, users need a Copilot with some context of the interesting data."}),"\n",(0,i.jsx)(t.p,{children:"For teams of analysts, data platform providers, or line-of-business users, the pain points are not resolved by teaching every team member how to code. Data Copilot empowers less technical users because they don\u2019t have to code. Importantly, technical and coding users benefit from Data Copilot because visual pipelines are easier to understand, explain, and leverage. Prophecy\u2019s Data Copilot boosts the productivity of the business user and the more technical coding team members."}),"\n",(0,i.jsx)(t.p,{children:"When all of these data practitioners reach for an AI assistant, they\u2019ll need one specific to the data space. For example, the assistant should collect metadata from the data warehouse, catalog, or storage provider. Prophecy Data Copilot has the context of your data, and it can guide pipeline and model development by suggesting which datasets to use and how to use them."}),"\n",(0,i.jsx)(t.p,{children:"GitHub Copilot and Prophecy Data Copilot are both excellent tools to boost productivity, but Prophecy Data Copilot is accessible to a larger user base and can make data suggestions because it maintains data context."}),"\n",(0,i.jsx)(t.h4,{id:"which-datasets-are-accessible-to-prophecy-data-copilot",children:"Which datasets are accessible to Prophecy Data Copilot?"}),"\n",(0,i.jsx)(t.p,{children:"Any dataset, source, or seed that is part of the linked (Databricks, Snowflake, etc.) catalog is accessible. That is, if you can access the datasets with your personal access token, then the datasets should appear in the Environment browser and Copilot can access them."}),"\n",(0,i.jsx)(t.p,{children:"Add any of these datasets from the Environment browser into your project canvas. Once the dataset is defined in the project, Copilot's AI capabilities will start making recommendations including that data source."}),"\n",(0,i.jsx)(t.h4,{id:"how-much-will-i-pay-for-prophecy-copilot",children:"How much will I pay for Prophecy Copilot?"}),"\n",(0,i.jsx)(t.p,{children:"Copilot features are included with Prophecy\u2019s Spark and SQL offerings. There would be an additional cost if you chose to use a private subscription LLM service. In this case, the cost depends on the following:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["the number of ",(0,i.jsx)(t.a,{href:"https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them",children:"word tokens"})," sent to the LLM provider"]}),"\n",(0,i.jsx)(t.li,{children:"the size of the datasets"}),"\n",(0,i.jsx)(t.li,{children:"the number of iterations Prophecy sends requests to the LLM provider"}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"can-i-use-my-own-private-openai-instance",children:"Can I use my own private OpenAI instance?"}),"\n",(0,i.jsxs)(t.p,{children:["Yes! Administrators have the option to connect Prophecy Data Copilot to their private subscription OpenAI from the Kubernetes cluster where Prophecy services are running. For details on how to do this, see ",(0,i.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-615/administration/self-hosted/enable-data-copilot#installation",children:"Installation"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"does-prophecy-data-copilot-support-text-prompts-in-languages-other-than-english",children:"Does Prophecy Data Copilot support text prompts in languages other than English?"}),"\n",(0,i.jsx)(t.p,{children:"While Prophecy does not actively test prompt languages other than English, the LLM providers do provide such support. Explorations of this area would be at the user discretion."}),"\n",(0,i.jsx)(t.h2,{id:"try-data-copilot",children:"Try Data Copilot"}),"\n",(0,i.jsxs)(t.p,{children:["Learn more about Prophecy at ",(0,i.jsx)(t.a,{href:"https://www.prophecy.io/",children:"prophecy.io"}),", where you can sign up for a free trial account or schedule a demo."]}),"\n",(0,i.jsxs)(t.p,{children:["We are open to feedback! Send us an email (",(0,i.jsx)(t.a,{href:"mailto:contact.us@Prophecy.io",children:"contact.us@Prophecy.io"}),") or reach out on our ",(0,i.jsx)(t.a,{href:"https://join.slack.com/t/prophecy-io-support/shared_invite/zt-moq3xzoj-~5MSJ6WPnZfz7bwsqWi8tQ",children:"Slack community"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"whats-next",children:"What's next"}),"\n",(0,i.jsx)(t.p,{children:"To learn more about Data Copilot, see the following pages:"}),"\n","\n",(0,i.jsx)(s.A,{items:(0,r.$S)().items})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},40100:(e,t,o)=>{o.d(t,{A:()=>a});const a=o.p+"assets/images/copilot_arch-d83f39c4d29a5f6ff921f011c6cdf931.png"},43423:(e,t,o)=>{o.d(t,{A:()=>a});const a=o.p+"assets/images/copilot_knowledge_graph-18e8a0c69b21f5b71875a485369ee716.png"},81430:(e,t,o)=>{o.d(t,{W:()=>c});var a=o(96540),i=o(40797);const n=["zero","one","two","few","many","other"];function s(e){return n.filter((t=>e.includes(t)))}const r={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),r}}),[e])}function c(){const e=l();return{selectMessage:(t,o)=>function(e,t,o){const a=e.split("|");if(1===a.length)return a[0];a.length>o.pluralForms.length&&console.error(`For locale=${o.locale}, a maximum of ${o.pluralForms.length} plural forms are expected (${o.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const i=o.select(t),n=o.pluralForms.indexOf(i);return a[Math.min(n,a.length-1)]}(o,t,e)}}},89791:(e,t,o)=>{o.d(t,{$S:()=>a});o(40797);function a(){return o(56942).$S(...arguments)}},99563:(e,t,o)=>{o.d(t,{A:()=>w});o(96540);var a=o(18215),i=o(93751),n=o(56289),s=o(81430),r=o(22887),l=o(50539),c=o(9303);const p={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=o(74848);function h(e){let{href:t,children:o}=e;return(0,d.jsx)(n.A,{href:t,className:(0,a.A)("card padding--lg",p.cardContainer),children:o})}function u(e){let{href:t,icon:o,title:i,description:n}=e;return(0,d.jsxs)(h,{href:t,children:[(0,d.jsxs)(c.A,{as:"h2",className:(0,a.A)("text--truncate",p.cardTitle),title:i,children:[o," ",i]}),n&&(0,d.jsx)("p",{className:(0,a.A)("text--truncate",p.cardDescription),title:n,children:n})]})}function m(e){let{item:t}=e;const o=(0,i.Nr)(t),a=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return o?(0,d.jsx)(u,{href:o,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??a(t.items.length)}):null}function g(e){let{item:t}=e;const o=(0,r.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.cC)(t.docId??void 0);return(0,d.jsx)(u,{href:t.href,icon:o,title:t.label,description:t.description??a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(g,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const o=(0,i.$S)();return(0,d.jsx)(w,{items:o.items,className:t})}function w(e){const{items:t,className:o}=e;if(!t)return(0,d.jsx)(y,{...e});const n=(0,i.d1)(t);return(0,d.jsx)("section",{className:(0,a.A)("row",o),children:n.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}}}]);