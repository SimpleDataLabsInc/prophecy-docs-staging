"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[50045],{16672:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/gem-builder-new-a50bed45ff0993782aecdc28a3497503.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(96540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}},50803:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/gem-builder-interface-f2d289f0ea1bf31ba480debfecc52bfd.png"},76413:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/gem-builder-sql-query-a1b5ec7bf5c5b66eee0d91047b5bb6a5.png"},90070:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"extensibility/gem-builder/sql-gem-builder","title":"Gem Builder for SQL","description":"Build gems using SQL","source":"@site/docs/extensibility/gem-builder/sql-gem-builder.md","sourceDirName":"extensibility/gem-builder","slug":"/analysts/gem-builder","permalink":"/prophecy-docs-staging/preview/pr-604/analysts/gem-builder","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gem builder","permalink":"/prophecy-docs-staging/preview/pr-604/tags/gem-builder"}],"version":"current","frontMatter":{"title":"Gem Builder for SQL","id":"sql-gem-builder","slug":"/analysts/gem-builder","description":"Build gems using SQL","tags":["gem builder"]},"sidebar":"mySidebar","previous":{"title":"Build Shareable UDFs","permalink":"/prophecy-docs-staging/preview/pr-604/engineers/shareable-udfs"},"next":{"title":"Gem Builder for Spark","permalink":"/prophecy-docs-staging/preview/pr-604/engineers/gem-builder"}}');var o=t(74848),s=t(28453);const i={title:"Gem Builder for SQL",id:"sql-gem-builder",slug:"/analysts/gem-builder",description:"Build gems using SQL",tags:["gem builder"]},a=void 0,l={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"Steps",id:"steps",level:2},{value:"Create a SQL query",id:"create-a-sql-query",level:2},{value:"Customize the interface",id:"customize-the-interface",level:2},{value:"Parent Class",id:"parent-class",level:3},{value:"Properties Classes",id:"properties-classes",level:3},{value:"Dialog (UI)",id:"dialog-ui",level:3},{value:"Column selector",id:"column-selector",level:4},{value:"Validation",id:"validation",level:3},{value:"State Changes",id:"state-changes",level:3},{value:"Apply",id:"apply",level:3},{value:"Macro Properties",id:"macro-properties",level:3},{value:"Preview your gem",id:"preview-your-gem",level:2},{value:"Example code",id:"example-code",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{title:"Enterprise Only",type:"caution",children:(0,o.jsxs)(n.p,{children:["Please ",(0,o.jsx)(n.a,{href:"https://www.prophecy.io/request-a-demo",children:"contact us"})," to learn more about the Enterprise offering."]})}),"\n",(0,o.jsxs)(n.p,{children:["Each Prophecy model is composed of individual operations, or ",(0,o.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-604/gems",children:"Gems"}),", that perform actions on data. While Prophecy offers dozens of gems out-of-the-box, some data practitioners want to extend this idea and create their own gems. Gem builder allows enterprise users to add custom gems. You can create custom source, target, and transformation gems, and then publish them for your team to use."]}),"\n",(0,o.jsx)(n.p,{children:"Our SQL Gem builder supports Databricks and Snowflake SQL. It's built on dbt Core\u2122, allowing you to build upon existing dbt libraries to define new macros to use in your custom gem."}),"\n",(0,o.jsx)(n.p,{children:"You can create a gem that writes a reference to either of the following options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"A new user-defined macro"}),"\n",(0,o.jsxs)(n.li,{children:["An existing macro present in a dependency (such as ",(0,o.jsx)(n.code,{children:"dbt-utils"}),")"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,o.jsx)(n.p,{children:"You can get started with creating your own gem by completing the following steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Open a SQL project, and the click ",(0,o.jsx)(n.strong,{children:"Add Gem"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Enter a ",(0,o.jsx)(n.strong,{children:"Gem Name"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Choose a ",(0,o.jsx)(n.strong,{children:"Category"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Verify the ",(0,o.jsx)(n.strong,{children:"Directory Path"})," where your gem SQL query will be stored."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Create"}),". This will open the files you will need to edit to define your custom gem."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Gem builder new gem",src:t(16672).A+"",width:"2742",height:"898"})}),"\n",(0,o.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,o.jsx)(n.p,{children:"A gem is made up of multiple components that determine the UI and logic of the gem. The Gem Builder breaks these components into steps for you while you create your gem."}),"\n",(0,o.jsx)(n.p,{children:"There are three parts to creating a gem:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#create-a-sql-query",children:"Create SQL Query"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#customize-the-interface",children:"Customize Interface"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#preview-your-gem",children:"Preview"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"First, you'll define the SQL query using a new or existing macro. You'll then need to customize the UI and logic of your gem. Finally, you can preview your gem."}),"\n",(0,o.jsx)(n.h2,{id:"create-a-sql-query",children:"Create a SQL query"}),"\n",(0,o.jsx)(n.p,{children:"Prophecy gems are powered by macros. Therefore, you can either define a new macro or leverage an existing one for your custom gem."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Gem builder create SQL query",src:t(76413).A+"",width:"2620",height:"1507"})}),"\n",(0,o.jsxs)(n.p,{children:["Existing dbt macros can help define table-to-table transformations. Consider using them to complete your SQL Query. See the ",(0,o.jsx)(n.a,{href:"https://github.com/dbt-labs/dbt-utils/tree/main/macros/sql",children:"dbt utils source code"})," for macro definitions."]}),"\n",(0,o.jsx)(n.h2,{id:"customize-the-interface",children:"Customize the interface"}),"\n",(0,o.jsx)(n.p,{children:"Customizing your gem involves editing the code for specific classes, functions, and methods."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Gem builder customize interface",src:t(50803).A+"",width:"2812",height:"898"})}),"\n",(0,o.jsx)(n.p,{children:"The code starts with a list of imports from the Prophecy codebase to help get you started."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"\nfrom dataclasses import dataclass\n\n\nfrom collections import defaultdict\nfrom prophecy.cb.sql.Component import *\nfrom prophecy.cb.sql.MacroBuilderBase import *\nfrom prophecy.cb.ui.uispec import *\n\n"})}),"\n",(0,o.jsx)(n.p,{children:"The following sections describe how to make edits to your gem's interface."}),"\n",(0,o.jsx)(n.h3,{id:"parent-class",children:"Parent Class"}),"\n",(0,o.jsx)(n.p,{children:"Every gem class needs to extend a parent class from which it inherits the representation of the overall gem. This includes the UI and the logic."}),"\n",(0,o.jsxs)(n.p,{children:["You can determine the name and category of your gem, which are ",(0,o.jsx)(n.code,{children:'"macro_gem"'})," and ",(0,o.jsx)(n.code,{children:'"Custom"'})," in this template."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:'\nclass macro_gem(MacroSpec):\n    name: str = "macro_gem"\n    projectName: str = "snowflake_docs"\n    category: str = "Custom"\n\n'})}),"\n",(0,o.jsx)(n.h3,{id:"properties-classes",children:"Properties Classes"}),"\n",(0,o.jsx)(n.p,{children:"There is one class that contains a list of the properties to be made available to the user for this particular gem. Think of these as all the values a user fills out within the template of this gem, or any other UI state that you need to maintain."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"A collection of input tables, represented as input ports (optional)."}),"\n",(0,o.jsx)(n.li,{children:"A configurable set of additional parameters through the dialog (optional)."}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["The content of these ",(0,o.jsx)(n.code,{children:"Properties"})," classes is persisted in JSON and stored in Git."]})}),"\n",(0,o.jsxs)(n.p,{children:["These properties can be ",(0,o.jsx)(n.strong,{children:"set"})," in the ",(0,o.jsx)(n.code,{children:"dialog"})," function by taking input from user-controlled UI elements.\nThe properties are then available for reading in the following functions:\n",(0,o.jsx)(n.code,{children:"validate"}),", ",(0,o.jsx)(n.code,{children:"onChange"}),", and ",(0,o.jsx)(n.code,{children:"apply"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"\n    @dataclass(frozen=True)\n    class macro_gemProperties(MacroProperties):\n        # properties for the component with default values\n        parameter1: str = \"'default_value_of_parameter1'\"\n\n"})}),"\n",(0,o.jsx)(n.p,{children:"Additional information on these functions are available in the following sections."}),"\n",(0,o.jsx)(n.h3,{id:"dialog-ui",children:"Dialog (UI)"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"dialog"})," function contains code specific to how the gem UI should look to the user."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Automatically generated based on parameters (default)."}),"\n",(0,o.jsx)(n.li,{children:"Custom dialogs using Python or visual configurations."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:'\n    def dialog(self) -> Dialog:\n        return Dialog("Macro").addElement(\n            ColumnsLayout(gap="1rem", height="100%")\n            .addColumn(\n                Ports(allowInputAddOrDelete=True),\n                "content"\n            )\n            .addColumn(\n                StackLayout()\n                .addElement(\n                    TextBox("Table Name")\n                    .bindPlaceholder("Configure table name")\n                    .bindProperty("parameter1")\n                )\n           )\n       )\n\n'})}),"\n",(0,o.jsx)(n.p,{children:"After defining a gem in the code editor, you can preview and test it. This feature directly renders the interface for the selected gem using a dummy schema, enabling you to configure and experiment with the gem\u2019s UI components. You can then finalize them by previewing the generated SQL code."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Gem builder preview",src:t(95030).A+"",width:"2640",height:"1518"})}),"\n",(0,o.jsx)(n.p,{children:"There are various UI components that can be defined for custom gems such as scroll boxes, tabs, and buttons. These UI components can be grouped together in various types of panels to create a custom user experience when using the gem."}),"\n",(0,o.jsx)(n.p,{children:"After the Dialog object is defined, it's serialized as JSON, sent to the UI, and rendered there."}),"\n",(0,o.jsxs)(n.p,{children:["Depending on what kind of gem is being created, a ",(0,o.jsx)(n.code,{children:"Dialog"})," needs to be defined."]}),"\n",(0,o.jsx)(n.h4,{id:"column-selector",children:"Column selector"}),"\n",(0,o.jsxs)(n.p,{children:["You can use the column selector property if you want to select the columns from UI and then highlight the used columns using the ",(0,o.jsx)(n.code,{children:"onChange"})," function. The function defines the changes that you want to apply to the gem properties once changes have been made from the UI. For example, in the reformat component provided by Prophecy, based on the columns used on the expression table ",(0,o.jsx)(n.code,{children:"onChange"})," highlights the columns used on the input schema."]}),"\n",(0,o.jsx)(n.p,{children:"It is recommended to try out this dialog code in gem builder UI and see how each of these elements looks in UI."}),"\n",(0,o.jsx)(n.h3,{id:"validation",children:"Validation"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"validate"})," method performs validation checks so that in the case where there's any issue with any inputs provided for the user an Error can be displayed. You can add any validation on your properties."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Optional functions such as ",(0,o.jsx)(n.code,{children:"onChange"})," or ",(0,o.jsx)(n.code,{children:"validate"}),", which are executed on user actions. They can dynamically alter the state of how the gem works based on the user input."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"\n    def validate(self, context: SqlContext, component: Component) -> List[Diagnostic]:\n        # Validate the component's state\n        return super().validate(context,component)\n\n"})}),"\n",(0,o.jsx)(n.h3,{id:"state-changes",children:"State Changes"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"onChange"})," method is given for the UI State transformations. You are given both the previous and the new incoming state and can merge or modify the state as needed. The properties of the gem are also accessible to this function, so functions like selecting columns, etc. are possible to add from here."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"\n    def onChange(self, context: SqlContext, oldState: Component, newState: Component) -> Component:\n        # Handle changes in the component's state and return the new state\n        return newState\n\n"})}),"\n",(0,o.jsx)(n.h3,{id:"apply",children:"Apply"}),"\n",(0,o.jsxs)(n.p,{children:["The code for invoking the macro with the gem logic is defined in the ",(0,o.jsx)(n.code,{children:"apply"})," function. Here the above User Defined properties are accessible using ",(0,o.jsx)(n.code,{children:"self.projectName.{self.name}"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"\n    def apply(self, props: macro_gemProperties) -> str:\n        # generate the actual macro call given the component's state\n        resolved_macro_name = f\"{self.projectName}.{self.name}\"\n        non_empty_param = \",\".join([param for param in [props.parameter1] if param != ''])\n        return f'{{{{ {resolved_macro_name}({non_empty_param}) }}}}'\n\n"})}),"\n",(0,o.jsx)(n.h3,{id:"macro-properties",children:"Macro Properties"}),"\n",(0,o.jsxs)(n.p,{children:["When Prophecy parses a macro invocation, it represents a macro definition in a default state. ",(0,o.jsx)(n.code,{children:"MacroProperties"})," consists of the following:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"macro name"}),"\n",(0,o.jsx)(n.li,{children:"project name"}),"\n",(0,o.jsx)(n.li,{children:"parameters used"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"For example, if macro invocation is"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"dbt_utils.deduplicate(relation, partition_by, order_by)`\n"})}),"\n",(0,o.jsx)(n.p,{children:"then Prophecy parses it into an object such as the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:'MacroParameter(value="relation"),\nMacroParameter(value="partition_by"),\nMacroParameter(value="relation")\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This object now has to be converted into the gem state defined by the user. This logic is defined in ",(0,o.jsx)(n.code,{children:"loadProperties"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"\n    def loadProperties(self, properties: MacroProperties) -> PropertiesType:\n        # load the component's state given default macro property representation\n        parametersMap = self.convertToParameterMap(properties.parameters)\n        return macro_gem.macro_gemProperties(\n            parameter1=parametersMap.get('parameter1')\n        )\n\n    def unloadProperties(self, properties: PropertiesType) -> MacroProperties:\n        # convert component's state to default macro property representation\n        return BasicMacroProperties(\n            macroName=self.name,\n            projectName=self.projectName,\n            parameters=[\n                MacroParameter(\"parameter1\", properties.parameter1)\n            ],\n        )\n\n"})}),"\n",(0,o.jsx)(n.p,{children:"Similarly the opposite case where this enhanced UX is not available due to some reason, Prophecy needs to be able to render the default macro UI. For this purpose you must define the logic to convert the gem properties back to the default macro properties object which Prophecy understands."}),"\n",(0,o.jsx)(n.h2,{id:"preview-your-gem",children:"Preview your gem"}),"\n",(0,o.jsx)(n.p,{children:"You can preview the component in the gem builder to see how it looks. You can modify the properties and then save it to preview the generated code which will eventually run on your cluster."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Gem builder preview",src:t(95030).A+"",width:"2640",height:"1518"})}),"\n",(0,o.jsx)(n.p,{children:"Certain gems may generate SQL code that isn\u2019t compatible with a specific fabric provider, rendering the gem unusable and guaranteeing failure if attempted. This issue arises because some dbt macros are designed to support only specific warehouse types."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Custom gem logic can be shared with other users within the Team and Organization. Navigate to the gem listing to review Prophecy-defined and User-defined gems. When your gem is ready, publish it so that it is available to use in other models."})}),"\n",(0,o.jsx)(n.h2,{id:"example-code",children:"Example code"}),"\n",(0,o.jsxs)(n.p,{children:["This is an example specification of a gem for an existing deduplicate macro from ",(0,o.jsx)(n.code,{children:"dbt utils"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:'from dataclasses import dataclass\n\nfrom collections import defaultdict\nfrom prophecy.cb.sql.MacroBuilderBase import *\nfrom prophecy.cb.ui.uispec import *\n\n\nclass Deduplicate(MacroSpec):\n    name: str = "deduplicate"\n    projectName: str = "dbt_utils"\n    category: str = "Custom"\n\n\n    @dataclass(frozen=True)\n    class DeduplicateProperties(MacroProperties):\n        tableName: str = \'\'\n        partitionBy: str = \'\'\n        orderBy: str = \'\'\n\n    def dialog(self) -> Dialog:\n        return Dialog("Macro") \\\n            .addElement(\n            ColumnsLayout(gap="1rem", height="100%")\n            .addColumn(\n                Ports(allowInputAddOrDelete=True),\n                "content"\n            )\n            .addColumn(\n                StackLayout()\n                .addElement(\n                    TextBox("Table Name")\n                    .bindPlaceholder("Configure table name")\n                    .bindProperty("tableName")\n                )\n                .addElement(\n                    TextBox("Deduplicate Columns")\n                    .bindPlaceholder("Select a column to deduplicate on")\n                    .bindProperty("partitionBy")\n                )\n                .addElement(\n                    TextBox("Rows to keep logic")\n                    .bindPlaceholder("Select row on the basis of ordering a particular column")\n                    .bindProperty("orderBy")\n                )\n            )\n        )\n\n    def validate(self, context: SqlContext, component: Component) -> List[Diagnostic]:\n        diagnostics = []\n        macroProjectMap = self.getMacroMap(context)\n        projectName = self.projectName if self.projectName != "" else context.projectName\n        if projectName not in macroProjectMap:\n            diagnostics.append(Diagnostic(\n                "properties.projectName",\n                f"Project name {self.projectName} doesn\'t exist. Current Project is ${context.projectName}",\n                SeverityLevelEnum.Error\n            ))\n        else:\n            macroDef: Optional[MacroDefFromSqlSource] = self.getMacro(self.name, projectName,\n                                                                      context)\n            if macroDef is None:\n                diagnostics.append(Diagnostic(\n                    "properties.macroName",\n                    f"Macro {self.name} doesn\'t exist",\n                    SeverityLevelEnum.Error\n                ))\n            else:\n                if component.properties.tableName == \'\':\n                    diagnostics.append(\n                        Diagnostic(\n                            f"properties.tableName",\n                            f"Please define table name",\n                            SeverityLevelEnum.Error\n                        )\n                    )\n                if component.properties.partitionBy == \'\':\n                    diagnostics.append(\n                        Diagnostic(\n                            f"properties.partitionBy",\n                            f"Please define partition by column",\n                            SeverityLevelEnum.Error\n                        )\n                    )\n                if component.properties.orderBy == \'\':\n                    diagnostics.append(\n                        Diagnostic(\n                            f"properties.orderBy",\n                            f"Please define order by by column",\n                            SeverityLevelEnum.Error\n                        )\n                    )\n        return diagnostics\n\n    def onChange(self, context: SqlContext, oldState: Component, newState: Component) -> Component:\n        return newState\n\n    def apply(self, props: DeduplicateProperties) -> str:\n        if self.projectName != "":\n            resolved_macro_name = f"{self.projectName}.{self.name}"\n        else:\n            resolved_macro_name = self.name\n        non_empty_param = ",".join([param for param in [props.tableName, props.partitionBy, props.orderBy] if param != \'\'])\n        return f\'{{{{ {resolved_macro_name}({non_empty_param}) }}}}\'\n\n    def loadProperties(self, properties: MacroProperties) -> PropertiesType:\n        parametersMap = self.convertToParameterMap(properties.parameters)\n        return Deduplicate.DeduplicateProperties(\n            tableName=parametersMap.get(\'relation\'),\n            orderBy=parametersMap.get(\'order_by\'),\n            partitionBy=parametersMap.get(\'partition_by\')\n        )\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},95030:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/gem-builder-preview-cc724bfaed4ddf4cafbc6355ad04f1a7.png"}}]);