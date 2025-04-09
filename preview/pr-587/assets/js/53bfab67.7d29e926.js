"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[26699],{3897:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/variant-edit-schema-c34b2b0d6d41c85e241e355c0be408b4.png"},23165:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/variant-add-column-b2a643560e3b0a89167186a5f4876379.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var a=n(96540);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}},85955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"analysts/development/gems/visual-expression-builder/variant-data-type","title":"Variant data type","description":"About variant data types and how to update their schema","source":"@site/docs/analysts/development/gems/visual-expression-builder/variant-schema.md","sourceDirName":"analysts/development/gems/visual-expression-builder","slug":"/analysts/variant-schema","permalink":"/prophecy-docs-staging/preview/pr-587/analysts/variant-schema","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"concept","permalink":"/prophecy-docs-staging/preview/pr-587/tags/concept"},{"inline":true,"label":"variant","permalink":"/prophecy-docs-staging/preview/pr-587/tags/variant"},{"inline":true,"label":"sql","permalink":"/prophecy-docs-staging/preview/pr-587/tags/sql"}],"version":"current","frontMatter":{"title":"Variant data type","id":"variant-data-type","slug":"/analysts/variant-schema","description":"About variant data types and how to update their schema","tags":["concept","variant","sql"]},"sidebar":"mySidebar","previous":{"title":"Use visual expressions","permalink":"/prophecy-docs-staging/preview/pr-587/analysts/use-visual-expression-builder"},"next":{"title":"Connections","permalink":"/prophecy-docs-staging/preview/pr-587/analysts/connections"}}');var s=n(74848),i=n(28453);const r={title:"Variant data type",id:"variant-data-type",slug:"/analysts/variant-schema",description:"About variant data types and how to update their schema",tags:["concept","variant","sql"]},o=void 0,d={},c=[{value:"Infer and edit variant data types",id:"infer-and-edit-variant-data-types",level:2},{value:"Edit the variant data type schema",id:"edit-the-variant-data-type-schema",level:3},{value:"Variant sample setting",id:"variant-sample-setting",level:2},{value:"Use a nested column in an expression",id:"use-a-nested-column-in-an-expression",level:2},{value:"Default casting",id:"default-casting",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"A variant data type is an array of values with more than one data type, and provides flexibility to handle diverse and unstructured data from multiple sources without enforcing a rigid schema. This adaptability accommodates data that evolves or comes from different environments, enabling seamless integration and storage."}),"\n",(0,s.jsx)(t.p,{children:"You can use Prophecy to convert your variant data into flat, structured formats to make them easier to understand and use for analytics. This helps you determine the data types of each value in your Snowflake array or object."}),"\n",(0,s.jsx)(t.p,{children:"With a variant data type, you can:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Infer the variant schema"}),"\n",(0,s.jsx)(t.li,{children:"Configure the parsing limit for inferring the column structure"}),"\n",(0,s.jsx)(t.li,{children:"Use a nested column inside of the Visual Expression Builder"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"infer-and-edit-variant-data-types",children:"Infer and edit variant data types"}),"\n",(0,s.jsx)(t.p,{children:"Prophecy does not store variant data types within the table definition. Each row can vary in data types, which makes them difficult to infer and use. Fortunately, you don't have to infer the schema yourself. You can use the column selector inside of your gems to automatically infer the variant data type, explore the multi-type variant structure, and later select a nested column to use in your transformations."}),"\n",(0,s.jsx)(t.p,{children:"To automatically infer the variant data type:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Open a gem that uses a variant column input, such as the ",(0,s.jsx)(t.a,{href:"/analysts/flatten-schema",children:"FlattenSchema gem"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click the ",(0,s.jsx)(t.strong,{children:"Variant"})," dropdown, and click ",(0,s.jsx)(t.strong,{children:"Infer Schema"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Prophecy automatically detects and identifies the variant data types in your input data."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Schema and column selector",src:n(96693).A+"",width:"2620",height:"1507"})}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"Prophecy caches the inferred schema so you can use it again in the future whenever you reopen the model, gem, or another gem connected to the same input port."}),(0,s.jsx)(t.p,{children:"To see the last time your variant data type was inferred, see the box at the bottom of the column selector."}),(0,s.jsxs)(t.p,{children:["To refresh the schema, click ",(0,s.jsx)(t.strong,{children:"Infer Schema"})," again."]})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"edit-the-variant-data-type-schema",children:"Edit the variant data type schema"}),"\n",(0,s.jsx)(t.p,{children:"If Prophecy missed certain schema cases while sampling the records, you can make edits yourself."}),"\n",(0,s.jsx)(t.p,{children:"To edit the variant data type schema:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click the ",(0,s.jsx)(t.strong,{children:"Variant"})," dropdown, and click ",(0,s.jsx)(t.strong,{children:"Edit Schema"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Use the data type dropdowns to manually choose the data type of each nested schema."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Edit schema view",src:n(3897).A+"",width:"2620",height:"1507"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"variant-sample-setting",children:"Variant sample setting"}),"\n",(0,s.jsx)(t.p,{children:"When Prophecy infers the variant data type, it samples the records to identify all potential iterations of keys and values within the schema. The default number of records that Prophecy parses to understand the nested data schema is 100."}),"\n",(0,s.jsx)(t.p,{children:"To update this limit:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click on ",(0,s.jsx)(t.code,{children:"..."})," at the top of the page."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click ",(0,s.jsx)(t.strong,{children:"Development Settings"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Put in the number of records you want Prophecy to parse to understand the nested data schema."}),"\n",(0,s.jsx)(t.p,{children:"We recommend that you increase the limit for small structures, or decrease it for larger ones."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Variant sampling setting",src:n(98197).A+"",width:"2812",height:"899"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"This setting does not rely on the ratio of the data since that would require a complete count of the data records."})}),"\n",(0,s.jsx)(t.h2,{id:"use-a-nested-column-in-an-expression",children:"Use a nested column in an expression"}),"\n",(0,s.jsxs)(t.p,{children:["In the column selector, you can add a nested column by clicking ",(0,s.jsx)(t.strong,{children:"Add Column"})," when you hover over the input field name."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Add column",src:n(23165).A+"",width:"2620",height:"1507"})}),"\n",(0,s.jsx)(t.p,{children:"When you add a column nested within a variant data type, Prophecy automatically generates several fields according to the following rules:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Rule"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Column name"}),(0,s.jsxs)(t.td,{children:["The column name matches the input field name, and is prefixed with the parent field path. If there's a conflict, Prophecy appends numbers starting with ",(0,s.jsx)(t.code,{children:"_0"})," until it becomes unique. ",(0,s.jsx)("br",{}),"For example, if the column name ",(0,s.jsx)(t.code,{children:"customers_name"})," already exists, Prophecy might name the new field ",(0,s.jsx)(t.code,{children:"customers_name_0"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Expression"}),(0,s.jsx)(t.td,{children:"The expression represents the full path to the selected field, and uses existing flattened subpaths."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Data type"}),(0,s.jsxs)(t.td,{children:["The data type is automatically ",(0,s.jsx)(t.code,{children:"CAST"})," to the closest inferred type."]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"default-casting",children:"Default casting"}),"\n",(0,s.jsxs)(t.p,{children:["Prophecy automatically adds a ",(0,s.jsx)(t.code,{children:"CAST"})," to any column you add from a nested type. By default, the column is cast using the standard ",(0,s.jsx)(t.code,{children:"CAST(x AS y)"})," syntax."]}),"\n",(0,s.jsx)(t.p,{children:"In some cases, a path within a variant data type may hold different value types across rows. For example, a dataset can contain different data types, such as integer, object, and boolean for each row\u2019s value key."}),"\n",(0,s.jsxs)(t.p,{children:["Prophecy supports this scenario by presenting each detected data type for a given key, array, or object as a separate item in the column selector. When you add one of those columns to the expression, Prophecy uses explicit casting, which may error out if the cast is not possible. You can change this behavior by using ",(0,s.jsx)(t.code,{children:"TRY_CAST"}),", which returns ",(0,s.jsx)(t.code,{children:"null"})," if the cast is not possible."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},96693:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/variant-infer-schema-77134126e589a14820f81792a352645d.png"},98197:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/variant-sampling-setting-90f03ebaac15557b12a806a246d9ee87.png"}}]);