"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[82504],{13868:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"type":"mdx","permalink":"/prophecy-docs-staging/preview/pr-610/mdapi/inputs","source":"@site/src/pages/mdapi/inputs.md","title":"Prophecy Metadata API Inputs","description":"Metadata API Inputs","frontMatter":{"title":"Prophecy Metadata API Inputs","id":"mdapi-inputs","description":"Metadata API Inputs","tags":[]},"unlisted":false}');var r=e(74848),o=e(28453);const c={title:"Prophecy Metadata API Inputs",id:"mdapi-inputs",description:"Metadata API Inputs",tags:[]},s=void 0,a={},l=[{value:"FilterContextInput",id:"filtercontextinput",level:2},{value:"PaginationContext",id:"paginationcontext",level:2},{value:"AspectQuery",id:"aspectquery",level:2},{value:"AuthorizationContext",id:"authorizationcontext",level:2},{value:"executionMetricsArg",id:"executionmetricsarg",level:2},{value:"entityConflicts",id:"entityconflicts",level:2},{value:"projectConflicts",id:"projectconflicts",level:2}];function d(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"filtercontextinput",children:"FilterContextInput"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'input FilterContextInput{\n    "selectionType"\n    sectionType: SectionType!,\n\n    "ids"\n    ids: [String!]!\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"paginationcontext",children:"PaginationContext"}),"\n",(0,r.jsx)(t.p,{children:"PageContext"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'input PaginationContext{\n    "page"\n    page:Int!,\n\n    "pageSize"\n    pageSize:Int!\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"aspectquery",children:"AspectQuery"}),"\n",(0,r.jsx)(t.p,{children:"Arguments to fetch versioned aspect"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'input AspectQuery {\n    "Aspect Kind"\n    aspect: AspectKind!\n\n    "Optional. Aspect version to fetch. Latest version is fetched by default."\n    version: String\n\n    "Optional. Files to fetch. All files in latest version is fetched by default."\n    files: [String!]\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"authorizationcontext",children:"AuthorizationContext"}),"\n",(0,r.jsx)(t.p,{children:"AuthorizationContext"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"input AuthorizationContext{\n    authEntityKind:EntityKind!\n    authEntityId:String!\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"executionmetricsarg",children:"executionMetricsArg"}),"\n",(0,r.jsx)(t.p,{children:"ExecutionMetrics Input Type"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'input executionMetricsArg {\n\n    "Pipeline metrics table fully qualified name"\n    pipelineMetricsTable: String\n\n    "Component metrics table fully qualified name"\n    componentMetricsTable: String\n\n    "Interims table fully qualified name"\n    interimsTable: String\n\n    "Whether metrics are enabled by default for all projects of this team"\n    enabled: Boolean!\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"entityconflicts",children:"entityConflicts"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'input entityConflicts {\n    "Entity Kind"\n    entityKind: EntityKind!\n\n    "Entity Id"\n    entityId: String!\n\n    "Entity Name"\n    entityName: String!\n\n    "Resolution Strategy"\n    strategy: ResolutionStrategy!\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"projectconflicts",children:"projectConflicts"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"input projectConflicts {\n\n    key: String!\n\n    displayKey: String!\n\n    leftValue: String!\n\n    rightValue: String!\n\n    strategy: ResolutionStrategy!\n}\n"})})]})}function p(n={}){const{wrapper:t}={...(0,o.R)(),...n.components};return t?(0,r.jsx)(t,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},28453:(n,t,e)=>{e.d(t,{R:()=>c,x:()=>s});var i=e(96540);const r={},o=i.createContext(r);function c(n){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(o.Provider,{value:t},n.children)}}}]);