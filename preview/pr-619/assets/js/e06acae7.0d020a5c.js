"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[83895],{28453:(e,t,l)=>{l.d(t,{R:()=>d,x:()=>r});var s=l(96540);const n={},i=s.createContext(n);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(i.Provider,{value:t},e.children)}},76897:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>x,frontMatter:()=>d,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"analysts/development/gems/prepare/deduplicate","title":"Deduplicate","description":"Remove duplicates from your data","source":"@site/docs/analysts/development/gems/prepare/deduplicate.md","sourceDirName":"analysts/development/gems/prepare","slug":"/analysts/deduplicate","permalink":"/prophecy-docs-staging/preview/pr-619/analysts/deduplicate","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-619/tags/gems"},{"inline":true,"label":"analyst","permalink":"/prophecy-docs-staging/preview/pr-619/tags/analyst"},{"inline":true,"label":"prepare","permalink":"/prophecy-docs-staging/preview/pr-619/tags/prepare"}],"version":"current","frontMatter":{"title":"Deduplicate","id":"deduplicate","slug":"/analysts/deduplicate","description":"Remove duplicates from your data","tags":["gems","analyst","prepare"]},"sidebar":"mySidebar","previous":{"title":"DataCleansing","permalink":"/prophecy-docs-staging/preview/pr-619/analysts/data-cleansing"},"next":{"title":"BulkColumnRename","permalink":"/prophecy-docs-staging/preview/pr-619/analysts/bulk-column-rename"}}');var n=l(74848),i=l(28453);const d={title:"Deduplicate",id:"deduplicate",slug:"/analysts/deduplicate",description:"Remove duplicates from your data",tags:["gems","analyst","prepare"]},r=void 0,c={},h=[{value:"Mode",id:"mode",level:2},{value:"Example",id:"example",level:2},{value:"Distinct Rows",id:"distinct-rows",level:2},{value:"Unique Only",id:"unique-only",level:2},{value:"First and Last",id:"first-and-last",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{class:"badge",children:"SQL"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.p,{children:"Removes rows with duplicate values of specified columns."}),"\n",(0,n.jsx)(t.h2,{id:"mode",children:"Mode"}),"\n",(0,n.jsxs)(t.p,{children:["Next to ",(0,n.jsx)(t.strong,{children:"Deduplicate On Columns"}),", choose how to keep certain rows."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Mode"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Additional parameters"}),(0,n.jsx)(t.th,{children:"Output"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:"Distinct Rows"})," (Default)"]}),(0,n.jsx)(t.td,{children:"Keeps all distinct rows."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"All columns are passed through unless columns are specified. Specified columns are persisted in the output."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Unique Only"})}),(0,n.jsx)(t.td,{children:"Keeps rows that do not have duplicates."}),(0,n.jsx)(t.td,{children:(0,n.jsx)("ul",{class:"table-list",children:(0,n.jsx)("li",{children:"Expression: Column that determines uniqueness"})})}),(0,n.jsx)(t.td,{children:"All columns are passed through."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"First"})}),(0,n.jsx)(t.td,{children:"Keeps the first occurrence of the duplicate row."}),(0,n.jsx)(t.td,{children:(0,n.jsxs)("ul",{class:"table-list",children:[(0,n.jsx)("li",{children:"Expression: Column that determines uniqueness"}),(0,n.jsx)("li",{children:"Use Custom Order By: Sort the rows"})]})}),(0,n.jsx)(t.td,{children:"All columns are passed through."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Last"})}),(0,n.jsx)(t.td,{children:"Keeps the last occurrence of the duplicate row."}),(0,n.jsx)(t.td,{children:(0,n.jsxs)("ul",{class:"table-list",children:[(0,n.jsx)("li",{children:"Expression: Column that determines uniqueness"}),(0,n.jsx)("li",{children:"Use Custom Order By: Sort the rows"})]})}),(0,n.jsx)(t.td,{children:"All columns are passed through."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.p,{children:"Suppose you're deduplicating the following table."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"First_Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Last_Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Contact"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"John"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Doe"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"phone"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"123-456-7890"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"John"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Doe"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"phone"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"123-456-7890"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"John"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Doe"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"phone"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"123-456-7890"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Alice"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Johnson"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"phone"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"246-135-0987"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Alice"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Johnson"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"phone"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"246-135-0987"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Alice"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Johnson"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"email"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"mailto:alice@johnson.com",children:"alice@johnson.com"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Alice"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Johnson"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"email"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"mailto:alice@johnson.com",children:"alice@johnson.com"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Bob"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Smith"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"email"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"mailto:bob@smith.com",children:"bob@smith.com"})})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"distinct-rows",children:"Distinct Rows"}),"\n",(0,n.jsxs)(t.p,{children:["If you use ",(0,n.jsx)(t.strong,{children:"Distinct Rows"}),", the output would be:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"First_Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Last_Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Contact"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"John"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Doe"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"phone"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"123-456-7890"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Alice"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Johnson"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"phone"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"246-135-0987"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Alice"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Johnson"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"email"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"mailto:alice@johnson.com",children:"alice@johnson.com"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Bob"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Smith"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"email"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"mailto:bob@smith.com",children:"bob@smith.com"})})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["If you want to remove the Alice Johnson duplicates, you can specify a subset of columns to deduplicate. In this case, you want to determine duplication based on ",(0,n.jsx)(t.code,{children:"First_Name"})," and ",(0,n.jsx)(t.code,{children:"Last_Name"})," columns. However, this will remove additional columns. Use First or Last to preserve the other columns in the output."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"First_Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Last_Name"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"John"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Doe"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Alice"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Johnson"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Bob"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Smith"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"unique-only",children:"Unique Only"}),"\n",(0,n.jsxs)(t.p,{children:["For ",(0,n.jsx)(t.strong,{children:"Unique Only"}),", the output would be:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"First_Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Last_Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Contact"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Bob"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Smith"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"email"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"mailto:bob@smith.com",children:"bob@smith.com"})})]})})]}),"\n",(0,n.jsx)(t.p,{children:"This outputs one unique row because the rest were duplicates."}),"\n",(0,n.jsx)(t.h2,{id:"first-and-last",children:"First and Last"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"First"})," and ",(0,n.jsx)(t.strong,{children:"Last"})," options work similarly to ",(0,n.jsx)(t.strong,{children:"Distinct Rows"}),", but they keep the first and last occurrence of the duplicate rows respectively."]})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}}}]);