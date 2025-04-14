"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[50097],{13779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"ci-cd/data-diff","title":"Data diff","description":"View the difference between a target dataset and an expected dataset","source":"@site/docs/ci-cd/data-diff.md","sourceDirName":"ci-cd","slug":"/engineers/data-diff","permalink":"/prophecy-docs-staging/preview/pr-615/engineers/data-diff","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"data diff","permalink":"/prophecy-docs-staging/preview/pr-615/tags/data-diff"},{"inline":true,"label":"target","permalink":"/prophecy-docs-staging/preview/pr-615/tags/target"}],"version":"current","frontMatter":{"title":"Data diff","id":"data-diff","slug":"/engineers/data-diff","description":"View the difference between a target dataset and an expected dataset","tags":["data diff","target"]},"sidebar":"mySidebar","previous":{"title":"Unit tests","permalink":"/prophecy-docs-staging/preview/pr-615/engineers/unit-tests"},"next":{"title":"Deployment","permalink":"/prophecy-docs-staging/preview/pr-615/engineers/deployment"}}');var s=n(74848),a=n(28453);const r={title:"Data diff",id:"data-diff",slug:"/engineers/data-diff",description:"View the difference between a target dataset and an expected dataset",tags:["data diff","target"]},d=void 0,l={},o=[{value:"Requirements",id:"requirements",level:2},{value:"What is data diff?",id:"what-is-data-diff",level:2},{value:"Overview",id:"overview",level:3},{value:"Unique and duplicated primary keys",id:"unique-and-duplicated-primary-keys",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Enable or disable",id:"enable-or-disable",level:2}];function h(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Data diffs can help you identify when pipeline outputs do not meet predefined expectations. This can be useful for:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Understanding the success of your pipeline migrations."}),"\n",(0,s.jsx)(t.li,{children:"Catching discrepancies before deploying pipelines to production."}),"\n",(0,s.jsx)(t.li,{children:"Detecting unintended schema changes in datasets over time."}),"\n",(0,s.jsx)(t.li,{children:"Identifying data mismatches when troubleshooting data transformation issues."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsx)(t.p,{children:"To compute a data diff, you need:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Prophecy 4.0 or later."})}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"A Prophecy Python project."})," Data diffs are not supported for Scala or SQL projects."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"ProphecyLibsPython 1.9.37 or later"})," as a dependency for your project. For more information, see ",(0,s.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-615/engineers/prophecy-libraries",children:"Prophecy libraries"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"An expected dataset"}),". It must be in Parquet or Databricks Catalog Table format."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"what-is-data-diff",children:"What is data diff?"}),"\n",(0,s.jsxs)(t.p,{children:["Data diffs are outputs of Target gems that show you differences between your target table and an expected table. Similar to a data sample, you can explore the data diff after ",(0,s.jsx)(t.a,{href:"/engineers/execution",children:"interactively running"})," a pipeline."]}),"\n",(0,s.jsx)(t.p,{children:"The data diff has four views:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Overview"}),": A summary that displays various high-level comparisons of the generated (target) and expected datasets. Review the following section to understand each statistic in more detail."]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Column differences"}),": The dataset schemas and the number of matching values for each column in both datasets."]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Values differences"}),": A table that displays side-by-side differences of every value in both datasets. This will show a sample of the data."]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Data samples"}),": Samples of the generated and expected datasets for data exploration."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Data diffs only temporarily appear in the pipeline. They are not persisted in your project."})}),"\n",(0,s.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"The following table provide in-depth descriptions of each statistic in the Overview tab of the data diff."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Datasets matching status"}),(0,s.jsx)(t.td,{children:"Whether the datasets are matching or not."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Number of columns matching"}),(0,s.jsx)(t.td,{children:"The number of columns that match. Two columns match if they have the same name and the same set of values."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Number of rows matching"}),(0,s.jsx)(t.td,{children:"The number of rows that match. Two rows match if they have the same key column(s) and the same values for each column."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Location"}),(0,s.jsx)(t.td,{children:"The location of the generated and expected datasets."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Primary keys"}),(0,s.jsx)(t.td,{children:"The primary keys defined in the data diff configuration."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Number of columns"}),(0,s.jsx)(t.td,{children:"The number of columns in the generated and expected datasets."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Number of rows"}),(0,s.jsx)(t.td,{children:"The number of rows in the generated and expected datasets."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Unique primary keys"}),(0,s.jsx)(t.td,{children:"The number of unique primary keys in the generated and expected datasets."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Duplicate primary keys"}),(0,s.jsx)(t.td,{children:"The number of duplicate keys in the generated and expected datasets."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"unique-and-duplicated-primary-keys",children:"Unique and duplicated primary keys"}),"\n",(0,s.jsx)(t.p,{children:"Prophecy only calculates the data diff on rows with unique primary keys. Why is that?"}),"\n",(0,s.jsxs)(t.p,{children:["Assume you have a the following table, where ",(0,s.jsx)(t.strong,{children:"first_name"})," and ",(0,s.jsx)(t.strong,{children:"last_name"})," are the primary keys:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"first_name"}),(0,s.jsx)(t.th,{children:"last_name"}),(0,s.jsx)(t.th,{children:"cust_id"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"John"}),(0,s.jsx)(t.td,{children:"Smith"}),(0,s.jsx)(t.td,{children:"23542"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"John"}),(0,s.jsx)(t.td,{children:"Smith"}),(0,s.jsx)(t.td,{children:"49203"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Jane"}),(0,s.jsx)(t.td,{children:"Doe"}),(0,s.jsx)(t.td,{children:"43291"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Jane"}),(0,s.jsx)(t.td,{children:"Brown"}),(0,s.jsx)(t.td,{children:"09312"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["If you try to compute the data diff ",(0,s.jsx)(t.strong,{children:"John Smith"}),", how will you know which row is the correct match? It is impossible to match the rows with 100% confidence. Because of this ambiguity, ",(0,s.jsx)(t.strong,{children:"Prophecy ignores rows with duplicated primary keys in the data diff."})]}),"\n",(0,s.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(t.p,{children:["Data diffs are configured in ",(0,s.jsx)(t.strong,{children:"Target"})," gems."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Open a Target gem in your pipeline."}),"\n",(0,s.jsxs)(t.li,{children:["In the top right of the gem dialog, click the ",(0,s.jsx)(t.strong,{children:"Options"})," (ellipses) menu."]}),"\n",(0,s.jsxs)(t.li,{children:["Select ",(0,s.jsx)(t.strong,{children:"Data Diff"}),". This adds the Data Diff step to your Target gem configuration."]}),"\n",(0,s.jsxs)(t.li,{children:["Open the ",(0,s.jsx)(t.strong,{children:"Data Diff"})," step."]}),"\n",(0,s.jsxs)(t.li,{children:["Fill in the required parameters and ",(0,s.jsx)(t.strong,{children:"Save"})," the gem."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Review the data diff configuration parameters in the following table."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Specify the key columns to join datasets on"}),(0,s.jsxs)(t.td,{children:['The column(s) that will match rows between datasets. In other words, rows are "joined" on these columns for comparison. Rows with duplicated primary keys ',(0,s.jsx)(t.strong,{children:"will not"})," be included in the data diff calculation. You can view the number of unique and duplicated primary keys in the ",(0,s.jsx)(t.strong,{children:"Overview"})," tab of the data diff."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Specify an alternative Parquet dataset path"}),(0,s.jsx)(t.td,{children:"The path to the expected dataset in Parquet format."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Specify an alternative dataset Catalog Table"}),(0,s.jsx)(t.td,{children:"The location of the Catalog Table in Databricks. This includes the database, schema (Unity Catalog only), and table names."})]})]})]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"The row order of the generated and expected dataset does not matter, as the rows are joined by keys, rather than row order."})}),"\n",(0,s.jsx)(t.h2,{id:"enable-or-disable",children:"Enable or disable"}),"\n",(0,s.jsx)(t.p,{children:"If you have configured data diff in your Target gem, Prophecy will automatically generate the data diff output. However, you can disable this feature from the gem action menu if needed. Disabling data diff (without deleting it) can be useful for large datasets, as it helps reduce computation time."})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var i=n(96540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);