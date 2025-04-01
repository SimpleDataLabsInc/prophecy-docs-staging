"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[59143],{3783:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"Spark/gems/machine-learning/ml-pinecone-lookup","title":"PineconeLookup","description":"Lookup a vector embedding from a Pinecone Database","source":"@site/docs/Spark/gems/machine-learning/ml-pinecone-lookup.md","sourceDirName":"Spark/gems/machine-learning","slug":"/Spark/gems/machine-learning/ml-pinecone-lookup","permalink":"/prophecy-docs-staging/preview/pr-596/Spark/gems/machine-learning/ml-pinecone-lookup","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"generative-ai","permalink":"/prophecy-docs-staging/preview/pr-596/tags/generative-ai"},{"inline":true,"label":"machine-learning","permalink":"/prophecy-docs-staging/preview/pr-596/tags/machine-learning"},{"inline":true,"label":"llm","permalink":"/prophecy-docs-staging/preview/pr-596/tags/llm"},{"inline":true,"label":"pinecone","permalink":"/prophecy-docs-staging/preview/pr-596/tags/pinecone"},{"inline":true,"label":"openai","permalink":"/prophecy-docs-staging/preview/pr-596/tags/openai"}],"version":"current","frontMatter":{"title":"PineconeLookup","id":"ml-pinecone-lookup","description":"Lookup a vector embedding from a Pinecone Database","tags":["generative-ai","machine-learning","llm","pinecone","openai"]},"sidebar":"mySidebar","previous":{"title":"OpenAI","permalink":"/prophecy-docs-staging/preview/pr-596/Spark/gems/machine-learning/ml-openai"},"next":{"title":"TextProcessing","permalink":"/prophecy-docs-staging/preview/pr-596/Spark/gems/machine-learning/ml-text-processing"}}');var i=t(74848),s=t(28453),o=t(65537),a=t(79329);const c={title:"PineconeLookup",id:"ml-pinecone-lookup",description:"Lookup a vector embedding from a Pinecone Database",tags:["generative-ai","machine-learning","llm","pinecone","openai"]},l=void 0,d={},p=[{value:"Gem Parameters",id:"gem-parameters",level:3},{value:"Credentials",id:"credentials",level:4},{value:"Properties",id:"properties",level:4},{value:"Input",id:"input",level:3},{value:"Output",id:"output",level:3},{value:"FAQ",id:"faq",level:3},{value:"Troubleshooting",id:"troubleshooting",level:4},{value:"Creating a Pinecone Index",id:"creating-a-pinecone-index",level:4}];function u(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{class:"badge",children:"SPARK GEM"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:"The PineconeLookup gem identifies content that is similar to a provided vector embedding. The gem calls the Pinecone API and returns a set of IDs with highest similarity to the provided embedding."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-596/Spark/gems/machine-learning/ml-pinecone-lookup#gem-parameters",children:(0,i.jsx)(n.strong,{children:"Parameters:"})})," Configure the parameters needed to call the Pinecone API."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-596/Spark/gems/machine-learning/ml-pinecone-lookup#input",children:(0,i.jsx)(n.strong,{children:"Input:"})})," This gem requires an embedding as input. The embedding is provided by a foundational model like ",(0,i.jsx)(n.a,{href:"https://platform.openai.com/docs/introduction",children:"OpenAI"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-596/Spark/gems/machine-learning/ml-pinecone-lookup#output",children:(0,i.jsx)(n.strong,{children:"Output:"})})," This gem outputs an array of IDs with corresponding similarity scores."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Input and Output",src:t(17921).A+"",width:"2376",height:"814"})}),"\n",(0,i.jsx)(n.p,{children:"Now let\u2019s understand the gem parameters, input, and output in detail."}),"\n",(0,i.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,i.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,i.jsx)("iframe",{src:"https://fast.wistia.net/embed/iframe/nupkza0ir6?seo=false?videoFoam=true",title:"Getting Started With SQL Video",allow:"autoplay; fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,i.jsx)("script",{src:"https://fast.wistia.net/assets/external/E-v1.js",async:!0}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h3,{id:"gem-parameters",children:"Gem Parameters"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Parameters",src:t(16869).A+"",width:"2880",height:"1726"})}),"\n",(0,i.jsxs)(n.p,{children:["Verify the ",(0,i.jsx)(n.strong,{children:"(1) input columns"})," contain a column with the embeddings. The structure of this column's entries must be compatible with the structure of the Pinecone index."]}),"\n",(0,i.jsx)(n.h4,{id:"credentials",children:"Credentials"}),"\n",(0,i.jsxs)(n.p,{children:["Configure the Pinecone API credentials here. Storing the Pinecone API token as a ",(0,i.jsx)(n.strong,{children:"(2) Databricks Secret"})," is highly recommended. For instructions click ",(0,i.jsx)(n.a,{href:"https://docs.databricks.com/en/security/secrets/index.html",children:"here."})," Be sure to use the ",(0,i.jsx)(n.strong,{children:"(3) Fabric connection"})," to the Databricks workspace which contains the Databricks scope and secrets configured in this gem."]}),"\n",(0,i.jsxs)(n.p,{children:["Hardcoding the Pinecone credential is not recommended. Selecting this option could send credentials to be stored hardcoded in Git; ",(0,i.jsx)(n.a,{href:"https://www.prophecy.io/request-a-demo",children:"reach out"})," to understand the integrations with other secret managers."]}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(n.p,{children:["Pinecone DB uses indexing to map the vectors to a data structure that will enable faster searching. The PineconeLookup gem searches through a Pinecone index to identify embeddings with similarity to the input embedding. Enter the Pinecone ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-596/Spark/gems/machine-learning/ml-pinecone-lookup#faq",children:"(4) Index name"})})," which you\u2019d like to use for looking up embeddings."]}),"\n",(0,i.jsxs)(n.p,{children:["Select one of the gem\u2019s input columns with vector embeddings as the ",(0,i.jsx)(n.strong,{children:"(5) Vector column"})," to send to Pinecone\u2019s API. The column ",(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-596/Spark/gems/machine-learning/ml-pinecone-lookup#input",children:"must"})," be compatible with the Pinecone Index. To change the column\u2019s datatype and properties, ",(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-596/Spark/gems/machine-learning/ml-pinecone-lookup#faq",children:"configure"})," the gem(s) preceding the PineconeLookup gem."]}),"\n",(0,i.jsxs)(n.p,{children:["Pinecone\u2019s API can return multiple results. Depending on the use case, select the desired ",(0,i.jsx)(n.strong,{children:"(6) Number of results"})," sorted by similarity score. The result with highest similarity to the user\u2019s text question will be listed first."]}),"\n",(0,i.jsx)(n.h3,{id:"input",children:"Input"}),"\n",(0,i.jsxs)(n.p,{children:["PineconeLookup requires a model_embedding column as input. Use one of Prophecy's Machine Learning gems to provide the model_embedding. For example, the OpenAI gem can precede the PineconeLookup gem in the pipeline. The OpenAI gem, configured to ",(0,i.jsx)(n.code,{children:"Compute a text embedding"}),", will output an openai_embedding column. This is a suitable input for the PineconeLookup gem."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Column"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Required"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"model_embedding"}),(0,i.jsxs)(n.td,{children:["array(float) - The format of this embedding is important. It must be an array of floating point numbers that matches the requirements of the Pinecone index. For example, we used a Pinecone index with ",(0,i.jsx)(n.code,{children:"1536"})," dimensions, ",(0,i.jsx)(n.code,{children:"Cosine"})," metric, and an ",(0,i.jsx)(n.code,{children:"s1"})," pod type. So each record in the model_embedding column must be an array of ",(0,i.jsx)(n.code,{children:"1536"})," floating point numbers, such as ",(0,i.jsx)(n.code,{children:"[-0.0018493991, -0.0059955865, ... -0.02498541]"}),"."]}),(0,i.jsx)(n.td,{children:"True"})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"output",children:"Output"}),"\n",(0,i.jsxs)(n.p,{children:["The output dataset contains the pinecone_matches and pinecone_error columns. For each input content entry, this gem adds an array to the pinecone_matches column. The output array will have ",(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-596/Spark/gems/machine-learning/ml-pinecone-lookup#properties",children:"Number of Results"})," entries."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Column"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"pinecone_matches"}),(0,i.jsxs)(n.td,{children:["array - an array of several content IDs and their scores. Example: ",(0,i.jsx)(n.code,{children:'[{"id":"web-223","score":0.8437653},{"id":"web-224","score":0.8403446}, ...{"id":"web-237","score":0.82916564}]'})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"pinecone_error"}),(0,i.jsx)(n.td,{children:"string - this column is provided to show any error message returned from Pinecone\u2019s API; helpful for troubleshooting errors related to the PineconeLookup gem."})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Prophecy converts the visual design into Spark code available on the Prophecy user's Git repository. Find the Spark code for the PineconeLookup gem below."}),"\n","\n",(0,i.jsxs)(o.A,{children:[(0,i.jsx)(a.A,{value:"py",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:'def vector_lookup(Spark: SparkSession, in0: DataFrame) -> DataFrame:\n    from pySpark.sql.functions import expr, array, struct\n    from Spark_ai.dbs.pinecone import PineconeDB, IdVector\n    from pySpark.dbutils import DBUtils\n    PineconeDB(DBUtils(Spark).secrets.get(scope = "< my_scope >", key = "< my_key >"), "us-east-1-aws")\\\n        .register_udfs(Spark)\n\n    return in0\\\n        .withColumn("_vector", col("<model>_embedding"))\\\n        .withColumn("_response", expr(f"pinecone_query(\\<index name>\\", _vector, {3})"))\\\n        .withColumn("pinecone_matches", col("_response.matches"))\\\n        .withColumn("pinecone_error", col("_response.error"))\\\n        .drop("_vector", "_response")\n'})})}),(0,i.jsx)(a.A,{value:"scala",label:"Scala",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"  [Not yet supported]\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"faq",children:"FAQ"}),"\n",(0,i.jsx)(n.h4,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsx)(n.p,{children:"To troubleshoot the gem preceding PineconeLookup, open the data preview output from the previous gem. For example if the embedding structure is incorrect then try adjusting the previous gem, run, and view that gem\u2019s output data preview."}),"\n",(0,i.jsx)(n.h4,{id:"creating-a-pinecone-index",children:"Creating a Pinecone Index"}),"\n",(0,i.jsxs)(n.p,{children:["If you don\u2019t have one yet, ",(0,i.jsx)(n.a,{href:"https://docs.pinecone.io/docs/quickstart",children:"create a Pinecone index"}),". Click ",(0,i.jsx)(n.a,{href:"https://docs.pinecone.io/docs/choosing-index-type-and-size",children:"here"})," for pointers on choosing an index type and size. How to populate the index? For example, ",(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-596/Spark/gems/machine-learning/gen-ai-chatbot#step-2-build-a-knowledge-warehouse",children:"this guide"})," shows how to ingest and vectorize web content data to store in a Pinecone Database index."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},16869:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/pinecone_lookup_configure-c0222e658f0a0e83456793ea8e3bffd0.png"},17921:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/pinecone_lookup_input_output-268c3aecc7c4cb663c302cdd2682e30f.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}},65537:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(96540),i=t(18215),s=t(65627),o=t(56347),a=t(50372),c=t(30604),l=t(11861),d=t(78749);function p(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=u(e),[o,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[l,p]=m({queryString:t,groupId:i}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,d.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),b=(()=>{const e=l??g;return h({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{b&&c(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),p(e),f(e)}),[p,f,s]),tabValues:s}}var f=t(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),i=a[t].value;i!==r&&(l(n),o(i))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{c.push(e)},onKeyDown:p,onClick:d,...s,className:(0,i.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function k(e){const n=(0,f.A)();return(0,x.jsx)(y,{...e,children:p(e.children)},String(n))}},79329:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(18215);const i={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,o),hidden:t,children:n})}}}]);