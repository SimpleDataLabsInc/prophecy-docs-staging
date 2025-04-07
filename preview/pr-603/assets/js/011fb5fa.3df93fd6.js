"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[75707],{28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>a});var t=n(96540);const i={},s=t.createContext(i);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:r},e.children)}},41692:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"administration/self-hosted/configure-sparkedge","title":"Use a custom artifact repository (Sparkedge)","description":"Connect to private artifact repositories or mirrors","source":"@site/docs/administration/self-hosted/configure-sparkedge.md","sourceDirName":"administration/self-hosted","slug":"/administration/self-hosted/configure-sparkedge","permalink":"/prophecy-docs-staging/preview/pr-603/administration/self-hosted/configure-sparkedge","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"sparkedge","permalink":"/prophecy-docs-staging/preview/pr-603/tags/sparkedge"},{"inline":true,"label":"mirror","permalink":"/prophecy-docs-staging/preview/pr-603/tags/mirror"},{"inline":true,"label":"artifact repository","permalink":"/prophecy-docs-staging/preview/pr-603/tags/artifact-repository"},{"inline":true,"label":"artifactory","permalink":"/prophecy-docs-staging/preview/pr-603/tags/artifactory"},{"inline":true,"label":"custom","permalink":"/prophecy-docs-staging/preview/pr-603/tags/custom"},{"inline":true,"label":"private","permalink":"/prophecy-docs-staging/preview/pr-603/tags/private"},{"inline":true,"label":"jfrog","permalink":"/prophecy-docs-staging/preview/pr-603/tags/jfrog"},{"inline":true,"label":"library","permalink":"/prophecy-docs-staging/preview/pr-603/tags/library"}],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Use a custom artifact repository (Sparkedge)","id":"configure-sparkedge","description":"Connect to private artifact repositories or mirrors","sidebar_position":5,"sidebar_label":"Custom artifact repository","tags":["sparkedge","mirror","artifact repository","artifactory","custom","private","jfrog","library"]},"sidebar":"adminSidebar","previous":{"title":"Upgrades and backups","permalink":"/prophecy-docs-staging/preview/pr-603/administration/self-hosted/upgrade-backup-restore"},"next":{"title":"Resource monitoring","permalink":"/prophecy-docs-staging/preview/pr-603/administration/self-hosted/resource-monitoring"}}');var i=n(74848),s=n(28453);const o={title:"Use a custom artifact repository (Sparkedge)",id:"configure-sparkedge",description:"Connect to private artifact repositories or mirrors",sidebar_position:5,sidebar_label:"Custom artifact repository",tags:["sparkedge","mirror","artifact repository","artifactory","custom","private","jfrog","library"]},a=void 0,l={},c=[{value:"Requirements",id:"requirements",level:3},{value:"Maven",id:"maven",level:2},{value:"Ivy",id:"ivy",level:2},{value:"PyPI",id:"pypi",level:2},{value:"Proxy configuration (optional)",id:"proxy-configuration-optional",level:2}];function p(e){const r={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{Details:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:"This page outlines how to configure the Sparkedge pod to use a private Maven or PyPI artifact repository (mirror)."}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsx)(r.p,{children:"Sparkedge is responsible for actions like running unit tests, building gem packages with custom gems, and installing pipeline dependencies in sandboxes."})}),"\n",(0,i.jsx)(r.h3,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:(0,i.jsx)(r.strong,{children:"Condition"})}),(0,i.jsx)(r.th,{children:(0,i.jsx)(r.strong,{children:"Action Required"})})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Using a custom artifactory for hosting Scala packages"}),(0,i.jsxs)(r.td,{children:["Update both ",(0,i.jsx)(r.strong,{children:"Maven"})," and ",(0,i.jsx)(r.strong,{children:"Ivy"})," settings"]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Working on PySpark projects and using a custom PyPI mirror"}),(0,i.jsxs)(r.td,{children:["Update ",(0,i.jsx)(r.strong,{children:"PyPI"})," settings"]})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"maven",children:"Maven"}),"\n",(0,i.jsx)(r.p,{children:"To configure custom artifact repository for Maven in Sparkedge, follow these steps:"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Either create or locate the settings.xml file to hold the Maven configuration."}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Example settings.xml"}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:'<?xml version="1.0" encoding="UTF-8"?>\n<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">\n   <servers>\n      <server>\n            <id>prophecy-repository</id>\n            <username>${env.ARTIFACTORY_USERNAME}</username>\n            <password>${env.ARTIFACTORY_PASSWORD}</password>\n      </server>\n      <server>\n            <id>release-http-unblocker</id>\n            <username>${env.ARTIFACTORY_USERNAME}</username>\n            <password>${env.ARTIFACTORY_PASSWORD}</password>\n      </server>\n   </servers>\n   <profiles>\n      <profile>\n            <id>maven-https</id>\n            <activation>\n               <activeByDefault>true</activeByDefault>\n            </activation>\n            <properties>\n               <altDeploymentRepository>prophecy-repository::default::http://artifactory:8081/artifactory/repository/maven-internal/</altDeploymentRepository>\n            </properties>\n            <repositories>\n               <repository>\n                  <id>central1</id>\n                  <url>https://your.private-mirror.com/artifactory/maven-external/</url>\n                  <snapshots>\n                        <enabled>false</enabled>\n                  </snapshots>\n                  <releases>\n                        <updatePolicy>always</updatePolicy>\n                  </releases>\n               </repository>\n               <repository>\n                  <id>oss1-staging-repo</id>\n                  <name>oss1-staging-repository</name>\n                  <url>https://s01.oss.sonatype.org/content/groups/staging//</url>\n                  <releases>\n                        <updatePolicy>always</updatePolicy>\n                  </releases>\n               </repository>\n               <repository>\n                  <id>prophecy-internal-repo</id>\n                  <name>prophecy-repository</name>\n                  <url>http://artifactory:8081/artifactory/repository/maven-internal/</url>\n                  <releases>\n                        <updatePolicy>always</updatePolicy>\n                  </releases>\n               </repository>\n            </repositories>\n            <pluginRepositories>\n               <pluginRepository>\n                  <id>central1</id>\n                  <url>https://your.private-mirror.com/artifactory/maven-external/</url>\n                  <snapshots>\n                        <enabled>false</enabled>\n                  </snapshots>\n               </pluginRepository>\n            </pluginRepositories>\n      </profile>\n   </profiles>\n   <mirrors>\n      <mirror>\n            <id>release-http-unblocker</id>\n            <mirrorOf>prophecy-internal-repo</mirrorOf>\n            <name>prophecy-repository</name>\n            <url>http://artifactory:8081/artifactory/repository/maven-internal/</url>\n      </mirror>\n   </mirrors>\n</settings>\n'})})]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"If you want to modify the existing file, you can retrieve it from the Sparkedge pod using the following command:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"kubectl cp -n <namespace> <sparkedgepod>:/opt/docker/apache-maven-3.9.6/conf/settings.xml settings.xml\n"})}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Edit the settings.xml file to include the details of your custom artifact repository."}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Run the following to create a Kubernetes secret:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"kubectl create secret generic <secretname>-maven --from-file=settings.xml -n <namespace>\n"})}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Run ",(0,i.jsx)(r.code,{children:"kubectl edit prophecycluster -n <namespace>"})," to edit the prophecycluster YAML."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["In the editor, add the following under ",(0,i.jsx)(r.code,{children:"sparkedge"}),":"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"external-repo:\n   overwrite-maven-settings: true\n   maven-settings-secret: <maven-secret-name>\n   maven-settings-path: /home/demiourgos728/.m2/settings.xml\n"})}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Save and exit the editor."}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Validate the settings.xml file inside the Sparkedge pod by running:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"kubectl -n <namespace> exec <sparkedgepod name> -- cat /home/demiourgos728/.m2/settings.xml\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"ivy",children:"Ivy"}),"\n",(0,i.jsx)(r.p,{children:"For custom Maven repository access in Ivy, use the following steps:"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Create a new ivysettings.xml file that contains your custom repository credentials and resolver configuration. The file ",(0,i.jsx)(r.strong,{children:"must"})," be named ivysettings.xml. Example:"]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Example ivysettings.xml"}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:'<ivysettings>\n   <settings defaultResolver="default"/>\n   <credentials>\n      <credential host="https://your.private-mirror.com/artifactory/maven-external/"\n                  realm="Your Realm" username="your-username" passwd="your-password"/>\n   </credentials>\n   <resolvers>\n      <ibiblio name="custom-artifactory" m2compatible="true"\n               root="https://your.private-mirror.com/artifactory/maven-external/"/>\n      <ibiblio name="central" m2compatible="true"/>\n      <chain name="default">\n            <resolver ref="custom-artifactory"/>\n      </chain>\n   </resolvers>\n</ivysettings>\n'})})]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Create a Kubernetes secret for your ivysettings.xml file:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"kubectl create secret generic <secretname>-ivy --from-file=ivysettings.xml -n <namespace>\n"})}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Run ",(0,i.jsx)(r.code,{children:"kubectl edit prophecycluster -n <namespace>"})," to edit the prophecycluster YAML."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["In the editor, add the following under ",(0,i.jsx)(r.code,{children:"sparkedge"}),":"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"external-repo:\n   overwrite-ivy-settings: true\n   ivy-settings-path: /app/.m2/ivysettings.xml\n   ivy-settings-secret: <ivy-secret-name>\n"})}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Save and exit the editor."}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"To ensure the ivysettings.xml file persists across restarts, copy it to the persistent volume:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"kubectl -n <namespace> cp ./ivysettings.xml <sparkedge_pod_name>:/app/.m2/ivysettings.xml\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"pypi",children:"PyPI"}),"\n",(0,i.jsx)(r.p,{children:"To configure PyPI for custom artifact repository in Sparkedge, follow these steps:"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["First, create a pip.conf file and define the custom PyPI repository. The file ",(0,i.jsx)(r.strong,{children:"must"})," be named pip.conf."]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Example pip.conf"}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"[global]\nindex-url=https://yourcompany.com/artifactory/api/pypi/pypi/simple\n"})})]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Run the following to create a Kubernetes secret:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"kubectl create secret generic <secretname>-pypi --from-file=pip.conf -n <namespace>\n"})}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Run ",(0,i.jsx)(r.code,{children:"kubectl edit prophecycluster -n <namespace>"})," to edit the prophecycluster YAML."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["In the editor, add the following under ",(0,i.jsx)(r.code,{children:"sparkedge"}),":"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"external-repo:\n   overwrite-pypi-settings: true\n   pypi-settings-secret: <pip-secret-name>\n   pypi-settings-path: /etc/pip.conf\n"})}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Save and exit the editor."}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Verify that your custom PyPI configuration has been applied:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"kubectl -n <namespace> exec <sparkedgepod name> -- cat /etc/pip.conf\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"proxy-configuration-optional",children:"Proxy configuration (optional)"}),"\n",(0,i.jsx)(r.p,{children:"If your Maven repositories are behind a proxy, you\u2019ll need to add proxy settings to your settings.xml file."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"<proxies>\n  <proxy>\n    <id>httpproxy</id>\n    <active>true</active>\n    <protocol>http</protocol>\n    <host>your-proxy-host</host>\n    <port>your-proxy-port</port>\n    <nonProxyHosts>local.net|some.host.com</nonProxyHosts>\n  </proxy>\n  <proxy>\n    <id>httpsproxy</id>\n    <active>true</active>\n    <protocol>https</protocol>\n    <host>your-proxy-host</host>\n    <port>your-proxy-port</port>\n    <nonProxyHosts>local.net|some.host.com</nonProxyHosts>\n  </proxy>\n</proxies>\n"})})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}}}]);