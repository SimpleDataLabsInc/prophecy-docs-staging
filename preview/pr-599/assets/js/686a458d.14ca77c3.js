"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[49027],{28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var a=n(96540);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}},33832:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"analysts/development/gems/source-target/table/table","title":"Table","description":"Tables in the SQL warehouse","source":"@site/docs/analysts/development/gems/source-target/table/table.md","sourceDirName":"analysts/development/gems/source-target/table","slug":"/analysts/table","permalink":"/prophecy-docs-staging/preview/pr-599/analysts/table","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Table","id":"table","slug":"/analysts/table","description":"Tables in the SQL warehouse","tags":[]},"sidebar":"mySidebar","previous":{"title":"Source and Target","permalink":"/prophecy-docs-staging/preview/pr-599/analysts/source-target"},"next":{"title":"Upload files","permalink":"/prophecy-docs-staging/preview/pr-599/analysts/upload-file"}}');var r=n(74848),s=n(28453);const i={title:"Table",id:"table",slug:"/analysts/table",description:"Tables in the SQL warehouse",tags:[]},l=void 0,o={},c=[{value:"Create a Table gem",id:"create-a-table-gem",level:2},{value:"Configure the Table gem",id:"configure-the-table-gem",level:2}];function d(e){const t={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{class:"badge",children:"SQL"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.p,{children:"Tables are natively read from and written to the SQL warehouse that is configured as your primary SQL connection in a Prophecy fabric. Prophecy offers the following table types:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Table"}),(0,r.jsx)(t.td,{children:"Persistent storage of structured data in your SQL warehouse. Faster for frequent queries (indexed)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"View"}),(0,r.jsx)(t.td,{children:"A virtual table that derives data dynamically from a query. Slower for complex queries (computed at runtime)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Seed"}),(0,r.jsx)(t.td,{children:"Small CSV-format files that you can write directly in Prophecy."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"create-a-table-gem",children:"Create a Table gem"}),"\n",(0,r.jsx)(t.p,{children:"To begin using tables, add a Table gem to your pipeline."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Open a pipeline in a project."}),"\n",(0,r.jsxs)(t.li,{children:["Open the ",(0,r.jsx)(t.strong,{children:"Source/Target"})," category in the gem drawer."]}),"\n",(0,r.jsxs)(t.li,{children:["Click ",(0,r.jsx)(t.strong,{children:"Table"}),". This adds a Table gem to your pipeline canvas."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"configure-the-table-gem",children:"Configure the Table gem"}),"\n",(0,r.jsxs)(t.p,{children:["When you open the ",(0,r.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-599/analysts/gems#gem-configuration",children:"gem configuration"}),", you can choose an existing table in your primary SQL warehouse or create a new one."]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Select an existing table or create a new table. The available tables in the configuration are located in the default database and schema that you defined in your ",(0,r.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-599/administration/fabrics/prophecy-fabrics/",children:"fabric"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Choose the type and format of the table (table, view, or seed) and click ",(0,r.jsx)(t.strong,{children:"Next"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Set the location where the table will be stored in the SQL warehouse, then click ",(0,r.jsx)(t.strong,{children:"Next"}),". You can select an existing table location or name a new table."]}),"\n",(0,r.jsxs)(t.li,{children:["Define the table's properties and verify the schema and click ",(0,r.jsx)(t.strong,{children:"Next"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"Load the data to preview the table."}),"\n",(0,r.jsxs)(t.li,{children:["Click ",(0,r.jsx)(t.strong,{children:"Save"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);