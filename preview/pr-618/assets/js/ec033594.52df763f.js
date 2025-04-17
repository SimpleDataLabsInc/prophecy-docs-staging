"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[63251],{28453:(e,t,l)=>{l.d(t,{R:()=>d,x:()=>r});var n=l(96540);const i={},s=n.createContext(i);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(s.Provider,{value:t},e.children)}},38200:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>x,contentTitle:()=>r,default:()=>o,frontMatter:()=>d,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"analysts/development/gems/join-split/join","title":"Join","description":"Join two or more datasets","source":"@site/docs/analysts/development/gems/join-split/join.md","sourceDirName":"analysts/development/gems/join-split","slug":"/analysts/join","permalink":"/prophecy-docs-staging/preview/pr-618/analysts/join","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-618/tags/gems"},{"inline":true,"label":"analyst","permalink":"/prophecy-docs-staging/preview/pr-618/tags/analyst"},{"inline":true,"label":"join","permalink":"/prophecy-docs-staging/preview/pr-618/tags/join"}],"version":"current","frontMatter":{"title":"Join","id":"join","slug":"/analysts/join","description":"Join two or more datasets","tags":["gems","analyst","join"]},"sidebar":"mySidebar","previous":{"title":"Reformat","permalink":"/prophecy-docs-staging/preview/pr-618/analysts/reformat"},"next":{"title":"SQL statement","permalink":"/prophecy-docs-staging/preview/pr-618/analysts/sql-statement"}}');var i=l(74848),s=l(28453);const d={title:"Join",id:"join",slug:"/analysts/join",description:"Join two or more datasets",tags:["gems","analyst","join"]},r=void 0,x={},h=[{value:"Input and Output",id:"input-and-output",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Join conditions",id:"join-conditions",level:3},{value:"Expressions",id:"expressions",level:3},{value:"Example",id:"example",level:3},{value:"Join types",id:"join-types",level:2},{value:"Employees",id:"employees",level:3},{value:"Departments",id:"departments",level:3},{value:"INNER JOIN",id:"inner-join",level:3},{value:"LEFT JOIN / LEFT OUTER JOIN",id:"left-join--left-outer-join",level:3},{value:"RIGHT JOIN / RIGHT OUTER JOIN",id:"right-join--right-outer-join",level:3},{value:"FULL JOIN / FULL OUTER JOIN",id:"full-join--full-outer-join",level:3},{value:"CROSS JOIN",id:"cross-join",level:3},{value:"NATURAL INNER JOIN",id:"natural-inner-join",level:3},{value:"NATURAL LEFT OUTER JOIN",id:"natural-left-outer-join",level:3},{value:"NATURAL RIGHT OUTER JOIN",id:"natural-right-outer-join",level:3},{value:"NATURAL FULL OUTER JOIN",id:"natural-full-outer-join",level:3}];function c(e){const t={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{class:"badge",children:"SQL"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.p,{children:"Use the Join gem to combine data from two or more tables based on a shared column value. This helps you link related information, such as customer details and purchase history, or user activity logs and account records."}),"\n",(0,i.jsx)(t.h2,{id:"input-and-output",children:"Input and Output"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Port"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"in0"})}),(0,i.jsx)(t.td,{children:"The first input table in the join."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"in1"})}),(0,i.jsx)(t.td,{children:"The second input table in the join."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"inN"})}),(0,i.jsx)(t.td,{children:"Optional: Additional input table for the join."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"out"})}),(0,i.jsx)(t.td,{children:"A single table that results from the join operation(s)."})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["To add additional input ports, click ",(0,i.jsx)(t.code,{children:"+"})," next to ",(0,i.jsx)(t.strong,{children:"Ports"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(t.p,{children:"To configure the Join gem, you need to define join conditions and select the columns that will appear in the output table."}),"\n",(0,i.jsx)(t.h3,{id:"join-conditions",children:"Join conditions"}),"\n",(0,i.jsx)(t.p,{children:"You can add one or more join conditions to the gem depending on the number of input tables added."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameters"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Join type"}),(0,i.jsx)(t.td,{children:"The different join types you can choose from. These may vary by SQL provider. Learn about different join types below."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Join condition"}),(0,i.jsx)(t.td,{children:"The condition that matches rows between tables."})]})]})]}),"\n",(0,i.jsx)(t.admonition,{title:"Custom Join",type:"info",children:(0,i.jsx)(t.p,{children:"If you want to use a type of join that is available in your SQL warehouse, you can type the name of that join directly in Prophecy."})}),"\n",(0,i.jsx)(t.h3,{id:"expressions",children:"Expressions"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameters"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Expressions"}),(0,i.jsx)(t.td,{children:"Defines the output columns that will be returned by the gem. If left empty, Prophecy passes through all the input columns without any modifications."})]})})]}),"\n",(0,i.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.p,{children:["Assume you have two tables: ",(0,i.jsx)(t.em,{children:"orders"})," and ",(0,i.jsx)(t.em,{children:"customers"}),". You want the orders table to include customer information, so you need to join the tables based on customer ID. You only want to preserve records in the output that have a match. To do so:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Connect ",(0,i.jsx)(t.strong,{children:"orders"})," to ",(0,i.jsx)(t.strong,{children:"in0"})," and ",(0,i.jsx)(t.strong,{children:"customers"})," to ",(0,i.jsx)(t.strong,{children:"in1"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Choose ",(0,i.jsx)(t.strong,{children:"Inner Join"})," as the join type."]}),"\n",(0,i.jsxs)(t.li,{children:["If using a visual expression, use the following join condition: ",(0,i.jsxs)(t.strong,{children:["in0.CustomerID ",(0,i.jsx)(t.em,{children:"equals"})," in1.customer_id"]})]}),"\n",(0,i.jsxs)(t.li,{children:["If using the code expression, use the following SQL join condition: ",(0,i.jsx)(t.strong,{children:"in0.CustomerID = in1.customer_id"})]}),"\n",(0,i.jsxs)(t.li,{children:["Leave the ",(0,i.jsx)(t.strong,{children:"Expressions"})," tile empty."]}),"\n",(0,i.jsx)(t.li,{children:"Save and run the gem."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"join-types",children:"Join types"}),"\n",(0,i.jsxs)(t.p,{children:["Suppose there are two tables, ",(0,i.jsx)(t.em,{children:"Employees"})," and ",(0,i.jsx)(t.em,{children:"Departments"}),", with the following contents:"]}),"\n",(0,i.jsx)(t.h3,{id:"employees",children:"Employees"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"EMPLOYEE_ID"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"EMPLOYEE_NAME"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"DEPARTMENT_ID"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Alice"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"10"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Bob"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"20"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"3"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Charlie"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"30"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"4"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"David"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NULL"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"5"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Eve"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"20"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"departments",children:"Departments"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"DEPARTMENT_ID"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"DEPARTMENT_NAME"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"10"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"HR"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"20"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Engineering"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"30"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Sales"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"40"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Marketing"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"inner-join",children:"INNER JOIN"}),"\n",(0,i.jsx)(t.p,{children:"Inner Join will return columns from both the tables and only the matching records as long as the condition is satisfied."}),"\n",(0,i.jsxs)(t.p,{children:["For example, if the Join condition provided was ",(0,i.jsx)(t.code,{children:"employees.department_id = departments.department_id"}),", the sample query would be:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"SELECT e.employee_id, e.employee_name, d.department_name\nFROM employees e\nINNER JOIN departments d\nON e.department_id = d.department_id;\n"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"EMPLOYEE_ID"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"EMPLOYEE_NAME"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"DEPARTMENT_NAME"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Alice"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"HR"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Bob"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Engineering"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"5"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Eve"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Engineering"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"3"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Charlie"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Sales"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"left-join--left-outer-join",children:"LEFT JOIN / LEFT OUTER JOIN"}),"\n",(0,i.jsx)(t.p,{children:"Left Join (or Left Outer join) will return columns from both the tables and match records with records from the left table. The result-set will contain null for the rows for which there is no matching row on the right side."}),"\n",(0,i.jsxs)(t.p,{children:["For example, if the Join condition provided was ",(0,i.jsx)(t.code,{children:"employees.department_id = departments.department_id"}),", the sample query would be:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"SELECT e.employee_id, e.employee_name, d.department_name\nFROM employees e\nLEFT JOIN departments d\nON e.department_id = d.department_id;\n"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"EMPLOYEE_ID"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"EMPLOYEE_NAME"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"DEPARTMENT_NAME"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Alice"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"HR"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Bob"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Engineering"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"3"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Charlie"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Sales"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"4"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"David"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NULL"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"5"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Eve"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Engineering"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"right-join--right-outer-join",children:"RIGHT JOIN / RIGHT OUTER JOIN"}),"\n",(0,i.jsx)(t.p,{children:"Right Join (or Right Outer join) will return columns from both the tables and match records with records from the right table. The result-set will contain null for the rows for which there is no matching row on the left side."}),"\n",(0,i.jsxs)(t.p,{children:["For example, if the Join condition provided was ",(0,i.jsx)(t.code,{children:"employees.department_id = departments.department_id"}),", the sample query would be:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"SELECT e.employee_id, e.employee_name, d.department_name\nFROM employees e\nOUTER JOIN departments d\nON e.department_id = d.department_id;\n"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"EMPLOYEE_ID"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"EMPLOYEE_NAME"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"DEPARTMENT_NAME"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Alice"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"HR"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Bob"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Engineering"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"5"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Eve"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Engineering"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"3"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Charlie"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Sales"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NULL"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NULL"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Marketing"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"full-join--full-outer-join",children:"FULL JOIN / FULL OUTER JOIN"}),"\n",(0,i.jsx)(t.p,{children:"Full Outer Join will return columns from both the tables and matching records with records from the left table and records from the right table. The result-set will contain NULL values for the rows for which there is no matching."}),"\n",(0,i.jsxs)(t.p,{children:["For example, if the Join condition provided was ",(0,i.jsx)(t.code,{children:"employees.department_id = departments.department_id"}),", the sample query would be:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"SELECT e.employee_id, e.employee_name, d.department_name\nFROM employees e\nFULL OUTER JOIN departments d\nON e.department_id = d.department_id;\n"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"EMPLOYEE_ID"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"EMPLOYEE_NAME"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"DEPARTMENT_NAME"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Alice"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"HR"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Bob"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Engineering"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"3"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Charlie"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Sales"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"4"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"David"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NULL"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"5"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Eve"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Engineering"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NULL"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NULL"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Marketing"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"cross-join",children:"CROSS JOIN"}),"\n",(0,i.jsx)(t.p,{children:"Returns the Cartesian product of two datasets. It combines all rows from both tables. Cross Join will not have any Join conditions specified."}),"\n",(0,i.jsx)(t.p,{children:"For example, the sample query would be:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"SELECT e.employee_id, e.employee_name, d.department_name\nFROM employees e\nCROSS JOIN departments d;\n"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"EMPLOYEE_ID"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"EMPLOYEE_NAME"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"DEPARTMENT_NAME"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Alice"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"HR"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Alice"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Engineering"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Alice"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Sales"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Alice"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Marketing"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Bob"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"HR"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Bob"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Engineering"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Bob"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Sales"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Bob"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Marketing"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"3"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Charlie"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"HR"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"3"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Charlie"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Engineering"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"3"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Charlie"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Sales"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"3"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Charlie"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Marketing"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"4"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"David"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"HR"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"4"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"David"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Engineering"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"4"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"David"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Sales"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"4"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"David"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Marketing"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"5"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Eve"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"HR"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"5"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Eve"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Engineering"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"5"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Eve"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Sales"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"5"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Eve"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Marketing"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"natural-inner-join",children:"NATURAL INNER JOIN"}),"\n",(0,i.jsx)(t.p,{children:"A natural join (or Natural Inner Join) is identical to an explicit Inner Join but it automatically joins columns with the same names in both tables. Natural Join will not have any join conditions specified."}),"\n",(0,i.jsx)(t.p,{children:"For example, the sample query would be:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"SELECT e.employee_id, e.employee_name, d.department_name\nFROM employees e\nCROSS JOIN departments d;\n"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"EMPLOYEE_ID"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"EMPLOYEE_NAME"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"DEPARTMENT_NAME"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Alice"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"HR"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Bob"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Engineering"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"5"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Eve"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Engineering"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"3"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Charlie"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Sales"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"natural-left-outer-join",children:"NATURAL LEFT OUTER JOIN"}),"\n",(0,i.jsx)(t.p,{children:"A natural Left Outer join (or Natural Left Join) is identical to an explicit Left Outer Join but it automatically joins columns with the same names in both tables. Natural Left Outer Join will not have any join conditions specified."}),"\n",(0,i.jsx)(t.p,{children:"For example, the sample query would be:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"SELECT e.employee_id, e.employee_name, d.department_name\nFROM employees e\nNATURAL LEFT OUTER JOIN departments d;\n"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"EMPLOYEE_ID"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"EMPLOYEE_NAME"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"DEPARTMENT_NAME"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Alice"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"HR"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Bob"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Engineering"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"3"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Charlie"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Sales"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"4"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"David"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NULL"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"5"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Eve"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Engineering"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"natural-right-outer-join",children:"NATURAL RIGHT OUTER JOIN"}),"\n",(0,i.jsx)(t.p,{children:"A natural Left Right join (or Natural Right Join) is identical to an explicit Right Outer Join but it automatically joins columns with the same names in both tables. Natural Right Outer Join will not have any join conditions specified."}),"\n",(0,i.jsx)(t.p,{children:"For example, the sample query would be:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"SELECT e.employee_id, e.employee_name, d.department_name\nFROM employees e\nNATURAL RIGHT OUTER JOIN departments d;\n"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"EMPLOYEE_ID"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"EMPLOYEE_NAME"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"DEPARTMENT_NAME"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Alice"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"HR"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Bob"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Engineering"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"5"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Eve"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Engineering"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"3"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Charlie"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Sales"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NULL"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NULL"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Marketing"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"natural-full-outer-join",children:"NATURAL FULL OUTER JOIN"}),"\n",(0,i.jsx)(t.p,{children:"A natural Full Outer join (or Natural Full Join) is identical to an explicit Full Outer Join but it automatically joins columns with the same names in both tables. Natural Full Outer Join will not have any join conditions specified."}),"\n",(0,i.jsx)(t.p,{children:"For example, the sample query would be:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"SELECT e.employee_id, e.employee_name, d.department_name\nFROM employees e\nNATURAL FULL OUTER JOIN departments d;\n"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"EMPLOYEE_ID"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"EMPLOYEE_NAME"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"DEPARTMENT_NAME"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Alice"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"HR"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Bob"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Engineering"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"3"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Charlie"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Sales"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"4"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"David"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NULL"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"5"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Eve"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Engineering"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NULL"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NULL"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Marketing"})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);