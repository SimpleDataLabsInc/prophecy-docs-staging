"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[16356],{26914:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"Spark/pipelines/pipeline-settings","title":"Pipeline settings","description":"Control how your pipeline runs","source":"@site/docs/Spark/pipelines/pipeline-settings.md","sourceDirName":"Spark/pipelines","slug":"/engineers/pipeline-settings","permalink":"/prophecy-docs-staging/preview/pr-606/engineers/pipeline-settings","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"spark","permalink":"/prophecy-docs-staging/preview/pr-606/tags/spark"},{"inline":true,"label":"pipeline","permalink":"/prophecy-docs-staging/preview/pr-606/tags/pipeline"},{"inline":true,"label":"settings","permalink":"/prophecy-docs-staging/preview/pr-606/tags/settings"}],"version":"current","frontMatter":{"title":"Pipeline settings","id":"pipeline-settings","slug":"/engineers/pipeline-settings","description":"Control how your pipeline runs","tags":["spark","pipeline","settings"]},"sidebar":"mySidebar","previous":{"title":"Secrets in configurations","permalink":"/prophecy-docs-staging/preview/pr-606/engineers/pipeline-configuration-secrets"},"next":{"title":"Datasets","permalink":"/prophecy-docs-staging/preview/pr-606/engineers/dataset"}}');var t=n(74848),r=n(28453);const l={title:"Pipeline settings",id:"pipeline-settings",slug:"/engineers/pipeline-settings",description:"Control how your pipeline runs",tags:["spark","pipeline","settings"]},a=void 0,d={},o=[{value:"Spark",id:"spark",level:2},{value:"Code",id:"code",level:2},{value:"Development",id:"development",level:2},{value:"Job",id:"job",level:2},{value:"Run Settings",id:"run-settings",level:2},{value:"Initialization Code",id:"initialization-code",level:2}];function c(e){const i={a:"a",code:"code",h2:"h2",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Review the various settings available for each pipeline, including Spark settings, code customization, development preferences, job sampling, run settings, and initialization code."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Pipeline settings",src:n(76232).A+"",width:"2620",height:"1508"})}),"\n",(0,t.jsx)(i.h2,{id:"spark",children:"Spark"}),"\n",(0,t.jsx)("div",{className:"fixed-table",children:(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Setting"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Spark version"}),(0,t.jsx)(i.td,{children:"The Spark version associated with the pipeline."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Mode"}),(0,t.jsx)(i.td,{children:"The pipeline's mode (either batch or streaming)."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Spark configuration"}),(0,t.jsxs)(i.td,{children:["Name-value pairs will be set inside the Spark runtime configurations as ",(0,t.jsx)(i.code,{children:"spark.conf.set(name, value)"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Hadoop configuration"}),(0,t.jsxs)(i.td,{children:["Name-value pairs will be set inside the Hadoop configuration as ",(0,t.jsx)(i.code,{children:"spark.sparkContext.hadoopConfiguration.set(name, value)"}),"."]})]})]})]})}),"\n",(0,t.jsx)(i.h2,{id:"code",children:"Code"}),"\n",(0,t.jsx)("div",{className:"fixed-table",children:(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Setting"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Package Name"}),(0,t.jsxs)(i.td,{children:["The name of the package if the project is published to the ",(0,t.jsx)(i.a,{href:"/engineers/package-hub",children:"Package Hub"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Config Package Name"}),(0,t.jsxs)(i.td,{children:["A unique name for the pipeline's configuration package.",(0,t.jsx)("br",{}),"Only pipelines made before Prophecy 3.4.5.0 may need to have a custom config package name."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Custom Application Name"}),(0,t.jsx)(i.td,{children:"The name of the Spark job that appears in the Spark interface."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Allow Configuration Updates (Scala only)"}),(0,t.jsxs)(i.td,{children:["When enabled, you can override configuration values using a script.",(0,t.jsx)("br",{}),"For example, if you add a Script gem to the pipeline, you can write something like ",(0,t.jsx)(i.code,{children:'Config.current_date_var = "2024"'})," to set the value of that variable."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Enable pipeline monitoring"}),(0,t.jsx)(i.td,{children:"The option to turn pipeline monitoring on or off."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Enable jinja based configuration"}),(0,t.jsxs)(i.td,{children:["The option to turn ",(0,t.jsx)("a",{href:"../pipelines/configuration#syntax",children:"jinja-based"})," configuration on or off."]})]})]})]})}),"\n",(0,t.jsx)(i.h2,{id:"development",children:"Development"}),"\n",(0,t.jsx)("div",{className:"fixed-table",children:(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Setting"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Visual Language"}),(0,t.jsxs)(i.td,{children:["The programming language (SQL, Scala, or Python) used for expressions inside of gems. If you change the visual language while developing your pipeline, Prophecy will automatically convert expressions into the chosen language. The ",(0,t.jsx)("a",{href:"../gems/expression-builder",children:"Expression Builder"})," will adapt to the language as well."]})]})})]})}),"\n",(0,t.jsx)(i.h2,{id:"job",children:"Job"}),"\n",(0,t.jsx)("div",{className:"fixed-table",children:(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Setting"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Job Data Sampling"}),(0,t.jsx)(i.td,{children:"A toggle to enable or disable data sampling during job runs."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Job Data Sampling Mode"}),(0,t.jsx)(i.td,{children:"The sampling mode used during job runs."})]})]})]})}),"\n",(0,t.jsx)(i.h2,{id:"run-settings",children:"Run Settings"}),"\n",(0,t.jsx)("div",{className:"fixed-table",children:(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Property"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Limit Input Records"}),(0,t.jsx)(i.td,{children:"When enabled, this limits the number of rows being operated on, makes development time faster, and reduces computation cost. Depending on how your pipeline is constructed, you might run into some issues when limiting records. If the number of records is too small, you might accidentally exclude records that, for example, match a join condition. This would result in an empty output."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Data Sampling"}),(0,t.jsxs)(i.td,{children:["Data sampling is enabled by default so you can view interim data samples while developing your pipeline. Learn about different ",(0,t.jsx)(i.a,{href:"/prophecy-docs-staging/preview/pr-606/engineers/data-sampling",children:"sampling modes"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Configuration"}),(0,t.jsxs)(i.td,{children:["This setting determines which ",(0,t.jsx)("a",{href:"../pipelines/configuration",children:"configuration"})," will be used during a pipeline run."]})]})]})]})}),"\n",(0,t.jsx)(i.h2,{id:"initialization-code",children:"Initialization Code"}),"\n",(0,t.jsx)("div",{className:"fixed-table",children:(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Setting"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"UDF initialization code"}),(0,t.jsx)(i.td,{children:"The code that is run before initializing any UDF method. In this field, you can define variables, add common classes, include common imports, and more."})]})})]})})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>a});var s=n(96540);const t={},r=s.createContext(t);function l(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:i},e.children)}},76232:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/pipeline-settings-dfc98beb25c4f02faae553282172841c.png"}}]);