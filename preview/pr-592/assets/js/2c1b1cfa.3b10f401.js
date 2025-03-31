"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[63004],{28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>i});var a=r(96540);const l={},s=a.createContext(l);function n(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:n(e.components),a.createElement(s.Provider,{value:t},e.children)}},65537:(e,t,r)=>{r.d(t,{A:()=>w});var a=r(96540),l=r(18215),s=r(65627),n=r(56347),i=r(50372),d=r(30604),o=r(11861),c=r(78749);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:l}}=e;return{value:t,label:r,attributes:a,default:l}}))}(r);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const l=(0,n.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,d.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(l.location.search);t.set(s,e),l.replace({...l.location,search:t.toString()})}),[s,l])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:l}=e,s=u(e),[n,d]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[o,h]=x({queryString:r,groupId:l}),[m,j]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,s]=(0,c.Dv)(r);return[l,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:l}),f=(()=>{const e=o??m;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{f&&d(f)}),[f]);return{selectedValue:n,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),j(e)}),[h,j,s]),tabValues:s}}var j=r(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function g(e){let{className:t,block:r,selectedValue:a,selectValue:n,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),c=e=>{const t=e.currentTarget,r=d.indexOf(t),l=i[r].value;l!==a&&(o(t),n(l))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{d.push(e)},onKeyDown:h,onClick:c,...s,className:(0,l.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:s}=e;const n=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,l.A)("tabs-container",f.tabList),children:[(0,b.jsx)(g,{...t,...e}),(0,b.jsx)(v,{...t,...e})]})}function w(e){const t=(0,j.A)();return(0,b.jsx)(y,{...e,children:h(e.children)},String(t))}},79329:(e,t,r)=>{r.d(t,{A:()=>n});r(96540);var a=r(18215);const l={tabItem:"tabItem_Ymn6"};var s=r(74848);function n(e){let{children:t,hidden:r,className:n}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,n),hidden:r,children:t})}},89366:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"Spark/gems/source-target/catalog-table/hive","title":"Hive Table","description":"Read from or write to Tables managed by a Hive metastore","source":"@site/docs/Spark/gems/source-target/catalog-table/hive.md","sourceDirName":"Spark/gems/source-target/catalog-table","slug":"/Spark/gems/source-target/catalog-table/hive","permalink":"/Spark/gems/source-target/catalog-table/hive","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/tags/gems"},{"inline":true,"label":"catalog","permalink":"/tags/catalog"},{"inline":true,"label":"hive","permalink":"/tags/hive"}],"version":"current","frontMatter":{"title":"Hive Table","id":"hive","description":"Read from or write to Tables managed by a Hive metastore","tags":["gems","catalog","hive"]},"sidebar":"mySidebar","previous":{"title":"Delta Table","permalink":"/Spark/gems/source-target/catalog-table/delta"},"next":{"title":"Iceberg","permalink":"/Spark/gems/source-target/catalog-table/iceberg"}}');var l=r(74848),s=r(28453),n=r(65537),i=r(79329);const d={title:"Hive Table",id:"hive",description:"Read from or write to Tables managed by a Hive metastore",tags:["gems","catalog","hive"]},o=void 0,c={},h=[{value:"Source",id:"source",level:2},{value:"Source Parameters",id:"source-parameters",level:3},{value:"Source Example",id:"source-example",level:3},{value:"Generated Code",id:"source-code",level:3},{value:"Without filter predicate",id:"without-filter-predicate",level:4},{value:"With filter predicate",id:"with-filter-predicate",level:4},{value:"Target",id:"target",level:2},{value:"Target Parameters",id:"target-parameters",level:3},{value:"Supported Write Modes",id:"supported-write-modes",level:4},{value:"Supported File formats",id:"supported-file-formats",level:4},{value:"Target Example",id:"target-example",level:3},{value:"Generated Code",id:"target-code",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:"Reads and writes data Hive tables that are managed by the execution environment's Metadata catalog (Metastore)."}),"\n",(0,l.jsx)(t.admonition,{type:"note",children:(0,l.jsxs)(t.p,{children:["Choose the provider as ",(0,l.jsx)(t.code,{children:"Hive"})," on properties page."]})}),"\n",(0,l.jsx)(t.h2,{id:"source",children:"Source"}),"\n",(0,l.jsx)(t.h3,{id:"source-parameters",children:"Source Parameters"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Required"}),(0,l.jsx)(t.th,{children:"Default"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Database name"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Name of the database"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"True"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Table name"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Name of the table"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"True"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Provider"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["Must be set to ",(0,l.jsx)(t.code,{children:"hive"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"True"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Filter Predicate"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Where clause to filter the table"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"False"}),(0,l.jsx)(t.td,{children:"(all records)"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"source-example",children:"Source Example"}),"\n",(0,l.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,l.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,l.jsx)("iframe",{src:"https://user-images.githubusercontent.com/103921419/173572911-4240f0bd-0277-4c64-89bb-8f9e18078447.mp4",title:"Catalog hive source",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,l.jsx)(t.h3,{id:"source-code",children:"Generated Code"}),"\n",(0,l.jsx)(t.h4,{id:"without-filter-predicate",children:"Without filter predicate"}),"\n","\n",(0,l.jsxs)(n.A,{children:[(0,l.jsx)(i.A,{value:"py",label:"Python",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-py",children:'def Source(spark: SparkSession) -> DataFrame:\n    return spark.read.table(f"test_db.test_table")\n\n'})})}),(0,l.jsx)(i.A,{value:"scala",label:"Scala",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-scala",children:'object Source {\n\n  def apply(spark: SparkSession): DataFrame = {\n    spark.read.table("test_db.test_table")\n  }\n\n}\n'})})})]}),"\n",(0,l.jsx)(t.h4,{id:"with-filter-predicate",children:"With filter predicate"}),"\n",(0,l.jsxs)(n.A,{children:[(0,l.jsx)(i.A,{value:"py",label:"Python",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-py",children:'def Source(spark: SparkSession) -> DataFrame:\n    return spark.sql("SELECT * FROM test_db.test_table WHERE col > 10")\n\n'})})}),(0,l.jsx)(i.A,{value:"scala",label:"Scala",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-scala",children:'object Source {\n\n  def apply(spark: SparkSession): DataFrame =\n    spark.sql("SELECT * FROM test_db.test_table WHERE col > 10")\n\n}\n\n'})})})]}),"\n",(0,l.jsx)(t.h2,{id:"target",children:"Target"}),"\n",(0,l.jsx)(t.h3,{id:"target-parameters",children:"Target Parameters"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Parameter"}),(0,l.jsx)(t.th,{children:"Description"}),(0,l.jsx)(t.th,{children:"Required"}),(0,l.jsx)(t.th,{children:"Default"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Database name"}),(0,l.jsx)(t.td,{children:"Name of the database"}),(0,l.jsx)(t.td,{children:"True"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Table name"}),(0,l.jsx)(t.td,{children:"Name of the table"}),(0,l.jsx)(t.td,{children:"True"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Custom file path"}),(0,l.jsx)(t.td,{children:"Use custom file path to store underlying files."}),(0,l.jsx)(t.td,{children:"False"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Provider"}),(0,l.jsxs)(t.td,{children:["Must be set to ",(0,l.jsx)(t.code,{children:"hive"})]}),(0,l.jsx)(t.td,{children:"True"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Write Mode"}),(0,l.jsxs)(t.td,{children:["How to handle existing data. See the ",(0,l.jsx)(t.a,{href:"#supported-write-modes",children:"this table"})," for a list of available options."]}),(0,l.jsx)(t.td,{children:"True"}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"error"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"File Format"}),(0,l.jsxs)(t.td,{children:["File format to use when saving data. See ",(0,l.jsx)(t.a,{href:"#supported-file-formats",children:"this table"})," for supported formats."]}),(0,l.jsx)(t.td,{children:"True"}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"parquet"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Partition Columns"}),(0,l.jsx)(t.td,{children:"Columns to partition by"}),(0,l.jsx)(t.td,{children:"False"}),(0,l.jsx)(t.td,{children:"(empty)"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Use insert into"}),(0,l.jsxs)(t.td,{children:["If ",(0,l.jsx)(t.code,{children:"true"}),", use ",(0,l.jsx)(t.code,{children:".insertInto"})," instead of ",(0,l.jsx)(t.code,{children:".save"})," when generating code."]}),(0,l.jsx)(t.td,{children:"False"}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"false"})})]})]})]}),"\n",(0,l.jsx)(t.h4,{id:"supported-write-modes",children:"Supported Write Modes"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Write Mode"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"overwrite"}),(0,l.jsx)(t.td,{children:"If data already exists, overwrite with the contents of the DataFrame."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"append"}),(0,l.jsx)(t.td,{children:"If data already exists, append the contents of the DataFrame."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"ignore"}),(0,l.jsxs)(t.td,{children:["If data already exists, do nothing with the contents of the DataFrame. This is similar to a ",(0,l.jsx)(t.code,{children:"CREATE TABLE IF NOT EXISTS"})," in SQL."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"error"}),(0,l.jsx)(t.td,{children:"If data already exists, throw an exception."})]})]})]}),"\n",(0,l.jsx)(t.h4,{id:"supported-file-formats",children:"Supported File formats"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"Parquet"}),"\n",(0,l.jsx)(t.li,{children:"Text file"}),"\n",(0,l.jsx)(t.li,{children:"Avro"}),"\n",(0,l.jsx)(t.li,{children:"ORC"}),"\n",(0,l.jsx)(t.li,{children:"RC file"}),"\n",(0,l.jsx)(t.li,{children:"Sequence file"}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"target-example",children:"Target Example"}),"\n",(0,l.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,l.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,l.jsx)("iframe",{src:"https://user-images.githubusercontent.com/103921419/173573043-0bdb0bb2-a42a-477b-8391-0325b444372f.mp4",title:"Catalog hive target",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,l.jsx)(t.h3,{id:"target-code",children:"Generated Code"}),"\n",(0,l.jsxs)(n.A,{children:[(0,l.jsx)(i.A,{value:"py",label:"Python",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-py",children:'def Target(spark: SparkSession, in0: DataFrame):\n    in0.write\\\n        .format("hive")\\\n        .option("fileFormat", "parquet")\\\n        .mode("overwrite")\\\n        .saveAsTable("test_db.test_table")\n\n'})})}),(0,l.jsx)(i.A,{value:"scala",label:"Scala",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-scala",children:'object Target {\n\n  def apply(spark: SparkSession, in: DataFrame): DataFrame = {\n    in.write\n        .format("hive")\n        .option("fileFormat", "parquet")\n        .mode("overwrite")\n        .saveAsTable("test_db.test_table")\n  }\n\n}\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}}}]);