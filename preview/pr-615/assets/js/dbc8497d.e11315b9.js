"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[16980],{5190:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/create-gem-d0107e5e93d144bf8d774f79fe12d3d2.png"},7125:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/8-gm-da282223983543be9e4f5e20c00d32a9.png"},19450:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/UI-c82484a974682d29d35b5e3abd975cf5.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(96540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}},65537:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),i=t(18215),o=t(65627),s=t(56347),a=t(50372),l=t(30604),c=t(11861),d=t(78749);function p(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function u(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(i.location.search);n.set(o,e),i.replace({...i.location,search:n.toString()})}),[o,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,o=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,p]=u({queryString:t,groupId:i}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,o]=(0,d.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:i}),x=(()=>{const e=c??g;return m({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{x&&l(x)}),[x]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),f(e)}),[p,f,o]),tabValues:o}}var f=t(9136);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function y(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),i=a[t].value;i!==r&&(c(n),s(i))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{l.push(e)},onKeyDown:p,onClick:d,...o,className:(0,i.A)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function b(e){const n=g(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,j.jsx)(y,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,j.jsx)(b,{...e,children:p(e.children)},String(n))}},71178:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/9-gm-8f4862231b0b1999e29c84f0471a6b8e.png"},75264:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"extensibility/gem-builder/spark-gem-builder","title":"Gem Builder for Spark","description":"Build Spark gems in Python or Scala","source":"@site/docs/extensibility/gem-builder/spark-gem-builder.md","sourceDirName":"extensibility/gem-builder","slug":"/engineers/gem-builder","permalink":"/prophecy-docs-staging/preview/pr-615/engineers/gem-builder","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"gem builder","permalink":"/prophecy-docs-staging/preview/pr-615/tags/gem-builder"}],"version":"current","frontMatter":{"title":"Gem Builder for Spark","id":"spark-gem-builder","slug":"/engineers/gem-builder","description":"Build Spark gems in Python or Scala","tags":["gem builder"]},"sidebar":"mySidebar","previous":{"title":"Gem Builder for SQL","permalink":"/prophecy-docs-staging/preview/pr-615/analysts/gem-builder"},"next":{"title":"Reference for Spark","permalink":"/prophecy-docs-staging/preview/pr-615/engineers/gem-builder-reference"}}');var i=t(74848),o=t(28453),s=t(65537),a=t(79329);const l={title:"Gem Builder for Spark",id:"spark-gem-builder",slug:"/engineers/gem-builder",description:"Build Spark gems in Python or Scala",tags:["gem builder"]},c=void 0,d={},p=[{value:"Overview",id:"overview",level:2},{value:"Gem template",id:"gem-template",level:2},{value:"Tutorial",id:"tutorial",level:2},{value:"Create a gem",id:"create-a-gem",level:3},{value:"Update header",id:"update-header",level:3},{value:"Extend parent class",id:"extend-parent-class",level:3},{value:"Populate properties class",id:"populate-properties-class",level:3},{value:"Create UI components",id:"create-ui-components",level:3},{value:"Validate user input",id:"validate-user-input",level:3},{value:"Define state changes",id:"define-state-changes",level:3},{value:"Serialize or deserialize",id:"serialize-or-deserialize",level:3},{value:"Define Spark logic",id:"define-spark-logic",level:3},{value:"Extend functionality",id:"extend-functionality",level:2},{value:"Extend UI",id:"extend-ui",level:3},{value:"Extend the Component Code with functions",id:"extend-the-component-code-with-functions",level:3},{value:"Troubleshoot errors",id:"troubleshoot-errors",level:2},{value:"Best Practice",id:"best-practice",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-615/gems",children:"Gems"})," are visually-packaged parcels of code that perform specific operations on data. While Prophecy provides many gems out of the box, Prophecy also lets you create your own gems! Not only can you create new gems, but you can also share them in the ",(0,i.jsx)(n.a,{href:"/engineers/package-hub",children:"Package Hub"})," or with selected teams."]}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Let's learn how to create a Spark gem. At a high level, this involves the following steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Create a Spark project in which you will create your custom gem."}),"\n",(0,i.jsx)(n.li,{children:"Add a gem to the Gems section of the project sidebar."}),"\n",(0,i.jsx)(n.li,{children:"Specify the name and type of gem that you want to create."}),"\n",(0,i.jsx)(n.li,{children:"Write your code specifications."}),"\n",(0,i.jsx)(n.li,{children:"Preview the rendered visual interface of your gem."}),"\n",(0,i.jsx)(n.li,{children:"Fill in some values and review the generated code."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If you plan to share these gems in a package, be aware that everything in the project (pipelines, subgraphs, jobs, etc.) will be part of the package, too."})}),"\n",(0,i.jsx)(n.p,{children:"Next, we will review these steps in greater detail."}),"\n",(0,i.jsx)(n.h2,{id:"gem-template",children:"Gem template"}),"\n",(0,i.jsxs)(n.p,{children:["Each type of gem will have a different code template that Prophecy provides. Let's review the template of a ",(0,i.jsx)(n.strong,{children:"transformation"})," gem."]}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(a.A,{value:"py",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:'from prophecy.cb.server.base.ComponentBuilderBase import *\nfrom pyspark.sql import *\nfrom pyspark.sql.functions import *\n\nfrom prophecy.cb.server.base import WorkflowContext\nfrom prophecy.cb.server.base.datatypes import SInt, SString\nfrom prophecy.cb.ui.uispec import *\n\n\nclass CustomLimit(ComponentSpec):\n    name: str = "CustomLimit"\n    category: str = "Transform"\n\n    def optimizeCode(self) -> bool:\n        # Return whether code optimization is enabled for this component\n        return True\n\n    @dataclass(frozen=True)\n    class CustomLimitProperties(ComponentProperties):\n        # properties for the component with default values\n        my_property: SString = SString("default value of my property")\n\n    def dialog(self) -> Dialog:\n        # Define the UI dialog structure for the component\n        return Dialog("CustomLimit")\n\n    def validate(self, context: WorkflowContext, component: Component[CustomLimitProperties]) -> List[Diagnostic]:\n        # Validate the component\'s state\n        return []\n\n    def onChange(self, context: WorkflowContext, oldState: Component[CustomLimitProperties], newState: Component[CustomLimitProperties]) -> Component[\n    CustomLimitProperties]:\n        # Handle changes in the component\'s state and return the new state\n        return newState\n\n\n    class CustomLimitCode(ComponentCode):\n        def __init__(self, newProps):\n            self.props: CustomLimit.CustomLimitProperties = newProps\n\n        def apply(self, spark: SparkSession, in0: DataFrame) -> DataFrame:\n            # This method contains logic used to generate the spark code from the given inputs.\n            return in0\n'})})}),(0,i.jsx)(a.A,{value:"Scala",label:"Scala",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:'\npackage prophecyioteam.helloworldscala.gems\n\nimport io.prophecy.gems._\nimport io.prophecy.gems.dataTypes._\nimport io.prophecy.gems.uiSpec._\nimport io.prophecy.gems.diagnostics._\nimport io.prophecy.gems.componentSpec._\nimport org.apache.spark.sql.{DataFrame, SparkSession}\nimport io.prophecy.gems.copilot._\nimport play.api.libs.json.{Format, OFormat, JsResult, JsValue, Json}\n\n\nclass CustomLimit extends ComponentSpec {\n\n  val name: String = "CustomLimit"\n  val category: String = "Transform"\n  type PropertiesType = CustomLimitProperties\n  override def optimizeCode: Boolean = true\n\n  case class CustomLimitProperties(\n    @Property("Property1")\n    property1: String = ""\n  ) extends ComponentProperties\n\n  implicit val CustomLimitPropertiesFormat: Format[CustomLimitProperties] = Json.format\n\n  def dialog: Dialog = Dialog("CustomLimit")\n\n  def validate(component: Component)(implicit context: WorkflowContext): List[Diagnostic] = Nil\n\n  def onChange(oldState: Component, newState: Component)(implicit context: WorkflowContext): Component = newState\n\n  def deserializeProperty(props: String): CustomLimitProperties = Json.parse(props).as[CustomLimitProperties]\n\n  def serializeProperty(props: CustomLimitProperties): String = Json.toJson(props).toString()\n\n  class CustomLimitCode(props: PropertiesType) extends ComponentCode {\n    def apply(spark: SparkSession, in: DataFrame): DataFrame = {\n      val out = in\n      out\n    }\n  }\n}\n'})})})]}),"\n",(0,i.jsx)(n.p,{children:"The template consists of the following components:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Component"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Parent class"}),(0,i.jsx)(n.td,{children:"Extends a parent class from which it inherits the representation of the overall gem."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Optimize function"}),(0,i.jsxs)(n.td,{children:["Enable or disable ",(0,i.jsx)(n.a,{href:"/engineers/optimization-functions",children:"code optimization"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Properties class"}),(0,i.jsx)(n.td,{children:"Contains a list of the properties to be made available to the user for this particular gem."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Dialog function"}),(0,i.jsx)(n.td,{children:"Contains code specific to how the gem UI should look to the user."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Serialize/deserialize function (",(0,i.jsx)(n.strong,{children:"Scala only"}),")"]}),(0,i.jsx)(n.td,{children:"Persists objects or exchanges data between different parts of a system"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Validate function"}),(0,i.jsx)(n.td,{children:"Recognizes errors with any inputs provided by the user."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"State change function"}),(0,i.jsx)(n.td,{children:"Defines UI state transformations."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Component code class"}),(0,i.jsx)(n.td,{children:"Contains the Spark code that needs to run on your Spark cluster."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"tutorial",children:"Tutorial"}),"\n",(0,i.jsx)(n.h3,{id:"create-a-gem",children:"Create a gem"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Create a Spark project in Python. The gem will inherit the project-level language."}),"\n",(0,i.jsxs)(n.li,{children:["Click on the ",(0,i.jsx)(n.strong,{children:"+"})," in the gems section of the project sidebar. This will appear on hover."]}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"Gem Name"})," field, write ",(0,i.jsx)(n.code,{children:"CustomLimit"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Choose ",(0,i.jsx)(n.strong,{children:"Transformation Gem"})," ",(0,i.jsx)(n.a,{href:"/engineers/gem-builder-reference/#mode",children:"mode"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Select the ",(0,i.jsx)(n.strong,{children:"Transform"})," category."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Create Gem"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Create gem",src:t(5190).A+"",width:"2620",height:"1508"})}),"\n",(0,i.jsx)(n.p,{children:"Next, we'll add custom code the to code template. The best way to learn how to create new gems is to review the code of existing gems. In this tutorial, we will base our custom gem on the Limit gem. Afterward, you can extend the custom gem logic further."}),"\n",(0,i.jsx)(n.h3,{id:"update-header",children:"Update header"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:['For gems written in Scala, be sure to update the package to reflect the project name. For example, if the gem is in a "Framework" project, use the statement ',(0,i.jsx)(n.code,{children:"package platform.framework.Gems"})]})}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(a.A,{value:"py",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"from prophecy.cb.server.base.ComponentBuilderBase import *\nfrom pyspark.sql import *\nfrom pyspark.sql.functions import *\n\nfrom prophecy.cb.server.base.datatypes import SInt\nfrom prophecy.cb.ui.uispec import *\nfrom prophecy.cb.server.base import WorkflowContext\n\n"})})}),(0,i.jsx)(a.A,{value:"Scala",label:"Scala",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"\npackage platform.< project name >.Gems\nimport io.prophecy.Gems._\nimport io.prophecy.Gems.componentSpec._\nimport io.prophecy.Gems.dataTypes._\nimport io.prophecy.Gems.diagnostics._\nimport io.prophecy.Gems.uiSpec._\nimport org.apache.spark.sql.{DataFrame, SparkSession}\nimport play.api.libs.json.{Format, Json}\n\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"extend-parent-class",children:"Extend parent class"}),"\n",(0,i.jsx)(n.p,{children:"Every gem class needs to extend a parent class from which it inherits the representation of the overall gem. This includes the UI and the logic. For transform gems, you need to extend ComponentSpec ."}),"\n",(0,i.jsx)(n.p,{children:'Next provide the name and category of your gem, "Limit" and "Transform" in this example.'}),"\n",(0,i.jsx)(n.p,{children:"Another thing to note here is optimizeCode. This flag can be set to True or False value depending on whether we want the Prophecy Optimizer to run on this code to simplify it. In most cases, it's best to leave this value as True."}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(a.A,{value:"py",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:'class Limit(ComponentSpec):\n    name: str = "Limit"\n    category: str = "Transform"\n    GemDescription: str = "Limits the number of rows in the output"\n    docUrl: str = "https://docs.prophecy.io/Spark/Gems/transform/limit/"\n\n    def optimizeCode(self) -> bool:\n        return True\n\n    @dataclass(frozen=True)\n\n'})})}),(0,i.jsx)(a.A,{value:"Scala",label:"Scala",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:'\nclass Limit extends ComponentSpec {\n\n  val name: String = "Limit"\n  val category: String = "Transform"\n  val GemDescription: String = "Limits the number of rows in the input data"\n  val docUrl: String = "https://docs.prophecy.io/Spark/Gems/transform/limit/"\n\n  type PropertiesType = LimitProperties\n  override def optimizeCode: Boolean = true\n  ...\n'})})})]}),"\n",(0,i.jsxs)(n.p,{children:["For our CustomLimit gem, we can start with the same code as the Limit gem and change the ",(0,i.jsx)(n.code,{children:"class"})," name and the ",(0,i.jsx)(n.code,{children:"val"})," name."]}),"\n",(0,i.jsx)(n.h3,{id:"populate-properties-class",children:"Populate properties class"}),"\n",(0,i.jsx)(n.p,{children:"There is one class (seen here as LimitProperties) that contains a list of the properties to be made available to the user for this particular Gem. Think of these as all the values a user fills out within the interface of this Gem, or any other UI state that you need to maintain (seen here as limit)."}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"The content of these Properties classes is persisted in JSON and stored in Git."})}),"\n",(0,i.jsx)(n.p,{children:"These properties are available in validate, onChange and apply and can be set from dialog, functions."}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(a.A,{value:"py",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:'    class LimitProperties(ComponentProperties):\n        limit: SInt = SInt("10")\n\n'})})}),(0,i.jsx)(a.A,{value:"Scala",label:"Scala",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:'\n  case class LimitProperties(\n    @Property("Limit", "Number of rows to limit the incoming DataFrame to")\n    limit: SInt = SInt("10")\n  ) extends ComponentProperties\n\n'})})})]}),"\n",(0,i.jsx)(n.p,{children:"For our CustomLimit gem, we can take the same case class as the Limit gem, maybe changing the default limit value."}),"\n",(0,i.jsx)(n.p,{children:"Now let\u2019s take a look at the methods for the UI gem component."}),"\n",(0,i.jsx)(n.h3,{id:"create-ui-components",children:"Create UI components"}),"\n",(0,i.jsx)(n.p,{children:"The dialog function contains code specific to how the gem UI should look to the user."}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(a.A,{value:"py",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:' def dialog(self) -> Dialog:\n        return Dialog("Limit").addElement(\n            ColumnsLayout(gap="1rem", height="100%")\n                .addColumn(PortSchemaTabs().importSchema(), "2fr")\n                .addColumn(\n                ExpressionBox("Limit")\n                    .bindPlaceholder("10")\n                    .bindProperty("limit")\n                    .withFrontEndLanguage(),\n                "5fr"\n            )\n        )\n\n\n'})})}),(0,i.jsx)(a.A,{value:"Scala",label:"Scala",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:' def dialog: Dialog = Dialog("Limit")\n    .addElement(\n      ColumnsLayout(gap = Some("1rem"), height = Some("100%"))\n        .addColumn(PortSchemaTabs().importSchema(), "2fr")\n        .addColumn(\n          ExpressionBox("Limit")\n            .bindProperty("limit")\n            .bindPlaceholder("10")\n            .withFrontEndLanguage,\n          "5fr"\n        )\n    )\n'})})})]}),"\n",(0,i.jsxs)(n.p,{children:["The above Dialog function in the limit gem is rendered on the UI like this:\n",(0,i.jsx)(n.img,{alt:"UI",src:t(19450).A+"",width:"1838",height:"1060"})]}),"\n",(0,i.jsx)(n.p,{children:"There are various UI components that can be defined for custom gems such as scroll boxes, tabs, buttons, etc."}),"\n",(0,i.jsx)(n.p,{children:"These UI components can be grouped together in various types of panels to create a custom user experience when using the gem. After the Dialog object is defined, it's serialized as JSON, sent to the UI, and rendered there."}),"\n",(0,i.jsx)(n.p,{children:"Depending on what kind of gem is being created, either a Dialog or a DatasetDialog needs to be defined. See Transformation vs DatasetFormat gems for details."}),"\n",(0,i.jsx)(n.p,{children:"Take a look through the gems inside SparkBasicsScala and SparkBasicsPython projects to for more example dialog methods."}),"\n",(0,i.jsx)(n.h3,{id:"validate-user-input",children:"Validate user input"}),"\n",(0,i.jsx)(n.p,{children:"The validate method performs validation checks so that in the case where there's any issue with any inputs provided for the user an Error can be displayed. In our example case the Limit condition must be an integer within a defined range. Similarly, you can add any validation on your properties."}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(a.A,{value:"py",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:' def validate(self, context: WorkflowContext, component: Component[LimitProperties]) -> List[Diagnostic]:\n        diagnostics = []\n        limitDiagMsg = "Limit has to be an integer between [0, (2**31)-1]"\n        if component.properties.limit.diagnosticMessages is not None and len(component.properties.limit.diagnosticMessages) > 0:\n            for message in component.properties.limit.diagnosticMessages:\n                diagnostics.append(Diagnostic("properties.limit", message, SeverityLevelEnum.Error))\n        else:\n            resolved = component.properties.limit.value\n            if resolved <= 0:\n                diagnostics.append(Diagnostic("properties.limit", limitDiagMsg, SeverityLevelEnum.Error))\n            else:\n                pass\n        return diagnostics\n'})})}),(0,i.jsx)(a.A,{value:"Scala",label:"Scala",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:' def validate(component: Component)(implicit context: WorkflowContext): List[Diagnostic] = {\n    import Scala.collection.mutable.ListBuffer\n\n    val diagnostics = ListBuffer[Diagnostic]()\n\n    val (diag, limit) = (component.properties.limit.diagnostics, component.properties.limit.value)\n    diagnostics ++= diag\n\n    val limitDiagMsg = "Limit has to be an integer between [0, (2**31)-1]"\n    if (limit.isDefined) {\n      if (limit.get < 0)\n        diagnostics += Diagnostic("properties.limit", limitDiagMsg, SeverityLevel.Error)\n    }\n    diagnostics.toList\n  }\n\n'})})})]}),"\n",(0,i.jsx)(n.h3,{id:"define-state-changes",children:"Define state changes"}),"\n",(0,i.jsx)(n.p,{children:"The onChange method is given for the UI State transformations. You are given both the previous and the new incoming state and can merge or modify the state as needed. The properties of the gem are also accessible to this function, so functions like selecting columns, etc. are possible to add from here."}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(a.A,{value:"py",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"    def onChange(self, context: WorkflowContext, oldState: Component[LimitProperties], newState: Component[LimitProperties]) -> Component[\n        LimitProperties]:\n        return newState\n"})})}),(0,i.jsx)(a.A,{value:"Scala",label:"Scala",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"  def onChange(oldState: Component, newState: Component)(implicit context: WorkflowContext): Component = newState\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"serialize-or-deserialize",children:"Serialize or deserialize"}),"\n",(0,i.jsxs)(n.p,{children:["Serialize and deserialize methods in Scala are now open source and exposed to the user, so you could extend your own serializer classes if desired, using Play JSON ",(0,i.jsx)(n.a,{href:"https://www.playframework.com/documentation/2.8.x/ScalaJson",children:"library"})," or any other format."]}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(a.A,{value:"py",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"< not applicable for Python >\n"})})}),(0,i.jsx)(a.A,{value:"Scala",label:"Scala",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"\n override def deserializeProperty(props: String): PropertiesType = Json.parse(props).as[PropertiesType]\n\n  override def serializeProperty(props: PropertiesType): String = Json.stringify(Json.toJson(props))\n\n"})})})]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"For Scala, this snippet binds the UI Properties to the case class:"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"(props: testProperties): String = Json.toJson(props).toString()"})})]}),"\n",(0,i.jsx)(n.h3,{id:"define-spark-logic",children:"Define Spark logic"}),"\n",(0,i.jsx)(n.p,{children:"The last class used here is LimitCode which is inherited from ComponentCode class. This class contains the actual Spark code that needs to run on your Spark cluster. The Spark code for the gem logic is defined in the apply function. Input/Output of apply method can only be DataFrame or list of DataFrames or empty. For example, we are calling the .limit() method in this example in the apply function."}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(a.A,{value:"py",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"\n    class LimitCode(ComponentCode):\n        def __init__(self, newProps):\n            self.props: Limit.LimitProperties = newProps\n\n        def apply(self, spark: SparkSession, in0: DataFrame) -> DataFrame:\n            return in0.limit(self.props.limit.value)\n\n"})})}),(0,i.jsx)(a.A,{value:"Scala",label:"Scala",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"class LimitCode(props: PropertiesType) extends ComponentCode {\n\n    def apply(spark: SparkSession, in: DataFrame): DataFrame = {\n      val out = in.limit(props.limit)\n      out\n    }\n\n  }\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:"You can go ahead and preview the component to see how it looks. Note some gem examples have functions defined within the apply method."}),"\n",(0,i.jsx)(n.p,{children:"That\u2019s all the code for our example Transformation, the Limit gem. We walked through the package and import statements, parent class, and properties class. We explored the required methods dialog, validation, onChange, (de)serializeProperty. Finally we saw the Limit gem\u2019s component code. Now we have a basic understanding of the components needed for any Transformation gem."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"If you are using an existing gem as a guide to creating your new gem, you will need to change the following at a minimum: ComponentSpec, ComponentProperties, and ComponentCode."})}),"\n",(0,i.jsx)(n.h2,{id:"extend-functionality",children:"Extend functionality"}),"\n",(0,i.jsx)(n.p,{children:"Now for the fun part! We understand a Transform example, and now we want to explore extending to our custom gem needs. There are several ways to extend your custom gem."}),"\n",(0,i.jsx)(n.p,{children:"Looking to craft or adjust a UI element for your custom gem? Get inspiration from the existing gems. Find a gem that has a UI element you want to use - like ColumnsLayout - and use that gem\u2019s code."}),"\n",(0,i.jsx)(n.p,{children:"Looking to supply your own function for your custom gem? Add your function in the ComponentCode\u2019s apply method."}),"\n",(0,i.jsx)(n.p,{children:"Looking to read or write to a data format beyond the (filetypes, warehouses, and catalog) provided out of the box? GemBuilder is not just for Transformations. Design a new DatasetFormat with Gem Builder using some modifications from the Transformation example."}),"\n",(0,i.jsx)(n.h3,{id:"extend-ui",children:"Extend UI"}),"\n",(0,i.jsx)(n.p,{children:"Let\u2019s see how to use the ColumnsLayout UI element in detail:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"8",src:t(7125).A+"",width:"2880",height:"1084"}),"\nOpen the ",(0,i.jsx)(n.strong,{children:"(1) SparkBasics"})," package dependency for Python or Scala. Explore and scroll to find a gem, e.g. ",(0,i.jsx)(n.strong,{children:"(2) OrderBy"})," with the desired visual component, in this case ColumnsLayout. Find the ",(0,i.jsx)(n.strong,{children:"(3) relevant code"})," for the visual element and click ",(0,i.jsx)(n.strong,{children:"(4) Preview"})," to see how this visual element is rendered. Try it out! Click on the ",(0,i.jsx)(n.strong,{children:"(5)customer_id and email"})," columns, and note these columns now ",(0,i.jsx)(n.strong,{children:"(6) appear"})," in the Order Columns list."]}),"\n",(0,i.jsx)(n.p,{children:"If you like the column layout, then add the ColumnsLayout element to your custom gem. Each time you edit the code, you can click \u201cPreview\u201d to test the change in the UI."}),"\n",(0,i.jsx)(n.h3,{id:"extend-the-component-code-with-functions",children:"Extend the Component Code with functions"}),"\n",(0,i.jsx)(n.p,{children:"The ComponentCode contains the actual Spark code that needs to run on your Spark cluster. Functions are supported inside the apply method; just define and call the function."}),"\n",(0,i.jsxs)(n.p,{children:["For example, the existing Filter ComponentCode can be ",(0,i.jsx)(n.strong,{children:"(1) edited"})," by adding the withColumn function:\n",(0,i.jsx)(n.img,{alt:"9",src:t(71178).A+"",width:"2880",height:"1084"}),"\nClicking ",(0,i.jsx)(n.strong,{children:"(2) Preview"})," will allow you to view the gem\u2019s ",(0,i.jsx)(n.strong,{children:"(3) UI"}),". Clicking ",(0,i.jsx)(n.strong,{children:"(4) Preview Code"})," will allow you to view the gem\u2019s ",(0,i.jsx)(n.strong,{children:"(5) code"})," together with the ",(0,i.jsx)(n.strong,{children:"(3) UI"}),", facilitating iteration. See the code samples below in Scala."]}),"\n",(0,i.jsx)(n.p,{children:"filter ComponentCode:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  class FilterCode(props: PropertiesType)(implicit context: WorkflowContext) extends ComponentCode {\n\n    def apply(spark: SparkSession, in: DataFrame): DataFrame = {\n      val out = in.filter(props.condition.column)\n      out\n    }\n\n  }\n"})}),"\n",(0,i.jsx)(n.p,{children:"filter ComponentCode with the added withColumn function:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'  class FilterCode(props: PropertiesType)(implicit context: WorkflowContext) extends ComponentCode {\n\n    def apply(spark: SparkSession, in: DataFrame): DataFrame = {\n      import org.apache.spark.sql.functions._\n\n      def func(df: DataFrame): DataFrame = {\n        df.withColumn("test_col", lit(123))\n          .where("1 == 1")\n      }\n\n      val out = in.filter(props.condition.column)\n      func(out)\n    }\n\n  }\n'})}),"\n",(0,i.jsx)(n.h2,{id:"troubleshoot-errors",children:"Troubleshoot errors"}),"\n",(0,i.jsx)(n.p,{children:"If there is an error in your code, your gem preview might not render correctly."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"5",src:t(83070).A+"",width:"2880",height:"1084"}),"\nIf there is a ",(0,i.jsx)(n.strong,{children:"(1) typo / error"})," in a required method (e.g. dialog1 instead of dialog), Prophecy will direct your attention to a particular line of code."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.strong,{children:"(2) underlined code"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Notice a ",(0,i.jsx)(n.strong,{children:"(3) detailed error message"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"(4) Preview"})," to see how the gem will look as rendered in the UI."]}),"\n",(0,i.jsxs)(n.li,{children:["If a value is incorrect, the gem will not be able to be parsed, and a very clear error will appear ",(0,i.jsx)(n.strong,{children:"(5) here"})," as well."]}),"\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.strong,{children:"(6) Errors"})," button to see the ",(0,i.jsx)(n.strong,{children:"(7) full error message"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"\u201cThe gem specification could not be parsed\u201d means that there\u2019s an error in one or more required methods, classes, or properties. These components could not be analyzed and/or converted into the gem UI."})}),"\n",(0,i.jsx)(n.h2,{id:"best-practice",children:"Best Practice"}),"\n",(0,i.jsxs)(n.p,{children:["When possible, use the ",(0,i.jsx)(n.code,{children:"set()"})," operation, and avoid ",(0,i.jsx)(n.code,{children:"for"})," loops. ",(0,i.jsx)(n.code,{children:"set()"})," operations typically have a better average computational complexity than a ",(0,i.jsx)(n.code,{children:"list"}),", which makes them more efficient."]}),"\n",(0,i.jsxs)(n.p,{children:["This is especially helpful when you operate on the ",(0,i.jsx)(n.em,{children:"columns"})," of wide tables, as this scenario can slow down the Prophecy UI."]}),"\n",(0,i.jsx)(n.h2,{id:"whats-next",children:"What's next"}),"\n",(0,i.jsxs)(n.p,{children:["Now that you know how to create Spark gems, have a look at how to ",(0,i.jsx)(n.a,{href:"/prophecy-docs-staging/preview/pr-615/analysts/gem-builder",children:"create custom SQL gems"}),"."]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},79329:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(18215);const i={tabItem:"tabItem_Ymn6"};var o=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:t,children:n})}},83070:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/5-gm-eda8b6494a1b11b6abe7d1ae82b1b492.png"}}]);