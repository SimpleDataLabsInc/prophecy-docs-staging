"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[63924],{5064:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/prophecy-lineage-report-for-pipeline-a0d455b3d122f0d7b2e43e72f0fb537f.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var i=t(96540);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}},40670:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"lineage/lineage-extractor","title":"Lineage extractor","description":"Prophecy lineage extractor on GitHub Actions","source":"@site/docs/lineage/lineage-extractor.md","sourceDirName":"lineage","slug":"/engineers/lineage-extractor","permalink":"/prophecy-docs-staging/preview/pr-604/engineers/lineage-extractor","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"metadata","permalink":"/prophecy-docs-staging/preview/pr-604/tags/metadata"},{"inline":true,"label":"lineage","permalink":"/prophecy-docs-staging/preview/pr-604/tags/lineage"},{"inline":true,"label":"extractor","permalink":"/prophecy-docs-staging/preview/pr-604/tags/extractor"},{"inline":true,"label":"github actions","permalink":"/prophecy-docs-staging/preview/pr-604/tags/github-actions"}],"version":"current","frontMatter":{"title":"Lineage extractor","id":"lineage-extractor","slug":"/engineers/lineage-extractor","description":"Prophecy lineage extractor on GitHub Actions","tags":["metadata","lineage","extractor","github actions"]},"sidebar":"mySidebar","previous":{"title":"Lineage","permalink":"/prophecy-docs-staging/preview/pr-604/engineers/lineage"},"next":{"title":"Lineage run and diagnose","permalink":"/prophecy-docs-staging/preview/pr-604/engineers/lineage-run-and-diagnose"}}');var r=t(74848),o=t(28453);const s={title:"Lineage extractor",id:"lineage-extractor",slug:"/engineers/lineage-extractor",description:"Prophecy lineage extractor on GitHub Actions",tags:["metadata","lineage","extractor","github actions"]},l=void 0,a={},c=[{value:"Python command",id:"python-command",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Integrate with GitHub Actions or GitLab Actions",id:"integrate-with-github-actions-or-gitlab-actions",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Set up environment variables and secrets",id:"set-up-environment-variables-and-secrets",level:3},{value:"Run the lineage extractor",id:"run-the-lineage-extractor",level:3},{value:"GitHub Actions file",id:"github-actions-file",level:4},{value:"GitLab Actions file",id:"gitlab-actions-file",level:4},{value:"Output example",id:"output-example",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"The Prophecy lineage extractor tool extracts lineage information from Prophecy projects and pipelines. It allows you to specify a project, pipeline, and branch, and outputs the extracted lineage to a specified directory. You can also optionally set up email notifications."}),"\n",(0,r.jsx)(n.h2,{id:"python-command",children:"Python command"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"python -m prophecy_lineage_extractor --project-id <PROJECT_ID> --pipeline-id <PIPELINE_ID> --output-dir <OUTPUT_DIRECTORY> [--send-email] [--branch <BRANCH_NAME>]\n"})}),"\n",(0,r.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Argument"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Required"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"--project-id"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"str"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Prophecy project ID"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"--pipeline-id"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"str"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Prophecy pipeline ID"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"--output-dir"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"str"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Output directory inside the project where lineage files will be stored"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"--send-email"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"flag"}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["If specified, sends an email with the generated lineage report to the environment variable ",(0,r.jsx)(n.code,{children:"RECEIVER_EMAIL"}),". You must set the following environment variables for this option if passed: ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})," ",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(n.code,{children:"SMTP_HOST"})}),(0,r.jsx)("li",{children:(0,r.jsx)(n.code,{children:"SMTP_PORT"})}),(0,r.jsx)("li",{children:(0,r.jsx)(n.code,{children:"SMTP_USERNAME"})}),(0,r.jsx)("li",{children:(0,r.jsx)(n.code,{children:"SMTP_PASSWORD"})}),(0,r.jsx)("li",{children:(0,r.jsx)(n.code,{children:"RECEIVER_EMAIL"})})]})]}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"--branch"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"str"}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["Branch to run the lineage extractor on. ",(0,r.jsx)("br",{})," The default branch in Prophecy is generally 'main'."]}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"True"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"integrate-with-github-actions-or-gitlab-actions",children:"Integrate with GitHub Actions or GitLab Actions"}),"\n",(0,r.jsx)(n.p,{children:"The lineage extractor can be integrated with your GitHub Actions or GitLab Actions. The steps for setting up the lineage extractor on your repository containing a Prophecy project are mentioned below."}),"\n",(0,r.jsx)(n.h3,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A Prophecy project that is currently hosted in a GitHub repository"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"set-up-environment-variables-and-secrets",children:"Set up environment variables and secrets"}),"\n",(0,r.jsxs)(n.p,{children:["The lineage extractor requires environment variables ",(0,r.jsx)(n.code,{children:"PROPHECY_URL"})," and ",(0,r.jsx)(n.code,{children:"PROPHECY_PAT"})," to be set for complete functionality."]}),"\n",(0,r.jsxs)(n.p,{children:["Optionally, if you choose to set up email notifications, you must also set secrets for your ",(0,r.jsx)(n.code,{children:"SMTP_USERNAME"})," and ",(0,r.jsx)(n.code,{children:"SMTP_PASSWORD"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["These environment variables can be set as secrets inside the GitHub repository of the project. For more information, see ",(0,r.jsx)(n.a,{href:"/engineers/github-actions-prophecy-build-tool/#set-up-environment-variables-and-secrets",children:"Set up environment variables and secrets"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The environment variables can also be set within the GitHub Actions or GitLab Actions YML file."}),"\n",(0,r.jsx)(n.p,{children:"For GitHub Actions:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"env:\nPROPHECY_PAT: ${{ secrets.PROPHECY_PAT }}\nSMTP_USERNAME: ${{ secrets.SMTP_USERNAME}}\nSMTP_PASSWORD: ${{ secrets.SMTP_PASSWORD }}\n"})}),"\n",(0,r.jsx)(n.p,{children:"For GitLab Actions:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'export PROPHECY_PAT="$PROPHECY_PAT"\nexport SMTP_USERNAME="$SMTP_USERNAME"\nexport SMTP_PASSWORD="$SMTP_PASSWORD"\n'})}),"\n",(0,r.jsx)(n.p,{children:"The complete YML file definition is discussed in the next section."}),"\n",(0,r.jsx)(n.h3,{id:"run-the-lineage-extractor",children:"Run the lineage extractor"}),"\n",(0,r.jsx)(n.p,{children:"We\u2019re now ready to run the lineage extractor on the Prophecy project."}),"\n",(0,r.jsx)(n.p,{children:"To run the extractor, use the following example with your own environment variables:"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["You only need to provide SMTP credentials if you plan to pass the ",(0,r.jsx)(n.code,{children:"--send-email"})," argument."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"export PROPHECY_URL=https://<custom>.prophecy.io\nexport PROPHECY_PAT=${{ secrets.PROPHECY_PAT }}\n\nexport SMTP_HOST=smtp.gmail.com\nexport SMTP_PORT=587\nexport SMTP_USERNAME=${{ secrets.SMTP_USERNAME }}\nexport SMTP_PASSWORD=${{ secrets.SMTP_PASSWORD }}\nexport RECEIVER_EMAIL=<myRecipient@company.com>\n\npython -m prophecy_lineage_extractor --project-id 36587 --pipeline-id 36587/pipelines/customer_orders_demo --send-email --branch dev\n"})}),"\n",(0,r.jsx)(n.h4,{id:"github-actions-file",children:"GitHub Actions file"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create a .YML file in the project repository at the below location (relative to root):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:".github/workflows/prophecy_lineage_extractor.yml\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Add the below contents with your own environment variables to ",(0,r.jsx)(n.code,{children:"prophecy_lineage_extractor.yml"}),":"]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"On the default branch"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'name: Run Prophecy Lineage extractor on main\n\non:\n  push:\n    branches:\n      - main  # Trigger on merge to the main branch\n    paths:\n      - \'datasets/**\'\n      - \'pipelines/**\'\n      - \'pbt_project.yml\'\n      - \'.github/workflows/prophecy_lineage_extractor.yml\'\n\npermissions:\n  contents: write\n\njobs:\n  extract-and-mail-prophecy-lineage:\n    runs-on: ubuntu-latest\n    env:\n      OUTPUT_DIR: "output"\n    steps:\n      - uses: actions/checkout@v3\n      - name: Set up Python\n        uses: actions/setup-python@v4\n        with:\n          python-version: \'3.9\'  # Adjust Python version as needed\n\n      - name: Install Package from PyPI\n        run: |\n          pip install --no-cache-dir prophecy-lineage-extractor\n\n      - name: Extract and Send Prophecy Lineage\n        env:\n          PROPHECY_URL: "https://<custom>.prophecy.io"\n          MONITOR_TIME_ENV: ${{ vars.MONITOR_TIME_ENV }}\n          PROPHECY_PAT: ${{ secrets.PROPHECY_PAT }}\n          SMTP_HOST: "smtp.gmail.com"\n          SMTP_PORT: "587"\n          SMTP_USERNAME: ${{ secrets.SMTP_USERNAME }}\n          SMTP_PASSWORD: ${{ secrets.SMTP_PASSWORD }}\n          RECEIVER_EMAIL: "<myRecipient@company.com>"\n        run: |\n          python -m prophecy_lineage_extractor --project-id 36587 --pipeline-id 36587/pipelines/customer_orders_demo  --send-email --output-dir $OUTPUT_DIR\n\n      - name: Commit file to output directory\n        env:\n           GIT_COMMIT: ${{ vars.GIT_COMMIT }} # whether to commit output file to github\n        run: |\n          # set this in secret to enable git commits with appropriate git credentials\n          echo "Output Directory: \'$OUTPUT_DIR\'"\n          if [[ $GIT_COMMIT == "1" ]]; then\n              git config --global user.name \'gituser\'\n              git config --global user.email \'my.git.email@gmail.com\'\n              echo "Commiting enabled, adding output file"\n              git add $OUTPUT_DIR/*\n              echo "========================================"\n              git commit -m "[Github Action: main]: Adding excel lineage report"\n              echo "========================================"\n              echo "Pushing Changes to git"\n              git push\n          else\n              # simple version are created manually from code edits.\n              echo "Commiting to git is not enabled"\n          fi\n'})})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:" On a custom branch"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'name: Run Prophecy Lineage extractor on dev\n\non:\n  push:\n    branches:\n      - dev  # Trigger on merge to the dev branch\n    paths:\n      - \'datasets/**\'\n      - \'pipelines/**\'\n      - \'pbt_project.yml\'\n      - \'.github/workflows/prophecy_lineage_extractor_dev.yml\'\n\npermissions:\n  contents: write\n\njobs:\n  extract-and-mail-prophecy-lineage:\n    runs-on: ubuntu-latest\n    env:\n      OUTPUT_DIR: "output_dev"\n    steps:\n      - uses: actions/checkout@v3\n      - name: Set up Python\n        uses: actions/setup-python@v4\n        with:\n          python-version: \'3.9\'  # Adjust Python version as needed\n\n      - name: Install Package from PyPI\n        run: |\n          pip install --no-cache-dir prophecy-lineage-extractor\n\n      - name: Extract and Send Prophecy Lineage\n        env:\n          PROPHECY_URL: "https://<custom>.prophecy.io"\n          MONITOR_TIME_ENV: ${{ vars.MONITOR_TIME_ENV }}\n          PROPHECY_PAT: ${{ secrets.PROPHECY_PAT }}\n          SMTP_HOST: "smtp.gmail.com"\n          SMTP_PORT: "587"\n          SMTP_USERNAME: ${{ secrets.SMTP_USERNAME }}\n          SMTP_PASSWORD: ${{ secrets.SMTP_PASSWORD }}\n          RECEIVER_EMAIL: "<myRecipient@company.com>"\n        run: |\n          python -m prophecy_lineage_extractor --project-id 36587 --pipeline-id 36587/pipelines/customer_orders_demo  --send-email --output-dir $OUTPUT_DIR --branch dev\n\n      - name: Commit file to output directory\n        env:\n           GIT_COMMIT: ${{ vars.GIT_COMMIT }}  # Reference the GitHub variable here\n        run: |\n          # set this in secret to enable git commits with appropriate git credentials\n          echo "output dir \'$OUTPUT_DIR\'"\n          if [[ $GIT_COMMIT == "1" ]]; then\n              git config --global user.name \'gituser\'\n              git config --global user.email \'my.git.email@gmail.com\'\n              echo "Commiting enabled, adding output file"\n              git add $OUTPUT_DIR/*\n              echo "========================================"\n              git commit -m "[Github Action: dev]: Adding excel lineage report"\n              echo "========================================"\n              echo "Pushing Changes to git"\n              git push\n          else\n              # simple version are created manually from code edits.\n              echo "Commiting to git is not enabled"\n          fi\n'})})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"gitlab-actions-file",children:"GitLab Actions file"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create a .YML file in the project repository."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Add the below contents with your own environment variables to ",(0,r.jsx)(n.code,{children:".gitlab-ci.yml"}),":"]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"GitLab action"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'stages:\n- extract\n\nvariables:\n  GIT_COMMIT: "1" # to enable committing report file to git\n  OUTPUT_DIR: "output_dev"\nextract_and_mail:\n  stage: extract\n  image: python:3.9\n  script:\n    - pip install --no-cache-dir prophecy-lineage-extractor\n    - |\n      # gitlab ci/cd variables, access_token also need to be defined if using git commit\n      export PROPHECY_URL="$PROPHECY_URL"\n      export PROPHECY_PAT="$PROPHECY_PAT"\n      export SMTP_USERNAME="$SMTP_USERNAME"\n      export SMTP_PASSWORD="$SMTP_PASSWORD"\n      export SMTP_HOST="smtp.gmail.com"\n      export SMTP_PORT="587"\n      export RECEIVER_EMAIL="<myRecipient@company.com>"\n      # value in seconds for monitoring, this might be increased depending on pipeline size\n      export MONITOR_TIME_ENV="50"\n    - |\n      BRANCH="dev"\n      python -m prophecy_lineage_extractor \\\n        --project-id 36587 \\\n        --pipeline-id 36587/pipelines/customer_orders_demo \\\n        --send-email \\\n        --output-dir $OUTPUT_DIR \\\n        --branch $BRANCH\n    - |\n      if [ "$GIT_COMMIT" == "1" ]; then\n        echo "Git commit is enabled, output directory \'$OUTPUT_DIR\'"\n        git config --global user.name \'gituser\'\n        git config --global user.email \'my.git.email@gmail.com\'\n        git add $OUTPUT_DIR/*\n        git commit -m "[GitLab CI - $BRANCH] Adding excel lineage report"\n        git remote add gitlab_origin https://oauth2:$ACCESS_TOKEN@gitlab.com/pateash/ProphecyHelloWorld.git\n        echo "Pushing changes to git branch $BRANCH"\n        git push gitlab_origin HEAD:$BRANCH -o ci.skip # prevent triggering pipeline again\n      else\n          echo "Committing to git is not enabled"\n      fi\n  only:\n    refs:\n      - dev\n'})})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"output-example",children:"Output example"}),"\n",(0,r.jsx)(n.p,{children:"The lineage extractor output is in the form of an XLSX file."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Lineage extractor output",src:t(5064).A+"",width:"2620",height:"1509"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);