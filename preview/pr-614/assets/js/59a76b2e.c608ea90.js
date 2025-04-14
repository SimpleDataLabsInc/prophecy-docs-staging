"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[81938],{28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>o});var r=i(96540);const s={},d=r.createContext(s);function t(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(d.Provider,{value:n},e.children)}},69846:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"analysts/development/gems/transform/window","title":"Window","description":"Create moving aggregations and transformation","source":"@site/docs/analysts/development/gems/transform/window.md","sourceDirName":"analysts/development/gems/transform","slug":"/analysts/window","permalink":"/prophecy-docs-staging/preview/pr-614/analysts/window","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-614/tags/gems"},{"inline":true,"label":"analyst","permalink":"/prophecy-docs-staging/preview/pr-614/tags/analyst"},{"inline":true,"label":"transform","permalink":"/prophecy-docs-staging/preview/pr-614/tags/transform"}],"version":"current","frontMatter":{"title":"Window","id":"window","slug":"/analysts/window","description":"Create moving aggregations and transformation","tags":["gems","analyst","transform"]},"sidebar":"mySidebar","previous":{"title":"Aggregate","permalink":"/prophecy-docs-staging/preview/pr-614/analysts/aggregate"},"next":{"title":"DataCleansing","permalink":"/prophecy-docs-staging/preview/pr-614/analysts/data-cleansing"}}');var s=i(74848),d=i(28453);const t={title:"Window",id:"window",slug:"/analysts/window",description:"Create moving aggregations and transformation",tags:["gems","analyst","transform"]},o=void 0,a={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3},{value:"Ranking Functions with Window",id:"ranking-functions-with-window",level:4},{value:"Analytical Functions with Window",id:"analytical-functions-with-window",level:4},{value:"Aggregate Functions with Window",id:"aggregate-functions-with-window",level:4}];function l(e){const n={admonition:"admonition",code:"code",h3:"h3",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{class:"badge",children:"SQL"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.p,{children:["The WindowFunction lets you define a ",(0,s.jsx)(n.strong,{children:"WindowSpec"})," and apply window functions on a model."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Required"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Model"}),(0,s.jsx)(n.td,{children:"Input Source"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Target column"}),(0,s.jsx)(n.td,{children:"Output Column name"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Source expression"}),(0,s.jsx)(n.td,{children:"Window function expression to perform over the created Window"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Order columns"}),(0,s.jsxs)(n.td,{children:["Columns to order by in Window. Must be a numeric type column if a ",(0,s.jsx)(n.code,{children:"Range Frame"})," is selected"]}),(0,s.jsxs)(n.td,{children:["Required when ",(0,s.jsx)(n.code,{children:"Source expression"})," has a Ranking/Analytical function ",(0,s.jsx)(n.strong,{children:"OR"})," when ",(0,s.jsx)(n.code,{children:"Range Frame"})," is selected"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Partition column"}),(0,s.jsx)(n.td,{children:"Column to partition by in Window"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Row frame"}),(0,s.jsx)(n.td,{children:"Row based frame boundary to apply on Window"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Range frame"}),(0,s.jsx)(n.td,{children:"Range based frame boundary to apply on Window"}),(0,s.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"Order Columns"})," are not defined, an unbounded window frame ",(0,s.jsx)(n.code,{children:"(rowFrame, unboundedPreceding, unboundedFollowing)"})," is used by default."]})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"Order Columns"})," are defined, a growing window frame ",(0,s.jsx)(n.code,{children:"(rangeFrame, unboundedPreceding, currentRow)"})," is used by default."]})}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.h4,{id:"ranking-functions-with-window",children:"Ranking Functions with Window"}),"\n",(0,s.jsxs)(n.p,{children:["Examples of ranking functions are: ",(0,s.jsx)(n.code,{children:"row_number()"}),", ",(0,s.jsx)(n.code,{children:"rank()"}),", ",(0,s.jsx)(n.code,{children:"dense_rank()"})," and ",(0,s.jsx)(n.code,{children:"ntile()"})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Only the default window frame ",(0,s.jsx)(n.code,{children:"(rowFrame, unboundedPreceding, currentRow)"})," can be used with Ranking functions"]})}),"\n",(0,s.jsx)(n.h4,{id:"analytical-functions-with-window",children:"Analytical Functions with Window"}),"\n",(0,s.jsxs)(n.p,{children:["Examples of analytical functions are: ",(0,s.jsx)(n.code,{children:"lead()"}),", ",(0,s.jsx)(n.code,{children:"lag()"}),", ",(0,s.jsx)(n.code,{children:"cume_dist()"}),", etc."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Window frame for ",(0,s.jsx)(n.code,{children:"lead()"})," and ",(0,s.jsx)(n.code,{children:"lag()"})," can not be specified."]})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Only the default window frame ",(0,s.jsx)(n.code,{children:"(rangeFrame, unboundedPreceding, currentRow)"})," can be used with ",(0,s.jsx)(n.code,{children:"cume_dist()"})]})}),"\n",(0,s.jsx)(n.h4,{id:"aggregate-functions-with-window",children:"Aggregate Functions with Window"}),"\n",(0,s.jsxs)(n.p,{children:["Examples of analytical functions are: ",(0,s.jsx)(n.code,{children:"min()"}),", ",(0,s.jsx)(n.code,{children:"max()"}),", ",(0,s.jsx)(n.code,{children:"avg()"}),", etc."]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}}}]);