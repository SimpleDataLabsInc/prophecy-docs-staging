"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[15542],{28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var a=n(96540);const s={},r=a.createContext(s);function l(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(r.Provider,{value:t},e.children)}},36394:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/flatten_output_interim-a969d031e70d7be46ec6468d1308e893.png"},36887:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/flatten_add_exp-225f2343d0b4c214818dfe5c71166836.png"},65537:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(96540),s=n(18215),r=n(65627),l=n(56347),i=n(50372),o=n(30604),c=n(11861),d=n(78749);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,l.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=h(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,u]=m({queryString:n,groupId:s}),[x,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,d.Dv)(n);return[s,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),j=(()=>{const e=c??x;return p({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{j&&o(j)}),[j]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var f=n(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function v(e){let{className:t,block:n,selectedValue:a,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),s=i[n].value;s!==a&&(c(t),l(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{o.push(e)},onKeyDown:u,onClick:d,...r,className:(0,s.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=x(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,g.jsx)(v,{...t,...e}),(0,g.jsx)(b,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(t))}},65662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"analysts/development/gems/prepare/flatten-schema","title":"FlattenSchema","description":"Flatten nested columns","source":"@site/docs/analysts/development/gems/prepare/flatten-schema.md","sourceDirName":"analysts/development/gems/prepare","slug":"/analysts/flatten-schema","permalink":"/prophecy-docs-staging/preview/pr-615/analysts/flatten-schema","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-615/tags/gems"},{"inline":true,"label":"analyst","permalink":"/prophecy-docs-staging/preview/pr-615/tags/analyst"},{"inline":true,"label":"prepare","permalink":"/prophecy-docs-staging/preview/pr-615/tags/prepare"}],"version":"current","frontMatter":{"title":"FlattenSchema","id":"flatten-schema","slug":"/analysts/flatten-schema","description":"Flatten nested columns","tags":["gems","analyst","prepare"]},"sidebar":"mySidebar","previous":{"title":"Filter","permalink":"/prophecy-docs-staging/preview/pr-615/analysts/filter"},"next":{"title":"Limit","permalink":"/prophecy-docs-staging/preview/pr-615/analysts/limit"}}');var s=n(74848),r=n(28453);n(65537),n(79329);const l={title:"FlattenSchema",id:"flatten-schema",slug:"/analysts/flatten-schema",description:"Flatten nested columns",tags:["gems","analyst","prepare"]},i=void 0,o={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Expressions",id:"expressions",level:3},{value:"Output",id:"output",level:3},{value:"Snowflake advanced settings",id:"snowflake-advanced-settings",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{class:"badge",children:"SQL"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(t.p,{children:["When you import tables with variant data into Prophecy, they become columns with nested columns, and a ",(0,s.jsx)(t.a,{href:"/analysts/variant-schema",children:"variant data type"}),", which is an array of values with more than one data type."]}),"\n",(0,s.jsx)(t.p,{children:"You can use the FlattenSchema gem to transform your variant schema into a more consistent and digestible format. This allows your team to make subsequent steps in the pipeline more efficient and streamlined. This also makes your variant data easier to analyze, report, and integrate traditional systems without doing this manually yourself."}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Required"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Flatten"}),(0,s.jsxs)(t.td,{children:["Array ",(0,s.jsx)(t.strong,{children:"column to flatten"})," for each ",(0,s.jsx)(t.strong,{children:"Output Column"}),"."]}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Expressions"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.strong,{children:"Expression"})," to compute each field in the ",(0,s.jsx)(t.strong,{children:"Output Column"}),"."]}),(0,s.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"Assume you have the following JSON file that includes variant data type that you would like to flatten."}),"\n","\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'[{\n  "first_name":"Remmington", "last_name":"Smith", "age":"68",\n  "business":[{\n    "address":[{\n      "manager":"Liara Andrew", "name":"RS Enterprises",\n      "contact":[{"content":"rsmith@example.com","type":"email"},{"content":"1234-345-56","type":"phone"}],\n      "is_still_active":false}]}]}, {\n  "first_name":"Penny", "last_name":"John", "age":"57",\n  "business":[{\n    "address":[{\n      "manager":"Bobby Frank","name":"PJ Enterprises",\n      "contact":[{"content":"pjohn@example.com","type":"email"},{"content":"8203-512-49","type":"phone"}],\n      "is_still_active":true}]}]}]\n'})}),"\n",(0,s.jsx)(t.h3,{id:"expressions",children:"Expressions"}),"\n",(0,s.jsx)(t.p,{children:"The FlattenSchema gem allows you to extract variant data into a flattened schema."}),"\n",(0,s.jsx)(t.p,{children:"For example, to flatten your variant data:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Input"})," tab, hover over the ",(0,s.jsx)(t.code,{children:"in0"})," field and click the ",(0,s.jsx)(t.strong,{children:"Add 12 Columns"})," button."]}),"\n",(0,s.jsxs)(t.p,{children:["Now, all the nested lowest-level values of your object are visible as columns in the ",(0,s.jsx)(t.code,{children:"Expressions"})," section."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Adding expressions",src:n(36887).A+"",width:"2878",height:"1620"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["(Optional) To change the name of the column in the output, change the value in the ",(0,s.jsx)(t.code,{children:"Output Column"})," for the row."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click ",(0,s.jsx)(t.strong,{children:"Run"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"output",children:"Output"}),"\n",(0,s.jsxs)(t.p,{children:["After you run the FlattenSchema gem, click the ",(0,s.jsx)(t.strong,{children:"Data"})," button to see your schema based on the selected columns:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Output interim",src:n(36394).A+"",width:"2878",height:"1620"})}),"\n",(0,s.jsx)(t.p,{children:"The FlattenSchema gem flattened all your variant data, which gives you individual rows for each one."}),"\n",(0,s.jsx)(t.h2,{id:"snowflake-advanced-settings",children:"Snowflake advanced settings"}),"\n",(0,s.jsx)(t.p,{children:"You can use advanced settings with your Snowflake source to customize the optional column arguments."}),"\n",(0,s.jsx)(t.p,{children:"To use the advanced settings:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Hover over the column you want to flatten."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Click the dropdown arrow."}),"\n",(0,s.jsx)(t.p,{children:"You can customize the following options:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Option"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Path to the element"}),(0,s.jsx)(t.td,{children:"Path to the element within the variant data structure that you want to flatten."}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Flatten all elements recursively"}),(0,s.jsx)(t.td,{children:"Whether to expand all sub-elements recursively."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Preserve rows with missing field"}),(0,s.jsxs)(t.td,{children:["Whether to include rows with missing fields as ",(0,s.jsx)(t.code,{children:"null"})," in the key, index, and value columns."]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Datatype that needs to be flattened"}),(0,s.jsxs)(t.td,{children:["Data type that you want to flatten. Possible values are: ",(0,s.jsx)(t.code,{children:"Object"}),", ",(0,s.jsx)(t.code,{children:"Array"}),", or ",(0,s.jsx)(t.code,{children:"Both"}),"."]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Both"})})]})]})]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},79329:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var a=n(18215);const s={tabItem:"tabItem_Ymn6"};var r=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,l),hidden:n,children:t})}}}]);