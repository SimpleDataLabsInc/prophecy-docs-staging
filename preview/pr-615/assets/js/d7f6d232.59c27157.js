"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[78009],{28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>o});var n=t(96540);const r={},i=n.createContext(r);function a(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:s},e.children)}},57267:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"api/active-users-api","title":"Active and Total Users API","description":"Use this API to get current and total logged in users","source":"@site/docs/api/active-users-api.md","sourceDirName":"api","slug":"/api/active-users-api","permalink":"/prophecy-docs-staging/preview/pr-615/api/active-users-api","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Active and Total Users API","id":"active-users-api","sidebar_class_name":"hidden","description":"Use this API to get current and total logged in users","tags":[]}}');var r=t(74848),i=t(28453);const a={title:"Active and Total Users API",id:"active-users-api",sidebar_class_name:"hidden",description:"Use this API to get current and total logged in users",tags:[]},o=void 0,c={},l=[{value:"Active Users API",id:"active-users-api",level:3},{value:"Total Users API",id:"total-users-api",level:3}];function p(e){const s={code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"You can use the Active Users and Total Users APIs to find out the number of current and total users who are logged in to Prophecy. This can help you understand usage and times of high traffic, enabling you to manage capacity more effectively."}),"\n",(0,r.jsx)(s.h3,{id:"active-users-api",children:"Active Users API"}),"\n",(0,r.jsx)(s.p,{children:"Example:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"curl --location 'https://<prophecy-env-url>/api/auth/userDetails' \\\n--header 'Cookie: prophecy-token=<prophecy-access-token>' | jq -r .activeUsers\n"})}),"\n",(0,r.jsx)(s.p,{children:"Response:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"{\n  53\n}\n"})}),"\n",(0,r.jsx)(s.h3,{id:"total-users-api",children:"Total Users API"}),"\n",(0,r.jsx)(s.p,{children:"Example:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"curl --location 'https://<prophecy-env-url>/api/auth/userDetails' \\\n--header 'Cookie: prophecy-token=<prophecy-access-token>' | jq -r .userDetails.totalUsers\n"})}),"\n",(0,r.jsx)(s.p,{children:"Response:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"{\n  1023\n}\n"})})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}}}]);