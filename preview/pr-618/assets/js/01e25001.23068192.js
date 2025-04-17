"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[36081],{28453:(e,r,s)=>{s.d(r,{R:()=>o,x:()=>l});var n=s(96540);const i={},t=n.createContext(i);function o(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(t.Provider,{value:r},e.children)}},68404:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"release_notes/version_chart/versions_support","title":"Prophecy versions support","description":"Prophecy versions support","source":"@site/docs/release_notes/version_chart/versions_support.md","sourceDirName":"release_notes/version_chart","slug":"/release_notes/version_chart/versions_support","permalink":"/prophecy-docs-staging/preview/pr-618/release_notes/version_chart/versions_support","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"compatibility","permalink":"/prophecy-docs-staging/preview/pr-618/tags/compatibility"},{"inline":true,"label":"matrix","permalink":"/prophecy-docs-staging/preview/pr-618/tags/matrix"},{"inline":true,"label":"version","permalink":"/prophecy-docs-staging/preview/pr-618/tags/version"},{"inline":true,"label":"chart","permalink":"/prophecy-docs-staging/preview/pr-618/tags/chart"},{"inline":true,"label":"library","permalink":"/prophecy-docs-staging/preview/pr-618/tags/library"},{"inline":true,"label":"plib","permalink":"/prophecy-docs-staging/preview/pr-618/tags/plib"},{"inline":true,"label":"plibs","permalink":"/prophecy-docs-staging/preview/pr-618/tags/plibs"}],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Prophecy versions support","id":"versions_support","description":"Prophecy versions support","sidebar_position":1,"tags":["compatibility","matrix","version","chart","library","plib","plibs"]},"sidebar":"mySidebar","previous":{"title":"Version chart","permalink":"/prophecy-docs-staging/preview/pr-618/release_notes/version_chart/"},"next":{"title":"Release notes","permalink":"/prophecy-docs-staging/preview/pr-618/release_notes/"}}');var i=s(74848),t=s(28453);const o={title:"Prophecy versions support",id:"versions_support",description:"Prophecy versions support",sidebar_position:1,tags:["compatibility","matrix","version","chart","library","plib","plibs"]},l=void 0,c={},d=[{value:"Release version system",id:"release-version-system",level:2},{value:"Extended Maintenance release",id:"extended-maintenance-release",level:2},{value:"Required resources",id:"required-resources",level:3},{value:"Prophecy support lifecycles",id:"prophecy-support-lifecycles",level:2},{value:"Prophecy version lifecycle",id:"prophecy-version-lifecycle",level:3},{value:"Prophecy version",id:"prophecy-version",level:2},{value:"Software Version API",id:"software-version-api",level:3}];function a(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:"This page describes the Prophecy versioning system, version types, and version lifecycles."}),"\n",(0,i.jsx)(r.h2,{id:"release-version-system",children:"Release version system"}),"\n",(0,i.jsx)(r.p,{children:"The following table shows details of the different Prophecy version types."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Version type"}),(0,i.jsx)(r.th,{children:"Example"}),(0,i.jsx)(r.th,{children:"Frequency (approx.)"}),(0,i.jsx)(r.th,{children:"End-of-support"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Extended Maintenance (EM) release"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"v3.4.1.0 EM"})}),(0,i.jsx)(r.td,{children:"Every four months"}),(0,i.jsx)(r.td,{children:"After one year"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Major"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"v3.4.0.0"})}),(0,i.jsx)(r.td,{children:"Every four months"}),(0,i.jsx)(r.td,{children:"After six months"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Minor"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"v3.3.11.0"})}),(0,i.jsx)(r.td,{children:"Every three weeks"}),(0,i.jsx)(r.td,{children:"After six months"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Patch"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"v3.3.11.7"})}),(0,i.jsx)(r.td,{children:"When needed"}),(0,i.jsx)(r.td,{children:"After six months"})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"extended-maintenance-release",children:"Extended Maintenance release"}),"\n",(0,i.jsx)(r.p,{children:"Extended Maintenance (EM) releases provide you with a long-term support Prophecy version, along with the following benefits:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Upgraded third party libraries for robust security posture"}),"\n",(0,i.jsx)(r.li,{children:"Full performance and scale testing to check resource guidance"}),"\n",(0,i.jsx)(r.li,{children:"Direct upgrade path from a previous EM release to the next one"}),"\n",(0,i.jsx)(r.li,{children:"One year of technical support and hotfixes for critical issues"}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"You can expect a new Extended Maintenance release two to six weeks after each Major release."}),"\n",(0,i.jsx)(r.h3,{id:"required-resources",children:"Required resources"}),"\n",(0,i.jsxs)(r.p,{children:["Starting with ",(0,i.jsx)(r.code,{children:"v3.4.1.0 EM"}),", SQL Sandbox is enabled, so every SQL pipeline session will spin up an additional pod with the following configuration:"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"CPU: 500m"}),"\n",(0,i.jsx)(r.li,{children:"Memory: 512Mi"}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["After upgrading to 3.4.1, you must enable SQL Sandbox Config in the UI by navigating to the ",(0,i.jsx)(r.strong,{children:"Sandbox Config"})," tab in the Config sub tab of the Admin Settings."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:'"sqlSandboxPoolSize"'})," must be set to a minimum of ",(0,i.jsx)(r.code,{children:"2"}),". This parameter determines the number of pods that are kept in a ready state. You will need additional SQL Sandbox resources for each simultaneous user session."]}),"\n",(0,i.jsx)(r.h2,{id:"prophecy-support-lifecycles",children:"Prophecy support lifecycles"}),"\n",(0,i.jsxs)(r.p,{children:["The following table describes the support stages for Prophecy versions. Prophecy supports GA versions for six months, unless the version is an Extended Maintenance (EM) release, which Prophecy supports for one year. For information on supported Prophecy versions, see ",(0,i.jsx)(r.a,{href:"/prophecy-docs-staging/preview/pr-618/release_notes/version_chart/",children:"Version Chart"}),"."]}),"\n",(0,i.jsx)(r.p,{children:"Workloads on unsupported Prophecy versions may continue to run, but Prophecy doesn't provide support or fixes."}),"\n",(0,i.jsx)(r.h3,{id:"prophecy-version-lifecycle",children:"Prophecy version lifecycle"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Phase"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"GA, full support for Extended Maintenance releases"}),(0,i.jsx)(r.td,{children:"Critical stability and security fixes are backported only for EM releases."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"End of support"}),(0,i.jsx)(r.td,{children:"If a version is unsupported, then workloads running on these versions receive no Prophecy support."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"End of Life"}),(0,i.jsx)(r.td,{children:"Prophecy reserves the right to completely remove a release version at any time after support ends."})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"prophecy-version",children:"Prophecy version"}),"\n",(0,i.jsx)(r.p,{children:"You can use the Software Version API to retrieve your current Prophecy version number."}),"\n",(0,i.jsx)(r.h3,{id:"software-version-api",children:"Software Version API"}),"\n",(0,i.jsx)(r.p,{children:"Example:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"curl -s 'https://<prophecy-env-url>/athena/api/v1/cluster' | jq -r .current_version.controlplane_version\n"})}),"\n",(0,i.jsx)(r.p,{children:"Response:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"3.4.1.0\n"})})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}}}]);