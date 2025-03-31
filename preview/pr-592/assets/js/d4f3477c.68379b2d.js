"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[96991],{10059:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/lineage-column-level-view-794d1927d3256980268725b7734129ac.png"},11288:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/lineage-dataset-zoom-in-17fc11b21bdc66cd3f1fd6a7296a8c2f.png"},24527:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/lineage-browse-dataset-7dc07107053929425e19a1e41f22fadd.png"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var a=i(96540);const t={},s=a.createContext(t);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(s.Provider,{value:n},e.children)}},37284:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/lineage-pipeline-zoom-in-8ea3cbc8cbfb2a87f7402d48809f12e3.png"},74624:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/lineage-search-high-level-view-1a470adbf23233141bff74c896d3cf49.png"},75994:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"lineage/lineage-view-and-search","title":"Lineage view","description":"Project lineage view and search","source":"@site/docs/lineage/lineage-view-and-search.md","sourceDirName":"lineage","slug":"/lineage/lineage-view-and-search","permalink":"/lineage/lineage-view-and-search","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"metadata","permalink":"/tags/metadata"},{"inline":true,"label":"lineage","permalink":"/tags/lineage"},{"inline":true,"label":"view","permalink":"/tags/view"},{"inline":true,"label":"search","permalink":"/tags/search"}],"version":"current","frontMatter":{"title":"Lineage view","id":"lineage-view-and-search","description":"Project lineage view and search","tags":["metadata","lineage","view","search"]},"sidebar":"mySidebar","previous":{"title":"Lineage run and diagnose","permalink":"/lineage/lineage-run-and-diagnose"},"next":{"title":"CI/CD in Prophecy","permalink":"/ci-cd/reliable-ci-cd"}}');var t=i(74848),s=i(28453);const r={title:"Lineage view",id:"lineage-view-and-search",description:"Project lineage view and search",tags:["metadata","lineage","view","search"]},l=void 0,o={},c=[{value:"Lineage search",id:"lineage-search",level:2},{value:"Lineage view",id:"lineage-view",level:2},{value:"Summary",id:"summary",level:3},{value:"Zoom In",id:"zoom-in",level:3}];function d(e){const n={h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Learn how to navigate through Lineage to better understand your data."}),"\n",(0,t.jsx)(n.h2,{id:"lineage-search",children:"Lineage search"}),"\n",(0,t.jsxs)(n.p,{children:["When you open Lineage from the left navigation bar, you are brought to the lineage search page. Once you enter a search query, you can see a list of matching ",(0,t.jsx)(n.strong,{children:"entities"})," and a list of ",(0,t.jsx)(n.strong,{children:"columns"}),". You can filter these lists by:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Entity type"}),"\n",(0,t.jsx)(n.li,{children:"Project"}),"\n",(0,t.jsx)(n.li,{children:"Author"}),"\n",(0,t.jsx)(n.li,{children:"Last modified time period"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Once you click an entity or column, the lineage view opens."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Lineage Search",src:i(74624).A+"",width:"2620",height:"1432"})}),"\n",(0,t.jsx)(n.h2,{id:"lineage-view",children:"Lineage view"}),"\n",(0,t.jsxs)(n.p,{children:["The lineage view always includes ",(0,t.jsx)(n.strong,{children:"Summary"})," and ",(0,t.jsx)(n.strong,{children:"Zoom In"})," tabs, though these look different for different entities."]}),"\n",(0,t.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Summary"})," tab demonstrates the flow of data through pipelines, models, and datasets (depending on your project type)."]}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.strong,{children:"Browse Datasets"})," panel to search for and select the column or entity that you want to inspect."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Browse Datasets",src:i(24527).A+"",width:"2812",height:"900"})}),"\n",(0,t.jsx)(n.p,{children:"More information can be found when you select a column, such as upstream and downstream transformations."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Lineage View",src:i(10059).A+"",width:"2620",height:"1508"})}),"\n",(0,t.jsx)(n.h3,{id:"zoom-in",children:"Zoom In"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Zoom In"})," tab looks different depending on whether you are inspecting a pipeline or a dataset."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"For pipelines,"})," you can see code-level information about each component present in the pipeline. Select a component to view its:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Transformation code"}),"\n",(0,t.jsx)(n.li,{children:"Input columns"}),"\n",(0,t.jsx)(n.li,{children:"Output columns"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"pipeline zoom-in",src:i(37284).A+"",width:"2620",height:"1508"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"For datasets,"})," you can find information around all the upstream and downstream transformations (if any) for all the columns of the selected dataset."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Dataset zoom-in",src:i(11288).A+"",width:"2620",height:"1508"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);