"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[19120],{28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var n=r(96540);const l={},a=n.createContext(l);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(a.Provider,{value:t},e.children)}},49976:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/pr-template-openpr-99865db7d58ea57a1212726223fdfced.png"},60857:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/merge-externally-889808cc62d24760e6253f40449f7ab1.png"},65537:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),l=r(18215),a=r(65627),s=r(56347),i=r(50372),o=r(30604),c=r(11861),u=r(78749);function p(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:l}}=e;return{value:t,label:r,attributes:n,default:l}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const l=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(l.location.search);t.set(a,e),l.replace({...l.location,search:t.toString()})}),[a,l])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:l}=e,a=d(e),[s,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,p]=m({queryString:r,groupId:l}),[g,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,a]=(0,u.Dv)(r);return[l,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:l}),x=(()=>{const e=c??g;return h({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{x&&o(x)}),[x]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),b(e)}),[p,b,a]),tabValues:a}}var b=r(9136);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,r=o.indexOf(t),l=i[r].value;l!==n&&(c(t),s(l))},p=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{o.push(e)},onKeyDown:p,onClick:u,...a,className:(0,l.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=g(e);return(0,f.jsxs)("div",{className:(0,l.A)("tabs-container",x.tabList),children:[(0,f.jsx)(v,{...t,...e}),(0,f.jsx)(j,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,f.jsx)(y,{...e,children:p(e.children)},String(t))}},66504:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"ci-cd/git/pr-templates","title":"Pull request templates","description":"Open Pull Requests from within Prophecy","source":"@site/docs/ci-cd/git/pull-request-templates.md","sourceDirName":"ci-cd/git","slug":"/ci-cd/git/pr-templates","permalink":"/prophecy-docs-staging/preview/pr-596/ci-cd/git/pr-templates","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"metadata","permalink":"/prophecy-docs-staging/preview/pr-596/tags/metadata"},{"inline":true,"label":"pr","permalink":"/prophecy-docs-staging/preview/pr-596/tags/pr"},{"inline":true,"label":"pull requests","permalink":"/prophecy-docs-staging/preview/pr-596/tags/pull-requests"},{"inline":true,"label":"git","permalink":"/prophecy-docs-staging/preview/pr-596/tags/git"},{"inline":true,"label":"ci/cd","permalink":"/prophecy-docs-staging/preview/pr-596/tags/ci-cd"}],"version":"current","frontMatter":{"title":"Pull request templates","id":"pr-templates","description":"Open Pull Requests from within Prophecy","tags":["metadata","pr","pull requests","git","ci/cd"]},"sidebar":"mySidebar","previous":{"title":"Resolve conflicts","permalink":"/prophecy-docs-staging/preview/pr-596/ci-cd/git/git-resolve"},"next":{"title":"Best practices","permalink":"/prophecy-docs-staging/preview/pr-596/engineers/git-best-practices"}}');var l=r(74848),a=r(28453),s=r(65537),i=r(79329);const o={title:"Pull request templates",id:"pr-templates",description:"Open Pull Requests from within Prophecy",tags:["metadata","pr","pull requests","git","ci/cd"]},c=void 0,u={},p=[{value:"Enable Pull Request Template",id:"enable-pull-request-template",level:2},{value:"Examples",id:"examples",level:2},{value:"Open Pull Request",id:"open-pull-request",level:2},{value:"Merged Externally",id:"merged-externally",level:2}];function d(e){const t={admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:"Prophecy supports opening pull requests on your external Git provider to merge\ndevelopment branches to a base branch on a remote repository."}),"\n",(0,l.jsx)(t.admonition,{type:"note",children:(0,l.jsx)(t.p,{children:"You will not see this option if using Prophecy-managed Git for your project."})}),"\n",(0,l.jsx)(t.h2,{id:"enable-pull-request-template",children:"Enable Pull Request Template"}),"\n",(0,l.jsx)(t.p,{children:"To enable pull requests:"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"Open your project metadata."}),"\n",(0,l.jsxs)(t.li,{children:["Open the ",(0,l.jsx)(t.strong,{children:"Settings"})," tab."]}),"\n",(0,l.jsxs)(t.li,{children:["Next to ",(0,l.jsx)(t.strong,{children:"Pull Request Template"}),", toggle on the ",(0,l.jsx)(t.strong,{children:"Enabled"})," button."]}),"\n",(0,l.jsx)(t.li,{children:"Review the template URL."}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"PR template settings",src:r(76086).A+"",width:"2620",height:"1511"})}),"\n",(0,l.jsxs)(t.p,{children:["The PR template URL requires two variables which are used to build a URL string. The ",(0,l.jsx)(t.code,{children:"{{source}}"})," variable represents the active development branch, and the ",(0,l.jsx)(t.code,{children:"{{destination}}"})," variable represents the base branch to which the development branches need to be merged to, like ",(0,l.jsx)(t.code,{children:"main"}),"."]}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n","\n",(0,l.jsxs)(s.A,{children:[(0,l.jsxs)(i.A,{value:"github",label:"GitHub",children:[(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"GitHub template"})}),(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:"https://github.com/exampleOrg/exampleRepo/compare/{{destination}}...{{source}}?expand=1\n"})}),(0,l.jsxs)(t.p,{children:["An example pull request URL generated from the above template for merging a branch named ",(0,l.jsx)(t.code,{children:"feature"}),"\nto branch ",(0,l.jsx)(t.code,{children:"main"})," would look like:"]}),(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:"https://github.com/exampleOrg/exampleRepo/compare/main...feature?expand=1\n"})})]}),(0,l.jsxs)(i.A,{value:"bitbucket",label:"Bitbucket",children:[(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"Bitbucket template"})}),(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:"https://bitbucket.org/exampleOrg/exampleRepo/pull-requests/new?source={{source}}/1&dest={{destination}}\n"})}),(0,l.jsxs)(t.p,{children:["An example pull request URL generated from the above template for merging a branch named ",(0,l.jsx)(t.code,{children:"feature"}),"\nto branch ",(0,l.jsx)(t.code,{children:"main"})," would look like:"]}),(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:"https://bitbucket.org/exampleOrg/exampleRepo/pull-requests/new?source=feature/1&dest=main\n"})})]})]}),"\n",(0,l.jsx)(t.h2,{id:"open-pull-request",children:"Open Pull Request"}),"\n",(0,l.jsxs)(t.p,{children:["If the pull request template is configured correctly and enabled, you can open a pull request during the ",(0,l.jsx)(t.strong,{children:"Merge"})," step of the Git process."]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"PR creation",src:r(49976).A+"",width:"3034",height:"1264"})}),"\n",(0,l.jsxs)(t.p,{children:["When you open a pull request from the Prophecy interface, Prophecy will redirect you to your external Git provider based on the template defined in the project ",(0,l.jsx)(t.strong,{children:"Settings"})," tab."]}),"\n",(0,l.jsx)(t.h2,{id:"merged-externally",children:"Merged Externally"}),"\n",(0,l.jsx)(t.p,{children:"After you merge any branch remotely:"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"Open your Prophecy project."}),"\n",(0,l.jsxs)(t.li,{children:["Go to the ",(0,l.jsx)(t.strong,{children:"Merge"})," step of the Git dialog."]}),"\n",(0,l.jsxs)(t.li,{children:["Click ",(0,l.jsx)(t.strong,{children:"Merged Externally"})," and ",(0,l.jsx)(t.strong,{children:"Confirm"}),"."]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"Merged externally",src:r(60857).A+"",width:"2620",height:"1508"})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},76086:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/pbt-template-advanced-e304a2e6388a41d05d6cf20f2304b1d7.png"},79329:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(18215);const l={tabItem:"tabItem_Ymn6"};var a=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(l.tabItem,s),hidden:r,children:t})}}}]);