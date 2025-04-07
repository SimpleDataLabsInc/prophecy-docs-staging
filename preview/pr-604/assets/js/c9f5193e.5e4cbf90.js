"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[4258],{28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>c});var t=o(96540);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}},64478:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"analysts/development/connections","title":"Connections","description":"Utilize external data providers with connections","source":"@site/docs/analysts/development/connections.md","sourceDirName":"analysts/development","slug":"/analysts/connections","permalink":"/prophecy-docs-staging/preview/pr-604/analysts/connections","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Connections","id":"connections","slug":"/analysts/connections","sidebar_label":"Connections","description":"Utilize external data providers with connections","tags":[]},"sidebar":"mySidebar","previous":{"title":"Variant schema","permalink":"/prophecy-docs-staging/preview/pr-604/analysts/variant-schema"},"next":{"title":"Data exploration","permalink":"/prophecy-docs-staging/preview/pr-604/analysts/data-explorer"}}');var r=o(74848),i=o(28453);const s={title:"Connections",id:"connections",slug:"/analysts/connections",sidebar_label:"Connections",description:"Utilize external data providers with connections",tags:[]},c=void 0,a={},l=[{value:"Connections in the Environment browser",id:"connections-in-the-environment-browser",level:2},{value:"Connections in external Source/Target gems",id:"connections-in-external-sourcetarget-gems",level:2},{value:"Secrets in connections",id:"secrets-in-connections",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function d(e){const n={a:"a",admonition:"admonition",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Connections make it easy to use data from external sources directly in your Prophecy projects. You can set up connections as you build your pipelines, and connections will be stored in your attached ",(0,r.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-604/administration/fabrics/prophecy-fabrics/",children:"fabric"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"As you build your pipelines, you'll be able to:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Create connections from the Environment browser or from external Source and Target gems."}),"\n",(0,r.jsxs)(n.li,{children:["Configure ",(0,r.jsx)(n.a,{href:"#secrets-in-connections",children:"secrets"})," for your connections that will encrypt your connection credentials."]}),"\n",(0,r.jsx)(n.li,{children:"Browse data from established connections in the Environment browser."}),"\n",(0,r.jsx)(n.li,{children:"Add data to your pipeline directly from the Environment browser."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"connections-in-the-environment-browser",children:"Connections in the Environment browser"}),"\n",(0,r.jsxs)(n.p,{children:["Connections allow Prophecy to access specific data from external providers using your credentials. The data will appear in the ",(0,r.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-604/analysts/pipelines#sidebar",children:"Environment browser"})," of the project sidebar, allowing you to easily locate data, explore data, and add data to your pipeline canvas. Data access permissions are inherited from your external user account."]}),"\n",(0,r.jsxs)(n.p,{children:["When you attach a Prophecy fabric to your project, you will by default see the data from your ",(0,r.jsx)(n.a,{href:"/administration/fabrics/prophecy-fabrics/",children:"primary SQL warehouse"})," in the Environment browser. If you want to see more connections in your project, you can click ",(0,r.jsx)(n.strong,{children:"+ Connect more data"})," at the bottom of the Environment browser. Once you configure a connection, Prophecy will automatically save it to your attached fabric. To understand how to configure individual connection types, visit the ",(0,r.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-604/administration/fabrics/prophecy-fabrics/connections/",children:"list of connections"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"To use data from the environment browser:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Drag a source from the environment browser to the pipeline canvas."}),"\n",(0,r.jsx)(n.li,{children:"Open the gem configuration."}),"\n",(0,r.jsx)(n.li,{children:"Notice Prophecy has configured the source gem for you."}),"\n",(0,r.jsx)(n.li,{children:"Load and preview the data."}),"\n",(0,r.jsx)(n.li,{children:"Add downstream gems to perform data transformations."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"connections-in-external-sourcetarget-gems",children:"Connections in external Source/Target gems"}),"\n",(0,r.jsx)(n.p,{children:"If you add an external Source or Target gem from the gem drawer to your pipeline canvas, you will need to configure the gem:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Add an external Source or Target gem to your canvas."}),"\n",(0,r.jsx)(n.li,{children:"Open the gem to view the configuration dialog."}),"\n",(0,r.jsxs)(n.li,{children:["Select the correct ",(0,r.jsx)(n.strong,{children:"Type and Format"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Open the ",(0,r.jsx)(n.strong,{children:"Location"})," tab."]}),"\n",(0,r.jsxs)(n.li,{children:["Select an existing connection for your gem, or ",(0,r.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-604/administration/fabrics/prophecy-fabrics/connections/",children:"create a new one"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Open the ",(0,r.jsx)(n.strong,{children:"Properties"})," tab and verify the schema of your table."]}),"\n",(0,r.jsx)(n.li,{children:"Save the gem."}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["When setting up external sources and targets, consider the primary SQL connection in your Prophecy fabric. Processing tables natively in the primary SQL warehouse will be fast. Processing external data is slower. ",(0,r.jsx)(n.strong,{children:"Do not create an external connection that duplicates your primary SQL warehouse connection."})]})}),"\n",(0,r.jsx)(n.h2,{id:"secrets-in-connections",children:"Secrets in connections"}),"\n",(0,r.jsxs)(n.p,{children:["As you create connections, you will notice that credentials must be populated with ",(0,r.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-604/administration/secrets/",children:"secrets"}),". Secrets keep your credentials encrypted and secure. Once you add your secrets to your connections, you can reuse the connections throughout the pipeline without having to reauthenticate or re-enter your credentials. This relationship between secrets and connections keeps Prophecy secure for your data processing needs."]}),"\n",(0,r.jsx)(n.h2,{id:"whats-next",children:"What's next"}),"\n",(0,r.jsx)(n.p,{children:"Now that you understand how to use connections in your pipelines, check out the following resources."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["To see a complete list of connections, view the ",(0,r.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-604/administration/fabrics/prophecy-fabrics/connections/",children:"connections"})," that are available for Prophecy fabrics."]}),"\n",(0,r.jsxs)(n.li,{children:["To understand how to configure individual connection types, visit the ",(0,r.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-604/administration/fabrics/prophecy-fabrics/connections/",children:"list of connections"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["All connections require ",(0,r.jsx)(n.strong,{children:"secrets"})," to keep your credentials safe. View the documentation on ",(0,r.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-604/administration/secrets/",children:"secrets"})," to learn more."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);