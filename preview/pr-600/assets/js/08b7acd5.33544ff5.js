"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[20767],{28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var s=i(96540);const r={},l=s.createContext(r);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(l.Provider,{value:n},e.children)}},34356:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"Orchestration/alternative-schedulers","title":"Alternative Schedulers","description":"Support for Alternative Orchestration Solutions","source":"@site/docs/Orchestration/alternative-schedulers.md","sourceDirName":"Orchestration","slug":"/Orchestration/alternative-schedulers","permalink":"/prophecy-docs-staging/preview/pr-600/Orchestration/alternative-schedulers","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"jobs","permalink":"/prophecy-docs-staging/preview/pr-600/tags/jobs"},{"inline":true,"label":"deployment","permalink":"/prophecy-docs-staging/preview/pr-600/tags/deployment"},{"inline":true,"label":"orchestration","permalink":"/prophecy-docs-staging/preview/pr-600/tags/orchestration"},{"inline":true,"label":"spark-submit","permalink":"/prophecy-docs-staging/preview/pr-600/tags/spark-submit"},{"inline":true,"label":"runtime config","permalink":"/prophecy-docs-staging/preview/pr-600/tags/runtime-config"}],"version":"current","frontMatter":{"title":"Alternative Schedulers","id":"alternative-schedulers","description":"Support for Alternative Orchestration Solutions","tags":["jobs","deployment","orchestration","spark-submit","runtime config"]}}');var r=i(74848),l=i(28453);const a={title:"Alternative Schedulers",id:"alternative-schedulers",description:"Support for Alternative Orchestration Solutions",tags:["jobs","deployment","orchestration","spark-submit","runtime config"]},o=void 0,t={},c=[{value:"Basic Spark Submit",id:"basic-spark-submit",level:2},{value:"Scala Spark pipelines",id:"scala-spark-pipelines",level:3},{value:"PySpark pipelines",id:"pyspark-pipelines",level:3},{value:"Set Runtime Configuration variables",id:"set-runtime-configuration-variables",level:3},{value:"<code>-i</code> set the pipeline Configuration instance",id:"-i-set-the-pipeline-configuration-instance",level:4},{value:"<code>-i</code> examples",id:"-i-examples",level:5},{value:"<code>-O</code> override many parameters as a json blob",id:"-o-override-many-parameters-as-a-json-blob",level:4},{value:"<code>-0</code> examples",id:"-0-examples",level:5},{value:"<code>-C</code> override individual parameters",id:"-c-override-individual-parameters",level:4},{value:"<code>-C</code> examples",id:"-c-examples",level:5},{value:"<code>-f</code> set configuration using a file",id:"-f-set-configuration-using-a-file",level:4},{value:"<code>-f</code> examples",id:"-f-examples",level:5}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"basic-spark-submit",children:"Basic Spark Submit"}),"\n",(0,r.jsx)(n.p,{children:"The following sections contain Scala, PySpark and runtime configuration variables to use with custom orchestration solutions."}),"\n",(0,r.jsx)(n.h3,{id:"scala-spark-pipelines",children:"Scala Spark pipelines"}),"\n",(0,r.jsx)(n.p,{children:"Prerequisites:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Optional: Modify ",(0,r.jsx)(n.code,{children:"ivysettings.xml"})," to point to a custom Maven mirror."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:['Given a Scala pipeline named "demo_pipeline" with a JAR artifact from ',(0,r.jsx)(n.a,{href:"/engineers/prophecy-build-tool",children:"PBT"}),"\ncalled ",(0,r.jsx)(n.code,{children:"demo_pipeline-1.0.jar"})," you could call the following commands to invoke the Main class from the JAR\nfile and run the pipeline on a local Spark cluster."]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["Make sure to use the correct version of ",(0,r.jsx)(n.code,{children:"io.prophecy:prophecy-libs_2.12"})," for your pipeline.\nFind this version in the ",(0,r.jsx)(n.code,{children:"pom.xml"})," or ",(0,r.jsx)(n.code,{children:"pbt_project.yml"})," in the pipeline's source code directory.\nAlternatively use a tool like ",(0,r.jsx)(n.code,{children:"jdeps"})," on the jar file itself."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'spark-submit \\\n  --master yarn \\\n  --deploy-mode cluster \\\n  --driver-memory 8g \\\n  --executor-memory 4g \\\n  --executor-cores 4  \\\n  --packages io.prophecy:prophecy-libs_2.12:3.5.0-8.0.29 \\\n  --class io.prophecy.pipelines.demo_pipeline.Main \\\n  demo_pipeline-1.0.jar -i default -O "{}"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"pyspark-pipelines",children:"PySpark pipelines"}),"\n",(0,r.jsx)(n.p,{children:"Prerequisites:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Install Python dependencies by installing the WHL file using ",(0,r.jsx)(n.code,{children:"pip"}),".","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"pip install ./demo_pipeline-1.0-py3-none-any.whl"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Gather necessary Maven dependencies and put into the ",(0,r.jsx)(n.code,{children:"--jars"})," (local) or ",(0,r.jsx)(n.code,{children:"--packages"})," (repo) option.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"PBT will have a command to generate dependencies or pom.xml for PySpark projects."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Optional: Modify ivysettings.xml to point to a custom Maven mirror or PyPi mirror."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:['Given a PySpark pipeline named "demo_pipeline" with a WHL artifact from ',(0,r.jsx)(n.a,{href:"/engineers/prophecy-build-tool",children:"PBT"}),"\ncalled ",(0,r.jsx)(n.code,{children:"demo_pipeline-1.0-py3-none-any.whl"})," you could call the following commands to invoke the ",(0,r.jsx)(n.code,{children:"main()"})," method from the WHL\nfile using a customized launcher script."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:' spark-submit \\\n  --master yarn \\\n  --deploy-mode cluster \\\n  --driver-memory 8g \\\n  --executor-memory 4g \\\n  --executor-cores 4  \\\n  --packages io.prophecy:prophecy-libs_2.12:3.5.0-8.0.29 \\\n  --py-files demo_pipeline-1.0-py3-none-any.whl \\\n  launcher.py -i default -O "{}"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["In this example ",(0,r.jsx)(n.code,{children:"launcher.py"})," would import the whl file and call the ",(0,r.jsx)(n.code,{children:"main()"})," entrypoint like so:"]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"This launcher must import the name of your specific pipeline package!"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from demo_pipeline import main\n\nmain()\n"})}),"\n",(0,r.jsx)(n.h3,{id:"set-runtime-configuration-variables",children:"Set Runtime Configuration variables"}),"\n",(0,r.jsxs)(n.p,{children:['In some cases you may want to override runtime configuration variables of a pipeline.\nWe offer several options for changing the pipeline configuration at runtime. Each example will show a sample\nas "parameters" (e.g. for a Databricks job) and as "sys args" (e.g. for passing at the end of a ',(0,r.jsx)(n.code,{children:"spark-submit"})," command)."]}),"\n",(0,r.jsx)(n.p,{children:"Sample Configuration Schema for below examples:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"str_var"}),(0,r.jsx)(n.td,{children:"string"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"bool_var"}),(0,r.jsx)(n.td,{children:"boolean"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"float_var"}),(0,r.jsx)(n.td,{children:"float"})]})]})]}),"\n",(0,r.jsxs)(n.h4,{id:"-i-set-the-pipeline-configuration-instance",children:[(0,r.jsx)(n.code,{children:"-i"})," set the pipeline Configuration instance"]}),"\n",(0,r.jsxs)(n.p,{children:["A pipeline may be run with a different pipeline Configuration instance by using the ",(0,r.jsx)(n.code,{children:"-i"})," option and providing the name of the configuration profile instance. For more information on configuration instances and overrides, see ",(0,r.jsx)(n.a,{href:"/engineers/configurations",children:"Pipeline configuration"}),"."]}),"\n",(0,r.jsxs)(n.h5,{id:"-i-examples",children:[(0,r.jsx)(n.code,{children:"-i"})," examples"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["as parameters: ",(0,r.jsx)(n.code,{children:"['-i', 'default']"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["as sysargs: ",(0,r.jsx)(n.code,{children:"-i default"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"-o-override-many-parameters-as-a-json-blob",children:[(0,r.jsx)(n.code,{children:"-O"})," override many parameters as a json blob"]}),"\n",(0,r.jsxs)(n.p,{children:["This may be used in conjunction with ",(0,r.jsx)(n.code,{children:"-i"})," and it will only override parameters which are given. You must\nspecify the name and value of each variable that you want to override."]}),"\n",(0,r.jsxs)(n.h5,{id:"-0-examples",children:[(0,r.jsx)(n.code,{children:"-0"})," examples"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["as parameters: ",(0,r.jsx)(n.code,{children:'[\'-O\', \'{"str_var":"overridden", "float_var":0.5}\']'})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["as sysargs: ",(0,r.jsx)(n.code,{children:'-O "{\\"str_var\\":\\"overridden\\",\\"float_var\\":0.5}"'})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"-c-override-individual-parameters",children:[(0,r.jsx)(n.code,{children:"-C"})," override individual parameters"]}),"\n",(0,r.jsxs)(n.p,{children:["This may be used in conjunction with ",(0,r.jsx)(n.code,{children:"-i"})," and it will only override parameters which are given.\nThis option may be used more than once."]}),"\n",(0,r.jsxs)(n.h5,{id:"-c-examples",children:[(0,r.jsx)(n.code,{children:"-C"})," examples"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["as parameters: ",(0,r.jsx)(n.code,{children:"['-C', 'str_var=test1', 'float_var=0.5']"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["as sysargs: ",(0,r.jsx)(n.code,{children:"-C str_var=test1 float_var=0.5"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"-f-set-configuration-using-a-file",children:[(0,r.jsx)(n.code,{children:"-f"})," set configuration using a file"]}),"\n",(0,r.jsxs)(n.p,{children:["This option will set all parameters for a pipeline by using a json file which can be reached locally by the\n",(0,r.jsx)(n.code,{children:"spark-submit"})," command."]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"All Configuration Schema fields must be provided in this file."})}),"\n",(0,r.jsxs)(n.h5,{id:"-f-examples",children:[(0,r.jsx)(n.code,{children:"-f"})," examples"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["as parameters: ",(0,r.jsx)(n.code,{children:"['-f', '/path/to/somefile.json']"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["as sysargs: ",(0,r.jsx)(n.code,{children:"-f /path/to/somefile.json"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example json file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "str_var": "vendor1",\n  "bool_var": true,\n  "float_var": 0.5\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);