"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[15021],{15083:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/cluster_4-37ff5d306baece1ae2e67981f75874fc.png"},23092:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/cluster_3-5777ed594930b7994ed2badeed465233.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(96540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}},44221:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/cluster_2-8d3525f193d72c8a5fe24aea8edd9e3d.png"},51426:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/cluster_5-5016494fd502e2ecfc89f0869f94c07c.png"},65537:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),s=n(18215),a=n(65627),i=n(56347),o=n(50372),l=n(30604),c=n(11861),u=n(78749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,d]=f({queryString:n,groupId:s}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),g=(()=>{const e=c??b;return h({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=n(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function k(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),s=o[n].value;s!==r&&(c(t),i(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{l.push(e)},onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,x.jsx)(k,{...t,...e}),(0,x.jsx)(v,{...t,...e})]})}function y(e){const t=(0,m.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(t))}},71205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"getting-help/spark-cluster-details","title":"Send Spark cluster details","description":"Helpful Spark cluster configurations to send to Support","source":"@site/docs/getting-help/spark-cluster-details.md","sourceDirName":"getting-help","slug":"/getting-help/spark-cluster-details","permalink":"/prophecy-docs-staging/preview/pr-600/getting-help/spark-cluster-details","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"help","permalink":"/prophecy-docs-staging/preview/pr-600/tags/help"},{"inline":true,"label":"connectivity","permalink":"/prophecy-docs-staging/preview/pr-600/tags/connectivity"}],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Send Spark cluster details","id":"spark-cluster-details","description":"Helpful Spark cluster configurations to send to Support","sidebar_label":"Send info from the Spark cluster","sidebar_position":2,"tags":["help","connectivity"]},"sidebar":"adminSidebar","previous":{"title":"Send info from Prophecy","permalink":"/prophecy-docs-staging/preview/pr-600/getting-help/prophecy-details"},"next":{"title":"Fabric diagnostics","permalink":"/prophecy-docs-staging/preview/pr-600/fabric-diagnostics"}}');var s=n(74848),a=n(28453),i=n(65537),o=n(79329);const l={title:"Send Spark cluster details",id:"spark-cluster-details",description:"Helpful Spark cluster configurations to send to Support",sidebar_label:"Send info from the Spark cluster",sidebar_position:2,tags:["help","connectivity"]},c=void 0,u={},d=[{value:"Spark configurations",id:"spark-configurations",level:2},{value:"Configurations in the UI",id:"configUI",level:3},{value:"Run a notebook",id:"configNB",level:3},{value:"Connectivity Check",id:"connectivity-check",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["There are helpful Spark cluster configurations and a connectivity check that you can send to us via the Prophecy ",(0,s.jsx)(t.a,{href:"https://prophecy.zendesk.com/",children:"Support Portal"})," for troubleshooting."]}),"\n",(0,s.jsx)(t.h2,{id:"spark-configurations",children:"Spark configurations"}),"\n",(0,s.jsx)(t.p,{children:"Two ways to access the configurations:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Browsing the Spark UI"}),"\n",(0,s.jsx)(t.li,{children:"Running a notebook"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"configUI",children:"Configurations in the UI"}),"\n",(0,s.jsx)(t.p,{children:"You can access your Spark cluster configurations directly from the Spark UI."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Please send screenshots of each configuration if possible."})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Configuration to Send"}),(0,s.jsx)(t.th,{children:"Example"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Overall cluster configuration (e.g., Spark version, Databricks runtime version, UC single or UC shared)"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)("br",{}),(0,s.jsx)("img",{src:n(76806).A,alt:"Cluster configuration example",width:"75%"}),(0,s.jsx)("br",{})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Cluster JSON (edited to remove any private or sensitive information)"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)("br",{}),(0,s.jsx)("img",{src:n(44221).A,alt:"Cluster JSON example",width:"75%"}),(0,s.jsx)("br",{})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Libraries installed on the cluster"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)("br",{}),(0,s.jsx)("img",{src:n(23092).A,alt:"Cluster libraries example",width:"75%"}),(0,s.jsx)("br",{})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Init scripts run on the cluster. Include the script itself if possible."}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)("br",{}),(0,s.jsx)("img",{src:n(15083).A,alt:"Cluster init scripts example",width:"75%"}),(0,s.jsx)("br",{})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Output of attaching cluster in a notebook. You may need to duplicate the tab and try attaching the same cluster in the duplicate tab."}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)("br",{}),(0,s.jsx)("img",{src:n(51426).A,alt:"Notebook attach to cluster example",width:"75%"}),(0,s.jsx)("br",{})]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"configNB",children:"Run a notebook"}),"\n",(0,s.jsxs)(t.p,{children:["For those who prefer to use code, create a notebook (example below) and send the output via the Prophecy ",(0,s.jsx)(t.a,{href:"https://prophecy.zendesk.com/",children:"Support Portal"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"Replace the workspace URL, personal access token, clusterID, and API token as appropriate."})}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Python"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'# Databricks notebook source\nimport requests\n\n#Get Databricks runtime of cluster\n# Get the notebook context using dbutils\ncontext = dbutils.notebook.entry_point.getDbutils().notebook().getContext()\n\n# Retrieve the Databricks runtime version from the context tags\nruntime_version = context.tags().get("sparkVersion").get()\n\n# Print the runtime version\nprint(f"Databricks Runtime Version: {runtime_version}")\n\n# Get Spark version\nspark_version = spark.version\nprint(f"Spark Version: {spark_version}")\n\n\n#Get the installed libraries and access mode details of the cluster\n# Replace with your Databricks workspace URL and token\nworkspace_url = "replace_with_workspace_url"\ntoken = "replace_with_token"\ncluster_id = "replace_with_cluster_id"\n\n\n# API endpoint to get info of installed libraries\nurl = f"{workspace_url}/api/2.0/libraries/cluster-status"\n\n# Make the API request\nresponse = requests.get(url, headers={"Authorization": f"Bearer {token}"}, params={"cluster_id": cluster_id})\n\nlibrary_info=response.json()\nprint("Libraries:")\nfor i in library_info[\'library_statuses\']:\n    print(i)\n\n# API endpoint to get access mode details\nurl = f"{workspace_url}/api/2.1/clusters/get"\n\n# Make the API request\nresponse = requests.get(url, headers={"Authorization": f"Bearer {token}"}, params={"cluster_id": cluster_id})\n\ncluster_access_info=response.json()\nprint(f"Cluster Access Mode: {cluster_access_info[\'data_security_mode\']}")\n'})})]}),"\n",(0,s.jsx)(t.h2,{id:"connectivity-check",children:"Connectivity Check"}),"\n",(0,s.jsx)(t.p,{children:"Open a notebook on the Spark cluster and run the following command."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"Replace the Prophecy endpoint."})}),"\n","\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(o.A,{value:"py",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-py",children:"import subprocess\n\ncommand = 'curl -X GET \"https://customer_prophecy_url/execution\"'\noutput = subprocess.check_output(['/bin/bash', '-c', command], text=True)\n\nprint(output)\n"})})}),(0,s.jsx)(o.A,{value:"scala",label:"Scala",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-scala",children:'%scala\nimport sys.process._\nval command = """curl -X GET "https://customer_prophecy_url/execution""""\nSeq("/bin/bash", "-c", command).!!\n'})})})]}),"\n",(0,s.jsx)(t.p,{children:"This command tests the reverse websocket protocol required by Prophecy to execute pipelines on Spark clusters. Please send the output from this command in the Support Portal."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"We look forward to hearing from you!"})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},76806:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/cluster_1-b7e27cd659dd248538fb94cac83af70a.png"},79329:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(18215);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:n,children:t})}}}]);