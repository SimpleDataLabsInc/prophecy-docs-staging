"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[14481],{28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}},30314:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/example-pipelines-f83d2b2568a7423365028a62a77f0105.png"},56918:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/code-generation-steps-afd7cbee700117f4e4d0f989460c6201.png"},76935:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"type":"mdx","permalink":"/prophecy-docs-staging/preview/pr-610/prophecy-ir","source":"@site/src/pages/prophecy-ir.md","title":"Prophecy IR","description":"Hidden page describing the Prophecy IR and how to generate the Prophecy pipelines using an API","frontMatter":{"title":"Prophecy IR","id":"prophecy-ir","description":"Hidden page describing the Prophecy IR and how to generate the Prophecy pipelines using an API","hide_table_of_contents":false,"tags":["prophecy","internal representation"]},"unlisted":false}');var i=t(74848),o=t(28453);const r={title:"Prophecy IR",id:"prophecy-ir",description:"Hidden page describing the Prophecy IR and how to generate the Prophecy pipelines using an API",hide_table_of_contents:!1,tags:["prophecy","internal representation"]},a=void 0,p={},l=[{value:"Prophecy IR",id:"prophecy-ir",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Prophecy IR format",id:"prophecy-ir-format",level:3},{value:"Visual Representation",id:"visual-representation",level:4},{value:"workflow.latest.json",id:"workflowlatestjson",level:4},{value:"Complete example",id:"complete-example",level:3}];function c(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"prophecy-ir",children:"Prophecy IR"}),"\n",(0,i.jsx)(n.h3,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"This page describes how to generate the Prophecy pipelines programmatically. Prophecy generates code directly based on\nthe Prophecy IR representation. Prophecy IR is the Prophecy internal representation format the generically describes\nthe Prophecy PySpark, Spark, and SQL pipelines and expressions."}),"\n",(0,i.jsx)(n.admonition,{title:"Beta",type:"caution",children:(0,i.jsx)(n.p,{children:"This documentation is only accessible to a select subset of design customers and is subject to change."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Code Generation Steps",src:t(56918).A+"",width:"3200",height:"1696"})}),"\n",(0,i.jsx)(n.p,{children:"The Prophecy IR lifecycle follows the following steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Read Prophecy IR"})," - Prophecy IR stores the current visual state of the pipeline as a\nserialized ",(0,i.jsx)(n.code,{children:"workflow.latest.json"})," file. This file is stored on a Git repository, alongside the generated code.\nProphecy IR reads the state file, parses and validates it."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Read available gems"})," - Prophecy reads available gems specifications and validates the state file against them."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Visualize pipeline"})," - Prophecy visualizes the pipeline on the Prophecy IDE, based on the loaded state and gem\nspecifications."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Generate code"})," - After the pipeline is successfully visualized, Prophecy saves the pipelines code on the Git\nrepository."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"prophecy-ir-format",children:"Prophecy IR format"}),"\n",(0,i.jsx)(n.h4,{id:"visual-representation",children:"Visual Representation"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Simple pipeline",src:t(84379).A+"",width:"2884",height:"1642"})}),"\n",(0,i.jsx)(n.h4,{id:"workflowlatestjson",children:"workflow.latest.json"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:"lines",children:'{\n  "metainfo": {\n    // Pipeline id in the format {project_id}/{repository_path}\n    "id" : "826/pipelines/customers_orders",\n    // backend language name (scala, python, or sql)\n    "language" : "scala",\n    // expressions language type (scala, python, or sql)\n    "frontEndLanguage" : "sql",\n    // functions definitions and configurations\n    "udfs" : { "language" : "scala", "udfs" : [ ... ] },\n    "udafs" : { "language" : "scala", "code" : "..." },\n    "configuration" : { },\n    // spark configurations\n    "sparkConf" : [ ],\n    "hadoopConf" : [ ],\n    // default build system\n    "buildSystem" : "maven",\n    // dependencies\n    "externalDependencies" : [ ],\n    // metrics settings\n    "isImported" : false,\n    "interimMode" : "Full",\n    "interimModeEnabled" : true,\n    "visualCodeInterimMode" : "Disabled",\n    "recordsLimit" : {\n      "enabled" : false,\n      "value" : 1000\n    }\n  },\n  // definitions of connections between the components\n  "connections" : [\n      { "id" : "1", "source" : "source_id", "sourcePort" : "source_output", "target" : "reformat_id", "targetPort" : "reformat_input" },\n      { "id" : "1", "source" : "reformat_id", "sourcePort" : "reformat_output", "target" : "target_id", "targetPort" : "target_input" }\n  ],\n  // instances of gems\n  "processes" : {\n    // each gem instance is composed of:\n    "source_id" : {\n      // 1. unique id\n      "id" : "source_id",\n      // 2. type of the gem\n      "component" : "Source",\n      // 3. gem descriptions and position\n      "metadata" : { "label" : "Customers", "slug" : "Customers", "x" : 120, "y" : 320, /* ... */ },\n      // 4. definition of inputs and outputs\n      "ports" : { "inputs" : [ ], "outputs" : [ { "id" : "source_output", "slug" : "out" } ] },\n      // 5. properties describing the data source (for Source / Target only)\n      "properties" : { "datasetId" : "826/datasets/customers" }\n    },\n    "target_id" : {\n      "id" : "target_id",\n      "component" : "Target",\n      "metadata" : { "label" : "CustomersCleaned", "slug" : "CustomersCleaned", "x" : 1370, "y" : 220 },\n      "ports" : { "inputs" : [ { "id" : "target_input", "slug" : "in" } ], "outputs" : [ ], /* ... */ },\n      "properties" : { "datasetId" : "826/datasets/customers_cleaned" }\n    },\n    "reformat_id" : {\n      "id" : "reformat_id",\n      "component" : "Reformat",\n      "metadata" : { "label" : "Cleanup", "slug" : "Cleanup", "x" : 565, "y" : 220, /* ... */ },\n      "ports" : { "inputs" : [ { "id" : "reformat_input", "slug" : "in" } ], "outputs" : [ { "id" : "reformat_output", "slug" : "out" } ] /* ... */ },\n      // 6. properties describing the transformation logic\n      "properties" : {\n         /* ... */\n        "expressions" : [ {\n          "target" : "account_length_days",\n          "expression" : { "format" : "sql", "expression" : "datediff(current_date(), account_open_date)" },\n          "description" : ""\n        } ]\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"complete-example",children:"Complete example"}),"\n",(0,i.jsxs)(n.p,{children:["For a complete example open any of the ",(0,i.jsx)(n.code,{children:"workflow.latest.json"}),"'s of the default pipelines in the HelloWorld project!"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Example pipelines",src:t(30314).A+"",width:"1467",height:"449"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},84379:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/simple-pipeline-a8440736c3a001b976b009f34a798a74.png"}}]);