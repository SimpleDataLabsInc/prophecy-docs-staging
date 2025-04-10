"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[63004],{28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var s=r(96540);const a={},n=s.createContext(a);function i(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(n.Provider,{value:t},e.children)}},65537:(e,t,r)=>{r.d(t,{A:()=>w});var s=r(96540),a=r(18215),n=r(65627),i=r(56347),l=r(50372),o=r(30604),d=r(11861),c=r(78749);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:a}}=e;return{value:t,label:r,attributes:s,default:a}}))}(r);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.W6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(n),(0,s.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(a.location.search);t.set(n,e),a.replace({...a.location,search:t.toString()})}),[n,a])]}function j(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,n=u(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:n}))),[d,h]=x({queryString:r,groupId:a}),[j,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,n]=(0,c.Dv)(r);return[a,(0,s.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:a}),b=(()=>{const e=d??j;return p({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),m(e)}),[h,m,n]),tabValues:n}}var m=r(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function f(e){let{className:t,block:r,selectedValue:s,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,n.a_)(),c=e=>{const t=e.currentTarget,r=o.indexOf(t),a=l[r].value;a!==s&&(d(t),i(a))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>{o.push(e)},onKeyDown:h,onClick:c,...n,className:(0,a.A)("tabs__item",b.tabItem,n?.className,{"tabs__item--active":s===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:n}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=j(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,g.jsx)(f,{...t,...e}),(0,g.jsx)(v,{...t,...e})]})}function w(e){const t=(0,m.A)();return(0,g.jsx)(y,{...e,children:h(e.children)},String(t))}},79329:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var s=r(18215);const a={tabItem:"tabItem_Ymn6"};var n=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,i),hidden:r,children:t})}},89366:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"Spark/gems/source-target/catalog-table/hive","title":"Hive Table","description":"Read from or write to tables managed by a Hive metastore","source":"@site/docs/Spark/gems/source-target/catalog-table/hive.md","sourceDirName":"Spark/gems/source-target/catalog-table","slug":"/engineers/hive-table","permalink":"/prophecy-docs-staging/preview/pr-604/engineers/hive-table","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-604/tags/gems"},{"inline":true,"label":"catalog","permalink":"/prophecy-docs-staging/preview/pr-604/tags/catalog"},{"inline":true,"label":"hive","permalink":"/prophecy-docs-staging/preview/pr-604/tags/hive"}],"version":"current","frontMatter":{"title":"Hive Table","id":"hive","slug":"/engineers/hive-table","description":"Read from or write to tables managed by a Hive metastore","tags":["gems","catalog","hive"]},"sidebar":"mySidebar","previous":{"title":"Delta Table","permalink":"/prophecy-docs-staging/preview/pr-604/engineers/delta-table"},"next":{"title":"Iceberg","permalink":"/prophecy-docs-staging/preview/pr-604/engineers/iceberg"}}');var a=r(74848),n=r(28453),i=r(65537),l=r(79329);const o={title:"Hive Table",id:"hive",slug:"/engineers/hive-table",description:"Read from or write to tables managed by a Hive metastore",tags:["gems","catalog","hive"]},d=void 0,c={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Source",id:"source",level:2},{value:"Source properties",id:"source-properties",level:3},{value:"Source example",id:"source-example",level:3},{value:"Compiled code",id:"source-code",level:3},{value:"Without filter predicate",id:"without-filter-predicate",level:4},{value:"With filter predicate",id:"with-filter-predicate",level:4},{value:"Target",id:"target",level:2},{value:"Target properties",id:"target-properties",level:3},{value:"Supported write modes",id:"supported-write-modes",level:3},{value:"Target example",id:"target-example",level:3},{value:"Compiled code",id:"target-code",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Reads from and writes to Hive tables that your execution environment's Metadata catalog manages."}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(t.p,{children:"Before you specify parameters and properties, select the Hive table type:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Open the Source or Target gem configuration."}),"\n",(0,a.jsxs)(t.li,{children:["On the ",(0,a.jsx)(t.strong,{children:"Type & Format"})," page, select ",(0,a.jsx)(t.strong,{children:"Catalog Table"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["On the ",(0,a.jsx)(t.strong,{children:"Properties"})," page, set the ",(0,a.jsx)(t.strong,{children:"provider"})," property to ",(0,a.jsx)(t.code,{children:"hive"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter"}),(0,a.jsx)(t.th,{children:"Tab"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Use Unity Catalog"}),(0,a.jsx)(t.td,{children:"Location"}),(0,a.jsx)(t.td,{children:"Whether to use a Unity catalog."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Catalog"}),(0,a.jsx)(t.td,{children:"Location"}),(0,a.jsx)(t.td,{children:"If you use a unity catalog, specify which catalog to use."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Database"}),(0,a.jsx)(t.td,{children:"Location"}),(0,a.jsx)(t.td,{children:"Name of the database to connect to"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Table"}),(0,a.jsx)(t.td,{children:"Location"}),(0,a.jsx)(t.td,{children:"Name of the table to connect to."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Use file path"}),(0,a.jsx)(t.td,{children:"Location"}),(0,a.jsx)(t.td,{children:"Whether to use a custom file path to store underlying files in the Target gem."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Schema"}),(0,a.jsx)(t.td,{children:"Properties"}),(0,a.jsxs)(t.td,{children:["Schema to apply on the loaded data.",(0,a.jsx)("br",{}),"In the Source gem, you can define or edit the schema visually or in JSON code.",(0,a.jsx)("br",{}),"In the Target gem, you can view the schema visually or as JSON code."]})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"source",children:"Source"}),"\n",(0,a.jsx)(t.p,{children:"The Source gem reads data from Hive tables and allows you to optionally specify the following additional properties."}),"\n",(0,a.jsx)(t.h3,{id:"source-properties",children:"Source properties"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Properties"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Description"}),(0,a.jsx)(t.td,{children:"Description of your dataset."}),(0,a.jsx)(t.td,{children:"None"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Provider"}),(0,a.jsxs)(t.td,{children:["Provider to use. ",(0,a.jsxs)(t.strong,{children:["You must set this to ",(0,a.jsx)(t.code,{children:"hive"})]}),"."]}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"delta"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Filter Predicate"}),(0,a.jsx)(t.td,{children:"Where clause to filter the table by."}),(0,a.jsx)(t.td,{children:"(all records)"})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"source-example",children:"Source example"}),"\n",(0,a.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,a.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,a.jsx)("iframe",{src:"https://user-images.githubusercontent.com/103921419/173572911-4240f0bd-0277-4c64-89bb-8f9e18078447.mp4",title:"Catalog hive source",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,a.jsx)(t.h3,{id:"source-code",children:"Compiled code"}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["To see the compiled code of your project, ",(0,a.jsx)(t.a,{href:"/engineers/pipelines#project-editor",children:"switch to the Code view"})," in the project header."]})}),"\n",(0,a.jsx)(t.h4,{id:"without-filter-predicate",children:"Without filter predicate"}),"\n","\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"py",label:"Python",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-py",children:'def Source(spark: SparkSession) -> DataFrame:\n    return spark.read.table(f"test_db.test_table")\n'})})}),(0,a.jsx)(l.A,{value:"scala",label:"Scala",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-scala",children:'object Source {\n\n  def apply(spark: SparkSession): DataFrame = {\n    spark.read.table("test_db.test_table")\n  }\n\n}\n'})})})]}),"\n",(0,a.jsx)(t.h4,{id:"with-filter-predicate",children:"With filter predicate"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"py",label:"Python",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-py",children:'def Source(spark: SparkSession) -> DataFrame:\n    return spark.sql("SELECT * FROM test_db.test_table WHERE col > 10")\n'})})}),(0,a.jsx)(l.A,{value:"scala",label:"Scala",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-scala",children:'object Source {\n\n  def apply(spark: SparkSession): DataFrame =\n    spark.sql("SELECT * FROM test_db.test_table WHERE col > 10")\n\n}\n'})})})]}),"\n",(0,a.jsx)(t.h2,{id:"target",children:"Target"}),"\n",(0,a.jsx)(t.p,{children:"The Target gem writes data to Delta tables and allows you to optionally specify the following additional properties."}),"\n",(0,a.jsx)(t.h3,{id:"target-properties",children:"Target properties"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Property"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Description"}),(0,a.jsx)(t.td,{children:"Description of your dataset."}),(0,a.jsx)(t.td,{children:"None"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Provider"}),(0,a.jsxs)(t.td,{children:["Provider to use. ",(0,a.jsxs)(t.strong,{children:["You must set this to ",(0,a.jsx)(t.code,{children:"hive"})]}),"."]}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"delta"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Write Mode"}),(0,a.jsxs)(t.td,{children:["How to handle existing data. For a list of the possible values, see ",(0,a.jsx)(t.a,{href:"#supported-write-modes",children:"Supported write modes"}),"."]}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"error"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"File Format"}),(0,a.jsxs)(t.td,{children:["File format to use when saving data. ",(0,a.jsx)("br",{}),"Supported file formats are: ",(0,a.jsx)(t.code,{children:"sequencefile"}),", ",(0,a.jsx)(t.code,{children:"rcfile"}),", ",(0,a.jsx)(t.code,{children:"orc"}),", ",(0,a.jsx)(t.code,{children:"parquet"}),", ",(0,a.jsx)(t.code,{children:"textfile"}),", and ",(0,a.jsx)(t.code,{children:"avro"}),"."]}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"parquet"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Partition Columns"}),(0,a.jsx)(t.td,{children:"List of columns to partition the Hive table table by."}),(0,a.jsx)(t.td,{children:"None"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Use insert into"}),(0,a.jsxs)(t.td,{children:["Whether to use the ",(0,a.jsx)(t.code,{children:"insertInto()"})," method to write instead of the ",(0,a.jsx)(t.code,{children:"save()"})," method."]}),(0,a.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"supported-write-modes",children:"Supported write modes"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Write mode"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"overwrite"}),(0,a.jsxs)(t.td,{children:["If the data already exists, overwrite the data with the contents of the ",(0,a.jsx)(t.code,{children:"DataFrame"}),"."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"error"}),(0,a.jsx)(t.td,{children:"If the data already exists, throw an exception."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"append"}),(0,a.jsxs)(t.td,{children:["If the data already exists, append the contents of the ",(0,a.jsx)(t.code,{children:"DataFrame"}),"."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"ignore"}),(0,a.jsxs)(t.td,{children:["If the data already exists, do nothing with the contents of the ",(0,a.jsx)(t.code,{children:"DataFrame"}),". ",(0,a.jsx)("br",{}),"This is similar to the ",(0,a.jsx)(t.code,{children:"CREATE TABLE IF NOT EXISTS"})," clause in SQL."]})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"target-example",children:"Target example"}),"\n",(0,a.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,a.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,a.jsx)("iframe",{src:"https://user-images.githubusercontent.com/103921419/173573043-0bdb0bb2-a42a-477b-8391-0325b444372f.mp4",title:"Catalog hive target",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,a.jsx)(t.h3,{id:"target-code",children:"Compiled code"}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["To see the compiled code of your project, ",(0,a.jsx)(t.a,{href:"/engineers/pipelines#project-editor",children:"switch to the Code view"})," in the project header."]})}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"py",label:"Python",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-py",children:'def Target(spark: SparkSession, in0: DataFrame):\n    in0.write\\\n        .format("hive")\\\n        .option("fileFormat", "parquet")\\\n        .mode("overwrite")\\\n        .saveAsTable("test_db.test_table")\n'})})}),(0,a.jsx)(l.A,{value:"scala",label:"Scala",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-scala",children:'object Target {\n\n  def apply(spark: SparkSession, in: DataFrame): DataFrame = {\n    in.write\n        .format("hive")\n        .option("fileFormat", "parquet")\n        .mode("overwrite")\n        .saveAsTable("test_db.test_table")\n  }\n\n}\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}}}]);