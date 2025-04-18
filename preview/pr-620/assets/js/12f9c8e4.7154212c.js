"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[90007],{28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var t=s(96540);const l={},r=t.createContext(l);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(r.Provider,{value:n},e.children)}},90198:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>o,frontMatter:()=>i,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"analysts/development/gems/prepare/multi-column-rename","title":"MultiColumnRename","description":"Rename multiple columns in your dataset in a systematic way","source":"@site/docs/analysts/development/gems/prepare/multi-column-rename.md","sourceDirName":"analysts/development/gems/prepare","slug":"/analysts/multi-column-rename","permalink":"/prophecy-docs-staging/preview/pr-620/analysts/multi-column-rename","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-620/tags/gems"},{"inline":true,"label":"analyst","permalink":"/prophecy-docs-staging/preview/pr-620/tags/analyst"},{"inline":true,"label":"prepare","permalink":"/prophecy-docs-staging/preview/pr-620/tags/prepare"}],"version":"current","frontMatter":{"title":"MultiColumnRename","id":"multi-column-rename","slug":"/analysts/multi-column-rename","description":"Rename multiple columns in your dataset in a systematic way","tags":["gems","analyst","prepare"]},"sidebar":"mySidebar","previous":{"title":"Limit","permalink":"/prophecy-docs-staging/preview/pr-620/analysts/limit"},"next":{"title":"MultiColumnEdit","permalink":"/prophecy-docs-staging/preview/pr-620/analysts/multi-column-edit"}}');var l=s(74848),r=s(28453);const i={title:"MultiColumnRename",id:"multi-column-rename",slug:"/analysts/multi-column-rename",description:"Rename multiple columns in your dataset in a systematic way",tags:["gems","analyst","prepare"]},d=void 0,c={},a=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function h(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{class:"badge",children:"SQL"}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.p,{children:"The MultiColumnRename gem can be used to systematically rename multiple columns at once."}),"\n",(0,l.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Field"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Select columns to rename"}),(0,l.jsx)(n.td,{children:"The set of columns that you will rename."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Rename method"}),(0,l.jsxs)(n.td,{children:["The way you will rename columns. ",(0,l.jsx)("br",{}),"You can either add a prefix/suffix, or choose advanced rename (SQL expression)."]})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.p,{children:"Assume you have the following table."}),"\n",(0,l.jsx)("div",{class:"table-example",children:(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"DatePrediction"}),(0,l.jsx)(n.th,{children:"TemperatureCelsius"}),(0,l.jsx)(n.th,{children:"HumidityPercent"}),(0,l.jsx)(n.th,{children:"WindSpeed"}),(0,l.jsx)(n.th,{children:"Condition"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"2025-03-01"}),(0,l.jsx)(n.td,{children:"15"}),(0,l.jsx)(n.td,{children:"65"}),(0,l.jsx)(n.td,{children:"10"}),(0,l.jsx)(n.td,{children:"Sunny"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"2025-03-02"}),(0,l.jsx)(n.td,{children:"17"}),(0,l.jsx)(n.td,{children:"70"}),(0,l.jsx)(n.td,{children:"12"}),(0,l.jsx)(n.td,{children:"Cloudy"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"2025-03-03"}),(0,l.jsx)(n.td,{children:"16"}),(0,l.jsx)(n.td,{children:"68"}),(0,l.jsx)(n.td,{children:"11"}),(0,l.jsx)(n.td,{children:"Rainy"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"2025-03-04"}),(0,l.jsx)(n.td,{children:"14"}),(0,l.jsx)(n.td,{children:"72"}),(0,l.jsx)(n.td,{children:"9"}),(0,l.jsx)(n.td,{children:"Sunny"})]})]})]})}),"\n",(0,l.jsxs)(n.p,{children:["To standardize column names by converting them to lowercase, use the ",(0,l.jsx)(n.strong,{children:"Advanced rename"})," option in the MultiColumnRename gem with a custom SQL expression."]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Create a ",(0,l.jsx)(n.strong,{children:"MultiColumnRename"})," gem."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Open the gem configuration and stay in the ",(0,l.jsx)(n.strong,{children:"Visual"})," view."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Under ",(0,l.jsx)(n.strong,{children:"Select columns to rename"}),", select all columns."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["For the ",(0,l.jsx)(n.strong,{children:"Rename method"}),", choose ",(0,l.jsx)(n.strong,{children:"Advanced rename"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click ",(0,l.jsx)(n.strong,{children:"Select expression > Function"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Search for and select the ",(0,l.jsx)(n.code,{children:"lower"})," function."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Inside of the ",(0,l.jsx)(n.code,{children:"lower"})," function, click ",(0,l.jsx)(n.strong,{children:"expr > Custom Code"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Inside of the code box, write ",(0,l.jsx)(n.code,{children:"column_name"}),". This applies the function to the column name."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click ",(0,l.jsx)(n.strong,{children:"Done"})," on the code box, and then click ",(0,l.jsx)(n.strong,{children:"Save"})," on your gem."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"After saving and running the gem, all selected columns will be renamed using the lower function. In this case, all column names should be lowercase in the output table."}),"\n",(0,l.jsx)("div",{class:"table-example",children:(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"dateprediction"}),(0,l.jsx)(n.th,{children:"temperaturecelsius"}),(0,l.jsx)(n.th,{children:"humiditypercent"}),(0,l.jsx)(n.th,{children:"windspeed"}),(0,l.jsx)(n.th,{children:"condition"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"2025-03-01"}),(0,l.jsx)(n.td,{children:"15"}),(0,l.jsx)(n.td,{children:"65"}),(0,l.jsx)(n.td,{children:"10"}),(0,l.jsx)(n.td,{children:"Sunny"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"2025-03-02"}),(0,l.jsx)(n.td,{children:"17"}),(0,l.jsx)(n.td,{children:"70"}),(0,l.jsx)(n.td,{children:"12"}),(0,l.jsx)(n.td,{children:"Cloudy"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"2025-03-03"}),(0,l.jsx)(n.td,{children:"16"}),(0,l.jsx)(n.td,{children:"68"}),(0,l.jsx)(n.td,{children:"11"}),(0,l.jsx)(n.td,{children:"Rainy"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"2025-03-04"}),(0,l.jsx)(n.td,{children:"14"}),(0,l.jsx)(n.td,{children:"72"}),(0,l.jsx)(n.td,{children:"9"}),(0,l.jsx)(n.td,{children:"Sunny"})]})]})]})})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}}}]);