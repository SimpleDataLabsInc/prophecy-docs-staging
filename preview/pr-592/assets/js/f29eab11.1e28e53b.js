"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[1634],{1390:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"Spark/gems/custom/file-operations","title":"FileOperation","description":"Perform file operations on different file systems","source":"@site/docs/Spark/gems/custom/file-operation.md","sourceDirName":"Spark/gems/custom","slug":"/Spark/gems/custom/file-operations","permalink":"/Spark/gems/custom/file-operations","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"file","permalink":"/tags/file"},{"inline":true,"label":"dbfs","permalink":"/tags/dbfs"}],"version":"current","frontMatter":{"title":"FileOperation","id":"file-operations","description":"Perform file operations on different file systems","tags":["file","dbfs"]},"sidebar":"mySidebar","previous":{"title":"DeltaTableOperations","permalink":"/Spark/gems/custom/delta-ops"},"next":{"title":"RestAPIEnrich","permalink":"/Spark/gems/custom/rest-api-enrich"}}');var r=n(74848),i=n(28453),l=n(49235),a=n(65537),o=n(79329);const c={title:"FileOperation",id:"file-operations",description:"Perform file operations on different file systems",tags:["file","dbfs"]},d=void 0,p={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Copy Single File",id:"copy-single-file",level:3},{value:"Copy All Files From A Directory",id:"copy-all-files-from-a-directory",level:3},{value:"Move Files",id:"move-files",level:3},{value:"S3 - Sync Entire Directory",id:"s3---sync-entire-directory",level:3}];function h(e){const s={admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.A,{python_package_name:"",python_package_version:"",scala_package_name:"",scala_package_version:"",scala_lib:"",python_lib:"",uc_single:"Not Supported",uc_shared:"Not Supported",livy:"Not Supported"}),"\n",(0,r.jsxs)(s.p,{children:["Helps perform file operations like ",(0,r.jsx)(s.code,{children:"copy"})," and ",(0,r.jsx)(s.code,{children:"move"})," on different file systems."]}),"\n",(0,r.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Required"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"File System"}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"Local"})," - for operations on driver node file system ",(0,r.jsx)("br",{})," ",(0,r.jsx)(s.code,{children:"DBFS"})," - for operations on Databricks file system ",(0,r.jsx)("br",{})," ",(0,r.jsx)(s.code,{children:"S3"})," - for operations on S3 object store"]}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"True"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"Operation"}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:["Operation to perform, ",(0,r.jsx)(s.code,{children:"Copy"}),", ",(0,r.jsx)(s.code,{children:"Move"})," or ",(0,r.jsx)(s.code,{children:"Sync"})]}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"True"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"Filename Regex"}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"Regex to Filter File Names Eg: stdlog.*.txt"}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"False"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"Ignore empty files"}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"Ignore if file size is empty (Size of file is 0 bytes)"}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"False"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"Recurse"}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:["Boolean for performing ",(0,r.jsx)(s.code,{children:"Operation"})," recursively. Default is ",(0,r.jsx)(s.code,{children:"False"})]}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"False"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"Source Path"}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:["Path of source file/directory. ",(0,r.jsx)("br",{}),"Eg: /dbfs/source_file.txt, dbfs:/source_file.txt, s3://source_bucket/source_prefix/filename.txt"]}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"True"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"Destination Path"}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:["Path of destination file/directory. ",(0,r.jsx)("br",{})," Eg: /dbfs/target_file.txt, dbfs:/target_file.txt, s3://target_bucket/target_prefix/filename.txt"]}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"True"})]})]})]}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsxs)(s.p,{children:["You can perform operations on DBFS files using ",(0,r.jsx)(s.code,{children:"Local"})," file system too by providing path under ",(0,r.jsx)(s.code,{children:"/dbfs"}),"!",(0,r.jsx)("br",{})," This is because Databricks uses a FUSE mount to provide local access to the files stored in the cloud. A FUSE mount is a secure, virtual filesystem."]})}),"\n",(0,r.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"copy-single-file",children:"Copy Single File"}),"\n",(0,r.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,r.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,r.jsx)("iframe",{src:"https://github.com/SimpleDataLabsInc/prophecy-docs/assets/130362885/6db06ea9-27ef-4833-a837-a49adf3ff2c6",title:"File Copy single file",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n","\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(o.A,{value:"py",label:"DBFS",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-py",children:'def copy_file(spark: SparkSession):\n    from pyspark.dbutils import DBUtils\n    DBUtils(spark).fs.cp(\n        "dbfs:/Prophecy/example/source/person.json",\n        "dbfs:/Prophecy/example/target/person.json",\n        recurse = False\n    )\n'})})}),(0,r.jsx)(o.A,{value:"py2",label:"Local",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-py",children:'def copy_file(spark: SparkSession):\n    import os\n    import shutil\n    shutil.copy2("/dbfs/Prophecy/example/source/person.json",\n                 "/dbfs/Prophecy/example/target/person.json")\n'})})}),(0,r.jsx)(o.A,{value:"py3",label:"S3",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-py",children:"def copy_file(spark: SparkSession):\n    for obj in boto3.client(\"s3\").list_objects_v2(Bucket = src_bucket, Prefix = src_url.path.lstrip('/'))['Contents']:\n        new_dest_prefix = re.sub(src_prefix, dest_prefix, obj['Key'], 1)\n\n        if (\n            (\n              mode in [\"copy\", \"move\"]\n              and not obj['Key'].endswith(\"/\")\n            )\n            or (\n              not obj['Key'].endswith(\"/\")\n              and mode == \"sync\"\n              and re.sub(src_prefix, dest_prefix, obj['Key'], 1) not in dest_files\n            )\n        ):\n\n            if (\n                (\n                  bool(ignoreEmptyFiles) == True\n                  and (\n                    s3.head_object(Bucket=src_bucket, Key=obj['Key'])['ContentLength']\n                    == 0\n                  )\n                )\n                or (\n                  bool(fileRegex)\n                  and fileRegex != \"\"\n                  and not bool(\n                    re.compile(fileRegex).match(obj['Key'].split('/')[- 1])\n                  )\n                )\n            ):\n                continue\n\n            s3.copy(\n                {'Bucket' : src_bucket, 'Key' : obj['Key']},\n                dest_bucket,\n                re.sub(src_prefix, dest_prefix, obj['Key'], 1)\n            )\n\n            if props.operation == \"move\":\n                s3.delete_object(Bucket = src_bucket, Key = obj['Key'])\n\n"})})})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"copy-all-files-from-a-directory",children:"Copy All Files From A Directory"}),"\n",(0,r.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,r.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,r.jsx)("iframe",{src:"https://github.com/SimpleDataLabsInc/prophecy-docs/assets/130362885/107a8195-e76a-48ab-900f-28e07b7798ed",title:"File Copy a directory",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(o.A,{value:"py",label:"DBFS",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-py",children:'def copy_file(spark: SparkSession):\n    from pyspark.dbutils import DBUtils\n    DBUtils(spark).fs.cp(\n        "dbfs:/Prophecy/example/source/",\n        "dbfs:/Prophecy/example/target/",\n        recurse = True\n    )\n'})})}),(0,r.jsx)(o.A,{value:"py2",label:"Local",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-py",children:'def copy_file(spark: SparkSession):\n    import os\n    import shutil\n    shutil.copytree(\n        "/dbfs/Prophecy/example/source/",\n        "/dbfs/Prophecy/example/target/",\n        copy_function = shutil.copy2,\n        dirs_exist_ok = True\n    )\n'})})}),(0,r.jsx)(o.A,{value:"py3",label:"S3",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-py",children:"def copy_file(spark: SparkSession):\n    for obj in boto3.client(\"s3\").list_objects_v2(Bucket = src_bucket, Prefix = src_url.path.lstrip('/'))['Contents']:\n        new_dest_prefix = re.sub(src_prefix, dest_prefix, obj['Key'], 1)\n\n        if (\n            (\n              mode in [\"copy\", \"move\"]\n              and not obj['Key'].endswith(\"/\")\n            )\n            or (\n              not obj['Key'].endswith(\"/\")\n              and mode == \"sync\"\n              and re.sub(src_prefix, dest_prefix, obj['Key'], 1) not in dest_files\n            )\n        ):\n\n            if (\n                (\n                  bool(ignoreEmptyFiles) == True\n                  and (\n                    s3.head_object(Bucket=src_bucket, Key=obj['Key'])['ContentLength']\n                    == 0\n                  )\n                )\n                or (\n                  bool(fileRegex)\n                  and fileRegex != \"\"\n                  and not bool(\n                    re.compile(fileRegex).match(obj['Key'].split('/')[- 1])\n                  )\n                )\n            ):\n                continue\n\n            s3.copy(\n                {'Bucket' : src_bucket, 'Key' : obj['Key']},\n                dest_bucket,\n                re.sub(src_prefix, dest_prefix, obj['Key'], 1)\n            )\n\n            if props.operation == \"move\":\n                s3.delete_object(Bucket = src_bucket, Key = obj['Key'])\n\n"})})})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"move-files",children:"Move Files"}),"\n",(0,r.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,r.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,r.jsx)("iframe",{src:"https://github.com/SimpleDataLabsInc/prophecy-docs/assets/130362885/6bbd4a4e-2b6a-4cf6-bb07-0712f6720650",title:"Move File",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(o.A,{value:"py",label:"DBFS",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-py",children:'def move_file(spark: SparkSession):\n    from pyspark.dbutils import DBUtils\n    DBUtils(spark).fs.mv("dbfs:/Prophecy/example/source/", "dbfs:/Prophecy/example/target/", recurse = False)\n\n'})})}),(0,r.jsx)(o.A,{value:"py2",label:"Local",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-py",children:'def move_file(spark: SparkSession):\n    import os\n    import shutil\n    shutil.copy2("/Prophecy/example/source/", "/Prophecy/example/target/")\n    shutil.rmtree("/Prophecy/example/source/")\n'})})}),(0,r.jsx)(o.A,{value:"py3",label:"S3",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-py",children:"def move_file(spark: SparkSession):\n    for obj in boto3.client(\"s3\").list_objects_v2(Bucket = src_bucket, Prefix = src_url.path.lstrip('/'))['Contents']:\n        new_dest_prefix = re.sub(src_prefix, dest_prefix, obj['Key'], 1)\n\n        if (\n            (\n              mode in [\"copy\", \"move\"]\n              and not obj['Key'].endswith(\"/\")\n            )\n            or (\n              not obj['Key'].endswith(\"/\")\n              and mode == \"sync\"\n              and re.sub(src_prefix, dest_prefix, obj['Key'], 1) not in dest_files\n            )\n        ):\n\n            if (\n                (\n                  bool(ignoreEmptyFiles) == True\n                  and (\n                    s3.head_object(Bucket=src_bucket, Key=obj['Key'])['ContentLength']\n                    == 0\n                  )\n                )\n                or (\n                  bool(fileRegex)\n                  and fileRegex != \"\"\n                  and not bool(re.compile(fileRegex).match(obj['Key'].split('/')[- 1]))\n                )\n            ):\n                continue\n\n            s3.copy(\n                {'Bucket' : src_bucket, 'Key' : obj['Key']},\n                dest_bucket,\n                re.sub(src_prefix, dest_prefix, obj['Key'], 1)\n            )\n\n            if mode == \"move\":\n                s3.delete_object(Bucket = src_bucket, Key = obj['Key'])\n\n\n"})})})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"s3---sync-entire-directory",children:"S3 - Sync Entire Directory"}),"\n",(0,r.jsx)("div",{class:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"},children:(0,r.jsx)("div",{class:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"},children:(0,r.jsx)("iframe",{src:"https://github.com/SimpleDataLabsInc/prophecy-docs/assets/130362885/2e579779-3d61-476d-9f04-38f687c96ebf",title:"S3 File Sync",allow:"autoplay;fullscreen",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",msallowfullscreen:!0,width:"100%",height:"100%"})})}),"\n",(0,r.jsx)(a.A,{children:(0,r.jsx)(o.A,{value:"py",label:"S3",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"def sync_file(spark: SparkSession):\n    dest_files = set(\n        [\n          f_object['Key'].lstrip('/')\n          for f_object in boto3.client(\"s3\").list_objects_v2(Bucket = dest_bucket, Prefix = dest_url.path.lstrip('/'))['Contents']\n          if not f_object['Key'].endswith(\"/\")\n        ]\n    )\n\n    for obj in boto3.client(\"s3\").list_objects_v2(Bucket = src_bucket, Prefix = src_url.path.lstrip('/'))['Contents']:\n        new_dest_prefix = re.sub(src_prefix, dest_prefix, obj['Key'], 1)\n\n        if (\n            (\n              mode in [\"copy\", \"move\"]\n              and not obj['Key'].endswith(\"/\")\n            )\n            or (\n              not obj['Key'].endswith(\"/\")\n              and mode == \"sync\"\n              and re.sub(src_prefix, dest_prefix, obj['Key'], 1) not in dest_files\n            )\n        ):\n\n            if (\n                (\n                  bool(ignoreEmptyFiles) == True\n                  and (\n                    s3.head_object(Bucket=src_bucket, Key=obj['Key'])['ContentLength']\n                    == 0\n                  )\n                )\n                or (\n                  bool(fileRegex)\n                  and fileRegex != \"\"\n                  and not bool(re.compile(fileRegex).match(obj['Key'].split('/')[- 1]))\n                )\n            ):\n                continue\n\n            s3.copy(\n                {'Bucket' : src_bucket, 'Key' : obj['Key']},\n                dest_bucket,\n                re.sub(src_prefix, dest_prefix, obj['Key'], 1)\n            )\n\n            if mode == \"move\":\n                s3.delete_object(Bucket = src_bucket, Key = obj['Key'])\n\n"})})})}),"\n",(0,r.jsx)(s.hr,{})]})}function f(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>a});var t=n(96540);const r={},i=t.createContext(r);function l(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:s},e.children)}},49235:(e,s,n)=>{n.d(s,{A:()=>r});n(96540);var t=n(74848);function r(e){return(0,t.jsxs)("div",{children:[e.python_package_name&&e.python_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/package-hub/",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.python_package_name}),(0,t.jsx)("span",{className:"right",children:e.python_package_version})]})}),e.scala_package_name&&e.scala_package_version&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/package-hub/",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:e.scala_package_name}),(0,t.jsx)("span",{className:"right",children:e.scala_package_version})]})}),e.python_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsPython"}),(0,t.jsx)("span",{className:"right",children:e.python_lib})]})}),e.scala_lib&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/extensibility/dependencies/prophecy-libraries",children:(0,t.jsxs)("span",{className:"badge-dependency",children:[(0,t.jsx)("span",{className:"left",children:"ProphecyLibsScala"}),(0,t.jsx)("span",{className:"right",children:e.scala_lib})]})}),e.uc_single&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Single Cluster"}),(0,t.jsx)("span",{className:"right",children:e.uc_single})]})}),e.uc_shared&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/databricks/ucshared",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Databricks UC Shared"}),(0,t.jsx)("span",{className:"right",children:e.uc_shared})]})}),e.livy&&(0,t.jsx)("a",{href:"https://docs.prophecy.io/administration/fabrics/Spark-fabrics/livy",children:(0,t.jsxs)("span",{className:"badge-spark",children:[(0,t.jsx)("span",{className:"left",children:"Livy"}),(0,t.jsx)("span",{className:"right",children:e.livy})]})}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]})}},65537:(e,s,n)=>{n.d(s,{A:()=>v});var t=n(96540),r=n(18215),i=n(65627),l=n(56347),a=n(50372),o=n(30604),c=n(11861),d=n(78749);function p(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:s,children:n}=e;return(0,t.useMemo)((()=>{const e=s??function(e){return p(e).map((e=>{let{props:{value:s,label:n,attributes:t,default:r}}=e;return{value:s,label:n,attributes:t,default:r}}))}(n);return function(e){const s=(0,c.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function h(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function f(e){let{queryString:s=!1,groupId:n}=e;const r=(0,l.W6)(),i=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,o.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const s=new URLSearchParams(r.location.search);s.set(i,e),r.replace({...r.location,search:s.toString()})}),[i,r])]}function b(e){const{defaultValue:s,queryString:n=!1,groupId:r}=e,i=u(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!h({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:s,tabValues:i}))),[c,p]=f({queryString:n,groupId:r}),[b,x]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,i]=(0,d.Dv)(n);return[r,(0,t.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),y=(()=>{const e=c??b;return h({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{y&&o(y)}),[y]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),x(e)}),[p,x,i]),tabValues:i}}var x=n(9136);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(74848);function j(e){let{className:s,block:n,selectedValue:t,selectValue:l,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const s=e.currentTarget,n=o.indexOf(s),r=a[n].value;r!==t&&(c(s),l(r))},p=e=>{let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;s=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;s=o[n]??o[o.length-1];break}}s?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},s),children:a.map((e=>{let{value:s,label:n,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:t===s?0:-1,"aria-selected":t===s,ref:e=>{o.push(e)},onKeyDown:p,onClick:d,...i,className:(0,r.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":t===s}),children:n??s},s)}))})}function g(e){let{lazy:s,children:n,selectedValue:i}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=l.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:l.map(((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==i})))})}function _(e){const s=b(e);return(0,m.jsxs)("div",{className:(0,r.A)("tabs-container",y.tabList),children:[(0,m.jsx)(j,{...s,...e}),(0,m.jsx)(g,{...s,...e})]})}function v(e){const s=(0,x.A)();return(0,m.jsx)(_,{...e,children:p(e.children)},String(s))}},79329:(e,s,n)=>{n.d(s,{A:()=>l});n(96540);var t=n(18215);const r={tabItem:"tabItem_Ymn6"};var i=n(74848);function l(e){let{children:s,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,l),hidden:n,children:s})}}}]);