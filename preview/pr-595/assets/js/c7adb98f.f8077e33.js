"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[23055],{28453:(e,s,r)=>{r.d(s,{R:()=>n,x:()=>a});var t=r(96540);const i={},d=t.createContext(i);function n(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),t.createElement(d.Provider,{value:s},e.children)}},49235:(e,s,r)=>{r.d(s,{A:()=>i});r(96540);var t=r(74848);function i(e){return(0,t.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/package-hub/",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.python_package_name}),(0,t.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/package-hub/",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.scala_package_name}),(0,t.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,t.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,t.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,t.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,t.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Livy"}),(0,t.jsx)("span",{className:"right",children:e.livy})]})}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]})}},72308:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>a,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"Spark/gems/source-target/file/xml","title":"XML","description":"Parameters and properties to read from and write to XML files","source":"@site/docs/Spark/gems/source-target/file/xml.md","sourceDirName":"Spark/gems/source-target/file","slug":"/Spark/gems/source-target/file/xml","permalink":"/prophecy-docs-staging/preview/pr-595/Spark/gems/source-target/file/xml","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-595/tags/gems"},{"inline":true,"label":"file","permalink":"/prophecy-docs-staging/preview/pr-595/tags/file"},{"inline":true,"label":"xml","permalink":"/prophecy-docs-staging/preview/pr-595/tags/xml"}],"version":"current","frontMatter":{"title":"XML","id":"xml","description":"Parameters and properties to read from and write to XML files","tags":["gems","file","xml"]},"sidebar":"mySidebar","previous":{"title":"XLSX (Excel)","permalink":"/prophecy-docs-staging/preview/pr-595/Spark/gems/source-target/file/xlsx"},"next":{"title":"BigQuery","permalink":"/prophecy-docs-staging/preview/pr-595/Spark/gems/source-target/warehouse/bigquery"}}');var i=r(74848),d=r(28453),n=r(49235);const a={title:"XML",id:"xml",description:"Parameters and properties to read from and write to XML files",tags:["gems","file","xml"]},l=void 0,c={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Source",id:"source",level:2},{value:"Source properties",id:"source-properties",level:3},{value:"Supported parser modes",id:"supported-parser-modes",level:3},{value:"Target",id:"target",level:2},{value:"Target properties",id:"target-properties",level:3},{value:"Supported write modes",id:"supported-write-modes",level:3}];function o(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.0.1+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"3.2.0+"}),"\n",(0,i.jsx)(s.p,{children:"The XML (Extensible Markup Language) file type:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Transfers data between two systems that store the same data in different formats."}),"\n",(0,i.jsx)(s.li,{children:"Supports structured data with nested elements."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Parameter"}),(0,i.jsx)(s.th,{children:"Tab"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Location"}),(0,i.jsx)(s.td,{children:"Location"}),(0,i.jsx)(s.td,{children:"File path to read from or write to the XML file."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Schema"}),(0,i.jsx)(s.td,{children:"Properties"}),(0,i.jsxs)(s.td,{children:["Schema to apply on the loaded data.",(0,i.jsx)("br",{}),"In the Source gem, you can define or edit the schema visually or in JSON code.",(0,i.jsx)("br",{}),"In the Target gem, you can view the schema visually or as JSON code."]})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"source",children:"Source"}),"\n",(0,i.jsx)(s.p,{children:"The Source gem reads data from XML files and allows you to optionally specify the following additional properties."}),"\n",(0,i.jsx)(s.h3,{id:"source-properties",children:"Source properties"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Property name"}),(0,i.jsx)(s.th,{children:"Description"}),(0,i.jsx)(s.th,{children:"Default"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Enforce Schema"}),(0,i.jsx)(s.td,{children:"Whether to use the schema you define."}),(0,i.jsx)(s.td,{children:"true"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Row Tag"}),(0,i.jsx)(s.td,{children:"Row tag of your XML file to treat as a row."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"_"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Exclude Attributes"}),(0,i.jsx)(s.td,{children:"Whether to exclude attributes in elements."}),(0,i.jsx)(s.td,{children:"false"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Null Value"}),(0,i.jsx)(s.td,{children:"Sets the string representation of a null value."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"null"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Parser Mode"}),(0,i.jsxs)(s.td,{children:["How to handle corrupt data. ",(0,i.jsx)("br",{}),"For a list of the possible values, see ",(0,i.jsx)(s.a,{href:"#supported-parser-modes",children:"Supported parser modes"}),"."]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"Permissive"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Attribute Prefix"}),(0,i.jsx)(s.td,{children:"Prefix for attributes to differentiate them from elements."}),(0,i.jsx)(s.td,{children:"None"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Value Tag"}),(0,i.jsx)(s.td,{children:"Tag to use for the value when there are attributes in the element with no child."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"_VALUE"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Ignore Surrounding Spaces"}),(0,i.jsx)(s.td,{children:"Whether to skip surrounding whitespaces."}),(0,i.jsx)(s.td,{children:"false"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Ignore Namespace"}),(0,i.jsx)(s.td,{children:"Whether to skip namespace prefixes on XML elements and attributes."}),(0,i.jsx)(s.td,{children:"false"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Timestamp Format"}),(0,i.jsx)(s.td,{children:"Sets the string that indicates a timestamp format."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"yyyy-MM-dd'T'HH:mm:ss[.SSS][XXX]"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Date Format"}),(0,i.jsx)(s.td,{children:"String that indicates a date format."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"yyyy-MM-dd"})})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"supported-parser-modes",children:"Supported parser modes"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Mode"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Permissive"}),(0,i.jsx)(s.td,{children:"Put the malformed string into the corrupt records column, and set the malformed fields to null."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Drop Malformed"}),(0,i.jsx)(s.td,{children:"Ignore the entire corrupted record. This mode is not supported in the CSV built-in functions."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Fail Fast"}),(0,i.jsx)(s.td,{children:"Throw an exception when it meets a corrupted record."})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"target",children:"Target"}),"\n",(0,i.jsx)(s.p,{children:"The Target gem writes data to XML files and allows you to optionally specify the following additional properties."}),"\n",(0,i.jsx)(s.h3,{id:"target-properties",children:"Target properties"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Property name"}),(0,i.jsx)(s.th,{children:"Description"}),(0,i.jsx)(s.th,{children:"Default"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Row Tag"}),(0,i.jsx)(s.td,{children:"Row tag of your XML file to treat as a row."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"_"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Root Tag"}),(0,i.jsx)(s.td,{children:"Root tag of your XML file."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"ROWS"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Null Value"}),(0,i.jsx)(s.td,{children:"Sets the string representation of a null value."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"null"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Attribute Prefix"}),(0,i.jsx)(s.td,{children:"Prefix for attributes to differentiate them from elements."}),(0,i.jsx)(s.td,{children:"None"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Value Tag"}),(0,i.jsx)(s.td,{children:"Tag to use for the value when there are attributes in the element with no child."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"_VALUE"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Timestamp Format"}),(0,i.jsx)(s.td,{children:"Sets the string that indicates a timestamp format."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"yyyy-MM-dd'T'HH:mm:ss[.SSS][XXX]"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Date Format"}),(0,i.jsx)(s.td,{children:"String that indicates a date format."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"yyyy-MM-dd"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Write Mode"}),(0,i.jsxs)(s.td,{children:["How to handle existing data. ",(0,i.jsx)("br",{}),"For a list of the possible values, see ",(0,i.jsx)(s.a,{href:"#supported-write-modes",children:"Supported write modes"}),"."]}),(0,i.jsx)(s.td,{children:"None"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Partition Column"}),(0,i.jsx)(s.td,{children:"List of columns to partition the XML file by."}),(0,i.jsx)(s.td,{children:"None"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Compression Codec"}),(0,i.jsxs)(s.td,{children:["Compression codec when writing to the XML file. ",(0,i.jsx)("br",{}),"The XML file supports the following codecs: ",(0,i.jsx)(s.code,{children:"none"}),", ",(0,i.jsx)(s.code,{children:"bzip2"}),", ",(0,i.jsx)(s.code,{children:"gzip"}),", ",(0,i.jsx)(s.code,{children:"lz4"}),", ",(0,i.jsx)(s.code,{children:"snappy"})," and ",(0,i.jsx)(s.code,{children:"deflate"}),"."]}),(0,i.jsx)(s.td,{children:"None"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"XML Declaration"}),(0,i.jsx)(s.td,{children:"XML declaration content to write at the beginning of the XML file, before the root tag."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:'version="1.0" encoding="UTF-8" standalone="yes"'})})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"supported-write-modes",children:"Supported write modes"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Write mode"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"error"}),(0,i.jsx)(s.td,{children:"If the data already exists, throw an exception."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"overwrite"}),(0,i.jsxs)(s.td,{children:["If the data already exists, overwrite the data with the contents of the ",(0,i.jsx)(s.code,{children:"DataFrame"}),"."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"append"}),(0,i.jsxs)(s.td,{children:["If the data already exists, append the contents of the ",(0,i.jsx)(s.code,{children:"DataFrame"}),"."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"ignore"}),(0,i.jsxs)(s.td,{children:["If the data already exists, do nothing with the contents of the ",(0,i.jsx)(s.code,{children:"DataFrame"}),". ",(0,i.jsx)("br",{}),"This is similar to the ",(0,i.jsx)(s.code,{children:"CREATE TABLE IF NOT EXISTS"})," clause in SQL."]})]})]})]})]})}function x(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}}}]);