"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[13395],{28453:(e,t,l)=>{l.d(t,{R:()=>r,x:()=>n});var s=l(96540);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}},30040:(e,t,l)=>{l.d(t,{A:()=>s});const s=l.p+"assets/images/delta_operations_eg1-17a89a0e851e87ffb3ef36e8e6cea0ab.png"},45971:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"Spark/gems/custom/delta-ops","title":"DeltaTableOperations","description":"Gem that encompasses some of the import side operations of Delta","source":"@site/docs/Spark/gems/custom/delta-table-operations.md","sourceDirName":"Spark/gems/custom","slug":"/engineers/delta-table-operations","permalink":"/prophecy-docs-staging/preview/pr-602/engineers/delta-table-operations","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"file","permalink":"/prophecy-docs-staging/preview/pr-602/tags/file"},{"inline":true,"label":"delta","permalink":"/prophecy-docs-staging/preview/pr-602/tags/delta"},{"inline":true,"label":"devops","permalink":"/prophecy-docs-staging/preview/pr-602/tags/devops"}],"version":"current","frontMatter":{"title":"DeltaTableOperations","id":"delta-ops","slug":"/engineers/delta-table-operations","description":"Gem that encompasses some of the import side operations of Delta","tags":["file","delta","devops"]},"sidebar":"mySidebar","previous":{"title":"SQLStatement","permalink":"/prophecy-docs-staging/preview/pr-602/engineers/sql-statement"},"next":{"title":"FileOperation","permalink":"/prophecy-docs-staging/preview/pr-602/engineers/file-operation"}}');var a=l(74848),i=l(28453),r=l(49235);const n={title:"DeltaTableOperations",id:"delta-ops",slug:"/engineers/delta-table-operations",description:"Gem that encompasses some of the import side operations of Delta",tags:["file","delta","devops"]},d=void 0,c={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Register table in catalog",id:"register-table-in-catalog",level:2},{value:"Vacuum table",id:"vacuum-table",level:2},{value:"Parameters",id:"vacuum-parameters",level:3},{value:"Optimize table",id:"optimize-table",level:2},{value:"Parameters",id:"optimize-parameters",level:3},{value:"Restore table",id:"restore-table",level:2},{value:"Parameters",id:"restore-parameters",level:3},{value:"Delete from table",id:"delete-from-table",level:2},{value:"Parameters",id:"delete-parameters",level:3},{value:"Drop table",id:"drop-table",level:2},{value:"FSCK Repair table",id:"fsck-repair-table",level:2}];function h(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.0.1+",scala_package_name:"",scala_package_version:"",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"Not Supported"}),"\n",(0,a.jsx)(t.p,{children:"Helps perform the following operations on Delta tables."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Register table in catalog"}),"\n",(0,a.jsx)(t.li,{children:"Vacuum table"}),"\n",(0,a.jsx)(t.li,{children:"Optimize table"}),"\n",(0,a.jsx)(t.li,{children:"Restore table"}),"\n",(0,a.jsx)(t.li,{children:"Delete from table"}),"\n",(0,a.jsx)(t.li,{children:"Drop table"}),"\n",(0,a.jsx)(t.li,{children:"FSCK Repair table"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Required"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Database name"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Database name"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"False"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Table name"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Table name"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"False"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"File path"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"File path for delta table"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"False"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Action"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Action to perform on the table"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"True"})]})]})]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"At least one value from table name or file path needs to be provided."})}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Example usage of Delta Table Operations Gem",src:l(30040).A+"",width:"3010",height:"1496"})}),"\n",(0,a.jsx)(t.h2,{id:"register-table-in-catalog",children:"Register table in catalog"}),"\n",(0,a.jsx)(t.p,{children:"This will register the data at mentioned file path as a table in the whichever Metadata catalog is available in your execution environment."}),"\n",(0,a.jsx)(t.h2,{id:"vacuum-table",children:"Vacuum table"}),"\n",(0,a.jsx)(t.p,{children:"Recursively vacuum directories associated with the Delta table. VACUUM removes all files from the table directory that are not managed by Delta, as well as data files that are no longer in the latest state of the transaction log for the table and are older than a retention threshold. The default threshold is 7 days."}),"\n",(0,a.jsxs)(t.p,{children:["To learn more about vacuum ",(0,a.jsx)(t.a,{href:"https://docs.databricks.com/spark/latest/spark-sql/language-manual/delta-vacuum.html",children:"click here"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"vacuum-parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Required"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Retention hours"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Retention threshold"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"False"})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"optimize-table",children:"Optimize table"}),"\n",(0,a.jsx)(t.p,{children:"Optimizes the layout of Delta Table data. Optionally optimize a subset of data or colocate data by column. If colocation is not specified, bin-packing optimization is performed by default."}),"\n",(0,a.jsxs)(t.p,{children:["To learn more about optimize ",(0,a.jsx)(t.a,{href:"https://docs.databricks.com/spark/latest/spark-sql/language-manual/delta-optimize.html",children:"click here"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"optimize-parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Required"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Where clause"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Optimize the subset of rows matching the given partition predicate. Only filters involving partition key attributes are supported."}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"False"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"ZOrder By"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"List of columns to perform ZOrder on"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"False"})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"restore-table",children:"Restore table"}),"\n",(0,a.jsx)(t.p,{children:"Restores a Delta table to an earlier state. Restoring to an earlier version number or a timestamp is supported."}),"\n",(0,a.jsx)(t.h3,{id:"restore-parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Required"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Restore via"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Restore the table via timestamp or version"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"False"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Value"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Value to restore on"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"False"})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"delete-from-table",children:"Delete from table"}),"\n",(0,a.jsxs)(t.p,{children:["Delete removes the data from the latest version of the Delta table that matches the specified condition. Please note that delete does not remove it from the physical storage until the older versions are explicitly ",(0,a.jsx)(t.a,{href:"#vacuum-table",children:"vacuumed"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"delete-parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Required"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Where clause"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Condition which needs to be satisfied to delete a row"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"True"})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"drop-table",children:"Drop table"}),"\n",(0,a.jsx)(t.p,{children:"This will drop the table from catalog and remove the files."}),"\n",(0,a.jsx)(t.h2,{id:"fsck-repair-table",children:"FSCK Repair table"}),"\n",(0,a.jsx)(t.p,{children:"Removes the file entries from the transaction log of a Delta table that can no longer be found in the underlying file system. This can happen when these files have been manually deleted."}),"\n",(0,a.jsxs)(t.p,{children:["To learn more about fsck repair ",(0,a.jsx)(t.a,{href:"https://docs.databricks.com/spark/latest/spark-sql/language-manual/delta-fsck.html",children:"click here"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},49235:(e,t,l)=>{l.d(t,{A:()=>a});l(96540);var s=l(74848);function a(e){return(0,s.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:e.python_package_name}),(0,s.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:e.scala_package_name}),(0,s.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,s.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,s.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,s.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,s.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Livy"}),(0,s.jsx)("span",{className:"right",children:e.livy})]})}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]})}}}]);