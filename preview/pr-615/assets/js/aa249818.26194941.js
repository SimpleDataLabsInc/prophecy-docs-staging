"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[20547],{28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}},74925:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"release_notes/2023/December_2023","title":"December 2023","description":"Release notes for December","source":"@site/docs/release_notes/2023/dec2023.md","sourceDirName":"release_notes/2023","slug":"/release_notes/2023/December_2023","permalink":"/prophecy-docs-staging/preview/pr-615/release_notes/2023/December_2023","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"release notes","permalink":"/prophecy-docs-staging/preview/pr-615/tags/release-notes"},{"inline":true,"label":"changelog","permalink":"/prophecy-docs-staging/preview/pr-615/tags/changelog"}],"version":"current","sidebarPosition":11,"frontMatter":{"sidebar_position":11,"id":"December_2023","description":"Release notes for December","title":"December 2023","tags":["release notes","changelog"]},"sidebar":"mySidebar","previous":{"title":"January 2024","permalink":"/prophecy-docs-staging/preview/pr-615/release_notes/2024/Jan_2024"},"next":{"title":"November 2023","permalink":"/prophecy-docs-staging/preview/pr-615/release_notes/2023/November_2023"}}');var s=n(74848),o=n(28453);const r={sidebar_position:11,id:"December_2023",description:"Release notes for December",title:"December 2023",tags:["release notes","changelog"]},a=void 0,l={},c=[{value:"3.2.7.* (December 26, 2023)",id:"327-december-26-2023",level:2},{value:"Features",id:"FeaturesRelease327",level:3},{value:"3.2.6.* (December 18, 2023)",id:"326-december-18-2023",level:2},{value:"Features",id:"FeaturesRelease326",level:3},{value:"Gem Dependencies",id:"gem-dependencies",level:4},{value:"Build Template configurable by Admin",id:"build-template-configurable-by-admin",level:4},{value:"Minor Improvements",id:"minor-improvements",level:4}];function d(e){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"327-december-26-2023",children:"3.2.7.* (December 26, 2023)"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Prophecy Python libs version: 1.7.3"}),"\n",(0,s.jsx)(t.li,{children:"Prophecy Scala libs version: 7.1.46"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"FeaturesRelease327",children:"Features"}),"\n",(0,s.jsx)(t.h4,{id:""}),"\n",(0,s.jsx)(t.h2,{id:"326-december-18-2023",children:"3.2.6.* (December 18, 2023)"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Prophecy Python libs version: 1.7.3"}),"\n",(0,s.jsx)(t.li,{children:"Prophecy Scala libs version: 7.1.46"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"FeaturesRelease326",children:"Features"}),"\n",(0,s.jsx)(t.h4,{id:"gem-dependencies",children:"Gem Dependencies"}),"\n",(0,s.jsx)(t.p,{children:"In our latest 3.2 Release, we've empowered users with the ability to build their own gems. This allows you to incorporate custom logic essential for your specific needs directly into the gem.\nFrequently, this involves utilizing custom dependencies within the gems for tasks such as validations and transformations.\nWith this release, we've introduced a feature that enables you to seamlessly integrate any custom Pypi or Maven dependency into a gem during the build process.\nThis dependency is also automatically added into the Pipeline using the gem whenever needed. Stay tuned for more comprehensive documentation on this enhancement."}),"\n",(0,s.jsx)(t.h4,{id:"build-template-configurable-by-admin",children:"Build Template configurable by Admin"}),"\n",(0,s.jsx)(t.p,{children:"Cluster administrators now have the capability to modify the build template for their organization by navigating to the Admin settings. By accessing the 'Build System' tab under the 'Admin' section, administrators can update the template, ensuring that any newly created projects will adopt the latest template. Additionally, existing projects will transition to the updated template, provided the template hasn't been customized."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"build_templates",src:n(95375).A+"",width:"2880",height:"1726"})}),"\n",(0,s.jsx)(t.h4,{id:"minor-improvements",children:"Minor Improvements"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Task Group Support in Airflow"}),": We have added support for Taskgroup in Low code Airflow. Airflow task groups are a tool to organize tasks into groups within your DAGs. This is useful to organize complicated DAGs by visually grouping tasks that belong together. This is also useful when you have to apply some ",(0,s.jsx)(t.code,{children:"default_args"})," to sets of tasks, instead of at the DAG level."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"AutoLayout Improvement"}),": In this release, we've introduced support for a layer-based auto-layout algorithm to enhance the representation of pipelines, especially those with intricate logic involving numerous cross connections within the gems. Users now have the flexibility to choose between two auto-layout options: ",(0,s.jsx)(t.code,{children:"Simple DAG Layout"})," and ",(0,s.jsx)(t.code,{children:"layer-based Layout"}),". This allows for customization based on individual preferences and specific requirements when arranging and visualizing complex structures."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Pipeline Config Names in Job IDE"}),": Users can now utilize the Alt key to reveal the name of the config instance for a Pipeline gem within a job. This enhancement simplifies the process of identifying which pipelines are associated with specific configurations, providing a more straightforward way to view this information in the job interface."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Remove Default Project Dependencies"}),": Initially, Prophecy includes default project dependencies to support common Spark transformations and integration with popular Data Warehouses. In this release, users now have the ability to delete these default dependencies, giving them greater control over the selection of gems available to all users by default in a project."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},95375:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/3.2.6_build_template-ccde5d03d3e8c1e1736d56e88cf3d87d.png"}}]);