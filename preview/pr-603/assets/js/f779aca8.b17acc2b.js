"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[72661],{15010:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"Spark/gems/custom/rest-api-enrich","title":"RestAPIEnrich","description":"Enrich DataFrame with content from rest API response based on configuration","source":"@site/docs/Spark/gems/custom/rest-api-enrich.md","sourceDirName":"Spark/gems/custom","slug":"/engineers/rest-api-enrich","permalink":"/prophecy-docs-staging/preview/pr-603/engineers/rest-api-enrich","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-603/tags/gems"},{"inline":true,"label":"api","permalink":"/prophecy-docs-staging/preview/pr-603/tags/api"},{"inline":true,"label":"custom","permalink":"/prophecy-docs-staging/preview/pr-603/tags/custom"},{"inline":true,"label":"rest","permalink":"/prophecy-docs-staging/preview/pr-603/tags/rest"}],"version":"current","frontMatter":{"title":"RestAPIEnrich","id":"rest-api-enrich","slug":"/engineers/rest-api-enrich","description":"Enrich DataFrame with content from rest API response based on configuration","tags":["gems","api","custom","rest"]},"sidebar":"mySidebar","previous":{"title":"FileOperation","permalink":"/prophecy-docs-staging/preview/pr-603/engineers/file-operation"},"next":{"title":"Directory","permalink":"/prophecy-docs-staging/preview/pr-603/engineers/directory"}}');var n=t(74848),a=t(28453),i=t(49235),l=t(65537),c=t(79329);const o={title:"RestAPIEnrich",id:"rest-api-enrich",slug:"/engineers/rest-api-enrich",description:"Enrich DataFrame with content from rest API response based on configuration",tags:["gems","api","custom","rest"]},d=void 0,h={},u=[{value:"Parameters",id:"parameters",level:3},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Generated Code",id:"generated-code",level:4}];function p(e){const s={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.0.1+",scala_package_name:"",scala_package_version:"",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"15.4+",livy:"Not Supported"}),"\n",(0,n.jsx)(s.p,{children:"Enriches the DataFrame by adding column(s) with content from REST API output based on the given configuration."}),"\n",(0,n.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(s.p,{children:"Each property can either be set as a static value or a value from an existing column of the input DataFrame. Please refer\nto the examples in the description column of each parameter for reference on how the string value should be formed."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Required"}),(0,n.jsx)(s.th,{children:"Default"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"method"}),(0,n.jsxs)(s.td,{children:["method for the new Request object: ",(0,n.jsx)(s.code,{children:"GET"}),", ",(0,n.jsx)(s.code,{children:"OPTIONS"}),", ",(0,n.jsx)(s.code,{children:"HEAD"}),", ",(0,n.jsx)(s.code,{children:"POST"}),", ",(0,n.jsx)(s.code,{children:"PUT"}),", ",(0,n.jsx)(s.code,{children:"PATCH"}),", or ",(0,n.jsx)(s.code,{children:"DELETE"}),"."]}),(0,n.jsx)(s.td,{children:"true"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"url"}),(0,n.jsx)(s.td,{children:"URL for the REST API."}),(0,n.jsx)(s.td,{children:"true"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"params"}),(0,n.jsxs)(s.td,{children:["Dictionary, list of tuples or bytes to send in the query string for the Request. eg: ",(0,n.jsx)(s.code,{children:'{"key1":"value1", "key2": value2, "key3": ["value1", "value2"]}'})]}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"data"}),(0,n.jsxs)(s.td,{children:["Dictionary to send in the body of the Request. eg: ",(0,n.jsx)(s.code,{children:'{"key1":"value1", "key2": value2}'})]}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"JSON"}),(0,n.jsxs)(s.td,{children:["A JSON serializable Python object to send in the body of the Request. eg: ",(0,n.jsx)(s.code,{children:'{"key1":"value1", "key2": value2}'})]}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"headers"}),(0,n.jsxs)(s.td,{children:["Dictionary of HTTP Headers to send with the Request. eg: ",(0,n.jsx)(s.code,{children:'{"key1":"value1", "key2": "value2"}'})]}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"cookies"}),(0,n.jsxs)(s.td,{children:["Dictionary to send with the Request. eg: ",(0,n.jsx)(s.code,{children:'{"key1":"value1", "key2": "value2"}'})]}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"auth"}),(0,n.jsxs)(s.td,{children:["Auth tuple to enable Basic/Digest/Custom HTTP Auth. eg: ",(0,n.jsx)(s.code,{children:"user:pass"})]}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"timeout"}),(0,n.jsxs)(s.td,{children:["How many seconds to wait for the server to send data before giving up, as a float, eg: ",(0,n.jsx)(s.code,{children:"0.5"})," or a (connect timeout, read timeout) tuple. eg: ",(0,n.jsx)(s.code,{children:"0.5:0.25"})]}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"allow redirects"}),(0,n.jsxs)(s.td,{children:["Enable/disable ",(0,n.jsx)(s.code,{children:"GET/OPTIONS/POST/PUT/PATCH/DELETE/HEAD redirection"}),". eg: ",(0,n.jsx)(s.code,{children:"true"})," or ",(0,n.jsx)(s.code,{children:"false"})]}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"true"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"proxies"}),(0,n.jsxs)(s.td,{children:["Dictionary mapping protocol to the URL of the proxy. eg: ",(0,n.jsx)(s.code,{children:'{"https" : "https://1.1.0.1:80"}'})]}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"verify"}),(0,n.jsxs)(s.td,{children:["Either a boolean, in which case it controls whether we verify the server\u2019s TLS certificate eg: ",(0,n.jsx)(s.code,{children:"true"})," or ",(0,n.jsx)(s.code,{children:"false"})," or a string, in which case it must be a path to a CA bundle to use. Defaults to True. eg: ",(0,n.jsx)(s.code,{children:"dbfs:/path-to-file"})]}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"true"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"stream"}),(0,n.jsxs)(s.td,{children:["if False, the response content will be immediately downloaded. eg: ",(0,n.jsx)(s.code,{children:"true"})," or ",(0,n.jsx)(s.code,{children:"false"})]}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"cert"}),(0,n.jsxs)(s.td,{children:["if String, path to SSL client cert file (.pem). eg. ",(0,n.jsx)(s.code,{children:"dbfs:/path-to-file"}),". If Tuple, (\u2018cert\u2019, \u2018key\u2019) pair. eg: ",(0,n.jsx)(s.code,{children:"cert:key"}),"."]}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"parse content"}),(0,n.jsxs)(s.td,{children:["Parse content as JSON (to make the schema available, enable ",(0,n.jsx)(s.code,{children:"custom schema"}),", and click ",(0,n.jsx)(s.code,{children:"infer from cluster"})," at the bottom left in the output tab)"]}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{children:"false"})]})]})]}),"\n",(0,n.jsxs)(s.admonition,{type:"info",children:[(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["To store sensitive information like API key (headers), auth etc., ",(0,n.jsx)(s.code,{children:"Databricks secrets"})," can be used as shown in ",(0,n.jsx)(s.a,{href:"#example-1",children:"Example"})," below."]}),"\n",(0,n.jsxs)(s.li,{children:["If the expected number of rows are very large, it's better to provide ",(0,n.jsx)(s.code,{children:"await time"})," in the ",(0,n.jsx)(s.code,{children:"advanced tab"})," so you don't overwhelm the source server or exceed any request limits."]}),"\n",(0,n.jsxs)(s.li,{children:["For APIs which takes list of parameters as inputs, window functions like ",(0,n.jsx)(s.code,{children:"collect_list"})," can be used before ",(0,n.jsx)(s.code,{children:"RestApiEnrich"})," gem to reduce the number of API calls."]}),"\n"]}),(0,n.jsxs)(s.p,{children:["Please make sure that cluster is connected while using the ",(0,n.jsx)(s.code,{children:"parse content"})," option to ",(0,n.jsx)(s.code,{children:"infer the schema from cluster"})," for the first time."]})]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["All input parameters are expected to be in string format. Other column types such as ",(0,n.jsx)(s.code,{children:"array/JSON/struct"})," can be created\nusing combination of aggregate/window gems along with reformat component and then can be cast as string prior to passing the column in ",(0,n.jsx)(s.code,{children:"RestAPIEnrich gem"}),"\nas needed."]})}),"\n",(0,n.jsx)(s.h3,{id:"example-1",children:"Example 1"}),"\n",(0,n.jsxs)(s.p,{children:["Let's try to fetch prices for few cryptocurrencies from ",(0,n.jsx)(s.a,{href:"https://www.coinapi.io/",children:"Coin-API"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"We would be taking cryptocurrency and currency as input from DataFrame and pass url, headers as static values.\nNote that URL in this example is created using static base url and adding cryptocurrency and currency as inputs\nfrom DataFrame."}),"\n",(0,n.jsx)(s.p,{children:"Also, we would be using Databricks-secrets to pass headers as it requires API-key."}),"\n",(0,n.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,n.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,n.jsx)("iframe",{src:"https://user-images.githubusercontent.com/103921419/184725747-88115fa5-b70b-4caf-b3e0-1f2476e15d6e.mp4",title:"Rest API example 1",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,n.jsx)(s.h3,{id:"example-2",children:"Example 2"}),"\n",(0,n.jsx)(s.p,{children:"Let's take a more complex example, where all method, url, headers, params etc are passed as values from DataFrame\ncolumns."}),"\n",(0,n.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,n.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,n.jsx)("iframe",{src:"https://user-images.githubusercontent.com/103921419/184725732-5cafc278-c1cf-4bad-9078-9f810ede008a.mp4",title:"Rest API example 2",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,n.jsx)(s.h4,{id:"generated-code",children:"Generated Code"}),"\n","\n",(0,n.jsx)(l.A,{children:(0,n.jsx)(c.A,{value:"py",label:"Python",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-py",children:'def get_data_from_api(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    requestDF = in0.withColumn(\n        "api_output",\n        get_rest_api(\n          to_json(struct(lit("GET").alias("method"), col("url"), lit(Config.coin_api_key).alias("headers"))),\n          lit("")\n        )\n    )\n\n    return requestDF.withColumn(\n        "content_parsed",\n        from_json(col("api_output.content"), schema_of_json(requestDF.select("api_output.content").take(1)[0][0]))\n    )\n\n'})})})})]})}function m(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>l});var r=t(96540);const n={},a=r.createContext(n);function i(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(a.Provider,{value:s},e.children)}},49235:(e,s,t)=>{t.d(s,{A:()=>n});t(96540);var r=t(74848);function n(e){return(0,r.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,r.jsxs)("span",{className:"badge-dependency",children:[(0,r.jsx)("span",{className:"left",children:e.python_package_name}),(0,r.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,r.jsxs)("span",{className:"badge-dependency",children:[(0,r.jsx)("span",{className:"left",children:e.scala_package_name}),(0,r.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,r.jsxs)("span",{className:"badge-dependency",children:[(0,r.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,r.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,r.jsxs)("span",{className:"badge-dependency",children:[(0,r.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,r.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,r.jsxs)("span",{className:"badge-spark",children:[(0,r.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,r.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,r.jsxs)("span",{className:"badge-spark",children:[(0,r.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,r.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,r.jsxs)("span",{className:"badge-spark",children:[(0,r.jsx)("span",{className:"left",children:"Livy"}),(0,r.jsx)("span",{className:"right",children:e.livy})]})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]})}},65537:(e,s,t)=>{t.d(s,{A:()=>w});var r=t(96540),n=t(18215),a=t(65627),i=t(56347),l=t(50372),c=t(30604),o=t(11861),d=t(78749);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:s,children:t}=e;return(0,r.useMemo)((()=>{const e=s??function(e){return h(e).map((e=>{let{props:{value:s,label:t,attributes:r,default:n}}=e;return{value:s,label:t,attributes:r,default:n}}))}(t);return function(e){const s=(0,o.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,t])}function p(e){let{value:s,tabValues:t}=e;return t.some((e=>e.value===s))}function m(e){let{queryString:s=!1,groupId:t}=e;const n=(0,i.W6)(),a=function(e){let{queryString:s=!1,groupId:t}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:s,groupId:t});return[(0,c.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const s=new URLSearchParams(n.location.search);s.set(a,e),n.replace({...n.location,search:s.toString()})}),[a,n])]}function x(e){const{defaultValue:s,queryString:t=!1,groupId:n}=e,a=u(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:s,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:a}))),[o,h]=m({queryString:t,groupId:n}),[x,j]=function(e){let{groupId:s}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(s),[n,a]=(0,d.Dv)(t);return[n,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:n}),f=(()=>{const e=o??x;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{f&&c(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),j(e)}),[h,j,a]),tabValues:a}}var j=t(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function b(e){let{className:s,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),d=e=>{const s=e.currentTarget,t=c.indexOf(s),n=l[t].value;n!==r&&(o(s),i(n))},h=e=>{let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;s=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;s=c[t]??c[c.length-1];break}}s?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},s),children:l.map((e=>{let{value:s,label:t,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===s?0:-1,"aria-selected":r===s,ref:e=>{c.push(e)},onKeyDown:h,onClick:d,...a,className:(0,n.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":r===s}),children:t??s},s)}))})}function y(e){let{lazy:s,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(s){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,s)=>(0,r.cloneElement)(e,{key:s,hidden:e.props.value!==a})))})}function v(e){const s=x(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,g.jsx)(b,{...s,...e}),(0,g.jsx)(y,{...s,...e})]})}function w(e){const s=(0,j.A)();return(0,g.jsx)(v,{...e,children:h(e.children)},String(s))}},79329:(e,s,t)=>{t.d(s,{A:()=>i});t(96540);var r=t(18215);const n={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(e){let{children:s,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,i),hidden:t,children:s})}}}]);