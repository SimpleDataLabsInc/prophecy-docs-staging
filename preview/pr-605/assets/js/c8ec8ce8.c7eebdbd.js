"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[10722],{25986:(e,r,s)=>{s.d(r,{A:()=>t});const t=s.p+"assets/images/xlsx_tgt_6-4fcf34461fd56bcf2dd36f29bb3b223a.png"},28453:(e,r,s)=>{s.d(r,{R:()=>a,x:()=>d});var t=s(96540);const n={},i=t.createContext(n);function a(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(i.Provider,{value:r},e.children)}},49235:(e,r,s)=>{s.d(r,{A:()=>n});s(96540);var t=s(74848);function n(e){return(0,t.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.python_package_name}),(0,t.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.scala_package_name}),(0,t.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,t.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,t.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,t.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,t.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Livy"}),(0,t.jsx)("span",{className:"right",children:e.livy})]})}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]})}},65537:(e,r,s)=>{s.d(r,{A:()=>w});var t=s(96540),n=s(18215),i=s(65627),a=s(56347),d=s(50372),l=s(30604),c=s(11861),o=s(78749);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:r,children:s}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:s,attributes:t,default:n}}=e;return{value:r,label:s,attributes:t,default:n}}))}(s);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,s])}function p(e){let{value:r,tabValues:s}=e;return s.some((e=>e.value===r))}function u(e){let{queryString:r=!1,groupId:s}=e;const n=(0,a.W6)(),i=function(e){let{queryString:r=!1,groupId:s}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:r,groupId:s});return[(0,l.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(n.location.search);r.set(i,e),n.replace({...n.location,search:r.toString()})}),[i,n])]}function j(e){const{defaultValue:r,queryString:s=!1,groupId:n}=e,i=x(e),[a,l]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:i}))),[c,h]=u({queryString:s,groupId:n}),[j,m]=function(e){let{groupId:r}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,i]=(0,o.Dv)(s);return[n,(0,t.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:n}),f=(()=>{const e=c??j;return p({value:e,tabValues:i})?e:null})();(0,d.A)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),m(e)}),[h,m,i]),tabValues:i}}var m=s(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(74848);function b(e){let{className:r,block:s,selectedValue:t,selectValue:a,tabValues:d}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),o=e=>{const r=e.currentTarget,s=l.indexOf(r),n=d[s].value;n!==t&&(c(r),a(n))},h=e=>{let r=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;r=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;r=l[s]??l[l.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":s},r),children:d.map((e=>{let{value:r,label:s,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>{l.push(e)},onKeyDown:h,onClick:o,...i,className:(0,n.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":t===r}),children:s??r},r)}))})}function y(e){let{lazy:r,children:s,selectedValue:i}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==i})))})}function v(e){const r=j(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,g.jsx)(b,{...r,...e}),(0,g.jsx)(y,{...r,...e})]})}function w(e){const r=(0,m.A)();return(0,g.jsx)(v,{...e,children:h(e.children)},String(r))}},79329:(e,r,s)=>{s.d(r,{A:()=>a});s(96540);var t=s(18215);const n={tabItem:"tabItem_Ymn6"};var i=s(74848);function a(e){let{children:r,hidden:s,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(n.tabItem,a),hidden:s,children:r})}},89510:(e,r,s)=>{s.d(r,{A:()=>t});const t=s.p+"assets/images/xlsx_tgt_5.5-1f42007802b75662fd2128729bf05f6a.png"},92690:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>h,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>t,toc:()=>x});const t=JSON.parse('{"id":"Spark/gems/source-target/file/xlsx","title":"XLSX (Excel)","description":"Parameters and properties to read from and write too XLSX (Excel) files","source":"@site/docs/Spark/gems/source-target/file/xlsx.md","sourceDirName":"Spark/gems/source-target/file","slug":"/engineers/xlsx","permalink":"/prophecy-docs-staging/preview/pr-605/engineers/xlsx","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-605/tags/gems"},{"inline":true,"label":"file","permalink":"/prophecy-docs-staging/preview/pr-605/tags/file"},{"inline":true,"label":"xlsx","permalink":"/prophecy-docs-staging/preview/pr-605/tags/xlsx"}],"version":"current","frontMatter":{"title":"XLSX (Excel)","id":"xlsx","slug":"/engineers/xlsx","description":"Parameters and properties to read from and write too XLSX (Excel) files","tags":["gems","file","xlsx"]},"sidebar":"mySidebar","previous":{"title":"Upload files","permalink":"/prophecy-docs-staging/preview/pr-605/engineers/upload-file"},"next":{"title":"XML","permalink":"/prophecy-docs-staging/preview/pr-605/engineers/xml"}}');var n=s(74848),i=s(28453),a=s(49235),d=s(65537),l=s(79329);const c={title:"XLSX (Excel)",id:"xlsx",slug:"/engineers/xlsx",description:"Parameters and properties to read from and write too XLSX (Excel) files",tags:["gems","file","xlsx"]},o=void 0,h={},x=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Source",id:"source",level:2},{value:"Source properties",id:"source-properties",level:3},{value:"Supported parse modes",id:"supported-parse-modes",level:3},{value:"Target",id:"target",level:2},{value:"Target properties",id:"target-properties",level:3},{value:"Supported write modes",id:"supported-write-modes",level:3},{value:"Writing a single output file",id:"writing-a-single-output-file",level:2},{value:"Example code",id:"example-code",level:2}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.0.1+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"Not Supported",livy:"Not Supported"}),"\n",(0,n.jsx)(r.p,{children:"The XLSX (Excel) file type:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Is in XML format, which is easier for data access, manipulation, and compatibility with various software applications."}),"\n",(0,n.jsx)(r.li,{children:"Offers password protection options, which allow users to secure sensitive data."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["If you receive an error about the ",(0,n.jsx)(r.code,{children:"excel"})," format not being available you must add ",(0,n.jsx)(r.code,{children:"spark-excel"})," library as a dependency."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["To add the Maven coordinate ",(0,n.jsx)(r.code,{children:"com.crealytics:spark-excel_2.12:3.5.1_0.20.4"})," to your pipeline, see ",(0,n.jsx)(r.a,{href:"/prophecy-docs-staging/preview/pr-605/engineers/dependencies",children:"Spark dependencies"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Tab"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Location"}),(0,n.jsx)(r.td,{children:"Location"}),(0,n.jsx)(r.td,{children:"File path to read from or write to the XLSX file."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Schema"}),(0,n.jsx)(r.td,{children:"Properties"}),(0,n.jsxs)(r.td,{children:["Schema to apply on the loaded data.",(0,n.jsx)("br",{}),"In the Source gem, you can define or edit the schema visually or in JSON code.",(0,n.jsx)("br",{}),"In the Target gem, you can view the schema visually or as JSON code."]})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"source",children:"Source"}),"\n",(0,n.jsx)(r.p,{children:"The Source gem reads data from XLSX files and allows you to optionally specify the following additional properties."}),"\n",(0,n.jsx)(r.h3,{id:"source-properties",children:"Source properties"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property name"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Enforce Schema"}),(0,n.jsx)(r.td,{children:"Whether to use the schema you define."}),(0,n.jsx)(r.td,{children:"false"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Header"}),(0,n.jsx)(r.td,{children:"Whether to read the first line as a header."}),(0,n.jsx)(r.td,{children:"true"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Description"}),(0,n.jsx)(r.td,{children:"Description of your dataset."}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Data Address"}),(0,n.jsxs)(r.td,{children:["Location to read data addresses from. To learn more, see ",(0,n.jsx)(r.a,{href:"https://github.com/crealytics/spark-excel#data-addresses",children:"Data Addresses"}),"."]}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"A1"})," (Everything)"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Column Name of Corrupt Record"}),(0,n.jsx)(r.td,{children:"Rename the field the PERMISSIVE mode creates to store malformed data."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"_corrupt_records"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Column Name of Row Number"}),(0,n.jsx)(r.td,{children:"Name of the column to create using the original row number."}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Date Format"}),(0,n.jsx)(r.td,{children:"String that indicates a date format."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"yyyy-MM-dd"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Excerpt Size"}),(0,n.jsx)(r.td,{children:"Excerpt Size."}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"File Extension"}),(0,n.jsx)(r.td,{children:"Extension of the file to read in."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"xlsx"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Ignore After Header"}),(0,n.jsx)(r.td,{children:"Number of rows to ignore after the header."}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Ignore leading white spaces from values"}),(0,n.jsx)(r.td,{children:"Whether to skip the leading whitespaces from values the Source gem reads."}),(0,n.jsx)(r.td,{children:"false"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Ignore trailing white spaces from values"}),(0,n.jsx)(r.td,{children:"Whether to skip the trailing whitespaces from values the Source gem reads."}),(0,n.jsx)(r.td,{children:"false"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Infer Schema"}),(0,n.jsxs)(r.td,{children:["Whether to automatically infer the input schema from the data. This requires one extra pass over the data. ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"Note:"})," The ",(0,n.jsx)(r.code,{children:"spark-excel"})," library provides this setting and is different than the ",(0,n.jsx)(r.code,{children:"Infer Schema"})," button in the Prophecy UI. Both should provide the same results."]}),(0,n.jsx)(r.td,{children:"false"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Locale"}),(0,n.jsx)(r.td,{children:"Sets a locale as language tag in IETF BCP 47 format."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"en-US"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"NaN Value"}),(0,n.jsx)(r.td,{children:"Sets the string representation of a non-number value."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"NaN"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Negative Infinite value"}),(0,n.jsx)(r.td,{children:"Sets the string representation of a negative infinity value."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"-Inf"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Null Value"}),(0,n.jsx)(r.td,{children:"Sets the string representation of a null value."}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Parse Mode"}),(0,n.jsxs)(r.td,{children:["How to handle corrupt data. ",(0,n.jsx)("br",{}),"For a list of the possible values, see ",(0,n.jsx)(r.a,{href:"#supported-parse-modes",children:"Supported parse modes"}),"."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Permissive"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Positive Infinite value"}),(0,n.jsx)(r.td,{children:"Sets the string representation of a positive infinity value."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Inf"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Sampling Ratio"}),(0,n.jsx)(r.td,{children:"Defines a fraction of rows to use for schema inferring"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"1.0"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Timestamp Format"}),(0,n.jsx)(r.td,{children:"Sets the string that indicates a timestamp format."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"yyyy-MM-dd'T'HH:mm:ss[.SSS][XXX]"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Use Null for Error Cells"}),(0,n.jsx)(r.td,{children:"Whether to use null for cells with errors."}),(0,n.jsx)(r.td,{children:"false"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Workbook Password"}),(0,n.jsx)(r.td,{children:"Password to secure your workbook."}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Time Zone ID"}),(0,n.jsxs)(r.td,{children:["Timezone ID for the ",(0,n.jsx)(r.code,{children:"Date"})," and ",(0,n.jsx)(r.code,{children:"Timestamp"})," from the IANA Time Zone Database.",(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"Note:"})," For a list of valid values, see ",(0,n.jsx)(r.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/time/ZoneId.html",children:"Class ZoneId"}),"."]}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Temporary file threshold"}),(0,n.jsx)(r.td,{children:"When the Source gem should start writing data to temporary files on disk instead of keeping it in memory."}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Maximum rows in memory"}),(0,n.jsx)(r.td,{children:"Maximum amount of rows to have in memory."}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Maximum byte array size"}),(0,n.jsx)(r.td,{children:"Maximum size of your array."}),(0,n.jsx)(r.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"supported-parse-modes",children:"Supported parse modes"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Mode"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Permissive"}),(0,n.jsx)(r.td,{children:"Put the malformed string into the corrupt records column, and set the malformed fields to null."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Drop Malformed"}),(0,n.jsx)(r.td,{children:"Ignore the entire corrupted record. This mode is not supported in the CSV built-in functions."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Fail Fast"}),(0,n.jsx)(r.td,{children:"Throw an exception when it meets a corrupted record."})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"target",children:"Target"}),"\n",(0,n.jsx)(r.p,{children:"The Target gem writes data to XLSX files and allows you to optionally specify the following additional properties."}),"\n",(0,n.jsx)(r.h3,{id:"target-properties",children:"Target properties"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property name"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Data Address"}),(0,n.jsxs)(r.td,{children:["Location to write data addresses to. To learn more, see ",(0,n.jsx)(r.a,{href:"https://github.com/crealytics/spark-excel#data-addresses",children:"Data Addresses"}),"."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"A1"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"File Extension"}),(0,n.jsx)(r.td,{children:"File extension of the file to write to."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"xlsx"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Header"}),(0,n.jsx)(r.td,{children:"Whether to write a header to the file."}),(0,n.jsx)(r.td,{children:"true"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Locale"}),(0,n.jsx)(r.td,{children:"Sets a locale as language tag in IETF BCP 47 format."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"en-US"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Date Format"}),(0,n.jsx)(r.td,{children:"String that indicates a date format."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"yyyy-MM-dd"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Use Plain Number Format"}),(0,n.jsx)(r.td,{children:"Whether to format the cells without rounding and scientific notations."}),(0,n.jsx)(r.td,{children:"false"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Workbook Password"}),(0,n.jsx)(r.td,{children:"Password to secure your workbook."}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Write Mode"}),(0,n.jsxs)(r.td,{children:["How to handle existing data. For a list of the possible values, see ",(0,n.jsx)(r.a,{href:"#supported-write-modes",children:"Supported write modes"}),"."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"append"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Partition Columns"}),(0,n.jsx)(r.td,{children:"List of columns to partition the XLSX files by."}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Create single named XLSX file"}),(0,n.jsx)(r.td,{children:"Whether to create a single XLSX file."}),(0,n.jsx)(r.td,{children:"false"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"supported-write-modes",children:"Supported write modes"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Write mode"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"error"}),(0,n.jsx)(r.td,{children:"If the data already exists, throw an exception."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"overwrite"}),(0,n.jsxs)(r.td,{children:["If the data already exists, overwrite the data with the contents of the ",(0,n.jsx)(r.code,{children:"DataFrame"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"append"}),(0,n.jsxs)(r.td,{children:["If the data already exists, append the contents of the ",(0,n.jsx)(r.code,{children:"DataFrame"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ignore"}),(0,n.jsxs)(r.td,{children:["If the data already exists, do nothing with the contents of the ",(0,n.jsx)(r.code,{children:"DataFrame"}),". ",(0,n.jsx)("br",{}),"This is similar to the ",(0,n.jsx)(r.code,{children:"CREATE TABLE IF NOT EXISTS"})," clause in SQL."]})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"writing-a-single-output-file",children:"Writing a single output file"}),"\n",(0,n.jsx)(r.p,{children:"Due to Spark's distributed nature, when you work with text-based files, your output is a directory containing multiple partitioned files."}),"\n",(0,n.jsxs)(r.p,{children:["For example, if you write to the following location: ",(0,n.jsx)(r.strong,{children:"dbfs:/FileStore/Users/test/customers.xlsx"}),", you see the following in the DBFS:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["A ",(0,n.jsx)(r.strong,{children:"customers.xlsx"})," directory."]}),"\n",(0,n.jsxs)(r.li,{children:["Partitions within the ",(0,n.jsx)(r.strong,{children:"customers.xlsx"})," directory."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Each partition is a separate valid XLSX file with a segment of the overall output data."}),"\n",(0,n.jsx)(r.p,{children:"If you want the Target gem to output a single file:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Add a Repartition gem in ",(0,n.jsx)(r.strong,{children:"Coalesce"})," mode with the ",(0,n.jsx)(r.strong,{children:"Partition Count"})," set to ",(0,n.jsx)(r.code,{children:"1"}),"."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"Coalesce using Repartition",src:s(89510).A+"",width:"2870",height:"1678"})}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Connect the Repartition gem between your second-to-last transformation and the ",(0,n.jsx)(r.code,{children:"Target"})," gem."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"Attach coalesce before desired target",src:s(25986).A+"",width:"1906",height:"882"})}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Run your pipeline."}),"\n",(0,n.jsx)(r.p,{children:"After you run your pipeline, your output is still a directory, but this time it only contains a single output file."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"example-code",children:"Example code"}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsxs)(r.p,{children:["To see the generated source code of your project, ",(0,n.jsx)(r.a,{href:"/engineers/project-lifecycle/#review-the-code",children:"switch to the Code view"})," in the project header."]})}),"\n","\n",(0,n.jsx)(d.A,{children:(0,n.jsx)(l.A,{value:"py",label:"Python",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-py",children:'def Demo_XLSX_Source(spark: SparkSession) -> DataFrame:\n    if Config.fabricName == "dev":\n        return spark.read\\\n            .format("excel")\\\n            .option("header", True)\\\n            .option("dataAddress", "A1")\\\n            .option("inferSchema", True)\\\n            .load("dbfs:/FileStore/Users/scott/plain_number.xlsx")\n    else:\n        raise Exception("No valid dataset present to read fabric")\n'})})})})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}}}]);