"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[43477],{28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>t});var i=s(96540);const r={},l=i.createContext(r);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(l.Provider,{value:n},e.children)}},78098:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"analysts/development/gems/visual-expression-builder/visual-expression-builder-reference","title":"Visual expressions reference","description":"Visual Expression Builder reference","source":"@site/docs/analysts/development/gems/visual-expression-builder/visual-expression-builder-reference.md","sourceDirName":"analysts/development/gems/visual-expression-builder","slug":"/analysts/visual-expression-builder-reference","permalink":"/prophecy-docs-staging/preview/pr-592/analysts/visual-expression-builder-reference","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"reference","permalink":"/prophecy-docs-staging/preview/pr-592/tags/reference"},{"inline":true,"label":"development","permalink":"/prophecy-docs-staging/preview/pr-592/tags/development"},{"inline":true,"label":"visual","permalink":"/prophecy-docs-staging/preview/pr-592/tags/visual"},{"inline":true,"label":"functions","permalink":"/prophecy-docs-staging/preview/pr-592/tags/functions"},{"inline":true,"label":"expression","permalink":"/prophecy-docs-staging/preview/pr-592/tags/expression"},{"inline":true,"label":"sql","permalink":"/prophecy-docs-staging/preview/pr-592/tags/sql"}],"version":"current","frontMatter":{"title":"Visual expressions reference","id":"visual-expression-builder-reference","slug":"/analysts/visual-expression-builder-reference","description":"Visual Expression Builder reference","tags":["reference","development","visual","functions","expression","sql"]},"sidebar":"mySidebar","previous":{"title":"Visual expression builder","permalink":"/prophecy-docs-staging/preview/pr-592/analysts/visual-expression-builder"},"next":{"title":"Use visual expressions","permalink":"/prophecy-docs-staging/preview/pr-592/analysts/use-visual-expression-builder"}}');var r=s(74848),l=s(28453);const o={title:"Visual expressions reference",id:"visual-expression-builder-reference",slug:"/analysts/visual-expression-builder-reference",description:"Visual Expression Builder reference",tags:["reference","development","visual","functions","expression","sql"]},t=void 0,a={},c=[{value:"Expression options",id:"expression-options",level:2},{value:"Operator options",id:"operator-options",level:2},{value:"Comparison operators",id:"comparison-operators",level:3},{value:"Existence checks",id:"existence-checks",level:3},{value:"Data types",id:"data-types",level:2},{value:"Booleon predicates",id:"booleon-predicates",level:3}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This page contains a reference of the different Visual Expression Builder components, which include the expression options, operator options, and data types."}),"\n",(0,r.jsx)(n.h2,{id:"expression-options",children:"Expression options"}),"\n",(0,r.jsx)(n.p,{children:"The Visual Expression Builder supports the following expression options:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Column"}),": Allows you to select an input column from your source tables. You can view all of the available input columns from under the dropdown menu or under ",(0,r.jsx)(n.strong,{children:"Input"})," on the left-hand side of the gem dialog."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Value"}),": Allows you to enter any kind of value.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If you enter a string value, it'll be considered as a string within quotes."}),"\n",(0,r.jsxs)(n.li,{children:["If you enter a number, it'll be considered as a numerical value, but you have the option to click to ",(0,r.jsx)(n.strong,{children:"Check to read value as string"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The same applies to a boolean value. For example, if you enter ",(0,r.jsx)(n.code,{children:"True"}),", then it'll be considered a boolean value unless you ",(0,r.jsx)(n.strong,{children:"Check to read value as string"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Function"}),": Includes a list of all of the function category groups and functions that are supported. The list displays each function description, including mandatory arguments."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Data type cast"}),": Allows you to cast a variant column into its appropriate data type. Instead of explicit casting, you can use ",(0,r.jsx)(n.code,{children:"TRY_CAST"})," to avoid errors by setting the data type to ",(0,r.jsx)(n.code,{children:"null"})," on failure.","\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["For Snowflake, ",(0,r.jsx)(n.code,{children:"TRY_CAST"})," is only supported on string type of data."]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Conditional"}),": Allows you to use a conditional ",(0,r.jsx)(n.code,{children:"WHEN"})," clause.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Within ",(0,r.jsx)(n.code,{children:"WHEN"}),", you use a comparison expression."]}),"\n",(0,r.jsxs)(n.li,{children:["Within ",(0,r.jsx)(n.code,{children:"THEN"})," you use a simple expression."]}),"\n",(0,r.jsxs)(n.li,{children:["You can add multiple ",(0,r.jsx)(n.code,{children:"CASES"})," of the ",(0,r.jsx)(n.code,{children:"WHEN"})," clause, but you can only have one ",(0,r.jsx)(n.code,{children:"ELSE"})," statement.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ELSE"})," also uses a simple expression."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["You can also add ",(0,r.jsx)(n.code,{children:"IF"}),", ",(0,r.jsx)(n.code,{children:"ELSEIF"}),", or ",(0,r.jsx)(n.code,{children:"FOR"})," conditions between each of your expressions.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"FOR"})," conditions take a variable name and an expression value."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"IF"})," and ",(0,r.jsx)(n.code,{children:"ELSEIF"})," conditions are considered comparisons."]}),"\n",(0,r.jsx)(n.li,{children:"These are available only in expressions tables in Aggregate, Join, and Reformat gems."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Configuration Variable"}),": Consists of ",(0,r.jsx)(n.strong,{children:"Model Variables"})," and ",(0,r.jsx)(n.strong,{children:"Project Variables"}),". You can see and edit your variables from the canvas settings by navigating to ",(0,r.jsx)(n.strong,{children:"..."})," > ",(0,r.jsx)(n.strong,{children:"Configuration"}),". When you select a project variable, you can add a default value if no value is set in the Configuration setting."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Incremental"}),": Allows you to use for advanced dbt configurations."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Custom Code"}),": Allows you can write your own custom code to create your own expressions that are not yet supported by the Visual Expression Builder. For example, you can use custom code to use mathematical operations, such as addition and subtraction. As you type, you'll be given suggestions."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"operator-options",children:"Operator options"}),"\n",(0,r.jsx)(n.p,{children:"The Visual Expression Builder supports the following operator options."}),"\n",(0,r.jsx)(n.h3,{id:"comparison-operators",children:"Comparison operators"}),"\n",(0,r.jsx)(n.p,{children:"Expressions can use the following comparison operators:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"equals"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"not equals"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"less than"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"less than or equal"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"greater than"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"greater than or equal"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"between"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"existence-checks",children:"Existence checks"}),"\n",(0,r.jsx)(n.p,{children:"Expressions support the following existence checks:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"is null"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"is not null"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"in"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"not in"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"data-types",children:"Data types"}),"\n",(0,r.jsx)(n.p,{children:"The Visual Expression Builder supports the following data types:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Basic"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Boolean"}),"\n",(0,r.jsx)(n.li,{children:"String - String / Varchar"}),"\n",(0,r.jsx)(n.li,{children:"Date & time - Date / Datetime / Timestamp / Timestamp NTZ"}),"\n",(0,r.jsx)(n.li,{children:"Number - Integer / Long / Short"}),"\n",(0,r.jsx)(n.li,{children:"Decimal number - Decimal / Double / Float"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Other"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Binary"}),"\n",(0,r.jsx)(n.li,{children:"Byte"}),"\n",(0,r.jsx)(n.li,{children:"Char"}),"\n",(0,r.jsx)(n.li,{children:"Calendar interval / Day time interval / Year month interval"}),"\n",(0,r.jsx)(n.li,{children:"Null"}),"\n",(0,r.jsx)(n.li,{children:"Variant"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"booleon-predicates",children:"Booleon predicates"}),"\n",(0,r.jsx)(n.p,{children:"Expressions support the following boolean predicates:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Unary"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Exists (in subquery)"}),"\n",(0,r.jsx)(n.li,{children:"In"}),"\n",(0,r.jsx)(n.li,{children:"Is null"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Binary"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Between"}),"\n",(0,r.jsx)(n.li,{children:"Equality"}),"\n",(0,r.jsx)(n.li,{children:"Less than"}),"\n",(0,r.jsx)(n.li,{children:"Then than or equal"}),"\n",(0,r.jsx)(n.li,{children:"Greater than"}),"\n",(0,r.jsx)(n.li,{children:"Greater than or equal"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Groups"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Not"}),"\n",(0,r.jsx)(n.li,{children:"And"}),"\n",(0,r.jsx)(n.li,{children:"Or"}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);