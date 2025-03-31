"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[16654],{20524:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"analysts/development/gems/source-target/table/upload-files","title":"Upload files","description":"Upload files to the visual canvas","source":"@site/docs/analysts/development/gems/source-target/table/upload-files.md","sourceDirName":"analysts/development/gems/source-target/table","slug":"/analysts/upload-file","permalink":"/prophecy-docs-staging/preview/pr-594/analysts/upload-file","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"how-to","permalink":"/prophecy-docs-staging/preview/pr-594/tags/how-to"},{"inline":true,"label":"upload","permalink":"/prophecy-docs-staging/preview/pr-594/tags/upload"},{"inline":true,"label":"sql","permalink":"/prophecy-docs-staging/preview/pr-594/tags/sql"}],"version":"current","frontMatter":{"title":"Upload files","id":"upload-files","slug":"/analysts/upload-file","description":"Upload files to the visual canvas","tags":["how-to","upload","sql"]},"sidebar":"mySidebar","previous":{"title":"Table","permalink":"/prophecy-docs-staging/preview/pr-594/analysts/table"},"next":{"title":"CSV","permalink":"/prophecy-docs-staging/preview/pr-594/analysts/development/gems/source-target/file/csv"}}');var o=i(74848),l=i(28453);const s={title:"Upload files",id:"upload-files",slug:"/analysts/upload-file",description:"Upload files to the visual canvas",tags:["how-to","upload","sql"]},a=void 0,r={},d=[{value:"File upload",id:"file-upload",level:2},{value:"Type and format",id:"type-and-format",level:2},{value:"Location",id:"location",level:2},{value:"Properties",id:"properties",level:2},{value:"Preview",id:"preview",level:2}];function c(e){const n={a:"a",admonition:"admonition",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{class:"badge",children:"SQL"}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.p,{children:"You can add a source table to your primary SQL warehouse by uploading a file directly onto the visual canvas. This gives you greater control over your data and how you incorporate it into your model transformation."}),"\n",(0,o.jsx)(n.p,{children:"Supported file types:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"CSV"}),"\n",(0,o.jsx)(n.li,{children:"JSON"}),"\n",(0,o.jsx)(n.li,{children:"Excel (XLS, XLSX)"}),"\n",(0,o.jsx)(n.li,{children:"XML"}),"\n",(0,o.jsx)(n.li,{children:"Text"}),"\n",(0,o.jsx)(n.li,{children:"Parquet"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["When you upload your file through Prophecy, it's added directly to your Databricks or Snowflake SQL warehouse as a ",(0,o.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-594/analysts/source-target#tables",children:"table"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"The recommended maximum file size is 100\xa0MB."})}),"\n",(0,o.jsx)(n.h2,{id:"file-upload",children:"File upload"}),"\n",(0,o.jsx)(n.p,{children:"To upload your file:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Open a pipeline."}),"\n",(0,o.jsx)(n.li,{children:"Drag and drop your file onto the canvas. This opens a new Source gem."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Upload file by dragging and dropping",src:i(32491).A+"",width:"2620",height:"1490"})}),"\n",(0,o.jsx)(n.h2,{id:"type-and-format",children:"Type and format"}),"\n",(0,o.jsx)(n.p,{children:"Once the Source gem opens, you can review the type and format of the file."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Optional: Replace or delete your uploaded file."}),"\n",(0,o.jsx)(n.li,{children:"Optional: Change the type and format of the file."}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Select your file type and format",src:i(71999).A+"",width:"2620",height:"1493"})}),"\n",(0,o.jsx)(n.h2,{id:"location",children:"Location"}),"\n",(0,o.jsx)(n.p,{children:"Now, set the location where the table will be stored in the primary SQL warehouse configured in your fabric."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Choose the database."}),"\n",(0,o.jsx)(n.li,{children:"Choose the schema."}),"\n",(0,o.jsx)(n.li,{children:"Choose the table. You can either select an existing table or create a new one."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Select the table location",src:i(44274).A+"",width:"1310",height:"745"})}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"If you select an existing table, Prophecy deletes and recreates the table with your uploaded file."})}),"\n",(0,o.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,o.jsx)(n.p,{children:"You can configure the table properties before completing the file upload."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Review the file's options. Depending on the file type and format, common defaults are already chosen for you."}),"\n",(0,o.jsxs)(n.li,{children:["Optional: Modify the options. For example, you can change the header row by selecting ",(0,o.jsx)(n.strong,{children:"First row is header"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Optional: If you made any changes to the options, click ",(0,o.jsx)(n.strong,{children:"Infer Schema"}),". This will update the schema according to the defined options."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Configure the table properties",src:i(93816).A+"",width:"2620",height:"1490"})}),"\n",(0,o.jsx)(n.h2,{id:"preview",children:"Preview"}),"\n",(0,o.jsx)(n.p,{children:"The preview step shows your table data and gives you the option to download it."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["To generate the preview, click ",(0,o.jsx)(n.strong,{children:"Load"}),". This loads the data."]}),"\n",(0,o.jsxs)(n.li,{children:["Check that your preview looks correct and click ",(0,o.jsx)(n.strong,{children:"Done"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["If you selected a table to write your uploaded file to, you'll need to confirm the upload in the pop-up window by clicking ",(0,o.jsx)(n.strong,{children:"Proceed"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Preview the table",src:i(97915).A+"",width:"2620",height:"1493"})}),"\n",(0,o.jsx)(n.p,{children:"The new table is now in your environment and available in Source/Target gems. You can upload another file or start working with your new source gem."})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var t=i(96540);const o={},l=t.createContext(o);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(l.Provider,{value:n},e.children)}},32491:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/upload-file-drag-drop-bf7f4aa9a0138a6ba4c062117a3eefd7.png"},44274:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/upload-file-location-adb3c95ede44857b9a8f1361328674b4.png"},71999:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/upload-file-type-format-e465af51b24d6009dd88b5c8b0f7b22a.png"},93816:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/upload-file-properties-8cb7779234c15b069ee0d8097c112f3e.png"},97915:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/upload-file-preview-ccfe73e758ed704ce2e688805686e9ed.png"}}]);