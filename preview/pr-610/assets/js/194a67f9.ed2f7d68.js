"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[52545,53087,59889,65501,72322],{20802:(e,n,s)=>{s.d(n,{h:()=>a});var r=s(96540);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),s=Array(7).fill(-1);n.forEach(((e,n)=>{const r=s.slice(2,e.level);e.parentIndex=Math.max(...r),s[e.level]=n}));const r=[];return n.forEach((e=>{const{parentIndex:s,...i}=e;s>=0?n[s].children.push(i):r.push(i)})),r}function t(e){let{toc:n,minHeadingLevel:s,maxHeadingLevel:r}=e;return n.flatMap((e=>{const n=t({toc:e.children,minHeadingLevel:s,maxHeadingLevel:r});return function(e){return e.level>=s&&e.level<=r}(e)?[{...e,children:n}]:n}))}function a(e){let{toc:n,minHeadingLevel:s,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>t({toc:i(n),minHeadingLevel:s,maxHeadingLevel:a})),[n,s,a])}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var r=s(96540);const i={},t=r.createContext(i);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}},46324:(e,n,s)=>{s.d(n,{A:()=>u});var r=s(96540),i=s(53115),t=s(20802),a=s(81161),l=s(56289),o=s(74848);function c(e){let{toc:n,className:s,linkClassName:r,isChild:i,path:t}=e;return n.length?(0,o.jsx)("ul",{className:i?void 0:s,children:n.map((e=>(0,o.jsxs)("li",{children:[(0,o.jsx)(l.A,{to:`${t}#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,o.jsx)(c,{isChild:!0,toc:e.children,className:s,linkClassName:r,path:t})]},e.id)))}):null}const d=r.memo(c);function h(e){let{toc:n,className:s="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:h,maxHeadingLevel:p,path:u,...g}=e;const f=(0,i.p)(),m=h??f.tableOfContents.minHeadingLevel,x=p??f.tableOfContents.maxHeadingLevel,y=(0,t.h)({toc:n,minHeadingLevel:m,maxHeadingLevel:x}),v=(0,r.useMemo)((()=>{if(l&&c)return{linkClassName:l,linkActiveClassName:c,minHeadingLevel:m,maxHeadingLevel:x}}),[l,c,m,x]);return(0,a.i)(v),(0,o.jsx)(d,{toc:y,className:s,linkClassName:l,path:u,...g})}const p={tableOfContentsInline:"tableOfContentsInline_PqaD"};function u(e){let{item:n,path:s,minHeadingLevel:r=2,maxHeadingLevel:i=6}=e;const t=n.toc??[];return(0,o.jsx)("div",{className:p.tableOfContentsInline,children:(0,o.jsx)(h,{toc:t,minHeadingLevel:r,maxHeadingLevel:i,className:"table-of-contents",linkClassName:null,path:s})})}},48556:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"release_notes/2025/4-0-0","title":"Prophecy 4.0.0.x","description":"Release notes for version 4.0.0","source":"@site/docs/release_notes/2025/4-0-0.md","sourceDirName":"release_notes/2025","slug":"/release_notes/2025/4-0-0","permalink":"/prophecy-docs-staging/preview/pr-610/release_notes/2025/4-0-0","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"release notes","permalink":"/prophecy-docs-staging/preview/pr-610/tags/release-notes"},{"inline":true,"label":"changelog","permalink":"/prophecy-docs-staging/preview/pr-610/tags/changelog"}],"version":"current","frontMatter":{"id":"4-0-0","description":"Release notes for version 4.0.0","title":"Prophecy 4.0.0.x","tags":["release notes","changelog"]},"sidebar":"mySidebar","previous":{"title":"2025","permalink":"/prophecy-docs-staging/preview/pr-610/release_notes/2025/"},"next":{"title":"Prophecy 3.4.5.x","permalink":"/prophecy-docs-staging/preview/pr-610/release_notes/2025/3-4-5"}}');var i=s(74848),t=s(28453);const a={id:"4-0-0",description:"Release notes for version 4.0.0",title:"Prophecy 4.0.0.x",tags:["release notes","changelog"]},l=void 0,o={},c=[{value:"Features",id:"features",level:2},{value:"Prophecy for Analysts",id:"prophecy-for-analysts",level:3},{value:"Prophecy for Engineers",id:"prophecy-for-engineers",level:3},{value:"Updates",id:"updates",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"April 15, 2025"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Prophecy Python libs version: TBD"}),"\n",(0,i.jsx)(n.li,{children:"Prophecy Scala libs version: TBD"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,i.jsx)(n.h3,{id:"prophecy-for-analysts",children:"Prophecy for Analysts"}),"\n",(0,i.jsxs)(n.p,{children:["This major release introduces ",(0,i.jsx)(n.strong,{children:"Prophecy for Analysts"}),", a set of completely new capabilities in the platform tailored for business users. The following features are only available for projects that leverage ",(0,i.jsx)(n.a,{href:"/administration/fabrics/prophecy-fabrics/",children:"Prophecy fabrics"}),". In this release, we introduce:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/administration/fabrics/prophecy-fabrics/",children:"Prophecy fabrics"})," that accommodate native orchestration with ",(0,i.jsx)(n.a,{href:"/administration/architecture",children:"Prophecy Automate"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/analysts/connections",children:"Connections"})," to a wide variety of data providers that can be used throughout pipelines and shared with teammates."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/analysts/business-applications",children:"Business applications"})," that enable non-technical users to run pipelines with built-in guardrails."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/analysts/gems",children:"A new set of gems"})," that allow you to ingest, transform, parse, clean, and write data in the visual pipeline canvas."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/analysts/versioning",children:"Simplified versioning"})," to streamline your project workflow, while still following Git best practices."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/analysts/monitoring",children:"Monitoring"})," in the Observability page for tracking deployed projects and pipeline schedules."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/analysts/data-explorer",children:"Data profiling"})," in the Data Explorer for quick statistics on your data."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/analysts/collaboration",children:"Collaboration capabilities"})," to bridge the gap between teams and speed up time to production."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/analysts/extensibility",children:"Extensibility features"})," that let you build custom components for projects and add additional functionality to Prophecy."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"prophecy-for-engineers",children:"Prophecy for Engineers"}),"\n",(0,i.jsx)(n.p,{children:"For this release, we have developed the following new features for Spark projects:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/engineers/data-profile",children:"Data profiling"})," in the Data Explorer for quick statistics on your data."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/engineers/data-diff",children:"Data diff"})," lets you see if your target data at the end of your pipeline matches your expectations."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"updates",children:"Updates"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["More gems in Python/PySpark projects are now compatible with ",(0,i.jsx)(n.a,{href:"/administration/fabrics/Spark-fabrics/databricks/ucshared",children:"Databricks UC clusters"})," configured with standard (formerly shared) access mode."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Run the ",(0,i.jsx)(n.a,{href:"/engineers/csv",children:"CSV Source gem"})," on a UC standard cluster by reading the file with Pandas as of ",(0,i.jsx)(n.code,{children:"ProphecySparkBasicsPython==0.2.44"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Run the ",(0,i.jsx)(n.a,{href:"/engineers/bigquery",children:"BigQuery Source gem"})," on a UC standard cluster when you upgrade to ",(0,i.jsx)(n.code,{children:"ProphecyWarehousePython==0.0.9"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Run the EmailData gem on a UC standard cluster when you upgrade to ",(0,i.jsx)(n.code,{children:"ProphecyWebAppPython==0.1.2"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Run the ",(0,i.jsx)(n.a,{href:"/engineers/seed",children:"Seed Source gem"})," on a UC standard cluster when you upgrade to ",(0,i.jsx)(n.code,{children:"ProphecySparkBasicsPython==0.2.39"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/engineers/csv",children:"CSV Source gem"})," in Python/PySpark projects now includes a property that lets you skip ",(0,i.jsx)(n.em,{children:"n"})," number of first or last lines when reading in a CSV file."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},71649:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"release_notes/2025/3-4-5","title":"Prophecy 3.4.5.x","description":"Release notes for version 3.4.5","source":"@site/docs/release_notes/2025/3-4-5.md","sourceDirName":"release_notes/2025","slug":"/release_notes/2025/3-4-5","permalink":"/prophecy-docs-staging/preview/pr-610/release_notes/2025/3-4-5","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"release notes","permalink":"/prophecy-docs-staging/preview/pr-610/tags/release-notes"},{"inline":true,"label":"changelog","permalink":"/prophecy-docs-staging/preview/pr-610/tags/changelog"},{"inline":true,"label":"january","permalink":"/prophecy-docs-staging/preview/pr-610/tags/january"}],"version":"current","frontMatter":{"id":"3-4-5","description":"Release notes for version 3.4.5","title":"Prophecy 3.4.5.x","tags":["release notes","changelog","january"]},"sidebar":"mySidebar","previous":{"title":"Prophecy 4.0.0.x","permalink":"/prophecy-docs-staging/preview/pr-610/release_notes/2025/4-0-0"},"next":{"title":"Prophecy 3.4.4.x","permalink":"/prophecy-docs-staging/preview/pr-610/release_notes/2025/3-4-4"}}');var i=s(74848),t=s(28453);const a={id:"3-4-5",description:"Release notes for version 3.4.5",title:"Prophecy 3.4.5.x",tags:["release notes","changelog","january"]},l=void 0,o={},c=[{value:"Features",id:"features",level:2},{value:"Enhanced Data Explorer experience",id:"enhanced-data-explorer-experience",level:3},{value:"Updates",id:"updates",level:2},{value:"Snowflake for Prophecy-managed Airflow",id:"snowflake-for-prophecy-managed-airflow",level:3},{value:"Data sampling settings restriction",id:"data-sampling-settings-restriction",level:3},{value:"Fixes",id:"fixes",level:2},{value:"Single user clusters used by a Databricks group",id:"single-user-clusters-used-by-a-databricks-group",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"March 4, 2025"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Prophecy Python libs version: 1.9.36"}),"\n",(0,i.jsx)(n.li,{children:"Prophecy Scala libs version: 8.8.2"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,i.jsx)(n.h3,{id:"enhanced-data-explorer-experience",children:"Enhanced Data Explorer experience"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/engineers/data-explorer",children:"Data Explorer"})," has been enhanced in the following ways:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Filter and sort happen in the frontend. It no longer requires execution in the backend."}),"\n",(0,i.jsxs)(n.li,{children:["You can search your data using the new ",(0,i.jsx)(n.strong,{children:"Search"})," function."]}),"\n",(0,i.jsxs)(n.li,{children:["You can load larger data samples at a time using the new ",(0,i.jsx)(n.strong,{children:"Selective"})," data sampling setting."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"updates",children:"Updates"}),"\n",(0,i.jsx)(n.h3,{id:"snowflake-for-prophecy-managed-airflow",children:"Snowflake for Prophecy-managed Airflow"}),"\n",(0,i.jsx)(n.p,{children:"We now support Snowflake as a connection on our Prophecy-managed Airflow fabric."}),"\n",(0,i.jsx)(n.h3,{id:"data-sampling-settings-restriction",children:"Data sampling settings restriction"}),"\n",(0,i.jsxs)(n.p,{children:["To change role restrictions for fabric-level ",(0,i.jsx)(n.a,{href:"/engineers/execution",children:"data sampling settings"}),", we have introduced two new flags that you can enable on your Prophecy deployment."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ALLOW_FABRIC_ACCESS_CLUSTER_ADMIN"}),": Grants cluster admins full access to fabrics, even if they are not team admins."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DISALLOW_FABRIC_CODEDEPS_UPDATE_TEAM_ADMIN"}),": Prevents team admins from modifying the data sampling settings within a fabric."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"fixes",children:"Fixes"}),"\n",(0,i.jsx)(n.h3,{id:"single-user-clusters-used-by-a-databricks-group",children:"Single user clusters used by a Databricks group"}),"\n",(0,i.jsx)(n.p,{children:"Users in Databricks groups assigned to single user clusters will have the permission to attach to the cluster in Prophecy without any further action."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},71711:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"release_notes/2025/2025","title":"Release notes 2025","description":"Features and fixes","source":"@site/docs/release_notes/2025/2025.md","sourceDirName":"release_notes/2025","slug":"/release_notes/2025/","permalink":"/prophecy-docs-staging/preview/pr-610/release_notes/2025/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"release notes","permalink":"/prophecy-docs-staging/preview/pr-610/tags/release-notes"},{"inline":true,"label":"changelog","permalink":"/prophecy-docs-staging/preview/pr-610/tags/changelog"}],"version":"current","frontMatter":{"id":"2025","description":"Features and fixes","title":"Release notes 2025","sidebar_label":"2025","tags":["release notes","changelog"]},"sidebar":"mySidebar","previous":{"title":"Release notes","permalink":"/prophecy-docs-staging/preview/pr-610/release_notes/"},"next":{"title":"Prophecy 4.0.0.x","permalink":"/prophecy-docs-staging/preview/pr-610/release_notes/2025/4-0-0"}}');var i=s(74848),t=s(28453),a=s(46324);const l={id:2025,description:"Features and fixes",title:"Release notes 2025",sidebar_label:2025,tags:["release notes","changelog"]},o=void 0,c={},d=[{value:"Prophecy 4.0.0.x",id:"prophecy-400x",level:2},{value:"Prophecy 3.4.5.x",id:"prophecy-345x",level:2},{value:"Prophecy 3.4.4.x",id:"prophecy-344x",level:2},{value:"Prophecy 3.4.3.x",id:"prophecy-343x",level:2}];function h(e){const n={h2:"h2",p:"p",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"prophecy-400x",children:"Prophecy 4.0.0.x"}),"\n",(0,i.jsx)(n.p,{children:"March 4, 2025"}),"\n",(0,i.jsx)(a.A,{item:s(48556),path:"/release_notes/2025/4-0-0"}),"\n",(0,i.jsx)(n.h2,{id:"prophecy-345x",children:"Prophecy 3.4.5.x"}),"\n",(0,i.jsx)(n.p,{children:"March 4, 2025"}),"\n",(0,i.jsx)(a.A,{item:s(71649),path:"/release_notes/2025/3-4-5"}),"\n",(0,i.jsx)(n.h2,{id:"prophecy-344x",children:"Prophecy 3.4.4.x"}),"\n",(0,i.jsx)(n.p,{children:"January 31, 2025"}),"\n",(0,i.jsx)(a.A,{item:s(83533),path:"/release_notes/2025/3-4-4"}),"\n",(0,i.jsx)(n.h2,{id:"prophecy-343x",children:"Prophecy 3.4.3.x"}),"\n",(0,i.jsx)(n.p,{children:"January 8, 2025"}),"\n",(0,i.jsx)(a.A,{item:s(86632),path:"/release_notes/2025/3-4-3"})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},81161:(e,n,s)=>{s.d(n,{i:()=>o});var r=s(96540),i=s(53115);function t(e){const n=e.getBoundingClientRect();return n.top===n.bottom?t(e.parentNode):n}function a(e,n){let{anchorTopOffset:s}=n;const r=e.find((e=>t(e).top>=s));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(t(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function l(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.p)();return(0,r.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function o(e){const n=(0,r.useRef)(void 0),s=l();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:i,minHeadingLevel:t,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),o=function(e){let{minHeadingLevel:n,maxHeadingLevel:s}=e;const r=[];for(let i=n;i<=s;i+=1)r.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:t,maxHeadingLevel:l}),c=a(o,{anchorTopOffset:s.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,s){s?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,s])}},83533:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"release_notes/2025/3-4-4","title":"Prophecy 3.4.4.x","description":"Release notes for version 3.4.4","source":"@site/docs/release_notes/2025/3-4-4.md","sourceDirName":"release_notes/2025","slug":"/release_notes/2025/3-4-4","permalink":"/prophecy-docs-staging/preview/pr-610/release_notes/2025/3-4-4","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"release notes","permalink":"/prophecy-docs-staging/preview/pr-610/tags/release-notes"},{"inline":true,"label":"changelog","permalink":"/prophecy-docs-staging/preview/pr-610/tags/changelog"},{"inline":true,"label":"january","permalink":"/prophecy-docs-staging/preview/pr-610/tags/january"}],"version":"current","frontMatter":{"id":"3-4-4","description":"Release notes for version 3.4.4","title":"Prophecy 3.4.4.x","tags":["release notes","changelog","january"]},"sidebar":"mySidebar","previous":{"title":"Prophecy 3.4.5.x","permalink":"/prophecy-docs-staging/preview/pr-610/release_notes/2025/3-4-5"},"next":{"title":"Prophecy 3.4.3.x","permalink":"/prophecy-docs-staging/preview/pr-610/release_notes/2025/3-4-3"}}');var i=s(74848),t=s(28453);const a={id:"3-4-4",description:"Release notes for version 3.4.4",title:"Prophecy 3.4.4.x",tags:["release notes","changelog","january"]},l=void 0,o={},c=[{value:"Features",id:"features",level:2},{value:"Expanded business rules capabilities",id:"expanded-business-rules-capabilities",level:3},{value:"Updates",id:"updates",level:2},{value:"New custom gem function",id:"new-custom-gem-function",level:3},{value:"Advanced mode for SQL target model",id:"advanced-mode-for-sql-target-model",level:3},{value:"Use multiple unique keys",id:"use-multiple-unique-keys",level:3},{value:"Multi-tenancy support for Hashicorp Vault",id:"multi-tenancy-support-for-hashicorp-vault",level:3},{value:"Customer-managed encryption keys (CMEK) for BigQuery",id:"customer-managed-encryption-keys-cmek-for-bigquery",level:3},{value:"Fixes",id:"fixes",level:2},{value:"Improved performance on UC shared clusters",id:"improved-performance-on-uc-shared-clusters",level:3},{value:"Allow use of tables with quotes",id:"allow-use-of-tables-with-quotes",level:3},{value:"Better error detection in Gem Builder",id:"better-error-detection-in-gem-builder",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"January 31, 2025"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Prophecy Python libs version: 1.9.33"}),"\n",(0,i.jsx)(n.li,{children:"Prophecy Scala libs version: 8.8.0"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,i.jsx)(n.h3,{id:"expanded-business-rules-capabilities",children:"Expanded business rules capabilities"}),"\n",(0,i.jsxs)(n.p,{children:["The new ",(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-610/engineers/business-rules",children:"business rule"})," capabilities include:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Setting a timeframe in which business rules should apply."}),"\n",(0,i.jsx)(n.li,{children:"Automatic detection of conflicting rule logic."}),"\n",(0,i.jsx)(n.li,{children:"Defining multiple output columns per business rule."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"updates",children:"Updates"}),"\n",(0,i.jsx)(n.h3,{id:"new-custom-gem-function",children:"New custom gem function"}),"\n",(0,i.jsxs)(n.p,{children:["When you are ",(0,i.jsx)(n.a,{href:"/engineers/gem-builder-reference",children:"building a custom Spark gem"}),", you can include the ",(0,i.jsx)(n.code,{children:"customOutputSchemaEnabled"})," function in your gem code to enable or disable to ",(0,i.jsx)(n.strong,{children:"Custom Schema"})," toggle by default. This toggle can be found in the ",(0,i.jsx)(n.strong,{children:"Output"})," tab of a gem."]}),"\n",(0,i.jsx)(n.h3,{id:"advanced-mode-for-sql-target-model",children:"Advanced mode for SQL target model"}),"\n",(0,i.jsxs)(n.p,{children:["When you want to ",(0,i.jsx)(n.a,{href:"/engineers/location-target-model",children:"overwrite the default database"})," for your target model, you can now use ",(0,i.jsx)(n.strong,{children:"advanced mode"})," to dynamically populate the field. Rather than inputting a simple string, you can now use functions, values, and variables in your database definition."]}),"\n",(0,i.jsx)(n.h3,{id:"use-multiple-unique-keys",children:"Use multiple unique keys"}),"\n",(0,i.jsxs)(n.p,{children:["Previously when writing a SQL model using an ",(0,i.jsx)(n.a,{href:"/engineers/write-options-target-model",children:"SCD 2 merge approach"}),", you could only define one unique key. This update lets you define one or more unique keys."]}),"\n",(0,i.jsx)(n.h3,{id:"multi-tenancy-support-for-hashicorp-vault",children:"Multi-tenancy support for Hashicorp Vault"}),"\n",(0,i.jsxs)(n.p,{children:["When you set up Hashicorp Vault as a secret provider, a new optional ",(0,i.jsx)(n.strong,{children:"Namespace"})," field lets you specify the isolated environment in your Vault."]}),"\n",(0,i.jsx)(n.h3,{id:"customer-managed-encryption-keys-cmek-for-bigquery",children:"Customer-managed encryption keys (CMEK) for BigQuery"}),"\n",(0,i.jsx)(n.p,{children:"BigQuery SQL fabrics now include a field that lets you include your CMEK. This way, you can access datasets protected by CMEK in Prophecy."}),"\n",(0,i.jsx)(n.h2,{id:"fixes",children:"Fixes"}),"\n",(0,i.jsx)(n.h3,{id:"improved-performance-on-uc-shared-clusters",children:"Improved performance on UC shared clusters"}),"\n",(0,i.jsx)(n.p,{children:"We have removed some redundancy and have fixed how partial runs execute on Databricks UC shared clusters."}),"\n",(0,i.jsx)(n.h3,{id:"allow-use-of-tables-with-quotes",children:"Allow use of tables with quotes"}),"\n",(0,i.jsx)(n.p,{children:"This fix lets you use Snowflake tables that include quotation marks in the table name."}),"\n",(0,i.jsx)(n.h3,{id:"better-error-detection-in-gem-builder",children:"Better error detection in Gem Builder"}),"\n",(0,i.jsx)(n.p,{children:"Errors captured from sandbox are now displayed with a stacktrace showing the lines in your code which caused an exception to be thrown."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},86632:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"release_notes/2025/3-4-3","title":"Prophecy 3.4.3.x","description":"Release notes for version 3.4.3","source":"@site/docs/release_notes/2025/3-4-3.md","sourceDirName":"release_notes/2025","slug":"/release_notes/2025/3-4-3","permalink":"/prophecy-docs-staging/preview/pr-610/release_notes/2025/3-4-3","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"release notes","permalink":"/prophecy-docs-staging/preview/pr-610/tags/release-notes"},{"inline":true,"label":"changelog","permalink":"/prophecy-docs-staging/preview/pr-610/tags/changelog"},{"inline":true,"label":"january","permalink":"/prophecy-docs-staging/preview/pr-610/tags/january"}],"version":"current","frontMatter":{"id":"3-4-3","description":"Release notes for version 3.4.3","title":"Prophecy 3.4.3.x","tags":["release notes","changelog","january"]},"sidebar":"mySidebar","previous":{"title":"Prophecy 3.4.4.x","permalink":"/prophecy-docs-staging/preview/pr-610/release_notes/2025/3-4-4"},"next":{"title":"2024","permalink":"/prophecy-docs-staging/preview/pr-610/release_notes/2024/"}}');var i=s(74848),t=s(28453);const a={id:"3-4-3",description:"Release notes for version 3.4.3",title:"Prophecy 3.4.3.x",tags:["release notes","changelog","january"]},l=void 0,o={},c=[{value:"Features",id:"features",level:2},{value:"Import functions from the Databricks Unity Catalog",id:"import-functions-from-the-databricks-unity-catalog",level:3},{value:"File upload in Spark pipelines",id:"file-upload-in-spark-pipelines",level:3},{value:"Updates",id:"Updates343",level:2},{value:"SCIM user experience enhancements",id:"scim-user-experience-enhancements",level:3},{value:"Machine-to-Machine functionality with Databricks OAuth",id:"machine-to-machine-functionality-with-databricks-oauth",level:3}];function d(e){const n={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"January 8, 2025"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Prophecy Python libs version: 1.9.29"}),"\n",(0,i.jsx)(n.li,{children:"Prophecy Scala libs version: 8.7.0"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,i.jsx)(n.h3,{id:"import-functions-from-the-databricks-unity-catalog",children:"Import functions from the Databricks Unity Catalog"}),"\n",(0,i.jsxs)(n.p,{children:["SQL UDFs stored in Databricks Unity Catalog are ",(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-610/engineers/user-defined-functions#import-udfs",children:"now available for use"})," in Prophecy ",(0,i.jsx)(n.strong,{children:"Python"})," Projects."]}),"\n",(0,i.jsx)(n.h3,{id:"file-upload-in-spark-pipelines",children:"File upload in Spark pipelines"}),"\n",(0,i.jsx)(n.p,{children:"There are now three ways to upload a file and incorporate it into your Spark pipeline:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Drag and drop the file directly onto the pipeline canvas."}),"\n",(0,i.jsxs)(n.li,{children:["Open the Source/Target gem drawer and click ",(0,i.jsx)(n.strong,{children:"Upload file"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Create a new Source gem, click ",(0,i.jsx)(n.strong,{children:"+ New Dataset"}),", and then select ",(0,i.jsx)(n.strong,{children:"Upload file"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"Updates343",children:"Updates"}),"\n",(0,i.jsx)(n.h3,{id:"scim-user-experience-enhancements",children:"SCIM user experience enhancements"}),"\n",(0,i.jsxs)(n.p,{children:["When SCIM is enabled, there is a new option under ",(0,i.jsx)(n.strong,{children:"Settings > SSO"})," that lets you easily generate a SCIM token."]}),"\n",(0,i.jsx)(n.h3,{id:"machine-to-machine-functionality-with-databricks-oauth",children:"Machine-to-Machine functionality with Databricks OAuth"}),"\n",(0,i.jsxs)(n.p,{children:["This feature lets you use ",(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-610/databricks-oauth-authentication",children:"Databricks OAuth"})," for authentication during scheduled Jobs, as well as for Project releases and deployments. Visit the Databricks documentation to learn more about ",(0,i.jsx)(n.a,{href:"https://docs.databricks.com/en/dev-tools/auth/oauth-m2m.html",children:"access to Databricks with a Service Principal using OAuth"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);