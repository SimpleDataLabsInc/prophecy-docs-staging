"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[71491],{28453:(t,e,s)=>{s.d(e,{R:()=>r,x:()=>d});var i=s(96540);const n={},l=i.createContext(n);function r(t){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:r(t.components),i.createElement(l.Provider,{value:e},t.children)}},32791:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"analysts/development/data-tests/data-tests","title":"Data tests for SQL","description":"Data tests check the validity of your SQL","source":"@site/docs/analysts/development/data-tests/data-tests.md","sourceDirName":"analysts/development/data-tests","slug":"/analysts/data-tests","permalink":"/prophecy-docs-staging/preview/pr-600/analysts/data-tests","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"concept","permalink":"/prophecy-docs-staging/preview/pr-600/tags/concept"},{"inline":true,"label":"testing","permalink":"/prophecy-docs-staging/preview/pr-600/tags/testing"},{"inline":true,"label":"sql","permalink":"/prophecy-docs-staging/preview/pr-600/tags/sql"}],"version":"current","frontMatter":{"title":"Data tests for SQL","id":"data-tests","slug":"/analysts/data-tests","description":"Data tests check the validity of your SQL","tags":["concept","testing","sql"]},"sidebar":"mySidebar","previous":{"title":"Canvas annotations","permalink":"/prophecy-docs-staging/preview/pr-600/analysts/canvas-annotations"},"next":{"title":"Use model and column tests","permalink":"/prophecy-docs-staging/preview/pr-600/analysts/model-column-tests"}}');var n=s(74848),l=s(28453);const r={title:"Data tests for SQL",id:"data-tests",slug:"/analysts/data-tests",description:"Data tests check the validity of your SQL",tags:["concept","testing","sql"]},d=void 0,a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Test types",id:"test-types",level:2},{value:"When to use each test type",id:"when-to-use-each-test-type",level:2},{value:"Example: Referential integrity check",id:"example-referential-integrity-check",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function h(t){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:"A data test is an assertion you define about a dataset in your project. Use data tests to verify that your business-critical data is consistently generated and meets expectations over time. Instead of manually reviewing datasets after each pipeline run or model execution, you can define tests that automatically validate your data."}),"\n",(0,n.jsxs)(e.p,{children:["When you create data tests in the visual canvas, Prophecy runs ",(0,n.jsx)(e.a,{href:"https://docs.getdbt.com/docs/build/data-tests",children:"dbt"})," for the underlying test execution and simplifies the test definitions that are normally defined in ",(0,n.jsx)(e.code,{children:".sql"})," and ",(0,n.jsx)(e.code,{children:".yaml"})," files."]}),"\n",(0,n.jsx)(e.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(e.p,{children:"To use data tests in your SQL project, you will need:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"A Prophecy fabric or SQL fabric."}),"\n"]}),"\n",(0,n.jsx)(e.admonition,{type:"note",children:(0,n.jsx)(e.p,{children:"Prophecy does not support data tests for fabrics configured with BigQuery and a CMEK."})}),"\n",(0,n.jsx)(e.h2,{id:"test-types",children:"Test types"}),"\n",(0,n.jsx)(e.p,{children:"There are two different data test types supported in Prophecy:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Project tests"}),": Singular-use tests that apply to one specific table."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Generic tests (Test definitions)"}),": Generic tests that can be reused repeatedly for table and column tests."]}),"\n"]}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"General situations"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Project test"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Model test"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Column test"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Test a single table"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.img,{alt:"Tick",src:s(95661).A+"",width:"24",height:"24"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.img,{alt:"Cross",src:s(40758).A+"",width:"24",height:"24"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.img,{alt:"Cross",src:s(40758).A+"",width:"24",height:"24"})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Test multiple tables"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.img,{alt:"Cross",src:s(40758).A+"",width:"24",height:"24"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.img,{alt:"Tick",src:s(95661).A+"",width:"24",height:"24"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.img,{alt:"Tick",src:s(95661).A+"",width:"24",height:"24"})})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"when-to-use-each-test-type",children:"When to use each test type"}),"\n",(0,n.jsx)(e.p,{children:"See a few recommendations in the following tables to get an idea of when to use each test type."}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Specific situations"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Project test"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Model test"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Column test"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Test for referential integrity"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.img,{alt:"Tick",src:s(95661).A+"",width:"24",height:"24"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.img,{alt:"Cross",src:s(40758).A+"",width:"24",height:"24"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.img,{alt:"Cross",src:s(40758).A+"",width:"24",height:"24"})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Test for late arriving data"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.img,{alt:"Tick",src:s(95661).A+"",width:"24",height:"24"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.img,{alt:"Cross",src:s(40758).A+"",width:"24",height:"24"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.img,{alt:"Cross",src:s(40758).A+"",width:"24",height:"24"})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Test for data consistency verification"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.img,{alt:"Tick",src:s(95661).A+"",width:"24",height:"24"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.img,{alt:"Cross",src:s(40758).A+"",width:"24",height:"24"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.img,{alt:"Cross",src:s(40758).A+"",width:"24",height:"24"})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Test for model size and aggregations"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.img,{alt:"Cross",src:s(40758).A+"",width:"24",height:"24"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.img,{alt:"Tick",src:s(95661).A+"",width:"24",height:"24"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.img,{alt:"Cross",src:s(40758).A+"",width:"24",height:"24"})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Test for column data format and data presence (nulls, empty strings, etc.)"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.img,{alt:"Cross",src:s(40758).A+"",width:"24",height:"24"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.img,{alt:"Cross",src:s(40758).A+"",width:"24",height:"24"})}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:(0,n.jsx)(e.img,{alt:"Tick",src:s(95661).A+"",width:"24",height:"24"})})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"example-referential-integrity-check",children:"Example: Referential integrity check"}),"\n",(0,n.jsxs)(e.p,{children:["The following test named ",(0,n.jsx)(e.code,{children:"ref_int_orders_customers"})," checks for referential integrity. In particular, it checks if every ",(0,n.jsx)(e.code,{children:"customer_id"})," entry in the ",(0,n.jsx)(e.strong,{children:"orders"})," table is present in the ",(0,n.jsx)(e.strong,{children:"customers"})," table."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Project test canvas",src:s(60836).A+"",width:"2620",height:"1492"})}),"\n",(0,n.jsxs)(e.p,{children:["This test starts with several models from the ",(0,n.jsx)(e.code,{children:"HelloWorld_SQL"})," project, combines their data with a series of transformation steps, and feeds the resulting table into the Data Test gem."]}),"\n",(0,n.jsxs)(e.p,{children:["If there are ",(0,n.jsx)(e.code,{children:"customer_id"})," entries in the ",(0,n.jsx)(e.strong,{children:"orders"})," table that are not present in the ",(0,n.jsx)(e.strong,{children:"customers"})," table, then the ",(0,n.jsx)(e.code,{children:"ref_int_orders_customers"})," test fails."]}),"\n",(0,n.jsx)(e.h2,{id:"whats-next",children:"What's next"}),"\n",(0,n.jsxs)(e.p,{children:["To set up a project test, see ",(0,n.jsx)(e.a,{href:"/prophecy-docs-staging/preview/pr-600/analysts/project-tests",children:"Use project tests"}),"."]}),"\n",(0,n.jsxs)(e.p,{children:["If you need to reuse a test that is defined by a parametrized query, see ",(0,n.jsx)(e.a,{href:"/prophecy-docs-staging/preview/pr-600/analysts/model-column-tests",children:"Use model tests"}),"."]})]})}function o(t={}){const{wrapper:e}={...(0,l.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(h,{...t})}):h(t)}},40758:(t,e,s)=>{s.d(e,{A:()=>i});const i="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgIGNsYXNzPSJzYy1jcnJzenQgZVdpeXN0IHVpLWljb24gdW5kZWZpbmVkIj4KICAgIDx0aXRsZT4mbHQ7WEJhZGdlSWNvbiB0eXBlPSJjdXN0b20iLyZndDs8L3RpdGxlPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNGNjNENjgiCiAgICAgICAgICBkPSJNNC45MzkzNCA0LjkzOTM0QzUuNTI1MTMgNC4zNTM1NSA2LjQ3NDg3IDQuMzUzNTUgNy4wNjA2NiA0LjkzOTM0TDEyIDkuODc4NjhMMTYuOTM5MyA0LjkzOTM0QzE3LjUyNTEgNC4zNTM1NSAxOC40NzQ5IDQuMzUzNTUgMTkuMDYwNyA0LjkzOTM0QzE5LjY0NjQgNS41MjUxMyAxOS42NDY0IDYuNDc0ODcgMTkuMDYwNyA3LjA2MDY2TDE0LjEyMTMgMTJMMTkuMDYwNyAxNi45MzkzQzE5LjY0NjQgMTcuNTI1MSAxOS42NDY0IDE4LjQ3NDkgMTkuMDYwNyAxOS4wNjA3QzE4LjQ3NDkgMTkuNjQ2NCAxNy41MjUxIDE5LjY0NjQgMTYuOTM5MyAxOS4wNjA3TDEyIDE0LjEyMTNMNy4wNjA2NiAxOS4wNjA3QzYuNDc0ODcgMTkuNjQ2NCA1LjUyNTEzIDE5LjY0NjQgNC45MzkzNCAxOS4wNjA3QzQuMzUzNTUgMTguNDc0OSA0LjM1MzU1IDE3LjUyNTEgNC45MzkzNCAxNi45MzkzTDkuODc4NjggMTJMNC45MzkzNCA3LjA2MDY2QzQuMzUzNTUgNi40NzQ4NyA0LjM1MzU1IDUuNTI1MTMgNC45MzkzNCA0LjkzOTM0WiI+PC9wYXRoPgo8L3N2Zz4K"},60836:(t,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/project-test-canvas-d783db03c64a98c80b6b42ecccf6dd23.png"},95661:(t,e,s)=>{s.d(e,{A:()=>i});const i="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgIGNsYXNzPSJzYy1jcnJzenQgZVdpeXN0IHVpLWljb24gdW5kZWZpbmVkIj4KICAgIDx0aXRsZT4mbHQ7Q2hlY2ttYXJrSWNvbiB0eXBlPSJsaWdodCIvJmd0OzwvdGl0bGU+CiAgICA8cGF0aCBmaWxsPSIjMDZCNkQ0IiBkPSJNMTkuNDU5NyA2LjAwMDYyQzE5LjA3MDkgNi4wMTE5NSAxOC43MDE4IDYuMTc0MTQgMTguNDMwNSA2LjQ1Mjg1TDkuNTA4NzkgMTUuMzc0Nkw1LjU3NzE0IDExLjQ0MjlDNS40MzkyIDExLjI5OTMgNS4yNzM5NyAxMS4xODQ2IDUuMDkxMTQgMTEuMTA1NUM0LjkwODMyIDExLjAyNjUgNC43MTE1NiAxMC45ODQ4IDQuNTEyNCAxMC45ODI4QzQuMzEzMjMgMTAuOTgwNyA0LjExNTY3IDExLjAxODUgMy45MzEyNyAxMS4wOTM4QzMuNzQ2ODcgMTEuMTY5IDMuNTc5MzUgMTEuMjgwNCAzLjQzODUxIDExLjQyMTJDMy4yOTc2OCAxMS41NjIgMy4xODYzNiAxMS43Mjk2IDMuMTExMDcgMTEuOTEzOUMzLjAzNTc5IDEyLjA5ODMgMi45OTgwNSAxMi4yOTU5IDMuMDAwMDggMTIuNDk1MUMzLjAwMjEgMTIuNjk0MiAzLjA0Mzg1IDEyLjg5MSAzLjEyMjg2IDEzLjA3MzhDMy4yMDE4OCAxMy4yNTY3IDMuMzE2NTggMTMuNDIxOSAzLjQ2MDI1IDEzLjU1OThMOC40NTAzNCAxOC41NDk5QzguNzMxMSAxOC44MzA2IDkuMTExODIgMTguOTg4MiA5LjUwODc5IDE4Ljk4ODJDOS45MDU3NSAxOC45ODgyIDEwLjI4NjUgMTguODMwNiAxMC41NjcyIDE4LjU0OTlMMjAuNTQ3NCA4LjU2OTc0QzIwLjc2MzQgOC4zNTk0IDIwLjkxMDggOC4wODg3NiAyMC45NzA0IDcuNzkzMjRDMjEuMDMgNy40OTc3MiAyMC45OTkxIDcuMTkxMDkgMjAuODgxNSA2LjkxMzQ3QzIwLjc2NCA2LjYzNTg2IDIwLjU2NTQgNi40MDAxOSAyMC4zMTE3IDYuMjM3MzFDMjAuMDU4IDYuMDc0NDQgMTkuNzYxMSA1Ljk5MTk0IDE5LjQ1OTcgNi4wMDA2MloiPjwvcGF0aD4KPC9zdmc+Cg=="}}]);