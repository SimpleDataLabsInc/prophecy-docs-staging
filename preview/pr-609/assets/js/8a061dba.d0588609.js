"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[70276],{7963:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/genai_web_vectorize-86c74a23ce1375f9599eafff04353ee8.png"},8896:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/genai_memberId-d6bf5ec18aca1f946aad0f2c20317801.png"},16280:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/genai_intro_video-52a8c33ad256ee5006d1f393aa33b5ab.gif"},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var n=i(96540);const a={},s=n.createContext(a);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(s.Provider,{value:t},e.children)}},30739:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/genai_chatbot_live-82cb0660ef00754078e3b188b6305848.png"},67592:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/genai_web_ingest-3df5f6735689223ef833deb07034ed16.png"},81356:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"Spark/gems/machine-learning/gen-ai-chatbot","title":"Generative AI Chatbot","description":"Build a generative AI application that answers questions in Slack based on relevant content from the web.","source":"@site/docs/Spark/gems/machine-learning/genaichatbot.md","sourceDirName":"Spark/gems/machine-learning","slug":"/engineers/generative-ai-chatbot","permalink":"/prophecy-docs-staging/preview/pr-609/engineers/generative-ai-chatbot","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"guide","permalink":"/prophecy-docs-staging/preview/pr-609/tags/guide"},{"inline":true,"label":"generativeai","permalink":"/prophecy-docs-staging/preview/pr-609/tags/generativeai"},{"inline":true,"label":"chatbot","permalink":"/prophecy-docs-staging/preview/pr-609/tags/chatbot"},{"inline":true,"label":"tutorial","permalink":"/prophecy-docs-staging/preview/pr-609/tags/tutorial"}],"version":"current","frontMatter":{"title":"Generative AI Chatbot","id":"gen-ai-chatbot","slug":"/engineers/generative-ai-chatbot","description":"Build a generative AI application that answers questions in Slack based on relevant content from the web.","tags":["guide","generativeai","chatbot","tutorial"]},"sidebar":"mySidebar","previous":{"title":"TextProcessing","permalink":"/prophecy-docs-staging/preview/pr-609/engineers/text-processing"},"next":{"title":"Custom","permalink":"/prophecy-docs-staging/preview/pr-609/engineers/custom"}}');var a=i(74848),s=i(28453);const r={title:"Generative AI Chatbot",id:"gen-ai-chatbot",slug:"/engineers/generative-ai-chatbot",description:"Build a generative AI application that answers questions in Slack based on relevant content from the web.",tags:["guide","generativeai","chatbot","tutorial"]},o=void 0,c={},l=[{value:"Requirements",id:"requirements",level:2},{value:"External dependencies",id:"external-dependencies",level:3},{value:"Cluster library dependencies",id:"cluster-library-dependencies",level:3},{value:"Platform recommendations",id:"platform-recommendations",level:3},{value:"Step 1: Setup",id:"step-1-setup",level:2},{value:"1a. Dependencies",id:"1a-dependencies",level:3},{value:"Slack",id:"slack",level:4},{value:"OpenAI",id:"openai",level:4},{value:"Pinecone",id:"pinecone",level:4},{value:"1b. Databricks Secrets and Schemas",id:"1b-databricks-secrets-and-schemas",level:3},{value:"1c. Load the Git repository",id:"1c-load-the-git-repository",level:3},{value:"1d. Set up Databases",id:"1d-set-up-databases",level:3},{value:"1e. Explore the Visual Interface",id:"1e-explore-the-visual-interface",level:3},{value:"Step 2: Build a Knowledge Warehouse",id:"step-2-build-a-knowledge-warehouse",level:2},{value:"2a. Web Ingest pipeline",id:"2a-web-ingest-pipeline",level:3},{value:"2b. Web Vectorize pipeline",id:"2b-web-vectorize-pipeline",level:3},{value:"2b.i Configuring the Web Vectorize pipeline",id:"2bi-configuring-the-web-vectorize-pipeline",level:4},{value:"Step 3: Live Inference",id:"step-3-live-inference",level:2},{value:"3a. Chatbot Live pipeline",id:"3a-chatbot-live-pipeline",level:3},{value:"3a.1 Configuring the Chatbot Live pipeline",id:"3a1-configuring-the-chatbot-live-pipeline",level:4},{value:"Summary",id:"summary",level:2},{value:"FAQ",id:"faq",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"62.5% 0 0 0",position:"relative"},children:(0,a.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,a.jsx)("iframe",{src:"https://fast.wistia.net/embed/iframe/mzi4es0kxn?seo=false?videoFoam=true",title:"Getting Started With SQL Video",allow:"autoplay; fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,a.jsx)("script",{src:"https://fast.wistia.net/assets/external/E-v1.js",async:!0}),"\n",(0,a.jsx)(t.p,{children:"This guide showcases how easy it is to build a live chatbot application using your internal datasets on Spark. Here is a summary of the steps you'll take to set up and explore the Generative AI Chatbot pipelines:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Setup"}),": You'll configure the dependencies, define credential secrets and load the pipelines from a Git repository."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Build a Knowledge Warehouse"}),": You'll explore a set of Spark pipelines to ",(0,a.jsx)(t.a,{href:"/engineers/generative-ai-chatbot/#2a-web-ingest-pipeline",children:"(a)ingest"})," unstructured data from your applications, pre-process, and ",(0,a.jsx)(t.a,{href:"/engineers/generative-ai-chatbot/#2b-web-vectorize-pipeline",children:"(b)vectorize"})," and store the data within your vector database of choice."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Run a Live Inference Pipeline"}),": You'll run a Spark streaming ",(0,a.jsx)(t.a,{href:"/engineers/generative-ai-chatbot/#step-3-live-inference",children:"Chatbot"})," pipeline that reads messages from Slack and answers them live using information from your new Knowledge Warehouse."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Architecture Diagram",src:i(83868).A+"",width:"2880",height:"2144"})}),"\n",(0,a.jsxs)(t.p,{children:["This guide is an expanded view of ",(0,a.jsx)(t.a,{href:"https://github.com/prophecy-samples/gen-ai-chatbot-template",children:"these"})," succinct instructions and ",(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?v=1exLfT-b-GM&t=1090s",children:"this"})," Data+AI Summit session."]}),"\n",(0,a.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,a.jsx)(t.h3,{id:"external-dependencies",children:"External dependencies"}),"\n",(0,a.jsx)(t.p,{children:"Optional, but recommended for best results:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://www.pinecone.io/",children:(0,a.jsx)(t.strong,{children:"Pinecone"})})," - allows for efficient storage and retrieval of vectors. To simplify, it's possible to use Spark-ML cosine similarity alternatively; however, since that doesn't feature KNNs for more efficient lookup, it's only recommended for small datasets."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://openai.com/",children:(0,a.jsx)(t.strong,{children:"OpenAI"})})," - for creating text embeddings and formulating questions. Alternatively, one can use Spark's ",(0,a.jsx)(t.a,{href:"https://spark.apache.org/docs/2.2.0/mllib-feature-extraction.html#word2vec",children:"word2vec"})," for word embeddings and an ",(0,a.jsx)(t.a,{href:"https://github.com/prophecy-io/spark-ai/tree/main",children:"alternative LLM (e.g., Dolly)"})," for answer formulation based on context."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://slack.com/",children:(0,a.jsx)(t.strong,{children:"Slack"})})," or ",(0,a.jsx)(t.a,{href:"https://teams.com/",children:(0,a.jsx)(t.strong,{children:"Teams"})})," - for the chatbot interface. An example batch pipeline is present for fast debugging when unavailable."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"cluster-library-dependencies",children:"Cluster library dependencies"}),"\n",(0,a.jsx)(t.p,{children:"Required:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/prophecy-io/spark-ai/tree/main",children:(0,a.jsx)(t.strong,{children:"Spark-AI"})})," - Toolbox for building Generative AI applications on top of Apache Spark."]}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"The cluster library dependencies are automatically included if you Fork our sample project as detailed below."})}),"\n",(0,a.jsx)(t.h3,{id:"platform-recommendations",children:"Platform recommendations"}),"\n",(0,a.jsx)(t.p,{children:"Below are some platform recommendations. Like all Prophecy projects the code generated by the template has no vendor lock-in so it should run wherever Spark does."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://www.prophecy.io/",children:(0,a.jsx)(t.strong,{children:"Prophecy Data Transformation Copilot"})})," (version 3.1 and above) - for building the data pipelines. A free account is available."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://Databricks.com/",children:(0,a.jsx)(t.strong,{children:"Databricks"})})," (DBR 12.2 ML and above) - for running the data pipelines. There are some free/low-cost options available or you can use the compute that comes with Prophecy's free trial."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"step-1-setup",children:"Step 1: Setup"}),"\n",(0,a.jsx)(t.p,{children:"We'll start by forking our existing sample repository. This will leave you with your own copy that you can modify however you want."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/prophecy-samples/gen-ai-chatbot-template/fork",children:"Fork"})," the repo so you have your copy at something like ",(0,a.jsx)(t.code,{children:"https://github.com/<your_username>/gen-ai-chatbot-template"})]}),"\n",(0,a.jsxs)(t.li,{children:["Clone the repo onto your local machine (i.e ",(0,a.jsx)(t.code,{children:"git clone https://github.com/<your_username>/gen-ai-chatbot-template"}),")"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"1a-dependencies",children:"1a. Dependencies"}),"\n",(0,a.jsxs)(t.p,{children:["Create accounts for the services you want to use for your Generative AI Chatbot. For each service create access tokens and save them within a file named ",(0,a.jsx)(t.code,{children:".env"})," in your repo. See ",(0,a.jsx)(t.code,{children:"sample.env"})," for an example."]}),"\n",(0,a.jsx)(t.p,{children:"For our example, we will be using Slack, OpenAI and Pinecone."}),"\n",(0,a.jsx)(t.h4,{id:"slack",children:"Slack"}),"\n",(0,a.jsxs)(t.p,{children:["Here are the steps to set up the Slack bot. If you prefer a video walkthrough, ",(0,a.jsx)(t.a,{href:"https://www.loom.com/share/2d7afeacd92e44809ab29b43665329dd?sid=c4e08d9d-bf86-4a6f-9e9d-fce9d7a12578",children:"see here"}),". Using a Slack workspace where you have Admin permissions, follow these steps:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://api.slack.com/reference/manifests#creating_apps",children:"Set up a Slack application"})," using the manifest file ",(0,a.jsx)(t.a,{href:"https://github.com/prophecy-samples/gen-ai-chatbot-template/blob/main/apps/slack/manifest.yaml",children:"here"}),"."]}),"\n",(0,a.jsx)(t.li,{children:"Install the Slack app in the workspace."}),"\n",(0,a.jsxs)(t.li,{children:["Create an ",(0,a.jsx)(t.a,{href:"https://api.slack.com/start/quickstart#getting-auth-token",children:"App-Level Token"})," with ",(0,a.jsx)(t.code,{children:"connections:write"})," permission. This token is going to be used for receiving messages from Slack. Save it as ",(0,a.jsx)(t.code,{children:"SLACK_APP_TOKEN"})," in your ",(0,a.jsx)(t.code,{children:".env"})," file."]}),"\n",(0,a.jsxs)(t.li,{children:["Find the Bot User OAuth ",(0,a.jsx)(t.a,{href:"https://api.slack.com/authentication/token-types",children:"Token."})," The permissions (or scopes, in Slack terminology) are defined in the ",(0,a.jsx)(t.a,{href:"https://github.com/prophecy-samples/gen-ai-chatbot-template/blob/main/apps/slack/manifest.yaml",children:"manifest"})," file. This token is going to be used for sending messages to Slack. Save it as ",(0,a.jsx)(t.code,{children:"SLACK_TOKEN"})," in your ",(0,a.jsx)(t.code,{children:".env"})," file"]}),"\n",(0,a.jsx)(t.li,{children:"Create a new Slack channel in this Slack workspace."}),"\n",(0,a.jsx)(t.li,{children:"Invite your Slack app to the channel."}),"\n",(0,a.jsxs)(t.li,{children:["For more details on creating a Slack App, click ",(0,a.jsx)(t.a,{href:"https://api.slack.com/start/quickstart",children:"here."})]}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"openai",children:"OpenAI"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Join your company's OpenAI Organization by asking your Admin for an email invite. Alternatively, create an account ",(0,a.jsx)(t.a,{href:"https://platform.openai.com/signup",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Find your API key as described ",(0,a.jsx)(t.a,{href:"https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key",children:"here."})," Save it as ",(0,a.jsx)(t.code,{children:"OPEN_AI_API_KEY"})," in your ",(0,a.jsx)(t.code,{children:".env"})," file"]}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"pinecone",children:"Pinecone"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Join your company's Pinecone Organization by asking your Admin for an email invite. Alternatively, create an account ",(0,a.jsx)(t.a,{href:"https://app.pinecone.io",children:"here"}),"."]}),"\n",(0,a.jsx)(t.li,{children:"Open an existing Pinecone project or create a new one."}),"\n",(0,a.jsxs)(t.li,{children:["Create an index. We used an index with ",(0,a.jsx)(t.code,{children:"1536"})," dimensions, ",(0,a.jsx)(t.code,{children:"Cosine"})," metric, and an ",(0,a.jsx)(t.code,{children:"s1"})," pod type."]}),"\n",(0,a.jsxs)(t.li,{children:["Within the appropriate Pinecone project, generate a Pinecone API key as mentioned ",(0,a.jsx)(t.a,{href:"https://docs.pinecone.io/docs/projects#api-keys",children:"here."})," Save it as ",(0,a.jsx)(t.code,{children:"PINECONE_TOKEN"})," in your ",(0,a.jsx)(t.code,{children:".env"})," file."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"1b-databricks-secrets-and-schemas",children:"1b. Databricks Secrets and Schemas"}),"\n",(0,a.jsxs)(t.p,{children:["The Databricks CLI is a command line tool that lets you interact with your Databricks workspace. Use the Databricks CLI here to store the tokens created in ",(0,a.jsx)(t.a,{href:"/engineers/generative-ai-chatbot#1a-dependencies",children:"Step 1a"})," safely as Databricks ",(0,a.jsx)(t.code,{children:"secrets"}),". Also, use the Databricks CLI to create catalog tables and schemas. Follow the steps below and for more details about the Databricks CLI read ",(0,a.jsx)(t.a,{href:"https://docs.databricks.com/en/archive/dev-tools/cli/index.html",children:"here."})]}),"\n",(0,a.jsxs)(t.p,{children:["Find ",(0,a.jsx)(t.code,{children:"setup_Databricks.sh"})," ",(0,a.jsx)(t.a,{href:"https://github.com/prophecy-samples/gen-ai-chatbot-template/blob/main/setup_databricks.sh",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Ensure that your ",(0,a.jsx)(t.code,{children:".env"})," file contains all the above secrets. Use the ",(0,a.jsx)(t.a,{href:"https://github.com/prophecy-samples/gen-ai-chatbot-template/blob/main/sample.env",children:"sample.env"})," as an example, and ",(0,a.jsx)(t.code,{children:"source"})," your ",(0,a.jsx)(t.code,{children:".env"})," file (i.e ",(0,a.jsx)(t.code,{children:"source .env"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Install the Databricks CLI using ",(0,a.jsx)(t.code,{children:"pip install Databricks"}),". Currently version 0.17.x is supported."]}),"\n",(0,a.jsxs)(t.li,{children:["Use ",(0,a.jsx)(t.code,{children:"databricks configure"})," to set up a connection from your local machine to your Workspace."]}),"\n",(0,a.jsxs)(t.li,{children:["Run ",(0,a.jsx)(t.code,{children:"setup_Databricks.sh"})," to create the required secrets and schemas."]}),"\n",(0,a.jsxs)(t.li,{children:["Expected output of ",(0,a.jsx)(t.code,{children:"setup_Databricks.sh"}),":"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Variable definitions\nResources created, like catalog tables, Databricks scopes, secrets\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"6",children:["\n",(0,a.jsxs)(t.li,{children:["Verify ",(0,a.jsx)(t.code,{children:"setup_Databricks.sh"})," creates the needed resources using these commands described ",(0,a.jsx)(t.a,{href:"https://docs.databricks.com/en/archive/dev-tools/cli/unity-catalog-cli.html",children:"here"})," and ",(0,a.jsx)(t.a,{href:"https://docs.databricks.com/en/archive/dev-tools/cli/secrets-cli.html",children:"here"}),":"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-console",children:"databricks unity-catalog catalogs list | grep gen_ai\ndatabricks unity-catalog schemas list --catalog-name gen_ai\ndatabricks secrets list-scopes\ndatabricks secrets list --scope slack\n"})}),"\n",(0,a.jsx)(t.h3,{id:"1c-load-the-git-repository",children:"1c. Load the Git repository"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Login"})," to ",(0,a.jsx)(t.a,{href:"https://app.prophecy.io/metadata/auth/signup",children:"Prophecy"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Import"})," a new Prophecy ",(0,a.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-609/projects",children:"Project"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Load the forked Git repository"})," to the Prophecy project as shown in this 30-second ",(0,a.jsx)(t.a,{href:"https://github.com/prophecy-samples/gen-ai-chatbot-template/assets/3248329/dcdfabaf-4870-421d-9f92-4ab028c5db5a",children:"video."}),", pointing to your fork at ",(0,a.jsx)(t.code,{children:"https://github.com/<your_username>/gen-ai-chatbot-template"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Connect"})," to your Spark cluster by creating a fabric following ",(0,a.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-609/administration/fabrics/Spark-fabrics/databricks/",children:"these steps."})]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"1d-set-up-databases",children:"1d. Set up Databases"}),"\n",(0,a.jsx)(t.p,{children:"This project runs on Databrick's Unity Catalog by default. However, you can also reconfigure Source & Target gems to use alternative sources."}),"\n",(0,a.jsxs)(t.p,{children:["For Databricks Unity Catalog, the ",(0,a.jsx)(t.code,{children:"setup_Databricks.sh"})," script has already created the following catalog: ",(0,a.jsx)(t.code,{children:"gen_ai"})," and the following databases: ",(0,a.jsx)(t.code,{children:"web_bronze"})," and ",(0,a.jsx)(t.code,{children:"web_silver"}),". The tables are going to be created automatically on the first boot-up."]}),"\n",(0,a.jsx)(t.h3,{id:"1e-explore-the-visual-interface",children:"1e. Explore the Visual Interface"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Explore the interface",src:i(98607).A+"",width:"2880",height:"1726"})}),"\n",(0,a.jsx)(t.p,{children:"When you open any Prophecy pipeline, you\u2019ll see lots of features accessible. From the Environment browser, browse available datasets and tables in the linked data catalog. See a variety of gems available out-of-the-box by clicking for example the Transformation or Join/Split headers. The visually designed pipeline is translated to actual Spark code written in Scala, pySpark, or SQL. Just click at the top of the canvas to switch from the visual editor to the code editor. At the very bottom notice there\u2019s a button to commit local changes to Git. Prophecy pipelines are committed to the user\u2019s Git repository and therefore offer the best software development practices: code review, versioning, proper releases, etc."}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"play"})," button runs the pipeline and offers data previews between gems. This interactive feature is super handy to see how each gem manipulates the data and to quickly check that the data is produced as expected. The project runs entirely on Spark and will scale for any data volume, big and small."]}),"\n",(0,a.jsx)(t.p,{children:"Now that we\u2019ve had a brief introduction to the Prophecy pipeline editor, let\u2019s dig into the pipelines specific to the Generative AI Chatbot. The pipelines accomplish two goals: (a) build a Knowledge Warehouse full of vectorized web documentation, and (b) a streaming inference pipeline to read messages from Slack, query an LLM to formulate answers, and send them back to Slack. Notice most of the data manipulations are standard transformations to help construct a prompt for the OpenAI model (or the model of your choice)."}),"\n",(0,a.jsx)(t.h2,{id:"step-2-build-a-knowledge-warehouse",children:"Step 2: Build a Knowledge Warehouse"}),"\n",(0,a.jsx)(t.h3,{id:"2a-web-ingest-pipeline",children:"2a. Web Ingest pipeline"}),"\n",(0,a.jsxs)(t.p,{children:["We are ingesting unstructured data from ",(0,a.jsx)(t.a,{href:"https://docs.prophecy.io/",children:"Prophecy Documentation"}),", in particular the ",(0,a.jsx)(t.a,{href:"https://docs.prophecy.io/sitemap.xml",children:"sitemap"})," which has links to all the individual web pages."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Web Ingest pipeline",src:i(67592).A+"",width:"2880",height:"1726"})}),"\n",(0,a.jsx)(t.p,{children:"A new gem is introduced in this pipeline: the TextProcessing gem helps scrape the URL and content from the Documentation pages."}),"\n",(0,a.jsx)(t.p,{children:"The series of data transformations culminates with nicely formatted web Documentation data saved in a Unity Catalog table to end the Web Ingest pipeline."}),"\n",(0,a.jsx)(t.h3,{id:"2b-web-vectorize-pipeline",children:"2b. Web Vectorize pipeline"}),"\n",(0,a.jsxs)(t.p,{children:["Continuing with the goal of ingesting and vectorizing our web content, here we have the Web Vectorize pipeline. We want to assign each document a number sequence, or vector, to map the similarity and relationships between those documents. Here we selected OpenAI ",(0,a.jsx)(t.a,{href:"https://openai.com/blog/new-and-improved-embedding-model",children:"ada-002"})," model based on performance and cost. As some of the documents are very long, we split them into smaller chunks. Each chunk is sent to OpenAI\u2019s ada model. Run the pipeline using the \u201cPlay\u201d button and data preview buttons appear between gems. Open the data preview following the OpenAI gem and see the schema now includes a vector (or \u201cembedding\u201d) provided by the OpenAI model for each text chunk."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Web Vectorize pipeline",src:i(7963).A+"",width:"2880",height:"1084"})}),"\n",(0,a.jsxs)(t.p,{children:["Once the document chunks have each been assigned a vector, these \u201cembeddings\u201d are stored in the Unity Catalog and to a ",(0,a.jsx)(t.a,{href:"https://www.pinecone.io/learn/vector-database/",children:"vector database"})," (e.g. Pinecone). We can use this Knowledge Warehouse to construct our LLM prompt in the next pipeline."]}),"\n",(0,a.jsx)(t.h4,{id:"2bi-configuring-the-web-vectorize-pipeline",children:"2b.i Configuring the Web Vectorize pipeline"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Verify the Vectorize OpenAI gem is configured with Databricks scope ",(0,a.jsx)(t.code,{children:"open_ai"})," and Databricks key ",(0,a.jsx)(t.code,{children:"api_key"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Verify the vector_db Target gem is configured with the Databricks scope ",(0,a.jsx)(t.code,{children:"pinecone"})," and Databricks key ",(0,a.jsx)(t.code,{children:"token"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"step-3-live-inference",children:"Step 3: Live Inference"}),"\n",(0,a.jsx)(t.h3,{id:"3a-chatbot-live-pipeline",children:"3a. Chatbot Live pipeline"}),"\n",(0,a.jsx)(t.p,{children:"Finally, we get to run the most exciting pipeline! The Chatbot Live streaming pipeline ingests messages from Slack and sends the question and the relevant context to OpenAI which provides an answer."}),"\n",(0,a.jsx)(t.p,{children:"After ingesting the Slack question message and doing some transformation steps, the Chatbot Live pipeline queries OpenAI to create an embedding specifically for the question. Then, the Pinecone Lookup gem identifies documents, based on their vectors, which could be relevant for the question. With the IDs and vectors in hand, we need to pull from the full document corpus the relevant documentation text. The Join gem does exactly this: gets content for the relevant document IDs. Now we are well on our way to creating a wonderful prompt! The OpenAI gem sends the relevant content chunks and the Slack question in a prompt to OpenAI, and the model returns an answer. Finally, the pipeline writes the answer back to the Slack thread."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Chatbot Live pipeline",src:i(30739).A+"",width:"2880",height:"1084"})}),"\n",(0,a.jsx)(t.h4,{id:"3a1-configuring-the-chatbot-live-pipeline",children:"3a.1 Configuring the Chatbot Live pipeline"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Verify the ",(0,a.jsx)(t.code,{children:"slack_chat"})," Source gem is configured with Databricks scope ",(0,a.jsx)(t.code,{children:"slack"})," and Databricks Key ",(0,a.jsx)(t.code,{children:"app_token"}),". While this token begins with ",(0,a.jsx)(t.code,{children:"xapp-"}),", be sure not to use the plaintext value, as using the Databricks secret is a much more secure approach."]}),"\n",(0,a.jsxs)(t.li,{children:["Update the ",(0,a.jsx)(t.code,{children:"only_user_msgs"})," Filter gem with the Slack app member ID:\n",(0,a.jsx)(t.img,{alt:"Slack App Member ID",src:i(8896).A+"",width:"2880",height:"1084"})]}),"\n",(0,a.jsxs)(t.li,{children:["Verify the ",(0,a.jsx)(t.code,{children:"bot_message"})," Target gem is configured with Databricks scope ",(0,a.jsx)(t.code,{children:"slack"})," and Databricks Key ",(0,a.jsx)(t.code,{children:"token"}),". While this bot user OAuth token begins with ",(0,a.jsx)(t.code,{children:"xoxb-"}),", be sure not to enter the plaintext value."]}),"\n",(0,a.jsxs)(t.li,{children:["Run the streaming pipeline using the big ",(0,a.jsx)(t.code,{children:"play"})," button rather than the individual gem ",(0,a.jsx)(t.code,{children:"play"})," buttons"]}),"\n",(0,a.jsx)(t.li,{children:"Type a question into the Slack channel and check the pipeline to see if the question is ingested and processed. Use the interims (as described above) to watch your message travel through the pipeline. Error messages are visible in the data preview samples."}),"\n",(0,a.jsx)(t.li,{children:"Ask lots of questions!"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"A GenerativeAI Chatbot",src:i(16280).A+"",width:"960",height:"600"})}),"\n",(0,a.jsxs)(t.p,{children:["And that\u2019s it! Congratulations on running the Generative AI Chatbot with Prophecy on Spark! You can check out the end result in the ",(0,a.jsx)(t.a,{href:"https://www.loom.com/share/a89ee52de80e41abb9b5647c1da73e18?sid=6fcf0298-79e8-412b-8e48-f58c9d6d7f3b",children:"video here"})," and a longer version ",(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?v=1exLfT-b-GM&t=1090s",children:"here"}),". Don't forget, all of these visually developed pipelines are converted to Spark code behind the scenes. Toggle to the code editor to see the code. This code is available in your forked GitHub repository when you commit, merge, and release your changes via the Prophecy UI. Now your Spark project can be run on any Spark cluster via the Prophecy interface or using your favorite build and deploy toolset. You may notice a Chatbot Batch pipeline available in the project for those who wish to explore it. We won\u2019t go into detail on Chatbot Batch because the steps are similar to those in the Chatbot Live (streaming) pipeline."]}),"\n",(0,a.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(t.p,{children:"Making a GenAI chatbot is largely an ETL problem that can be solved using a visual interface. Most of the work is setting up the dependencies (Slack, OpenAI, and Pinecone - or your favorite replacements for these). The ETL pipelines ingest and vectorize the web content. Then the Chatbot pipeline constructs a prompt for OpenAI using a question in Slack and the documentation content scraped from the web. Once we have the prompt, OpenAI (or another model) can respond with an answer."}),"\n",(0,a.jsxs)(t.p,{children:["What kind of Generative AI applications will you create? We'd love to hear your ideas and feedback! Please send us an email (",(0,a.jsx)(t.a,{href:"mailto:contact.us@Prophecy.io",children:"contact.us@Prophecy.io"}),") or reach out on our Slack ",(0,a.jsx)(t.a,{href:"https://join.slack.com/t/prophecy-io-support/shared_invite/zt-moq3xzoj-~5MSJ6WPnZfz7bwsqWi8tQ",children:"community."})," We are eager to share the Prophecy interface with as many users as we can because we think enabling more people to build their own solutions is the best way to use the latest technologies."]}),"\n",(0,a.jsx)(t.h2,{id:"faq",children:"FAQ"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Does Prophecy support additional models, including private models?"})}),"\n",(0,a.jsxs)(t.p,{children:["Stay tuned for support for additional models beyond those provided by OpenAI. Also, Prophecy will support private models and offer additional machine-learning gems out of the box. ",(0,a.jsx)(t.a,{href:"https://teams.com/",children:(0,a.jsx)(t.strong,{children:"Teams"})})," message ingestion will be available out of the box as well. Of course, Prophecy is entirely extensible to interface with more applications. If you'd like to see a particular application supported, don't hesitate to let us know."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Exactly which content is sent to OpenAI in the Chatbot Live pipeline?"})}),"\n",(0,a.jsx)(t.p,{children:"For this to work, you\u2019re sending the scraped web data (here we use Prophecy documentation) to OpenAI for the vectorization pipeline and again to answer the question."})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},83868:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/genai_architecture-b0b8daeeeb91af88276514821b475e77.png"},98607:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/genai_low_code_interface-a1b9397052683006133f2b9cf51a9fb3.png"}}]);