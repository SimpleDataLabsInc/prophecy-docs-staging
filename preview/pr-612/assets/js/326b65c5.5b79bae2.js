"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[10735],{28453:(e,t,l)=>{l.d(t,{R:()=>r,x:()=>a});var n=l(96540);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}},40364:(e,t,l)=>{l.r(t),l.d(t,{ImageData:()=>y,assets:()=>u,contentTitle:()=>p,default:()=>b,frontMatter:()=>g,metadata:()=>n,toc:()=>m});const n=JSON.parse('{"id":"Spark/gems/join-split/join","title":"Join","description":"Join one or more DataFrames on conditions","source":"@site/docs/Spark/gems/join-split/join.md","sourceDirName":"Spark/gems/join-split","slug":"/engineers/join","permalink":"/prophecy-docs-staging/preview/pr-612/engineers/join","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-612/tags/gems"},{"inline":true,"label":"join","permalink":"/prophecy-docs-staging/preview/pr-612/tags/join"},{"inline":true,"label":"inner","permalink":"/prophecy-docs-staging/preview/pr-612/tags/inner"},{"inline":true,"label":"outer","permalink":"/prophecy-docs-staging/preview/pr-612/tags/outer"},{"inline":true,"label":"left join","permalink":"/prophecy-docs-staging/preview/pr-612/tags/left-join"},{"inline":true,"label":"right join","permalink":"/prophecy-docs-staging/preview/pr-612/tags/right-join"},{"inline":true,"label":"hints","permalink":"/prophecy-docs-staging/preview/pr-612/tags/hints"},{"inline":true,"label":"merge","permalink":"/prophecy-docs-staging/preview/pr-612/tags/merge"}],"version":"current","frontMatter":{"title":"Join","id":"join","slug":"/engineers/join","description":"Join one or more DataFrames on conditions","tags":["gems","join","inner","outer","left join","right join","hints","merge"]},"sidebar":"mySidebar","previous":{"title":"CompareColumns","permalink":"/prophecy-docs-staging/preview/pr-612/engineers/compare-columns"},"next":{"title":"Repartition","permalink":"/prophecy-docs-staging/preview/pr-612/engineers/repartition"}}');var i=l(74848),s=l(28453),r=l(49235),a=l(65537),d=l(79329),c=l(96540),h=l(29030);const o=e=>{let{children:t}=e;return(0,i.jsx)("div",{style:{position:"relative",display:"flex","justify-content":"center","align-items":"center"},children:t})},x=e=>{let{source:t,children:l}=e;return(0,i.jsx)("img",{src:(0,h.Ay)(t),style:{"object-fit":"cover"}})},j=e=>{let{slides:t}=e;const[l,n]=(0,c.useState)(0);return(0,i.jsxs)(o,{children:[(0,i.jsx)("i",{class:"fa fa-chevron-left",onClick:()=>{n(0===l?t.length-1:l-1)},style:{position:"absolute",top:"50%",left:"0px","font-size":"2rem"}}),(0,i.jsx)("i",{class:"fa fa-chevron-right",onClick:()=>{n(l===t.length-1?0:l+1)},style:{position:"absolute",top:"50%",right:"0px","font-size":"2rem"}}),(0,i.jsxs)("div",{style:{padding:"30px"},children:[(0,i.jsx)(x,{source:t[l].image}),t[l].description]})]})};function f(e){let{ImageData:t}=e;return(0,i.jsx)(j,{slides:t,style:{"font-family":" sans-serif","text-align":"center"}})}const g={title:"Join",id:"join",slug:"/engineers/join",description:"Join one or more DataFrames on conditions",tags:["gems","join","inner","outer","left join","right join","hints","merge"]},p=void 0,u={},y=[{image:"/img/join/join-eg3-conditions.png",description:(0,i.jsx)("h3",{style:{padding:"10px"},children:"Step 1 - Specify join condition"})},{image:"/img/join/join-eg3-expressions.png",description:(0,i.jsx)("h3",{style:{padding:"10px"},children:"Step 2 - Choose required columns from dataframe"})},{image:"/img/join/join-eg3-advanced.png",description:(0,i.jsx)("h3",{style:{padding:"10px"},children:"Step 3 - Select Propagate all columns from in0"})},{image:"/img/join/join-eg3-output.png",description:(0,i.jsx)("h3",{style:{padding:"10px"},children:"Output - Output with all columns from in0 and selected columns from in1"})}],m=[{value:"Parameters",id:"parameters",level:2},{value:"Adding a new input",id:"adding-a-new-input",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1 - Join with three DataFrame inputs",id:"example-1---join-with-three-dataframe-inputs",level:3},{value:"Example 2 - Join with Hints",id:"example-2---join-with-hints",level:3},{value:"Example 3 - Join with Propagate Columns",id:"example-3---join-with-propagate-columns",level:3},{value:"Types of Join",id:"types-of-join",level:2},{value:"Table A",id:"table-a",level:3},{value:"Table B",id:"table-b",level:3},{value:"INNER JOIN",id:"inner-join",level:3},{value:"LEFT JOIN",id:"left-join",level:3},{value:"RIGHT JOIN",id:"right-join",level:3},{value:"FULL OUTER JOIN",id:"full-outer-join",level:3},{value:"LEFT SEMI JOIN",id:"left-semi-join",level:3},{value:"LEFT ANTI JOIN",id:"left-anti-join",level:3}];function A(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.0.1+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"3.0.1+"}),"\n",(0,i.jsx)(t.p,{children:"Joins 2 or more DataFrames based on the given configuration."}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Required"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"DataFrame 1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"First input DataFrame"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"DataFrame 2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Second input DataFrame"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"DataFrame N"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Nth input DataFrame"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Join Condition (Conditions tab)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The join condition specifies how the rows will be combined."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Type (Conditions tab)"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["The type of JOIN ",(0,i.jsx)(t.code,{children:"(Inner, Full Outer, Left , Right , Left Semi, Left Anti)"})]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Where Clause (Conditions tab)"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"Filter"})," applied after the Join operation"]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Target column (Expressions)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Output column name"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Expression (Expressions)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Expression to compute target column. If no expression is given, then all columns from all DataFrames would reflect in output."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Hint Type (Advanced)"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["The type of Join Hint (",(0,i.jsx)(t.code,{children:"Broadcast"}),", ",(0,i.jsx)(t.code,{children:"Merge"}),", ",(0,i.jsx)(t.code,{children:"Shuffle Hash"}),", ",(0,i.jsx)(t.code,{children:"Shuffle Replicate NL"})," or ",(0,i.jsx)(t.code,{children:"None"}),"). To read more about join hints ",(0,i.jsx)(t.a,{href:"https://developpaper.com/analysis-of-five-join-strategies-of-spark/",children:"click here"})]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Propagate All Columns (Advanced)"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["If ",(0,i.jsx)(t.code,{children:"true"}),", all columns from that DataFrame would be propagated to output DataFrame. Equivalent to selecting ",(0,i.jsx)(t.code,{children:"df.*"})," for the selected DataFrame."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"False"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"adding-a-new-input",children:"Adding a new input"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Click on the plus icon to add a new input."}),"\n",(0,i.jsxs)(t.li,{children:["Then add your condition expression for the newly added input.\n",(0,i.jsx)(t.img,{alt:"Example usage of Join - Add new input to join gem",src:l(92826).A+"",width:"1616",height:"802"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.h3,{id:"example-1---join-with-three-dataframe-inputs",children:"Example 1 - Join with three DataFrame inputs"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Example usage of Join - Join three DataFrame inputs",src:l(87303).A+"",width:"1618",height:"806"})}),"\n","\n",(0,i.jsxs)(a.A,{children:[(0,i.jsx)(d.A,{value:"py",label:"Python",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-py",children:'def Join_1(spark: SparkSession, in0: DataFrame) -> DataFrame:\n        return in0\\\n        .alias("in0")\\\n        .join(in1.alias("in1"), (col("in0.customer_id") == col("in1.customer_id")), "inner")\\\n        .join(in2.alias("in2"), (col("in1.customer_id") == col("in2.customer_id")), "inner")\n'})})}),(0,i.jsx)(d.A,{value:"scala",label:"Scala",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-scala",children:'object Join_1 {\n   def apply(spark: SparkSession, in0: DataFrame, in1: DataFrame, in2: DataFrame): DataFrame =\n    in0\n      .as("in0")\n      .join(in1.as("in1"), col("in0.customer_id") === col("in1.customer_id"), "inner")\n      .join(in2.as("in2"), col("in1.customer_id") === col("in2.customer_id"), "inner")\n}\n'})})})]}),"\n",(0,i.jsx)(t.h3,{id:"example-2---join-with-hints",children:"Example 2 - Join with Hints"}),"\n",(0,i.jsxs)(t.p,{children:["Join hints allow users to suggest the join strategy that Spark should use. For a quick overview, see Spark's Join Hints ",(0,i.jsx)(t.a,{href:"https://spark.apache.org/docs/3.0.0/sql-ref-syntax-qry-select-hints.html#join-hints",children:"documentation"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Example usage of Join - Join with hints",src:l(68065).A+"",width:"1644",height:"668"})}),"\n",(0,i.jsxs)(a.A,{children:[(0,i.jsx)(d.A,{value:"py",label:"Python",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-py",children:'def Join_1(spark: SparkSession, in0: DataFrame, in1: DataFrame, in2: DataFrame) -> DataFrame:\n    df1 = in1.hint("merge")\n\n    return in0\\\n        .alias("in0")\\\n        .hint("broadcast")\\\n        .join(df1.alias("in1"), col("in0.customer_id") == col("in1.customer_id"), "inner")\\\n        .join(in2.alias("in2"), col("in0.customer_id") == col("in1.customer_id"), "inner")\n'})})}),(0,i.jsx)(d.A,{value:"scala",label:"Scala",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-scala",children:'object Join_1 {\n   def apply(spark: SparkSession, in0: DataFrame, in1: DataFrame, in2: DataFrame): DataFrame =\n    in0\n      .as("in0")\n      .hint("broadcast")\n      .join(in1.as("in1").hint("merge"), col("in0.customer_id") === col("in1.customer_id"), "inner")\n      .join(in2.as("in2"),               col("in1.customer_id") === col("in2.customer_id"), "inner")\n}\n'})})})]}),"\n",(0,i.jsx)(t.h3,{id:"example-3---join-with-propagate-columns",children:"Example 3 - Join with Propagate Columns"}),"\n","\n","\n",(0,i.jsx)(f,{ImageData:y}),"\n",(0,i.jsxs)(a.A,{children:[(0,i.jsx)(d.A,{value:"py",label:"Python",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-py",children:'def Join_1(spark: SparkSession, in0: DataFrame, in1: DataFrame, ) -> DataFrame:\n    return in0\\\n        .alias("in0")\\\n        .join(in1.alias("in1"), (col("in0.customer_id") == col("in1.customer_id")), "inner")\\\n        .select(*[col("in1.email").alias("email"), col("in1.phone").alias("phone")], col("in0.*"))\n'})})}),(0,i.jsx)(d.A,{value:"scala",label:"Scala",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-scala",children:'object Join_1 {\n\n  def apply(spark: SparkSession, in0: DataFrame, in1: DataFrame): DataFrame =\n    in0\n      .as("in0")\n      .join(in1.as("in1"), col("in0.customer_id") === col("in1.customer_id"), "inner")\n      .select(col("in1.phone").as("phone"), col("in1.email").as("email"), col("in0.*"))\n\n}\n'})})})]}),"\n",(0,i.jsx)(t.h2,{id:"types-of-join",children:"Types of Join"}),"\n",(0,i.jsx)(t.p,{children:"Suppose there are 2 tables TableA and TableB with only 2 columns (Ref, Data) and following contents:"}),"\n",(0,i.jsx)(t.h3,{id:"table-a",children:"Table A"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Ref"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Data"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A11"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A12"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A13"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A21"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"3"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A31"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"table-b",children:"Table B"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Ref"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Data"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B11"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B21"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B22"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B23"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"4"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B41"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"inner-join",children:"INNER JOIN"}),"\n",(0,i.jsx)(t.p,{children:"Inner Join on column Ref will return columns from both the tables and only the matching records as long as the condition is satisfied:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Ref"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Data"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Ref"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Data"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A11"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B11"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A12"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B11"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A13"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B11"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A21"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B21"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A21"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B22"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A21"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B23"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"left-join",children:"LEFT JOIN"}),"\n",(0,i.jsx)(t.p,{children:"Left Join (or Left Outer join) on column Ref will return columns from both the tables and match records with records from the left table. The result-set will contain null for the rows for which there is no matching row on the right side."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Ref"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Data"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Ref"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Data"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A11"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B11"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A12"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B11"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A13"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B11"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A21"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B21"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A21"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B22"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A21"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B23"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"3"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A31"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NULL"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NULL"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"right-join",children:"RIGHT JOIN"}),"\n",(0,i.jsx)(t.p,{children:"Right Join (or Right Outer join) on column Ref will return columns from both the tables and match records with records from the right table. The result-set will contain null for the rows for which there is no matching row on the left side."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Ref"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Data"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Ref"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Data"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A11"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B11"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A12"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B11"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A13"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B11"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A21"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B21"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A21"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B22"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A21"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B23"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NULL"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NULL"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"4"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B41"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"full-outer-join",children:"FULL OUTER JOIN"}),"\n",(0,i.jsx)(t.p,{children:"Full Outer Join on column Ref will return columns from both the tables and matching records with records from the left table and records from the right table . The result-set will contain NULL values for the rows for which there is no matching."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Ref"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Data"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Ref"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Data"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A11"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B11"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A12"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B11"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A13"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B11"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A21"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B21"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A21"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B22"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A21"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B23"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"3"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A31"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NULL"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NULL"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NULL"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NULL"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"4"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B41"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"left-semi-join",children:"LEFT SEMI JOIN"}),"\n",(0,i.jsx)(t.p,{children:"Left Semi Join on column Ref will return columns only from left table and matching records only from left table."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Ref"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Data"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B11"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B21"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B22"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B23"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"3"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_B41"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"left-anti-join",children:"LEFT ANTI JOIN"}),"\n",(0,i.jsx)(t.p,{children:"Left anti join on column Ref will return columns from the left for non-matched records :"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Ref"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Data"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Ref"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Data"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"3"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Data_A31"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NULL"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NULL"})]})})]})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(A,{...e})}):A(e)}},49235:(e,t,l)=>{l.d(t,{A:()=>i});l(96540);var n=l(74848);function i(e){return(0,n.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,n.jsxs)("span",{className:"badge-dependency",children:[(0,n.jsx)("span",{className:"left",children:e.python_package_name}),(0,n.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,n.jsxs)("span",{className:"badge-dependency",children:[(0,n.jsx)("span",{className:"left",children:e.scala_package_name}),(0,n.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,n.jsxs)("span",{className:"badge-dependency",children:[(0,n.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,n.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,n.jsxs)("span",{className:"badge-dependency",children:[(0,n.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,n.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,n.jsxs)("span",{className:"badge-spark",children:[(0,n.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,n.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,n.jsxs)("span",{className:"badge-spark",children:[(0,n.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,n.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,n.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,n.jsxs)("span",{className:"badge-spark",children:[(0,n.jsx)("span",{className:"left",children:"Livy"}),(0,n.jsx)("span",{className:"right",children:e.livy})]})}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]})}},65537:(e,t,l)=>{l.d(t,{A:()=>_});var n=l(96540),i=l(18215),s=l(65627),r=l(56347),a=l(50372),d=l(30604),c=l(11861),h=l(78749);function o(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:t,children:l}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return o(e).map((e=>{let{props:{value:t,label:l,attributes:n,default:i}}=e;return{value:t,label:l,attributes:n,default:i}}))}(l);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,l])}function j(e){let{value:t,tabValues:l}=e;return l.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:l}=e;const i=(0,r.W6)(),s=function(e){let{queryString:t=!1,groupId:l}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:t,groupId:l});return[(0,d.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function g(e){const{defaultValue:t,queryString:l=!1,groupId:i}=e,s=x(e),[r,d]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=l.find((e=>e.default))??l[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,o]=f({queryString:l,groupId:i}),[g,p]=function(e){let{groupId:t}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,h.Dv)(l);return[i,(0,n.useCallback)((e=>{l&&s.set(e)}),[l,s])]}({groupId:i}),u=(()=>{const e=c??g;return j({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{u&&d(u)}),[u]);return{selectedValue:r,selectValue:(0,n.useCallback)((e=>{if(!j({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),o(e),p(e)}),[o,p,s]),tabValues:s}}var p=l(9136);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=l(74848);function m(e){let{className:t,block:l,selectedValue:n,selectValue:r,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),h=e=>{const t=e.currentTarget,l=d.indexOf(t),i=a[l].value;i!==n&&(c(t),r(i))},o=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const l=d.indexOf(e.currentTarget)+1;t=d[l]??d[0];break}case"ArrowLeft":{const l=d.indexOf(e.currentTarget)-1;t=d[l]??d[d.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":l},t),children:a.map((e=>{let{value:t,label:l,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{d.push(e)},onKeyDown:o,onClick:h,...s,className:(0,i.A)("tabs__item",u.tabItem,s?.className,{"tabs__item--active":n===t}),children:l??t},t)}))})}function A(e){let{lazy:t,children:l,selectedValue:s}=e;const r=(Array.isArray(l)?l:[l]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function b(e){const t=g(e);return(0,y.jsxs)("div",{className:(0,i.A)("tabs-container",u.tabList),children:[(0,y.jsx)(m,{...t,...e}),(0,y.jsx)(A,{...t,...e})]})}function _(e){const t=(0,p.A)();return(0,y.jsx)(b,{...e,children:o(e.children)},String(t))}},68065:(e,t,l)=>{l.d(t,{A:()=>n});const n=l.p+"assets/images/join_with_hints-0bed10c358bdb7a5a6710f283cf3704b.png"},79329:(e,t,l)=>{l.d(t,{A:()=>r});l(96540);var n=l(18215);const i={tabItem:"tabItem_Ymn6"};var s=l(74848);function r(e){let{children:t,hidden:l,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,r),hidden:l,children:t})}},87303:(e,t,l)=>{l.d(t,{A:()=>n});const n=l.p+"assets/images/join_without_hints-3c24895b7c58f07bea0b290f5ca459f7.png"},92826:(e,t,l)=>{l.d(t,{A:()=>n});const n=l.p+"assets/images/add_new_input-2ce622c38f55019de1600c2bd52c1041.png"}}]);