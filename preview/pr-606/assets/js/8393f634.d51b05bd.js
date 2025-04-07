"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[49829],{28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>d});var o=i(96540);const t={},s=o.createContext(t);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(s.Provider,{value:n},e.children)}},69305:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/turn-off-loop-unrolling-d8b63f2c79514ed80a7b564d1530c9b2.png"},95664:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"extensibility/gem-builder/optimization-functions","title":"Optimization functions","description":"Optimization functions","source":"@site/docs/extensibility/gem-builder/optimization-functions.md","sourceDirName":"extensibility/gem-builder","slug":"/engineers/optimization-functions","permalink":"/prophecy-docs-staging/preview/pr-606/engineers/optimization-functions","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gem builder","permalink":"/prophecy-docs-staging/preview/pr-606/tags/gem-builder"}],"version":"current","frontMatter":{"title":"Optimization functions","id":"optimization-functions","slug":"/engineers/optimization-functions","description":"Optimization functions","tags":["gem builder"]},"sidebar":"mySidebar","previous":{"title":"Reference for Spark","permalink":"/prophecy-docs-staging/preview/pr-606/engineers/gem-builder-reference"}}');var t=i(74848),s=i(28453);const l={title:"Optimization functions",id:"optimization-functions",slug:"/engineers/optimization-functions",description:"Optimization functions",tags:["gem builder"]},d=void 0,a={},c=[{value:"Turn off loop unrolling",id:"turn-off-loop-unrolling",level:2},{value:"Replace variables and optimize objects",id:"replace-variables-and-optimize-objects",level:2},{value:"Disable all optimizations",id:"disable-all-optimizations",level:2}];function r(e){const n={admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Custom gems create code by defining functionality in their ",(0,t.jsx)(n.code,{children:"def apply()"})," method.\nBy default Prophecy will apply optimizations to this generated code to assist the Spark\nCatalyst optimization engine when it creates the Spark Plan. The optimizations make replacements\nusing functionally equivalent code, but in some corner cases this may cause unwanted side effects."]}),"\n",(0,t.jsx)(n.p,{children:"In certain corner cases you may want disable some or all optimizations."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"These functions are Python specific."})}),"\n",(0,t.jsx)(n.h2,{id:"turn-off-loop-unrolling",children:"Turn off loop unrolling"}),"\n",(0,t.jsx)(n.p,{children:"By default Prophecy will unroll small static loops."}),"\n",(0,t.jsxs)(n.p,{children:["You can turn off loop unrolling by adding ",(0,t.jsx)(n.code,{children:"# skipLoopUnRolling"})," as a comment on the same line as the for loop."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Turn off loop unrolling example",src:i(69305).A+"",width:"719",height:"388"})}),"\n",(0,t.jsx)(n.h2,{id:"replace-variables-and-optimize-objects",children:"Replace variables and optimize objects"}),"\n",(0,t.jsx)(n.p,{children:"You can use two functions to disable substitution of variables during the optimization step."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"SubstituteDisabled"})," - Disables the substitution of this variable with the value in all places it's used."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"PostSubstituteDisabled"})," - Only performs optimization substitution if all instances of the variable can be replaced."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'def testLoopUnRoll():\n    myCols: SubstituteDisabled = [\'a\']\n    cond = None\n    for scdCol in myCols:\n        if cond is None:\n            cond = (existingDF[scdCol] != updatesDF[scdCol])\n        else:\n            cond = (cond | (existingDF[scdCol] != updatesDF[scdCol]))\n    stagedUpdatesDF = updatesDF.where((existingDF["current"] == lit("true")) & (cond))\n\n    cols: PostSubstituteDisabled = [\'a\']\n    updateCond = None\n    for scdCol1 in cols:\n        if updateCond is None:\n            updateCond = (existingDF[scdCol1] != updatesDF[scdCol1])\n        else:\n            updateCond = (updateCond | (existingDF[scdCol1] != updatesDF[scdCol1]))\n    updatedDF = updatesDF.where((existingDF["current"] == lit("true")) & (updateCond))\n\n    cols1: PostSubstituteDisabled = [\'a\']\n    updateCond1 = None\n    for scdCol2 in cols1:#skipLoopUnRolling\n        if updateCond is None:\n            updateCond1 = (existingDF[scdCol2] != updatesDF[scdCol2])\n        else:\n            updateCond1 = (updateCond | (existingDF[scdCol2] != updatesDF[scdCol2]))\n    updatedDF1 = updatesDF.where((existingDF["current"] == lit("true")) & (updateCond1))\n'})}),"\n",(0,t.jsx)(n.p,{children:"The previous code sample becomes the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"def testLoopUnRoll():\n    myCols = ['a']\n    cond = None\n\n    for scdCol in myCols:\n        if cond is None:\n            cond = (existingDF[scdCol] != updatesDF[scdCol])\n        else:\n            cond = (cond | (existingDF[scdCol] != updatesDF[scdCol]))\n\n    updateCond = (existingDF['a'] != updatesDF['a'])\n    cols1 = ['a']\n\n    for scdCol2 in cols1:\n        if updateCond is None:\n            updateCond1 = (existingDF[scdCol2] != updatesDF[scdCol2])\n        else:\n            updateCond1 = (updateCond | (existingDF[scdCol2] != updatesDF[scdCol2]))\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["In above code sample, ",(0,t.jsx)(n.code,{children:"SubstituteDisabled"})," (",(0,t.jsx)(n.code,{children:"myCols"}),") did not replace the variable so the entire loop was not optimized."]}),"\n",(0,t.jsxs)(n.li,{children:["In the first occurrence of ",(0,t.jsx)(n.code,{children:"PostSubstituteDisabled"})," (",(0,t.jsx)(n.code,{children:"cols"}),"), all instances of ",(0,t.jsx)(n.code,{children:"cols"})," could be replaced so the original variable was removed."]}),"\n",(0,t.jsxs)(n.li,{children:["In the second occurrence of ",(0,t.jsx)(n.code,{children:"PostSubstituteDisabled"})," (",(0,t.jsx)(n.code,{children:"cols1"}),"), the for loop was marked to skip optimization (",(0,t.jsx)(n.code,{children:"skipLoopUnRolling"}),").\nSince at least one instance of the ",(0,t.jsx)(n.code,{children:"cols1"})," variable was marked to avoid optimization, the variable could not be optimized."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"disable-all-optimizations",children:"Disable all optimizations"}),"\n",(0,t.jsxs)(n.p,{children:["You can turn off all optimizations by setting the optimize function stub to ",(0,t.jsx)(n.code,{children:"False"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"def optimizeCode(self) -> bool:\n        return False\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}}}]);