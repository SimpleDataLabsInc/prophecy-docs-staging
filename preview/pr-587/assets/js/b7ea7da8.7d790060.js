"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[15542],{28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var s=n(96540);const a={},r=s.createContext(a);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(r.Provider,{value:t},e.children)}},36394:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/flatten_output_interim-a969d031e70d7be46ec6468d1308e893.png"},36887:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/flatten_add_exp-225f2343d0b4c214818dfe5c71166836.png"},65537:(e,t,n)=>{n.d(t,{A:()=>w});var s=n(96540),a=n(18215),r=n(65627),l=n(56347),i=n(50372),o=n(30604),c=n(11861),d=n(78749);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:a}}=e;return{value:t,label:n,attributes:s,default:a}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=h(e),[l,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[c,u]=m({queryString:n,groupId:a}),[x,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,d.Dv)(n);return[a,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),j=(()=>{const e=c??x;return p({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{j&&o(j)}),[j]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var f=n(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function b(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),a=i[n].value;a!==s&&(c(t),l(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>{o.push(e)},onKeyDown:u,onClick:d,...r,className:(0,a.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=x(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,g.jsx)(b,{...t,...e}),(0,g.jsx)(v,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(t))}},65662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"analysts/development/gems/prepare/flatten-schema","title":"FlattenSchema","description":"Flatten nested columns","source":"@site/docs/analysts/development/gems/prepare/flatten-schema.md","sourceDirName":"analysts/development/gems/prepare","slug":"/analysts/flatten-schema","permalink":"/prophecy-docs-staging/preview/pr-587/analysts/flatten-schema","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-587/tags/gems"},{"inline":true,"label":"analyst","permalink":"/prophecy-docs-staging/preview/pr-587/tags/analyst"},{"inline":true,"label":"prepare","permalink":"/prophecy-docs-staging/preview/pr-587/tags/prepare"}],"version":"current","frontMatter":{"title":"FlattenSchema","id":"flatten-schema","slug":"/analysts/flatten-schema","description":"Flatten nested columns","tags":["gems","analyst","prepare"]},"sidebar":"mySidebar","previous":{"title":"Filter","permalink":"/prophecy-docs-staging/preview/pr-587/analysts/filter"},"next":{"title":"Limit","permalink":"/prophecy-docs-staging/preview/pr-587/analysts/limit"}}');var a=n(74848),r=n(28453);n(65537),n(79329);const l={title:"FlattenSchema",id:"flatten-schema",slug:"/analysts/flatten-schema",description:"Flatten nested columns",tags:["gems","analyst","prepare"]},i=void 0,o={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Expressions",id:"expressions",level:3},{value:"Output",id:"output",level:3},{value:"Snowflake advanced settings",id:"snowflake-advanced-settings",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{class:"badge",children:"SQL"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(t.p,{children:["When you load the data with nested columns into Prophecy, they become a ",(0,a.jsx)(t.a,{href:"/analysts/variant-schema",children:"variant data type"}),". This means that your data is an array of values with more than one data type. You can use the FlattenSchema gem to automatically detect the nested data types without doing this manually yourself."]}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Required"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Model"}),(0,a.jsx)(t.td,{children:"Input Source on which the filter condition will be applied."}),(0,a.jsx)(t.td,{children:"True"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Flatten"}),(0,a.jsxs)(t.td,{children:["Array ",(0,a.jsx)(t.strong,{children:"column to flatten"})," for each ",(0,a.jsx)(t.strong,{children:"Output Column"}),"."]}),(0,a.jsx)(t.td,{children:"True"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Expressions"}),(0,a.jsxs)(t.td,{children:[(0,a.jsx)(t.strong,{children:"Expression"})," to compute each field in the ",(0,a.jsx)(t.strong,{children:"Output Column"}),"."]}),(0,a.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.p,{children:"Assume you have the following JSON file that includes nested columns that you would like to flatten."}),"\n","\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'[{\n  "first_name":"Remmington", "last_name":"Smith", "age":"68",\n  "business":[{\n    "address":[{\n      "manager":"Liara Andrew", "name":"RS Enterprises",\n      "contact":[{"content":"rsmith@example.com","type":"email"},{"content":"1234-345-56","type":"phone"}],\n      "is_still_active":false}]}]}, {\n  "first_name":"Penny", "last_name":"John", "age":"57",\n  "business":[{\n    "address":[{\n      "manager":"Bobby Frank","name":"PJ Enterprises",\n      "contact":[{"content":"pjohn@example.com","type":"email"},{"content":"8203-512-49","type":"phone"}],\n      "is_still_active":true}]}]}]\n'})}),"\n",(0,a.jsx)(t.h3,{id:"expressions",children:"Expressions"}),"\n",(0,a.jsx)(t.p,{children:"The FlattenSchema gem allows you to extract nested fields into a flattened schema."}),"\n",(0,a.jsx)(t.p,{children:"For example, to extract all the nested fields:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["In the ",(0,a.jsx)(t.strong,{children:"Input"})," tab, hover over the ",(0,a.jsx)(t.code,{children:"in0"})," field and click the ",(0,a.jsx)(t.strong,{children:"Add 12 Columns ->"})," button."]}),"\n",(0,a.jsxs)(t.p,{children:["Now, all the nested fields are in the ",(0,a.jsx)(t.code,{children:"Expressions"})," section."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"You can click to add all columns, which would make all nested lowest-level values of an object visible as columns."})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Adding expressions",src:n(36887).A+"",width:"2878",height:"1620"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["(Optional) To change the name of the column in the output, change the value in the ",(0,a.jsx)(t.code,{children:"Output Column"})," for the ",(0,a.jsx)(t.code,{children:"contact"})," row."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Click ",(0,a.jsx)(t.strong,{children:"Run"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"output",children:"Output"}),"\n",(0,a.jsxs)(t.p,{children:["After you run the FlattenSchema gem, click the ",(0,a.jsx)(t.strong,{children:"Data"})," button to see your schema based on the selected columns:"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Output interim",src:n(36394).A+"",width:"2878",height:"1620"})}),"\n",(0,a.jsx)(t.p,{children:"The FlattenSchema gem flattened all the nested fields, which gives you individual rows for each one."}),"\n",(0,a.jsx)(t.h2,{id:"snowflake-advanced-settings",children:"Snowflake advanced settings"}),"\n",(0,a.jsx)(t.p,{children:"You can use advanced settings with your Snowflake source to customize the optional column arguments."}),"\n",(0,a.jsx)(t.p,{children:"To use the advanced settings:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Hover over the column you want to flatten."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Click the dropdown arrow."}),"\n",(0,a.jsx)(t.p,{children:"You can customize the following options:"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Option"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Path to the element"}),(0,a.jsx)(t.td,{children:"Path to the element within the variant data structure that you want to flatten."}),(0,a.jsx)(t.td,{children:"None"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Flatten all elements recursively"}),(0,a.jsx)(t.td,{children:"Whether to expand all sub-elements recursively."}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"false"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Preserve rows with missing field"}),(0,a.jsxs)(t.td,{children:["Whether to include rows with missing fields as ",(0,a.jsx)(t.code,{children:"null"})," in the key, index, and value columns."]}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"false"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Datatype that needs to be flattened"}),(0,a.jsxs)(t.td,{children:["Data type that you want to flatten. Possible values are: ",(0,a.jsx)(t.code,{children:"Object"}),", ",(0,a.jsx)(t.code,{children:"Array"}),", or ",(0,a.jsx)(t.code,{children:"Both"}),"."]}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"Both"})})]})]})]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},79329:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var s=n(18215);const a={tabItem:"tabItem_Ymn6"};var r=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,l),hidden:n,children:t})}}}]);