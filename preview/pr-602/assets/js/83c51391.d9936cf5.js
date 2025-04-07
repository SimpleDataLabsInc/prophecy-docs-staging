"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[15074],{10592:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/pub2-cd4cde4a77ff278a43c8a0a10475944e.png"},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>d});var a=s(96540);const n={},i=a.createContext(n);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(i.Provider,{value:t},e.children)}},48630:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/pub4-178320cb8973e2cb9102fa24cea198ee.png"},88713:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/pub3-e128c77a4c2b7c0796a2c867affe9df4.png"},94184:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"Spark/dataset","title":"Datasets","description":"Use datasets in your Spark project","source":"@site/docs/Spark/dataset.md","sourceDirName":"Spark","slug":"/engineers/dataset","permalink":"/prophecy-docs-staging/preview/pr-602/engineers/dataset","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"concepts","permalink":"/prophecy-docs-staging/preview/pr-602/tags/concepts"},{"inline":true,"label":"datasets","permalink":"/prophecy-docs-staging/preview/pr-602/tags/datasets"},{"inline":true,"label":"source","permalink":"/prophecy-docs-staging/preview/pr-602/tags/source"},{"inline":true,"label":"target","permalink":"/prophecy-docs-staging/preview/pr-602/tags/target"}],"version":"current","frontMatter":{"title":"Datasets","id":"dataset","slug":"/engineers/dataset","description":"Use datasets in your Spark project","tags":["concepts","datasets","source","target"]},"sidebar":"mySidebar","previous":{"title":"Pipeline settings","permalink":"/prophecy-docs-staging/preview/pr-602/engineers/pipeline-settings"},"next":{"title":"Gems","permalink":"/prophecy-docs-staging/preview/pr-602/engineers/gems"}}');var n=s(74848),i=s(28453);const r={title:"Datasets",id:"dataset",slug:"/engineers/dataset",description:"Use datasets in your Spark project",tags:["concepts","datasets","source","target"]},d=void 0,o={},c=[{value:"Create datasets",id:"create-datasets",level:2},{value:"View datasets",id:"view-datasets",level:2},{value:"Dataset Metadata",id:"dataset-metadata",level:2},{value:"Publishing and sharing datasets",id:"publishing-and-sharing-datasets",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["In Prophecy, datasets are grouped by ",(0,n.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-602/projects",children:"Projects"})," and rely on the following:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Schema"}),": The structure or shape of the data, including column names, data types, and the method for reading and writing the data in this format."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-602/fabrics",children:"Fabric"})}),": The execution environment in which the data resides."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"create-datasets",children:"Create datasets"}),"\n",(0,n.jsxs)(t.p,{children:["Datasets are created where they are first used in a ",(0,n.jsx)(t.a,{href:"/engineers/source-target",children:"Source or Target gems"}),". A dataset definition includes its:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Type"}),": The type of data you are reading/writing like CSV, Parquet files or catalog tables."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Location"}),": The location of your data. It could be a file path for CSV or a table name."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Properties"}),": Properties consists of Schema and some other attributes specific to the file format. For example, in case of CSV, you can give Column delimiter in additional attributes. You can also define Metadata for each column here like description, tags, and mappings."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Datasets can be used by any pipeline within the same project, and in some cases by other projects within the same team."}),"\n",(0,n.jsx)(t.h2,{id:"view-datasets",children:"View datasets"}),"\n",(0,n.jsx)(t.p,{children:"There are two ways to view a list of datasets:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["To see all datasets, navigate to ",(0,n.jsx)(t.strong,{children:"Metadata > Datasets"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["To see only one project's datasets, navigate to ",(0,n.jsx)(t.strong,{children:"Metadata > Projects"}),". Then, open a project. Click on the ",(0,n.jsx)(t.strong,{children:"Content"})," tab, and then the ",(0,n.jsx)(t.strong,{children:"Datasets"})," subtab."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"dataset-metadata",children:"Dataset Metadata"}),"\n",(0,n.jsx)(t.p,{children:"If you open the metadata page for one of the datasets, you'll find the following information:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Dataset name"}),(0,n.jsx)(t.td,{children:"The name of this dataset, which is editable."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Dataset description"}),(0,n.jsx)(t.td,{children:"The description of this dataset, which is editable."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Dataset properties"}),(0,n.jsx)(t.td,{children:"A subset of properties used for reading or writing to this Dataset."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Dataset schema"}),(0,n.jsx)(t.td,{children:"The columns of this dataset and their data types."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Delete Dataset"}),(0,n.jsx)(t.td,{children:"The option to delete this dataset. Use with caution."})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["In the ",(0,n.jsx)(t.strong,{children:"Relations"})," tab, there is additional information about where and how this dataset is used."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Physical Datasets"}),(0,n.jsx)(t.td,{children:"Location of the dataset in relation to a fabric."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Pipelines"}),(0,n.jsxs)(t.td,{children:["A list of pipelines that use this dataset, with the ",(0,n.jsx)(t.code,{children:"Relation"})," column indicating if it is for ",(0,n.jsx)(t.code,{children:"Read"})," or ",(0,n.jsx)(t.code,{children:"Write"})," purposes."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Jobs"}),(0,n.jsxs)(t.td,{children:["A list of jobs that use this dataset, with the ",(0,n.jsx)(t.code,{children:"Relation"})," column indicating if it is for ",(0,n.jsx)(t.code,{children:"Read"})," or ",(0,n.jsx)(t.code,{children:"Write"})," purposes."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Open Lineage Viewer"}),(0,n.jsxs)(t.td,{children:["The option to open this dataset in the ",(0,n.jsx)(t.a,{href:"/engineers/lineage",children:"Lineage"})," viewer, showing column-level lineage for this dataset."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"publishing-and-sharing-datasets",children:"Publishing and sharing datasets"}),"\n",(0,n.jsxs)(t.p,{children:["As part of the project release process, datasets within that project are ",(0,n.jsx)(t.em,{children:"published"})," to other projects within the same Team, and can be published to other Teams in read-only mode. This allows you to share your dataset configurations with other Teams without allowing them to make changes to the original dataset definitions. Let's see this in action:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"DI_TEAM"})," is the central Data Infrastructure team. They have defined a common project named ",(0,n.jsx)(t.code,{children:"DI_Common_Python"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"DI_Common_Python"})," has a number of datasets defined within it:\n",(0,n.jsx)(t.img,{alt:"DI Common Datasets",src:s(10592).A+"",width:"1497",height:"325"})]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"DI_Team"})," merges and releases the ",(0,n.jsx)(t.code,{children:"DI_Common_Python"})," project, tagging it ",(0,n.jsx)(t.code,{children:"0.1"}),".\n",(0,n.jsx)(t.img,{alt:"DI Common Release",src:s(88713).A+"",width:"1519",height:"200"})]}),"\n",(0,n.jsxs)(t.li,{children:["As you can see, the ",(0,n.jsx)(t.code,{children:"DI_Team"})," has published the ",(0,n.jsx)(t.code,{children:"DI_Common_Python"})," project to the ",(0,n.jsx)(t.code,{children:"DE_Team"}),", the Data Engineering Team."]}),"\n",(0,n.jsxs)(t.li,{children:["Now, whenever the ",(0,n.jsx)(t.code,{children:"DE_Team"})," builds pipelines, they can see the following:\n",(0,n.jsx)(t.img,{alt:"Common Datasets",src:s(48630).A+"",width:"629",height:"454"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["We can see the ",(0,n.jsx)(t.code,{children:"DI_Common_Python"})," project's datasets, and the fact that they're listed as ",(0,n.jsx)(t.code,{children:"Read-only"}),". This means that ",(0,n.jsx)(t.code,{children:"DE_Team"})," can ",(0,n.jsx)(t.em,{children:"use"})," the datasets, but cannot ",(0,n.jsx)(t.em,{children:"edit"})," them."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"For regular usage, we suggest having only one instance of a particular dataset within a pipeline, as the dataset's properties and underlying data can change each time the dataset is read or written."})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);