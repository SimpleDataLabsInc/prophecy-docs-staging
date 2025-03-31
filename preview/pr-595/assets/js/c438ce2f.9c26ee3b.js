"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[65807],{28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var n=s(96540);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}},39490:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/project-test-config-185139bb932cb14e7c17fb6f8c8f3e43.png"},39715:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/project-test-schedule-27f304949589aaefa89e3ad59a26fa6e.png"},40152:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/project-test-run-details-a063860ebbd83c793cd526cb09a0b2bd.png"},47465:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/project-test-add-new-9be119f79248cb1ecbdab3b695df6da8.png"},57834:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/project-test-failed-test-8fe44a191804539b525e7a5b8a516078.png"},59870:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/project-test-summary-d544e620c8677707abe1b4dd462340ad.png"},60836:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/project-test-canvas-d783db03c64a98c80b6b42ecccf6dd23.png"},95100:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"analysts/development/data-tests/use-project-tests","title":"Use project tests","description":"Custom SQL query tests","source":"@site/docs/analysts/development/data-tests/use-project-tests.md","sourceDirName":"analysts/development/data-tests","slug":"/analysts/project-tests","permalink":"/prophecy-docs-staging/preview/pr-595/analysts/project-tests","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"how-to","permalink":"/prophecy-docs-staging/preview/pr-595/tags/how-to"},{"inline":true,"label":"testing","permalink":"/prophecy-docs-staging/preview/pr-595/tags/testing"},{"inline":true,"label":"sql","permalink":"/prophecy-docs-staging/preview/pr-595/tags/sql"}],"version":"current","frontMatter":{"title":"Use project tests","id":"use-project-tests","slug":"/analysts/project-tests","description":"Custom SQL query tests","tags":["how-to","testing","sql"]},"sidebar":"mySidebar","previous":{"title":"Use model and column tests","permalink":"/prophecy-docs-staging/preview/pr-595/analysts/model-column-tests"},"next":{"title":"Versioning","permalink":"/prophecy-docs-staging/preview/pr-595/analysts/versioning"}}');var i=s(74848),r=s(28453);const o={title:"Use project tests",id:"use-project-tests",slug:"/analysts/project-tests",description:"Custom SQL query tests",tags:["how-to","testing","sql"]},a=void 0,c={},l=[{value:"Set up a test",id:"set-up-a-test",level:2},{value:"Develop a test",id:"develop-a-test",level:3},{value:"Run a test",id:"run-a-test",level:3},{value:"Fix a failed test",id:"fix-a-failed-test",level:2},{value:"Configure a test",id:"configure-a-test",level:2},{value:"Schedule a test",id:"schedule-a-test",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Project tests are custom data tests that check for a passing condition, such as checking that the given query doesn\u2019t return any unexpected rows. They are based on ",(0,i.jsx)(t.a,{href:"https://docs.getdbt.com/docs/build/data-tests#singular-data-tests",children:"dbt singular tests"}),", but, as a data user, you don\u2019t need to know dbt to use project tests in Prophecy. Prophecy makes it easy set up, configure, and schedule project tests."]}),"\n",(0,i.jsx)(t.p,{children:"Project tests perform a SQL query that checks the executed result of your project against a passing condition to see if it's successful. This is done by checking whether a particular table, generated by combining one or more database objects from your project, meets a certain condition."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"There could be many tests within a project. Each test is checking a table created by your choice of input models, data sources, and transformation gems."})}),"\n",(0,i.jsx)(t.p,{children:"By default, and most often, the condition for a project test is simply a check that the given query does not return any failing rows."}),"\n",(0,i.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,i.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,i.jsx)("iframe",{src:"https://fast.wistia.net/embed/iframe/mvk1axfn7e?seo=false?videoFoam=true",title:"Design a Pipeline Video",allow:"autoplay; fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,i.jsx)("script",{src:"https://fast.wistia.net/assets/external/E-v1.js",async:!0}),"\n",(0,i.jsx)(t.h2,{id:"set-up-a-test",children:"Set up a test"}),"\n",(0,i.jsx)(t.p,{children:"Since project tests share the same canvas as models, you can set them up the same way you would develop and run a model."}),"\n",(0,i.jsx)(t.h3,{id:"develop-a-test",children:"Develop a test"}),"\n",(0,i.jsx)(t.p,{children:"To develop a project test, start by opening a project:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Under the Project Browser, click ",(0,i.jsx)(t.strong,{children:"Add Test"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Add a new test",src:s(47465).A+"",width:"2620",height:"1502"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Enter your ",(0,i.jsx)(t.strong,{children:"Test Name"}),". Project tests are saved to a tests SQL file in the Git directory by default."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Click ",(0,i.jsx)(t.strong,{children:"OK"})," to create your new test."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Create your test model by dragging and dropping gems to your visual canvas. Connect them to your Data Test. You can also write your test on the Code view. You can use as many models and other database objects as you\u2019d like in your test."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Project test canvas",src:s(60836).A+"",width:"2620",height:"1492"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"run-a-test",children:"Run a test"}),"\n",(0,i.jsx)(t.p,{children:"After you\u2019ve developed your project test and executed all of your models, you can run the test."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Click the ",(0,i.jsx)(t.strong,{children:"Play"})," button on either the canvas or an individual gem to execute your test. The table input to the data test gem is what\u2019s tested."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Run a whole test. Clicking the canvas ",(0,i.jsx)(t.strong,{children:"Play"})," button executes the complete test and shows the interim data after the Data Test gem. Additionally, it displays the final test status, succeeded, warning, or failed, in a summary."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Run a partial test. Clicking the gem ",(0,i.jsx)(t.strong,{children:"Play"})," button executes the test SQL up to a particular gem, and displays that gem\u2019s data on the output. This option doesn\u2019t execute the data test."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Click ",(0,i.jsx)(t.strong,{children:"See Run Details"})," to view the test Summary. Depending on the outcome of the test, the icon displays a different color."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"See Run Details",src:s(40152).A+"",width:"2620",height:"1488"})}),"\n",(0,i.jsx)(t.p,{children:"You can click to expand the test logs in the Summary to view the dbt logs."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"View test summary",src:s(59870).A+"",width:"2620",height:"1496"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"In addition to the previous relational integrity test, you can create tests to check that the total payment amount from customers is positive or simply check that all of your tables are still accessible. You can test any series of transformation gems, because a project test simply asserts that the resulting table meets a certain criteria."}),"\n",(0,i.jsx)(t.h2,{id:"fix-a-failed-test",children:"Fix a failed test"}),"\n",(0,i.jsx)(t.p,{children:"If your project test fails, check your test model for any changes."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Click the test output to see your failed rows."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"View test summary",src:s(57834).A+"",width:"2620",height:"1509"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Some examples of test failure causes include:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Happy path: There is now a row in the table \u2192 you have detected the thing you were trying to detect!"}),"\n",(0,i.jsx)(t.li,{children:"The table no longer exists since one or more input data sources were deleted or inaccessible"}),"\n",(0,i.jsx)(t.li,{children:"The Failure Calculation function is invalid"}),"\n",(0,i.jsx)(t.li,{children:"The Error If and Warn If conditions are invalid"}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Make sure you have write permission to create a new table in your data warehouse, otherwise you may run into errors while trying to run your own tests."})}),"\n",(0,i.jsx)(t.p,{children:"By default, project tests are configured to fail if the table has one or more rows. You can also modify the passing condition of your test through advanced options."}),"\n",(0,i.jsx)(t.h2,{id:"configure-a-test",children:"Configure a test"}),"\n",(0,i.jsx)(t.p,{children:"You can configure your own passing condition of your project test to help decide which cases to focus on."}),"\n",(0,i.jsx)(t.p,{children:"You might need to pay more attention as the number of rows in a table increases. For example, you might have a customer churn use case where many customers have a few comments (represented by rows in a table), but you need to change course when the number of customer comments exceeds a threshold of five comments. Configuring your test can help you identify and take action, such as assigning more resources to assist that customer."}),"\n",(0,i.jsx)(t.p,{children:"To configure a test, follow these steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Click on the test to open the test details."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Enter conditional values for the following options:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Configure a test",src:s(39490).A+"",width:"2620",height:"1509"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"(A)"})," ",(0,i.jsx)(t.strong,{children:"Failure Calculation"}),": Sets the failure condition used to run against the test result. You can use the ",(0,i.jsx)(t.code,{children:"count()"})," function on a column or multiple columns."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"(B)"})," ",(0,i.jsx)(t.strong,{children:"Limit"}),": Sets the maximum number of failures returned by a test query. You can set the limit to save resources and time by having the test stop its query as soon as it encounters a certain number of failed rows."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"(C)"})," ",(0,i.jsx)(t.strong,{children:"Severity"}),": Determines whether the failure of the test returns an error or warning. The severity operates from the highest priority selection, error, to the lowest, warning. So if you select error, then the test first checks for errors. If it doesn\u2019t find any, then it then checks for warnings. If you select warning, then the test only checks for warnings. If you don\u2019t select a severity, then error is chosen by default."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"(D)"})," ",(0,i.jsx)(t.strong,{children:"Error If"})," and ",(0,i.jsx)(t.strong,{children:"(E)"})," ",(0,i.jsx)(t.strong,{children:"Warning If"}),": Sets the number of failed rows to determine a failed test. Depending on the selected severity, your test only returns a failed test for error checks. Warning won\u2019t return a failed test."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Click ",(0,i.jsx)(t.strong,{children:"Save"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"schedule-a-test",children:"Schedule a test"}),"\n",(0,i.jsx)(t.p,{children:"When scheduling your project, you can opt in to run a test along with the project or model. Scheduling a test allows you to ensure on a daily basis that your data is correct. You can only schedule a test with a project or model. You cannot schedule one individually."}),"\n",(0,i.jsx)(t.p,{children:"To Schedule your project to run with tests, follow these steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Under the Project Browser, click ",(0,i.jsx)(t.strong,{children:"Add Job"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Drag a Model gem to your visual canvas."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Click the model to open the model properties."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Select the database object you want to run the test on. You can schedule the entire project or just a single model:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Run entire project"}),"\n",(0,i.jsx)(t.li,{children:"Run a SQL model"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Add a schedule job",src:s(39715).A+"",width:"2620",height:"1539"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Select ",(0,i.jsx)(t.strong,{children:"Run tests"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Check that your ",(0,i.jsx)(t.strong,{children:"Project, model"}),", and ",(0,i.jsx)(t.strong,{children:"fabric"})," are correct."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Click ",(0,i.jsx)(t.strong,{children:"Save"}),". The job runs automatically. You can see the job status by clicking ",(0,i.jsx)(t.strong,{children:"Detail"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);