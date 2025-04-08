"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[25069],{28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(96540);const s={},d=t.createContext(s);function r(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(d.Provider,{value:n},e.children)}},47750:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/synth_0_2_proph_reqiuirements-c45e20cbb84de985a86b3520055b9c1f.png"},52264:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"extensibility/dependencies/spark-dependencies","title":"Spark dependencies","description":"Dependency management","source":"@site/docs/extensibility/dependencies/spark-dependencies.md","sourceDirName":"extensibility/dependencies","slug":"/engineers/dependencies","permalink":"/prophecy-docs-staging/preview/pr-587/engineers/dependencies","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"dependencies","permalink":"/prophecy-docs-staging/preview/pr-587/tags/dependencies"},{"inline":true,"label":"maven","permalink":"/prophecy-docs-staging/preview/pr-587/tags/maven"},{"inline":true,"label":"extensibility","permalink":"/prophecy-docs-staging/preview/pr-587/tags/extensibility"}],"version":"current","frontMatter":{"title":"Spark dependencies","id":"spark-dependencies","slug":"/engineers/dependencies","description":"Dependency management","tags":["dependencies","maven","extensibility"]},"sidebar":"mySidebar","previous":{"title":"Extensibility","permalink":"/prophecy-docs-staging/preview/pr-587/engineers/extensibility"},"next":{"title":"SQL dependencies","permalink":"/prophecy-docs-staging/preview/pr-587/analysts/dependencies"}}');var s=i(74848),d=i(28453);const r={title:"Spark dependencies",id:"spark-dependencies",slug:"/engineers/dependencies",description:"Dependency management",tags:["dependencies","maven","extensibility"]},o=void 0,a={},c=[{value:"Storage",id:"storage",level:2},{value:"View dependencies",id:"view-dependencies",level:2},{value:"Add dependencies",id:"add-dependencies",level:2},{value:"Update dependencies",id:"update-dependencies",level:2},{value:"Install dependencies on a Spark cluster",id:"install-dependencies-on-a-spark-cluster",level:2},{value:"Build System template",id:"build-system-template",level:2},{value:"Jobs support",id:"jobs-support",level:3},{value:"Managing dependencies for WHL format deployments",id:"managing-dependencies-for-whl-format-deployments",level:3},{value:"Run the PBT command",id:"run-the-pbt-command",level:4},{value:"Configuring Spark version",id:"configuring-spark-version",level:4}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Dependencies allow you to make use of third-party or custom code in your data pipelines and jobs. Dependencies can be\nwritten in Java, Scala, or PySpark, and can be connected to your data pipelines by pointing\nto ",(0,s.jsx)(n.a,{href:"https://mvnrepository.com/",children:"Maven"})," or ",(0,s.jsx)(n.a,{href:"https://pypi.org/",children:"PyPI"})," coordinates."]}),"\n",(0,s.jsx)(n.p,{children:"Dependencies can be stored at the project or pipeline level. Project-level dependencies are available to all pipelines in the project."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"We recommend that users store dependencies at the project level whenever possible to improve the experience of interactive development. This will minimize the time spent connecting to clusters when switching between pipelines in the IDE."})}),"\n",(0,s.jsx)(n.h2,{id:"storage",children:"Storage"}),"\n",(0,s.jsxs)(n.p,{children:["Dependencies are natively saved within your build system files. For example, if you're using Scala, dependencies are saved in the\n",(0,s.jsx)(n.strong,{children:"pom.xml"})," file. If you're using Python, dependencies are saved in the ",(0,s.jsx)(n.strong,{children:"setup.py"})," file."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Storage code for Scala and Python",src:i(64981).A+"",width:"2846",height:"900"})}),"\n",(0,s.jsx)(n.h2,{id:"view-dependencies",children:"View dependencies"}),"\n",(0,s.jsx)(n.p,{children:"There are two ways to view all of your project dependencies:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Open your project from the ",(0,s.jsx)(n.strong,{children:"Metadata"})," page. Then, click on the ",(0,s.jsx)(n.strong,{children:"Dependencies"})," tab."]}),"\n",(0,s.jsxs)(n.li,{children:["Open your project in the ",(0,s.jsx)(n.strong,{children:"Pipeline editor"}),". Then, click ",(0,s.jsx)(n.strong,{children:"\u2026 > Dependencies"})," from the project header."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You can add, edit, and delete dependencies from these views, too."}),"\n",(0,s.jsx)(n.h2,{id:"add-dependencies",children:"Add dependencies"}),"\n",(0,s.jsxs)(n.p,{children:["The table below describes the fields available when you select ",(0,s.jsx)(n.strong,{children:"Add Dependency"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Scope"}),(0,s.jsx)(n.td,{children:"The dependency is enabled at the project level or the pipeline level."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:"The dependency is either from the Package Hub, Scala (Maven) or Python (PyPi)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Name"}),(0,s.jsx)(n.td,{children:"This will identify the dependency."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Version/Package/Coordinates"}),(0,s.jsxs)(n.td,{children:["For Package Hub dependencies, input the package version. For Scala, use the Maven coordinates in the ",(0,s.jsx)(n.code,{children:"groupId:artifcatId:version"})," format. For example, use ",(0,s.jsx)(n.code,{children:"org.postgresql:postgresql:42.3.3"})," For Python, use the package and the version number."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Repository (Advanced)"}),(0,s.jsx)(n.td,{children:"If you'd like to use an external repository (like your organization\u2019s repository), you can specify the link to it in this field."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Exclusion (Advanced)"}),(0,s.jsxs)(n.td,{children:["For Scala only. This is an optional list of ",(0,s.jsx)(n.code,{children:"groupId:artifactId"})," pairs of dependencies you'd like to exclude. Learn more about dependency exclusion ",(0,s.jsx)(n.a,{href:"https://maven.apache.org/guides/introduction/introduction-to-optional-and-excludes-dependencies.html#dependency-exclusions",children:"here"}),"."]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Once you save a new dependency, Prophecy will validate it to make sure the dependency coordinates are valid and accessible. If\nthat fails, you should see an ",(0,s.jsx)(n.strong,{children:"invalid coordinates"})," error."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["In rare cases, your dependency might be only accessible to the Spark cluster or the build system, but not to Prophecy\nitself. If you're confident that the dependency is correct, but the validation error shows up, it's safe to press ",(0,s.jsx)(n.strong,{children:"Save\nAnyways"})," to ignore that warning."]})}),"\n",(0,s.jsx)(n.h2,{id:"update-dependencies",children:"Update dependencies"}),"\n",(0,s.jsxs)(n.p,{children:["To update dependencies, you can do so in the Dependencies section of your pipeline IDE. The ",(0,s.jsx)(n.strong,{children:"Update"})," label should appear if an update is available. Connecting a Prophecy project to a Spark cluster with a different dependency version will prompt a cluster restart."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Update dependencies",src:i(47750).A+"",width:"2880",height:"912"})}),"\n",(0,s.jsx)(n.h2,{id:"install-dependencies-on-a-spark-cluster",children:"Install dependencies on a Spark cluster"}),"\n",(0,s.jsx)(n.p,{children:"When you connect a pipeline to a cluster, dependencies are automatically installed on that cluster. However, there are two cases that can prevent automatic installation:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Dependency on the cluster's Spark and Scala versions."})," A few dependencies depend on your cluster\u2019s Spark and Scala versions. You can usually find these version requirements in the respective repositories. For example, take a look at the ",(0,s.jsx)(n.a,{href:"https://mvnrepository.com/artifact/com.crealytics/spark-excel",children:"Spark Excel"})," page in the Maven Repository."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Required manual installation on cluster"}),". Additionally, certain dependencies must be installed directly on your cluster. This is documented per dependency."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Update Spark cluster",src:i(76216).A+"",width:"2880",height:"912"})}),"\n",(0,s.jsx)(n.h2,{id:"build-system-template",children:"Build System template"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Build System"})," template in the Settings tab of a project defines how build files are generated for all pipelines within a project. You can edit the template to include specific items you need during the build process\u2014for example, adding the JaCoCo plugin to enable coverage report generation."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"For any help required to enable the template for older projects, please reach out to the Prophecy support team."})}),"\n",(0,s.jsx)(n.h3,{id:"jobs-support",children:"Jobs support"}),"\n",(0,s.jsxs)(n.p,{children:["When the Build System template is enabled for a project and you ",(0,s.jsx)(n.a,{href:"#add-dependencies",children:"add a dependency"}),", Prophecy will automatically update your ",(0,s.jsx)(n.strong,{children:"pom.xml"})," or ",(0,s.jsx)(n.strong,{children:"setup.py"})," files to include it."]}),"\n",(0,s.jsxs)(n.p,{children:["Though not recommended, if templating is disabled and you still want to add dependencies that are visible to your pipelines when scheduled, you can manually edit the ",(0,s.jsx)(n.strong,{children:"pom.xml"})," or ",(0,s.jsx)(n.strong,{children:"setup.py"})," files. Below is an example for a Scala project."]}),"\n",(0,s.jsxs)(n.p,{children:["To add the ",(0,s.jsx)(n.code,{children:"io.github.etspaceman:scalacheck-faker_2.12:7.0.0"})," dependency, edit the ",(0,s.jsx)(n.strong,{children:"pom.xml"})," like so:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"...\n<dependencies>\n   <dependency>\n       <groupId>io.github.etspaceman</groupId>\n       <artifactId>scalacheck-faker_2.12</artifactId>\n       <version>7.0.0</version>\n   </dependency>\n\n   ...\n</dependencies>\n...\n"})}),"\n",(0,s.jsx)(n.h3,{id:"managing-dependencies-for-whl-format-deployments",children:"Managing dependencies for WHL format deployments"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Special consideration for Scala dependencies in Pyspark projects must be given when deploying WHL files outside of PBT.\nIf you do not create jobs in the Prophecy editor or use the ",(0,s.jsx)(n.code,{children:"pbt deploy"})," or ",(0,s.jsx)(n.code,{children:"pbt deploy-v2"})," commands, then this\nsection will help track those Scala dependencies."]})}),"\n",(0,s.jsxs)(n.p,{children:["When manually deploying pipelines using WHL format, you need to account for dependencies in both Python and Scala.\nWHL files inherently record Python dependencies, which ensures Python-related packages are handled during deployment.\nYou can use the following option in ",(0,s.jsx)(n.a,{href:"/engineers/prophecy-build-tool",children:"Prophecy Build Tool (PBT)"})," to\ngenerate and include Scala dependency metadata in your deployment."]}),"\n",(0,s.jsx)(n.h4,{id:"run-the-pbt-command",children:"Run the PBT command"}),"\n",(0,s.jsx)(n.p,{children:"Run the following PBT command in your project directory to capture Scala dependencies and include them in the WHL package:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pbt build-v2 --add-pom-xml-python --path .\n"})}),"\n",(0,s.jsx)(n.p,{children:"This command will:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Generate a dummy ",(0,s.jsx)(n.code,{children:"pom.xml"})," and ",(0,s.jsx)(n.code,{children:"MAVEN_COORDINATES"})," containing Maven dependencies.\n(These files contain the same information in different formats for your convenience.)"]}),"\n",(0,s.jsxs)(n.li,{children:["Add these files to the WHL package under the directory: ",(0,s.jsx)(n.code,{children:"{package_name}-1.0.data/data/"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"configuring-spark-version",children:"Configuring Spark version"}),"\n",(0,s.jsx)(n.p,{children:"Set the SPARK_VERSION environment variable to specify the Spark version you intend to use in your execution environment."}),"\n",(0,s.jsxs)(n.p,{children:["The version must end with ",(0,s.jsx)(n.code,{children:".0"}),". To set the environment variable, run a command like ",(0,s.jsx)(n.code,{children:"export SPARK_VERSION=3.4.0"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If SPARK_VERSION is not set, PBT will set the Spark version in the Maven coordinate with the placeholder string ",(0,s.jsx)(n.code,{children:"{{REPLACE_ME}}"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},64981:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/dependencies-storage-75027ef62946ad019ace834194ce35d3.png"},76216:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/synth_0_1_requirements-2c772b3704bbb6be6781bf853266fdaf.png"}}]);