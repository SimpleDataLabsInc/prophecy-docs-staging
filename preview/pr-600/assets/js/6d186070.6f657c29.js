"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[34917],{28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>l});var t=s(96540);const n={},a=t.createContext(n);function i(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(a.Provider,{value:r},e.children)}},30947:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"Spark/gems/source-target/warehouse/redshift","title":"Redshift","description":"Parameters and properties to read from and write to the Redshift warehouse.","source":"@site/docs/Spark/gems/source-target/warehouse/redshift.md","sourceDirName":"Spark/gems/source-target/warehouse","slug":"/engineers/redshift","permalink":"/prophecy-docs-staging/preview/pr-600/engineers/redshift","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-600/tags/gems"},{"inline":true,"label":"warehouse","permalink":"/prophecy-docs-staging/preview/pr-600/tags/warehouse"},{"inline":true,"label":"redshift","permalink":"/prophecy-docs-staging/preview/pr-600/tags/redshift"}],"version":"current","frontMatter":{"title":"Redshift","id":"redshift","slug":"/engineers/redshift","description":"Parameters and properties to read from and write to the Redshift warehouse.","tags":["gems","warehouse","redshift"]},"sidebar":"mySidebar","previous":{"title":"Oracle","permalink":"/prophecy-docs-staging/preview/pr-600/engineers/oracle"},"next":{"title":"Salesforce","permalink":"/prophecy-docs-staging/preview/pr-600/engineers/salesforce"}}');var n=s(74848),a=s(28453),i=s(49235);s(65537),s(79329);const l={title:"Redshift",id:"redshift",slug:"/engineers/redshift",description:"Parameters and properties to read from and write to the Redshift warehouse.",tags:["gems","warehouse","redshift"]},c=void 0,o={},d=[{value:"Parameters",id:"parameters",level:2},{value:"DB Table",id:"db-table",level:3},{value:"SQL Query",id:"sql-query",level:3},{value:"Source",id:"source",level:2},{value:"Source properties",id:"source-properties",level:3},{value:"Target",id:"target",level:2},{value:"Target properties",id:"target-properties",level:3},{value:"Supported distribution styles",id:"supported-distribution-styles",level:3}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{python_package_name:"ProphecyWarehousePython",python_package_version:"0.0.1+",scala_package_name:"ProphecyWarehouseScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"Not Supported",livy:"Not Supported"}),"\n",(0,n.jsx)(r.p,{children:"You can read from and write to Redshift."}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Tab"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Username"}),(0,n.jsx)(r.td,{children:"Location"}),(0,n.jsx)(r.td,{children:"Username for your JDBC instance."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Password"}),(0,n.jsx)(r.td,{children:"Location"}),(0,n.jsx)(r.td,{children:"Password for your JDBC instance."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"JDBC URL"}),(0,n.jsx)(r.td,{children:"Location"}),(0,n.jsxs)(r.td,{children:["JDBC URL to connect to. ",(0,n.jsx)("br",{}),"The source-specific connection properties may be specified in the URL. ",(0,n.jsx)("br",{})," For example: ",(0,n.jsx)("br",{}),"- ",(0,n.jsx)(r.code,{children:"jdbc:postgresql://test.us-east-1.rds.amazonaws.com:5432/postgres"})," ",(0,n.jsx)("br",{}),"- ",(0,n.jsx)(r.code,{children:"jdbc:mysql://database-mysql.test.us-east-1.rds.amazonaws.com:3306/mysql"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Temporary Directory"}),(0,n.jsx)(r.td,{children:"Location"}),(0,n.jsx)(r.td,{children:"S3 location to temporarily store data before it's loaded into Redshift."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Data Source"}),(0,n.jsx)(r.td,{children:"Location"}),(0,n.jsxs)(r.td,{children:["Strategy to read data. ",(0,n.jsx)("br",{}),"In the Source gem, you can select ",(0,n.jsx)(r.code,{children:"DB Table"})," or ",(0,n.jsx)(r.code,{children:"SQL Query"}),". In the Target gem, you must enter a table.",(0,n.jsx)("br",{}),"To learn more, see ",(0,n.jsx)(r.a,{href:"#db-table",children:"DB Table"})," and ",(0,n.jsx)(r.a,{href:"#sql-query",children:"SQL Query"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Schema"}),(0,n.jsx)(r.td,{children:"Properties"}),(0,n.jsxs)(r.td,{children:["Schema to apply on the loaded data.",(0,n.jsx)("br",{}),"In the Source gem, you can define or edit the schema visually or in JSON code.",(0,n.jsx)("br",{}),"In the Target gem, you can view the schema visually or as JSON code."]})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"db-table",children:"DB Table"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"DB Table"})," option dictates which table to use as the source to read from. You can use anything valid in a ",(0,n.jsx)(r.code,{children:"FROM"})," clause of a SQL query. For example, instead of a table name, use a subquery in parentheses."]}),"\n",(0,n.jsx)(r.admonition,{type:"danger",children:(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"DB Table"})," option and the ",(0,n.jsx)(r.code,{children:"query"})," parameter are mutually exclusive, which means that you cannot specify both at the same time."]})}),"\n",(0,n.jsx)(r.h3,{id:"sql-query",children:"SQL Query"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"SQL Query"})," option specifies which query to use as a subquery in the ",(0,n.jsx)(r.code,{children:"FROM"})," clause. Spark also assigns an alias to the subquery clause. For example, Spark issues the following query to the JDBC Source:"]}),"\n","\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"SELECT columns FROM (<user_specified_query>) spark_gen_alias\n"})}),"\n",(0,n.jsx)(r.p,{children:"The following restrictions exist when you use this option:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["You cannot use the ",(0,n.jsx)(r.code,{children:"query"})," and ",(0,n.jsx)(r.code,{children:"partitionColumn"})," options at the same time."]}),"\n",(0,n.jsxs)(r.li,{children:["If you must specify the ",(0,n.jsx)(r.code,{children:"partitionColumn"})," option, you can specify the subquery using the ",(0,n.jsx)(r.code,{children:"dbtable"})," option and qualify your partition columns using the subquery alias provided as part of ",(0,n.jsx)(r.code,{children:"dbtable"}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"source",children:"Source"}),"\n",(0,n.jsx)(r.p,{children:"The Source gem reads data from Redshift and allows you to optionally specify the following additional properties."}),"\n",(0,n.jsx)(r.h3,{id:"source-properties",children:"Source properties"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Forward S3 access credentials to Databricks"}),(0,n.jsx)(r.td,{children:"Whether to forward S3 access credentials to Databricks."}),(0,n.jsx)(r.td,{children:"false"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Driver"}),(0,n.jsx)(r.td,{children:"Class name of the Redshift driver to connect to this URL."}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"AWS IAM Role"}),(0,n.jsx)(r.td,{children:"Identity that grants permissions to access other AWS services"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Temporary AWS access key id"}),(0,n.jsx)(r.td,{children:"Whether to allow a temporary credentials for authenticating to Redshift."}),(0,n.jsx)(r.td,{children:"false"})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"target",children:"Target"}),"\n",(0,n.jsx)(r.p,{children:"The Target gem writes data to Redshift and allows you to optionally specify the following additional properties."}),"\n",(0,n.jsx)(r.h3,{id:"target-properties",children:"Target properties"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Forward S3 access credentials to Databricks"}),(0,n.jsx)(r.td,{children:"Whether to forward S3 access credentials to Databricks."}),(0,n.jsx)(r.td,{children:"false"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Driver"}),(0,n.jsx)(r.td,{children:"Class name of the Redshift driver to connect to this URL."}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"AWS IAM Role"}),(0,n.jsx)(r.td,{children:"Identity that grants permissions to access other AWS services"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Temporary AWS access key id"}),(0,n.jsx)(r.td,{children:"Whether to allow a temporary credential for authenticating to Redshift."}),(0,n.jsx)(r.td,{children:"false"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Max length for string columns in redshift"}),(0,n.jsx)(r.td,{children:"Maximum length for string columns in Redshift."}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"2048"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Row distribution style for new table"}),(0,n.jsxs)(r.td,{children:["How to distribute data in a new table. ",(0,n.jsx)("br",{}),"For a list of the possible values, see ",(0,n.jsx)(r.a,{href:"#supported-distribution-styles",children:"Supported distribution styles"}),"."]}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Distribution key for new table"}),(0,n.jsxs)(r.td,{children:["If you selected ",(0,n.jsx)(r.code,{children:"Key"})," as the ",(0,n.jsx)(r.code,{children:"Row distribution style for new table"})," property, specify the key to distribute by."]}),(0,n.jsx)(r.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"supported-distribution-styles",children:"Supported distribution styles"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Distribution style"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"EVEN"})}),(0,n.jsx)(r.td,{children:"Distribute the rows across the slices in a round-robin fashion."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"KEY"})}),(0,n.jsx)(r.td,{children:"Distribute according to the values in one column."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"ALL"})}),(0,n.jsx)(r.td,{children:"A copy of the entire table is distributed to every node."})]})]})]})]})}function u(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},49235:(e,r,s)=>{s.d(r,{A:()=>n});s(96540);var t=s(74848);function n(e){return(0,t.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.python_package_name}),(0,t.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.scala_package_name}),(0,t.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,t.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,t.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,t.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,t.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Livy"}),(0,t.jsx)("span",{className:"right",children:e.livy})]})}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]})}},65537:(e,r,s)=>{s.d(r,{A:()=>w});var t=s(96540),n=s(18215),a=s(65627),i=s(56347),l=s(50372),c=s(30604),o=s(11861),d=s(78749);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:r,children:s}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:s,attributes:t,default:n}}=e;return{value:r,label:s,attributes:t,default:n}}))}(s);return function(e){const r=(0,o.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,s])}function p(e){let{value:r,tabValues:s}=e;return s.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:s}=e;const n=(0,i.W6)(),a=function(e){let{queryString:r=!1,groupId:s}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:r,groupId:s});return[(0,c.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(n.location.search);r.set(a,e),n.replace({...n.location,search:r.toString()})}),[a,n])]}function j(e){const{defaultValue:r,queryString:s=!1,groupId:n}=e,a=u(e),[i,c]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:a}))),[o,h]=x({queryString:s,groupId:n}),[j,b]=function(e){let{groupId:r}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,a]=(0,d.Dv)(s);return[n,(0,t.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:n}),f=(()=>{const e=o??j;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{f&&c(f)}),[f]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),b(e)}),[h,b,a]),tabValues:a}}var b=s(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=s(74848);function y(e){let{className:r,block:s,selectedValue:t,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),d=e=>{const r=e.currentTarget,s=c.indexOf(r),n=l[s].value;n!==t&&(o(r),i(n))},h=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;r=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;r=c[s]??c[c.length-1];break}}r?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":s},r),children:l.map((e=>{let{value:r,label:s,attributes:a}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>{c.push(e)},onKeyDown:h,onClick:d,...a,className:(0,n.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":t===r}),children:s??r},r)}))})}function g(e){let{lazy:r,children:s,selectedValue:a}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function v(e){const r=j(e);return(0,m.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,m.jsx)(y,{...r,...e}),(0,m.jsx)(g,{...r,...e})]})}function w(e){const r=(0,b.A)();return(0,m.jsx)(v,{...e,children:h(e.children)},String(r))}},79329:(e,r,s)=>{s.d(r,{A:()=>i});s(96540);var t=s(18215);const n={tabItem:"tabItem_Ymn6"};var a=s(74848);function i(e){let{children:r,hidden:s,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(n.tabItem,i),hidden:s,children:r})}}}]);