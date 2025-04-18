"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[33712],{26969:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/dec-data-bricks-oauth-select-fab-44a1e4746009dd36131344837268d02d.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}},94565:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"release_notes/2024/December_2024","title":"December 2024","description":"Release notes for December","source":"@site/docs/release_notes/2024/dec2024.md","sourceDirName":"release_notes/2024","slug":"/release_notes/2024/December_2024","permalink":"/prophecy-docs-staging/preview/pr-619/release_notes/2024/December_2024","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"release notes","permalink":"/prophecy-docs-staging/preview/pr-619/tags/release-notes"},{"inline":true,"label":"changelog","permalink":"/prophecy-docs-staging/preview/pr-619/tags/changelog"},{"inline":true,"label":"december","permalink":"/prophecy-docs-staging/preview/pr-619/tags/december"}],"version":"current","sidebarPosition":12,"frontMatter":{"sidebar_position":12,"id":"December_2024","description":"Release notes for December","title":"December 2024","tags":["release notes","changelog","december"]},"sidebar":"mySidebar","previous":{"title":"Prophecy 3.4.3.x","permalink":"/prophecy-docs-staging/preview/pr-619/release_notes/2025/3-4-3"},"next":{"title":"November 2024","permalink":"/prophecy-docs-staging/preview/pr-619/release_notes/2024/November_2024"}}');var i=t(74848),s=t(28453);const o={sidebar_position:12,id:"December_2024",description:"Release notes for December",title:"December 2024",tags:["release notes","changelog","december"]},a=void 0,c={},l=[{value:"3.4.2.* (December 13, 2024)",id:"342-december-13-2024",level:2},{value:"Features",id:"Features342",level:3},{value:"Databricks OAuth integration",id:"databricks-oauth-integration",level:4},{value:"Minor Improvements",id:"MinorImprovements342",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"342-december-13-2024",children:"3.4.2.* (December 13, 2024)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Prophecy Python libs version: 1.9.28"}),"\n",(0,i.jsx)(n.li,{children:"Prophecy Scala libs version: 8.6.0"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"Features342",children:"Features"}),"\n",(0,i.jsx)(n.h4,{id:"databricks-oauth-integration",children:"Databricks OAuth integration"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-619/databricks-oauth-authentication",children:"Prophecy has integrated with Databricks OAuth"})," to provide you with increased security via industry-standard authentication flows. When enabled, you will see a login overlay in Prophecy, such as when selecting a fabric, where Databricks API interactions are required."]}),"\n",(0,i.jsx)("img",{src:t(26969).A,alt:"Select a fabric",width:"70%"}),"\n",(0,i.jsx)(n.admonition,{title:"Dedicated SaaS and self-hosted deployments",type:"info",children:(0,i.jsxs)(n.p,{children:["To enable this feature, Databricks account admins ",(0,i.jsx)(n.strong,{children:"need to create an app connection"})," in Databricks, and Prophecy cluster admins need to input this information in Prophecy. View ",(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-619/databricks-oauth-authentication",children:"Databricks OAuth"})," to review more specific steps."]})}),"\n",(0,i.jsx)(n.h3,{id:"MinorImprovements342",children:"Minor Improvements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:'"Offset" column name bug fix'}),': We fixed a bug where naming a column using a Snowflake reserved keyword, such as "Offset", would break when using a Reformat gem.']}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Support for null values in unit tests"}),": When upgrading the Scala ",(0,i.jsx)(n.code,{children:"prophecy-libs"})," version to 8.6.0 or later and the Python ",(0,i.jsx)(n.code,{children:"prophecy-libs"})," version to 1.9.27 or later, you may notice differences in the Prophecy-managed files related to unit tests. Specifically, changes might occur in the ",(0,i.jsx)(n.code,{children:"prophecy/tests/*.json"})," files. Any null values in these files will be replaced with empty strings (",(0,i.jsx)(n.code,{children:'""'}),"). This change does not affect existing unit tests, and they will continue to function as before. These files are managed by Prophecy and are not used during pipeline execution."]}),"\n",(0,i.jsxs)(n.p,{children:["There is a new option under the three dots of the unit test data table to ",(0,i.jsx)(n.strong,{children:"Set value as Null"})," in columns."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"New Spark fabric diagnostic error codes"}),": There are new diagnostic error codes for the following failures:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Unable to reach Databricks endpoint."}),"\n",(0,i.jsx)(n.li,{children:"Unable to write execution metrics because Hive Metastore is not enabled on your Spark."}),"\n",(0,i.jsx)(n.li,{children:"Authentication fails while attempting to test a Spark fabric connection."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For more information, see ",(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-619/fabric-diagnostics",children:"Diagnostics"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);