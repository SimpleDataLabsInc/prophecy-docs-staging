"use strict";(self.webpackChunkdocs_4=self.webpackChunkdocs_4||[]).push([[10096],{352:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>d,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"type":"mdx","permalink":"/prophecy-docs-staging/preview/pr-602/mdapi/enums","source":"@site/src/pages/mdapi/enums.md","title":"Prophecy Metadata API Enums","description":"Metadata API Enums","frontMatter":{"title":"Prophecy Metadata API Enums","id":"mdapi-enums","description":"Metadata API Enums","tags":[]},"unlisted":false}');var r=t(74848),o=t(28453);const d={title:"Prophecy Metadata API Enums",id:"mdapi-enums",description:"Metadata API Enums",tags:[]},a=void 0,s={},l=[{value:"ExternalGitProviderType",id:"externalgitprovidertype",level:2},{value:"BackEndCodeLanguage",id:"backendcodelanguage",level:2},{value:"WorkflowMode",id:"workflowmode",level:2},{value:"BuildSystem",id:"buildsystem",level:2},{value:"MergeStatus",id:"mergestatus",level:2},{value:"AspectKind",id:"aspectkind",level:2},{value:"SectionType",id:"sectiontype",level:2},{value:"ItemSelectionType",id:"itemselectiontype",level:2},{value:"DatasetType",id:"datasettype",level:2},{value:"EntityKind",id:"entitykind",level:2},{value:"CommitLogEntityMutationType",id:"commitlogentitymutationtype",level:2},{value:"ForkMode",id:"forkmode",level:2},{value:"ForkType",id:"forktype",level:2},{value:"Role",id:"role",level:2},{value:"ResolutionStrategy",id:"resolutionstrategy",level:2},{value:"RemoteType",id:"remotetype",level:2},{value:"SyncMode",id:"syncmode",level:2},{value:"UserAccountType",id:"useraccounttype",level:2},{value:"UserManagedType",id:"usermanagedtype",level:2},{value:"Scheduler",id:"scheduler",level:2},{value:"CloudProvider",id:"cloudprovider",level:2},{value:"Status",id:"status",level:2},{value:"TeamKind",id:"teamkind",level:2}];function c(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"externalgitprovidertype",children:"ExternalGitProviderType"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"enum ExternalGitProviderType {\n    Github\n    GithubEnterprise\n    AzureDevOps\n    BitBucket\n    GitLab\n    GitLabEnterprise\n    Other\n    ProphecyManaged\n    Unknown\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"backendcodelanguage",children:"BackEndCodeLanguage"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"enum BackEndCodeLanguage {\n    scala\n    python\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"workflowmode",children:"WorkflowMode"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"enum WorkflowMode {\n    batch\n    stream\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"buildsystem",children:"BuildSystem"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"enum BuildSystem {\n    maven\n    wheel\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"mergestatus",children:"MergeStatus"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"enum MergeStatus {\n    Success\n    Conflicted\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"aspectkind",children:"AspectKind"}),"\n",(0,r.jsx)(e.p,{children:"Supported aspect types"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'enum AspectKind {\n    "List of Pipeline in job"\n    PipelinesInJob\n\n    "Dependency information"\n    Dependency\n\n    "Configuration content. Versioned."\n    Configuration\n\n    "Hive metastore related information."\n    Storage\n\n    "Airflow connections info"\n    AirflowConnectionInfo\n\n    "Unit test execution result information"\n    TestResult\n\n    "Dag Information "\n    DagInformation\n\n    "Job size information like resources etc."\n    JobSize\n\n    "Spark Provider Information for a fabric"\n    SparkProviderInfo\n\n    "Scheduler Provider Information for a fabric"\n    SchedulerProviderInfo\n\n    "Code content. Versioned."\n    Code\n\n    "Unit Tests. Versioned."\n    TestVisual\n\n    "Dataset schema information"\n    Schema\n\n    "Version information of Entity"\n    MigrationInfo\n\n    "Commit ids sorted by date for deploy option in scheduler"\n    ListCommits\n\n    "Git storage information like repo url etc."\n    GitStorage\n\n    "Git storage information like repo url etc. for Projects"\n    GitConfig\n\n    "General information like description"\n    Info\n\n    "Code dependency information"\n    CodeDeps\n\n    "Lineage Branch information"\n    LineageBranch\n\n    "Lineage"\n    Lineage\n\n    "Lineage Release information"\n    LineageRelease\n\n    "Lineage Commit information"\n    LineageCommit\n\n    "Cluster information"\n    ClusterInfo\n\n    "User fabric info for all fabrics"\n    UserAllFabricInfo\n\n    "Job Deployment Airflow Info"\n    JobDeploymentAirflowInfo\n\n    "ExpressionInfo"\n    ExpressionsInfo\n\n    "Databricks Deployment"\n    DatabricksDeployment\n\n    "Run Info"\n    RunInfo\n\n    "Transpiler Import Input Info"\n    InputInfo\n\n    "Transpiler Import Output Pipeline Info"\n    OutputInfo\n\n    "Snapshot of entity at a point in time"\n    Snapshot\n\n    "Detailed information for datasets in Pipeline Runs"\n    DatasetDetails\n\n    "Interim content for a dataset"\n    Interim\n\n    "Partner Info aspect"\n    PartnerInfo\n\n    "Resolution Mode for library"\n    ResolutionModeInfo\n\n    "Admin level information for an entity"\n    AdminInfo\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"sectiontype",children:"SectionType"}),"\n",(0,r.jsx)(e.p,{children:"SelectionType"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'enum SectionType{\n    "EntityAndAspects"\n    EntityAndAspects\n\n    "Author"\n    Author\n\n    "Team"\n    Team\n\n    "Project"\n    Project\n\n    "Recency"\n    Recency\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"itemselectiontype",children:"ItemSelectionType"}),"\n",(0,r.jsx)(e.p,{children:"ItemSelectionType"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"enum ItemSelectionType {\n    AtMostOne\n    ExactlyOne\n    Many\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"datasettype",children:"DatasetType"}),"\n",(0,r.jsx)(e.p,{children:"Supported Dataset types"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"enum DatasetType {\n    File\n    Database\n    Stream\n    TestData\n    Warehouse\n    Table\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"entitykind",children:"EntityKind"}),"\n",(0,r.jsx)(e.p,{children:"Supported entity types"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'enum EntityKind {\n    "Deployment Entity"\n    Deployment\n\n    "Repository Entity"\n    Repository\n\n    "Team Entity"\n    Team\n\n    "Dataset Entity"\n    Dataset\n\n    "Schedule Entity - renamed to Job"\n    Schedule\n\n    "Job Entity"\n    Job\n\n    "PhysicalDataset Entity"\n    PhysicalDataset\n\n    "Workflow Entity - renamed to Pipeline"\n    Workflow\n\n    "Pipeline Entity"\n    Pipeline\n\n    "Project Entity"\n    Project\n\n    "Subgraph Entity"\n    Subgraph\n\n    "Configuration Entity"\n    Configuration\n\n    "PipelineConfigurations Entity"\n    PipelineConfigurations\n\n    "User Entity"\n    User\n\n    "Fabric Entity"\n    Fabric\n\n    "Library Entity"\n    Library\n\n    "Gem Entity"\n    Gem\n\n    "Udf Entity"\n    Udf\n\n    "Udaf Entity"\n    Udaf\n\n    "Expression Entity"\n    Expression\n\n    "Dependency Entity"\n    Dependency\n\n    "ProjectRelease Entity"\n    ProjectRelease\n\n    "JobRelease Entity"\n    JobRelease\n\n    "TranspilerImport Entity"\n    TranspilerImport\n\n    "Template Entity"\n    Template\n\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"commitlogentitymutationtype",children:"CommitLogEntityMutationType"}),"\n",(0,r.jsx)(e.p,{children:"Supported Commit Log Mutation Type"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'enum CommitLogEntityMutationType {\n    "New Mutation"\n    New\n\n    "Modified Mutation"\n    Modified\n\n    "Deleted Mutation"\n    Deleted\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"forkmode",children:"ForkMode"}),"\n",(0,r.jsx)(e.p,{children:"Forking Modes for Git Repo"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"enum ForkMode {\n    Multi\n    Single\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"forktype",children:"ForkType"}),"\n",(0,r.jsx)(e.p,{children:"Type of fork of the repository [Master / User]"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"enum ForkType {\n    Master\n    User\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"role",children:"Role"}),"\n",(0,r.jsx)(e.p,{children:"User role in team"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"enum Role{\n    owner,\n    admin,\n    member\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"resolutionstrategy",children:"ResolutionStrategy"}),"\n",(0,r.jsx)(e.p,{children:"Supported resolution types"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"enum ResolutionStrategy {\n    LeftBranch\n    RightBranch\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"remotetype",children:"RemoteType"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"enum RemoteType {\n    Local\n    Upstream\n    Origin\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"syncmode",children:"SyncMode"}),"\n",(0,r.jsx)(e.p,{children:"Project's Git Repos Syncing Modes"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"enum SyncMode {\n    External\n    Internal\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"useraccounttype",children:"UserAccountType"}),"\n",(0,r.jsx)(e.p,{children:"Type of User's Account"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'enum UserAccountType {\n    "Licensed Account for SaSS User"\n    CeLicenseAcquired\n\n    "The Default Account for User"\n    Enterprise\n\n    "A user coming from AWS"\n    AwsMarketplace\n\n    "A user coming from Azure"\n    AzureMarketplace\n\n    "Free Account for SaSS User"\n    CeFree\n\n    "A user coming from Databricks Partner Hub"\n    DatabricksPartner\n\n    "A user which is on Enterprise Trial"\n    EnterpriseTrial\n\n    "A user to manage Prophecy cluster"\n    ClusterAdmin\n\n    "A support user to manage Prophecy IDE"\n    Support\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"usermanagedtype",children:"UserManagedType"}),"\n",(0,r.jsx)(e.p,{children:"The user managed type"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'enum UserManagedType {\n    "The prophecy managed user type"\n    ProphecyManaged\n\n    "The LDAP managed user type"\n    Ldap\n\n    "The SAML managed user type"\n    Saml\n\n    "The AzureAD managed user type"\n    AzureAd\n\n    "The Google managed user type"\n    Google\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"scheduler",children:"Scheduler"}),"\n",(0,r.jsx)(e.p,{children:"Scheduler Enum"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'enum Scheduler {\n\n    "Amazon Managed Workflows for Apache Airflow"\n    MWAA\n\n    "Astronomer - Airflow"\n    Astronomer\n\n    "Databricks Jobs"\n    Databricks\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"cloudprovider",children:"CloudProvider"}),"\n",(0,r.jsx)(e.p,{children:"Cloud Provider Enum"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'enum CloudProvider {\n\n    "Amazon Web Services"\n    AWS\n\n    "Microsoft Azure"\n    Azure\n\n    "Google Cloud Provider"\n    GCP\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"status",children:"Status"}),"\n",(0,r.jsx)(e.p,{children:"Release Status enum"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'enum Status {\n\n    "Pending, Not Started"\n    Pending\n\n    "RUNNING"\n    Running\n\n    "Succeeded"\n    Succeeded\n\n    "Retrying"\n    Retrying\n\n    "Failed"\n    Failed\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"teamkind",children:"TeamKind"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"enum TeamKind {\n    ProphecyManaged,\n    IdpOrganizationWide,\n    IdpGroup\n}\n"})})]})}function p(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>d,x:()=>a});var i=t(96540);const r={},o=i.createContext(r);function d(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);