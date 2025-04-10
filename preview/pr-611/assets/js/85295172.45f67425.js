"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[9036],{28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(96540);const a={},s=t.createContext(a);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:n},e.children)}},95149:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"analysts/development/pipelines/pipeline-params","title":"Pipeline parameters","description":"Add variables to your pipelines","source":"@site/docs/analysts/development/pipelines/pipeline-params.md","sourceDirName":"analysts/development/pipelines","slug":"/analysts/pipeline-parameters","permalink":"/prophecy-docs-staging/preview/pr-611/analysts/pipeline-parameters","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"SQL","permalink":"/prophecy-docs-staging/preview/pr-611/tags/sql"},{"inline":true,"label":"pipeline","permalink":"/prophecy-docs-staging/preview/pr-611/tags/pipeline"},{"inline":true,"label":"analyst","permalink":"/prophecy-docs-staging/preview/pr-611/tags/analyst"}],"version":"current","frontMatter":{"title":"Pipeline parameters","id":"pipeline-params","slug":"/analysts/pipeline-parameters","description":"Add variables to your pipelines","tags":["SQL","pipeline","analyst"]},"sidebar":"mySidebar","previous":{"title":"Pipeline execution","permalink":"/prophecy-docs-staging/preview/pr-611/analysts/pipeline-execution"},"next":{"title":"Gems","permalink":"/prophecy-docs-staging/preview/pr-611/analysts/gems"}}');var a=i(74848),s=i(28453);const r={title:"Pipeline parameters",id:"pipeline-params",slug:"/analysts/pipeline-parameters",description:"Add variables to your pipelines",tags:["SQL","pipeline","analyst"]},l=void 0,p={},o=[{value:"Configure parameters",id:"configure-parameters",level:2},{value:"Example: Dynamic target location",id:"example-dynamic-target-location",level:2},{value:"Best Practices",id:"best-practices",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Configure pipeline parameters to use variables throughout your pipeline. Parameters define values or expressions that can be used to dynamically populate values during pipeline runs. This can be useful when you want to:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Control parameter configurations from business applications."}),"\n",(0,a.jsx)(n.li,{children:"Set different values in the pipeline depending on the execution environment (such as development or production)."}),"\n",(0,a.jsx)(n.li,{children:"Reuse the same values throughout the pipeline, ensuring consistency and maintainability."}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"Pipeline parameters are scoped to individual pipelines. They cannot be used in other pipelines in a project."})}),"\n",(0,a.jsx)(n.h2,{id:"configure-parameters",children:"Configure parameters"}),"\n",(0,a.jsx)(n.p,{children:"To add parameters that you can use in your pipeline:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Open ",(0,a.jsx)(n.strong,{children:"Parameters"})," in the pipeline header."]}),"\n",(0,a.jsxs)(n.li,{children:["Click ",(0,a.jsx)(n.strong,{children:"+ Add Parameter"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"Name the parameter. This is the name you will use when you call the parameter."}),"\n",(0,a.jsx)(n.li,{children:"Define the data type of the parameter."}),"\n",(0,a.jsx)(n.li,{children:"Add a value, function, or custom code that can determine the value of the parameter."}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"When you define parameters, variables will be automatically created in the SQL configuration."})}),"\n",(0,a.jsx)(n.h2,{id:"example-dynamic-target-location",children:"Example: Dynamic target location"}),"\n",(0,a.jsx)(n.p,{children:"When configuring a Target gem, you need to define the location where a new table will be written. Often, this location varies depending on whether the pipeline is running in a development or production environment. You can handle this using pipeline parameters."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Create a pipeline parameter called ",(0,a.jsx)(n.code,{children:"target_location"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Provide a default value that points to your development folder in your file system: ",(0,a.jsx)(n.code,{children:"/dev/data/target_folder/"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Create a ",(0,a.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-611/analysts/business-applications",children:"business application"})," that includes the parameter as a field."]}),"\n",(0,a.jsxs)(n.li,{children:["Assign the parameter in the business application a default value that points to the production folder in your file system: ",(0,a.jsx)(n.code,{children:"/prod/data/target_folder/"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"Schedule the business application to run in your production environment on a regular schedule."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"This ensures that the scheduled pipeline run in production uses the correct target location."}),"\n",(0,a.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,a.jsx)(n.p,{children:"To make the most out of pipeline parameters, we suggest you:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Use meaningful parameter names that indicate their purpose."}),"\n",(0,a.jsx)(n.li,{children:"Validate inputs to prevent unexpected errors during execution."}),"\n",(0,a.jsxs)(n.li,{children:["Keep sensitive values (e.g., API keys) in ",(0,a.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-611/administration/secrets/",children:"secrets"})," rather than passing them as plain parameters."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}}}]);