"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[14563],{28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var s=r(96540);const n={},a=s.createContext(n);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(a.Provider,{value:t},e.children)}},45857:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"analysts/development/gems/transform/aggregate","title":"Aggregate","description":"Group and pivot your data","source":"@site/docs/analysts/development/gems/transform/aggregate.md","sourceDirName":"analysts/development/gems/transform","slug":"/analysts/aggregate","permalink":"/prophecy-docs-staging/preview/pr-605/analysts/aggregate","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-605/tags/gems"},{"inline":true,"label":"analyst","permalink":"/prophecy-docs-staging/preview/pr-605/tags/analyst"},{"inline":true,"label":"transform","permalink":"/prophecy-docs-staging/preview/pr-605/tags/transform"}],"version":"current","frontMatter":{"title":"Aggregate","id":"aggregate","slug":"/analysts/aggregate","description":"Group and pivot your data","tags":["gems","analyst","transform"]},"sidebar":"mySidebar","previous":{"title":"MongoDB","permalink":"/prophecy-docs-staging/preview/pr-605/analysts/mongodb"},"next":{"title":"Window","permalink":"/prophecy-docs-staging/preview/pr-605/analysts/window"}}');var n=r(74848),a=r(28453);const o={title:"Aggregate",id:"aggregate",slug:"/analysts/aggregate",description:"Group and pivot your data",tags:["gems","analyst","transform"]},i=void 0,l={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{class:"badge",children:"SQL"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.p,{children:"Use the Aggregate gem to group data and perform aggregations on each group."}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Group By"}),(0,n.jsx)(t.td,{children:"Defines the column(s) that include the categories that you will group by."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Expressions"}),(0,n.jsx)(t.td,{children:"Includes the aggregations that you wish to perform. Each aggregation will produce a new output column."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Having Conditions"}),(0,n.jsx)(t.td,{children:"Filter after the GROUP BY operation."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.p,{children:"Suppose you have a dataset of orders that includes the customer_id of each customer. You can use the Aggregate gem to:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Group by the ",(0,n.jsx)(t.strong,{children:"customer_id"})," column. This will apply aggregations per each unique customer."]}),"\n",(0,n.jsxs)(t.li,{children:["Count the number of orders per customer using ",(0,n.jsx)(t.code,{children:"count(order_id)"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Retrieve the total amount spent by the customer using ",(0,n.jsx)(t.code,{children:"sum(order_amount)"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["View customers who made less than three orders. To do so, add the ",(0,n.jsx)(t.strong,{children:"Having"})," condition ",(0,n.jsx)(t.code,{children:"count(order_id) < 3"}),"."]}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);