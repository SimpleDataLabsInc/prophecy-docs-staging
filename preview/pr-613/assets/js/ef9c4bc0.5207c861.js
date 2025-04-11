"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[33413],{22390:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"getting-started/quick-starts/engineers-qs","title":"Quick start for Engineers","description":"Create a Spark pipeline with Prophecy\'s visual interface","source":"@site/docs/getting-started/quick-starts/engineers-qs.md","sourceDirName":"getting-started/quick-starts","slug":"/engineers/quick-start","permalink":"/prophecy-docs-staging/preview/pr-613/engineers/quick-start","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Spark","permalink":"/prophecy-docs-staging/preview/pr-613/tags/spark"},{"inline":true,"label":"quick start","permalink":"/prophecy-docs-staging/preview/pr-613/tags/quick-start"},{"inline":true,"label":"onboarding","permalink":"/prophecy-docs-staging/preview/pr-613/tags/onboarding"}],"version":"current","frontMatter":{"title":"Quick start for Engineers","id":"engineers-qs","slug":"/engineers/quick-start","description":"Create a Spark pipeline with Prophecy\'s visual interface","tags":["Spark","quick start","onboarding"]},"sidebar":"mySidebar","previous":{"title":"Quick start for Analysts","permalink":"/prophecy-docs-staging/preview/pr-613/analysts/quick-start"},"next":{"title":"Databricks Partner Connect","permalink":"/prophecy-docs-staging/preview/pr-613/databricks-partner-connect"}}');var t=i(74848),s=i(28453);const a={title:"Quick start for Engineers",id:"engineers-qs",slug:"/engineers/quick-start",description:"Create a Spark pipeline with Prophecy's visual interface",tags:["Spark","quick start","onboarding"]},o=void 0,l={},c=[{value:"Objectives",id:"objectives",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a project",id:"create-a-project",level:2},{value:"Build a pipeline",id:"build-a-pipeline",level:2},{value:"Add a source",id:"add-a-source",level:3},{value:"Add a reformat transformation",id:"add-a-reformat-transformation",level:3},{value:"Generate data previews",id:"generate-data-previews",level:2},{value:"Save the pipeline",id:"save-the-pipeline",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Follow this 15 minute quick start to learn how to create a Spark pipeline with Prophecy's visual interface."}),"\n",(0,t.jsx)(n.h2,{id:"objectives",children:"Objectives"}),"\n",(0,t.jsx)(n.p,{children:"In this quick start, you will:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create a new project and attach a fabric."}),"\n",(0,t.jsx)(n.li,{children:"Develop a pipeline with a source and a transformation."}),"\n",(0,t.jsx)(n.li,{children:"Run the pipeline interactively."}),"\n",(0,t.jsx)(n.li,{children:"Save your changes."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"To complete this quick start, you need:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A configured ",(0,t.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-613/fabrics",children:"fabric"})," (your execution environment)."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If you need a fabric, you have a few options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a fabric that connects to ",(0,t.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-613/engineers/prophecy-managed-fabric",children:"Prophecy-managed Databricks"}),". Free trial users will automatically have this fabric."]}),"\n",(0,t.jsxs)(n.li,{children:["Ask a ",(0,t.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-613/administration/teams-users/teams-users",children:"team admin"})," to create a fabric for you that connects to an existing external Spark engine."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"create-a-project",children:"Create a project"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Click on the ",(0,t.jsx)(n.strong,{children:"Create Entity"})," button in the left navigation bar."]}),"\n",(0,t.jsxs)(n.li,{children:["Hover over the ",(0,t.jsx)(n.strong,{children:"Project"})," tile and select ",(0,t.jsx)(n.strong,{children:"Create"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Give your project a name."}),"\n",(0,t.jsxs)(n.li,{children:["Under ",(0,t.jsx)(n.strong,{children:"Team"}),", select your personal team. (It will match your individual user email.)"]}),"\n",(0,t.jsxs)(n.li,{children:["Under ",(0,t.jsx)(n.strong,{children:"Select Template"}),", choose ",(0,t.jsx)(n.strong,{children:"Custom"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["For the ",(0,t.jsx)(n.strong,{children:"Project Type"}),", choose ",(0,t.jsx)(n.strong,{children:"Spark/Python (PySpark)"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Continue"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Under ",(0,t.jsx)(n.strong,{children:"Connect Git Account"}),", select ",(0,t.jsx)(n.strong,{children:"Prophecy Managed Git Credentials"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Continue"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Take a brief look at the default project packages, and then click ",(0,t.jsx)(n.strong,{children:"Complete"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Your project is ready! Click ",(0,t.jsx)(n.strong,{children:"Create Pipeline"})," to open your first pipeline configuration."]}),"\n",(0,t.jsx)(n.h2,{id:"build-a-pipeline",children:"Build a pipeline"}),"\n",(0,t.jsx)(n.p,{children:"Let's set up the pipeline."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Ensure the pipeline links to the correct project."}),"\n",(0,t.jsxs)(n.li,{children:["Create a new development branch called ",(0,t.jsx)(n.code,{children:"devQS"}),". Your pipeline will not appear in the ",(0,t.jsx)(n.code,{children:"main"})," branch until you merge your changes."]}),"\n",(0,t.jsxs)(n.li,{children:["Name your pipeline ",(0,t.jsx)(n.code,{children:"weather"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Leave the default ",(0,t.jsx)(n.strong,{children:"Batch"})," processing mode."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Create New"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Prophecy will open the pipeline canvas for your new pipeline in the project editor. Before moving on, you must attach to a Spark cluster."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In the project header, click ",(0,t.jsx)(n.strong,{children:"Attach a cluster"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Choose an appropriate fabric to connect you to the Spark environment."}),"\n",(0,t.jsx)(n.li,{children:"Select an existing cluster, or create a new one. New clusters may take a few minutes to start up."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"If you have trouble attaching a cluster, you might not have the right permissions to access or create a cluster in your external Spark environment."})}),"\n",(0,t.jsx)(n.h3,{id:"add-a-source",children:"Add a source"}),"\n",(0,t.jsxs)(n.p,{children:["For this quick start, you'll create a ",(0,t.jsx)(n.a,{href:"/engineers/seed",children:"Seed"})," as the data source."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Open the ",(0,t.jsx)(n.strong,{children:"Source/Target"})," gem category."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Source"}),". This adds a new Source gem to the canvas."]}),"\n",(0,t.jsxs)(n.li,{children:["Hover over the gem and click ",(0,t.jsx)(n.strong,{children:"Open"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Fill in the gem configuration."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.strong,{children:"+ New Dataset"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Name the dataset ",(0,t.jsx)(n.code,{children:"weather_forecast"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.strong,{children:"Type & Format"})," tab, select the ",(0,t.jsx)(n.strong,{children:"Seed"})," type."]}),"\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.strong,{children:"Data"})," tab, paste the following data provided in CSV format. Then, click ",(0,t.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csv",children:"DatePrediction,TemperatureCelsius,HumidityPercent,WindSpeed,Condition\n2025-03-01,15,65,10,Sunny\n2025-03-02,17,70,12,Cloudy\n2025-03-03,16,68,11,Rainy\n2025-03-04,14,72,9,Sunny\n2025-03-05,18,60,13,Windy\n2025-03-06,19,58,14,Cloudy\n2025-03-07,21,55,16,Rainy\n2025-03-08,20,57,15,Sunny\n2025-03-09,22,50,18,Windy\n2025-03-10,23,48,20,Cloudy\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now, let's make sure the data is properly loaded. Because the copy-pasted data is standard CSV format, the pre-configured properties in the ",(0,t.jsx)(n.strong,{children:"Properties"})," tab are correct. Because of this, Prophecy will know how to infer the schema of the data."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Click the ",(0,t.jsx)(n.strong,{children:"Infer Schema"})," button."]}),"\n",(0,t.jsx)(n.li,{children:"Review the inferred schema. Depending on your Spark engine, you might see different inferred types."}),"\n",(0,t.jsxs)(n.li,{children:["If the ",(0,t.jsx)(n.strong,{children:"DatePrediction"})," column is assigned a ",(0,t.jsx)(n.code,{children:"string"})," type, change the type to ",(0,t.jsx)(n.code,{children:"date"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Enable the ",(0,t.jsx)(n.strong,{children:"Enforce specified or inferred schema"})," checkbox to enforce this change downstream."]}),"\n",(0,t.jsxs)(n.li,{children:["Optional: Click on the ",(0,t.jsx)(n.strong,{children:"Copilot"})," icon to generate metadata descriptions of each column."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Next"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Load Data"})," to preview the data in tabular format."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Create Dataset"})," to save your seed as a dataset."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"add-a-reformat-transformation",children:"Add a reformat transformation"}),"\n",(0,t.jsxs)(n.p,{children:["Now, you'll configure your first data transformation using the ",(0,t.jsx)(n.a,{href:"/engineers/reformat",children:"Reformat"})," gem."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["From the ",(0,t.jsx)(n.strong,{children:"Transform"})," gem category, add a ",(0,t.jsx)(n.strong,{children:"Reformat"})," gem to your canvas."]}),"\n",(0,t.jsx)(n.li,{children:"Drag the Reformat gem near your Table gem to auto-connect them."}),"\n",(0,t.jsx)(n.li,{children:"Open the Reformat gem configuration."}),"\n",(0,t.jsxs)(n.li,{children:["Notice that the first input port ",(0,t.jsx)(n.strong,{children:"in0"})," displays your table and its schema."]}),"\n",(0,t.jsxs)(n.li,{children:["Hover over your table name, and click ",(0,t.jsx)(n.strong,{children:"Add 5 columns"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["When you add columns to the ",(0,t.jsx)(n.strong,{children:"Target Columns"})," of a gem, Prophecy includes the columns in the output of the gem. Currently, this configuration would have the gem return ",(0,t.jsx)(n.strong,{children:"the same table that was passed in"}),". Let's apply a few transformations."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Change the ",(0,t.jsx)(n.strong,{children:"WindSpeed"})," target column name to ",(0,t.jsx)(n.code,{children:"WindSpeedKMH"}),". This renames the column."]}),"\n",(0,t.jsxs)(n.li,{children:["Add a new target column called ",(0,t.jsx)(n.code,{children:"TemperatureFahrenheit"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Next to the new target column, write the expression ",(0,t.jsx)(n.code,{children:"(((TemperatureCelsius * 9.0D) / 5.0D) + 32)"})," to convert the temperature into Fahrenheit. If your column name is descriptive, Copilot will write an expression for you."]}),"\n",(0,t.jsxs)(n.li,{children:["After configuring the expression, click ",(0,t.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"By default, gem expressions expect Spark SQL code."})}),"\n",(0,t.jsx)(n.h2,{id:"generate-data-previews",children:"Generate data previews"}),"\n",(0,t.jsxs)(n.p,{children:["At this point, you may be curious to know what your data looks like. Generate ",(0,t.jsx)(n.a,{href:"/engineers/data-explorer",children:"data previews"})," with the following steps:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Click the play button in the bottom right corner of the canvas."}),"\n",(0,t.jsx)(n.li,{children:"As the pipeline runs, preview icons should appear as gem outputs."}),"\n",(0,t.jsx)(n.li,{children:"Click on the Reformat output to preview the data in the Data Explorer."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"save-the-pipeline",children:"Save the pipeline"}),"\n",(0,t.jsx)(n.p,{children:"In a real-world situation, your pipeline would be much more complex. Typically, pipelines require multiple transformation steps and send data to external outputs. For the purposes of this tutorial, we will save the pipeline as-is."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In the project footer, click ",(0,t.jsx)(n.strong,{children:"Commit Changes"}),". This opens the Git workflow dialog."]}),"\n",(0,t.jsx)(n.li,{children:"Review the commit history on the left side. You should only see the initial project commit at this point."}),"\n",(0,t.jsxs)(n.li,{children:["Review the entities changed in this commit on the right side. You should see the new ",(0,t.jsx)(n.strong,{children:"weather"})," pipeline and ",(0,t.jsx)(n.strong,{children:"weather_forecast"})," dataset."]}),"\n",(0,t.jsx)(n.li,{children:"Verify or update the Copilot-generated commit message that describes these changes."}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Commit"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Now, you'll be able to view this commit in the branch history. Feel free to continue in the Git workflow diagram to merge these changes into the ",(0,t.jsx)(n.code,{children:"main"})," branch."]}),"\n",(0,t.jsx)(n.h2,{id:"whats-next",children:"What's next"}),"\n",(0,t.jsx)(n.p,{children:"Continue your Prophecy learning journey:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Try our ",(0,t.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-613/engineers/project-lifecycle",children:"end-to-end tutorial"})," on the project lifecycle in Prophecy"]}),"\n",(0,t.jsxs)(n.li,{children:["Discover the different ",(0,t.jsx)(n.a,{href:"/engineers/gems",children:"Spark gems"})," that you can use for data transformation"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-613/getting-help",children:"Reach out to us"})," if you need additional help or guidance"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var r=i(96540);const t={},s=r.createContext(t);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);