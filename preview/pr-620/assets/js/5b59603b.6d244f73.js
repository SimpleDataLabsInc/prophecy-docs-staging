"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[18037],{16002:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"ci-cd/prophecy-build-tool/prophecy-build-tool-github-actions","title":"PBT on GitHub Actions","description":"Example usage of Prophecy Build Tool on GitHub Actions","source":"@site/docs/ci-cd/prophecy-build-tool/pbt-github-actions.md","sourceDirName":"ci-cd/prophecy-build-tool","slug":"/engineers/github-actions-prophecy-build-tool","permalink":"/prophecy-docs-staging/preview/pr-620/engineers/github-actions-prophecy-build-tool","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"metadata","permalink":"/prophecy-docs-staging/preview/pr-620/tags/metadata"},{"inline":true,"label":"build","permalink":"/prophecy-docs-staging/preview/pr-620/tags/build"},{"inline":true,"label":"deploy","permalink":"/prophecy-docs-staging/preview/pr-620/tags/deploy"},{"inline":true,"label":"test","permalink":"/prophecy-docs-staging/preview/pr-620/tags/test"},{"inline":true,"label":"cli","permalink":"/prophecy-docs-staging/preview/pr-620/tags/cli"},{"inline":true,"label":"continuous integration","permalink":"/prophecy-docs-staging/preview/pr-620/tags/continuous-integration"},{"inline":true,"label":"continuous deployment","permalink":"/prophecy-docs-staging/preview/pr-620/tags/continuous-deployment"},{"inline":true,"label":"github actions","permalink":"/prophecy-docs-staging/preview/pr-620/tags/github-actions"},{"inline":true,"label":"cicd","permalink":"/prophecy-docs-staging/preview/pr-620/tags/cicd"}],"version":"current","frontMatter":{"title":"PBT on GitHub Actions","id":"prophecy-build-tool-github-actions","slug":"/engineers/github-actions-prophecy-build-tool","description":"Example usage of Prophecy Build Tool on GitHub Actions","tags":["metadata","build","deploy","test","cli","continuous integration","continuous deployment","github actions","cicd"]},"sidebar":"mySidebar","previous":{"title":"Prophecy Build Tool (PBT)","permalink":"/prophecy-docs-staging/preview/pr-620/engineers/prophecy-build-tool"},"next":{"title":"PBT on Jenkins","permalink":"/prophecy-docs-staging/preview/pr-620/engineers/jenkins-prophecy-build-tool"}}');var o=t(74848),s=t(28453);const r={title:"PBT on GitHub Actions",id:"prophecy-build-tool-github-actions",slug:"/engineers/github-actions-prophecy-build-tool",description:"Example usage of Prophecy Build Tool on GitHub Actions",tags:["metadata","build","deploy","test","cli","continuous integration","continuous deployment","github actions","cicd"]},l=void 0,a={},c=[{value:"Example GitHub Repo",id:"example-github-repo",level:2},{value:"Integrate with GitHub Actions",id:"integrate-with-github-actions",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Set up environment variables and secrets",id:"set-up-environment-variables-and-secrets",level:3},{value:"Set up a GitHub Actions Workflow on every push to prod branch",id:"set-up-a-github-actions-workflow-on-every-push-to-prod-branch",level:3}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"example-github-repo",children:(0,o.jsx)(n.a,{href:"https://github.com/prophecy-samples/external-cicd-template",children:"Example GitHub Repo"})}),"\n",(0,o.jsx)(n.h2,{id:"integrate-with-github-actions",children:"Integrate with GitHub Actions"}),"\n",(0,o.jsx)(n.p,{children:"PBT can be integrated with your own CI/CD solution to build, test, and deploy Prophecy code. The steps for setting up PBT with GitHub Actions on your repository containing a Prophecy project are mentioned below."}),"\n",(0,o.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"A Prophecy project that is currently hosted in a GitHub repository"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"set-up-environment-variables-and-secrets",children:"Set up environment variables and secrets"}),"\n",(0,o.jsxs)(n.p,{children:["PBT requires environment variables ",(0,o.jsx)(n.strong,{children:"DATABRICKS_URL"})," and ",(0,o.jsx)(n.strong,{children:"DATABRICKS_TOKEN"})," to be set for complete functionality."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"DATABRICKS_TOKEN"})," that needs to be used can be set as a secret inside the GitHub repository of the project.\nSteps:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Go to Settings > Secrets > Actions from the GitHub repository menu"}),"\n",(0,o.jsx)(n.li,{children:"Click \u2018New Repository secret\u2019"}),"\n",(0,o.jsx)(n.li,{children:"Add the secret with name DATABRICKS_TOKEN and value of the Databricks token to be used by PBT."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Screenshot after setting DATABRICKS_TOKEN secret:\n",(0,o.jsx)(n.img,{alt:"GitHub Actions Secret addition",src:t(48061).A+"",width:"2230",height:"1288"})]}),"\n",(0,o.jsx)(n.p,{children:"The environment variables can also be set within the GitHub actions YML file as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'env:\nDATABRICKS_HOST: "https://sample_databricks_url.cloud.databricks.com"\nDATABRICKS_TOKEN: ${{ secrets.DATABRICKS_TOKEN }}\n'})}),"\n",(0,o.jsx)(n.p,{children:"The complete YML file definition is discussed in the next section."}),"\n",(0,o.jsx)(n.h3,{id:"set-up-a-github-actions-workflow-on-every-push-to-prod-branch",children:"Set up a GitHub Actions Workflow on every push to prod branch"}),"\n",(0,o.jsxs)(n.p,{children:["We\u2019re now ready to setup CI/CD on the Prophecy project.\nTo setup a workflow to build, run all unit tests and then deploy the built jar (Scala)/ whl (Python) on Databricks on every push to the ",(0,o.jsx)(n.code,{children:"prod"})," branch automatically:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Create a .YML file in the project repository at the below location (relative to root):"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:".github/workflows/exampleWorkflow.yml\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Add the below contents to ",(0,o.jsx)(n.code,{children:"exampleWorkflow.yml"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'name: Example CI/CD with GitHub actions\non:\npush:\nbranches: - "prod"\n\nenv:\nDATABRICKS_HOST: "https://sample_databricks_url.cloud.databricks.com"\nDATABRICKS_TOKEN: ${{ secrets.PROD_DATABRICKS_TOKEN }}\n# replace with your fabric id:\nFABRIC_ID: "4004"\n\njobs:\nbuild:\nruns-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - name: Set up JDK 11\n        uses: actions/setup-java@v3\n        with:\n          java-version: "11"\n          distribution: "adopt"\n      - name: Set up Python 3.9.13\n        uses: actions/setup-python@v4\n        with:\n          python-version: "3.9.13"\n      # Install all python dependencies\n      # prophecy-libs not included here because prophecy-build-tool takes care of it by reading each pipeline\'s setup.py\n      - name: Install dependencies\n        run: |\n          python3 -m pip install --upgrade pip\n          pip3 install build pytest wheel pytest-html pyspark==3.3.0  prophecy-build-tool\n      - name: Run PBT validate\n        run: pbt validate --path .\n      - name: Run PBT build\n        run: pbt build --path .\n      - name: Run PBT test\n        run: pbt test --path .\n      - name: Run PBT deploy\n        run: pbt deploy --path . --release-version 1.0 --project-id example_project_id\n'})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The above workflow does the following in order:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Triggers on every change that is pushed to the branch ",(0,o.jsx)(n.code,{children:"prod"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Sets the environment variables required for PBT to run: DATABRICKS_HOST and DATABRICKS_TOKEN."}),"\n",(0,o.jsx)(n.li,{children:"Sets up JDK 11, Python 3 and other dependencies required for PBT to run."}),"\n",(0,o.jsx)(n.li,{children:"Validate that the pipeline code is free of syntax errors."}),"\n",(0,o.jsx)(n.li,{children:"Builds all the pipelines present in the project and generates a .jar/.whl file. If the build fails at any point a non-zero exit code is returned which stops the workflow from proceeding further and the workflow run is marked as a failure."}),"\n",(0,o.jsx)(n.li,{children:"Runs all the unit tests present in the project using FABRIC_NAME(optional) as the configuration. If any of the unit tests fail a non-zero exit code is returned which stops the workflow from proceeding further and the workflow run is marked as a failure."}),"\n",(0,o.jsxs)(n.li,{children:["Deploys the built .jar/.whl to the Databricks location mentioned in ",(0,o.jsx)(n.code,{children:"databricks-job.json"}),", located in the ",(0,o.jsx)(n.code,{children:"jobs"})," directory of the project. If the job already exists in Databricks it is updated with the new .jar/.whl."]}),"\n",(0,o.jsxs)(n.li,{children:["Deploys pipeline configurations, if present, to the DBFS path mentioned in ",(0,o.jsx)(n.code,{children:"databricks-job.json"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"If this process fails at any step, a non-zero exit code is returned which stops the workflow from proceeding further and the workflow run is marked as a failure."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}},48061:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/pbt-github-secret-b7e9a81b0279316b77fc4a01e9e20bcf.png"}}]);