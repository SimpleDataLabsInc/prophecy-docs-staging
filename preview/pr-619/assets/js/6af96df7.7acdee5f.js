"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[13760],{28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>l});var r=t(96540);const n={},a=r.createContext(n);function i(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(a.Provider,{value:s},e.children)}},28635:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"analysts/development/gems/custom/rest-api","title":"RestAPI","description":"Call APIs from your pipeline.","source":"@site/docs/analysts/development/gems/custom/rest-api.md","sourceDirName":"analysts/development/gems/custom","slug":"/analysts/rest-api","permalink":"/prophecy-docs-staging/preview/pr-619/analysts/rest-api","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-619/tags/gems"},{"inline":true,"label":"analyst","permalink":"/prophecy-docs-staging/preview/pr-619/tags/analyst"},{"inline":true,"label":"custom","permalink":"/prophecy-docs-staging/preview/pr-619/tags/custom"}],"version":"current","frontMatter":{"title":"RestAPI","id":"rest-api","slug":"/analysts/rest-api","description":"Call APIs from your pipeline.","tags":["gems","analyst","custom"]},"sidebar":"mySidebar","previous":{"title":"SQL statement","permalink":"/prophecy-docs-staging/preview/pr-619/analysts/sql-statement"},"next":{"title":"Macro","permalink":"/prophecy-docs-staging/preview/pr-619/analysts/macro"}}');var n=t(74848),a=t(28453);const i={title:"RestAPI",id:"rest-api",slug:"/analysts/rest-api",description:"Call APIs from your pipeline.",tags:["gems","analyst","custom"]},l=void 0,c={},o=[{value:"Use cases",id:"use-cases",level:2},{value:"Parameters",id:"parameters",level:2}];function d(e){const s={code:"code",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{class:"badge",children:"Prophecy Automate"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(s.p,{children:"Use the RestAPI gem to make API calls from your pipeline."}),"\n",(0,n.jsx)(s.h2,{id:"use-cases",children:"Use cases"}),"\n",(0,n.jsx)(s.p,{children:"While RestAPIs vary greatly in functionality, we can highlight a few use cases that may be particularly helpful for your pipelines."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Use case"}),(0,n.jsx)(s.th,{children:"Example"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Bringing in more data from external systems"}),(0,n.jsx)(s.td,{children:"Retrieve active users from an internal user database."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Enriching data with specific APIs"}),(0,n.jsx)(s.td,{children:"Send data to LLMs to analyze text and return the sentiments of a column."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Sending notifications or alerts"}),(0,n.jsx)(s.td,{children:"Send real-time messages to a Slack channel when an event occurs in your pipeline."})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"URL"})}),(0,n.jsx)(s.td,{children:"The endpoint of the API that you are making a request to."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Method"})}),(0,n.jsxs)(s.td,{children:["The HTTP method used for the request (e.g., ",(0,n.jsx)(s.code,{children:"GET"}),", ",(0,n.jsx)(s.code,{children:"POST"}),", ",(0,n.jsx)(s.code,{children:"PUT"}),", ",(0,n.jsx)(s.code,{children:"DELETE"}),") to determine the action performed on the resource."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Params"})}),(0,n.jsxs)(s.td,{children:["Query parameters included in the request URL, usually used for filtering, sorting, or pagination (e.g., ",(0,n.jsx)(s.code,{children:"page=2&limit=10"}),")."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Body"})}),(0,n.jsxs)(s.td,{children:["The payload sent with ",(0,n.jsx)(s.code,{children:"POST"}),", ",(0,n.jsx)(s.code,{children:"PUT"}),", or ",(0,n.jsx)(s.code,{children:"PATCH"})," requests, typically in JSON format, containing the data to be processed by the API."]})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:["You can populate these parameters with hard-coded values or reference columns. If you use a column to dynamically populate the RestAPI, Prophecy will ",(0,n.jsx)(s.strong,{children:"generate one API call per row"})," in that column. For example, if you reference a column with ",(0,n.jsx)(s.code,{children:"100"})," rows, this gem will make ",(0,n.jsx)(s.code,{children:"100"})," API calls."]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);