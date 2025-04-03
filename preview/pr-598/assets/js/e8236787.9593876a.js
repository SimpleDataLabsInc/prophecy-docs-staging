"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[65443],{27963:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"data-modeling/gems/sql-gems","title":"SQL Gems","description":"Gems are data seeds, sources, transformations, and targets","source":"@site/docs/data-modeling/gems/gems.md","sourceDirName":"data-modeling/gems","slug":"/engineers/data-modeling-gems","permalink":"/prophecy-docs-staging/preview/pr-598/engineers/data-modeling-gems","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-598/tags/gems"},{"inline":true,"label":"transformation","permalink":"/prophecy-docs-staging/preview/pr-598/tags/transformation"},{"inline":true,"label":"source","permalink":"/prophecy-docs-staging/preview/pr-598/tags/source"},{"inline":true,"label":"target","permalink":"/prophecy-docs-staging/preview/pr-598/tags/target"},{"inline":true,"label":"cte","permalink":"/prophecy-docs-staging/preview/pr-598/tags/cte"}],"version":"current","frontMatter":{"title":"SQL Gems","id":"sql-gems","slug":"/engineers/data-modeling-gems","description":"Gems are data seeds, sources, transformations, and targets","tags":["gems","transformation","source","target","cte"]},"sidebar":"mySidebar","previous":{"title":"Models","permalink":"/prophecy-docs-staging/preview/pr-598/engineers/models"},"next":{"title":"Model sources","permalink":"/prophecy-docs-staging/preview/pr-598/engineers/model-sources"}}');var n=r(74848),a=r(28453);const i={title:"SQL Gems",id:"sql-gems",slug:"/engineers/data-modeling-gems",description:"Gems are data seeds, sources, transformations, and targets",tags:["gems","transformation","source","target","cte"]},d=void 0,o={},c=[{value:"What&#39;s next",id:"whats-next",level:2}];function l(e){const s={a:"a",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["In Prophecy and dbt, data ",(0,n.jsx)(s.a,{href:"/engineers/models",children:"models"})," are groups of SQL statements used to create a single table or view. Prophecy simplifies data modeling by visualizing the data model as a series of steps, each represented by a ",(0,n.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-598/gems",children:"gem"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Each gem corresponds to a SQL statement, which users can construct through an intuitive visual interface. Prophecy handles the underlying complexity by deciding whether each gem should generate a CTE or a subquery. Users simply configure the gem's interface, and Prophecy integrates the resulting SQL into the larger data model."}),"\n",(0,n.jsx)(s.p,{children:"The table below lists each gem available for data modeling."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Category"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-598/analysts/aggregate",children:"Aggregate"})}),(0,n.jsx)(s.td,{children:"Performs aggregation operations on datasets, such as computing sums, averages, and counts."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-598/analysts/bulk-column-expressions",children:"BulkColumnExpressions"})}),(0,n.jsx)(s.td,{children:"Applies expressions to multiple columns simultaneously."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-598/analysts/bulk-column-rename",children:"BulkColumnRename"})}),(0,n.jsx)(s.td,{children:"Renames multiple columns in a dataset in one operation."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-598/analysts/data-cleansing",children:"DataCleansing"})}),(0,n.jsx)(s.td,{children:"Identifies and corrects errors or inconsistencies in data formatting to improve quality."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-598/analysts/deduplicate",children:"Deduplicate"})}),(0,n.jsx)(s.td,{children:"Removes duplicate records from a dataset to ensure data uniqueness and integrity."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-598/analysts/dynamic-select",children:"DynamicSelect"})}),(0,n.jsx)(s.td,{children:"Selects columns from a dataset dynamically based on specified conditions or patterns."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-598/analysts/filter",children:"Filter"})}),(0,n.jsx)(s.td,{children:"Filters records in a dataset based on specified conditions, allowing for the selection of relevant data."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-598/analysts/flatten-schema",children:"FlattenSchema"})}),(0,n.jsx)(s.td,{children:"Converts nested or hierarchical data structures into a flat table format."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-598/analysts/join",children:"Join"})}),(0,n.jsx)(s.td,{children:"Combines two or more datasets based on a common key."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-598/analysts/limit",children:"Limit"})}),(0,n.jsx)(s.td,{children:"Restricts the number of records in a dataset to a specified number."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-598/analysts/macro",children:"Macro"})}),(0,n.jsx)(s.td,{children:"Defines reusable code snippets or functions that can be invoked across multiple models."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/engineers/model-sources",children:"Models"})}),(0,n.jsx)(s.td,{children:"Sequences of steps to perform SQL-based transformations that results in a single table."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-598/analysts/order-by",children:"OrderBy"})}),(0,n.jsx)(s.td,{children:"Sorts records in a dataset based on specified columns."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-598/analysts/reformat",children:"Reformat"})}),(0,n.jsx)(s.td,{children:"Changes the format or structure of data within a dataset, such as modifying date formats or string cases."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-598/analysts/rest-api",children:"RestAPI"})}),(0,n.jsx)(s.td,{children:"Integrates with RESTful APIs to fetch or send data so you can interact with external systems."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/engineers/model-sources",children:"Seed"})}),(0,n.jsx)(s.td,{children:"Provides initial data to a pipeline or model, often used for testing or as reference data."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-598/analysts/sql-statement",children:"SQLStatement"})}),(0,n.jsx)(s.td,{children:"Executes custom SQL statements within a pipeline or model, offering flexibility for complex transformations."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-598/analysts/window",children:"WindowFunction"})}),(0,n.jsx)(s.td,{children:"Performs calculations across a set of table rows related to the current row (like running totals or moving averages)."})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"whats-next",children:"What's next"}),"\n",(0,n.jsxs)(s.p,{children:["To understand the generic structure of a gem, review the ",(0,n.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-598/gems",children:"Gem"})," concept page. To understand how to use visual expressions in SQL gems, visit ",(0,n.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-598/analysts/visual-expression-builder",children:"Visual Gem Builder"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>d});var t=r(96540);const n={},a=t.createContext(n);function i(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);