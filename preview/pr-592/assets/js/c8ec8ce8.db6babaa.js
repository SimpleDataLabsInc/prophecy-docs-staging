"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[10722],{25986:(e,r,t)=>{t.d(r,{A:()=>s});const s=t.p+"assets/images/xlsx_tgt_6-4fcf34461fd56bcf2dd36f29bb3b223a.png"},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var s=t(96540);const n={},a=s.createContext(n);function i(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(a.Provider,{value:r},e.children)}},49235:(e,r,t)=>{t.d(r,{A:()=>n});t(96540);var s=t(74848);function n(e){return(0,s.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/package-hub/",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:e.python_package_name}),(0,s.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/package-hub/",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:e.scala_package_name}),(0,s.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,s.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,s.jsxs)("span",{className:"badge-dependency",children:[(0,s.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,s.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,s.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,s.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,s.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,s.jsxs)("span",{className:"badge-spark",children:[(0,s.jsx)("span",{className:"left",children:"Livy"}),(0,s.jsx)("span",{className:"right",children:e.livy})]})}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]})}},65537:(e,r,t)=>{t.d(r,{A:()=>S});var s=t(96540),n=t(18215),a=t(65627),i=t(56347),l=t(50372),o=t(30604),d=t(11861),c=t(78749);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:r,children:t}=e;return(0,s.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:t,attributes:s,default:n}}=e;return{value:r,label:t,attributes:s,default:n}}))}(t);return function(e){const r=(0,d.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:t}=e;const n=(0,i.W6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,o.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(n.location.search);r.set(a,e),n.replace({...n.location,search:r.toString()})}),[a,n])]}function m(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,a=u(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:a}))),[d,h]=x({queryString:t,groupId:n}),[m,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,a]=(0,c.Dv)(t);return[n,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:n}),j=(()=>{const e=d??m;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{j&&o(j)}),[j]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),f(e)}),[h,f,a]),tabValues:a}}var f=t(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function b(e){let{className:r,block:t,selectedValue:s,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),c=e=>{const r=e.currentTarget,t=o.indexOf(r),n=l[t].value;n!==s&&(d(r),i(n))},h=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},r),children:l.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>{o.push(e)},onKeyDown:h,onClick:c,...a,className:(0,n.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":s===r}),children:t??r},r)}))})}function y(e){let{lazy:r,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function v(e){const r=m(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",j.tabList),children:[(0,g.jsx)(b,{...r,...e}),(0,g.jsx)(y,{...r,...e})]})}function S(e){const r=(0,f.A)();return(0,g.jsx)(v,{...e,children:h(e.children)},String(r))}},79329:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var s=t(18215);const n={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,i),hidden:t,children:r})}},89510:(e,r,t)=>{t.d(r,{A:()=>s});const s=t.p+"assets/images/xlsx_tgt_5.5-1f42007802b75662fd2128729bf05f6a.png"},92690:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"Spark/gems/source-target/file/xlsx","title":"XLSX (Excel)","description":"Parameters and properties to read from and write too XLSX (Excel) files","source":"@site/docs/Spark/gems/source-target/file/xlsx.md","sourceDirName":"Spark/gems/source-target/file","slug":"/Spark/gems/source-target/file/xlsx","permalink":"/Spark/gems/source-target/file/xlsx","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/tags/gems"},{"inline":true,"label":"file","permalink":"/tags/file"},{"inline":true,"label":"xlsx","permalink":"/tags/xlsx"}],"version":"current","frontMatter":{"title":"XLSX (Excel)","id":"xlsx","description":"Parameters and properties to read from and write too XLSX (Excel) files","tags":["gems","file","xlsx"]},"sidebar":"mySidebar","previous":{"title":"Upload files","permalink":"/Spark/gems/source-target/file/upload-file"},"next":{"title":"XML","permalink":"/Spark/gems/source-target/file/xml"}}');var n=t(74848),a=t(28453),i=t(49235),l=t(65537),o=t(79329);const d={title:"XLSX (Excel)",id:"xlsx",description:"Parameters and properties to read from and write too XLSX (Excel) files",tags:["gems","file","xlsx"]},c=void 0,h={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Source",id:"source",level:2},{value:"Source properties",id:"source-properties",level:3},{value:"Supported parse modes",id:"supported-parse-modes",level:3},{value:"Target",id:"target",level:2},{value:"Target properties",id:"target-properties",level:3},{value:"Supported write modes",id:"supported-write-modes",level:3},{value:"Writing a single output file",id:"writing-a-single-output-file",level:2},{value:"Example code",id:"example-code",level:2}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.0.1+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"Not Supported",livy:"Not Supported"}),"\n",(0,n.jsx)(r.p,{children:"The XLSX (Excel) file type:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Is in XML format, which is easier for data access, manipulation, and compatibility with various software applications."}),"\n",(0,n.jsx)(r.li,{children:"Offers password protection options, which allow users to secure sensitive data."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["If you receive an error about the ",(0,n.jsx)(r.code,{children:"excel"})," format not being available you must add ",(0,n.jsx)(r.code,{children:"spark-excel"})," library as a dependency."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["To add the Maven coordinate ",(0,n.jsx)(r.code,{children:"com.crealytics:spark-excel_2.12:3.5.1_0.20.4"})," to your pipeline, see ",(0,n.jsx)(r.a,{href:"/engineers/dependencies",children:"Spark dependencies"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Tab"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Location"}),(0,n.jsx)(r.td,{children:"Location"}),(0,n.jsx)(r.td,{children:"File path to read from or write to the XLSX file."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Schema"}),(0,n.jsx)(r.td,{children:"Properties"}),(0,n.jsxs)(r.td,{children:["Schema to apply on the loaded data.",(0,n.jsx)("br",{}),"In the Source gem, you can define or edit the schema visually or in JSON code.",(0,n.jsx)("br",{}),"In the Target gem, you can view the schema visually or as JSON code."]})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"source",children:"Source"}),"\n",(0,n.jsx)(r.p,{children:"The Source gem reads data from XLSX files and allows you to optionally specify the following additional properties."}),"\n",(0,n.jsx)(r.h3,{id:"source-properties",children:"Source properties"}),"\n",(0,n.jsxs)(r.p,{children:["| Property name                            | Description                                                                                                                                                                                                                                                                              | Default                            |\n| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | --- |\n| Enforce Schema                           | Whether to use the schema you define.                                                                                                                                                                                                                                                    | false                              |\n| Header                                   | Whether to read the first line as a header.                                                                                                                                                                                                                                              | true                               |\n| Description                              | Description of your dataset.                                                                                                                                                                                                                                                             | None                               |\n| Data Address                             | Location to read data addresses from. To learn more, see ",(0,n.jsx)(r.a,{href:"https://github.com/crealytics/spark-excel#data-addresses",children:"Data Addresses"}),".                                                                                                                                                     | ",(0,n.jsx)(r.code,{children:"A1"})," (Everything)                  |\n| Column Name of Corrupt Record            | Rename the field the PERMISSIVE mode creates to store malformed data.                                                                                                                                                                                                                    | ",(0,n.jsx)(r.code,{children:"_corrupt_records"}),"                 |\n| Column Name of Row Number                | Name of the column to create using the original row number.                                                                                                                                                                                                                              | None                               |\n| Date Format                              | String that indicates a date format.                                                                                                                                                                                                                                                     | ",(0,n.jsx)(r.code,{children:"yyyy-MM-dd"}),"                       |\n| Excerpt Size                             | Excerpt Size.                                                                                                                                                                                                                                                                            | None                               |\n| File Extension                           | Extension of the file to read in.                                                                                                                                                                                                                                                        | ",(0,n.jsx)(r.code,{children:"xlsx"}),"                             |\n| Ignore After Header                      | Number of rows to ignore after the header.                                                                                                                                                                                                                                               | None                               |\n| Ignore leading white spaces from values  | Whether to skip the leading whitespaces from values the Source gem reads.                                                                                                                                                                                                                | false                              |\n| Ignore trailing white spaces from values | Whether to skip the trailing whitespaces from values the Source gem reads.                                                                                                                                                                                                               | false                              |\n| Infer Schema                             | Whether to automatically infer the input schema from the data. This requires one extra pass over the data. ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"Note:"})," The ",(0,n.jsx)(r.code,{children:"spark-excel"})," library provides this setting and is different than the ",(0,n.jsx)(r.code,{children:"Infer Schema"})," button in the Prophecy UI. Both should provide the same results. | false                              |\n| Locale                                   | Sets a locale as language tag in IETF BCP 47 format.                                                                                                                                                                                                                                     | ",(0,n.jsx)(r.code,{children:"en-US"}),"                            |\n| NaN Value                                | Sets the string representation of a non-number value.                                                                                                                                                                                                                                    | ",(0,n.jsx)(r.code,{children:"NaN"}),"                              |\n| Negative Infinite value                  | Sets the string representation of a negative infinity value.                                                                                                                                                                                                                             | ",(0,n.jsx)(r.code,{children:"-Inf"}),"                             |\n| Null Value                               | Sets the string representation of a null value.                                                                                                                                                                                                                                          | None                               |\n| Parse Mode                               | How to handle corrupt data. ",(0,n.jsx)("br",{}),"For a list of the possible values, see ",(0,n.jsx)(r.a,{href:"#supported-parse-modes",children:"Supported parse modes"}),".                                                                                                                                                                 | ",(0,n.jsx)(r.code,{children:"Permissive"}),"                       |\n| Positive Infinite value                  | Sets the string representation of a positive infinity value.                                                                                                                                                                                                                             | ",(0,n.jsx)(r.code,{children:"Inf"}),"                              |     |\n| Sampling Ratio                           | Defines a fraction of rows to use for schema inferring                                                                                                                                                                                                                                   | ",(0,n.jsx)(r.code,{children:"1.0"}),"                              |\n| Timestamp Format                         | Sets the string that indicates a timestamp format.                                                                                                                                                                                                                                       | ",(0,n.jsx)(r.code,{children:"yyyy-MM-dd'T'HH:mm:ss[.SSS][XXX]"})," |\n| Use Null for Error Cells                 | Whether to use null for cells with errors.                                                                                                                                                                                                                                               | false                              |\n| Workbook Password                        | Password to secure your workbook.                                                                                                                                                                                                                                                        | None                               |\n| Time Zone ID                             | Timezone ID for the ",(0,n.jsx)(r.code,{children:"Date"})," and ",(0,n.jsx)(r.code,{children:"Timestamp"})," from the IANA Time Zone Database.",(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"Note:"})," For a list of valid values, see ",(0,n.jsx)(r.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/time/ZoneId.html",children:"Class ZoneId"}),".                                                                              | None                               |\n| Temporary file threshold                 | When the Source gem should start writing data to temporary files on disk instead of keeping it in memory.                                                                                                                                                                                | None                               |\n| Maximum rows in memory                   | Maximum amount of rows to have in memory.                                                                                                                                                                                                                                                | None                               |\n| Maximum byte array size                  | Maximum size of your array.                                                                                                                                                                                                                                                              | None                               |"]}),"\n",(0,n.jsx)(r.h3,{id:"supported-parse-modes",children:"Supported parse modes"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Mode"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Permissive"}),(0,n.jsx)(r.td,{children:"Put the malformed string into the corrupt records column, and set the malformed fields to null."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Drop Malformed"}),(0,n.jsx)(r.td,{children:"Ignore the entire corrupted record. This mode is not supported in the CSV built-in functions."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Fail Fast"}),(0,n.jsx)(r.td,{children:"Throw an exception when it meets a corrupted record."})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"target",children:"Target"}),"\n",(0,n.jsx)(r.p,{children:"The Target gem writes data to XLSX files and allows you to optionally specify the following additional properties."}),"\n",(0,n.jsx)(r.h3,{id:"target-properties",children:"Target properties"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property name"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Data Address"}),(0,n.jsxs)(r.td,{children:["Location to write data addresses to. To learn more, see ",(0,n.jsx)(r.a,{href:"https://github.com/crealytics/spark-excel#data-addresses",children:"Data Addresses"}),"."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"A1"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"File Extension"}),(0,n.jsx)(r.td,{children:"File extension of the file to write to."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"xlsx"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Header"}),(0,n.jsx)(r.td,{children:"Whether to write a header to the file."}),(0,n.jsx)(r.td,{children:"true"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Locale"}),(0,n.jsx)(r.td,{children:"Sets a locale as language tag in IETF BCP 47 format."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"en-US"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Date Format"}),(0,n.jsx)(r.td,{children:"String that indicates a date format."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"yyyy-MM-dd"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Use Plain Number Format"}),(0,n.jsx)(r.td,{children:"Whether to format the cells without rounding and scientific notations."}),(0,n.jsx)(r.td,{children:"false"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Workbook Password"}),(0,n.jsx)(r.td,{children:"Password to secure your workbook."}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Write Mode"}),(0,n.jsxs)(r.td,{children:["How to handle existing data. For a list of the possible values, see ",(0,n.jsx)(r.a,{href:"#supported-write-modes",children:"Supported write modes"}),"."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"append"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Partition Columns"}),(0,n.jsx)(r.td,{children:"List of columns to partition the XLSX files by."}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Create single named XLSX file"}),(0,n.jsx)(r.td,{children:"Whether to create a single XLSX file."}),(0,n.jsx)(r.td,{children:"false"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"supported-write-modes",children:"Supported write modes"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Write mode"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"error"}),(0,n.jsx)(r.td,{children:"If the data already exists, throw an exception."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"overwrite"}),(0,n.jsxs)(r.td,{children:["If the data already exists, overwrite the data with the contents of the ",(0,n.jsx)(r.code,{children:"DataFrame"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"append"}),(0,n.jsxs)(r.td,{children:["If the data already exists, append the contents of the ",(0,n.jsx)(r.code,{children:"DataFrame"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ignore"}),(0,n.jsxs)(r.td,{children:["If the data already exists, do nothing with the contents of the ",(0,n.jsx)(r.code,{children:"DataFrame"}),". ",(0,n.jsx)("br",{}),"This is similar to the ",(0,n.jsx)(r.code,{children:"CREATE TABLE IF NOT EXISTS"})," clause in SQL."]})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"writing-a-single-output-file",children:"Writing a single output file"}),"\n",(0,n.jsx)(r.p,{children:"Due to Spark's distributed nature, when you work with text-based files, your output is a directory containing multiple partitioned files."}),"\n",(0,n.jsxs)(r.p,{children:["For example, if you write to the following location: ",(0,n.jsx)(r.strong,{children:"dbfs:/FileStore/Users/test/customers.xlsx"}),", you see the following in the DBFS:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["A ",(0,n.jsx)(r.strong,{children:"customers.xlsx"})," directory."]}),"\n",(0,n.jsxs)(r.li,{children:["Partitions within the ",(0,n.jsx)(r.strong,{children:"customers.xlsx"})," directory."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Each partition is a separate valid XLSX file with a segment of the overall output data."}),"\n",(0,n.jsx)(r.p,{children:"If you want the Target gem to output a single file:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Add a Repartition gem in ",(0,n.jsx)(r.strong,{children:"Coalesce"})," mode with the ",(0,n.jsx)(r.strong,{children:"Partition Count"})," set to ",(0,n.jsx)(r.code,{children:"1"}),"."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"Coalesce using Repartition",src:t(89510).A+"",width:"2870",height:"1678"})}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Connect the Repartition gem between your second-to-last transformation and the ",(0,n.jsx)(r.code,{children:"Target"})," gem."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"Attach coalesce before desired target",src:t(25986).A+"",width:"1906",height:"882"})}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Run your pipeline."}),"\n",(0,n.jsx)(r.p,{children:"After you run your pipeline, your output is still a directory, but this time it only contains a single output file."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"example-code",children:"Example code"}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsxs)(r.p,{children:["To see the generated source code of your project, ",(0,n.jsx)(r.a,{href:"/engineers/project-lifecycle/#review-the-code",children:"switch to the Code view"})," in the project header."]})}),"\n","\n",(0,n.jsx)(l.A,{children:(0,n.jsx)(o.A,{value:"py",label:"Python",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-py",children:'def Demo_XLSX_Source(spark: SparkSession) -> DataFrame:\n    if Config.fabricName == "dev":\n        return spark.read\\\n            .format("excel")\\\n            .option("header", True)\\\n            .option("dataAddress", "A1")\\\n            .option("inferSchema", True)\\\n            .load("dbfs:/FileStore/Users/scott/plain_number.xlsx")\n    else:\n        raise Exception("No valid dataset present to read fabric")\n'})})})})]})}function x(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}}}]);