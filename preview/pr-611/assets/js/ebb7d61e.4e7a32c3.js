"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[91635],{6047:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"Spark/data-explorer/data-profile","title":"Data profiling","description":"Review a summary of data quality","source":"@site/docs/Spark/data-explorer/data-profile.md","sourceDirName":"Spark/data-explorer","slug":"/engineers/data-profile","permalink":"/prophecy-docs-staging/preview/pr-611/engineers/data-profile","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"data profile","permalink":"/prophecy-docs-staging/preview/pr-611/tags/data-profile"},{"inline":true,"label":"data quality","permalink":"/prophecy-docs-staging/preview/pr-611/tags/data-quality"}],"version":"current","frontMatter":{"title":"Data profiling","id":"data-profile","slug":"/engineers/data-profile","description":"Review a summary of data quality","tags":["data profile","data quality"]},"sidebar":"mySidebar","previous":{"title":"Data exploration","permalink":"/prophecy-docs-staging/preview/pr-611/engineers/data-explorer"},"next":{"title":"Business rules engine","permalink":"/prophecy-docs-staging/preview/pr-611/engineers/business-rules"}}');var t=l(74848),a=l(28453);const r={title:"Data profiling",id:"data-profile",slug:"/engineers/data-profile",description:"Review a summary of data quality",tags:["data profile","data quality"]},s=void 0,o={},c=[{value:"Enable data profile",id:"enable-data-profile",level:2},{value:"Quick profile",id:"quick-profile",level:2},{value:"Full profile",id:"full-profile",level:2}];function u(e){const n={admonition:"admonition",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"To quickly find a summary of your data statistics, view data profiles of your data samples in the Data Explorer. Use data profiling to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Find instant data insights"}),"\n",(0,t.jsx)(n.li,{children:"Detect anomalies and inconsistencies early"}),"\n",(0,t.jsx)(n.li,{children:"Visualize value distributions and data completeness"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"enable-data-profile",children:"Enable data profile"}),"\n",(0,t.jsxs)(n.p,{children:["Data profiling is most important ",(0,t.jsx)(n.strong,{children:"early"})," in your pipeline. To enable or disable data profiling per gem in the pipeline:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Open the gem action menu."}),"\n",(0,t.jsx)(n.li,{children:"Select or deselect the Data Profile checkbox."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Be conscious of how often you enable data profiling throughout the pipeline. This can add unnecessary computation time to your pipeline execution."})}),"\n",(0,t.jsx)(n.h2,{id:"quick-profile",children:"Quick profile"}),"\n",(0,t.jsx)(n.p,{children:"The data explorer includes data profiles that are generated on your sample data. You'll be able to see high-level statistics for each column, including:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Percent of non-blank values:"})," The percentage of values in the column that are not blank."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Percent of null values:"})," The percentage of values in the column that are null."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Percent of blank values:"})," The percentage of values in the column that are blank."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Most common values:"})," Displays the top four most frequent values in the column, along with the percentage of occurrences for each."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"full-profile",children:"Full profile"}),"\n",(0,t.jsxs)(n.p,{children:["When you open the data explorer, you'll only see the data profile of the data ",(0,t.jsx)(n.strong,{children:"sample"}),". When you load the full data profile, Prophecy generates a more in-depth analysis on ",(0,t.jsx)(n.strong,{children:"all of the records"})," in the interim dataset. The full profile displays the following information:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Data type"}),": The data type of the column."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Unique values"}),": The number of unique values in the column."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Longest value"}),": The longest value in the column and its length."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Shortest value"}),": The shortest value in the column and its length."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Most frequent value"}),": The most frequent value in the column and its number of occurrences."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Least frequent value"}),": The least frequent value in the column and its number of occurrences."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Minimum value"}),": The minimum value in the column."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Maximum value"}),": The maximum value in the column."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Average value length"}),": The average length of each value in the column."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Null values"}),": The percent and number of null values in the column."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Blank values"}),": The percent and number of blank values in the column."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Non-blank values"}),": The percent and number of non-blank values in the column."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Data summary"}),": An overview of the most common values in the column."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>r,x:()=>s});var i=l(96540);const t={},a=i.createContext(t);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);