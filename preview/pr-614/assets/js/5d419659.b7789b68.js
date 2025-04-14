"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[3318],{5351:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"ci-cd/prophecy-build-tool/prophecy-build-tool","title":"Prophecy Build Tool (PBT)","description":"Prophecy Build tool","source":"@site/docs/ci-cd/prophecy-build-tool/prophecy-build-tool.md","sourceDirName":"ci-cd/prophecy-build-tool","slug":"/engineers/prophecy-build-tool","permalink":"/prophecy-docs-staging/preview/pr-614/engineers/prophecy-build-tool","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"metadata","permalink":"/prophecy-docs-staging/preview/pr-614/tags/metadata"},{"inline":true,"label":"build","permalink":"/prophecy-docs-staging/preview/pr-614/tags/build"},{"inline":true,"label":"deploy","permalink":"/prophecy-docs-staging/preview/pr-614/tags/deploy"},{"inline":true,"label":"test","permalink":"/prophecy-docs-staging/preview/pr-614/tags/test"},{"inline":true,"label":"cli","permalink":"/prophecy-docs-staging/preview/pr-614/tags/cli"},{"inline":true,"label":"continuous integration","permalink":"/prophecy-docs-staging/preview/pr-614/tags/continuous-integration"},{"inline":true,"label":"continuous deployment","permalink":"/prophecy-docs-staging/preview/pr-614/tags/continuous-deployment"}],"version":"current","frontMatter":{"title":"Prophecy Build Tool (PBT)","id":"prophecy-build-tool","slug":"/engineers/prophecy-build-tool","description":"Prophecy Build tool","tags":["metadata","build","deploy","test","cli","continuous integration","continuous deployment"]},"sidebar":"mySidebar","previous":{"title":"External release tags","permalink":"/prophecy-docs-staging/preview/pr-614/engineers/external-release-tags"},"next":{"title":"PBT on GitHub Actions","permalink":"/prophecy-docs-staging/preview/pr-614/engineers/github-actions-prophecy-build-tool"}}');var t=i(74848),o=i(28453),l=i(99563),r=i(89791);const a={title:"Prophecy Build Tool (PBT)",id:"prophecy-build-tool",slug:"/engineers/prophecy-build-tool",description:"Prophecy Build tool",tags:["metadata","build","deploy","test","cli","continuous integration","continuous deployment"]},c=void 0,p={},d=[{value:"Features (v1.1.0)",id:"features-v110",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Integration Examples",id:"integration-examples",level:2},{value:"GitHub Actions",id:"github-actions",level:3},{value:"Jenkins",id:"jenkins",level:3},{value:"Quickstart",id:"quickstart",level:2},{value:"Usage",id:"usage",level:3},{value:"Running locally",id:"running-locally",level:3},{value:"Building pipelines and deploying jobs",id:"building-pipelines-and-deploying-jobs",level:4},{value:"Build command",id:"build-command",level:5},{value:"Deploy command",id:"deploy-command",level:5},{value:"Deploy specific Jobs using JobId filter",id:"deploy-specific-jobs-using-jobid-filter",level:5},{value:"Running all unit tests in project",id:"running-all-unit-tests-in-project",level:4},{value:"Validating project",id:"validating-project",level:4},{value:"What&#39;s next",id:"whats-next",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Prophecy-built-tool"})," (PBT) allows you to quickly build, test and deploy projects generated by Prophecy (your standard Spark Scala and\nPySpark pipelines) to integrate with your own CI / CD (e.g. GitHub Actions), build system (e.g. Jenkins), and\norchestration (e.g. Databricks Workflows)."]}),"\n",(0,t.jsx)(n.h2,{id:"features-v110",children:"Features (v1.1.0)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Build pipelines (all or specify ones to build) in Prophecy projects (Scala and Python)"}),"\n",(0,t.jsx)(n.li,{children:"Unit test pipelines in Prophecy projects (Scala and Python)"}),"\n",(0,t.jsx)(n.li,{children:"Deploy jobs with built pipelines on Databricks"}),"\n",(0,t.jsx)(n.li,{children:"Deploying jobs filtered with fabric ids on Databricks"}),"\n",(0,t.jsx)(n.li,{children:"Integrate with CI/CD tools like GitHub Actions"}),"\n",(0,t.jsx)(n.li,{children:"Verify the project structure of Prophecy projects"}),"\n",(0,t.jsx)(n.li,{children:"Deploying pipeline Configurations"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Python >=3.7 (Recommended 3.9.13)"}),"\n",(0,t.jsx)(n.li,{children:"pip"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"pyspark"})," (Recommended 3.3.0)"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"To install PBT, simply run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"pip3 install prophecy-build-tool\n"})}),"\n",(0,t.jsx)(n.h2,{id:"integration-examples",children:"Integration Examples"}),"\n",(0,t.jsx)(n.h3,{id:"github-actions",children:(0,t.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-614/engineers/github-actions-prophecy-build-tool",children:"GitHub Actions"})}),"\n",(0,t.jsx)(n.h3,{id:"jenkins",children:(0,t.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-614/engineers/jenkins-prophecy-build-tool",children:"Jenkins"})}),"\n",(0,t.jsx)(n.h2,{id:"quickstart",children:"Quickstart"}),"\n",(0,t.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"Usage: pbt [OPTIONS] COMMAND [ARGS]...\n\nOptions:\n  --help  Show this message and exit.\n\nCommands:\n  build\n  deploy\n  test\n"})}),"\n",(0,t.jsx)(n.h3,{id:"running-locally",children:"Running locally"}),"\n",(0,t.jsx)(n.p,{children:"The PBT cli can be used to build, test and deploy projects created by Prophecy that are present in your local filesystem."}),"\n",(0,t.jsxs)(n.p,{children:["Please make sure the ",(0,t.jsx)(n.strong,{children:"DATABRICKS_URL"})," and ",(0,t.jsx)(n.strong,{children:"DATABRICKS_TOKEN"})," environment variables are set appropriately pointing to your Databricks workspace before running any PBT commands.\nExample:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'export DATABRICKS_HOST="https://example_databricks_host.cloud.databricks.com"\nexport DATABRICKS_TOKEN="exampledatabrickstoken"\n'})}),"\n",(0,t.jsx)(n.h4,{id:"building-pipelines-and-deploying-jobs",children:"Building pipelines and deploying jobs"}),"\n",(0,t.jsxs)(n.p,{children:["PBT can build and deploy jobs inside your Prophecy project to the Databricks environment defined by the ",(0,t.jsx)(n.code,{children:"DATABRICKS_HOST"})," and ",(0,t.jsx)(n.code,{children:"DATABRICKS_TOKEN"}),"\nenvironment variables."]}),"\n",(0,t.jsxs)(n.p,{children:["Since v1.0.3 PBT supports new input parameters that are used to determine the DBFS path where your project's artifacts would\nbe uploaded. These are the ",(0,t.jsx)(n.code,{children:"--release-version"})," and ",(0,t.jsx)(n.code,{children:"--project-id"})," parameters which would be used to replace the ",(0,t.jsx)(n.code,{children:"__PROJECT_RELEASE_VERSION_ PLACEHOLDER__"})," and ",(0,t.jsx)(n.code,{children:"__PROJECT_ID_PLACEHOLDER__"})," placeholders that would already be present in your job's definition file\n(",(0,t.jsx)(n.code,{children:"databricks-job.json"}),"). Using a unique release version of your choice and the project's Prophecy ID\n(as seen in the project's URL on the Prophecy UI) is recommended."]}),"\n",(0,t.jsx)(n.h5,{id:"build-command",children:"Build command"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"pbt build --path /path/to/your/prophecy_project/\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"PBT provides user the ability to filter pipelines to be build, this can be huge time saving if we have large number of pipelines,"}),"\n",(0,t.jsx)(n.li,{children:"Additionally, multiple pipelines can be passed comma(,) separated. To only build certain pipelines we can use:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"pbt build --pipelines customers_orders,join_agg_sort  --path /path/to/your/prophecy_project/\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"PBT builds by default fails(EXIT 1) if any of the pipeline builds failed either due to corrupt pipeline or build failure."}),"\n",(0,t.jsxs)(n.li,{children:["Although if we want to continue, we can skip these errors by using ",(0,t.jsx)(n.code,{children:"--ignore-build-errors"})," and ",(0,t.jsx)(n.code,{children:"--ignore-parse-errors"})," flags"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--ignore-build-errors"})," flag skips package build failures"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--ignore-parse-errors"})," flag skips project parsing error failures"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"pbt build --path /path/to/your/prophecy_project/ --ignore-build-errors --ignore-parse-errors\n"})}),"\n",(0,t.jsx)(n.h5,{id:"deploy-command",children:"Deploy command"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"pbt deploy --path /path/to/your/prophecy_project/ --release-version 1.0 --project-id 10\n"})}),"\n",(0,t.jsx)(n.p,{children:"Sample output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"Prophecy-build-tool v1.0.4.1\n\nFound 1 jobs: daily\nFound 1 pipelines: customers_orders (python)\n\nBuilding 1 pipelines \ud83d\udeb0\n\n  Building pipeline pipelines/customers_orders [1/1]\n\n\u2705 Build complete!\n\nDeploying 1 jobs \u23f1\n\n  Deploying job jobs/daily [1/1]\n    Uploading customers_orders-1.0-py3-none-any.whl to\ndbfs:/FileStore/prophecy/artifacts/...\nQuerying existing jobs to find current job: Offset: 0, Pagesize: 25\n    Updating an existing job: daily\n\n\u2705 Deployment completed successfully!\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"deploy"})," command also supports an advanced option ",(0,t.jsx)(n.code,{children:"--dependent-projects-path"})," if there is a need to build projects other than the main project that has to be deployed.\nThis would be useful if there are dependent pipelines whose source code can be cloned into a different directory accessible to PBT\nwhile running ",(0,t.jsx)(n.code,{children:"deploy"})," for the main project. This option supports only one path as argument but the path itself can contain multiple Prophecy projects within it in different\nsubdirectories."]}),"\n",(0,t.jsx)(n.p,{children:"Example deploy command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"pbt deploy --path /path/to/your/prophecy_project/ --release-version 1.0 --project-id 10 --dependent-projects-path /path/to/dependent/prophecy/projects\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"deploy"})," command also supports an advanced option ",(0,t.jsx)(n.code,{children:"--fabric-ids"})," ( comma separated if more than one ) if there is a\nneed to only deploy jobs associated with certain Fabric IDs. This option is often used in a multi-workspace environment.\n",(0,t.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-614/engineers/jenkins-prophecy-build-tool",children:"Find the Fabric ID"})," for your fabric by navigating to the Metadata page of that fabric and observing the URL."]}),"\n",(0,t.jsx)(n.p,{children:"The following command will filter out and only deploy the jobs associated with given Fabric IDs.\nExample deploy:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"pbt deploy --fabric-ids 647,1527 --path /path/to/your/prophecy_project/\n"})}),"\n",(0,t.jsx)(n.p,{children:"Sample output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"Project name: HelloWorld\nFound 2 jobs: ashish-TestJob2, ashish-TestJob\nFound 4 pipelines: customers_orders (python), report_top_customers (python), join_agg_sort (python),\nfarmers-markets-irs (python)\n[SKIP]: Skipping builds for all pipelines as '--skip-builds' flag is passed.\n\n Deploying 2 jobs\nDeploying jobs only for given Fabric IDs: ['647', '1527']\n\n[START]:  Deploying job jobs/TestJob2 [1/2]\n[DEPLOY]: Job being deployed for fabric id: 1527\n    Pipeline pipelines/farmers-markets-irs might be shared, checking if it exists in DBFS\n    Dependent package exists on DBFS already, continuing with next pipeline\n    Pipeline pipelines/report_top_customers might be shared, checking if it exists in DBFS\n    Dependent package exists on DBFS already, continuing with next pipeline\n    Querying existing jobs to find current job: Offset: 0, Pagesize: 25\n    Updating an existing job: ashish-TestJob2\n\n[START]:  Deploying job jobs/TestJob [2/2]\n[DEPLOY]: Job being deployed for fabric id: 647\n    Pipeline pipelines/customers_orders might be shared, checking if it exists in DBFS\n    Dependent package exists on DBFS already, continuing with next pipeline\n    Pipeline pipelines/join_agg_sort might be shared, checking if it exists in DBFS\n    Dependent package exists on DBFS already, continuing with next pipeline\n    Pipeline pipelines/report_top_customers might be shared, checking if it exists in DBFS\n    Dependent package exists on DBFS already, continuing with next pipeline\n    Querying existing jobs to find current job: Offset: 0, Pagesize: 25\n    Updating an existing job: ashish-TestJob\n\n\u2705 Deployment completed successfully!\n"})}),"\n",(0,t.jsxs)(n.p,{children:["By default, ",(0,t.jsx)(n.code,{children:"deploy"})," command builds all pipelines and then deploys them, if you want to skip building all pipelines\n( this could be useful, if you are running a ",(0,t.jsx)(n.code,{children:"deploy"})," command after running ",(0,t.jsx)(n.code,{children:"deploy"})," or ",(0,t.jsx)(n.code,{children:"build"})," previously.)"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"pbt deploy --skip-builds --path /path/to/your/prophecy_project/\n"})}),"\n",(0,t.jsx)(n.h5,{id:"deploy-specific-jobs-using-jobid-filter",children:"Deploy specific Jobs using JobId filter"}),"\n",(0,t.jsxs)(n.p,{children:["By default, ",(0,t.jsx)(n.code,{children:"deploy"})," command builds all pipelines and then deploys all jobs, if you want to deploy some specific jobs\nwe can use ",(0,t.jsx)(n.code,{children:"job-ids"})," filter (we can find JobId on job metadata page) , PBT will automatically calculate all the pipelines needed for the jobs and then build them.\nThis could be really useful, if we have many jobs and we only want to deploy only few."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'pbt deploy --path /path/to/your/prophecy_project/ --job-ids "TestJob1"\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"we can also pass multiple comma separated Job Ids"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'pbt deploy --path /path/to/your/prophecy_project/ --job-ids "TestJob1,TestJob2"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Complete list of options for PBT ",(0,t.jsx)(n.code,{children:"deploy"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"pbt deploy --help\nProphecy-build-tool v1.0.4.1\n\nUsage: pbt deploy [OPTIONS]\n\nOptions:\n  --path TEXT                     Path to the directory containing the\n                                  pbt_project.yml file  [required]\n  --dependent-projects-path TEXT  Dependent projects path\n  --release-version TEXT          Release version to be used during\n                                  deployments\n  --project-id TEXT               Project Id placeholder to be used during\n                                  deployments\n  --prophecy-url TEXT             Prophecy URL placeholder to be used during\n                                  deployments\n  --fabric-ids TEXT               Fabric IDs(comma separated) which can be\n                                  used to filter jobs for deployments\n  --skip-builds                   Flag to skip building Pipelines\n  --help                          Show this message and exit.\n"})}),"\n",(0,t.jsx)(n.h4,{id:"running-all-unit-tests-in-project",children:"Running all unit tests in project"}),"\n",(0,t.jsxs)(n.p,{children:["PBT supports running unit tests inside the Prophecy project. Unit tests run with the ",(0,t.jsx)(n.code,{children:"default"})," configuration present in the\nPipeline's ",(0,t.jsx)(n.code,{children:"configs/resources/config"})," directory."]}),"\n",(0,t.jsxs)(n.p,{children:["To run all unit tests present in the project, use the ",(0,t.jsx)(n.code,{children:"test"})," command as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"pbt test --path /path/to/your/prophecy_project/\n"})}),"\n",(0,t.jsx)(n.p,{children:"Sample output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"Prophecy-build-tool v1.0.1\n\nFound 1 jobs: daily\nFound 1 pipelines: customers_orders (python)\n\n  Unit Testing pipeline pipelines/customers_orders [1/1]\n\n    ============================= test session starts ==============================\n    platform darwin -- Python 3.8.9, pytest-7.1.2, pluggy-1.0.0 -- /Library/Developer/CommandLineTools/usr/bin/python\n    cachedir: .pytest_cache\n    metadata: None\n    rootdir: /path/to/your/prophecy_project/pipelines/customers_orders/code\n    plugins: html-3.1.1, metadata-2.0.2\n    collecting ... collected 1 item\n\n    test/TestSuite.py::CleanupTest::test_unit_test_0 PASSED                  [100%]\n\n    ============================== 1 passed in 17.42s ==============================\n\n\u2705 Unit test for pipeline: pipelines/customers_orders succeeded.\n"})}),"\n",(0,t.jsx)(n.p,{children:"Users can also pass --driver-library-path as a parameter to pbt test command to pass jars of Prophecy-libs dependencies to the command. If user doesn't add it, the tool by default picks the libraries from maven central."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"pbt test --path /path/to/your/prophecy_project/ --driver-library-path <path_to_the_jars>\n"})}),"\n",(0,t.jsx)(n.h4,{id:"validating-project",children:"Validating project"}),"\n",(0,t.jsx)(n.p,{children:"PBT supports validating all pipelines inside the Prophecy project. This allows users to check pipelines before deploying. Validation involves checking if the pipelines have any diagnostics. These are the same diagnostics which are shown on our Visual IDE."}),"\n",(0,t.jsxs)(n.p,{children:["To run validate all pipelines present in the project, use the ",(0,t.jsx)(n.code,{children:"validate"})," command as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"pbt validate --path /path/to/your/prophecy_project/\n"})}),"\n",(0,t.jsx)(n.p,{children:"Sample output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"Prophecy-build-tool v1.0.3.4\n\nProject name: HelloWorld\nFound 1 jobs: default_schedule\nFound 4 pipelines: customers_orders (python), report_top_customers (python), join_agg_sort (python), farmers-markets-irs (python)\n\nValidating 4 pipelines\n\n  Validating pipeline pipelines/customers_orders [1/4]\n\n Pipeline is validated: customers_orders\n\n  Validating pipeline pipelines/report_top_customers [2/4]\n\n Pipeline is validated: report_top_customers\n\n  Validating pipeline pipelines/join_agg_sort [3/4]\n\n Pipeline is validated: join_agg_sort\n\n  Validating pipeline pipelines/farmers-markets-irs [4/4]\n\n Pipeline is validated: farmers-markets-irs\n"})}),"\n",(0,t.jsx)(n.h2,{id:"whats-next",children:"What's next"}),"\n",(0,t.jsx)(n.p,{children:"To continue using PBT, see the following pages:"}),"\n","\n",(0,t.jsx)(l.A,{items:(0,r.$S)().items})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>r});var s=i(96540);const t={},o=s.createContext(t);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(o.Provider,{value:n},e.children)}},81430:(e,n,i)=>{i.d(n,{W:()=>c});var s=i(96540),t=i(40797);const o=["zero","one","two","few","many","other"];function l(e){return o.filter((n=>e.includes(n)))}const r={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,t.A)();return(0,s.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:l(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),r}}),[e])}function c(){const e=a();return{selectMessage:(n,i)=>function(e,n,i){const s=e.split("|");if(1===s.length)return s[0];s.length>i.pluralForms.length&&console.error(`For locale=${i.locale}, a maximum of ${i.pluralForms.length} plural forms are expected (${i.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const t=i.select(n),o=i.pluralForms.indexOf(t);return s[Math.min(o,s.length-1)]}(i,n,e)}}},89791:(e,n,i)=>{i.d(n,{$S:()=>s});i(40797);function s(){return i(56942).$S(...arguments)}},99563:(e,n,i)=>{i.d(n,{A:()=>b});i(96540);var s=i(18215),t=i(93751),o=i(56289),l=i(81430),r=i(22887),a=i(50539),c=i(9303);const p={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=i(74848);function h(e){let{href:n,children:i}=e;return(0,d.jsx)(o.A,{href:n,className:(0,s.A)("card padding--lg",p.cardContainer),children:i})}function u(e){let{href:n,icon:i,title:t,description:o}=e;return(0,d.jsxs)(h,{href:n,children:[(0,d.jsxs)(c.A,{as:"h2",className:(0,s.A)("text--truncate",p.cardTitle),title:t,children:[i," ",t]}),o&&(0,d.jsx)("p",{className:(0,s.A)("text--truncate",p.cardDescription),title:o,children:o})]})}function g(e){let{item:n}=e;const i=(0,t.Nr)(n),s=function(){const{selectMessage:e}=(0,l.W)();return n=>e(n,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return i?(0,d.jsx)(u,{href:i,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??s(n.items.length)}):null}function j(e){let{item:n}=e;const i=(0,r.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,t.cC)(n.docId??void 0);return(0,d.jsx)(u,{href:n.href,icon:i,title:n.label,description:n.description??s?.description})}function m(e){let{item:n}=e;switch(n.type){case"link":return(0,d.jsx)(j,{item:n});case"category":return(0,d.jsx)(g,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function y(e){let{className:n}=e;const i=(0,t.$S)();return(0,d.jsx)(b,{items:i.items,className:n})}function b(e){const{items:n,className:i}=e;if(!n)return(0,d.jsx)(y,{...e});const o=(0,t.d1)(n);return(0,d.jsx)("section",{className:(0,s.A)("row",i),children:o.map(((e,n)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(m,{item:e})},n)))})}}}]);