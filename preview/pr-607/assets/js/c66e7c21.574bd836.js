"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[51538],{18712:(e,n,d)=>{d.d(n,{A:()=>t});const t=d.p+"assets/images/dependencies-dbt-utils-83b00a20c1d0dde4b3b046d3b2d8c260.png"},20996:(e,n,d)=>{d.d(n,{A:()=>t});const t=d.p+"assets/images/dependencies-list-41efbd101a6319c8dff9ee8cb98f20d1.png"},28011:(e,n,d)=>{d.d(n,{A:()=>t});const t=d.p+"assets/images/dependencies-add-52ed59bab3ac665182466dc8e6af589b.png"},28453:(e,n,d)=>{d.d(n,{R:()=>c,x:()=>a});var t=d(96540);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}},34321:(e,n,d)=>{d.d(n,{A:()=>t});const t=d.p+"assets/images/dependencies-github-1587c42c7e18c4d640cd831d18e23ad3.png"},34696:(e,n,d)=>{d.d(n,{A:()=>t});const t=d.p+"assets/images/dependencies-dbt-46dcc398256bdb780149a8995ed75133.png"},42278:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>t,toc:()=>r});const t=JSON.parse('{"id":"extensibility/dependencies/sql-dependencies","title":"SQL dependencies","description":"Dependency management","source":"@site/docs/extensibility/dependencies/sql-dependencies.md","sourceDirName":"extensibility/dependencies","slug":"/analysts/dependencies","permalink":"/prophecy-docs-staging/preview/pr-607/analysts/dependencies","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"dependencies","permalink":"/prophecy-docs-staging/preview/pr-607/tags/dependencies"},{"inline":true,"label":"dbt","permalink":"/prophecy-docs-staging/preview/pr-607/tags/dbt"},{"inline":true,"label":"extensibility","permalink":"/prophecy-docs-staging/preview/pr-607/tags/extensibility"}],"version":"current","frontMatter":{"title":"SQL dependencies","id":"sql-dependencies","slug":"/analysts/dependencies","description":"Dependency management","tags":["dependencies","dbt","extensibility"]},"sidebar":"mySidebar","previous":{"title":"Spark dependencies","permalink":"/prophecy-docs-staging/preview/pr-607/engineers/dependencies"},"next":{"title":"Prophecy libraries","permalink":"/prophecy-docs-staging/preview/pr-607/engineers/prophecy-libraries"}}');var i=d(74848),s=d(28453);const c={title:"SQL dependencies",id:"sql-dependencies",slug:"/analysts/dependencies",description:"Dependency management",tags:["dependencies","dbt","extensibility"]},a=void 0,o={},r=[{value:"View dependencies",id:"view-dependencies",level:2},{value:"Add dependency",id:"add-dependency",level:2},{value:"Add a DBT dependency",id:"add-a-dbt-dependency",level:3},{value:"Add a GitHub dependency",id:"add-a-github-dependency",level:3},{value:"Add a Prophecy project dependency",id:"add-a-prophecy-project-dependency",level:3},{value:"Use a dependency",id:"use-a-dependency",level:2},{value:"Delete dependency",id:"delete-dependency",level:2},{value:"Storage",id:"storage",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Dependencies allow you to make use of third-party or custom code in your models and jobs. You can connect dependencies to your SQL projects, and create them from the DBT Hub, GitHub, or another Prophecy project."}),"\n",(0,i.jsx)(n.h2,{id:"view-dependencies",children:"View dependencies"}),"\n",(0,i.jsxs)(n.p,{children:["To see all of your project and model dependencies simply open the Manage Dependencies screen by clicking ",(0,i.jsx)(n.strong,{children:"... > Dependencies"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"View your dependencies",src:d(81983).A+"",width:"2812",height:"757"})}),"\n",(0,i.jsxs)(n.p,{children:["You can also view your dependencies and get to the same Manage Dependencies screen from the bottom left-hand side of the canvas, under ",(0,i.jsx)(n.strong,{children:"DEPENDENCIES"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"View your dependencies",src:d(20996).A+"",width:"2620",height:"1380"})}),"\n",(0,i.jsx)(n.h2,{id:"add-dependency",children:"Add dependency"}),"\n",(0,i.jsxs)(n.p,{children:["To add a dependency, first navigate to ",(0,i.jsx)(n.a,{href:"#view-dependencies",children:"Manage Dependencies"}),". There you will see a complete list of your dependencies. Click on ",(0,i.jsx)(n.strong,{children:"+ Add Dependency"})," to add a new dependency."]}),"\n",(0,i.jsx)(n.p,{children:"You will be taken to the Create Dependency screen, where you can choose to create a dependency from the DBT Hub, GitHub, or another Prophecy project."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Add a Dependency",src:d(28011).A+"",width:"2620",height:"1508"})}),"\n",(0,i.jsxs)(n.p,{children:["After you've defined the Dependency, click ",(0,i.jsx)(n.strong,{children:"Create"}),". Prophecy will validate the dependency and add it to the project, making it enabled in the current model, and adding it as a dependency within all of the other models in the project."]}),"\n",(0,i.jsx)(n.p,{children:"When adding dependencies, Prophecy validates that the dependency coordinates are valid and accessible. If that fails, you will see an invalid coordinates error."}),"\n",(0,i.jsx)(n.admonition,{title:"Invalid coordinates",type:"info",children:(0,i.jsxs)(n.p,{children:["In rare cases, your dependency might be only accessible to the cluster or the build system but not Prophecy itself. If you're confident that the dependency is correct, but the validation error shows up, it's safe to press ",(0,i.jsx)(n.strong,{children:"Save Anyways"})," to ignore that warning."]})}),"\n",(0,i.jsx)(n.h3,{id:"add-a-dbt-dependency",children:"Add a DBT dependency"}),"\n",(0,i.jsxs)(n.p,{children:["To add a DBT dependency, you must select ",(0,i.jsx)(n.strong,{children:"DBT Hub"})," and provide the dbt package and version number."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Add a DBT Dependency",src:d(34696).A+"",width:"2620",height:"1508"})}),"\n",(0,i.jsxs)(n.p,{children:["You can find the DBT package and version number for DBT dependencies from the ",(0,i.jsx)(n.a,{href:"https://hub.getdbt.com/dbt-labs/",children:"dbt Package hub"}),". For example, to use the latest ",(0,i.jsx)(n.code,{children:"dbt_utils"})," package, see the ",(0,i.jsxs)(n.a,{href:"https://hub.getdbt.com/dbt-labs/dbt_utils/latest/",children:[(0,i.jsx)(n.code,{children:"dbt_utils"})," package page"]}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"dbt_utils dependency",src:d(18712).A+"",width:"2620",height:"1393"})}),"\n",(0,i.jsx)(n.p,{children:"You can copy and paste the information into the Create Dependency fields."}),"\n",(0,i.jsx)(n.h3,{id:"add-a-github-dependency",children:"Add a GitHub dependency"}),"\n",(0,i.jsxs)(n.p,{children:["To add a GitHub dependency, you must select ",(0,i.jsx)(n.strong,{children:"GitHub"})," and provide the Git Repository, Revision, and Sub Directory."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Add a GitHub Dependency",src:d(34321).A+"",width:"2620",height:"1508"})}),"\n",(0,i.jsx)(n.p,{children:"The Revision must be either a Git tag, commit hash, or branch name."}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["Enable ",(0,i.jsx)(n.strong,{children:"Warn unpinned"})," only if you want to point to your GitHub Repository without specifying any version, commit, or branch. Doing so may result in unexpected behavior if there are changes to your latest default branch."]})}),"\n",(0,i.jsx)(n.h3,{id:"add-a-prophecy-project-dependency",children:"Add a Prophecy project dependency"}),"\n",(0,i.jsxs)(n.p,{children:["To add another Prophecy project as a dependency, you must select ",(0,i.jsx)(n.strong,{children:"Prophecy Project"})," and select a project from the project dependencies dropdown."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The Prophecy project must already be released for it to show up in the dropdown."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Add a Prophecy Project Dependency",src:d(98074).A+"",width:"2620",height:"1382"})}),"\n",(0,i.jsx)(n.h2,{id:"use-a-dependency",children:"Use a dependency"}),"\n",(0,i.jsx)(n.p,{children:"Once you've added a dependency, you can use the following entities from them:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Models"}),"\n",(0,i.jsx)(n.li,{children:"Seeds"}),"\n",(0,i.jsx)(n.li,{children:"Sources"}),"\n",(0,i.jsx)(n.li,{children:"Functions"}),"\n",(0,i.jsx)(n.li,{children:"Gems"}),"\n",(0,i.jsx)(n.li,{children:"Data Tests"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Use a dependency",src:d(77835).A+"",width:"2620",height:"1381"})}),"\n",(0,i.jsx)(n.p,{children:"Simply drag and drop the entity that you'd like to use from the dependencies section onto your Visual canvas."}),"\n",(0,i.jsx)(n.h2,{id:"delete-dependency",children:"Delete dependency"}),"\n",(0,i.jsxs)(n.p,{children:["To delete a dependency, first navigate to the dependencies list on the ",(0,i.jsx)(n.a,{href:"#view-dependencies",children:"Manage Dependencies"})," screen. There you can click on a trash icon next to the dependency that you'd like to delete."]}),"\n",(0,i.jsx)(n.admonition,{title:"Deleting a dependency",type:"caution",children:(0,i.jsx)(n.p,{children:"Deleting a dependency deletes it within the whole project, and all inheriting Models. If you're not confident about\nthe functionality of the other models, it's usually better to disable a dependency, instead of deleting it."})}),"\n",(0,i.jsx)(n.h2,{id:"storage",children:"Storage"}),"\n",(0,i.jsx)(n.p,{children:"All of your dependencies are stored at the project level. When adding a dependency to a single model, by default it becomes available to all the other models within the same project."}),"\n",(0,i.jsx)(n.p,{children:"Prophecy takes care of pulling the dependencies automatically when a model is run."}),"\n",(0,i.jsxs)(n.p,{children:["Dependencies are saved within your ",(0,i.jsx)(n.strong,{children:"packages.yml"})," file."]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},77835:(e,n,d)=>{d.d(n,{A:()=>t});const t=d.p+"assets/images/dependencies-use-c5e686c61d4423a4fe42f0b48ff3b975.png"},81983:(e,n,d)=>{d.d(n,{A:()=>t});const t=d.p+"assets/images/dependencies-view-a49c7d692e51e6da85170c1e871d831d.png"},98074:(e,n,d)=>{d.d(n,{A:()=>t});const t=d.p+"assets/images/dependencies-prophecy-project-65db12c3f93d4dd596fc61aef5aae949.png"}}]);