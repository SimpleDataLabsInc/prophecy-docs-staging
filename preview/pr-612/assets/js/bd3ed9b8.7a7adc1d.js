"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[40166],{1227:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/drag-drop-file-7c8397e46968cd079cbd58357e0e11a0.png"},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>o});var r=i(96540);const l={},s=r.createContext(l);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(s.Provider,{value:n},e.children)}},34480:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/upload-type-and-format-ed5906a0aa77189c729b824de3faea82.png"},45366:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/upload-file-source-gem-52ced212841476211f1044b9cd2d8dd1.png"},51184:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"Spark/gems/source-target/file/upload-file","title":"Upload files","description":"Learn how to upload files to your Spark pipeline","source":"@site/docs/Spark/gems/source-target/file/upload-file.md","sourceDirName":"Spark/gems/source-target/file","slug":"/engineers/upload-file","permalink":"/prophecy-docs-staging/preview/pr-612/engineers/upload-file","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-612/tags/gems"},{"inline":true,"label":"file","permalink":"/prophecy-docs-staging/preview/pr-612/tags/file"},{"inline":true,"label":"Spark","permalink":"/prophecy-docs-staging/preview/pr-612/tags/spark"}],"version":"current","frontMatter":{"title":"Upload files","id":"upload-file","slug":"/engineers/upload-file","description":"Learn how to upload files to your Spark pipeline","tags":["gems","file","Spark"]},"sidebar":"mySidebar","previous":{"title":"Text","permalink":"/prophecy-docs-staging/preview/pr-612/engineers/text"},"next":{"title":"XLSX (Excel)","permalink":"/prophecy-docs-staging/preview/pr-612/engineers/xlsx"}}');var l=i(74848),s=i(28453);const t={title:"Upload files",id:"upload-file",slug:"/engineers/upload-file",description:"Learn how to upload files to your Spark pipeline",tags:["gems","file","Spark"]},o=void 0,a={},c=[{value:"Upload a file",id:"upload-a-file",level:2},{value:"File configuration",id:"file-configuration",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"You can upload the following file types to your file store:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"CSV, and other character separated types such as TSV."}),"\n",(0,l.jsx)(n.li,{children:"JSON, with a single row per line, objects spanning many lines, or arrays with objects."}),"\n",(0,l.jsx)(n.li,{children:"Text, formatted with one line per row."}),"\n",(0,l.jsx)(n.li,{children:"XLSX, and the older XLS format."}),"\n",(0,l.jsx)(n.li,{children:"XML, with a row tag selector."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"upload-a-file",children:"Upload a file"}),"\n",(0,l.jsx)(n.p,{children:"To upload a file and incorporate it into your Spark pipeline, use a Source gem."}),"\n",(0,l.jsx)(n.p,{children:"Use one of the following methods to upload your file:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Drag and drop the file directly to your pipeline canvas."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Drag and drop file",src:i(1227).A+"",width:"2620",height:"1511"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Open the ",(0,l.jsx)(n.code,{children:"Source/Target"})," gem drawer and click ",(0,l.jsx)(n.strong,{children:"Upload file"}),"."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Source/Target gem drawer",src:i(89030).A+"",width:"2620",height:"1511"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Create a new Source gem, click ",(0,l.jsx)(n.strong,{children:"+ New Dataset"}),", and select ",(0,l.jsx)(n.strong,{children:"Upload file"}),"."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Source gem",src:i(45366).A+"",width:"2846",height:"900"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["If your file successfully uploads, you see the ",(0,l.jsx)(n.strong,{children:"Type & Format"})," page for your file."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Type &amp; Format",src:i(34480).A+"",width:"2620",height:"1511"})}),"\n",(0,l.jsx)(n.h2,{id:"file-configuration",children:"File configuration"}),"\n",(0,l.jsx)(n.p,{children:"To configure your file:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Confirm or update the file type, and click ",(0,l.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Upload the file to a known file store location, or create a new table in your file store with the ",(0,l.jsx)(n.strong,{children:"Upload and create a table"})," option. Then, click ",(0,l.jsx)(n.strong,{children:"Next"}),"."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Upload and create a table",src:i(72465).A+"",width:"2620",height:"1511"})}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["After you define the target location and click ",(0,l.jsx)(n.strong,{children:"Next"}),", Prophecy uploads the file to the file path, regardless if you complete the gem configuration."]})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Add each property you want to configure."}),"\n",(0,l.jsx)(n.p,{children:"To see a full list of properties of each file type, click the page corresponding to your file type in the left hand navigation."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click ",(0,l.jsx)(n.strong,{children:"Infer Schema"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Confirm or update the schema and click ",(0,l.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["If you want to preview the table, click ",(0,l.jsx)(n.strong,{children:"Load"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click ",(0,l.jsx)(n.strong,{children:"Create Dataset"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["This action creates the dataset and also creates the table if using the ",(0,l.jsx)(n.strong,{children:"Upload and create a table"})," option."]}),"\n",(0,l.jsx)(n.p,{children:"Now, you can use your Source gem that contains all your data in your pipeline."}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},72465:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/upload-create-table-49c34127bb824461ba40b67c59dfbd92.png"},89030:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/upload-file-gem-drawer-22beed67bcfbf9983adf5403c3a5f4cf.png"}}]);