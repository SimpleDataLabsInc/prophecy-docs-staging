"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[29407],{28453:(e,s,r)=>{r.d(s,{R:()=>d,x:()=>c});var t=r(96540);const i={},n=t.createContext(i);function d(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(n.Provider,{value:s},e.children)}},49235:(e,s,r)=>{r.d(s,{A:()=>i});r(96540);var t=r(74848);function i(e){return(0,t.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.python_package_name}),(0,t.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.scala_package_name}),(0,t.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,t.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,t.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,t.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,t.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Livy"}),(0,t.jsx)("span",{className:"right",children:e.livy})]})}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]})}},63588:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"Spark/gems/source-target/file/csv","title":"CSV","description":"Parameters and properties to read from and write to CSV files","source":"@site/docs/Spark/gems/source-target/file/csv.md","sourceDirName":"Spark/gems/source-target/file","slug":"/engineers/csv","permalink":"/prophecy-docs-staging/preview/pr-607/engineers/csv","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-607/tags/gems"},{"inline":true,"label":"file","permalink":"/prophecy-docs-staging/preview/pr-607/tags/file"},{"inline":true,"label":"csv","permalink":"/prophecy-docs-staging/preview/pr-607/tags/csv"}],"version":"current","frontMatter":{"title":"CSV","id":"csv","slug":"/engineers/csv","description":"Parameters and properties to read from and write to CSV files","tags":["gems","file","csv"]},"sidebar":"mySidebar","previous":{"title":"Avro","permalink":"/prophecy-docs-staging/preview/pr-607/engineers/avro"},"next":{"title":"Data Generator","permalink":"/prophecy-docs-staging/preview/pr-607/engineers/data-generator"}}');var i=r(74848),n=r(28453),d=r(49235);const c={title:"CSV",id:"csv",slug:"/engineers/csv",description:"Parameters and properties to read from and write to CSV files",tags:["gems","file","csv"]},l=void 0,a={},h=[{value:"Requirements",id:"requirements",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Source",id:"source",level:2},{value:"Source properties",id:"source-properties",level:3},{value:"Supported corrupt record modes",id:"supported-corrupt-record-modes",level:3},{value:"Supported unescaped quote handling",id:"supported-unescaped-quote-handling",level:3},{value:"Target",id:"target",level:2},{value:"Target properties",id:"target-properties",level:3},{value:"Supported write modes",id:"supported-write-modes",level:3}];function o(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"The CSV (Comma-separated Values) file type is:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Easy to read from, write to, and share."}),"\n",(0,i.jsx)(s.li,{children:"Compatible with many programs, and easy to exchange data."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsx)(s.p,{children:"The CSV file type requires different package and Spark versions depending on the location type you select."}),"\n","\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Location Type"}),(0,i.jsx)(s.th,{children:"Dependency versions"}),(0,i.jsx)(s.th,{children:"Spark compatibility"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"File Location"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(d.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.0.1+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.0.1+"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(d.A,{uc_single:"14.3+",uc_shared:"14.3+",livy:"3.0.1+"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Sharepoint (Python only)"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(d.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.2.35+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"Not Available"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(d.A,{uc_single:"Not Supported",uc_shared:"Not Supported",livy:"Not Supported"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"SFTP (Python only)"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(d.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.2.35+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"Not Available"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(d.A,{uc_single:"14.3+",uc_shared:"Not Supported",livy:"Not Supported"})})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Parameter"}),(0,i.jsx)(s.th,{children:"Tab"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Read From"}),(0,i.jsx)(s.td,{children:"Location"}),(0,i.jsxs)(s.td,{children:["Which platform to read the file from. ",(0,i.jsx)("br",{}),"Possible values are: ",(0,i.jsx)(s.code,{children:"File Location"}),", ",(0,i.jsx)(s.code,{children:"Sharepoint"})," (Python only), or ",(0,i.jsx)(s.code,{children:"SFTP"})," (Python only)."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Write To"}),(0,i.jsx)(s.td,{children:"Location"}),(0,i.jsxs)(s.td,{children:["Which platform to write the file to. ",(0,i.jsx)("br",{}),"You can only select ",(0,i.jsx)(s.code,{children:"File Location"}),"."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Location"}),(0,i.jsx)(s.td,{children:"Location"}),(0,i.jsx)(s.td,{children:"File path to read from or write to the CSV file."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Schema"}),(0,i.jsx)(s.td,{children:"Properties"}),(0,i.jsxs)(s.td,{children:["Schema to apply on the loaded data.",(0,i.jsx)("br",{}),"In the Source gem, you can define or edit the schema visually or in JSON code.",(0,i.jsx)("br",{}),"In the Target gem, you can view the schema visually or as JSON code."]})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"source",children:"Source"}),"\n",(0,i.jsx)(s.p,{children:"The Source gem reads data from CSV files and allows you to optionally specify the following additional properties."}),"\n",(0,i.jsx)(s.h3,{id:"source-properties",children:"Source properties"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Property name"}),(0,i.jsx)(s.th,{children:"Description"}),(0,i.jsx)(s.th,{children:"Default"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Description"}),(0,i.jsx)(s.td,{children:"Description of your dataset."}),(0,i.jsx)(s.td,{children:"None"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"User-Defined Schema"}),(0,i.jsx)(s.td,{children:"Whether to use the schema you define."}),(0,i.jsx)(s.td,{children:"true"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Column Delimeter"}),(0,i.jsx)(s.td,{children:"Character to separate column names from your CSV file."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:","})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"First row is header"}),(0,i.jsx)(s.td,{children:"Whether to use the first line as names of columns."}),(0,i.jsx)(s.td,{children:"true"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Infer schema from data"}),(0,i.jsxs)(s.td,{children:["Whether to automatically infer the input schema from the data. This requires one extra pass over the data. ",(0,i.jsx)("br",{}),"CSV built-in functions ignore this option."]}),(0,i.jsx)(s.td,{children:"false"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Parse Multi-line records"}),(0,i.jsxs)(s.td,{children:["Whether to parse one record, which may span multiple lines, per file. ",(0,i.jsx)("br",{}),"CSV built-in functions ignore this option."]}),(0,i.jsx)(s.td,{children:"false"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Encoding Type"}),(0,i.jsxs)(s.td,{children:["Decodes the CSV files by encoding type you give. ",(0,i.jsx)("br",{}),"CSV built-in functions ignore this option."]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"UTF-8"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Quote character"}),(0,i.jsx)(s.td,{children:"Sets a single character to escape quoted values where the separator can be part of the value. If you want to turn off quotations, set this to an empty string."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:'"'})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Escape character"}),(0,i.jsx)(s.td,{children:"Sets a single character to escape quotes inside a quoted value."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"\\"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Escape char for quote escaping char"}),(0,i.jsx)(s.td,{children:"Sets a single character to escape the escape for the quote character."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"\\0"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Skip line beginning with character"}),(0,i.jsx)(s.td,{children:"If the line begins with the character you specify, skip the entire line."}),(0,i.jsx)(s.td,{children:"None"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Enforce specified or inferred schema"}),(0,i.jsxs)(s.td,{children:["Whether to forcibly apply the specified or inferred schema to data source files, and headers in CSV files. ",(0,i.jsx)("br",{}),"CSV built-in functions ignore this option."]}),(0,i.jsx)(s.td,{children:"false"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Sampling Ratio"}),(0,i.jsxs)(s.td,{children:["Defines a fraction of rows to use for schema inferring. ",(0,i.jsx)("br",{}),"CSV built-in functions ignore this option."]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"1.0"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Ignore leading white spaces from values"}),(0,i.jsx)(s.td,{children:"Whether to skip the leading whitespaces from values the Source gem reads."}),(0,i.jsx)(s.td,{children:"false"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Ignore trailing white spaces from values"}),(0,i.jsx)(s.td,{children:"Whether to skip the trailing whitespaces from values the Source gem reads."}),(0,i.jsx)(s.td,{children:"false"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Null Value"}),(0,i.jsx)(s.td,{children:"Sets the string representation of a null value."}),(0,i.jsx)(s.td,{children:"None"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Empty Value"}),(0,i.jsx)(s.td,{children:"Sets the string representation of an empty value."}),(0,i.jsx)(s.td,{children:"None"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"String representation for non-number value"}),(0,i.jsx)(s.td,{children:"Sets the string representation of a non-number value."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"NaN"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Positive infinity value"}),(0,i.jsx)(s.td,{children:"Sets the string representation of a positive infinity value."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"Inf"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Negative infinity value"}),(0,i.jsx)(s.td,{children:"Sets the string representation of a negative infinity value."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"-Inf"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Date format string"}),(0,i.jsx)(s.td,{children:"Sets the string that indicates a date format."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"yyyy-MM-dd"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Timestamp format string"}),(0,i.jsx)(s.td,{children:"Sets the string that indicates a timestamp format."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"yyyy-MM-dd'T'HH:mm:ss[.SSS][XXX]"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Max number of columns per record"}),(0,i.jsx)(s.td,{children:"Defines a hard limit of how many columns a record can have."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"20480"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Allowed maximum characters per column"}),(0,i.jsx)(s.td,{children:"Defines the maximum number of characters allowed for any given value being read."}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"-1"})," (unlimited length)"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Corrupt record handling"}),(0,i.jsxs)(s.td,{children:["How to handle corrupt data. For a list of the possible values, see ",(0,i.jsx)(s.a,{href:"#supported-corrupt-record-modes",children:"Supported corrupt record modes"}),"."]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"PERMISSIVE"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Column name of a corrupt record"}),(0,i.jsxs)(s.td,{children:["Rename the field the PERMISSIVE mode creates to store malformed data. ",(0,i.jsx)("br",{}),"This overrides ",(0,i.jsx)(s.code,{children:"spark.sql.columnNameOfCorruptRecord"}),"."]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"_corrupt_records"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Line Sep"}),(0,i.jsx)(s.td,{children:"Sets a separator for each field and value. The separator can be one or more characters."}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"\\r"}),", ",(0,i.jsx)(s.code,{children:"\\r\\n"})," and ",(0,i.jsx)(s.code,{children:"\\n"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Locale"}),(0,i.jsx)(s.td,{children:"Sets a locale as language tag in IETF BCP 47 format."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"en-US"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Unescaped Quote Handling"}),(0,i.jsxs)(s.td,{children:["How the ",(0,i.jsx)(s.code,{children:"CsvParser"})," handles values with unescaped quotes. ",(0,i.jsx)("br",{}),"For a list of the possible values, see ",(0,i.jsx)(s.a,{href:"#supported-unescaped-quote-handling",children:"Supported unescaped quote handling"}),"."]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"STOP_AT_DELIMITER"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Recursive File Lookup"}),(0,i.jsxs)(s.td,{children:["Whether to recursively load files and disable partition inferring. If the data source explicitly specifies the ",(0,i.jsx)(s.code,{children:"partitionSpec"})," when the",(0,i.jsx)(s.code,{children:"recursiveFileLookup"})," is ",(0,i.jsx)(s.code,{children:"true"}),", the Source gem throws an exception."]}),(0,i.jsx)(s.td,{children:"false"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Path Global Filter"}),(0,i.jsxs)(s.td,{children:["Glob pattern to only include files with paths matching the pattern. The syntax follows ",(0,i.jsx)(s.a,{href:"https://hadoop.apache.org/docs/stable/api/org/apache/hadoop/fs/GlobFilter.html",children:"GlobFilter"})," and does not change the behavior of partition discovery."]}),(0,i.jsx)(s.td,{children:"None"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Modified Before"}),(0,i.jsxs)(s.td,{children:["Timestamp to only include files with modification times occurring before the time you specify. The timestamp must be in the following form: YYYY-MM-DDTHH:mm",":ss"," (e.g. 2020-06-01T13:00:00)."]}),(0,i.jsx)(s.td,{children:"None"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Modified After"}),(0,i.jsxs)(s.td,{children:["Timestamp to only include files with modification times occurring after the time you specify. The timestamp must be in the following form: YYYY-MM-DDTHH:mm",":ss"," (e.g. 2020-06-01T13:00:00)."]}),(0,i.jsx)(s.td,{children:"None"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Skip header lines"}),(0,i.jsx)(s.td,{children:"Number of lines to skip at the beginning of the file."}),(0,i.jsx)(s.td,{children:"None"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Skip footer lines"}),(0,i.jsx)(s.td,{children:"Number of lines to skip at the end of the file."}),(0,i.jsx)(s.td,{children:"None"})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"supported-corrupt-record-modes",children:"Supported corrupt record modes"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Mode"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"PERMISSIVE"}),(0,i.jsx)(s.td,{children:"Put the malformed string into the corrupt records column, and set the malformed fields to null."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"DROPMALFORMED"}),(0,i.jsx)(s.td,{children:"Ignore the entire corrupted record. This mode is not supported in the CSV built-in functions."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"FAILFAST"}),(0,i.jsx)(s.td,{children:"Throw an exception when it meets a corrupted record."})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"supported-unescaped-quote-handling",children:"Supported unescaped quote handling"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Mode"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"STOP_AT_CLOSING_QUOTE"}),(0,i.jsx)(s.td,{children:"Accumulate the quote character and proceed parsing the value as a quoted value, until a closing quote is found."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"BACK_TO_DELIMITER"}),(0,i.jsx)(s.td,{children:"Consider the value as an unquoted value. This makes the parser accumulate all characters of the current parsed value until it finds the delimiter. If it does not find the delimiter, the parser continues accumulating characters from the input until it finds a delimiter or line ending."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"STOP_AT_DELIMITER"}),(0,i.jsx)(s.td,{children:"Consider the value as an unquoted value. This makes the parser accumulate all characters from the input until it finds the delimiter or a line ending."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"SKIP_VALUE"}),(0,i.jsxs)(s.td,{children:["Skip the parsed content and set this to the value in the ",(0,i.jsx)(s.code,{children:"Null Value"})," property."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"RAISE_ERROR"}),(0,i.jsxs)(s.td,{children:["Throw a ",(0,i.jsx)(s.code,{children:"TextParsingException"}),"."]})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"target",children:"Target"}),"\n",(0,i.jsx)(s.p,{children:"The Target gem writes data to CSV files and allows you to optionally specify the following additional properties."}),"\n",(0,i.jsx)(s.h3,{id:"target-properties",children:"Target properties"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Property name"}),(0,i.jsx)(s.th,{children:"Description"}),(0,i.jsx)(s.th,{children:"Default"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Dataset Name"}),(0,i.jsx)(s.td,{children:"Name of the dataset."}),(0,i.jsx)(s.td,{children:"True"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Description"}),(0,i.jsx)(s.td,{children:"Description of your dataset."}),(0,i.jsx)(s.td,{children:"None"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Write Mode"}),(0,i.jsxs)(s.td,{children:["How to handle existing data. For a list of the possible values, see ",(0,i.jsx)(s.a,{href:"#supported-write-modes",children:"Supported write modes"}),"."]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"error"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Column delimeter"}),(0,i.jsx)(s.td,{children:"Character to separate column names from your CSV file."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:","})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"First row is header"}),(0,i.jsx)(s.td,{children:"Whether to use the first line as names of columns."}),(0,i.jsx)(s.td,{children:"true"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Partition Columns"}),(0,i.jsx)(s.td,{children:"List of columns to partition the CSV files by."}),(0,i.jsx)(s.td,{children:"None"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Encoding Type"}),(0,i.jsxs)(s.td,{children:["Specifies encoding (charset) of saved CSV files. ",(0,i.jsx)("br",{}),"CSV built-in functions ignore this option."]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"UTF-8"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Quote character"}),(0,i.jsx)(s.td,{children:"Sets a single character to escape quoted values where the separator can be part of the value. If you want to turn off quotations, you need to set this to an empty string."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:'"'})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Escape character"}),(0,i.jsx)(s.td,{children:"Sets a single character to escape quotes inside a quoted value."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"\\"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Escape char for quote escaping char"}),(0,i.jsx)(s.td,{children:"Sets a single character to escape the escape for the quote character."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"\\0"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Null Value"}),(0,i.jsx)(s.td,{children:"Sets the string representation of a null value."}),(0,i.jsx)(s.td,{children:"None"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Empty Value"}),(0,i.jsx)(s.td,{children:"Sets the string representation of an empty value."}),(0,i.jsx)(s.td,{children:'"" (empty string)'})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Compression"}),(0,i.jsxs)(s.td,{children:["Compression codec when writing to the CSV file. ",(0,i.jsx)("br",{}),"The CSV file supports the following codecs: ",(0,i.jsx)(s.code,{children:"none"}),", ",(0,i.jsx)(s.code,{children:"bzip2"}),", ",(0,i.jsx)(s.code,{children:"gzip"}),", ",(0,i.jsx)(s.code,{children:"lz4"}),", ",(0,i.jsx)(s.code,{children:"snappy"})," and ",(0,i.jsx)(s.code,{children:"deflate"}),". ",(0,i.jsx)("br",{}),"CSV built-in functions ignore this option."]}),(0,i.jsx)(s.td,{children:"None"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Escape quotes"}),(0,i.jsx)(s.td,{children:"Whether values containing quotes should always be enclosed in quotes."}),(0,i.jsx)(s.td,{children:"false"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Quote All"}),(0,i.jsx)(s.td,{children:"Whether all values should always be enclosed in quotes."}),(0,i.jsx)(s.td,{children:"false"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Date format string"}),(0,i.jsx)(s.td,{children:"Sets the string that indicates a date format."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"yyyy-MM-dd"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Timestamp format string"}),(0,i.jsx)(s.td,{children:"Sets the string that indicates a timestamp format."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"yyyy-MM-dd'T'HH:mm:ss[.SSS][XXX]"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Ignore leading white spaces from values"}),(0,i.jsx)(s.td,{children:"Whether to skip the leading whitespaces for values the Target gem writes."}),(0,i.jsx)(s.td,{children:"true"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Ignore trailing white spaces from values"}),(0,i.jsx)(s.td,{children:"Whether to skip the trailing whitespaces for values the Target gem writes."}),(0,i.jsx)(s.td,{children:"true"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Line Sep"}),(0,i.jsx)(s.td,{children:"Defines the line separator to use when parsing."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"\\n"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Create single CSV file"}),(0,i.jsxs)(s.td,{children:["Whether to create a single CSV file. ",(0,i.jsx)("br",{}),"Due to Spark's distributed nature, Prophecy by default writes output files as multiple separate partition files."]}),(0,i.jsx)(s.td,{children:"false"})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"supported-write-modes",children:"Supported write modes"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Write mode"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"error"}),(0,i.jsx)(s.td,{children:"If the data already exists, throw an exception."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"overwrite"}),(0,i.jsxs)(s.td,{children:["If the data already exists, overwrite the data with the contents of the ",(0,i.jsx)(s.code,{children:"DataFrame"}),"."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"append"}),(0,i.jsxs)(s.td,{children:["If the data already exists, append the contents of the ",(0,i.jsx)(s.code,{children:"DataFrame"}),"."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"ignore"}),(0,i.jsxs)(s.td,{children:["If the data already exists, do nothing with the contents of the ",(0,i.jsx)(s.code,{children:"DataFrame"}),". ",(0,i.jsx)("br",{}),"This is similar to the ",(0,i.jsx)(s.code,{children:"CREATE TABLE IF NOT EXISTS"})," clause in SQL."]})]})]})]})]})}function x(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}}}]);