"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[15542],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(96540);const a={},l=s.createContext(a);function o(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(l.Provider,{value:t},e.children)}},65662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"id":"analysts/development/gems/prepare/flatten-schema","title":"Flatten schema","description":"Flatten nested columns","source":"@site/docs/analysts/development/gems/prepare/flatten-schema.md","sourceDirName":"analysts/development/gems/prepare","slug":"/analysts/flatten-schema","permalink":"/prophecy-docs-staging/preview/pr-604/analysts/flatten-schema","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-604/tags/gems"},{"inline":true,"label":"analyst","permalink":"/prophecy-docs-staging/preview/pr-604/tags/analyst"},{"inline":true,"label":"prepare","permalink":"/prophecy-docs-staging/preview/pr-604/tags/prepare"}],"version":"current","frontMatter":{"title":"Flatten schema","id":"flatten-schema","slug":"/analysts/flatten-schema","description":"Flatten nested columns","tags":["gems","analyst","prepare"]},"sidebar":"mySidebar","previous":{"title":"Filter","permalink":"/prophecy-docs-staging/preview/pr-604/analysts/filter"},"next":{"title":"Limit","permalink":"/prophecy-docs-staging/preview/pr-604/analysts/limit"}}');var a=n(74848),l=n(28453);const o={title:"Flatten schema",id:"flatten-schema",slug:"/analysts/flatten-schema",description:"Flatten nested columns",tags:["gems","analyst","prepare"]},i=void 0,c={},r=[{value:"The Input",id:"the-input",level:2},{value:"The Expressions",id:"the-expressions",level:2},{value:"The Output",id:"the-output",level:2},{value:"Advanced settings",id:"advanced-settings",level:2}];function d(e){const t={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{class:"badge",children:"SQL"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(t.p,{children:["When processing raw data it can be useful to flatten complex data types like ",(0,a.jsx)(t.code,{children:"Struct"}),"s and ",(0,a.jsx)(t.code,{children:"Array"}),"s into simpler, flatter schemas. This allows you to preserve all schemas, and not just the first one. You can use FlattenSchema with Snowflake models."]}),"\n",(0,a.jsx)(t.h2,{id:"the-input",children:"The Input"}),"\n",(0,a.jsx)(t.p,{children:"FlattenSchema works on Snowflake sources that have nested columns that you'd like to extract into a flat schema."}),"\n",(0,a.jsxs)(t.p,{children:["We want to extract the ",(0,a.jsx)(t.code,{children:"contact"}),", and all of the columns from the ",(0,a.jsx)(t.code,{children:"struct"}),"s in ",(0,a.jsx)(t.code,{children:"content"})," into a flattened schema."]}),"\n",(0,a.jsx)(t.h2,{id:"the-expressions",children:"The Expressions"}),"\n",(0,a.jsxs)(t.p,{children:["Having added a ",(0,a.jsx)(t.code,{children:"FlattenSchema"})," gem to your model, all you need to do is click the column names you wish to extract and they'll be added to the ",(0,a.jsx)(t.code,{children:"Expressions"})," section."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"You can click to add all columns, which would make all nested leaf level values of an object visible as columns."})}),"\n",(0,a.jsxs)(t.p,{children:["Once added you can change the ",(0,a.jsx)(t.code,{children:"Output Column"})," for a given row to change the name of the Column in the output."]}),"\n",(0,a.jsx)(t.h2,{id:"the-output",children:"The Output"}),"\n",(0,a.jsxs)(t.p,{children:["If we check the ",(0,a.jsx)(t.code,{children:"Output"})," tab in the gem, you'll see the schema that we've created using the selected columns."]}),"\n",(0,a.jsx)(t.p,{children:"And here's what the output data looks like:"}),"\n",(0,a.jsx)(t.p,{children:"The nested contact information has been flatten so that you have individual rows for each content type."}),"\n",(0,a.jsx)(t.h2,{id:"advanced-settings",children:"Advanced settings"}),"\n",(0,a.jsxs)(t.p,{children:["If you're familiar with Snowflake's ",(0,a.jsx)(t.code,{children:"FLATTEN"})," table function, you can use the advanced settings to customize the optional column arguments."]}),"\n",(0,a.jsx)(t.p,{children:"To use the advanced settings, hover over a column, and click the dropdown arrow."}),"\n",(0,a.jsx)(t.p,{children:"You can customize the following options:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Path to the element: The path to the element within the variant data structure that you want to flatten."}),"\n",(0,a.jsxs)(t.li,{children:["Flatten all elements recursively: If set to ",(0,a.jsx)(t.code,{children:"false"}),", only the element mentioned in the path is expanded. If set to ",(0,a.jsx)(t.code,{children:"true"}),", all sub-elements are expanded recursively. This is set to false by default."]}),"\n",(0,a.jsxs)(t.li,{children:["Preserve rows with missing fields: If set to ",(0,a.jsx)(t.code,{children:"false"}),", rows with missing fields are omitted from the output. If set to ",(0,a.jsx)(t.code,{children:"true"}),", rows with missing fields are generated with ",(0,a.jsx)(t.code,{children:"null"})," in the key, index, and value columns. This is set to false by default."]}),"\n",(0,a.jsxs)(t.li,{children:["Datatype that needs to be flattened: The data type that you want to flatten. You can choose ",(0,a.jsx)(t.code,{children:"Object"}),", ",(0,a.jsx)(t.code,{children:"Array"}),", or ",(0,a.jsx)(t.code,{children:"Both"}),". This is set to ",(0,a.jsx)(t.code,{children:"Both"})," by default."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);