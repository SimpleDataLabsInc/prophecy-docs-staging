"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[97501],{7180:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/loop_configs-e654f1ca4d4227838351199e1fe6d235.png"},28453:(e,a,t)=>{t.d(a,{R:()=>o,x:()=>i});var n=t(96540);const r={},s=n.createContext(r);function o(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:a},e.children)}},30254:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/loop_settings-3a32aca4935e3fb4db5e9e428226444a.png"},33930:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Iterations-965b7bd7ee678a4dcc7d37764a86f606.png"},35012:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Configure_table_iterator-c60445a1e833bcee9de2733f401015b5.png"},36835:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/loop_additional_ports-fd25bddd2573f1df164048664248d380.png"},41550:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Run_loop-008c14dcf9e7453783ca2aab1b6cc081.png"},49235:(e,a,t)=>{t.d(a,{A:()=>r});t(96540);var n=t(74848);function r(e){return(0,n.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,n.jsxs)("span",{className:"badge-dependency",children:[(0,n.jsx)("span",{className:"left",children:e.python_package_name}),(0,n.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,n.jsxs)("span",{className:"badge-dependency",children:[(0,n.jsx)("span",{className:"left",children:e.scala_package_name}),(0,n.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,n.jsxs)("span",{className:"badge-dependency",children:[(0,n.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,n.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,n.jsxs)("span",{className:"badge-dependency",children:[(0,n.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,n.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,n.jsxs)("span",{className:"badge-spark",children:[(0,n.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,n.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,n.jsxs)("span",{className:"badge-spark",children:[(0,n.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,n.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,n.jsxs)("span",{className:"badge-spark",children:[(0,n.jsx)("span",{className:"left",children:"Livy"}),(0,n.jsx)("span",{className:"right",children:e.livy})]})}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]})}},68982:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Create_table_iterator-a3512c5b4d7b155d25e12d6d29c107af.png"},85755:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"Spark/gems/subgraph/table-iterator","title":"TableIterator","description":"Loop over each row of an input Dataframe","source":"@site/docs/Spark/gems/subgraph/tableIterator.md","sourceDirName":"Spark/gems/subgraph","slug":"/engineers/table-iterator","permalink":"/prophecy-docs-staging/preview/pr-607/engineers/table-iterator","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"loop","permalink":"/prophecy-docs-staging/preview/pr-607/tags/loop"},{"inline":true,"label":"table","permalink":"/prophecy-docs-staging/preview/pr-607/tags/table"},{"inline":true,"label":"iterator","permalink":"/prophecy-docs-staging/preview/pr-607/tags/iterator"}],"version":"current","frontMatter":{"title":"TableIterator","id":"table-iterator","slug":"/engineers/table-iterator","description":"Loop over each row of an input Dataframe","tags":["loop","table","iterator"]},"sidebar":"mySidebar","previous":{"title":"Basic subgraph","permalink":"/prophecy-docs-staging/preview/pr-607/engineers/basic-subgraph"},"next":{"title":"WhileIterator","permalink":"/prophecy-docs-staging/preview/pr-607/engineers/while-iterator"}}');var r=t(74848),s=t(28453),o=t(49235);const i={title:"TableIterator",id:"table-iterator",slug:"/engineers/table-iterator",description:"Loop over each row of an input Dataframe",tags:["loop","table","iterator"]},c=void 0,l={},h=[{value:"Creating a TableIterator gem",id:"creating-a-tableiterator-gem",level:2},{value:"Configure the TableIterator",id:"configure-the-tableiterator",level:2},{value:"Running the Loop",id:"running-the-loop",level:2},{value:"Adding Inputs and Outputs to TableIterator",id:"adding-inputs-and-outputs-to-tableiterator",level:2}];function d(e){const a={a:"a",admonition:"admonition",h2:"h2",img:"img",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.A,{python_package_name:"ProphecySparkBasicPython",python_package_version:"0.1.4+",scala_package_name:"",scala_package_version:"",scala_lib:"7.1.66",python_lib:"1.8.4",uc_single:"14.3+",uc_shared:"14.3+",livy:"3.0.1+"}),"\n",(0,r.jsx)(a.p,{children:"TableIterator allows you to iterate over one or more gems for each row of the first input DataFrame.\nLet's see how to create a Basic Loop which loops over a Metadata Table, and for each row of the table will run the gems inside the Subgraph."}),"\n",(0,r.jsx)(a.h2,{id:"creating-a-tableiterator-gem",children:"Creating a TableIterator gem"}),"\n",(0,r.jsxs)(a.p,{children:["First add the Input gem on which you want to Iterate over. For this, simply use an existing dataset or create a new ",(0,r.jsx)(a.a,{href:"/engineers/source-target",children:"Source gem"})," pointing to your Metadata table.\nYou can run this Source gem to see the data your loop would be running for."]}),"\n",(0,r.jsxs)(a.p,{children:["Now, Drag and Drop the ",(0,r.jsx)(a.strong,{children:"(1) TableIterator"})," gem from the Subgraph menu, and connect it to the above created Source gem."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Create_table_iterator",src:t(68982).A+"",width:"2880",height:"1084"})}),"\n",(0,r.jsx)(a.h2,{id:"configure-the-tableiterator",children:"Configure the TableIterator"}),"\n",(0,r.jsxs)(a.p,{children:["Open the TableIterator gem, and click on ",(0,r.jsx)(a.strong,{children:"(1) Configure"})," to open the Settings dialog.\nHere, on the left side panel you can edit the **(2) Name ** of your gem, check the ",(0,r.jsx)(a.strong,{children:"(3) Input Schema"})," for your DataFrame on which the loop will iterate."]}),"\n",(0,r.jsxs)(a.p,{children:["On the right side, you can define your Iterator Settings, and any other Subgraph Configs you want to use in the Subgraph.\nIn the ",(0,r.jsx)(a.strong,{children:"(4) Max Iterations"})," field, you can control the maximum number of Iterations this loop can have. This is to safeguard that nobody runs the loop on a very large DataFrame by mistake. The default value is set to 1000."]}),"\n",(0,r.jsxs)(a.p,{children:["You can also ",(0,r.jsx)(a.strong,{children:"(5) Enable Parallel Execution"}),"."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"configure_loop",src:t(35012).A+"",width:"2880",height:"1084"})}),"\n",(0,r.jsxs)(a.p,{children:["When you check Enable Parallel Execution, you can also control ",(0,r.jsx)(a.strong,{children:"(1) Number of threads"})," to run in parallel as shown below."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"loop_settings",src:t(30254).A+"",width:"2880",height:"1726"})}),"\n",(0,r.jsxs)(a.p,{children:["In the table below that, map the columns from the incoming DataFrame, to the configs of the Subgraph.\nWhen you pick a column name in ",(0,r.jsx)(a.strong,{children:"(2) Source column"}),", a config is automatically created with the same name in ",(0,r.jsx)(a.strong,{children:"(3) Config name"}),". You can see the configs created by switching to the ",(0,r.jsx)(a.strong,{children:"(4) Configuration"})," tab."]}),"\n",(0,r.jsx)(a.p,{children:"This will show all the configurations created for this Subgraph as shown below."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"loop_configs",src:t(7180).A+"",width:"2880",height:"1084"})}),"\n",(0,r.jsxs)(a.p,{children:["You can add default values for any of these by switching to the ",(0,r.jsx)(a.strong,{children:"(1) Config Tab"}),", as shown above. You can also add more configurations in case you want to use in your subgraph."]}),"\n",(0,r.jsx)(a.admonition,{type:"info",children:(0,r.jsx)(a.p,{children:"Note, the configurations associated with a source column will have different values for each iteration based on the input data's current row value for that column.\nThe configs which are not mapped to a source column, will have a fixed value for each Iteration provided in the Config tab."})}),"\n",(0,r.jsxs)(a.p,{children:["Once done, click on ",(0,r.jsx)(a.strong,{children:"(2) Save"}),", to save the Iterator configurations."]}),"\n",(0,r.jsx)(a.p,{children:"Now you can add the gems to your Subgraph on which you want to loop on. To do this simply Drag and Drop any gem onto the Subgraph Canvas.\nYou can add any Source, Target or any other transformation gem and use the configs inside these gems to change the values for each Iteration."}),"\n",(0,r.jsx)(a.h2,{id:"running-the-loop",children:"Running the Loop"}),"\n",(0,r.jsxs)(a.p,{children:["Once you have added the gems to your Subgraph, Click on the ",(0,r.jsx)(a.strong,{children:"(1) Run button"})," to start execution.\nAs the execution starts, you will see a new ",(0,r.jsx)(a.strong,{children:"(2) Iteration"})," button. This will show for which Iteration you are seeing the current interims.\nYou can click on the ",(0,r.jsx)(a.strong,{children:"(3) Interim"})," to check values for that Iteration."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"run_loop",src:t(41550).A+"",width:"2880",height:"1726"})}),"\n",(0,r.jsxs)(a.p,{children:["Click on the ",(0,r.jsx)(a.strong,{children:"(2) Iteration"})," button, and it will open up the Iterations table as shown below. Here you can see all iterations and config values for each of them."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"iterations",src:t(33930).A+"",width:"2880",height:"1726"})}),"\n",(0,r.jsx)(a.h2,{id:"adding-inputs-and-outputs-to-tableiterator",children:"Adding Inputs and Outputs to TableIterator"}),"\n",(0,r.jsxs)(a.p,{children:["For a TableIterator gem, the first input port is for your DataFrame on which you want to Iterate Over.\nYou can ",(0,r.jsx)(a.strong,{children:"(1)Add"})," more Inputs or Switch to ",(0,r.jsx)(a.strong,{children:"(2) Output"})," tab to add more Outputs as needed. These extra inputs would not change for every iteration.\nAlso, the output will be a Union of output of all Iterations. You can ",(0,r.jsx)(a.strong,{children:"(3) Delete"})," any port by hovering over it."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"table_iterator_ports",src:t(36835).A+"",width:"2880",height:"1084"})})]})}function p(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);