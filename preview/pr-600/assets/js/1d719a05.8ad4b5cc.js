"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[38667],{8737:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"analysts/development/gems/visual-expression-builder/use-the-expression-builder","title":"Use visual expressions","description":"Use the Expression Builder","source":"@site/docs/analysts/development/gems/visual-expression-builder/use-the-visual-expression-builder.md","sourceDirName":"analysts/development/gems/visual-expression-builder","slug":"/analysts/use-visual-expression-builder","permalink":"/prophecy-docs-staging/preview/pr-600/analysts/use-visual-expression-builder","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"how-to","permalink":"/prophecy-docs-staging/preview/pr-600/tags/how-to"},{"inline":true,"label":"development","permalink":"/prophecy-docs-staging/preview/pr-600/tags/development"},{"inline":true,"label":"visual","permalink":"/prophecy-docs-staging/preview/pr-600/tags/visual"},{"inline":true,"label":"functions","permalink":"/prophecy-docs-staging/preview/pr-600/tags/functions"},{"inline":true,"label":"expression","permalink":"/prophecy-docs-staging/preview/pr-600/tags/expression"},{"inline":true,"label":"sql","permalink":"/prophecy-docs-staging/preview/pr-600/tags/sql"}],"version":"current","frontMatter":{"title":"Use visual expressions","id":"use-the-expression-builder","slug":"/analysts/use-visual-expression-builder","description":"Use the Expression Builder","tags":["how-to","development","visual","functions","expression","sql"]},"sidebar":"mySidebar","previous":{"title":"Visual expressions reference","permalink":"/prophecy-docs-staging/preview/pr-600/analysts/visual-expression-builder-reference"},"next":{"title":"Variant schema","permalink":"/prophecy-docs-staging/preview/pr-600/analysts/variant-schema"}}');var o=n(74848),r=n(28453);const t={title:"Use visual expressions",id:"use-the-expression-builder",slug:"/analysts/use-visual-expression-builder",description:"Use the Expression Builder",tags:["how-to","development","visual","functions","expression","sql"]},l=void 0,c={},d=[{value:"Navigate to the Visual Expression Builder",id:"navigate-to-the-visual-expression-builder",level:2},{value:"Build an expression",id:"build-an-expression",level:2},{value:"Build using the Simple Expression mode",id:"build-using-the-simple-expression-mode",level:3},{value:"Join example",id:"join-example",level:4},{value:"Build using the Comparison mode",id:"build-using-the-comparison-mode",level:3},{value:"Reformat example",id:"reformat-example",level:4},{value:"Aggregate example",id:"aggregate-example",level:4},{value:"Build using the Grouping mode",id:"build-using-the-grouping-mode",level:3},{value:"Filter example",id:"filter-example",level:4},{value:"Tips",id:"tips",level:2},{value:"Run and Verify the output",id:"run-and-verify-the-output",level:2}];function a(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"Develop your SQL expressions by using the Visual Expression Builder, which shows you available columns and functions that you can use to build your expressions."}),"\n",(0,o.jsx)(s.h2,{id:"navigate-to-the-visual-expression-builder",children:"Navigate to the Visual Expression Builder"}),"\n",(0,o.jsx)(s.p,{children:"The Visual Expression Builder is supported wherever you see Visual and Code views within your transformation gems."}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Create or open an existing transformation gem, and select the ",(0,o.jsx)(s.strong,{children:"Visual"})," view."]}),"\n"]}),"\n",(0,o.jsx)(s.admonition,{type:"note",children:(0,o.jsx)(s.p,{children:"The view you select persists across your gems."})}),"\n",(0,o.jsx)(s.p,{children:"All of the expressions you build using the Visual Expression Builder are converted to code in the gem and model code views. Similarly, edits you make in the Code view, whether it's in an expression or condition editor, will be converted into Visual view."}),"\n",(0,o.jsx)(s.p,{children:"This allows you to take advantage of both Visual and Code views when building your expressions."}),"\n",(0,o.jsx)(s.h2,{id:"build-an-expression",children:"Build an expression"}),"\n",(0,o.jsx)(s.p,{children:"Using the Visual Expression Builder, you can build an expression using the following modes:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Simple Expression"}),": This mode allows you to choose an expression, like a column, function, or Case statement."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Comparison"}),": This mode allows you to compare two simple expressions. You have the option of using conditions, such as ",(0,o.jsx)(s.code,{children:"IF"})," and ",(0,o.jsx)(s.code,{children:"ELSEIF"})," statements."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Grouping"}),": This mode allows you to build complex conditions by allowing the combinations of comparision expressions using logical operators ",(0,o.jsx)(s.code,{children:"AND"})," or ",(0,o.jsx)(s.code,{children:"OR"}),"."]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"See which gems support which modes in the following table:"}),"\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Simple Expression mode"}),(0,o.jsx)(s.th,{children:"Comparison mode"}),(0,o.jsx)(s.th,{children:"Grouping mode"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Aggregate"}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.img,{alt:"Tick",src:n(21333).A+"",width:"24",height:"24"})}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.img,{alt:"Tick",src:n(21333).A+"",width:"24",height:"24"})}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.img,{alt:"Tick",src:n(90750).A+"",width:"24",height:"24"})})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Filter"}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.img,{alt:"Tick",src:n(90750).A+"",width:"24",height:"24"})}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.img,{alt:"Tick",src:n(90750).A+"",width:"24",height:"24"})}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.img,{alt:"Tick",src:n(21333).A+"",width:"24",height:"24"})})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Join"}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.img,{alt:"Tick",src:n(21333).A+"",width:"24",height:"24"})}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.img,{alt:"Tick",src:n(21333).A+"",width:"24",height:"24"})}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.img,{alt:"Tick",src:n(21333).A+"",width:"24",height:"24"})})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Reformat"}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.img,{alt:"Tick",src:n(21333).A+"",width:"24",height:"24"})}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.img,{alt:"Tick",src:n(21333).A+"",width:"24",height:"24"})}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.img,{alt:"Tick",src:n(90750).A+"",width:"24",height:"24"})})]})]})]}),"\n",(0,o.jsx)(s.h3,{id:"build-using-the-simple-expression-mode",children:"Build using the Simple Expression mode"}),"\n",(0,o.jsx)(s.p,{children:"Let's use a Join gem to build simple expressions."}),"\n",(0,o.jsx)(s.h4,{id:"join-example",children:"Join example"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Join gem using Expression mode",src:n(77263).A+"",width:"2620",height:"1507"})}),"\n",(0,o.jsxs)(s.p,{children:["In our Join example, we want to join the ",(0,o.jsx)(s.code,{children:"in0"})," account table with the ",(0,o.jsx)(s.code,{children:"in1"})," expected revenue table matching the account IDs."]}),"\n",(0,o.jsx)(s.p,{children:"To set up the join condition, follow these steps:"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["After creating the Join gem, in the Join section, click ",(0,o.jsx)(s.strong,{children:"+Add Condition"}),". An option to Select expression appears."]}),"\n",(0,o.jsxs)(s.li,{children:["Click ",(0,o.jsx)(s.strong,{children:"Select expression"})," and select ",(0,o.jsx)(s.strong,{children:"Column"}),". Search for or click to select ",(0,o.jsx)(s.code,{children:"in0.id"})," from the populated list. An option to Select operator appears."]}),"\n",(0,o.jsxs)(s.li,{children:["Click ",(0,o.jsx)(s.strong,{children:"Select operator"})," and select the Comparison operator ",(0,o.jsx)(s.code,{children:"equals"}),". An option to Select expression appears."]}),"\n",(0,o.jsxs)(s.li,{children:["Click ",(0,o.jsx)(s.strong,{children:"Select expression"})," and select ",(0,o.jsx)(s.strong,{children:"Column"}),". Search for or click to select ",(0,o.jsx)(s.code,{children:"in1.ACCOUNT_ID"})," from the populated list."]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"To set up the simple expressions, follow these steps:"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["In the Expressions section, click ",(0,o.jsx)(s.strong,{children:"Add Column +"}),". A new expression row appears."]}),"\n",(0,o.jsxs)(s.li,{children:["Click ",(0,o.jsx)(s.strong,{children:"target_column"}),", and then search for or click to select ",(0,o.jsx)(s.code,{children:"ACCOUNT_ID"})," from the populated list."]}),"\n",(0,o.jsxs)(s.li,{children:["Click ",(0,o.jsx)(s.strong,{children:"Select expression"})," and select ",(0,o.jsx)(s.strong,{children:"Column"}),". Search for or click to select ",(0,o.jsx)(s.code,{children:"in0.ID"})," from the populated list."]}),"\n",(0,o.jsx)(s.li,{children:"Repeat steps 1 to 3 to set up the rest of the matching columns."}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"build-using-the-comparison-mode",children:"Build using the Comparison mode"}),"\n",(0,o.jsx)(s.p,{children:"Let's use a Reformat gem and a Aggregate gem to build comparison expressions."}),"\n",(0,o.jsx)(s.h4,{id:"reformat-example",children:"Reformat example"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Reformat gem using Comparison mode",src:n(91837).A+"",width:"2620",height:"1505"})}),"\n",(0,o.jsx)(s.p,{children:"In our Reformat example, we want to stratify the accounts based on their annual revenues. Each condition we set up is limited to one comparison."}),"\n",(0,o.jsx)(s.p,{children:"To set up the comparison expressions, follow these steps:"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["After creating the Reformat gem, click ",(0,o.jsx)(s.strong,{children:"target_column"}),", and then search for or click to select ",(0,o.jsx)(s.code,{children:"ANNUALREVENUE"})," from the populated list."]}),"\n",(0,o.jsxs)(s.li,{children:["Click ",(0,o.jsx)(s.strong,{children:"Select expression"})," and select ",(0,o.jsx)(s.strong,{children:"Conditional"}),". A ",(0,o.jsx)(s.code,{children:"WHEN"})," clause appears."]}),"\n",(0,o.jsxs)(s.li,{children:["For ",(0,o.jsx)(s.code,{children:"WHEN"}),", click ",(0,o.jsx)(s.strong,{children:"Select expression"})," and select ",(0,o.jsx)(s.strong,{children:"Function"}),". Search for and click to select ",(0,o.jsx)(s.code,{children:"TRY_CAST"}),", which converts a value of one data type into another data type. An option to select source_string_expr appears."]}),"\n",(0,o.jsxs)(s.li,{children:["Click ",(0,o.jsx)(s.strong,{children:"source_string_expr"})," and select ",(0,o.jsx)(s.strong,{children:"Column"}),". Search for or click to select ",(0,o.jsx)(s.code,{children:"ANNUALREVENUE AS FLOAT"})," from the populated list."]}),"\n",(0,o.jsxs)(s.li,{children:["Click ",(0,o.jsx)(s.strong,{children:"Select operator"})," and select the Comparison operator ",(0,o.jsx)(s.code,{children:"less than"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:["Click ",(0,o.jsx)(s.strong,{children:"Select expression"})," and select ",(0,o.jsx)(s.strong,{children:"Value"}),". Enter ",(0,o.jsx)(s.code,{children:"1000000"})," as the value.","\n",(0,o.jsx)(s.admonition,{type:"tip",children:(0,o.jsxs)(s.p,{children:["Whenever you enter a numerical or boolean value, a checkbox appears on the value dialog giving you the option to ",(0,o.jsx)(s.strong,{children:"Check to read value as string"}),"."]})}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["For ",(0,o.jsx)(s.code,{children:"THEN"}),", click ",(0,o.jsx)(s.strong,{children:"Select expression"})," and select ",(0,o.jsx)(s.strong,{children:"Value"}),". Enter ",(0,o.jsx)(s.code,{children:"Low Revenue"})," as the value."]}),"\n",(0,o.jsxs)(s.li,{children:["Click ",(0,o.jsx)(s.strong,{children:"+"})," on the next line and select ",(0,o.jsx)(s.strong,{children:"Add CASE"})," to add another ",(0,o.jsx)(s.code,{children:"WHEN"})," clause."]}),"\n",(0,o.jsx)(s.li,{children:"Repeat steps 3 to 8 to set up the rest of the comparison expressions."}),"\n",(0,o.jsxs)(s.li,{children:["Click ",(0,o.jsx)(s.strong,{children:"+"})," on the next line and select ",(0,o.jsx)(s.strong,{children:"Add ELSE"})," to add an ",(0,o.jsx)(s.code,{children:"ELSE"})," statement.","\n",(0,o.jsx)(s.admonition,{type:"note",children:(0,o.jsxs)(s.p,{children:["You can add multiple ",(0,o.jsx)(s.code,{children:"CASES"})," of the ",(0,o.jsx)(s.code,{children:"WHEN"})," clause, but you can only have one ",(0,o.jsx)(s.code,{children:"ELSE"})," statement."]})}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["Click ",(0,o.jsx)(s.strong,{children:"Select expression"})," and select ",(0,o.jsx)(s.strong,{children:"Value"}),". Enter ",(0,o.jsx)(s.code,{children:"Unknown"})," as the value."]}),"\n"]}),"\n",(0,o.jsx)(s.h4,{id:"aggregate-example",children:"Aggregate example"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Aggregate gem using Comparison mode",src:n(81862).A+"",width:"2620",height:"1507"})}),"\n",(0,o.jsxs)(s.p,{children:["In our Aggregate example, we want to use other conditional expressions, such as ",(0,o.jsx)(s.code,{children:"IF"}),", to set a threshold limit for ",(0,o.jsx)(s.code,{children:"ACCOUNT_ID"})," using a configuration variable."]}),"\n",(0,o.jsx)(s.p,{children:"To set up additional comparison expressions, follow these steps:"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["After creating and setting up the initial Aggregate gem, hover your pointer between two expression rows and click ",(0,o.jsx)(s.strong,{children:"+"})," to add a condition. You're given the option to insert another column or an ",(0,o.jsx)(s.code,{children:"IF"})," or ",(0,o.jsx)(s.code,{children:"FOR"})," condition."]}),"\n",(0,o.jsxs)(s.li,{children:["Select ",(0,o.jsx)(s.strong,{children:"IF"}),". An ",(0,o.jsx)(s.code,{children:"IF"})," condition appears."]}),"\n",(0,o.jsxs)(s.li,{children:["Click ",(0,o.jsx)(s.strong,{children:"Select expression"})," and select ",(0,o.jsx)(s.strong,{children:"Configuration Variable"}),". Search for or click to select ",(0,o.jsx)(s.code,{children:"id_threshold"})," from the populated list."]}),"\n",(0,o.jsxs)(s.li,{children:["Click ",(0,o.jsx)(s.strong,{children:"Select operator"})," and select the Comparison operator ",(0,o.jsx)(s.code,{children:"greater than"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:["Click ",(0,o.jsx)(s.strong,{children:"Select expression"})," and select ",(0,o.jsx)(s.strong,{children:"Value"}),". Enter ",(0,o.jsx)(s.code,{children:"50"})," as the value."]}),"\n",(0,o.jsxs)(s.li,{children:["Optional: You can hover your pointer below the express row you just created and click ",(0,o.jsx)(s.strong,{children:"+"})," to add another condition. You're now given additional options to insert an ",(0,o.jsx)(s.code,{children:"ELSEIF"})," or ",(0,o.jsx)(s.code,{children:"ELSE"})," condition."]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"build-using-the-grouping-mode",children:"Build using the Grouping mode"}),"\n",(0,o.jsx)(s.p,{children:"Let's use a Filter gem to build grouping expressions."}),"\n",(0,o.jsx)(s.h4,{id:"filter-example",children:"Filter example"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Filter gem using Grouping mode",src:n(89377).A+"",width:"2620",height:"1507"})}),"\n",(0,o.jsx)(s.p,{children:"In our Filter example, we want to filter for the following:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Total expected revenue that ",(0,o.jsx)(s.code,{children:"is not null"})]}),"\n",(0,o.jsxs)(s.li,{children:["Total amounts that are greater than ",(0,o.jsx)(s.code,{children:"100000"})]}),"\n",(0,o.jsxs)(s.li,{children:["Latest closed quarters that equals ",(0,o.jsx)(s.code,{children:"2023Q2"})," or ",(0,o.jsx)(s.code,{children:"2024Q2"})]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"To set up the grouping expressions, follow these steps:"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["After creating the Filer gem, click ",(0,o.jsx)(s.strong,{children:"Add condition"}),". An option to Select expression appears."]}),"\n",(0,o.jsxs)(s.li,{children:["Click ",(0,o.jsx)(s.strong,{children:"Select expression"})," and select ",(0,o.jsx)(s.strong,{children:"Column"}),". Search for or click to select ",(0,o.jsx)(s.code,{children:"TOTAL_EXPECTED_REVENUE"})," from the populated list. An option to Select operator appears."]}),"\n",(0,o.jsxs)(s.li,{children:["Click ",(0,o.jsx)(s.strong,{children:"Select operator"})," and select the Existence check ",(0,o.jsx)(s.code,{children:"is not null"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:["Click ",(0,o.jsx)(s.strong,{children:"+ Add Condition"}),". A new expression row appears."]}),"\n",(0,o.jsxs)(s.li,{children:["Click ",(0,o.jsx)(s.strong,{children:"Select expression"})," and select ",(0,o.jsx)(s.strong,{children:"Column"}),". Search for or click to select ",(0,o.jsx)(s.code,{children:"TOTAL_AMOUNT"})," from the populated list. An option to Select operator appears."]}),"\n",(0,o.jsxs)(s.li,{children:["Click ",(0,o.jsx)(s.strong,{children:"Select operator"})," and select the Comparison operator ",(0,o.jsx)(s.code,{children:"greater than"}),". An option to Select expression appears."]}),"\n",(0,o.jsxs)(s.li,{children:["Click ",(0,o.jsx)(s.strong,{children:"Select expression"})," and select ",(0,o.jsx)(s.strong,{children:"Value"}),". Enter ",(0,o.jsx)(s.code,{children:"100000"})," as the value."]}),"\n",(0,o.jsxs)(s.li,{children:["Click ",(0,o.jsx)(s.strong,{children:"Add Group"}),". A grouped expression row appears."]}),"\n",(0,o.jsxs)(s.li,{children:["Click ",(0,o.jsx)(s.strong,{children:"Select expression"})," and select ",(0,o.jsx)(s.strong,{children:"Column"}),". Search for or click to select ",(0,o.jsx)(s.code,{children:"LATEST_CLOSED_QTR"})," from the populated list. An option to Select operator appears."]}),"\n",(0,o.jsxs)(s.li,{children:["Click ",(0,o.jsx)(s.strong,{children:"Select operator"})," and select the Comparison operator ",(0,o.jsx)(s.code,{children:"equals"}),". An option to Select expression appears."]}),"\n",(0,o.jsxs)(s.li,{children:["Click ",(0,o.jsx)(s.strong,{children:"Select expression"})," and select ",(0,o.jsx)(s.strong,{children:"Value"}),". Enter ",(0,o.jsx)(s.code,{children:"2023Q3"})," as the value."]}),"\n",(0,o.jsxs)(s.li,{children:["Click ",(0,o.jsx)(s.strong,{children:"+ Add Condition"})," and repeat steps 9 to 11 to set up the other ",(0,o.jsx)(s.code,{children:"OR"})," condition.","\n",(0,o.jsx)(s.admonition,{type:"tip",children:(0,o.jsxs)(s.p,{children:["You can have any number of groups and nestings (a group within a group). And you can change the grouping conditions between ",(0,o.jsx)(s.code,{children:"AND"})," and ",(0,o.jsx)(s.code,{children:"OR"})," by clicking on the labels."]})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"tips",children:"Tips"}),"\n",(0,o.jsx)(s.p,{children:"Here are some additional tips to keep in mind when using the Visual Expression Builder:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"The expression dropdowns support search."}),"\n",(0,o.jsxs)(s.li,{children:["Each argument of your function is another expression since you have the same expression options to choose from.","\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"You can add optional arguments to your functions."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.li,{children:"You can drag and drop your comparison expressions."}),"\n",(0,o.jsx)(s.li,{children:"Just as with conditions, you can also drag and drop your grouping expressions."}),"\n",(0,o.jsx)(s.li,{children:"You can delete individual expressions, conditions, and groupings by clicking the trash icon at the end of the rows."}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"run-and-verify-the-output",children:"Run and Verify the output"}),"\n",(0,o.jsx)(s.p,{children:"Run the pipeline up to and including the gem with your expression, and observe the resulting data sample."}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Click the ",(0,o.jsx)(s.strong,{children:"Play"})," button on either the canvas or the gem."]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Once the code has finished running, you can verify the results to make sure they match your expectations. This data is same as what you see in ",(0,o.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-600/analysts/data-explorer",children:"interims view"}),". By testing and verifying your expressions, you can ensure that your data analysis tasks are accurate and reliable."]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},21333:(e,s,n)=>{n.d(s,{A:()=>i});const i="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgIGNsYXNzPSJzYy1jcnJzenQgZVdpeXN0IHVpLWljb24gdW5kZWZpbmVkIj4KICAgIDx0aXRsZT4mbHQ7Q2hlY2ttYXJrSWNvbiB0eXBlPSJsaWdodCIvJmd0OzwvdGl0bGU+CiAgICA8cGF0aCBmaWxsPSIjMDZCNkQ0IiBkPSJNMTkuNDU5NyA2LjAwMDYyQzE5LjA3MDkgNi4wMTE5NSAxOC43MDE4IDYuMTc0MTQgMTguNDMwNSA2LjQ1Mjg1TDkuNTA4NzkgMTUuMzc0Nkw1LjU3NzE0IDExLjQ0MjlDNS40MzkyIDExLjI5OTMgNS4yNzM5NyAxMS4xODQ2IDUuMDkxMTQgMTEuMTA1NUM0LjkwODMyIDExLjAyNjUgNC43MTE1NiAxMC45ODQ4IDQuNTEyNCAxMC45ODI4QzQuMzEzMjMgMTAuOTgwNyA0LjExNTY3IDExLjAxODUgMy45MzEyNyAxMS4wOTM4QzMuNzQ2ODcgMTEuMTY5IDMuNTc5MzUgMTEuMjgwNCAzLjQzODUxIDExLjQyMTJDMy4yOTc2OCAxMS41NjIgMy4xODYzNiAxMS43Mjk2IDMuMTExMDcgMTEuOTEzOUMzLjAzNTc5IDEyLjA5ODMgMi45OTgwNSAxMi4yOTU5IDMuMDAwMDggMTIuNDk1MUMzLjAwMjEgMTIuNjk0MiAzLjA0Mzg1IDEyLjg5MSAzLjEyMjg2IDEzLjA3MzhDMy4yMDE4OCAxMy4yNTY3IDMuMzE2NTggMTMuNDIxOSAzLjQ2MDI1IDEzLjU1OThMOC40NTAzNCAxOC41NDk5QzguNzMxMSAxOC44MzA2IDkuMTExODIgMTguOTg4MiA5LjUwODc5IDE4Ljk4ODJDOS45MDU3NSAxOC45ODgyIDEwLjI4NjUgMTguODMwNiAxMC41NjcyIDE4LjU0OTlMMjAuNTQ3NCA4LjU2OTc0QzIwLjc2MzQgOC4zNTk0IDIwLjkxMDggOC4wODg3NiAyMC45NzA0IDcuNzkzMjRDMjEuMDMgNy40OTc3MiAyMC45OTkxIDcuMTkxMDkgMjAuODgxNSA2LjkxMzQ3QzIwLjc2NCA2LjYzNTg2IDIwLjU2NTQgNi40MDAxOSAyMC4zMTE3IDYuMjM3MzFDMjAuMDU4IDYuMDc0NDQgMTkuNzYxMSA1Ljk5MTk0IDE5LjQ1OTcgNi4wMDA2MloiPjwvcGF0aD4KPC9zdmc+Cg=="},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>l});var i=n(96540);const o={},r=i.createContext(o);function t(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(r.Provider,{value:s},e.children)}},77263:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/join-visual-expression-builder-5fa488af6b956273820217ffe8446c71.png"},81862:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/aggregate-visual-expression-builder-e819c3bdbabf53a0c4b0c2ffb9b5582b.png"},89377:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/filter-visual-expression-builder-51af95efb5a61a6902c15daf71f8cdac.png"},90750:(e,s,n)=>{n.d(s,{A:()=>i});const i="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgIGNsYXNzPSJzYy1jcnJzenQgZVdpeXN0IHVpLWljb24gdW5kZWZpbmVkIj4KICAgIDx0aXRsZT4mbHQ7WEJhZGdlSWNvbiB0eXBlPSJjdXN0b20iLyZndDs8L3RpdGxlPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNGNjNENjgiCiAgICAgICAgICBkPSJNNC45MzkzNCA0LjkzOTM0QzUuNTI1MTMgNC4zNTM1NSA2LjQ3NDg3IDQuMzUzNTUgNy4wNjA2NiA0LjkzOTM0TDEyIDkuODc4NjhMMTYuOTM5MyA0LjkzOTM0QzE3LjUyNTEgNC4zNTM1NSAxOC40NzQ5IDQuMzUzNTUgMTkuMDYwNyA0LjkzOTM0QzE5LjY0NjQgNS41MjUxMyAxOS42NDY0IDYuNDc0ODcgMTkuMDYwNyA3LjA2MDY2TDE0LjEyMTMgMTJMMTkuMDYwNyAxNi45MzkzQzE5LjY0NjQgMTcuNTI1MSAxOS42NDY0IDE4LjQ3NDkgMTkuMDYwNyAxOS4wNjA3QzE4LjQ3NDkgMTkuNjQ2NCAxNy41MjUxIDE5LjY0NjQgMTYuOTM5MyAxOS4wNjA3TDEyIDE0LjEyMTNMNy4wNjA2NiAxOS4wNjA3QzYuNDc0ODcgMTkuNjQ2NCA1LjUyNTEzIDE5LjY0NjQgNC45MzkzNCAxOS4wNjA3QzQuMzUzNTUgMTguNDc0OSA0LjM1MzU1IDE3LjUyNTEgNC45MzkzNCAxNi45MzkzTDkuODc4NjggMTJMNC45MzkzNCA3LjA2MDY2QzQuMzUzNTUgNi40NzQ4NyA0LjM1MzU1IDUuNTI1MTMgNC45MzkzNCA0LjkzOTM0WiI+PC9wYXRoPgo8L3N2Zz4K"},91837:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/reformat-visual-expression-builder-5f9835f4df7601eedcdca42f021b35a2.png"}}]);