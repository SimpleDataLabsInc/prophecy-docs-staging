"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[24696],{28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>c});var s=i(96540);const l={},r=s.createContext(l);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(r.Provider,{value:n},e.children)}},47598:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"analysts/scheduling","title":"Scheduling","description":"Schedule pipeline runs","source":"@site/docs/analysts/scheduling.md","sourceDirName":"analysts","slug":"/analysts/scheduling","permalink":"/prophecy-docs-staging/preview/pr-602/analysts/scheduling","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Scheduling","id":"scheduling","slug":"/analysts/scheduling","description":"Schedule pipeline runs","tags":[]},"sidebar":"mySidebar","previous":{"title":"Publication","permalink":"/prophecy-docs-staging/preview/pr-602/analysts/project-publication"},"next":{"title":"Monitoring","permalink":"/prophecy-docs-staging/preview/pr-602/analysts/monitoring"}}');var l=i(74848),r=i(28453);const t={title:"Scheduling",id:"scheduling",slug:"/analysts/scheduling",description:"Schedule pipeline runs",tags:[]},c=void 0,d={},a=[{value:"Parameters",id:"parameters",level:2},{value:"Schedule pipeline",id:"schedule-pipeline",level:2},{value:"Enable a schedule",id:"enable-a-schedule",level:2},{value:"Monitor scheduled pipelines",id:"monitor-scheduled-pipelines",level:2},{value:"External schedulers",id:"external-schedulers",level:2}];function o(e){const n={a:"a",admonition:"admonition",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Prophecy lets you schedule and automate your data pipeline runs. Once you have developed a pipeline, you can run it at specific frequencies using Prophecy's native scheduler."}),"\n",(0,l.jsx)(n.p,{children:"Schedules define when the pipeline will run and whether to send alerts about the pipeline run."}),"\n",(0,l.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsx)(n.p,{children:"The following table describes schedule parameters for a pipeline."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Description"}),(0,l.jsx)(n.th,{children:"Default"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Frequency"}),(0,l.jsx)(n.td,{children:"How often the pipeline will run"}),(0,l.jsx)(n.td,{children:"Daily"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Repeat at"}),(0,l.jsx)(n.td,{children:"When the pipeline run will repeat"}),(0,l.jsx)(n.td,{children:"Varies depending on your chosen frequency"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Timezone"}),(0,l.jsxs)(n.td,{children:["The timezone of ",(0,l.jsx)(n.strong,{children:"Repeat at"})," time"]}),(0,l.jsx)(n.td,{children:"The timezone where you are located"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Alerts on the full job"}),(0,l.jsx)(n.td,{children:"Enable to send an email on the start, success, and/or failure of the pipeline run"}),(0,l.jsx)(n.td,{children:"Disabled"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"schedule-pipeline",children:"Schedule pipeline"}),"\n",(0,l.jsx)(n.p,{children:"To schedule a pipeline to automatically run at a certain frequency:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Open the pipeline to schedule in the project editor."}),"\n",(0,l.jsxs)(n.li,{children:["Expand the ",(0,l.jsx)(n.strong,{children:"Options"})," (ellipses) menu in the project header."]}),"\n",(0,l.jsxs)(n.li,{children:["Click ",(0,l.jsx)(n.strong,{children:"Schedule"}),"."]}),"\n",(0,l.jsx)(n.li,{children:"Fill in the required parameters."}),"\n",(0,l.jsxs)(n.li,{children:["Click ",(0,l.jsx)(n.strong,{children:"Schedule"})," to save the schedule."]}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsx)(n.p,{children:"Schedules are created per pipeline. In other words, scheduled pipeline runs are independently configured."})}),"\n",(0,l.jsx)(n.h2,{id:"enable-a-schedule",children:"Enable a schedule"}),"\n",(0,l.jsxs)(n.p,{children:["A pipeline ",(0,l.jsx)(n.em,{children:"will not execute on a schedule"})," until its parent project is published. This is because project ",(0,l.jsx)(n.a,{href:"/analysts/project-publication",children:"publication"})," determines:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"The execution environment (fabric):"})," The pipeline runs on the fabric selected during publication. If multiple fabrics are chosen, separate schedules are created, and the pipeline will execute once per fabric for each scheduled run."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"The pipeline version:"})," Scheduled executions always run the version of the pipeline associated with the most recent project version published to the fabric. If a new project version is published to a fabric, the schedule for that fabric will automatically use the updated pipeline version."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["If a project is not published or deployed, ",(0,l.jsx)(n.strong,{children:"scheduled execution will not occur"})," even if a schedule has been configured."]}),"\n",(0,l.jsx)(n.h2,{id:"monitor-scheduled-pipelines",children:"Monitor scheduled pipelines"}),"\n",(0,l.jsxs)(n.p,{children:["You and you team members might have many scheduled pipelines in your Prophecy environment. To see a list of deployed projects, scheduled pipelines, and pipeline run history, open the ",(0,l.jsx)(n.a,{href:"/analysts/monitoring",children:"Monitoring"})," page in Prophecy."]}),"\n",(0,l.jsx)(n.h2,{id:"external-schedulers",children:"External schedulers"}),"\n",(0,l.jsxs)(n.p,{children:["By default, SQL projects leverage a Prophecy-native scheduler to automate pipeline runs. While we recommend using the Prophecy scheduler, you can also use external schedulers like Databricks Jobs or Apache Airflow if preferred. To learn more about external schedulers, visit ",(0,l.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-602/engineers/orchestration",children:"Orchestration"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}}}]);