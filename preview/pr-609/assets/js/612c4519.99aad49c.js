"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[46198],{28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>o});var t=s(96540);const n={},a=t.createContext(n);function i(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(a.Provider,{value:r},e.children)}},46781:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>h,contentTitle:()=>l,default:()=>j,frontMatter:()=>d,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"Spark/gems/source-target/warehouse/jdbc","title":"JDBC","description":"Parameters and properties to read from and write to the JDBC warehouse","source":"@site/docs/Spark/gems/source-target/warehouse/jdbc.md","sourceDirName":"Spark/gems/source-target/warehouse","slug":"/engineers/jdbc","permalink":"/prophecy-docs-staging/preview/pr-609/engineers/jdbc","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gems","permalink":"/prophecy-docs-staging/preview/pr-609/tags/gems"},{"inline":true,"label":"warehouse","permalink":"/prophecy-docs-staging/preview/pr-609/tags/warehouse"},{"inline":true,"label":"jdbc","permalink":"/prophecy-docs-staging/preview/pr-609/tags/jdbc"}],"version":"current","frontMatter":{"title":"JDBC","id":"jdbc","slug":"/engineers/jdbc","description":"Parameters and properties to read from and write to the JDBC warehouse","tags":["gems","warehouse","jdbc"]},"sidebar":"mySidebar","previous":{"title":"DB2","permalink":"/prophecy-docs-staging/preview/pr-609/engineers/db2"},"next":{"title":"MongoDB","permalink":"/prophecy-docs-staging/preview/pr-609/engineers/mongodb"}}');var n=s(74848),a=s(28453),i=s(49235),o=s(65537),c=s(79329);const d={title:"JDBC",id:"jdbc",slug:"/engineers/jdbc",description:"Parameters and properties to read from and write to the JDBC warehouse",tags:["gems","warehouse","jdbc"]},l=void 0,h={},u=[{value:"Parameters",id:"parameters",level:2},{value:"DB Table",id:"db-table",level:3},{value:"SQL Query",id:"sql-query",level:3},{value:"Source",id:"source",level:2},{value:"Source properties",id:"source-properties",level:3},{value:"Example",id:"source-example",level:3},{value:"Generated code",id:"source-code",level:3},{value:"Target",id:"target",level:2},{value:"Target properties",id:"target-properties",level:3},{value:"Supported write modes",id:"supported-write-modes",level:3},{value:"Example",id:"target-example",level:3},{value:"Generated code",id:"target-code",level:3}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{python_package_name:"ProphecySparkBasicsPython",python_package_version:"0.0.1+",scala_package_name:"ProphecySparkBasicsScala",scala_package_version:"0.0.1+",scala_lib:"",python_lib:"",uc_single:"14.3+",uc_shared:"14.3+",livy:"3.0.1+"}),"\n",(0,n.jsx)(r.p,{children:"You can read from and write to other databases using JDBC."}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Tab"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Username"}),(0,n.jsx)(r.td,{children:"Location"}),(0,n.jsx)(r.td,{children:"Username for your JDBC instance."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Password"}),(0,n.jsx)(r.td,{children:"Location"}),(0,n.jsx)(r.td,{children:"Password for your JDBC instance."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"JDBC URL"}),(0,n.jsx)(r.td,{children:"Location"}),(0,n.jsxs)(r.td,{children:["JDBC URL to connect to. ",(0,n.jsx)("br",{}),"The source-specific connection properties may be specified in the URL. ",(0,n.jsx)("br",{})," For example: ",(0,n.jsx)("br",{}),"- ",(0,n.jsx)(r.code,{children:"jdbc:postgresql://test.us-east-1.rds.amazonaws.com:5432/postgres"}),(0,n.jsx)("br",{}),"- ",(0,n.jsx)(r.code,{children:"jdbc:mysql://database-mysql.test.us-east-1.rds.amazonaws.com:3306/mysql"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Data Source"}),(0,n.jsx)(r.td,{children:"Location"}),(0,n.jsxs)(r.td,{children:["Strategy to read data. ",(0,n.jsx)("br",{}),"In the Source gem, you can select ",(0,n.jsx)(r.code,{children:"DB Table"})," or ",(0,n.jsx)(r.code,{children:"SQL Query"}),". In the Target gem, you must enter a table.",(0,n.jsx)("br",{}),"To learn more, see ",(0,n.jsx)(r.a,{href:"#db-table",children:"DB Table"})," and ",(0,n.jsx)(r.a,{href:"#sql-query",children:"SQL Query"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Schema"}),(0,n.jsx)(r.td,{children:"Properties"}),(0,n.jsxs)(r.td,{children:["Schema to apply on the loaded data.",(0,n.jsx)("br",{}),"In the Source gem, you can define or edit the schema visually or in JSON code.",(0,n.jsx)("br",{}),"In the Target gem, you can view the schema visually or as JSON code."]})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"db-table",children:"DB Table"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"DB Table"})," option dictates which table to use as the source to read from. You can use anything valid in a ",(0,n.jsx)(r.code,{children:"FROM"})," clause of a SQL query. For example, instead of a table name, use a subquery in parentheses."]}),"\n",(0,n.jsx)(r.admonition,{type:"caution",children:(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"DB Table"})," option and the ",(0,n.jsx)(r.code,{children:"query"})," parameter are mutually exclusive, which means that you cannot specify both at the same time."]})}),"\n",(0,n.jsx)(r.h3,{id:"sql-query",children:"SQL Query"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"SQL Query"})," option specifies which query to use as a subquery in the ",(0,n.jsx)(r.code,{children:"FROM"})," clause. Spark also assigns an alias to the subquery clause. For example, Spark issues the following query to the JDBC Source:"]}),"\n","\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"SELECT columns FROM (<user_specified_query>) spark_gen_alias\n"})}),"\n",(0,n.jsx)(r.p,{children:"The following restrictions exist when you use this option:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["You cannot use the ",(0,n.jsx)(r.code,{children:"query"})," and ",(0,n.jsx)(r.code,{children:"partitionColumn"})," options at the same time."]}),"\n",(0,n.jsxs)(r.li,{children:["If you must specify the ",(0,n.jsx)(r.code,{children:"partitionColumn"})," option, you can specify the subquery using the ",(0,n.jsx)(r.code,{children:"dbtable"})," option and qualify your partition columns using the subquery alias provided as part of ",(0,n.jsx)(r.code,{children:"dbtable"}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"source",children:"Source"}),"\n",(0,n.jsx)(r.p,{children:"The Source gem reads data from JDBC and allows you to optionally specify the following additional properties."}),"\n",(0,n.jsx)(r.h3,{id:"source-properties",children:"Source properties"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Description"}),(0,n.jsx)(r.td,{children:"Description of your dataset."}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Driver"}),(0,n.jsxs)(r.td,{children:["Class name of the JDBC driver to connect to this URL. ",(0,n.jsx)("br",{}),"For PostgreSQL: ",(0,n.jsx)(r.code,{children:"org.postgresql.Driver"})," ",(0,n.jsx)("br",{}),"For MySQL: ",(0,n.jsx)(r.code,{children:"com.mysql.cj.jdbc.Driver"})]}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Push-down Predicate"}),(0,n.jsxs)(r.td,{children:["Whether Spark should push down filters to the JDBC data source as much as possible. ",(0,n.jsx)("br",{}),"Predicate push-down is usually disabled when Spark performs predicate filtering faster than the JDBC data source."]}),(0,n.jsx)(r.td,{children:"true"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Number of Partitions"}),(0,n.jsx)(r.td,{children:"Maximum number of partitions to use for parallelism in table reading, and the maximum number of concurrent JDBC connections."}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Query Timeout"}),(0,n.jsxs)(r.td,{children:["Number of seconds the driver to wait for a Statement object to execute. ",(0,n.jsx)("br",{}),"To specify no limit, enter ",(0,n.jsx)(r.code,{children:"0"}),"."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"0"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Fetch Size"}),(0,n.jsxs)(r.td,{children:["Number of rows to fetch per round trip. ",(0,n.jsx)("br",{}),"This can help performance on JDBC drivers which default to low fetch size."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"0"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Session Init Statement"}),(0,n.jsxs)(r.td,{children:["Custom SQL statement, or PL/SQL block to execute after you open a database session to the remote database, and before you start reading data. ",(0,n.jsx)("br",{}),"Use this to implement session initialization code. For example: ",(0,n.jsx)("br",{}),(0,n.jsx)(r.code,{children:'option("sessionInitStatement", """BEGIN execute immediate \'alter session set "_serial_direct_read"=true\'; END;""")'})]}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Push-down Aggregate"}),(0,n.jsxs)(r.td,{children:["Whether Spark should push down aggregates to the JDBC data source. ",(0,n.jsx)("br",{}),"Aggregate push-down is usually disabled when Spark performs the aggregate faster than the JDBC data source. ",(0,n.jsx)("br",{}),(0,n.jsx)(r.strong,{children:"NOTE:"})," You can only push down aggregates if you can push down all the aggregate functions and the related filters. Spark assumes that the data source can't fully complete the aggregate and does a final aggregate over the data source output."]}),(0,n.jsx)(r.td,{children:"false"})]})]})]}),"\n",(0,n.jsx)(r.admonition,{type:"caution",children:(0,n.jsxs)(r.p,{children:["If you get ",(0,n.jsx)(r.code,{children:"class not found"})," error while you run your pipeline, add a missing dependency to your cluster. ",(0,n.jsx)("br",{}),"\nTo learn how to add dependencies for specific JDBC jar, see ",(0,n.jsx)(r.a,{href:"/engineers/dependencies",children:"Spark dependencies"}),"."]})}),"\n",(0,n.jsx)(r.h3,{id:"source-example",children:"Example"}),"\n",(0,n.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,n.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,n.jsx)("iframe",{src:"https://user-images.githubusercontent.com/103921419/173814656-1c857949-cd5a-4032-922b-5a621d77fd75.mp4",title:"JDBC source",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,n.jsx)(r.h3,{id:"source-code",children:"Generated code"}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsxs)(r.p,{children:["To see the generated source code of your project, ",(0,n.jsx)(r.a,{href:"/engineers/project-lifecycle/#review-the-code",children:"switch to the Code view"})," in the project header."]})}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(c.A,{value:"py",label:"Python",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-py",children:'def Source(spark: SparkSession) -> DataFrame:\n    return spark.read\\\n        .format("jdbc")\\\n        .option("url", f"{Config.jdbc_url}")\\\n        .option("user", f"{Config.jdbc_username}")\\\n        .option("password", f"{Config.jdbc_password}")\\\n        .option("dbtable", "public.demo_customers_raw")\\\n        .option("pushDownPredicate", True)\\\n        .option("driver", "org.postgresql.Driver")\\\n        .load()\n'})})}),(0,n.jsx)(c.A,{value:"scala",label:"Scala",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-scala",children:'object Source {\n\n  def apply(spark: SparkSession): DataFrame = {\n    var reader = spark.read\n      .format("jdbc")\n      .option("url",  s"${Config.jdbc_url}")\n      .option("user", s"${Config.jdbc_username}")\n      .option("password", s"${Config.jdbc_password}")\n      .option("dbtable", "public.demo_customers_raw")\n    reader = reader\n      .option("pushDownPredicate", true)\n      .option("driver", "org.postgresql.Driver")\n    reader.load()\n  }\n\n}\n'})})})]}),"\n",(0,n.jsx)(r.h2,{id:"target",children:"Target"}),"\n",(0,n.jsx)(r.p,{children:"The Target gem writes data to JDBC and allows you to optionally specify the following additional properties."}),"\n",(0,n.jsx)(r.h3,{id:"target-properties",children:"Target properties"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Description"}),(0,n.jsx)(r.td,{children:"Description of your dataset."}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Driver"}),(0,n.jsxs)(r.td,{children:["Class name of the JDBC driver to connect to this URL. ",(0,n.jsx)("br",{}),"For PostgreSQL: ",(0,n.jsx)(r.code,{children:"org.postgresql.Driver"})," ",(0,n.jsx)("br",{}),"For MySQL: ",(0,n.jsx)(r.code,{children:"com.mysql.cj.jdbc.Driver"})]}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Number of Partitions"}),(0,n.jsxs)(r.td,{children:["Maximum number of partitions to use for parallelism in table writing, and the maximum number of concurrent JDBC connections. ",(0,n.jsx)("br",{}),"If the number of partitions exceeds the concurrent JDBC connections limit, call ",(0,n.jsx)(r.code,{children:"coalesce(numPartitions)"})," to decrease the limit before writing."]}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Query Timeout"}),(0,n.jsxs)(r.td,{children:["Number of seconds the driver to wait for a Statement object to execute. ",(0,n.jsx)("br",{}),"To specify no limit, enter ",(0,n.jsx)(r.code,{children:"0"}),". This option depends on how JDBC drivers implement the API ",(0,n.jsx)(r.code,{children:"setQueryTimeout"}),". For example, the h2 JDBC driver checks the timeout of each query instead of an entire JDBC batch."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"0"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Write Mode"}),(0,n.jsxs)(r.td,{children:["How to handle existing data. For a list of the possible values, see ",(0,n.jsx)(r.a,{href:"#supported-write-modes",children:"Supported write modes"}),"."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"error"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Batch Size"}),(0,n.jsxs)(r.td,{children:["Number of rows to insert per round trip. ",(0,n.jsx)("br",{}),"This can help performance on JDBC drivers."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"1000"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Isolation Level"}),(0,n.jsxs)(r.td,{children:["Transaction isolation level to apply to the current connection. ",(0,n.jsx)("br",{}),"Possible values are: ",(0,n.jsx)(r.code,{children:"NONE"}),", ",(0,n.jsx)(r.code,{children:"READ_COMMITTED"}),", ",(0,n.jsx)(r.code,{children:"READ_UNCOMMITTED"}),", ",(0,n.jsx)(r.code,{children:"REPEATABLE_READ"}),", or ",(0,n.jsx)(r.code,{children:"SERIALIZABLE"}),". To learn more, see ",(0,n.jsx)(r.a,{href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.sql/java/sql/Connection.html",children:"Interface Connection"}),"."]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"READ_UNCOMMITTED"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Truncate"}),(0,n.jsxs)(r.td,{children:["When your ",(0,n.jsx)(r.code,{children:"SaveMode"})," is set to ",(0,n.jsx)(r.code,{children:"Overwrite"}),", Spark truncates an existing table instead of dropping and recreating it. This can be more efficient, and prevents the table metadata, such as indices, from being removed. ",(0,n.jsx)("br",{}),"However, it does not work in some cases, such as when the new data has a different schema. In case of failures, disable the truncate option to use ",(0,n.jsx)(r.code,{children:"DROP TABLE"})," again. Also, due to the different behavior of ",(0,n.jsx)(r.code,{children:"TRUNCATE TABLE"})," among DBMS, it's not always safe to use this. ",(0,n.jsx)(r.code,{children:"MySQLDialect"}),", ",(0,n.jsx)(r.code,{children:"DB2Dialect"}),", ",(0,n.jsx)(r.code,{children:"MsSqlServerDialect"}),", ",(0,n.jsx)(r.code,{children:"DerbyDialect"}),", and ",(0,n.jsx)(r.code,{children:"OracleDialect"})," supports this while ",(0,n.jsx)(r.code,{children:"PostgresDialect"})," and the default ",(0,n.jsx)(r.code,{children:"JDBCDialect"})," doesn't. For an unknown and unsupported ",(0,n.jsx)(r.code,{children:"JDBCDialect"}),", the user option truncate is ignored."]}),(0,n.jsx)(r.td,{children:"false"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Cascade Truncate"}),(0,n.jsxs)(r.td,{children:["Whether to allow ",(0,n.jsx)(r.code,{children:"TRUNCATE TABLE t CASCADE"})," to execute. ",(0,n.jsx)("br",{}),"For PostgreSQL, ",(0,n.jsx)(r.code,{children:"TRUNCATE TABLE ONLY t CASCADE"})," executes to prevent inadvertently truncating descendant tables. ",(0,n.jsx)(r.strong,{children:"This affects other tables."})]}),(0,n.jsxs)(r.td,{children:["Default according to the ",(0,n.jsx)(r.code,{children:"JDBCDialect"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Create Table Options"}),(0,n.jsxs)(r.td,{children:["Set a database-specific table and partition options when creating a table. ",(0,n.jsx)("br",{}),"For example: ",(0,n.jsx)(r.code,{children:"CREATE TABLE t (name string) ENGINE=InnoDB"})]}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Create Table Column Types"}),(0,n.jsxs)(r.td,{children:["Database column data types to use instead of the defaults when creating the table. ",(0,n.jsx)("br",{}),"Specify valid Spark SQL data type information in the same format as ",(0,n.jsx)(r.code,{children:"CREATE TABLE"})," columns syntax. ",(0,n.jsx)("br",{}),"For example: ",(0,n.jsx)(r.code,{children:'"name CHAR(64), comments VARCHAR(1024)"'})]}),(0,n.jsx)(r.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"supported-write-modes",children:"Supported write modes"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Write mode"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"error"}),(0,n.jsx)(r.td,{children:"If the data already exists, throw an exception."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"overwrite"}),(0,n.jsxs)(r.td,{children:["If the data already exists, overwrite the data with the contents of the ",(0,n.jsx)(r.code,{children:"DataFrame"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"append"}),(0,n.jsxs)(r.td,{children:["If the data already exists, append the contents of the ",(0,n.jsx)(r.code,{children:"DataFrame"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ignore"}),(0,n.jsxs)(r.td,{children:["If the data already exists, do nothing with the contents of the ",(0,n.jsx)(r.code,{children:"DataFrame"}),". ",(0,n.jsx)("br",{}),"This is similar to the ",(0,n.jsx)(r.code,{children:"CREATE TABLE IF NOT EXISTS"})," clause in SQL."]})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"target-example",children:"Example"}),"\n",(0,n.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,n.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,n.jsx)("iframe",{src:"https://user-images.githubusercontent.com/103921419/173814665-f932bbae-cc4a-4b4b-90e8-09749b714a76.mp4",title:"JDBC target",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,n.jsx)(r.h3,{id:"target-code",children:"Generated code"}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsxs)(r.p,{children:["To see the generated source code of your project, ",(0,n.jsx)(r.a,{href:"/engineers/project-lifecycle/#review-the-code",children:"switch to the Code view"})," in the project header."]})}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(c.A,{value:"py",label:"Python",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-py",children:'def Target(spark: SparkSession, in0: DataFrame):\n   in0.write\\\n      .format("jdbc")\\\n      .option("url", f"{Config.jdbc_url}")\\\n      .option("dbtable", "public.demo_customers_raw_output")\\\n      .option("user", f"{Config.jdbc_username}")\\\n      .option("password", f"{Config.jdbc_password}")\\\n      .option("driver", "org.postgresql.Driver")\\\n      .save()\n'})})}),(0,n.jsx)(c.A,{value:"scala",label:"Scala",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-scala",children:'object Target {\n\n  def apply(spark: SparkSession, in: DataFrame): Unit = {\n    in.write\n      .format("jdbc")\n      .option("url", s"${Config.jdbc_url}")\n      .option("dbtable", "public.demo_customers_raw_output")\n      .option("user", s"${Config.jdbc_username}")\n      .option("password", s"${Config.jdbc_password}")\n      .option("driver", "org.postgresql.Driver")\n      .save()\n  }\n\n}\n'})})})]})]})}function j(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},49235:(e,r,s)=>{s.d(r,{A:()=>n});s(96540);var t=s(74848);function n(e){return(0,t.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub/",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.python_package_name}),(0,t.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/engineers/package-hub",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.scala_package_name}),(0,t.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,t.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,t.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,t.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,t.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Livy"}),(0,t.jsx)("span",{className:"right",children:e.livy})]})}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]})}},65537:(e,r,s)=>{s.d(r,{A:()=>w});var t=s(96540),n=s(18215),a=s(65627),i=s(56347),o=s(50372),c=s(30604),d=s(11861),l=s(78749);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:r,children:s}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:s,attributes:t,default:n}}=e;return{value:r,label:s,attributes:t,default:n}}))}(s);return function(e){const r=(0,d.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,s])}function p(e){let{value:r,tabValues:s}=e;return s.some((e=>e.value===r))}function j(e){let{queryString:r=!1,groupId:s}=e;const n=(0,i.W6)(),a=function(e){let{queryString:r=!1,groupId:s}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:r,groupId:s});return[(0,c.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(n.location.search);r.set(a,e),n.replace({...n.location,search:r.toString()})}),[a,n])]}function x(e){const{defaultValue:r,queryString:s=!1,groupId:n}=e,a=u(e),[i,c]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:a}))),[d,h]=j({queryString:s,groupId:n}),[x,m]=function(e){let{groupId:r}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,a]=(0,l.Dv)(s);return[n,(0,t.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:n}),b=(()=>{const e=d??x;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{b&&c(b)}),[b]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),m(e)}),[h,m,a]),tabValues:a}}var m=s(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(74848);function g(e){let{className:r,block:s,selectedValue:t,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),l=e=>{const r=e.currentTarget,s=c.indexOf(r),n=o[s].value;n!==t&&(d(r),i(n))},h=e=>{let r=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;r=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;r=c[s]??c[c.length-1];break}}r?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":s},r),children:o.map((e=>{let{value:r,label:s,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>{c.push(e)},onKeyDown:h,onClick:l,...a,className:(0,n.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":t===r}),children:s??r},r)}))})}function y(e){let{lazy:r,children:s,selectedValue:a}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function v(e){const r=x(e);return(0,f.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,f.jsx)(g,{...r,...e}),(0,f.jsx)(y,{...r,...e})]})}function w(e){const r=(0,m.A)();return(0,f.jsx)(v,{...e,children:h(e.children)},String(r))}},79329:(e,r,s)=>{s.d(r,{A:()=>i});s(96540);var t=s(18215);const n={tabItem:"tabItem_Ymn6"};var a=s(74848);function i(e){let{children:r,hidden:s,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(n.tabItem,i),hidden:s,children:r})}}}]);