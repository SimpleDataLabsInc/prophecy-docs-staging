"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[58409],{28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var n=r(96540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}},65537:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),s=r(18215),i=r(65627),o=r(56347),a=r(50372),c=r(30604),l=r(11861),d=r(78749);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,l.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function u(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const s=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function x(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,i=p(e),[o,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[l,h]=j({queryString:r,groupId:s}),[x,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,d.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),m=(()=>{const e=l??x;return u({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{m&&c(m)}),[m]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),g(e)}),[h,g,i]),tabValues:i}}var g=r(9136);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),s=a[r].value;s!==n&&(l(t),o(s))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:a.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{c.push(e)},onKeyDown:h,onClick:d,...i,className:(0,s.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function b(e){let{lazy:t,children:r,selectedValue:i}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function v(e){const t=x(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,f.jsx)(y,{...t,...e}),(0,f.jsx)(b,{...t,...e})]})}function w(e){const t=(0,g.A)();return(0,f.jsx)(v,{...e,children:h(e.children)},String(t))}},79329:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(18215);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,o),hidden:r,children:t})}},91083:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"getting-started/concepts/projects","title":"Projects","description":"Keeping your pipelines, datasets and jobs under (source) control","source":"@site/docs/getting-started/concepts/project.md","sourceDirName":"getting-started/concepts","slug":"/projects","permalink":"/prophecy-docs-staging/preview/pr-587/projects","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"concepts","permalink":"/prophecy-docs-staging/preview/pr-587/tags/concepts"},{"inline":true,"label":"project","permalink":"/prophecy-docs-staging/preview/pr-587/tags/project"}],"version":"current","frontMatter":{"title":"Projects","id":"projects","slug":"/projects","description":"Keeping your pipelines, datasets and jobs under (source) control","tags":["concepts","project"]},"sidebar":"mySidebar","previous":{"title":"Fabrics","permalink":"/prophecy-docs-staging/preview/pr-587/fabrics"},"next":{"title":"Templates","permalink":"/prophecy-docs-staging/preview/pr-587/templates"}}');var s=r(74848),i=r(28453),o=r(65537),a=r(79329);const c={title:"Projects",id:"projects",slug:"/projects",description:"Keeping your pipelines, datasets and jobs under (source) control",tags:["concepts","project"]},l=void 0,d={},h=[{value:"Project types",id:"project-types",level:2},{value:"Components",id:"components",level:2},{value:"Versioning",id:"versioning",level:2},{value:"Access and sharing",id:"access-and-sharing",level:2},{value:"Sharing with other teams (read-only)",id:"sharing-with-other-teams-read-only",level:3},{value:"Metadata",id:"metadata",level:2},{value:"Project editor",id:"project-editor",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function p(e){const t={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.strong,{children:"project"})," in Prophecy is the core unit for developing, organizing, and deploying data pipelines to production. It includes all the components required to build and execute data processes. Continue reading to learn about:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"#project-types",children:"Project types"})," for various use cases"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"#components",children:"Key components"})," that support pipeline development within a project"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"#versioning",children:"Versioning"})," and publishing of projects"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"#access-and-sharing",children:"Sharing"})," projects across teams"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"#project-editor",children:"Navigating"})," and editing projects"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"project-types",children:"Project types"}),"\n",(0,s.jsxs)(t.p,{children:["Project components depend on your project type. Prophecy supports Python, Scala, and SQL projects. This language choice determines how your visual pipelines will be compiled into code. Your initial choice of project type determines your project's capabilities and workflow structure, so ",(0,s.jsx)(t.em,{children:"it's important to choose correctly at the start since it cannot be changed later"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Prophecy supports both SQL and Spark projects, and the choice depends on your data needs. Many organizations use both types of projects, leveraging SQL for ",(0,s.jsx)(t.strong,{children:"data analytics"})," and Spark for ",(0,s.jsx)(t.strong,{children:"data engineering"}),". Prophecy provides a platform where this can happen all in one place."]}),"\n",(0,s.jsx)(t.admonition,{title:"Prophecy for Analysts",type:"info",children:(0,s.jsxs)(t.p,{children:["To make project creation easier, Prophecy provides ",(0,s.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-587/templates",children:"project creation templates"})," that can cater to different needs. We suggest using the ",(0,s.jsx)(t.strong,{children:"Prophecy for Analysts"})," template when creating SQL projects for data analytics."]})}),"\n",(0,s.jsxs)(o.A,{children:[(0,s.jsx)(a.A,{value:"SQL",label:"SQL",children:(0,s.jsx)(t.p,{children:"SQL is ideal when working with structured data in warehouses like Snowflake or Databricks SQL, offering simplicity, speed, and efficiency for moderate data volumes and interactive queries. It\u2019s best for teams who need straightforward transformations without managing distributed infrastructure."})}),(0,s.jsx)(a.A,{value:"Spark",label:"Python and Scala (Spark)",children:(0,s.jsx)(t.p,{children:"Spark excels in executing complex pipelines and processing semi-structured data. Spark prioritizes performance and scalability are key, and requires more data engineering knowledge. Depending on what your data engineers are comfortable with, they can either choose Python or Scala as the backend code of Spark projects."})})]}),"\n",(0,s.jsx)(t.h2,{id:"components",children:"Components"}),"\n",(0,s.jsxs)(t.p,{children:["Project components vary based on project type. While SQL and Spark projects share common elements like pipelines and gems, their functionality differs significantly. Each is documented separately: ",(0,s.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-587/analysts/pipeline-development",children:"Pipeline development for Analysts"})," focuses on SQL projects, while ",(0,s.jsx)(t.a,{href:"/engineers/pipeline-development",children:"Pipeline development for Engineers"})," focuses on Spark projects."]}),"\n",(0,s.jsxs)(o.A,{children:[(0,s.jsx)(a.A,{value:"SQL",label:"SQL",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Component"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-587/analysts/pipelines",children:"Pipelines"})}),(0,s.jsx)(t.td,{children:"Sequences of steps that run on Prophecy Automate and SQL warehouses."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-587/analysts/gems",children:"Gems"})}),(0,s.jsx)(t.td,{children:"Representations of individual data transformation steps in a pipeline or model."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-587/analysts/source-target",children:"Tables"})}),(0,s.jsx)(t.td,{children:"SQL tables, views, or seeds."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-587/analysts/functions",children:"Functions"})}),(0,s.jsx)(t.td,{children:"SQL macros used in gem expressions."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-587/analysts/data-tests",children:"Tests"})}),(0,s.jsx)(t.td,{children:"Automated validations ensuring referential integrity, data consistency, and other quality checks."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-587/analysts/scheduling",children:"Schedules"})}),(0,s.jsx)(t.td,{children:"Schedules for periodic pipeline execution managed by Prophecy Automate."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/engineers/models",children:"Models"})}),(0,s.jsxs)(t.td,{children:["SQL transformations that define a single table or view. Models only appear in projects that enable ",(0,s.jsx)(t.strong,{children:"Normal"})," or ",(0,s.jsx)(t.strong,{children:"Fork per User"})," Git storage models. (Only applicable for data engineers.)"]})]})]})]})}),(0,s.jsx)(a.A,{value:"Spark",label:"Python and Scala (Spark)",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Component"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/engineers/pipelines",children:"Pipelines"})}),(0,s.jsx)(t.td,{children:"Sequences of steps that run on Spark-native code."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/engineers/dataset",children:"Datasets"})}),(0,s.jsx)(t.td,{children:"Pointers to tables that are stored in the external data provider defined in a fabric."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-587/engineers/orchestration",children:"Jobs"})}),(0,s.jsx)(t.td,{children:"Schedules for pipeline execution managed by external orchestration tools like Databricks Jobs and Airflow."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/engineers/gems",children:"Gems"})}),(0,s.jsx)(t.td,{children:"Representations of individual data transformation steps in a pipeline."})]})]})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"versioning",children:"Versioning"}),"\n",(0,s.jsx)(t.p,{children:"All projects are automatically compiled into code and hosted on Git for powerful version control. Prophecy offers several version control options, which you can configure during project creation. The available options vary depending on the project type."}),"\n",(0,s.jsxs)(o.A,{children:[(0,s.jsx)(a.A,{value:"SQL",label:"SQL",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Options"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Git Account"}),(0,s.jsx)(t.td,{children:(0,s.jsxs)("ul",{class:"table-list",children:[(0,s.jsx)("li",{children:"Prophecy-managed: Prophecy hosts and manages the Git repository for your project. No external Git setup is required."}),(0,s.jsx)("li",{children:"External Git: You connect your project to an external Git provider (e.g., GitHub, GitLab, Bitbucket) and manage repositories independently."})]})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Git Storage Model"}),(0,s.jsx)(t.td,{children:(0,s.jsxs)("ul",{class:"table-list",children:[(0,s.jsx)("li",{children:"Simple: A minimal save and publish workflow that it built on Git. All work happens on the same development branch and is merged to main upon project publication."}),(0,s.jsx)("li",{children:"Normal: All users work within a shared Git repository with standard branching and merging practices."}),(0,s.jsx)("li",{children:"Fork per User (External Git only): Each user works on their own fork of the repository, enabling independent changes before merging upstream."})]})})]})]})]})}),(0,s.jsx)(a.A,{value:"Spark",label:"Python and Scala (Spark)",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Options"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Git Account"}),(0,s.jsx)(t.td,{children:(0,s.jsxs)("ul",{class:"table-list",children:[(0,s.jsx)("li",{children:"Prophecy-managed: Prophecy hosts and manages the Git repository for your project. This is not recommended for projects deployed to production."}),(0,s.jsx)("li",{children:"External Git: You connect your project to an external Git provider (e.g., GitHub, GitLab, Bitbucket) and manage repositories independently."})]})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Git Storage Model"}),(0,s.jsx)(t.td,{children:(0,s.jsxs)("ul",{class:"table-list",children:[(0,s.jsx)("li",{children:"Normal: All users work within a shared Git repository with standard branching and merging practices."}),(0,s.jsx)("li",{children:"Fork per User (External Git only): Each user works on their own fork of the repository, enabling independent changes before merging upstream."})]})})]})]})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"access-and-sharing",children:"Access and sharing"}),"\n",(0,s.jsxs)(t.p,{children:["In Prophecy, each project is associated with a specific ",(0,s.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-587/administration/teams-users/teams-users",children:"team"}),", which determines ownership and access permissions."]}),"\n",(0,s.jsx)(t.p,{children:"The user who creates a project becomes its owner (or admin). During project creation, the project owner assigns the project to a team, which lets all team members edit project components like pipelines and gems. However, project owners retain special privileges: for example, only project owners and team admins can release and deploy Spark projects."}),"\n",(0,s.jsx)(t.p,{children:"When you first start using Prophecy, you are placed in your own personal, one-member team. This setup is ideal for private projects that only you can access. For collaborative work, your team admin will usually create shared teams."}),"\n",(0,s.jsx)(t.h3,{id:"sharing-with-other-teams-read-only",children:"Sharing with other teams (read-only)"}),"\n",(0,s.jsx)(t.p,{children:"To extend the reach of your project, you can share it with other teams."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Read-only access:"})," Users from other teams cannot directly edit the original project's components."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Reuse components:"})," If you share the project with other teams and publish it to the ",(0,s.jsx)(t.a,{href:"/engineers/package-hub",children:"Package Hub"}),", users can import the projects as packages in their own projects. While they can't edit the original components, they can use copies of them in their own projects."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Run pipelines:"})," If you share projects that contain ",(0,s.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-587/analysts/business-applications",children:"business apps"})," with other teams, users can execute business apps that rely on the pipelines within the shared project."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"metadata",children:"Metadata"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Metadata"})," page in Prophecy provides a searchable directory of projects and project components including pipelines, models, and jobs. All projects that are shared with your teams are visible in the ",(0,s.jsx)(t.strong,{children:"Projects"})," tab of the Metadata page. You can click into each project to access more granular metadata about that project."]}),"\n",(0,s.jsx)(t.p,{children:"You can view and edit the following metadata for your projects:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Metadata"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"About"})}),(0,s.jsx)(t.td,{children:"An overview of your project and space for an in-depth description of the project."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Content"})}),(0,s.jsx)(t.td,{children:"A list of entities within the project like pipelines and jobs depending on your project type."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Dependencies"})}),(0,s.jsx)(t.td,{children:"The dependencies that exist in the project, including packages and Prophecy libraries."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Version control"})}),(0,s.jsx)(t.td,{children:"Either the Git workflow of the project, or the version history of the project, depending on your project type."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Deployments"})}),(0,s.jsx)(t.td,{children:"A list of project versions that you have released and/or deployed (published)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Access"})}),(0,s.jsx)(t.td,{children:"The teams that can view your project via the Package Hub."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Settings"})}),(0,s.jsx)(t.td,{children:"Different configuration options for building and deploying your project."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"project-editor",children:"Project editor"}),"\n",(0,s.jsxs)(t.p,{children:["To begin pipeline development, open your project from the ",(0,s.jsx)(t.strong,{children:"IDE"})," tab in the sidebar. This opens the ",(0,s.jsx)(t.strong,{children:"project editor"}),", where you can configure transformation gems and interactively run pipelines. To learn more about pipeline development, visit ",(0,s.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-587/analysts/pipeline-development",children:"SQL pipeline development"})," and ",(0,s.jsx)(t.a,{href:"/engineers/pipeline-development",children:"Spark pipeline development"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"If you want to change the name of your project, you must do so in the project metadata (not the project editor)."})}),"\n",(0,s.jsx)(t.h2,{id:"whats-next",children:"What's next"}),"\n",(0,s.jsx)(t.p,{children:"To continue learning about projects:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Create multiple projects and compare different project types."}),"\n",(0,s.jsxs)(t.li,{children:["Follow one of our ",(0,s.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-587/tutorials",children:"tutorials"})," to build a project from end-to-end."]}),"\n",(0,s.jsx)(t.li,{children:"Play with different project components to understand how they interact."}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}}}]);