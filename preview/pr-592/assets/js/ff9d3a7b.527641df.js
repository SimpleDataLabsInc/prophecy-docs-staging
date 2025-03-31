"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[31423],{28453:(e,t,o)=>{o.d(t,{R:()=>l,x:()=>a});var n=o(96540);const i={},r=n.createContext(i);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(r.Provider,{value:t},e.children)}},52781:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"analysts/development/collaboration/collaboration-modes","title":"Real-time collaboration","description":"Work together on projects simultaneously","source":"@site/docs/analysts/development/collaboration/collaboration-modes.md","sourceDirName":"analysts/development/collaboration","slug":"/analysts/collaboration-modes","permalink":"/analysts/collaboration-modes","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Real-time collaboration","id":"collaboration-modes","slug":"/analysts/collaboration-modes","description":"Work together on projects simultaneously","tags":[]},"sidebar":"mySidebar","previous":{"title":"Collaboration","permalink":"/analysts/collaboration"},"next":{"title":"Canvas annotations","permalink":"/analysts/canvas-annotations"}}');var i=o(74848),r=o(28453);const l={title:"Real-time collaboration",id:"collaboration-modes",slug:"/analysts/collaboration-modes",description:"Work together on projects simultaneously",tags:[]},a=void 0,s={},c=[{value:"Collaboration workflows",id:"collaboration-workflows",level:2},{value:"Simple/Prophecy-managed",id:"simpleprophecy-managed",level:2},{value:"Override",id:"override",level:3},{value:"Simple/External Git",id:"simpleexternal-git",level:2},{value:"Normal/External Git",id:"normalexternal-git",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Prophecy provides mechanisms to manage concurrent edits and prevent conflicts when multiple users work on the same project. The specific collaboration workflow is dictated by the project's Git mode, a setting established when the project is initially created."}),"\n",(0,i.jsx)(t.h2,{id:"collaboration-workflows",children:"Collaboration workflows"}),"\n",(0,i.jsx)(t.p,{children:"The following project settings dictate a project's collaboration workflow."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Git Storage Model"}),(0,i.jsx)(t.th,{children:"Git Account"}),(0,i.jsx)(t.th,{children:"Audience"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Simple"}),(0,i.jsx)(t.td,{children:"Prophecy-managed"}),(0,i.jsx)(t.td,{children:"Users who want a simple versioning and publication workflow that operates entirely in Prophecy."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Simple"}),(0,i.jsx)(t.td,{children:"External Git"}),(0,i.jsx)(t.td,{children:"Users who want a simple versioning and publication workflow, who may also need to maintain a CI/CD workflow through Git."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Normal or Fork"}),(0,i.jsx)(t.td,{children:"External Git"}),(0,i.jsx)(t.td,{children:"Users who are comfortable with typical Git branching and merging strategies who can manage CI/CD in Git."})]})]})]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["All projects that utilize the ",(0,i.jsx)(t.strong,{children:"Prophecy for Analysts"})," ",(0,i.jsx)(t.a,{href:"/templates",children:"project creation template"})," operate with Simple, Prophecy-managed Git."]})}),"\n",(0,i.jsx)(t.h2,{id:"simpleprophecy-managed",children:"Simple/Prophecy-managed"}),"\n",(0,i.jsxs)(t.p,{children:["When you create a project that uses ",(0,i.jsx)(t.a,{href:"/analysts/versioning",children:"Simple"})," Git, Prophecy restricts pipeline editing to a single user at a time."]}),"\n",(0,i.jsx)(t.p,{children:"Assume your colleague is actively editing a pipeline. What happens when you open and try to edit the same pipeline? You'll see that someone else is working on the pipeline. It will be read-only until the other user closes the pipeline. This way, you will not be able to produce conflicting edits."}),"\n",(0,i.jsxs)(t.p,{children:["At a more granular level, you cannot edit ",(0,i.jsx)(t.strong,{children:"any project component"})," while someone else is working on it. This includes functions, tests, schedules, etc."]}),"\n",(0,i.jsx)(t.h3,{id:"override",children:"Override"}),"\n",(0,i.jsxs)(t.p,{children:["If you are locked from editing a pipeline or other project component, you can override this and take control from the other user. If you know that your teammate is idle on the project, and you need to make changes, click ",(0,i.jsx)(t.strong,{children:"Override"})," to take editing control of the project."]}),"\n",(0,i.jsx)(t.h2,{id:"simpleexternal-git",children:"Simple/External Git"}),"\n",(0,i.jsx)(t.p,{children:"A project that uses Simple Git with an external Git repository will have an additional layer of complexity. Users may make changes to a project through the Prophecy interface, or in the Git repository."}),"\n",(0,i.jsxs)(t.p,{children:["Because users developing in Simple Git mode are automatically working on a generated ",(0,i.jsx)(t.code,{children:"dev"})," branch in Git, remote changes to the project files in that ",(0,i.jsx)(t.code,{children:"dev"})," branch will also be incorporated into the project. This means two things:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Synchronize changes."})," You will have to pull (integrate) these changes from the external Git into your project in Prophecy."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Resolve conflicts."})," These external changes may conflict with changes made in your project in Prophecy."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["To learn how to resolve merge conflicts from the Prophecy interface, visit ",(0,i.jsx)(t.a,{href:"/ci-cd/git/git-resolve",children:"Resolve conflicts"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"normalexternal-git",children:"Normal/External Git"}),"\n",(0,i.jsxs)(t.p,{children:["When you create a project that uses Normal Git mode, you will use a normal Git workflow for collaboration instead. In a normal Git workflow, you cannot make edits directly on the main branch of the project. Instead, each team member creates their own local development branch to work on new features or fixes independently without affecting others' work. The best practice is to give branches representative names so colleagues can quickly identify which changes are on which branch. To learn more about using the Git workflow, visit the ",(0,i.jsx)(t.a,{href:"/ci-cd/git/",children:"Git"})," section of the documentation."]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);