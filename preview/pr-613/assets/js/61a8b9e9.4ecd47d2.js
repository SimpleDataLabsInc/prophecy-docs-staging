"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[30878],{10687:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/openai-configure-embedding-27b293504f71c3e4c49f5377eb4b887e.png"},20600:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/openai-configure-answer-a2f543becfb0237af252fd218f0dc6ee.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}},49354:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/openai-intro-compute-text-embeddings-31cbbb227cfe0f3c9c39b1bdb698f95d.png"},61520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"Spark/gems/machine-learning/ml-openai","title":"OpenAI","description":"Request OpenAI to generate a vector embedding or request OpenAI to answer a question with an optional context.","source":"@site/docs/Spark/gems/machine-learning/ml-openai.md","sourceDirName":"Spark/gems/machine-learning","slug":"/engineers/openai","permalink":"/prophecy-docs-staging/preview/pr-613/engineers/openai","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"generative-ai","permalink":"/prophecy-docs-staging/preview/pr-613/tags/generative-ai"},{"inline":true,"label":"machine-learning","permalink":"/prophecy-docs-staging/preview/pr-613/tags/machine-learning"},{"inline":true,"label":"llm","permalink":"/prophecy-docs-staging/preview/pr-613/tags/llm"},{"inline":true,"label":"openai","permalink":"/prophecy-docs-staging/preview/pr-613/tags/openai"},{"inline":true,"label":"embedding","permalink":"/prophecy-docs-staging/preview/pr-613/tags/embedding"},{"inline":true,"label":"vector","permalink":"/prophecy-docs-staging/preview/pr-613/tags/vector"},{"inline":true,"label":"answer","permalink":"/prophecy-docs-staging/preview/pr-613/tags/answer"},{"inline":true,"label":"question","permalink":"/prophecy-docs-staging/preview/pr-613/tags/question"}],"version":"current","frontMatter":{"title":"OpenAI","id":"ml-openai","slug":"/engineers/openai","description":"Request OpenAI to generate a vector embedding or request OpenAI to answer a question with an optional context.","tags":["generative-ai","machine-learning","llm","openai","embedding","vector","answer","question"]},"sidebar":"mySidebar","previous":{"title":"Machine Learning","permalink":"/prophecy-docs-staging/preview/pr-613/engineers/machine-learning"},"next":{"title":"PineconeLookup","permalink":"/prophecy-docs-staging/preview/pr-613/engineers/pinecone-lookup"}}');var s=n(74848),i=n(28453),o=n(65537),a=n(79329);const l={title:"OpenAI",id:"ml-openai",slug:"/engineers/openai",description:"Request OpenAI to generate a vector embedding or request OpenAI to answer a question with an optional context.",tags:["generative-ai","machine-learning","llm","openai","embedding","vector","answer","question"]},c=void 0,d={},u=[{value:"1. Compute text embeddings",id:"1-compute-text-embeddings",level:3},{value:"1a. Configure",id:"1a-configure",level:4},{value:"1b. Input",id:"1b-input",level:4},{value:"1c. Output",id:"1c-output",level:4},{value:"1d. Generated code",id:"1d-generated-code",level:4},{value:"2. Answer a question with a given context",id:"2-answer-a-question-with-a-given-context",level:3},{value:"2a. Configure",id:"2a-configure",level:4},{value:"2b. Input",id:"2b-input",level:4},{value:"2c. Output",id:"2c-output",level:4},{value:"2d. Generated code",id:"2d-generated-code",level:4},{value:"FAQ",id:"faq",level:3},{value:"Troubleshooting",id:"troubleshooting",level:4},{value:"Can I choose other OpenAI models?",id:"can-i-choose-other-openai-models",level:4}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{class:"badge",children:"SPARK GEM"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.p,{children:"The OpenAI gem allows the Prophecy user to interact with the OpenAI API using two different requests:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Compute text embeddings"}),"\n",(0,s.jsx)(t.li,{children:"Answer a question, where the user has the option to provide context"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Follow along to learn how to interact with the OpenAI API using Prophecy's easy-to-use interface. For an example set of pipelines that use these gems to create a Generative AI Chatbot, see this ",(0,s.jsx)(t.a,{href:"/engineers/generative-ai-chatbot",children:"guide."})]}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["As with all applications that interface with Large Language Models (LLMs), the OpenAI gem can generate results that are incorrect and/or misleading. The OpenAI gem is subject to the same ",(0,s.jsx)(t.a,{href:"https://platform.openai.com/docs/guides/embeddings/limitations-risks",children:"limitations and risks"})," as those posed by OpenAI itself."]})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,s.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,s.jsx)("iframe",{src:"https://fast.wistia.net/embed/iframe/i1x7g14wn4?seo=false?videoFoam=true",title:"Getting Started With SQL Video",allow:"autoplay; fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,s.jsx)("script",{src:"https://fast.wistia.net/assets/external/E-v1.js",async:!0}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.h3,{id:"1-compute-text-embeddings",children:"1. Compute text embeddings"}),"\n",(0,s.jsxs)(t.p,{children:["Given a question input, the OpenAI gem will return a text embedding by calling the OpenAI ",(0,s.jsx)(t.a,{href:"https://platform.openai.com/docs/guides/embeddings/how-to-get-embeddings",children:"ada-002 model"}),". View the input and output from this gem to understand the data formats and sample."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Overview of the gem showing the input and output for computing a text embedding",src:n(49354).A+"",width:"2376",height:"814"})}),"\n",(0,s.jsx)(t.h4,{id:"1a-configure",children:"1a. Configure"}),"\n",(0,s.jsx)(t.p,{children:"Follow the steps below to configure the OpenAI gem to compute text embeddings."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Configure the gem to compute a text embedding",src:n(10687).A+"",width:"2880",height:"1640"})}),"\n",(0,s.jsxs)(t.p,{children:["Storing the OpenAI API token as a ",(0,s.jsx)(t.strong,{children:"(1) Databricks Secret"})," is highly recommended. For instructions click ",(0,s.jsx)(t.a,{href:"https://docs.databricks.com/en/security/secrets/index.html",children:"here."})," Be sure to use the ** (2) Fabric connection** to the Databricks workspace which contains the Databricks scope and secrets configured in this gem. Contact us to understand the integrations with other secret managers."]}),"\n",(0,s.jsxs)(t.p,{children:["Select the Operation type from the dropdown menu. ",(0,s.jsx)(t.strong,{children:"(3) Compute text embeddings"})," operation will send the selected ",(0,s.jsx)(t.strong,{children:"(4) Texts column"})," to the OpenAI API. For each entry in the Texts column, OpenAI's ada-002 model will return a text embedding."]}),"\n",(0,s.jsxs)(t.p,{children:["Instead of sending a single row to OpenAI's API, select the ",(0,s.jsx)(t.strong,{children:"(5) Group data"})," option. Group data is a window function, using a window of size 20, ",(0,s.jsx)(t.strong,{children:"(6) ordered by"})," the selected column. Using the Group data option influences model performance based on the column selected."]}),"\n",(0,s.jsx)(t.h4,{id:"1b-input",children:"1b. Input"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Column"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Required"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Question/Text"}),(0,s.jsx)(t.td,{children:"string - a question or text string of interest"}),(0,s.jsx)(t.td,{children:"True"})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"1c-output",children:"1c. Output"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Column"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"openai_embedding"}),(0,s.jsxs)(t.td,{children:["array(float) - The vector embedding returned from OpenAI corresponding to the input question/text. Each record is an array of ",(0,s.jsx)(t.code,{children:"1536"})," floating point numbers, such as ",(0,s.jsx)(t.code,{children:"[-0.0018493991, -0.0059955865, ... -0.02498541]"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"openai_error"}),(0,s.jsx)(t.td,{children:"string - this column is provided to display any error message returned from the OpenAI API; helpful for troubleshooting."})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"1d-generated-code",children:"1d. Generated code"}),"\n",(0,s.jsx)(t.p,{children:"All the visual designs are converted to code and committed to the Prophecy user's Git repository. See below for a sample of the code which calls the OpenAI API to compute text embeddings."}),"\n","\n",(0,s.jsxs)(o.A,{children:[(0,s.jsx)(a.A,{value:"py",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-py",children:'def vectorize(spark: SparkSession, question_seed: DataFrame) -> DataFrame:\n    from spark_ai.llms.openai import OpenAiLLM\n    from pyspark.dbutils import DBUtils\n    OpenAiLLM(api_key = DBUtils(spark).secrets.get(scope = "<redacted>", key = "<redacted>"))\\\n        .register_udfs(spark = spark)\n\n    return question_seed\\\n        .withColumn("_row_num", row_number().over(Window.partitionBy().orderBy(col("input"))))\\\n        .withColumn("_group_num", ceil(col("_row_num") / 20))\\\n        .withColumn("_data", struct(col("*")))\\\n        .groupBy(col("_group_num"))\\\n        .agg(collect_list(col("_data")).alias("_data"), collect_list(col("input")).alias("_texts"))\\\n        .withColumn("_embedded", expr(f"openai_embed_texts(_texts)"))\\\n        .select(\n          col("_texts"),\n          col("_embedded.embeddings").alias("_embeddings"),\n          col("_embedded.error").alias("openai_error"),\n          col("_data")\n        )\\\n        .select(expr("explode_outer(arrays_zip(_embeddings, _data))").alias("_content"), col("openai_error"))\\\n        .select(col("_content._embeddings").alias("openai_embedding"), col("openai_error"), col("_content._data.*"))\\\n        .drop("_row_num")\\\n        .drop("_group_num")\n'})})}),(0,s.jsx)(a.A,{value:"scala",label:"Scala",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-scala",children:"[Not yet supported]\n"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"2-answer-a-question-with-a-given-context",children:"2. Answer a question with a given context"}),"\n",(0,s.jsxs)(t.p,{children:["In addition to computing text embeddings, OpenAI's ada-002 model is also very good at answering questions. The Prophecy interface allows users to input a question (and optionally provide a context) as components of the ",(0,s.jsx)(t.code,{children:"prompt"})," sent to OpenAI. In response, OpenAI's ada-002 model returns an answer(s) to the question. See the input and output data previews before and after the OpenAI gem to understand the operation."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Overview of the gem showing the input and output for answering a question",src:n(96223).A+"",width:"2376",height:"966"})}),"\n",(0,s.jsx)(t.h4,{id:"2a-configure",children:"2a. Configure"}),"\n",(0,s.jsx)(t.p,{children:"Follow the steps below to configure the OpenAI gem to answer a question, and to understand how to provide a context if desired."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Configure the gem to answer a question with a given context",src:n(20600).A+"",width:"2880",height:"1834"})}),"\n",(0,s.jsxs)(t.p,{children:["Storing the OpenAI API token as a ",(0,s.jsx)(t.strong,{children:"(1) Databricks Secret"})," is highly recommended. For instructions click ",(0,s.jsx)(t.a,{href:"https://docs.databricks.com/en/security/secrets/index.html",children:"here."})," Be sure to use the ** (2) Fabric connection** to the Databricks workspace which contains the Databricks scope and secrets configured in this gem."]}),"\n",(0,s.jsxs)(t.p,{children:["Hardcoding the OpenAI credential is not recommended. Selecting this option could send credentials to be stored hardcoded in Git; use only for credentials that should be shared with the world. Contact us to understand the integrations with other secret managers. (",(0,s.jsx)(t.a,{href:"mailto:contact.us@Prophecy.io",children:"contact.us@Prophecy.io"}),")"]}),"\n",(0,s.jsxs)(t.p,{children:["Now it's time to craft a prompt to send to the OpenAI ada-002 model. Select the Operation type from the dropdown menu. The operation ",(0,s.jsx)(t.code,{children:"Answer questions"})," will prompt OpenAI's ada-002 model to answer the provided question using the datasets the model was trained on, which have some ",(0,s.jsx)(t.a,{href:"https://platform.openai.com/docs/guides/embeddings/blindness-to-recent-events",children:"blindness."})," For many users, you'll want to provide some context as part of your prompt. The operation ",(0,s.jsx)(t.strong,{children:"(3) Answer questions for given context"})," will likely generate answers more related to the context. Select the input column which has the question of interest as the ",(0,s.jsx)(t.strong,{children:"(4) Question text column"}),". To provide context in addition to the question, select ",(0,s.jsx)(t.strong,{children:"(5) Context text column"}),". For example, if the question is ",(0,s.jsx)(t.code,{children:"Does Prophecy support on-premise environments?"}),", an appropriate context would be some section of Prophecy's documentation. The ",(0,s.jsx)(t.strong,{children:"(6) context"})," and ",(0,s.jsx)(t.strong,{children:"(7) question (query)"})," comprise the prompt sent to OpenAI."]}),"\n",(0,s.jsx)(t.h4,{id:"2b-input",children:"2b. Input"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Column"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Required"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Question"}),(0,s.jsxs)(t.td,{children:["string - a question of interest to include in the prompt sent to OpenAI. Example: ",(0,s.jsx)(t.code,{children:"What is Prophecy's AI Assistant feature?"})]}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Context"}),(0,s.jsxs)(t.td,{children:["string - a text corpus related to the question of interest, also included in the prompt sent to OpenAI. Frequently the context column should undergo data transformations in the gems preceding the OpenAI gem. See ",(0,s.jsx)(t.a,{href:"/engineers/generative-ai-chatbot",children:"this guide"})," for a great example of preparing the text corpus and transforming sufficiently to include in a useful prompt."]}),(0,s.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"2c-output",children:"2c. Output"}),"\n",(0,s.jsxs)(t.p,{children:["Since OpenAI's models are probabalistic, they return at least one, and frequently more than one, answer. These responses are formatted as a json array of answer choices. The user would usually select the best answer from the choices; we recommend selecting the first answer if you wish to select one by default. This can be done in the gem following the OpenAI gem as in this ",(0,s.jsx)(t.a,{href:"/engineers/generative-ai-chatbot#3a-chatbot-live-pipeline",children:"example"}),"."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Column"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"openai_answer"}),(0,s.jsxs)(t.td,{children:["struct - this column contains the response from OpenAI in as a json array. Example: ",(0,s.jsx)(t.code,{children:'{"choices":["Prophecy\'s AI Assistant feature is called Data Copilot."]}'})," Select/filter from multiple answer choices in a gem following the OpenAI gem."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"openai_error"}),(0,s.jsx)(t.td,{children:"string - this column is provided to display any error message returned from the OpenAI API; helpful for troubleshooting."})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"2d-generated-code",children:"2d. Generated code"}),"\n",(0,s.jsx)(t.p,{children:"See below for a sample of the code which calls the OpenAI API to answer a question provided some context."}),"\n",(0,s.jsxs)(o.A,{children:[(0,s.jsx)(a.A,{value:"py",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-py",children:'def OpenAI_1(spark: SparkSession, collect_context: DataFrame) -> DataFrame:\n    from spark_ai.llms.openai import OpenAiLLM\n    from pyspark.dbutils import DBUtils\n    OpenAiLLM(api_key = DBUtils(spark).secrets.get(scope = "[redacted]", key = "[redacted]"))\\\n        .register_udfs(spark = spark)\n\n    return collect_context\\\n        .withColumn("_context", col("context"))\\\n        .withColumn("_query", col("input"))\\\n        .withColumn(\n          "openai_answer",\n          expr(\n            "openai_answer_question(_context, _query, \\" Answer the question based on the context below.\\nContext:\\n```\\n{context}\\n```\\nQuestion: \\n```\\n{query}\\n```\\nAnswer:\\n \\")"\n          )\n        )\\\n        .drop("_context", "_query")\n'})})}),(0,s.jsx)(a.A,{value:"scala",label:"Scala",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-scala",children:"  [page under construction]\n"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"faq",children:"FAQ"}),"\n",(0,s.jsx)(t.h4,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(t.p,{children:"The output data sample following the OpenAI gem also contains a column for any error message(s) returned from OpenAI. This handy column surfaces errors including invalid OpenAI credentials, invalid input questions, or problems with data formatting."}),"\n",(0,s.jsx)(t.h4,{id:"can-i-choose-other-openai-models",children:"Can I choose other OpenAI models?"}),"\n",(0,s.jsxs)(t.p,{children:["Currently we use ChatGPT 3.5 Turbo. Contact us for additional options: ",(0,s.jsx)(t.a,{href:"mailto:contact.us@Prophecy.io",children:"contact.us@Prophecy.io"})]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},65537:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),s=n(18215),i=n(65627),o=n(56347),a=n(50372),l=n(30604),c=n(11861),d=n(78749);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,u]=m({queryString:n,groupId:s}),[g,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,d.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),f=(()=>{const e=c??g;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,i]),tabValues:i}}var x=n(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function w(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),s=a[n].value;s!==r&&(c(t),o(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{l.push(e)},onKeyDown:u,onClick:d,...i,className:(0,s.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:i}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function v(e){const t=g(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,b.jsx)(w,{...t,...e}),(0,b.jsx)(j,{...t,...e})]})}function y(e){const t=(0,x.A)();return(0,b.jsx)(v,{...e,children:u(e.children)},String(t))}},79329:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(18215);const s={tabItem:"tabItem_Ymn6"};var i=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:n,children:t})}},96223:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/openai-intro-answer-question-context-b81d39354874965e789254f90c6fae32.png"}}]);