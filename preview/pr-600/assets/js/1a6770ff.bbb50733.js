"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[72321],{28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var t=r(96540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}},36907:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"release_notes/2024/Feb_2024","title":"February 2024","description":"Release notes for February","source":"@site/docs/release_notes/2024/feb2024.md","sourceDirName":"release_notes/2024","slug":"/release_notes/2024/Feb_2024","permalink":"/prophecy-docs-staging/preview/pr-600/release_notes/2024/Feb_2024","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"release notes","permalink":"/prophecy-docs-staging/preview/pr-600/tags/release-notes"},{"inline":true,"label":"changelog","permalink":"/prophecy-docs-staging/preview/pr-600/tags/changelog"}],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"id":"Feb_2024","description":"Release notes for February","title":"February 2024","tags":["release notes","changelog"]},"sidebar":"mySidebar","previous":{"title":"March 2024","permalink":"/prophecy-docs-staging/preview/pr-600/release_notes/2024/March_2024"},"next":{"title":"January 2024","permalink":"/prophecy-docs-staging/preview/pr-600/release_notes/2024/Jan_2024"}}');var s=r(74848),i=r(28453);const a={sidebar_position:2,id:"Feb_2024",description:"Release notes for February",title:"February 2024",tags:["release notes","changelog"]},o=void 0,c={},l=[{value:"3.3.1.* (Feb 28, 2024)",id:"331-feb-28-2024",level:2},{value:"Features",id:"Features",level:3},{value:"Low code Airflow Enhancements",id:"low-code-airflow-enhancements",level:4},{value:"Copilot Enhancements",id:"copilot-enhancements",level:4},{value:"3.3.0.* (Feb 05, 2024)",id:"330-feb-05-2024",level:2},{value:"Features",id:"FeaturesRelease330",level:3},{value:"Table Iterator Subgraph And Custom Subgraphs",id:"table-iterator-subgraph-and-custom-subgraphs",level:4},{value:"Automatic Code Regeneration",id:"automatic-code-regeneration",level:4},{value:"Secret Management",id:"secret-management",level:4},{value:"Dependency Revamp",id:"dependency-revamp",level:4},{value:"Minor Improvements",id:"UXImprovements330",level:3}];function h(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"331-feb-28-2024",children:"3.3.1.* (Feb 28, 2024)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Prophecy Python libs version: 1.8.7"}),"\n",(0,s.jsx)(n.li,{children:"Prophecy Scala libs version: 7.1.72"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"Features",children:"Features"}),"\n",(0,s.jsx)(n.h4,{id:"low-code-airflow-enhancements",children:"Low code Airflow Enhancements"}),"\n",(0,s.jsx)(n.p,{children:"With this Prophecy release, you can connect your self-hosted Apache Airflow fabric to Prophecy for DAG creation and management in Low code Airflow. Also, we have added a new gem for OnPremPipeline, easing deployment of Spark pipelines to On Prem Spark."}),"\n",(0,s.jsx)(n.h4,{id:"copilot-enhancements",children:"Copilot Enhancements"}),"\n",(0,s.jsx)(n.p,{children:"We have further enhanced your Copilot experience by enabling using AI to generate Macros in Low code SQL. Just click on the Copilot icon and effortlessly generate any required function using the magic of AI."}),"\n",(0,s.jsx)(n.h2,{id:"330-feb-05-2024",children:"3.3.0.* (Feb 05, 2024)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Prophecy Python libs version: 1.8.4"}),"\n",(0,s.jsx)(n.li,{children:"Prophecy Scala libs version: 7.1.66"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"FeaturesRelease330",children:"Features"}),"\n",(0,s.jsx)(n.h4,{id:"table-iterator-subgraph-and-custom-subgraphs",children:"Table Iterator Subgraph And Custom Subgraphs"}),"\n",(0,s.jsxs)(n.p,{children:["Introducing the ",(0,s.jsx)(n.a,{href:"/engineers/table-iterator",children:"Table Iterator Subgraph"})," in Prophecy version 3.3. This new subgraph empowers users to iterate over one or more gems for each row of the first input DataFrame. Additionally, users can create their own ",(0,s.jsx)(n.a,{href:"/engineers/subgraph/#create-your-own-type-of-subgraph",children:"Custom Subgraph"})," to incorporate custom Iterators or control flow logic such as try-catch, conditional, etc.\nRead ",(0,s.jsx)(n.a,{href:"/engineers/subgraph",children:"here"})," for detailed documentation."]}),"\n",(0,s.jsx)(n.h4,{id:"automatic-code-regeneration",children:"Automatic Code Regeneration"}),"\n",(0,s.jsx)(n.p,{children:"Prophecy now facilitates automatic code regeneration whenever a user makes changes that could potentially impact the generated code for other pipelines and Projects. For instance, when updating dependencies or reusable components like UDFs, Subgraph, Datasets, etc., the system automatically triggers updates to all pipelines .\nThis ensures seamless synchronization and alerts users to any potential impacts on their codebase."}),"\n",(0,s.jsx)(n.h4,{id:"secret-management",children:"Secret Management"}),"\n",(0,s.jsxs)(n.p,{children:["Enhancing security, Prophecy now supports three different ",(0,s.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-600/administration/secrets/secret-providers",children:"Secret Providers"}),": Databricks Secrets, HashiCorp Vault, and Environment Variables. Users can link these providers in the fabric they want to use and securely access secrets in their gems and pipelines. This ensures that sensitive authentication credentials are stored in their Secret Providers and used securely by Prophecy."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Prophecy never accesses the value of these secrets. It only uses the keys to generate and execute correct code."})}),"\n",(0,s.jsx)(n.h4,{id:"dependency-revamp",children:"Dependency Revamp"}),"\n",(0,s.jsx)(n.p,{children:"A revamp in the user experience and management of dependencies in Prophecy. Users can now customize Package hub and Custom dependencies at the Project level or override them for a specific pipeline within the Project. User-defined gems can also have third-party custom dependencies for pipelines using the gem."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Existing dependencies, previously managed at the pipeline level, will now be moved to the Project level for easier management. Users may notice uncommitted changes in their POM files. This change does not impact the functionality of pipelines or jobs."})}),"\n",(0,s.jsx)(n.h3,{id:"UXImprovements330",children:"Minor Improvements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Node Search"}),": The Search in the Top left corner now includes searching for any gem in the open pipeline. It highlights the gem Name on the canvas, and clicking it pans the pipeline to bring the gem into the user's view."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);