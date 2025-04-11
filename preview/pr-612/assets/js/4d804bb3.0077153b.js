"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[93360],{28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(96540);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}},93660:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"getting-started/tutorials/sql-with-prophecy","title":"Project lifecycle for Analysts","description":"Getting started with a SQL project","source":"@site/docs/getting-started/tutorials/analyst-project-lifecycle.md","sourceDirName":"getting-started/tutorials","slug":"/analysts/project-lifecycle","permalink":"/prophecy-docs-staging/preview/pr-612/analysts/project-lifecycle","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"SQL","permalink":"/prophecy-docs-staging/preview/pr-612/tags/sql"},{"inline":true,"label":"tutorial","permalink":"/prophecy-docs-staging/preview/pr-612/tags/tutorial"}],"version":"current","frontMatter":{"title":"Project lifecycle for Analysts","id":"sql-with-prophecy","slug":"/analysts/project-lifecycle","description":"Getting started with a SQL project","tags":["SQL","tutorial"]},"sidebar":"mySidebar","previous":{"title":"Tutorials","permalink":"/prophecy-docs-staging/preview/pr-612/tutorials"},"next":{"title":"Project lifecycle for Engineers","permalink":"/prophecy-docs-staging/preview/pr-612/engineers/project-lifecycle"}}');var r=t(74848),s=t(28453);const l={title:"Project lifecycle for Analysts",id:"sql-with-prophecy",slug:"/analysts/project-lifecycle",description:"Getting started with a SQL project",tags:["SQL","tutorial"]},o=void 0,a={},c=[{value:"Objectives",id:"objectives",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Create a fabric",id:"create-a-fabric",level:2},{value:"Create a project",id:"create-a-project",level:2},{value:"Build a pipeline",id:"build-a-pipeline",level:2},{value:"Add source data",id:"add-source-data",level:3},{value:"Transform the data",id:"transform-the-data",level:3},{value:"Define the aggregations",id:"define-the-aggregations",level:4},{value:"Generate data previews",id:"generate-data-previews",level:3},{value:"Write the data",id:"write-the-data",level:3},{value:"Schedule pipeline runs",id:"schedule-pipeline-runs",level:2},{value:"Save your work",id:"save-your-work",level:2},{value:"Publish your project",id:"publish-your-project",level:2},{value:"Monitor deployed projects",id:"monitor-deployed-projects",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"To become more familiar with the end-to-end workflow for data analysts in Prophecy, complete this tutorial!"}),"\n",(0,r.jsx)(n.h2,{id:"objectives",children:"Objectives"}),"\n",(0,r.jsx)(n.p,{children:"In this tutorial, you will:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Create a Prophecy fabric and a new SQL project."}),"\n",(0,r.jsx)(n.li,{children:"Develop a pipeline using various data sources and transformations."}),"\n",(0,r.jsx)(n.li,{children:"Create a schedule to run the pipeline on a regular basis."}),"\n",(0,r.jsx)(n.li,{children:"Save and publish the project."}),"\n",(0,r.jsx)(n.li,{children:"Review your deployed projects and pipelines."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsx)(n.p,{children:"For this tutorial, you will need:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Prophecy 4.0 or later."}),"\n",(0,r.jsx)(n.li,{children:"A Databricks or Snowflake SQL warehouse."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"create-a-fabric",children:"Create a fabric"}),"\n",(0,r.jsx)(n.p,{children:"Before you can work on a project, you need to configure where that project will be computed. For this tutorial, you will use a Prophecy fabric to let you run pipelines in Prophecy Automate and your own SQL warehouse."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Open Prophecy."}),"\n",(0,r.jsxs)(n.li,{children:["Click on the ",(0,r.jsx)(n.strong,{children:"Create Entity"})," button in the left navigation bar."]}),"\n",(0,r.jsxs)(n.li,{children:["Select the ",(0,r.jsx)(n.strong,{children:"Fabric"})," tile."]}),"\n",(0,r.jsxs)(n.li,{children:["Give the fabric any name, like ",(0,r.jsx)(n.code,{children:"SQLPipelineTutorial"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Select the team that will be able to use the fabric. For this tutorial, you might want to select your personal team. (It will match your individual user email.)"}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Continue"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Next, you'll configure the ",(0,r.jsx)(n.strong,{children:"Provider"}),"."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Choose ",(0,r.jsx)(n.strong,{children:"Prophecy"})," as the Provider Type. This will enable the use of Prophecy Automate."]}),"\n",(0,r.jsx)(n.li,{children:"Select your SQL provider (either Snowflake or Databricks)."}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Continue"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Connections"})," page, you'll add your SQL warehouse credentials."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"+ Connect SQL Warehouse"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Name the connection."}),"\n",(0,r.jsx)(n.li,{children:"Verify that the connection type matches your SQL provider."}),"\n",(0,r.jsxs)(n.li,{children:["Enter the ",(0,r.jsx)(n.strong,{children:"JDBC URL"}),". It will look something like ",(0,r.jsx)(n.code,{children:"jdbc:databricks://<server-hostname>:443;httpPath=<http-path>[;<setting1>=<value1>;<settingN>=<valueN>]"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Enter the ",(0,r.jsx)(n.strong,{children:"Catalog"})," that will be used for target tables."]}),"\n",(0,r.jsxs)(n.li,{children:["Enter the ",(0,r.jsx)(n.strong,{children:"Schema"})," that will be used for target tables."]}),"\n",(0,r.jsxs)(n.li,{children:["Choose the appropriate ",(0,r.jsx)(n.strong,{children:"Authentication method"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Prophecy will automatically test the connection to validate it."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Save"})," the connection."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"create-a-project",children:"Create a project"}),"\n",(0,r.jsx)(n.p,{children:"Now that you have a fabric, create a new project."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Click on the ",(0,r.jsx)(n.strong,{children:"Create Entity"})," button in the left navigation bar."]}),"\n",(0,r.jsxs)(n.li,{children:["Hover over the ",(0,r.jsx)(n.strong,{children:"Project"})," tile and select ",(0,r.jsx)(n.strong,{children:"Create"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Give your project a name."}),"\n",(0,r.jsx)(n.li,{children:"Select the team that will have access to your project. Again, you might want to use your personal team."}),"\n",(0,r.jsxs)(n.li,{children:["Select the ",(0,r.jsx)(n.strong,{children:"Prophecy for Analysts"})," template."]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Complete"}),". This will open your new project."]}),"\n",(0,r.jsx)(n.li,{children:"You will be prompted to select a fabric to continue. Choose the fabric that you created in the previous section."}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"build-a-pipeline",children:"Build a pipeline"}),"\n",(0,r.jsx)(n.p,{children:"In this step, you'll add your first pipeline to this project!"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Hover ",(0,r.jsx)(n.strong,{children:"Pipelines"})," in the left sidebar."]}),"\n",(0,r.jsxs)(n.li,{children:["Click on the ",(0,r.jsx)(n.strong,{children:"plus"})," sign."]}),"\n",(0,r.jsx)(n.li,{children:"Name your pipeline."}),"\n",(0,r.jsx)(n.li,{children:"Keep the default directory path."}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Create"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"add-source-data",children:"Add source data"}),"\n",(0,r.jsxs)(n.p,{children:["At this point, the pipeline canvas is empty. Let's add some gems! To begin, you'll create a ",(0,r.jsx)(n.a,{href:"/engineers/seed",children:"Seed"})," as the data source."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Open the ",(0,r.jsx)(n.strong,{children:"Source/Target"})," gem category."]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Table"}),". This adds a new Table gem to the canvas."]}),"\n",(0,r.jsxs)(n.li,{children:["Hover over the gem and click ",(0,r.jsx)(n.strong,{children:"Open"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Fill in the gem configuration."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Select ",(0,r.jsx)(n.strong,{children:"+ New Table"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["For the Type and Format, choose ",(0,r.jsx)(n.strong,{children:"Seed"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Name the seed ",(0,r.jsx)(n.code,{children:"web_traffic"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["For the Seed path, choose ",(0,r.jsx)(n.code,{children:"seeds"}),". This is the directory where the seed is saved in the backend."]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Next"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["In the ",(0,r.jsx)(n.strong,{children:"Properties"})," tab, paste the following data provided in CSV format. Then, click ",(0,r.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csv",children:"timestamp,page_url,referrer,device,location,session_duration,bounce_rate\n2024-02-09,/home,linkedin.com,desktop,India,489,1\n2024-01-16,/about,direct,mobile,UK,204,0\n2024-02-27,/blog,twitter.com,desktop,Canada,542,1\n2024-02-12,/blog,direct,desktop,Germany,201,1\n2024-01-06,/products,facebook.com,mobile,USA,529,1\n2024-01-21,/about,facebook.com,desktop,Germany,308,1\n2024-02-11,/about,google.com,mobile,USA,465,1\n2024-02-25,/home,linkedin.com,desktop,USA,152,1\n2024-02-10,/products,linkedin.com,mobile,USA,573,0\n2024-01-25,/contact,direct,desktop,USA,162,0\n2024-02-09,/contact,google.com,mobile,UK,355,1\n2024-01-17,/about,google.com,tablet,Canada,317,0\n2024-02-02,/home,linkedin.com,tablet,USA,79,0\n2024-01-05,/home,direct,desktop,Germany,51,1\n2024-01-08,/home,direct,desktop,USA,451,0\n2024-02-21,/about,facebook.com,desktop,Canada,325,0\n2024-02-17,/home,facebook.com,mobile,India,583,0\n2024-01-10,/contact,linkedin.com,desktop,Germany,565,1\n2024-02-12,/blog,facebook.com,tablet,Canada,70,1\n2024-01-30,/about,facebook.com,mobile,India,174,1\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Finally, you can preview the data in tabular format, then click ",(0,r.jsx)(n.strong,{children:"Save"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"transform-the-data",children:"Transform the data"}),"\n",(0,r.jsxs)(n.p,{children:["Now, you'll configure your first data transformation using the ",(0,r.jsx)(n.a,{href:"/analysts/aggregate",children:"Aggregate"})," gem."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["From the ",(0,r.jsx)(n.strong,{children:"Transform"})," gem category, add a ",(0,r.jsx)(n.strong,{children:"Aggregate"})," gem to your canvas."]}),"\n",(0,r.jsx)(n.li,{children:"Drag the Transform gem near your Table gem to auto-connect them."}),"\n",(0,r.jsx)(n.li,{children:"Open the Transform gem configuration."}),"\n",(0,r.jsxs)(n.li,{children:["In the ",(0,r.jsx)(n.strong,{children:"Group By Columns"})," tile, add the ",(0,r.jsx)(n.strong,{children:"page_url"})," column as an expression."]}),"\n",(0,r.jsxs)(n.li,{children:["In the ",(0,r.jsx)(n.strong,{children:"Expressions"})," tile, add three target columns:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"page_url"}),". This column will contain the original page URL."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"page_url_count"}),". This column will contain the count of records in the table per URL."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"page_average_session"}),". This column will contain the average session time users spent per page."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"define-the-aggregations",children:"Define the aggregations"}),"\n",(0,r.jsx)(n.p,{children:"There are a few ways to define the expression for each target column."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Use the visual expression builder in the ",(0,r.jsx)(n.strong,{children:"Visual"})," view."]}),"\n",(0,r.jsxs)(n.li,{children:["Switch to the ",(0,r.jsx)(n.strong,{children:"Code"})," view and write SQL expressions."]}),"\n",(0,r.jsx)(n.li,{children:"Ask Copilot to write your expression in either view."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The following table shows how to write expressions for this example."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Target Column"}),(0,r.jsx)(n.th,{children:"Expression (Visual)"}),(0,r.jsx)(n.th,{children:"Expression (Code)"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"page_url"}),(0,r.jsxs)(n.td,{children:["Click ",(0,r.jsx)(n.strong,{children:"Column > page_url"}),"."]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"page_url"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"page_url_count"}),(0,r.jsxs)(n.td,{children:["Click ",(0,r.jsx)(n.strong,{children:"Function > count"}),". Then, click ",(0,r.jsx)(n.strong,{children:"Column > page_url"})," inside the visual function."]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"count(page_url)"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"page_avg_session"}),(0,r.jsxs)(n.td,{children:["Click ",(0,r.jsx)(n.strong,{children:"Function > avg"}),". Then, click ",(0,r.jsx)(n.strong,{children:"Column > session_duration"})," inside the visual function."]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"avg(session_duration)"})})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"generate-data-previews",children:"Generate data previews"}),"\n",(0,r.jsxs)(n.p,{children:["At this point, you may be curious to know what your data looks like. Generate ",(0,r.jsx)(n.a,{href:"/analysts/data-explorer",children:"data previews"})," with the following steps:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Click the play button in the bottom right corner of the canvas."}),"\n",(0,r.jsx)(n.li,{children:"As the pipeline runs, preview icons should appear as gem outputs."}),"\n",(0,r.jsx)(n.li,{children:"Click on the Aggregate output to preview the data in the Data Explorer."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"write-the-data",children:"Write the data"}),"\n",(0,r.jsx)(n.p,{children:"The final step in the pipeline captures the output data. Follow these steps to write the data to the SQL warehouse:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["From the ",(0,r.jsx)(n.strong,{children:"Source/Target"})," gem category, add a ",(0,r.jsx)(n.strong,{children:"Table"})," gem to your canvas."]}),"\n",(0,r.jsx)(n.li,{children:"Drag the Table gem near the Aggregate gem\u2019s output to auto-connect them."}),"\n",(0,r.jsx)(n.li,{children:"Open the Table gem configuration."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Unlike the previous step where we configured the table as a seed, we will now set this target as a table."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Select ",(0,r.jsx)(n.strong,{children:"+ New Table"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Set the ",(0,r.jsx)(n.strong,{children:"Type and Format"})," to ",(0,r.jsx)(n.strong,{children:"Table"}),", then click ",(0,r.jsx)(n.strong,{children:"Next"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Choose a location for the table based on your SQL connection. You can select an existing table or create a new one."}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Next"}),", review the table schema, then click ",(0,r.jsx)(n.strong,{children:"Next"})," again."]}),"\n",(0,r.jsxs)(n.li,{children:["In the ",(0,r.jsx)(n.strong,{children:"Write Options"})," tab, set ",(0,r.jsx)(n.strong,{children:"Write Mode"})," to ",(0,r.jsx)(n.strong,{children:"Overwrite"})," to replace the table each time the pipeline runs."]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Next"})," and then ",(0,r.jsx)(n.strong,{children:"Load Data"})," to preview a sample of the target data."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"schedule-pipeline-runs",children:"Schedule pipeline runs"}),"\n",(0,r.jsx)(n.p,{children:"Assume you want to process new web traffic data every day. Create a schedule that runs every morning to integrate and process new data from the previous day."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Expand the ",(0,r.jsx)(n.strong,{children:"Options"})," (ellipses) menu in the project header."]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Schedule"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Fill in the following parameters.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Frequency:"})," Daily"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Repeat at:"})," ",(0,r.jsx)(n.code,{children:"6:00 AM"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Timezone:"})," Keep the default (the timezone of your current location)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Schedule"})," to save the schedule."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Even though schedules are enabled by default, they do not begin to run until the project is published. You don't want to run schedules in production on a draft project! We will save and publish the project in the following sections."}),"\n",(0,r.jsx)(n.h2,{id:"save-your-work",children:"Save your work"}),"\n",(0,r.jsx)(n.p,{children:"You want to periodically save your work in logical stages. To do so:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["In the project header, select ",(0,r.jsx)(n.strong,{children:"Save to Draft"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Give your saved version a description like ",(0,r.jsx)(n.code,{children:"Aggregate daily web traffic data"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Review the ",(0,r.jsx)(n.strong,{children:"Changes since last saved"}),". You will see the new pipeline and tables you created."]}),"\n",(0,r.jsxs)(n.li,{children:["Toggle ",(0,r.jsx)(n.strong,{children:"Show changed files"})," to view the files that will be changed in the backend."]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Now, you will be able to view this version of the pipeline in the project ",(0,r.jsx)(n.a,{href:"/analysts/versioning",children:"version history"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"publish-your-project",children:"Publish your project"}),"\n",(0,r.jsx)(n.p,{children:"Let's publish this version of the project. When you publish a project, it becomes available for external use in scheduling, business applications, and packages."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["In the project header, select ",(0,r.jsx)(n.strong,{children:"Publish"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Review the Copilot-generated description of the project version."}),"\n",(0,r.jsx)(n.li,{children:"Notice that the changes to be published include the initial project creation and your saved draft."}),"\n",(0,r.jsx)(n.li,{children:"Select one or more fabrics to publish the project to. This dictates the fabric(s) that your scheduled pipeline will run on. Prophecy creates a new deployment for each fabric selected."}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Publish"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"As Prophecy publishes your project, a set of logs are generated. Click through each step like fetching fabric info, packaging project, or deploying to fabric to understand the success (or failure) of your project deployment."}),"\n",(0,r.jsx)(n.admonition,{title:"See Also",type:"note",children:(0,r.jsxs)(n.p,{children:["To further your understanding about publication, visit ",(0,r.jsx)(n.a,{href:"/analysts/project-publication",children:"Project publication"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"monitor-deployed-projects",children:"Monitor deployed projects"}),"\n",(0,r.jsx)(n.p,{children:"At this point, you have built a pipeline, scheduled a periodic pipeline run, and published the related project. This means that your schedule has been activated. To view deployed projects and pipeline schedules:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Open the ",(0,r.jsx)(n.strong,{children:"Monitoring"})," page from the left navigation bar."]}),"\n",(0,r.jsxs)(n.li,{children:["Find your deployed project on the ",(0,r.jsx)(n.strong,{children:"Deployed Projects"})," tab."]}),"\n",(0,r.jsxs)(n.li,{children:["Find your pipeline on the ",(0,r.jsx)(n.strong,{children:"Scheduled Pipelines"})," tab."]}),"\n",(0,r.jsxs)(n.li,{children:["Review the record of your pipeline runs across deployed projects in the ",(0,r.jsx)(n.strong,{children:"Run History"})," tab."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"To disable a pipeline schedule, you must do so in the schedule settings AND republish the project."})}),"\n",(0,r.jsx)(n.h2,{id:"whats-next",children:"What's next"}),"\n",(0,r.jsxs)(n.p,{children:["To make pipeline development even easier, add ",(0,r.jsx)(n.a,{href:"/analysts/connections",children:"connections"})," to browse through your different external data sources. To create more complex pipelines, review the list of gems(/analysts/gems) that are available to you and try them out!"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);