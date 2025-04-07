"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[95171],{14129:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"Spark/gems/transform/schema-transform","title":"SchemaTransform","description":"Add, Edit, Rename or Drop Columns","source":"@site/docs/Spark/gems/transform/schema-transform.md","sourceDirName":"Spark/gems/transform","slug":"/engineers/schema-transform","permalink":"/prophecy-docs-staging/preview/pr-604/engineers/schema-transform","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-604/tags/gems"},{"inline":true,"label":"transform","permalink":"/prophecy-docs-staging/preview/pr-604/tags/transform"},{"inline":true,"label":"schema","permalink":"/prophecy-docs-staging/preview/pr-604/tags/schema"}],"version":"current","frontMatter":{"title":"SchemaTransform","id":"schema-transform","slug":"/engineers/schema-transform","description":"Add, Edit, Rename or Drop Columns","tags":["gems","transform","schema"]},"sidebar":"mySidebar","previous":{"title":"SampleRows","permalink":"/prophecy-docs-staging/preview/pr-604/engineers/sample-rows"},"next":{"title":"SetOperation","permalink":"/prophecy-docs-staging/preview/pr-604/engineers/set-operation"}}');var a=s(74848),t=s(28453),i=s(49235),l=s(65537),d=s(79329);const c={title:"SchemaTransform",id:"schema-transform",slug:"/engineers/schema-transform",description:"Add, Edit, Rename or Drop Columns",tags:["gems","transform","schema"]},o=void 0,h={},p=[{value:"Operations",id:"operations",level:2},{value:"Add/Replace Expression",id:"addreplace-expression",level:3},{value:"Drop Column",id:"drop-column",level:3},{value:"Rename Column",id:"rename-column",level:3},{value:"Add If Missing",id:"add-if-missing",level:3},{value:"Add Rule",id:"add-rule",level:3},{value:"Spark Code",id:"spark-code",level:2},{value:"Advanced Import",id:"advanced-import",level:2},{value:"Using Advanced Import",id:"using-advanced-import",level:3},{value:"Format",id:"format",level:3},{value:"Advanced Import Operation types",id:"advanced-import-operation-types",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.0.1+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"3.0.1+"}),"\n",(0,a.jsxs)(n.p,{children:["Use the SchemaTransform gem to apply transformations to columns from the incoming DataFrame. This page describes the different transformations\u2014or ",(0,a.jsx)(n.em,{children:"operations"}),"\u2014that you can use in this gem."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Example usage of SchemaTransform",src:s(34994).A+"",width:"2620",height:"1508"})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Unlike Reformat which is a set operation where all the transforms are applied in parallel, transformations here are applied ",(0,a.jsx)(n.em,{children:"in order"}),".\nReformat is a SQL ",(0,a.jsx)(n.code,{children:"select"})," and is preferable when making many changes."]})}),"\n",(0,a.jsx)(n.h2,{id:"operations",children:"Operations"}),"\n",(0,a.jsx)(n.h3,{id:"addreplace-expression",children:"Add/Replace Expression"}),"\n",(0,a.jsx)(n.p,{children:"Add a new column or replace an existing one based on an expression."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"New Column"}),(0,a.jsx)(n.td,{children:"Output column name"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Expression"}),(0,a.jsx)(n.td,{children:"SQL expression to generate values in the new column"})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"drop-column",children:"Drop Column"}),"\n",(0,a.jsx)(n.p,{children:"Remove a column from next stage of the Pipeline."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Column to drop"}),(0,a.jsx)(n.td,{children:"Column to be dropped"})]})})]}),"\n",(0,a.jsx)(n.h3,{id:"rename-column",children:"Rename Column"}),"\n",(0,a.jsx)(n.p,{children:"Rename an existing column downstream in the Pipeline."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Old Column Name"}),(0,a.jsx)(n.td,{children:"Column to be renamed"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"New Column Name"}),(0,a.jsx)(n.td,{children:"Output column name"})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"add-if-missing",children:"Add If Missing"}),"\n",(0,a.jsx)(n.p,{children:"Provide a default value for a column if it is missing from the source."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Source Column Name"}),(0,a.jsx)(n.td,{children:"Column that contains missing values"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Default Value (if missing)"}),(0,a.jsx)(n.td,{children:"The value that will replace missing values"})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"add-rule",children:"Add Rule"}),"\n",(0,a.jsxs)(n.p,{children:["Use a business rule in your Pipeline. Visit the ",(0,a.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-604/engineers/business-rules",children:"Business rules engine"})," page to learn about business rules."]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"New Column"}),(0,a.jsx)(n.td,{children:"The column that the business rule will apply to"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Rule"}),(0,a.jsx)(n.td,{children:"The business rule that contains the logic that will populate the new column values"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"spark-code",children:"Spark Code"}),"\n","\n",(0,a.jsxs)(l.A,{children:[(0,a.jsx)(d.A,{value:"py",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'def transform(spark: SparkSession, in0: DataFrame) -> DataFrame:\n    return in0\\\n        .withColumn("business_date", to_date(lit("2022-05-05"), "yyyy-MM-dd"))\\\n        .withColumnRenamed("bonus_rate", "bonus")\\\n        .drop("slug")\n\n'})})}),(0,a.jsx)(d.A,{value:"scala",label:"Scala",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",children:'object transform {\n  def apply(spark: SparkSession, in: DataFrame): DataFrame =\n    in.withColumn("business_date", to_date(lit("2022-05-05"), "yyyy-MM-dd"))\n      .withColumnRenamed("bonus_rate", "bonus")\n      .drop("slug")\n}\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"advanced-import",children:"Advanced Import"}),"\n",(0,a.jsx)(n.p,{children:"The Advanced Import feature allows you to bulk import statements that are structured similarly to CSV/TSV files. This can be useful if you have your expressions/transformation logic in another format and just want to quickly configure a SchemaTransform gem based on existing logic."}),"\n",(0,a.jsx)(n.h3,{id:"using-advanced-import",children:"Using Advanced Import"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Click the ",(0,a.jsx)(n.strong,{children:"Advanced"})," tab in the SchemaTransform gem."]}),"\n",(0,a.jsx)(n.li,{children:"Enter the expressions into the text area."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Advanced import mode",src:s(96207).A+"",width:"1433",height:"255"})}),"\n",(0,a.jsx)(n.h3,{id:"format",children:"Format"}),"\n",(0,a.jsxs)(n.p,{children:["The format of these expressions is ",(0,a.jsx)(n.code,{children:"op_type,target_name,target_expr"}),", where ",(0,a.jsx)(n.code,{children:"op_type"})," is the type of operation (see below); ",(0,a.jsx)(n.code,{children:"target_name"})," is the desired new column name and ",(0,a.jsx)(n.code,{children:"target_expr"})," is the Spark expression that will be used to generate the new column. Each ",(0,a.jsx)(n.code,{children:"op_type"})," has a different number of extra columns that have to be provided, see below for more details."]}),"\n",(0,a.jsxs)(n.admonition,{type:"caution",children:[(0,a.jsxs)(n.p,{children:["For ",(0,a.jsx)(n.code,{children:"target_expr"})," values that contain a comma ",(0,a.jsx)(n.code,{children:","})," or span multiple lines, you must surround them by ",(0,a.jsx)(n.code,{children:"``"})," on either side. For example:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"addrep,customer_id,customer_id\naddrep,full_name,``concat(first_name, ' ', last_name)``\n"})})]}),"\n",(0,a.jsx)(n.h3,{id:"advanced-import-operation-types",children:"Advanced Import Operation types"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Operation Type"}),(0,a.jsx)(n.th,{children:"Advanced Import name"}),(0,a.jsx)(n.th,{children:":Arguments:"}),(0,a.jsx)(n.th,{children:"Example"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Add/Replace"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"addrep"})}),(0,a.jsx)(n.td,{children:"2"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"addrep,foo,CAST(NULL as int)"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Drop"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"drop"})}),(0,a.jsx)(n.td,{children:"1"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"drop bar"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Rename"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"rename"})}),(0,a.jsx)(n.td,{children:"2"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"rename,foo,bar"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Add if missing"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"missing"})}),(0,a.jsx)(n.td,{children:"2"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"missing,foo,current_timestamp()"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Add rule"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"addrule"})}),(0,a.jsx)(n.td,{children:"1"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"addrule, PromoCodeRule()"})})]})]})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var r=s(96540);const a={},t=r.createContext(a);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(t.Provider,{value:n},e.children)}},34994:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/schemaTransform_eg_1-b9c5e9075411bd86acd8d20984b21c4c.png"},49235:(e,n,s)=>{s.d(n,{A:()=>a});s(96540);var r=s(74848);function a(e){return(0,r.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,r.jsxs)("span",{className:"badge-dependency",children:[(0,r.jsx)("span",{className:"left",children:e.python_package_name}),(0,r.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,r.jsxs)("span",{className:"badge-dependency",children:[(0,r.jsx)("span",{className:"left",children:e.scala_package_name}),(0,r.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,r.jsxs)("span",{className:"badge-dependency",children:[(0,r.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,r.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,r.jsxs)("span",{className:"badge-dependency",children:[(0,r.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,r.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,r.jsxs)("span",{className:"badge-spark",children:[(0,r.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,r.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,r.jsxs)("span",{className:"badge-spark",children:[(0,r.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,r.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,r.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,r.jsxs)("span",{className:"badge-spark",children:[(0,r.jsx)("span",{className:"left",children:"Livy"}),(0,r.jsx)("span",{className:"right",children:e.livy})]})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]})}},65537:(e,n,s)=>{s.d(n,{A:()=>_});var r=s(96540),a=s(18215),t=s(65627),i=s(56347),l=s(50372),d=s(30604),c=s(11861),o=s(78749);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:a}}=e;return{value:n,label:s,attributes:r,default:a}}))}(s);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function u(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const a=(0,i.W6)(),t=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,d.aZ)(t),(0,r.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(a.location.search);n.set(t,e),a.replace({...a.location,search:n.toString()})}),[t,a])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:a}=e,t=p(e),[i,d]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:t}))),[c,h]=m({queryString:s,groupId:a}),[x,j]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,t]=(0,o.Dv)(s);return[a,(0,r.useCallback)((e=>{s&&t.set(e)}),[s,t])]}({groupId:a}),f=(()=>{const e=c??x;return u({value:e,tabValues:t})?e:null})();(0,l.A)((()=>{f&&d(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),j(e)}),[h,j,t]),tabValues:t}}var j=s(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(74848);function b(e){let{className:n,block:s,selectedValue:r,selectValue:i,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.a_)(),o=e=>{const n=e.currentTarget,s=d.indexOf(n),a=l[s].value;a!==r&&(c(n),i(a))},h=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=d.indexOf(e.currentTarget)+1;n=d[s]??d[0];break}case"ArrowLeft":{const s=d.indexOf(e.currentTarget)-1;n=d[s]??d[d.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:t}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{d.push(e)},onKeyDown:h,onClick:o,...t,className:(0,a.A)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:t}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,g.jsx)(b,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function _(e){const n=(0,j.A)();return(0,g.jsx)(y,{...e,children:h(e.children)},String(n))}},79329:(e,n,s)=>{s.d(n,{A:()=>i});s(96540);var r=s(18215);const a={tabItem:"tabItem_Ymn6"};var t=s(74848);function i(e){let{children:n,hidden:s,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:s,children:n})}},96207:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/schematransform_advanced_2-a4cbe3cff9433842b21d5e17509a3939.png"}}]);