"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[43171],{28453:(e,i,s)=>{s.d(i,{R:()=>n,x:()=>d});var r=s(96540);const t={},c=r.createContext(t);function n(e){const i=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),r.createElement(c.Provider,{value:i},e.children)}},81793:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"getting-help/fabric-diagnostics","title":"Fabric diagnostics","description":"Troubleshoot fabric issues using diagnostics","source":"@site/docs/getting-help/diagnostics.md","sourceDirName":"getting-help","slug":"/fabric-diagnostics","permalink":"/prophecy-docs-staging/preview/pr-617/fabric-diagnostics","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"diagnostics","permalink":"/prophecy-docs-staging/preview/pr-617/tags/diagnostics"},{"inline":true,"label":"fabric","permalink":"/prophecy-docs-staging/preview/pr-617/tags/fabric"}],"version":"current","frontMatter":{"title":"Fabric diagnostics","id":"fabric-diagnostics","slug":"/fabric-diagnostics","description":"Troubleshoot fabric issues using diagnostics","tags":["diagnostics","fabric"]},"sidebar":"adminSidebar","previous":{"title":"Send info from the Spark cluster","permalink":"/prophecy-docs-staging/preview/pr-617/getting-help/spark-cluster-details"},"next":{"title":"Getting help with Prophecy","permalink":"/prophecy-docs-staging/preview/pr-617/getting-help"}}');var t=s(74848),c=s(28453);const n={title:"Fabric diagnostics",id:"fabric-diagnostics",slug:"/fabric-diagnostics",description:"Troubleshoot fabric issues using diagnostics",tags:["diagnostics","fabric"]},d=void 0,a={},o=[{value:"Diagnostics error codes",id:"diagnostics-error-codes",level:2}];function l(e){const i={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Troubleshooting Prophecy fabrics is easy with built-in diagnostics. The descriptions are designed to help users to independently identify and resolve issues. When creating or connecting to a fabric, Prophecy automatically tests for connectivity. This feature helps users to determine whether the issue lies within Prophecy itself or in other components of the data ecosystem."}),"\n",(0,t.jsx)(i.h2,{id:"diagnostics-error-codes",children:"Diagnostics error codes"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Error Code"}),(0,t.jsx)(i.th,{children:"Symptom"}),(0,t.jsx)(i.th,{children:"Provider"}),(0,t.jsx)(i.th,{children:"Cause"}),(0,t.jsx)(i.th,{children:"Resolution"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"10000"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Is missing from the classpath"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/prophecy-docs-staging/preview/pr-617/administration/fabrics/Spark-fabrics/databricks/",children:"Databricks"})}),(0,t.jsx)(i.td,{children:"Prophecy Library(Scala) is incorrect. You're probably using thin jar."}),(0,t.jsxs)(i.td,{children:["Use assembly ",(0,t.jsx)(i.code,{children:"jar(${scalaFatJarName})"})," in the library section of the fabric settings."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"10001"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"DRIVER_LIBRARY_INSTALLATION_FAILURE"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/prophecy-docs-staging/preview/pr-617/administration/fabrics/Spark-fabrics/databricks/",children:"Databricks"})}),(0,t.jsx)(i.td,{children:"Prophecy Library(Scala/Python) is incorrect. Databricks could not install it."}),(0,t.jsx)(i.td,{children:"Please provide the valid library path in the fabric."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"10002"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"object prophecy is not a member of package"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/prophecy-docs-staging/preview/pr-617/administration/fabrics/Spark-fabrics/livy",children:"Livy"})}),(0,t.jsx)(i.td,{children:"Prophecy Library(Scala) is incorrect."}),(0,t.jsxs)(i.td,{children:["Please ensure that the library path exists and you\u2019re using the assembly ",(0,t.jsx)(i.code,{children:"jar(${scalaFatJarName})"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"10003"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.code,{children:"cannot be added to user sessions"})," and ",(0,t.jsx)(i.code,{children:"prophecy_libs"})]}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/prophecy-docs-staging/preview/pr-617/administration/fabrics/Spark-fabrics/livy",children:"Livy"})}),(0,t.jsx)(i.td,{children:"Prophecy Library(Python) is incorrect."}),(0,t.jsxs)(i.td,{children:["Please ensure that the library path exists and you\u2019re using correct ",(0,t.jsx)(i.code,{children:"file(${pythonPLibName})"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"10004"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.code,{children:"for method"})," and ",(0,t.jsx)(i.code,{children:"too many arguments"})]}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/prophecy-docs-staging/preview/pr-617/administration/fabrics/Spark-fabrics/livy",children:"Livy"})}),(0,t.jsx)(i.td,{children:"Prophecy Library(Scala) is incompatible."}),(0,t.jsxs)(i.td,{children:["Please use the correct ",(0,t.jsx)(i.code,{children:"version(${Globals.prophecyLibsVersion})"})," in the library section of fabric settings."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"10005"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.code,{children:"No module named"})," and ",(0,t.jsx)(i.code,{children:"prophecy"})]}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/prophecy-docs-staging/preview/pr-617/administration/fabrics/Spark-fabrics/livy",children:"Livy"})}),(0,t.jsx)(i.td,{children:"Prophecy Library(Python) is incorrect."}),(0,t.jsx)(i.td,{children:"Please provide the valid library path in the fabric."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"10006"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"illegal start of simple expression"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/prophecy-docs-staging/preview/pr-617/administration/fabrics/Spark-fabrics/livy",children:"Livy"})}),(0,t.jsx)(i.td,{children:"Python version in livy/hadoop is incorrect."}),(0,t.jsx)(i.td,{children:"Please make sure you have python3 there."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"10007"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"IncompatibleClassChangeError"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/prophecy-docs-staging/preview/pr-617/administration/fabrics/Spark-fabrics/livy",children:"Livy"})}),(0,t.jsx)(i.td,{children:"Prophecy Library(Scala) is incompatible with your Spark version."}),(0,t.jsxs)(i.td,{children:["Please use the correct assembly ",(0,t.jsx)(i.code,{children:"jar(${scalaFatJarName})"})," in the library section of the fabric settings."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"10008"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.code,{children:'"FileNotFoundException'})," and ",(0,t.jsx)(i.code,{children:'prophecy_libs"'})]}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/prophecy-docs-staging/preview/pr-617/administration/fabrics/Spark-fabrics/livy",children:"Livy"})}),(0,t.jsx)(i.td,{children:"Prophecy Library(Python) path does not exist."}),(0,t.jsx)(i.td,{children:"Please ensure that the file exists as per the path in the library section of the fabric settings."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"10009"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.code,{children:"503 Service Temporarily Unavailable"})," and ",(0,t.jsx)(i.code,{children:"LivyRestClient"})]}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"https://livy.apache.org/docs/latest/rest-api.html",children:"Livy"})}),(0,t.jsx)(i.td,{children:"Livy service is down."}),(0,t.jsx)(i.td,{children:"Please make sure the livy service is up before executing this command."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"10010"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.code,{children:"SQLNonTransientConnectionException, rds.amazonaws.com"})," or ",(0,t.jsx)(i.code,{children:"Unable to instantiate, HiveMetaStoreClient"})]}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"https://docs.databricks.com/en/resources/supported-regions.html#rds",children:"Unity Catalog"})}),(0,t.jsx)(i.td,{children:"Databricks cluster can't access RDS service."}),(0,t.jsxs)(i.td,{children:["Please ensure that the cluster can access to the same region's RDS endpoint as documented ",(0,t.jsx)(i.a,{href:"https://docs.databricks.com/en/resources/supported-regions.html#rds",children:"here"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"10011"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.code,{children:"UnauthorizedCommandException"})," and ",(0,t.jsx)(i.code,{children:"This execution contained at leas"})," and ",(0,t.jsx)(i.code,{children:"disallowed language"})]}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/prophecy-docs-staging/preview/pr-617/projects",children:"Unity Catalog"})}),(0,t.jsx)(i.td,{children:"Shared cluster in unity catalog does not allow Scala commands."}),(0,t.jsx)(i.td,{children:"Please use this cluster with Python Pipeline."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"10012"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.code,{children:"UnauthorizedCommandException"})," and ",(0,t.jsx)(i.code,{children:"This execution contained at leas"})," and ",(0,t.jsx)(i.code,{children:"disallowed language"})]}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"https://docs.databricks.com/en/administration-guide/users-groups/index.html",children:"Databricks"})}),(0,t.jsxs)(i.td,{children:["This cluster does not allow ",(0,t.jsx)(i.code,{children:"${pipeline's language}"})," command."]}),(0,t.jsxs)(i.td,{children:["Please check with the Databricks workspace administrator to provide the execution access to ",(0,t.jsx)(i.code,{children:"${pipeline's language}"})," language."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"10013"})}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.code,{children:"javax.net.ssl.SSLHandshakeException"})," and ",(0,t.jsx)(i.code,{children:"PKIX path building failed"})]}),(0,t.jsxs)(i.td,{children:["Livy / ",(0,t.jsx)(i.a,{href:"https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-security.html",children:"EMR"})]}),(0,t.jsx)(i.td,{children:"Certificates provided in EMR cluster's security configuration are wrong."}),(0,t.jsx)(i.td,{children:"Please ensure that EMR cluster's security configuration is using correct certificates."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"10014"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"HostUnreachableErrorCode_10014"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"https://docs.databricks.com/en/administration-guide/users-groups/index.html",children:"Databricks"})}),(0,t.jsx)(i.td,{children:"Unable to reach Databricks endpoint."}),(0,t.jsx)(i.td,{children:"Make sure the workspace is active and reachable."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"10015"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"HiveMetastoreNotEnabledErrorCode_10015"})}),(0,t.jsx)(i.td,{children:"Hive Metastore"}),(0,t.jsx)(i.td,{children:"We were unable to write execution metrics because Hive Metastore is not enabled on your Spark."}),(0,t.jsx)(i.td,{children:"Please enable Hive Metastore on Spark, or disable execution metrics in Prophecy."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"10016"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"AuthenticationFAiled_10016"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/prophecy-docs-staging/preview/pr-617/administration/fabrics/Spark-fabrics/livy",children:"Livy"})}),(0,t.jsx)(i.td,{children:"Authentication failed. Wrong or no auth credentials were provided."}),(0,t.jsx)(i.td,{children:"Make sure correct auth credentials are provided."})]})]})]})]})}function h(e={}){const{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}}}]);