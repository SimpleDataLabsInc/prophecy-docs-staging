"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[50616],{2125:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/ml-text-proc-configure-chunkify-d99e640e07f1831c369ad80aa09339d2.png"},6083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"Spark/gems/machine-learning/ml-text-processing","title":"TextProcessing","description":"Text processing to prepare data to submit to a foundational model API.","source":"@site/docs/Spark/gems/machine-learning/ml-text-processing.md","sourceDirName":"Spark/gems/machine-learning","slug":"/engineers/text-processing","permalink":"/prophecy-docs-staging/preview/pr-598/engineers/text-processing","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"generative-ai","permalink":"/prophecy-docs-staging/preview/pr-598/tags/generative-ai"},{"inline":true,"label":"machine-learning","permalink":"/prophecy-docs-staging/preview/pr-598/tags/machine-learning"},{"inline":true,"label":"llm","permalink":"/prophecy-docs-staging/preview/pr-598/tags/llm"},{"inline":true,"label":"text-processing","permalink":"/prophecy-docs-staging/preview/pr-598/tags/text-processing"},{"inline":true,"label":"web-scraping","permalink":"/prophecy-docs-staging/preview/pr-598/tags/web-scraping"},{"inline":true,"label":"chunk","permalink":"/prophecy-docs-staging/preview/pr-598/tags/chunk"},{"inline":true,"label":"extract","permalink":"/prophecy-docs-staging/preview/pr-598/tags/extract"}],"version":"current","frontMatter":{"title":"TextProcessing","id":"ml-text-processing","slug":"/engineers/text-processing","description":"Text processing to prepare data to submit to a foundational model API.","tags":["generative-ai","machine-learning","llm","text-processing","web-scraping","chunk","extract"]},"sidebar":"mySidebar","previous":{"title":"PineconeLookup","permalink":"/prophecy-docs-staging/preview/pr-598/engineers/pinecone-lookup"},"next":{"title":"Generative AI Chatbot","permalink":"/prophecy-docs-staging/preview/pr-598/engineers/generative-ai-chatbot"}}');var a=n(74848),s=n(28453),i=n(65537),l=n(79329);const o={title:"TextProcessing",id:"ml-text-processing",slug:"/engineers/text-processing",description:"Text processing to prepare data to submit to a foundational model API.",tags:["generative-ai","machine-learning","llm","text-processing","web-scraping","chunk","extract"]},c=void 0,d={},u=[{value:"1. Load web URLs and Extract Text",id:"1-load-web-urls-and-extract-text",level:3},{value:"1a. Configure web scrape",id:"1a-configure-web-scrape",level:4},{value:"1b. Input",id:"1b-input",level:4},{value:"1c. Output",id:"1c-output",level:4},{value:"1d. Generated Code",id:"1d-generated-code",level:4},{value:"2. Split text data into equal chunks",id:"2-split-text-data-into-equal-chunks",level:3},{value:"2a. Configure text splitting",id:"2a-configure-text-splitting",level:4},{value:"2b. Input",id:"2b-input",level:4},{value:"2c. Output",id:"2c-output",level:4},{value:"2d. Generated code",id:"2d-generated-code",level:4},{value:"FAQ",id:"faq",level:3},{value:"Troubleshooting",id:"troubleshooting",level:4}];function h(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{class:"badge",children:"SPARK GEM"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.p,{children:"The TextProcessing gem enables text data preparation for machine learning in two different ways:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/engineers/text-processing/#1-load-web-urls-and-extract-text",children:"Load"})," web URLs and extract text."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/engineers/text-processing/#2-split-text-data-into-equal-chunks",children:"Split"})," text data into equal chunks."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Follow along to see how to use the TextProcessing gem. For an example set of pipelines that uses this gem to create a Generative AI Chatbot, see this ",(0,a.jsx)(t.a,{href:"/engineers/generative-ai-chatbot",children:"guide"}),"."]}),"\n",(0,a.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,a.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,a.jsx)("iframe",{src:"https://fast.wistia.net/embed/iframe/7v6y4ldt5x?seo=false?videoFoam=true",title:"Getting Started With SQL Video",allow:"autoplay; fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,a.jsx)("script",{src:"https://fast.wistia.net/assets/external/E-v1.js",async:!0}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.h3,{id:"1-load-web-urls-and-extract-text",children:"1. Load web URLs and Extract Text"}),"\n",(0,a.jsxs)(t.p,{children:["Given a column with web URLs, the ",(0,a.jsx)(t.code,{children:"Load web URLs"})," operation will scrape the content from each URL, and output the content as a binary format or as a human readable text format, depending on the operation type selected. The figure below shows the ",(0,a.jsx)(t.code,{children:"Load web URL and Extract Text"})," operation."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Overview web scrape and extract text",src:n(11959).A+"",width:"2376",height:"934"})}),"\n",(0,a.jsx)(t.h4,{id:"1a-configure-web-scrape",children:"1a. Configure web scrape"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Configure to web scrape",src:n(56144).A+"",width:"2880",height:"1726"})}),"\n",(0,a.jsxs)(t.p,{children:["Configure the ",(0,a.jsx)(t.strong,{children:"(1) Operation Type"})," to Load url (web scrape), and optionally extract the text. Specify which input ",(0,a.jsx)(t.strong,{children:"(2) Column name"})," contains the web urls. If the ",(0,a.jsx)(t.code,{children:"extract text"})," operation is selected, the text will be converted from binary to human readable format. When would you want to use the binary format? Binary web scraping is useful for downloading content including images or archived documents."]}),"\n",(0,a.jsx)(t.h4,{id:"1b-input",children:"1b. Input"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Required"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Column name (string with urls)"}),(0,a.jsx)(t.td,{children:"string - the input column which contains the strings of web URLs"}),(0,a.jsx)(t.td,{children:"True"})]})})]}),"\n",(0,a.jsx)(t.h4,{id:"1c-output",children:"1c. Output"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Result content ",(0,a.jsx)(t.code,{children:"Load url (web scrape)"})]}),(0,a.jsx)(t.td,{children:"binary - the contents of each web page"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Result content ",(0,a.jsx)(t.code,{children:"Load url (web scrape) and extract text"})]}),(0,a.jsx)(t.td,{children:"string - the contents of each web page, converted from binary to human readable text"})]})]})]}),"\n",(0,a.jsx)(t.h4,{id:"1d-generated-code",children:"1d. Generated Code"}),"\n","\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"py",label:"Python",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-py",children:'def scrape_pages(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    from pyspark.sql.functions import expr, array, struct\n    from spark_ai.webapps import WebUtils\n    WebUtils().register_udfs(spark)\n\n    return in0.withColumn("result_content", expr(f"web_scrape(loc)"))\n'})})}),(0,a.jsx)(l.A,{value:"scala",label:"Scala",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"[Not yet supported]\n"})})})]}),"\n",(0,a.jsx)(t.h3,{id:"2-split-text-data-into-equal-chunks",children:"2. Split text data into equal chunks"}),"\n",(0,a.jsx)(t.p,{children:'Sometimes you\'d like to send text data to a foundational model or store in a vector database, but the text is too long. For this case, just split the text into "chunks" of characters.'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Overview Chunkify",src:n(48382).A+"",width:"2376",height:"814"})}),"\n",(0,a.jsx)(t.h4,{id:"2a-configure-text-splitting",children:"2a. Configure text splitting"}),"\n",(0,a.jsxs)(t.p,{children:["Given a text input, the ",(0,a.jsx)(t.code,{children:"Split data"})," operation will separate the input column entries into chunks of specified ",(0,a.jsx)(t.code,{children:"size"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Configure to Chunkify",src:n(2125).A+"",width:"2880",height:"1726"})}),"\n",(0,a.jsxs)(t.p,{children:["Select the ",(0,a.jsx)(t.strong,{children:"(1) Operation type"})," to split text into equal chunks. Specify which input ",(0,a.jsx)(t.strong,{children:"(2) Column name"})," contains the relevant content. Specify an integer chunk ",(0,a.jsx)(t.strong,{children:"(3) Size"})," relevant for your generative AI use case."]}),"\n",(0,a.jsx)(t.h4,{id:"2b-input",children:"2b. Input"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Required"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Column name"}),(0,a.jsx)(t.td,{children:"string - the text content which should be split into equal chunks"}),(0,a.jsx)(t.td,{children:"True"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Size"}),(0,a.jsxs)(t.td,{children:["integer - the size of each chunk, number of characters. Example: ",(0,a.jsx)(t.code,{children:"1000"})]}),(0,a.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,a.jsx)(t.h4,{id:"2c-output",children:"2c. Output"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"result_chunks"}),(0,a.jsx)(t.td,{children:"array(string) - an array of text strings, each string representing one chunk of the larger text content"})]})})]}),"\n",(0,a.jsx)(t.h4,{id:"2d-generated-code",children:"2d. Generated code"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"py",label:"Python",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-py",children:'def Chunkify(spark: SparkSession, web_bronze_content: DataFrame) -> DataFrame:\n    from pyspark.sql.functions import expr, array, struct\n    from spark_ai.files.text import FileTextUtils\n    FileTextUtils().register_udfs(spark)\n\n    return web_bronze_content.withColumn("result_chunks", expr(f"text_split_into_chunks(content, 1000)"))\n'})})}),(0,a.jsx)(l.A,{value:"scala",label:"Scala",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"[Not yet supported]\n"})})})]}),"\n",(0,a.jsx)(t.h3,{id:"faq",children:"FAQ"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"How does this gem fit into the bigger picture of building a generative AI application?"})}),"\n",(0,a.jsxs)(t.p,{children:["For an example set of pipelines that uses this gem to create a Generative AI Chatbot, see this ",(0,a.jsx)(t.a,{href:"/engineers/generative-ai-chatbot",children:"guide"}),". Feel free to ",(0,a.jsx)(t.a,{href:"https://www.prophecy.io/request-a-demo",children:"reach out"})," and explore your use case with us."]}),"\n",(0,a.jsx)(t.h4,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,a.jsx)(t.p,{children:"Select a chunk size according to the limitations of your vector database index."})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},11959:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/ml-text-proc-scrape-extract-overview-34f31e4baf8a155a7537eb20431d08ac.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(96540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}},48382:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/ml-text-proc-overview-chunkify-c7292b08f77cc25d9899ef1c0fc88c4f.png"},56144:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/ml-text-proc-scrape-configure-3fc90ca55df1009a84cc9e5a5752eeb6.png"},65537:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),a=n(18215),s=n(65627),i=n(56347),l=n(50372),o=n(30604),c=n(11861),d=n(78749);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,u]=x({queryString:n,groupId:a}),[g,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,d.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),b=(()=>{const e=c??g;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=n(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==r&&(c(t),i(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{o.push(e)},onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=g(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,f.jsx)(j,{...t,...e}),(0,f.jsx)(v,{...t,...e})]})}function y(e){const t=(0,m.A)();return(0,f.jsx)(w,{...e,children:u(e.children)},String(t))}},79329:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(18215);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:n,children:t})}}}]);