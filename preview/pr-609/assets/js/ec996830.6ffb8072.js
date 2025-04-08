"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[65210],{12634:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"Spark/gems/subgraph/basic-subgraph","title":"Basic subgraph","description":"Basic Subgraph, Group your Gems in reusable Parent Gems.","source":"@site/docs/Spark/gems/subgraph/basicSubgraph.md","sourceDirName":"Spark/gems/subgraph","slug":"/engineers/basic-subgraph","permalink":"/prophecy-docs-staging/preview/pr-609/engineers/basic-subgraph","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"subgraph","permalink":"/prophecy-docs-staging/preview/pr-609/tags/subgraph"},{"inline":true,"label":"reusable","permalink":"/prophecy-docs-staging/preview/pr-609/tags/reusable"},{"inline":true,"label":"group","permalink":"/prophecy-docs-staging/preview/pr-609/tags/group"}],"version":"current","frontMatter":{"title":"Basic subgraph","id":"basic-subgraph","slug":"/engineers/basic-subgraph","description":"Basic Subgraph, Group your Gems in reusable Parent Gems.","tags":["subgraph","reusable","group"]},"sidebar":"mySidebar","previous":{"title":"Subgraph","permalink":"/prophecy-docs-staging/preview/pr-609/engineers/subgraph"},"next":{"title":"TableIterator","permalink":"/prophecy-docs-staging/preview/pr-609/engineers/table-iterator"}}');var r=a(74848),i=a(28453),t=a(49235);const o={title:"Basic subgraph",id:"basic-subgraph",slug:"/engineers/basic-subgraph",description:"Basic Subgraph, Group your Gems in reusable Parent Gems.",tags:["subgraph","reusable","group"]},p=void 0,c={},l=[{value:"Create a Basic Subgraph",id:"create-a-basic-subgraph",level:2},{value:"Add/Remove Port",id:"addremove-port",level:2},{value:"Subgraph Configurations",id:"subgraph-configurations",level:2},{value:"Pipeline Level Configurations can apply to the Subgraph",id:"pipeline-level-configurations-can-apply-to-the-subgraph",level:3},{value:"Specify configurations only for the Subgraph",id:"specify-configurations-only-for-the-subgraph",level:3}];function h(e){const s={a:"a",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.A,{python_package_name:"",python_package_version:"",scala_package_name:"",scala_package_version:"",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"3.0.1+"}),"\n",(0,r.jsxs)(s.p,{children:["In a ",(0,r.jsx)(s.strong,{children:"Basic Subgraph"}),", you have the capability to encapsulate multiple distinct gems within a single, reusable parent gem. This organizational approach enhances the visual clarity of your pipeline by grouping various sections together under a common parent gem. Additionally, it empowers you to break down intricate logic into modular components, thereby streamlining the Data Engineering processes."]}),"\n",(0,r.jsxs)(s.p,{children:["Furthermore, the ability to ",(0,r.jsx)(s.a,{href:"/engineers/shareable-subgraphs",children:"Publish a Subgraph"})," extends the utility beyond a singular pipeline. By doing so, you can reuse the encapsulated logic in other pipelines or projects, promoting code re-usability and simplifying the overall development workflow."]}),"\n",(0,r.jsx)(s.h2,{id:"create-a-basic-subgraph",children:"Create a Basic Subgraph"}),"\n",(0,r.jsxs)(s.p,{children:["To create a Basic Subgraph, drag and drop the ",(0,r.jsx)(s.strong,{children:"(1) Basic"})," Subgraph gem from the Subgraph menu, and connect it to any previously created gem on your canvas."]}),"\n",(0,r.jsxs)(s.p,{children:["Once you've added the gem, click ",(0,r.jsx)(s.strong,{children:"(2) Open"}),", to open the subgraph canvas."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"create_basic_subgraph",src:a(92624).A+"",width:"2880",height:"1084"})}),"\n",(0,r.jsx)(s.p,{children:"Once you are on the canvas, you can start adding gems to your subgraph by dragging and dropping from the gems menu."}),"\n",(0,r.jsx)(s.h2,{id:"addremove-port",children:"Add/Remove Port"}),"\n",(0,r.jsxs)(s.p,{children:["While using a Subgraph, you can control the Input and Output ports as per the requirements. Click on the ",(0,r.jsx)(s.strong,{children:"(1) Add/Remove Part"})," Button to open the port settings dialog as shown below."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"add_remove_port",src:a(23191).A+"",width:"2880",height:"1084"})}),"\n",(0,r.jsxs)(s.p,{children:["In this dialog, you can add or remove the Input or Output ports.\nTo Add an input Put click on ",(0,r.jsx)(s.strong,{children:"(2) +"})," button. This will add an input Port.\nTo remove an Input port, Click the ",(0,r.jsx)(s.strong,{children:"(3) Delete"})," icon next to the input port you want to delete."]}),"\n",(0,r.jsxs)(s.p,{children:["Similarly, you can control the Output Ports by switching to the ",(0,r.jsx)(s.strong,{children:"(4) Output"})," Tab.\nAs you connect the input and output ports to gems Outside the subgraph, you would be able to see the schema for the port reflected here."]}),"\n",(0,r.jsx)(s.h2,{id:"subgraph-configurations",children:"Subgraph Configurations"}),"\n",(0,r.jsxs)(s.p,{children:["Subgraphs are configurable just like pipelines are ",(0,r.jsx)(s.a,{href:"/engineers/configurations",children:"configurable"}),". For Subgraphs, the configurations can apply in one of two ways: (1) Pipeline level Configurations apply to the Subgraph or (2) Specify Configurations only for the Subgraph"]}),"\n",(0,r.jsx)(s.h3,{id:"pipeline-level-configurations-can-apply-to-the-subgraph",children:"Pipeline Level Configurations can apply to the Subgraph"}),"\n",(0,r.jsxs)(s.p,{children:["Pipeline configs are accessible inside Subgraphs by ",(0,r.jsx)(s.strong,{children:"copying"})," the config to the Subgraph. Checkout the video below to see how this works."]}),"\n",(0,r.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,r.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,r.jsx)("iframe",{src:"https://fast.wistia.net/embed/iframe/56j5k1f6ea?seo=false?videoFoam=true",title:"Getting Started With SQL Video",allow:"autoplay; fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,r.jsx)("script",{src:"https://fast.wistia.net/assets/external/E-v1.js",async:!0}),"\n",(0,r.jsx)(s.h3,{id:"specify-configurations-only-for-the-subgraph",children:"Specify configurations only for the Subgraph"}),"\n",(0,r.jsx)(s.p,{children:"In Subgraph Configs, you can define values that can be set at the Subgraph level and then be accessed inside any component in the Subgraph. These will also reflect under Configurations of pipelines using these Subgraphs, but they can only be edited from Subgraph configs."})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},23191:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/subgraph_additional_ports-38d18d2005477a5dbf6750838ef7f5eb.png"},28453:(e,s,a)=>{a.d(s,{R:()=>t,x:()=>o});var n=a(96540);const r={},i=n.createContext(r);function t(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(i.Provider,{value:s},e.children)}},49235:(e,s,a)=>{a.d(s,{A:()=>r});a(96540);var n=a(74848);function r(e){return(0,n.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,n.jsxs)("span",{className:"badge-dependency",children:[(0,n.jsx)("span",{className:"left",children:e.python_package_name}),(0,n.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,n.jsxs)("span",{className:"badge-dependency",children:[(0,n.jsx)("span",{className:"left",children:e.scala_package_name}),(0,n.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,n.jsxs)("span",{className:"badge-dependency",children:[(0,n.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,n.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,n.jsxs)("span",{className:"badge-dependency",children:[(0,n.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,n.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,n.jsxs)("span",{className:"badge-spark",children:[(0,n.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,n.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,n.jsxs)("span",{className:"badge-spark",children:[(0,n.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,n.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,n.jsxs)("span",{className:"badge-spark",children:[(0,n.jsx)("span",{className:"left",children:"Livy"}),(0,n.jsx)("span",{className:"right",children:e.livy})]})}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]})}},92624:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/Create_basic_subgraph-28591dd35a72ea7fd116107fe2bfccb7.png"}}]);