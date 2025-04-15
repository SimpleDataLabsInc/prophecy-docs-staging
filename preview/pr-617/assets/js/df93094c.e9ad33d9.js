"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[38071],{28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var s=i(96540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}},87597:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"analysts/monitoring","title":"Monitoring","description":"View deployed projects, scheduled pipelines, run history, and cost and performance","source":"@site/docs/analysts/monitoring.md","sourceDirName":"analysts","slug":"/analysts/monitoring","permalink":"/prophecy-docs-staging/preview/pr-617/analysts/monitoring","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Monitoring","id":"monitoring","slug":"/analysts/monitoring","description":"View deployed projects, scheduled pipelines, run history, and cost and performance","tags":[]},"sidebar":"mySidebar","previous":{"title":"Scheduling","permalink":"/prophecy-docs-staging/preview/pr-617/analysts/scheduling"},"next":{"title":"Extensibility","permalink":"/prophecy-docs-staging/preview/pr-617/analysts/extensibility"}}');var t=i(74848),r=i(28453);const o={title:"Monitoring",id:"monitoring",slug:"/analysts/monitoring",description:"View deployed projects, scheduled pipelines, run history, and cost and performance",tags:[]},l=void 0,c={},d=[{value:"Deployed Projects",id:"deployed-projects",level:2},{value:"Scheduled Pipelines",id:"scheduled-pipelines",level:2},{value:"Run History",id:"run-history",level:2}];function p(e){const n={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Monitoring"})," page in Prophecy lets you monitor your deployed projects, review scheduled pipelines, and audit run history. You'll be able to view all projects and pipelines that your teams own."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Only projects deployed on Prophecy fabrics will appear in Monitoring."})}),"\n",(0,t.jsx)(n.h2,{id:"deployed-projects",children:"Deployed Projects"}),"\n",(0,t.jsxs)(n.p,{children:["Projects that have been ",(0,t.jsx)(n.a,{href:"/analysts/versioning",children:"published"})," to Prophecy fabrics will appear in the ",(0,t.jsx)(n.strong,{children:"Deployed Projects"})," tab of the page. Each row represents a different project deployment and displays the following information."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Project:"})," Name of the deployed project. To open the project metadata page, click the project name."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Fabric:"})," Fabric associated with the project deployment."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Release Version:"})," Version of the project deployment."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Published:"})," Time since the project was published."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Last run:"})," Time since the project was run."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Result:"})," Success or failure of the last run."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"When a project is published to multiple fabrics, an individual project deployment is created for each fabric. You will see all of these deployments in the Deployed Projects page. You cannot revert or delete a project deployment."})}),"\n",(0,t.jsx)(n.h2,{id:"scheduled-pipelines",children:"Scheduled Pipelines"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Scheduled Pipelines"})," tab shows scheduled pipelines in projects deployed to Prophecy fabrics. For each scheduled pipeline, you can see the following information."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Pipeline:"})," Name of the scheduled pipeline. To open the pipeline in the project editor, click the pipeline name."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Fabric:"})," Fabric associated with the pipeline for this schedule."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Project:"})," Project that contains the pipeline."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Run frequency:"})," Schedule for the pipeline runs."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Last 5 runs:"})," Results of the last five scheduled runs. To find the history of all pipeline runs, open the Run History tab."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"You may see multiple rows for the same pipeline if the parent project is deployed to multiple fabrics."})}),"\n",(0,t.jsx)(n.h2,{id:"run-history",children:"Run History"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Run History"})," tab lets you see a full list of historical pipeline runs from scheduled pipelines."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Fabric:"})," Fabric that was used to execute the pipeline run."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Schedule:"})," Frequency of the pipeline runs."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Pipeline:"})," Name of the pipeline."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Project:"})," Project that contains the pipeline."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Run by:"})," How the run was triggered. This includes by ",(0,t.jsx)(n.strong,{children:"schedules"}),", ",(0,t.jsx)(n.strong,{children:"APIs"}),", ",(0,t.jsx)(n.strong,{children:"Business Apps"}),", or ",(0,t.jsx)(n.strong,{children:"interactive runs"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Duration:"})," How long the computation lasted."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Result:"})," Success or failure of the run."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To narrow your results, you can choose a specific time frame to filter the table."})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}}}]);