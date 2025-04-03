"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[63022],{28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var n=r(96540);const a={},i=n.createContext(a);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:t},e.children)}},65537:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),a=r(18215),i=r(65627),s=r(56347),l=r(50372),o=r(30604),c=r(11861),d=r(78749);function p(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function u(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function x(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,i=h(e),[s,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,p]=m({queryString:r,groupId:a}),[x,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),j=(()=>{const e=c??x;return u({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{j&&o(j)}),[j]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),g(e)}),[p,g,i]),tabValues:i}}var g=r(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function f(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,r=o.indexOf(t),a=l[r].value;a!==n&&(c(t),s(a))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{o.push(e)},onKeyDown:p,onClick:d,...i,className:(0,a.A)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:i}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function v(e){const t=x(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,b.jsx)(f,{...t,...e}),(0,b.jsx)(y,{...t,...e})]})}function w(e){const t=(0,g.A)();return(0,b.jsx)(v,{...e,children:p(e.children)},String(t))}},76965:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"api/change-external-git-api","title":"Change External Git Provider API","description":"Use this API to manage the Git provider configured for specific Prophecy projects","source":"@site/docs/api/change-external-git-config-api.md","sourceDirName":"api","slug":"/api/change-external-git-api","permalink":"/prophecy-docs-staging/preview/pr-599/api/change-external-git-api","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"git","permalink":"/prophecy-docs-staging/preview/pr-599/tags/git"},{"inline":true,"label":"api","permalink":"/prophecy-docs-staging/preview/pr-599/tags/api"},{"inline":true,"label":"gitlab","permalink":"/prophecy-docs-staging/preview/pr-599/tags/gitlab"},{"inline":true,"label":"bitbucket","permalink":"/prophecy-docs-staging/preview/pr-599/tags/bitbucket"},{"inline":true,"label":"github","permalink":"/prophecy-docs-staging/preview/pr-599/tags/github"}],"version":"current","frontMatter":{"title":"Change External Git Provider API","id":"change-external-git-api","sidebar_class_name":"hidden","description":"Use this API to manage the Git provider configured for specific Prophecy projects","tags":["git","api","gitlab","bitbucket","github"]}}');var a=r(74848),i=r(28453),s=r(65537),l=r(79329);const o={title:"Change External Git Provider API",id:"change-external-git-api",sidebar_class_name:"hidden",description:"Use this API to manage the Git provider configured for specific Prophecy projects",tags:["git","api","gitlab","bitbucket","github"]},c=void 0,d={},p=[{value:"Steps",id:"steps",level:3},{value:"Each user needs to update their Git credential",id:"each-user-needs-to-update-their-git-credential",level:3},{value:"Tips",id:"tips",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["If you've migrated Git providers, you'll need to update Prophecy projects to use the new Git provider. You can use the ",(0,a.jsx)(t.code,{children:"updateRemoteURI"})," API to configure Prophecy projects to point to the migrated repositories."]}),"\n",(0,a.jsxs)(t.p,{children:["You'll be able to perform the API call manually or using ",(0,a.jsx)(t.a,{href:"#tips",children:"Postman"}),". If you need to migrate projects in bulk, ",(0,a.jsx)(t.a,{href:"#tips",children:"follow these steps"})," before calling the ",(0,a.jsx)(t.code,{children:"updateRemoteURI"})," API."]}),"\n",(0,a.jsx)(t.h3,{id:"steps",children:"Steps"}),"\n",(0,a.jsx)(t.p,{children:"The steps below will work for all the Git providers supported in Prophecy."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Login to Prophecy as the Team Admin."}),"\n",(0,a.jsxs)(t.li,{children:["Generate a ",(0,a.jsx)(t.a,{href:"/api/#personal-access-token",children:"Prophecy API token"}),"."]}),"\n",(0,a.jsx)(t.li,{children:"Craft the API calls as below."}),"\n",(0,a.jsx)(t.li,{children:"Submit the API call"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Example:"}),"\n","\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(l.A,{value:"py",label:"Python",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-py",children:'import requests\nimport json\n\nurl = "https://****.prophecy.io/api/md/graphql"\n\npayload = json.dumps({\n  "query": "mutation {\\n  updateRemoteUri(\\n    projectUID: \\"***123***\\"\\n    externalRepoUri: \\"https://gitlab.com/****/my-destination-repo.git\\"\\n    externalGitProvider: GitLab\\n    externalRepoEmail: \\"****@****.com\\"\\n    externalRepoUsername: \\"****\\"\\n    externalRepoAccessToken: \\"glpat-****\\"\\n  )\\n}",\n  "variables": {}\n})\nheaders = {\n  \'X-Auth-Token\': \'****\',\n  \'\': \'\',\n  \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.request("POST", url, headers=headers, data=payload)\n\nprint(response.text)\n'})})}),(0,a.jsx)(l.A,{value:"curl",label:"curl",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-curl",children:'curl --location \'https://****.prophecy.io/api/md/graphql\' \\\n--header \'X-Auth-Token: ****\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "query": "mutation {\\n  updateRemoteUri(\\n    projectUID: \\"***123***\\"\\n    externalRepoUri: \\"https://gitlab.com/****/my-destination-repo.git\\"\\n    externalGitProvider: GitLab\\n    externalRepoEmail: \\"****@****.com\\"\\n    externalRepoUsername: \\"****\\"\\n    externalRepoAccessToken: \\"glpat-***\\"\\n  )*\\n}",\n    "variables": {}\n}\'\n\n'})})}),(0,a.jsx)(l.A,{value:"Readable",label:"Readable",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-Readable",children:'Url:\nhttps://****.prophecy.io/api/md/graphql\n\nHeaders:\nX-Auth-Token: \'****\'\nContent-Type: \'application/json\'\n\nBody:\nBody:\n"query": "mutation {\n            updateRemoteUri(\n              projectUID: \\"***123***\\"\n              externalRepoUri: \\"https://gitlab.com/****/my-destination-repo.git\\"\n              externalGitProvider: GitLab\n              externalRepoEmail: \\"****@****.com\\"\n              externalRepoUsername: \\"****\\"\n              externalRepoAccessToken: \\"glpat-***\\"\n            )\n         }"\n'})})})]}),"\n",(0,a.jsx)(t.p,{children:"Response:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'{\n "data": {\n   "updateRemoteUri":1\n }\n}\n'})}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Required"}),(0,a.jsx)(t.th,{children:"Example"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"projectUID"}),(0,a.jsx)(t.td,{children:"Prophecy Project ID, found in the Project URL"}),(0,a.jsx)(t.td,{children:"Required"}),(0,a.jsx)(t.td,{children:'"11"'})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"externalRepoUri"}),(0,a.jsx)(t.td,{children:"Repository target for migration. Use the https url."}),(0,a.jsx)(t.td,{children:"Required"}),(0,a.jsxs)(t.td,{children:['"',(0,a.jsx)(t.a,{href:"https://gitlab.com/****/examplerepo",children:"https://gitlab.com/****/examplerepo"}),'"']})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"externalGitProvider"}),(0,a.jsx)(t.td,{children:"Possible values (case sensitive): Github, GithubEnterprise, GitLab, GitLabEnterprise, BitBucket, AzureDevOps, Other"}),(0,a.jsx)(t.td,{children:"Required"}),(0,a.jsx)(t.td,{children:"GitLab"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"externalRepoEmail"}),(0,a.jsx)(t.td,{children:"If provided, the API call will validate the two repos are the same."}),(0,a.jsx)(t.td,{children:"Optional"}),(0,a.jsxs)(t.td,{children:['"',(0,a.jsx)(t.a,{href:"mailto:myemail@mycompany.com",children:"myemail@mycompany.com"}),'"']})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"externalRepoUsername"}),(0,a.jsx)(t.td,{children:"If provided, the API call will validate the two repos are the same."}),(0,a.jsx)(t.td,{children:"Optional"}),(0,a.jsx)(t.td,{children:'"myGitLabUsername"'})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"externalRepoAccessToken"}),(0,a.jsx)(t.td,{children:"If provided, the API call will validate the two repos are the same."}),(0,a.jsx)(t.td,{children:"Optional"}),(0,a.jsx)(t.td,{children:'"gitlab-token"'})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"each-user-needs-to-update-their-git-credential",children:"Each user needs to update their Git credential"}),"\n",(0,a.jsx)(t.p,{children:"After each project is configured for a new Git provider's repo, the Prophecy users will need to update their Git credentials."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Open the new Git provider (eg GitLab) and create a new token. Be sure the new token has permission to write to all the important repositories."}),"\n",(0,a.jsx)(t.li,{children:"Open Prophecy. Add a new Git credential for the new provider (eg GitLab). Configure projects to use the new Git credential."}),"\n"]}),"\n",(0,a.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,a.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,a.jsx)("iframe",{src:"https://fast.wistia.net/embed/iframe/mwg1ku3drp?seo=false?videoFoam=true",title:"Design a Pipeline Video",allow:"autoplay; fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,a.jsx)("script",{src:"https://fast.wistia.net/assets/external/E-v1.js",async:!0}),"\n",(0,a.jsx)(t.h2,{id:"tips",children:"Tips"}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)("summary",{children:" Use Postman to craft the API call "}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Install ",(0,a.jsx)(t.a,{href:"https://www.postman.com/downloads/",children:"Postman"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Create a new POST API request in Postman","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Enter your Prophecy GraphQL API endpoint, eg https://****.prophecy.io/api/md/graphql."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.li,{children:"Go to the Headers Tab and enter X-Auth-Token for the key and your API token as the value."}),"\n",(0,a.jsx)(t.li,{children:"Go to the Body tab and enter the following to call updateRemoteUri:"}),"\n"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'mutation {\n  updateRemoteUri(\n    projectUID: "<insert_project_UID_here>"\n    externalRepoUri: "<insert_target_repo_here>"\n    externalGitProvider: <insert_target_git_provider_here>\n    externalRepoEmail: "<insert_your_email_here>"\n    externalRepoUsername: "<insert_your_git_provider_username_here>"\n    externalRepoAccessToken: "<insert_gitlab_token_here>"\n  )\n}\n'})})]}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)("summary",{children:" Error response "}),"\nIf you see an ",(0,a.jsx)(t.code,{children:"access denied"})," error response when calling the Git migration API:"]}),(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Verify the Prophecy API token is created by the team admin"}),"\n",(0,a.jsx)(t.li,{children:"Verify the token for the target Git provider\n[a] has permission to push to the repo\n[b] has permission to push to the branch, and\n[c] is the right type of token (app token for GitLab, personal access token for Github, etc.)."}),"\n"]})]}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)("summary",{children:" Bulk repository migrations "}),(0,a.jsx)(t.p,{children:"If you have many projects to change, use a separate API call to list your team\u2019s project IDs and URLs. Duplicate the query, modify the Body tab, and enter the following:"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"tableQueryProject($UID: String!) {\n  Team(uid: $UID) {\n    _id\n    name\n    projects {\n      _id\n      name\n      externalOriginUri\n    }\n  }\n}\n"})}),(0,a.jsxs)(t.p,{children:["Now you can use the returned list of project UIDs to call the ",(0,a.jsx)(t.code,{children:"updateRemoteURI"})," API, once per project UID. This can be automated using a simple script."]})]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},79329:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(18215);const a={tabItem:"tabItem_Ymn6"};var i=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:r,children:t})}}}]);