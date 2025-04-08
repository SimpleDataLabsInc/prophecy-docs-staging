"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[47931],{11177:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"getting-started/tutorials/sql-with-snowflake","title":"Data modeling for Engineers","description":"Use this tutorial to create a project with data in Snowflake","source":"@site/docs/getting-started/tutorials/sql-with-snowflake.md","sourceDirName":"getting-started/tutorials","slug":"/engineers/data-modeling","permalink":"/prophecy-docs-staging/preview/pr-587/engineers/data-modeling","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"sql","permalink":"/prophecy-docs-staging/preview/pr-587/tags/sql"},{"inline":true,"label":"tutorial","permalink":"/prophecy-docs-staging/preview/pr-587/tags/tutorial"},{"inline":true,"label":"snowflake","permalink":"/prophecy-docs-staging/preview/pr-587/tags/snowflake"},{"inline":true,"label":"airflow","permalink":"/prophecy-docs-staging/preview/pr-587/tags/airflow"}],"version":"current","frontMatter":{"title":"Data modeling for Engineers","id":"sql-with-snowflake","slug":"/engineers/data-modeling","description":"Use this tutorial to create a project with data in Snowflake","tags":["sql","tutorial","snowflake","airflow"]},"sidebar":"mySidebar","previous":{"title":"Project lifecycle for Engineers","permalink":"/prophecy-docs-staging/preview/pr-587/engineers/project-lifecycle"},"next":{"title":"Data Copilot","permalink":"/prophecy-docs-staging/preview/pr-587/data-copilot"}}');var s=t(74848),o=t(28453);const r={title:"Data modeling for Engineers",id:"sql-with-snowflake",slug:"/engineers/data-modeling",description:"Use this tutorial to create a project with data in Snowflake",tags:["sql","tutorial","snowflake","airflow"]},l=void 0,a={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Connect to Snowflake",id:"connect-to-snowflake",level:2},{value:"Gather Snowflake credentials",id:"gather-snowflake-credentials",level:3},{value:"Create a SQL fabric in Prophecy",id:"create-a-sql-fabric-in-prophecy",level:3},{value:"Create a new project",id:"create-a-new-project",level:2},{value:"Start development",id:"start-development",level:2},{value:"Checkout development branch",id:"checkout-development-branch",level:3},{value:"Connect to a fabric",id:"connect-to-a-fabric",level:3},{value:"Define data sources",id:"define-data-sources",level:3},{value:"Create seeds",id:"create-seeds",level:4},{value:"Develop your first model",id:"develop-your-first-model",level:3},{value:"Interactively Test",id:"interactively-test",level:3},{value:"Code view",id:"code-view",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This tutorial will teach you how to use Prophecy for data modeling. You will learn how to connect Prophecy to a SQL warehouse (in this case, Snowflake) and transform your data in the visual canvas."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"This tutorial will not cover pipeline development in SQL projects, which requires Prophecy Automate. It will only cover data transformations that can be executed on a SQL warehouse."})}),"\n",(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsx)(n.p,{children:"For this tutorial, you will need:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A Prophecy account. You can use a 21 day ",(0,s.jsx)(n.a,{href:"https://app.Prophecy.io/metadata/auth/signup",children:"free trial"})," for this tutorial."]}),"\n",(0,s.jsx)(n.li,{children:"A Snowflake account."}),"\n",(0,s.jsx)(n.li,{children:"A GitHub account."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If you want to use a different SQL provider such as Databricks, you can ",(0,s.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-587/administration/fabrics/sql-fabrics/databricks",children:"set up the fabric"})," and still complete the development section of this tutorial."]}),"\n",(0,s.jsx)(n.h2,{id:"connect-to-snowflake",children:"Connect to Snowflake"}),"\n",(0,s.jsx)(n.p,{children:"Let's start by connecting Prophecy and Snowflake."}),"\n",(0,s.jsx)(n.h3,{id:"gather-snowflake-credentials",children:"Gather Snowflake credentials"}),"\n",(0,s.jsx)(n.p,{children:"You'll first have to retrieve the following information from Snowflake to pass to Prophecy."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Open Snowflake."}),"\n",(0,s.jsxs)(n.li,{children:["Write down your SnowflakeURL. It should look like ",(0,s.jsx)(n.code,{children:"https://<org-account>.snowflakecomputing.com"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Note your user's ",(0,s.jsx)(n.strong,{children:"Role"})," in Snowflake.\n",(0,s.jsx)(n.img,{alt:"Role",src:t(65127).A+"",width:"2880",height:"1008"})]}),"\n",(0,s.jsxs)(n.li,{children:["Identify which ",(0,s.jsx)(n.a,{href:"https://docs.snowflake.com/en/user-guide/warehouses",children:"warehouse"})," you want to connect. Make sure the warehouse is started.\n",(0,s.jsx)(n.img,{alt:"Warehouse",src:t(32591).A+"",width:"2880",height:"824"})]}),"\n",(0,s.jsxs)(n.li,{children:["Identify a database and schema that you want Prophecy to access.\n",(0,s.jsx)(n.img,{alt:"DbSchema",src:t(84966).A+"",width:"2880",height:"798"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"create-a-sql-fabric-in-prophecy",children:"Create a SQL fabric in Prophecy"}),"\n",(0,s.jsxs)(n.p,{children:["Since you will only compute models in this tutorial (rather than perform any orchestration), you can create a SQL ",(0,s.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-587/fabrics",children:"fabric"})," to use as your execution environment. Let's use the information you gathered in the previous section to create the fabric."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Click to add a new entity."}),"\n",(0,s.jsx)(n.li,{children:"Create a new fabric."}),"\n",(0,s.jsx)(n.li,{children:"Specify a name, like devSnowflake, for your fabric."}),"\n",(0,s.jsx)(n.li,{children:"Provide a description (optional)."}),"\n",(0,s.jsxs)(n.li,{children:["Select the team that will own this fabric. For this tutorial, you can use your ",(0,s.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-587/administration/teams-users/teams-users",children:"personal team"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Continue to the next step."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"CreateFabric",src:t(75417).A+"",width:"2880",height:"934"})}),"\n",(0,s.jsx)(n.p,{children:"In the Provider tab, complete the following steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Select SQL as the Provider Type."}),"\n",(0,s.jsx)(n.li,{children:"Open the Providers dropdown and select Snowflake."}),"\n",(0,s.jsxs)(n.li,{children:["Add the Snowflake Account URL, which looks like this: ",(0,s.jsx)(n.code,{children:"https://<org>-<account>.snowflakecomputing.com"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Add the username of a Snowflake user that Prophecy will use to connect to the Snowflake Warehouse."}),"\n",(0,s.jsx)(n.li,{children:"Add the password of the same Snowflake user that Prophecy will use to connect to the Snowflake Warehouse. These credentials are encrypted for secure storage."}),"\n",(0,s.jsxs)(n.li,{children:["Add the Snowflake ",(0,s.jsx)(n.a,{href:"https://docs.snowflake.com/en/user-guide/security-access-control-overview#roles",children:"role"})," that Prophecy will use to read data and execute queries on the Snowflake Warehouse. The role must be already granted to the Snowflake user provided above and should be scoped according to the permission set desired for Prophecy."]}),"\n",(0,s.jsx)(n.li,{children:"Specify the Snowflake warehouse for default writes for this execution environment."}),"\n",(0,s.jsx)(n.li,{children:"Specify the Snowflake database for default writes for this execution environment."}),"\n",(0,s.jsx)(n.li,{children:"Specify the Snowflake schema for default writes for this execution environment."}),"\n",(0,s.jsx)(n.li,{children:"Click Continue."}),"\n",(0,s.jsxs)(n.li,{children:["Do not add any connections. Click ",(0,s.jsx)(n.strong,{children:"Complete"})," to save the fabric."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"create-a-new-project",children:"Create a new project"}),"\n",(0,s.jsxs)(n.p,{children:["Next, let's build a new ",(0,s.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-587/projects",children:"project"})," from scratch."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Click the ",(0,s.jsx)(n.strong,{children:"Create Entity"})," button on the sidebar and choose ",(0,s.jsx)(n.strong,{children:"Create"})," on the project tile. The project creation screen will open."]}),"\n",(0,s.jsxs)(n.li,{children:["Fill in the project ",(0,s.jsx)(n.strong,{children:"Name"})," and ",(0,s.jsx)(n.strong,{children:"Description"})," (optional)."]}),"\n",(0,s.jsx)(n.li,{children:"Choose the team that will own the project. For this tutorial, you can use your personal team."}),"\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.strong,{children:"Select Template"})," dropdown, choose ",(0,s.jsx)(n.strong,{children:"Custom"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Change the ",(0,s.jsx)(n.strong,{children:"Project Type"})," to ",(0,s.jsx)(n.strong,{children:"SQL"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Select ",(0,s.jsx)(n.strong,{children:"Snowflake"})," as your SQL provider."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Continue"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Once the basic project information is filled out, it\u2019s time to configure the Git repository on which we\u2019re going to store our project. You will connect an external GitHub account for this tutorial."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Leave the default Git storage model as ",(0,s.jsx)(n.strong,{children:"Normal"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Connect Git"})," to connect to a GitHub account that has not yet been configured."]}),"\n",(0,s.jsx)(n.li,{children:"Choose GitHub as the Git Provider for this project."}),"\n",(0,s.jsx)(n.li,{children:"Create an alias that will let you identify your Git account in Prophecy."}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Login with GitHub"})," to use OAuth for authentication."]}),"\n",(0,s.jsx)(n.li,{children:"Sign in and authorize SimpleDataLabs as a valid organization."}),"\n",(0,s.jsxs)(n.li,{children:["Select ",(0,s.jsx)(n.strong,{children:"Connect"})," to save the Git connection."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Once your GitHub account is set up:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Select a repository where Prophecy will store all the code for this project. The repository must be empty."}),"\n",(0,s.jsx)(n.li,{children:"Keep the automatically populated default branch."}),"\n",(0,s.jsxs)(n.li,{children:["Keep the ",(0,s.jsx)(n.code,{children:"/"})," folder where the project files will be stored."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Complete"})," to save your new project."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"If you have a valid dbt project in a Git repository, you can import it in Prophecy as a project directly."})}),"\n",(0,s.jsx)(n.h2,{id:"start-development",children:"Start development"}),"\n",(0,s.jsxs)(n.p,{children:["Now, you are ready to click ",(0,s.jsx)(n.strong,{children:"Open in Editor"})," and begin developing!"]}),"\n",(0,s.jsx)(n.h3,{id:"checkout-development-branch",children:"Checkout development branch"}),"\n",(0,s.jsx)(n.p,{children:"You cannot make changes directly on the main branch. Therefore, you must start by checking out your own development branch."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Click on ",(0,s.jsx)(n.strong,{children:"Checkout Branch"})," and type ",(0,s.jsx)(n.code,{children:"dev/model-tutorial"})," in the ",(0,s.jsx)(n.strong,{children:"Branch"})," field."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Checkout"}),". The new branch will be displayed in the ",(0,s.jsx)(n.strong,{children:"footer"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Branches are clones from the current branch. In most cases, you will want to branch from the main branch."}),"\n",(0,s.jsx)(n.h3,{id:"connect-to-a-fabric",children:"Connect to a fabric"}),"\n",(0,s.jsx)(n.p,{children:"After branch setup:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Fabric selection should pop-up automatically. If not, you can easily set the fabric by clicking on the ",(0,s.jsx)(n.strong,{children:"Choose cluster"})," dropdown."]}),"\n",(0,s.jsxs)(n.li,{children:["Choose the fabric you just created in the ",(0,s.jsx)(n.strong,{children:"Fabrics"})," list."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Save"})," the settings."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Prophecy will quickly load all the available warehouses, databases, schemas, tables, and other metadata to let you start running your transformations!"}),"\n",(0,s.jsx)(n.h3,{id:"define-data-sources",children:"Define data sources"}),"\n",(0,s.jsx)(n.p,{children:"The first step, before building actual transformation logic, is definition of data sources. There are three primary ways to define data sources in a SQL project:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Seeds"})," let you load small CSV datasets into your warehouse. This is useful for small test datasets or lookup mappings."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Datasets"})," are table pointers with schema information and additional metadata."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Models"})," define tables that can serve as inputs to other models."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"create-seeds",children:"Create seeds"}),"\n",(0,s.jsx)(n.p,{children:"To create a seed:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Click on the ",(0,s.jsx)(n.strong,{children:"Add Seed"})," button."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Name"})," the seed ",(0,s.jsx)(n.code,{children:"nations"}),", which will also be the name of the table created."]}),"\n",(0,s.jsxs)(n.li,{children:["Define the ",(0,s.jsx)(n.strong,{children:"Path"})," of the seed."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"OK"})," to create the seed."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Currently, the seed is still empty. To add values:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Paste the contents of this comma-separated CSV file into the code editor."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"NATIONKEY,NAME,REGIONKEY,COMMENT\n0,ALGERIA,0,Vast Sahara; oil-rich and culture-rich.\n1,ARGENTINA,1,Tango; beef; Patagonia.\n2,BRAZIL,1,Amazon; Carnival; soccer.\n3,CANADA,1,Maple; multicultural; vast wilderness.\n4,EGYPT,4,Ancient pyramids; Nile River.\n5,ETHIOPIA,0,Coffee origin; diverse culture.\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Switch back to the visual editor and ",(0,s.jsx)(n.strong,{children:"Run"})," the seed."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"develop-your-first-model",children:"Develop your first model"}),"\n",(0,s.jsx)(n.p,{children:"A model contains a set of data transformations and represents one table. Each model is stored as a select statement in a SQL file within a project."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Click the ",(0,s.jsx)(n.strong,{children:"plus"})," next to Models to add a model."]}),"\n",(0,s.jsxs)(n.li,{children:["Name the model ",(0,s.jsx)(n.code,{children:"customers_nations"})," and keep the default directory path."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Create"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Open the ",(0,s.jsx)(n.strong,{children:"Environment"})," tab and open the ",(0,s.jsx)(n.strong,{children:"SAMPLE_DATA"})," that Snowflake provides."]}),"\n",(0,s.jsxs)(n.li,{children:["Expand the ",(0,s.jsx)(n.strong,{children:"TPCH"})," folder and click ",(0,s.jsx)(n.strong,{children:"Customer"}),". This adds the customer table as a source in your model."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"We will join our two source datasets."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Open the ",(0,s.jsx)(n.strong,{children:"Join/Split"})," gems and add a ",(0,s.jsx)(n.strong,{children:"Join"})," gem to the model canvas."]}),"\n",(0,s.jsx)(n.li,{children:"Connect the source datasets to the Join input ports."}),"\n",(0,s.jsx)(n.li,{children:"Open the Join gem."}),"\n",(0,s.jsxs)(n.li,{children:["Add the join condition. Join the datasets on ",(0,s.jsx)(n.code,{children:"NATIONKEY"})," and ",(0,s.jsx)(n.code,{children:"C_NATIONKEY"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"In the Expressions tile, add any target columns that you wish to appear in the output table."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"interactively-test",children:"Interactively Test"}),"\n",(0,s.jsxs)(n.p,{children:["Now that our model is fully defined, with all the logic specified, it\u2019s time to make sure it works (and keeps working)! Prophecy makes ",(0,s.jsx)(n.strong,{children:"interactively testing"})," the models incredibly easy."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Click the ",(0,s.jsx)(n.strong,{children:"Play"})," button on any of the gems and the model with all of it\u2019s upstream dependencies will be executed."]}),"\n",(0,s.jsxs)(n.li,{children:["Once the model runs, the ",(0,s.jsx)(n.strong,{children:"Result"})," icon appears."]}),"\n",(0,s.jsxs)(n.li,{children:["Click the Result icon to view a ",(0,s.jsx)(n.strong,{children:"Sample"})," set of records."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Notice Copilot is offering suggested fixes when errors appear. See how ",(0,s.jsx)(n.strong,{children:"Fix with AI"})," works ",(0,s.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-587/data-copilot-ai-capabilities#fix-with-ai",children:"here"}),". Explore suggested fixes in the canvas, inside each transformation gem, or inside gem expressions."]}),"\n",(0,s.jsx)(n.h2,{id:"code-view",children:"Code view"}),"\n",(0,s.jsxs)(n.p,{children:["The visual developers will appreciate the drag-n-drop canvas, but sometimes it's also nice to view the code. Already Prophecy creates highly performant code behind the scenes. Just click the ",(0,s.jsx)(n.strong,{children:"Code View"})," to reveal the SQL queries we've generated using our visual design editor. Each gem is represented by a CTE or subquery. For example, the Join gem ",(0,s.jsx)(n.code,{children:"NATIONS_CUSTOMERS"})," is highlighted in both visual and code views."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"ToggleToCode",src:t(83506).A+"",width:"2880",height:"1958"})}),"\n",(0,s.jsx)(n.p,{children:"You can also edit the code directly! Add a SQL statement in the code view and notice the visual editor displays the updated transformations. For example, if you add a limit statement in the code view, and a new limit gem will appear in the visual view."}),"\n",(0,s.jsx)(n.h2,{id:"whats-next",children:"What's next"}),"\n",(0,s.jsxs)(n.p,{children:["Great work! You've successfully developed and tested a SQL model on a Snowflake warehouse. If you ever encounter any difficulties, don't hesitate to reach out to us (",(0,s.jsx)(n.a,{href:"mailto:Contact.us@Prophecy.io",children:"Contact.us@Prophecy.io"}),") or join our ",(0,s.jsx)(n.a,{href:"https://prophecy-io-support.slack.com/join/shared_invite/zt-moq3xzoj-~5MSJ6WPnZfz7bwsqWi8tQ#/shared-invite/email",children:"Slack community"})," for assistance. We're here to help!"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}},32591:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Snow2.3_Warehouse-b469cce30b07dfc98656eb327135d728.png"},65127:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Snow2.2_Role-837623f259c2e459a933ac703bcb3c1f.png"},75417:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Snow2.5_createFabric-e31d76dce97344979f4486b877feeba3.png"},83506:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Snow4.6_toggleVisualCode-96f137eb74f8a2f175e8cbaee313eec3.png"},84966:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Snow2.4_DBschema-9a46edea9bce49e1698124f5bcbbb10e.png"}}]);