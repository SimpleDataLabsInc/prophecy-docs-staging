"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[27261],{19765:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"analysts/extensibility/extensibility","title":"Extensibility","description":"Add custom functionality to your projects","source":"@site/docs/analysts/extensibility/extensibility.md","sourceDirName":"analysts/extensibility","slug":"/analysts/extensibility","permalink":"/prophecy-docs-staging/preview/pr-600/analysts/extensibility","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Extensibility","id":"extensibility","slug":"/analysts/extensibility","description":"Add custom functionality to your projects","tags":[]},"sidebar":"mySidebar","previous":{"title":"Monitoring","permalink":"/prophecy-docs-staging/preview/pr-600/analysts/monitoring"},"next":{"title":"Apps","permalink":"/prophecy-docs-staging/preview/pr-600/analysts/business-applications"}}');var s=t(74848),o=t(28453);const r={title:"Extensibility",id:"extensibility",slug:"/analysts/extensibility",description:"Add custom functionality to your projects",tags:[]},a=void 0,c={},l=[{value:"Dependencies",id:"dependencies",level:2},{value:"Package Hub",id:"package-hub",level:2},{value:"Gem Builder",id:"gem-builder",level:2}];function d(e){const n={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Prophecy projects are highly extensible, meaning you can add additional capabilities and functionalities beyond our out-of-the-box offerings. When you build new components in Prophecy, you can package, version, and share them for collaboration and control."}),"\n",(0,s.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsx)(n.p,{children:"Projects can import various types of dependencies that add functionality to your project. There are three types of dependencies for SQL projects:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Prophecy Project. When you import a project as a dependency, you gain access to all its components, including pipelines, gems, and functions, for use in your own project. If a new version of the project is ",(0,s.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-600/analysts/versioning",children:"published"}),", you can update your dependency version to take advantage of the latest changes."]}),"\n",(0,s.jsx)(n.li,{children:"GitHub. Dependencies can be saved in GitHub repositories and imported from there."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://hub.getdbt.com/",children:"DBT Hub"}),". Packages in the DBT hub can be used to extend typical SQL functionality. If the package contains macros, you can use them via the ",(0,s.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-600/analysts/macro",children:"Macro"})," gem."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To add a dependency to your project:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Open the ",(0,s.jsx)(n.strong,{children:"Options"})," (ellipses) menu in the project header."]}),"\n",(0,s.jsxs)(n.li,{children:["Select ",(0,s.jsx)(n.strong,{children:"Dependencies"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"+ Add Dependency"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Choose the dependency type (Project, GitHub, or DBT Hub)."}),"\n",(0,s.jsx)(n.li,{children:"Fill in the required fields to import the correct package version."}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Create"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Reload and Save"})," to download the dependencies."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Dependencies will appear in the bottom left of your project. Expand a dependency to view the various functions, gems, and other components that it may contain."}),"\n",(0,s.jsx)(n.p,{children:"You can also browse packaged projects in the Package Hub and import them from there. Learn more about the Package Hub in the following section."}),"\n",(0,s.jsx)(n.h2,{id:"package-hub",children:"Package Hub"}),"\n",(0,s.jsxs)(n.p,{children:["To extend the functionality of a project, you can download packages from the Package Hub. Packages are ",(0,s.jsx)(n.strong,{children:"versioned projects"})," that contain shareable components, such as pipelines, gems, user-defined functions, business rules, seeds, macros, and more!"]}),"\n",(0,s.jsx)(n.p,{children:"This means that if you want build a component and share it, you must:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Create a project."}),"\n",(0,s.jsx)(n.li,{children:"Build the component."}),"\n",(0,s.jsx)(n.li,{children:"Publish the project."}),"\n",(0,s.jsx)(n.li,{children:"Add the project to the Package Hub."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Importantly, if you add a project to the Package Hub, ",(0,s.jsx)(n.strong,{children:"all of its components will be available for reuse"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"gem-builder",children:"Gem Builder"}),"\n",(0,s.jsxs)(n.p,{children:["The Gem Builder can help you build custom gems for individual or shared use. SQL gems are dbt macros that have a visual (UI) layer. To learn more, visit ",(0,s.jsx)(n.a,{href:"/analysts/gem-builder",children:"Gem Builder for SQL"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);