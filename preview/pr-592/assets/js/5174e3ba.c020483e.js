"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[26803],{28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>l});var i=n(96540);const s={},t=i.createContext(s);function o(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:r},e.children)}},29028:(e,r,n)=>{n.d(r,{A:()=>i});const i=n.p+"assets/images/emr-serverless-dev-select-6519ad3a861079c485acfa293c0b2cf8.png"},33643:(e,r,n)=>{n.d(r,{A:()=>i});const i=n.p+"assets/images/library-789a18e5a1d88023a77f94cfaf14cdb9.png"},37799:(e,r,n)=>{n.d(r,{A:()=>i});const i=n.p+"assets/images/provider-d17eb0c20095beecf6242f6b19e88c46.png"},40522:(e,r,n)=>{n.d(r,{A:()=>i});const i=n.p+"assets/images/emr-setup-41af69fdd1a9c4d149377d61b365bd2d.png"},45456:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"administration/fabrics/Spark-fabrics/emr","title":"Amazon EMR","description":"Use Amazon EMR via Livy as your Spark execution engine","source":"@site/docs/administration/fabrics/Spark-fabrics/emr.md","sourceDirName":"administration/fabrics/Spark-fabrics","slug":"/administration/fabrics/Spark-fabrics/emr","permalink":"/prophecy-docs-staging/preview/pr-592/administration/fabrics/Spark-fabrics/emr","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"deployment","permalink":"/prophecy-docs-staging/preview/pr-592/tags/deployment"},{"inline":true,"label":"installation","permalink":"/prophecy-docs-staging/preview/pr-592/tags/installation"},{"inline":true,"label":"emr","permalink":"/prophecy-docs-staging/preview/pr-592/tags/emr"},{"inline":true,"label":"livy","permalink":"/prophecy-docs-staging/preview/pr-592/tags/livy"},{"inline":true,"label":"fabric","permalink":"/prophecy-docs-staging/preview/pr-592/tags/fabric"},{"inline":true,"label":"serverless","permalink":"/prophecy-docs-staging/preview/pr-592/tags/serverless"}],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Amazon EMR","id":"emr","description":"Use Amazon EMR via Livy as your Spark execution engine","sidebar_position":5,"tags":["deployment","installation","emr","livy","fabric","serverless"]},"sidebar":"adminSidebar","previous":{"title":"Livy","permalink":"/prophecy-docs-staging/preview/pr-592/administration/fabrics/Spark-fabrics/livy"},"next":{"title":"Google Cloud Dataproc","permalink":"/prophecy-docs-staging/preview/pr-592/administration/fabrics/Spark-fabrics/gcp-dataproc-fabric-guide"}}');var s=n(74848),t=n(28453),o=n(65537),l=n(79329);const a={title:"Amazon EMR",id:"emr",description:"Use Amazon EMR via Livy as your Spark execution engine",sidebar_position:5,tags:["deployment","installation","emr","livy","fabric","serverless"]},c=void 0,d={},u=[{value:"Create Amazon EMR cluster with Apache Livy",id:"create-amazon-emr-cluster-with-apache-livy",level:2},{value:"Configure network settings",id:"configure-network-settings",level:2},{value:"Create a fabric",id:"create-a-fabric",level:2}];function h(e){const r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"This page outlines how to use Amazon EMR via Livy as your Spark execution engine in Prophecy."}),"\n",(0,s.jsxs)(r.p,{children:["These instructions work for both ",(0,s.jsx)(r.strong,{children:"Amazon EMR"})," and ",(0,s.jsx)(r.strong,{children:"Amazon EMR Serverless"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"create-amazon-emr-cluster-with-apache-livy",children:"Create Amazon EMR cluster with Apache Livy"}),"\n",(0,s.jsx)(r.p,{children:"In your Amazon EMR service, create a cluster. When doing so:"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["Under ",(0,s.jsx)(r.strong,{children:"Application bundle"})," select ",(0,s.jsx)(r.strong,{children:"Custom"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:["When selecting applications, make sure ",(0,s.jsx)(r.strong,{children:"Livy"})," and ",(0,s.jsx)(r.strong,{children:"Spark"})," are included in the install."]}),"\n"]}),"\n",(0,s.jsx)("img",{src:n(50586).A,alt:"EMR create cluster",width:"75%"}),"\n",(0,s.jsx)(r.h2,{id:"configure-network-settings",children:"Configure network settings"}),"\n",(0,s.jsx)(r.p,{children:"To make sure that EMR can communicate with Prophecy, you need to configure specific network settings. Specifically, you need to modify the security groups of your EMR cluster."}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["Modify the ",(0,s.jsx)(r.strong,{children:"Primary Node"})," security group to allow incoming connections to port ",(0,s.jsx)(r.code,{children:"8998"})," from the Prophecy IP. You can do so by adding an inbound rule to the Master security group that permits incoming traffic on port ",(0,s.jsx)(r.code,{children:"8998"})," from the Prophecy IP address."]}),"\n",(0,s.jsxs)(r.li,{children:["Modify the ",(0,s.jsx)(r.strong,{children:"Core Node"})," security group to allow outgoing connections to the Prophecy public IP ",(0,s.jsx)(r.code,{children:"3.133.35.237"})," over HTTPS. Do this by adding an outbound rule to the Core security group that allows outgoing traffic over HTTPS protocol to the Prophecy public IP."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"create-a-fabric",children:"Create a fabric"}),"\n",(0,s.jsxs)(r.p,{children:["To connect EMR and Prophecy, you must create a fabric. You can either create an EMR fabric (suggested), or a ",(0,s.jsx)(r.a,{href:"/prophecy-docs-staging/preview/pr-592/administration/fabrics/Spark-fabrics/livy",children:"Livy fabric"}),"."]}),"\n",(0,s.jsxs)(o.A,{children:[(0,s.jsxs)(l.A,{value:"emr",label:"EMR",default:!0,children:[(0,s.jsx)("p",{children:"To create an EMR fabric:"}),(0,s.jsxs)("ol",{children:[(0,s.jsx)("li",{children:(0,s.jsxs)(r.p,{children:["Open Prophecy and click ",(0,s.jsx)("strong",{children:"Create Entity"})," from the left\nnavigation menu. Then, click on the fabric tile."]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(r.p,{children:["Name your fabric and click ",(0,s.jsx)("strong",{children:"Continue"}),"."]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(r.p,{children:["Keep the Provider Type as ",(0,s.jsx)("strong",{children:"Spark"}),", and choose"," ","\n",(0,s.jsx)("strong",{children:"EMR"})," as the Provider."]})}),(0,s.jsx)("br",{}),(0,s.jsx)("img",{src:n(96909).A,alt:"EMR Provider",width:"75%"}),(0,s.jsx)("li",{children:(0,s.jsxs)(r.p,{children:["Enter your AWS credentials under ",(0,s.jsx)("strong",{children:"Access Key"})," and"," ","\n",(0,s.jsx)("strong",{children:"Secret Key"}),". Then, enter the region that your EMR\ncluster is running in."]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(r.p,{children:["Click on ",(0,s.jsx)("strong",{children:"Fetch environments"}),"."]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(r.p,{children:["Under ",(0,s.jsx)("strong",{children:"Spark Environment"}),", select the EMR cluster that\nyou would like to connect to."]})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.p,{children:"Enter the S3 path that points to the location where you would like your\nlogs to persist."})}),(0,s.jsx)("br",{}),(0,s.jsx)("img",{src:n(40522).A,alt:"EMR dependencies",width:"75%"}),(0,s.jsx)("li",{children:(0,s.jsxs)(r.p,{children:["Add the job size to your environment by clicking on"," ","\n",(0,s.jsx)("strong",{children:"Add job Size"}),". Configure your job size and click on"," ","\n",(0,s.jsx)("strong",{children:"Add"}),"."]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(r.p,{children:["Select File System under ",(0,s.jsx)("strong",{children:"Scala Resolution mode"})," and\ninput ",(0,s.jsx)("code",{children:"s3://prophecy-public-bucket/prophecy-libs"})]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(r.p,{children:["Select File System under ",(0,s.jsx)("strong",{children:"Python Resolution mode"})," and\ninput ",(0,s.jsx)("code",{children:"s3://prophecy-public-bucket/python-prophecy-libs"})]})})]}),(0,s.jsx)("p",{children:(0,s.jsxs)(r.p,{children:["Click ",(0,s.jsx)("strong",{children:"Complete"})," to save your new EMR fabric."]})})]}),(0,s.jsxs)(l.A,{value:"emr-serverless",label:"EMR Serverless",children:[(0,s.jsx)("p",{children:"To create an EMR fabric for your serverless cluster:"}),(0,s.jsxs)("ol",{children:[(0,s.jsx)("li",{children:(0,s.jsxs)(r.p,{children:["Open Prophecy and click ",(0,s.jsx)("strong",{children:"Create Entity"})," from the left\nnavigation menu. Then, click on the fabric tile."]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(r.p,{children:["Name your fabric and click ",(0,s.jsx)("strong",{children:"Continue"}),"."]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(r.p,{children:["Keep the Provider Type as ",(0,s.jsx)("strong",{children:"Spark"}),", and choose"," ","\n",(0,s.jsx)("strong",{children:"EMR"})," as the Provider."]})}),(0,s.jsx)("br",{}),(0,s.jsx)("img",{src:n(96909).A,alt:"EMR Provider",width:"75%"}),(0,s.jsx)("li",{children:(0,s.jsxs)(r.p,{children:["Enter your AWS credentials under ",(0,s.jsx)("strong",{children:"Access Key"})," and"," ","\n",(0,s.jsx)("strong",{children:"Secret Key"}),". Then, enter the region that your EMR\ncluster is running in."]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(r.p,{children:["Click on ",(0,s.jsx)("strong",{children:"Fetch environments"}),"."]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(r.p,{children:["Under ",(0,s.jsx)("strong",{children:"Spark Environment"}),", select the EMR serverless\ncluster that you would like to connect to. From the list of active\nclusters, you can identify your EMR Serverless cluster by finding"," ","\n",(0,s.jsx)("code",{children:"emr-serverless-services"})," within the Livy URL. This will\nautomatically populate some of the following fields."]})}),(0,s.jsx)("br",{}),(0,s.jsx)("img",{src:n(29028).A,alt:"EMR Serverless select",width:"80%"}),(0,s.jsx)("li",{children:(0,s.jsxs)(r.p,{children:["For the ",(0,s.jsx)("strong",{children:"Authentication type"}),", select"," ","\n",(0,s.jsx)("code",{children:"AWS Sig V4"}),". This is the only option that will work for EMR\nServerless."]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(r.p,{children:["Select your ",(0,s.jsx)("strong",{children:"Runtime Role"}),". The role must have enough\npermissions to use the selected Serverless App."]})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.p,{children:"Enter the S3 path that points to the location where you would like your\nlogs and pipeline artifacts to persist."})}),(0,s.jsx)("li",{children:(0,s.jsxs)(r.p,{children:["Add the job size to your environment by clicking on"," ","\n",(0,s.jsx)("strong",{children:"Add Job Size"}),". Configure your job size and click on"," ","\n",(0,s.jsx)("strong",{children:"Add"}),"."]})}),(0,s.jsx)("li",{children:"Note that the Spark and Scala versions are fixed."}),(0,s.jsx)("li",{children:(0,s.jsxs)(r.p,{children:["Select File System under Scala Resolution mode and input"," ","\n",(0,s.jsx)("code",{children:"s3://prophecy-public-bucket/prophecy-libs"})]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(r.p,{children:["Select File System under Python Resolution mode and input"," ","\n",(0,s.jsx)("code",{children:"s3://prophecy-public-bucket/python-prophecy-libs"})]})})]}),(0,s.jsx)("p",{children:(0,s.jsxs)(r.p,{children:["Click ",(0,s.jsx)("strong",{children:"Complete"})," to save your new EMR fabric."]})})]}),(0,s.jsxs)(l.A,{value:"livy",label:"Livy",children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{children:(0,s.jsx)(r.p,{children:"Note: Livy does not work with Python version 3.8 and above."})}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(r.p,{children:"To create a Livy fabric:"})]}),(0,s.jsxs)("ol",{children:[(0,s.jsx)("li",{children:(0,s.jsxs)(r.p,{children:["Open Prophecy and click ",(0,s.jsx)("strong",{children:"Create Entity"})," from the left\nnavigation menu. Then, click on the fabric tile."]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(r.p,{children:["Name your fabric and click ",(0,s.jsx)("strong",{children:"Continue"}),"."]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(r.p,{children:["Keep the Provider Type as ",(0,s.jsx)("strong",{children:"Spark"}),", and choose"," ","\n",(0,s.jsx)("strong",{children:"Livy"})," as the Provider."]})}),(0,s.jsx)("br",{}),(0,s.jsx)("img",{src:n(37799).A,alt:"Livy provider",width:"75%"}),(0,s.jsx)("li",{children:(0,s.jsxs)(r.p,{children:["Paste your Livy URL. You can find your Livy URL under the"," ","\n",(0,s.jsx)("strong",{children:"Applications"})," tab on your EMR cluster page."]})}),(0,s.jsx)("li",{children:"Choose your Authentication type."}),(0,s.jsx)("li",{children:(0,s.jsxs)(r.p,{children:["Click ",(0,s.jsx)("strong",{children:"Test Connection"}),"."]})})]}),(0,s.jsx)("p",{children:(0,s.jsx)(r.p,{children:"Once your connection is tested, you'll have to configure a few more\nsettings:"})}),(0,s.jsxs)("ol",{start:"7",children:[(0,s.jsx)("li",{children:(0,s.jsxs)(r.p,{children:["Fill out the Spark and Scala version based on the values found in your\nEMR console. Refer to"," ","\n",(0,s.jsx)("a",{href:"https://spark.apache.org/docs",children:"Spark documentation"})," to find\nthe Scala version in relation to your Spark version."]})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.p,{children:"For the Prophecy Library configurations, choose the File System\nResolution mode and provide the S3 folder names for dependencies."})}),(0,s.jsx)("br",{}),(0,s.jsx)("img",{src:n(33643).A,alt:"EMR create cluster",width:"75%"})]}),(0,s.jsx)("p",{children:(0,s.jsxs)(r.p,{children:["Click ",(0,s.jsx)("strong",{children:"Complete"})," to save your new Livy fabric."]})})]})]}),"\n",(0,s.jsx)(r.p,{children:"At this point, you can test your fabric. Open a project, connect to a cluster, and try to run a pipeline!"})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},50586:(e,r,n)=>{n.d(r,{A:()=>i});const i=n.p+"assets/images/livy-6d54a4b67a7e5d1203f0106b8c327d44.png"},65537:(e,r,n)=>{n.d(r,{A:()=>k});var i=n(96540),s=n(18215),t=n(65627),o=n(56347),l=n(50372),a=n(30604),c=n(11861),d=n(78749);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:n}=e;return(0,i.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:n,attributes:i,default:s}}=e;return{value:r,label:n,attributes:i,default:s}}))}(n);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:n}=e;const s=(0,o.W6)(),t=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,a.aZ)(t),(0,i.useCallback)((e=>{if(!t)return;const r=new URLSearchParams(s.location.search);r.set(t,e),s.replace({...s.location,search:r.toString()})}),[t,s])]}function j(e){const{defaultValue:r,queryString:n=!1,groupId:s}=e,t=h(e),[o,a]=(0,i.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:r,tabValues:t}))),[c,u]=x({queryString:n,groupId:s}),[j,g]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,t]=(0,d.Dv)(n);return[s,(0,i.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:s}),f=(()=>{const e=c??j;return p({value:e,tabValues:t})?e:null})();(0,l.A)((()=>{f&&a(f)}),[f]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),g(e)}),[u,g,t]),tabValues:t}}var g=n(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(74848);function y(e){let{className:r,block:n,selectedValue:i,selectValue:o,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.a_)(),d=e=>{const r=e.currentTarget,n=a.indexOf(r),s=l[n].value;s!==i&&(c(r),o(s))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;r=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;r=a[n]??a[a.length-1];break}}r?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},r),children:l.map((e=>{let{value:r,label:n,attributes:t}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:i===r?0:-1,"aria-selected":i===r,ref:e=>{a.push(e)},onKeyDown:u,onClick:d,...t,className:(0,s.A)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":i===r}),children:n??r},r)}))})}function b(e){let{lazy:r,children:n,selectedValue:t}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,i.cloneElement)(e,{key:r,hidden:e.props.value!==t})))})}function v(e){const r=j(e);return(0,m.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,m.jsx)(y,{...r,...e}),(0,m.jsx)(b,{...r,...e})]})}function k(e){const r=(0,g.A)();return(0,m.jsx)(v,{...e,children:u(e.children)},String(r))}},79329:(e,r,n)=>{n.d(r,{A:()=>o});n(96540);var i=n(18215);const s={tabItem:"tabItem_Ymn6"};var t=n(74848);function o(e){let{children:r,hidden:n,className:o}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,o),hidden:n,children:r})}},96909:(e,r,n)=>{n.d(r,{A:()=>i});const i=n.p+"assets/images/emr-f-abric-f799ef07acc31566f38c945f82e788e7.png"}}]);