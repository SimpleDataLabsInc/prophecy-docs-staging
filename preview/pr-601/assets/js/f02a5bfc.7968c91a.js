"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[99790],{4883:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/bre-code-0a0f8e886214c9b99fa54c361764e6ed.png"},23984:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"Spark/functions/business-rules-engine/business-rules-engine","title":"Business rules","description":"Create business rules as functions","source":"@site/docs/Spark/functions/business-rules-engine/business-rules-engine.md","sourceDirName":"Spark/functions/business-rules-engine","slug":"/engineers/business-rules","permalink":"/prophecy-docs-staging/preview/pr-601/engineers/business-rules","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"business rules","permalink":"/prophecy-docs-staging/preview/pr-601/tags/business-rules"}],"version":"current","frontMatter":{"title":"Business rules","id":"business-rules-engine","slug":"/engineers/business-rules","description":"Create business rules as functions","tags":["business rules"]},"sidebar":"mySidebar","previous":{"title":"Data profiling","permalink":"/prophecy-docs-staging/preview/pr-601/engineers/data-profile"},"next":{"title":"User-defined functions","permalink":"/prophecy-docs-staging/preview/pr-601/engineers/user-defined-functions"}}');var r=n(74848),t=n(28453);const l={title:"Business rules",id:"business-rules-engine",slug:"/engineers/business-rules",description:"Create business rules as functions",tags:["business rules"]},o=void 0,a={},c=[{value:"Overview",id:"overview",level:2},{value:"Business rule parameters",id:"business-rule-parameters",level:2},{value:"Create business rules",id:"create-business-rules",level:2},{value:"Example: IdentifyHighSpendingCustomer",id:"example-identifyhighspendingcustomer",level:3},{value:"Share business rules",id:"share-business-rules",level:2},{value:"Example: PromoCodeRule",id:"example-promocoderule",level:3},{value:"Use business rules in your Pipeline",id:"use-business-rules-in-your-pipeline",level:2},{value:"View the business rules in code",id:"view-the-business-rules-in-code",level:2}];function u(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"Business rules empower organizations to model, manage, and automate repeatable business decisions throughout the enterprise."}),"\n",(0,r.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(s.p,{children:"The business rules engine in Prophecy lets you incorporate business logic in your Pipelines. Often, different users will interact with business rules at various stages of Pipeline development. One common workflow is as follows:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"Business users create business rules using predefined enterprise logic."}),"\n",(0,r.jsxs)(s.li,{children:["These business rules are deployed and become available as ",(0,r.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-601/engineers/dependencies",children:"dependencies"})," in the ",(0,r.jsx)(s.a,{href:"/engineers/package-hub",children:"Package Hub"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Data engineers and others working on Pipelines can incorporate these rules using the ",(0,r.jsx)(s.a,{href:"/engineers/schema-transform",children:"SchemaTransform gem"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"These stages are explained in more detail below."}),"\n",(0,r.jsx)(s.h2,{id:"business-rule-parameters",children:"Business rule parameters"}),"\n",(0,r.jsx)(s.p,{children:"Business rules require the following parameters."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Input Columns"}),(0,r.jsx)(s.td,{children:"The columns you would like to use in your business rule conditions. Each column must have a Name and Type defined."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Output Columns"}),(0,r.jsx)(s.td,{children:"The names of the output columns that the business rule will calculate."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Rules"}),(0,r.jsx)(s.td,{children:"The set of conditions that define the business rule. These can be grouped by date ranges, such that they only apply during a certain time period."})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"create-business-rules",children:"Create business rules"}),"\n",(0,r.jsx)(s.p,{children:"To create a new business rule:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["In the project browser, click the ",(0,r.jsx)(s.strong,{children:"plus"})," icon next to ",(0,r.jsx)(s.strong,{children:"Functions"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Name the Rule and choose ",(0,r.jsx)(s.strong,{children:"Business Rule"})," as the ",(0,r.jsx)(s.strong,{children:"Function Type"}),". Then, click ",(0,r.jsx)(s.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Create business rule",src:n(48516).A+"",width:"2812",height:"900"})}),"\n",(0,r.jsx)(s.p,{children:"Next, you need to define the rule parameters."}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Define columns in the ",(0,r.jsx)(s.strong,{children:"Input Columns"})," table using a name, type, and (optionally) description."]}),"\n",(0,r.jsxs)(s.li,{children:["Define columns in the ",(0,r.jsx)(s.strong,{children:"Output Columns"})," table with an optional description."]}),"\n",(0,r.jsxs)(s.li,{children:["Each column in these tables will automatically be added to the ",(0,r.jsx)(s.strong,{children:"Rules"})," table."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Rule Parameters",src:n(42923).A+"",width:"2620",height:"1508"})}),"\n",(0,r.jsx)(s.p,{children:"Each row in the Rules table corresponds to one rule condition. To add a rule condition:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Add conditions under the corresponding inputs in SQL expression format. Note that each expression must be true in a row (logical ",(0,r.jsx)(s.code,{children:"AND"}),") for the rule condition to be met."]}),"\n",(0,r.jsxs)(s.li,{children:["Add an output value for your condition. This can be a hard-coded value, or you can write in SQL expression format. The default output value is ",(0,r.jsx)(s.code,{children:"Null"}),"."]}),"\n",(0,r.jsx)(s.li,{children:"Optionally, you can add a description of the rule."}),"\n"]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsx)(s.p,{children:"Prophecy will generate an error if there is conflicting logic in your conditions."})}),"\n",(0,r.jsx)(s.h3,{id:"example-identifyhighspendingcustomer",children:"Example: IdentifyHighSpendingCustomer"}),"\n",(0,r.jsx)(s.p,{children:"Take a look at the business rule in the following image."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"IdentifyHighSpendingCustomer Rule",src:n(75882).A+"",width:"2620",height:"774"})}),"\n",(0,r.jsxs)(s.p,{children:["In this example, we created an ",(0,r.jsx)(s.strong,{children:"IdentifyHighSpendingCustomer"})," business rule. This rule represents the following statement:"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"If a customer's spending is more than $500, or their total order amount is more than $500, then they are a high spending customer. Otherwise, they are not a high spending customer."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["As you can see, we needed to use multiple rule conditions to achieve this outcome. Additionally, you can see that the output is either ",(0,r.jsx)(s.code,{children:"1"})," or ",(0,r.jsx)(s.code,{children:"0"}),".\nThis is because we decided to represent whether a customer was a high spender or not with a binary flag."]}),"\n",(0,r.jsx)(s.h2,{id:"share-business-rules",children:"Share business rules"}),"\n",(0,r.jsx)(s.p,{children:"You can also import business rules into projects via Packages. Imported rules are read-only and can only be edited from their source project."}),"\n",(0,r.jsx)(s.p,{children:"This can be useful if:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"You want to group rules by their function or use case."}),"\n",(0,r.jsx)(s.li,{children:"You only want specific users to create and edit rules."}),"\n",(0,r.jsx)(s.li,{children:"You want to reuse rules in multiple projects."}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"example-promocoderule",children:"Example: PromoCodeRule"}),"\n",(0,r.jsx)(s.p,{children:"Let's say you want to create a PromoCodeRule that will be used in various other projects."}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"Start by creating a project where you will define the business rule."}),"\n",(0,r.jsx)(s.li,{children:"Add the business rule to the project."}),"\n",(0,r.jsx)(s.li,{children:"Commit your changes to the project."}),"\n",(0,r.jsx)(s.li,{children:"Merge the changes to the main branch."}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/engineers/deployment",children:"Release and deploy"})," the project."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Then, you must give other users access to your project."}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["In your project metadata, open the ",(0,r.jsx)(s.strong,{children:"Access"})," tab."]}),"\n",(0,r.jsxs)(s.li,{children:["Toggle-on the option to ",(0,r.jsx)(s.strong,{children:"Publish to Package Hub"}),". This will make the Package available to others."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["When someone adds the Package as a ",(0,r.jsx)(s.a,{href:"/prophecy-docs-staging/preview/pr-601/engineers/dependencies",children:"dependency"})," in their project, they will be able to see the rule definition. However, they will not be able to edit the fields."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"PromoCodeRule",src:n(43420).A+"",width:"2620",height:"1508"})}),"\n",(0,r.jsx)(s.p,{children:"This example rule includes a set of conditions to determine the type of promotions that a customer is eligible for."}),"\n",(0,r.jsx)(s.h2,{id:"use-business-rules-in-your-pipeline",children:"Use business rules in your Pipeline"}),"\n",(0,r.jsxs)(s.p,{children:["To use a business rule in your Pipeline, you can use the ",(0,r.jsx)(s.a,{href:"/engineers/schema-transform",children:"SchemaTransform gem"}),"."]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"Add a SchemaTransform gem to the Pipeline."}),"\n",(0,r.jsx)(s.li,{children:"Open the gem and add the appropriate input."}),"\n",(0,r.jsxs)(s.li,{children:["Click ",(0,r.jsx)(s.strong,{children:"Add Transformation"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["In the ",(0,r.jsx)(s.strong,{children:"Operation"})," dropdown, choose ",(0,r.jsx)(s.strong,{children:"Add Rule"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Choose the appropriate rule in the ",(0,r.jsx)(s.strong,{children:"Rule"})," field. This will populate the ",(0,r.jsx)(s.strong,{children:"New Column"})," field. If an input column has the same name as the new column, then its data will be overwritten\u2014no new column will be appended."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"After adding a business rule, Prophecy will automatically perform a few checks to verify that:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Each rule input column exists in the gem input."}),"\n",(0,r.jsx)(s.li,{children:"The type of each rule input column matches that of the gem input."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Error messages can be found in the Diagnostics of the gem."}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsx)(s.p,{children:"You can add multiple business rules to the SchemaTransform gem at a time. You can also use the output column of one rule as an input column for a subsequent rule."})}),"\n",(0,r.jsx)(s.h2,{id:"view-the-business-rules-in-code",children:"View the business rules in code"}),"\n",(0,r.jsx)(s.p,{children:"Prophecy automatically compiles visually-developed business rules into code."}),"\n",(0,r.jsxs)(s.p,{children:["Business rules are stored in the ",(0,r.jsx)(s.strong,{children:"functions"})," folder of your pipeline's code. This is true for both Python and Scala projects. Note that you can also see the imported business rules in the code view."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Business rules in Python and Scala",src:n(4883).A+"",width:"2812",height:"900"})})]})}function d(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>o});var i=n(96540);const r={},t=i.createContext(r);function l(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:s},e.children)}},42923:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/rule-parameters-55bd0a953284a4dd308d9ae0fa32ce27.png"},43420:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/promo-code-rule-5f8f098a278077d983a770ffcab8cc84.png"},48516:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/create-bre-f7259c8757bdf33d39b9bc2326c9de1e.png"},75882:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/high-spending-rule-cea2cc04ab57df0b1a333634676a2d86.png"}}]);