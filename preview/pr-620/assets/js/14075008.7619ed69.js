"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[15216],{27250:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>d,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"analysts/development/gems/transform/fuzzy-match","title":"FuzzyMatch","description":"Match records that are not exactly identical","source":"@site/docs/analysts/development/gems/transform/fuzzy-match.md","sourceDirName":"analysts/development/gems/transform","slug":"/analysts/fuzzy-match","permalink":"/prophecy-docs-staging/preview/pr-620/analysts/fuzzy-match","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-620/tags/gems"},{"inline":true,"label":"analyst","permalink":"/prophecy-docs-staging/preview/pr-620/tags/analyst"},{"inline":true,"label":"join","permalink":"/prophecy-docs-staging/preview/pr-620/tags/join"}],"version":"current","frontMatter":{"title":"FuzzyMatch","id":"fuzzy-match","slug":"/analysts/fuzzy-match","description":"Match records that are not exactly identical","tags":["gems","analyst","join"]},"sidebar":"mySidebar","previous":{"title":"DynamicSelect","permalink":"/prophecy-docs-staging/preview/pr-620/analysts/dynamic-select"},"next":{"title":"Transpose","permalink":"/prophecy-docs-staging/preview/pr-620/analysts/transpose"}}');var r=s(74848),i=s(28453);const d={title:"FuzzyMatch",id:"fuzzy-match",slug:"/analysts/fuzzy-match",description:"Match records that are not exactly identical",tags:["gems","analyst","join"]},l=void 0,c={},a=[{value:"Input and Output",id:"input-and-output",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Match Fields",id:"match-fields",level:3},{value:"Example",id:"example",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{class:"badge",children:"SQL"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.p,{children:"Use the FuzzyMatch gem to identify non-identical duplicates in your data."}),"\n",(0,r.jsx)(t.h2,{id:"input-and-output",children:"Input and Output"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Table"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"in0"})}),(0,r.jsx)(t.td,{children:"Includes the table on which duplicates will be checked. FuzzyMatch only allows one input."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"out"})}),(0,r.jsx)(t.td,{children:"Generates one record per fuzzy match."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(t.h3,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Merge/Purge Mode"}),(0,r.jsxs)(t.td,{children:["Records are either compared from a single source (Purge) or across multiple sources (Merge). ",(0,r.jsx)("br",{})," Merge mode assumes that multiple sources exist in the same table ",(0,r.jsx)(t.strong,{children:"in0"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Source ID Field"}),(0,r.jsxs)(t.td,{children:["Unique identifier for each source when using ",(0,r.jsx)(t.strong,{children:"Merge"})," mode. ",(0,r.jsx)("br",{}),"This is necessary because the different sources exist in the same table ",(0,r.jsx)(t.strong,{children:"in0"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Record ID Field"}),(0,r.jsx)(t.td,{children:"Unique identifier for each record."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Match threshold percentage"}),(0,r.jsx)(t.td,{children:"If the match score is less than the threshold, the record does not qualify as a match."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Include similarity score"}),(0,r.jsx)(t.td,{children:"Checkbox to enable for an additional output column that includes the similarity score."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"match-fields",children:"Match Fields"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Field name"}),(0,r.jsx)(t.td,{children:"Name of the column that you want to check for duplicates."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Match function"}),(0,r.jsx)(t.td,{children:"The method that generates the similarity score."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"One common use case for the FuzzyMatch gem is to match similarly spelled names. This can be useful for identifying accidentally misspelled names."}),"\n",(0,r.jsx)(t.p,{children:"Here's a table with two entries for Alex Taylor, whose phone number was updated:"}),"\n",(0,r.jsx)("div",{class:"table-example",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"id"}),(0,r.jsx)(t.th,{children:"email"}),(0,r.jsx)(t.th,{children:"phone"}),(0,r.jsx)(t.th,{children:"first_name"}),(0,r.jsx)(t.th,{children:"last_name"}),(0,r.jsx)(t.th,{children:"date_added"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"alex.t@example.com"})}),(0,r.jsx)(t.td,{children:"123-456-7890"}),(0,r.jsx)(t.td,{children:"Alex"}),(0,r.jsx)(t.td,{children:"Taylor"}),(0,r.jsx)(t.td,{children:"2023-01-01"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"2"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"alex.t@example.com"})}),(0,r.jsx)(t.td,{children:"123-456-9542"}),(0,r.jsx)(t.td,{children:"Alex"}),(0,r.jsx)(t.td,{children:"Ttaylor"}),(0,r.jsx)(t.td,{children:"2023-07-01"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"3"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"sam.p@example.com"})}),(0,r.jsx)(t.td,{children:"987-654-3210"}),(0,r.jsx)(t.td,{children:"Sam"}),(0,r.jsx)(t.td,{children:"Patel"}),(0,r.jsx)(t.td,{children:"2024-03-15"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"4"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"casey.l@example.com"})}),(0,r.jsx)(t.td,{children:"555-111-2222"}),(0,r.jsx)(t.td,{children:"Casey"}),(0,r.jsx)(t.td,{children:"Lee"}),(0,r.jsx)(t.td,{children:"2024-05-01"})]})]})]})}),"\n",(0,r.jsx)(t.p,{children:"You can use the FuzzyMatch gem to find the closely spelled name."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Create a FuzzyMatch gem and use the ",(0,r.jsx)(t.strong,{children:"id"})," as the Record ID. Then, add a match field for the ",(0,r.jsx)(t.strong,{children:"last_name"})," column."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Run the gem and see that the output includes the Record IDs of the records with fuzzy matches."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"id"}),(0,r.jsx)(t.th,{children:"id2"}),(0,r.jsx)(t.th,{children:"similarityScore"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"2"}),(0,r.jsx)(t.td,{children:"0.9111111111111111"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Join the output with the original dataset to view the matched names."}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>l});var n=s(96540);const r={},i=n.createContext(r);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);