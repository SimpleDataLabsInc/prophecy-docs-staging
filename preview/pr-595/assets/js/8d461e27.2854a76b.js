"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[94598],{28453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>c});var t=r(96540);const a={},n=t.createContext(a);function i(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(n.Provider,{value:s},e.children)}},35017:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/synth_5_connect_target-2ac884bc5fe3848c5b19f2c640d0e81a.png"},39755:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"Spark/gems/source-target/file/data-generator","title":"Data Generator","description":"Learn how to create synthetic data","source":"@site/docs/Spark/gems/source-target/file/synthetic-data-generator.md","sourceDirName":"Spark/gems/source-target/file","slug":"/Spark/gems/source-target/file/data-generator","permalink":"/prophecy-docs-staging/preview/pr-595/Spark/gems/source-target/file/data-generator","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"synthetic","permalink":"/prophecy-docs-staging/preview/pr-595/tags/synthetic"},{"inline":true,"label":"random","permalink":"/prophecy-docs-staging/preview/pr-595/tags/random"},{"inline":true,"label":"fake","permalink":"/prophecy-docs-staging/preview/pr-595/tags/fake"},{"inline":true,"label":"data","permalink":"/prophecy-docs-staging/preview/pr-595/tags/data"},{"inline":true,"label":"generator","permalink":"/prophecy-docs-staging/preview/pr-595/tags/generator"}],"version":"current","frontMatter":{"title":"Data Generator","id":"data-generator","description":"Learn how to create synthetic data","tags":["synthetic","random","fake","data","generator"]},"sidebar":"mySidebar","previous":{"title":"CSV","permalink":"/prophecy-docs-staging/preview/pr-595/Spark/gems/source-target/file/csv"},"next":{"title":"Delta","permalink":"/prophecy-docs-staging/preview/pr-595/Spark/gems/source-target/file/delta"}}');var a=r(74848),n=r(28453),i=r(49235);const c={title:"Data Generator",id:"data-generator",description:"Learn how to create synthetic data",tags:["synthetic","random","fake","data","generator"]},d=void 0,o={},l=[{value:"Cluster requirements",id:"cluster-requirements",level:2},{value:"Prophecy requirements",id:"prophecy-requirements",level:2},{value:"Source properties",id:"source-properties",level:2},{value:"Providers",id:"providers",level:3},{value:"Store the data",id:"store-the-data",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.2.32+",scala_package_name:"",scala_package_version:"",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"15.4+",livy:"Not Supported"}),"\n",(0,a.jsx)(s.p,{children:"Synthetic data helps you test, validate, and optimize your pipelines performance before you use production data. This ensures that your pipeline can handle various data formats, structures, and edge cases effectively, which minimizes potential issues in a live environment."}),"\n",(0,a.jsx)(s.p,{children:"You can create a wide range of mock data using any column name and an array of data types. For example, you can generate the following browser history data:"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"img",src:r(77654).A+"",width:"2880",height:"1726"})}),"\n",(0,a.jsx)(s.admonition,{type:"info",children:(0,a.jsxs)(s.p,{children:["The Data Generator gem can only be a ",(0,a.jsx)(s.strong,{children:"Source"})," gem. It cannot be a Target gem."]})}),"\n",(0,a.jsx)(s.h2,{id:"cluster-requirements",children:"Cluster requirements"}),"\n",(0,a.jsxs)(s.p,{children:["Create a fabric and configure the ",(0,a.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-595/administration/fabrics/Spark-fabrics/databricks/",children:"Job Size"}),", or login to an existing Spark cluster UI. To create a fabric and configure the job size in the Spark Cluster UI:"]}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Login to your Databricks account."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Verify your Databricks Runtime uses Python version >= 3.8."}),"\n",(0,a.jsxs)(s.p,{children:["For example, ",(0,a.jsx)(s.a,{href:"https://docs.databricks.com/en/release-notes/runtime/12.2lts.html",children:"Databricks Runtime 12.2 LTS"})," uses Python 3.9.19. If you are using Databricks Runtime 12.2+, the Python version meets this requirement."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"prophecy-requirements",children:"Prophecy requirements"}),"\n",(0,a.jsxs)(s.p,{children:["Open a Prophecy project and upgrade the ",(0,a.jsx)(s.code,{children:"ProphecySparkBasicsPython"})," Dependency to ",(0,a.jsx)(s.code,{children:"0.2.32"})," or later."]}),"\n",(0,a.jsx)(s.admonition,{type:"note",children:(0,a.jsx)(s.p,{children:"Connecting a Prophecy project to a Spark cluster with a different dependency version prompts the Spark cluster to restart."})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"img",src:r(53186).A+"",width:"2880",height:"912"})}),"\n",(0,a.jsxs)(s.admonition,{title:"Caution",type:"caution",children:[(0,a.jsxs)(s.p,{children:["If you use two Prophecy projects with the same Spark cluster, Spark restarts the cluster when each project attaches to the cluster, unless the ",(0,a.jsx)(s.code,{children:"ProphecySparkBasicsPython"})," and ",(0,a.jsx)(s.code,{children:"ProphecyLibsPython"})," versions match across both projects."]}),(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.em,{children:"Solution:"})," Upgrade all your Prophecy projects to the same ",(0,a.jsx)(s.code,{children:"ProphecySparkBasicsPython"})," and ",(0,a.jsx)(s.code,{children:"ProphecyLibsPython"})," versions, or use separate Spark clusters."]})]}),"\n",(0,a.jsx)(s.h2,{id:"source-properties",children:"Source properties"}),"\n",(0,a.jsx)(s.p,{children:"The Source gem requires the following properties."}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Property name"}),(0,a.jsx)(s.th,{children:"Description"}),(0,a.jsx)(s.th,{children:"Default"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Provider"}),(0,a.jsxs)(s.td,{children:["Type of random data to generate. For a list of the possible data providers, see ",(0,a.jsx)(s.a,{href:"#providers",children:"Providers"}),"."]}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"Random Name"})})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Column Name"}),(0,a.jsx)(s.td,{children:"Name for the output column."}),(0,a.jsx)(s.td,{children:"None"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Data Type"}),(0,a.jsx)(s.td,{children:"Data type of the output column."}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"String"})})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Null Percentage (Optional)"}),(0,a.jsx)(s.td,{children:"Percent of values to populate as null in the generated column based on the row count."}),(0,a.jsx)(s.td,{children:"None"})]})]})]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"img",src:r(58974).A+"",width:"2620",height:"1507"})}),"\n",(0,a.jsx)(s.h3,{id:"providers",children:"Providers"}),"\n",(0,a.jsx)(s.p,{children:"Prophecy offers the following data providers."}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Data Provider"}),(0,a.jsx)(s.th,{children:"Description"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Random Name"}),(0,a.jsxs)(s.td,{children:["Generates random names. Select ",(0,a.jsx)(s.code,{children:"Full Name"}),", ",(0,a.jsx)(s.code,{children:"First Name"}),", or ",(0,a.jsx)(s.code,{children:"Last Name"})," as the sub-types."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Random Address"}),(0,a.jsx)(s.td,{children:"Generates random addresses."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Random Email"}),(0,a.jsx)(s.td,{children:"Generates random emails."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Random Phone Number"}),(0,a.jsxs)(s.td,{children:["Generates random phone numbers based on the pattern you specify or the default pattern. ",(0,a.jsx)("br",{}),"For example, you can specify the pattern for a phone number as (###) ###-####."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Random String UUID"}),(0,a.jsx)(s.td,{children:"Generates random UUID values as a string."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Random Boolean Values"}),(0,a.jsx)(s.td,{children:"Generates random boolean values."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Random Integer Numbers"}),(0,a.jsxs)(s.td,{children:["Generates random integers within the range from the ",(0,a.jsx)(s.code,{children:"Start Value"})," to the",(0,a.jsx)(s.code,{children:"End Value"})," you specify."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Random Elements From List"}),(0,a.jsx)(s.td,{children:"Generates random values from the list of values you specify."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Random Date"}),(0,a.jsx)(s.td,{children:"Generates random dates within the range you specify."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Random DateTime"}),(0,a.jsx)(s.td,{children:"Generates random datetime values within the range you specify."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Random Foreign Key Values"}),(0,a.jsxs)(s.td,{children:["Randomly picks values from the foreign key column you specify. ",(0,a.jsx)("br",{}),"Select another table to act as the reference table and provide the location (e.g. ",(0,a.jsx)(s.code,{children:"catalog"})," or ",(0,a.jsx)(s.code,{children:"database"}),"). ",(0,a.jsx)("br",{}),"Select any column from the reference table to designate as the ",(0,a.jsx)(s.code,{children:"Reference Column Name"}),"."]})]})]})]}),"\n",(0,a.jsx)(s.h2,{id:"store-the-data",children:"Store the data"}),"\n",(0,a.jsx)(s.p,{children:"By default, the Source gem does not save the newly generated data. To save the data, store the data in a Target gem:"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Create a Target gem."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"img",src:r(90502).A+"",width:"2880",height:"640"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Connect your Source gem to your Target gem."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"img",src:r(35017).A+"",width:"2880",height:"640"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Configure the ",(0,a.jsx)(s.code,{children:"Write Mode"})," property for the Target gem."]}),"\n",(0,a.jsxs)(s.p,{children:["This is ",(0,a.jsx)(s.strong,{children:"very important"})," because there is a ",(0,a.jsx)(s.strong,{children:"new random seed"})," each time you run the Source gem."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"img",src:r(47467).A+"",width:"2880",height:"794"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.admonition,{type:"info",children:(0,a.jsxs)(s.p,{children:["To see if Prophecy supports this gem in the Unity Catalog Shared Spark Clusters, see ",(0,a.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-595/administration/fabrics/Spark-fabrics/databricks/ucshared",children:"UC Shared Cluster Support"}),"."]})})]})}function p(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},47467:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/synth_6_write_mode-d4b873c8829feb7aa978b249dcc2296b.png"},49235:(e,s,r)=>{r.d(s,{A:()=>a});r(96540);var t=r(74848);function a(e){return(0,t.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/package-hub/",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.python_package_name}),(0,t.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/package-hub/",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.scala_package_name}),(0,t.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,t.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,t.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,t.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,t.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Livy"}),(0,t.jsx)("span",{className:"right",children:e.livy})]})}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]})}},53186:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/synth_0_2_proph_reqiuirements-c45e20cbb84de985a86b3520055b9c1f.png"},58974:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/synth_3_properties-ea373dd8f815df6e612adabee3350329.png"},77654:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/synth_0_datasample-7848d4eecabe3ea3b12e476431b34d71.png"},90502:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/synth_4_new_target-9a024f9eba4fe04462b66e94fc4abd12.png"}}]);