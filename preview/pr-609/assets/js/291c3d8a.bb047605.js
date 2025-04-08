"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[50832],{11931:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/Canvas-f40111ee8bfb0b475918b63f84c0a426.png"},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var n=s(96540);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}},30463:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/AddModel-41757d32821191a43d816ddd785ab049.png"},41749:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ProjectLineage-4948eb0f10c58b4d591bff69cdf2b071.png"},46425:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"data-modeling/data-modeling","title":"Data modeling","description":"Using SQL with Prophecy\'s Data Transformation Copilot","source":"@site/docs/data-modeling/data-modeling.md","sourceDirName":"data-modeling","slug":"/engineers/data-models","permalink":"/prophecy-docs-staging/preview/pr-609/engineers/data-models","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"sql","permalink":"/prophecy-docs-staging/preview/pr-609/tags/sql"},{"inline":true,"label":"snowflake","permalink":"/prophecy-docs-staging/preview/pr-609/tags/snowflake"},{"inline":true,"label":"databricks","permalink":"/prophecy-docs-staging/preview/pr-609/tags/databricks"},{"inline":true,"label":"warehouse","permalink":"/prophecy-docs-staging/preview/pr-609/tags/warehouse"}],"version":"current","frontMatter":{"title":"Data modeling","id":"data-modeling","slug":"/engineers/data-models","description":"Using SQL with Prophecy\'s Data Transformation Copilot","tags":["sql","snowflake","databricks","warehouse"]},"sidebar":"mySidebar","previous":{"title":"Best practices","permalink":"/prophecy-docs-staging/preview/pr-609/engineers/project-best-practices"},"next":{"title":"Models","permalink":"/prophecy-docs-staging/preview/pr-609/engineers/models"}}');var r=s(74848),o=s(28453),i=s(99563),a=s(89791);const l={title:"Data modeling",id:"data-modeling",slug:"/engineers/data-models",description:"Using SQL with Prophecy's Data Transformation Copilot",tags:["sql","snowflake","databricks","warehouse"]},c=void 0,d={},h=[{value:"Project editor",id:"project-editor",level:2},{value:"Model canvas",id:"model-canvas",level:2},{value:"Code view",id:"code-view",level:2},{value:"Version control",id:"version-control",level:2},{value:"SQL and dbt constructs",id:"sql-and-dbt-constructs",level:2},{value:"Share models",id:"share-models",level:2},{value:"Learn more",id:"learn-more",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{class:"badge",children:"SQL"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(t.p,{children:["Data ",(0,r.jsx)(t.a,{href:"/engineers/models",children:"models"})," are transformations that are compiled into SQL code and executed on SQL warehouses. Use the ",(0,r.jsx)(t.strong,{children:"model canvas"})," to visually develop your models, and switch to the code view to see your transformations in SQL."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"CodeEqualsVisual",src:s(65239).A+"",width:"2880",height:"1726"})}),"\n",(0,r.jsx)(t.h2,{id:"project-editor",children:"Project editor"}),"\n",(0,r.jsxs)(t.p,{children:["Open any SQL project in the project editor. Here, you will find the complete end-to-end ",(0,r.jsx)(t.strong,{children:"project lineage"}),". The project lineage provides a quick, high-level understanding of how models refer to other models, seeds, or sources. You'll also be able to browse different project components and view data from your SQL environment."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"ProjectLineage",src:s(41749).A+"",width:"2880",height:"1726"})}),"\n",(0,r.jsx)(t.h2,{id:"model-canvas",children:"Model canvas"}),"\n",(0,r.jsxs)(t.p,{children:["The model canvas is your main workspace to develop data models. To begin, you can create a new model by clicking on ",(0,r.jsx)(t.strong,{children:"+"})," next to the models pane."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"AddModel",src:s(30463).A+"",width:"2880",height:"1026"})}),"\n",(0,r.jsxs)(t.p,{children:["Once a model is open, the model-editing canvas appears. In the following image, we can see the ",(0,r.jsx)(t.code,{children:"customers"})," model starts with three existing models. The data is transformed according to Aggregate, SQLStatement, and Join ",(0,r.jsx)(t.a,{href:"/engineers/data-modeling-gems",children:"gems"}),". The transformation gems are accessible via the gem drawer. As you develop the model, you can ",(0,r.jsx)(t.a,{href:"/engineers/execution",children:"iteratively run"})," and see ",(0,r.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-609/analysts/data-explorer",children:"sample data"})," as well as the relevant logs."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Canvas",src:s(11931).A+"",width:"2880",height:"1726"})}),"\n",(0,r.jsx)(t.h2,{id:"code-view",children:"Code view"}),"\n",(0,r.jsxs)(t.p,{children:["Switch to the ",(0,r.jsx)(t.strong,{children:"Code View"})," to reveal the SQL queries generated from the visual model canvas. Each gem is represented by a CTE or subquery."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Code View",src:s(71582).A+"",width:"2620",height:"1509"})}),"\n",(0,r.jsx)(t.p,{children:"You may wish to edit the code view. Add a SQL statement in the code view and notice the visual editor displays the updated code."}),"\n",(0,r.jsx)(t.h2,{id:"version-control",children:"Version control"}),"\n",(0,r.jsx)(t.p,{children:"Projects built through Prophecy are stored in the dbt Core format as repositories on Git, which allows data teams to follow best software engineering practices like CI/CD."}),"\n",(0,r.jsx)(t.p,{children:"Prophecy automatically saves your work as you develop in a working directory securely stored on the cloud. Just make sure to commit your changes every once in a while, to see your code reflected on your Git and to collaborate easier with your team."}),"\n",(0,r.jsx)(t.h2,{id:"sql-and-dbt-constructs",children:"SQL and dbt constructs"}),"\n",(0,r.jsx)(t.p,{children:"Even if dbt and SQL constructs are not supported in the visual editor, it is still supported in code. In other words:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"For SQL"}),", Prophecy automatically maps unsupported SQL statements to a generic SQL gem, allowing you to still freely edit even unsupported code."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"For dbt"}),", Features in dbt-core that may lack their visual-editor alternatives still work as expected from the standard dbt cli. Prophecy will never modify your existing codebase in unsupported ways."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"share-models",children:"Share models"}),"\n",(0,r.jsxs)(t.p,{children:["If you want, you can import an existing dbt Core project or start from scratch. Then, you can publish projects to the ",(0,r.jsx)(t.a,{href:"/engineers/package-hub",children:"Package Hub"})," and share your models with other teams."]}),"\n",(0,r.jsx)(t.h2,{id:"learn-more",children:"Learn more"}),"\n",(0,r.jsx)(t.p,{children:"A word from Prophecy's co-Founder, Maciej! See how Prophecy allows every team, whether visual or code developers, to use the same software development best practices."}),"\n",(0,r.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56% 0 0 0",position:"relative"},children:(0,r.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,r.jsx)("iframe",{src:"https://fast.wistia.net/embed/iframe/3i9g2dciah?seo=false?videoFoam=true",title:"Design a Pipeline Video",allow:"autoplay; fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,r.jsx)("script",{src:"https://fast.wistia.net/assets/external/E-v1.js",async:!0}),"\n",(0,r.jsx)(t.h2,{id:"whats-next",children:"What's next"}),"\n",(0,r.jsxs)(t.p,{children:["To get started developing SQL models, check out the pages below or try this ",(0,r.jsx)(t.a,{href:"/prophecy-docs-staging/preview/pr-609/engineers/data-modeling",children:"modeling"})," tutorial."]}),"\n","\n",(0,r.jsx)(i.A,{items:(0,a.$S)().items})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},65239:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/CodeEqualsVisual-7ed0abf10dbef5d53f4bdd3434fc9be9.png"},71582:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/sql-as-code-2ecc90afb86cc6eb9ff09a107273c5f9.png"},81430:(e,t,s)=>{s.d(t,{W:()=>c});var n=s(96540),r=s(40797);const o=["zero","one","two","few","many","other"];function i(e){return o.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function c(){const e=l();return{selectMessage:(t,s)=>function(e,t,s){const n=e.split("|");if(1===n.length)return n[0];n.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const r=s.select(t),o=s.pluralForms.indexOf(r);return n[Math.min(o,n.length-1)]}(s,t,e)}}},89791:(e,t,s)=>{s.d(t,{$S:()=>n});s(40797);function n(){return s(56942).$S(...arguments)}},99563:(e,t,s)=>{s.d(t,{A:()=>x});s(96540);var n=s(18215),r=s(93751),o=s(56289),i=s(81430),a=s(22887),l=s(50539),c=s(9303);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var h=s(74848);function p(e){let{href:t,children:s}=e;return(0,h.jsx)(o.A,{href:t,className:(0,n.A)("card padding--lg",d.cardContainer),children:s})}function u(e){let{href:t,icon:s,title:r,description:o}=e;return(0,h.jsxs)(p,{href:t,children:[(0,h.jsxs)(c.A,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:r,children:[s," ",r]}),o&&(0,h.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:o,children:o})]})}function m(e){let{item:t}=e;const s=(0,r.Nr)(t),n=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return s?(0,h.jsx)(u,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function g(e){let{item:t}=e;const s=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.cC)(t.docId??void 0);return(0,h.jsx)(u,{href:t.href,icon:s,title:t.label,description:t.description??n?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,h.jsx)(g,{item:t});case"category":return(0,h.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function w(e){let{className:t}=e;const s=(0,r.$S)();return(0,h.jsx)(x,{items:s.items,className:t})}function x(e){const{items:t,className:s}=e;if(!t)return(0,h.jsx)(w,{...e});const o=(0,r.d1)(t);return(0,h.jsx)("section",{className:(0,n.A)("row",s),children:o.map(((e,t)=>(0,h.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,h.jsx)(f,{item:e})},t)))})}}}]);