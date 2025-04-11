"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[15697],{28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var a=n(96540);const s={},r=a.createContext(s);function l(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(r.Provider,{value:t},e.children)}},44338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"Spark/gems/transform/data-quality-check","title":"DataQualityCheck","description":"Ensure your data adhere to predefined constraints","source":"@site/docs/Spark/gems/transform/data-quality-check.md","sourceDirName":"Spark/gems/transform","slug":"/engineers/data-quality-check","permalink":"/prophecy-docs-staging/preview/pr-613/engineers/data-quality-check","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-613/tags/gems"},{"inline":true,"label":"data quality","permalink":"/prophecy-docs-staging/preview/pr-613/tags/data-quality"}],"version":"current","frontMatter":{"title":"DataQualityCheck","id":"data-quality-check","slug":"/engineers/data-quality-check","description":"Ensure your data adhere to predefined constraints","tags":["gems","data quality"]},"sidebar":"mySidebar","previous":{"title":"DataCleansing","permalink":"/prophecy-docs-staging/preview/pr-613/engineers/data-cleansing"},"next":{"title":"Deduplicate","permalink":"/prophecy-docs-staging/preview/pr-613/engineers/deduplicate"}}');var s=n(74848),r=n(28453),l=n(49235),i=n(65537),c=n(79329);const o={title:"DataQualityCheck",id:"data-quality-check",slug:"/engineers/data-quality-check",description:"Ensure your data adhere to predefined constraints",tags:["gems","data quality"]},d=void 0,u={},h=[{value:"Requirements",id:"requirements",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Cluster requirements",id:"cluster-requirements",level:3},{value:"Input and Output",id:"input-and-output",level:2},{value:"Data Quality Checks",id:"data-quality-checks",level:2},{value:"Post Actions",id:"post-actions",level:2},{value:"Example code",id:"example-code",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.A,{python_package_name:"ProphecySparkDataQualityPython",python_package_version:"0.0.1+",scala_package_name:"",scala_package_version:"",scala_lib:"8.2.1",python_lib:"1.9.16",uc_single:"14.3+",uc_shared:"Not Supported",livy:"Not Supported"}),"\n",(0,s.jsxs)(t.p,{children:["The DataQualityCheck gem includes a variety of checks that are built on the open source tool ",(0,s.jsx)(t.a,{href:"https://github.com/awslabs/deequ",children:"Deequ"}),". Use this gem to make sure your data adheres to predefined constraints."]}),"\n",(0,s.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsx)(t.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"ProphecySparkDataQualityPython 0.0.1+"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"cluster-requirements",children:"Cluster requirements"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Set the ",(0,s.jsx)(t.code,{children:"SPARK_VERSION"})," environment variable to a Spark version 3.3+"]}),"\n",(0,s.jsxs)(t.li,{children:["Install the ",(0,s.jsx)(t.a,{href:"https://pypi.org/project/pydeequ/#:~:text=1.8%2B%2C%20we%20now%20officially%20support%20Spark3%20!",children:"PyDeequ"})," library on the cluster"]}),"\n",(0,s.jsxs)(t.li,{children:["Install the ",(0,s.jsx)(t.a,{href:"https://mvnrepository.com/artifact/com.amazon.deequ/deequ",children:"Maven Deequ"})," library on the cluster (choose the version that matches your Spark version)"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"input-and-output",children:"Input and Output"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"DataFrame"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"in0"})}),(0,s.jsx)(t.td,{children:"Includes the DataFrame for which the data quality will be checked."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"out0"})}),(0,s.jsxs)(t.td,{children:["Passes through the ",(0,s.jsx)(t.strong,{children:"in0"})," DataFrame unchanged."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"out1"})}),(0,s.jsx)(t.td,{children:"Outputs a DataFrame with the verification results and failure messages (if applicable) that you can define per check."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"data-quality-checks",children:"Data Quality Checks"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Check Type"}),(0,s.jsx)(t.th,{children:"Success Criteria"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Completeness"}),(0,s.jsxs)(t.td,{children:["Fraction of non-null values is greater than ",(0,s.jsx)(t.code,{children:"X"}),". The default is 100% non-null."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Row count"}),(0,s.jsxs)(t.td,{children:["Input DataFrame has at least ",(0,s.jsx)(t.code,{children:"X"})," number of rows."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Distinct count"}),(0,s.jsxs)(t.td,{children:["Number of distinct values in selected columns is equal to ",(0,s.jsx)(t.code,{children:"X"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Uniqueness"}),(0,s.jsx)(t.td,{children:"Values in selected columns are unique (occurring exactly once)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Data type"}),(0,s.jsx)(t.td,{children:"Selected columns have a certain data type."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Min-max length"}),(0,s.jsxs)(t.td,{children:["Strings in selected columns have a minimum length of ",(0,s.jsx)(t.code,{children:"X"})," and a maximum length of ",(0,s.jsx)(t.code,{children:"Y"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Total sum"}),(0,s.jsxs)(t.td,{children:["Sum of values in selected columns is equal to ",(0,s.jsx)(t.code,{children:"X"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Mean value"}),(0,s.jsxs)(t.td,{children:["Mean of values in selected columns is equal to ",(0,s.jsx)(t.code,{children:"X"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Standard deviation"}),(0,s.jsxs)(t.td,{children:["Standard deviation of values in selected columns is equal to ",(0,s.jsx)(t.code,{children:"X"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Non-negative value"}),(0,s.jsxs)(t.td,{children:["Fraction of non-negative values is at least ",(0,s.jsx)(t.code,{children:"X"})," percent."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Positive value"}),(0,s.jsxs)(t.td,{children:["Fraction of positive values is at least ",(0,s.jsx)(t.code,{children:"X"})," percent."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Lookup"}),(0,s.jsxs)(t.td,{children:["Fraction of values in selected columns that match lookup values is at least ",(0,s.jsx)(t.code,{children:"X"})," percent."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Column to constant value greater than"}),(0,s.jsxs)(t.td,{children:["Selected column values are greater than a constant value ",(0,s.jsx)(t.code,{children:"X"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Column to constant value greater than or equal to"}),(0,s.jsxs)(t.td,{children:["Selected column values are greater than or equal to a constant value ",(0,s.jsx)(t.code,{children:"X"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Column to constant value less than"}),(0,s.jsxs)(t.td,{children:["Selected column values are less than a constant value ",(0,s.jsx)(t.code,{children:"X"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Column to constant value less than or equal to"}),(0,s.jsxs)(t.td,{children:["Selected column values are less than or equal to a constant value ",(0,s.jsx)(t.code,{children:"X"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Column to column greater than"}),(0,s.jsx)(t.td,{children:"All values in left column are greater than all values in right column."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Column to column greater than or equal to"}),(0,s.jsx)(t.td,{children:"All values in left column are greater than or equal to all values in right column."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Column to column less than"}),(0,s.jsx)(t.td,{children:"All values in left column are less than all values in right column."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Column to column less than or equal to"}),(0,s.jsx)(t.td,{children:"All values in left column are less than or equal to all values in right column."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"post-actions",children:"Post Actions"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Action"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Continue execution"}),(0,s.jsx)(t.td,{children:"Continue pipeline execution regardless of data quality success or failure."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Terminate execution"}),(0,s.jsxs)(t.td,{children:["Stop pipeline execution after the DataQualityCheck gem runs based on a maximum number of failed checks. Review ",(0,s.jsx)(t.a,{href:"/engineers/gems#gem-phase",children:"gem phases"})," to understand the order in which gems run."]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"example-code",children:"Example code"}),"\n",(0,s.jsxs)(t.p,{children:["Each check is compiled into highly decipherable code. When you switch to the code view and open the DataQualityCheck file, you can see that every check includes a ",(0,s.jsx)(t.strong,{children:"hint"})," that populates the ",(0,s.jsx)(t.strong,{children:"out1"})," ",(0,s.jsx)(t.em,{children:"constraint_message"})," column if you do not define a custom failure message. Below is an example of the generated code with a few checks configured."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["To see the compiled code of your project, ",(0,s.jsx)(t.a,{href:"/engineers/pipelines#project-editor",children:"switch to the Code view"})," in the project header."]})}),"\n","\n",(0,s.jsx)(i.A,{children:(0,s.jsx)(c.A,{value:"py",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-py",children:'def data_quality_check(spark: SparkSession, in0: DataFrame) -> (DataFrame, DataFrame):\n    import re\n    from pydeequ.checks import Check, CheckLevel, ConstrainableDataTypes\n    from pydeequ.verification import VerificationSuite, VerificationResult\n\n    return (in0,\n            VerificationResult\\\n              .checkResultsAsDataFrame(\n                spark,\n                VerificationSuite(spark)\\\n                  .onData(in0.withColumn("amount_gt_const", lit("10")))\\\n                  .addCheck(\n                    Check(spark, CheckLevel.Warning, "Data Quality Checks")\\\n                      .hasCompleteness("order_id", lambda x: x >= 1.0, hint = f"{1.0 * 100}% values should be non-null for order_id")\\\n                      .hasSize(lambda x: x >= 10, hint = "The number of rows should be at least 10")\\\n                      .hasDataType(\n                        "order_id",\n                        ConstrainableDataTypes.Numeric,\n                        lambda x: x == True,\n                        hint = "Column order_id is not of Numeric data type"\n                      )\\\n                      .hasMaxLength(\n                        "customer_id",\n                        lambda x: x >= 5 and x <= 20,\n                        hint = "Length of column customer_id does not lie between 5 and 20"\n                      )\\\n                      .hasSum("amount", lambda x: x == 100000.0, hint = "Total sum of column amount is not equals to 100000.0")\\\n                      .hasMean("amount", lambda x: x == 40.0, hint = "Mean value of column amount is not equals to 40.0")\\\n                  )\\\n                  .run()\n              )\\\n              .selectExpr("constraint_status", "constraint_message", "udf_extract_check_and_column(constraint) as parsed")\\\n              .selectExpr("parsed._1 as check_type", "parsed._2 as column", "constraint_status", "constraint_message"))\n'})})})})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},49235:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var a=n(74848);function s(e){return(0,a.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:e.python_package_name}),(0,a.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:e.scala_package_name}),(0,a.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,a.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,a.jsxs)("span",{className:"badge-dependency",children:[(0,a.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,a.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,a.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,a.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,a.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,a.jsxs)("span",{className:"badge-spark",children:[(0,a.jsx)("span",{className:"left",children:"Livy"}),(0,a.jsx)("span",{className:"right",children:e.livy})]})}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]})}},65537:(e,t,n)=>{n.d(t,{A:()=>k});var a=n(96540),s=n(18215),r=n(65627),l=n(56347),i=n(50372),c=n(30604),o=n(11861),d=n(78749);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}(n);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,l.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=h(e),[l,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[o,u]=m({queryString:n,groupId:s}),[x,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,d.Dv)(n);return[s,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),f=(()=>{const e=o??x;return p({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{f&&c(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),j(e)}),[u,j,r]),tabValues:r}}var j=n(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function v(e){let{className:t,block:n,selectedValue:a,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),s=i[n].value;s!==a&&(o(t),l(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{c.push(e)},onKeyDown:u,onClick:d,...r,className:(0,s.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=x(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,g.jsx)(v,{...t,...e}),(0,g.jsx)(b,{...t,...e})]})}function k(e){const t=(0,j.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(t))}},79329:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var a=n(18215);const s={tabItem:"tabItem_Ymn6"};var r=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,l),hidden:n,children:t})}}}]);