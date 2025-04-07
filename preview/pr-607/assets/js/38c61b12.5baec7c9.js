"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[65613],{28453:(d,r,e)=>{e.d(r,{R:()=>n,x:()=>c});var s=e(96540);const t={},i=s.createContext(t);function n(d){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof d?d(r):{...r,...d}}),[r,d])}function c(d){let r;return r=d.disableParentContext?"function"==typeof d.components?d.components(t):d.components||t:n(d.components),s.createElement(i.Provider,{value:r},d.children)}},52569:(d,r,e)=>{e.r(r),e.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>j,frontMatter:()=>n,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"release_notes/version_chart/version_chart","title":"Version chart","description":"Prophecy library version chart","source":"@site/docs/release_notes/version_chart/version_chart.md","sourceDirName":"release_notes/version_chart","slug":"/release_notes/version_chart/","permalink":"/prophecy-docs-staging/preview/pr-607/release_notes/version_chart/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"compatibility","permalink":"/prophecy-docs-staging/preview/pr-607/tags/compatibility"},{"inline":true,"label":"matrix","permalink":"/prophecy-docs-staging/preview/pr-607/tags/matrix"},{"inline":true,"label":"version","permalink":"/prophecy-docs-staging/preview/pr-607/tags/version"},{"inline":true,"label":"chart","permalink":"/prophecy-docs-staging/preview/pr-607/tags/chart"},{"inline":true,"label":"library","permalink":"/prophecy-docs-staging/preview/pr-607/tags/library"},{"inline":true,"label":"plib","permalink":"/prophecy-docs-staging/preview/pr-607/tags/plib"},{"inline":true,"label":"plibs","permalink":"/prophecy-docs-staging/preview/pr-607/tags/plibs"}],"version":"current","frontMatter":{"title":"Version chart","id":"version_chart","description":"Prophecy library version chart","tags":["compatibility","matrix","version","chart","library","plib","plibs"]},"sidebar":"mySidebar","previous":{"title":"Release notes","permalink":"/prophecy-docs-staging/preview/pr-607/release_notes/"},"next":{"title":"Prophecy versions support","permalink":"/prophecy-docs-staging/preview/pr-607/release_notes/version_chart/versions_support"}}');var t=e(74848),i=e(28453);const n={title:"Version chart",id:"version_chart",description:"Prophecy library version chart",tags:["compatibility","matrix","version","chart","library","plib","plibs"]},c=void 0,l={},h=[];function x(d){const r={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...d.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"This version chart shows which versions of our standard Prophecy Scala Libraries and Prophecy Python Libraries should be\nused with any given version of the Prophecy product. In general Prophecy strives to be backwards compatible, so\nolder sets of Prophecy Libs should be able to run on a newer version of Prophecy."}),"\n",(0,t.jsx)(r.admonition,{type:"caution",children:(0,t.jsx)(r.p,{children:"Check to make sure the Spark version and Scala version of your Prophecy Scala Libs match the Spark and Scala versions\nof your cluster!"})}),"\n",(0,t.jsxs)(r.p,{children:["You can query this table using the following API and your ",(0,t.jsx)(r.a,{href:"/prophecy-docs-staging/preview/pr-607/getting-help/prophecyAPI",children:"personal access token"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"curl  --header 'X-Auth-Token: $PROPHECY_PAT' --location https://app.prophecy.io/api/editor/plibVersions\n"})}),"\n",(0,t.jsx)(r.admonition,{type:"note",children:(0,t.jsxs)(r.p,{children:["Prophecy versions that are labeled with ",(0,t.jsx)(r.code,{children:"EM"})," are Extended Maintenance releases. For more information, see ",(0,t.jsx)(r.a,{href:"/prophecy-docs-staging/preview/pr-607/release_notes/version_chart/versions_support",children:"Prophecy versions support"}),"."]})}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Prophecy version"}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.a,{href:"https://mvnrepository.com/artifact/io.prophecy/prophecy-libs",children:"Prophecy Scala libs"})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.a,{href:"https://pypi.org/project/prophecy-libs/",children:"Prophecy Python libs"})}),(0,t.jsx)(r.th,{children:"Release Date"}),(0,t.jsx)(r.th,{children:"End-of-support Date"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.4.5.5"}),(0,t.jsx)(r.td,{children:"8.8.2"}),(0,t.jsx)(r.td,{children:"1.9.36"}),(0,t.jsx)(r.td,{children:"2025/03/28"}),(0,t.jsx)(r.td,{children:"2025/09/04"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.4.5.4"}),(0,t.jsx)(r.td,{children:"8.8.2"}),(0,t.jsx)(r.td,{children:"1.9.36"}),(0,t.jsx)(r.td,{children:"2025/03/25"}),(0,t.jsx)(r.td,{children:"2025/09/04"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.4.5.3"}),(0,t.jsx)(r.td,{children:"8.8.2"}),(0,t.jsx)(r.td,{children:"1.9.36"}),(0,t.jsx)(r.td,{children:"2025/03/17"}),(0,t.jsx)(r.td,{children:"2025/09/04"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.4.5.2"}),(0,t.jsx)(r.td,{children:"8.8.2"}),(0,t.jsx)(r.td,{children:"1.9.36"}),(0,t.jsx)(r.td,{children:"2025/03/12"}),(0,t.jsx)(r.td,{children:"2025/09/04"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.4.5.1"}),(0,t.jsx)(r.td,{children:"8.8.2"}),(0,t.jsx)(r.td,{children:"1.9.36"}),(0,t.jsx)(r.td,{children:"2025/03/04"}),(0,t.jsx)(r.td,{children:"2025/09/04"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.4.5.0"}),(0,t.jsx)(r.td,{children:"8.8.2"}),(0,t.jsx)(r.td,{children:"1.9.36"}),(0,t.jsx)(r.td,{children:"2025/03/04"}),(0,t.jsx)(r.td,{children:"2025/09/04"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.4.4.5"}),(0,t.jsx)(r.td,{children:"8.8.2"}),(0,t.jsx)(r.td,{children:"1.9.36"}),(0,t.jsx)(r.td,{children:"2025/03/03"}),(0,t.jsx)(r.td,{children:"2025/08/05"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.4.4.4"}),(0,t.jsx)(r.td,{children:"8.8.2"}),(0,t.jsx)(r.td,{children:"1.9.36"}),(0,t.jsx)(r.td,{children:"2025/02/28"}),(0,t.jsx)(r.td,{children:"2025/08/05"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.4.4.3"}),(0,t.jsx)(r.td,{children:"8.8.1"}),(0,t.jsx)(r.td,{children:"1.9.33"}),(0,t.jsx)(r.td,{children:"2025/02/21"}),(0,t.jsx)(r.td,{children:"2025/08/05"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.4.4.2"}),(0,t.jsx)(r.td,{children:"8.8.1"}),(0,t.jsx)(r.td,{children:"1.9.33"}),(0,t.jsx)(r.td,{children:"2025/02/17"}),(0,t.jsx)(r.td,{children:"2025/08/05"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.4.4.1"}),(0,t.jsx)(r.td,{children:"8.8.1"}),(0,t.jsx)(r.td,{children:"1.9.33"}),(0,t.jsx)(r.td,{children:"2025/02/12"}),(0,t.jsx)(r.td,{children:"2025/08/05"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.4.4.0"}),(0,t.jsx)(r.td,{children:"8.8.0"}),(0,t.jsx)(r.td,{children:"1.9.33"}),(0,t.jsx)(r.td,{children:"2025/02/05"}),(0,t.jsx)(r.td,{children:"2025/08/05"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.4.3.5"}),(0,t.jsx)(r.td,{children:"8.7.1"}),(0,t.jsx)(r.td,{children:"1.9.29"}),(0,t.jsx)(r.td,{children:"2025/01/31"}),(0,t.jsx)(r.td,{children:"2025/07/08"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.4.3.4"}),(0,t.jsx)(r.td,{children:"8.7.1"}),(0,t.jsx)(r.td,{children:"1.9.29"}),(0,t.jsx)(r.td,{children:"2025/01/24"}),(0,t.jsx)(r.td,{children:"2025/07/08"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.4.3.3"}),(0,t.jsx)(r.td,{children:"8.7.1"}),(0,t.jsx)(r.td,{children:"1.9.29"}),(0,t.jsx)(r.td,{children:"2025/01/21"}),(0,t.jsx)(r.td,{children:"2025/07/08"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.4.3.2"}),(0,t.jsx)(r.td,{children:"8.7.1"}),(0,t.jsx)(r.td,{children:"1.9.29"}),(0,t.jsx)(r.td,{children:"2025/01/20"}),(0,t.jsx)(r.td,{children:"2025/07/08"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.4.3.1"}),(0,t.jsx)(r.td,{children:"8.7.0"}),(0,t.jsx)(r.td,{children:"1.9.29"}),(0,t.jsx)(r.td,{children:"2025/01/15"}),(0,t.jsx)(r.td,{children:"2025/07/08"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.4.3.0"}),(0,t.jsx)(r.td,{children:"8.7.0"}),(0,t.jsx)(r.td,{children:"1.9.29"}),(0,t.jsx)(r.td,{children:"2025/01/08"}),(0,t.jsx)(r.td,{children:"2025/07/08"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.4.2.0"}),(0,t.jsx)(r.td,{children:"8.6.0"}),(0,t.jsx)(r.td,{children:"1.9.28"}),(0,t.jsx)(r.td,{children:"2024/12/18"}),(0,t.jsx)(r.td,{children:"2025/06/18"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.4.1.2"}),(0,t.jsx)(r.td,{children:"8.5.0"}),(0,t.jsx)(r.td,{children:"1.9.24"}),(0,t.jsx)(r.td,{children:"2024/12/11"}),(0,t.jsx)(r.td,{children:"2025/06/03"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.4.1.1"}),(0,t.jsx)(r.td,{children:"8.5.0"}),(0,t.jsx)(r.td,{children:"1.9.24"}),(0,t.jsx)(r.td,{children:"2024/12/09"}),(0,t.jsx)(r.td,{children:"2025/06/03"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.4.1.0 EM"}),(0,t.jsx)(r.td,{children:"8.5.0"}),(0,t.jsx)(r.td,{children:"1.9.24"}),(0,t.jsx)(r.td,{children:"2024/12/03"}),(0,t.jsx)(r.td,{children:"2025/12/03"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.4.0.3"}),(0,t.jsx)(r.td,{children:"8.4.0"}),(0,t.jsx)(r.td,{children:"1.9.24"}),(0,t.jsx)(r.td,{children:"2024/11/20"}),(0,t.jsx)(r.td,{children:"2025/04/29"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.4.0.2"}),(0,t.jsx)(r.td,{children:"8.4.0"}),(0,t.jsx)(r.td,{children:"1.9.24"}),(0,t.jsx)(r.td,{children:"2024/11/14"}),(0,t.jsx)(r.td,{children:"2025/04/29"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.4.0.1"}),(0,t.jsx)(r.td,{children:"8.4.0"}),(0,t.jsx)(r.td,{children:"1.9.24"}),(0,t.jsx)(r.td,{children:"2024/11/13"}),(0,t.jsx)(r.td,{children:"2025/04/29"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.4.0.0"}),(0,t.jsx)(r.td,{children:"8.4.0"}),(0,t.jsx)(r.td,{children:"1.9.24"}),(0,t.jsx)(r.td,{children:"2024/10/29"}),(0,t.jsx)(r.td,{children:"2025/04/29"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.11.7"}),(0,t.jsx)(r.td,{children:"8.2.1"}),(0,t.jsx)(r.td,{children:"1.9.16"}),(0,t.jsx)(r.td,{children:"2024/10/24"}),(0,t.jsx)(r.td,{children:"2025/03/20"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.11.6"}),(0,t.jsx)(r.td,{children:"8.2.1"}),(0,t.jsx)(r.td,{children:"1.9.16"}),(0,t.jsx)(r.td,{children:"2024/10/18"}),(0,t.jsx)(r.td,{children:"2025/03/20"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.11.5"}),(0,t.jsx)(r.td,{children:"8.2.1"}),(0,t.jsx)(r.td,{children:"1.9.16"}),(0,t.jsx)(r.td,{children:"2024/10/09"}),(0,t.jsx)(r.td,{children:"2025/03/20"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.11.4"}),(0,t.jsx)(r.td,{children:"8.2.1"}),(0,t.jsx)(r.td,{children:"1.9.16"}),(0,t.jsx)(r.td,{children:"2024/10/01"}),(0,t.jsx)(r.td,{children:"2025/03/20"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.11.3"}),(0,t.jsx)(r.td,{children:"8.2.1"}),(0,t.jsx)(r.td,{children:"1.9.16"}),(0,t.jsx)(r.td,{children:"2024/09/30"}),(0,t.jsx)(r.td,{children:"2025/03/20"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.11.2"}),(0,t.jsx)(r.td,{children:"8.2.1"}),(0,t.jsx)(r.td,{children:"1.9.16"}),(0,t.jsx)(r.td,{children:"2024/09/24"}),(0,t.jsx)(r.td,{children:"2025/03/20"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.11.1"}),(0,t.jsx)(r.td,{children:"8.2.1"}),(0,t.jsx)(r.td,{children:"1.9.16"}),(0,t.jsx)(r.td,{children:"2024/09/20"}),(0,t.jsx)(r.td,{children:"2025/03/20"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.11.0"}),(0,t.jsx)(r.td,{children:"8.2.1"}),(0,t.jsx)(r.td,{children:"1.9.16"}),(0,t.jsx)(r.td,{children:"2024/09/20"}),(0,t.jsx)(r.td,{children:"2025/03/20"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.10.3"}),(0,t.jsx)(r.td,{children:"8.1.8"}),(0,t.jsx)(r.td,{children:"1.9.14"}),(0,t.jsx)(r.td,{children:"2024/09/11"}),(0,t.jsx)(r.td,{children:"2025/03/02"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.10.2"}),(0,t.jsx)(r.td,{children:"8.1.8"}),(0,t.jsx)(r.td,{children:"1.9.14"}),(0,t.jsx)(r.td,{children:"2024/09/06"}),(0,t.jsx)(r.td,{children:"2025/03/02"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.10.1"}),(0,t.jsx)(r.td,{children:"8.1.8"}),(0,t.jsx)(r.td,{children:"1.9.14"}),(0,t.jsx)(r.td,{children:"2024/09/05"}),(0,t.jsx)(r.td,{children:"2025/03/02"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.10.0"}),(0,t.jsx)(r.td,{children:"8.1.4"}),(0,t.jsx)(r.td,{children:"1.9.14"}),(0,t.jsx)(r.td,{children:"2024/09/02"}),(0,t.jsx)(r.td,{children:"2025/03/02"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.9.7"}),(0,t.jsx)(r.td,{children:"8.0.31"}),(0,t.jsx)(r.td,{children:"1.9.9"}),(0,t.jsx)(r.td,{children:"2024/08/28"}),(0,t.jsx)(r.td,{children:"2025/01/22"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.9.6"}),(0,t.jsx)(r.td,{children:"8.0.31"}),(0,t.jsx)(r.td,{children:"1.9.9"}),(0,t.jsx)(r.td,{children:"2024/08/22"}),(0,t.jsx)(r.td,{children:"2025/01/22"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.9.5"}),(0,t.jsx)(r.td,{children:"8.0.31"}),(0,t.jsx)(r.td,{children:"1.9.9"}),(0,t.jsx)(r.td,{children:"2024/08/19"}),(0,t.jsx)(r.td,{children:"2025/01/22"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.9.4"}),(0,t.jsx)(r.td,{children:"8.0.31"}),(0,t.jsx)(r.td,{children:"1.9.9"}),(0,t.jsx)(r.td,{children:"2024/08/15"}),(0,t.jsx)(r.td,{children:"2025/01/22"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.9.3"}),(0,t.jsx)(r.td,{children:"8.0.31"}),(0,t.jsx)(r.td,{children:"1.9.9"}),(0,t.jsx)(r.td,{children:"2024/08/13"}),(0,t.jsx)(r.td,{children:"2025/01/22"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.9.2"}),(0,t.jsx)(r.td,{children:"8.0.31"}),(0,t.jsx)(r.td,{children:"1.9.9"}),(0,t.jsx)(r.td,{children:"2024/08/13"}),(0,t.jsx)(r.td,{children:"2025/01/22"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.8.7"}),(0,t.jsx)(r.td,{children:"8.0.29"}),(0,t.jsx)(r.td,{children:"1.9.9"}),(0,t.jsx)(r.td,{children:"2024/08/02"}),(0,t.jsx)(r.td,{children:"2025/01/08"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.9.1"}),(0,t.jsx)(r.td,{children:"8.0.29"}),(0,t.jsx)(r.td,{children:"1.9.9"}),(0,t.jsx)(r.td,{children:"2024/07/29"}),(0,t.jsx)(r.td,{children:"2025/01/22"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.8.6"}),(0,t.jsx)(r.td,{children:"8.0.29"}),(0,t.jsx)(r.td,{children:"1.9.9"}),(0,t.jsx)(r.td,{children:"2024/07/29"}),(0,t.jsx)(r.td,{children:"2025/01/08"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.8.5"}),(0,t.jsx)(r.td,{children:"8.0.29"}),(0,t.jsx)(r.td,{children:"1.9.9"}),(0,t.jsx)(r.td,{children:"2024/07/23"}),(0,t.jsx)(r.td,{children:"2025/01/08"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.9.0"}),(0,t.jsx)(r.td,{children:"8.0.29"}),(0,t.jsx)(r.td,{children:"1.9.9"}),(0,t.jsx)(r.td,{children:"2024/07/22"}),(0,t.jsx)(r.td,{children:"2025/01/22"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.8.4"}),(0,t.jsx)(r.td,{children:"8.0.29"}),(0,t.jsx)(r.td,{children:"1.9.9"}),(0,t.jsx)(r.td,{children:"2024/07/22"}),(0,t.jsx)(r.td,{children:"2025/01/08"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.8.3"}),(0,t.jsx)(r.td,{children:"8.0.29"}),(0,t.jsx)(r.td,{children:"1.9.9"}),(0,t.jsx)(r.td,{children:"2024/07/17"}),(0,t.jsx)(r.td,{children:"2025/01/08"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.8.2"}),(0,t.jsx)(r.td,{children:"8.0.29"}),(0,t.jsx)(r.td,{children:"1.9.9"}),(0,t.jsx)(r.td,{children:"2024/07/16"}),(0,t.jsx)(r.td,{children:"2025/01/08"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.8.1"}),(0,t.jsx)(r.td,{children:"8.0.25"}),(0,t.jsx)(r.td,{children:"1.9.9"}),(0,t.jsx)(r.td,{children:"2024/07/10"}),(0,t.jsx)(r.td,{children:"2025/01/08"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.8.0"}),(0,t.jsx)(r.td,{children:"8.0.23"}),(0,t.jsx)(r.td,{children:"1.9.9"}),(0,t.jsx)(r.td,{children:"2024/07/08"}),(0,t.jsx)(r.td,{children:"2025/01/08"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.7.13"}),(0,t.jsx)(r.td,{children:"8.0.11-1"}),(0,t.jsx)(r.td,{children:"1.9.7"}),(0,t.jsx)(r.td,{children:"2024/07/05"}),(0,t.jsx)(r.td,{children:"2024/12/10"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.7.12"}),(0,t.jsx)(r.td,{children:"8.0.11-1"}),(0,t.jsx)(r.td,{children:"1.9.7"}),(0,t.jsx)(r.td,{children:"2024/07/04"}),(0,t.jsx)(r.td,{children:"2024/12/10"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.7.11"}),(0,t.jsx)(r.td,{children:"8.0.11-1"}),(0,t.jsx)(r.td,{children:"1.9.5"}),(0,t.jsx)(r.td,{children:"2024/07/03"}),(0,t.jsx)(r.td,{children:"2024/12/10"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.7.10"}),(0,t.jsx)(r.td,{children:"8.0.11"}),(0,t.jsx)(r.td,{children:"1.9.5"}),(0,t.jsx)(r.td,{children:"2024/07/01"}),(0,t.jsx)(r.td,{children:"2024/12/10"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.7.9"}),(0,t.jsx)(r.td,{children:"8.0.11"}),(0,t.jsx)(r.td,{children:"1.9.5"}),(0,t.jsx)(r.td,{children:"2024/06/28"}),(0,t.jsx)(r.td,{children:"2024/12/10"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.7.8"}),(0,t.jsx)(r.td,{children:"8.0.11"}),(0,t.jsx)(r.td,{children:"1.9.5"}),(0,t.jsx)(r.td,{children:"2024/06/27"}),(0,t.jsx)(r.td,{children:"2024/12/10"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.7.7"}),(0,t.jsx)(r.td,{children:"8.0.11"}),(0,t.jsx)(r.td,{children:"1.9.5"}),(0,t.jsx)(r.td,{children:"2024/06/24"}),(0,t.jsx)(r.td,{children:"2024/12/10"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.7.6"}),(0,t.jsx)(r.td,{children:"8.0.11"}),(0,t.jsx)(r.td,{children:"1.9.5"}),(0,t.jsx)(r.td,{children:"2024/06/21"}),(0,t.jsx)(r.td,{children:"2024/12/10"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.7.5"}),(0,t.jsx)(r.td,{children:"8.0.11"}),(0,t.jsx)(r.td,{children:"1.9.5"}),(0,t.jsx)(r.td,{children:"2024/06/20"}),(0,t.jsx)(r.td,{children:"2024/12/10"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.7.4"}),(0,t.jsx)(r.td,{children:"8.0.11"}),(0,t.jsx)(r.td,{children:"1.9.5"}),(0,t.jsx)(r.td,{children:"2024/06/19"}),(0,t.jsx)(r.td,{children:"2024/12/10"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.7.3"}),(0,t.jsx)(r.td,{children:"8.0.11"}),(0,t.jsx)(r.td,{children:"1.9.5"}),(0,t.jsx)(r.td,{children:"2024/06/14"}),(0,t.jsx)(r.td,{children:"2024/12/10"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.7.2"}),(0,t.jsx)(r.td,{children:"8.0.11"}),(0,t.jsx)(r.td,{children:"1.9.5"}),(0,t.jsx)(r.td,{children:"2024/06/12"}),(0,t.jsx)(r.td,{children:"2024/12/10"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.7.0"}),(0,t.jsx)(r.td,{children:"8.0.5"}),(0,t.jsx)(r.td,{children:"1.9.4"}),(0,t.jsx)(r.td,{children:"2024/06/10"}),(0,t.jsx)(r.td,{children:"2024/12/10"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.6.3"}),(0,t.jsx)(r.td,{children:"7.1.102"}),(0,t.jsx)(r.td,{children:"1.8.19"}),(0,t.jsx)(r.td,{children:"2024/06/06"}),(0,t.jsx)(r.td,{children:"2024/11/21"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.6.2"}),(0,t.jsx)(r.td,{children:"7.1.102"}),(0,t.jsx)(r.td,{children:"1.8.19"}),(0,t.jsx)(r.td,{children:"2024/06/04"}),(0,t.jsx)(r.td,{children:"2024/11/21"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.6.1"}),(0,t.jsx)(r.td,{children:"7.1.102"}),(0,t.jsx)(r.td,{children:"1.8.19"}),(0,t.jsx)(r.td,{children:"2024/05/27"}),(0,t.jsx)(r.td,{children:"2024/11/21"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.6.0"}),(0,t.jsx)(r.td,{children:"7.1.97"}),(0,t.jsx)(r.td,{children:"1.8.19"}),(0,t.jsx)(r.td,{children:"2024/05/21"}),(0,t.jsx)(r.td,{children:"2024/11/21"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.5.7"}),(0,t.jsx)(r.td,{children:"7.1.96"}),(0,t.jsx)(r.td,{children:"1.8.15"}),(0,t.jsx)(r.td,{children:"2024/05/17"}),(0,t.jsx)(r.td,{children:"2024/10/30"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.5.6"}),(0,t.jsx)(r.td,{children:"7.1.96"}),(0,t.jsx)(r.td,{children:"1.8.15"}),(0,t.jsx)(r.td,{children:"2024/05/13"}),(0,t.jsx)(r.td,{children:"2024/10/30"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.5.5"}),(0,t.jsx)(r.td,{children:"7.1.95"}),(0,t.jsx)(r.td,{children:"1.8.15"}),(0,t.jsx)(r.td,{children:"2024/05/10"}),(0,t.jsx)(r.td,{children:"2024/10/30"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.5.4"}),(0,t.jsx)(r.td,{children:"7.1.95"}),(0,t.jsx)(r.td,{children:"1.8.15"}),(0,t.jsx)(r.td,{children:"2024/05/09"}),(0,t.jsx)(r.td,{children:"2024/10/30"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.5.3"}),(0,t.jsx)(r.td,{children:"7.1.95"}),(0,t.jsx)(r.td,{children:"1.8.15"}),(0,t.jsx)(r.td,{children:"2024/05/07"}),(0,t.jsx)(r.td,{children:"2024/10/30"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.5.2"}),(0,t.jsx)(r.td,{children:"7.1.95"}),(0,t.jsx)(r.td,{children:"1.8.15"}),(0,t.jsx)(r.td,{children:"2024/05/06"}),(0,t.jsx)(r.td,{children:"2024/10/30"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.5.1"}),(0,t.jsx)(r.td,{children:"7.1.93"}),(0,t.jsx)(r.td,{children:"1.8.15"}),(0,t.jsx)(r.td,{children:"2024/05/06"}),(0,t.jsx)(r.td,{children:"2024/10/30"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.5.0"}),(0,t.jsx)(r.td,{children:"7.1.93"}),(0,t.jsx)(r.td,{children:"1.8.15"}),(0,t.jsx)(r.td,{children:"2024/04/30"}),(0,t.jsx)(r.td,{children:"2024/10/30"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.4.2"}),(0,t.jsx)(r.td,{children:"7.1.88"}),(0,t.jsx)(r.td,{children:"1.8.15"}),(0,t.jsx)(r.td,{children:"2024/04/17"}),(0,t.jsx)(r.td,{children:"2024/10/13"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.4.1"}),(0,t.jsx)(r.td,{children:"7.1.88"}),(0,t.jsx)(r.td,{children:"1.8.15"}),(0,t.jsx)(r.td,{children:"2024/04/15"}),(0,t.jsx)(r.td,{children:"2024/10/13"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.4.0"}),(0,t.jsx)(r.td,{children:"7.1.88"}),(0,t.jsx)(r.td,{children:"1.8.15"}),(0,t.jsx)(r.td,{children:"2024/04/13"}),(0,t.jsx)(r.td,{children:"2024/10/13"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.3.2"}),(0,t.jsx)(r.td,{children:"7.1.83"}),(0,t.jsx)(r.td,{children:"1.8.13"}),(0,t.jsx)(r.td,{children:"2024/04/10"}),(0,t.jsx)(r.td,{children:"2024/10/01"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.3.1"}),(0,t.jsx)(r.td,{children:"7.1.83"}),(0,t.jsx)(r.td,{children:"1.8.13"}),(0,t.jsx)(r.td,{children:"2024/04/03"}),(0,t.jsx)(r.td,{children:"2024/10/01"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.3.0"}),(0,t.jsx)(r.td,{children:"7.1.82"}),(0,t.jsx)(r.td,{children:"1.8.13"}),(0,t.jsx)(r.td,{children:"2024/04/01"}),(0,t.jsx)(r.td,{children:"2024/10/01"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.2.4"}),(0,t.jsx)(r.td,{children:"7.1.83"}),(0,t.jsx)(r.td,{children:"1.8.12"}),(0,t.jsx)(r.td,{children:"2024/03/27"}),(0,t.jsx)(r.td,{children:"2024/09/14"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.2.3"}),(0,t.jsx)(r.td,{children:"7.1.79"}),(0,t.jsx)(r.td,{children:"1.8.12"}),(0,t.jsx)(r.td,{children:"2024/03/26"}),(0,t.jsx)(r.td,{children:"2024/09/14"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.2.2"}),(0,t.jsx)(r.td,{children:"7.1.79"}),(0,t.jsx)(r.td,{children:"1.8.12"}),(0,t.jsx)(r.td,{children:"2024/03/21"}),(0,t.jsx)(r.td,{children:"2024/09/14"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.2.1"}),(0,t.jsx)(r.td,{children:"7.1.79"}),(0,t.jsx)(r.td,{children:"1.8.9"}),(0,t.jsx)(r.td,{children:"2024/03/15"}),(0,t.jsx)(r.td,{children:"2024/09/14"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.2.0"}),(0,t.jsx)(r.td,{children:"7.1.79"}),(0,t.jsx)(r.td,{children:"1.8.9"}),(0,t.jsx)(r.td,{children:"2024/03/14"}),(0,t.jsx)(r.td,{children:"2024/09/14"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.1.3"}),(0,t.jsx)(r.td,{children:"7.1.72-1"}),(0,t.jsx)(r.td,{children:"1.8.7"}),(0,t.jsx)(r.td,{children:"2024/03/08"}),(0,t.jsx)(r.td,{children:"2024/08/28"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.1.2"}),(0,t.jsx)(r.td,{children:"7.1.72-1"}),(0,t.jsx)(r.td,{children:"1.8.7"}),(0,t.jsx)(r.td,{children:"2024/03/07"}),(0,t.jsx)(r.td,{children:"2024/08/28"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"v3.3.1.1"}),(0,t.jsx)(r.td,{children:"7.1.72"}),(0,t.jsx)(r.td,{children:"1.8.7"}),(0,t.jsx)(r.td,{children:"2024/03/05"}),(0,t.jsx)(r.td,{children:"2024/08/28"})]})]})]})]})}function j(d={}){const{wrapper:r}={...(0,i.R)(),...d.components};return r?(0,t.jsx)(r,{...d,children:(0,t.jsx)(x,{...d})}):x(d)}}}]);