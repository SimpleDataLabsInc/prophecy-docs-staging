"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[20712],{28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var r=i(96540);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}},55889:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"getting-started/quick-starts/analysts-qs","title":"Quick start for Analysts","description":"Create a pipeline with Prophecy for Analysts","source":"@site/docs/getting-started/quick-starts/analysts-qs.md","sourceDirName":"getting-started/quick-starts","slug":"/analysts/quick-start","permalink":"/prophecy-docs-staging/preview/pr-600/analysts/quick-start","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"SQL","permalink":"/prophecy-docs-staging/preview/pr-600/tags/sql"},{"inline":true,"label":"quick start","permalink":"/prophecy-docs-staging/preview/pr-600/tags/quick-start"},{"inline":true,"label":"onboarding","permalink":"/prophecy-docs-staging/preview/pr-600/tags/onboarding"}],"version":"current","frontMatter":{"title":"Quick start for Analysts","id":"analysts-qs","slug":"/analysts/quick-start","description":"Create a pipeline with Prophecy for Analysts","tags":["SQL","quick start","onboarding"]},"sidebar":"mySidebar","previous":{"title":"Quick starts","permalink":"/prophecy-docs-staging/preview/pr-600/quick-start"},"next":{"title":"Quick start for Engineers","permalink":"/prophecy-docs-staging/preview/pr-600/engineers/quick-start"}}');var t=i(74848),s=i(28453);const l={title:"Quick start for Analysts",id:"analysts-qs",slug:"/analysts/quick-start",description:"Create a pipeline with Prophecy for Analysts",tags:["SQL","quick start","onboarding"]},a=void 0,o={},c=[{value:"Objectives",id:"objectives",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a project",id:"create-a-project",level:2},{value:"Build a pipeline",id:"build-a-pipeline",level:2},{value:"Add a source",id:"add-a-source",level:3},{value:"Add a reformat transformation",id:"add-a-reformat-transformation",level:3},{value:"Generate data previews",id:"generate-data-previews",level:2},{value:"Save the pipeline",id:"save-the-pipeline",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Follow this 15 minute quick start to learn how to create a pipeline in a ",(0,t.jsx)(n.a,{href:"/templates",children:"Prophecy for Analysts"})," project."]}),"\n",(0,t.jsx)(n.h2,{id:"objectives",children:"Objectives"}),"\n",(0,t.jsx)(n.p,{children:"In this quick start, you will:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create a new project and attach a fabric."}),"\n",(0,t.jsx)(n.li,{children:"Develop a pipeline with a source and a transformation."}),"\n",(0,t.jsx)(n.li,{children:"Run the pipeline interactively."}),"\n",(0,t.jsx)(n.li,{children:"Save your changes."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"To complete this quick start, you need:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Prophecy 4.0 or later."}),"\n",(0,t.jsxs)(n.li,{children:["A configured ",(0,t.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-600/administration/fabrics/prophecy-fabrics/",children:"Prophecy fabric"})," (your execution environment)."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If you need a fabric, you have a few options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Sign up for Prophecy via ",(0,t.jsx)(n.a,{href:"/databricks-partner-connect",children:"Databricks Partner Connect"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Ask a ",(0,t.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-600/administration/teams-users/teams-users",children:"team admin"})," to create a fabric for you that connects to an existing external SQL warehouse."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"create-a-project",children:"Create a project"}),"\n",(0,t.jsx)(n.p,{children:"First, you need to create the project where you will build your pipeline."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Click on the ",(0,t.jsx)(n.strong,{children:"Create Entity"})," button in the left navigation bar."]}),"\n",(0,t.jsxs)(n.li,{children:["Hover over the ",(0,t.jsx)(n.strong,{children:"Project"})," tile and select ",(0,t.jsx)(n.strong,{children:"Create"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Give your project a name."}),"\n",(0,t.jsxs)(n.li,{children:["Under ",(0,t.jsx)(n.strong,{children:"Team"}),", select your personal team. (It will match your individual user email.)"]}),"\n",(0,t.jsxs)(n.li,{children:["Under ",(0,t.jsx)(n.strong,{children:"Select Template"}),", choose ",(0,t.jsx)(n.strong,{children:"Prophecy for Analysts"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Complete"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Prophecy will open the project editor, and you will be prompted to select a fabric."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"From the dropdown, select a fabric."}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You may need to verify your credentials for the external SQL warehouse defined in the fabric."}),"\n",(0,t.jsx)(n.h2,{id:"build-a-pipeline",children:"Build a pipeline"}),"\n",(0,t.jsx)(n.p,{children:"Let's add a pipeline component to the project."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["On the project landing page, click ",(0,t.jsx)(n.strong,{children:"Create Pipeline"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["For the ",(0,t.jsx)(n.strong,{children:"Pipeline Name"}),", enter ",(0,t.jsx)(n.code,{children:"weather"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Leave the default directory path ",(0,t.jsx)(n.code,{children:"pipelines"}),". This is where your compiled pipeline code will be stored in the backend."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Create"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"add-a-source",children:"Add a source"}),"\n",(0,t.jsxs)(n.p,{children:["For this quick start, you'll create a ",(0,t.jsx)(n.a,{href:"/analysts/table",children:"Seed"})," as the data source."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Open the ",(0,t.jsx)(n.strong,{children:"Source/Target"})," gem category."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Table"}),". This adds a new Table gem to the canvas."]}),"\n",(0,t.jsxs)(n.li,{children:["Hover over the gem and click ",(0,t.jsx)(n.strong,{children:"Open"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Fill in the gem configuration."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.strong,{children:"+ New Table"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["For the Type and Format, choose ",(0,t.jsx)(n.strong,{children:"Seed"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Name the seed ",(0,t.jsx)(n.code,{children:"weather_forecast"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["For the Seed path, choose ",(0,t.jsx)(n.code,{children:"seeds"}),". This is the directory where the seed is saved in the backend."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Next"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.strong,{children:"Properties"})," tab, paste the following data provided in CSV format. Then, click ",(0,t.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csv",children:"DatePrediction,TemperatureCelsius,HumidityPercent,WindSpeed,Condition\n2025-03-01,15,65,10,Sunny\n2025-03-02,17,70,12,Cloudy\n2025-03-03,16,68,11,Rainy\n2025-03-04,14,72,9,Sunny\n2025-03-05,18,60,13,Windy\n2025-03-06,19,58,14,Cloudy\n2025-03-07,21,55,16,Rainy\n2025-03-08,20,57,15,Sunny\n2025-03-09,22,50,18,Windy\n2025-03-10,23,48,20,Cloudy\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Finally, you can preview the data in tabular format, then click ",(0,t.jsx)(n.strong,{children:"Save"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"add-a-reformat-transformation",children:"Add a reformat transformation"}),"\n",(0,t.jsxs)(n.p,{children:["Now, you'll configure your first data transformation using the ",(0,t.jsx)(n.a,{href:"/analysts/reformat",children:"Reformat"})," gem."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["From the ",(0,t.jsx)(n.strong,{children:"Prepare"})," gem category, add a ",(0,t.jsx)(n.strong,{children:"Reformat"})," gem to your canvas."]}),"\n",(0,t.jsx)(n.li,{children:"Drag the Reformat gem near your Table gem to auto-connect them."}),"\n",(0,t.jsx)(n.li,{children:"Open the Reformat gem configuration."}),"\n",(0,t.jsxs)(n.li,{children:["Notice that the first input port ",(0,t.jsx)(n.strong,{children:"in0"})," displays your table and its schema."]}),"\n",(0,t.jsxs)(n.li,{children:["Hover over your table name, and click ",(0,t.jsx)(n.strong,{children:"Add 5 columns"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["When you add columns to the ",(0,t.jsx)(n.strong,{children:"Target Columns"})," of a gem, Prophecy includes the columns in the output of the gem. Currently, this configuration would have the gem return ",(0,t.jsx)(n.strong,{children:"the same table that was passed in"}),". Let's apply a few transformations."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Change the ",(0,t.jsx)(n.strong,{children:"WindSpeed"})," target column name to ",(0,t.jsx)(n.code,{children:"WindSpeedKMH"}),". This renames the column."]}),"\n",(0,t.jsxs)(n.li,{children:["Add a new target column called ",(0,t.jsx)(n.code,{children:"TemperatureFahrenheit"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Next to the new target column, click ",(0,t.jsx)(n.strong,{children:"Select Expression"}),". You have a few options here:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Ask AI"})," and write a prompt like: ",(0,t.jsx)(n.code,{children:"Convert the TemperatureCelsius column to Fahrenheit"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Use the ",(0,t.jsx)(n.strong,{children:"Function"})," option to configure the conversion visually."]}),"\n",(0,t.jsxs)(n.li,{children:["Choose ",(0,t.jsx)(n.strong,{children:"Custom Code"})," and type the following expression: ",(0,t.jsx)(n.code,{children:"(TemperatureCelsius * 9 / 5) + 32"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["After configuring the expression, click ",(0,t.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"generate-data-previews",children:"Generate data previews"}),"\n",(0,t.jsxs)(n.p,{children:["At this point, you may be curious to know what your data looks like. Generate ",(0,t.jsx)(n.a,{href:"/analysts/data-explorer",children:"data previews"})," with the following steps:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Click the play button in the bottom right corner of the canvas."}),"\n",(0,t.jsx)(n.li,{children:"As the pipeline runs, preview icons should appear as gem outputs."}),"\n",(0,t.jsx)(n.li,{children:"Click on the Reformat output to preview the data in the Data Explorer."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"save-the-pipeline",children:"Save the pipeline"}),"\n",(0,t.jsx)(n.p,{children:"In a real-world situation, your pipeline would be much more complex. Typically, pipelines require multiple transformation steps and send data to external outputs. For the purposes of this tutorial, we will save the pipeline as-is."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In the project header, select ",(0,t.jsx)(n.strong,{children:"Save to Draft"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Give your saved version a description like ",(0,t.jsx)(n.code,{children:"Reformat weather data"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Review the ",(0,t.jsx)(n.strong,{children:"Changes since last saved"}),". You will see the two components you created: a pipeline and a Seed table."]}),"\n",(0,t.jsxs)(n.li,{children:["Toggle ",(0,t.jsx)(n.strong,{children:"Show changed files"})," to view the files that will be changed in the backend."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Now, you will be able to view this version of the pipeline in the project ",(0,t.jsx)(n.a,{href:"/analysts/versioning",children:"version history"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"whats-next",children:"What's next"}),"\n",(0,t.jsx)(n.p,{children:"Continue your Prophecy learning journey:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Try our ",(0,t.jsx)(n.a,{href:"/analysts/project-lifecycle",children:"end-to-end tutorial"})," on the project lifecycle in Prophecy"]}),"\n",(0,t.jsxs)(n.li,{children:["Discover the different ",(0,t.jsx)(n.a,{href:"/analysts/gems",children:"gems"})," that you can use for data transformation"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-600/getting-help",children:"Reach out to us"})," if you need additional help or guidance"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);