"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[91174],{4714:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/insert-and-overwrite-dcafa5dad5349feebdc2d97948161c15.png"},5694:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/specify-columns-ecdf99808fe90e29eba3014e413507a4.png"},15325:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"data-modeling/gems/target-models/write-options","title":"Write Options","description":"Write Options of Target Models","source":"@site/docs/data-modeling/gems/target-models/write-options.md","sourceDirName":"data-modeling/gems/target-models","slug":"/engineers/write-options-target-model","permalink":"/prophecy-docs-staging/preview/pr-593/engineers/write-options-target-model","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"concept","permalink":"/prophecy-docs-staging/preview/pr-593/tags/concept"},{"inline":true,"label":"model","permalink":"/prophecy-docs-staging/preview/pr-593/tags/model"},{"inline":true,"label":"write options","permalink":"/prophecy-docs-staging/preview/pr-593/tags/write-options"},{"inline":true,"label":"SQL","permalink":"/prophecy-docs-staging/preview/pr-593/tags/sql"},{"inline":true,"label":"scd2","permalink":"/prophecy-docs-staging/preview/pr-593/tags/scd-2"}],"version":"current","frontMatter":{"title":"Write Options","id":"write-options","slug":"/engineers/write-options-target-model","description":"Write Options of Target Models","tags":["concept","model","write options","SQL","scd2"]},"sidebar":"mySidebar","previous":{"title":"Type and Format","permalink":"/prophecy-docs-staging/preview/pr-593/engineers/type-and-format-target-model"},"next":{"title":"Execution","permalink":"/prophecy-docs-staging/preview/pr-593/engineers/data-model-execution"}}');var i=t(74848),r=t(28453);const d={title:"Write Options",id:"write-options",slug:"/engineers/write-options-target-model",description:"Write Options of Target Models",tags:["concept","model","write options","SQL","scd2"]},a=void 0,l={},o=[{value:"Overwrite",id:"overwrite",level:2},{value:"Append",id:"append",level:2},{value:"Merge",id:"merge",level:2},{value:"Specify columns",id:"specify-columns",level:3},{value:"Example A",id:"example-a",level:4},{value:"SCD2",id:"scd2",level:3},{value:"Example B",id:"example-b",level:4},{value:"Insert and overwrite",id:"insert-and-overwrite",level:3},{value:"Example C",id:"example-c",level:4},{value:"Replace where",id:"replace-where",level:3},{value:"Example D",id:"example-d",level:4},{value:"Additional information",id:"additional-information",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Write Options"})," tab lets you determine how you will store your processed data. These settings are important if your data will change over time. There are three main write modes that you can choose from."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Overwrite"}),": Replace your table with new data."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Append"}),": Add new data without changing the old data."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Merge"}),": Update existing data while keeping track of changes over time. There are also additional merge approaches that you can select for this write mode."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To select write modes, you must set the Target model ",(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-593/engineers/type-and-format-target-model",children:"Type & Format"})," to ",(0,i.jsx)(n.strong,{children:"Table"}),"."]}),"\n",(0,i.jsx)(n.admonition,{title:"Providers",type:"info",children:(0,i.jsx)(n.p,{children:"The write modes available will depend on which data provider you use (Databricks or Snowflake)."})}),"\n",(0,i.jsx)(n.h2,{id:"overwrite",children:"Overwrite"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Overwrite"})," mode will replace the stored data entirely with new data on each run. This is the default write mode for all types and formats. When the write mode overwrites the table, the schema has to match. This is often the right approach for staging and intermediate tables, but it's rarely what you'd want for final tables."]}),"\n",(0,i.jsx)(n.h2,{id:"append",children:"Append"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Append"})," mode will add new rows to the table on each run. This works best if your table doesn't require a unique key per record, and you don't mind having duplicate records. If you need to ensure unique keys, use the ",(0,i.jsx)(n.strong,{children:"Merge"})," write mode instead."]}),"\n",(0,i.jsx)(n.h2,{id:"merge",children:"Merge"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Merge"})," mode will integrate new data by updating existing rows and inserting new ones. It ensures data consistency and maintains unique keys in the target table.\nIf a unique key is specified, it will update old records with values from new records that match on the key column."]}),"\n",(0,i.jsx)(n.p,{children:"There are four merge approaches to choose from:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Specify columns: Merges specific columns and updates existing records that match on a unique key."}),"\n",(0,i.jsx)(n.li,{children:"SCD2: Preserves historical data changes by tracking record validity and creating new records."}),"\n",(0,i.jsx)(n.li,{children:"Insert and overwrite: Replaces existing records and inserts new ones in one operation."}),"\n",(0,i.jsx)(n.li,{children:"Replace where: Replaces existing records with new records based on certain conditions."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"specify-columns",children:"Specify columns"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Specify columns"})," approach lets you customize the columns included in your data queries by selecting, deselecting, and reordering columns."]}),"\n",(0,i.jsx)("div",{class:"fixed-table",children:(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Unique Key"}),(0,i.jsx)(n.td,{children:"The key used to match existing records in the target dataset for merging."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Use Predicate"}),(0,i.jsx)(n.td,{children:"Lets you add conditions that specify when to apply the merge."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Use a condition to filter data or incremental runs"}),(0,i.jsx)(n.td,{children:"Enables applying conditions for filtering the incoming data into the table."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Merge Columns"}),(0,i.jsx)(n.td,{children:"Specifies which columns to update during the merge. If empty, the merge includes all columns."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Exclude Columns"}),(0,i.jsx)(n.td,{children:"Defines columns that should be excluded from the merge operation."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"On Schema Change"}),(0,i.jsxs)(n.td,{children:["Specifies how schema changes should be handled during the merge process.",(0,i.jsxs)("ul",{style:{margin:0},children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"ignore"}),": Newly added columns will not be written to the model. This is the default option."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"fail"}),": Triggers an error message when the source and target schemas diverge."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"append_new_columns"}),": Append new columns to the existing table."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"sync_all_columns"}),": Adds any new columns to the existing table, and removes any columns that are now missing. Includes data type changes. This option uses the output of the previous gem."]})]})]})]})]})]})}),"\n",(0,i.jsx)(n.h4,{id:"example-a",children:"Example A"}),"\n",(0,i.jsxs)(n.p,{children:["Consider a scenario where you have an ",(0,i.jsx)(n.strong,{children:"ORDERS"})," table with a column called ",(0,i.jsx)(n.em,{children:"ORDER_ID"}),". In this case, you want to update the shipping status for existing orders without affecting any other fields. When new records are added, if an ",(0,i.jsx)(n.em,{children:"ORDER_ID"})," already exists in the table, only the ",(0,i.jsx)(n.em,{children:"SHIPPING_STATUS"})," column should be updated, and all other fields should remain unchanged."]}),"\n",(0,i.jsxs)(n.p,{children:["By using the ",(0,i.jsx)(n.strong,{children:"specify columns"})," merge approach, the merge operation targets only the ",(0,i.jsx)(n.em,{children:"SHIPPING_STATUS"})," column, ensuring that it is updated while preserving the values in all other columns based on the matching ",(0,i.jsx)(n.em,{children:"ORDER_ID"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Specify columns",src:t(5694).A+"",width:"2620",height:"1507"})}),"\n",(0,i.jsx)(n.h3,{id:"scd2",children:"SCD2"}),"\n",(0,i.jsx)(n.p,{children:"SCD2 (Slowly Changing Dimensions Type 2) is a method for managing historical data changes in data warehouses. It tracks changes in dimension records over time, preserving both current and historical data. SCD2 captures all changes in the target model, with null values representing new, active, and valid rows. Prophecy simplifies SCD2 by offering it as a model write option, using a visual interface to configure writes and retain data history."}),"\n",(0,i.jsx)("div",{class:"fixed-table",children:(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Unique Key"}),(0,i.jsx)(n.td,{children:"The key used to match existing records in the target dataset for merging."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Invalidate deleted rows"}),(0,i.jsx)(n.td,{children:"When enabled, records that match deleted rows will be marked as no longer valid."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Determine new records by checking timestamp column"}),(0,i.jsx)(n.td,{children:"Recognizes new records by the time from the timestamp column."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Determine new records by looking for differences in column values"}),(0,i.jsx)(n.td,{children:"Recognizes new records based on a change of values in one or more specified columns."})]})]})]})}),"\n",(0,i.jsx)(n.h4,{id:"example-b",children:"Example B"}),"\n",(0,i.jsxs)(n.p,{children:["Imagine you have an ORDERS table with a ",(0,i.jsx)(n.em,{children:"SHIPPING_STATUS"}),' field. As orders are processed, the status may change from "pending" to "shipped". However, simply updating the status field would overwrite the previous value, making it impossible to analyze how long an order stayed in the "pending" state.']}),"\n",(0,i.jsx)(n.p,{children:"To solve this, SCD2 adds a new row each time the status changes, rather than overwriting the existing data. For example, when an order\u2019s status changes, a new row is added with the updated status, and the previous row is preserved with the relevant historical information. Here's how this works:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Table 1"}),': When an order is first created, the status is "pending".']}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"ORDER_ID"}),(0,i.jsx)(n.th,{children:"SHIPPING_STATUS"}),(0,i.jsx)(n.th,{children:"UPDATED_AT"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"pending"}),(0,i.jsx)(n.td,{children:"2024-01-01"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"pending"}),(0,i.jsx)(n.td,{children:"2024-01-02"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Table 2"}),": When the status changes, the previous record remains, and a new row is added with the updated status. Additionally, new columns are added to record the validity of the record. In this case, the order was pending until ",(0,i.jsx)(n.strong,{children:"2024-01-02"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"ORDER_ID"}),(0,i.jsx)(n.th,{children:"SHIPPING_STATUS"}),(0,i.jsx)(n.th,{children:"UPDATED_AT"}),(0,i.jsx)(n.th,{children:"valid_from"}),(0,i.jsx)(n.th,{children:"valid_to"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"pending"}),(0,i.jsx)(n.td,{children:"2024-01-01"}),(0,i.jsx)(n.td,{children:"2024-01-01"}),(0,i.jsx)(n.td,{children:"2024-01-02"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"shipped"}),(0,i.jsx)(n.td,{children:"2024-01-02"}),(0,i.jsx)(n.td,{children:"2024-01-02"}),(0,i.jsx)(n.td,{children:"null"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"pending"}),(0,i.jsx)(n.td,{children:"2024-01-02"}),(0,i.jsx)(n.td,{children:"2024-01-02"}),(0,i.jsx)(n.td,{children:"null"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["If the data doesn't have a date but instead has ",(0,i.jsx)(n.code,{children:"null"}),", then it means that the data is currently valid."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"SCD2 shipping",src:t(65360).A+"",width:"2620",height:"1507"})}),"\n",(0,i.jsx)(n.h3,{id:"insert-and-overwrite",children:"Insert and overwrite"}),"\n",(0,i.jsx)(n.p,{children:"The Insert and Overwrite approach allows you to overwrite existing records and insert new ones in a single operation, ensuring data accuracy. This is particularly helpful when using Databricks."}),"\n",(0,i.jsx)("div",{class:"fixed-table",children:(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Partition By"}),(0,i.jsx)(n.td,{children:"Defines the partitioning column used to determine which data to replace during the merge."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"On Schema Change"}),(0,i.jsxs)(n.td,{children:["Specifies how schema changes should be handled during the merge process.",(0,i.jsxs)("ul",{style:{margin:0},children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"ignore"}),": Newly added columns will not be written to the model. This is the default option."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"fail"}),": Triggers an error message when the source and target schemas diverge."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"append_new_columns"}),": Append new columns to the existing table."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"sync_all_columns"}),": Adds any new columns to the existing table, and removes any columns that are now missing. Includes data type changes. This option uses the output of the previous gem."]})]})]})]})]})]})}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.strong,{children:"Partition By"})," is specified, dbt runs an atomic insert overwrite statement that dynamically replaces all partitions included in your query. If no partition is specified, the strategy replaces the entire table, overriding all existing data with only the new records while maintaining the original schema."]}),"\n",(0,i.jsx)(n.h4,{id:"example-c",children:"Example C"}),"\n",(0,i.jsxs)(n.p,{children:["Consider a scenario where you have a ",(0,i.jsx)(n.strong,{children:"CUSTOMERS"})," table and want to replace all partitions based on the ",(0,i.jsx)(n.em,{children:"CUSTOMER_ID"})," column. Instead of updating individual records, this approach replaces all partitions that match the query conditions with new data. This ensures that only the most current records are retained while outdated partitions are efficiently replaced."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Insert and overwrite",src:t(4714).A+"",width:"2684",height:"1571"})}),"\n",(0,i.jsx)(n.h3,{id:"replace-where",children:"Replace where"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Replace where"})," approach lets you update records that match the condition defined in the predicate. This is particularly helpful when using Snowflake."]}),"\n",(0,i.jsx)("div",{class:"fixed-table",children:(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Use Predicate"}),(0,i.jsx)(n.td,{children:"Lets you add conditions that specify when to apply the merge."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Use a condition to filter data or incremental runs"}),(0,i.jsx)(n.td,{children:"Enables applying conditions for filtering the incoming data into the table."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"On Schema Change"}),(0,i.jsxs)(n.td,{children:["Specifies how schema changes should be handled during the merge process.",(0,i.jsxs)("ul",{style:{margin:0},children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"ignore"}),": Newly added columns will not be written to the model. This is the default option."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"fail"}),": Triggers an error message when the source and target schemas diverge."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"append_new_columns"}),": Append new columns to the existing table."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"sync_all_columns"}),": Adds any new columns to the existing table, and removes any columns that are now missing. Includes data type changes. This option uses the output of the previous gem."]})]})]})]})]})]})}),"\n",(0,i.jsx)(n.h4,{id:"example-d",children:"Example D"}),"\n",(0,i.jsxs)(n.p,{children:["In a ",(0,i.jsx)(n.strong,{children:"TRANSACTIONS"})," table, you may want to update the payment status only for transactions made within the last 30 days. By defining a predicate such as ",(0,i.jsx)(n.code,{children:"TRANSACTION_DATE >= DATE_SUB(CURRENT_DATE(), 30)"}),", only records created within the last 30 days should be modified, ensuring efficient updates while preserving historical data."]}),"\n",(0,i.jsx)(n.h2,{id:"additional-information",children:"Additional information"}),"\n",(0,i.jsxs)(n.p,{children:["Target models are incremental models. They update data by processing only new or changed records instead of reloading all data. This makes updates faster and reduces resource use. Once you've selected your write mode, you'll see in the code view that the table is stored as a ",(0,i.jsx)(n.code,{children:'"materialized": "incremental"'})," table, with ",(0,i.jsx)(n.code,{children:'"incremental_strategy"'})," set to whichever write mode and merge approach you choose."]}),"\n",(0,i.jsxs)(n.p,{children:["Incremental models can be configured to include an optional ",(0,i.jsx)(n.code,{children:"on_schema_change"})," parameter to enable additional control when incremental model columns change. These options enable dbt to continue running incremental models in the presence of schema changes, resulting in fewer ",(0,i.jsx)(n.code,{children:"--full-refresh"})," scenarios and saving query costs."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>a});var s=t(96540);const i={},r=s.createContext(i);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}},65360:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/scd-2-column-values-2516456192aff4e54b002fecfef8300b.png"}}]);