"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[40460],{17427:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"administration/teams-users/project-creation-template","title":"Project creation templates","description":"Create templates that include predefined project creation settings","source":"@site/docs/administration/teams-users/project-creation-template.md","sourceDirName":"administration/teams-users","slug":"/administration/teams-users/project-creation-template","permalink":"/prophecy-docs-staging/preview/pr-618/administration/teams-users/project-creation-template","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"templates","permalink":"/prophecy-docs-staging/preview/pr-618/tags/templates"}],"version":"current","frontMatter":{"title":"Project creation templates","id":"project-creation-template","description":"Create templates that include predefined project creation settings","tags":["templates"]},"sidebar":"adminSidebar","previous":{"title":"User settings","permalink":"/prophecy-docs-staging/preview/pr-618/administration/teams-users/settings"},"next":{"title":"Fabrics","permalink":"/prophecy-docs-staging/preview/pr-618/administration/fabrics"}}');var n=r(74848),i=r(28453);const a={title:"Project creation templates",id:"project-creation-template",description:"Create templates that include predefined project creation settings",tags:["templates"]},l=void 0,d={},c=[{value:"Template settings",id:"template-settings",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Spark",id:"spark",level:3},{value:"SQL",id:"sql",level:3},{value:"Usage",id:"usage",level:2}];function o(e){const t={h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["At the team level, you can create multiple templates that include predefined project creation parameters. This is useful if your team creates many projects that use the same settings when they are created. ",(0,n.jsx)(t.strong,{children:"Only team admins can access the template settings for their team."})]}),"\n",(0,n.jsx)(t.h2,{id:"template-settings",children:"Template settings"}),"\n",(0,n.jsx)(t.p,{children:"To find existing templates or add new templates:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Open the relevant ",(0,n.jsx)(t.strong,{children:"team"})," metadata."]}),"\n",(0,n.jsxs)(t.li,{children:["Click on the ",(0,n.jsx)(t.strong,{children:"Settings"})," tab."]}),"\n",(0,n.jsxs)(t.li,{children:["Navigate to the ",(0,n.jsx)(t.strong,{children:"Default Project Settings"})," subtab."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Here, you can review or update existing templates by clicking through the ",(0,n.jsx)(t.strong,{children:"Templates"})," dropdown. To create a new template, click ",(0,n.jsx)(t.strong,{children:"+ Add New"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(t.p,{children:"When you add a new template for your team, you need to fill in the following parameters. Parameters will differ between Spark and SQL projects."}),"\n",(0,n.jsx)(t.h3,{id:"spark",children:"Spark"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Template Name"}),(0,n.jsx)(t.td,{children:"A name to identify the template."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Project Type"}),(0,n.jsx)(t.td,{children:"The project language. Select Python or Scala for Spark projects."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Allowed to customize"}),(0,n.jsx)(t.td,{children:"Whether the template settings can be modified when a user creates a project with the template (Yes or No)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Git Provider"}),(0,n.jsx)(t.td,{children:"Whether the project will use Prophecy-managed Git or an external Git provider."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Git Storage Model"}),(0,n.jsxs)(t.td,{children:["The option to choose ",(0,n.jsx)(t.strong,{children:"Normal"})," Git or ",(0,n.jsx)(t.strong,{children:"Fork per User"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Select as Default template"}),(0,n.jsx)(t.td,{children:"The option to make the template preselected during project creation."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default Main Branch"}),(0,n.jsx)(t.td,{children:"The default main branch name."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"sql",children:"SQL"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Template Name"}),(0,n.jsx)(t.td,{children:"A name to identify the template."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Project Type"}),(0,n.jsx)(t.td,{children:"The project language. Select SQL for SQL projects."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Allowed to customize"}),(0,n.jsx)(t.td,{children:"Whether the template settings can be modified when a user creates a project with the template (Yes or No)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SQL Provider"}),(0,n.jsx)(t.td,{children:"The SQL provider that will execute dbt."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default Main Branch"}),(0,n.jsx)(t.td,{children:"The default main branch name."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default Development Branch"}),(0,n.jsxs)(t.td,{children:["The default development branch name. This field appears ",(0,n.jsx)(t.strong,{children:"only if using external Git"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Select as Default template"}),(0,n.jsx)(t.td,{children:"The option to make the template preselected during project creation."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Git Provider"}),(0,n.jsx)(t.td,{children:"Whether the project will use Prophecy-managed Git or an external Git provider."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Git Storage Model"}),(0,n.jsxs)(t.td,{children:["The option to choose ",(0,n.jsx)(t.strong,{children:"Simple"})," Git, ",(0,n.jsx)(t.strong,{children:"Normal"})," Git, or ",(0,n.jsx)(t.strong,{children:"Fork per User"}),"."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.p,{children:"When you have templates for a certain team, users who select that team during project creation will see those templates."}),"\n",(0,n.jsx)(t.p,{children:"If you select a customizable template, you will still be able to make changes to settings during project creation."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>l});var s=r(96540);const n={},i=s.createContext(n);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);