"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[42212],{28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(96540);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}},36389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"administration/fabrics/prophecy-fabrics/connections/tableau","title":"Tableau","description":"Learn how to connect with Tableau","source":"@site/docs/administration/fabrics/prophecy-fabrics/connections/tableau.md","sourceDirName":"administration/fabrics/prophecy-fabrics/connections","slug":"/administration/fabrics/prophecy-fabrics/connections/tableau","permalink":"/prophecy-docs-staging/preview/pr-615/administration/fabrics/prophecy-fabrics/connections/tableau","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"connections","permalink":"/prophecy-docs-staging/preview/pr-615/tags/connections"},{"inline":true,"label":"tableau","permalink":"/prophecy-docs-staging/preview/pr-615/tags/tableau"}],"version":"current","frontMatter":{"title":"Tableau","id":"tableau","description":"Learn how to connect with Tableau","tags":["connections","tableau"]},"sidebar":"adminSidebar","previous":{"title":"SMTP","permalink":"/prophecy-docs-staging/preview/pr-615/administration/fabrics/prophecy-fabrics/connections/smtp"},"next":{"title":"Spark fabrics","permalink":"/prophecy-docs-staging/preview/pr-615/administration/fabrics/Spark-fabrics/Fabrics"}}');var i=n(74848),r=n(28453);const s={title:"Tableau",id:"tableau",description:"Learn how to connect with Tableau",tags:["connections","tableau"]},o=void 0,c={},l=[{value:"Feature support",id:"feature-support",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Tableau permissions",id:"tableau-permissions",level:2},{value:"Sharing connections within teams",id:"sharing-connections-within-teams",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Use a Tableau connection to publish and update data sources in your Tableau projects directly from Prophecy pipelines."}),"\n",(0,i.jsxs)(t.p,{children:["Prophecy uses the ",(0,i.jsx)(t.a,{href:"https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api.htm",children:"Tableau REST API"})," to perform actions like sign in, data upload, and data source publication. Your data is sent to Tableau as ",(0,i.jsx)(t.code,{children:"Hyper"})," files (Tableau\u2019s high-performance, in-memory format)."]}),"\n",(0,i.jsx)(t.h2,{id:"feature-support",children:"Feature support"}),"\n",(0,i.jsx)(t.p,{children:"The table below outlines whether the connection supports certain Prophecy features."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Feature"}),(0,i.jsx)(t.th,{children:"Supported"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Read data with a ",(0,i.jsx)(t.a,{href:"/analysts/source-target",children:"Source gem"})]}),(0,i.jsx)(t.td,{children:"No"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Write data with a Report gem"}),(0,i.jsx)(t.td,{children:"Yes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Browse data in the ",(0,i.jsx)(t.a,{href:"/analysts/pipelines",children:"Environment browser"})]}),(0,i.jsx)(t.td,{children:"No"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsx)(t.p,{children:"Using Tableau Hyper files is a legacy approach that Prophecy supports mainly for backward compatibility. It helps users keep existing dashboards running smoothly while migrating from older systems."}),"\n",(0,i.jsx)(t.p,{children:"For a modern, cloud-native workflow, write pipeline outputs directly to a supported cloud data platform like Databricks, Snowflake, or BigQuery. Then connect Tableau to that platform to visualize the data\u2014no need to set up a separate Tableau connection or perform extra export steps in Prophecy."}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(t.p,{children:"To create a connection with Tableau, enter the following parameters:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Connection Name"}),(0,i.jsxs)(t.td,{children:["Unique name for the connection (e.g., ",(0,i.jsx)(t.code,{children:"MyTableauConnection"}),")"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Tableau Server URL"}),(0,i.jsxs)(t.td,{children:["URL of your Tableau Server (e.g., ",(0,i.jsx)(t.code,{children:"https://tableau.example.com"}),")"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Tableau Token Name"}),(0,i.jsx)(t.td,{children:"Name of your Tableau personal access token"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Tableau Token (",(0,i.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-615/administration/secrets/",children:"Secret required"}),")"]}),(0,i.jsx)(t.td,{children:"Your Tableau personal access token"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Tableau Site Name"}),(0,i.jsx)(t.td,{children:"Name of the Tableau site you're connecting to"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"tableau-permissions",children:"Tableau permissions"}),"\n",(0,i.jsxs)(t.p,{children:["When you use a Tableau connection in Prophecy, permissions are determined by the credentials you provide. To use the connection to publish data, those credentials must have the ",(0,i.jsx)(t.strong,{children:"Publish"})," capability in Tableau for the project containing the target data source."]}),"\n",(0,i.jsxs)(t.p,{children:["For more details on Tableau permissions, see their documentation on ",(0,i.jsx)(t.a,{href:"https://help.tableau.com/current/server/en-us/permissions_capabilities.htm",children:"Permission Capabilities"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"sharing-connections-within-teams",children:"Sharing connections within teams"}),"\n",(0,i.jsxs)(t.p,{children:["Tableau connections are stored within ",(0,i.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-615/administration/fabrics/prophecy-fabrics/",children:"fabrics"}),", which are assigned to specific teams in Prophecy. Once a Tableau connection is added to a fabric, anyone on that team can use it to send data to Tableau from their pipelines. Everyone will inherit the permissions of the user authenticated during connection setup."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);